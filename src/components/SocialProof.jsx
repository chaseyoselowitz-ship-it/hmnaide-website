// Order matches the reference strip. `img` is the numbered file that will land
// in public/social/. Until the real photos are dropped in, each avatar falls
// back to an initials monogram so the layout previews cleanly.
// Non-fighter faces lead so the ICP (operators, executives) sees themselves
// first, then the champions. Image numbers stay bound to each person.
const PEOPLE = [
  { img: '04', name: 'Zach Y.', role: 'Executive' },
  { img: '06', name: 'Nicholas C.', role: 'Executive' },
  { img: '09', name: 'Liz Y.', role: 'Executive' },
  { img: '07', name: 'Jodi Y.', role: 'Retired' },
  { img: '10', name: 'Jeff S.', role: 'Operator' },
  { img: '01', name: 'Nick S.', role: 'BJJ Athlete' },
  { img: '02', name: 'Danny M.', role: 'BJJ Athlete' },
  { img: '03', name: 'Jacqueline A.', role: 'UFC Fighter' },
  { img: '05', name: 'Gigi M.', role: 'BJJ Athlete' },
  { img: '08', name: 'Jose P.', role: 'BJJ Athlete' },
  { img: '11', name: 'Martin C.', role: 'BJJ Athlete' },
  { img: '12', name: 'Mohammed S.', role: 'BJJ Athlete' },
];

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .replace('.', '')
    .toUpperCase();
}

function Person({ p }) {
  // Monogram sits underneath; the photo is layered on top and covers it once
  // the real file loads. If the file is missing, the img renders empty and the
  // monogram shows through — no dependence on the onError event firing.
  return (
    <figure className="proof-item">
      <div className="proof-avatar">
        <span className="proof-monogram">{initials(p.name)}</span>
        <img src={`/social/${p.img}.png`} alt={p.name} />
      </div>
      <figcaption className="proof-cap">
        <span className="proof-name">{p.name}</span>
        <span className="proof-pill">{p.role}</span>
      </figcaption>
    </figure>
  );
}

export default function SocialProof() {
  // Rendered twice back-to-back so the marquee can loop seamlessly.
  const loop = [...PEOPLE, ...PEOPLE];
  return (
    <section id="proof" className="proof" aria-label="Client social proof">
      <div className="container">
        <h2 className="proof-head">
          Trusted by everyday athletes, weekend warriors, and world champions.
        </h2>
      </div>
      <div className="proof-marquee">
        <div className="proof-track">
          {loop.map((p, i) => (
            <Person key={`${p.img}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
