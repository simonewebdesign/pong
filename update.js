// Update game objects
var update = function (modifier) {

  if (32 in keysDown) { // Start the game with the spacebar
    isGameStarted = true;
  }

  if (87 in keysDown) { // P1 holding up (key: w)
    p1.y -= p1.speed * modifier;

    if (p1.y <= 0) {
      p1.y = 0;
    }
  }

  if (83 in keysDown) { // P1 holding down (key: s)
    p1.y += p1.speed * modifier;

    var limit = canvas.height - p1.height;
    if (p1.y >= limit) {
      p1.y = limit;
    }
  }

  if (38 in keysDown) { // P2 holding up
    p2.y -= p2.speed * modifier;

    if (p2.y <= 0) {
      p2.y = 0;
    }
  }

  if (40 in keysDown) { // P2 holding down
    p2.y += p2.speed * modifier;

    var limit = canvas.height - p2.height;
    if (p2.y >= limit) {
      p2.y = limit;
    }
  }

  // Ball is out of the left boundary - player 2 wins!
  if (ball.position.x <= 0) {
    p2.score++;
    reset();
  }

  // Ball is out of the right boundary - player 1 wins!
  if (ball.position.x >= canvas.width - ball.size) {
    p1.score++;
    reset();
  }

  // Ball is colliding with P1
  if (
    ball.position.x <= (p1.x + p1.width)
    && p1.x <= (ball.position.x + ball.size)
    && ball.position.y <= (p1.y + p1.height)
    && p1.y <= (ball.position.y + ball.size)
  ) {
    ball.deflect( new Vector2(0, 1) );
  }

  // Ball is colliding with P2
  if (
    ball.position.x <= (p2.x + p2.width)
    && p2.x <= (ball.position.x + ball.size)
    && ball.position.y <= (p2.y + p2.height)
    && p2.y <= (ball.position.y + ball.size)
  ) {
    ball.deflect( new Vector2(0, 1) );
  }

  // Ball is colliding with the top
  if (ball.position.y <= 0) {
    ball.deflect( new Vector2(1, 0) );
  }

  // Ball is colliding with the bottom
  if (ball.position.y + ball.size >= canvas.height) {
    ball.deflect( new Vector2(1, 0) );
  }

  if (isGameStarted) {
    // Ball movement
    ball.position.x += ball.velocity.x * modifier;
    ball.position.y += ball.velocity.y * modifier;
  }
};
