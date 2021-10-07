const path = require("path");
const cmd = require("./helper/cmd");

const run = () => {
  cmd();
};

try {
  run();
} catch (error) {
  console.log(error);
}
