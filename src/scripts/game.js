import FoodItem from "./food_item";
import Topping from "./topping";

const DIM_X = 800;
const DIM_Y = 600;
const NUM_FOOD_ITEMS = 10;


class Game {
  constructor(el){
    this.el = el; // el is the document query selecter for .canvas-div
    this.background = new Image();
    this.background.src = "assets/images/concessions4.png";
    this.createDispensers();
    this.allFoodItems = [];
    this.fillFoodItems();
    this.allToppings = [];
    this.score = 0;
    this.scoreImg = new Image();
    this.scoreImg.src = "assets/images/starscore.png";
    this.handleClick = this.handleClick.bind(this);
    this.bindEvents();
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

  createDispensers() {
    const ul = document.createElement("ul");
    ul.classList.add("dispenser-machines");
    this.el.appendChild(ul);

    let dispenserSlushee = document.createElement("li");
    dispenserSlushee.classList.add("slushee");
    let imgSlushee = document.createElement("img");
    imgSlushee.src = "assets/images/dispenserslushee.png";
    imgSlushee.id = "slushee-img";
    dispenserSlushee.appendChild(imgSlushee);

    let dispenserHotdog = document.createElement("li");
    dispenserHotdog.classList.add("hotdog");
    let imgHotdog = document.createElement("img");
    imgHotdog.src = "assets/images/dispensermustard.png";
    imgHotdog.id = "hotdog-img";
    dispenserHotdog.appendChild(imgHotdog);

    let dispenserPopcorn = document.createElement("li");
    dispenserPopcorn.classList.add("popcorn");
    let imgPopcorn = document.createElement("img");
    imgPopcorn.src = "assets/images/dispenserbutter.png";
    imgPopcorn.id = "popcorn-img";
    dispenserPopcorn.appendChild(imgPopcorn);

    let dispenserPretzel = document.createElement("li");
    dispenserPretzel.classList.add("pretzel");
    let imgPretzel = document.createElement("img");
    imgPretzel.src = "assets/images/dispensersalt.png";
    imgPretzel.id = "pretzel-img";
    dispenserPretzel.appendChild(imgPretzel);

    ul.appendChild(dispenserSlushee);
    ul.appendChild(dispenserHotdog);
    ul.appendChild(dispenserPopcorn);
    ul.appendChild(dispenserPretzel);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    // draw background
    ctx.drawImage(this.background, 0, 0);
    // draw food items
    for(let i = 0; i < this.allFoodItems.length; i++) {
      this.allFoodItems[i].draw(ctx);
    }
    // draw toppings being dispensed 
    for (let j = 0; j < this.allToppings.length; j++) {
      this.allToppings[j].draw(ctx);
    }

    // draw score
    ctx.drawImage(this.scoreImg, 600, 0, 175, 175);
    ctx.textAlign = "center";
    ctx.lineWidth = 0.5;
    ctx.fillStyle = "black";
    ctx.font = "15px Arial";
    ctx.fillText("Score", 686, 80);
    ctx.font = "30px Arial";
    ctx.fillText(`${this.score}`, 685, 110);
  }

  moveObjects() {
    for (let i = 0; i < this.allFoodItems.length; i++) {
      this.allFoodItems[i].move();
    }

    for (let j = 0; j < this.allToppings.length; j++) {
      this.allToppings[j].move();
    }
  }

  checkToppingBounds() {
    // only need to check first each time
    if (this.allToppings.length > 0 && this.allToppings[0].outOfBounds()) {
      this.allToppings = this.allToppings.slice(1);
    }
  }

  bindEvents() {
    let ul = document.querySelector(".dispenser-machines")
    ul.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    let selectedImg = e.target;
    if (selectedImg.nodeName === "IMG") {
      let newTopping = new Topping(selectedImg.id);
      this.allToppings.push(newTopping);
      this.getBelowFoodItem(newTopping);
    }
  }

  getBelowFoodItem(newTopping) {
    // Checks if there are any food items with an x-pos within the range of the clicked topping 
    // Returns the food item
    let belowFoodItem = null;
    for(let i = 0; i < this.allFoodItems.length; i++) {
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
      this.score += 10;
    } else {
      belowFoodItem.swapImage("incorrect");
    }
  }

  checkCorrectMatch(belowFoodItem, newTopping) {
    if ((belowFoodItem.name === "hotdog" && newTopping.name === "hotdog-img") || (belowFoodItem.name === "popcorn" && newTopping.name === "popcorn-img") || (belowFoodItem.name === "slushee" && newTopping.name === "slushee-img") || (belowFoodItem.name === "pretzel" && newTopping.name === "pretzel-img")) {
      return true;
    } else {
      return false;
    }
  }
}

export default Game