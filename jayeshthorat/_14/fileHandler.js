
// Write a Node.js to read and write a JSON file.

// Import the built-in File System module
const fs = require('fs');

// 1. Define a JSON Object (The data we want to write)
const userData = {
    name: "Rahul Patil",
    college: "IMED Pune",
    course: "MCA Sem-II",
    subject: "Web Supporting Technology"
};

const fileName = 'data.json';

// 2. WRITE OPERATION
// Convert the JavaScript object to a JSON string
const jsonData = JSON.stringify(userData, null, 2); 

fs.writeFileSync(fileName, jsonData);
console.log(`Successfully written data to ${fileName}`);

// 3. READ OPERATION
try {
    // Read the file content
    const rawData = fs.readFileSync(fileName, 'utf8');
    
    // Convert the JSON string back into a JavaScript object
    const parsedData = JSON.parse(rawData);
    
    console.log("\n--- Data Read from File ---");
    console.log("Name:", parsedData.name);
    console.log("College:", parsedData.college);
    console.log("Subject:", parsedData.subject);
} catch (err) {
    console.error("Error reading the file:", err);
}