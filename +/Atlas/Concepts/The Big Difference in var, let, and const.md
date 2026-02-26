
# First: What is Scope?

Scope answers one question:

> Where is this variable visible?

That’s it.

---
# Function Scope

Function scope means:

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

Now here’s the key:

`var` is **function-scoped.**

---
# Block Scope

A block is anything inside `{ }`.

Examples:
- if statements
- for loops
- while loops
- standalone braces
    

Block scope means:

A **variable** only exists inside that specific `{ }`.

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

`let` and `const` are block-scoped.

---

# The Big Difference

This is where it gets interesting.

### With `var`:

```js
if (true) {
  var a = 5;
}

console.log(a); // ✅ works
```

Why?

Because `var` ignores block boundaries.  
It only cares about function boundaries. #majorBreakthrough 


That’s legacy JavaScript behavior.

---

### With `let`:

```js
if (true) {
  let b = 5;
}

console.log(b); // ❌ ReferenceError
```

Because `let` respects block scope.

---

# Now Let’s Combine Function + Block

```js
function test() {
  if (true) {
    var x = 10;
    let y = 20;
  }

  console.log(x); // ✅ works
  console.log(y); // ❌ ReferenceError
}
```

Inside the function:

- `x` survives the block (because **var is function-scoped**)
    
- `y` dies after the block (because **let is block-scoped**)
    

This is the real difference.

---

# Why This Was Changed (Important)

`var` caused bugs.

Example:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

What prints?
```js
3
3
3
```
When using `var` inside a `for` loop with `setTimeout`, all iterations share the same function-scoped variable `i`. The loop runs immediately and completes before the scheduled callbacks execute. By the time the callbacks run, `i` has already been incremented to 3. Since all callbacks reference the same variable, they each log 3. Using `let` instead creates a new block-scoped `i` for each iteration, allowing each callback to capture a different value.
Now with `let`:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

You get:
```
0
1
2
```
Because each loop iteration gets its own block-scoped `i`.

This is a massive improvement.

---

# So Final Clean Definitions

Function Scope:

- Variable lives inside entire function.
    
- Created by `var`.
    

Block Scope:

- Variable lives only inside `{ }`.
    
- Created by `let` and `const`.
    

`let` and `const` are modern and safer.

`var` is legacy and dangerous in loops.

---

# Tiny Memory Tie-In

Scope determines:

- When variables are created
    
- When they are eligible for garbage collection
    

When a function finishes execution,  
its stack frame disappears,  
and its block-scoped variables disappear too. #stackHeapMemory


This is where stack vs heap will connect beautifully next.

---

If you want, we can now:

1. Visually simulate stack frames with scoped variables
    
2. Or explore how closures break the normal “scope disappears” rule
    

Both are powerful next steps.