When you scroll through a document in the browser window, the page content scrolls along. 

## Fixed
If you want to fix an object within the browser window so that it doesn’t scroll, you can set its `position` property to `fixed`. 

For example, the following style rule keeps the `footer` element at a fixed location, 10 pixels up from the bottom of the browser window:

> A fixed property object might cover up page content, so you should use it with care in page design. #askLater [I have been seeing this warning several times; relative, absolute, fixed has the same warning, is this because when you start moving things around you could literally overlap another element? expand on this...]
```css
footer {
	position: fixed;
	bottom: 10px;
}
```

## Inherit
an element inherits the position value of its parent element.



---
Back: [[Session 3.3 - Layout with Positioning Styles]]
related:
- [[Reference - Positioning Objects with CSS]]