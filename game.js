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
  },

  // center: function () {
  //   var center = this.position.clone();
  //   center.addSelf( new Vector2(this.size / 2, this.size / 2) );
  //   return center;
  // },

  // centerLeft: function() {
  //   var centerLeft = this.position.clone();
  //   centerLeft.addSelf( new Vector2(0, this.size / 2) );
  //   return centerLeft;
  // },

  // centerRight: function() {
  //   var centerRight = this.position.clone();
  //   centerRight.addSelf( new Vector2(this.size, this.size / 2) );
  //   return centerRight;
  // }
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
    oldPos: new Vector2(), // For calculating the offset. Temporary... maybe.

    // This is here as convenience for using it in the render function
    angle: 0,

    updatePivot: function () {
      this.pivot.set(this.width / 2, this.height / 2).addSelf(this.pos);
    },

    updatePoints: function (movementYaxis) {
      for (var i = 0; i < this.points.length; i++) {
        this.points[i].y += movementYaxis;
      }
    },

    // rotateAroundPivot: function () {
    //   var pivot = this.pivot.clone().normalize();
    //   this.direction.subSelf(pivot).rotate(this.angle).addSelf(pivot);
    // },

    // translatePoints: function () {
    //   for (var i = 0; i < this.points.length; i++) {
    //     this.points[i].multiplyScalar(this.pivot);
    //   }
    // },

    // rotatePivot: function () {
    //   console.log("The Paddle's rotate function has been called with an implicit angle of ", this.angle);
    //   this.rotate()
    // }

    rotatePoints: function (angle) {
      for (var i = 0; i < this.points.length; i++) {
        this.points[i].rotateAroundPivot(this.pivot, angle);
      }
    },
    // This can't be a function, because you need to manipulate it, e.g. normalize and rotate
    // pivot: function () {
    //   return new Vector2(this.width / 2, this.height / 2).addSelf(this.pos);
    // },


    // This was bad code, because the directing vector (aka paddle's normal)
    // is important only because of its direction. DIRECTION.
    // There must be a better way of calculating it (but do you *really* need to do so)?
    // directingVector: function () {
    //   // These are points A and B expressed as vector.
    //   // TODO: maybe refactor to use this.top() and this.bottom()
    //   var a = this.pos,
    //       b = a.clone();

    //   // FIXME: this is not correct. I mean what if the line is not on y?
    //   // Does that make sense?
    //   b.y += this.height;

    //   // The directing vector is calculated by a simple subtraction.
    //   var v = b.subSelf(a);

    //   // The normal vector is given by flipping the directing vector, that is to
    //   // reverse the components and make one component negative.
    //   // nl = normal, flipped to the left
    //   // nr = normal, flipped to the right
    //   // TODO #2 (but actually more important): calculate normal properly!
    //   v.set(v.x * -1, v.y);
    //   // v.set(v.x, v.y * -1);

    //   // The unit vector of the normal vector is given by dividing each component
    //   // by the length of the vector.
    //   v.normalize();
    //   return v;
    // },

    // Note: I just decided to write this second function that mixes the business logic
    // with the calculation of a directing vector.
    // Let's see if it works first.: function (rotationAngle) {
    //   // The pivot will be the paddle's center, for simplicity.
    //   var pivot = this.center();

    //   // Here I just rotate point a around the pivot, and then get the point b.
    //   var a = this.pos.rotateAroundPivot(pivot, rotationAngle),
    //       b = this.bottom().rotateAroundPivot(pivot, rotationAngle);

    //   // The directing vector is calculated by a simple subtraction.
    //   var v = b.subSelf(a);

    //   // The normal vector is given by flipping the directing vector, that is to
    //   // reverse the components and make one component negative.
    //   // nl = normal, flipped to the left
    //   // nr = normal, flipped to the right
    //   v.flipLeft();
    //   // v.flipRight();

    //   // The unit vector of the normal vector is given by dividing each component
    //   // by the length of the vector.
    //   v.normalize();
    //   return v;
    // },
  }
}

var p1 = new Paddle(),
    p2 = new Paddle();
