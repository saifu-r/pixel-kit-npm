# pkicon

Lightweight SVG icon library using Web Components.
Use icons in your HTML with a simple custom tag.

---

## ✨ Features

* ⚡ Simple and clean syntax
* 🎨 Inline SVG (no external requests)
* 🚀 Lightweight & fast
* 🔌 Framework agnostic (Angular, React, Vue, plain HTML)
* 🧩 Easily extendable

---

## 📦 Installation

```bash
npm install pkicon
```

---

## 🚀 Usage

### 1. Import the package

```html
<script type="module">
  import 'pkicon';
</script>
```

---

### 2. Use in HTML

```html
<pk-icon name="cross"></pk-icon>
<pk-icon name="check"></pk-icon>
```

---

## 🎯 Available Icons

| Name  | Description         |
| ----- | ------------------- |
| cross | Close / cancel icon |
| check | Success / tick icon |

---

## ⚙️ Attributes

| Attribute | Type   | Description |
| --------- | ------ | ----------- |
| name      | string | Icon name   |

---

### Example

```html
<pk-icon name="cross"></pk-icon>
```

---

## 🧠 How It Works

`pkicon` uses the Web Components API to define a custom HTML element.

When you write:

```html
<pk-icon name="cross"></pk-icon>
```

It dynamically injects the SVG into the DOM.

---

## 📁 Project Structure

```
pkicon/
├── dist/
│   └── index.js
├── package.json
└── README.md
```

---

## 🛠️ Adding New Icons

Edit your icon map:

```js
const icons = {
  cross: `<svg>...</svg>`,
  check: `<svg>...</svg>`
};
```

---

## ⚠️ Notes

* Always use the `name` attribute
* Works in modern browsers (Web Components support required)

---

## 🔮 Roadmap

* 🎨 Size & color support
* 🌐 CDN delivery
* 🔍 Icon preview website
* ⚙️ Angular / React wrappers

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**saifu-r**
