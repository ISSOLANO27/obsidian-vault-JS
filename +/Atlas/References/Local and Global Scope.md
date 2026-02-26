Block scope and function scope are collectively referred to as [[local scope]] because they define variables and functions accessible locally within the command block or function in which they are defined. The other general type of scope is [[global scope]], in which the variable or function is defined outside of any command block or function and, thus, is accessible throughout the entire program. Variables with local scope are called [[local variables]], while variables with global scope are called [[global variables]].

---
If a global variable and a local variable **share the same name**, the local variable takes **precedence**.

>NOTE: JavaScript is a forgiving language and will allow you to “bend the rules” on occasion. For example, you **can create a variable without using the let, const, or var keyword**s. 
>
>Variables created in this way are assigned global scope, even if they are created within a function or command block. The best practice, however, is to always declare a variable, so there is no ambiguity about its scope and role in the program. #writingEffectiveCode 


>NOTE: It is common programming practice to distinguish constants from variables, by writing the names of constants in uppercase characters #writingEffectiveCode  with words separated by underscores.

---



Back: [[Variable Scope]]