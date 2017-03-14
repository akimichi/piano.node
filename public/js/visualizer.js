$(function(){
  var svgHeight = '300';
  var svgWidth = '1200';
  var barPadding = '1';

  // var createSvg = (parent, height, width) => {
  //   return d3.select(parent).append('svg').attr('height', height).attr('width', width);
  // }
  // var svg = createSvg('body', svgHeight, svgWidth);
  // var svg = d3.select('body')
  //     .enter()
  //     .append('svg')
  //     .attr('height', svgHeight)
  //     .attr('width', svgWidth);
  var svg = d3.select('body svg')
  svg.select('rect#keyboard')
    .attr("x",50)
    .attr("y",100)
    .attr("width",900)
    .attr("height",10)
    .attr("fill","red");
});
