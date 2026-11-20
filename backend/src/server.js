const http = require("http");
const { handle } = require("./controller");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  handle(req, res);
});

server.listen(PORT, () => {
  console.log(`Marketplace API listening on http://localhost:${PORT}`);
});
