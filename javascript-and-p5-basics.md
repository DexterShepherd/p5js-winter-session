# Javascript and p5 basics

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
IE is still lagging behind so we will be using the older function/prototype based syntax. This 
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
