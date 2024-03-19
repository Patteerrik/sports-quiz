
/* An array with questions with four options with one correct answer 
*/
var myQuestions = [
    {
    question:("Who holds the world record in 100 meter sprint?"),
    answer: {
        a: "Tyson Gay",
        b: "Asafa Powell",
        c: "Maurice Green",
        d: "Usain Bolt",
    },
    correctAnswer: "d"
},

    {
    question:("Which country has won the most World cups in football?"),
    answer: {
        a: "Netherlands",
        b: "Germany",
        c: "Brazil",
        d: "Argentina",
    },
    correctAnswer: "c"
},
   
    {
    question:("Who was the premier league top scorer 22/23?"),
    answer: {
        a: "Marcus Rashford",
        b: "Mohamed Salah",
        c: "Harry Kane",
        d: "Erling Haaland",
    },
    correctAnswer: "d"
},

    {
    question:("In which sport do teams compete to win the Stanley Cup?"),
    answer: {
        a: "Tennis",
        b: "Hockey",
        c: "Rugby",
        d: "Basketball",
    },
    correctAnswer: "b"
},

    {
    question:("How many career goals has Lionel Messi scored?"),
    answer: {
        a: "826",
        b: "629",
        c: "971",
        d: "582",
    },
    correctAnswer: "a"
},
];

var score = 0;

function startQuiz() {
    var startingAnswer = 
}

/* For loop */
for(var i = 0; i < myQuestions.length; i++)
   var response = window.question(question[i].question);
   if (respons == question[i].correctAnswer){
    score++;
    alert("Thats correct!");
   } else {
    alert("Unfortunately that´s not correct!");
   }

var buildQuiz = document.getElementsByClassName("quiz-window");
let answerElement = document.getElementsByClassName("answer");
let question = document.getElementById("question");
let aText = document.getElementById("a_Text");
let bText = document.getElementById("b_Text");
let cText = document.getElementById("c_Text");
let dText = document.getElementById("d_Text");
let submit = document.getElementById("submit");

let currentQuiz = 0;

startingQuiz()

function startingQuiz () {

    deselectAnswers();

    var currentQuiz = quiz[currentQuiz];
    question.innerText = currentQuiz.question;
    (document.getElementById("a_Text")).innerText = currentQuiz.a;
    bText.innerText = currentQuiz.b;
    cText.innerText = currentQuiz.c;

}


submit.addEventListener("clicked", results);