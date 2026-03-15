AKA as **syntax error.** 

Happens **when the program is initially loaded** by the browser.

One task of the JS interpreter is to confirm that there are no errors in the syntax.

### Common syntax error #
#commonMistakes 
- misspelling keywords
- Forgetting to end a command block with a closing curly brace
- Forgetting to enclose a text string within a set of quotation marks

Most Code editors will highlight errors for you.

---
```js
Function sayHello() {
	let message = "Hello World";
	window.alert(message);
}
```

We noticed that we are provided line number and where we get a message `Uncaught SyntaxError: Unexpected identifier` tell the programmer that there is a syntax error within the statement `Function sayHello()`

Also, the console says nothing about the syntax error in omitting the closing brace.

This is because when the debugger encounter a syntax error, it stops processing the code so that any subsequent error **are not reported**.

This may feel like fixing one error is leading you further down the code to the next error..

---
back: [[Chapter 4 - Debugging and Error Handling]]