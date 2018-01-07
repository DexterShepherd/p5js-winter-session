let positions, connections, positionshaschanged, c1, c2, maxlife, maxlinelength


function setup() {
  createcanvas(500, 500)
  c1 = color('#ffffa6')
  c2 = color('#29d9c2')
  positions = []
  connections = []
  maxlife = 500
  maxlinelength = 30
  nofill()
  stroke(255)
  background(1, 162, 166)
}

function draw() {
  background(1, 162, 166, 5)
  translate(width/2, height/2)
  positions = positions.filter((pos) => {
    if(pos.counter > 0) {
      return true
    }
    positionshaschanged = true
    return false
  })


  if (mouseispressed) {
    positions.push({ x: mousex - width / 2 , y: mousey - height / 2, counter: maxlife })
    positionshaschanged = true
  }

  if(positionshaschanged) {
    calculateconnections()
  }

  for(let i = 0; i < positions.length; i += 1) {
    let pos = positions[i]
    stroke(lerpcolor(c1, c2, pos.counter / maxlife))
    for(let j = 0; j < connections[i].length; j += 1) {
      beginshape()
      vertex(pos.x, pos.y)
      if(connections[i][j]) {
        vertex(positions[connections[i][j].index].x, positions[connections[i][j].index].y)
      }
      endshape()
    }

    let n = noise(positions[i].x * 0.005, positions[i].y * 0.005) * 2 - 1
    positions[i].x *= 1 + n * 0.01
    positions[i].y *= 1 + n * 0.01
    positions[i].counter -= 1
  }
}

function calculateconnections() {
  for(let i = 0; i < positions.length; i += 1) {
    connections[i] = []
    for(let j = i + 1; j < positions.length; j += 1) {
      distance = dist(positions[i].x, positions[i].y, positions[j].x, positions[j].y)
      if(distance < maxlinelength) {
        connections[i].push({ index: j, dist: distance})
      }
    }
  }

  positionshaschanged = false
}
