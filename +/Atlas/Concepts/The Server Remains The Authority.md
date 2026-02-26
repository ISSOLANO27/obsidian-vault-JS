The **server did not change its _core_ role**. What changed was **how much it had to do _by itself_**.

#### Early web servers also did a lot of things they were frankly bad at:

- Constructing HTML for every request
- Formatting data into presentation-ready pages
- Handling navigation state (page-to-page logic)
- Re-rendering entire pages for tiny changes
    
This was necessary because:

- Browsers were weak
- JavaScript was unreliable or nonexistent
- The DOM was immature
- Networks were slower

#### Core responsibilities remained

- Managing databases and persistent storage
- Handling authentication and security
- Coordinating business logic that requires centralized control
- Serving APIs and data to clients

---


related:
- [[Roles of the Server]]
- [[The Client Responsibility Shift]]
