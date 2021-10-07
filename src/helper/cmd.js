const fs = require("fs");
const Repository = require("../classes/Repository");

const rootPathMode = () => {
  const repository = new Repository(process.argv[3]);

  // entryFile = packagedata.main;
  // console.log(entryFile);
  // try {
  //   entryFileContents = fs.readFileSync(`${rootPath}/${entryFile}`, "utf-8");
  // } catch (error) {
  //   if (error.code === "ENOENT") {
  //     error.message = "Index File not found";
  //   }
  //   throw error;
  // }
  // console.log(entryFileContents);
};

const cmd = () => {
  const mode = process.argv[2];
  let rootPath;
  let packagedata;
  let entryFile;
  let entryFileContents;
  switch (mode) {
    case "-r":
      rootPathMode();
      break;
    case "-e":
      rootPath = process.argv[3];
      try {
        packagedata = fs.readFileSync(`${rootPath}/package.json`, "utf-8");
      } catch (error) {
        if (error.code === "ENOENT") {
          error.message = "package.json not found";
        }
        throw error;
      }
      packagedata = JSON.parse(packagedata);
      const entryFileName = packagedata.main;
      console.log(entryFileName);
      let entryFileData;
      try {
        entryFileData = fs.readFileSync(
          `${rootPath}/${entryFileName}`,
          "utf-8"
        );
      } catch (error) {
        if (error.code === "ENOENT") {
          error.message = "Index File not found";
        }
        throw error;
      }
      console.log(entryFileData);
    default:
      throw new Error("Wrong Mode");
      break;
  }
};

module.exports = cmd;
