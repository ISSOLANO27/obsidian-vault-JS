The third type is **a flaw in a program's design** that prevents the program from reaching its intended goal.

There is nothing wrong with the syntax or statements. The result is simply wrong..

### Possible Reasons
#### Performing essential steps in the wrong order

#### Missing an important step

#### Misinterpreting the data involved

##### Example:
```js
function comapreValues(a, b) {
	if (a > b) {
		window.alert(a + " is greater than " + b);
	} else {
		window.alert(a + " is less than " + b);
	}
}
```
The problem here is that there are actually 3 possibilities.
1. a could be greater than b
2. a could be less than b
3. a could equal to b

Option 3 was never tested; Giving you nonsensical code. [If the values are the same what happens?]

If `a` and `b` are equal, the condition `a > b` is `false`, so the `else` block runs.

So:
`compareValues(5, 5);`

would incorrectly show:

`5 is less than 5`

That is the nonsense the book is warning about. the else runs if the if turns out falsy.
The fix is to account for all 3 possibilities:

```js
function compareValues(a, b) {  
	if (a > b) {  
		window.alert(a + " is greater than " + b);  
	} else if (a < b) {  
		window.alert(a + " is less than " + b);  
	} else {  
		window.alert(a + " is equal to " + b);  
	}  
}
```
---
Finding these types of errors are amongst the most difficult part of programming. You **must** analyze the logic at each step of your code, comparing the results that you expect with the results that you got.

A debugger can provide tools to make the comparison easier, but analysis must be done by the programmer.  [what are some common methods to performing these analysis; what do you recommend as my mentor?]

> NOTE: You can locate errors in your code using [[linting]], a process that involves sending your code through a third-party program that analyzes and produces a detailed error report. Some of the most popular linting programs for JavaScript are jslint, ESLint, and JSHint. Also, many code editors offer their own set of linting tools. [what kind of tools]

---
back: [[Chapter 4 - Debugging and Error Handling]]

[[Common Methods for Analyzing Logic Errors]]:
