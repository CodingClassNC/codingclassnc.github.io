let wordToGuess = ""; 
let guessedLetters = [];
let remainingAttempts = 7;

const hangmanAnimation = document.getElementById("hangman-animation");
const wordDisplay = document.getElementById("word-display");
const guessesDisplay = document.getElementById("guesses");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");

function fetchRandomWord() {
    return fetch("https://random-word-api.herokuapp.com/word?length=8")
        .then(response => response.json())
        .then(data => data[0].toUpperCase())
        .catch(error => {
            console.error("Error fetching random word:", error);
            return null;
        });
}

function updateHangmanAnimation() {
    hangmanAnimation.src = `images/hangman_${7 - remainingAttempts}.png`;
}

function updateWordDisplay() {
    let display = "";
    for (const letter of wordToGuess) {
        if (guessedLetters.includes(letter)) {
            display += letter;
        } else {
            display += "_ ";
        }
    }
    wordDisplay.textContent = display.trim(); 
}


function updateGuessesDisplay() {
    guessesDisplay.textContent = `Guessed Letters: ${guessedLetters.join(", ")}`;
}

function checkWinLoss() {
    if (wordToGuess === wordDisplay.textContent) {
        alert("Congratulations, you've guessed the word!");
    } else if (remainingAttempts === 0) {
        alert(`Sorry, you're out of attempts. The word was: ${wordToGuess}`);
    }
}

guessButton.addEventListener("click", async () => {
    if (!wordToGuess) {
        wordToGuess = await fetchRandomWord();
        if (!wordToGuess) {
            alert("Failed to fetch a random word. Please try again later.");
            return;
        }
        updateWordDisplay();
    }

    const guess = guessInput.value.toUpperCase();

    if (!guess || guessedLetters.includes(guess)) {
        return;
    }

    guessedLetters.push(guess);

    if (!wordToGuess.includes(guess)) {
        remainingAttempts--;
        updateHangmanAnimation();
    }

    updateWordDisplay();
    updateGuessesDisplay();
    checkWinLoss();

    guessInput.value = ""; 
});

updateHangmanAnimation();
