# pkicon

A lightweight Web Components icon library. Drop SVG icons into any HTML page with a single custom tag — no frameworks, no build steps, no external requests.

---

## Features

- Inline SVG rendering — icons live in your DOM, not behind a network call
- Works anywhere — plain HTML, React, Vue, Angular, or whatever you're building with
- 200+ icons out of the box
- Fully customizable via attributes
- Zero dependencies

---

## Installation

```bash
npm install pkicon
```

## CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/pkicon/dist/index.js"></script>
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

## Attributes

| Attribute        | Type                              | Default        | Description                        |
|------------------|-----------------------------------|----------------|------------------------------------|
| `name`           | `string`                          | —              | Icon name (required)               |
| `size`           | `number`                          | `24`           | Width and height in pixels         |
| `color`          | `string` (keyword or hex)         | `currentColor` | Stroke color                       |
| `fill`           | `boolean` (`true` / `false`)      | `false`        | Fill the icon with the stroke color|
| `stroke-width`   | `number`                          | `2`            | Stroke thickness in pixels         |
| `stroke-linecap` | `round` / `square` / `butt`       | `round`        | Shape of line endings              |
| `stroke-linejoin`| `round` / `miter` / `bevel`       | `round`        | Shape of line corners              |
| `opacity`        | `number` (0 to 1)                 | `1`            | Icon transparency                  |


---

## Examples

```html
<!-- Basic -->
<pk-icon name="check"></pk-icon>

<!-- Size and color -->
<pk-icon name="heart" size="32" color="red"></pk-icon>

<!-- Filled icon -->
<pk-icon name="star" color="gold" fill="true"></pk-icon>

<!-- Custom stroke -->
<pk-icon name="circle" stroke-width="1" stroke-linecap="square"></pk-icon>

<!-- Opacity -->
<pk-icon name="bell" opacity="0.5"></pk-icon>

<!-- Combined -->
<pk-icon name="star" color="gold" fill="true" size="48" opacity="0.8"></pk-icon>
```

---

## Available Icons

500+ icons across 15 categories — arrows, navigation, communication, files, media, user, security, alerts, actions, tools, commerce, weather, travel, and more.

Full icon list: [pkicon icons](https://www.npmjs.com/package/pkicon)

---

## Requirements

Works in all modern browsers. Always provide the `name` attribute — without it, nothing renders.

---

## Roadmap

- ~~Size and color props~~ ✓
- ~~CDN distribution~~ ✓
- Icon preview site
- Angular and React wrapper packages
- Icon rotation and flip attributes

---

## License

MIT © 2026 Saifu-r

---

## Author

**saifu-r**