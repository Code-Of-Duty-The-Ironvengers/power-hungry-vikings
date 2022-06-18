class ShitStorm {
  constructor() {
    this.height = 25;
    this.width = 15;
    // this.top = random(5)
    this.top = random(10, 100 - this.height - 5);
    this.left = random(45, CANVAS_WIDTH - 5);
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.speed = random(1, 3);
  }

  drawShitStorm() {
    push();
    fill(this.color);
    rect(this.left, this.top, this.width, this.height);
    pop();
    this.top += this.speed;
  }
}
