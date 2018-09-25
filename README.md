# hw3
1. The grass: 
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(-10, 10), height-10-random(h));
2. The lawn mower (white rectangle):
  if (random() > 0.999) {
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;
  }
3. h is for the default height variable of the length of the grass
4. colorMode HSB adjusts the: Hue, Saturation, and Brightness of the canvas
5. Because the first two variables of an object is first anchord at the top right corner, when the first y variable is a negative, the shape's first point will be on the bottom left instead because it goes up instead of down.
