var Paddle = function () {
  this.score = 0,
  this.speed = 600,
  this.width = 24,
  this.height = 96,

  // the coordinates
  this.points = [],

  this.pos = new Vector2,
  this.pivot = new Vector2,
  // the directing vector (aka wall normal)
  this.direction = new Vector2,
  this.bgImage = new Image,

  // This is here as convenience for using it in the render function
  this.angle = -1,

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

  this.updatePivot = function () {
    this.pivot.set(this.width / 2, this.height / 2).addSelf(this.pos);
  },

  this.updatePoints = function (movementYaxis) {
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].y += movementYaxis;
    }
  },

  // FIXME: not ideal; would be better to rotate only the pivot
  this.rotatePoints = function (angle) {
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].rotateAroundPivot(this.pivot, angle);
    }
  },

  // Realign points to the axis, as if I rotate with an angle of 0.
  // This is obviously cheaper than an actual rotation.
  // Also note that this takes in count the current position (resetPoints doesn't)
  this.realignPoints = function () {
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

  this.render = function () {
    if (this.angle == 0) { // paddle doesn't need to be rotated

      if (this.bgImage.loaded) {
        ctx.drawImage(this.bgImage, this.x, this.y);
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
      ctx.drawImage(this.bgImage, this.x, this.y);

      // restoring the original context
      ctx.restore();
    }
  }

  return this;
}
