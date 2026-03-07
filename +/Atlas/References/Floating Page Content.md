
By default, content is displayed in the page in the order it appears within the HTML file as part of the normal document flow. **Floating** an element **takes it out of position and places it along the left or right edge of its parent element.** 

Subsequent **content that is not floated occupies the space previously taken up** by the floated element. 

`float: position;`

Position:
- none (default)
- left/right float object on the left margin or right.

 If sibling elements are floated along the same margin, they are placed alongside each other within a row

 >Note that for the elements to be placed within a single row, the combined width of the elements **cannot exceed the total width of their parent element**, otherwise any excess content will automatically wrap to a new row.

---
Back: [[Tutorial 3 - Designing a Page Layout]]

related:
- [[Clearing a Float]]
- [[Refining a Floated Layout]]
- [[Container Collapse]]