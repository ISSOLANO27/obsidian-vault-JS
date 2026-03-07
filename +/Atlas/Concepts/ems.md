
The em unit acts the same way as a percentage, expressing the font size relative to the font size of the parent element. Thus, to set the font size of h1 headings to twice the font size used in their parent elements, you can also use the style rule:
```css
h1 {font-size: 2em;}
```
---
The **em** unit is the **preferred style unit** for web page text because it makes it easy to develop pages in which different page elements have consistent relative font sizes under any device.

**Context is very important with relative units**. 

For example, if the h1 element is placed within a body element where the font size is `16px`, the `h1` heading will have a font size twice that size or 32px. On the other hand, an h1 heading nested within an article element where the font size is 9px will have a font size of 18px. In general, you can think of font sizes based on percentages and em units as relative to the size of immediately adjacent text.

The fact that relative units cascade through the style sheet can lead to confusing outcomes. For example, consider the following set of style rules for an h1 element nested within an article element in the page body:
```css
body {font-size: 16px;}
bady > article {font-size: 0.75em;}
body > article > h1 {font-size: 1em;}
```

Glancing at the style rules, you might conclude that the font size of the h1 element is larger than the font size used in the article element (since 1em > 0.75em).

However, [this is not the case]: **both font sizes are the same.** 

Remember, em unit expresses the text size **relative to font size used in the parent element and since the h1 heading is contained within the article element its font size of 1em indicates that it will have the same size used in the article element.** In this case, the font size in the article element is `75% of 16px or 12` pixels as is the size of h1 headings in the article.

---

---
Back: [[Scaling Fonts with ems and rems]]