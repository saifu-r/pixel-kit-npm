class PkIcons extends HTMLElement {
  connectedCallback() {
    const iconName = this.getAttribute('name');
    this.innerHTML = this.getIcon(iconName);
  }

  getIcon(name) {
    const icons = {
      cross: `<svg viewBox="0 0 24 24"><path d="M6 6L18 18M6 18L18 6"/></svg>`,
      check: `<svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>`
    };

    return icons[name] || '';
  }
}

// ✅ SAFE REGISTRATION (important)
if (typeof window !== 'undefined' && window.customElements) {
  if (!customElements.get('pk-icon')) {
    customElements.define('pk-icon', PkIcon);
  }
}