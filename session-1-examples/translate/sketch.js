// animation with variables

function setup() {
  createCanvas(500, 500)
  noStroke()
  rectMode(CENTER)
  background(4, 117, 111)
}

function draw() {
  background(4, 117, 111, 50)

  translate(0, height / 2)
  for(let i = 0; i < 50; i += 1) {
    ellipse(0, 0, sin(i + frameCount * 0.01) * 20, sin(i + frameCount * 0.01) * 20)
    translate(20, sin(i + frameCount * 0.01) * 10) 
  }
}
