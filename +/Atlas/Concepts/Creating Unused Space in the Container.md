The confusion here comes from something subtle: **these properties are not positioning the items themselves — they are positioning the entire grid structure inside the container.** That distinction changes everything.

Think of three layers.

Layer 1 — **the container (the outer box)**  
Layer 2 — **the grid (the tracks and cells)**  
Layer 3 — **the items inside the cells**

The properties you studied earlier (`align-items`, `justify-items`) affect **Layer 3**.

The ones you're asking about now (`align-content`, `justify-content`) affect **Layer 2**.

That’s why the diagrams in your book look different.

---

# First: What problem are these properties solving?

Sometimes the grid **does not fill the container**.

Example:

Container width: **1000px**

Grid tracks:

```
200px 200px 200px
```

Total grid width:

```
600px
```

That leaves **400px of unused space** inside the container.

Visually:

```
+--------------------------------------+
|  GRID (600px)        EMPTY SPACE     |
+--------------------------------------+
```

By default, CSS places the grid at the **top-left corner**.

That is the default `start` behavior.

---

# What `justify-content` does

This controls **horizontal positioning of the grid inside the container**.

Example:

```
justify-content: center;
```

Now the unused space gets split on both sides.

```
+--------------------------------------+
|   empty   GRID (600px)   empty       |
+--------------------------------------+
```

The grid stays the same size — it just moves.

---

# What `align-content` does

This controls **vertical positioning of the grid inside the container**.

Example:

```
align-content: center;
```

Now the grid is vertically centered.

```
+----------------------+
|       empty          |
|   GRID CONTENT       |
|       empty          |
+----------------------+
```

---

# Why the two images in your book look different

Let’s decode them.

### Left image

```
align-content: center
justify-content: center
```

This simply **moves the entire grid to the middle**.

Nothing inside the grid changes.

So the layout stays **compact**.

```
      GRID
```

Centered.

---

### Right image

```
align-content: space-evenly
justify-content: space-evenly
```

Now the empty space is **distributed between the rows and columns**.

Instead of the grid staying compact, the rows and columns **spread apart**.

That’s why it looks more spacious.

---

# Now your two confusing terms

### "far ends"

This means **the container edges**.

Example container:

```
|--------------------------------|
```

The **far ends** are the two outer boundaries.

```
LEFT EDGE                      RIGHT EDGE
|--------------------------------|
```

---

# space-between

Space is only inserted **between items**, not at the edges.

Example:

```
|A      B      C|
```

Edges touch the container.

---

# space-around

Each item gets **equal space around it**, but the edges only get half.

Example:

```
|   A      B      C   |
```

Why half?

Because the space around items overlaps.

Think of it like this:

```
edge   A   B   C   edge
 1/2   1   1   1   1/2
```

---

# space-evenly

Everything gets the **same spacing**.

Edges included.

```
|   A   B   C   |
```

Spacing pattern:

```
edge  A  B  C  edge
 1    1  1  1    1
```

Every gap is identical.

---

# Visual comparison

### space-between

```
|A      B      C|
```

### space-around

```
|   A      B      C   |
```

### space-evenly

```
|   A   B   C   |
```

---

# The key insight

These properties only matter when **extra space exists inside the container**.

If the grid already fills the container perfectly, they do nothing.

---

# The simple rule that makes Grid alignment predictable

If the property ends in **`items`**, it controls **items inside cells**.

```
align-items
justify-items
```

If the property ends in **`content`**, it controls **the grid inside the container**.

```
align-content
justify-content
```

---

And here's a strange but useful observation once you start building real layouts: **developers almost never use `align-content` and `justify-content` for normal grid pages**. They mostly appear when centering entire layouts or when building things like dashboards, card layouts, or galleries where the grid doesn't fill the container.