Almost everything within a web page and the web browser is an object and is part of the **Document Object Model (DOM)** or the **Browser Object Model (BOM)**. 

You can write new content to the web page with the write() method of the Document object.

> Understand that the only reason to use this method is to add new text to a web page while it is being loaded by the browser. 

Example: 
```js
document.write("Plant Choices");
```
> The web page will show it without the quotations. 

if your web page is constantly changing data such as stock quotes from a web server use write()

if the purpose is to simply display text in a web browser when the document is first rendered...

otherwise

use standard HTML elements.

*(This course WILL use the `write() `method to display text in a web browser when the documents is first rendered.*)

related:
- [[Document object]]
- [[Different Methods Require Different Kind of Arguments]]
- [[Do NOT include Line Breaks]]
- [[Common Mistakes with Write()]]
- [[Add Text To Web Page 2 Main Ways]]
- [[Document Write Example]]

HUB:
- [[Writing a JavaScript Program]]


