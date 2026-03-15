When the interpreter loads the script without finding any syntax errors, it **will next attempt to run the code**. 

At this point, a runtime error may appear, which is **an error that occurs when the interpreter is unable to run the code**. 

Runtime errors may manifest themselves for **several reasons** such as: 
- attempting to reference a function 
- variable that has not been declared
- using an undefined value in an expression
- performing an illegal mathematical operation such as calculating the square root of a negative number.

## Examples
### 2 runtime errors
```js
function defineVariables() {
	let pct = 25; // percent value
	let amt = 1600; //amount value
}

function calculatePercent() {
	let result = amt * pct/100;
	document.write("<p>" + pct + "% of ") + amt + " is: "
	document.write("result + "</p>")
}
defineVariables();
calculateVariables();
```
#### Local Scope Violated
The `amt` and `pct` variables are declared with [[local scope]], limited to the function `defineVariables()`

Although we will not encounter syntax errors, we will however, run into a runtime error when it calls the `calculatepercent()` function.

---
back: [[Chapter 4 - Debugging and Error Handling]]