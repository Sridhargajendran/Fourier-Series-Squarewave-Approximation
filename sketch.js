let time = 0;
let wave = [];
let slider;

function setup() {
  createCanvas(600, 400);
  slider = createSlider(1, 10, 1);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  let x = 0;
  let y = 0;
  for (i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    radius = 75 * (4 / (n * PI));

    noFill();
    stroke(255, 100);
    ellipse(prevx, prevy, radius * 2);
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    //ellipse(prevx, prevy, 8);
  }
  wave.unshift(y);
  translate(150, 0);
  line(0, wave[0], x - 150, y);
  beginShape();
  noFill();
  for (i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }

  if (wave.length > 200) {
    wave.pop();
  }

  endShape();

  time += 0.05;
}
