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
  ctx.fillRect(20, (canvas.height - 80) / 2, 10, 80);
  ctx.fillRect(canvas.width - 20 - 10, (canvas.height - 80) / 2, 10, 80);

  // ball
  ctx.fillStyle = "#FFF";
  ctx.fillRect(ball.x, ball.y, 10, 10);

  // Text options
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "18px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  // Score
  // ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);

  // Ball (debug)
  ctx.fillText("ball: " + JSON.stringify(ball), 32, 48);

  // P1 (debug)
  ctx.fillText("p1: " + JSON.stringify(p1), 32, 64);

  // P2 (debug)
  ctx.fillText("p2: " + JSON.stringify(p2), 32, 80);
};
