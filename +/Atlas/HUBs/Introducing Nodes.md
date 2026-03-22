To generate web page content you’ve been limited to the `document.write()` method, the `innerHTML` property, and the `textContent` property. 

## Browser parses and adds text string
In each of these approaches the HTML code is submitted as a **text string** that the browser parses and adds to the web document. 

## Parsing String is for Small Projects
While effective for small and simple scripts, these approaches quickly become unwieldy when the app needs to write longer sections of HTML code or must constantly revise the structure of that code. #ch5askLater [[What is considered unwieldly when generating content with the document.write() - innerHTML and textContent]]

A better approach to deal with those challenges is to work with **nodes**.


---
Back: [[Chapter 5 - Creating a Web App Using the DOM]]
related:
- [[Nodes and the DOM]]
- [[Selecting Nodes with the querySelectorAll() Method]]
- [[Creating and Connecting Nodes]]
- [[Elements Nodes and HTML Attributes]]
- [[Nodes and Inline Styles]]
- [[Creating a Document Fragment in an App]]
- [[Viewing Elements within the Browser Debugger]]