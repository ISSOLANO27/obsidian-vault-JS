This occurs when a value exists but **doesn’t support the operation you're trying to perform**.

Example:

```js
let number = 5;  
number.toUpperCase();
```

Result:


`TypeError: number.toUpperCase is not a function`


Why? Because `toUpperCase()` works on **strings**, not numbers.

Mental model:

> “You grabbed the right object but used the wrong tool on it.”