const fs = require("fs");

const initialize = () => {
  console.log("initialize db");

  const db = {
    messages: ["initial"],
    lastMessage: {},
    numberOfCalls: 0
  };
  const data = JSON.stringify(db);
  fs.writeFile("messages.json", data, err => {
    if (err) throw err;
  });
};

const cacheMessages = db => {
  console.log("cacheMessages");
  const data = JSON.stringify(db);
  fs.writeFile("messages.json", data, err => {
    if (err) throw err;
    console.log("complete");
  });
};

const utils = {
  cacheMessages,
  initialize
};

module.exports = utils;
