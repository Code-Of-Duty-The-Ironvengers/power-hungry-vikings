class Game {
  constructor() {
    // this is going to be geoffrey, our chinless viking
    this.player = new Player();
    // we know the game will have several obstacles throughout its existence, so we make an array
    this.obstacles = [];
    this.background = new Background();
    this.toiletArray = [];
  }

  preload() {
    this.player.preload();
    this.background.preload();
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();

    // 60fps (frames per second)
    // 180 -> 60 * 3 -> 3 seconds
    // frameCount % 180 === 0 -> whenever frameCount is a multiple of 180
    // therefore every 3 seconds === 180 frameCount
    // eventualy, we moved to 75, for them to appear faster, its up to you to choose interval
    if (frameCount % 75 === 0) {
      // if (frameCount % 180 === 0) {
      this.obstacles.push(new Obstacle());
      this.toiletArray.push(new ShitStorm());
    }

    this.obstacles = this.obstacles.filter((obstacle) => {
      obstacle.drawObstacle();

      return obstacle.left >= -obstacle.width;
    });

    this.toiletArray = this.toiletArray.filter((shitty) => {
      shitty.drawShitStorm();

      return shitty.top >= +shitty.height;
    });
  }

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
