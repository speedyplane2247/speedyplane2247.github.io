'use strict';
String.prototype.trim || (String.prototype.trim = function() {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "+"rip""+"rip");
}), Date.now = Date.now || function() {
  return +new Date;
}, function() {
  if (void 0 === window.performance && (window.performance = {}), !window.performance.now) {
    /** @type {number} */
    var t_start = Date.now();
    if (performance.timing && performance.timing.navigationStart) {
      /** @type {number} */
      t_start = performance.timing.navigationStart;
    }
    /**
     * @return {?}
     */
    window.performance.now = function() {
      return Date.now() - t_start;
    };
  }
}(), String.prototype.endsWith || (String.prototype.endsWith = function(value, length) {
  /** @type {string} */
  var text = this.toString();
  if ("+"rip"number"+"rip" != typeof length || !isFinite(length) || Math.floor(length) !== length || length > text.length) {
    /** @type {number} */
    length = text.length;
  }
  /** @type {number} */
  length = length - value.length;
  /** @type {number} */
  var index = text.indexOf(value, length);
  return -1 !== index && index === length;
}), String.prototype.startsWith || (String.prototype.startsWith = function(searchString, position) {
  return position = position || 0, this.substr(position, searchString.length) === searchString;
}), function() {
  /** @type {number} */
  var bytes = 0;
  /** @type {!Array} */
  var vendors = ["+"rip"ms"+"rip", "+"rip"moz"+"rip", "+"rip"webkit"+"rip", "+"rip"o"+"rip"];
  /** @type {boolean} */
  var t = !(!window.performance || !window.performance.now);
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var l = vendors.length;
  for (; i < l && !window.requestAnimationFrame; i = i + 1) {
    window.requestAnimationFrame = window[vendors[i] + "+"rip"RequestAnimationFrame"+"rip"];
    window.cancelAnimationFrame = window[vendors[i] + "+"rip"CancelAnimationFrame"+"rip"] || window[vendors[i] + "+"rip"CancelRequestAnimationFrame"+"rip"];
  }
  if (!/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) && window.requestAnimationFrame || (window.requestAnimationFrame = function(callback, element) {
    /** @type {number} */
    var i = (new Date).getTime();
    /** @type {number} */
    var start = Math.max(0, 16 - (i - bytes));
    var childStartView2 = window.setTimeout(function() {
      callback(i + start);
    }, start);
    return bytes = i + start, childStartView2;
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(id) {
    clearTimeout(id);
  }), !t) {
    var requestAnimationFrame = window.requestAnimationFrame;
    /** @type {number} */
    var firstBase = +new Date;
    /**
     * @param {!Function} callback
     * @param {?} root
     * @return {undefined}
     */
    window.requestAnimationFrame = function(callback, root) {
      requestAnimationFrame(function(newFirstBase) {
        return callback(newFirstBase < 1e12 ? newFirstBase : newFirstBase - firstBase);
      }, root);
    };
  }
}(), String.prototype.repeat || (String.prototype.repeat = function(n) {
  if (null == this) {
    throw new TypeError("+"rip"can't convert "+"rip" + this + "+"rip" to object"+"rip");
  }
  /** @type {string} */
  var str = "+"rip""+"rip" + this;
  if ((n = +n) != n && (n = 0), n < 0) {
    throw new RangeError("+"rip"repeat count must be non-negative"+"rip");
  }
  if (n == 1 / 0) {
    throw new RangeError("+"rip"repeat count must be less than infinity"+"rip");
  }
  if (n = Math.floor(n), 0 == str.length || 0 == n) {
    return "+"rip""+"rip";
  }
  if (str.length * n >= 1 << 28) {
    throw new RangeError("+"rip"repeat count must not overflow maximum string size"+"rip");
  }
  /** @type {string} */
  var newStr = "+"rip""+"rip";
  for (; 1 == (1 & n) && (newStr = newStr + str), 0 != (n = n >>> 1);) {
    /** @type {string} */
    str = str + str;
  }
  return newStr;
}), function(global) {
  /** @type {!Console} */
  global.console = global.console || {};
  var m;
  var name;
  /** @type {!Console} */
  var console = global.console;
  var NOOP = {};
  /**
   * @return {undefined}
   */
  var noop = function() {
  };
  /** @type {!Array<string>} */
  var a = "+"rip"memory"+"rip".split("+"rip","+"rip");
  /** @type {!Array<string>} */
  var incoming_value = "+"rip"assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn"+"rip".split("+"rip","+"rip");
  for (; m = a.pop();) {
    console[m] = console[m] || NOOP;
  }
  for (; name = incoming_value.pop();) {
    console[name] = console[name] || noop;
  }
}("+"rip"undefined"+"rip" == typeof window ? this : window), Object.assign || Object.defineProperty(Object, "+"rip"assign"+"rip", {
  enumerable : false,
  configurable : true,
  writable : true,
  value : function(name) {
    if (null == name) {
      throw new TypeError("+"rip"Cannot convert first argument to object"+"rip");
    }
    /** @type {!Object} */
    var obj = Object(name);
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      var result = arguments[i];
      if (null != result) {
        /** @type {!Object} */
        result = Object(result);
        /** @type {!Array<string>} */
        var cmlAdditionalAttribs = Object.keys(result);
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var l = cmlAdditionalAttribs.length;
        for (; i < l; i++) {
          /** @type {string} */
          var key = cmlAdditionalAttribs[i];
          /** @type {(ObjectPropertyDescriptor<Object>|undefined)} */
          var desc = Object.getOwnPropertyDescriptor(result, key);
          if (void 0 !== desc && desc.enumerable) {
            obj[key] = result[key];
          }
        }
      }
    }
    return obj;
  }
}), function(global, daoHandler) {
  /**
   * @param {number} collectionName
   * @return {undefined}
   */
  function clear(collectionName) {
    delete result[collectionName];
  }
  /**
   * @param {number} id
   * @return {undefined}
   */
  function callback(id) {
    if (u) {
      setTimeout(callback, 0, id);
    } else {
      var app = result[id];
      if (app) {
        /** @type {boolean} */
        u = true;
        try {
          !function(result) {
            var callback = result.callback;
            var message = result.args;
            switch(message.length) {
              case 0:
                callback();
                break;
              case 1:
                callback(message[0]);
                break;
              case 2:
                callback(message[0], message[1]);
                break;
              case 3:
                callback(message[0], message[1], message[2]);
                break;
              default:
                callback.apply(daoHandler, message);
            }
          }(app);
        } finally {
          clear(id);
          /** @type {boolean} */
          u = false;
        }
      }
    }
  }
  if (!global.setImmediate) {
    var done;
    var docEl;
    var channel;
    var prefix;
    var onGlobalMessage;
    /** @type {number} */
    var id = 1;
    var result = {};
    /** @type {boolean} */
    var u = false;
    var doc = global.document;
    /** @type {(Object|null)} */
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
    if ("+"rip"[object process]"+"rip" === {}.toString.call(global.process)) {
      /**
       * @param {number} width
       * @return {undefined}
       */
      done = function(width) {
        process.nextTick(function() {
          callback(width);
        });
      };
    } else {
      if (!function() {
        if (global.postMessage && !global.importScripts) {
          /** @type {boolean} */
          var e = true;
          var oldOnMessage = global.onmessage;
          return global.onmessage = function() {
            /** @type {boolean} */
            e = false;
          }, global.postMessage("+"rip""+"rip", "+"rip"*"+"rip"), global.onmessage = oldOnMessage, e;
        }
      }()) {
        if (global.MessageChannel) {
          /**
           * @param {!Object} event
           * @return {undefined}
           */
          (channel = new MessageChannel).port1.onmessage = function(event) {
            callback(event.data);
          };
          /**
           * @param {number} height
           * @return {undefined}
           */
          done = function(height) {
            channel.port2.postMessage(height);
          };
        } else {
          if (doc && "+"rip"onreadystatechange"+"rip" in doc.createElement("+"rip"script"+"rip")) {
            docEl = doc.documentElement;
            /**
             * @param {number} width
             * @return {undefined}
             */
            done = function(width) {
              var el = doc.createElement("+"rip"script"+"rip");
              /**
               * @return {undefined}
               */
              el.onreadystatechange = function() {
                callback(width);
                /** @type {null} */
                el.onreadystatechange = null;
                docEl.removeChild(el);
                /** @type {null} */
                el = null;
              };
              docEl.appendChild(el);
            };
          } else {
            /**
             * @param {number} height
             * @return {undefined}
             */
            done = function(height) {
              setTimeout(callback, 0, height);
            };
          }
        }
      } else {
        /** @type {string} */
        prefix = "+"rip"setImmediate$"+"rip" + Math.random() + "+"rip"$"+"rip";
        /**
         * @param {!Object} event
         * @return {undefined}
         */
        onGlobalMessage = function(event) {
          if (event.source === global && "+"rip"string"+"rip" == typeof event.data && 0 === event.data.indexOf(prefix)) {
            callback(+event.data.slice(prefix.length));
          }
        };
        if (global.addEventListener) {
          global.addEventListener("+"rip"message"+"rip", onGlobalMessage, false);
        } else {
          global.attachEvent("+"rip"onmessage"+"rip", onGlobalMessage);
        }
        /**
         * @param {number} index
         * @return {undefined}
         */
        done = function(index) {
          global.postMessage(prefix + index, "+"rip"*"+"rip");
        };
      }
    }
    /**
     * @param {!Object} callback
     * @return {?}
     */
    attachTo.setImmediate = function(callback) {
      if ("+"rip"function"+"rip" != typeof callback) {
        /** @type {!Function} */
        callback = new Function("+"rip""+"rip" + callback);
      }
      /** @type {!Array} */
      var args = new Array(arguments.length - 1);
      /** @type {number} */
      var i = 0;
      for (; i < args.length; i++) {
        args[i] = arguments[i + 1];
      }
      var obj = {
        callback : callback,
        args : args
      };
      return result[id] = obj, done(id), id++;
    };
    /** @type {function(number): undefined} */
    attachTo.clearImmediate = clear;
  }
}("+"rip"undefined"+"rip" == typeof self ? "+"rip"undefined"+"rip" == typeof global ? this : global : self);
!function(f) {
  if ("+"rip"object"+"rip" == typeof exports && "+"rip"undefined"+"rip" != typeof module) {
    module.exports = f();
  } else {
    if ("+"rip"function"+"rip" == typeof define && define.amd) {
      define([], f);
    } else {
      ("+"rip"undefined"+"rip" != typeof window ? window : "+"rip"undefined"+"rip" != typeof global ? global : "+"rip"undefined"+"rip" != typeof self ? self : this).localforage = f();
    }
  }
}(function() {
  return function e(t, n, r) {
    /**
     * @param {string} o
     * @param {?} u
     * @return {?}
     */
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = "+"rip"function"+"rip" == typeof require && require;
          if (!u && a) {
            return a(o, true);
          }
          if (i) {
            return i(o, true);
          }
          /** @type {!Error} */
          var f = new Error("+"rip"Cannot find module '"+"rip" + o + "+"rip"'"+"rip");
          throw f.code = "+"rip"MODULE_NOT_FOUND"+"rip", f;
        }
        var u = n[o] = {
          exports : {}
        };
        t[o][0].call(u.exports, function(e) {
          var n = t[o][1][e];
          return s(n || e);
        }, u, u.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var i = "+"rip"function"+"rip" == typeof require && require;
    /** @type {number} */
    var o = 0;
    for (; o < r.length; o++) {
      s(r[o]);
    }
    return s;
  }({
    1 : [function(canCreateDiscussions, mixin, isSlidingUp) {
      (function(global) {
        /**
         * @return {undefined}
         */
        function a() {
          var q;
          var matrix;
          /** @type {boolean} */
          n = true;
          var r = m.length;
          for (; r;) {
            /** @type {!Array} */
            matrix = m;
            /** @type {!Array} */
            m = [];
            /** @type {number} */
            q = -1;
            for (; ++q < r;) {
              matrix[q]();
            }
            /** @type {number} */
            r = m.length;
          }
          /** @type {boolean} */
          n = false;
        }
        var requestFlush;
        var n;
        var Base64x64 = global.MutationObserver || global.WebKitMutationObserver;
        if (Base64x64) {
          /** @type {number} */
          var iterations = 0;
          var b = new Base64x64(a);
          var node = global.document.createTextNode("+"rip""+"rip");
          b.observe(node, {
            characterData : true
          });
          /**
           * @return {undefined}
           */
          requestFlush = function() {
            /** @type {number} */
            node.data = iterations = ++iterations % 2;
          };
        } else {
          if (global.setImmediate || void 0 === global.MessageChannel) {
            /** @type {function(): undefined} */
            requestFlush = "+"rip"document"+"rip" in global && "+"rip"onreadystatechange"+"rip" in global.document.createElement("+"rip"script"+"rip") ? function() {
              var scriptElem = global.document.createElement("+"rip"script"+"rip");
              /**
               * @return {undefined}
               */
              scriptElem.onreadystatechange = function() {
                a();
                /** @type {null} */
                scriptElem.onreadystatechange = null;
                scriptElem.parentNode.removeChild(scriptElem);
                /** @type {null} */
                scriptElem = null;
              };
              global.document.documentElement.appendChild(scriptElem);
            } : function() {
              setTimeout(a, 0);
            };
          } else {
            var channel = new global.MessageChannel;
            /** @type {function(): undefined} */
            channel.port1.onmessage = a;
            /**
             * @return {undefined}
             */
            requestFlush = function() {
              channel.port2.postMessage(0);
            };
          }
        }
        /** @type {!Array} */
        var m = [];
        /**
         * @param {?} e
         * @return {undefined}
         */
        mixin.exports = function(e) {
          if (!(1 !== m.push(e) || n)) {
            requestFlush();
          }
        };
      }).call(this, "+"rip"undefined"+"rip" != typeof global ? global : "+"rip"undefined"+"rip" != typeof self ? self : "+"rip"undefined"+"rip" != typeof window ? window : {});
    }, {}],
    2 : [function(saveNotifs, module, exports) {
      /**
       * @return {undefined}
       */
      function name() {
      }
      /**
       * @param {!Function} fn
       * @return {undefined}
       */
      function Promise(fn) {
        if ("+"rip"function"+"rip" != typeof fn) {
          throw new TypeError("+"rip"resolver must be a function"+"rip");
        }
        /** @type {!Array} */
        this.state = PENDING;
        /** @type {!Array} */
        this.queue = [];
        this.outcome = void 0;
        if (fn !== name) {
          test(this, fn);
        }
      }
      /**
       * @param {!Object} promise
       * @param {!Function} onFulfilled
       * @param {!Function} onRejected
       * @return {undefined}
       */
      function QueueItem(promise, onFulfilled, onRejected) {
        /** @type {!Object} */
        this.promise = promise;
        if ("+"rip"function"+"rip" == typeof onFulfilled) {
          /** @type {!Function} */
          this.onFulfilled = onFulfilled;
          this.callFulfilled = this.otherCallFulfilled;
        }
        if ("+"rip"function"+"rip" == typeof onRejected) {
          /** @type {!Function} */
          this.onRejected = onRejected;
          this.callRejected = this.otherCallRejected;
        }
      }
      /**
       * @param {!Array} x
       * @param {?} func
       * @param {string} type
       * @return {undefined}
       */
      function unwrap(x, func, type) {
        validateRangeContainer(function() {
          var val;
          try {
            val = func(type);
          } catch (reason) {
            return promise.reject(x, reason);
          }
          if (val === x) {
            promise.reject(x, new TypeError("+"rip"Cannot resolve promise with itself"+"rip"));
          } else {
            promise.resolve(x, val);
          }
        });
      }
      /**
       * @param {!Function} obj
       * @return {?}
       */
      function d(obj) {
        var then = obj && obj.then;
        if (obj && "+"rip"object"+"rip" == typeof obj && "+"rip"function"+"rip" == typeof then) {
          return function() {
            then.apply(obj, arguments);
          };
        }
      }
      /**
       * @param {?} arg
       * @param {!Function} fn
       * @return {undefined}
       */
      function test(arg, fn) {
        /**
         * @param {string} e
         * @return {undefined}
         */
        function cb(e) {
          if (!r) {
            /** @type {boolean} */
            r = true;
            promise.reject(arg, e);
          }
        }
        /**
         * @param {string} file
         * @return {undefined}
         */
        function o(file) {
          if (!r) {
            /** @type {boolean} */
            r = true;
            promise.resolve(arg, file);
          }
        }
        /** @type {boolean} */
        var r = false;
        var result = callback(function() {
          fn(o, cb);
        });
        if ("+"rip"error"+"rip" === result.status) {
          cb(result.value);
        }
      }
      /**
       * @param {!Function} callback
       * @param {string} start
       * @return {?}
       */
      function callback(callback, start) {
        var result = {};
        try {
          result.value = callback(start);
          /** @type {string} */
          result.status = "+"rip"success"+"rip";
        } catch (e) {
          /** @type {string} */
          result.status = "+"rip"error"+"rip";
          result.value = e;
        }
        return result;
      }
      var validateRangeContainer = saveNotifs(1);
      var promise = {};
      /** @type {!Array} */
      var REJECTED = ["+"rip"REJECTED"+"rip"];
      /** @type {!Array} */
      var FULFILLED = ["+"rip"FULFILLED"+"rip"];
      /** @type {!Array} */
      var PENDING = ["+"rip"PENDING"+"rip"];
      /** @type {function(!Function): undefined} */
      module.exports = exports = Promise;
      /**
       * @param {!Function} fn
       * @return {?}
       */
      Promise.prototype.catch = function(fn) {
        return this.then(null, fn);
      };
      /**
       * @param {!Function} onFulfilled
       * @param {!Function} onRejected
       * @return {?}
       */
      Promise.prototype.then = function(onFulfilled, onRejected) {
        if ("+"rip"function"+"rip" != typeof onFulfilled && this.state === FULFILLED || "+"rip"function"+"rip" != typeof onRejected && this.state === REJECTED) {
          return this;
        }
        var promise = new this.constructor(name);
        if (this.state !== PENDING) {
          unwrap(promise, this.state === FULFILLED ? onFulfilled : onRejected, this.outcome);
        } else {
          this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
        }
        return promise;
      };
      /**
       * @param {string} value
       * @return {undefined}
       */
      QueueItem.prototype.callFulfilled = function(value) {
        promise.resolve(this.promise, value);
      };
      /**
       * @param {string} value
       * @return {undefined}
       */
      QueueItem.prototype.otherCallFulfilled = function(value) {
        unwrap(this.promise, this.onFulfilled, value);
      };
      /**
       * @param {string} value
       * @return {undefined}
       */
      QueueItem.prototype.callRejected = function(value) {
        promise.reject(this.promise, value);
      };
      /**
       * @param {string} value
       * @return {undefined}
       */
      QueueItem.prototype.otherCallRejected = function(value) {
        unwrap(this.promise, this.onRejected, value);
      };
      /**
       * @param {!Object} self
       * @param {string} value
       * @return {?}
       */
      promise.resolve = function(self, value) {
        var result = callback(d, value);
        if ("+"rip"error"+"rip" === result.status) {
          return promise.reject(self, result.value);
        }
        var end = result.value;
        if (end) {
          test(self, end);
        } else {
          /** @type {!Array} */
          self.state = FULFILLED;
          /** @type {string} */
          self.outcome = value;
          /** @type {number} */
          var i = -1;
          var length = self.queue.length;
          for (; ++i < length;) {
            self.queue[i].callFulfilled(value);
          }
        }
        return self;
      };
      /**
       * @param {!Object} result
       * @param {string} error
       * @return {?}
       */
      promise.reject = function(result, error) {
        /** @type {!Array} */
        result.state = REJECTED;
        /** @type {string} */
        result.outcome = error;
        /** @type {number} */
        var i = -1;
        var length = result.queue.length;
        for (; ++i < length;) {
          result.queue[i].callRejected(error);
        }
        return result;
      };
      /**
       * @param {?} value
       * @return {?}
       */
      exports.resolve = function(value) {
        if (value instanceof this) {
          return value;
        }
        return promise.resolve(new this(name), value);
      };
      /**
       * @param {?} reason
       * @return {?}
       */
      exports.reject = function(reason) {
        var ret = new this(name);
        return promise.reject(ret, reason);
      };
      /**
       * @param {!Array} property
       * @return {?}
       */
      exports.all = function(property) {
        /**
         * @param {(Object|string)} e
         * @param {number} i
         * @return {undefined}
         */
        function next(e, i) {
          PL$177.resolve(e).then(function(frag) {
            value[i] = frag;
            if (!(++completed !== length || interrupted)) {
              /** @type {boolean} */
              interrupted = true;
              promise.resolve(r, value);
            }
          }, function(reason) {
            if (!interrupted) {
              /** @type {boolean} */
              interrupted = true;
              promise.reject(r, reason);
            }
          });
        }
        var PL$177 = this;
        if ("+"rip"[object Array]"+"rip" !== Object.prototype.toString.call(property)) {
          return this.reject(new TypeError("+"rip"must be an array"+"rip"));
        }
        var length = property.length;
        /** @type {boolean} */
        var interrupted = false;
        if (!length) {
          return this.resolve([]);
        }
        /** @type {!Array} */
        var value = new Array(length);
        /** @type {number} */
        var completed = 0;
        /** @type {number} */
        var i = -1;
        var r = new this(name);
        for (; ++i < length;) {
          next(property[i], i);
        }
        return r;
      };
      /**
       * @param {!NodeList} a
       * @return {?}
       */
      exports.race = function(a) {
        var PL$3 = this;
        if ("+"rip"[object Array]"+"rip" !== Object.prototype.toString.call(a)) {
          return this.reject(new TypeError("+"rip"must be an array"+"rip"));
        }
        var l = a.length;
        /** @type {boolean} */
        var n = false;
        if (!l) {
          return this.resolve([]);
        }
        /** @type {number} */
        var i = -1;
        var e = new this(name);
        for (; ++i < l;) {
          x = a[i];
          PL$3.resolve(x).then(function(fn) {
            if (!n) {
              /** @type {boolean} */
              n = true;
              promise.resolve(e, fn);
            }
          }, function(reason) {
            if (!n) {
              /** @type {boolean} */
              n = true;
              promise.reject(e, reason);
            }
          });
        }
        var x;
        return e;
      };
    }, {
      1 : 1
    }],
    3 : [function(f, canCreateDiscussions, isSlidingUp) {
      (function(g) {
        if ("+"rip"function"+"rip" != typeof g.Promise) {
          g.Promise = f(2);
        }
      }).call(this, "+"rip"undefined"+"rip" != typeof global ? global : "+"rip"undefined"+"rip" != typeof self ? self : "+"rip"undefined"+"rip" != typeof window ? window : {});
    }, {
      2 : 2
    }],
    4 : [function(saveNotifs, module, canCreateDiscussions) {
      /**
       * @param {!Array} parts
       * @param {string} options
       * @return {?}
       */
      function createBlob(parts, options) {
        parts = parts || [];
        options = options || {};
        try {
          return new Blob(parts, options);
        } catch (allBox) {
          if ("+"rip"TypeError"+"rip" !== allBox.name) {
            throw allBox;
          }
          var bb = new ("+"rip"undefined"+"rip" != typeof BlobBuilder ? BlobBuilder : "+"rip"undefined"+"rip" != typeof MSBlobBuilder ? MSBlobBuilder : "+"rip"undefined"+"rip" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder);
          /** @type {number} */
          var i = 0;
          for (; i < parts.length; i = i + 1) {
            bb.append(parts[i]);
          }
          return bb.getBlob(options.type);
        }
      }
      /**
       * @param {?} a
       * @param {!Function} b
       * @return {undefined}
       */
      function i(a, b) {
        if (b) {
          a.then(function(deg) {
            b(null, deg);
          }, function(applyBackgroundUpdates) {
            b(applyBackgroundUpdates);
          });
        }
      }
      /**
       * @param {?} promise
       * @param {!Function} callback
       * @param {!Function} errorCallback
       * @return {undefined}
       */
      function executeTwoCallbacks(promise, callback, errorCallback) {
        if ("+"rip"function"+"rip" == typeof callback) {
          promise.then(callback);
        }
        if ("+"rip"function"+"rip" == typeof errorCallback) {
          promise.catch(errorCallback);
        }
      }
      /**
       * @param {!IDBDatabase} dbParam
       * @return {?}
       */
      function _checkBlobSupportWithoutCaching(dbParam) {
        return "+"rip"boolean"+"rip" == typeof value ? Promise$1.resolve(value) : (db = dbParam, (new Promise$1(function(callback) {
          var transaction = db.transaction(STORE_NAME, mode);
          var blob = createBlob(["+"rip""+"rip"]);
          transaction.objectStore(STORE_NAME).put(blob, "+"rip"key"+"rip");
          /**
           * @param {!Object} event
           * @return {undefined}
           */
          transaction.onabort = function(event) {
            event.preventDefault();
            event.stopPropagation();
            callback(false);
          };
          /**
           * @return {undefined}
           */
          transaction.oncomplete = function() {
            /** @type {(Array<string>|null)} */
            var c = navigator.userAgent.match(/Chrome\/(\d+)/);
            /** @type {(Array<string>|null)} */
            var cflag = navigator.userAgent.match(/Edge\//);
            callback(cflag || !c || 43 <= parseInt(c[1], 10));
          };
        })).catch(function() {
          return false;
        })).then(function(Night) {
          return value = Night;
        });
        var db;
      }
      /**
       * @param {!Object} dbInfo
       * @return {undefined}
       */
      function _deferReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = {};
        /** @type {!Promise} */
        deferredOperation.promise = new Promise$1(function(resolve) {
          deferredOperation.resolve = resolve;
        });
        dbContext.deferredOperations.push(deferredOperation);
        if (dbContext.dbReady) {
          dbContext.dbReady = dbContext.dbReady.then(function() {
            return deferredOperation.promise;
          });
        } else {
          /** @type {!Promise} */
          dbContext.dbReady = deferredOperation.promise;
        }
      }
      /**
       * @param {!Object} dbInfo
       * @param {boolean} upgradeNeeded
       * @return {?}
       */
      function _getConnection(dbInfo, upgradeNeeded) {
        return new Promise$1(function(resolve, reject) {
          if (dbInfo.db) {
            if (!upgradeNeeded) {
              return resolve(dbInfo.db);
            }
            _deferReadiness(dbInfo);
            dbInfo.db.close();
          }
          /** @type {!Array} */
          var dbArgs = [dbInfo.name];
          if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
          }
          var openreq = idb.open.apply(idb, dbArgs);
          if (upgradeNeeded) {
            /**
             * @param {!Event} event
             * @return {undefined}
             */
            openreq.onupgradeneeded = function(event) {
              var db = openreq.result;
              try {
                db.createObjectStore(dbInfo.storeName);
                if (event.oldVersion <= 1) {
                  db.createObjectStore(STORE_NAME);
                }
              } catch (allBox) {
                if ("+"rip"ConstraintError"+"rip" !== allBox.name) {
                  throw allBox;
                }
                console.warn('The database "+"rip"' + dbInfo.name + '"+"rip" has been upgraded from version ' + event.oldVersion + "+"rip" to version "+"rip" + event.newVersion + ', but the storage "+"rip"' + dbInfo.storeName + '"+"rip" already exists.');
              }
            };
          }
          /**
           * @param {!Object} type
           * @return {undefined}
           */
          openreq.onerror = function(type) {
            type.preventDefault();
            reject(openreq.error);
          };
          /**
           * @return {undefined}
           */
          openreq.onsuccess = function() {
            var extensionResolver;
            resolve(openreq.result);
            if (extensionResolver = dbContexts[dbInfo.name].deferredOperations.pop()) {
              extensionResolver.resolve();
            }
          };
        });
      }
      /**
       * @param {!Object} blob
       * @return {?}
       */
      function read(blob) {
        return createBlob([function(apfb) {
          /** @type {number} */
          var size = apfb.length;
          /** @type {!ArrayBuffer} */
          var data = new ArrayBuffer(size);
          /** @type {!Uint8Array} */
          var ui8a = new Uint8Array(data);
          /** @type {number} */
          var i = 0;
          for (; i < size; i++) {
            /** @type {number} */
            ui8a[i] = apfb.charCodeAt(i);
          }
          return data;
        }(atob(blob.data))], {
          type : blob.type
        });
      }
      /**
       * @param {?} value
       * @return {?}
       */
      function _(value) {
        return value && value.__local_forage_encoded_blob;
      }
      /**
       * @param {!Function} callback
       * @return {?}
       */
      function _fullyReady(callback) {
        var self = this;
        var getDriverPromise = self._initReady().then(function() {
          var dbContext = dbContexts[self._dbInfo.name];
          if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
          }
        });
        return executeTwoCallbacks(getDriverPromise, callback, callback), getDriverPromise;
      }
      /**
       * @param {!Object} dbInfo
       * @return {?}
       */
      function getItem(dbInfo) {
        _deferReadiness(dbInfo);
        var keywordResults = dbContexts[dbInfo.name].forages;
        /** @type {number} */
        var i = 0;
        for (; i < keywordResults.length; i++) {
          if (keywordResults[i]._dbInfo.db) {
            keywordResults[i]._dbInfo.db.close();
            /** @type {null} */
            keywordResults[i]._dbInfo.db = null;
          }
        }
        return _getConnection(dbInfo, false).then(function(database) {
          /** @type {number} */
          var i = 0;
          for (; i < keywordResults.length; i++) {
            /** @type {string} */
            keywordResults[i]._dbInfo.db = database;
          }
        }).catch(function(objectkey) {
          var key;
          var cpt;
          throw key = objectkey, (cpt = dbContexts[dbInfo.name].deferredOperations.pop()) && cpt.reject(key), objectkey;
        });
      }
      /**
       * @param {!Object} store
       * @param {string} mode
       * @param {!Function} listener
       * @return {?}
       */
      function init(store, mode, listener) {
        try {
          var self = store.db.transaction(store.storeName, mode);
          listener(null, self);
        } catch (value) {
          if (!store.db || "+"rip"InvalidStateError"+"rip" === value.name) {
            return getItem(store).then(function() {
              var self = store.db.transaction(store.storeName, mode);
              listener(null, self);
            });
          }
          listener(value);
        }
      }
      /**
       * @param {!Object} serializedString
       * @return {?}
       */
      function stringToBuffer(serializedString) {
        var i;
        var sextet1;
        var sextet2;
        var o;
        var id;
        /** @type {number} */
        var numOfBytes = .75 * serializedString.length;
        var len = serializedString.length;
        /** @type {number} */
        var serial_out_itor = 0;
        if ("+"rip"="+"rip" === serializedString[serializedString.length - 1]) {
          numOfBytes--;
          if ("+"rip"="+"rip" === serializedString[serializedString.length - 2]) {
            numOfBytes--;
          }
        }
        /** @type {!ArrayBuffer} */
        var buffer = new ArrayBuffer(numOfBytes);
        /** @type {!Uint8Array} */
        var config_data = new Uint8Array(buffer);
        /** @type {number} */
        i = 0;
        for (; i < len; i = i + 4) {
          /** @type {number} */
          sextet1 = BASE_CHARS.indexOf(serializedString[i]);
          /** @type {number} */
          sextet2 = BASE_CHARS.indexOf(serializedString[i + 1]);
          /** @type {number} */
          o = BASE_CHARS.indexOf(serializedString[i + 2]);
          /** @type {number} */
          id = BASE_CHARS.indexOf(serializedString[i + 3]);
          /** @type {number} */
          config_data[serial_out_itor++] = sextet1 << 2 | sextet2 >> 4;
          /** @type {number} */
          config_data[serial_out_itor++] = (15 & sextet2) << 4 | o >> 2;
          /** @type {number} */
          config_data[serial_out_itor++] = (3 & o) << 6 | 63 & id;
        }
        return buffer;
      }
      /**
       * @param {!Object} data
       * @return {?}
       */
      function bufferToString(data) {
        var i;
        /** @type {!Uint8Array} */
        var dmpGrp = new Uint8Array(data);
        /** @type {string} */
        var base64String = "+"rip""+"rip";
        /** @type {number} */
        i = 0;
        for (; i < dmpGrp.length; i = i + 3) {
          base64String = base64String + BASE_CHARS[dmpGrp[i] >> 2];
          base64String = base64String + BASE_CHARS[(3 & dmpGrp[i]) << 4 | dmpGrp[i + 1] >> 4];
          base64String = base64String + BASE_CHARS[(15 & dmpGrp[i + 1]) << 2 | dmpGrp[i + 2] >> 6];
          base64String = base64String + BASE_CHARS[63 & dmpGrp[i + 2]];
        }
        return dmpGrp.length % 3 == 2 ? base64String = base64String.substring(0, base64String.length - 1) + "+"rip"="+"rip" : dmpGrp.length % 3 == 1 && (base64String = base64String.substring(0, base64String.length - 2) + "+"rip"=="+"rip"), base64String;
      }
      /**
       * @param {!Object} localForageInstance
       * @param {string} libraryMethod
       * @return {undefined}
       */
      function callWhenReady(localForageInstance, libraryMethod) {
        /**
         * @return {?}
         */
        localForageInstance[libraryMethod] = function() {
          /** @type {!Arguments} */
          var original_arguments = arguments;
          return localForageInstance.ready().then(function() {
            return localForageInstance[libraryMethod].apply(localForageInstance, original_arguments);
          });
        };
      }
      /**
       * @return {?}
       */
      function extend() {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var obj = arguments[i];
          if (obj) {
            var key;
            for (key in obj) {
              if (obj.hasOwnProperty(key)) {
                if (isArray(obj[key])) {
                  arguments[0][key] = obj[key].slice();
                } else {
                  arguments[0][key] = obj[key];
                }
              }
            }
          }
        }
        return arguments[0];
      }
      /**
       * @param {?} driverName
       * @return {?}
       */
      function isLibraryDriver(driverName) {
        var driver;
        for (driver in DriverType) {
          if (DriverType.hasOwnProperty(driver) && DriverType[driver] === driverName) {
            return true;
          }
        }
        return false;
      }
      /** @type {function(!Object): ?} */
      var loadPlatform = "+"rip"function"+"rip" == typeof Symbol && "+"rip"symbol"+"rip" == typeof Symbol.iterator ? function(withHashes) {
        return typeof withHashes;
      } : function(obj) {
        return obj && "+"rip"function"+"rip" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "+"rip"symbol"+"rip" : typeof obj;
      };
      var idb = function() {
        try {
          if ("+"rip"undefined"+"rip" != typeof indexedDB) {
            return indexedDB;
          }
          if ("+"rip"undefined"+"rip" != typeof webkitIndexedDB) {
            return webkitIndexedDB;
          }
          if ("+"rip"undefined"+"rip" != typeof mozIndexedDB) {
            return mozIndexedDB;
          }
          if ("+"rip"undefined"+"rip" != typeof OIndexedDB) {
            return OIndexedDB;
          }
          if ("+"rip"undefined"+"rip" != typeof msIndexedDB) {
            return msIndexedDB;
          }
        } catch (e) {
        }
      }();
      if ("+"rip"undefined"+"rip" == typeof Promise) {
        saveNotifs(3);
      }
      /** @type {function(new:Promise, function(function((IThenable<TYPE>|TYPE|Thenable|null)=): ?, function(*=): ?): ?): ?} */
      var Promise$1 = Promise;
      var value;
      var dbContexts;
      /** @type {string} */
      var STORE_NAME = "+"rip"local-forage-detect-blob-support"+"rip";
      /** @type {function(this:*): string} */
      var toString = Object.prototype.toString;
      /** @type {string} */
      var READONLY = "+"rip"readonly"+"rip";
      /** @type {string} */
      var mode = "+"rip"readwrite"+"rip";
      var localStorageWrapper = {
        _driver : "+"rip"asyncStorage"+"rip",
        _initStorage : function(options) {
          /**
           * @return {?}
           */
          function scope() {
            return Promise$1.resolve();
          }
          var self = this;
          var dbInfo = {
            db : null
          };
          if (options) {
            var i;
            for (i in options) {
              dbInfo[i] = options[i];
            }
          }
          if (!dbContexts) {
            dbContexts = {};
          }
          var dbContext = dbContexts[dbInfo.name];
          if (!dbContext) {
            dbContext = {
              forages : [],
              db : null,
              dbReady : null,
              deferredOperations : []
            };
            dbContexts[dbInfo.name] = dbContext;
          }
          dbContext.forages.push(self);
          if (!self._initReady) {
            self._initReady = self.ready;
            /** @type {function(!Function): ?} */
            self.ready = _fullyReady;
          }
          /** @type {!Array} */
          var value = [];
          /** @type {number} */
          var j = 0;
          for (; j < dbContext.forages.length; j++) {
            var forage = dbContext.forages[j];
            if (forage !== self) {
              value.push(forage._initReady().catch(scope));
            }
          }
          /** @type {!Array<?>} */
          var createdCollection = dbContext.forages.slice(0);
          return Promise$1.all(value).then(function() {
            return dbInfo.db = dbContext.db, _getConnection(dbInfo, false);
          }).then(function(table) {
            return dbInfo.db = table, function(dbInfo, defaultVersion) {
              if (!dbInfo.db) {
                return true;
              }
              /** @type {boolean} */
              var subErr = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
              /** @type {boolean} */
              var n = dbInfo.version < dbInfo.db.version;
              /** @type {boolean} */
              var err = dbInfo.version > dbInfo.db.version;
              if (n && (dbInfo.version !== defaultVersion && console.warn('The database "+"rip"' + dbInfo.name + "+"rip"\"+"rip" can't be downgraded from version "+"rip" + dbInfo.db.version + "+"rip" to version "+"rip" + dbInfo.version + "+"rip"."+"rip"), dbInfo.version = dbInfo.db.version), err || subErr) {
                if (subErr) {
                  var incVersion = dbInfo.db.version + 1;
                  if (incVersion > dbInfo.version) {
                    dbInfo.version = incVersion;
                  }
                }
                return true;
              }
              return false;
            }(dbInfo, self._defaultConfig.version) ? _getConnection(dbInfo, true) : table;
          }).then(function(db) {
            dbInfo.db = dbContext.db = db;
            self._dbInfo = dbInfo;
            /** @type {number} */
            var j = 0;
            for (; j < createdCollection.length; j++) {
              var forage = createdCollection[j];
              if (forage !== self) {
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
              }
            }
          });
        },
        iterate : function(callback, e) {
          var self = this;
          /** @type {!Promise} */
          var t = new Promise$1(function(cb, callback) {
            self.ready().then(function() {
              init(self._dbInfo, READONLY, function(response_2, transaction) {
                if (response_2) {
                  return callback(response_2);
                }
                try {
                  var req = transaction.objectStore(self._dbInfo.storeName).openCursor();
                  /** @type {number} */
                  var i = 1;
                  /**
                   * @return {undefined}
                   */
                  req.onsuccess = function() {
                    var cursor = req.result;
                    if (cursor) {
                      var data = cursor.value;
                      if (_(data)) {
                        data = read(data);
                      }
                      var value = callback(data, cursor.key, i++);
                      if (void 0 !== value) {
                        cb(value);
                      } else {
                        cursor.continue();
                      }
                    } else {
                      cb();
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  req.onerror = function() {
                    callback(req.error);
                  };
                } catch (cached_wifi_network_list) {
                  callback(cached_wifi_network_list);
                }
              });
            }).catch(callback);
          });
          return i(t, e), t;
        },
        getItem : function(name, e) {
          var self = this;
          if ("+"rip"string"+"rip" != typeof name) {
            console.warn(name + "+"rip" used as a key, but it is not a string."+"rip");
            /** @type {string} */
            name = String(name);
          }
          /** @type {!Promise} */
          var t = new Promise$1(function(importedCB, callback) {
            self.ready().then(function() {
              init(self._dbInfo, READONLY, function(response_2, transaction) {
                if (response_2) {
                  return callback(response_2);
                }
                try {
                  var req = transaction.objectStore(self._dbInfo.storeName).get(name);
                  /**
                   * @return {undefined}
                   */
                  req.onsuccess = function() {
                    var data = req.result;
                    if (void 0 === data) {
                      /** @type {null} */
                      data = null;
                    }
                    if (_(data)) {
                      data = read(data);
                    }
                    importedCB(data);
                  };
                  /**
                   * @return {undefined}
                   */
                  req.onerror = function() {
                    callback(req.error);
                  };
                } catch (cached_wifi_network_list) {
                  callback(cached_wifi_network_list);
                }
              });
            }).catch(callback);
          });
          return i(t, e), t;
        },
        setItem : function(path, data, e) {
          var self = this;
          if ("+"rip"string"+"rip" != typeof path) {
            console.warn(path + "+"rip" used as a key, but it is not a string."+"rip");
            /** @type {string} */
            path = String(path);
          }
          /** @type {!Promise} */
          var t = new Promise$1(function(onSuccess, errback) {
            var dbInfo;
            self.ready().then(function() {
              return dbInfo = self._dbInfo, "+"rip"[object Blob]"+"rip" === toString.call(data) ? _checkBlobSupportWithoutCaching(dbInfo.db).then(function(getHash) {
                return getHash ? data : (blob = data, new Promise$1(function(resolve, onerror) {
                  /** @type {!FileReader} */
                  var reader = new FileReader;
                  reader.onerror = onerror;
                  /**
                   * @param {!Event} event
                   * @return {undefined}
                   */
                  reader.onloadend = function(event) {
                    /** @type {string} */
                    var encodedView = btoa(event.target.result || "+"rip""+"rip");
                    resolve({
                      __local_forage_encoded_blob : true,
                      data : encodedView,
                      type : blob.type
                    });
                  };
                  reader.readAsBinaryString(blob);
                }));
                var blob;
              }) : data;
            }).then(function(result) {
              init(self._dbInfo, mode, function(e, transaction) {
                if (e) {
                  return errback(e);
                }
                try {
                  var data = transaction.objectStore(self._dbInfo.storeName).put(result, path);
                  if (null === result) {
                    result = void 0;
                  }
                  /**
                   * @return {undefined}
                   */
                  transaction.oncomplete = function() {
                    if (void 0 === result) {
                      /** @type {null} */
                      result = null;
                    }
                    onSuccess(result);
                  };
                  /** @type {function(): undefined} */
                  transaction.onabort = transaction.onerror = function() {
                    var e = data.error ? data.error : data.transaction.error;
                    errback(e);
                  };
                } catch (e) {
                  errback(e);
                }
              });
            }).catch(errback);
          });
          return i(t, e), t;
        },
        removeItem : function(name, e) {
          var self = this;
          if ("+"rip"string"+"rip" != typeof name) {
            console.warn(name + "+"rip" used as a key, but it is not a string."+"rip");
            /** @type {string} */
            name = String(name);
          }
          /** @type {!Promise} */
          var t = new Promise$1(function(callback, reject) {
            self.ready().then(function() {
              init(self._dbInfo, mode, function(error5, transaction) {
                if (error5) {
                  return reject(error5);
                }
                try {
                  var e = transaction.objectStore(self._dbInfo.storeName).delete(name);
                  /**
                   * @return {undefined}
                   */
                  transaction.oncomplete = function() {
                    callback();
                  };
                  /**
                   * @return {undefined}
                   */
                  transaction.onerror = function() {
                    reject(e.error);
                  };
                  /**
                   * @return {undefined}
                   */
                  transaction.onabort = function() {
                    var createConnectionErr = e.error ? e.error : e.transaction.error;
                    reject(createConnectionErr);
                  };
                } catch (createConnectionErr) {
                  reject(createConnectionErr);
                }
              });
            }).catch(reject);
          });
          return i(t, e), t;
        },
        clear : function(n) {
          var self = this;
          /** @type {!Promise} */
          var t = new Promise$1(function(callback, errback) {
            self.ready().then(function() {
              init(self._dbInfo, mode, function(e, transaction) {
                if (e) {
                  return errback(e);
                }
                try {
                  var data = transaction.objectStore(self._dbInfo.storeName).clear();
                  /**
                   * @return {undefined}
                   */
                  transaction.oncomplete = function() {
                    callback();
                  };
                  /** @type {function(): undefined} */
                  transaction.onabort = transaction.onerror = function() {
                    var e = data.error ? data.error : data.transaction.error;
                    errback(e);
                  };
                } catch (e) {
                  errback(e);
                }
              });
            }).catch(errback);
          });
          return i(t, n), t;
        },
        length : function(a) {
          var self = this;
          /** @type {!Promise} */
          var t = new Promise$1(function(successFunc, callback) {
            self.ready().then(function() {
              init(self._dbInfo, READONLY, function(response_2, transaction) {
                if (response_2) {
                  return callback(response_2);
                }
                try {
                  var data = transaction.objectStore(self._dbInfo.storeName).count();
                  /**
                   * @return {undefined}
                   */
                  data.onsuccess = function() {
                    successFunc(data.result);
                  };
                  /**
                   * @return {undefined}
                   */
                  data.onerror = function() {
                    callback(data.error);
                  };
                } catch (cached_wifi_network_list) {
                  callback(cached_wifi_network_list);
                }
              });
            }).catch(callback);
          });
          return i(t, a), t;
        },
        key : function(n, e) {
          var self = this;
          /** @type {!Promise} */
          var t = new Promise$1(function(resolve, callback) {
            if (n < 0) {
              resolve(null);
            } else {
              self.ready().then(function() {
                init(self._dbInfo, READONLY, function(response_2, transaction) {
                  if (response_2) {
                    return callback(response_2);
                  }
                  try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    /** @type {boolean} */
                    var type = false;
                    var that = store.openCursor();
                    /**
                     * @return {undefined}
                     */
                    that.onsuccess = function() {
                      var state = that.result;
                      if (state) {
                        if (0 === n) {
                          resolve(state.key);
                        } else {
                          if (type) {
                            resolve(state.key);
                          } else {
                            /** @type {boolean} */
                            type = true;
                            state.advance(n);
                          }
                        }
                      } else {
                        resolve(null);
                      }
                    };
                    /**
                     * @return {undefined}
                     */
                    that.onerror = function() {
                      callback(that.error);
                    };
                  } catch (cached_wifi_network_list) {
                    callback(cached_wifi_network_list);
                  }
                });
              }).catch(callback);
            }
          });
          return i(t, e), t;
        },
        keys : function(e) {
          var self = this;
          /** @type {!Promise} */
          var t = new Promise$1(function(callback, errback) {
            self.ready().then(function() {
              init(self._dbInfo, READONLY, function(e, transaction) {
                if (e) {
                  return errback(e);
                }
                try {
                  var context = transaction.objectStore(self._dbInfo.storeName).openCursor();
                  /** @type {!Array} */
                  var results = [];
                  /**
                   * @return {undefined}
                   */
                  context.onsuccess = function() {
                    var cursor = context.result;
                    if (cursor) {
                      results.push(cursor.key);
                      cursor.continue();
                    } else {
                      callback(results);
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  context.onerror = function() {
                    errback(context.error);
                  };
                } catch (e) {
                  errback(e);
                }
              });
            }).catch(errback);
          });
          return i(t, e), t;
        }
      };
      /** @type {string} */
      var BASE_CHARS = "+"rip"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"+"rip";
      /** @type {!RegExp} */
      var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
      /** @type {string} */
      var SERIALIZED_MARKER = "+"rip"__lfsc__:"+"rip";
      /** @type {number} */
      var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
      /** @type {string} */
      var TYPE_ARRAYBUFFER = "+"rip"arbf"+"rip";
      /** @type {string} */
      var TYPE_BLOB = "+"rip"blob"+"rip";
      /** @type {number} */
      var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
      /** @type {function(this:*): string} */
      var r = Object.prototype.toString;
      var localforageSerializer = {
        serialize : function(data, callback) {
          /** @type {string} */
          var error = "+"rip""+"rip";
          if (data && (error = r.call(data)), data && ("+"rip"[object ArrayBuffer]"+"rip" === error || data.buffer && "+"rip"[object ArrayBuffer]"+"rip" === r.call(data.buffer))) {
            var buffer;
            /** @type {string} */
            var marker = SERIALIZED_MARKER;
            if (data instanceof ArrayBuffer) {
              /** @type {!Object} */
              buffer = data;
              /** @type {string} */
              marker = marker + TYPE_ARRAYBUFFER;
            } else {
              buffer = data.buffer;
              if ("+"rip"[object Int8Array]"+"rip" === error) {
                /** @type {string} */
                marker = marker + "+"rip"si08"+"rip";
              } else {
                if ("+"rip"[object Uint8Array]"+"rip" === error) {
                  /** @type {string} */
                  marker = marker + "+"rip"ui08"+"rip";
                } else {
                  if ("+"rip"[object Uint8ClampedArray]"+"rip" === error) {
                    /** @type {string} */
                    marker = marker + "+"rip"uic8"+"rip";
                  } else {
                    if ("+"rip"[object Int16Array]"+"rip" === error) {
                      /** @type {string} */
                      marker = marker + "+"rip"si16"+"rip";
                    } else {
                      if ("+"rip"[object Uint16Array]"+"rip" === error) {
                        /** @type {string} */
                        marker = marker + "+"rip"ur16"+"rip";
                      } else {
                        if ("+"rip"[object Int32Array]"+"rip" === error) {
                          /** @type {string} */
                          marker = marker + "+"rip"si32"+"rip";
                        } else {
                          if ("+"rip"[object Uint32Array]"+"rip" === error) {
                            /** @type {string} */
                            marker = marker + "+"rip"ui32"+"rip";
                          } else {
                            if ("+"rip"[object Float32Array]"+"rip" === error) {
                              /** @type {string} */
                              marker = marker + "+"rip"fl32"+"rip";
                            } else {
                              if ("+"rip"[object Float64Array]"+"rip" === error) {
                                /** @type {string} */
                                marker = marker + "+"rip"fl64"+"rip";
                              } else {
                                callback(new Error("+"rip"Failed to get type for BinaryArray"+"rip"));
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            callback(marker + bufferToString(buffer));
          } else {
            if ("+"rip"[object Blob]"+"rip" === error) {
              /** @type {!FileReader} */
              var fileReader = new FileReader;
              /**
               * @return {undefined}
               */
              fileReader.onload = function() {
                /** @type {string} */
                var str = "+"rip"~~local_forage_type~"+"rip" + data.type + "+"rip"~"+"rip" + bufferToString(this.result);
                callback(SERIALIZED_MARKER + TYPE_BLOB + str);
              };
              fileReader.readAsArrayBuffer(data);
            } else {
              try {
                callback(JSON.stringify(data));
              } catch (warFilename) {
                console.error("+"rip"Couldn't convert value into a JSON string: "+"rip", data);
                callback(null, warFilename);
              }
            }
          }
        },
        deserialize : function(value) {
          if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
            return JSON.parse(value);
          }
          var blobType;
          var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
          var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
          if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
            var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
            blobType = matcher[1];
            serializedString = serializedString.substring(matcher[0].length);
          }
          var buffer = stringToBuffer(serializedString);
          switch(type) {
            case TYPE_ARRAYBUFFER:
              return buffer;
            case TYPE_BLOB:
              return createBlob([buffer], {
                type : blobType
              });
            case "+"rip"si08"+"rip":
              return new Int8Array(buffer);
            case "+"rip"ui08"+"rip":
              return new Uint8Array(buffer);
            case "+"rip"uic8"+"rip":
              return new Uint8ClampedArray(buffer);
            case "+"rip"si16"+"rip":
              return new Int16Array(buffer);
            case "+"rip"ur16"+"rip":
              return new Uint16Array(buffer);
            case "+"rip"si32"+"rip":
              return new Int32Array(buffer);
            case "+"rip"ui32"+"rip":
              return new Uint32Array(buffer);
            case "+"rip"fl32"+"rip":
              return new Float32Array(buffer);
            case "+"rip"fl64"+"rip":
              return new Float64Array(buffer);
            default:
              throw new Error("+"rip"Unkown type: "+"rip" + type);
          }
        },
        stringToBuffer : stringToBuffer,
        bufferToString : bufferToString
      };
      var asyncStorage = {
        _driver : "+"rip"webSQLStorage"+"rip",
        _initStorage : function(options) {
          var self = this;
          var dbInfo = {
            db : null
          };
          if (options) {
            var i;
            for (i in options) {
              dbInfo[i] = "+"rip"string"+"rip" != typeof options[i] ? options[i].toString() : options[i];
            }
          }
          /** @type {!Promise} */
          var dbInfoPromise = new Promise$1(function(saveNotifs, resolve) {
            try {
              /** @type {!Database} */
              dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
            } catch (routesFileLocation) {
              return resolve(routesFileLocation);
            }
            dbInfo.db.transaction(function(tx) {
              tx.executeSql("+"rip"CREATE TABLE IF NOT EXISTS "+"rip" + dbInfo.storeName + "+"rip" (id INTEGER PRIMARY KEY, key unique, value)"+"rip", [], function() {
                self._dbInfo = dbInfo;
                saveNotifs();
              }, function(canCreateDiscussions, defaultSounds) {
                resolve(defaultSounds);
              });
            });
          });
          return dbInfo.serializer = localforageSerializer, dbInfoPromise;
        },
        iterate : function(f, e) {
          var self = this;
          /** @type {!Promise} */
          var t = new Promise$1(function(handleImportCall, errback) {
            self.ready().then(function() {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function(tx) {
                tx.executeSql("+"rip"SELECT * FROM "+"rip" + dbInfo.storeName, [], function(canCreateDiscussions, catalogs) {
                  var n = catalogs.rows;
                  var count = n.length;
                  /** @type {number} */
                  var index = 0;
                  for (; index < count; index++) {
                    var self = n.item(index);
                    var m = self.value;
                    if (m && (m = dbInfo.serializer.deserialize(m)), void 0 !== (m = f(m, self.key, index + 1))) {
                      return void handleImportCall(m);
                    }
                  }
                  handleImportCall();
                }, function(canCreateDiscussions, e) {
                  errback(e);
                });
              });
            }).catch(errback);
          });
          return i(t, e), t;
        },
        getItem : function(name, e) {
          var self = this;
          if ("+"rip"string"+"rip" != typeof name) {
            console.warn(name + "+"rip" used as a key, but it is not a string."+"rip");
            /** @type {string} */
            name = String(name);
          }
          /** @type {!Promise} */
          var t = new Promise$1(function(returnResultsFn, errback) {
            self.ready().then(function() {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function(tx) {
                tx.executeSql("+"rip"SELECT * FROM "+"rip" + dbInfo.storeName + "+"rip" WHERE key = ? LIMIT 1"+"rip", [name], function(canCreateDiscussions, rslt) {
                  var r = rslt.rows.length ? rslt.rows.item(0).value : null;
                  if (r) {
                    r = dbInfo.serializer.deserialize(r);
                  }
                  returnResultsFn(r);
                }, function(canCreateDiscussions, e) {
                  errback(e);
                });
              });
            }).catch(errback);
          });
          return i(t, e), t;
        },
        setItem : function(value, url, key) {
          return function test(url, value, e, f) {
            var self = this;
            if ("+"rip"string"+"rip" != typeof url) {
              console.warn(url + "+"rip" used as a key, but it is not a string."+"rip");
              /** @type {string} */
              url = String(url);
            }
            /** @type {!Promise} */
            var t = new Promise$1(function(setTimeout, reject) {
              self.ready().then(function() {
                if (void 0 === value) {
                  /** @type {null} */
                  value = null;
                }
                /** @type {!Object} */
                var r = value;
                var dbInfo = self._dbInfo;
                dbInfo.serializer.serialize(value, function(data, error5) {
                  if (error5) {
                    reject(error5);
                  } else {
                    dbInfo.db.transaction(function(callback) {
                      callback.executeSql("+"rip"INSERT OR REPLACE INTO "+"rip" + dbInfo.storeName + "+"rip" (key, value) VALUES (?, ?)"+"rip", [url, data], function() {
                        setTimeout(r);
                      }, function(canCreateDiscussions, error5) {
                        reject(error5);
                      });
                    }, function(sqlError) {
                      if (sqlError.code === sqlError.QUOTA_ERR) {
                        if (0 < f) {
                          return void setTimeout(test.apply(self, [url, r, e, f - 1]));
                        }
                        reject(sqlError);
                      }
                    });
                  }
                });
              }).catch(reject);
            });
            return i(t, e), t;
          }.apply(this, [value, url, key, 1]);
        },
        removeItem : function(name, e) {
          var self = this;
          if ("+"rip"string"+"rip" != typeof name) {
            console.warn(name + "+"rip" used as a key, but it is not a string."+"rip");
            /** @type {string} */
            name = String(name);
          }
          /** @type {!Promise} */
          var t = new Promise$1(function(saveNotifs, errback) {
            self.ready().then(function() {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function(tx) {
                tx.executeSql("+"rip"DELETE FROM "+"rip" + dbInfo.storeName + "+"rip" WHERE key = ?"+"rip", [name], function() {
                  saveNotifs();
                }, function(canCreateDiscussions, e) {
                  errback(e);
                });
              });
            }).catch(errback);
          });
          return i(t, e), t;
        },
        clear : function(n) {
          var self = this;
          /** @type {!Promise} */
          var t = new Promise$1(function(saveNotifs, errback) {
            self.ready().then(function() {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function(tx) {
                tx.executeSql("+"rip"DELETE FROM "+"rip" + dbInfo.storeName, [], function() {
                  saveNotifs();
                }, function(canCreateDiscussions, e) {
                  errback(e);
                });
              });
            }).catch(errback);
          });
          return i(t, n), t;
        },
        length : function(a) {
          var self = this;
          /** @type {!Promise} */
          var t = new Promise$1(function(n, errback) {
            self.ready().then(function() {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function(tx) {
                tx.executeSql("+"rip"SELECT COUNT(key) as c FROM "+"rip" + dbInfo.storeName, [], function(canCreateDiscussions, rslt) {
                  var x = rslt.rows.item(0).c;
                  n(x);
                }, function(canCreateDiscussions, e) {
                  errback(e);
                });
              });
            }).catch(errback);
          });
          return i(t, a), t;
        },
        key : function(type, e) {
          var self = this;
          /** @type {!Promise} */
          var t = new Promise$1(function(saveNotifs, errback) {
            self.ready().then(function() {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function(tx) {
                tx.executeSql("+"rip"SELECT key FROM "+"rip" + dbInfo.storeName + "+"rip" WHERE id = ? LIMIT 1"+"rip", [type + 1], function(canCreateDiscussions, rslt) {
                  var notifications = rslt.rows.length ? rslt.rows.item(0).key : null;
                  saveNotifs(notifications);
                }, function(canCreateDiscussions, e) {
                  errback(e);
                });
              });
            }).catch(errback);
          });
          return i(t, e), t;
        },
        keys : function(e) {
          var self = this;
          /** @type {!Promise} */
          var t = new Promise$1(function(resolveCB, errback) {
            self.ready().then(function() {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function(tx) {
                tx.executeSql("+"rip"SELECT key FROM "+"rip" + dbInfo.storeName, [], function(canCreateDiscussions, rslt) {
                  /** @type {!Array} */
                  var results = [];
                  /** @type {number} */
                  var i = 0;
                  for (; i < rslt.rows.length; i++) {
                    results.push(rslt.rows.item(i).key);
                  }
                  resolveCB(results);
                }, function(canCreateDiscussions, e) {
                  errback(e);
                });
              });
            }).catch(errback);
          });
          return i(t, e), t;
        }
      };
      var webSQLStorage = {
        _driver : "+"rip"localStorageWrapper"+"rip",
        _initStorage : function(options) {
          var dbInfo = {};
          if (options) {
            var i;
            for (i in options) {
              dbInfo[i] = options[i];
            }
          }
          return dbInfo.keyPrefix = dbInfo.name + "+"rip"/"+"rip", dbInfo.storeName !== this._defaultConfig.storeName && (dbInfo.keyPrefix += dbInfo.storeName + "+"rip"/"+"rip"), (this._dbInfo = dbInfo).serializer = localforageSerializer, Promise$1.resolve();
        },
        iterate : function(callback, e) {
          var self = this;
          var t = self.ready().then(function() {
            var dbInfo = self._dbInfo;
            var prefix = dbInfo.keyPrefix;
            var start = prefix.length;
            var storageQty = localStorage.length;
            /** @type {number} */
            var count = 1;
            /** @type {number} */
            var i = 0;
            for (; i < storageQty; i++) {
              var a = localStorage.key(i);
              if (0 === a.indexOf(prefix)) {
                var value = localStorage.getItem(a);
                if (value && (value = dbInfo.serializer.deserialize(value)), void 0 !== (value = callback(value, a.substring(start), count++))) {
                  return value;
                }
              }
            }
          });
          return i(t, e), t;
        },
        getItem : function(name, e) {
          var self = this;
          if ("+"rip"string"+"rip" != typeof name) {
            console.warn(name + "+"rip" used as a key, but it is not a string."+"rip");
            /** @type {string} */
            name = String(name);
          }
          var t = self.ready().then(function() {
            var options = self._dbInfo;
            var data = localStorage.getItem(options.keyPrefix + name);
            return data && (data = options.serializer.deserialize(data)), data;
          });
          return i(t, e), t;
        },
        setItem : function(name, a, e) {
          var self = this;
          if ("+"rip"string"+"rip" != typeof name) {
            console.warn(name + "+"rip" used as a key, but it is not a string."+"rip");
            /** @type {string} */
            name = String(name);
          }
          var t = self.ready().then(function() {
            if (void 0 === a) {
              /** @type {null} */
              a = null;
            }
            /** @type {!Object} */
            var selector = a;
            return new Promise$1(function(userJQuery, n) {
              var options = self._dbInfo;
              options.serializer.serialize(a, function(e, appid) {
                if (appid) {
                  n(appid);
                } else {
                  try {
                    localStorage.setItem(options.keyPrefix + name, e);
                    userJQuery(selector);
                  } catch (up) {
                    if (!("+"rip"QuotaExceededError"+"rip" !== up.name && "+"rip"NS_ERROR_DOM_QUOTA_REACHED"+"rip" !== up.name)) {
                      n(up);
                    }
                    n(up);
                  }
                }
              });
            });
          });
          return i(t, e), t;
        },
        removeItem : function(key, e) {
          var self = this;
          if ("+"rip"string"+"rip" != typeof key) {
            console.warn(key + "+"rip" used as a key, but it is not a string."+"rip");
            /** @type {string} */
            key = String(key);
          }
          var t = self.ready().then(function() {
            var dbInfo = self._dbInfo;
            localStorage.removeItem(dbInfo.keyPrefix + key);
          });
          return i(t, e), t;
        },
        clear : function(n) {
          var self = this;
          var t = self.ready().then(function() {
            var e = self._dbInfo.keyPrefix;
            /** @type {number} */
            var key = localStorage.length - 1;
            for (; 0 <= key; key--) {
              var r = localStorage.key(key);
              if (0 === r.indexOf(e)) {
                localStorage.removeItem(r);
              }
            }
          });
          return i(t, n), t;
        },
        length : function(a) {
          var t = this.keys().then(function(inRevIdx) {
            return inRevIdx.length;
          });
          return i(t, a), t;
        },
        key : function(name, e) {
          var self = this;
          var t = self.ready().then(function() {
            var t;
            var dbInfo = self._dbInfo;
            try {
              t = localStorage.key(name);
            } catch (e) {
              /** @type {null} */
              t = null;
            }
            return t && (t = t.substring(dbInfo.keyPrefix.length)), t;
          });
          return i(t, e), t;
        },
        keys : function(e) {
          var self = this;
          var t = self.ready().then(function() {
            var dbInfo = self._dbInfo;
            var orig = localStorage.length;
            /** @type {!Array} */
            var itemKeys = [];
            /** @type {number} */
            var value = 0;
            for (; value < orig; value++) {
              if (0 === localStorage.key(value).indexOf(dbInfo.keyPrefix)) {
                itemKeys.push(localStorage.key(value).substring(dbInfo.keyPrefix.length));
              }
            }
            return itemKeys;
          });
          return i(t, e), t;
        }
      };
      var CustomDrivers = {};
      var DriverType = {
        INDEXEDDB : "+"rip"asyncStorage"+"rip",
        LOCALSTORAGE : "+"rip"localStorageWrapper"+"rip",
        WEBSQL : "+"rip"webSQLStorage"+"rip"
      };
      /** @type {!Array} */
      var charListNotLatin = [DriverType.INDEXEDDB, DriverType.WEBSQL, DriverType.LOCALSTORAGE];
      /** @type {!Array} */
      var LibraryMethods = ["+"rip"clear"+"rip", "+"rip"getItem"+"rip", "+"rip"iterate"+"rip", "+"rip"key"+"rip", "+"rip"keys"+"rip", "+"rip"length"+"rip", "+"rip"removeItem"+"rip", "+"rip"setItem"+"rip"];
      var DefaultConfig = {
        description : "+"rip""+"rip",
        driver : charListNotLatin.slice(),
        name : "+"rip"localforage"+"rip",
        size : 4980736,
        storeName : "+"rip"keyvaluepairs"+"rip",
        version : 1
      };
      var result = {};
      result[DriverType.INDEXEDDB] = function() {
        try {
          if (!idb) {
            return false;
          }
          /** @type {boolean} */
          var e = "+"rip"undefined"+"rip" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
          /** @type {boolean} */
          var pm = "+"rip"function"+"rip" == typeof fetch && -1 !== fetch.toString().indexOf("+"rip"[native code"+"rip");
          return (!e || pm) && "+"rip"undefined"+"rip" != typeof indexedDB && "+"rip"undefined"+"rip" != typeof IDBKeyRange;
        } catch (e) {
          return false;
        }
      }();
      /** @type {boolean} */
      result[DriverType.WEBSQL] = "+"rip"function"+"rip" == typeof openDatabase;
      result[DriverType.LOCALSTORAGE] = function() {
        try {
          return "+"rip"undefined"+"rip" != typeof localStorage && "+"rip"setItem"+"rip" in localStorage && localStorage.setItem;
        } catch (e) {
          return false;
        }
      }();
      /** @type {function(*): boolean} */
      var isArray = Array.isArray || function(value) {
        return "+"rip"[object Array]"+"rip" === Object.prototype.toString.call(value);
      };
      var storeMixin = new (function() {
        /**
         * @param {?} options
         * @return {undefined}
         */
        function LocalForage(options) {
          !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("+"rip"Cannot call a class as a function"+"rip");
            }
          }(this, LocalForage);
          /** @type {string} */
          this.INDEXEDDB = DriverType.INDEXEDDB;
          /** @type {string} */
          this.LOCALSTORAGE = DriverType.LOCALSTORAGE;
          /** @type {string} */
          this.WEBSQL = DriverType.WEBSQL;
          this._defaultConfig = extend({}, DefaultConfig);
          this._config = extend({}, this._defaultConfig, options);
          /** @type {null} */
          this._driverSet = null;
          /** @type {null} */
          this._initDriver = null;
          /** @type {boolean} */
          this._ready = false;
          /** @type {null} */
          this._dbInfo = null;
          this._wrapLibraryMethodsWithReady();
          this.setDriver(this._config.driver).catch(function() {
          });
        }
        return LocalForage.prototype.config = function(options) {
          if ("+"rip"object"+"rip" === (void 0 === options ? "+"rip"undefined"+"rip" : loadPlatform(options))) {
            if (this._ready) {
              return new Error("+"rip"Can't call config() after localforage has been used."+"rip");
            }
            var i;
            for (i in options) {
              if ("+"rip"storeName"+"rip" === i && (options[i] = options[i].replace(/\W/g, "+"rip"_"+"rip")), "+"rip"version"+"rip" === i && "+"rip"number"+"rip" != typeof options[i]) {
                return new Error("+"rip"Database version must be a number."+"rip");
              }
              this._config[i] = options[i];
            }
            return !("+"rip"driver"+"rip" in options && options.driver) || this.setDriver(this._config.driver);
          }
          return "+"rip"string"+"rip" == typeof options ? this._config[options] : this._config;
        }, LocalForage.prototype.defineDriver = function(driverObject, callback, errorCallback) {
          /** @type {!Promise} */
          var promise = new Promise$1(function(_moduleExists, reject) {
            try {
              var driverName = driverObject._driver;
              /** @type {!Error} */
              var firstError = new Error("+"rip"Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"+"rip");
              /** @type {!Error} */
              var thrownError = new Error("+"rip"Custom driver name already in use: "+"rip" + driverObject._driver);
              if (!driverObject._driver) {
                return void reject(firstError);
              }
              if (isLibraryDriver(driverObject._driver)) {
                return void reject(thrownError);
              }
              /** @type {!Array<?>} */
              var customDriverMethods = LibraryMethods.concat("+"rip"_initStorage"+"rip");
              /** @type {number} */
              var i = 0;
              for (; i < customDriverMethods.length; i++) {
                var customDriverMethod = customDriverMethods[i];
                if (!customDriverMethod || !driverObject[customDriverMethod] || "+"rip"function"+"rip" != typeof driverObject[customDriverMethod]) {
                  return void reject(firstError);
                }
              }
              /**
               * @param {boolean} e
               * @return {undefined}
               */
              var resolve = function(e) {
                /** @type {boolean} */
                result[driverName] = e;
                /** @type {!Object} */
                CustomDrivers[driverName] = driverObject;
                _moduleExists();
              };
              if ("+"rip"_support"+"rip" in driverObject) {
                if (driverObject._support && "+"rip"function"+"rip" == typeof driverObject._support) {
                  driverObject._support().then(resolve, reject);
                } else {
                  resolve(!!driverObject._support);
                }
              } else {
                resolve(true);
              }
            } catch (createConnectionErr) {
              reject(createConnectionErr);
            }
          });
          return executeTwoCallbacks(promise, callback, errorCallback), promise;
        }, LocalForage.prototype.driver = function() {
          return this._driver || null;
        }, LocalForage.prototype.getDriver = function(driverName, callback, errorCallback) {
          var self = this;
          /** @type {!Promise<?>} */
          var getDriverPromise = Promise$1.resolve().then(function() {
            if (!isLibraryDriver(driverName)) {
              if (CustomDrivers[driverName]) {
                return CustomDrivers[driverName];
              }
              throw new Error("+"rip"Driver not found."+"rip");
            }
            switch(driverName) {
              case self.INDEXEDDB:
                return localStorageWrapper;
              case self.LOCALSTORAGE:
                return webSQLStorage;
              case self.WEBSQL:
                return asyncStorage;
            }
          });
          return executeTwoCallbacks(getDriverPromise, callback, errorCallback), getDriverPromise;
        }, LocalForage.prototype.getSerializer = function(callback) {
          /** @type {!Promise<{bufferToString: function(!Object): ?, deserialize: function(!Object): ?, serialize: function(!Object, !Function): undefined, stringToBuffer: function(!Object): ?}>} */
          var serializerPromise = Promise$1.resolve(localforageSerializer);
          return executeTwoCallbacks(serializerPromise, callback), serializerPromise;
        }, LocalForage.prototype.ready = function(callback) {
          var self = this;
          var getDriverPromise = self._driverSet.then(function() {
            return null === self._ready && (self._ready = self._initDriver()), self._ready;
          });
          return executeTwoCallbacks(getDriverPromise, callback, callback), getDriverPromise;
        }, LocalForage.prototype.setDriver = function(type, callback, errorCallback) {
          /**
           * @return {undefined}
           */
          function setDriverToConfig() {
            self._config.driver = self.driver();
          }
          /**
           * @param {?} event
           * @return {?}
           */
          function success(event) {
            return self._extend(event), setDriverToConfig(), self._ready = self._initStorage(self._config), self._ready;
          }
          var self = this;
          if (!isArray(type)) {
            /** @type {!Array} */
            type = [type];
          }
          var typeIncluded = this._getSupportedDrivers(type);
          var loadPropPromise = null !== this._driverSet ? this._driverSet.catch(function() {
            return Promise$1.resolve();
          }) : Promise$1.resolve();
          return this._driverSet = loadPropPromise.then(function() {
            var driverName = typeIncluded[0];
            return self._dbInfo = null, self._ready = null, self.getDriver(driverName).then(function(options) {
              var supportedDrivers;
              self._driver = options._driver;
              setDriverToConfig();
              self._wrapLibraryMethodsWithReady();
              /** @type {function(): ?} */
              self._initDriver = (supportedDrivers = typeIncluded, function() {
                /** @type {number} */
                var currentDriverIndex = 0;
                return function driverPromiseLoop() {
                  for (; currentDriverIndex < supportedDrivers.length;) {
                    var driverName = supportedDrivers[currentDriverIndex];
                    return currentDriverIndex++, self._dbInfo = null, self._ready = null, self.getDriver(driverName).then(success).catch(driverPromiseLoop);
                  }
                  setDriverToConfig();
                  /** @type {!Error} */
                  var error = new Error("+"rip"No available storage method found."+"rip");
                  return self._driverSet = Promise$1.reject(error), self._driverSet;
                }();
              });
            });
          }).catch(function() {
            setDriverToConfig();
            /** @type {!Error} */
            var error = new Error("+"rip"No available storage method found."+"rip");
            return self._driverSet = Promise$1.reject(error), self._driverSet;
          }), executeTwoCallbacks(this._driverSet, callback, errorCallback), this._driverSet;
        }, LocalForage.prototype.supports = function(item) {
          return !!result[item];
        }, LocalForage.prototype._extend = function(defaults) {
          extend(this, defaults);
        }, LocalForage.prototype._getSupportedDrivers = function(drivers) {
          /** @type {!Array} */
          var supportedDrivers = [];
          /** @type {number} */
          var i = 0;
          var len = drivers.length;
          for (; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
              supportedDrivers.push(driverName);
            }
          }
          return supportedDrivers;
        }, LocalForage.prototype._wrapLibraryMethodsWithReady = function() {
          /** @type {number} */
          var i = 0;
          for (; i < LibraryMethods.length; i++) {
            callWhenReady(this, LibraryMethods[i]);
          }
        }, LocalForage.prototype.createInstance = function(options) {
          return new LocalForage(options);
        }, LocalForage;
      }());
      module.exports = storeMixin;
    }, {
      3 : 3
    }]
  }, {}, [4])(4);
});
var saveAs = saveAs || function(view) {
  if ("+"rip"undefined"+"rip" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
    var doc = view.document;
    /**
     * @return {?}
     */
    var get_URL = function() {
      return view.URL || view.webkitURL || view;
    };
    var save_link = doc.createElementNS("+"rip"http://www.w3.org/1999/xhtml"+"rip", "+"rip"a"+"rip");
    /** @type {boolean} */
    var can_use_save_link = "+"rip"download"+"rip" in save_link;
    /** @type {function(this:Window, number, number, function(!FileSystem): ?, function(!FileError): ?=): undefined} */
    var webkit_req_fs = view.webkitRequestFileSystem;
    /** @type {function(this:Window, number, number, function(!FileSystem): ?, function(!FileError): ?=): undefined} */
    var req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem;
    /**
     * @param {?} ex
     * @return {undefined}
     */
    var throwOutside = function(ex) {
      (view.setImmediate || view.setTimeout)(function() {
        throw ex;
      }, 0);
    };
    /** @type {string} */
    var force_saveable_type = "+"rip"application/octet-stream"+"rip";
    /** @type {number} */
    var fs_min_size = 0;
    /**
     * @param {!Object} file
     * @return {undefined}
     */
    var revoke = function(file) {
      /**
       * @return {undefined}
       */
      var revoker = function() {
        if ("+"rip"string"+"rip" == typeof file) {
          get_URL().revokeObjectURL(file);
        } else {
          file.remove();
        }
      };
      if (view.chrome) {
        revoker();
      } else {
        setTimeout(revoker, 500);
      }
    };
    /**
     * @param {?} e
     * @param {string} type
     * @param {boolean} scope
     * @return {undefined}
     */
    var dispatch = function(e, type, scope) {
      /** @type {number} */
      var i = (type = [].concat(type)).length;
      for (; i--;) {
        var callback = e["+"rip"on"+"rip" + type[i]];
        if ("+"rip"function"+"rip" == typeof callback) {
          try {
            callback.call(e, scope || e);
          } catch (ex) {
            throwOutside(ex);
          }
        }
      }
    };
    /**
     * @param {!Object} blob
     * @return {?}
     */
    var auto_bom = function(blob) {
      return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type) ? new Blob(["+"rip"\ufeff"+"rip", blob], {
        type : blob.type
      }) : blob;
    };
    /**
     * @param {!Object} blob
     * @param {string} name
     * @return {?}
     */
    var FileSaver = function(blob, name) {
      blob = auto_bom(blob);
      var object_url;
      var target_view;
      var slice;
      var flipBox;
      var event;
      var filesaver = this;
      var type = blob.type;
      /** @type {boolean} */
      var u = false;
      /**
       * @return {undefined}
       */
      var dispatch_all = function() {
        dispatch(filesaver, "+"rip"writestart progress write writeend"+"rip".split("+"rip" "+"rip"));
      };
      /**
       * @return {undefined}
       */
      var fs_error = function() {
        if (!u && object_url || (object_url = get_URL().createObjectURL(blob)), target_view) {
          target_view.location.href = object_url;
        } else {
          if (null == view.open(object_url, "+"rip"_blank"+"rip") && "+"rip"undefined"+"rip" != typeof safari) {
            view.location.href = object_url;
          }
        }
        filesaver.readyState = filesaver.DONE;
        dispatch_all();
        revoke(object_url);
      };
      /**
       * @param {!Function} func
       * @return {?}
       */
      var abortable = function(func) {
        return function() {
          if (filesaver.readyState !== filesaver.DONE) {
            return func.apply(this, arguments);
          }
        };
      };
      var create_if_not_found = {
        create : true,
        exclusive : false
      };
      if (filesaver.readyState = filesaver.INIT, name || (name = "+"rip"download"+"rip"), can_use_save_link) {
        return object_url = get_URL().createObjectURL(blob), save_link.href = object_url, save_link.download = name, flipBox = save_link, (event = doc.createEvent("+"rip"MouseEvents"+"rip")).initMouseEvent("+"rip"click"+"rip", true, false, view, 0, 0, 0, 0, 0, false, false, false, false, 0, null), flipBox.dispatchEvent(event), filesaver.readyState = filesaver.DONE, dispatch_all(), void revoke(object_url);
      }
      if (view.chrome && type && type !== force_saveable_type) {
        slice = blob.slice || blob.webkitSlice;
        blob = slice.call(blob, 0, blob.size, force_saveable_type);
        /** @type {boolean} */
        u = true;
      }
      if (webkit_req_fs && "+"rip"download"+"rip" !== name) {
        /** @type {string} */
        name = name + "+"rip".download"+"rip";
      }
      if (type === force_saveable_type || webkit_req_fs) {
        /** @type {!Window} */
        target_view = view;
      }
      if (req_fs) {
        fs_min_size = fs_min_size + blob.size;
        req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
          fs.root.getDirectory("+"rip"saved"+"rip", create_if_not_found, abortable(function(dir) {
            /**
             * @return {undefined}
             */
            var save = function() {
              dir.getFile(name, create_if_not_found, abortable(function(file) {
                file.createWriter(abortable(function(writer) {
                  /**
                   * @param {boolean} event
                   * @return {undefined}
                   */
                  writer.onwriteend = function(event) {
                    target_view.location.href = file.toURL();
                    filesaver.readyState = filesaver.DONE;
                    dispatch(filesaver, "+"rip"writeend"+"rip", event);
                    revoke(file);
                  };
                  /**
                   * @return {undefined}
                   */
                  writer.onerror = function() {
                    var error = writer.error;
                    if (error.code !== error.ABORT_ERR) {
                      fs_error();
                    }
                  };
                  "+"rip"writestart progress write abort"+"rip".split("+"rip" "+"rip").forEach(function(event) {
                    writer["+"rip"on"+"rip" + event] = filesaver["+"rip"on"+"rip" + event];
                  });
                  writer.write(blob);
                  /**
                   * @return {undefined}
                   */
                  filesaver.abort = function() {
                    writer.abort();
                    filesaver.readyState = filesaver.DONE;
                  };
                  filesaver.readyState = filesaver.WRITING;
                }), fs_error);
              }), fs_error);
            };
            dir.getFile(name, {
              create : false
            }, abortable(function(inventoryService) {
              inventoryService.remove();
              save();
            }), abortable(function(err) {
              if (err.code === err.NOT_FOUND_ERR) {
                save();
              } else {
                fs_error();
              }
            }));
          }), fs_error);
        }), fs_error);
      } else {
        fs_error();
      }
    };
    var FS_proto = FileSaver.prototype;
    return "+"rip"undefined"+"rip" != typeof navigator && navigator.msSaveOrOpenBlob ? function(blob, name) {
      return navigator.msSaveOrOpenBlob(auto_bom(blob), name);
    } : (FS_proto.abort = function() {
      this.readyState = this.DONE;
      dispatch(this, "+"rip"abort"+"rip");
    }, FS_proto.readyState = FS_proto.INIT = 0, FS_proto.WRITING = 1, FS_proto.DONE = 2, FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null, function(blob, name) {
      return new FileSaver(blob, name);
    });
  }
}("+"rip"undefined"+"rip" != typeof self && self || "+"rip"undefined"+"rip" != typeof window && window || this.content);
if ("+"rip"undefined"+"rip" != typeof module && module.exports) {
  module.exports.saveAs = saveAs;
} else {
  if ("+"rip"undefined"+"rip" != typeof define && null !== define && null != define.amd) {
    define([], function() {
      return saveAs;
    });
  }
}
!function() {
  var cache = {};
  /** @type {null} */
  var ctx = null;
  /** @type {boolean} */
  var usingWebAudio = true;
  /** @type {boolean} */
  var noAudio = false;
  try {
    if ("+"rip"undefined"+"rip" != typeof AudioContext) {
      /** @type {!AudioContext} */
      ctx = new AudioContext;
    } else {
      if ("+"rip"undefined"+"rip" != typeof webkitAudioContext) {
        /** @type {!webkitAudioContext} */
        ctx = new webkitAudioContext;
      } else {
        /** @type {boolean} */
        usingWebAudio = false;
      }
    }
  } catch (e) {
    /** @type {boolean} */
    usingWebAudio = false;
  }
  if (!usingWebAudio) {
    if ("+"rip"undefined"+"rip" != typeof Audio) {
      try {
        new Audio;
      } catch (e) {
        /** @type {boolean} */
        noAudio = true;
      }
    } else {
      /** @type {boolean} */
      noAudio = true;
    }
  }
  if (usingWebAudio) {
    var gain = void 0 === ctx.createGain ? ctx.createGainNode() : ctx.createGain();
    /** @type {number} */
    gain.gain.value = 1;
    gain.connect(ctx.destination);
  }
  /**
   * @param {?} codecs
   * @return {undefined}
   */
  var HowlerGlobal = function(codecs) {
    /** @type {number} */
    this._volume = 1;
    /** @type {boolean} */
    this._muted = false;
    this.usingWebAudio = usingWebAudio;
    this.ctx = ctx;
    this.noAudio = noAudio;
    /** @type {!Array} */
    this._howls = [];
    this._codecs = codecs;
    /** @type {boolean} */
    this.iOSAutoEnable = true;
  };
  HowlerGlobal.prototype = {
    volume : function(value) {
      var self = this;
      if (0 <= (value = parseFloat(value)) && value <= 1) {
        var key;
        for (key in self._volume = value, usingWebAudio && (gain.gain.value = value), self._howls) {
          if (self._howls.hasOwnProperty(key) && false === self._howls[key]._webAudio) {
            /** @type {number} */
            var i = 0;
            for (; i < self._howls[key]._audioNode.length; i++) {
              /** @type {number} */
              self._howls[key]._audioNode[i].volume = self._howls[key]._volume * self._volume;
            }
          }
        }
        return self;
      }
      return usingWebAudio ? gain.gain.value : self._volume;
    },
    mute : function() {
      return this._setMuted(true), this;
    },
    unmute : function() {
      return this._setMuted(false), this;
    },
    _setMuted : function(muted) {
      var self = this;
      var key;
      for (key in self._muted = muted, usingWebAudio && (gain.gain.value = muted ? 0 : self._volume), self._howls) {
        if (self._howls.hasOwnProperty(key) && false === self._howls[key]._webAudio) {
          /** @type {number} */
          var i = 0;
          for (; i < self._howls[key]._audioNode.length; i++) {
            /** @type {boolean} */
            self._howls[key]._audioNode[i].muted = muted;
          }
        }
      }
    },
    codecs : function(ext) {
      return this._codecs[ext];
    },
    _enableiOSAudio : function() {
      var self = this;
      if (!ctx || !self._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        /** @type {boolean} */
        self._iOSEnabled = false;
        /**
         * @return {undefined}
         */
        var unlock = function() {
          var soundBuff = ctx.createBuffer(1, 1, 22050);
          var source = ctx.createBufferSource();
          source.buffer = soundBuff;
          source.connect(ctx.destination);
          if (void 0 === source.start) {
            source.noteOn(0);
          } else {
            source.start(0);
          }
          setTimeout(function() {
            if (!(source.playbackState !== source.PLAYING_STATE && source.playbackState !== source.FINISHED_STATE)) {
              /** @type {boolean} */
              self._iOSEnabled = true;
              /** @type {boolean} */
              self.iOSAutoEnable = false;
              window.removeEventListener("+"rip"touchstart"+"rip", unlock, false);
            }
          }, 0);
        };
        return window.addEventListener("+"rip"touchstart"+"rip", unlock, false), self;
      }
    }
  };
  /** @type {null} */
  var audioTest = null;
  var codecs = {};
  if (!noAudio) {
    /** @type {!Audio} */
    audioTest = new Audio;
    codecs = {
      mp3 : !!audioTest.canPlayType("+"rip"audio/mpeg;"+"rip").replace(/^no$/, "+"rip""+"rip"),
      opus : !!audioTest.canPlayType('audio/ogg; codecs="+"rip"opus"+"rip"').replace(/^no$/, "+"rip""+"rip"),
      ogg : !!audioTest.canPlayType('audio/ogg; codecs="+"rip"vorbis"+"rip"').replace(/^no$/, "+"rip""+"rip"),
      wav : !!audioTest.canPlayType('audio/wav; codecs="+"rip"1"+"rip"').replace(/^no$/, "+"rip""+"rip"),
      aac : !!audioTest.canPlayType("+"rip"audio/aac;"+"rip").replace(/^no$/, "+"rip""+"rip"),
      m4a : !!(audioTest.canPlayType("+"rip"audio/x-m4a;"+"rip") || audioTest.canPlayType("+"rip"audio/m4a;"+"rip") || audioTest.canPlayType("+"rip"audio/aac;"+"rip")).replace(/^no$/, "+"rip""+"rip"),
      mp4 : !!(audioTest.canPlayType("+"rip"audio/x-mp4;"+"rip") || audioTest.canPlayType("+"rip"audio/mp4;"+"rip") || audioTest.canPlayType("+"rip"audio/aac;"+"rip")).replace(/^no$/, "+"rip""+"rip"),
      weba : !!audioTest.canPlayType('audio/webm; codecs="+"rip"vorbis"+"rip"').replace(/^no$/, "+"rip""+"rip")
    };
  }
  var Howler = new HowlerGlobal(codecs);
  /**
   * @param {!Object} o
   * @return {undefined}
   */
  var Howl = function(o) {
    var self = this;
    self._autoplay = o.autoplay || false;
    self._buffer = o.buffer || false;
    self._duration = o.duration || 0;
    self._format = o.format || null;
    self._loop = o.loop || false;
    /** @type {boolean} */
    self._loaded = false;
    self._sprite = o.sprite || {};
    self._src = o.src || "+"rip""+"rip";
    self._pos3d = o.pos3d || [0, 0, -.5];
    self._volume = void 0 !== o.volume ? o.volume : 1;
    self._urls = o.urls || [];
    self._rate = o.rate || 1;
    self._model = o.model || null;
    /** @type {!Array} */
    self._onload = [o.onload || function() {
    }];
    /** @type {!Array} */
    self._onloaderror = [o.onloaderror || function() {
    }];
    /** @type {!Array} */
    self._onend = [o.onend || function() {
    }];
    /** @type {!Array} */
    self._onpause = [o.onpause || function() {
    }];
    /** @type {!Array} */
    self._onplay = [o.onplay || function() {
    }];
    /** @type {!Array} */
    self._onendTimer = [];
    self._webAudio = usingWebAudio && !self._buffer;
    /** @type {!Array} */
    self._audioNode = [];
    if (self._webAudio) {
      self._setupAudioNode();
    }
    if (void 0 !== ctx && ctx && Howler.iOSAutoEnable) {
      Howler._enableiOSAudio();
    }
    Howler._howls.push(self);
    self.load();
  };
  if (Howl.prototype = {
    load : function() {
      var self = this;
      /** @type {null} */
      var url = null;
      if (noAudio) {
        self.on("+"rip"loaderror"+"rip");
      } else {
        /** @type {number} */
        var i = 0;
        for (; i < self._urls.length; i++) {
          var ext;
          var u;
          if (self._format) {
            ext = self._format;
          } else {
            if (u = self._urls[i], (ext = /^data:audio\/([^;,]+);/i.exec(u)) || (ext = /\.([^.]+)$/.exec(u.split("+"rip"?"+"rip", 1)[0])), !ext) {
              return void self.on("+"rip"loaderror"+"rip");
            }
            /** @type {string} */
            ext = ext[1].toLowerCase();
          }
          if (codecs[ext]) {
            url = self._urls[i];
            break;
          }
        }
        if (url) {
          if (self._src = url, self._webAudio) {
            loadBuffer(self, url);
          } else {
            /** @type {!Audio} */
            var newNode = new Audio;
            newNode.addEventListener("+"rip"error"+"rip", function() {
              if (newNode.error && 4 === newNode.error.code) {
                /** @type {boolean} */
                HowlerGlobal.noAudio = true;
              }
              self.on("+"rip"loaderror"+"rip", {
                type : newNode.error ? newNode.error.code : 0
              });
            }, false);
            self._audioNode.push(newNode);
            newNode.src = url;
            /** @type {number} */
            newNode._pos = 0;
            /** @type {string} */
            newNode.preload = "+"rip"auto"+"rip";
            /** @type {number} */
            newNode.volume = Howler._muted ? 0 : self._volume * Howler.volume();
            /**
             * @return {undefined}
             */
            var listener = function() {
              /** @type {number} */
              self._duration = Math.ceil(10 * newNode.duration) / 10;
              if (0 === Object.getOwnPropertyNames(self._sprite).length) {
                self._sprite = {
                  _default : [0, 1e3 * self._duration]
                };
              }
              if (!self._loaded) {
                /** @type {boolean} */
                self._loaded = true;
                self.on("+"rip"load"+"rip");
              }
              if (self._autoplay) {
                self.play();
              }
              newNode.removeEventListener("+"rip"canplaythrough"+"rip", listener, false);
            };
            newNode.addEventListener("+"rip"canplaythrough"+"rip", listener, false);
            newNode.load();
          }
          return self;
        }
        self.on("+"rip"loaderror"+"rip");
      }
    },
    urls : function(urls) {
      var self = this;
      return urls ? (self.stop(), self._urls = "+"rip"string"+"rip" == typeof urls ? [urls] : urls, self._loaded = false, self.load(), self) : self._urls;
    },
    play : function(type, item) {
      var self = this;
      return "+"rip"function"+"rip" == typeof type && (item = type), type && "+"rip"function"+"rip" != typeof type || (type = "+"rip"_default"+"rip"), self._loaded ? self._sprite[type] ? self._inactiveNode(function(node) {
        node._sprite = type;
        var start = 0 < node._pos ? node._pos : self._sprite[type][0] / 1E3;
        /** @type {number} */
        var duration = 0;
        if (self._webAudio) {
          /** @type {number} */
          duration = self._sprite[type][1] / 1E3 - node._pos;
          if (0 < node._pos) {
            start = self._sprite[type][0] / 1E3 + start;
          }
        } else {
          /** @type {number} */
          duration = self._sprite[type][1] / 1E3 - (start - self._sprite[type][0] / 1E3);
        }
        var timer;
        var data;
        var local;
        var id;
        var fn;
        var obj;
        var listener;
        /** @type {boolean} */
        var loop = !(!self._loop && !self._sprite[type][2]);
        /** @type {string} */
        var value = "+"rip"string"+"rip" == typeof item ? item : Math.round(Date.now() * Math.random()) + "+"rip""+"rip";
        if (data = {
          id : value,
          sprite : type,
          loop : loop
        }, timer = setTimeout(function() {
          if (!self._webAudio && loop) {
            self.stop(data.id).play(type, data.id);
          }
          if (self._webAudio && !loop) {
            /** @type {boolean} */
            self._nodeById(data.id).paused = true;
            /** @type {number} */
            self._nodeById(data.id)._pos = 0;
            self._clearEndTimer(data.id);
          }
          if (!(self._webAudio || loop)) {
            self.stop(data.id);
          }
          self.on("+"rip"end"+"rip", value);
        }, 1E3 * duration), self._onendTimer.push({
          timer : timer,
          id : data.id
        }), self._webAudio) {
          /** @type {number} */
          var pos = self._sprite[type][0] / 1E3;
          /** @type {number} */
          var duration = self._sprite[type][1] / 1E3;
          /** @type {string} */
          node.id = value;
          /** @type {boolean} */
          node.paused = false;
          refreshBuffer(self, [loop, pos, duration], value);
          self._playStart = ctx.currentTime;
          node.gain.value = self._volume;
          if (void 0 === node.bufferSource.start) {
            if (loop) {
              node.bufferSource.noteGrainOn(0, start, 86400);
            } else {
              node.bufferSource.noteGrainOn(0, start, duration);
            }
          } else {
            if (loop) {
              node.bufferSource.start(0, start, 86400);
            } else {
              node.bufferSource.start(0, start, duration);
            }
          }
        } else {
          if (4 !== node.readyState && (node.readyState || !navigator.isCocoonJS)) {
            return self._clearEndTimer(value), local = self, id = type, fn = item, listener = function() {
              local.play(id, fn);
              obj.removeEventListener("+"rip"canplaythrough"+"rip", listener, false);
            }, (obj = node).addEventListener("+"rip"canplaythrough"+"rip", listener, false), self;
          }
          /** @type {number} */
          node.readyState = 4;
          /** @type {string} */
          node.id = value;
          node.currentTime = start;
          node.muted = Howler._muted || node.muted;
          /** @type {number} */
          node.volume = self._volume * Howler.volume();
          setTimeout(function() {
            node.play();
          }, 0);
        }
        return self.on("+"rip"play"+"rip"), "+"rip"function"+"rip" == typeof item && item(value), self;
      }) : "+"rip"function"+"rip" == typeof item && item() : self.on("+"rip"load"+"rip", function() {
        self.play(type, item);
      }), self;
    },
    pause : function(id) {
      var self = this;
      if (!self._loaded) {
        return self.on("+"rip"play"+"rip", function() {
          self.pause(id);
        }), self;
      }
      self._clearEndTimer(id);
      var activeNode = id ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (activeNode._pos = self.pos(null, id), self._webAudio) {
          if (!activeNode.bufferSource || activeNode.paused) {
            return self;
          }
          /** @type {boolean} */
          activeNode.paused = true;
          if (void 0 === activeNode.bufferSource.stop) {
            activeNode.bufferSource.noteOff(0);
          } else {
            activeNode.bufferSource.stop(0);
          }
        } else {
          activeNode.pause();
        }
      }
      return self.on("+"rip"pause"+"rip"), self;
    },
    stop : function(id) {
      var self = this;
      if (!self._loaded) {
        return self.on("+"rip"play"+"rip", function() {
          self.stop(id);
        }), self;
      }
      self._clearEndTimer(id);
      var activeNode = id ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (activeNode._pos = 0, self._webAudio) {
          if (!activeNode.bufferSource || activeNode.paused) {
            return self;
          }
          /** @type {boolean} */
          activeNode.paused = true;
          if (void 0 === activeNode.bufferSource.stop) {
            activeNode.bufferSource.noteOff(0);
          } else {
            activeNode.bufferSource.stop(0);
          }
        } else {
          if (!isNaN(activeNode.duration)) {
            activeNode.pause();
            /** @type {number} */
            activeNode.currentTime = 0;
          }
        }
      }
      return self;
    },
    mute : function(id) {
      var self = this;
      if (!self._loaded) {
        return self.on("+"rip"play"+"rip", function() {
          self.mute(id);
        }), self;
      }
      var activeNode = id ? self._nodeById(id) : self._activeNode();
      return activeNode && (self._webAudio ? activeNode.gain.value = 0 : activeNode.muted = true), self;
    },
    unmute : function(id) {
      var self = this;
      if (!self._loaded) {
        return self.on("+"rip"play"+"rip", function() {
          self.unmute(id);
        }), self;
      }
      var activeNode = id ? self._nodeById(id) : self._activeNode();
      return activeNode && (self._webAudio ? activeNode.gain.value = self._volume : activeNode.muted = false), self;
    },
    volume : function(value, id) {
      var self = this;
      if (0 <= (value = parseFloat(value)) && value <= 1) {
        if (self._volume = value, !self._loaded) {
          return self.on("+"rip"play"+"rip", function() {
            self.volume(value, id);
          }), self;
        }
        var activeNode = id ? self._nodeById(id) : self._activeNode();
        return activeNode && (self._webAudio ? activeNode.gain.value = value : activeNode.volume = value * Howler.volume()), self;
      }
      return self._volume;
    },
    loop : function(val) {
      return "+"rip"boolean"+"rip" == typeof val ? (this._loop = val, this) : this._loop;
    },
    sprite : function(name) {
      return "+"rip"object"+"rip" == typeof name ? (this._sprite = name, this) : this._sprite;
    },
    pos : function(value, id) {
      var self = this;
      if (!self._loaded) {
        return self.on("+"rip"load"+"rip", function() {
          self.pos(value);
        }), "+"rip"number"+"rip" == typeof value ? self : self._pos || 0;
      }
      /** @type {number} */
      value = parseFloat(value);
      var sound = id ? self._nodeById(id) : self._activeNode();
      if (sound) {
        return 0 <= value ? (self.pause(id), sound._pos = value, self.play(sound._sprite, id), self) : self._webAudio ? sound._pos + (ctx.currentTime - self._playStart) : sound.currentTime;
      }
      if (0 <= value) {
        return self;
      }
      /** @type {number} */
      var i = 0;
      for (; i < self._audioNode.length; i++) {
        if (self._audioNode[i].paused && 4 === self._audioNode[i].readyState) {
          return self._webAudio ? self._audioNode[i]._pos : self._audioNode[i].currentTime;
        }
      }
    },
    pos3d : function(x, y, z, id) {
      var self = this;
      if (y = void 0 !== y && y ? y : 0, z = void 0 !== z && z ? z : -.5, !self._loaded) {
        return self.on("+"rip"play"+"rip", function() {
          self.pos3d(x, y, z, id);
        }), self;
      }
      if (!(0 <= x || x < 0)) {
        return self._pos3d;
      }
      if (self._webAudio) {
        var activeNode = id ? self._nodeById(id) : self._activeNode();
        if (activeNode) {
          /** @type {!Array} */
          self._pos3d = [x, y, z];
          activeNode.panner.setPosition(x, y, z);
          activeNode.panner.panningModel = self._model || "+"rip"HRTF"+"rip";
        }
      }
      return self;
    },
    fade : function(from, to, len, callback, id) {
      var self = this;
      /** @type {number} */
      var dist = Math.abs(from - to);
      /** @type {string} */
      var direction = to < from ? "+"rip"down"+"rip" : "+"rip"up"+"rip";
      /** @type {number} */
      var iterations = dist / .01;
      /** @type {number} */
      var hold = len / iterations;
      if (!self._loaded) {
        return self.on("+"rip"load"+"rip", function() {
          self.fade(from, to, len, callback, id);
        }), self;
      }
      self.volume(from, id);
      /** @type {number} */
      var i = 1;
      for (; i <= iterations; i++) {
        !function() {
          var ipw = self._volume + ("+"rip"up"+"rip" === direction ? .01 : -.01) * i;
          /** @type {number} */
          var value = Math.round(1E3 * ipw) / 1E3;
          var tmp = to;
          setTimeout(function() {
            self.volume(value, id);
            if (value === tmp && callback) {
              callback();
            }
          }, hold * i);
        }();
      }
    },
    fadeIn : function(to, len, callback) {
      return this.volume(0).play().fade(0, to, len, callback);
    },
    fadeOut : function(to, len, id, callback) {
      var self = this;
      return self.fade(self._volume, to, len, function() {
        if (id) {
          id();
        }
        self.pause(callback);
        self.on("+"rip"end"+"rip");
      }, callback);
    },
    _nodeById : function(id) {
      var node = this._audioNode[0];
      /** @type {number} */
      var i = 0;
      for (; i < this._audioNode.length; i++) {
        if (this._audioNode[i].id === id) {
          node = this._audioNode[i];
          break;
        }
      }
      return node;
    },
    _activeNode : function() {
      /** @type {null} */
      var node_style_list = null;
      /** @type {number} */
      var i = 0;
      for (; i < this._audioNode.length; i++) {
        if (!this._audioNode[i].paused) {
          node_style_list = this._audioNode[i];
          break;
        }
      }
      return this._drainPool(), node_style_list;
    },
    _inactiveNode : function(callback) {
      var newNode;
      var self = this;
      /** @type {null} */
      var t = null;
      /** @type {number} */
      var i = 0;
      for (; i < self._audioNode.length; i++) {
        if (self._audioNode[i].paused && 4 === self._audioNode[i].readyState) {
          callback(self._audioNode[i]);
          /** @type {boolean} */
          t = true;
          break;
        }
      }
      if (self._drainPool(), !t) {
        if (self._webAudio) {
          newNode = self._setupAudioNode();
          callback(newNode);
        } else {
          self.load();
          newNode = self._audioNode[self._audioNode.length - 1];
          /** @type {string} */
          var listenerEvent = navigator.isCocoonJS ? "+"rip"canplaythrough"+"rip" : "+"rip"loadedmetadata"+"rip";
          /**
           * @return {undefined}
           */
          var listener = function() {
            newNode.removeEventListener(listenerEvent, listener, false);
            callback(newNode);
          };
          newNode.addEventListener(listenerEvent, listener, false);
        }
      }
    },
    _drainPool : function() {
      var i;
      var self = this;
      /** @type {number} */
      var n = 0;
      /** @type {number} */
      i = 0;
      for (; i < self._audioNode.length; i++) {
        if (self._audioNode[i].paused) {
          n++;
        }
      }
      /** @type {number} */
      i = self._audioNode.length - 1;
      for (; 0 <= i && !(n <= 5); i--) {
        if (self._audioNode[i].paused) {
          if (self._webAudio) {
            self._audioNode[i].disconnect(0);
          }
          n--;
          self._audioNode.splice(i, 1);
        }
      }
    },
    _clearEndTimer : function(soundId) {
      /** @type {number} */
      var j = 0;
      /** @type {number} */
      var i = 0;
      for (; i < this._onendTimer.length; i++) {
        if (this._onendTimer[i].id === soundId) {
          /** @type {number} */
          j = i;
          break;
        }
      }
      var drop = this._onendTimer[j];
      if (drop) {
        clearTimeout(drop.timer);
        this._onendTimer.splice(j, 1);
      }
    },
    _setupAudioNode : function() {
      var self = this;
      var node = self._audioNode;
      var index = self._audioNode.length;
      return node[index] = void 0 === ctx.createGain ? ctx.createGainNode() : ctx.createGain(), node[index].gain.value = self._volume, node[index].paused = true, node[index]._pos = 0, node[index].readyState = 4, node[index].connect(gain), node[index].panner = ctx.createPanner(), node[index].panner.panningModel = self._model || "+"rip"equalpower"+"rip", node[index].panner.setPosition(self._pos3d[0], self._pos3d[1], self._pos3d[2]), node[index].panner.connect(node[index]), node[index];
    },
    on : function(event, data) {
      var handledCalls = this["+"rip"_on"+"rip" + event];
      if ("+"rip"function"+"rip" == typeof data) {
        handledCalls.push(data);
      } else {
        /** @type {number} */
        var i = 0;
        for (; i < handledCalls.length; i++) {
          if (data) {
            handledCalls[i].call(this, data);
          } else {
            handledCalls[i].call(this);
          }
        }
      }
      return this;
    },
    off : function(e, type) {
      var idPage = this["+"rip"_on"+"rip" + e];
      var parser = type ? type.toString() : null;
      if (parser) {
        /** @type {number} */
        var i = 0;
        for (; i < idPage.length; i++) {
          if (parser === idPage[i].toString()) {
            idPage.splice(i, 1);
            break;
          }
        }
      } else {
        /** @type {!Array} */
        this["+"rip"_on"+"rip" + e] = [];
      }
      return this;
    },
    unload : function() {
      var self = this;
      var nodes = self._audioNode;
      /** @type {number} */
      var i = 0;
      for (; i < self._audioNode.length; i++) {
        if (!nodes[i].paused) {
          self.stop(nodes[i].id);
          self.on("+"rip"end"+"rip", nodes[i].id);
        }
        if (self._webAudio) {
          nodes[i].disconnect(0);
        } else {
          /** @type {string} */
          nodes[i].src = "+"rip""+"rip";
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < self._onendTimer.length; i++) {
        clearTimeout(self._onendTimer[i].timer);
      }
      var paneIndex = Howler._howls.indexOf(self);
      if (null !== paneIndex && 0 <= paneIndex) {
        Howler._howls.splice(paneIndex, 1);
      }
      delete cache[self._src];
      /** @type {null} */
      self = null;
    }
  }, usingWebAudio) {
    /**
     * @param {!Object} obj
     * @param {string} url
     * @return {?}
     */
    var loadBuffer = function(obj, url) {
      if (url in cache) {
        return obj._duration = cache[url].duration, void loadSound(obj);
      }
      if (/^data:[^;]+;base64,/.test(url)) {
        /** @type {string} */
        var byteString = atob(url.split("+"rip","+"rip")[1]);
        /** @type {!Uint8Array} */
        var dataView = new Uint8Array(byteString.length);
        /** @type {number} */
        var i = 0;
        for (; i < byteString.length; ++i) {
          /** @type {number} */
          dataView[i] = byteString.charCodeAt(i);
        }
        decodeAudioData(dataView.buffer, obj, url);
      } else {
        /** @type {!XMLHttpRequest} */
        var xhr = new XMLHttpRequest;
        xhr.open("+"rip"GET"+"rip", url, true);
        /** @type {string} */
        xhr.responseType = "+"rip"arraybuffer"+"rip";
        /**
         * @return {undefined}
         */
        xhr.onload = function() {
          decodeAudioData(xhr.response, obj, url);
        };
        /**
         * @return {undefined}
         */
        xhr.onerror = function() {
          if (obj._webAudio) {
            /** @type {boolean} */
            obj._buffer = true;
            /** @type {boolean} */
            obj._webAudio = false;
            /** @type {!Array} */
            obj._audioNode = [];
            delete obj._gainNode;
            delete cache[url];
            obj.load();
          }
        };
        try {
          xhr.send();
        } catch (e) {
          xhr.onerror();
        }
      }
    };
    /**
     * @param {?} data
     * @param {!Object} obj
     * @param {string} url
     * @return {undefined}
     */
    var decodeAudioData = function(data, obj, url) {
      ctx.decodeAudioData(data, function(buffer) {
        if (buffer) {
          /** @type {!Object} */
          cache[url] = buffer;
          loadSound(obj, buffer);
        }
      }, function(canCreateDiscussions) {
        obj.on("+"rip"loaderror"+"rip");
      });
    };
    /**
     * @param {!Object} obj
     * @param {!Object} buffer
     * @return {undefined}
     */
    var loadSound = function(obj, buffer) {
      obj._duration = buffer ? buffer.duration : obj._duration;
      if (0 === Object.getOwnPropertyNames(obj._sprite).length) {
        obj._sprite = {
          _default : [0, 1E3 * obj._duration]
        };
      }
      if (!obj._loaded) {
        /** @type {boolean} */
        obj._loaded = true;
        obj.on("+"rip"load"+"rip");
      }
      if (obj._autoplay) {
        obj.play();
      }
    };
    /**
     * @param {!Object} obj
     * @param {!Array} loop
     * @param {!Object} id
     * @return {undefined}
     */
    var refreshBuffer = function(obj, loop, id) {
      var node = obj._nodeById(id);
      node.bufferSource = ctx.createBufferSource();
      node.bufferSource.buffer = cache[obj._src];
      node.bufferSource.connect(node.panner);
      node.bufferSource.loop = loop[0];
      if (loop[0]) {
        node.bufferSource.loopStart = loop[1];
        node.bufferSource.loopEnd = loop[1] + loop[2];
      }
      node.bufferSource.playbackRate.value = obj._rate;
    };
  }
  if ("+"rip"function"+"rip" == typeof define && define.amd) {
    define(function() {
      return {
        Howler : Howler,
        Howl : Howl
      };
    });
  }
  if ("+"rip"undefined"+"rip" != typeof exports) {
    exports.Howler = Howler;
    /** @type {function(!Object): undefined} */
    exports.Howl = Howl;
  }
  if ("+"rip"undefined"+"rip" != typeof window) {
    window.Howler = Howler;
    /** @type {function(!Object): undefined} */
    window.Howl = Howl;
  }
}();
/**
 * @param {!Object} type
 * @return {undefined}
 */
function $noop(type) {
}
!function(context) {
  /**
   * @param {?} address
   * @param {!Function} callback
   * @return {?}
   */
  function init(address, callback) {
    return function(event) {
      var elem = event.target;
      for (; elem && 1 === elem.nodeType && !elem.matches(address);) {
        elem = elem.parentNode;
      }
      if (!elem || 1 !== elem.nodeType) {
        return false;
      }
      callback.call(elem, event);
    };
  }
  var proto;
  proto = Element.prototype;
  if (Element && !proto.matches) {
    /** @type {function(this:Element, string, (Node|NodeList<?>|null)=): boolean} */
    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
  }
  /**
   * @param {!Object} obj
   * @param {!Function} limit
   * @return {?}
   */
  init.get = function(obj, limit) {
    var item = obj.target;
    for (; item && 1 === item.nodeType && !item.matches(limit);) {
      item = item.parentNode;
    }
    return !(!item || 1 !== item.nodeType) && item;
  };
  /** @type {function(?, !Function): ?} */
  context.$delegate = init;
}(this);
!function(global$jscomp$0) {
  /**
   * @param {!Object} type
   * @return {?}
   */
  function getType$jscomp$0(type) {
    return _toString$jscomp$0.call(type).slice(8, -1);
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function isArrayLike$jscomp$0(value) {
    return "+"rip"object"+"rip" == typeof value && "+"rip"number"+"rip" == typeof value.length || false;
  }
  /**
   * @param {string} type
   * @return {?}
   */
  function isString$jscomp$0(type) {
    return "+"rip"string"+"rip" == typeof type || false;
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function isFunction$jscomp$0(value) {
    return "+"rip"function"+"rip" == typeof value || false;
  }
  /**
   * @param {!Object} arg
   * @return {?}
   */
  function isObject$jscomp$0(arg) {
    return (!arg || "+"rip"object"+"rip" == typeof arg && null !== arg) && "+"rip"[object Object]"+"rip" == _toString$jscomp$0.call(arg);
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function isNumber$jscomp$0(value) {
    return "+"rip"number"+"rip" == typeof value && isFinite(value) || false;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isRegExp$jscomp$0(obj) {
    return obj && "+"rip"object"+"rip" == typeof obj && "+"rip"[object RegExp]"+"rip" == _toString$jscomp$0.call(obj) || false;
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function isArguments$jscomp$0(value) {
    return value && "+"rip"number"+"rip" == typeof value.length && "+"rip"[object Arguments]"+"rip" == _toString$jscomp$0.call(value) || false;
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function isNative$jscomp$0(value) {
    return isFunction$jscomp$0(value) && 0 <= ("+"rip""+"rip" + value).indexOf("+"rip"[native code]"+"rip");
  }
  /**
   * @param {!Array} obj
   * @return {?}
   */
  function isError$jscomp$0(obj) {
    return obj && "+"rip"object"+"rip" == typeof obj && "+"rip"[object Error]"+"rip" == _toString$jscomp$0.call(obj) || false;
  }
  /**
   * @param {!Node} obj
   * @return {?}
   */
  function isPrototype$jscomp$0(obj) {
    var p;
    return obj && (p = obj.constructor) && "+"rip"function"+"rip" == typeof p && p.prototype == obj;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function isElement$jscomp$0(value) {
    return value && 1 === value.nodeType || false;
  }
  /**
   * @param {?} val
   * @return {?}
   */
  function isReallyNaN$jscomp$0(val) {
    return "+"rip"[object Number]"+"rip" == _toString$jscomp$0.call(val) && val != +val;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function isInfinity$jscomp$0(value) {
    return "+"rip"[object Number]"+"rip" == _toString$jscomp$0.call(value) && !isFinite(value);
  }
  /**
   * @param {?} obj
   * @return {?}
   */
  function isWindow$jscomp$0(obj) {
    /** @type {string} */
    var t = _toString$jscomp$0.call(obj);
    return "+"rip"[object global]"+"rip" == t || "+"rip"[object Window]"+"rip" == t || "+"rip"[object DOMWindow]"+"rip" == t;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isDocument$jscomp$0(obj) {
    /** @type {string} */
    var t = _toString$jscomp$0.call(obj);
    return "+"rip"[object HTMLDocument]"+"rip" == t || "+"rip"[object Document]"+"rip" == t;
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function isNodeList$jscomp$0(val) {
    /** @type {string} */
    var t = _toString$jscomp$0.call(val);
    return "+"rip"object"+"rip" == typeof val && ("+"rip"[object HTMLCollection]"+"rip" == t || "+"rip"[object NodeList]"+"rip" == t || "+"rip"[object Object]"+"rip" == t && val.hasOwnProperty("+"rip"length"+"rip") && (0 === val.length || "+"rip"object"+"rip" == typeof val[0] && 0 < val[0].nodeType));
  }
  /**
   * @param {string} input
   * @return {?}
   */
  function isJSON$jscomp$0(input) {
    /** @type {boolean} */
    var javaWatcher = false;
    return isString$jscomp$0(input) || isNumber$jscomp$0(input) || "+"rip"boolean"+"rip" == typeof input || null == input ? javaWatcher = true : isArray$jscomp$0(input) ? arrEach$jscomp$0(input, function(file) {
      return javaWatcher = isJSON$jscomp$0(file);
    }) : isObject$jscomp$0(input) && objEach$jscomp$0(input, function(file) {
      return javaWatcher = isJSON$jscomp$0(file);
    }), javaWatcher;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function is$jscomp$0(value) {
    /** @type {string} */
    var type = typeof value;
    return "+"rip"string"+"rip" == type ? "+"rip"String"+"rip" : "+"rip"boolean"+"rip" == type ? "+"rip"Boolean"+"rip" : "+"rip"function"+"rip" == type ? "+"rip"Function"+"rip" : null === value ? "+"rip"Null"+"rip" : void 0 === value ? "+"rip"Undefined"+"rip" : isNumber$jscomp$0(value) ? "+"rip"Number"+"rip" : isReallyNaN$jscomp$0(value) ? "+"rip"NaN"+"rip" : isElement$jscomp$0(value) ? "+"rip"Element"+"rip" : isArray$jscomp$0(value) ? "+"rip"Array"+"rip" : isArguments$jscomp$0(value) ? "+"rip"Arguments"+"rip" : isInfinity$jscomp$0(value) ? "+"rip"Infinity"+"rip" : isError$jscomp$0(value) ? "+"rip"Error"+"rip" : isNodeList$jscomp$0(value) ? "+"rip"NodeList"+"rip" : isWindow$jscomp$0(value) ? 
    "+"rip"Window"+"rip" : isDocument$jscomp$0(value) ? "+"rip"Document"+"rip" : value.constructor.name || _toString$jscomp$0.call(value).slice(8, -1);
  }
  /**
   * @param {string} a
   * @param {string} b
   * @return {?}
   */
  function nativeEqual$jscomp$0(a, b) {
    if (typeof a == typeof b && a + "+"rip""+"rip" == b + "+"rip""+"rip") {
      return true;
    }
  }
  /**
   * @param {!Object} el
   * @return {?}
   */
  function keys$jscomp$0(el) {
    return el ? Object.keys(el) : [];
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function objEqual$jscomp$0(a, b) {
    var i;
    var value;
    var input;
    for (i in a) {
      if (value = a[i], input = b[i], a.hasOwnProperty(i) != b.hasOwnProperty(i)) {
        return false;
      }
      if (typeof value != typeof input) {
        return false;
      }
    }
    for (i in b) {
      if (value = a[i], input = b[i], !a.hasOwnProperty(i)) {
        return false;
      }
      if (value !== input) {
        if (typeof value != typeof input) {
          return false;
        }
        if (b.hasOwnProperty(i) && !(isArrayLike$jscomp$0(value) && isArrayLike$jscomp$0(input) && arrEqual$jscomp$0(value, input) || isObject$jscomp$0(value) && isObject$jscomp$0(input) && objEqual$jscomp$0(value, input) || nativeEqual$jscomp$0(value, input))) {
          return false;
        }
      }
    }
    return true;
  }
  /**
   * @param {!Array} property
   * @param {!Function} callback
   * @return {undefined}
   */
  function objAll$jscomp$0(property, callback) {
    var key;
    for (key in property) {
      if (property.hasOwnProperty(key)) {
        callback(property[key], key);
      }
    }
  }
  /**
   * @param {string} obj
   * @param {!Function} fn
   * @return {undefined}
   */
  function objEach$jscomp$0(obj, fn) {
    var i;
    for (i in obj) {
      if (obj.hasOwnProperty(i) && false === fn(obj[i], i)) {
        break;
      }
    }
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function obj2str$jscomp$0(val) {
    try {
      return JSON.stringify(val, null, 2);
    } catch (r) {
      try {
        /** @type {!Array} */
        var inputsCode = [];
        return $io.arr.all(val, function(result) {
          inputsCode.push(result);
        }), "+"rip"["+"rip" + inputsCode.join("+"rip", "+"rip") + "+"rip"]"+"rip";
      } catch (r) {
        return "+"rip"[Error]"+"rip";
      }
    }
  }
  /**
   * @param {string} href
   * @param {!Object} text
   * @param {?} all
   * @return {?}
   */
  function flatten$jscomp$0(href, text, all) {
    var params = {};
    return function add(hash, key) {
      var p;
      var v;
      /** @type {number} */
      var i = 0;
      /** @type {!Array<string>} */
      var a = Object.keys(hash);
      /** @type {number} */
      var az = a.length;
      for (; i < az; i++) {
        if (isObject$jscomp$0(v = hash[p = a[i]])) {
          add(v, key + p + (text || "+"rip"."+"rip"));
        } else {
          params[key + p] = v;
        }
      }
    }(href, "+"rip""+"rip"), params;
  }
  /**
   * @param {string} o
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function getPath$jscomp$0(o, a, b) {
    if ("+"rip"string"+"rip" == typeof a) {
      if (b = b || "+"rip"."+"rip", !a || a === b) {
        return o;
      }
      /** @type {number} */
      var i = 0;
      var p = $io.reg.escape(b);
      /** @type {!RegExp} */
      var obj = new RegExp("+"rip"^"+"rip" + p + "+"rip"|"+"rip" + p + "+"rip"$"+"rip", "+"rip"gi"+"rip");
      /** @type {!Array<string>} */
      a = a.replace(obj, "+"rip""+"rip").split(b);
      for (; o && i < a.length;) {
        o = o[a[i++]];
      }
      return o;
    }
    if (isRegExp$jscomp$0(a)) {
      var results = flatten$jscomp$0(o, b);
      var ret = {};
      return $io.arr.all(Object.keys(results), function(i) {
        if (a.test(i)) {
          ret[i] = results[i];
        }
      }), ret;
    }
  }
  /**
   * @param {!Object} n
   * @param {!Object} d
   * @param {!Function} x
   * @return {?}
   */
  function path$jscomp$3(n, d, x) {
    var b = "+"rip"string"+"rip" == typeof this ? this : "+"rip"."+"rip";
    if (!d || d === b) {
      return n;
    }
    /** @type {number} */
    var i = 0;
    var specB = $io.reg.escape(b);
    /** @type {!RegExp} */
    var queryRegex = new RegExp("+"rip"^"+"rip" + specB + "+"rip"|"+"rip" + specB + "+"rip"$"+"rip", "+"rip"gi"+"rip");
    d = d.replace(queryRegex, "+"rip""+"rip").split(b);
    for (; n && i < d.length;) {
      n = void 0 !== n[d[i]] ? i === d.length - 1 && 2 < arguments.length ? n[d[i]] = x : n[d[i]] : 2 < arguments.length ? n[d[i]] = i === d.length - 1 ? x : {} : void 0;
      i++;
    }
    return n;
  }
  /**
   * @param {string} arr
   * @param {string} msg
   * @return {?}
   */
  function arrEqual$jscomp$0(arr, msg) {
    var value;
    var input;
    var i = arr.length;
    if (i != msg.length) {
      return false;
    }
    for (; i--;) {
      if ((value = arr[i]) !== (input = msg[i]) && !(isArrayLike$jscomp$0(value) && isArrayLike$jscomp$0(input) && arrEqual$jscomp$0(value, input) || isObject$jscomp$0(value) && isObject$jscomp$0(input) && objEqual$jscomp$0(value, input) || nativeEqual$jscomp$0(value, input))) {
        return false;
      }
    }
    return true;
  }
  /**
   * @param {!Array} property
   * @param {!Function} diff
   * @return {undefined}
   */
  function arrAll$jscomp$0(property, diff) {
    if (property) {
      /** @type {number} */
      var name = -1;
      var components = property.length;
      for (; ++name < components;) {
        diff(property[name]);
      }
    }
  }
  /**
   * @param {string} arr
   * @param {!Function} fn
   * @return {undefined}
   */
  function arrEach$jscomp$0(arr, fn) {
    if (arr) {
      /** @type {number} */
      var i = -1;
      var l = arr.length;
      for (; ++i < l && false !== fn(arr[i], i, arr);) {
      }
    }
  }
  /**
   * @param {string} options
   * @param {!Function} merge
   * @param {?} data
   * @return {?}
   */
  function arrReduce$jscomp$0(options, merge, data) {
    var str = data;
    /** @type {number} */
    var i = 0;
    var patchLen = options.length;
    for (; i < patchLen; i++) {
      str = merge(str, options[i], i, options);
    }
    return str;
  }
  /**
   * @param {!Object} inRevIdx
   * @return {?}
   */
  function arrRandom$jscomp$0(inRevIdx) {
    return inRevIdx[Math.floor(Math.random() * inRevIdx.length)];
  }
  /**
   * @param {!Array} variables
   * @param {!Object} e
   * @param {number} n
   * @return {?}
   */
  function arrInsert$jscomp$0(variables, e, n) {
    return variables.splice.apply(variables, [n, 0].concat(e)), variables;
  }
  /**
   * @param {!Array} array
   * @param {?} i
   * @param {?} elem
   * @return {?}
   */
  function arrLimit$jscomp$0(array, i, elem) {
    return array.push(elem), array.length > i && array.shift(), array;
  }
  /**
   * @param {!Object} arr
   * @return {?}
   */
  function arr2str$jscomp$0(arr) {
    /** @type {string} */
    var styleStr = "+"rip"["+"rip";
    /** @type {number} */
    var i = 0;
    var l = arr.length;
    for (; i < l; i++) {
      if ("+"rip"string"+"rip" == typeof arr[i]) {
        /** @type {string} */
        styleStr = styleStr + ('"+"rip"' + arr[i].replace(/"+"rip"/g, '\\"+"rip"') + '"+"rip"');
      } else {
        if (_io$jscomp$0.isArray(arr[i])) {
          /** @type {string} */
          styleStr = styleStr + arr2str$jscomp$0(arr[i]);
        } else {
          styleStr = styleStr + arr[i];
        }
      }
      if (i < l - 1) {
        /** @type {string} */
        styleStr = styleStr + "+"rip", "+"rip";
      }
    }
    return styleStr = styleStr + "+"rip"]"+"rip";
  }
  /**
   * @param {!Object} n
   * @param {number} i
   * @param {number} arr
   * @return {?}
   */
  function arrRemove$jscomp$0(n, i, arr) {
    var searchPipeline = n.slice((arr || i) + 1 || n.length);
    return n.length = i < 0 ? n.length + i : i, n.push.apply(n, searchPipeline);
  }
  /**
   * @param {!Object} deps
   * @return {undefined}
   */
  function arrShuffle$jscomp$0(deps) {
    var name;
    var dep;
    var i;
    i = deps.length;
    for (; i; i--) {
      /** @type {number} */
      name = Math.floor(Math.random() * i);
      dep = deps[i - 1];
      deps[i - 1] = deps[name];
      deps[name] = dep;
    }
  }
  /**
   * @param {!Object} value
   * @param {!Function} converter
   * @return {?}
   */
  function fn2str$jscomp$0(value, converter) {
    return value && "+"rip"function"+"rip" == typeof value ? converter(value) : "+"rip"_not_a_function_"+"rip";
  }
  /**
   * @param {!Object} value
   * @param {boolean} encode
   * @return {?}
   */
  function fnStr$jscomp$0(value, encode) {
    return fn2str$jscomp$0(value, function() {
      /** @type {(RegExp|null)} */
      var mode = encode ? /^function[\W\w]*?{/ : null;
      /** @type {(RegExp|null)} */
      var splitter = encode ? /\s*\}$/ : null;
      var contents = value.toString().replace(mode, "+"rip""+"rip").replace(splitter, "+"rip""+"rip");
      var prefix = contents.match(/(^\s*)/gm);
      var key = prefix ? 1 < prefix.length ? prefix.slice(1).reduce(function(lyricsLine, chordLine) {
        return lyricsLine.length < chordLine.length ? lyricsLine : chordLine;
      }) : prefix[0] : "+"rip""+"rip";
      return _io$jscomp$0.str.trim(contents.replace(new RegExp("+"rip"^"+"rip" + contents.match(key), "+"rip"gm"+"rip"), "+"rip""+"rip"));
    });
  }
  /**
   * @param {!Object} type
   * @return {?}
   */
  function fnName$jscomp$0(type) {
    return type.name ? type.name : fn2str$jscomp$0(type, function() {
      var auth = type.toString().match(/^\s*function ([^\(\s]+)/);
      return auth && auth[1] || "+"rip"anonymous"+"rip";
    });
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function fnArg$jscomp$0(value) {
    return value.length ? fn2str$jscomp$0(value, function() {
      var id = value.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, "+"rip""+"rip");
      var b = id.slice(id.indexOf("+"rip"("+"rip") + 1, id.indexOf("+"rip")"+"rip")).match(/([^\s,]+)/g);
      return null === b ? [] : b;
    }) : [];
  }
  /**
   * @param {number} n
   * @return {undefined}
   */
  function x$jscomp$75(n) {
    /** @type {number} */
    timerID$jscomp$0 = setTimeout(function() {
      var extent = queue$jscomp$0.pop();
      extent[0]();
      if (queue$jscomp$0.length) {
        x$jscomp$75(extent[1]);
      }
    }, n);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function arg2arr$jscomp$0(obj) {
    return _slice$jscomp$0.call(obj);
  }
  /**
   * @param {string} method
   * @param {!Object} file
   * @param {!Function} callback
   * @return {undefined}
   */
  function readWithFileReader$jscomp$0(method, file, callback) {
    /** @type {!FileReader} */
    var fileReader = new FileReader;
    /**
     * @return {undefined}
     */
    fileReader.onloadend = function() {
      callback(fileReader.result);
    };
    fileReader[method](file);
  }
  /**
   * @param {!Object} file
   * @param {!Function} f
   * @return {undefined}
   */
  function readAsArrayBuffer$jscomp$0(file, f) {
    readWithFileReader$jscomp$0("+"rip"readAsArrayBuffer"+"rip", file, f);
  }
  /**
   * @param {!Object} file
   * @param {!Function} fn
   * @return {undefined}
   */
  function readAsText$jscomp$0(file, fn) {
    readWithFileReader$jscomp$0("+"rip"readAsText"+"rip", file, fn);
  }
  /**
   * @param {!Object} file
   * @param {!Function} fn
   * @return {undefined}
   */
  function readAsBinaryString$jscomp$0(file, fn) {
    readWithFileReader$jscomp$0("+"rip"readAsBinaryString"+"rip", file, fn);
  }
  /**
   * @param {!Object} obj
   * @param {!Function} file
   * @return {undefined}
   */
  function readAsDataURL$jscomp$0(obj, file) {
    readWithFileReader$jscomp$0("+"rip"readAsDataURL"+"rip", obj, file);
  }
  /**
   * @param {!Object} str
   * @param {!Function} callback
   * @param {!Object} type
   * @return {undefined}
   */
  function convertToBlob$jscomp$0(str, callback, type) {
    callback(new Blob([str], {
      type : type || "+"rip"text/plain; charset=UTF-8"+"rip"
    }));
  }
  /**
   * @param {!Object} text
   * @param {?} val
   * @return {undefined}
   */
  function returnURL$jscomp$0(text, val) {
    val(window.URL.createObjectURL(text));
  }
  /**
   * @param {?} parsedFormula
   * @param {?} callback
   * @return {undefined}
   */
  function returnSelf$jscomp$0(parsedFormula, callback) {
    callback(parsedFormula);
  }
  /**
   * @param {!Object} arg
   * @param {!Function} parse
   * @return {undefined}
   */
  function tryStringify$jscomp$0(arg, parse) {
    try {
      parse(JSON.stringify(arg));
    } catch (r) {
      try {
        parse(stringify$jscomp$0(arg));
      } catch (url) {
        _io$jscomp$0.onerror(url);
      }
    }
  }
  /**
   * @param {!Object} value
   * @param {?} resolve
   * @return {undefined}
   */
  function tryParse$jscomp$0(value, resolve) {
    try {
      resolve(JSON.parse(value));
    } catch (r) {
      try {
        resolve(parse$jscomp$0(value));
      } catch (url) {
        _io$jscomp$0.onerror(url);
      }
    }
  }
  /**
   * @param {!Object} key
   * @param {string} value
   * @return {?}
   */
  function stringifyReplacer$jscomp$0(key, value) {
    return value instanceof Function || "+"rip"function"+"rip" == typeof value ? value.toString() : value instanceof RegExp ? "+"rip"\u00b2RegExp\u00b2"+"rip" + value : value instanceof Date ? "+"rip"\u00b2Date__\u00b2"+"rip" + value.getTime() : value;
  }
  /**
   * @param {!Object} value
   * @param {string} space
   * @return {?}
   */
  function stringify$jscomp$0(value, space) {
    return space = space || 0, value = stringifyReplacer$jscomp$0(null, value), JSON.stringify(value, stringifyReplacer$jscomp$0, space);
  }
  /**
   * @param {!Object} key$jscomp$35
   * @param {string} value$jscomp$84
   * @return {?}
   */
  function parseReplacer$jscomp$0(key$jscomp$35, value$jscomp$84) {
    if ("+"rip"string"+"rip" != typeof value$jscomp$84 || value$jscomp$84.length < 8) {
      return value$jscomp$84;
    }
    /** @type {string} */
    var prefix$jscomp$2 = value$jscomp$84.substring(0, 8);
    return "+"rip"function"+"rip" === prefix$jscomp$2 ? eval("+"rip"("+"rip" + value$jscomp$84 + "+"rip")"+"rip") : "+"rip"\u00b2Date__\u00b2"+"rip" === prefix$jscomp$2 ? new Date(1 * value$jscomp$84.slice(8)) : "+"rip"\u00b2RegExp\u00b2"+"rip" === prefix$jscomp$2 ? eval(value$jscomp$84.slice(8)) : value$jscomp$84;
  }
  /**
   * @param {!Object} result
   * @return {?}
   */
  function parse$jscomp$0(result) {
    return result = parseReplacer$jscomp$0(null, result), JSON.parse(result, parseReplacer$jscomp$0);
  }
  /**
   * @param {undefined} arg
   * @return {?}
   */
  function clone$jscomp$0(arg) {
    return parse$jscomp$0(stringify$jscomp$0(arg));
  }
  /** @type {function(this:*): string} */
  var _toString$jscomp$0 = Object.prototype.toString;
  /** @type {function(this:!Function): string} */
  var _fnToString$jscomp$0 = Function.prototype.toString;
  /** @type {function(this:Object, *): boolean} */
  var _hasOwnProperty$jscomp$0 = Object.prototype.hasOwnProperty;
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var _slice$jscomp$0 = Array.prototype.slice;
  var _io$jscomp$0 = {};
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  _io$jscomp$0.onerror = function(type) {
    console.log("+"rip"$io error : "+"rip", type);
  };
  /** @type {function(!Object): ?} */
  _io$jscomp$0.type = getType$jscomp$0;
  /** @type {!Function} */
  var isArray$jscomp$0 = isNative$jscomp$0(Array.isArray) ? Array.isArray : function(value) {
    return value && "+"rip"object"+"rip" == typeof value && "+"rip"number"+"rip" == typeof value.length && "+"rip"[object Array]"+"rip" == _toString$jscomp$0.call(value) || false;
  };
  /** @type {function(?): ?} */
  _io$jscomp$0.is = is$jscomp$0;
  /** @type {!Function} */
  _io$jscomp$0.is.arr = _io$jscomp$0.is.Array = _io$jscomp$0.isArray = isArray$jscomp$0;
  /** @type {function(string): ?} */
  _io$jscomp$0.is.str = _io$jscomp$0.is.String = _io$jscomp$0.isString = isString$jscomp$0;
  /** @type {function(string): ?} */
  _io$jscomp$0.is.fun = _io$jscomp$0.is.Function = _io$jscomp$0.isFunction = isFunction$jscomp$0;
  /** @type {function(!Object): ?} */
  _io$jscomp$0.is.obj = _io$jscomp$0.is.Object = _io$jscomp$0.isObject = isObject$jscomp$0;
  /** @type {function(!Object): ?} */
  _io$jscomp$0.is.num = _io$jscomp$0.is.Number = _io$jscomp$0.isNumber = isNumber$jscomp$0;
  /** @type {function(!Object): ?} */
  _io$jscomp$0.is.reg = _io$jscomp$0.is.RegExp = _io$jscomp$0.isRegExp = isRegExp$jscomp$0;
  /** @type {function(!Array): ?} */
  _io$jscomp$0.is.arg = _io$jscomp$0.is.Arguments = _io$jscomp$0.isArguments = isArguments$jscomp$0;
  /** @type {function(?): ?} */
  _io$jscomp$0.is.inf = _io$jscomp$0.is.Infinity = _io$jscomp$0.isInfinity = isInfinity$jscomp$0;
  /** @type {function(?): ?} */
  _io$jscomp$0.is.nan = _io$jscomp$0.is.NaN = _io$jscomp$0.isReallyNaN = isReallyNaN$jscomp$0;
  /** @type {function(string): ?} */
  _io$jscomp$0.is.nat = _io$jscomp$0.is.Native = _io$jscomp$0.isNative = isNative$jscomp$0;
  /** @type {function(!Array): ?} */
  _io$jscomp$0.is.err = _io$jscomp$0.is.Error = _io$jscomp$0.isError = isError$jscomp$0;
  /** @type {function(!Node): ?} */
  _io$jscomp$0.is.pro = _io$jscomp$0.is.Prototype = _io$jscomp$0.isPrototype = isPrototype$jscomp$0;
  /** @type {function(!Object): ?} */
  _io$jscomp$0.is.ele = _io$jscomp$0.is.Element = _io$jscomp$0.isElement = isElement$jscomp$0;
  /** @type {function(?): ?} */
  _io$jscomp$0.is.win = _io$jscomp$0.is.Window = _io$jscomp$0.isWindow = isWindow$jscomp$0;
  /** @type {function(!Object): ?} */
  _io$jscomp$0.is.doc = _io$jscomp$0.is.Document = _io$jscomp$0.isDocument = isDocument$jscomp$0;
  /** @type {function(!Object): ?} */
  _io$jscomp$0.is.nodelist = _io$jscomp$0.isNodeList = isNodeList$jscomp$0;
  /** @type {function(string): ?} */
  _io$jscomp$0.is.json = _io$jscomp$0.isJSON = isJSON$jscomp$0;
  _io$jscomp$0.obj = _io$jscomp$0.Object = {};
  /** @type {function(!Array, !Function): undefined} */
  _io$jscomp$0.obj.all = objAll$jscomp$0;
  /** @type {function(string, !Function): undefined} */
  _io$jscomp$0.obj.each = objEach$jscomp$0;
  /** @type {function(!Object, !Object): ?} */
  _io$jscomp$0.obj.equal = objEqual$jscomp$0;
  /** @type {function(!Object): ?} */
  _io$jscomp$0.obj.stringify = obj2str$jscomp$0;
  /** @type {function(string, !Object, !Object): ?} */
  _io$jscomp$0.obj.getPath = getPath$jscomp$0;
  /** @type {function(!Object, !Object, !Function): ?} */
  _io$jscomp$0.obj.path = path$jscomp$3;
  /** @type {function(string, !Object, ?): ?} */
  _io$jscomp$0.obj.flatten = flatten$jscomp$0;
  /**
   * @param {!Object} type
   * @return {?}
   */
  _io$jscomp$0.obj.clear = function(type) {
    var t;
    for (t in type) {
      if (type.hasOwnProperty(t)) {
        delete type[t];
      }
    }
    return type;
  };
  /**
   * @param {(Object|string)} val
   * @return {?}
   */
  _io$jscomp$0.obj.isEmpty = function(val) {
    var i;
    for (i in val) {
      if (val.hasOwnProperty(i)) {
        return false;
      }
    }
    return true;
  };
  _io$jscomp$0.arr = _io$jscomp$0.Array = {};
  /** @type {function(!Object): ?} */
  _io$jscomp$0.arr.stringify = arr2str$jscomp$0;
  /** @type {function(!Array, !Function): undefined} */
  _io$jscomp$0.arr.all = arrAll$jscomp$0;
  /** @type {function(string, !Function): undefined} */
  _io$jscomp$0.arr.each = arrEach$jscomp$0;
  /** @type {function(string, string): ?} */
  _io$jscomp$0.arr.equal = arrEqual$jscomp$0;
  /** @type {function(string, !Function, ?): ?} */
  _io$jscomp$0.arr.reduce = arrReduce$jscomp$0;
  /** @type {function(!Object): ?} */
  _io$jscomp$0.arr.random = arrRandom$jscomp$0;
  /** @type {function(!Object): undefined} */
  _io$jscomp$0.arr.shuffle = arrShuffle$jscomp$0;
  /** @type {function(!Array, !Object, number): ?} */
  _io$jscomp$0.arr.insert = arrInsert$jscomp$0;
  /** @type {function(!Array, ?, ?): ?} */
  _io$jscomp$0.arr.limit = arrLimit$jscomp$0;
  /** @type {function(!Object, number, number): ?} */
  _io$jscomp$0.arr.remove = arrRemove$jscomp$0;
  /**
   * @param {!Object} n
   * @param {!Object} x
   * @param {!Function} type
   * @return {undefined}
   */
  _io$jscomp$0.arr.move = function(n, x, type) {
    var e = n.indexOf(x);
    if (-1 !== e) {
      var args = n.splice(e, 1);
      type = 0 < e + type ? e + type : 0;
      if (args.length) {
        n.splice(type, 0, args[0]);
      }
    }
  };
  /**
   * @param {string} a
   * @param {?} fn
   * @return {undefined}
   */
  _io$jscomp$0.arr.up = function(a, fn) {
    var c = a.indexOf(fn);
    if (-1 !== c && c !== a.length - 1) {
      var args = a.splice(c + 1, 1, fn);
      if (args.length) {
        a.splice(c, 1, args[0]);
      }
    }
  };
  /**
   * @param {string} r
   * @param {?} row
   * @return {undefined}
   */
  _io$jscomp$0.arr.down = function(r, row) {
    var x = r.indexOf(row);
    if (!(x <= 0)) {
      var range = r.splice(x - 1, 1, row);
      if (range.length) {
        r.splice(x, 1, range[0]);
      }
    }
  };
  /**
   * @param {!Object} n
   * @param {!Object} prop
   * @return {undefined}
   */
  _io$jscomp$0.arr.bottom = function(n, prop) {
    var p = n.indexOf(prop);
    if (!(p <= 0)) {
      var items = n.splice(p, 1);
      if (items.length) {
        n.unshift(items[0]);
      }
    }
  };
  /**
   * @param {!Object} type
   * @param {!Object} val
   * @return {undefined}
   */
  _io$jscomp$0.arr.top = function(type, val) {
    var key = type.indexOf(val);
    if (-1 !== key && key !== type.length - 1) {
      var values = type.splice(key, 1);
      if (values.length) {
        type.push(values[0]);
      }
    }
  };
  /**
   * @param {string} val
   * @param {!Function} model
   * @return {?}
   */
  _io$jscomp$0.arr.enum = function(val, model) {
    /**
     * @return {undefined}
     */
    function cb() {
      if (0 == --number && "+"rip"function"+"rip" == typeof state) {
        state();
      }
      if ("+"rip"function"+"rip" == typeof callback) {
        callback(100 - number / index * 100, number, index);
      }
    }
    var state;
    var callback;
    var imageData;
    /** @type {number} */
    var number = 0;
    /** @type {number} */
    var index = 0;
    return (0 === val.length || 1 === val.length && 0 === val[0].length) && setImmediate(function() {
      if ("+"rip"function"+"rip" == typeof state) {
        state();
      }
    }), $io.arr.each(val, function(value, filtersList) {
      index = index + value.length;
      $io.arr.each(value, function(p1__3354_SHARP_, password) {
        number++;
        setImmediate(function() {
          model.call({
            list : filtersList,
            index : number
          }, p1__3354_SHARP_, password, cb);
        });
      });
    }), imageData = {
      progress : function(data) {
        return callback = data, imageData;
      },
      done : function(data) {
        return state = data, imageData;
      }
    };
  };
  /**
   * @param {string} val
   * @param {!Function} model
   * @param {!Function} callback
   * @return {undefined}
   */
  _io$jscomp$0.enum = function(val, model, callback) {
    /**
     * @param {?} usual_flow
     * @return {undefined}
     */
    function options(usual_flow) {
      if (0 == --elasticIndex) {
        callback();
      }
    }
    if (0 === val.length || 1 === val.length && 0 === val[0].length) {
      callback();
    }
    /** @type {number} */
    var elasticIndex = 0;
    $io.arr.each(val, function(res, data) {
      var type = $io.is(res);
      if ("+"rip"Array"+"rip" === type || "+"rip"Object"+"rip" === type) {
        $io[type].each(res, function(p1__3354_SHARP_, password) {
          elasticIndex++;
          setImmediate(function() {
            model.call({
              list : data,
              index : elasticIndex
            }, p1__3354_SHARP_, password, options);
          });
        });
      } else {
        if ("+"rip"Function"+"rip" === type) {
          elasticIndex++;
          setImmediate(function() {
            res.call({
              list : data,
              index : elasticIndex
            }, options);
          });
        } else {
          elasticIndex++;
          setImmediate(function() {
            model.call({
              list : data,
              index : elasticIndex
            }, res, data, options);
          });
        }
      }
    });
  };
  _io$jscomp$0.str = _io$jscomp$0.String = {};
  /**
   * @param {string} name
   * @param {!NodeList} value
   * @param {number} i
   * @return {?}
   */
  _io$jscomp$0.str.insertAt = function(name, value, i) {
    return name.substr(0, i) + value + name.substr(i + value.length);
  };
  /**
   * @param {string} string
   * @param {!NodeList} character
   * @param {?} value
   * @param {number} index
   * @return {?}
   */
  _io$jscomp$0.str.replaceAt = function(string, character, value, index) {
    return string.substr(0, index) + value + string.substr(index + character.length);
  };
  /**
   * @param {string} value
   * @param {number} max
   * @return {?}
   */
  _io$jscomp$0.str.truncate = function(value, max) {
    return value.length > max ? value.slice(0, max) + "+"rip"..."+"rip" : value;
  };
  /**
   * @param {string} text
   * @return {?}
   */
  _io$jscomp$0.str.slug = function(text) {
    return text.toLowerCase().replace(/\s+/g, "+"rip"-"+"rip").replace(/[^-\w]/g, "+"rip""+"rip");
  };
  /**
   * @param {string} s
   * @return {?}
   */
  _io$jscomp$0.str.trim = function(s) {
    var i;
    var n;
    /** @type {number} */
    i = 0;
    /** @type {number} */
    n = s.length - 1;
    for (; i <= n && s.charCodeAt(i) < 33; i++) {
    }
    for (; i <= n && s.charCodeAt(n) < 33; n--) {
    }
    return s.substring(i, n + 1);
  };
  /**
   * @param {string} name
   * @return {?}
   */
  _io$jscomp$0.str.camel = function(name) {
    return name.replace(/(\-[a-z])/g, function(shortMonthName) {
      return shortMonthName.toUpperCase().replace("+"rip"-"+"rip", "+"rip""+"rip");
    });
  };
  /**
   * @param {string} val
   * @return {?}
   */
  _io$jscomp$0.str.dash = function(val) {
    return val.replace(/([A-Z])/g, function(p_Interval) {
      return "+"rip"-"+"rip" + p_Interval.toLowerCase();
    });
  };
  /**
   * @param {string} name
   * @return {?}
   */
  _io$jscomp$0.str.capitalise = function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  /**
   * @param {?} text
   * @return {?}
   */
  _io$jscomp$0.str.htmlEscape = function(text) {
    return String(text).replace(/&/g, "+"rip"&amp;"+"rip").replace(/"+"rip"/g, "+"rip"&quot;"+"rip").replace(/'/g, "+"rip"&#39;"+"rip").replace(/</g, "+"rip"&lt;"+"rip").replace(/>/g, "+"rip"&gt;"+"rip");
  };
  _io$jscomp$0.fn = {};
  /** @type {function(!Object, boolean): ?} */
  _io$jscomp$0.fn.str = fnStr$jscomp$0;
  /** @type {function(!Object, boolean): ?} */
  _io$jscomp$0.fn.outer = fnStr$jscomp$0;
  /**
   * @param {!Object} value
   * @return {?}
   */
  _io$jscomp$0.fn.inner = function(value) {
    return fnStr$jscomp$0(value, true);
  };
  /** @type {function(!Object): ?} */
  _io$jscomp$0.fn.name = fnName$jscomp$0;
  /** @type {function(!Object): ?} */
  _io$jscomp$0.fn.arg = fnArg$jscomp$0;
  /** @type {function(!Function): ?} */
  _io$jscomp$0.fn.prop = _io$jscomp$0.fn.keys = function(val) {
    return val ? Object.keys(val) : [];
  };
  /** @type {function(!Object): ?} */
  _io$jscomp$0.fn.method = _io$jscomp$0.fn.meth = function(a) {
    /** @type {!Array<string>} */
    var keys = Object.keys(a);
    /** @type {number} */
    var i = -1;
    /** @type {number} */
    var length = keys.length;
    var valueAxis = {};
    for (; ++i < length;) {
      valueAxis[keys[i]] = a[keys[i]];
    }
    return valueAxis;
  };
  /**
   * @param {!Function} callback
   * @param {number} a
   * @return {?}
   */
  _io$jscomp$0.fn.throttle = function(callback, a) {
    var i;
    return a = 0 < a ? a : 100, function() {
      /** @type {!Arguments} */
      var n = arguments;
      var t = this;
      if (!i) {
        /** @type {number} */
        i = setTimeout(function() {
          return i = 0, callback.apply(t, n);
        }, a);
      }
    };
  };
  /**
   * @param {!Function} func
   * @param {number} limit
   * @return {?}
   */
  _io$jscomp$0.fn.debounce = function(func, limit) {
    var timer;
    var tmpthis;
    var arg;
    return limit = 0 < limit ? limit : 100, function() {
      tmpthis = this;
      /** @type {!Array<?>} */
      arg = _slice$jscomp$0.call(arguments, 0);
      clearTimeout(timer);
      /** @type {number} */
      timer = setTimeout(function() {
        func.apply(tmpthis, arg);
      }, limit);
    };
  };
  /**
   * @param {!Function} d
   * @param {number} value
   * @return {?}
   */
  _io$jscomp$0.fn.leading = function(d, value) {
    var n;
    var e;
    var args;
    return value = 0 < value ? value : 100, function() {
      e = this;
      /** @type {!Array<?>} */
      args = _slice$jscomp$0.call(arguments, 0);
      if (!n) {
        d.apply(e, args);
      }
      clearTimeout(n);
      /** @type {number} */
      n = setTimeout(function() {
        d.apply(e, args);
      }, value);
    };
  };
  /** @type {!Array} */
  var queue$jscomp$0 = [];
  var timerID$jscomp$0;
  /**
   * @param {?} fn
   * @param {number} url
   * @return {undefined}
   */
  _io$jscomp$0.fn.queue = function(fn, url) {
    url = url || 10;
    queue$jscomp$0.push([fn, url]);
    clearTimeout(timerID$jscomp$0);
    x$jscomp$75(url);
  };
  /**
   * @param {string} t
   * @param {!Function} fn
   * @return {?}
   */
  _io$jscomp$0.fn.proxy = function(t, fn) {
    /** @type {string} */
    var f = t;
    return function() {
      if (false !== fn.apply(this, arguments)) {
        f.apply(this, arguments);
      }
    };
  };
  _io$jscomp$0.arg = {};
  /** @type {function(!Object): ?} */
  _io$jscomp$0.arg.arr = arg2arr$jscomp$0;
  _io$jscomp$0.reg = {};
  /**
   * @param {!Object} html
   * @return {?}
   */
  _io$jscomp$0.reg.escape = function(html) {
    return html.replace(/[-[\]{}()*+?.\\\/^$|]/g, "+"rip"\\$&"+"rip");
  };
  _io$jscomp$0.xml = {};
  /**
   * @param {!Object} text
   * @return {?}
   */
  _io$jscomp$0.xml.parse = function(text) {
    var xmlDoc;
    return window.DOMParser ? xmlDoc = (new DOMParser).parseFromString(text, "+"rip"text/xml"+"rip") : ((xmlDoc = new ActiveXObject("+"rip"Microsoft.XMLDOM"+"rip")).async = "+"rip"false"+"rip", xmlDoc.loadXML(text)), xmlDoc;
  };
  /**
   * @param {string} obj
   * @param {string} v
   * @return {?}
   */
  _io$jscomp$0.equal = function(obj, v) {
    return obj === v || (isArrayLike$jscomp$0(obj) ? arrEqual$jscomp$0(obj, v) : isObject$jscomp$0(obj) ? objEqual$jscomp$0(obj, v) : !!nativeEqual$jscomp$0(obj, v));
  };
  /**
   * @param {string} obj
   * @param {!Function} fn
   * @param {?} promise
   * @return {undefined}
   */
  _io$jscomp$0.each = function(obj, fn, promise) {
    if (obj) {
      if (isObject$jscomp$0(obj)) {
        var i;
        for (i in obj) {
          if (_hasOwnProperty$jscomp$0.call(obj, i) && false === fn.call(promise, obj[i], i, obj)) {
            break;
          }
        }
      } else {
        /** @type {number} */
        i = 0;
        var z = obj.length;
        for (; i < z && false !== fn.call(promise, obj[i], i, obj); i++) {
        }
      }
    }
  };
  /**
   * @param {string} val
   * @param {!Function} f
   * @param {string} index
   * @param {string} i
   * @param {!Object} options
   * @param {string} end
   * @return {?}
   */
  _io$jscomp$0.map = function(val, f, index, i, options, end) {
    /** @type {!Array} */
    var acc = [];
    return _io$jscomp$0.each(val, function(val, c, n) {
      if (!(end && -1 < end.indexOf(c))) {
        if (index && (isArray$jscomp$0(val) || isObject$jscomp$0(val))) {
          acc = acc.concat(_io$jscomp$0.map(val, f, index, (i ? i + (options || "+"rip"."+"rip") : "+"rip""+"rip") + c, options, end));
        } else {
          var value = f(val, c, n, i);
          if (value) {
            acc.push(value);
          }
        }
      }
    }), acc;
  };
  /**
   * @param {string} value
   * @param {string} key
   * @param {!Function} type
   * @param {!Object} name
   * @param {boolean} n
   * @return {?}
   */
  _io$jscomp$0.find = function(value, key, type, name, n) {
    var temp;
    var id = name || "+"rip"."+"rip";
    var url = _io$jscomp$0.obj.getPath(type, key, id);
    return key.slice(-1) !== id && (key = key + id), key.slice(0, 1) !== id && (key = id + key), value.replace(/^\/(.*)\/(.{0,4})$/, function(canCreateDiscussions, regexExp, regexFlags) {
      if (regexExp) {
        /** @type {!RegExp} */
        value = regexFlags ? new RegExp(regexExp, regexFlags) : new RegExp(regexExp);
      }
    }), temp = _io$jscomp$0.isRegExp(value) ? value : new RegExp(_io$jscomp$0.reg.escape(value), "+"rip"i"+"rip"), _io$jscomp$0.map(url, function(canCreateDiscussions, suffix, n, prefix) {
      var prop = (prefix ? prefix + id : "+"rip""+"rip") + suffix;
      return !!temp.test(prop) && key + prop;
    }, true, null, id, n);
  };
  _io$jscomp$0.ArrayBuffer = {
    String : function(value, def) {
      /** @type {!DataView} */
      var view = new DataView(value);
      /** @type {string} */
      var result = (new TextDecoder).decode(view);
      return def(result), result;
    },
    Blob : convertToBlob$jscomp$0
  };
  _io$jscomp$0.Blob = {
    String : readAsText$jscomp$0,
    ArrayBuffer : readAsArrayBuffer$jscomp$0,
    BinaryString : readAsBinaryString$jscomp$0,
    DataURL : readAsDataURL$jscomp$0,
    URL : returnURL$jscomp$0
  };
  _io$jscomp$0.File = {
    String : readAsText$jscomp$0,
    ArrayBuffer : readAsArrayBuffer$jscomp$0,
    BinaryString : readAsBinaryString$jscomp$0,
    DataURL : readAsDataURL$jscomp$0,
    Blob : convertToBlob$jscomp$0,
    URL : returnURL$jscomp$0
  };
  /** @type {function(?, ?): undefined} */
  _io$jscomp$0.ArrayBuffer.ArrayBuffer = _io$jscomp$0.Blob.Blob = _io$jscomp$0.File.File = _io$jscomp$0.String.String = _io$jscomp$0.Object.Object = _io$jscomp$0.Array.Array = returnSelf$jscomp$0;
  /** @type {function(!Object, !Function, !Object): undefined} */
  _io$jscomp$0.ArrayBuffer.Blob = _io$jscomp$0.File.Blob = _io$jscomp$0.String.Blob = convertToBlob$jscomp$0;
  /** @type {function(!Object, !Function, !Object): undefined} */
  _io$jscomp$0.Object.Blob = _io$jscomp$0.Array.Blob = function(value, options, type) {
    tryStringify$jscomp$0(value, function(data) {
      convertToBlob$jscomp$0(data, options, type);
    });
  };
  /**
   * @param {!Object} data
   * @param {!Function} fixture
   * @param {!Object} type
   * @return {undefined}
   */
  _io$jscomp$0.String.ArrayBuffer = function(data, fixture, type) {
    convertToBlob$jscomp$0(data, function(file) {
      readAsArrayBuffer$jscomp$0(file, fixture);
    }, type);
  };
  /** @type {function(!Object, !Function, !Object): undefined} */
  _io$jscomp$0.String.BinaryString = _io$jscomp$0.ArrayBuffer.BinaryString = function(data, value, type) {
    convertToBlob$jscomp$0(data, function(data) {
      readAsBinaryString$jscomp$0(data, value);
    }, type);
  };
  /** @type {function(!Object, !Function, !Object): undefined} */
  _io$jscomp$0.String.DataURL = _io$jscomp$0.ArrayBuffer.DataURL = function(data, node, obj) {
    convertToBlob$jscomp$0(data, function(r) {
      readAsDataURL$jscomp$0(r, node);
    }, obj);
  };
  /** @type {function(!Object, ?, !Object): undefined} */
  _io$jscomp$0.String.URL = _io$jscomp$0.ArrayBuffer.URL = function(uri, index, val) {
    convertToBlob$jscomp$0(uri, function(r) {
      returnURL$jscomp$0(r, index);
    }, val);
  };
  /** @type {function(!Object, !Function, !Object): undefined} */
  _io$jscomp$0.Object.ArrayBuffer = _io$jscomp$0.Array.ArrayBuffer = function(data, fixture, type) {
    tryStringify$jscomp$0(data, function(r) {
      _io$jscomp$0.String.ArrayBuffer(r, fixture, type);
    });
  };
  /** @type {function(!Object, !Function, !Object): undefined} */
  _io$jscomp$0.Object.BinaryString = _io$jscomp$0.Array.BinaryString = function(val, type, opt) {
    tryStringify$jscomp$0(val, function(r) {
      _io$jscomp$0.String.BinaryString(r, type, opt);
    });
  };
  /** @type {function(!Object, !Function, !Object): undefined} */
  _io$jscomp$0.Object.DataURL = _io$jscomp$0.Array.DataURL = function(val, obj, node) {
    tryStringify$jscomp$0(val, function(r) {
      _io$jscomp$0.String.DataURL(r, obj, node);
    });
  };
  /** @type {function(!Object, ?, !Object): undefined} */
  _io$jscomp$0.Object.URL = _io$jscomp$0.Array.URL = function(val, v, defaultValue) {
    tryStringify$jscomp$0(val, function(url) {
      _io$jscomp$0.String.URL(url, v, defaultValue);
    });
  };
  /** @type {function(!Object, ?): undefined} */
  _io$jscomp$0.String.Object = _io$jscomp$0.String.Array = tryParse$jscomp$0;
  /** @type {function(!Object, !Function): undefined} */
  _io$jscomp$0.Object.String = _io$jscomp$0.Array.String = tryStringify$jscomp$0;
  /** @type {function(!Object, string): ?} */
  _io$jscomp$0.stringify = stringify$jscomp$0;
  /** @type {function(!Object): ?} */
  _io$jscomp$0.parse = parse$jscomp$0;
  /** @type {function(undefined): ?} */
  _io$jscomp$0.clone = clone$jscomp$0;
  global$jscomp$0.$io = _io$jscomp$0;
}(this), function(match) {
  if (!match.$io.str) {
    match.$io = {
      str : {}
    };
  }
  /**
   * @param {string} text
   * @return {?}
   */
  match.$io.str.autolink = function(text) {
    /** @type {!Array} */
    var words = [];
    /** @type {number} */
    var i = 0;
    return text.replace(/(?:\(((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]+[-A-Za-z0-9+$&@#\/%=~_()|])\))/gm, function(canCreateDiscussions, cur) {
      return words.push(cur), "+"rip"\u00b2_links_in_parens___ktlu_\u00b2"+"rip";
    }).replace(/((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+$&@#\/%=~_()|])/gm, function(albumart) {
      return '<a target="+"rip"_blank"+"rip" href="+"rip"' + (0 == albumart.indexOf("+"rip"http"+"rip") ? albumart : "+"rip"http://"+"rip" + albumart) + '"+"rip">' + albumart + "+"rip"</a>"+"rip";
    }).replace(/([\w.]*\w@[\w.]+\w)/gm, '<a href="+"rip"mailto:$1"+"rip">$1</a>').replace(RegExp("+"rip"\u00b2_links_in_parens___ktlu_\u00b2"+"rip", "+"rip"g"+"rip"), function() {
      var adj101 = words[i++];
      return '(<a target="+"rip"_blank"+"rip" href="+"rip"' + adj101 + '"+"rip">' + adj101 + "+"rip"</a>)"+"rip";
    });
  };
}(this), function(match) {
  /**
   * @param {string} s
   * @return {?}
   */
  function f(s) {
    return s = s.replace(/</g, "+"rip"\u00b2_less__\u00b2"+"rip").replace(/>/g, "+"rip"\u00b2_more__\u00b2"+"rip").replace(/&/g, "+"rip"\u00b2_amp__\u00b2"+"rip").replace(/"+"rip"/g, "+"rip"\u00b2_quot__\u00b2"+"rip").replace(/'/g, "+"rip"\u00b2_squot__\u00b2"+"rip"), s = (s = $io.str.autolink(s)).replace(RegExp("+"rip"\u00b2_amp__\u00b2"+"rip", "+"rip"g"+"rip"), "+"rip"&amp;"+"rip").replace(RegExp("+"rip"\u00b2_quot__\u00b2"+"rip", "+"rip"g"+"rip"), "+"rip"&quot;"+"rip").replace(RegExp("+"rip"\u00b2_squot__\u00b2"+"rip", "+"rip"g"+"rip"), "+"rip"&#39;"+"rip").replace(RegExp("+"rip"\u00b2_less__\u00b2"+"rip", "+"rip"g"+"rip"), "+"rip"&lt;"+"rip").replace(RegExp("+"rip"\u00b2_more__\u00b2"+"rip", "+"rip"g"+"rip"), "+"rip"&gt;"+"rip");
  }
  if (!match.$io.str) {
    match.$io = {
      str : {}
    };
  }
  /**
   * @param {!Object} data
   * @param {number} t
   * @return {?}
   */
  match.$io.str.hilit = function(data, t) {
    if ("+"rip"string"+"rip" != typeof data) {
      return "+"rip""+"rip";
    }
    /** @type {!Array} */
    var categories = [];
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var b = [];
    /** @type {number} */
    var bi = 0;
    /** @type {!Array} */
    var r = [];
    /** @type {number} */
    var u = 0;
    /** @type {!Array} */
    var x = [];
    /** @type {number} */
    var xp = 0;
    return (t ? "+"rip""+"rip" : '<code class="+"rip"language-javascript ui_hilit"+"rip">') + data.replace(/\/\*[\W\w]*?\*\//g, function(classFunction) {
      return b.push(classFunction), "+"rip"_comment__ktlu_"+"rip";
    }).replace(/([\r\n\s,.;[({=&|!])(\/(?!\/)(?:\[.+?]|\\.|[^\/\r\n])+\/[gimyu]{0,5})(?=\s*($|[\r\n,.;})\]]))/g, function(isSlidingUp, canCreateDiscussions, n) {
      return x.push(n), canCreateDiscussions + "+"rip"_regex____ktlu_"+"rip";
    }).replace(/('(\\')?(([^\\]\\'|[^'\n]|\\\n)*)')|("+"rip"(\\"+"rip")?(([^\\]\\"+"rip"|[^"+"rip"\n]|\\\n)*)"+"rip")/g, function(ctgy) {
      return categories.push(ctgy), "+"rip"_string___ktlu_"+"rip";
    }).replace(/\/\/.*/g, function(bone_in) {
      return r.push(bone_in), "+"rip"_komment__ktlu_"+"rip";
    }).replace(/([+\/\|\^&%!~<>=-]|&amp;|&lt;?|&gt;?)/g, '<span class="+"rip"sh_operator"+"rip">$1</span>').replace(/(\$[a-z0-9_$]+)/gi, '<span class="+"rip"sh_42"+"rip">$1</span>').replace(/((?!\d)[a-z0-9_$]+)(\s*:\s*function)/gi, '<span class="+"rip"sh_function"+"rip">$1</span>$2').replace(/\.((?!\d)[a-z0-9_$]+(?=\())/gi, '.<span class="+"rip"sh_propfunction"+"rip">$1</span>').replace(/((?!\d)[a-z0-9_$]+(?=\())/gi, '<span class="+"rip"sh_function"+"rip">$1</span>').replace(/([[\]{}().,;:])/g, '<span class="+"rip"sh_punctuation"+"rip">$1</span>').replace(/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|true|false|NaN|-?Infinity)\b/g, 
    '<span class="+"rip"sh_number"+"rip">$1</span>').replace(/\b(break|case|catch|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/g, '<span class="+"rip"sh_keyword"+"rip">$1</span>').replace(RegExp("+"rip"_komment__ktlu_"+"rip", "+"rip"g"+"rip"), function() {
      return '<span class="+"rip"sh_comment"+"rip">' + f(r[u++] || "+"rip""+"rip") + "+"rip"</span>"+"rip";
    }).replace(RegExp("+"rip"_comment__ktlu_"+"rip", "+"rip"g"+"rip"), function() {
      return '<span class="+"rip"sh_comment"+"rip">' + f(b[bi++] || "+"rip""+"rip") + "+"rip"</span>"+"rip";
    }).replace(RegExp("+"rip"_string___ktlu_"+"rip", "+"rip"g"+"rip"), function() {
      return '<span class="+"rip"sh_string"+"rip">' + f(categories[i++] || "+"rip""+"rip") + "+"rip"</span>"+"rip";
    }).replace(RegExp("+"rip"_regex____ktlu_"+"rip", "+"rip"g"+"rip"), function() {
      return '<span class="+"rip"sh_keyword2"+"rip">' + f(x[xp++] || "+"rip""+"rip") + "+"rip"</span>"+"rip";
    }) + (t ? "+"rip""+"rip" : "+"rip"</code>"+"rip");
  };
  /** @type {function(string): ?} */
  match.$io.str.freeText = f;
}(this);
/**
 * @param {?} that
 * @return {?}
 */
function $watch(that) {
  that = that || {};
  var _blast_results_cache = {};
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = Array.prototype.slice;
  /**
   * @param {string} n
   * @param {!Function} e
   * @return {undefined}
   */
  var test = function(n, e) {
    n.replace(/\S+/g, e);
  };
  /**
   * @param {string} method
   * @param {!Function} store
   * @return {undefined}
   */
  var checkStore = function(method, store) {
    Object.defineProperty(that, method, {
      value : store,
      enumerable : false,
      writable : false,
      configurable : false
    });
  };
  return that.observers = _blast_results_cache, checkStore("+"rip"on"+"rip", function(n, fn) {
    return "+"rip"function"+"rip" != typeof fn || test(n, function(blast_results_name, boardManager) {
      (_blast_results_cache[blast_results_name] = _blast_results_cache[blast_results_name] || []).push(fn);
      /** @type {boolean} */
      fn.typed = 0 < boardManager;
    }), that;
  }), checkStore("+"rip"off"+"rip", function(undefined, type) {
    return "+"rip"*"+"rip" != undefined || type ? test(undefined, function(blast_results_name) {
      if (type) {
        var lc_raw_intent;
        var results = _blast_results_cache[blast_results_name];
        /** @type {number} */
        var i = 0;
        for (; lc_raw_intent = results && results[i]; ++i) {
          if (lc_raw_intent == type) {
            results.splice(i--, 1);
          }
        }
      } else {
        delete _blast_results_cache[blast_results_name];
      }
    }) : _blast_results_cache = {}, that;
  }), checkStore("+"rip"once"+"rip", function(e, keyMaker) {
    return that.on(e, function n() {
      that.off(e, n);
      keyMaker.apply(that, arguments);
    });
  }), checkStore("+"rip"trigger"+"rip", function(value) {
    var fns;
    /** @type {!Array<?>} */
    var args = slice.call(arguments, 1);
    return test(value, function(signal) {
      /** @type {!Array<?>} */
      fns = slice.call(_blast_results_cache[signal] || [], 0);
      var fn;
      /** @type {number} */
      var i = 0;
      for (; fn = fns[i]; ++i) {
        if (fn.busy) {
          return;
        }
        /** @type {number} */
        fn.busy = 1;
        fn.apply(that, fn.typed ? [signal].concat(args) : args);
        if (fns[i] !== fn) {
          i--;
        }
        /** @type {number} */
        fn.busy = 0;
      }
      if (_blast_results_cache["+"rip"*"+"rip"] && "+"rip"*"+"rip" != signal) {
        that.trigger.apply(that, ["+"rip"*"+"rip", signal].concat(args));
      }
    }), that;
  }), that;
}
!function(thisScope) {
  /**
   * @param {!Object} data
   * @param {!Object} cb
   * @return {undefined}
   */
  function self(data, cb) {
    if (2 < arguments.length) {
      /** @type {!Array<?>} */
      var sequence = slice.call(arguments);
      cb = sequence.pop();
      self.series(sequence, cb);
    } else {
      if ($io.is.obj(data) && "+"rip"function"+"rip" == typeof cb) {
        cb(self.data = data);
      } else {
        if ($io.is.arr(data) && "+"rip"function"+"rip" == typeof cb) {
          self.parallel(data, cb);
        } else {
          if ("+"rip"string"+"rip" == typeof data && "+"rip"function"+"rip" == typeof cb) {
            self.task(data, cb);
          } else {
            if ("+"rip"function"+"rip" == typeof data) {
              self.task("+"rip"modules"+"rip", data);
            } else {
              if (!("+"rip"string"+"rip" != typeof data || cb)) {
                self.launch(data);
              }
            }
          }
        }
      }
    }
  }
  var res = {};
  var data = {};
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = Array.prototype.slice;
  var options = {
    onerror : $noop,
    onready : $noop
  };
  self.ready = res;
  self.tasks = data;
  /** @type {boolean} */
  self.paused = false;
  /**
   * @param {number} clearQueue
   * @return {undefined}
   */
  self.stop = function(clearQueue) {
    var i;
    for (i in self.paused = true, self.off("+"rip"*"+"rip"), self.tasks) {
      delete self.tasks[i];
    }
    for (i in self.ready) {
      delete self.ready[i];
    }
    for (i in self.observers) {
      delete self.observers[i];
    }
  };
  /**
   * @param {?} data
   * @return {undefined}
   */
  self.config = function(data) {
    $extend(options, data);
  };
  /**
   * @param {!Object} type
   * @param {!Object} cb
   * @return {?}
   */
  self.task = function(type, cb) {
    return (data[type] = data[type] || []).push(cb), this;
  };
  /**
   * @param {!Array} id
   * @param {!Function} cb
   * @return {?}
   */
  self.series = function(id, cb) {
    var params = {};
    return function run(i) {
      if (i < id.length) {
        var type = id[i];
        if ("+"rip"string"+"rip" == typeof type) {
          self.launch(type);
          self.on(type + "+"rip":ready"+"rip", function(fn) {
            if (fn.length) {
              /** @type {!NodeList} */
              params[type] = fn;
            }
            run(++i);
          });
        } else {
          self.parallel(type, function(canCreateDiscussions, value) {
            if (value.length) {
              $extend(params, value);
            }
            run(++i);
          });
        }
      } else {
        try {
          cb(self.data, params);
        } catch (x) {
          /** @type {string} */
          x.message = "+"rip"kernel.series.fn : "+"rip" + x.message;
          options.onerror(x);
        }
      }
    }(0), this;
  };
  /**
   * @param {!Array} target
   * @param {!Function} cb
   * @return {?}
   */
  self.parallel = function(target, cb) {
    /**
     * @param {?} destVal
     * @return {undefined}
     */
    function callback(destVal) {
      /** @type {number} */
      var idx = 0;
      var li = target.length;
      for (; idx < li; idx++) {
        if (true !== res[target[idx]]) {
          return;
        }
      }
      try {
        cb(self.data, options);
      } catch (x) {
        /** @type {string} */
        x.message = "+"rip"kernel.parallel.fn : "+"rip" + x.message;
        options.onerror(x);
      }
    }
    var options = {};
    return $io.arr.all(target, function(name) {
      if ("+"rip"string"+"rip" == typeof name) {
        self.launch(name);
        self.on(name + "+"rip":ready"+"rip", function(custom) {
          if (custom.length) {
            /** @type {!NodeList} */
            options[name] = custom;
          }
          /** @type {boolean} */
          res[name] = true;
          callback();
        });
      } else {
        self.series(name, function(canCreateDiscussions, value) {
          if (value.length) {
            $extend(options, value);
          }
          /** @type {boolean} */
          res[name] = true;
          callback();
        });
      }
    }), this;
  };
  /**
   * @param {?} type
   * @return {?}
   */
  self.launch = function(type) {
    /**
     * @param {?} instance
     * @return {undefined}
     */
    function callback(instance) {
      if (instance) {
        (errors = errors || []).push(instance);
      }
      if (0 == --a) {
        /** @type {boolean} */
        res[type] = true;
        options.onready(type);
        self.trigger(type + "+"rip":ready"+"rip", self.data, errors);
        self.off(type + "+"rip":ready"+"rip");
      }
    }
    if (!self.paused) {
      var errors;
      var i;
      var len;
      /** @type {number} */
      var a = 0;
      var event = data[type];
      if (event) {
        /** @type {number} */
        i = 0;
        len = event.length;
        for (; i < len; i++) {
          if (self.paused) {
            return;
          }
          ++a;
          (function(l, n) {
            setTimeout(function() {
              try {
                if (1 < l.length) {
                  l(self.data, n);
                } else {
                  n(l(self.data));
                }
              } catch (c) {
                /** @type {string} */
                c.message = type + "+"rip" : "+"rip" + c.message;
                options.onerror(c);
                n(c);
              }
            }, 0);
          })(event[i], callback);
        }
      }
      return this;
    }
  };
  thisScope.$kernel = $watch(self);
}(this);
!function(context) {
  /**
   * @param {string} address
   * @return {undefined}
   */
  function init(address) {
    /** @type {function(!Object): undefined} */
    window.onhashchange = $noop;
    if ("+"rip"replaceState"+"rip" in history) {
      if (address) {
        history.replaceState("+"rip""+"rip", document.title, "+"rip"#!"+"rip" + encodeURI(address) + window.location.search);
      } else {
        if (window.location.hash) {
          history.replaceState("+"rip""+"rip", document.title, window.location.pathname + window.location.search);
        }
      }
    } else {
      /** @type {string} */
      window.location.hash = address ? "+"rip"!"+"rip" + encodeURI(address) : "+"rip""+"rip";
    }
    setTimeout(function() {
      /** @type {function(): undefined} */
      window.onhashchange = onchange;
    }, 1e3);
  }
  /**
   * @return {undefined}
   */
  function onchange() {
    /** @type {string} */
    var _currentHash = location.hash;
    if (_currentHash) {
      init.trigger("+"rip"change"+"rip", decodeURI(_currentHash.replace(/^#!/, "+"rip""+"rip")));
    }
  }
  /**
   * @return {undefined}
   */
  (init = $watch(init)).init = function() {
    onchange();
  };
  context.$route = init;
}(window);
var $url = {
  parseQuery : function(src) {
    return $io.arr.reduce(src.replace(/^\?/, "+"rip""+"rip").split("+"rip"&"+"rip"), function(parameters, s) {
      var index = s.indexOf("+"rip"="+"rip");
      var name = s.slice(0, index);
      var id = s.slice(++index);
      return parameters[name] = decodeURIComponent(id), parameters;
    }, {});
  },
  getExtention : function(tag) {
    var n = (tag || "+"rip""+"rip").match(/(?:\.)([0-9a-z]+)(?:[#?].+)?$/);
    return n && n[1] ? n[1] : "+"rip""+"rip";
  },
  getDomain : function(href) {
    var expRecords = (href || "+"rip""+"rip").match(/:\/\/(.[^/]+)/);
    return null != expRecords && 2 <= expRecords.length ? expRecords[1] : "+"rip""+"rip";
  },
  checkImage : function(img, callback) {
    /**
     * @return {undefined}
     */
    function handler() {
      if (0 < image.width) {
        callback(true, img, image);
      } else {
        callback(false, img, image);
      }
    }
    if (!img) {
      callback(false);
    }
    /** @type {!Image} */
    var image = new Image;
    /** @type {function(): undefined} */
    image.onload = handler;
    /** @type {function(): undefined} */
    image.onerror = handler;
    /** @type {function(): undefined} */
    image.onabort = handler;
    /** @type {string} */
    image.src = img;
  },
  _checkFavicon : function(href, fn) {
    if (href && "+"rip""+"rip" != $io.str.trim(href)) {
      var previousAnimation;
      var this_href = $url.getDomain(href);
      if (this_href) {
        $url.checkImage(previousAnimation = "+"rip"http://"+"rip" + this_href + "+"rip"/apple-touch-icon.png"+"rip", function(canCreateDiscussions) {
          if (canCreateDiscussions) {
            fn(true, previousAnimation);
          } else {
            $url.checkImage(previousAnimation = "+"rip"http://"+"rip" + this_href + "+"rip"/favicon.png"+"rip", function(canCreateDiscussions) {
              if (canCreateDiscussions) {
                fn(true, previousAnimation);
              } else {
                $url.checkImage(previousAnimation = "+"rip"http://"+"rip" + this_href + "+"rip"/favicon.ico"+"rip", function(canCreateDiscussions) {
                  if (canCreateDiscussions) {
                    fn(true, previousAnimation);
                  } else {
                    $url.checkImage(previousAnimation = "+"rip"http://"+"rip" + this_href + "+"rip"/favicon.gif"+"rip", function(canCreateDiscussions) {
                      if (canCreateDiscussions) {
                        fn(true, previousAnimation);
                      } else {
                        fn(false);
                      }
                    });
                  }
                });
              }
            });
          }
        });
      } else {
        fn(false);
      }
    } else {
      fn(false);
    }
  },
  checkFavicon : function(url, exists) {
    /** @type {!Array} */
    var version_parts_os = ["+"rip"/favicon-32x32.png"+"rip", "+"rip"/favicon.png"+"rip", "+"rip"/favicon.gif"+"rip", "+"rip"/favicon.ico"+"rip"];
    if (url && "+"rip""+"rip" != $io.str.trim(url)) {
      var lastClassOS = $url.getDomain(url);
      /** @type {boolean} */
      var paused = false;
      /** @type {number} */
      var u = version_parts_os.length - 1;
      if (lastClassOS) {
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var l = version_parts_os.length;
        for (; i < l && !paused; i++) {
          $url.checkImage("+"rip"http://"+"rip" + lastClassOS + version_parts_os[i], function(numFrames, actions) {
            if (numFrames && !paused) {
              exists(paused = true, actions);
            } else {
              if (!paused) {
                if (0 === --u) {
                  exists(false);
                }
              }
            }
          });
        }
      } else {
        exists(false);
      }
    } else {
      exists(false);
    }
  }
};
/**
 * @param {string} arg
 * @param {!Object} context
 * @return {?}
 */
function $maxZ(arg, context) {
  var params;
  var o;
  var value;
  var sn;
  /** @type {number} */
  var j = 0;
  if ("+"rip"string"+"rip" == typeof arg) {
    params = (context || document).querySelectorAll(arg);
  } else {
    if ($io.isNodeList(arg)) {
      /** @type {string} */
      params = arg;
    } else {
      if (!$io.isElement(arg)) {
        throw new Error("+"rip"$maxZ: invalid selector"+"rip");
      }
      /** @type {!Array} */
      params = [arg];
    }
  }
  return $io.arr.all(params, function(e) {
    o = window.getComputedStyle(e, null);
    value = o.zIndex;
    /** @type {number} */
    var len = Number(value);
    if ("+"rip"static"+"rip" != o.position && "+"rip"auto"+"rip" != value && j < len) {
      sn = e;
      /** @type {number} */
      j = len;
    }
  }), {
    num : j,
    el : sn
  };
}
$url.query = $url.parseQuery(window.location.search.substring(1)), function(EMSarray) {
  /**
   * @return {?}
   */
  function isFullscreenEnabled() {
    return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
  }
  var g;
  /**
   * @param {?} e
   * @param {?} h
   * @return {undefined}
   */
  EMSarray.$fullscreen = function(e, h) {
    if (g) {
      document.removeEventListener("+"rip"fullscreenchange"+"rip", g, false);
      document.removeEventListener("+"rip"webkitfullscreenchange"+"rip", g, false);
      document.removeEventListener("+"rip"mozfullscreenchange"+"rip", g, false);
    }
    if (isFullscreenEnabled()) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else {
        if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else {
          if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else {
            if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            }
          }
        }
      }
      if ("+"rip"function"+"rip" == typeof h) {
        h();
      }
    } else {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        } else {
          if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else {
            if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          }
        }
      }
      if ("+"rip"function"+"rip" == typeof e) {
        e();
      }
    }
    /**
     * @return {undefined}
     */
    g = function() {
      if (isFullscreenEnabled()) {
        if ("+"rip"function"+"rip" == typeof e) {
          e();
        }
      } else {
        if ("+"rip"function"+"rip" == typeof h) {
          h();
        }
      }
    };
    document.addEventListener("+"rip"fullscreenchange"+"rip", g, false);
    document.addEventListener("+"rip"webkitfullscreenchange"+"rip", g, false);
    document.addEventListener("+"rip"mozfullscreenchange"+"rip", g, false);
  };
}(this), function(data) {
  /**
   * @param {!Element} el
   * @param {undefined} arg
   * @param {?} resolve
   * @return {undefined}
   */
  function test(el, arg, resolve) {
    /**
     * @return {undefined}
     */
    function onAnimationEnd() {
      resolve(true);
      el.removeEventListener("+"rip"animationend"+"rip", onAnimationEnd, false);
      el.removeEventListener("+"rip"webkitAnimationEnd"+"rip", onAnimationEnd, false);
      el.removeEventListener("+"rip"MSAnimationEnd"+"rip", onAnimationEnd, false);
      el.removeEventListener("+"rip"oAnimationEnd"+"rip", onAnimationEnd, false);
      el.removeEventListener("+"rip"oanimationend"+"rip", onAnimationEnd, false);
      el.classList.remove(arg);
    }
    var PAGE_THUMB_CLASS;
    var notify;
    var element;
    PAGE_THUMB_CLASS = arg;
    /**
     * @param {boolean} isReject
     * @return {undefined}
     */
    notify = function(isReject) {
      var element;
      var t;
      var onAreaDown;
      if (isReject) {
        t = arg;
        /** @type {function(): undefined} */
        onAreaDown = onAnimationEnd;
        (element = el).addEventListener("+"rip"animationend"+"rip", onAreaDown, false);
        element.addEventListener("+"rip"webkitAnimationEnd"+"rip", onAreaDown, false);
        element.addEventListener("+"rip"MSAnimationEnd"+"rip", onAreaDown, false);
        element.addEventListener("+"rip"oAnimationEnd"+"rip", onAreaDown, false);
        element.addEventListener("+"rip"oanimationend"+"rip", onAreaDown, false);
        element.classList.add(t);
      } else {
        resolve(false);
      }
    };
    (element = document.createElement("+"rip"div"+"rip")).className = PAGE_THUMB_CLASS;
    document.body.appendChild(element);
    if ("+"rip"none"+"rip" != window.getComputedStyle(element, null)[prop]) {
      notify(true);
    } else {
      notify(false);
    }
    element.parentNode.removeChild(element);
  }
  var div;
  var prefixes;
  var i;
  var prop = (div = document.createElement("+"rip"div"+"rip"), prefixes = "+"rip"Khtml Ms ms MS O o Moz moz webkit Webkit webKit WebKit"+"rip".split("+"rip" "+"rip"), i = prefixes.length, function(prop) {
    if (prop in div.style) {
      return prop;
    }
    prop = prop.replace(/^[a-z]/, function(shortMonthName) {
      return shortMonthName.toUpperCase();
    });
    /** @type {number} */
    var j = 0;
    for (; j < i; j++) {
      if (prefixes[j] + prop in div.style) {
        return prefixes[j] + prop;
      }
    }
    return false;
  })("+"rip"animationName"+"rip");
  /** @type {!Array} */
  test.i = ["+"rip"rubberBand"+"rip", "+"rip"swing"+"rip", "+"rip"tada"+"rip", "+"rip"wobble"+"rip", "+"rip"bounceIn"+"rip", "+"rip"bounceInDown"+"rip", "+"rip"bounceInLeft"+"rip", "+"rip"fadeIn"+"rip", "+"rip"fadeInDown"+"rip", "+"rip"fadeInDownBig"+"rip", "+"rip"fadeInLeft"+"rip", "+"rip"fadeInLeftBig"+"rip", "+"rip"fadeInRight"+"rip", "+"rip"flip"+"rip", "+"rip"flipInX"+"rip", "+"rip"flipInY"+"rip", "+"rip"lightSpeedIn"+"rip", "+"rip"rotateIn"+"rip", "+"rip"rotateInDownLeft"+"rip", "+"rip"rotateInDownRight"+"rip", "+"rip"rotateInUpRight"+"rip", "+"rip"slideInDown"+"rip", "+"rip"slideInLeft"+"rip", "+"rip"rollIn"+"rip", "+"rip"zoomIn"+"rip", "+"rip"zoomInDown"+"rip", "+"rip"zoomInLeft"+"rip", "+"rip"zoomInRight"+"rip", "+"rip"zoomInUp"+"rip"];
  /** @type {!Array} */
  test.o = ["+"rip"bounceOut"+"rip", "+"rip"bounceOutDown"+"rip", "+"rip"bounceOutLeft"+"rip", "+"rip"bounceOutRight"+"rip", "+"rip"bounceOutUp"+"rip", "+"rip"fadeOut"+"rip", "+"rip"fadeOutDown"+"rip", "+"rip"fadeOutDownBig"+"rip", "+"rip"fadeOutLeft"+"rip", "+"rip"fadeOutLeftBig"+"rip", "+"rip"fadeOutRight"+"rip", "+"rip"fadeOutRightBig"+"rip", "+"rip"fadeOutUp"+"rip", "+"rip"lightSpeedOut"+"rip", "+"rip"rotateOut"+"rip", "+"rip"rotateOutDownLeft"+"rip", "+"rip"rotateOutDownRight"+"rip", "+"rip"rotateOutUpLeft"+"rip", "+"rip"rotateOutUpRight"+"rip", "+"rip"slideOutLeft"+"rip", "+"rip"slideOutRight"+"rip", "+"rip"slideOutUp"+"rip", "+"rip"hinge"+"rip", "+"rip"rollOut"+"rip", "+"rip"zoomOut"+"rip", "+"rip"zoomOutDown"+"rip", "+"rip"zoomOutLeft"+"rip", "+"rip"zoomOutRight"+"rip", "+"rip"zoomOutUp"+"rip"];
  /** @type {function(!Element, undefined, ?): undefined} */
  data.$animate = test;
}(this), function(module) {
  /** @type {!DOMTokenList} */
  var cl = document.body.classList;
  module.$state = {
    wait : function() {
      cl.add("+"rip"ui_wait"+"rip");
    },
    isLoading : function() {
      return cl.contains("+"rip"ui_loading--block"+"rip") || cl.contains("+"rip"ui_loading"+"rip");
    },
    loading : function(newRootHash) {
      cl.add(true === newRootHash ? "+"rip"ui_loading--block"+"rip" : "+"rip"ui_loading"+"rip");
    },
    loaded : function() {
      cl.remove("+"rip"ui_loading--block"+"rip");
      cl.remove("+"rip"ui_loading"+"rip");
    },
    pause : function() {
      cl.add("+"rip"ui_pause"+"rip");
    },
    play : function() {
      cl.remove("+"rip"ui_pause"+"rip");
    }
  };
}(this);
!function(self) {
  var config = {
    get : function() {
      /** @type {string} */
      var factor_text = "+"rip""+"rip";
      return window.getSelection ? factor_text = window.getSelection().toString() : document.selection && "+"rip"Control"+"rip" != document.selection.type && (factor_text = document.selection.createRange().text), factor_text;
    },
    create : function(t, start, end) {
      if (t.createTextRange) {
        var range = t.createTextRange();
        range.collapse(true);
        range.moveStart("+"rip"character"+"rip", start);
        range.moveEnd("+"rip"character"+"rip", end);
        range.select();
        t.focus();
      } else {
        if (t.setSelectionRange) {
          t.focus();
          t.setSelectionRange(start, end);
        } else {
          if (void 0 !== t.selectionStart) {
            /** @type {number} */
            t.selectionStart = start;
            /** @type {number} */
            t.selectionEnd = end;
            t.focus();
          }
        }
      }
    },
    copy : function(n) {
      if ("+"rip"string"+"rip" == typeof n) {
        /** @type {!Element} */
        var t = document.createElement("+"rip"textarea"+"rip");
        /** @type {!Object} */
        t.value = n;
        document.body.appendChild(t);
        console.log(t);
        /** @type {!Element} */
        n = t;
      }
      if (n) {
        if (window.getSelection().removeAllRanges(), n.select) {
          n.focus();
          n.select();
        } else {
          /** @type {(Range|null)} */
          var range = document.createRange();
          range.selectNode(n);
          window.getSelection().addRange(range);
        }
      }
      try {
        /** @type {string} */
        var msg = document.execCommand("+"rip"copy"+"rip") ? "+"rip"successful"+"rip" : "+"rip"unsuccessful"+"rip";
        console.log("+"rip"Copy command was "+"rip" + msg);
      } catch (e) {
        console.log("+"rip"Oops, unable to copy"+"rip");
      }
      if (n) {
        window.getSelection().removeAllRanges();
      }
    }
  };
  self.$selection = config;
}(this);
!function(vm) {
  /**
   * @param {!Object} value
   * @return {?}
   */
  function stringify(value) {
    if ((result = value) !== Object(result)) {
      return value;
    }
    var result;
    /** @type {!Array} */
    var drilldownLevelLabels = [];
    var name;
    for (name in value) {
      if (null != value[name]) {
        drilldownLevelLabels.push(encodeURIComponent(name) + "+"rip"="+"rip" + encodeURIComponent(value[name]));
      }
    }
    return drilldownLevelLabels.join("+"rip"&"+"rip");
  }
  /**
   * @param {!Object} req
   * @return {?}
   */
  function req_callback(req) {
    var n;
    var r;
    try {
      /** @type {*} */
      n = JSON.parse(req.responseText);
      /** @type {boolean} */
      r = true;
    } catch (e) {
      n = "+"rip"text"+"rip" === req.responseType || "+"rip""+"rip" === req.responseType ? req.responseText : null;
      /** @type {boolean} */
      r = false;
    }
    return [n, req.status, req, r];
  }
  /**
   * @param {string} method
   * @param {string} id
   * @param {!Object} data
   * @return {?}
   */
  function request(method, id, data) {
    /** @type {!Error} */
    var error = new Error("+"rip"nope"+"rip");
    var req = function() {
      if (window.XMLHttpRequest && ("+"rip"file:"+"rip" != window.location.protocol || !window.ActiveXObject)) {
        return new XMLHttpRequest;
      }
      try {
        return new ActiveXObject("+"rip"Microsoft.XMLHTTP"+"rip");
      } catch (e) {
      }
      try {
        return new ActiveXObject("+"rip"Msxml2.XMLHTTP.6.0"+"rip");
      } catch (e) {
      }
      try {
        return new ActiveXObject("+"rip"Msxml2.XMLHTTP.3.0"+"rip");
      } catch (e) {
      }
      try {
        return new ActiveXObject("+"rip"Msxml2.XMLHTTP"+"rip");
      } catch (e) {
      }
      return false;
    }();
    var options = {
      done : function() {
      },
      fail : function() {
      },
      guest : function() {
      }
    };
    var result = {
      done : function(source) {
        return options.done = source, result;
      },
      fail : function(type) {
        return options.fail = type, result;
      },
      guest : function(value) {
        return options.guest = value, result;
      }
    };
    var src = {
      arraybuffer : false
    };
    return "+"rip"GET"+"rip" == method && data && (src = data, data = null), id && "+"rip"/"+"rip" !== id ? (req.open(method, id, true), src.arraybuffer && (req.responseType = "+"rip"arraybuffer"+"rip"), req.setRequestHeader("+"rip"Content-type"+"rip", "+"rip"application/x-www-form-urlencoded"+"rip"), req.setRequestHeader("+"rip"X-Requested-With"+"rip", "+"rip"XMLHttpRequest"+"rip"), data && data._csrf && (req.setRequestHeader("+"rip"X-CSRF-Token"+"rip", data._csrf), delete data._csrf), req.onreadystatechange = function() {
      if (4 === req.readyState) {
        if (200 <= req.status && req.status < 300) {
          if (src.arraybuffer) {
            options.done.apply(options, [req.response, req.status, req, false]);
          } else {
            options.done.apply(options, req_callback(req));
          }
        } else {
          if (401 == req.status) {
            options.guest.call(options, req.statusText, {
              type : method.toLowerCase(),
              url : id,
              data : data
            });
          } else {
            var args = req_callback(req);
            /** @type {string} */
            error.message = method + "+"rip" "+"rip" + id + "+"rip" "+"rip" + args[2].status + "+"rip" ("+"rip" + args[2].statusText + "+"rip")"+"rip";
            options.fail.apply(options, [error].concat(args));
          }
        }
      }
    }, data ? req.send(stringify(data)) : req.send()) : options.fail.call(options, "+"rip"Invalid url"+"rip"), result;
  }
  /**
   * @param {string} content
   * @param {undefined} callback
   * @param {undefined} err
   * @param {undefined} ctx
   * @return {undefined}
   */
  function a(content, callback, err, ctx) {
    var req = request("+"rip"GET"+"rip", content);
    req.done(callback || $noop);
    req.fail(err || $noop);
    req.guest(ctx || $noop);
  }
  /**
   * @param {string} uri
   * @param {string} data
   * @return {?}
   */
  a.get = function(uri, data) {
    return request("+"rip"GET"+"rip", uri, data);
  };
  /**
   * @param {string} data
   * @param {!Object} url
   * @return {?}
   */
  a.post = function(data, url) {
    return request("+"rip"POST"+"rip", data, url);
  };
  /**
   * @param {string} fn
   * @param {string} type
   * @return {?}
   */
  a.delete = function(fn, type) {
    return request("+"rip"DELETE"+"rip", fn, type);
  };
  /**
   * @param {boolean} data
   * @param {string} url
   * @return {?}
   */
  a.put = function(data, url) {
    return request("+"rip"PUT"+"rip", data, url);
  };
  /**
   * @param {string} filename
   * @param {?} fn
   * @return {undefined}
   */
  a.buffer = function(filename, fn) {
    /** @type {!XMLHttpRequest} */
    var xhr = new XMLHttpRequest;
    xhr.open("+"rip"GET"+"rip", filename, true);
    /** @type {string} */
    xhr.responseType = "+"rip"arraybuffer"+"rip";
    /**
     * @param {!Object} name
     * @return {undefined}
     */
    xhr.onload = function(name) {
      /** @type {(Object|null|string)} */
      var buffer = xhr.response;
      if (buffer) {
        fn(buffer);
      }
    };
    xhr.send(null);
  };
  /** @type {function(string, undefined, undefined, undefined): undefined} */
  vm.$ajax = a;
}(this);
/**
 * @return {?}
 */
function $chain() {
  /**
   * @param {?} context
   * @param {!Function} text
   * @param {?} i
   * @return {undefined}
   */
  function format(context, text, i) {
    Object.defineProperty(context, i, {
      get : function() {
        var node = text();
        return void 0 === node ? this : node;
      }
    });
  }
  /**
   * @param {!Object} word
   * @param {!Function} rule
   * @param {!Function} i
   * @return {undefined}
   */
  function match(word, rule, i) {
    /**
     * @return {?}
     */
    word[i] = function() {
      var cssobj = rule.apply(this, arguments);
      return void 0 === cssobj ? this : cssobj;
    };
  }
  /**
   * @param {?} value
   * @param {!Array} name
   * @param {?} data
   * @return {?}
   */
  function fn(value, name, data) {
    return $io.isObject(name) && $io.obj.all(name, function(r, i) {
      if (true === data) {
        format(value, r, i);
      } else {
        match(value, r, i);
      }
      if ("+"rip"both"+"rip" === data) {
        format(value, r, i);
        match(value, r, i);
      }
    }), $io.isObject(data) ? fn(value, data, true) : value;
  }
  var data = fn.apply(null, arguments);
  return data.prop = function(type) {
    return fn(this, type, true);
  }, data.meth = function(msg) {
    return fn(this, msg);
  }, data;
}
!function(root) {
  /**
   * @param {boolean} win
   * @param {undefined} query
   * @param {?} e
   * @return {undefined}
   */
  function $(win, query, e) {
    $.get(query, function(elName, refNode) {
      e(elName, refNode || win);
    });
  }
  var self = root.localforage;
  if (!self) {
    throw new Error("+"rip"Your browser don't support local save"+"rip");
  }
  self.config({
    name : "+"rip"fs"+"rip",
    storeName : "+"rip"a"+"rip"
  });
  self.setDriver(self.INDEXEDDB);
  /**
   * @param {string} prop
   * @param {!Object} value
   * @param {!Function} e
   * @return {undefined}
   */
  $.set = function(prop, value, e) {
    /** @type {!Object} */
    var e = value;
    self.setItem(prop, e, function(error, n) {
      if (error) {
        $alert.error(error);
      }
      (e || $noop)(error, n);
    });
  };
  /**
   * @param {string} name
   * @param {!Function} callbacks
   * @return {undefined}
   */
  $.get = function(name, callbacks) {
    self.getItem(name, function(t, n) {
      (callbacks || $noop)(t, n);
    });
  };
  /**
   * @param {string} o
   * @param {!Function} fn
   * @param {undefined} options
   * @return {undefined}
   */
  $.update = function(o, fn, options) {
    $.get(o, function(canCreateDiscussions, val) {
      if (!(canCreateDiscussions || "+"rip"function"+"rip" != typeof fn)) {
        $.set(o, fn(val), options || $noop);
      }
    });
  };
  /**
   * @param {string} data
   * @param {!Function} key
   * @return {undefined}
   */
  $.getRaw = function(data, key) {
    self.getItem(data, key || $noop);
  };
  /**
   * @param {string} path
   * @param {!Function} callback
   * @return {undefined}
   */
  $.del = function(path, callback) {
    self.removeItem(path, callback || $noop);
  };
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  $.clear = function(type) {
    self.clear(type || $noop);
  };
  /**
   * @param {!Function} data
   * @return {undefined}
   */
  $.keys = function(data) {
    self.keys(data || $noop);
  };
  $.store = self;
  /** @type {function(boolean, undefined, ?): undefined} */
  root.$db = $;
}(this), function(component) {
  /**
   * @param {undefined} key
   * @param {!Object} value
   * @param {?} handler
   * @param {?} val
   * @return {?}
   */
  function options(key, value, handler, val) {
    var result = options.get(key);
    return result || (result = options.set(key, value)), "+"rip"function"+"rip" == typeof val && (d[key] = val), "+"rip"function"+"rip" == typeof handler && (obj[key] = handler)(result), result;
  }
  /** @type {(Storage|null)} */
  var store = window.localStorage;
  var obj = {};
  var d = {};
  if (!store) {
    throw new Error("+"rip"Your browser don't support local save"+"rip");
  }
  /**
   * @param {string} key
   * @param {!Object} val
   * @param {!Function} data
   * @return {?}
   */
  options.set = function(key, val, data) {
    /** @type {!Object} */
    var input = val;
    if ("+"rip"string"+"rip" != typeof val) {
      try {
        /** @type {string} */
        input = JSON.stringify(val);
      } catch (t) {
      }
    }
    try {
      store.setItem(key, input);
      if (!data) {
        options.autoReady(key, val);
      }
    } catch (error) {
      $alert.error(error);
    }
    return val;
  };
  /**
   * @param {string} name
   * @return {?}
   */
  options.get = function(name) {
    /** @type {(null|string)} */
    var c = store.getItem(name);
    try {
      /** @type {*} */
      c = JSON.parse(c);
    } catch (t) {
    }
    return c;
  };
  /**
   * @param {string} value
   * @param {!Function} func
   * @return {?}
   */
  options.update = function(value, func) {
    var i = options.get(value);
    if ("+"rip"function"+"rip" == typeof func) {
      return options.set(value, func(i));
    }
  };
  /**
   * @param {string} key
   * @return {?}
   */
  options.getRaw = function(key) {
    return store.getItem(key);
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  options.del = function(name) {
    store.removeItem(name);
    /** @type {null} */
    obj[name] = null;
    /** @type {null} */
    d[name] = null;
  };
  /**
   * @param {?} event
   * @param {?} handler
   * @return {?}
   */
  options.onReady = function(event, handler) {
    return "+"rip"function"+"rip" == typeof handler && (obj[event] = handler), obj[event];
  };
  /**
   * @param {?} func
   * @param {?} value
   * @return {?}
   */
  options.onSave = function(func, value) {
    return "+"rip"function"+"rip" == typeof value && (d[func] = value), d[func];
  };
  /**
   * @param {string} prop
   * @param {!Object} val
   * @return {undefined}
   */
  options.autoReady = function(prop, val) {
    if (obj.hasOwnProperty(prop) && "+"rip"function"+"rip" == typeof obj[prop]) {
      obj[prop](val);
    }
  };
  /**
   * @param {string} f
   * @return {undefined}
   */
  options.autoSave = function(f) {
    if (d.hasOwnProperty(f) && "+"rip"function"+"rip" == typeof d[f]) {
      options.set(f, d[f](), true);
    }
  };
  /**
   * @return {undefined}
   */
  options.clear = function() {
    var key;
    for (key in store.clear(), obj) {
      if (obj.hasOwnProperty(key)) {
        /** @type {null} */
        obj[key] = null;
      }
    }
    for (key in d) {
      if (d.hasOwnProperty(key)) {
        /** @type {null} */
        d[key] = null;
      }
    }
  };
  /**
   * @return {?}
   */
  options.keys = function() {
    return Object.keys(store);
  };
  if (window.self !== window.top && window.parent.$store) {
    component.$store = window.parent.$store;
  } else {
    window.addEventListener("+"rip"beforeunload"+"rip", function(canCreateDiscussions) {
      var o;
      for (o in d) {
        options.autoSave(o);
      }
    });
    /** @type {function(undefined, !Object, ?, ?): ?} */
    component.$store = options;
  }
}(this);
!function(context) {
  /**
   * @param {!Object} elem
   * @param {!Object} context
   * @return {?}
   */
  function init(elem, context) {
    if ("+"rip"string"+"rip" == typeof(elem = elem || {})) {
      (context || document).querySelector(elem);
    }
    if (1 !== elem.nodeType) {
      /** @type {!HTMLDocument} */
      elem = document;
    }
    var self;
    /** @type {boolean} */
    var n = true;
    return $io.arr.all(elements, function(tmp) {
      if (tmp.elem === elem) {
        /** @type {boolean} */
        n = false;
      }
    }), n && elements.push({
      elem : elem,
      attach : []
    }), self = {
      get : function() {
        return elem;
      },
      html : function(type) {
        return type ? (elem.innerHTML = type, self) : elem.innerHTML;
      },
      add : function(value) {
        return elem.innerHTML = elem.innerHTML + value, self;
      },
      empty : function() {
        for (; elem.firstChild;) {
          elem.removeChild(elem.firstChild);
        }
        return self;
      },
      each : function(type, fn) {
        var obj = elem.querySelectorAll(type);
        /** @type {number} */
        var i = 0;
        var y = obj.length;
        for (; i < y; i++) {
          fn.call(obj[i], obj[i], i);
        }
        return self;
      },
      append : function(a) {
        var div;
        var childNodes;
        if ("+"rip"string"+"rip" == typeof a) {
          /** @type {string} */
          (div = document.createElement("+"rip"div"+"rip")).innerHTML = a;
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var patchLen = (childNodes = div.childNodes).length;
          for (; i < patchLen; i++) {
            if (childNodes[i] && 1 === childNodes[i].nodeType) {
              elem.appendChild(childNodes[i]);
            }
          }
        } else {
          elem.appendChild(a);
        }
        return self;
      },
      click : function() {
        if ("+"rip"createEvent"+"rip" in document) {
          /** @type {(Event|null)} */
          var evt = document.createEvent("+"rip"MouseEvents"+"rip");
          evt.initMouseEvent("+"rip"click"+"rip", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          elem.dispatchEvent(evt);
        } else {
          elem.fireEvent("+"rip"onclick"+"rip");
        }
      },
      trigger : function(type) {
        if ("+"rip"click"+"rip" !== type) {
          if ("+"rip"createEvent"+"rip" in document) {
            /** @type {(Event|null)} */
            var event = document.createEvent("+"rip"HTMLEvents"+"rip");
            event.initEvent(type, false, true);
            elem.dispatchEvent(event);
          } else {
            elem.fireEvent("+"rip"on"+"rip" + type);
          }
        } else {
          self.click();
        }
      },
      on : function(type, method, options, callback) {
        /**
         * @param {!Event} event
         * @return {?}
         */
        function fn(event) {
          if (!this.disabled) {
            return false === options.call(this, event) ? (event.preventDefault(), event.stopPropagation(), event.stopImmediatePropagation(), false) : void 0;
          }
        }
        if ("+"rip"function"+"rip" == typeof method) {
          /** @type {string} */
          callback = options;
          /** @type {string} */
          options = method;
          /** @type {null} */
          method = null;
        }
        /** @type {boolean} */
        callback = !!callback;
        var handler = method ? $delegate(method, fn) : fn;
        return type.replace(/[^\s]+/g, function(n) {
          var exitHandler;
          if ("+"rip"doubletap"+"rip" === n) {
            exitHandler = handler;
            /**
             * @param {!Object} event
             * @return {undefined}
             */
            handler = function(event) {
              var e;
              var dmsLogin;
              /** @type {!Object} */
              e = event;
              dmsLogin = exitHandler.bind(this);
              if (_takingTooLongTimeout) {
                clearTimeout(_takingTooLongTimeout);
                /** @type {null} */
                _takingTooLongTimeout = null;
                dmsLogin(e);
                e.preventDefault();
              } else {
                /** @type {number} */
                _takingTooLongTimeout = setTimeout(function() {
                  /** @type {null} */
                  _takingTooLongTimeout = null;
                }, 300);
              }
              event.stopPropagation();
            };
            elem.addEventListener("+"rip"touchstart"+"rip", handler, callback);
          } else {
            elem.addEventListener(n, handler, callback);
          }
          $io.arr.all(elements, function(frame) {
            if (frame.elem === elem) {
              frame.attach.push({
                name : n,
                childs : method,
                handler : options,
                scopeHandler : handler,
                useCapture : callback
              });
            }
          });
        }), self;
      },
      off : function(selector, callback, type) {
        return type || (type = callback, callback = null), selector.replace(/[^\s]+/g, function(name) {
          $io.arr.all(elements, function(data) {
            if (data.elem === elem) {
              $io.arr.all(data.attach, function(data) {
                if (data.name == name && data.childs == callback && data.handler == type) {
                  elem.removeEventListener(name, data.scopeHandler, data.useCapture);
                }
              });
            }
          });
        }), self;
      }
    };
  }
  /** @type {boolean} */
  var _takingTooLongTimeout = false;
  /** @type {!Array} */
  var elements = [];
  /**
   * @param {!Object} b
   * @param {!Object} name
   * @param {?} func
   * @return {?}
   */
  init.create = function(b, name, func) {
    var optionUsed3;
    var a;
    var s = b.split(/[>| ]+/);
    return func && s.pop(), !s && name ? name : ($io.arr.all(s, function(originalBaseURL) {
      originalBaseURL.replace(/(\w+)?(#(\w+))?(\.([\w|.]+))?/, function(canCreateDiscussions, tag, isSlidingUp, value, i, clusterShardData) {
        /** @type {!Element} */
        var txt = document.createElement(tag || "+"rip"div"+"rip");
        if (value) {
          /** @type {string} */
          txt.id = value;
        }
        if (clusterShardData) {
          txt.className = clusterShardData.split("+"rip"."+"rip").join("+"rip" "+"rip");
        }
        if (a) {
          a.appendChild(txt);
        }
        /** @type {!Element} */
        a = txt;
        if (!optionUsed3) {
          /** @type {!Element} */
          optionUsed3 = a;
        }
      });
    }), name && a.appendChild(name), optionUsed3);
  };
  /**
   * @param {string} x
   * @param {!Function} f
   * @return {?}
   */
  init.each = function(x, f) {
    /** @type {!NodeList<Element>} */
    var m = document.querySelectorAll(x);
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var y = m.length;
    for (; i < y; i++) {
      f.call(m[i], m[i], i);
    }
    return init;
  };
  /** @type {function(!Object, !Object): ?} */
  context.$el = init;
}(this);
!function(scope) {
  scope.$on = {
    resize : function transform(n, fn) {
      if (!transform.watchedElementData) {
        /** @type {!Array} */
        transform.watchedElementData = [];
        /**
         * @return {undefined}
         */
        var refresh = function() {
          transform.watchedElementData.forEach(function(node) {
            if (!(n.offsetWidth === node.offsetWidth && n.offsetHeight === node.offsetHeight)) {
              node.offsetWidth = n.offsetWidth;
              node.offsetHeight = n.offsetHeight;
              node.callback();
            }
          });
        };
        window.addEventListener("+"rip"resize"+"rip", refresh);
        (new MutationObserver(refresh)).observe(document.body, {
          attributes : true,
          childList : true,
          characterData : true,
          subtree : true
        });
      }
      transform.watchedElementData.push({
        element : n,
        offsetWidth : n.offsetWidth,
        offsetHeight : n.offsetHeight,
        callback : fn
      });
    }
  };
}(this);
!function(context) {
  /**
   * @param {string} callback
   * @return {?}
   */
  function init(callback) {
    var results;
    var obj;
    var n;
    var arrlength;
    /** @type {boolean} */
    var delegate = false;
    if ("+"rip"boolean"+"rip" == typeof callback || "+"rip"string"+"rip" == typeof callback) {
      /** @type {!Array<?>} */
      results = slice.call(arguments, 1);
      /** @type {(boolean|string)} */
      callback = true === callback ? "+"rip"deep"+"rip" : callback;
    } else {
      /** @type {!Arguments} */
      results = arguments;
      /** @type {boolean} */
      callback = false;
    }
    if ("+"rip"concat"+"rip" === callback) {
      /** @type {string} */
      callback = "+"rip"deep"+"rip";
      /** @type {boolean} */
      delegate = true;
    }
    obj = results[0];
    /** @type {number} */
    n = 1;
    arrlength = results.length;
    for (; n < arrlength; n++) {
      var result = results[n];
      var i;
      for (i in result) {
        var e = result[i];
        if ("+"rip"strict"+"rip" != callback || has.call(obj, i)) {
          if ("+"rip"deep"+"rip" != callback || "+"rip"[object Object]"+"rip" !== toString.call(e)) {
            if (delegate && isObject(e)) {
              if (isObject(obj[i])) {
                obj[i] = obj[i].concat(e);
              } else {
                /** @type {!Array<?>} */
                obj[i] = [].concat(e);
              }
            } else {
              obj[i] = e;
            }
          } else {
            if ("+"rip"[object Object]"+"rip" !== toString.call(obj[i])) {
              obj[i] = {};
            }
            init(callback, obj[i], e);
          }
        }
      }
    }
    return obj;
  }
  /** @type {function(this:Object, *): boolean} */
  var has = Object.prototype.hasOwnProperty;
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = Array.prototype.slice;
  /** @type {function(this:*): string} */
  var toString = Object.prototype.toString;
  /** @type {!Function} */
  var isObject = Array.isArray ? Array.isArray : function(value) {
    return value && "+"rip"object"+"rip" == typeof value && "+"rip"number"+"rip" == typeof value.length && "+"rip"[object Array]"+"rip" == toString.call(value) || false;
  };
  /**
   * @return {?}
   */
  init.deep = function() {
    return init.apply(this, ["+"rip"deep"+"rip"].concat(slice.call(arguments)));
  };
  /**
   * @return {?}
   */
  init.strict = function() {
    return init.apply(this, ["+"rip"strict"+"rip"].concat(slice.call(arguments)));
  };
  /**
   * @return {?}
   */
  init.clone = function() {
    return init.apply(this, ["+"rip"deep"+"rip", {}].concat(slice.call(arguments)));
  };
  /** @type {function(string): ?} */
  context.$extend = init;
}(this);
/**
 * @param {number} ingredients
 * @return {?}
 */
function $undo(ingredients) {
  var items = ingredients || [];
  var i = ingredients ? ingredients.length : 0;
  var position = window.$noop || function(type) {
  };
  return {
    get : function() {
      return items.slice(0, 0 <= i ? i : 0);
    },
    cursor : function() {
      return i;
    },
    history : function() {
      return items;
    },
    clear : function() {
      /** @type {number} */
      items.length = i = 0;
    },
    add : function(n) {
      return items.splice(i++, items.length, n), n;
    },
    each : function(fn) {
      if (i > items.length) {
        i = items.length;
      }
      /** @type {number} */
      var k = 0;
      for (; k < i; k++) {
        fn(items[k]);
      }
    },
    redo : function(callback) {
      if (i++ > items.length && (i = items.length + 1), i <= 0 && (i = 1), items[i - 1]) {
        var undefined = items[i - 1].redo ? items[i - 1].redo() : items[i - 1];
        (callback || position)(undefined);
      }
      return undefined;
    },
    undo : function(callback) {
      if (--i < -1 && (i = -1), i >= items.length && (i = items.length - 1), items[i]) {
        var undefined = items[i].undo ? items[i].undo() : items[i];
        (callback || position)(undefined);
      }
      return undefined;
    }
  };
}
!function(context) {
  /**
   * @param {string} node
   * @param {!Object} type
   * @param {!Function} f
   * @return {?}
   */
  function init(node, type, f) {
    if ("+"rip"function"+"rip" == typeof type) {
      /** @type {!Object} */
      f = type;
      type = {};
    }
    var el;
    var callback;
    var options = $extend({}, data, type);
    return $loader(["+"rip"/c/libs/rasterizeHTML.allinone.js"+"rip"], function() {
      var element;
      /** @type {string} */
      var message = "+"rip"<style>"+"rip";
      /** @type {boolean} */
      var checkEndTime = false;
      if (node) {
        if ("+"rip"string"+"rip" == typeof node) {
          /** @type {(Element|null)} */
          element = document.querySelector(node);
          el = $el.create(node, element.cloneNode(true));
        } else {
          if ($io.isElement(node)) {
            /** @type {string} */
            (el = (element = node).cloneNode(true)).id = "+"rip"screenshot__unique__selector"+"rip";
            /** @type {string} */
            node = "+"rip"#"+"rip" + el.id;
          } else {
            if (!$io.isDocument(node)) {
              return void console.error("+"rip"$screenshot : invalid selector!"+"rip");
            }
            /** @type {boolean} */
            checkEndTime = true;
            el = (element = node).cloneNode(true);
          }
        }
        var elW = options.width || element.offsetWidth;
        var elHeight = options.height || element.offsetHeight;
        if (!checkEndTime) {
          message = message + ("+"rip"body {background:transparent !important}\n"+"rip" + node + "+"rip" {width:"+"rip" + elW + "+"rip"px!important;height:"+"rip" + elHeight + "+"rip"px!important;position:absolute!important; top:0px!important;left:0px!important}\n"+"rip");
        }
      } else {
        element = options.default;
        el = element.cloneNode(true);
        elW = element.offsetWidth;
        elHeight = element.offsetHeight;
      }
      if (el) {
        $io.arr.all(el.querySelectorAll("+"rip".js_image_inline"+"rip"), function(div) {
          message = message + ('.js_image_inline[data-image-id="+"rip"' + div.dataset.imageId + '"+"rip"] {  background-image: ' + div.style.backgroundImage + "+"rip"!important;  background-size: "+"rip" + div.style.backgroundSize + "+"rip"!important;  background-position: "+"rip" + div.style.backgroundPosition + "+"rip"!important;  background-repeat: "+"rip" + div.style.backgroundRepeat + "+"rip"!important;}"+"rip");
        });
        message = message + "+"rip"</style>"+"rip";
        $io.arr.all(document.styleSheets, function(item) {
          message = message + item.ownerNode.outerHTML;
        });
        /** @type {!Element} */
        var r = document.createElement("+"rip"canvas"+"rip");
        r.width = elW + 1;
        r.height = elHeight + 1;
        /**
         * @param {?} i
         * @param {!Function} callback
         * @return {undefined}
         */
        callback = function(i, callback) {
          rasterizeHTML[checkEndTime ? "+"rip"drawDocument"+"rip" : "+"rip"drawHTML"+"rip"](checkEndTime ? el : message + i, r, {
            useBlobs : false,
            baseUrl : checkEndTime ? null : window.location.origin
          }).then(function(privateContent) {
            callback(r, element || el, privateContent);
          }, function(error) {
            $alert.error(error);
          });
        };
        var node = el.querySelectorAll("+"rip"iframe"+"rip");
        var c = el.querySelectorAll("+"rip"canvas"+"rip");
        var b = node.length + c.length;
        if (b) {
          if (node.length) {
            var elements = element.querySelectorAll("+"rip"iframe"+"rip");
            $io.arr.each(node, function(editorWrapper, i) {
              init(elements[i].contentDocument, {
                width : elements[i].clientWidth,
                height : elements[i].clientHeight
              }, function(canCreateDiscussions, isSlidingUp, state) {
                editorWrapper.parentNode.replaceChild(state.image, editorWrapper);
                state.image.style.cssText = window.getComputedStyle(elements[i], "+"rip""+"rip").cssText;
                /** @type {string} */
                state.image.style.width = elements[i].clientWidth + "+"rip"px"+"rip";
                /** @type {string} */
                state.image.style.height = elements[i].clientHeight + "+"rip"px"+"rip";
                if (0 == --b) {
                  callback(el.outerHTML, f);
                }
              });
            });
          }
          if (c.length) {
            var nodes = element.querySelectorAll("+"rip"canvas"+"rip");
            $io.arr.each(c, function(editorWrapper, i) {
              /** @type {!Image} */
              var n = new Image;
              n.src = nodes[i].toDataURL();
              editorWrapper.parentNode.replaceChild(n, editorWrapper);
              n.style.cssText = window.getComputedStyle(nodes[i], "+"rip""+"rip").cssText;
              if (0 == --b) {
                callback(el.outerHTML, f);
              }
            });
          }
        } else {
          callback(el.outerHTML, f);
        }
      }
    }), {
      refresh : function(results) {
        callback(el.outerHTML, results);
      },
      destroy : function() {
        /** @type {null} */
        canvas = null;
        /** @type {null} */
        html = null;
        /** @type {null} */
        el = null;
      }
    };
  }
  var data = {
    default : document.body
  };
  /**
   * @param {?} params
   * @return {undefined}
   */
  init.config = function(params) {
    $extend(data, params);
  };
  /** @type {function(string, !Object, !Function): ?} */
  context.$screenshot = init;
}(this);
!function(self) {
  /**
   * @param {?} url
   * @return {undefined}
   */
  function Client(url) {
    var customListeners = {};
    /**
     * @param {string} type
     * @param {(!Function|string)} data
     * @return {?}
     */
    this.on = function(type, data) {
      return customListeners[type] = customListeners[type] || [], customListeners[type].push(data), this;
    };
    /**
     * @param {!Object} object
     * @param {!Object} callback
     * @return {?}
     */
    this.send = function(object, callback) {
      return this.conn.send(callback), this;
    };
    /**
     * @return {undefined}
     */
    this.connect = function() {
      if ("+"rip"function"+"rip" == typeof MozWebSocket) {
        this.conn = new MozWebSocket(url);
      } else {
        /** @type {!WebSocket} */
        this.conn = new WebSocket(url);
      }
      /**
       * @param {!Object} event
       * @return {undefined}
       */
      this.conn.onmessage = function(event) {
        callback("+"rip"message"+"rip", event.data);
      };
      /**
       * @return {undefined}
       */
      this.conn.onclose = function() {
        callback("+"rip"close"+"rip", null);
      };
      /**
       * @return {undefined}
       */
      this.conn.onopen = function() {
        callback("+"rip"open"+"rip", null);
      };
    };
    /**
     * @return {undefined}
     */
    this.disconnect = function() {
      this.conn.close();
    };
    /**
     * @param {string} type
     * @param {!Object} propagate
     * @return {undefined}
     */
    var callback = function(type, propagate) {
      var crossfilterable_layers = customListeners[type];
      if (void 0 !== crossfilterable_layers) {
        /** @type {number} */
        var layer_i = 0;
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
          crossfilterable_layers[layer_i](propagate);
        }
      }
    };
  }
  /**
   * @param {?} options
   * @return {?}
   */
  self.$socket = function(options) {
    return new Client(options);
  };
}(this);
!function(scope) {
  var subwikiListsCache = {
    "+"rip"\\"+"rip" : "+"rip"\\\\"+"rip",
    "+"rip"\n"+"rip" : "+"rip"\\n"+"rip",
    "+"rip"\r"+"rip" : "+"rip"\\r"+"rip",
    "+"rip"'"+"rip" : "+"rip"\\'"+"rip"
  };
  /**
   * @param {!Object} arg
   * @return {?}
   */
  scope.$template = function(arg) {
    return arg = arg || "+"rip""+"rip", new Function("+"rip"_"+"rip", "+"rip"return '"+"rip" + arg.replace(/[\\\n\r']/g, function(wikiId) {
      return subwikiListsCache[wikiId];
    }).replace(/\{{#if\s*(.*?)\s*}}([\s\S]*?){{\/if}}/g, "+"rip"' + (_.$1?'$2':'') + '"+"rip").replace(/\{{#unless\s*(.*?)\s*}}([\s\S]*?){{\/unless}}/g, "+"rip"' + (_.$1?'':'$2') + '"+"rip").replace(/\{{\s*([\w\.]+)\s*}}/g, "+"rip"' + (_.$1==null?'':_.$1) + '"+"rip") + "+"rip"'"+"rip");
  };
}(window);
!function(EMSarray) {
  /**
   * @param {string} name
   * @param {!Array} results
   * @return {undefined}
   */
  EMSarray.$archive = function(name, results) {
    /**
     * @param {!Array} file
     * @return {undefined}
     */
    function callback(file) {
      $file.download(file, results + "+"rip".zip"+"rip");
    }
    /**
     * @param {(boolean|number|string)} _num1
     * @param {(boolean|number|string)} _num2
     * @return {undefined}
     */
    function tweenAnimate(_num1, _num2) {
      prevPageButtonSprite.update(_num1 / _num2 * 100);
    }
    /**
     * @param {undefined} url
     * @return {undefined}
     */
    function onerror(url) {
      console.error(url);
    }
    results = results || $fs.utils.getName(name + "+"rip""+"rip") || "+"rip"derp"+"rip";
    var prevPageButtonSprite = $alert.progress("+"rip"Creating Archive..."+"rip", "+"rip"Archive"+"rip");
    $loader(["+"rip"/c/libs/zip/zip.js"+"rip", "+"rip"/c/libs/zip/zip-fs.js"+"rip"], function() {
      /**
       * @param {!Object} options
       * @param {!Function} type
       * @return {undefined}
       */
      function add(options, type) {
        results = results || $fs.utils.getName(options);
        var item = $fs.utils.getPathObj(options);
        if (item) {
          (function add(uri, c, word, callback) {
            $io.enum([word], function(value, name, data) {
              if ("+"rip"."+"rip" !== name && "+"rip".."+"rip" !== name) {
                if ($fs.utils.isShortcut(name) || "+"rip"object"+"rip" != typeof value) {
                  $file.open(uri + "+"rip"/"+"rip" + name, "+"rip"Blob"+"rip", function(blob) {
                    c.addBlob(name, blob);
                    data();
                  });
                } else {
                  add(uri + "+"rip"/"+"rip" + name, c.addDirectory(name), value, data);
                }
              } else {
                data();
              }
            }, function() {
              callback();
            });
          })(item.cwd, context.root.addDirectory($fs.utils.getName(item.cwd)), item.obj, type);
        } else {
          $file.open(options, "+"rip"Blob"+"rip", function(file) {
            context.root.addBlob(this.name, file);
            type();
          });
        }
      }
      /**
       * @return {undefined}
       */
      function right() {
        context.root.exportBlob(callback, tweenAnimate, onerror);
      }
      /** @type {string} */
      zip.workerScriptsPath = "+"rip"/c/libs/zip/"+"rip";
      var context = new zip.fs.FS;
      if ("+"rip"string"+"rip" == typeof name) {
        add(name, right);
      } else {
        $io.enum(name, function(target, i, wide) {
          if ($io.isElement(target)) {
            /** @type {null} */
            results = null;
            var o = target.getAttribute("+"rip"data-exe"+"rip");
            var p = target.getAttribute("+"rip"data-path"+"rip");
            if ($fs.utils.exist(o)) {
              add(o, wide);
            } else {
              add(p, wide);
            }
          } else {
            add(target, wide);
          }
        }, right);
      }
    });
  };
}(this);
/**
 * @param {string} next
 * @param {string} args
 * @return {?}
 */
function $loop(next, args) {
  /**
   * @param {number} newSize
   * @return {undefined}
   */
  function callback(newSize) {
    next((newSize - size) / 1e3);
    /** @type {number} */
    id = requestAnimationFrame(callback);
    /** @type {number} */
    size = performance.now();
  }
  /**
   * @return {undefined}
   */
  function loopy() {
    next((performance.now() - size) / 1e3);
    /** @type {number} */
    id = setTimeout(loopy, args);
    /** @type {number} */
    size = performance.now();
  }
  /**
   * @return {undefined}
   */
  function tweenAnimate() {
    next();
    /** @type {number} */
    id = requestAnimationFrame(tweenAnimate);
  }
  /**
   * @return {undefined}
   */
  function onchoketimeout() {
    next();
    /** @type {number} */
    id = setTimeout(onchoketimeout, args);
  }
  /**
   * @param {?} type
   * @return {?}
   */
  function play(type) {
    return stop(), void 0 !== type && (args = type), (next.length ? args && 0 < args ? loopy : callback : args && 0 < args ? onchoketimeout : tweenAnimate)(0), obj;
  }
  /**
   * @return {?}
   */
  function stop() {
    return args ? clearTimeout(id) : cancelAnimationFrame(id), obj;
  }
  var size;
  var id;
  /** @type {boolean} */
  var productBuilt = false;
  var obj = {
    callback : next,
    play : play,
    pause : stop,
    toggle : function() {
      return productBuilt ? (stop(), productBuilt = false) : (play(), productBuilt = true), obj;
    },
    fn : function(line) {
      /** @type {string} */
      next = line;
    },
    destroy : function() {
      stop();
      /** @type {null} */
      obj = null;
    }
  };
  return obj;
}
!function(options) {
  /**
   * @param {!Object} e
   * @return {?}
   */
  function __prevent(e) {
    return e.preventDefault ? e.preventDefault() : e.returnValue = false, false;
  }
  /**
   * @param {?} c
   * @param {boolean} d
   * @return {?}
   */
  function evaluate(c, d) {
    var v = obj[fn && result[name] ? "+"rip"normal"+"rip" : fn ? id : result[name] ? name : "+"rip"normal"+"rip"][result[method] ? method : result[value] ? value : result[index] ? index : "+"rip"normal"+"rip"];
    return d && !v[c] && (v[c] = d), v[c];
  }
  /**
   * @param {?} code
   * @return {?}
   */
  function callback(code) {
    var c = evaluate(code);
    return {
      key : c ? f(c) : f(code)[result[name] || fn ? "+"rip"toUpperCase"+"rip" : "+"rip"toLowerCase"+"rip"](),
      code : c || code
    };
  }
  /**
   * @param {!Object} event
   * @param {!Object} options
   * @return {?}
   */
  function init(event, options) {
    /**
     * @param {!Function} support
     * @return {undefined}
     */
    function render(support) {
      if (support) {
        var POST = support.call(options.thisArg, options.data.key, data = data || (e = options, (opts = $extend({}, e.data)).session = e, opts.w3c = record[e.data.key] || e.data.key, opts.loc = opts.w3c, opts.pos = "+"rip"Standard"+"rip", e.data.event && e.data.event.location && (3 === e.data.event.location ? (opts.pos = "+"rip"Numpad"+"rip", opts.loc = "+"rip"Numpad"+"rip" + opts.w3c) : e.data.char || (opts.pos = 2 === e.data.event.location ? "+"rip"Right"+"rip" : "+"rip""+"rip", opts.loc = opts.w3c + opts.pos)), opts.CapsLock = fn, opts));
        if (options.preventDefault || false === POST) {
          __prevent(event);
        }
      }
      var e;
      var opts;
    }
    /**
     * @param {?} t
     * @return {undefined}
     */
    function stop(t) {
      if (t) {
        var p0 = options.possibleCombo.indexOf(t);
        if (-1 < p0) {
          options.possibleCombo.splice(p0, 1);
        }
        if (t.then) {
          stop(t.then);
        }
      }
    }
    /**
     * @return {undefined}
     */
    function update() {
      if (!options.data.key) {
        var out = callback(options.data.code);
        options.data.code = out.code;
        options.data.char = options.data.key = out.key;
      }
      var featureName;
      for (featureName in result[options.data.key] = true, render(options.down), function(list) {
        dirty = dirty || result.keys;
        /** @type {number} */
        var i = 0;
        var listLength = list.length;
        for (; i < listLength; i++) {
          /** @type {boolean} */
          var r = false;
          /** @type {number} */
          var k = 0;
          var tileSetCount = list[i].keys.length;
          for (; k < tileSetCount; k++) {
            if (-1 === dirty.indexOf(list[i].keys[k])) {
              if (options.comboStrict) {
                /** @type {boolean} */
                r = false;
                stop(list[i].parent);
                break;
              }
              if (-1 === dirty.indexOf(list[i].keys[k].toUpperCase())) {
                /** @type {boolean} */
                r = false;
                stop(list[i].parent);
                break;
              }
            }
            /** @type {boolean} */
            r = true;
          }
          if (r) {
            if (list[i].run) {
              if (render(list[i].run), stop(list[i].parent), options.stopPropagation || options.uniqueCombo) {
                break;
              }
            } else {
              if (list[i].then && -1 === options.possibleCombo.indexOf(list[i].then)) {
                options.possibleCombo.push(list[i].then);
              }
            }
          }
        }
      }(options.combo ? options.combo.concat(options.possibleCombo) : options.possibleCombo), options.data) {
        if (options.data.hasOwnProperty(featureName)) {
          delete options.data[featureName];
        }
      }
    }
    if (options) {
      var data;
      var dirty;
      if ("+"rip"keydown"+"rip" === (options.data.event = event).type) {
        if (false === options.repeat && event.repeat) {
          return update = null, void __prevent(event);
        }
        options.data.code = event.which;
        options.data.key = mapping[event.which] || null;
        /** @type {string} */
        options.data.char = "+"rip""+"rip";
        if (options.preventDefault && (event.ctrlKey || options.data.key)) {
          __prevent(event);
          event.stopImmediatePropagation();
        }
        if (event.ctrlKey || event.shiftKey || options.data.key) {
          update();
          /** @type {null} */
          update = null;
          /** @type {boolean} */
          options.data.safe = true;
        }
      }
      if ("+"rip"keypress"+"rip" === event.type) {
        /** @type {string} */
        options.data.char = f(event.which);
        evaluate(options.data.code, event.which);
        var val = function(event) {
          /** @type {string} */
          var type = f(event.which);
          if (type.toUpperCase() !== type.toLowerCase()) {
            return event.shiftKey && type.toLowerCase() === type || !event.shiftKey && type.toUpperCase() === type;
          }
        }(event);
        if ("+"rip"boolean"+"rip" == typeof val && (fn = val), !options.repeat && event.repeat || options.data.safe) {
          return void(update = null);
        }
        if (!options.data.key) {
          options.data.code = event.which;
          /** @type {string} */
          options.data.key = f(event.which);
        }
      }
      if ("+"rip"keyup"+"rip" === event.type) {
        /** @type {null} */
        update = null;
        var e = callback(event.which);
        options.data.code = e.code;
        options.data.char = e.key;
        options.data.key = mapping[event.which] || e.key;
        /** @type {boolean} */
        result[options.data.key] = false;
        render(options.up);
        var key = options.data.key;
        var id;
        for (id in obj) {
          if (obj.hasOwnProperty(id)) {
            var name;
            for (name in obj[id]) {
              if (obj[id].hasOwnProperty(name) && (key === id || key === name)) {
                var i;
                for (i in obj[id][name]) {
                  if (obj[id][name].hasOwnProperty(i)) {
                    options.data.code = obj[id][name][i];
                    /** @type {string} */
                    options.data.key = f(options.data.code);
                    /** @type {boolean} */
                    result[options.data.key] = false;
                  }
                }
              }
            }
          }
        }
        var name;
        for (name in options.data) {
          if (options.data.hasOwnProperty(name)) {
            delete options.data[name];
          }
        }
        if (options.preventDefault) {
          __prevent(event);
        }
      }
      return options.timer = setTimeout(update, 1), true !== options.stopPropagation && void 0;
    }
  }
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  function pointerMoveHandler(event) {
    if ("+"rip"number"+"rip" != typeof(event = event || window.event).which) {
      event.which = event.keyCode;
    }
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var nbConnections = self.length;
    for (; i < nbConnections && false !== init(event, self[i]); i++) {
    }
  }
  /**
   * @param {!Event} md
   * @return {undefined}
   */
  function compile(md) {
    var target = md.target;
    if (self.length = 0, a.length) {
      for (; target && 1 === target.nodeType;) {
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var az = a.length;
        for (; i < az; i++) {
          var e = a[i];
          if (e.selector) {
            if (target.matches(e.selector)) {
              self.push($extend({
                thisArg : target
              }, e));
            }
          } else {
            if (target === e.el) {
              self.push($extend({
                thisArg : target
              }, e));
            }
          }
        }
        target = target.parentNode;
      }
    }
  }
  /**
   * @param {string} selector
   * @return {?}
   */
  function result(selector) {
    var data = {
      data : {},
      possibleCombo : []
    };
    if ("+"rip"string"+"rip" == typeof selector) {
      /** @type {string} */
      data.selector = selector;
    } else {
      if (selector && 1 === selector.nodeType) {
        /** @type {string} */
        data.el = selector;
      } else {
        /** @type {!Element} */
        data.el = el;
      }
    }
    /** @type {number} */
    var i = a.push(data);
    /** @type {!Array<string>} */
    data.stack = (new Error("+"rip"stack"+"rip")).stack.split("+"rip"\n"+"rip");
    data.stack.shift();
    /** @type {string} */
    data.stack = data.stack.join("+"rip"\n"+"rip");
    var options = {
      session : data,
      config : function(name) {
        return name ? ($extend(data, name), options) : data;
      },
      up : function(value) {
        return data.up = value, options;
      },
      down : function(value) {
        return data.down = value, options;
      },
      combo : function(value) {
        var id = function(values) {
          /** @type {!Array} */
          var compileStack = [];
          var i;
          for (i in values) {
            if (values.hasOwnProperty(i)) {
              /** @type {!Array<string>} */
              var r = i.replace(/\+\+/g, "+"rip"+add"+"rip").split("+"rip", "+"rip");
              /** @type {number} */
              var j = 0;
              /** @type {number} */
              var n = r.length;
              for (; j < n; j++) {
                var module = {};
                compileStack.push(module);
                /** @type {!Array<string>} */
                var rules = r[j].split("+"rip" "+"rip");
                var m = module;
                /** @type {number} */
                var prop = 0;
                /** @type {number} */
                var len = rules.length;
                for (; prop < len; prop++) {
                  /** @type {!Array<string>} */
                  var d = rules[prop].split("+"rip"+"+"rip");
                  /** @type {number} */
                  var i = 0;
                  /** @type {number} */
                  var numberNewElement = d.length;
                  for (; i < numberNewElement; i++) {
                    d[i] = o[d[i]] || o[keys[d[i].toLowerCase()]] || keys[d[i].toLowerCase()] || d[i];
                  }
                  /** @type {!Array<string>} */
                  m.keys = d;
                  if (0 !== prop && 1 < rules.length) {
                    m.parent = module;
                  }
                  if (prop === rules.length - 1) {
                    m.run = values[i];
                  } else {
                    m = m.then = {};
                  }
                }
              }
            }
          }
          return compileStack;
        }(value);
        return data.combo ? data.combo = data.combo.concat(id) : data.combo = id, data.combo = data.combo.sort(function(ubo, rpbListKeysResp) {
          return rpbListKeysResp.keys.length - ubo.keys.length;
        }), options;
      },
      destroy : function() {
        a.splice(i - 1, 1);
      }
    };
    return options.set = options.combo, options;
  }
  var proto;
  proto = Element.prototype;
  if (Element && !proto.matches) {
    /** @type {function(this:Element, string, (Node|NodeList<?>|null)=): boolean} */
    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
  }
  var name;
  var method;
  var value;
  var index;
  var id;
  var i;
  /** @type {!Element} */
  var el = document.documentElement;
  /** @type {function(...number): string} */
  var f = String.fromCharCode;
  /** @type {boolean} */
  var fn = false;
  /** @type {!Array} */
  var self = [];
  /** @type {!Array} */
  var a = [{
    data : {}
  }];
  /** @type {!Array} */
  var buffer = ["+"rip"\u232b Bksp Backspace"+"rip", "+"rip"\u21b2 Enter"+"rip", "+"rip"\u21e7 Shift"+"rip", "+"rip"\u21eb Caps CapsLock"+"rip", "+"rip"Option Alt"+"rip", "+"rip"Ctrl Control"+"rip", "+"rip"\ud83c\udf50 \u2665 \uf8ff \u2318 Cmd Win Meta Super Command OS"+"rip", "+"rip"\u21de PgUp PageUp"+"rip", "+"rip"\u21df PgDn PgDown PageDown"+"rip", "+"rip"\u2196 Home"+"rip", "+"rip"\u2198 End"+"rip", "+"rip"\u21a4 \u2190 Left ArrowLeft"+"rip", "+"rip"\u21a5 \u2191 Up ArrowUp"+"rip", "+"rip"\u21a6 \u2192 Right ArrowRight"+"rip", "+"rip"\u21a7 \u2193 Down ArrowDown"+"rip", "+"rip"\u23b5 Space Spacebar"+"rip", "+"rip"Del Delete"+"rip", "+"rip"Ins Insert"+"rip", "+"rip"Print PrintScr PrintScreen"+"rip", "+"rip"\u2630 Menu Apps Context_menu ContextMenu"+"rip", 
  "+"rip"ScrLk Scroll ScrollLock"+"rip", "+"rip"AltGr AltGraph"+"rip", "+"rip"Break Pause"+"rip", "+"rip"Esc Escape"+"rip", "+"rip"Multiply *"+"rip", "+"rip"Add +"+"rip", "+"rip"Subtract -"+"rip", "+"rip"Decimal Period ."+"rip", "+"rip"Divide Slash /"+"rip", "+"rip"Backslash \\"+"rip", "+"rip"Equals ="+"rip", "+"rip"Semicolon ;"+"rip", "+"rip"Comma ,"+"rip", "+"rip"Hash Sharp Hashtag Octothorpe #"+"rip"];
  var data = {
    3 : "+"rip"Enter"+"rip",
    8 : "+"rip"Backspace"+"rip",
    9 : "+"rip"Tab"+"rip",
    12 : "+"rip"Clear"+"rip",
    13 : "+"rip"Enter"+"rip",
    16 : "+"rip"Shift"+"rip",
    17 : "+"rip"Control"+"rip",
    18 : "+"rip"Alt"+"rip",
    19 : "+"rip"Pause"+"rip",
    20 : "+"rip"CapsLock"+"rip",
    27 : "+"rip"Escape"+"rip",
    32 : "+"rip"Spacebar"+"rip",
    33 : "+"rip"PageUp"+"rip",
    34 : "+"rip"PageDown"+"rip",
    35 : "+"rip"End"+"rip",
    36 : "+"rip"Home"+"rip",
    37 : "+"rip"ArrowLeft"+"rip",
    38 : "+"rip"ArrowUp"+"rip",
    39 : "+"rip"ArrowRight"+"rip",
    40 : "+"rip"ArrowDown"+"rip",
    44 : "+"rip"PrintScreen"+"rip",
    45 : "+"rip"Insert"+"rip",
    46 : "+"rip"Delete"+"rip",
    91 : "+"rip"OS"+"rip",
    92 : "+"rip"OS"+"rip",
    93 : "+"rip"ContextMenu"+"rip",
    96 : "+"rip"Insert"+"rip",
    108 : "+"rip"Enter"+"rip",
    124 : "+"rip"PrintScreen"+"rip",
    127 : "+"rip"Delete"+"rip",
    144 : "+"rip"NumLock"+"rip",
    145 : "+"rip"ScrollLock"+"rip",
    224 : "+"rip"OS"+"rip",
    225 : "+"rip"AltGraph"+"rip",
    63232 : "+"rip"ArrowUp"+"rip",
    63233 : "+"rip"ArrowDown"+"rip",
    63234 : "+"rip"ArrowLeft"+"rip",
    63235 : "+"rip"ArrowRight"+"rip",
    63272 : "+"rip"Delete"+"rip",
    63273 : "+"rip"Home"+"rip",
    63275 : "+"rip"End"+"rip",
    63276 : "+"rip"PageUp"+"rip",
    63277 : "+"rip"PageDown"+"rip",
    63302 : "+"rip"Insert"+"rip"
  };
  var keys = {};
  var config = {};
  var opts = {};
  var mapping = {};
  var o = {};
  var record = {};
  var obj = {};
  /** @type {number} */
  i = 1;
  for (; i <= 12; i++) {
    /** @type {string} */
    data[i + 111] = data[i + 63235] = "+"rip"F"+"rip" + i;
  }
  !function() {
    /** @type {number} */
    var p = 0;
    /** @type {number} */
    var pos = buffer.length;
    for (; p < pos; p++) {
      var params = buffer[p].split("+"rip" "+"rip");
      var key = params.pop();
      /** @type {number} */
      var i = params.length - 1;
      for (; 0 <= i; i--) {
        if (params[i].length < 3) {
          opts[key] = params[i];
          opts[key + "+"rip"Right"+"rip"] = params[i];
        } else {
          if (params[i].length < key.length) {
            config[key] = params[i];
            config[key + "+"rip"Right"+"rip"] = params[i];
          }
        }
        keys[params[i].toLowerCase()] = key;
      }
    }
    /** @type {!Array<string>} */
    var m = "+"rip"ctrl super altgr left up right down space caps scroll print menu esc ins del"+"rip".split("+"rip" "+"rip");
    /** @type {(null|string)} */
    var locale = m[0].toLowerCase() === m[0] ? "+"rip"toLowerCase"+"rip" : m[0].toUpperCase() === m[0] ? "+"rip"toUpperCase"+"rip" : null;
    /** @type {number} */
    p = 0;
    /** @type {number} */
    pos = m.length;
    for (; p < pos; p++) {
      /** @type {string} */
      o[keys[m[p].toLowerCase()]] = m[p];
    }
    var key;
    for (key in data) {
      if (data.hasOwnProperty(key)) {
        mapping[key] = o[data[key]] || (locale ? data[key][locale]() : data[key]);
        o[data[key]] = mapping[key];
        record[mapping[key]] = data[key];
      }
    }
    for (key in name = o.Shift, method = o.Alt, value = o.AltGraph, index = o.Control, id = o.CapsLock, obj) {
      if (obj.hasOwnProperty(key)) {
        delete obj[key];
      }
    }
    obj.normal = {
      normal : {}
    };
    obj.normal[method] = {};
    obj.normal[value] = {};
    obj.normal[index] = {};
    obj[name] = {
      normal : {}
    };
    obj[name][method] = {};
    obj[name][value] = {};
    obj[name][index] = {};
    obj[id] = {
      normal : {}
    };
    obj[id][method] = {};
    obj[id][value] = {};
    obj[id][index] = {};
  }();
  el.addEventListener("+"rip"keydown"+"rip", pointerMoveHandler, false);
  el.addEventListener("+"rip"keypress"+"rip", pointerMoveHandler, false);
  el.addEventListener("+"rip"keyup"+"rip", pointerMoveHandler, false);
  el.setAttribute("+"rip"tabindex"+"rip", "+"rip"0"+"rip");
  el.addEventListener("+"rip"focus"+"rip", function(text) {
    compile(text);
  }, true);
  el.addEventListener("+"rip"click"+"rip", function(text) {
    compile(text);
  }, true);
  el.focus();
  el.addEventListener("+"rip"focusout"+"rip", function(canCreateDiscussions) {
    setTimeout(function() {
      if (!document.hasFocus()) {
        var m;
        for (m in result) {
          if (result.hasOwnProperty(m)) {
            /** @type {boolean} */
            result[m] = false;
          }
        }
      }
    }, 0);
  }, false);
  el.addEventListener("+"rip"dblclick"+"rip", function(canCreateDiscussions) {
    var m;
    for (m in result) {
      if (result.hasOwnProperty(m)) {
        /** @type {boolean} */
        result[m] = false;
      }
    }
  }, false);
  Object.defineProperties(result, {
    alias : {
      value : {
        small : function(match) {
          return config[match] || match;
        },
        symbol : function(key) {
          return opts[key] || config[key] || key;
        },
        favorite : function(name) {
          return mapping[name] || name;
        }
      }
    },
    keys : {
      get : function() {
        var attr;
        /** @type {!Array} */
        var t = [];
        for (attr in result) {
          if (result.hasOwnProperty(attr) && result[attr]) {
            t.push(attr);
          }
        }
        return t;
      }
    },
    activate : {
      value : function() {
        console.log("+"rip"active"+"rip");
      }
    }
  });
  /** @type {function(string): ?} */
  options.$key = result;
}(this);
!function(EMSarray) {
  /**
   * @param {?} animate_param
   * @return {undefined}
   */
  EMSarray.$gamepad = function(animate_param) {
    console.log(animate_param);
  };
}(this);
!function(window) {
  /**
   * @param {!Object} target
   * @param {!Function} text
   * @param {?} type
   * @return {?}
   */
  function link(target, text, type) {
    /**
     * @param {!Object} e
     * @return {undefined}
     */
    function cb(e) {
      e = window.event || e;
      if (parent) {
        if (parent.isEqualNode(e.target)) {
          e.preventDefault();
          listener(e);
        }
      } else {
        if (options.noscroll) {
          e.preventDefault();
        }
        listener(e);
      }
    }
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    function add(event) {
      event.preventDefault();
      clearTimeout(_takingTooLongTimeout);
      /** @type {number} */
      _takingTooLongTimeout = setTimeout(function() {
        handler();
      }, data);
    }
    /**
     * @param {!Event} candidate
     * @return {undefined}
     */
    function callback(candidate) {
      candidate.preventDefault();
      fn();
      clearTimeout(_takingTooLongTimeout);
    }
    /**
     * @return {undefined}
     */
    function handler() {
      target.addEventListener("+"rip"mousewheel"+"rip", cb, false);
      target.addEventListener("+"rip"DOMMouseScroll"+"rip", cb, false);
    }
    /**
     * @return {undefined}
     */
    function fn() {
      target.removeEventListener("+"rip"mousewheel"+"rip", cb, false);
      target.removeEventListener("+"rip"DOMMouseScroll"+"rip", cb, false);
    }
    if ("+"rip"object"+"rip" == typeof target && !(target instanceof HTMLElement)) {
      return settings = target;
    }
    var initializeCheckTimer;
    var _takingTooLongTimeout;
    /** @type {!Object} */
    var o = target;
    var options = $extend({}, settings, type);
    var data = options.delayy;
    var parent = options.handler;
    if (target + "+"rip""+"rip" === target && ((target = document.getElementById(o)) || (target = document.querySelector(o))), target) {
      /** @type {!Function} */
      params[++i] = text;
      target.setAttribute("+"rip"data-wheel-id"+"rip", i);
      /**
       * @param {!Object} event
       * @return {?}
       */
      var listener = function(event) {
        /** @type {number} */
        var bubbled_sets__3355 = event.wheelDelta ? event.wheelDelta / 40 : event.detail ? -event.detail : 0;
        return params[i].call(target, bubbled_sets__3355, event), false;
      };
      if (options.acceleration) {
        /** @type {number} */
        var l = 0;
        /** @type {boolean} */
        var object = true;
        /** @type {number} */
        initializeCheckTimer = setInterval(function() {
          if ((l = l - .1 * l) < 0) {
            /** @type {number} */
            l = 0;
          }
        }, options.acceleration);
        /**
         * @param {!Object} event
         * @return {?}
         */
        listener = function(event) {
          l = l + 1;
          /** @type {number} */
          var bubbled_sets__3355 = event.wheelDelta ? event.wheelDelta / 40 : event.detail ? -event.detail : 0;
          return 0 < bubbled_sets__3355 ? (false === object && (l = 1), object = true) : (true === object && (l = 1), object = false), params[i].call(target, bubbled_sets__3355, l, event), false;
        };
      }
      return options.throttle && (cb = $io.fn.throttle(cb, options.throttle)), options.debounce && (cb = $io.fn.debounce(cb, options.debounce)), target.addEventListener("+"rip"mouseenter"+"rip", data ? add : handler, false), target.addEventListener("+"rip"mouseleave"+"rip", data ? callback : fn, false), {
        destroy : function() {
          target.removeEventListener("+"rip"mouseenter"+"rip", data ? add : handler, false);
          target.removeEventListener("+"rip"mouseleave"+"rip", data ? callback : fn, false);
          clearTimeout(_takingTooLongTimeout);
          clearInterval(initializeCheckTimer);
          var key = target.getAttribute("+"rip"data-wheel-id"+"rip");
          if (key && params[key]) {
            delete params[key];
          }
          target.removeEventListener("+"rip"mousewheel"+"rip", cb, false);
          target.removeEventListener("+"rip"DOMMouseScroll"+"rip", cb, false);
          console.log("+"rip"$wheel destroy : "+"rip", target.getAttribute("+"rip"data-wheel-id"+"rip"));
        }
      };
    }
  }
  var params = {};
  /** @type {number} */
  var i = 0;
  var settings = {
    debounce : 0,
    noscroll : false,
    handler : null,
    delay : 0
  };
  /**
   * @param {!Object} c
   * @param {?} data
   * @return {?}
   */
  link.scale = function(c, data) {
    var options = $extend({
      negatif : false
    }, data);
    /** @type {number} */
    c.scaleX = 1;
    /** @type {number} */
    c.scaleY = 1;
    var width = c.offsetWidth;
    var height = c.offsetHeight;
    var a = link(c, function(canCreateDiscussions, event) {
      var scaleX = this.scaleX;
      var scaleY = this.scaleY;
      if (0 < canCreateDiscussions) {
        this.scaleX += .1 * this.scaleX;
        this.scaleY += .1 * this.scaleY;
      } else {
        this.scaleX -= .1 * this.scaleX;
        this.scaleY -= .1 * this.scaleY;
      }
      if (options.negatif) {
        if (this.scaleX < .1) {
          /** @type {number} */
          this.scaleX = .1;
        }
        if (this.scaleY < .1) {
          /** @type {number} */
          this.scaleY = .1;
        }
      } else {
        if (this.scaleX < 1) {
          /** @type {number} */
          this.scaleX = 1;
        }
        if (this.scaleY < 1) {
          /** @type {number} */
          this.scaleY = 1;
        }
      }
      /** @type {string} */
      this.style.width = width * this.scaleX + "+"rip"px"+"rip";
      /** @type {string} */
      this.style.height = height * this.scaleY + "+"rip"px"+"rip";
      /** @type {number} */
      var cw = 1 - this.scaleX / scaleX;
      /** @type {number} */
      var itemHeight = 1 - this.scaleY / scaleY;
      var left = this.offsetLeft;
      var top = this.offsetTop;
      left = left + (event.clientX - this.offsetLeft) * cw;
      top = top + (event.clientY - this.offsetTop) * itemHeight;
      /** @type {string} */
      this.style.top = top + "+"rip"px"+"rip";
      /** @type {string} */
      this.style.left = left + "+"rip"px"+"rip";
    });
    return {
      destroy : function() {
        a.destroy();
        delete c.scaleW;
        delete c.scaleH;
      }
    };
  };
  /** @type {function(!Object, !Function, ?): ?} */
  window.$wheel = link;
}(this);
!function(self) {
  /**
   * @param {!Object} x
   * @param {string} s
   * @param {number} p
   * @return {?}
   */
  function init(x, s, p) {
    if (options.clear) {
      return options.el.innerHTML = "+"rip""+"rip", void(options.clear = "+"rip""+"rip");
    }
    if (options.repeat && (x = x.repeat(options.cols), options.repeat = "+"rip""+"rip"), options.code && (x = $io.str.hilit(x), options.code = "+"rip""+"rip"), options.pass && (x = "+"rip"\u2714 "+"rip" + x, t = t + "+"rip"ui_log__green"+"rip", options.pass = "+"rip""+"rip"), options.fail && (x = "+"rip"\u2718 "+"rip" + x, t = t + "+"rip"ui_log__red"+"rip", options.fail = "+"rip""+"rip"), options.info && (x = "+"rip"\u2139 "+"rip" + x, t = t + "+"rip"ui_log__blue"+"rip", options.info = "+"rip""+"rip"), options.italic && (t = t + "+"rip" italic"+"rip", options.italic = "+"rip""+"rip"), options.bold && (t = t + "+"rip" bold"+"rip", options.bold = "+"rip""+"rip"), options.white && 
    (t = t + "+"rip" ui_log__white"+"rip", options.white = "+"rip""+"rip"), options.yellow && (t = t + "+"rip" ui_log__yellow"+"rip", options.yellow = "+"rip""+"rip"), options.cyan && (t = t + "+"rip" ui_log__cyan"+"rip", options.cyan = "+"rip""+"rip"), options.magenta && (t = t + "+"rip" ui_log__magenta"+"rip", options.magenta = "+"rip""+"rip"), options.blue && (t = t + "+"rip" ui_log__blue"+"rip", options.blue = "+"rip""+"rip"), options.red && (t = t + "+"rip" ui_log__red"+"rip", options.red = "+"rip""+"rip"), options.succes && (t = t + "+"rip" ui_log__green"+"rip", options.succes = "+"rip""+"rip"), options.green && (t = t + "+"rip" ui_log__green"+"rip", options.green = 
    "+"rip""+"rip"), options.error && (t = t + "+"rip" ui_log__red js_error"+"rip", options.error = "+"rip""+"rip"), options.obj) {
      return options.obj = "+"rip""+"rip", void function toString(result, value) {
        var key;
        for (key in result) {
          var obj = result[key];
          if (key == value) {
            return;
          }
          if ("+"rip"string"+"rip" == typeof obj || "+"rip"number"+"rip" == typeof obj || "+"rip"boolean"+"rip" == typeof obj) {
            init.pad(key, obj + "+"rip""+"rip", "+"rip"."+"rip");
          } else {
            if ($io.is.Object(obj)) {
              toString(obj, value);
            }
          }
        }
      }(x, s);
    }
    if ("+"rip"Error"+"rip" === $io.type(x) && (x = x.constructor.name + "+"rip"\n"+"rip" + x.message + $io.str.autolink(x.stack)), options.pad) {
      var n;
      if (p) {
        /** @type {number} */
        n = p;
      } else {
        /** @type {string} */
        n = s;
        /** @type {string} */
        s = "+"rip""+"rip";
      }
      /** @type {number} */
      var r = options.cols - 3 - (x.length + (s || "+"rip""+"rip").length + (s ? 2 : 1));
      if ((x = x + "+"rip" "+"rip" + n.repeat((3 + (0 <= r ? r : 0)) / n.length) + (s ? "+"rip" "+"rip" + s : "+"rip""+"rip")).length > options.cols) {
        /** @type {string} */
        x = x.match(new RegExp("+"rip".{1,"+"rip" + options.cols + "+"rip"}"+"rip", "+"rip"g"+"rip")).join("+"rip"\n"+"rip");
      }
      /** @type {string} */
      options.pad = "+"rip""+"rip";
    } else {
      if (s) {
        x = $io.arg.arr(arguments).join("+"rip", "+"rip");
      }
    }
    var name;
    return options.el ? ((tmp = document.createElement("+"rip"div"+"rip")).innerHTML = "+"rip"string"+"rip" == typeof(name = x) ? name : $io.isNumber(name) ? '<span class="+"rip"sh_number"+"rip">' + name + "+"rip"</span>"+"rip" : void 0 === name ? "+"rip"undefined"+"rip" : null === name ? "+"rip"null"+"rip" : "+"rip"function"+"rip" == typeof name ? $io.str.hilit($io.fn.str(name)) : $io.isObject(name) || $io.isArray(name) ? $io.str.hilit($io.stringify(name, 2)) : "+"rip"function"+"rip" == typeof name.constructor ? "+"rip"<span class=sh_init>"+"rip" + name.constructor.name + "+"rip"</span> "+"rip" + $io.str.hilit($io.stringify(name, 
    2), true) : name, tmp.className = t, options.el.appendChild(tmp), init.trigger("+"rip"addline"+"rip"), t = "+"rip""+"rip", tmp) : void 0;
  }
  var tmp;
  /** @type {!Array} */
  var names = ["+"rip"clear"+"rip", "+"rip"error"+"rip", "+"rip"error"+"rip", "+"rip"succes"+"rip", "+"rip"fail"+"rip", "+"rip"pass"+"rip", "+"rip"warn"+"rip", "+"rip"info"+"rip", "+"rip"bold"+"rip", "+"rip"italic"+"rip", "+"rip"red"+"rip", "+"rip"blue"+"rip", "+"rip"green"+"rip", "+"rip"white"+"rip", "+"rip"yellow"+"rip", "+"rip"cyan"+"rip", "+"rip"magenta"+"rip", "+"rip"html"+"rip", "+"rip"autolink"+"rip", "+"rip"code"+"rip", "+"rip"pad"+"rip", "+"rip"right"+"rip", "+"rip"center"+"rip", "+"rip"repeat"+"rip", "+"rip"stack"+"rip", "+"rip"save"+"rip", "+"rip"stay"+"rip", "+"rip"id"+"rip", "+"rip"fast"+"rip", "+"rip"group"+"rip", "+"rip"noop"+"rip", "+"rip"obj"+"rip", "+"rip"end"+"rip"];
  var options = {
    el : null
  };
  var settings = {};
  /** @type {string} */
  var t = "+"rip""+"rip";
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var length = names.length;
  for (; i < length; i++) {
    /** @type {string} */
    options[names[i]] = "+"rip""+"rip";
    settings[names[i]] = function(cleanMe) {
      return function() {
        /** @type {string} */
        options[cleanMe] = "+"rip"1"+"rip";
      };
    }(names[i]);
  }
  /**
   * @param {?} data
   * @return {?}
   */
  init.config = function(data) {
    return $extend(options, data), init;
  };
  $watch(init);
  self.$log = $chain(init, settings, settings);
}(this), function(self) {
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function _dragFunction(e) {
    e.scrollTop = e.scrollHeight;
  }
  /**
   * @param {!Object} e
   * @param {?} opts
   * @return {?}
   */
  function init(e, opts) {
    /**
     * @return {undefined}
     */
    function remove() {
      $log.config({
        cols : options.cols,
        el : button1
      });
    }
    /**
     * @return {undefined}
     */
    function onClick() {
      if (self.$selection) {
        if (!$selection.get()) {
          setTimeout(function() {
            el.focus();
            remove();
          }, 200);
        }
      }
    }
    /**
     * @param {!Element} e
     * @return {undefined}
     */
    function componentDidMount(e) {
      var dragboard;
      /** @type {string} */
      (dragboard = e).style.height = dragboard.scrollHeight + "+"rip"px"+"rip";
      _dragFunction(e);
    }
    var data = {
      cols : 59,
      exe : $noop,
      prompt : "+"rip">"+"rip",
      history : results
    };
    var options = $extend(data, opts);
    /** @type {!Element} */
    var div = document.createElement("+"rip"code"+"rip");
    /** @type {!Element} */
    var button1 = document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var container = document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var label = document.createElement("+"rip"span"+"rip");
    /** @type {!Element} */
    var el = document.createElement("+"rip"textarea"+"rip");
    if (e) {
      options.prompt += "+"rip"&nbsp;"+"rip";
      /** @type {string} */
      label.innerHTML = options.prompt;
      /** @type {string} */
      el.innerHTML = "+"rip""+"rip";
      /** @type {boolean} */
      el.spellcheck = false;
      /** @type {string} */
      el.rows = "+"rip"1"+"rip";
      /** @type {string} */
      el.style.outline = "+"rip"0 none"+"rip";
      /** @type {string} */
      el.style.boxShadow = "+"rip"0 0 transparent"+"rip";
      /** @type {string} */
      el.style.textShadow = "+"rip"0 0 transparent"+"rip";
      /** @type {string} */
      el.style.border = "+"rip"0 none"+"rip";
      /** @type {string} */
      el.style.verticalAlign = "+"rip"top"+"rip";
      /** @type {string} */
      el.style.resize = "+"rip"none"+"rip";
      /** @type {string} */
      el.style.padding = "+"rip"0"+"rip";
      /** @type {string} */
      el.style.margin = "+"rip"0"+"rip";
      /** @type {string} */
      el.style.height = "+"rip"auto"+"rip";
      /** @type {string} */
      el.style.width = "+"rip"100%"+"rip";
      /** @type {string} */
      el.style.color = "+"rip"inherit"+"rip";
      /** @type {string} */
      el.style.font = "+"rip"inherit"+"rip";
      /** @type {string} */
      el.style.fontSize = "+"rip"inherit"+"rip";
      /** @type {string} */
      el.style.background = "+"rip"transparent"+"rip";
      /** @type {string} */
      el.style.overflow = "+"rip"hidden"+"rip";
      /** @type {string} */
      el.style.textIndent = "+"rip"0"+"rip";
      /** @type {string} */
      container.style.display = "+"rip"table"+"rip";
      /** @type {string} */
      container.style.tableLayout = "+"rip"fixed"+"rip";
      /** @type {string} */
      el.style.display = "+"rip"table-cell"+"rip";
      /** @type {string} */
      label.style.display = "+"rip"table-cell"+"rip";
      /** @type {string} */
      label.style.width = "+"rip"1%"+"rip";
      /** @type {string} */
      label.style.whiteSpace = "+"rip"nowrap"+"rip";
      container.appendChild(label);
      container.appendChild(el);
      div.appendChild(button1);
      div.appendChild(container);
      /** @type {string} */
      div.style.display = "+"rip"block"+"rip";
      /** @type {string} */
      div.style.width = options.cols + "+"rip"ch"+"rip";
      /** @type {string} */
      div.style.whiteSpace = "+"rip"pre-wrap"+"rip";
      /** @type {string} */
      div.style.wordBreak = "+"rip"break-word"+"rip";
      /** @type {string} */
      div.style.wordWrap = "+"rip"break-word"+"rip";
      e.appendChild(div);
      /** @type {string} */
      e.style.overflowY = "+"rip"scroll"+"rip";
      if (options.rows) {
        /** @type {string} */
        e.style.height = options.rows + "+"rip"em"+"rip";
      }
      $log.on("+"rip"addline"+"rip", function() {
        _dragFunction(e);
      });
      e.addEventListener("+"rip"mouseup"+"rip", onClick, false);
      e.addEventListener("+"rip"contextmenu"+"rip", onClick, false);
      el.addEventListener("+"rip"mouseup"+"rip", function(event) {
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          /** @type {boolean} */
          event.cancelBubble = true;
        }
        event.stopImmediatePropagation();
        remove();
      }, false);
      el.addEventListener("+"rip"paste"+"rip", function(canCreateDiscussions) {
        setTimeout(function() {
          componentDidMount(el);
        }, 0);
      }, false);
      /** @type {number} */
      var m = 0;
      /** @type {boolean} */
      var u = false;
      var barMenuParentTop = $key(e).down(function(key, canCreateDiscussions, isSlidingUp) {
        componentDidMount(el);
        var i = options.history.length;
        if (false === self.onkey(key, el.value)) {
          return false;
        }
        if ("+"rip"enter"+"rip" == key) {
          var value = $io.str.trim(el.value);
          if (!value) {
            return self.log(options.prompt), false;
          }
          if (el.value = "+"rip""+"rip", el.style.height = "+"rip"auto"+"rip", m = 0, false === self.onenter(value)) {
            return false;
          }
          if (self.log(options.prompt + value), options.history[i - 1] != value && options.history.push(value), !options.exe.call(self, value)) {
            try {
              self.log(eval.call(window, value));
            } catch (o) {
              self.log.error(o.message + "+"rip"\n"+"rip");
            }
          }
          return false;
        }
        if (el.value || (u = false), !u) {
          if ("+"rip"up"+"rip" == key) {
            return i < ++m && (m = i), el.value = options.history[i - m] || "+"rip""+"rip", componentDidMount(el), false;
          }
          if ("+"rip"down"+"rip" == key) {
            return --m < 0 && (m = 0), el.value = options.history[i - m] || "+"rip""+"rip", componentDidMount(el), false;
          }
        }
      });
      var installLog = $log.config({
        cols : options.cols,
        el : button1
      });
      var self = {
        cli : true,
        cfg : options,
        destroy : function() {
          barMenuParentTop.destroy();
          this.ondestroy();
          console.log("+"rip"@todo : terminal destroy"+"rip");
        },
        setFocus : onClick,
        ondestroy : $noop,
        onenter : $noop,
        onkey : $noop,
        prompt : label,
        input : el,
        log : installLog
      };
      return self;
    }
  }
  /**
   * @return {undefined}
   */
  init.clearhistory = function() {
    /** @type {number} */
    results.length = 0;
  };
  var results = self.$store ? $store("+"rip".config/history.json"+"rip", [], function(unbanInfo) {
    /** @type {!Array} */
    results = unbanInfo;
  }, function() {
    return results;
  }) : [];
  /** @type {function(!Object, ?): ?} */
  self.$cli = init;
}(this);
!function(that) {
  /**
   * @param {string} type
   * @param {!Function} fn
   * @return {undefined}
   */
  function bind(type, fn) {
    document.documentElement.addEventListener(type, fn, false);
  }
  /**
   * @param {string} type
   * @param {!Function} fn
   * @return {undefined}
   */
  function addEvent(type, fn) {
    document.documentElement.removeEventListener(type, fn, false);
  }
  /**
   * @param {!Event} event
   * @return {?}
   */
  function getPosition(event) {
    var evt = event.changedTouches ? event.changedTouches[0] : null;
    return evt ? {
      x : evt.clientX,
      y : evt.clientY
    } : {
      x : event.clientX,
      y : event.clientY
    };
  }
  /**
   * @param {!ClientRect} e
   * @param {!ClientRect} c
   * @return {?}
   */
  function map(e, c) {
    return !(e.right <= c.left || e.left >= c.right || e.bottom <= c.top || e.top >= c.bottom);
  }
  /**
   * @param {!Object} e
   * @param {!Function} c
   * @param {!Function} context
   * @return {?}
   */
  function init(e, c, context) {
    /**
     * @return {?}
     */
    function getData() {
      if (options.target) {
        var targets = t.querySelectorAll(options.target);
        /** @type {!Array} */
        var val = [];
        /** @type {number} */
        var i = 0;
        var l = targets.length;
        for (; i < l; i++) {
          if (map(data, targets[i].getBoundingClientRect())) {
            val.push(targets[i]);
          }
        }
        return val;
      }
    }
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    function click(event) {
      var pos = getPosition(event);
      /** @type {number} */
      xOffset = pos.x - x;
      /** @type {number} */
      count = pos.y - y;
      var eventName;
      /** @type {number} */
      var offset = Math.abs(xOffset);
      /** @type {number} */
      var value = Math.abs(count);
      data.top = 0 < count ? y : pos.y;
      data.left = 0 < xOffset ? x : pos.x;
      /** @type {string} */
      d.style.top = data.top + "+"rip"px"+"rip";
      /** @type {string} */
      d.style.left = data.left + "+"rip"px"+"rip";
      if ((offset > options.distance || value > options.distance) && scrollTop === t.scrollTop) {
        event.preventDefault();
        if (!f) {
          /** @type {!Event} */
          eventName = event;
          options.onstart.call(t, eventName, d);
          /** @type {boolean} */
          f = true;
        }
        /** @type {string} */
        d.style.display = "+"rip"block"+"rip";
        data.right = data.left + offset;
        data.bottom = data.top + value;
        /** @type {string} */
        d.style.width = offset + "+"rip"px"+"rip";
        /** @type {string} */
        d.style.height = value + "+"rip"px"+"rip";
        options.ondraw.call(t, event, getData());
      }
    }
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    function select(event) {
      if (this.isEqualNode(event.target || event.srcElement)) {
        scrollTop = t.scrollTop;
        var position = getPosition(event);
        t.appendChild(d);
        x = position.x;
        y = position.y;
        click(event);
        bind("+"rip"mousemove"+"rip", click);
        bind("+"rip"touchmove"+"rip", click);
        bind("+"rip"mouseup"+"rip", init);
        bind("+"rip"touchend"+"rip", init);
        bind("+"rip"contextmenu"+"rip", init);
        options.oninit.call(t, event, d);
      }
    }
    /**
     * @param {?} e
     * @return {undefined}
     */
    function init(e) {
      addEvent("+"rip"mousemove"+"rip", click);
      addEvent("+"rip"touchmove"+"rip", click);
      addEvent("+"rip"mouseup"+"rip", init);
      addEvent("+"rip"touchend"+"rip", init);
      addEvent("+"rip"contextmenu"+"rip", init);
      options.onstop.call(t, e, getData());
      /** @type {string} */
      d.style.display = "+"rip"none"+"rip";
      t.removeChild(d);
      /** @type {boolean} */
      f = false;
      scrollTop = t.scrollTop;
    }
    if ("+"rip"object"+"rip" == typeof c && (context = c, c = null), "+"rip"string"+"rip" == typeof e && (e = document.querySelector(e)), !e) {
      throw new Error("+"rip"$box : element missing"+"rip");
    }
    var xOffset;
    var count;
    var x;
    var y;
    var b;
    var defaults = {
      distance : 10,
      oninit : $noop,
      onstart : $noop,
      ondraw : function(text, size, dataIdx) {
      },
      onstop : $noop
    };
    var options = $extend(defaults, context);
    /** @type {!Object} */
    var t = e;
    /** @type {function(!Event): undefined} */
    b = c ? function(args) {
      var target = args.target;
      for (; target && 1 == target.nodeType && !target.matches(c);) {
        target = target.parentNode;
      }
      if (target && 9 != target.nodeType) {
        select.call(t = target, args);
      }
    } : select;
    /** @type {!Element} */
    var d = document.createElement("+"rip"div"+"rip");
    /** @type {string} */
    d.className = "+"rip"ui_select_box"+"rip";
    /** @type {string} */
    d.style.position = "+"rip"fixed"+"rip";
    /** @type {number} */
    d.style.zIndex = 9999;
    /** @type {string} */
    d.style.border = "+"rip"1px dotted #000"+"rip";
    /** @type {string} */
    d.style.backgroundColor = "+"rip"rgba(0,0,0,.1)"+"rip";
    /** @type {string} */
    d.style.display = "+"rip"none"+"rip";
    var data = {
      right : 0,
      left : 0,
      bottom : 0,
      top : 0
    };
    /** @type {number} */
    var scrollTop = 0;
    /** @type {boolean} */
    var f = false;
    return e.addEventListener("+"rip"mousedown"+"rip", b, false), e.addEventListener("+"rip"touchstart"+"rip", b, false), {
      destroy : function() {
        e.removeEventListener("+"rip"mousedown"+"rip", b, false);
        e.removeEventListener("+"rip"touchstart"+"rip", b, false);
      }
    };
  }
  var proto;
  proto = Element.prototype;
  if (Element && !proto.matches) {
    /** @type {function(this:Element, string, (Node|NodeList<?>|null)=): boolean} */
    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
  }
  /** @type {function(!ClientRect, !ClientRect): ?} */
  init.overlap = map;
  /** @type {function(!Object, !Function, !Function): ?} */
  that.$box = init;
}(this);
!function(keyboard) {
  /**
   * @param {string} listener
   * @param {!Function} type
   * @return {undefined}
   */
  function addEvent(listener, type) {
    document.documentElement.addEventListener(listener, type, false);
  }
  /**
   * @param {string} listener
   * @param {!Function} event
   * @return {undefined}
   */
  function removeEvent(listener, event) {
    document.documentElement.removeEventListener(listener, event, false);
  }
  /**
   * @param {!Object} event
   * @return {?}
   */
  function func(event) {
    var evt = event.changedTouches ? event.changedTouches[0] : null;
    return evt ? {
      x : evt.clientX,
      y : evt.clientY
    } : {
      x : event.clientX,
      y : event.clientY
    };
  }
  /**
   * @param {!Object} el
   * @param {!Object} val
   * @param {!Object} opts
   * @return {?}
   */
  function self(el, val, opts) {
    /**
     * @param {?} e
     * @return {undefined}
     */
    function init(e) {
      var xy = func(e);
      /** @type {number} */
      value = xy.x - dx;
      /** @type {number} */
      x = xy.y - dy;
      if (self.isDragging || Math.abs(value) > options.distance || Math.abs(x) > options.distance) {
        blur(e);
        if (!self.isDragging) {
          (function(key_event) {
            if (options.ghost) {
              document.body.appendChild(self.ghost);
            } else {
              /** @type {(CSSStyleDeclaration|null)} */
              var style = getComputedStyle(self.elem, null);
              if (i = self.elem.offsetLeft - (parseInt(style.marginLeft) || 0), offset = self.elem.offsetTop - (parseInt(style.marginTop) || 0), "+"rip"absolute"+"rip" === options.position || "+"rip"fixed"+"rip" === options.position) {
                /** @type {string} */
                self.elem.style.position = "+"rip"fixed"+"rip" == style.position ? "+"rip"fixed"+"rip" : "+"rip"absolute"+"rip";
                /** @type {string} */
                self.elem.style.boxSizing = self.elem.style.webkitBoxSizing = self.elem.style.MozBoxSizing = "+"rip"border-box"+"rip";
                /** @type {string} */
                self.elem.style.height = self.elem.offsetHeight + "+"rip"px"+"rip";
                /** @type {string} */
                self.elem.style.width = self.elem.offsetWidth + "+"rip"px"+"rip";
                /** @type {string} */
                self.elem.style.left = i + "+"rip"px"+"rip";
                /** @type {string} */
                self.elem.style.top = offset + "+"rip"px"+"rip";
              } else {
                /** @type {number} */
                var step = parseInt(style.left) || 0;
                /** @type {number} */
                var px = parseInt(style.top) || 0;
                if (options.constrain) {
                  /** @type {number} */
                  max = max - offset + px;
                  /** @type {number} */
                  y = y - offset + px;
                  /** @type {number} */
                  min = min - i + step;
                  /** @type {number} */
                  start = start - i + step;
                }
                /** @type {number} */
                i = step;
                /** @type {number} */
                offset = px;
                /** @type {string} */
                self.elem.style.position = "+"rip"relative"+"rip";
                /** @type {string} */
                self.elem.style.left = i + "+"rip"px"+"rip";
                /** @type {string} */
                self.elem.style.top = offset + "+"rip"px"+"rip";
              }
              self.elem.classList.add("+"rip"ui_is_dragging"+"rip");
            }
            options.onstart.call(self.elem, key_event);
            /** @type {boolean} */
            self.isDragging = true;
          })(e);
        }
        value = value + i;
        x = x + offset;
        if (options.constrain) {
          value = min < value ? min : value < start ? start : value;
          x = max < x ? max : x < y ? y : x;
        }
        if (options.grid) {
          /** @type {number} */
          value = ~~((value + options.grid[0] / 2) / options.grid[0]) * options.grid[0];
          /** @type {number} */
          x = ~~((x + options.grid[1] / 2) / options.grid[1]) * options.grid[1];
        }
        if (options.ghost) {
          if (self.ghost) {
            /** @type {string} */
            self.ghost.style.left = value + "+"rip"px"+"rip";
            /** @type {string} */
            self.ghost.style.top = x + "+"rip"px"+"rip";
          }
        } else {
          /** @type {string} */
          self.elem.style.left = value + "+"rip"px"+"rip";
          /** @type {string} */
          self.elem.style.top = x + "+"rip"px"+"rip";
        }
        self.x = value;
        self.y = x;
        options.ondrag.call(self.elem, e, value, x);
        if (options.zone) {
          (function(b, pt) {
            /** @type {(Element|null)} */
            var table = document.elementFromPoint(pt.x, pt.y);
            var name;
            for (name in options.zone) {
              if (options.zone.hasOwnProperty(name)) {
                var window = options.zone[name];
                /** @type {(Element|null)} */
                var element = table;
                for (; element && 1 == element.nodeType && !element.matches(name);) {
                  /** @type {(Node|null)} */
                  element = element.parentNode;
                }
                if (element && 9 != element.nodeType) {
                  if (self.zone !== element) {
                    if (window.leave && self.zone) {
                      window.leave(b, self.zone, self.elem);
                    }
                    if (window.enter) {
                      window.enter(b, element, self.elem);
                    }
                  }
                  /** @type {!Node} */
                  self.zone = element;
                } else {
                  if (self.zone) {
                    if (window.leave) {
                      window.leave(b, self.zone, self.elem);
                    }
                    /** @type {null} */
                    self.zone = null;
                  }
                }
                if (window.move && self.zone) {
                  window.move(b, self.zone, self.elem);
                }
              }
            }
          })(e, xy);
        }
      }
    }
    /**
     * @param {(Object|string)} event
     * @param {(Object|string)} delay
     * @return {undefined}
     */
    function show(event, delay) {
      blur(event);
      self.elem = delay || (val ? this : el);
      var pos = func(event);
      if (dx = pos.x, dy = pos.y, options.ghost) {
        self.ghost = self.createGhost(self.elem);
        var ret = self.elem.getBoundingClientRect();
        i = ret.left;
        offset = ret.top;
      } else {
        /** @type {null} */
        self.ghost = null;
        i = self.elem.offsetLeft;
        offset = self.elem.offsetTop;
      }
      self.initialPos.x = i;
      self.initialPos.y = offset;
      init(event);
      addEvent("+"rip"mousemove"+"rip", init);
      addEvent("+"rip"touchmove"+"rip", init);
      addEvent("+"rip"mouseup"+"rip", remove);
      addEvent("+"rip"touchend"+"rip", remove);
      addEvent("+"rip"contextmenu"+"rip", blur);
      options.oninit.call(self.elem, event);
    }
    /**
     * @param {?} template
     * @return {undefined}
     */
    function remove(template) {
      if (removeEvent("+"rip"mousemove"+"rip", init), removeEvent("+"rip"touchmove"+"rip", init), removeEvent("+"rip"mouseup"+"rip", remove), removeEvent("+"rip"touchend"+"rip", remove), removeEvent("+"rip"contextmenu"+"rip", blur), self.isDragging) {
        /** @type {boolean} */
        var individualMD5 = false;
        if (options.zone && self.elem) {
          individualMD5 = function(key) {
            /** @type {boolean} */
            var link = false;
            var pos = func(key);
            var name;
            for (name in document.elementFromPoint(pos.x, pos.y), options.zone) {
              if (options.zone.hasOwnProperty(name)) {
                var controller = options.zone[name];
                if (controller.drop && self.zone) {
                  /** @type {boolean} */
                  link = true;
                  controller.drop(key, self.zone, self.elem);
                }
              }
            }
            return link;
          }(template);
        }
        if (!individualMD5) {
          options.ondrop.call(self.elem, template);
        }
        options.onstop.call(self.elem, template);
      }
      if (self.elem) {
        self.elem.classList.remove("+"rip"ui_is_dragging"+"rip");
      }
      /** @type {null} */
      self.zone = null;
      /** @type {null} */
      self.elem = null;
      /** @type {null} */
      self.initialPos.x = null;
      /** @type {null} */
      self.initialPos.y = null;
      /** @type {null} */
      self.x = null;
      /** @type {null} */
      self.y = null;
      /** @type {null} */
      self.cfg = null;
      /** @type {boolean} */
      self.isDragging = false;
    }
    /**
     * @param {!Object} event
     * @return {undefined}
     */
    function blur(event) {
      document.activeElement.blur();
      event.preventDefault();
    }
    if ("+"rip"object"+"rip" == typeof val && (opts = val, val = null), "+"rip"string"+"rip" == typeof el && (el = document.querySelector(el)), !el) {
      throw new Error("+"rip"$drag : element missing"+"rip");
    }
    var value;
    var x;
    var offset;
    var i;
    var dx;
    var dy;
    var max;
    var min;
    var node;
    var container;
    var target;
    var defaults = {
      constrain : false,
      ghost : false,
      grid : false,
      position : "+"rip"absolute"+"rip",
      handle : null,
      distance : 5,
      oninit : $noop,
      onstart : $noop,
      ondrag : $noop,
      onstop : $noop,
      ondrop : $noop
    };
    var options = $extend(defaults, opts);
    /** @type {number} */
    var y = 0;
    /** @type {number} */
    var start = 0;
    var action = val ? $delegate(val, show) : show;
    if ("+"rip"function"+"rip" == typeof options.ghost && Object.defineProperty(options, "+"rip"ghost"+"rip", {
      get : function() {
        return opts.ghost(options);
      }
    }), "+"rip"function"+"rip" == typeof options.grid && Object.defineProperty(options, "+"rip"grid"+"rip", {
      get : opts.grid
    }), self.elem = el, self.zone = null, self.isDragging = false, val) {
      node = container = target = el;
    } else {
      target = options.handle || el;
      container = node = el.parentNode;
      for (; container.parentNode && 9 !== container.parentNode.nodeType && "+"rip"static"+"rip" == window.getComputedStyle(node, null).position;) {
        container = container.parentNode;
      }
    }
    return max = container.offsetHeight - el.offsetHeight - .5, min = container.offsetWidth - el.offsetWidth - .5, target.addEventListener("+"rip"mousedown"+"rip", action, false), target.addEventListener("+"rip"touchstart"+"rip", action, false), {
      destroy : function() {
        /** @type {boolean} */
        self.isDragging = false;
        self.removeGhost();
        remove();
        target.removeEventListener("+"rip"mousedown"+"rip", action, false);
        target.removeEventListener("+"rip"touchstart"+"rip", action, false);
      }
    };
  }
  /**
   * @param {!Object} element
   * @param {?} height
   * @return {?}
   */
  self.createGhost = function(element, height) {
    element.classList.add("+"rip"ui_is_dragging"+"rip");
    var div = element.cloneNode(true);
    var ruleCodesArray = div.getElementsByTagName("+"rip"*"+"rip");
    var spans = element.getElementsByTagName("+"rip"*"+"rip");
    /** @type {string} */
    div.style.cssText = getComputedStyle(element, null).cssText;
    /** @type {number} */
    var k = 0;
    var _jlen = ruleCodesArray.length;
    for (; k < _jlen; k++) {
      /** @type {string} */
      ruleCodesArray[k].style.cssText = getComputedStyle(spans[k], null).cssText;
      /** @type {string} */
      ruleCodesArray[k].style.pointerEvents = "+"rip"none"+"rip";
    }
    return div.classList.add("+"rip"js-ghost"+"rip"), div.style.pointerEvents = "+"rip"none"+"rip", div.style.position = "+"rip"fixed"+"rip", div.style.zIndex = 9999, div.style.opacity = "+"rip".7"+"rip", element.classList.remove("+"rip"ui_is_dragging"+"rip"), div;
  };
  self.initialPos = {
    x : null,
    y : null
  };
  /**
   * @param {!Object} ref
   * @param {?} mainline
   * @return {undefined}
   */
  self.revert = function(ref, mainline) {
    $transition.revert(self.ghost || self.elem, self.initialPos, function() {
      if (self.ghost) {
        self.removeGhost();
      }
    });
  };
  /**
   * @return {undefined}
   */
  self.removeGhost = function() {
    if (self.ghost && self.ghost.parentNode && self.ghost.parentNode === document.body) {
      document.body.removeChild(self.ghost);
    }
    /** @type {null} */
    self.ghost = null;
  };
  /** @type {function(!Object, !Object, !Object): ?} */
  keyboard.$drag = self;
}(this), function(vm) {
  /**
   * @param {?} data
   * @return {undefined}
   */
  function store(data) {
    console.log(data);
  }
  var i = function() {
    var i;
    /** @type {!Element} */
    var el = document.createElement("+"rip"div"+"rip");
    /** @type {!Array} */
    var prefixes = ["+"rip"Webkit"+"rip", "+"rip"Moz"+"rip", "+"rip"O"+"rip", "+"rip"ms"+"rip"];
    if ("+"rip"transition"+"rip" in el.style) {
      return "+"rip"transition"+"rip";
    }
    /** @type {number} */
    i = 0;
    for (; i < prefixes.length; i++) {
      if (prefixes[i] + "+"rip"Transition"+"rip" in el.style) {
        return prefixes[i] + "+"rip"Transition"+"rip";
      }
    }
    return "+"rip"transition"+"rip";
  }();
  /**
   * @param {!Object} e
   * @param {!Object} params
   * @param {!Function} callback
   * @param {number} options
   * @return {undefined}
   */
  store.revert = function(e, params, callback, options) {
    if (void 0 === options && (options = 300), e && null !== params.x) {
      var tDst = e.style[i];
      /** @type {string} */
      e.style[i] = "+"rip"left "+"rip" + options + "+"rip"ms ease, top "+"rip" + options + "+"rip"ms ease"+"rip";
      /** @type {string} */
      e.style.left = params.x + "+"rip"px"+"rip";
      /** @type {string} */
      e.style.top = params.y + "+"rip"px"+"rip";
      setTimeout(function() {
        e.style[i] = tDst;
        if ("+"rip"function"+"rip" == typeof callback) {
          callback();
        }
      }, options);
    }
  };
  /** @type {function(?): undefined} */
  vm.$transition = store;
}(this);
!function(s) {
  /**
   * @param {string} name
   * @param {!Element} cb
   * @param {undefined} id
   * @return {?}
   */
  function add(name, cb, id) {
    return render(name = name.replace(/([a-z]+)([+-])?/g, function(canCreateDiscussions, right, i) {
      return ("+"rip"top"+"rip" == right ? "+"rip"bottom"+"rip" : "+"rip"bottom"+"rip" == right ? "+"rip"top"+"rip" : "+"rip"right"+"rip" == right ? "+"rip"left"+"rip" : "+"rip"left"+"rip" == right ? "+"rip"right"+"rip" : right) + ("+"rip"+"+"rip" == i ? "+"rip"-"+"rip" : "+"rip"-"+"rip" == i ? "+"rip"+"+"rip" : "+"rip""+"rip");
    }), cb, id);
  }
  /**
   * @param {string} call
   * @param {!Element} item
   * @param {number} pos
   * @return {?}
   */
  function render(call, item, pos) {
    var basePosition = pos || {
      top : 0,
      left : 0
    };
    var targetHeight = item.offsetHeight || 0;
    var targetWidth = item.offsetWidth || 0;
    return call.replace(/(?:(right|left|center)(?:([+-])(\d+)(%)?)?)? ?(?:(top|bottom|center)(?:([+-])(\d+)(%)?)?)?/, function(canCreateDiscussions, type, buckets, name, dontForceConstraints, value, p1__20621_SHARP_, r, p) {
      if (!value) {
        /** @type {string} */
        value = "+"rip"center"+"rip";
      }
      if (!type) {
        /** @type {string} */
        type = "+"rip"center"+"rip";
      }
      if ("+"rip"right"+"rip" == type) {
        basePosition.left += targetWidth;
      }
      if ("+"rip"center"+"rip" == type) {
        basePosition.left += targetWidth / 2;
      }
      if ("+"rip"bottom"+"rip" == value) {
        basePosition.top += targetHeight;
      }
      if ("+"rip"center"+"rip" == value) {
        basePosition.top += targetHeight / 2;
      }
      if (dontForceConstraints) {
        /** @type {number} */
        name = targetWidth / 100 * +name;
      }
      if (p) {
        /** @type {number} */
        r = targetHeight / 100 * +r;
      }
      if (name) {
        /** @type {number} */
        basePosition.left = basePosition.left - +(buckets + name);
      }
      if (r) {
        /** @type {number} */
        basePosition.top = basePosition.top - +(p1__20621_SHARP_ + r);
      }
    }), basePosition;
  }
  /**
   * @param {!Element} obj
   * @param {?} props
   * @return {?}
   */
  s.$pos = function(obj, props) {
    /**
     * @param {!Object} o
     * @return {undefined}
     */
    function position(o) {
      if (o || (o = data.of), 1 === o.nodeType) {
        var parent = o.getBoundingClientRect();
        id = parent.left;
        v = parent.top;
      } else {
        if (o.preventDefault) {
          id = o.pageX;
          v = o.pageY;
        }
      }
      callback(id, v, id, v);
    }
    if (!obj) {
      throw new Error("+"rip"$pos: element is undefined"+"rip");
    }
    /** @type {string} */
    obj.style.position = "+"rip"fixed"+"rip";
    var self;
    var e = obj.parentNode;
    var description = window.getComputedStyle(e, null);
    for (; e.parentNode && 9 !== e.parentNode.nodeType && "+"rip"none"+"rip" == description.transform && "+"rip"none"+"rip" == description.perspective;) {
      e.getAttribute("+"rip"data-ui-menu-scroller"+"rip");
      e = e.parentNode;
      description = window.getComputedStyle(e, null);
    }
    self = e.getBoundingClientRect();
    var callback;
    var id;
    var v;
    var bg_h;
    var height;
    var width;
    var options = {
      my : "+"rip"left top"+"rip",
      at : "+"rip"left bottom"+"rip",
      of : {},
      collision : "+"rip"flip"+"rip",
      within : window,
      transform : false,
      overflow : "+"rip"none"+"rip"
    };
    var data = $extend(options, props);
    var el = render(data.my, obj);
    var s = render(data.at, data.of);
    /** @type {number} */
    var y = s.top - el.top - self.top;
    /** @type {number} */
    var x = s.left - el.left - self.left;
    var rect = {
      x : 0,
      y : 0,
      h : 0,
      w : 0
    };
    var bounds = {};
    if ($io.isWindow(data.within) || !data.within) {
      /** @type {number} */
      rect.h = window.innerHeight;
      /** @type {number} */
      rect.w = window.innerWidth;
    } else {
      bounds = data.within.getBoundingClientRect();
      rect.x = bounds.left;
      rect.y = bounds.top;
      rect.h = data.within.offsetHeight;
      rect.w = data.within.offsetWidth;
    }
    if (obj.offsetHeight > rect.h) {
      /** @type {number} */
      height = data.of.getBoundingClientRect().top - rect.y;
      /** @type {number} */
      width = rect.h - height - data.of.offsetHeight;
      /** @type {number} */
      bg_h = obj.parentNode.isEqualNode(data.of) ? rect.h : width < height ? height : width;
      /** @type {string} */
      obj.style.height = bg_h + "+"rip"px"+"rip";
      obj.setAttribute("+"rip"data-ui-menu-scroller"+"rip", true);
    }
    var min = self.left == bounds.left ? 0 : bounds.left;
    var j = self.top == bounds.top ? 0 : bounds.top;
    var top = rect.w - obj.offsetWidth + min;
    var w = rect.h - obj.offsetHeight + j;
    if (1 === data.of.nodeType) {
      var style = window.getComputedStyle(data.of, null);
      var size = style.transform || style.webkitTransform || style.MozTransform || style.msTransform;
    }
    if (size && "+"rip"none"+"rip" != size) {
      obj.style.transformOrigin = style.transformOrigin;
      /**
       * @return {undefined}
       */
      callback = function() {
        var left;
        var top;
        var px;
        var maxy;
        if (0 == self.left) {
          left = bounds.left;
          top = bounds.top;
          /** @type {number} */
          px = x;
          /** @type {number} */
          maxy = y;
        } else {
          /** @type {number} */
          top = left = 0;
          px = x + bounds.left;
          maxy = y + bounds.top;
        }
        /** @type {string} */
        obj.style.left = data.of.offsetLeft + left + "+"rip"px"+"rip";
        /** @type {string} */
        obj.style.top = data.of.offsetTop + top + "+"rip"px"+"rip";
        /** @type {string} */
        obj.style.transform = size + "+"rip" translateX("+"rip" + px + "+"rip"px) translateY("+"rip" + maxy + "+"rip"px)"+"rip";
      };
    } else {
      if ("+"rip"fit"+"rip" == data.collision) {
        /**
         * @param {string} val
         * @param {string} i
         * @return {undefined}
         */
        callback = function(val, i) {
          val = top < (val = val + x) ? top : val < min ? min : val;
          i = w < (i = i + y) ? w : i < j ? j : i;
          /** @type {string} */
          obj.style.left = val + "+"rip"px"+"rip";
          /** @type {string} */
          obj.style.top = i + "+"rip"px"+"rip";
        };
      } else {
        if ("+"rip"flip"+"rip" == data.collision || "+"rip"flipfit"+"rip" == data.collision) {
          var result = add(data.my, obj);
          var t = add(data.at, data.of);
          /** @type {number} */
          var f = t.top - result.top - self.top;
          /** @type {number} */
          var adjustLeft = t.left - result.left - self.left;
          /** @type {function(string, string, number, number): undefined} */
          callback = "+"rip"flipfit"+"rip" == data.collision ? function(left, h, width, g) {
            if (top < (left = left + x) || left < min) {
              left = width + adjustLeft;
            }
            if (w < (h = h + y) || h < j) {
              h = g + f;
            }
            left = top < left ? top : left < min ? min : left;
            h = w < h ? w : h < j ? j : h;
            /** @type {string} */
            obj.style.left = left + "+"rip"px"+"rip";
            /** @type {string} */
            obj.style.top = h + "+"rip"px"+"rip";
          } : function(left, h, width, g) {
            if (top < (left = left + x) || left < min) {
              left = width + adjustLeft;
            }
            if (w < (h = h + y) || h < j) {
              h = g + f;
            }
            /** @type {string} */
            obj.style.left = left + "+"rip"px"+"rip";
            /** @type {string} */
            obj.style.top = h + "+"rip"px"+"rip";
          };
        } else {
          /**
           * @param {number} s
           * @param {number} v
           * @return {undefined}
           */
          callback = function(s, v) {
            /** @type {string} */
            obj.style.left = s + x + "+"rip"px"+"rip";
            /** @type {string} */
            obj.style.top = v + y + "+"rip"px"+"rip";
          };
        }
      }
    }
    return position(data.of), {
      update : position
    };
  };
}(this);
!function(gui) {
  /**
   * @param {string} type
   * @param {!Function} fn
   * @return {undefined}
   */
  function addEvent(type, fn) {
    document.documentElement.addEventListener(type, fn, false);
  }
  /**
   * @param {string} type
   * @param {!Function} fn
   * @return {undefined}
   */
  function addEventListener(type, fn) {
    document.documentElement.removeEventListener(type, fn, false);
  }
  /**
   * @param {!Object} event
   * @return {?}
   */
  function end(event) {
    var evt = event.changedTouches ? event.changedTouches[0] : null;
    return evt ? {
      x : evt.clientX,
      y : evt.clientY
    } : {
      x : event.clientX,
      y : event.clientY
    };
  }
  /** @type {function(!Object): undefined} */
  var noop = gui.$noop || function(type) {
  };
  /** @type {!Element} */
  var elem = document.createElement("+"rip"div"+"rip");
  /** @type {string} */
  elem.style.position = "+"rip"absolute"+"rip";
  /** @type {string} */
  elem.style.zIndex = "+"rip"999"+"rip";
  /** @type {string} */
  elem.style.top = "+"rip"0"+"rip";
  /** @type {string} */
  elem.style.bottom = "+"rip"0"+"rip";
  /** @type {string} */
  elem.style.left = "+"rip"0"+"rip";
  /** @type {string} */
  elem.style.right = "+"rip"0"+"rip";
  /** @type {string} */
  elem.style.pointerEvents = "+"rip"auto"+"rip";
  /**
   * @param {!Element} e
   * @param {string} data
   * @return {?}
   */
  gui.$resize = function(e, data) {
    /**
     * @param {!Object} el
     * @param {string} undefined
     * @return {?}
     */
    function render(el, undefined) {
      /**
       * @param {!Object} e
       * @return {undefined}
       */
      function render(e) {
        var t;
        var match;
        var element;
        e.preventDefault();
        e.stopPropagation();
        match = end(t = e);
        width = match.x;
        i = match.y;
        x = el.offsetWidth;
        offset = el.offsetHeight;
        h = el.offsetTop;
        pos = el.offsetLeft;
        addEvent("+"rip"mousemove"+"rip", type);
        addEvent("+"rip"touchmove"+"rip", type);
        addEvent("+"rip"mouseup"+"rip", init);
        addEvent("+"rip"touchend"+"rip", init);
        addEvent("+"rip"contextmenu"+"rip", mousemove);
        (function() {
          /** @type {!NodeList<Element>} */
          var images = document.querySelectorAll("+"rip"iframe"+"rip");
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var numberOfImages = images.length;
          for (; i < numberOfImages; i++) {
            /** @type {string} */
            images[i].dataset.oldPointerEvents = images[i].style.pointerEvents;
            /** @type {string} */
            images[i].style.pointerEvents = "+"rip"none"+"rip";
          }
        })();
        (element = el).dataset.oldTransform = element.style.transitionDuration;
        /** @type {string} */
        element.style.transitionDuration = "+"rip"0s"+"rip";
        document.documentElement.style.cursor = undefined + "+"rip"-resize"+"rip";
        if (self.onstart) {
          self.onstart(el, t);
        }
      }
      /**
       * @param {!Event} event
       * @return {undefined}
       */
      function mousemove(event) {
        event.preventDefault();
      }
      /**
       * @param {undefined} e
       * @return {undefined}
       */
      function init(e) {
        var parentElement;
        /** @type {string} */
        document.documentElement.style.cursor = "+"rip"auto"+"rip";
        (function() {
          /** @type {!NodeList<Element>} */
          var images = document.querySelectorAll("+"rip"iframe"+"rip");
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var numberOfImages = images.length;
          for (; i < numberOfImages; i++) {
            images[i].style.pointerEvents = images[i].dataset.oldPointerEvents;
            delete images[i].dataset.oldPointerEvents;
          }
        })();
        (parentElement = el).style.transitionDuration = parentElement.dataset.oldTransform;
        delete parentElement.dataset.oldTransform;
        addEventListener("+"rip"mousemove"+"rip", type);
        addEventListener("+"rip"touchmove"+"rip", type);
        addEventListener("+"rip"mouseup"+"rip", init);
        addEventListener("+"rip"touchend"+"rip", init);
        addEventListener("+"rip"contextmenu"+"rip", mousemove);
        if (self.onstop) {
          self.onstop(el, e);
        }
      }
      /**
       * @param {undefined} e
       * @return {undefined}
       */
      function resize(e) {
        var b = end(e);
        if ("+"rip"s"+"rip" !== undefined && "+"rip"se"+"rip" !== undefined && "+"rip"sw"+"rip" !== undefined || (el.style.height = offset + b.y - i + "+"rip"px"+"rip"), "+"rip"e"+"rip" !== undefined && "+"rip"ne"+"rip" !== undefined && "+"rip"se"+"rip" !== undefined || (el.style.width = x + b.x - width + "+"rip"px"+"rip"), "+"rip"n"+"rip" === undefined || "+"rip"ne"+"rip" === undefined || "+"rip"nw"+"rip" === undefined) {
          /** @type {number} */
          var l = b.y - i;
          if (m) {
            /** @type {string} */
            el.style.top = h + l + "+"rip"px"+"rip";
          }
          /** @type {string} */
          el.style.height = offset - l + "+"rip"px"+"rip";
        }
        if (!("+"rip"w"+"rip" !== undefined && "+"rip"nw"+"rip" !== undefined && "+"rip"sw"+"rip" !== undefined)) {
          /** @type {number} */
          l = b.x - width;
          if (m) {
            /** @type {string} */
            el.style.left = pos + l + "+"rip"px"+"rip";
          }
          /** @type {string} */
          el.style.width = x - l + "+"rip"px"+"rip";
        }
        if (self.onresize) {
          self.onresize(el, e);
        }
      }
      var width;
      var i;
      var x;
      var offset;
      var h;
      var pos;
      var type;
      /** @type {!Element} */
      var target = elem.cloneNode();
      undefined = undefined || "+"rip"s"+"rip";
      try {
        type = $io.fn.throttle(resize, 15);
      } catch (e) {
        /** @type {function(undefined): undefined} */
        type = resize;
      }
      return target.className = "+"rip"js-resizer js-resizer-"+"rip" + undefined, "+"rip"n"+"rip" == undefined ? (target.style.bottom = "+"rip"auto"+"rip", target.style.height = "+"rip"6px"+"rip", target.style.cursor = "+"rip"n-resize"+"rip") : "+"rip"s"+"rip" == undefined ? (target.style.top = "+"rip"auto"+"rip", target.style.height = "+"rip"6px"+"rip", target.style.cursor = "+"rip"s-resize"+"rip") : "+"rip"e"+"rip" == undefined ? (target.style.left = "+"rip"auto"+"rip", target.style.width = "+"rip"6px"+"rip", target.style.cursor = "+"rip"e-resize"+"rip") : "+"rip"w"+"rip" == undefined ? (target.style.right = "+"rip"auto"+"rip", target.style.width = "+"rip"6px"+"rip", target.style.cursor = 
      "+"rip"w-resize"+"rip") : "+"rip"nw"+"rip" == undefined ? (target.style.bottom = "+"rip"auto"+"rip", target.style.right = "+"rip"auto"+"rip", target.style.height = "+"rip"6px"+"rip", target.style.width = "+"rip"6px"+"rip", target.style.cursor = "+"rip"nw-resize"+"rip") : "+"rip"ne"+"rip" == undefined ? (target.style.bottom = "+"rip"auto"+"rip", target.style.left = "+"rip"auto"+"rip", target.style.height = "+"rip"6px"+"rip", target.style.width = "+"rip"6px"+"rip", target.style.cursor = "+"rip"ne-resize"+"rip") : "+"rip"sw"+"rip" == undefined ? (target.style.top = "+"rip"auto"+"rip", target.style.right = "+"rip"auto"+"rip", target.style.height = "+"rip"6px"+"rip", target.style.width = "+"rip"6px"+"rip", 
      target.style.cursor = "+"rip"sw-resize"+"rip") : "+"rip"se"+"rip" == undefined && (target.style.top = "+"rip"auto"+"rip", target.style.left = "+"rip"auto"+"rip", target.style.height = "+"rip"6px"+"rip", target.style.width = "+"rip"6px"+"rip", target.style.cursor = "+"rip"se-resize"+"rip"), el.appendChild(target), target.addEventListener("+"rip"mousedown"+"rip", render, false), target.addEventListener("+"rip"touchstart"+"rip", render, false), {
        destroy : function() {
          target.removeEventListener("+"rip"mousedown"+"rip", render, false);
          target.removeEventListener("+"rip"touchstart"+"rip", render, false);
          if (target.parentNode) {
            target.parentNode.removeChild(target);
          }
        }
      };
    }
    if ("+"rip"string"+"rip" == typeof e && (e = document.querySelector(e)), !e) {
      throw new Error("+"rip"$resize : element missing"+"rip");
    }
    if (!e.getAttribute("+"rip"data-js-resize-init"+"rip")) {
      e.setAttribute("+"rip"data-js-resize-init"+"rip", true);
      var elem = e.parentNode;
      for (; elem && elem.parentNode && 9 !== elem.parentNode.nodeType && "+"rip"static"+"rip" == window.getComputedStyle(elem, null).position;) {
        elem = elem.parentNode;
      }
      if ("+"rip"string"+"rip" == typeof data) {
        data = {
          handles : data
        };
      }
      var command = window.getComputedStyle(e, null);
      var self = $extend({
        handles : "+"rip"e, s, se"+"rip",
        onstart : noop,
        onresize : noop,
        onstop : noop
      }, data);
      /** @type {boolean} */
      var m = "+"rip"fixed"+"rip" == command.position || "+"rip"absolute"+"rip" == command.position;
      var anchorBoundingBoxViewport = e.getBoundingClientRect();
      /** @type {!Array} */
      var tableList = (anchorBoundingBoxViewport.top, anchorBoundingBoxViewport.left, []);
      if (!("+"rip"static"+"rip" != command.position && "+"rip""+"rip" != command.position)) {
        /** @type {string} */
        e.style.position = "+"rip"relative"+"rip";
      }
      if ("+"rip"all"+"rip" == self.handles) {
        /** @type {!Array} */
        tableList = ["+"rip"n"+"rip", "+"rip"w"+"rip", "+"rip"e"+"rip", "+"rip"s"+"rip", "+"rip"nw"+"rip", "+"rip"ne"+"rip", "+"rip"sw"+"rip", "+"rip"se"+"rip"];
      } else {
        self.handles.replace(/([^,\s]+)/g, function(canCreateDiscussions, table) {
          tableList.push(table);
        });
      }
      /** @type {!Array} */
      var items = [];
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var patchLen = tableList.length;
      for (; i < patchLen; i++) {
        items.push(render(e, tableList[i]));
      }
      return {
        destroy : function() {
          /** @type {number} */
          var j = 0;
          /** @type {number} */
          var n_items = items.length;
          for (; j < n_items; j++) {
            items[j].destroy();
          }
        }
      };
    }
  };
}(this);
!function(context) {
  /**
   * @param {!Element} e
   * @param {boolean} firstTime
   * @return {undefined}
   */
  function reset(e, firstTime) {
    /** @type {string} */
    e.className = "+"rip"ui_notif animated fadeOut"+"rip";
    setTimeout(function() {
      if (e.parentNode) {
        e.parentNode.removeChild(e);
      }
    }, firstTime ? 150 : 500);
  }
  /**
   * @param {!Object} data
   * @param {!Object} location
   * @return {undefined}
   */
  function init(data, location) {
    /**
     * @return {undefined}
     */
    function hide() {
      /** @type {number} */
      _takingTooLongTimeout = setTimeout(function() {
        reset(element);
      }, scroll_speed + 2e3);
    }
    if ("+"rip"string"+"rip" == typeof data) {
      if ("+"rip"string"+"rip" == typeof location) {
        data = {
          title : data,
          text : location
        };
        /** @type {null} */
        location = null;
      } else {
        data = {
          text : data
        };
      }
    }
    var e = $extend({}, options, data);
    if (!location) {
      location = e.default;
    }
    var p;
    var rows = e.dest;
    e.text = e.text || e.description || e.body || "+"rip""+"rip";
    var i = location.getAttribute("+"rip"data-js-notif-id"+"rip");
    if (i) {
      p = pieces2[i];
    } else {
      /** @type {!Element} */
      p = document.createElement("+"rip"div"+"rip");
      rows.appendChild(p);
      /** @type {number} */
      p.style.zIndex = 99999;
      var a = location.getBoundingClientRect();
      /** @type {string} */
      p.style.position = "+"rip"fixed"+"rip";
      /** @type {string} */
      p.style.bottom = window.innerHeight - ~~(a.top + a.height / 2) + "+"rip"px"+"rip";
      /** @type {string} */
      p.style.right = window.innerWidth - ~~(a.left + a.width / 2) + "+"rip"px"+"rip";
      location.setAttribute("+"rip"data-js-notif-id"+"rip", pieces2.push(p) - 1);
    }
    /** @type {!Element} */
    var element = document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var s = document.createElement("+"rip"b"+"rip");
    /** @type {!Element} */
    var elementButtonLeft = (a = document.createElement("+"rip"p"+"rip"), document.createElement("+"rip"span"+"rip"));
    /** @type {string} */
    element.style.visibility = "+"rip"hidden"+"rip";
    /** @type {string} */
    element.className = "+"rip"ui_notif"+"rip";
    /** @type {string} */
    elementButtonLeft.innerHTML = "+"rip"&times;"+"rip";
    /** @type {number} */
    var start = 0;
    if (e.title) {
      s.innerHTML = e.title;
      element.appendChild(s);
      start = start + e.title.length;
    }
    a.innerHTML = e.text;
    start = start + e.text.length;
    element.appendChild(a);
    element.appendChild(elementButtonLeft);
    if (!(elementButtonLeft.onclick = function() {
      reset(element, true);
    }) !== e.delay) {
      /**
       * @return {undefined}
       */
      element.onmouseover = function() {
        clearTimeout(_takingTooLongTimeout);
      };
      /**
       * @return {undefined}
       */
      element.onmouseout = function() {
        hide();
      };
    }
    setTimeout(function() {
      /** @type {string} */
      element.style.visibility = "+"rip"visible"+"rip";
      /** @type {string} */
      element.className = "+"rip"ui_notif animated fadeIn"+"rip";
    }, 100);
    p.appendChild(element);
    /** @type {number} */
    start = start / 5;
    var _takingTooLongTimeout;
    var scroll_speed = e.speed || start / 3 * 1e3;
    if (false !== e.delay) {
      hide();
    }
  }
  var options = {
    default : document.body,
    dest : document.body
  };
  /** @type {!Array} */
  var pieces2 = [];
  document.createElement("+"rip"div"+"rip");
  /**
   * @param {?} data
   * @return {undefined}
   */
  init.config = function(data) {
    $extend(options, data);
  };
  /** @type {function(!Object, !Object): undefined} */
  context.$notif = init;
}(this);
!function(root) {
  /**
   * @param {!Object} element
   * @return {undefined}
   */
  function open(element) {
    element.setAttribute("+"rip"aria-hidden"+"rip", false);
    element.setAttribute("+"rip"aria-expanded"+"rip", true);
    element.classList.add("+"rip"ui_menu--open"+"rip");
  }
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  function close(node) {
    node.setAttribute("+"rip"aria-hidden"+"rip", true);
    node.setAttribute("+"rip"aria-expanded"+"rip", false);
    node.classList.remove("+"rip"ui_menu--open"+"rip");
  }
  /**
   * @param {?} id
   * @return {undefined}
   */
  function removeElementAndGroupFromBoundConstraintsIfEmpty(id) {
    if (!default_titles[id]) {
      /** @type {boolean} */
      default_titles[id] = true;
      document.addEventListener("+"rip"mousedown"+"rip", function init(event) {
        /** @type {(EventTarget|null)} */
        var ancestor = event.target;
        for (; ancestor && ancestor.id !== id;) {
          ancestor = ancestor.parentNode;
        }
        if (!ancestor) {
          render();
          document.removeEventListener("+"rip"mousedown"+"rip", init, true);
          /** @type {boolean} */
          default_titles[id] = false;
        }
      }, true);
    }
  }
  /**
   * @param {!Object} context
   * @return {undefined}
   */
  function render(context) {
    /** @type {boolean} */
    var $state = true;
    if ("+"rip"select"+"rip" === context) {
      /** @type {boolean} */
      $state = false;
      /** @type {null} */
      context = null;
    }
    var i = (context || document).querySelectorAll("+"rip".ui_menu__item--focus"+"rip");
    var m_matWorld = (context || document).querySelectorAll("+"rip".ui_menu--open"+"rip");
    var sampleProperty = (context || document).querySelectorAll("+"rip".ui_menu--scroller"+"rip");
    $io.arr.all(i, function(e) {
      /** @type {boolean} */
      indexFromId[e.parentNode.parentNode.id] = false;
      e.classList.remove("+"rip"ui_menu__item--focus"+"rip");
    });
    $io.arr.all(m_matWorld, function(obj) {
      close(obj);
    });
    $io.arr.all(sampleProperty, function(input) {
      input.removeAttribute("+"rip"style"+"rip");
      input.classList.remove("+"rip"ui_menu--scroller"+"rip");
      if (input.classList.contains("+"rip"ui_menu--scroller--active"+"rip")) {
        input.classList.remove("+"rip"ui_menu--scroller--active"+"rip");
      }
      input.removeEventListener("+"rip"mouseover"+"rip", change, false);
    });
    if (!context) {
      if ($state && init.current && init.current.cfg && init.current.cfg.oncancel) {
        init.current.cfg.oncancel();
      }
      if (init.current && init.current.cfg && init.current.cfg.onclose) {
        init.current.cfg.onclose();
      }
      /** @type {null} */
      init.current = null;
    }
  }
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  function change(event) {
    if (event.target.matches("+"rip".ui_menu__right_handler"+"rip")) {
      this.classList.remove("+"rip"ui_menu--scroller--active"+"rip");
    } else {
      this.classList.add("+"rip"ui_menu--scroller--active"+"rip");
    }
  }
  /**
   * @param {!Object} button
   * @param {!Object} callback
   * @param {!Object} opts
   * @return {?}
   */
  function init(button, callback, opts) {
    /**
     * @param {?} key
     * @param {!Element} value
     * @param {!Function} old
     * @return {?}
     */
    function transform(key, value, old) {
      return params[key] ? params[key].push(value) : params[key] = [value], function() {
        var prop;
        var t = params[key];
        /** @type {number} */
        var j = 0;
        var n = t.length;
        for (; j < n; j++) {
          t[j].setAttribute("+"rip"data-menuitem-selected"+"rip", false);
          if ("+"rip"function"+"rip" != typeof(prop = result[t[j].id].val).selected) {
            /** @type {boolean} */
            prop.selected = false;
          }
        }
        if ("+"rip"function"+"rip" != typeof(prop = result[value.id].val).selected) {
          /** @type {boolean} */
          prop.selected = true;
        }
        value.setAttribute("+"rip"data-menuitem-selected"+"rip", true);
        if (old) {
          old.call(this, prop);
        }
      };
    }
    /**
     * @param {!Element} item
     * @param {!Function} element
     * @return {?}
     */
    function update(item, element) {
      return function() {
        /** @type {boolean} */
        var value = "+"rip"true"+"rip" === item.getAttribute("+"rip"data-menuitem-selected"+"rip");
        item.setAttribute("+"rip"data-menuitem-selected"+"rip", !value);
        var enabled = result[item.id].val;
        if ("+"rip"function"+"rip" != typeof enabled.selected && (enabled.selected = !value), element) {
          return element.call(this, !value);
        }
      };
    }
    /**
     * @param {number} cell
     * @param {!Element} p
     * @param {!Object} o
     * @return {undefined}
     */
    function create(cell, p, o) {
      var b = "+"rip"function"+"rip" == typeof o.display ? o.display.call(options.thisArg) : o.display;
      var i = "+"rip"function"+"rip" == typeof o.disabled ? o.disabled.call(options.thisArg) : o.disabled;
      var pstyle = "+"rip"function"+"rip" == typeof o.selected ? o.selected.call(options.thisArg) : o.selected;
      /** @type {string} */
      p.style.display = false === b ? "+"rip"none"+"rip" : "+"rip""+"rip";
      if (i) {
        p.classList.add("+"rip"ui_menu__item--disabled"+"rip");
      } else {
        p.classList.remove("+"rip"ui_menu__item--disabled"+"rip");
      }
      p.setAttribute("+"rip"data-menuitem-selected"+"rip", pstyle);
    }
    /**
     * @param {?} cesiumWidget
     * @return {undefined}
     */
    function _(cesiumWidget) {
      var type;
      for (type in result) {
        if (result.hasOwnProperty(type)) {
          var action = result[type];
          create(0, action.item, action.val);
        }
      }
    }
    /**
     * @param {!Object} event
     * @return {undefined}
     */
    function show(event) {
      if (event && (event.stopImmediatePropagation(), event.preventDefault()), !element.classList.contains("+"rip"ui_menu--open"+"rip")) {
        if (options.solo) {
          render();
        }
        init.current = methods;
        open(element);
        element.style.zIndex = $maxZ("+"rip".ui_menu, .ui_icon, .ui_window"+"rip").num + 1;
        var position = {
          collision : "+"rip"flip"+"rip",
          of : options.position.of || button,
          within : options.position.within
        };
        if (options.position.my) {
          position.my = options.position.my;
        }
        if (options.position.at) {
          position.at = options.position.at;
        }
        anchor = $pos(element, position);
        if (element.getAttribute("+"rip"data-ui-menu-scroller"+"rip")) {
          render(element);
        }
        removeElementAndGroupFromBoundConstraintsIfEmpty(element.id);
      }
    }
    /**
     * @param {!Object} element
     * @return {undefined}
     */
    function render(element) {
      /**
       * @return {undefined}
       */
      function update() {
        if (0 === element.scrollTop) {
          /** @type {boolean} */
          i.disabled = true;
        } else {
          /** @type {boolean} */
          i.disabled = false;
        }
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
          /** @type {boolean} */
          n.disabled = true;
        } else {
          /** @type {boolean} */
          n.disabled = false;
        }
      }
      var i;
      var n;
      var r;
      var M0;
      var dragZone;
      if (element.classList.contains("+"rip"ui_menu--scroller--active"+"rip") && element.classList.remove("+"rip"ui_menu--scroller--active"+"rip"), element.classList.add("+"rip"ui_menu--scroller"+"rip"), 1 == element.childNodes.length) {
        /** @type {!Element} */
        i = document.createElement("+"rip"button"+"rip");
        /** @type {!Element} */
        n = document.createElement("+"rip"button"+"rip");
        /** @type {!Element} */
        r = document.createElement("+"rip"div"+"rip");
        /** @type {string} */
        i.className = "+"rip"ui_menu__up_handler"+"rip";
        /** @type {string} */
        n.className = "+"rip"ui_menu__down_handler"+"rip";
        /** @type {string} */
        r.className = "+"rip"ui_menu__right_handler"+"rip";
        var w = element.firstChild.offsetWidth;
        /** @type {string} */
        i.style.width = n.style.width = w + "+"rip"px"+"rip";
        element.appendChild(i);
        element.appendChild(n);
        element.appendChild(r);
        M0 = element.getBoundingClientRect();
        /** @type {string} */
        i.style.top = M0.top + "+"rip"px"+"rip";
        /** @type {string} */
        n.style.bottom = window.innerHeight - element.offsetHeight - M0.top + "+"rip"px"+"rip";
        /** @type {string} */
        r.style.left = M0.left + w + "+"rip"px"+"rip";
        /**
         * @return {undefined}
         */
        i.onclick = function() {
          element.scrollTop -= 80;
          update();
        };
        /**
         * @return {undefined}
         */
        n.onclick = function() {
          element.scrollTop += 80;
          update();
        };
        /**
         * @return {undefined}
         */
        element.onscroll = function() {
          update();
        };
        update();
      }
      (dragZone = element).addEventListener("+"rip"mouseover"+"rip", change, false);
      dragZone.querySelector("+"rip".ui_menu__up_handler"+"rip").addEventListener("+"rip"mouseover"+"rip", change, false);
    }
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    function init(event) {
      var t = event.target;
      for (; t && "+"rip"LI"+"rip" !== t.tagName;) {
        t = t.parentNode;
      }
      if (t) {
        if (!(false !== options.position && t.classList.contains("+"rip"ui_menu__item--focus"+"rip") || t.classList.contains("+"rip"ui_menu__item--disabled"+"rip"))) {
          $io.arr.each(t.parentNode.childNodes, function(p) {
            if (p.id == t.id) {
              if (options.closeOthers && render(p), "+"rip"bar"+"rip" == options.mode && !indexFromId[element.id] && t.parentNode.parentNode.id == element.id) {
                return;
              }
              if (p.classList.add("+"rip"ui_menu__item--focus"+"rip"), p.classList.contains("+"rip"ui_menu__item--opener"+"rip") && !p.classList.contains("+"rip"ui_menu__item--disabled"+"rip")) {
                if (cache[t.id]) {
                  cache[t.id]();
                }
                var target = p.lastChild;
                if (false === options.position) {
                  /** @type {!Element} */
                  o = p;
                  if ((node = target).classList.contains("+"rip"ui_menu--open"+"rip")) {
                    close(node);
                    o.classList.remove("+"rip"ui_menu__item--focus"+"rip");
                  } else {
                    open(node);
                  }
                } else {
                  /** @type {string} */
                  target.style.position = "+"rip"fixed"+"rip";
                  open(target);
                  /** @type {boolean} */
                  var showPercent = "+"rip"bar"+"rip" == options.mode && t.parentNode.parentNode.id == element.id;
                  if ($pos(target, {
                    my : "+"rip"left top-1"+"rip",
                    at : showPercent ? "+"rip"left bottom"+"rip" : "+"rip"right top"+"rip",
                    of : p,
                    collision : "+"rip"flipfit"+"rip",
                    within : options.position.within || window
                  }), target.getAttribute("+"rip"data-ui-menu-scroller"+"rip") && render(target), options.aim) {
                    var o = target.getBoundingClientRect();
                    if (showPercent) {
                      if (event.pageY < o.bottom) {
                        draw(p, event.pageX, event.pageY, o.left, o.top, o.right, o.top);
                      } else {
                        draw(p, event.pageX, event.pageY, o.left, o.bottom, o.right, o.bottom);
                      }
                    } else {
                      if (event.pageX < o.left) {
                        draw(p, event.pageX, event.pageY, o.left, o.top, o.left, o.bottom);
                      } else {
                        draw(p, event.pageX, event.pageY, o.right, o.top, o.right, o.bottom);
                      }
                    }
                  }
                  removeElementAndGroupFromBoundConstraintsIfEmpty(element.id);
                }
              } else {
                ret(true);
              }
            } else {
              if (options.closeOthers) {
                p.classList.remove("+"rip"ui_menu__item--focus"+"rip");
                render(p);
              }
            }
            var o;
            var node;
          });
        }
      }
    }
    /**
     * @param {!Event} data
     * @return {undefined}
     */
    function handler(data) {
      if ("+"rip"bar"+"rip" == options.mode && (indexFromId[element.id] ? (indexFromId[element.id] = false, render()) : (indexFromId[element.id] = true, init(data))), !this.classList.contains("+"rip"ui_menu__item--disabled"+"rip")) {
        var o = result[this.id].action;
        /** @type {string} */
        var type = typeof o;
        if (!(!k || "+"rip"string"+"rip" != type && "+"rip"function"+"rip" != type)) {
          target.innerHTML = "+"rip"function"+"rip" == type ? o.call(options.thisArg) : o;
          render();
        }
        if ("+"rip"function"+"rip" == type && false !== o.call(options.thisArg, data, result[this.id].val)) {
          render("+"rip"select"+"rip");
        }
      }
    }
    if (!$io.isElement(button)) {
      opts = callback || {};
      /** @type {!Object} */
      callback = button;
      /** @type {!Element} */
      button = document.createElement("+"rip"div"+"rip");
    }
    if (!callback) {
      /** @type {!Array} */
      callback = [];
    }
    var element;
    var data = "+"rip"tree"+"rip" === opts.mode ? $extend({}, defaults, {
      closeOthers : false,
      trigger : "+"rip"click"+"rip",
      position : false
    }) : "+"rip"bar"+"rip" === opts.mode ? $extend({}, defaults, {}) : defaults;
    var options = $extend({}, data, opts);
    /** @type {boolean} */
    var k = false;
    /** @type {boolean} */
    var r = false;
    var cache = {};
    var result = {};
    if ("+"rip"tabs"+"rip" === options.mode) {
      /** @type {boolean} */
      k = true;
      /** @type {string} */
      options.mode = "+"rip"bar"+"rip";
    }
    if ("+"rip"context"+"rip" === options.mode) {
      /** @type {boolean} */
      r = true;
      /** @type {string} */
      options.mode = "+"rip"popup"+"rip";
    }
    if (!options.thisArg) {
      /** @type {!Object} */
      options.thisArg = button;
    }
    var index = {};
    !function handle(callback) {
      $io.obj.all(callback, function(entry) {
        if (entry.key) {
          /**
           * @return {?}
           */
          index[entry.key] = function() {
            return entry.action.apply(this, arguments);
          };
        }
        if ("+"rip"function"+"rip" != typeof entry.items) {
          handle(entry.items);
        }
      });
    }(callback);
    var rs;
    var target;
    var item = $key(options.keyTarget || button).config({
      thisArg : options.thisArg,
      uniqueCombo : true
    }).combo(index);
    if (options.key) {
      var m = {};
      /**
       * @return {undefined}
       */
      m[options.key] = function() {
        show();
      };
      rs = $key().combo(m);
    }
    button.classList.add("+"rip"ui_menu_trigger"+"rip");
    /** @type {string} */
    (element = function render(target, obj, o, done) {
      o = "+"rip"function"+"rip" == typeof o ? o.call(obj.thisArg) : o;
      if (false === o) {
        return false;
      }
      /** @type {!DocumentFragment} */
      var tableDataCellElementOne = document.createDocumentFragment();
      /** @type {!Element} */
      var div = _tmpNode.cloneNode(false);
      /** @type {!Element} */
      var tableRowElementOne = container.cloneNode(false);
      div.appendChild(tableRowElementOne);
      /** @type {string} */
      div.id = "+"rip"ui_menu_"+"rip" + idIncrement++;
      {
        if (!o) {
          return false;
        }
        /** @type {number} */
        var j = 0;
        var c = o.length;
        for (; j < c; j++) {
          if (o[j]) {
            var l = "+"rip"function"+"rip" == typeof o[j].display ? o[j].display.call(obj.thisArg) : o[j].display;
            if (false !== l) {
              var a = o[j];
              /** @type {!Element} */
              var item = element.cloneNode(false);
              if ("+"rip"---"+"rip" !== a.name) {
                /** @type {string} */
                item.id = "+"rip"ui_menu__item_"+"rip" + X++;
                /** @type {!Element} */
                var row = search_item.cloneNode(false);
                /** @type {!Element} */
                var ngRepeatDiv = document.createElement("+"rip"span"+"rip");
                /** @type {!Element} */
                var table = document.createElement("+"rip"span"+"rip");
                /** @type {null} */
                var content = null;
                if (table.className = "+"rip"ui_menu__item__ico"+"rip", void 0 !== a.radio ? (table.className = "+"rip"ui_menu__item__ico ui_form-ico-radio"+"rip", content = transform(a.radio, item, a.action)) : true === a.checkbox && (table.className = "+"rip"ui_menu__item__ico ui_form-ico-checkbox"+"rip", content = update(item, a.action)), row.innerHTML = "+"rip"string"+"rip" == typeof a.name ? a.name : a, a.icon) {
                  if (0 === a.icon.indexOf("+"rip"."+"rip")) {
                    /** @type {!Element} */
                    var result = document.createElement("+"rip"div"+"rip");
                    /** @type {string} */
                    result.className = "+"rip"ui_menu__item__ico"+"rip";
                    var pipelets = a.icon.split("+"rip"."+"rip");
                    pipelets.forEach(function(e) {
                      result.classList.add(e);
                    });
                  } else {
                    if (0 === a.icon.indexOf("+"rip"<"+"rip")) {
                      /** @type {!Element} */
                      result = document.createElement("+"rip"div"+"rip");
                      /** @type {string} */
                      result.className = "+"rip"ui_menu__item__ico"+"rip";
                      result.innerHTML = a.icon;
                    } else {
                      /** @type {!Image} */
                      result = new Image;
                      result.src = a.icon;
                    }
                  }
                  table.appendChild(result);
                } else {
                  /** @type {string} */
                  table.innerHTML = "+"rip"&nbsp;"+"rip";
                }
                if (item.appendChild(table), item.appendChild(row), a.key && (ngRepeatDiv.innerHTML = a.key.replace(/(\+|^)[a-z]/g, function(shortMonthName) {
                  return shortMonthName.toUpperCase();
                }), ngRepeatDiv.className = "+"rip"ui_menu__item__key"+"rip", item.appendChild(ngRepeatDiv)), result[item.id] = {
                  item : item,
                  val : a,
                  action : content || a.action
                }, create(target, item, a), a.items) {
                  item.setAttribute("+"rip"aria-haspopup"+"rip", true);
                  item.classList.add("+"rip"ui_menu__item--opener"+"rip");
                  var template = function(vm, instance, options, o) {
                    return function() {
                      var result = render(vm, instance, options.items, options);
                      if (!result) {
                        /** @type {string} */
                        (result = document.createElement("+"rip"div"+"rip")).innerHTML = '<ul><li class="+"rip"ui_menu__item ui_menu__item--disabled"+"rip"><em>No items...</em></ul></li>';
                      }
                      if (!(result.className = "+"rip"ui_menu__submenu"+"rip") !== instance.position) {
                        close(result);
                      }
                      o.appendChild(result);
                    };
                  }(target, obj, a, item);
                  if (true === obj.recursive) {
                    template();
                  } else {
                    cache[item.id] = template;
                  }
                }
                tableDataCellElementOne.appendChild(item);
              } else {
                /** @type {string} */
                item.className = "+"rip"ui_menu__separator"+"rip";
                item.appendChild(document.createElement("+"rip"hr"+"rip"));
                tableDataCellElementOne.appendChild(item);
              }
            }
          }
        }
      }
      tableRowElementOne.appendChild(tableDataCellElementOne);
      return div;
    }(button, options, callback)).className = "+"rip"ui_menu ui_menu--"+"rip" + ("+"rip"inline"+"rip" === options.mode || "+"rip"popup"+"rip" === options.mode ? "+"rip"menu"+"rip" : options.mode);
    element.setAttribute("+"rip"tabindex"+"rip", "+"rip"0"+"rip");
    element.style.zIndex = $maxZ("+"rip".ui_menu"+"rip", element.parentNode).num + 1;
    if ("+"rip"popup"+"rip" !== options.mode) {
      if (k) {
        button.appendChild(element);
        if (options.dest) {
          target = options.dest;
        } else {
          /** @type {string} */
          (target = document.createElement("+"rip"div"+"rip")).className = "+"rip"ui_menu--tabs__content"+"rip";
          button.appendChild(target);
        }
      } else {
        button.appendChild(element);
      }
    } else {
      document.body.appendChild(element);
      element.classList.add("+"rip"ui_menu--popup"+"rip");
      close(element);
      if (r) {
        button.addEventListener("+"rip"contextmenu"+"rip", show, false);
      } else {
        if ("+"rip"auto"+"rip" === options.trigger) {
          show();
        } else {
          if (options.trigger) {
            button.addEventListener("+"rip"click"+"rip", show, false);
          }
        }
      }
    }
    var anchor;
    var params = {};
    var event = "+"rip"auto"+"rip" == options.trigger ? "+"rip"mouseover"+"rip" : options.trigger;
    if (!event) {
      /** @type {string} */
      event = "+"rip"mouseover"+"rip";
    }
    element.addEventListener(event, init, false);
    /**
     * @param {?} component
     * @return {undefined}
     */
    element.onfocus = function(component) {
      var currTarget = element.querySelector("+"rip".ui_menu__item"+"rip");
      handler.call(currTarget, {
        target : currTarget
      });
    };
    /** @type {boolean} */
    indexFromId[element.id] = false;
    /**
     * @param {?} component
     * @return {undefined}
     */
    element.onblur = function(component) {
      render();
    };
    $el(element).on("+"rip"click"+"rip", "+"rip".ui_menu__item"+"rip", handler);
    var methods = {
      cfg : options,
      destroy : function() {
        $el(element).off("+"rip"click"+"rip", "+"rip".ui_menu__item"+"rip", handler);
        element.removeEventListener(event, init, false);
        /** @type {null} */
        result = cache = null;
        if (item && item.destroy) {
          item.destroy();
        }
        if (rs && rs.destroy) {
          rs.destroy();
        }
      },
      refresh : function(values) {
        if (values) {
          /** @type {!Object} */
          options.thisArg = values;
        }
        _(options.thisArg);
      },
      show : function(object, position) {
        if (object) {
          /** @type {!Object} */
          options.thisArg = object;
          item.config({
            thisArg : object
          });
          _();
        }
        if (position) {
          /** @type {string} */
          options.position = position;
        }
        show();
      },
      setThisArg : function(thisArg) {
        if (thisArg) {
          /** @type {!Object} */
          options.thisArg = thisArg;
          _();
        }
      },
      key : item,
      position : anchor
    };
    return methods;
  }
  /** @type {!Element} */
  var _tmpNode = document.createElement("+"rip"div"+"rip");
  /** @type {!Element} */
  var container = document.createElement("+"rip"ul"+"rip");
  /** @type {!Element} */
  var element = document.createElement("+"rip"li"+"rip");
  /** @type {!Element} */
  var search_item = document.createElement("+"rip"span"+"rip");
  /** @type {number} */
  var idIncrement = 0;
  /** @type {number} */
  var X = 0;
  container.setAttribute("+"rip"role"+"rip", "+"rip"menu"+"rip");
  element.setAttribute("+"rip"role"+"rip", "+"rip"menuitem"+"rip");
  element.setAttribute("+"rip"tabindex"+"rip", "+"rip"-1"+"rip");
  /** @type {string} */
  element.className = "+"rip"ui_menu__item"+"rip";
  /** @type {string} */
  search_item.className = "+"rip"ui_menu__item__text"+"rip";
  var default_titles = {};
  var indexFromId = {};
  var draw;
  var ret;
  var b;
  var y;
  !function() {
    /**
     * @param {string} e
     * @return {undefined}
     */
    function init(e) {
      elem.setAttribute("+"rip"points"+"rip", "+"rip"0,0 0,0 0,0"+"rip");
      setTimeout(function() {
        if ("+"rip"fromTriangle"+"rip" === e) {
          (function(elem, type) {
            if (elem.fireEvent) {
              elem.fireEvent("+"rip"on"+"rip" + type);
            } else {
              /** @type {(Event|null)} */
              var event = document.createEvent("+"rip"Events"+"rip");
              event.initEvent(type, true, false);
              elem.dispatchEvent(event);
            }
          })(document.elementFromPoint(b, y), "+"rip"mouseover"+"rip");
        }
      }, 1);
    }
    var _takingTooLongTimeout;
    var x;
    /** @type {!Element} */
    var element = document.createElementNS("+"rip"http://www.w3.org/2000/svg"+"rip", "+"rip"svg"+"rip");
    /** @type {!Element} */
    var elem = document.createElementNS("+"rip"http://www.w3.org/2000/svg"+"rip", "+"rip"polygon"+"rip");
    elem.setAttribute("+"rip"points"+"rip", "+"rip"0,0 0,0 0,0"+"rip");
    elem.setAttribute("+"rip"fill"+"rip", "+"rip"transparent"+"rip");
    /** @type {string} */
    elem.style.cssText = "+"rip"pointer-events:auto;"+"rip";
    /** @type {string} */
    element.style.cssText = "+"rip"pointer-events:none;position:fixed;top:0;left:0;bottom:0;right:0;width:100%;height:100%;z-index:1"+"rip";
    element.appendChild(elem);
    document.body.appendChild(element);
    document.addEventListener("+"rip"mousemove"+"rip", function(start) {
      /** @type {number} */
      b = x = x2 = start.pageX;
      /** @type {number} */
      y = y2 = start.pageY;
      if (y2 >= fixedMargins.top + 3 && y2 <= fixedMargins.bottom - 3) {
        elem.setAttribute("+"rip"points"+"rip", x2 + "+"rip","+"rip" + y2 + "+"rip" "+"rip" + right + "+"rip","+"rip" + eventName + "+"rip" "+"rip" + value + "+"rip","+"rip" + top);
      }
    });
    /**
     * @param {!MouseEvent} event
     * @return {undefined}
     */
    elem.onmousemove = function(event) {
      if (!function(left, canCreateDiscussions) {
        if (right === value) {
          return x2 < right ? right - left <= right - x : right - x <= right - left;
        }
      }(event.pageX, event.pageY)) {
        init("+"rip"fromTriangle"+"rip");
      } else {
        clearTimeout(_takingTooLongTimeout);
        /** @type {number} */
        _takingTooLongTimeout = setTimeout(function() {
          init("+"rip"fromTriangle"+"rip");
        }, 100);
      }
      setTimeout(function() {
        x = event.pageX;
        event.pageY;
      }, 1);
    };
    var x2;
    var y2;
    var right;
    var eventName;
    var value;
    var top;
    var fixedMargins = {};
    /**
     * @param {!Element} e
     * @param {number} w
     * @param {number} h
     * @param {string} r
     * @param {string} event
     * @param {string} scale
     * @param {string} height
     * @return {undefined}
     */
    draw = function(e, w, h, r, event, scale, height) {
      fixedMargins = e.getBoundingClientRect();
      e.appendChild(element);
      x = x2 = w;
      /** @type {number} */
      y2 = h;
      /** @type {string} */
      right = r;
      /** @type {string} */
      eventName = event;
      /** @type {string} */
      value = scale;
      /** @type {string} */
      top = height;
    };
    /** @type {function(string): undefined} */
    ret = init;
  }();
  var defaults = {
    mode : "+"rip"popup"+"rip",
    icons : "+"rip"auto"+"rip",
    recursive : false,
    hide : false,
    solo : true,
    aim : true,
    display : true,
    closeOthers : true,
    trigger : "+"rip"mouseover"+"rip",
    onclose : null,
    position : {
      within : window
    }
  };
  /**
   * @param {?} data
   * @return {undefined}
   */
  init.config = function(data) {
    $extend(defaults, data);
  };
  /**
   * @param {!Array} data
   * @param {!Array} key
   * @return {?}
   */
  init.extend = function(data, key) {
    var value = $extend([], data);
    return $io.obj.all(key, function($, originalBaseURL) {
      originalBaseURL.replace(/^((after|before|replace|delete|extend):)?(([\d.]+)|(.*))/, function(canCreateDiscussions, isSlidingUp, undefined, n, clusterShardData, uMatches) {
        if (clusterShardData) {
          var s = clusterShardData.split("+"rip"."+"rip");
          /** @type {number} */
          var i = +s.pop();
          var result = value;
          $io.arr.all(s, function(step) {
            /** @type {number} */
            var index = +step;
            result = result[index].items ? result[index].items : result[index];
          });
        } else {
          if (uMatches) {
            var c = function merge(obj, a) {
              var ret;
              return $io.arr.each(a, function(node, endMousePos) {
                return node.name === obj ? !(ret = {
                  arr : a,
                  pos : endMousePos
                }) : (node.items && (ret = merge(obj, node.items)), !ret && void 0);
              }), ret;
            }(uMatches, value);
            result = c.arr;
            i = c.pos;
          }
        }
        if (undefined && "+"rip"before"+"rip" !== undefined) {
          if ("+"rip"after"+"rip" === undefined) {
            $io.arr.insert(result, $, i + 1);
          } else {
            if ("+"rip"extend"+"rip" === undefined) {
              result[i] = $extend({}, result[i], $[0]);
            } else {
              if ("+"rip"replace"+"rip" === undefined) {
                result[i] = $[0];
              } else {
                if ("+"rip"delete"+"rip" === undefined) {
                  result.splice(i, 1);
                }
              }
            }
          }
        } else {
          $io.arr.insert(result, $, i);
        }
      });
    }), value;
  };
  /** @type {function(!Object, !Object, !Object): ?} */
  root.$menu = init;
}(window);
!function(options) {
  /**
   * @param {string} size
   * @param {!Function} refresh
   * @return {undefined}
   */
  function remove(size, refresh) {
    if (size) {
      var args = size.split(/\s+/);
      /** @type {number} */
      var i = 0;
      var argsLength = args.length;
      for (; i < argsLength; i++) {
        refresh(args[i]);
      }
    }
  }
  /**
   * @param {?} obj
   * @return {undefined}
   */
  function Schema(obj) {
    $extend(this, obj);
  }
  /**
   * @param {!Object} item
   * @param {!Object} options
   * @param {string} url
   * @param {string} i
   * @param {!Object} obj
   * @return {?}
   */
  function init(item, options, url, i, obj) {
    /**
     * @param {?} data
     * @param {string} type
     * @param {?} key
     * @return {?}
     */
    function debug(data, type, key) {
      return data = exports[type][key].call(options, data, $extend({}, options[type][key]));
    }
    var el = item.el;
    /** @type {!DocumentFragment} */
    var fragment = document.createDocumentFragment();
    if (!options) {
      return {
        fragment : fragment
      };
    }
    if ("+"rip"object"+"rip" === options.type) {
      /** @type {!Element} */
      var a = svg.cloneNode(true);
      /** @type {string} */
      (root = search_item.cloneNode(true)).className = "+"rip"ui_form__tab ui_form__object"+"rip";
      /** @type {string} */
      root.id = "+"rip"ui_form__tab_"+"rip" + item.id + "+"rip"_"+"rip" + widgetUniqueIDIndex++;
      item.fields[i + "+"rip"{}"+"rip"] = child = new Schema({
        type : "+"rip"object"+"rip",
        path : i,
        fields : {},
        div : root
      });
      if (options.title || url) {
        a.textContent = options.title || url;
        root.appendChild(a);
      }
      /** @type {!Element} */
      var node = parentFrom.cloneNode(true);
      if (remove(options.className, function(e) {
        node.classList.add(e);
        root.classList.add("+"rip"ui_form__object--"+"rip" + e.replace(/ui_form[-_]*/, "+"rip""+"rip"));
      }), options.description) {
        /** @type {string} */
        (element = document.createElement("+"rip"div"+"rip")).className = "+"rip"ui_form__description"+"rip";
        element.innerHTML = options.description;
        root.appendChild(element);
      }
      if ($io.obj.each(options.properties, function(config, key) {
        var data = init(item, config, key, i ? i + "+"rip"."+"rip" + key : key, obj && obj.hasOwnProperty(key) ? obj[key] : null);
        child.fields[key] = data;
        node.appendChild(data.fragment);
      }), root.appendChild(node), options.help) {
        /** @type {!Element} */
        var item = document.createElement("+"rip"div"+"rip");
        /** @type {string} */
        item.className = "+"rip"ui_form__help"+"rip";
        item.innerHTML = options.help;
        root.appendChild(item);
      }
      $io.obj.all(options.plugin, function(entry__3995__auto__, name) {
        if (exports.plugin[name]) {
          exports.plugin[name].call(options, child, options.plugin[name], entry__3995__auto__);
        }
      });
      fragment.appendChild(child.div);
    } else {
      if ("+"rip"array"+"rip" === options.type) {
        /**
         * @param {!Object} e
         * @return {?}
         */
        var run = function(e) {
          /** @type {!Element} */
          var self = document.createElement("+"rip"div"+"rip");
          /** @type {string} */
          self.className = "+"rip"ui_toolbar ui_form__array__item"+"rip";
          var ret = init(item, options.items, "+"rip""+"rip", i + "+"rip"."+"rip" + index++, e);
          self.appendChild(ret.fragment);
          /** @type {!Element} */
          var element = document.createElement("+"rip"div"+"rip");
          return element.className = "+"rip"ui_form__array__btns"+"rip", render(element, "+"rip"remove"+"rip", function() {
            self.remove();
            f();
          }), render(element, "+"rip"up"+"rip", function() {
            parent.insertBefore(self, self.previousSibling);
            f();
          }), render(element, "+"rip"down"+"rip", function() {
            parent.insertBefore(self, self.nextSibling.nextSibling);
            f();
          }), self.appendChild(element), parent.appendChild(self), f(true), ret;
        };
        /**
         * @param {!Node} item
         * @param {string} i
         * @param {string} n
         * @return {undefined}
         */
        var render = function(item, i, n) {
          /** @type {!Element} */
          var element = td.cloneNode();
          /** @type {string} */
          element.className = "+"rip"ui_form__array_btn ui_form__btn_"+"rip" + i;
          element.innerHTML = exports.default[i];
          /** @type {string} */
          element.onclick = n;
          item.appendChild(element);
        };
        /**
         * @param {boolean} three
         * @return {undefined}
         */
        var f = function(three) {
          /** @type {!Array} */
          var points = [];
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var responsiveLayoutsCount = parent.children.length;
          for (; i < responsiveLayoutsCount; i++) {
            if (parent.children[i].classList.contains("+"rip"ui_form__array__item"+"rip")) {
              points.push(parent.children[i]);
            }
          }
          if (three) {
            var j;
            var pointsLen;
          }
          /** @type {number} */
          j = 0;
          /** @type {number} */
          pointsLen = points.length;
          for (; j < pointsLen; j++) {
            /** @type {string} */
            var trumbowygIconsId = "+"rip"ui_form_temp"+"rip" + j + (Math.random() + "+"rip""+"rip").slice(2);
            /** @type {string} */
            points[j].id = trumbowygIconsId;
            /** @type {boolean} */
            parent.querySelector("+"rip"#"+"rip" + trumbowygIconsId + "+"rip" > .ui_form__array__btns > .ui_form__btn_up"+"rip").disabled = 0 === j;
            /** @type {boolean} */
            parent.querySelector("+"rip"#"+"rip" + trumbowygIconsId + "+"rip" > .ui_form__array__btns > .ui_form__btn_down"+"rip").disabled = j === pointsLen - 1;
            /** @type {string} */
            points[j].id = "+"rip""+"rip";
          }
          m();
        };
        /**
         * @return {undefined}
         */
        var m = function() {
          var lastTrackTitle;
          var promisedPages = el.querySelectorAll("+"rip"[name]"+"rip");
          /** @type {!Array} */
          var deltas = [];
          /** @type {number} */
          var redIndex = 0;
          /** @type {number} */
          var id = 0;
          var length = promisedPages.length;
          for (; id < length; id++) {
            var page = promisedPages[id];
            /** @type {number} */
            var i = -1;
            /** @type {null} */
            var track = null;
            var node = page.parentNode;
            for (; node && 1 == node.nodeType;) {
              if (node.classList.contains("+"rip"ui_form__array__item"+"rip")) {
                if (!track) {
                  track = node;
                }
                i++;
              }
              node = node.parentNode;
            }
            if (-1 < i) {
              if (void 0 === deltas[i]) {
                /** @type {number} */
                deltas[i] = -1;
              }
              if (lastTrackTitle !== track) {
                if (redIndex < i) {
                  /** @type {number} */
                  deltas[i] = 0;
                } else {
                  deltas[i]++;
                }
              }
              var keywords = page.name;
              /** @type {number} */
              var s = 0;
              var index = keywords.replace(/(\.?)(\d+)(?![^.\s])/g, function(isSlidingUp, pos3, n) {
                return pos3 + deltas[s++];
              });
              page.name = index;
              /** @type {string} */
              page.id = "+"rip"ui_form__"+"rip" + index;
              lastTrackTitle = track;
              /** @type {number} */
              redIndex = i;
            } else {
              /** @type {number} */
              deltas.length = 0;
            }
          }
        };
        /** @type {!Element} */
        a = svg.cloneNode(true);
        var root;
        /** @type {!Element} */
        var parent = root = search_item.cloneNode(true);
        /** @type {string} */
        root.className = "+"rip"ui_form__tab ui_form__array"+"rip";
        /** @type {string} */
        root.id = "+"rip"ui_form__tab_"+"rip" + item.id + "+"rip"_"+"rip" + widgetUniqueIDIndex++;
        item.fields[i + "+"rip"[]"+"rip"] = child = new Schema({
          type : "+"rip"array"+"rip",
          path : i,
          div : root,
          addItem : run,
          reorder : m,
          setValue : function(obj, value) {
            $io.arr.all(document.querySelectorAll("+"rip"#"+"rip" + root.id + "+"rip" .ui_form__array__item"+"rip"), function(inventoryService) {
              inventoryService.remove();
            });
            /** @type {number} */
            index = 0;
            length = obj.length;
            /** @type {!Array} */
            var toReturn = [];
            for (; index < length;) {
              var response = run(obj[index]);
              toReturn.push(response);
              value(obj[index - 1], response);
            }
            return toReturn;
          }
        });
        remove(options.className, function(e) {
          root.classList.add(e);
        });
        /** @type {string} */
        a.innerHTML = (options.title || url) + "+"rip"&nbsp;"+"rip";
        /** @type {!Element} */
        var pre = td.cloneNode(true);
        /** @type {string} */
        pre.className = "+"rip"ui_form__array_btn ui_form__btn_add"+"rip";
        /** @type {string} */
        pre.innerHTML = exports.default.add;
        /**
         * @return {undefined}
         */
        pre.onclick = function() {
          run();
        };
        a.appendChild(pre);
        /** @type {!Element} */
        var el = rowTmpl.cloneNode();
        /** @type {string} */
        el.name = i;
        /** @type {string} */
        el.value = i;
        el.setAttribute("+"rip"data-is-array"+"rip", true);
        a.appendChild(el);
        root.appendChild(a);
        if (!obj) {
          /** @type {!Array} */
          obj = [];
        }
        /** @type {number} */
        var index = 0;
        var length = obj.length;
        for (; index < length;) {
          run(obj[index]);
        }
        $io.obj.all(options.plugin, function(entry__3995__auto__, name) {
          if (exports.plugin[name]) {
            exports.plugin[name].call(options, child, options.plugin[name], entry__3995__auto__);
          }
        });
        fragment.appendChild(child.div);
      } else {
        if ("+"rip"string"+"rip" !== options.type && "+"rip"boolean"+"rip" !== options.type && "+"rip"number"+"rip" !== options.type && "+"rip"integer"+"rip" !== options.type) {
          throw new Error("+"rip"$form: unknown schema type : "+"rip" + options.type);
        }
        /** @type {!Element} */
        node = parentFrom.cloneNode();
        var self;
        var element;
        var child;
        /** @type {!Element} */
        var label = lablist.cloneNode();
        if (node.className = "+"rip"ui_form__field"+"rip", remove(options.className, function(e) {
          node.classList.add(e);
        }), exports.format[options.format] ? self = exports.format[options.format].call(options) : options.enum ? (self = masterOutputSelector.cloneNode(), $io.arr.all(options.enum, function(value) {
          if (Array.isArray(value)) {
            /** @type {!Option} */
            self.options[self.options.length] = new Option(value[0], value[1]);
          } else {
            /** @type {!Option} */
            self.options[self.options.length] = new Option(value, value);
          }
        })) : "+"rip"textarea"+"rip" === options.format ? self = input.cloneNode() : (self = rowTmpl.cloneNode(), "+"rip"string"+"rip" === options.type && (self.type = "+"rip"text"+"rip"), "+"rip"number"+"rip" !== options.type && "+"rip"integer"+"rip" !== options.type || (self.type = "+"rip"number"+"rip")), "+"rip"boolean"+"rip" === options.type) {
          /** @type {string} */
          self.type = "+"rip"checkbox"+"rip";
          if ("+"rip"boolean"+"rip" == typeof obj) {
            /** @type {!Object} */
            self.checked = obj;
          } else {
            if (options.default) {
              self.checked = options.default;
            }
          }
          document.createElement("+"rip"span"+"rip");
        } else {
          if (null != obj) {
            /** @type {!Object} */
            self.value = obj;
          } else {
            if (options.default) {
              self.value = options.default;
            }
          }
        }
        if (options.placeholder) {
          self.placeholder = options.placeholder;
        }
        if (true !== options.ignore) {
          /** @type {string} */
          self.name = i;
        }
        /** @type {string} */
        self.id = "+"rip"ui_form__"+"rip" + i;
        label.setAttribute("+"rip"for"+"rip", "+"rip"ui_form__"+"rip" + i);
        label.innerHTML = options.title || url;
        if (true === item.cfg.disabled || true === options.disabled || true === options.createOnly && false === item.cfg.create) {
          /** @type {boolean} */
          self.disabled = true;
        }
        if (options.pattern) {
          self.setAttribute("+"rip"pattern"+"rip", options.pattern);
        }
        if (options.attributes) {
          $io.obj.all(options.attributes, function(data, time) {
            if ("+"rip"required"+"rip" === time) {
              options.required;
            }
            if ("+"rip"function"+"rip" == typeof data) {
              /** @type {!Function} */
              self[time] = data;
            } else {
              self.setAttribute(time, data);
            }
          });
        }
        if (true === options.required) {
          /** @type {string} */
          label.innerHTML = label.innerHTML + ' <span title="+"rip"required"+"rip" class="+"rip"ui_form__required"+"rip">*</span>';
          /** @type {boolean} */
          self.required = true;
        }
        if (options.description) {
          /** @type {string} */
          (element = document.createElement("+"rip"div"+"rip")).className = "+"rip"ui_form__description"+"rip";
          element.innerHTML = options.description;
        }
        item.fields[i] = child = new Schema({
          type : options.type,
          path : i,
          div : node,
          input : self,
          actionZone : self,
          label : label,
          getValue : function() {
            return this.input.value;
          },
          setValue : function(value) {
            /** @type {!Object} */
            this.input.value = value;
          },
          setFocus : function() {
            this.input.focus();
          },
          onFocus : function(input) {
            /** @type {(RegExp|string)} */
            this.input.onfocus = input;
          },
          onBlur : function(callback) {
            /** @type {!Function} */
            this.input.onblur = callback;
          },
          onModif : function(callback) {
            this.input.oninput = this.input.onkeyup = this.input.onchange = callback;
          }
        });
        if (exports.type[options.type] && "+"rip"function"+"rip" == typeof exports.type[options.type]) {
          debug(child, "+"rip"type"+"rip", options.type);
        }
        options.plugin = options.plugin || [];
        if (options.format && exports.plugin[options.format]) {
          /** @type {boolean} */
          options.plugin[options.format] = true;
        }
        $io.obj.all(options.plugin, function(canCreateDiscussions, name) {
          if (exports.plugin[name]) {
            debug(child, "+"rip"plugin"+"rip", name);
          }
        });
        if ("+"rip"boolean"+"rip" === options.type) {
          child.div.appendChild(child.actionZone);
          child.div.appendChild(child.label);
          if (element) {
            child.div.appendChild(element);
          }
        } else {
          child.div.appendChild(child.label);
          if (element) {
            child.div.appendChild(element);
          }
          child.div.appendChild(child.actionZone);
        }
        if (options.hidden) {
          child.div.classList.add("+"rip"hide"+"rip");
        }
        fragment.appendChild(child.div);
      }
    }
    return Object.defineProperty(child, "+"rip"fragment"+"rip", {
      get : function() {
        return delete child.fragment, fragment;
      },
      configurable : true
    }), child;
  }
  /**
   * @param {!Object} e
   * @param {?} t
   * @return {?}
   */
  function exports(e, t) {
    return "+"rip"FORM"+"rip" == e.nodeName ? exports.data(e) : exports.build(e, t);
  }
  /**
   * @param {!Object} result
   * @return {undefined}
   */
  function toObject(result) {
    var name = result.getAttribute("+"rip"data-form-id"+"rip");
    if (name && exports.instances[name]) {
      var items = exports.instances[name].fields;
      var i;
      for (i in items) {
        if (items.hasOwnProperty(i) && items[i].save) {
          items[i].save();
        }
      }
    }
  }
  /** @type {number} */
  var _g = 0;
  /** @type {!Element} */
  var form = document.createElement("+"rip"form"+"rip");
  /** @type {!Element} */
  var svg = document.createElement("+"rip"legend"+"rip");
  /** @type {!Element} */
  var search_item = document.createElement("+"rip"div"+"rip");
  /** @type {!Element} */
  var parentFrom = document.createElement("+"rip"div"+"rip");
  /** @type {!Element} */
  var lablist = document.createElement("+"rip"label"+"rip");
  /** @type {!Element} */
  var rowTmpl = document.createElement("+"rip"input"+"rip");
  /** @type {!Element} */
  var input = document.createElement("+"rip"textarea"+"rip");
  /** @type {!Element} */
  var masterOutputSelector = document.createElement("+"rip"select"+"rip");
  /** @type {!Element} */
  var td = (document.createElement("+"rip"option"+"rip"), document.createElement("+"rip"button"+"rip"));
  td.setAttribute("+"rip"type"+"rip", "+"rip"button"+"rip");
  input.setAttribute("+"rip"rows"+"rip", 4);
  /** @type {string} */
  search_item.className = "+"rip"ui_form__tab"+"rip";
  /** @type {string} */
  form.className = "+"rip"ui_form"+"rip";
  /** @type {number} */
  var widgetUniqueIDIndex = 0;
  /** @type {!Array<string>} */
  var NOT_VISIBLE_TRIGGER_TYPES = "+"rip"string number boolean null"+"rip".split("+"rip" "+"rip");
  exports.instances = {};
  /**
   * @param {!Object} options
   * @param {?} obj
   * @return {?}
   */
  exports.build = function(options, obj) {
    /** @type {number} */
    widgetUniqueIDIndex = 0;
    var extended = $extend({}, obj);
    /** @type {number} */
    var i = _g++;
    /** @type {!Element} */
    var div = form.cloneNode();
    /** @type {string} */
    var r = "+"rip"ui_form_"+"rip" + i;
    /** @type {string} */
    div.id = r;
    div.setAttribute("+"rip"data-form-id"+"rip", i);
    if (!options.schema) {
      options.schema = function add(name, obj) {
        obj = {};
        /** @type {string} */
        var type = typeof name;
        return -1 < NOT_VISIBLE_TRIGGER_TYPES.indexOf(type) ? obj.type = type : Array.isArray(name) ? (obj.type = "+"rip"array"+"rip", obj.items = add(name[0])) : $io.isObject(name) && (obj.type = "+"rip"object"+"rip", obj.properties = {}, $io.obj.all(name, function(i, key) {
          obj.properties[key] = add(i);
        })), obj;
      }(options);
      /** @type {!Object} */
      options.data = options;
    }
    if (options.schema.type) {
      options.schema = $extend({}, options.schema);
    } else {
      options.schema = {
        type : "+"rip"object"+"rip",
        properties : $extend({}, options.schema)
      };
    }
    options.schema = function f(p) {
      return p.properties && $io.obj.all(p.properties, function(res, sceneUid) {
        if ("+"rip"object"+"rip" === res.type) {
          res = f(res);
        }
        if (p.required && -1 < p.required.indexOf(sceneUid)) {
          /** @type {boolean} */
          res.required = true;
        }
      }), p;
    }(options.schema);
    var button;
    var model = exports.instances[i] = {
      id : i,
      el : div,
      cfg : extended,
      schema : options.schema,
      data : options.data,
      fields : {},
      destroy : function() {
        this.el.remove();
        delete exports.instances[i];
      }
    };
    button = options.data ? init(model, options.schema, "+"rip""+"rip", "+"rip""+"rip", $extend({}, options.data)).fragment : init(model, options.schema, "+"rip""+"rip", "+"rip""+"rip").fragment;
    /** @type {!Element} */
    var submit = document.createElement("+"rip"button"+"rip");
    return submit.type = "+"rip"submit"+"rip", submit.style.display = "+"rip"none"+"rip", button.appendChild(submit), div.appendChild(button), model;
  };
  /**
   * @param {?} obj
   * @param {!Object} event
   * @return {undefined}
   */
  exports.onvalidate = function(obj, event) {
    console.log(obj, event);
  };
  /**
   * @param {!Object} options
   * @return {?}
   */
  exports.validate = function(options) {
    toObject(options);
    /** @type {boolean} */
    var acc = true;
    var val = "+"rip"FORM"+"rip" === options.tagName ? options.elements : options.length ? options : [options];
    return $io.arr.each(val, function(elem, canCreateDiscussions) {
      if (!elem.validity.valid) {
        /** @type {boolean} */
        acc = false;
        exports.onvalidate(elem.validationMessage, elem);
        if (0 === canCreateDiscussions) {
          elem.select();
          elem.focus();
        }
      }
    }), acc;
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  exports.data = function(obj) {
    toObject(obj);
    var value;
    var j;
    var i = {};
    return $io.arr.all(obj.elements, function(data) {
      if ("+"rip""+"rip" !== data.name && !data.disabled) {
        if ("+"rip"checkbox"+"rip" === data.type) {
          $io.obj.path(i, data.name, !!data.checked);
        } else {
          if ("+"rip"number"+"rip" === data.type) {
            $io.obj.path(i, data.name, parseInt(data.value));
          } else {
            if ("+"rip"select-multiple"+"rip" === data.type) {
              /** @type {!Array} */
              value = [];
              /** @type {number} */
              j = data.options.length - 1;
              for (; 0 <= j; j = j - 1) {
                if (data.options[j].selected) {
                  value.push(data.options[j].value);
                }
              }
              $io.obj.path(i, data.name, value);
            } else {
              if (data.getAttribute("+"rip"data-is-array"+"rip")) {
                $io.obj.path(i, data.name, []);
              } else {
                $io.obj.path(i, data.name, data.value);
              }
            }
          }
        }
      }
    }), i;
  };
  /**
   * @param {!Object} opts
   * @param {!Array} propOrCb
   * @return {undefined}
   */
  exports.update = function(opts, propOrCb) {
    console.warn("+"rip"WARNING - TODO $form.update() with array"+"rip");
    if (propOrCb) {
      $io.obj.all(propOrCb, function(initSBC, s) {
        if (opts[s]) {
          /** @type {!Object} */
          opts[s].value = initSBC;
        }
      });
    } else {
      $io.arr.all(opts.elements, function(thisfield) {
        /** @type {string} */
        thisfield.value = "+"rip""+"rip";
      });
    }
  };
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  exports.disable = function(options) {
    $io.arr.all(options.elements, function(showCalloutAnimation) {
      if (showCalloutAnimation.disabled) {
        /** @type {boolean} */
        showCalloutAnimation.wasDisbled = true;
      }
      /** @type {boolean} */
      showCalloutAnimation.disabled = true;
    });
  };
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  exports.enable = function(options) {
    $io.arr.all(options.elements, function(showCalloutAnimation) {
      if (!showCalloutAnimation.wasDisbled) {
        /** @type {boolean} */
        showCalloutAnimation.disabled = false;
      }
    });
  };
  exports.plugin = {};
  exports.format = {};
  exports.type = {};
  exports.default = {
    add : "+"rip"+"+"rip",
    remove : "+"rip"-"+"rip",
    up : "+"rip"up"+"rip",
    down : "+"rip"down"+"rip"
  };
  /** @type {function(!Object, ?): ?} */
  options.$form = exports;
}(this);
!function(canCreateDiscussions) {
  /**
   * @param {!Object} options
   * @param {!Object} data
   * @return {?}
   */
  $form.plugin.explorer = function(options, data) {
    /** @type {!Element} */
    var obj = document.createElement("+"rip"div"+"rip");
    return options.btn = document.createElement("+"rip"button"+"rip"), options.btn.innerHTML = '<img height=16 width=16 src="+"rip"' + le._path.skin + 'places/16/folder-open.png"+"rip">', obj.className = "+"rip"ui_form_combo w100"+"rip", obj.appendChild(options.actionZone), obj.appendChild(options.btn), options.actionZone = obj, options.btn.onclick = function(event) {
      event.preventDefault();
      setTimeout(function() {
        $explorer($extend({
          path : "+"rip"/"+"rip",
          browse : true,
          onclose : function(name, e) {
            if (name) {
              /** @type {!Object} */
              options.input.value = e;
              $el(options.input).trigger("+"rip"change"+"rip");
            }
          }
        }, data));
      }, 0);
    }, options;
  };
  /**
   * @param {!Object} name
   * @param {!Object} options
   * @return {?}
   */
  $form.plugin.icon = function(name, options) {
    /**
     * @return {undefined}
     */
    function test() {
      /** @type {string} */
      closeButton.style.backgroundImage = "+"rip"url("+"rip" + name.input.value + "+"rip")"+"rip";
    }
    document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var closeButton = document.createElement("+"rip"button"+"rip");
    return closeButton.type = "+"rip"button"+"rip", closeButton.className = "+"rip"block left mr10 h50p w50p"+"rip", closeButton.style.backgroundRepeat = "+"rip"no-repeat"+"rip", closeButton.style.backgroundPosition = "+"rip"center"+"rip", closeButton.style.backgroundSize = "+"rip"32px 32px"+"rip", name.input.value || (name.input.value = "+"rip"/c/sys/skins/w93/shortcut.png"+"rip"), name.input.value = $fs.utils.normalizeIcon(name.input.value), test(), closeButton.onclick = function(event) {
      event.preventDefault();
      setTimeout(function() {
        $explorer($extend({
          path : "+"rip"/c/files/images/icons/"+"rip",
          accept : "+"rip"image/*"+"rip",
          browse : true,
          onclose : function(name, e) {
            if (name) {
              /** @type {!Object} */
              name.input.value = e;
              test();
            }
          }
        }, options));
      }, 0);
    }, setTimeout(function() {
      var self = name.input.form;
      if (options && options.watch && self[options.watch]) {
        self[options.watch].addEventListener("+"rip"change"+"rip", function(canCreateDiscussions) {
          if ("+"rip"/c/sys/skins/w93/shortcut.png"+"rip" === name.input.value) {
            var _startingFret;
            var i = (this.value || "+"rip""+"rip").split("+"rip" "+"rip")[0];
            if ((_startingFret = le._apps[i] && le._apps[i].icon ? le._apps[i].icon : $fs.utils.getIcon(this.value)) && "+"rip"/c/sys/skins/w93/file.png"+"rip" !== _startingFret) {
              name.input.value = _startingFret;
              test();
            }
          }
        }, false);
        $el(self[options.watch]).trigger("+"rip"change"+"rip");
      }
      self.insertBefore(closeButton, self.firstChild);
    }, 0), name.div.classList.add("+"rip"hide"+"rip"), name;
  };
}();
!function(self) {
  /**
   * @param {string} config
   * @return {?}
   */
  function init(config) {
    /**
     * @param {!Object} config
     * @return {undefined}
     */
    function _boxStructure(config) {
      var path = config.init.call(options);
      if (path) {
        /** @type {!Element} */
        config.el = document.createElement("+"rip"button"+"rip");
        /** @type {string} */
        config.el.className = (config.className || "+"rip"ui_window__head__"+"rip" + config.name) + ("+"rip"string"+"rip" == typeof path ? "+"rip" "+"rip" + path : "+"rip""+"rip");
        if (config.title) {
          config.el.title = config.title;
        }
        /**
         * @param {!Event} event
         * @return {undefined}
         */
        config.el.onclick = function(event) {
          config.action.call(me, event);
        };
        canvas.appendChild(config.el);
      }
    }
    /**
     * @param {!Event} e
     * @return {undefined}
     */
    function q(e) {
      e.preventDefault();
      $.show(me, {
        at : "+"rip"left+10 bottom+10"+"rip",
        of : e,
        within : options.dest
      });
    }
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    function listener(event) {
      event.preventDefault();
      $.show(me, {
        of : this,
        within : options.dest
      });
    }
    /**
     * @return {undefined}
     */
    function render() {
      var width = options.baseWidth ? options.baseWidth : node.offsetWidth;
      var t = options.baseHeight ? options.baseHeight : node.offsetHeight;
      /** @type {boolean} */
      var rtl = false;
      /** @type {boolean} */
      var yWindow = false;
      if (x < width && (width = x, rtl = true), y < t && (t = y, yWindow = true), node.style.height = t + "+"rip"px"+"rip", node.style.width = width + "+"rip"px"+"rip", container.classList.add("+"rip"ui_window__body--flex"+"rip"), container.removeAttribute("+"rip"style"+"rip"), true === options.minHeight ? node.style.minHeight = node.style.height : options.minHeight && (node.style.minHeight = "+"rip"auto"+"rip" == options.minHeight ? "+"rip"auto"+"rip" : options.minHeight + "+"rip"px"+"rip"), true === options.minWidth ? node.style.minWidth = node.style.width : options.minWidth && 
      (node.style.minWidth = "+"rip"auto"+"rip" == options.minWidth ? "+"rip"auto"+"rip" : options.minWidth + "+"rip"px"+"rip"), options.center) {
        /** @type {string} */
        options.top = ~~((y - t) / 2) + "+"rip"px"+"rip";
        /** @type {string} */
        options.left = ~~((x - width) / 2) + "+"rip"px"+"rip";
      } else {
        if (options.top) {
          if (options.noOut && options.top > y - t) {
            /** @type {boolean} */
            options.maxTop = true;
            /** @type {string} */
            options.top = y - t + "+"rip"px"+"rip";
            /** @type {string} */
            node.style.top = options.top;
          }
        } else {
          /** @type {number} */
          var newTop = ~~(Math.random() * (y - t));
          /** @type {string} */
          options.top = newTop + "+"rip"px"+"rip";
        }
        if (options.left) {
          if (options.noOut && options.left > x - width) {
            /** @type {boolean} */
            options.maxLeft = true;
            /** @type {string} */
            options.left = x - width + "+"rip"px"+"rip";
            /** @type {string} */
            node.style.left = options.left;
          }
        } else {
          /** @type {number} */
          var newLeft = ~~(Math.random() * (x - width));
          /** @type {string} */
          options.left = newLeft + "+"rip"px"+"rip";
        }
      }
      if ("+"rip"-4000px"+"rip" === node.style.top) {
        node.style.top = yWindow ? 0 : options.top;
      }
      if ("+"rip"-4000px"+"rip" === node.style.left) {
        node.style.left = rtl ? 0 : options.left;
      }
    }
    /**
     * @param {?} name
     * @return {undefined}
     */
    function f(name) {
      if (this.classList.contains("+"rip"ui_window_docked--minimized"+"rip")) {
        _init();
        if (!node.classList.contains("+"rip"ui_window--active"+"rip")) {
          init.active(name);
        }
      } else {
        if (node.classList.contains("+"rip"ui_window--active"+"rip")) {
          if (options.minimizable) {
            update();
          }
          node.style.zIndex = $maxZ("+"rip"#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed"+"rip").num + 10;
        } else {
          init.active(name);
        }
      }
    }
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    function onNavigateUpClicked(event) {
      event.preventDefault();
      $.show(me, {
        at : "+"rip"left+10 bottom+10"+"rip",
        of : event,
        within : options.dest
      });
    }
    /**
     * @param {!Event} e
     * @return {undefined}
     */
    function userPointsUpdate(e) {
      if (!(feature = true) !== options.onok.call(me, feature)) {
        click(e);
      }
    }
    /**
     * @return {undefined}
     */
    function drag() {
      init.active(name);
    }
    /**
     * @return {undefined}
     */
    function initialize() {
      if (el) {
        el.removeEventListener("+"rip"click"+"rip", f, false);
        el.removeEventListener("+"rip"contextmenu"+"rip", onNavigateUpClicked, false);
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }
      if (img) {
        img.removeEventListener("+"rip"click"+"rip", listener, false);
        img.removeEventListener("+"rip"dblclick"+"rip", click, false);
        img.removeEventListener("+"rip"contextmenu"+"rip", listener, false);
      }
      if (options.contextmenuOnBody) {
        container.removeEventListener("+"rip"contextmenu"+"rip", q, false);
      }
      if (options.header) {
        canvas.removeEventListener("+"rip"contextmenu"+"rip", q, false);
      }
      if (options.btnCancel) {
        aboutButton.removeEventListener("+"rip"click"+"rip", click, false);
      }
      if (options.btnOk) {
        input.removeEventListener("+"rip"click"+"rip", userPointsUpdate, false);
      }
      if (loading && loading.parentNode) {
        loading.parentNode.removeChild(loading);
      }
      /** @type {null} */
      loading = null;
      if (options.resizable && element) {
        $el(element).off("+"rip"dblclick doubletap"+"rip", close);
      }
      if (options.maximizable && !element) {
        $el(container).off("+"rip"dblclick doubletap"+"rip", close);
      }
      if (options.draggable) {
        barMenuParentTop.destroy();
      }
      if (options.resizable) {
        barMenuParentTop.destroy();
      }
      if (self) {
        self.destroy();
      }
      if ($) {
        $.destroy();
      }
      node.removeEventListener("+"rip"click"+"rip", drag, false);
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
      var target = $maxZ("+"rip".ui_window"+"rip").el;
      if (target) {
        init.active(1 * target.getAttribute("+"rip"data-window-id"+"rip"));
      }
      options.ondestroy.call(me, target);
      /** @type {null} */
      data[name] = null;
    }
    /**
     * @return {undefined}
     */
    function start() {
      if (options.animationOut) {
        /** @type {boolean} */
        var e = false;
        /** @type {number} */
        var j = 0;
        /** @type {number} */
        var imagesLen = node.classList.length;
        for (; j < imagesLen; j++) {
          if (node.classList[j] && 0 === node.classList[j].indexOf("+"rip"fx_"+"rip")) {
            /** @type {boolean} */
            e = true;
          }
        }
        if (e) {
          initialize();
        } else {
          node.classList.add("+"rip"animated"+"rip");
          $animate(node, options.animationOut, function(canCreateDiscussions) {
            node.classList.remove("+"rip"animated"+"rip");
            initialize();
          });
        }
      } else {
        initialize();
      }
    }
    /**
     * @return {undefined}
     */
    function bind() {
      if (feature && options.onsubmit && false === options.onsubmit.call(me, feature, $form.data(form), form)) {
        /** @type {boolean} */
        feature = false;
      } else {
        if (options.onbeforeclose) {
          options.onbeforeclose.call(me, function() {
            start();
            if (options.onclose) {
              options.onclose.call(me, feature, $form.data(form), form);
            }
          });
        } else {
          start();
          if (options.onclose) {
            options.onclose.call(me, feature, $form.data(form), form);
          }
        }
      }
    }
    /**
     * @param {?} type
     * @return {undefined}
     */
    function connect(type) {
      if (true === type) {
        /** @type {boolean} */
        feature = true;
      }
      if (form) {
        bind();
      } else {
        if (options.onbeforeclose) {
          options.onbeforeclose.call(me, function() {
            start();
            if (options.onclose) {
              options.onclose.call(me, feature);
            }
          });
        } else {
          start();
          if (options.onclose) {
            options.onclose.call(me, feature);
          }
        }
      }
    }
    /**
     * @return {undefined}
     */
    function show() {
      render();
      setTimeout(function() {
        if (render(), form = node.getElementsByTagName("+"rip"form"+"rip")[0]) {
          /** @type {(Element|null)} */
          var inlineEditor2 = form.querySelector("+"rip"[autofocus]"+"rip");
          if (inlineEditor2) {
            inlineEditor2.focus();
          }
          /**
           * @return {?}
           */
          form.onsubmit = function() {
            return feature = true, bind(), false;
          };
          /** @type {!Element} */
          me.el.form = form;
        } else {
          if (el) {
            el.focus();
          } else {
            container.focus();
          }
        }
        options.onready.call(me, node, container);
      }, 1);
    }
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    function click(event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      connect();
    }
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    function close(event) {
      if (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
      if (node.classList.contains("+"rip"ui_window--maximized"+"rip")) {
        node.classList.remove("+"rip"ui_window--maximized"+"rip");
        if (e) {
          e.classList.remove("+"rip"ui_window__head__maximized"+"rip");
          e.classList.add("+"rip"ui_window__head__maximize"+"rip");
        }
        node.classList.add("+"rip"untransition"+"rip");
        node.removeAttribute("+"rip"style"+"rip");
        node.setAttribute("+"rip"style"+"rip", key);
        setTimeout(function() {
          node.classList.remove("+"rip"untransition"+"rip");
          options.onresize(false);
        }, 500);
      } else {
        /** @type {string} */
        key = node.getAttribute("+"rip"style"+"rip");
        node.classList.add("+"rip"ui_window--maximized"+"rip");
        if (e) {
          e.classList.add("+"rip"ui_window__head__maximized"+"rip");
          e.classList.remove("+"rip"ui_window__head__maximize"+"rip");
        }
        setTimeout(function() {
          options.onresize(true);
        }, 500);
      }
    }
    /**
     * @return {undefined}
     */
    function update() {
      if (options.dockable) {
        /** @type {!ClientRect} */
        var reprLineElemOffset = node.getBoundingClientRect();
        rect = {
          t : reprLineElemOffset.top + "+"rip"px"+"rip",
          l : reprLineElemOffset.left + "+"rip"px"+"rip",
          h : node.offsetHeight + "+"rip"px"+"rip",
          w : node.offsetWidth + "+"rip"px"+"rip"
        };
        /** @type {string} */
        loading.style.display = "+"rip"block"+"rip";
        /** @type {string} */
        loading.style.top = rect.t;
        /** @type {string} */
        loading.style.left = rect.l;
        /** @type {string} */
        loading.style.height = rect.h;
        /** @type {string} */
        loading.style.width = rect.w;
        loading.style.zIndex = $maxZ("+"rip"#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed"+"rip").num + 1;
        node.classList.add("+"rip"ui_window--minimized"+"rip");
        /** @type {!ClientRect} */
        var svRect = el.getBoundingClientRect();
        /** @type {string} */
        loading.style.top = svRect.top + "+"rip"px"+"rip";
        /** @type {string} */
        loading.style.left = svRect.left + "+"rip"px"+"rip";
        /** @type {string} */
        loading.style.height = el.offsetHeight + "+"rip"px"+"rip";
        /** @type {string} */
        loading.style.width = el.offsetWidth + "+"rip"px"+"rip";
        setTimeout(function() {
          /** @type {string} */
          loading.style.display = "+"rip"none"+"rip";
          el.classList.add("+"rip"ui_window_docked--minimized"+"rip");
        }, 300);
      }
    }
    /**
     * @return {undefined}
     */
    function _init() {
      loading.classList.remove("+"rip"ui_window_transfer"+"rip");
      /** @type {string} */
      loading.style.display = "+"rip"block"+"rip";
      loading.style.zIndex = $maxZ("+"rip"#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed"+"rip").num + 1;
      loading.classList.add("+"rip"ui_window_retransfer"+"rip");
      setTimeout(function() {
        loading.style.top = rect.t;
        loading.style.left = rect.l;
        loading.style.height = rect.h;
        loading.style.width = rect.w;
      }, 50);
      setTimeout(function() {
        /** @type {string} */
        loading.style.display = "+"rip"none"+"rip";
        node.classList.remove("+"rip"ui_window--minimized"+"rip");
        el.classList.remove("+"rip"ui_window_docked--minimized"+"rip");
      }, 300);
    }
    if ("+"rip"string"+"rip" == typeof config) {
      config = {
        title : config,
        url : config,
        ajax : false,
        width : 400,
        height : 300
      };
    }
    var me;
    var template;
    var self;
    var tmp;
    var str;
    var aboutButton;
    var input;
    var options = $extend({}, opts, config);
    /** @type {!Element} */
    var node = box.cloneNode(false);
    /** @type {!Element} */
    var canvas = t.cloneNode(false);
    /** @type {!Element} */
    var parent = setting_item.cloneNode(false);
    /** @type {!Element} */
    var container = section.cloneNode(false);
    /** @type {!Element} */
    var body = footer.cloneNode(false);
    /** @type {number} */
    var name = timerId++;
    var x = options.dest.offsetWidth;
    var y = options.dest.offsetHeight;
    if (options.caller = $io.isWindow(this) ? null : this, options.caller && options.caller.that && options.caller.that.window && $extend(options, options.caller.that.window), config.contextmenu && (options.contextmenu = $extend({}, opts.contextmenu, options.contextmenu)), node.id = "+"rip"ui_window_"+"rip" + name, node.setAttribute("+"rip"data-window-id"+"rip", name), options.style) {
      var i;
      for (i in options.style) {
        if (options.style.hasOwnProperty(i)) {
          node.style[i] = options.style[i];
        }
      }
    }
    if (options.baseClass) {
      var m_matWorld = options.baseClass.split("+"rip" "+"rip");
      $io.arr.all(m_matWorld, function(e) {
        node.classList.add(e);
      });
    }
    if (options.contextmenuOnBody && container.addEventListener("+"rip"contextmenu"+"rip", q, false), options.header) {
      if (options.icon) {
        /** @type {!Element} */
        var img = bbcLogo.cloneNode(false);
        img.src = options.icon;
        img.addEventListener("+"rip"click"+"rip", listener, false);
        img.addEventListener("+"rip"dblclick"+"rip", click, false);
        img.addEventListener("+"rip"contextmenu"+"rip", listener, false);
        canvas.appendChild(img);
      }
      /** @type {!Element} */
      var element = monthContainer.cloneNode(false);
      if (element.textContent = options.title || "+"rip""+"rip", node.setAttribute("+"rip"aria-labelledby"+"rip", "+"rip"ui_window__title_"+"rip" + name), element.id = "+"rip"ui_window__title_"+"rip" + name, canvas.appendChild(element), canvas.addEventListener("+"rip"contextmenu"+"rip", q, false), options.headerBtn) {
        /** @type {number} */
        var lookfor = options.headerBtn.length - 1;
        for (; 0 <= lookfor; lookfor--) {
          _boxStructure(options.headerBtn[lookfor]);
        }
      }
      if (options.minimizable && options.dock && options.dockable) {
        /** @type {!Element} */
        var b = startButtonItemButton.cloneNode(false);
        /** @type {function(): undefined} */
        b.onclick = update;
        canvas.appendChild(b);
      }
      if (options.maximizable) {
        /** @type {!Element} */
        var e = nextButtonItemButton.cloneNode(false);
        /** @type {function(!Event): undefined} */
        e.onclick = close;
        canvas.appendChild(e);
      }
      if (options.closable) {
        /** @type {!Element} */
        var e = completeButtonItemButton.cloneNode(false);
        /** @type {function(!Event): undefined} */
        e.onclick = click;
        canvas.appendChild(e);
      }
      node.appendChild(canvas);
    }
    if ((options.menu || options.beforeMenu || options.afterMenu) && node.appendChild(parent), options.beforeMenu && ("+"rip"string"+"rip" == typeof options.beforeMenu ? (template = document.createElement("+"rip"div"+"rip")).innerHTML = options.beforeMenu : template = options.beforeMenu, parent.appendChild(template)), options.menu) {
      /** @type {!Element} */
      var level = document.createElement("+"rip"div"+"rip");
      parent.appendChild(level);
      self = $menu(level, options.menu, {
        keyTarget : container,
        thisArg : options.menuThisArg || container,
        mode : "+"rip"bar"+"rip",
        position : {
          within : options.dest
        }
      });
    }
    if (options.afterMenu && ("+"rip"string"+"rip" == typeof options.afterMenu ? (tmp = document.createElement("+"rip"div"+"rip")).innerHTML = options.afterMenu : tmp = options.afterMenu, parent.appendChild(tmp)), node.appendChild(container), options.footer) {
      if ("+"rip"string"+"rip" == typeof options.footer) {
        /** @type {string} */
        (str = document.createElement("+"rip"div"+"rip")).innerHTML = options.footer;
      } else {
        str = options.footer;
      }
      body.appendChild(str);
    }
    if ((options.footer || options.btnOk || options.btnCancel) && node.appendChild(body), node.style.top = (options.top || -4E3) + "+"rip"px"+"rip", node.style.left = (options.left || -4E3) + "+"rip"px"+"rip", container.style.width = "+"rip"auto"+"rip" == options.width ? "+"rip"auto"+"rip" : 1 * options.width + options.borderTopWidth + options.borderBottomWidth + "+"rip"px"+"rip", container.style.height = "+"rip"auto"+"rip" == options.height ? "+"rip"auto"+"rip" : 1 * options.height + options.borderLeftWidth + options.borderRightWidth + "+"rip"px"+"rip", options.dest.appendChild(node), options.automaximize && 
    node.classList.add("+"rip"ui_window--maximized"+"rip"), options.draggable) {
      (element || node).classList.add("+"rip"ui_window--draggable"+"rip");
      var barMenuParentTop = $drag(node, {
        constrain : options.constrain,
        handle : element || node,
        onstart : function() {
          init.active(name);
          callback(this);
        },
        ondrag : function(type, elem, e) {
          options.ondrag.call(me, type, elem, e);
        },
        onstop : function() {
          done(this);
          options.ondragstop.call(me, node, container);
        }
      });
    }
    if (options.resizable) {
      var barMenuParentTop = $resize(node, {
        handles : "+"rip"all"+"rip",
        start : function(e) {
          init.active(name);
          callback(e);
        },
        stop : function(id) {
          done(id);
          options.onresize.call(me, node, container);
        }
      });
    }
    if (options.bodyClass) {
      var m_matWorld = options.bodyClass.split("+"rip" "+"rip");
      $io.arr.all(m_matWorld, function(e) {
        container.classList.add(e);
      });
    }
    if ("+"rip"random"+"rip" == options.animationIn && (options.animationIn = $io.arr.random($animate.i)), "+"rip"random"+"rip" == options.animationOut && (options.animationOut = $io.arr.random($animate.o)), options.animationIn && (node.classList.add("+"rip"animated"+"rip"), $animate(node, options.animationIn, function(canCreateDiscussions) {
      node.classList.remove("+"rip"animated"+"rip");
    })), options.btnCancel || options.btnOk) {
      /** @type {!Element} */
      var menu = document.createElement("+"rip"div"+"rip");
      /** @type {string} */
      menu.className = "+"rip"ui_window__buttons"+"rip";
      body.appendChild(menu);
    }
    if (options.btnCancel && ((aboutButton = document.createElement("+"rip"button"+"rip")).innerHTML = options.btnCancel, aboutButton.className = "+"rip"ui_window__cancel"+"rip", menu.appendChild(aboutButton)), options.btnOk && ((input = document.createElement("+"rip"button"+"rip")).innerHTML = options.btnOk, input.setAttribute("+"rip"autofocus"+"rip", "+"rip"autofocus"+"rip"), input.className = "+"rip"ui_window__ok"+"rip", menu.appendChild(input)), options.dock && options.dockable) {
      /** @type {!Element} */
      var el = document.createElement("+"rip"button"+"rip");
      /** @type {!Element} */
      var node = document.createElement("+"rip"img"+"rip");
      /** @type {!Element} */
      var sliderTitleEl = document.createElement("+"rip"span"+"rip");
      /** @type {string} */
      el.className = "+"rip"ui_window_docked"+"rip";
      /** @type {string} */
      el.id = "+"rip"ui_window_docked_"+"rip" + name;
      /** @type {string} */
      node.className = "+"rip"ui_window_docked__icon"+"rip";
      /** @type {string} */
      sliderTitleEl.className = "+"rip"ui_window_docked__text ui_elipsis"+"rip";
      if (options.icon) {
        node.src = options.icon;
        el.appendChild(node);
      }
      if (options.title) {
        sliderTitleEl.textContent = options.title;
        el.title = options.title;
        el.appendChild(sliderTitleEl);
      }
      options.dock.appendChild(el);
      el.addEventListener("+"rip"click"+"rip", f, false);
      el.addEventListener("+"rip"contextmenu"+"rip", onNavigateUpClicked, false);
    }
    var form;
    var el;
    /** @type {boolean} */
    var feature = false;
    if (options.btnCancel) {
      aboutButton.addEventListener("+"rip"click"+"rip", function(close) {
        if (false !== options.oncancel.call(me, feature)) {
          click(close);
        }
      }, false);
    }
    if (options.btnOk) {
      input.addEventListener("+"rip"click"+"rip", userPointsUpdate, false);
    }
    if (options.activable) {
      node.addEventListener("+"rip"click"+"rip", drag, false);
    }
    if (options.resizable && element) {
      $el(element).on("+"rip"dblclick doubletap"+"rip", close);
    }
    if (options.maximizable && !element) {
      $el(container).on("+"rip"dblclick doubletap"+"rip", close);
    }
    if (options.url && !options.ajax) {
      /** @type {function(): undefined} */
      (el = iframe.cloneNode(false)).onload = show;
      /** @type {function(): undefined} */
      el.onerror = show;
      /** @type {function(): undefined} */
      el.onabort = show;
      el.src = 0 == options.url.indexOf("+"rip"www"+"rip") ? "+"rip"http://"+"rip" + options.url : options.url;
      container.appendChild(el);
      container.classList.add("+"rip"ui_window__body--with_iframe"+"rip");
      if (!options.title) {
        options.title = options.url;
      }
    } else {
      if (options.url && options.ajax) {
        $ajax.get(options.url).done(function(e) {
          /** @type {!Element} */
          var message = document.createElement("+"rip"div"+"rip");
          /** @type {!Object} */
          message.innerHTML = e;
          container.appendChild(message);
          show();
        }).fail(function() {
          $alert.error("+"rip"ajax error"+"rip");
        });
      } else {
        if (!options.ajax) {
          if ("+"rip"string"+"rip" == typeof options.html) {
            /** @type {string} */
            container.innerHTML = options.html;
          } else {
            if (!(1 !== options.html.nodeType && 11 !== options.html.nodeType)) {
              container.appendChild(options.html);
            }
          }
        }
        show();
      }
    }
    me = init.current = data[name] = {
      id : name,
      cfg : options,
      el : {
        base : node,
        body : container,
        header : canvas,
        title : element,
        footer : body,
        iframe : el,
        form : form,
        btnCancel : aboutButton,
        btnOk : input,
        menu : parent,
        menubar : level,
        beforeMenu : template,
        afterMenu : tmp
      },
      close : connect,
      destroy : initialize,
      maximize : close,
      minimize : update,
      restore : _init,
      menu : self,
      changeSize : function(element, height) {
        if (element && (element.height || element.width)) {
          /** @type {string} */
          node.style.height = "+"rip"auto"+"rip";
          /** @type {string} */
          node.style.width = "+"rip"auto"+"rip";
          container.classList.remove("+"rip"ui_window__body--flex"+"rip");
          if (element.height) {
            /** @type {string} */
            container.style.height = element.height + "+"rip"px"+"rip";
          }
          if (element.width) {
            /** @type {string} */
            container.style.width = element.width + "+"rip"px"+"rip";
          }
          render();
          if (height) {
            height();
          }
        }
      },
      active : function() {
        init.active(this.id);
      },
      changeTitle : function(value) {
        if ("+"rip"string"+"rip" == typeof value) {
          if (element) {
            /** @type {string} */
            element.innerHTML = value;
          }
          if (sliderTitleEl) {
            /** @type {string} */
            sliderTitleEl.innerHTML = value;
            /** @type {string} */
            sliderTitleEl.title = value;
          }
        }
      },
      changeIcon : function(name) {
        if ("+"rip"string"+"rip" == typeof name) {
          if (img) {
            /** @type {string} */
            img.src = name;
          }
          if (node) {
            /** @type {string} */
            node.src = name;
          }
        }
      },
      changeFooter : function(attributeTemplate) {
        if (body.firstChild) {
          /** @type {string} */
          body.firstChild.innerHTML = attributeTemplate;
        }
      }
    };
    if (self) {
      self.refresh($extend(options.menuThisArg || {}, {
        window : me
      }));
    }
    options.onopen.call(me, node, container);
    if (options.activable) {
      init.active(name);
    }
    var key;
    var $ = $menu(container, $menu.extend([{
      name : "+"rip"Maximize"+"rip",
      disabled : !options.maximizable,
      action : function() {
        me.maximize();
      }
    }, {
      name : "+"rip"Minimize"+"rip",
      disabled : !options.minimizable,
      action : function() {
        me.minimize();
      }
    }, {
      name : "+"rip"Move to center"+"rip",
      disabled : !options.draggable,
      action : function() {
        x = options.dest.offsetWidth;
        y = options.dest.offsetHeight;
        /** @type {string} */
        node.style.top = ~~((y - node.offsetHeight) / 2) + "+"rip"px"+"rip";
        /** @type {string} */
        node.style.left = ~~((x - node.offsetWidth) / 2) + "+"rip"px"+"rip";
      }
    }, {
      name : "+"rip"Refresh"+"rip",
      disabled : !((!options.url || options.ajax) && "+"rip"function"+"rip" == typeof options.reload),
      action : function() {
        if ("+"rip"function"+"rip" == typeof this.cfg.reload) {
          this.cfg.reload();
        } else {
          if (this.el.iframe) {
            /** @type {string} */
            this.el.iframe.src = "+"rip""+"rip";
            this.el.iframe.src = this.cfg.url;
          }
        }
      }
    }, {
      name : "+"rip"---"+"rip"
    }, {
      name : "+"rip"Close"+"rip",
      disabled : !options.closable,
      action : function() {
        me.close();
      }
    }], options.contextmenu), {
      trigger : false,
      thisArg : me
    });
    var rect;
    /** @type {!Element} */
    var loading = document.createElement("+"rip"div"+"rip");
    return loading.className = "+"rip"ui_window_transfer"+"rip", document.body.appendChild(loading), me;
  }
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function callback(e) {
    if (e.getElementsByTagName("+"rip"iframe"+"rip").length) {
      e.getElementsByTagName("+"rip"section"+"rip")[0].appendChild(search_item.cloneNode(false));
    }
  }
  /**
   * @param {?} source
   * @return {undefined}
   */
  function done(source) {
    var emement = source.querySelector("+"rip".js-mask"+"rip");
    if (emement && emement.parentNode) {
      emement.parentNode.removeChild(emement);
    }
  }
  /**
   * @param {string} event
   * @param {!Object} el
   * @return {undefined}
   */
  function cb(event, el) {
    var el2 = el && 1 == el.nodeType ? el.getAttribute("+"rip"data-window-id"+"rip") : el;
    var msg = data[1 * el2];
    if (msg) {
      msg[event]();
    }
  }
  var opts = {
    title : "+"rip""+"rip",
    html : "+"rip""+"rip",
    help : "+"rip""+"rip",
    url : null,
    menu : null,
    header : true,
    footer : null,
    width : 390,
    height : 270,
    borderTopWidth : 1,
    borderBottomWidth : 1,
    borderLeftWidth : 1,
    borderRightWidth : 1,
    baseWidth : null,
    baseHeight : null,
    minWidth : null,
    minHeight : null,
    top : null,
    left : null,
    center : false,
    noOut : false,
    constrain : false,
    ajax : false,
    automaximize : false,
    contextmenuOnBody : false,
    resizable : true,
    minimizable : true,
    maximizable : true,
    closable : true,
    draggable : true,
    dockable : true,
    activable : true,
    headerBtn : [],
    onopen : $noop,
    onready : $noop,
    onclose : $noop,
    onok : $noop,
    oncancel : $noop,
    onminimize : $noop,
    ondrag : $noop,
    ondragstop : $noop,
    onresize : $noop,
    onactive : $noop,
    ondestroy : $noop,
    animationIn : "+"rip""+"rip",
    animationOut : "+"rip""+"rip",
    baseClass : "+"rip""+"rip",
    bodyClass : "+"rip""+"rip",
    style : "+"rip""+"rip",
    dest : document.body,
    dock : null
  };
  /** @type {number} */
  var timerId = 0;
  /** @type {!Array} */
  var data = [];
  /** @type {!Element} */
  var box = document.createElement("+"rip"div"+"rip");
  /** @type {!Element} */
  var t = document.createElement("+"rip"header"+"rip");
  /** @type {!Element} */
  var setting_item = document.createElement("+"rip"header"+"rip");
  /** @type {!Element} */
  var section = document.createElement("+"rip"section"+"rip");
  /** @type {!Element} */
  var footer = document.createElement("+"rip"footer"+"rip");
  /** @type {!Element} */
  var iframe = document.createElement("+"rip"iframe"+"rip");
  /** @type {!Element} */
  var bbcLogo = document.createElement("+"rip"img"+"rip");
  /** @type {!Element} */
  var monthContainer = document.createElement("+"rip"span"+"rip");
  /** @type {!Element} */
  var startButtonItemButton = document.createElement("+"rip"button"+"rip");
  /** @type {!Element} */
  var nextButtonItemButton = document.createElement("+"rip"button"+"rip");
  /** @type {!Element} */
  var completeButtonItemButton = document.createElement("+"rip"button"+"rip");
  box.setAttribute("+"rip"role"+"rip", "+"rip"dialog"+"rip");
  /** @type {string} */
  box.className = "+"rip"ui_window ui_window--active"+"rip";
  /** @type {string} */
  t.className = "+"rip"ui_window__head"+"rip";
  /** @type {string} */
  bbcLogo.className = "+"rip"ui_window__head__icon"+"rip";
  /** @type {string} */
  monthContainer.className = "+"rip"ui_window__head__title ui_elipsis"+"rip";
  /** @type {string} */
  startButtonItemButton.className = "+"rip"ui_window__head__minimize"+"rip";
  /** @type {string} */
  nextButtonItemButton.className = "+"rip"ui_window__head__maximize"+"rip";
  /** @type {string} */
  completeButtonItemButton.className = "+"rip"ui_window__head__close"+"rip";
  /** @type {string} */
  setting_item.className = "+"rip"ui_window__menu"+"rip";
  /** @type {string} */
  section.className = "+"rip"ui_window__body"+"rip";
  /** @type {string} */
  footer.className = "+"rip"ui_window__foot"+"rip";
  /** @type {string} */
  iframe.className = "+"rip"ui_window__iframe"+"rip";
  iframe.setAttribute("+"rip"allowfullscreen"+"rip", "+"rip"true"+"rip");
  /** @type {!Element} */
  var search_item = document.createElement("+"rip"div"+"rip");
  /** @type {string} */
  search_item.className = "+"rip"js-mask"+"rip";
  search_item.setAttribute("+"rip"style"+"rip", "+"rip"background-image:url(/c/sys/img/spacer.gif); position: absolute; z-index: 2; left: 0; top: 0; right: 0; bottom: 0;"+"rip");
  /**
   * @param {?} data
   * @return {undefined}
   */
  init.config = function(data) {
    $extend(opts, data);
  };
  /** @type {!Array} */
  init.instances = data;
  /**
   * @param {number} i
   * @return {undefined}
   */
  init.active = function(i) {
    /** @type {(Element|null)} */
    var t = document.getElementById("+"rip"ui_window_"+"rip" + i);
    t.style.zIndex = $maxZ("+"rip"#ui_explorer_0 .ui_icon:not(.ui_is_dragging),.ui_window,.ui_z_indexed"+"rip").num + 1;
    $io.arr.all(document.querySelectorAll("+"rip".ui_window--active"+"rip"), function(e) {
      e.classList.remove("+"rip"ui_window--active"+"rip");
      callback(e);
    });
    $io.arr.all(document.querySelectorAll("+"rip".ui_window_docked.pressed"+"rip"), function(focusedObj) {
      focusedObj.classList.remove("+"rip"pressed"+"rip");
    });
    t.classList.add("+"rip"ui_window--active"+"rip");
    done(t);
    /** @type {(Element|null)} */
    var dayEle = document.getElementById("+"rip"ui_window_docked_"+"rip" + i);
    if (dayEle) {
      dayEle.classList.add("+"rip"pressed"+"rip");
    }
    init.current = data[i];
    setTimeout(function() {
      if (data[i] && "+"rip"function"+"rip" == typeof data[i].cfg.onactive) {
        data[i].cfg.onactive.call(data[i], data[i].el.base, data[i].el.body);
      }
    }, 1);
  };
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  init.close = function(type) {
    cb("+"rip"close"+"rip", type);
  };
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  init.destroy = function(type) {
    cb("+"rip"destroy"+"rip", type);
  };
  /**
   * @param {!Event} e
   * @return {undefined}
   */
  init.maximize = function(e) {
    cb("+"rip"maximize"+"rip", e);
  };
  /**
   * @param {!Object} child
   * @return {undefined}
   */
  init.restore = function(child) {
    cb("+"rip"restore"+"rip", child);
  };
  /** @type {function(string): ?} */
  self.$window = init;
}(this);
!function(self) {
  /**
   * @param {!Object} params
   * @param {!Object} cb
   * @return {?}
   */
  function render(params, cb) {
    var options = $extend({
      title : "+"rip"Alert"+"rip",
      baseClass : "+"rip"ui_alert"+"rip",
      msg : params,
      img : "+"rip"/c/sys/skins/w93/alert.png"+"rip",
      cb : cb,
      sound : "+"rip"alert"+"rip",
      onopen : function() {
        if (this.cfg.sound) {
          options.sound(this.cfg.sound);
        }
        /** @type {!Element} */
        var selected = elem || this.el.btnOk;
        if (selected) {
          setTimeout(function() {
            selected.focus();
          }, 100);
        }
      },
      onactive : function() {
        /** @type {!Element} */
        var selected = elem || this.el.btnOk;
        if (selected) {
          setTimeout(function() {
            selected.focus();
          }, 100);
        }
      },
      onclose : function(name) {
        (cb || params.cb || $noop)(name);
      }
    }, params);
    var id = options.baseClass.split("+"rip" "+"rip")[0];
    if ("+"rip"string"+"rip" != typeof options.msg) {
      try {
        /** @type {string} */
        options.msg = JSON.stringify(options.msg, null, 2);
        /** @type {string} */
        options.bodyClass = data.bodyClass + "+"rip" "+"rip" + id + "+"rip"--code"+"rip";
      } catch (e) {
        /** @type {string} */
        options.msg = options.msg + "+"rip""+"rip";
        /** @type {string} */
        options.bodyClass = data.bodyClass + "+"rip" "+"rip" + id + "+"rip"--code "+"rip" + id + "+"rip"--center"+"rip";
      }
    }
    /** @type {!Element} */
    var text = document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var div = document.createElement("+"rip"div"+"rip");
    document.createDocumentFragment();
    if (text.className = "+"rip"clearfix"+"rip", options.img) {
      /** @type {!Image} */
      var self = new Image;
      /** @type {string} */
      self.className = id + "+"rip"__img"+"rip";
      /** @type {number} */
      self.width = 32;
      /** @type {number} */
      self.height = 32;
      text.appendChild(self);
    }
    if (div.innerHTML = options.msg, div.className = id + "+"rip"__text"+"rip", text.appendChild(div), "+"rip"string"+"rip" == typeof options.prompt) {
      /** @type {!Element} */
      var el = document.createElement("+"rip"form"+"rip");
      /** @type {!Element} */
      var elem = document.createElement("+"rip"textarea"+"rip");
      /** @type {string} */
      elem.style.width = "+"rip"100%"+"rip";
      elem.value = options.prompt;
      /** @type {string} */
      elem.name = "+"rip"prompt"+"rip";
      /**
       * @param {!Object} event
       * @return {?}
       */
      elem.onkeydown = function(event) {
        if ("+"rip"number"+"rip" != typeof(event = event || window.event).which && (event.which = event.keyCode), 13 === event.which && !event.shiftKey) {
          return $el(el).trigger("+"rip"submit"+"rip"), event.preventDefault ? event.preventDefault() : event.returnValue = false, event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true, event.stopImmediatePropagation(), false;
        }
      };
      el.appendChild(elem);
      div.appendChild(el);
      /** @type {string} */
      div.style.textAlign = "+"rip"left"+"rip";
    }
    /** @type {!Element} */
    options.html = text;
    /** @type {null} */
    var handler = null;
    if (!options.img) {
      return $window($extend({}, data, options));
    }
    /** @type {boolean} */
    var m = false;
    /**
     * @return {undefined}
     */
    handler = function() {
      if (!m) {
        $window($extend({}, data, options));
      }
      /** @type {boolean} */
      m = true;
    };
    /** @type {function(): undefined} */
    self.onload = handler;
    /** @type {function(): undefined} */
    self.onerror = handler;
    /** @type {function(): undefined} */
    self.onabort = handler;
    self.src = options.img;
  }
  var data = {
    baseClass : "+"rip"ui_alert"+"rip",
    height : "+"rip"auto"+"rip",
    minHeight : "+"rip"auto"+"rip",
    footer : "+"rip""+"rip",
    minimizable : false,
    maximizable : false,
    resizable : false,
    center : true,
    pinnable : false,
    btnOk : "+"rip"OK"+"rip",
    animationIn : "+"rip"none"+"rip",
    animationOut : "+"rip"random"+"rip",
    width : 330
  };
  var options = {
    sound : $noop
  };
  render.error = $io.fn.leading(function(value, callback) {
    console.error(value);
    var error = $error(value);
    var data = {
      bodyClass : "+"rip"js_error"+"rip",
      title : error.name || "+"rip"Error"+"rip",
      msg : error.html
    };
    render($extend({
      title : "+"rip"Error"+"rip",
      msg : data,
      img : "+"rip"/c/sys/skins/w93/error.png"+"rip",
      cb : callback,
      sound : "+"rip"error"+"rip"
    }, data));
  }, 1e3);
  /**
   * @param {!Object} type
   * @param {!Object} var_args
   * @return {undefined}
   */
  render.info = function(type, var_args) {
    render($extend({
      title : "+"rip"Info"+"rip",
      msg : type,
      img : var_args || "+"rip"/c/sys/skins/w93/info.png"+"rip",
      onopen : $noop,
      sound : null
    }, type));
  };
  /**
   * @param {string} color
   * @param {!Object} msg
   * @return {?}
   */
  render.progress = function(color, msg) {
    /** @type {!Element} */
    var t = document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var o = document.createElement("+"rip"div"+"rip");
    /** @type {string} */
    o.className = "+"rip"ui_progress__bar"+"rip";
    /** @type {string} */
    t.className = "+"rip"skin_inset_deep h20p mt5 relative ui_progress"+"rip";
    /** @type {!Element} */
    var a = document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var r = document.createElement("+"rip"div"+"rip");
    /** @type {string} */
    a.textContent = color;
    t.appendChild(o);
    r.appendChild(a);
    r.appendChild(t);
    msg = msg || "+"rip"Progress"+"rip";
    var View = $window($extend({}, data, {
      title : msg,
      html : r,
      btnOk : null
    }, color));
    return {
      update : function(percentage) {
        /** @type {number} */
        percentage = ~~percentage;
        View.changeTitle(percentage + "+"rip"% - "+"rip" + msg);
        /** @type {string} */
        o.style.width = percentage + "+"rip"%"+"rip";
        if (100 <= percentage) {
          View.close();
        }
      }
    };
  };
  /**
   * @param {string} name
   * @param {!Object} type
   * @return {undefined}
   */
  render.help = function(name, type) {
    $window($extend({}, data, {
      title : "+"rip"Help"+"rip",
      html : name,
      bodyClass : "+"rip"ui_alert--help skin_inset_deep skin_light pa10"+"rip",
      sound : null
    }, name));
  };
  /**
   * @param {string} name
   * @param {!Array} field
   * @param {!Array} callback
   * @return {undefined}
   */
  $window.form = function(name, field, callback) {
    if ("+"rip"string"+"rip" != typeof name) {
      /** @type {!Array} */
      callback = field;
      /** @type {string} */
      field = name;
      /** @type {string} */
      name = "+"rip"Form"+"rip";
    }
    var m = $form.build(field);
    $window.call(this, $extend({}, data, {
      resizable : true,
      title : name,
      html : m.el,
      btnOk : "+"rip"OK"+"rip",
      btnCancel : "+"rip"Cancel"+"rip",
      onsubmit : function(e, fn, settings) {
        var data = $form.validate(settings);
        if (!data) {
          return console.log(data), false;
        }
        (callback || $noop)(e, fn);
      }
    }));
  };
  /**
   * @param {?} data
   * @return {undefined}
   */
  render.config = function(data) {
    $extend(options, data);
  };
  /** @type {function(!Object, !Object): ?} */
  self.$alert = render;
  /**
   * @param {string} data
   * @param {(!Function|string)} opts
   * @return {undefined}
   */
  self.$confirm = function(data, opts) {
    render($extend({
      title : "+"rip"Confirm"+"rip",
      msg : data,
      img : "+"rip"/c/sys/skins/w93/question.png"+"rip",
      onopen : $noop,
      sound : null,
      cb : opts,
      btnCancel : "+"rip"Cancel"+"rip"
    }, data));
  };
  /**
   * @param {!Object} msg
   * @param {string} options
   * @param {!Object} cb
   * @return {undefined}
   */
  self.$prompt = function(msg, options, cb) {
    if ("+"rip"function"+"rip" == typeof options) {
      /** @type {string} */
      cb = options;
      /** @type {string} */
      options = "+"rip""+"rip";
    }
    render($extend({
      title : "+"rip"Prompt"+"rip",
      msg : msg,
      img : null,
      sound : null,
      cb : cb,
      prompt : options,
      onclose : function(name, t) {
        var type = t.prompt;
        (cb || msg.cb || $noop)(name, type);
      },
      btnCancel : "+"rip"Cancel"+"rip"
    }, msg));
  };
}(this);
var system42 = $kernel;
system42("+"rip"boot"+"rip", function(self, saveNotifs) {
  Promise.all([$loader([self._temp.files, self._temp.mimetypes]), $loader.audio(self._settings.sounds.boot), $loader.audio(self._settings.sounds.alert), $loader.audio(self._settings.sounds.error)]).then(function(errHandlers) {
    self._files = errHandlers[0][0];
    self._get.mime.ext = errHandlers[0][1];
    self._sound.boot = errHandlers[1];
    self._sound.alert = errHandlers[2];
    self._sound.error = errHandlers[3];
    saveNotifs();
  });
});
system42("+"rip"bios"+"rip", function(canCreateDiscussions) {
  $boot.BOOTLOG.innerHTML += "+"rip"\nWindows93 v"+"rip" + $boot.VERSION + "+"rip" booting on..."+"rip";
  $boot.BOOTLOG.innerHTML += "+"rip"\n"+"rip" + platform.description;
  $boot.BOOTLOG.innerHTML += "+"rip"\n"+"rip";
});
system42("+"rip"settings"+"rip", function(self) {
  /** @type {!Object} */
  var options = Object.assign({}, self._settings);
  self._settings = $store("+"rip"settings.json"+"rip", self._settings, function(options) {
    /** @type {!Object} */
    self._settings = options;
  }, function() {
    return self._settings;
  });
  if ("+"rip"string"+"rip" == typeof self._settings) {
    /** @type {!Object} */
    self._settings = options;
  } else {
    /** @type {!Object} */
    self._settings = Object.assign(options, self._settings);
  }
  /** @type {string} */
  self._settings.skin = "+"rip"w93"+"rip";
  /**
   * @return {undefined}
   */
  self._init.home = function() {
    /** @type {string} */
    self._path.home = "+"rip"/a/"+"rip";
    /** @type {string} */
    self._path.key.home = "+"rip""+"rip";
    /** @type {string} */
    self._path.desktop = "+"rip"/a/desktop/"+"rip";
    /** @type {string} */
    self._path.key.desktop = "+"rip"desktop/"+"rip";
    /** @type {string} */
    self._path.skin = "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/"+"rip";
  };
  self._init.home();
});
system42("+"rip"storage"+"rip", function(self, saveNotifs) {
  /**
   * @param {!Object} data
   * @param {number} duration
   * @return {undefined}
   */
  function render(data, duration) {
    effects[data.name] = {};
    var a = $extend({}, data);
    if (-1 < a.col) {
      /** @type {number} */
      effects[data.name].x = a.col * self._icons.w;
      delete a.col;
    }
    if (-1 < a.row) {
      /** @type {number} */
      effects[data.name].y = a.row * self._icons.h;
      delete a.row;
    }
    effects[data.name].time = time + duration;
    delete a.name;
    $store.set(self._path.key.desktop + data.name, a);
  }
  var effects = {};
  /** @type {number} */
  var time = Date.now();
  /**
   * @return {undefined}
   */
  self._init.desktop = function() {
    $io.arr.each(self._temp.defaultDesk, render);
  };
  $store.set("+"rip"system32.dll"+"rip", "+"rip"796f 2c20 706c 6561 7365 2064\n6f6e 2774 2064 656c 6574 6520\n6d65"+"rip");
  $store.set("+"rip"boot/README.txt"+"rip", "+"rip"README\n======\n\nAny javascript or css file in this folder will be loaded at boot.\n\nUse with care and have fun...\n\nwindows93.net's staff"+"rip");
  self._init.desktop();
  self._desktop = $store(self._path.key.home + "+"rip".config/desktop.json"+"rip", effects, function(navigatorType) {
    self._desktop = navigatorType;
  }, function() {
    return self._desktop;
  });
  $io.enum([$io.obj.flatten(self._files.a, "+"rip"/"+"rip")], function(fromIndex, name, index) {
    if ("+"rip"number"+"rip" == typeof fromIndex) {
      var versionByName = $fs.utils.isShortcut(name);
      $ajax.get("+"rip"a_/"+"rip" + name, {
        arraybuffer : !versionByName
      }).done(function(email) {
        if (versionByName) {
          $store.set(name, email);
          index();
        } else {
          $io.ArrayBuffer.Blob(email, function(e) {
            $db.set(name, e, index);
          }, $fs.utils.getMime(name));
        }
      }).fail(function(x) {
        $boot.onerror(x);
        index();
      });
    } else {
      $db.set(name + "+"rip"/"+"rip", null, index);
    }
  }, function() {
    $file.scan("+"rip"/a/"+"rip", function() {
      if ("+"rip"#safe"+"rip" !== window.location.hash && self && self._files && self._files.a && self._files.a.boot) {
        /** @type {!Array<string>} */
        var deprecatedStylingMethods = Object.keys(self._files.a.boot);
        if (deprecatedStylingMethods.length) {
          return void setTimeout(function() {
            if (window.system42) {
              if (window.system42.paused) {
                return saveNotifs();
              }
              /** @type {!Array} */
              var p = [];
              deprecatedStylingMethods.forEach(function(value) {
                if (false !== $fs.utils.exist("+"rip"/a/boot/"+"rip" + value)) {
                  p.push(new Promise(function(initCb) {
                    $file.open("+"rip"/a/boot/"+"rip" + value, "+"rip"URL"+"rip", function(uri, canCreateDiscussions) {
                      var name = $url.getExtention(value);
                      if ("+"rip"js"+"rip" === name) {
                        $loader.script(uri).then(initCb);
                      } else {
                        if ("+"rip"css"+"rip" === name) {
                          $loader.css(uri).then(initCb);
                        } else {
                          initCb();
                        }
                      }
                    });
                  }));
                }
              });
              Promise.all(p).then(function(canCreateDiscussions) {
                if (true !== $boot.hasError) {
                  saveNotifs();
                }
              });
            }
          }, 500);
        }
      }
      saveNotifs();
    });
  });
});
system42("+"rip"reset"+"rip", function(canCreateDiscussions, saveNotifs) {
  $store.clear();
  $db.clear(function() {
    saveNotifs();
  });
});
system42("+"rip"audio"+"rip", function(self) {
  /**
   * @param {?} path
   * @param {boolean} body
   * @return {?}
   */
  function request(path, body) {
    var data;
    return "+"rip"string"+"rip" != typeof path ? new Howl(path) : (self._settings.sounds[path] && (path = self._settings.sounds[path]), storage[path] ? data = storage[path] : (data = new Howl({
      buffer : !!body,
      urls : [path]
    }), storage[path] = data), data);
  }
  window.Howl = window.Howl || function() {
    /** @type {function(!Object): undefined} */
    this.play = $noop;
    /** @type {function(!Object): undefined} */
    this.pause = $noop;
  };
  var storage = {};
  /**
   * @param {?} config
   * @return {?}
   */
  request.config = function(config) {
    return new Howl(config);
  };
  /**
   * @param {?} filename
   * @return {?}
   */
  request.stream = function(filename) {
    return request(filename, true);
  };
  /** @type {function(?, boolean): ?} */
  window.$audio = request;
});
system42("+"rip"splash"+"rip", function(self, NTES) {
  var iframe;
  $explorer(self._path.desktop, self._dom.desktop, {
    silent : true,
    backgroundClass : "+"rip""+"rip",
    viewType : "+"rip"workspace"+"rip"
  });
  if (!self.devmode) {
    $el.each("+"rip".ui_icon"+"rip", function(e) {
      e.classList.add("+"rip"hide"+"rip");
    });
  }
  if (self.started || true === self._settings.noSplash) {
    NTES();
  } else {
    /** @type {!Element} */
    iframe = document.createElement("+"rip"iframe"+"rip");
    self._dom.splash.appendChild(iframe);
    /** @type {string} */
    iframe.className = "+"rip"fillspace"+"rip";
    /** @type {string} */
    iframe.style.position = "+"rip"fixed"+"rip";
    /** @type {string} */
    iframe.style.visibility = "+"rip"hidden"+"rip";
    /**
     * @return {undefined}
     */
    iframe.onload = function() {
      /** @type {string} */
      iframe.style.visibility = "+"rip"visible"+"rip";
      setTimeout(function() {
        NTES();
      }, 2500);
    };
    iframe.src = self._temp.splash;
  }
});
system42("+"rip"utils"+"rip", function(self) {
  var subwikiListsCache = {};
  $io.obj.each(self._get.mime.ext, function(t, ipasDir) {
    $io.obj.each(t, function(prefixSplit, name) {
      $io.arr.all(prefixSplit[0].split("+"rip","+"rip"), function(wikiId) {
        /** @type {string} */
        subwikiListsCache[wikiId] = ipasDir + "+"rip"/"+"rip" + name;
      });
    });
  });
  self._get.ext.mime = subwikiListsCache;
  $io.obj.each(self._apps, function(options, i) {
    if ("+"rip"string"+"rip" != typeof options) {
      if (options.accept && $extend(options, $fs.utils.parseAccept(options.accept)), options.ext && $io.arr.all(options.ext, function(name) {
        if (self._get.ext.apps[name]) {
          self._get.ext.apps[name].push(i);
        } else {
          /** @type {!Array} */
          self._get.ext.apps[name] = [i];
        }
      }), options.mimetype && self._get.mime.apps.push([options.mimetype, i]), options.icon && (options.icon = $fs.utils.normalizeIcon(options.icon)), options.install && system42.on("+"rip"storage:ready"+"rip", function(self) {
        options.install = options.install.replace(/^~\//, "+"rip"/a/"+"rip" + self._path.key.home);
        $io.obj.path.call("+"rip"/"+"rip", self._files, options.install, {
          exe : i,
          icon : options.icon
        });
      }), options.init && system42.on("+"rip"config:ready"+"rip", function(upperBound) {
        options.init.call({
          le : upperBound,
          app : options
        });
      }), options.exec) {
        var direction = options.exec;
        var a = $io.fn.arg(direction);
        /**
         * @return {?}
         */
        options.exec = function() {
          var icon = options.icon;
          if (this.arg.options && this.arg.options.icon) {
            icon = this.arg.options.icon = $fs.utils.normalizeIcon(this.arg.options.icon || this.arg.launcher.icon);
          }
          /** @type {!Object} */
          this.app = options;
          if (!this.that.window) {
            this.that.window = {};
          }
          if (!this.that.window.icon) {
            this.that.window.icon = icon;
          }
          if (!this.that.window.title) {
            this.that.window.title = this.arg.launcher ? this.arg.launcher.title : options.name;
          }
          if (!this.that.window.title) {
            delete this.that.window.title;
          }
          var proc;
          var args = this.arg.arguments.concat([this.arg.options]);
          if ("+"rip"arguments"+"rip" === options.inject) {
            args = this.arg.arguments;
          } else {
            $io.arr.each(a, function(debug, i) {
              if ("+"rip"url"+"rip" === debug && "+"rip"string"+"rip" != typeof args[i]) {
                /** @type {string} */
                args[i] = "+"rip""+"rip";
              }
              if ("+"rip"opt"+"rip" === debug && "+"rip"object"+"rip" != typeof args[i]) {
                args[i] = {};
              }
            });
          }
          try {
            proc = void 0 === (proc = direction.apply(this, args)) ? 1 : proc;
          } catch (error) {
            $alert.error(error);
            /** @type {number} */
            proc = 0;
          }
          return proc;
        };
      }
    } else {
      self._apps[i] = {
        alias : options,
        exec : function() {
          /** @type {!Array} */
          var expectations = [];
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var argl = arguments.length;
          for (; i < argl; i++) {
            if ("+"rip"string"+"rip" == typeof arguments[i]) {
              expectations.push(arguments[i]);
            }
          }
          $exe.silent(options + "+"rip" "+"rip" + expectations.join("+"rip" "+"rip"));
        }
      };
    }
  });
});
system42("+"rip"config"+"rip", function(self) {
  var stylesheet;
  /** @type {!Element} */
  var style = document.createElement("+"rip"style"+"rip");
  document.head.appendChild(style);
  stylesheet = style.sheet;
  /** @type {!Array} */
  var washed = [];
  $io.arr.all(document.styleSheets, function(sheet) {
    if (/sys42/.test(sheet.href)) {
      $io.arr.all(sheet.rules || sheet.cssRules, function(rule) {
        if (rule.selectorText && /^\.fx_\w+/.test(rule.selectorText)) {
          washed.push(rule.selectorText.replace("+"rip".fx_"+"rip", "+"rip""+"rip"));
        }
      });
    }
  });
  $el.each("+"rip"filter"+"rip", function(tileHolder) {
    washed.push(tileHolder.id.replace("+"rip"fx_"+"rip", "+"rip""+"rip"));
    stylesheet.insertRule("+"rip"."+"rip" + tileHolder.id + ' {-webkit-filter: url("+"rip"#' + tileHolder.id + '"+"rip");}', 0);
    stylesheet.insertRule("+"rip"."+"rip" + tileHolder.id + ' {filter: url("+"rip"#' + tileHolder.id + '"+"rip");}', 0);
  });
  /** @type {!Array<?>} */
  self._fx = washed.sort();
  $window.config({
    dest : self._dom.desktop,
    dock : document.getElementById("+"rip"s42_dock"+"rip"),
    ondestroy : function(type) {
      if (!type && self._selected.length) {
        self._selected[0].focus();
      }
    },
    animationIn : self.devmode ? "+"rip""+"rip" : "+"rip"random"+"rip",
    animationOut : self.devmode ? "+"rip""+"rip" : "+"rip"random"+"rip",
    contextmenu : {
      "+"rip"before:Close"+"rip" : [{
        name : "+"rip"Glitch"+"rip",
        action : function() {
          $exe.call({
            silent : true
          }, "+"rip"glitch"+"rip", this.el.base);
        }
      }, {
        name : "+"rip"IE6"+"rip",
        action : function() {
          $exe.call({
            silent : true
          }, "+"rip"ie6"+"rip", this.el.base);
        }
      }, {
        name : "+"rip"---"+"rip"
      }, {
        name : "+"rip"FX"+"rip",
        items : function() {
          var data = this;
          /** @type {!Array} */
          var result = [];
          return $io.arr.all(["+"rip"none"+"rip"].concat(self._apps.fx.effects), function(value) {
            if (!data.fx) {
              /** @type {string} */
              data.fx = "+"rip"none"+"rip";
            }
            result.push({
              name : value,
              radio : "+"rip"FX_list"+"rip",
              selected : data.fx === value,
              action : function(type) {
                /** @type {string} */
                data.fx = value;
                data.el.base.className = data.el.base.className.replace(/fx_\w+/, "+"rip""+"rip");
                if ("+"rip"none"+"rip" !== value) {
                  $exe.call({
                    silent : true
                  }, "+"rip"fx"+"rip", value, data.el.base);
                }
              }
            });
          }), result;
        }
      }, {
        name : "+"rip"---"+"rip"
      }]
    },
    headerBtn : [{
      name : "+"rip"help"+"rip",
      init : function() {
        return !!this.help;
      },
      action : function() {
        $alert.info(this.cfg.help);
      }
    }, {
      name : "+"rip"pin"+"rip",
      title : "+"rip"pin this window (it will reopen each time you boot windows93)"+"rip",
      init : function() {
      },
      action : function(type) {
        var p = type.target;
        if (this.cfg.caller.that.pinned) {
          delete self._pins[this.cfg.caller.that.pinned];
          /** @type {null} */
          this.cfg.caller.that.pinned = null;
          p.classList.remove("+"rip"pressed"+"rip");
        } else {
          var toolboxWidth = this.el.body.offsetWidth;
          var calendarHeight = this.el.body.offsetHeight;
          var gtop = this.el.base.offsetTop;
          var left = this.el.base.offsetLeft;
          self._pins.push([this.cfg.caller.arg.command, {
            width : toolboxWidth,
            height : calendarHeight,
            top : gtop,
            left : left
          }]);
          $route("+"rip""+"rip");
          p.classList.add("+"rip"pressed"+"rip");
        }
      }
    }]
  });
  $screenshot.config({
    default : self._dom.screen
  });
  $notif.config({
    default : self._dom.clock,
    dest : self._dom.desktop
  });
  $alert.config({
    sound : function(name) {
      if (name && self._sound[name]) {
        self._sound[name].play();
      }
    }
  });
});
system42("+"rip"start"+"rip", function(self) {
  var label;
  var container;
  var options = {
    find : function() {
      $alert("+"rip"<b>Did you know ?</b><br>You can use Find to locate your real father.<br>But I will save you the trouble.<br><b>Windows 93 is your real father.</b>"+"rip");
    },
    help : function() {
      $exe("+"rip"clippy"+"rip");
    },
    run : function() {
      $alert.error("+"rip"There is nowhere you can run"+"rip");
    },
    reboot : function() {
      $exe("+"rip"reboot"+"rip");
    },
    settings : function() {
      $window({
        title : "+"rip"Settings"+"rip",
        html : $form.build(self._settings).el,
        width : 400,
        btnOk : "+"rip"OK"+"rip",
        btnCancel : "+"rip"Cancel"+"rip",
        onclose : function(name, e) {
        }
      });
    },
    format : function() {
      $exe("+"rip"format"+"rip");
    },
    fullscreen : function() {
      $fullscreen();
    },
    shutdown : function() {
      $exe("+"rip"shutdown"+"rip");
    }
  };
  /** @type {!Array} */
  var artistTrack = [{
    name : "+"rip"Programs"+"rip",
    icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/programs.png"+"rip",
    items : function() {
      return m = self._apps, _regExpPipedSegments = [], nonExistingProperties = [], expected = Object.keys(m), $io.arr.all(expected.sort(), function(name) {
        if (m[name] && m[name].exec) {
          var username = m[name].name ? name + ' <em class="+"rip"startmenu_cmd"+"rip">(' + m[name].name + "+"rip")</em>"+"rip" : name;
          var imagePath = m[name].icon || "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/programs.png"+"rip";
          if (0 !== imagePath.indexOf("+"rip"/"+"rip")) {
            /** @type {string} */
            imagePath = "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/"+"rip" + imagePath;
          }
          (m[name].cmd ? _regExpPipedSegments : nonExistingProperties).push({
            name : username,
            icon : imagePath,
            action : (complete_id = name, function() {
              $exe(complete_id);
            })
          });
        }
        var complete_id;
      }), nonExistingProperties;
      var m;
      var _regExpPipedSegments;
      var nonExistingProperties;
      var expected;
    }
  }, {
    name : "+"rip"Documents"+"rip",
    icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/documents.png"+"rip",
    items : function() {
      return function get(response, path) {
        /** @type {!Array} */
        var menuItems = [];
        /** @type {!Array} */
        var menu = [];
        var key;
        for (key in response) {
          if (response.hasOwnProperty(key) && "+"rip"."+"rip" !== key && "+"rip".."+"rip" !== key) {
            if ("+"rip"number"+"rip" == typeof response[key]) {
              var icon = $fs.utils.getInfo(key);
              var node = $fs.utils.getOpeners(key);
              menuItems.push({
                name : key,
                icon : icon.icon,
                action : function(name, addedRenderer, renameColumn) {
                  return function() {
                    $exe(renameColumn[0] + "+"rip" "+"rip" + path + name);
                  };
                }(key, 0, node)
              });
            } else {
              if ($io.is.obj(response[key]) || $io.is.arr(response[key])) {
                menu.push({
                  name : key,
                  icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/places/16/folder.png"+"rip",
                  items : function(data, s) {
                    return function() {
                      return get(data, s);
                    };
                  }(response[key], path + key + "+"rip"/"+"rip")
                });
              }
            }
          }
        }
        return menu.sort().concat(menuItems.sort());
      }(self._files.c, "+"rip"c/"+"rip");
    }
  }, {
    name : "+"rip"Fullscreen"+"rip",
    icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/shutdown.png"+"rip",
    action : options.fullscreen
  }, {
    name : "+"rip"Find"+"rip",
    icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/find.png"+"rip",
    action : options.find
  }, {
    name : "+"rip"Help"+"rip",
    icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/help.png"+"rip",
    action : options.help
  }, {
    name : "+"rip"Run..."+"rip",
    icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/run.png"+"rip",
    action : options.run
  }, {
    name : "+"rip"---"+"rip"
  }, {
    name : "+"rip"Reinstall"+"rip",
    icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/install.png"+"rip",
    action : options.format
  }, {
    name : "+"rip"---"+"rip"
  }, {
    name : "+"rip"Reboot..."+"rip",
    icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/shutdown.png"+"rip",
    action : options.reboot
  }, {
    name : "+"rip"Shutdown"+"rip",
    icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/shutdown.png"+"rip",
    action : options.shutdown
  }];
  $menu(document.getElementById("+"rip"s42_start"+"rip"), artistTrack, {
    mode : "+"rip"popup"+"rip",
    position : {
      within : self._dom.desktop
    }
  });
  if (container = self._dom.clock) {
    (function innerTimer() {
      /** @type {!Date} */
      var v = new Date;
      /** @type {number} */
      var s = v.getHours();
      /** @type {number} */
      var m = v.getMinutes();
      if (label !== (s = (s < 10 ? "+"rip"0"+"rip" : "+"rip""+"rip") + s) + "+"rip":"+"rip" + (m = (m < 10 ? "+"rip"0"+"rip" : "+"rip""+"rip") + m)) {
        /** @type {string} */
        label = s + "+"rip":"+"rip" + m;
        /** @type {string} */
        container.textContent = label;
        /** @type {!Date} */
        container.title = v;
      }
      setTimeout(innerTimer, 1e4);
    })();
  }
});
system42("+"rip"register"+"rip", function(self, inDoneFunc) {
  /**
   * @return {undefined}
   */
  function close() {
    self._dom.splash.classList.remove("+"rip"hide"+"rip");
    self._init.home();
    inDoneFunc();
  }
  if (false === self._settings.userData.localInit) {
    self._dom.splash.classList.add("+"rip"hide"+"rip");
    /**
     * @return {?}
     */
    var start = function() {
      /** @type {(Element|null)} */
      var dayEle = document.getElementById("+"rip"WELCOME"+"rip");
      /** @type {(Element|null)} */
      var accountForm = document.getElementById("+"rip"TERMS"+"rip");
      /** @type {(Element|null)} */
      var divChatButton = document.getElementById("+"rip"PROMPT"+"rip");
      /** @type {(Element|null)} */
      var spec = document.getElementById("+"rip"USERNAME"+"rip");
      document.getElementById("+"rip"SERIAL"+"rip");
      if (accountForm.classList.contains("+"rip"hide"+"rip") && divChatButton.classList.contains("+"rip"hide"+"rip")) {
        dayEle.classList.add("+"rip"hide"+"rip");
        accountForm.classList.remove("+"rip"hide"+"rip");
        /** @type {string} */
        this.el.btnOk.innerHTML = "+"rip"Didn't Read Lol ^^"+"rip";
      } else {
        if (!divChatButton.classList.contains("+"rip"hide"+"rip")) {
          return self._settings.userData.nick = spec.value || "+"rip"anonymous"+"rip", self._settings.userData.localInit = true, close(), true;
        }
        accountForm.classList.add("+"rip"hide"+"rip");
        divChatButton.classList.remove("+"rip"hide"+"rip");
        /** @type {string} */
        this.el.btnOk.innerHTML = "+"rip"Let's ROCK"+"rip";
      }
      return false;
    };
    $window({
      url : "+"rip"/wizard.php"+"rip",
      ajax : true,
      title : "+"rip"Setup Wizard"+"rip",
      btnCancel : "+"rip"Nope"+"rip",
      animationIn : "+"rip"flip"+"rip",
      animationOut : "+"rip""+"rip",
      center : true,
      height : 350,
      width : 510,
      btnOk : "+"rip"Cool Story, Bro"+"rip",
      onok : start,
      oncancel : start
    });
  } else {
    close();
  }
});
system42("+"rip"reveal"+"rip", function(self, saveNotifs) {
  if (!self.devmode) {
    self._sound.boot.play();
  }
  setTimeout(function() {
    self._dom.splash.parentNode.removeChild(self._dom.splash);
    self._dom.taskbar.classList.remove("+"rip"hide"+"rip");
    self._dom.desktop.classList.remove("+"rip"invisible"+"rip");
    if (!self.devmode) {
      setTimeout(function() {
        $el.each("+"rip".ui_icon"+"rip", function(focusedObj) {
          setTimeout(function() {
            focusedObj.classList.remove("+"rip"hide"+"rip");
          }, Math.abs(1e3 * Math.random()) + 100);
        });
      }, 100);
    }
    $el(self._dom.desktop).on("+"rip"click"+"rip", "+"rip".js_error a"+"rip", function(event) {
      return event.target.href && $exe("+"rip"code"+"rip", event.target.href), false;
    });
    $el(self._dom.screen).on("+"rip"drag dragenter dragover dragleave drop"+"rip", function(event) {
      event.preventDefault();
    });
    $route.on("+"rip"change"+"rip", function(e) {
      $exe(e);
    });
    $route.init();
    document.documentElement.focus();
    /**
     * @return {undefined}
     */
    window.onerror = function() {
      $alert.error(arguments);
    };
    saveNotifs();
  }, self.devmode ? 0 : 600);
});
system42("+"rip"exe"+"rip", function(context) {
  /**
   * @param {!Object} fn
   * @param {!Object} val
   * @return {?}
   */
  function self(fn, val) {
    var options = this || {};
    var isString = options && options.cli;
    return true !== fn.terminal || isString ? fn.exec.apply({
      le : context,
      that : options,
      cli : isString ? options : null,
      arg : val
    }) : run.call(this, "+"rip"terminal"+"rip", "+"rip""+"rip", {
      onopen : function(name) {
        setTimeout(function() {
          fn.exec.apply({
            le : context,
            that : options,
            cli : name,
            arg : val
          });
        }, 100);
      }
    }), true;
  }
  /**
   * @param {!Object} value
   * @param {?} i
   * @param {!Object} options
   * @return {?}
   */
  function run(value, i, options) {
    if (value && "+"rip"string"+"rip" == typeof value && -1 != value.indexOf("+"rip" | "+"rip")) {
      var args = this;
      /** @type {!Array<string>} */
      var o = value.split("+"rip" | "+"rip");
      return args.silent || ($route(value), args.slient = true), $io.arr.each(o, function(fn, delayedBy) {
        setTimeout(function() {
          run.call(args, fn);
        }, 700 * delayedBy);
      }), true;
    }
    if (value) {
      if (value.nodeType && 1 === value.nodeType) {
        var options = $extend({}, value.dataset);
        if (options.exe) {
          return run(options.exe, i, options);
        }
        if (options.alert) {
          return $alert(options.alert), true;
        }
        if (options.error) {
          return $alert.error(options.error), true;
        }
      } else {
        if (data[value] && data[value].exec) {
          var a = self.call(this, data[value], {
            command : value,
            arguments : Array.prototype.slice.call(arguments, 1)
          });
          return false !== a && true !== data[value].silent && $route(value), a;
        }
        if ("+"rip"string"+"rip" == typeof value) {
          if (0 === value.indexOf("+"rip"http"+"rip")) {
            return options && void 0 !== options.iframable ? init(value, options) : run.parseURL(value, function(opts) {
              init(opts.exe, opts);
            }), true;
          }
          var result;
          try {
            result = get(value);
          } catch (t) {
          }
          if (result && result.program && data[result.program] && data[result.program].exec) {
            return options && (result.launcher = options), self.call(this, data[result.program], result);
          }
          try {
            if (0 !== value.indexOf("+"rip"/"+"rip") && this && this.cfg && this.cfg.cwd) {
              /** @type {string} */
              value = this.cfg.cwd + "+"rip"/"+"rip" + value;
            }
            var converted = $fs.utils.exist(value);
            if (false !== converted) {
              return "+"rip"object"+"rip" == typeof converted.obj && "+"rip"/"+"rip" !== value.slice(-1) && (value = value + "+"rip"/"+"rip"), function(options) {
                var hash = $url.getDomain(options.url);
                if (hash && location.hostname != hash) {
                  return $window(options), true;
                }
                if ("+"rip"/"+"rip" === options.url.slice(-1)) {
                  return $explorer(options.url), true;
                }
                if (options.url) {
                  var command;
                  if (options.openers) {
                    command = data[options.openers.split("+"rip","+"rip")[0]];
                  } else {
                    var pages = $fs.utils.getOpeners(options.url);
                    if (pages[0]) {
                      command = data[pages[0]];
                    }
                  }
                  if (command && command.exec) {
                    return self.call(this, command, {
                      command : options.url,
                      arguments : [options.url],
                      options : options
                    }), true;
                  }
                }
                return false;
              }.call(this, {
                url : value
              });
            }
          } catch (t) {
          }
        }
      }
    }
    return false;
  }
  /**
   * @param {!Object} str
   * @return {?}
   */
  function get(str) {
    var size;
    /** @type {!Array} */
    var sizes = [];
    /** @type {!Array} */
    var key_sizes = [];
    var options = {
      long : {},
      short : {}
    };
    /** @type {boolean} */
    var strict = false;
    /** @type {boolean} */
    var a = false;
    /** @type {boolean} */
    var d = false;
    /** @type {number} */
    var day = 0;
    /** @type {number} */
    var expirationDate = 0;
    /** @type {number} */
    var c = 0;
    var i = str.length;
    for (; c <= i; c++) {
      if (size = str.charAt(c), strict || "+"rip"-"+"rip" !== size || !a && "+"rip" "+"rip" !== str.charAt(c - 1)) {
        if ('"+"rip"' !== size || "+"rip"\\"+"rip" === str.charAt(c - 1)) {
          if (!strict && "+"rip" "+"rip" === size || c === i) {
            if (a) {
              var _field$split2 = key_sizes[day].split("+"rip"="+"rip");
              var name = _field$split2[0];
              var thisEl = _field$split2[1];
              /** @type {number} */
              var thisElAsNumber = 1 * thisEl;
              if (thisEl = thisElAsNumber == thisEl ? thisElAsNumber : thisEl, d) {
                if (-1 < name.indexOf("+"rip"."+"rip")) {
                  $io.obj.path(options.long, name, thisEl || true);
                } else {
                  options.long[name] = thisEl || true;
                }
              } else {
                var args = name.split("+"rip""+"rip");
                /** @type {number} */
                var i = 0;
                var arg_count = args.length;
                for (; i < arg_count; i++) {
                  options.short[args[i]] = thisEl || true;
                }
              }
              day++;
              /** @type {boolean} */
              a = d = false;
            } else {
              expirationDate++;
            }
          } else {
            if (a) {
              key_sizes[day] = key_sizes[day] ? key_sizes[day] + size : size;
            } else {
              sizes[expirationDate] = sizes[expirationDate] ? sizes[expirationDate] + size : size;
            }
          }
        } else {
          /** @type {boolean} */
          strict = !strict;
        }
      } else {
        if ("+"rip"-"+"rip" === str.charAt(c + 1)) {
          /** @type {boolean} */
          d = true;
        }
        /** @type {boolean} */
        a = true;
      }
    }
    var type = sizes.shift();
    return !(!data[type] || !data[type].exec) && ($io.obj.each(options.short, function(loadedPlugin, name) {
      if (data[type].options && data[type].options[name]) {
        options.long[data[type].options[name][0]] = loadedPlugin;
      } else {
        options.long[name] = loadedPlugin;
      }
    }), {
      command : str,
      program : type,
      arguments : sizes,
      options : options.long
    });
  }
  /**
   * @param {(Object|string)} id
   * @param {!Object} settings
   * @return {undefined}
   */
  function init(id, settings) {
    $io.obj.all(context._get.embed, function(r) {
      if (r.playerRegExp.test(id)) {
        return settings.iframable = true, id.replace(r.playerRegExp, function(canCreateDiscussions, e, i) {
          id = r.buildSrcURL(e, i);
        }), console.log(id), true;
      }
    });
    if ("+"rip"true"+"rip" === settings.iframable || true === settings.iframable) {
      self.call(this, data.iframe, {
        command : id,
        program : "+"rip"iframe"+"rip",
        arguments : [id],
        launcher : settings,
        options : settings
      });
    } else {
      $alert.info('<a target="+"rip"_blank"+"rip" href="+"rip"' + id + '"+"rip">' + id + "+"rip"</a><br>don't allow iframe embeding..."+"rip");
    }
  }
  /**
   * @param {string} scenes
   * @param {!Array} options
   * @return {?}
   */
  function render(scenes, options) {
    /** @type {!Array} */
    var responseGroup = [];
    return $io.obj.all(options, function(sizeclass, name) {
      if (-1 != scenes.indexOf(name)) {
        responseGroup.push([name, sizeclass].join("+"rip"="+"rip"));
      }
    }), 0 < responseGroup.length ? "+"rip"?"+"rip" + responseGroup.join("+"rip"&"+"rip") : "+"rip""+"rip";
  }
  var data = context._apps;
  /**
   * @param {!Object} input
   * @param {!Function} cb
   * @param {!Object} string
   * @return {?}
   */
  run.parseURL = function(input, cb, string) {
    var object = {
      title : input.replace(/https?:\/\/(www\.)?/, "+"rip""+"rip").replace(/\/$/, "+"rip""+"rip"),
      exe : input,
      icon : "+"rip"shortcut.png"+"rip"
    };
    return console.log(input, object), $url.checkFavicon(input, function(canCreateDiscussions, s) {
      if (canCreateDiscussions) {
        /** @type {string} */
        object.icon = s;
        (string || $noop)(object);
      }
      $ajax.post("+"rip"/proxy.php"+"rip", {
        url : input,
        favicon : !canCreateDiscussions
      }).done(function(data) {
        if (data.favicon) {
          $url.checkImage(data.favicon, function(canCreateDiscussions) {
            object.icon = data.favicon;
            object.iframable = data.iframable;
            cb(object);
          });
        } else {
          object.iframable = data.iframable;
          cb(object);
        }
      });
    }), object;
  };
  /**
   * @return {?}
   */
  run.silent = function() {
    return run.apply({
      silent : true
    }, arguments);
  };
  /**
   * @param {string} geometry
   * @return {?}
   */
  run.parseGeometry = function(geometry) {
    var result = {};
    return geometry.replace(/(?:(\d+|auto)x(\d+|auto))?(?:([+-])(\d+|auto)([+-])(\d+|auto))?/, function(canCreateDiscussions, size, value, chrs, rightStart, key, y) {
      result.width = size || "+"rip"auto"+"rip";
      result.height = value || "+"rip"auto"+"rip";
      if (chrs) {
        result.top = "+"rip"+"+"rip" === key ? y : "+"rip"auto"+"rip";
        result.bottom = "+"rip"-"+"rip" === key ? y : "+"rip"auto"+"rip";
        result.left = "+"rip"+"+"rip" === chrs ? rightStart : "+"rip"auto"+"rip";
        result.right = "+"rip"-"+"rip" === chrs ? rightStart : "+"rip"auto"+"rip";
      } else {
        /** @type {string} */
        result.top = "+"rip"auto"+"rip";
        /** @type {string} */
        result.bottom = "+"rip"auto"+"rip";
        /** @type {string} */
        result.left = "+"rip"auto"+"rip";
        /** @type {string} */
        result.right = "+"rip"auto"+"rip";
      }
    }), result;
  };
  /** @type {function(!Object): ?} */
  run.parse = get;
  /**
   * @param {string} val
   * @return {?}
   */
  run.stringify = function(val) {
    /**
     * @param {string} fn
     * @return {?}
     */
    function filter(fn) {
      return -1 < (fn + "+"rip""+"rip").indexOf("+"rip" "+"rip") ? '"+"rip"' + fn + '"+"rip"' : fn;
    }
    if ("+"rip"string"+"rip" == typeof val) {
      return "+"rip" "+"rip" + filter(val);
    }
    /** @type {string} */
    var acc = "+"rip""+"rip";
    return $io.obj.each(val, function(val, canCreateDiscussions) {
      if (!("+"rip"string"+"rip" != typeof val && "+"rip"number"+"rip" != typeof val)) {
        /** @type {string} */
        val = (val + "+"rip""+"rip").replace(/"+"rip"/g, '\\"+"rip"');
        acc = acc + ("+"rip" --"+"rip" + canCreateDiscussions + "+"rip"="+"rip" + filter(val));
      }
    }), acc;
  };
  /** @type {function(!Object, ?, !Object): ?} */
  window.$exe = run;
  context._get.embed = {
    youtube : {
      type : "+"rip"youtube"+"rip",
      settings : {
        autoplay : 0,
        controls : 1,
        loop : 0
      },
      whitelist : ["+"rip"autohide"+"rip", "+"rip"cc_load_policy"+"rip", "+"rip"color"+"rip", "+"rip"disablekb"+"rip", "+"rip"enablejsapi"+"rip", "+"rip"autoplay"+"rip", "+"rip"controls"+"rip", "+"rip"loop"+"rip", "+"rip"playlist"+"rip", "+"rip"rel"+"rip", "+"rip"wmode"+"rip", "+"rip"start"+"rip", "+"rip"showinfo"+"rip", "+"rip"end"+"rip", "+"rip"fs"+"rip", "+"rip"hl"+"rip", "+"rip"iv_load_policy"+"rip", "+"rip"list"+"rip", "+"rip"listType"+"rip", "+"rip"modestbranding"+"rip", "+"rip"origin"+"rip", "+"rip"playerapiid"+"rip", "+"rip"playsinline"+"rip", "+"rip"theme"+"rip"],
      transformAttrMap : {},
      processSettings : function(data, p) {
        return 1 == data.loop && null == data.playlist && (data.playlist = p), data;
      },
      buildSrcURL : function(originIdentifier, destIdentifier) {
        return originIdentifier + this.playerID + destIdentifier + render(this.whitelist, this.processSettings(this.settings));
      },
      playerID : "+"rip"www.youtube.com/embed/"+"rip",
      playerRegExp : /([a-z:\/]*\/\/)(?:www\.)?(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      timeRegExp : /t=(([0-9]+)h)?(([0-9]{1,2})m)?(([0-9]+)s?)?/,
      isAdditionaResRequired : function() {
        return false;
      },
      additionalRes : []
    },
    vimeo : {
      type : "+"rip"vimeo"+"rip",
      settings : {
        autoplay : 0,
        loop : 0,
        api : 0,
        player_id : "+"rip""+"rip"
      },
      whitelist : ["+"rip"autoplay"+"rip", "+"rip"autopause"+"rip", "+"rip"badge"+"rip", "+"rip"byline"+"rip", "+"rip"color"+"rip", "+"rip"portrait"+"rip", "+"rip"loop"+"rip", "+"rip"api"+"rip", "+"rip"playerId"+"rip", "+"rip"title"+"rip"],
      transformAttrMap : {
        playerId : "+"rip"player_id"+"rip"
      },
      processSettings : function(settings, holdPosition) {
        return settings;
      },
      buildSrcURL : function(originIdentifier, destIdentifier) {
        return originIdentifier + this.playerID + destIdentifier + render(this.whitelist, this.processSettings(this.settings));
      },
      playerID : "+"rip"player.vimeo.com/video/"+"rip",
      playerRegExp : /([a-z:\/]*\/\/)(?:www\.)?vimeo\.com\/(?:channels\/[A-Za-z0-9]+\/)?([A-Za-z0-9]+)/,
      timeRegExp : "+"rip""+"rip",
      isAdditionaResRequired : function() {
        return false;
      },
      additionalRes : []
    },
    dailymotion : {
      type : "+"rip"dailymotion"+"rip",
      settings : {
        autoPlay : 0,
        logo : 0
      },
      whitelist : ["+"rip"api"+"rip", "+"rip"autoPlay"+"rip", "+"rip"background"+"rip", "+"rip"chromeless"+"rip", "+"rip"controls"+"rip", "+"rip"foreground"+"rip", "+"rip"highlight"+"rip", "+"rip"html"+"rip", "+"rip"id"+"rip", "+"rip"info"+"rip", "+"rip"logo"+"rip", "+"rip"network"+"rip", "+"rip"quality"+"rip", "+"rip"related"+"rip", "+"rip"startscreen"+"rip", "+"rip"webkit-playsinline"+"rip", "+"rip"syndication"+"rip"],
      transformAttrMap : {},
      processSettings : function(settings, holdPosition) {
        return settings;
      },
      buildSrcURL : function(i, t) {
        return i + this.playerID + t + render(this.whitelist, this.processSettings(this.settings));
      },
      playerID : "+"rip"www.dailymotion.com/embed/video/"+"rip",
      playerRegExp : /([a-z:\/]*\/\/)(?:www\.)?www\.dailymotion\.com\/video\/([A-Za-z0-9]+)/,
      timeRegExp : /start=([0-9]+)/,
      isAdditionaResRequired : function() {
        return false;
      },
      additionalRes : []
    },
    youku : {
      type : "+"rip"youku"+"rip",
      settings : {},
      whitelist : [],
      transformAttrMap : {},
      processSettings : function(settings, holdPosition) {
        return settings;
      },
      buildSrcURL : function(i, t) {
        return i + this.playerID + t + render(this.whitelist, this.processSettings(this.settings));
      },
      playerID : "+"rip"player.youku.com/embed/"+"rip",
      playerRegExp : /([a-z:\/]*\/\/)(?:www\.)?youku\.com\/v_show\/id_([A-Za-z0-9]+).html/,
      timeRegExp : "+"rip""+"rip",
      isAdditionaResRequired : function() {
        return false;
      },
      additionalRes : []
    },
    vine : {
      type : "+"rip"youku"+"rip",
      settings : {
        audio : 0,
        start : 0,
        type : "+"rip"simple"+"rip"
      },
      whitelist : ["+"rip"audio"+"rip", "+"rip"start"+"rip", "+"rip"type"+"rip"],
      transformAttrMap : {},
      processSettings : function(settings, holdPosition) {
        return delete settings.type, settings;
      },
      buildSrcURL : function(originIdentifier, destIdentifier) {
        var st = this.settings.type;
        return originIdentifier + this.playerID + destIdentifier + /embed/ + st + render(this.whitelist, this.processSettings(this.settings));
      },
      playerID : "+"rip"vine.co/v/"+"rip",
      playerRegExp : /([a-z:\/]*\/\/)(?:www\.)?vine\.co\/v\/([A-Za-z0-9]+)/,
      timeRegExp : "+"rip""+"rip",
      isAdditionaResRequired : function() {
        return !window.VINE_EMBEDS;
      },
      additionalRes : [{
        element : '<script src="+"rip"//platform.vine.co/static/scripts/embed.js"+"rip">\x3c/script>'
      }]
    }
  };
});
!function(keyboard) {
  /**
   * @param {!Object} obj
   * @param {!Object} t
   * @return {?}
   */
  function get(obj, t) {
    return le._get.ext.mime[t || obj] || null;
  }
  /**
   * @param {number} preventPushState
   * @param {?} id
   * @param {!Object} events
   * @return {?}
   */
  function init(preventPushState, id, events) {
    /**
     * @param {string} value
     * @param {?} type
     * @return {undefined}
     */
    function callback(value, type) {
      if (!result) {
        $io.obj.each(interpolateValue[value], function(canCreateDiscussions, path2) {
          path2.replace(/(.+)\./, function(canCreateDiscussions, lanName) {
            $io.arr.all(lanName.split("+"rip"_"+"rip"), function(imagePixelModule) {
              if (type === imagePixelModule) {
                /** @type {string} */
                result = "+"rip"/c/sys/skins/"+"rip" + le._settings.skin + "+"rip"/"+"rip" + value + "+"rip"/"+"rip" + path2;
              }
            });
          });
        });
      }
    }
    var result;
    var source;
    var interpolateValue = le._files.c.sys.skins[le._settings.skin || "+"rip"w93"+"rip"];
    return interpolateValue || (interpolateValue = le._files.c.sys.skins.w93), source = (events || "+"rip""+"rip").split("+"rip"/"+"rip"), callback("+"rip"ext"+"rip", id), callback("+"rip"type"+"rip", source[1]), callback("+"rip"mime"+"rip", source[0]), result || (result = "+"rip"/c/sys/skins/"+"rip" + le._settings.skin + "+"rip"/file.png"+"rip"), result;
  }
  /**
   * @param {!Object} v
   * @return {?}
   */
  function add(v) {
    return "+"rip"/"+"rip" === v ? "+"rip"/c/sys/skins/"+"rip" + le._settings.skin + "+"rip"/devices/computer.png"+"rip" : "+"rip"/a/"+"rip" === v ? "+"rip"/c/sys/skins/"+"rip" + le._settings.skin + "+"rip"/devices/drive-storage.gif"+"rip" : "+"rip"/c/"+"rip" === v ? "+"rip"/c/sys/skins/"+"rip" + le._settings.skin + "+"rip"/devices/drive-harddisk.gif"+"rip" : self.utils.resolvePath(v) === le._path.home ? "+"rip"/c/sys/skins/"+"rip" + le._settings.skin + "+"rip"/places/user-home.png"+"rip" : "+"rip"/c/sys/skins/"+"rip" + le._settings.skin + "+"rip"/places/folder.png"+"rip";
  }
  var self = {};
  self.utils = {};
  /**
   * @param {!Object} name
   * @param {!Object} id
   * @return {?}
   */
  self.utils.find = function(name, id) {
    return $io.find(name, id, le._files, "+"rip"/"+"rip", ["+"rip"."+"rip", "+"rip".."+"rip"]);
  };
  /**
   * @param {!Object} path
   * @return {?}
   */
  self.utils.resolvePath = function(path) {
    return path = (path = (path = (path = path.replace(/^~|\$HOME/g, le._path.home)).replace(/~|\$HOME/g, le._path.home.replace(/^\//, "+"rip""+"rip"))).replace(/\$SKIN/g, le._path.skin)).replace(/\/\//g, "+"rip"/"+"rip");
  };
  /**
   * @param {!Array} criteria
   * @return {?}
   */
  self.utils.getMenuOpenWith = function(criteria) {
    if (!criteria) {
      /** @type {!Array} */
      criteria = [];
    }
    if ("+"rip"string"+"rip" == typeof criteria) {
      /** @type {!Array} */
      criteria = [criteria];
    }
    /** @type {!Array} */
    var menuItems = [];
    /** @type {!Array} */
    var hash_settings = [];
    return $io.arr.all(criteria, function(li) {
      if (1 === li.nodeType) {
        li = li.getAttribute("+"rip"data-path"+"rip");
      }
      var s = self.utils.getOpeners(li);
      if (s = s.concat("+"rip"hexed"+"rip", "+"rip"code"+"rip", "+"rip"iframe"+"rip")) {
        $io.arr.all(s, function(i) {
          if (-1 === hash_settings.indexOf(i)) {
            hash_settings.push(i);
            var awesomeIcon = le._apps[i].icon ? self.utils.normalizeIcon(le._apps[i].icon) : "+"rip"/c/sys/skins/"+"rip" + le._settings.skin + "+"rip"/programs.png"+"rip";
            menuItems.push({
              name : le._apps[i].name || $io.str.capitalise(i),
              icon : awesomeIcon,
              action : function(type) {
                $io.arr.all(criteria, function(t) {
                  if (1 === t.nodeType) {
                    t = t.getAttribute("+"rip"data-path"+"rip");
                  }
                  setTimeout(function() {
                    $exe(i + ' "+"rip"' + t + '"+"rip"');
                  }, 0);
                });
              }
            });
          }
        });
      }
    }), menuItems.length ? menuItems : [{
      name : "+"rip"No programs found..."+"rip",
      disabled : true
    }];
  };
  /**
   * @param {!Object} item
   * @param {!Array} value
   * @param {!Array} type
   * @return {?}
   */
  self.utils.getFileMenu = function(item, value, type) {
    if ("+"rip"function"+"rip" == typeof value) {
      /** @type {!Array} */
      type = value;
      /** @type {boolean} */
      value = false;
    }
    var el = $io.obj.getPath(le._files, item, "+"rip"/"+"rip");
    /** @type {!Array} */
    var items = [];
    var files = {};
    return $io.obj.all(el, function(propOrCb, name) {
      if ("+"rip"."+"rip" !== name && "+"rip".."+"rip" !== name) {
        /** @type {!Array} */
        var result = [];
        /** @type {!Array} */
        files[name] = [];
        $io.obj.all(propOrCb, function(canCreateDiscussions, yuiModule) {
          if ("+"rip"."+"rip" !== yuiModule && "+"rip".."+"rip" !== yuiModule) {
            files[name].push(yuiModule);
            result.push({
              name : yuiModule,
              radio : value,
              folder : name,
              action : type
            });
          }
        });
        files[name] = files[name].sort(function(from_msg, from_rule) {
          return from_msg.localeCompare(from_rule);
        });
        /** @type {!Array<?>} */
        result = result.sort(function(a, termB) {
          return a.name.localeCompare(termB.name);
        });
        items.push({
          name : name,
          items : result
        });
      }
    }), items = items.sort(function(a, termB) {
      return a.name.localeCompare(termB.name);
    }), {
      path : item,
      foldersList : Object.keys(files),
      folders : files,
      menu : items
    };
  };
  /**
   * @param {string} path
   * @param {string} name
   * @return {?}
   */
  self.utils.replaceExt = function(path, name) {
    return self.utils.getExt(path) ? path.replace(/\.[0-9a-z]+$/, name ? "+"rip"."+"rip" + name : "+"rip""+"rip") : path + (name ? "+"rip"."+"rip" + name : "+"rip""+"rip");
  };
  /**
   * @param {!Object} path
   * @return {?}
   */
  self.utils.isFolder = function(path) {
    return "+"rip"/"+"rip" === path.slice(-1);
  };
  /**
   * @param {!Object} name
   * @param {!Function} element
   * @return {undefined}
   */
  self.utils.isFolderEmpty = function(name, element) {
    /** @type {boolean} */
    var byBinding = true;
    $file.iterateFolder(name, function(obj) {
      if (!self.utils.isFolder(obj)) {
        /** @type {boolean} */
        byBinding = false;
      }
    }).done(function() {
      element(byBinding);
    });
  };
  /**
   * @param {string} source
   * @return {?}
   */
  self.utils.isShortcut = function(source) {
    return /\.lnk42$/.test(source);
  };
  /**
   * @param {!Element} state
   * @return {?}
   */
  self.utils.isDownloadable = function(state) {
    if (state) {
      var icon = state.dataset.url || state.href;
      return !(icon && "+"rip"/"+"rip" !== icon.slice(-1));
    }
    /** @type {boolean} */
    var n = false;
    return $file.eachSelection(function(canCreateDiscussions, state) {
      var history = state.dataset.url || state.href;
      if (!history || "+"rip"/"+"rip" === history.slice(-1)) {
        return n = false;
      }
      /** @type {boolean} */
      n = true;
    }), n;
  };
  /**
   * @param {!Object} type
   * @return {?}
   */
  self.utils.getName = function(type) {
    /** @type {!Array<string>} */
    var t = ("+"rip"string"+"rip" == typeof type ? type : "+"rip""+"rip").split("+"rip"/"+"rip");
    return "+"rip"/"+"rip" === type.slice(-1) ? t[t.length - 2] : t.pop();
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  self.utils.getFileName = function(key) {
    return ("+"rip"string"+"rip" == typeof key ? key : "+"rip""+"rip").split("+"rip"/"+"rip").pop();
  };
  /**
   * @param {(Object|string)} type
   * @return {?}
   */
  self.utils.getFolderName = function(type) {
    /** @type {!Array<string>} */
    var sepor = ("+"rip"string"+"rip" == typeof type ? type : "+"rip""+"rip").split("+"rip"/"+"rip");
    return "+"rip"/"+"rip" === type.slice(-1) ? sepor[sepor.length - 2] : "+"rip""+"rip";
  };
  /**
   * @param {!Object} type
   * @return {?}
   */
  self.utils.getFolderPath = function(type) {
    /** @type {string} */
    var t = ("+"rip"string"+"rip" == typeof type ? type : "+"rip""+"rip").split("+"rip"/"+"rip").slice(0, -1).join("+"rip"/"+"rip");
    return t + "+"rip"/"+"rip";
  };
  /**
   * @param {!Object} str
   * @return {?}
   */
  self.utils.getExt = function(str) {
    var m = (str || "+"rip""+"rip").match(/(?:\.)([0-9a-z]+)(?:[!?].+)?$/i);
    return m && m[1] ? m[1].toLowerCase() : "+"rip""+"rip";
  };
  /**
   * @param {!Object} path
   * @return {?}
   */
  self.utils.getMime = function(path) {
    return get(path, self.utils.getExt(path));
  };
  /**
   * @param {!Object} name
   * @return {?}
   */
  self.utils.getIcon = function(name) {
    if (self.utils.isFolder(name)) {
      return add(name);
    }
    var x = self.utils.getExt(name);
    var c = get(name, x);
    return init(0, x, c);
  };
  /**
   * @param {string} host
   * @return {?}
   */
  self.utils.normalizeIcon = function(host) {
    return 0 === host.indexOf("+"rip"/"+"rip") || 0 === host.indexOf("+"rip"http"+"rip") ? host : "+"rip"/c/sys/skins/"+"rip" + le._settings.skin + "+"rip"/"+"rip" + host;
  };
  /**
   * @param {!Object} id
   * @return {?}
   */
  self.utils.getInfo = function(id) {
    if (self.utils.isFolder(id)) {
      /** @type {string} */
      var last = "+"rip""+"rip";
      return "+"rip"/a/"+"rip" === id ? last = "+"rip"Storage (A:)"+"rip" : "+"rip"/c/"+"rip" === id && (last = "+"rip"System (C:)"+"rip"), {
        icon : add(id),
        name : last
      };
    }
    var data = self.utils.getExt(id);
    var value = get(id, data);
    return {
      ext : data,
      mime : value,
      icon : init(0, data, value),
      name : last = self.utils.getName(id)
    };
  };
  /**
   * @param {!Object} name
   * @return {?}
   */
  self.utils.getOpeners = function(name) {
    var j = self.utils.getExt(name);
    var color = get(name, j);
    /** @type {!Array} */
    var contacts = [];
    return le._settings.defaultApp[j] && (contacts = contacts.concat(le._settings.defaultApp[j])), le._get.ext.apps[j] && (contacts = contacts.concat(le._get.ext.apps[j])), color && $io.arr.all(le._get.mime.apps, function(result) {
      if (result[0].test(color)) {
        if (contacts) {
          if (-1 == contacts.indexOf(result[1])) {
            contacts.push(result[1]);
          }
        } else {
          /** @type {!Array} */
          contacts = [result[1]];
        }
      }
    }), contacts;
  };
  /**
   * @param {string} str
   * @return {?}
   */
  self.utils.parseAccept = function(str) {
    /** @type {!Array} */
    var responseGroup = [];
    var format = {};
    return $io.arr.all(str.split("+"rip","+"rip"), function(inTheme) {
      if (0 === inTheme.indexOf("+"rip"."+"rip")) {
        if (!format.ext) {
          /** @type {!Array} */
          format.ext = [];
        }
        format.ext.push(inTheme.replace(/^\./, "+"rip""+"rip"));
      } else {
        responseGroup.push($io.reg.escape(inTheme.replace("+"rip"*"+"rip", "+"rip"_4_\u00b2_"+"rip")));
      }
    }), responseGroup.length && (format.mimetype = new RegExp(responseGroup.join("+"rip"|"+"rip").replace(/_4_\u00b2_/g, "+"rip".*"+"rip"))), format;
  };
  /**
   * @param {!Object} path
   * @param {string} id
   * @return {?}
   */
  self.utils.getPathObj = function(path, id) {
    if (!path) {
      path = le._path.home;
    }
    if (1 < (path = self.utils.resolvePath(path)).length && "+"rip"/"+"rip" === path.slice(-1)) {
      path = path.slice(0, -1);
    }
    if ("+"rip"/"+"rip" !== (id = id || "+"rip""+"rip").slice(-1)) {
      /** @type {string} */
      id = id + "+"rip"/"+"rip";
    }
    path = 0 === path.indexOf("+"rip"/"+"rip") ? path : id + path;
    var options = $io.obj.getPath(le._files, path, "+"rip"/"+"rip");
    if (void 0 !== options && "+"rip"number"+"rip" != typeof options) {
      var _path = "+"rip"/"+"rip" + $file.getTruePath(options);
      return 1 < _path.length && "+"rip"/"+"rip" === _path.slice(-1) && (_path = _path.slice(0, -1)), {
        cwd : _path,
        obj : options
      };
    }
  };
  /**
   * @param {!Object} path
   * @param {string} id
   * @return {?}
   */
  self.utils.exist = function(path, id) {
    if (!path) {
      path = le._path.home;
    }
    if (1 < (path = self.utils.resolvePath(path)).length && "+"rip"/"+"rip" === path.slice(-1)) {
      path = path.slice(0, -1);
    }
    if ("+"rip"/"+"rip" !== (id = id || "+"rip""+"rip").slice(-1)) {
      /** @type {string} */
      id = id + "+"rip"/"+"rip";
    }
    path = 0 === path.indexOf("+"rip"/"+"rip") ? path : id + path;
    var borderNode = $io.obj.getPath(le._files, path, "+"rip"/"+"rip");
    return void 0 !== borderNode && borderNode;
  };
  /**
   * @param {!Object} b
   * @param {string} status
   * @return {?}
   */
  self.utils.getFolderObj = function(b, status) {
    var sub = self.utils.getFolderPath(b);
    return self.utils.getPathObj(sub, status);
  };
  /**
   * @param {!Object} url
   * @param {string} key
   * @return {?}
   */
  self.utils.iteratePath = function(url, key) {
    var e = self.utils.getPathObj(url, key);
    /** @type {!Array} */
    var dirs = [];
    /** @type {!Array} */
    var themes = [];
    /** @type {!Array} */
    var linesTrimmed = [];
    if (e) {
      return $io.obj.all(e.obj, function(val, item) {
        if ("+"rip"."+"rip" !== item && "+"rip".."+"rip" !== item) {
          if (self.utils.isShortcut(item)) {
            linesTrimmed.push(item);
          } else {
            if ("+"rip"object"+"rip" == typeof val) {
              dirs.push(item);
            } else {
              themes.push(item);
            }
          }
        }
      }), {
        tree : e,
        obj : e.obj,
        cwd : e.cwd,
        dirs : dirs,
        files : themes,
        lnks : linesTrimmed
      };
    }
  };
  keyboard.$fs = self;
}(this);
!function(context) {
  if (!window.URL) {
    window.URL = window.webkitURL;
  }
  var b = {
    getUrl : function(url, callback, params) {
      if (!params) {
        params = $fs.utils.getInfo(url);
      }
      if (0 === (url + "+"rip""+"rip").indexOf("+"rip"/a/"+"rip")) {
        b.open(url, "+"rip"Blob"+"rip", function(videofile) {
          var url = window.URL.createObjectURL(videofile);
          (callback || $noop)(url);
        }, params.mime);
      } else {
        if (0 === (url + "+"rip""+"rip").indexOf("+"rip"c/"+"rip")) {
          /** @type {string} */
          url = "+"rip"/"+"rip" + url;
        }
        (callback || $noop)(url);
      }
    }
  };
  context.$file = b;
  system42(function(self) {
    /**
     * @param {!Object} name
     * @param {!Function} fn
     * @param {!Function} iterator
     * @param {!Object} context
     * @return {undefined}
     */
    function create(name, fn, iterator, context) {
      /** @type {!Object} */
      var value = name;
      if (0 === name.indexOf("+"rip"/a/"+"rip")) {
        value = name.replace(/^\/a\//, "+"rip""+"rip");
        if (-1 < $store.keys().indexOf(value)) {
          (fn || $noop)(value);
        } else {
          (iterator || $noop)(value);
        }
      } else {
        $notif("+"rip"You don't have write permission on this drive"+"rip", name);
        (context || $noop)();
      }
    }
    /**
     * @param {string} o
     * @param {!Function} f
     * @return {undefined}
     */
    function filter(o, f) {
      $db.keys(function(canCreateDiscussions, requestValuesAggs) {
        /** @type {boolean} */
        var n = true;
        $io.arr.all(requestValuesAggs.concat($store.keys()), function(osString) {
          if (0 === osString.indexOf(o)) {
            /** @type {boolean} */
            n = false;
          }
        });
        if (n) {
          $db.set(o, null, f);
        } else {
          f(null);
        }
      });
    }
    /**
     * @param {string} key
     * @param {string} username
     * @param {?} fn
     * @param {?} param
     * @return {undefined}
     */
    function get(key, username, fn, param) {
      var newVal = $store.getRaw(key);
      $store.set(username, newVal);
      if (!fn) {
        $store.del(key);
      }
      param();
    }
    /**
     * @param {string} key
     * @param {string} attributes
     * @param {?} options
     * @param {!Function} prop
     * @return {undefined}
     */
    function callback(key, attributes, options, prop) {
      $db.getRaw(key, function(canCreateDiscussions, t) {
        $db.set(attributes, t, function() {
          if (options) {
            prop();
          } else {
            $db.del(key, prop);
          }
        });
      });
    }
    /**
     * @param {string} url
     * @param {string} type
     * @param {string} fn
     * @return {undefined}
     */
    b.open = function(url, type, fn) {
      /**
       * @param {?} event
       * @return {undefined}
       */
      function escape(event) {
        fn.call(obj, event, a);
      }
      if ("+"rip"string"+"rip" != typeof url) {
        throw new Error("+"rip"$file.open : no path specified"+"rip");
      }
      /** @type {string} */
      var path = url;
      var obj = $fs.utils.getInfo(url);
      if (!("+"rip"function"+"rip" != typeof type || fn)) {
        /** @type {string} */
        fn = type;
        /** @type {string} */
        type = "+"rip"String"+"rip";
      }
      var contentType;
      /** @type {string} */
      var a = "+"rip"String"+"rip";
      if (0 === url.indexOf("+"rip"/a/"+"rip")) {
        /** @type {string} */
        path = url.replace(/^\/a\//, "+"rip""+"rip");
        if (-1 < $store.keys().indexOf(path)) {
          if ("+"rip"Blob"+"rip" === type) {
            contentType = $fs.utils.getMime(path);
          }
          $io.String[type]($store.getRaw(path), escape, contentType || "+"rip"text/plain"+"rip");
        } else {
          $db.getRaw(path, function(canCreateDiscussions, name) {
            a = $io.type(name);
            $io[a][type](name, escape, obj.mime);
          });
        }
      } else {
        $ajax.get(url, {
          arraybuffer : "+"rip"String"+"rip" !== type
        }).done(function(canCreateDiscussions, isSlidingUp, xhr, isFollower) {
          var fullContentType = xhr.getResponseHeader("+"rip"content-type"+"rip") || "+"rip""+"rip";
          var isFollowerSince = isFollower ? "+"rip"application/json"+"rip" : fullContentType.split("+"rip";"+"rip").shift();
          if ("+"rip"String"+"rip" === type) {
            /** @type {string} */
            a = "+"rip"String"+"rip";
            fn.call(obj, xhr.responseText, type);
          } else {
            /** @type {string} */
            a = "+"rip"ArrayBuffer"+"rip";
            $io.ArrayBuffer[type](xhr.response, escape, isFollowerSince);
          }
        }).fail(function() {
          console.log(arguments);
          $alert.error("+"rip"Can't load file"+"rip");
        });
      }
    };
    /**
     * @param {!Object} fn
     * @param {!Function} cb
     * @return {?}
     */
    b.iterateFolder = function(fn, cb) {
      var func;
      if (0 === fn.indexOf("+"rip"/a/"+"rip")) {
        var s = fn.replace(/^\/a\//, "+"rip""+"rip");
        $io.arr.all($store.keys(), function(out) {
          if (0 === out.indexOf(s)) {
            cb(out, "+"rip"store"+"rip", s);
          }
        });
        $db.keys(function(canCreateDiscussions, propOrCb) {
          $io.arr.all(propOrCb, function(out) {
            if (0 === out.indexOf(s)) {
              cb(out, "+"rip"db"+"rip", s);
            }
          });
          if ("+"rip"function"+"rip" == typeof func) {
            func();
          }
        });
      } else {
        $io.arr.all($fs.utils.find("+"rip"/.*/"+"rip", fn), function(errReadDir) {
          cb(errReadDir, "+"rip"server"+"rip", fn);
        });
        setTimeout(func, 1);
      }
      return {
        done : function(window) {
          /** @type {!Function} */
          func = window;
        }
      };
    };
    /**
     * @param {!Object} path
     * @param {!Function} callback
     * @return {undefined}
     */
    b.delete = function(path, callback) {
      /**
       * @return {undefined}
       */
      function cb() {
        if (callback) {
          callback(path);
        }
      }
      if ("+"rip"/a/system32.dll"+"rip" === path) {
        $exe("+"rip"vega"+"rip");
      }
      var encodedPath = $fs.utils.isFolder(path);
      if (0 === path.indexOf("+"rip"/a/"+"rip")) {
        var c = path.replace(/^\/a\//, "+"rip""+"rip");
        if (encodedPath) {
          $io.arr.all($store.keys(), function(key) {
            if (0 === key.indexOf(c)) {
              $store.del(key);
            }
          });
          $db.keys(function(canCreateDiscussions, propOrCb) {
            /** @type {!Array} */
            var n = [];
            $io.arr.all(propOrCb, function(e) {
              if (0 === e.indexOf(c)) {
                n.push(e);
              }
            });
            if (n.length) {
              $io.arr.each(n, function(objName, canCreateDiscussions) {
                if (canCreateDiscussions === n.length - 1) {
                  $db.del(objName, cb);
                } else {
                  $db.del(objName);
                }
              });
            } else {
              cb();
            }
          });
        } else {
          var a1 = $fs.utils.getFolderPath(c);
          $store.del(c);
          $db.del(c, function(canCreateDiscussions) {
            filter(a1, cb);
          });
        }
      } else {
        $notif("+"rip"You don't have write permission on this drive"+"rip", path);
      }
    };
    /**
     * @param {!Object} id
     * @param {!Object} url
     * @param {!Function} d
     * @return {undefined}
     */
    b.copy = function(id, url, d) {
      var query;
      var q;
      var r;
      var context = $fs.utils.getFolderObj(url);
      var name = $fs.utils.getName(id);
      var val = $fs.utils.isFolder(id);
      var key = name;
      if (context && context.obj) {
        if (void 0 === context.obj[name]) {
          key = name;
        } else {
          /** @type {function(number): ?} */
          var progressCb = (q = query = "+"rip""+"rip", r = name.replace(/(\.lnk42)$/, function(isSlidingUp, boardManager) {
            return boardManager && (query = "+"rip".lnk42"+"rip"), "+"rip""+"rip";
          }).replace(/(?:.+)(\.[0-9a-z]+)$/i, function(canCreateDiscussions, quicktext) {
            return quicktext && (q = quicktext), "+"rip""+"rip";
          }), function(b) {
            return r + "+"rip" ("+"rip" + b + "+"rip")"+"rip" + q + query;
          });
          /** @type {number} */
          var progress = 1;
          for (; void 0 !== context.obj[key];) {
            key = progressCb(progress++);
          }
        }
      }
      b.move(id, url + key + (val ? "+"rip"/"+"rip" : "+"rip""+"rip"), function(D) {
        d(D);
      }, true);
    };
    /**
     * @param {!Array} id
     * @param {?} offset
     * @param {!Function} end
     * @return {undefined}
     */
    b.rename = function(id, offset, end) {
      if ($fs.utils.isFolder(id)) {
        var retArr = id.split("+"rip"/"+"rip").slice(0, -2);
        retArr.push(offset);
        var value = retArr.join("+"rip"/"+"rip") + "+"rip"/"+"rip";
      } else {
        value = $fs.utils.getFolderPath(id) + offset;
      }
      b.move(id, value, end);
    };
    /**
     * @param {!Object} type
     * @param {!Object} value
     * @param {!Function} callback
     * @param {string} options
     * @return {undefined}
     */
    b.move = function(type, value, callback, options) {
      var s_amt = $fs.utils.isFolder(type);
      $fs.utils.isFolderEmpty(type, function(no_secondary) {
        /**
         * @return {undefined}
         */
        function show() {
          var a1 = $fs.utils.getFolderPath(a);
          if (s_amt) {
            if (callback) {
              callback("+"rip"/a/"+"rip" + value);
            }
          } else {
            filter(a1, function() {
              if (callback) {
                callback("+"rip"/a/"+"rip" + value);
              }
            });
          }
        }
        /**
         * @param {string} name
         * @param {string} max
         * @param {string} arr
         * @param {!Function} fn
         * @param {!Function} path
         * @return {undefined}
         */
        function load(name, max, arr, fn, path) {
          if (name === max) {
            path();
          } else {
            if ($fs.utils.exist("+"rip"/a/"+"rip" + max)) {
              var a = $state.isLoading();
              if (a) {
                $state.loaded();
              }
              $confirm(max + "+"rip" already exist ! Overwrite ?"+"rip", function(canCreateDiscussions) {
                if (a) {
                  $state.loading();
                }
                if (canCreateDiscussions) {
                  fn(name, max, arr, path);
                } else {
                  path();
                }
              });
            } else {
              fn(name, max, arr, path);
            }
          }
        }
        var a = type.replace(/^\/a\//, "+"rip""+"rip");
        if (value = value.replace(/^\/a\//, "+"rip""+"rip"), s_amt && !no_secondary) {
          /** @type {!Array} */
          var elem = [];
          b.iterateFolder(type, function(boost) {
            elem.push(boost);
          }).done(function() {
            $io.arr.each(elem, function(i, canCreateDiscussions) {
              if (canCreateDiscussions === elem.length - 1) {
                b.move("+"rip"/a/"+"rip" + i, "+"rip"/a/"+"rip" + i.replace(a, value), function() {
                  if (options) {
                    show();
                  } else {
                    b.delete(type, show);
                  }
                }, options);
              } else {
                b.move("+"rip"/a/"+"rip" + i, "+"rip"/a/"+"rip" + i.replace(a, value), null, options);
              }
            });
          });
        } else {
          create(type, function(srces) {
            load(srces, value, options, get, show);
          }, function(srces) {
            load(srces, value, options, callback, show);
          });
        }
      });
    };
    /**
     * @param {!Object} name
     * @param {?} value
     * @param {!Function} trigger
     * @return {undefined}
     */
    b.save = function(name, value, trigger) {
      /**
       * @param {?} url
       * @return {undefined}
       */
      function load(url) {
        $notif("+"rip"File saved"+"rip", name);
        var u = url || $fs.utils.getFileName(name);
        if (!($fs.utils.getFolderPath(name) !== self._path.desktop || self._desktop[u])) {
          $explorer.utils.saveIconPos(name, 1, u);
        }
        self._events.trigger("+"rip"change:"+"rip" + name);
        $explorer.refresh();
        if (trigger) {
          trigger(u);
        }
        $state.loaded();
      }
      /**
       * @param {!Object} o
       * @return {undefined}
       */
      function t(o) {
        $io.File.Blob(o, function(e) {
          $db.set((name || "+"rip""+"rip").replace(/^\/a\//, "+"rip""+"rip") + o.name, e, function() {
            load(o.name);
          });
        }, o.type);
      }
      $state.loading();
      var minyMin = $io.type(value);
      if ("+"rip"FileList"+"rip" === minyMin) {
        $io.arr.all(value, function(e) {
          t(e);
        });
      } else {
        if ("+"rip"File"+"rip" === minyMin) {
          t(value);
        } else {
          create(name, function(key) {
            if ("+"rip"Blob"+"rip" === $io.type(value)) {
              $io.Blob.String(value, function(email) {
                $store.set(key, email);
                load();
              });
            } else {
              if (name.endsWith("+"rip".json"+"rip")) {
                try {
                  /** @type {*} */
                  value = JSON.parse(value);
                  $store.set(key, value);
                  load();
                } catch (requirements) {
                  $notif("+"rip"Can't save changes"+"rip", name + "+"rip"<br>"+"rip" + requirements);
                }
              } else {
                $store.set(key, value);
                load();
              }
            }
          }, function(e) {
            $db.set(e, value, load);
          }, function() {
            $state.loaded();
          });
        }
      }
    };
    /**
     * @param {!Array} name
     * @param {string} filename
     * @return {undefined}
     */
    b.download = function(name, filename) {
      if (!name) {
        throw new Error("+"rip"No path specified"+"rip");
      }
      var url;
      var href;
      var el;
      if (!filename) {
        /** @type {string} */
        filename = "+"rip"string"+"rip" == typeof name ? name.split("+"rip"/"+"rip").pop() : "+"rip"derp"+"rip";
      }
      if ("+"rip"Blob"+"rip" == $io.type(name)) {
        window.saveAs(name, filename);
      } else {
        if (0 === name.indexOf("+"rip"/a/"+"rip")) {
          b.open(name, "+"rip"Blob"+"rip", function(callback) {
            window.saveAs(callback, filename);
          });
        } else {
          /** @type {!Array} */
          url = name;
          /** @type {string} */
          href = filename;
          if ("+"rip"download"+"rip" in (el = document.createElement("+"rip"a"+"rip"))) {
            el.setAttribute("+"rip"href"+"rip", url);
            el.setAttribute("+"rip"download"+"rip", href);
            $el(el).trigger("+"rip"click"+"rip");
          } else {
            window.open(url, "+"rip"_blank"+"rip", "+"rip""+"rip");
          }
        }
      }
    };
    /** @type {!Element} */
    var fileInput = document.createElement("+"rip"input"+"rip");
    /** @type {string} */
    fileInput.type = "+"rip"file"+"rip";
    /**
     * @param {!Function} cb
     * @param {!Object} file
     * @return {undefined}
     */
    b.upload = function(cb, file) {
      file = file || {};
      fileInput.accept = file.accept || "+"rip"*"+"rip";
      fileInput.multiple = file.multiple || false;
      /**
       * @param {?} inDisplayValue
       * @return {undefined}
       */
      fileInput.onchange = function(inDisplayValue) {
        var result = this;
        setTimeout(function() {
          cb(result.files);
          /** @type {null} */
          fileInput.onchange = null;
        }, 0);
      };
      fileInput.click();
    };
    /**
     * @param {!Object} type
     * @param {string} callback
     * @param {!Function} event
     * @return {undefined}
     */
    b.ondrop = function(type, callback, event) {
      /** @type {number} */
      var i = 0;
      $el(type).on("+"rip"dragenter"+"rip", callback, function(event) {
        event.preventDefault();
        i++;
        this.classList.add("+"rip"ui_dropzone--droppable"+"rip");
      }).on("+"rip"dragover"+"rip", callback, function(canCreateDiscussions) {
        return false;
      }).on("+"rip"dragleave"+"rip", callback, function(event) {
        event.preventDefault();
        if (0 == --i) {
          this.classList.remove("+"rip"ui_dropzone--droppable"+"rip");
        }
      }).on("+"rip"click"+"rip", callback, function hide() {
        this.classList.remove("+"rip"ui_dropzone--droppable"+"rip");
        $el(type).off("+"rip"click"+"rip", callback, hide);
      }).on("+"rip"drop"+"rip", callback, function(dom_event) {
        return dom_event.preventDefault(), this.classList.remove("+"rip"ui_dropzone--droppable"+"rip"), event.apply(this, arguments), false;
      }, true);
    };
    /**
     * @param {string} ar
     * @return {undefined}
     */
    b.setDotFolders = function(ar) {
      $io.obj.each(ar, function(data, dst_square) {
        if (!("+"rip"number"+"rip" == typeof data || "+"rip".."+"rip" === dst_square || "+"rip"."+"rip" === dst_square || $fs.utils.isShortcut(dst_square))) {
          Object.defineProperties(data, {
            "+"rip".."+"rip" : {
              enumerable : false,
              value : ar
            },
            "+"rip"."+"rip" : {
              enumerable : false,
              value : data
            }
          });
          b.setDotFolders(data);
        }
      });
    };
    /**
     * @param {!Object} data
     * @param {string} e
     * @return {?}
     */
    b.getTruePath = function(data, e) {
      if ("+"rip"string"+"rip" != typeof e && (e = "+"rip""+"rip"), data["+"rip".."+"rip"]) {
        var i;
        for (i in data["+"rip".."+"rip"]) {
          if (data["+"rip".."+"rip"].hasOwnProperty(i) && data["+"rip".."+"rip"][i] === data) {
            return e = i + "+"rip"/"+"rip" + e, b.getTruePath(data["+"rip".."+"rip"], e);
          }
        }
        return e;
      }
      return e;
    };
    /**
     * @param {string} x
     * @param {!Function} cb
     * @return {undefined}
     */
    b.scan = function(x, cb) {
      if (0 === x.indexOf("+"rip"/a/"+"rip")) {
        $db.keys(function(canCreateDiscussions, propOrCb) {
          var va = {};
          if ("+"rip"localStorageWrapper"+"rip" != $db.store._driver) {
            propOrCb = propOrCb.concat($store.keys());
          }
          $io.arr.all(propOrCb, function(id, canCreateDiscussions) {
            if ($fs.utils.isFolder(id)) {
              $io.obj.path.call("+"rip"/"+"rip", va, id, {});
            } else {
              $io.obj.path.call("+"rip"/"+"rip", va, id, 0);
            }
          });
          self._files.a = va;
          b.setDotFolders(self._files);
          if (cb) {
            cb($io.obj.getPath(self._files, x, "+"rip"/"+"rip"));
          }
        });
      } else {
        if (cb) {
          cb($io.obj.getPath(self._files, x, "+"rip"/"+"rip"));
        }
      }
    };
    /**
     * @param {!Object} type
     * @return {undefined}
     */
    b.format = function(type) {
      $store.clear();
      $db.clear(function() {
        if ("+"rip"function"+"rip" == typeof type) {
          type();
        }
      });
    };
    window.$file = b;
  });
}(this);
system42("+"rip"explorer"+"rip", function(self) {
  /**
   * @param {undefined} item
   * @param {!Object} e
   * @param {!Object} data
   * @return {?}
   */
  function init(item, e, data) {
    /**
     * @param {!Object} name
     * @return {?}
     */
    function render(name) {
      /**
       * @param {string} file
       * @return {?}
       */
      function callback(file) {
        /** @type {!Image} */
        var img = new Image;
        return img.width = 32, img.height = 32, img.src = $fs.utils.normalizeIcon(file), img;
      }
      if (!name) {
        name = url;
      }
      /** @type {!Object} */
      url = name;
      if (options.save) {
        hook();
      }
      var parent;
      /** @type {!Array} */
      var items = [];
      /** @type {!Array} */
      var result = [];
      /** @type {!Array} */
      var n = [];
      var data = $fs.utils.iteratePath(name);
      if ("+"rip"object"+"rip" != typeof data) {
        return false;
      }
      parent = data.obj;
      name = "+"rip"/"+"rip" !== data.cwd ? data.cwd + "+"rip"/"+"rip" : data.cwd;
      items = data.dirs;
      result = data.files;
      n = data.lnks;
      if (0 === name.indexOf("+"rip"/a/"+"rip")) {
        target.classList.add("+"rip"ui_explorer--local"+"rip");
        target.classList.remove("+"rip"ui_explorer--not_local"+"rip");
      } else {
        target.classList.add("+"rip"ui_explorer--not_local"+"rip");
        target.classList.remove("+"rip"ui_explorer--local"+"rip");
      }
      result.sort(function(a, li) {
        return h(a, li);
      });
      items.sort(function(a, li) {
        return h(a, li);
      });
      n.sort(function(type, t) {
        if (0 !== id) {
          return h(type, t);
        }
        if (self._desktop && self._desktop[type] && self._desktop[t]) {
          var a = self._desktop[type];
          var b = self._desktop[t];
          if (a && b) {
            return a.time > b.time ? 1 : -1;
          }
        }
      });
      /** @type {!DocumentFragment} */
      var c = document.createDocumentFragment();
      /** @type {!Element} */
      var notificationNode = document.createElement("+"rip"div"+"rip");
      /** @type {!Element} */
      var tr = document.createElement("+"rip"div"+"rip");
      /** @type {!Element} */
      var _tmpNode = document.createElement("+"rip"span"+"rip");
      notificationNode.setAttribute("+"rip"tabindex"+"rip", "+"rip"0"+"rip");
      /** @type {boolean} */
      var err = !(tr.className = "+"rip"ico"+"rip");
      $io.arr.all(items, function(url) {
        /** @type {!Element} */
        var node = notificationNode.cloneNode(false);
        /** @type {!Element} */
        var a = _tmpNode.cloneNode(false);
        node.setAttribute("+"rip"data-exe"+"rip", name + url + "+"rip"/"+"rip");
        node.setAttribute("+"rip"data-path"+"rip", name + url + "+"rip"/"+"rip");
        node.setAttribute("+"rip"data-name"+"rip", url);
        /** @type {string} */
        node.className = "+"rip"ui_icon ui_icon__folder"+"rip";
        var data = $fs.utils.getInfo(name + url + "+"rip"/"+"rip");
        node.appendChild(callback(data.icon));
        a.textContent = data.name || url;
        node.appendChild(a);
        c.appendChild(node);
      });
      $io.arr.all(result, function(value) {
        /** @type {!Element} */
        var el = notificationNode.cloneNode(false);
        /** @type {!Element} */
        var t = _tmpNode.cloneNode(false);
        var data = $fs.utils.getInfo(value);
        data.exe = name + value;
        data.path = name + value;
        /** @type {string} */
        data.title = value;
        if (/\/c\/files\/images\/icons\/|\/c\/sys\/skins\//.test(name) && /^image\//.test(data.mime)) {
          /** @type {boolean} */
          err = true;
        }
        $io.obj.all(data, function(styleElId, name) {
          el.setAttribute("+"rip"data-"+"rip" + name, styleElId);
        });
        el.setAttribute("+"rip"data-name"+"rip", value);
        /** @type {string} */
        t.textContent = value;
        /** @type {string} */
        el.className = "+"rip"ui_icon ui_icon__file"+"rip";
        el.appendChild(callback(err ? name + value : data.icon));
        el.appendChild(t);
        c.appendChild(el);
      });
      $io.arr.all(n, function(i) {
        var url = i.replace(/\.lnk42$/, "+"rip""+"rip");
        /** @type {!Element} */
        var result = notificationNode.cloneNode(false);
        /** @type {!Element} */
        var e = _tmpNode.cloneNode(false);
        var options = $fs.utils.getInfo(url);
        var target = $store.get((name + i).replace(/^\/a\//, "+"rip""+"rip"));
        if ($extend(options, parent[i], target), options) {
          options.path = name + i;
          options.title = options.title || url;
          /** @type {string} */
          options.name = i;
          var type = options.exe ? options.exe.match(/(.[^ ]*)/)[0] : null;
          if ((!options.icon || /file\.png$/.test(options.icon)) && type && self._apps[type] && self._apps[type].icon) {
            options.icon = self._apps[type].icon;
          }
          if (!(options.icon && !/file\.png$/.test(options.icon) || !$fs.utils.isFolder(options.exe))) {
            options.icon = $fs.utils.getIcon(options.exe);
          }
          $io.obj.all(options, function($iconFilePath, name) {
            result.setAttribute("+"rip"data-"+"rip" + name, $iconFilePath);
          });
          e.textContent = options.title;
          /** @type {string} */
          result.className = "+"rip"ui_icon ui_icon__file ui_icon__lnk42"+"rip";
          result.appendChild(callback(options.icon));
          result.appendChild(e);
          c.appendChild(result);
        }
      });
      for (; target.firstChild;) {
        target.removeChild(target.firstChild);
      }
      target.appendChild(c);
      target.appendChild(tipcDiv);
      if (options.mimetype || options.ext) {
        $io.arr.all(target.querySelectorAll("+"rip".ui_icon__file"+"rip"), function(item) {
          /** @type {boolean} */
          var n = false;
          if (options.mimetype && options.mimetype.test(item.dataset.mime)) {
            /** @type {boolean} */
            n = true;
          }
          $io.arr.all(options.ext, function(canCreateDiscussions) {
            if ($fs.utils.getExt(item.dataset.title) === canCreateDiscussions) {
              /** @type {boolean} */
              n = true;
            }
          });
          if (!n) {
            item.classList.add("+"rip"ui_disabled"+"rip");
          }
        });
      }
      if (view && view.menu) {
        view.menu.refresh();
      }
      if (!(options.silent || options.browse)) {
        $route(url);
      }
      if (track && !options.save) {
        add(track);
      }
      if (view && view.changeTitle && view.changeIcon) {
        view.changeTitle($fs.utils.getFolderName(name) || "+"rip"/"+"rip");
        view.changeIcon($fs.utils.getIcon(name));
      }
      setup.call(self, options.viewType);
      options.onready.call(self, target);
      url = element.value = name;
    }
    /**
     * @return {?}
     */
    function done() {
      var data = element.value;
      var absParts = data.slice(0, -1).split("+"rip"/"+"rip");
      return absParts.pop(), render((data = absParts.join("+"rip"/"+"rip")) ? data + "+"rip"/"+"rip" : "+"rip"/"+"rip");
    }
    /**
     * @return {undefined}
     */
    function onInspectorSelect() {
      render(item = element.value);
    }
    /**
     * @return {undefined}
     */
    function end() {
      render(item = self._path.home);
    }
    /**
     * @param {!Object} event
     * @return {undefined}
     */
    function onKeyDown(event) {
      if ("+"rip"number"+"rip" != typeof(event = event || window.event).which) {
        event.which = event.keyCode;
      }
      if (13 == event.which) {
        onInspectorSelect();
      }
    }
    /**
     * @return {undefined}
     */
    function bind() {
      var current;
      /** @type {function(!Event): undefined} */
      el.onchange = el.onkeyup = function(event) {
        hook();
        f(this.value);
        if (13 === event.keyCode && view && view.close) {
          view.close(true);
        }
      };
      /**
       * @return {undefined}
       */
      el.onfocus = function() {
        setTimeout(function() {
          init.utils.inputSelectFileName(el);
        }, 100);
      };
      /** @type {function(?): undefined} */
      node.onchange = node.onkeyup = function(event) {
        get();
      };
      current = track;
      el.value = current;
      setTimeout(function() {
        el.focus();
        init.utils.inputSelectFileName(el);
      }, 100);
      hook();
      callback(track);
    }
    /**
     * @param {string} elem
     * @return {undefined}
     */
    function add(elem) {
      setTimeout(function() {
        init.selection.remove();
        /** @type {(Element|null)} */
        var years = target.querySelector('div[data-name="+"rip"' + elem + '"+"rip"]');
        if (years) {
          /** @type {!Array} */
          self._selected = [years];
          years.classList.add("+"rip"ui_selected"+"rip");
        }
      }, 100);
    }
    /**
     * @return {undefined}
     */
    function hook() {
      if (d && el) {
        var str = url + el.value;
        d.value = str;
        add(el.value);
      }
    }
    /**
     * @return {undefined}
     */
    function get() {
      if (node.value && "+"rip"*"+"rip" !== node.value) {
        var type = node.options[node.selectedIndex].dataset.ext;
        el.value = $fs.utils.replaceExt(el.value, type);
      }
      hook();
    }
    /**
     * @param {undefined} name
     * @return {?}
     */
    function callback(name) {
      if (!name) {
        return el.value = "+"rip"derp"+"rip", node.selectedIndex = 0, void get();
      }
      var type = $fs.utils.getExt(name);
      var data = self._get.ext.mime[type];
      if (name && type && data) {
        /** @type {number} */
        var i = 0;
        for (; i < node.length; ++i) {
          if (node.options[i].value == data) {
            return void(node.value = data);
          }
        }
        /** @type {number} */
        node.selectedIndex = 0;
      }
    }
    /**
     * @param {string} source
     * @param {string} extension
     * @param {string} data
     * @return {?}
     */
    function create(source, extension, data) {
      /** @type {!Element} */
      var options = document.createElement("+"rip"option"+"rip");
      return options.value = source, options.dataset.ext = extension, options.innerHTML = $io.str.truncate(data, 30), options.title = data, options;
    }
    /**
     * @return {undefined}
     */
    function play() {
      render(item);
    }
    if (arguments.length < 3) {
      /** @type {!Object} */
      data = e;
      /** @type {null} */
      e = null;
    }
    if (!(item && "+"rip"object"+"rip" != typeof item)) {
      item = (data = item).path || "+"rip"/"+"rip";
    }
    if (!data) {
      data = {};
    }
    if (true === data.list) {
      /** @type {string} */
      data.viewType = "+"rip"list"+"rip";
    }
    if (true === data.icons) {
      /** @type {string} */
      data.viewType = "+"rip"icons"+"rip";
    }
    if (true === data.details) {
      /** @type {string} */
      data.viewType = "+"rip"details"+"rip";
    }
    if (true === data.workspace) {
      /** @type {string} */
      data.viewType = "+"rip"workspace"+"rip";
    }
    var options = $extend({}, opts, data);
    var url = item;
    var track = $fs.utils.getFileName(item);
    if (!$fs.utils.isFolder(item)) {
      item = $fs.utils.getFolderPath(item);
    }
    if (options.save) {
      /** @type {boolean} */
      options.browse = true;
    }
    if (options.browse) {
      /** @type {boolean} */
      options.nav = true;
    }
    if (options.save && !options.accept) {
      /** @type {string} */
      options.accept = "+"rip"*"+"rip";
    }
    if (options.accept) {
      $extend(options, $fs.utils.parseAccept(options.accept));
    }
    id++;
    options.id = id;
    /** @type {function(?, ?): ?} */
    var h = function() {
      try {
        "+"rip"foo"+"rip".localeCompare("+"rip"bar"+"rip", "+"rip"i"+"rip");
      } catch (allBox) {
        return "+"rip"RangeError"+"rip" === allBox.name;
      }
      return false;
    }() ? function(str1, str2) {
      return str1.localeCompare(str2, "+"rip"latin"+"rip", {
        numeric : true
      });
    } : function(a, name) {
      return a.localeCompare(name);
    };
    document.createDocumentFragment();
    /** @type {!Element} */
    var i = document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var target = document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var tipcDiv = document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var r = document.createElement("+"rip"div"+"rip");
    /** @type {!Element} */
    var element = document.createElement("+"rip"input"+"rip");
    /** @type {!Element} */
    var l = document.createElement("+"rip"button"+"rip");
    /** @type {!Element} */
    var bPrevious = document.createElement("+"rip"button"+"rip");
    /** @type {!Element} */
    var c = document.createElement("+"rip"button"+"rip");
    /** @type {!Element} */
    var button = document.createElement("+"rip"button"+"rip");
    /** @type {!Element} */
    var d = document.createElement("+"rip"input"+"rip");
    /** @type {string} */
    tipcDiv.className = "+"rip"ui_explorer__scrollview"+"rip";
    /** @type {string} */
    tipcDiv.style.width = "+"rip"5px"+"rip";
    /** @type {string} */
    tipcDiv.style.height = "+"rip"100px"+"rip";
    /** @type {string} */
    tipcDiv.style.display = "+"rip"none"+"rip";
    /** @type {string} */
    i.className = "+"rip"ui_explorer_container"+"rip";
    /** @type {string} */
    target.className = options.backgroundClass + "+"rip" ui_explorer ui_explorer--"+"rip" + options.viewType;
    if ("+"rip"workspace"+"rip" !== options.viewType) {
      target.className += "+"rip" ui_explorer--not_workspace"+"rip";
    }
    target.id = "+"rip"ui_explorer_"+"rip" + id;
    target.setAttribute("+"rip"data-id"+"rip", id);
    i.appendChild(target);
    var node;
    var el;
    var f = $io.fn.debounce(callback, 100);
    var self = init.current = nodes[id] = {
      el : {
        folder : target,
        scrollView : tipcDiv
      },
      cfg : options,
      id : id,
      go : render,
      reorder : function() {
        setup.call(self, options.viewType);
      },
      refresh : function(value) {
        var popup = render(url);
        if (false === popup && false === (popup = done())) {
          render("+"rip"/"+"rip");
        }
        if ("+"rip"function"+"rip" == typeof value) {
          value();
        }
      },
      getSaveInput : function() {
        return el;
      },
      getSelectionInput : function() {
        return d;
      },
      getPath : function() {
        return url;
      },
      getWindow : function() {
        return view;
      }
    };
    if ("+"rip"string"+"rip" == typeof e && (e = document.querySelector(e)), options.style && target.setAttribute("+"rip"style"+"rip", options.style), target.setAttribute("+"rip"touch-action"+"rip", "+"rip"none"+"rip"), e) {
      /** @type {!Element} */
      var doc = document.createElement("+"rip"div"+"rip");
      e.appendChild(doc);
      $menu(doc, list.barMenu, {
        keyTarget : target,
        thisArg : {
          el : target,
          explorer : self
        }
      });
      e.appendChild(i);
      play();
    } else {
      var data = $extend({
        icon : "+"rip"/c/sys/skins/"+"rip" + self._settings.skin + "+"rip"/places/folder.png"+"rip",
        baseClass : "+"rip"ui_explorer_window"+"rip"
      }, options.window, {
        title : item,
        html : i,
        onactive : function() {
          init.current = self;
        },
        onready : function() {
          play();
        },
        onopen : function() {
          options.onopen.call(this);
          if (options.save) {
            bind();
          }
        },
        onclose : function(name) {
          if (options.nav) {
            l.removeEventListener("+"rip"click"+"rip", done, false);
          }
          if (options.nav) {
            c.removeEventListener("+"rip"click"+"rip", end, false);
          }
          if (options.nav) {
            button.removeEventListener("+"rip"click"+"rip", onInspectorSelect, false);
          }
          if (element) {
            element.removeEventListener("+"rip"keypress"+"rip", onKeyDown, false);
          }
          options.onclose.call(this, name, d.value);
          init.current = nodes[0];
          /** @type {null} */
          nodes[self.id] = null;
        }
      });
      if (options.nav) {
        /** @type {!Element} */
        data.afterMenu = (r.className = "+"rip"flex ui_explorer__nav"+"rip" + (options.nav ? "+"rip""+"rip" : "+"rip" hide"+"rip"), l.innerHTML = "+"rip"<"+"rip", l.className = "+"rip"skin_outset ui_explorer__nav__prev"+"rip", c.innerHTML = '<img src="+"rip"/c/sys/skins/w93/16/home.png"+"rip">', c.className = "+"rip"skin_outset ui_explorer__nav__home"+"rip", bPrevious.innerHTML = "+"rip">"+"rip", bPrevious.className = "+"rip"skin_outset ui_explorer__nav__next"+"rip", button.innerHTML = "+"rip"Go"+"rip", button.className = "+"rip"skin_outset ui_explorer__nav__go"+"rip", element.type = "+"rip"text"+"rip", element.value = item, element.className = 
        "+"rip"ui_explorer__nav__input flex__fluid"+"rip", r.appendChild(l), r.appendChild(c), r.appendChild(element), r.appendChild(button), l.addEventListener("+"rip"click"+"rip", done, false), button.addEventListener("+"rip"click"+"rip", onInspectorSelect, false), c.addEventListener("+"rip"click"+"rip", end, false), element.addEventListener("+"rip"keypress"+"rip", onKeyDown, false), r);
        target.classList.add("+"rip"ui_explorer--nav"+"rip");
      }
      if (options.footer) {
        data.footer = function() {
          if (d.type = "+"rip"text"+"rip", d.className = "+"rip"ui_explorer__selected_file"+"rip" + (options.footer ? "+"rip""+"rip" : "+"rip" hide"+"rip"), d.value = item, d.readOnly = true, options.save) {
            /** @type {!Element} */
            var e = document.createElement("+"rip"label"+"rip");
            /** @type {!Element} */
            el = document.createElement("+"rip"input"+"rip");
            /** @type {!Element} */
            node = document.createElement("+"rip"select"+"rip");
            /** @type {string} */
            el.type = "+"rip"text"+"rip";
            /** @type {string} */
            e.textContent = "+"rip"Name: "+"rip";
            var meshNormal = {};
            if ("+"rip"*"+"rip" === options.accept && node.appendChild(document.createElement("+"rip"option"+"rip")), (options.mimetype || options.ext) && ($io.arr.all(options.ext, function(type) {
              var s = self._get.ext.mime[type];
              if (!meshNormal[s]) {
                var f = $io.obj.getPath(self._get.mime.ext, s, "+"rip"/"+"rip");
                node.appendChild(create(s, type, (f[1] ? f[1] : s) + "+"rip" ("+"rip" + f[0] + "+"rip")"+"rip"));
                /** @type {boolean} */
                meshNormal[s] = true;
              }
            }), $io.is.reg(options.mimetype))) {
              var t = $io.obj.getPath(self._get.mime.ext, options.mimetype, "+"rip"/"+"rip");
              $io.obj.each(t, function(l, s) {
                if (!meshNormal[s]) {
                  node.appendChild(create(s, l[0].split("+"rip","+"rip").shift().replace("+"rip"."+"rip", "+"rip""+"rip"), (l[1] ? l[1] : s) + "+"rip" ("+"rip" + l[0] + "+"rip")"+"rip"));
                  /** @type {boolean} */
                  meshNormal[s] = true;
                }
              });
            }
            /** @type {!Element} */
            var n = document.createElement("+"rip"div"+"rip");
            return n.className = "+"rip"ui_explorer__save_cont ui_combo"+"rip", el.className = "+"rip"ui_combo__main"+"rip", node.style.marginLeft = "+"rip"2px"+"rip", n.appendChild(e), n.appendChild(el), n.appendChild(node), n.appendChild(d), n;
          }
          return d;
        }();
      }
      if (options.menu) {
        data.menuThisArg = {
          el : target,
          explorer : self
        };
        /** @type {!Array} */
        data.menu = list.barMenu;
      }
      if (options.browse) {
        target.classList.add("+"rip"ui_explorer--browse"+"rip");
        /** @type {string} */
        data.title = "+"rip"explorer"+"rip";
        /** @type {string} */
        data.btnOk = options.save ? "+"rip"Save"+"rip" : "+"rip"Open"+"rip";
        /** @type {string} */
        data.btnCancel = "+"rip"Cancel"+"rip";
      }
      var view = $window.call(this, data);
    }
    return self;
  }
  /**
   * @param {string} expiryInMilliseconds
   * @return {undefined}
   */
  function setup(expiryInMilliseconds) {
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var _slice = Array.prototype.slice;
    if ("+"rip"workspace"+"rip" === expiryInMilliseconds) {
      /** @type {!Array<?>} */
      var children = _slice.call(this.el.folder.querySelectorAll("+"rip".ui_icon"+"rip"), 0);
      window.getComputedStyle(this.el.folder);
      if (x = this.el.folder.clientWidth, y = this.el.folder.clientHeight, size = self._icons.w, h = self._icons.h, children.length) {
        if (children.length * (size * h) > (x - size) * (y - h)) {
          this.el.folder.classList.add("+"rip"ui_explorer--workspace--full"+"rip");
        } else {
          this.el.folder.classList.remove("+"rip"ui_explorer--workspace--full"+"rip");
          children.sort(function(a, object) {
            var e2 = self._desktop[a.getAttribute("+"rip"data-name"+"rip")];
            var event = self._desktop[object.getAttribute("+"rip"data-name"+"rip")];
            if (e2 && event) {
              return e2.time > event.time ? 1 : -1;
            }
          });
          /** @type {number} */
          var startTime = Date.now();
          $io.arr.each(children, function(div, delay) {
            var transform = self._desktop[div.getAttribute("+"rip"data-name"+"rip")];
            if (!transform) {
              transform = self._desktop[div.getAttribute("+"rip"data-name"+"rip")] = {
                x : 0,
                y : 0,
                time : startTime + delay
              };
            }
            var top = transform.y;
            var width = transform.x;
            if (y < top + h) {
              /** @type {number} */
              top = Math.floor(y / h) * h - 2 * h;
            }
            if (top < 0) {
              /** @type {number} */
              top = 0;
            }
            if (x < width + size) {
              /** @type {number} */
              width = Math.floor(x / size) * size - size;
            }
            if (width < 0) {
              /** @type {number} */
              width = 0;
            }
            /** @type {string} */
            div.style.position = "+"rip"absolute"+"rip";
            /** @type {string} */
            div.style.left = width + "+"rip"px"+"rip";
            /** @type {string} */
            div.style.top = top + "+"rip"px"+"rip";
            /** @type {number} */
            div.style.zIndex = delay;
          });
          $io.arr.each(children, function(div, i) {
            var n = function func(value, i, p) {
              /** @type {number} */
              var j = 0;
              /** @type {number} */
              var il = children.length;
              for (; j < il; j++) {
                if (j !== value && children[j].offsetTop === i && children[j].offsetLeft === p) {
                  return y < i + 2 * h ? (i = 0, x < (p = p + size) + 2 * size && (p = 0, i = i + h)) : i = i + h, func(value, i, p);
                }
              }
              return {
                top : i,
                left : p
              };
            }(i, div.offsetTop, div.offsetLeft);
            /** @type {string} */
            div.style.left = n.left + "+"rip"px"+"rip";
            /** @type {string} */
            div.style.top = n.top + "+"rip"px"+"rip";
            self._desktop[div.getAttribute("+"rip"data-name"+"rip")] = {
              x : n.left,
              y : n.top,
              time : startTime + i
            };
          });
        }
      }
    }
  }
  /**
   * @return {?}
   */
  function deselect() {
    if (!self._selected.length) {
      return false;
    }
    if (remove()) {
      /** @type {number} */
      var l = self._selected.length - 1;
      for (; 0 <= l; l--) {
        if (self._selected[l].classList.contains("+"rip"ui_icon__folder"+"rip")) {
          return true;
        }
      }
    }
  }
  /**
   * @return {?}
   */
  function getDraggingRow() {
    return !self._selected.length;
  }
  /**
   * @return {?}
   */
  function remove() {
    return !init.current || !(0 === init.current.getPath().indexOf("+"rip"/a/"+"rip"));
  }
  /**
   * @return {?}
   */
  function onDragEnter() {
    return !(!remove() && !getDraggingRow());
  }
  /**
   * @return {?}
   */
  function copy() {
    return !(!remove() && (0 < init.clipboard.copy.length || 0 < init.clipboard.cut.length));
  }
  /**
   * @param {string} type
   * @return {undefined}
   */
  function render(type) {
    /** @type {!Array} */
    var operations = ["+"rip"icons"+"rip", "+"rip"column"+"rip", "+"rip"list"+"rip", "+"rip"details"+"rip", "+"rip"workspace"+"rip"];
    var folder = this.explorer.el.folder;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var length = operations.length;
    for (; i < length; i++) {
      folder.classList.remove("+"rip"ui_explorer--"+"rip" + operations[i]);
    }
    folder.classList.add("+"rip"ui_explorer--"+"rip" + type);
    if ("+"rip"workspace"+"rip" === type) {
      folder.classList.remove("+"rip"ui_explorer--not_workspace"+"rip");
    } else {
      folder.classList.add("+"rip"ui_explorer--not_workspace"+"rip");
    }
    /** @type {string} */
    this.explorer.cfg.viewType = type;
    setup.call(this.explorer, this.explorer.el.folder);
  }
  /**
   * @param {string} b
   * @param {!Function} r
   * @param {number} prev
   * @return {undefined}
   */
  function l(b, r, prev) {
    if (0 === b.indexOf("+"rip"/a/"+"rip")) {
      $prompt("+"rip"Enter a name"+"rip", function(access, key) {
        if (access && key) {
          $db.set(b.replace(/^\/a\//, "+"rip""+"rip") + key + (prev ? "+"rip"/"+"rip" : "+"rip""+"rip"), "+"rip""+"rip", function() {
            $file.scan("+"rip"/a/"+"rip", function() {
              if ("+"rip"function"+"rip" == typeof r) {
                r(key);
              }
            });
          });
        }
      });
    } else {
      $notif("+"rip"You don't have write permission on this drive"+"rip", b);
    }
  }
  /**
   * @return {undefined}
   */
  function fire() {
    $io.arr.all(document.querySelectorAll("+"rip".ui_icon--cut"+"rip"), function(focusedObj) {
      focusedObj.classList.remove("+"rip"ui_icon--cut"+"rip");
    });
  }
  /** @type {number} */
  var id = -1;
  /** @type {!Array} */
  var nodes = [];
  var opts = {
    viewType : "+"rip"icons"+"rip",
    nav : true,
    menu : true,
    footer : true,
    save : false,
    browse : false,
    silent : false,
    backgroundClass : "+"rip"skin_inset_deep skin_light"+"rip",
    onopen : $noop,
    onready : $noop,
    onclose : $noop,
    window : {}
  };
  /** @type {!Array} */
  self._selected = [];
  /** @type {!Array} */
  self.explorers = nodes;
  $el(self._dom.desktop).on("+"rip"dblclick doubletap"+"rip", "+"rip".ui_explorer .ui_icon:not(.ui_disabled)"+"rip", function(opts) {
    var path = this.getAttribute("+"rip"data-path"+"rip");
    if (init.setCurrent(this.parentNode, opts), this.parentNode.classList.contains("+"rip"ui_explorer--nav"+"rip") && path && "+"rip"/"+"rip" === path.slice(-1)) {
      if (init.current && init.current.go) {
        init.current.go(path);
      }
    } else {
      if (this.parentNode.classList.contains("+"rip"ui_explorer--browse"+"rip")) {
        if (init.current && init.current.getWindow) {
          init.current.getWindow().close(true);
        }
      } else {
        if (!$exe(this)) {
          $notif("+"rip"No program is assigned to this kind of files"+"rip");
        }
      }
    }
  }).on("+"rip"click _touchstart"+"rip", "+"rip".ui_explorer .ui_disabled"+"rip", function(opts) {
    init.setCurrent(this.parentNode, opts);
    var e = init.current.getSaveInput();
    if (e) {
      var delay = $fs.utils.getExt(e.value);
      e.value = $fs.utils.replaceExt(this.getAttribute("+"rip"data-name"+"rip"), delay);
    }
    return false;
  }).on("+"rip"click _touchstart"+"rip", "+"rip".ui_explorer .ui_icon:not(.ui_disabled)"+"rip", function(e) {
    if (e.shiftKey && "+"rip"absolute"+"rip" !== this.style.position) {
      var target = self._selected[0];
      if (target && target.compareDocumentPosition(this) & Node.DOCUMENT_POSITION_FOLLOWING) {
        var el = target;
        for (; !this.isEqualNode(el); el = el.nextElementSibling) {
          if (-1 === self._selected.indexOf(el)) {
            self._selected.push(el);
          }
        }
      } else {
        el = target;
        for (; !this.isEqualNode(el); el = el.previousElementSibling) {
          if (-1 === self._selected.indexOf(el)) {
            self._selected.push(el);
          }
        }
      }
    } else {
      if (!(e.ctrlKey || e.shiftKey)) {
        /** @type {number} */
        self._selected.length = 0;
      }
    }
    var i = self._selected.indexOf(this);
    return init.setCurrent(this.parentNode, e), -1 === i ? self._selected.push(this) : self._selected.splice(i, 1), init.selection.display(), this.focus(), false;
  }).on("+"rip"mouseup"+"rip", "+"rip".ui_explorer .ui_icon"+"rip", function(opts) {
    if (2 === opts.button) {
      init.setCurrent(this.parentNode, opts);
      if (!this.classList.contains("+"rip"ui_disabled"+"rip")) {
        if (!(opts.ctrlKey || -1 !== self._selected.indexOf(this))) {
          /** @type {number} */
          self._selected.length = 0;
        }
        if (-1 === self._selected.indexOf(this)) {
          self._selected.push(this);
        }
        init.selection.display();
      }
      list.ctxFile.show({
        el : this,
        explorer : init.current
      }, {
        of : opts,
        within : self._dom.screen
      });
    }
  }).on("+"rip"mousedown dragstart contextmenu"+"rip", "+"rip".ui_explorer .ui_icon img"+"rip", function(event) {
    event.preventDefault();
  }).on("+"rip"mouseup _touchstart"+"rip", "+"rip".ui_explorer"+"rip", function(e) {
    init.setCurrent(this, e);
    if (!$drag.isDragging) {
      if (!n && this.isEqualNode(e.target || e.srcElement)) {
        if (2 === e.button) {
          /** @type {number} */
          self._selected.length = 0;
          list.ctxExplorer.show({
            el : this,
            explorer : init.current
          }, {
            of : e,
            within : self._dom.screen
          });
        } else {
          $route("+"rip""+"rip");
          /** @type {number} */
          self._selected.length = 0;
          init.selection.display();
        }
      }
    }
  });
  var x;
  var y;
  var size;
  var h;
  /** @type {boolean} */
  var n = false;
  $box(self._dom.desktop, "+"rip".ui_explorer"+"rip", {
    target : "+"rip".ui_icon"+"rip",
    onstart : function(type, e) {
      /** @type {boolean} */
      n = true;
    },
    ondraw : function(size, text) {
      var value = this.getAttribute("+"rip"data-id"+"rip");
      if (size.ctrlKey) {
        $io.arr.all(text, function(aircraftId) {
          if (-1 === self._selected.indexOf(aircraftId)) {
            self._selected.push(aircraftId);
          }
        });
      } else {
        /** @type {!Object} */
        self._selected = text;
      }
      init.selection.display(value);
    },
    onstop : function(type, e) {
      /** @type {boolean} */
      n = false;
    }
  });
  var $scope = {
    viewIcons : function() {
      render.call(this, "+"rip"icons"+"rip");
    },
    viewList : function(type) {
      render.call(this, "+"rip"list"+"rip");
    },
    viewColumn : function() {
      render.call(this, "+"rip"column"+"rip");
    },
    viewDetails : function() {
      render.call(this, "+"rip"details"+"rip");
    },
    viewWorkspace : function() {
      render.call(this, "+"rip"workspace"+"rip");
    },
    viewNavigation : function(type) {
      if (type) {
        this.explorer.getWindow().el.afterMenu.classList.remove("+"rip"hide"+"rip");
        this.explorer.el.folder.classList.add("+"rip"ui_explorer--nav"+"rip");
      } else {
        this.explorer.el.folder.classList.remove("+"rip"ui_explorer--nav"+"rip");
        this.explorer.getWindow().el.afterMenu.classList.add("+"rip"hide"+"rip");
      }
      /** @type {!Object} */
      this.explorer.cfg.nav = type;
    },
    viewFileTree : function(docs) {
      if (docs) {
        this.explorer.el.tree.classList.remove("+"rip"hide"+"rip");
      } else {
        this.explorer.el.tree.classList.add("+"rip"hide"+"rip");
      }
      this.explorer.cfg.fileTree = docs;
    },
    itemsOpenWith : function(messages) {
      return !!self._selected.length && $fs.utils.getMenuOpenWith(self._selected);
    }
  };
  init.clipboard = {
    copy : [],
    cut : []
  };
  var end;
  var top;
  var list = {
    barMenu : [{
      name : "+"rip"File"+"rip",
      items : [{
        name : "+"rip"Open"+"rip",
        key : "+"rip"enter"+"rip",
        action : (init.exe = {
          SelectAll : function() {
            /** @type {!Array<?>} */
            self._selected = Array.prototype.slice.call(init.current.el.folder.querySelectorAll("+"rip".ui_icon"+"rip"));
            init.selection.display();
          },
          Open : function() {
            init.selection.paths(function(canCreateDiscussions, mmCoreSplitViewBlock) {
              $exe(mmCoreSplitViewBlock);
            });
          },
          Copy : function(type, val) {
            fire();
            /** @type {number} */
            init.clipboard.copy.length = 0;
            /** @type {number} */
            init.clipboard.cut.length = 0;
            init.selection.paths(function(bone_in, canCreateDiscussions) {
              init.clipboard.copy.push(bone_in);
            });
          },
          Cut : function() {
            fire();
            /** @type {number} */
            init.clipboard.copy.length = 0;
            /** @type {number} */
            init.clipboard.cut.length = 0;
            init.selection.paths(function(bone_in, t) {
              t.classList.add("+"rip"ui_icon--cut"+"rip");
              init.clipboard.cut.push(bone_in);
            });
          },
          Paste : function() {
            fire();
            $io.arr.all(init.clipboard.copy, function(path) {
              $fs.utils.isFolder(path);
              $file.copy(path, init.current.getPath(), function(cX1) {
                init.utils.saveIconPos(init.current.getPath(), init.current.id, cX1);
                init.refresh();
              });
            });
            $io.arr.all(init.clipboard.cut, function(id) {
              init.clipboard.copy.push(id);
              var t = $fs.utils.isFolder(id);
              /** @type {string} */
              var n = init.current.getPath() + $fs.utils.getName(id) + (t ? "+"rip"/"+"rip" : "+"rip""+"rip");
              if (id !== n) {
                $file.move(id, n, function() {
                  init.refresh();
                });
              }
            });
            /** @type {number} */
            init.clipboard.cut.length = 0;
          },
          Delete : function() {
            init.selection.truePaths(function(name) {
              $file.delete(name, function() {
                init.refresh();
                $notif("+"rip"File deleted"+"rip", name);
              });
            });
          },
          Import : function() {
            $file.upload(function(status) {
              $file.save(init.current.getPath(), status, function(cX1) {
                init.utils.saveIconPos(init.current.getPath(), init.current.id, cX1);
                init.refresh();
              });
            });
          },
          DownloadAs : function() {
            init.selection.paths(function(id) {
              if ($fs.utils.isFolder(id)) {
                $archive(id);
              } else {
                $file.download(id);
              }
            });
          },
          Zip : function() {
            $archive(self._selected);
          },
          Refresh : function() {
            init.refresh();
          },
          Format : function() {
            $file.format(function() {
              init.current.go("+"rip"/a/"+"rip");
            });
          },
          CreateFolder : function() {
            l(init.current.getPath(), function(values) {
              init.utils.saveIconPos(init.current.getPath(), init.current.id, values);
              init.refresh(values);
            }, true);
          },
          CreateFile : function() {
            l(init.current.getPath(), function(values) {
              init.utils.saveIconPos(init.current.getPath(), init.current.id, values);
              init.refresh(values);
            });
          },
          CreateShortcut : function(type) {
            $window.form("+"rip"Create Shortcut"+"rip", {
              data : type || {},
              schema : self._schemas.shortcut
            }, function(result, data) {
              if (console.log(123, result, data), result) {
                var index = data.title || $fs.utils.getName(data.exe);
                var relativeToPath = init.current.getPath();
                $store.set(relativeToPath.replace(/^\/a\//, "+"rip""+"rip") + index + "+"rip".lnk42"+"rip", data);
                init.utils.saveIconPos(init.current.getPath(), init.current.id, index + "+"rip".lnk42"+"rip");
                init.refresh(index + "+"rip".lnk42"+"rip");
              }
            });
          },
          EditShortcut : function(type) {
            /** @type {!Array} */
            var values = [];
            document.activeElement;
            init.selection.all(function(parent) {
              var file = parent.getAttribute("+"rip"data-path"+"rip");
              var value = (parent.getAttribute("+"rip"data-title"+"rip"), $fs.utils.getName(file));
              $window.form("+"rip"Edit Shortcut"+"rip", {
                data : $extend({}, parent.dataset),
                schema : self._schemas.shortcut
              }, function(canCreateDiscussions, obj) {
                if (canCreateDiscussions) {
                  var key = file.replace(/^\/a\//, "+"rip""+"rip");
                  $store.update(key, function(data) {
                    return $extend(data, obj);
                  });
                  values.push(value);
                  init.refresh(values);
                }
              });
            });
          },
          Properties : function() {
            init.selection.all(function(parent) {
              var me = $form.build($extend({}, parent.dataset), {
                disabled : true
              });
              $window({
                title : "+"rip"Properties"+"rip",
                html : me.el,
                width : 400,
                btnOk : "+"rip"Close"+"rip"
              });
            });
          },
          Rename : function() {
            /** @type {!Array} */
            var values = [];
            document.activeElement;
            init.selection.all(function(tab) {
              var file = tab.getAttribute("+"rip"data-path"+"rip");
              var title = tab.getAttribute("+"rip"data-title"+"rip");
              var name = $fs.utils.getName(file);
              /** @type {boolean} */
              var result = /\.lnk42$/.test(name);
              var value = init.current;
              $prompt({
                msg : "+"rip"New name ?"+"rip",
                onready : function() {
                  init.utils.inputSelectFileName(this.el.form.prompt);
                }
              }, title || name, function(canCreateDiscussions, label) {
                if (canCreateDiscussions) {
                  var i = $io.str.truncate(label.replace(/[\/:]/g, "+"rip"_"+"rip"), 247);
                  if (result) {
                    /** @type {string} */
                    i = i + "+"rip".lnk42"+"rip";
                  }
                  $fs.utils.getFolderPath(file);
                  $file.rename(file, i, function(proxyValue) {
                    if (init.current = value, result) {
                      var key = proxyValue.replace(/^\/a\//, "+"rip""+"rip");
                      $store.update(key, function(button) {
                        return button.name = label + "+"rip".lnk42"+"rip", button.title = label, button;
                      });
                    }
                    if (self._desktop[name]) {
                      self._desktop[i] = $extend({}, self._desktop[name]);
                      delete self._desktop[name];
                    }
                    values.push(i);
                    init.refresh(values);
                  });
                }
              });
            });
          },
          OpenTerminalHere : function() {
            $exe("+"rip"terminal "+"rip" + init.current.getPath());
          }
        }).Open,
        disabled : getDraggingRow
      }, {
        name : "+"rip"Open With..."+"rip",
        items : $scope.itemsOpenWith,
        disabled : getDraggingRow
      }, {
        name : "+"rip"---"+"rip"
      }, {
        name : "+"rip"Create Folder..."+"rip",
        key : "+"rip"ctrl+shift+f"+"rip",
        action : init.exe.CreateFolder,
        disabled : remove
      }, {
        name : "+"rip"Create Document..."+"rip",
        key : "+"rip"ctrl+shift+d"+"rip",
        action : init.exe.CreateFile,
        disabled : remove
      }, {
        name : "+"rip"Create Shortcut..."+"rip",
        key : "+"rip"ctrl+shift+s"+"rip",
        action : init.exe.CreateShortcut,
        disabled : remove
      }, {
        name : "+"rip"---"+"rip"
      }, {
        name : "+"rip"Import file"+"rip",
        action : init.exe.Import,
        disabled : remove
      }, {
        name : "+"rip"Download file(s)"+"rip",
        action : init.exe.DownloadAs,
        disabled : deselect
      }, {
        name : "+"rip"---"+"rip"
      }, {
        name : "+"rip"Open Terminal here"+"rip",
        action : init.exe.OpenTerminalHere
      }, {
        name : "+"rip"---"+"rip"
      }, {
        name : "+"rip"Quit"+"rip",
        action : function() {
          if (winInstance && winInstance.close) {
            winInstance.close();
          }
        }
      }]
    }, {
      name : "+"rip"Edit"+"rip",
      items : [{
        name : "+"rip"Select all"+"rip",
        key : "+"rip"ctrl+a"+"rip",
        action : init.exe.SelectAll
      }, {
        name : "+"rip"---"+"rip"
      }, {
        name : "+"rip"Cut"+"rip",
        key : "+"rip"ctrl+x"+"rip",
        action : init.exe.Cut,
        disabled : onDragEnter
      }, {
        name : "+"rip"Copy"+"rip",
        key : "+"rip"ctrl+c"+"rip",
        action : init.exe.Copy,
        disabled : onDragEnter
      }, {
        name : "+"rip"Paste"+"rip",
        key : "+"rip"ctrl+v"+"rip",
        action : init.exe.Paste,
        disabled : copy
      }, {
        name : "+"rip"---"+"rip"
      }, {
        name : "+"rip"Rename"+"rip",
        key : "+"rip"f2"+"rip",
        action : init.exe.Rename,
        disabled : onDragEnter
      }, {
        name : "+"rip"Delete"+"rip",
        key : "+"rip"del"+"rip",
        action : init.exe.Delete,
        disabled : onDragEnter
      }]
    }, {
      name : "+"rip"View"+"rip",
      items : [{
        name : "+"rip"Refresh"+"rip",
        action : init.exe.Refresh
      }, {
        name : "+"rip"---"+"rip"
      }, {
        name : "+"rip"Navigation"+"rip",
        checkbox : true,
        action : $scope.viewNavigation,
        selected : function() {
          return this.explorer.cfg.nav;
        }
      }, {
        name : "+"rip"---"+"rip"
      }, {
        name : "+"rip"Icons"+"rip",
        radio : "+"rip"View"+"rip",
        action : $scope.viewIcons,
        selected : function() {
          return "+"rip"icons"+"rip" === this.explorer.cfg.viewType;
        }
      }, {
        name : "+"rip"List"+"rip",
        radio : "+"rip"View"+"rip",
        action : $scope.viewList,
        selected : function() {
          return "+"rip"list"+"rip" === this.explorer.cfg.viewType;
        }
      }]
    }],
    ctxFile : $menu([{
      name : "+"rip"Open"+"rip",
      action : init.exe.Open
    }, {
      name : "+"rip"Open With..."+"rip",
      items : $scope.itemsOpenWith,
      disabled : getDraggingRow
    }, {
      name : "+"rip"Download As..."+"rip",
      action : init.exe.DownloadAs,
      disabled : deselect
    }, {
      name : "+"rip"---"+"rip"
    }, {
      name : "+"rip"Cut"+"rip",
      key : "+"rip"ctrl+x"+"rip",
      action : init.exe.Cut,
      disabled : onDragEnter
    }, {
      name : "+"rip"Copy"+"rip",
      key : "+"rip"ctrl+c"+"rip",
      action : init.exe.Copy,
      disabled : onDragEnter
    }, {
      name : "+"rip"---"+"rip"
    }, {
      name : "+"rip"Rename"+"rip",
      key : "+"rip"f2"+"rip",
      action : init.exe.Rename,
      disabled : onDragEnter
    }, {
      name : "+"rip"Delete"+"rip",
      key : "+"rip"del"+"rip",
      action : init.exe.Delete,
      disabled : onDragEnter
    }, {
      name : "+"rip"---"+"rip"
    }, {
      name : "+"rip"Edit"+"rip",
      display : function() {
        if (this.el) {
          return this.el.classList.contains("+"rip"ui_icon__lnk42"+"rip");
        }
      },
      action : init.exe.EditShortcut,
      disabled : onDragEnter
    }, {
      name : "+"rip"Properties"+"rip",
      action : init.exe.Properties
    }])
  };
  list.ctxExplorer = $menu([{
    name : "+"rip"Create Folder..."+"rip",
    action : init.exe.CreateFolder,
    disabled : remove
  }, {
    name : "+"rip"Create Document..."+"rip",
    action : init.exe.CreateFile,
    disabled : remove
  }, {
    name : "+"rip"Create Shortcut..."+"rip",
    action : init.exe.CreateShortcut,
    disabled : remove
  }, {
    name : "+"rip"---"+"rip"
  }, {
    name : "+"rip"Paste"+"rip",
    key : "+"rip"ctrl+v"+"rip",
    action : init.exe.Paste,
    disabled : copy
  }, {
    name : "+"rip"---"+"rip"
  }, {
    name : "+"rip"Open Terminal here"+"rip",
    action : init.exe.OpenTerminalHere
  }]);
  init.selection = {
    reset : function() {
      return self._selected.length = 0, this;
    },
    add : function(type) {
      return self._selected.push(type), this;
    },
    all : function(property) {
      return $io.arr.all(self._selected, property), this;
    },
    each : function(type) {
      return $io.arr.each(self._selected, type), this;
    },
    paths : function(t) {
      return $io.arr.all(self._selected, function(parent) {
        var properties = $extend({}, parent.dataset);
        var type = parent.getAttribute("+"rip"data-exe"+"rip");
        var CustomEvent = parent.getAttribute("+"rip"data-path"+"rip");
        var eventName = $fs.utils.exist(type) ? type : CustomEvent;
        return t.call(properties, eventName, parent);
      }), this;
    },
    truePaths : function(s) {
      return $io.arr.all(self._selected, function(f) {
        var options = $extend({}, f.dataset);
        var file = f.getAttribute("+"rip"data-path"+"rip");
        return s.call(options, file, f);
      }), this;
    },
    remove : function() {
      return $io.arr.all(document.querySelectorAll("+"rip".ui_icon.ui_selected"+"rip"), function(focusedObj) {
        focusedObj.classList.remove("+"rip"ui_selected"+"rip");
      }), this;
    },
    display : function() {
      /** @type {!Array} */
      var list = [];
      if (init.selection.remove(), $io.arr.all(self._selected, function(menuItem) {
        var path = menuItem.getAttribute("+"rip"data-path"+"rip");
        if (path) {
          list.push(1 < self._selected.length ? '"+"rip"' + path + '"+"rip"' : path);
        }
        if (menuItem) {
          menuItem.classList.add("+"rip"ui_selected"+"rip");
        }
      }), init.current) {
        var handler = init.current.getSaveInput();
        if (handler) {
          if (handler && list && list[0]) {
            handler.value = $fs.utils.getFileName(list[0]);
            $el(handler).trigger("+"rip"change"+"rip");
          }
        } else {
          var tblr = init.current.getSelectionInput();
          if (tblr) {
            tblr.value = list.join("+"rip", \n"+"rip") || init.current.getPath();
          }
        }
      }
      return this;
    }
  };
  /** @type {!Array} */
  init.instances = nodes;
  /**
   * @param {?} image
   * @param {!Event} target
   * @return {?}
   */
  init.setCurrent = function(image, target) {
    var n = nodes[1 === image.nodeType ? 1 * image.getAttribute("+"rip"data-id"+"rip") : image];
    return n && (init.current = n), 0 === init.current.id && target && (end = target.clientX, top = target.clientY), n;
  };
  /**
   * @param {!Object} target
   * @return {undefined}
   */
  (init.utils = {}).inputSelectFileName = function(target) {
    if (/\.[a-z0-9]{1,20}$/.test(target.value)) {
      var retOne = target.value.lastIndexOf("+"rip"."+"rip");
      if (-1 < retOne) {
        $selection.create(target, 0, retOne);
      }
    } else {
      target.select();
    }
  };
  /**
   * @param {!Object} b
   * @param {number} view
   * @param {string} a
   * @param {number} max
   * @param {number} t
   * @return {undefined}
   */
  init.utils.saveIconPos = function(b, view, a, max, t) {
    /** @type {number} */
    max = "+"rip"number"+"rip" == typeof max ? max : end - self._icons.w / 2;
    /** @type {number} */
    t = "+"rip"number"+"rip" == typeof t ? t : top - self._icons.h / 2;
    if ((a = a ? $fs.utils.getName(a) : $fs.utils.getName(b)) && $fs.utils.getFolderPath(b) === self._path.desktop) {
      /** @type {({time: number, x: number, y: number})} */
      self._desktop[a] = 1 * view == 0 && 1 * max === max && 1 * t === t ? {
        x : max,
        y : t,
        time : Date.now()
      } : {
        x : 9999,
        y : 0,
        time : 0
      };
    }
  };
  /**
   * @param {number} values
   * @param {?} item
   * @return {undefined}
   */
  init.refresh = function(values, item) {
    $file.scan("+"rip"/a/"+"rip", function() {
      $io.arr.all(nodes, function(latestService) {
        if (latestService) {
          latestService.refresh();
        }
      });
      if ("+"rip"string"+"rip" == typeof values) {
        /** @type {!Array} */
        values = [values];
      }
      if (values && values.length) {
        item = item || values[0];
        init.selection.reset();
        $io.arr.all(values, function($length) {
          var t = init.current.el.folder.querySelector('div[data-name="+"rip"' + $length + '"+"rip"]');
          if (t) {
            if (item === $length) {
              t.focus();
            }
            init.selection.add(t);
          }
        });
        init.selection.display();
      }
    });
  };
  /** @type {function(undefined, !Object, !Object): ?} */
  window.$explorer = init;
});
system42.on("+"rip"explorer:ready"+"rip", function(self) {
  /**
   * @return {undefined}
   */
  function update() {
    if (items.length) {
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var items_length = items.length;
      for (; i < items_length; i++) {
        items[i].el;
        var targetL;
        var y_body_bottom;
        var swipeDiv = items[i].ghost;
        var crect = items[i].rect;
        if (l) {
          /** @type {number} */
          y_body_bottom = $drag.y - step.y * i;
          /** @type {number} */
          targetL = $drag.x - step.x * i;
        } else {
          if ($key.r) {
            /** @type {number} */
            y_body_bottom = crect.top - Math.random() * (outerRect.top - $drag.y);
            /** @type {number} */
            targetL = crect.left - Math.random() * (outerRect.left - $drag.x);
          } else {
            /** @type {number} */
            y_body_bottom = crect.top - (outerRect.top - $drag.y);
            /** @type {number} */
            targetL = crect.left - (outerRect.left - $drag.x);
          }
        }
        if ($key.space) {
          /** @type {number} */
          targetL = ~~((targetL + fallback.grid[0] / 2) / fallback.grid[0]) * fallback.grid[0];
          /** @type {number} */
          y_body_bottom = ~~((y_body_bottom + fallback.grid[1] / 2) / fallback.grid[1]) * fallback.grid[1];
        }
        /** @type {string} */
        swipeDiv.style.top = y_body_bottom + "+"rip"px"+"rip";
        /** @type {string} */
        swipeDiv.style.left = targetL + "+"rip"px"+"rip";
      }
    }
  }
  /**
   * @param {!Function} validate
   * @return {undefined}
   */
  function find(validate) {
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var items_length = items.length;
    for (; i < items_length; i++) {
      validate(items[i].el, items[i].ghost, items[i].rect, items[i], i);
    }
  }
  /**
   * @return {undefined}
   */
  function max() {
    /** @type {number} */
    items.length = 0;
    /** @type {null} */
    outerRect = null;
    /** @type {boolean} */
    l = false;
    /** @type {number} */
    step.x = 0;
    /** @type {number} */
    step.y = 0;
  }
  /**
   * @param {?} event
   * @return {undefined}
   */
  function start(event) {
    if (d) {
      if (true === event || event.ctrlKey || event.shiftKey) {
        find(function(focusedObj, selectedEle) {
          /** @type {string} */
          selectedEle.style.opacity = "+"rip".6"+"rip";
          focusedObj.classList.remove("+"rip"hide"+"rip");
        });
      } else {
        find(function(e, selectedEle) {
          /** @type {string} */
          selectedEle.style.opacity = "+"rip"1"+"rip";
          e.classList.add("+"rip"hide"+"rip");
        });
      }
    }
  }
  /**
   * @param {!Object} A
   * @return {undefined}
   */
  function filter(A) {
    A.classList.remove("+"rip"ui_dropzone"+"rip");
    A.classList.remove("+"rip"ui_dropzone--copy"+"rip");
    A.classList.remove("+"rip"ui_dropzone--move"+"rip");
    A.classList.remove("+"rip"ui_dropzone--link"+"rip");
    A.classList.remove("+"rip"ui_dropzone--droppable"+"rip");
    A.classList.remove("+"rip"ui_dropzone--no-drop"+"rip");
  }
  /**
   * @param {!Object} s
   * @return {undefined}
   */
  function $(s) {
    if (s && s.parentNode && s.parentNode === document.body) {
      document.body.removeChild(s);
    }
  }
  /**
   * @param {!Element} el
   * @param {!Object} e
   * @param {!Object} obj
   * @return {undefined}
   */
  function hide(el, e, obj) {
    $transition.revert(e, {
      x : obj.left,
      y : obj.top
    }, function() {
      el.classList.remove("+"rip"hide"+"rip");
      if (e && e.parentNode && e.parentNode === document.body) {
        document.body.removeChild(e);
      }
    });
  }
  /**
   * @param {!Object} element
   * @param {!Function} options
   * @return {undefined}
   */
  function load(element, options) {
    var s;
    var o;
    /** @type {!Array} */
    var values = [];
    if (element.classList.contains("+"rip"ui_explorer--local"+"rip") ? (o = $explorer.instances[1 * element.getAttribute("+"rip"data-id"+"rip")], s = o.getPath()) : s = element.getAttribute("+"rip"data-exe"+"rip"), s) {
      $state.loading();
      var cb;
      /** @type {number} */
      var time = Date.now();
      $io.arr.enum([items], function(that, startTime, localLoad) {
        var path = that.el.getAttribute("+"rip"data-path"+"rip");
        var t = $fs.utils.isFolder(path);
        /** @type {string} */
        var end = s + that.el.getAttribute("+"rip"data-name"+"rip") + (t ? "+"rip"/"+"rip" : "+"rip""+"rip");
        try {
          options.call(that, path, end, s, function(line) {
            var id = $fs.utils.getName(line);
            if (that.focus) {
              cb = id;
            }
            values.push(id);
            if (o && 0 === o.id) {
              self._desktop[id] = {
                x : parseInt(that.ghost.style.left),
                y : parseInt(that.ghost.style.top),
                time : time - startTime
              };
            }
            localLoad();
          });
        } catch (error) {
          localLoad();
          $alert.error(error);
        }
        $(that.ghost);
      }).done(function() {
        $explorer.refresh(values, cb);
        $state.loaded();
        max();
      });
    } else {
      $notif("+"rip"You don't have write permission on this drive"+"rip");
      info.cancel();
    }
  }
  $key().combo({
    left : function() {
      if (items.length) {
        /** @type {boolean} */
        l = true;
        step.x += 2;
        update();
      }
    },
    right : function() {
      if (items.length) {
        /** @type {boolean} */
        l = true;
        step.x -= 2;
        update();
      }
    },
    up : function() {
      if (items.length) {
        /** @type {boolean} */
        l = true;
        step.y += 2;
        update();
      }
    },
    down : function() {
      if (items.length) {
        /** @type {boolean} */
        l = true;
        step.y -= 2;
        update();
      }
    },
    esc : function() {
      if (items.length) {
        /** @type {boolean} */
        l = false;
        step = {
          x : 0,
          y : 0
        };
        update();
      }
    }
  });
  var fallback = {
    grid : [self._icons.w, self._icons.h]
  };
  /** @type {!Array} */
  var items = [];
  /** @type {null} */
  var outerRect = null;
  /** @type {boolean} */
  var l = false;
  var step = {
    x : 0,
    y : 0
  };
  /** @type {boolean} */
  var d = false;
  var stop = $io.fn.throttle(start, 100);
  /** @type {boolean} */
  var lastTime = false;
  $drag(self._dom.screen, "+"rip".ui_explorer--local .ui_icon"+"rip", {
    ghost : true,
    grid : function() {
      return !!$key.space && [self._icons.w, self._icons.h];
    },
    onstart : function(type) {
      d = $drag.elem.parentNode.classList.contains("+"rip"ui_explorer--workspace"+"rip");
      if (!$drag.elem.classList.contains("+"rip"ui_selected"+"rip")) {
        $explorer.selection.reset().add($drag.elem).display();
        $drag.ghost.classList.add("+"rip"ui_selected"+"rip");
      }
      outerRect = $drag.elem.getBoundingClientRect();
      /** @type {number} */
      items.length = 0;
      items.push({
        focus : true,
        el : $drag.elem,
        ghost : $drag.ghost,
        rect : outerRect
      });
      $explorer.selection.each(function(elem, i) {
        if ($drag.elem !== elem) {
          var ghost = $drag.createGhost(elem);
          /** @type {number} */
          ghost.style.zIndex = 9998 - i;
          var obj = elem.getBoundingClientRect();
          document.body.appendChild(ghost);
          items.push({
            el : elem,
            ghost : ghost,
            rect : obj
          });
        }
      });
      if (2 === type.button) {
        start(lastTime = true);
      } else {
        /** @type {boolean} */
        lastTime = false;
        start(type);
      }
    },
    ondrag : function(type) {
      update();
    },
    onstop : function(type) {
    },
    ondrop : function(type) {
      if ($drag.y < 0 || $drag.x < 0) {
        items.sort(function(collider, t) {
          var name = collider.el.getAttribute("+"rip"data-name"+"rip");
          return t.el.getAttribute("+"rip"data-name"+"rip").toLowerCase().localeCompare(name.toLowerCase());
        });
        info.pos();
      } else {
        info.cancel();
      }
    },
    zone : {
      '.ui_explorer, [data-exe^="+"rip"/a/"+"rip"][data-exe$="+"rip"/"+"rip"], [data-exe^="+"rip"/~/"+"rip"][data-exe$="+"rip"/"+"rip"]' : {
        move : function(type, elem) {
          if (!lastTime) {
            stop(type);
          }
        },
        enter : function(e, data) {
          !function(addedRenderer, body) {
            if (body.classList.contains("+"rip"ui_explorer--not_local"+"rip")) {
              body.classList.add("+"rip"ui_dropzone--no-drop"+"rip");
            }
            body.classList.add("+"rip"ui_dropzone"+"rip");
            if ($drag.elem.parentNode !== body) {
              body.classList.add("+"rip"ui_dropzone--droppable"+"rip");
            }
          }(0, data);
        },
        leave : function(name, elem) {
          filter(elem);
        },
        drop : function(event, str, type) {
          filter(str);
          if (2 === event.button) {
            InfoMode.dragMenu.show(str, {
              of : event,
              within : self._dom.screen
            });
          } else {
            info.move();
          }
        }
      }
    }
  });
  var info = {
    pos : function() {
      /** @type {number} */
      var time = Date.now() + items.length + 1;
      find(function(div, data, val, $esp, startTime) {
        div.classList.remove("+"rip"hide"+"rip");
        if ($esp.focus) {
          div.focus();
        }
        if (d) {
          div.style.top = data.style.top;
          div.style.left = data.style.left;
          self._desktop[div.getAttribute("+"rip"data-name"+"rip")] = {
            x : div.offsetLeft,
            y : div.offsetTop,
            time : time - startTime
          };
          $(data);
        } else {
          hide(div, data, val);
        }
      });
      $explorer.instances[0].reorder();
      max();
    },
    move : function(type) {
      type = $drag.zone || this;
      if (items[0] && items[0].el && items[0].el.parentNode !== type) {
        load(type, function(width, t, n, enterEventHandler) {
          $file.move(width, t, function(e) {
            if ("+"rip"/a/trash/WINDOWS 93.lnk42"+"rip" === e) {
              (function() {
                Date.now();
                /** @type {!Image} */
                var textureimg = new Image;
                /** @type {!Element} */
                var fakeClone = document.createElement("+"rip"div"+"rip");
                /** @type {string} */
                fakeClone.style.cssText = "+"rip"position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;width: auto;height: auto;background: center center / cover no-repeat transparent;z-index: 999999;-ms-interpolation-mode: nearest-neighbor;image-rendering: -webkit-optimize-contrast;image-rendering: -moz-crisp-edges;image-rendering: -o-pixelated;image-rendering: pixelated;cursor: none;"+"rip";
                document.body.appendChild(fakeClone);
                /**
                 * @param {!Object} name
                 * @return {undefined}
                 */
                textureimg.onload = function(name) {
                  /** @type {string} */
                  fakeClone.style.backgroundImage = 'url("+"rip"/d/papy.gif"+"rip")';
                  setTimeout(function() {
                    document.body.removeChild(fakeClone);
                  }, 2500);
                };
                /** @type {string} */
                textureimg.src = "+"rip"/d/papy.gif"+"rip";
              })();
            }
            enterEventHandler(e);
          });
        });
      } else {
        info.pos();
      }
    },
    copy : function(type) {
      load($drag.zone || this, function(name, canCreateDiscussions, n, o) {
        $file.copy(name, n, o);
      });
    },
    link : function(name) {
      load($drag.zone || this, function(canCreateDiscussions, aShortcut, n, $) {
        var key = aShortcut.replace(/^\/a\/|\/$/g, "+"rip""+"rip") + "+"rip".lnk42"+"rip";
        $store.set(key, {
          exe : this.el.getAttribute("+"rip"data-path"+"rip")
        });
        $("+"rip"/a/"+"rip" + key);
      });
    },
    cancel : function() {
      find(function(key, name, val) {
        hide(key, name, val);
      });
      max();
    }
  };
  var InfoMode = InfoMode || {};
  InfoMode.dragMenu = $menu([{
    name : "+"rip"Copy here"+"rip",
    action : info.copy
  }, {
    name : "+"rip"Move here"+"rip",
    action : info.move
  }, {
    name : "+"rip"Link here"+"rip",
    action : info.link
  }, {
    name : "+"rip"---"+"rip"
  }, {
    name : "+"rip"Cancel"+"rip",
    action : info.cancel
  }], {
    oncancel : info.cancel
  });
  $file.ondrop(self._dom.desktop, "+"rip".ui_explorer--local"+"rip", function(event) {
    /**
     * @param {!Object} width
     * @return {undefined}
     */
    function load(width) {
      $state.loading();
      $store.set(r.replace(/^\/a\//, "+"rip""+"rip") + target, width);
      $file.scan("+"rip"/a/"+"rip", function() {
        $explorer.utils.saveIconPos(r, id, target, event.clientX, event.clientY);
        $explorer.instances[id].refresh();
        $state.loaded();
      });
    }
    var url;
    var id = this.getAttribute("+"rip"data-id"+"rip");
    if ($io.arr.all(event.dataTransfer.types, function(e) {
      if (!("+"rip"text/uri-list"+"rip" !== e && "+"rip"text/x-moz-url"+"rip" !== e)) {
        url = event.dataTransfer.getData("+"rip"text/plain"+"rip");
      }
    }), url) {
      url = url.replace(location.origin, "+"rip""+"rip");
      var a = $exe.parseURL(url, function(e) {
        load(e);
      }, function(e) {
        load(e);
      });
      var r = $explorer.instances[id].getPath();
      var target = url.replace(/https?:\/\//, "+"rip""+"rip").replace(/\//g, "+"rip"%2F"+"rip") + "+"rip".lnk42"+"rip";
      a.name = target;
      load(a);
    } else {
      if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length && $explorer.instances[id] && "+"rip"function"+"rip" == typeof $explorer.instances[id].getPath) {
        /**
         * @param {!Object} entry
         * @param {!Object} path
         * @return {undefined}
         */
        var traverseFileTree = function(entry, path) {
          path = path || "+"rip""+"rip";
          if (entry.isFile) {
            entry.file(function(status) {
              $file.save(path, status, function(obj) {
                success(path, obj);
                $explorer.instances[id].refresh();
              });
            });
          } else {
            if (entry.isDirectory) {
              entry.createReader().readEntries(function(entries) {
                if (entries.length) {
                  /** @type {number} */
                  var i = 0;
                  for (; i < entries.length; i++) {
                    traverseFileTree(entries[i], path + entry.name + "+"rip"/"+"rip");
                  }
                } else {
                  $store.set(path + entry.name + "+"rip"/"+"rip", null);
                  $file.scan(code, function() {
                    $explorer.instances[id].refresh();
                  });
                }
                success(path, entry.name);
              });
            }
          }
        };
        /**
         * @param {string} b
         * @param {string} o
         * @return {undefined}
         */
        var success = function(b, o) {
          $explorer.utils.saveIconPos("+"rip"/a/"+"rip" + b, id, o, event.clientX, event.clientY);
        };
        var code = $explorer.instances[id].getPath();
        var path = code.replace(/^\/a\//, "+"rip""+"rip");
        var items = event.dataTransfer.items;
        /** @type {number} */
        var i = 0;
        for (; i < items.length; i++) {
          var entry = items[i].webkitGetAsEntry();
          if (entry) {
            traverseFileTree(entry, path);
          }
        }
      }
    }
  });
});
system42(function(self) {
  /**
   * @param {!Object} options
   * @param {!Object} _childOptions
   * @return {undefined}
   */
  window.$editor = function(options, _childOptions) {
    /**
     * @param {string} path
     * @param {!Object} data
     * @param {?} module
     * @return {undefined}
     */
    function cb(path, data, module) {
      if ($scope) {
        $scope.changeTitle((path ? path + "+"rip" - "+"rip" : "+"rip""+"rip") + result.name);
        $scope.changeFooter(data.mime || "+"rip"&nbsp"+"rip");
      }
      filename = $fs.utils.getFileName(path);
      /** @type {!Object} */
      o = data;
      self.readFile.call(data, module);
    }
    /**
     * @param {string} path
     * @return {undefined}
     */
    function callback(path) {
      /** @type {string} */
      options.filePath = path;
      var type = options.type || "+"rip"String"+"rip";
      if ("+"rip"URL"+"rip" === type) {
        $file.getUrl(path, function(instance) {
          /** @type {string} */
          whatToScale = "+"rip"URL"+"rip";
          cb(path, $fs.utils.getInfo(path), instance);
        });
      } else {
        $file.open(path, type, function(instance, width) {
          /** @type {string} */
          whatToScale = width;
          cb(path, this, instance);
        });
      }
    }
    var self;
    var $scope;
    var a;
    var result = this.app;
    /** @type {string} */
    (options = options || {}).filePath = "+"rip"string"+"rip" == typeof options.filePath ? options.filePath : "+"rip""+"rip";
    var filename;
    var o = {};
    /** @type {!Array} */
    var newNodeLists = [];
    if (result.ext) {
      $io.arr.all(result.ext, function(canCreateDiscussions) {
        var itemNodeList = self._get.ext.mime["+"rip"."+"rip" + canCreateDiscussions];
        if (itemNodeList) {
          newNodeLists.push(itemNodeList);
        }
      });
    } else {
      if (result.mimetype) {
        newNodeLists = $io.is.arr(result.mimetype) ? result.mimetype : [result.mimetype];
      }
    }
    /** @type {string} */
    var whatToScale = "+"rip"String"+"rip";
    var data = {
      New : function() {
        return self.setValue("+"rip""+"rip"), false;
      },
      Open : function() {
        var e = options.defaultFolder || a || options.filePath || self._path.home;
        return setTimeout(function() {
          $explorer(e, {
            browse : true,
            list : true,
            accept : result.accept || "+"rip"*"+"rip",
            window : {
              animationIn : "+"rip""+"rip",
              animationOut : "+"rip""+"rip",
              center : true
            },
            onclose : function(name, e) {
              if (name) {
                a = $fs.utils.getFolderPath(e);
                callback(e);
              }
            }
          });
        }, 0), false;
      },
      SaveAs : function() {
        /**
         * @param {string} force
         * @param {string} width
         * @return {undefined}
         */
        function create(force, width) {
          if (width) {
            /** @type {string} */
            whatToScale = width;
          }
          var n = 0 === options.filePath.indexOf("+"rip"/a/"+"rip") ? options.filePath : self._path.desktop + (options.filePath ? $fs.utils.getFileName(options.filePath) : "+"rip""+"rip");
          setTimeout(function() {
            $explorer(n, {
              save : true,
              list : true,
              accept : force || result.accept || "+"rip"*"+"rip",
              window : {
                animationIn : "+"rip""+"rip",
                animationOut : "+"rip""+"rip",
                center : true
              },
              onclose : function(name, value) {
                if (name) {
                  a = $fs.utils.getFolderPath(value);
                  /** @type {string} */
                  options.filePath = value;
                  o = $fs.utils.getInfo(value);
                  data.Save();
                }
              }
            });
          }, 0);
        }
        return self.beforeSaveAs ? self.beforeSaveAs(create) : create(), false;
      },
      Save : function() {
        /**
         * @param {?} status
         * @return {undefined}
         */
        function save(status) {
          $file.save(options.filePath, status, function() {
          });
        }
        var i = whatToScale;
        if (options.filePath && 0 === options.filePath.indexOf("+"rip"/a/"+"rip")) {
          var raw = o.mime;
          self.getValue(function(name) {
            var color = $io.type(name);
            if ("+"rip"Blob"+"rip" === i) {
              $io[color].Blob(name, function(m) {
                save(m);
              }, raw);
            } else {
              $io[color][i](name, function(m) {
                save(m);
              });
            }
          }, raw);
        } else {
          data.SaveAs();
        }
        return false;
      },
      Import : function() {
        $file.upload(function(pathEls) {
          var file = pathEls[0];
          $io.File[options.type || "+"rip"String"+"rip"](file, function(instance) {
            cb(file.name, {
              file : file.name,
              mime : file.type
            }, instance);
          });
        }, {
          accept : result.accept || "+"rip"*"+"rip"
        });
      },
      Export : function() {
        /**
         * @param {(Object|string)} s
         * @return {undefined}
         */
        function start(s) {
          self.getValue(function(name) {
            var hookName2 = $io.type(name);
            $io[hookName2].Blob(name, function(type) {
              $file.download(type, filename);
            }, s || o.mime);
          }, s || o.mime);
        }
        if (self.beforeSaveAs) {
          self.beforeSaveAs(start);
        } else {
          start();
        }
      },
      Undo : function() {
        return self.undo(), false;
      },
      Redo : function() {
        return self.redo(), false;
      },
      Quit : function() {
        return $scope.close(), false;
      }
    };
    if (false === options.save) {
      /** @type {!Array} */
      var r = [{
        name : "+"rip"File"+"rip",
        items : [{
          name : "+"rip"New"+"rip",
          action : data.New
        }, {
          name : "+"rip"Open"+"rip",
          action : data.Open,
          key : "+"rip"ctrl+o"+"rip"
        }, {
          name : "+"rip"---"+"rip"
        }, {
          name : "+"rip"Quit"+"rip",
          action : data.Quit
        }]
      }];
    } else {
      /** @type {!Array} */
      r = [{
        name : "+"rip"File"+"rip",
        items : [{
          name : "+"rip"New"+"rip",
          action : data.New
        }, {
          name : "+"rip"Open"+"rip",
          action : data.Open,
          key : "+"rip"ctrl+o"+"rip"
        }, {
          name : "+"rip"Save"+"rip",
          action : data.Save,
          key : "+"rip"ctrl+s"+"rip",
          disabled : false
        }, {
          name : "+"rip"Save As..."+"rip",
          action : data.SaveAs,
          key : "+"rip"ctrl+shift+s"+"rip"
        }, {
          name : "+"rip"---"+"rip"
        }, {
          name : "+"rip"Open File With..."+"rip",
          items : function() {
            return $fs.utils.getMenuOpenWith(options.filePath);
          }
        }, {
          name : "+"rip"Open Containing Folder"+"rip",
          key : "+"rip"ctrl+alt+enter"+"rip",
          action : function() {
            setTimeout(function() {
              $explorer(options.filePath);
            }, 0);
          }
        }, {
          name : "+"rip"---"+"rip"
        }, {
          name : "+"rip"Quit"+"rip",
          action : data.Quit
        }]
      }];
    }
    if (options.undo && r.push({
      name : "+"rip"Edit"+"rip",
      items : [{
        name : "+"rip"Undo"+"rip",
        action : data.Undo,
        key : "+"rip"ctrl+z"+"rip"
      }, {
        name : "+"rip"Redo"+"rip",
        action : data.Redo,
        key : "+"rip"ctrl+y"+"rip"
      }]
    }), options.help) {
      /** @type {!Array} */
      var choices = [];
      if (options.help.instructions) {
        choices.push({
          name : "+"rip"Instructions"+"rip",
          action : function() {
            $alert.help({
              title : "+"rip"Instructions"+"rip",
              html : options.help.instructions
            });
          }
        });
      }
      if (options.help.about) {
        choices.push({
          name : "+"rip"About"+"rip",
          action : function() {
            if ("+"rip"string"+"rip" == typeof options.help.about) {
              options.help.about = {
                msg : options.help.about
              };
            }
            $alert({
              title : "+"rip"About"+"rip",
              msg : options.help.about.msg,
              img : options.help.about.img || result.icon || null,
              onopen : $noop
            });
          }
        });
      }
      r.push({
        name : "+"rip"Help"+"rip",
        items : choices
      });
    }
    if (options.about) {
      r.push({
        name : "+"rip"About"+"rip",
        action : function() {
          if ("+"rip"string"+"rip" == typeof options.about) {
            options.about = {
              msg : options.about
            };
          }
          $alert({
            title : "+"rip"About"+"rip",
            msg : options.about.msg,
            img : options.about.img || result.icon || null,
            onopen : $noop
          });
        }
      });
    }
    var params = {};
    if (options.nodeType && 1 === options.nodeType) {
      /** @type {!Object} */
      var newOptions = options;
      self = (options = _childOptions).create(newOptions);
    } else {
      if ("+"rip"function"+"rip" == typeof options.create) {
        /** @type {null} */
        params.url = null;
        /**
         * @return {undefined}
         */
        params.onopen = function() {
          if (this.el.footer.firstChild) {
            /** @type {string} */
            this.el.footer.firstChild.className = "+"rip"ui_editor__footer skin_base_text_info"+"rip";
          }
          self = options.create(this.el.body);
          if (options.filePath) {
            callback(options.filePath);
          } else {
            self.setValue("+"rip""+"rip");
          }
        };
      } else {
        /** @type {string} */
        params.url = params.url + (options.filePath ? "+"rip"?path="+"rip" + options.filePath : "+"rip""+"rip");
        /**
         * @return {undefined}
         */
        params.onready = function() {
          if (this.el.footer.firstChild) {
            /** @type {string} */
            this.el.footer.firstChild.className = "+"rip"ui_editor__footer skin_base_text_info"+"rip";
          }
          var edFrame = this.el.iframe;
          if (edFrame && edFrame.contentWindow.$iframeInit) {
            self = edFrame.contentWindow.$iframeInit.call(this);
            if (options.filePath) {
              callback(options.filePath);
            } else {
              if (self.setValue) {
                self.setValue("+"rip""+"rip");
              }
            }
          }
        };
      }
      if (this.app.icon) {
        params.icon = this.app.icon;
      }
      /** @type {!Array} */
      params.menu = r;
      /** @type {string} */
      params.footer = "+"rip"&nbsp"+"rip";
      /** @type {string} */
      params.title = (options.filePath ? options.filePath + "+"rip" - "+"rip" : "+"rip""+"rip") + this.app.name;
      $scope = $window.call(this, $extend(params, options.window));
    }
  };
});
!function(self) {
  /**
   * @param {(Node|Window)} text
   * @return {undefined}
   */
  function createElement(text) {
    document.body.appendChild(text);
  }
  /**
   * @param {!Array} addressComponents
   * @param {!Function} params
   * @return {?}
   */
  function build(addressComponents, params) {
    /** @type {!Array} */
    var s = [];
    return addressComponents.forEach(function(value) {
      var name = $url.getExtention(value);
      if ("+"rip"js"+"rip" === name) {
        s.push(load(value));
      } else {
        if ("+"rip"css"+"rip" === name) {
          s.push(init(value));
        } else {
          if (/txt|html|php|json|xml/.test(name)) {
            s.push(playShoutcast(value));
          } else {
            if (/mp3|opus|ogg|wav|aac|m4a|mp4|weba/.test(name)) {
              s.push(create(value));
            }
          }
        }
      }
    }), new Promise(function(allDoneCb, saveNotifs) {
      Promise.all(s).then(function(result) {
        if ("+"rip"function"+"rip" == typeof params) {
          params.apply(null, result);
        }
        allDoneCb(result);
      }).catch(function(notifications) {
        saveNotifs(notifications);
      });
    });
  }
  /** @type {function(!Object): undefined} */
  var mp3 = self.$noop || function() {
  };
  var klass = {
    onpass : mp3,
    onfail : mp3
  };
  /**
   * @param {string} url
   * @return {?}
   */
  var load = function(url) {
    return new Promise(function(asyncFunctionPointer, notify_success) {
      /** @type {!Element} */
      var script = document.createElement("+"rip"script"+"rip");
      /** @type {string} */
      script.className = "+"rip"js_dynamic-deps"+"rip";
      /** @type {string} */
      script.type = "+"rip"text/javascript"+"rip";
      /** @type {string} */
      script.charset = "+"rip"utf-8"+"rip";
      /** @type {boolean} */
      script.async = false;
      /** @type {boolean} */
      script.defer = true;
      /** @type {function(?, ?): undefined} */
      script.onload = script.onreadystatechange = function(event, data) {
        if (!(script.readyState && !/loaded|complete/.test(script.readyState))) {
          if (data) {
            notify_success("+"rip"script not loaded correctly (abort)"+"rip");
          } else {
            asyncFunctionPointer(script);
          }
        }
      };
      /**
       * @return {undefined}
       */
      script.onerror = function() {
        console.log(456);
        notify_success("+"rip"script not loaded correctly"+"rip");
      };
      createElement(script);
      /** @type {string} */
      script.src = url;
    });
  };
  /**
   * @param {string} value
   * @return {?}
   */
  var init = function(value) {
    return new Promise(function(parse, canCreateDiscussions) {
      /** @type {!Element} */
      var node = document.createElement("+"rip"link"+"rip");
      /** @type {string} */
      node.className = "+"rip"js_dynamic-deps"+"rip";
      /** @type {string} */
      node.charset = "+"rip"utf-8"+"rip";
      /** @type {string} */
      node.rel = "+"rip"stylesheet"+"rip";
      /** @type {string} */
      node.href = value;
      createElement(node);
      parse(node);
    });
  };
  /**
   * @param {string} id
   * @return {?}
   */
  var playShoutcast = function(id) {
    return new Promise(function(saveNotifs, negater) {
      $ajax.get(id).done(function(notifications) {
        saveNotifs(notifications);
      }).fail(function(xhr) {
        negater("+"rip"ajax error: "+"rip" + xhr.status + "+"rip" "+"rip" + xhr.statusText);
      });
    });
  };
  /**
   * @param {!Object} src
   * @return {?}
   */
  var create = function(src) {
    return src ? new Promise(function(warningcallback, saveNotifs) {
      $audio({
        urls : [src],
        buffer : false,
        onload : function() {
          warningcallback(this);
        },
        onloaderror : function() {
          saveNotifs("+"rip"sound not loaded correctly"+"rip");
        }
      });
    }) : Promise.resolve({
      play : mp3,
      pause : mp3
    });
  };
  /**
   * @param {string} url
   * @return {?}
   */
  build.script = function(url) {
    return load(url);
  };
  /**
   * @param {string} uri
   * @return {?}
   */
  build.css = function(uri) {
    return init(uri);
  };
  /**
   * @param {!Object} params
   * @return {?}
   */
  build.audio = function(params) {
    return create(params);
  };
  /**
   * @param {?} data
   * @return {undefined}
   */
  build.config = function(data) {
    $extend(klass, data);
  };
  /** @type {function(!Array, !Function): ?} */
  self.$loader = build;
}(this);
