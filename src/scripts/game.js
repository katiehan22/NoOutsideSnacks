import FoodItem from "./food_item";

const DIM_X = 800;
const DIM_Y = 600;
const NUM_FOOD_ITEMS = 10;


class Game {
  constructor(){
    this.allFoodItems = this.fillFoodItems();
  }

  fillFoodItems () {
    let foodItemsArr = [];
    let keys = Object.keys(FoodItem.FOODITEMS);
    for(let i = 0; i < NUM_FOOD_ITEMS; i++) {
      let randPos = Math.floor(Math.random() * 4);
      let value = keys[randPos];
      foodItemsArr.push(new FoodItem(10, value));
    }
    return foodItemsArr;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    for(let i = 0; i < this.allFoodItems.length; i++) {
      this.allFoodItems[i].draw(ctx);
    }
  }
}

export default Game