import MovingObject from "./moving_object"

const FOODITEMS = { // need to change to img
  slushee: "blue",
  nachos: "orange",
  popcorn: "yellow",
  pretzel: "brown"
}

class FoodItem extends MovingObject {
  constructor(pos, vel, name) {
    super(pos, vel);
    this.name = name;
    this.color = FOODITEMS[name];   // need to change to img
    this.topping = null;
  }
}

export default FoodItem