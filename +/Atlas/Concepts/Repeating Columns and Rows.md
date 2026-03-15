Some grid layouts involve 12 or 16 columns or more. 

With so many columns it’s difficult to specify the size of each column. You can simplify the layout style by using the following repeat() function:
```css
repeat(repeat, tracks)
```
where _repeat_ is the number of repetitions of the tracks specified in _tracks_ .

For example, the following expression creates a layout consisting of one fixed column 250 pixels in width followed by four sets of two columns in which the first column in each set is twice the width of the second column for a total of nine grid columns:
```css
grid-template-columns: 250px repeat(4, 2fr 1fr);
```
### Autofill
In place of a _repeat_ value, you can use the keyword **auto-fill** to fill up the grid with as many columns (or rows) that will fit within the grid container. 

The following style uses the auto-fill keyword to fill the grid with as many 100 pixel-wide columns that will fit within the container:
```css
grid-template-columns: 250px repeat(autofill, 100px);
```
### minmax()
you can switch between fixed and flexible track sizes using the following minmax() function
```css
minmax(min, max);
```
where _min_ is the minimum track size for a row and column and _max_ is the maximum. 

Used in the following style rule, the grid will contain as many columns of equal width that can fit within a grid container down to a minimum width of 100 pixels:
```css
grid-template-columns: 250px repeat(autofill, minmax(100px, 1fr));
```
---

![[Pasted image 20260312235529.png]]

As the grid container decreases in size, grid items are automatically wrapped to a new row. Under each layout, the columns are given equal widths down to a minimum width value of 100 pixels.

---
Back: [[Working with Grid Rows and Columns]]