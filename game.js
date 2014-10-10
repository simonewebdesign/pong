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
  }
}

var Paddle = function () {
  return {
    score: 0,
    speed: 600,
    width: 10,
    height: 100
  }
}

var p1 = new Paddle(),
    p2 = new Paddle();
