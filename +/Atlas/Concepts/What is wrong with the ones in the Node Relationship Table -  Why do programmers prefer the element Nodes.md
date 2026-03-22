
Nothing is “wrong” — it’s just:

| Node Properties        | Element Properties |
| ---------------------- | ------------------ |
| Include ALL node types | Only elements      |
| More flexible          | More predictable   |
| More error-prone       | Cleaner            |

---

# 🧠 Real-world rule:

> Use **element properties 90% of the time**

Only use node-level when:

- You actually need text/comments
    
- You’re doing deep DOM manipulation

---



## 😤 That’s why devs get annoyed

You end up writing:

```js
node.firstChild.nextSibling.nextSibling
```

Just to reach the actual element

---

## Why programmers prefer Element Node properties

```js
node.firstElementChild
node.children
node.nextElementSibling
```

---

### ✅ These ONLY return elements

They IGNORE:

- text nodes
    
- comments
    
- whitespace
    

---

### 🔥 Example:

```html
<div>
   <p>Hello</p>
</div>
```

```js
div.firstChild           // ❌ #text
div.firstElementChild    // ✅ <p>
