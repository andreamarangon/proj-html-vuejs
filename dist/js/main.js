/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    navLinks: [{
      name: 'home',
      link: '#'
    }, {
      name: 'about',
      link: '#about'
    }, {
      name: 'services',
      link: '#services'
    }, {
      name: 'showcase',
      link: '#showcase'
    }, {
      name: 'blog',
      link: '#blog'
    }, {
      name: 'contact',
      link: '#contact'
    }],
    partnersLogo: [{
      name: 'avantgarde',
      img: './dist/img/logo-avantgarde.png'
    }, {
      name: 'fastlane',
      img: './dist/img/logo-fastlane.png'
    }, {
      name: 'rj',
      img: './dist/img/logo-rj.png'
    }, {
      name: 'chippy',
      img: './dist/img/logo-chippy.png'
    }, {
      name: 'bullseye',
      img: './dist/img/logo-bullseye.png'
    }, {
      name: 'mighty',
      img: './dist/img/logo-mighty.png'
    }],
    footerLinks: [{
      name: 'Careers',
      link: '#'
    }, {
      name: 'News',
      link: '#'
    }, {
      name: 'Terms of Use',
      link: '#'
    }, {
      name: 'Privacy Projects',
      link: '#'
    }, {
      name: 'About',
      link: '#'
    }, {
      name: 'Contact',
      link: '#'
    }],
    footerContacts: [{
      info: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051'
    }, {
      info: 'info@yourdomain.com'
    }, {
      info: '+99 (0) 101 000 888'
    }],
    socialLogos: [{
      logo: 'fab fa-facebook-f'
    }, {
      logo: 'fab fa-twitter'
    }, {
      logo: 'fab fa-pinterest-p'
    }],
    designCards: [{
      title: 'The Basket of Flowers',
      subtitle: 'branding marketing',
      img: './dist/img/flower.jpg'
    }, {
      title: 'A Famous Ferris Wheel',
      subtitle: 'marketing',
      img: './dist/img/ferris-wheel.jpg'
    }, {
      title: 'Complementary Colors',
      subtitle: 'branding marketing',
      img: './dist/img/shoes.jpg'
    }, {
      title: 'Business Prestige',
      subtitle: 'branding',
      img: './dist/img/desk-pencil.jpg'
    }, {
      title: 'Colorful Origami Boats',
      subtitle: 'branding marketing',
      img: './dist/img/origami.jpg'
    }, {
      title: 'Modern Couch',
      subtitle: 'marketing',
      img: './dist/img/sofa.jpg'
    }, {
      title: 'Hot Air Balloons',
      subtitle: 'branding marketing',
      img: './dist/img/air-balloon.jpg'
    }, {
      title: 'The Basket of Flowers',
      subtitle: 'branding',
      img: './dist/img/blue-lemon.jpg'
    }],
    blogCards: [{
      dateBy: 'May 24, 2018 -by Alex',
      title: 'Marketing Ideas',
      img: './dist/img/businesswoman-telephone.jpg'
    }, {
      dateBy: 'May 24, 2018 -by Alex',
      title: 'Rest During Working Hours',
      img: './dist/img/businessman.jpg'
    }, {
      dateBy: 'May 24, 2018 -by Alex',
      title: 'Develop Your Startup Idea',
      img: './dist/img/home-office.jpg'
    }],
    index: 0,
    backgroundImgs: ['./dist/img/businesswoman-round.png', './dist/img/businessman-round.png', './dist/img/businesspeople-round.png']
  },
  computed: {},
  methods: {
    numSelection: function numSelection(index) {
      this.index = index;
    }
  }
});

/***/ }),

/***/ "./src/scss/master.scss":
/*!******************************!*\
  !*** ./src/scss/master.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/main": 0,
/******/ 			"dist/css/master": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/master"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/master"], () => (__webpack_require__("./src/scss/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;