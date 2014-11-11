// Reset the game
var reset = function () {

  isGameStarted = false;

  var xPosition = (canvas.width - ball.size) / 2,
      yPosition = (canvas.height - ball.size) / 2,
      xVelocity = Math.random() > 0.5 ? ball.speed : -ball.speed, // randomly start from left or right
      yVelocity = 0;

  ball.position = new Vector2(xPosition, yPosition);
  ball.velocity = new Vector2(xVelocity, yVelocity);

  var xPositionP1 = 20,
      yPositionP1 = canvas.height / 2 - p1.height / 2,
      xPositionP2 = canvas.width - p2.width - 20,
      yPositionP2 = canvas.height / 2 - p2.height / 2;

  p1.pos.set(xPositionP1, yPositionP1);
  p2.pos.set(xPositionP2, yPositionP2);

  // Set points of paddles
  // Points are set in this order: topLeft, topRight, bottomRight, bottomLeft
  p1.points = [
    new Vector2(xPositionP1, yPositionP1),
    new Vector2(xPositionP1 + p1.width, yPositionP1),
    new Vector2(xPositionP1 + p1.width, yPositionP1 + p1.height),
    new Vector2(xPositionP1, yPositionP1 + p1.height)
  ];

  p2.points = [
    new Vector2(xPositionP2, yPositionP2),
    new Vector2(xPositionP2 + p2.width, yPositionP2),
    new Vector2(xPositionP2 + p2.width, yPositionP2 + p2.height),
    new Vector2(xPositionP2, yPositionP2 + p2.height)
  ];

  // p1.pivot.set(p1.width / 2, p1.height / 2).addSelf(p1.pos);
  // p2.pivot.set(p2.width / 2, p2.height / 2).addSelf(p2.pos);
  p1.updatePivot();
  p2.updatePivot();

  p1.direction.set(0, 1);
  p2.direction.set(-0, 1);
}
