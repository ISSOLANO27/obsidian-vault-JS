A [[timed command]] is a command or **function that is run at a specified time** or **repeated at set intervals**. 
## To repeat a command at set intervals, apply the following `setInterval()` method:
```js
timeVar = window.setInterval(command, interval)
```
where `_timeVar_` is a variable that stores an `id` identifying the timed command,

_command_ is a statement or command that will be repeatedly run, 

and _interval_ is the interval in milliseconds between runs. 

---

## moveNext() as the command
For example, the following statement runs the `moveNext()` function every `2000` milliseconds (2 seconds) after an initial 2-second delay. The id of the timed command is stored in the `timeID` variable. [wait, what is being stored here? I know it is the setInterval; But moveNext is the actual command and the 2000 is the set timed interval in between. moveNext is also a timed command or is this showing how we can pass a function? I feel like moveNext, is built in function JS provides when working with nodes right? ]
```js
let timeID = window.setInterval(moveNext, 2000);
```

### # 🔥 How to run immediately (no delay)
> To run a timed command with no initial delay, include 2 statements: 
> 1. the first statement running the command immediately 
2. a second statement using the `setInterval()` method to run the command after a specified time interval. 

## ✅ Solution: Call it once manually

```js
moveNext(); // run immediately  
  
let timeID = setInterval(moveNext, 2000);
```

---
Back: [[Running Timed Commands]]