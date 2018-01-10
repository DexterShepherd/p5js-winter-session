let numWalkers, walkers, stepSize

function setup() {
  createCanvas(500, 500)
  background(0)
  stroke(255)

  stepSize = 2
  numWalkers = 1000
  walkers = []

  for(let i = 0; i < numWalkers; i += 1) {
    walkers[i] = {
      x: random(width),
      y: random(height) 
    }
  }
}

function draw() {
  update()

  background(0, 10)

  for(let i = 0; i < numWalkers; i += 1) {
    point(walkers[i].x, walkers[i].y)
  }
}

function update() {
  for(let i = 0; i < numWalkers; i += 1) {

    walkers[i].x += random(-stepSize, stepSize)
    walkers[i].y += random(-stepSize, stepSize)

    if((walkers[i].x > width) || 
       (walkers[i].x < 0) ||
       (walkers[i].y > height) ||
      (walkers[i].y < 0)) {
      walkers[i] = {
        x: random(width),
        y: random(height)
      }
    }
  }
} 
