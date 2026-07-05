const LINES = [
  'Corrective-exercise theater and endless activation drills.',
  'Passive treatment you have to keep buying week after week.',
  'Training to failure. You have a job tomorrow.',
  'The template everyone else got.',
];

export default function WontGet() {
  return (
    <section className="wontget border-top">
      <div className="container">
        <span className="label">What you won&rsquo;t get here</span>
        <ul className="wontget-list">
          {LINES.map((line) => (
            <li className="wontget-item" key={line}>
              <span className="wontget-x" aria-hidden="true">&times;</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
