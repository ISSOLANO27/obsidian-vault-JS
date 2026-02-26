

A **comparison operator**, or relational operator, is used to compare two operands and determine if one value is greater than another. 

---
A Boolean value of `true` or `false` is returned after two operands are compared. 

For example, the statement `5 < 3` would return a Boolean value of `false`, because 5 is not less than 3.

#### JavaScript comparison operators

| OPERATOR | EXAMPLE | DECRIPTION                                                                |
| -------- | ------- | ------------------------------------------------------------------------- |
| ==       | x == y  | Tests whether x is equal in value to y                                    |
| ===      | x === y | Tests whether x is **equal in value** to y and has the **same data type** |
| !=       | x != y  | Tests whether x is not equal to y or has a different data type            |
| !==      | x !== y | Tests whether x is not equal to y and/or doesn’t have the same data type  |
| >        | x > y   | Tests whether x is greater than y                                         |
| >=       | x >= y  | Tests whether x is greater than or equal to y                             |
| <        | x < y   | Tests whether x is less than y                                            |
| <=       | x <= y  | Tests whether x is less than or equal to y                                |

#### Note

The comparison operators (`==` and `===`) consist of two and three equal signs, respectively, and perform a different function than the one performed by the assignment operator that consists of a single equal sign (=). 

The **comparison operators compare values**, whereas the **assignment operator assigns values**. *Confusion between these two types of operators is a common mistake*.

You can use **number or string** values as operands with comparison operators:
[[When two numeric values are used as operands]], 
[[When two nonnumeric values are used as operands]] 
[[When one operand is a number and the other is a string]] 

---
back: [[Using Operators to Build Expression]]