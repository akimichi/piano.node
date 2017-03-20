$(function(){
  var socket = io();
  var keyToPosition = function(key) {
    var octave = Math.floor(key / 12);
    var offset = 0;
    switch(key % 12) {
      case 0: // C
        break;
      case 1:  // C#
        offset = 7.1665;
        break;
      case 2:  // D
        offset = 11.5;
        break;
      case 3:  // D#
        offset = 20.83333;
        break;
      case 4:  // E
        offset = 23;
        break;
      case 5:  // F
        offset = 34.5;
        break;
      case 6:  // F#
        offset = 41.125;
        break;
      case 7:  // G
        offset = 46;
        break;
      case 8:  // G#
        offset = 54.125;
        break;
      case 9:  // A
        offset = 57.5;
        break;
      case 10: // A#
        offset = 67.375;
        break;
      case 11: // B
        offset = 69;
        break;
    }
    return (octave - 1) * 7 * 11.5 + offset;
  };
  socket.on('message', (data) => {
    var height = 150;
    var width = 3000;
    var svgEqualizer = d3.select('body svg#equalizer')
                          .attr('height',height)
                          .attr('weight',width)
    var status = parseInt(data.message[0]);
    var key = parseInt(data.message[1]);
    var note = keyToPosition(key) + 2;
    // var note = key - 8;
    console.log("note: " + data.message[1]);
    var velocity = parseInt(data.message[2]) * 1.4 - 30;
    console.log("velocity: " + velocity);
    var deltaTime = parseFloat(data.deltaTime);

    // noteOn
    if(status === 144){
      console.log("noteOn: " + note)
      svgEqualizer
        .append('rect')
        .transition()
        .attr('id', note)
        .attr('x',note)
        .attr('y', height - velocity) 
        .attr('class', "sound-bar")
        .attr('width', 4)
        .attr('height', velocity)
        .attr("fill", d3.hsl(5 * velocity, 1,0.5 ))
        // .attr("fill", d3.rgb(2 * velocity, note, 0))
        // .attr("fill", d3.rgb(2 * (velocity - 30), note, 0, velocity - 80))
    }
    // noteOff
    if(status === 128){
      console.log("noteOff: " + note)
      svgEqualizer
        .selectAll('rect')
        .remove()
    }
  });
});
