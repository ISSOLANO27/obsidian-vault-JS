
[[Spaghetti code]] is a pejorative programming term that refers to convoluted or poorly written code. One hallmark of spaghetti code is the [frequent branching from one section of code to another], making it difficult to track the program line-by-line as it is executed. A change in one part of the program could lead to unpredictable changes in a completely different section of the code. [how is it that this can happen?]

Many developers **discourage the use of label statements unless absolutely necessary**. #badDesign #writingEffectiveCode  

They can confuse a programmer trying to **fix code in which a program loop can end before its stopping condition**, or **code in which statements are not processed in the order that they are written in a document**. [clarify how these can confuse a programmer?; use examples]

Almost all of the tasks in a program can also be performed by carefully setting up the conditions for program loops without forcing jumps to labeled sections.

Even with the best of intentions, spaghetti code can easily occur in environments in which the same code is maintained by several people or passed from one employee to another. A programmer might add a new feature that is needed right away without adequately documenting the changes made to the code or without considering the impact of those changes on other programs. To avoid or at least reduce the occurrence of spaghetti code, **always document your code**, and develop a structure that is easy for others to follow.