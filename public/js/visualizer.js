$(function(){
  var barPadding = '1';

  var svgKeyboard = d3.select('body svg#keyboard');
  // white keys 
  for(white_i = 0; white_i < 2921; white_i = white_i + 23) {
    svgKeyboard
        .append('rect')
        .attr('x',white_i)
        .attr('y',0)
        .attr('class', "white-key")
  }
  // black keys
  for(black_i = 0; black_i < 2800; black_i = black_i + 161) {
    svgKeyboard
        .append('rect')
        .attr('x',14.33333 + black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',41.66666+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',82.25+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',108.25+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
    svgKeyboard
        .append('rect')
        .attr('x',134.75+black_i)
        .attr('y', 0)
        .attr('class', "black-key")
  }

  // var createSvg = (parent, height, width) => {
  //   return d3.select(parent).append('svg').attr('height', height).attr('width', width);
  // }
  // var svg = d3.select('body')
  //     .enter()
  //     .append('svg')
  //     .attr('height', svgHeight)
  //     .attr('width', svgWidth);
  
  // var svg = d3.select('body svg#equalizer')
  // var svg = d3.select("#equalizer")
  //   .append("svg:svg")
  //   .attr("width", 600)
  //   .attr("height", 400)
  //   .append("g")
  //   .attr("transform", "translate(100, 100)")
  //   .attr("class", "equalizer");
  // svg.select('rect#keyboard')
  //   .attr("x",50)
  //   .attr("y",100)
  //   .attr("width",900)
  //   .attr("height",10)
  //   .attr("fill","red");
});
