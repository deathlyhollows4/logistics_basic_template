import { createServer } from "node:http";
import server from "./dist/server/server.js";

const port = process.env.PORT || 3000;

createServer(async (req, res) => {
  const url = `http://${req.headers.host || "localhost"}${req.url}`;
  const body = req.method !== "GET" && req.method !== "HEAD"
    ? await readBody(req)
    : undefined;

  const init = {
    method: req.method,
    headers: req.headers,
    body,
  };

  const response = await server.fetch(url, init);

  res.writeHead(response.status, Object.fromEntries(response.headers));
  if (response.body) {
    for await (const chunk of response.body) {
      res.write(chunk);
    }
  }
  res.end();
}).listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
  });
}
