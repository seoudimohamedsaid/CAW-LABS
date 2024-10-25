window.onload = function() {
    const boundaries = document.querySelectorAll(".boundary");
    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const status = document.getElementById("status");
    let gameLost = false;  // Tracks if the game has been lost

    // Function to reset boundaries to default color
    function resetBoundaries() {
        boundaries.forEach(function(boundary) {
            boundary.classList.remove("youlose");  // Remove red color class
            boundary.style.backgroundColor = "#eeeeee";  // Reset to default boundary color
        });
        status.textContent = "Move your mouse over the 'S' to begin.";  // Reset status text
    }

    // Event handler for losing condition (all boundaries turn red when one is hovered)
    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            if (!gameLost) {
                boundaries.forEach(function(b) {
                    b.classList.add("youlose");  // Add red color to all boundaries
                    b.style.backgroundColor = "red";  // Ensure all boundaries turn red
                });
                status.textContent = "You lost!";  // Update the status message
                gameLost = true;  // Mark game as lost
            }
        });
    });

    // Event handler for win condition
    end.addEventListener("mouseover", function() {
        if (!gameLost) {
            alert("You win!");  // Display win message
            status.textContent = "You win!";  // Update status message
        }
    });

    // Restart game when "Start" is clicked
    start.addEventListener("click", function() {
        gameLost = false;  // Reset game lost flag
        resetBoundaries();  // Reset boundary colors to default
    });
};
