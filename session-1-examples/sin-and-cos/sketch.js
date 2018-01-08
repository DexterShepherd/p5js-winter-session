let numRects, radius

function setup() {
  createCanvas(500, 500)
  rectMode(CENTER)
  ellipseMode(CENTER)
  noStroke()
  numRects = 10
  background(217, 0, 0)
  radius = 100
}

function draw() {
  background(217, 0, 0, 10)
  for(let i = 0; i < numRects; i += 1) {
    for(let j = 0; j < 8; j += 1) {
      let circleX = sin(map(i, 0, numRects, 0, TWO_PI) + frameCount * 0.01) * sin(map(j, 0, 8, 0, TWO_PI) + frameCount * 0.01) * radius
      let circleY = cos(map(i, 0, numRects, 0, TWO_PI) + frameCount * 0.01) * sin(map(j, 0, 8, 0, TWO_PI) + frameCount * 0.01) * radius
      ellipse(250 + circleX, 120 + circleY, 10, 10)
    }

    for(let j = 0; j < 8; j += 1) {
      let circleX = sin(map(i, 0, numRects, 0, TWO_PI) + frameCount * 0.01) * sin(map(j, 0, 8, 0, TWO_PI) + frameCount * 0.01) * radius
      let circleY = cos(map(i, 0, numRects, 0, TWO_PI) + frameCount * 0.01) * cos(map(j, 0, 8, 0, TWO_PI) + frameCount * 0.01) * radius

      ellipse(250 + circleX, 370 + circleY, 10, 10)
    }
  }
}
