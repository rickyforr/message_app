const Router = require("koa-router");
const router = new Router();
const utils = require("../utils/utils");

let messageData = {};

// on app start get data from json file to populate messageData
const setMessages = utils.initialize(() => {
  console.log("initialize");
  const data = utils.getMessages();

  messageData = {
    messages: data.messages,
    lastMessage: data.lastMessage,
    numberOfCalls: data.numberOfCalls
  };
});

// saves messages to json file every 30seconds
const saveMessages = () => {
  console.log(messageData);
  messageData.messages.length
    ? utils.cacheMessages(messageData)
    : (messageData = { messages: [], lastMessage: {}, numberOfCalls: 0 });
  setTimeout(saveMessages, 30 * 1000);
};

setMessages();
saveMessages();

// route for posting new messages
router.post("/messages", ctx => {
  console.time("POST /messages");
  const message = ctx.request.body;
  if (!message.from || !message.to || !message.message) {
    ctx.status = 400;
    ctx.body = { message: "Bad Request" };
  } else {
    const data = {
      from: message.from,
      to: message.to,
      message: message.message
    };
    messageData.messages.push(data);
    messageData.lastMessage = message;
    messageData.numberOfCalls++;

    ctx.status = 201;
    ctx.body = { message: "Message Sent" };
  }
  console.timeEnd("POST /messages");
});

module.exports = router;
