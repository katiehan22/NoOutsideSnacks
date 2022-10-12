import FoodItem from "./food_item";
import Topping from "./topping";
import Level from "./level";

const DIM_X = 800;
const DIM_Y = 600;

class Game {
  constructor(ctx, el){
    this.ctx = ctx;
    this.el = el; 
    this.background = new Image();
    this.background.src = "assets/images/concessions4.png";
    this.createMutePause();
    this.createDispensers();
    this.paused = false;
    this.scoreImg = new Image();
    this.scoreImg.src = "assets/images/starscore.png";
    this.levelsScreen = document.querySelector(".levels-screen");
    console.log(this.levelsScreen.style);
    this.endScreen = document.querySelector(".end-screen");
    this.levelNum = 1;
    this.level = new Level(this.levelNum); // ADD HERE
    this.handleClick = this.handleClick.bind(this);
    this.bindEvents();
  }

  start() {
    this.step();
  }

  step() {
    setInterval(this.draw.bind(this, this.ctx), 100);
    setInterval(this.moveObjects.bind(this), 100);
    setInterval(this.level.checkToppingBounds.bind(this.level), 100);
    setInterval(this.isOver.bind(this), 100);
  }

  isOver() {
    // if allFoodItems.length === totalFoodItems and the last foodItem's x pos is greater than DIM X
    if (this.level.allFoodItems.length === Level.LEVELVARIABLES[this.level.levelNum][1] && this.level.allFoodItems[this.level.allFoodItems.length - 1].pos[0] >= DIM_X) {
      this.levelResult();
    }
  }

  levelResult() {
    // If win, show levels screen
    // If lose, show end screen
    // If score is greater/equal to correctItemsNeeded
    if (this.level.score >= Level.LEVELVARIABLES[this.level.levelNum][4]) {
      this.showLevelsScreen();
    } else {
      this.showEndScreen();
    }
  }

  showLevelsScreen() {
    let levelSummary = document.querySelector(".level-summary");
    let levelReq = document.querySelector(".level-req");
    levelSummary.innerHTML = `You fulfilled ${this.level.score} out of ${Level.LEVELVARIABLES[this.level.levelNum][1]} orders!`;
    levelReq.innerHTML = `In Level ${this.levelNum + 1}, you need to fulfill ${Level.LEVELVARIABLES[this.levelNum + 1][4]} out of ${Level.LEVELVARIABLES[this.levelNum + 1][1]} orders.`;
    this.levelsScreen.style.display = "block";
  }

  showEndScreen() {
    // Code to customize text inside end screen
    this.endScreen.style.display = "block";
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
    for(let i = 0; i < this.level.allFoodItems.length; i++) {
      this.level.allFoodItems[i].draw(ctx);
    }
    // draw toppings being dispensed 
    for (let j = 0; j < this.level.allToppings.length; j++) {
      this.level.allToppings[j].draw(ctx);
    }

    // draw score
    ctx.drawImage(this.scoreImg, 560, 0, 175, 175);
    ctx.textAlign = "center";
    ctx.lineWidth = 0.5;
    ctx.fillStyle = "black";
    ctx.font = "15px Alkalami";
    ctx.fillText("Score", 646, 80);
    ctx.font = "30px Alkalami";
    ctx.fillText(`${this.level.score}`, 647, 110);
  }

  moveObjects() {
    for (let i = 0; i < this.level.allFoodItems.length; i++) {
      this.level.allFoodItems[i].move();
    }

    for (let j = 0; j < this.level.allToppings.length; j++) {
      this.level.allToppings[j].move();
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
      this.level.allToppings.push(newTopping);
      this.level.getBelowFoodItem(newTopping);
    }
  }

  handleMute(e) {
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
    if (this.paused === false || this.paused === undefined) {
      this.paused = true;
    } else {
      this.paused = false;
    }
  }
}

export default Game