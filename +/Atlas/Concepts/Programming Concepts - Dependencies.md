Any program longer than a handful of lines includes statements that depend on the successful execution of other statements or functions. 

These relationships, known as **dependencies**, add an extra layer of complexity to debugging. An error reported in one function can be the result of an error from a different part of the program. 

In addition, an error in one part of the code can stop dependent code from executing, preventing you from receiving error messages for the dependent code. After finding and fixing a bug, **it is important to test related functionality that worked correctly before the bug fix.** 

In some cases, fixing one bug exposes another, or itself creates another problem, so it is important not to assume that everything that worked before fixing a bug will continue to work after fixing it.

