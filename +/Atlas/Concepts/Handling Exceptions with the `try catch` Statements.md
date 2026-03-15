Statements that may result in an error can be enclosed within the following try catch statement:
```js
try {
statements that might contain an error;
} catch (error) {
	statements that respond to the error
}
```
In this structure, the statements that might contain an error are tested **within the try** command block. 

If an error is present the statements within the catch command block are run. 
The _error_ parameter in the catch command block is [an error object that contains information about the error]. The _error_ parameter can be given any name that does not conflict with a JavaScript keyword.

---

The statements in the catch command block **override the browser’s default error handling**.

For example, you can create a customized error message that appears within the browser window rather than relying on the default error message written to the debugger console. 

The following code contains a mistake in which **a variable named username is referenced, but because the variable’s correct name is userName**, a [[Runtime Errors]]  is generated. 

By enclosing the code within a try catch statement, the JavaScript interpreter “tries out” the code first, catches the error, and handles it using the commands in the catch command block.

```js
let username = "Jenkins";
try {
	window.alert("The user is " + userName);
} catch {
	window.alert("Invalid code");
}
```

The result is an alert box containing the message “Invalid code” displayed within the web browser. 

>Note that the browser will run all the code within the try command block **until the first error is caught** after which the commands in the catch command block are run. The runtime error **will not cause the program to halt** because the catch statements provide an alternate way of managing the error.



---
Back: [[Managing Errors]]
- [[Error Object]]