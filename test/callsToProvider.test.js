const assert = require("assert");
var createListOfObjs = require("../createListOfObjs");
var callsToProvider = require("../callsToProvider");

var testData = createListOfObjs("./testList.csv");
var expectedResults = [
  {
    "Date" : "01/10/2015",
    "Provider" : "MTN",
    "Number": "0832401145",
    "Duration" : "00h05m34s"
  },
  {
    "Date" : "01/10/2015",
    "Provider" : "MTN",
    "Number": "0838758090",
    "Duration" : "00h01m34s"
  }
]

describe("callsToProvider function", function(){
  it("should return the data stored in 'expectedResults'", function(){
    assert.deepEqual(callsToProvider(testData, "MTN"), expectedResults);
  });
});
