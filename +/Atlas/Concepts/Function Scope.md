A variable is accessible anywhere inside the function where it was declared.

Example:

```js
function example() {  
  var x = 10;  
  console.log(x); // works  
}  
console.log(x); // ❌ ReferenceError
```

`x` only exists inside `example`.

That’s function scope.