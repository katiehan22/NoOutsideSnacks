import FoodItem from './scripts/food_item';
import Game from './scripts/game'
import MovingObject from './scripts/moving_object'

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const startButton = document.getElementById("start-button");
  const titleScreen = document.querySelector(".title-screen");
  const canvasDiv = document.querySelector(".canvas-div");
  const gameCanvas = document.getElementById("game-canvas");

  startButton.addEventListener("click", function(){
    titleScreen.style.display = "none";
    canvasDiv.style.display = "block";
    gameCanvas.style.display = "block";

    const game = new Game(ctx, canvasDiv);
    game.start();
  })
})