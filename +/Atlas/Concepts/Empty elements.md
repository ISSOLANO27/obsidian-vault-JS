Not all tags enclose document content. 

They are elements that do not have any content and therefore they `do not`  need a closing tag. </> #emptyElements

- Elements that are nontextual (like images) 
- contains directives to the Browser

```
<element> or <element />
<br>
<hr>

```

It is a good idea to get accustomed to using /> at the end of empty element. #writingEffectiveCode 


This had reminded me of [[Inline Elements]], but it is not always the case:

- Some empty elements are **inline by default**.
    
    - Example: `<img>` is both empty _and_ inline. It has no closing tag, and it sits inside text flow.

- Others are **block-level empty elements**.
    
    - Example: hr is empty but renders as a block-level horizontal rule.
        
- So: **being empty doesn’t automatically mean inline**. They’re separate classifications:
    
    - _Empty_ = no content/closing tag.
        
    - _Inline vs. block_ = how the element behaves in layout flow.

back: [[Introducing Element Tags]]