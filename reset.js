// Reset the game
var reset = function () {

  isGameStarted = false;

  var xPosition = (canvas.width - ball.size) / 2,
      yPosition = (canvas.height - ball.size) / 2,
      xVelocity = Math.random() > 0.5 ? 600 : -600, // randomly start from left or right
      yVelocity = 0;

  ball.position = new Vector2(xPosition, yPosition);
  ball.velocity = new Vector2(xVelocity, yVelocity);
}
