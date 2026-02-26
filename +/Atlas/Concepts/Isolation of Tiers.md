- The browser is a sandbox. It only executes code delivered to it (HTML, CSS, JavaScript). 
	- The browser only ever receives **HTML, CSS, and JavaScript**. That’s the “package” the server sends down.

		- HTML → structure of the page.
		    
		- CSS → styling.
		    
		- JavaScript → interactivity and DOM manipulation.
    
- Server-side scripts are executed before the response is sent — they don’t “live” in the browser.
	- Before sending anything to the client, the server runs your **server-side scripts** (PHP, Python/Django, Ruby/Rails, ASP.NET/C#).

		- These scripts are **interpreted or executed on the server**.
		    
		- The output is translated into HTML (and optionally CSS/JS).
		    
		- That output is what gets sent to the browser.

related:
- [[Security Model]]
- [[Communication Channel]]
- [[Scripting Engine]]
