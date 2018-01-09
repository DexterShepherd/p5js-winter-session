# Session 1 coding notes

`setup` - __runs once__ - This is where all of your sketch setup should happen.
create your canvas in setup, set an initial background if you are doing the alpha
motion blur background trick, and assign initial values to any variables you define
outside of setup or draw.  

`draw` - __runs every frame__ - This code is called every frame. It's the place you
want to do most of your animation and drawing.

`createCanvas` - __creates your drawing canvas__. Call this function in setup with arguments
for width and height. `createCanvas(500, 500)`

`width` and `height` - __width and height of canvas__

`frameCount` - __tracks which frame your sketch is on__ - use this to drive `sin` or `cos`
functions
 
`color` - __r, g, b, 0 - 255__ by default, all the color calls accepts 3 values
from 0 to 255 representing the red, green, and blue components of a color. If
you only supply one value, p5 will interpret that as a grayscale value. If you supply
4 values for rgb, or 2 values for grayscale, the last value will be treated as the alpha,
or transparency, of the color.

`background` - __sets the background color of your canvas__ - call in draw to clear
the canvas every frame. Use a low alpha value for background to get a motion blur effect.

`fill` - __inside color of a shape__ - use `noFill()` for unfilled shapes

`stroke` - __outline color of a shape__ - use `noStroke()` for no outline shapes

`for` - __loops over a section of code__ - use the `for` loop to loop some section
of code many times.

```
for(let i = 0; i < 10; i += 1) {
  console.log(i)
}
for(let i = 0; i < 10; i += 1) {
//  ^^^^^^^^^ define a variable to track which iteration we are in.
for(let i = 0; i < 10; i += 1) {
//            ^^^^^^^ define a condition that will end the loop when false
for(let i = 0; i < 10; i += 1) {
//                    ^^^^^^^ define a change to the iteration tracking variable each loop

```

`sin` and `cos` - __returns a smooth wave oscillating between -1 and 1__ - use
these functions to move objects in smooth oscillating patterns. An equation like
`sin(frameCount * 0.01) * 10` will return a value smoothly bouncing between `-10` and `10`.
`cos` is teh same fundamental wave as sin, but 90 degrees out of phase. Essentially, starting from a different position in the wave.
You can move points in a circle by moving the x location with a `sin` wave and the y location with a `cos` wave.
