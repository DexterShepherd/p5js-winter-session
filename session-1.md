# Session 1: Drawing in the browser
_procedural mark making, iteration, oscillation, animation._
te

## What is p5js?
2001: Processing -> Casey Reas, Ben Fry  
_Minimal set up graphics and animation library for Java_

Java made a lot of sense in 2001, not so much anymore :(

2013 (maybe): p5js -> Lauren McCarthy  
_Minimal set up graphics and animation library for the web!_

What would processing be if it was written today?

## How does this stuff run?
#### index.html
This file tells the browser how the webpage should be layed out! It's safe to 
ignore this file for now, we will interact with it more later in the course.

#### sketch.js
This is the file we will write our p5js code in. The index.html files tells the
browser to read this file when the page is loaded.

#### libraries
This folder holds the p5js library code, and any other libraries we want to add
later on. We won't need to edit this code manually, but its important the right
files are in this folder and the file names are spelled correctly. If you ever
get stuck, you can always look at the `empty example` project in the _p5.js
complete_ download [here](https://p5js.org/download/)

#### Order of events 
Undetanding the ins and outs of web development is not neccessary to use p5.js
feel free to learn as much of this as interests you. However, some basic
knowledge of the main moving parts will be helpful in debugging some common
errors down the line.

Browser loads _index.html_ -> _index.html_ loads _p5.min.js_ from the
_libraries_ folder, and _sketch.js_ -> _sketch.js_ runs our animation code and
displays the result on the `canvas` element inside _index.html_


## How do I write this stuff?
There are many approaces to p5js development environments, but in this course we
will use a simple template project, an external text editor, and, when needed, 
a node.js server. We need to do a small amount of set up here, but it shouldn't 
be too painful. 

#### template project
- Make a folder to store your projects for this course. In the processing world
    we tend to name these folders _sketchbook_ so I follow that convention. I
    create my sketchbook folder on my Desktop.
- If you want to skip some code editing up front, feel free to download my
    template file from __TODO: add url of example project__ and place it inside
    you sketchbook, if you want to create your own I'll walk through how mine is set up.
  - Download and unzip _p5js complete_ from [here](https://p5js.org/download/)
    - once unzipped you should see folders names _addons_ and _empty example_,
      and two files named _p5.js_ and _p5.min.js_
  - create an empty directory for your template somewhere in your sketchbook
      folder.
  - Inside your template folder, create a folder called libraries
  - copy the _p5.min.js_ and _p5.js_ files from the p5 complete folder we
      downloaded into your _template/libraries_ folder
  - copy all the files from the _addons_ directory in the p5 complete folder
      into your _template/library_ folder
  - copy the _index.html_ file and the _sketch.js_ file from the
      _p5/empty_example_ folder into your template folder.

  - You should now have a template folder that looks something like this
  ```
  template ->
    libraries ->
      p5.js
      p5.min.js
      p5.dom.js
      p5.dom.min.js
      p5.sound.js
      p5.sound.min.js
    index.html
    sketch.js
  ```
  - now we need to edit the index.html file to work with our libraries folder.
      Read ahead to the __text editor__ section if you are unsure how to edit
      `html` files.
      - in the `<head>` element of _index.html_ change the `script` tags `src`
          attribute to point to the correct files in our template directory.
        - `<script src="../p5.min.js"></script>` should be `<script src="libraries/p5.min.js"></script>`
        - `<script src="../addons/p5.dom.min.js"></script>` should be `<script src="libraries/p5.dom.min.js"></script>`
        - `<script src="../addons/p5.sound.min.js"></script>` should be `<script src="libraries/p5.sound.min.js"></script>`
      - notice we are using the `.min.js` files here instead of the `.js` files.
          These files are essentially the same, but the .min versions are
          _minified_ to make them easier for the browser to load.
      - in the end your _index.html_ should look something like this
      ```
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>
          <style> body {padding: 0; margin: 0;} </style>
          <script src="libraries/p5.min.js"></script>
          <script src="libraries/p5.dom.min.js"></script>
          <script src="libraries/p5.sound.min.js"></script>
          <script src="sketch.js"></script>
        </head>
        <body>
        </body>
      </html>
      ```
  - in your sketch.js file, add this code to the `draw` function so we can check
      everything is working properly.  `background(255, 0, 0)`
    - your draw function should now look something like this
        ```
        function draw() {
          //put your drawing code here
          background(255, 0, 0)
        }
          ```
  - open the index.html file in the a modern browser ( Chrome, Firefox, Safari,
      Edge ) and you should see a red rectangle in top left corner of the
      window.

Congrats, everything is working. Now whenever we create a new p5 sketch, we just
need to copy our template folder and start editing sketch.js

#### Text Editors

Although the files we are editing are essentially just text files, a good
programming focused text editor will make p5js development a much more enjoyable
experience. If you are familiar with processing, arduino, and ChucK you might be
used to editors and languages being tightly coupled together. In javascript this
is not the case so we must choose an editor to suite our development needs.

For the most part, the specific editor you use does not really matter. Any
programming text editor is sufficient for what we are doing. [Atom](atom.io) or
[Sublime](https://www.sublimetext.com/) as good starting points.

#### Running code
##### From the index.html file

The simplest way to view our sketch in the browser is to right click the
_index.html_ files and select "open in _chrome/firefox/safari_". This will point
the browser directly to the _index.html_ and show us the resulting web page.

Running code this way is fine for now, but we will encounter some problems later 
on when trying to load images and videos into our sketches.

##### From a local server

As we work more with p5 we will likely need something a little more
sophisticated than just pointing the browser direcly to the file. For this, we
will use a _local web server_. There are about a million ways to do this so if you
have a preferred web server already feel free to use that. For the rest of use I
am recomending a NodeJS package called `http-server`. 

- To set up `http-server` we must first install 
 [_node.js_](https://nodejs.org/en/download/) - a server side javascript runtime.
(Just choose the LTS installer for your system, no need for anything fancy).
You can check if node has been successfully installed by opening _Terminal_ on 
mac, or _Command Prompt_ on windows, typing the `node` command, and pressing 
enter. If everything is setup correctly you should see a new line with the `>`
symbol. Try typing some javascript on like `10 + 10` and pressing enter.
Hopefully `20` shows up on the next line. If it did, your good to go, type `.exit` 
and press enter to leave the console, if you see any errors, or can't access
the node console at all, try redownloading and reinstalling node from the nodejs
website. If you are having lots of problems, email me. We will get it figured out.
- Once node is installed, we can also use the javascript 
package manager _NPM_ to install node js packages. Run the command 
`sudo npm install -g http-server` on a mac, or `npm install -g http-server` on
windows to install our local server package. On mac you may have to put in your 
password here. You won't see anything show up in the terminal, but your password
is being typed. 
- Once npm has finished installing our _http-server_ package, navigate to your
p5js template directory, run the command `http-server`, then point your browser
to the url `localhost:8080`. If all went well, you should see that same red 
rectangle we saw when opening the _index.html_ file directly.

___Pro-mode___

If your feeling good with this stuff, try installing a more feature rich server 
like _browser-sync_. Same basic setup, `npm install -g browser-sync` to install
the package, then `browser-sync start --server --files "*"` to run the server.
Now you have a similar server to the _http-server_ method, but everytime you save
your files, the browser will automatically refresh for you.

___A note on the console___

As you've noticed, we will be spending a small amount of time in the console 
during this course. Don't be intimidated, you really only need to know 3 commands.
- `ls` : List all the files in the current directory.
- `cd` : Change directory
- `http-server` or `browser-sync start --server --files "*"` : runs our dev server
- press the tab key to autocomplete a file or directory name
- press the up key to cycle through previous commands so you don't have to type the
same thing over and over again.

When you open the console you will probably be placed in your home directory. Type `ls`
to get your bearings. I see Desktop, Documents, Downloads, and a bunch of other folders
I would usually navigate to using the Finder app. Type `cd Desktop` and press 
enter to change directories to the Desktop directory. `ls` again shows me my 
_sketchbook_ folder we created, and some other files on my desktop. 
`cd sketchbook/templates` moves me into the templates folder inside the sketchbook folder.
from here, I can run `http-server` to start my local server. 

## Basics of Javascript

We could spend a semester learning Javascript the right way but there isn't time for 
that at the moment. Fortunately you don't have to know everything about the language 
itself to write interesting code.

### Variables
Variables in javascript are not typed in the same way as Java or ChucK. In js, we do not
need to declare `int`, `float`, or `string` when we declare a variable.
Variables are defined with the `var`, `let`, and `const` keywords. `let` and `var`
are largely interchangable, and `const` is probably beyond the scope of this course.
I will use `let` in my coding examples as that seems like the standard looking forward,
most of the p5 documentation uses `var` but I expect that will be updated at some point.


```
let x = 10
let y = 5.5
let name = "Dexter"
let myArray = [1, 2, 'some string', ['another', 'array', 5.2]] 
```

### Comments
Much like Java, single line comments can be added with `//`, and multiline comments
with `/*` and `*/`

```
// this is a single line comment

/*
this is a 
multiline comment
*/
```

### Classes
Most modern browsers implement a new class syntax known as `es6 classes`, unfortunately
IE is still lagging behind so we will be using the older function based syntax. This 
might be a little unfamiliar for the processing veterans but its not so bad once you get
the hang of it.

```
let Particle = function(l) {
  // anything here is run on initialization
  // this is the 'constructor'

  // store instance variables with 'this'
  // these variables are unique to 'this' instance of the class
  this.location = l
  this.velocity = P5.vector.random2D()

  // declare an update function and attach it to the class with the 'this' keyword
  this.update = function() {
    this.location.add(this.velocity)
  }

  // declare a display function and attach it to the class with the 'this' keyword
  this.display = function() {
    ellipse(this.location.x, this.location.y, 10, 10)
  }
}

// create an instance of Particle with the new keyword
let p = new Particle(createVector(100, 100))

// call the update and display functions of the Particle instance
p.update()
p.display()

```

## Basics of p5js
#### Setup

The setup function is called at the start of your sketch. Any code you add here will
run once on initialization. Use this function to create your canvas and set initial variable state.

#### Draw
This function is called once per frame. Any code you add here will run every frame 
( hopefully 60 times per second ). Use this function for all your animation.
