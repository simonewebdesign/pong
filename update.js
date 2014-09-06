// Update game objects
var update = function (modifier) {
  if (38 in keysDown) { // Player holding up
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown) { // Player holding down
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown) { // Player holding left
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown) { // Player holding right
    hero.x += hero.speed * modifier;
  }

  // Are they touching?
  if (
    hero.x <= (monster.x + monsterImage.width)
    && monster.x <= (hero.x + heroImage.width)
    && hero.y <= (monster.y + monsterImage.height)
    && monster.y <= (hero.y + heroImage.height)
  ) {
    ++monstersCaught;
    reset();
  }

  // Monster's movement
  monster.x < hero.x ? monster.x++ : monster.x--;
  monster.y < hero.y ? monster.y++ : monster.y--;
};
