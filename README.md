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

1. Index value with 5 elements in an array: index 0, index 1, index 2, index 3, index 4
2. While loop: To repeat until a certain condition happens. 
   For loop: To itdrate through an object
3. Statement 1, Statement 2, Statement 3
4. refers to the integers of the index
