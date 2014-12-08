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
    if (p1.y > 0) {
      // Update position
      var movementYaxis = p1.speed * modifier;
      p1.y -= movementYaxis;

      p1.updatePivot();
      p1.updatePoints(movementYaxis * -1);

      // go back on track, just in case it went too out of boundaries
      if (p1.y <= 0) {
        p1.y = 0;
      }
    }
  }

  if (83 in keysDown) { // P1 holding down (key: s)
    if (p1.y + p1.height < canvas.height) {
      // Update position
      var movementYaxis = p1.speed * modifier;
      p1.y += movementYaxis;

      p1.updatePivot();
      p1.updatePoints(movementYaxis);

      // go back on track, just in case it went too out of boundaries
      if (p1.y + p1.height > canvas.height) {
        p1.y = canvas.height - p1.height;
      }
    }
  }

  if (38 in keysDown) { // P2 holding up
    if (p2.y > 0) {
      // Update position
      var movementYaxis = p2.speed * modifier;
      p2.y -= movementYaxis;

      p2.updatePivot();
      p2.updatePoints(movementYaxis * -1);

      // go back on track, just in case it went too out of boundaries
      if (p2.y <= 0) {
        p2.y = 0;
      }
    }
  }

  if (40 in keysDown) { // P2 holding down
    if (p2.y + p2.height < canvas.height) {
      // Update position
      var movementYaxis = p2.speed * modifier;
      p2.y += movementYaxis;

      p2.updatePivot();
      p2.updatePoints(movementYaxis);

      // go back on track, just in case it went too out of boundaries
      if (p2.y + p2.height > canvas.height) {
        p2.y = canvas.height - p2.height;
      }
    }
  }

  // Ball is out of the left boundary - player 2 wins!
  if (ball.x <= 0) {
    p2.score++;
    music.pause();
    gameEndSound();
    reset();
  }

  // Ball is out of the right boundary - player 1 wins!
  if (ball.x >= canvas.width - ball.size) {
    p1.score++;
    music.pause();
    gameEndSound();
    reset();
  }

  // Ball is colliding with P1
  if (
    ball.x <= (p1.x + p1.width)
    && p1.x <= (ball.x + ball.size)
    && ball.y <= (p1.y + p1.height)
    && p1.y <= (ball.y + ball.size)
  ) {
    // First of all, I need to calculate the wall normal properly.
    // I start by getting the A and B points:
    var a = p1.points[1].clone(),
        b = p1.points[2].clone();

    // Then I get the directing vector:
    p1.direction = b.subSelf(a).normalize();

    // Finally I reflect the ball
    ball.deflect(p1.direction);

    // go back on track, just in case it went too out of boundaries
    ball.x = p1.x + p1.width +1;

    paddleHitSoundLow();
  }

  // Ball is colliding with P2
  if (
    ball.x <= (p2.x + p2.width)
    && p2.x <= (ball.x + ball.size)
    && ball.y <= (p2.y + p2.height)
    && p2.y <= (ball.y + ball.size)
  ) {
    // First of all, I need to calculate the wall normal properly.
    // I start by getting the A and B points:
    var a = p2.points[0].clone(),
        b = p2.points[3].clone();

    // Then I get the directing vector
    p2.direction = b.subSelf(a).normalize();

    // Finally I reflect the ball
    ball.deflect(p2.direction);

    // go back on track, just in case it went too out of boundaries
    ball.x = p2.x - ball.size -1;

    paddleHitSoundHigh();
  }

  // Ball is colliding with the top
  if (ball.y <= 0) {
    ball.deflect( new Vector2(1, 0) );

    // go back on track, just in case it went too out of boundaries
    ball.y = 0.1;
  }

  // Ball is colliding with the bottom
  if (ball.y + ball.size >= canvas.height) {
    ball.deflect( new Vector2(1, 0) );

    // go back on track, just in case it went too out of boundaries
    ball.y = canvas.height - ball.size -1;
  }

  // Ball movement
  ball.x += ball.velocity.x * modifier;
  ball.y += ball.velocity.y * modifier;
};
