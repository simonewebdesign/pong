// Canvas


var ball = {
  size: 10,
  x: (canvas.width - 10) / 2,
  y: (canvas.height - 10) / 2,
  direction: '' // left or right
}

var p1 = {
  width: 10,
  height: 80,
  x: 20,
  y: (canvas.height - 80) / 2
}

var p2 = {
  width: 10,
  height: 80,
  x: canvas.width - 10 - 20,
  y: (canvas.height - 80) / 2
}

// FIRST RENDERING - the next ones will happen in render()
//  this.context2d.fillStyle = this.backgroundColor;
ctx.fillStyle = "#0F0";
ctx.fillRect(p1.x, p1.y, p1.width, p1.height);
ctx.fillRect(p2.x, p2.y, p2.width, p2.height);

// ball
ctx.fillStyle = "#FFF";
ctx.fillRect(ball.x, ball.y, 10, 10);

// ctx.fillRect(20, canvas.height, 10, 80);
// var x = this.vector2d.x
// , y = this.vector2d.y
// , width = this.dimension
// , height = this.dimension
// this.context2d.fillRect(x, y, width, height);



// Keyboard

// Reset

// Update

// Render

// Main
