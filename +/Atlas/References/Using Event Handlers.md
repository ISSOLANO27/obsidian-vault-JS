
"Add an attribute to an HTML tag"
```js

<input type="button" onclick="calcTotal()" />
```
That’s the inline HTML attribute method. #inlineAttributeMethod

So:

Using Event Handlers = HTML attribute approach.

---
This is the most direct way to associate a function with an event handler as an attribute of the element within the HTML file.

General syntax:
```html
<element onevent = "function()">
```

element
- the HTML element where event occurs
event
- the name of a user of browser initiated event
function()
- function that is called in response to event

>NOTE: You can **add parameter values to the function** by including them within function parentheses. 
>
>Parameter values that are text strings should be enclosed within single quotes.
 #writingEffectiveCode 
---
Back: [[3 Ways of Associating a Function With an Event]]

related:
- [[Functions Responding to Events]]
- [[Multiple JS statements with Event Handler]]
- [[Drawbacks of Adding Event Handlers]]