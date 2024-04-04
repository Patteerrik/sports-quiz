document.addEventListener("DOMContentLoaded", function () {
    var rulesButton = document.getElementById("rules");
    var rulesWindow = document.getElementById("rwindow");
    var closeRulesButton = document.getElementById("closewindow");
        
    rulesButton.addEventListener("click", function () {
    if (rulesWindow.style.display === "none") {
    rulesWindow.style.display = "block";
    } else {
    rulesWindow.style.display = "none";
    } 
    });
    closeRulesButton.addEventListener("click", function() {
    rulesWindow.style.display = "none";
    });
})
