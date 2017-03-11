const expect = require('expect.js')

describe("IO", () => {
  var IO = require('../lib/io.js');
  it("IO.unit", () => {
    expect(
      IO.run(IO.unit(1))
    ).to.eql(
      1
    );    
  });
});
