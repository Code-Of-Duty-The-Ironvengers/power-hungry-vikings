// let img;

const game = new Game();

function setup() {
  createCanvas(750, 500);
}

function draw() {
  background("orange");
  game.play();
}

function preload() {
  game.preload();
  vikingImagePowerfulAndStrong = loadImage("./images/character-right.png");
  //   img = loadImage("./images/character-right.png");
}