var x = 230;
var y = [220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660];

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  for (var i = 0; i < y.length; i = i + 1) {
    // draw drip
    ellipse(x, y[i], 10);

    // down 3 pixels each frame
    y[i] = y[i] + 3;

    // if invisible for a full “height” amount, reset
    if (y[i] > height*2) {
      y[i] = 220;
    }
  }
}
