Inline styles are added to HTML elements using the `style` attribute. 

Thus, the following HTML code
```js
let mainH1 = document.getElementById("main");

mainH1.style = "font-size: 1.5em; color: blue;";
```

can be **replaced** with the JavaScript statements:
```js
let mainH1 = document.getElementById("main");

mainH1.style.fontSize = "1.5em";
mainH1.style.color = "blue";
```

However, you can also define individual styles by appending the style property and a style value to the object. For example, you can set values of the font-size and color properties using the following:
```js
mainH1.style.fontSize = "1.5em";
mainH1.style.font-size = "1.5em"; // ❌ invalid JS NO hypthens
```


#### JavaScript does not support hyphens in property names
Notice that because the CSS font-size style is written in *camel case* as `fontSize`. 

Similarly, the `background-color` style would be written as `backgroundColor`, the font-family style would be entered as `fontFamily`, and so forth. 

####  Treated as inline styles: 
##### Higher Precedence than embedded or external stylesheet...
Any styles defined using the `style` property are treated as **inline styles** and thus will have precedence over styles defined in an **embedded or external** style sheet. #ch5askLater  [So does this have higher precedence than all styling methods? remind me what they are..]
# 🏆 The CSS Priority Hierarchy (from weakest → strongest)  

| Level | Styling Method | Example |  
|------|---------------|--------|  
| 1 | Browser default styles | `<h1>` default size |  
| 2 | External stylesheets | `style.css` |  
| 3 | Internal styles | `<style>` in HTML |  
| 4 | Inline styles | `element.style.color = "blue"` |  
| 5 | `!important` rules | `color: red !important;` |

---
Back: [[Introducing Nodes]]