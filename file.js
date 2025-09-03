const hhtp = require("http");
const port = 3000;

const server = hhtp.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Context-type", "text/plain");
  res.end("Hello, Express!  Your server is running!");
});
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
