let classifier; 

function setup() {
    canvas = createCanvas(500, 500);
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
    reload(); 
}

function reload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function clearCanvas() {
    background(255);
}
function draw() {
    strokeWeight(13);
    stroke("red");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById("label").innerHTML = "Is this a " + results[0].label;
    document.getElementById("confidence").innerHTML = "Chance of ✅: " + Math.round(results[0].confidence * 100) + "%";
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    //synth.speak(utterThis);
}

