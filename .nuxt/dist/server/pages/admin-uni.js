exports.ids = [13];
exports.modules = {

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-uni-ngang-2.3cffcc6.png";

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/success-icon.1218fa2.png";

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("11d0a34a", content, true, context)
};

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_uni_vue_vue_type_style_index_0_id_86284b98_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_uni_vue_vue_type_style_index_0_id_86284b98_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_uni_vue_vue_type_style_index_0_id_86284b98_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_uni_vue_vue_type_style_index_0_id_86284b98_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_uni_vue_vue_type_style_index_0_id_86284b98_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".el-tabs__item.is-left{font-size:30px;padding:50px}.admin-input{font-size:24px;height:50px;margin-bottom:30px;width:100%}.summary-input{min-height:80px}.save-btn{background:var(--primary-color);border-radius:30px;color:#fff;cursor:pointer;display:inline-block;font-size:16px;font-weight:700;margin:30px auto;padding:15px 30px}.save-btn:hover{background:#59acc0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin-uni.vue?vue&type=template&id=86284b98&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "margin": "20px 80px"
    }
  }, [_vm._ssrNode("<div class=\"admin-logo\" style=\"text-align: center\"><img" + _vm._ssrAttr("src", __webpack_require__(141)) + " alt style=\"width: 350px\"></div> "), _c('el-dialog', {
    attrs: {
      "title": "Thông báo",
      "visible": _vm.dialog,
      "width": "30%"
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialog = $event;
      }
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "flex-direction": "column"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "src": __webpack_require__(176),
      "alt": ""
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Bài viết của bạn đã được tải lên thành công")])]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.changeRouter
    }
  }, [_vm._v("Xin cảm ơn")])], 1)]), _vm._ssrNode(" "), _c('el-tabs', {
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
  }, [_vm._v("Tin tức và sự kiện")]), _vm._v(" "), _c('h3', {
    staticClass: "admin-title",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("Ảnh tiêu đề")]), _vm._v(" "), _c('client-only', [_c('Editor', {
    attrs: {
      "id": "titleImg",
      "api-key": "ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5",
      "output-format": "text",
      "init": _vm.myInit
    }
  })], 1), _vm._v(" "), _c('el-tabs', {
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
  }, [_vm._v("\n            Nội dung bài viết bằng tiếng việt\n          ")]), _vm._v(" "), _c('client-only', [_c('Editor', {
    attrs: {
      "id": "newsViContent",
      "api-key": "ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5",
      "output-format": "text",
      "init": _vm.myInit
    }
  })], 1), _vm._v(" "), _c('h3', {
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
  }, [_vm._v("\n            Nội dung bài viết bằng tiếng anh\n          ")]), _vm._v(" "), _c('Editor', {
    attrs: {
      "id": "newsEnContent",
      "api-key": "ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5",
      "output-format": "text",
      "init": _vm.myInit
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
  }, [_vm._v("Học viên xuất sắc")]), _vm._v(" "), _c('h3', {
    staticClass: "admin-title",
    staticStyle: {
      "font-size": "26px"
    }
  }, [_vm._v("Ảnh tiêu đề")]), _vm._v(" "), _c('client-only', [_c('Editor', {
    attrs: {
      "id": "titleImg",
      "api-key": "ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5",
      "output-format": "text",
      "init": _vm.myInit
    }
  })], 1), _vm._v(" "), _c('el-tabs', {
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
  }, [_vm._v("\n            Nội dung bài viết bằng tiếng việt\n          ")]), _vm._v(" "), _c('Editor', {
    attrs: {
      "id": "hofViContent",
      "api-key": "ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5",
      "output-format": "text",
      "init": _vm.myInit
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
  }, [_vm._v("\n            Nội dung bài viết bằng tiếng anh\n          ")]), _vm._v(" "), _c('Editor', {
    attrs: {
      "id": "hofEnContent",
      "api-key": "ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5",
      "output-format": "text",
      "init": _vm.myInit
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
  })], 1)], 1)], 1), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "save-btn",
    staticStyle: {
      "display": "flex"
    },
    on: {
      "click": _vm.saveContent
    }
  }, [_vm._v("\n        Đăng bài\n      ")])])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin-uni.vue?vue&type=template&id=86284b98&

// EXTERNAL MODULE: external "@tinymce/tinymce-vue"
var tinymce_vue_ = __webpack_require__(117);
var tinymce_vue_default = /*#__PURE__*/__webpack_require__.n(tinymce_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin-uni.vue?vue&type=script&lang=js&

/* harmony default export */ var admin_univue_type_script_lang_js_ = ({
  name: "app",
  middleware({
    $axios
  }) {
    console.log("Middleware is working!");
    $axios.onRequest(config => {
      if (config.method === "OPTIONS") {
        config.method = "POST";
      }
      return config;
    });
  },
  components: {
    Editor: tinymce_vue_default.a
  },
  data() {
    return {
      viContent: "",
      enContent: "",
      viTitle: "",
      enTitle: "",
      viSummary: "",
      enSummary: "",
      title: "Tin tức và sự kiện",
      tabName: "",
      // apiUrl: process.env.API_URL,
      dialog: false,
      myInit: {
        height: 500,
        selector: "textarea",
        plugins: "advlist link image lists",
        toolbar: "image",
        images_upload_url: "https://unilanguagesonla.com/api/media/upload",
        automatic_uploads: true,
        images_upload_handler: function (blobInfo, success, failure) {
          let xhr, formData;
          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open("POST", "https://unilanguagesonla.com/api/media/upload");
          xhr.onload = function () {
            let json;
            if (xhr.status !== 200) {
              failure("HTTP Error: " + xhr.status);
              return;
            }
            json = JSON.parse(xhr.responseText);
            if (!json || typeof json.data.url !== "string") {
              failure("Invalid JSON: " + xhr.responseText);
              return;
            }
            let imageUrl = json.data.url;
            success(json.data.url);
            tinymce.activeEditor.insertContent('<img src="' + imageUrl + '" style="width: 100%; height: auto;" />');
          };
          formData = new FormData();
          formData.append("file", blobInfo.blob(), blobInfo.filename());
          xhr.send(formData);
        }
      }
    };
  },
  mounted() {
    if (!localStorage.getItem("login")) {
      this.$router.push({
        path: `/login`
      });
    }
  },
  unmounted() {
    localStorage.removeItem("login");
  },
  methods: {
    async saveContent() {
      if (this.tabName == 0) {
        this.viContent = tinyMCE.get('newsViContent').getContent();
        this.enContent = tinyMCE.get('newsEnContent').getContent();
      } else {
        this.viContent = tinyMCE.get('hofViContent').getContent();
        this.enContent = tinyMCE.get('hofEnContent').getContent();
      }
      let titleImage = tinyMCE.get('titleImg').getContent();
      const body = {
        titleImage: titleImage,
        titleVn: this.viTitle,
        descriptionVn: this.viContent,
        titleEn: this.enTitle,
        descriptionEn: this.enContent,
        summaryVn: this.viSummary,
        summaryEn: this.enSummary,
        tags: this.tabName == 0 ? ["news"] : ["hof"]
      };
      console.log(body);
      let res = await fetch(`${this.$API_URL}/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(res => res.json());
      if (res.success) {
        this.dialog = true;
      }
    },
    changeRouter() {
      this.dialog = false;
      if (this.tabName == 0) {
        this.$router.push({
          path: `/news`
        });
      } else {
        this.$router.push({
          path: `/hall-of-fame`
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin-uni.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_admin_univue_type_script_lang_js_ = (admin_univue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/admin-uni.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(225)
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