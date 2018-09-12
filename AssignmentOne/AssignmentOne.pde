
float mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
boolean brushOne;
boolean brushTwo;
boolean brushThree;
boolean brushFour;

char[] alpha= {'a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
//String[] rainbowBrushes= new String[26];

void setup() {
  size(displayWidth, displayHeight);  //rect(0, 0, 1000, 800);
  stroke(100);
  int s = second();
  background(51);
 
}

void rainbowBrush(char daKey) {
  
  if (keyPressed) {
    if (mouseX > 30 && mouseX < displayWidth-30 && mouseY > 30 && mouseY < displayHeight-30) {
      line(mouseX, mouseY, random(30, displayWidth-30), random(30, displayHeight-30));
      strokeWeight(random(5));
      // how to give a specific color code?
      if(daKey%6 == 0){  
      stroke(random(0), random(((int)daKey/2)), random(((int)(0+daKey)), (daKey*3)) ); 
      }
      else if(daKey%3 == 0){  
      stroke(random((int)(0+daKey), (daKey*3)), random((0)), random(((int)daKey/2)) ); 
      }
      else if(daKey%2 == 0){
      stroke(random((int)daKey/2), random((daKey*3)), random(0) ); 
      }
      else{
        
      stroke(random(20), random(20), random(20) ); 
      }
      
    } else {
      noFill();
      stroke(random(5));
    }
  }
}

void colorDrawingOptions() {
  int alphaSize = alpha.length;
  for ( int i = 0; i < alphaSize; ++i) {
    if (key == alpha[i]) {
      rainbowBrush(alpha[i]);
    }
  }
}


void draw() {
  colorDrawingOptions();

  if (key == CONTROL && key == 's') {
    save("drawingWithProcessing-#####.png");
  }
}
