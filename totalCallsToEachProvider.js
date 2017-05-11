const callsToProvider = require("./callsToProvider");

module.exports = function(listOfCallDetails){
  var outputObjList = {};

  listOfCallDetails
    .forEach((currentCallDetails) => {
      if(outputObjList[currentCallDetails.Provider]){
        outputObjList[currentCallDetails.Provider]++
      } else {
        outputObjList[currentCallDetails.Provider] = 1;
      };
    })

  return outputObjList;
};
