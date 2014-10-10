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

var p1 = {
  x: 20,
  y: (canvas.height - 100) / 2,
  score: 0
}

var p2 = {
  x: canvas.width - 10 - 20,
  y: (canvas.height - 100) / 2,
  score: 0
}
