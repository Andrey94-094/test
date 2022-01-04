self["webpackHotUpdate"]("bundle",{

/***/ "./src/components/calculator.js":
/*!**************************************!*\
  !*** ./src/components/calculator.js ***!
  \**************************************/
/***/ (function() {

// export default () => $(document).ready(function() {
//     $("form.has-calculator").change(function() {
//         var form = this;
//         var product = $("input[name='product']", form).val();
//         var length = $("input[name='length']:checked", form).val();
//         var shag = $("input[name='shag']:checked", form).val();
//         var sum = 0;
//         sum += calculatorData[product][length][shag];
//         var out = $('.jPrice', form);
//         var outOld = $('.jPriceOld', form);
//         var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;
//         $({
//             animateNumber: animateFrom
//         }).animate({
//             animateNumber: sum
//         }, {
//             duration: 800,
//             step: function(animateNumber) {
//                 out.text(Number(animateNumber).toFixed());
//                 outOld.text(Number(animateNumber * 1.4).toFixed());
//             },
//             complete: function() {
//                 out.data("animateFrom", Number(sum).toFixed());
//             }
//         });
//     });
//     $("form.has-calculator").change();
// })
// export default (() => {
//     [].forEach.call(document.querySelectorAll("form.has-calculator"), function(form) {
//         form.addEventListener('change', function() {
//             let product = form.querySelector('input[name="product"]');
//             if (product.type !== 'hidden') {
//                 product = form.querySelector('input[name="product"]:checked');
//             }
//             let length = form.querySelector('input[name="length"]:checked');
//             let interval = form.querySelector('input[name="interval"]:checked');
//             let additional = form.querySelectorAll('input[name="additional[]"]:checked');
//             let sum = 0;
//             try {
//                 sum += calculator.products[product.value][length.value][interval.value];
//                 [].forEach.call(additional, function(el) {
//                     sum += calculator.additional[el.value]
//                 });
//                 const animateBlock = form.querySelector('.catalog__price');
//                 const out = form.querySelector('.calculator-price');
//                 const outOld = form.querySelector('.calculator-price-old');
//                 const animationName = 'pulse';
//                 animateBlock.classList.add('animated', 'faster', animationName);
//                 animateBlock.addEventListener('animationend', function() { animateBlock.classList.remove('animated', 'faster', animationName) });
//                 let numberFrom = Number(typeof out.dataset.from === 'undefined' ? 0 : out.dataset.from);
//                 let numberTo = Number(sum);
//                 const time = {
//                     start: performance.now(),
//                     duration: 1000
//                 };
//                 const tick = function(now) {
//                     const progress = Math.min((now - time.start) / time.duration, 1);
//                     const easing = Math.pow(progress - 1, 5) + 1;
//                     const value = numberFrom + (numberTo - numberFrom) * easing;
//                     out.textContent = value.toFixed();
//                     if (progress < 1) {
//                         requestAnimationFrame(tick);
//                     } else {
//                         out.dataset.from = numberTo.toFixed();
//                         outOld.textContent = Number(numberTo * 1.27).toFixed();
//                     }
//                 };
//                 requestAnimationFrame(tick);
//             } catch (e) { console.error(e); }
//         });
//         form.dispatchEvent(new Event('change'));
//     });
// })

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");
/* harmony import */ var _components_componentName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/componentName */ "./src/components/componentName.js");
/* harmony import */ var _components_rotation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rotation */ "./src/components/rotation.js");
/* harmony import */ var _components_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/timer */ "./src/components/timer.js");
/* harmony import */ var _components_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/calculator */ "./src/components/calculator.js");
/* harmony import */ var _components_calculator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_calculator__WEBPACK_IMPORTED_MODULE_8__);
/*
 * External dependencies
 */



/*
 * Internal dependencies
 */







document.addEventListener('DOMContentLoaded', function () {
  (0,_components_form__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_componentName__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_rotation__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_components_timer__WEBPACK_IMPORTED_MODULE_7__["default"])();
  _components_calculator__WEBPACK_IMPORTED_MODULE_8___default()();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a697ff8b94ee94888b06"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.f6343cb9a3f84a3c9124.hot-update.js.map