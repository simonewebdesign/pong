// Handle keyboard controls
var keysDown = {};
var ROTATION_ANGLE = 5;

addEventListener("keydown", function (e) {

  if (e.keyCode == 87) { // P1 pressed up (key: w)
    if (!keysDown[87]) { // execute only the first time
      p1.angle = ROTATION_ANGLE;
      p1.rotatePoints(p1.angle);
    }
  }

  if (e.keyCode == 83) { // P1 pressed down (key: s)
    if (!keysDown[83]) { // execute only the first time
      p1.angle = -ROTATION_ANGLE;
      p1.rotatePoints(p1.angle);
    }
  }

  if (e.keyCode == 38) { // P2 pressed up (key: arrow up)
    if (!keysDown[38]) { // execute only the first time
      p2.angle = ROTATION_ANGLE;
      p2.rotatePoints(p2.angle);
    }
  }

  if (e.keyCode == 40) { // P2 pressed down (key: arrow down)
    if (!keysDown[40]) { // execute only the first time
      p2.angle = -ROTATION_ANGLE;
      p2.rotatePoints(p2.angle);
    }
  }

  keysDown[e.keyCode] = true;

}, false);

addEventListener("keyup", function (e) {

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

  delete keysDown[e.keyCode];

}, false);
