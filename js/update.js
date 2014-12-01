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
    if (p1.pos.y > 0) {
      // Update position
      var movementYaxis = p1.speed * modifier;
      p1.pos.y -= movementYaxis;

      p1.updatePivot();
      p1.updatePoints(movementYaxis * -1);

      // go back on track, just in case it went too out of boundaries
      if (p1.pos.y <= 0) {
        p1.pos.y = 0;
      }
    }
  }

  if (83 in keysDown) { // P1 holding down (key: s)
    if (p1.pos.y + p1.height < canvas.height) {
      // Update position
      var movementYaxis = p1.speed * modifier;
      p1.pos.y += movementYaxis;

      p1.updatePivot();
      p1.updatePoints(movementYaxis);

      // go back on track, just in case it went too out of boundaries
      if (p1.pos.y + p1.height > canvas.height) {
        p1.pos.y = canvas.height - p1.height;
      }
    }
  }

  if (38 in keysDown) { // P2 holding up
    if (p2.pos.y > 0) {
      // Update position
      var movementYaxis = p2.speed * modifier;
      p2.pos.y -= movementYaxis;

      p2.updatePivot();
      p2.updatePoints(movementYaxis * -1);

      // go back on track, just in case it went too out of boundaries
      if (p2.pos.y <= 0) {
        p2.pos.y = 0;
      }
    }
  }

  if (40 in keysDown) { // P2 holding down
    if (p2.pos.y + p2.height < canvas.height) {
      // Update position
      var movementYaxis = p2.speed * modifier;
      p2.pos.y += movementYaxis;

      p2.updatePivot();
      p2.updatePoints(movementYaxis);

      // go back on track, just in case it went too out of boundaries
      if (p2.pos.y + p2.height > canvas.height) {
        p2.pos.y = canvas.height - p2.height;
      }
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
    // First of all, I need to calculate the wall normal properly.
    // I start by getting the A and B points:
    var a = p1.points[1].clone(),
        b = p1.points[2].clone();

    // Then I get the directing vector:
    p1.direction = b.subSelf(a).normalize();

    // Finally I reflect the ball
    ball.deflect(p1.direction);

    // go back on track, just in case it went too out of boundaries
    ball.position.x = p1.pos.x + p1.width +1;

    paddleHitSoundLow();
  }

  // Ball is colliding with P2
  if (
    ball.position.x <= (p2.pos.x + p2.width)
    && p2.pos.x <= (ball.position.x + ball.size)
    && ball.position.y <= (p2.pos.y + p2.height)
    && p2.pos.y <= (ball.position.y + ball.size)
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
    ball.position.x = p2.pos.x - ball.size -1;

    paddleHitSoundHigh();
  }

  // Ball is colliding with the top
  if (ball.position.y <= 0) {
    ball.deflect( new Vector2(1, 0) );

    // go back on track, just in case it went too out of boundaries
    ball.position.y = 0.1;
  }

  // Ball is colliding with the bottom
  if (ball.position.y + ball.size >= canvas.height) {
    ball.deflect( new Vector2(1, 0) );

    // go back on track, just in case it went too out of boundaries
    ball.position.y = canvas.height - ball.size -1;
  }

  // Ball movement
  ball.position.x += ball.velocity.x * modifier;
  ball.position.y += ball.velocity.y * modifier;
};
