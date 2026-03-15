
Another part of grid layout is defining the space between items in a grid. So far, all our layouts have assumed no spacing, but many layouts include interior spaces to allow each item “room to breathe.” 

The gap size is defined using the following `grid-gap` property:
```css
grid-gap: row column;
```


_row_ is the internal space between grid rows  
_column_ is the internal space between grid columns.

A grid layout in which the rows are separated by a 10-pixel space and the columns by a space of 30 pixels.

![[Pasted image 20260313053042.png]]


You can also set the grid gaps for rows and columns using the following properties:
```css
grid-column-gap: value;
grid-row-gap: value;
```

where _value_ is the size of the gap in one of the CSS units of measure. [same thing goes for the grid-gap property]

Anne wants you to add a 15-pixel column gap to the About Pandaisia web page but leave the row gap at its default value of 0 pixels.

>NOTE: Unlike margins, the [[gap size setting is applied only to the interior space]] between the grid items and not to the exterior space between the grid items and the edge of the grid container.

---
Back: [[Placing Items Within a Grid]]