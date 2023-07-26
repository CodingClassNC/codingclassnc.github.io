function checkPassword() {
  const password = document.getElementById('input').value;
  const result = document.getElementById('result');

  const uppercase = /[A-Z]/.test(password);
  const lowercase = /[a-z]/.test(password);
  const number = /\d/.test(password);
  const symbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

  if (password.length < 8 || !uppercase || !lowercase || !number || !symbol) {
    let message = "Password is incorrect:<br>";

    if (password.length < 8) {
      message += "<span class='error'>Has less than 8 characters</span><br>";
    }
    if (!uppercase) {
      message += "<span class='error'>Requires an Uppercase letter</span><br>";
    }
    if (!lowercase) {
      message += "<span class='error'>Requires a Lowercase letter</span><br>";
    }
    if (!number) {
      message += "<span class='error'>Requires a Number</span><br>";
    }
    if (!symbol) {
      message += "<span class='error'>Requires a Symbol</span><br>";
    }

    result.innerHTML = message;
  } else {
    result.innerHTML = "<span class='correct'>Password is correct</span>";
  }
}

function reset() {
  document.getElementById('input').value = '';
  document.getElementById('result').innerHTML = '';
}


function generatePassword() {
  const result = document.getElementById('result');
  const requiredSymbols = "!@#$%^&*()_+{}[]:;<>,.?~-";
  const requiredNumbers = "0123456789";
  const requiredUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const requiredLowercase = "abcdefghijklmnopqrstuvwxyz";
  const additionalCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]:;<>,.?~-";
  let generatedPassword = "";
  generatedPassword += requiredSymbols.charAt(Math.floor(Math.random() * requiredSymbols.length));
  generatedPassword += requiredNumbers.charAt(Math.floor(Math.random() * requiredNumbers.length));
  generatedPassword += requiredUppercase.charAt(Math.floor(Math.random() * requiredUppercase.length));
  generatedPassword += requiredLowercase.charAt(Math.floor(Math.random() * requiredLowercase.length));
  for (let i = 0; i < 4; i++) {
    generatedPassword += additionalCharacters.charAt(Math.floor(Math.random() * additionalCharacters.length));
  }

  result.innerHTML = 'Generated Password: ' + generatedPassword;
}
