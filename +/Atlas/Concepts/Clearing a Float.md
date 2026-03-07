In some layouts, you will want an element to be **displayed on a new row**, clear of previously floated objects. To ensure that an element is always displayed below your floated elements, apply the following clear property:

`clear: position`

where _position_ is `left, right, both, or none`. 

**left** - displays the element only when the left margin is clear of floating objects. 

**right** - displays the element only when the right margin is clear. 

**both** - displays the element only when both margins are clear of floats.

The `default` clear value is **none**, which allows the element to be displayed alongside any floated objects.

---
You do not have to apply the clear property just because you want it to be displayed in the same row alongside the left column...
It means:

You don’t use `clear` to align things side-by-side.  
You use `clear` to prevent side-by-side behavior.

Clear is not for alignment.  
Clear is for separation.

---
Back: [[Floating Page Content]]