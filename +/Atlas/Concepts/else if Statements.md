In some apps,  there might be several possible conditions to consider..

```js
if (condition1) {
	statements if condition1 is true
} else if (condition2) {
	statements if condition2 is true
} else {
	statements if neither condition1 not condition2 are true
}
```
---
In the else if structure, `condition1` is tested first. 
If that condition is true, the corresponding command block executes. 

Only if it is not true is `condition2` tested. 
If that condition is true, its command block runs. 

If neither `condition1` nor `condition2` are true, only then does the final command block run. 

In the following example, one of three possible greetings is displayed based on the value of the day variable:


```js
if (day === "Friday") {
	window.alert("Get ready for the Weekend!");
} else if (day === "Monday") {
} else {
	window.alert("Have a great day!");
}
```
> NOTE: The `else` condition is considered the *default* option, applied only when all other  possibilities have been tested and rejected..

---
You can add as many `else if` statements as you require until you have covered all possible contingencies

---
Back: [[Adding Decision Making to Your Code]]