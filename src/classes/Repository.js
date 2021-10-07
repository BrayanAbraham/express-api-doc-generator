const path = require("path");
const fs = require("fs");
const File = require("./File");

class Repository {
  constructor(rootPath) {
    this.rootPath = null;
    this.packageJsonFile = null;

    this.setRootPath(rootPath);
    this.setPackageJsonFile(`${this.rootPath}/package.json`);
    this.setEntryPoint(
      `${this.rootPath}/${this.packageJsonFile.decodedContents.main}`
    );

    console.log(this);
  }

  setRootPath(rootPath) {
    if (!rootPath) {
      throw new Error("Root path required.");
    }
    this.rootPath = path.resolve(rootPath);
  }

  setPackageJsonFile(filePath) {
    this.packageJsonFile = new File(filePath);
  }

  setEntryPoint(entryPoint) {
    this.entryPoint = new File(entryPoint);
  }

  getRootPath() {
    return this.rootPath;
  }

  getPackageJsonFile() {
    return this.packageJsonFile;
  }

  getEntryPoint() {
    return this.entryPoint;
  }
}

module.exports = Repository;
