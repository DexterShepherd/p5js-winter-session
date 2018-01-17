let agents, stepSize, agentSize, noiseScale, lifeSpan

function setup() {
  createCanvas(500, 500)

  agents = []
  agentSize = 3
  lifeSpan = 50

  noiseScale = random(0.01, 0.01)
  stepSize = random(0.5, 1)

  background(0)

  noStroke()
}


function draw() {
  background(0, 5)
  update()

  if(mouseIsPressed) {
    agents.push(
      {
        x: mouseX,
        y: mouseY,
        colorR: random(255),
        colorG: random(255),
        colorB: random(255),
        age: 
      }
    )
  }

  for(let i = 0; i < agents.length; i += 1) {
    fill(agents[i].colorR, agents[i].colorG, agents[i].colorB)
    rect(agents[i].x, agents[i].y, agentSize, agentSize)
  }
}

function update() {
  for(let i = 0; i < agents.length; i += 1) {
    let angle = noise(agents[i].x * noiseScale, agents[i].y * noiseScale) * TWO_PI

    agents[i].x += sin(angle) * stepSize
    agents[i].y += cos(angle) * stepSize

  }
}

