# 🌟 LittleKids Store

A fun, colorful, responsive online store for children aged 0–10.
Built with **React + Vite**.

## ✨ Features

- 🏠 **Home** – hero, categories, best sellers, sale banner, confetti ("Surprise Me!")
- 🛍️ **Shop** – product grid with category / age / price filters and sorting
- 📦 **Product page** – big image, quantity picker, customer reviews
- 🛒 **Cart** – add / remove items, change quantity, order summary with tax
- 💛 **About** and 📬 **Contact** pages, plus a newsletter box in the footer
- 📱 Works on phones (hamburger menu, stacked layouts)

## 🚀 Run it

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install      # first time only
npm run dev      # then open http://localhost:5173
```

To build for production: `npm run build` (output goes to `dist/`), and `npm run preview` to test it.

## 📁 Folder structure

```
little-kids-store/
├── index.html              ← page shell + Google Fonts
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            ← starts React
    ├── App.jsx             ← keeps the state (page, cart) and shows the right page
    ├── data.js             ← products + categories  (edit this to change the shop)
    ├── styles.css          ← animations, hover effects, mobile rules
    ├── components/         ← small pieces reused on several pages
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── ProductCard.jsx
    │   ├── Stars.jsx
    │   └── Decorations.jsx     (Wave, FloatEmoji, Confetti)
    └── pages/              ← one file per page
        ├── Home.jsx
        ├── Shop.jsx
        ├── Product.jsx
        ├── Cart.jsx
        ├── About.jsx
        └── Contact.jsx
```

There is no router: `App.jsx` keeps a `page` value (`"home"`, `"shop"`, `"product"`, `"cart"`, `"about"`, `"contact"`) and shows the matching page.

## 🔧 Common changes

| I want to… | Edit |
|---|---|
| Add or change a product | `src/data.js` |
| Change a page's text or layout | the file in `src/pages/` |
| Change the menu or top banner | `src/components/Navbar.jsx` |
| Change animations or mobile breakpoint | `src/styles.css` |

## 🎨 Fonts & colors

Fonts: **Boogaloo** (titles), **Bubblegum Sans** (buttons), **Nunito** (text).
Main colors: pink `#FF6BB5`, purple `#9B5FE0`, blue `#54A0FF`, green `#48DB71`, orange `#FF9F43`.

Product photos load from Unsplash by URL, so you need an internet connection to see them.

---

Made with 💛 for every child on Earth!
