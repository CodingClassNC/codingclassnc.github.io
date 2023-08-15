function preload(){
	// Nothing
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.parent('canvas-container'); 
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video, 0, 0, width, height); 
    tint(tint_color);
}

function filter_tint(){
    tint_color = document.getElementById('colorname').value;
}

function take_snapshot(){
    save('download.png');
}