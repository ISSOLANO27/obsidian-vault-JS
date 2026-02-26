An additional factor in how style rules are interpreted is that ***styles are passed from a parent element to its children*** in a process known as **style inheritance**. 

Thus, the following style rule sets the color of article text to blue and that rule is passed to any paragraph, header, footer, or other element nested within an article element. In addition, the paragraph text within that article is centered:
```css
article {color: blue;}
p {text-align: center;}
```

>TIP:  **Not all properties are inherited**; for example, a style property that defines text color has no meaning for an inline image.

The final rendering of any page element is the result of styles drawn from rules across multiple style sheets and from properties passed down from one element to another within the hierarchy of page elements. 

These style sheets and style rules form the “*cascade*” of styles in Cascading Style Sheets.

---
back: [[Exploring Style Rules]]