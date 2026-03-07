The default browser style for `unordered` and `ordered` lists is to display each list item alongside a symbol known as a **list marker**. 

By default, **unordered lists are displayed with a solid disc** 
while 
**ordered lists are displayed with numerals**. 

To change the type of list marker or to prevent any display of a list marker, apply the following list-style-type property:

`list-style-type: type;`

#### Values of the List-Style-Type Property

|list-style-type|Marker(s)|
|---|---|
|disc|●|
|circle|○|
|square|◼|
|decimal|1, 2, 3, 4, …|
|decimal-leading-zero|01, 02, 03, 04, …|
|lower-roman|i, ii, iii, iv, …|
|upper-roman|I, II, III, IV, …|
|lower-alpha|a, b, c, d, …|
|upper-alpha|A, B, C, D, …|
|lower-greek|α , β , γ , δ , …|
|upper-greek|,  ,  ,  , …|
|none|no marker displayed|

EXAMPLE:
 Items from an ordered list with an uppercase Roman numeral:
```css
ol {list-style-type: upper-roman;}
```

---
Back: [[Formatting List]]