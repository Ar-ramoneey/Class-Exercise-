// Exercise 2: Simple Blog API

// Design a simple API with two GET routes:
// /posts: This route should respond with a JSON array of all posts.
// /posts/:id: This route should respond with a single post object whose id matches the URL parameter. If no post is found, send a 404 status code with a "Post not found" message.
// Hint: Start with a hard-coded array of blog posts to simulate a database.
const express = require("express");
const app = express();
const port = 3000;
const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is my very first blog post!",
  },
  {
    id: 2,
    title: "Learning Node.js",
    content: "Node.js makes JavaScript run on the server.",
  },
  {
    id: 3,
    title: "Express is Cool",
    content: "Express makes building APIs simple and fun!",
  },
];
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});
app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
