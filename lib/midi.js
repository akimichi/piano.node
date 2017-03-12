const IO = require('./io.js');

const midi = require('midi');
const input = new midi.input();
// input.openPort(1);
// console.log(input.getPortCount());
// console.log(input.getPortName(0));
//
// MIDI INの信号を拾ったら実行する
input.on('message', (deltaTime, message) => {
    console.log('m:' + message + ' d:' + deltaTime);
    // Send a MIDI message.
    // output.sendMessage([176,22,1]);
    // output.sendMessage(message);
}); 


// ポートを読み始める
input.openPort(1);

// Set up a new output.
var output = new midi.output();
output.openPort(2);

// Voice Message           Status Byte      Data Byte1          Data Byte2
// -------------           -----------   -----------------   -----------------
// Note off                      8x      Key number          Note Off velocity
// Note on                       9x      Key number          Note on velocity
// Polyphonic Key Pressure       Ax      Key number          Amount of pressure
// Control Change                Bx      Controller number   Controller value
// Program Change                Cx      Program number      None
// Channel Pressure              Dx      Pressure value      None            
// Pitch Bend                    Ex      MSB                 LSB

const MIDI = {
  note_on: (channel, note, velocity) => {
    // [status, data1, data2]
    return IO.sendMessage(output, [channel, node, velocity]);
    // output.sendMessage([channel, node, velocity]);
    // output.sendMessage([144,60,64]);
    // output.sendMessage([128,60,64]);
  },
  note_off: (channel, note) => {
    return IO.sendMessage(output, [channel, node, 0]);
    // output.sendMessage([144,60,0]);
  },
  // 11000000b = 192
  program_change: (channel, number) => {
    // [status, data1, data2]
    return IO.sendMessage(output, [192, number]);
  },
  // 11100000b = 112 
  pitch_bend: (channel, number) => {
    // [status, data1, data2]
    return IO.sendMessage(output, [224, number, number]);
  }
}

module.exports = MIDI;

