export const natureWeather = {

  // ─── Sun & Sky ────────────────────────────────────────────
  sun:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  sunSmall:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
  sunFilled:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  moonPlus:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/><path d="M19 3v4M21 5h-4"/></svg>`,
  moonrise:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/><line x1="12" y1="22" x2="12" y2="18"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="1" y1="12" x2="3" y2="12"/></svg>`,
  sunrise:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="9" x2="12" y2="2"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/></svg>`,
  sunset:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="9" x2="12" y2="2"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="8" y1="23" x2="16" y2="23"/><line x1="11" y1="20" x2="13" y2="20"/></svg>`,

  // ─── Clouds & Precipitation ───────────────────────────────
  cloud:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  cloudRain:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M8 19v2M12 21v2M16 19v2"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>`,
  cloudSnow:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg>`,
  cloudLightning: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>`,
  cloudDrizzle:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><path d="M8 16l1 5M12 16l1 5M16 16l1 5"/></svg>`,
  cloudWind:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><path d="M12 13v3M10.5 14.5l3-3M10.5 17.5l3-3"/></svg>`,
  cloudDownload:  `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"/><path d="M16 14l-4 4-4-4"/><path d="M12 18V9"/></svg>`,

  // ─── Wind & Water ─────────────────────────────────────────
  wind:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>`,
  droplet:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  dropletPlus:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/><path d="M12 12v4M10 14h4"/></svg>`,
  waves:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 12h18M3 6c3 3 6 3 9 0s6-3 9 0M3 18c3-3 6-3 9 0s6 3 9 0"/></svg>`,
  ocean:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M2 18c1.4-1.4 3.1-2 4.8-2 1.7 0 3.4.6 4.8 2 1.4 1.4 3.1 2 4.8 2 1.7 0 3.4-.6 4.6-2"/><path d="M2 10c1.4-1.4 3.1-2 4.8-2 1.7 0 3.4.6 4.8 2 1.4 1.4 3.1 2 4.8 2 1.7 0 3.4-.6 4.6-2"/></svg>`,
  raindrop:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12 4 12 2c0 0-7 6-7 13a7 7 0 0 0 7 7z"/><path d="M12 22V12"/></svg>`,
  umbrella:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/></svg>`,

  // ─── Extreme & Atmospheric ────────────────────────────────
  lightning:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  flame:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  tornado:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M21 4H3M17 9H7M13 14h-4M11 19H9"/></svg>`,
  storm:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`,
  foggy:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 6h18M3 10h12M3 14h8M3 18h5"/></svg>`,
  haze:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="10" r="3"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="17" x2="12" y2="19"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="14.36" x2="19.78" y2="15.78"/><line x1="1" y1="10" x2="3" y2="10"/><line x1="21" y1="10" x2="23" y2="10"/><path d="M3 20h18M3 23h14"/></svg>`,

  // ─── Temperature & Seasons ────────────────────────────────
  thermometer:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
  thermometerHigh:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><line x1="16" y1="7" x2="19" y2="7"/><line x1="17" y1="11" x2="19" y2="11"/></svg>`,
  thermometerLow:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><line x1="16" y1="9" x2="18" y2="9"/></svg>`,
  snowflake:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 7l-5 5-5-5"/><path d="M17 17l-5-5-5 5"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M7 7l5 5 5-5"/><path d="M7 17l5-5 5 5"/></svg>`,
  humidity:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M8 12s1-3 4-3 4 3 4 3-1 3-4 3-4-3-4-3z"/></svg>`,
  uv:                `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.66 17.66l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.66 6.34l1.42-1.42"/></svg>`,
  windDir:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3L9 15M3 9l6 2 2 6 9-12z"/></svg>`,

  // ─── Nature & Environment ─────────────────────────────────
  star:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  starFilled:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none"/></svg>`,
  leaf:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.5c1.1-1 2.3-2 3.68-2.5 2.47 3.5 6.5 4 9.5 3.5-1.5-1.5-3-3-3.5-5 3 1 5.5.5 7.5-1-1-1-2-2.5-2.5-4 2 0 3.5-.5 4.5-2.5"/></svg>`,
  tree:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M9 8a3 3 0 0 1 6 0c0 3-3 4-3 7"/></svg>`,
  plant:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3C7.58 3 4 5.69 4 9c0 2.12 1.23 3.99 3.12 5.15L6 22h12l-1.12-7.85C18.77 12.99 20 11.12 20 9c0-3.31-3.58-6-8-6z"/></svg>`,
  pollen:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3c0 1.5.8 2.8 2 3.4V14l-4 2v2h10v-2l-4-2V8.4A4 4 0 0 0 15 5a3 3 0 0 0-3-3z"/></svg>`,
};