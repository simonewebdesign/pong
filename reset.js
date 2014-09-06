// Reset the game when the player catches a monster
var reset = function () {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  // Throw the monster somewhere on the screen randomly
  monster.x = monsterImage.width + (Math.random() * (canvas.width - monsterImage.width));
  monster.y = monsterImage.height + (Math.random() * (canvas.height - monsterImage.height));
};
