import FoodItem from "./food_item";

const DIM_X = 800;
const DIM_Y = 600;
const NUM_FOOD_ITEMS = 10;


class Game {
  constructor(){
    this.allFoodItems = [];
    this.fillFoodItems();
  }

  // Try setting interval for creating food items
  // Need to limit them
  fillFoodItems () {
    setInterval(this.createFoodItem.bind(this), 2000);
  }

  createFoodItem() {
    let keys = Object.keys(FoodItem.FOODITEMS);
    let randPos = Math.floor(Math.random() * 4);
    let colorValue = keys[randPos];
    let newFoodItem = new FoodItem(10, colorValue);
    this.allFoodItems.push(newFoodItem);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    for(let i = 0; i < this.allFoodItems.length; i++) {
      this.allFoodItems[i].draw(ctx);
    }
  }

  moveObjects() {
    for (let i = 0; i < this.allFoodItems.length; i++) {
      this.allFoodItems[i].move();
    }
  }
}

export default Game