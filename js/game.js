// Game objects
var p1 = new Paddle(),
    p2 = new Paddle(),
    ball = new Ball();

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

p1.bgImage.loaded = false; // custom flag
p1.bgImage.onload = function () {
  this.loaded = true;
}
p1.bgImage.src = "assets/paddleBlue.png";

p2.bgImage.loaded = false; // custom flag
p2.bgImage.onload = function () {
  this.loaded = true;
}
p2.bgImage.src = "assets/paddleRed.png";
