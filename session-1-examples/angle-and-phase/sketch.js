let numRects

function setup() {
  createCanvas(500, 500)
  rectMode(CENTER)
  ellipseMode(CENTER)
  noStroke()
  numRects = 20
  background(217, 0, 0)
}

function draw() {
  background(217, 0, 0, 10)
  for(let i = 0; i < numRects; i += 1) {
    fill(255)
    let angle = map(i, 0, numRects, 0, TWO_PI)
    let x = map(i, 0, numRects, 100, 400)

    let phase = sin(angle + frameCount * 0.05)
    ellipse(x, 100 + phase * 20, 10, 10)

    phase = sin(angle * 2 + frameCount * 0.05)
    ellipse(x, 200 + phase * 20, 10, 10)

    phase = sin(sin(frameCount * 0.01) * angle + frameCount * 0.05)
    ellipse(x, 300 + phase * 20, 10, 10)

    phase = sin(angle + frameCount * 0.05)
    ellipse(x, 400 + phase * 20, 10, 10)
    


    fill(4, 207, 255)
    phase = cos(angle + frameCount * 0.05)
    ellipse(x, 100 + phase * 20, 10, 10)

    phase = cos(angle * 2 + frameCount * 0.05)
    ellipse(x, 200 + phase * 20, 10, 10)

    phase = cos(sin(frameCount * 0.01) * angle + frameCount * 0.05)
    ellipse(x, 300 + phase * 20, 10, 10)

    phase = cos(angle + frameCount * 0.05)
    ellipse(x, 400 + phase * 20, 10, 10)
  }
}
