// Upcoming free workshops. Edit this list to add, change or remove events;
// the Events page groups them by month and hides any whose date has passed.
//
//   date    'YYYY-MM-DD', or null while the date is still being confirmed
//   time    'HH:MM' 24h local (South Florida), or null for "time TBA"
//   endTime optional 'HH:MM' for events that run a set window
//   access  'open' (anyone can come), 'members' (host gym's members only),
//           or 'ticketed' (needs a ticket; set ticketUrl)
//   city    shown under the venue and used for the directions link
export const EVENTS = [
  {
    id: 'wellness-with-purpose-lantana',
    title: 'Mobility for BJJ',
    venue: 'Combat Club',
    city: 'Lantana',
    date: '2026-10-10',
    time: '13:00',
    endTime: '13:30',
    access: 'ticketed',
    ticketUrl:
      'https://www.eventbrite.com/e/wellness-with-purpose-soflo-premier-health-wellness-experience-tickets-1998992044015?aff=oddtdtcreator',
  },
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
    id: 'xcell-jiujitsu-boynton',
    title: 'Mobility Workshop',
    venue: 'Xcell Jiujitsu Academy',
    city: 'Boynton Beach',
    date: '2026-11-07',
    time: '10:00',
    endTime: '11:00',
    access: 'open',
  },
  {
    id: 'a1a-beach-club',
    title: 'Mobility for BJJ',
    venue: 'A1A Beach Club',
    city: 'Little River',
    date: '2026-11-21',
    time: null,
    access: 'open',
  },
  {
    id: 'coco-market-delray',
    title: 'Mobility Sessions (Our Booth)',
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
