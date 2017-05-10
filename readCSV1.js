"use strict";

var fs = require('fs');

module.exports = function(path){
  var fixedFile = [];
  var file = fs.readFileSync(path, 'utf-8');
  file = file.split("\r");
  file.splice(-1);

  for(let i = 0; i < file.length; i++){
    var currentLine = file[i];
    var split = currentLine.split(",");
    fixedFile.push(split);
  }

  return fixedFile;
}
