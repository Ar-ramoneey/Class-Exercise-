// Exercise 4: Dynamic Greeting

// Create a single route that uses both a route parameter and a query string.
// The route should be /greet/:name.
// If a query parameter salutation is provided (e.g., ?salutation=Dr.), the response should include it.
// Example 1 URL: http://localhost:3000/greet/smith. Response: "Hello, smith!"
// Example 2 URL: http://localhost:3000/greet/jones?salutation=Mr.. Response: "Hello, Mr. jones!"

const express = require("express");
const app = express();
const port = 3000;

app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  const salutation = req.query.salutation;
  const message = salutation
    ? `Hello, ${salutation}. ${name}!`
    : `Hello, ${name}!`;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Sever running at http://localhost:${port}`);
});
