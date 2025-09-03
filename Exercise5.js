// Exercise 5: Route Order and Catch-All

// Write a server with the following routes in this specific order:
// /admin: A GET route that responds with "Welcome, Admin!".
// /:username: A GET route that responds with "Welcome, [username]!".
// An app.use() route that acts as a catch-all for 404 "Page not found" errors.
// Question: What happens when you visit http://localhost:3000/admin?
// Question: What happens when you visit http://localhost:3000/john?
// Why does the order matter? Explain why the /admin route needs to be defined before /:username.
// This exercise is designed to test your understanding of how Express processes requests sequentially through its routes.
const express = require("express");
const app = express();
const port = 3000;
app.get("/admin", (req, res) => {
  res.send("Welcome, Admin!");
});
app.get("/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Welcome, ${username}`);
});
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
