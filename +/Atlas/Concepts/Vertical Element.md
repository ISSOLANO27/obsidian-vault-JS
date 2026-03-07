Centering an element vertically within its parent element is **not easily accomplished because the height of the parent element is usually determined by its content**, which might not be a defined value. 

One solution is to display the parent element as a table cell with a defined height and then set the vertical-align property set to middle. 

For example, to vertically center the following h1 heading within the div element
```html
<div>
	<h1>
	pandaisia Chocolates
	</h1>
</div>
```
you could do this:

```css
div {
height: 40px;
display: table-cell;
vertica-align: middle;}
```
---
### To vertically center a single line

set the line height of the text larger than the text's font size.
```css
h1 {
	font-size: 1.4em;
	line-height: 2em;
}
```

>Note that this approach **will only work for a single line of text**. 
>
>If the text wraps to a second line, it will no longer be vertically centered. Vertical centering is a common design challenge and there are several other workarounds that have been devised over the years. 
>
>The simplest approach is to use **CSS grid styles**, a topic that we’ll discuss in the next session.

Next, you will lay out the links in the navigation list. Anne wants the links displayed horizontally rather than vertically. You can accomplish this using CSS floats.



---
Back: [[Working with Width and Height]]