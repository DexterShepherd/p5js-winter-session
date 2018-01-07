let shapes, c1, c2


function setup() {
  createCanvas(500, 500)
  noFill()
  shapes = []
  background(1, 162, 166)
  c1 = color('#FFFFA6')
  c2 = color('#29D9C2')
}

function draw() {
  background(1, 162, 166, 10)
  for( let i = 0; i < shapes.length; i += 1) {
    stroke(lerpColor(c1, c2, shapes[i].size / 1000))
    ellipse(shapes[i].x, shapes[i].y, shapes[i].size, shapes[i].size)
    shapes[i].size += 5
  }

  shapes = shapes.filter((shape) => shape.size < 1000)
}

/*
 * This function gets called each time the mouse is pressed
 *
 * Every time the mouse is pressed, add a new shape object to the shapes array
 */
function mousePressed() {
  let s = 1
  let x = random(width)
  let y = random(height)
  shapes.push({ 
    size: s,
    x: x,
    y: y
  })
}
