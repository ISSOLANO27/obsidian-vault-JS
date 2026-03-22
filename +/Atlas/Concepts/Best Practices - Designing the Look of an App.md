When you plan the visual design for your app, you want to create a design that can be easily modified in the future. 

### For that reason, put as much of your design choices within a CSS stylesheet and not within your JavaScript code. 

One way of accomplishing this is with classes. For example, you could include the following statement in your app to increase the font size of text in a “major” element:
```js
document.getElementById("major").style.fontSize = "1.8em";
```

But a better approach is the following statement that changes that element’s class name:
```js
document.getElementById("major").className = "majorText";
```


and leaves the style definition in the CSS style sheet. If at a later date you and your team decide that your app needs a facelift, you can make all the modifications to the style definitions for that class in the stylesheet, saving you the trouble of wading through what might be long and complicated script looking for all the style settings.