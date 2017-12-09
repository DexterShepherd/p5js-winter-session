function setup() {
  createCanvas(500, 500)
  rectMode(CENTER)
  noFill()
  stroke(255)
  background(4, 117, 111)
}

function draw() {
  background(4, 117, 111, 20)
  translate(width / 2, height / 2)
  rotate(frameCount * 0.01)
  for( let arms = 0; arms < 8; arms += 1 ) {
    let phase = map(arms, 0, 8, 0, TWO_PI)
    rotate(phase)
    push()
    for(let i = 0; i < 5; i += 1) {
      let size = map(i, 0, 5, 50, 10)
      rotate((frameCount * i) *  0.002)
      translate(size * 1.5, 0)
      rect(0, 0, size, size)
    }
    pop()
  }
}
