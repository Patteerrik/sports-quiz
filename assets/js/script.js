
// This ensures that the javacode doesn´t run before html is fully loaded

document.addEventListener("DOMContentLoaded", function () {

     

    // An array with questions with four options with one correct answer 

    var myQuestions = [
        {
            question: "Who holds the world record in 100 meter sprint?",
            options: ["Tyson Gay", "Asafa Powell", "Maurice Green", "Usain Bolt"],
            answer: "Usain Bolt"
        },

        {
            question: "Which country has won the most World cups in football?",
            options: ["Netherlands", "Germany", "Brazil", "Argentina"],
            answer: "Brazil"
        },

        {
            question: "Who was the premier league top scorer 22/23?",
            options: ["Harry Kane", "Erling Haaland", "Mohammed Salah", "Marcus Rashford"],
            answer: "Erling Haaland"
        },

        {
            question: "In which sport do teams compete to win the Stanley Cup?",
            options: ["Tennis", "Hockey", "Rugby", "Basketball",],
            answer: "Hockey"
        },

        {
            question: "How many career goals has Lionel Messi scored?",
            options: ["More than 800", "less than 700", "More than 1000", "More than 900"],
            answer: "More than 800"
        },
    ];

    let currentQuestion = 0;

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

    function answer () {
        var userAnswer;

        if (userAnswer === myQuestions.answer) {
            alert("That is correct!");
        } 

        currentQuestion++;

        if (currentQuestion === myQuestions.lenght) {
            alert("Contratulations, you´ve finished")
        } else {
            loadQuestion(currentQuestion);
        }
    }

    function loadQuestion() {
        
        quiz.textContent = myQuestions[index].question[0];
        aText.textContent = myQuestions[index].answer[0];
        bText.textContent = myQuestions[index].answer[1];
        cText.textContent = myQuestions[index].answer[2];
        dText.textContent = myQuestions[index].answer[3];
    }

    loadQuestion(currentQuestion);



});
