// app.js

// Import the local calculator module
const calc = require('./calculator');

const num1 = 20;
const num2 = 5;

console.log("--- Node.js Modular Calculator ---");
console.log(`Numbers: ${num1} and ${num2}\n`);

// Using the exported functions
console.log("Addition: " + calc.add(num1, num2));
console.log("Subtraction: " + calc.sub(num1, num2));
console.log("Multiplication: " + calc.mul(num1, num2));
console.log("Division: " + calc.div(num1, num2));