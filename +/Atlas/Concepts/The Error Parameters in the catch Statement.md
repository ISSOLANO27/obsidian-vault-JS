The catch statement includes an _error_ parameter that contains information about the error that was caught. 

## 2 Properties of Built in errors
For built-in errors, the object has two properties: 
- the name property storing the name of the error 
- the message property storing text describing the error. 

Thus, in the following code, the alert box will display the error name followed by its description:
```js
catch(err) {
	window.alert(err.name + ": " + err.message);
}
```

There are six name property values for built-in errors: 
- [[EvalError]]
- [[RangeError]]
- [[ReferenceError]]
- [[SyntaxError]]
- [[TypeError]]
- [[URIError ]]

with each indicating the **general type** of error that occurred. 


The values of the message property are based on information that provides details on the source of the error. 

```js
try {
   let x = y + 1;
}
catch(err) {
   console.log(err.name);
   console.log(err.message);
}
```



### Limitation of Throwing an Exception
Custom errors created by throwing an exception **do not have the name or message properties**.

Instead, the _id_ specified in the throw operator is stored as the text of the error message and provides all the information the developer requires.

In ES10 released in 2019, the **_error_ parameter is optional**. If you are not using the _error_ parameter in your code, apply the simpler form:
```js
catch {
	statements
}
```

---
Back: [[Managing Errors]]