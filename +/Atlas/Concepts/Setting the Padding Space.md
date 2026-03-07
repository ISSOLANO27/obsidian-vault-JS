Setting the `width` of the padding space use this property:

`padding: size;`

`size` - expressed in one of the CSS units of length of the keyword, `auto`, to le the browser automatically choose the  padding.

```css
p {padding: 20px;}
```

### Can be Defined for Each of the Four Sides

```css
padding: top right bottom left;
```

`top` - the size of the padding space along the top edge of the content
`right` - padding along the right side
`left` - the size of the padding along the left edge
`bottom` size of the bottom padding

> Think of a moving clockwise around the box

---

You do not have to supply all the values. The values that you supply are interpreted based on how many values you supply.

### One Value
it is applied to all four sides equally

### Two Values
it is applied top/bottom
`p {padding: 10px 5px;}`
### Three Values
padding sizes are set for the top, right/left, and bottom
`p {padding: 10px 5px 0px;}`

---
#### Padding space for one edge but not the others
```css
padding-top: size;
padding-right: size;
padding-bottom: size;
padding-left: size;
```
---
> **Ordered** and **unordered** lists have a default browser style set with a `left padding` space to **40px** in order to provide extra space needed for the list markers.

Note that removing the list markers does not remove this padding space. 


---
Back: [[Working with Margins and Padding]]