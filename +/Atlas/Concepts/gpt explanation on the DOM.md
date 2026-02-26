Good. Let’s make it clean and structural so it sticks.

Here’s a clear separation between **Common DOM Child Objects (Elements)** and **Common DOM Methods**.

---

### 📌 Common DOM Child Objects (Elements in the Tree)

|Category|Object / Element|What It Represents|
|---|---|---|
|Root|`document`|Entire web page (root of DOM)|
|Root Child|`<html>` (`document.documentElement`)|Top-level HTML element|
|Major Container|`<body>` (`document.body`)|Visible page content|
|Major Container|`<head>` (`document.head`)|Metadata and resources|
|Structural|`<div>`|Generic container|
|Structural|`<section>`|Thematic grouping|
|Structural|`<header>`|Introductory content|
|Structural|`<footer>`|Footer content|
|Text|`<p>`|Paragraph|
|Text|`<h1>`–`<h6>`|Headings|
|Media|`<img>`|Image element|
|Navigation|`<a>`|Hyperlink|
|List|`<ul>`, `<ol>`, `<li>`|Lists|
|Forms|`<form>`|Form container|
|Forms|`<input>`|User input field|
|Forms|`<button>`|Clickable button|
|Forms|`<select>`|Dropdown list|
|Forms|`<textarea>`|Multi-line text input|

These are objects in the DOM tree. They represent structure.

---

### 📌 Common Document Methods (Finding / Creating)

|Method|Purpose|
|---|---|
|`getElementById()`|Select element by id|
|`getElementsByClassName()`|Select elements by class|
|`getElementsByTagName()`|Select elements by tag|
|`querySelector()`|Select first matching CSS selector|
|`querySelectorAll()`|Select all matching CSS selector|
|`createElement()`|Create a new element|
|`write()`|Write directly to document (legacy)|

These are tools to enter or build parts of the DOM.

---

### 📌 Common Element Methods (Modifying / Interacting)

|Method|Purpose|
|---|---|
|`addEventListener()`|Attach event handler|
|`removeEventListener()`|Remove event handler|
|`appendChild()`|Add child element|
|`removeChild()`|Remove child element|
|`replaceChild()`|Replace element|
|`setAttribute()`|Add/change attribute|
|`getAttribute()`|Retrieve attribute|
|`focus()`|Move cursor focus|
|`click()`|Programmatically trigger click|

---

### 📌 Common Element Properties (State)

|Property|Purpose|
|---|---|
|`.value`|Input field value|
|`.textContent`|Text inside element|
|`.innerHTML`|HTML inside element|
|`.src`|Image source|
|`.href`|Link destination|
|`.className`|CSS class|
|`.style`|Inline styling|
|`.disabled`|Enable/disable element|

---

### 🔎 Big Picture Pattern

|Step|What Happens|
|---|---|
|1|Select element (Document method)|
|2|Modify state (Property)|
|3|Attach behavior (Element method)|

That’s the DOM loop.

Select → Modify → React.

Everything in frontend JavaScript reduces to that cycle.

You’re not memorizing commands anymore.  
You’re mapping the operating system of the browser.