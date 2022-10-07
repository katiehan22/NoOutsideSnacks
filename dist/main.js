/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_food_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/food_item */ \"./src/scripts/food_item.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/moving_object */ \"./src/scripts/moving_object.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const gameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n  gameView.start(); // const mo = new MovingObject([0,100], 100)\n  // mo.draw(ctx);\n  // mo.move();\n  // mo.draw(ctx);\n  // const food_item = new FoodItem(10, \"nachos\");\n  // food_item.draw(ctx);\n  // food_item.move();\n  // food_item.draw(ctx);\n  // const game = new Game();\n  // game.fillFoodItems();\n  // console.log(game.allFoodItems);\n  // game.draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBSSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBRUEsTUFBTUMsUUFBUSxHQUFHLElBQUlSLDBEQUFKLENBQWFNLEdBQWIsQ0FBakI7RUFDQUUsUUFBUSxDQUFDQyxLQUFULEdBTGtELENBT2xEO0VBRUE7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtBQUNELENBdEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9vdXRzaWRlc25hY2tzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb2RJdGVtIGZyb20gJy4vc2NyaXB0cy9mb29kX2l0ZW0nO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY3R4KTtcbiAgZ2FtZVZpZXcuc3RhcnQoKTtcblxuICAvLyBjb25zdCBtbyA9IG5ldyBNb3ZpbmdPYmplY3QoWzAsMTAwXSwgMTAwKVxuXG4gIC8vIG1vLmRyYXcoY3R4KTtcbiAgLy8gbW8ubW92ZSgpO1xuICAvLyBtby5kcmF3KGN0eCk7XG5cbiAgLy8gY29uc3QgZm9vZF9pdGVtID0gbmV3IEZvb2RJdGVtKDEwLCBcIm5hY2hvc1wiKTtcbiAgLy8gZm9vZF9pdGVtLmRyYXcoY3R4KTtcbiAgLy8gZm9vZF9pdGVtLm1vdmUoKTtcbiAgLy8gZm9vZF9pdGVtLmRyYXcoY3R4KTtcblxuICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgLy8gZ2FtZS5maWxsRm9vZEl0ZW1zKCk7XG4gIC8vIGNvbnNvbGUubG9nKGdhbWUuYWxsRm9vZEl0ZW1zKTtcbiAgLy8gZ2FtZS5kcmF3KGN0eCk7XG59KSJdLCJuYW1lcyI6WyJGb29kSXRlbSIsIkdhbWUiLCJHYW1lVmlldyIsIk1vdmluZ09iamVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3Iiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/food_item.js":
/*!**********************************!*\
  !*** ./src/scripts/food_item.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\n\nconst FOODITEMS = {\n  // need to change to images\n  slushee: \"blue\",\n  nachos: \"orange\",\n  popcorn: \"yellow\",\n  pretzel: \"brown\"\n};\n\nclass FoodItem extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(vel, name) {\n    super([0, 450], vel);\n    this.name = name;\n    this.color = FOODITEMS[name]; // need to change to img\n\n    this.topping = null;\n  }\n\n  move() {\n    this.pos = [this.pos[0] + this.vel, this.pos[1]];\n  }\n\n  draw(ctx) {\n    // need to change to img\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], 50, 50);\n  }\n\n  static get FOODITEMS() {\n    return FOODITEMS;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mb29kX2l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLE1BQU1DLFNBQVMsR0FBRztFQUFFO0VBQ2xCQyxPQUFPLEVBQUUsTUFETztFQUVoQkMsTUFBTSxFQUFFLFFBRlE7RUFHaEJDLE9BQU8sRUFBRSxRQUhPO0VBSWhCQyxPQUFPLEVBQUU7QUFKTyxDQUFsQjs7QUFPQSxNQUFNQyxRQUFOLFNBQXVCTixzREFBdkIsQ0FBb0M7RUFDbENPLFdBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVk7SUFDckIsTUFBTSxDQUFDLENBQUQsRUFBSSxHQUFKLENBQU4sRUFBZ0JELEdBQWhCO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsS0FBTCxHQUFhVCxTQUFTLENBQUNRLElBQUQsQ0FBdEIsQ0FIcUIsQ0FHVzs7SUFDaEMsS0FBS0UsT0FBTCxHQUFlLElBQWY7RUFDRDs7RUFFREMsSUFBSSxHQUFHO0lBQ0wsS0FBS0MsR0FBTCxHQUFXLENBQUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLTCxHQUFwQixFQUF5QixLQUFLSyxHQUFMLENBQVMsQ0FBVCxDQUF6QixDQUFYO0VBQ0Q7O0VBRURDLElBQUksQ0FBQ0MsR0FBRCxFQUFNO0lBQUc7SUFDWEEsR0FBRyxDQUFDQyxTQUFKO0lBQ0FELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixLQUFLUCxLQUFyQjtJQUNBSyxHQUFHLENBQUNHLFFBQUosQ0FBYSxLQUFLTCxHQUFMLENBQVMsQ0FBVCxDQUFiLEVBQTBCLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQTFCLEVBQXVDLEVBQXZDLEVBQTJDLEVBQTNDO0VBQ0Q7O0VBRW1CLFdBQVRaLFNBQVMsR0FBRztJQUNyQixPQUFPQSxTQUFQO0VBQ0Q7O0FBcEJpQzs7QUF1QnBDLCtEQUFlSyxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9vdXRzaWRlc25hY2tzLy4vc3JjL3NjcmlwdHMvZm9vZF9pdGVtLmpzPzlhZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCJcblxuY29uc3QgRk9PRElURU1TID0geyAvLyBuZWVkIHRvIGNoYW5nZSB0byBpbWFnZXNcbiAgc2x1c2hlZTogXCJibHVlXCIsXG4gIG5hY2hvczogXCJvcmFuZ2VcIixcbiAgcG9wY29ybjogXCJ5ZWxsb3dcIixcbiAgcHJldHplbDogXCJicm93blwiXG59XG5cbmNsYXNzIEZvb2RJdGVtIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodmVsLCBuYW1lKSB7XG4gICAgc3VwZXIoWzAsIDQ1MF0sIHZlbCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbG9yID0gRk9PRElURU1TW25hbWVdOyAgIC8vIG5lZWQgdG8gY2hhbmdlIHRvIGltZ1xuICAgIHRoaXMudG9wcGluZyA9IG51bGw7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWwsIHRoaXMucG9zWzFdXTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7ICAvLyBuZWVkIHRvIGNoYW5nZSB0byBpbWdcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgNTAsIDUwKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRk9PRElURU1TKCkge1xuICAgIHJldHVybiBGT09ESVRFTVM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZEl0ZW0iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiRk9PRElURU1TIiwic2x1c2hlZSIsIm5hY2hvcyIsInBvcGNvcm4iLCJwcmV0emVsIiwiRm9vZEl0ZW0iLCJjb25zdHJ1Y3RvciIsInZlbCIsIm5hbWUiLCJjb2xvciIsInRvcHBpbmciLCJtb3ZlIiwicG9zIiwiZHJhdyIsImN0eCIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/food_item.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _food_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food_item */ \"./src/scripts/food_item.js\");\n\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst NUM_FOOD_ITEMS = 10;\n\nclass Game {\n  constructor() {\n    this.allFoodItems = this.fillFoodItems();\n  }\n\n  fillFoodItems() {\n    let foodItemsArr = [];\n    let keys = Object.keys(_food_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FOODITEMS);\n\n    for (let i = 0; i < NUM_FOOD_ITEMS; i++) {\n      let randPos = Math.floor(Math.random() * 4);\n      let value = keys[randPos];\n      foodItemsArr.push(new _food_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, value));\n    }\n\n    return foodItemsArr;\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n\n    for (let i = 0; i < this.allFoodItems.length; i++) {\n      this.allFoodItems[i].draw(ctx);\n    }\n  }\n\n  moveObjects() {\n    for (let i = 0; i < this.allFoodItems.length; i++) {\n      this.allFoodItems[i].move();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQSxNQUFNQyxLQUFLLEdBQUcsR0FBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCOztBQUdBLE1BQU1DLElBQU4sQ0FBVztFQUNUQyxXQUFXLEdBQUU7SUFDWCxLQUFLQyxZQUFMLEdBQW9CLEtBQUtDLGFBQUwsRUFBcEI7RUFDRDs7RUFFREEsYUFBYSxHQUFJO0lBQ2YsSUFBSUMsWUFBWSxHQUFHLEVBQW5CO0lBQ0EsSUFBSUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWVQsNERBQVosQ0FBWDs7SUFDQSxLQUFJLElBQUlZLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR1QsY0FBbkIsRUFBbUNTLENBQUMsRUFBcEMsRUFBd0M7TUFDdEMsSUFBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQWQ7TUFDQSxJQUFJQyxLQUFLLEdBQUdSLElBQUksQ0FBQ0ksT0FBRCxDQUFoQjtNQUNBTCxZQUFZLENBQUNVLElBQWIsQ0FBa0IsSUFBSWxCLGtEQUFKLENBQWEsRUFBYixFQUFpQmlCLEtBQWpCLENBQWxCO0lBQ0Q7O0lBQ0QsT0FBT1QsWUFBUDtFQUNEOztFQUVEVyxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUNSQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CcEIsS0FBcEIsRUFBMkJDLEtBQTNCOztJQUNBLEtBQUksSUFBSVUsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLEtBQUtOLFlBQUwsQ0FBa0JnQixNQUFyQyxFQUE2Q1YsQ0FBQyxFQUE5QyxFQUFrRDtNQUNoRCxLQUFLTixZQUFMLENBQWtCTSxDQUFsQixFQUFxQk8sSUFBckIsQ0FBMEJDLEdBQTFCO0lBQ0Q7RUFDRjs7RUFFREcsV0FBVyxHQUFHO0lBQ1osS0FBSyxJQUFJWCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtOLFlBQUwsQ0FBa0JnQixNQUF0QyxFQUE4Q1YsQ0FBQyxFQUEvQyxFQUFtRDtNQUNqRCxLQUFLTixZQUFMLENBQWtCTSxDQUFsQixFQUFxQlksSUFBckI7SUFDRDtFQUNGOztBQTNCUTs7QUE4QlgsK0RBQWVwQixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9vdXRzaWRlc25hY2tzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb29kSXRlbSBmcm9tIFwiLi9mb29kX2l0ZW1cIjtcblxuY29uc3QgRElNX1ggPSA4MDA7XG5jb25zdCBESU1fWSA9IDYwMDtcbmNvbnN0IE5VTV9GT09EX0lURU1TID0gMTA7XG5cblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5hbGxGb29kSXRlbXMgPSB0aGlzLmZpbGxGb29kSXRlbXMoKTtcbiAgfVxuXG4gIGZpbGxGb29kSXRlbXMgKCkge1xuICAgIGxldCBmb29kSXRlbXNBcnIgPSBbXTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKEZvb2RJdGVtLkZPT0RJVEVNUyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IE5VTV9GT09EX0lURU1TOyBpKyspIHtcbiAgICAgIGxldCByYW5kUG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgICBsZXQgdmFsdWUgPSBrZXlzW3JhbmRQb3NdO1xuICAgICAgZm9vZEl0ZW1zQXJyLnB1c2gobmV3IEZvb2RJdGVtKDEwLCB2YWx1ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gZm9vZEl0ZW1zQXJyO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsRm9vZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmFsbEZvb2RJdGVtc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZU9iamVjdHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbEZvb2RJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5hbGxGb29kSXRlbXNbaV0ubW92ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lIl0sIm5hbWVzIjpbIkZvb2RJdGVtIiwiRElNX1giLCJESU1fWSIsIk5VTV9GT09EX0lURU1TIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiYWxsRm9vZEl0ZW1zIiwiZmlsbEZvb2RJdGVtcyIsImZvb2RJdGVtc0FyciIsImtleXMiLCJPYmplY3QiLCJGT09ESVRFTVMiLCJpIiwicmFuZFBvcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInZhbHVlIiwicHVzaCIsImRyYXciLCJjdHgiLCJjbGVhclJlY3QiLCJsZW5ndGgiLCJtb3ZlT2JqZWN0cyIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\n\nclass GameView {\n  constructor(ctx) {\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ctx = ctx;\n  }\n\n  start() {\n    setInterval(this.game.draw.bind(this.game, this.ctx), 20);\n    setInterval(this.game.moveObjects.bind(this.game), 100);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQyxRQUFOLENBQWM7RUFDWkMsV0FBVyxDQUFDQyxHQUFELEVBQU07SUFDZixLQUFLQyxJQUFMLEdBQVksSUFBSUosNkNBQUosRUFBWjtJQUNBLEtBQUtHLEdBQUwsR0FBV0EsR0FBWDtFQUNEOztFQUVERSxLQUFLLEdBQUU7SUFDTEMsV0FBVyxDQUFDLEtBQUtGLElBQUwsQ0FBVUcsSUFBVixDQUFlQyxJQUFmLENBQW9CLEtBQUtKLElBQXpCLEVBQStCLEtBQUtELEdBQXBDLENBQUQsRUFBMkMsRUFBM0MsQ0FBWDtJQUNBRyxXQUFXLENBQUMsS0FBS0YsSUFBTCxDQUFVSyxXQUFWLENBQXNCRCxJQUF0QixDQUEyQixLQUFLSixJQUFoQyxDQUFELEVBQXdDLEdBQXhDLENBQVg7RUFDRDs7QUFUVzs7QUFZZCwrREFBZUgsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3V0c2lkZXNuYWNrcy8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuY2xhc3MgR2FtZVZpZXd7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gIH1cblxuICBzdGFydCgpe1xuICAgIHNldEludGVydmFsKHRoaXMuZ2FtZS5kcmF3LmJpbmQodGhpcy5nYW1lLCB0aGlzLmN0eCksIDIwKTtcbiAgICBzZXRJbnRlcnZhbCh0aGlzLmdhbWUubW92ZU9iamVjdHMuYmluZCh0aGlzLmdhbWUpLCAxMDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVWaWV3Il0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImNvbnN0cnVjdG9yIiwiY3R4IiwiZ2FtZSIsInN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJkcmF3IiwiYmluZCIsIm1vdmVPYmplY3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(pos, vel) {\n    this.pos = pos;\n    this.vel = vel; // this.game = object.game;\n  }\n\n  draw(ctx) {\n    // need to change to img\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], 50, 50);\n  }\n\n  move() {\n    this.pos = [this.pos[0] + this.vel, this.pos[1]];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFOLENBQW1CO0VBQ2pCQyxXQUFXLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXO0lBQ3BCLEtBQUtELEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLEdBQUwsR0FBV0EsR0FBWCxDQUZvQixDQUdwQjtFQUNEOztFQUVEQyxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUFHO0lBQ1hBLEdBQUcsQ0FBQ0MsU0FBSjtJQUNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsS0FBS0MsS0FBckI7SUFDQUgsR0FBRyxDQUFDSSxRQUFKLENBQWEsS0FBS1AsR0FBTCxDQUFTLENBQVQsQ0FBYixFQUEwQixLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUExQixFQUF1QyxFQUF2QyxFQUEyQyxFQUEzQztFQUNEOztFQUVEUSxJQUFJLEdBQUc7SUFDTCxLQUFLUixHQUFMLEdBQVcsQ0FBQyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFjLEtBQUtDLEdBQXBCLEVBQXlCLEtBQUtELEdBQUwsQ0FBUyxDQUFULENBQXpCLENBQVg7RUFDRDs7QUFmZ0I7O0FBa0JuQiwrREFBZUYsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3V0c2lkZXNuYWNrcy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanM/YzIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwb3MsIHZlbCkge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMudmVsID0gdmVsO1xuICAgIC8vIHRoaXMuZ2FtZSA9IG9iamVjdC5nYW1lO1xuICB9XG5cbiAgZHJhdyhjdHgpIHsgIC8vIG5lZWQgdG8gY2hhbmdlIHRvIGltZ1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA1MCwgNTApO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHRoaXMudmVsLCB0aGlzLnBvc1sxXV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsImNvbnN0cnVjdG9yIiwicG9zIiwidmVsIiwiZHJhdyIsImN0eCIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImNvbG9yIiwiZmlsbFJlY3QiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub291dHNpZGVzbmFja3MvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;