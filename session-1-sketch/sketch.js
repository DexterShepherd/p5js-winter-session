let xPos, yPos
function setup() {
  createCanvas(500, 500)
  noStroke()
  background(0)
}

function draw() {
  background(0, 20)

  for(let i = 0; i < 10; i += 1) {
    for(let j = 0; j < 5; j += 1) {
      //fill(100, 255 - ( j * 25 ), i * 25)

      xPos = sin(i + frameCount * 0.05) * sin(j + frameCount * 0.01)  * 200
      yPos = cos(i + frameCount * 0.05) * cos(j + frameCount * 0.01) * 200
      ellipse(250 + xPos, 250 + yPos, 10, 10)   
    }
  }
}

