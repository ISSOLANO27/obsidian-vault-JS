To **access and load** a web font, you add the following @font-face rule to the style sheet
```css
@font-face {
    font-family: Gentium;
    src: url('Gentium.woff') format('woff'),
         url('Gentium.ttf') format('truetype');
}
```
Quick breakdown so it sticks in your brain:

- `@font-face` → tells the browser “I am defining a custom font.”
- `font-family: Gentium;` → the internal name you’ll use later in CSS.
- `src:` → where the font files live.
- `woff` → compressed web-optimized format (preferred).
- `ttf` → TrueType fallback.
---

> It is considered best practice to always **include a format value to alert the browser about the font’s format**  #writingEffectiveCode so that it doesn’t download a font definition file it can’t display.

  
If the style sheet includes instructions to display a web font in italics, boldface, or other variants, the browser will modify the font, which[ sometimes results in poorly rendered text]. 

However if the manufacturer has supplied its own version of the font variant, you can direct the browser to use that font file. 

For example, the following `@font-face` rule directs the browser to use the` GentiumBold.woff` or `GentiumBold.ttf` file when it needs to display Gentium in bold.

```css
@font-face {
  font-family: 'Gentium';
  src: url('GentiumBold.woff') format('woff'),
       url('GentiumBold.ttf') format('truetype');
  font-weight: bold;
}
```

---


Note that the web font is given the same font-family name Gentium, which is the font name you use in a font stack. The added _descriptor_ : _value_ pair and font-weight: bold declarations tell the browser that these font files should be used with boldface Gentium.

Once you’ve defined a web font using the @font-face rule, you can include it in a font stack. For example, the following style will attempt to load the Gentium font first, followed by Arial Black, Gadget, and then a sans-serif font of the browser’s choosing:  font-family: `Gentim, 'Arial black', Gadget, sans-serif`

---
Back: [[Working with Fonts]]