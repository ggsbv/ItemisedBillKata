const convertToSeconds = require("./convertToSeconds");

module.exports = function(listOfCallDetails){
  listOfCallDetails
    .sort(function(a, b){
      a = convertToSeconds(a.Duration);
      b = convertToSeconds(b.Duration);
      return a - b;
    });

    return listOfCallDetails;
};
