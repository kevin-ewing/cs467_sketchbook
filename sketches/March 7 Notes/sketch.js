const NOISE_DIFF = 15;

function setup() {
  createCanvas(800, 800); // create a 400 x 400 canvas
  angleMode(DEGREES);
  colorMode(HSB);
  noLoop();

}

function draw() {
  background(321,83,86); // set the background color to gray
  stroke(321,83,86); // set the stroke color to black
  strokeWeight(2);
  translate(width/2, height/2);
  let myRadius= width/2-25;
  let myAngle = 360/8
  const lightViolet = color(47,86,86);
  const darkViolet = color(47,73,56);
  const lightGreen = color(194,88,86);
  const darkGreen = color(194,93,56);

  // calculate the vertices of the octagon
  for (let x = 0; x < 61; x ++){

    const colorDist = (cos(map(x, 0, 61/2, 0, 360)) +1) / 2;

    if (x % 2 == 0){
      fill(lerpColor(darkViolet, lightViolet, colorDist));
    }
    else{
      fill(lerpColor(darkGreen, lightGreen, colorDist));
    }

    beginShape();
    for (let i = 0; i < 8; i ++){
      vertex(myRadius * cos(i * myAngle), myRadius * sin(i*myAngle));
    }
    endShape(CLOSE);

    rotate(myAngle/4);
    scale(.94);
  }

  // Add noise to the image
  loadPixels();
  // for (let i = 0; i < width; i++) {
  //   for (let j = 0; j < height; j++) {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height * 4; j++) {
      let index = (i + j * width) * 4;
      let r = pixels[index];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      
      // Add noise to the color values
      r += random(-NOISE_DIFF, NOISE_DIFF);
      g += random(-NOISE_DIFF, NOISE_DIFF);
      b += random(-NOISE_DIFF, NOISE_DIFF);
      
      pixels[index] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
    }
  }
  updatePixels();

}
