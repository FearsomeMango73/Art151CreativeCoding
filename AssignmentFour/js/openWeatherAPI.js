var weatherData;
var canvas;
var windSpeed; 
var windX;
var fillTemp;

var randDino;
var dinos;

var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=949e288a2554acb67d2e42cf6126bab7";

function preload(){
	loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=949e288a2554acb67d2e42cf6126bab7", gotWeatherData);
	dinos = loadJSON("js/dinos.json");
}


function setup(){
	canvas= createCanvas(windowWidth, windowHeight);
	windX = windowWidth/2;

	//setInterval(updateWeather, 60000);
	//randDino = 
	console.log(dinos.dinosaurs.length);
	randDino = int(random(0, dinos.dinosaurs.length));
}

function updateWeather(){
 
 	loadJSON(weatherURL, gotWeatherData);

} 

function gotWeatherData(data){

	weatherData = data; 
	console.log(weatherData);
	console.log(weatherData.weather[0].description);
	console.log(weatherData.main.temp);
	console.log(weatherData.wind.speed);

}

function draw(){
	background(0, 255, 0);
	textSize(30);
	if(weatherData){
		fillTemp = weatherData.main.temp;
		var mappedFillTemp;
		mappedFillTemp = map(fillTemp, 0, 105, 0, 255);
		fill(mappedFillTemp, 30 ,150);
		windSpeed = weatherData.wind.speed;
		windX = windX + windSpeed;
		rect(windX, windowHeight/2, 50, 50); 
		text("The " + dinos.dinosaurs[randDino] + " is seeing " + weatherData.weather[0].description, 10, 40);

		if(windX > windowWidth){
			windX = 0;
		}

	}

}

/*
var weatherData;

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apiKey = "&units=imperial&appid=949e288a2554acb67d2e42cf6126bab7";

var citySelect;

function setup(){
 createCanvas(500, 500);

 citySelect = createSelect();
 citySelect.position(10,10);
 citySelect.option("Chicago");
 citySelect.option("New York");
 citySelect.option("Houston");
 citySelect.changed(changeCity);
}

function changeCity(){
 var weatherURL = api + citySelect.value() + apiKey;
 loadJSON(weatherURL, gotWeatherData);
}

function gotWeatherData(data){
	
	weatherData = data;
	console.log(weatherData); 
}

function draw(){
background(0);

if(weatherData){
	ellipse(width/2, height/2, weatherData.main.temp, weatherData.main.temp);

}

}
*/