// v8: one format for every card — category chip, bold headline, quote, name.
// Quotes are lightly trimmed (Mohammed, Jose, Jacque) so each card scans in the
// same three seconds; no words changed, only cut.
const TESTIMONIALS = [
  {
    chip: 'Everyday Athlete',
    headline: 'From daily aches to all-around better',
    quote:
      'Started working with Chase, learning how to utilize my body, work around the aches and pains, and just feel all around better.',
    name: 'Jeff Smith',
    role: '15 years in construction',
  },
  {
    chip: 'Weekend Warrior',
    headline: 'Years of dislocations, now confident under attack',
    quote:
      'I had a dislocation problem with my shoulders for years. Now when I get caught in armbars or kimuras, I’m fully confident defending it.',
    name: 'Mohammed Shuman',
    role: 'Sales professional, BJJ competitor',
  },
  {
    chip: 'Competitor',
    headline: 'Weekly stingers, now every six to eight months',
    quote:
      'The stingers I used to get weekly went to every six to eight months. I can’t recommend him enough.',
    name: 'Martin Corvetto',
    role: 'BJJ black belt, No Gi Worlds champion',
  },
  {
    chip: 'Competitor',
    headline: 'Torn meniscus, back to 95%',
    quote:
      'Now I can bend down, hit a full squat, pop up, with less popping in my knee. I’m almost back to world championship form.',
    name: 'Jose Pagan',
    role: 'BJJ black belt, No Gi Worlds champion',
  },
  {
    chip: 'Competitor',
    headline: '10–12 sessions a week, recovering faster',
    quote:
      'I come in before I spar and it gets me ready and stronger for the next day. My neck injuries are better and I recover faster.',
    name: 'Jacque Amorim',
    role: 'UFC strawweight, BJJ black belt',
  },
  {
    chip: 'Competitor',
    headline: 'Career-best results',
    quote: 'Some of the best results I’ve had in my competitive career.',
    name: 'Nick Salles',
    role: 'BJJ black belt',
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="section border-top">
      <div className="container">
        <span className="label">Client Results</span>
        <h2 className="section-head">Real people. Real recovery. Real results.</h2>
        <p className="section-kicker">Nobody here was massaged back to health.</p>
        <div className="tcard-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="tcard" key={t.name}>
              <div className="tcard-body">
                <span className="tcard-chip">{t.chip}</span>
                <h3 className="tcard-headline">{t.headline}</h3>
                <blockquote className="tcard-quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="tcard-cap">
                <span className="tcard-name">{t.name}</span>
                <span className="tcard-role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
