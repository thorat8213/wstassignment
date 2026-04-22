
// Create a Node.js to display current date and time.


// datetime.js

// Create a new Date object which contains the current system date and time
const currentDateTime = new Date();

console.log("--- System Date and Time ---");

// Displaying the full date and time string
console.log("Full String: " + currentDateTime.toString());

// Formatting for better readability
const date = currentDateTime.toLocaleDateString();
const time = currentDateTime.toLocaleTimeString();

console.log("\nFormatted Output:");
console.log("Date: " + date);
console.log("Time: " + time);