Colors can also be semi-opaque by setting the color’s **opacity**, which defines how solid the color appears. The color’s opacity can be specified using either of the following rgba and hsla properties:

`rgba(red, green, blue, opacity)`
`hsla(hue, saturation, lighness, opacity)`

where **_opacity_** is the opacity of the color ranging from `0 (completely transparent)` up to `1.0 (completely opaque)`.

For example, the following style property uses the HSL color model to define a medium orange color with an opacity of 0.7:

`hsla(38, 90%, 60%, 0.7)`

---
You can explore the RGBA and HSLA color values using the demo_rgba.html and demo_hsla.html files in the html02 ▶ demo folder. [HSLA Demo](http://127.0.0.1:5500/HTML_CSS_FILES/html02/demo/demo_hsla.html)


The final appearance of a semi-opaque color is influenced by the colors behind it on the page. Displayed against a white background, a medium orange color would appear in a lighter shade of orange because the orange will appear mixed with the background white.

On the other hand, the same orange color displayed on a black background would appear as a darker shade of orange. **The advantage of using semi-transparent colors is that it makes it easier to create a color theme** in which similarly tinted colors blend with other colors on the page.

---
Back: [[Working with Color in CSS]]