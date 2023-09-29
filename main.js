noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550,350);
    canvas = createCanvas(550 , 350);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',getPoses);
}

function draw(){
 background('#66ff33'); 
 fill('#ff052b');
 stroke('#fff705');
 square(noseX,noseY,difference);
}
function modalLoaded() {
    console.log("Posenet Intialized")
}


function getPoses(results) {
    if (results.length > 0){
        console.log(results); 
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = "+noseX + "Nose Y = "+ noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX + "difference = "+  difference);
    }
}