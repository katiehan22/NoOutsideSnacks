import FoodItem from "./food_item";
import Topping from "./topping";
import Dispenser from "./dispenser";

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
    ctx.drawImage(this.background, 0, 0);  // draw background
    for(let i = 0; i < this.allFoodItems.length; i++) {
      this.allFoodItems[i].draw(ctx);
    }
    for (let j = 0; j < this.allToppings.length; j++) {
      this.allToppings[j].draw(ctx);
    }
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
    if (this.allToppings[0].outOfBounds()) {
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
      let topping = new Topping(selectedImg.id);
      this.allToppings.push(topping);
    }
  }
}

export default Game