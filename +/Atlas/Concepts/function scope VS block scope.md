
The real rule is:

`var` is scoped to the **nearest enclosing function**, not the nearest `{}` block.

So it does NOT escape its function.  
It only ignores non-function blocks like `if`, `for`, etc.

Let’s make this crystal clear.

var is dangerous with for loops

---

## Case 1 — No Function, Just a Block

```js
if (true) {
  var x = 10;
}

console.log(x); // ✅ works
```

Why?

Because there is no function wrapping it.

So `var x` becomes global (or global to that script).

The `{}` from the `if` does not contain it.

---

## Case 2 — Inside a Function

```js
function test() {
  if (true) {
    var y = 20;
  }

  console.log(y); // ✅ works this is still part of the function
}

test();
console.log(y); // ❌ ReferenceError var cannot escape its function
```

Here’s the key:
- `y` escaped the `if` block
- But it did NOT escape the function
    
Because `var` belongs to the nearest function.

---
## Case 3 — Compare with let

```js
function test() {
  if (true) {
    let z = 30;
  }

  console.log(z); // ❌ ReferenceError
}
```
`let` obeys the block.
`var` ignores the block.

---

## The Clean Rule

Think of it like this:

There are two fences:
- Block fence `{}`
- Function fence `function(){}`
    
`let` and `const` stop at the block fence.
`var` ignores the block fence but stops at the function fence.

---
## So Corrected Statement

Instead of:

> var can go outside the block scope

Say:

>`var` is not limited by block scope — only by function scope.

That wording is more accurate.

---

## Why This Matters

This difference is what caused classic bugs like:
```js
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```
You expected:
0  
1  
2

But you got:
3  
3  
3

Because there is only one function-scoped `i`.

That single `i` survived the loop block.

---
This is also why modern JS style almost never uses `var`.

It’s not evil.  
It’s just less predictable.

---

Now we’re perfectly positioned to connect this to:

- How each function call creates its own scope frame on the stack
    
- And why closures can preserve variables even after the stack frame is gone
    

That’s where the deep understanding clicks permanently.