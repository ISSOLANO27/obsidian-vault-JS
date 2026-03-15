Correction:

You **do not have to define coordinates for either `relative` or `absolute`.**

But the behavior differs.

If you write:

```css
section {  
  position: relative;  
}
```

The element simply stays where it would normally appear in layout.

No coordinates → **no movement**.

If you write:

```css
section {  
  position: absolute;  
}
```
The element is **removed from normal flow**, but without coordinates it will appear where it would have originally been placed (its _static position_).

So the corrected idea:

> Coordinates are optional for both `relative` and `absolute`.  
> Without coordinates, `relative` keeps the element in its normal place, while `absolute` removes it from flow but places it at its original static position.