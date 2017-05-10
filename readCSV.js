var fs = require("fs");

module.exports = function(fname){
  var outputList = [];

  var file = fs.readFileSync(fname, "utf-8");
  file = file.split("\r");
  file.splice(-1);
  file.forEach((line) => {
    outputList.push(line.split(","));
  })
  return outputList;
}
