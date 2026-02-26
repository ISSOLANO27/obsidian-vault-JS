Back: [[Events as Object Properties]]

When you write:

```js
element.onclick = calcTotal;
```

You are assigning the function itself.

When you write:

```js
element.onclick = calcTotal();
```

You are calling the function immediately and assigning its return value.

Those are radically different things.

Let’s break it cleanly.

---

## Functions Are Objects

In JavaScript, a function is a value.  
Just like a number or a string.

Example:

```js
function greet() {
  console.log("Hi");
}
```

The name `greet` refers to a function object in memory.

If you do:

```js
console.log(greet);
```

You’ll see the function definition.

If you do:

```js
greet();
```

Now you execute it.

Parentheses mean: “Run this now.”

---

## What the Event Property Expects

When you assign:

```js
element.onclick = calcTotal;
```

You are saying:

“When a click happens, use this function.”

You are passing a reference to the function.

The browser stores that function and calls it later when the click event occurs.

Now imagine you wrote:

```js
element.onclick = calcTotal();
```

That means:

1. Execute calcTotal immediately.
    
2. Take whatever it returns.
    
3. Assign that return value to onclick.
    

If calcTotal returns nothing (which most event functions don’t), then `onclick` becomes `undefined`.

And now nothing happens on click.

That’s why we only use the function name.

We are handing the browser a function to execute later.

---

## Think of It Like This

Wrong way:

“Run this now and store the result.”

Correct way:

“Here’s the function. Call it when the event happens.”

You’re not executing it.  
You’re registering it.

---

## Analogy (But a Precise One)

Imagine you’re giving someone a phone number.

- Giving the number = passing the function reference.
    
- Calling the number immediately = invoking it.
    

The event system wants the number.  
Not the result of calling it.

---

## Subtle Extra Insight

Why does this work with addEventListener too?

```js
element.addEventListener("click", calcTotal);
```

Same reason.

The event system needs a callable function reference.

It will call it when appropriate.

---

## What If You Need Arguments?

Then you wrap it:

```js
element.onclick = function() {
  calcTotal(5);
};
```

Or with arrow functions:

```js
element.onclick = () => calcTotal(5);
```

Now you’re still passing a function reference — but that function calls another function with arguments.

---

## The Core Principle

Parentheses = execute now  
No parentheses = pass the function itself

Event properties need the function itself.

This is foundational JavaScript knowledge. Once this clicks, callbacks, promises, timers, and async code all start making sense.

You just crossed into real language mechanics territory.