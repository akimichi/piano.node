// キーボードを描画する
$(function(){
  var barPadding = '1';

  var svgKeyboard = d3.select('body svg#keyboard');
  // white keys 
  for(white_i = 0; white_i < 644; white_i = white_i + 11.5) {
    svgKeyboard
        .append('rect')
        .attr('x',white_i)
        .attr('y',0)
        .attr('class', "white-key")
  }
  // black keys
  for(black_i = 0; black_i < 640; black_i = black_i + 80.5) {
    svgKeyboard
        .append('rect')
        .attr('x',7.1665 + black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',20.83333+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',41.125+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',54.125+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',67.375+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
  }
});
