function setup() {
  createCanvas(500, 500)
  background(4, 117, 111)
  rectMode(CENTER)
  noLoop()
  stroke(255)
}

function draw() {
  background(4, 117, 111, 10)
  for(let i = 0; i < 10; i += 1) {
    push()
    drawShape(random(width), random(height))
    pop()
  }
}

function drawShape(x, y) {
  translate(x, y)
  for(let i = 0; i < 50; i += 1) {
    let choice = floor(random(3))
    rotate(radians(120 * choice))
    line(0, 0, 0, 8)
    translate(0, 10)
  }
}
