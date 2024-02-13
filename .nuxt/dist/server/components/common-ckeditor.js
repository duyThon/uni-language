exports.ids = [2];
exports.modules = {

/***/ 210:
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

/***/ })

};;
//# sourceMappingURL=common-ckeditor.js.map