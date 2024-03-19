
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
    question:("Which country has won the most World cups in football?")
    answer: {
        a: "Netherlands",
        b: "Germany",
        c: "Brazil",
        d: "Argentina";
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

/* For loop */
for(var i = 0; i < myQuestions.length; i++)
   var response = window.question(questions[i].question);
   if (respons == question[i].correctAnswer){
    score++;
    alert("Thats correct!");
   } else {
    alert("Unfortunately that´s not correct!");
   }

let buildQuiz = document.getElementsByClassName("quiz-window");
let question = document.getElementById("question")
let a_Text = document.getElementById("a_Text");
let b_Text = document.getElementById("b_Text");
let c_Text = document.getElementById("c_Text");
let d_Text = document.getElementById("d_Text");
let submit = document.getElementById("submit");

submit.addEventListener("clicked", results);