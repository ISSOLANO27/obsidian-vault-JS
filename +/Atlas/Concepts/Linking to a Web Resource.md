General structure 
```html
http://server/path/filename#id
```
for secure connection:
```html
https://server/path/filename#id
```
---
<dl>
	<dt>server</dt>
		<dd>the name of the web server hosting the resource</dd>
		<dt>filename</dt>
		<dd>name of the file</dd>
		<dt>id</dt>
		<dd>the name of the id</dd>
		<dt>path</dt>
		<dd>the path to the file on that server</dd>
</dl>


HTTP Protocol to access the Web Server at www.curbside.com, linking to the document location named lunch within the `ct_menu.html` file in the `/thai/docs` folder:
```html
http://www.curbsidethai.como/thai/docs/ct_menus.html#lunch
```
---

URLs are often entered in a more abbreviated form, _http://www.curbsidethai.com_ for example, with no path or filename. **Those URLs point to the default home page located in the top folder in the server’s folder tree**. 

Many servers use `index.html` as the filename for the default home page, so the URL _http://www.curbsidethai.com_ would be equivalent to _http://www.curbsidethai.com/index.html_.

related:
- [[Understanding Domain Names]]
