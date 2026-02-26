their scope is **limited to the command block** in which they are defined, or any code nested within that block.

A block is anything inside `{ }`.

Examples:
- if statements
- for loops
- while loops
- standalone braces
    
Block scope means:

**A variable only exists inside that specific `{ }`.**

Example:

```js
if (true) {  
  let y = 20;  
  console.log(y); // works  
}  
console.log(y); // ❌ ReferenceError
```

`y` is block-scoped.

Now here’s the key:

[[let keyword]] and [[const keyword]] are block-scoped.