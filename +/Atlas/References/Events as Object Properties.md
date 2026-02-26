“Add a property to a page object”

To place an event handler within the JavaScript code, attach an event handler to a page object by **specifying it as a property of that object**. The general syntax is:
```js
object.onevent = function;
```
object
- the reference to an object within the document or browser
event
- an event associated with the object
function
- the name of the function that will be run in response to the event

---
This runs the `calcTotal()` function when the page object with an `id` of `total` is clicked.
```js
document.getElementById("total").onclick = calcTotal;
```

> Take a Look at calcTotal and notice we [[Only Specify the Function Name NO ()]].
---

If your application requires multiple functions to be assigned to the same event, you can use  [[Event Listeners]]


Here you are **assigning a function to the `onclick` property** of the element object.
So..
Events as Object Properties = assigning to `.onclick`, `.onload`, etc.

---

Back: [[3 Ways of Associating a Function With an Event]]



