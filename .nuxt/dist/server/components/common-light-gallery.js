exports.ids = [4];
exports.modules = {

/***/ 187:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 187;

/***/ }),

/***/ 224:
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
      return __webpack_require__(187)(`~${url}`);
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

/***/ })

};;
//# sourceMappingURL=common-light-gallery.js.map