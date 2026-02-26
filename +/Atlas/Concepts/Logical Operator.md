Logical operators are used **when combining expressions that will result in Boolean value of true or false** 
or 
for **negating a Boolean value**, turning true to false or false to true. 

### 3 Logical Operators Supported by JavaScript.

| OPERATOR | DEFINITION | EXAMPLE                | DESCRIPTION                                       |
| -------- | ---------- | ---------------------- | ------------------------------------------------- |
| &&       | and        | (x === 5) && (y === 8) | Tests whether x is equal to 5 and y is equal to 8 |
| \|       | or         | (x === 5) \| (y === 8) | Test whether x is equal to 5 or y is equal to 8   |
| !        | not        | ! (x < 5)              | Test whether x is not less than 5                 |
|          |            |                        |                                                   |

---
#### Combining 2 conditions (&&)
Testing two condition:
1. member is prime
2. plan is gold
```js
let discount = (member === "prime" && plan === "gold") ? 0.10 : 0.0;
```

#### Testing for 1 of 2 condition (||)
```js
let discount = (member === "prime" || sale === "yes") ? 0.05 : 0.0;
```

---
> **NOTE**: 
> Using parentheses, you can create more complicated statements by grouping multiple conditions, as in the following statement that sets the discount rate at 0.10 if member equals “prime” and plan equals “gold” or sale equals “blowout”: 
> `let discount = ((member === "prime" && plan === "gold") || sale === "blowout") ? 0.05 : 0.0;`

A common error when using multiple conditions is to omit an opening or closing parenthesis. 

You **must** have an **equal number of opening and closing parentheses** to avoid an error, so always count the number of opening and closing parentheses to verify that they match.

---
Logical operators are often used within conditional and looping statements such as the if, for, and while statements. You will learn about conditional and looping statements in Ch3 #learnLater 

---
back: [[Using Operators to Build Expression]]