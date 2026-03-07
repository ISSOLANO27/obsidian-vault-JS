

CSS allows you to combine most font-related properties into a single shorthand property: #shortHandNotation

```css
font: style variant weight size/line-height family;
```

## Order of Values

The values must appear in this exact order:

1. **style** → `normal | italic | oblique`
2. **variant** → `normal | small-caps`
3. **weight** → `normal | bold | 100–900`
4. **size** → required
5. **line-height** → optional, written as `size/line-height`
6. **family** → required (font stack)
    

---

## Example

The following rule:

- Displays text in italic
- Makes it bold
- Uses small capital letters
- Sets font size to `1.5em`
- Sets line height to `2em`
- Uses Arial or another sans-serif font
    

```css
font: italic small-caps bold 1.5em/2em Arial, sans-serif;
```

---

## Required Values

When using the shorthand `font` property:

- **font-size** is required
- **font-family** is required
    #notAnOption

All other values are optional.

If you omit a value, the browser applies its default.

---

## Important Rules

- The values **must appear in the correct order**. #notAnOption 
    
- If included, `line-height` **must** follow the size using a **forward slash**:
    ```
    size/line-height
    ```
- Any omitted properties **automatically revert to their default values**.
    

---

## Key Concept

The `font` **shorthand property overrides individual font properties**.  

If you previously defined `font-style`, `font-weight`, etc., using the [shorthand will reset any values not explicitly included].

---

back: [[Working with Font Styles]]