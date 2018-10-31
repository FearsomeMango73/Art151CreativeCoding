/*
file:///C:/Users/Hayley/Documents/Art151/AssignmentTwo/source/index.html

//intro.changed("You had been raised by those protecting the scared ways of the hidden society known as the Fleurish. Before society rose, Flourish was founded by the chosen to lock away the daemons that walked the earth. Those who desire the insanity of the dark have drawn close, treating the unwoken as animals. You secretly hold instructions for awakening those monsters that will bring the world in chaos hidden in ink that only a few can truly see.");

*/

var canvas;

//Begining Sequences 
var startingLine;
var startingLineAlt;
var beginIntro;
var intro;
var finalSaying;
var quicklyHeading;

//Inputs
var nameInput;
var yesInput;
var noInput;

//Variables for specific tasks
var windowChoose;
var windowP;
var clothesP;

var samOP;
var samB; 
var samAbout;

var alarmClockBTN; 
var alarmClockP; 

var fleurishP;
var fleur;

var daemonOp; 
var unwokenOp;

//final score and resetting, will be put towards path chosen
var score;
var resetStory; 
var continueStory;
var endingLine;

//setting up canvas
function setup() {

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");
	begin();
}

function alarmClock(){
	//hiding all other scenes
	startingLine.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();

	background(0);
	
	alarmClockP = createP("<br>You glance over at the time as the ring continues. Such a small device to make such a loud sound. <br<br>You turn it off and get up. You see your clothes hung over the railing and the light peering through the window.");

	windowChoose = createA("#", " Take a look outside.");
	windowChoose.mouseClicked(outside);
	createElement("br");
	continueStory = createA("#", "Approach your clothes");
	continueStory.mouseClicked(clothes); //need to continue further
}

function clothes(){
	//hiding all other scenes
	startingLine.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	
	background(0);

	clothesP = createP("Clothes to talk about, your jacket is hanging near the door awaiting for you to put it on, while your boots are covred in dried blood giving the black and deep red color");
}


function outside(){
	//hiding all other scenes
	startingLine.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	
	background(0);

	windowOp = createP("<br> You see the birds as they start to act weird, staring at you as you look out at them.<br>You observe people rushing to get to work, you chuckle at the thought of a normal life. <br> <br> <br>One person, jogging along reminds you of Sam.");
	samB = createA("#", "Sam.");
	samB.mouseClicked(samStory);
	
}

function samStory(){
	//hiding all other scenes
	startingLine.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();

	windowOp.hide();
	samB.hide();
	
	background(0);
	
	samOP =createElement("h1", "Sam...");
	samAbout = createP("<br>Their death...they died. It is still fresh in my mind. Their screams for me to run, the tearing of their flesh.<br><br> Their last will, stained in my memory, was for me to keep running until I find Kat and to not trust anyone.  <br><br>Sam was my assigned guardian. I supposedly have been lost for some time, but even I cannot remember who I once was.");
	
}

function deamon(){
	//hiding all other scenes
	startingLine.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	
	background(0);

	daemonOp = createP("");

}

/*
function fleurish(){
	// hiding all other scenes
	startingLine.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	
	background(0);

	fleur = createP(" <br>Thousands of years old, a hidden society to the unwoken was formed with powers of the Fleur. <br><br>Most Fleurs draw abilities from elementals or soul binding determined on your lineage.<br> After the chosen were created, the creatures were born from the emotionial flux of the users of the Fleur.<br> Such power draws these creatures from the other side giving way to the barriers, allowing them to torment the world. <br><br> The chosen created the other side after these creatures arose to hold back the beings that could end the world, but their followers have been hunting down the chosen ones one by one while hiding between the cracks of humanity.");

}
*/
/*

function unwoken(){
	//hiding all other scenes
	startingLine.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();

	background(0);

	unwokenOp = createP("<br> Most of Society that do not have the proper lineage to unlock the powers of the Fleur and have no connection to it.<br><br> The Unwoken are easily manipulated by the society of the Fleurish and have not awoken to the realization of Fleurish thriving among them.<br><br><br> Unwoken, however, can also be the children and next generation of the Fleurish. <br><br>Those from the lineage will stay unwoken until they reach the age of maturity.<br><br> If they are not truly drawn to the power of the Fleur, they can still trigger the awakening unknowingly.");
}

*/

// Main Story Functions

function begin(){
	
	//resetting background
	background(0);

	startingLine = createP(" This is your Story. <br>The lonesome journey you must be prepared for. <br>Are you ready to face it?<br><br>");
	
	yesInput = createButton("Yes");
	yesInput.mouseClicked(startStory);
	createElement("br");
	noInput = createButton('No');	
	noInput.mouseClicked(endTooQuickly);
}

function beginAlt(){
	//hiding other scenes
	quicklyHeading.hide();
	finalSaying.hide();
	resetStory.hide();

	//resetting background
	background(0);

	begin();

}

function startStory(){
	//hiding other scenes
	startingLine.hide();
	yesInput.hide();
	noInput.hide();

	//resetting background
	background(0);

	beginIntro = createElement("h1", "And so it begins...");
	createElement("br");
	intro = createP("The sound of your alarm clock drags you awake, but you remain with your eyes closed. <br>This moment of peace before the day starts tempts you to stay in bed, but a small voice in the back of your head brings you back to reality. <br> <br>Today is the day you need to keep moving. ");
	createElement("br");
	alarmClockBTN = createButton('Alarm Clock');
	alarmClockBTN.mouseClicked(alarmClock);

}

function endTooQuickly(){
	
	quicklyHeading = createElement("h1","Just as quickly it ends, it can begin...");
	finalSaying = createP("The darkness has taken you too quickly.<br>		You must prepare yourself to face it.<br>			 Consider starting your story again?");
	createElement("br");
	resetStory = createA("#", "Your Story isnt over...");
	resetStory.mouseClicked(beginAlt);

	//hiding other scenes
	startingLine.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();

	//resetting background
	background(0);
}

function onlyTheBeginning(){
	//hiding other scenes
	startingLine.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	

	endingLine = createP("Your story is only beginning...<br>		Stay tuned for the next episode<br>");
	createElement("br");

}

function draw(){
	//resetting background
	background(0);
}

function WindowResized(){
canvas = createCanvas(windowWidth, windowHeight);

}