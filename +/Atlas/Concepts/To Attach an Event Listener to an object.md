```js
object.addEventListner("event", function, capture)
```

object - the object in which to listen for the event
function -  is the name of the function that is run in response
capture - is an optional value equal to `true` (listen during the **capture** phase) 
or 
`false` (listen during the **bubbling** phase). 

>The default value is `false` so that the event listener **will only listen during the bubbling phase**. #bubblePhase 

The following statement listens for the click event occurring within the page object with the `id` `total` during the **bubbling phase**, running the `calcTotal()` function when that event occurs:
```js
document.getElementById("total").addEventListner("click", calcTotal);
```
---
Unlike the #eventHandlers  approach, #eventListeners can attach [[Multiple Functions to the same Event]]. 


---
Back: [[Event Listeners]]

related:
[[To Remove an Event listener from an Object]]

