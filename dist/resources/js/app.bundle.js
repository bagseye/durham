"use strict";
(self["webpackChunkdurham"] = self["webpackChunkdurham"] || []).push([["app"],{

/***/ "./src/entries/app.entry.js":
/*!**********************************!*\
  !*** ./src/entries/app.entry.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_animationVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/modules/animationVideo */ "./src/js/modules/animationVideo.js");
/* harmony import */ var _scss_reset_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/reset/layout.scss */ "./src/scss/reset/layout.scss");
/* harmony import */ var _scss_elements_btn_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/elements/btn.scss */ "./src/scss/elements/btn.scss");
/* harmony import */ var _scss_elements_typography_standard_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/elements/typography_standard.scss */ "./src/scss/elements/typography_standard.scss");
/* harmony import */ var _scss_layouts_hero_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/layouts/hero.scss */ "./src/scss/layouts/hero.scss");
/* harmony import */ var _scss_layouts_animation_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/layouts/animation.scss */ "./src/scss/layouts/animation.scss");
/* harmony import */ var _scss_layouts_welcome_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/layouts/welcome.scss */ "./src/scss/layouts/welcome.scss");
/* harmony import */ var _scss_layouts_contact_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/layouts/contact.scss */ "./src/scss/layouts/contact.scss");
/* harmony import */ var _scss_layouts_gallery_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/layouts/gallery.scss */ "./src/scss/layouts/gallery.scss");
/* harmony import */ var _scss_layouts_footer_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scss/layouts/footer.scss */ "./src/scss/layouts/footer.scss");
// Polyfills
// import 'babel-polyfill';
// JS Modules
 // Reset

 // Elements


 // Layouts






 // Init modules 

(0,_js_modules_animationVideo__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/js/modules/animationVideo.js":
/*!******************************************!*\
  !*** ./src/js/modules/animationVideo.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ init; }
/* harmony export */ });
var animationVideo;
var observer;
var isPaused = false;

function cacheDOM() {
  animationVideo = document.querySelector('.animation__video video');
}

function startObserver(watchItem) {
  observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio != 1 && !animationVideo.paused) {
        watchItem.pause();
        isPaused = true;
      } else if (isPaused) {
        watchItem.play();
        isPaused = false;
      }
    });
  });
  observer.observe(animationVideo);
}

function init() {
  cacheDOM();

  if (animationVideo) {
    startObserver(animationVideo);
  }
}

/***/ }),

/***/ "./src/scss/elements/btn.scss":
/*!************************************!*\
  !*** ./src/scss/elements/btn.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/elements/typography_standard.scss":
/*!****************************************************!*\
  !*** ./src/scss/elements/typography_standard.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/layouts/animation.scss":
/*!*****************************************!*\
  !*** ./src/scss/layouts/animation.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/layouts/contact.scss":
/*!***************************************!*\
  !*** ./src/scss/layouts/contact.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/layouts/footer.scss":
/*!**************************************!*\
  !*** ./src/scss/layouts/footer.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/layouts/gallery.scss":
/*!***************************************!*\
  !*** ./src/scss/layouts/gallery.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/layouts/hero.scss":
/*!************************************!*\
  !*** ./src/scss/layouts/hero.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/layouts/welcome.scss":
/*!***************************************!*\
  !*** ./src/scss/layouts/welcome.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/reset/layout.scss":
/*!************************************!*\
  !*** ./src/scss/reset/layout.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/entries/app.entry.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2pzL2FwcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7Q0FHQTs7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQUEsc0VBQWM7Ozs7Ozs7Ozs7Ozs7O0FDdEJkLElBQUlBLGNBQUo7QUFDQSxJQUFJQyxRQUFKO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEtBQWY7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtFQUNoQkgsY0FBYyxHQUFHSSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQWpCO0FBQ0g7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkMsU0FBdkIsRUFBa0M7RUFDOUJOLFFBQVEsR0FBRyxJQUFJTyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQVVSLFFBQVYsRUFBdUI7SUFDdkRRLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFBQyxLQUFLLEVBQUk7TUFDckIsSUFBR0EsS0FBSyxDQUFDQyxpQkFBTixJQUEyQixDQUEzQixJQUFnQyxDQUFDWixjQUFjLENBQUNhLE1BQW5ELEVBQTJEO1FBQ3ZETixTQUFTLENBQUNPLEtBQVY7UUFDQVosUUFBUSxHQUFHLElBQVg7TUFDSCxDQUhELE1BR08sSUFBR0EsUUFBSCxFQUFhO1FBQ2hCSyxTQUFTLENBQUNRLElBQVY7UUFDQWIsUUFBUSxHQUFHLEtBQVg7TUFDSDtJQUNKLENBUkQ7RUFVSCxDQVhVLENBQVg7RUFhQUQsUUFBUSxDQUFDZSxPQUFULENBQWlCaEIsY0FBakI7QUFDSDs7QUFFYyxTQUFTaUIsSUFBVCxHQUFnQjtFQUMzQmQsUUFBUTs7RUFDUixJQUFHSCxjQUFILEVBQW1CO0lBQ2ZNLGFBQWEsQ0FBQ04sY0FBRCxDQUFiO0VBQ0g7QUFDSjs7Ozs7Ozs7Ozs7QUM5QkQ7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2R1cmhhbS8uL3NyYy9lbnRyaWVzL2FwcC5lbnRyeS5qcyIsIndlYnBhY2s6Ly9kdXJoYW0vLi9zcmMvanMvbW9kdWxlcy9hbmltYXRpb25WaWRlby5qcyIsIndlYnBhY2s6Ly9kdXJoYW0vLi9zcmMvc2Nzcy9lbGVtZW50cy9idG4uc2Nzcz9jZTJmIiwid2VicGFjazovL2R1cmhhbS8uL3NyYy9zY3NzL2VsZW1lbnRzL3R5cG9ncmFwaHlfc3RhbmRhcmQuc2Nzcz83YTE5Iiwid2VicGFjazovL2R1cmhhbS8uL3NyYy9zY3NzL2xheW91dHMvYW5pbWF0aW9uLnNjc3M/ZTk4YyIsIndlYnBhY2s6Ly9kdXJoYW0vLi9zcmMvc2Nzcy9sYXlvdXRzL2NvbnRhY3Quc2Nzcz9kMWFhIiwid2VicGFjazovL2R1cmhhbS8uL3NyYy9zY3NzL2xheW91dHMvZm9vdGVyLnNjc3M/YzFhYSIsIndlYnBhY2s6Ly9kdXJoYW0vLi9zcmMvc2Nzcy9sYXlvdXRzL2dhbGxlcnkuc2Nzcz85NzZhIiwid2VicGFjazovL2R1cmhhbS8uL3NyYy9zY3NzL2xheW91dHMvaGVyby5zY3NzPzgzOTMiLCJ3ZWJwYWNrOi8vZHVyaGFtLy4vc3JjL3Njc3MvbGF5b3V0cy93ZWxjb21lLnNjc3M/YjVjYyIsIndlYnBhY2s6Ly9kdXJoYW0vLi9zcmMvc2Nzcy9yZXNldC9sYXlvdXQuc2Nzcz83YWI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFBvbHlmaWxsc1xuLy8gaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbi8vIEpTIE1vZHVsZXNcbmltcG9ydCBhbmltYXRpb25WaWRlbyBmcm9tICcuLi9qcy9tb2R1bGVzL2FuaW1hdGlvblZpZGVvJztcblxuLy8gUmVzZXRcbmltcG9ydCAnLi4vc2Nzcy9yZXNldC9sYXlvdXQuc2Nzcyc7XG5cbi8vIEVsZW1lbnRzXG5pbXBvcnQgJy4uL3Njc3MvZWxlbWVudHMvYnRuLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2VsZW1lbnRzL3R5cG9ncmFwaHlfc3RhbmRhcmQuc2Nzcyc7XG5cbi8vIExheW91dHNcbmltcG9ydCAnLi4vc2Nzcy9sYXlvdXRzL2hlcm8uc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3MvbGF5b3V0cy9hbmltYXRpb24uc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3MvbGF5b3V0cy93ZWxjb21lLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL2xheW91dHMvY29udGFjdC5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9sYXlvdXRzL2dhbGxlcnkuc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3MvbGF5b3V0cy9mb290ZXIuc2Nzcyc7XG5cbi8vIEluaXQgbW9kdWxlcyBcbmFuaW1hdGlvblZpZGVvKCk7IiwibGV0IGFuaW1hdGlvblZpZGVvO1xubGV0IG9ic2VydmVyO1xubGV0IGlzUGF1c2VkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNhY2hlRE9NKCkge1xuICAgIGFuaW1hdGlvblZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuaW1hdGlvbl9fdmlkZW8gdmlkZW8nKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRPYnNlcnZlcih3YXRjaEl0ZW0pIHtcbiAgICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmludGVyc2VjdGlvblJhdGlvICE9IDEgJiYgIWFuaW1hdGlvblZpZGVvLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHdhdGNoSXRlbS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIGlzUGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihpc1BhdXNlZCkge1xuICAgICAgICAgICAgICAgIHdhdGNoSXRlbS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH0pO1xuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShhbmltYXRpb25WaWRlbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY2FjaGVET00oKTtcbiAgICBpZihhbmltYXRpb25WaWRlbykge1xuICAgICAgICBzdGFydE9ic2VydmVyKGFuaW1hdGlvblZpZGVvKTtcbiAgICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImFuaW1hdGlvblZpZGVvIiwib2JzZXJ2ZXIiLCJpc1BhdXNlZCIsImNhY2hlRE9NIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RhcnRPYnNlcnZlciIsIndhdGNoSXRlbSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImludGVyc2VjdGlvblJhdGlvIiwicGF1c2VkIiwicGF1c2UiLCJwbGF5Iiwib2JzZXJ2ZSIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9