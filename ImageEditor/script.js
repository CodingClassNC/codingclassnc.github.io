const uploadInput = document.getElementById('upload');
const imgDisplay = document.getElementById('imgdisplay');
const img = document.getElementById("imgdisplay");
const saturationInput = document.getElementById("saturation");
const brightnessInput = document.getElementById("brightness");
const grayscaleInput = document.getElementById("grey");
const hueInput = document.getElementById("hue");
const highlightsInput = document.getElementById("highlights");
    uploadInput.addEventListener('change', function() {
        const selectedFile = uploadInput.files[0];
        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
            imgDisplay.src = objectURL;
        }
     });

brightnessInput.addEventListener("input", () => {
    const brightnessValue = brightnessInput.value;
    img.style.filter = `brightness(${brightnessValue}%)`;
});

saturationInput.addEventListener("input", () => {
    const saturationValue = saturationInput.value;
    img.style.filter = `saturate(${100 + saturationValue}%)`;
});

grayscaleInput.addEventListener("input", () => {
    const grayscaleValue = grayscaleInput.value;
    img.style.filter = `grayscale(${100 - grayscaleValue}%)`;
})

hueInput.addEventListener("input", () => {
    const hueValue = hueInput.value;
    img.style.filter = `hue-rotate(${hueValue}deg)`;
});

highlightsInput.addEventListener("input", () => {
    const highlightsValue = highlightsInput.value;
    img.style.filter = `brightness(${100 + highlightsValue}%)`;
});
