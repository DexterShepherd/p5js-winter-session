# IDAR-205W/605W-01 Intro to Javascript with p5.js

Course Number: IDAR-205W-01 ( undergrad ) / IDAR-605W-01 ( grad )  
Prerequisites: Complete ICOM-201 Introduction to Programming I ( or equivilent experience )  
Term: Winter Session 2018  
1/8/18 - 1/19/18  
Machine Lab _( Main building - B214a )_
Contact: dextershepherd@calarts.edu  


Week 1  
M W F _3:00PM - 4:50PM_  
Week 2  
T F _3:00PM - 4:50PM_  

# Schedule

## Session 1 - 1/8/18 - Installation / Drawing in the Browser
- [__Lecture Notes__](session-1-sketch/notes.md)

- [Dev Environment Setup](environment-setup.md)
- [ Basics of Javascript and p5.js ](javascript-and-p5-basics.md)
- [ p5 Docs ](https://p5js.org/reference/)
- Basic mark making
  - Shape - [code](session-1-examples/shape/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-1-examples/shape)
  - Color - [code](session-1-examples/color/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-1-examples/color)
- Animation
  - Time - [code](session-1-examples/time/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-1-examples/time)
  - framecount - [code](session-1-examples/framecount/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-1-examples/framecount)
- Iteration
  - rotate() - [code](session-1-examples/rotate/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-1-examples/rotate)
  - translate() - [code](session-1-examples/translate/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-1-examples/translate) 
  - push() and pop() - [code](session-1-examples/push-and-pop/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-1-examples/push-and-pop) 
- Oscillation / sin() and cos() 
  - 1 - [code](session-1-examples/sin-and-cos-1/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-1-examples/sin-and-cos-1)
  - 2 [code](session-1-examples/sin-and-cos-2/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-1-examples/sin-and-cos-2)

#### Sketch from lecture
[code](session-1-sketch/sketch.js) [demo](http://dexterjshepherd.com/p5js-winter-session/session-1-sketch)

__Homework__  
Write your first sketch in p5! Use as many of the concepts we discussed in class as you like to make something visually interesting in p5.

## Session 2 - 1/10/18 - Drawing with Systems
- Walkers and Agents
  - random walk - [code](session-2-examples/random-walker/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-2-examples/random-walker)
  - perlin walk - [code](session-2-examples/perlin-walker/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-2-examples/perlin-walker)
  - Noisey walker shapes - [code](session-2-examples/walker-shapes/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-2-examples/walker-shapes)
- Cellular Automata
  - Game of Life - [code](session-2-examples/basic-game-of-life/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-2-examples/basic-game-of-life)
    - Distortions 
      - 1 - [code](session-2-examples/game-of-life-distortions-1/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-2-examples/game-of-life-distortions-1)
      - 2 - [code](session-2-examples/game-of-life-distortions-2/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-2-examples/game-of-life-distortions-2)
- State Management - [code](session-2-examples/game-of-life-state-management/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-2-examples/game-of-life-state-management)
- More interesting rendering ideas - [code](session-2-examples/game-of-life-rendering/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-2-examples/game-of-life-rendering)

#### Sketch from lecture
[code](session-2-sketch/sketch.js) [demo](http://dexterjshepherd.com/p5js-winter-session/session-2-sketch)

__Homework__  
Implement some drawing system discussed in class, or another of your choice. If you want a challenge, try to push past just rendering the state of your system directly, the world doesn't need any more raw game of life simulations.

## Session 3 - 1/12/18 - Sound and Pixels
- Sound
  - FFT - [code](session-4-examples/sound-load/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-4-examples/sound-load)
  - Oscillator - [code](session-4-examples/sound-loop/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-4-examples/sound-loop)

#### Sketch from lecture
[code](session-4-sketch/sketch.js) [demo](http://dexterjshepherd.com/p5js-winter-session/session-4-sketch)



__not covered in lecture__
- loading files with preload - [code]() - [demo]() __TODO__
- image color schemes with get() - [code]() - [demo]() __TODO__
- pixel array
  - writing pixels - [code](session-4-examples/writing-pixels/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-4-examples/writing-pixels) 
  - reading pixels
    - 1 - [code](session-4-examples/reading-pixels-1/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-4-examples/reading-pixels-1) 
    - 2 - [code](session-4-examples/reading-pixels-2/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-4-examples/reading-pixels-2) 
- video - [code](session-4-examples/video/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-4-examples/video) __Google Chrome will block webcam access on this sketch as the demo is not using https, please view in another browser__

__Homework__  
Make a sketch using either the pixels array, or the get() and set() methods to interact with image, video, or canvas pixels

## Session 4 - 1/16/18 - interaction
- Mouse
  - position - [code](session-3-examples/mouse-position/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-3-examples/mouse-position) 
  - pressed - [code](session-3-examples/mouse-pressed/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-3-examples/mouse-pressed) 
- keyboard - [code](session-3-examples/keyboard/sketch.js) - [demo](http://dexterjshepherd.com/p5js-winter-session/session-3-examples/keyboard) 

__Homework__  
Create a new interactive sketch, or add mouse/keyboard interaction to one of your previous sketches.

## Session 5 - 1/19/18
### Option A - Particles
  - Vectors and Forces
  - Attractors, Repellers
  - System starting conditions
### Option B - Publishing p5 sketches
  - Saving images
  - Video / Gif rendering
  - Github Pages 
