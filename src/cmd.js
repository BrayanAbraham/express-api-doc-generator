const fs = require("fs");

const cmd = () => {
  const rootPath = process.argv[3];
  let data;
  data = fs.readFileSync(`${rootPath}/package.json`, "utf-8");
  data = JSON.parse(data);
  const entryPoint = data.main;
  console.log(entryPoint);
};

module.exports = cmd;
