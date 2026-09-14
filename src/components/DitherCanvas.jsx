import { useEffect, useRef } from 'react';

// Ordered-dithering Bayer matrix (4x4)
const bayerMatrix = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

function getThreshold(x, y) {
  return bayerMatrix[y % 4][x % 4] / 16 - 0.5;
}

// One paint at most every FRAME_MS (about 30 frames a second). The wave
// advances by elapsed time, so the pace on screen does not depend on the
// frame budget.
const FRAME_MS = 33;
const WAVE_SPEED = 1.2; // radians per second (was 0.02 per 60fps frame)

export default function DitherCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    // The canvas fills the hero (position: absolute; inset 0 in index.css), so
    // it is sized to the hero's own box, not the viewport: on a phone the hero
    // grows to its content and the old window.innerHeight drew rows the
    // section clipped.
    const host = canvas.parentElement || document.body;
    const reduceMotion = window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : { matches: false };

    let width = 0;
    let height = 0;
    let time = 0;
    let frameId = 0;
    let lastPaint = 0;
    let running = false;
    let inView = true;

    function resize() {
      width = host.clientWidth || window.innerWidth;
      height = host.clientHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function paint() {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Coarser cells on a phone: a quarter the fill calls for the same look.
      const gridSize = width < 768 ? 8 : 6;
      const cols = Math.ceil(width / gridSize);
      const rows = Math.ceil(height / gridSize);

      const waveCenterY = rows / 2;
      const waveAmplitude = rows / 4;
      const frequency = 0.05;

      ctx.fillStyle = '#ffffff';
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const wave1 = Math.sin(x * frequency + time) * waveAmplitude;
          const wave2 = Math.cos(x * frequency * 0.5 - time) * (waveAmplitude * 0.5);
          const combinedWave = wave1 + wave2;

          const distFromWave = Math.abs(y - (waveCenterY + combinedWave));

          let intensity = Math.max(0, 1 - distFromWave / 15);
          intensity += (Math.random() - 0.5) * 0.1;

          const threshold = getThreshold(x, y);

          if (intensity + threshold > 0.5) {
            ctx.fillRect(x * gridSize, y * gridSize, gridSize - 1, gridSize - 1);
          }
        }
      }
    }

    function loop(now) {
      if (!running) return;
      const elapsed = now - lastPaint;
      if (elapsed >= FRAME_MS) {
        // Cap the step so a tab that was hidden for a minute does not jump.
        time += WAVE_SPEED * Math.min(elapsed, 100) / 1000;
        lastPaint = now;
        paint();
      }
      frameId = requestAnimationFrame(loop);
    }

    // Run only while the hero is on screen, the tab is visible, and the
    // reader has not asked for reduced motion. Otherwise the loop stops and
    // the main thread is free for the rest of the page.
    function shouldRun() {
      return inView && !document.hidden && !reduceMotion.matches;
    }

    function update() {
      const next = shouldRun();
      if (next && !running) {
        running = true;
        lastPaint = performance.now();
        frameId = requestAnimationFrame(loop);
      } else if (!next && running) {
        running = false;
        cancelAnimationFrame(frameId);
      }
    }

    function onResize() {
      resize();
      // Keep a correct still frame when the loop is stopped.
      if (!running) paint();
    }

    resize();
    paint(); // one frame right away, and the only frame under reduced motion
    update();

    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(host);
    } else {
      window.addEventListener('resize', onResize);
    }

    let intersection = null;
    if (typeof IntersectionObserver !== 'undefined') {
      intersection = new IntersectionObserver(
        (entries) => {
          inView = entries.some((entry) => entry.isIntersecting);
          update();
        },
        { threshold: 0 },
      );
      intersection.observe(canvas);
    }

    document.addEventListener('visibilitychange', update);
    if (reduceMotion.addEventListener) {
      reduceMotion.addEventListener('change', update);
    }

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      document.removeEventListener('visibilitychange', update);
      if (reduceMotion.removeEventListener) {
        reduceMotion.removeEventListener('change', update);
      }
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener('resize', onResize);
      if (intersection) intersection.disconnect();
    };
  }, []);

  return <canvas id="dither-canvas" ref={canvasRef} aria-hidden="true" />;
}
