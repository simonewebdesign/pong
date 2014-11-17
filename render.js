// Draw everything
var render = function () {
  // clear the canvas
  ctx.clear();

  ctx.fillStyle = "#0F0";
  // P1
  // this was the original code, and it was working good
  // ctx.fillRect(p1.pos.x, p1.pos.y, p1.width, p1.height);
  ctx.beginPath();
  ctx.moveTo(p1.points[3].x, p1.points[3].y);
  ctx.lineTo(p1.points[0].x, p1.points[0].y);
  ctx.moveTo(p1.points[0].x, p1.points[0].y);
  ctx.lineTo(p1.points[1].x, p1.points[1].y);
  ctx.moveTo(p1.points[1].x, p1.points[1].y);
  ctx.lineTo(p1.points[2].x, p1.points[2].y);
  ctx.moveTo(p1.points[2].x, p1.points[2].y);
  ctx.lineTo(p1.points[3].x, p1.points[3].y);
  ctx.stroke();
  ctx.closePath();
  // P1's normal
  ctx.beginPath();
  ctx.moveTo(p1.pivot.x, p1.pivot.y);
  ctx.lineTo(p1.pivot.x + 100, p1.pivot.y);
  ctx.stroke();
  ctx.closePath();


  // P2
  // rendering method #1
  // ctx.fillRect(p2.pos.x, p2.pos.y, p2.width, p2.height);

  // TODO: I think I need to draw the paddles with lineTo instead of fillRect.
  // Investigate. This is obviously just for showing a curved wall and has nothing
  // to do with the actual implementation.
  // Note: Actually I think this wasn't necessary.

  ctx.save();

  // translating to the pivot
  ctx.translate( p2.pivot.x, p2.pivot.y );

  // p2.rotationAngle or something here
  ctx.rotate( (Math.PI / 180) * 0 );

  // translating back to the origin
  ctx.translate( -1 * p2.pivot.x, -1 * p2.pivot.y );

  // actually drawing the shape
  ctx.beginPath();
  ctx.moveTo(p2.points[3].x, p2.points[3].y);
  ctx.lineTo(p2.points[0].x, p2.points[0].y);
  ctx.moveTo(p2.points[0].x, p2.points[0].y);
  ctx.lineTo(p2.points[1].x, p2.points[1].y);
  ctx.moveTo(p2.points[1].x, p2.points[1].y);
  ctx.lineTo(p2.points[2].x, p2.points[2].y);
  ctx.moveTo(p2.points[2].x, p2.points[2].y);
  ctx.lineTo(p2.points[3].x, p2.points[3].y);
  ctx.stroke();
  ctx.closePath();

  ctx.restore();

  // P2's normal
  ctx.beginPath();
  ctx.moveTo(p2.pivot.x, p2.pivot.y);
  ctx.lineTo(p2.pivot.x - 100, p2.pivot.y);
  ctx.stroke();
  ctx.closePath(); // ends here and it makes sense


  // ball
  ctx.fillStyle = "#DDD";
  ctx.fillRect(ball.position.x, ball.position.y, ball.size, ball.size);

  // Text options
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "18px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  // P1 Score
  ctx.fillText(p1.score, 32, 32);

  // P2 Score
  ctx.fillText(p2.score, canvas.width - 32 - 10, 32);

  // Text options
  ctx.font = "36px Helvetica";

  // Initial text
  if (!isGameStarted) {
    ctx.fillText("Press spacebar to start", 200, canvas.height / 2);
  }
};
