By default, grid items are laid out in document order going from **left to right and up to down**, with each item placed within a single cell. 

Thus, the page header, being the first item in the grid, appears in the first row and column. The next item, an article about the company, occupies the cell in the second column of the first row. Subsequent items are placed in cells in the next rows filling the grid until the last item is reached, which in this case is the page footer. In many layouts however, you might want to move items around or a have a single item occupy multiple rows and columns.
### Reference Defining Grids with CSS

- ##### To assign a CSS grid to an element, use the property
	```css
	display: grid;
	```
- ##### To define the **number of rows and columns within the grid**, use the properties
	```css
	grid-template-rows: height1 height2;
	grid-template-columns: width1 width2;
	```
    where _height1_ , _height2_ , _width1_ , _width2_ , etc. define the row heights or column widths.
    
- ##### To place an element within a specific intersection of grid rows and columns, use the properties
	```css
	gris-row-start: integer;
	grid-row-end: integer;
	grid-columns-start: integer;
	grid-columns-end: integer;
	```
    where _integer_ defines the **starting and ending row or column** that contains the content.
    
- ##### To more compactly set the location of the element within the grid, use the properties
	```css
		grid-row: start/end;
		grid-columnn: start/end;
	```
	where _start_ and _end_ are the starting and ending coordinates of the row and columns containing the element. [what is the difference in the last two?]

where _start_ is the starting gridline and _end_ is the ending gridline. 

---
Back: [[Session 3.2 - CSS Grid Layouts]]

related:
- [[Placing items by Row and Columns]]
- [[Using the 'span' Keyword]]
- [[Placing Grid items by Area]]

- [[The Grid Gap]]

- [[Insight - Naming Gridlines]]