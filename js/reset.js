// Reset the game
var reset = function () {

  isGameStarted = false;

  var xPosition = (canvas.width - ball.size) / 2,
      yPosition = (canvas.height - ball.size) / 2,
      xVelocity = Math.random() > 0.5 ? ball.speed : -ball.speed, // randomly start from left or right
      yVelocity = Math.random() > 0.5 ? ball.speed : -ball.speed; // randomly start from top or bottom

  ball.pos = new Vector2(xPosition, yPosition);
  ball.velocity = new Vector2(xVelocity, yVelocity);

  p1.pos.set(xPositionP1, yPositionP1);
  p2.pos.set(xPositionP2, yPositionP2);

  // Set points of paddles
  // Points are set in this order: topLeft, topRight, bottomRight, bottomLeft
  p1.resetPoints();
  p2.resetPoints();

  // p1.pivot.set(p1.width / 2, p1.height / 2).addSelf(p1.pos);
  // p2.pivot.set(p2.width / 2, p2.height / 2).addSelf(p2.pos);
  p1.updatePivot();
  p2.updatePivot();

  p1.direction.set(0, 1);
  p2.direction.set(-0, 1);
}
