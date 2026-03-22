## “Insert Relative to Something”

parent.insertBefore(newNode, referenceNode)

---

### 🔥 Visual Example:

<ul>  
  <li>A</li>  
  <li>B</li>  
</ul>

let ul = document.querySelector("ul");  
let newItem = document.createElement("li");  
newItem.textContent = "X";  
  
ul.insertBefore(newItem, ul.children[0]);

---

### Result:

<ul>  
  <li>X</li>  
  <li>A</li>  
  <li>B</li>  
</ul>

---

### 🤯 Your question:

> “What if there is no node before?”

👉 Then you pass `null`

ul.insertBefore(newItem, null);

👉 Same as:

ul.appendChild(newItem);

---

### 🧠 Mental model:

> “Insert BEFORE this node — or at the end if nothing is specified”