import FoodItem from "./food_item";

const DIM_X = 800;
const DIM_Y = 600;

const LEVELVARIABLES = {
  1: [1, 10, 2000, 10, 15], 
  2: [2, 10, 2000, 16, 15],
  3: [3, 20, 4000, 10, 15],
  4: [4, 20, 4000, 14, 15] 
}
// levelNum, totalFoodItems, intervalDuration, foodItemVel, correctItemsNeeded

class Level {
  constructor(levelNum) {
    this.levelNum = levelNum;
    this.totalFoodItems = LEVELVARIABLES[this.levelNum][1]; // total food items
    this.allFoodItems = [];
    this.numItems = 0;
    this.allToppings = [];
    this.score = 0;
    this.intervalId = undefined;
    this.muted = false;
    this.createFoodItem();  // call it once in the beginning so it starts without waiting for the interval 
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
      this.score += 1;
      if(this.muted === false) {
        let correctSound1 = new Audio("assets/audio/correct.wav");
        correctSound1.play();
      }
    } else {
      belowFoodItem.swapImage("incorrect");
      if(this.muted === false) {
        let incorrectSound1 = new Audio("assets/audio/incorrect.mp3");
        incorrectSound1.play();
      }
    }
  }

  checkCorrectMatch(belowFoodItem, newTopping) {
    if ((belowFoodItem.name === "hotdog" && newTopping.name === "hotdog-img") || (belowFoodItem.name === "popcorn" && newTopping.name === "popcorn-img") || (belowFoodItem.name === "slushee" && newTopping.name === "slushee-img") || (belowFoodItem.name === "pretzel" && newTopping.name === "pretzel-img")) {
      return true;
    } else {
      return false;
    }
  }

  toggleMute() {
    if (this.muted === true) {
      this.muted = false;
    } else {
      this.muted = true;
    }
  }

  static get LEVELVARIABLES() {
    return LEVELVARIABLES;
  }
}

export default Level