### To move a grid item to a specific location within the grid
 use the following `grid-row` and `grid-column` properties:
```css
grid-row: row;
grid-column: column;
```
where _row_ is the row number and _column_ is the column number. 

#### Example
Thus, to place the article element in a grid cell **located in the first row and second column** of the grid, apply the following style rule:
```css
article {
	grid-row: 1;
	grid-column: 2;
}
```

### To extend a grid item 
so that it covers multiple rows or multiple columns, include the starting and ending gridline in the style property as follows:
```css
grid-row: start/end;
grid-column: start/end;
```

where _start_ is the starting gridline and _end_ is the ending gridline. 

---
a page layout in which grid items `6, 8, and 9` have been moved and resized using the grid-row and grid-column properties. 

For example, item 6 is moved to the first row and second column of the grid while items 8 and 9 have been resized to cover multiple rows and/or columns. The other items in the grid are placed in their default locations and sized to fit within a single grid cell.

### Placing Items within a Grid Layout
![[Pasted image 20260313045932.png]]

Starting and ending gridlines can also be expressed in the following four properties:
```css
grid-column-start: integer;
grid-column-end: integer;
grid-row-start: integer;
grid-row-end: integer;
```
so that the style rule grid-column: 2/5 is equivalent to:
```css
grid-column-start: 2;
grid-column-end: 5;
```
Which approach you use is a matter of personal preference.

---
### Use Negative Numbers to Place Items as well..
You can also use negative gridline numbers to extend an item from the first gridline to the last. Recall that since the last column or row gridline has a value of −1, the expression

would extend the grid item across the entire row from the first gridline to the last. Similarly, the expression

#### Only works with Explicit Grids!
would create a grid item that extends across an entire column.[ Note that this technique only works with explicit grids because in an implicit grid there is no defined last column or row].


---
Back: [[Placing Items Within a Grid]]

