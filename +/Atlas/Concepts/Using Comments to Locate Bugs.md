Another method of locating bugs in a JavaScript program is identifying lines that may be causing problems and transforming them into comments by adding `//` to the start of each line or enclosing a block of statements within the `/*` and `*/` characters. 

This process, known as **commenting out** code, allows you to isolate a particular statement or set of statements that may be causing an error. 

If there are no errors after you have commented out a section, you will know that the error in your code lies within that section. Proceeding with this technique, you can take a long and complicated program and break it down into smaller sections that merit more focused attention.

In the following code, several lines have been commented out that adjust the net pay value for state taxes, Social Security, and Medicare:




---
Back: [[Tracing Error to Their Source]]
related: 
- [[Programming Concepts - Dependencies]]
- [[Chapter 4 - QuickCheck2]]
