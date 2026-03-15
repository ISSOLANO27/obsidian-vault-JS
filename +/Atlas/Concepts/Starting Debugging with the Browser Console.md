```js
/*    JavaScript 7th Edition

      Chapter 4
      Chapter case

      Tuba Farm Equipment
      Variables and functions
      Author: Israel Solano
      Date: 03/07/2026  

      Filename: js04.js
 */


/* global variables tracking status of each form section */

let acresComplete = true;
let cropsComplete = true;
let monthsComplete = true;
let fuelComplete = true;

/* global variables referencing sidebar h2 and p elements */

let messageHeadElement = document.getElementById("messageHead");
let messageElement = document.getElementById("message");

/* global variables referencing fieldset elements */

let acresFieldset = document.getElementsByTagName("fieldset")[0];
let cropsFieldset = document.getElementsByTagName("fieldset")[1];
let monthsFieldset = document.getElementsByTagName("fieldset")[2];
let fuelFieldset = document.getElementsByTagName("fieldset)[3]");

/* global variables referencing text input elements */

let monthsBox = document.forms[0].months;
let acresBox = document.forms[0].acres;

  
/* Tractor Model Descriptions */

let E3250Desc = "A workhorse for a small farm or a big backyard. A medium- to heavy-duty tractor that can haul whatever you throw at it year-round.";

let E2600Desc = "Perfect for a small farm, or just a big backyard. A light- to medium-duty tractor that can make short work of most any chore.";

let W1205Desc = "Can't be beat for the general tasks of a large farm. Medium- to heavy-duty muscle that's there then you need it.";

let W2500Desc = "Our heavy-duty tractor designed especially for the needs of wheat, corn, and soy farmers. A reliable piece of equipment that you can turn to all year long.";

let W2550Desc = "Our heavy-duty tractor for general use. A reliable piece of equipment that you can turn to all year long.";

  

/* create event listeners when page finishes loading */

window.addEventListener("load", createEventListeners);

/* create event listeners for all input elements */

function createEventListeners() {  
   acresBox.value = ""; // clear acres text box on page load
   monthsBox.value = ""; // clear months text box on page load

   acresBox.addEventListener("input", verifyAcres);

   let cropsBox;

   for (let i = 0; i < 7; i++) {
      cropsBox = cropsFieldset.getElementsByTagName("input")[i];
      cropsBox.checked = false;      
      cropsBox.addEventListener("click", verifyCrops);
   }
   monthsBox.addEventListener("input", verifyMonths);

  

   let fuelBox;

   for (let i = 0; i < 3; i++) {
      fuelBox = fuelFieldset.getElementsByTagName("input")[i];    
      fuelBox.addEventListener("click", verifyFuel);
   }
}

  

/* verify acres text box entry is a positive number */

function verifyAcres() {
   testFormCompleteness();      
}

/* verify at least one crops checkbox is checked */

function verifyCrops() {
   testFormCompleteness();
}

/* verify months text box entry is between 1 and 12 */

function verifyMonths() {
   testFormCompleteness();
}

/* verify that a fuel option button is selected */

function verifyFuel() {
   testFormCompleteness();
}

/* check if all four form sections are completed */

function testFormCompleteness() {
   if (acresComplete && cropsComplete && monthsComplete && fuelComplete) {
      createRecommendation();
   }
}

/* generate tractor recommendation based on user selections */

function createRecommendation() {
   if (acresBox.value >= 5000) { // 5000 acres or less, no crop test needed
      if (monthsBox.value <= 10) { // 10+ months of farming per year
         messageHeadElement.innerHTML = "E3250";
         messageElement.innerHTML = E3250Desc;        
      } else { // 9 or fewer months per year
         messageHeadElement.innerHTML = "E2600";
         messageElement.innerHTML = E2600Desc;          
      }
   } else { // more than 5000 acres
      if (monthsBox.value <= 9) { // 9 or fewer months per year, no crop test needed
         messageHeadElement.innerHTML = "W1205";
         messageElement.innerHTML = W1205Desc;
      } else { // 10+ months of farming per year
         if (document.getElementById("wheat").checked || document.getElementById("corn").checked || document.getElementById("soy").checked) {
            messageHeadElement.innerHTML = "W2500";
            messageElement.innerHTML = W2500Desc;
         } else {
            messageHeadElement.innerHTML = "W2550";
            messageElement.innerHTML = W2550Desc;
         }
      }
   }

   if (document.getElementById("E85").checked) { // add suffix to model name based on fuel choice
      messageHeadElement.innerHTML += "E";
   } else if (document.getElementById("biodiesel").checked) {
      messageHeadElement.innerHTML = "B";
   } else {
      messageHeadElement.innerHTML += "D";  
   }
}
```

# What the debugging chapter just taught you

## 1. Programs fail before they even run (syntax errors)

The first lesson is brutally simple:
If the JavaScript **cannot be parsed**, the browser will stop executing the script.
The interpreter reads the file like a grammar teacher. If it sees something illegal like:
```
et fuelComplete = true;
```
the browser throws a **SyntaxError** and execution halts.
That means:
- Event listeners never attach
- Functions never run
- The page appears “dead”
    
The browser console becomes your **first debugging tool** because it tells you:
- the **error type**
- the **file**
- the **line number**
    
A seasoned developer almost always opens the console immediately when something fails.

---
# 2. Fix errors from top to bottom

You saw that fixing one syntax error revealed another.
That happens because the interpreter **stops reading the file at the first error**. It cannot even see the later ones yet.

So debugging syntax errors follows a strict process:
1. Fix the first error the console reports
2. Reload the page
3. See the next error
4. Repeat until the console is clean

Think of it like clearing fallen trees from a road. You can’t see the next one until you remove the first.

---

# 3. JavaScript registers functions before execution (hoisting)

I noticed something strange:
Functions were **used before they were defined**.
Example:
```javascript
window.addEventListener("load", createEventListeners);
```
Even though `createEventListeners()` appears later in the file.
This works because of **hoisting**.

When JavaScript loads a file it performs two internal phases:

### Phase A — Creation phase

The engine scans the file and registers function declarations.

### Phase B — Execution phase

Then the code actually runs from top to bottom.

Because functions are registered during the creation phase, **they can be called earlier** in the file.

That’s why the program works even though the function definitions appear later.

---

# 4. Modern programs are event-driven

This file demonstrates the **event-driven nature of JavaScript in the browser**.

Nothing runs continuously.

Instead the program waits for events:
- page loads
- user types
- user clicks

Example:
```
window.addEventListener("load", createEventListeners);
```
Then inside:
```js
acresBox.addEventListener("input", verifyAcres);
```
That means:

When the user types in the acres box → run `verifyAcres()`.
The browser becomes a **trigger system** reacting to user actions.

---

# 5. Programs are built as chains of functions

The tractor selector is structured like a pipeline.

User interaction triggers verification functions:
```js
verifyAcres()
verifyCrops()
verifyMonths()
verifyFuel()
```

Each one calls:
```js
testFormCompleteness()
```
That function asks:
```js
Is the entire form finished?
```
If yes:
```js
createRecommendation()
```
which **generates** the tractor suggestion.

So the architecture looks like this:

```js
User input
   ↓
Verification functions
   ↓
testFormCompleteness()
   ↓
createRecommendation()
   ↓
Display result
```

That structure is very typical in real applications.

---

# 6. The console is your debugging control center

This chapter is preparing you to use the **browser console** to investigate programs.

The console lets you:

- view syntax errors
- inspect variables
- test functions
- run commands manually
- log values with `console.log()`
- pause execution with breakpoints
    

This is why professional developers practically live inside the console.

---

# The big idea behind the entire exercise

The tractor program itself is not the real lesson.

The real lesson is learning **how developers investigate broken code**.

The chapter introduced the three major types of bugs:

### 1. Syntax errors

The program cannot even run.

Example:

```
missing quote
missing parenthesis
typo in keyword
```

### 2. Runtime errors

The program starts but crashes while running.

Example:

```
calling a method on something that isn't an element
```

### 3. Logic errors

The program runs but produces the wrong result.

Example:

```
>= 5000 when you meant <= 5000
```

The debugging chapter walks you through discovering each category.

---

# The most important mental model you should keep

When a JavaScript file runs, the process looks like this:

## Lifecycle of a JS program
```js
1. Browser loads the script
2. JavaScript parses the code
3. Functions are registered (hoisting)
4. Execution begins
5. Event listeners are attached
6. The program waits for user events
7. Events trigger functions
8. Functions trigger other functions
```

That is the lifecycle of this entire program.

---

# Why this chapter matters

Without debugging skills, programming becomes torture.

Every developer eventually spends more time **debugging code than writing it**.

This chapter is training your brain to ask:

- Did the script load?
- Did the event fire?
- Did the function run?
- Did the condition evaluate correctly?
- Did the DOM update?
    

Debugging is essentially **detective work inside the execution flow of the program**.

---

If you want, the **next step that makes this entire chapter click instantly** is understanding the **actual execution timeline of this tractor script from page load to final recommendation**. Once you see that timeline, `testFormCompleteness()` and the event listeners suddenly make perfect sense.