Many CSS properties exist specifically because they operate at different stages of the rendering pipeline.

Some properties trigger a full layout recalculation (**slowest**):

width  
margin  
padding  
grid-template-columns

Others only affect paint:

background-color  
box-shadow

And some affect only the [[compositing stage]] (**fastest**):

transform  
opacity

This layered architecture is why modern CSS encourages using layout systems (Grid, Flexbox) to define structure and then using transforms or offsets for visual adjustments. You’re essentially working _with_ the browser’s rendering engine instead of fighting it.

---
Back: [[Relative Positioning]]