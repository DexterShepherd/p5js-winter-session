// animation with variables

let rectSpeed, rectSize, rectCornerRadius, bouncingRectX, bouncingRectDirection
function setup() {
  createCanvas(500, 500)
  noStroke()
  rectSpeed = 0
  rectSize = 0
  rectCornerRadius = 0
  bouncingRectX = 0
  bouncingRectDirection = 1
}

function draw() {
  background(4, 117, 111)
  fill('#FF8C00')
  rect(50 + rectSpeed, 50, 50, 50)
  fill(217, 0, 0)
  rect(50 + (rectSpeed * 2 % 350), 100, 50, 50)
  fill(255, 45, 0)
  rect(50 + (rectSpeed * 3 % 350) , 150, 50, 50)

  rectMode(CENTER)
  fill('#FF8C00')
  rect(100, 300, rectSize % 100, rectSize % 100)
  let shrinkingRectSize = 100 - (rectSize % 100);
  fill(45, 9, 39)
  rect(250, 300, shrinkingRectSize, shrinkingRectSize)
  fill('#FF8C00')
  rect(400, 300, 100, 100, rectCornerRadius % 50)


  rectMode()
  fill(lerpColor(color(217, 0, 0), color(46, 9, 39), bouncingRectX / 300.0))
  rect(50 + bouncingRectX, 450, 50, 50)

  rectSpeed += 1
  rectSize += 1
  rectCornerRadius += 0.5

  bouncingRectX += bouncingRectDirection
  if(bouncingRectX == 350) {
    bouncingRectDirection = -1
  }
  if(bouncingRectX == 0) {
    bouncingRectDirection = 1   
  }
}
