const path = require("path");
const fastify = require("fastify")({
  // logger: true,
});

fastify.register(require("fastify-static"), {
  root: path.resolve("assets"),
  // prefix: '/public/', // optional: default '/'
});

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
