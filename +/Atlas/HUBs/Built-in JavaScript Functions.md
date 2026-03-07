Besides the things that you can create on your own, JS allows you to use the built-in functions:

For now just know that you can call these functions in the same way that you would call custom functions..

For example, the following code calls the `isNaN()` function to determine whether the `socialSecurityNumber` variable is not a number.
```js
	let socialSecurityNumber = "123-456-6789";
	let chackVar = isNAN(socialSecurityNumber);
	document.write(checkVar);
```

| FUNCTION                            | DESCRIPTION                                                        |
| ----------------------------------- | ------------------------------------------------------------------ |
| [[decodeURI]] ( _string_ )          | Decodes text strings encoded with encodeURI()                      |
| [[decodeURIComponent]] ( _string_ ) | Decodes text strings encoded with encodeURIComponent()             |
| [[encodeURI]] ( _string_ )          | Encodes a text string so it becomes a valid URI                    |
| [[encodeURIComponent]] ( _string_ ) | Encodes a text string so it becomes a valid URI component          |
| [[eval]] ( _string_ )               | Evaluates expressions contained within strings                     |
| [[isFinite]] ( _number_ )           | Determines whether a number is finite                              |
| [[isNaN]] ( _number_ )              | Determines whether a value is the special value NaN (Not a Number) |
| [[parseFloat]] ( _string_ )         | Converts string literals to floating-point numbers                 |
| [[parseInt]] ( _string_ )           | Converts string literals to integers                               |

[[CH2 Quick Check]]

Back: [[Chapter 2 - Working with Functions, Data Types, and Operators]]