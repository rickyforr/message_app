const Koa = require("koa");

const server = new Koa();

server.use(ctx => {
  ctx.body = "Hello Koa";
});
server.listen(3000);
