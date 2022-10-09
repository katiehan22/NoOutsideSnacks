import MovingObject from "./moving_object"

const DIM_X = 800;
const DIM_Y = 600;

const FOODITEMS = { 
  slushee: "assets/emptycupblue3.png",
  hotdog: "assets/hotdog.png",
  popcorn: "assets/plainpopcorn.png",
  pretzel: "assets/plainpretzel.png"
}

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
    ctx.drawImage(this.img, this.pos[0], this.pos[1], 50, 50);
  }

  moveAcross(ctx) {
    setInterval(this.draw.bind(this, ctx), 50);
    setInterval(this.move.bind(this), 100);
  }

  static get FOODITEMS() {
    return FOODITEMS;
  }
}

export default FoodItem