In the links you created, the browser assumed that the linked files were in the same folder as the current page. However, large websites containing hundreds of documents often place documents in separate folders to make them easier to manage.

a preview of how Sajja might organize his files as the Curbside Thai website increases in size and complexity. In this structure, all folders start from a [[root folder]] named _thai_ that contains the site’s home page, which Sajja has stored in the index.html file. Sajja has moved all of his images and CSS style sheet files into their own folders. He has divided the rest of the #webPages among three subfolders: 

1. the **general** folder for pages containing general information about the restaurant, 
2. the **mobile** folder for pages with content specifically about the mobile food service, and 
3. the **catering** folder for pages describing Curbside Thai’s catering opportunities.

see: HTML_CSS_FILES\html01\tutorial\html\ct_about.html

> TO create links between files in separate folders, you MUST provide a path to the linked file. 


 HTML supports 2 kinds of paths: 
 - [[Absolute Path]]
 - [[Relative Path]]

related:
- [[Setting the Base Path]]
- [[Linking to a Location Within the Document]]
---

thai
├── index.html
├── docs
│   ├── general
│   │   ├── ct_about.html
│   │   ├── ct_contact.html
│   │   └── ct_reviews.html
│   ├── mobile
│   │   ├── ct_locations.html
│   │   └── ct_menu1.html
│   └── catering
│       ├── ct_catering.html
│       └── ct_menu2.html
├── img
└── css


