Provides a generic list of metadata values such as search keywords, viewport properties, and the file’s character encoding

`<meta attributes />`


 >The most common [[Character Encoding]] is UTF-8, which supports almost all of the characters you will need

| Attribute                                         | Description                                                                                         |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| charset=“_encoding_”                              | Specifies the character encoding used in the HTML document. (UTF-8 most popular)                    |
| content=“_text_”                                  | Provides the value associated with the http-equiv or name attributes                                |
| http-equiv=“content-type\|default-style\|refresh” | Provides an HTTP header for the document’s content, default style, or refresh interval (in seconds) |
| **name**=“_text_”                                 | Sets the name associated with the metadata Ex. keywords, `description`, `author`, `viewport`        |

> You could add the following collection of keywords to aid web search engines (Google/Bing).

 ```html 
 <meta name="keywords" content="Thai, restaurant, Charlotte, food"/ 
 ```

>Tip: The <meta> tag that defines the character encoding should **always** be the first meta element in the document head.

---

Related:
- [[Creating The Document Head]]
- [[Early versions of meta data]].
- [[Linking an HTML Document to a Style Sheet]]
