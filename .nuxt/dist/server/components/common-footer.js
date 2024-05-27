exports.ids = [3];
exports.modules = {

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("0ae24039", content, true, context)
};

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-uni-kem-slogan-doc-white.02bab3d.png";

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fb-icon.00b6383.png";

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gmail-icon.d7030ea.png";

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/zalo-icon.a87d2a6.png";

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/location-icon.5aa37c3.png";

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4e14226a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4e14226a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4e14226a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4e14226a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4e14226a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(164);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(165);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(166);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#footer{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover;padding:20px 80px 300px}.footer-info img{width:200px}.social-media-icon{display:flex;flex-direction:column}.social-media-icon a{align-items:center;color:#fff;display:flex;font-size:12px;-webkit-text-decoration:none;text-decoration:none}.social-media img{margin:6px;width:1.875em}.social-media-icon a:hover{opacity:.5}.tel{border:3px solid #fff;border-radius:18px;display:flex;height:40px;justify-content:space-evenly;margin:10px;width:192px}.tel span{align-items:center;color:#fff;display:flex}.tel:hover{animation:fadeInTel .2s linear;background-color:hsla(0,0%,100%,.15);cursor:pointer}.telephone{width:24px}.footer-info{color:#fff}.footer-info-subtitle{font-weight:600}.footer-info a{color:#fff;-webkit-text-decoration:none;text-decoration:none}.footer-info-link{padding:5px 0}.footer-info a:hover{opacity:.5}@keyframes fadeInTel{0%{opacity:.5}to{opacity:1}}@media screen and (max-width:739px){#footer{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");padding:20px 15px 500px}}@media screen and (min-width:740px) and (max-width:1023px){#footer{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");padding:20px 15px 400px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer.5d6be8c.jpg";

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer-mobile.2e8791b.jpg";

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer-tablet.fae8d8a.jpg";

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Footer.vue?vue&type=template&id=4e14226a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "footer"
    }
  }, [_c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    staticClass: "footer-info",
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('img', {
    staticClass: "homepage-logo-img",
    attrs: {
      "src": __webpack_require__(157),
      "alt": "UNI Language House"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "social-media"
  }, [_c('div', {
    staticClass: "social-media-icon"
  }, [_c('a', {
    attrs: {
      "href": "http://www.facebook.com/Anh.Ngu.Quoc.Te.Son.La",
      "target": "_blank"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(158),
      "alt": ""
    }
  }), _vm._v("facebook.com/Anh.Ngu.Quoc.Te.Son.La")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "mailto:unilanguagesonla1@gmail.com"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(159),
      "alt": ""
    }
  }), _vm._v("unilanguagesonla1@gmail.com")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://zalo.me/0899806226",
      "target": "_blank"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(160),
      "alt": ""
    }
  }), _vm._v("Uni Customer Care")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://maps.app.goo.gl/jLPM3F1pP9CeDhCx9",
      "target": "_blank"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(161),
      "alt": ""
    }
  }), _vm._v("Số 457 A, đường Chu Văn Thịnh, tp Sơn La")])]), _vm._v(" "), _c('div', {
    staticClass: "tel"
  }, [_c('svg', {
    staticClass: "telephone",
    attrs: {
      "fill": "#fff",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512"
    }
  }, [_c('path', {
    attrs: {
      "d": "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
    }
  })]), _vm._v(" "), _c('span', [_vm._v("+84 899 806 226")])])])]), _vm._v(" "), _c('el-col', {
    staticClass: "footer-info",
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('h2', {
    staticClass: "footer-info-title"
  }, [_vm._v("GIỚI THIỆU")]), _vm._v(" "), _c('h3', {
    staticClass: "footer-info-subtitle"
  }, [_vm._v("UNI LANGUAGE HOUSE")]), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("Tầm nhìn")])]), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("Sứ mệnh")])]), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("Đội ngũ chuyên môn")])]), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("Tin tức & Sự kiện")])])]), _vm._v(" "), _c('el-col', {
    staticClass: "footer-info",
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('h2', {
    staticClass: "footer-info-title"
  }, [_vm._v("CHƯƠNG TRÌNH ĐÀO TẠO")]), _vm._v(" "), _c('h3', {
    staticClass: "footer-info-subtitle"
  }, [_vm._v("Các khóa học chính")]), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('router-link', {
    attrs: {
      "to": "/kindergarten-course"
    }
  }, [_vm._v("Khóa học tiếng anh mầm non")])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('router-link', {
    attrs: {
      "to": "/primary-course"
    }
  }, [_vm._v("Khóa học tiếng anh tiểu học")])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('router-link', {
    attrs: {
      "to": "secondary-course"
    }
  }, [_vm._v("Khóa học tiếng anh THCS")])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('router-link', {
    attrs: {
      "to": "/ielts"
    }
  }, [_vm._v("Khóa học tiếng anh luyện thi IELTS")])], 1), _vm._v(" "), _c('h3', {
    staticClass: "footer-info-subtitle"
  }, [_vm._v("Các khóa học ngắn hạn")]), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('router-link', {
    attrs: {
      "to": "/storytelling-course"
    }
  }, [_vm._v("Khóa học kể chuyện")])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('router-link', {
    attrs: {
      "to": "/steam-course"
    }
  }, [_vm._v("Khóa học Steam")])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('router-link', {
    attrs: {
      "to": "/presentation-course"
    }
  }, [_vm._v("Khóa học thuyết trình")])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('router-link', {
    attrs: {
      "to": "/toeic"
    }
  }, [_vm._v("Khóa luyện thi TOEIC")])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('router-link', {
    attrs: {
      "to": "/grammar-course"
    }
  }, [_vm._v("Khóa luyện bổ trợ ngữ âm - ngữ pháp")])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-info-link"
  }, [_c('router-link', {
    attrs: {
      "to": "/transition-course"
    }
  }, [_vm._v("Khóa luyện thi chuyển cấp")])], 1)])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/Footer.vue?vue&type=template&id=4e14226a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Footer.vue?vue&type=script&lang=js&
/* harmony default export */ var Footervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/common/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/common/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3f9ddfab"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-footer.js.map