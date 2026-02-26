You can access or **call** any named function
 by including the  name of the function within the JS expression
```js
functionName(paramValues);
```

functionName
- The name of the function 
paramValues
- the values assigned to the parameters (if any) of the function AKA [[Actual Parameters]].

>When you pass arguments to a function, the value of each argument is then assigned to the value of the corresponding parameter in the function definition.

```js
function showStatus(name, status) {
	window.alert("The " + name + " Contact is " + status);
}
```
#### Calling..
```js
	showStatus("Reynolds", "Pending");
	showStatus("Dawson", "Approved");
	// Output:
	// The Reynolds contract is Pending
	// The Dawson contract is Approved
```

> Function are most effective when they van be reused with different parameter values to result in different outcomes, in a way freeing the web dev from deplicating the same code within a program #writingEffectiveCode 

---
Back: [[Working with Functions]]
