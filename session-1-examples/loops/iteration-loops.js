let numRows, numCols

function setup() {
  createCanvas(500, 500)
  background(4, 117, 111)
  noStroke()
  rectMode(CENTER)
  numRows = 25
  numCols = 25
}

function draw() {
  background(4, 117, 111)
  for(let row = 0; row < numRows; row += 1) {
    for(let col = 0; col < numCols; col += 1) {
      let x = map(col, 0, numCols, 50, 450)
      let y = map(row, 0, numRows, 50, 450)

      fill(lerpColor(color(217, 0, 0), color(255, 140, 0), map(row + col, 0, numRows + numCols, 0, 1)))
      rect(x, y, 5 , 5)
      rect(x, y, 5 + (frameCount + row) % 50, 5)
    }
  }
}
