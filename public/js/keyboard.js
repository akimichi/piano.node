// キーボードを描画する
$(function(){
  var barPadding = '1';

  var svgKeyboard = d3.select('body svg#keyboard');
  // white keys 
  for(white_i = 0; white_i < 730.25; white_i = white_i + 5.75) {
    svgKeyboard
        .append('rect')
        .attr('x',white_i)
        .attr('y',0)
        .attr('class', "white-key")
  }
  // black keys
  for(black_i = 0; black_i < 700; black_i = black_i + 40.25) {
    svgKeyboard
        .append('rect')
        .attr('x',3.583325 + black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',10.416665+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',20.5625+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',27.0625+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',33.6875+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
  }
});
