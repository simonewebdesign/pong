  // Game objects
var ball = {
  size: 10,
  /*
  * R = 2*(V dot N)*N - V
  * V: velocity vector
  * N: a normalized vector of the plane surface (e.g. paddle or wall)
  */
  deflect: function (N) {
    var dot = this.velocity.dot(N);
    var v1 = N.multiplyScalar(2 * dot);
    this.velocity = v1.subSelf(this.velocity);
  },

  center: function () {
    var center = this.position.clone();
    center.addSelf( new Vector2(this.size / 2, this.size / 2) );
    return center;
  },

  centerLeft: function() {
    var centerLeft = this.position.clone();
    centerLeft.addSelf( new Vector2(0, this.size / 2) );
    return centerLeft;
  },

  centerRight: function() {
    var centerRight = this.position.clone();
    centerRight.addSelf( new Vector2(this.size, this.size / 2) );
    return centerRight;
  }
}

var Paddle = function () {
  return {
    score: 0,
    speed: 600,
    width: 10,
    height: 100,

    directingVector: function () {
      // These are points A and B expressed as vector.
      var a = this.pos,
          b = a.clone();

      b.y += this.height;

      // The directing vector is calculated by a simple subtraction.
      var v = b.subSelf(a);

      // The normal vector is given by flipping the directing vector, that is to
      // reverse the components and make one component negative.
      // nl = normal, flipped to the left
      // nr = normal, flipped to the right
      v.set(v.x * -1, v.y);
      // v.set(v.x, v.y * -1);

      // The unit vector of the normal vector is given by dividing each component
      // by the length of the vector.
      v.normalize();
      return v;
    },

    top: function () {
      return this.pos;
    },

    bottom: function () {
      var bottom = this.pos.clone();
      bottom.addSelf( new Vector2(0, this.height) );
      return bottom;
    },

    center: function () {
      var center = this.pos.clone();
      center.addSelf( new Vector2(this.width / 2, this.height / 2) );
      return center;
    },

    centerLeft: function () {
      var centerLeft = this.pos.clone();
      centerLeft.addSelf( new Vector2(0, this.height / 2) );
      return centerLeft;
    },

    centerRight: function () {
      var centerLeft = this.pos.clone();
      centerLeft.addSelf( new Vector2(this.width, this.height / 2) );
      return centerLeft;
    }
  }
}

var p1 = new Paddle(),
    p2 = new Paddle();
