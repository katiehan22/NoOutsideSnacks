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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_food_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/food_item */ \"./src/scripts/food_item.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/moving_object */ \"./src/scripts/moving_object.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const gameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n  gameView.start(); // const foodItem = new FoodItem(10, \"slushee\");\n  // foodItem.moveAcross(ctx);\n  // const mo = new MovingObject([0,100], 100)\n  // mo.draw(ctx);\n  // mo.move();\n  // mo.draw(ctx);\n  // const food_item = new FoodItem(10, \"nachos\");\n  // food_item.draw(ctx);\n  // food_item.move();\n  // food_item.draw(ctx);\n  // const game = new Game();\n  // game.fillFoodItems();\n  // console.log(game.allFoodItems);\n  // game.draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBSSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBRUEsTUFBTUMsUUFBUSxHQUFHLElBQUlSLDBEQUFKLENBQWFNLEdBQWIsQ0FBakI7RUFDQUUsUUFBUSxDQUFDQyxLQUFULEdBTGtELENBTWxEO0VBQ0E7RUFFQTtFQUVBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7QUFDRCxDQXhCRCIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3V0c2lkZXNuYWNrcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb29kSXRlbSBmcm9tICcuL3NjcmlwdHMvZm9vZF9pdGVtJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCdcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGN0eCk7XG4gIGdhbWVWaWV3LnN0YXJ0KCk7XG4gIC8vIGNvbnN0IGZvb2RJdGVtID0gbmV3IEZvb2RJdGVtKDEwLCBcInNsdXNoZWVcIik7XG4gIC8vIGZvb2RJdGVtLm1vdmVBY3Jvc3MoY3R4KTtcblxuICAvLyBjb25zdCBtbyA9IG5ldyBNb3ZpbmdPYmplY3QoWzAsMTAwXSwgMTAwKVxuXG4gIC8vIG1vLmRyYXcoY3R4KTtcbiAgLy8gbW8ubW92ZSgpO1xuICAvLyBtby5kcmF3KGN0eCk7XG5cbiAgLy8gY29uc3QgZm9vZF9pdGVtID0gbmV3IEZvb2RJdGVtKDEwLCBcIm5hY2hvc1wiKTtcbiAgLy8gZm9vZF9pdGVtLmRyYXcoY3R4KTtcbiAgLy8gZm9vZF9pdGVtLm1vdmUoKTtcbiAgLy8gZm9vZF9pdGVtLmRyYXcoY3R4KTtcblxuICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgLy8gZ2FtZS5maWxsRm9vZEl0ZW1zKCk7XG4gIC8vIGNvbnNvbGUubG9nKGdhbWUuYWxsRm9vZEl0ZW1zKTtcbiAgLy8gZ2FtZS5kcmF3KGN0eCk7XG59KSJdLCJuYW1lcyI6WyJGb29kSXRlbSIsIkdhbWUiLCJHYW1lVmlldyIsIk1vdmluZ09iamVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3Iiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/food_item.js":
/*!**********************************!*\
  !*** ./src/scripts/food_item.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\n\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst FOODITEMS = {\n  slushee: \"assets/emptycupblue3.png\",\n  hotdog: \"assets/hotdog.png\",\n  popcorn: \"assets/plainpopcorn.png\",\n  pretzel: \"assets/plainpretzel.png\"\n};\n\nclass FoodItem extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(vel, name) {\n    const img = new Image();\n    img.src = FOODITEMS[name];\n    super([0, 450], vel, img);\n    this.name = name;\n    this.topping = null;\n  }\n\n  move() {\n    this.pos = [this.pos[0] + this.vel, this.pos[1]];\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.img, this.pos[0], this.pos[1], 50, 50);\n  }\n\n  moveAcross(ctx) {\n    setInterval(this.draw.bind(this, ctx), 50);\n    setInterval(this.move.bind(this), 100);\n  }\n\n  static get FOODITEMS() {\n    return FOODITEMS;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mb29kX2l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLE1BQU1DLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEdBQWQ7QUFFQSxNQUFNQyxTQUFTLEdBQUc7RUFDaEJDLE9BQU8sRUFBRSwwQkFETztFQUVoQkMsTUFBTSxFQUFFLG1CQUZRO0VBR2hCQyxPQUFPLEVBQUUseUJBSE87RUFJaEJDLE9BQU8sRUFBRTtBQUpPLENBQWxCOztBQU9BLE1BQU1DLFFBQU4sU0FBdUJSLHNEQUF2QixDQUFvQztFQUNsQ1MsV0FBVyxDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBWTtJQUNyQixNQUFNQyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaO0lBQ0FELEdBQUcsQ0FBQ0UsR0FBSixHQUFVWCxTQUFTLENBQUNRLElBQUQsQ0FBbkI7SUFDQSxNQUFNLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBTixFQUFnQkQsR0FBaEIsRUFBcUJFLEdBQXJCO0lBQ0EsS0FBS0QsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0ksT0FBTCxHQUFlLElBQWY7RUFDRDs7RUFFREMsSUFBSSxHQUFHO0lBQ0wsS0FBS0MsR0FBTCxHQUFXLENBQUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLUCxHQUFwQixFQUF5QixLQUFLTyxHQUFMLENBQVMsQ0FBVCxDQUF6QixDQUFYO0VBQ0Q7O0VBRURDLElBQUksQ0FBQ0MsR0FBRCxFQUFNO0lBQ1JBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLEtBQUtSLEdBQW5CLEVBQXdCLEtBQUtLLEdBQUwsQ0FBUyxDQUFULENBQXhCLEVBQXFDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQXJDLEVBQWtELEVBQWxELEVBQXNELEVBQXREO0VBQ0Q7O0VBRURJLFVBQVUsQ0FBQ0YsR0FBRCxFQUFNO0lBQ2RHLFdBQVcsQ0FBQyxLQUFLSixJQUFMLENBQVVLLElBQVYsQ0FBZSxJQUFmLEVBQXFCSixHQUFyQixDQUFELEVBQTRCLEVBQTVCLENBQVg7SUFDQUcsV0FBVyxDQUFDLEtBQUtOLElBQUwsQ0FBVU8sSUFBVixDQUFlLElBQWYsQ0FBRCxFQUF1QixHQUF2QixDQUFYO0VBQ0Q7O0VBRW1CLFdBQVRwQixTQUFTLEdBQUc7SUFDckIsT0FBT0EsU0FBUDtFQUNEOztBQXhCaUM7O0FBMkJwQywrREFBZUssUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3V0c2lkZXNuYWNrcy8uL3NyYy9zY3JpcHRzL2Zvb2RfaXRlbS5qcz85YWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiXG5cbmNvbnN0IERJTV9YID0gODAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5cbmNvbnN0IEZPT0RJVEVNUyA9IHsgXG4gIHNsdXNoZWU6IFwiYXNzZXRzL2VtcHR5Y3VwYmx1ZTMucG5nXCIsXG4gIGhvdGRvZzogXCJhc3NldHMvaG90ZG9nLnBuZ1wiLFxuICBwb3Bjb3JuOiBcImFzc2V0cy9wbGFpbnBvcGNvcm4ucG5nXCIsXG4gIHByZXR6ZWw6IFwiYXNzZXRzL3BsYWlucHJldHplbC5wbmdcIlxufVxuXG5jbGFzcyBGb29kSXRlbSBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHZlbCwgbmFtZSkge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBGT09ESVRFTVNbbmFtZV07XG4gICAgc3VwZXIoWzAsIDQ1MF0sIHZlbCwgaW1nKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9wcGluZyA9IG51bGw7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWwsIHRoaXMucG9zWzFdXTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7ICBcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDUwLCA1MCk7XG4gIH1cblxuICBtb3ZlQWNyb3NzKGN0eCkge1xuICAgIHNldEludGVydmFsKHRoaXMuZHJhdy5iaW5kKHRoaXMsIGN0eCksIDUwKTtcbiAgICBzZXRJbnRlcnZhbCh0aGlzLm1vdmUuYmluZCh0aGlzKSwgMTAwKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRk9PRElURU1TKCkge1xuICAgIHJldHVybiBGT09ESVRFTVM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZEl0ZW0iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiRElNX1giLCJESU1fWSIsIkZPT0RJVEVNUyIsInNsdXNoZWUiLCJob3Rkb2ciLCJwb3Bjb3JuIiwicHJldHplbCIsIkZvb2RJdGVtIiwiY29uc3RydWN0b3IiLCJ2ZWwiLCJuYW1lIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0b3BwaW5nIiwibW92ZSIsInBvcyIsImRyYXciLCJjdHgiLCJkcmF3SW1hZ2UiLCJtb3ZlQWNyb3NzIiwic2V0SW50ZXJ2YWwiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/food_item.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _food_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food_item */ \"./src/scripts/food_item.js\");\n\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst NUM_FOOD_ITEMS = 10;\n\nclass Game {\n  constructor() {\n    this.allFoodItems = [];\n    this.fillFoodItems();\n  } // Try setting interval for creating food items\n  // Need to limit them\n\n\n  fillFoodItems() {\n    setInterval(this.createFoodItem.bind(this), 2000);\n  }\n\n  createFoodItem() {\n    let keys = Object.keys(_food_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FOODITEMS);\n    let randPos = Math.floor(Math.random() * 4);\n    let colorValue = keys[randPos];\n    let newFoodItem = new _food_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, colorValue);\n    this.allFoodItems.push(newFoodItem);\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n\n    for (let i = 0; i < this.allFoodItems.length; i++) {\n      this.allFoodItems[i].draw(ctx);\n    }\n  }\n\n  moveObjects() {\n    for (let i = 0; i < this.allFoodItems.length; i++) {\n      this.allFoodItems[i].move();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQSxNQUFNQyxLQUFLLEdBQUcsR0FBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCOztBQUdBLE1BQU1DLElBQU4sQ0FBVztFQUNUQyxXQUFXLEdBQUU7SUFDWCxLQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0lBQ0EsS0FBS0MsYUFBTDtFQUNELENBSlEsQ0FNVDtFQUNBOzs7RUFDQUEsYUFBYSxHQUFJO0lBQ2ZDLFdBQVcsQ0FBQyxLQUFLQyxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUFELEVBQWlDLElBQWpDLENBQVg7RUFDRDs7RUFFREQsY0FBYyxHQUFHO0lBQ2YsSUFBSUUsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWVgsNERBQVosQ0FBWDtJQUNBLElBQUljLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUFkO0lBQ0EsSUFBSUMsVUFBVSxHQUFHUCxJQUFJLENBQUNHLE9BQUQsQ0FBckI7SUFDQSxJQUFJSyxXQUFXLEdBQUcsSUFBSW5CLGtEQUFKLENBQWEsRUFBYixFQUFpQmtCLFVBQWpCLENBQWxCO0lBQ0EsS0FBS1osWUFBTCxDQUFrQmMsSUFBbEIsQ0FBdUJELFdBQXZCO0VBQ0Q7O0VBRURFLElBQUksQ0FBQ0MsR0FBRCxFQUFNO0lBQ1JBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0J0QixLQUFwQixFQUEyQkMsS0FBM0I7O0lBQ0EsS0FBSSxJQUFJc0IsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLEtBQUtsQixZQUFMLENBQWtCbUIsTUFBckMsRUFBNkNELENBQUMsRUFBOUMsRUFBa0Q7TUFDaEQsS0FBS2xCLFlBQUwsQ0FBa0JrQixDQUFsQixFQUFxQkgsSUFBckIsQ0FBMEJDLEdBQTFCO0lBQ0Q7RUFDRjs7RUFFREksV0FBVyxHQUFHO0lBQ1osS0FBSyxJQUFJRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtsQixZQUFMLENBQWtCbUIsTUFBdEMsRUFBOENELENBQUMsRUFBL0MsRUFBbUQ7TUFDakQsS0FBS2xCLFlBQUwsQ0FBa0JrQixDQUFsQixFQUFxQkcsSUFBckI7SUFDRDtFQUNGOztBQS9CUTs7QUFrQ1gsK0RBQWV2QixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9vdXRzaWRlc25hY2tzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb29kSXRlbSBmcm9tIFwiLi9mb29kX2l0ZW1cIjtcblxuY29uc3QgRElNX1ggPSA4MDA7XG5jb25zdCBESU1fWSA9IDYwMDtcbmNvbnN0IE5VTV9GT09EX0lURU1TID0gMTA7XG5cblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5hbGxGb29kSXRlbXMgPSBbXTtcbiAgICB0aGlzLmZpbGxGb29kSXRlbXMoKTtcbiAgfVxuXG4gIC8vIFRyeSBzZXR0aW5nIGludGVydmFsIGZvciBjcmVhdGluZyBmb29kIGl0ZW1zXG4gIC8vIE5lZWQgdG8gbGltaXQgdGhlbVxuICBmaWxsRm9vZEl0ZW1zICgpIHtcbiAgICBzZXRJbnRlcnZhbCh0aGlzLmNyZWF0ZUZvb2RJdGVtLmJpbmQodGhpcyksIDIwMDApO1xuICB9XG5cbiAgY3JlYXRlRm9vZEl0ZW0oKSB7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhGb29kSXRlbS5GT09ESVRFTVMpO1xuICAgIGxldCByYW5kUG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgbGV0IGNvbG9yVmFsdWUgPSBrZXlzW3JhbmRQb3NdO1xuICAgIGxldCBuZXdGb29kSXRlbSA9IG5ldyBGb29kSXRlbSgxMCwgY29sb3JWYWx1ZSk7XG4gICAgdGhpcy5hbGxGb29kSXRlbXMucHVzaChuZXdGb29kSXRlbSk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxGb29kSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYWxsRm9vZEl0ZW1zW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gIH1cblxuICBtb3ZlT2JqZWN0cygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsRm9vZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmFsbEZvb2RJdGVtc1tpXS5tb3ZlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiXSwibmFtZXMiOlsiRm9vZEl0ZW0iLCJESU1fWCIsIkRJTV9ZIiwiTlVNX0ZPT0RfSVRFTVMiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJhbGxGb29kSXRlbXMiLCJmaWxsRm9vZEl0ZW1zIiwic2V0SW50ZXJ2YWwiLCJjcmVhdGVGb29kSXRlbSIsImJpbmQiLCJrZXlzIiwiT2JqZWN0IiwiRk9PRElURU1TIiwicmFuZFBvcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbG9yVmFsdWUiLCJuZXdGb29kSXRlbSIsInB1c2giLCJkcmF3IiwiY3R4IiwiY2xlYXJSZWN0IiwiaSIsImxlbmd0aCIsIm1vdmVPYmplY3RzIiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(pos, vel, img) {\n    this.pos = pos;\n    this.vel = vel;\n    this.img = img; // this.game = object.game;\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.img, this.pos[0], this.pos[1], 50, 50);\n  }\n\n  move() {\n    this.pos = [this.pos[0] + this.vel, this.pos[1]];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFOLENBQW1CO0VBQ2pCQyxXQUFXLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxHQUFYLEVBQWdCO0lBQ3pCLEtBQUtGLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLEdBQUwsR0FBV0EsR0FBWCxDQUh5QixDQUl6QjtFQUNEOztFQUVEQyxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUNSQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxLQUFLSCxHQUFuQixFQUF3QixLQUFLRixHQUFMLENBQVMsQ0FBVCxDQUF4QixFQUFxQyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUFyQyxFQUFrRCxFQUFsRCxFQUFzRCxFQUF0RDtFQUNEOztFQUVETSxJQUFJLEdBQUc7SUFDTCxLQUFLTixHQUFMLEdBQVcsQ0FBQyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFjLEtBQUtDLEdBQXBCLEVBQXlCLEtBQUtELEdBQUwsQ0FBUyxDQUFULENBQXpCLENBQVg7RUFDRDs7QUFkZ0I7O0FBaUJuQiwrREFBZUYsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3V0c2lkZXNuYWNrcy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanM/YzIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwb3MsIHZlbCwgaW1nKSB7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy52ZWwgPSB2ZWw7XG4gICAgdGhpcy5pbWcgPSBpbWc7XG4gICAgLy8gdGhpcy5nYW1lID0gb2JqZWN0LmdhbWU7XG4gIH1cblxuICBkcmF3KGN0eCkgeyAgXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA1MCwgNTApO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHRoaXMudmVsLCB0aGlzLnBvc1sxXV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsImNvbnN0cnVjdG9yIiwicG9zIiwidmVsIiwiaW1nIiwiZHJhdyIsImN0eCIsImRyYXdJbWFnZSIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

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