// [1]
var createListOfObjs = require("./createListOfObjs");
// [2]
var callsToProvider = require("./callsToProvider");
// [3]
var totalCallsToEachProvider = require("./totalCallsToEachProvider");
// [4]
var convertToSeconds = require("./convertToSeconds");
// [5]
var sortByAscendingDuration = require("./sortByAscendingDuration");
// [6]
var itemisedBill = require("./itemisedBill");
// [1]
var listOfCallDetails = createListOfObjs("./ItemisedBill.csv");
// [2]
var callsToMTN = callsToProvider(listOfCallDetails, "MTN");
// [3]
var callsToEachProvider = totalCallsToEachProvider(listOfCallDetails);
// [4]
var seconds = convertToSeconds("01h30m30s");
// [5]
var sortedList = sortByAscendingDuration(listOfCallDetails);
// [6]
var template = itemisedBill(listOfCallDetails);
console.log(template);
