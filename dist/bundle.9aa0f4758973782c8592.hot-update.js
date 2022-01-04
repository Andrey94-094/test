"use strict";
self["webpackHotUpdate"]("bundle",{

/***/ "./src/components/calculator.js":
/*!**************************************!*\
  !*** ./src/components/calculator.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return document.ready(function () {
    "form.has-calculator".change(function () {
      var form = this;
      var product = $("input[name='product']", form).val();
      var length = $("input[name='length']:checked", form).val();
      var shag = $("input[name='shag']:checked", form).val();
      var sum = 0;
      sum += calculatorData[product][length][shag];
      var out = $('.jPrice', form);
      var outOld = $('.jPriceOld', form);
      var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;
      ({
        animateNumber: animateFrom
      }).animate({
        animateNumber: sum
      }, {
        duration: 800,
        step: function step(animateNumber) {
          out.text(Number(animateNumber).toFixed());
          outOld.text(Number(animateNumber * 1.4).toFixed());
        },
        complete: function complete() {
          out.data("animateFrom", Number(sum).toFixed());
        }
      });
    });
    $("form.has-calculator").change();
  });
}); // export default (() => {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bc5cce238b6d30b0bfc0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.9aa0f4758973782c8592.hot-update.js.map