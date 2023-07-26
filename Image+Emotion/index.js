prediction2 = "";
prediction1 = "";

Webcam.set({
    width:450,
    height:450,
    image_format:"png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');