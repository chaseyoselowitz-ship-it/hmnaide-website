const FAQS = [
  {
    n: '01',
    q: 'Who decides what I do each session?',
    a: [
      'I do. You get a block built around your week, and you run what is on the sheet. When the week moves, a trip, a comp camp, a quarter close, you text the business line and the block moves with it. You never rebuild it yourself, and you never stand in the gym working out whether today is a heavy day. Every quarter I retest you and write the next block from what the numbers say. Your part is the session in front of you. The thinking around it is mine.',
    ],
  },
  {
    n: '02',
    q: 'How much of my week does this take?',
    a: [
      'The lifting sits inside the hours you already give to training, mats counted, and how many sessions a week you lift comes out of the time you actually have, which we settle on the call. How many of those I am in the room for is set by the tier: one a month on Hybrid, two a month on Hybrid 2x, none on Remote. The rest you run from the sheet in your own gym. Outside the sessions, the time I ask for is two 30-minute video calls a month. The weekly check-in comes from me, built from the log, and costs you a reply. When a trip or a close eats the week, the block has a short version, so a bad week costs you a shorter session and not the program.',
    ],
  },
  {
    n: '03',
    q: 'What do I have to track?',
    a: [
      'No log. I keep it: every load, every set, every range, every session, and the retest numbers on top. You do not fill in a check-in form, rate your sleep in an app, or keep a spreadsheet. Think of it the way you think of your books. They are yours, you can see them the moment you ask, and you still do not keep them yourself. What I do need is one text after any session I am not at, with what you lifted, so it goes in the log. On Remote that is every session. Add a word if something felt different.',
    ],
  },
  {
    n: '04',
    q: 'Something hurts right now. Can I still start?',
    a: [
      'It depends on who has looked at it, and that is the first thing I ask. If a physician or another licensed provider has seen it and cleared you, we start, and the block is built around what they said. If you are still under their care, we train what is not involved, stay inside what they told you, and I send them a short note on what I am loading. If nobody has seen it, apply for the call anyway and tell me what is going on. I will point you to someone who can look at it, and we start the day you are cleared.',
      'I do not decide what is wrong with you. Someone licensed does that, and I build the capacity around it. Anything that swelled, gave way, went numb, or is getting worse day over day gets seen before it gets loaded, and I will say so on the call.',
    ],
    capture: 'Not cleared yet? Tell me, and I will check back in when you are.',
    captureHref: '/contact-us?about=cleared',
  },
  {
    n: '05',
    q: 'How do you know when to push and when to back off?',
    a: [
      'By keeping hurt and harm apart, and by not reading it off how you feel walking in. Hurt is your body reporting it was asked for more than it had built. It eases as you warm up, it settles by the next morning, and it gets loaded, at the edge and just under it, until the edge moves. Harm carries its own tells: swelling, a joint that gives, numbness, something that climbs over days instead of settling. Harm sees a doctor before it sees a bar. What gets loaded today, what waits, and when the answer is a doctor first: that is a training call, and I make it, in the room or over the phone, in plain words. Naming what is wrong is not my call, and I will not pretend it is. What you can load, through what range, from one retest to the next, tells me more than a pain rating ever will.',
    ],
  },
  {
    n: '06',
    q: 'What does it cost, and what am I committing to?',
    a: [
      'Remote is $515 a month. Hybrid, with one in-person session a month, is $685. Hybrid with two in-person sessions a month is $850. Every tier is the same program, the same log, and the same quarterly retest; the testing session decides the block, and the tier decides how often I am in the room with you in South Florida. Look, these are founding rates. The first clients through go before the retest numbers exist, and their retests become the numbers the people after them read before they decide.',
      'On commitment, plan on a quarter. The first retest is the first point where the numbers can tell either of us whether it is working, and nothing shorter gives them time to move.',
    ],
  },
  {
    n: '07',
    q: 'Remote or in person?',
    a: [
      'If you are in Boca, Palm Beach, or Broward, take a Hybrid tier. The in-person session is where I watch you under load and change things on the spot. Two a month puts the most of me in the room; one a month works when the calls and the text line can carry the weeks between. Remote is for the man outside South Florida, or the one who travels to compete more than he is home. The first session runs on video and the block is the same. Which one fits you is the last thing we settle on the call, and you do not need to know before you apply.',
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
          {FAQS.map((f) => (
            <details className="faq-item" key={f.n}>
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
                  <a
                    className="faq-capture"
                    href={f.captureHref || '/contact-us'}
                  >
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
