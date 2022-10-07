import MovingObject from "./moving_object"

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
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], 50, 50);
  }

  static get FOODITEMS() {
    return FOODITEMS;
  }
}

export default FoodItem