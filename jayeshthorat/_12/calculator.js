
// Create a Node.js module that performs basic calculator operations (Add, Sub, Mul, Div).
//  Create another Node.js file to consume this module and display results.


// calculator.js

// Function for Addition
exports.add = function (a, b) {
    return a + b;
};

// Function for Subtraction
exports.sub = function (a, b) {
    return a - b;
};

// Function for Multiplication
exports.mul = function (a, b) {
    return a * b;
};

// Function for Division
exports.div = function (a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
};