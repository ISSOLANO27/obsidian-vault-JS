Events associated with [[Web Form controls]]. 

#### change event

Is triggered when the **value within the control is changed**. 

The change event is triggered for an input box only when the control **loses the focus** by either **tabbing out** of the box or **clicking outside of it**. 

Checkboxes trigger the change event when they are clicked. To apply the `onchange` event handler to the form control, apply the statement. 

```js
object.onchange = function;
```

With [[Event Listeners]] the statements appears as: 
```js
object.addEventListener("change", function); // not onchange
```

---
Back: 

