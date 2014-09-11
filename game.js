// Game objects
var ball = {
  size: 10,
  x: (canvas.width - 10) / 2,
  y: (canvas.height - 10) / 2,
  direction: '', // left or right
  speed: 200
}

var p1 = {
  width: 10,
  height: 80,
  x: 20,
  y: (canvas.height - 80) / 2,
  score: 0,
  speed: 300
}

var p2 = {
  width: 10,
  height: 80,
  x: canvas.width - 10 - 20,
  y: (canvas.height - 80) / 2,
  score: 0,
  speed: 300
}

// FIRST RENDERING - the next ones will happen in render()
ctx.fillStyle = "#0F0";
ctx.fillRect(p1.x, p1.y, p1.width, p1.height);
ctx.fillRect(p2.x, p2.y, p2.width, p2.height);

// ball
ctx.fillStyle = "#FFF";
ctx.fillRect(ball.x, ball.y, 10, 10);
