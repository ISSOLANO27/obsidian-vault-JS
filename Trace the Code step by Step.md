Pretend you are JavaScript. Literally walk through the code line by line and ask:

- What is the value right now?
- What condition is true or false?
- Which line runs next?
- What result should happen here?

This is one of the best habits you can build.
Example:

```js
let x = 4;  
let y = 4;  
  
if (x > y) {  
	console.log("greater");  
} else {  
	console.log("less");  
}
```
Walk it:

- `x = 4`
- `y = 4`
- `x > y` → `false`
- goes to `else`
- prints `"less"`
    
Now you can clearly see the logic flaw.