// We keep, in this file, all the necessary responsabilities for  preloading, drawing and moving the obstacles image

class Obstacle {
  // in this constructor, obstacle takes no arguments, because each obstacle creates and maintains all of its logic internally. therefore, theres no need for us to pass anything whenever we call new Obstacle()
  constructor() {
    //! important: random function comes from p5 - https://p5js.org/reference/#/p5/random
    this.height = random(10, 20);
    this.width = random(25, 100);
    // this top position is created like this, because if it would be CANVAS_HEIGHT, we would get something that would be drawn 100% off canvas, to the bottom. by removing the obstacle's height, we make sure that, at least, even if we get the value of CANVAS_HEIGHT, the obstacle will be drawn on top of that line, instead of below it
    this.top = random(150, CANVAS_HEIGHT - this.height - 5); // -5 just so that its not really in the end of canvas

    // This calculation makes sure that every obstacle is drawn completely off canvas to the right
    this.left = CANVAS_WIDTH + 5;
    this.speed = random(1, 5);

    this.roundness = 20;
  }

  drawObstacle() {
    rect(this.left, this.top, this.width, this.height, this.roundness);

    this.left -= this.speed;
  }
}

// this implementation is just here to show that it is possible to create some kind deviation on the movement. we can make them move vertically as well, its just a matter of coding it
// if (frameCount % 2 === 0) {
//   this.top -= 5;
// } else {
//   this.top += 5;
// }
