/*
file:///C:/Users/Hayley/Documents/Art151/AssignmentTwo/source/index.html

//intro.changed("You had been raised by those protecting the scared ways of the hidden society known as the Fleurish. Before society rose, Flourish was founded by the chosen to lock away the daemons that walked the earth. Those who desire the insanity of the dark have drawn close, treating the unwoken as animals. You secretly hold instructions for awakening those monsters that will bring the world in chaos hidden in ink that only a few can truly see.");

*/

var canvas;

//Begining Sequences and Inputs
var startingLine;
var intro;
var nameInput;
var yesInput;
var noInput;

//Variables for specific tasks
var windowOp;
var clothesOp;
var samOp; 
var alarmClocBTN; 
var alarmClocOp; 
var fleurishOp;
var fleur;
var daemonOp; 
var unwokenOp;

//final score and resetting, will be put towards path chosen
var score;
var resetStory; 

//Setting up canvas
function setup() {

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");
	begin();
}


function alarmClock(){

	alarmClockOp = createP("You glance over at the time as the ring continues. Such a device to make such a sound.");
}

function clothes(){}

function deamon(){}

function outside(){}

function sam(){}

function fleurish(){
	begin.hide();
	unwoken.hide();

	background(0);

	fleur = createP("Thousands of years old, a hidden society to the unwoken with powers of the Fleur. <br> Most are elemental or soul bond in some way while the creatures that have been bon from such power either hide between the cracks of humanity or end up in the");

}

function unwoken(){
	//hiding other scenes
	fleurish.hide();
	begin.hide();

	background(0);

	unwokenOp = createA("#", "Most of Society that has not unlocked the powers of the Fleur.");
}

// Main Story Functions
function begin(){
	//resetting background

	startingLine = createP(" This is your Story. <br>The lonesome journey you must be prepared for. <br>Are you ready to face it?");
	createElement("br"); createElement("br");

	//yesInput = createA("#", "Yes.");
	//noInput = createA("#", "No.");
	yesInput = createButton("Yes");
	//createElement("br");
	//noInput = createButton('No');

	yesInput.mousePressed(startStory);
	//noInput.mousePressed(endTooQuickly);

	//Name Input Example
	//nameInput = createInput("Yes or no?");
	//nameInput.changed(startStory);
	//nameInput.changed(startStory);
}

function startStory(){
	//hiding other scenes
	//nameInput.hide();
	startingLine.hide();
	yesInput.hide();
	noInput.hide();

	//resetting background
	background(0);
	title.html('And so it begins...');
	createElement("br");
	createElement("br");
	intro = createP("The sound of your alarm clock drags you awake, but you remain with your eyes closed. <br>This moment of peace before the day starts tempts you to stay in bed, but a small voice in the back of your head brings you back to reality. <br> <br>Today is the day you need to keep moving. ");
	createElement("br");
	alarmClockBTN = createButton('Alarm Clock');
	alarmClockBTN.mousePressed(alarmClock);
}

function endTooQuickly(){
	//hiding other scenes
	//nameInput.hide();
	startingLine.hide();
	intro.hide();
	yesInput.hide();
	noInput.hide();

	alarmClockBTN.hide();

	//resetting background
	background(0);

	var finalSaying = createP("The darkness has taken you too quickly.<br>		You must prepare yourself to face it.<br>			 Consider starting your story again?");
	createElement("br");
	resetStory = createA("#", "Your Story isnt over");
	resetStory.mouseIsPressed(begin);

}

function draw(){
	//resetting background
	background(0);

	if(mouseIsPressed == true){
		fleurish();
	}
}

function WindowResized(){
canvas = createCanvas(windowWidth, windowHeight);

}



/*
var canvas;

//screen text
var intro;
var title;
var firstOption;
var secondOption;
var userName;

//inputs
var nameInput;

//animation variables

//boolean
var firstScreen;


function setup(){

canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index", "-1");

beginning();
}

function beginning(){
background(0);
intro = createP("The sound of your alarm clock drags you awake, but you remain with your eyes closed. <br>This moment of peace before the day starts tempts you to stay in bed, but a small voice in the back of your head brings you back to reality. <br> <br>Today is the day you need to keep moving. ");
createElement("br");

nameInput = createInput("type your name here");
//createA()
nameInput.changed(startStory);
}

function startStory(){
intro.hide();
nameInput.hide();
userName = createElement('h1', nameInput.value());
title = createElement('h1', "Get home before the sun sets");

firstOption = createP("walk towards the sun");
secondOption = createP("go home");

//createP("<p style=text-align:center;>Score:" + score);
}

function draw(){
background(0);

}

//animation functions

function WindowResized(){
canvas = createCanvas(windowWidth, windowHeight);

}

*/