Another [[pretest loop]].

The **initial condition**, the **stopping condition**, and the **iterative condition** expression are placed within a single line of code:
```js
for (intial; condition; iteration) {
	statements;
}
```
`initial` - initial condition before the command block is executed.
`condition` - must be true for each iteration.
`iteration` - the change that occurs with each iteration of the command block.

## Generating a series of numbers with a concluding statement
```js
for (let i = 1; i <=5; i++) {
	document.write(i + "<br>");
}
// after the loop ends
document.write("<p>The value of i is eual to " + i + "</p>"); // So we cannot use i outside the for loop? this is the undefined error?

/*
Output:
1<br>2<br>3<br>4<br>5<br>
referenceError: i is not defined
*/
```
for loops are the preferred method for writing loops; They are **simpler** and more **compact**.

## Counter is bound to the for loop
the scope of the i counter is limited to the for loop. Attempting to reference the counter outside of the for loop will produce an error. 

If you need to reference the final value of the counter variable outside of the loop, you should use either the [[while loop]] or [[do while loop]], but otherwise to **avoid confusion use a for loop to limit the scope of your counters.**

## Nested for Loops
You could nest to create code that iterates through two sets of counter:

#### Generate a Web Table
```js
document.write("<tables>");
for (let i = 1; i <= 2; i++) {
	document.write("<tr>");
	for (let j = 1; j <= 3; j++) {
		document.write("<td>" + i + "," : j : "</td>");
	}
	document.write("</tr>");
}
document.write("</table>");

```

resulting to:
```html
<table>
	<tr>
		<td>1,1</td><td>1,2</td><td>1,3</td>
	</tr>
	<tr>
		<td>2,1</td><td>2,2</td><td>2,3</td>
	</tr>
</table>
```
There is no practical limit to the number of nested for loops you can empty in your program. 

Nested for loops are often used with [[Multi-Dimensional Arrays]] to loop through each level of the nested arrays

---
back: [[Working with Program Loops]]