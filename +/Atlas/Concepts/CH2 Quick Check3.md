1. What is the difference between a binary operator and a unary operator?
	-  **Binary operator**: Requires **two operands** (e.g., `x + y`, `a > b`).
	    
	- **Unary operator**: Requires **one operand** (e.g., `++x`, `typeof x`). The surrounding content emphasizes that operators can act differently depending on how many values they work with.

---

2. How does JavaScript deal with code that performs arithmetic operations on string values?
    - If you try arithmetic on strings, JavaScript attempts **type coercion**:
    
    - `"5" * "2"` → coerced into numbers → result is `10`.
        
    - `"5" + "2"` → treated as string concatenation → result is `"52"`. This highlights JavaScript’s flexible but sometimes confusing handling of mixed types.

3. What is a comparison operator? What kind of value does it return?
    - These operators (`==`, `===`, `!=`, `!==`, `<`, `>`, etc.) compare values.
    
	- They always return a **Boolean value** (`true` or `false`). The page stresses that comparison operators are fundamental for conditionals and logical flow.
    

4. What is a falsy value? What are the six falsy values in JavaScript?
    - A **falsy value** is one that evaluates to `false` when used in a Boolean context.
    
	- The six falsy values in JavaScript are:
	    
	    - `false`
	    - `0`
	    - `""` (empty string)
	    - `null`
	    - `undefined`
	    - `NaN`
