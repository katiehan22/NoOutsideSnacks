import MovingObject from "./moving_object"

const DIM_X = 800;
const DIM_Y = 600;

const FOODITEMS = { 
  slushee: "assets/images/cupempty.png",
  hotdog: "assets/images/hotdog.png",
  popcorn: "assets/images/popcornplain.png",
  pretzel: "assets/images/pretzelplain.png",
  slusheeCorrect: "assets/images/cupfilled.png",
  hotdogCorrect: "assets/images/hotdogmustard.png",
  popcornCorrect: "assets/images/popcornbutter.png",
  pretzelCorrect: "assets/images/pretzelsalt.png", 
  slusheeIncorrect: "assets/images/cupincorrect.png",
  hotdogIncorrect: "assets/images/hotdogincorrect.png",
  popcornIncorrect: "assets/images/popcornincorrect.png",
  pretzelIncorrect: "assets/images/pretzelincorrect.png"
}

class FoodItem extends MovingObject {
  constructor(pos, vel, name) {
    const img = new Image();
    img.src = FOODITEMS[name];
    super(pos, vel, img);
    this.name = name;
    this.topping = null;
  }

  move() {
    this.pos = [this.pos[0] + this.vel, this.pos[1]];
  }

  draw(ctx) {  
    ctx.drawImage(this.img, this.pos[0], this.pos[1], 75, 75);
  }

  swapImage(status) {
    if (status === "correct") {
      // Change to correct img and set this.topping
      if (this.name === "slushee") {
        this.img.src = "assets/images/cupfilled.png";
      } else if (this.name === "hotdog") {
        this.img.src = "assets/images/hotdogmustard.png";
      } else if (this.name === "popcorn") {
        this.img.src = "assets/images/popcornbutter.png";
      } else {
        this.img.src = "assets/images/pretzelsalt.png";
      }
      this.topping = this.name;
    } else {
      // Change to incorrect img
      if (this.name === "slushee") {
        this.img.src = "assets/images/cupincorrect.png";
      } else if (this.name === "hotdog") {
        this.img.src = "assets/images/hotdogincorrect.png";
      } else if (this.name === "popcorn") {
        this.img.src = "assets/images/popcornincorrect.png";
      } else {
        this.img.src = "assets/images/pretzelincorrect.png";
      }
      this.topping = "incorrect";
    }
  }

  static get FOODITEMS() {
    return FOODITEMS;
  }
}

export default FoodItem