var canvasBgImage = new Image(),
    bgPattern;
canvasBgImage.onload = function () {
  this.loaded = true;
  bgPattern = ctx.createPattern(canvasBgImage, 'repeat');
};
canvasBgImage.src = "assets/sand.png";

var p1BgImage = new Image();
p1BgImage.loaded = false; // custom flag
p1BgImage.onload = function () {
  this.loaded = true;
};
p1BgImage.src = "assets/paddleBlue.png";

var p2BgImage = new Image();
p2BgImage.loaded = false; // custom flag
p2BgImage.onload = function () {
  this.loaded = true;
};
p2BgImage.src = "assets/paddleRed.png";

var ballBgImage = new Image();
ballBgImage.loaded = false; // custom flag
ballBgImage.onload = function () {
  this.loaded = true;
};
ballBgImage.src = "assets/ball.png";
