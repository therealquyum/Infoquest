let quiz = [

  {
    question: "What is cataloguing in Library and Information Science?",
    options: [
      "Issuing books to users",
      "Binding of books",
      "Describing and listing library materials systematically",
      "Arranging books on shelves"
    ],
    answer: 2
  },

  {
    question: "Classification in LIS refers to:",
    options: [
      "Selling books",
      "Assigning subjects to materials for organization",
      "Grouping books randomly",
      "Writing books"
    ],
    answer: 1
  },

  {
    question: "Who developed the Dewey Decimal Classification?",
    options: [
      "Charles Cutter",
      "Melvil Dewey",
      "Paul Otlet",
      "S. R. Ranganathan"
    ],
    answer: 1
  },

  {
    question: "The main purpose of a library catalogue is to:",
    options: [
      "Help users locate materials",
      "Store books",
      "Bind journals",
      "Decorate the library"
    ],
    answer: 0
  },

  {
    question: "OPAC stands for:",
    options: [
      "Open Public Access Center",
      "Online Private Access Catalogue",
      "Online Public Access Catalogue",
      "Official Public Access Code"
    ],
    answer: 2
  },

  {
    question: "Which classification scheme uses facets?",
    options: [
      "Colon Classification",
      "DDC",
      "UDC",
      "LCC"
    ],
    answer: 0
  },

  {
    question: "The Five Laws of Library Science were proposed by:",
    options: [
      "Melvil Dewey",
      "Cutter",
      "S. R. Ranganathan",
      "Otlet"
    ],
    answer: 2
  },

  {
    question: "Reference services in libraries involve:",
    options: [
      "Printing documents",
      "Assisting users to find information",
      "Binding books",
      "Selling books"
    ],
    answer: 1
  },

  {
    question: "Which of the following is a primary source?",
    options: [
      "Encyclopedia",
      "Index",
      "Textbook",
      "Diary"
    ],
    answer: 3
  },

  {
    question: "Information literacy means:",
    options: [
      "Reading books only",
      "Writing stories",
      "Ability to locate, evaluate and use information",
      "Printing documents"
    ],
    answer: 2
  },

  {
    question: "Abstracting is:",
    options: [
      "Writing full text",
      "Binding journals",
      "Summarizing documents",
      "Classifying books"
    ],
    answer: 2
  },

  {
    question: "Indexing helps to:",
    options: [
      "Store books",
      "Retrieve information easily",
      "Print documents",
      "Decorate books"
    ],
    answer: 1
  },

  {
    question: "A bibliography is:",
    options: [
      "A journal",
      "A story book",
      "List of books on a subject",
      "A newspaper"
    ],
    answer: 2
  },

  {
    question: "Library automation refers to:",
    options: [
      "Reading books",
      "Use of ICT in library operations",
      "Writing books",
      "Manual processes"
    ],
    answer: 1
  },

  {
    question: "Which is a digital library?",
    options: [
      "Mobile library",
      "Physical books only",
      "Library with electronic resources",
      "School library"
    ],
    answer: 2
  },

  {
    question: "Metadata is:",
    options: [
      "Journals",
      "Data about data",
      "Books",
      "Libraries"
    ],
    answer: 1
  },

  {
    question: "The acronym ISBN stands for:",
    options: [
      "Internal System Book Number",
      "International Standard Book Number",
      "Index Standard Book Number",
      "International System Book Name"
    ],
    answer: 1
  },

  {
    question: "ISSN is used for:",
    options: [
      "Maps",
      "Newspapers only",
      "Journals",
      "Books"
    ],
    answer: 2
  },

  {
    question: "Selective Dissemination of Information (SDI) is:",
    options: [
      "Providing users with relevant current information",
      "Selling books",
      "Random information sharing",
      "Storing information"
    ],
    answer: 0
  },

  {
    question: "Current Awareness Service (CAS) is used to:",
    options: [
      "Update users with recent information",
      "Provide old information",
      "Store books",
      "Bind journals"
    ],
    answer: 0
  },

  {
    question: "A thesaurus in LIS is:",
    options: [
      "Story book",
      "Dictionary",
      "Controlled vocabulary tool",
      "Journal"
    ],
    answer: 2
  },

  {
    question: "Which is NOT a type of library?",
    options: [
      "Public library",
      "Academic library",
      "Cooking library",
      "Digital library"
    ],
    answer: 2
  },

  {
    question: "Preservation in libraries involves:",
    options: [
      "Protecting library materials",
      "Writing books",
      "Selling books",
      "Destroying books"
    ],
    answer: 0
  },

  {
    question: "Acquisition in libraries means:",
    options: [
      "Binding books",
      "Obtaining library materials",
      "Reading books",
      "Discarding books"
    ],
    answer: 1
  },

  {
    question: "Which tool is used for classification?",
    options: [
      "Atlas",
      "DDC",
      "Dictionary",
      "Encyclopedia"
    ],
    answer: 1
  },

  {
    question: "Library users are also called:",
    options: [
      "Patrons",
      "Clients",
      "Readers",
      "All of the above"
    ],
    answer: 3
  },

  {
    question: "An encyclopedia is best used for:",
    options: [
      "Fiction reading",
      "In-depth research",
      "Quick facts",
      "Newspapers"
    ],
    answer: 2
  },

  {
    question: "Interlibrary loan allows:",
    options: [
      "Binding books",
      "Selling books",
      "Borrowing from other libraries",
      "Buying books"
    ],
    answer: 2
  },

  {
    question: "Information retrieval system is used to:",
    options: [
      "Print books",
      "Bind books",
      "Store books",
      "Retrieve relevant information"
    ],
    answer: 3
  },

  {
    question: "Which is an example of a secondary source?",
    options: [
      "Diary",
      "Letter",
      "Interview",
      "Research article review"
    ],
    answer: 3
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


