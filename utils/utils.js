const fs = require("fs");

// method that returns the saved message data.
const getMessages = () => {
  return fs.readFileSync("messages.json", "utf8");
};

// method that writes message data to json file.
const cacheMessages = db => {
  console.log("cacheMessages");
  const data = JSON.stringify(db);
  console.log("data", data);

  fs.writeFile("messages.json", data, err => {
    if (err) throw err;
  });
};

const utils = {
  cacheMessages,
  getMessages
};

module.exports = utils;
