
// 1. IMPORT for use inside this file (for the web component)
import { icons } from './icons/index.js';

// 2. EXPORT so npm users can access icons and categories
export { icons, categories } from './icons/index.js';

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
