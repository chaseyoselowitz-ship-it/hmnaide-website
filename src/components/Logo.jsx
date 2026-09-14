// HMN AIDE lockup: the mark plus the "HMN AIDE" label in Inter 700.
// variant="white" uses the transparent white vector, which reads as true white
// over any background (used in the sticky header, which passes over both the Ink
// sections and the emerald band). Default uses the cropped mark, which composites
// cleanly on the Ink footer and shows the globe grid. Explicit width and height
// attributes reserve the box before the image arrives (no layout shift).
export default function Logo({ size = 36, word = true, variant = 'default' }) {
  const white = variant === 'white';
  const src = white ? '/hmn-logo-white-112.png' : '/hmn-mark-128.png';
  const width = white ? Math.round((size * 102) / 112) : size;
  return (
    <span className="logo-lockup">
      <img
        className="logo-mark"
        src={src}
        alt="HMN AIDE"
        width={width}
        height={size}
      />
      {word && <span className="logo-word">HMN AIDE</span>}
    </span>
  );
}
