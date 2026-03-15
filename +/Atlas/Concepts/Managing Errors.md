A **fourth type of error** is one that is often not under a programmer’s direct control: [[user error]]. A user error occurs when the user mistakenly runs the program in a way not intended by the developer, such as an entering a text string when a numeric value is called for or neglecting to enter all required data. Programmers employ [[bulletproofing]] to **anticipate and handle potential user error before it causes major problems in the code.** 

For example, **form data should be validated before it is acted upon by the program** and input controls should be designed to **restrict the user’s ability to enter data in the wrong format**.

*Anticipating* and *preventing* user error is one of the developer’s greatest challenges because, quite frankly, users are very resourceful. 
Therefore, programs need to be written in such a way that user error, when it does occur, is **least disruptive** to the program and the user experience. 

One oft-employed technique is [[exception handling]] in which the program handles errors rather than leaving that task to the JavaScript interpreter.



---
back: [[Chapter 4 - Debugging and Error Handling]]

related:
- [[Handling Exceptions with the `try catch` Statements]]
- [[Throwing an Exception]]
- [[The try catch finally Statements]]
- [[The Error Parameters in the catch Statement]]
- [[Applying Exception Handling to a Program]]