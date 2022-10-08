import MovingObject from "./moving_object"

const DIM_X = 800;
const DIM_Y = 600;

const FOODITEMS = { // need to change to images
  slushee: "blue",
  nachos: "orange",
  popcorn: "yellow",
  pretzel: "brown"
}

class FoodItem extends MovingObject {
  constructor(vel, name) {
    super([0, 450], vel);
    this.name = name;
    this.color = FOODITEMS[name];   // need to change to img
    this.topping = null;
  }

  move() {
    this.pos = [this.pos[0] + this.vel, this.pos[1]];
  }

  draw(ctx) {  // need to change to img
    // ctx.clearRect(0, 0, DIM_X, DIM_Y);
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], 50, 50);
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