
// This ensures that the javacode doesn´t run before html is fully loaded 
    document.addEventListener("DOMContentLoaded", function () {

    

    // An array with questions with four options with one correct answer 
    // myQuestion structure borrowed from https://www.sitepoint.com/simple-javascript-quiz/

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

        {
            question: "Which athlete won the largest number of gold medals at the Olympic Games?",
            options: ["Michael Phelps", "Usain Bolt", "Larisa Latynina", "Paavo Nurmi"],
            answer: "Michael Phelps",
        },
        
        {
            question: "What sport is considered the most popular in the world?",
            options: ["Football", "Baseball", "Golf", "Basketball"],
            answer: "Football",
        },    

        {
           question: "How many players are on the field at the same time in a volleyball team?",
           options: ["4", "5", "6", "7"],
           answer: "6",
        },

        {
           question: "What game is considered the national sport of Japan?",
           options: ["Football", "Baseball", "Sumo", "Tennis"],
           answer: "Sumo",
        },

        {
           question: "In what country is the biggest tennis tournament Wimbledon taking place?",
           options: ["United States", "United Kingdom", "France", "Australia"],
           answer: "United Kingdom",
        },
    ];

    var questionIndex = 0;
    var score = 0;
    var timercount = 10;
    var timer = document.getElementById("timer");
    var questionElement = document.getElementById("question");
    var optionsElements = document.querySelectorAll(".answer");
    var playAgain = document.getElementById("playagainbutton");
    var home = document.getElementById("homebutton");
    var TimerInterval;

    /*function startQuiz() {
        document.querySelector(".welcomewin").style.display = "none";
        document.querySelector(".quiz-window").style.display = "block";
        showQuestion();
    }

    document.querySelector(".takequiz a").addEventListener("click", startQuiz);*/

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
        alert("Quiz completed! You scored: " + score + " out of 10.");
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
        home.style.display = "block";
        showQuestion();
    }

    /* Inspiration from https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript
    and https://www.youtube.com/watch?v=_a4XCarxwr8&list=PLsRF5B5IuysdxhEvtJUeiabNHVNMhgS6Z&index=50&t=311s */

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
        alert("Time´s up! You scored: " + score + " out of 10.");
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
    showQuestion();
});







