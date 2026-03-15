
As programs become more complex, they will **often involve functions that call other functions that call even more functions**. 

For example, an accounting program might have an 
`accountsPayable()` function that calls the `accountsReceivable()` function that might call the `depositFunds()` function, all nested within the `balanceBooks()` function that is called by the `reportBudget() function`. 

## You could easily get lost
With such a complex set of nested functions, **you might get lost as you trace** the execution of the program code. 
To aid in knowing where you are in the code, the debugger provides a [[call stack]] that lists the functions **currently running, displayed in a hierarchical list of function names and properties**. 

Each time the program calls a function or procedure, **it is added to the top of the call stack**. After the function or procedure finishes executing, it is **removed** from the stack.

The call stack is **useful to trace the changing values of a variable that is passed as an argument among several functions**. 

If variable is assigned a wrong value, the call stack makes it easier to locate the specific function causing the problem. Use the call stack to view the order of execution among the many functions used the Tuba Farm Equipment web page.

---


---
Back: [[Tracking Program Flow with Debugging Tools]]
related:
- [[Skills at Work - Reporting Bugs]]
- [[Chapter 4 QuickCheck3]]