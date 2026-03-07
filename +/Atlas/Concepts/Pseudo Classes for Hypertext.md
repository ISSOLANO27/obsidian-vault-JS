Another type of pseudo-class is a dynamic pseudo-class in which the **class can change state based on the actions of the user**. 

Dynamic pseudo-classes are used with hypertext links such as the visited class, which indicates whether the target of the link has already been visited by the user. #dynamicPseudoClasses #hyperText 

#### Dynamic Pseudo-Classes

| Pseudo-Class | Description                                                              |
| ------------ | ------------------------------------------------------------------------ |
| :[[link]]    | The link has not yet been visited by the user.                           |
| :[[visited]] | The link has been visited by the user.                                   |
| :[[active]]  | The element is in the process of being activated or clicked by the user. |
| :[[hover]]   | The mouse pointer is hovering over the element.                          |
| :[[focus]]   | The element is receiving the focus of the keyboard or mouse pointer.     |

---
In some cases, 

#### 2 or more pseudo-classes can apply to the same element

For example, a hypertext link can be both **visited** previously and **hovered** over. 

>In such situations, the *standard cascading rules* apply with the pseudo-class listed **last applied** to the element. 


#### Order of pseudo-class (if 2 or more are used)
As a result, you should enter the hypertext pseudo-classes in the following order— #writingEffectiveCode **link, visited, hover, and active.** 

1. The `link` pseudo-class comes first because it represents a hypertext link that has not been visited yet. 
2. The `visited` pseudo-class comes next, for links that have been previously visited. 
3. The `hover` pseudo-class follows, for the situation in which a user has moved the mouse pointer over a hypertext link prior to clicking the link. 
4. The `active` pseudo-class is last, representing the exact instant in which a link is activated.

> TIP: **PSUEDO-CLASSES IS NOT JUST LINKS**
> The` hover, active, and focus` pseudo-classes also ==can be applied to non-hypertext elements== to create dynamic page elements that change their appearance in response to user actions.


---

#### Disabled rely on `TAB`

Most browsers allow users to press the `Tab Key` to navigate through the list of hypertext links on the page and to activate those links by entering the `Enter Key`. 

A link that is reached through the keyboard has the `focus` of the page and most browsers will indicate this focus by displaying an **outline around the linked text**.

---
 back: [[Pseudo-Classes and Pseudo-Elements]]