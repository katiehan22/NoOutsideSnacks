import MovingObject from "./moving_object"

const FOODITEMS = { // need to change to img
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
}

export default FoodItem