

## Core Idea

`:nth-of-type()` selects elements based on a mathematical formula that determines their position among **elements of the same type**.

It uses this structure:

```css
element:nth-of-type(an + b)
```

---

## What `an + b` Actually Means

This is not magic. It’s arithmetic.

```id="6l6h8r"
Selected position = (a × n) + b
```

### Definitions

- **n** → an automatic counter (0, 1, 2, 3, …)
- **a** → multiplier that controls spacing between matches
- **b** → starting offset
    
---
## What `n` Does

`n` always increases by 1:
```css
n = 0
n = 1
n = 2
n = 3
```
By itself, `n` would select every element.

---

## What `a` Does

`a` multiplies `n`.

Example:
```css
li:nth-of-type(3n)
```

Plug in values:

```css
3(0) = 0
3(1) = 3
3(2) = 6
3(3) = 9
```

This selects:

3rd, 6th, 9th, 12th…

So:

- `n` counts
- `a` stretches the count
- The gap between selections equals `a`

---

## What `b` Does (Offset)

Example:
```css
li:nth-of-type(3n + 1)
```
Plug in values:
```id="h0k2mt"
3(0) + 1 = 1
3(1) + 1 = 4
3(2) + 1 = 7
3(3) + 1 = 10
```
This selects:

1st, 4th, 7th, 10th…

So:
- `a` = spacing interval
- `b` = where the pattern begins
    

---

## Creating a Repeating Pattern

You can divide elements into repeating groups.

Example:

```css
li:nth-of-type(3n+1) { color: red; }
li:nth-of-type(3n+2) { color: blue; }
li:nth-of-type(3n+3) { color: green; }
```

This creates a repeating pattern:

1 → red  
2 → blue  
3 → green  
4 → red  
5 → blue  
6 → green

The repetition happens because the spacing (`a = 3`) creates groups of 3.

---

## Special Case: `n + b`

If `a = 1`, the formula becomes:

```css
li:nth-of-type(n+5)
```

Plug in:

```id="p7f0ha"
1(0)+5 = 5
1(1)+5 = 6
1(2)+5 = 7
```

This selects:

5th, 6th, 7th, 8th…

Meaning:

> Select everything starting at position 5.

**No repeating gap — just “from here onward.”**

---

## Even and Odd

CSS provides shorthand for common two-step patterns:

```css
li:nth-of-type(even)
li:nth-of-type(odd)
```

Equivalent to:

```css
2n       (even)
2n + 1   (odd)
```

Used for zebra striping and alternating layouts.

---

## Critical Difference: `:nth-of-type()` vs `:nth-child()`

Both use the same math.

But they count differently.

### `:nth-of-type()`

Counts only elements of the specified type.

Example:

```css
p:nth-of-type(2)
```

Selects the second `<p>` element only.

---

### `:nth-child()`

Counts all children, regardless of type.

Example:

```css
p:nth-child(2)
```

Selects a `<p>` only if it is literally the second child of its parent.

---

## Clean Mental Model

- `n` = counter
    
- `a` = spacing multiplier
    
- `b` = starting offset
    
- `an + b` = arithmetic rule for selection
    

Once you treat it as math instead of memorized syntax, it becomes predictable.

And predictable systems are where you stop guessing and start controlling the layout.

---
Back: [[Pseudo Classes]]