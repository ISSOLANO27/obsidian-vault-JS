The do while loop is considered a [[post test loop]]. 
```js
do {
	statements;
} while (condition);
```
---
## Place Condition to the End of the Loop
So that command block is not tested before the first iteration. 

### generating a series of numbers and concluding statement
```js
let i = 1;
do {
	document.write(1 + "<br>");
	i++; // increse the value of 1 by 1
} while (i <= 5);
document.write("<p>The value of i is equal to " + i + "</p>");
```


---
Aside from the location of the stopping condition, there is **no difference between the while and do while loops**. 

Use the do while loop when you want to ensure that the command block will be executed **at least once;** use the while loop when your program does not require such a guarantee.

---
back: [[Working with Program Loops]]