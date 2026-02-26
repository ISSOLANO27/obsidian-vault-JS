Comparison operators are often used with conditional operators or **ternary operators** that **return one of two possible value**s given the **Boolean** value of comparison. 

The general syntax of a comparison operator is
```js
condition ? trueValue : falseValue;
```

where `condition` is an expression or value that is either **true** or **false**, `trueValue` is the returned value if the expression is **true**, while `falseValue` is the returned value if the expression is **false**. 

---
The **conditional expression is often enclosed within parentheses** to make the statement easier to read. #writingEffectiveCode 

For example, an online store might set a discount rate for prime members of 5%. The following statement sets the value of the discount variable based on whether the value of member variable is equal to “prime”:
```js
let discount = (member === "prime") ? 0.05 : 0.0;
```

If member equals “prime” then the value of the discount variable is set to 0.05 (5%); 
*otherwise*..
the discount variable is set to 0.0 (no discount). 

---
The `condition` can be **ANY** expression that equals `true` or `false`; 

It **can even a Boolean variable** as the following code demonstrates in which the discount variable equals` 0.05` because the `primeMember` variable equals `true`:
```js
let primeMember = true;
let discount = primeMember ? 0.05 : 0.0; // variable is not enclosed in ()
```

#### Undefined/Null/NANN is still false 
A conditional operator only returns `trueValue` if the _condition_ is `true`. If _condition_ is `false` or `undefined` or `null` or `NaN` (not a number), it will be treated as `false` by the **conditional operator**. #
A conditional operator only returns `trueValue` if the _condition_ is `true`. If _condition_ is `false` or `undefined` or `null` or `NaN` (not a number), it will be treated as `false` by the **conditional operator**. #undefined/Null/NANNisFALSE


> Note: 
> You can [[Nest 1 Conditional Operator Within Another to Test 2 Conditions]]. 

---
Back: [[Using Operators to Build Expression]]

related: 
 - [[Conditionals with Expressions in Place of Values]]




