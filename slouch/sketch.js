var s00, s01, s02, s03, s04, s05, s06, s07, s08, s09;
var c;
var mySound, fft;

function preload(){
  s00 = loadSound('bubbles.mp3');
  s01 = loadSound('clay.mp3');
  s02 = loadSound('confetti.mp3');
  s03 = loadSound('corona.mp3');
  s04 = loadSound('dotted-spiral.mp3');
  s05 = loadSound('flash-1.mp3');
  s06 = loadSound('flash-2.mp3');
  s07 = loadSound('flash-3.mp3');
  s08 = loadSound('glimmer.mp3');
  s09 = loadSound('strike.mp3');

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  c = color(0, 0, 0);
  background(c);
  fft = new p5.FFT();
  s00.setVolume(1);
  s01.setVolume(1);
  s02.setVolume(1);
  s03.setVolume(1);
  s04.setVolume(1);
  s05.setVolume(1);
  s06.setVolume(1);
  s07.setVolume(1);
  s08.setVolume(1);
  s09.setVolume(1);


}

function draw() {
  background(c)
  stroke(255)

  translate(width / 2, height / 2)

  var wave = fft.waveform();

  beginShape()
  for(var i = 0; i <= 180; i++){
    var index = floor(map(i, 0, 180, 0, wave.length - 1))

    var r = map(wave[index], -1, 1, 150, 350)

    var x = r * sin(i)
    var y = r * cos(i)
    vertex(x, y)
  }
  endShape()
  beginShape()
  for(var i = 0; i <= 180; i++){
    var index = floor(map(i, 0, 180, 0, wave.length - 1))

     var r = map(wave[index], -1, 1, 150, 350)

    var x = r * -sin(i)
    var y = r * cos(i)
    vertex(x, y)
  }
  endShape()
}


function keyTyped(){
  if (key == '0'){
    s00.play();
    c = color(255, 0, 0);

  }
  if (key == '1'){
    s01.play();
    c = color(0, 255, 0);

  }
  if (key == '2'){
    s02.play();
    c = color(0, 0, 255);

  }
  if (key == '3'){
    s03.play();
    c = color(255, 0, 255);

  }
  if (key == '4'){
    s04.play();
    c = color(255, 255, 0);

  }
  if (key == '5'){
    s05.play();
    c = color(173, 66, 245);

  }
  if (key == '6'){
    s06.play();
    c = color(245, 150, 66);

  }
  if (key == '7'){
    s07.play();
    c = color(66, 203, 245);

  }
  if (key == '8'){
    s08.play();
    c = color(245, 96, 66);

  }
  if (key == '9'){
    s09.play();
    c = color(216, 235, 52);

  }
}
