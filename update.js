// Update game objects
var update = function (modifier) {
  if (32 in keysDown) { // Start the game with the spacebar
    ball.direction = 'right';
  }
  if (87 in keysDown) { // P1 holding up (key: w)
    p1.y -= p1.speed * modifier;
    if (p1.y <= 0) {
      p1.y = 0;
    }
  }
  if (83 in keysDown) { // P1 holding down (key: s)
    p1.y += p1.speed * modifier;
    var h = canvas.height - p1.height;
    if (p1.y >= h) {
      p1.y = h;
    }
  }
  if (38 in keysDown) { // Player holding up
    p2.y -= p2.speed * modifier;
    if (p2.y <= 0) {
      p2.y = 0;
    }
  }
  if (40 in keysDown) { // Player holding down
    p2.y += p2.speed * modifier;
    var h = canvas.height - p2.height;
    if (p2.y >= h) {
      p2.y = h;
    }
  }

  // Ball is out of the left boundary
  if (
    ball.x <= 0
  ) {
    // player 2 wins
    p2.score++;
    reset();
  }

  // Ball is out of the right boundary
  if (
    ball.x >= canvas.width - ball.size
  ) {
    // player 1 wins
    p1.score++;
    reset();
  }

  // Ball is colliding with P1
  if (
    ball.x <= (p1.x + p1.width)
    && p1.x <= (ball.x + ball.size)
    && ball.y <= (p1.y + p1.height)
    && p1.y <= (ball.y + ball.size)
  ) {
    ball.direction = "right";
  }

  // Ball is colliding with P2
  if (
    ball.x <= (p2.x + p2.width)
    && p2.x <= (ball.x + ball.size)
    && ball.y <= (p2.y + p2.height)
    && p2.y <= (ball.y + ball.size)
  ) {
    ball.direction = "left";
  }

  if (ball.direction == "right") {
    ball.x += ball.speed * modifier;
  }

  if (ball.direction == "left") {
    ball.x -= ball.speed * modifier;
  }
};
