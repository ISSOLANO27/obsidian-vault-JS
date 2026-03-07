Finally, you also can express font sizes using the following keywords: `xx-small, x-small, small, medium, large, x-large, xx-large, larger, or smaller`. 

The font size corresponding to each of these keywords is **determined by the browser**. 

Note that the **larger and smaller keywords are relative sizes**, making the font size of the element one size larger or smaller than the font size of the container element. 

For example, the following style rules **set the sidebar to be displayed in a small font**, while an **h1 element nested within that aside element** is displayed in a font **one size larger (medium)**:

```css
aside {font-size: small;}
aside > h1 {font-size: larger;}
```

---
Back: [[Setting the Font Size]]

