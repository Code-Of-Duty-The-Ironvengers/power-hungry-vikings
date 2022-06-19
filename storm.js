// Create random chocolate storm:
// step1. create chocolateStorm class and import to index.html
// step2. render storm in game.js
// step3. clean storm in game.js

class ChocolateStorm {
  constructor() {
    this.left = random(50, CANVAS_WIDTH - 100);
    this.top = -20;
    this.speed = random(1, 3);
  }

  drop() {
    textSize(20);
    text("🤎", this.left, this.top);
    this.top += this.speed;
  }
}
