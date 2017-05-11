module.exports = function(listOfPhoneCallDetails, provider){
  var outputList = [];

  listOfPhoneCallDetails
    .forEach((currentPhoneCallDetails) => {
      if(currentPhoneCallDetails.Provider === provider){
        outputList.push(currentPhoneCallDetails)
      };
    });
  return outputList;
};
