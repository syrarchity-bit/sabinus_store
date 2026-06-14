# SABINUS s.r.o. — website

A fast, SEO-ready single-page site for SABINUS s.r.o., distributor of **Kaiser Natron**
(pure sodium bicarbonate) across Central & Eastern Europe. Plain HTML/CSS/JS — no build step,
no dependencies. Host it anywhere static (Netlify, Cloudflare Pages, GitHub Pages, any web host).

## Structure
```
index.html              The whole site (Company / Portfolio / Product / Partners / News / Contact)
robots.txt              Search-engine directives
sitemap.xml             Sitemap (update <lastmod> when you edit)
assets/
  css/styles.css        Design system + layout
  js/main.js            Mobile menu, scroll reveal, effervescence animation, footer year
  img/
    favicon.svg         Brand mark / favicon
    product-pack.svg    Illustrative product visual (placeholder — see below)
    placeholder.svg     "Add photo" slot for cards & blog covers
    region-map.svg      Distribution-region graphic
    og-image.png        1200×630 social-share preview
```

## Before you go live — do these three things
1. **Add real product photos.** The product images are tasteful placeholders, not the real
   packaging. Replace `assets/img/product-pack.svg` and the `placeholder.svg` slots with
   official, licensed Kaiser Natron photography supplied by the manufacturer / ENERGEIA SWISS AG.
   Just drop the files into `assets/img/` and update the `src` + `alt` attributes in `index.html`.
2. **Confirm the brand/partner wording.** Public records list the Kaiser Natron manufacturer as
   *Arnold Holste Wwe. GmbH & Co. KG* (Germany). The site therefore describes ENERGEIA SWISS AG as
   your **partner** and Kaiser Natron as a **German-made brand you distribute** — not as something
   ENERGEIA manufactures. Adjust if your agreement says otherwise, and make sure you hold the rights
   to use the Kaiser Natron® name and imagery.
3. **Update the domain** if it changes: search `https://www.sabinus.store/` in `index.html`,
   `sitemap.xml` and `robots.txt`.

## Editing tips
- All copy is plain text inside `index.html` — edit directly.
- Colours and fonts live at the top of `assets/css/styles.css` (the `:root` block).
- To add a real blog: each `.post` card in the `#news` section can link to its own page later.
- When you add product groups, copy a `.pcard` block in the `#portfolio` section.

## SEO already in place
- Title, meta description, keywords, canonical, theme-color
- Open Graph + Twitter card with `og-image.png`
- JSON-LD structured data: Organization, WebSite, Product
- Semantic headings, alt text, sitemap + robots

## Local preview
```
cd sabinus
python3 -m http.server 8000
# open http://localhost:8000
```
