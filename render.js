// Draw everything
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }

  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }

  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }

  // Text options
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "18px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  // Score
  ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);

  // Hero (debug)
  ctx.fillText("hero: " + JSON.stringify(hero), 32, 48);

  // Monster (debug)
  ctx.fillText("monster: " + JSON.stringify(monster), 32, 64);
};
