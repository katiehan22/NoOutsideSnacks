/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_food_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/food_item */ \"./src/scripts/food_item.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/moving_object */ \"./src/scripts/moving_object.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  let el = document.querySelector(\".canvas-div\");\n  const gameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, el);\n  gameView.start(); // const foodItem = new FoodItem(10, \"slushee\");\n  // foodItem.moveAcross(ctx);\n  // const mo = new MovingObject([0,100], 100)\n  // mo.draw(ctx);\n  // mo.move();\n  // mo.draw(ctx);\n  // const food_item = new FoodItem(10, \"nachos\");\n  // food_item.draw(ctx);\n  // food_item.move();\n  // food_item.draw(ctx);\n  // const game = new Game();\n  // game.fillFoodItems();\n  // console.log(game.allFoodItems);\n  // game.draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBSSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBRUEsSUFBSUMsRUFBRSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBVDtFQUNBLE1BQU1DLFFBQVEsR0FBRyxJQUFJViwwREFBSixDQUFhTSxHQUFiLEVBQWtCRSxFQUFsQixDQUFqQjtFQUNBRSxRQUFRLENBQUNDLEtBQVQsR0FOa0QsQ0FPbEQ7RUFDQTtFQUVBO0VBRUE7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtBQUNELENBekJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9vdXRzaWRlc25hY2tzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb2RJdGVtIGZyb20gJy4vc2NyaXB0cy9mb29kX2l0ZW0nO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgbGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW52YXMtZGl2XCIpO1xuICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjdHgsIGVsKTtcbiAgZ2FtZVZpZXcuc3RhcnQoKTtcbiAgLy8gY29uc3QgZm9vZEl0ZW0gPSBuZXcgRm9vZEl0ZW0oMTAsIFwic2x1c2hlZVwiKTtcbiAgLy8gZm9vZEl0ZW0ubW92ZUFjcm9zcyhjdHgpO1xuXG4gIC8vIGNvbnN0IG1vID0gbmV3IE1vdmluZ09iamVjdChbMCwxMDBdLCAxMDApXG5cbiAgLy8gbW8uZHJhdyhjdHgpO1xuICAvLyBtby5tb3ZlKCk7XG4gIC8vIG1vLmRyYXcoY3R4KTtcblxuICAvLyBjb25zdCBmb29kX2l0ZW0gPSBuZXcgRm9vZEl0ZW0oMTAsIFwibmFjaG9zXCIpO1xuICAvLyBmb29kX2l0ZW0uZHJhdyhjdHgpO1xuICAvLyBmb29kX2l0ZW0ubW92ZSgpO1xuICAvLyBmb29kX2l0ZW0uZHJhdyhjdHgpO1xuXG4gIC8vIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAvLyBnYW1lLmZpbGxGb29kSXRlbXMoKTtcbiAgLy8gY29uc29sZS5sb2coZ2FtZS5hbGxGb29kSXRlbXMpO1xuICAvLyBnYW1lLmRyYXcoY3R4KTtcbn0pIl0sIm5hbWVzIjpbIkZvb2RJdGVtIiwiR2FtZSIsIkdhbWVWaWV3IiwiTW92aW5nT2JqZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiZ2FtZVZpZXciLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/dispenser.js":
/*!**********************************!*\
  !*** ./src/scripts/dispenser.js ***!
  \**********************************/
/***/ (function() {

eval("// test draw dispenser\n// ctx.drawImage(this.disp, 50, 200);\nconst DISPENSERS = {\n  slushee: \"assets/images/dispenserslushee.png\",\n  hotdog: \"assets/images/dispensermustard.png\",\n  popcorn: \"assets/images/dispenserbutter.png\",\n  pretzel: \"assets/images/dispensersalt.png\"\n};\n\nclass Dispenser {\n  constructor(pos, name) {\n    this.pos = pos;\n    this.name = name;\n    const img = new Image();\n    img.src = DISPENSERS[name];\n    this.img = img;\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.img, this.pos[0], this.pos[1], 125, 200);\n  }\n\n  static get DISPENSERS() {\n    return DISPENSERS;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kaXNwZW5zZXIuanMuanMiLCJuYW1lcyI6WyJESVNQRU5TRVJTIiwic2x1c2hlZSIsImhvdGRvZyIsInBvcGNvcm4iLCJwcmV0emVsIiwiRGlzcGVuc2VyIiwiY29uc3RydWN0b3IiLCJwb3MiLCJuYW1lIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJkcmF3IiwiY3R4IiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub291dHNpZGVzbmFja3MvLi9zcmMvc2NyaXB0cy9kaXNwZW5zZXIuanM/NDJkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0ZXN0IGRyYXcgZGlzcGVuc2VyXG4vLyBjdHguZHJhd0ltYWdlKHRoaXMuZGlzcCwgNTAsIDIwMCk7XG5cbmNvbnN0IERJU1BFTlNFUlMgPSB7XG4gIHNsdXNoZWU6IFwiYXNzZXRzL2ltYWdlcy9kaXNwZW5zZXJzbHVzaGVlLnBuZ1wiLCBcbiAgaG90ZG9nOiBcImFzc2V0cy9pbWFnZXMvZGlzcGVuc2VybXVzdGFyZC5wbmdcIixcbiAgcG9wY29ybjogXCJhc3NldHMvaW1hZ2VzL2Rpc3BlbnNlcmJ1dHRlci5wbmdcIixcbiAgcHJldHplbDogXCJhc3NldHMvaW1hZ2VzL2Rpc3BlbnNlcnNhbHQucG5nXCJcbn1cblxuY2xhc3MgRGlzcGVuc2VyIHtcbiAgY29uc3RydWN0b3IocG9zLCBuYW1lKSB7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gRElTUEVOU0VSU1tuYW1lXTtcbiAgICB0aGlzLmltZyA9IGltZztcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCAxMjUsIDIwMCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IERJU1BFTlNFUlMoKSB7XG4gICAgcmV0dXJuIERJU1BFTlNFUlM7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUc7RUFDakJDLE9BQU8sRUFBRSxvQ0FEUTtFQUVqQkMsTUFBTSxFQUFFLG9DQUZTO0VBR2pCQyxPQUFPLEVBQUUsbUNBSFE7RUFJakJDLE9BQU8sRUFBRTtBQUpRLENBQW5COztBQU9BLE1BQU1DLFNBQU4sQ0FBZ0I7RUFDZEMsV0FBVyxDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBWTtJQUNyQixLQUFLRCxHQUFMLEdBQVdBLEdBQVg7SUFDQSxLQUFLQyxJQUFMLEdBQVlBLElBQVo7SUFDQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaO0lBQ0FELEdBQUcsQ0FBQ0UsR0FBSixHQUFVWCxVQUFVLENBQUNRLElBQUQsQ0FBcEI7SUFDQSxLQUFLQyxHQUFMLEdBQVdBLEdBQVg7RUFDRDs7RUFFREcsSUFBSSxDQUFDQyxHQUFELEVBQU07SUFDUkEsR0FBRyxDQUFDQyxTQUFKLENBQWMsS0FBS0wsR0FBbkIsRUFBd0IsS0FBS0YsR0FBTCxDQUFTLENBQVQsQ0FBeEIsRUFBcUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBckMsRUFBa0QsR0FBbEQsRUFBdUQsR0FBdkQ7RUFDRDs7RUFFb0IsV0FBVlAsVUFBVSxHQUFHO0lBQ3RCLE9BQU9BLFVBQVA7RUFDRDs7QUFmYSJ9\n//# sourceURL=webpack-internal:///./src/scripts/dispenser.js\n");

/***/ }),

/***/ "./src/scripts/food_item.js":
/*!**********************************!*\
  !*** ./src/scripts/food_item.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\n\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst FOODITEMS = {\n  slushee: \"assets/images/cupempty.png\",\n  hotdog: \"assets/images/hotdog.png\",\n  popcorn: \"assets/images/popcornplain.png\",\n  pretzel: \"assets/images/pretzelplain.png\"\n}; // const FOODITEMS = { // complete food items\n//   slushee: \"assets/images/cupfilled.png\",\n//   hotdog: \"assets/images/hotdogmustard.png\",\n//   popcorn: \"assets/images/popcornbutter.png\",\n//   pretzel: \"assets/images/pretzelsalt.png\"\n// }\n\nclass FoodItem extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(vel, name) {\n    const img = new Image();\n    img.src = FOODITEMS[name];\n    super([0, 450], vel, img);\n    this.name = name;\n    this.topping = null;\n  }\n\n  move() {\n    this.pos = [this.pos[0] + this.vel, this.pos[1]];\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.img, this.pos[0], this.pos[1], 75, 75);\n  } // moveAcross(ctx) {\n  //   setInterval(this.draw.bind(this, ctx), 50);\n  //   setInterval(this.move.bind(this), 100);\n  // }\n\n\n  static get FOODITEMS() {\n    return FOODITEMS;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mb29kX2l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLE1BQU1DLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEdBQWQ7QUFFQSxNQUFNQyxTQUFTLEdBQUc7RUFDaEJDLE9BQU8sRUFBRSw0QkFETztFQUVoQkMsTUFBTSxFQUFFLDBCQUZRO0VBR2hCQyxPQUFPLEVBQUUsZ0NBSE87RUFJaEJDLE9BQU8sRUFBRTtBQUpPLENBQWxCLEVBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFFBQU4sU0FBdUJSLHNEQUF2QixDQUFvQztFQUNsQ1MsV0FBVyxDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBWTtJQUNyQixNQUFNQyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaO0lBQ0FELEdBQUcsQ0FBQ0UsR0FBSixHQUFVWCxTQUFTLENBQUNRLElBQUQsQ0FBbkI7SUFDQSxNQUFNLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBTixFQUFnQkQsR0FBaEIsRUFBcUJFLEdBQXJCO0lBQ0EsS0FBS0QsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0ksT0FBTCxHQUFlLElBQWY7RUFDRDs7RUFFREMsSUFBSSxHQUFHO0lBQ0wsS0FBS0MsR0FBTCxHQUFXLENBQUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLUCxHQUFwQixFQUF5QixLQUFLTyxHQUFMLENBQVMsQ0FBVCxDQUF6QixDQUFYO0VBQ0Q7O0VBRURDLElBQUksQ0FBQ0MsR0FBRCxFQUFNO0lBQ1JBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLEtBQUtSLEdBQW5CLEVBQXdCLEtBQUtLLEdBQUwsQ0FBUyxDQUFULENBQXhCLEVBQXFDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQXJDLEVBQWtELEVBQWxELEVBQXNELEVBQXREO0VBQ0QsQ0FmaUMsQ0FpQmxDO0VBQ0E7RUFDQTtFQUNBOzs7RUFFb0IsV0FBVGQsU0FBUyxHQUFHO0lBQ3JCLE9BQU9BLFNBQVA7RUFDRDs7QUF4QmlDOztBQTJCcEMsK0RBQWVLLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub291dHNpZGVzbmFja3MvLi9zcmMvc2NyaXB0cy9mb29kX2l0ZW0uanM/OWFkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIlxuXG5jb25zdCBESU1fWCA9IDgwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuXG5jb25zdCBGT09ESVRFTVMgPSB7IFxuICBzbHVzaGVlOiBcImFzc2V0cy9pbWFnZXMvY3VwZW1wdHkucG5nXCIsXG4gIGhvdGRvZzogXCJhc3NldHMvaW1hZ2VzL2hvdGRvZy5wbmdcIixcbiAgcG9wY29ybjogXCJhc3NldHMvaW1hZ2VzL3BvcGNvcm5wbGFpbi5wbmdcIixcbiAgcHJldHplbDogXCJhc3NldHMvaW1hZ2VzL3ByZXR6ZWxwbGFpbi5wbmdcIlxufVxuXG4vLyBjb25zdCBGT09ESVRFTVMgPSB7IC8vIGNvbXBsZXRlIGZvb2QgaXRlbXNcbi8vICAgc2x1c2hlZTogXCJhc3NldHMvaW1hZ2VzL2N1cGZpbGxlZC5wbmdcIixcbi8vICAgaG90ZG9nOiBcImFzc2V0cy9pbWFnZXMvaG90ZG9nbXVzdGFyZC5wbmdcIixcbi8vICAgcG9wY29ybjogXCJhc3NldHMvaW1hZ2VzL3BvcGNvcm5idXR0ZXIucG5nXCIsXG4vLyAgIHByZXR6ZWw6IFwiYXNzZXRzL2ltYWdlcy9wcmV0emVsc2FsdC5wbmdcIlxuLy8gfVxuXG5jbGFzcyBGb29kSXRlbSBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHZlbCwgbmFtZSkge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBGT09ESVRFTVNbbmFtZV07XG4gICAgc3VwZXIoWzAsIDQ1MF0sIHZlbCwgaW1nKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9wcGluZyA9IG51bGw7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWwsIHRoaXMucG9zWzFdXTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7ICBcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDc1LCA3NSk7XG4gIH1cblxuICAvLyBtb3ZlQWNyb3NzKGN0eCkge1xuICAvLyAgIHNldEludGVydmFsKHRoaXMuZHJhdy5iaW5kKHRoaXMsIGN0eCksIDUwKTtcbiAgLy8gICBzZXRJbnRlcnZhbCh0aGlzLm1vdmUuYmluZCh0aGlzKSwgMTAwKTtcbiAgLy8gfVxuXG4gIHN0YXRpYyBnZXQgRk9PRElURU1TKCkge1xuICAgIHJldHVybiBGT09ESVRFTVM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZEl0ZW0iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiRElNX1giLCJESU1fWSIsIkZPT0RJVEVNUyIsInNsdXNoZWUiLCJob3Rkb2ciLCJwb3Bjb3JuIiwicHJldHplbCIsIkZvb2RJdGVtIiwiY29uc3RydWN0b3IiLCJ2ZWwiLCJuYW1lIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ0b3BwaW5nIiwibW92ZSIsInBvcyIsImRyYXciLCJjdHgiLCJkcmF3SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/food_item.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _food_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food_item */ \"./src/scripts/food_item.js\");\n/* harmony import */ var _dispenser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispenser */ \"./src/scripts/dispenser.js\");\n/* harmony import */ var _dispenser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dispenser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst NUM_FOOD_ITEMS = 10;\n\nclass Game {\n  constructor(el) {\n    this.el = el; // el is the document query selecter for .canvas-div\n\n    this.background = new Image();\n    this.background.src = \"assets/images/concessions4.png\";\n    this.createDispensers();\n    this.allFoodItems = [];\n    this.fillFoodItems();\n  } // Try setting interval for creating food items\n  // Need to limit them\n\n\n  fillFoodItems() {\n    setInterval(this.createFoodItem.bind(this), 2000);\n  }\n\n  createFoodItem() {\n    let keys = Object.keys(_food_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FOODITEMS);\n    let randPos = Math.floor(Math.random() * 4);\n    let colorValue = keys[randPos];\n    let newFoodItem = new _food_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, colorValue);\n    this.allFoodItems.push(newFoodItem);\n  }\n\n  createDispensers() {\n    const ul = document.createElement(\"ul\");\n    ul.classList.add(\"dispenser-machines\");\n    this.el.appendChild(ul);\n    let dispenserSlushee = document.createElement(\"li\");\n    dispenserSlushee.classList.add(\"slushee\");\n    let imgSlushee = document.createElement(\"img\");\n    imgSlushee.src = \"assets/images/dispenserslushee.png\";\n    dispenserSlushee.appendChild(imgSlushee);\n    let dispenserHotdog = document.createElement(\"li\");\n    dispenserHotdog.classList.add(\"hotdog\");\n    let imgHotdog = document.createElement(\"img\");\n    imgHotdog.src = \"assets/images/dispensermustard.png\";\n    dispenserHotdog.appendChild(imgHotdog);\n    let dispenserPopcorn = document.createElement(\"li\");\n    dispenserPopcorn.classList.add(\"popcorn\");\n    let imgPopcorn = document.createElement(\"img\");\n    imgPopcorn.src = \"assets/images/dispenserbutter.png\";\n    dispenserPopcorn.appendChild(imgPopcorn);\n    let dispenserPretzel = document.createElement(\"li\");\n    dispenserPretzel.classList.add(\"pretzel\");\n    let imgPretzel = document.createElement(\"img\");\n    imgPretzel.src = \"assets/images/dispensersalt.png\";\n    dispenserPretzel.appendChild(imgPretzel);\n    ul.appendChild(dispenserSlushee);\n    ul.appendChild(dispenserHotdog);\n    ul.appendChild(dispenserPopcorn);\n    ul.appendChild(dispenserPretzel);\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    ctx.drawImage(this.background, 0, 0); // draw background\n\n    for (let i = 0; i < this.allFoodItems.length; i++) {\n      this.allFoodItems[i].draw(ctx);\n    }\n  }\n\n  moveObjects() {\n    for (let i = 0; i < this.allFoodItems.length; i++) {\n      this.allFoodItems[i].move();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUUsS0FBSyxHQUFHLEdBQWQ7QUFDQSxNQUFNQyxLQUFLLEdBQUcsR0FBZDtBQUNBLE1BQU1DLGNBQWMsR0FBRyxFQUF2Qjs7QUFHQSxNQUFNQyxJQUFOLENBQVc7RUFDVEMsV0FBVyxDQUFDQyxFQUFELEVBQUk7SUFDYixLQUFLQSxFQUFMLEdBQVVBLEVBQVYsQ0FEYSxDQUNDOztJQUNkLEtBQUtDLFVBQUwsR0FBa0IsSUFBSUMsS0FBSixFQUFsQjtJQUNBLEtBQUtELFVBQUwsQ0FBZ0JFLEdBQWhCLEdBQXNCLGdDQUF0QjtJQUNBLEtBQUtDLGdCQUFMO0lBQ0EsS0FBS0MsWUFBTCxHQUFvQixFQUFwQjtJQUNBLEtBQUtDLGFBQUw7RUFDRCxDQVJRLENBVVQ7RUFDQTs7O0VBQ0FBLGFBQWEsR0FBSTtJQUNmQyxXQUFXLENBQUMsS0FBS0MsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBRCxFQUFpQyxJQUFqQyxDQUFYO0VBQ0Q7O0VBRURELGNBQWMsR0FBRztJQUNmLElBQUlFLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlqQiw0REFBWixDQUFYO0lBQ0EsSUFBSW9CLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUFkO0lBQ0EsSUFBSUMsVUFBVSxHQUFHUCxJQUFJLENBQUNHLE9BQUQsQ0FBckI7SUFDQSxJQUFJSyxXQUFXLEdBQUcsSUFBSXpCLGtEQUFKLENBQWEsRUFBYixFQUFpQndCLFVBQWpCLENBQWxCO0lBQ0EsS0FBS1osWUFBTCxDQUFrQmMsSUFBbEIsQ0FBdUJELFdBQXZCO0VBQ0Q7O0VBRURkLGdCQUFnQixHQUFHO0lBQ2pCLE1BQU1nQixFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFYO0lBQ0FGLEVBQUUsQ0FBQ0csU0FBSCxDQUFhQyxHQUFiLENBQWlCLG9CQUFqQjtJQUNBLEtBQUt4QixFQUFMLENBQVF5QixXQUFSLENBQW9CTCxFQUFwQjtJQUVBLElBQUlNLGdCQUFnQixHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdkI7SUFDQUksZ0JBQWdCLENBQUNILFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixTQUEvQjtJQUNBLElBQUlHLFVBQVUsR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWpCO0lBQ0FLLFVBQVUsQ0FBQ3hCLEdBQVgsR0FBaUIsb0NBQWpCO0lBQ0F1QixnQkFBZ0IsQ0FBQ0QsV0FBakIsQ0FBNkJFLFVBQTdCO0lBRUEsSUFBSUMsZUFBZSxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdEI7SUFDQU0sZUFBZSxDQUFDTCxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsUUFBOUI7SUFDQSxJQUFJSyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtJQUNBTyxTQUFTLENBQUMxQixHQUFWLEdBQWdCLG9DQUFoQjtJQUNBeUIsZUFBZSxDQUFDSCxXQUFoQixDQUE0QkksU0FBNUI7SUFFQSxJQUFJQyxnQkFBZ0IsR0FBR1QsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQXZCO0lBQ0FRLGdCQUFnQixDQUFDUCxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsU0FBL0I7SUFDQSxJQUFJTyxVQUFVLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtJQUNBUyxVQUFVLENBQUM1QixHQUFYLEdBQWlCLG1DQUFqQjtJQUNBMkIsZ0JBQWdCLENBQUNMLFdBQWpCLENBQTZCTSxVQUE3QjtJQUVBLElBQUlDLGdCQUFnQixHQUFHWCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdkI7SUFDQVUsZ0JBQWdCLENBQUNULFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixTQUEvQjtJQUNBLElBQUlTLFVBQVUsR0FBR1osUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWpCO0lBQ0FXLFVBQVUsQ0FBQzlCLEdBQVgsR0FBaUIsaUNBQWpCO0lBQ0E2QixnQkFBZ0IsQ0FBQ1AsV0FBakIsQ0FBNkJRLFVBQTdCO0lBRUFiLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlQyxnQkFBZjtJQUNBTixFQUFFLENBQUNLLFdBQUgsQ0FBZUcsZUFBZjtJQUNBUixFQUFFLENBQUNLLFdBQUgsQ0FBZUssZ0JBQWY7SUFDQVYsRUFBRSxDQUFDSyxXQUFILENBQWVPLGdCQUFmO0VBQ0Q7O0VBRURFLElBQUksQ0FBQ0MsR0FBRCxFQUFNO0lBQ1JBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0J6QyxLQUFwQixFQUEyQkMsS0FBM0I7SUFDQXVDLEdBQUcsQ0FBQ0UsU0FBSixDQUFjLEtBQUtwQyxVQUFuQixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUZRLENBRStCOztJQUN2QyxLQUFJLElBQUlxQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsS0FBS2pDLFlBQUwsQ0FBa0JrQyxNQUFyQyxFQUE2Q0QsQ0FBQyxFQUE5QyxFQUFrRDtNQUNoRCxLQUFLakMsWUFBTCxDQUFrQmlDLENBQWxCLEVBQXFCSixJQUFyQixDQUEwQkMsR0FBMUI7SUFDRDtFQUNGOztFQUVESyxXQUFXLEdBQUc7SUFDWixLQUFLLElBQUlGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2pDLFlBQUwsQ0FBa0JrQyxNQUF0QyxFQUE4Q0QsQ0FBQyxFQUEvQyxFQUFtRDtNQUNqRCxLQUFLakMsWUFBTCxDQUFrQmlDLENBQWxCLEVBQXFCRyxJQUFyQjtJQUNEO0VBQ0Y7O0FBdkVROztBQTBFWCwrREFBZTNDLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub291dHNpZGVzbmFja3MvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb2RJdGVtIGZyb20gXCIuL2Zvb2RfaXRlbVwiO1xuaW1wb3J0IERpc3BlbnNlciBmcm9tIFwiLi9kaXNwZW5zZXJcIjtcblxuY29uc3QgRElNX1ggPSA4MDA7XG5jb25zdCBESU1fWSA9IDYwMDtcbmNvbnN0IE5VTV9GT09EX0lURU1TID0gMTA7XG5cblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGVsKXtcbiAgICB0aGlzLmVsID0gZWw7IC8vIGVsIGlzIHRoZSBkb2N1bWVudCBxdWVyeSBzZWxlY3RlciBmb3IgLmNhbnZhcy1kaXZcbiAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCJhc3NldHMvaW1hZ2VzL2NvbmNlc3Npb25zNC5wbmdcIjtcbiAgICB0aGlzLmNyZWF0ZURpc3BlbnNlcnMoKTtcbiAgICB0aGlzLmFsbEZvb2RJdGVtcyA9IFtdO1xuICAgIHRoaXMuZmlsbEZvb2RJdGVtcygpO1xuICB9XG5cbiAgLy8gVHJ5IHNldHRpbmcgaW50ZXJ2YWwgZm9yIGNyZWF0aW5nIGZvb2QgaXRlbXNcbiAgLy8gTmVlZCB0byBsaW1pdCB0aGVtXG4gIGZpbGxGb29kSXRlbXMgKCkge1xuICAgIHNldEludGVydmFsKHRoaXMuY3JlYXRlRm9vZEl0ZW0uYmluZCh0aGlzKSwgMjAwMCk7XG4gIH1cblxuICBjcmVhdGVGb29kSXRlbSgpIHtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKEZvb2RJdGVtLkZPT0RJVEVNUyk7XG4gICAgbGV0IHJhbmRQb3MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICBsZXQgY29sb3JWYWx1ZSA9IGtleXNbcmFuZFBvc107XG4gICAgbGV0IG5ld0Zvb2RJdGVtID0gbmV3IEZvb2RJdGVtKDEwLCBjb2xvclZhbHVlKTtcbiAgICB0aGlzLmFsbEZvb2RJdGVtcy5wdXNoKG5ld0Zvb2RJdGVtKTtcbiAgfVxuXG4gIGNyZWF0ZURpc3BlbnNlcnMoKSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuY2xhc3NMaXN0LmFkZChcImRpc3BlbnNlci1tYWNoaW5lc1wiKTtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHVsKTtcblxuICAgIGxldCBkaXNwZW5zZXJTbHVzaGVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGRpc3BlbnNlclNsdXNoZWUuY2xhc3NMaXN0LmFkZChcInNsdXNoZWVcIik7XG4gICAgbGV0IGltZ1NsdXNoZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZ1NsdXNoZWUuc3JjID0gXCJhc3NldHMvaW1hZ2VzL2Rpc3BlbnNlcnNsdXNoZWUucG5nXCI7XG4gICAgZGlzcGVuc2VyU2x1c2hlZS5hcHBlbmRDaGlsZChpbWdTbHVzaGVlKTtcblxuICAgIGxldCBkaXNwZW5zZXJIb3Rkb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZGlzcGVuc2VySG90ZG9nLmNsYXNzTGlzdC5hZGQoXCJob3Rkb2dcIik7XG4gICAgbGV0IGltZ0hvdGRvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nSG90ZG9nLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9kaXNwZW5zZXJtdXN0YXJkLnBuZ1wiO1xuICAgIGRpc3BlbnNlckhvdGRvZy5hcHBlbmRDaGlsZChpbWdIb3Rkb2cpO1xuXG4gICAgbGV0IGRpc3BlbnNlclBvcGNvcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZGlzcGVuc2VyUG9wY29ybi5jbGFzc0xpc3QuYWRkKFwicG9wY29yblwiKTtcbiAgICBsZXQgaW1nUG9wY29ybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nUG9wY29ybi5zcmMgPSBcImFzc2V0cy9pbWFnZXMvZGlzcGVuc2VyYnV0dGVyLnBuZ1wiO1xuICAgIGRpc3BlbnNlclBvcGNvcm4uYXBwZW5kQ2hpbGQoaW1nUG9wY29ybik7XG5cbiAgICBsZXQgZGlzcGVuc2VyUHJldHplbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBkaXNwZW5zZXJQcmV0emVsLmNsYXNzTGlzdC5hZGQoXCJwcmV0emVsXCIpO1xuICAgIGxldCBpbWdQcmV0emVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWdQcmV0emVsLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9kaXNwZW5zZXJzYWx0LnBuZ1wiO1xuICAgIGRpc3BlbnNlclByZXR6ZWwuYXBwZW5kQ2hpbGQoaW1nUHJldHplbCk7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChkaXNwZW5zZXJTbHVzaGVlKTtcbiAgICB1bC5hcHBlbmRDaGlsZChkaXNwZW5zZXJIb3Rkb2cpO1xuICAgIHVsLmFwcGVuZENoaWxkKGRpc3BlbnNlclBvcGNvcm4pO1xuICAgIHVsLmFwcGVuZENoaWxkKGRpc3BlbnNlclByZXR6ZWwpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmQsIDAsIDApOyAgLy8gZHJhdyBiYWNrZ3JvdW5kXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsRm9vZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmFsbEZvb2RJdGVtc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZU9iamVjdHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbEZvb2RJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5hbGxGb29kSXRlbXNbaV0ubW92ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lIl0sIm5hbWVzIjpbIkZvb2RJdGVtIiwiRGlzcGVuc2VyIiwiRElNX1giLCJESU1fWSIsIk5VTV9GT09EX0lURU1TIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiZWwiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJjcmVhdGVEaXNwZW5zZXJzIiwiYWxsRm9vZEl0ZW1zIiwiZmlsbEZvb2RJdGVtcyIsInNldEludGVydmFsIiwiY3JlYXRlRm9vZEl0ZW0iLCJiaW5kIiwia2V5cyIsIk9iamVjdCIsIkZPT0RJVEVNUyIsInJhbmRQb3MiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb2xvclZhbHVlIiwibmV3Rm9vZEl0ZW0iLCJwdXNoIiwidWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImRpc3BlbnNlclNsdXNoZWUiLCJpbWdTbHVzaGVlIiwiZGlzcGVuc2VySG90ZG9nIiwiaW1nSG90ZG9nIiwiZGlzcGVuc2VyUG9wY29ybiIsImltZ1BvcGNvcm4iLCJkaXNwZW5zZXJQcmV0emVsIiwiaW1nUHJldHplbCIsImRyYXciLCJjdHgiLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJpIiwibGVuZ3RoIiwibW92ZU9iamVjdHMiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\n\nclass GameView {\n  constructor(ctx, el) {\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el);\n    this.ctx = ctx;\n    this.el = el;\n  }\n\n  start() {\n    setInterval(this.game.draw.bind(this.game, this.ctx), 20);\n    setInterval(this.game.moveObjects.bind(this.game), 100);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQyxRQUFOLENBQWM7RUFDWkMsV0FBVyxDQUFDQyxHQUFELEVBQU1DLEVBQU4sRUFBVTtJQUNuQixLQUFLQyxJQUFMLEdBQVksSUFBSUwsNkNBQUosQ0FBU0ksRUFBVCxDQUFaO0lBQ0EsS0FBS0QsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0MsRUFBTCxHQUFVQSxFQUFWO0VBQ0Q7O0VBRURFLEtBQUssR0FBRTtJQUNMQyxXQUFXLENBQUMsS0FBS0YsSUFBTCxDQUFVRyxJQUFWLENBQWVDLElBQWYsQ0FBb0IsS0FBS0osSUFBekIsRUFBK0IsS0FBS0YsR0FBcEMsQ0FBRCxFQUEyQyxFQUEzQyxDQUFYO0lBQ0FJLFdBQVcsQ0FBQyxLQUFLRixJQUFMLENBQVVLLFdBQVYsQ0FBc0JELElBQXRCLENBQTJCLEtBQUtKLElBQWhDLENBQUQsRUFBd0MsR0FBeEMsQ0FBWDtFQUNEOztBQVZXOztBQWFkLCtEQUFlSixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9vdXRzaWRlc25hY2tzLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzPzgwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5jbGFzcyBHYW1lVmlld3tcbiAgY29uc3RydWN0b3IoY3R4LCBlbCkge1xuICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGVsKTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBzdGFydCgpe1xuICAgIHNldEludGVydmFsKHRoaXMuZ2FtZS5kcmF3LmJpbmQodGhpcy5nYW1lLCB0aGlzLmN0eCksIDIwKTtcbiAgICBzZXRJbnRlcnZhbCh0aGlzLmdhbWUubW92ZU9iamVjdHMuYmluZCh0aGlzLmdhbWUpLCAxMDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVWaWV3Il0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImNvbnN0cnVjdG9yIiwiY3R4IiwiZWwiLCJnYW1lIiwic3RhcnQiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJiaW5kIiwibW92ZU9iamVjdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(pos, vel, img) {\n    this.pos = pos;\n    this.vel = vel;\n    this.img = img; // this.game = object.game;\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.img, this.pos[0], this.pos[1], 75, 75);\n  }\n\n  move() {\n    this.pos = [this.pos[0] + this.vel, this.pos[1]];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFOLENBQW1CO0VBQ2pCQyxXQUFXLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxHQUFYLEVBQWdCO0lBQ3pCLEtBQUtGLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLEdBQUwsR0FBV0EsR0FBWCxDQUh5QixDQUl6QjtFQUNEOztFQUVEQyxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUNSQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxLQUFLSCxHQUFuQixFQUF3QixLQUFLRixHQUFMLENBQVMsQ0FBVCxDQUF4QixFQUFxQyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUFyQyxFQUFrRCxFQUFsRCxFQUFzRCxFQUF0RDtFQUNEOztFQUVETSxJQUFJLEdBQUc7SUFDTCxLQUFLTixHQUFMLEdBQVcsQ0FBQyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFjLEtBQUtDLEdBQXBCLEVBQXlCLEtBQUtELEdBQUwsQ0FBUyxDQUFULENBQXpCLENBQVg7RUFDRDs7QUFkZ0I7O0FBaUJuQiwrREFBZUYsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3V0c2lkZXNuYWNrcy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanM/YzIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwb3MsIHZlbCwgaW1nKSB7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy52ZWwgPSB2ZWw7XG4gICAgdGhpcy5pbWcgPSBpbWc7XG4gICAgLy8gdGhpcy5nYW1lID0gb2JqZWN0LmdhbWU7XG4gIH1cblxuICBkcmF3KGN0eCkgeyAgXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA3NSwgNzUpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHRoaXMudmVsLCB0aGlzLnBvc1sxXV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsImNvbnN0cnVjdG9yIiwicG9zIiwidmVsIiwiaW1nIiwiZHJhdyIsImN0eCIsImRyYXdJbWFnZSIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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