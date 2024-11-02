// notation.js

// Define the mean function
function mean(scores) {
    if (scores.length === 0) return 0; // Handle empty array case
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Export the mean function to make it available for imports
module.exports = { mean };


// fileImport.js

// Import the mean function from notation.js
const { mean } = require('./notation');

// Example usage of the mean function
const scores = [90, 80, 70, 100, 85];
const average = mean(scores);

console.log("The average score is:", average);

