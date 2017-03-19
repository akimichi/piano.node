$(function(){
  var socket = io();
  socket.on('message', function(data){
    var height = 150;
    var width = 3000;
    var svgEqualizer = d3.select('body svg#equalizer')
                          .attr('height',height)
                          .attr('weight',width)
    var status = parseInt(data.message[0]);
    var note = 23 * parseInt(data.message[1]);
    var velocity = data.message[2];
    var deltaTime = parseFloat(data.deltaTime);
    // noteOn
    if(status === 144){
      console.log("noteOn: " + note)
      svgEqualizer
        .append('rect')
        .attr('id', note)
        .attr('x',note)
        .attr('y', height - velocity) 
        .attr('class', "sound-bar")
        .attr('width', 5)
        .attr('height', velocity)
    }
    // noteOff
    if(status === 128){
      console.log("noteOff: " + note)
      svgEqualizer
        .selectAll('rect')
        .remove()
    }
    // var noteOff = function(){
    // };
    // setTimeout(noteOff, deltaTime);
  });
});
