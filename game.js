// We keep, in this file, all the necessary responsabilities. The Game class is the `maestro` of our entire game. it will "orchestrate" every instance that needs to preload and make sure every instance is correctly "tuned" and ready for the show

class Game {
  // just like many other classes, the game does not need any information on the constructor, because its independent
  constructor() {
    // this is going to be geoffrey, our chinless viking
    this.player = new Player();
    // we know the game will have several obstacles throughout its existence, so we make an array
    this.obstacles = [];
    this.stormArray = [];
    // the game has only one background
    this.background = new Background();
  }

  // here, the game "knows" that two elements (player and background) must preload their assets, therefore it knows to call their respective preload methods
  preload() {
    this.player.preload();
    this.background.preload();
  }

  // play is the method that makes sure everything happens
  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
    this.player.movePlayer();

    // 60fps (frames per second)
    // 180 -> 60 * 3 -> 3 seconds
    // frameCount % 180 === 0 -> whenever frameCount is a multiple of 180
    // therefore every 3 seconds === 180 frameCount
    // eventualy, we moved to 75, for them to appear faster, its up to you to choose interval
    if (frameCount % 75 === 0) {
      // if (frameCount % 180 === 0) {
      this.obstacles.push(new Obstacle());
      this.stormArray.push(new ChocolateStorm());
    }

    // in here we clear every obstacle that is no longer visible.
    this.obstacles = this.obstacles.filter((obstacle) => {
      // because we are calling the methods, things still happen (like drawing the obstacle).
      // even if this is not directly the responsability of the current filter method, we can still, effectively, draw the obstacles
      obstacle.drawObstacle();
      return obstacle.left >= -obstacle.width;
    });

    this.stormArray = this.stormArray.filter((chocolate) => {
      chocolate.drop();
      return chocolate.top <= CANVAS_HEIGHT;
    });
  }

  // here, the game "knows" that one element (the player) "reacts" whenever a key is pressed, therefore it passes that information to the player and lets it handle this event
  keyPressed() {
    this.player.keyPressed();
  }
}

// this was the previous implementation of drawing + removing obstacles. This was bad, now we have a better one
// this.obstacles.forEach((obstacle, index) => {
//   obstacle.drawObstacle();

//   //   if (obstacle.left <= 0 - obstacle.width)
//   if (obstacle.left <= -obstacle.width) {
//     this.obstacles.splice(index, 1);
//   }
// });
