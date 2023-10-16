(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    var toPropertyKey = require("./toPropertyKey.js");
    function _defineProperty(obj, key, value) {
      key = toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
    },{"./toPropertyKey.js":7}],2:[function(require,module,exports){
    function _extends() {
      module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _extends.apply(this, arguments);
    }
    module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
    },{}],3:[function(require,module,exports){
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    },{}],4:[function(require,module,exports){
    var defineProperty = require("./defineProperty.js");
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
          defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    },{"./defineProperty.js":1}],5:[function(require,module,exports){
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
    },{}],6:[function(require,module,exports){
    var _typeof = require("./typeof.js")["default"];
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
    },{"./typeof.js":8}],7:[function(require,module,exports){
    var _typeof = require("./typeof.js")["default"];
    var toPrimitive = require("./toPrimitive.js");
    function _toPropertyKey(arg) {
      var key = toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
    },{"./toPrimitive.js":6,"./typeof.js":8}],8:[function(require,module,exports){
    function _typeof(obj) {
      "@babel/helpers - typeof";
    
      return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    },{}],9:[function(require,module,exports){
    'use strict';
    
    var reactIs = require('react-is');
    
    /**
     * Copyright 2015, Yahoo! Inc.
     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
     */
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      '$$typeof': true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      '$$typeof': true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    
    function getStatics(component) {
      // React v16.11 and below
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      } // React v16.12 and above
    
    
      return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
    }
    
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
    
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
    
        var keys = getOwnPropertyNames(sourceComponent);
    
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
    
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
    
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
    
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
    
            try {
              // Avoid failures from read-only properties
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {}
          }
        }
      }
    
      return targetComponent;
    }
    
    module.exports = hoistNonReactStatics;
    
    },{"react-is":12}],10:[function(require,module,exports){
    (function (process){(function (){
    /** @license React v16.13.1
     * react-is.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    
    'use strict';
    
    
    
    if (process.env.NODE_ENV !== "production") {
      (function() {
    'use strict';
    
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?
    
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
    
    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    
    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;
    
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;
    
            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;
    
              default:
                var $$typeofType = type && type.$$typeof;
    
                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
    
                  default:
                    return $$typeof;
                }
    
            }
    
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    
      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode
    
    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
    
    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
    
          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
    
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
      })();
    }
    
    }).call(this)}).call(this,require('_process'))
    },{"_process":13}],11:[function(require,module,exports){
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    
    'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
    Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
    function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
    exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
    exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
    exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;
    
    },{}],12:[function(require,module,exports){
    (function (process){(function (){
    'use strict';
    
    if (process.env.NODE_ENV === 'production') {
      module.exports = require('./cjs/react-is.production.min.js');
    } else {
      module.exports = require('./cjs/react-is.development.js');
    }
    
    }).call(this)}).call(this,require('_process'))
    },{"./cjs/react-is.development.js":10,"./cjs/react-is.production.min.js":11,"_process":13}],13:[function(require,module,exports){
    // shim for using process in browser
    var process = module.exports = {};
    
    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.
    
    var cachedSetTimeout;
    var cachedClearTimeout;
    
    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout () {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    } ())
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch(e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch(e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    
    
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    
    
    
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    
    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }
    
    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
    
        var len = queue.length;
        while(len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    
    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };
    
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};
    
    function noop() {}
    
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    
    process.listeners = function (name) { return [] }
    
    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };
    
    process.cwd = function () { return '/' };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function() { return 0; };
    
    },{}],14:[function(require,module,exports){
    (function (process){(function (){
    'use strict';
    
    var m = require('react-dom');
    if (process.env.NODE_ENV === 'production') {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    
    }).call(this)}).call(this,require('_process'))
    },{"_process":13,"react-dom":undefined}],15:[function(require,module,exports){
    (function (process){(function (){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    exports.__esModule = true;
    exports.default = exports.ReactReduxContext = void 0;
    
    var _react = _interopRequireDefault(require("react"));
    
    const ReactReduxContext = /*#__PURE__*/_react.default.createContext(null);
    
    exports.ReactReduxContext = ReactReduxContext;
    
    if (process.env.NODE_ENV !== 'production') {
      ReactReduxContext.displayName = 'ReactRedux';
    }
    
    var _default = ReactReduxContext;
    exports.default = _default;
    }).call(this)}).call(this,require('_process'))
    },{"@babel/runtime/helpers/interopRequireDefault":3,"_process":13,"react":undefined}],16:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.default = void 0;
    
    var _react = _interopRequireWildcard(require("react"));
    
    var _Context = require("./Context");
    
    var _Subscription = require("../utils/Subscription");
    
    var _useIsomorphicLayoutEffect = require("../utils/useIsomorphicLayoutEffect");
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function Provider({
      store,
      context,
      children,
      serverState
    }) {
      const contextValue = (0, _react.useMemo)(() => {
        const subscription = (0, _Subscription.createSubscription)(store);
        return {
          store,
          subscription,
          getServerState: serverState ? () => serverState : undefined
        };
      }, [store, serverState]);
      const previousState = (0, _react.useMemo)(() => store.getState(), [store]);
      (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
        const {
          subscription
        } = contextValue;
        subscription.onStateChange = subscription.notifyNestedSubs;
        subscription.trySubscribe();
    
        if (previousState !== store.getState()) {
          subscription.notifyNestedSubs();
        }
    
        return () => {
          subscription.tryUnsubscribe();
          subscription.onStateChange = undefined;
        };
      }, [contextValue, previousState]);
      const Context = context || _Context.ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype
    
      return /*#__PURE__*/_react.default.createElement(Context.Provider, {
        value: contextValue
      }, children);
    }
    
    var _default = Provider;
    exports.default = _default;
    },{"../utils/Subscription":32,"../utils/useIsomorphicLayoutEffect":38,"./Context":15,"react":undefined}],17:[function(require,module,exports){
    (function (process){(function (){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    exports.__esModule = true;
    exports.default = exports.initializeConnect = void 0;
    
    var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
    
    var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
    
    var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));
    
    var _react = _interopRequireWildcard(require("react"));
    
    var _reactIs = require("react-is");
    
    var _selectorFactory = _interopRequireDefault(require("../connect/selectorFactory"));
    
    var _mapDispatchToProps = require("../connect/mapDispatchToProps");
    
    var _mapStateToProps = require("../connect/mapStateToProps");
    
    var _mergeProps = require("../connect/mergeProps");
    
    var _Subscription = require("../utils/Subscription");
    
    var _useIsomorphicLayoutEffect = require("../utils/useIsomorphicLayoutEffect");
    
    var _shallowEqual = _interopRequireDefault(require("../utils/shallowEqual"));
    
    var _warning = _interopRequireDefault(require("../utils/warning"));
    
    var _Context = require("./Context");
    
    var _useSyncExternalStore = require("../utils/useSyncExternalStore");
    
    const _excluded = ["reactReduxForwardedRef"];
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    let useSyncExternalStore = _useSyncExternalStore.notInitialized;
    
    const initializeConnect = fn => {
      useSyncExternalStore = fn;
    }; // Define some constant arrays just to avoid re-creating these
    
    
    exports.initializeConnect = initializeConnect;
    const EMPTY_ARRAY = [null, 0];
    const NO_SUBSCRIPTION_ARRAY = [null, null]; // Attempts to stringify whatever not-really-a-component value we were given
    // for logging in an error message
    
    const stringifyComponent = Comp => {
      try {
        return JSON.stringify(Comp);
      } catch (err) {
        return String(Comp);
      }
    };
    
    // This is "just" a `useLayoutEffect`, but with two modifications:
    // - we need to fall back to `useEffect` in SSR to avoid annoying warnings
    // - we extract this to a separate function to avoid closing over values
    //   and causing memory leaks
    function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
      (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => effectFunc(...effectArgs), dependencies);
    } // Effect callback, extracted: assign the latest props values to refs for later usage
    
    
    function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
    childPropsFromStoreUpdate, notifyNestedSubs) {
      // We want to capture the wrapper props and child props we used for later comparisons
      lastWrapperProps.current = wrapperProps;
      renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update
    
      if (childPropsFromStoreUpdate.current) {
        childPropsFromStoreUpdate.current = null;
        notifyNestedSubs();
      }
    } // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
    // check for updates after dispatched actions, and trigger re-renders.
    
    
    function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
    additionalSubscribeListener) {
      // If we're not subscribed to the store, nothing to do here
      if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts
    
      let didUnsubscribe = false;
      let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component
    
      const checkForUpdates = () => {
        if (didUnsubscribe || !isMounted.current) {
          // Don't run stale listeners.
          // Redux doesn't guarantee unsubscriptions happen until next dispatch.
          return;
        } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it
    
    
        const latestStoreState = store.getState();
        let newChildProps, error;
    
        try {
          // Actually run the selector with the most recent store state and wrapper props
          // to determine what the child props should be
          newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
        } catch (e) {
          error = e;
          lastThrownError = e;
        }
    
        if (!error) {
          lastThrownError = null;
        } // If the child props haven't changed, nothing to do here - cascade the subscription update
    
    
        if (newChildProps === lastChildProps.current) {
          if (!renderIsScheduled.current) {
            notifyNestedSubs();
          }
        } else {
          // Save references to the new child props.  Note that we track the "child props from store update"
          // as a ref instead of a useState/useReducer because we need a way to determine if that value has
          // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
          // forcing another re-render, which we don't want.
          lastChildProps.current = newChildProps;
          childPropsFromStoreUpdate.current = newChildProps;
          renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
          // Trigger the React `useSyncExternalStore` subscriber
    
          additionalSubscribeListener();
        }
      }; // Actually subscribe to the nearest connected ancestor (or store)
    
    
      subscription.onStateChange = checkForUpdates;
      subscription.trySubscribe(); // Pull data from the store after first render in case the store has
      // changed since we began.
    
      checkForUpdates();
    
      const unsubscribeWrapper = () => {
        didUnsubscribe = true;
        subscription.tryUnsubscribe();
        subscription.onStateChange = null;
    
        if (lastThrownError) {
          // It's possible that we caught an error due to a bad mapState function, but the
          // parent re-rendered without this component and we're about to unmount.
          // This shouldn't happen as long as we do top-down subscriptions correctly, but
          // if we ever do those wrong, this throw will surface the error in our tests.
          // In that case, throw the error from here so it doesn't get lost.
          throw lastThrownError;
        }
      };
    
      return unsubscribeWrapper;
    } // Reducer initial state creation for our update reducer
    
    
    const initStateUpdates = () => EMPTY_ARRAY;
    
    function strictEqual(a, b) {
      return a === b;
    }
    /**
     * Infers the type of props that a connector will inject into a component.
     */
    
    
    let hasWarnedAboutDeprecatedPureOption = false;
    /**
     * Connects a React component to a Redux store.
     *
     * - Without arguments, just wraps the component, without changing the behavior / props
     *
     * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
     * is to override ownProps (as stated in the docs), so what remains is everything that's
     * not a state or dispatch prop
     *
     * - When 3rd param is passed, we don't know if ownProps propagate and whether they
     * should be valid component props, because it depends on mergeProps implementation.
     * As such, it is the user's responsibility to extend ownProps interface from state or
     * dispatch props or both when applicable
     *
     * @param mapStateToProps A function that extracts values from state
     * @param mapDispatchToProps Setup for dispatching actions
     * @param mergeProps Optional callback to merge state and dispatch props together
     * @param options Options for configuring the connection
     *
     */
    
    function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
      // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
      // @ts-ignore
      pure,
      areStatesEqual = strictEqual,
      areOwnPropsEqual = _shallowEqual.default,
      areStatePropsEqual = _shallowEqual.default,
      areMergedPropsEqual = _shallowEqual.default,
      // use React's forwardRef to expose a ref of the wrapped component
      forwardRef = false,
      // the context consumer to use
      context = _Context.ReactReduxContext
    } = {}) {
      if (process.env.NODE_ENV !== 'production') {
        if (pure !== undefined && !hasWarnedAboutDeprecatedPureOption) {
          hasWarnedAboutDeprecatedPureOption = true;
          (0, _warning.default)('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
        }
      }
    
      const Context = context;
      const initMapStateToProps = (0, _mapStateToProps.mapStateToPropsFactory)(mapStateToProps);
      const initMapDispatchToProps = (0, _mapDispatchToProps.mapDispatchToPropsFactory)(mapDispatchToProps);
      const initMergeProps = (0, _mergeProps.mergePropsFactory)(mergeProps);
      const shouldHandleStateChanges = Boolean(mapStateToProps);
    
      const wrapWithConnect = WrappedComponent => {
        if (process.env.NODE_ENV !== 'production' && !(0, _reactIs.isValidElementType)(WrappedComponent)) {
          throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
        }
    
        const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
        const displayName = `Connect(${wrappedComponentName})`;
        const selectorFactoryOptions = {
          shouldHandleStateChanges,
          displayName,
          wrappedComponentName,
          WrappedComponent,
          // @ts-ignore
          initMapStateToProps,
          // @ts-ignore
          initMapDispatchToProps,
          initMergeProps,
          areStatesEqual,
          areStatePropsEqual,
          areOwnPropsEqual,
          areMergedPropsEqual
        };
    
        function ConnectFunction(props) {
          const [propsContext, reactReduxForwardedRef, wrapperProps] = (0, _react.useMemo)(() => {
            // Distinguish between actual "data" props that were passed to the wrapper component,
            // and values needed to control behavior (forwarded refs, alternate context instances).
            // To maintain the wrapperProps object reference, memoize this destructuring.
            const {
              reactReduxForwardedRef
            } = props,
                  wrapperProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
            return [props.context, reactReduxForwardedRef, wrapperProps];
          }, [props]);
          const ContextToUse = (0, _react.useMemo)(() => {
            // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
            // Memoize the check that determines which context instance we should use.
            return propsContext && propsContext.Consumer && // @ts-ignore
            (0, _reactIs.isContextConsumer)( /*#__PURE__*/_react.default.createElement(propsContext.Consumer, null)) ? propsContext : Context;
          }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available
    
          const contextValue = (0, _react.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
          // We'll check to see if it _looks_ like a Redux store first.
          // This allows us to pass through a `store` prop that is just a plain value.
    
          const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
          const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
    
          if (process.env.NODE_ENV !== 'production' && !didStoreComeFromProps && !didStoreComeFromContext) {
            throw new Error(`Could not find "store" in the context of ` + `"${displayName}". Either wrap the root component in a <Provider>, ` + `or pass a custom React context provider to <Provider> and the corresponding ` + `React context consumer to ${displayName} in connect options.`);
          } // Based on the previous check, one of these must be true
    
    
          const store = didStoreComeFromProps ? props.store : contextValue.store;
          const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
          const childPropsSelector = (0, _react.useMemo)(() => {
            // The child props selector needs the store reference as an input.
            // Re-create this selector whenever the store changes.
            return (0, _selectorFactory.default)(store.dispatch, selectorFactoryOptions);
          }, [store]);
          const [subscription, notifyNestedSubs] = (0, _react.useMemo)(() => {
            if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
            // connected to the store via props shouldn't use subscription from context, or vice versa.
    
            const subscription = (0, _Subscription.createSubscription)(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
            // the middle of the notification loop, where `subscription` will then be null. This can
            // probably be avoided if Subscription's listeners logic is changed to not call listeners
            // that have been unsubscribed in the  middle of the notification loop.
    
            const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
            return [subscription, notifyNestedSubs];
          }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
          // and memoize that value to avoid unnecessary context updates.
    
          const overriddenContextValue = (0, _react.useMemo)(() => {
            if (didStoreComeFromProps) {
              // This component is directly subscribed to a store from props.
              // We don't want descendants reading from this store - pass down whatever
              // the existing context value is from the nearest connected ancestor.
              return contextValue;
            } // Otherwise, put this component's subscription instance into context, so that
            // connected descendants won't update until after this component is done
    
    
            return (0, _extends2.default)({}, contextValue, {
              subscription
            });
          }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic
    
          const lastChildProps = (0, _react.useRef)();
          const lastWrapperProps = (0, _react.useRef)(wrapperProps);
          const childPropsFromStoreUpdate = (0, _react.useRef)();
          const renderIsScheduled = (0, _react.useRef)(false);
          const isProcessingDispatch = (0, _react.useRef)(false);
          const isMounted = (0, _react.useRef)(false);
          const latestSubscriptionCallbackError = (0, _react.useRef)();
          (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
            isMounted.current = true;
            return () => {
              isMounted.current = false;
            };
          }, []);
          const actualChildPropsSelector = (0, _react.useMemo)(() => {
            const selector = () => {
              // Tricky logic here:
              // - This render may have been triggered by a Redux store update that produced new child props
              // - However, we may have gotten new wrapper props after that
              // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
              // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
              // So, we'll use the child props from store update only if the wrapper props are the same as last time.
              if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
                return childPropsFromStoreUpdate.current;
              } // TODO We're reading the store directly in render() here. Bad idea?
              // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
              // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
              // to determine what the child props should be.
    
    
              return childPropsSelector(store.getState(), wrapperProps);
            };
    
            return selector;
          }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
          // about useLayoutEffect in SSR, so we try to detect environment and fall back to
          // just useEffect instead to avoid the warning, since neither will run anyway.
    
          const subscribeForReact = (0, _react.useMemo)(() => {
            const subscribe = reactListener => {
              if (!subscription) {
                return () => {};
              }
    
              return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
              childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
            };
    
            return subscribe;
          }, [subscription]);
          useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
          let actualChildProps;
    
          try {
            actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
            subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
            // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
            actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
          } catch (err) {
            if (latestSubscriptionCallbackError.current) {
              ;
              err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
            }
    
            throw err;
          }
    
          (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
            latestSubscriptionCallbackError.current = undefined;
            childPropsFromStoreUpdate.current = undefined;
            lastChildProps.current = actualChildProps;
          }); // Now that all that's done, we can finally try to actually render the child component.
          // We memoize the elements for the rendered child component as an optimization.
    
          const renderedWrappedComponent = (0, _react.useMemo)(() => {
            return (
              /*#__PURE__*/
              // @ts-ignore
              _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, actualChildProps, {
                ref: reactReduxForwardedRef
              }))
            );
          }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
          // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.
    
          const renderedChild = (0, _react.useMemo)(() => {
            if (shouldHandleStateChanges) {
              // If this component is subscribed to store updates, we need to pass its own
              // subscription instance down to our descendants. That means rendering the same
              // Context instance, and putting a different value into the context.
              return /*#__PURE__*/_react.default.createElement(ContextToUse.Provider, {
                value: overriddenContextValue
              }, renderedWrappedComponent);
            }
    
            return renderedWrappedComponent;
          }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
          return renderedChild;
        }
    
        const _Connect = _react.default.memo(ConnectFunction);
    
        // Add a hacky cast to get the right output type
        const Connect = _Connect;
        Connect.WrappedComponent = WrappedComponent;
        Connect.displayName = ConnectFunction.displayName = displayName;
    
        if (forwardRef) {
          const _forwarded = _react.default.forwardRef(function forwardConnectRef(props, ref) {
            // @ts-ignore
            return /*#__PURE__*/_react.default.createElement(Connect, (0, _extends2.default)({}, props, {
              reactReduxForwardedRef: ref
            }));
          });
    
          const forwarded = _forwarded;
          forwarded.displayName = displayName;
          forwarded.WrappedComponent = WrappedComponent;
          return (0, _hoistNonReactStatics.default)(forwarded, WrappedComponent);
        }
    
        return (0, _hoistNonReactStatics.default)(Connect, WrappedComponent);
      };
    
      return wrapWithConnect;
    }
    
    var _default = connect;
    exports.default = _default;
    }).call(this)}).call(this,require('_process'))
    },{"../connect/mapDispatchToProps":19,"../connect/mapStateToProps":20,"../connect/mergeProps":21,"../connect/selectorFactory":22,"../utils/Subscription":32,"../utils/shallowEqual":37,"../utils/useIsomorphicLayoutEffect":38,"../utils/useSyncExternalStore":39,"../utils/warning":41,"./Context":15,"@babel/runtime/helpers/extends":2,"@babel/runtime/helpers/interopRequireDefault":3,"@babel/runtime/helpers/objectWithoutPropertiesLoose":5,"_process":13,"hoist-non-react-statics":9,"react":undefined,"react-is":44}],18:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.createInvalidArgFactory = createInvalidArgFactory;
    
    function createInvalidArgFactory(arg, name) {
      return (dispatch, options) => {
        throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
      };
    }
    },{}],19:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    exports.__esModule = true;
    exports.mapDispatchToPropsFactory = mapDispatchToPropsFactory;
    
    var _bindActionCreators = _interopRequireDefault(require("../utils/bindActionCreators"));
    
    var _wrapMapToProps = require("./wrapMapToProps");
    
    var _invalidArgFactory = require("./invalidArgFactory");
    
    function mapDispatchToPropsFactory(mapDispatchToProps) {
      return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(dispatch => // @ts-ignore
      (0, _bindActionCreators.default)(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(dispatch => ({
        dispatch
      })) : typeof mapDispatchToProps === 'function' ? // @ts-ignore
      (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : (0, _invalidArgFactory.createInvalidArgFactory)(mapDispatchToProps, 'mapDispatchToProps');
    }
    },{"../utils/bindActionCreators":34,"./invalidArgFactory":18,"./wrapMapToProps":24,"@babel/runtime/helpers/interopRequireDefault":3}],20:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.mapStateToPropsFactory = mapStateToPropsFactory;
    
    var _wrapMapToProps = require("./wrapMapToProps");
    
    var _invalidArgFactory = require("./invalidArgFactory");
    
    function mapStateToPropsFactory(mapStateToProps) {
      return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
      (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : (0, _invalidArgFactory.createInvalidArgFactory)(mapStateToProps, 'mapStateToProps');
    }
    },{"./invalidArgFactory":18,"./wrapMapToProps":24}],21:[function(require,module,exports){
    (function (process){(function (){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    exports.__esModule = true;
    exports.defaultMergeProps = defaultMergeProps;
    exports.wrapMergePropsFunc = wrapMergePropsFunc;
    exports.mergePropsFactory = mergePropsFactory;
    
    var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
    
    var _verifyPlainObject = _interopRequireDefault(require("../utils/verifyPlainObject"));
    
    var _invalidArgFactory = require("./invalidArgFactory");
    
    function defaultMergeProps(stateProps, dispatchProps, ownProps) {
      // @ts-ignore
      return (0, _extends2.default)({}, ownProps, stateProps, dispatchProps);
    }
    
    function wrapMergePropsFunc(mergeProps) {
      return function initMergePropsProxy(dispatch, {
        displayName,
        areMergedPropsEqual
      }) {
        let hasRunOnce = false;
        let mergedProps;
        return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
          const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    
          if (hasRunOnce) {
            if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
          } else {
            hasRunOnce = true;
            mergedProps = nextMergedProps;
            if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject.default)(mergedProps, displayName, 'mergeProps');
          }
    
          return mergedProps;
        };
      };
    }
    
    function mergePropsFactory(mergeProps) {
      return !mergeProps ? () => defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : (0, _invalidArgFactory.createInvalidArgFactory)(mergeProps, 'mergeProps');
    }
    }).call(this)}).call(this,require('_process'))
    },{"../utils/verifyPlainObject":40,"./invalidArgFactory":18,"@babel/runtime/helpers/extends":2,"@babel/runtime/helpers/interopRequireDefault":3,"_process":13}],22:[function(require,module,exports){
    (function (process){(function (){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    exports.__esModule = true;
    exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
    exports.default = finalPropsSelectorFactory;
    
    var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
    
    var _verifySubselectors = _interopRequireDefault(require("./verifySubselectors"));
    
    const _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
    
    function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
      areStatesEqual,
      areOwnPropsEqual,
      areStatePropsEqual
    }) {
      let hasRunAtLeastOnce = false;
      let state;
      let ownProps;
      let stateProps;
      let dispatchProps;
      let mergedProps;
    
      function handleFirstCall(firstState, firstOwnProps) {
        state = firstState;
        ownProps = firstOwnProps;
        stateProps = mapStateToProps(state, ownProps);
        dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        hasRunAtLeastOnce = true;
        return mergedProps;
      }
    
      function handleNewPropsAndNewState() {
        stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
      }
    
      function handleNewProps() {
        if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
      }
    
      function handleNewState() {
        const nextStateProps = mapStateToProps(state, ownProps);
        const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
        stateProps = nextStateProps;
        if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
      }
    
      function handleSubsequentCalls(nextState, nextOwnProps) {
        const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
        const stateChanged = !areStatesEqual(nextState, state);
        state = nextState;
        ownProps = nextOwnProps;
        if (propsChanged && stateChanged) return handleNewPropsAndNewState();
        if (propsChanged) return handleNewProps();
        if (stateChanged) return handleNewState();
        return mergedProps;
      }
    
      return function pureFinalPropsSelector(nextState, nextOwnProps) {
        return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
      };
    }
    
    // TODO: Add more comments
    // The selector returned by selectorFactory will memoize its results,
    // allowing connect's shouldComponentUpdate to return false if final
    // props have not changed.
    function finalPropsSelectorFactory(dispatch, _ref) {
      let {
        initMapStateToProps,
        initMapDispatchToProps,
        initMergeProps
      } = _ref,
          options = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
      const mapStateToProps = initMapStateToProps(dispatch, options);
      const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
      const mergeProps = initMergeProps(dispatch, options);
    
      if (process.env.NODE_ENV !== 'production') {
        (0, _verifySubselectors.default)(mapStateToProps, mapDispatchToProps, mergeProps);
      }
    
      return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
    }
    }).call(this)}).call(this,require('_process'))
    },{"./verifySubselectors":23,"@babel/runtime/helpers/interopRequireDefault":3,"@babel/runtime/helpers/objectWithoutPropertiesLoose":5,"_process":13}],23:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    exports.__esModule = true;
    exports.default = verifySubselectors;
    
    var _warning = _interopRequireDefault(require("../utils/warning"));
    
    function verify(selector, methodName) {
      if (!selector) {
        throw new Error(`Unexpected value for ${methodName} in connect.`);
      } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
        if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
          (0, _warning.default)(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
        }
      }
    }
    
    function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
      verify(mapStateToProps, 'mapStateToProps');
      verify(mapDispatchToProps, 'mapDispatchToProps');
      verify(mergeProps, 'mergeProps');
    }
    },{"../utils/warning":41,"@babel/runtime/helpers/interopRequireDefault":3}],24:[function(require,module,exports){
    (function (process){(function (){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    exports.__esModule = true;
    exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
    exports.getDependsOnOwnProps = getDependsOnOwnProps;
    exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
    
    var _verifyPlainObject = _interopRequireDefault(require("../utils/verifyPlainObject"));
    
    function wrapMapToPropsConstant( // * Note:
    //  It seems that the dispatch argument
    //  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
    //  and a state object in some others (ex: whenMapStateToPropsIsMissing)
    // eslint-disable-next-line no-unused-vars
    getConstant) {
      return function initConstantSelector(dispatch) {
        const constant = getConstant(dispatch);
    
        function constantSelector() {
          return constant;
        }
    
        constantSelector.dependsOnOwnProps = false;
        return constantSelector;
      };
    } // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
    // to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
    // whether mapToProps needs to be invoked when props have changed.
    //
    // A length of one signals that mapToProps does not depend on props from the parent component.
    // A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
    // therefore not reporting its length accurately..
    // TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?
    
    
    function getDependsOnOwnProps(mapToProps) {
      return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
    } // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
    // this function wraps mapToProps in a proxy function which does several things:
    //
    //  * Detects whether the mapToProps function being called depends on props, which
    //    is used by selectorFactory to decide if it should reinvoke on props changes.
    //
    //  * On first call, handles mapToProps if returns another function, and treats that
    //    new function as the true mapToProps for subsequent calls.
    //
    //  * On first call, verifies the first result is a plain object, in order to warn
    //    the developer that their mapToProps function is not returning a valid result.
    //
    
    
    function wrapMapToPropsFunc(mapToProps, methodName) {
      return function initProxySelector(dispatch, {
        displayName
      }) {
        const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
          return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);
        }; // allow detectFactoryAndVerify to get ownProps
    
    
        proxy.dependsOnOwnProps = true;
    
        proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
          proxy.mapToProps = mapToProps;
          proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
          let props = proxy(stateOrDispatch, ownProps);
    
          if (typeof props === 'function') {
            proxy.mapToProps = props;
            proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
            props = proxy(stateOrDispatch, ownProps);
          }
    
          if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject.default)(props, displayName, methodName);
          return props;
        };
    
        return proxy;
      };
    }
    }).call(this)}).call(this,require('_process'))
    },{"../utils/verifyPlainObject":40,"@babel/runtime/helpers/interopRequireDefault":3,"_process":13}],25:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    exports.__esModule = true;
    var _exportNames = {
      Provider: true,
      connect: true,
      ReactReduxContext: true,
      useDispatch: true,
      createDispatchHook: true,
      useSelector: true,
      createSelectorHook: true,
      useStore: true,
      createStoreHook: true,
      shallowEqual: true
    };
    Object.defineProperty(exports, "Provider", {
      enumerable: true,
      get: function () {
        return _Provider.default;
      }
    });
    Object.defineProperty(exports, "connect", {
      enumerable: true,
      get: function () {
        return _connect.default;
      }
    });
    Object.defineProperty(exports, "ReactReduxContext", {
      enumerable: true,
      get: function () {
        return _Context.ReactReduxContext;
      }
    });
    Object.defineProperty(exports, "useDispatch", {
      enumerable: true,
      get: function () {
        return _useDispatch.useDispatch;
      }
    });
    Object.defineProperty(exports, "createDispatchHook", {
      enumerable: true,
      get: function () {
        return _useDispatch.createDispatchHook;
      }
    });
    Object.defineProperty(exports, "useSelector", {
      enumerable: true,
      get: function () {
        return _useSelector.useSelector;
      }
    });
    Object.defineProperty(exports, "createSelectorHook", {
      enumerable: true,
      get: function () {
        return _useSelector.createSelectorHook;
      }
    });
    Object.defineProperty(exports, "useStore", {
      enumerable: true,
      get: function () {
        return _useStore.useStore;
      }
    });
    Object.defineProperty(exports, "createStoreHook", {
      enumerable: true,
      get: function () {
        return _useStore.createStoreHook;
      }
    });
    Object.defineProperty(exports, "shallowEqual", {
      enumerable: true,
      get: function () {
        return _shallowEqual.default;
      }
    });
    
    var _Provider = _interopRequireDefault(require("./components/Provider"));
    
    var _connect = _interopRequireDefault(require("./components/connect"));
    
    var _Context = require("./components/Context");
    
    var _useDispatch = require("./hooks/useDispatch");
    
    var _useSelector = require("./hooks/useSelector");
    
    var _useStore = require("./hooks/useStore");
    
    var _shallowEqual = _interopRequireDefault(require("./utils/shallowEqual"));
    
    var _types = require("./types");
    
    Object.keys(_types).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _types[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return _types[key];
        }
      });
    });
    },{"./components/Context":15,"./components/Provider":16,"./components/connect":17,"./hooks/useDispatch":26,"./hooks/useSelector":28,"./hooks/useStore":29,"./types":31,"./utils/shallowEqual":37,"@babel/runtime/helpers/interopRequireDefault":3}],26:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.createDispatchHook = createDispatchHook;
    exports.useDispatch = void 0;
    
    var _Context = require("../components/Context");
    
    var _useStore = require("./useStore");
    
    /**
     * Hook factory, which creates a `useDispatch` hook bound to a given context.
     *
     * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
     * @returns {Function} A `useDispatch` hook bound to the specified context.
     */
    function createDispatchHook(context = _Context.ReactReduxContext) {
      const useStore = // @ts-ignore
      context === _Context.ReactReduxContext ? _useStore.useStore : (0, _useStore.createStoreHook)(context);
      return function useDispatch() {
        const store = useStore(); // @ts-ignore
    
        return store.dispatch;
      };
    }
    /**
     * A hook to access the redux `dispatch` function.
     *
     * @returns {any|function} redux store's `dispatch` function
     *
     * @example
     *
     * import React, { useCallback } from 'react'
     * import { useDispatch } from 'react-redux'
     *
     * export const CounterComponent = ({ value }) => {
     *   const dispatch = useDispatch()
     *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
     *   return (
     *     <div>
     *       <span>{value}</span>
     *       <button onClick={increaseCounter}>Increase counter</button>
     *     </div>
     *   )
     * }
     */
    
    
    const useDispatch = /*#__PURE__*/createDispatchHook();
    exports.useDispatch = useDispatch;
    },{"../components/Context":15,"./useStore":29}],27:[function(require,module,exports){
    (function (process){(function (){
    "use strict";
    
    exports.__esModule = true;
    exports.useReduxContext = useReduxContext;
    
    var _react = require("react");
    
    var _Context = require("../components/Context");
    
    /**
     * A hook to access the value of the `ReactReduxContext`. This is a low-level
     * hook that you should usually not need to call directly.
     *
     * @returns {any} the value of the `ReactReduxContext`
     *
     * @example
     *
     * import React from 'react'
     * import { useReduxContext } from 'react-redux'
     *
     * export const CounterComponent = () => {
     *   const { store } = useReduxContext()
     *   return <div>{store.getState()}</div>
     * }
     */
    function useReduxContext() {
      const contextValue = (0, _react.useContext)(_Context.ReactReduxContext);
    
      if (process.env.NODE_ENV !== 'production' && !contextValue) {
        throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
      }
    
      return contextValue;
    }
    }).call(this)}).call(this,require('_process'))
    },{"../components/Context":15,"_process":13,"react":undefined}],28:[function(require,module,exports){
    (function (process){(function (){
    "use strict";
    
    exports.__esModule = true;
    exports.createSelectorHook = createSelectorHook;
    exports.useSelector = exports.initializeUseSelector = void 0;
    
    var _react = require("react");
    
    var _useReduxContext = require("./useReduxContext");
    
    var _Context = require("../components/Context");
    
    var _useSyncExternalStore = require("../utils/useSyncExternalStore");
    
    let useSyncExternalStoreWithSelector = _useSyncExternalStore.notInitialized;
    
    const initializeUseSelector = fn => {
      useSyncExternalStoreWithSelector = fn;
    };
    
    exports.initializeUseSelector = initializeUseSelector;
    
    const refEquality = (a, b) => a === b;
    /**
     * Hook factory, which creates a `useSelector` hook bound to a given context.
     *
     * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
     * @returns {Function} A `useSelector` hook bound to the specified context.
     */
    
    
    function createSelectorHook(context = _Context.ReactReduxContext) {
      const useReduxContext = context === _Context.ReactReduxContext ? _useReduxContext.useReduxContext : () => (0, _react.useContext)(context);
      return function useSelector(selector, equalityFn = refEquality) {
        if (process.env.NODE_ENV !== 'production') {
          if (!selector) {
            throw new Error(`You must pass a selector to useSelector`);
          }
    
          if (typeof selector !== 'function') {
            throw new Error(`You must pass a function as a selector to useSelector`);
          }
    
          if (typeof equalityFn !== 'function') {
            throw new Error(`You must pass a function as an equality function to useSelector`);
          }
        }
    
        const {
          store,
          subscription,
          getServerState
        } = useReduxContext();
        const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
        (0, _react.useDebugValue)(selectedState);
        return selectedState;
      };
    }
    /**
     * A hook to access the redux store's state. This hook takes a selector function
     * as an argument. The selector is called with the store state.
     *
     * This hook takes an optional equality comparison function as the second parameter
     * that allows you to customize the way the selected state is compared to determine
     * whether the component needs to be re-rendered.
     *
     * @param {Function} selector the selector function
     * @param {Function=} equalityFn the function that will be used to determine equality
     *
     * @returns {any} the selected state
     *
     * @example
     *
     * import React from 'react'
     * import { useSelector } from 'react-redux'
     *
     * export const CounterComponent = () => {
     *   const counter = useSelector(state => state.counter)
     *   return <div>{counter}</div>
     * }
     */
    
    
    const useSelector = /*#__PURE__*/createSelectorHook();
    exports.useSelector = useSelector;
    }).call(this)}).call(this,require('_process'))
    },{"../components/Context":15,"../utils/useSyncExternalStore":39,"./useReduxContext":27,"_process":13,"react":undefined}],29:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.createStoreHook = createStoreHook;
    exports.useStore = void 0;
    
    var _react = require("react");
    
    var _Context = require("../components/Context");
    
    var _useReduxContext = require("./useReduxContext");
    
    /**
     * Hook factory, which creates a `useStore` hook bound to a given context.
     *
     * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
     * @returns {Function} A `useStore` hook bound to the specified context.
     */
    function createStoreHook(context = _Context.ReactReduxContext) {
      const useReduxContext = // @ts-ignore
      context === _Context.ReactReduxContext ? _useReduxContext.useReduxContext : () => (0, _react.useContext)(context);
      return function useStore() {
        const {
          store
        } = useReduxContext(); // @ts-ignore
    
        return store;
      };
    }
    /**
     * A hook to access the redux store.
     *
     * @returns {any} the redux store
     *
     * @example
     *
     * import React from 'react'
     * import { useStore } from 'react-redux'
     *
     * export const ExampleComponent = () => {
     *   const store = useStore()
     *   return <div>{store.getState()}</div>
     * }
     */
    
    
    const useStore = /*#__PURE__*/createStoreHook();
    exports.useStore = useStore;
    },{"../components/Context":15,"./useReduxContext":27,"react":undefined}],30:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    var _exportNames = {
      batch: true
    };
    Object.defineProperty(exports, "batch", {
      enumerable: true,
      get: function () {
        return _reactBatchedUpdates.unstable_batchedUpdates;
      }
    });
    
    var _shim = require("use-sync-external-store/shim");
    
    var _withSelector = require("use-sync-external-store/shim/with-selector");
    
    var _reactBatchedUpdates = require("./utils/reactBatchedUpdates");
    
    var _batch = require("./utils/batch");
    
    var _useSelector = require("./hooks/useSelector");
    
    var _connect = require("./components/connect");
    
    var _exports = require("./exports");
    
    Object.keys(_exports).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _exports[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return _exports[key];
        }
      });
    });
    // The primary entry point assumes we're working with standard ReactDOM/RN, but
    // older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
    // Because of that, the useSyncExternalStore compat shim is needed.
    (0, _useSelector.initializeUseSelector)(_withSelector.useSyncExternalStoreWithSelector);
    (0, _connect.initializeConnect)(_shim.useSyncExternalStore); // Enable batched updates in our subscriptions for use
    // with standard React renderers (ReactDOM, React Native)
    
    (0, _batch.setBatch)(_reactBatchedUpdates.unstable_batchedUpdates);
    },{"./components/connect":17,"./exports":25,"./hooks/useSelector":28,"./utils/batch":33,"./utils/reactBatchedUpdates":36,"use-sync-external-store/shim":53,"use-sync-external-store/shim/with-selector":54}],31:[function(require,module,exports){
    "use strict";
    },{}],32:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.createSubscription = createSubscription;
    
    var _batch = require("./batch");
    
    function createListenerCollection() {
      const batch = (0, _batch.getBatch)();
      let first = null;
      let last = null;
      return {
        clear() {
          first = null;
          last = null;
        },
    
        notify() {
          batch(() => {
            let listener = first;
    
            while (listener) {
              listener.callback();
              listener = listener.next;
            }
          });
        },
    
        get() {
          let listeners = [];
          let listener = first;
    
          while (listener) {
            listeners.push(listener);
            listener = listener.next;
          }
    
          return listeners;
        },
    
        subscribe(callback) {
          let isSubscribed = true;
          let listener = last = {
            callback,
            next: null,
            prev: last
          };
    
          if (listener.prev) {
            listener.prev.next = listener;
          } else {
            first = listener;
          }
    
          return function unsubscribe() {
            if (!isSubscribed || first === null) return;
            isSubscribed = false;
    
            if (listener.next) {
              listener.next.prev = listener.prev;
            } else {
              last = listener.prev;
            }
    
            if (listener.prev) {
              listener.prev.next = listener.next;
            } else {
              first = listener.next;
            }
          };
        }
    
      };
    }
    
    const nullListeners = {
      notify() {},
    
      get: () => []
    };
    
    function createSubscription(store, parentSub) {
      let unsubscribe;
      let listeners = nullListeners;
    
      function addNestedSub(listener) {
        trySubscribe();
        return listeners.subscribe(listener);
      }
    
      function notifyNestedSubs() {
        listeners.notify();
      }
    
      function handleChangeWrapper() {
        if (subscription.onStateChange) {
          subscription.onStateChange();
        }
      }
    
      function isSubscribed() {
        return Boolean(unsubscribe);
      }
    
      function trySubscribe() {
        if (!unsubscribe) {
          unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
          listeners = createListenerCollection();
        }
      }
    
      function tryUnsubscribe() {
        if (unsubscribe) {
          unsubscribe();
          unsubscribe = undefined;
          listeners.clear();
          listeners = nullListeners;
        }
      }
    
      const subscription = {
        addNestedSub,
        notifyNestedSubs,
        handleChangeWrapper,
        isSubscribed,
        trySubscribe,
        tryUnsubscribe,
        getListeners: () => listeners
      };
      return subscription;
    }
    },{"./batch":33}],33:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.getBatch = exports.setBatch = void 0;
    
    // Default to a dummy "batch" implementation that just runs the callback
    function defaultNoopBatch(callback) {
      callback();
    }
    
    let batch = defaultNoopBatch; // Allow injecting another batching function later
    
    const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings
    
    
    exports.setBatch = setBatch;
    
    const getBatch = () => batch;
    
    exports.getBatch = getBatch;
    },{}],34:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.default = bindActionCreators;
    
    function bindActionCreators(actionCreators, dispatch) {
      const boundActionCreators = {};
    
      for (const key in actionCreators) {
        const actionCreator = actionCreators[key];
    
        if (typeof actionCreator === 'function') {
          boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
        }
      }
    
      return boundActionCreators;
    }
    },{}],35:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.default = isPlainObject;
    
    /**
     * @param {any} obj The object to inspect.
     * @returns {boolean} True if the argument appears to be a plain object.
     */
    function isPlainObject(obj) {
      if (typeof obj !== 'object' || obj === null) return false;
      let proto = Object.getPrototypeOf(obj);
      if (proto === null) return true;
      let baseProto = proto;
    
      while (Object.getPrototypeOf(baseProto) !== null) {
        baseProto = Object.getPrototypeOf(baseProto);
      }
    
      return proto === baseProto;
    }
    },{}],36:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    Object.defineProperty(exports, "unstable_batchedUpdates", {
      enumerable: true,
      get: function () {
        return _reactDom.unstable_batchedUpdates;
      }
    });
    
    var _reactDom = require("react-dom");
    },{"react-dom":undefined}],37:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.default = shallowEqual;
    
    function is(x, y) {
      if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    
    function shallowEqual(objA, objB) {
      if (is(objA, objB)) return true;
    
      if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
      }
    
      const keysA = Object.keys(objA);
      const keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) return false;
    
      for (let i = 0; i < keysA.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
          return false;
        }
      }
    
      return true;
    }
    },{}],38:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.useIsomorphicLayoutEffect = exports.canUseDOM = void 0;
    
    var _react = require("react");
    
    // React currently throws a warning when using useLayoutEffect on the server.
    // To get around it, we can conditionally useEffect on the server (no-op) and
    // useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
    // subscription callback always has the selector from the latest render commit
    // available, otherwise a store update may happen between render and the effect,
    // which may cause missed updates; we also must ensure the store subscription
    // is created synchronously, otherwise a store update may occur before the
    // subscription is created and an inconsistent state may be observed
    // Matches logic in React's `shared/ExecutionEnvironment` file
    const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
    exports.canUseDOM = canUseDOM;
    const useIsomorphicLayoutEffect = canUseDOM ? _react.useLayoutEffect : _react.useEffect;
    exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
    },{"react":undefined}],39:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.notInitialized = void 0;
    
    const notInitialized = () => {
      throw new Error('uSES not initialized!');
    };
    
    exports.notInitialized = notInitialized;
    },{}],40:[function(require,module,exports){
    "use strict";
    
    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
    
    exports.__esModule = true;
    exports.default = verifyPlainObject;
    
    var _isPlainObject = _interopRequireDefault(require("./isPlainObject"));
    
    var _warning = _interopRequireDefault(require("./warning"));
    
    function verifyPlainObject(value, displayName, methodName) {
      if (!(0, _isPlainObject.default)(value)) {
        (0, _warning.default)(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
      }
    }
    },{"./isPlainObject":35,"./warning":41,"@babel/runtime/helpers/interopRequireDefault":3}],41:[function(require,module,exports){
    "use strict";
    
    exports.__esModule = true;
    exports.default = warning;
    
    /**
     * Prints a warning in the console if it exists.
     *
     * @param {String} message The warning message.
     * @returns {void}
     */
    function warning(message) {
      /* eslint-disable no-console */
      if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message);
      }
      /* eslint-enable no-console */
    
    
      try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
        /* eslint-disable no-empty */
      } catch (e) {}
      /* eslint-enable no-empty */
    
    }
    },{}],42:[function(require,module,exports){
    (function (process){(function (){
    /**
     * @license React
     * react-is.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    
    'use strict';
    
    if (process.env.NODE_ENV !== "production") {
      (function() {
    'use strict';
    
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
    var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
    
    // -----------------------------------------------------------------------------
    
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    
    var REACT_MODULE_REFERENCE;
    
    {
      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
    }
    
    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
    
    
      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
        return true;
      }
    
      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
          return true;
        }
      }
    
      return false;
    }
    
    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;
    
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;
    
            switch (type) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
                return type;
    
              default:
                var $$typeofType = type && type.$$typeof;
    
                switch ($$typeofType) {
                  case REACT_SERVER_CONTEXT_TYPE:
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
    
                  default:
                    return $$typeof;
                }
    
            }
    
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    
      return undefined;
    }
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false;
    var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated
    
    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
    
          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
        }
      }
    
      return false;
    }
    function isConcurrentMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
          hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint
    
          console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
        }
      }
    
      return false;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    function isSuspenseList(object) {
      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    }
    
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.SuspenseList = SuspenseList;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isSuspenseList = isSuspenseList;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
      })();
    }
    
    }).call(this)}).call(this,require('_process'))
    },{"_process":13}],43:[function(require,module,exports){
    /**
     * @license React
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    'use strict';var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
    function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;
    exports.SuspenseList=n;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};exports.isContextProvider=function(a){return v(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};exports.isLazy=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
    exports.isPortal=function(a){return v(a)===c};exports.isProfiler=function(a){return v(a)===f};exports.isStrictMode=function(a){return v(a)===e};exports.isSuspense=function(a){return v(a)===m};exports.isSuspenseList=function(a){return v(a)===n};
    exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};exports.typeOf=v;
    
    },{}],44:[function(require,module,exports){
    arguments[4][12][0].apply(exports,arguments)
    },{"./cjs/react-is.development.js":42,"./cjs/react-is.production.min.js":43,"_process":13,"dup":12}],45:[function(require,module,exports){
    (function (process){(function (){
    /**
     * @license React
     * react-jsx-runtime.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    
    'use strict';
    
    if (process.env.NODE_ENV !== "production") {
      (function() {
    'use strict';
    
    var React = require('react');
    
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }
    
      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
    
      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }
    
      return null;
    }
    
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    
    function error(format) {
      {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
    
          printWarning('error', format, args);
        }
      }
    }
    
    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
    
        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
    
    
        var argsWithFormat = args.map(function (item) {
          return String(item);
        }); // Careful: RN currently depends on this prefix
    
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
    
        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }
    
    // -----------------------------------------------------------------------------
    
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    
    var REACT_MODULE_REFERENCE;
    
    {
      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
    }
    
    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
    
    
      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
        return true;
      }
    
      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
          return true;
        }
      }
    
      return false;
    }
    
    function getWrappedName(outerType, innerType, wrapperName) {
      var displayName = outerType.displayName;
    
      if (displayName) {
        return displayName;
      }
    
      var functionName = innerType.displayName || innerType.name || '';
      return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    
    
    function getContextName(type) {
      return type.displayName || 'Context';
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    
    
    function getComponentNameFromType(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }
    
      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }
    
      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }
    
      if (typeof type === 'string') {
        return type;
      }
    
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return 'Fragment';
    
        case REACT_PORTAL_TYPE:
          return 'Portal';
    
        case REACT_PROFILER_TYPE:
          return 'Profiler';
    
        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';
    
        case REACT_SUSPENSE_TYPE:
          return 'Suspense';
    
        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
    
      }
    
      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + '.Consumer';
    
          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + '.Provider';
    
          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');
    
          case REACT_MEMO_TYPE:
            var outerName = type.displayName || null;
    
            if (outerName !== null) {
              return outerName;
            }
    
            return getComponentNameFromType(type.type) || 'Memo';
    
          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
    
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
    
          // eslint-disable-next-line no-fallthrough
        }
      }
    
      return null;
    }
    
    var assign = Object.assign;
    
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    
    function disabledLog() {}
    
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
    
          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.
    
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
          /* eslint-enable react-internal/no-production-logging */
        }
    
        disabledDepth++;
      }
    }
    function reenableLogs() {
      {
        disabledDepth--;
    
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.
    
          Object.defineProperties(console, {
            log: assign({}, props, {
              value: prevLog
            }),
            info: assign({}, props, {
              value: prevInfo
            }),
            warn: assign({}, props, {
              value: prevWarn
            }),
            error: assign({}, props, {
              value: prevError
            }),
            group: assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: assign({}, props, {
              value: prevGroupEnd
            })
          });
          /* eslint-enable react-internal/no-production-logging */
        }
    
        if (disabledDepth < 0) {
          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
        }
      }
    }
    
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.
    
    
        return '\n' + prefix + name;
      }
    }
    var reentry = false;
    var componentFrameCache;
    
    {
      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }
    
    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if ( !fn || reentry) {
        return '';
      }
    
      {
        var frame = componentFrameCache.get(fn);
    
        if (frame !== undefined) {
          return frame;
        }
      }
    
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
    
      Error.prepareStackTrace = undefined;
      var previousDispatcher;
    
      {
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
    
        ReactCurrentDispatcher.current = null;
        disableLogs();
      }
    
      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function () {
            throw Error();
          }; // $FlowFixMe
    
    
          Object.defineProperty(Fake.prototype, 'props', {
            set: function () {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            }
          });
    
          if (typeof Reflect === 'object' && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }
    
            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }
    
            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }
    
          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === 'string') {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split('\n');
          var controlLines = control.stack.split('\n');
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;
    
          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }
    
          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.
    
                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                    // but we have a user-provided "displayName"
                    // splice it in to make the stack more readable.
    
    
                    if (fn.displayName && _frame.includes('<anonymous>')) {
                      _frame = _frame.replace('<anonymous>', fn.displayName);
                    }
    
                    {
                      if (typeof fn === 'function') {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.
    
    
                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }
    
              break;
            }
          }
        }
      } finally {
        reentry = false;
    
        {
          ReactCurrentDispatcher.current = previousDispatcher;
          reenableLogs();
        }
    
        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.
    
    
      var name = fn ? fn.displayName || fn.name : '';
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
    
      {
        if (typeof fn === 'function') {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
    
      return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }
    
    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }
    
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
    
      if (type == null) {
        return '';
      }
    
      if (typeof type === 'function') {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }
    
      if (typeof type === 'string') {
        return describeBuiltInComponentFrame(type);
      }
    
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame('Suspense');
    
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame('SuspenseList');
      }
    
      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);
    
          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
    
          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
    
              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
        }
      }
    
      return '';
    }
    
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    
    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame.setExtraStackFrame(null);
        }
      }
    }
    
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
    
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
    
            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                // eslint-disable-next-line react-internal/prod-error-codes
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }
    
              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
              error$1 = ex;
            }
    
            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
    
              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
    
              setCurrentlyValidatingElement(null);
            }
    
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
    
              error('Failed %s type: %s', location, error$1.message);
    
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }
    
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    
    function isArray(a) {
      return isArrayImpl(a);
    }
    
    /*
     * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
     * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
     *
     * The functions in this module will throw an easier-to-understand,
     * easier-to-debug exception with a clear errors message message explaining the
     * problem. (Instead of a confusing exception thrown inside the implementation
     * of the `value` object).
     */
    // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
      {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
        return type;
      }
    } // $FlowFixMe only called in DEV, so void return is not possible.
    
    
    function willCoercionThrow(value) {
      {
        try {
          testStringCoercion(value);
          return false;
        } catch (e) {
          return true;
        }
      }
    }
    
    function testStringCoercion(value) {
      // If you ended up here by following an exception call stack, here's what's
      // happened: you supplied an object or symbol value to React (as a prop, key,
      // DOM attribute, CSS property, string ref, etc.) and when React tried to
      // coerce it to a string using `'' + value`, an exception was thrown.
      //
      // The most common types that will cause this exception are `Symbol` instances
      // and Temporal objects like `Temporal.Instant`. But any object that has a
      // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
      // exception. (Library authors do this to prevent users from using built-in
      // numeric operators like `+` or comparison operators like `>=` because custom
      // methods are needed to perform accurate arithmetic or comparison.)
      //
      // To fix the problem, coerce this object or symbol value to a string before
      // passing it to React. The most reliable way is usually `String(value)`.
      //
      // To find which value is throwing, check the browser or debugger console.
      // Before this exception was thrown, there should be `console.error` output
      // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
      // problem and how that type was used: key, atrribute, input value prop, etc.
      // In most cases, this console output also shows the component and its
      // ancestor components where the exception happened.
      //
      // eslint-disable-next-line react-internal/safe-string-coercion
      return '' + value;
    }
    function checkKeyStringCoercion(value) {
      {
        if (willCoercionThrow(value)) {
          error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
    
          return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
      }
    }
    
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    
    {
      didWarnAboutStringRefs = {};
    }
    
    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
    
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
    
      return config.ref !== undefined;
    }
    
    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
    
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
    
      return config.key !== undefined;
    }
    
    function warnIfStringRefCannotBeAutoConverted(config, self) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
    
          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
    
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }
    
    function defineKeyPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingKey = function () {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
    
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        };
    
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
    }
    
    function defineRefPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingRef = function () {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
    
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        };
    
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */
    
    
    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
    
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
    
        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.
    
        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
    
        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });
    
        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
    
      return element;
    };
    /**
     * https://github.com/reactjs/rfcs/pull/107
     * @param {*} type
     * @param {object} props
     * @param {string} key
     */
    
    function jsxDEV(type, config, maybeKey, source, self) {
      {
        var propName; // Reserved names are extracted
    
        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.
    
        if (maybeKey !== undefined) {
          {
            checkKeyStringCoercion(maybeKey);
          }
    
          key = '' + maybeKey;
        }
    
        if (hasValidKey(config)) {
          {
            checkKeyStringCoercion(config.key);
          }
    
          key = '' + config.key;
        }
    
        if (hasValidRef(config)) {
          ref = config.ref;
          warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object
    
    
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        } // Resolve default props
    
    
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
    
          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }
    
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
    
          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }
    
          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
    
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
    }
    
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    
    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }
    
    var propTypesMisspellWarningShown;
    
    {
      propTypesMisspellWarningShown = false;
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */
    
    
    function isValidElement(object) {
      {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
    }
    
    function getDeclarationErrorAddendum() {
      {
        if (ReactCurrentOwner$1.current) {
          var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
    
          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }
    
        return '';
      }
    }
    
    function getSourceInfoErrorAddendum(source) {
      {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
    
        return '';
      }
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */
    
    
    var ownerHasKeyUseWarning = {};
    
    function getCurrentComponentErrorInfo(parentType) {
      {
        var info = getDeclarationErrorAddendum();
    
        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    
          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }
    
        return info;
      }
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */
    
    
    function validateExplicitKey(element, parentType) {
      {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
    
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
    
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }
    
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
    
        var childOwner = '';
    
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
          // Give the component that originally created this child.
          childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        }
    
        setCurrentlyValidatingElement$1(element);
    
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
    
        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */
    
    
    function validateChildKeys(node, parentType) {
      {
        if (typeof node !== 'object') {
          return;
        }
    
        if (isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
    
            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
    
          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
    
              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */
    
    
    function validatePropTypes(element) {
      {
        var type = element.type;
    
        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }
    
        var propTypes;
    
        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }
    
        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentNameFromType(type);
          checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
    
          var _name = getComponentNameFromType(type);
    
          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
    
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */
    
    
    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);
    
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
    
          if (key !== 'children' && key !== 'key') {
            setCurrentlyValidatingElement$1(fragment);
    
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
    
            setCurrentlyValidatingElement$1(null);
            break;
          }
        }
    
        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);
    
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
    
          setCurrentlyValidatingElement$1(null);
        }
      }
    }
    
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
      {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
    
        if (!validType) {
          var info = '';
    
          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }
    
          var sourceInfo = getSourceInfoErrorAddendum(source);
    
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }
    
          var typeString;
    
          if (type === null) {
            typeString = 'null';
          } else if (isArray(type)) {
            typeString = 'array';
          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
            info = ' Did you accidentally export a JSX literal instead of a component?';
          } else {
            typeString = typeof type;
          }
    
          error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }
    
        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
    
        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
    
    
        if (validType) {
          var children = props.children;
    
          if (children !== undefined) {
            if (isStaticChildren) {
              if (isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                  validateChildKeys(children[i], type);
                }
    
                if (Object.freeze) {
                  Object.freeze(children);
                }
              } else {
                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
              }
            } else {
              validateChildKeys(children, type);
            }
          }
        }
    
        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }
    
        return element;
      }
    } // These two functions exist to still get child warnings in dev
    // even with the prod transform. This means that jsxDEV is purely
    // opt-in behavior for better messages but that we won't stop
    // giving you warnings if you use production apis.
    
    function jsxWithValidationStatic(type, props, key) {
      {
        return jsxWithValidation(type, props, key, true);
      }
    }
    function jsxWithValidationDynamic(type, props, key) {
      {
        return jsxWithValidation(type, props, key, false);
      }
    }
    
    var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
    // for now we can ship identical prod functions
    
    var jsxs =  jsxWithValidationStatic ;
    
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = jsx;
    exports.jsxs = jsxs;
      })();
    }
    
    }).call(this)}).call(this,require('_process'))
    },{"_process":13,"react":undefined}],46:[function(require,module,exports){
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    'use strict';var f=require("react"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
    function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;
    
    },{"react":undefined}],47:[function(require,module,exports){
    (function (process){(function (){
    'use strict';
    
    if (process.env.NODE_ENV === 'production') {
      module.exports = require('./cjs/react-jsx-runtime.production.min.js');
    } else {
      module.exports = require('./cjs/react-jsx-runtime.development.js');
    }
    
    }).call(this)}).call(this,require('_process'))
    },{"./cjs/react-jsx-runtime.development.js":45,"./cjs/react-jsx-runtime.production.min.js":46,"_process":13}],48:[function(require,module,exports){
    (function (process){(function (){
    'use strict';
    
    Object.defineProperty(exports, '__esModule', { value: true });
    
    var _objectSpread = require('@babel/runtime/helpers/objectSpread2');
    
    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }
    
    var _objectSpread__default = /*#__PURE__*/_interopDefaultLegacy(_objectSpread);
    
    /**
     * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
     *
     * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
     * during build.
     * @param {number} code
     */
    function formatProdErrorMessage(code) {
      return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
    }
    
    // Inlined version of the `symbol-observable` polyfill
    var $$observable = (function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    })();
    
    /**
     * These are private action types reserved by Redux.
     * For any unknown actions, you must return the current state.
     * If the current state is undefined, you must return the initial state.
     * Do not reference these action types directly in your code.
     */
    var randomString = function randomString() {
      return Math.random().toString(36).substring(7).split('').join('.');
    };
    
    var ActionTypes = {
      INIT: "@@redux/INIT" + randomString(),
      REPLACE: "@@redux/REPLACE" + randomString(),
      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
      }
    };
    
    /**
     * @param {any} obj The object to inspect.
     * @returns {boolean} True if the argument appears to be a plain object.
     */
    function isPlainObject(obj) {
      if (typeof obj !== 'object' || obj === null) return false;
      var proto = obj;
    
      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }
    
      return Object.getPrototypeOf(obj) === proto;
    }
    
    // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
    function miniKindOf(val) {
      if (val === void 0) return 'undefined';
      if (val === null) return 'null';
      var type = typeof val;
    
      switch (type) {
        case 'boolean':
        case 'string':
        case 'number':
        case 'symbol':
        case 'function':
          {
            return type;
          }
      }
    
      if (Array.isArray(val)) return 'array';
      if (isDate(val)) return 'date';
      if (isError(val)) return 'error';
      var constructorName = ctorName(val);
    
      switch (constructorName) {
        case 'Symbol':
        case 'Promise':
        case 'WeakMap':
        case 'WeakSet':
        case 'Map':
        case 'Set':
          return constructorName;
      } // other
    
    
      return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
    }
    
    function ctorName(val) {
      return typeof val.constructor === 'function' ? val.constructor.name : null;
    }
    
    function isError(val) {
      return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
    }
    
    function isDate(val) {
      if (val instanceof Date) return true;
      return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
    }
    
    function kindOf(val) {
      var typeOfVal = typeof val;
    
      if (process.env.NODE_ENV !== 'production') {
        typeOfVal = miniKindOf(val);
      }
    
      return typeOfVal;
    }
    
    /**
     * @deprecated
     *
     * **We recommend using the `configureStore` method
     * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
     *
     * Redux Toolkit is our recommended approach for writing Redux logic today,
     * including store setup, reducers, data fetching, and more.
     *
     * **For more details, please read this Redux docs page:**
     * **https://redux.js.org/introduction/why-rtk-is-redux-today**
     *
     * `configureStore` from Redux Toolkit is an improved version of `createStore` that
     * simplifies setup and helps avoid common bugs.
     *
     * You should not be using the `redux` core package by itself today, except for learning purposes.
     * The `createStore` method from the core `redux` package will not be removed, but we encourage
     * all users to migrate to using Redux Toolkit for all Redux code.
     *
     * If you want to use `createStore` without this visual deprecation warning, use
     * the `legacy_createStore` import instead:
     *
     * `import { legacy_createStore as createStore} from 'redux'`
     *
     */
    
    function createStore(reducer, preloadedState, enhancer) {
      var _ref2;
    
      if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
      }
    
      if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
      }
    
      if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
        }
    
        return enhancer(createStore)(reducer, preloadedState);
      }
    
      if (typeof reducer !== 'function') {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
      }
    
      var currentReducer = reducer;
      var currentState = preloadedState;
      var currentListeners = [];
      var nextListeners = currentListeners;
      var isDispatching = false;
      /**
       * This makes a shallow copy of currentListeners so we can use
       * nextListeners as a temporary list while dispatching.
       *
       * This prevents any bugs around consumers calling
       * subscribe/unsubscribe in the middle of a dispatch.
       */
    
      function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
          nextListeners = currentListeners.slice();
        }
      }
      /**
       * Reads the state tree managed by the store.
       *
       * @returns {any} The current state tree of your application.
       */
    
    
      function getState() {
        if (isDispatching) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
        }
    
        return currentState;
      }
      /**
       * Adds a change listener. It will be called any time an action is dispatched,
       * and some part of the state tree may potentially have changed. You may then
       * call `getState()` to read the current state tree inside the callback.
       *
       * You may call `dispatch()` from a change listener, with the following
       * caveats:
       *
       * 1. The subscriptions are snapshotted just before every `dispatch()` call.
       * If you subscribe or unsubscribe while the listeners are being invoked, this
       * will not have any effect on the `dispatch()` that is currently in progress.
       * However, the next `dispatch()` call, whether nested or not, will use a more
       * recent snapshot of the subscription list.
       *
       * 2. The listener should not expect to see all state changes, as the state
       * might have been updated multiple times during a nested `dispatch()` before
       * the listener is called. It is, however, guaranteed that all subscribers
       * registered before the `dispatch()` started will be called with the latest
       * state by the time it exits.
       *
       * @param {Function} listener A callback to be invoked on every dispatch.
       * @returns {Function} A function to remove this change listener.
       */
    
    
      function subscribe(listener) {
        if (typeof listener !== 'function') {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
        }
    
        if (isDispatching) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
        }
    
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
          if (!isSubscribed) {
            return;
          }
    
          if (isDispatching) {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
          }
    
          isSubscribed = false;
          ensureCanMutateNextListeners();
          var index = nextListeners.indexOf(listener);
          nextListeners.splice(index, 1);
          currentListeners = null;
        };
      }
      /**
       * Dispatches an action. It is the only way to trigger a state change.
       *
       * The `reducer` function, used to create the store, will be called with the
       * current state tree and the given `action`. Its return value will
       * be considered the **next** state of the tree, and the change listeners
       * will be notified.
       *
       * The base implementation only supports plain object actions. If you want to
       * dispatch a Promise, an Observable, a thunk, or something else, you need to
       * wrap your store creating function into the corresponding middleware. For
       * example, see the documentation for the `redux-thunk` package. Even the
       * middleware will eventually dispatch plain object actions using this method.
       *
       * @param {Object} action A plain object representing “what changed”. It is
       * a good idea to keep actions serializable so you can record and replay user
       * sessions, or use the time travelling `redux-devtools`. An action must have
       * a `type` property which may not be `undefined`. It is a good idea to use
       * string constants for action types.
       *
       * @returns {Object} For convenience, the same action object you dispatched.
       *
       * Note that, if you use a custom middleware, it may wrap `dispatch()` to
       * return something else (for example, a Promise you can await).
       */
    
    
      function dispatch(action) {
        if (!isPlainObject(action)) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
        }
    
        if (typeof action.type === 'undefined') {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        }
    
        if (isDispatching) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
        }
    
        try {
          isDispatching = true;
          currentState = currentReducer(currentState, action);
        } finally {
          isDispatching = false;
        }
    
        var listeners = currentListeners = nextListeners;
    
        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          listener();
        }
    
        return action;
      }
      /**
       * Replaces the reducer currently used by the store to calculate the state.
       *
       * You might need this if your app implements code splitting and you want to
       * load some of the reducers dynamically. You might also need this if you
       * implement a hot reloading mechanism for Redux.
       *
       * @param {Function} nextReducer The reducer for the store to use instead.
       * @returns {void}
       */
    
    
      function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
        }
    
        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
    
        dispatch({
          type: ActionTypes.REPLACE
        });
      }
      /**
       * Interoperability point for observable/reactive libraries.
       * @returns {observable} A minimal observable of state changes.
       * For more information, see the observable proposal:
       * https://github.com/tc39/proposal-observable
       */
    
    
      function observable() {
        var _ref;
    
        var outerSubscribe = subscribe;
        return _ref = {
          /**
           * The minimal observable subscription method.
           * @param {Object} observer Any object that can be used as an observer.
           * The observer object should have a `next` method.
           * @returns {subscription} An object with an `unsubscribe` method that can
           * be used to unsubscribe the observable from the store, and prevent further
           * emission of values from the observable.
           */
          subscribe: function subscribe(observer) {
            if (typeof observer !== 'object' || observer === null) {
              throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
            }
    
            function observeState() {
              if (observer.next) {
                observer.next(getState());
              }
            }
    
            observeState();
            var unsubscribe = outerSubscribe(observeState);
            return {
              unsubscribe: unsubscribe
            };
          }
        }, _ref[$$observable] = function () {
          return this;
        }, _ref;
      } // When a store is created, an "INIT" action is dispatched so that every
      // reducer returns their initial state. This effectively populates
      // the initial state tree.
    
    
      dispatch({
        type: ActionTypes.INIT
      });
      return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
      }, _ref2[$$observable] = observable, _ref2;
    }
    /**
     * Creates a Redux store that holds the state tree.
     *
     * **We recommend using `configureStore` from the
     * `@reduxjs/toolkit` package**, which replaces `createStore`:
     * **https://redux.js.org/introduction/why-rtk-is-redux-today**
     *
     * The only way to change the data in the store is to call `dispatch()` on it.
     *
     * There should only be a single store in your app. To specify how different
     * parts of the state tree respond to actions, you may combine several reducers
     * into a single reducer function by using `combineReducers`.
     *
     * @param {Function} reducer A function that returns the next state tree, given
     * the current state tree and the action to handle.
     *
     * @param {any} [preloadedState] The initial state. You may optionally specify it
     * to hydrate the state from the server in universal apps, or to restore a
     * previously serialized user session.
     * If you use `combineReducers` to produce the root reducer function, this must be
     * an object with the same shape as `combineReducers` keys.
     *
     * @param {Function} [enhancer] The store enhancer. You may optionally specify it
     * to enhance the store with third-party capabilities such as middleware,
     * time travel, persistence, etc. The only store enhancer that ships with Redux
     * is `applyMiddleware()`.
     *
     * @returns {Store} A Redux store that lets you read the state, dispatch actions
     * and subscribe to changes.
     */
    
    var legacy_createStore = createStore;
    
    /**
     * Prints a warning in the console if it exists.
     *
     * @param {String} message The warning message.
     * @returns {void}
     */
    function warning(message) {
      /* eslint-disable no-console */
      if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message);
      }
      /* eslint-enable no-console */
    
    
      try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
      } catch (e) {} // eslint-disable-line no-empty
    
    }
    
    function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
      var reducerKeys = Object.keys(reducers);
      var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
    
      if (reducerKeys.length === 0) {
        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
      }
    
      if (!isPlainObject(inputState)) {
        return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
      }
    
      var unexpectedKeys = Object.keys(inputState).filter(function (key) {
        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
      });
      unexpectedKeys.forEach(function (key) {
        unexpectedKeyCache[key] = true;
      });
      if (action && action.type === ActionTypes.REPLACE) return;
    
      if (unexpectedKeys.length > 0) {
        return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
      }
    }
    
    function assertReducerShape(reducers) {
      Object.keys(reducers).forEach(function (key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {
          type: ActionTypes.INIT
        });
    
        if (typeof initialState === 'undefined') {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(12) : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
        }
    
        if (typeof reducer(undefined, {
          type: ActionTypes.PROBE_UNKNOWN_ACTION()
        }) === 'undefined') {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(13) : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
        }
      });
    }
    /**
     * Turns an object whose values are different reducer functions, into a single
     * reducer function. It will call every child reducer, and gather their results
     * into a single state object, whose keys correspond to the keys of the passed
     * reducer functions.
     *
     * @param {Object} reducers An object whose values correspond to different
     * reducer functions that need to be combined into one. One handy way to obtain
     * it is to use ES6 `import * as reducers` syntax. The reducers may never return
     * undefined for any action. Instead, they should return their initial state
     * if the state passed to them was undefined, and the current state for any
     * unrecognized action.
     *
     * @returns {Function} A reducer function that invokes every reducer inside the
     * passed object, and builds a state object with the same shape.
     */
    
    
    function combineReducers(reducers) {
      var reducerKeys = Object.keys(reducers);
      var finalReducers = {};
    
      for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
    
        if (process.env.NODE_ENV !== 'production') {
          if (typeof reducers[key] === 'undefined') {
            warning("No reducer provided for key \"" + key + "\"");
          }
        }
    
        if (typeof reducers[key] === 'function') {
          finalReducers[key] = reducers[key];
        }
      }
    
      var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
      // keys multiple times.
    
      var unexpectedKeyCache;
    
      if (process.env.NODE_ENV !== 'production') {
        unexpectedKeyCache = {};
      }
    
      var shapeAssertionError;
    
      try {
        assertReducerShape(finalReducers);
      } catch (e) {
        shapeAssertionError = e;
      }
    
      return function combination(state, action) {
        if (state === void 0) {
          state = {};
        }
    
        if (shapeAssertionError) {
          throw shapeAssertionError;
        }
    
        if (process.env.NODE_ENV !== 'production') {
          var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
    
          if (warningMessage) {
            warning(warningMessage);
          }
        }
    
        var hasChanged = false;
        var nextState = {};
    
        for (var _i = 0; _i < finalReducerKeys.length; _i++) {
          var _key = finalReducerKeys[_i];
          var reducer = finalReducers[_key];
          var previousStateForKey = state[_key];
          var nextStateForKey = reducer(previousStateForKey, action);
    
          if (typeof nextStateForKey === 'undefined') {
            var actionType = action && action.type;
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
          }
    
          nextState[_key] = nextStateForKey;
          hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
    
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
      };
    }
    
    function bindActionCreator(actionCreator, dispatch) {
      return function () {
        return dispatch(actionCreator.apply(this, arguments));
      };
    }
    /**
     * Turns an object whose values are action creators, into an object with the
     * same keys, but with every function wrapped into a `dispatch` call so they
     * may be invoked directly. This is just a convenience method, as you can call
     * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
     *
     * For convenience, you can also pass an action creator as the first argument,
     * and get a dispatch wrapped function in return.
     *
     * @param {Function|Object} actionCreators An object whose values are action
     * creator functions. One handy way to obtain it is to use ES6 `import * as`
     * syntax. You may also pass a single function.
     *
     * @param {Function} dispatch The `dispatch` function available on your Redux
     * store.
     *
     * @returns {Function|Object} The object mimicking the original object, but with
     * every action creator wrapped into the `dispatch` call. If you passed a
     * function as `actionCreators`, the return value will also be a single
     * function.
     */
    
    
    function bindActionCreators(actionCreators, dispatch) {
      if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
      }
    
      if (typeof actionCreators !== 'object' || actionCreators === null) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
      }
    
      var boundActionCreators = {};
    
      for (var key in actionCreators) {
        var actionCreator = actionCreators[key];
    
        if (typeof actionCreator === 'function') {
          boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
      }
    
      return boundActionCreators;
    }
    
    /**
     * Composes single-argument functions from right to left. The rightmost
     * function can take multiple arguments as it provides the signature for
     * the resulting composite function.
     *
     * @param {...Function} funcs The functions to compose.
     * @returns {Function} A function obtained by composing the argument functions
     * from right to left. For example, compose(f, g, h) is identical to doing
     * (...args) => f(g(h(...args))).
     */
    function compose() {
      for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }
    
      if (funcs.length === 0) {
        return function (arg) {
          return arg;
        };
      }
    
      if (funcs.length === 1) {
        return funcs[0];
      }
    
      return funcs.reduce(function (a, b) {
        return function () {
          return a(b.apply(void 0, arguments));
        };
      });
    }
    
    /**
     * Creates a store enhancer that applies middleware to the dispatch method
     * of the Redux store. This is handy for a variety of tasks, such as expressing
     * asynchronous actions in a concise manner, or logging every action payload.
     *
     * See `redux-thunk` package as an example of the Redux middleware.
     *
     * Because middleware is potentially asynchronous, this should be the first
     * store enhancer in the composition chain.
     *
     * Note that each middleware will be given the `dispatch` and `getState` functions
     * as named arguments.
     *
     * @param {...Function} middlewares The middleware chain to be applied.
     * @returns {Function} A store enhancer applying the middleware.
     */
    
    function applyMiddleware() {
      for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
        middlewares[_key] = arguments[_key];
      }
    
      return function (createStore) {
        return function () {
          var store = createStore.apply(void 0, arguments);
    
          var _dispatch = function dispatch() {
            throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(15) : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
          };
    
          var middlewareAPI = {
            getState: store.getState,
            dispatch: function dispatch() {
              return _dispatch.apply(void 0, arguments);
            }
          };
          var chain = middlewares.map(function (middleware) {
            return middleware(middlewareAPI);
          });
          _dispatch = compose.apply(void 0, chain)(store.dispatch);
          return _objectSpread__default['default'](_objectSpread__default['default']({}, store), {}, {
            dispatch: _dispatch
          });
        };
      };
    }
    
    /*
     * This is a dummy function to check if the function name has been altered by minification.
     * If the function has been minified and NODE_ENV !== 'production', warn the user.
     */
    
    function isCrushed() {}
    
    if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
      warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
    }
    
    exports.__DO_NOT_USE__ActionTypes = ActionTypes;
    exports.applyMiddleware = applyMiddleware;
    exports.bindActionCreators = bindActionCreators;
    exports.combineReducers = combineReducers;
    exports.compose = compose;
    exports.createStore = createStore;
    exports.legacy_createStore = legacy_createStore;
    
    }).call(this)}).call(this,require('_process'))
    },{"@babel/runtime/helpers/objectSpread2":4,"_process":13}],49:[function(require,module,exports){
    (function (process){(function (){
    /**
     * @license React
     * use-sync-external-store-shim.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    
    'use strict';
    
    if (process.env.NODE_ENV !== "production") {
      (function() {
    
              'use strict';
    
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        'function'
    ) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    }
              var React = require('react');
    
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    
    function error(format) {
      {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
    
          printWarning('error', format, args);
        }
      }
    }
    
    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
    
        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
    
    
        var argsWithFormat = args.map(function (item) {
          return String(item);
        }); // Careful: RN currently depends on this prefix
    
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
    
        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }
    
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    function is(x, y) {
      return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
      ;
    }
    
    var objectIs = typeof Object.is === 'function' ? Object.is : is;
    
    // dispatch for CommonJS interop named imports.
    
    var useState = React.useState,
        useEffect = React.useEffect,
        useLayoutEffect = React.useLayoutEffect,
        useDebugValue = React.useDebugValue;
    var didWarnOld18Alpha = false;
    var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
    // because of a very particular set of implementation details and assumptions
    // -- change any one of them and it will break. The most important assumption
    // is that updates are always synchronous, because concurrent rendering is
    // only available in versions of React that also have a built-in
    // useSyncExternalStore API. And we only use this shim when the built-in API
    // does not exist.
    //
    // Do not assume that the clever hacks used by this hook also work in general.
    // The point of this shim is to replace the need for hacks by other libraries.
    
    function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
    // React do not expose a way to check if we're hydrating. So users of the shim
    // will need to track that themselves and return the correct value
    // from `getSnapshot`.
    getServerSnapshot) {
      {
        if (!didWarnOld18Alpha) {
          if (React.startTransition !== undefined) {
            didWarnOld18Alpha = true;
    
            error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
          }
        }
      } // Read the current snapshot from the store on every render. Again, this
      // breaks the rules of React, and only works here because of specific
      // implementation details, most importantly that updates are
      // always synchronous.
    
    
      var value = getSnapshot();
    
      {
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
    
          if (!objectIs(value, cachedValue)) {
            error('The result of getSnapshot should be cached to avoid an infinite loop');
    
            didWarnUncachedGetSnapshot = true;
          }
        }
      } // Because updates are synchronous, we don't queue them. Instead we force a
      // re-render whenever the subscribed state changes by updating an some
      // arbitrary useState hook. Then, during render, we call getSnapshot to read
      // the current value.
      //
      // Because we don't actually use the state returned by the useState hook, we
      // can save a bit of memory by storing other stuff in that slot.
      //
      // To implement the early bailout, we need to track some things on a mutable
      // object. Usually, we would put that in a useRef hook, but we can stash it in
      // our useState hook instead.
      //
      // To force a re-render, we call forceUpdate({inst}). That works because the
      // new object always fails an equality check.
    
    
      var _useState = useState({
        inst: {
          value: value,
          getSnapshot: getSnapshot
        }
      }),
          inst = _useState[0].inst,
          forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
      // in the layout phase so we can access it during the tearing check that
      // happens on subscribe.
    
    
      useLayoutEffect(function () {
        inst.value = value;
        inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
        // commit phase if there was an interleaved mutation. In concurrent mode
        // this can happen all the time, but even in synchronous mode, an earlier
        // effect may have mutated the store.
    
        if (checkIfSnapshotChanged(inst)) {
          // Force a re-render.
          forceUpdate({
            inst: inst
          });
        }
      }, [subscribe, value, getSnapshot]);
      useEffect(function () {
        // Check for changes right before subscribing. Subsequent changes will be
        // detected in the subscription handler.
        if (checkIfSnapshotChanged(inst)) {
          // Force a re-render.
          forceUpdate({
            inst: inst
          });
        }
    
        var handleStoreChange = function () {
          // TODO: Because there is no cross-renderer API for batching updates, it's
          // up to the consumer of this library to wrap their subscription event
          // with unstable_batchedUpdates. Should we try to detect when this isn't
          // the case and print a warning in development?
          // The store changed. Check if the snapshot changed since the last time we
          // read from the store.
          if (checkIfSnapshotChanged(inst)) {
            // Force a re-render.
            forceUpdate({
              inst: inst
            });
          }
        }; // Subscribe to the store and return a clean-up function.
    
    
        return subscribe(handleStoreChange);
      }, [subscribe]);
      useDebugValue(value);
      return value;
    }
    
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      var prevValue = inst.value;
    
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(prevValue, nextValue);
      } catch (error) {
        return true;
      }
    }
    
    function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
      // Note: The shim does not use getServerSnapshot, because pre-18 versions of
      // React do not expose a way to check if we're hydrating. So users of the shim
      // will need to track that themselves and return the correct value
      // from `getSnapshot`.
      return getSnapshot();
    }
    
    var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
    
    var isServerEnvironment = !canUseDOM;
    
    var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
    var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;
    
    exports.useSyncExternalStore = useSyncExternalStore$2;
              /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
        'function'
    ) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }
            
      })();
    }
    
    }).call(this)}).call(this,require('_process'))
    },{"_process":13,"react":undefined}],50:[function(require,module,exports){
    /**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    'use strict';var e=require("react");function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
    function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;
    
    },{"react":undefined}],51:[function(require,module,exports){
    (function (process){(function (){
    /**
     * @license React
     * use-sync-external-store-shim/with-selector.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    
    'use strict';
    
    if (process.env.NODE_ENV !== "production") {
      (function() {
    
              'use strict';
    
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        'function'
    ) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    }
              var React = require('react');
    var shim = require('use-sync-external-store/shim');
    
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    function is(x, y) {
      return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
      ;
    }
    
    var objectIs = typeof Object.is === 'function' ? Object.is : is;
    
    var useSyncExternalStore = shim.useSyncExternalStore;
    
    // for CommonJS interop.
    
    var useRef = React.useRef,
        useEffect = React.useEffect,
        useMemo = React.useMemo,
        useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.
    
    function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
      // Use this to track the rendered snapshot.
      var instRef = useRef(null);
      var inst;
    
      if (instRef.current === null) {
        inst = {
          hasValue: false,
          value: null
        };
        instRef.current = inst;
      } else {
        inst = instRef.current;
      }
    
      var _useMemo = useMemo(function () {
        // Track the memoized state using closure variables that are local to this
        // memoized instance of a getSnapshot function. Intentionally not using a
        // useRef hook, because that state would be shared across all concurrent
        // copies of the hook/component.
        var hasMemo = false;
        var memoizedSnapshot;
        var memoizedSelection;
    
        var memoizedSelector = function (nextSnapshot) {
          if (!hasMemo) {
            // The first time the hook is called, there is no memoized result.
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
    
            var _nextSelection = selector(nextSnapshot);
    
            if (isEqual !== undefined) {
              // Even if the selector has changed, the currently rendered selection
              // may be equal to the new selection. We should attempt to reuse the
              // current value if possible, to preserve downstream memoizations.
              if (inst.hasValue) {
                var currentSelection = inst.value;
    
                if (isEqual(currentSelection, _nextSelection)) {
                  memoizedSelection = currentSelection;
                  return currentSelection;
                }
              }
            }
    
            memoizedSelection = _nextSelection;
            return _nextSelection;
          } // We may be able to reuse the previous invocation's result.
    
    
          // We may be able to reuse the previous invocation's result.
          var prevSnapshot = memoizedSnapshot;
          var prevSelection = memoizedSelection;
    
          if (objectIs(prevSnapshot, nextSnapshot)) {
            // The snapshot is the same as last time. Reuse the previous selection.
            return prevSelection;
          } // The snapshot has changed, so we need to compute a new selection.
    
    
          // The snapshot has changed, so we need to compute a new selection.
          var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
          // has changed. If it hasn't, return the previous selection. That signals
          // to React that the selections are conceptually equal, and we can bail
          // out of rendering.
    
          // If a custom isEqual function is provided, use that to check if the data
          // has changed. If it hasn't, return the previous selection. That signals
          // to React that the selections are conceptually equal, and we can bail
          // out of rendering.
          if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
            return prevSelection;
          }
    
          memoizedSnapshot = nextSnapshot;
          memoizedSelection = nextSelection;
          return nextSelection;
        }; // Assigning this to a constant so that Flow knows it can't change.
    
    
        // Assigning this to a constant so that Flow knows it can't change.
        var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;
    
        var getSnapshotWithSelector = function () {
          return memoizedSelector(getSnapshot());
        };
    
        var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
          return memoizedSelector(maybeGetServerSnapshot());
        };
        return [getSnapshotWithSelector, getServerSnapshotWithSelector];
      }, [getSnapshot, getServerSnapshot, selector, isEqual]),
          getSelection = _useMemo[0],
          getServerSelection = _useMemo[1];
    
      var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
      useEffect(function () {
        inst.hasValue = true;
        inst.value = value;
      }, [value]);
      useDebugValue(value);
      return value;
    }
    
    exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
              /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
        'function'
    ) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }
            
      })();
    }
    
    }).call(this)}).call(this,require('_process'))
    },{"_process":13,"react":undefined,"use-sync-external-store/shim":53}],52:[function(require,module,exports){
    /**
     * @license React
     * use-sync-external-store-shim/with-selector.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    'use strict';var h=require("react"),n=require("use-sync-external-store/shim");function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
    exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
    u(function(){f.hasValue=!0;f.value=d},[d]);w(d);return d};
    
    },{"react":undefined,"use-sync-external-store/shim":53}],53:[function(require,module,exports){
    (function (process){(function (){
    'use strict';
    
    if (process.env.NODE_ENV === 'production') {
      module.exports = require('../cjs/use-sync-external-store-shim.production.min.js');
    } else {
      module.exports = require('../cjs/use-sync-external-store-shim.development.js');
    }
    
    }).call(this)}).call(this,require('_process'))
    },{"../cjs/use-sync-external-store-shim.development.js":49,"../cjs/use-sync-external-store-shim.production.min.js":50,"_process":13}],54:[function(require,module,exports){
    (function (process){(function (){
    'use strict';
    
    if (process.env.NODE_ENV === 'production') {
      module.exports = require('../cjs/use-sync-external-store-shim/with-selector.production.min.js');
    } else {
      module.exports = require('../cjs/use-sync-external-store-shim/with-selector.development.js');
    }
    
    }).call(this)}).call(this,require('_process'))
    },{"../cjs/use-sync-external-store-shim/with-selector.development.js":51,"../cjs/use-sync-external-store-shim/with-selector.production.min.js":52,"_process":13}],55:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.inventoryData = exports.currenciesData = void 0;
    var inventoryData = [{
      name: 'Hello World Hat',
      price: 23.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hello-world-hat.jpg'
    }, {
      name: 'Learn From Home Joggers',
      price: 45.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sweatpants.jpg'
    }, {
      name: 'Java Tee',
      price: 17.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/java-tee.jpg'
    }, {
      name: 'Python Tee',
      price: 17.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/python-tee.jpg'
    }, {
      name: 'SQL Tee',
      price: 17.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sql-tee.jpg'
    }, {
      name: 'Hello World Hoodie',
      price: 49.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hoodie.jpg'
    }];
    exports.inventoryData = inventoryData;
    var currenciesData = ['USD', 'EUR', 'CAD'];
    exports.currenciesData = currenciesData;
    
    },{}],56:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.App = void 0;
    var _react = _interopRequireDefault(require("react"));
    var _Inventory = require("../features/inventory/Inventory.js");
    var _CurrencyFilter = require("../features/currencyFilter/CurrencyFilter.js");
    var _jsxRuntime = require("react/jsx-runtime");
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    // Import the Cart component here.
    
    // Render the Cart component below <Inventory />
    var App = function App(props) {
      var state = props.state,
        dispatch = props.dispatch;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CurrencyFilter.CurrencyFilter, {
          currencyFilter: state.currencyFilter,
          dispatch: dispatch
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Inventory.Inventory, {
          inventory: state.inventory,
          currencyFilter: state.currencyFilter,
          dispatch: dispatch
        })]
      });
    };
    exports.App = App;
    
    },{"../features/currencyFilter/CurrencyFilter.js":59,"../features/inventory/Inventory.js":61,"react":undefined,"react/jsx-runtime":47}],57:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.store = void 0;
    var _redux = require("redux");
    var _inventorySlice = require("../features/inventory/inventorySlice.js");
    var _cartSlice = require("../features/cart/cartSlice.js");
    var _currencyFilterSlice = require("../features/currencyFilter/currencyFilterSlice.js");
    var _searchTermSlice = require("../features/searchTerm/searchTermSlice.js");
    // import { cartReducer } from "../features/cart/cartSlice";
    // import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
    // import { inventoryReducer } from "../features/inventory/inventorySlice";
    // import { configureStore } from "@reduxjs/toolkit";
    
    // const store = configureStore ({
    //     reducer: {
    //         cart: cartReducer,
    //         currencyFilter: currencyFilterReducer,
    //         inventory: inventoryReducer
    //     }
    // })
    
    // export default store;
    
    // Import createStore and combineReducers here.
    
    // Import the slice reducers here.
    
    // Create and export the store here.
    var store = (0, _redux.createStore)((0, _redux.combineReducers)({
      inventory: _inventorySlice.inventoryReducer,
      cart: _cartSlice.cartReducer,
      currentFilter: _currencyFilterSlice.currencyFilterReducer,
      searchTerm: _searchTermSlice.searchTermReducer
    }));
    exports.store = store;
    
    },{"../features/cart/cartSlice.js":58,"../features/currencyFilter/currencyFilterSlice.js":60,"../features/inventory/inventorySlice.js":62,"../features/searchTerm/searchTermSlice.js":63,"redux":48}],58:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.changeItemQuantity = exports.cartReducer = exports.addItem = void 0;
    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    var addItem = function addItem(itemToAdd) {
      return {
        type: 'cart/addItem',
        payload: itemToAdd
      };
    };
    exports.addItem = addItem;
    var changeItemQuantity = function changeItemQuantity(name, newQuantity) {
      return {
        type: 'cart/changeItemQuantity',
        payload: {
          name: name,
          newQuantity: newQuantity
        }
      };
    };
    exports.changeItemQuantity = changeItemQuantity;
    var initialCart = {};
    var cartReducer = function cartReducer() {
      var cart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCart;
      var _ref = arguments.length > 1 ? arguments[1] : undefined,
        type = _ref.type,
        payload = _ref.payload;
      switch (type) {
        case 'cart/addItem':
          {
            var name = payload.name,
              price = payload.price;
            var quantity = cart[name] ? cart[name].quantity + 1 : 1;
            var newItem = {
              price: price,
              quantity: quantity
            };
            return _objectSpread(_objectSpread({}, cart), {}, _defineProperty({}, name, newItem));
          }
        case 'cart/changeItemQuantity':
          {
            var _name = payload.name,
              newQuantity = payload.newQuantity;
            var itemToUpdate = cart[_name];
            var updateItem = _objectSpread(_objectSpread({}, itemToUpdate), {}, {
              quantity: newQuantity
            });
            return _objectSpread(_objectSpread({}, cart), {}, _defineProperty({}, _name, updateItem));
          }
        default:
          return cart;
      }
    };
    exports.cartReducer = cartReducer;
    
    },{}],59:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurrencyFilter = void 0;
    var _react = _interopRequireDefault(require("react"));
    var _data = require("../../../data.js");
    var _currencyFilterSlice = require("./currencyFilterSlice.js");
    var _jsxRuntime = require("react/jsx-runtime");
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    var CurrencyFilter = function CurrencyFilter(_ref) {
      var currencyFilter = _ref.currencyFilter,
        dispatch = _ref.dispatch;
      var onClickHandler = function onClickHandler(currency) {
        dispatch((0, _currencyFilterSlice.setCurrency)(currency));
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "currency-filters-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Choose a currency"
        }), _data.currenciesData.map(createCurrencyButton)]
      });
      function createCurrencyButton(currency) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "currency-button ".concat(currencyFilter === currency && 'selected'),
          onClick: function onClick() {
            return onClickHandler(currency);
          },
          children: currency
        }, currency);
      }
    };
    exports.CurrencyFilter = CurrencyFilter;
    
    },{"../../../data.js":55,"./currencyFilterSlice.js":60,"react":undefined,"react/jsx-runtime":47}],60:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setCurrency = exports.currencyFilterReducer = void 0;
    var initialCurrencyFilter = 'USD';
    var currencyFilterReducer = function currencyFilterReducer() {
      var currencyFilter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCurrencyFilter;
      var action = arguments.length > 1 ? arguments[1] : undefined;
      switch (action.type) {
        case 'currencyFilter/setCurrency':
          {
            return action.payload;
          }
        default:
          {
            return currencyFilter;
          }
      }
    };
    exports.currencyFilterReducer = currencyFilterReducer;
    var setCurrency = function setCurrency(currency) {
      return {
        type: 'currencyFilter/setCurrency',
        payload: currency
      };
    };
    exports.setCurrency = setCurrency;
    
    },{}],61:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Inventory = void 0;
    var _react = _interopRequireWildcard(require("react"));
    var _utilities = require("../../utilities/utilities.js");
    var _cartSlice = require("../cart/cartSlice.js");
    var _inventorySlice = require("./inventorySlice");
    var _jsxRuntime = require("react/jsx-runtime");
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    var Inventory = function Inventory(_ref) {
      var inventory = _ref.inventory,
        currencyFilter = _ref.currencyFilter,
        dispatch = _ref.dispatch;
      var onMount = function onMount() {
        dispatch((0, _inventorySlice.loadData)());
      };
      (0, _react.useEffect)(onMount, [dispatch]);
      var onClickHandler = function onClickHandler(inventoryItem) {
        dispatch((0, _cartSlice.addItem)(inventoryItem));
      };
      if (inventory.length === 0) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: " Sorry, no products are currently available... "
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        id: "inventory-container",
        children: inventory.map(createInventoryItem)
      });
      function createInventoryItem(inventoryItem) {
        var price = inventoryItem.price,
          name = inventoryItem.name,
          img = inventoryItem.img;
        var displayPrice = (0, _utilities.calculatePrice)(price, currencyFilter);
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
          className: "item",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: img,
            alt: ''
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            children: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
            className: "price",
            children: [(0, _utilities.getCurrencySymbol)(currencyFilter), displayPrice.toFixed(2), " ", currencyFilter]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return onClickHandler(inventoryItem);
            },
            className: "add-to-cart-button",
            children: "Add to Cart"
          })]
        }, name);
      }
    };
    exports.Inventory = Inventory;
    
    },{"../../utilities/utilities.js":65,"../cart/cartSlice.js":58,"./inventorySlice":62,"react":undefined,"react/jsx-runtime":47}],62:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.loadData = exports.inventoryReducer = void 0;
    var _data = require("../../../data.js");
    var loadData = function loadData(data) {
      return {
        type: 'inventory/loadData',
        payload: _data.inventoryData
      };
    };
    exports.loadData = loadData;
    var initialInventory = [];
    var inventoryReducer = function inventoryReducer() {
      var inventory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialInventory;
      var action = arguments.length > 1 ? arguments[1] : undefined;
      switch (action.type) {
        case 'inventory/loadData':
          {
            return action.payload;
          }
        default:
          {
            return inventory;
          }
      }
    };
    exports.inventoryReducer = inventoryReducer;
    
    },{"../../../data.js":55}],63:[function(require,module,exports){
    /*
    Extra Credit:
    1. Create a function called searchTermReducer that can handle the following action types:
        * 'searchTerm/setSearchTerm'
        * 'searchTerm/clearSearchTerm'
        * Don't forget to set the initial state and return state by default!
    
    2. Create a function called setSearchTerm
        * It has one parameter, term
        * It returns an action object whose payload is the term value
        * See SearchTerm.js for how this will be used.
    
    3. Create a function called clearSearchTerm
        * It returns an action object with no payload
        * See SearchTerm.js for how this will be used.
    
    */
    "use strict";
    
    },{}],64:[function(require,module,exports){
    "use strict";
    
    var _react = _interopRequireDefault(require("react"));
    var _client = require("react-dom/client");
    var _reactRedux = require("react-redux");
    var _App = require("./app/App.js");
    var _store = require("./app/store.js");
    var _jsxRuntime = require("react/jsx-runtime");
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    var root = (0, _client.createRoot)(document.getElementById('root'));
    // Import the store here.
    
    // Pass state and dispatch props to the <App /> component.
    var render = function render() {
      root.render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_App.App, {
        state: _store.store.getState(),
        dispatch: _store.store.dispatch
      }));
    };
    render();
    
    // Subscribe render to the store.
    _store.store.subscribe(render);
    
    },{"./app/App.js":56,"./app/store.js":57,"react":undefined,"react-dom/client":14,"react-redux":30,"react/jsx-runtime":47}],65:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.calculatePrice = calculatePrice;
    exports.calculateTotal = calculateTotal;
    exports.getCurrencySymbol = getCurrencySymbol;
    function calculatePrice(price, currency) {
      switch (currency) {
        case 'EUR':
          return price * 0.86;
        case 'CAD':
          return price * 1.33;
        default:
          return price;
      }
    }
    function calculateTotal(cart, currency) {
      var totalUSD = 0;
      Object.keys(cart).forEach(function (itemName) {
        totalUSD += cart[itemName].price * cart[itemName].quantity;
      });
      return calculatePrice(totalUSD, currency).toFixed(2);
    }
    function getCurrencySymbol(currencyFilter) {
      switch (currencyFilter) {
        case 'USD':
          return '$';
        case 'EUR':
          return '€';
        case 'CAD':
          return '$';
        default:
          return '';
      }
    }
    
    },{}]},{},[64]);
    