With so many different style rules to be applied to the same document, there has to be an orderly method by which conflicts between those different rules are resolved. 

You’ve already learned that **the style that is defined last has precedence**, but that is not the whole story. 

Another important principle is that [the more specific style rule has precedence over the more general style rule]. 
Thus, **a rule applied to a paragraph takes precedence over a rule applied to the entire page**, and **a rule applied to a section of text within that paragraph takes precedence over the rule for the paragraph**. 

In the following style rules, the color of the text in all paragraphs is set to red, taking precedence over the color black applied to the rest of the text in the page:
```css
p {color: red;}
body {color: black;}
```

>Note that specificity is only an issue **when two or more styles conflict**, as in the example above. When the style rules involve different properties (such as color and size), there is no conflict and both rules are applied. 
>
>**If two rules have equal specificity and thus equal importance, then the one that is defined last has precedence.**

---
back: [[Exploring Style Rules]]