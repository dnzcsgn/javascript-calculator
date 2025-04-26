// History array to store calculation records
const calculationHistory = [];

// Function to perform addition
function add(a, b) {
  const result = a + b;
  addToHistory(a, b, '+', result);
  return result;
}

// Function to perform subtraction
function subtract(a, b) {
  const result = a - b;
  addToHistory(a, b, '-', result);
  return result;
}

// Function to perform multiplication
function multiply(a, b) {
  const result = a * b;
  addToHistory(a, b, '*', result);
  return result;
}

// Function to perform division
function divide(a, b) {
  if (b === 0) {
    console.error("Error: Division by zero is undefined.");
    return null;
  }
  const result = a / b;
  addToHistory(a, b, '/', result);
  return result;
}

// Function to add calculation to history
function addToHistory(operand1, operand2, operator, result) {
  const record = {
    operand1,
    operand2,
    operator,
    result
  };
  calculationHistory.push(record);
}

// Function to display the history log
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("No calculations have been made yet.");
  } else {
    console.log("Calculation History:");
    calculationHistory.forEach((entry, index) => {
      console.log(
        `${index + 1}: ${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result}`
      );
    });
  }
}

// Testing the calculator.
console.log("Add: " + add(10, 5));        // 15
console.log("Subtract: " + subtract(20, 8)); // 12
console.log("Multiply: " + multiply(3, 7));  // 21
console.log("Divide: " + divide(16, 4));     // 4
console.log("Divide by zero: " + divide(5, 0)); // Error

displayHistory(); // Display all calculations
