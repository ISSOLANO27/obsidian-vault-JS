JavaScript interpreters are very forgiving of lapses in syntax and structure [forgiving of lapses?] .

You can create a variable **without** using the `let, var, or const` keywords.

If you forget to end a statement with the semicolon, your program will most likely still run without fail. 

### Do not rely on JS forgiveness
Though this may sound like an advantage for beginning programmers, many developers disapprove of the feature because it **can lead to a casualness** in coding that makes such errors more likely to occur with future programs. [in what ways can this happen?]

Most languages, like C++ and Java, require *strict adherence* to syntax and will reject programs that depart from syntax rules in even the smallest way. 

To enforce that level of scrutiny in JavaScript, add the following text string to the beginning of the code:
```js
use strict;
```
Adding this statement puts the JavaScript interpreter into strict mode so that all departures from proper syntax are flagged as errors. 

In particular, **all variables must be explicitly declared**, 

so you can’t accidentally create a global variable by omitting the let, var, or const keywords. 

### JavaScript Speed Unleashed
In addition to creating tighter code, running a program in **strict mode increases the program’s speed** and efficiency because the JavaScript interpreter will not waste time and memory resolving poorly written code.

[In the file this let acresComplete = true; did not have a let so it did not recognize the name i assume because we added strict mode. what is the issue with not including let?]

##### [[Common Mistakes -  Interpreting Error Messages]]



---
back: [[Chapter 4 - Debugging and Error Handling]]
related:
- [[CH4 Quick Check]]