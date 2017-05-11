const assert = require("assert");
const createListOfObjs = require("../createListOfObjs");
const sortByAscendingDuration = require("../sortByAscendingDuration");

const testList = createListOfObjs("./testList.csv");
const expectedResults = [
  {
    "Date"      : "03/10/2015",
    "Provider"  : "Vodacom",
    "Number"    : "0821302398",
    "Duration"  : "00h00m34s"
  },
  {
    "Date"      : "01/10/2015",
    "Provider"  : "MTN",
    "Number"    : "0832401145",
    "Duration"  : "00h01m34s"
  },
  {
    "Date"      : "03/10/2015",
    "Provider"  : "CellC",
    "Number"    : "0841257809",
    "Duration"  : "00h02m34s"
  },
  {
    "Date"      : "01/10/2015",
    "Provider"  : "MTN",
    "Number"    : "0832401145",
    "Duration"  : "00h05m34s"
  }
]

describe("sortByAscendingDuration function", function(){
  it("should return " + expectedResults.toJSON(), function(){
    assert.deepEqual(totalCallsToEachProvider(testList), expectedResults);
  });
});
