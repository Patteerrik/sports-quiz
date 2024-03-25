
// This ensures that the javacode doesn´t run before html is fully loaded

document.addEventListener("DOMContentLoaded", function () {

     

    // An array with questions with four options with one correct answer 

    var myQuestions = [
        {
            question: "Who holds the world record in 100 meter sprint?",
            options: ["Tyson Gay", "Asafa Powell", "Maurice Green", "Usain Bolt"],
            rightAnswer: "Usain Bolt",
        },

        {
            question: "Which country has won the most World cups in football?",
            options: ["Netherlands", "Germany", "Brazil", "Argentina"],
            rightAnswer: "Brazil",
        },

        {
            question: "Who was the premier league top scorer 22/23?",
            options: ["Harry Kane", "Erling Haaland", "Mohammed Salah", "Marcus Rashford"],
            rightAnswer: "Erling Haaland",
        },

        {
            question: "In which sport do teams compete to win the Stanley Cup?",
            options: ["Tennis", "Hockey", "Rugby", "Basketball",],
            rightAnswer: "Hockey",
        },

        {
            question: "How many career goals has Lionel Messi scored?",
            options: ["More than 800", "less than 700", "More than 1000", "More than 900"],
            rightAnswer: "More than 800",
        },
    ];

       
       var questionIndex = 0;
       var questionElement = document.getElementById("question");
       var optionsElement = document.getElementsByClassName("answer");

    

    function showQuestion () {
            var currentQuestion = myQuestions[questionIndex];
            questionElement.textContent = currentQuestion.question;
            for (var i = 0; i < optionsElement.length; i++) {
                optionsElement[i].textContent = currentQuestion.options[i];
            }

        }

    function showAnswer() {
        var currentAnswer = myQuestions[questionIndex].answer;
        if (selectedAnswer === rightAnswer){
            document.querySelector(".answer:checked").classList.add("rightAnswer");
        } else { document.querySelector("answer:checked").classList.add("wrongAnswer");

        }
        
        var submitButton = document.getElementById("submit");
        submitButton.addEventListener("click", showAnswer);

        //Next question
        questionIndex++;
        if (questionIndex < myQuestions.length) {
            showQuestion()
        }
        
    }

   

    


    showQuestion ();

    });
