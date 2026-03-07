a classification of an element based on its **current status, position, or use** in the document. 

The style rule for a pseudo-class uses the selector:

`element: pseudo-class`

Pseudo-classes are organized into **structural and dynamic classes**. #structuralPseudoClasses #dynamicPseudoClasses

---

A **structural pseudo-class** classifies an element based on its **location** within the structure of the HTML document. 

List that structural pseudo-classes supported in CSS:

#### Structural Pseudo-Classes

| Pseudo-Class             | Matches                                                              |
| ------------------------ | -------------------------------------------------------------------- |
| :root                    | The top element in the document hierarchy (the html element)         |
| :empty                   | An element with no content                                           |
| :only-child              | An element with no siblings                                          |
| :first-child             | The first child of the parent element                                |
| :last-child              | The last child of the parent element                                 |
| :[[first-of-type]]       | The first descendant of the parent that matches the specified type   |
| :last-of-type            | The last descendant of the parent that matches the specified type    |
| :[[nth-of-type( _n_ )]]  | The _n_ th element of the parent of the specified type               |
| :nth-last-of-type( _n_ ) | The _n_ th from the last element of the parent of the specified type |
| :only-of-type            | An element that has no siblings of the same type                     |
| :lang( _code_ )          | The element that has the specified language indicated by _code_      |
| :not( _selector_ )       | An element not matching the specified _selector_                     |

---
back: [[Pseudo-Classes and Pseudo-Elements]]