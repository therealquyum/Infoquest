<<<<<<< HEAD
let quiz = [

{
question: "Who is responsible for managing and preserving library collections?",
options: [
"Librarian",
"Accountant",
"Teacher",
"Engineer"
],
answer: "Librarian"
},

{
question: "What does OPAC stand for in library science?",
options: [
"Online Public Access Catalogue",
"Open Public Access Center",
"Online Private Access Catalogue",
"Official Public Access Catalogue"
],
answer: "Online Public Access Catalogue"
},

{
question: "Which classification system is widely used in many libraries?",
options: [
"Dewey Decimal Classification",
"Binary Classification",
"Simple Numeric System",
"Internet Classification"
],
answer: "Dewey Decimal Classification"
},

{
question: "The main purpose of a library catalogue is to:",
options: [
"Decorate the library",
"Help users locate materials",
"Sell books",
"Store computers"
],
answer: "Help users locate materials"
},

{
question: "Who developed the Dewey Decimal Classification system?",
options: [
"Melvil Dewey",
"S.R. Ranganathan",
"Charles Cutter",
"Paul Otlet"
],
answer: "Melvil Dewey"
},

{
question: "What is the term for organizing books according to subject?",
options: [
"Classification",
"Circulation",
"Binding",
"Digitization"
],
answer: "Classification"
},

{
question: "Which section of the library is responsible for lending books to users?",
options: [
"Reference section",
"Circulation section",
"Cataloguing section",
"Archive section"
],
answer: "Circulation section"
},

{
question: "Which professional is known as the father of Library Science in India?",
options: [
"S.R. Ranganathan",
"Melvil Dewey",
"Paul Otlet",
"Charles Cutter"
],
answer: "S.R. Ranganathan"
},

{
question: "What is the main function of the reference section in a library?",
options: [
"To sell books",
"To assist users with information queries",
"To bind books",
"To print books"
],
answer: "To assist users with information queries"
},

{
question: "Which law of library science states 'Books are for use'?",
options: [
"Second law",
"First law",
"Third law",
"Fifth law"
],
answer: "First law"
},

{
question: "A library that serves students and staff of a university is called:",
options: [
"School library",
"Public library",
"Academic library",
"National library"
],
answer: "Academic library"
},

{
question: "Which type of library is open to the general public?",
options: [
"Special library",
"Public library",
"Private library",
"School library"
],
answer: "Public library"
},

{
question: "Cataloguing in a library mainly involves:",
options: [
"Describing and listing library materials",
"Buying books",
"Cleaning books",
"Repairing books"
],
answer: "Describing and listing library materials"
},

{
question: "Which tool helps users find the location of a book in the library?",
options: [
"Catalogue",
"Printer",
"Scanner",
"Notebook"
],
answer: "Catalogue"
},

{
question: "The process of lending books to users is known as:",
options: [
"Circulation",
"Cataloguing",
"Indexing",
"Binding"
],
answer: "Circulation"
},

{
question: "Which library material provides summarized information about a topic?",
options: [
"Dictionary",
"Encyclopedia",
"Abstract",
"Magazine"
],
answer: "Abstract"
},

{
question: "Which of the following is a reference material?",
options: [
"Novel",
"Dictionary",
"Comic",
"Storybook"
],
answer: "Dictionary"
},

{
question: "The place where rare and historical documents are preserved is called:",
options: [
"Archive",
"Classroom",
"Laboratory",
"Workshop"
],
answer: "Archive"
},

{
question: "Which library service helps users learn how to use library resources?",
options: [
"User education",
"Book repair",
"Binding service",
"Shelving"
],
answer: "User education"
},

{
question: "What is the process of arranging books on shelves called?",
options: [
"Shelving",
"Printing",
"Circulation",
"Scanning"
],
answer: "Shelving"
},

{
question: "Which type of library focuses on a specific subject area?",
options: [
"Special library",
"Public library",
"School library",
"Mobile library"
],
answer: "Special library"
},

{
question: "A digital library mainly stores information in:",
options: [
"Printed form",
"Electronic form",
"Stone tablets",
"Paper cards"
],
answer: "Electronic form"
},

{
question: "Which device is commonly used to digitize books and documents?",
options: [
"Scanner",
"Printer",
"Speaker",
"Keyboard"
],
answer: "Scanner"
},

{
question: "The act of describing the physical details of a book is called:",
options: [
"Bibliographic description",
"Binding",
"Scanning",
"Publishing"
],
answer: "Bibliographic description"
},

{
question: "Which professional organizes and manages information resources?",
options: [
"Librarian",
"Doctor",
"Lawyer",
"Architect"
],
answer: "Librarian"
},

{
question: "Which law of library science states 'Save the time of the reader'?",
options: [
"Fourth law",
"Second law",
"First law",
"Fifth law"
],
answer: "Fourth law"
},

{
question: "Which type of library is found in primary and secondary schools?",
options: [
"School library",
"National library",
"Special library",
"Public library"
],
answer: "School library"
},

{
question: "The process of assigning subject headings to books is called:",
options: [
"Subject cataloguing",
"Binding",
"Printing",
"Shelving"
],
answer: "Subject cataloguing"
},

{
question: "A list of books and materials owned by a library is called:",
options: [
"Catalogue",
"Index",
"Dictionary",
"Register"
],
answer: "Catalogue"
},

{
question: "Which law of library science states 'The library is a growing organism'?",
options: [
"Fifth law",
"Second law",
"Third law",
"Fourth law"
],
answer: "Fifth law"
}

];


let currentQuestion = 0;
let userAnswer = [];
let quizSubmitted =  false;
loadQuestion();

function loadQuestion(){
    let question = document.getElementById("question");
    let optionsBox = document.getElementById("optionBox");

    question.innerHTML = quiz[currentQuestion].question;
    optionsBox.innerHTML = "";

    quiz[currentQuestion].options.forEach(function(eachOption){
        let button = document.createElement("button");
        button.innerHTML = eachOption;
        if (userAnswer[currentQuestion] === eachOption){
        button.classList.add("selected");
        }
button.onclick =function(){
        let allbuttons = optionsBox.querySelectorAll("button");
        allbuttons.forEach(function(btn){
            btn.classList.remove("selected")
        });
        button.classList.add("selected");

    }
        optionsBox.appendChild(button)
    }) ;
    
}
=======
let quiz = [

{
question: "Who is responsible for managing and preserving library collections?",
options: [
"Librarian",
"Accountant",
"Teacher",
"Engineer"
],
answer: "Librarian"
},

{
question: "What does OPAC stand for in library science?",
options: [
"Online Public Access Catalogue",
"Open Public Access Center",
"Online Private Access Catalogue",
"Official Public Access Catalogue"
],
answer: "Online Public Access Catalogue"
},

{
question: "Which classification system is widely used in many libraries?",
options: [
"Dewey Decimal Classification",
"Binary Classification",
"Simple Numeric System",
"Internet Classification"
],
answer: "Dewey Decimal Classification"
},

{
question: "The main purpose of a library catalogue is to:",
options: [
"Decorate the library",
"Help users locate materials",
"Sell books",
"Store computers"
],
answer: "Help users locate materials"
},

{
question: "Who developed the Dewey Decimal Classification system?",
options: [
"Melvil Dewey",
"S.R. Ranganathan",
"Charles Cutter",
"Paul Otlet"
],
answer: "Melvil Dewey"
},

{
question: "What is the term for organizing books according to subject?",
options: [
"Classification",
"Circulation",
"Binding",
"Digitization"
],
answer: "Classification"
},

{
question: "Which section of the library is responsible for lending books to users?",
options: [
"Reference section",
"Circulation section",
"Cataloguing section",
"Archive section"
],
answer: "Circulation section"
},

{
question: "Which professional is known as the father of Library Science in India?",
options: [
"S.R. Ranganathan",
"Melvil Dewey",
"Paul Otlet",
"Charles Cutter"
],
answer: "S.R. Ranganathan"
},

{
question: "What is the main function of the reference section in a library?",
options: [
"To sell books",
"To assist users with information queries",
"To bind books",
"To print books"
],
answer: "To assist users with information queries"
},

{
question: "Which law of library science states 'Books are for use'?",
options: [
"Second law",
"First law",
"Third law",
"Fifth law"
],
answer: "First law"
},

{
question: "A library that serves students and staff of a university is called:",
options: [
"School library",
"Public library",
"Academic library",
"National library"
],
answer: "Academic library"
},

{
question: "Which type of library is open to the general public?",
options: [
"Special library",
"Public library",
"Private library",
"School library"
],
answer: "Public library"
},

{
question: "Cataloguing in a library mainly involves:",
options: [
"Describing and listing library materials",
"Buying books",
"Cleaning books",
"Repairing books"
],
answer: "Describing and listing library materials"
},

{
question: "Which tool helps users find the location of a book in the library?",
options: [
"Catalogue",
"Printer",
"Scanner",
"Notebook"
],
answer: "Catalogue"
},

{
question: "The process of lending books to users is known as:",
options: [
"Circulation",
"Cataloguing",
"Indexing",
"Binding"
],
answer: "Circulation"
},

{
question: "Which library material provides summarized information about a topic?",
options: [
"Dictionary",
"Encyclopedia",
"Abstract",
"Magazine"
],
answer: "Abstract"
},

{
question: "Which of the following is a reference material?",
options: [
"Novel",
"Dictionary",
"Comic",
"Storybook"
],
answer: "Dictionary"
},

{
question: "The place where rare and historical documents are preserved is called:",
options: [
"Archive",
"Classroom",
"Laboratory",
"Workshop"
],
answer: "Archive"
},

{
question: "Which library service helps users learn how to use library resources?",
options: [
"User education",
"Book repair",
"Binding service",
"Shelving"
],
answer: "User education"
},

{
question: "What is the process of arranging books on shelves called?",
options: [
"Shelving",
"Printing",
"Circulation",
"Scanning"
],
answer: "Shelving"
},

{
question: "Which type of library focuses on a specific subject area?",
options: [
"Special library",
"Public library",
"School library",
"Mobile library"
],
answer: "Special library"
},

{
question: "A digital library mainly stores information in:",
options: [
"Printed form",
"Electronic form",
"Stone tablets",
"Paper cards"
],
answer: "Electronic form"
},

{
question: "Which device is commonly used to digitize books and documents?",
options: [
"Scanner",
"Printer",
"Speaker",
"Keyboard"
],
answer: "Scanner"
},

{
question: "The act of describing the physical details of a book is called:",
options: [
"Bibliographic description",
"Binding",
"Scanning",
"Publishing"
],
answer: "Bibliographic description"
},

{
question: "Which professional organizes and manages information resources?",
options: [
"Librarian",
"Doctor",
"Lawyer",
"Architect"
],
answer: "Librarian"
},

{
question: "Which law of library science states 'Save the time of the reader'?",
options: [
"Fourth law",
"Second law",
"First law",
"Fifth law"
],
answer: "Fourth law"
},

{
question: "Which type of library is found in primary and secondary schools?",
options: [
"School library",
"National library",
"Special library",
"Public library"
],
answer: "School library"
},

{
question: "The process of assigning subject headings to books is called:",
options: [
"Subject cataloguing",
"Binding",
"Printing",
"Shelving"
],
answer: "Subject cataloguing"
},

{
question: "A list of books and materials owned by a library is called:",
options: [
"Catalogue",
"Index",
"Dictionary",
"Register"
],
answer: "Catalogue"
},

{
question: "Which law of library science states 'The library is a growing organism'?",
options: [
"Fifth law",
"Second law",
"Third law",
"Fourth law"
],
answer: "Fifth law"
}

];


let currentQuestion = 0;
let userAnswers = [];


function loadQuestion() {
    let question = document.getElementById("question");
    let optionsDiv = document.getElementById("optionsBox");

    question.innerHTML = quiz[currentQuestion].question;
    optionsDiv.innerHTML = "";

    quiz[currentQuestion].options.forEach(function(oneOption){
        let button = document.createElement("button");
        button.innerHTML = oneOption;

        if(userAnswers[currentQuestion] === oneOption  ){
            button.classList.add("selected");
        }
        button.onclick = function(){
            userAnswers[currentQuestion] = oneOption;
            let allButtons = optionsDiv.querySelectorAll("button");
               
            allButtons.forEach(function(btn){
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

        }
        optionsDiv.appendChild(button)
        
    });

}


function nextQuestion(){
    currentQuestion++;

    if(currentQuestion < quiz.length){
    loadQuestion();
}
else{
    showScore();
}

}



function showScore() {
    let score = 0;{
        for (let i = 0 ; i < quiz.length; i++){
            if(userAnswers[i]=== quiz[i].answer){
                score++;
            }
        }
    }
    question.innerHTML= `Quiz finished`;
    optionsBox.innerHTML =``;
     let userScore = document.getElementById("score");
     userScore.innerHTML = `
     Your Score is : ${score}/${quiz.length}`
     


}
loadQuestion();
>>>>>>> c2c4ff0c988857089692b4e236c400484cee1555
