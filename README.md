# Pythascript
A JavaScript library that lets you add Python to your website.



# How to use
To import a URL using Pythascript, use this function:
```
pythascript.loadUrl('yourfilehere.py', where to append, css);
```
> yourfilehere.py: link to Python file


> where to append: Where to add output


> CSS: Style the output. 

So it would look something like this:
```
pythascript.loadUrl('demos/demo.py', document.body, 'width: 800px; height: 500px;')
```


You can also run code without a file name with this:
```
pythascript.runCode('print("Hello World!")', document.body, 'width: 800px; height: 500px;')
```

# Demo
#### If you would like to access the demo, [click here.](https://unzor.github.io/Pythascript)

# Credit
Most of the credit goes to [W3schools](https://w3schools.com) for creating the compiler.

### Library made by Unzor
