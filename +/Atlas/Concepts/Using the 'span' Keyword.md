Another way of **setting the size of a grid cell** is with the span keyword. The general syntax is:
```css
grid-row: span value;
grid-column: span value;
```


where _value_ is the number of rows or columns covered by the item. 

### Extending the Article Element
The following style rule extends the article element across 2 rows and 3 columns of the grid.
```css
article {
	grid-row: span 2;
	grid-columns: span 3);
}
```

### To specify **both the location and the size of the item**
include the starting gridline in the style rule. 

The following style rule places the article element in the first row and fourth column of the grid while spanning two rows and three columns from that location.
```css
article {
	grid-row: 1/span 2;
	grid-column: 4/span 3;
}
```
![[Pasted image 20260313141009.png]]

---
Back: [[Placing Items Within a Grid]]