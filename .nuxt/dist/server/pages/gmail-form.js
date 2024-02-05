exports.ids = [14];
exports.modules = {

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-uni-ngang-2.3cffcc6.png";

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gmail-form.vue?vue&type=template&id=35ec7512&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "form-container"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", __webpack_require__(139)) + " alt style=\"width:200px\">" + _vm._ssrEscape("\n  " + _vm._s(this.res) + "\n  \n"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/gmail-form.vue?vue&type=template&id=35ec7512&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gmail-form.vue?vue&type=script&lang=js&
/* harmony default export */ var gmail_formvue_type_script_lang_js_ = ({
  data() {
    return {
      res: {}
    };
  },
  created() {
    // this.callAPI();
  },
  async fetch() {
    this.res = await fetch("http://localhost:8888/news/658309dc840fe90512e79ce1").then(res => res.json());
  }

  // methods: {
  //   async callAPI() {
  //     try {
  //       const res = await axios
  //     }
  //   }
  // }
});
// CONCATENATED MODULE: ./pages/gmail-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_gmail_formvue_type_script_lang_js_ = (gmail_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/gmail-form.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_gmail_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7801f97a"
  
)

/* harmony default export */ var gmail_form = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=gmail-form.js.map