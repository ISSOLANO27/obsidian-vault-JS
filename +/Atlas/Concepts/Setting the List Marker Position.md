CSS treats each list item as a block-element, placed within a virtual box in which the list maker is placed outside of the list text. 

You can change this default behavior using `list-style-position` property.

`list-style-position: position`

position:
- outside (default)
- inside
	- Causes the list text to flow around the marker.

---

All three of the list styles combined in **shorthand list-style** property. #shortHandNotation 

`list-style: type image position`

```css
ul {
list-style: circle url(bullet.png) inside;
}
```
#askLater [so is the image rendering in a circle ?]

---

If a browser is **unable** to display the `bullet.png` image, it **uses a default circle marker instead**. 

You do not need to include all three style properties with the list style. **Browsers will set any property you omit to the default value.**

---
Back: [[Formatting List]]