// Update game objects
var update = function (modifier) {

  if (32 in keysDown) { // Start the game with the spacebar
    isGameStarted = true;
  }

  if (!isGameStarted) {
    return false;
  }

  if (87 in keysDown) { // P1 holding up (key: w)
    p1.pos.y -= p1.speed * modifier;

    if (p1.pos.y <= 0) {
      p1.pos.y = 0;
    }

    p1.updatePivot();
    // p1.updatePoints();
  }

  if (83 in keysDown) { // P1 holding down (key: s)
    p1.pos.y += p1.speed * modifier;

    var limit = canvas.height - p1.height;
    if (p1.pos.y >= limit) {
      p1.pos.y = limit;
    }

    p1.updatePivot();
  }

  if (38 in keysDown) { // P2 holding up
    p2.pos.y -= p2.speed * modifier;

    if (p2.pos.y <= 0) {
      p2.pos.y = 0;
    }

    p2.updatePivot();
  }

  if (40 in keysDown) { // P2 holding down
    p2.pos.y += p2.speed * modifier;

    var limit = canvas.height - p2.height;
    if (p2.pos.y >= limit) {
      p2.pos.y = limit;
    }

    p2.updatePivot();
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
    ball.position.x <= (p1.pos.x + p1.width)
    && p1.pos.x <= (ball.position.x + ball.size)
    && ball.position.y <= (p1.pos.y + p1.height)
    && p1.pos.y <= (ball.position.y + ball.size)
  ) {
    // var normal = new Vector2(0, 1);
    // ball.deflect( normal );

    // Rotate pivot
    // p1.angle = 5; // note: this shouldn't really be necessary! Because the angle is implicitly stored in the direction vector.
    // var angle = 2;
    // console.log("initial pivot:", p1.pivot);

    // // var pivot = p1.pivot.clone().normalize();
    // console.log("pivot (normalized):", pivot);

    // var rotatedPivot = pivot.rotate(angle);
    // console.log("rotatedPivot:", rotatedPivot);



    // p1.pivot.rotate(p1.angle);
    // p1.rotateAroundPivot();

    // limits
    var limit = p1.pos.x + p1.width;
    // console.log("limit: ", limit);
    // console.log("ball position:", ball.position);

    if (ball.position.x <= limit) {
      ball.position.x = limit + 1;
    }
    // console.log("again, ball position:", ball.position);




    ///////////////////////////////////////
    // First of all, I need to calculate the wall normal properly.
    // I start by getting the A and B points:
    // var a = p1.points[1],
    //     b = p1.points[2];

    // console.log("points:", a, b);

    // // Then I get the directing vector:
    // var dirVector = b.subSelf(a);
    // console.log("dirVector:", dirVector);

    // // And I flip it:
    // var dirVectorFlipped = p1.pos.clone(); //dirVector //.flipRight();
    // console.log("dirVectorFlipped:", dirVectorFlipped);

    // // normal is paddle's normalized directing vector.
    // // could store this in paddle.direction.
    // // this should be calculated using cross product.
    // // var norm = new Vector2(0, 1);
    // var norm = dirVectorFlipped;
    // // console.log("norm:", norm);

    // var angle = 1;
    // var pivot = p1.pivot.clone();
    // console.log("pivot:", pivot);

    // // start rotating around the pivot point.
    // // first of all, make pivot the origin, by subtracting the norm to the pivot.
    // norm = norm.subSelf(pivot);
    // console.log("norm (subtracted pivot):", norm);

    // norm = norm.rotate(angle).addSelf(pivot);
    // console.log("norm (rotated):", norm);

    // norm = norm.normalize();
    // console.log("norm (normized):", norm);

    // ball.deflect(norm);
    ///////////////



  }

  // Ball is colliding with P2
  if (
    ball.position.x <= (p2.pos.x + p2.width)
    && p2.pos.x <= (ball.position.x + ball.size)
    && ball.position.y <= (p2.pos.y + p2.height)
    && p2.pos.y <= (ball.position.y + ball.size)
  ) {

    // var a = ball.centerRight(),
    //     b = p2.centerLeft(),
    //// you could use distanceTo() here.
    //     distanceBetweenTwoPoints = b.subSelf(a).length(), // will be used as angle
    //     pivot = p2.bottom();

    // // FIXME: the actual logic error is inside directingVector() function.
    // // maybe the correct logic is:
    // if (a.y > b.y) {
    //   // collided after the center (on the left of the paddle)

    // } else {
    //   // collided before the center (on the right of the paddle)
    // }

    // var hitFactor = 0.2;
    // ball.deflect( new Vector2(hitFactor, 1) );
    // ball.deflect( p2.calculateDirectingVector(angle) ); // the new one
    // ball.deflect( p2.directingVector() ); // should be new Vector2(0, 1)
    // normal is paddle's normalized directing vector.
    // could store this in paddle.direction.
    // this should be calculated using cross product.
    // var normal = p2.direction.clone();
    ball.deflect( new Vector2(0,1) );
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

  // p1.oldPos = p1.pos;
  // p2.oldPos = p2.pos;
};
