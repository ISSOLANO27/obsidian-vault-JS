  
In the grid areas approach to layout you **identify sections of the grid with item names**, creating a textual representation of the layout.

Here, a grid of four rows and three columns in which several items span multiple rows and columns, represented both visually as it would appear on the web page and textually.

![[Pasted image 20260313051446.png]]
To create a textual representation in a style sheet, use the following grid-template-areas property:
```css
grid-template-areas: "row1", "row2";
```

where _row1_ , _row2_ , etc. are **text strings** containing the names of the areas for each row. 
Thus, to create the grid layout 
you would enter the style:```
```css
	grid-template-areas: "header header header"
						"side1 main nav"
						"side2 main nav"
						"footer footer footer";
```

### To Assign Elements to Grid Areas:
```css
grid-area: area;
```
where _area_ is the name of an area defined in the `grid-template-areas` property. 


### Grid Area: Shorthand
The grid-area property can also be used as a shorthand to place and size grid items using gridline numbers. The general syntax is:
```css
grid-area: row-start/col-start/row-end/col-end;
```
where `_row-start_ , _col-start_ , _row-end_ , and _col-end_` are the starting and ending gridline numbers from the grid’s rows and columns. 

For example, the following expression places the grid item to extend 
**from the first row** gridline 
**through the fourth** and 
**from the third column gridline through the fifth**.

shorthand:
```css
grid-area: 1/3/4/5;
```
first row -> fourth row
third column -> fifth column

---
Back: [[Placing Items Within a Grid]]