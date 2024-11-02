// exo4.js

// Import the 'fs' module
const fs = require('fs');

// Get the filename and text from command-line arguments
const fileName = process.argv[2];
const text = process.argv[3];

// Check if filename and text were provided
if (!fileName || !text) {
    console.log("Please provide a file name and text to save.");
    process.exit(1);
}

// Write the text to the specified file
fs.writeFile(fileName, text, (err) => {
    if (err) {
        console.error("Error saving file:", err);
        return;
    }
    console.log("The file has been saved!");

    // Read and display the contents of the file
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File contents:");
        console.log(data);
    });
});
