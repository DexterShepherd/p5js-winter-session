let sound, fft, numPoints
function preload() {
  sound = loadSound('../sounds/alberto.mp3') 
}

function setup() {
  createCanvas(500, 500)
  background(1, 162, 166)
  sound.play()
  noFill()
  stroke(255)

  fft = new p5.FFT()
  sound.amp(0.5)

  numPoints = 100

}

function draw() {
  background(1, 162, 166, 20)

  let spectrum = fft.analyze()

  beginShape()
  for(let i = 0; i < numPoints; i += 1) {
    let index = floor(map(i, 0, numPoints, 1, spectrum.length / 2))
    let a = map(i, 0, numPoints, 0, TWO_PI)

    let audioValue = map(spectrum[index], 0, 255, 1, 5)
    vertex(250 + sin(a) * 50 * audioValue, 250 + cos(a) * 50 * audioValue)
  }
  endShape(CLOSE)
}
