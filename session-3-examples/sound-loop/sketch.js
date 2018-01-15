let voices, numVoices, notes, duration, counter, pitches

function setup() {
  createCanvas(500, 500)
  background(1, 162, 166)
  counter = 0
  numVoices = 6
  voices = []
  notes = [
    0, 2, 4, 5, 7, 9, 11
  ]
  pitches = []

  fill(255)
  noStroke()
  duration = floor(random(300))

  for(let i = 0; i < numVoices; i += 1) {
    voices[i] = new p5.SinOsc()
    pitches[i] = random(notes) + 40 + (floor(random(4)) * 12)
    voices[i].freq(midiToFreq(pitches[i]))
    voices[i].amp(1 / numVoices)
    voices[i].pan(random(-1, 1))
    voices[i].start()
  }
}

function draw() {
  background(1, 162, 166, 20)

  for(let i = 0; i < numVoices; i += 1) {
    let r = map(pitches[i], 40, 88, 100, 200)
    let a = map(counter, 0, duration, 0, TWO_PI) 
    ellipse(250 + sin(a) * r, 250 + cos(a) * r, 5, 5)
  }

  if(counter == duration) {
    for(let i = 0; i < numVoices; i += 1) {
      pitches[i] = random(notes) + 40 + (floor(random(4)) * 12)
      voices[i].freq(midiToFreq(pitches[i]))
      voices[i].pan(random(-1, 1))
    }
    duration = floor(random(300))
    counter = 0
  }

  counter += 1
}
