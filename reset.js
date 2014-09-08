// Reset the game when the player catches a monster
var reset = function () {
  // hero.x = canvas.width / 2;
  // hero.y = canvas.height / 2;

  // Throw the monster somewhere on the screen randomly
  // monster.x = monsterImage.width + (Math.random() * (canvas.width - monsterImage.width));
  // monster.y = monsterImage.height + (Math.random() * (canvas.height - monsterImage.height));

  ball.direction = '';
  ball.x = (canvas.width - ball.size) / 2;
  ball.y = (canvas.width - ball.size) / 2;

  // p1.y = (canvas.height - 80) / 2;
  // p2.y = (canvas.height - 80) / 2;

// var ball = {
// size: 10,
// x: (canvas.width - 10) / 2,
// y: (canvas.height - 10) / 2,
// direction: '' // left or right
// }

// var p1 = {
//   width: 10,
//   height: 80,
//   x: 20,
//   y: (canvas.height - 80) / 2,
//   score: 0
// }

// var p2 = {
//   width: 10,
//   height: 80,
//   x: canvas.width - 10 - 20,
//   y: (canvas.height - 80) / 2,
//   score: 0
// }
};
