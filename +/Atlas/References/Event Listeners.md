“Attach an event listener to a page object” #evenrListener

```js
document.getElementById("total").addEventListener("click", calcTotal);
```
This is the modern, flexible approach.
So..
Event Listeners = using `.addEventListener()`


An **event listener** listens for an event as it propagates through a web page either through being [[Captured Phase]] or being [[Bubbled Phase]]. 

Thus, the event listener is always listening for the event as it goes down the object hierarchy (being **captured**) or goes up (being **bubbled**).

---
related:

- [[Understand the difference between the capturing and bubbling]]
- [[A single event interacts with a hierarchy of objects]]
- [[To Attach an Event Listener to an object]]

example:
[[Applying a Function to an Event]]

---
Back: [[3 Ways of Associating a Function With an Event]]

related:
