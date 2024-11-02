// ReadFile.js

// Import the 'fs' module
const fs = require('fs');

// Get the filename from command-line arguments
const fileName = process.argv[2];

// Check if filename was provided
if (!fileName) {
    console.log("Please provide a file name as a parameter.");
    process.exit(1);
}

// Read the file asynchronously
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    // Display the file contents
    console.log(data);
});
