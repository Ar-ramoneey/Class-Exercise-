// Exercise 1: User Profile Viewer
// Create a server with a single GET route: /profile/:username.
// The server should extract the username from the URL parameter.
// It should then send a response that says, "Viewing the profile of [username]."
// Example URL: http://localhost:3000/profile/alice. The server should respond with: "Viewing the profile of Alice."
const express = require("express");
const app = express();
const port = 3000;
app.get("/profile/:username", (req, res) => {
  res.send(`Viewing the profile of ${req.params.username}`);
});
app.listen(port, () => {
  console.log(`Run server at http://localhost:${port}`);
});
