#### Some prefer rem
Because of this confusion, some designers advocate using the **rem or root em** unit in which [all font sizes are always expressed relative to the font size used in the html element]. 

Using rems, the following style rule sets the font size of article text to 75% of 16 pixels or 12 pixels while the h1 heading size is set to 16 pixels, equal to the font size of the html element:
```css
html {font-size: 16px;}
article {font-size: 0.75rem;}
article > h1 {font-size: 1rem;}
```

>The **rem unit has become increasingly popular** with designers as browser support grows and its use might possibly replace the use of the em unit as the font size unit of choice in upcoming years.

---
Back: [[Scaling Fonts with ems and rems]]