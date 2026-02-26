- **Sandboxing:** Browsers are designed to isolate what runs on the client. Only **HTML, CSS, and JavaScript** (or WebAssembly) can execute inside the browser sandbox.
    
    - This prevents arbitrary server-side code (like PHP, Python, Ruby, C#) from running locally, which would be a huge security risk.
        
    - Imagine if a PHP script could run in your browser — it could access your filesystem or execute server-only logic. Browsers block this by design.
        
- **Server-side confidentiality:** Server-side code often contains sensitive logic (authentication, database queries, business rules). If it ran in the browser, users could see and manipulate it.
    
    - Example: A banking app’s balance-checking script must run on the server, hidden from the client. The browser only sees the result (your balance), not the code that retrieved it.