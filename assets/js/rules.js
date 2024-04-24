// This ensures that the javascript code doesn´t run before html is fully loaded 
document.addEventListener("DOMContentLoaded", function () {
    // Declaring variables
    var rulesButton = document.getElementById("rules");
    var rulesWindow = document.getElementById("rwindow");
    var closeRulesButton = document.getElementById("closewindow");
    // Open rules window when clicked
    rulesButton.addEventListener("click", function () {
        // If ruleswindow is hidden display it
        if (rulesWindow.style.display === "none") {
            rulesWindow.style.display = "block";
        } else {
            // If it is displayed it stays displayed
            rulesWindow.style.display = "block";
        }
    });
    // Closes the rulesbutton when clicked
    closeRulesButton.addEventListener("click", function () {
        rulesWindow.style.display = "none";
    });
});
