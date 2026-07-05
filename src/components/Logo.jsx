// HMN AIDE lockup — the mark plus the "HMN AIDE" label in Inter 700.
// variant="white" uses the transparent white vector, which reads as true white
// over any background (used in the sticky header, which passes over both the Ink
// sections and the emerald band). Default uses the cropped mark, which composites
// cleanly on the Ink footer and shows the globe grid.
export default function Logo({ size = 36, word = true, variant = 'default' }) {
  const white = variant === 'white';
  const src = white ? '/hmn-logo-white.png' : '/hmn-mark.png';
  const imgStyle = white
    ? { height: size, width: 'auto' }
    : { height: size, width: size };
  return (
    <span className="logo-lockup">
      <img className="logo-mark" src={src} alt="HMN AIDE" style={imgStyle} />
      {word && <span className="logo-word">HMN AIDE</span>}
    </span>
  );
}
