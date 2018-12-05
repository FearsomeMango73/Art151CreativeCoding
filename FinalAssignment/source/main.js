/*
file:///C:/Users/Hayley/Documents/Art151/FinalAssignment/source/index.html

//intro.changed("You had been raised by those protecting the scared ways of the hidden society known as the Fleurish. Before society rose, Flourish was founded by the chosen to lock away the daemons that walked the earth. Those who desire the insanity of the dark have drawn close, treating the unwoken as animals. You secretly hold instructions for awakening those monsters that will bring the world in chaos hidden in ink that only a few can truly see.");

*/

var canvas;

//Begining Sequences 
var startingLine1; var startingLine2; var startingLineAlt; 
var beginIntro; var intro; var finalSaying; var quicklyHeading;
var chooseEnding;

//Inputs
var nameInput; var yesInput; var noInput;

//Variables for specific tasks
var windowChoose; var windowP; var windowView; var clothesP; var clothesBTN;

var samOP; var samB; var samAbout; var samSmile;

var alarmClockBTN; var alarmClockP; 

var darkRedButton; var theColorRed; 
var fleurishP; var fleurishBTN; // var fleurP; var fleurBTN;
var daemonP; var daemonBTN; var unwokenP; var unwokenBTN;
var returnBTN;

//Styling variables

//final score and resetting, will be put towards path chosen
var resetStory; var continueStory; var endingLine; var wrappingAdventure;
var wrapP; var endingBTN;

var endScene; var samImage;

//boolean values for differing paths
var noSam = false; var noClothes = false; var noFleurish = false; var noUnwoken = false; var noDaemons = false; 
var noReturn = false; var noPath = false;

function preload(){
	windowView = loadImage('../images/window');
	samSmile = loadImage('../images/smile');
	//endScene = loadImage("../videos/static.gif");
	//samImage = loadImage("../videos/sam.gif");
}
//setting up canvas
function setup() {

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");
	begin();
}

function alarmClock(){
	//add alarm sound

	//hiding all other scenes
	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();

	background(0);
	
	alarmClockP = createP("<br>You glance over at the time as the ring continues. Such a small device to make such a loud sound. <br<br>You turn it off and get up. You see your clothes hung over the railing and the light peering through the window.");

	windowChoose = createButton("Take a look outside."); windowChoose.style('background-color', 225, 35, 20);
	windowChoose.mouseClicked(outside);
	createElement("br");
	continueStory = createButton("Approach your clothes"); continueStory.style('background-color', 225, 35, 20);
	continueStory.mouseClicked(clothes); //need to continue further
}

function clothes(){

	//hiding all other scenes
	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();

	if ( noClothes == true){
		clothesBTN.hide();
		windowOp.hide();
		samB.hide();
	}
	if(noSam == true){
		samOP.hide();
		samAbout.hide();
	}
	
	background(0);

	clothesP = createP("Clothes to talk about, your jacket is hanging near the door awaiting for you to put it on, while your boots are covred in dried blood giving the black and deep red color");

	darkRedButton = createButton("That dark red");	
	darkRedButton.mouseClicked(redHurts);
	
}


function outside(){
	// canvas to create outside, or a small video of looking outside
	noClothes = true;
	//hiding all other scenes
	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	background(0);

	windowOp = createP("<br> You see the birds as they start to act weird, staring at you as you look out at them.<br>You observe people rushing to get to work, you chuckle at the thought of a normal life. <br> <br> <br>One person, jogging along reminds you of ...");
	image(windowView, 0, 0, windowWidth, windowHeight);
	samB = createButton("Sam");	
	samB.mouseClicked(samStory);
	createElement("br");
	clothesBTN = createButton("Approach your clothes");	
	clothesBTN.mouseClicked(clothes);
	
}

function samStory(){
	//hiding all other scenes
	noSam = true;

	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	
	clothesBTN.hide();
	windowOp.hide();
	samB.hide();
	
	background(0);

	//Implementing a video of Sam, but was not being implemented Properly
	//samSmile.loadPixels();
	image(samSmile, windowWidth-50, windowHeight, 340, 480);
	//image(samImage, 25, 25, windowWidth - 50, 50);
	
	samOP =createElement("h1", "Sam...");
	samAbout = createP(" Their death...they died. It is still fresh in your mind. Their screams for you to run, the tearing of their flesh.<br><br> Their last will, stained in your memory, was for you to keep running until I find them again and to not trust anyone.  <br><br> You supposedly have been lost for some time, but even you cannot remember who you once were... but her smile you could never forget");
	clothesBTN = createButton("Approach your clothes");
	clothesBTN.mouseClicked(clothes);
}

function redHurts(){
	if(noSam = true){
		samOP.hide();
		samAbout.hide();	
	}

	if(noClothes == true){
		clothesBTN.hide();
		windowOp.hide();
		samB.hide();
	}

	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	clothesP.hide();
	darkRedButton.hide();

	theColorRed = createP("This red; It’s so beautiful, but you are unsure of its origins.... <br> Or are you?");

	if(noReturn == true){
		returnBTN.hide();
	}
	if(noDaemons == true){
		daemonOp.hide();
		daemonBTN.hide();
	}
	else{
		daemonBTN = createButton("Daemons have been haunting you...");
		daemonBTN.mouseClicked(deamon);
		createElement("br");
	}

	if(noFleurish == true){
		fleurishP.hide();
		fleurishBTN.hide();
	}
	else{
		fleurishBTN = createButton("The fleurish of a society...");
		fleurishBTN.mouseClicked(fleurish);
		createElement("br");
	}

	if(noUnwoken == true){
		unwokenOp.hide();
		unwokenBTN.hide();
	}
	else{
		unwokenBTN = createButton("Unwoken from the truth...");
		unwokenBTN.mouseClicked(unwoken);
	}

	if(noDaemons == true && noFleurish == true && noUnwoken == true){
		wrappingAdventure = createButton("Snap out of your thoughts");
		wrappingAdventure.mouseClicked(leaveToAdventure);
	}

}


function deamon(){
	noDaemons = true;
	noReturn = true;
	// roar | images of all sort of daemons
	// allowing of different keys 
	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();
	//hiding all other scenes
	
	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	
	background(0);

	daemonOp = createP("You hear them in your sleep... they have been hunting you for quite some time. <br> or have you been hunting them?");

	returnBTN = createButton('Return');
	returnBTN.mouseClicked(redHurts);
}

function fleurish(){
	noFleurish = true;
	noReturn = true;
	// hiding all other scenes
	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	
	background(0);
	fleurishP = createP("Thousands of years old, a hidden society <br> unknown to the unwoken <br> unlocks powers of the Fleur. <br> The fleur stems from elemental or bonds from the soul given to such creatures all that time ago that now hide their identities between the cracks of humanity or end up in the shadows of the other side. <br> The Fleurish integrate themselves into everyday society taking up such positions to help them lead the world.");
	returnBTN = createButton('Return');
	returnBTN.mouseClicked(redHurts);
}

function unwoken(){
	noUnwoken = true;
	noReturn = true;
	//hiding all other scenes
	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();

	background(0);

	unwokenOp = createP("<br> Most of Society that do not have the proper lineage to unlock the powers of the Fleur and have no connection to it.<br><br> The Unwoken are easily manipulated by the seemingly forgotten fairytale society of the Fleurish and have not awoken to the reailty of Fleurish thriving among them.<br><br><br> Unwoken, however, can also be the children and next generation of the Fleurish. <br><br>Those from the lineage will stay unwoken until they reach the age of maturity.<br><br> If they are not truly drawn to the power of the Fleur, they can still trigger the awakening unknowingly.");

	returnBTN = createButton('Return');
	returnBTN.mouseClicked(redHurts);
}

/*
*
*
*
*
*
*
*/

// Main Story Functions

function begin(){
	
	//resetting background
	background(0);
	startingLine1 =createElement("h1", "This is your Story. . .");
	startingLine2 = createP("The lonesome journey you must be prepared for. <br>Are you ready to face it?<br><br>");
	
	yesInput = createButton("Yes"); yesInput.style('background-color',225, 35, 20);
	yesInput.mouseClicked(startStory);
	createElement("br");
	noInput = createButton('No'); noInput.style('background-color', 225, 35, 20);	
	noInput.mouseClicked(endTooQuickly);
}

function beginAlt(){
	//hiding other scenes
	quicklyHeading.hide();
	finalSaying.hide();
	resetStory.hide();
	chooseEnding.hide();

	//resetting background
	background(0);
	begin();

}

function startStory(){
	//hiding other scenes
	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();

	//resetting background
	background(0);

	beginIntro = createElement("h1", "And so it begins...");
	createElement("br");
	intro = createP("The sound of your alarm clock drags you awake, but you remain with your eyes closed. <br>This moment of peace before the day starts tempts you to stay in bed, but a small voice in the back of your head brings you back to reality. <br> <br>Today is the day you need to keep moving. ");
	createElement("br");
	alarmClockBTN = createButton('Turn off Alarm Clock'); alarmClockBTN.style('background-color', 225, 35, 20);
	alarmClockBTN.mouseClicked(alarmClock);
	
}

function leaveToAdventure(){
	if(noSam = true){
		samOP.hide();
		samAbout.hide();	
	}

	if(noClothes == true){
		clothesBTN.hide();
		windowOp.hide();
		samB.hide();
	}
	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();
	intro.hide();
	beginIntro.hide();

	alarmClockBTN.hide();
	alarmClockP.hide();
	windowChoose.hide();
	continueStory.hide();
	clothesP.hide();
	darkRedButton.hide();

	daemonOp.hide();
	daemonBTN.hide();
	fleurishP.hide();
	fleurishBTN.hide();
	unwokenOp.hide();
	unwokenBTN.hide();

	wrapP = createP("You realize you must hurry before they find you <br> You make your way out of the door in a rush...");
	endingBTN = createButton("Push Open the Door");
	endingBTN.mouseClicked(onlyTheBeginning);

}

function endTooQuickly(){
	noPath = true;
	//hiding other scenes
	startingLine1.hide();
	startingLine2.hide();
	yesInput.hide();
	noInput.hide();

	background(0);

	quicklyHeading = createElement("h1","Just as quickly it ends, it can begin...");
	finalSaying = createP("The darkness has taken you too quickly.<br>		You must prepare yourself to face it.<br>			 Consider starting your story again?");
	createElement("br");
	resetStory = createButton("Your Story isnt over...");
	resetStory.mouseClicked(beginAlt);
	createElement("br");
	chooseEnding = createButton("or is it?");
	chooseEnding.mouseClicked(onlyTheBeginning);
	
}

function onlyTheBeginning(){
	//hiding other scenes
	background(0);
	//endScene.loadPixels();
	//image(endScene, 25, 25, 50, 50);
	if(noPath == true){
		quicklyHeading.hide();
		finalSaying.hide();
		resetStory.hide();
		chooseEnding.hide();
	}
	
	endingLine = createP("This story was only beginning...<br>		More will await you.<br>");
	createElement("br");
	createElement("br");
	createElement("br");
	createP("Fin~");

	//Implementing a static variable but it was not being loaded properly
	//loadImage('../videos/static.gif');

}

function draw(){
	//resetting background
	background(0);
}

function WindowResized(){
canvas = createCanvas(windowWidth, windowHeight);

}