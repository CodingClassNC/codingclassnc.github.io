const scoreElement = document.getElementById('score');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const difficultyButtons = document.querySelectorAll('.difficulty');

let score = 0;
let isGameOver = false;
let currentCorrectAnswer = '';
let selectedDifficulty = 'normal';

const questionsAndAnswers = {
    easy: [
      { question: "What is 3 + 5?", answer: "8" },
      { question: "What is 10 - 4?", answer: "6" },
      { question: "What is 6 * 2?", answer: "12" },
      { question: "What is 15 / 3?", answer: "5" },
    ],
    normal: [
      { question: "What is 17 + 8?", answer: "25" },
      { question: "What is 48 / 2 - 10?", answer: "14" },
      { question: "What is 3^2 + 4 * 2?", answer: "19" },
      { question: "What is 25 / (5 - 2)?", answer: "8.33" },
    ],
    hard: [
      { question: "What is 82 * (4 + 3)?", answer: "574" },
      { question: "Simplify: 6^2 + 3 * (9 / 3) - 15", answer: "30" },
      { question: "What is (16 + 8) / 2 * 3?", answer: "36" },
      { question: "What is 100 / (5 * 2) + 7?", answer: "17" },
      { question: "What is 2^4 + 5 * (16 / 4) + 10?", answer: "47" },
      { question: "What is 48 / (3 + 1) + (12 * 2)?", answer: "36" },
    ]
  };
  

const generateQuestion = () => {
  const selectedLevel = questionsAndAnswers[selectedDifficulty];
  const randomIndex = Math.floor(Math.random() * selectedLevel.length);
  const { question, answer } = selectedLevel[randomIndex];
  
  questionElement.textContent = question;
  currentCorrectAnswer = answer.toLowerCase();
};

const checkAnswer = () => {
  if (isGameOver) return;

  const userAnswer = answerInput.value.trim().toLowerCase();

  if (userAnswer === currentCorrectAnswer) {
    score += 1;
    scoreElement.textContent = score;
    answerInput.value = '';
    generateQuestion(); 
  } else {
    questionElement.textContent = 'Wrong answer. Try again:';
  }
};

const endGame = () => {
  isGameOver = true;
  questionElement.textContent = 'Game Over! Final Score: ' + score;
  answerInput.disabled = true;
};

submitButton.addEventListener('click', checkAnswer);

answerInput.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});

difficultyButtons.forEach(button => {
  button.addEventListener('click', () => {
    difficultyButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    selectedDifficulty = button.id;
    generateQuestion();
  });
});

generateQuestion();
setTimeout(endGame, 60000);
