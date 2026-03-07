You have to insert the code number for that symbol using text string “\ _code_ ” where _code_ is the code number.

```css
nav a:hover::before {content: "\00ab";}
nav a:hover::after {content: "\00bb";}
```

For example, 
if instead of single angled brackets as indicated above, you wanted to show double angled brackets, « and », you would need to use the [[Unicode character code]] for these characters, 00ab and 00bb respectively. 

---
Back: [[Generating Content with CSS]]