#### Figure 2–15 Attribute Selectors

| Selector                  | Selects                                                                                                   | Example            | Selects                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------- |
| _elem_#`id`               | Element _elem_ with the ID value _id_                                                                     | h1#intro           | The h1 heading with the id _intro_                                                                 |
| `#id`                     | Any element with the ID value _id_                                                                        | `#intro`           | Any element with the id _intro_                                                                    |
| _elem.class_              | All _elem_ elements with the class attribute value _class_                                                | p.main             | All paragraphs belonging to the _main_ class                                                       |
| _.class_                  | All elements with the class value _class_                                                                 | .main              | All elements belonging to the _main_ class                                                         |
| _elem_ [_att_]            | All _elem_ elements containing the _att_ attribute                                                        | a[href]            | All hypertext elements containing the href attribute                                               |
| _elem_ [_att_=“_text_”]   | All _elem_ elements whose _att_ attribute equals _text_                                                   | a[href=“top.html”] | All hypertext elements whose href attribute equals _top.html_                                      |
| _elem_ [_att~_=“_text_”]  | All _elem_ elements whose _att_ attribute contains the word _text_                                        | a[rel~=“glossary”] | All hypertext elements whose rel attribute contains the word _glossary_                            |
| _elem_ [_att_\|=“_text_”] | All _elem_ elements whose _att_ attribute value is a hyphen-separated list of words beginning with _text_ | p[id\|=“first”]    | All paragraphs whose id attribute starts with the word _first_ in a hyphen-separated list of words |
| _elem_ [_att^_=“_text_”]  | All _elem_ elements whose _att_ attribute begins with _text_                                              | a[rel^=“prev”]     | All hypertext elements whose rel attribute begins with _prev_                                      |
| _elem_ [_att_$=“_text_”]  | All _elem_ elements whose _att_ attribute ends with _text_                                                | a[href$=“org”]     | All hypertext elements whose href attribute ends with _org_                                        |
| _elem_ [_att*_=“_text_”]  | All _elem_ elements whose _att_ attribute contains the value _text_                                       | a[href*=“faq”]     | All hypertext elements whose href attribute contains the text string faq                           |
#### Reference Using Attribute Selectors

- To select an element based on its ID, use the `elem#id` or `#id` selector, where _elem_ is the name of the element and _id_ is the value of the id attribute.
    
- To select an element based on its class value, use the _.class_ or the _elem_._class_ selectors, where _class_ is the value of the class attribute.
    
- To select an element that contains an _att_ attribute, use _elem_ [_att_].
    
- To select an element based on whether its attribute value equals a specified value, _val_, use _elem_ [_att_=“_val_”].