(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/components/demo/border/radius-box.vue?vue&type=template&id=e81661e0

var _hoisted_1 = {
  class: "title"
};
var _hoisted_2 = {
  class: "value"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_col = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("el-col");

  var _component_el_row = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("el-row");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])(_component_el_row, {
    gutter: 12,
    class: "demo-radius"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [(Object(vue_esm_browser_prod["H" /* openBlock */])(true), Object(vue_esm_browser_prod["k" /* createBlock */])(vue_esm_browser_prod["b" /* Fragment */], null, Object(vue_esm_browser_prod["O" /* renderList */])($props.radiusGroup, function (radius, i) {
        return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])(_component_el_col, {
          key: i,
          span: 6,
          xs: {
            span: 12
          }
        }, {
          default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
            return [Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_1, Object(vue_esm_browser_prod["U" /* toDisplayString */])(radius.name), 1), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_2, [Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "border-radius: " + Object(vue_esm_browser_prod["U" /* toDisplayString */])($options.getValue(radius.type) || '0px'), 1)]), Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
              class: "radius",
              style: {
                borderRadius: radius.type ? "var(--el-border-radius-" + radius.type + ")" : ''
              }
            }, null, 4)];
          }),
          _: 2
        }, 1024);
      }), 128))];
    }),
    _: 1
  });
}
// CONCATENATED MODULE: ./website/components/demo/border/radius-box.vue?vue&type=template&id=e81661e0

// EXTERNAL MODULE: ./website/util.js
var util = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/components/demo/border/radius-box.vue?vue&type=script&lang=js

/* harmony default export */ var radius_boxvue_type_script_lang_js = ({
  props: {
    radiusGroup: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    getValue: function getValue(type) {
      return Object(util["c" /* getCssVarValue */])('border-radius', type);
    }
  }
});
// CONCATENATED MODULE: ./website/components/demo/border/radius-box.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/components/demo/border/radius-box.vue



radius_boxvue_type_script_lang_js.render = render

/* harmony default export */ var radius_box = __webpack_exports__["a"] = (radius_boxvue_type_script_lang_js);

/***/ }),

/***/ 1198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/components/demo/border/shadow-box.vue?vue&type=template&id=20d741bc

var _hoisted_1 = {
  class: "demo-shadow-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("div", null, [(Object(vue_esm_browser_prod["H" /* openBlock */])(true), Object(vue_esm_browser_prod["k" /* createBlock */])(vue_esm_browser_prod["b" /* Fragment */], null, Object(vue_esm_browser_prod["O" /* renderList */])($props.shadowGroup, function (shadow, i) {
    return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])(vue_esm_browser_prod["b" /* Fragment */], {
      key: i
    }, [Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
      class: "demo-shadow",
      style: {
        boxShadow: "var(--el-box-shadow-" + shadow.type + ")"
      }
    }, null, 4), Object(vue_esm_browser_prod["p" /* createVNode */])("span", _hoisted_1, [Object(vue_esm_browser_prod["o" /* createTextVNode */])(Object(vue_esm_browser_prod["U" /* toDisplayString */])(shadow.name) + " ", 1), Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "box-shadow: " + Object(vue_esm_browser_prod["U" /* toDisplayString */])($options.getValue(shadow.type)), 1)])], 64);
  }), 128))]);
}
// CONCATENATED MODULE: ./website/components/demo/border/shadow-box.vue?vue&type=template&id=20d741bc

// EXTERNAL MODULE: ./website/util.js
var util = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/components/demo/border/shadow-box.vue?vue&type=script&lang=js

/* harmony default export */ var shadow_boxvue_type_script_lang_js = ({
  props: {
    shadowGroup: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    getValue: function getValue(type) {
      return Object(util["c" /* getCssVarValue */])('box-shadow', type);
    }
  }
});
// CONCATENATED MODULE: ./website/components/demo/border/shadow-box.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/components/demo/border/shadow-box.vue



shadow_boxvue_type_script_lang_js.render = render

/* harmony default export */ var shadow_box = __webpack_exports__["a"] = (shadow_boxvue_type_script_lang_js);

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/border.md?vue&type=template&id=77a23452

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Border ");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "We standardize the borders that can be used in buttons, cards, pop-ups and other components.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Border ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>There are few border styles to choose.</p><table class=\"demo-border\"><tbody><tr><td class=\"text\">Name</td><td class=\"text\">Thickness</td><td class=\"line\">Demo</td></tr><tr><td class=\"text\">Solid</td><td class=\"text\">1px</td><td class=\"line\"><div></div></td></tr><tr><td class=\"text\">Dashed</td><td class=\"text\">2px</td><td class=\"line\"><div class=\"dashed\"></div></td></tr></tbody></table>", 2);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Radius ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "There are few radius styles to choose.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Shadow ");

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "There are few shadow styles to choose.", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_radius_box = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("radius-box");

  var _component_shadow_box = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("shadow-box");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "border",
    content: "Border",
    href: "#border",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#border"
      })];
    }),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "border-2",
    content: "Border",
    href: "#border-2",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#border-2"
      })];
    }),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "radius",
    content: "Radius",
    href: "#radius",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#radius"
      })];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_radius_box, {
    "radius-group": $data.radiusGroup
  }, null, 8, ["radius-group"]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "shadow",
    content: "Shadow",
    href: "#shadow",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#shadow"
      })];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_shadow_box, {
    "shadow-group": $data.shadowGroup
  }, null, 8, ["shadow-group"]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/border.md?vue&type=template&id=77a23452

// EXTERNAL MODULE: ./website/components/demo/border/radius-box.vue + 4 modules
var radius_box = __webpack_require__(1197);

// EXTERNAL MODULE: ./website/components/demo/border/shadow-box.vue + 4 modules
var shadow_box = __webpack_require__(1198);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/border.md?vue&type=script&lang=js


var radiusGroup = [{
  name: 'No Radius',
  type: ''
}, {
  name: 'Small Radius',
  type: 'small'
}, {
  name: 'Large Radius',
  type: 'base'
}, {
  name: 'Round Radius',
  type: 'round'
}];
var shadowGroup = [{
  name: 'Basic Shadow',
  type: 'base'
}, {
  name: 'Light Shadow',
  type: 'light'
}];
/* harmony default export */ var bordervue_type_script_lang_js = ({
  components: {
    RadiusBox: radius_box["a" /* default */],
    ShadowBox: shadow_box["a" /* default */]
  },
  data: function data() {
    return {
      radiusGroup: radiusGroup,
      shadowGroup: shadowGroup
    };
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/border.md?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/docs/en-US/border.md



bordervue_type_script_lang_js.render = render

/* harmony default export */ var border = __webpack_exports__["default"] = (bordervue_type_script_lang_js);

/***/ })

}]);