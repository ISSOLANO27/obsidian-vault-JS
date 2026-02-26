A browser resolves relative paths based on the location of the current document. You define a different starting point for relative paths by adding the following base element to the **document head** #documentHead

```html
<base href="url" />
```

where `Url` is the location that you want the browser to use when resolving relative paths in the current document.

The base element is useful when a single document from the website is moved to a new folder. 

Rather than rewriting all of the relative paths to reflect the document’s new location, **the base element can point to the document’s old location allowing relative paths to work as before.**

#### Pro skills Decision Making: Managing Your Website

Websites can quickly grow to dozens or hundreds of pages. As the size of a site increases, it becomes more difficult to get a clear picture of the site’s structure and content. **Imagine deleting or moving a file in a website that contains dozens of folders and hundreds of files.** 

Could you easily project the effect of this change? 

Would all of your hypertext links still work after you moved or deleted the file?

To effectively manage a website, you should implement clear decision-making skills by following a few important rules.:

1. be consistent in how you structure the site. If you decide to collect all image files in one folder, you should continue that practice as you add more pages and images. Websites are more likely to break down if files and folders are scattered throughout the server without a consistent rule or pattern. Decide on a structure early and stick with it.

2. decide on and then create a folder structure that matches the structure of the website itself. If the pages can be easily categorized into different groups, those groupings should also be reflected in the groupings of the subfolders. 
3. The names you assign to your files and folders should also reflect their uses on the website. This makes it easier for you to predict how modifying a file or folder might impact other pages on the website.

4. document your work by **adding comments** to each new web page. Comments are useful not only for colleagues who may be working on the site but also for the author who must revisit those files months or even years after creating them. 

The comments should include:

- The page’s filename and location
    
- The page’s author and the date the page was initially created
    
- A list of any supporting files used in the document, such as image and audio files
    
	- A list of the files that link to the page and their locations
	    
	- A list of the files that the page links to and their locations
	
		The passage is teaching that every page has two link perspectives:
				
		- **Inbound:** Who links to me?    
		- **Outbound:** Who do I link to?
    

Tracking both helps maintain site structure, prevent broken links, and understand navigation flow.

By following these rules, you can reduce a lot of the headaches associated with maintaining a large and complex website.