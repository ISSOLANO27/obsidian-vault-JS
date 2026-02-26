

As you develop larger and more complex applications, you will want to move your code out of the HTML file into its own separate file known as a `JavaScript source file`. 

Like HTML and CSS files, a JavaScript source file is a text file that can be created using a basic text editor, though a code editor is often preferred. JavaScript source files are saved with a **.js** extension. 

They contain only JavaScript code and do not contain any HTML or CSS code unless that content is written using JavaScript statements like the `document.write() `method.

---

> As with an embedded script, commands stored in an external file are loaded when the browser **initially encounters the script element** in the HTML file. 

**Once again, this can cause errors if commands in the script reference page content that has not yet been loaded by the browser...**

## Async and Defer

You can modify when the external script file is accessed and loaded by adding the [[async]] or defer attribute to the opening `script` tag.

![[Pasted image 20260215205351.png]]

related:
- [[Different Ways to Specify Event handlers]]
- [[Referencing an External File]]
- [[async]]
- [[defer]]
- [[Async and Defer are ignored for embedded scripts]]

HUB:
- [[Writing a JavaScript Program]]