// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
  console.log("keydown", e.keyCode);
  keysDown[e.keyCode] = true;

  if (e.keyCode == 87) { // P1 holding up (key: w)
    console.log("rotatedlool")
    p1.angle = 5;
    p1.rotatePoints(p1.angle);
  }

  if (e.keyCode == 83) { // P1 holding down (key: s)
    p1.angle = -5;
    p1.rotatePoints(p1.angle);
  }

}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];

  if (e.keyCode == 87) { // P1 releasing up (key: w)
    p1.angle = 0;
    p1.realignPoints();
  }

  if (e.keyCode == 83) { // P1 releasing down (key: s)
    p1.angle = 0;
    p1.realignPoints();
  }

}, false);
