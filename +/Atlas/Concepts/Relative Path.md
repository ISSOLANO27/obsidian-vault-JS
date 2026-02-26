When many folders and subfolders are involved, absolute path expression can quickly become long and cumbersome to work with. 

For this reason, most web designers prefer relative paths in which **the path is expressed relative to the location of the current document**. #relativePath

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
---
### Same Folder
If the current document and linked file are in the **same folder**, there is **no path** and you need **only include the filename**. 
```filename
```
### File is in Another Sub Folder
If the linked file is in a subfolder of the current document, the path includes all of the subfolder names starting from the location of the current page using the expression:
```/folder1/folder2/folder3/file
```

Here, 1,2, and 3 are subfolders of the current document.

>The relative path to the `ct_about.html` file **starting from** the `index.html` file:
```docs/genera/ct_about.html
```

### Relatives Can Move Up The Hierarchy Tree

Note that relative paths are often expressed in terms of familial relationships such as **parent**, **child**, **descendant**, **sibling**, and so forth in order to indicate the hierarchical nature of the folder structure. 

Relative paths can also go up the hierarchy to parent folders by including the symbol (..), which means “**go up one level**.” Thus, to go from `ct_about.html` in the general folder up two levels to the index.html file, enter the expression:
```html
../../index.html
```


### Go nuts, GO Sideways as well!

Finally, to go sideways in the folder structure by:
- going to a file in a different folder but on the same level 
- you go up to the parent folder and then back down to a different child folder. 

To go from the `ct_about.html` file in the `general` folder to the `ct_locations.html` file in the mobile folder, use the relative path expression:
```html
../mobile/ct_location.html
```
In this expression, the link **goes up to the parent folder** docs through the use of the `..` reference and **then back down through the mobile folder** to `ct_locations.html`.

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

[[You can reference the current folder using the single period (.) character]]

