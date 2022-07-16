(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2775:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__CSiqY",
	"wrapper": "Footer_wrapper__i2hnX",
	"contacts": "Footer_contacts__oMuyH",
	"links": "Footer_links__R48wE",
	"logo": "Footer_logo__e9LT6",
	"nav-links": "Footer_nav-links__p1jN0",
	"cta": "Footer_cta__irxMF",
	"form": "Footer_form__Hct7n"
};


/***/ }),

/***/ 4346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Footer.module.css
var Footer_module = __webpack_require__(2775);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Footer.js






const Footer = ()=>{
    const onSubmit = (e)=>{
        e.preventDefault();
        const value = e.target.email.value;
        console.log(value);
        alert(`Your email: ${value}`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (Footer_module_default()).contacts,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(md_.MdLocationPin, {}),
                                " Myasnitskaya Ulitsa, 58, Moscow, Russia 16758"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(md_.MdLocationPin, {}),
                                " Malaya Bronnaya St, 8, Moscow, Russia 163141"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaPhoneAlt, {}),
                                " +7 (123) - 456 22 22"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaPhoneAlt, {}),
                                " +7 (928) - 444 00 00"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).links,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (Footer_module_default()).logo,
                                children: "buenos arte maria"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default())["nav-links"],
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/products",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "shop"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "contact"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/our-story",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "our story"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).cta,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "newsletter"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: (Footer_module_default()).form,
                            onSubmit: onSubmit,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "email",
                                    type: "email",
                                    placeholder: "your@email.com"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    children: "subscribe"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./src/utils/wishlist-context.js
var wishlist_context = __webpack_require__(9733);
// EXTERNAL MODULE: ./src/utils/cart-context.js
var cart_context = __webpack_require__(8621);
// EXTERNAL MODULE: ./src/utils/filter-context.js
var filter_context = __webpack_require__(8336);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Buenos Arte Maria"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cart_context/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(wishlist_context/* default */.Z, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(filter_context/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,336,621,733], () => (__webpack_exec__(4346)));
module.exports = __webpack_exports__;

})();