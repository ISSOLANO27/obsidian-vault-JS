1. Provide code to create a confirmation window with the message “Do you wish to continue?”, storing the response in the continuePlay variable.
	```js
	    let continuePlay = confirm("Do you wish to continue?");
	```
	👉 What happens:
	- User clicks **OK → true**
	- User clicks **Cancel → false**

2. Provide code to create a prompt window with the message “Enter your state” with the default value, “Texas”. Store the response in the state variable.
	```js
	    let state = prompt("Enter your state", "Texas");
	```
	👉 What happens:
	- User types something → that value is stored
	- User clicks cancel → `null`

3. Provide code for the URL “[http://www.microsoft.com](http://www.microsoft.com/)” in a new browser window named newWin that is 600 pixels wide and 400 pixels tall. Store the window object in variable named myWindow.
	```js
	    let myWindow = window.open(  
	   "http://www.microsoft.com",  
	   "newWin",  
	   "width=600,height=400"  
	);
	```
	👉 This:
	- Opens Microsoft
	- Names the window `"newWin"`
	- Sets size to **600x400**
	- Stores the window object in `myWindow`

4. Provide code to increase the width of myWindow by 100 pixels and the height by 50 pixels.
	```js
	    myWindow.resizeBy(100, 50);
	```
	👉 This:
	- Adds **+100px width**
	- Adds **+50px height**

5. What do you use the `this` object for?

This one matters a lot — especially for your project.

## 🧠 Simple definition:

> `this` refers to **the object that is currently executing the code**

---

## 🔥 In your slideshow project:

```js
image.onclick = createOverlay;
```

Inside:

```js
function createOverlay() {  
   let overlayImage = this.cloneNode(true);  
}
```

👉 `this` = **the image that was clicked**

---

## 🧠 Mental model:

|Situation|`this` refers to|
|---|---|
|Button clicked|That button|
|Image clicked|That image|
|Method in object|That object|

---

## ⚡ Example:

```js
btn.onclick = function() {  
   console.log(this);  
};
```

👉 Logs the **button element**

---

## ⚠️ Why this is powerful

Without `this`, you’d have to:
- track which image was clicked manually
- write extra logic
    

With `this`:
> the browser hands you the exact element that triggered the event

---

# 🧠 Final takeaway

- `confirm()` → yes/no → boolean
- `prompt()` → user input → string/null
- `window.open()` → creates new browser window
- `resizeBy()` → changes size relative to current
- `this` → “who triggered this action?”
