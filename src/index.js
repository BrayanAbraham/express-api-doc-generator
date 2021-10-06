const cmd = require("./cmd");

try {
  if (process.argv[2] === "cmd") {
    cmd();
  } else {
    console.log("error");
  }
} catch (error) {
  if (error.code === "ENOENT") {
    console.log("file Not Found");
  }
}
