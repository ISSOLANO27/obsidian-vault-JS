- **Request/Response model:**
    
    - The browser sends an **HTTP request** to the server.
    - The server executes the server-side script (PHP, Django, Rails, ASP.NET).
    - The server sends back a **response** — usually HTML, CSS, and JavaScript.
    - The browser renders that response.
- **Boundary enforcement:**
    - The only way server-side code influences the browser is **indirectly**, by generating output that the browser interprets.
    - The browser never executes the server-side language itself — [it only consumes the results].

related:
- [[Isolation of Tiers]]