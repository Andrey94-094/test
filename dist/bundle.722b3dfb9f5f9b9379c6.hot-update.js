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
  return $ready(function () {
    $("form.has-calculator").change(function () {
      var form = this;
      var product = $("input[name='product']", form).val();
      var length = $("input[name='length']:checked", form).val();
      var shag = $("input[name='shag']:checked", form).val();
      var sum = 0;
      sum += calculatorData[product][length][shag];
      var out = $('.jPrice', form);
      var outOld = $('.jPriceOld', form);
      var animateFrom = out.data("animateFrom") > 0 ? out.data("animateFrom") : 0;
      $({
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
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "006ff32199fedc935e8c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.722b3dfb9f5f9b9379c6.hot-update.js.map