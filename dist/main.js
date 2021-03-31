/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/time.jpg":
/*!*****************************!*\
  !*** ./src/assets/time.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"953e0fa0d65b640b1b8d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/time.jpg?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _assets_time_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/time.jpg */ \"./src/assets/time.jpg\");\n/* harmony import */ var _tab_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab_container */ \"./src/tab_container.js\");\n\n\n\nconst contact = (container) => {\n  const obj = {\n    title: 'Contact information',\n    image: _assets_time_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    content: [\n      {\n        title: 'Make a reservation',\n        body: 'If you want to a reservation please call: 2345678 \\n Mail us on: forfoodonly@food.world',\n        date: 'We look forward to you coming to eat our food!',\n      },\n    ],\n  };\n  (0,_tab_container__WEBPACK_IMPORTED_MODULE_1__.default)(container).appendChild(obj);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _assets_time_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/time.jpg */ \"./src/assets/time.jpg\");\n/* harmony import */ var _tab_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab_container */ \"./src/tab_container.js\");\n\n\n\nconst home = (container) => {\n  const obj = {\n    title: 'Amala Cafe',\n    image: _assets_time_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    content: [\n      {\n        title: 'Local Food Made with Passion',\n        body: 'Have you been craving for the best local Amala made with passion and comes out with the local flavor?, Dont go far. We dy here',\n      },\n    ],\n  };\n  (0,_tab_container__WEBPACK_IMPORTED_MODULE_1__.default)(container).appendChild(obj);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst mainPage = (container) => {\n  const createTab = (key) => {\n    switch (key) {\n      case 'Home': (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)(container); break;\n      case 'Menu': (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)(container); break;\n      case 'Contact': (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)(container); break;\n      default: (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n    }\n  };\n\n  const addTab = (ul, title) => {\n    const li = document.createElement('li');\n    ul.appendChild(li);\n    li.textContent = title;\n    li.addEventListener('click', (event) => createTab(event.target.textContent));\n  };\n\n  const addTabNavbar = () => {\n    const navBar = document.querySelector('nav');\n    const ul = document.createElement('ul');\n    navBar.appendChild(ul);\n    addTab(ul, 'Home');\n    addTab(ul, 'Menu');\n    addTab(ul, 'Contact');\n  };\n\n  const run = () => {\n    addTabNavbar();\n    createTab('Home');\n  };\n\n  return { run };\n};\n\nmainPage(document.querySelector('#content')).run();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menus)\n/* harmony export */ });\n/* harmony import */ var _assets_time_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/time.jpg */ \"./src/assets/time.jpg\");\n/* harmony import */ var _tab_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab_container */ \"./src/tab_container.js\");\n\n\n\nconst menus = (container) => {\n  const obj = {\n    title: 'Amala Menu',\n    image: _assets_time_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    content: [\n      {\n        title: 'We sell all different kinds of Amala her',\n        body: 'Amala dudu \\n Amala lafun \\n Amala Banana \\nAmala Yam',\n        date: 'We will make your taste bud happy',\n      },\n    ],\n  };\n  (0,_tab_container__WEBPACK_IMPORTED_MODULE_1__.default)(container).appendChild(obj);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/tab_container.js":
/*!******************************!*\
  !*** ./src/tab_container.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabFactory)\n/* harmony export */ });\nconst tabFactory = (container) => {\n  const addTitle = (title) => {\n    const h1 = document.createElement('h2');\n    h1.textContent = title;\n    container.appendChild(h1);\n  };\n\n  const addImage = (image) => {\n    const myImage = new Image();\n    myImage.src = image;\n    myImage.classList.add('main-image');\n    container.appendChild(myImage);\n  };\n\n  const addArticle = (content) => {\n    const h4 = document.createElement('h4');\n    h4.textContent = content.title;\n    container.appendChild(document.createElement('br'));\n    container.appendChild(h4);\n    content.body.split('\\n').forEach(value => {\n      const p = document.createElement('p');\n      p.textContent = value;\n      container.appendChild(p);\n    });\n    const p2 = document.createElement('p');\n    p2.textContent = content.date;\n    container.appendChild(p2);\n  };\n\n  const appendChild = (obj) => {\n    container.innerHTML = '';\n    addTitle(obj.title);\n    addImage(obj.image);\n    obj.content.forEach(element => {\n      addArticle(element);\n    });\n  };\n\n  return { appendChild };\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/tab_container.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;