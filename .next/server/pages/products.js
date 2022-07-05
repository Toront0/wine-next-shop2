(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 8506:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "SearchInput_search__fHnkI",
	"search-box": "SearchInput_search-box__WPMsr",
	"active": "SearchInput_active__EZ5Wi",
	"input": "SearchInput_input__7k6cL",
	"search-icon": "SearchInput_search-icon__2qJqS"
};


/***/ }),

/***/ 2630:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "ProductFilter_main__d_SgW",
	"title": "ProductFilter_title__mlvb2",
	"wrapper-inner": "ProductFilter_wrapper-inner__mrvus",
	"quantity": "ProductFilter_quantity__f9Xm1",
	"filter": "ProductFilter_filter__7ZlPI",
	"sort": "ProductFilter_sort__eSvLL",
	"label": "ProductFilter_label__LKXC4",
	"select": "ProductFilter_select__R5sDV",
	"btns": "ProductFilter_btns__8t7v0",
	"filter-icon": "ProductFilter_filter-icon__FaPlS",
	"filter-wrapper": "ProductFilter_filter-wrapper__8_aaO",
	"categories": "ProductFilter_categories__5EheY",
	"category-head": "ProductFilter_category-head__l4xGz",
	"filter-title": "ProductFilter_filter-title__6mLPj",
	"filter-btns": "ProductFilter_filter-btns__lzEjy",
	"active-btn": "ProductFilter_active-btn__xmgiI",
	"filter-years": "ProductFilter_filter-years__kJW0T",
	"clear-btn": "ProductFilter_clear-btn__mb3Yz",
	"price": "ProductFilter_price__DeoPH"
};


/***/ }),

/***/ 7901:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Products_main__i3_Il"
};


/***/ }),

/***/ 5429:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1533);
/* harmony import */ var _styles_pages_Products_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7901);
/* harmony import */ var _styles_pages_Products_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Products_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_sections_Products_ProductFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5682);
/* harmony import */ var _src_utils_filter_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8336);
/* harmony import */ var _src_utils_supabaseAdmin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2764);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_NavBar__WEBPACK_IMPORTED_MODULE_2__]);
_src_components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Items = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(675), __webpack_require__.e(733), __webpack_require__.e(307)]).then(__webpack_require__.bind(__webpack_require__, 307))
, {
    loadableGenerated: {
        modules: [
            "products\\index.js -> " + "../../src/sections/Products/Items"
        ]
    }
});
const ProductsPage = ({ products  })=>{
    const { getProducts  } = (0,_src_utils_filter_context__WEBPACK_IMPORTED_MODULE_5__/* .useFilterContext */ .j)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getProducts(products);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_NavBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_styles_pages_Products_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_sections_Products_ProductFilter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Items, {})
                ]
            })
        ]
    });
};
async function getStaticProps() {
    const { data  } = await _src_utils_supabaseAdmin__WEBPACK_IMPORTED_MODULE_6__/* .supabaseAdmin.from */ .p.from("products").select("*").order("id");
    return {
        props: {
            products: data
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Products_ProductFilter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/sections/Products/ProductFilter.module.css
var ProductFilter_module = __webpack_require__(2630);
var ProductFilter_module_default = /*#__PURE__*/__webpack_require__.n(ProductFilter_module);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: ./src/components/SearchInput.module.css
var SearchInput_module = __webpack_require__(8506);
var SearchInput_module_default = /*#__PURE__*/__webpack_require__.n(SearchInput_module);
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
// EXTERNAL MODULE: ./src/utils/filter-context.js
var filter_context = __webpack_require__(8336);
;// CONCATENATED MODULE: ./src/components/SearchInput.js





const SearchInput = ()=>{
    const { filters: { text  } , updateFilters  } = (0,filter_context/* useFilterContext */.j)();
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (SearchInput_module_default()).search,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(SearchInput_module_default())["search-box"]} ${active && (SearchInput_module_default()).active}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "text",
                    name: "text",
                    placeholder: "Search",
                    className: `${(SearchInput_module_default()).input} ${active && (SearchInput_module_default()).active}`,
                    onChange: updateFilters,
                    value: text
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (SearchInput_module_default())["search-icon"],
                    onClick: ()=>setActive((prev)=>!prev
                        )
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiSearchLine, {})
                })
            ]
        })
    });
};
/* harmony default export */ const components_SearchInput = (SearchInput);

;// CONCATENATED MODULE: ./src/utils/helpers.js
const getUniqueValues = (data, type)=>{
    let unique = data.map((i)=>i[type]
    );
    return [
        "all",
        ...new Set(unique)
    ];
};

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
;// CONCATENATED MODULE: ./src/sections/Products/ProductFilter.js








const ProductFilter = ()=>{
    const { sort , updateSort , all_products , filtered_products , filters: { country , category , year , min_price , price , max_price  } , updateFilters , clearFilters  } = (0,filter_context/* useFilterContext */.j)();
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(false);
    let menuRef = (0,external_react_.useRef)();
    const categories = getUniqueValues(all_products, "category");
    const years = getUniqueValues(all_products, "year");
    const countries = getUniqueValues(all_products, "country");
    (0,external_react_.useEffect)(()=>{
        const closeDropdown = (e)=>{
            if (!menuRef?.current?.contains(e.target)) {
                setActive(false);
            }
        };
        document.addEventListener("mousedown", closeDropdown);
        return ()=>{
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ProductFilter_module_default()).main,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(ProductFilter_module_default()).wrapper} lg-container`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    className: (ProductFilter_module_default()).title,
                    children: [
                        "Products ",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: (ProductFilter_module_default()).quantity,
                            children: [
                                "(",
                                filtered_products.length,
                                ")"
                            ]
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ProductFilter_module_default())["wrapper-inner"],
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ProductFilter_module_default()).filter,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (ProductFilter_module_default()).btns,
                                ref: menuRef,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        className: (ProductFilter_module_default())["filter-icon"],
                                        onClick: ()=>setActive((isActive)=>!isActive
                                            )
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFilterLeft, {})
                                    }),
                                    active && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (ProductFilter_module_default())["filter-wrapper"],
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (ProductFilter_module_default()).categories,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (ProductFilter_module_default())["category-head"],
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: (ProductFilter_module_default())["filter-title"],
                                                                children: "Type"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "button",
                                                                onClick: ()=>setActive(false)
                                                                ,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdClose, {})
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (ProductFilter_module_default())["filter-btns"],
                                                        children: categories.map((c, i)=>{
                                                            return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                name: "category",
                                                                type: "button",
                                                                className: category === c.toLowerCase() ? (ProductFilter_module_default())["active-btn"] : null,
                                                                onClick: updateFilters,
                                                                children: c
                                                            }, i);
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (ProductFilter_module_default()).countries,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: (ProductFilter_module_default())["filter-title"],
                                                        children: "Country"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (ProductFilter_module_default())["filter-btns"],
                                                        children: countries.map((t, i)=>{
                                                            return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                name: "country",
                                                                type: "button",
                                                                className: country === t.toLowerCase() ? (ProductFilter_module_default())["active-btn"] : null,
                                                                onClick: updateFilters,
                                                                children: t
                                                            }, i);
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (ProductFilter_module_default()).years,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: (ProductFilter_module_default())["filter-title"],
                                                        children: "Years"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: `${(ProductFilter_module_default())["filter-btns"]} ${(ProductFilter_module_default())["filter-years"]}`,
                                                        children: years.map((y, i)=>{
                                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    name: "year",
                                                                    type: "button",
                                                                    className: year === y ? (ProductFilter_module_default())["active-btn"] : null,
                                                                    onClick: updateFilters,
                                                                    children: y
                                                                })
                                                            }, i);
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (ProductFilter_module_default()).price,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: (ProductFilter_module_default())["filter-title"],
                                                        children: "Price"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "\u20AC",
                                                            price.toFixed(2)
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "range",
                                                        name: "price",
                                                        min: min_price,
                                                        max: max_price,
                                                        value: price,
                                                        onChange: updateFilters
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (ProductFilter_module_default())["clear-btn"],
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    onClick: ()=>clearFilters()
                                                    ,
                                                    children: "Clear filters"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (ProductFilter_module_default()).sort,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "sort",
                                        className: (ProductFilter_module_default()).label,
                                        children: "Sort by:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        name: "sort",
                                        id: "sort",
                                        className: (ProductFilter_module_default()).select,
                                        value: sort,
                                        onChange: updateSort,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "price-lowest",
                                                children: "Price (lowest)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "price-highest",
                                                children: "Price (highest)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "name-a",
                                                children: "Name (A-Z)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "name-z",
                                                children: "Name (Z-A)"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_SearchInput, {})
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Products_ProductFilter = (ProductFilter);


/***/ }),

/***/ 2764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ supabaseAdmin)
});

;// CONCATENATED MODULE: external "@supabase/supabase-js"
const supabase_js_namespaceObject = require("@supabase/supabase-js");
;// CONCATENATED MODULE: ./src/utils/supabaseAdmin.js

const supabaseUrl = "https://tbqslkyyrhxwxsqdaypj.supabase.co" || 0;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRicXNsa3l5cmh4d3hzcWRheXBqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NjY5MzQyNCwiZXhwIjoxOTcyMjY5NDI0fQ.eNWzOSoZX-OYExCKWxSbzHiBAh4WlUTwY4B3ygFbpIU" || 0;
const supabaseAdmin = (0,supabase_js_namespaceObject.createClient)(supabaseUrl, supabaseKey);


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 7865:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/cg");

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

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,152,533,336], () => (__webpack_exec__(5429)));
module.exports = __webpack_exports__;

})();