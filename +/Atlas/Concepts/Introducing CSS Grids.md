The [[CSS grid model]] is a set of CSS design styles used to create grid-based layouts. Before discussing the CSS styles, we should first explore the **key terms and concepts** associated with building a CSS grid.

## To reference positions within a grid
The grid Model numbers the gridlines in the horizontal and vertical directions, **starting from the top-left corner** of the grid with the row gridlines and then **moving left to right with the column** gridlines along the bottom. 

Both gridlines start with a value of `1` and increase in value down and across the grid

## Reference in Reverse
you can reference these gridlines in the reverse order starting from the bottom-right corner with the first row and column gridlines in those directions are given a value of `-1` 

### The **advantage** of using positive and negative gridline numbers  
**you can always reference both the first gridlines and the last gridline** no matter the size of the grid. *This will become important later when placing items at specific location within the grid or sizing those items to cover multiple rows and columns..*


> Rows and columns are also called **tracks** or **grid tracks**. #tracksandGridTracks 

---
Back: [[Session 3.2 - CSS Grid Layouts]]
