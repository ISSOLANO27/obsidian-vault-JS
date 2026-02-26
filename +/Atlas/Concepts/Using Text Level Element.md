Within each [[Grouping Elements]] there are `text-level elements`

Unlike *sectioning* or *grouping* that mark a self contained block of content...

These appear as [[Inline Elements]] with the surrounding content

> REMEMBER: All of these stylistic choices are not determined by the markup tags; they are default styles used by the browser. Some browsers and devices might render these elements differently.

---

Inline ≈ text-level (in modern usage)

“Text-level element” is more of a semantic content category. “Inline” is about layout behavior. In practice, most text-level elements are inline.

But they are not conceptually identical.


(All of these are inline. Some are semantic. Some are purely stylistic.)

All of the following are **text-level (phrasing) elements**.  
They are **inline by default**.  
They live inside grouping elements like `<p>`, `<li>`, `<blockquote>`, etc.

Here is the table rebuilt properly with clear descriptions of what each one actually does.

---

# Text-Level / Inline Elements

|Element|Semantic?|Clean Description of What It Does|
|---|---|---|
|`<a>`|Yes|Creates a hyperlink to another page, file, location, email, or URL using the `href` attribute.|
|`<abbr>`|Yes|Marks an abbreviation or acronym and can provide its full meaning using the `title` attribute.|
|`<b>`|No (stylistic)|Draws attention to text without adding importance or emphasis meaning.|
|`<br>`|No|Forces a line break within text without starting a new paragraph.|
|`<cite>`|Yes|Identifies the title of a creative work such as a book, article, movie, or publication.|
|`<code>`|Yes|Represents a fragment of computer code or programming syntax.|
|`<data>`|Yes|Associates a machine-readable value with visible text using the `value` attribute.|
|`<dfn>`|Yes|Identifies a term being defined within surrounding content.|
|`<em>`|Yes|Indicates emphasis or stress on text (changes meaning or tone).|
|`<i>`|Contextual semantic|Marks text in an alternate voice, technical term, foreign word, or mood.|
|`<kbd>`|Yes|Represents user input, typically from a keyboard or voice command.|
|`<mark>`|Yes|Highlights text for reference or relevance (like search results).|
|`<q>`|Yes|Represents a short inline quotation from another source.|
|`<s>`|Yes|Indicates content that is no longer accurate or relevant.|
|`<samp>`|Yes|Represents sample output from a computer program.|
|`<small>`|Yes|Marks side comments, disclaimers, or fine print.|
|`<span>`|No|Generic inline container used for styling or scripting without adding meaning.|
|`<strong>`|Yes|Indicates strong importance, seriousness, or urgency.|
|`<sub>`|Yes|Displays text as subscript (lowered below baseline).|
|`<sup>`|Yes|Displays text as superscript (raised above baseline).|
|`<time>`|Yes|Represents a specific date or time and can include a machine-readable `datetime` attribute.|
|`<u>`|Contextual semantic|Indicates text that is stylistically different, often for annotations or non-standard emphasis.|
|`<var>`|Yes|Represents a variable in a mathematical expression or programming context.|
|`<wbr>`|No|Suggests a possible word-break opportunity for long strings if needed.|

---

## Important Concept Lock-In

All of these:

- Are inline
    
- Do not create new document structure
    
- Exist inside text flow
    
- Add meaning (most of them)
    

Example:

```html
<p>   Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.   The variable <var>x</var> equals <code>42</code>.   Sale ends on <time datetime="2026-03-01">March 1, 2026</time>. </p>
```

`<p>` = grouping element  
Everything inside = text-level

---

## Professional Insight

Beginners use `<span>` and `<b>` everywhere.

Professionals choose:

- `<strong>` instead of `<b>`
    
- `<em>` instead of `<i>`
    
- `<time>` for dates
    
- `<abbr>` for acronyms
    
- `<dfn>` for definitions
    

Why?

Because HTML is not about appearance.  
It is about meaning.

CSS handles appearance.  
HTML handles structure and semantics.
