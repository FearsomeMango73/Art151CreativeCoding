/*
Using p5, create an interactive narrative web app that uses interactive HTML elements such as sliders, buttons, clicks, text boxes, etc. and CSS styling. This narrative can be whatever you want, from something mundane like grocery shopping, to something abstract like plants having a conversations or creating a looping narrative playing with ideas of time and space.

For the project:

Create at least 3 different “scenes” that are triggered by different interactions.
Use at least 3 different HTML input elements to progress the narrative.
Every new scene should have an interactive element on the page

*/

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
