exports.ids = [7];
exports.modules = {

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/MessengerPlugin.vue?vue&type=template&id=8a95235c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"fb-root\"></div> <div id=\"fb-customer-chat\" class=\"fb-customerchat\"></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/MessengerPlugin.vue?vue&type=template&id=8a95235c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/MessengerPlugin.vue?vue&type=script&lang=js&
/* harmony default export */ var MessengerPluginvue_type_script_lang_js_ = ({
  mounted() {
    // Set page_id and attribution
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "389813157754107");
    chatbox.setAttribute("attribution", "biz_inbox");

    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    // Load Facebook SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }
});
// CONCATENATED MODULE: ./components/common/MessengerPlugin.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_MessengerPluginvue_type_script_lang_js_ = (MessengerPluginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/common/MessengerPlugin.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_MessengerPluginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "68d07474"
  
)

/* harmony default export */ var MessengerPlugin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-messenger-plugin.js.map