const FAQS = [
  {
    n: '01',
    q: 'What should I look for when hiring anyone in this space?',
    a: [
      'A few things worth checking:',
      'Do they hold real credentials? At minimum, look for the CSCS (Certified Strength and Conditioning Specialist), which is the gold standard for strength coaches. If they don’t have any nationally recognized certs, that’s a red flag.',
      'Do they actually train and compete themselves, or are they coaching from a textbook?',
      'Do they personalize the work or hand you the same template they hand everyone else?',
      'Do they progress you over time, or have you been doing the same three exercises for six months?',
      'Do they explain what they’re doing and why, or do you just get a list of things to do?',
      'Are they honest about what they don’t know?',
      'If the answer to most of those is no, keep looking.',
    ],
  },
  {
    n: '02',
    q: 'Who do you work with?',
    a: [
      'The work cuts across a wider range than people expect. Most clients fall into one of these:',
      'Competitive grapplers and combat sport athletes (BJJ, MMA, wrestling)',
      'Lifters and recreational athletes who want to train hard without breaking down',
      'Recreational and competitive sports (anything from racquet sports, golf, baseball, surfing, Hyrox, CrossFit, etc.)',
      'People returning from injury who want to get back to the things they love',
      'Active people in their 30s, 40s, and 50s who want to stay strong for the long haul',
      'People who’ve bounced through PT clinics and online programs and are tired of the cycle',
      'If you’re somewhere in there, we should talk.',
    ],
  },
  {
    n: '03',
    q: 'What should I think about before reaching out?',
    a: [
      'A few things worth getting clear on before the call:',
      'What you actually want out of this. Get back to a sport? Get stronger? Stop hurting? Get in better shape?',
      'What you’ve already tried and what didn’t work',
      'Your injury history, even the stuff you think is healed',
      'How much time you can realistically give this each week',
      'Whether you’re looking for someone to tell you what to do, or someone to work with you on the why',
      'The more honest you are with yourself before the call, the faster we can figure out if it’s a fit.',
    ],
  },
  {
    n: '04',
    q: 'Do you work with people who are currently injured?',
    a: [
      'Depends on what’s going on. If you’re in acute pain or recently injured and haven’t been cleared by a clinician, that’s a clinical question, not a coaching one. Get evaluated first, then come back. If you’re past the acute stage and trying to rebuild, that’s where I can help.',
    ],
    capture: 'Not cleared yet? Leave your email and I’ll check back in when you are.',
  },
  {
    n: '05',
    q: 'Do I need to have lifted before?',
    a: [
      'No. Some of the most rewarding work I do is with people who are starting from scratch or coming back to it after years away. If you’ve never touched a barbell, that’s fine. We’ll teach you. If you’ve been lifting for a decade, we’ll meet you where you are.',
    ],
  },
  {
    n: '06',
    q: 'What’s the difference between the packages?',
    a: [
      'The assessment decides the program; the package decides how much of me you get.',
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section border-top">
      <div className="container">
        <span className="label">Common Questions</span>
        <h2 className="section-head">Questions worth asking.</h2>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <details className="faq-item" key={f.n} open={i === 0}>
              <summary className="faq-q">
                <span className="faq-n">{f.n}</span>
                <span className="faq-qtext">{f.q}</span>
                <span className="faq-mark" aria-hidden="true" />
              </summary>
              <div className="faq-a">
                {f.a.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
                {f.capture && (
                  <a className="faq-capture" href="/contact-us">
                    {f.capture}
                  </a>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
