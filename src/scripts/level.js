import FoodItem from "./food_item";
import Topping from "./topping";

const DIM_X = 800;
const DIM_Y = 600;

const LEVELVARIABLES = {
  1: [1, 2, 2000, 10, 1], 
  2: [2, 2, 2000, 16, 1],
  3: [3, 10, 4000, 10, 5],
  4: [4, 10, 4000, 14, 5], 
  5: [5, 2, 2000, 10, 1]
}
// Need to change level 3 and 4
// levelNum, totalFoodItems, intervalDuration, foodItemVel, correctItemsNeeded
// LEVELVARIABLES[1][3] will get 10
// PREV
// 1: [1, 15, 2000, 10, 10], 
// 2: [2, 15, 2000, 16, 10],
// 3: [3, 10, 4000, 10, 5]  // change totalItems and correctitems
// 4: [4, 10, 4000, 14, 5]  // change totalItems and correctitems

class Level {
  constructor(levelNum) {
    this.levelNum = levelNum;
    this.totalFoodItems = LEVELVARIABLES[this.levelNum][1]; // total food items
    this.allFoodItems = [];
    this.numItems = 0;
    this.allToppings = [];
    this.score = 0;
    this.intervalId = undefined;
    this.createFoodItem();  // call it once in the beginning so it starts without pause
    this.fillFoodItems();
  }

  fillFoodItems() {
    this.intervalId = setInterval(this.createFoodItem.bind(this), LEVELVARIABLES[this.levelNum][2]);  // intervalDuration
  }

  createFoodItem() {
    let keys = Object.keys(FoodItem.FOODITEMS);
    let randPos = Math.floor(Math.random() * 4);
    let colorValue = keys[randPos];
    if(this.levelNum === 1 || this.levelNum === 2) {
      let newFoodItem = new FoodItem([0, 450], LEVELVARIABLES[this.levelNum][3], colorValue); //velocity 
      this.allFoodItems.push(newFoodItem);
      this.numItems += 1;
    } else if (this.levelNum === 3 || this.levelNum === 4) {
      let newFoodItem = new FoodItem([0, 450], LEVELVARIABLES[this.levelNum][3], colorValue); //velocity 
      this.allFoodItems.push(newFoodItem);

      randPos = Math.floor(Math.random() * 4);
      colorValue = keys[randPos];
      let newFoodItem2 = new FoodItem([-90, 450], LEVELVARIABLES[this.levelNum][3], colorValue);
      this.allFoodItems.push(newFoodItem2);

      this.numItems += 2;
    }

    if (this.numItems === this.totalFoodItems) {
      clearInterval(this.intervalId);
    }
  }

  checkToppingBounds() {
    if (this.allToppings.length > 0 && this.allToppings[0].outOfBounds()) {
      this.allToppings = this.allToppings.slice(1);
    }
  }

  getBelowFoodItem(newTopping) {
    // Checks if there are any food items with an x-pos within the range of the clicked topping 
    let belowFoodItem = null;
    for (let i = 0; i < this.allFoodItems.length; i++) {
      let foodItem = this.allFoodItems[i];
      if (foodItem.pos[0] >= (newTopping.pos[0] - 125) && foodItem.pos[0] <= (newTopping.pos[0] - 10)) {
        belowFoodItem = foodItem;
      }
    }
    if (belowFoodItem != null && belowFoodItem.topping === null) {
      this.addTopping(belowFoodItem, newTopping);
    }
    return belowFoodItem;
  }

  addTopping(belowFoodItem, newTopping) {
    if (this.checkCorrectMatch(belowFoodItem, newTopping) === true) {
      belowFoodItem.swapImage("correct");
      let correctSound1 = new Audio("assets/audio/correct.wav");
      correctSound1.play();
      this.score += 1;
    } else {
      belowFoodItem.swapImage("incorrect");
      let incorrectSound1 = new Audio("assets/audio/incorrect.mp3");
      incorrectSound1.play();
    }
  }

  checkCorrectMatch(belowFoodItem, newTopping) {
    if ((belowFoodItem.name === "hotdog" && newTopping.name === "hotdog-img") || (belowFoodItem.name === "popcorn" && newTopping.name === "popcorn-img") || (belowFoodItem.name === "slushee" && newTopping.name === "slushee-img") || (belowFoodItem.name === "pretzel" && newTopping.name === "pretzel-img")) {
      return true;
    } else {
      return false;
    }
  }

  static get LEVELVARIABLES() {
    return LEVELVARIABLES;
  }
}

export default Level