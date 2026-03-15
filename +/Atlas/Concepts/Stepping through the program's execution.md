As you add more program loops, control statements, and functions to your code, the program flow **becomes increasingly complex and difficult to navigate**. 

One function might call another function which itself contains a series of nested `for` loops with `if` else statements within **each loop iteration that call yet other functions**. 

If you are trying to trace the execution of your code, you might not need or want to follow **every possible branch** of the code’s execution. You might want to **skip** past certain functions or loops.

### Tracing areas of interest
To make it easier to trace only those parts of the program that interest you, the debugger provides a set of stepping options to choose how to step through the code.

You can `step in` or `step into` the code so that any function called by the program is traced by the debugger one step at a time. 

However, if you do not need to evaluate those functions in detail, you can `step over` them so that the function is still run but the debugger does not show each step of the process. 

### When to skip on a Trace
You would use the step over option when **you are convinced that a function is working correctly** and thus does not need your attention as you debug other sections of the program. 

Finally, you can `step out` of the code, so the debugger executes all the remaining code within the function **without pause**. The step out option is used to jump out of a function that no longer requires your direct attention.

---
#### If you are not sure which button to click 
As you trace the program’s execution, hover your mouse pointer over the buttons to view the popup information associated with each button. [where in the console?]

> You can insert a breakpoint directly into your program by adding the statement debugger; to the code. When the browser encounters this statement, it will pause the program execution until you manually restart it using the step buttons in the debugger. [explain this note: so it is suggesting that we place these breakpoint in our source file?]

[Tuba Farm Equipment - Tractor Selector](http://127.0.0.1:5500/JavaScript/Chapter04/chapter/js04.html)

---
Back: [[Tracking Program Flow with Debugging Tools]]