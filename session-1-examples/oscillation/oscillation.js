let numRects

function setup() {
  createCanvas(500, 500)
  rectMode(CENTER)
  ellipseMode(CENTER)
  noStroke()
  numRects = 10
  background(217, 0, 0)
}

function draw() {
  background(217, 0, 0, 10)
  for(let i = 0; i < numRects; i += 1) {
    let phase = sin(map(i, 0, numRects, 0, TWO_PI) + frameCount * 0.05)
    let x = map(i, 0, numRects, 100, 400)
    ellipse(x, 100, 1 + phase * 20, 1 + phase * 20)
    ellipse(x, 200 + phase * 20, 10, 10)


    for(let j = 0; j < 4; j += 1) {
      let circleX = sin(map(i, 0, numRects, 0, TWO_PI) + frameCount * 0.01) * sin(map(j, 0, 4, 0, TWO_PI) + frameCount * 0.01) * 75
      let circleY = cos(map(i, 0, numRects, 0, TWO_PI) + frameCount * 0.01) * sin(map(j, 0, 4, 0, TWO_PI) + frameCount * 0.01) * 75
      ellipse(350 + circleX, 350 + circleY, 10, 10)
    }

    for(let j = 0; j < 8; j += 1) {
      let circleX = sin(map(i, 0, numRects, 0, TWO_PI) + frameCount * 0.01) * sin(map(j, 0, 8, 0, TWO_PI) + frameCount * 0.01) * 75
      let circleY = cos(map(i, 0, numRects, 0, TWO_PI) + frameCount * 0.01) * cos(map(j, 0, 8, 0, TWO_PI) + frameCount * 0.01) * 75

      ellipse(150 + circleX, 350 + circleY, 10, 10)
    }
  }
}
