// ----------------------
// Part 1: Variables & Conditionals
// ----------------------
let userName = "Brian"; // variable declaration
let userAge = 21;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// ----------------------
// Part 2: Functions
// ----------------------

// Function 1: Greeting
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript 🚀`;
}

// Function 2: Calculate total price with tax
function calculateTotal(price, taxRate) {
  let total = price + price * taxRate;
  return `Total amount (with tax): $${total.toFixed(2)}`;
}

// ----------------------
// Part 3: Loops
// ----------------------

// Example 1: Simple for loop
function loopNumbers() {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    result += i + " ";
  }
  return result;
}

// Example 2: Array + forEach
function listFruits() {
  let fruits = ["Apple", "Banana", "Mango"];
  let result = "";
  fruits.forEach((fruit, index) => {
    result += `${index + 1}. ${fruit} <br>`;
  });
  return result;
}

// ----------------------
// Part 4: DOM Manipulation
// ----------------------

document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("output").innerHTML = greetUser(userName);
});

document.getElementById("calcBtn").addEventListener("click", function () {
  document.getElementById("output").innerHTML = calculateTotal(100, 0.16);
});

document.getElementById("loopBtn").addEventListener("click", function () {
  document.getElementById("loopOutput").innerHTML =
    "Numbers: " + loopNumbers() + "<br>" + listFruits();
});

document.getElementById("toggleBtn").addEventListener("click", function () {
  let msg = document.getElementById("toggleMsg");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
});
