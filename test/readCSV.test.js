const expectedResults = [
  [ 'Date', 'Provider', 'Number', 'Duration' ],
  [ '01/10/2015', 'MTN', '0832401145', '00h05m34s' ],
  [ '01/10/2015', 'MTN', '0838758090', '00h01m34s' ],
  [ '03/10/2015', 'Vodacom', '0821302398', '00h00m34s' ],
  [ '03/10/2015', 'CellC', '0841257809', '00h02m34s' ],
]

const readCSV = require("../readCSV");
const assert = require("assert");

describe("readCSV function", function(){
  it("should return the data stored in 'expectedResults'", function(){
    assert.deepEqual(readCSV("./testList.csv"), expectedResults);
  });
});
