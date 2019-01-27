/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!*********************************!*\
  !*** ./source/assets/js/app.js ***!
  \*********************************/
/***/ (function(module, exports) {

eval("const $arrowLine = $(\".arrow--line\");\nconst $arrowChevron = $(\".arrow--chevron\");\nconst $leftSide = $(\"section.left\");\nconst $rightSide = $(\"section.right\");\nconst $primaryNav = $(\".primary-nav\");\n\n$(\".primary-nav--left, .primary-nav--right\").mouseenter(function (e) {\n  let paragraphWidth = $(this).find(\"p\").innerWidth();\n  $(this).find(\".arrow--line\").stop().animate({\n    width: $(this).innerWidth() - paragraphWidth - 60\n  });\n\n  console.log();\n\n  if (e.currentTarget.className == \"primary-nav--left\") {\n    $leftSide.addClass(\"hovered\");\n  } else if (e.currentTarget.className == \"primary-nav--right\") {\n    $rightSide.addClass(\"hovered\");\n  }\n}).mouseleave(function (e) {\n  $(this).find(\".arrow--line\").stop().animate({\n    width: \"100px\"\n  });\n\n  if (e.currentTarget.className == \"primary-nav--left\") {\n    $leftSide.removeClass(\"hovered\");\n  } else if (e.currentTarget.className == \"primary-nav--right\") {\n    $rightSide.removeClass(\"hovered\");\n  }\n}).click(function (e) {\n  if (e.currentTarget.className == \"primary-nav--left\") {\n    $leftSide.addClass(\"open\");\n    $(\".breadcrumbs ul\").append(`<li><a href=\"/investigate\">Investigate</a></li>`);\n    history.pushState(null, null, 'investigate');\n    $('.fixed-logo').css('display', 'block');\n    $('.fixed-logo').stop().animate({\n      opacity: 1\n    }, 400);\n  } else if (e.currentTarget.className == \"primary-nav--right\") {\n    $rightSide.addClass(\"open\");\n  }\n\n  // $primaryNav.stop().animate({\n  //   bottom: -80\n  // }, function() {\n  //   // $primaryNav.css('display', 'none');\n  // })\n\n  e.preventDefault();\n});\n\n$(\".menu-link\").click(function () {\n  $('.menu').toggleClass('open');\n  $(\".modal-backdrop\").toggleClass('open');\n});\n\n$('.collapsible').find('header').click(function (e) {\n  $(this).parent().toggleClass('expanded');\n});\n\nlet counter = 0;\n\n$('.container').on('click', 'a', function (e) {\n  counter++;\n\n  let newLayer = document.createElement(\"div\");\n  let href = $(this).attr('href');\n  newLayer.classList.add('layer');\n  newLayer.classList.add(`layer--${counter}`);\n  newLayer.classList.add('open');\n  document.querySelector('.layer-container').append(newLayer);\n\n  $(`.layer--${counter}`).load(href + ' .container', function () {\n    $(\".breadcrumbs ul\").append(`<li><a href=\"/investigate\">${counter}</a></li>`);\n\n    $(`.layer--${counter}`).stop().animate({\n      right: counter * 60,\n      left: '0',\n      zIndex: counter\n    });\n\n    history.pushState(null, null, href);\n  });\n\n  e.preventDefault();\n});\n\nwindow.addEventListener(\"popstate\", function (e) {\n  $('.layer').last().stop().animate({\n    right: '100vw',\n    left: '-100vw'\n  });\n\n  counter--;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zb3VyY2UvYXNzZXRzL2pzL2FwcC5qcz8wMGQxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICRhcnJvd0xpbmUgPSAkKFwiLmFycm93LS1saW5lXCIpO1xuY29uc3QgJGFycm93Q2hldnJvbiA9ICQoXCIuYXJyb3ctLWNoZXZyb25cIik7XG5jb25zdCAkbGVmdFNpZGUgPSAkKFwic2VjdGlvbi5sZWZ0XCIpO1xuY29uc3QgJHJpZ2h0U2lkZSA9ICQoXCJzZWN0aW9uLnJpZ2h0XCIpO1xuY29uc3QgJHByaW1hcnlOYXYgPSAkKFwiLnByaW1hcnktbmF2XCIpO1xuXG4kKFwiLnByaW1hcnktbmF2LS1sZWZ0LCAucHJpbWFyeS1uYXYtLXJpZ2h0XCIpXG4gIC5tb3VzZWVudGVyKGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgcGFyYWdyYXBoV2lkdGggPSAkKHRoaXMpXG4gICAgICAuZmluZChcInBcIilcbiAgICAgIC5pbm5lcldpZHRoKCk7XG4gICAgJCh0aGlzKVxuICAgICAgLmZpbmQoXCIuYXJyb3ctLWxpbmVcIilcbiAgICAgIC5zdG9wKClcbiAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgd2lkdGg6ICQodGhpcykuaW5uZXJXaWR0aCgpIC0gcGFyYWdyYXBoV2lkdGggLSA2MFxuICAgICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygpO1xuXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUgPT0gXCJwcmltYXJ5LW5hdi0tbGVmdFwiKSB7XG4gICAgICAkbGVmdFNpZGUuYWRkQ2xhc3MoXCJob3ZlcmVkXCIpO1xuICAgIH0gZWxzZSBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByaW1hcnktbmF2LS1yaWdodFwiKSB7XG4gICAgICAkcmlnaHRTaWRlLmFkZENsYXNzKFwiaG92ZXJlZFwiKTtcbiAgICB9XG4gIH0pXG4gIC5tb3VzZWxlYXZlKGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpXG4gICAgICAuZmluZChcIi5hcnJvdy0tbGluZVwiKVxuICAgICAgLnN0b3AoKVxuICAgICAgLmFuaW1hdGUoe1xuICAgICAgICB3aWR0aDogXCIxMDBweFwiXG4gICAgICB9KTtcblxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lID09IFwicHJpbWFyeS1uYXYtLWxlZnRcIikge1xuICAgICAgJGxlZnRTaWRlLnJlbW92ZUNsYXNzKFwiaG92ZXJlZFwiKTtcbiAgICB9IGVsc2UgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUgPT0gXCJwcmltYXJ5LW5hdi0tcmlnaHRcIikge1xuICAgICAgJHJpZ2h0U2lkZS5yZW1vdmVDbGFzcyhcImhvdmVyZWRcIik7XG4gICAgfVxuICB9KVxuICAuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lID09IFwicHJpbWFyeS1uYXYtLWxlZnRcIikge1xuICAgICAgJGxlZnRTaWRlLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICQoXCIuYnJlYWRjcnVtYnMgdWxcIikuYXBwZW5kKGA8bGk+PGEgaHJlZj1cIi9pbnZlc3RpZ2F0ZVwiPkludmVzdGlnYXRlPC9hPjwvbGk+YCk7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnaW52ZXN0aWdhdGUnKTtcbiAgICAgICQoJy5maXhlZC1sb2dvJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAkKCcuZml4ZWQtbG9nbycpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSwgNDAwKTtcbiAgICB9IGVsc2UgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUgPT0gXCJwcmltYXJ5LW5hdi0tcmlnaHRcIikge1xuICAgICAgJHJpZ2h0U2lkZS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgfVxuXG4gICAgLy8gJHByaW1hcnlOYXYuc3RvcCgpLmFuaW1hdGUoe1xuICAgIC8vICAgYm90dG9tOiAtODBcbiAgICAvLyB9LCBmdW5jdGlvbigpIHtcbiAgICAvLyAgIC8vICRwcmltYXJ5TmF2LmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgLy8gfSlcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cblxuICAkKFwiLm1lbnUtbGlua1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCcubWVudScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgJChcIi5tb2RhbC1iYWNrZHJvcFwiKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICB9KTtcblxuXG5cblxuXG5cblxuJCgnLmNvbGxhcHNpYmxlJykuZmluZCgnaGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcbn0pXG5cblxuXG5cblxuXG5sZXQgY291bnRlciA9IDA7XG5cbiQoJy5jb250YWluZXInKS5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uIChlKSB7XG4gIGNvdW50ZXIrKztcblxuICBsZXQgbmV3TGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICBuZXdMYXllci5jbGFzc0xpc3QuYWRkKCdsYXllcicpO1xuICBuZXdMYXllci5jbGFzc0xpc3QuYWRkKGBsYXllci0tJHtjb3VudGVyfWApXG4gIG5ld0xheWVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheWVyLWNvbnRhaW5lcicpLmFwcGVuZChuZXdMYXllcik7XG5cbiAgJChgLmxheWVyLS0ke2NvdW50ZXJ9YCkubG9hZChocmVmICsgJyAuY29udGFpbmVyJywgZnVuY3Rpb24oKSB7XG4gICAgJChcIi5icmVhZGNydW1icyB1bFwiKS5hcHBlbmQoYDxsaT48YSBocmVmPVwiL2ludmVzdGlnYXRlXCI+JHtjb3VudGVyfTwvYT48L2xpPmApO1xuICAgIFxuICAgICQoYC5sYXllci0tJHtjb3VudGVyfWApLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgIHJpZ2h0OiBjb3VudGVyICogNjAsXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB6SW5kZXg6IGNvdW50ZXJcbiAgICB9KTtcblxuICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGhyZWYpO1xuICB9KTtcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAkKCcubGF5ZXInKS5sYXN0KCkuc3RvcCgpLmFuaW1hdGUoe1xuICAgIHJpZ2h0OiAnMTAwdncnLFxuICAgIGxlZnQ6ICctMTAwdncnXG4gIH0pO1xuXG4gIGNvdW50ZXItLTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzb3VyY2UvYXNzZXRzL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBSUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);