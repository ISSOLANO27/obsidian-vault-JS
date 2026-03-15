Gridline numbers can be difficult and cumbersome to work with, so the CSS grid model also supports [[gridline names]], which are descriptive names for row and column gridlines.

Gridline names are created by adding a name enclosed within square brackets into the grid-template-columns or grid-template-rows style. 

For example, the following style creates a grid with three columns and four column gridlines named `row-start, main-start, main-end, and row-end`.
```css
grid-template-columns: [row-start] 50px [main-start] 250px [main-end] 100px [row-end];
```
To extend a grid item across the entire row, you could apply the style:
```css
grid-column: 1/4;
```
or
```css
grid-column: row-start/row-end;
```

An article could be placed within the center grid column with the style:
```css
grid-column: main-start/main-end;
```

Gridline names can make your CSS code easier to interpret and manage and can be more easily updated if you insert additional rows or columns within your grid layout. #writingEffectiveCode 