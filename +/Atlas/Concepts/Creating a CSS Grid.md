
First identify a page element as the gris container;

`display: grid;`


It should be noted that Any elements nested within any of the outer divs are NOT part of the grid structure. Only the direct children of the parent who gets styled with the grid display..

![[using the display style.png]]

The six child div elements **are now grid items**, so they are **no longer considered block-level elements** because they are fixed within the grid structure. 

[[You couldn’t float any of those elements]] because floating them would remove them from the grid and the CSS grid model doesn’t allow that. 

The **entire grid itself is considered a block-level element** and thus could be floated or resized within the web page just like any other block-level element.

Grids can also be created as inline elements using the style:

`display: inline-grid;`

---
Back: [[Session 3.2 - CSS Grid Layouts]]