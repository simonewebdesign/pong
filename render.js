// Draw everything
var render = function () {
  // clear the canvas
  ctx.clear();

  // if (bgReady) {
  //   ctx.drawImage(bgImage, 0, 0);
  // }

  // if (heroReady) {
  //   ctx.drawImage(heroImage, hero.x, hero.y);
  // }

  // if (monsterReady) {
  //   ctx.drawImage(monsterImage, monster.x, monster.y);
  // }

  ctx.fillStyle = "#0F0";
  // P1
  ctx.fillRect(p1.x, p1.y, p1.width, p1.height);

  // P2
  ctx.fillRect(p2.x, p2.y, p2.width, p2.height);

  // ball
  ctx.fillStyle = "#FFF";
  ctx.fillRect(ball.x, ball.y, 10, 10);

  // Text options
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "18px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  // P1 Score
  ctx.fillText(p1.score, 32, 32);

  // P2 Score
  ctx.fillText(p2.score, canvas.width - 32 - 10, 32);

  // Ball (debug)
  ctx.fillText("ball: " + JSON.stringify(ball), 32, 96);

  // P1 (debug)
  ctx.fillText("p1: " + JSON.stringify(p1), 32, 64);

  // P2 (debug)
  ctx.fillText("p2: " + JSON.stringify(p2), 32, 80);
};
