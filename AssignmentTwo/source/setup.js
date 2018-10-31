
// file:///C:/Users/Hayley/Documents/Art151/AssignmentTwo/source/index.html

var canvas;

//screen text
var title;
var userName;

// variables
var score;

//boolean
var intro;
var windowOp;
var clothesOp;
var samOp; 
var alarmClockOp; 
var fleurishOp;
var daemonOp; 
 

function setup(){

canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index", "-1");

begin();
}

function window(){
score++;
beginning.hide();
var firstOption = createP("You see the birds in start to act weird, stating at you as you look out at them. You observe people rushing to get to work, you chuckle at the thought of a normal life.");


}

function clothes(){
score++;

}

function sam(){
score++;

}

function alarmClock(){
score++;

}

function fleurish(){
score++;

}

function daemons(){
score++;

}

function sam(){
score++;

}

function begin(){
background(0);

intro = createP("The sound of your alarm clock drags you awake, but you remain with your eyes closed. This moment of peace before the day starts tempts you to stay in bed, but a small voice in the back of your head brings you back to reality. Today is the day you need to keep moving. ");
createElement("br");

windowOp = createP("#", "You see the light come through the window and your clothes hanging over the railing to downstairs.");

windowOp.mousePressed(window);
createElement("br");
createElement("br");
createElement("br");

createP("Score: " + score);
//windowOp = createA("#", "You see the light come through the window and your clothes hanging over the railing to downstairs.")

}


function draw(){
background(0);


}

function WindowResized(){
canvas = createCanvas(windowWidth, windowHeight);

}