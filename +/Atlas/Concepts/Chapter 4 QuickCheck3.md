

## 1. What is a breakpoint?

A **breakpoint** is a location in the program’s code where execution is temporarily paused by the debugger. When execution reaches that line, the program stops so the developer can inspect variables, program state, and the flow of execution.

---

# 2. Explain the difference between stepping into, stepping over, and stepping out

#### Step Into

**Step Into** executes the current line of code and then pauses again at the next line.  
If the line calls a function, the debugger moves inside that function and pauses at the first line of that function’s code.

This allows the developer to trace the program’s execution line by line and observe how variables and logic behave during execution.

---

#### Step Over

**Step Over** executes the current line of code without entering any functions that are called on that line.

If the line calls a function, the debugger runs the entire function but pauses at the next line of code in the current function.

This is useful when you trust that a function is working correctly and want to skip over its internal details.

---

#### Step Out

**Step Out** runs the remaining code inside the current function and then pauses when control returns to the function that called it.

This is helpful when you have stepped into a function but decide that you do not need to inspect the rest of its execution.

---

# 3. What is the call stack? How does it help in debugging?

The **call stack** is the ordered list maintained by the JavaScript engine that tracks all procedures currently being executed, such as functions, methods, or event handlers.

Each time a function is called, it is placed at the top of the call stack. When the function finishes executing, it is removed from the stack.

Viewing the call stack in a debugger helps developers understand how the program arrived at its current point of execution. This is especially useful in large programs with many functions, because it allows developers to trace the sequence of function calls that led to an error.

Using the call stack together with stepping commands makes it easier to identify which function is responsible for a problem in the program.

---

If you want, I can also give you a **simple visual diagram of how the call stack grows and shrinks during execution**, which usually makes this concept click instantly.