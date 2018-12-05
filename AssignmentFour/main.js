/*Data in p5; JSON + API

file:///C:/Users/Hayley/Documents/Art151/AssignmentThree/index.html

Make a weather application using your Open Weather API key. Combine this with another JSON file and find interesting relationships, or lack thereof, between weather and the data of your choice. 
For instance, instead of wind speed related to the speed of an object, maybe it’s related to the dimensions of an image from a Google image search of wind. 
Or maybe create a poetic composition with the weather conditions and a list of fruit.

Requirements:

use at least one DOM objects (text boxes, drop down menus, buttons)
use at least two JSON files (weather and JSON of your choice)

use callbacks

// var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=949e288a2554acb67d2e42cf6126bab7";

Using Drinks and Weather Data
Depending on the Weather (degree and how high/ low it is: recommend a drink!)
Example: if under 30 degrees F: Warm Drinks
		 if between 30 under 70 degrees F: Cool Drinks
		 if over 70 degrees F: COLD drinks

		 incorporate lack of sleep with type of drink

*/
var canvas;

//weather API variable and change updates
var weatherData;
var windSpeed;
var cityChoices;

// Drink JSON and change updates
var drinkData;
var allDrinks;
var chooseDrink;
var changeDrink;

//changing HTML fonts/ scenes
var startLine;
var startButton;
var locationLine;
var sleepLine;

var slep;
var hrs;

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago"; //starting city
var apiKey = "&units=imperial&appid=949e288a2554acb67d2e42cf6126bab7";

//var weatherURL= api + city + apiKey;

function preload() {
	loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=949e288a2554acb67d2e42cf6126bab7", gotWeatherData);
	drinkData = loadJSON("js/Drinks.json");
}

function changeCity() {
	weatherURL = api + cityChoices.value() + apiKey;
	loadJSON(weatherURL, gotWeatherData);

}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");
	
	//print(drinkData);
	allDrinks = drinkData.Drinks;
	console.log(allDrinks.length);

	begin();
	
}

function begin(){
	startLine = createElement('h1', "Hello Friend!");
	startButton = createButton('Hello');
	startButton.position(180, 200);
	startButton.mouseClicked(locationChoice);

}

function locationChoice(){
	startLine.hide();

	locationLine = createElement('h2', "Choose your location?");
	cityChoices = createSelect();
	cityChoices.position(windowWidth-20, windowHeight-80);
	// citySelect.option("");
	cityChoices.option("Chicago");
	cityChoices.option("Paris");
	cityChoices.option("Vancouver");
	cityChoices.option("Placeville");
	cityChoices.option("Tokyo");
	cityChoices.option("Hong Kong");
	cityChoices.option("Orlando");
	cityChoices.option("Kyoto");
	cityChoices.option("Las Vegas");
	cityChoices.option("Cardiff");
	cityChoices.changed(changeCity);

	drinkChoice();

}

function sleepAmount(){
	slep = chooseDrink.value();
	hrs = 0;
	if(slep == "0-2"){
		hrs = hrs + 0;
	}
	else if(slep  == "3-5"){
		hrs = hrs+1;
	}
	else if(slep  == "6-8"){
		hrs = hrs+2;
	}
	else if(slep  == "9-11"){
		hrs = hrs+3;
	}
	else if(slep  == "12+"){
		hrs = hrs+4;
	}
}

function drinkSelect() {
	var temp = cityChoices.value();

	if(temp < 30){
		changeDrink = 0 + sleepAmount();
	}
	else if(temp > 30 && temp < 70){
		changeDrink = ((drinkData.Drinks.length)/3) + sleepAmount();
	}
	else if(temp > 70){
		changeDrink = ((drinkData.Drinks.length)/3) + ((drinkData.Drinks.length)/3)+ sleepAmount();
	}
	
}

function drinkChoice(){
	startLine.hide();
	//locationLine.hide();

	sleepLine = createElement('h2', "How much sleep did you get last night?");
	createElement("br");

	chooseDrink = createSelect();
	chooseDrink.position(20, 200);
	chooseDrink.option("0-2");
	chooseDrink.option("3-5");
	chooseDrink.option("6-8");
	chooseDrink.option("9-11");
	chooseDrink.option("12+");
	chooseDrink.changed(drinkSelect);

	console.log(drinkData.Drinks.length);

}

function gotWeatherData(data) {

	weatherData = data;
	console.log(weatherData);
	console.log(weatherData.weather[0].description);
	console.log(weatherData.main.temp);
	console.log(weatherData.wind.speed);
}

function draw() {
	background(25);
	textSize(30);
	fill(0);
	if (cityChoices.changed) {
		text("The" + weatherData.weather[0].description + " in " + cityChoices.value() + "." + " The temperature is " + weatherData.main.temp + " degrees Fahrenheit and wind speed is " + weatherData.wind.speed + " MPH.", 20, windowheight/3);

		if (chooseDrink.mousePressed) {
			text("Due to how you slept for" + chooseDrink.value() + "hours, and in this current weather condition," + drinkData.Drinks[changeDrink] + "would be my recommendation" , 20, windowheight/2 );
			
		}
	}
}

function WindowResized() {
	canvas = createCanvas(windowWidth, windowHeight);
}

//text("Follow @boundless_endo on Instagram for more great music recommendations!", 10, 265);