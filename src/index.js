const icons = {
  cross: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round">
    <path d="M6 6L18 18M6 18L18 6"/>
  </svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round">
    <path d="M5 13l4 4L19 7"/>
  </svg>`
};

class PkIcon extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    const size = this.getAttribute('size') || '24';
    const color = this.getAttribute('color') || 'currentColor';

    const svgString = icons[name];
    if (!svgString) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const svg = doc.querySelector('svg');

    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('stroke', color);
    svg.setAttribute('stroke-width', '2');

    this.innerHTML = svg.outerHTML;
  }
}

if (typeof window !== 'undefined' && window.customElements) {
  if (!customElements.get('pk-icon')) {
    customElements.define('pk-icon', PkIcon);
  }
}