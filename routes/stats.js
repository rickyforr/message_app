const Router = require("koa-router");
const stats = new Router();
const fs = require("fs");

// route for getting latest message and number of calls
stats.get("/stats", async ctx => {
  console.time("GET /stats");
  const stats = JSON.parse(fs.readFileSync("messages.json", "utf8"));

  ctx.body = {
    numberOfCalls: stats.numberOfCalls,
    lastMessage: stats.lastMessage
  };

  console.timeEnd("GET /stats");
});

module.exports = stats;
