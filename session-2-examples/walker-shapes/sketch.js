let numWalkers, walker, noiseScale, noiseStrength

function setup() {
  createCanvas(500, 500)
  background(0)
  noiseSeed(random(10000))

  stroke(255)
  noFill()
  numWalkers = 1000
  walkers = []

  noiseScale = random(0.001, 0.1)
  noiseStrength = random(1, 10)

  for(let i = 0; i < numWalkers; i += 1) {
    let angle = map(i, 0, numWalkers, 0, TWO_PI)
    walkers[i] = {
      x: 250 + sin(angle) * 100,
      y: 250 + cos(angle) * 100
    }
  }
}

function draw() {
  background(0, 2)
  update()

  beginShape()
  for(let i = 0; i < numWalkers; i += 1){
    vertex(walkers[i].x, walkers[i].y)
  }
  endShape()

  if((frameCount % 200) == 0) {
    setup()
  }
}


function update() {
  for(let i = 0; i < numWalkers; i += 1) {


    let angle = (noise(walkers[i].x * noiseScale, walkers[i].y * noiseScale)) * TWO_PI
    walkers[i].x += sin(angle) * noiseStrength
    walkers[i].y += cos(angle) * noiseStrength

  }
}
