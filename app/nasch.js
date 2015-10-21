"use strict";

(function AnimationNaSch() {
  var svg = d3.selectAll('#nasch')
    .attr('width', 800)
    .attr('height', 50);

  var L = 16;
  var N = 5;
  var V = 3;
  var p = 0.3;

  var box_size = 50;
  var circle_size = 0.8 * box_size;

  svg.selectAll("rect")
    .data(d3.range(L))
    .enter()
    .append('rect')
    .attr('x', function(d) { return box_size * d; })
    .attr('width', box_size)
    .attr('height', box_size)
    .attr('stroke', 'black')
    .attr('fill', 'none')
    ;

  function compareNumbers(a, b) { return a - b; }

  var cells = _.sample(_.range(L), N)
    .sort(compareNumbers)
    .map(function(x) {
      return {x: x, v: 0};
    });

  function update() {
    //
    // update speeds
    //
    for (var i = 0; i < N; ++i) {
      var h = cells[(i + 1) % N].x - cells[i].x - 1;

      if (h < 0) {
        h += L;
      }

      cells[i].v = Math.min(cells[i].v + 1, V, h);

      if (cells[i].v > 0 && Math.random() < p) {
        cells[i].v -= 1;
      }
    }

    //
    // update positions
    //
    for (var i = 0; i < N; i++) {
      cells[i].x += cells[i].v;
      cells[i].x %= L;
    }

    var circles = svg.selectAll("circle")
      .data(cells);

    circles
      .transition()
      .attr('cx', function(d) { return box_size * (d.x + 0.5); })
      ;

    circles.enter().append('circle')
      .attr('class', 'vehicle')
      .attr('cx', function(d) { return box_size * (d.x + 0.5); })
      .attr('cy', function(d) { return box_size * 0.5; })
      .attr('r', circle_size / 2)
      ;

    var texts = svg.selectAll("text")
      .data(cells);

    texts
      .transition()
      .attr('x', function(d) { return box_size * (d.x + 0.5); })
      .text(function(d) { return d.v; })
      ;

    texts.enter().append('text')
      .attr('class', 'vehicle')
      .attr('x', function(d) { return box_size * (d.x + 0.5); })
      .attr('y', function(d) { return box_size * 0.5; })
      .text(function(d) { return d.v; })
      ;


    circles.exit().remove();
  }

  update();

  setInterval(update, 1000);
})();

