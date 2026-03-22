a program that is executed on a server but is accessed through a web page loaded in a client browser.

## ⏱️ 1. Timer APIs (you already know these)

```js
setTimeout(fn, delay)  
setInterval(fn, delay)
```
### What they do:

- Wait for time → send callback to queue
    

### Example:

```js
setTimeout(() => console.log("done"), 1000);
```

---

## 🖱️ 2. DOM Event APIs (VERY important)

```js
element.addEventListener("click", handler)
```

### What they do:

- Sit and listen…
    
- When user clicks → send `handler` to queue
    

### Example:

```js
button.addEventListener("click", () => {  
  console.log("clicked");  
});
```

👉 Nothing happens until the event fires  
👉 THEN it goes to the queue

---

## 🌐 3. Network APIs

```js
fetch(url)  
XMLHttpRequest
```
### What they do:

- Send request → wait for response
    
- When data returns → queue callback
    

### Example:

```js
fetch("/data")  
  .then(res => res.json())  
  .then(data => console.log(data));
```

👉 The `.then()` callbacks go to a **different queue (microtask)**  
We’ll keep it simple for now.

---

## 🎬 4. Animation APIs

```js
requestAnimationFrame(callback)
```

### What they do:

- Run callback before next screen repaint (~60fps)
    

### Example:

```js
requestAnimationFrame(() => {  
  console.log("frame");  
});
```

---

## ⌨️ 5. Input / UI Events

These are all Web APIs:

- `keydown`
    
- `keyup`
    
- `mousemove`
    
- `scroll`
    
- `resize`
    

### Example:

```js
window.addEventListener("scroll", () => {  
  console.log("scrolling");  
});
```
---

## 📦 6. Storage APIs

- `localStorage`
    
- `sessionStorage`
    

These are synchronous (no queue), but still **Web APIs**, not JS itself.

---

## 🎤 7. Media APIs (cool but less common early on)

- Camera (`getUserMedia`)
    
- Audio / video events