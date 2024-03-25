
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

    function startQuiz() {
        showQuestion();
        showOptions();
    }

    function showQuestion () {
           var hQuestion = document.getElementById("questions");
           hQuestion.innerHTML = hQuestion[questionIndex].question;
    }
    
    function showOptions() {
           var optionA = document.getElementById("option_a");
           var optionB = document.getElementById("option_b");
           var optionC = document.getElementById("option_c");
           var optionD = document.getElementById("option_d");

           optionA.innerHTML = myQuestions[questionIndex].options[0];
           optionA.innerHTML = myQuestions[questionIndex].options[1];
           optionA.innerHTML = myQuestions[questionIndex].options[2];
           optionA.innerHTML = myQuestions[questionIndex].options[3];
    }

    function showAnswer(rightAnswer) {
        
        var correctAnswer = myQuestions[questionIndex].answer;
        
            if (rightAnswer === answer) {
                increaseScore();
            } else { 
                decreaseScore();
            }
        }
        var rightAnswer = myQuestions[questionIndex].answer;
        if (selectedOptions === answer){
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
    });
