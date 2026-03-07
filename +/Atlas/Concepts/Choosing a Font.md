Text characters are based on **fonts** that **define the style and appearance of each character** in the alphabet. 

The default font used by most browsers for displaying text is `Times New Roman`, but you can specify a different font for any page element using the following font-family property:

`font-family: focus;`

where _fonts_ is a comma-separated list, also known as a **font stack**, of specific or generic font names.

A **specific font** is a font that is identified by name, such as Times New Roman or Helvetica, and based on a font definition file that is stored on the user’s computer or accessible on the web. 

A **generic font** describes the general appearance of the characters in the text but does not specify any particular font definition file. Instead, the font definition file is selected by the browser to match the general characteristics of the generic font. CSS supports the following generic font groups:

- `serif`—a typeface in which a small ornamentation appears at the tail end of each character
    
- `sans-serif`—a typeface without any serif ornamentation
    
- `monospace`—a typeface in which each character has the same width; often used to display programming code
    
- `cursive`—a typeface that mimics handwriting with highly stylized elements and flourishes; best used in small doses for decorative page elements
    
- `fantasy`—a highly ornamental typeface used for page decoration; should never be used as body text
    

Because **you have no control over which font definition file the browser will choose for a generic font**, the common practice is to list specific fonts first, in **order of preference**, ending the font stack with a generic font. 

If the browser cannot find any of the specific fonts listed, it uses a generic font of its own choosing. For example, the style

`font-familt: 'Arial Black' , gadget, sans-serf`;

> if there is a space, you must enclose in single/double quotes.

---

A **general rule** for printing is to use sans-serif fonts for headlines and serif fonts for body text. 

For computer monitors, 
which have lower resolutions than printed material,

the general rule is to use `sans-serif` fonts for **headlines** and **body text**, leaving `serif fonts` for **special effects and large text**. #writingEffectiveCode 

---
back: [[Working with Fonts]]

related:
- [[Web Safe Fonts]]
