
In this model the heavy lifting takes place in the server.


The server's job is to perform some sort of processing:
- Store Data (Databases, files. records)
- Run calculations (What is allowed, and what is not)
- Business Rules
	-  Even if the client *can* do these things, server must still assume the client can lie, break, or be modified. Power does not equal *Trust*
- Shared State (multiple users, consistency)
- Integration (talking to other servers/services)
- Security Roles
- Final Validation

Server got relieved from babysitting the UI

---

	


related:
- [[Roles of the Client]]
- [[How Client Server Works]]
- [[The Server Remains The Authority]]
- [[Web Servers]]
