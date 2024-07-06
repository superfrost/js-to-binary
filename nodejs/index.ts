import Fastify from "fastify";
import { readFile } from "node:fs/promises";
import { getAsset } from "node:sea";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world!" });
});

fastify.get("/help", async (request, reply) => {
  reply.send(await readFile("./help.json", { encoding: "utf8" }));
});

fastify.get("/asset", async (request, reply) => {
  const file = getAsset("help", "utf8");
  reply.send(file);
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
});
