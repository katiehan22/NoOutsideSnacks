import FoodItem from './scripts/food_item';
import Game from './scripts/game'
import GameView from './scripts/game_view';
import MovingObject from './scripts/moving_object'

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const startButton = document.getElementById("start-button");
  const titleScreen = document.querySelector(".title-screen");
  const canvasDiv = document.querySelector(".canvas-div");
  const gameCanvas = document.getElementById("game-canvas");

  // need to comment this out and further below back in when putting title screen back
  const gameView = new GameView(ctx, canvasDiv);
  gameView.start();
  // startButton.addEventListener("click", function(){
  //   titleScreen.style.display = "none";
  //   canvasDiv.style.display = "block";
  //   gameCanvas.style.display = "block";
  //   const gameView = new GameView(ctx, canvasDiv);
  //   gameView.start();
  // })
})