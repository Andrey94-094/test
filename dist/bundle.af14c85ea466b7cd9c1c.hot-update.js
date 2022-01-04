"use strict";
self["webpackHotUpdate"]("bundle",{

/***/ "./src/components/calculator.js":
/*!**************************************!*\
  !*** ./src/components/calculator.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__);



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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  [].forEach.call(document.querySelectorAll("form.has-calculator"), function (form) {
    form.addEventListener('change', function () {
      var product = form.querySelector('input[name="product"]');

      if (product.type !== 'hidden') {
        product = form.querySelector('input[name="product"]:checked');
      }

      var length = form.querySelector('input[name="length"]:checked');
      var interval = form.querySelector('input[name="interval"]:checked');
      var additional = form.querySelectorAll('input[name="additional[]"]:checked');
      var sum = 0;

      try {
        sum += calculator.products[product.value][length.value][interval.value];
        [].forEach.call(additional, function (el) {
          sum += calculator.additional[el.value];
        });
        var animateBlock = form.querySelector('.catalog__price');
        var out = form.querySelector('.calculator-price');
        var outOld = form.querySelector('.calculator-price-old');
        var animationName = 'pulse';
        animateBlock.classList.add('animated', 'faster', animationName);
        animateBlock.addEventListener('animationend', function () {
          animateBlock.classList.remove('animated', 'faster', animationName);
        });
        var numberFrom = Number(typeof out.dataset.from === 'undefined' ? 0 : out.dataset.from);
        var numberTo = Number(sum);
        var time = {
          start: performance.now(),
          duration: 1000
        };

        var tick = function tick(now) {
          var progress = Math.min((now - time.start) / time.duration, 1);
          var easing = Math.pow(progress - 1, 5) + 1;
          var value = numberFrom + (numberTo - numberFrom) * easing;
          out.textContent = value.toFixed();

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            out.dataset.from = numberTo.toFixed();
            outOld.textContent = Number(numberTo * 1.27).toFixed();
          }
        };

        requestAnimationFrame(tick);
      } catch (e) {
        console.error(e);
      }
    });
    form.dispatchEvent(new Event('change'));
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "fb238e6fb7eea67145df"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.af14c85ea466b7cd9c1c.hot-update.js.map