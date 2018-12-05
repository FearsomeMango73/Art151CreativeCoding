
var T1000;
var playButton;
var vidPlaying = false;
var videos = ['T1000 Reforming','t2VidGame'];
var vidSelect;

var pulsar;

function setup() {
  // canvas = createCanvas(windowWidth, windowHeight);
  // canvas.style('z-index', '-1

  pulsar = createAudio('audio/pulsar.mp3');

  
  T1000 =createVideo(['']);
  T1000.hide();

  vidSelect = createSelect();
  vidSelect.position();
  for( i = 0; i < videos.length; i++){
  	vidSelect.option(videos[i]);
  }
  vidSelect.change(changeVid);

  
  T1000 = createVideo(['videos/T1000 Reforming.mp4']);
  
  playButton = crateButton('Play Video');
  playButton.mousePressed(playVid);
  playButton.position(10,35);
  	//t1000.loop();
  
}

function playVid(){
	if( vidPlaying == true){
		T1000.pause();
		playButton.html();
	}
	else{
		T1000.play();
		T1000.loop().time(10);
		T1000.volume(.3);
		T1000.speed(2);

	}


}

function draw(){
	 T1000.showControls();
	if(mouseIsPressed == true){
	  T1000.play();
	T1000.loop();
	}else{
	  T1000.pause();
	}

}





