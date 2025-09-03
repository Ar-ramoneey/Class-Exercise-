// Exercise 3: Calculator API

// Create a single GET route: /calculate.
// This route should accept two numbers and an operation as query string parameters.
// Example URL: http://localhost:3000/calculate?num1=10&num2=5&op=add.
// The server should perform the specified operation (add, subtract, multiply, divide) on the two numbers.
// The response should be a string showing the result (e.g., "The result of 10 + 5 is 15").
// Handle cases where the operation is not supported or if the numbers are not provided.

const express = require("express");
const port = 3000;
const app = express();

app.get("/calculate", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const op = req.query.op;

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send("Error: num1 and num2 must be a valid numbers");
  }
  if (!op) {
    res.status(400).send("Error: Operator (op) is required");
  }

  let result;
  let symbol;

  switch (op) {
    case "add":
      result = num1 + num2;
      symbol = "+";
      res.send(`The result of ${num1} ${symbol} ${num2} is ${result}`);
      break;
    case "subratct":
      result = num1 - num2;
      symbol = "-";
      res.send(`The result of ${num1} ${symbol} ${num2} is ${result}`);
      break;
    case "multiply":
      result = num1 * num2;
      symbol = "*";
      res.send(`The result of ${num1} ${symbol} ${num2} is ${result}`);
      break;
    case "divide":
      if (num2 === 0) {
        res.status(400).send("Error: Cannot divide by Zero");
      }
      result = num1 / num2;
      symbol = "÷";
      res.send(`The result of ${num1} ${symbol} ${num2} is ${result}`);
      break;
    default:
      res
        .status(400)
        .send(
          "Error: Unsuppored operation. Use add, subtract, multiply, or divide."
        );
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
