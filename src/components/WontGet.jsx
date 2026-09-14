const LINES = [
  {
    no: 'A session where something is done to you, nothing gets written down, and you are booked again before you leave.',
    instead: 'Every session here is training, and all of it goes in my log.',
  },
  {
    no: 'A community feed where your question waits its turn behind everyone else’s.',
    instead: 'You text my business line and you get me.',
  },
  {
    no: 'A check-in form on Sunday night, or an app that nags you to log your sets.',
    instead: 'I own the log. A session I am not at costs you one text with the loads.',
  },
  {
    no: 'The block everyone else got, with your name typed at the top.',
    instead: 'Yours is built from your numbers and reset at every quarterly retest.',
  },
  {
    no: 'A plan that needs hours your week does not have.',
    instead: 'Built around the mats, the business, and the family, with a shorter version for the weeks that come apart.',
  },
];

export default function WontGet() {
  return (
    <section className="wontget border-top">
      <div className="container">
        <span className="label">What you won&rsquo;t get from me</span>
        <ul className="wontget-list">
          {LINES.map((line) => (
            <li className="wontget-item" key={line.no}>
              <span className="wontget-x" aria-hidden="true">&times;</span>
              <span>
                {line.no} <span className="wontget-sub">{line.instead}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
