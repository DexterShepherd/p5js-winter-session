let video, scale, agents, thresh, noiseScale, noiseStrength

function setup() {
  createCanvas(500, 500)
  pixelDensity(1)
  scale = 10
  video = createCapture(VIDEO)
  video.size(width / scale, height / scale)
  noStroke()
  rectMode(CENTER)
  video.hide()

  agents = []
  thresh = 50

  noiseScale = 0.01
  noiseStrength = 0.9
  background(0)
}

function draw() {
  translate(scale / 2, scale / 2)
  background(0, 50)
  video.loadPixels()
  for(let x = 0; x < video.width; x += 1) {
    for(let y = 0; y < video.height; y += 1) {
      let i = (x + y * video.width) * 4

      let r = video.pixels[i]
      let g = video.pixels[i + 1]
      let b = video.pixels[i + 2]

      if (brightness([r, g, b]) > thresh) {
        // rect(x * scale, y * scale, scale, scale)
        agents.push({
          x: x * scale,
          y: y * scale,
          life: 50
        })
      }
    }
  }

  for(let i = 0; i < agents.length; i += 1) {
    let angle = noise(agents[i].x * noiseScale, agents[i].y * noiseScale) * PI
    agents[i].x += sin(angle) * noiseStrength
    agents[i].y += cos(angle) * noiseStrength

    rect(agents[i].x, agents[i].y, agents[i].life / 5, agents[i].life / 5)
    agents[i].life -= 1
  }

  agents = agents.filter(a => a.life > 0)
}
