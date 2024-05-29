exports.ids = [6];
exports.modules = {

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("bc7d7cfa", content, true, context)
};

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_id_5fea2493_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_id_5fea2493_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_id_5fea2493_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_id_5fea2493_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_id_5fea2493_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(179);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#uni-maps{height:450px;opacity:0;transform:scale(.5);width:960px}.maps h2{color:#fff;font-size:34px;font-style:italic;padding-top:30px;text-shadow:0 0 3px #a20000,0 0 5px #000}.maps{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover;box-shadow:0 8px 8px rgba(0,0,0,.45);-webkit-box-shadow:0 8px 8px rgba(0,0,0,.45);-moz-box-shadow:0 8px 8px rgba(0,0,0,.45);margin-bottom:80px;padding:50px;text-align:center}@media (max-width:1024px){#uni-maps{height:300px;padding:0 10px;width:90vw}.maps{padding:0 5px 50px}.maps h2{padding-top:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/item1.45bd346.jpg";

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Maps.vue?vue&type=template&id=5fea2493&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "maps"
  }, [_vm._ssrNode("<h2>ĐỊA CHỈ CỦA LANGUAGE HOUSE SƠN LA</h2> <iframe id=\"uni-maps\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.9494387986199!2d103.90909169878066!3d21.339952313602588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31328b3423500775%3A0x89e9f230d6d31bdc!2zNDU3IENodSBWxINuIFRo4buLbmgsIFAuIENoaeG7gW5nIEzhu4EsIFPGoW4gTGEsIDM2MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1699424510932!5m2!1svi!2s\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\" style=\"border: 0\"></iframe>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/Maps.vue?vue&type=template&id=5fea2493&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Maps.vue?vue&type=script&lang=js&
// import { i18next } from 'i18next';
// import I18NextVue from 'i18next-vue';

const locales = {
  en: {
    hello: 'Hello!',
    loadbundle: 'Load bundle language: {{lang}}'
  },
  vn: {
    hello: 'xin cao!',
    loadbundle: 'tai bundle cua ngon ngu: {{lang}}'
  }
};

// i18next.init({
//   lng: 'vn',
//   resources: {
//     en: { translation: locales.en },
//   },
// });

// const i18n = new I18NextVue(i18next);
/* harmony default export */ var Mapsvue_type_script_lang_js_ = ({
  data() {
    return {
      lang: "VN"
    };
  },
  // i18n,
  mounted() {
    this.runAnimation();
  },
  methods: {
    runAnimation() {
      const gsap = this.$gsap;
      gsap.to('#uni-maps', {
        scrollTrigger: '#uni-maps',
        scale: 1,
        opacity: 1,
        duration: .5
      });
    }
  }
});
// CONCATENATED MODULE: ./components/common/Maps.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Mapsvue_type_script_lang_js_ = (Mapsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/common/Maps.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(177)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_Mapsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "00b79eb2"
  
)

/* harmony default export */ var Maps = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-maps.js.map