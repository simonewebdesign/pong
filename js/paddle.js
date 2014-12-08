var Paddle = function () {
  return {
    score: 0,
    speed: 600,
    width: 24,
    height: 96,

    // the coordinates
    points: [],

    pos: new Vector2(),
    pivot: new Vector2(),
    // the directing vector (aka wall normal)
    direction: new Vector2(),
    bgImage: new Image(),

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

    // FIXME: not ideal; would be better to rotate only the pivot
    rotatePoints: function (angle) {
      for (var i = 0; i < this.points.length; i++) {
        this.points[i].rotateAroundPivot(this.pivot, angle);
      }
    },

    // Realign points to the axis, as if I rotate with an angle of 0.
    // This is obviously cheaper than an actual rotation.
    // Also note that this takes in count the current position (resetPoints doesn't)
    realignPoints: function () {
      var topRight = new Vector2(this.width, 0),
          bottomRight = new Vector2(this.width, this.height),
          bottomLeft = new Vector2(0, this.height);

      this.points = [
        this.pos.clone(),
        this.pos.clone().addSelf(topRight),
        this.pos.clone().addSelf(bottomRight),
        this.pos.clone().addSelf(bottomLeft)
      ];
    },

    render: function () {
      if (this.angle == 0) { // paddle doesn't need to be rotated

        if (this.bgImage.loaded) {
          ctx.drawImage(this.bgImage, this.pos.x, this.pos.y);
        }

      } else { // rotation

        // saving current context
        ctx.save();

        // translating to the pivot point
        ctx.translate( this.pivot.x, this.pivot.y );

        // rotating
        ctx.rotate( (Math.PI / 180) * this.angle );

        // translating back to the origin
        ctx.translate( -1 * this.pivot.x, -1 * this.pivot.y );

        // rendering
        ctx.drawImage(this.bgImage, this.pos.x, this.pos.y);

        // restoring the original context
        ctx.restore();
      }
    }
  }
}
