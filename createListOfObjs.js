"use strict";
var readCSV = require("./readCSV");

module.exports = function(path){
  var inputList = readCSV(path);
  var keyList = inputList[0];
  var outputList = [];

  inputList.splice(0, 1);

  for(let i = 0; i < inputList.length; i++){
    let outputObj = {};
    let phonecall = inputList[i];

    for(let j = 0; j < phonecall.length; j++){
      outputObj[keyList[j]] = phonecall[j];
    };
    outputList.push(outputObj);
  };
  return outputList;
};
