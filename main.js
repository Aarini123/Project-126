song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
song=loadSound("music.mp3");
}

function setup(){
    canvas= createCanvas(600,400);
    canvas.position(380,250);
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}

function gotposes(results){
  if (results.length>0){
      console.log(results);
      leftWristX=results[0].pose.leftWrist.x;
      leftWristY=results[0].pose.leftWrist.y;
      rightWristX=results[0].pose.rightWrist.x;
      rightWristY=results[0].pose.rightWrist.y;
  } 
}

function modelLoaded(){
    console.log("M0dE!L0aDeD!");
}

function draw(){
    image(video,0,0,600,400);
}

function play_music(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}