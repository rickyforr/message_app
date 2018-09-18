const Router = require("koa-router");
const router = new Router();
const utils = require("../utils/utils");

let messageData = {
  messages: [],
  lastMessage: {},
  numberOfCalls: 0
};

// on app start get data from json file to populate messageData
const initialize = (() => {
  let executed = false;
  return () => {
    if (!executed) {
      executed = true;
      const data = JSON.parse(utils.getMessages());
      messageData = {
        messages: data.messages,
        lastMessage: data.lastMessage,
        numberOfCalls: data.numberOfCalls
      };
    }
  };
})();
initialize();

// saves messages to json file every 30seconds
const cacheMessages = () => {
  messageData.messages
    ? utils.cacheMessages(messageData)
    : (messageData = { messages: [], lastMessage: {}, numberOfCalls: 0 });
  setTimeout(cacheMessages, 6 * 1000);
};
cacheMessages();

// route for posting new messages
router.post("/messages", ctx => {
  console.time("POST /messages");
  if (
    !ctx.request.body.from ||
    !ctx.request.body.to ||
    !ctx.request.body.message
  ) {
    ctx.status = 400;
    ctx.body = { message: "Bad Request" };
  } else {
    const data = {
      from: ctx.request.body.from,
      to: ctx.request.body.to,
      message: ctx.request.body.message
    };
    messageData.messages.push(data);
    messageData.lastMessage = ctx.request.body;
    messageData.numberOfCalls++;

    ctx.status = 201;
    ctx.body = { message: "Message Sent" };
  }
  console.timeEnd("POST /messages");
});

module.exports = router;
