let numRows, numCols, state, nextState, neighborhood, cellCounter

function setup() {
  createCanvas(500, 500)
  numRows = height / 4
  numCols = width / 4
  state = []
  nextState = []
  cellCounter = []
  colorMode(HSB, 360, 100, 100, 255)

  neighborhood = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ]

  initEmpty()
  noStroke()
  // fill(255)
  background(0, 0, 0)
}

function draw() {

  initCircle(frameCount * 0.1, 4)
  update()
  for(let col = 0; col < numCols; col += 1) {
    for(let row = 0; row < numRows; row += 1 ) {
      let colSize = width / numCols
      let rowSize = height / numRows
      let x = col * colSize
      let y = row * rowSize
      if(state[col][row]) {
        cellCounter[col][row] += 1;
        let count = cellCounter[col][row]
        fill(200 + (count * 2) % 100, noise(col * 0.2, row * 0.2) * 100, noise(col * 0.2, row * 0.2) * 150)
        rect(x, y + count % 100, colSize, rowSize)
      }
    }
  }
  // save(frameCount + '.png')
}

function initRandom(threshhold) {
  for(let col = 0; col < numCols; col += 1) {
    state[col] = []
    nextState[col] = []
    cellCounter[col] = []
    for(let row = 0; row < numRows; row += 1 ) {
      state[col][row] = random() > threshhold ? 1 : 0
      cellCounter[col][row] = 0
    }
  }
}

function initCircle(r, detail) {
  for(let i = 0; i < detail; i += 1) {
    let angle = map(i, 0, detail, 0, TWO_PI)
    let row = floor(sin(angle) * r + ( numRows / 2 ))
    let col = floor(cos(angle) * r + ( numCols / 2 ))
    state[wrapCol(col)][wrapRow(row)] = 1
  }
}

function initEmpty() {
  for(let col = 0; col < numCols; col += 1) {
    state[col] = []
    nextState[col] = []
    cellCounter[col] = []
    for(let row = 0; row < numRows; row += 1 ) {
      state[col][row] = 0 
      cellCounter[col][row] = 0
    }
  }
}

function update() {
  for(let col = 0; col < numCols; col += 1) {
    for(let row = 0; row < numRows; row += 1 ) {
      let sum = 0

      for( let n = 0; n < neighborhood.length; n += 1 ) {
        sum += state[wrapCol(col + neighborhood[n][0])][wrapRow(row + neighborhood[n][1])]
      }

      if((state[col][row] == 1) && (sum < 2)){ 
        nextState[col][row] = 0
      }
      else if((state[col][row] == 1) && (sum > 3)) { 
        nextState[col][row] = 0
      }
      else if((state[col][row] == 0) && (sum == 3)) { 
        nextState[col][row] = 1
      }
      else { 
        nextState[col][row] = state[col][row]
      }
    }
  }

  let temp = state
  state = nextState
  nextState = temp
}

// Trick to easily wrap our edges
function wrapRow(i) {
  return (numRows + (i % numRows)) % numRows;
}

function wrapCol(i) {
  return (numCols + (i % numCols)) % numCols;
}
