// export const arrow= {
//   arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
//   arrowDown: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>`,
//   arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>`,
//   arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
//   arrowUpLeft: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 17L7 7M7 17V7h10"/></svg>`,
//   arrowUpRight: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>`,
//   arrowDownLeft: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 7L7 17M17 17H7V7"/></svg>`,
//   arrowDownRight: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7l10 10M17 7v10H7"/></svg>`,
//   chevronUp: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>`,
//   chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
//   chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
//   chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`,
//   chevronsUp: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/></svg>`,
//   chevronsDown: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>`,
//   chevronsLeft: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/></svg>`,
//   chevronsRight: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>`,
//   cornerUpLeft: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a4 4 0 0 1 4 4v6"/></svg>`,
//   cornerUpRight: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14l5-5-5-5"/><path d="M20 9H10a4 4 0 0 0-4 4v6"/></svg>`,
//   rotateCw: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M21 13a9 9 0 1 1-3-7.7L21 8"/></svg>`,
//   rotateCcw: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v6h6"/><path d="M3 13a9 9 0 1 0 3-7.7L3 8"/></svg>`,

// }

export const arrow = {

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