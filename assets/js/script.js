// vaiables

const hquestion = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

// An array with questions with four options with one correct answer 

var myQuestions = [
    {
    question:"Who holds the world record in 100 meter sprint?",
    options: ["Tyson Gay", "Asafa Powell", "Maurice Green", "Usain Bolt"];
    answer: "Usain Bolt"
},

    {
    question:"Which country has won the most World cups in football?",
    options: ["Netherlands", "Germany", "Brazil", "Argentina"];
    answer: "Brazil"
},
   
    {
    question:"Who was the premier league top scorer 22/23?",
    options: ["Harry Kane", "Erling Haaland", "Mohammed Salah", "Marcus Rashford"];
    answer: "Erling Haaland"
},

    {
    question:"In which sport do teams compete to win the Stanley Cup?",
    options: ["Tennis", "Hockey", "Rugby", "Basketball",];
    answer: "Hockey"
},

    {
    question:"How many career goals has Lionel Messi scored?",
    options: ["More than 800", "more than 600", "More than 1000", "More than 900"];
    answer: "More than 800"
},
];



// Declare staring score
var startingAnswer = 0;










