## Goals
- Explore the possibilities of web based creative coding with p5js
- Bridge the gap between process and output

## Sessions
### 1. Drawing in the browser
_procedural mark making, iteration, oscillation, animation._

#### Goals
- Get everyones dev environments set up
- Understand basics of javascript
  - How does it differ from ChucK, Processing, Arduino
    - Dynamic typing
    - Interpreted
  - How does javascript run in a browser ( what is index.html )
- How to make basic marks
  - Basic Shapes
  - color
  - Drawing over time ( background alpha )
- Animation 
  - moving objects with custom variables
  - moving objecs with frameCount
  - modulo
- Interation
  - translate, rotate, scale
  - push and pop
- Oscillation
  - sin and cos
  - phase calculation with map

#### Homework
use the techniques discussed in class to create a perfectly looping animation

### 2. Interaction 
_mouse, keyboard, touch, walker based particle effects_

#### Goals
- Understand user interaction with p5 callbacks
  - mouse
  - keyIsPressed
  - touch
  - acceleration
  - rotation
- create basic paintbrush effect with walkers and noise
- _time allowing:_ look at more general javascript callback syntax

#### Homework
- use the techniques discussed in class to create an interactive sketch
  - custom paintbrush effect
  - mobile sketch utilizing touch / acc / rot
  - something else of your choosing

### 3. Cellular Automata
_Wolfram CA, Conways game of life, and the Gray-Scott model of Reaction/Difusion_
__The output should be more than just the system__

#### Goals
- Understand simple cellular automata construction
- Use cellular automata state as a data set to display in interesting ways
- Build a system allowing non-traditional neighborhoods, weights 
- Disconnect update and display
- _time allowing:_ cellular automata performance vs flexibility
  - can we find a happy medium

#### Homework
Implement one of the cellular automata discussed in class (or something completely new) but with some variation in neighbor, weights, update, or display

### 4. Pixel Processing 
_procedural pixel manipulation for photography and video_

#### Goals
- Understand media importing with preload()
- Access webcam for live video
- Understand the pixels array
- basic pixel manipulation in the pixels array (sorting, swapping, filtering)

#### Homework
Make something cool with pixels

### 5. Particles 
_physics based particle effects, force simulation, randomness and chaos_

#### Goals
- Understand vector based ( shiffman style ) particle forces
- Experiment with different starting conditions, attractors, repellers, drawing methods ( touch on all previous sessions )

#### Homework
Make something awesome with particles

### 6. Beyond the canvas - Beyond p5 
_interaction between HTML and javascript, utilizing external javascript libraries, displaying work online with github pages_

#### Goals
- Make something happen off the canvas through p5 ( control buttons/sliders, checkbox mirror, ascii art )
- _maybe:_ interact with some other js library ( physics, audio, filtering )
- rendering to frames, gif making
- Free static hosting with Github pages
- next steps ( threejs, regl )
