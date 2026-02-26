A unary operator requires just a single operand either before or after the operator.

---

| OPERATOR | DESCRIPTION                 | EXPRESSION | RETURNS |
| -------- | --------------------------- | ---------- | ------- |
| ++       | Increases a value by 1      | 12++       | 13      |
| −−       | Decreases a value by 1      | 12−−       | 11      |
| −        | Changes the sign of a value | −12        | −12     |

Unary operators provide a more simplified expression for increasing or decreasing a value by 1. 

The statement `count = count + 1` has the same result as the expression `count++`. 

#### Using unary before a variable

Where things can be confusing is that the unary operator could also be placed before the variable as in the expression:
```js
++count
```

 The distinction is important because placement indicates the order in which the operator is applied to the variable.
 
  The following statement uses a [[prefix operator]] so that the value of x is first increased by 1, and then that value is assigned to the variable y, giving both variables a final value of 6:
  ```js
  let x = 5;
  let y = ++x // x is 6 and y is 6
  ```
#### Using unary after a variable
But if the code is written using a [[postfix operator]], a different result occurs:
```js
let x = 5;
let y = x++ // x and y is 6
```
>Note:
>The same effect occurs if you use the [[decrement operator]] (--) to decrease the value of the variable by 1.

---
Back: [[Using Operators to Build Expression]]