import React, { useEffect, useState } from "react";

export default function App() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("/api/agents")
      .then((r) => r.json())
      .then((d) => setAgents(d.agents))
      .catch(() => setAgents([]));
  }, []);

  return (
    <main>
      <h1>AI Agent Marketplace</h1>
      <ul>
        {agents.map((a) => (
          <li key={a.id}>
            {a.name} — ${a.price} ({a.tags.join(", ")})
          </li>
        ))}
      </ul>
    </main>
  );
}
