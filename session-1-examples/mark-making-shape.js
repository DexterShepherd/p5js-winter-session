// shape
function setup() {
  createCanvas(500, 500)
  noStroke()
}

function draw() {
  background(0)
  rect(50, 50, 100, 100)
  rect(150, 50, 50, 50)
  rect(200, 100, 50, 50)
  rect(250, 75, 25, 25)
  rect(350, 50, 100, 100, 10)
  rect(50, 160, 400, 10)

  ellipse(100, 250, 100, 100)
  ellipse(175, 250, 50, 50)
  ellipse(210, 250, 25, 25)
  ellipse(250, 200, 10, 10)
  ellipse(250, 225, 10, 10)
  ellipse(250, 250, 10, 10)
  ellipse(250, 275, 10, 10)
  ellipse(250, 300, 10, 10)

  triangle(350, 300, 450, 300, 400, 200)

  beginShape()
  vertex(100, 350)
  vertex(200, 400)
  vertex(300, 350)
  vertex(400, 400)
  endShape()
}
