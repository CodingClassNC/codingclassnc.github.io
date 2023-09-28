var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start(){
    document.getElementById("output").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log("An Event Happened! No Way 💀💀");
    var content = event.results[0][0].transcript;
    console.log("Content got a life 💀") ;
    document.getElementById("output").innerHTML = content;
    if (content == 'take my selfie'){
        console.log("Taking Selfie")
        speak();
    }
} 

function speak(){
    var synth = window.speechSynthesis;
    speakData = "Taking Selfie in 5 Seconds..."
    var utterThis = new SpeechSynthesisUtterance(speakData);
    camera = document.getElementById("webcam");
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
        save();
    }, 5000);
}


Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality:45
});

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML = '<img id="captureimg" src="'+data_uri+'"/>';
    });
}

function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}


function save() {
    const imgSrc = document.getElementById("captureimg").src;
    const blob = dataURItoBlob(imgSrc);
    const blobUrl = URL.createObjectURL(blob);

    const link = document.getElementById("link");
    link.href = blobUrl;
    link.download = "download.png"; 
    link.click();
    URL.revokeObjectURL(blobUrl);
}
