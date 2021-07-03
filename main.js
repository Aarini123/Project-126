song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
LeftwristScore=0;
RightwristScore=0;

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
      LeftwristScore=results[0].pose.keypoints[9].score;

  } 
}


function modelLoaded(){
    console.log("M0dE!L0aDeD!");
}

function draw(){
    image(video,0,0,600,400);
    fill("#06003b");
    stroke("#06003b");
    if(LeftwristScore>0.2){
        circle(leftWristX,leftWristY,20);

        Yvalue=Number(leftWristY);
        Yvaluenum=floor(Yvalue);
        volume=Yvaluenum/400;
        document.getElementById("btn btn-info H3").innerHTML="Harry Potter Theme Song";
    }
    if(RightwristScore>0.2){
    Xvalue=Number(leftWristX);
    Xvaluenum=floor(Xvalue);
    volume2=Xvaluenum/400;
    document.getElementById("btn btn-info H3").innerHTML="Peter Pan";
    song.play("Groove Delgiht & Samantha Machado-Peter Pan(Official Lyric Video").mp3;
}
}

function play_music(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
