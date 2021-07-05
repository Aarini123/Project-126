song="";
song1="";
song_status="";
song1_status="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
LeftwristScore=0;
RightwristScore=0;

function preload(){
song=loadSound("music.mp3");
song1=loadSound("music2.mp3");
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
      LeftwristScore=results[0].pose.keypoints[9].score;
      RightwristScore=results[0].pose.keypoints[10].score;

  } 
}


function modelLoaded(){
    console.log("M0dE!L0aDeD!");
}

function draw(){
    image(video,0,0,600,400);
    fill("#06003b");
    stroke("#06003b");
    song_status=song.isPlaying();
    song1_status=song1.isPlaying();
    if(LeftwristScore>0.2){
        circle(leftWristX,leftWristY,20);
song.stops();
if(song1_status==false){
    song1.play();
    document.getElementById("songName").innerHTML="Peter Pan song";
}
   
}
if(RightwristScore>0.2){
    circle(rightWristX,rightWristY,20);
song1.stops();
if(song_status==false){
song.play();
document.getElementById("songName").innerHTML="Harry Potter Theme song";
}

}


}

function play_music(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
