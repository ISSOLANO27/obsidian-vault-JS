1. What are the three JavaScript keywords for declaring a variable?
	- `var` → old school, function-scoped (can get messy)
	- `let` → modern, block-scoped (use this most of the time)
	- `const` → block-scoped, **cannot be reassigned** (best for fixed values)
	 👉 **Rule of thumb**:
		- Default to `const`
		- Use `let` if the value will change
		- Avoid `var` unless you _really_ know why
	
2. What is the difference between declaring and initializing a variable?
		**Declaring** = telling JavaScript the variable exists
		let x; 
		
	**Initializing** = giving it a value
	x = 10;
	
	You can do **both** at once:
	let x = 10;
	
	👉 Think of it like:
	- Declare = “I’m creating a box”
	- Initialize = “I’m putting something in the box”

3. What is returned by expression "100" + 10?
    👉 Answer:

	"10010"
	
	**Why?**
	
	- `"100"` is a **string**
	- `+` with a string = **concatenation**, not math
	
	So:
	
	"100" + 10 → "10010"
	
	👉 JavaScript sees a string and says:  
	“Cool, we’re doing text now.”

4. What is an event handler for?
	An **event handler** is used to **run code when something happens**.
	
	Examples of “something happens”:
	
	- User clicks a button
	- Page loads
	- Mouse moves
	- Key is pressed
	
		Example:
	```js
		button.onclick = function() {  
		   alert("Clicked!");  
		};
		
	```
		👉 Translation:
		
	 	“When this event happens → run this code.”

---

## ⚡ Quick Reality Check (this is where it clicks)

- Variables = storage
- Strings + numbers = ⚠️ can switch behavior
- Events = how users actually _interact_ with your app