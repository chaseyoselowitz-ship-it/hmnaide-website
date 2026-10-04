// Calendly booking popup. Every "book your call" CTA on the site goes here.
// Buttons keep a real href so the link still works if the Calendly script
// has not loaded yet (slow network, script blocked): it just opens the
// booking page in the same tab instead of the popup.
export const CALENDLY_URL =
  'https://calendly.com/chase-hmnaide/30min?primary_color=13a572'

export function openCalendly(e) {
  if (typeof window === 'undefined' || !window.Calendly) return // fall back to href
  e.preventDefault()
  window.Calendly.initPopupWidget({ url: CALENDLY_URL })
}
