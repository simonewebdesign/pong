// Update game objects
var update = function (modifier) {

  if (32 in keysDown) { // Start the game with the spacebar
    isGameStarted = true;

    if (music && !music.isPlaying) {
      music.play();
    }
  }

  if (!isGameStarted) {
    return false;
  }

  if (87 in keysDown) { // P1 holding up (key: w)
    // Update position
    var movementYaxis = p1.speed * modifier;
    p1.pos.y -= movementYaxis;

    p1.updatePivot();
    p1.updatePoints(movementYaxis * -1);

    if (p1.pos.y <= 0) {
      p1.pos.y = 0;
    }
  }

  if (83 in keysDown) { // P1 holding down (key: s)
    // Update position
    var movementYaxis = p1.speed * modifier;
    p1.pos.y += movementYaxis;

    p1.updatePivot();
    p1.updatePoints(movementYaxis);

    var limit = canvas.height - p1.height;
    if (p1.pos.y >= limit) {
      p1.pos.y = limit;
    }
  }

  if (38 in keysDown) { // P2 holding up
    // Update position
    var movementYaxis = p2.speed * modifier;
    p2.pos.y -= movementYaxis;

    p2.updatePivot();
    p2.updatePoints(movementYaxis * -1);

    if (p2.pos.y <= 0) {
      p2.pos.y = 0;
    }
  }

  if (40 in keysDown) { // P2 holding down
    // Update position
    var movementYaxis = p2.speed * modifier;
    p2.pos.y += movementYaxis;

    p2.updatePivot();
    p2.updatePoints(movementYaxis);

    var limit = canvas.height - p2.height;
    if (p2.pos.y >= limit) {
      p2.pos.y = limit;
    }
  }

  // Ball is out of the left boundary - player 2 wins!
  if (ball.position.x <= 0) {
    p2.score++;
    music.pause();
    gameEndSound();
    reset();
  }

  // Ball is out of the right boundary - player 1 wins!
  if (ball.position.x >= canvas.width - ball.size) {
    p1.score++;
    music.pause();
    gameEndSound();
    reset();
  }

  // Ball is colliding with P1
  if (
    ball.position.x <= (p1.pos.x + p1.width)
    && p1.pos.x <= (ball.position.x + ball.size)
    && ball.position.y <= (p1.pos.y + p1.height)
    && p1.pos.y <= (ball.position.y + ball.size)
  ) {
    // limits
    var limit = p1.pos.x + p1.width;
    if (ball.position.x <= limit) {
      ball.position.x = limit + 1;
    }

    // First of all, I need to calculate the wall normal properly.
    // I start by getting the A and B points:
    var a = p1.points[1].clone(),
        b = p1.points[2].clone();

    // Then I get the directing vector:
    p1.direction = b.subSelf(a).normalize();

    console.log(p1.direction);
    ball.deflect(p1.direction);

    paddleHitSoundLow();
  }

  // Ball is colliding with P2
  if (
    ball.position.x <= (p2.pos.x + p2.width)
    && p2.pos.x <= (ball.position.x + ball.size)
    && ball.position.y <= (p2.pos.y + p2.height)
    && p2.pos.y <= (ball.position.y + ball.size)
  ) {
    // limits
    var limit = p2.pos.x;
    if (ball.position.x >= limit) {
      ball.position.x = limit - 1;
    }

    // First of all, I need to calculate the wall normal properly.
    // I start by getting the A and B points:
    var a = p2.points[0].clone(),
        b = p2.points[3].clone();

    // Then I get the directing vector:
    p2.direction = b.subSelf(a).normalize();

    console.log(p2.direction);
    ball.deflect(p2.direction);

    paddleHitSoundHigh();
  }

  // Ball is colliding with the top
  if (ball.position.y <= 0) {
    ball.deflect( new Vector2(1, 0) );
  }

  // Ball is colliding with the bottom
  if (ball.position.y + ball.size >= canvas.height) {
    ball.deflect( new Vector2(1, 0) );
  }

  // Ball movement
  ball.position.x += ball.velocity.x * modifier;
  ball.position.y += ball.velocity.y * modifier;
};
