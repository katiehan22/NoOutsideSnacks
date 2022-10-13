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
    this.backgroundMusic = new Audio("assets/audio/ukulele.mp3");
    this.backgroundMusic.loop = true;
    this.createMutePause();
    this.createDispensers();
    // this.paused = false;
    this.scoreImg = new Image();
    this.scoreImg.src = "assets/images/starscore.png";
    this.levelsScreen = document.querySelector(".levels-screen");
    this.endScreen = document.querySelector(".end-screen");
    this.levelNum = 1;
    this.level; 
    this.intervalIdToppingBounds = undefined;
    this.intervalIdIsOver = undefined;
    this.firstGame = true;
    this.handleClick = this.handleClick.bind(this);
    this.startNextLevel = this.startNextLevel.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.bindEvents();
  }

  start() {
    if(this.firstGame) {
      this.backgroundMusic.play();
      this.level = new Level(this.levelNum); 
      this.step();
    } else {
      this.restartGame();
    }
  }

  step() {
    setInterval(this.draw.bind(this, this.ctx), 100);
    setInterval(this.moveObjects.bind(this), 100);
    this.intervalIdToppingBounds = setInterval(this.level.checkToppingBounds.bind(this.level), 100);
    this.intervalIdIsOver = setInterval(this.isOver.bind(this), 100);
  }

  isOver() {
    // if allFoodItems.length === totalFoodItems and the last foodItem's x pos is greater than DIM X
    if (this.level.allFoodItems.length === Level.LEVELVARIABLES[this.level.levelNum][1] && this.level.allFoodItems[this.level.allFoodItems.length - 1].pos[0] >= DIM_X) {
      this.levelResult();
      clearInterval(this.intervalIdIsOver);
    }
  }

  levelResult() {
    // If level num 1-3, 
      // If win (score is greater/equal to correctItemsNeeded), show levels screen
      // If lose, show end screen
    // Else (level = 4, last), show end screen
    if (this.levelNum <= 3) {
      if (this.level.score >= Level.LEVELVARIABLES[this.level.levelNum][4]) {
        this.showLevelsScreen();
      } else {
        this.showEndScreen();
      }
    } else {
      this.showEndScreen();
    }
  }

  showLevelsScreen() {
    let levelSummary = document.querySelector(".level-summary");
    let levelReq = document.querySelector(".level-req");
    levelSummary.innerHTML = `You fulfilled ${this.level.score} out of ${Level.LEVELVARIABLES[this.level.levelNum][1]} items!`;
    levelReq.innerHTML = `In Level ${this.levelNum + 1}, you need to fulfill ${Level.LEVELVARIABLES[this.levelNum + 1][4]} out of ${Level.LEVELVARIABLES[this.levelNum + 1][1]} items.`;
    this.levelsScreen.style.display = "block";
  }

  showEndScreen() {
    // If won, show you won. Else, show you lost.
    let gameSummary = document.querySelector(".game-summary");
    if (this.level.score >= Level.LEVELVARIABLES[this.level.levelNum][4]) {
      gameSummary.innerHTML = 'You won!';
    } else {
      gameSummary.innerHTML = 'You lost!';
    }
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

    // let pause = document.createElement("li");
    // pause.classList.add("pause");
    // let imgPause = document.createElement("img");
    // imgPause.src = "assets/images/buttonpause.png";
    // imgPause.id = "pause-img";
    // pause.appendChild(imgPause);

    ul.appendChild(mute);
    // ul.appendChild(pause);
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
    imgPopcorn.src = "assets/images/dispenserbutter2.png";
    imgPopcorn.id = "popcorn-img";
    dispenserPopcorn.appendChild(imgPopcorn);

    let dispenserPretzel = document.createElement("li");
    dispenserPretzel.classList.add("pretzel");
    let imgPretzel = document.createElement("img");
    imgPretzel.src = "assets/images/dispensersalt2.png";
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

    // let pauseButton = document.querySelector("#pause-img");
    // pauseButton.addEventListener("click", this.togglePause);

    let nextLevelButton = document.querySelector("#next-level-button");
    nextLevelButton.addEventListener("click", this.startNextLevel);

    let restartButton = document.querySelector("#restart-button");
    restartButton.addEventListener("click", this.restartGame);

    let backHomeButton = document.querySelector("#home-button");
    backHomeButton.addEventListener("click", this.backToHome);
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
    let muteButton = document.querySelector("#mute-img");
    if (this.backgroundMusic.muted) {
      this.backgroundMusic.muted = false;
      muteButton.src = "assets/images/buttonmute.png";
    } else {
      this.backgroundMusic.muted = true;
      muteButton.src = "assets/images/buttonunmute.png";
    }
  }

  // togglePause(e) {
  //   if (this.paused === false || this.paused === undefined) {
  //     this.paused = true;
  //   } else {
  //     this.paused = false;
  //   }
  // }

  startNextLevel(e) {
    this.levelsScreen.style.display = "none";
    this.levelNum += 1;
    this.level = new Level(this.levelNum);
    clearInterval(this.intervalIdToppingBounds);
    this.intervalIdToppingBounds = setInterval(this.level.checkToppingBounds.bind(this.level), 100);
    this.intervalIdIsOver = setInterval(this.isOver.bind(this), 100);
  }

  restartGame(e) {
    this.endScreen.style.display = "none";
    this.levelNum = 1;
    this.level = new Level(this.levelNum);
    clearInterval(this.intervalIdToppingBounds);
    this.intervalIdToppingBounds = setInterval(this.level.checkToppingBounds.bind(this.level), 100);
    this.intervalIdIsOver = setInterval(this.isOver.bind(this), 100);
  }

  backToHome(e) {
    let titleScreen = document.querySelector(".title-screen");
    let canvasDiv = document.querySelector(".canvas-div");
    let gameCanvas = document.getElementById("game-canvas");

    this.endScreen.style.display = "none";
    canvasDiv.style.display = "none";
    gameCanvas.style.display = "none";
    titleScreen.style.display = "flex";

    this.firstGame = false;
  }
}

export default Game