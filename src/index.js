import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const startButton = document.getElementById("start-button");
  const titleScreen = document.querySelector(".title-screen");
  const canvasDiv = document.querySelector(".canvas-div");
  const gameCanvas = document.getElementById("game-canvas");

  const game = new Game(ctx, canvasDiv);

  startButton.addEventListener("click", function(){
    titleScreen.style.display = "none";
    canvasDiv.style.display = "block";
    gameCanvas.style.display = "block";

    game.start();
  })
})