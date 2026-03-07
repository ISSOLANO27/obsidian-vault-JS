# The Idea in Plain Terms

Normally, when you manipulate the DOM you **hardcode the element** you want.

Example:

```js
document.getElementById("calendarCell5")
```

Here the element ID is **manually written in the code**.

But in your project, the ID comes from **data stored in an array**.

Example:

```js
document.getElementById(gameDates[i])
```

Now the program isn’t hardcoding the element.  
It is **using data to decide which element to manipulate**.

That’s why it’s called **data-driven**.

The **data determines the behavior**.

---

# What Is Happening in Your Calendar Program

Your table cells probably look like this:
```js
<td id="2024-8-4">4</td>  
<td id="2024-8-5">5</td>  
<td id="2024-8-6">6</td>
```
Each cell’s **id represents a date**.

Then the JavaScript contains:

```js
let gameDates = ["2024-8-4", "2024-8-10", "2024-8-14"];
```

Inside the loop:

```js
let tableCell = document.getElementById(gameDates[i]);
```

If `i = 0`, then:

```js
document.getElementById("2024-8-4")
```

So the program **uses the data to find the correct cell**.

---

# Why This Is Powerful

Without this technique, you would have to write code like this:

```js
document.getElementById("2024-8-4").innerHTML += ...  
document.getElementById("2024-8-10").innerHTML += ...  
document.getElementById("2024-8-14").innerHTML += ...
```

That’s repetitive and fragile.

Instead, the program does this automatically:

```js
for (let i = 0; i < gameDates.length; i++) {  
   document.getElementById(gameDates[i])  
}
```
One loop handles **all games**.

---

# The Mental Model

Think of it like a **map between data and the page**.

ARRAY DATA  
--------------------------------  
```js
gameDates[0] → "2024-8-4"  
gameDates[1] → "2024-8-10"  
gameDates[2] → "2024-8-14"
```

HTML ELEMENTS  
--------------------------------  
```js
<td id="2024-8-4">  
<td id="2024-8-10">  
<td id="2024-8-14">
```