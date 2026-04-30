const navigation = {
    home: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12L12 3l9 9"/><path d="M9 21V12h6v9"/><path d="M3 12v9h18v-9"/></svg>`,
    map: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
    mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    navigation: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
    compass: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    link: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    anchor: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`,

};

// flat map — all icons in one object
const icons$1 = {
  ...navigation,
};

// category map — for the website browser
const categories = {
  Navigation: navigation,
  // ...
};

// const icons = {
//   // ─── Arrows ───────────────────────────────────────────────
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

export { categories, icons$1 as icons };
