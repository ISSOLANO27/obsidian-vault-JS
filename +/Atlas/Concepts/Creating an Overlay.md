
An alternative to a popup window is an [[overlay]], which is an element that lays on top of the rest of the page content, partially obscuring that content. An overlay is sometimes referred to as a [[modal or modal window]], a window that takes control of an application and must be closed before the user can continue using the app. 

Examples of modal windows:  
##### must be completed
- popup dialog boxes that must be completed before returning a user to the web form or, annoyingly 
##### must be clicked by user
- a popup ad that must be clicked before a user can return to a web page.

![[Image overlay for the Light box app.png]]

The final piece of the lightbox app will be an overlay that is generated whenever the user clicks an image from the lightbox slideshow. The overlay will display a full-sized version of the clicked image alongside the image caption. Included with the overlay will be a Close button that closes the overlay when clicked.

---
The label contained the following HTML code:
```html
<div>
	<figure>
		<img src="url" alt="text">
		<figcaption>text</figcaption>
	</figure>
	<div id=lbOverlay""></div>
</div>
```
where _url_ is the URL of the clicked image and _text_ is the caption text associated with that image. The styles for the overlay have already been entered into the lightbox.css stylesheet, using the following style rules:
```css
div#lbOverlay {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
	background-color: rgba(104, 49, 0, 0.85);
}
```
The style rule fixes the div element within the browser window and sizes it to cover the complete window. A semi-transparent browser background is used so that the contents of the page are still partially visible beneath the overlay.

Add the `createOverlay()` function to begin creating the structure and content of the overlay.

---
Next you will add the image and caption to the overlay. To do that the app needs to know which image was clicked by the user. That can be accomplished using the this object.

As of now, what we created was a brows semi transparent overlay on top of the entire page when an image is clicked on. We did two tasks:
1. create the function
2. add `images.onclick = createOverlay;` to our for loop within the same function, `createLightbox`.

---
Back: [[Chapter 5 - Creating a Web App Using the DOM]]