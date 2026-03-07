You can set limits on the width or height of a block element:
`min-width: value;`
`min-height: value;`
`max-width: value;`
`max-height: value;`

`value` - is also expressed in one of the CSS units. Normally pixels to match the measurement unit of the display device.

---
Here the width of the body is is set to 95% of the browser window's width; But confined to a specific pixel range:

```css
body {
width: 95%;
min-width: 640px;
max-width: 1680px;}
```
Maximum and minimum widths are often used to make page text **easier to read**. 

Studies have shown that **lines of text that are too wide are difficult to read** because the eye has to scan across a long section of content and that lines of text that are too narrow with too many line returns break the flow of the material.


---
Back: [[Working with Width and Height]]

