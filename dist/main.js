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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_food_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/food_item */ \"./src/scripts/food_item.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/moving_object */ \"./src/scripts/moving_object.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\"); // const mo = new MovingObject([0,100], 100)\n  // mo.draw(ctx);\n  // mo.move();\n  // mo.draw(ctx);\n\n  const food_item = new _scripts_food_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, \"nachos\");\n  food_item.draw(ctx);\n  food_item.move(); // food_item.draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBRyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaLENBRmtELENBSWxEO0VBRUE7RUFDQTtFQUNBOztFQUVBLE1BQU1DLFNBQVMsR0FBRyxJQUFJVCwwREFBSixDQUFhLEVBQWIsRUFBaUIsUUFBakIsQ0FBbEI7RUFDQVMsU0FBUyxDQUFDQyxJQUFWLENBQWVILEdBQWY7RUFDQUUsU0FBUyxDQUFDRSxJQUFWLEdBWmtELENBYWxEO0FBQ0QsQ0FkRCIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3V0c2lkZXNuYWNrcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb29kSXRlbSBmcm9tICcuL3NjcmlwdHMvZm9vZF9pdGVtJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCdcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIGNvbnN0IG1vID0gbmV3IE1vdmluZ09iamVjdChbMCwxMDBdLCAxMDApXG5cbiAgLy8gbW8uZHJhdyhjdHgpO1xuICAvLyBtby5tb3ZlKCk7XG4gIC8vIG1vLmRyYXcoY3R4KTtcblxuICBjb25zdCBmb29kX2l0ZW0gPSBuZXcgRm9vZEl0ZW0oMTAsIFwibmFjaG9zXCIpO1xuICBmb29kX2l0ZW0uZHJhdyhjdHgpO1xuICBmb29kX2l0ZW0ubW92ZSgpO1xuICAvLyBmb29kX2l0ZW0uZHJhdyhjdHgpO1xufSkiXSwibmFtZXMiOlsiRm9vZEl0ZW0iLCJHYW1lIiwiTW92aW5nT2JqZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9vZF9pdGVtIiwiZHJhdyIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/food_item.js":
/*!**********************************!*\
  !*** ./src/scripts/food_item.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\n\nconst FOODITEMS = {\n  // need to change to img\n  slushee: \"blue\",\n  nachos: \"orange\",\n  popcorn: \"yellow\",\n  pretzel: \"brown\"\n};\n\nclass FoodItem extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(vel, name) {\n    super([0, 450], vel);\n    this.name = name;\n    this.color = FOODITEMS[name]; // need to change to img\n\n    this.topping = null;\n  }\n\n  move() {\n    this.pos = [this.pos[0] + this.vel, this.pos[1]];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoodItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mb29kX2l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLE1BQU1DLFNBQVMsR0FBRztFQUFFO0VBQ2xCQyxPQUFPLEVBQUUsTUFETztFQUVoQkMsTUFBTSxFQUFFLFFBRlE7RUFHaEJDLE9BQU8sRUFBRSxRQUhPO0VBSWhCQyxPQUFPLEVBQUU7QUFKTyxDQUFsQjs7QUFPQSxNQUFNQyxRQUFOLFNBQXVCTixzREFBdkIsQ0FBb0M7RUFDbENPLFdBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVk7SUFDckIsTUFBTSxDQUFDLENBQUQsRUFBSSxHQUFKLENBQU4sRUFBZ0JELEdBQWhCO0lBQ0EsS0FBS0MsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsS0FBTCxHQUFhVCxTQUFTLENBQUNRLElBQUQsQ0FBdEIsQ0FIcUIsQ0FHVzs7SUFDaEMsS0FBS0UsT0FBTCxHQUFlLElBQWY7RUFDRDs7RUFFREMsSUFBSSxHQUFHO0lBQ0wsS0FBS0MsR0FBTCxHQUFXLENBQUMsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLTCxHQUFwQixFQUF5QixLQUFLSyxHQUFMLENBQVMsQ0FBVCxDQUF6QixDQUFYO0VBQ0Q7O0FBVmlDOztBQWFwQywrREFBZVAsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25vb3V0c2lkZXNuYWNrcy8uL3NyYy9zY3JpcHRzL2Zvb2RfaXRlbS5qcz85YWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiXG5cbmNvbnN0IEZPT0RJVEVNUyA9IHsgLy8gbmVlZCB0byBjaGFuZ2UgdG8gaW1nXG4gIHNsdXNoZWU6IFwiYmx1ZVwiLFxuICBuYWNob3M6IFwib3JhbmdlXCIsXG4gIHBvcGNvcm46IFwieWVsbG93XCIsXG4gIHByZXR6ZWw6IFwiYnJvd25cIlxufVxuXG5jbGFzcyBGb29kSXRlbSBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHZlbCwgbmFtZSkge1xuICAgIHN1cGVyKFswLCA0NTBdLCB2ZWwpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb2xvciA9IEZPT0RJVEVNU1tuYW1lXTsgICAvLyBuZWVkIHRvIGNoYW5nZSB0byBpbWdcbiAgICB0aGlzLnRvcHBpbmcgPSBudWxsO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHRoaXMudmVsLCB0aGlzLnBvc1sxXV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZEl0ZW0iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiRk9PRElURU1TIiwic2x1c2hlZSIsIm5hY2hvcyIsInBvcGNvcm4iLCJwcmV0emVsIiwiRm9vZEl0ZW0iLCJjb25zdHJ1Y3RvciIsInZlbCIsIm5hbWUiLCJjb2xvciIsInRvcHBpbmciLCJtb3ZlIiwicG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/food_item.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst NUM_FOOD_ITEMS = 10;\n\nclass Game {\n  constructor() {\n    this.allFoodItems = [];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxLQUFLLEdBQUcsR0FBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCOztBQUVBLE1BQU1DLElBQU4sQ0FBVztFQUNUQyxXQUFXLEdBQUU7SUFDWCxLQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0VBQ0Q7O0FBSFE7O0FBTVgsK0RBQWVGLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub291dHNpZGVzbmFja3MvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRElNX1ggPSA4MDA7XG5jb25zdCBESU1fWSA9IDYwMDtcbmNvbnN0IE5VTV9GT09EX0lURU1TID0gMTA7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuYWxsRm9vZEl0ZW1zID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdLCJuYW1lcyI6WyJESU1fWCIsIkRJTV9ZIiwiTlVNX0ZPT0RfSVRFTVMiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJhbGxGb29kSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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