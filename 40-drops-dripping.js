var x = 230;
var y = [220, 280, 320];

function setup() {
	createCanvas(400, 400);
	for (var i = 0; i < 40; i = i + 1) {
		append(y, random(220, 800));
	}
}


function draw() {
	background(0);
	noStroke();

	// draw pipe
	fill(255)
	rect(0, 200, x, 20);

	if (mouseIsPressed) {
		fill(150);
	} else {
		fill(255);
	}

	if (!mouseIsPressed) {
		for (var i = 0; i < y.length; i = i + 1) {
			// draw drip
			ellipse(x, y[i], 10);

			// down 3 pixels each frame
			y[i] = y[i] + 3;

			// if invisible for a full “height” amount, reset
			if (y[i] > height * 2) {
				y[i] = 220;
			}
		}
	}
}
