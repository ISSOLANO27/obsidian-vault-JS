Just because you can place the script element anywhere it does not mean that you should...

IF the script contains the write() method, it **should be placed where that content is to be written**. 

Use care when placing a script.

Remember that loading a page is creating the DOM that maps the entire page content. #DOM 

###### NOTE: 
Many developers will **place scripts at the end of the document** to ensure that the entirety of the page has been loaded into the DOM.

---
#### Think About It

If your script references a part of the page that has **not yet been loaded**, an error will result.

You cannot use the `document.getElementById()` method to reference a page object until after that page object has been loaded into the DOM; #DOM
back: 
- [[No Need to Repeat Yourself]]