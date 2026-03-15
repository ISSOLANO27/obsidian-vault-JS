Relative positioning is used to nudge an element out of its normal position in the document flow.

Under relative positioning, the `top, right, bottom, and left` properties indicate the extra space that is placed alongside the element as it is shifted into a new position. 

For example, the following style rule adds 250 pixels of space to the top of the element and 450 pixels to the left of the element, resulting in the element being shifted down and to the right
```css
div {
	position: relative;
	top: 250px;
	left: 450px;
}
```
![[Pasted image 20260314005620.png]]


#### Layout of the other page elements are not affected by relative positioning; 
they will still occupy their original positions on the rendered page, just as if the object had never been moved at all.

#### Often used to teak layout
Relative positioning is sometimes used when the designer wants to “tweak” the page layout by slightly moving an object from its default location to a new location that fits the overall page design better. 

### My Explanation:
Relative positioning lets you **shift an element from its natural position in the document flow without removing it from that flow**. The browser first places the element exactly where it would normally appear, then applies the offsets defined by `top`, `right`, `bottom`, or `left`. These values act as **visual nudges**, not absolute coordinates. For example:

```css
div {
  position: relative;
  top: 250px;
  left: 450px;
}
```

The browser still reserves the element’s **original space in the layout**, but then moves the element **250px downward and 450px to the right** from that original position. This means surrounding elements behave **as if the element never moved**, which is why relative positioning is often used for small adjustments rather than major layout changes. Conceptually, the element remains anchored to its original spot while being visually shifted away from it.


If no top, right, bottom, or left values are specified with relative positioning, their assumed values are 0 and the element will not be shifted at all.


---
Back: [[Session 3.3 - Layout with Positioning Styles]]
related: 
- [[Separation of Layout and Visual Offset in CSS]]
- [[Some CSS Properties Operate During Different Stages of the Rendering Pipeline]]