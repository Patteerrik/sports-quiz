
/* An array with questions with four options with one correct answer 
*/
var myQuestions = [
    {
    question:"Who holds the world record in 100 meter sprint?",
    
        a: "Tyson Gay",
        b: "Asafa Powell",
        c: "Maurice Green",
        d: "Usain Bolt",
    
    correctAnswer: "d"
},

    {
    question:"Which country has won the most World cups in football?",
    
        a: "Netherlands",
        b: "Germany",
        c: "Brazil",
        d: "Argentina",
    
    correctAnswer: "c"
},
   
    {
    question:"Who was the premier league top scorer 22/23?",
    
        a: "Marcus Rashford",
        b: "Mohamed Salah",
        c: "Harry Kane",
        d: "Erling Haaland",
    
    correctAnswer: "d"
},

    {
    question:"In which sport do teams compete to win the Stanley Cup?",
    
        a: "Tennis",
        b: "Hockey",
        c: "Rugby",
        d: "Basketball",
    
    correctAnswer: "b"
},

    {
    question:"How many career goals has Lionel Messi scored?",
    
        a: "826",
        b: "629",
        c: "971",
        d: "582",
    
    correctAnswer: "a"
},
];


function startQuiz() {
    var startingAnswer = 0;
    displayQuestion = startingAnswer(currentQuestion);
}



var buildQuiz = document.getElementsByClassName("quiz-window");
let answerElement = document.getElementsByClassName("answer");
let question = document.getElementById("question");
let aText = document.getElementById("a_Text");
let bText = document.getElementById("b_Text");
let cText = document.getElementById("c_Text");
let dText = document.getElementById("d_Text");
let submit = document.getElementById("submit");



