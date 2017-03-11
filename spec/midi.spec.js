const expect = require('expect.js')

describe("MIDI library test", () => {
  var midi = require('midi');

  it("MIDI module", () => {

  });
  // it("output", () => {
  //   // Set up a new output.
  //   var output = new midi.output();
  //   console.log(output)
  //   // Count the available output ports.
  //   var count = output.getPortCount();
  //   expect(count).to.be(3);

  //   // Get the name of a specified output port.
  //   var name = output.getPortName(0);
  //   expect(name).to.be("Midi Through 14:0");
  //   // expect(name).to.be("TiMidity 128:0");

  //   // Open the first available output port.
  //   output.openPort(0);

  //   // Send a MIDI message.
  //   output.sendMessage([176,22,60]);  // control change(volume)
  //   output.sendMessage([144,64,90]); // note on
  //   // output.sendMessage([128,64,90]); // note off

  //   // Close the port when done.
  //   output.closePort();
  // });
});

