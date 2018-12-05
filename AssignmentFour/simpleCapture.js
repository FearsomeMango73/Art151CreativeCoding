var capture;

function setup() {
 
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);

}