1. Describe the **three** types of program errors.
    >`Load-time or syntax errors` in which the interpreter finds error in the syntax of the code as it initially loads it.
    >`Runtime errors` in which the interpret has loaded the code but is unable to run it due to such factors as an unreferenced variable or a mistyped function name.    
>	`Logic errors` in which the program can be interpreted and run but has an incorrect result due to a flaw in the program’s logic.
        
    
2. What is the error in the following code and what type of error is it?


>	The error is a syntax error in which document.writ should have been document.write.
>	
    
3. What is the error in the following code and what type of error is it?
```js
let firstvalue = 10;
let seccondValue = 20;
let result = firstValue + secondValue;
```
    
>	This is a runtime error in which the error occurs because the firstValue variable is written as firstvalue in the final statement of the code.
    
4. If the browser console reports a single syntax error, does that mean there is only one syntax error in the code?
    
>	No. The debugger will stop at the first instance of a syntax errors. There may be others in the code that have not been reached yet.
    

