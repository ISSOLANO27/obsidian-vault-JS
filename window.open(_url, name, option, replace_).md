#### To create a new browser window, apply the following `window.open()` method:
```js
window.open(url, title, option, replace)
```
 ##### _url_ 
 is the location of the file displayed in the window, 
##### _title_
 is the window’s title, 
##### _options_ 
is a comma-separated list of features defining the window’s appearance. 

You can customize the appearance of a new browser window or tab using the _options_ argument in the `window.open()` method. see: [[Options for the Window.open() method]]

 ##### _replace_ 
 is an optional Boolean value that specifies whether _url_ **should create a new entry in the window’s history list (true) or replace the existing entry (false).** 
 
 You can include all or none of the arguments for the `window.open()` method. 

---

>Depending on the arguments used with the `window.open()` method, the new content might open as a popup window or it might appear as a new tab within the browser. 

---
For example, the statement `window.open("http://www.example.com");` 
	**opens** the page at `www.example.com` in a **new browser window or tab**. 


If you **exclude a _url_ value** or **specify and empty text string**, a blank browser window or tab opens.
Here’s what happens:

- Opens a **blank window/tab**
    
- Equivalent to:
    

```js
window.open("", "_blank");
```

So:

|Argument|Result|
|---|---|
|No URL|Blank page|
|No name|Browser decides (usually new tab)|
|No options|Default browser UI|
|No replace|Defaults to false|