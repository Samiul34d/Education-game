const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare",
  },
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

let score = 0;

// Display quiz questions
function buildQuiz() {
  quizData.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionText = document.createElement('h3');
    questionText.textContent = `${index + 1}. ${question.question}`;
    questionDiv.appendChild(questionText);

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

    question.options.forEach((option) => {
      const optionButton = document.createElement('div');
      optionButton.classList.add('option');
      optionButton.textContent = option;
      optionButton.addEventListener('click', () => selectAnswer(option, question.answer, optionButton));
      optionsDiv.appendChild(optionButton);
    });

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
  });
}

// Handle answer selection
function selectAnswer(selectedOption, correctAnswer, optionButton) {
  const options = optionButton.parentElement.children;
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove('selected');
  }
  optionButton.classList.add('selected');

  if (selectedOption === correctAnswer) {
    score++;
  }
}

// Show results
function showResults() {
  resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

// Build the quiz when the page loads
buildQuiz();

// Submit button event listener
submitButton.addEventListener('click', showResults);