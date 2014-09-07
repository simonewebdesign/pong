// Update game objects
var update = function (modifier) {
  if (32 in keysDown) { // Start the game with the spacebar
    // console.log(1);
    ball.direction = 'right';
  }
  if (38 in keysDown) { // Player holding up
    // hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown) { // Player holding down
    // hero.y += hero.speed * modifier;
  }
  if (37 in keysDown) { // Player holding left
    // hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown) { // Player holding right
    // hero.x += hero.speed * modifier;
  }

  // Are they touching?
  // if (
  //   ball.x <= (p2.x + p2.width)
  //   && p2.x <= (ball.x + ball.size)
  //   && ball.y <= (p2.y + p2.height)
  //   && p2.y <= (ball.y + ball.size)
  // ) {
  //   // TODO increase score
  //   console.log(2)
  //   reset();
  // }

  if (
    ball.x > (p2.x - p2.width)
  ) {
    ball.direction = "left";
  }

  if (
    ball.x < (p1.x + p1.width)
  ) {
    ball.direction = "right";
  }

  // if (ball.x < (p1.x))

  // ball.x++;
    // console.log(2);
  // } else if (
  //   ball.x < (p1.x + p1.width)
  // ) {

  if (ball.direction == "right") {
    ball.x++;
  }
  if (ball.direction == "left") {
    ball.x--;
    ball.x--;
  }

  // Monster's movement
  // monster.x < hero.x ? monster.x++ : monster.x--;
  // monster.y < hero.y ? monster.y++ : monster.y--;

  // Ball's movement
  // ball.x++;
};
