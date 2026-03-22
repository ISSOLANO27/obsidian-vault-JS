
[Programming with Josh: JavaScript this Keyword](https://www.youtube.com/watch?v=gvicrj31JOM)
The this object references the owner of a currently running segment of JavaScript code. That general definition can be confusing because its meaning depends on context. 

How do you determine who “owns” the code? 

For an anonymous function called by an event handler or event listener, the owner of the function is the object that initiated the event. If clicking an image initiated an event that called an anonymous function, that image is the called ***function’s owner***.

From within the `createOverlay(`) function, you can reference the image that called the function using the this object. The following code uses the this object to append a copy of the image node to the overlay’s figure box:
```js
let overlayImage = this.cloneNode(true)
figureBox.appendChild(overlayImage);
```



In the same way, the following code creates the figure caption based on the alt attribute of the image node and appends it to the figure box:
```js
let overlayCaption = document.createElement("figcaption");
overlayCaption.textContent = this.alt;
figureBox.appendChild(overlayCaption);
```


Click any image within the lightbox app and verify that a larger version of the image along with the image caption is overlaid on the page. Note that this overlaying is done with an animated zoom effect that was created within the lightbox.css stylesheet.

---
Back: [[Chapter 5 - Creating a Web App Using the DOM]]