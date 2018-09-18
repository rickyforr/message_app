const Router = require("koa-router");
const stats = new Router();
const utils = require("../utils/utils");

// route for getting latest message and number of calls
stats.get("/stats", async ctx => {
  console.time("GET /stats");
  const stats = utils.getMessages();

  ctx.body = {
    numberOfCalls: stats.numberOfCalls,
    lastMessage: stats.lastMessage
  };

  console.timeEnd("GET /stats");
});

module.exports = stats;
