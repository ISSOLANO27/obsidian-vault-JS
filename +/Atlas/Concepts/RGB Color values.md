Because a palette of 147 color names is extremely limited for graphic design and color names can be constricting [(how do you name a color that is slightly redder than ivory with a tinge of blue?]), CSS also supports **color values**, the color is given by an exact numeric representation. CSS supports two types of color values: **RGB values and HSL values.**

### RGB color values 
are **based on classical color theory in which all colors are determined by adding three primary colors**—`red, green, and blue`—at different *levels of intensity*. 

For example, adding all three primary colors at maximum intensity produces the color white, while adding any two of the three primary colors at maximum intensity produces the trio of complementary colors—`yellow, magenta, and cyan`.

---
Varying the intensity of the three primary colors extends the palette to other colors.

Orange, for example, is created from a high intensity of red, a moderate intensity of green, and a total absence of blue. CSS represents these intensities mathematically as a set of numbers called an **RGB triplet**, which has the format:

`rgb(red, green, blue)`

where _red_, _green_, and _blue_ are the intensities of the red, green, and blue components of the color. 

Intensities range from `0 (absence of color)` to `255 (maximum intensity);` thus, the color **white** has the value `rgb(255, 255, 255)`, indicating that red, green, and blue are mixed equally at the highest intensity, and **orange** is represented by `rgb(255, 165, 0)`. 

> RGB triplets can describe possible colors, which is a [greater number of colors than the human eye can distinguish].

---

### Hexadecimals

RGB values are sometimes expressed as **hexadecimal numbers** where a hexadecimal number is a number expressed in the base `16` numbering system rather than in the commonly used base 10 system. 

In base 10 counting, numeric values are expressed using combinations of 10 characters (0 through 9). 

Hexadecimal numbering includes these ten numeric characters and six extra characters: `A (for 10), B (for 11), C (for 12), D (for 13), E (for 14), and F (for 15)`.

For values above 15, you use a combination of those 16 characters. 

For example, the number 16 has a hexadecimal representation of 10, and a value of 255 has a hexadecimal representation of FF. The style value for color represented as a hexadecimal number has the form: `#redgreenblue`

`rgb(255,255,0)`

or in hexadecimal:

`#FFFF00`

---

Most HTML editors and graphic programs provide color picking tools that allow the user to choose a color and then copy and paste the RGB or hexadecimal color value.

### Harder to Interpret but FASTER to load
Hexadecimal color values have the **advantage** of **creating smaller style sheets, which can be loaded faster**—an important consideration for mobile devices. However, for others viewing and studying your style sheet code, they are more difficult to interpret than RGB values.

Finally you can enter each component value as a percentage, with 100% representing the highest intensity. In this form, you would specify the color orange with the following values:

`rgb(100%, 65% 0%)`

>which is equivalent to the rgb(255, 165, 0) value described above.



---
Back: [[Working with Color in CSS]]

