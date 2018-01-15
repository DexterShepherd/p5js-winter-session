let sound, fft, mic, synth, notes, currentNote

function preload() {
  sound = loadSound('do-make.mp3')
}

function setup() {
  createCanvas(500, 500)

  // mic = new p5.AudioIn()
  // mic.start()
  
  fft = new p5.FFT()
  // fft.setInput(mic)
  // sound.play()

  notes = [ 60, 63, 65, 67 ]
  currentNote = 0

  synth = new p5.Oscillator()
  synth.setType('sine')

  // synth.freq(midiToFreq(69))
  synth.start()

  fft.setInput(synth)

  noFill()
  stroke(255, random(0, 255), random(0, 255))
}

function draw() {
  background(0, 10)
  let spectrum = fft.analyze()

  beginShape()
  for(let i = 0; i < spectrum.length; i += 1) {
    let freqValue = spectrum[i] 
    
    let r = freqValue / 1.5

    vertex(250 + sin(i * 0.1) * r, 250 + cos(i * 0.1) * r)
  }
  endShape(CLOSE)

  if( frameCount % 10 == 0 ) {
    currentNote = (currentNote + 1) % notes.length
    synth.freq(midiToFreq(notes[currentNote]))
  }
}

function mouseClicked() {
  sound.pause()
  synth.amp(0)
}
