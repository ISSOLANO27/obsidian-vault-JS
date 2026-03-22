### ✅ What does `deep` mean?

|Value|Behavior|
|---|---|
|`false`|Copy ONLY the element (no children)|
|`true`|Copy element + ALL descendants|

---

### 🔥 Example:

<div id="card">  
  <h2>Title</h2>  
</div>

let original = document.getElementById("card");  
  
let shallowCopy = original.cloneNode(false);  
let deepCopy = original.cloneNode(true);

---

### Result:

shallowCopy → <div id="card"></div>  
  
deepCopy →   
<div id="card">  
  <h2>Title</h2>  
</div>

---

### 🤔 Why would you EVER use `false`?

- You want the **structure only**
    
- You will **rebuild children dynamically**
    
- Avoid copying unwanted data/events
    

👉 Common in dynamic apps (templates, UI generation)