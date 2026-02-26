Variables declared with `let` are [[block scoped]].

In the following code the user variable is recognized **only** within the command block, but outside of that command block it is not recognized and will produce an error if it is referenced in a statement: #producesError
```js
{
let user = "Dawson";
document.Write(user); //writes Dawson
}
document.Write(user) // error
```
---
Back: [[Variable Scope]]

