nosex = 0;
nosey = 0;

function preload(){}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', getPoses);
}

function modalLoaded(){
    console.log("System has been setup")
}

function getPoses(result){
    if (result.length > 0){
        console.log("Result is more than one");
        nosex = result[0].pose.rightWrist.x;
        nosey = result[0].pose.rightWrist.y;
        console.log("Nose X = " + nosex);
        console.log("Nose Y = " + nosey);
    }
}

function draw(){
    image(video, 0, 0, 500, 500);
    fill("blue");
    stroke("blue");
    circle(nosex, nosey, 20);
}

function takeSnapshot(){
    save("yoursnaphostisuglyyoushouldntbetakinaphotoitssoguly.png");
}