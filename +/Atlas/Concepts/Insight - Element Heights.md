
### Element height depends on content  
    
By default, an element’s height expands to fit whatever content is inside it. Unlike width (which often defaults to 100%), height is not automatically tied to the screen.
    

Example problem:

```css
body header {
  height: 50%;
}
```

This looks like it sets the header to 50% of the body’s height.

But the body’s height depends on its content — which includes the header. That creates circular logic:

- Header height depends on body height
- Body height depends on header height

Browsers resolve this by leaving the percentage height ineffective.

### Percentage heights require a known parent height
    

Percentages only work when the parent has a defined height.

Working example:

```css
body {
  height: 1200px;
}

body header {
  height: 50%;
}
```
Now the math works:

- Body = 1200px
- Header = 50% of 1200px = 600px

Because the parent’s height is known, the child’s percentage can be calculated.

### Extending the page to full browser height
    

To make the page body fill the browser window:

```css
html {
  height: 100%;
}

body {
  min-height: 100%;
}
```

Why this works:

- The browser window defines the height of the `html` element.
- Setting `html` to 100% ties it to the viewport (visible screen area).
- Setting `body` to `min-height: 100%` **ensures it is at least as tall as the window**.

If content grows taller than the window, the body expands naturally.

Core takeaway:

[Height percentages only work when the parent has a defined height].  
Otherwise, you create **circular reasoning** and the browser ignores it.

Width is flexible by default.  
Height must be anchored to something known.

---
back: [[Centering a Block Element]]