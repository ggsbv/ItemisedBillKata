"use strict";

const convertToSeconds = require("./convertToSeconds");
const totalCallsToEachProvider = require("./totalCallsToEachProvider");

function existsInArray(array, string){
  for (var i = 0; i < array.length; i++) {
    if(array[i] === string){
      return true;
    };
  };
  return false;
};

function populateProviders(listOfObjects){
  var availableProviders = [];
  listOfObjects
    .forEach((currentCallDetails) => {
      let provider = currentCallDetails.Provider;
      if(existsInArray(availableProviders, provider) === false){
        availableProviders.push(provider);
      };
    });
  return availableProviders;
};

function convertSecondsToTime(seconds){
  var hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  var minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return ("0" + hours).slice(-2) + "h" + ("0" + minutes).slice(-2) + "m" + ("0" + seconds).slice(-2) + "s";
};

function createBasicTemplate(listOfCallDetails, availableProviders){
  var basicTemplate = [];

  for(let i = 0; i < availableProviders.length; i++){
    let currentProvider = availableProviders[i];

    listOfCallDetails
      .forEach((currentCallDetails) => {
        let currentObj = {};
        if(currentCallDetails.Provider === currentProvider){
          currentObj[currentCallDetails.Provider] = currentCallDetails.Duration;
          basicTemplate.push(currentObj);
        };
      });
  };
  return basicTemplate;
};

function durationInSecondsForProviders(listOfCallDetails, availableProviders){
  var totalSecondsForEachProvider = {};
  for(let i = 0; i < availableProviders.length; i++){
    let currentProvider = availableProviders[i];

    listOfCallDetails
      .forEach((currentCallDetails) => {
        if(currentCallDetails.Provider === currentProvider){
          let durationInSeconds = convertToSeconds(currentCallDetails.Duration);

          if(totalSecondsForEachProvider[currentCallDetails.Provider]){
            totalSecondsForEachProvider[currentCallDetails.Provider] += durationInSeconds;
          } else {
            totalSecondsForEachProvider[currentCallDetails.Provider] = durationInSeconds;
          };
        };
      });
  };
  return totalSecondsForEachProvider;
};

function addSubtotals(template, totalSecondsForEachProvider, listOfCallDetails){
  const callsToEachProvider = totalCallsToEachProvider(listOfCallDetails);
  var currentIdxForSubTotal = 0;

  for(let key in totalSecondsForEachProvider){
    if(currentIdxForSubTotal === 0){
      currentIdxForSubTotal += callsToEachProvider[key];
    } else {
      currentIdxForSubTotal += callsToEachProvider[key]+1;
    }
    var subTotal = {};
    let totalTime = convertSecondsToTime(totalSecondsForEachProvider[key]);
    subTotal["sub-total"] = totalTime;
    template.splice(currentIdxForSubTotal, 0, subTotal);
  };
  return template;
};

module.exports = function(listOfCallDetails){
  const availableProviders = populateProviders(listOfCallDetails);

  var currentIdxForSubTotal = 0;
  var basicTemplate = createBasicTemplate(listOfCallDetails, availableProviders);
  var totalSecondsForEachProvider = durationInSecondsForProviders(listOfCallDetails, availableProviders);
  var outputTemplate = addSubtotals(basicTemplate, totalSecondsForEachProvider, listOfCallDetails);

  return outputTemplate;
};
