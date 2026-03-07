When using operators you **need to be aware** of operator precedence, which **determines the order in which operations in an expression are evaluated**. 

This table, shows the order of precedence listed in **descending order of precedence**. 

Operators in the **same grouping** in the table have the same order of precedence. 

Operators listed in the **same row** of the table have their precedence determined by associativity 


| OPERATORS      | DESCRIPTION                             | ASSOCIATIVITY |
| -------------- | --------------------------------------- | ------------- |
| .              | Objects—highest precedence              | Left to right |
| []             | Array elements—highest precedence       | Left to right |
| ()             | Functions/evaluation—highest precedence | Left to right |
| new            | New object—highest precedence           | Right to left |
| ++             | Increment                               | Right to left |
| --             | Decrement                               | Right to left |
| -              | Unary negation                          | Right to left |
| +              | Unary positive                          | Right to left |
| !              | Not                                     | Right to left |
| typeof         | Data type                               | Right to left |
| void           | Void                                    | Right to left |
| delete         | Delete object                           | Right to left |
| **             | Exponentiation                          | Left to right |
| * / %          | Multiplication/division/modulus         | Left to right |
| + -            | Addition/concatenation and subtraction  | Left to right |
| < <= > >=      | Comparison                              | Left to right |
| instanceof     | Object type                             | Left to right |
| in             | Object property                         | Left to right |
| == != === !==  | Equality                                | Left to right |
| &&             | Logical And                             | Left to right |
| \|             | Logical Or                              | Left to right |
| ?:             | Conditional                             | Right to left |
| =              | Assignment                              | Right to left |
| += -= *= /= %= | Compound assignment                     | Right to left |
|,|Comma—lowest precedence|Left to right|

---

> This noes not include bitwise operators. #beyondScopeofBook 

operators in a higher grouping have precedence over operators in a lower grouping. 

For example, the multiplication operator (*) has a higher precedence than the addition operator (+).

Therefore, the expression `5 + 2 * 8 `evaluates as follows: the numbers `2 and 8 are multiplied first for a total of 16`, **then the number 5 is added**, resulting in a total of `21`.

If the addition operator had a higher precedence than the multiplication operator, then the statement would evaluate to `56`, because` 5 would be added to 2 for a total of 7`, which would then be multiplied by `8`.

---
However, **multiplication and division have an equal order of precedence** and, therefore, their precedence is determined by [[associativity]], which for them is left-to-right. 

Thus the expression `30 / 5 * 2` results in a value of `12` because the **division operator is applied** first followed by the multiplication operator. 

---
*If the multiplication operator had higher precedence than the division operator, then the statement` 30 / 5 * 2` would result in a value of `3` because the multiplication operation (`5 * 2`) would execute first.* 

By contrast, the [[Assignment Operator]] and [[Compound assignment operators]], such as the compound multiplication assignment operator  `(*=),` have an associativity of `right to left` as in the following example:
```js
let x = 3;
let y = 2;
x = y *= ++x;
```
Moving right to left, the variable **x is incremented** by one **_before_** it is assigned to the y variable using the compound multiplication assignment operator (*=). 

Then, the value of variable y is assigned to the variable x, resulting a in final value of 8 for both variables.

> Parenthesis have among the highest precedence!
> (5+2) * 8 is the same as 7*8

---

Back: [[Chapter 2 - Working with Functions, Data Types, and Operators]]