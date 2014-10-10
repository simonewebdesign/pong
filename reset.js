// Reset the game
var reset = function () {

  isGameStarted = false;

  var xPosition = (canvas.width - ball.size) / 2,
      yPosition = (canvas.height - ball.size) / 2,
      xVelocity = Math.random() > 0.5 ? 600 : -600, // randomly start from left or right
      yVelocity = 0;

  ball.position = new Vector2(xPosition, yPosition);
  ball.velocity = new Vector2(xVelocity, yVelocity);

  var xPositionP1 = 20,
      yPositionP1 = canvas.height / 2 - p1.height / 2,
      xPositionP2 = canvas.width - p2.width - 20,
      yPositionP2 = canvas.height / 2 - p2.height / 2;

  p1.pos = new Vector2(xPositionP1, yPositionP1);
  p2.pos = new Vector2(xPositionP2, yPositionP2);
}
