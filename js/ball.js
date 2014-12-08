var Ball = function () {
  this.size = 48,
  this.speed = 300,
  /*
  * R = 2*(V dot N)*N - V
  * V: velocity vector
  * N: a normalized vector of the plane surface (e.g. paddle or wall)
  * TODO: For more realism, you can multiply velT and velN by constants
  * representing friction and restitution, respectively.
  */
  this.deflect = function (N) {
    var dot = this.velocity.dot(N);
    var v1 = N.multiplyScalar(2 * dot);
    this.velocity = v1.subSelf(this.velocity);
  }

  // Define property x
  Object.defineProperty(this, 'x', {
    get: function () {
      return this.pos.x;
    },
    set: function (value) {
      this.pos.x = value;
    }
  });

  // Define property y
  Object.defineProperty(this, 'y', {
    get: function () {
      return this.pos.y;
    },
    set: function (value) {
      this.pos.y = value;
    }
  });

  return this;
}
