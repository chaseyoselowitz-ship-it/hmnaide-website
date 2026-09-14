// Coach strip. Sits directly under the hero in the slot the client marquee used
// to hold. Only facts about Chase, which need nobody's consent: no client
// names, photos, pills, outcomes, or counts. Consented client proof lives in
// Results, never here.
const CHIPS = [
  'Chase Yoselowitz, CSCS',
  'B.S. Kinesiology',
  'BJJ brown belt',
  'IBJJF Pan American champion',
  'Still competing',
  'Has coached UFC, ADCC, and IBJJF competitors',
];

export default function SocialProof() {
  return (
    <section className="proof proof--strip" aria-label="Coach credentials">
      <div className="container">
        <span className="label">Your coach</span>
        <ul className="proof-chips">
          {CHIPS.map((c) => (
            <li className="proof-pill" key={c}>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
