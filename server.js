import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import server from "./dist/server/server.js";

const port = process.env.PORT || 3000;
const CLIENT_DIR = resolve("dist", "client");

const MIME = {
  ".css": "text/css",
  ".ico": "image/x-icon",
  ".js": "text/javascript",
  ".json": "application/json",
  ".map": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

function serveStatic(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") return false;

  const pathname = normalize(req.url.split("?")[0]).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(CLIENT_DIR, pathname);
  const ext = extname(filePath).toLowerCase();

  if (!MIME[ext]) return false;
  if (!filePath.startsWith(CLIENT_DIR + sep)) return false;

  return stat(filePath)
    .then((s) => {
      if (!s.isFile()) return false;
      const stream = createReadStream(filePath);
      res.writeHead(200, {
        "Content-Type": MIME[ext],
        "Cache-Control": "public, max-age=31536000, immutable",
      });
      stream.pipe(res);
      return true;
    })
    .catch(() => false);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function createRequestProxy(req) {
  const host = req.headers.host || "localhost";
  const proto = req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
  const url = `${proto}://${host}${req.url}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) {
      const vals = Array.isArray(value) ? value : [value];
      for (const v of vals) {
        if (v !== undefined && v !== null) headers.append(key, v);
      }
    }
  }

  const bodyPromise = req.method !== "GET" && req.method !== "HEAD"
    ? readBody(req)
    : Promise.resolve(null);

  return {
    get url() { return url; },
    get method() { return req.method; },
    get headers() { return headers; },
    get signal() { return new AbortController().signal; },
    json() {
      return bodyPromise.then((body) => {
        if (!body || body.length === 0) return null;
        return JSON.parse(body.toString());
      });
    },
    text() {
      return bodyPromise.then((body) => body ? body.toString() : "");
    },
  };
}

createServer(async (req, res) => {
  try {
    const served = await serveStatic(req, res);
    if (served) return;

    const proxyReq = createRequestProxy(req);
    const response = await server.fetch(proxyReq);

    const headers = {};
    response.headers.forEach((value, key) => {
      if (key === "set-cookie") {
        if (!headers[key]) headers[key] = [];
        headers[key].push(value);
      } else if (key !== "content-encoding") {
        headers[key] = value;
      }
    });
    res.writeHead(response.status, headers);
    if (response.body) {
      const reader = response.body.getReader();
      function pump() {
        return reader.read().then(({ done, value }) => {
          if (done) {
            res.end();
            return;
          }
          res.write(value);
          return pump();
        });
      }
      return pump();
    }
    res.end();
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      res.writeHead(500);
      res.end("Internal Server Error");
    }
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
