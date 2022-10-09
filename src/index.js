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
  // const foodItem = new FoodItem(10, "slushee");
  // foodItem.moveAcross(ctx);

  // const mo = new MovingObject([0,100], 100)

  // mo.draw(ctx);
  // mo.move();
  // mo.draw(ctx);

  // const food_item = new FoodItem(10, "nachos");
  // food_item.draw(ctx);
  // food_item.move();
  // food_item.draw(ctx);

  // const game = new Game();
  // game.fillFoodItems();
  // console.log(game.allFoodItems);
  // game.draw(ctx);
})