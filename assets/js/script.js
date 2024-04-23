
    // This ensures that the javacode doesn´t run before html is fully loaded 
    document.addEventListener("DOMContentLoaded", function () {

    // An array with questions with four options with one correct answer 
    // myQuestion structure inspired by https://www.sitepoint.com/simple-javascript-quiz/

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
    
    //Declaring viariables
    var questionIndex = 0;
    var score = 0;
    var timercount = 10;
    var timer = document.getElementById("timer");
    var questionElement = document.getElementById("question");
    var optionsElements = document.querySelectorAll(".answer");
    var playAgain = document.getElementById("playagainbutton");
    var home = document.getElementById("homebutton");
    var totalscore = document.getElementsByClassName("totalscore");
    var resultWindow = document.getElementsByClassName("resultwindow");
    var quizWindow = document.getElementsByClassName("quiz-window");
    var correct_popup = document.querySelector(".correct_popup");
    var incorrect_popup = document.querySelector(".incorrect_popup");
    var TimerInterval;

    // Function to display the current question
    function showQuestion() {
        
        clearInterval(TimerInterval); // Clearing the timer interval
        if (questionIndex < myQuestions.length) { // If there are more questions
        var currentQuestion = myQuestions[questionIndex];
        questionElement.textContent = currentQuestion.question; // Display the question
        for (var i = 0; i < currentQuestion.options.length; i++) {
            optionsElements[i].textContent = currentQuestion.options[i]; // Display the options
        }
        startTimer(); //Start the countdown for current question
    }
}
    // Function for user answer
    function showAnswer(selectedAnswer) {

        clearInterval(TimerInterval);
        if (questionIndex < myQuestions.length) { // If there are more questions
        var correctAnswer = myQuestions[questionIndex].answer; // Get correct answer for current question
        if (selectedAnswer === correctAnswer) { // If current answer is correct answer
        score += timercount; // If answer is correct score increases
        correct_popup.style.display = "block"; //Show correct popup when right answer selected
        } else {
        incorrect_popup.style.display = "block"; // Show incorrect popup when wrong answer selected
        } 

        optionsElements.forEach(function(optionElement) { //Prevents double click by disable options for 3 seconds
           optionElement.disabled = true;
        });


        // Inspiration from https://www.w3schools.com/jsref/met_win_settimeout.asp

        setTimeout(function() {  // Hides popups windows after delay and moves to the next question

        optionsElements.forEach(function(optionElement) { // Enables options after 3 seconds
            optionElement.disabled = false;
        });
        // Hides popups after 3 seconds
        correct_popup.style.display = "none"; 
        incorrect_popup.style.display = "none";
                       
        questionIndex++;  //Next question
        if (questionIndex < myQuestions.length) { 
        showQuestion(); 
        } else { // If there aren´t any more questions 
        clearInterval(timer);
        showResult("Quiz finished! You scored: " + score + " out of 100.");
        restartQuiz();
            }
        },3000); //3 seconds paus until the next question
    }
}
    // Function for restarting the quiz
    function restartQuiz() {

        questionIndex = 0; // Starts with first question
        score = 0; // Score resets to 0
        playAgain.style.display = "block"; // Makes play again button visible
        home.style.display = "block"; // Makes home button visible
        showQuestion();
}

    /* Inspiration from https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript
    and https://www.youtube.com/watch?v=_a4XCarxwr8&list=PLsRF5B5IuysdxhEvtJUeiabNHVNMhgS6Z&index=50&t=311s */

    // Function for timer countdown
    function startTimer() {

        timercount = 10; // Timer starts at 10 seconds
        timer.innerHTML = '00:' + timercount; // Insert timer number 00:10
        TimerInterval = setInterval(function () {
        timercount--; // Timer counting down
        timer.innerHTML = '00:' + timercount;
        // If timer reach 0 stop timer
        if (timercount === 0) { // If timer reach 0
        clearInterval(TimerInterval); 
        if (questionIndex < myQuestions.length) { // Checks if last question
        questionIndex++; // Next question
        showQuestion();
    }
        if (questionIndex === myQuestions.length){ // Show score message if it is the last question
        showResult("Time´s up! You scored: " + score + " out of 100."); // Score message
        restartQuiz();
    }

        }
    }, 1000); 
}  
        // Eventlistener to answer options
        optionsElements.forEach(function (optionElement) {
        optionElement.addEventListener("click", function () {
        var selectedAnswer = optionElement.textContent; 
        showAnswer(selectedAnswer); 
        });
    });
    // Function for quiz result
    function showResult(){

        quizWindow[0].style.display = "none"; // Quiz window not visible when quiz ends
        resultWindow[0].style.display = "block"; // Resultwindow is visible when quiz ends
        totalscore[0].textContent = "Your total score:" + score + "/100"; // Total score after quiz ends
        playAgain.style.display = "block"; // Play again button is visible when quiz ends
        home.style.display = "block"; // Home button is visible when quiz ends

        playAgain.addEventListener("click", function () { // Pressing play again button restarts the quiz
                
        restartQuiz();
        });
}
       
        showQuestion();
});







