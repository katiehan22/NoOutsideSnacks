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
    this.createMutePause();
    this.createDispensers();
    this.allFoodItems = [];
    this.numItems = 0;  // Num items that have been created. Increments when a new item is created 
    this.intervalId = undefined;
    this.fillFoodItems();
    this.allToppings = [];
    this.paused = false;
    this.score = 0;
    this.scoreImg = new Image();
    this.scoreImg.src = "assets/images/starscore.png";
    this.correctSound = new Audio("assets/audio/correct.wav");
    this.incorrectSound = new Audio("assets/audio/incorrect.mp3");
    this.backgroundMusic = new Audio("assets/audio/ukulele.mp3");
    this.backgroundMusic.play();
    this.handleClick = this.handleClick.bind(this);
    this.bindEvents();
  }

  fillFoodItems () {
    this.intervalId = setInterval(this.createFoodItem.bind(this), 2000);
  }

  createFoodItem() {
    let keys = Object.keys(FoodItem.FOODITEMS);
    let randPos = Math.floor(Math.random() * 4);
    let colorValue = keys[randPos];
    let newFoodItem = new FoodItem(10, colorValue);
    this.allFoodItems.push(newFoodItem);
    this.numItems += 1;
    if (this.numItems === NUM_FOOD_ITEMS) {
      clearInterval(this.intervalId);
    }
  }

  createMutePause() {
    const ul = document.createElement("ul");
    ul.classList.add("game-buttons");
    this.el.appendChild(ul);

    let mute = document.createElement("li");
    mute.classList.add("mute");
    let imgMute = document.createElement("img");
    imgMute.src = "assets/images/buttonmute.png";
    imgMute.id = "mute-img";
    mute.appendChild(imgMute);

    let pause = document.createElement("li");
    pause.classList.add("pause");
    let imgPause = document.createElement("img");
    imgPause.src = "assets/images/buttonpause.png";
    imgPause.id = "pause-img";
    pause.appendChild(imgPause);

    ul.appendChild(mute);
    ul.appendChild(pause);
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
    ctx.drawImage(this.scoreImg, 560, 0, 175, 175);
    ctx.textAlign = "center";
    ctx.lineWidth = 0.5;
    ctx.fillStyle = "black";
    ctx.font = "15px Alkalami";
    ctx.fillText("Score", 646, 80);
    ctx.font = "30px Alkalami";
    ctx.fillText(`${this.score}`, 647, 110);
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

    let muteButton = document.querySelector("#mute-img");
    muteButton.addEventListener("click", this.handleMute);

    let pauseButton = document.querySelector("#pause-img");
    pauseButton.addEventListener("click", this.togglePause);
  }

  handleClick(e) {
    let selectedImg = e.target;
    if (selectedImg.nodeName === "IMG") {
      let newTopping = new Topping(selectedImg.id);
      this.allToppings.push(newTopping);
      this.getBelowFoodItem(newTopping);
    }
  }

  handleMute(e) {
    // let selectedButton = e.target;
    // console.log(selectedButton);
    console.log(this.backgroundMusic);
    if (this.backgroundMusic.muted) {
      this.backgroundMusic.muted = false;
      this.correctSound.muted = false;
      this.incorrectSound.muted = false;
    } else {
      this.backgroundMusic.muted = true;
      this.correctSound.muted = true;
      this.incorrectSound.muted = true;
    }
  }

  togglePause(e) {
    // let selectedButton = e.target;
    // console.log(selectedButton);
    console.log(this.paused);
    if (this.paused === false || this.paused === undefined) {
      this.paused = true;
    } else {
      this.paused = false;
    }
    console.log(this.paused);
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
      this.correctSound.play();
      this.score += 10;
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
}

export default Game