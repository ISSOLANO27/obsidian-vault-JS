Information about the current page opened in the browser is stored in the `location` object. Properties and methods of the location object:

[[Property Methods and Location Object]]

|PROPERTY|DESCRIPTION|
|---|---|
|location.hash|Returns the anchor part (#) of the location URL|
|location.host|Returns the name of the server and the port number, if present|
|location.hostname|Returns the name of the server hosting the URL|
|location.href|Returns the full text of the URL address|
|location.pathname|Returns the directory and/or filename within the URL|
|location.port|Returns the port number of the URL|
|location.protocol|Returns the protocol used by the browser to access the page|
|location.search|Returns the query string portion of the URL|
|location.assign(_url_)|Loads the page at the _url_ address|
|location.reload()|Reloads the current page|
|location.replace(_url_)|Replaces the current document with the page at the _url_ address|

## Location object property to BOTH `document` and `window` objects
The location object is a property of both the document and window objects, so you [can write the entire reference] as either `document.location` or `window.location`. 

### default behavior of location
If you omit the document or window object, the location is assumed to refer to the current document being viewed in the currently active window. [[When object is omitted, window is assumed.]]

## loading certain web pages; or just information from addresses
The location object is useful for apps that must load certain web pages or extract important information from page addresses. 

A navigation app might need to load specific web page **maps or geolocation** websites to function properly. 

---
### Note: address + sticky note
>Web forms often include field names and values as part of the web address so that by accessing the location object, the app can extract those field names and values from the address. 
---

For example, following statement uses the location object to load the Google home page into a popup browser window named `newWin`.
```js
let newWin = windoe.open("". "searchbox", "width=700");
newWin.location.href = "http://www.google.com";
```

> You can also load the Google home page using either of the following statements:

```js
location.assign("http://www.google.com");
location.replace("http://www.google.com");
```
### replace() removes the previous page from history..
The difference is that `replace()` method removes the URL of the current page, so that the **user won’t be able to use the back button** to navigate back to the original document. 

---
Back: [[Exploring Browser Object Model]] 