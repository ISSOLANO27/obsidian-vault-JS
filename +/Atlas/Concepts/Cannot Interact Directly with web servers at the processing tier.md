
JS cannot bypass server-side security

it cannot:
- execute server code
- access server databases
- force the server to run commands

It can only send HTTP request

The server will always decide what to follow

>NOTE: Although programmers can employ a few tricks (such as forms and query strings) to allow JavaScript to interact indirectly with a web server, if you want true control over what’s happening on the server, you need to use a server-side scripting language

related:
- [[JavaScript Limitations]]