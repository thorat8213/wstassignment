

function greet() {
    return "Hello JavaScript";
}

function square(n) {
    return n * n;
}

function add(a, b) {
    return a + b;
}

function isEven(num) {
    return num % 2 === 0;
}

function sayName(name) {
    return "Welcome " + name;
}






function showGreet() {
    document.getElementById("msg").innerText = greet();
}

function showSquare() {
    document.getElementById("msg").innerText = "Square = " + square(5);
}

function showAdd() {
    document.getElementById("msg").innerText = "add = " + add(10, 20);
}

function showEven() {
    document.getElementById("msg").innerText = " " + isEven(7);
}

function showName() {
    document.getElementById("msg").innerText = sayName("Manish");
}
