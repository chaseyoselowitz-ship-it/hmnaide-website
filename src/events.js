// Upcoming free workshops. Edit this list to add, change or remove events;
// the Events page groups them by month and hides any whose date has passed.
//
//   date    'YYYY-MM-DD', or null while the date is still being confirmed
//   time    'HH:MM' 24h local (South Florida), or null for "time TBA"
//   endTime optional 'HH:MM' for events that run a set window
//   access  'open' (anyone can come) or 'members' (host gym's members only)
//   city    shown under the venue and used for the directions link
export const EVENTS = [
  {
    id: 'gracie-barra-boynton',
    title: 'Mobility Workshop',
    venue: 'Gracie Barra',
    city: 'Boynton Beach',
    date: '2026-10-24',
    time: '12:00',
    access: 'members',
  },
  {
    id: 'patriot-bjj',
    title: 'Mobility Workshop',
    venue: 'Patriot BJJ',
    city: 'Delray Beach',
    date: '2026-10-31',
    time: '10:00',
    access: 'open',
  },
  {
    id: 'a1a-beach-club',
    title: 'Mobility for BJJ',
    venue: 'A1A Beach Club',
    city: 'Little River',
    date: '2026-11-14',
    time: null,
    access: 'open',
  },
  {
    id: 'coco-market-delray',
    title: 'Mobility Workshop',
    venue: 'Coco Market',
    city: 'Delray Beach',
    date: '2026-11-01',
    time: '09:00',
    endTime: '15:00',
    access: 'open',
  },
]

// Assumed length of a workshop without an endTime, used only for the
// "Add to calendar" link.
export const EVENT_MINUTES = 60
