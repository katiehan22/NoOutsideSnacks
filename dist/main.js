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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_food_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/food_item */ \"./src/scripts/food_item.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/moving_object */ \"./src/scripts/moving_object.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const gameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx); // const foodItem = new FoodItem(10, \"slushee\");\n  // foodItem.moveAcross(ctx);\n\n  gameView.start(); // const mo = new MovingObject([0,100], 100)\n  // mo.draw(ctx);\n  // mo.move();\n  // mo.draw(ctx);\n  // const food_item = new FoodItem(10, \"nachos\");\n  // food_item.draw(ctx);\n  // food_item.move();\n  // food_item.draw(ctx);\n  // const game = new Game();\n  // game.fillFoodItems();\n  // console.log(game.allFoodItems);\n  // game.draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBSSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBRUEsTUFBTUMsUUFBUSxHQUFHLElBQUlSLDBEQUFKLENBQWFNLEdBQWIsQ0FBakIsQ0FKa0QsQ0FLbEQ7RUFDQTs7RUFFQUUsUUFBUSxDQUFDQyxLQUFULEdBUmtELENBVWxEO0VBRUE7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtBQUNELENBekJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9vdXRzaWRlc25hY2tzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb2RJdGVtIGZyb20gJy4vc2NyaXB0cy9mb29kX2l0ZW0nO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY3R4KTtcbiAgLy8gY29uc3QgZm9vZEl0ZW0gPSBuZXcgRm9vZEl0ZW0oMTAsIFwic2x1c2hlZVwiKTtcbiAgLy8gZm9vZEl0ZW0ubW92ZUFjcm9zcyhjdHgpO1xuXG4gIGdhbWVWaWV3LnN0YXJ0KCk7XG5cbiAgLy8gY29uc3QgbW8gPSBuZXcgTW92aW5nT2JqZWN0KFswLDEwMF0sIDEwMClcblxuICAvLyBtby5kcmF3KGN0eCk7XG4gIC8vIG1vLm1vdmUoKTtcbiAgLy8gbW8uZHJhdyhjdHgpO1xuXG4gIC8vIGNvbnN0IGZvb2RfaXRlbSA9IG5ldyBGb29kSXRlbSgxMCwgXCJuYWNob3NcIik7XG4gIC8vIGZvb2RfaXRlbS5kcmF3KGN0eCk7XG4gIC8vIGZvb2RfaXRlbS5tb3ZlKCk7XG4gIC8vIGZvb2RfaXRlbS5kcmF3KGN0eCk7XG5cbiAgLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIC8vIGdhbWUuZmlsbEZvb2RJdGVtcygpO1xuICAvLyBjb25zb2xlLmxvZyhnYW1lLmFsbEZvb2RJdGVtcyk7XG4gIC8vIGdhbWUuZHJhdyhjdHgpO1xufSkiXSwibmFtZXMiOlsiRm9vZEl0ZW0iLCJHYW1lIiwiR2FtZVZpZXciLCJNb3ZpbmdPYmplY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/food_item.js":
/*!**********************************!*\
  !*** ./src/scripts/food_item.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\n\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst FOODITEMS = {\n  // need to change to images\n  slushee: \"blue\",\n  nachos: \"orange\",\n  popcorn: \"yellow\",\n  pretzel: \"brown\"\n};\n\nclass FoodItem extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(vel, name) {\n    super([0, 450], vel);\n    this.name = name;\n    this.color = FOODITEMS[name]; // need to change to img\n\n    this.topping = null;\n  }\n\n  move() {\n    this.pos = [this.pos[0] + this.vel, this.pos[1]];\n  }\n\n  draw(ctx) {\n    // need to change to img\n    // ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], 50, 50);\n  }\n\n  moveAcross(ctx) {\n    setInterval(this.draw.bind(this, ctx), 50);\n    setInterval(this.move.bind(this), 100);\n  }\n\n  static get FOODITEMS() {\n    return FOODITEMS;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mb29kX2l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLE1BQU1DLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEdBQWQ7QUFFQSxNQUFNQyxTQUFTLEdBQUc7RUFBRTtFQUNsQkMsT0FBTyxFQUFFLE1BRE87RUFFaEJDLE1BQU0sRUFBRSxRQUZRO0VBR2hCQyxPQUFPLEVBQUUsUUFITztFQUloQkMsT0FBTyxFQUFFO0FBSk8sQ0FBbEI7O0FBT0EsTUFBTUMsUUFBTixTQUF1QlIsc0RBQXZCLENBQW9DO0VBQ2xDUyxXQUFXLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFZO0lBQ3JCLE1BQU0sQ0FBQyxDQUFELEVBQUksR0FBSixDQUFOLEVBQWdCRCxHQUFoQjtJQUNBLEtBQUtDLElBQUwsR0FBWUEsSUFBWjtJQUNBLEtBQUtDLEtBQUwsR0FBYVQsU0FBUyxDQUFDUSxJQUFELENBQXRCLENBSHFCLENBR1c7O0lBQ2hDLEtBQUtFLE9BQUwsR0FBZSxJQUFmO0VBQ0Q7O0VBRURDLElBQUksR0FBRztJQUNMLEtBQUtDLEdBQUwsR0FBVyxDQUFDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULElBQWMsS0FBS0wsR0FBcEIsRUFBeUIsS0FBS0ssR0FBTCxDQUFTLENBQVQsQ0FBekIsQ0FBWDtFQUNEOztFQUVEQyxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUFHO0lBQ1g7SUFDQUEsR0FBRyxDQUFDQyxTQUFKO0lBQ0FELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixLQUFLUCxLQUFyQjtJQUNBSyxHQUFHLENBQUNHLFFBQUosQ0FBYSxLQUFLTCxHQUFMLENBQVMsQ0FBVCxDQUFiLEVBQTBCLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQTFCLEVBQXVDLEVBQXZDLEVBQTJDLEVBQTNDO0VBQ0Q7O0VBRURNLFVBQVUsQ0FBQ0osR0FBRCxFQUFNO0lBQ2RLLFdBQVcsQ0FBQyxLQUFLTixJQUFMLENBQVVPLElBQVYsQ0FBZSxJQUFmLEVBQXFCTixHQUFyQixDQUFELEVBQTRCLEVBQTVCLENBQVg7SUFDQUssV0FBVyxDQUFDLEtBQUtSLElBQUwsQ0FBVVMsSUFBVixDQUFlLElBQWYsQ0FBRCxFQUF1QixHQUF2QixDQUFYO0VBQ0Q7O0VBRW1CLFdBQVRwQixTQUFTLEdBQUc7SUFDckIsT0FBT0EsU0FBUDtFQUNEOztBQTFCaUM7O0FBNkJwQywrREFBZUssUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3V0c2lkZXNuYWNrcy8uL3NyYy9zY3JpcHRzL2Zvb2RfaXRlbS5qcz85YWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiXG5cbmNvbnN0IERJTV9YID0gODAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5cbmNvbnN0IEZPT0RJVEVNUyA9IHsgLy8gbmVlZCB0byBjaGFuZ2UgdG8gaW1hZ2VzXG4gIHNsdXNoZWU6IFwiYmx1ZVwiLFxuICBuYWNob3M6IFwib3JhbmdlXCIsXG4gIHBvcGNvcm46IFwieWVsbG93XCIsXG4gIHByZXR6ZWw6IFwiYnJvd25cIlxufVxuXG5jbGFzcyBGb29kSXRlbSBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHZlbCwgbmFtZSkge1xuICAgIHN1cGVyKFswLCA0NTBdLCB2ZWwpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb2xvciA9IEZPT0RJVEVNU1tuYW1lXTsgICAvLyBuZWVkIHRvIGNoYW5nZSB0byBpbWdcbiAgICB0aGlzLnRvcHBpbmcgPSBudWxsO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHRoaXMudmVsLCB0aGlzLnBvc1sxXV07XG4gIH1cblxuICBkcmF3KGN0eCkgeyAgLy8gbmVlZCB0byBjaGFuZ2UgdG8gaW1nXG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA1MCwgNTApO1xuICB9XG5cbiAgbW92ZUFjcm9zcyhjdHgpIHtcbiAgICBzZXRJbnRlcnZhbCh0aGlzLmRyYXcuYmluZCh0aGlzLCBjdHgpLCA1MCk7XG4gICAgc2V0SW50ZXJ2YWwodGhpcy5tb3ZlLmJpbmQodGhpcyksIDEwMCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IEZPT0RJVEVNUygpIHtcbiAgICByZXR1cm4gRk9PRElURU1TO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb2RJdGVtIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIkRJTV9YIiwiRElNX1kiLCJGT09ESVRFTVMiLCJzbHVzaGVlIiwibmFjaG9zIiwicG9wY29ybiIsInByZXR6ZWwiLCJGb29kSXRlbSIsImNvbnN0cnVjdG9yIiwidmVsIiwibmFtZSIsImNvbG9yIiwidG9wcGluZyIsIm1vdmUiLCJwb3MiLCJkcmF3IiwiY3R4IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb3ZlQWNyb3NzIiwic2V0SW50ZXJ2YWwiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/food_item.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _food_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food_item */ \"./src/scripts/food_item.js\");\n\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst NUM_FOOD_ITEMS = 10;\n\nclass Game {\n  constructor() {\n    this.allFoodItems = [];\n    this.fillFoodItems();\n  } // Try setting interval for creating food items\n\n\n  fillFoodItems() {\n    setInterval(this.createFoodItem.bind(this), 2000); // setTimeout(this.createFoodItem.bind(this), 200);\n    // this.allFoodItems.push(this.createFoodItem());\n    // setTimeout(this.createFoodItem.bind(this), 2000);\n    // for(let i = 0; i < NUM_FOOD_ITEMS; i++) {\n    //   setTimeout(this.createFoodItem.bind(this), 2000);\n    // }\n    // allFoodItems.push(newFoodItem)\n  }\n\n  createFoodItem() {\n    let keys = Object.keys(_food_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FOODITEMS);\n    let randPos = Math.floor(Math.random() * 4);\n    let colorValue = keys[randPos];\n    let newFoodItem = new _food_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, colorValue);\n    this.allFoodItems.push(newFoodItem);\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n\n    for (let i = 0; i < this.allFoodItems.length; i++) {\n      this.allFoodItems[i].draw(ctx);\n    }\n  }\n\n  moveObjects() {\n    for (let i = 0; i < this.allFoodItems.length; i++) {\n      this.allFoodItems[i].move();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQSxNQUFNQyxLQUFLLEdBQUcsR0FBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCOztBQUdBLE1BQU1DLElBQU4sQ0FBVztFQUNUQyxXQUFXLEdBQUU7SUFDWCxLQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0lBQ0EsS0FBS0MsYUFBTDtFQUNELENBSlEsQ0FNVDs7O0VBQ0FBLGFBQWEsR0FBSTtJQUNmQyxXQUFXLENBQUMsS0FBS0MsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBRCxFQUFpQyxJQUFqQyxDQUFYLENBRGUsQ0FFZjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNEOztFQUVERCxjQUFjLEdBQUc7SUFDZixJQUFJRSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZWCw0REFBWixDQUFYO0lBQ0EsSUFBSWMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQWQ7SUFDQSxJQUFJQyxVQUFVLEdBQUdQLElBQUksQ0FBQ0csT0FBRCxDQUFyQjtJQUNBLElBQUlLLFdBQVcsR0FBRyxJQUFJbkIsa0RBQUosQ0FBYSxFQUFiLEVBQWlCa0IsVUFBakIsQ0FBbEI7SUFDQSxLQUFLWixZQUFMLENBQWtCYyxJQUFsQixDQUF1QkQsV0FBdkI7RUFDRDs7RUFFREUsSUFBSSxDQUFDQyxHQUFELEVBQU07SUFDUkEsR0FBRyxDQUFDQyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQnRCLEtBQXBCLEVBQTJCQyxLQUEzQjs7SUFDQSxLQUFJLElBQUlzQixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsS0FBS2xCLFlBQUwsQ0FBa0JtQixNQUFyQyxFQUE2Q0QsQ0FBQyxFQUE5QyxFQUFrRDtNQUNoRCxLQUFLbEIsWUFBTCxDQUFrQmtCLENBQWxCLEVBQXFCSCxJQUFyQixDQUEwQkMsR0FBMUI7SUFDRDtFQUNGOztFQUVESSxXQUFXLEdBQUc7SUFDWixLQUFLLElBQUlGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2xCLFlBQUwsQ0FBa0JtQixNQUF0QyxFQUE4Q0QsQ0FBQyxFQUEvQyxFQUFtRDtNQUNqRCxLQUFLbEIsWUFBTCxDQUFrQmtCLENBQWxCLEVBQXFCRyxJQUFyQjtJQUNEO0VBQ0Y7O0FBckNROztBQXdDWCwrREFBZXZCLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub291dHNpZGVzbmFja3MvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb2RJdGVtIGZyb20gXCIuL2Zvb2RfaXRlbVwiO1xuXG5jb25zdCBESU1fWCA9IDgwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuY29uc3QgTlVNX0ZPT0RfSVRFTVMgPSAxMDtcblxuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmFsbEZvb2RJdGVtcyA9IFtdO1xuICAgIHRoaXMuZmlsbEZvb2RJdGVtcygpO1xuICB9XG5cbiAgLy8gVHJ5IHNldHRpbmcgaW50ZXJ2YWwgZm9yIGNyZWF0aW5nIGZvb2QgaXRlbXNcbiAgZmlsbEZvb2RJdGVtcyAoKSB7XG4gICAgc2V0SW50ZXJ2YWwodGhpcy5jcmVhdGVGb29kSXRlbS5iaW5kKHRoaXMpLCAyMDAwKTtcbiAgICAvLyBzZXRUaW1lb3V0KHRoaXMuY3JlYXRlRm9vZEl0ZW0uYmluZCh0aGlzKSwgMjAwKTtcbiAgICAvLyB0aGlzLmFsbEZvb2RJdGVtcy5wdXNoKHRoaXMuY3JlYXRlRm9vZEl0ZW0oKSk7XG4gICAgLy8gc2V0VGltZW91dCh0aGlzLmNyZWF0ZUZvb2RJdGVtLmJpbmQodGhpcyksIDIwMDApO1xuICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBOVU1fRk9PRF9JVEVNUzsgaSsrKSB7XG4gICAgLy8gICBzZXRUaW1lb3V0KHRoaXMuY3JlYXRlRm9vZEl0ZW0uYmluZCh0aGlzKSwgMjAwMCk7XG4gICAgLy8gfVxuICAgIC8vIGFsbEZvb2RJdGVtcy5wdXNoKG5ld0Zvb2RJdGVtKVxuICB9XG5cbiAgY3JlYXRlRm9vZEl0ZW0oKSB7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhGb29kSXRlbS5GT09ESVRFTVMpO1xuICAgIGxldCByYW5kUG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgbGV0IGNvbG9yVmFsdWUgPSBrZXlzW3JhbmRQb3NdO1xuICAgIGxldCBuZXdGb29kSXRlbSA9IG5ldyBGb29kSXRlbSgxMCwgY29sb3JWYWx1ZSk7XG4gICAgdGhpcy5hbGxGb29kSXRlbXMucHVzaChuZXdGb29kSXRlbSk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxGb29kSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYWxsRm9vZEl0ZW1zW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gIH1cblxuICBtb3ZlT2JqZWN0cygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsRm9vZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmFsbEZvb2RJdGVtc1tpXS5tb3ZlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiXSwibmFtZXMiOlsiRm9vZEl0ZW0iLCJESU1fWCIsIkRJTV9ZIiwiTlVNX0ZPT0RfSVRFTVMiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJhbGxGb29kSXRlbXMiLCJmaWxsRm9vZEl0ZW1zIiwic2V0SW50ZXJ2YWwiLCJjcmVhdGVGb29kSXRlbSIsImJpbmQiLCJrZXlzIiwiT2JqZWN0IiwiRk9PRElURU1TIiwicmFuZFBvcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbG9yVmFsdWUiLCJuZXdGb29kSXRlbSIsInB1c2giLCJkcmF3IiwiY3R4IiwiY2xlYXJSZWN0IiwiaSIsImxlbmd0aCIsIm1vdmVPYmplY3RzIiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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