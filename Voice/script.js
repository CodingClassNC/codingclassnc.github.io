function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier(
    'https://teachablemachine.withgoogle.com/models/f9ME_i41o/model.json',
    modalReady
  );
}

function modalReady() {
  classifier.classify(gotResult);
  console.log("modalLoaded");
}

function gotResult(error, results) {
  if (error) {
    console.error("ERROR: You have failed in life.. 😭😭😭😭😭😭😭😢😢😿😿😿");
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById('result').innerHTML =
      'I Can Hear A : ' + results[0].label;
    document.getElementById('accuracy').innerHTML =
      'Accuracy: ' + (results[0].confidence * 100).toFixed(2) + '%';
    document.getElementById('result').style.color =
      'rgb(' + random_number_r + ' , ' + random_number_g + ', ' + random_number_b + ')';
    document.getElementById('accuracy').style.color =
      'rgb(' + random_number_r + ' , ' + random_number_g + ', ' + random_number_b + ')';
  }
}
