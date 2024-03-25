
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

       
       var questionIndex = 0;
       var questionElement = document.getElementById("question");
       var optionsElement = document.getElementsByClassName("answer");
       var showScore = document.getElementById("");

  

    function showQuestion () {
           var hQuestion = document.getElementById("question");
           hQuestion.innerHTML = myQuestions[questionIndex].question;
    }
    
   
     
    function showAnswer () {
        var selectedAnswer;
        var options = document.querySelectorAll(".answer");
        options.forEach(function(options) {
            if(options.checked) {
                    selectedAnswer = options.textContent;
}
}); 
         var correctAnswer = myQuestions[questionIndex].answer;
        
         if (selectedAnswer === correctAnswer) {
           score++;
       } else { 
        score--;
}

        showScore.textContent = score;

        //Next question
        questionIndex++;
        if (questionIndex < myQuestions.length) {
            showQuestion()
        }
}

       
        
        var submitButton = document.getElementById("submit");
        submitButton.addEventListener("click", showAnswer);
        
        // Start the quiz
        showQuestion();
});

    
