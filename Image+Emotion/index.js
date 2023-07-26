prediction2 = "";
prediction1 = "";

Webcam.set({
    width:250,
    height:250,
    image_format:"png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');