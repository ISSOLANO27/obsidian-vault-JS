### Meaning in context

- **CSS is for styling only**: It controls how elements look — colors, fonts, spacing, borders, etc.
    
- **CSS cannot insert HTML markup**: You cannot use CSS to add actual HTML tags (like `<div>`, `<span>`, `<p>`), or to insert character/entity references (like `&copy;` for © or `&nbsp;` for a non-breaking space).
    
- **Why**: Those are part of the document’s _structure and content_, which must be defined in the HTML itself. CSS doesn’t create or modify the underlying markup; it only changes presentation.
    

### What CSS _can_ insert

- CSS does allow you to insert **text content** using pseudo-elements like `::before` and `::after`.
    
    css
    
    ```
    p::before {
      content: "Note: ";
    }
    ```
    
    But the `content` property only accepts plain text or URLs to images — not HTML tags or entity references.