Absolute positioning places an element at **specific coordinates within a container** 

The **top** property indicates the position of the element’s top edge, 
the **right** property sets the position of the right edge, 
the **bottom** property sets the bottom edge position, 
and the **left** property sets the position of the left edge.

> TIP: To place an element at the bottom right corner of its container use absolute positioning with the right and bottom value set at `0px`

---
```css
header {
position: absolute;
top: 620px;
left: 30 px;
}
```

## Example
Placing the header element 620 px from the top edge and 30px from the left edge of their containers:

![[Pasted image 20260314115135.png]]

### Do Not Confuse the Browser 
To place an object with absolute positioning, you use either the `top/left` coordinates or the `bottom/right` coordinates, but you don’t use all four coordinates at the same time because that would confuse the browser. 

For example an object **cannot be positioned along both the left and right edge of its container simultaneously**.


As with floating [[Floating Page Content]] an element, 

## Careful not to Overlap
Absolute positioning takes an element out of normal document flow with subsequent elements moving into the space previously occupied by the element. This can result in an absolutely positioned object overlapping other page elements.

---
The browser says:

> Forget the normal document flow completely.  
> Place this box at exact coordinates.

The [[Layout Engine]] literally ignores it.

So the rest of the page behaves like the element **does not exist**.

## Position is Based on Edges
The interpretation of the coordinates of an absolutely positioned object are all based on the edges of the element’s container. Thus the browser needs to “know” where the object’s container is before it can absolutely position objects within it. If the container has been placed using a position property set to relative or absolute, the container’s location is known and the coordinate values are based on the edges of the container. For example the following style rules place the article element at a coordinate that is 50 pixels from the top edge of the section element and 20 pixels from the left edge.
```css
section {
	position: relative;
}
section > article {
	position: absolute;
	topL 50px;
	left: 20px;
}
```
[CSS Positioning Demo](http://127.0.0.1:5500/HTML_CSS_FILES/html03/demo/demo_positioning.html)

You **do not have to define coordinates for the section elements**, as long as you've set its position to `relative`. [[Does Undefined coordinates only apply to relative]]. 
*If you do not find the absolute, nothing will happen. It will stay static*

### Make sure container has relative or absolute position
The difficulty starts when the **container does not establish a positioning context**. 

In that case, the **browser has no context** for placing an object within the container using absolute positioning.

### Browser will keep searching up the hierarchy of the DOM
As a result, the browser must go up a level in the hierarchy of page elements, that is, to the container's container. 
If no positioned ancestor exists, the element positions relative to the **initial containing block**, which is essentially the **viewport (page)**. (top:0, left:0)

### How to keep using Absolute
If that container has been placed with absolute or relative positioning, than any object nested within it can be placed with absolute positioning. 

##### For Example: Article element is measured from the edges of the body element, not the section element (static):
```css
body {
position: absolute;
}
body > section {
	position: static; 
}
body > section > article {
	position: absolute;
	top 50px;
	left: 20px;
}
```
### Body Set To Absolute..
Proceeding in this fashion the browser will continue to go up the hierarchy of elements until it finds a container that has been placed with **absolute or relative positioning (nonstatic)** or it reaches the root `html` element. 

#### Otherwise we go to the Viewport
If it reaches the html element, the coordinates of any absolutely positioned object are measured from the edges of the browser window itself.

##### how the placement of the same object can differ based on which container supplies the context for the top and left values.
What is being noticed here is how the absolute behaves depending on which container is supplying the positioning. The article on the right is static; We need nonstatic

This means that it will keep looking for one. We see Body is set to relative. So that why it seems lie the article overlaps the top right corner of the section its nested in.
![[Pasted image 20260314151205.png]]

### Caution!
> If all of the objects within the container are placed using absolute positioning, the container will have no content and will collapse.

---
## Use Percentages or Pixels
 Coordinates can be expressed as percentages as well as pixels. Percentages are used for **flexible layouts** in which the **object should be positioned in relation to the width or height** of its container.
##### places the article element halfway down and 30% to the right of the top-left corner of its container:
```css
article {
	position: absolute;
	top: 50%
	left: 30%;
}
```

>As the container of the article changes in the width or height, the article's position will automatically change to match. 

##### An absolutely positioned element is positioned relative to the nearest ancestor that has a non-static position.
Whenever I positioned the outer element to absolute, I noticed that the element went to the top left owner my screen. This happens because it did not find a nonstatic positioned parent.

[[Relative VS Absolute]]

---
Back: [[Session 3.3 - Layout with Positioning Styles]]