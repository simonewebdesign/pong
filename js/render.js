// Draw everything
var render = function () {

  // Draw the background image
  ctx.fillStyle = bgPattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ball
  if (ballBgImage.loaded) {
    ctx.drawImage(ballBgImage, ball.x, ball.y);
  }

  p1.render();
  p2.render();

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
