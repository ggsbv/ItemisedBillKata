var testList = [
  [ '01/10/2015', 'MTN', '0832401145', '00h05m34s' ],
  [ '01/10/2015', 'MTN', '0838758090', '00h01m34s' ],
  [ '03/10/2015', 'Vodacom', '0821302398', '00h00m34s' ],
  [ '03/10/2015', 'CellC', '0841257809', '00h02m34s' ]
]

var keyList = ['Date', 'Provider', 'Number', 'Duration']

var expectedResults = [
  { Date: '01/10/2015',
    Provider: 'MTN',
    Number: '0832401145',
    Duration: '00h05m34s' },
  { Date: '01/10/2015',
    Provider: 'MTN',
    Number: '0838758090',
    Duration: '00h01m34s' },
  { Date: '03/10/2015',
    Provider: 'Vodacom',
    Number: '0821302398',
    Duration: '00h00m34s' },
  { Date: '03/10/2015',
    Provider: 'CellC',
    Number: '0841257809',
    Duration: '00h02m34s' }
]

const assert = require("assert");
const createListOfObjs = require("../createListOfObjs");

describe("function createListOfObjs", function(){
  it("should return data in expectedResults variable", function(){
    assert.deepEqual(createListOfObjs(testList, keyList), expectedResults);
  });
});
