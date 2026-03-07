
The [[if statement]] will only take an action if the condition is true; Otherwise no action is taken.

To run one command block if the condition **is true** and a different command block if the condition **is not true** us the `if-else`:

```js
if (condition) {
	statements if condition is true
} else {
	statements if condition is not true
}
```
---

The else command block runs if the condition has any falsy value.

This means that a condition that is either `false`, `null`, or `undefined` **will trigger the else** command block.

```js
if (day === "Friday") {
	window.alert("Get ready for the Weekend!");
} else {
	window.alert("Have a great day!");
}
```

---
Back: [[Adding Decision Making to Your Code]]