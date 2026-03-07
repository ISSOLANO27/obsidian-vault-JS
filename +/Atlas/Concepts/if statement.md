```js
if (condition) {
	statements
}
```

`condition` - a Boolean expression. true or false
`statements` - part of the command block that runs when condition is true

It is good practice to always use {} for the command block; Even though you do not have to. 
#writingEffectiveCode 

---
```js
if (day === "Friday") {
	window.alert("Get ready for the Weekend!");
}
```

> NOTE:  Do not use the `=` in place of the `===` conditional operator to test for the truth of a condition. #commonMistakes 
> 
> The `=` symbol is an assignment operator and assigns one value to another; It does not test for equality


---
Back: [[Adding Decision Making to Your Code]]