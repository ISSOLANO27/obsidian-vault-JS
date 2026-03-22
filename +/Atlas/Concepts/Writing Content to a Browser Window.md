The new window contains a web document and thus all document properties and methods can be applied to that document. The document body contained within the window is referenced using the `_window_.document.body` object where _window_ is the name assigned to the window object. 

Thus, the following code creates a blank window named `newWin` and adds the `h1` heading `<h1>My slideshow</h1>` to the document body:
```js
let newWin = window.open("", "My Slideshow", "width=500, height=300");
let mainHeading = document.createElement("h1");
mainHeading.textContent = "My Slisdeshow";
newWin.documwnt.body.appendChild(mainHeading);
```


### `document.write()`
You can also use the `document.write()` method to write the content into the document as a single text string:
```js
let newWin = window.open("", "slideshow", "width=500, height=300");
newWin.document.write("<h1>My Slideshow</h1>")
```

### popup windows gives Full Control
Unlike windows created with the `confirm()` or `prompt()` methods, a browser [[popup window can be designed in whatever fashion]] the application requires.  
You can include form elements, tables, and embedded images to design a customized dialog box suitable for your app.



---
Back: [[Working with Popup Windows]]