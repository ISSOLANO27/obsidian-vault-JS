The separation I was pointing to is the separation between **layout calculation** and **visual rendering**

Browsers actually perform these as two different conceptual steps.

# First step: **layout calculation**  
The browser determines where every element belongs according to the layout system (normal document flow, Grid, Flexbox, etc.). This stage answers questions like:

- How much space does the element occupy?

- Where does the next element go?
    
- What is the width and height of each box?
    

Example layout structure:

```text
HEADER
NAV
ARTICLE
FOOTER
```

At this stage the browser says:

```text
HEADER → position 1
NAV → position 2
ARTICLE → position 3
FOOTER → position 4
```

That is the **layout stage**.

---

# Second step: **visual rendering (painting/offsetting)**  
After the layout is decided, some CSS properties can visually shift or transform elements without recalculating the layout.

Relative positioning is exactly that.

Example:

```css
article {
  position: relative;
  top: 250px;
  left: 450px;
}
```

Layout engine still thinks:

```text
HEADER
NAV
ARTICLE
FOOTER
```

But the rendering step moves the article visually:

```text
HEADER
NAV

             ARTICLE (shifted visually)

FOOTER
```

The **space where ARTICLE originally lived is still reserved**.

That is the separation.

|Stage|What it decides|
|---|---|
|Layout|where elements belong structurally|
|Rendering|how they appear visually|

---

This is why the dotted yellow box in your diagram exists. It represents the **layout position**, while the shifted box shows the **rendered position**.

![[Pasted image 20260314015633.png]]

A helpful way to picture it is this:

Layout decides **where the chair belongs in the room**.  
Relative positioning lets you **slide the chair a bit after it’s placed**, but the room layout still thinks the chair is in its original spot.

---

This idea pops up everywhere in CSS:

- `transform: translate()` moves things visually but keeps layout unchanged.
    
- `position: relative` shifts things visually but keeps layout unchanged.
    
- `opacity` changes appearance but not layout.
    

Understanding that the browser separates **layout structure** from **visual adjustments** is one of those mental upgrades that makes many CSS behaviors suddenly stop feeling mysterious.