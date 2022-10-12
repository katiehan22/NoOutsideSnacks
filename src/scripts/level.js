import FoodItem from "./food_item";
import Topping from "./topping";

const DIM_X = 800;
const DIM_Y = 600;

const LEVELVARIABLES = {
  1: [1, 15, 2000, 10, 10],
  2: [2, 20, 2000, 20, 15]
}
// levelNum, totalFoodItems, intervalDuration, foodItemVel, correctItemsNeeded
// LEVELVARIABLES[1][3] will get 10

class Level {
  constructor(levelNum) {
    this.levelNum = levelNum;
    // if(difficulty === 1) {
    //   this.totalFoodItems = 15;
    // }
    this.totalFoodItems = LEVELVARIABLES[this.levelNum][1]; // total food items
    this.allFoodItems = [];
    this.numItems = 0;
    this.intervalId = undefined;
    this.fillFoodItems();
    this.allToppings = [];
    this.score = 0;
    this.correctSound = new Audio("assets/audio/correct.wav");
    this.incorrectSound = new Audio("assets/audio/incorrect.mp3");
    this.backgroundMusic = new Audio("assets/audio/ukulele.mp3");
    this.backgroundMusic.play();
  }

  fillFoodItems() {
    this.intervalId = setInterval(this.createFoodItem.bind(this), LEVELVARIABLES[this.levelNum][2]);  // intervalDuration
  }

  createFoodItem() {
    let keys = Object.keys(FoodItem.FOODITEMS);
    let randPos = Math.floor(Math.random() * 4);
    let colorValue = keys[randPos];
    let newFoodItem = new FoodItem(LEVELVARIABLES[this.levelNum][3], colorValue); //velocity 
    this.allFoodItems.push(newFoodItem);
    this.numItems += 1;
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
    // Returns the food item
    let belowFoodItem = null;
    for (let i = 0; i < this.allFoodItems.length; i++) {
      let foodItem = this.allFoodItems[i];
      if (foodItem.pos[0] >= (newTopping.pos[0] - 125) && foodItem.pos[0] <= (newTopping.pos[0] - 10)) {
        belowFoodItem = foodItem;
        console.log(foodItem);
        console.log(newTopping);
      }
    }
    if (belowFoodItem != null && belowFoodItem.topping === null) {
      this.addTopping(belowFoodItem, newTopping);
    }
    return belowFoodItem;
  }

  addTopping(belowFoodItem, newTopping) {
    // Already checked that fooditem's topping is null
    // Check if match is correct
    // If dispenser matches food item, update fooditem.topping, change image to correct, add to the score
    // If does not match, update fooditem.topping to incorrect, change image to incorrect 
    if (this.checkCorrectMatch(belowFoodItem, newTopping) === true) {
      belowFoodItem.swapImage("correct");
      this.correctSound.play();
      this.score += 1;
    } else {
      belowFoodItem.swapImage("incorrect");
      this.incorrectSound.play();
    }
  }

  checkCorrectMatch(belowFoodItem, newTopping) {
    if ((belowFoodItem.name === "hotdog" && newTopping.name === "hotdog-img") || (belowFoodItem.name === "popcorn" && newTopping.name === "popcorn-img") || (belowFoodItem.name === "slushee" && newTopping.name === "slushee-img") || (belowFoodItem.name === "pretzel" && newTopping.name === "pretzel-img")) {
      return true;
    } else {
      return false;
    }
  }

  isOver() {
    // allFoodItems.length === totalFoodItems and the last foodItem's x pos is greater than DIM X
    if (this.allFoodItems.length === LEVELVARIABLES[this.levelNum][1] && this.allFoodItems[this.allFoodItems.length - 1].pos[0] >= DIM_X) {
      return this.levelResult();
    } else {
      return false;
    }
    
  }

  levelResult() {
    // returns win or lose
    // If score is greater/equal to correctItemsNeeded
    if (this.score >= LEVELVARIABLES[this.levelNum][4]) {
      alert("You Win");
      return "win";
    } else {
      alert("You Lose");
      return "lose";
    }
  }






}

export default Level