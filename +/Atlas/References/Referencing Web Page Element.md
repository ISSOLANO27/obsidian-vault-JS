This is how you get the element.

The Document Object Model (DOM) allows you to reference any element on a web page by its `id` assigned using the HTML [[id attribute]].

```js
// Input element with an id set to firstName
<input type="text" id="firstName">
```
---

To look up an element by its `id` value in your JavaScript code, use the [[getElementById()]] method of the Document object. #documentObject 


```js
//To create a variable that references the element with its id value use:
let fName = document.getElementById("firstName");

```
---
back: [[Understanding Events]]

related:
- [[Appending Specific Properties of an Element to the Element Reference]]
-  [[Different Ways to Specify Event handlers]]

[[CH1Quick Check]]:
