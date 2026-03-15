In some layouts involving fixed units, the space taken up by the items within the grid will be less than the total space allotted to the grid container itself, [[Creating Unused Space in the Container]]. 

### default
the grid will be positioned at the **top-left corner** of the container, but you can modify that position using the align-content and justify-content properties:
```css
align-content: placement;
justify-content: placement;
```
where **_placement_** is:

- `start` - to position the grid with the **top or left edge** of the container (the default)
    
- `end` - to position the grid with the **bottom or right edge** of the container
    
- `center` - to center the grid **vertically or horizontally** within the container
    
- `space-around` - to insert **an even amount of space between each grid item**, with half-sized spaces on the far ends[inserts spaces between each space, i get. But half sized spaces? what does it mean?]
    
- `space-between` - to insert an `even amount of space between each grid item`, with no space at the far ends
    
- `space-evenly` - to insert an **even amount of space between each grid item**, including the far ends [what far ends?]
    

##### As with the other grid properties
the `align-content` property **positions the grid vertically** within the container 
and 
the `justify-content` property **moves the grid horizontally**. 

This shows how the interior space within the grid container can be managed using the `align-content and justify-content` properties.

![[Pasted image 20260313054458.png]]

In the **left** grid, the layout is centered both horizontally and vertically within the container. 

In the **right** grid, the grid items themselves are positioned evenly within the container.

> Try IT: You can explore the align-item and justify-item properties using the demo_grid1.html file from the html03 ► demo folder.

![[Pasted image 20260313054458.png]]
>>>The align-content and justify-content properties are useful when you want to center your entire layout within the web page in both the horizontal and vertical directions.

---
Back: [[Managing Space within a Grid]]
related:
- [[Proskills Written Communication - Getting to the Point with Layouts;]]