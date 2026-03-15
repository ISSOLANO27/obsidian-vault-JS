  
The `align-items` and `justify-items` properties apply to every cell in the grid. 

To align and justify only one cell, apply the `align-self` and `justify-self` properties to the content within the grid cell. 

The placement **values are the same** as for the `align-items and justify-items` properties. 

For example, the following style rule displays the content of the article element in both the horizontal and vertical center of the grid cell:
```css
article {
	align-self: center;
	justify-self: center;
}
```

Using the `align-self` and `justify-self` properties is a quick and **easy way of centering your content within the web page**. 

Before the introduction of the CSS grid model, this was a difficult task involving a lot of [[CSS hacks]], but now it can be accomplished by simply placing the item within a grid and centering the content both horizontally and vertically.

---
Back: [[Managing Space within a Grid]]