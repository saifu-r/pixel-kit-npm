const communication = {

  // ─── Messaging ────────────────────────────────────────────
  chatBubble: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  chatDots: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="9" cy="11" r="1"/><circle cx="12" cy="11" r="1"/><circle cx="15" cy="11" r="1"/></svg>`,
  reply: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17l-5-5 5-5"/><path d="M4 12h11a4 4 0 0 1 0 8H9"/></svg>`,
  replyAll: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l-5-5 5-5"/><path d="M11 17l-5-5 5-5"/><path d="M6 12h11a4 4 0 0 1 0 8H9"/></svg>`,
  forward: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 17l5-5-5-5"/><path d="M20 12H9a4 4 0 0 0 0 8h5"/></svg>`,
  thread: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M3 4h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9L5 18v-4H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>`,
  groupChat: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v3l-3-3H9a2 2 0 0 1-1.4-.6"/><path d="M3 4h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9l-3 3v-3H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>`,
  readReceipt: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12l5 5L17 7"/><path d="M8 12l5 5L22 7"/></svg>`,
  pinMessage: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 6.4L21 10l-5 4.9 1.2 6.8L12 18.8l-5.2 2.9L8 14.9 3 10l6.6-1.6z"/><line x1="12" y1="18" x2="12" y2="22"/></svg>`,
  muteChat: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18V6a2 2 0 0 1 2-2h10"/><path d="M21 6v8a2 2 0 0 1-2 2H9l-4 4"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  broadcast: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8.4a9 9 0 0 1 0 7.2"/><path d="M6 8.4a9 9 0 0 0 0 7.2"/><path d="M14.5 10.5a3.5 3.5 0 0 1 0 3"/><path d="M9.5 10.5a3.5 3.5 0 0 0 0 3"/><circle cx="12" cy="12" r="1.5"/></svg>`,

  // ─── Calls & Video ────────────────────────────────────────
  callIncoming: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><polyline points="16 2 16 8 22 8"/><line x1="23" y1="1" x2="16" y2="8"/></svg>`,
  callOutgoing: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><polyline points="16 8 22 8 22 2"/><line x1="16" y1="2" x2="22" y2="8"/></svg>`,
  callMissed: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="23" y1="1" x2="17" y2="7"/><line x1="17" y1="1" x2="23" y2="7"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16"/></svg>`,
  videoCall: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
  screenShare: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="9 8 12 5 15 8"/><line x1="12" y1="5" x2="12" y2="13"/></svg>`,
  endCall: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91"/><line x1="23" y1="1" x2="1" y2="23"/></svg>`,
  voiceNote: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  hold: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`,
  conference: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="8" r="2"/><circle cx="19" cy="8" r="2"/><path d="M12 7v3"/><path d="M5 10v2a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2"/><rect x="9" y="15" width="6" height="6" rx="1"/></svg>`,

  // ─── Email & Inbox ────────────────────────────────────────
  mailOpen: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10 6 10-6"/><path d="M2 9V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9l-10-6z"/></svg>`,
  mailUnread: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/><circle cx="19" cy="5" r="3" fill="currentColor" stroke="none"/></svg>`,
  compose: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  outbox: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 9 10 9 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><polyline points="9 5 12 2 15 5"/></svg>`,
  spam: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/><line x1="9" y1="15" x2="15" y2="9"/></svg>`,
  newsletter: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="13" x2="14" y2="13"/><line x1="6" y1="17" x2="11" y2="17"/></svg>`,
  subscribe: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="9" y1="21" x2="15" y2="21"/></svg>`,

  // ─── Notifications ────────────────────────────────────────
  bellBadge: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><circle cx="19" cy="5" r="3" fill="currentColor" stroke="none"/></svg>`,
  mention: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>`,
  snooze: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><line x1="10" y1="3" x2="14" y2="3"/><line x1="10" y1="6" x2="14" y2="6"/></svg>`,
  priority: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  doNotDisturb: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,

  // ─── Social ───────────────────────────────────────────────
  reaction: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M18 6l2-2"/></svg>`,
  tagSomeone: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="9.01" y2="10"/><path d="M13 10a2 2 0 1 0 2 2v-6"/></svg>`,
  status: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  linkPreview: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  poll: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="4" height="7" rx="1"/><rect x="10" y="9" width="4" height="12" rx="1"/><rect x="17" y="4" width="4" height="17" rx="1"/><line x1="3" y1="3" x2="3" y2="14"/></svg>`,
};

const navigation = {

  // ─── Home & Destinations ──────────────────────────────────
  home:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12L12 3l9 9"/><path d="M9 21V12h6v9"/><path d="M3 12v9h18v-9"/></svg>`,
  homeFilled:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  homePing:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/><circle cx="18" cy="6" r="3"/></svg>`,
  homeAlert:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/><path d="M12 12v4"/><circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/></svg>`,
  homeCheck:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/><polyline points="10 15 12 17 16 13"/></svg>`,
  saved:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>`,
  mapPin:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  pinRound:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>`,
  pinAlert:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><line x1="12" y1="7" x2="12" y2="13"/><line x1="12" y1="15" x2="12.01" y2="15"/></svg>`,
  pinPlus:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/></svg>`,

  // ─── Maps & Location ──────────────────────────────────────
  map:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
  mapFolded:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7M9 20l6-3M9 20V7m6 13l4.553 2.276A1 1 0 0 0 21 21.382V10.618a1 1 0 0 0-.553-.894L15 7m0 13V7M9 7l6-2"/></svg>`,
  mapGrid:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
  globe:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  globePin:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/></svg>`,
  globeTime:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><line x1="2" y1="12" x2="4" y2="12"/></svg>`,

  // ─── Direction & Compass ──────────────────────────────────
  compass:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  compassNorth:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/><line x1="12" y1="2" x2="12" y2="4"/></svg>`,
  navigate:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
  navigateFilled: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" fill="currentColor" stroke="none"/></svg>`,
  bearing:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  crosshair:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><circle cx="12" cy="12" r="4"/></svg>`,
  target:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg>`,
  radar:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="9"/></svg>`,

  // ─── Route & Transport ────────────────────────────────────
  route:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="18" r="3"/><circle cx="19" cy="6" r="3"/><path d="M5 15V9a6 6 0 0 1 6-6h2"/><path d="M19 9v6a6 6 0 0 1-6 6H11"/></svg>`,
  routePath:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h4l2-4 3 6 2-8 2 6h5"/></svg>`,
  transit:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  car:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  delivery:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H15"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
  eta:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><path d="M5 3L3 5"/><path d="M19 3l2 2"/></svg>`,

  // ─── Links & Anchor ───────────────────────────────────────
  link:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  externalLink:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  anchor:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`,
  linkHorizontal: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  linkBroken:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/><line x1="5" y1="5" x2="19" y2="19"/></svg>`,
  linkCheck:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/><polyline points="9 11 12 14 19 7"/></svg>`,
  share:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`,

  // ─── Breadcrumb & Menu Nav ────────────────────────────────
  chevronRight:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  arrowBack:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M5 12l4-4M5 12l4 4"/></svg>`,
  goBack:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>`,
  menu:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  menuLeft:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M4 6h16M4 12h10M4 18h6"/></svg>`,
  menuRight:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M4 6h16M8 12h12M10 18h10"/></svg>`,
  appGrid:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,

  // ─── Tabs & Sidebar ───────────────────────────────────────
  sidebar:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  topbar:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>`,
  bottombar:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`,
  tab:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  dashboard:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>`,
  layers:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,

  // ─── Search & Discovery ───────────────────────────────────
  search:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  searchPlus:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  searchMinus:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  searchHistory:  `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v3l2 2"/></svg>`,
  browse:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
};

const ui = {

  // ─── Core Controls ────────────────────────────────────────
  cross:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6L18 18M6 18L18 6"/></svg>`,
  check:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>`,
  plus:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  minus:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  moreVertical:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>`,
  moreHorizontal:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>`,
  plusCircle:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>`,
  minusCircle:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,

  // ─── Menu & Navigation ────────────────────────────────────
  menu:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  menuCollapse:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M4 6h16M4 12h10"/></svg>`,
  menuBack:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><polyline points="8 7 3 12 8 17"/></svg>`,
  menuAlert:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="19" cy="6" r="3" fill="currentColor" stroke="none"/></svg>`,
  grid:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  gridMasonry:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="5" height="5" rx="1"/><rect x="10" y="3" width="5" height="5" rx="1"/><rect x="17" y="3" width="4" height="5" rx="1"/><rect x="3" y="10" width="5" height="5" rx="1"/><rect x="10" y="10" width="11" height="5" rx="1"/><rect x="3" y="17" width="18" height="4" rx="1"/></svg>`,
  gridBento:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="7" height="11" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="2" rx="1"/><rect x="3" y="18" width="18" height="3" rx="1"/></svg>`,
  list:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,

  // ─── Layout & Panels ──────────────────────────────────────
  sidebar:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`,
  sidebarRight:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
  layout:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  layoutTop:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>`,
  layoutBottom:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`,
  splitVertical:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,
  splitHorizontal:  `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>`,
  panelLayout:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="2" y="3" width="9" height="18" rx="2"/><rect x="13" y="3" width="9" height="8" rx="2"/><rect x="13" y="13" width="9" height="8" rx="2"/></svg>`,

  // ─── Window & Zoom ────────────────────────────────────────
  maximize:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`,
  minimize:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>`,
  zoomIn:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  zoomOut:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  zoomFocus:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><circle cx="11" cy="11" r="3"/></svg>`,
  focusMode:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>`,
  shrink:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`,
  expand:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5"/><line x1="3" y1="3" x2="10" y2="10"/><line x1="14" y1="14" x2="21" y2="21"/></svg>`,

  // ─── Toggle & Switch ──────────────────────────────────────
  toggleOn:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="1" y="7" width="22" height="10" rx="5"/><circle cx="16" cy="12" r="3" fill="currentColor" stroke="none"/></svg>`,
  toggleOff:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="1" y="7" width="22" height="10" rx="5"/><circle cx="8" cy="12" r="3" fill="currentColor" stroke="none"/></svg>`,
  dropdown:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="9 10 12 13 15 10"/></svg>`,
  dropup:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="9 14 12 11 15 14"/></svg>`,
  select:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>`,
  checkbox:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="9 12 11 14 15 10"/></svg>`,
  radioOn:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/></svg>`,
  radioOff:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="9"/></svg>`,

  // ─── Tabs & Steps ─────────────────────────────────────────
  tabBar:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="2" y="9" width="20" height="12" rx="2"/><path d="M7 9V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>`,
  stepper:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="5" cy="12" r="2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><line x1="7" y1="12" x2="10" y2="12"/><line x1="14" y1="12" x2="17" y2="12"/></svg>`,
  stepperProgress:  `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="5" cy="12" r="2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="2"/><line x1="7" y1="12" x2="10" y2="12"/><line x1="14" y1="12" x2="17" y2="12" stroke-dasharray="2 1"/></svg>`,
  progressBar:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="2" y="3" width="20" height="4" rx="2"/><rect x="2" y="10" width="14" height="4" rx="2"/><rect x="2" y="17" width="8" height="4" rx="2"/></svg>`,
  loadingRing:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  spinner:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>`,
  slider:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="10" width="18" height="4" rx="2"/><rect x="3" y="10" width="10" height="4" rx="2" fill="currentColor" opacity="0.3" stroke="none"/></svg>`,

  // ─── Badges & Tags ────────────────────────────────────────
  badge:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="18" cy="5" r="4" fill="currentColor" stroke="none"/><path d="M18 8a4 4 0 0 1-4-4"/><rect x="2" y="3" width="16" height="18" rx="2"/></svg>`,
  tag:              `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  tagCheck:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/><polyline points="12 8 14 10 18 6"/></svg>`,
  pill:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="8" width="18" height="8" rx="4"/><line x1="8" y1="12" x2="8.01" y2="12"/><line x1="12" y1="12" x2="12.01" y2="12"/><line x1="16" y1="12" x2="16.01" y2="12"/></svg>`,
  chip:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="8" width="18" height="8" rx="4" fill="currentColor" opacity="0.15"/><rect x="3" y="8" width="18" height="8" rx="4"/><path d="M7 12h10"/></svg>`,
  listItem:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="7" cy="12" r="2" fill="currentColor" stroke="none" opacity="0.6"/><line x1="11" y1="10" x2="18" y2="10"/><line x1="11" y1="14" x2="15" y2="14"/></svg>`,
  cardStack:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="5" rx="2"/><rect x="3" y="11" width="18" height="5" rx="2"/><rect x="3" y="19" width="11" height="2" rx="1"/></svg>`,

  // ─── Input & Form ─────────────────────────────────────────
  textInput:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="2"/><line x1="7" y1="12" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>`,
  textArea:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="12" y2="17"/></svg>`,
  inputCheck:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="9 12 11 14 15 10"/></svg>`,
  passwordInput:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/></svg>`,
  emailInput:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  formField:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 12h8M8 9h5"/><rect x="14" y="14" width="4" height="1" rx=".5"/></svg>`,

  // ─── Notification & Status ────────────────────────────────
  bell:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  bellDot:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><circle cx="18" cy="5" r="3" fill="currentColor" stroke="none"/></svg>`,
  alertCircle:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  alertTriangle:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  successCircle:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>`,
  errorCircle:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  infoCircle:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  dot:              `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>`,

  // ─── Tooltip & Popover ────────────────────────────────────
  tooltip:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  chat:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  popover:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="13" y2="14"/></svg>`,
  modal:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M10 21h4M12 17v4"/><circle cx="8" cy="9" r="1" fill="currentColor" stroke="none"/><line x1="11" y1="9" x2="16" y2="9"/><line x1="8" y1="12.5" x2="16" y2="12.5"/></svg>`,
  drawer:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 9l9-7 9 7"/><rect x="9" y="12" width="6" height="9"/><line x1="3" y1="22" x2="21" y2="22"/><line x1="9" y1="17" x2="15" y2="17"/></svg>`,
  accordion:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h6M3 15h6"/></svg>`,
  appWindow:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 9v12"/><circle cx="6" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="9.5" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="13" cy="6" r="1" fill="currentColor" stroke="none"/></svg>`,
  panelAdd:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M12 8v8M8 12h8"/></svg>`,
  filter:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  sliders:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
};

const action = {

  // ─── Search & Find ────────────────────────────────────────
  search:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  searchPlus:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  searchMinus:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  searchCheck:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M9 11l2 2 4-4"/></svg>`,
  searchX:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="9" y1="9" x2="13" y2="13"/><line x1="13" y1="9" x2="9" y2="13"/></svg>`,
  searchRecent:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v3l2 2"/></svg>`,
  findText:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 4h13M3 8h9M3 12h9"/><circle cx="18" cy="15" r="5"/><line x1="21.5" y1="18.5" x2="23" y2="20"/></svg>`,

  // ─── Edit & Write ─────────────────────────────────────────
  edit:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  pencil:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>`,
  penLine:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/><path d="M15 5l3 3"/></svg>`,
  editBox:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"/><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"/></svg>`,
  editDone:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  editFile:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.5"/><polyline points="14 2 14 8 20 8"/><path d="M10 20v-5"/><path d="M7 17l3 3 3-3"/></svg>`,
  addToDoc:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>`,

  // ─── Delete & Remove ──────────────────────────────────────
  trash:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>`,
  trashClean:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>`,
  trashX:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11l4 4M14 11l-4 4"/></svg>`,
  remove:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  backspace:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>`,
  clearBox:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>`,
  clearInput:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>`,

  // ─── Copy, Cut & Paste ────────────────────────────────────
  copy:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  copyCheck:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/><polyline points="13 13 15 15 19 11"/></svg>`,
  cut:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
  clipboard:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
  clipboardCheck: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><polyline points="9 12 11 14 15 10"/></svg>`,
  clipboardList:  `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>`,
  duplicate:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"/></svg>`,
  copyPlus:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/><line x1="12" y1="13" x2="12" y2="18"/><line x1="9.5" y1="15.5" x2="14.5" y2="15.5"/></svg>`,

  // ─── Save & Export ────────────────────────────────────────
  save:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
  saveCheck:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/><polyline points="11 17 13 19 17 15"/></svg>`,
  download:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  shareUpload:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`,
  share:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  openExternal:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  cloudSave:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>`,

  // ─── Undo, Redo & Refresh ─────────────────────────────────
  refresh:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  undo:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M3 13C5 7.5 11 4 17 6.5s8.5 9 5 14.5"/></svg>`,
  redo:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M21 13c-2 5.5-8 9-14 6.5S-.5 10.5 3 5"/></svg>`,
  revert:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-6"/></svg>`,
  reload:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38"/></svg>`,
  syncDone:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/><polyline points="11 12 13 14 17 10"/></svg>`,
  spin:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,

  // ─── Power & Session ──────────────────────────────────────
  power:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>`,
  logIn:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
  logOut:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  powerOn:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/></svg>`,
  closeApp:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>`,
  standby:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M5 12H3"/><path d="M9.5 4.27l-1-1.73"/><path d="M14.5 4.27l1-1.73"/><path d="M19 12h2"/><path d="M17.5 19.73l1 1.73"/><path d="M6.5 19.73l-1 1.73"/><circle cx="12" cy="12" r="4"/></svg>`,
  switchUser:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/><circle cx="6" cy="12" r="2" fill="currentColor" stroke="none"/></svg>`,

  // ─── Filter, Sort & Select ────────────────────────────────
  filter:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  filterCheck:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><polyline points="11 15 13 17 17 13"/></svg>`,
  listView:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  sortAsc:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/><path d="M14 3l3 3-3 3"/></svg>`,
  sortDesc:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/><path d="M14 21l3-3-3-3"/></svg>`,
  sortCenter:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 6h18M7 12h10M11 18h2"/></svg>`,

  // ─── Drag, Pin & Select ───────────────────────────────────
  drag:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="9" cy="5" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="19" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="5" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="19" r="1" fill="currentColor" stroke="none"/></svg>`,
  move:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg>`,
  moveUp:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7-7 7 7"/><line x1="5" y1="19" x2="19" y2="19"/></svg>`,
  moveDown:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="3"/><polyline points="6 11 12 17 18 11"/></svg>`,
  pinFilled:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" fill="currentColor" opacity="0.15"/><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  selectAll:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  selectBox:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 8V6a2 2 0 0 1 2-2h2M3 16v2a2 2 0 0 0 2 2h2M17 4h2a2 2 0 0 1 2 2v2M17 20h2a2 2 0 0 0 2-2v-2"/><rect x="7" y="8" width="10" height="8" rx="1"/></svg>`,
};

const alertStatus = {

  // ─── Status Indicators ────────────────────────────────────
  online: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/></svg>`,
  offline: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>`,
  away: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  busy: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  pending: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke-dasharray="4 2"/><polyline points="12 7 12 12 15 14"/></svg>`,
  verified: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 2.4 3.3-.9 1.2 3.1 3.1 1.2-.9 3.3L23 14l-1.9 2.4.9 3.3-3.1 1.2-1.2 3.1-3.3-.9L12 25l-2.4-1.9-3.3.9-1.2-3.1L2 18.8l.9-3.3L1 13l1.9-2.4L2 7.3l3.1-1.2L6.3 3l3.3.9z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  blocked: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
  draftStatus: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke-dasharray="3 3"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,

  // ─── Alerts & Warnings ────────────────────────────────────
  alertOctagon: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  warningFill: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="currentColor" opacity="0.15"/><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  error: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  flagAlert: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/><line x1="12" y1="7" x2="12" y2="10"/><line x1="12" y1="12" x2="12.01" y2="12"/></svg>`,
  shieldAlert: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  bellAlert: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,

  // ─── Progress & Loading ───────────────────────────────────
  spinner: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.22-8.56"/></svg>`,
  progressBar: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="20" height="6" rx="3"/><rect x="2" y="9" width="13" height="6" rx="3" fill="currentColor" stroke="none" opacity="0.2"/><line x1="15" y1="9" x2="15" y2="15"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  stepDone: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg>`,
  steps: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><line x1="7.5" y1="12" x2="9.5" y2="12"/><line x1="14.5" y1="12" x2="16.5" y2="12"/></svg>`,
  queued: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 7 12 12 16 12"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" opacity="0.2"/></svg>`,
  retrying: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h3V4"/><path d="M6 7A9 9 0 1 1 5 15"/></svg>`,

  // ─── Badges ───────────────────────────────────────────────
  dotBadge: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="19" cy="5" r="3"/><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  liveBadge: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="5"/><circle cx="8" cy="12" r="2" fill="currentColor" stroke="none"/><line x1="13" y1="10" x2="13" y2="14"/><line x1="16" y1="10" x2="16" y2="14"/></svg>`,
  tagBadge: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"/></svg>`,

  // ─── System Health ────────────────────────────────────────
  pulse: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  uptime: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><rect x="1" y="3" width="22" height="3" rx="1"/></svg>`,
  maintenance: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  serverDown: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><line x1="14" y1="18" x2="18" y2="14"/><line x1="14" y1="14" x2="18" y2="18"/></svg>`,
  latency: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12"/><line x1="12" y1="12" x2="16" y2="10"/><path d="M2 12h2M20 12h2M12 2v2M12 20v2"/></svg>`,
  incident: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><path d="M12 8v5"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/></svg>`,
  resolved: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
};

const arrow = {

  // ─── Directional ──────────────────────────────────────────
  arrowUpDown: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 8l7-7 7 7M5 16l7 7 7-7"/></svg>`,
  arrowLeftRight: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M8 5l-7 7 7 7M16 5l7 7-7 7"/></svg>`,
  arrowExpand: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L3 21m0 0h4m-4 0v-4"/><path d="M17 7l4-4m0 0h-4m4 0v4"/><path d="M7 7L3 3m0 0h4m-4 0v4"/><path d="M17 17l4 4m0 0h-4m4 0v-4"/></svg>`,
  arrowCollapse: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l4-4m0 0h-4m4 0v4"/><path d="M21 3l-4 4m0 0h4m-4 0v-4"/><path d="M21 21l-4-4m0 0h4m-4 0v4"/><path d="M3 3l4 4m0 0h-4m4 0v-4"/></svg>`,

  // ─── Navigation Flow ──────────────────────────────────────
  skipFirst: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 18 11 12 17 6"/><line x1="7" y1="18" x2="7" y2="6"/></svg>`,
  skipLast: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 18 13 12 7 6"/><line x1="17" y1="18" x2="17" y2="6"/></svg>`,
  pageFirst: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 17l-5-5 5-5M11 17l-5-5 5-5"/></svg>`,
  pageLast: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 17l5-5-5-5M13 17l5-5-5-5"/></svg>`,
  sortUp: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/><line x1="5" y1="19" x2="19" y2="19"/></svg>`,
  sortDown: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12l7 7 7-7"/><line x1="5" y1="5" x2="19" y2="5"/></svg>`,
  dragHandle: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="18" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="18" r="1" fill="currentColor" stroke="none"/></svg>`,
  move: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18"/><path d="M8 7l4-4 4 4M8 17l4 4 4-4M7 8l-4 4 4 4M17 8l4 4-4 4"/></svg>`,

  // ─── Curved & Bent ────────────────────────────────────────
  cornerDownLeft: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10L4 15l5 5"/><path d="M4 15h10a4 4 0 0 0 4-4V5"/></svg>`,
  cornerDownRight: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 10l5 5-5 5"/><path d="M20 15H10a4 4 0 0 1-4-4V5"/></svg>`,
  returnKey: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10L4 15l5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>`,
  enter: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>`,
  hookLeft: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 8L5 13l5 5"/><path d="M5 13h9a5 5 0 0 0 5-5V3"/></svg>`,
  hookRight: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 8l5 5-5 5"/><path d="M19 13H10a5 5 0 0 1-5-5V3"/></svg>`,
  detour: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h6"/><path d="M7 16l4-4-4-4"/><path d="M11 12h6a4 4 0 0 0 4-4V4"/><path d="M17 8l4-4"/></svg>`,

  // ─── Circular & Rotate ────────────────────────────────────
  spinCw: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 1-6.36 2.64"/><polyline points="3 6 3 3 6 3"/></svg>`,
  spinCcw: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 6.36 2.64"/><polyline points="21 6 21 3 18 3"/></svg>`,
  repeat: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  repeatOnce: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/><line x1="12" y1="14" x2="12" y2="20"/><line x1="10" y1="16" x2="12" y2="14"/></svg>`,
  cycle: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3C7.03 3 3 7.03 3 12"/><path d="M12 21c4.97 0 9-4.03 9-9"/><polyline points="3 12 3 6 9 6"/><polyline points="21 12 21 18 15 18"/></svg>`,
  flipH: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><path d="M7 8l-4 4 4 4"/><path d="M17 8l4 4-4 4"/></svg>`,
  flipV: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M16 7l-4-4-4 4"/><path d="M16 17l-4 4-4-4"/></svg>`,

  // ─── Resize & Move ────────────────────────────────────────
  expandOut: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6"/><path d="M21 3l-7 7M3 21l7-7"/></svg>`,
  collapseIn: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6M20 10h-6V4"/><path d="M10 20l7-7M14 4L7 11"/></svg>`,
  dragResize: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 15 21 21 15 21"/><polyline points="9 3 3 3 3 9"/><line x1="21" y1="21" x2="14" y2="14"/><line x1="3" y1="3" x2="10" y2="10"/></svg>`,
  scaleUp: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 3 21 10 14 10"/><line x1="21" y1="3" x2="12" y2="12"/><rect x="3" y="12" width="9" height="9" rx="1"/></svg>`,
  scaleDown: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 21 3 14 10 14"/><line x1="3" y1="21" x2="12" y2="12"/><rect x="12" y="3" width="9" height="9" rx="1"/></svg>`,
  pan: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>`,
  swapH: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16H3l4 4-4-4 4-4"/><path d="M17 8h4l-4-4 4 4-4 4"/><line x1="3" y1="16" x2="21" y2="16"/><line x1="3" y1="8" x2="21" y2="8"/></svg>`,
  swapV: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7V3l-4 4 4-4-4 4"/><path d="M16 17v4l4-4-4 4 4-4"/><line x1="8" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="16" y2="21"/></svg>`,
};

const commerce = {

  // Shopping
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  cartPlus: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="18" cy="21" r="1"/><path d="M1.5 1.5H5l2.5 12h9l2-8H8"/><line x1="17" y1="4" x2="17" y2="10"/><line x1="14" y1="7" x2="20" y2="7"/></svg>`,
  wishlist: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  storefront: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1-6h16l1 6"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 21V10.5"/><path d="M19 21V10.5"/><rect x="9" y="13" width="6" height="8" rx="1"/></svg>`,
  compare: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="8" height="12" rx="1"/><rect x="14" y="4" width="8" height="12" rx="1"/><path d="M10 10h4"/><path d="M12 8v4"/></svg>`,
  savedItems: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="12" y1="8" x2="12" y2="14"/></svg>`,

  // Payment
  wallet: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 7V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"/><circle cx="17" cy="13" r="1.5"/></svg>`,
  scanPay: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h2v2h-2z"/><path d="M18 14h3"/><path d="M14 18h3"/><path d="M18 18h3v3"/></svg>`,
  bank: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-3 7 3"/><path d="M7 10v11"/><path d="M12 10v11"/><path d="M17 10v11"/></svg>`,
  transfer: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M15 6l6 6-6 6"/><path d="M9 18l-6-6 6-6"/></svg>`,
  invoice: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>`,
  refund: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3"/><path d="M7 11l-4 4 4 4"/><path d="M15 12h2"/></svg>`,
  crypto: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,

  // Analytics
  funnel: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8.5V19l-4-2v-4.5z"/></svg>`,
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>`,
  conversion: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M10 12h4"/><path d="M3 7l4 5-4 5"/></svg>`,
  kpi: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/><circle cx="12" cy="7" r="2"/></svg>`,
  heatmap: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="4" height="4" rx="0.5"/><rect x="10" y="3" width="4" height="4" rx="0.5"/><rect x="17" y="3" width="4" height="4" rx="0.5"/><rect x="3" y="10" width="4" height="4" rx="0.5"/><rect x="10" y="10" width="4" height="4" rx="0.5"/><rect x="17" y="10" width="4" height="4" rx="0.5"/><rect x="3" y="17" width="4" height="4" rx="0.5"/><rect x="10" y="17" width="4" height="4" rx="0.5"/><rect x="17" y="17" width="4" height="4" rx="0.5"/></svg>`,

  // Promotions
  coupon: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  flashSale: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  loyalty: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  referral: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  bundle: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="10" height="10" rx="1"/><rect x="13" y="3" width="10" height="10" rx="1"/><rect x="1" y="13" width="22" height="8" rx="1"/></svg>`,
  giftCard: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M12 7V21"/><path d="M2 12h20"/><path d="M12 7a3 3 0 0 0-3-3c-1.5 0-2 1-2 2s.5 1 2 1h3z"/><path d="M12 7a3 3 0 0 1 3-3c1.5 0 2 1 2 2s-.5 1-2 1h-3z"/></svg>`,
  promoCode: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="20" height="8" rx="2"/><path d="M6 8V6a2 2 0 0 1 4 0v2"/><path d="M14 8V6a2 2 0 0 1 4 0v2"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,

  // Logistics
  shipping: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  tracking: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12"/></svg>`,
  returns: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>`,
  warehouse: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20V9l10-6 10 6v11H2z"/><rect x="9" y="14" width="6" height="6" rx="0.5"/><path d="M9 11h6"/></svg>`,
  packaging: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  estimate: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
};

const filesFolder = {

  // ─── File Types ───────────────────────────────────────────
  fileImage: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/><path d="M20 17l-3-3-4 5H7"/></svg>`,
  fileVideo: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polygon points="9 13 9 18 15 15.5 9 13"/></svg>`,
  fileAudio: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M10 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M12 15V9l4 1"/></svg>`,
  fileCode: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/></svg>`,
  fileZip: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="12" y1="13" x2="12" y2="13.01"/><rect x="10" y="15" width="4" height="4" rx="1"/></svg>`,
  filePdf: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h1.5a1.5 1.5 0 0 0 0-3H8v6"/><path d="M15 16a2 2 0 0 0 0-4h-1v4h1z"/></svg>`,
  fileSpreadsheet: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/><line x1="12" y1="10" x2="12" y2="18"/></svg>`,
  fileLink: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M10 14a2.5 2.5 0 0 0 3.5.4l1-1a2.5 2.5 0 0 0-3.5-3.5l-.5.5"/><path d="M14 13a2.5 2.5 0 0 0-3.5-.4l-1 1a2.5 2.5 0 0 0 3.5 3.5l.5-.5"/></svg>`,
  fileCheck: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>`,
  fileWarning: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="12" x2="12" y2="15"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,

  // ─── File Actions ─────────────────────────────────────────
  fileCopy: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  fileMove: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h5"/><polyline points="14 2 14 8 20 8"/><path d="M17 16l4 4-4 4"/><line x1="21" y1="20" x2="13" y2="20"/></svg>`,
  fileRename: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"/><polyline points="14 2 14 8 20 8"/><path d="M18 21v-6"/><path d="M15 18l3-3 3 3"/></svg>`,
  fileShare: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"/><polyline points="14 2 14 8 20 8"/><circle cx="17" cy="16" r="2"/><circle cx="22" cy="13" r="2"/><circle cx="22" cy="19" r="2"/><line x1="19" y1="15" x2="20.5" y2="14"/><line x1="19" y1="17" x2="20.5" y2="18"/></svg>`,
  fileLock: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><rect x="9" y="13" width="6" height="5" rx="1"/><path d="M11 13v-1.5a1 1 0 0 1 2 0V13"/></svg>`,
  fileDiff: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/><line x1="10" y1="18" x2="14" y2="18"/></svg>`,
  fileHistory: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"/><polyline points="14 2 14 8 20 8"/><circle cx="18" cy="18" r="4"/><polyline points="18 16 18 18 20 18"/></svg>`,
  fileSearch: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"/><polyline points="14 2 14 8 20 8"/><circle cx="16.5" cy="17.5" r="3"/><line x1="21" y1="22" x2="18.88" y2="19.88"/></svg>`,
  fileDelete: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8"/><polyline points="14 2 14 8 20 8"/><line x1="15" y1="13" x2="21" y2="19"/><line x1="21" y1="13" x2="15" y2="19"/></svg>`,
  fileExport: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"/><polyline points="14 2 14 8 20 8"/><path d="M17 13v6"/><path d="M14 16l3-3 3 3"/></svg>`,

  // ─── Folders ──────────────────────────────────────────────
  folderShared: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><circle cx="12" cy="14" r="2"/><path d="M9 19c0-1.7 1.3-3 3-3s3 1.3 3 3"/></svg>`,
  folderStar: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10V8a2 2 0 0 0-2-2H9L7 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><polygon points="17 13 18.5 16 22 16.5 19.5 18.9 20.1 22.4 17 20.8 13.9 22.4 14.5 18.9 12 16.5 15.5 16 17 13"/></svg>`,
  folderLock: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v3"/><rect x="14" y="15" width="8" height="6" rx="1"/><path d="M16 15v-2a2 2 0 0 1 4 0v2"/></svg>`,
  folderZip: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="12" y1="13" x2="12" y2="13.01"/><rect x="10" y="15" width="4" height="3" rx="0.5"/></svg>`,
  folderMove: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v2"/><path d="M15 17l4 4 4-4"/><line x1="19" y1="21" x2="19" y2="13"/></svg>`,
  folderSync: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v2"/><path d="M22 18a4 4 0 0 1-4 4"/><path d="M14 18a4 4 0 0 1 4-4"/><polyline points="22 14 22 18 18 18"/><polyline points="14 22 14 18 18 18"/></svg>`,
  folderDelete: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v2"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="21" y1="15" x2="15" y2="21"/></svg>`,
  folderSearch: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v2"/><circle cx="17" cy="17" r="3"/><line x1="21" y1="21" x2="19.1" y2="19.1"/></svg>`,
  folderTree: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 0 1 2-2h4l2 3h3a2 2 0 0 1 2 2v1H3z"/><path d="M3 11v8a2 2 0 0 0 2 2h4"/><path d="M12 16h4a2 2 0 0 0 2-2v-1"/><path d="M13 19h5a2 2 0 0 0 2-2v-4h-7z"/></svg>`,

  // ─── Cloud & Sync ─────────────────────────────────────────
  cloudUpload: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>`,
  cloudDownload: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>`,
  cloudSync: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><polyline points="12 13 12 17"/><polyline points="10 15 12 13 14 15"/></svg>`,
  cloudCheck: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><polyline points="9 16 11 18 15 14"/></svg>`,
  cloudOff: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  cloudFolder: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><path d="M9 14h1.5l1 1.5h3l1-1.5H17v4H9z"/></svg>`,
  cloudLock: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 20H9a8 8 0 0 1-.7-16h.96A8 8 0 0 1 18 10h-1a5 5 0 0 0 0 10h.1"/><rect x="15" y="15" width="7" height="6" rx="1"/><path d="M17 15v-2a2 2 0 0 1 3 0v2"/></svg>`,

  // ─── Storage ──────────────────────────────────────────────
  hardDrive: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>`,
  usbDrive: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="12" rx="2"/><path d="M12 14v8"/><path d="M9 20h6"/><line x1="10" y1="6" x2="10" y2="10"/><line x1="14" y1="6" x2="14" y2="10"/><line x1="10" y1="8" x2="14" y2="8"/></svg>`,
  sdCard: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2h13a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7l5-5z"/><line x1="9" y1="7" x2="9" y2="2"/><line x1="12" y1="7" x2="12" y2="2"/><line x1="15" y1="7" x2="15" y2="2"/></svg>`,
  trashRestore: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><polyline points="3 6 5 6 21 6"/><path d="M9 6V4h6v2"/><path d="M12 17v-6"/><path d="M10 13l2-2 2 2"/></svg>`,
  compress: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 3 16 3"/><line x1="21" y1="3" x2="14" y2="10"/><polyline points="3 16 3 21 8 21"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
  extract: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><line x1="21" y1="3" x2="14" y2="10"/><polyline points="9 21 3 21 3 15"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
};

const media = {

  // ─── Playback ─────────────────────────────────────────────
  play:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21"/></svg>`,
  pause:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`,
  stop:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>`,
  skipBack:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4"/><line x1="5" y1="19" x2="5" y2="5"/></svg>`,
  skipForward:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20"/><line x1="19" y1="5" x2="19" y2="19"/></svg>`,
  replay:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></svg>`,
  rewind:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 19 2 12 11 5"/><polygon points="22 19 13 12 22 5"/></svg>`,
  fastForward:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 19 22 12 13 5"/><polygon points="2 19 11 12 2 5"/></svg>`,
  playCircle:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="10 15 15 12 10 9"/></svg>`,
  pauseCircle:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg>`,
  jumpToStart:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M5 12l4-4M5 12l4 4"/><line x1="18" y1="5" x2="18" y2="19"/></svg>`,
  playNext:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"/><line x1="19" y1="3" x2="19" y2="21"/></svg>`,

  // ─── Volume & Audio ───────────────────────────────────────
  volumeOff:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19"/></svg>`,
  volumeLow:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  volumeHigh:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  volumeMute:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  music:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  headphones:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  mic:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  micOff:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  equalizer:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="20" height="8" rx="2"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>`,
  audioSliders:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  liveSignal:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>`,

  // ─── Screen & Display ─────────────────────────────────────
  monitor:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  tv:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
  smartphone:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  screenCast:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><rect x="7" y="8" width="10" height="8" rx="1"/></svg>`,
  fullscreen:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`,
  exitFullscreen: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>`,
  videoOn:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="14" height="10" rx="2"/><path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.87v6.26a1 1 0 0 1-1.447.9L15 14"/></svg>`,
  videoOff:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="M7.5 4H14a2 2 0 0 1 2 2v3.34"/><path d="M15 10l6-3v10l-4.5-2.25"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  image:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  film:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
  camera:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,

  // ─── Streaming & Broadcast ────────────────────────────────
  liveCircle:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="11"/></svg>`,
  broadcast:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 19M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" y1="20" x2="2.01" y2="20"/></svg>`,
  airplay:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2"/><polygon points="12 15 17 21 7 21"/></svg>`,
  subtitles:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h4M15 15h2M7 11h2M13 11h4"/></svg>`,
  playlist:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  playlistCheck:  `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg>`,

  // ─── Queue & Controls ─────────────────────────────────────
  shuffle:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>`,
  repeatAll:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  repeatOne:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/><line x1="11" y1="11" x2="13" y2="13"/></svg>`,
  loop:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  queueList:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="15" x2="13" y2="15"/></svg>`,
  heart:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  bookmark:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  share:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  download:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  star:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
};

const misc = {

  // ─── Time & Date ──────────────────────────────────────────
  alarm: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M5 3L2 6M22 6l-3-3"/><line x1="12" y1="10" x2="12" y2="13"/><line x1="12" y1="13" x2="14.5" y2="13"/></svg>`,
  timer: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="8"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="9" y1="2" x2="15" y2="2"/><path d="M12 10v4l3 2"/></svg>`,
  stopwatch: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="7"/><path d="M12 7V3"/><path d="M9 3h6"/><path d="M19.5 8.5l1-1"/><path d="M12 14l-3-3"/></svg>`,
  calendarCheck: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></svg>`,
  calendarPlus: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="14" x2="12" y2="19"/><line x1="9.5" y1="16.5" x2="14.5" y2="16.5"/></svg>`,
  calendarRange: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="7" y1="15" x2="17" y2="15"/><line x1="7" y1="19" x2="13" y2="19"/></svg>`,
  history: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><polyline points="12 7 12 12 15 14"/></svg>`,
  timeZone: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="12" y1="7" x2="12" y2="12"/><line x1="12" y1="12" x2="15" y2="10"/></svg>`,

  // ─── Text & Editor ────────────────────────────────────────
  strikethrough: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><path d="M17.5 6.5C17.5 4.57 15.38 3 12 3S6.5 4.57 6.5 7c0 1.63 1.13 2.83 2.5 3.5"/><path d="M6.5 17.5C6.5 19.43 8.62 21 12 21s5.5-1.57 5.5-4c0-1.35-.8-2.5-2-3.3"/></svg>`,
  codeInline: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  heading: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v16"/><path d="M18 4v16"/><path d="M6 12h12"/></svg>`,
  quote: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`,
  alignJustify: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>`,
  listOrdered: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>`,
  listUnordered: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1" fill="currentColor" stroke="none"/></svg>`,

  // ─── Productivity ─────────────────────────────────────────
  bookmarkCheck: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><polyline points="9 10 11 12 15 8"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v3.76z"/></svg>`,
  stickyNote: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 17H8M16 13H8M10 9H8"/></svg>`,
  checklist: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="7" x2="21" y2="7"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="17" x2="21" y2="17"/><polyline points="4 7 5 8 7 6"/><polyline points="4 12 5 13 7 11"/><polyline points="4 17 5 18 7 16"/></svg>`,
  kanban: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="5" height="14" rx="1"/><rect x="10" y="3" width="5" height="9" rx="1"/><rect x="17" y="3" width="5" height="11" rx="1"/></svg>`,
  focusMode: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/></svg>`,
  template: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  table: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
  mindmap: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="3" cy="6" r="2"/><circle cx="3" cy="18" r="2"/><circle cx="21" cy="6" r="2"/><circle cx="21" cy="18" r="2"/><line x1="5" y1="6.5" x2="9.5" y2="10.5"/><line x1="5" y1="17.5" x2="9.5" y2="13.5"/><line x1="19" y1="6.5" x2="14.5" y2="10.5"/><line x1="19" y1="17.5" x2="14.5" y2="13.5"/></svg>`,
  sprint: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,

  // ─── Creativity & Expression ──────────────────────────────
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2-.9 2-2 0-.5-.19-.97-.47-1.35-.27-.37-.44-.83-.44-1.32 0-1.1.9-2 2-2h2.35C19.9 15.33 22 13.87 22 12c0-5.52-4.48-10-10-10z"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="14.5" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="11.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="6" cy="13" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  brush: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.48 1.02 3.5 1.02 2.2 0 3.5-1.9 3.5-4.04 0-1.67-1.33-3.02-2-2.02z"/></svg>`,
  penTool: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  eyedropper: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14l-9.5-9.5a3.53 3.53 0 0 0-5 5L15 19l5-5z"/><path d="M14.5 9.5L11 13"/><circle cx="4.5" cy="20.5" r="1.5"/></svg>`,
  crop: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><path d="M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12"/><circle cx="12" cy="12" r="3"/></svg>`,
  blend: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="4"/><circle cx="18" cy="12" r="4"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,

  // ─── Utility ──────────────────────────────────────────────
  qrCode: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="5" y="5" width="3" height="3"/><rect x="16" y="5" width="3" height="3"/><rect x="5" y="16" width="3" height="3"/><line x1="14" y1="14" x2="14" y2="14.01"/><line x1="18" y1="14" x2="18" y2="14.01"/><line x1="14" y1="18" x2="14" y2="18.01"/><line x1="18" y1="18" x2="18" y2="18.01"/><line x1="21" y1="21" x2="21" y2="21.01"/></svg>`,
  barcode: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 5v14M7 5v14M11 5v14M13 5v14M17 5v14M21 5v14M9 5v6M15 5v6M9 13v6M15 13v6"/></svg>`,
  cursor: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/></svg>`,
  selection: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3H5a2 2 0 0 0-2 2v2M17 3h2a2 2 0 0 1 2 2v2M3 17v2a2 2 0 0 0 2 2h2M17 21h2a2 2 0 0 0 2-2v-2"/><rect x="7" y="7" width="10" height="10" rx="1" stroke-dasharray="3 2"/></svg>`,
  keyboard: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="10" x2="6.01" y2="10"/><line x1="10" y1="10" x2="10.01" y2="10"/><line x1="14" y1="10" x2="14.01" y2="10"/><line x1="18" y1="10" x2="18.01" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4a2 2 0 0 1-2-2V5h4"/><path d="M18 9h2a2 2 0 0 0 2-2V5h-4"/><path d="M8 21h8M12 17v4"/><path d="M18 3H6v9a6 6 0 0 0 12 0V3z"/></svg>`,
  diamond: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M2 9h20M6 3l4 6M18 3l-4 6"/></svg>`,
  hourglass: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>`,
  puzzle: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02v.003z"/></svg>`,
};

const natureWeather = {

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

const security = {

  // ─── Lock & Unlock ────────────────────────────────────────
  lock:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  unlock:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  lockDot:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><line x1="12" y1="15" x2="12" y2="18"/><circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"/></svg>`,
  lockCheck:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><polyline points="9 17 11 19 15 15"/></svg>`,
  lockPlus:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><line x1="9" y1="16" x2="15" y2="16"/><line x1="12" y1="13" x2="12" y2="19"/></svg>`,
  lockMinus:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><line x1="9" y1="16" x2="15" y2="16"/></svg>`,
  lockBox:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2"/><rect x="6" y="2" width="12" height="8" rx="2"/><line x1="12" y1="14" x2="12" y2="17"/></svg>`,
  padlock:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/></svg>`,

  // ─── Shield & Protection ──────────────────────────────────
  shield:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  shieldCheck:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  shieldOff:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>`,
  shieldAlert:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="15" x2="12.01" y2="15"/></svg>`,
  shieldPlus:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="12" y1="9" x2="12" y2="15"/></svg>`,
  shieldUser:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="13" r="2"/><line x1="12" y1="9" x2="12" y2="11"/></svg>`,
  shieldFull:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  shieldFullCheck:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><polyline points="9 12 11 14 15 10"/></svg>`,

  // ─── Eye & Visibility ─────────────────────────────────────
  eye:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  eyeFocus:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>`,
  eyeScan:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/><polyline points="10 10 12 12 14 10"/></svg>`,
  eyeSlash:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M21 12c-2.4 4-5.4 6-9 6-3.6 0-6.6-2-9-6 2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6z"/><path d="M3 3l18 18"/></svg>`,

  // ─── Keys & Authentication ────────────────────────────────
  key:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
  keyRound:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4 4L2 18"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>`,
  keyCheck:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/><polyline points="11 17 13 19 17 15"/></svg>`,
  fingerprint:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/><path d="M5 19.5C5.5 18 6 15 6 12c0-1.7.4-3.3 1.1-4.7"/><path d="M17.6 17.5c-.3.8-.7 1.6-1.3 2.3"/><path d="M12 22c-.5-1.5-1-4-1-6 0-2.2.9-4.2 2.4-5.7"/><path d="M22 12c0 2.5-.6 4.9-1.6 7"/><path d="M12 6a6 6 0 0 1 6 6"/></svg>`,
  voiceAuth:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  otp:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
  pinPad:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h.01M12 9h.01M15 9h.01M9 12h.01M12 12h.01M15 12h.01M9 15h.01M12 15h.01"/></svg>`,
  faceId:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg>`,

  // ─── Privacy & Encryption ─────────────────────────────────
  encrypted:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><path d="M8 16h8"/></svg>`,
  doublelock:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15v2"/><rect x="2" y="8" width="20" height="14" rx="2"/><path d="M6 8V6a6 6 0 0 1 12 0v2"/><path d="M8 8V7a4 4 0 0 1 8 0v1"/></svg>`,
  privateNote:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10h8M8 14h5"/><circle cx="17" cy="14" r="2"/></svg>`,
  blocked:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
  noAccess:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
  accessLevel:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>`,
  secureBox:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M12 8v4M12 16h.01"/></svg>`,

  // ─── Alerts & Monitoring ──────────────────────────────────
  shieldWarn:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"/></svg>`,
  securityAlert:  `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  securityBell:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  screenWatch:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><circle cx="12" cy="10" r="3"/></svg>`,
  cctv:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/><circle cx="8" cy="12" r="2"/></svg>`,
  scan:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="10"/></svg>`,
  accessDenied:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l6 6M15 9l-6 6"/></svg>`,

  // ─── Trust & Verification ─────────────────────────────────
  verified:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>`,
  badge:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  trustedStar:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  userVerified:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/><polyline points="9 21 12 18 15 21"/></svg>`,
  userCheck:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="8" r="4"/><path d="M16 21a8 8 0 0 0-12 0"/><circle cx="19" cy="18" r="3"/><polyline points="17 18 19 20 22 17"/></svg>`,
  fileVerified:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13l2 2 4-4"/></svg>`,
  tokenExpiry:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/><path d="M6 2l-.5 2"/><path d="M18 2l.5 2"/></svg>`,
};

const settingTool = {

  // ─── Settings & Config ────────────────────────────────────
  settings:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  settingsCheck:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  settingsAlert:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="15" x2="12.01" y2="15"/></svg>`,
  sliders:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  customize:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  config:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3"/><line x1="7" y1="5" x2="7.01" y2="5"/><line x1="7" y1="12" x2="7.01" y2="12"/><line x1="7" y1="19" x2="7.01" y2="19"/></svg>`,
  display:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><circle cx="12" cy="10" r="3"/></svg>`,
  addSetting:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10"/><circle cx="12" cy="12" r="3"/><path d="M19 16v6M22 19h-6"/></svg>`,

  // ─── Tools & Utilities ────────────────────────────────────
  tool:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  pipeline:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/><path d="M8 6V3M16 6V3M8 21v-3M16 21v-3"/></svg>`,
  plugin:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>`,
  terminal:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  devConsole:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><polyline points="7 8 10 11 7 14"/><line x1="13" y1="14" x2="17" y2="14"/></svg>`,
  stack:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  code:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  package:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,

  // ─── Hardware & System ────────────────────────────────────
  cpu:              `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  server:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  serverRack:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><line x1="18" y1="6" x2="18" y2="6"/><path d="M17 18h2"/></svg>`,
  database:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  dbAlert:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><line x1="12" y1="12" x2="12" y2="15"/><circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/></svg>`,
  dbCheck:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><polyline points="9 12 11 14 15 11"/></svg>`,
  memory:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="10" y1="12" x2="10.01" y2="12"/><path d="M14 12h4"/></svg>`,

  // ─── Network & Connectivity ───────────────────────────────
  wifi:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  wifiOff:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a11 11 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  wifiUp:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/><line x1="12" y1="3" x2="12" y2="9"/><polyline points="9 6 12 3 15 6"/></svg>`,
  bluetooth:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/></svg>`,
  bluetoothConnected:`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>`,
  bluetoothOff:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`,
  hotspot:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="20" height="12" rx="2"/><path d="M6 8V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
  broadcast:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>`,

  // ─── Git & Version Control ────────────────────────────────
  gitBranch:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
  gitCommit:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/></svg>`,
  gitMerge:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>`,
  gitPullRequest:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  gitFork:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><line x1="6" y1="9" x2="6" y2="21"/><path d="M18 9V5a2 2 0 0 0-2-2H8"/><polyline points="12 1 8 5 12 9"/></svg>`,
  github:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  gitlab:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22.2 14.4L12 22 1.8 14.4a.8.8 0 0 1-.3-.9l1-3.1L4.5 4a.6.6 0 0 1 1.1 0l2 6.2h7l2-6.2a.6.6 0 0 1 1.1 0l2 6.4 1 3a.8.8 0 0 1-.5.8z"/></svg>`,

  // ─── Performance & Monitoring ─────────────────────────────
  activity:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  barChart:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
  trendUp:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  trendDown:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>`,
  performance:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>`,
  pulse:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  uptime:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  healthCheck:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,

  // ─── Build & Deploy ───────────────────────────────────────
  deploy:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  pullDeploy:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  sync:             `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  cloudDeploy:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>`,
  cloudUpload:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><polyline points="9 11 12 8 15 11"/><line x1="12" y1="8" x2="12" y2="16"/></svg>`,
  envVars:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/><path d="M8 16h.01M12 16h.01M16 16h.01"/></svg>`,
};

const travelTransport = {

  // ─── Road Vehicles ────────────────────────────────────────
  car:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  carFront:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/><circle cx="9" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 9l2-4h10l2 4"/></svg>`,
  carSide:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 17H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="M18 17h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="6" y="5" width="12" height="12" rx="1"/><circle cx="9" cy="17" r="2"/><circle cx="15" cy="17" r="2"/></svg>`,
  carElectric:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><path d="M9 10h.01M13 10h.01"/></svg>`,
  truck:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  delivery:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H15"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
  van:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M7 7V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M2 12h20M7 9h.01M12 9h.01"/></svg>`,
  bus:            `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h18"/><path d="M4 17l1.5-5h15l1.5 5"/><circle cx="8.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><path d="M2 10h3M10 7v5M14 7v5"/></svg>`,

  // ─── Two Wheels ───────────────────────────────────────────
  bicycle:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><path d="M15 6h-5L7 17"/><path d="M15 6l3 5.5"/><path d="M10 6l-3 .5"/><circle cx="12" cy="6" r="1" fill="currentColor" stroke="none"/></svg>`,
  motorcycle:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="17" r="3"/><circle cx="6" cy="17" r="3"/><path d="M6 14V9l3-3h3l3 3 1 5"/><path d="M6 14h9"/></svg>`,
  scooter:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="17" cy="17" r="3"/><circle cx="7" cy="17" r="3"/><path d="M10 17V9l3-3"/><path d="M13 6h3l1 5.5"/><path d="M7 14h10"/></svg>`,
  moped:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="17" cy="17" r="3"/><circle cx="7" cy="17" r="3"/><path d="M7 14V9a1 1 0 0 1 1-1h4l3 3v3"/><path d="M14 11h3"/></svg>`,

  // ─── Air Travel ───────────────────────────────────────────
  plane:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L9 11 2.8 9.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 17l-2 3.5c-.3.6-.2 1.3.3 1.7l.2.1c.4.3 1 .3 1.3-.1L11 19l2 2 .5.5c.3.3.8.3 1.1 0l.2-.2c.4-.4.5-1 .2-1.4L13 18l5.2 1.7c.5.1 1-.1 1.2-.5z"/></svg>`,
  planeLand:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L9 11 2.8 9.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 17l-2 3.5c-.3.6-.2 1.3.3 1.7l.2.1c.4.3 1 .3 1.3-.1L11 19l2 2 .5.5c.3.3.8.3 1.1 0l.2-.2c.4-.4.5-1 .2-1.4L13 18l5.2 1.7c.5.1 1-.1 1.2-.5z"/><path d="M5 22h14"/></svg>`,
  planeTakeoff:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L9 11 2.8 9.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 17l-2 3.5c-.3.6-.2 1.3.3 1.7l.2.1c.4.3 1 .3 1.3-.1L11 19l2 2 .5.5c.3.3.8.3 1.1 0l.2-.2c.4-.4.5-1 .2-1.4L13 18l5.2 1.7c.5.1 1-.1 1.2-.5z"/><path d="M5 2h4M7 2v4"/></svg>`,
  drone:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="11" width="20" height="5" rx="2"/><path d="M10 11V6a2 2 0 0 1 4 0v5"/><path d="M6 11V9a2 2 0 0 1 4 0v2"/><path d="M14 11V9a2 2 0 0 1 4 0v2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 17v-1M18 17v-1"/></svg>`,
  helicopter:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-1.5 3.5-2 6-2 8a2 2 0 0 0 4 0c0-2-.5-4.5-2-8z"/><path d="M5 10c-1.5 1-2.5 2.5-2.5 4.5A2.5 2.5 0 0 0 5 17h14a2.5 2.5 0 0 0 2.5-2.5c0-2-1-3.5-2.5-4.5"/><path d="M10 17v4M14 17v4M8 21h8"/></svg>`,
  airplay:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2"/><polygon points="12 15 17 21 7 21 12 15"/></svg>`,

  // ─── Rail & Water ─────────────────────────────────────────
  train:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  subway:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="13" rx="2"/><path d="M4 10h16"/><circle cx="9" cy="19" r="2"/><circle cx="15" cy="19" r="2"/><path d="M9 16v1M15 16v1M3 23h18"/></svg>`,
  tram:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M3 8h18M7 4h10l2 4H5z"/><circle cx="8" cy="19" r="2"/><circle cx="16" cy="19" r="2"/><path d="M8 17v-5M16 17v-5"/></svg>`,
  ship:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l3-11h12l3 11H3z"/><path d="M3 17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"/><path d="M9 8v6M15 8v6M6 11h12"/></svg>`,
  ferry:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l3-11h12l3 11H3z"/><path d="M3 17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"/><path d="M12 6v6"/><path d="M9 6h6"/></svg>`,
  sailboat:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"/><path d="M5 12l7-3 7 3"/><path d="M4 19c2-2 5-2 7 0s5 2 7 0"/><path d="M2 22c3-3 7-3 10 0s7 3 10 0"/></svg>`,
  speedboat:      `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 19c2-2 5-2 7 0s5 2 7 0 5-2 6-2"/><path d="M5 16l3-8h8l3 4H5z"/></svg>`,
  cableCar:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="18" rx="1"/><path d="M7 8h10M7 14h10"/><circle cx="12" cy="5.5" r=".5" fill="currentColor" stroke="none"/><circle cx="12" cy="16.5" r=".5" fill="currentColor" stroke="none"/></svg>`,

  // ─── Destination & Booking ────────────────────────────────
  mapPin:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>`,
  flag:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
  ticket:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/><path d="M13 5v2M13 17v2M13 11v2"/></svg>`,
  ticketBooked:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/><path d="M13 5v2M13 17v2M13 11v2"/><polyline points="8 12 10 14 14 10"/></svg>`,
  bookingDate:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
  hotel:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/><path d="M9 7h.01M12 7h.01M15 7h.01"/></svg>`,
  boardingPass:   `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/><path d="M7 15h4M15 15h2M7 18h2"/></svg>`,
  international:  `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,

  // ─── Luggage & Gear ───────────────────────────────────────
  luggage:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
  suitcase:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><circle cx="12" cy="14" r="2"/><path d="M2 11h20"/></svg>`,
  backpack:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M4 13h16M8 13v7M16 13v7"/></svg>`,
  passport:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M8 5V3M16 5V3M8 15h4M15 15h1"/></svg>`,
  idCard:         `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M7 15h4M15 15h2"/><circle cx="6" cy="7.5" r=".5" fill="currentColor" stroke="none"/></svg>`,
  arrivalTime:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><path d="M5 3L3 5M19 3l2 2"/></svg>`,
  route:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="18" r="3"/><circle cx="19" cy="6" r="3"/><path d="M5 15V9a6 6 0 0 1 6-6h2"/><path d="M19 9v6a6 6 0 0 1-6 6H11"/></svg>`,
  navigate:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" fill="currentColor" stroke="none"/></svg>`,

  // ─── Fuel, Parking & Services ─────────────────────────────
  gasStation:     `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14"/><path d="M15 8h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2"/><path d="M3 22h12"/><path d="M9 6V2"/><rect x="5" y="10" width="6" height="4" rx="1"/></svg>`,
  parking:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>`,
  evCar:          `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  carCheck:       `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><polyline points="9 12 11 14 15 10"/></svg>`,
  carPlus:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/></svg>`,
  toll:           `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h18M7 15h1M12 15h1"/><path d="M4 6l2-3h12l2 3"/><path d="M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9"/></svg>`,
  stopPin:        `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><path d="M9 10h6M12 7v6"/></svg>`,
  tripSummary:    `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/><polyline points="8 9 12 6 16 9"/><polyline points="8 21 12 18 16 21"/></svg>`,
};

const userSocial = {
    user: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    userPlus: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`,
    userMinus: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`,
    userCheck: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`,
    userX: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    thumbsUp: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`,
    thumbsDown: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"/><path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>`,
    smile: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    frown: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    meh: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,

};

// flat map — all icons in one object
const icons = {
  ...arrow,
  ...navigation,
  ...ui,
  ...communication,
  ...action,
  ...alertStatus,
  ...commerce,
  ...filesFolder,
  ...media,
  ...misc,
  ...natureWeather,
  ...security,
  ...settingTool,
  ...travelTransport,
  ...userSocial,
};

// category map — for the website browser
const categories = {
  Arrows: arrow,
  Navigation: navigation,
  'UI Controls': ui,
  Communication: communication,
  Actions: action,
  'Alerts & Status': alertStatus,
  Commerce: commerce,
  'Files & Folders': filesFolder,
  Media: media,
  Misc: misc,
  'Nature & Weather': natureWeather,
  Security: security,
  'Settings & Tools': settingTool,
  'Travel & Transport': travelTransport,
  'User & Social': userSocial,
};


// next update icons
// Finance & Banking — every SaaS needs
// Text & Typography — every editor needs
// Development & Code — your users = devs
// Calendar & Time — gap in current list
// Health & Medical — massive market

class PkIcon extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name");
    const size = this.getAttribute("size") || "24";
    const color = this.getAttribute("color") || "currentColor";
    // const strokeWidth = this.getAttribute('stroke-width') || '2';

    // ✅ stroke-width with clamp (1 → 7)
    let strokeWidth = parseFloat(this.getAttribute("stroke-width"));
    if (isNaN(strokeWidth)) strokeWidth = 2;
    strokeWidth = Math.round(Math.min(7, Math.max(1, strokeWidth)));
    
    const fill = this.getAttribute("fill") === "true" ? color : "none";
    const strokeLinecap = this.getAttribute("stroke-linecap") || "round";
    const strokeLinejoin = this.getAttribute("stroke-linejoin") || "round";
    const opacity = this.getAttribute("opacity") || "1";

    const svgString = icons[name];
    if (!svgString) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    const svg = doc.querySelector("svg");

    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("stroke", color);
    svg.setAttribute("stroke-width", strokeWidth);
    svg.setAttribute("fill", fill);
    svg.setAttribute("stroke-linecap", strokeLinecap);
    svg.setAttribute("stroke-linejoin", strokeLinejoin);
    svg.setAttribute("opacity", opacity);

    this.innerHTML = svg.outerHTML;
  }
}

if (typeof window !== "undefined" && window.customElements) {
  if (!customElements.get("pk-icon")) {
    customElements.define("pk-icon", PkIcon);
  }
}

export { categories, icons };
