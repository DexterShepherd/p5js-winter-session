let agents, stepSize, agentSize, noiseScale, lifeSpan, brushSize,
  bristleCount

function setup() {
  createCanvas(500, 500)

  agents = []
  agentSize = 1
  lifeSpan = 50
  brushSize = 10
  bristleCount = 5


  background(0)

  noStroke()
}


function draw() {
  background(0, 10)
  translate(width / 2, height / 2)
  update()

  if(mouseIsPressed) {
    for(let i = 0; i < bristleCount; i += 1) {
    
      agents.push(
        {
          x: (mouseX - width / 2) + random(-brushSize, brushSize),
          y: ( mouseY - height / 2 ) + random(-brushSize, brushSize),
          colorR: random(255),
          colorG: random(255),
          colorB: random(255),
          age: 0
        }
      )

    }
  }

  for(let r = 0; r < 20; r += 1) {
    rotate(radians(360 / 20))
    for(let i = 0; i < agents.length; i += 1) {
      fill(agents[i].colorR, agents[i].colorG, agents[i].colorB)
      rect(agents[i].x, agents[i].y, agentSize, agentSize)
    }
  }

  for(let i = agents.length - 1; i >= 0; i -= 1) {
    if(agents[i].age > lifeSpan) {
      agents.splice(i, 1)
    }
  }

  console.log()
}

function update() {
  for(let i = 0; i < agents.length; i += 1) {
    noiseScale = random(0.01, 0.05)
    stepSize = random(0.5, 1)
    let angle = noise(agents[i].x * noiseScale, agents[i].y * noiseScale) * TWO_PI

    agents[i].x += sin(angle) * stepSize
    agents[i].y += cos(angle) * stepSize
    agents[i].age += 1

  }
}
