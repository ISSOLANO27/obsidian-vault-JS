 ### **Node navigation properties (low-level DOM properties)**
**Some node navigation properties RETURN array-like objects**  
(but the properties themselves are NOT arrays)
## 🧭 Node Relationship Table (Enhanced)

| Expression | Returns | Type | Array-like? | Includes Text/Comments? | Typical Use | Gotcha |
|-----------|--------|------|-------------|--------------------------|-------------|--------|
| `node.firstChild` | First child node | Navigation (single) | ❌ | ✅ Yes | Quick access to first node | Might return whitespace (#text) instead of element |
| `node.lastChild` | Last child node | Navigation (single) | ❌ | ✅ Yes | Access last node | Same issue — may be text node |
| `node.childNodes` | All child nodes | Collection | ✅ NodeList | ✅ Yes | Loop through all children | Includes text + comments (unexpected nodes) |
| `node.previousSibling` | Previous sibling node | Navigation (single) | ❌ | ✅ Yes | Move backward in tree | May land on text node |
| `node.nextSibling` | Next sibling node | Navigation (single) | ❌ | ✅ Yes | Move forward in tree | Same whitespace issue |
| `node.ownerDocument` | Root document node | Navigation (single) | ❌ | N/A | Access full document | Rarely used directly |
| `node.parentNode` | Parent node | Navigation (single) | ❌ | ✅ Yes | Move upward in tree | Can return non-element (like document) |

---

## 🧠 Quick Classification

### 🧭 Navigation Properties (Single Node)
These return **one node at a time**:
- `firstChild`
- `lastChild`
- `previousSibling`
- `nextSibling`
- `parentNode`
- `ownerDocument`

👉 Think: *“give me ONE relative”*

---

### 📦 Collection Property (Array-like)
These return **multiple nodes**:
- `childNodes`

👉 Think: *“give me ALL relatives”*

---

## ⚠️ Critical Behavior Difference

| Property Type | Filters Elements? |
|--------------|------------------|
| Node-based (this table) | ❌ No |
| Element-based (`children`, `firstElementChild`) | ✅ Yes |

---

## 🔥 Visual Example

```html
<div>
   <p>Hello</p>
</div>
# 🔍 Break it into two categories

## 1. 🧭 Node navigation properties (single node)

These return **ONE node**

node.firstChild  
node.parentNode  
node.nextSibling

👉 These are:

- NOT arrays
    
- NOT array-like
    
- Just **single node references**
    

---

## 2. 📦 Node collections (array-like objects)

These return **multiple nodes**

```js
node.childNodes  
node.children  
document.querySelectorAll("p")
```
👉 These are:

- **NodeList** or **HTMLCollection**
    
- Array-like (indexed, length)
    
- But NOT real arrays
    

---

# ⚔️ Side-by-side

|Type|Example|Returns|Array-like?|
|---|---|---|---|
|Navigation property|`firstChild`|Single node|❌|
|Navigation property|`parentNode`|Single node|❌|
|Collection property|`childNodes`|NodeList|✅|
|Collection property|`children`|HTMLCollection|✅|

# 🧠 Why this confusion happens

Because this looks similar:

node.firstChild        // single node  
node.childNodes[0]     // node from collection

👉 Both give you a node…  
👉 But they come from **different mechanisms**

---

# 🔥 Mental model (this will lock it in)

Think of it like:

- **Navigation properties** → “Give me ONE relative”
    
    - parent, child, sibling
        
- **Collections** → “Give me the whole group”
    
    - all children, all matches
        

---

# 📦 Bonus: Array-like vs Array

node.childNodes.length   // ✅  
node.childNodes[0]       // ✅  
node.childNodes.map()    // ❌ (not a real array)

If you want a real array:

Array.from(node.childNodes)

---

# ⚡ Clean takeaway (put this in your notes)

> **Node navigation properties return single nodes, while some DOM properties return collections (NodeList or HTMLCollection), which are array-like but not true arrays.**

---

# 🎯 One-liner to remember

> Navigation = one node  
> Collection = many nodes (array-like)