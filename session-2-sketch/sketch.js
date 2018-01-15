let agents, numAgents, stepSize, agentSize, noiseScale

function setup() {
  createCanvas(500, 500)

  numAgents = 1000
  agents = []
  agentSize = 3

  for(let i = 0; i < numAgents; i += 1) {
    agents[i] = {
      x: random(width),
      y: random(height),
      colorR: random(255),
      colorG: random(255),
      colorB: random(255)
    }
  }

  noiseScale = random(0.01, 0.01)
  stepSize = random(0.5, 5)

  background(0)

  noStroke()
}


function draw() {
  background(0, 5)

  update()

  for(let i = 0; i < numAgents; i += 1) {
    fill(agents[i].colorR, agents[i].colorG, agents[i].colorB)
    rect(agents[i].x, agents[i].y, agentSize, agentSize)
  }
}

function update() {
  for(let i = 0; i < numAgents; i += 1) {
    let angle = noise(agents[i].x * noiseScale, agents[i].y * noiseScale) * TWO_PI

    agents[i].x += sin(angle) * stepSize
    agents[i].y += cos(angle) * stepSize


    if((agents[i].x > width) || (agents[i].x < 0) || (agents[i].y > height) || (agents[i].y < 0)) {
      agents[i].x = random(width)
      agents[i].y = random(height)
    }
  }
}
