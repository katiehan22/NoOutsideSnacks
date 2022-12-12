import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const startButton = document.getElementById("start-button");
  const startButton2 = document.getElementById("start-button2");
  const titleScreen = document.querySelector(".title-screen");
  const canvasDiv = document.querySelector(".canvas-div");
  const gameCanvas = document.getElementById("game-canvas");
  const instructionsButton = document.getElementById("instructions-button");
  const instructionsScreen = document.querySelector(".instructions-screen");

  const game = new Game(ctx, canvasDiv);

  startButton.addEventListener("click", function(){
    titleScreen.style.display = "none";
    canvasDiv.style.display = "block";
    gameCanvas.style.display = "block";

    game.start();
  });

  startButton2.addEventListener("click", function () {
    instructionsScreen.style.display = "none";
    canvasDiv.style.display = "block";
    gameCanvas.style.display = "block";

    game.start();
  });

  instructionsButton.addEventListener("click", function() {
    titleScreen.style.display = "none";
    instructionsScreen.style.display = "block";
  });
})