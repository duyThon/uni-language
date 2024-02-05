exports.ids = [13,2];
exports.modules = {

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-uni-ngang-2.3cffcc6.png";

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("65c9e7ea", content, true, context)
};

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/ckeditor.vue?vue&type=template&id=f0bcc56e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ckeditor', {
    attrs: {
      "editor": _vm.editor,
      "value": _vm.value,
      "config": _vm.config,
      "tagName": _vm.tagName,
      "disabled": _vm.disabled
    },
    on: {
      "input": event => _vm.$emit('input', event)
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/ckeditor.vue?vue&type=template&id=f0bcc56e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/ckeditor.vue?vue&type=script&lang=js&
let ClassicEditor;
let CKEditor;
if (false) {} else {
  CKEditor = {
    component: {
      template: '<div></div>'
    }
  };
}
/* harmony default export */ var ckeditorvue_type_script_lang_js_ = ({
  components: {
    ckeditor: CKEditor.component
  },
  props: {
    value: {
      type: String,
      required: false
    },
    tagName: {
      type: String,
      required: false,
      default: 'div'
    },
    disabled: {
      type: Boolean,
      required: false
    },
    uploadUrl: {
      type: String,
      required: false
    },
    config: {
      type: Object,
      required: false,
      default: function () {}
    }
  },
  data() {
    return {
      editor: ClassicEditor
    };
  }
});
// CONCATENATED MODULE: ./components/common/ckeditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_ckeditorvue_type_script_lang_js_ = (ckeditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/common/ckeditor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_ckeditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "03f00ac5"
  
)

/* harmony default export */ var ckeditor = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_uni_vue_vue_type_style_index_0_id_3ea2696a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_uni_vue_vue_type_style_index_0_id_3ea2696a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_uni_vue_vue_type_style_index_0_id_3ea2696a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_uni_vue_vue_type_style_index_0_id_3ea2696a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_uni_vue_vue_type_style_index_0_id_3ea2696a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".el-tabs__item.is-left{font-size:30px;padding:50px}.admin-input{font-size:24px;height:50px;margin-bottom:30px;width:100%}.summary-input{min-height:150px}.save-btn{background:var(--primary-color);border-radius:30px;color:#fff;cursor:pointer;display:inline-block;font-size:16px;font-weight:700;margin:30px auto;padding:15px 30px}.save-btn:hover{background:#59acc0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin-uni.vue?vue&type=template&id=3ea2696a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "margin": "20px 80px"
    }
  }, [_vm._ssrNode("<div class=\"admin-logo\" style=\"text-align: center\"><img" + _vm._ssrAttr("src", __webpack_require__(139)) + " alt style=\"width: 350px\"></div> "), _c('el-tabs', {
    attrs: {
      "tab-position": "left"
    },
    model: {
      value: _vm.tabName,
      callback: function ($$v) {
        _vm.tabName = $$v;
      },
      expression: "tabName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "Tin tức và sự kiện"
    }
  }, [_c('h1', {
    staticStyle: {
      "text-align": "center",
      "font-size": "40px"
    }
  }, [_vm._v("Tin tức và sự kiện")]), _vm._v(" "), _c('el-tabs', {
    attrs: {
      "type": "border-card"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "Tiếng Việt"
    }
  }, [_c('h3', {
    staticClass: "admin-title",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Tiêu đề bằng tiếng việt\n          ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.viTitle,
      expression: "viTitle"
    }],
    staticClass: "admin-input title-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.viTitle
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.viTitle = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "admin-content",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Nội dung bài viết bằng tiếng việt\n          ")]), _vm._v(" "), _c('ckeditor', {
    attrs: {
      "placeholder": "Nhập nội dung Tin tức và sự kiện"
    },
    model: {
      value: _vm.viContent,
      callback: function ($$v) {
        _vm.viContent = $$v;
      },
      expression: "viContent"
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "admin-title",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Tóm tắt nội dung bằng tiếng việt\n          ")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.viSummary,
      expression: "viSummary"
    }],
    staticClass: "admin-input summary-input",
    attrs: {
      "type": "text",
      "maxlength": "200"
    },
    domProps: {
      "value": _vm.viSummary
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.viSummary = $event.target.value;
      }
    }
  })], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "English"
    }
  }, [_c('h3', {
    staticClass: "admin-title",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Tiêu đề bằng tiếng anh\n          ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.enTitle,
      expression: "enTitle"
    }],
    staticClass: "admin-input title-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.enTitle
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.enTitle = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "admin-content",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Nội dung bài viết bằng tiếng anh\n          ")]), _vm._v(" "), _c('ckeditor', {
    attrs: {
      "placeholder": "Nhập nội dung Tin tức và sự kiện"
    },
    model: {
      value: _vm.enContent,
      callback: function ($$v) {
        _vm.enContent = $$v;
      },
      expression: "enContent"
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "admin-title",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Tóm tắt nội dung bằng tiếng anh\n          ")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.enSummary,
      expression: "enSummary"
    }],
    staticClass: "admin-input summary-input",
    attrs: {
      "type": "text",
      "maxlength": "200"
    },
    domProps: {
      "value": _vm.enSummary
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.enSummary = $event.target.value;
      }
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "Học viên xuất sắc"
    }
  }, [_c('h1', {
    staticStyle: {
      "text-align": "center",
      "font-size": "40px"
    }
  }, [_vm._v("Học viên xuất sắc")]), _vm._v(" "), _c('el-tabs', {
    attrs: {
      "type": "border-card"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "Tiếng Việt"
    }
  }, [_c('h3', {
    staticClass: "admin-title",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Tiêu đề bằng tiếng việt\n          ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.viTitle,
      expression: "viTitle"
    }],
    staticClass: "admin-input title-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.viTitle
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.viTitle = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "admin-content",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Nội dung bài viết bằng tiếng việt\n          ")]), _vm._v(" "), _c('ckeditor', {
    attrs: {
      "placeholder": "Nhập nội dung Tin tức và sự kiện"
    },
    model: {
      value: _vm.viContent,
      callback: function ($$v) {
        _vm.viContent = $$v;
      },
      expression: "viContent"
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "admin-title",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Tóm tắt nội dung bằng tiếng việt\n          ")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.viSummary,
      expression: "viSummary"
    }],
    staticClass: "admin-input summary-input",
    attrs: {
      "type": "text",
      "maxlength": "200"
    },
    domProps: {
      "value": _vm.viSummary
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.viSummary = $event.target.value;
      }
    }
  })], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "English"
    }
  }, [_c('h3', {
    staticClass: "admin-title",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Tiêu đề bằng tiếng anh\n          ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.enTitle,
      expression: "enTitle"
    }],
    staticClass: "admin-input title-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.enTitle
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.enTitle = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "admin-content",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Nội dung bài viết bằng tiếng anh\n          ")]), _vm._v(" "), _c('ckeditor', {
    attrs: {
      "placeholder": "Nhập nội dung Tin tức và sự kiện"
    },
    model: {
      value: _vm.enContent,
      callback: function ($$v) {
        _vm.enContent = $$v;
      },
      expression: "enContent"
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "admin-title",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("\n            Tóm tắt nội dung bằng tiếng việt\n          ")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.viSummary,
      expression: "viSummary"
    }],
    staticClass: "admin-input summary-input",
    attrs: {
      "type": "text",
      "maxlength": "200"
    },
    domProps: {
      "value": _vm.viSummary
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.viSummary = $event.target.value;
      }
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('button', {
    staticClass: "save-btn",
    on: {
      "click": _vm.saveContent
    }
  }, [_vm._v("Save")])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin-uni.vue?vue&type=template&id=3ea2696a&

// EXTERNAL MODULE: ./components/common/ckeditor.vue + 4 modules
var ckeditor = __webpack_require__(214);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin-uni.vue?vue&type=script&lang=js&

/* harmony default export */ var admin_univue_type_script_lang_js_ = ({
  name: "app",
  data() {
    return {
      viContent: "",
      enContent: "",
      viTitle: "",
      enTitle: "",
      viSummary: "",
      enSummary: "",
      title: "Tin tức và sự kiện",
      editorConfig: {},
      tabName: "",
      apiUrl: process.env.API_URL
    };
  },
  components: {
    Ckeditor: ckeditor["default"]
  },
  mounted() {},
  methods: {
    async saveContent() {
      const body = {
        titleVn: this.viTitle,
        descriptionVn: this.viContent,
        titleEn: this.enTitle,
        descriptionEn: this.enContent,
        tags: this.tabName == 0 ? ["news"] : ["student"]
      };
      let res = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(res => res.json());
      if (res.success) {
        this.$router.push({
          path: `/news`
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin-uni.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_admin_univue_type_script_lang_js_ = (admin_univue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/admin-uni.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(218)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_admin_univue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "32e4a872"
  
)

/* harmony default export */ var admin_uni = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=admin-uni.js.map