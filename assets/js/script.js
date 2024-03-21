
// This ensures that the javacode doesn´t run before html is fully loaded

document.addEventListener("DOMContentLoaded", function() {


// An array with questions with four options with one correct answer 

var myQuestions = [
    {
    question:"Who holds the world record in 100 meter sprint?",
    options: ["Tyson Gay", "Asafa Powell", "Maurice Green", "Usain Bolt"],
    answer: "Usain Bolt"
},

    {
    question:"Which country has won the most World cups in football?",
    options: ["Netherlands", "Germany", "Brazil", "Argentina"],
    answer: "Brazil"
},
   
    {
    question:"Who was the premier league top scorer 22/23?",
    options: ["Harry Kane", "Erling Haaland", "Mohammed Salah", "Marcus Rashford"],
    answer: "Erling Haaland"
},

    {
    question:"In which sport do teams compete to win the Stanley Cup?",
    options: ["Tennis", "Hockey", "Rugby", "Basketball",],
    answer: "Hockey"
},

    {
    question:"How many career goals has Lionel Messi scored?",
    options: ["More than 800", "less than 700", "More than 1000", "More than 900"],
    answer: "More than 800"
},
];

// vaiables
const quiz = document.getElementById("question");
let answer = document.getElementsByClassName("answer");
let aText = document.getElementById("a_text");
let bText = document.getElementById("b_text");
let cText = document.getElementById("c_text");
let dText = document.getElementById("d_text");
let submitButton = document.getElementById("submit");

// Declare staring score

var startingAnswer = 0;

submitButton.addEventListener("click", result);

function result(){
    var userAnswer;
    
    // Loop
    for (var i = 0; i < answer.length; i++) {
        if (answer[i].checked) {
            userAnswer = answer[i].value;
            break;
        }
    }

    if (userAnswer === myQuestions.length) {
        alert("That is correct!");
    }  else {
        alert("Sorry that is is not correct. The correct answer is:" + myQuestions[firstAnswer].answer);
    }

    firstAnswer++;

    if (firstAnswer === myQuestions.lenght) {
        alert("Contratulations, you´ve finished")
    } else {
        loadQuestion(firstAnswer);
    }
}

function loadQuestion() {
     quiz.textContent = myQuestions.question;
     aText.textContent = myQuestions.question[0];
     bText.textContent = myQuestions.question[1];
     cText.textContent = myQuestions.question[2];
     dText.textContent = myQuestions.question[3];
}

loadQuestion(firstAnswer);



});
