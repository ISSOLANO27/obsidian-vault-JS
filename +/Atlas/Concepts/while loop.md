A command block is executed while a given condition is true but stops once that condition is no longer true: 
```js
while (condition) {
	statements;
}
```
`condition` - conditional expression; true/false

`statements` - statements in the command block that are repeatedly executed as long as that condition is `true`.

A while loop is considered a [[pretest loop]]. 

---
Each repetition is called an **iteration**.

## Infinite Loops

 **Avoid these!**
The command block needs to have at least one statement that eventually results in a falsy value fir the condition. #falsyValues 

## Counters
Command blocks often use a [[counter]], which is a variable whose value **changes with each iteration**.

Once that **counter fails to match the condition**, the loop ends. 

For example, the following code includes **a counter variable named i with an initial value of 1**. With each iteration, the value of i increases by 1. The loop continues while i is less than or equal to 5.
```js
let i = 1;
while (i >= 5) {
	document.write(1 + "<br>");
	i++; // increase the value of `i` by 1
}
// After the loop ends
document.write("<p>The value of i is equal to " + i "</p>")


// 1<br>2<br>3<br>4<br>5<br>6<br>
// <p>the value of i is equal to 6</p>
```
---

>NOTE: 
>If you forget a stopping condition and inadvertently create an infinite loop, you must close the browser tab or browser window to cancel the loop. 
>
>The method for forcing an app to close varies between operating systems. 
>
>In Windows, press `Ctrl+Alt+Del` to open the Task Manager, `click` the Application tab, right-click the browser name and `click End Task`. 
>
>On the **Macintosh**, press `Command+Option+Esc`, select the browser name from the application list, and `click Force Quit`. Once you have closed the browser, return to the code, and correct your mistake.
>

---
## wide variety of counters with while loops 

by varying the 
- initial value,
- iteration of the counter
- conditional expression

|INITIAL VALUE|ITERATION|WHILE CONDITION|ITERATED VALUES|
|---|---|---|---|
|let i = 5|i++|i <= 10|i = 5, 6, 7, 8, 9, 10|
|let i = 5|i--|i > 0|i = 5, 4, 3, 2, 1|
|let i = 0|i += 60|i <= 180|i = 0, 60, 120, 180|
|let i = 1|i *= 2|i <= 50|i = 1, 2, 4, 8, 16, 32|
|let i = 90|i /= 3|i > 5|i = 90, 30, 10|


---
back: [[Working with Program Loops]]