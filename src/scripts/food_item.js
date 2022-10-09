import MovingObject from "./moving_object"

const DIM_X = 800;
const DIM_Y = 600;

const FOODITEMS = { 
  slushee: "assets/images/cupempty.png",
  hotdog: "assets/images/hotdog.png",
  popcorn: "assets/images/popcornplain.png",
  pretzel: "assets/images/pretzelplain.png"
}

// const FOODITEMS = { // complete food items
//   slushee: "assets/images/cupfilled.png",
//   hotdog: "assets/images/hotdogmustard.png",
//   popcorn: "assets/images/popcornbutter.png",
//   pretzel: "assets/images/pretzelsalt.png"
// }

class FoodItem extends MovingObject {
  constructor(vel, name) {
    const img = new Image();
    img.src = FOODITEMS[name];
    super([0, 450], vel, img);
    this.name = name;
    this.topping = null;
  }

  move() {
    this.pos = [this.pos[0] + this.vel, this.pos[1]];
  }

  draw(ctx) {  
    ctx.drawImage(this.img, this.pos[0], this.pos[1], 75, 75);
  }

  // moveAcross(ctx) {
  //   setInterval(this.draw.bind(this, ctx), 50);
  //   setInterval(this.move.bind(this), 100);
  // }

  static get FOODITEMS() {
    return FOODITEMS;
  }
}

export default FoodItem