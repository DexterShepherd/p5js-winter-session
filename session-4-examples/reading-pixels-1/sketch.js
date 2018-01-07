let img, scaleFactor, walkers, numWalkers

function preload() {
  img = loadImage('../mountain.jpg')
}

function setup() {
  createCanvas(500, 500)
  pixelDensity(1)
  scaleFactor = 5
  img.resize(width / scaleFactor, height / scaleFactor)

  noStroke()

  numWalkers = 1000
  walkers = []

  for(let i = 0; i < numWalkers; i += 1) {

    let x = random(width)
    let y = random(height)
    walkers[i] = { 
      x: x, 
      y: y,
      color: img.get(
        map(x, 0, width, 0, img.width),
        map(y, 0, height, 0, img.height),
      ),
      iterations: 0,
      outOfBounds: function () {
        return this.x < 0 || this.x > width || this.y < 0 || this.y > height 
      }
    }
  }
}

function draw() {
  updateWalkers()
  drawWalkers()
}


function updateWalkers() {
  let noiseScale = 0.01
  let noiseStrength = 0.4
  for(let i = 0; i < numWalkers; i += 1) {
    if (walkers[i].outOfBounds()) {
      walkers[i].x = random(width)
      walkers[i].y = random(height)
      walkers[i].color = img.get(
        map(walkers[i].x, 0, width, 0, img.width),
        map(walkers[i].y, 0, height, 0, img.height),
      )
      walkers[i].iterations += 1
    }
    let angle = noise(walkers[i].x * noiseScale, walkers[i].y * noiseScale, walkers[i].iterations * 0.1) * PI
    walkers[i].x += sin(angle) * noiseStrength
    walkers[i].y += cos(angle) * noiseStrength
  }
}

function drawWalkers() {
  for(let i = 0; i < numWalkers; i += 1) {
    let color = walkers[i].color
    color[3] = 10
    fill(color)
    rect(walkers[i].x, walkers[i].y, 1, 1)
  }
}
