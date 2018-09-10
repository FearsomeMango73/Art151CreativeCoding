/*
    pushMartix() (creates layers for rotating specific element actions)
 popMartix()    
 translate(width/2, height/2); (changes the the new 0 point)        
 counter      
 rotate(radians(counter * .1));      
 */
float mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
boolean brushOne;
boolean brushTwo;
boolean brushThree;
boolean brushFour;

void setup() {
  size(displayWidth, displayHeight);  //rect(0, 0, 1000, 800);
  stroke(100);
  int s = second();
  background(51);
}
void greenBrush() {
  if (keyPressed) {
    //if (key == 'w' || key == 'W') {
    if (mouseX > 30 && mouseX < displayWidth-30 && mouseY > 30 && mouseY < displayHeight-30) {
      line(mouseX, mouseY, random(30, displayWidth-30), random(30, displayHeight-30));
      strokeWeight(random(5));
      stroke(random(60), random(640), random(40));
    } else {
      noFill();
      stroke(random(5));
    }
    //}
  }
}

void redBrush() {
  if (keyPressed) {
    // if (key == 'q' || key == 'Q') {
    if (mouseX > 30 && mouseX < displayWidth-30 && mouseY > 30 && mouseY < displayHeight-30) {
      line(mouseX, mouseY, random(30, displayWidth-30), random(30, displayHeight-30));
      strokeWeight(random(5));
      stroke(random(255), 0, 0);
    } else {
      noFill();
      stroke(random(5));
    }
    // }
  }
}

void blueBrush() {
  if (keyPressed) {
    // if (key == 'e' || key == 'E') {
    if (mouseX > 30 && mouseX < displayWidth-30 && mouseY > 30 && mouseY < displayHeight-30) {
      line(mouseX, mouseY, random(30, displayWidth-30), random(30, displayHeight-30));
      strokeWeight(random(5));
      stroke(0, 0, random(225));
    } else {
      noFill();
      stroke(random(5));
    }
    //}
  }
}

void whiteBrush() {
  if (keyPressed) {
    //if (key == 'r' || key == 'R') {
    if (mouseX > 30 && mouseX < displayWidth-30 && mouseY > 30 && mouseY < displayHeight-30) {
      line(mouseX, mouseY, random(30, displayWidth-30), random(30, displayHeight-30));
      strokeWeight(random(5));
      stroke(random(200, 225), random(200, 225), random(200, 225));
    } else {
      noFill();
      stroke(random(5));
    }
    //}
  }
}

void blackBrush() {
  if (keyPressed) {
    //if (key == 'f' || key == 'F') {
    if (mouseX > 30 && mouseX < displayWidth-30 && mouseY > 30 && mouseY < displayHeight-30) {
      line(mouseX, mouseY, random(30, displayWidth-30), random(30, displayHeight-30));
      strokeWeight(random(5));
      stroke(random(0, 25), random(0, 25), random(0, 25));
    } else {
      noFill();
      stroke(random(5));
    }
    //}
  }
}

void colorDrawingOptions() {

  if (key == 'q' || key == 'Q') {
   greenBrush();
  }
  if (key == 'w' || key == 'W') {
    redBrush();
  }
  if (key == 'e' || key == 'E') {
   blueBrush();
  }
  if (key == 'r' || key == 'R') {
    whiteBrush();
  }
  if (key == 'f' || key == 'F') {
    blackBrush();
  }
}
void draw() {
  colorDrawingOptions();
  
  if(key == CONTROL && key == 's'){
    save("drawingWithProcessing-#####.png");
  }
  /*if (brushOne == true) {
    greenBrush();
  }
  else if (brushTwo == true) {
    redBrush();
  }
  else if (brushThree == true) {
    blueBrush();
  }
  else if (brushFour == true) {
    whiteBrush();
  }
  
  */
}











/* void setup(){
 size(1000, 800);
 //rect(0, 0, 1000, 800);
 stroke(100);
 int s = second();
 background(51);
 }
 
 void draw(){
 
 if(mousePressed){
 
 float xCoord = random(100, 900);
 float yCoord = random(100, 700);
 float xSize = random(50); 
 float ySize = random(50);
 
 float rColor = random(60);
 float bColor = random(640);
 float gColor = random(40);
 fill(rColor, bColor , gColor );
 stroke(0);
 ellipse(xCoord, yCoord, xSize, ySize);
 pushMatrix();
 //for( int i = 0; i < 10; ++i){
 xSize--;
 ySize--; 
 fill(rColor, bColor , gColor );
 stroke(0);
 ellipse(xCoord, yCoord, xSize, ySize );
 fill(51);
 stroke(51);
 ellipse(xCoord, yCoord, xSize, ySize );
 
 // }
 
 popMatrix();
 }
 
/*
 float mouseDist = dist(mouseX, mouseY, pmouseX,pmouseY);
 if (keyPressed) {
 if (key == 'w' || key == 'W') {
 if(mouseX > 100 && mouseX < 900 && mouseY > 100 && mouseY < 700){
 line(mouseX, mouseY, random(100, 900), random(100, 700));
 strokeWeight(random(5));
 stroke(random(60), random(640), random(40));
 }
 else{
 noFill();
 stroke(random(5));
 //arc(mouseX, mouseY, 50, 50, 0, HALF_PI);
 //ellipse(400,600, mouseDist, mouseDist);
 // strokeWeight(random(10, 20));
 //stroke(random(255),random(255),random(255));
 
 
 
 
 //arc(50, 55, 50, 50, 0, HALF_PI);
 //arc(50, 55, 60, 60, HALF_PI, PI);
 //arc(50, 55, 70, 70, PI, PI+QUARTER_PI);
 }
 }
 }
 
 
 
 
 } */
