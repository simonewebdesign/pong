// Game objects
var ball = {
  size: 10,
  speed: 300,
  /*
  * R = 2*(V dot N)*N - V
  * V: velocity vector
  * N: a normalized vector of the plane surface (e.g. paddle or wall)
  * TODO: For more realism, you can multiply velT and velN by constants
  * representing friction and restitution, respectively.
  * MAYBE JUST CONSIDER THIS FIRST.
  */
  deflect: function (N) {
    var dot = this.velocity.dot(N);
    var v1 = N.multiplyScalar(2 * dot);
    this.velocity = v1.subSelf(this.velocity);
  }
}

var Paddle = function () {
  return {
    score: 0,
    speed: 600,
    width: 10,
    height: 100,
    points: [],
    pos: new Vector2(),
    pivot: new Vector2(),
    // the directing vector (aka wall normal)
    direction: new Vector2(),

    // This is here as convenience for using it in the render function
    angle: -1,

    updatePivot: function () {
      this.pivot.set(this.width / 2, this.height / 2).addSelf(this.pos);
    },

    updatePoints: function (movementYaxis) {
      for (var i = 0; i < this.points.length; i++) {
        this.points[i].y += movementYaxis;
      }
    },

    rotatePoints: function (angle) {
      // var xAxis = new Vector2(1, 0),
      //     yAxis = new Vector2(0, 1),
      //     newxAxis = xAxis.rotate(angle),
      //     newyAxis = yAxis.rotate(angle);

      // var rotatedPivot = this.pivot.clone().rotateAroundPivot(this.pivot, angle);

      for (var i = 0; i < this.points.length; i++) {
        this.points[i].rotateAroundPivot(this.pivot, angle);
        // var p = this.points[i];
        // var xa = newxAxis.clone().multiplyScalar(p.x);
        // var ya = newyAxis.clone().multiplyScalar(p.y);
        // var newPoint = xa.addSelf(ya);

        // // update point
        // this.points[i] = newPoint;
      }
    },

    // Realign points to the axis, as if I rotate with an angle of 0.
    // This is obviously cheaper than an actual rotation.
    // Also note that this takes in count the current position (resetPoints doesn't)
    realignPoints: function () {
      // console.log(this.pos);
      var topRight = new Vector2(this.width, 0),
          bottomRight = new Vector2(this.width, this.height),
          bottomLeft = new Vector2(0, this.height);

      this.points = [
        this.pos.clone(),
        this.pos.clone().addSelf(topRight),
        this.pos.clone().addSelf(bottomRight),
        this.pos.clone().addSelf(bottomLeft)
      ];
      // console.log(this.points);
    },

    // This can't be a function, because you need to manipulate it, e.g. normalize and rotate
    // pivot: function () {
    //   return new Vector2(this.width / 2, this.height / 2).addSelf(this.pos);
    // },
  }
}

var p1 = new Paddle(),
    p2 = new Paddle();

// Positions of paddles
var xPositionP1 = 20,
    yPositionP1 = canvas.height / 2 - p1.height / 2,
    xPositionP2 = canvas.width - p2.width - 20,
    yPositionP2 = canvas.height / 2 - p2.height / 2;

// Reset points to their initial position.
// Points are set in this order: topLeft, topRight, bottomRight, bottomLeft
p1.resetPoints = function () {
  this.points = [
    new Vector2(xPositionP1, yPositionP1),
    new Vector2(xPositionP1 + p1.width, yPositionP1),
    new Vector2(xPositionP1 + p1.width, yPositionP1 + p1.height),
    new Vector2(xPositionP1, yPositionP1 + p1.height)
  ];
};

p2.resetPoints = function () {
  this.points = [
    new Vector2(xPositionP2, yPositionP2),
    new Vector2(xPositionP2 + p2.width, yPositionP2),
    new Vector2(xPositionP2 + p2.width, yPositionP2 + p2.height),
    new Vector2(xPositionP2, yPositionP2 + p2.height)
  ];
};
