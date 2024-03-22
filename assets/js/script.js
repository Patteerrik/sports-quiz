
// This ensures that the javacode doesn´t run before html is fully loaded

document.addEventListener("DOMContentLoaded", function () {

     

    // An array with questions with four options with one correct answer 

    var myQuestions = [
        {
            question: "Who holds the world record in 100 meter sprint?",
            options: ["Tyson Gay", "Asafa Powell", "Maurice Green", "Usain Bolt"],
            answer: "Usain Bolt",
        },

        {
            question: "Which country has won the most World cups in football?",
            options: ["Netherlands", "Germany", "Brazil", "Argentina"],
            answer: "Brazil",
        },

        {
            question: "Who was the premier league top scorer 22/23?",
            options: ["Harry Kane", "Erling Haaland", "Mohammed Salah", "Marcus Rashford"],
            answer: "Erling Haaland",
        },

        {
            question: "In which sport do teams compete to win the Stanley Cup?",
            options: ["Tennis", "Hockey", "Rugby", "Basketball",],
            answer: "Hockey",
        },

        {
            question: "How many career goals has Lionel Messi scored?",
            options: ["More than 800", "less than 700", "More than 1000", "More than 900"],
            answer: "More than 800",
        },
    ];

    let currentQuestion = 0;

    function startQuiz () {
         
        showQuestion();
    }

    // vaiables
    const quiz = document.getElementById("question");
    let answer = document.getElementsByClassName("answer");
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

        if (userAnswer === myQuestions.length) {
            alert("Contratulations, you´ve finished")
        } else {
            loadQuestion(currentQuestion);
        }
    }

    function options () {
        
        var Answer1 = document.getElementById(a);
        var Answer2 = document.getElementById(b);
        var Answer3 = document.getElementById(c);
        var Answer4 = document.getElementById(d);

        Answer1.innerHTML = question[index].options[0];
        Answer2.innerHTML = question[index].options[1]
        Answer3.innerHTML = question[index].options[2]
        Answer4.innerHTML = question[index].options[3]


        
    }

    loadQuestion(currentQuestion);



});
