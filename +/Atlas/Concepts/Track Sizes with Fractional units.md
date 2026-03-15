A grid layout will often need to adapt to devices of various screen widths and sizes. 

## Grid Tracks use Flexible Units (fr)
One way of accomplishing this is with flexible units. A **fr (fractional) unit**, indicated by the unit abbreviation fr, creates grid tracks that **expand or contract in size** to fill available space while retaining their relative proportions to one another. 

The following is an example of a grid in which the track sizes of the columns and rows is set using fractional units:
```css
grid-template-columns: 4fr 1fr;
grid-template-rows: 4fr 2fr 1fr;
```
As the size of the display window changes, the **column widths maintain their proportions** so that the first column is always four times wider than the second column and the row heights maintain their proportion of `4:2:1`

---
  ### Absolute and Fractional Units 
Fractional units are often combined with [[Absolute Units]] to create grid layouts that are both fixed and flexible. 
The following style rule generates a grid in which the width of the **first column is set to 250 pixels** with the remaining space allotted to the other two columns in a proportion of 2 to 1.
```css
grid-template-columns: 250px 2fr 1fr
```
#### use case example
>Such a layout might be used in a web page in which the first column contains a navigation list whose width is fixed, the second column contains an article of primary importance, and the third column contains a sidebar of lesser importance. As the size of the display window changes, the width of the second and third columns automatically change, filling the screen while maintaining their 2:1 ratio.

---
Back: [[Working with Grid Rows and Columns]]