const fs = require("fs");
const path = require("path");

class File {
  constructor(filePath) {
    this.name = null;
    this.type = null;
    this.filePath = null;
    this.contents = null;
    this.decodedContents = null;

    if (filePath) {
      this.filePath = path.resolve(filePath);
    } else {
      throw new Error("File path required.");
    }

    this.name = this.filePath.split("\\").pop();
    this.type = this.name.split(".").pop();

    this.readFile();
  }

  readFile() {
    try {
      this.contents = fs.readFileSync(this.filePath, "utf-8");
      if (this.type === "json") {
        this.decodedContents = JSON.parse(this.contents);
      }
    } catch (error) {
      throw new Error(`${this.name} not found`);
    }
  }
}

module.exports = File;
