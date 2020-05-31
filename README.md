# :video_game: Pong

![screenshot]

This is a basic canvas implementation of Atari's popular game, first released in 1972.

There are two releases: the first one ([v1.0](https://github.com/simonewebdesign/pong/tree/a3eb56339880616e2983157fc2d5931bb9b32694)) is very lightweight (around 200 lines of code), no sound, no AI and no proper ball reflection with vectors.

The second release (that is in master branch) has a lot more stuff, check it out.

In both cases, there are no dependencies from external libraries. This means the game has been made from scratch.

![screenshot2]

You can read a making-of article [here](https://www.simonewebdesign.it/making-a-game-from-scratch-in-html5/).

## How to play

You can play a demo [here](https://www.simonewebdesign.it/games/pong/).

If you want to play it locally, fork or clone the repository as usual. It shouldn't need any server to run (just open `index.html`). However in some cases (e.g. using Chrome) it might not work if you don't use a web server.

### Controls

Start the game with spacebar.

#### Player 1
  - up: w
  - down: s

#### Player 2
  - up: arrow up
  - down: arrow down

### Implementation details

The first implementation (v1.0) is simpler, but you don't have much control over the ball.

In the latter implementation I simulated a curved paddle by varying the normal vector of the paddle's surface. This allows the players to change the ball's movement angle by intercepting the ball in movement to get a steeper or shallower reflection angle.

The ball's collision is perfectly elastic, which means all of the kinetic energy in a collision will be transferred. This results in a constant game speed.


## License

Licensed under the WTFPL license.

---

I would like to thank Matt Hackett for his tutorial on [how to make a simple HTML5 canvas game](http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/); I've learned a lot.

[screenshot]: https://raw.githubusercontent.com/dudeOMG/pong/master/screenshots/pong.png
[screenshot2]: https://raw.githubusercontent.com/dudeOMG/pong/master/screenshots/pong2.png
