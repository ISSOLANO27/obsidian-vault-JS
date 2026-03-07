Because web safe fonts limit your choices to a select number of fonts that have universal support, **another approach is to supply a web font** in which the definition font is supplied to the browser in an **external** file. 

Table: describes the different web font file formats and their current levels of browser support. 

The format **most universally accepted** in almost all current browsers and on almost all devices is the `Web Open Font Format (WOFF)`.

#### Web Font Formats

|Format|Description|Browser|
|---|---|---|
|Embedded OpenType (EOT)|A compact form of OpenType fonts designed for use as embedded fonts in style sheets|Internet Explorer (IE)|
|TrueType (TTF)|Font standard used on the Mac OS and Microsoft Windows operating systems|IE, Firefox, Chrome, Safari, Opera|
|OpenType (OTF)|Font format built on the TrueType format developed by Microsoft|IE, Firefox, Chrome, Safari, Opera|
|Scalable Vector Graphics (SVG)|Font format based on an XML vocabulary designed to describe resizable graphics and vector images|Safari|
|Web Open Font Format (WOFF)|The W3C recommendation font format based on OpenType and TrueType with compression and additional metadata|IE, Firefox, Chrome, Safari, Opera|


Web font files can be downloaded from several sites on the Internet. In many cases, you must pay for their use; in some cases, the fonts are free but are licensed only for non-commercial use. **You should always check the EULA (End User License Agreement) before downloading and using a web font to make sure you are in compliance with the license**. 

Finally, many web fonts are available through **Web Font Service Bureaus** that supply web fonts on their servers, which page designers can link to for a fee.

The great **advantage** of a web font is that it gives the author more control over the fonts used in the document; 

the **disadvantage** is that it becomes another file for the browser to download, adding to the **time required to render the page**. 
	
This can be a huge issue with mobile devices in which you want to limit the number and size of files downloaded by the browser.

---
Back: [[Working with Fonts]]

