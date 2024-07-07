import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import file from "./help.json";

const app = new Hono();
app.get("/", (c) => c.json({ hello: "Bun!" }));

app.get("/asset", (c) => c.json(file));

app.get("/help", serveStatic({ path: "./help.json" }));

export default app;
