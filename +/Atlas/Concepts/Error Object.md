If `userName` is undefined, JavaScript creates an **Error object**. Then it passes that object into the `catch` block.

So internally something like this happens conceptually:

```js
error = {  
   name: "ReferenceError",  
   message: "userName is not defined",  
   stack: ...  
}
```

Now the catch block has access to that object.

That’s why the parameter exists.

You could inspect it like this:

```js
try {  
   window.alert("The user is " + userName);  
} catch (error) {  
   console.log(error);  
}
```

Console output might look like:

ReferenceError: userName is not defined

Or you can be more specific:

```js
catch (error) {  
   console.log(error.name);  
   console.log(error.message);  
}
```

Example output:

```js
ReferenceError  
userName is not defined
```

So the parameter is **just a variable holding the error object**.

And yes — you **can name it anything you want**.