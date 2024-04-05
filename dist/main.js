/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/global.scss":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/global.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Modern CSS Reset Tweaks
 * ================================================== */
html {
  -webkit-text-size-adjust: 100%;
}
html:focus-within {
  scroll-behavior: smooth;
}

body {
  text-size-adjust: 100%;
  position: relative;
  width: 100%;
  min-height: 100vh;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeSpeed;
}

/* Box sizing normalization */
*,
::after,
::before {
  box-sizing: border-box;
}

/* Elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/**
 * CSS Reset Tweaks
 *
 * http://meyerweb.com/eric/tools/css/reset/
 * v2.0-modified | 20110126
 * License: none (public domain)
 */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  font-size: 100%;
  font: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

/* make sure to set some focus styles for accessibility */
:focus {
  outline: 0;
}

/* HTML5 display-role reset for older browsers */
main,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

/**
 * Input Reset
 */
input:required,
input {
  box-shadow: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type=search] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

input:focus {
  outline: none;
}

/**
 * Correct \`inline-block\` display not defined in IE 6/7/8/9 and Firefox 3.
 */
audio,
canvas,
video {
  display: inline-block;
  max-width: 100%;
}

/**
 * Prevent modern browsers from displaying \`audio\` without controls.
 * Remove excess height in iOS 5 devices.
 */
audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
 */
[hidden] {
  display: none;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */
a:active,
a:hover {
  outline: none;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
  height: auto;
}

/* Make pictures easier to work with */
picture {
  display: inline-block;
}

/**
 * Address Firefox 3+ setting \`line-height\` on \`input\` using \`!important\` in
 * the UA stylesheet.
 */
button,
input {
  line-height: normal;
}

/**
 * Address inconsistent \`text-transform\` inheritance for \`button\` and \`select\`.
 * All other form control elements do not inherit \`text-transform\` values.
 * Correct \`button\` style inheritance in Chrome, Safari 5+, and IE 6+.
 * Correct \`select\` style inheritance in Firefox 4+ and Opera.
 */
button,
select {
  text-transform: none;
}

button,
html input[type=button],
input[type=reset],
input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer;
  border: 0;
  background: transparent;
}

/**
 * Re-set default cursor for disabled elements.
 */
button[disabled],
html input[disabled] {
  cursor: default;
}

[disabled] {
  pointer-events: none;
}

/**
 * 1. Address box sizing set to content-box in IE 8/9.
 */
input[type=checkbox],
input[type=radio] {
  padding: 0;
}

/**
 * 1. Address \`appearance\` set to \`searchfield\` in Safari 5 and Chrome.
 * 2. Address \`box-sizing\` set to \`border-box\` in Safari 5 and Chrome
 *    (include \`-moz\` to future-proof).
 */
input[type=search] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Remove inner padding and border in Firefox 3+.
 */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

button {
  border: 0;
  background: transparent;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

/**
 * Remove most spacing between table cells.
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

/**
 * Based on normalize.css v8.0.1
 * github.com/necolas/normalize.css
 */
hr {
  box-sizing: content-box;
  overflow: visible;
  background: #000;
  border: 0;
  height: 1px;
  line-height: 0;
  margin: 0;
  padding: 0;
  page-break-after: always;
  width: 100%;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 */
pre {
  font-family: monospace, monospace;
  font-size: 100%;
}

/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  text-decoration: none;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 75%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -5px;
}

sup {
  top: -5px;
}

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1;
  margin: 0;
  padding: 0;
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
  outline: 0;
}

legend {
  color: inherit;
  white-space: normal;
  display: block;
  border: 0;
  max-width: 100%;
  width: 100%;
}

fieldset {
  min-width: 0;
}

body:not(:-moz-handler-blocked) fieldset {
  display: block;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Misc
 * ========================================================================== */
template {
  display: none;
}

input, button, body {
  font-family: "Merriweather", serif;
}

body {
  background-color: rgba(120, 8, 116, 0.4117647059);
  color: #fff;
  font-size: 18px;
  line-height: 1.6;
}

input {
  font-size: 16px;
  background-color: transparent;
  color: #fff;
}
input::placeholder {
  color: #4f5157;
}

a {
  color: #fff;
  text-decoration: none;
  transition: border-color 0.3s ease-in-out;
  animation: drawing 0.4s;
}

.fade-in {
  animation: fadeIn 0.9s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.bounce {
  animation: bounce 0.7s;
}

@keyframes bounce {
  from {
    transform: scale(0.2);
  }
  60% {
    transform: scale(1.4);
  }
  to {
    transform: scale(1);
  }
}
.rotate {
  animation: rotate 1.2s;
}

@keyframes rotate {
  from {
    transform: rotate(58deg);
  }
  60% {
    transform: rotate(-40deg);
  }
  to {
    transform: rotate(0);
  }
}`, "",{"version":3,"sources":["webpack://./../node_modules/scss-reset/_reset.scss","webpack://./styles/global.scss","webpack://./styles/_variables.scss","webpack://./styles/_keyframes.scss"],"names":[],"mappings":"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","sourcesContent":["/**\n * Modern CSS Reset Tweaks\n * ================================================== */\nhtml {\n  -webkit-text-size-adjust: 100%;\n\n  &:focus-within {\n    scroll-behavior: smooth;\n  }\n}\n\nbody {\n  text-size-adjust: 100%;\n  position: relative;\n\n  width: 100%;\n  min-height: 100vh;\n\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeSpeed;\n}\n\n\n/* Box sizing normalization */\n*,\n::after,\n::before {\n  box-sizing: border-box;\n}\n\n\n/* Elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n\n/**\n * CSS Reset Tweaks\n *\n * http://meyerweb.com/eric/tools/css/reset/\n * v2.0-modified | 20110126\n * License: none (public domain)\n */\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  font-size: 100%;\n  font: inherit;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\nmain,\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n\n  &:before,\n  &:after {\n    content: '';\n    content: none;\n  }\n}\n\n/**\n * Input Reset\n */\ninput:required,\ninput {\n  box-shadow: none;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px white inset;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\ninput {\n  &:focus {\n    outline: none;\n  }\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: none;\n}\n\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  height: auto;\n}\n\n/* Make pictures easier to work with */\npicture {\n  display: inline-block;\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n[disabled] {\n  pointer-events: none;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  padding: 0;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\nbutton {\n  border: 0;\n  background: transparent;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  text-indent: 0;\n}\n\n\n/**\n * Based on normalize.css v8.0.1\n * github.com/necolas/normalize.css\n */\nhr {\n  box-sizing: content-box;\n  overflow: visible;\n  background: #000;\n  border: 0;\n  height: 1px;\n  line-height: 0;\n  margin: 0;\n  padding: 0;\n  page-break-after: always;\n  width: 100%;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  font-size: 100%;\n}\n\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  text-decoration: none;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 75%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -5px;\n}\n\nsup {\n  top: -5px;\n}\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n  outline: 0;\n}\n\n\nlegend {\n  color: inherit;\n  white-space: normal;\n\n  display: block;\n  border: 0;\n  max-width: 100%;\n  width: 100%;\n}\n\nfieldset {\n  min-width: 0;\n}\n\nbody:not(:-moz-handler-blocked) fieldset {\n  display: block;\n}\n\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/*\n * Misc\n * ========================================================================== */\n\ntemplate {\n  display: none;\n}\n","@import './variables';\r\n@import 'scss-reset/reset';\r\n\r\ninput, button, body{\r\n    font-family: $font;\r\n}\r\n\r\nbody{\r\n    background-color: #78087469;\r\n    color: $white;\r\n    font-size: 18px;\r\n    line-height: 1.6;\r\n}\r\n\r\ninput{\r\n    font-size: 16px;\r\n    background-color: transparent;\r\n    color: $white;\r\n\r\n    &::placeholder{\r\n        color: $text-gray;\r\n    }\r\n}\r\n\r\na{\r\n    color: $white;\r\n    text-decoration: none;\r\n    transition: border-color .3s ease-in-out;\r\n    animation: drawing .4s;\r\n}\r\n\r\n@import './keyframes'","$font: \"Merriweather\", serif;\r\n\r\n$primary: #0c1d7e;\r\n$secondary: aqua;\r\n$bg-block: #42105a;\r\n$text-gray: #4f5157;\r\n$gray: #d3e9bf;\r\n$white: #fff;\r\n\r\n$radius: .07rem;\r\n$gap: 30px;",".fade-in{\r\n    animation: fadeIn 0.9s;\r\n}\r\n\r\n@keyframes fadeIn{\r\n    from {\r\n        opacity: 0;\r\n    } to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.bounce{\r\n    animation: bounce 0.7s;\r\n}\r\n\r\n@keyframes bounce {\r\n    from {\r\n        transform: scale(0.2);\r\n    } 60% {\r\n        transform: scale(1.4);\r\n    } to {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n.rotate {\r\n    animation: rotate 1.2s;\r\n}\r\n\r\n@keyframes rotate {\r\n    from {\r\n        transform: rotate(58deg);\r\n    } 60% {\r\n        transform: rotate(-40deg);\r\n    } to {\r\n        transform: rotate(0);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./global.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/global.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/global.scss */ "./styles/global.scss");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map