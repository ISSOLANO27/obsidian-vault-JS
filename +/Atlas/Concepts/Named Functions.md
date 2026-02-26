A function that is assigned a name and has the following syntax:
```js
function functionName (parameters) {
	statements
}
```
functionName - Name of the function
[[parameters]] - Comma-separated list of parameters,
statements - The commands contained with the function.

---
`writeMsg()` function encloses commands to display an alert box with part of the message determined by the `data` and `status` parameter:

```js
function writeMsg(date, status) {
	window.alert("Today is " + date + ". Your order is " + status);
}
```

>Named functions are generally used for function that will be repeatedly accessed in the program.

> named functions are "[[Hoisted]]"
---
Back:
- [[Defining a Function]]

related:
[[Command Block]]

