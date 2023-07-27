prediction2 = "";
prediction1 = "";

Webcam.set({
    width:500,
    height:500,
    image_format:"png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captureimg" src="'+data_uri+'"/>';
    });
}

console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/5mxzZHkpx/model.json', modelLoaded);

function modelLoaded(){
    console.log('Modal Loaded');
}

function speak(){
    var synth = window.speechSynthesis;
    speekdata1 = "The First Prediction is " + prediction1;
    speekdata2 = "The Second Prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speekdata1 + speekdata2);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById("captureimg");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error)
    }
    else{
        console.log(results);
    }
    document.getElementById("resultemotionname").innerHTML = results[0].label;
    document.getElementById("resultemotionname2").innerHTML = results[1].label;
    prediction1 = results[0].label;
    prediction2 = results[1].label;
    speak();
}