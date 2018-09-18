const fs = require("fs");

// method that returns the saved message data.
const getMessages = () => {
  return JSON.parse(fs.readFileSync("messages.json", "utf8"));
};

// method that writes message data to json file.
const cacheMessages = db => {
  const data = JSON.stringify(db);
  fs.writeFile("messages.json", data, err => {
    if (err) throw err;
  });
};

// method that will call a function once/only on app start up.
const initialize = (fn, context) => {
  let result;

  return () => {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
};

const utils = {
  cacheMessages,
  getMessages,
  initialize
};

module.exports = utils;
