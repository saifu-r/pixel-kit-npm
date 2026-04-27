const icons = {
  cross: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <path d="M6 6L18 18M6 18L18 6"/>
  </svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <path d="M5 13l4 4L19 7"/>
  </svg>`
};

class PkIcon extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    this.innerHTML = icons[name] || '';
  }
}

if (typeof window !== 'undefined' && window.customElements) {
  if (!customElements.get('pk-icon')) {
    customElements.define('pk-icon', PkIcon);
  }
}
