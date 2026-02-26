#### Vendor Prefixes for Browser Extensions

|Vendor Prefix|Rendering Engine|Browsers|
|---|---|---|
|-khtml-|KHTML|Konqueror|
|-moz-|Mozilla|Firefox, Camino|
|-ms-|Trident|Internet Explorer|
|-o-|Presto|Opera, Nintendo Wii browser|
|-webkit-|WebKit|Android browser, Chrome, Safari|

---

For example, one of the more recent style features added to CSS is the layout style to display content in **separate columns**. The number of columns is indicated using the `column-count` property. To apply this style in a way that supports both older and current browsers, you would include the browser extensions first followed by the most current CSS specification:
```css
article {
	-webkit-column-count: 3;
	-moz-column-count: 3;
	column-count: 3;
}
```

In general, browsers process these style properties in the order they are listed, ignoring those properties they do not recognize or support..

so always want the most current specifications. #askLater

---
back: [[Browser Extensions]]