// Handle keyboard controls
var keysDown = {};
var ROTATION_ANGLE = 5;

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;

  if (e.keyCode == 87) { // P1 pressed up (key: w)
    p1.angle = ROTATION_ANGLE;
    p1.rotatePoints(p1.angle);
  }

  if (e.keyCode == 83) { // P1 pressed down (key: s)
    p1.angle = -ROTATION_ANGLE;
    p1.rotatePoints(p1.angle);
  }

  if (e.keyCode == 38) { // P2 pressed up (key: arrow up)
    p2.angle = ROTATION_ANGLE;
    p2.rotatePoints(p2.angle);
  }

  if (e.keyCode == 40) { // P2 pressed down (key: arrow down)
    p2.angle = -ROTATION_ANGLE;
    p2.rotatePoints(p2.angle);
  }

}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];

  if (e.keyCode == 87) { // P1 released up (key: w)
    p1.angle = 0;
    p1.realignPoints();
  }

  if (e.keyCode == 83) { // P1 released down (key: s)
    p1.angle = 0;
    p1.realignPoints();
  }

  if (e.keyCode == 38) { // P2 released up (key: arrow up)
    p2.angle = 0;
    p2.realignPoints();
  }

  if (e.keyCode == 40) { // P2 released down (key: arrow down)
    p2.angle = 0;
    p2.realignPoints();
  }

}, false);
