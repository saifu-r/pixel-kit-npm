# pkicon

A lightweight Web Components icon library. Drop SVG icons into any HTML page with a single custom tag — no frameworks, no build steps, no external requests.

---

## Features

- Inline SVG rendering — icons live in your DOM, not behind a network call
- Works anywhere — plain HTML, React, Vue, Angular, or whatever you're building with
- Zero dependencies

---

## Installation

```bash
npm install pkicon
```

---

## Usage

Import once, use anywhere:

```html
<script type="module">
  import 'pkicon';
</script>
```

Then drop icons into your markup:

```html
<pk-icon name="cross"></pk-icon>
<pk-icon name="check"></pk-icon>
```

---

## Available Icons

| Name    | Description       |
|---------|-------------------|
| `cross` | Close / cancel    |
| `check` | Success / confirm |

---

## Attributes

| Attribute | Type     | Description                |
|-----------|----------|----------------------------|
| `name`    | `string` | Name of the icon to render |

---

## Requirements

Works in all modern browsers. Always provide the `name` attribute — without it, nothing renders.

---

## Roadmap

- Size and color props
- CDN distribution
- Icon preview site
- Angular and React wrapper packages

---

## License

MIT

---

## Author

**saifu-r**