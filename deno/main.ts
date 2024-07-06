import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import file from "./help.json" with { type: "json" };

const app = new Hono();

app.get("/", (c) => c.text("Hello Deno!"));

app.get("/asset", (c) => c.json(file));

app.get("/help", serveStatic({ path: "help.json" }));

Deno.serve(app.fetch);
