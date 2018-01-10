let numRows, numCols, state, nextState, neighborhood

function setup() {
  createCanvas(500, 500)
  numRows = height / 4
  numCols = width / 4
  state = []
  nextState = []

  neighborhood = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ]

  for(let col = 0; col < numCols; col += 1) {
    state[col] = []
    nextState[col] = []
    for(let row = 0; row < numRows; row += 1 ) {
      state[col][row] = 0
    }
  }
  noStroke()
  fill(255)
  background(0, 0, 0)
}

function draw() {
  background(0, 50)

  let detail = 100 
  let r = frameCount * 0.1
  for(let i = 0; i < detail; i += 1) {
    let angle = map(i, 0, detail, 0, TWO_PI)
    let row = floor(sin(angle) * r + ( numRows / 2 ))
    let col = floor(cos(angle) * r + ( numCols / 2 ))
    state[wrapCol(col)][wrapRow(row)] = 1
  }

  update()
  for(let col = 0; col < numCols; col += 1) {
    for(let row = 0; row < numRows; row += 1 ) {
      let colSize = width / numCols
      let rowSize = height / numRows
      let x = col * colSize
      let y = row * rowSize
      if(state[col][row]) {
        rect(x, y, colSize, rowSize)
      }
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
