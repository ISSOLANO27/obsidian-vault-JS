CSS supports several properties to place objects at specific coordinates within the page or within their container. 

### To place an element at a specific position within its container
you use the following style properties:
```css
position: type;
top: value;
right: value;
bottom: value;
left: value;
```
where `type` indicates the kind of positioning applied to the element. 

the `top, right, bottom, and left` properties indicate the coordinates of the top, right, bottom, and left **edges of the element**, respectively. 


The coordinates can be expressed in **any of the CSS measuring units** or as a **percentage** of the container’s width or height.

##### CSS supports 5 kinds of positioning: 
- static (the default)
- relative
- absolute
- fixed
- inherit. 

##### In static positioning, these positionings DO NOT Apply
the element is placed where it would have fallen naturally within the flow of the document. 

This is essentially the same as not using any CSS positioning at all. **Browsers ignore any values** specified for the top, left, bottom, or right properties under static positioning. 


---
Back: [[Session 3.3 - Layout with Positioning Styles]]