exports.ids = [21,1,4,6,8,9,10,12];
exports.modules = {

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("68f0a628", content, true, context)
};

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtherCourseSection_vue_vue_type_style_index_0_id_aafa5c8a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtherCourseSection_vue_vue_type_style_index_0_id_aafa5c8a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtherCourseSection_vue_vue_type_style_index_0_id_aafa5c8a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtherCourseSection_vue_vue_type_style_index_0_id_aafa5c8a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OtherCourseSection_vue_vue_type_style_index_0_id_aafa5c8a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(122);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(123);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(124);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(125);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(126);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(127);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(128);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(129);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(130);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(131);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#other-course-kindergarten{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}#other-course-primary{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}#other-course-secondary{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}#other-course-ielts{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}#other-course-storytelling{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")}#other-course-steam{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ")}#other-course-presentation{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ")}#other-course-toeic{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")}#other-course-grammar{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")}#other-course-transition{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")}.main-course-section-heading,.other-course-section-heading{opacity:0;transform:translateY(100px)}@media screen and (min-width:740px) and (max-width:1023px){.other-course-section{margin:0!important}}@media (max-width:63.9375em){.section5{margin:30px 0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kindergarten.e5fb411.jpg";

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/primary.cc069f1.jpg";

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/secondary.aa7ee6e.jpg";

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ielts.471c957.jpg";

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/storytelling.2d19619.jpg";

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steam.eb70441.jpg";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/presentation.d91412f.jpg";

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/toeic.c5e1a7f.jpg";

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/grammar.e5794b1.jpg";

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/transition.da3cf34.jpg";

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dht.46228f6.png";

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ltb.c774609.png";

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/idp.7b79af5.png";

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slt.4f30a0c.png";

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/th.4dcf7d2.png";

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/csl.99678ca.png";

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rag.4a9ded5.png";

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("3a250dfb", content, true, context)
};

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/OtherCourseSection.vue?vue&type=template&id=aafa5c8a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "section section5"
  }, [_vm._ssrNode("<h2 class=\"main-course-section-heading\" style=\"margin-top: 0; text-align: center\">\n    CÁC CHƯƠNG TRÌNH HỌC CHÍNH TẠI UNI LANGUAGE HOUSE\n  </h2> "), _c('el-row', {
    staticClass: "other-course-section",
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 6
    }
  }, [_c('div', {
    staticClass: "other-course-content",
    attrs: {
      "id": "other-course-kindergarten"
    },
    on: {
      "click": function ($event) {
        return _vm.router('kindergarten-course');
      }
    }
  }, [_c('h2', [_vm._v("TIẾNG ANH MẪU GIÁO")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 6
    }
  }, [_c('div', {
    staticClass: "other-course-content",
    attrs: {
      "id": "other-course-primary"
    },
    on: {
      "click": function ($event) {
        return _vm.router('primary-course');
      }
    }
  }, [_c('h2', [_vm._v("TIẾNG ANH TIỂU HỌC")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 6
    }
  }, [_c('div', {
    staticClass: "other-course-content",
    attrs: {
      "id": "other-course-secondary"
    },
    on: {
      "click": function ($event) {
        return _vm.router('secondary-course');
      }
    }
  }, [_c('h2', [_vm._v("TIẾNG ANH THCS")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 6
    }
  }, [_c('div', {
    staticClass: "other-course-content",
    attrs: {
      "id": "other-course-ielts"
    },
    on: {
      "click": function ($event) {
        return _vm.router('ielts');
      }
    }
  }, [_c('h2', [_vm._v("TIẾNG ANH LUYỆN THI IELTS")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])])], 1), _vm._ssrNode(" <h2 class=\"other-course-section-heading\" style=\"margin: 30px 10px 10px 10px; text-align: center\">\n    CÁC CHƯƠNG TRÌNH HỌC NGẮN HẠN TẠI UNI LANGUAGE HOUSE\n  </h2> "), _c('el-row', {
    staticClass: "other-course-section",
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-storytelling"
    },
    on: {
      "click": function ($event) {
        return _vm.router('storytelling-course');
      }
    }
  }, [_c('h2', [_vm._v("KHÓA HỌC KỂ CHUYỆN")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-steam"
    },
    on: {
      "click": function ($event) {
        return _vm.router('steam-course');
      }
    }
  }, [_c('h2', [_vm._v("KHÓA HỌC STEAM")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-presentation"
    },
    on: {
      "click": function ($event) {
        return _vm.router('presentation-course');
      }
    }
  }, [_c('h2', [_vm._v("KHÓA HỌC THUYẾT TRÌNH")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-toeic"
    },
    on: {
      "click": function ($event) {
        return _vm.router('toeic');
      }
    }
  }, [_c('h2', [_vm._v("LUYỆN THI TOEIC")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-grammar"
    },
    on: {
      "click": function ($event) {
        return _vm.router('grammar-course');
      }
    }
  }, [_c('h2', [_vm._v("BỔ TRỢ NGỮ ÂM "), _c('br'), _vm._v(" -"), _c('br'), _vm._v(" NGỮ PHÁP")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "other-course",
    attrs: {
      "xs": 12,
      "sm": 12,
      "lg": 4
    }
  }, [_c('div', {
    staticClass: "other-course-content other-course-content-short-term",
    attrs: {
      "id": "other-course-transition"
    },
    on: {
      "click": function ($event) {
        return _vm.router('transition-course');
      }
    }
  }, [_c('h2', [_vm._v("LUYỆN THI CHUYỂN CẤP")]), _vm._v(" "), _c('div', {
    staticClass: "overlay-other-course"
  })])])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/OtherCourseSection.vue?vue&type=template&id=aafa5c8a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/OtherCourseSection.vue?vue&type=script&lang=js&
/* harmony default export */ var OtherCourseSectionvue_type_script_lang_js_ = ({
  mounted() {
    this.runAnimation();
  },
  methods: {
    runAnimation() {
      const gsap = this.$gsap;
      gsap.to('.other-course-section-heading', {
        scrollTrigger: '.other-course-section-heading',
        y: 0,
        opacity: 1,
        duration: .5
      });
      gsap.to('.main-course-section-heading', {
        scrollTrigger: '.main-course-section-heading',
        y: 0,
        opacity: 1,
        duration: .5
      });
    },
    router(course) {
      this.$router.push({
        path: `/${course}`
      });
    }
  }
});
// CONCATENATED MODULE: ./components/common/OtherCourseSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_OtherCourseSectionvue_type_script_lang_js_ = (OtherCourseSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/common/OtherCourseSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(120)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_OtherCourseSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "578388ac"
  
)

/* harmony default export */ var OtherCourseSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnersCarousel_vue_vue_type_style_index_0_id_5c43133e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnersCarousel_vue_vue_type_style_index_0_id_5c43133e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnersCarousel_vue_vue_type_style_index_0_id_5c43133e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnersCarousel_vue_vue_type_style_index_0_id_5c43133e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnersCarousel_vue_vue_type_style_index_0_id_5c43133e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".partners-carousel{align-items:center;background:transparent;display:flex;flex-direction:column;height:300px;justify-content:center;margin:30px 0;text-align:center}.partners-carousel-heading{color:#28788c;font-size:34px;font-style:italic;opacity:0;transform:translateY(100px)}@keyframes scroll{0%{transform:translateX(0)}to{transform:translateX(-1750px)}}.slider{background:#fff;height:150px;margin:auto;overflow:hidden;position:relative;width:100vw}.slider:after,.slider:before{background:linear-gradient(90deg,#fff 0,hsla(0,0%,100%,0));content:\"\";height:150px;position:absolute;width:200px;z-index:2}.slider:after{right:0;top:0;transform:rotate(180deg)}.slider:before{left:0;top:0}.slider .slide-track{animation:scroll 20s linear infinite;display:flex;width:3500px}.slider .slide{padding:0 50px}.slide img,.slider .slide{height:150px;width:150px}@media screen and (max-width:739px){.partners-carousel h2{font-size:22px;margin:auto 20px}}@media screen and (min-width:740px) and (max-width:1023px){.partners-carousel h2{font-size:30px}}@media (max-width:1024px){.slider:after,.slider:before{height:150px;position:absolute;width:100px;z-index:2}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/PartnersCarousel.vue?vue&type=template&id=5c43133e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "partners-carousel"
  }, [_vm._ssrNode("<h2 class=\"partners-carousel-heading\">ĐỐI TÁC CỦA UNI LANGUAGE HOUSE SƠN LA</h2> <div class=\"slider\"><div class=\"slide-track\"><div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(132)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(133)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(134)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(135)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(136)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(137)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(138)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(132)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(133)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(134)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(135)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(136)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(137)) + " alt></div> <div class=\"slide\"><img" + _vm._ssrAttr("src", __webpack_require__(138)) + " alt></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/PartnersCarousel.vue?vue&type=template&id=5c43133e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/PartnersCarousel.vue?vue&type=script&lang=js&
/* harmony default export */ var PartnersCarouselvue_type_script_lang_js_ = ({
  mounted() {
    this.runAnimation();
  },
  methods: {
    runAnimation() {
      const gsap = this.$gsap;
      gsap.to('.partners-carousel-heading', {
        scrollTrigger: '.partners-carousel-heading',
        opacity: 1,
        duration: .5,
        y: 0
      });
    }
  }
});
// CONCATENATED MODULE: ./components/common/PartnersCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_PartnersCarouselvue_type_script_lang_js_ = (PartnersCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/common/PartnersCarousel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_PartnersCarouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b484998a"
  
)

/* harmony default export */ var PartnersCarousel = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("633ada45", content, true, context)
};

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("3944399c", content, true, context)
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

/***/ 182:
/***/ (function(module, exports) {

module.exports =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel.vue?vue&type=template&id=40da5be2&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _vm.$slots.default && _vm.$slots.default.length
    ? _c(
        "div",
        {
          key: _vm.$slots.default.length,
          staticClass: "ssr-carousel",
          attrs: { "data-ssrc-id": _vm.scopeId },
          on: {
            keyup: function ($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
              )
                return null
              return _vm.onTab.apply(null, arguments)
            },
          },
        },
        [
          _c("style", {
            tag: "component",
            domProps: { innerHTML: _vm._s(_vm.instanceStyles) },
          }),
          _c(
            "div",
            { staticClass: "ssr-carousel-slides" },
            [
              _c("div", {
                ref: "peekValues",
                staticClass: "ssr-peek-values",
                style: _vm.peekStyles,
              }),
              _c(
                "div",
                _vm._g(
                  {
                    ref: "mask",
                    staticClass: "ssr-carousel-mask",
                    class: {
                      pressing: _vm.pressing,
                      disabled: _vm.disabled,
                      "no-mask": _vm.overflowVisible,
                      "not-draggable": _vm.noDrag,
                    },
                  },
                  _vm.maskListeners
                ),
                [
                  _c(
                    "ssr-carousel-track",
                    _vm._b(
                      {
                        ref: "track",
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function () {
                                return [_vm._t("default")]
                              },
                              proxy: true,
                            },
                            _vm.hasPeekClones
                              ? {
                                  key: "clones",
                                  fn: function () {
                                    return [_vm._t("default")]
                                  },
                                  proxy: true,
                                }
                              : null,
                          ],
                          null,
                          true
                        ),
                      },
                      "ssr-carousel-track",
                      {
                        dragging: _vm.dragging,
                        trackTranslateX: _vm.trackTranslateX,
                        slideOrder: _vm.slideOrder,
                        activeSlides: _vm.activeSlides,
                        leftPeekingSlideIndex: _vm.leftPeekingSlideIndex,
                        rightPeekingSlideIndex: _vm.rightPeekingSlideIndex,
                      },
                      false
                    )
                  ),
                ],
                1
              ),
              _vm.showArrows
                ? _c(
                    "ssr-carousel-arrows",
                    _vm._b(
                      {
                        on: { back: _vm.back, next: _vm.next },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "back",
                              fn: function (props) {
                                return [_vm._t("back-arrow", null, null, props)]
                              },
                            },
                            {
                              key: "next",
                              fn: function (props) {
                                return [_vm._t("next-arrow", null, null, props)]
                              },
                            },
                          ],
                          null,
                          true
                        ),
                      },
                      "ssr-carousel-arrows",
                      {
                        index: _vm.index,
                        pages: _vm.pages,
                        shouldLoop: _vm.shouldLoop,
                        pageLabel: _vm.pageLabel,
                      },
                      false
                    )
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm.showDots
            ? _c(
                "ssr-carousel-dots",
                _vm._b(
                  {
                    on: { goto: _vm.gotoDot },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "dot",
                          fn: function (props) {
                            return [_vm._t("dot", null, null, props)]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  "ssr-carousel-dots",
                  {
                    boundedIndex: _vm.boundedIndex,
                    pages: _vm.pages,
                    pageLabel: _vm.pageLabel,
                  },
                  false
                )
              )
            : _vm._e(),
          _c(
            "div",
            {
              staticClass: "ssr-carousel-visually-hidden",
              attrs: { "aria-live": "polite", "aria-atomic": "true" },
            },
            [_vm._v(_vm._s(_vm.currentSlideMessage))]
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/ssr-carousel.vue?vue&type=template&id=40da5be2&lang=pug&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-arrows.vue?vue&type=template&id=559c4b35&lang=pug&
var ssr_carousel_arrowsvue_type_template_id_559c4b35_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c("div", { staticClass: "ssr-carousel-arrows" }, [
    _c(
      "button",
      {
        staticClass: "ssr-carousel-back-button",
        attrs: {
          "aria-label": `Previous ${_vm.pageLabel}`,
          "aria-disabled": _vm.backDisabled,
        },
        on: {
          click: function ($event) {
            return _vm.$emit("back")
          },
        },
      },
      [
        _vm._t(
          "back",
          function () {
            return [_c("span", { staticClass: "ssr-carousel-back-icon" })]
          },
          { disabled: _vm.backDisabled }
        ),
      ],
      2
    ),
    _c(
      "button",
      {
        staticClass: "ssr-carousel-next-button",
        attrs: {
          "aria-label": `Next ${_vm.pageLabel}`,
          "aria-disabled": _vm.nextDisabled,
        },
        on: {
          click: function ($event) {
            return _vm.$emit("next")
          },
        },
      },
      [
        _vm._t(
          "next",
          function () {
            return [_c("span", { staticClass: "ssr-carousel-next-icon" })]
          },
          { disabled: _vm.nextDisabled }
        ),
      ],
      2
    ),
  ])
}
var ssr_carousel_arrowsvue_type_template_id_559c4b35_lang_pug_staticRenderFns = []
ssr_carousel_arrowsvue_type_template_id_559c4b35_lang_pug_render._withStripped = true


// CONCATENATED MODULE: ./src/ssr-carousel-arrows.vue?vue&type=template&id=559c4b35&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-arrows.vue?vue&type=script&lang=coffee&
/* harmony default export */ var ssr_carousel_arrowsvue_type_script_lang_coffee_ = ({
  props: {
    index: Number,
    pages: Number,
    shouldLoop: Boolean,
    pageLabel: String
  },
  computed: {
    // Determine if button should be disabled because we're at the limits
    backDisabled: function () {
      if (!this.shouldLoop) {
        return this.index === 0;
      }
    },
    nextDisabled: function () {
      if (!this.shouldLoop) {
        return this.index === this.pages - 1;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel-arrows.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carousel_arrowsvue_type_script_lang_coffee_ = (ssr_carousel_arrowsvue_type_script_lang_coffee_); 
// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-arrows.vue?vue&type=style&index=0&id=559c4b35&prod&lang=stylus&
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/ssr-carousel-arrows.vue?vue&type=style&index=0&id=559c4b35&prod&lang=stylus&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/ssr-carousel-arrows.vue






/* normalize component */

var component = normalizeComponent(
  src_ssr_carousel_arrowsvue_type_script_lang_coffee_,
  ssr_carousel_arrowsvue_type_template_id_559c4b35_lang_pug_render,
  ssr_carousel_arrowsvue_type_template_id_559c4b35_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ssr_carousel_arrows = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-dots.vue?vue&type=template&id=98a1e6f8&lang=pug&
var ssr_carousel_dotsvue_type_template_id_98a1e6f8_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    { staticClass: "ssr-carousel-dots" },
    _vm._l(_vm.pages, function (i) {
      return _c(
        "button",
        {
          key: i,
          staticClass: "ssr-carousel-dot-button",
          attrs: {
            "aria-label": `Go to ${_vm.pageLabel} ${i}`,
            "aria-disabled": _vm.isDisabled(i),
          },
          on: {
            click: function ($event) {
              return _vm.$emit("goto", i - 1)
            },
          },
        },
        [
          _vm._t(
            "dot",
            function () {
              return [_c("span", { staticClass: "ssr-carousel-dot-icon" })]
            },
            { index: i, disabled: _vm.isDisabled(i) }
          ),
        ],
        2
      )
    }),
    0
  )
}
var ssr_carousel_dotsvue_type_template_id_98a1e6f8_lang_pug_staticRenderFns = []
ssr_carousel_dotsvue_type_template_id_98a1e6f8_lang_pug_render._withStripped = true


// CONCATENATED MODULE: ./src/ssr-carousel-dots.vue?vue&type=template&id=98a1e6f8&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-dots.vue?vue&type=script&lang=coffee&
/* harmony default export */ var ssr_carousel_dotsvue_type_script_lang_coffee_ = ({
  props: {
    boundedIndex: Number,
    pages: Number,
    pageLabel: String
  },
  methods: {
    // Check if dot index shuold be disabled
    isDisabled: function (index) {
      return this.boundedIndex === index - 1;
    }
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel-dots.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carousel_dotsvue_type_script_lang_coffee_ = (ssr_carousel_dotsvue_type_script_lang_coffee_); 
// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-dots.vue?vue&type=style&index=0&id=98a1e6f8&prod&lang=stylus&
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/ssr-carousel-dots.vue?vue&type=style&index=0&id=98a1e6f8&prod&lang=stylus&

// CONCATENATED MODULE: ./src/ssr-carousel-dots.vue






/* normalize component */

var ssr_carousel_dots_component = normalizeComponent(
  src_ssr_carousel_dotsvue_type_script_lang_coffee_,
  ssr_carousel_dotsvue_type_template_id_98a1e6f8_lang_pug_render,
  ssr_carousel_dotsvue_type_template_id_98a1e6f8_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ssr_carousel_dots = (ssr_carousel_dots_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-track.vue?vue&type=script&lang=coffee&
var interactiveSelector,
    indexOf = [].indexOf;
interactiveSelector = 'a, button, input, textarea, select';
/* harmony default export */ var ssr_carousel_trackvue_type_script_lang_coffee_ = ({
  props: {
    dragging: Boolean,
    trackTranslateX: Number,
    slideOrder: Array,
    activeSlides: Array,
    leftPeekingSlideIndex: Number,
    rightPeekingSlideIndex: Number
  },
  data: function () {
    return {
      // Should the track element be an ul
      renderAsList: false,
      // Should the track element be a tablist
      renderAsTablist: false
    };
  },
  // Set tabindex of inactive slides on mount
  mounted: function () {
    this.denyTabindex(this.inactiveSlides);
    return this.denyTabindex(this.clonedSlides);
  },
  computed: {
    // The HTML element of the track
    trackHTMLElement: function () {
      if (this.renderAsList) {
        return 'ul';
      } else {
        return 'div';
      }
    },
    // Get the count of non-cloned slides
    uniqueSlidesCount: function () {
      return this.slideOrder.length;
    },
    // Get the total slides count, including clones
    allSlidesCount: function () {
      return this.getSlideComponents().length;
    },
    // Check if there are cloned slides
    hasClonedSlides: function () {
      return this.allSlidesCount > this.uniqueSlidesCount;
    },
    // Make an array of inactive slide indices
    inactiveSlides: function () {
      var ref;
      return function () {
        var results = [];

        for (var j = 0, ref = this.uniqueSlidesCount; 0 <= ref ? j < ref : j > ref; 0 <= ref ? j++ : j--) {
          results.push(j);
        }

        return results;
      }.apply(this).filter(index => {
        return indexOf.call(this.activeSlides, index) < 0;
      });
    },
    // An array of the cloned slides indices
    clonedSlides: function () {
      var ref, ref1;
      return function () {
        var results = [];

        for (var j = ref = this.uniqueSlidesCount, ref1 = this.allSlidesCount; ref <= ref1 ? j < ref1 : j > ref1; ref <= ref1 ? j++ : j--) {
          results.push(j);
        }

        return results;
      }.apply(this);
    },
    // Styles that are used to position the track
    styles: function () {
      if (this.trackTranslateX) {
        return {
          transform: `translateX(${this.trackTranslateX}px)`
        };
      }
    }
  },
  // Update the tabindex of interactive elements when slides change
  watch: {
    activeSlides: function () {
      this.allowTabindex(this.activeSlides);
      return this.denyTabindex(this.inactiveSlides);
    }
  },
  methods: {
    // Make the slides to render into the track
    makeSlides: function () {
      return this.getSlideComponents().map((vnode, index) => {
        var cssClass, isPeekingClone, peekingIndex, ref, ref1, slideCount;
        vnode = this.makeReactiveVnode(vnode);

        if (index === 0 && vnode.tag === 'li') {
          // Check if we are rendering a list of elements
          this.renderAsList = true;
        }

        if (index === 0 && (vnode != null ? (ref = vnode.data) != null ? (ref1 = ref.attrs) != null ? ref1.role : void 0 : void 0 : void 0) === 'tab') {
          // Check if we are rendering a tablist
          this.renderAsTablist = true;
        } // This is a peeking clone if it's index is greater than the slide count


        slideCount = this.uniqueSlidesCount;
        isPeekingClone = index >= slideCount;
        peekingIndex = index - slideCount; // Add the slide class using staticClass since it isn't reactive to data

        cssClass = 'ssr-carousel-slide';

        if (vnode.data.staticClass) {
          vnode.data.staticClass += ` ${cssClass}`;
        } else {
          vnode.data.staticClass = cssClass;
        } // Order the slide, like for looping


        if (!isPeekingClone) {
          vnode.data.style.order = this.slideOrder[index] || 0;
        } else {
          // Or put at the beginning / end if peeking
          vnode.data.style.order = function () {
            switch (false) {
              case peekingIndex !== this.leftPeekingSlideIndex:
                return '-1';

              case peekingIndex !== this.rightPeekingSlideIndex:
                return this.slideOrder.length;
            }
          }.call(this);
        } // Hide cloned slides that aren't involved in peeking


        if (isPeekingClone && peekingIndex !== this.leftPeekingSlideIndex && peekingIndex !== this.rightPeekingSlideIndex) {
          vnode.data.style.display = 'none';
        } // Make peeking clones and slides not in viewport as aria-hidden


        if (isPeekingClone || indexOf.call(this.activeSlides, index) < 0) {
          vnode.data.attrs['aria-hidden'] = 'true';
        } // Prevent duplicate keys on clones


        if (isPeekingClone && vnode.key != null) {
          vnode.key += '-clone-' + index;
        } // Return modified vnode


        return vnode;
      });
    },
    // Get the list of non-text slides, including peeking clones. This doesn't
    // work as a computed function
    getSlideComponents: function () {
      return [...(this.$slots.default || []), ...(this.$slots.clones || [])].filter(function (vnode) {
        return !vnode.text;
      });
    },
    // Makes a clone of the vnode properties we'll be updating so the changes
    // get rendered. Based on:
    // https://github.com/vuejs/vue/issues/6052#issuecomment-313705168
    makeReactiveVnode: function (vnode) {
      var newVnode;

      if (!vnode.data) {
        // Expect a data object.  When it doesn't exist, it's a sign this this
        // vnode can't be manipulated vue-ssr-carousel.
        console.error("vnode has no data", vnode);
      } // Make the new vnode and data


      newVnode = { ...vnode
      };
      newVnode.data = { ...vnode.data
      }; // Clone style property. String styles will be on staticStyle so we can
      // ignore them.

      newVnode.data.style = { ...vnode.data.style
      }; // Clone attrs property

      newVnode.data.attrs = { ...vnode.data.attrs
      }; // Return the clone

      return newVnode;
    },
    // Prevent tabbing to interactive elements in slides with the passed in
    // index values
    denyTabindex: function (indices) {
      return this.setTabindex(indices, -1);
    },
    // Allow tabindex on interactive elements in slides with the passed in
    // index values
    allowTabindex: function (indices) {
      return this.setTabindex(indices, 0);
    },
    // Set tabindex value on interactive elements in slides
    setTabindex: function (slideIndices, tabindexValue) {
      var el, j, len, ref, results;
      ref = this.getSlideElementsByIndices(slideIndices);
      results = [];

      for (j = 0, len = ref.length; j < len; j++) {
        el = ref[j]; // Set tabindex value on the slide, like in the case that the slide is
        // an <a>

        if (el.matches(interactiveSelector)) {
          el.tabIndex = tabindexValue;
        } // Set tabindex values on all interactive children


        results.push(el.querySelectorAll(interactiveSelector).forEach(function (el) {
          return el.tabIndex = tabindexValue;
        }));
      }

      return results;
    },
    // Get the slide elements that match the array of indices
    getSlideElementsByIndices: function (slideIndices) {
      return Array.from(this.$el.children).filter(function (el, i) {
        return indexOf.call(slideIndices, i) >= 0;
      });
    }
  },
  // Render the track and slotted slides
  render: function (create) {
    return create(this.trackHTMLElement, {
      attrs: {
        role: this.renderAsTablist ? "tablist" : void 0
      },
      class: ['ssr-carousel-track', {
        dragging: this.dragging
      }],
      style: this.styles
    }, this.makeSlides());
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel-track.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carousel_trackvue_type_script_lang_coffee_ = (ssr_carousel_trackvue_type_script_lang_coffee_); 
// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel-track.vue?vue&type=style&index=0&id=a6cde5a6&prod&lang=stylus&
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/ssr-carousel-track.vue?vue&type=style&index=0&id=a6cde5a6&prod&lang=stylus&

// CONCATENATED MODULE: ./src/ssr-carousel-track.vue
var ssr_carousel_track_render, ssr_carousel_track_staticRenderFns





/* normalize component */

var ssr_carousel_track_component = normalizeComponent(
  src_ssr_carousel_trackvue_type_script_lang_coffee_,
  ssr_carousel_track_render,
  ssr_carousel_track_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ssr_carousel_track = (ssr_carousel_track_component.exports);
// CONCATENATED MODULE: ./src/concerns/accessibility.coffee
/*
Code related to supporting keyboard interaction and screen readers
*/
/* harmony default export */ var accessibility_coffee = ({
  // The label to use for pagination
  props: {
    paginationLabel: String
  },
  // Store whether the user appears to be using keyboard to navigate
  data: function () {
    return {
      usingKeyboard: false
    };
  },
  computed: {
    // Determine the descriptor to use in aria messages
    pageLabel: function () {
      switch (false) {
        case !this.paginationLabel:
          return this.paginationLabel;

        case !this.paginateBySlide:
          return "Slide";

        default:
          return "Page";
      }
    },
    // Make the current slide message
    // https://www.w3.org/WAI/tutorials/carousels/functionality/#announce-the-current-item
    currentSlideMessage: function () {
      return `${this.pageLabel} ${this.boundedIndex + 1} of ${this.pages}`;
    }
  },
  watch: {
    // When switching to keyboard navigation, I could never reproduce a scenario
    // where the focused elements wasn't the first slide, so I'm resetting the
    // active page to the first slide
    usingKeyboard: function () {
      if (this.usingKeyboard) {
        return this.goto(0);
      }
    }
  },
  methods: {
    // Once a user uses tab on the carousel, mark them as using their keyboard.
    // This is cleared by the onPointerDown method.
    onTab: function () {
      return this.usingKeyboard = true;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/autoplay.coffee
/*
Code related to auotplay features of the carousel
*/
/* harmony default export */ var autoplay_coffee = ({
  props: {
    // A delay provided in seconds for the autoplay. 0 is disabled
    autoplayDelay: {
      type: Number,
      default: 0
    },
    // Should we pause on hover
    pauseOnFocus: {
      type: Boolean,
      default: true
    }
  },
  // Start autolaying on mount
  mounted: function () {
    return this.autoplayStart();
  },
  beforeDestroy: function () {
    return this.autoplayStop();
  },
  computed: {
    // Conditions that result in pausing autoplay
    autoplayPaused: function () {
      switch (false) {
        // Always pause when using keyboard navigation
        case !this.usingKeyboard:
          return true;
        // Stop animation if window is hidden or if carousel is focused

        case !this.pauseOnFocus:
          return this.windowHidden || this.isFocused;
      }
    }
  },
  watch: {
    // Respond to conditions that may automatically pause autoplaying
    autoplayPaused: function (paused) {
      if (paused) {
        return this.autoplayStop();
      } else {
        return this.autoplayStart();
      }
    }
  },
  methods: {
    autoplayStart: function () {
      // Require a delay amount
      if (!this.autoplayDelay) {
        return;
      } // Don't loop if we only have one page


      if (!this.pages) {
        return;
      } // Start autoplaying


      return this.autoPlayInterval = setInterval(() => {
        if (!this.autoplayPaused) {
          return this.autoplayNext();
        }
      }, this.autoplayDelay * 1000);
    },
    autoplayStop: function () {
      return clearInterval(this.autoPlayInterval);
    },
    // Advance to the next slide
    autoplayNext: function () {
      if (this.shouldLoop || this.index < this.pages - 1) {
        return this.next();
      } else {
        return this.goto(0); // Reset because loop wasn't enabled
      }
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/dimensions.coffee
/*
Code related to measuring the size of the carousel after mounting
*/
/* harmony default export */ var dimensions_coffee = ({
  data: function () {
    return {
      viewportWidth: null,
      // Width of the viewport, for media query calculation
      carouselWidth: null,
      // Width of a page of the carousel
      gutterWidth: 0 // Computed width of gutters, since they support css vars

    };
  },
  // Add resize listening
  mounted: function () {
    this.onResize(); // Resize observer listens for the element itself to change dimensions

    this.resizeObserver = new ResizeObserver(this.onResize);
    return this.resizeObserver.observe(this.$el);
  },
  beforeDestroy: function () {
    var ref;
    return (ref = this.resizeObserver) != null ? ref.disconnect() : void 0;
  },
  computed: {
    // The width of a page of slides, which may be less than the carouselWidth
    // if there is peeking. This includes the affect of gutters.
    pageWidth: function () {
      return this.carouselWidth - this.combinedPeek;
    },
    // Calculate the width of a slide based on client side measured pageWidth
    // rather than measuring it explicitly in the DOM. This value includes the
    // gutter.
    slideWidth: function () {
      return this.pageWidth / this.currentSlidesPerPage;
    },
    // Calculate the width of the whole track from the slideWidth.
    trackWidth: function () {
      if (this.isVariableWidth) {
        return this.measuredTrackWidth + this.gutterWidth;
      } else {
        return this.slideWidth * this.slidesCount;
      }
    },
    // Figure out the width of the last page, which may not have enough slides
    // to fill it.
    lastPageWidth: function () {
      var slidesOnLastPage, slidesPerPage, width; // Determine how many slides are on the final page of pagination. If the
      // remainder was 0, that means the page is flush with slides, so swap
      // the 0 for the max amount.

      slidesPerPage = this.currentSlidesPerPage;
      slidesOnLastPage = this.slidesCount % slidesPerPage;

      if (slidesOnLastPage === 0) {
        slidesOnLastPage = slidesPerPage;
      } // Turn the slide count into a width value


      width = slidesOnLastPage * this.slideWidth;
      return width;
    },
    // The ending x value, only used when not looping. The peeking values in
    // here result in the final page using the left peeking value and the
    // actualy peeking appearing to apply to the left. The +1 is to fix subpixel
    // rounding issues.
    endX: function () {
      if (this.disabled) {
        return 0;
      } else {
        return this.pageWidth - this.trackWidth - this.peekLeftPx + this.peekRightPx + 1;
      }
    },
    // Check if the drag is currently out bounds
    isOutOfBounds: function () {
      return this.currentX > 0 || this.currentX < this.endX;
    }
  },
  methods: {
    // Measure the component width for various calculations. Using
    // getBoundingClientRect so we can get fractional values.  We also need
    // the width of the gutter since that's effectively part of the page.
    onResize: function () {
      var firstSlide, ref;

      if (((ref = this.$el) != null ? ref.nodeType : void 0) !== Node.ELEMENT_NODE) {
        return;
      }

      if (!(firstSlide = this.$refs.track.$el.firstElementChild)) {
        return;
      }

      this.gutterWidth = parseInt(getComputedStyle(firstSlide).marginRight);
      this.carouselWidth = this.$el.getBoundingClientRect().width + this.gutterWidth;
      this.viewportWidth = window.innerWidth;
      this.capturePeekingMeasurements();

      if (this.isVariableWidth) {
        return this.captureTrackWidth();
      }
    },
    // Make the width style that gives a slide it's width given
    // slidesPerPage. Reduce this width by the gutter if present
    makeBreakpointSlideWidthStyle: function (breakpoint) {
      if (this.isVariableWidth) {
        return;
      }

      return `${this.scopeSelector} .ssr-carousel-slide {
	width: ${this.makeSlideWidthCalc(breakpoint)};
}`;
    },
    // Build the calc string which makes a percentage width for a slide and
    // reduces it by combined peeking and gutter influence. The computed
    // style this produces should have an equal value to the `slideWidth`
    // computed property which is client side JS dependent.
    makeSlideWidthCalc: function (breakpoint) {
      var gutter, isDisabled, peekLeft, peekRight, slidesPerPage;
      isDisabled = this.isDisabledAtBreakpoint(breakpoint);
      slidesPerPage = this.getResponsiveValue('slidesPerPage', breakpoint);
      gutter = this.getResponsiveValue('gutter', breakpoint); // A common use case when not looping is to have a larger peek on just the
      // right.  But when disabled, this looks strange.  So this balances out
      // the peeking in the disbaled state.

      peekLeft = this.getResponsiveValue('peekLeft', breakpoint);

      if (this.matchPeekWhenDisabled && isDisabled) {
        peekRight = peekLeft;
      } else {
        peekRight = this.getResponsiveValue('peekRight', breakpoint);
      } // Render the styles


      return `calc( ${100 / slidesPerPage}% - (${this.autoUnit(peekLeft)} + ${this.autoUnit(peekRight)}) / ${slidesPerPage} - (${this.autoUnit(gutter)} * ${slidesPerPage - 1}) / ${slidesPerPage} )`;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/dragging.coffee
/*
Code related to handling dragging of the track
*/
var notPassive, passive;
passive = {
  passive: true
};
notPassive = {
  passive: false
};
/* harmony default export */ var dragging_coffee = ({
  props: {
    // Boundary drag dampening modifier. Increase to allow greater travel outside
    // the boundaries.
    boundaryDampening: {
      type: Number,
      default: 0.6
    },
    // The percentage of a pageWidth that was dragged before we advance to
    // another page on slide
    dragAdvanceRatio: {
      type: Number,
      default: .33
    },
    // The ratio of X:Y mouse travel. Decrease this number to allow for greater
    // y dragging before the drag is cancelled.
    verticalDragTreshold: {
      type: Number,
      default: 1
    },
    // Turn off draggability
    noDrag: Boolean
  },
  data: function () {
    return {
      pressing: false,
      // The user pressing pointer down
      dragging: false,
      // The user has translated while pointer was down
      isTouchDrag: false,
      // Is the browser firing touch events
      startPointer: null,
      // Where was the mouse when the drag started
      lastPointer: null,
      // Where was the mouse on the last move event
      dragVelocity: null,
      // The px/tick while dragging, negative is rightward
      dragDirectionRatio: null // The ratio of horizontal vs vertical dragging

    };
  },
  // Cleanup listeners
  beforeDestroy: function () {
    window.removeEventListener('mousemove', this.onPointerMove, passive);
    window.removeEventListener('mouseup', this.onPointerUp, passive);
    window.removeEventListener('touchmove', this.onPointerMove, passive);
    window.removeEventListener('touchend', this.onPointerUp, passive);
    return window.removeEventListener('touchmove', this.onWinMove, notPassive);
  },
  computed: {
    // The current slide or page index. It rounds differently depending on the
    // direction of the velocity.  So that it eases to a stop in the direction
    // the user was dragging.
    dragIndex: function () {
      switch (false) {
        // If there is very little velocity, go to the closet page
        case !(Math.abs(this.dragVelocity) <= 2):
          return Math.round(this.fractionalIndex);
        // User was moving forward

        case !(this.dragVelocity < 0):
          return Math.ceil(this.fractionalIndex);

        default:
          // User was moving backward
          return Math.floor(this.fractionalIndex);
      }
    },
    // Determine the current index given the currentX as a fraction. For
    // instance, when dragging forward, it will be like 0.1 and when you've
    // dragged almost a full page, forward it would be 0.9.  This got
    // complicated because the final page may not have a full compliment of
    // slides like if we have 2 per page and 3 slides.  When you have tweened
    // to the 2nd page, the fractionalIndex should be 2 even though you
    // haven't traveled the same width as it took to get from 1 to 2.
    fractionalIndex: function () {
      var distanceIntoPage, isLastPage, pageIndex, pageProgressPercent, pageWidth, remainingSlides, setIndex, slidesPerPage, widthDivisor, x;

      if (!this.trackWidth) {
        return 0;
      } // Work in positive numbers


      x = this.currentX * -1; // Figure out what set we're in, like if, through looping, we've gone
      // through all the pages multiple times.

      setIndex = Math.floor(x / this.trackWidth); // Figure out the index of last page of the set that has been fully
      // scrolled into. Not using modulo for this because I got rounding errors.

      widthDivisor = this.paginateBySlide ? this.slideWidth : this.pageWidth;
      pageIndex = Math.floor((x - setIndex * this.trackWidth) / widthDivisor); // Figure out the progress into the current page

      distanceIntoPage = x - setIndex * this.trackWidth - pageIndex * widthDivisor; // Determine if we're on the last page. If we're not looping, an extra
      // "page" of slides is treated as part of the last page because of how we
      // end with the slides flush with the right edge.

      slidesPerPage = this.currentSlidesPerPage;

      remainingSlides = function () {
        switch (false) {
          case !this.shouldLoop:
            return this.slidesCount - pageIndex * slidesPerPage;

          default:
            return this.slidesCount - (pageIndex + 1) * slidesPerPage;
        }
      }.call(this);

      isLastPage = remainingSlides <= slidesPerPage; // Make a percentage of travel into the page

      pageWidth = isLastPage ? this.lastPageWidth : widthDivisor;
      pageProgressPercent = distanceIntoPage / pageWidth; // Return the final value by adding all the passed index values

      return pageProgressPercent + setIndex * this.pages + pageIndex;
    },
    // Determine if the user is dragging vertically
    isVerticalDrag: function () {
      if (!this.dragDirectionRatio) {
        return;
      }

      return this.dragDirectionRatio < this.verticalDragTreshold;
    },
    // If we're horiztonally swiping on a touch device, prevent vertical scroll
    preventVerticalScroll: function () {
      return this.pressing && this.isTouchDrag && !this.isVerticalDrag;
    }
  },
  watch: {
    // Watch for mouse move changes when the user starts dragging
    pressing: function () {
      var moveEvent, upEvent; // Determine the type of event

      [moveEvent, upEvent] = this.isTouchDrag ? ['touchmove', 'touchend'] : ['mousemove', 'mouseup']; // Pointer is down, start watching for drags

      if (this.pressing) {
        window.addEventListener(moveEvent, this.onPointerMove, passive);
        window.addEventListener(upEvent, this.onPointerUp, passive);
        window.addEventListener('contextmenu', this.onPointerUp, passive);
        this.dragVelocity = 0; // Reset any previous velocity

        this.preventContentDrag();
        this.stopTweening();
      } else {
        // Tween so the track is in bounds if it was out
        // The pointer is up, so tween to final position
        if (this.isOutOfBounds && !this.shouldLoop) {
          if (this.currentX >= 0) {
            this.gotoStart();
          } else {
            this.gotoEnd();
          } // If rendering variable width slides, don't come to a rest at an index

        } else if (this.isVariableWidth) {
          this.tweenToStop(); // If user was vertically dragging, reset the index
        } else if (this.isVerticalDrag) {
          this.goto(this.index);
        } else {
          // Handle normal swiping
          this.goto(this.dragIndex);
        } // Cleanup vars and listeners


        window.removeEventListener(moveEvent, this.onPointerMove, passive);
        window.removeEventListener(upEvent, this.onPointerUp, passive);
        window.removeEventListener('contextmenu', this.onPointerUp, passive);
        this.dragging = false;
        this.startPointer = this.lastPointer = this.dragDirectionRatio = null;
      } // Fire events


      if (this.pressing) {
        return this.$emit('press');
      } else {
        return this.$emit('release');
      }
    },
    // Fire events related to dragging
    dragging: function () {
      if (this.dragging) {
        return this.$emit('drag:start');
      } else {
        return this.$emit('drag:end');
      }
    },
    // If the user is dragging vertically, end the drag based on the assumption
    // that the user is attempting to scroll the page via touch rather than
    // pan the carousel.
    isVerticalDrag: function () {
      if (!(this.isVerticalDrag && this.isTouchDrag)) {
        return;
      }

      return this.pressing = false;
    },
    // Stop vertical scrolling by listening for touchmove events on the body
    // and cancel them. Need to explicitly set pasive because some mobile
    // browsers set to true by default.
    preventVerticalScroll: function (shouldPrevent) {
      if (shouldPrevent) {
        return window.addEventListener('touchmove', this.stopEvent, notPassive);
      } else {
        return window.removeEventListener('touchmove', this.stopEvent, notPassive);
      }
    }
  },
  methods: {
    // Cancel an Event
    stopEvent: function (e) {
      return e.preventDefault();
    },
    // Keep track of whether user is dragging
    onPointerDown: function (pointerEvent) {
      this.isTouchDrag = typeof TouchEvent !== "undefined" && TouchEvent !== null && pointerEvent instanceof TouchEvent;
      this.startPointer = this.lastPointer = this.getPointerCoords(pointerEvent);
      this.pressing = true;
      return this.usingKeyboard = false;
    },
    // Keep track of release of press
    onPointerUp: function () {
      return this.pressing = false;
    },
    // Keep x values up to date while dragging
    onPointerMove: function (pointerEvent) {
      var pointer;

      if (!this.dragging) {
        // Mark the carousel as dragging, which is used to disable clicks
        this.dragging = true;
      } // Calculated how much drag has happened since the list move


      pointer = this.getPointerCoords(pointerEvent);
      this.dragVelocity = pointer.x - this.lastPointer.x;
      this.targetX += this.dragVelocity;
      this.lastPointer = pointer; // Caculate the drag direction ratio

      this.dragDirectionRatio = Math.abs((pointer.x - this.startPointer.x) / (pointer.y - this.startPointer.y)); // Update the track position

      return this.currentX = this.applyBoundaryDampening(this.targetX);
    },
    // Helper to get the x position of either a touch or mouse event
    getPointerCoords: function (pointerEvent) {
      var ref, ref1, ref2, ref3;
      return {
        x: ((ref = pointerEvent.touches) != null ? (ref1 = ref[0]) != null ? ref1.pageX : void 0 : void 0) || pointerEvent.pageX,
        y: ((ref2 = pointerEvent.touches) != null ? (ref3 = ref2[0]) != null ? ref3.pageY : void 0 : void 0) || pointerEvent.pageY
      };
    },
    // Prevent dragging from exceeding the min/max edges
    applyBoundaryDampening: function (x) {
      switch (false) {
        case !this.shouldLoop:
          return x;
        // Don't apply dampening

        case !(x > 0):
          return Math.pow(x, this.boundaryDampening);

        case !(x < this.endX):
          return this.endX - Math.pow(this.endX - x, this.boundaryDampening);

        default:
          return this.applyXBoundaries(x);
      }
    },
    // Constraint the x value to the min and max values
    applyXBoundaries: function (x) {
      if (this.shouldLoop) {
        return x; // Don't apply boundaries
      } else {
        return Math.max(this.endX, Math.min(0, x));
      }
    },
    // Prevent the anchors and images from being draggable (like via their
    // ghost outlines). Using this approach because the draggable html attribute
    // didn't work in FF.  This only needs to be run once.
    preventContentDrag: function () {
      if (this.contentDragPrevented) {
        return;
      }

      this.$refs.track.$el.querySelectorAll('a, img').forEach(function (el) {
        return el.addEventListener('dragstart', function (e) {
          return e.preventDefault();
        });
      });
      return this.contentDragPrevented = true;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/feathering.coffee
/*
Code related to implementing feathering effect.
*/
/* harmony default export */ var feathering_coffee = ({
  props: {
    // Shorthand for enabling boolean and setting it's width
    feather: {
      type: Boolean | String | Number,
      default: false
    }
  },
  methods: {
    // Add feathering styles via breakpoint
    makeBreakpointFeatheringStyle: function (breakpoint) {
      var cssValue, feather; // Disable feathering if not enough slides

      if (this.isDisabledAtBreakpoint(breakpoint)) {
        return;
      } // Get feathering amount


      feather = this.getResponsiveValue('feather', breakpoint);

      if (feather === false || feather === null) {
        return;
      }

      if (!(feather && typeof feather !== 'boolean')) {
        feather = 20;
      }

      feather = this.autoUnit(feather); // Make the rule value

      cssValue = `linear-gradient(to right,
	transparent, black ${feather},
	black calc(100% - ${feather}),
	transparent)`; // Write the style, with browser prefixes

      return `${this.scopeSelector} .ssr-carousel-mask {
	-webkit-mask-image: ${cssValue};
	mask-image: ${cssValue};
}`;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/focus.coffee
/*
Code related to focus and hover state
*/
/* harmony default export */ var focus_coffee = ({
  // Some simple data about our component and window its mounted on
  data: function () {
    return {
      hovered: false,
      windowVisible: true
    };
  },
  computed: {
    isFocused: function () {
      return this.windowVisible && this.hovered;
    },
    windowHidden: function () {
      return !this.windowVisible;
    }
  },
  methods: {
    onEnter: function () {
      return this.hovered = true;
    },
    onLeave: function () {
      return this.hovered = false;
    },
    // Updates @windowVisible based on our document
    updateVisibility: function () {
      return this.windowVisible = !document.hidden;
    }
  },
  // Watch the visibility updates of our document
  mounted: function () {
    if (!this.watchesHover) {
      return;
    }

    return document.addEventListener('visibilitychange', this.updateVisibility);
  },
  beforeDestroy: function () {
    return document.removeEventListener('visibilitychange', this.updateVisibility);
  }
});
// CONCATENATED MODULE: ./src/concerns/gutters.coffee
/*
Code related to the gutters between slides
*/
/* harmony default export */ var gutters_coffee = ({
  props: {
    // The gutters between slides
    gutter: {
      type: Number | String,
      default: 20
    }
  },
  methods: {
    // Apply gutters between slides via margins
    makeBreakpointSlideGutterStyle: function (breakpoint) {
      var gutter, lastChildGutter;
      gutter = this.getResponsiveValue('gutter', breakpoint); // If carousel would be disabled for not having enough slides, then remove
      // gutter from last slide.

      lastChildGutter = this.isDisabledAtBreakpoint(breakpoint) ? 0 : gutter; // Render styles

      return `${this.scopeSelector} .ssr-carousel-slide {
	margin-right: ${this.autoUnit(gutter)};
}
${this.scopeSelector} .ssr-carousel-slide:is(:last-child) {
	margin-right: ${this.autoUnit(lastChildGutter)};
}`;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/looping.coffee
/*
Code related to looping / infinite scroll
*/
/* harmony default export */ var looping_coffee = ({
  props: {
    // Add prop to enable looping
    loop: Boolean,
    // Place the first slide in the center of the layout
    center: Boolean
  },
  // Store the slide order indexes
  data: function () {
    return {
      slideOrder: []
    };
  },
  computed: {
    // Disable looping when the user is using keyboard navigation
    shouldLoop: function () {
      return this.loop && !this.usingKeyboard;
    },
    // This represents the current (as in while scrolling / animating) left most
    // slide index. This is used in looping calculation so that the reordering
    // of slides isn't affected by paginatePerSlide setting.
    currentSlideIndex: function () {
      return Math.floor(this.currentX / this.slideWidth * -1);
    },
    // When looping, slides get re-ordered. This value is added to the
    // track transform so that the slides don't feel like they were re-ordered.
    trackLoopOffset: function () {
      var offsetSlideCount;

      if (!this.shouldLoop) {
        return 0;
      }

      offsetSlideCount = this.currentSlideIndex;

      if (this.hasLeftPeekClone) {
        offsetSlideCount -= 1;
      }

      return offsetSlideCount * this.slideWidth;
    },
    // Get slideIndex of the right most and left most slides indexes
    leftMostSlideIndex: function () {
      return this.slideOrder.findIndex(index => {
        return index === 0;
      });
    },
    rightMostSlideIndex: function () {
      return this.slideOrder.findIndex(index => {
        return index === this.slideOrder.length - 1;
      });
    }
  },
  watch: {
    // This represents the current (as in while scrolling / animating) left most
    // slide index. This is used in looping calculation so that the reordering
    // of slides isn't affected by paginatePerSlide setting.
    currentSlideIndex: {
      immediate: true,
      handler: function () {
        return this.setSlideOrder();
      }
    },
    // Also update the slide order when the slides per page changes
    currentSlidesPerPage: function () {
      return this.setSlideOrder();
    }
  },
  methods: {
    // Calculating via watcher to prevent unnecesary recalculations (I noticed a
    // bunch of calls when this was done via a computed property)
    setSlideOrder: function () {
      var count, indices, split; // Make an array as long as the slides count with incrementing values

      indices = [...Array(this.slidesCount).keys()];
      count = indices.length; // Shift the order to applying centering effect

      if (this.center) {
        split = Math.floor(this.currentSlidesPerPage / 2);
        indices = [...indices.slice(split), ...indices.slice(0, split)];
      } // Re-order while looping


      if (this.shouldLoop) {
        split = (count - this.currentSlideIndex) % count;
        indices = [...indices.slice(split), ...indices.slice(0, split)];
      } // Set the new index order


      return this.slideOrder = indices;
    },
    // Reorder the initial slide state using CSS because the order is dependent
    // on the slides per page which isn't known via JS until hydrating
    makeBreakpointSlideOrderStyle: function (breakpoint) {
      var i, rules, slidesPerPage, split;

      if (!this.center) {
        return;
      }

      slidesPerPage = this.getResponsiveValue('slidesPerPage', breakpoint);
      split = Math.floor(slidesPerPage / 2);

      rules = function () {
        var j, ref, results;
        results = [];

        for (i = j = 0, ref = this.slidesCount; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
          results.push(`${this.scopeSelector} .ssr-carousel-slide:nth-child(${i + 1}) {
	order: ${(i + split) % this.slidesCount};
}`);
        }

        return results;
      }.call(this);

      return rules.join('');
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/pagination.coffee
/*
Code related to dealing with advancing between pages
*/
/* harmony default export */ var pagination_coffee = ({
  props: {
    // If true, advance whole pages when navigating
    paginateBySlide: Boolean,
    // Syncs to the `index` value via v-model
    value: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      index: this.value,
      // The current page; when looping may exceed slideCount
      currentX: 0,
      // The actual left offset of the slides container
      targetX: 0 // Where we may be tweening the slide to

    };
  },
  computed: {
    // The current number of pages
    pages: function () {
      switch (false) {
        // When looping and paginating per slide, make a dot per slide
        case !(this.paginateBySlide && this.shouldLoop):
          return this.slidesCount;
        // Else, restrict pages so you the last slide is flush with right edge

        case !this.paginateBySlide:
          return this.slidesCount - this.currentSlidesPerPage + 1;

        default:
          // When not paginating by slide, the amount of pages is related to the
          // current number of slides shown per page.
          return Math.ceil(this.slidesCount / this.currentSlidesPerPage);
      }
    },
    // Disable carousel-ness when there aren't enough slides
    disabled: function () {
      if (this.isVariableWidth) {
        return Math.round(this.trackWidth) <= Math.round(this.carouselWidth);
      } else {
        return this.slidesCount <= this.currentSlidesPerPage;
      }
    },
    // Get just the slotted slides that are components, ignoring text nodes
    // which may exist as a result of whitespace
    slides: function () {
      return (this.$slots.default || []).filter(function (vnode) {
        return !vnode.text;
      });
    },
    // Get the total number of slides
    slidesCount: function () {
      return this.slides.length;
    },
    // Apply boundaries to the index, which will exceed them when looping
    boundedIndex: function () {
      var boundedIndex;
      boundedIndex = this.index % this.pages;

      if (boundedIndex < 0) {
        return this.pages + boundedIndex;
      } else {
        return boundedIndex;
      }
    },
    // The current incomplete page offset
    currentIncompletePageOffset: function () {
      return this.makeIncompletePageOffset(this.index);
    },
    // Get an array of slide offsets of the slides that are 100% in the
    // viewport. Aka, the count will be equal the currentSlidesPerPage per page.
    activeSlides: function () {
      var ref, ref1, start;

      if (this.isVariableWidth) {
        return function () {
          var results = [];

          for (var i = 0, ref = this.slidesCount; 0 <= ref ? i < ref : i > ref; 0 <= ref ? i++ : i--) {
            results.push(i);
          }

          return results;
        }.apply(this);
      } // Get the offset of the leftmost slide in the current viewport


      start = this.paginateBySlide ? this.boundedIndex : this.boundedIndex * this.currentSlidesPerPage; // Adjust the start if not looping and on the last page of slides and there
      // aren't enough slides to make a full page

      if (!this.shouldLoop) {
        start -= this.boundedIndex % this.currentSlidesPerPage;
      }

      return function () {
        var results = [];

        for (var i = start, ref1 = start + this.currentSlidesPerPage; start <= ref1 ? i < ref1 : i > ref1; start <= ref1 ? i++ : i--) {
          results.push(i);
        }

        return results;
      }.apply(this).reduce((slides, offset) => {
        // When looping, use modulo to loop back around
        if (this.shouldLoop) {
          slides.push(offset % this.slidesCount); // Else, cap the offset to the last slide
        } else if (offset < this.slidesCount) {
          slides.push(offset);
        } // Return updated slides


        return slides;
      }, []);
    }
  },
  watch: {
    // Treat v-model input as a "goto" request
    value: function () {
      // If the value exceeds the bounds, immediately emit a new input event
      // with the corrected value
      if (this.value !== this.applyIndexBoundaries(this.value)) {
        return this.$emit('input', this.boundedIndex); // Else if the incoming value is different than the current value
        // then tween to it
      } else if (this.value !== this.boundedIndex) {
        return this.goto(this.value);
      }
    },
    // Emit events on index change
    boundedIndex: function () {
      this.$emit('change', {
        index: this.boundedIndex
      });
      return this.$emit('input', this.boundedIndex); // For v-model
    }
  },
  methods: {
    // Advance methods
    next: function () {
      return this.goto(this.index + 1);
    },
    back: function () {
      return this.goto(this.index - 1);
    },
    // The dots are ignorant of looping, so convert their bounded index to the
    // true index so we don't animate through a ton of pages going to the
    // clicked dot.
    gotoDot: function (dotIndex) {
      return this.goto(dotIndex - this.boundedIndex + this.index);
    },
    // Go to a specific index
    goto: function (index) {
      this.index = this.applyIndexBoundaries(index);
      return this.tweenToIndex(this.index);
    },
    // Go to the beginning of track
    gotoStart: function () {
      if (this.isVariableWidth) {
        return this.tweenToX(0);
      } else {
        return this.goto(0);
      }
    },
    // Go to the end of the track
    gotoEnd: function () {
      if (this.isVariableWidth) {
        return this.tweenToX(this.endX);
      } else {
        return this.goto(this.pages - 1);
      }
    },
    // Tween to a specific index
    tweenToIndex: function (index) {
      this.targetX = this.getXForIndex(index);
      return this.startTweening();
    },
    // Jump to an index with no tween
    jumpToIndex: function (index) {
      return this.currentX = this.targetX = this.getXForIndex(index);
    },
    // Calculate the X value given an index
    getXForIndex: function (index) {
      var x; // Figure out the new x position

      x = this.paginateBySlide ? index * this.slideWidth * -1 : index * this.pageWidth * -1; // Apply adjustments to x value and persist

      x += this.makeIncompletePageOffset(index);
      return Math.round(this.applyXBoundaries(x));
    },
    // Creates a px value to represent adjustments that should be made to
    // account for incommplete pages of slides when looping is enabled. Like
    // when there is 3 slotted slides and 2 slides per page and you have looped
    // over to the 2nd page index of 0. The track needs to be shifted to the
    // left by one slideWidth in this case.
    makeIncompletePageOffset: function (index) {
      var incompleteWidth;

      if (!(this.shouldLoop && !this.paginateBySlide)) {
        return 0;
      }

      incompleteWidth = this.pageWidth - this.lastPageWidth;
      return Math.floor(index / this.pages) * incompleteWidth;
    },
    // Apply boundaries to the index
    applyIndexBoundaries: function (index) {
      if (this.shouldLoop) {
        return index;
      } else {
        return Math.max(0, Math.min(this.pages - 1, index));
      }
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/peeking.coffee
/*
Code related to allowing edge slides to peek in from the side, including empty
gutter space.
*/
/* harmony default export */ var peeking_coffee = ({
  props: {
    // Use gutter's as the peeking value
    peekGutter: Boolean,
    // Set both peeking values at once
    peek: {
      type: Number | String,
      default: function () {
        // Prevent subpixel rounding issues from causing a sliver of offscreen
        // slide from peaking in.
        if (!this.peekGutter) {
          return 0;
        } else {
          return `calc(${this.gutter} - 1px)`;
        }
      }
    },
    // Distinct left/right peeking values
    peekLeft: {
      type: Number | String,
      default: function () {
        return this.peek;
      }
    },
    peekRight: {
      type: Number | String,
      default: function () {
        return this.peek;
      }
    },
    // When true, the peekLeft is used for the peekRight if the carousel is
    // disabled.  This behavior is expecting that there may be a different
    // peekRight (to hint at additional slides) but when there aren't more slide
    // to peek in, the peek value should functional like padding.
    matchPeekWhenDisabled: {
      type: Boolean,
      default: true
    },
    // Disable the overflow:hidden on the mask
    overflowVisible: Boolean
  },
  data: function () {
    return {
      // Store clones of the slides used for peeking
      clones: [],
      // Store computed peek values
      peekLeftPx: 0,
      peekRightPx: 0
    };
  },
  computed: {
    // Determine if clones should be created
    hasPeekClones: function () {
      return this.hasLeftPeekClone || this.hasRightPeekClone;
    },
    hasPeekPrerequisites: function () {
      return this.shouldLoop && this.slidesCount > 1;
    },
    hasLeftPeekClone: function () {
      return this.hasPeekPrerequisites && this.peekLeft;
    },
    hasRightPeekClone: function () {
      return this.hasPeekPrerequisites && this.peekRight;
    },
    // Figure out which slide indexes to show in the left and right peek slots
    leftPeekingSlideIndex: function () {
      if (this.hasLeftPeekClone) {
        return this.rightMostSlideIndex;
      }
    },
    rightPeekingSlideIndex: function () {
      if (this.hasRightPeekClone) {
        return this.leftMostSlideIndex;
      }
    },
    // Combine the peeking values, which is needed commonly
    combinedPeek: function () {
      return this.peekLeftPx + this.peekRightPx;
    },
    // Make the styles object for reading computed styles
    peekStyles: function () {
      var breakpoint;
      breakpoint = this.currentResponsiveBreakpoint;
      return {
        left: this.autoUnit(this.getResponsiveValue('peekLeft', breakpoint)),
        right: this.autoUnit(this.getResponsiveValue('peekRight', breakpoint))
      };
    }
  },
  watch: {
    // Recapture peeking values if the source props change
    peekLeft: function () {
      return this.capturePeekingMeasurements();
    },
    peekRight: function () {
      return this.capturePeekingMeasurements();
    },
    peek: function () {
      return this.capturePeekingMeasurements();
    },
    peekGutter: function () {
      return this.capturePeekingMeasurements();
    },
    responsive: function () {
      return this.capturePeekingMeasurements(); // Easier to respond to all
    }
  },
  methods: {
    // Capture measurements of peeking values
    capturePeekingMeasurements: function () {
      if (!this.$refs.peekValues) {
        return;
      }

      return this.$nextTick(function () {
        // Wait for getResponsiveValue on @peekStyles
        var styles;
        styles = getComputedStyle(this.$refs.peekValues);
        this.peekLeftPx = parseInt(styles.left);
        return this.peekRightPx = parseInt(styles.right);
      });
    },
    // Calculate the offset that gets added to the current position to account
    // for prepended slides from peeking. This replicates the JS required to
    // make `trackLoopOffset` using CSS only so there is now reflow when JS
    // hydrates.  This gets overridden by the track's inline translateX style.
    makeBreakpointTrackTransformStyle: function (breakpoint) {
      var gutter, peekLeft, rule;

      if (this.isDisabledAtBreakpoint(breakpoint)) {
        return;
      }

      peekLeft = this.getResponsiveValue('peekLeft', breakpoint); // If no peeking slide, just add the offset

      rule = !this.hasLeftPeekClone ? `transform: translateX(${// Otherwise, offset by one slide width (including it's gutter)
      this.autoUnit(peekLeft)});` : (gutter = this.getResponsiveValue('gutter', breakpoint), `transform: translateX(calc( ${this.autoUnit(peekLeft)} - (${this.makeSlideWidthCalc(breakpoint)} + ${this.autoUnit(gutter)}) ));`); // Wrap rule in selector

      return `${this.scopeSelector} .ssr-carousel-track { ${rule} }`;
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/responsive.coffee
/*
Code related to changing the slides per page at different viewport widths
*/
/* harmony default export */ var responsive_coffee = ({
  props: {
    // How many slides are visible at once in the viewport if no responsive
    // rules apply
    slidesPerPage: {
      type: Number,
      default: 1
    },
    // Provide different slides per page at different viewport widths
    responsive: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  computed: {
    // Make the css scopeId from things that can influence the styles, like the
    // slides count and props.
    scopeId: function () {
      return this.hashString(this.slidesCount + '|' + JSON.stringify(this.$props));
    },
    // Massage media queries into the responsive prop
    responsiveRules: function () {
      return this.responsive.map(breakpoint => {
        return { ...breakpoint,
          mediaQuery: this.makeMediaQuery(breakpoint),
          active: this.isBreakpointActive(breakpoint),
          // Unpack shorthands
          peekLeft: breakpoint.peekLeft || breakpoint.peek || (breakpoint.peekGutter ? breakpoint.gutter : void 0),
          peekRight: breakpoint.peekRight || breakpoint.peek || (breakpoint.peekGutter ? breakpoint.gutter : void 0)
        };
      });
    },
    // Get current responsive values
    currentSlidesPerPage: function () {
      return this.getResponsiveValue('slidesPerPage', this.currentResponsiveBreakpoint);
    },
    // Get the current responsive rule by looping backwards through the
    // responsiveRules to return the last matching rule.
    currentResponsiveBreakpoint: function () {
      var match;

      if (match = [...this.responsiveRules].reverse().find(function ({
        active
      }) {
        return active;
      })) {
        return match; // Return the matching rule
        // Defaults
      } else {
        return {
          slidesPerPage: this.slidesPerPage,
          gutter: this.gutter,
          peekLeft: this.peekLeft || this.peek || (this.peekGutter ? this.gutter : void 0),
          peekRight: this.peekRight || this.peek || (this.peekGutter ? this.gutter : void 0),
          feather: this.feather
        };
      }
    },
    // Make the scoping selecotr
    scopeSelector: function () {
      return `[data-ssrc-id='${this.scopeId}']`;
    },
    // Assemble all the dynamic instance styles
    instanceStyles: function () {
      return this.makeBreakpointStyles(this.$props) + this.responsiveRules.map(breakpoint => {
        return `@media ${breakpoint.mediaQuery} { ${this.makeBreakpointStyles(breakpoint)} }`;
      }).join(' ');
    }
  },
  watch: {
    // Fix alignment of slides while resizing
    pageWidth: function () {
      return this.jumpToIndex(this.index);
    },
    // If resizing the browser leads to disabling, reset the slide to the first
    // page.  Like if a user had switched to the 2nd page on mobile and then
    // resized to desktop
    disabled: function () {
      if (this.disabled) {
        return this.goto(0);
      }
    }
  },
  methods: {
    // Take an item form the responsive array and make a media query from it
    makeMediaQuery: function (breakpoint) {
      var rules;
      rules = [];

      if (breakpoint.maxWidth) {
        rules.push(`(max-width: ${breakpoint.maxWidth}px)`);
      }

      if (breakpoint.minWidth) {
        rules.push(`(min-width: ${breakpoint.minWidth}px)`);
      }

      return rules.join(' and ');
    },
    // Make the block of styles for a breakpoint
    makeBreakpointStyles: function (breakpoint) {
      return [this.makeBreakpointDisablingRules(breakpoint), this.makeBreakpointFeatheringStyle(breakpoint), this.makeBreakpointTrackTransformStyle(breakpoint), this.makeBreakpointSlideWidthStyle(breakpoint), this.makeBreakpointSlideGutterStyle(breakpoint), this.makeBreakpointSlideOrderStyle(breakpoint)].join(' ');
    },
    // Apply disabling styles via breakpoint when there are not enough slides
    // for the slidesPerPage
    makeBreakpointDisablingRules: function (breakpoint) {
      var slidesPerPage;
      slidesPerPage = this.getResponsiveValue('slidesPerPage', breakpoint); // Disabled, center slides and hide carousel UI

      if (this.slidesCount <= slidesPerPage) {
        return `${this.scopeSelector} .ssr-carousel-track { justify-content: center; }
${this.scopeSelector} .ssr-carousel-arrows,
${this.scopeSelector} .ssr-carousel-dots { display: none; }`;
      } else {
        // Enabled, restore default styles
        return `${this.scopeSelector} .ssr-carousel-track { justify-content: start; }
${this.scopeSelector} .ssr-carousel-arrows { display: block; }
${this.scopeSelector} .ssr-carousel-dots { display: flex; }`;
      }
    },
    // Check if carousel disabled at the breakpoint
    isDisabledAtBreakpoint: function (breakpoint) {
      var slidesPerPage;
      slidesPerPage = this.getResponsiveValue('slidesPerPage', breakpoint);
      return this.slidesCount <= slidesPerPage;
    },
    // Check if a breakpoint would apply currently. Not using window.matchQuery
    // so I can consume via a compued property
    isBreakpointActive: function (breakpoint) {
      var val;

      switch (false) {
        case !!this.viewportWidth:
          return false;

        case !((val = breakpoint.maxWidth) && this.viewportWidth > val):
          return false;

        case !((val = breakpoint.minWidth) && this.viewportWidth < val):
          return false;

        default:
          return true;
      }
    },
    // Find the first breakpoint with a property set
    getResponsiveValue: function (property, breakpoint) {
      var ruleMatch, val;

      if ((val = breakpoint[property]) != null) {
        // If this breakpoint has a value, use it
        return val;
      }

      if (!this.responsiveRules.length) {
        // If no responsive rules, use default
        return this[property];
      } // Check responsive rules to see if any of them contain a value for the
      // property


      ruleMatch = this.responsiveRules.find(function (rule) {
        // Rule must contain this property
        if (!rule[property]) {
          return;
        }

        if (breakpoint.maxWidth && rule.minWidth && rule.minWidth < breakpoint.maxWidth) {
          // Match if rule's min-width is less than the target max-width
          return true;
        }

        if (breakpoint.maxWidth && rule.maxWidth && rule.maxWidth < breakpoint.maxWidth) {
          // Match if rule's max-width is less than the target max-width
          return true;
        }

        if (breakpoint.minWidth && rule.minWidth && rule.minWidth > breakpoint.minWidth) {
          // Match if rule's min-width is greater than the target min-width
          return true;
        }

        if (breakpoint.minWidth && rule.maxWidth && rule.minWidth > breakpoint.minWidth) {
          // Match if rule's max-width is greater than the target min-width
          return true;
        }
      }); // Return matching property or fallback to the main component prop

      if (ruleMatch) {
        return ruleMatch[property];
      } else {
        return this[property];
      }
    },
    // Make a hash from a string, adapted from:
    // https://stackoverflow.com/a/33647870/59160
    hashString: function (str) {
      var hash, i, len;
      hash = 0;
      i = 0;
      len = str.length;

      while (i < len) {
        hash = (hash << 5) - hash + str.charCodeAt(i++) << 0;
      }

      return hash.toString(36);
    },
    // Add px unit to a value if numeric
    autoUnit: function (val) {
      if (!val) {
        return '0px';
      }

      if (String(val).match(/^[\d\-\.]+$/)) {
        return `${val}px`;
      } else {
        return val;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/tweening.coffee
/*
Code related to tweening the position of the track
*/
/* harmony default export */ var tweening_coffee = ({
  props: {
    // How quickly the carousel slides to a stop. Increase to tween to as stop
    // quicker.
    tweenDampening: {
      type: Number,
      default: 0.12
    },
    // A multiplier that is applied to the dragVelocity when using tweenToStop
    tweenInertia: {
      type: Number,
      default: 3
    }
  },
  data: function () {
    return {
      currentX: 0,
      // The actual left offset of the slides container
      targetX: 0,
      // Where we may be tweening the slide to
      tweening: false // If there is a current RAF based tween running

    };
  },
  // Stop any animations that are in flight
  beforeDestroy: function () {
    return window.cancelAnimationFrame(this.rafId);
  },
  watch: {
    // Start RAF based tweener
    tweening: function () {
      if (this.tweening) {
        this.$emit('tween:start', {
          index: this.index
        });
        return this.tweenToTarget();
      } else {
        window.cancelAnimationFrame(this.rafId);
        return this.$emit('tween:end', {
          index: this.index
        });
      }
    }
  },
  methods: {
    // Convenience method to tween to a targetX
    tweenToX: function (x) {
      this.targetX = Math.round(x);
      return this.startTweening();
    },
    // Start tweening to target location if necessary and if not already
    // tweening
    startTweening: function () {
      if (this.tweening) {
        return;
      }

      if (this.currentX === this.targetX) {
        return;
      }

      return this.tweening = true;
    },
    // The watcher on this will kill active tweens
    stopTweening: function () {
      return this.tweening = false;
    },
    // Tween the currentX to the targetX
    tweenToTarget: function () {
      // Apply tween math
      this.currentX = this.currentX + (this.targetX - this.currentX) * this.tweenDampening;

      if (Math.abs(this.targetX - this.currentX) < 1) {
        // Stops tweening
        this.currentX = this.targetX;
        return this.tweening = false;
      } else {
        return this.rafId = window.requestAnimationFrame(this.tweenToTarget);
      }
    },
    // Tween to stop based on inertia
    tweenToStop: function () {
      this.targetX = this.applyXBoundaries(this.currentX + this.dragVelocity * this.tweenInertia);
      return this.startTweening();
    }
  }
});
// CONCATENATED MODULE: ./src/concerns/variable-width.coffee
/*
Functionality related to supporting variable width slides
*/
/* harmony default export */ var variable_width_coffee = ({
  data: function () {
    return {
      measuredTrackWidth: 0
    };
  },
  computed: {
    // Is the carousel in variable width mode
    isVariableWidth: function () {
      return this.slidesPerPage === null;
    }
  },
  methods: {
    // Measure the width of the track
    captureTrackWidth: function () {
      if (!this.$refs.track) {
        return;
      }

      return this.measuredTrackWidth = this.$refs.track.$el.scrollWidth;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel.vue?vue&type=script&lang=coffee&
// Child components
















/* harmony default export */ var ssr_carouselvue_type_script_lang_coffee_ = ({
  // Component definition
  name: 'SsrCarousel',
  // Load concerns
  mixins: [accessibility_coffee, autoplay_coffee, dimensions_coffee, dragging_coffee, feathering_coffee, focus_coffee, gutters_coffee, looping_coffee, pagination_coffee, responsive_coffee, peeking_coffee, // After `responsive` so prop can access `gutter` prop
  tweening_coffee, variable_width_coffee],
  components: {
    SsrCarouselArrows: ssr_carousel_arrows,
    SsrCarouselDots: ssr_carousel_dots,
    SsrCarouselTrack: ssr_carousel_track
  },
  props: {
    // UI enabling controls
    showArrows: Boolean,
    showDots: Boolean
  },
  computed: {
    // Combine the different factors that come together to determine the x
    // transfrom of the track.  We don't return a value until the carousel
    // width is measured since the calculation depends on that.
    trackTranslateX: function () {
      if (!(this.carouselWidth && !this.disabled)) {
        return;
      }

      return this.currentX + this.trackLoopOffset + this.peekLeftPx; // The value from tweening or dragging // Offset from re-ordering slides for looping // Offset slides for the left peek
    },
    // Determine whether to create hover event bindings
    watchesHover: function () {
      return this.autoplayDelay > 0;
    },
    // Create event bindings
    maskListeners: function () {
      if (this.disabled) {
        return {};
      }

      return { ...(this.noDrag ? {} : {
          mousedown: this.onPointerDown,
          touchstart: this.onPointerDown
        }),
        ...(!this.watchesHover ? {} : {
          mouseenter: this.onEnter,
          mouseleave: this.onLeave
        })
      };
    }
  }
});
// CONCATENATED MODULE: ./src/ssr-carousel.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var src_ssr_carouselvue_type_script_lang_coffee_ = (ssr_carouselvue_type_script_lang_coffee_); 
// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ssr-carousel.vue?vue&type=style&index=0&id=40da5be2&prod&lang=stylus&
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/ssr-carousel.vue?vue&type=style&index=0&id=40da5be2&prod&lang=stylus&

// CONCATENATED MODULE: ./src/ssr-carousel.vue






/* normalize component */

var ssr_carousel_component = normalizeComponent(
  src_ssr_carouselvue_type_script_lang_coffee_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ssr_carousel = __webpack_exports__["default"] = (ssr_carousel_component.exports);

/***/ })
/******/ ]);

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

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerForm_vue_vue_type_style_index_0_id_c0f5cb3e_prod_style_scope_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerForm_vue_vue_type_style_index_0_id_c0f5cb3e_prod_style_scope_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerForm_vue_vue_type_style_index_0_id_c0f5cb3e_prod_style_scope_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerForm_vue_vue_type_style_index_0_id_c0f5cb3e_prod_style_scope_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerForm_vue_vue_type_style_index_0_id_c0f5cb3e_prod_style_scope_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#banner-form{background:#eee;border-radius:30px;bottom:-150px;padding:30px 30px 0;position:absolute;width:960px}::-moz-placeholder{color:#000!important}::placeholder{color:#000!important}.el-input input{background:transparent;border:none;border-bottom:1px solid #000;color:#000;font-size:18px}.el-form-item{margin-bottom:40px}@media (max-width:63.9375em){#banner-form{bottom:-450px;padding:30px 10px 0;width:90%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 186;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p1-circle.3c70dc5.png";

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p2-circle.47a549e.png";

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p3-circle.4f9d59a.png";

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p4-circle.e76378a.png";

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p5-circle.70be73a.png";

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p6-circle.82dd8e6.png";

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentsComment_vue_vue_type_style_index_0_id_81594614_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentsComment_vue_vue_type_style_index_0_id_81594614_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentsComment_vue_vue_type_style_index_0_id_81594614_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentsComment_vue_vue_type_style_index_0_id_81594614_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentsComment_vue_vue_type_style_index_0_id_81594614_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".carousel-parent-comment{margin:80px}.parents-comment-item{border-radius:30px;display:flex;flex-direction:column;height:500px;justify-content:space-between;margin:auto;width:450px}.speech-bubble{align-items:center;background:var(--primary-color);border-radius:20px;color:#fff;display:flex;margin:10px 40px;min-height:240px;padding:10px 40px;position:relative;top:20px}.speech-bubble:after{border:40px solid transparent;border-bottom:0;border-left:0;border-top:40px solid var(--primary-color);bottom:0;content:\"\";height:0;left:50%;margin-bottom:-40px;margin-left:-20px;position:absolute;width:0}.parents-img img{height:180px}.parents-comment-info{align-items:center;display:flex;justify-content:space-evenly;margin:0 40px}.parents-comment-info h3{margin:0}.parents-comment-info p{margin:10px 0}@media screen and (max-width:739px){.carousel-parent-comment{margin:0}.parents-comment-item{height:600px;width:380px}.speech-bubble{font-size:20px;margin:10px auto 40px;min-height:300px;padding:10px 20px;width:80%}.parents-comment-info{margin:0}}@media screen and (min-width:740px) and (max-width:1023px){.carousel-parent-comment{margin:80px 0}.parents-comment-item{height:540px;width:320px}.speech-bubble{margin:10px auto;padding:10px 20px}.parents-comment-info{margin:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("5c4f435f", content, true, context)
};

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/BannerForm.vue?vue&type=template&id=c0f5cb3e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "banner-form"
    }
  }, [_c('el-form', {
    ref: "rule-form",
    staticClass: "rule-form",
    attrs: {
      "model": _vm.ruleForm,
      "status-icon": "",
      "rules": _vm.rules,
      "label-width": "0px"
    }
  }, [_c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "Họ và tên học viên"
    },
    model: {
      value: _vm.ruleForm.name,
      callback: function ($$v) {
        _vm.$set(_vm.ruleForm, "name", $$v);
      },
      expression: "ruleForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "birthYear"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "Năm sinh"
    },
    model: {
      value: _vm.ruleForm.birthYear,
      callback: function ($$v) {
        _vm.$set(_vm.ruleForm, "birthYear", $$v);
      },
      expression: "ruleForm.birthYear"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "phoneNo"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "Số điện thoại"
    },
    model: {
      value: _vm.ruleForm.phoneNo,
      callback: function ($$v) {
        _vm.$set(_vm.ruleForm, "phoneNo", $$v);
      },
      expression: "ruleForm.phoneNo"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "mail"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "Email (Nếu có)"
    },
    model: {
      value: _vm.ruleForm.mail,
      callback: function ($$v) {
        _vm.$set(_vm.ruleForm, "mail", $$v);
      },
      expression: "ruleForm.mail"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('div', {
    staticClass: "btn-sign-up"
  }, [_c('a', {
    on: {
      "click": function ($event) {
        return _vm.sendMail(_vm.ruleForm);
      }
    }
  }, [_vm._v("ĐĂNG KÝ TƯ VẤN")])])])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/BannerForm.vue?vue&type=template&id=c0f5cb3e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/BannerForm.vue?vue&type=script&lang=js&
/* harmony default export */ var BannerFormvue_type_script_lang_js_ = ({
  data() {
    return {
      ruleForm: {
        name: '',
        birthYear: '',
        phoneNo: '',
        mail: ''
      },
      rules: {
        name: [{
          required: true,
          message: 'Hãy nhập tên của mình bạn nhé',
          trigger: 'blur'
        }],
        birthYear: [{
          required: true,
          message: 'Hãy nhập năm sinh của mình bạn nhé',
          trigger: 'blur'
        }],
        phoneNo: [{
          required: true,
          message: 'Hãy nhập số điện thoại của mình hoặc của phụ huynh bạn nhé',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    sendMail() {
      this.$sendMail(this.ruleForm);
    }
  }
});
// CONCATENATED MODULE: ./components/common/BannerForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_BannerFormvue_type_script_lang_js_ = (BannerFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/common/BannerForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(184)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_BannerFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b0eb94c0"
  
)

/* harmony default export */ var BannerForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/LightGallery.vue?vue&type=template&id=9c297ce8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('v-layout', [_vm._l(_vm.gorseller, function (gorsel, gorselIndex) {
    return _c('v-flex', {
      key: gorselIndex,
      staticClass: "ma-2",
      staticStyle: {
        "margin-right": "10px"
      },
      on: {
        "click": function ($event) {
          _vm.index = gorselIndex;
        }
      }
    }, [_c('img', {
      staticClass: "resimKutusu",
      attrs: {
        "width": "180",
        "height": "180",
        "src": _vm.getImagePath(gorsel.url)
      }
    })]);
  }), _vm._v(" "), _c('LightGallery', {
    attrs: {
      "images": _vm.gorseller,
      "index": _vm.index,
      "disable-scroll": false
    },
    on: {
      "close": function ($event) {
        _vm.index = null;
      }
    }
  })], 2)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/LightGallery.vue?vue&type=template&id=9c297ce8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/LightGallery.vue?vue&type=script&lang=js&
/* harmony default export */ var LightGalleryvue_type_script_lang_js_ = ({
  data: () => ({
    gorseller: [{
      title: "img 1",
      url: "/assets/pics/main-background/gallery/item1.jpg"
    }, {
      title: "img 2",
      url: "/assets/pics/main-background/gallery/item2.jpg"
    }, {
      title: "img 3",
      url: "/assets/pics/main-background/gallery/item3.jpg"
    }, {
      title: "img 4",
      url: "/assets/pics/main-background/gallery/item4.jpg"
    }, {
      title: "img 5",
      url: "/assets/pics/main-background/gallery/item5.jpg"
    }, {
      title: "img 6",
      url: "/assets/pics/main-background/gallery/item6.jpg"
    }, {
      title: "img 7",
      url: "/assets/pics/main-background/gallery/item7.jpg"
    }, {
      title: "img 8",
      url: "/assets/pics/main-background/gallery/item8.jpg"
    }, {
      title: "img 9",
      url: "/assets/pics/main-background/gallery/item9.jpg"
    }, {
      title: "img 10",
      url: "/assets/pics/main-background/gallery/item10.jpg"
    }],
    index: null
  }),
  methods: {
    getImagePath(url) {
      return __webpack_require__(186)(`~${url}`);
    }
  }
});
// CONCATENATED MODULE: ./components/common/LightGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_LightGalleryvue_type_script_lang_js_ = (LightGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/common/LightGallery.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_LightGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c46c4628"
  
)

/* harmony default export */ var LightGallery = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/ParentsComment.vue?vue&type=template&id=81594614&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "carousel-parent-comment"
  }, [_c('ssr-carousel', {
    attrs: {
      "slides-per-page": this.slidesPerPage,
      "loop": "",
      "show-dots": ""
    }
  }, [_c('slide', {
    attrs: {
      "index": 1
    }
  }, [_c('div', {
    staticClass: "parents-comment-item"
  }, [_c('div', {
    staticClass: "speech-bubble"
  }, [_c('p', [_vm._v("\n            Bạn Linh Hương nhà chị rất thích học ở trung tâm bên em, may quá\n            con theo kịp và ham học. Bạn ấy chỉ sợ mẹ ko đủ tiền đóng cho theo\n            học. không muốn nghỉ buổi nào cả chỉ khi nào quá mệt mới xin nghỉ\n            hoặc gia đình có việc. Chị bảo cứ học bên này đi mẹ đóng tiền đủ\n            cả năm rồi ko phải lo tiền học\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "parents-comment-info"
  }, [_c('div', {
    staticClass: "parents-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(187),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "parents-info"
  }, [_c('h3', [_vm._v("Chị Đinh Thị Thuận")]), _vm._v(" "), _c('p', [_vm._v("Phụ Huynh bạn Lừ Linh Hương")])])])])]), _vm._v(" "), _c('slide', {
    attrs: {
      "index": 2
    }
  }, [_c('div', {
    staticClass: "parents-comment-item"
  }, [_c('div', {
    staticClass: "speech-bubble"
  }, [_c('p', [_vm._v("\n            Chị đánh giá rất tốt về trung tâm. Và giới thiệu phụ huynh chị\n            tham gia học tại trung tâm. Chắc chắn sẽ tiếp tục cho con tham gia\n            theo học lộ trình lâu dài tại trung tâm.\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "parents-comment-info"
  }, [_c('div', {
    staticClass: "parents-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(188),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "parents-info"
  }, [_c('h3', [_vm._v("Chị Hoài Thu")]), _vm._v(" "), _c('p', [_vm._v("Phụ Huynh bạn Nguyễn Đức Trung")])])])])]), _vm._v(" "), _c('slide', {
    attrs: {
      "index": 3
    }
  }, [_c('div', {
    staticClass: "parents-comment-item"
  }, [_c('div', {
    staticClass: "speech-bubble"
  }, [_c('p', [_vm._v("\n            Trước đây, con chị rất sợ môn tiếng anh. Sau thời gian học ở Uni,\n            đến nay tuy không giỏi môn này, nhưng con đã không còn sợ như\n            trước. Hy vọng, sau này con sẽ ngày càng học tiếng anh tốt hơn,\n            trước là để thi trên lớp, thi tốt nghiệp, sau sẽ phục vụ tốt cho\n            cuộc sống của con. Thật sự cảm ơn các thầy cô đã kiên nhẫn dạy\n            con, đã lắng nghe những ý kiến của phụ huynh, để phối hợp với gia\n            đình giúp cho con học tốt hơn!\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "parents-comment-info"
  }, [_c('div', {
    staticClass: "parents-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(189),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "parents-info"
  }, [_c('h3', [_vm._v("Chị Hồ Thanh Huyền")]), _vm._v(" "), _c('p', [_vm._v("Phụ Huynh bạn Trần Minh Lâm")])])])])]), _vm._v(" "), _c('slide', {
    attrs: {
      "index": 4
    }
  }, [_c('div', {
    staticClass: "parents-comment-item"
  }, [_c('div', {
    staticClass: "speech-bubble"
  }, [_c('p', [_vm._v("\n            Năm thứ 4 theo học tại Trung tâm Uni language house Sơn La, tôi\n            nhận thấy con tiến bộ hơn rất nhiều, được học đầy đủ 4 kĩ năng\n            nghe, nói, đọc, viết theo giáo trình nước ngoài. Bên cạnh đó Trung\n            tâm còn tổ chức rất nhiều chương trình ngoại khoá, hội thi để các\n            con tự tin và lĩnh hội nhiều kiến thức hơn. Tôi rất tin tưởng gửi\n            gắm con mình theo học tại Trung tâm.\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "parents-comment-info"
  }, [_c('div', {
    staticClass: "parents-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(190),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "parents-info"
  }, [_c('h3', [_vm._v("Chị Cầm Thị Minh Phượng")]), _vm._v(" "), _c('p', [_vm._v("Phụ Huynh bạn Vi Trung Dũng và Vi Trung Nghĩa")])])])])]), _vm._v(" "), _c('slide', {
    attrs: {
      "index": 5
    }
  }, [_c('div', {
    staticClass: "parents-comment-item"
  }, [_c('div', {
    staticClass: "speech-bubble"
  }, [_c('p', [_vm._v("\n            Sau thời gian hai bạn học ở trung tâm Uni thì chị thấy con rất hào\n            hứng vui vẻ học tiếng anh con cũng được trải nghiệm nhiều điều bổ\n            ích khi học tiếng anh ở đây . Với khả năng học tiếng anh của con\n            được trau dồi nhiều hơn em ạ.\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "parents-comment-info"
  }, [_c('div', {
    staticClass: "parents-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(191),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "parents-info"
  }, [_c('h3', [_vm._v("Chị Lan")]), _vm._v(" "), _c('p', [_vm._v("Phụ Huynh bạn Tú An và Tú Uyên")])])])])]), _vm._v(" "), _c('slide', {
    attrs: {
      "index": 6
    }
  }, [_c('div', {
    staticClass: "parents-comment-item"
  }, [_c('div', {
    staticClass: "speech-bubble"
  }, [_c('p', [_vm._v("\n            Chị thấy mọi cái ở trung tâm rất tuyệt, con học tốt. Con đang theo\n            IELTS lên đang ấp ủ nhiều dự định lắm 😊. Mong thầy cô ở Trung tâm\n            luôn sẽ luôn sát cánh bên các con, vì thầy và trò đã cùng nhau đi\n            dc đoạn đường dài rồi, sắp đến lúc về đích rồi. Chúc cho thầy cô\n            và các con sẽ gặt hái được nhiều thành công trên con đường phía\n            trước 🎈🎊\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "parents-comment-info"
  }, [_c('div', {
    staticClass: "parents-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(192),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "parents-info"
  }, [_c('h3', [_vm._v("Chị Thùy Dương")]), _vm._v(" "), _c('p', [_vm._v("Phụ huynh bạn Phạm Duy Khánh")])])])])])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/ParentsComment.vue?vue&type=template&id=81594614&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/ParentsComment.vue?vue&type=script&lang=js&
/* harmony default export */ var ParentsCommentvue_type_script_lang_js_ = ({
  data() {
    return {
      slidesPerPage: 2
    };
  },
  mounted() {
    const width = window.outerWidth;
    console.log(width);
    width < 740 ? this.slidesPerPage = 1 : this.slidesPerPage = 2;
  }

  // computed: {
  //   getSlidesPerPage() {
  //   // const width = document.documentElement.clientWidth;
  //   //   // console.log(window.outerWidth);
  //   //   return width < 740 ? 1 : this.slidesPerPage;
  //   },
  // }
});
// CONCATENATED MODULE: ./components/common/ParentsComment.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_ParentsCommentvue_type_script_lang_js_ = (ParentsCommentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/common/ParentsComment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(193)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_ParentsCommentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cc8a2cb4"
  
)

/* harmony default export */ var ParentsComment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SsrCarousel: __webpack_require__(182).default})


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earth-globe-1.30866c2.png";

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/education-hat-1.02f4fe0.png";

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/school-building-1.8543b61.png";

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47bdae28_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47bdae28_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47bdae28_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47bdae28_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47bdae28_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(232);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#homepage-background[data-v-47bdae28]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}#home-page-container[data-v-47bdae28]{margin:200px 80px 0}.text-center-responsive[data-v-47bdae28]{opacity:0;transform:translateY(100px)}.rotate-img[data-v-47bdae28]{opacity:0;rotate:-180deg}@media screen and (max-width:739px){.text-center-responsive[data-v-47bdae28]{padding:0 20px}}@media (max-width:1024px){#home-page-container[data-v-47bdae28]{margin:500px 0 0}.uni-intro[data-v-47bdae28]{margin:0!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/item2.c0ae000.jpg";

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/index.vue?vue&type=template&id=47bdae28&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"homepage-background\" class=\"banner\" data-v-47bdae28>", "</div>", [_c('BannerForm')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"home-page-container\" data-v-47bdae28>", "</div>", [_vm._ssrNode("<h1 class=\"text-center-responsive\" data-v-47bdae28>CÁC KHÓA HỌC TẠI UNI LANGUAGE HOUSE</h1> "), _c('OtherCourseSection'), _vm._ssrNode(" <h1 class=\"text-center-responsive\" data-v-47bdae28>UNI LANGUAGE HOUSE - TRUNG TÂM TIẾNG ANH HÀNG ĐẦU TẠI SƠN LA</h1> <p class=\"text-center-responsive\" data-v-47bdae28>\n      Với tầm nhìn như vậy hãy cùng khám phá tại UNI LANGUAGE HOUSE có những\n      gì nhé!\n    </p> "), _c('el-row', {
    staticClass: "uni-intro",
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    staticClass: "section1-intro",
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('div', {
    staticClass: "section-content-row-fl section1-intro-content"
  }, [_c('div', {
    staticClass: "section1-intro-img"
  }, [_c('img', {
    staticClass: "rotate-img",
    attrs: {
      "src": __webpack_require__(227),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "section1-intro-text"
  }, [_c('p', [_vm._v("Áp dụng chương trình giảng dạy theo tiêu chuẩn quốc tế, phù hợp với từng độ tuổi ")])])])]), _vm._v(" "), _c('el-col', {
    staticClass: "section1-intro",
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('div', {
    staticClass: "section-content-row-fl section1-intro-content"
  }, [_c('div', {
    staticClass: "section1-intro-img"
  }, [_c('img', {
    staticClass: "rotate-img",
    attrs: {
      "src": __webpack_require__(228),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "section1-intro-text"
  }, [_c('p', [_vm._v("Đội ngũ giáo viên bản ngữ có kinh nghiệm & đầy đủ bằng cấp giảng dạy")])])])]), _vm._v(" "), _c('el-col', {
    staticClass: "section1-intro",
    attrs: {
      "xs": 24,
      "sm": 24,
      "lg": 8
    }
  }, [_c('div', {
    staticClass: "section-content-row-fl section1-intro-content"
  }, [_c('div', {
    staticClass: "section1-intro-img"
  }, [_c('img', {
    staticClass: "rotate-img",
    attrs: {
      "src": __webpack_require__(229),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "section1-intro-text"
  }, [_c('p', [_vm._v("Cơ sở vật chất với tiêu chuẩn cao phù hợp với từng độ tuổi của học sinh")])])])])], 1), _vm._ssrNode(" <div class=\"btn-sign-up\" data-v-47bdae28><a data-v-47bdae28>ĐĂNG KÝ TƯ VẤN</a></div>")], 2), _vm._ssrNode(" "), _c('ParentsComment'), _vm._ssrNode(" "), _c('Maps'), _vm._ssrNode(" "), _c('PartnersCarousel'), _vm._ssrNode(" "), _c('nuxt-child')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index/index.vue?vue&type=template&id=47bdae28&scoped=true&

// EXTERNAL MODULE: ./components/common/BannerForm.vue + 4 modules
var BannerForm = __webpack_require__(220);

// EXTERNAL MODULE: ./components/common/OtherCourseSection.vue + 4 modules
var OtherCourseSection = __webpack_require__(140);

// EXTERNAL MODULE: ./components/common/LightGallery.vue + 4 modules
var LightGallery = __webpack_require__(221);

// EXTERNAL MODULE: ./components/common/ParentsComment.vue + 4 modules
var ParentsComment = __webpack_require__(222);

// EXTERNAL MODULE: ./components/common/PartnersCarousel.vue + 4 modules
var PartnersCarousel = __webpack_require__(147);

// EXTERNAL MODULE: ./components/common/Maps.vue + 4 modules
var Maps = __webpack_require__(183);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/index.vue?vue&type=script&lang=js&






/* harmony default export */ var indexvue_type_script_lang_js_ = ({
  data() {
    return {};
  },
  components: {
    BannerForm: BannerForm["default"],
    OtherCourseSection: OtherCourseSection["default"],
    ParentsComment: ParentsComment["default"],
    PartnersCarousel: PartnersCarousel["default"],
    LightGallery: LightGallery["default"],
    Maps: Maps["default"]
  },
  watch: {
    '$store.state.locale': {
      handler(newLocale) {
        // this.$i18n.locale = newLocale
      },
      immediate: true
    }
  },
  mounted() {
    this.runAnimation();
  },
  methods: {
    runAnimation() {
      const gsap = this.$gsap;
      gsap.to('.text-center-responsive', {
        scrollTrigger: '.text-center-responsive',
        y: 0,
        opacity: 1,
        duration: .5
      });
      gsap.to('.rotate-img', {
        scrollTrigger: '.rotate-img',
        rotation: 0,
        opacity: 1,
        duration: 1
      });
      gsap.to('.btn-sign-up', {
        scrollTrigger: '.btn-sign-up',
        y: 0,
        opacity: 1,
        duration: .5
      });
    },
    upToTop() {
      this.$gsap.to(window, {
        duration: 1,
        scrollTo: "#banner-form"
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/index/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_indexvue_type_script_lang_js_ = (indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/index/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "47bdae28",
  "4823f8d5"
  
)

/* harmony default export */ var index = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map