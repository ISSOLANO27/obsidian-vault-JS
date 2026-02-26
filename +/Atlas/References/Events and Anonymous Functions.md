You can also use [[Anonymous Functions]] with [[Using Event Handlers]] and [[Event Listeners]]. One reason to do this is **to allow parameter values to be used with the event**. [1. why else would we want to do this? how are the parameter values used with the event?, is the entire function set up as  ]

The following example shows how to nest a named function with parameter values within an anonymous function to respond to the load event of the window object:
```js
window.onload = function() {
	showMsg("Dawson", "Approved");
}
```

Notice that in place of a function name, the entire structure of the anonymous function, including the command block, is added to the statement[2. so the entire anonymous function is part of the parameters separated from with a comma]. 

---
**To do the same with an event listener**, enclose the entire structure of the anonymous function within the `addEventListener()` method in place of the function name. The following shows its application in response to the load event of the window object:[looks like for listeners we can do the same with anonymous function, use it as an argument: how does this give us more flexibility]
```js
	window.addEventlistener("load", function() {
		showMsg("Dawson", "Approved")
	}
```

Whether you use named functions or anonymous functions depends on the needs of your application. Anonymous functions can provide more flexibility in your code, but they can also make your code more difficult to interpret and edit.