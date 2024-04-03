
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
            options: ["Tennis", "Hockey", "Rugby", "Basketball"],
            answer: "Hockey",
        },

        {
            question: "How many career goals has Lionel Messi scored?",
            options: ["More than 800", "less than 700", "More than 1000", "More than 900"],
            answer: "More than 800",
        },
    ];


    var rulesButton = document.getElementById("rules");
    var rulesWindow = document.getElementById("rwindow");
    var questionIndex = 0;
    var score = 0;
    var timercount = 10;
    var timer = document.getElementById("timer");
    var questionElement = document.getElementById("question");
    var optionsElements = document.querySelectorAll(".answer");
    var playAgain = document.getElementById("playagainbutton");
    var home = document.getElementById("homebutton");
    var TimerInterval;
    

    function startQuiz() {
        document.getElementsByClassName("welcomewin").style.display = "none";
        document.getElementsByClassName("quiz-window").style.display = "block";
        showQuestion();
    }

    document.getElementsByClassName("quiz-window").addEventListener("click", startQuiz);

    
    /*
        */
    
    function showQuestion() {
        clearInterval(TimerInterval);
        if (questionIndex < myQuestions.length) {
        var currentQuestion = myQuestions[questionIndex];
        questionElement.textContent = currentQuestion.question;
        for (var i = 0; i < currentQuestion.options.length; i++) {
            optionsElements[i].textContent = currentQuestion.options[i];
        }

        startTimer();
    }
}

    function showAnswer(selectedAnswer) {
        clearInterval(TimerInterval);
        if (questionIndex < myQuestions.length) {
            var correctAnswer = myQuestions[questionIndex].answer;
            if (selectedAnswer === correctAnswer) {
                score++;
            }
            //Next question                
            questionIndex++;
            if (questionIndex < myQuestions.length) {
                showQuestion();
            } else {
                clearInterval(timer);
                alert("Quiz completed! You scored: " + score + " out of 5.");
                playAgain.style.display = "block";
                home.style.display = "block";
                
                //Idea from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_confirm 
                var restart = confirm("Do you want to take the quiz again?");
                if (restart) {
                    restartQuiz();
                } else {
                    alert("Thank you for taking the quiz!");
                }
            }
        }
    }
    function restartQuiz() {
        questionIndex = 0;
        score = 0;
        playAgain.style.display = "none";
        home.style.display = "none";
        showQuestion();
    }



    // Borrowed from https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript

    function startTimer() {
        timercount = 10;
        timer.innerHTML = `00:${timercount}`;
        TimerInterval = setInterval(function () {
            timercount--;
            timer.innerHTML = `00:${timercount}`;
            if (timercount === 0) {
                clearInterval(TimerInterval);
            if (questionIndex < myQuestions.length) {
                    questionIndex++;
                    showQuestion();
                }
            if (questionIndex === myQuestions.length){
                alert("Time´s up! You scored: " + score + " out of 5.");
                restartQuiz();
            }

            }
        }, 1000);
    }

        optionsElements.forEach(function (optionElement) {
        optionElement.addEventListener("click", function () {
            var selectedAnswer = optionElement.textContent;
            showAnswer(selectedAnswer);
        });
    });

    rulesButton.addEventListener("click", function () {
        if (rulesWindow.style.display === "none") {
           rulesWindow.style.display = "block";
        } else {
            rulesWindow.style.display = "none";
    } 
});
    
});







