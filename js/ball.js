var ball = {
  size: 48,
  speed: 300,
  /*
  * R = 2*(V dot N)*N - V
  * V: velocity vector
  * N: a normalized vector of the plane surface (e.g. paddle or wall)
  * TODO: For more realism, you can multiply velT and velN by constants
  * representing friction and restitution, respectively.
  */
  deflect: function (N) {
    var dot = this.velocity.dot(N);
    var v1 = N.multiplyScalar(2 * dot);
    this.velocity = v1.subSelf(this.velocity);
  }
}
