const assert = require("assert");
const convertToSeconds = require("../convertToSeconds");

describe("convertToSeconds function", function(){
  it("should return 5430", function(){
    assert.deepEqual(convertToSeconds("01h30m30s"), 5430);
  });
});
