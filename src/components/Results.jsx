// Results. Replaces the unconsented testimonial cards in the #results slot.
// Shows the instrument (which markers, tested when, retested a quarter later)
// and the one record that can be checked today. The rule is the retest sheet
// and nothing else: consented retest columns return here, between the kicker
// and the first paragraph, one per person, exactly as approved in writing.
// Quotes do not come back to this section. Testimonials.jsx stays in the repo
// unmounted; its six strings are the text each consent ask sends, for use
// elsewhere if consent comes.
export default function Results() {
  return (
    <section id="results" className="section border-top">
      <div className="container">
        <span className="label">Results</span>
        <h2 className="section-head">What I measure, and what I publish.</h2>
        <p className="section-kicker">
          Your first session puts numbers on you. A quarter later the same
          tests run again, and the two columns sit side by side.
        </p>
        <p>
          In person: grip strength, a loaded carry for load and time, the
          heaviest honest hinge and squat that day, and the range you hold
          under load. Remote runs the same session on video with the gear in
          your gym; grip waits for the first session we share a gauge. Every
          number goes on a dated sheet, and I keep the sheet.
        </p>
        <p>
          That sheet is the only proof that will ever go here. A testimonial is
          one photo of one good day; a retest is the same photo taken twice, a
          quarter apart, dated. None is on file yet, so no client is on this
          page, and no retest goes up without that person&rsquo;s written
          consent. My own record you can check today: the CSCS and the IBJJF
          Pan American title are public, and I still compete.
        </p>
      </div>
    </section>
  );
}
