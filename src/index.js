import FoodItem from './scripts/food_item';
import Game from './scripts/game'
import MovingObject from './scripts/moving_object'

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const mo = new MovingObject([100, 100], 100)

  mo.draw(ctx);
  mo.move();
  // mo.draw(ctx);

  const food_item = new FoodItem([200, 100], 100, "pretzel");
  food_item.draw(ctx);
  food_item.move();
  food_item.draw(ctx);
})