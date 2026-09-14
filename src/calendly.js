// Calendly booking popup. Every "apply" / "book" CTA on the site goes here.
//
// OPEN: the routing form behind d/dttz-jkj-vdd is configured in Calendly, not
// here, and it does not match the page. Before the next deploy it needs, in
// Calendly: (1) drop the 'health/wellness ... so far' question (voice-banned word); (2) replace the
// '$500-$700/month, minimum 3-month commitment' line with the three listed
// prices ($515 / $685 / $850 a month) or remove it; (3) singular voice ('my
// program', 'How did you hear about me'); (4) rename the Submit button to
// 'Book the call'; (5) state on the form what happens after submit. Chase to
// confirm submit routes to a calendar; if it does not, either point this URL
// at a direct booking event or change the page's 'then we get on a call'.
// Buttons keep a real href so the link still works if the Calendly script
// never arrives (slow network, script blocked): it just opens the booking
// page in the same tab instead of the popup.
// Until the form changes, the page copy (Hero, HowItWorks 01, ContactUs)
// describes the form as it is: name, email, phone, a few lines on where you
// are, a budget question, and a call after it. No 'two minutes', no claim
// about what the Submit button does.
export const CALENDLY_URL =
  'https://calendly.com/d/dttz-jkj-vdd?primary_color=13a572&hide_gdpr_banner=1'

const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css'
const CALENDLY_JS = 'https://assets.calendly.com/assets/external/widget.js'
let calendlyRequested = false

function loadCalendly() {
  if (calendlyRequested) return
  calendlyRequested = true
  if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = CALENDLY_CSS
    document.head.appendChild(link)
  }
  if (!document.querySelector(`script[src="${CALENDLY_JS}"]`)) {
    const script = document.createElement('script')
    script.src = CALENDLY_JS
    script.async = true
    document.head.appendChild(script)
  }
}

function onCalendlyIntent(e) {
  const target = e.target
  if (target instanceof Element && target.closest('a[href*="calendly.com"]')) {
    loadCalendly()
  }
}

// Calendly is loaded on intent, not in the head, so first paint never waits on
// a third-party stylesheet. The widget is requested the first time a reader
// hovers, touches, or focuses any Calendly link, or once the browser is idle
// after load, whichever comes first. Called once from each page entry.
export function installCalendlyLoader() {
  if (typeof window === 'undefined') return
  document.addEventListener('pointerover', onCalendlyIntent, { passive: true })
  document.addEventListener('touchstart', onCalendlyIntent, { passive: true })
  document.addEventListener('focusin', onCalendlyIntent)
  const onLoad = () => {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(loadCalendly, { timeout: 4000 })
    } else {
      setTimeout(loadCalendly, 2500)
    }
  }
  if (document.readyState === 'complete') onLoad()
  else window.addEventListener('load', onLoad, { once: true })
}

// Click path: open the popup if the widget is here; otherwise request it and
// wait up to three seconds for it, then fall back to the href in the same tab.
export function openCalendly(e) {
  if (typeof window === 'undefined') return
  e.preventDefault()
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    return
  }
  const href = e.currentTarget.href
  loadCalendly()
  const started = Date.now()
  const tick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else if (Date.now() - started > 3000) {
      window.location.href = href
    } else {
      setTimeout(tick, 100)
    }
  }
  tick()
}
