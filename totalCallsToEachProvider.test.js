const assert = require("assert");
const createListOfObjs = require("../createListOfObjs");
const totalCallsToEachProvider = require("../totalCallsToEachProvider");

const testList = createListOfObjs("./testList.csv");
const expectedResults = {
  "MTN" : 2,
  "Vodacom" : 1,
  "CellC" : 1 
}


describe("totalCallsToEachProvider function", function(){
  it("should return " + expectedResults.toJSON(), function(){
    assert.deepEqual(totalCallsToEachProvider(testList), expectedResults);
  });
});
