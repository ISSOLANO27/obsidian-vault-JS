Outlines are simply **lines drawn around an element**, enclosing the element content, padding, and border spaces. 

Unlike borders, which you’ll study in the next tutorial, an **outline doesn’t add anything to the width or height of the object**, it only indicates the extent of the element on the rendered page.

The width of the line used in the outline is defined by the following `outline-width` property:
```css
outline-width: value;
```

### Outline Values
where _value_ is expressed in one of the CSS units of length, or with the keywords **thin, medium, or thick**. 

#### Outline Color
The line color is set using the outline-color property:
```css
outline-color: color;
```
#### Outline Style
```css
outline style: style;
```
- none
- double
- dashed
- groove
- inset
- ridge
- outset

> All outline properties can be combined in shorthand: 

```css
outline: width, style, color;
```

For example, the following style rule uses the [[Wildcard selector]] along with the outline shorthand property to draw a 1 pixel dotted green line around every element on the web page:
```css
* {
outline: 1px dotted green;  
*
```
> Note that there are no separate outline styles for the left, right, top, or bottom edge of the object. The **outline always surrounds an entire element**.

Adding an outline makes it clear how each item is placed within the grid. Next you will change the location and sizes of the grid items to match Anne’s proposed layout.





---
Back: [[Working with Grid Rows and Columns]]