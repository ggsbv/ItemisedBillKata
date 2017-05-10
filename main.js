var readCSV = require("./readCSV");
var createListOfObjs = require("./createListOfObjs");

var file = readCSV("./ItemisedBill.csv");

var keyList = file[0];

file.splice(0, 1);

var listOfPhoneCalls = createListOfObjs(file, keyList);
