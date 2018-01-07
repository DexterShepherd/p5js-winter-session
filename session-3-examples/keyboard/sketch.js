let rotation, speed

function setup() {
  createCanvas(500, 500, WEBGL)
  rotation = { x: 0, y: 0, z: 0 }
  speed = { x: 0, y: 0, z: 0 }
  // background(0)
  noStroke()
}

function draw() {
  background(0)
  translate(-225, -225, 0)
  pointLight(255, 240, 240, 250, 250, 40)
  for(let i = 0; i < 10; i += 1) {
    for( let j = 0; j < 10; j += 1 ) {
      push()
      translate(i * 50, j * 50, 0)
      rotateX(rotation.x)
      rotateY(rotation.y)
      rotateZ(rotation.z)
      box(35)
      pop()
    }
  }
  rotation.x += speed.x
  rotation.y += speed.y
  rotation.z += speed.z
}

function keyPressed(e) {
  switch(e.keyCode) {
    case RIGHT_ARROW:
      speed.y += 0.005
      break;
    case LEFT_ARROW:
      speed.y -= 0.005
      break;
    case UP_ARROW:
      speed.x += 0.005
      break;
    case DOWN_ARROW:
      speed.x -= 0.005
      break;
    case 32:
      speed.x = 0
      speed.y = 0
      speed.z = 0
      rotation.x = 0
      rotation.y = 0
      rotation.z = 0
  }
}
