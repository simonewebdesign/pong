// Reset the game
var reset = function () {

  isGameStarted = false;

  ball.x = (canvas.width - ball.size) / 2;
  ball.y = (canvas.height - ball.size) / 2;

  ball.speedX = 1;
  ball.speedY = 1;
};
