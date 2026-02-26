JavaScript includes **six values that are treated in comparison operations as the Boolean value false**. These six values, known as falsy values, are the following: 
- ""
- -0
- 0
- NaN
- null
- undefined. #undefined/Null/NANNisFALSE 

All values other than these six falsy values are the equivalent of Boolean `true`, and are known as **truthy values**.

---
Developers commonly take advantage of falsy and truthy values to **make comparison operations more compact**. 

In a conditional statement that *tests whether a text field in a form contains a value*, you could write the code for the conditional statement as
```js
(document.getElementById("fName").value !== "") ?
	// code to run id condition is true
	// code to run id condition is false
```
see: [[Comparison Operators# JavaScript comparison operators]]

---
However, it’s simpler to test whether the value of the text field is falsy or truthy by **omitting the comparison operator** and writing the statement as follows: #kiss

As long as it is not one of the falsy values, this will check just as well as using `!==` to check for falsy.
```js
(document.getElementById("fName").value) ?
	// code to run id condition is true
	// code to run id condition is false
```

>Note that this code tests only the value of the text field. If it is an empty string (""), it is treated as `false`.

---
back: [[Using Operators to Build Expression]]