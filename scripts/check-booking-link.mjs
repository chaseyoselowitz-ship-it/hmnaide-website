// Checks that the site's Calendly booking link actually works, so a paused,
// renamed or deleted event never leaves every "book" button on a dead page.
//
//   node scripts/check-booking-link.mjs            check the link in the code
//   node scripts/check-booking-link.mjs --live URL also check the deployed site
//
// For each link it confirms that:
//   1. the booking page loads (not a 404 or Calendly's "not valid" page)
//   2. the event is public and Calendly isn't reporting it unavailable
//   3. there is at least one open time to book
// Exits 1 with a plain-English reason if any check fails.

import { CALENDLY_URL } from '../src/calendly.js';

const LOOKUP = 'https://calendly.com/api/booking/event_types/lookup';

async function checkLink(url) {
  const problems = [];
  const { pathname } = new URL(url);
  const [profile, event] = pathname.split('/').filter(Boolean);

  // calendly.com/d/... links are share or routing links. They can be paused
  // or expire on their own, which is how the site broke before.
  if (profile === 'd') {
    problems.push(
      'is a calendly.com/d/... share link, which can be paused or expire. Use the event link (calendly.com/<profile>/<event>) instead.',
    );
  }

  // 1. The page a visitor lands on. A dead link still returns 200 but with
  //    no event title, so check for the title rather than the status alone.
  const page = await fetch(url, { redirect: 'follow' });
  const html = await page.text();
  const title = html.match(/property="og:title" content="([^"]*)"/)?.[1];
  if (!page.ok || !title || /404/.test(title)) {
    problems.push(`booking page did not load (HTTP ${page.status}${title ? `, "${title}"` : ', no event found'}).`);
  }

  // 2 and 3. Calendly's public lookup for the event: whether it can be booked
  //    and when the next open slot is.
  let info = null;
  if (profile !== 'd' && event) {
    const res = await fetch(
      `${LOOKUP}?profile_slug=${encodeURIComponent(profile)}&event_type_slug=${encodeURIComponent(event)}`,
    );
    if (res.ok) {
      info = await res.json();
      if (info.public === false) problems.push('event is set to secret, so visitors cannot book it.');
      if (info.unavailability_reason) {
        problems.push(`Calendly says the event is unavailable: ${info.unavailability_reason}.`);
      }
      if (!info.next_availability) problems.push('event has no open times to book.');
    } else {
      problems.push(`Calendly could not find the event (HTTP ${res.status}).`);
    }
  }

  return { url, title, next: info?.next_availability, problems };
}

// Pulls every Calendly link out of the deployed site's JavaScript, so the
// check covers what visitors actually get, not just what is in the repo.
async function liveLinks(siteUrl) {
  const html = await (await fetch(siteUrl)).text();
  // Entry scripts plus preloaded chunks: the link can live in either.
  const scripts = new Set(
    [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+\.js)"/g)].map((m) => m[1]),
  );
  const links = new Set();
  for (const src of scripts) {
    const js = await (await fetch(new URL(src, siteUrl))).text();
    for (const m of js.matchAll(/https:\/\/calendly\.com\/[A-Za-z0-9/_-]+(\?[A-Za-z0-9=&_-]*)?/g)) {
      links.add(m[0]);
    }
  }
  if (links.size === 0) throw new Error(`no Calendly link found on ${siteUrl}`);
  return [...links];
}

const liveIndex = process.argv.indexOf('--live');
const targets = [{ where: 'code (src/calendly.js)', url: CALENDLY_URL }];
let failed = false;

if (liveIndex !== -1) {
  const site = process.argv[liveIndex + 1];
  try {
    for (const url of await liveLinks(site)) targets.push({ where: `live site (${site})`, url });
  } catch (err) {
    console.log(`✗ live site (${site}): ${err.message}`);
    failed = true;
  }
}

for (const { where, url } of targets) {
  const r = await checkLink(url);
  if (r.problems.length) {
    failed = true;
    console.log(`✗ ${where}: ${url}`);
    for (const p of r.problems) console.log(`    - ${p}`);
  } else {
    console.log(`✓ ${where}: "${r.title}", next open time ${r.next}`);
  }
}

process.exit(failed ? 1 : 0);
