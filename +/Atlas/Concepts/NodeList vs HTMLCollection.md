# ⚔️ NodeList vs HTMLCollection (THIS is the confusion point)

## 🧩 1. querySelectorAll → NodeList

document.querySelectorAll("p")

### Features:

- Static (does NOT update automatically)
    
- Uses **CSS selectors**
    
- Can use `.forEach()`
    

---

## 🧩 2. getElementsByClassName → HTMLCollection

document.getElementsByClassName("review")

### Features:

- Live (updates automatically when DOM changes)
    
- Limited selection (class/tag only)
    
- No `.forEach()` (usually)
    

---

# 🔥 Side-by-side

|Feature|NodeList (`querySelectorAll`)|HTMLCollection|
|---|---|---|
|Selection style|CSS selectors|Class / tag only|
|Live updates|❌ Static|✅ Live|
|Includes|Elements (in this case)|Elements only|
|Array-like|✅ Yes|✅ Yes|
|forEach()|✅ Yes|❌ Usually no|

---

# 🧠 What does “static vs live” mean?

## ❌ Static (NodeList)

let list = document.querySelectorAll("p");

If you add a new `<p>` later:  
👉 `list` does NOT update

---

## ✅ Live (HTMLCollection)

let list = document.getElementsByTagName("p");

Add a new `<p>`:  
👉 `list` updates automatically

---

# 🤔 Does NodeList belong to the Node class?

> ❌ No — it’s NOT a Node

👉 It’s a **collection object that holds nodes**

---

### Mental model:

|Concept|Meaning|
|---|---|
|Node|Single item (element, text, etc.)|
|NodeList|Container of nodes|

---

# 🧩 Is this similar to getElementsByClassName?

### ✅ YES — same idea (returns multiple elements)

BUT:

|Method|Power|
|---|---|
|getElementsByClassName|Basic|
|querySelectorAll|🔥 Advanced (CSS-level selection)|

---

# 🎯 Why querySelectorAll is preferred

You can do things like:

document.querySelectorAll("div > p.review:first-child")

👉 That would be IMPOSSIBLE with older methods

---

# 🧩 What about querySelector()?

document.querySelector("p.review")

### ✅ Returns:

> The **FIRST matching element only**

---

### So yes — your assumption is correct:

> It retrieves a node (specifically an element node)

---

# ⚔️ querySelector vs querySelectorAll

|Method|Returns|
|---|---|
|`querySelector()`|First matching node|
|`querySelectorAll()`|NodeList (all matches)|

---

# 🧠 Final mental model (lock this in)

- `querySelectorAll()` → “Give me ALL matches (NodeList)”
    
- `querySelector()` → “Give me the FIRST match”
    
- NodeList → array-like container of nodes
    
- HTMLCollection → live container of elements
    

---

# ⚡ One-liner takeaway

> `querySelectorAll()` uses CSS selectors to return a static NodeList (array-like collection) of matching nodes, while `querySelector()` returns only the first matching node.