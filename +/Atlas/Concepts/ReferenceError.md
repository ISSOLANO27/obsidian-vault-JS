This happens when you refer to a variable or object that JavaScript cannot find.

Example:

```js
console.log(userName);
```

If `userName` was never declared, JavaScript throws:

ReferenceError: userName is not defined

Mental model:  
You told the program to grab something **that was never created**.

Think:

> “You pointed to a box that isn’t on the shelf.”