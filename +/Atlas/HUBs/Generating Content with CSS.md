Another type of pseudo-element #psedoElement is used to generate content for the web page.

New content can be added either before or after an element using, **before** and **after**.

`element::before {content: text;}`
`element::after {content: text;}`

`text` - is the content to be inserted into the rendered web page.
`content` - property supports several types of text content

Example: [using it with the hover pseudo-class to insert "<" and ">" characters around every hypertext link in a nav list]
```css
nav a:hover::before {content: "<";}
nav a:hover::after {content: ">";}
```

### Values of the Content Property

| Value               | Description                                                                           |
| ------------------- | ------------------------------------------------------------------------------------- |
|                     |                                                                                       |
| none                | Sets the content to an empty text string                                              |
| counter             | Displays a counter value                                                              |
| [[attr(attribute)]] | Displays the value of the selector’s _attribute_                                      |
| text                | Displays the specified _text_                                                         |
| open-quote          | Displays an opening quotation mark                                                    |
| close-quote         | Displays a closing quotation mark                                                     |
| no-open-quote       | Removes an opening quotation mark, if previously specified                            |
| no-close-quote      | Removes a closing quotation mark, if previously specified                             |
| url( _url_ )        | Displays the content of the media (image, video, etc.) from the file located at _url_ |

---


>TIP: [[You cannot use CSS to insert HTML markup tags, character references, or entity references. Those can only be done within the HTML file.]]

These style rules only inserts the content **in response** to the hover event.

---
back: [[Tutorial 2 CSS Styles and Colors]]

related:
- [[If you want to insert a special symbol]]
- [[Inserting media files as content]]
- 

- [[Displaying Attribute Values]]

