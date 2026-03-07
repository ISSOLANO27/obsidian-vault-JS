Another relative unit is the viewport unit in which lengths are expressed as a percentage of the width or height of the browser window. #relativeUnit 

As the browser window is resized, the size of text based on a viewport unit changes to match. There are four viewport units: vw, vh, vmin, and vmax where: #learnLater 

-  `1vw = 1%` of the browser window width
    
- `1vh = 1%` of the browser window height
    
- `1vmin = 1vw` or 1vh (whichever is smaller)
    
- `1vmax = 1vw` or 1vh (whichever is larger)
    

For example, if the browser window is 1366 pixels wide, a length of 1vw would be equal to 13.66px. 

If the width of the window is reduced to 780 pixels, 1vw is automatically rescaled to 7.8 pixels. **Auto-rescaling has the advantage that font sizes set with a viewport unit will be sized to match the browser window**, maintaining a consistent page layout. 

The **disadvantage** is that page text can quickly become unreadable if the browser window becomes too small.

---
back: [[Setting the Font Size]]