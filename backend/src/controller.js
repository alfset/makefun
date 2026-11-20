const agents = [
  { id: 1, name: "coder-agent", price: 9, tags: ["code", "refactor"] },
  { id: 2, name: "research-agent", price: 5, tags: ["search", "summarize"] },
  { id: 3, name: "ops-agent", price: 12, tags: ["deploy", "monitor"] },
];

function handle(req, res) {
  const url = new URL(req.url, "http://localhost");
  res.setHeader("Content-Type", "application/json");

  if (url.pathname === "/api/agents" && req.method === "GET") {
    res.end(JSON.stringify({ agents }));
    return;
  }

  if (url.pathname === "/api/health" && req.method === "GET") {
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: "not found" }));
}

module.exports = { handle };
