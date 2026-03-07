When a parent has `display: grid;`, its **direct children become grid items**.

Grid items no longer behave like normal block-level elements. They are positioned and sized by the grid system, not by normal document flow.

So what does the grid model “not allow”?

It does not allow grid items to be taken out of the grid layout using `float`.

If you try to apply:

```css
element#item1 {  
  float: left;  
}
```

The float will have no meaningful effect inside the grid context. Grid controls placement. Floats are ignored because grid items are already removed from normal flow and managed by the grid algorithm.

In other words:

- Grid determines where items go.
- You cannot override that with float-based positioning.
---
back: [[Creating a CSS Grid]]