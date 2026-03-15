Many desktop publishing and word-processing programs allow designers to create irregular line wraps in which the text appears to flow tightly around an image. This is not easily done in a web page layout because all images appear as rectangles rather than as irregularly shaped objects. However, with the aid of a graphics package, you can simulate an irregularly shaped image.

The trick is to use your graphics package to slice the image horizontally into several pieces and then crop the individual slices to match the edge of the image you want to display. Once you’ve edited all of the slices, you can use CSS to stack the separate slices by floating them on the left or right margin, displaying each slice only after the previous slice has been cleared. For example, the following style rule stacks all inline images that belong to the “slice” class on the right margin:

```css
img.slice {
	clear: right;
	float: right;
	margin-top: 0px;
	margin-bottom: 0px;
}
```



---

## 1. Why slicing is necessary

The browser treats every image like this:

```
+-----------+
|  image    |
+-----------+
```

Even if the image visually looks like a triangle:

```
   /\
  /  \
 /____\
```

The browser still wraps text around the **rectangle**, not the triangle.

So the wrap looks like:

```
+-----------+ text text text text
| triangle  | text text text text
| image     | text text text text
+-----------+
```

That’s the limitation.

---

## 2. What slicing actually means

The slicing happens **in a graphics editor**, not in CSS.

Photoshop, GIMP, Figma, etc.

You literally cut the image horizontally into pieces:

```
slice1
slice2
slice3
slice4
slice5
```

Then you crop each slice so its **width follows the edge of the shape**.

Example triangle slices:

```
slice1 width: 40px
slice2 width: 80px
slice3 width:120px
slice4 width:160px
slice5 width:200px
```

So each slice is a **different width rectangle**.

That’s the entire trick.

---

## 3. How CSS stacks them

Now the CSS part.

Your book shows:

```css
.slice {
  float: right;
  clear: right;
}
```

Let’s decode those two lines.

### float: right

This pushes each slice to the **right margin**.

Text will wrap on the **left side**.

Example:

```
text text text text   ####
text text text text   ####
```

---

### clear: right

This forces each slice to appear **below the previous floated slice**.

Without `clear`, floats might sit beside each other like this:

```
#### #### ####
```

But `clear: right` forces stacking:

```
####   ← slice1
####   ← slice2
####   ← slice3
```

Now you get a vertical column.

---

## 4. What the stacked slices create

Because each slice has a different width:

```
slice1   ####
slice2  ######
slice3 ########
slice4  ######
slice5   ####
```

When stacked:

```
    ####
   ######
  ########
   ######
    ####
```

Text wraps around **each rectangle separately**.

Result:

```
text text text      ####
text text         ######
text text       ########
text text         ######
text text text      ####
```

Your eye sees **one curved edge**.

But the browser is just wrapping around **a staircase of rectangles**.

---

## 5. Why no absolute positioning is needed

Absolute positioning would break the wrap entirely.

Floats are what allow **text to interact with the shape**.

The browser rule is:

> Inline text wraps around floated elements.

That’s the behavior we exploit.

---

## 6. The mental model

Think of it like building a curve with Lego blocks.

```
      []
     [][]
    [][][]
     [][]
      []
```

Each block is rectangular, but together they approximate a shape.

That’s exactly what these image slices are doing.

---

## 7. Why this trick feels confusing

Because the **image itself is not being wrapped**.

The **stack of slices** is.

You’re essentially replacing one image:

```
triangle.png
```

with many images:

```
triangle1.png
triangle2.png
triangle3.png
triangle4.png
triangle5.png
```

Each one slightly wider than the one above it.

---

## One last nerdy reality check

This trick was widely used in the **2000–2012 era of web design**.

Modern CSS now supports:

```
shape-outside
clip-path
```

which let text wrap around real shapes.

So this slicing technique is historically clever, but mostly obsolete now.

---

If you'd like, I can also show you **a simple HTML example of the slices in action**. Seeing the rectangles stack makes the entire trick suddenly click.
