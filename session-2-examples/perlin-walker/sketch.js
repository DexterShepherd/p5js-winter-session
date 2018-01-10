let numWalkers, walker, noiseStrength, noiseScale

function setup() {
  createCanvas(500, 500)
  background(0)

  stroke(255, 50)
  numWalkers = 1000
  walkers = []

  noiseScale = 0.01
  noiseStrength = 0.1

  for(let i = 0; i < numWalkers; i += 1) {
    walkers[i] = {
      x: random(width),
      y: random(height)
    }
  }
}

function draw() {
  background(0, 2)

  update()
  for(let i = 0; i < numWalkers; i += 1){
    point(walkers[i].x, walkers[i].y) }
}

function update() {
  for(let i = 0; i < numWalkers; i += 1) {
    let angle = noise(walkers[i].x * noiseScale, walkers[i].y * noiseScale) * TWO_PI
    walkers[i].x += sin(angle) * noiseStrength
    walkers[i].y += cos(angle) * noiseStrength

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
