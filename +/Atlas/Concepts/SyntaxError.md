This happens when the JavaScript parser cannot even understand the code.

Example:

```js
if (x > 10 {  
   console.log(x);  
}
```

Missing parenthesis.

Result:

SyntaxError: Unexpected token '{'

Mental model:

> “The sentence you wrote is grammatically broken.”

The engine cannot even start running the program.