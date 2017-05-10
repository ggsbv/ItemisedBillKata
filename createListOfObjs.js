"use strict";

module.exports = function(listOfLists, keyList){
  var outputList = [];

  for(let i = 0; i < listOfLists.length; i++){
    var outputObj = {};
    let phonecall = listOfLists[i];

    for(let j = 0; j < phonecall.length; j++){
      outputObj[keyList[j]] = phonecall[j];
    };
    outputList.push(outputObj);
  };
  return outputList;
};
