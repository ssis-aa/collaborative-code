let TRIANGLE_HEIGHT = 20
let NUMBER_HORIZONTAL = 30
let NUMBER_VERTICAL = 12

function setup() {
  createCanvas(NUMBER_HORIZONTAL * TRIANGLE_HEIGHT, NUMBER_VERTICAL * TRIANGLE_HEIGHT);
  background(50);
  for(var i =0; i<NUMBER_HORIZONTAL;i++) {
    for(var j =0; j<NUMBER_VERTICAL; j++) {
      noStroke()
      let p1x = i * TRIANGLE_HEIGHT
      let p1y = j * TRIANGLE_HEIGHT
      let p2x = (i + 1) * TRIANGLE_HEIGHT
      let p2y = j * TRIANGLE_HEIGHT
      let p3x = i * TRIANGLE_HEIGHT
      let p3y = (j + 1) * TRIANGLE_HEIGHT
      let p4x = (i + 1) * TRIANGLE_HEIGHT
      let p4y = (j + 1) * TRIANGLE_HEIGHT
      fill(255 - j * 10 - random(0,100), 10, 10)
      triangle(p1x, p1y, p2x, p2y, p3x, p3y)
      fill(255 - j * 10 - random(0,100), 10, 10)
      triangle(p2x, p2y, p3x, p3y, p4x, p4y)
    }
  }  
}

function draw() {
  // ellipse(56, 46, 55, 55);
  // background(220);
}
