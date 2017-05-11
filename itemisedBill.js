const convertToSeconds = require("./convertToSeconds");

module.exports = function(listOfCallDetails){
  var availableProviders = {};
  var unorderedList = [];

  listOfCallDetails
    .forEach((currentCallDetails) => {
      var outputObj = {};
      if(availableProviders[currentCallDetails.Provider] === undefined){
        availableProviders[currentCallDetails.Provider] = 1;
      }
    })

  

  return unorderedList;
}
