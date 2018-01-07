// animation with variables

function setup() {
  createCanvas(500, 500)
  noStroke()
  rectMode(CENTER)
  background(4, 117, 111)
}

function draw() {
  background(4, 117, 111, 10)
  rect(50 + frameCount % 350,
       50 + frameCount % 350,
       10 + frameCount % 50,
       10 + frameCount % 50,
       (frameCount * 0.1) % 20)


  rect(450 - frameCount % 350,
       50 + frameCount % 350,
       10 + frameCount % 50,
       10 + frameCount % 50,
       (frameCount * 0.1) % 20)
}
