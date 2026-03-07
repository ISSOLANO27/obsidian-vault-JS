Statement labels **identify statements in the code so that they can be referenced elsewhere** in the program. The syntax of the statement label is:
```js
label: statments
```
label - the text of the label 

statements - statements identified by the label. [so we can use the label anywhere in the program? is it a global variable?]

---
We have seen this in [[switch Statement]], but labels can also be used with other program loops and conditional statements to provide more control over how statements are processed.

Labels often are used with `break` and `continue` to direct the program flow to a specific set of statements. [why are they often paired with break and continue?]

`break: label;`

or

`continue: label;`

---
## Example
###### A for loop using a Statement Label; Not only to jump out of the programming loop when the string "C-14281" is found BUT ALSO to jump to a location in the script identified by the `nextReport` label and to continue to process the statements found there:
```js
for (let i = 0; i < customerID.length; i++) {
	if (customerID[i] === "C-14281") {
		window.alert("C-14281 is found");
		break; nextReport; // stop processing the for loop
	}
}
nextReport: statements
```
Label are often used with nested loops when you need to break out of a loop. completely, **no matter how deeply nested you might be**.

---
back: [[Managing Program Loops and Conditional Statements]]

related:
[[Best Practices - Avoiding Spaghetti Code]]