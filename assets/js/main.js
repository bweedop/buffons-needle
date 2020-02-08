let line_coordinates = [];
let needle_coordinates = [];
var t;
var n_lines = 5;
var n = 0;
var h = 0;
var l;
var pi_est;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 1.5;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth * 0.75, windowHeight * 0.5);
  centerCanvas();
  background(0);
  noFill();
  cnv.parent('sketch-holder');

  stroke(255, 255, 255);
  t = width / n_lines;
  for (let i = 0; i <= width; i += width / n_lines) {
    line(i, 0, i, height);
    line_coordinates.push(i);
  }
  frameRate(120);
}

function windowResized() {
  centerCanvas();
}

function range(start, stop, step) {
  var a = [start],
    b = start;
  while (b < stop) {
    a.push((b += step || 1));
  }
  return a;
}

function draw() {
  n++;
  l = width / n_lines;
  let needle_range = [];
  var m = Math.ceil(random(0, 90));
  x_1 = Math.floor(random(0, width));
  y_1 = Math.floor(random(0, height));
  x_2 = Math.ceil(x_1 + l * Math.cos(m / Math.PI));
  y_2 = Math.ceil(y_1 + l * Math.sin(m / Math.PI));
  if (x_1 < x_2) {
    needle_range = range(x_1, x_2, 1);
  } else {
    needle_range = range(x_2, x_1, 1);
  }
  stroke(255, 204, 0);
  line(x_1, y_1, x_2, y_2);
  var tmp = line_coordinates.filter(
    value => -1 !== needle_range.indexOf(value)
  );
  if (tmp.length != 0) {
    h++;
  }
  pi_est = (2 * n) / h;
  document.getElementById("pi_est").innerHTML = pi_est;
}
