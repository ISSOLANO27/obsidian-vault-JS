As you trace program execution with step commands and breakpoints, you may also need to track how variables and expressions change **during that execution**. For example, suppose you have following statement in your code:
```js
let squareRoot = number**(1/2);
```
if somewhere in the program, `number` was given a **negative value.**.

which is not possible..

The expression would return a `Nan`. But the program is so complicated; I am left with
"**When did this happen**?" and "**How did this happen**?"

---
To assist you, the debugger displays a [[Scope Window]] listing all the **local** and **global** **variables** and **objects** available to the program and their current values. 

## It is NOT always necessary to Track all Variables
As the program executes, the Scope window will update the list to reflect the operations of the code. If you do not need to track all variables, the debugger also provides a Watch window to specify the variable or expression whose value you wish to track during the program’s execution. 

### To add a variable or an expression to the Watch window
**Locate** an instance of the variable or expression in the program, **select it, and copy it** to the Clipboard. You can then **paste the copied text into the Watch window**. 

You can also type the variable or expression **directly** into the Watch window.

Your contacts at Tuba Farm Equipment have tested out your most recent changes to the tractor selector application, and they have found one additional bug. A single letter should be added to the end of the model name to denote the selected fuel source—E for E, B for biodiesel, or D for standard diesel. The letters are correctly appended for E and standard diesel. However, when a user selects Biodiesel, the model number is displayed as simply “B”. Use the Scope and Watch windows now to track the variables in the code and pinpoint the source of the error.


---
Back: [[Tracking Program Flow with Debugging Tools]]