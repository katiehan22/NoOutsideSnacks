import FoodItem from './scripts/food_item';
import Game from './scripts/game'
import GameView from './scripts/game_view';
import MovingObject from './scripts/moving_object'

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  let el = document.querySelector(".canvas-div");
  const gameView = new GameView(ctx, el);
  gameView.start();
})