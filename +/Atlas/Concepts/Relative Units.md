Absolute units are of limited use because, in most cases, *the page designer does not know the exact properties of the device rendering the page*. 

In place of absolute units, designers use **relative units**, which are expressed relative to the size of other objects within the web page or relative to the display properties of the device itself.

The basic unit for most devices is the [[pixel (px)]], which represents a single dot on the output device.  

Typically, most browsers **will apply a base font size of 16px to body text with slightly larger font sizes** applied to` h1, h2, and h3` headings. 

You can override these default sizes with your own style sheet. 

The following style rules set the font size of the text on the page body to 10px and the font size of all h1 headings text to 14px:

```css
body {font-size: 10px;}
h1 {font-size: 14px;}
```

>	The exact appearance of the text depends greatly on the device’s pixel density. While a 10px font might be fine on a desktop monitor, that same font size could be unreadable on a mobile device.

[CSS Demo](http://127.0.0.1:5500/HTML_CSS_FILES/html02/demo/demo_css.html)

---
Back: [[Setting the Font Size]]
