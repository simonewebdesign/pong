// Reset the game when the player catches a monster
var reset = function () {

  ball.direction = '';
  ball.x = (canvas.width - ball.size) / 2;
  ball.y = (canvas.width - ball.size) / 2;

  // p1.y = (canvas.height - 80) / 2;
  // p2.y = (canvas.height - 80) / 2;
};
