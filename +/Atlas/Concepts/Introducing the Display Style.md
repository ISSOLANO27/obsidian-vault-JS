
The study of page layout starts with defining how an individual element is presented on the page. 

In the first tutorial, you learned that HTML elements are classified into **block elements**, such as *paragraphs or headings*, 

or 

into **inline elements**, such as *emphasized text or inline images*. 

However, whether an element is displayed as a block or as inline depends on the style sheet. You can define the display style for any page element with the following [[display properties]].

`display: type;`

---

[To supersede the usual browser style that displays images inline, apply this style rule to display all of you images as block:]
```css
img {display: block;}
```
[To display all blockquotes as list items, complete with list markers]
```css
blockquote {display: list-item;}
```

### None type
you can prevent browsers from displaying an element by setting its `display` to `none`. 

> The element is still part of the document structure but it is not shows to users AND does not occupy space in the displayed page. useful when you have elements that include content that users should not see or have to see.

---
> TIP: You can hide elements by applying the style `visibility: hidden;` ==This hides the element content but leaves the elements still occupying the same space in the page.==

---
back: [[Session 3.1]]
related:
- [[Creating a Reset Style Sheet]]