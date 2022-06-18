// We keep, in this file, all the necessary responsabilities for  drawing and moving each individual poop

class Poop {
  // contrary to, for example, obstacle class, in this constructor, poopie does take arguments. because there is no way for the poop instance to know where it should originate from. therefore, the moment that it is created, it must receive a top and left values in order to be able to position them correctly
  constructor(top, left) {
    this.top = top;
    this.left = left;
  }

  // this is the `drawPlayer`/`drawObstacle` version of this instance
  // it is responsible for drawing `Poop` instances in the canvas
  throwPoopies() {
    textSize(20);
    text("💩", this.left, this.top);
    this.left += 1;
  }
}
