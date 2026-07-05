// Order and titles per v3. Quotes are unchanged. `stat` leads the card in big
// type where a transformation number exists.
const TESTIMONIALS = [
  {
    name: 'Jeff Smith',
    role: '15 years in construction',
    quote:
      'Started working with Chase, learning how to utilize my body, work around the aches and pains, and just feel all around better.',
  },
  {
    name: 'Mohammed Shuman',
    role: 'Sales professional, BJJ competitor',
    stat: 'Years of dislocations → confident in armbars and kimuras',
    quote:
      'I had a dislocation problem with my shoulders for years. Every time I’d get put in bad positions wrestling, my shoulder would dislocate. Now when I get caught in armbars or kimuras, I’m fully confident defending it. I’m very grateful for everything Chase has done.',
  },
  {
    name: 'Martin Corvetto',
    role: 'BJJ black belt, No Gi Worlds champion',
    stat: 'Weekly stingers → every six to eight months',
    quote:
      'The stingers I used to get weekly went to every six to eight months. I can’t recommend him enough.',
  },
  {
    name: 'Jose Pagan',
    role: 'BJJ black belt, No Gi Worlds champion',
    stat: 'Torn meniscus → full squat, back to 95%',
    quote:
      'I had a torn meniscus. Now I can bend down, hit a full squat, pop up, with less popping in my knee. I’m back to rolling/training 90, 95%, and I’m almost back to world championship form.',
  },
  {
    name: 'Jacque Amorim',
    role: 'UFC strawweight, BJJ black belt',
    stat: '10–12 sessions a week, recovering faster',
    quote:
      'We train 10 to 12 times a week and recovery is everything. I come in before I spar and it gets me ready and stronger for the next day. Since working with Chase, my neck injuries are better and I recover faster.',
  },
  {
    name: 'Nick Salles',
    role: 'BJJ black belt',
    quote: 'Some of the best results I’ve had in my competitive career.',
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
                {t.stat && <p className="tcard-stat">{t.stat}</p>}
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
