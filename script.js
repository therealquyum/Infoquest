let quiz = [

  {
    question: "What does rurality refer to?",
    options: [
      "Urban development",
      "Characteristics of non-urban areas",
      "Industrial growth",
      "City planning"
    ],
    answer: 1
  },

  {
    question: "Rural areas are typically characterized by:",
    options: [
      "High population density",
      "Limited access to services",
      "Advanced infrastructure",
      "Heavy industries"
    ],
    answer: 1
  },

  {
    question: "Rural economies mainly depend on:",
    options: [
      "Banking",
      "Technology",
      "Agriculture and small-scale industries",
      "Aviation"
    ],
    answer: 2
  },

  {
    question: "Rural communities are best described as:",
    options: [
      "Highly industrialized groups",
      "Groups sharing social and cultural traits",
      "Isolated individuals",
      "Urban migrants"
    ],
    answer: 1
  },

  {
    question: "A key feature of rural communities is:",
    options: [
      "Weak social ties",
      "Strong social ties",
      "High digital literacy",
      "Urban lifestyle"
    ],
    answer: 1
  }

];

let currentQuestion = 0;
let userAnswer = [];
let submitQuestion = false;

loadQuestion();

function loadQuestion() {

  let question = document.getElementById("question");
  let optionsBox = document.getElementById("optionsBox");
  let questionNo = document.getElementById("questionNo");

  question.innerHTML = quiz[currentQuestion].question;
  questionNo.textContent = `Question ${currentQuestion + 1} of ${quiz.length}`;
  optionsBox.innerHTML = "";

  let letters = ["A", "B", "C", "D"];

  quiz[currentQuestion].options.forEach(function(eachOption, index) {

    let button = document.createElement("button");
    button.innerHTML = "(" + letters[index] + "). " + eachOption;

    // restore selected option
    if (userAnswer[currentQuestion] === index) {
      button.classList.add("selected");
    }

    // click event
    button.onclick = function () {
      if (submitQuestion) return; // stop clicking after submit

      let allButtons = optionsBox.querySelectorAll("button");
      allButtons.forEach(function (btn) {
        btn.classList.remove("selected");
      });

      button.classList.add("selected");
      userAnswer[currentQuestion] = index;
    };

    // ✅ SHOW ANSWERS AFTER SUBMIT
    if (submitQuestion) {
      let correctIndex = quiz[currentQuestion].answer;

      if (index === correctIndex) {
        button.classList.add("correct");
      }

      if (index === userAnswer[currentQuestion] && index !== correctIndex) {
        button.classList.add("wrong");
      }

      button.disabled = true;
    }

    optionsBox.appendChild(button);
  });

  progressBar();
}


// NEXT BUTTON
function nextQuestion() {
  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
}


// PREVIOUS BUTTON
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}


// PROGRESS BAR
function progressBar() {
  let progressBox = document.getElementById("progressBar");

  let progress = ((currentQuestion + 1) / quiz.length) * 100;

  progressBox.style.width = progress + "%";
  progressBox.textContent = progress.toFixed(1) + "%";
}


function submitQuiz() {

  // ✅ BLOCK empty submission
  if (userAnswer.length < quiz.length || userAnswer.includes(undefined)) {
    alert("Please answer all questions before submitting.");
    return;
  }

  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
    if (userAnswer[i] === quiz[i].answer) {
      score++;
    }
  }

  submitQuestion = true;
  displayResults(score);
  loadQuestion();
  // inside submitQuiz()
document.getElementById("restartBtn").style.display = "block";
}

// DISPLAY RESULT
function displayResults(score) {
  let userScore = document.getElementById("score");
  userScore.innerHTML = `Your Score is : ${score}/${quiz.length}`;
}
function restartQuiz() {
  currentQuestion = 0;
  userAnswer = [];
  submitQuestion = false;

  document.getElementById("score").innerHTML = "";

  // ✅ HIDE restart button again
  document.getElementById("restartBtn").style.display = "none";

  loadQuestion();
}


