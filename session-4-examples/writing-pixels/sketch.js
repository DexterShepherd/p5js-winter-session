let speed
function setup() {
  createCanvas(500, 500)
  pixelDensity(1)
  speed = 0
}

function draw() {
  loadPixels()
  for(let x = 0; x < width; x += 1) {
    for(let y = 0; y < height; y += 1) {
      let index = (x + y * width) * 4
      let angleX = map(x, 0, width, 0, TWO_PI)
      let angleY = map(y, 0, height, 0, TWO_PI)
      pixels[index] = (sin(angleX * angleY + speed) + cos(angleX + speed)) * 255
      pixels[index + 1] = (cos(angleY * angleX + speed) + cos(angleY + speed)) * 255 
      pixels[index + 2] = 100
      pixels[index + 3] = 255
    }
  }

  updatePixels()
  speed = frameCount * 0.1
}
