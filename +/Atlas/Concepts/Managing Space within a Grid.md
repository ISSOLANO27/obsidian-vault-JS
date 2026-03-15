The `grid-gap` property **allows you to define the space between grid items**. 

CSS includes other properties to manage the space around the content of each grid cell. 

By default, there is **no space between the grid cell borders and the grid cell content**. 

However, you can position the content within the grid cell using the `align-items` and `justify-items` properties. 

### Defining vertical or horizontal space between grid items
`align-items` - property **sets the vertical placement of the content**
`justify-items` - property **sets the horizontal placement.** The syntax of both properties is:
```css
align-items: placement;
justify-items: placement;
```

where **placement** is:

- `stretch` - to expand the content between the **top/bottom** or **left/right** edges, removing any spacing between the content and the cell border (the default)
    
- `start` - to position the content with the **top or left edge** of the cell
    
- `end` - to position the content with the **bottom or right edge** of the cell
    
- `center` -  to center the content **vertically or horizontally** within the cell
    

This shows the impact of the `align-items` and `justify-items` properties on the placement of the content within each grid cell. 


#### By default
there is **no spacing between the content and the cell border** as the content “stretches” to fill the cell (shown in the grid on the left in the figure). 

In the grid on the right, the content is placed at the start (top) and horizontal center of the cell and spacing is added between the cell content and the cell borders.

![[Pasted image 20260313053753.png]]



---
Back: [[Session 3.2 - CSS Grid Layouts]]

related:
- [[Alignment for a Single Grid]]
- [[Aligning the Grid]]