let img, scaleFactor, walkers, numWalkers

function preload() {
  img = loadImage('mountain.jpg')
}
function setup() {
  createCanvas(500, 500)
  pixelDensity(1)
  scaleFactor = 2
  img.resize(width / scaleFactor, height / scaleFactor)
  img.loadPixels()

  noStroke()

  numWalkers = 5000
  walkers = []

  for(let i = 0; i < numWalkers; i += 1) {

    let x = random(width)
    let y = random(height)
    walkers[i] = { 
      x: x, 
      y: y,
      pixel: null,
      iterations: 0,
      outOfBounds: function () {
        return this.x < 0 || this.x > width || this.y < 0 || this.y > height 
      }
    }
  }
  background(0)
}

function draw() {
  img.loadPixels()
  background(0, 7)
  updateWalkers()
  drawWalkers()
}


function updateWalkers() {
  for(let i = 0; i < numWalkers; i += 1) {
    if (walkers[i].outOfBounds()) {
      walkers[i].x = random(width)
      walkers[i].y = random(height)
    }
    let pixel = fastPixel(walkers[i].x, walkers[i].y)
    walkers[i].pixel = pixel
    let noiseScale = map(hue(pixel), 0, 360, 0.001, 0.01)
    let noiseStrength = 0.4
    let angle = noise(walkers[i].x * noiseScale, walkers[i].y * noiseScale) * TWO_PI
    walkers[i].x += sin(angle) * noiseStrength
    walkers[i].y += cos(angle) * noiseStrength
  }
}

function fastPixel(_x, _y) {
  let x = map(_x, 0, width, 0, img.width)
  let y = map(_y, 0, height, 0, img.height)
  let i = floor((x + y * img.width) * 4)
  return [img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]]
}

function drawWalkers() {
  for(let i = 0; i < numWalkers; i += 1) {
    let color = walkers[i].color
    fill(255)
    rect(walkers[i].x, walkers[i].y, 1, 1)
  }
}
