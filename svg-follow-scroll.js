var tg = { exports: {} }, jh = {}, ng = { exports: {} }, bt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F1;
function IL() {
  if (F1) return bt;
  F1 = 1;
  var o = Symbol.for("react.element"), l = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), v = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), k = Symbol.iterator;
  function L(j) {
    return j === null || typeof j != "object" ? null : (j = k && j[k] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, te = {};
  function ae(j, J, Ze) {
    this.props = j, this.context = J, this.refs = te, this.updater = Ze || F;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(j, J) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, J, "setState");
  }, ae.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function de() {
  }
  de.prototype = ae.prototype;
  function he(j, J, Ze) {
    this.props = j, this.context = J, this.refs = te, this.updater = Ze || F;
  }
  var pe = he.prototype = new de();
  pe.constructor = he, q(pe, ae.prototype), pe.isPureReactComponent = !0;
  var Oe = Array.isArray, oe = Object.prototype.hasOwnProperty, Ae = { current: null }, ke = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ue(j, J, Ze) {
    var qe, yt = {}, pt = null, ft = null;
    if (J != null) for (qe in J.ref !== void 0 && (ft = J.ref), J.key !== void 0 && (pt = "" + J.key), J) oe.call(J, qe) && !ke.hasOwnProperty(qe) && (yt[qe] = J[qe]);
    var ht = arguments.length - 2;
    if (ht === 1) yt.children = Ze;
    else if (1 < ht) {
      for (var gt = Array(ht), Gt = 0; Gt < ht; Gt++) gt[Gt] = arguments[Gt + 2];
      yt.children = gt;
    }
    if (j && j.defaultProps) for (qe in ht = j.defaultProps, ht) yt[qe] === void 0 && (yt[qe] = ht[qe]);
    return { $$typeof: o, type: j, key: pt, ref: ft, props: yt, _owner: Ae.current };
  }
  function at(j, J) {
    return { $$typeof: o, type: j.type, key: J, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function Et(j) {
    return typeof j == "object" && j !== null && j.$$typeof === o;
  }
  function Vt(j) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(Ze) {
      return J[Ze];
    });
  }
  var wt = /\/+/g;
  function He(j, J) {
    return typeof j == "object" && j !== null && j.key != null ? Vt("" + j.key) : J.toString(36);
  }
  function Ot(j, J, Ze, qe, yt) {
    var pt = typeof j;
    (pt === "undefined" || pt === "boolean") && (j = null);
    var ft = !1;
    if (j === null) ft = !0;
    else switch (pt) {
      case "string":
      case "number":
        ft = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case o:
          case l:
            ft = !0;
        }
    }
    if (ft) return ft = j, yt = yt(ft), j = qe === "" ? "." + He(ft, 0) : qe, Oe(yt) ? (Ze = "", j != null && (Ze = j.replace(wt, "$&/") + "/"), Ot(yt, J, Ze, "", function(Gt) {
      return Gt;
    })) : yt != null && (Et(yt) && (yt = at(yt, Ze + (!yt.key || ft && ft.key === yt.key ? "" : ("" + yt.key).replace(wt, "$&/") + "/") + j)), J.push(yt)), 1;
    if (ft = 0, qe = qe === "" ? "." : qe + ":", Oe(j)) for (var ht = 0; ht < j.length; ht++) {
      pt = j[ht];
      var gt = qe + He(pt, ht);
      ft += Ot(pt, J, Ze, gt, yt);
    }
    else if (gt = L(j), typeof gt == "function") for (j = gt.call(j), ht = 0; !(pt = j.next()).done; ) pt = pt.value, gt = qe + He(pt, ht++), ft += Ot(pt, J, Ze, gt, yt);
    else if (pt === "object") throw J = String(j), Error("Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead.");
    return ft;
  }
  function At(j, J, Ze) {
    if (j == null) return j;
    var qe = [], yt = 0;
    return Ot(j, qe, "", "", function(pt) {
      return J.call(Ze, pt, yt++);
    }), qe;
  }
  function Pt(j) {
    if (j._status === -1) {
      var J = j._result;
      J = J(), J.then(function(Ze) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = Ze);
      }, function(Ze) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = Ze);
      }), j._status === -1 && (j._status = 0, j._result = J);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var Se = { current: null }, se = { transition: null }, Ve = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: se, ReactCurrentOwner: Ae };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return bt.Children = { map: At, forEach: function(j, J, Ze) {
    At(j, function() {
      J.apply(this, arguments);
    }, Ze);
  }, count: function(j) {
    var J = 0;
    return At(j, function() {
      J++;
    }), J;
  }, toArray: function(j) {
    return At(j, function(J) {
      return J;
    }) || [];
  }, only: function(j) {
    if (!Et(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, bt.Component = ae, bt.Fragment = c, bt.Profiler = y, bt.PureComponent = he, bt.StrictMode = p, bt.Suspense = R, bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ve, bt.act = me, bt.cloneElement = function(j, J, Ze) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var qe = q({}, j.props), yt = j.key, pt = j.ref, ft = j._owner;
    if (J != null) {
      if (J.ref !== void 0 && (pt = J.ref, ft = Ae.current), J.key !== void 0 && (yt = "" + J.key), j.type && j.type.defaultProps) var ht = j.type.defaultProps;
      for (gt in J) oe.call(J, gt) && !ke.hasOwnProperty(gt) && (qe[gt] = J[gt] === void 0 && ht !== void 0 ? ht[gt] : J[gt]);
    }
    var gt = arguments.length - 2;
    if (gt === 1) qe.children = Ze;
    else if (1 < gt) {
      ht = Array(gt);
      for (var Gt = 0; Gt < gt; Gt++) ht[Gt] = arguments[Gt + 2];
      qe.children = ht;
    }
    return { $$typeof: o, type: j.type, key: yt, ref: pt, props: qe, _owner: ft };
  }, bt.createContext = function(j) {
    return j = { $$typeof: v, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: E, _context: j }, j.Consumer = j;
  }, bt.createElement = Ue, bt.createFactory = function(j) {
    var J = Ue.bind(null, j);
    return J.type = j, J;
  }, bt.createRef = function() {
    return { current: null };
  }, bt.forwardRef = function(j) {
    return { $$typeof: w, render: j };
  }, bt.isValidElement = Et, bt.lazy = function(j) {
    return { $$typeof: M, _payload: { _status: -1, _result: j }, _init: Pt };
  }, bt.memo = function(j, J) {
    return { $$typeof: b, type: j, compare: J === void 0 ? null : J };
  }, bt.startTransition = function(j) {
    var J = se.transition;
    se.transition = {};
    try {
      j();
    } finally {
      se.transition = J;
    }
  }, bt.unstable_act = me, bt.useCallback = function(j, J) {
    return Se.current.useCallback(j, J);
  }, bt.useContext = function(j) {
    return Se.current.useContext(j);
  }, bt.useDebugValue = function() {
  }, bt.useDeferredValue = function(j) {
    return Se.current.useDeferredValue(j);
  }, bt.useEffect = function(j, J) {
    return Se.current.useEffect(j, J);
  }, bt.useId = function() {
    return Se.current.useId();
  }, bt.useImperativeHandle = function(j, J, Ze) {
    return Se.current.useImperativeHandle(j, J, Ze);
  }, bt.useInsertionEffect = function(j, J) {
    return Se.current.useInsertionEffect(j, J);
  }, bt.useLayoutEffect = function(j, J) {
    return Se.current.useLayoutEffect(j, J);
  }, bt.useMemo = function(j, J) {
    return Se.current.useMemo(j, J);
  }, bt.useReducer = function(j, J, Ze) {
    return Se.current.useReducer(j, J, Ze);
  }, bt.useRef = function(j) {
    return Se.current.useRef(j);
  }, bt.useState = function(j) {
    return Se.current.useState(j);
  }, bt.useSyncExternalStore = function(j, J, Ze) {
    return Se.current.useSyncExternalStore(j, J, Ze);
  }, bt.useTransition = function() {
    return Se.current.useTransition();
  }, bt.version = "18.3.1", bt;
}
var Yh = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Yh.exports;
var j1;
function YL() {
  return j1 || (j1 = 1, (function(o, l) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var c = "18.3.1", p = Symbol.for("react.element"), y = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), b = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), ae = Symbol.iterator, de = "@@iterator";
      function he(T) {
        if (T === null || typeof T != "object")
          return null;
        var A = ae && T[ae] || T[de];
        return typeof A == "function" ? A : null;
      }
      var pe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Oe = {
        transition: null
      }, oe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ke = {}, Ue = null;
      function at(T) {
        Ue = T;
      }
      ke.setExtraStackFrame = function(T) {
        Ue = T;
      }, ke.getCurrentStack = null, ke.getStackAddendum = function() {
        var T = "";
        Ue && (T += Ue);
        var A = ke.getCurrentStack;
        return A && (T += A() || ""), T;
      };
      var Et = !1, Vt = !1, wt = !1, He = !1, Ot = !1, At = {
        ReactCurrentDispatcher: pe,
        ReactCurrentBatchConfig: Oe,
        ReactCurrentOwner: Ae
      };
      At.ReactDebugCurrentFrame = ke, At.ReactCurrentActQueue = oe;
      function Pt(T) {
        {
          for (var A = arguments.length, $ = new Array(A > 1 ? A - 1 : 0), Q = 1; Q < A; Q++)
            $[Q - 1] = arguments[Q];
          se("warn", T, $);
        }
      }
      function Se(T) {
        {
          for (var A = arguments.length, $ = new Array(A > 1 ? A - 1 : 0), Q = 1; Q < A; Q++)
            $[Q - 1] = arguments[Q];
          se("error", T, $);
        }
      }
      function se(T, A, $) {
        {
          var Q = At.ReactDebugCurrentFrame, ve = Q.getStackAddendum();
          ve !== "" && (A += "%s", $ = $.concat([ve]));
          var We = $.map(function(Ce) {
            return String(Ce);
          });
          We.unshift("Warning: " + A), Function.prototype.apply.call(console[T], console, We);
        }
      }
      var Ve = {};
      function me(T, A) {
        {
          var $ = T.constructor, Q = $ && ($.displayName || $.name) || "ReactClass", ve = Q + "." + A;
          if (Ve[ve])
            return;
          Se("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", A, Q), Ve[ve] = !0;
        }
      }
      var j = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(T) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(T, A, $) {
          me(T, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(T, A, $, Q) {
          me(T, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(T, A, $, Q) {
          me(T, "setState");
        }
      }, J = Object.assign, Ze = {};
      Object.freeze(Ze);
      function qe(T, A, $) {
        this.props = T, this.context = A, this.refs = Ze, this.updater = $ || j;
      }
      qe.prototype.isReactComponent = {}, qe.prototype.setState = function(T, A) {
        if (typeof T != "object" && typeof T != "function" && T != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, A, "setState");
      }, qe.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate");
      };
      {
        var yt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, pt = function(T, A) {
          Object.defineProperty(qe.prototype, T, {
            get: function() {
              Pt("%s(...) is deprecated in plain JavaScript React classes. %s", A[0], A[1]);
            }
          });
        };
        for (var ft in yt)
          yt.hasOwnProperty(ft) && pt(ft, yt[ft]);
      }
      function ht() {
      }
      ht.prototype = qe.prototype;
      function gt(T, A, $) {
        this.props = T, this.context = A, this.refs = Ze, this.updater = $ || j;
      }
      var Gt = gt.prototype = new ht();
      Gt.constructor = gt, J(Gt, qe.prototype), Gt.isPureReactComponent = !0;
      function Pn() {
        var T = {
          current: null
        };
        return Object.seal(T), T;
      }
      var Ar = Array.isArray;
      function Rn(T) {
        return Ar(T);
      }
      function ur(T) {
        {
          var A = typeof Symbol == "function" && Symbol.toStringTag, $ = A && T[Symbol.toStringTag] || T.constructor.name || "Object";
          return $;
        }
      }
      function $n(T) {
        try {
          return Gn(T), !1;
        } catch {
          return !0;
        }
      }
      function Gn(T) {
        return "" + T;
      }
      function Xr(T) {
        if ($n(T))
          return Se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(T)), Gn(T);
      }
      function Ca(T, A, $) {
        var Q = T.displayName;
        if (Q)
          return Q;
        var ve = A.displayName || A.name || "";
        return ve !== "" ? $ + "(" + ve + ")" : $;
      }
      function yi(T) {
        return T.displayName || "Context";
      }
      function tr(T) {
        if (T == null)
          return null;
        if (typeof T.tag == "number" && Se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
          return T.displayName || T.name || null;
        if (typeof T == "string")
          return T;
        switch (T) {
          case E:
            return "Fragment";
          case y:
            return "Portal";
          case w:
            return "Profiler";
          case v:
            return "StrictMode";
          case k:
            return "Suspense";
          case L:
            return "SuspenseList";
        }
        if (typeof T == "object")
          switch (T.$$typeof) {
            case b:
              var A = T;
              return yi(A) + ".Consumer";
            case R:
              var $ = T;
              return yi($._context) + ".Provider";
            case M:
              return Ca(T, T.render, "ForwardRef");
            case F:
              var Q = T.displayName || null;
              return Q !== null ? Q : tr(T.type) || "Memo";
            case q: {
              var ve = T, We = ve._payload, Ce = ve._init;
              try {
                return tr(Ce(We));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var wn = Object.prototype.hasOwnProperty, Kn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, ea, Un;
      Un = {};
      function wr(T) {
        if (wn.call(T, "ref")) {
          var A = Object.getOwnPropertyDescriptor(T, "ref").get;
          if (A && A.isReactWarning)
            return !1;
        }
        return T.ref !== void 0;
      }
      function gi(T) {
        if (wn.call(T, "key")) {
          var A = Object.getOwnPropertyDescriptor(T, "key").get;
          if (A && A.isReactWarning)
            return !1;
        }
        return T.key !== void 0;
      }
      function ta(T, A) {
        var $ = function() {
          Rr || (Rr = !0, Se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        $.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: $,
          configurable: !0
        });
      }
      function Ea(T, A) {
        var $ = function() {
          ea || (ea = !0, Se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        $.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: $,
          configurable: !0
        });
      }
      function ye(T) {
        if (typeof T.ref == "string" && Ae.current && T.__self && Ae.current.stateNode !== T.__self) {
          var A = tr(Ae.current.type);
          Un[A] || (Se('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A, T.ref), Un[A] = !0);
        }
      }
      var Fe = function(T, A, $, Q, ve, We, Ce) {
        var Ke = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: p,
          // Built-in properties that belong on the element
          type: T,
          key: A,
          ref: $,
          props: Ce,
          // Record the component responsible for creating this element.
          _owner: We
        };
        return Ke._store = {}, Object.defineProperty(Ke._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ke, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Q
        }), Object.defineProperty(Ke, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ve
        }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
      };
      function vt(T, A, $) {
        var Q, ve = {}, We = null, Ce = null, Ke = null, xt = null;
        if (A != null) {
          wr(A) && (Ce = A.ref, ye(A)), gi(A) && (Xr(A.key), We = "" + A.key), Ke = A.__self === void 0 ? null : A.__self, xt = A.__source === void 0 ? null : A.__source;
          for (Q in A)
            wn.call(A, Q) && !Kn.hasOwnProperty(Q) && (ve[Q] = A[Q]);
        }
        var Nt = arguments.length - 2;
        if (Nt === 1)
          ve.children = $;
        else if (Nt > 1) {
          for (var un = Array(Nt), Zt = 0; Zt < Nt; Zt++)
            un[Zt] = arguments[Zt + 2];
          Object.freeze && Object.freeze(un), ve.children = un;
        }
        if (T && T.defaultProps) {
          var mt = T.defaultProps;
          for (Q in mt)
            ve[Q] === void 0 && (ve[Q] = mt[Q]);
        }
        if (We || Ce) {
          var Jt = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          We && ta(ve, Jt), Ce && Ea(ve, Jt);
        }
        return Fe(T, We, Ce, Ke, xt, Ae.current, ve);
      }
      function Yt(T, A) {
        var $ = Fe(T.type, A, T.ref, T._self, T._source, T._owner, T.props);
        return $;
      }
      function an(T, A, $) {
        if (T == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
        var Q, ve = J({}, T.props), We = T.key, Ce = T.ref, Ke = T._self, xt = T._source, Nt = T._owner;
        if (A != null) {
          wr(A) && (Ce = A.ref, Nt = Ae.current), gi(A) && (Xr(A.key), We = "" + A.key);
          var un;
          T.type && T.type.defaultProps && (un = T.type.defaultProps);
          for (Q in A)
            wn.call(A, Q) && !Kn.hasOwnProperty(Q) && (A[Q] === void 0 && un !== void 0 ? ve[Q] = un[Q] : ve[Q] = A[Q]);
        }
        var Zt = arguments.length - 2;
        if (Zt === 1)
          ve.children = $;
        else if (Zt > 1) {
          for (var mt = Array(Zt), Jt = 0; Jt < Zt; Jt++)
            mt[Jt] = arguments[Jt + 2];
          ve.children = mt;
        }
        return Fe(T.type, We, Ce, Ke, xt, Nt, ve);
      }
      function yn(T) {
        return typeof T == "object" && T !== null && T.$$typeof === p;
      }
      var cn = ".", nr = ":";
      function on(T) {
        var A = /[=:]/g, $ = {
          "=": "=0",
          ":": "=2"
        }, Q = T.replace(A, function(ve) {
          return $[ve];
        });
        return "$" + Q;
      }
      var Qt = !1, qt = /\/+/g;
      function Si(T) {
        return T.replace(qt, "$&/");
      }
      function br(T, A) {
        return typeof T == "object" && T !== null && T.key != null ? (Xr(T.key), on("" + T.key)) : A.toString(36);
      }
      function Li(T, A, $, Q, ve) {
        var We = typeof T;
        (We === "undefined" || We === "boolean") && (T = null);
        var Ce = !1;
        if (T === null)
          Ce = !0;
        else
          switch (We) {
            case "string":
            case "number":
              Ce = !0;
              break;
            case "object":
              switch (T.$$typeof) {
                case p:
                case y:
                  Ce = !0;
              }
          }
        if (Ce) {
          var Ke = T, xt = ve(Ke), Nt = Q === "" ? cn + br(Ke, 0) : Q;
          if (Rn(xt)) {
            var un = "";
            Nt != null && (un = Si(Nt) + "/"), Li(xt, A, un, "", function(zd) {
              return zd;
            });
          } else xt != null && (yn(xt) && (xt.key && (!Ke || Ke.key !== xt.key) && Xr(xt.key), xt = Yt(
            xt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            $ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (xt.key && (!Ke || Ke.key !== xt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Si("" + xt.key) + "/"
            ) : "") + Nt
          )), A.push(xt));
          return 1;
        }
        var Zt, mt, Jt = 0, gn = Q === "" ? cn : Q + nr;
        if (Rn(T))
          for (var Vo = 0; Vo < T.length; Vo++)
            Zt = T[Vo], mt = gn + br(Zt, Vo), Jt += Li(Zt, A, $, mt, ve);
        else {
          var Cs = he(T);
          if (typeof Cs == "function") {
            var eo = T;
            Cs === eo.entries && (Qt || Pt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var Es = Cs.call(eo), _l, Vd = 0; !(_l = Es.next()).done; )
              Zt = _l.value, mt = gn + br(Zt, Vd++), Jt += Li(Zt, A, $, mt, ve);
          } else if (We === "object") {
            var Bc = String(T);
            throw new Error("Objects are not valid as a React child (found: " + (Bc === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : Bc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Jt;
      }
      function Xa(T, A, $) {
        if (T == null)
          return T;
        var Q = [], ve = 0;
        return Li(T, Q, "", "", function(We) {
          return A.call($, We, ve++);
        }), Q;
      }
      function Sl(T) {
        var A = 0;
        return Xa(T, function() {
          A++;
        }), A;
      }
      function Cl(T, A, $) {
        Xa(T, function() {
          A.apply(this, arguments);
        }, $);
      }
      function _o(T) {
        return Xa(T, function(A) {
          return A;
        }) || [];
      }
      function ko(T) {
        if (!yn(T))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return T;
      }
      function El(T) {
        var A = {
          $$typeof: b,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: T,
          _currentValue2: T,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        A.Provider = {
          $$typeof: R,
          _context: A
        };
        var $ = !1, Q = !1, ve = !1;
        {
          var We = {
            $$typeof: b,
            _context: A
          };
          Object.defineProperties(We, {
            Provider: {
              get: function() {
                return Q || (Q = !0, Se("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), A.Provider;
              },
              set: function(Ce) {
                A.Provider = Ce;
              }
            },
            _currentValue: {
              get: function() {
                return A._currentValue;
              },
              set: function(Ce) {
                A._currentValue = Ce;
              }
            },
            _currentValue2: {
              get: function() {
                return A._currentValue2;
              },
              set: function(Ce) {
                A._currentValue2 = Ce;
              }
            },
            _threadCount: {
              get: function() {
                return A._threadCount;
              },
              set: function(Ce) {
                A._threadCount = Ce;
              }
            },
            Consumer: {
              get: function() {
                return $ || ($ = !0, Se("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), A.Consumer;
              }
            },
            displayName: {
              get: function() {
                return A.displayName;
              },
              set: function(Ce) {
                ve || (Pt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ce), ve = !0);
              }
            }
          }), A.Consumer = We;
        }
        return A._currentRenderer = null, A._currentRenderer2 = null, A;
      }
      var Lr = -1, Nr = 0, sr = 1, Ta = 2;
      function na(T) {
        if (T._status === Lr) {
          var A = T._result, $ = A();
          if ($.then(function(We) {
            if (T._status === Nr || T._status === Lr) {
              var Ce = T;
              Ce._status = sr, Ce._result = We;
            }
          }, function(We) {
            if (T._status === Nr || T._status === Lr) {
              var Ce = T;
              Ce._status = Ta, Ce._result = We;
            }
          }), T._status === Lr) {
            var Q = T;
            Q._status = Nr, Q._result = $;
          }
        }
        if (T._status === sr) {
          var ve = T._result;
          return ve === void 0 && Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ve), "default" in ve || Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ve), ve.default;
        } else
          throw T._result;
      }
      function xa(T) {
        var A = {
          // We use these fields to store the result.
          _status: Lr,
          _result: T
        }, $ = {
          $$typeof: q,
          _payload: A,
          _init: na
        };
        {
          var Q, ve;
          Object.defineProperties($, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Q;
              },
              set: function(We) {
                Se("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Q = We, Object.defineProperty($, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ve;
              },
              set: function(We) {
                Se("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ve = We, Object.defineProperty($, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return $;
      }
      function Ra(T) {
        T != null && T.$$typeof === F ? Se("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof T != "function" ? Se("forwardRef requires a render function but was given %s.", T === null ? "null" : typeof T) : T.length !== 0 && T.length !== 2 && Se("forwardRef render functions accept exactly two parameters: props and ref. %s", T.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), T != null && (T.defaultProps != null || T.propTypes != null) && Se("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var A = {
          $$typeof: M,
          render: T
        };
        {
          var $;
          Object.defineProperty(A, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return $;
            },
            set: function(Q) {
              $ = Q, !T.name && !T.displayName && (T.displayName = Q);
            }
          });
        }
        return A;
      }
      var N;
      N = Symbol.for("react.module.reference");
      function ne(T) {
        return !!(typeof T == "string" || typeof T == "function" || T === E || T === w || Ot || T === v || T === k || T === L || He || T === te || Et || Vt || wt || typeof T == "object" && T !== null && (T.$$typeof === q || T.$$typeof === F || T.$$typeof === R || T.$$typeof === b || T.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        T.$$typeof === N || T.getModuleId !== void 0));
      }
      function Ee(T, A) {
        ne(T) || Se("memo: The first argument must be a component. Instead received: %s", T === null ? "null" : typeof T);
        var $ = {
          $$typeof: F,
          type: T,
          compare: A === void 0 ? null : A
        };
        {
          var Q;
          Object.defineProperty($, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Q;
            },
            set: function(ve) {
              Q = ve, !T.name && !T.displayName && (T.displayName = ve);
            }
          });
        }
        return $;
      }
      function Me() {
        var T = pe.current;
        return T === null && Se(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), T;
      }
      function lt(T) {
        var A = Me();
        if (T._context !== void 0) {
          var $ = T._context;
          $.Consumer === T ? Se("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : $.Provider === T && Se("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return A.useContext(T);
      }
      function rt(T) {
        var A = Me();
        return A.useState(T);
      }
      function Tt(T, A, $) {
        var Q = Me();
        return Q.useReducer(T, A, $);
      }
      function St(T) {
        var A = Me();
        return A.useRef(T);
      }
      function bn(T, A) {
        var $ = Me();
        return $.useEffect(T, A);
      }
      function ln(T, A) {
        var $ = Me();
        return $.useInsertionEffect(T, A);
      }
      function fn(T, A) {
        var $ = Me();
        return $.useLayoutEffect(T, A);
      }
      function cr(T, A) {
        var $ = Me();
        return $.useCallback(T, A);
      }
      function ra(T, A) {
        var $ = Me();
        return $.useMemo(T, A);
      }
      function ia(T, A, $) {
        var Q = Me();
        return Q.useImperativeHandle(T, A, $);
      }
      function ut(T, A) {
        {
          var $ = Me();
          return $.useDebugValue(T, A);
        }
      }
      function dt() {
        var T = Me();
        return T.useTransition();
      }
      function aa(T) {
        var A = Me();
        return A.useDeferredValue(T);
      }
      function Tl() {
        var T = Me();
        return T.useId();
      }
      function xl(T, A, $) {
        var Q = Me();
        return Q.useSyncExternalStore(T, A, $);
      }
      var Mo = 0, hu, Oo, Zr, ms, Pr, Fc, jc;
      function vu() {
      }
      vu.__reactDisabledLog = !0;
      function Ao() {
        {
          if (Mo === 0) {
            hu = console.log, Oo = console.info, Zr = console.warn, ms = console.error, Pr = console.group, Fc = console.groupCollapsed, jc = console.groupEnd;
            var T = {
              configurable: !0,
              enumerable: !0,
              value: vu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: T,
              log: T,
              warn: T,
              error: T,
              group: T,
              groupCollapsed: T,
              groupEnd: T
            });
          }
          Mo++;
        }
      }
      function Ci() {
        {
          if (Mo--, Mo === 0) {
            var T = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: J({}, T, {
                value: hu
              }),
              info: J({}, T, {
                value: Oo
              }),
              warn: J({}, T, {
                value: Zr
              }),
              error: J({}, T, {
                value: ms
              }),
              group: J({}, T, {
                value: Pr
              }),
              groupCollapsed: J({}, T, {
                value: Fc
              }),
              groupEnd: J({}, T, {
                value: jc
              })
            });
          }
          Mo < 0 && Se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var oa = At.ReactCurrentDispatcher, la;
      function mu(T, A, $) {
        {
          if (la === void 0)
            try {
              throw Error();
            } catch (ve) {
              var Q = ve.stack.trim().match(/\n( *(at )?)/);
              la = Q && Q[1] || "";
            }
          return `
` + la + T;
        }
      }
      var Rl = !1, Lo;
      {
        var yu = typeof WeakMap == "function" ? WeakMap : Map;
        Lo = new yu();
      }
      function gu(T, A) {
        if (!T || Rl)
          return "";
        {
          var $ = Lo.get(T);
          if ($ !== void 0)
            return $;
        }
        var Q;
        Rl = !0;
        var ve = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var We;
        We = oa.current, oa.current = null, Ao();
        try {
          if (A) {
            var Ce = function() {
              throw Error();
            };
            if (Object.defineProperty(Ce.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ce, []);
              } catch (gn) {
                Q = gn;
              }
              Reflect.construct(T, [], Ce);
            } else {
              try {
                Ce.call();
              } catch (gn) {
                Q = gn;
              }
              T.call(Ce.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (gn) {
              Q = gn;
            }
            T();
          }
        } catch (gn) {
          if (gn && Q && typeof gn.stack == "string") {
            for (var Ke = gn.stack.split(`
`), xt = Q.stack.split(`
`), Nt = Ke.length - 1, un = xt.length - 1; Nt >= 1 && un >= 0 && Ke[Nt] !== xt[un]; )
              un--;
            for (; Nt >= 1 && un >= 0; Nt--, un--)
              if (Ke[Nt] !== xt[un]) {
                if (Nt !== 1 || un !== 1)
                  do
                    if (Nt--, un--, un < 0 || Ke[Nt] !== xt[un]) {
                      var Zt = `
` + Ke[Nt].replace(" at new ", " at ");
                      return T.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", T.displayName)), typeof T == "function" && Lo.set(T, Zt), Zt;
                    }
                  while (Nt >= 1 && un >= 0);
                break;
              }
          }
        } finally {
          Rl = !1, oa.current = We, Ci(), Error.prepareStackTrace = ve;
        }
        var mt = T ? T.displayName || T.name : "", Jt = mt ? mu(mt) : "";
        return typeof T == "function" && Lo.set(T, Jt), Jt;
      }
      function Za(T, A, $) {
        return gu(T, !1);
      }
      function Pd(T) {
        var A = T.prototype;
        return !!(A && A.isReactComponent);
      }
      function Ja(T, A, $) {
        if (T == null)
          return "";
        if (typeof T == "function")
          return gu(T, Pd(T));
        if (typeof T == "string")
          return mu(T);
        switch (T) {
          case k:
            return mu("Suspense");
          case L:
            return mu("SuspenseList");
        }
        if (typeof T == "object")
          switch (T.$$typeof) {
            case M:
              return Za(T.render);
            case F:
              return Ja(T.type, A, $);
            case q: {
              var Q = T, ve = Q._payload, We = Q._init;
              try {
                return Ja(We(ve), A, $);
              } catch {
              }
            }
          }
        return "";
      }
      var zt = {}, Su = At.ReactDebugCurrentFrame;
      function Lt(T) {
        if (T) {
          var A = T._owner, $ = Ja(T.type, T._source, A ? A.type : null);
          Su.setExtraStackFrame($);
        } else
          Su.setExtraStackFrame(null);
      }
      function ys(T, A, $, Q, ve) {
        {
          var We = Function.call.bind(wn);
          for (var Ce in T)
            if (We(T, Ce)) {
              var Ke = void 0;
              try {
                if (typeof T[Ce] != "function") {
                  var xt = Error((Q || "React class") + ": " + $ + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw xt.name = "Invariant Violation", xt;
                }
                Ke = T[Ce](A, Ce, Q, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Nt) {
                Ke = Nt;
              }
              Ke && !(Ke instanceof Error) && (Lt(ve), Se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", $, Ce, typeof Ke), Lt(null)), Ke instanceof Error && !(Ke.message in zt) && (zt[Ke.message] = !0, Lt(ve), Se("Failed %s type: %s", $, Ke.message), Lt(null));
            }
        }
      }
      function wa(T) {
        if (T) {
          var A = T._owner, $ = Ja(T.type, T._source, A ? A.type : null);
          at($);
        } else
          at(null);
      }
      var nt;
      nt = !1;
      function Cu() {
        if (Ae.current) {
          var T = tr(Ae.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
      function fr(T) {
        if (T !== void 0) {
          var A = T.fileName.replace(/^.*[\\\/]/, ""), $ = T.lineNumber;
          return `

Check your code at ` + A + ":" + $ + ".";
        }
        return "";
      }
      function ba(T) {
        return T != null ? fr(T.__source) : "";
      }
      var Ur = {};
      function Da(T) {
        var A = Cu();
        if (!A) {
          var $ = typeof T == "string" ? T : T.displayName || T.name;
          $ && (A = `

Check the top-level render call using <` + $ + ">.");
        }
        return A;
      }
      function dn(T, A) {
        if (!(!T._store || T._store.validated || T.key != null)) {
          T._store.validated = !0;
          var $ = Da(A);
          if (!Ur[$]) {
            Ur[$] = !0;
            var Q = "";
            T && T._owner && T._owner !== Ae.current && (Q = " It was passed a child from " + tr(T._owner.type) + "."), wa(T), Se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, Q), wa(null);
          }
        }
      }
      function Xt(T, A) {
        if (typeof T == "object") {
          if (Rn(T))
            for (var $ = 0; $ < T.length; $++) {
              var Q = T[$];
              yn(Q) && dn(Q, A);
            }
          else if (yn(T))
            T._store && (T._store.validated = !0);
          else if (T) {
            var ve = he(T);
            if (typeof ve == "function" && ve !== T.entries)
              for (var We = ve.call(T), Ce; !(Ce = We.next()).done; )
                yn(Ce.value) && dn(Ce.value, A);
          }
        }
      }
      function No(T) {
        {
          var A = T.type;
          if (A == null || typeof A == "string")
            return;
          var $;
          if (typeof A == "function")
            $ = A.propTypes;
          else if (typeof A == "object" && (A.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          A.$$typeof === F))
            $ = A.propTypes;
          else
            return;
          if ($) {
            var Q = tr(A);
            ys($, T.props, "prop", Q, T);
          } else if (A.PropTypes !== void 0 && !nt) {
            nt = !0;
            var ve = tr(A);
            Se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
          }
          typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && Se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qn(T) {
        {
          for (var A = Object.keys(T.props), $ = 0; $ < A.length; $++) {
            var Q = A[$];
            if (Q !== "children" && Q !== "key") {
              wa(T), Se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), wa(null);
              break;
            }
          }
          T.ref !== null && (wa(T), Se("Invalid attribute `ref` supplied to `React.Fragment`."), wa(null));
        }
      }
      function Vr(T, A, $) {
        var Q = ne(T);
        if (!Q) {
          var ve = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var We = ba(A);
          We ? ve += We : ve += Cu();
          var Ce;
          T === null ? Ce = "null" : Rn(T) ? Ce = "array" : T !== void 0 && T.$$typeof === p ? (Ce = "<" + (tr(T.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof T, Se("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, ve);
        }
        var Ke = vt.apply(this, arguments);
        if (Ke == null)
          return Ke;
        if (Q)
          for (var xt = 2; xt < arguments.length; xt++)
            Xt(arguments[xt], T);
        return T === E ? Qn(Ke) : No(Ke), Ke;
      }
      var Ni = !1;
      function wl(T) {
        var A = Vr.bind(null, T);
        return A.type = T, Ni || (Ni = !0, Pt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(A, "type", {
          enumerable: !1,
          get: function() {
            return Pt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: T
            }), T;
          }
        }), A;
      }
      function gs(T, A, $) {
        for (var Q = an.apply(this, arguments), ve = 2; ve < arguments.length; ve++)
          Xt(arguments[ve], Q.type);
        return No(Q), Q;
      }
      function Ss(T, A) {
        var $ = Oe.transition;
        Oe.transition = {};
        var Q = Oe.transition;
        Oe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          T();
        } finally {
          if (Oe.transition = $, $ === null && Q._updatedFibers) {
            var ve = Q._updatedFibers.size;
            ve > 10 && Pt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Q._updatedFibers.clear();
          }
        }
      }
      var Po = !1, bl = null;
      function Ud(T) {
        if (bl === null)
          try {
            var A = ("require" + Math.random()).slice(0, 7), $ = o && o[A];
            bl = $.call(o, "timers").setImmediate;
          } catch {
            bl = function(ve) {
              Po === !1 && (Po = !0, typeof MessageChannel > "u" && Se("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var We = new MessageChannel();
              We.port1.onmessage = ve, We.port2.postMessage(void 0);
            };
          }
        return bl(T);
      }
      var Pi = 0, ua = !1;
      function _a(T) {
        {
          var A = Pi;
          Pi++, oe.current === null && (oe.current = []);
          var $ = oe.isBatchingLegacy, Q;
          try {
            if (oe.isBatchingLegacy = !0, Q = T(), !$ && oe.didScheduleLegacyUpdate) {
              var ve = oe.current;
              ve !== null && (oe.didScheduleLegacyUpdate = !1, Uo(ve));
            }
          } catch (mt) {
            throw Ui(A), mt;
          } finally {
            oe.isBatchingLegacy = $;
          }
          if (Q !== null && typeof Q == "object" && typeof Q.then == "function") {
            var We = Q, Ce = !1, Ke = {
              then: function(mt, Jt) {
                Ce = !0, We.then(function(gn) {
                  Ui(A), Pi === 0 ? Eu(gn, mt, Jt) : mt(gn);
                }, function(gn) {
                  Ui(A), Jt(gn);
                });
              }
            };
            return !ua && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ce || (ua = !0, Se("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ke;
          } else {
            var xt = Q;
            if (Ui(A), Pi === 0) {
              var Nt = oe.current;
              Nt !== null && (Uo(Nt), oe.current = null);
              var un = {
                then: function(mt, Jt) {
                  oe.current === null ? (oe.current = [], Eu(xt, mt, Jt)) : mt(xt);
                }
              };
              return un;
            } else {
              var Zt = {
                then: function(mt, Jt) {
                  mt(xt);
                }
              };
              return Zt;
            }
          }
        }
      }
      function Ui(T) {
        T !== Pi - 1 && Se("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Pi = T;
      }
      function Eu(T, A, $) {
        {
          var Q = oe.current;
          if (Q !== null)
            try {
              Uo(Q), Ud(function() {
                Q.length === 0 ? (oe.current = null, A(T)) : Eu(T, A, $);
              });
            } catch (ve) {
              $(ve);
            }
          else
            A(T);
        }
      }
      var Tu = !1;
      function Uo(T) {
        if (!Tu) {
          Tu = !0;
          var A = 0;
          try {
            for (; A < T.length; A++) {
              var $ = T[A];
              do
                $ = $(!0);
              while ($ !== null);
            }
            T.length = 0;
          } catch (Q) {
            throw T = T.slice(A + 1), Q;
          } finally {
            Tu = !1;
          }
        }
      }
      var Dl = Vr, xu = gs, Ru = wl, sa = {
        map: Xa,
        forEach: Cl,
        count: Sl,
        toArray: _o,
        only: ko
      };
      l.Children = sa, l.Component = qe, l.Fragment = E, l.Profiler = w, l.PureComponent = gt, l.StrictMode = v, l.Suspense = k, l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = At, l.act = _a, l.cloneElement = xu, l.createContext = El, l.createElement = Dl, l.createFactory = Ru, l.createRef = Pn, l.forwardRef = Ra, l.isValidElement = yn, l.lazy = xa, l.memo = Ee, l.startTransition = Ss, l.unstable_act = _a, l.useCallback = cr, l.useContext = lt, l.useDebugValue = ut, l.useDeferredValue = aa, l.useEffect = bn, l.useId = Tl, l.useImperativeHandle = ia, l.useInsertionEffect = ln, l.useLayoutEffect = fn, l.useMemo = ra, l.useReducer = Tt, l.useRef = St, l.useState = rt, l.useSyncExternalStore = xl, l.useTransition = dt, l.version = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(Yh, Yh.exports)), Yh.exports;
}
var B1;
function iv() {
  return B1 || (B1 = 1, process.env.NODE_ENV === "production" ? ng.exports = IL() : ng.exports = YL()), ng.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H1;
function WL() {
  if (H1) return jh;
  H1 = 1;
  var o = iv(), l = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, y = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(w, R, b) {
    var M, k = {}, L = null, F = null;
    b !== void 0 && (L = "" + b), R.key !== void 0 && (L = "" + R.key), R.ref !== void 0 && (F = R.ref);
    for (M in R) p.call(R, M) && !E.hasOwnProperty(M) && (k[M] = R[M]);
    if (w && w.defaultProps) for (M in R = w.defaultProps, R) k[M] === void 0 && (k[M] = R[M]);
    return { $$typeof: l, type: w, key: L, ref: F, props: k, _owner: y.current };
  }
  return jh.Fragment = c, jh.jsx = v, jh.jsxs = v, jh;
}
var Bh = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I1;
function $L() {
  return I1 || (I1 = 1, process.env.NODE_ENV !== "production" && (function() {
    var o = iv(), l = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), w = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), q = Symbol.iterator, te = "@@iterator";
    function ae(N) {
      if (N === null || typeof N != "object")
        return null;
      var ne = q && N[q] || N[te];
      return typeof ne == "function" ? ne : null;
    }
    var de = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function he(N) {
      {
        for (var ne = arguments.length, Ee = new Array(ne > 1 ? ne - 1 : 0), Me = 1; Me < ne; Me++)
          Ee[Me - 1] = arguments[Me];
        pe("error", N, Ee);
      }
    }
    function pe(N, ne, Ee) {
      {
        var Me = de.ReactDebugCurrentFrame, lt = Me.getStackAddendum();
        lt !== "" && (ne += "%s", Ee = Ee.concat([lt]));
        var rt = Ee.map(function(Tt) {
          return String(Tt);
        });
        rt.unshift("Warning: " + ne), Function.prototype.apply.call(console[N], console, rt);
      }
    }
    var Oe = !1, oe = !1, Ae = !1, ke = !1, Ue = !1, at;
    at = Symbol.for("react.module.reference");
    function Et(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === p || N === E || Ue || N === y || N === b || N === M || ke || N === F || Oe || oe || Ae || typeof N == "object" && N !== null && (N.$$typeof === L || N.$$typeof === k || N.$$typeof === v || N.$$typeof === w || N.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === at || N.getModuleId !== void 0));
    }
    function Vt(N, ne, Ee) {
      var Me = N.displayName;
      if (Me)
        return Me;
      var lt = ne.displayName || ne.name || "";
      return lt !== "" ? Ee + "(" + lt + ")" : Ee;
    }
    function wt(N) {
      return N.displayName || "Context";
    }
    function He(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && he("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case E:
          return "Profiler";
        case y:
          return "StrictMode";
        case b:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case w:
            var ne = N;
            return wt(ne) + ".Consumer";
          case v:
            var Ee = N;
            return wt(Ee._context) + ".Provider";
          case R:
            return Vt(N, N.render, "ForwardRef");
          case k:
            var Me = N.displayName || null;
            return Me !== null ? Me : He(N.type) || "Memo";
          case L: {
            var lt = N, rt = lt._payload, Tt = lt._init;
            try {
              return He(Tt(rt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ot = Object.assign, At = 0, Pt, Se, se, Ve, me, j, J;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function qe() {
      {
        if (At === 0) {
          Pt = console.log, Se = console.info, se = console.warn, Ve = console.error, me = console.group, j = console.groupCollapsed, J = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        At++;
      }
    }
    function yt() {
      {
        if (At--, At === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ot({}, N, {
              value: Pt
            }),
            info: Ot({}, N, {
              value: Se
            }),
            warn: Ot({}, N, {
              value: se
            }),
            error: Ot({}, N, {
              value: Ve
            }),
            group: Ot({}, N, {
              value: me
            }),
            groupCollapsed: Ot({}, N, {
              value: j
            }),
            groupEnd: Ot({}, N, {
              value: J
            })
          });
        }
        At < 0 && he("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pt = de.ReactCurrentDispatcher, ft;
    function ht(N, ne, Ee) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (lt) {
            var Me = lt.stack.trim().match(/\n( *(at )?)/);
            ft = Me && Me[1] || "";
          }
        return `
` + ft + N;
      }
    }
    var gt = !1, Gt;
    {
      var Pn = typeof WeakMap == "function" ? WeakMap : Map;
      Gt = new Pn();
    }
    function Ar(N, ne) {
      if (!N || gt)
        return "";
      {
        var Ee = Gt.get(N);
        if (Ee !== void 0)
          return Ee;
      }
      var Me;
      gt = !0;
      var lt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var rt;
      rt = pt.current, pt.current = null, qe();
      try {
        if (ne) {
          var Tt = function() {
            throw Error();
          };
          if (Object.defineProperty(Tt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Tt, []);
            } catch (ut) {
              Me = ut;
            }
            Reflect.construct(N, [], Tt);
          } else {
            try {
              Tt.call();
            } catch (ut) {
              Me = ut;
            }
            N.call(Tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ut) {
            Me = ut;
          }
          N();
        }
      } catch (ut) {
        if (ut && Me && typeof ut.stack == "string") {
          for (var St = ut.stack.split(`
`), bn = Me.stack.split(`
`), ln = St.length - 1, fn = bn.length - 1; ln >= 1 && fn >= 0 && St[ln] !== bn[fn]; )
            fn--;
          for (; ln >= 1 && fn >= 0; ln--, fn--)
            if (St[ln] !== bn[fn]) {
              if (ln !== 1 || fn !== 1)
                do
                  if (ln--, fn--, fn < 0 || St[ln] !== bn[fn]) {
                    var cr = `
` + St[ln].replace(" at new ", " at ");
                    return N.displayName && cr.includes("<anonymous>") && (cr = cr.replace("<anonymous>", N.displayName)), typeof N == "function" && Gt.set(N, cr), cr;
                  }
                while (ln >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        gt = !1, pt.current = rt, yt(), Error.prepareStackTrace = lt;
      }
      var ra = N ? N.displayName || N.name : "", ia = ra ? ht(ra) : "";
      return typeof N == "function" && Gt.set(N, ia), ia;
    }
    function Rn(N, ne, Ee) {
      return Ar(N, !1);
    }
    function ur(N) {
      var ne = N.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function $n(N, ne, Ee) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return Ar(N, ur(N));
      if (typeof N == "string")
        return ht(N);
      switch (N) {
        case b:
          return ht("Suspense");
        case M:
          return ht("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case R:
            return Rn(N.render);
          case k:
            return $n(N.type, ne, Ee);
          case L: {
            var Me = N, lt = Me._payload, rt = Me._init;
            try {
              return $n(rt(lt), ne, Ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Gn = Object.prototype.hasOwnProperty, Xr = {}, Ca = de.ReactDebugCurrentFrame;
    function yi(N) {
      if (N) {
        var ne = N._owner, Ee = $n(N.type, N._source, ne ? ne.type : null);
        Ca.setExtraStackFrame(Ee);
      } else
        Ca.setExtraStackFrame(null);
    }
    function tr(N, ne, Ee, Me, lt) {
      {
        var rt = Function.call.bind(Gn);
        for (var Tt in N)
          if (rt(N, Tt)) {
            var St = void 0;
            try {
              if (typeof N[Tt] != "function") {
                var bn = Error((Me || "React class") + ": " + Ee + " type `" + Tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[Tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bn.name = "Invariant Violation", bn;
              }
              St = N[Tt](ne, Tt, Me, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ln) {
              St = ln;
            }
            St && !(St instanceof Error) && (yi(lt), he("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", Ee, Tt, typeof St), yi(null)), St instanceof Error && !(St.message in Xr) && (Xr[St.message] = !0, yi(lt), he("Failed %s type: %s", Ee, St.message), yi(null));
          }
      }
    }
    var wn = Array.isArray;
    function Kn(N) {
      return wn(N);
    }
    function Rr(N) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, Ee = ne && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return Ee;
      }
    }
    function ea(N) {
      try {
        return Un(N), !1;
      } catch {
        return !0;
      }
    }
    function Un(N) {
      return "" + N;
    }
    function wr(N) {
      if (ea(N))
        return he("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(N)), Un(N);
    }
    var gi = de.ReactCurrentOwner, ta = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ea, ye;
    function Fe(N) {
      if (Gn.call(N, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function vt(N) {
      if (Gn.call(N, "key")) {
        var ne = Object.getOwnPropertyDescriptor(N, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function Yt(N, ne) {
      typeof N.ref == "string" && gi.current;
    }
    function an(N, ne) {
      {
        var Ee = function() {
          Ea || (Ea = !0, he("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        Ee.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: Ee,
          configurable: !0
        });
      }
    }
    function yn(N, ne) {
      {
        var Ee = function() {
          ye || (ye = !0, he("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        Ee.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: Ee,
          configurable: !0
        });
      }
    }
    var cn = function(N, ne, Ee, Me, lt, rt, Tt) {
      var St = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: N,
        key: ne,
        ref: Ee,
        props: Tt,
        // Record the component responsible for creating this element.
        _owner: rt
      };
      return St._store = {}, Object.defineProperty(St._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(St, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(St, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: lt
      }), Object.freeze && (Object.freeze(St.props), Object.freeze(St)), St;
    };
    function nr(N, ne, Ee, Me, lt) {
      {
        var rt, Tt = {}, St = null, bn = null;
        Ee !== void 0 && (wr(Ee), St = "" + Ee), vt(ne) && (wr(ne.key), St = "" + ne.key), Fe(ne) && (bn = ne.ref, Yt(ne, lt));
        for (rt in ne)
          Gn.call(ne, rt) && !ta.hasOwnProperty(rt) && (Tt[rt] = ne[rt]);
        if (N && N.defaultProps) {
          var ln = N.defaultProps;
          for (rt in ln)
            Tt[rt] === void 0 && (Tt[rt] = ln[rt]);
        }
        if (St || bn) {
          var fn = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          St && an(Tt, fn), bn && yn(Tt, fn);
        }
        return cn(N, St, bn, lt, Me, gi.current, Tt);
      }
    }
    var on = de.ReactCurrentOwner, Qt = de.ReactDebugCurrentFrame;
    function qt(N) {
      if (N) {
        var ne = N._owner, Ee = $n(N.type, N._source, ne ? ne.type : null);
        Qt.setExtraStackFrame(Ee);
      } else
        Qt.setExtraStackFrame(null);
    }
    var Si;
    Si = !1;
    function br(N) {
      return typeof N == "object" && N !== null && N.$$typeof === l;
    }
    function Li() {
      {
        if (on.current) {
          var N = He(on.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Xa(N) {
      return "";
    }
    var Sl = {};
    function Cl(N) {
      {
        var ne = Li();
        if (!ne) {
          var Ee = typeof N == "string" ? N : N.displayName || N.name;
          Ee && (ne = `

Check the top-level render call using <` + Ee + ">.");
        }
        return ne;
      }
    }
    function _o(N, ne) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var Ee = Cl(ne);
        if (Sl[Ee])
          return;
        Sl[Ee] = !0;
        var Me = "";
        N && N._owner && N._owner !== on.current && (Me = " It was passed a child from " + He(N._owner.type) + "."), qt(N), he('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ee, Me), qt(null);
      }
    }
    function ko(N, ne) {
      {
        if (typeof N != "object")
          return;
        if (Kn(N))
          for (var Ee = 0; Ee < N.length; Ee++) {
            var Me = N[Ee];
            br(Me) && _o(Me, ne);
          }
        else if (br(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var lt = ae(N);
          if (typeof lt == "function" && lt !== N.entries)
            for (var rt = lt.call(N), Tt; !(Tt = rt.next()).done; )
              br(Tt.value) && _o(Tt.value, ne);
        }
      }
    }
    function El(N) {
      {
        var ne = N.type;
        if (ne == null || typeof ne == "string")
          return;
        var Ee;
        if (typeof ne == "function")
          Ee = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === k))
          Ee = ne.propTypes;
        else
          return;
        if (Ee) {
          var Me = He(ne);
          tr(Ee, N.props, "prop", Me, N);
        } else if (ne.PropTypes !== void 0 && !Si) {
          Si = !0;
          var lt = He(ne);
          he("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", lt || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && he("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(N) {
      {
        for (var ne = Object.keys(N.props), Ee = 0; Ee < ne.length; Ee++) {
          var Me = ne[Ee];
          if (Me !== "children" && Me !== "key") {
            qt(N), he("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), qt(null);
            break;
          }
        }
        N.ref !== null && (qt(N), he("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
      }
    }
    var Nr = {};
    function sr(N, ne, Ee, Me, lt, rt) {
      {
        var Tt = Et(N);
        if (!Tt) {
          var St = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (St += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bn = Xa();
          bn ? St += bn : St += Li();
          var ln;
          N === null ? ln = "null" : Kn(N) ? ln = "array" : N !== void 0 && N.$$typeof === l ? (ln = "<" + (He(N.type) || "Unknown") + " />", St = " Did you accidentally export a JSX literal instead of a component?") : ln = typeof N, he("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ln, St);
        }
        var fn = nr(N, ne, Ee, lt, rt);
        if (fn == null)
          return fn;
        if (Tt) {
          var cr = ne.children;
          if (cr !== void 0)
            if (Me)
              if (Kn(cr)) {
                for (var ra = 0; ra < cr.length; ra++)
                  ko(cr[ra], N);
                Object.freeze && Object.freeze(cr);
              } else
                he("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ko(cr, N);
        }
        if (Gn.call(ne, "key")) {
          var ia = He(N), ut = Object.keys(ne).filter(function(Tl) {
            return Tl !== "key";
          }), dt = ut.length > 0 ? "{key: someKey, " + ut.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nr[ia + dt]) {
            var aa = ut.length > 0 ? "{" + ut.join(": ..., ") + ": ...}" : "{}";
            he(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, dt, ia, aa, ia), Nr[ia + dt] = !0;
          }
        }
        return N === p ? Lr(fn) : El(fn), fn;
      }
    }
    function Ta(N, ne, Ee) {
      return sr(N, ne, Ee, !0);
    }
    function na(N, ne, Ee) {
      return sr(N, ne, Ee, !1);
    }
    var xa = na, Ra = Ta;
    Bh.Fragment = p, Bh.jsx = xa, Bh.jsxs = Ra;
  })()), Bh;
}
var Y1;
function GL() {
  return Y1 || (Y1 = 1, process.env.NODE_ENV === "production" ? tg.exports = WL() : tg.exports = $L()), tg.exports;
}
var mn = GL(), wd = {}, rg = { exports: {} }, Zi = {}, ig = { exports: {} }, HC = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function KL() {
  return W1 || (W1 = 1, (function(o) {
    function l(se, Ve) {
      var me = se.length;
      se.push(Ve);
      e: for (; 0 < me; ) {
        var j = me - 1 >>> 1, J = se[j];
        if (0 < y(J, Ve)) se[j] = Ve, se[me] = J, me = j;
        else break e;
      }
    }
    function c(se) {
      return se.length === 0 ? null : se[0];
    }
    function p(se) {
      if (se.length === 0) return null;
      var Ve = se[0], me = se.pop();
      if (me !== Ve) {
        se[0] = me;
        e: for (var j = 0, J = se.length, Ze = J >>> 1; j < Ze; ) {
          var qe = 2 * (j + 1) - 1, yt = se[qe], pt = qe + 1, ft = se[pt];
          if (0 > y(yt, me)) pt < J && 0 > y(ft, yt) ? (se[j] = ft, se[pt] = me, j = pt) : (se[j] = yt, se[qe] = me, j = qe);
          else if (pt < J && 0 > y(ft, me)) se[j] = ft, se[pt] = me, j = pt;
          else break e;
        }
      }
      return Ve;
    }
    function y(se, Ve) {
      var me = se.sortIndex - Ve.sortIndex;
      return me !== 0 ? me : se.id - Ve.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      o.unstable_now = function() {
        return E.now();
      };
    } else {
      var v = Date, w = v.now();
      o.unstable_now = function() {
        return v.now() - w;
      };
    }
    var R = [], b = [], M = 1, k = null, L = 3, F = !1, q = !1, te = !1, ae = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function pe(se) {
      for (var Ve = c(b); Ve !== null; ) {
        if (Ve.callback === null) p(b);
        else if (Ve.startTime <= se) p(b), Ve.sortIndex = Ve.expirationTime, l(R, Ve);
        else break;
        Ve = c(b);
      }
    }
    function Oe(se) {
      if (te = !1, pe(se), !q) if (c(R) !== null) q = !0, Pt(oe);
      else {
        var Ve = c(b);
        Ve !== null && Se(Oe, Ve.startTime - se);
      }
    }
    function oe(se, Ve) {
      q = !1, te && (te = !1, de(Ue), Ue = -1), F = !0;
      var me = L;
      try {
        for (pe(Ve), k = c(R); k !== null && (!(k.expirationTime > Ve) || se && !Vt()); ) {
          var j = k.callback;
          if (typeof j == "function") {
            k.callback = null, L = k.priorityLevel;
            var J = j(k.expirationTime <= Ve);
            Ve = o.unstable_now(), typeof J == "function" ? k.callback = J : k === c(R) && p(R), pe(Ve);
          } else p(R);
          k = c(R);
        }
        if (k !== null) var Ze = !0;
        else {
          var qe = c(b);
          qe !== null && Se(Oe, qe.startTime - Ve), Ze = !1;
        }
        return Ze;
      } finally {
        k = null, L = me, F = !1;
      }
    }
    var Ae = !1, ke = null, Ue = -1, at = 5, Et = -1;
    function Vt() {
      return !(o.unstable_now() - Et < at);
    }
    function wt() {
      if (ke !== null) {
        var se = o.unstable_now();
        Et = se;
        var Ve = !0;
        try {
          Ve = ke(!0, se);
        } finally {
          Ve ? He() : (Ae = !1, ke = null);
        }
      } else Ae = !1;
    }
    var He;
    if (typeof he == "function") He = function() {
      he(wt);
    };
    else if (typeof MessageChannel < "u") {
      var Ot = new MessageChannel(), At = Ot.port2;
      Ot.port1.onmessage = wt, He = function() {
        At.postMessage(null);
      };
    } else He = function() {
      ae(wt, 0);
    };
    function Pt(se) {
      ke = se, Ae || (Ae = !0, He());
    }
    function Se(se, Ve) {
      Ue = ae(function() {
        se(o.unstable_now());
      }, Ve);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(se) {
      se.callback = null;
    }, o.unstable_continueExecution = function() {
      q || F || (q = !0, Pt(oe));
    }, o.unstable_forceFrameRate = function(se) {
      0 > se || 125 < se ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : at = 0 < se ? Math.floor(1e3 / se) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, o.unstable_getFirstCallbackNode = function() {
      return c(R);
    }, o.unstable_next = function(se) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var Ve = 3;
          break;
        default:
          Ve = L;
      }
      var me = L;
      L = Ve;
      try {
        return se();
      } finally {
        L = me;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(se, Ve) {
      switch (se) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          se = 3;
      }
      var me = L;
      L = se;
      try {
        return Ve();
      } finally {
        L = me;
      }
    }, o.unstable_scheduleCallback = function(se, Ve, me) {
      var j = o.unstable_now();
      switch (typeof me == "object" && me !== null ? (me = me.delay, me = typeof me == "number" && 0 < me ? j + me : j) : me = j, se) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = me + J, se = { id: M++, callback: Ve, priorityLevel: se, startTime: me, expirationTime: J, sortIndex: -1 }, me > j ? (se.sortIndex = me, l(b, se), c(R) === null && se === c(b) && (te ? (de(Ue), Ue = -1) : te = !0, Se(Oe, me - j))) : (se.sortIndex = J, l(R, se), q || F || (q = !0, Pt(oe))), se;
    }, o.unstable_shouldYield = Vt, o.unstable_wrapCallback = function(se) {
      var Ve = L;
      return function() {
        var me = L;
        L = Ve;
        try {
          return se.apply(this, arguments);
        } finally {
          L = me;
        }
      };
    };
  })(HC)), HC;
}
var IC = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $1;
function QL() {
  return $1 || ($1 = 1, (function(o) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var l = !1, c = 5;
      function p(ye, Fe) {
        var vt = ye.length;
        ye.push(Fe), v(ye, Fe, vt);
      }
      function y(ye) {
        return ye.length === 0 ? null : ye[0];
      }
      function E(ye) {
        if (ye.length === 0)
          return null;
        var Fe = ye[0], vt = ye.pop();
        return vt !== Fe && (ye[0] = vt, w(ye, vt, 0)), Fe;
      }
      function v(ye, Fe, vt) {
        for (var Yt = vt; Yt > 0; ) {
          var an = Yt - 1 >>> 1, yn = ye[an];
          if (R(yn, Fe) > 0)
            ye[an] = Fe, ye[Yt] = yn, Yt = an;
          else
            return;
        }
      }
      function w(ye, Fe, vt) {
        for (var Yt = vt, an = ye.length, yn = an >>> 1; Yt < yn; ) {
          var cn = (Yt + 1) * 2 - 1, nr = ye[cn], on = cn + 1, Qt = ye[on];
          if (R(nr, Fe) < 0)
            on < an && R(Qt, nr) < 0 ? (ye[Yt] = Qt, ye[on] = Fe, Yt = on) : (ye[Yt] = nr, ye[cn] = Fe, Yt = cn);
          else if (on < an && R(Qt, Fe) < 0)
            ye[Yt] = Qt, ye[on] = Fe, Yt = on;
          else
            return;
        }
      }
      function R(ye, Fe) {
        var vt = ye.sortIndex - Fe.sortIndex;
        return vt !== 0 ? vt : ye.id - Fe.id;
      }
      var b = 1, M = 2, k = 3, L = 4, F = 5;
      function q(ye, Fe) {
      }
      var te = typeof performance == "object" && typeof performance.now == "function";
      if (te) {
        var ae = performance;
        o.unstable_now = function() {
          return ae.now();
        };
      } else {
        var de = Date, he = de.now();
        o.unstable_now = function() {
          return de.now() - he;
        };
      }
      var pe = 1073741823, Oe = -1, oe = 250, Ae = 5e3, ke = 1e4, Ue = pe, at = [], Et = [], Vt = 1, wt = null, He = k, Ot = !1, At = !1, Pt = !1, Se = typeof setTimeout == "function" ? setTimeout : null, se = typeof clearTimeout == "function" ? clearTimeout : null, Ve = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function me(ye) {
        for (var Fe = y(Et); Fe !== null; ) {
          if (Fe.callback === null)
            E(Et);
          else if (Fe.startTime <= ye)
            E(Et), Fe.sortIndex = Fe.expirationTime, p(at, Fe);
          else
            return;
          Fe = y(Et);
        }
      }
      function j(ye) {
        if (Pt = !1, me(ye), !At)
          if (y(at) !== null)
            At = !0, Un(J);
          else {
            var Fe = y(Et);
            Fe !== null && wr(j, Fe.startTime - ye);
          }
      }
      function J(ye, Fe) {
        At = !1, Pt && (Pt = !1, gi()), Ot = !0;
        var vt = He;
        try {
          var Yt;
          if (!l) return Ze(ye, Fe);
        } finally {
          wt = null, He = vt, Ot = !1;
        }
      }
      function Ze(ye, Fe) {
        var vt = Fe;
        for (me(vt), wt = y(at); wt !== null && !(wt.expirationTime > vt && (!ye || Ca())); ) {
          var Yt = wt.callback;
          if (typeof Yt == "function") {
            wt.callback = null, He = wt.priorityLevel;
            var an = wt.expirationTime <= vt, yn = Yt(an);
            vt = o.unstable_now(), typeof yn == "function" ? wt.callback = yn : wt === y(at) && E(at), me(vt);
          } else
            E(at);
          wt = y(at);
        }
        if (wt !== null)
          return !0;
        var cn = y(Et);
        return cn !== null && wr(j, cn.startTime - vt), !1;
      }
      function qe(ye, Fe) {
        switch (ye) {
          case b:
          case M:
          case k:
          case L:
          case F:
            break;
          default:
            ye = k;
        }
        var vt = He;
        He = ye;
        try {
          return Fe();
        } finally {
          He = vt;
        }
      }
      function yt(ye) {
        var Fe;
        switch (He) {
          case b:
          case M:
          case k:
            Fe = k;
            break;
          default:
            Fe = He;
            break;
        }
        var vt = He;
        He = Fe;
        try {
          return ye();
        } finally {
          He = vt;
        }
      }
      function pt(ye) {
        var Fe = He;
        return function() {
          var vt = He;
          He = Fe;
          try {
            return ye.apply(this, arguments);
          } finally {
            He = vt;
          }
        };
      }
      function ft(ye, Fe, vt) {
        var Yt = o.unstable_now(), an;
        if (typeof vt == "object" && vt !== null) {
          var yn = vt.delay;
          typeof yn == "number" && yn > 0 ? an = Yt + yn : an = Yt;
        } else
          an = Yt;
        var cn;
        switch (ye) {
          case b:
            cn = Oe;
            break;
          case M:
            cn = oe;
            break;
          case F:
            cn = Ue;
            break;
          case L:
            cn = ke;
            break;
          case k:
          default:
            cn = Ae;
            break;
        }
        var nr = an + cn, on = {
          id: Vt++,
          callback: Fe,
          priorityLevel: ye,
          startTime: an,
          expirationTime: nr,
          sortIndex: -1
        };
        return an > Yt ? (on.sortIndex = an, p(Et, on), y(at) === null && on === y(Et) && (Pt ? gi() : Pt = !0, wr(j, an - Yt))) : (on.sortIndex = nr, p(at, on), !At && !Ot && (At = !0, Un(J))), on;
      }
      function ht() {
      }
      function gt() {
        !At && !Ot && (At = !0, Un(J));
      }
      function Gt() {
        return y(at);
      }
      function Pn(ye) {
        ye.callback = null;
      }
      function Ar() {
        return He;
      }
      var Rn = !1, ur = null, $n = -1, Gn = c, Xr = -1;
      function Ca() {
        var ye = o.unstable_now() - Xr;
        return !(ye < Gn);
      }
      function yi() {
      }
      function tr(ye) {
        if (ye < 0 || ye > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ye > 0 ? Gn = Math.floor(1e3 / ye) : Gn = c;
      }
      var wn = function() {
        if (ur !== null) {
          var ye = o.unstable_now();
          Xr = ye;
          var Fe = !0, vt = !0;
          try {
            vt = ur(Fe, ye);
          } finally {
            vt ? Kn() : (Rn = !1, ur = null);
          }
        } else
          Rn = !1;
      }, Kn;
      if (typeof Ve == "function")
        Kn = function() {
          Ve(wn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), ea = Rr.port2;
        Rr.port1.onmessage = wn, Kn = function() {
          ea.postMessage(null);
        };
      } else
        Kn = function() {
          Se(wn, 0);
        };
      function Un(ye) {
        ur = ye, Rn || (Rn = !0, Kn());
      }
      function wr(ye, Fe) {
        $n = Se(function() {
          ye(o.unstable_now());
        }, Fe);
      }
      function gi() {
        se($n), $n = -1;
      }
      var ta = yi, Ea = null;
      o.unstable_IdlePriority = F, o.unstable_ImmediatePriority = b, o.unstable_LowPriority = L, o.unstable_NormalPriority = k, o.unstable_Profiling = Ea, o.unstable_UserBlockingPriority = M, o.unstable_cancelCallback = Pn, o.unstable_continueExecution = gt, o.unstable_forceFrameRate = tr, o.unstable_getCurrentPriorityLevel = Ar, o.unstable_getFirstCallbackNode = Gt, o.unstable_next = yt, o.unstable_pauseExecution = ht, o.unstable_requestPaint = ta, o.unstable_runWithPriority = qe, o.unstable_scheduleCallback = ft, o.unstable_shouldYield = Ca, o.unstable_wrapCallback = pt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(IC)), IC;
}
var G1;
function xb() {
  return G1 || (G1 = 1, process.env.NODE_ENV === "production" ? ig.exports = KL() : ig.exports = QL()), ig.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K1;
function qL() {
  if (K1) return Zi;
  K1 = 1;
  var o = iv(), l = xb();
  function c(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++) r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), y = {};
  function E(n, r) {
    v(n, r), v(n + "Capture", r);
  }
  function v(n, r) {
    for (y[n] = r, n = 0; n < r.length; n++) p.add(r[n]);
  }
  var w = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, k = {};
  function L(n) {
    return R.call(k, n) ? !0 : R.call(M, n) ? !1 : b.test(n) ? k[n] = !0 : (M[n] = !0, !1);
  }
  function F(n, r, u, f) {
    if (u !== null && u.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function q(n, r, u, f) {
    if (r === null || typeof r > "u" || F(n, r, u, f)) return !0;
    if (f) return !1;
    if (u !== null) switch (u.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function te(n, r, u, f, h, g, x) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = h, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = g, this.removeEmptyString = x;
  }
  var ae = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ae[n] = new te(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ae[r] = new te(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ae[n] = new te(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ae[n] = new te(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ae[n] = new te(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ae[n] = new te(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ae[n] = new te(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ae[n] = new te(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ae[n] = new te(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var de = /[\-:]([a-z])/g;
  function he(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      de,
      he
    );
    ae[r] = new te(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(de, he);
    ae[r] = new te(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(de, he);
    ae[r] = new te(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ae[n] = new te(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ae.xlinkHref = new te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ae[n] = new te(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function pe(n, r, u, f) {
    var h = ae.hasOwnProperty(r) ? ae[r] : null;
    (h !== null ? h.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (q(r, u, h, f) && (u = null), f || h === null ? L(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : h.mustUseProperty ? n[h.propertyName] = u === null ? h.type === 3 ? !1 : "" : u : (r = h.attributeName, f = h.attributeNamespace, u === null ? n.removeAttribute(r) : (h = h.type, u = h === 3 || h === 4 && u === !0 ? "" : "" + u, f ? n.setAttributeNS(f, r, u) : n.setAttribute(r, u))));
  }
  var Oe = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, oe = Symbol.for("react.element"), Ae = Symbol.for("react.portal"), ke = Symbol.for("react.fragment"), Ue = Symbol.for("react.strict_mode"), at = Symbol.for("react.profiler"), Et = Symbol.for("react.provider"), Vt = Symbol.for("react.context"), wt = Symbol.for("react.forward_ref"), He = Symbol.for("react.suspense"), Ot = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), Pt = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), se = Symbol.iterator;
  function Ve(n) {
    return n === null || typeof n != "object" ? null : (n = se && n[se] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var me = Object.assign, j;
  function J(n) {
    if (j === void 0) try {
      throw Error();
    } catch (u) {
      var r = u.stack.trim().match(/\n( *(at )?)/);
      j = r && r[1] || "";
    }
    return `
` + j + n;
  }
  var Ze = !1;
  function qe(n, r) {
    if (!n || Ze) return "";
    Ze = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (G) {
          var f = G;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (G) {
          f = G;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (G) {
          f = G;
        }
        n();
      }
    } catch (G) {
      if (G && f && typeof G.stack == "string") {
        for (var h = G.stack.split(`
`), g = f.stack.split(`
`), x = h.length - 1, O = g.length - 1; 1 <= x && 0 <= O && h[x] !== g[O]; ) O--;
        for (; 1 <= x && 0 <= O; x--, O--) if (h[x] !== g[O]) {
          if (x !== 1 || O !== 1)
            do
              if (x--, O--, 0 > O || h[x] !== g[O]) {
                var P = `
` + h[x].replace(" at new ", " at ");
                return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), P;
              }
            while (1 <= x && 0 <= O);
          break;
        }
      }
    } finally {
      Ze = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? J(n) : "";
  }
  function yt(n) {
    switch (n.tag) {
      case 5:
        return J(n.type);
      case 16:
        return J("Lazy");
      case 13:
        return J("Suspense");
      case 19:
        return J("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = qe(n.type, !1), n;
      case 11:
        return n = qe(n.type.render, !1), n;
      case 1:
        return n = qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function pt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ke:
        return "Fragment";
      case Ae:
        return "Portal";
      case at:
        return "Profiler";
      case Ue:
        return "StrictMode";
      case He:
        return "Suspense";
      case Ot:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Vt:
        return (n.displayName || "Context") + ".Consumer";
      case Et:
        return (n._context.displayName || "Context") + ".Provider";
      case wt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case At:
        return r = n.displayName || null, r !== null ? r : pt(n.type) || "Memo";
      case Pt:
        r = n._payload, n = n._init;
        try {
          return pt(n(r));
        } catch {
        }
    }
    return null;
  }
  function ft(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pt(r);
      case 8:
        return r === Ue ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ht(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function gt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Gt(n) {
    var r = gt(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var h = u.get, g = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(x) {
        f = "" + x, g.call(this, x);
      } }), Object.defineProperty(n, r, { enumerable: u.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(x) {
        f = "" + x;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Pn(n) {
    n._valueTracker || (n._valueTracker = Gt(n));
  }
  function Ar(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var u = r.getValue(), f = "";
    return n && (f = gt(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== u ? (r.setValue(n), !0) : !1;
  }
  function Rn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ur(n, r) {
    var u = r.checked;
    return me({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function $n(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    u = ht(r.value != null ? r.value : u), n._wrapperState = { initialChecked: f, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Gn(n, r) {
    r = r.checked, r != null && pe(n, "checked", r, !1);
  }
  function Xr(n, r) {
    Gn(n, r);
    var u = ht(r.value), f = r.type;
    if (u != null) f === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? yi(n, r.type, u) : r.hasOwnProperty("defaultValue") && yi(n, r.type, ht(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ca(n, r, u) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, u || r === n.value || (n.value = r), n.defaultValue = r;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function yi(n, r, u) {
    (r !== "number" || Rn(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var tr = Array.isArray;
  function wn(n, r, u, f) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < u.length; h++) r["$" + u[h]] = !0;
      for (u = 0; u < n.length; u++) h = r.hasOwnProperty("$" + n[u].value), n[u].selected !== h && (n[u].selected = h), h && f && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + ht(u), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === u) {
          n[h].selected = !0, f && (n[h].defaultSelected = !0);
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(c(91));
    return me({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Rr(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null) throw Error(c(92));
        if (tr(u)) {
          if (1 < u.length) throw Error(c(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: ht(u) };
  }
  function ea(n, r) {
    var u = ht(r.value), f = ht(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), f != null && (n.defaultValue = "" + f);
  }
  function Un(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function wr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function gi(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? wr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ta, Ea = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, u, f, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, u, f, h);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (ta = ta || document.createElement("div"), ta.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ta.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ye(n, r) {
    if (r) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Fe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, vt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fe).forEach(function(n) {
    vt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Fe[r] = Fe[n];
    });
  });
  function Yt(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || Fe.hasOwnProperty(n) && Fe[n] ? ("" + r).trim() : r + "px";
  }
  function an(n, r) {
    n = n.style;
    for (var u in r) if (r.hasOwnProperty(u)) {
      var f = u.indexOf("--") === 0, h = Yt(u, r[u], f);
      u === "float" && (u = "cssFloat"), f ? n.setProperty(u, h) : n[u] = h;
    }
  }
  var yn = me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cn(n, r) {
    if (r) {
      if (yn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(c(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(c(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(c(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(c(62));
    }
  }
  function nr(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var on = null;
  function Qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var qt = null, Si = null, br = null;
  function Li(n) {
    if (n = Ie(n)) {
      if (typeof qt != "function") throw Error(c(280));
      var r = n.stateNode;
      r && (r = Sn(r), qt(n.stateNode, n.type, r));
    }
  }
  function Xa(n) {
    Si ? br ? br.push(n) : br = [n] : Si = n;
  }
  function Sl() {
    if (Si) {
      var n = Si, r = br;
      if (br = Si = null, Li(n), r) for (n = 0; n < r.length; n++) Li(r[n]);
    }
  }
  function Cl(n, r) {
    return n(r);
  }
  function _o() {
  }
  var ko = !1;
  function El(n, r, u) {
    if (ko) return n(r, u);
    ko = !0;
    try {
      return Cl(n, r, u);
    } finally {
      ko = !1, (Si !== null || br !== null) && (_o(), Sl());
    }
  }
  function Lr(n, r) {
    var u = n.stateNode;
    if (u === null) return null;
    var f = Sn(u);
    if (f === null) return null;
    u = f[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (u && typeof u != "function") throw Error(c(231, r, typeof u));
    return u;
  }
  var Nr = !1;
  if (w) try {
    var sr = {};
    Object.defineProperty(sr, "passive", { get: function() {
      Nr = !0;
    } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
  } catch {
    Nr = !1;
  }
  function Ta(n, r, u, f, h, g, x, O, P) {
    var G = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, G);
    } catch (le) {
      this.onError(le);
    }
  }
  var na = !1, xa = null, Ra = !1, N = null, ne = { onError: function(n) {
    na = !0, xa = n;
  } };
  function Ee(n, r, u, f, h, g, x, O, P) {
    na = !1, xa = null, Ta.apply(ne, arguments);
  }
  function Me(n, r, u, f, h, g, x, O, P) {
    if (Ee.apply(this, arguments), na) {
      if (na) {
        var G = xa;
        na = !1, xa = null;
      } else throw Error(c(198));
      Ra || (Ra = !0, N = G);
    }
  }
  function lt(n) {
    var r = n, u = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (u = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? u : null;
  }
  function rt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Tt(n) {
    if (lt(n) !== n) throw Error(c(188));
  }
  function St(n) {
    var r = n.alternate;
    if (!r) {
      if (r = lt(n), r === null) throw Error(c(188));
      return r !== n ? null : n;
    }
    for (var u = n, f = r; ; ) {
      var h = u.return;
      if (h === null) break;
      var g = h.alternate;
      if (g === null) {
        if (f = h.return, f !== null) {
          u = f;
          continue;
        }
        break;
      }
      if (h.child === g.child) {
        for (g = h.child; g; ) {
          if (g === u) return Tt(h), n;
          if (g === f) return Tt(h), r;
          g = g.sibling;
        }
        throw Error(c(188));
      }
      if (u.return !== f.return) u = h, f = g;
      else {
        for (var x = !1, O = h.child; O; ) {
          if (O === u) {
            x = !0, u = h, f = g;
            break;
          }
          if (O === f) {
            x = !0, f = h, u = g;
            break;
          }
          O = O.sibling;
        }
        if (!x) {
          for (O = g.child; O; ) {
            if (O === u) {
              x = !0, u = g, f = h;
              break;
            }
            if (O === f) {
              x = !0, f = g, u = h;
              break;
            }
            O = O.sibling;
          }
          if (!x) throw Error(c(189));
        }
      }
      if (u.alternate !== f) throw Error(c(190));
    }
    if (u.tag !== 3) throw Error(c(188));
    return u.stateNode.current === u ? n : r;
  }
  function bn(n) {
    return n = St(n), n !== null ? ln(n) : null;
  }
  function ln(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ln(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var fn = l.unstable_scheduleCallback, cr = l.unstable_cancelCallback, ra = l.unstable_shouldYield, ia = l.unstable_requestPaint, ut = l.unstable_now, dt = l.unstable_getCurrentPriorityLevel, aa = l.unstable_ImmediatePriority, Tl = l.unstable_UserBlockingPriority, xl = l.unstable_NormalPriority, Mo = l.unstable_LowPriority, hu = l.unstable_IdlePriority, Oo = null, Zr = null;
  function ms(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function") try {
      Zr.onCommitFiberRoot(Oo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Pr = Math.clz32 ? Math.clz32 : vu, Fc = Math.log, jc = Math.LN2;
  function vu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Fc(n) / jc | 0) | 0;
  }
  var Ao = 64, Ci = 4194304;
  function oa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function la(n, r) {
    var u = n.pendingLanes;
    if (u === 0) return 0;
    var f = 0, h = n.suspendedLanes, g = n.pingedLanes, x = u & 268435455;
    if (x !== 0) {
      var O = x & ~h;
      O !== 0 ? f = oa(O) : (g &= x, g !== 0 && (f = oa(g)));
    } else x = u & ~h, x !== 0 ? f = oa(x) : g !== 0 && (f = oa(g));
    if (f === 0) return 0;
    if (r !== 0 && r !== f && (r & h) === 0 && (h = f & -f, g = r & -r, h >= g || h === 16 && (g & 4194240) !== 0)) return r;
    if ((f & 4) !== 0 && (f |= u & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= f; 0 < r; ) u = 31 - Pr(r), h = 1 << u, f |= n[u], r &= ~h;
    return f;
  }
  function mu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Rl(n, r) {
    for (var u = n.suspendedLanes, f = n.pingedLanes, h = n.expirationTimes, g = n.pendingLanes; 0 < g; ) {
      var x = 31 - Pr(g), O = 1 << x, P = h[x];
      P === -1 ? ((O & u) === 0 || (O & f) !== 0) && (h[x] = mu(O, r)) : P <= r && (n.expiredLanes |= O), g &= ~O;
    }
  }
  function Lo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function yu() {
    var n = Ao;
    return Ao <<= 1, (Ao & 4194240) === 0 && (Ao = 64), n;
  }
  function gu(n) {
    for (var r = [], u = 0; 31 > u; u++) r.push(n);
    return r;
  }
  function Za(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Pr(r), n[r] = u;
  }
  function Pd(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var h = 31 - Pr(u), g = 1 << h;
      r[h] = 0, f[h] = -1, n[h] = -1, u &= ~g;
    }
  }
  function Ja(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var f = 31 - Pr(u), h = 1 << f;
      h & r | n[f] & r && (n[f] |= r), u &= ~h;
    }
  }
  var zt = 0;
  function Su(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Lt, ys, wa, nt, Cu, fr = !1, ba = [], Ur = null, Da = null, dn = null, Xt = /* @__PURE__ */ new Map(), No = /* @__PURE__ */ new Map(), Qn = [], Vr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ni(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ur = null;
        break;
      case "dragenter":
      case "dragleave":
        Da = null;
        break;
      case "mouseover":
      case "mouseout":
        dn = null;
        break;
      case "pointerover":
      case "pointerout":
        Xt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        No.delete(r.pointerId);
    }
  }
  function wl(n, r, u, f, h, g) {
    return n === null || n.nativeEvent !== g ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: f, nativeEvent: g, targetContainers: [h] }, r !== null && (r = Ie(r), r !== null && ys(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function gs(n, r, u, f, h) {
    switch (r) {
      case "focusin":
        return Ur = wl(Ur, n, r, u, f, h), !0;
      case "dragenter":
        return Da = wl(Da, n, r, u, f, h), !0;
      case "mouseover":
        return dn = wl(dn, n, r, u, f, h), !0;
      case "pointerover":
        var g = h.pointerId;
        return Xt.set(g, wl(Xt.get(g) || null, n, r, u, f, h)), !0;
      case "gotpointercapture":
        return g = h.pointerId, No.set(g, wl(No.get(g) || null, n, r, u, f, h)), !0;
    }
    return !1;
  }
  function Ss(n) {
    var r = Nl(n.target);
    if (r !== null) {
      var u = lt(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = rt(u), r !== null) {
            n.blockedOn = r, Cu(n.priority, function() {
              wa(u);
            });
            return;
          }
        } else if (r === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Po(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var u = xu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var f = new u.constructor(u.type, u);
        on = f, u.target.dispatchEvent(f), on = null;
      } else return r = Ie(u), r !== null && ys(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function bl(n, r, u) {
    Po(n) && u.delete(r);
  }
  function Ud() {
    fr = !1, Ur !== null && Po(Ur) && (Ur = null), Da !== null && Po(Da) && (Da = null), dn !== null && Po(dn) && (dn = null), Xt.forEach(bl), No.forEach(bl);
  }
  function Pi(n, r) {
    n.blockedOn === r && (n.blockedOn = null, fr || (fr = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Ud)));
  }
  function ua(n) {
    function r(h) {
      return Pi(h, n);
    }
    if (0 < ba.length) {
      Pi(ba[0], n);
      for (var u = 1; u < ba.length; u++) {
        var f = ba[u];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (Ur !== null && Pi(Ur, n), Da !== null && Pi(Da, n), dn !== null && Pi(dn, n), Xt.forEach(r), No.forEach(r), u = 0; u < Qn.length; u++) f = Qn[u], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Qn.length && (u = Qn[0], u.blockedOn === null); ) Ss(u), u.blockedOn === null && Qn.shift();
  }
  var _a = Oe.ReactCurrentBatchConfig, Ui = !0;
  function Eu(n, r, u, f) {
    var h = zt, g = _a.transition;
    _a.transition = null;
    try {
      zt = 1, Uo(n, r, u, f);
    } finally {
      zt = h, _a.transition = g;
    }
  }
  function Tu(n, r, u, f) {
    var h = zt, g = _a.transition;
    _a.transition = null;
    try {
      zt = 4, Uo(n, r, u, f);
    } finally {
      zt = h, _a.transition = g;
    }
  }
  function Uo(n, r, u, f) {
    if (Ui) {
      var h = xu(n, r, u, f);
      if (h === null) Zc(n, r, f, Dl, u), Ni(n, f);
      else if (gs(h, n, r, u, f)) f.stopPropagation();
      else if (Ni(n, f), r & 4 && -1 < Vr.indexOf(n)) {
        for (; h !== null; ) {
          var g = Ie(h);
          if (g !== null && Lt(g), g = xu(n, r, u, f), g === null && Zc(n, r, f, Dl, u), g === h) break;
          h = g;
        }
        h !== null && f.stopPropagation();
      } else Zc(n, r, f, null, u);
    }
  }
  var Dl = null;
  function xu(n, r, u, f) {
    if (Dl = null, n = Qt(f), n = Nl(n), n !== null) if (r = lt(n), r === null) n = null;
    else if (u = r.tag, u === 13) {
      if (n = rt(r), n !== null) return n;
      n = null;
    } else if (u === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Dl = n, null;
  }
  function Ru(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (dt()) {
          case aa:
            return 1;
          case Tl:
            return 4;
          case xl:
          case Mo:
            return 16;
          case hu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var sa = null, T = null, A = null;
  function $() {
    if (A) return A;
    var n, r = T, u = r.length, f, h = "value" in sa ? sa.value : sa.textContent, g = h.length;
    for (n = 0; n < u && r[n] === h[n]; n++) ;
    var x = u - n;
    for (f = 1; f <= x && r[u - f] === h[g - f]; f++) ;
    return A = h.slice(n, 1 < f ? 1 - f : void 0);
  }
  function Q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ve() {
    return !0;
  }
  function We() {
    return !1;
  }
  function Ce(n) {
    function r(u, f, h, g, x) {
      this._reactName = u, this._targetInst = h, this.type = f, this.nativeEvent = g, this.target = x, this.currentTarget = null;
      for (var O in n) n.hasOwnProperty(O) && (u = n[O], this[O] = u ? u(g) : g[O]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? ve : We, this.isPropagationStopped = We, this;
    }
    return me(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ve);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ve);
    }, persist: function() {
    }, isPersistent: ve }), r;
  }
  var Ke = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, xt = Ce(Ke), Nt = me({}, Ke, { view: 0, detail: 0 }), un = Ce(Nt), Zt, mt, Jt, gn = me({}, Nt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Jt && (Jt && n.type === "mousemove" ? (Zt = n.screenX - Jt.screenX, mt = n.screenY - Jt.screenY) : mt = Zt = 0, Jt = n), Zt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : mt;
  } }), Vo = Ce(gn), Cs = me({}, gn, { dataTransfer: 0 }), eo = Ce(Cs), Es = me({}, Nt, { relatedTarget: 0 }), _l = Ce(Es), Vd = me({}, Ke, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bc = Ce(Vd), zd = me({}, Ke, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), cv = Ce(zd), Fd = me({}, Ke, { data: 0 }), jd = Ce(Fd), fv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, dv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, bg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function to(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = bg[n]) ? !!r[n] : !1;
  }
  function Bd() {
    return to;
  }
  var Hd = me({}, Nt, { key: function(n) {
    if (n.key) {
      var r = fv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bd, charCode: function(n) {
    return n.type === "keypress" ? Q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Id = Ce(Hd), Yd = me({}, gn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pv = Ce(Yd), Hc = me({}, Nt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bd }), hv = Ce(Hc), Jr = me({}, Ke, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), no = Ce(Jr), Vn = me({}, gn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ro = Ce(Vn), Wd = [9, 13, 27, 32], wu = w && "CompositionEvent" in window, Ts = null;
  w && "documentMode" in document && (Ts = document.documentMode);
  var xs = w && "TextEvent" in window && !Ts, vv = w && (!wu || Ts && 8 < Ts && 11 >= Ts), mv = " ", Ic = !1;
  function yv(n, r) {
    switch (n) {
      case "keyup":
        return Wd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function gv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var bu = !1;
  function Sv(n, r) {
    switch (n) {
      case "compositionend":
        return gv(r);
      case "keypress":
        return r.which !== 32 ? null : (Ic = !0, mv);
      case "textInput":
        return n = r.data, n === mv && Ic ? null : n;
      default:
        return null;
    }
  }
  function Dg(n, r) {
    if (bu) return n === "compositionend" || !wu && yv(n, r) ? (n = $(), A = T = sa = null, bu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return vv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var _g = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!_g[n.type] : r === "textarea";
  }
  function $d(n, r, u, f) {
    Xa(f), r = ks(r, "onChange"), 0 < r.length && (u = new xt("onChange", "change", null, u, f), n.push({ event: u, listeners: r }));
  }
  var ka = null, kl = null;
  function Ev(n) {
    Al(n, 0);
  }
  function Rs(n) {
    var r = fa(n);
    if (Ar(r)) return n;
  }
  function kg(n, r) {
    if (n === "change") return r;
  }
  var Tv = !1;
  if (w) {
    var Gd;
    if (w) {
      var Kd = "oninput" in document;
      if (!Kd) {
        var xv = document.createElement("div");
        xv.setAttribute("oninput", "return;"), Kd = typeof xv.oninput == "function";
      }
      Gd = Kd;
    } else Gd = !1;
    Tv = Gd && (!document.documentMode || 9 < document.documentMode);
  }
  function Rv() {
    ka && (ka.detachEvent("onpropertychange", wv), kl = ka = null);
  }
  function wv(n) {
    if (n.propertyName === "value" && Rs(kl)) {
      var r = [];
      $d(r, kl, n, Qt(n)), El(Ev, r);
    }
  }
  function Mg(n, r, u) {
    n === "focusin" ? (Rv(), ka = r, kl = u, ka.attachEvent("onpropertychange", wv)) : n === "focusout" && Rv();
  }
  function bv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Rs(kl);
  }
  function Og(n, r) {
    if (n === "click") return Rs(r);
  }
  function Dv(n, r) {
    if (n === "input" || n === "change") return Rs(r);
  }
  function Ag(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ca = typeof Object.is == "function" ? Object.is : Ag;
  function ws(n, r) {
    if (ca(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var u = Object.keys(n), f = Object.keys(r);
    if (u.length !== f.length) return !1;
    for (f = 0; f < u.length; f++) {
      var h = u[f];
      if (!R.call(r, h) || !ca(n[h], r[h])) return !1;
    }
    return !0;
  }
  function _v(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Yc(n, r) {
    var u = _v(n);
    n = 0;
    for (var f; u; ) {
      if (u.nodeType === 3) {
        if (f = n + u.textContent.length, n <= r && f >= r) return { node: u, offset: r - n };
        n = f;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = _v(u);
    }
  }
  function zo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? zo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function bs() {
    for (var n = window, r = Rn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) n = r.contentWindow;
      else break;
      r = Rn(n.document);
    }
    return r;
  }
  function Wc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Du(n) {
    var r = bs(), u = n.focusedElem, f = n.selectionRange;
    if (r !== u && u && u.ownerDocument && zo(u.ownerDocument.documentElement, u)) {
      if (f !== null && Wc(u)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in u) u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = u.textContent.length, g = Math.min(f.start, h);
          f = f.end === void 0 ? g : Math.min(f.end, h), !n.extend && g > f && (h = f, f = g, g = h), h = Yc(u, g);
          var x = Yc(
            u,
            f
          );
          h && x && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== x.node || n.focusOffset !== x.offset) && (r = r.createRange(), r.setStart(h.node, h.offset), n.removeAllRanges(), g > f ? (n.addRange(r), n.extend(x.node, x.offset)) : (r.setEnd(x.node, x.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++) n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Lg = w && "documentMode" in document && 11 >= document.documentMode, _u = null, Qd = null, Ds = null, qd = !1;
  function Xd(n, r, u) {
    var f = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    qd || _u == null || _u !== Rn(f) || (f = _u, "selectionStart" in f && Wc(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), Ds && ws(Ds, f) || (Ds = f, f = ks(Qd, "onSelect"), 0 < f.length && (r = new xt("onSelect", "select", null, r, u), n.push({ event: r, listeners: f }), r.target = _u)));
  }
  function $c(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var Ml = { animationend: $c("Animation", "AnimationEnd"), animationiteration: $c("Animation", "AnimationIteration"), animationstart: $c("Animation", "AnimationStart"), transitionend: $c("Transition", "TransitionEnd") }, dr = {}, Zd = {};
  w && (Zd = document.createElement("div").style, "AnimationEvent" in window || (delete Ml.animationend.animation, delete Ml.animationiteration.animation, delete Ml.animationstart.animation), "TransitionEvent" in window || delete Ml.transitionend.transition);
  function Gc(n) {
    if (dr[n]) return dr[n];
    if (!Ml[n]) return n;
    var r = Ml[n], u;
    for (u in r) if (r.hasOwnProperty(u) && u in Zd) return dr[n] = r[u];
    return n;
  }
  var kv = Gc("animationend"), Mv = Gc("animationiteration"), Ov = Gc("animationstart"), Av = Gc("transitionend"), Jd = /* @__PURE__ */ new Map(), Kc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Vi(n, r) {
    Jd.set(n, r), E(r, [n]);
  }
  for (var ep = 0; ep < Kc.length; ep++) {
    var Ol = Kc[ep], Ng = Ol.toLowerCase(), Pg = Ol[0].toUpperCase() + Ol.slice(1);
    Vi(Ng, "on" + Pg);
  }
  Vi(kv, "onAnimationEnd"), Vi(Mv, "onAnimationIteration"), Vi(Ov, "onAnimationStart"), Vi("dblclick", "onDoubleClick"), Vi("focusin", "onFocus"), Vi("focusout", "onBlur"), Vi(Av, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _s = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), tp = new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));
  function Qc(n, r, u) {
    var f = n.type || "unknown-event";
    n.currentTarget = u, Me(f, r, void 0, n), n.currentTarget = null;
  }
  function Al(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var f = n[u], h = f.event;
      f = f.listeners;
      e: {
        var g = void 0;
        if (r) for (var x = f.length - 1; 0 <= x; x--) {
          var O = f[x], P = O.instance, G = O.currentTarget;
          if (O = O.listener, P !== g && h.isPropagationStopped()) break e;
          Qc(h, O, G), g = P;
        }
        else for (x = 0; x < f.length; x++) {
          if (O = f[x], P = O.instance, G = O.currentTarget, O = O.listener, P !== g && h.isPropagationStopped()) break e;
          Qc(h, O, G), g = P;
        }
      }
    }
    if (Ra) throw n = N, Ra = !1, N = null, n;
  }
  function Wt(n, r) {
    var u = r[As];
    u === void 0 && (u = r[As] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    u.has(f) || (Lv(r, n, 2, !1), u.add(f));
  }
  function qc(n, r, u) {
    var f = 0;
    r && (f |= 4), Lv(u, n, f, r);
  }
  var Xc = "_reactListening" + Math.random().toString(36).slice(2);
  function ku(n) {
    if (!n[Xc]) {
      n[Xc] = !0, p.forEach(function(u) {
        u !== "selectionchange" && (tp.has(u) || qc(u, !1, n), qc(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Xc] || (r[Xc] = !0, qc("selectionchange", !1, r));
    }
  }
  function Lv(n, r, u, f) {
    switch (Ru(r)) {
      case 1:
        var h = Eu;
        break;
      case 4:
        h = Tu;
        break;
      default:
        h = Uo;
    }
    u = h.bind(null, r, u, n), h = void 0, !Nr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), f ? h !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: h }) : n.addEventListener(r, u, !0) : h !== void 0 ? n.addEventListener(r, u, { passive: h }) : n.addEventListener(r, u, !1);
  }
  function Zc(n, r, u, f, h) {
    var g = f;
    if ((r & 1) === 0 && (r & 2) === 0 && f !== null) e: for (; ; ) {
      if (f === null) return;
      var x = f.tag;
      if (x === 3 || x === 4) {
        var O = f.stateNode.containerInfo;
        if (O === h || O.nodeType === 8 && O.parentNode === h) break;
        if (x === 4) for (x = f.return; x !== null; ) {
          var P = x.tag;
          if ((P === 3 || P === 4) && (P = x.stateNode.containerInfo, P === h || P.nodeType === 8 && P.parentNode === h)) return;
          x = x.return;
        }
        for (; O !== null; ) {
          if (x = Nl(O), x === null) return;
          if (P = x.tag, P === 5 || P === 6) {
            f = g = x;
            continue e;
          }
          O = O.parentNode;
        }
      }
      f = f.return;
    }
    El(function() {
      var G = g, le = Qt(u), ce = [];
      e: {
        var ie = Jd.get(n);
        if (ie !== void 0) {
          var we = xt, Le = n;
          switch (n) {
            case "keypress":
              if (Q(u) === 0) break e;
            case "keydown":
            case "keyup":
              we = Id;
              break;
            case "focusin":
              Le = "focus", we = _l;
              break;
            case "focusout":
              Le = "blur", we = _l;
              break;
            case "beforeblur":
            case "afterblur":
              we = _l;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              we = Vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              we = eo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              we = hv;
              break;
            case kv:
            case Mv:
            case Ov:
              we = Bc;
              break;
            case Av:
              we = no;
              break;
            case "scroll":
              we = un;
              break;
            case "wheel":
              we = ro;
              break;
            case "copy":
            case "cut":
            case "paste":
              we = cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              we = pv;
          }
          var ze = (r & 4) !== 0, On = !ze && n === "scroll", B = ze ? ie !== null ? ie + "Capture" : null : ie;
          ze = [];
          for (var V = G, Y; V !== null; ) {
            Y = V;
            var ue = Y.stateNode;
            if (Y.tag === 5 && ue !== null && (Y = ue, B !== null && (ue = Lr(V, B), ue != null && ze.push(Mu(V, ue, Y)))), On) break;
            V = V.return;
          }
          0 < ze.length && (ie = new we(ie, Le, null, u, le), ce.push({ event: ie, listeners: ze }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", we = n === "mouseout" || n === "pointerout", ie && u !== on && (Le = u.relatedTarget || u.fromElement) && (Nl(Le) || Le[io])) break e;
          if ((we || ie) && (ie = le.window === le ? le : (ie = le.ownerDocument) ? ie.defaultView || ie.parentWindow : window, we ? (Le = u.relatedTarget || u.toElement, we = G, Le = Le ? Nl(Le) : null, Le !== null && (On = lt(Le), Le !== On || Le.tag !== 5 && Le.tag !== 6) && (Le = null)) : (we = null, Le = G), we !== Le)) {
            if (ze = Vo, ue = "onMouseLeave", B = "onMouseEnter", V = "mouse", (n === "pointerout" || n === "pointerover") && (ze = pv, ue = "onPointerLeave", B = "onPointerEnter", V = "pointer"), On = we == null ? ie : fa(we), Y = Le == null ? ie : fa(Le), ie = new ze(ue, V + "leave", we, u, le), ie.target = On, ie.relatedTarget = Y, ue = null, Nl(le) === G && (ze = new ze(B, V + "enter", Le, u, le), ze.target = Y, ze.relatedTarget = On, ue = ze), On = ue, we && Le) t: {
              for (ze = we, B = Le, V = 0, Y = ze; Y; Y = Fo(Y)) V++;
              for (Y = 0, ue = B; ue; ue = Fo(ue)) Y++;
              for (; 0 < V - Y; ) ze = Fo(ze), V--;
              for (; 0 < Y - V; ) B = Fo(B), Y--;
              for (; V--; ) {
                if (ze === B || B !== null && ze === B.alternate) break t;
                ze = Fo(ze), B = Fo(B);
              }
              ze = null;
            }
            else ze = null;
            we !== null && Nv(ce, ie, we, ze, !1), Le !== null && On !== null && Nv(ce, On, Le, ze, !0);
          }
        }
        e: {
          if (ie = G ? fa(G) : window, we = ie.nodeName && ie.nodeName.toLowerCase(), we === "select" || we === "input" && ie.type === "file") var Ne = kg;
          else if (Cv(ie)) if (Tv) Ne = Dv;
          else {
            Ne = bv;
            var Ge = Mg;
          }
          else (we = ie.nodeName) && we.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (Ne = Og);
          if (Ne && (Ne = Ne(n, G))) {
            $d(ce, Ne, u, le);
            break e;
          }
          Ge && Ge(n, ie, G), n === "focusout" && (Ge = ie._wrapperState) && Ge.controlled && ie.type === "number" && yi(ie, "number", ie.value);
        }
        switch (Ge = G ? fa(G) : window, n) {
          case "focusin":
            (Cv(Ge) || Ge.contentEditable === "true") && (_u = Ge, Qd = G, Ds = null);
            break;
          case "focusout":
            Ds = Qd = _u = null;
            break;
          case "mousedown":
            qd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qd = !1, Xd(ce, u, le);
            break;
          case "selectionchange":
            if (Lg) break;
          case "keydown":
          case "keyup":
            Xd(ce, u, le);
        }
        var Qe;
        if (wu) e: {
          switch (n) {
            case "compositionstart":
              var et = "onCompositionStart";
              break e;
            case "compositionend":
              et = "onCompositionEnd";
              break e;
            case "compositionupdate":
              et = "onCompositionUpdate";
              break e;
          }
          et = void 0;
        }
        else bu ? yv(n, u) && (et = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (et = "onCompositionStart");
        et && (vv && u.locale !== "ko" && (bu || et !== "onCompositionStart" ? et === "onCompositionEnd" && bu && (Qe = $()) : (sa = le, T = "value" in sa ? sa.value : sa.textContent, bu = !0)), Ge = ks(G, et), 0 < Ge.length && (et = new jd(et, n, null, u, le), ce.push({ event: et, listeners: Ge }), Qe ? et.data = Qe : (Qe = gv(u), Qe !== null && (et.data = Qe)))), (Qe = xs ? Sv(n, u) : Dg(n, u)) && (G = ks(G, "onBeforeInput"), 0 < G.length && (le = new jd("onBeforeInput", "beforeinput", null, u, le), ce.push({ event: le, listeners: G }), le.data = Qe));
      }
      Al(ce, r);
    });
  }
  function Mu(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function ks(n, r) {
    for (var u = r + "Capture", f = []; n !== null; ) {
      var h = n, g = h.stateNode;
      h.tag === 5 && g !== null && (h = g, g = Lr(n, u), g != null && f.unshift(Mu(n, g, h)), g = Lr(n, r), g != null && f.push(Mu(n, g, h))), n = n.return;
    }
    return f;
  }
  function Fo(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Nv(n, r, u, f, h) {
    for (var g = r._reactName, x = []; u !== null && u !== f; ) {
      var O = u, P = O.alternate, G = O.stateNode;
      if (P !== null && P === f) break;
      O.tag === 5 && G !== null && (O = G, h ? (P = Lr(u, g), P != null && x.unshift(Mu(u, P, O))) : h || (P = Lr(u, g), P != null && x.push(Mu(u, P, O)))), u = u.return;
    }
    x.length !== 0 && n.push({ event: r, listeners: x });
  }
  var Pv = /\r\n?/g, Ug = /\u0000|\uFFFD/g;
  function Uv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Pv, `
`).replace(Ug, "");
  }
  function Jc(n, r, u) {
    if (r = Uv(r), Uv(n) !== r && u) throw Error(c(425));
  }
  function jo() {
  }
  var Ms = null, Ll = null;
  function ef(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var tf = typeof setTimeout == "function" ? setTimeout : void 0, np = typeof clearTimeout == "function" ? clearTimeout : void 0, Vv = typeof Promise == "function" ? Promise : void 0, Ou = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vv < "u" ? function(n) {
    return Vv.resolve(null).then(n).catch(nf);
  } : tf;
  function nf(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Au(n, r) {
    var u = r, f = 0;
    do {
      var h = u.nextSibling;
      if (n.removeChild(u), h && h.nodeType === 8) if (u = h.data, u === "/$") {
        if (f === 0) {
          n.removeChild(h), ua(r);
          return;
        }
        f--;
      } else u !== "$" && u !== "$?" && u !== "$!" || f++;
      u = h;
    } while (u);
    ua(r);
  }
  function Ma(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function zv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (r === 0) return n;
          r--;
        } else u === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Bo = Math.random().toString(36).slice(2), Oa = "__reactFiber$" + Bo, Os = "__reactProps$" + Bo, io = "__reactContainer$" + Bo, As = "__reactEvents$" + Bo, Lu = "__reactListeners$" + Bo, Vg = "__reactHandles$" + Bo;
  function Nl(n) {
    var r = n[Oa];
    if (r) return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[io] || u[Oa]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null) for (n = zv(n); n !== null; ) {
          if (u = n[Oa]) return u;
          n = zv(n);
        }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function Ie(n) {
    return n = n[Oa] || n[io], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function fa(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(c(33));
  }
  function Sn(n) {
    return n[Os] || null;
  }
  var Dt = [], zi = -1;
  function Fi(n) {
    return { current: n };
  }
  function sn(n) {
    0 > zi || (n.current = Dt[zi], Dt[zi] = null, zi--);
  }
  function Be(n, r) {
    zi++, Dt[zi] = n.current, n.current = r;
  }
  var Dr = {}, xn = Fi(Dr), qn = Fi(!1), ei = Dr;
  function ti(n, r) {
    var u = n.type.contextTypes;
    if (!u) return Dr;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r) return f.__reactInternalMemoizedMaskedChildContext;
    var h = {}, g;
    for (g in u) h[g] = r[g];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Nu() {
    sn(qn), sn(xn);
  }
  function Fv(n, r, u) {
    if (xn.current !== Dr) throw Error(c(168));
    Be(xn, r), Be(qn, u);
  }
  function Ls(n, r, u) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function") return u;
    f = f.getChildContext();
    for (var h in f) if (!(h in r)) throw Error(c(108, ft(n) || "Unknown", h));
    return me({}, u, f);
  }
  function rr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Dr, ei = xn.current, Be(xn, n), Be(qn, qn.current), !0;
  }
  function rf(n, r, u) {
    var f = n.stateNode;
    if (!f) throw Error(c(169));
    u ? (n = Ls(n, r, ei), f.__reactInternalMemoizedMergedChildContext = n, sn(qn), sn(xn), Be(xn, n)) : sn(qn), Be(qn, u);
  }
  var Aa = null, Pu = !1, ao = !1;
  function af(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  function Ho(n) {
    Pu = !0, af(n);
  }
  function La() {
    if (!ao && Aa !== null) {
      ao = !0;
      var n = 0, r = zt;
      try {
        var u = Aa;
        for (zt = 1; n < u.length; n++) {
          var f = u[n];
          do
            f = f(!0);
          while (f !== null);
        }
        Aa = null, Pu = !1;
      } catch (h) {
        throw Aa !== null && (Aa = Aa.slice(n + 1)), fn(aa, La), h;
      } finally {
        zt = r, ao = !1;
      }
    }
    return null;
  }
  var Io = [], Yo = 0, Wo = null, oo = 0, Fn = [], ji = 0, Ei = null, Na = 1, Pa = "";
  function Pl(n, r) {
    Io[Yo++] = oo, Io[Yo++] = Wo, Wo = n, oo = r;
  }
  function jv(n, r, u) {
    Fn[ji++] = Na, Fn[ji++] = Pa, Fn[ji++] = Ei, Ei = n;
    var f = Na;
    n = Pa;
    var h = 32 - Pr(f) - 1;
    f &= ~(1 << h), u += 1;
    var g = 32 - Pr(r) + h;
    if (30 < g) {
      var x = h - h % 5;
      g = (f & (1 << x) - 1).toString(32), f >>= x, h -= x, Na = 1 << 32 - Pr(r) + h | u << h | f, Pa = g + n;
    } else Na = 1 << g | u << h | f, Pa = n;
  }
  function of(n) {
    n.return !== null && (Pl(n, 1), jv(n, 1, 0));
  }
  function lf(n) {
    for (; n === Wo; ) Wo = Io[--Yo], Io[Yo] = null, oo = Io[--Yo], Io[Yo] = null;
    for (; n === Ei; ) Ei = Fn[--ji], Fn[ji] = null, Pa = Fn[--ji], Fn[ji] = null, Na = Fn[--ji], Fn[ji] = null;
  }
  var ni = null, ri = null, hn = !1, Bi = null;
  function rp(n, r) {
    var u = $i(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function Bv(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ni = n, ri = Ma(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ni = n, ri = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = Ei !== null ? { id: Na, overflow: Pa } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = $i(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, ni = n, ri = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ip(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function ap(n) {
    if (hn) {
      var r = ri;
      if (r) {
        var u = r;
        if (!Bv(n, r)) {
          if (ip(n)) throw Error(c(418));
          r = Ma(u.nextSibling);
          var f = ni;
          r && Bv(n, r) ? rp(f, u) : (n.flags = n.flags & -4097 | 2, hn = !1, ni = n);
        }
      } else {
        if (ip(n)) throw Error(c(418));
        n.flags = n.flags & -4097 | 2, hn = !1, ni = n;
      }
    }
  }
  function Xn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ni = n;
  }
  function uf(n) {
    if (n !== ni) return !1;
    if (!hn) return Xn(n), hn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ef(n.type, n.memoizedProps)), r && (r = ri)) {
      if (ip(n)) throw Ns(), Error(c(418));
      for (; r; ) rp(n, r), r = Ma(r.nextSibling);
    }
    if (Xn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (r === 0) {
                ri = Ma(n.nextSibling);
                break e;
              }
              r--;
            } else u !== "$" && u !== "$!" && u !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ri = null;
      }
    } else ri = ni ? Ma(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ns() {
    for (var n = ri; n; ) n = Ma(n.nextSibling);
  }
  function $o() {
    ri = ni = null, hn = !1;
  }
  function lo(n) {
    Bi === null ? Bi = [n] : Bi.push(n);
  }
  var zg = Oe.ReactCurrentBatchConfig;
  function Ul(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1) throw Error(c(309));
          var f = u.stateNode;
        }
        if (!f) throw Error(c(147, n));
        var h = f, g = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === g ? r.ref : (r = function(x) {
          var O = h.refs;
          x === null ? delete O[g] : O[g] = x;
        }, r._stringRef = g, r);
      }
      if (typeof n != "string") throw Error(c(284));
      if (!u._owner) throw Error(c(290, n));
    }
    return n;
  }
  function sf(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Hv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Vl(n) {
    function r(B, V) {
      if (n) {
        var Y = B.deletions;
        Y === null ? (B.deletions = [V], B.flags |= 16) : Y.push(V);
      }
    }
    function u(B, V) {
      if (!n) return null;
      for (; V !== null; ) r(B, V), V = V.sibling;
      return null;
    }
    function f(B, V) {
      for (B = /* @__PURE__ */ new Map(); V !== null; ) V.key !== null ? B.set(V.key, V) : B.set(V.index, V), V = V.sibling;
      return B;
    }
    function h(B, V) {
      return B = el(B, V), B.index = 0, B.sibling = null, B;
    }
    function g(B, V, Y) {
      return B.index = Y, n ? (Y = B.alternate, Y !== null ? (Y = Y.index, Y < V ? (B.flags |= 2, V) : Y) : (B.flags |= 2, V)) : (B.flags |= 1048576, V);
    }
    function x(B) {
      return n && B.alternate === null && (B.flags |= 2), B;
    }
    function O(B, V, Y, ue) {
      return V === null || V.tag !== 6 ? (V = Up(Y, B.mode, ue), V.return = B, V) : (V = h(V, Y), V.return = B, V);
    }
    function P(B, V, Y, ue) {
      var Ne = Y.type;
      return Ne === ke ? le(B, V, Y.props.children, ue, Y.key) : V !== null && (V.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === Pt && Hv(Ne) === V.type) ? (ue = h(V, Y.props), ue.ref = Ul(B, V, Y), ue.return = B, ue) : (ue = cc(Y.type, Y.key, Y.props, null, B.mode, ue), ue.ref = Ul(B, V, Y), ue.return = B, ue);
    }
    function G(B, V, Y, ue) {
      return V === null || V.tag !== 4 || V.stateNode.containerInfo !== Y.containerInfo || V.stateNode.implementation !== Y.implementation ? (V = Hf(Y, B.mode, ue), V.return = B, V) : (V = h(V, Y.children || []), V.return = B, V);
    }
    function le(B, V, Y, ue, Ne) {
      return V === null || V.tag !== 7 ? (V = ho(Y, B.mode, ue, Ne), V.return = B, V) : (V = h(V, Y), V.return = B, V);
    }
    function ce(B, V, Y) {
      if (typeof V == "string" && V !== "" || typeof V == "number") return V = Up("" + V, B.mode, Y), V.return = B, V;
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case oe:
            return Y = cc(V.type, V.key, V.props, null, B.mode, Y), Y.ref = Ul(B, null, V), Y.return = B, Y;
          case Ae:
            return V = Hf(V, B.mode, Y), V.return = B, V;
          case Pt:
            var ue = V._init;
            return ce(B, ue(V._payload), Y);
        }
        if (tr(V) || Ve(V)) return V = ho(V, B.mode, Y, null), V.return = B, V;
        sf(B, V);
      }
      return null;
    }
    function ie(B, V, Y, ue) {
      var Ne = V !== null ? V.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return Ne !== null ? null : O(B, V, "" + Y, ue);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case oe:
            return Y.key === Ne ? P(B, V, Y, ue) : null;
          case Ae:
            return Y.key === Ne ? G(B, V, Y, ue) : null;
          case Pt:
            return Ne = Y._init, ie(
              B,
              V,
              Ne(Y._payload),
              ue
            );
        }
        if (tr(Y) || Ve(Y)) return Ne !== null ? null : le(B, V, Y, ue, null);
        sf(B, Y);
      }
      return null;
    }
    function we(B, V, Y, ue, Ne) {
      if (typeof ue == "string" && ue !== "" || typeof ue == "number") return B = B.get(Y) || null, O(V, B, "" + ue, Ne);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case oe:
            return B = B.get(ue.key === null ? Y : ue.key) || null, P(V, B, ue, Ne);
          case Ae:
            return B = B.get(ue.key === null ? Y : ue.key) || null, G(V, B, ue, Ne);
          case Pt:
            var Ge = ue._init;
            return we(B, V, Y, Ge(ue._payload), Ne);
        }
        if (tr(ue) || Ve(ue)) return B = B.get(Y) || null, le(V, B, ue, Ne, null);
        sf(V, ue);
      }
      return null;
    }
    function Le(B, V, Y, ue) {
      for (var Ne = null, Ge = null, Qe = V, et = V = 0, or = null; Qe !== null && et < Y.length; et++) {
        Qe.index > et ? (or = Qe, Qe = null) : or = Qe.sibling;
        var Bt = ie(B, Qe, Y[et], ue);
        if (Bt === null) {
          Qe === null && (Qe = or);
          break;
        }
        n && Qe && Bt.alternate === null && r(B, Qe), V = g(Bt, V, et), Ge === null ? Ne = Bt : Ge.sibling = Bt, Ge = Bt, Qe = or;
      }
      if (et === Y.length) return u(B, Qe), hn && Pl(B, et), Ne;
      if (Qe === null) {
        for (; et < Y.length; et++) Qe = ce(B, Y[et], ue), Qe !== null && (V = g(Qe, V, et), Ge === null ? Ne = Qe : Ge.sibling = Qe, Ge = Qe);
        return hn && Pl(B, et), Ne;
      }
      for (Qe = f(B, Qe); et < Y.length; et++) or = we(Qe, B, et, Y[et], ue), or !== null && (n && or.alternate !== null && Qe.delete(or.key === null ? et : or.key), V = g(or, V, et), Ge === null ? Ne = or : Ge.sibling = or, Ge = or);
      return n && Qe.forEach(function(rl) {
        return r(B, rl);
      }), hn && Pl(B, et), Ne;
    }
    function ze(B, V, Y, ue) {
      var Ne = Ve(Y);
      if (typeof Ne != "function") throw Error(c(150));
      if (Y = Ne.call(Y), Y == null) throw Error(c(151));
      for (var Ge = Ne = null, Qe = V, et = V = 0, or = null, Bt = Y.next(); Qe !== null && !Bt.done; et++, Bt = Y.next()) {
        Qe.index > et ? (or = Qe, Qe = null) : or = Qe.sibling;
        var rl = ie(B, Qe, Bt.value, ue);
        if (rl === null) {
          Qe === null && (Qe = or);
          break;
        }
        n && Qe && rl.alternate === null && r(B, Qe), V = g(rl, V, et), Ge === null ? Ne = rl : Ge.sibling = rl, Ge = rl, Qe = or;
      }
      if (Bt.done) return u(
        B,
        Qe
      ), hn && Pl(B, et), Ne;
      if (Qe === null) {
        for (; !Bt.done; et++, Bt = Y.next()) Bt = ce(B, Bt.value, ue), Bt !== null && (V = g(Bt, V, et), Ge === null ? Ne = Bt : Ge.sibling = Bt, Ge = Bt);
        return hn && Pl(B, et), Ne;
      }
      for (Qe = f(B, Qe); !Bt.done; et++, Bt = Y.next()) Bt = we(Qe, B, et, Bt.value, ue), Bt !== null && (n && Bt.alternate !== null && Qe.delete(Bt.key === null ? et : Bt.key), V = g(Bt, V, et), Ge === null ? Ne = Bt : Ge.sibling = Bt, Ge = Bt);
      return n && Qe.forEach(function(Rm) {
        return r(B, Rm);
      }), hn && Pl(B, et), Ne;
    }
    function On(B, V, Y, ue) {
      if (typeof Y == "object" && Y !== null && Y.type === ke && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case oe:
            e: {
              for (var Ne = Y.key, Ge = V; Ge !== null; ) {
                if (Ge.key === Ne) {
                  if (Ne = Y.type, Ne === ke) {
                    if (Ge.tag === 7) {
                      u(B, Ge.sibling), V = h(Ge, Y.props.children), V.return = B, B = V;
                      break e;
                    }
                  } else if (Ge.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === Pt && Hv(Ne) === Ge.type) {
                    u(B, Ge.sibling), V = h(Ge, Y.props), V.ref = Ul(B, Ge, Y), V.return = B, B = V;
                    break e;
                  }
                  u(B, Ge);
                  break;
                } else r(B, Ge);
                Ge = Ge.sibling;
              }
              Y.type === ke ? (V = ho(Y.props.children, B.mode, ue, Y.key), V.return = B, B = V) : (ue = cc(Y.type, Y.key, Y.props, null, B.mode, ue), ue.ref = Ul(B, V, Y), ue.return = B, B = ue);
            }
            return x(B);
          case Ae:
            e: {
              for (Ge = Y.key; V !== null; ) {
                if (V.key === Ge) if (V.tag === 4 && V.stateNode.containerInfo === Y.containerInfo && V.stateNode.implementation === Y.implementation) {
                  u(B, V.sibling), V = h(V, Y.children || []), V.return = B, B = V;
                  break e;
                } else {
                  u(B, V);
                  break;
                }
                else r(B, V);
                V = V.sibling;
              }
              V = Hf(Y, B.mode, ue), V.return = B, B = V;
            }
            return x(B);
          case Pt:
            return Ge = Y._init, On(B, V, Ge(Y._payload), ue);
        }
        if (tr(Y)) return Le(B, V, Y, ue);
        if (Ve(Y)) return ze(B, V, Y, ue);
        sf(B, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, V !== null && V.tag === 6 ? (u(B, V.sibling), V = h(V, Y), V.return = B, B = V) : (u(B, V), V = Up(Y, B.mode, ue), V.return = B, B = V), x(B)) : u(B, V);
    }
    return On;
  }
  var Dn = Vl(!0), Te = Vl(!1), Ti = Fi(null), ii = null, Uu = null, op = null;
  function lp() {
    op = Uu = ii = null;
  }
  function up(n) {
    var r = Ti.current;
    sn(Ti), n._currentValue = r;
  }
  function sp(n, r, u) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === u) break;
      n = n.return;
    }
  }
  function Cn(n, r) {
    ii = n, op = Uu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Bn = !0), n.firstContext = null);
  }
  function Hi(n) {
    var r = n._currentValue;
    if (op !== n) if (n = { context: n, memoizedValue: r, next: null }, Uu === null) {
      if (ii === null) throw Error(c(308));
      Uu = n, ii.dependencies = { lanes: 0, firstContext: n };
    } else Uu = Uu.next = n;
    return r;
  }
  var zl = null;
  function cp(n) {
    zl === null ? zl = [n] : zl.push(n);
  }
  function fp(n, r, u, f) {
    var h = r.interleaved;
    return h === null ? (u.next = u, cp(r)) : (u.next = h.next, h.next = u), r.interleaved = u, xi(n, f);
  }
  function xi(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; ) n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var Ri = !1;
  function dp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Iv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function uo(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Go(n, r, u) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (f = f.shared, (_t & 2) !== 0) {
      var h = f.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), f.pending = r, xi(n, u);
    }
    return h = f.interleaved, h === null ? (r.next = r, cp(f)) : (r.next = h.next, h.next = r), f.interleaved = r, xi(n, u);
  }
  function cf(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, u |= f, r.lanes = u, Ja(n, u);
    }
  }
  function Yv(n, r) {
    var u = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, u === f)) {
      var h = null, g = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var x = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          g === null ? h = g = x : g = g.next = x, u = u.next;
        } while (u !== null);
        g === null ? h = g = r : g = g.next = r;
      } else h = g = r;
      u = { baseState: f.baseState, firstBaseUpdate: h, lastBaseUpdate: g, shared: f.shared, effects: f.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function Ps(n, r, u, f) {
    var h = n.updateQueue;
    Ri = !1;
    var g = h.firstBaseUpdate, x = h.lastBaseUpdate, O = h.shared.pending;
    if (O !== null) {
      h.shared.pending = null;
      var P = O, G = P.next;
      P.next = null, x === null ? g = G : x.next = G, x = P;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, O = le.lastBaseUpdate, O !== x && (O === null ? le.firstBaseUpdate = G : O.next = G, le.lastBaseUpdate = P));
    }
    if (g !== null) {
      var ce = h.baseState;
      x = 0, le = G = P = null, O = g;
      do {
        var ie = O.lane, we = O.eventTime;
        if ((f & ie) === ie) {
          le !== null && (le = le.next = {
            eventTime: we,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var Le = n, ze = O;
            switch (ie = r, we = u, ze.tag) {
              case 1:
                if (Le = ze.payload, typeof Le == "function") {
                  ce = Le.call(we, ce, ie);
                  break e;
                }
                ce = Le;
                break e;
              case 3:
                Le.flags = Le.flags & -65537 | 128;
              case 0:
                if (Le = ze.payload, ie = typeof Le == "function" ? Le.call(we, ce, ie) : Le, ie == null) break e;
                ce = me({}, ce, ie);
                break e;
              case 2:
                Ri = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (n.flags |= 64, ie = h.effects, ie === null ? h.effects = [O] : ie.push(O));
        } else we = { eventTime: we, lane: ie, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, le === null ? (G = le = we, P = ce) : le = le.next = we, x |= ie;
        if (O = O.next, O === null) {
          if (O = h.shared.pending, O === null) break;
          ie = O, O = ie.next, ie.next = null, h.lastBaseUpdate = ie, h.shared.pending = null;
        }
      } while (!0);
      if (le === null && (P = ce), h.baseState = P, h.firstBaseUpdate = G, h.lastBaseUpdate = le, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          x |= h.lane, h = h.next;
        while (h !== r);
      } else g === null && (h.shared.lanes = 0);
      ja |= x, n.lanes = x, n.memoizedState = ce;
    }
  }
  function pp(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var f = n[r], h = f.callback;
      if (h !== null) {
        if (f.callback = null, f = u, typeof h != "function") throw Error(c(191, h));
        h.call(f);
      }
    }
  }
  var Us = {}, Ua = Fi(Us), Vs = Fi(Us), zs = Fi(Us);
  function Fl(n) {
    if (n === Us) throw Error(c(174));
    return n;
  }
  function hp(n, r) {
    switch (Be(zs, r), Be(Vs, n), Be(Ua, Us), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gi(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gi(r, n);
    }
    sn(Ua), Be(Ua, r);
  }
  function jl() {
    sn(Ua), sn(Vs), sn(zs);
  }
  function Wv(n) {
    Fl(zs.current);
    var r = Fl(Ua.current), u = gi(r, n.type);
    r !== u && (Be(Vs, n), Be(Ua, u));
  }
  function ff(n) {
    Vs.current === n && (sn(Ua), sn(Vs));
  }
  var En = Fi(0);
  function df(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var u = r.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Fs = [];
  function Ye() {
    for (var n = 0; n < Fs.length; n++) Fs[n]._workInProgressVersionPrimary = null;
    Fs.length = 0;
  }
  var Ct = Oe.ReactCurrentDispatcher, Ft = Oe.ReactCurrentBatchConfig, en = 0, jt = null, jn = null, ir = null, pf = !1, js = !1, Bl = 0, re = 0;
  function Ut() {
    throw Error(c(321));
  }
  function Xe(n, r) {
    if (r === null) return !1;
    for (var u = 0; u < r.length && u < n.length; u++) if (!ca(n[u], r[u])) return !1;
    return !0;
  }
  function Ko(n, r, u, f, h, g) {
    if (en = g, jt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ct.current = n === null || n.memoizedState === null ? _f : $s, n = u(f, h), js) {
      g = 0;
      do {
        if (js = !1, Bl = 0, 25 <= g) throw Error(c(301));
        g += 1, ir = jn = null, r.updateQueue = null, Ct.current = kf, n = u(f, h);
      } while (js);
    }
    if (Ct.current = $l, r = jn !== null && jn.next !== null, en = 0, ir = jn = jt = null, pf = !1, r) throw Error(c(300));
    return n;
  }
  function da() {
    var n = Bl !== 0;
    return Bl = 0, n;
  }
  function _r() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ir === null ? jt.memoizedState = ir = n : ir = ir.next = n, ir;
  }
  function _n() {
    if (jn === null) {
      var n = jt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = jn.next;
    var r = ir === null ? jt.memoizedState : ir.next;
    if (r !== null) ir = r, jn = n;
    else {
      if (n === null) throw Error(c(310));
      jn = n, n = { memoizedState: jn.memoizedState, baseState: jn.baseState, baseQueue: jn.baseQueue, queue: jn.queue, next: null }, ir === null ? jt.memoizedState = ir = n : ir = ir.next = n;
    }
    return ir;
  }
  function so(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Qo(n) {
    var r = _n(), u = r.queue;
    if (u === null) throw Error(c(311));
    u.lastRenderedReducer = n;
    var f = jn, h = f.baseQueue, g = u.pending;
    if (g !== null) {
      if (h !== null) {
        var x = h.next;
        h.next = g.next, g.next = x;
      }
      f.baseQueue = h = g, u.pending = null;
    }
    if (h !== null) {
      g = h.next, f = f.baseState;
      var O = x = null, P = null, G = g;
      do {
        var le = G.lane;
        if ((en & le) === le) P !== null && (P = P.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), f = G.hasEagerState ? G.eagerState : n(f, G.action);
        else {
          var ce = {
            lane: le,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          };
          P === null ? (O = P = ce, x = f) : P = P.next = ce, jt.lanes |= le, ja |= le;
        }
        G = G.next;
      } while (G !== null && G !== g);
      P === null ? x = f : P.next = O, ca(f, r.memoizedState) || (Bn = !0), r.memoizedState = f, r.baseState = x, r.baseQueue = P, u.lastRenderedState = f;
    }
    if (n = u.interleaved, n !== null) {
      h = n;
      do
        g = h.lane, jt.lanes |= g, ja |= g, h = h.next;
      while (h !== n);
    } else h === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function Hl(n) {
    var r = _n(), u = r.queue;
    if (u === null) throw Error(c(311));
    u.lastRenderedReducer = n;
    var f = u.dispatch, h = u.pending, g = r.memoizedState;
    if (h !== null) {
      u.pending = null;
      var x = h = h.next;
      do
        g = n(g, x.action), x = x.next;
      while (x !== h);
      ca(g, r.memoizedState) || (Bn = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), u.lastRenderedState = g;
    }
    return [g, f];
  }
  function hf() {
  }
  function vf(n, r) {
    var u = jt, f = _n(), h = r(), g = !ca(f.memoizedState, h);
    if (g && (f.memoizedState = h, Bn = !0), f = f.queue, Bs(gf.bind(null, u, f, n), [n]), f.getSnapshot !== r || g || ir !== null && ir.memoizedState.tag & 1) {
      if (u.flags |= 2048, Il(9, yf.bind(null, u, f, h, r), void 0, null), Zn === null) throw Error(c(349));
      (en & 30) !== 0 || mf(u, r, h);
    }
    return h;
  }
  function mf(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = jt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, jt.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function yf(n, r, u, f) {
    r.value = u, r.getSnapshot = f, Sf(r) && Cf(n);
  }
  function gf(n, r, u) {
    return u(function() {
      Sf(r) && Cf(n);
    });
  }
  function Sf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !ca(n, u);
    } catch {
      return !0;
    }
  }
  function Cf(n) {
    var r = xi(n, 1);
    r !== null && Br(r, n, 1, -1);
  }
  function Ef(n) {
    var r = _r();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: so, lastRenderedState: n }, r.queue = n, n = n.dispatch = Wl.bind(null, jt, n), [r.memoizedState, n];
  }
  function Il(n, r, u, f) {
    return n = { tag: n, create: r, destroy: u, deps: f, next: null }, r = jt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, jt.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (f = u.next, u.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function Tf() {
    return _n().memoizedState;
  }
  function Vu(n, r, u, f) {
    var h = _r();
    jt.flags |= n, h.memoizedState = Il(1 | r, u, void 0, f === void 0 ? null : f);
  }
  function zu(n, r, u, f) {
    var h = _n();
    f = f === void 0 ? null : f;
    var g = void 0;
    if (jn !== null) {
      var x = jn.memoizedState;
      if (g = x.destroy, f !== null && Xe(f, x.deps)) {
        h.memoizedState = Il(r, u, g, f);
        return;
      }
    }
    jt.flags |= n, h.memoizedState = Il(1 | r, u, g, f);
  }
  function xf(n, r) {
    return Vu(8390656, 8, n, r);
  }
  function Bs(n, r) {
    return zu(2048, 8, n, r);
  }
  function Rf(n, r) {
    return zu(4, 2, n, r);
  }
  function Hs(n, r) {
    return zu(4, 4, n, r);
  }
  function Yl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function wf(n, r, u) {
    return u = u != null ? u.concat([n]) : null, zu(4, 4, Yl.bind(null, r, n), u);
  }
  function Is() {
  }
  function bf(n, r) {
    var u = _n();
    r = r === void 0 ? null : r;
    var f = u.memoizedState;
    return f !== null && r !== null && Xe(r, f[1]) ? f[0] : (u.memoizedState = [n, r], n);
  }
  function Df(n, r) {
    var u = _n();
    r = r === void 0 ? null : r;
    var f = u.memoizedState;
    return f !== null && r !== null && Xe(r, f[1]) ? f[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function vp(n, r, u) {
    return (en & 21) === 0 ? (n.baseState && (n.baseState = !1, Bn = !0), n.memoizedState = u) : (ca(u, r) || (u = yu(), jt.lanes |= u, ja |= u, n.baseState = !0), r);
  }
  function Ys(n, r) {
    var u = zt;
    zt = u !== 0 && 4 > u ? u : 4, n(!0);
    var f = Ft.transition;
    Ft.transition = {};
    try {
      n(!1), r();
    } finally {
      zt = u, Ft.transition = f;
    }
  }
  function mp() {
    return _n().memoizedState;
  }
  function Ws(n, r, u) {
    var f = Ba(n);
    if (u = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null }, ai(n)) $v(r, u);
    else if (u = fp(n, r, u, f), u !== null) {
      var h = Yn();
      Br(u, n, f, h), rn(u, r, f);
    }
  }
  function Wl(n, r, u) {
    var f = Ba(n), h = { lane: f, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (ai(n)) $v(r, h);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null)) try {
        var x = r.lastRenderedState, O = g(x, u);
        if (h.hasEagerState = !0, h.eagerState = O, ca(O, x)) {
          var P = r.interleaved;
          P === null ? (h.next = h, cp(r)) : (h.next = P.next, P.next = h), r.interleaved = h;
          return;
        }
      } catch {
      } finally {
      }
      u = fp(n, r, h, f), u !== null && (h = Yn(), Br(u, n, f, h), rn(u, r, f));
    }
  }
  function ai(n) {
    var r = n.alternate;
    return n === jt || r !== null && r === jt;
  }
  function $v(n, r) {
    js = pf = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function rn(n, r, u) {
    if ((u & 4194240) !== 0) {
      var f = r.lanes;
      f &= n.pendingLanes, u |= f, r.lanes = u, Ja(n, u);
    }
  }
  var $l = { readContext: Hi, useCallback: Ut, useContext: Ut, useEffect: Ut, useImperativeHandle: Ut, useInsertionEffect: Ut, useLayoutEffect: Ut, useMemo: Ut, useReducer: Ut, useRef: Ut, useState: Ut, useDebugValue: Ut, useDeferredValue: Ut, useTransition: Ut, useMutableSource: Ut, useSyncExternalStore: Ut, useId: Ut, unstable_isNewReconciler: !1 }, _f = { readContext: Hi, useCallback: function(n, r) {
    return _r().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Hi, useEffect: xf, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Vu(
      4194308,
      4,
      Yl.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return Vu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Vu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = _r();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var f = _r();
    return r = u !== void 0 ? u(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = Ws.bind(null, jt, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = _r();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ef, useDebugValue: Is, useDeferredValue: function(n) {
    return _r().memoizedState = n;
  }, useTransition: function() {
    var n = Ef(!1), r = n[0];
    return n = Ys.bind(null, n[1]), _r().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var f = jt, h = _r();
    if (hn) {
      if (u === void 0) throw Error(c(407));
      u = u();
    } else {
      if (u = r(), Zn === null) throw Error(c(349));
      (en & 30) !== 0 || mf(f, r, u);
    }
    h.memoizedState = u;
    var g = { value: u, getSnapshot: r };
    return h.queue = g, xf(gf.bind(
      null,
      f,
      g,
      n
    ), [n]), f.flags |= 2048, Il(9, yf.bind(null, f, g, u, r), void 0, null), u;
  }, useId: function() {
    var n = _r(), r = Zn.identifierPrefix;
    if (hn) {
      var u = Pa, f = Na;
      u = (f & ~(1 << 32 - Pr(f) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = Bl++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else u = re++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $s = {
    readContext: Hi,
    useCallback: bf,
    useContext: Hi,
    useEffect: Bs,
    useImperativeHandle: wf,
    useInsertionEffect: Rf,
    useLayoutEffect: Hs,
    useMemo: Df,
    useReducer: Qo,
    useRef: Tf,
    useState: function() {
      return Qo(so);
    },
    useDebugValue: Is,
    useDeferredValue: function(n) {
      var r = _n();
      return vp(r, jn.memoizedState, n);
    },
    useTransition: function() {
      var n = Qo(so)[0], r = _n().memoizedState;
      return [n, r];
    },
    useMutableSource: hf,
    useSyncExternalStore: vf,
    useId: mp,
    unstable_isNewReconciler: !1
  }, kf = { readContext: Hi, useCallback: bf, useContext: Hi, useEffect: Bs, useImperativeHandle: wf, useInsertionEffect: Rf, useLayoutEffect: Hs, useMemo: Df, useReducer: Hl, useRef: Tf, useState: function() {
    return Hl(so);
  }, useDebugValue: Is, useDeferredValue: function(n) {
    var r = _n();
    return jn === null ? r.memoizedState = n : vp(r, jn.memoizedState, n);
  }, useTransition: function() {
    var n = Hl(so)[0], r = _n().memoizedState;
    return [n, r];
  }, useMutableSource: hf, useSyncExternalStore: vf, useId: mp, unstable_isNewReconciler: !1 };
  function pa(n, r) {
    if (n && n.defaultProps) {
      r = me({}, r), n = n.defaultProps;
      for (var u in n) r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  function yp(n, r, u, f) {
    r = n.memoizedState, u = u(f, r), u = u == null ? r : me({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Mf = { isMounted: function(n) {
    return (n = n._reactInternals) ? lt(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var f = Yn(), h = Ba(n), g = uo(f, h);
    g.payload = r, u != null && (g.callback = u), r = Go(n, g, h), r !== null && (Br(r, n, h, f), cf(r, n, h));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var f = Yn(), h = Ba(n), g = uo(f, h);
    g.tag = 1, g.payload = r, u != null && (g.callback = u), r = Go(n, g, h), r !== null && (Br(r, n, h, f), cf(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = Yn(), f = Ba(n), h = uo(u, f);
    h.tag = 2, r != null && (h.callback = r), r = Go(n, h, f), r !== null && (Br(r, n, f, u), cf(r, n, f));
  } };
  function Gv(n, r, u, f, h, g, x) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, g, x) : r.prototype && r.prototype.isPureReactComponent ? !ws(u, f) || !ws(h, g) : !0;
  }
  function Of(n, r, u) {
    var f = !1, h = Dr, g = r.contextType;
    return typeof g == "object" && g !== null ? g = Hi(g) : (h = zn(r) ? ei : xn.current, f = r.contextTypes, g = (f = f != null) ? ti(n, h) : Dr), r = new r(u, g), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Mf, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function Kv(n, r, u, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, f), r.state !== n && Mf.enqueueReplaceState(r, r.state, null);
  }
  function Gs(n, r, u, f) {
    var h = n.stateNode;
    h.props = u, h.state = n.memoizedState, h.refs = {}, dp(n);
    var g = r.contextType;
    typeof g == "object" && g !== null ? h.context = Hi(g) : (g = zn(r) ? ei : xn.current, h.context = ti(n, g)), h.state = n.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (yp(n, r, g, u), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && Mf.enqueueReplaceState(h, h.state, null), Ps(n, u, h, f), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Gl(n, r) {
    try {
      var u = "", f = r;
      do
        u += yt(f), f = f.return;
      while (f);
      var h = u;
    } catch (g) {
      h = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: n, source: r, stack: h, digest: null };
  }
  function gp(n, r, u) {
    return { value: n, source: null, stack: u ?? null, digest: r ?? null };
  }
  function Sp(n, r) {
    try {
      console.error(r.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var Af = typeof WeakMap == "function" ? WeakMap : Map;
  function Qv(n, r, u) {
    u = uo(-1, u), u.tag = 3, u.payload = { element: null };
    var f = r.value;
    return u.callback = function() {
      Yu || (Yu = !0, ql = f), Sp(n, r);
    }, u;
  }
  function Cp(n, r, u) {
    u = uo(-1, u), u.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = r.value;
      u.payload = function() {
        return f(h);
      }, u.callback = function() {
        Sp(n, r);
      };
    }
    var g = n.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (u.callback = function() {
      Sp(n, r), typeof f != "function" && (Zo === null ? Zo = /* @__PURE__ */ new Set([this]) : Zo.add(this));
      var x = r.stack;
      this.componentDidCatch(r.value, { componentStack: x !== null ? x : "" });
    }), u;
  }
  function Ep(n, r, u) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new Af();
      var h = /* @__PURE__ */ new Set();
      f.set(r, h);
    } else h = f.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(r, h));
    h.has(u) || (h.add(u), n = Wg.bind(null, n, r, u), r.then(n, n));
  }
  function qv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function qo(n, r, u, f, h) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = uo(-1, 1), r.tag = 2, Go(u, r, 1))), u.lanes |= 1), n) : (n.flags |= 65536, n.lanes = h, n);
  }
  var Ks = Oe.ReactCurrentOwner, Bn = !1;
  function pr(n, r, u, f) {
    r.child = n === null ? Te(r, null, u, f) : Dn(r, n.child, u, f);
  }
  function oi(n, r, u, f, h) {
    u = u.render;
    var g = r.ref;
    return Cn(r, h), f = Ko(n, r, u, f, g, h), u = da(), n !== null && !Bn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Yi(n, r, h)) : (hn && u && of(r), r.flags |= 1, pr(n, r, f, h), r.child);
  }
  function Kl(n, r, u, f, h) {
    if (n === null) {
      var g = u.type;
      return typeof g == "function" && !Pp(g) && g.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = g, ct(n, r, g, f, h)) : (n = cc(u.type, null, f, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, (n.lanes & h) === 0) {
      var x = g.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ws, u(x, f) && n.ref === r.ref) return Yi(n, r, h);
    }
    return r.flags |= 1, n = el(g, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ct(n, r, u, f, h) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (ws(g, f) && n.ref === r.ref) if (Bn = !1, r.pendingProps = f = g, (n.lanes & h) !== 0) (n.flags & 131072) !== 0 && (Bn = !0);
      else return r.lanes = n.lanes, Yi(n, r, h);
    }
    return Xv(n, r, u, f, h);
  }
  function Qs(n, r, u) {
    var f = r.pendingProps, h = f.children, g = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Be(Bu, wi), wi |= u;
    else {
      if ((u & 1073741824) === 0) return n = g !== null ? g.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Be(Bu, wi), wi |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = g !== null ? g.baseLanes : u, Be(Bu, wi), wi |= f;
    }
    else g !== null ? (f = g.baseLanes | u, r.memoizedState = null) : f = u, Be(Bu, wi), wi |= f;
    return pr(n, r, h, u), r.child;
  }
  function Tp(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Xv(n, r, u, f, h) {
    var g = zn(u) ? ei : xn.current;
    return g = ti(r, g), Cn(r, h), u = Ko(n, r, u, f, g, h), f = da(), n !== null && !Bn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Yi(n, r, h)) : (hn && f && of(r), r.flags |= 1, pr(n, r, u, h), r.child);
  }
  function Zv(n, r, u, f, h) {
    if (zn(u)) {
      var g = !0;
      rr(r);
    } else g = !1;
    if (Cn(r, h), r.stateNode === null) Ii(n, r), Of(r, u, f), Gs(r, u, f, h), f = !0;
    else if (n === null) {
      var x = r.stateNode, O = r.memoizedProps;
      x.props = O;
      var P = x.context, G = u.contextType;
      typeof G == "object" && G !== null ? G = Hi(G) : (G = zn(u) ? ei : xn.current, G = ti(r, G));
      var le = u.getDerivedStateFromProps, ce = typeof le == "function" || typeof x.getSnapshotBeforeUpdate == "function";
      ce || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (O !== f || P !== G) && Kv(r, x, f, G), Ri = !1;
      var ie = r.memoizedState;
      x.state = ie, Ps(r, f, x, h), P = r.memoizedState, O !== f || ie !== P || qn.current || Ri ? (typeof le == "function" && (yp(r, u, le, f), P = r.memoizedState), (O = Ri || Gv(r, u, O, f, ie, P, G)) ? (ce || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = P), x.props = f, x.state = P, x.context = G, f = O) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      x = r.stateNode, Iv(n, r), O = r.memoizedProps, G = r.type === r.elementType ? O : pa(r.type, O), x.props = G, ce = r.pendingProps, ie = x.context, P = u.contextType, typeof P == "object" && P !== null ? P = Hi(P) : (P = zn(u) ? ei : xn.current, P = ti(r, P));
      var we = u.getDerivedStateFromProps;
      (le = typeof we == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (O !== ce || ie !== P) && Kv(r, x, f, P), Ri = !1, ie = r.memoizedState, x.state = ie, Ps(r, f, x, h);
      var Le = r.memoizedState;
      O !== ce || ie !== Le || qn.current || Ri ? (typeof we == "function" && (yp(r, u, we, f), Le = r.memoizedState), (G = Ri || Gv(r, u, G, f, ie, Le, P) || !1) ? (le || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(f, Le, P), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(f, Le, P)), typeof x.componentDidUpdate == "function" && (r.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = Le), x.props = f, x.state = Le, x.context = P, f = G) : (typeof x.componentDidUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return qs(n, r, u, f, g, h);
  }
  function qs(n, r, u, f, h, g) {
    Tp(n, r);
    var x = (r.flags & 128) !== 0;
    if (!f && !x) return h && rf(r, u, !1), Yi(n, r, g);
    f = r.stateNode, Ks.current = r;
    var O = x && typeof u.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && x ? (r.child = Dn(r, n.child, null, g), r.child = Dn(r, null, O, g)) : pr(n, r, O, g), r.memoizedState = f.state, h && rf(r, u, !0), r.child;
  }
  function Fu(n) {
    var r = n.stateNode;
    r.pendingContext ? Fv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Fv(n, r.context, !1), hp(n, r.containerInfo);
  }
  function Jv(n, r, u, f, h) {
    return $o(), lo(h), r.flags |= 256, pr(n, r, u, f), r.child;
  }
  var Lf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Nf(n, r, u) {
    var f = r.pendingProps, h = En.current, g = !1, x = (r.flags & 128) !== 0, O;
    if ((O = x) || (O = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), O ? (g = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), Be(En, h & 1), n === null)
      return ap(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (x = f.children, n = f.fallback, g ? (f = r.mode, g = r.child, x = { mode: "hidden", children: x }, (f & 1) === 0 && g !== null ? (g.childLanes = 0, g.pendingProps = x) : g = tl(x, f, 0, null), n = ho(n, f, u, null), g.return = r, n.return = r, g.sibling = n, r.child = g, r.child.memoizedState = xp(u), r.memoizedState = Lf, n) : Rp(r, x));
    if (h = n.memoizedState, h !== null && (O = h.dehydrated, O !== null)) return em(n, r, x, f, O, h, u);
    if (g) {
      g = f.fallback, x = r.mode, h = n.child, O = h.sibling;
      var P = { mode: "hidden", children: f.children };
      return (x & 1) === 0 && r.child !== h ? (f = r.child, f.childLanes = 0, f.pendingProps = P, r.deletions = null) : (f = el(h, P), f.subtreeFlags = h.subtreeFlags & 14680064), O !== null ? g = el(O, g) : (g = ho(g, x, u, null), g.flags |= 2), g.return = r, f.return = r, f.sibling = g, r.child = f, f = g, g = r.child, x = n.child.memoizedState, x = x === null ? xp(u) : { baseLanes: x.baseLanes | u, cachePool: null, transitions: x.transitions }, g.memoizedState = x, g.childLanes = n.childLanes & ~u, r.memoizedState = Lf, f;
    }
    return g = n.child, n = g.sibling, f = el(g, { mode: "visible", children: f.children }), (r.mode & 1) === 0 && (f.lanes = u), f.return = r, f.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function Rp(n, r) {
    return r = tl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Xs(n, r, u, f) {
    return f !== null && lo(f), Dn(r, n.child, null, u), n = Rp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function em(n, r, u, f, h, g, x) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, f = gp(Error(c(422))), Xs(n, r, x, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (g = f.fallback, h = r.mode, f = tl({ mode: "visible", children: f.children }, h, 0, null), g = ho(g, h, x, null), g.flags |= 2, f.return = r, g.return = r, f.sibling = g, r.child = f, (r.mode & 1) !== 0 && Dn(r, n.child, null, x), r.child.memoizedState = xp(x), r.memoizedState = Lf, g);
    if ((r.mode & 1) === 0) return Xs(n, r, x, null);
    if (h.data === "$!") {
      if (f = h.nextSibling && h.nextSibling.dataset, f) var O = f.dgst;
      return f = O, g = Error(c(419)), f = gp(g, f, void 0), Xs(n, r, x, f);
    }
    if (O = (x & n.childLanes) !== 0, Bn || O) {
      if (f = Zn, f !== null) {
        switch (x & -x) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = (h & (f.suspendedLanes | x)) !== 0 ? 0 : h, h !== 0 && h !== g.retryLane && (g.retryLane = h, xi(n, h), Br(f, n, h, -1));
      }
      return Np(), f = gp(Error(c(421))), Xs(n, r, x, f);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = $g.bind(null, n), h._reactRetry = r, null) : (n = g.treeContext, ri = Ma(h.nextSibling), ni = r, hn = !0, Bi = null, n !== null && (Fn[ji++] = Na, Fn[ji++] = Pa, Fn[ji++] = Ei, Na = n.id, Pa = n.overflow, Ei = r), r = Rp(r, f.children), r.flags |= 4096, r);
  }
  function wp(n, r, u) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), sp(n.return, r, u);
  }
  function zr(n, r, u, f, h) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: u, tailMode: h } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = f, g.tail = u, g.tailMode = h);
  }
  function Va(n, r, u) {
    var f = r.pendingProps, h = f.revealOrder, g = f.tail;
    if (pr(n, r, f.children, u), f = En.current, (f & 2) !== 0) f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && wp(n, u, r);
        else if (n.tag === 19) wp(n, u, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      f &= 1;
    }
    if (Be(En, f), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (u = r.child, h = null; u !== null; ) n = u.alternate, n !== null && df(n) === null && (h = u), u = u.sibling;
        u = h, u === null ? (h = r.child, r.child = null) : (h = u.sibling, u.sibling = null), zr(r, !1, h, u, g);
        break;
      case "backwards":
        for (u = null, h = r.child, r.child = null; h !== null; ) {
          if (n = h.alternate, n !== null && df(n) === null) {
            r.child = h;
            break;
          }
          n = h.sibling, h.sibling = u, u = h, h = n;
        }
        zr(r, !0, u, null, g);
        break;
      case "together":
        zr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ii(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Yi(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), ja |= r.lanes, (u & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, u = el(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; ) n = n.sibling, u = u.sibling = el(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function Zs(n, r, u) {
    switch (r.tag) {
      case 3:
        Fu(r), $o();
        break;
      case 5:
        Wv(r);
        break;
      case 1:
        zn(r.type) && rr(r);
        break;
      case 4:
        hp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, h = r.memoizedProps.value;
        Be(Ti, f._currentValue), f._currentValue = h;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (Be(En, En.current & 1), r.flags |= 128, null) : (u & r.child.childLanes) !== 0 ? Nf(n, r, u) : (Be(En, En.current & 1), n = Yi(n, r, u), n !== null ? n.sibling : null);
        Be(En, En.current & 1);
        break;
      case 19:
        if (f = (u & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (f) return Va(n, r, u);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), Be(En, En.current), f) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Qs(n, r, u);
    }
    return Yi(n, r, u);
  }
  var Wi, Hn, tm, nm;
  Wi = function(n, r) {
    for (var u = r.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6) n.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === r) break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === r) return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, Hn = function() {
  }, tm = function(n, r, u, f) {
    var h = n.memoizedProps;
    if (h !== f) {
      n = r.stateNode, Fl(Ua.current);
      var g = null;
      switch (u) {
        case "input":
          h = ur(n, h), f = ur(n, f), g = [];
          break;
        case "select":
          h = me({}, h, { value: void 0 }), f = me({}, f, { value: void 0 }), g = [];
          break;
        case "textarea":
          h = Kn(n, h), f = Kn(n, f), g = [];
          break;
        default:
          typeof h.onClick != "function" && typeof f.onClick == "function" && (n.onclick = jo);
      }
      cn(u, f);
      var x;
      u = null;
      for (G in h) if (!f.hasOwnProperty(G) && h.hasOwnProperty(G) && h[G] != null) if (G === "style") {
        var O = h[G];
        for (x in O) O.hasOwnProperty(x) && (u || (u = {}), u[x] = "");
      } else G !== "dangerouslySetInnerHTML" && G !== "children" && G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && G !== "autoFocus" && (y.hasOwnProperty(G) ? g || (g = []) : (g = g || []).push(G, null));
      for (G in f) {
        var P = f[G];
        if (O = h != null ? h[G] : void 0, f.hasOwnProperty(G) && P !== O && (P != null || O != null)) if (G === "style") if (O) {
          for (x in O) !O.hasOwnProperty(x) || P && P.hasOwnProperty(x) || (u || (u = {}), u[x] = "");
          for (x in P) P.hasOwnProperty(x) && O[x] !== P[x] && (u || (u = {}), u[x] = P[x]);
        } else u || (g || (g = []), g.push(
          G,
          u
        )), u = P;
        else G === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, O = O ? O.__html : void 0, P != null && O !== P && (g = g || []).push(G, P)) : G === "children" ? typeof P != "string" && typeof P != "number" || (g = g || []).push(G, "" + P) : G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && (y.hasOwnProperty(G) ? (P != null && G === "onScroll" && Wt("scroll", n), g || O === P || (g = [])) : (g = g || []).push(G, P));
      }
      u && (g = g || []).push("style", u);
      var G = g;
      (r.updateQueue = G) && (r.flags |= 4);
    }
  }, nm = function(n, r, u, f) {
    u !== f && (r.flags |= 4);
  };
  function Js(n, r) {
    if (!hn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var u = null; r !== null; ) r.alternate !== null && (u = r), r = r.sibling;
        u === null ? n.tail = null : u.sibling = null;
        break;
      case "collapsed":
        u = n.tail;
        for (var f = null; u !== null; ) u.alternate !== null && (f = u), u = u.sibling;
        f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
    }
  }
  function ar(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, u = 0, f = 0;
    if (r) for (var h = n.child; h !== null; ) u |= h.lanes | h.childLanes, f |= h.subtreeFlags & 14680064, f |= h.flags & 14680064, h.return = n, h = h.sibling;
    else for (h = n.child; h !== null; ) u |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= f, n.childLanes = u, r;
  }
  function rm(n, r, u) {
    var f = r.pendingProps;
    switch (lf(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ar(r), null;
      case 1:
        return zn(r.type) && Nu(), ar(r), null;
      case 3:
        return f = r.stateNode, jl(), sn(qn), sn(xn), Ye(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (uf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Bi !== null && (Xl(Bi), Bi = null))), Hn(n, r), ar(r), null;
      case 5:
        ff(r);
        var h = Fl(zs.current);
        if (u = r.type, n !== null && r.stateNode != null) tm(n, r, u, f, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null) throw Error(c(166));
            return ar(r), null;
          }
          if (n = Fl(Ua.current), uf(r)) {
            f = r.stateNode, u = r.type;
            var g = r.memoizedProps;
            switch (f[Oa] = r, f[Os] = g, n = (r.mode & 1) !== 0, u) {
              case "dialog":
                Wt("cancel", f), Wt("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                Wt("load", f);
                break;
              case "video":
              case "audio":
                for (h = 0; h < _s.length; h++) Wt(_s[h], f);
                break;
              case "source":
                Wt("error", f);
                break;
              case "img":
              case "image":
              case "link":
                Wt(
                  "error",
                  f
                ), Wt("load", f);
                break;
              case "details":
                Wt("toggle", f);
                break;
              case "input":
                $n(f, g), Wt("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!g.multiple }, Wt("invalid", f);
                break;
              case "textarea":
                Rr(f, g), Wt("invalid", f);
            }
            cn(u, g), h = null;
            for (var x in g) if (g.hasOwnProperty(x)) {
              var O = g[x];
              x === "children" ? typeof O == "string" ? f.textContent !== O && (g.suppressHydrationWarning !== !0 && Jc(f.textContent, O, n), h = ["children", O]) : typeof O == "number" && f.textContent !== "" + O && (g.suppressHydrationWarning !== !0 && Jc(
                f.textContent,
                O,
                n
              ), h = ["children", "" + O]) : y.hasOwnProperty(x) && O != null && x === "onScroll" && Wt("scroll", f);
            }
            switch (u) {
              case "input":
                Pn(f), Ca(f, g, !0);
                break;
              case "textarea":
                Pn(f), Un(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (f.onclick = jo);
            }
            f = h, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            x = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = wr(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = x.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = x.createElement(u, { is: f.is }) : (n = x.createElement(u), u === "select" && (x = n, f.multiple ? x.multiple = !0 : f.size && (x.size = f.size))) : n = x.createElementNS(n, u), n[Oa] = r, n[Os] = f, Wi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (x = nr(u, f), u) {
                case "dialog":
                  Wt("cancel", n), Wt("close", n), h = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Wt("load", n), h = f;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < _s.length; h++) Wt(_s[h], n);
                  h = f;
                  break;
                case "source":
                  Wt("error", n), h = f;
                  break;
                case "img":
                case "image":
                case "link":
                  Wt(
                    "error",
                    n
                  ), Wt("load", n), h = f;
                  break;
                case "details":
                  Wt("toggle", n), h = f;
                  break;
                case "input":
                  $n(n, f), h = ur(n, f), Wt("invalid", n);
                  break;
                case "option":
                  h = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, h = me({}, f, { value: void 0 }), Wt("invalid", n);
                  break;
                case "textarea":
                  Rr(n, f), h = Kn(n, f), Wt("invalid", n);
                  break;
                default:
                  h = f;
              }
              cn(u, h), O = h;
              for (g in O) if (O.hasOwnProperty(g)) {
                var P = O[g];
                g === "style" ? an(n, P) : g === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && Ea(n, P)) : g === "children" ? typeof P == "string" ? (u !== "textarea" || P !== "") && ye(n, P) : typeof P == "number" && ye(n, "" + P) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (y.hasOwnProperty(g) ? P != null && g === "onScroll" && Wt("scroll", n) : P != null && pe(n, g, P, x));
              }
              switch (u) {
                case "input":
                  Pn(n), Ca(n, f, !1);
                  break;
                case "textarea":
                  Pn(n), Un(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + ht(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, g = f.value, g != null ? wn(n, !!f.multiple, g, !1) : f.defaultValue != null && wn(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = jo);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return ar(r), null;
      case 6:
        if (n && r.stateNode != null) nm(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null) throw Error(c(166));
          if (u = Fl(zs.current), Fl(Ua.current), uf(r)) {
            if (f = r.stateNode, u = r.memoizedProps, f[Oa] = r, (g = f.nodeValue !== u) && (n = ni, n !== null)) switch (n.tag) {
              case 3:
                Jc(f.nodeValue, u, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Jc(f.nodeValue, u, (n.mode & 1) !== 0);
            }
            g && (r.flags |= 4);
          } else f = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(f), f[Oa] = r, r.stateNode = f;
        }
        return ar(r), null;
      case 13:
        if (sn(En), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && ri !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Ns(), $o(), r.flags |= 98560, g = !1;
          else if (g = uf(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!g) throw Error(c(318));
              if (g = r.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(c(317));
              g[Oa] = r;
            } else $o(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            ar(r), g = !1;
          } else Bi !== null && (Xl(Bi), Bi = null), g = !0;
          if (!g) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = u, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (En.current & 1) !== 0 ? Mn === 0 && (Mn = 3) : Np())), r.updateQueue !== null && (r.flags |= 4), ar(r), null);
      case 4:
        return jl(), Hn(n, r), n === null && ku(r.stateNode.containerInfo), ar(r), null;
      case 10:
        return up(r.type._context), ar(r), null;
      case 17:
        return zn(r.type) && Nu(), ar(r), null;
      case 19:
        if (sn(En), g = r.memoizedState, g === null) return ar(r), null;
        if (f = (r.flags & 128) !== 0, x = g.rendering, x === null) if (f) Js(g, !1);
        else {
          if (Mn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (x = df(n), x !== null) {
              for (r.flags |= 128, Js(g, !1), f = x.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = u, u = r.child; u !== null; ) g = u, n = f, g.flags &= 14680066, x = g.alternate, x === null ? (g.childLanes = 0, g.lanes = n, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = x.childLanes, g.lanes = x.lanes, g.child = x.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = x.memoizedProps, g.memoizedState = x.memoizedState, g.updateQueue = x.updateQueue, g.type = x.type, n = x.dependencies, g.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
              return Be(En, En.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          g.tail !== null && ut() > Iu && (r.flags |= 128, f = !0, Js(g, !1), r.lanes = 4194304);
        }
        else {
          if (!f) if (n = df(x), n !== null) {
            if (r.flags |= 128, f = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Js(g, !0), g.tail === null && g.tailMode === "hidden" && !x.alternate && !hn) return ar(r), null;
          } else 2 * ut() - g.renderingStartTime > Iu && u !== 1073741824 && (r.flags |= 128, f = !0, Js(g, !1), r.lanes = 4194304);
          g.isBackwards ? (x.sibling = r.child, r.child = x) : (u = g.last, u !== null ? u.sibling = x : r.child = x, g.last = x);
        }
        return g.tail !== null ? (r = g.tail, g.rendering = r, g.tail = r.sibling, g.renderingStartTime = ut(), r.sibling = null, u = En.current, Be(En, f ? u & 1 | 2 : u & 1), r) : (ar(r), null);
      case 22:
      case 23:
        return Lp(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && (r.mode & 1) !== 0 ? (wi & 1073741824) !== 0 && (ar(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ar(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function Pf(n, r) {
    switch (lf(r), r.tag) {
      case 1:
        return zn(r.type) && Nu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return jl(), sn(qn), sn(xn), Ye(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ff(r), null;
      case 13:
        if (sn(En), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(c(340));
          $o();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return sn(En), null;
      case 4:
        return jl(), null;
      case 10:
        return up(r.type._context), null;
      case 22:
      case 23:
        return Lp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ec = !1, kr = !1, Fg = typeof WeakSet == "function" ? WeakSet : Set, _e = null;
  function ju(n, r) {
    var u = n.ref;
    if (u !== null) if (typeof u == "function") try {
      u(null);
    } catch (f) {
      vn(n, r, f);
    }
    else u.current = null;
  }
  function Uf(n, r, u) {
    try {
      u();
    } catch (f) {
      vn(n, r, f);
    }
  }
  var im = !1;
  function am(n, r) {
    if (Ms = Ui, n = bs(), Wc(n)) {
      if ("selectionStart" in n) var u = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        u = (u = n.ownerDocument) && u.defaultView || window;
        var f = u.getSelection && u.getSelection();
        if (f && f.rangeCount !== 0) {
          u = f.anchorNode;
          var h = f.anchorOffset, g = f.focusNode;
          f = f.focusOffset;
          try {
            u.nodeType, g.nodeType;
          } catch {
            u = null;
            break e;
          }
          var x = 0, O = -1, P = -1, G = 0, le = 0, ce = n, ie = null;
          t: for (; ; ) {
            for (var we; ce !== u || h !== 0 && ce.nodeType !== 3 || (O = x + h), ce !== g || f !== 0 && ce.nodeType !== 3 || (P = x + f), ce.nodeType === 3 && (x += ce.nodeValue.length), (we = ce.firstChild) !== null; )
              ie = ce, ce = we;
            for (; ; ) {
              if (ce === n) break t;
              if (ie === u && ++G === h && (O = x), ie === g && ++le === f && (P = x), (we = ce.nextSibling) !== null) break;
              ce = ie, ie = ce.parentNode;
            }
            ce = we;
          }
          u = O === -1 || P === -1 ? null : { start: O, end: P };
        } else u = null;
      }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Ll = { focusedElem: n, selectionRange: u }, Ui = !1, _e = r; _e !== null; ) if (r = _e, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, _e = n;
    else for (; _e !== null; ) {
      r = _e;
      try {
        var Le = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Le !== null) {
              var ze = Le.memoizedProps, On = Le.memoizedState, B = r.stateNode, V = B.getSnapshotBeforeUpdate(r.elementType === r.type ? ze : pa(r.type, ze), On);
              B.__reactInternalSnapshotBeforeUpdate = V;
            }
            break;
          case 3:
            var Y = r.stateNode.containerInfo;
            Y.nodeType === 1 ? Y.textContent = "" : Y.nodeType === 9 && Y.documentElement && Y.removeChild(Y.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(c(163));
        }
      } catch (ue) {
        vn(r, r.return, ue);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, _e = n;
        break;
      }
      _e = r.return;
    }
    return Le = im, im = !1, Le;
  }
  function tc(n, r, u) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & n) === n) {
          var g = h.destroy;
          h.destroy = void 0, g !== void 0 && Uf(r, u, g);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function nc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var u = r = r.next;
      do {
        if ((u.tag & n) === n) {
          var f = u.create;
          u.destroy = f();
        }
        u = u.next;
      } while (u !== r);
    }
  }
  function bp(n) {
    var r = n.ref;
    if (r !== null) {
      var u = n.stateNode;
      switch (n.tag) {
        case 5:
          n = u;
          break;
        default:
          n = u;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Vf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Vf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Oa], delete r[Os], delete r[As], delete r[Lu], delete r[Vg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function rc(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function co(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || rc(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function za(n, r, u) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = jo));
    else if (f !== 4 && (n = n.child, n !== null)) for (za(n, r, u), n = n.sibling; n !== null; ) za(n, r, u), n = n.sibling;
  }
  function Fa(n, r, u) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? u.insertBefore(n, r) : u.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null)) for (Fa(n, r, u), n = n.sibling; n !== null; ) Fa(n, r, u), n = n.sibling;
  }
  var kn = null, Fr = !1;
  function jr(n, r, u) {
    for (u = u.child; u !== null; ) om(n, r, u), u = u.sibling;
  }
  function om(n, r, u) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function") try {
      Zr.onCommitFiberUnmount(Oo, u);
    } catch {
    }
    switch (u.tag) {
      case 5:
        kr || ju(u, r);
      case 6:
        var f = kn, h = Fr;
        kn = null, jr(n, r, u), kn = f, Fr = h, kn !== null && (Fr ? (n = kn, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : kn.removeChild(u.stateNode));
        break;
      case 18:
        kn !== null && (Fr ? (n = kn, u = u.stateNode, n.nodeType === 8 ? Au(n.parentNode, u) : n.nodeType === 1 && Au(n, u), ua(n)) : Au(kn, u.stateNode));
        break;
      case 4:
        f = kn, h = Fr, kn = u.stateNode.containerInfo, Fr = !0, jr(n, r, u), kn = f, Fr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!kr && (f = u.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          h = f = f.next;
          do {
            var g = h, x = g.destroy;
            g = g.tag, x !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && Uf(u, r, x), h = h.next;
          } while (h !== f);
        }
        jr(n, r, u);
        break;
      case 1:
        if (!kr && (ju(u, r), f = u.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = u.memoizedProps, f.state = u.memoizedState, f.componentWillUnmount();
        } catch (O) {
          vn(u, r, O);
        }
        jr(n, r, u);
        break;
      case 21:
        jr(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (kr = (f = kr) || u.memoizedState !== null, jr(n, r, u), kr = f) : jr(n, r, u);
        break;
      default:
        jr(n, r, u);
    }
  }
  function lm(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new Fg()), r.forEach(function(f) {
        var h = mm.bind(null, n, f);
        u.has(f) || (u.add(f), f.then(h, h));
      });
    }
  }
  function ha(n, r) {
    var u = r.deletions;
    if (u !== null) for (var f = 0; f < u.length; f++) {
      var h = u[f];
      try {
        var g = n, x = r, O = x;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 5:
              kn = O.stateNode, Fr = !1;
              break e;
            case 3:
              kn = O.stateNode.containerInfo, Fr = !0;
              break e;
            case 4:
              kn = O.stateNode.containerInfo, Fr = !0;
              break e;
          }
          O = O.return;
        }
        if (kn === null) throw Error(c(160));
        om(g, x, h), kn = null, Fr = !1;
        var P = h.alternate;
        P !== null && (P.return = null), h.return = null;
      } catch (G) {
        vn(h, r, G);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Dp(r, n), r = r.sibling;
  }
  function Dp(n, r) {
    var u = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ha(r, n), li(n), f & 4) {
          try {
            tc(3, n, n.return), nc(3, n);
          } catch (ze) {
            vn(n, n.return, ze);
          }
          try {
            tc(5, n, n.return);
          } catch (ze) {
            vn(n, n.return, ze);
          }
        }
        break;
      case 1:
        ha(r, n), li(n), f & 512 && u !== null && ju(u, u.return);
        break;
      case 5:
        if (ha(r, n), li(n), f & 512 && u !== null && ju(u, u.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            ye(h, "");
          } catch (ze) {
            vn(n, n.return, ze);
          }
        }
        if (f & 4 && (h = n.stateNode, h != null)) {
          var g = n.memoizedProps, x = u !== null ? u.memoizedProps : g, O = n.type, P = n.updateQueue;
          if (n.updateQueue = null, P !== null) try {
            O === "input" && g.type === "radio" && g.name != null && Gn(h, g), nr(O, x);
            var G = nr(O, g);
            for (x = 0; x < P.length; x += 2) {
              var le = P[x], ce = P[x + 1];
              le === "style" ? an(h, ce) : le === "dangerouslySetInnerHTML" ? Ea(h, ce) : le === "children" ? ye(h, ce) : pe(h, le, ce, G);
            }
            switch (O) {
              case "input":
                Xr(h, g);
                break;
              case "textarea":
                ea(h, g);
                break;
              case "select":
                var ie = h._wrapperState.wasMultiple;
                h._wrapperState.wasMultiple = !!g.multiple;
                var we = g.value;
                we != null ? wn(h, !!g.multiple, we, !1) : ie !== !!g.multiple && (g.defaultValue != null ? wn(
                  h,
                  !!g.multiple,
                  g.defaultValue,
                  !0
                ) : wn(h, !!g.multiple, g.multiple ? [] : "", !1));
            }
            h[Os] = g;
          } catch (ze) {
            vn(n, n.return, ze);
          }
        }
        break;
      case 6:
        if (ha(r, n), li(n), f & 4) {
          if (n.stateNode === null) throw Error(c(162));
          h = n.stateNode, g = n.memoizedProps;
          try {
            h.nodeValue = g;
          } catch (ze) {
            vn(n, n.return, ze);
          }
        }
        break;
      case 3:
        if (ha(r, n), li(n), f & 4 && u !== null && u.memoizedState.isDehydrated) try {
          ua(r.containerInfo);
        } catch (ze) {
          vn(n, n.return, ze);
        }
        break;
      case 4:
        ha(r, n), li(n);
        break;
      case 13:
        ha(r, n), li(n), h = n.child, h.flags & 8192 && (g = h.memoizedState !== null, h.stateNode.isHidden = g, !g || h.alternate !== null && h.alternate.memoizedState !== null || (Mp = ut())), f & 4 && lm(n);
        break;
      case 22:
        if (le = u !== null && u.memoizedState !== null, n.mode & 1 ? (kr = (G = kr) || le, ha(r, n), kr = G) : ha(r, n), li(n), f & 8192) {
          if (G = n.memoizedState !== null, (n.stateNode.isHidden = G) && !le && (n.mode & 1) !== 0) for (_e = n, le = n.child; le !== null; ) {
            for (ce = _e = le; _e !== null; ) {
              switch (ie = _e, we = ie.child, ie.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  tc(4, ie, ie.return);
                  break;
                case 1:
                  ju(ie, ie.return);
                  var Le = ie.stateNode;
                  if (typeof Le.componentWillUnmount == "function") {
                    f = ie, u = ie.return;
                    try {
                      r = f, Le.props = r.memoizedProps, Le.state = r.memoizedState, Le.componentWillUnmount();
                    } catch (ze) {
                      vn(f, u, ze);
                    }
                  }
                  break;
                case 5:
                  ju(ie, ie.return);
                  break;
                case 22:
                  if (ie.memoizedState !== null) {
                    ic(ce);
                    continue;
                  }
              }
              we !== null ? (we.return = ie, _e = we) : ic(ce);
            }
            le = le.sibling;
          }
          e: for (le = null, ce = n; ; ) {
            if (ce.tag === 5) {
              if (le === null) {
                le = ce;
                try {
                  h = ce.stateNode, G ? (g = h.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (O = ce.stateNode, P = ce.memoizedProps.style, x = P != null && P.hasOwnProperty("display") ? P.display : null, O.style.display = Yt("display", x));
                } catch (ze) {
                  vn(n, n.return, ze);
                }
              }
            } else if (ce.tag === 6) {
              if (le === null) try {
                ce.stateNode.nodeValue = G ? "" : ce.memoizedProps;
              } catch (ze) {
                vn(n, n.return, ze);
              }
            } else if ((ce.tag !== 22 && ce.tag !== 23 || ce.memoizedState === null || ce === n) && ce.child !== null) {
              ce.child.return = ce, ce = ce.child;
              continue;
            }
            if (ce === n) break e;
            for (; ce.sibling === null; ) {
              if (ce.return === null || ce.return === n) break e;
              le === ce && (le = null), ce = ce.return;
            }
            le === ce && (le = null), ce.sibling.return = ce.return, ce = ce.sibling;
          }
        }
        break;
      case 19:
        ha(r, n), li(n), f & 4 && lm(n);
        break;
      case 21:
        break;
      default:
        ha(
          r,
          n
        ), li(n);
    }
  }
  function li(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var u = n.return; u !== null; ) {
            if (rc(u)) {
              var f = u;
              break e;
            }
            u = u.return;
          }
          throw Error(c(160));
        }
        switch (f.tag) {
          case 5:
            var h = f.stateNode;
            f.flags & 32 && (ye(h, ""), f.flags &= -33);
            var g = co(n);
            Fa(n, g, h);
            break;
          case 3:
          case 4:
            var x = f.stateNode.containerInfo, O = co(n);
            za(n, O, x);
            break;
          default:
            throw Error(c(161));
        }
      } catch (P) {
        vn(n, n.return, P);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function jg(n, r, u) {
    _e = n, _p(n);
  }
  function _p(n, r, u) {
    for (var f = (n.mode & 1) !== 0; _e !== null; ) {
      var h = _e, g = h.child;
      if (h.tag === 22 && f) {
        var x = h.memoizedState !== null || ec;
        if (!x) {
          var O = h.alternate, P = O !== null && O.memoizedState !== null || kr;
          O = ec;
          var G = kr;
          if (ec = x, (kr = P) && !G) for (_e = h; _e !== null; ) x = _e, P = x.child, x.tag === 22 && x.memoizedState !== null ? kp(h) : P !== null ? (P.return = x, _e = P) : kp(h);
          for (; g !== null; ) _e = g, _p(g), g = g.sibling;
          _e = h, ec = O, kr = G;
        }
        um(n);
      } else (h.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = h, _e = g) : um(n);
    }
  }
  function um(n) {
    for (; _e !== null; ) {
      var r = _e;
      if ((r.flags & 8772) !== 0) {
        var u = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              kr || nc(5, r);
              break;
            case 1:
              var f = r.stateNode;
              if (r.flags & 4 && !kr) if (u === null) f.componentDidMount();
              else {
                var h = r.elementType === r.type ? u.memoizedProps : pa(r.type, u.memoizedProps);
                f.componentDidUpdate(h, u.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
              }
              var g = r.updateQueue;
              g !== null && pp(r, g, f);
              break;
            case 3:
              var x = r.updateQueue;
              if (x !== null) {
                if (u = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    u = r.child.stateNode;
                    break;
                  case 1:
                    u = r.child.stateNode;
                }
                pp(r, x, u);
              }
              break;
            case 5:
              var O = r.stateNode;
              if (u === null && r.flags & 4) {
                u = O;
                var P = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    P.autoFocus && u.focus();
                    break;
                  case "img":
                    P.src && (u.src = P.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var G = r.alternate;
                if (G !== null) {
                  var le = G.memoizedState;
                  if (le !== null) {
                    var ce = le.dehydrated;
                    ce !== null && ua(ce);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(c(163));
          }
          kr || r.flags & 512 && bp(r);
        } catch (ie) {
          vn(r, r.return, ie);
        }
      }
      if (r === n) {
        _e = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, _e = u;
        break;
      }
      _e = r.return;
    }
  }
  function ic(n) {
    for (; _e !== null; ) {
      var r = _e;
      if (r === n) {
        _e = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, _e = u;
        break;
      }
      _e = r.return;
    }
  }
  function kp(n) {
    for (; _e !== null; ) {
      var r = _e;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              nc(4, r);
            } catch (P) {
              vn(r, u, P);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = r.return;
              try {
                f.componentDidMount();
              } catch (P) {
                vn(r, h, P);
              }
            }
            var g = r.return;
            try {
              bp(r);
            } catch (P) {
              vn(r, g, P);
            }
            break;
          case 5:
            var x = r.return;
            try {
              bp(r);
            } catch (P) {
              vn(r, x, P);
            }
        }
      } catch (P) {
        vn(r, r.return, P);
      }
      if (r === n) {
        _e = null;
        break;
      }
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, _e = O;
        break;
      }
      _e = r.return;
    }
  }
  var Bg = Math.ceil, Xo = Oe.ReactCurrentDispatcher, Ql = Oe.ReactCurrentOwner, hr = Oe.ReactCurrentBatchConfig, _t = 0, Zn = null, In = null, vr = 0, wi = 0, Bu = Fi(0), Mn = 0, ac = null, ja = 0, Hu = 0, zf = 0, oc = null, ui = null, Mp = 0, Iu = 1 / 0, bi = null, Yu = !1, ql = null, Zo = null, Ff = !1, fo = null, lc = 0, Jo = 0, Wu = null, uc = -1, Mr = 0;
  function Yn() {
    return (_t & 6) !== 0 ? ut() : uc !== -1 ? uc : uc = ut();
  }
  function Ba(n) {
    return (n.mode & 1) === 0 ? 1 : (_t & 2) !== 0 && vr !== 0 ? vr & -vr : zg.transition !== null ? (Mr === 0 && (Mr = yu()), Mr) : (n = zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ru(n.type)), n);
  }
  function Br(n, r, u, f) {
    if (50 < Jo) throw Jo = 0, Wu = null, Error(c(185));
    Za(n, u, f), ((_t & 2) === 0 || n !== Zn) && (n === Zn && ((_t & 2) === 0 && (Hu |= u), Mn === 4 && va(n, vr)), si(n, f), u === 1 && _t === 0 && (r.mode & 1) === 0 && (Iu = ut() + 500, Pu && La()));
  }
  function si(n, r) {
    var u = n.callbackNode;
    Rl(n, r);
    var f = la(n, n === Zn ? vr : 0);
    if (f === 0) u !== null && cr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (u != null && cr(u), r === 1) n.tag === 0 ? Ho(Op.bind(null, n)) : af(Op.bind(null, n)), Ou(function() {
        (_t & 6) === 0 && La();
      }), u = null;
      else {
        switch (Su(f)) {
          case 1:
            u = aa;
            break;
          case 4:
            u = Tl;
            break;
          case 16:
            u = xl;
            break;
          case 536870912:
            u = hu;
            break;
          default:
            u = xl;
        }
        u = gm(u, jf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function jf(n, r) {
    if (uc = -1, Mr = 0, (_t & 6) !== 0) throw Error(c(327));
    var u = n.callbackNode;
    if ($u() && n.callbackNode !== u) return null;
    var f = la(n, n === Zn ? vr : 0);
    if (f === 0) return null;
    if ((f & 30) !== 0 || (f & n.expiredLanes) !== 0 || r) r = Bf(n, f);
    else {
      r = f;
      var h = _t;
      _t |= 2;
      var g = cm();
      (Zn !== n || vr !== r) && (bi = null, Iu = ut() + 500, po(n, r));
      do
        try {
          fm();
          break;
        } catch (O) {
          sm(n, O);
        }
      while (!0);
      lp(), Xo.current = g, _t = h, In !== null ? r = 0 : (Zn = null, vr = 0, r = Mn);
    }
    if (r !== 0) {
      if (r === 2 && (h = Lo(n), h !== 0 && (f = h, r = sc(n, h))), r === 1) throw u = ac, po(n, 0), va(n, f), si(n, ut()), u;
      if (r === 6) va(n, f);
      else {
        if (h = n.current.alternate, (f & 30) === 0 && !Hg(h) && (r = Bf(n, f), r === 2 && (g = Lo(n), g !== 0 && (f = g, r = sc(n, g))), r === 1)) throw u = ac, po(n, 0), va(n, f), si(n, ut()), u;
        switch (n.finishedWork = h, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            Jl(n, ui, bi);
            break;
          case 3:
            if (va(n, f), (f & 130023424) === f && (r = Mp + 500 - ut(), 10 < r)) {
              if (la(n, 0) !== 0) break;
              if (h = n.suspendedLanes, (h & f) !== f) {
                Yn(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = tf(Jl.bind(null, n, ui, bi), r);
              break;
            }
            Jl(n, ui, bi);
            break;
          case 4:
            if (va(n, f), (f & 4194240) === f) break;
            for (r = n.eventTimes, h = -1; 0 < f; ) {
              var x = 31 - Pr(f);
              g = 1 << x, x = r[x], x > h && (h = x), f &= ~g;
            }
            if (f = h, f = ut() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Bg(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = tf(Jl.bind(null, n, ui, bi), f);
              break;
            }
            Jl(n, ui, bi);
            break;
          case 5:
            Jl(n, ui, bi);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return si(n, ut()), n.callbackNode === u ? jf.bind(null, n) : null;
  }
  function sc(n, r) {
    var u = oc;
    return n.current.memoizedState.isDehydrated && (po(n, r).flags |= 256), n = Bf(n, r), n !== 2 && (r = ui, ui = u, r !== null && Xl(r)), n;
  }
  function Xl(n) {
    ui === null ? ui = n : ui.push.apply(ui, n);
  }
  function Hg(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null)) for (var f = 0; f < u.length; f++) {
          var h = u[f], g = h.getSnapshot;
          h = h.value;
          try {
            if (!ca(g(), h)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (u = r.child, r.subtreeFlags & 16384 && u !== null) u.return = r, r = u;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function va(n, r) {
    for (r &= ~zf, r &= ~Hu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - Pr(r), f = 1 << u;
      n[u] = -1, r &= ~f;
    }
  }
  function Op(n) {
    if ((_t & 6) !== 0) throw Error(c(327));
    $u();
    var r = la(n, 0);
    if ((r & 1) === 0) return si(n, ut()), null;
    var u = Bf(n, r);
    if (n.tag !== 0 && u === 2) {
      var f = Lo(n);
      f !== 0 && (r = f, u = sc(n, f));
    }
    if (u === 1) throw u = ac, po(n, 0), va(n, r), si(n, ut()), u;
    if (u === 6) throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Jl(n, ui, bi), si(n, ut()), null;
  }
  function Ap(n, r) {
    var u = _t;
    _t |= 1;
    try {
      return n(r);
    } finally {
      _t = u, _t === 0 && (Iu = ut() + 500, Pu && La());
    }
  }
  function Zl(n) {
    fo !== null && fo.tag === 0 && (_t & 6) === 0 && $u();
    var r = _t;
    _t |= 1;
    var u = hr.transition, f = zt;
    try {
      if (hr.transition = null, zt = 1, n) return n();
    } finally {
      zt = f, hr.transition = u, _t = r, (_t & 6) === 0 && La();
    }
  }
  function Lp() {
    wi = Bu.current, sn(Bu);
  }
  function po(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, np(u)), In !== null) for (u = In.return; u !== null; ) {
      var f = u;
      switch (lf(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && Nu();
          break;
        case 3:
          jl(), sn(qn), sn(xn), Ye();
          break;
        case 5:
          ff(f);
          break;
        case 4:
          jl();
          break;
        case 13:
          sn(En);
          break;
        case 19:
          sn(En);
          break;
        case 10:
          up(f.type._context);
          break;
        case 22:
        case 23:
          Lp();
      }
      u = u.return;
    }
    if (Zn = n, In = n = el(n.current, null), vr = wi = r, Mn = 0, ac = null, zf = Hu = ja = 0, ui = oc = null, zl !== null) {
      for (r = 0; r < zl.length; r++) if (u = zl[r], f = u.interleaved, f !== null) {
        u.interleaved = null;
        var h = f.next, g = u.pending;
        if (g !== null) {
          var x = g.next;
          g.next = h, f.next = x;
        }
        u.pending = f;
      }
      zl = null;
    }
    return n;
  }
  function sm(n, r) {
    do {
      var u = In;
      try {
        if (lp(), Ct.current = $l, pf) {
          for (var f = jt.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          pf = !1;
        }
        if (en = 0, ir = jn = jt = null, js = !1, Bl = 0, Ql.current = null, u === null || u.return === null) {
          Mn = 1, ac = r, In = null;
          break;
        }
        e: {
          var g = n, x = u.return, O = u, P = r;
          if (r = vr, O.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var G = P, le = O, ce = le.tag;
            if ((le.mode & 1) === 0 && (ce === 0 || ce === 11 || ce === 15)) {
              var ie = le.alternate;
              ie ? (le.updateQueue = ie.updateQueue, le.memoizedState = ie.memoizedState, le.lanes = ie.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var we = qv(x);
            if (we !== null) {
              we.flags &= -257, qo(we, x, O, g, r), we.mode & 1 && Ep(g, G, r), r = we, P = G;
              var Le = r.updateQueue;
              if (Le === null) {
                var ze = /* @__PURE__ */ new Set();
                ze.add(P), r.updateQueue = ze;
              } else Le.add(P);
              break e;
            } else {
              if ((r & 1) === 0) {
                Ep(g, G, r), Np();
                break e;
              }
              P = Error(c(426));
            }
          } else if (hn && O.mode & 1) {
            var On = qv(x);
            if (On !== null) {
              (On.flags & 65536) === 0 && (On.flags |= 256), qo(On, x, O, g, r), lo(Gl(P, O));
              break e;
            }
          }
          g = P = Gl(P, O), Mn !== 4 && (Mn = 2), oc === null ? oc = [g] : oc.push(g), g = x;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var B = Qv(g, P, r);
                Yv(g, B);
                break e;
              case 1:
                O = P;
                var V = g.type, Y = g.stateNode;
                if ((g.flags & 128) === 0 && (typeof V.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (Zo === null || !Zo.has(Y)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var ue = Cp(g, O, r);
                  Yv(g, ue);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        pm(u);
      } catch (Ne) {
        r = Ne, In === u && u !== null && (In = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function cm() {
    var n = Xo.current;
    return Xo.current = $l, n === null ? $l : n;
  }
  function Np() {
    (Mn === 0 || Mn === 3 || Mn === 2) && (Mn = 4), Zn === null || (ja & 268435455) === 0 && (Hu & 268435455) === 0 || va(Zn, vr);
  }
  function Bf(n, r) {
    var u = _t;
    _t |= 2;
    var f = cm();
    (Zn !== n || vr !== r) && (bi = null, po(n, r));
    do
      try {
        Ig();
        break;
      } catch (h) {
        sm(n, h);
      }
    while (!0);
    if (lp(), _t = u, Xo.current = f, In !== null) throw Error(c(261));
    return Zn = null, vr = 0, Mn;
  }
  function Ig() {
    for (; In !== null; ) dm(In);
  }
  function fm() {
    for (; In !== null && !ra(); ) dm(In);
  }
  function dm(n) {
    var r = ym(n.alternate, n, wi);
    n.memoizedProps = n.pendingProps, r === null ? pm(n) : In = r, Ql.current = null;
  }
  function pm(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (u = rm(u, r, wi), u !== null) {
          In = u;
          return;
        }
      } else {
        if (u = Pf(u, r), u !== null) {
          u.flags &= 32767, In = u;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Mn = 6, In = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        In = r;
        return;
      }
      In = r = n;
    } while (r !== null);
    Mn === 0 && (Mn = 5);
  }
  function Jl(n, r, u) {
    var f = zt, h = hr.transition;
    try {
      hr.transition = null, zt = 1, Yg(n, r, u, f);
    } finally {
      hr.transition = h, zt = f;
    }
    return null;
  }
  function Yg(n, r, u, f) {
    do
      $u();
    while (fo !== null);
    if ((_t & 6) !== 0) throw Error(c(327));
    u = n.finishedWork;
    var h = n.finishedLanes;
    if (u === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current) throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var g = u.lanes | u.childLanes;
    if (Pd(n, g), n === Zn && (In = Zn = null, vr = 0), (u.subtreeFlags & 2064) === 0 && (u.flags & 2064) === 0 || Ff || (Ff = !0, gm(xl, function() {
      return $u(), null;
    })), g = (u.flags & 15990) !== 0, (u.subtreeFlags & 15990) !== 0 || g) {
      g = hr.transition, hr.transition = null;
      var x = zt;
      zt = 1;
      var O = _t;
      _t |= 4, Ql.current = null, am(n, u), Dp(u, n), Du(Ll), Ui = !!Ms, Ll = Ms = null, n.current = u, jg(u), ia(), _t = O, zt = x, hr.transition = g;
    } else n.current = u;
    if (Ff && (Ff = !1, fo = n, lc = h), g = n.pendingLanes, g === 0 && (Zo = null), ms(u.stateNode), si(n, ut()), r !== null) for (f = n.onRecoverableError, u = 0; u < r.length; u++) h = r[u], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (Yu) throw Yu = !1, n = ql, ql = null, n;
    return (lc & 1) !== 0 && n.tag !== 0 && $u(), g = n.pendingLanes, (g & 1) !== 0 ? n === Wu ? Jo++ : (Jo = 0, Wu = n) : Jo = 0, La(), null;
  }
  function $u() {
    if (fo !== null) {
      var n = Su(lc), r = hr.transition, u = zt;
      try {
        if (hr.transition = null, zt = 16 > n ? 16 : n, fo === null) var f = !1;
        else {
          if (n = fo, fo = null, lc = 0, (_t & 6) !== 0) throw Error(c(331));
          var h = _t;
          for (_t |= 4, _e = n.current; _e !== null; ) {
            var g = _e, x = g.child;
            if ((_e.flags & 16) !== 0) {
              var O = g.deletions;
              if (O !== null) {
                for (var P = 0; P < O.length; P++) {
                  var G = O[P];
                  for (_e = G; _e !== null; ) {
                    var le = _e;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        tc(8, le, g);
                    }
                    var ce = le.child;
                    if (ce !== null) ce.return = le, _e = ce;
                    else for (; _e !== null; ) {
                      le = _e;
                      var ie = le.sibling, we = le.return;
                      if (Vf(le), le === G) {
                        _e = null;
                        break;
                      }
                      if (ie !== null) {
                        ie.return = we, _e = ie;
                        break;
                      }
                      _e = we;
                    }
                  }
                }
                var Le = g.alternate;
                if (Le !== null) {
                  var ze = Le.child;
                  if (ze !== null) {
                    Le.child = null;
                    do {
                      var On = ze.sibling;
                      ze.sibling = null, ze = On;
                    } while (ze !== null);
                  }
                }
                _e = g;
              }
            }
            if ((g.subtreeFlags & 2064) !== 0 && x !== null) x.return = g, _e = x;
            else e: for (; _e !== null; ) {
              if (g = _e, (g.flags & 2048) !== 0) switch (g.tag) {
                case 0:
                case 11:
                case 15:
                  tc(9, g, g.return);
              }
              var B = g.sibling;
              if (B !== null) {
                B.return = g.return, _e = B;
                break e;
              }
              _e = g.return;
            }
          }
          var V = n.current;
          for (_e = V; _e !== null; ) {
            x = _e;
            var Y = x.child;
            if ((x.subtreeFlags & 2064) !== 0 && Y !== null) Y.return = x, _e = Y;
            else e: for (x = V; _e !== null; ) {
              if (O = _e, (O.flags & 2048) !== 0) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nc(9, O);
                }
              } catch (Ne) {
                vn(O, O.return, Ne);
              }
              if (O === x) {
                _e = null;
                break e;
              }
              var ue = O.sibling;
              if (ue !== null) {
                ue.return = O.return, _e = ue;
                break e;
              }
              _e = O.return;
            }
          }
          if (_t = h, La(), Zr && typeof Zr.onPostCommitFiberRoot == "function") try {
            Zr.onPostCommitFiberRoot(Oo, n);
          } catch {
          }
          f = !0;
        }
        return f;
      } finally {
        zt = u, hr.transition = r;
      }
    }
    return !1;
  }
  function hm(n, r, u) {
    r = Gl(u, r), r = Qv(n, r, 1), n = Go(n, r, 1), r = Yn(), n !== null && (Za(n, 1, r), si(n, r));
  }
  function vn(n, r, u) {
    if (n.tag === 3) hm(n, n, u);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        hm(r, n, u);
        break;
      } else if (r.tag === 1) {
        var f = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Zo === null || !Zo.has(f))) {
          n = Gl(u, n), n = Cp(r, n, 1), r = Go(r, n, 1), n = Yn(), r !== null && (Za(r, 1, n), si(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Wg(n, r, u) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = Yn(), n.pingedLanes |= n.suspendedLanes & u, Zn === n && (vr & u) === u && (Mn === 4 || Mn === 3 && (vr & 130023424) === vr && 500 > ut() - Mp ? po(n, 0) : zf |= u), si(n, r);
  }
  function vm(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Ci, Ci <<= 1, (Ci & 130023424) === 0 && (Ci = 4194304)));
    var u = Yn();
    n = xi(n, r), n !== null && (Za(n, r, u), si(n, u));
  }
  function $g(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), vm(n, u);
  }
  function mm(n, r) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, h = n.memoizedState;
        h !== null && (u = h.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    f !== null && f.delete(r), vm(n, u);
  }
  var ym;
  ym = function(n, r, u) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || qn.current) Bn = !0;
    else {
      if ((n.lanes & u) === 0 && (r.flags & 128) === 0) return Bn = !1, Zs(n, r, u);
      Bn = (n.flags & 131072) !== 0;
    }
    else Bn = !1, hn && (r.flags & 1048576) !== 0 && jv(r, oo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        Ii(n, r), n = r.pendingProps;
        var h = ti(r, xn.current);
        Cn(r, u), h = Ko(null, r, f, n, h, u);
        var g = da();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(f) ? (g = !0, rr(r)) : g = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, dp(r), h.updater = Mf, r.stateNode = h, h._reactInternals = r, Gs(r, f, n, u), r = qs(null, r, f, !0, g, u)) : (r.tag = 0, hn && g && of(r), pr(null, r, h, u), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (Ii(n, r), n = r.pendingProps, h = f._init, f = h(f._payload), r.type = f, h = r.tag = Kg(f), n = pa(f, n), h) {
            case 0:
              r = Xv(null, r, f, n, u);
              break e;
            case 1:
              r = Zv(null, r, f, n, u);
              break e;
            case 11:
              r = oi(null, r, f, n, u);
              break e;
            case 14:
              r = Kl(null, r, f, pa(f.type, n), u);
              break e;
          }
          throw Error(c(
            306,
            f,
            ""
          ));
        }
        return r;
      case 0:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pa(f, h), Xv(n, r, f, h, u);
      case 1:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pa(f, h), Zv(n, r, f, h, u);
      case 3:
        e: {
          if (Fu(r), n === null) throw Error(c(387));
          f = r.pendingProps, g = r.memoizedState, h = g.element, Iv(n, r), Ps(r, f, null, u);
          var x = r.memoizedState;
          if (f = x.element, g.isDehydrated) if (g = { element: f, isDehydrated: !1, cache: x.cache, pendingSuspenseBoundaries: x.pendingSuspenseBoundaries, transitions: x.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
            h = Gl(Error(c(423)), r), r = Jv(n, r, f, u, h);
            break e;
          } else if (f !== h) {
            h = Gl(Error(c(424)), r), r = Jv(n, r, f, u, h);
            break e;
          } else for (ri = Ma(r.stateNode.containerInfo.firstChild), ni = r, hn = !0, Bi = null, u = Te(r, null, f, u), r.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if ($o(), f === h) {
              r = Yi(n, r, u);
              break e;
            }
            pr(n, r, f, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Wv(r), n === null && ap(r), f = r.type, h = r.pendingProps, g = n !== null ? n.memoizedProps : null, x = h.children, ef(f, h) ? x = null : g !== null && ef(f, g) && (r.flags |= 32), Tp(n, r), pr(n, r, x, u), r.child;
      case 6:
        return n === null && ap(r), null;
      case 13:
        return Nf(n, r, u);
      case 4:
        return hp(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = Dn(r, null, f, u) : pr(n, r, f, u), r.child;
      case 11:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pa(f, h), oi(n, r, f, h, u);
      case 7:
        return pr(n, r, r.pendingProps, u), r.child;
      case 8:
        return pr(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return pr(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (f = r.type._context, h = r.pendingProps, g = r.memoizedProps, x = h.value, Be(Ti, f._currentValue), f._currentValue = x, g !== null) if (ca(g.value, x)) {
            if (g.children === h.children && !qn.current) {
              r = Yi(n, r, u);
              break e;
            }
          } else for (g = r.child, g !== null && (g.return = r); g !== null; ) {
            var O = g.dependencies;
            if (O !== null) {
              x = g.child;
              for (var P = O.firstContext; P !== null; ) {
                if (P.context === f) {
                  if (g.tag === 1) {
                    P = uo(-1, u & -u), P.tag = 2;
                    var G = g.updateQueue;
                    if (G !== null) {
                      G = G.shared;
                      var le = G.pending;
                      le === null ? P.next = P : (P.next = le.next, le.next = P), G.pending = P;
                    }
                  }
                  g.lanes |= u, P = g.alternate, P !== null && (P.lanes |= u), sp(
                    g.return,
                    u,
                    r
                  ), O.lanes |= u;
                  break;
                }
                P = P.next;
              }
            } else if (g.tag === 10) x = g.type === r.type ? null : g.child;
            else if (g.tag === 18) {
              if (x = g.return, x === null) throw Error(c(341));
              x.lanes |= u, O = x.alternate, O !== null && (O.lanes |= u), sp(x, u, r), x = g.sibling;
            } else x = g.child;
            if (x !== null) x.return = g;
            else for (x = g; x !== null; ) {
              if (x === r) {
                x = null;
                break;
              }
              if (g = x.sibling, g !== null) {
                g.return = x.return, x = g;
                break;
              }
              x = x.return;
            }
            g = x;
          }
          pr(n, r, h.children, u), r = r.child;
        }
        return r;
      case 9:
        return h = r.type, f = r.pendingProps.children, Cn(r, u), h = Hi(h), f = f(h), r.flags |= 1, pr(n, r, f, u), r.child;
      case 14:
        return f = r.type, h = pa(f, r.pendingProps), h = pa(f.type, h), Kl(n, r, f, h, u);
      case 15:
        return ct(n, r, r.type, r.pendingProps, u);
      case 17:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pa(f, h), Ii(n, r), r.tag = 1, zn(f) ? (n = !0, rr(r)) : n = !1, Cn(r, u), Of(r, f, h), Gs(r, f, h, u), qs(null, r, f, !0, n, u);
      case 19:
        return Va(n, r, u);
      case 22:
        return Qs(n, r, u);
    }
    throw Error(c(156, r.tag));
  };
  function gm(n, r) {
    return fn(n, r);
  }
  function Gg(n, r, u, f) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $i(n, r, u, f) {
    return new Gg(n, r, u, f);
  }
  function Pp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Kg(n) {
    if (typeof n == "function") return Pp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === wt) return 11;
      if (n === At) return 14;
    }
    return 2;
  }
  function el(n, r) {
    var u = n.alternate;
    return u === null ? (u = $i(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function cc(n, r, u, f, h, g) {
    var x = 2;
    if (f = n, typeof n == "function") Pp(n) && (x = 1);
    else if (typeof n == "string") x = 5;
    else e: switch (n) {
      case ke:
        return ho(u.children, h, g, r);
      case Ue:
        x = 8, h |= 8;
        break;
      case at:
        return n = $i(12, u, r, h | 2), n.elementType = at, n.lanes = g, n;
      case He:
        return n = $i(13, u, r, h), n.elementType = He, n.lanes = g, n;
      case Ot:
        return n = $i(19, u, r, h), n.elementType = Ot, n.lanes = g, n;
      case Se:
        return tl(u, h, g, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Et:
            x = 10;
            break e;
          case Vt:
            x = 9;
            break e;
          case wt:
            x = 11;
            break e;
          case At:
            x = 14;
            break e;
          case Pt:
            x = 16, f = null;
            break e;
        }
        throw Error(c(130, n == null ? n : typeof n, ""));
    }
    return r = $i(x, u, r, h), r.elementType = n, r.type = f, r.lanes = g, r;
  }
  function ho(n, r, u, f) {
    return n = $i(7, n, f, r), n.lanes = u, n;
  }
  function tl(n, r, u, f) {
    return n = $i(22, n, f, r), n.elementType = Se, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Up(n, r, u) {
    return n = $i(6, n, null, r), n.lanes = u, n;
  }
  function Hf(n, r, u) {
    return r = $i(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Sm(n, r, u, f, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gu(0), this.expirationTimes = gu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gu(0), this.identifierPrefix = f, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function If(n, r, u, f, h, g, x, O, P) {
    return n = new Sm(n, r, u, O, P), r === 1 ? (r = 1, g === !0 && (r |= 8)) : r = 0, g = $i(3, null, null, r), n.current = g, g.stateNode = n, g.memoizedState = { element: f, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, dp(g), n;
  }
  function Qg(n, r, u) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ae, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: u };
  }
  function Vp(n) {
    if (!n) return Dr;
    n = n._reactInternals;
    e: {
      if (lt(n) !== n || n.tag !== 1) throw Error(c(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(c(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (zn(u)) return Ls(n, u, r);
    }
    return r;
  }
  function Cm(n, r, u, f, h, g, x, O, P) {
    return n = If(u, f, !0, n, h, g, x, O, P), n.context = Vp(null), u = n.current, f = Yn(), h = Ba(u), g = uo(f, h), g.callback = r ?? null, Go(u, g, h), n.current.lanes = h, Za(n, h, f), si(n, f), n;
  }
  function Yf(n, r, u, f) {
    var h = r.current, g = Yn(), x = Ba(h);
    return u = Vp(u), r.context === null ? r.context = u : r.pendingContext = u, r = uo(g, x), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = Go(h, r, x), n !== null && (Br(n, h, x, g), cf(n, h, x)), x;
  }
  function Wf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function zp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function $f(n, r) {
    zp(n, r), (n = n.alternate) && zp(n, r);
  }
  function Em() {
    return null;
  }
  var eu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Fp(n) {
    this._internalRoot = n;
  }
  Gf.prototype.render = Fp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(c(409));
    Yf(n, r, null, null);
  }, Gf.prototype.unmount = Fp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Zl(function() {
        Yf(null, n, null, null);
      }), r[io] = null;
    }
  };
  function Gf(n) {
    this._internalRoot = n;
  }
  Gf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = nt();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < Qn.length && r !== 0 && r < Qn[u].priority; u++) ;
      Qn.splice(u, 0, n), u === 0 && Ss(n);
    }
  };
  function jp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Kf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Tm() {
  }
  function qg(n, r, u, f, h) {
    if (h) {
      if (typeof f == "function") {
        var g = f;
        f = function() {
          var G = Wf(x);
          g.call(G);
        };
      }
      var x = Cm(r, f, n, 0, null, !1, !1, "", Tm);
      return n._reactRootContainer = x, n[io] = x.current, ku(n.nodeType === 8 ? n.parentNode : n), Zl(), x;
    }
    for (; h = n.lastChild; ) n.removeChild(h);
    if (typeof f == "function") {
      var O = f;
      f = function() {
        var G = Wf(P);
        O.call(G);
      };
    }
    var P = If(n, 0, !1, null, null, !1, !1, "", Tm);
    return n._reactRootContainer = P, n[io] = P.current, ku(n.nodeType === 8 ? n.parentNode : n), Zl(function() {
      Yf(r, P, u, f);
    }), P;
  }
  function fc(n, r, u, f, h) {
    var g = u._reactRootContainer;
    if (g) {
      var x = g;
      if (typeof h == "function") {
        var O = h;
        h = function() {
          var P = Wf(x);
          O.call(P);
        };
      }
      Yf(r, x, n, h);
    } else x = qg(u, r, n, h, f);
    return Wf(x);
  }
  Lt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = oa(r.pendingLanes);
          u !== 0 && (Ja(r, u | 1), si(r, ut()), (_t & 6) === 0 && (Iu = ut() + 500, La()));
        }
        break;
      case 13:
        Zl(function() {
          var f = xi(n, 1);
          if (f !== null) {
            var h = Yn();
            Br(f, n, 1, h);
          }
        }), $f(n, 1);
    }
  }, ys = function(n) {
    if (n.tag === 13) {
      var r = xi(n, 134217728);
      if (r !== null) {
        var u = Yn();
        Br(r, n, 134217728, u);
      }
      $f(n, 134217728);
    }
  }, wa = function(n) {
    if (n.tag === 13) {
      var r = Ba(n), u = xi(n, r);
      if (u !== null) {
        var f = Yn();
        Br(u, n, r, f);
      }
      $f(n, r);
    }
  }, nt = function() {
    return zt;
  }, Cu = function(n, r) {
    var u = zt;
    try {
      return zt = n, r();
    } finally {
      zt = u;
    }
  }, qt = function(n, r, u) {
    switch (r) {
      case "input":
        if (Xr(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; ) u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var f = u[r];
            if (f !== n && f.form === n.form) {
              var h = Sn(f);
              if (!h) throw Error(c(90));
              Ar(f), Xr(f, h);
            }
          }
        }
        break;
      case "textarea":
        ea(n, u);
        break;
      case "select":
        r = u.value, r != null && wn(n, !!u.multiple, r, !1);
    }
  }, Cl = Ap, _o = Zl;
  var Xg = { usingClientEntryPoint: !1, Events: [Ie, fa, Sn, Xa, Sl, Ap] }, dc = { findFiberByHostInstance: Nl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xm = { bundleType: dc.bundleType, version: dc.version, rendererPackageName: dc.rendererPackageName, rendererConfig: dc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Oe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = bn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: dc.findFiberByHostInstance || Em, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nl.isDisabled && nl.supportsFiber) try {
      Oo = nl.inject(xm), Zr = nl;
    } catch {
    }
  }
  return Zi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xg, Zi.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!jp(r)) throw Error(c(200));
    return Qg(n, r, null, u);
  }, Zi.createRoot = function(n, r) {
    if (!jp(n)) throw Error(c(299));
    var u = !1, f = "", h = eu;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = If(n, 1, !1, null, null, u, !1, f, h), n[io] = r.current, ku(n.nodeType === 8 ? n.parentNode : n), new Fp(r);
  }, Zi.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : (n = Object.keys(n).join(","), Error(c(268, n)));
    return n = bn(r), n = n === null ? null : n.stateNode, n;
  }, Zi.flushSync = function(n) {
    return Zl(n);
  }, Zi.hydrate = function(n, r, u) {
    if (!Kf(r)) throw Error(c(200));
    return fc(null, n, r, !0, u);
  }, Zi.hydrateRoot = function(n, r, u) {
    if (!jp(n)) throw Error(c(405));
    var f = u != null && u.hydratedSources || null, h = !1, g = "", x = eu;
    if (u != null && (u.unstable_strictMode === !0 && (h = !0), u.identifierPrefix !== void 0 && (g = u.identifierPrefix), u.onRecoverableError !== void 0 && (x = u.onRecoverableError)), r = Cm(r, null, n, 1, u ?? null, h, !1, g, x), n[io] = r.current, ku(n), f) for (n = 0; n < f.length; n++) u = f[n], h = u._getVersion, h = h(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, h] : r.mutableSourceEagerHydrationData.push(
      u,
      h
    );
    return new Gf(r);
  }, Zi.render = function(n, r, u) {
    if (!Kf(r)) throw Error(c(200));
    return fc(null, n, r, !1, u);
  }, Zi.unmountComponentAtNode = function(n) {
    if (!Kf(n)) throw Error(c(40));
    return n._reactRootContainer ? (Zl(function() {
      fc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[io] = null;
      });
    }), !0) : !1;
  }, Zi.unstable_batchedUpdates = Ap, Zi.unstable_renderSubtreeIntoContainer = function(n, r, u, f) {
    if (!Kf(u)) throw Error(c(200));
    if (n == null || n._reactInternals === void 0) throw Error(c(38));
    return fc(n, r, u, !1, f);
  }, Zi.version = "18.3.1-next-f1338f8080-20240426", Zi;
}
var Ji = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q1;
function XL() {
  return Q1 || (Q1 = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = iv(), l = xb(), c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = !1;
    function y(e) {
      p = e;
    }
    function E(e) {
      if (!p) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        w("warn", e, i);
      }
    }
    function v(e) {
      if (!p) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        w("error", e, i);
      }
    }
    function w(e, t, i) {
      {
        var a = c.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (t += "%s", i = i.concat([s]));
        var d = i.map(function(m) {
          return String(m);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var R = 0, b = 1, M = 2, k = 3, L = 4, F = 5, q = 6, te = 7, ae = 8, de = 9, he = 10, pe = 11, Oe = 12, oe = 13, Ae = 14, ke = 15, Ue = 16, at = 17, Et = 18, Vt = 19, wt = 21, He = 22, Ot = 23, At = 24, Pt = 25, Se = !0, se = !1, Ve = !1, me = !1, j = !1, J = !0, Ze = !0, qe = !0, yt = !0, pt = /* @__PURE__ */ new Set(), ft = {}, ht = {};
    function gt(e, t) {
      Gt(e, t), Gt(e + "Capture", t);
    }
    function Gt(e, t) {
      ft[e] && v("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ft[e] = t;
      {
        var i = e.toLowerCase();
        ht[i] = e, e === "onDoubleClick" && (ht.ondblclick = e);
      }
      for (var a = 0; a < t.length; a++)
        pt.add(t[a]);
    }
    var Pn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ar = Object.prototype.hasOwnProperty;
    function Rn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function ur(e) {
      try {
        return $n(e), !1;
      } catch {
        return !0;
      }
    }
    function $n(e) {
      return "" + e;
    }
    function Gn(e, t) {
      if (ur(e))
        return v("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), $n(e);
    }
    function Xr(e) {
      if (ur(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), $n(e);
    }
    function Ca(e, t) {
      if (ur(e))
        return v("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), $n(e);
    }
    function yi(e, t) {
      if (ur(e))
        return v("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), $n(e);
    }
    function tr(e) {
      if (ur(e))
        return v("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), $n(e);
    }
    function wn(e) {
      if (ur(e))
        return v("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), $n(e);
    }
    var Kn = 0, Rr = 1, ea = 2, Un = 3, wr = 4, gi = 5, ta = 6, Ea = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ye = Ea + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Fe = new RegExp("^[" + Ea + "][" + ye + "]*$"), vt = {}, Yt = {};
    function an(e) {
      return Ar.call(Yt, e) ? !0 : Ar.call(vt, e) ? !1 : Fe.test(e) ? (Yt[e] = !0, !0) : (vt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function yn(e, t, i) {
      return t !== null ? t.type === Kn : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function cn(e, t, i, a) {
      if (i !== null && i.type === Kn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (a)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var s = e.toLowerCase().slice(0, 5);
          return s !== "data-" && s !== "aria-";
        }
        default:
          return !1;
      }
    }
    function nr(e, t, i, a) {
      if (t === null || typeof t > "u" || cn(e, t, i, a))
        return !0;
      if (a)
        return !1;
      if (i !== null)
        switch (i.type) {
          case Un:
            return !t;
          case wr:
            return t === !1;
          case gi:
            return isNaN(t);
          case ta:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function on(e) {
      return qt.hasOwnProperty(e) ? qt[e] : null;
    }
    function Qt(e, t, i, a, s, d, m) {
      this.acceptsBooleans = t === ea || t === Un || t === wr, this.attributeName = a, this.attributeNamespace = s, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = m;
    }
    var qt = {}, Si = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Si.forEach(function(e) {
      qt[e] = new Qt(
        e,
        Kn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], i = e[1];
      qt[t] = new Qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      qt[e] = new Qt(
        e,
        ea,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      qt[e] = new Qt(
        e,
        ea,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      qt[e] = new Qt(
        e,
        Un,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new Qt(
        e,
        Un,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new Qt(
        e,
        wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new Qt(
        e,
        ta,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      qt[e] = new Qt(
        e,
        gi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var br = /[\-\:]([a-z])/g, Li = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, Li);
      qt[t] = new Qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, Li);
      qt[t] = new Qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, Li);
      qt[t] = new Qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      qt[e] = new Qt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Xa = "xlinkHref";
    qt[Xa] = new Qt(
      "xlinkHref",
      Rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      qt[e] = new Qt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Sl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Cl = !1;
    function _o(e) {
      !Cl && Sl.test(e) && (Cl = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ko(e, t, i, a) {
      if (a.mustUseProperty) {
        var s = a.propertyName;
        return e[s];
      } else {
        Gn(i, t), a.sanitizeURL && _o("" + i);
        var d = a.attributeName, m = null;
        if (a.type === wr) {
          if (e.hasAttribute(d)) {
            var S = e.getAttribute(d);
            return S === "" ? !0 : nr(t, i, a, !1) ? S : S === "" + i ? i : S;
          }
        } else if (e.hasAttribute(d)) {
          if (nr(t, i, a, !1))
            return e.getAttribute(d);
          if (a.type === Un)
            return i;
          m = e.getAttribute(d);
        }
        return nr(t, i, a, !1) ? m === null ? i : m : m === "" + i ? i : m;
      }
    }
    function El(e, t, i, a) {
      {
        if (!an(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var s = e.getAttribute(t);
        return Gn(i, t), s === "" + i ? i : s;
      }
    }
    function Lr(e, t, i, a) {
      var s = on(t);
      if (!yn(t, s, a)) {
        if (nr(t, i, s, a) && (i = null), a || s === null) {
          if (an(t)) {
            var d = t;
            i === null ? e.removeAttribute(d) : (Gn(i, t), e.setAttribute(d, "" + i));
          }
          return;
        }
        var m = s.mustUseProperty;
        if (m) {
          var S = s.propertyName;
          if (i === null) {
            var C = s.type;
            e[S] = C === Un ? !1 : "";
          } else
            e[S] = i;
          return;
        }
        var D = s.attributeName, _ = s.attributeNamespace;
        if (i === null)
          e.removeAttribute(D);
        else {
          var z = s.type, U;
          z === Un || z === wr && i === !0 ? U = "" : (Gn(i, D), U = "" + i, s.sanitizeURL && _o(U.toString())), _ ? e.setAttributeNS(_, D, U) : e.setAttribute(D, U);
        }
      }
    }
    var Nr = Symbol.for("react.element"), sr = Symbol.for("react.portal"), Ta = Symbol.for("react.fragment"), na = Symbol.for("react.strict_mode"), xa = Symbol.for("react.profiler"), Ra = Symbol.for("react.provider"), N = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), Tt = Symbol.for("react.scope"), St = Symbol.for("react.debug_trace_mode"), bn = Symbol.for("react.offscreen"), ln = Symbol.for("react.legacy_hidden"), fn = Symbol.for("react.cache"), cr = Symbol.for("react.tracing_marker"), ra = Symbol.iterator, ia = "@@iterator";
    function ut(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ra && e[ra] || e[ia];
      return typeof t == "function" ? t : null;
    }
    var dt = Object.assign, aa = 0, Tl, xl, Mo, hu, Oo, Zr, ms;
    function Pr() {
    }
    Pr.__reactDisabledLog = !0;
    function Fc() {
      {
        if (aa === 0) {
          Tl = console.log, xl = console.info, Mo = console.warn, hu = console.error, Oo = console.group, Zr = console.groupCollapsed, ms = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        aa++;
      }
    }
    function jc() {
      {
        if (aa--, aa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: dt({}, e, {
              value: Tl
            }),
            info: dt({}, e, {
              value: xl
            }),
            warn: dt({}, e, {
              value: Mo
            }),
            error: dt({}, e, {
              value: hu
            }),
            group: dt({}, e, {
              value: Oo
            }),
            groupCollapsed: dt({}, e, {
              value: Zr
            }),
            groupEnd: dt({}, e, {
              value: ms
            })
          });
        }
        aa < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vu = c.ReactCurrentDispatcher, Ao;
    function Ci(e, t, i) {
      {
        if (Ao === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            Ao = a && a[1] || "";
          }
        return `
` + Ao + e;
      }
    }
    var oa = !1, la;
    {
      var mu = typeof WeakMap == "function" ? WeakMap : Map;
      la = new mu();
    }
    function Rl(e, t) {
      if (!e || oa)
        return "";
      {
        var i = la.get(e);
        if (i !== void 0)
          return i;
      }
      var a;
      oa = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = vu.current, vu.current = null, Fc();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (K) {
              a = K;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (K) {
              a = K;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            a = K;
          }
          e();
        }
      } catch (K) {
        if (K && a && typeof K.stack == "string") {
          for (var S = K.stack.split(`
`), C = a.stack.split(`
`), D = S.length - 1, _ = C.length - 1; D >= 1 && _ >= 0 && S[D] !== C[_]; )
            _--;
          for (; D >= 1 && _ >= 0; D--, _--)
            if (S[D] !== C[_]) {
              if (D !== 1 || _ !== 1)
                do
                  if (D--, _--, _ < 0 || S[D] !== C[_]) {
                    var z = `
` + S[D].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && la.set(e, z), z;
                  }
                while (D >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        oa = !1, vu.current = d, jc(), Error.prepareStackTrace = s;
      }
      var U = e ? e.displayName || e.name : "", W = U ? Ci(U) : "";
      return typeof e == "function" && la.set(e, W), W;
    }
    function Lo(e, t, i) {
      return Rl(e, !0);
    }
    function yu(e, t, i) {
      return Rl(e, !1);
    }
    function gu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Za(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Rl(e, gu(e));
      if (typeof e == "string")
        return Ci(e);
      switch (e) {
        case Ee:
          return Ci("Suspense");
        case Me:
          return Ci("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            return yu(e.render);
          case lt:
            return Za(e.type, t, i);
          case rt: {
            var a = e, s = a._payload, d = a._init;
            try {
              return Za(d(s), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function Pd(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case F:
          return Ci(e.type);
        case Ue:
          return Ci("Lazy");
        case oe:
          return Ci("Suspense");
        case Vt:
          return Ci("SuspenseList");
        case R:
        case M:
        case ke:
          return yu(e.type);
        case pe:
          return yu(e.type.render);
        case b:
          return Lo(e.type);
        default:
          return "";
      }
    }
    function Ja(e) {
      try {
        var t = "", i = e;
        do
          t += Pd(i), i = i.return;
        while (i);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    function zt(e, t, i) {
      var a = e.displayName;
      if (a)
        return a;
      var s = t.displayName || t.name || "";
      return s !== "" ? i + "(" + s + ")" : i;
    }
    function Su(e) {
      return e.displayName || "Context";
    }
    function Lt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ta:
          return "Fragment";
        case sr:
          return "Portal";
        case xa:
          return "Profiler";
        case na:
          return "StrictMode";
        case Ee:
          return "Suspense";
        case Me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case N:
            var t = e;
            return Su(t) + ".Consumer";
          case Ra:
            var i = e;
            return Su(i._context) + ".Provider";
          case ne:
            return zt(e, e.render, "ForwardRef");
          case lt:
            var a = e.displayName || null;
            return a !== null ? a : Lt(e.type) || "Memo";
          case rt: {
            var s = e, d = s._payload, m = s._init;
            try {
              return Lt(m(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ys(e, t, i) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? i + "(" + a + ")" : i);
    }
    function wa(e) {
      return e.displayName || "Context";
    }
    function nt(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case At:
          return "Cache";
        case de:
          var a = i;
          return wa(a) + ".Consumer";
        case he:
          var s = i;
          return wa(s._context) + ".Provider";
        case Et:
          return "DehydratedFragment";
        case pe:
          return ys(i, i.render, "ForwardRef");
        case te:
          return "Fragment";
        case F:
          return i;
        case L:
          return "Portal";
        case k:
          return "Root";
        case q:
          return "Text";
        case Ue:
          return Lt(i);
        case ae:
          return i === na ? "StrictMode" : "Mode";
        case He:
          return "Offscreen";
        case Oe:
          return "Profiler";
        case wt:
          return "Scope";
        case oe:
          return "Suspense";
        case Vt:
          return "SuspenseList";
        case Pt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case b:
        case R:
        case at:
        case M:
        case Ae:
        case ke:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var Cu = c.ReactDebugCurrentFrame, fr = null, ba = !1;
    function Ur() {
      {
        if (fr === null)
          return null;
        var e = fr._debugOwner;
        if (e !== null && typeof e < "u")
          return nt(e);
      }
      return null;
    }
    function Da() {
      return fr === null ? "" : Ja(fr);
    }
    function dn() {
      Cu.getCurrentStack = null, fr = null, ba = !1;
    }
    function Xt(e) {
      Cu.getCurrentStack = e === null ? null : Da, fr = e, ba = !1;
    }
    function No() {
      return fr;
    }
    function Qn(e) {
      ba = e;
    }
    function Vr(e) {
      return "" + e;
    }
    function Ni(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return wn(e), e;
        default:
          return "";
      }
    }
    var wl = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function gs(e, t) {
      wl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ss(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Po(e) {
      return e._valueTracker;
    }
    function bl(e) {
      e._valueTracker = null;
    }
    function Ud(e) {
      var t = "";
      return e && (Ss(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Pi(e) {
      var t = Ss(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wn(e[t]);
      var a = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var s = i.get, d = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return s.call(this);
          },
          set: function(S) {
            wn(S), a = "" + S, d.call(this, S);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var m = {
          getValue: function() {
            return a;
          },
          setValue: function(S) {
            wn(S), a = "" + S;
          },
          stopTracking: function() {
            bl(e), delete e[t];
          }
        };
        return m;
      }
    }
    function ua(e) {
      Po(e) || (e._valueTracker = Pi(e));
    }
    function _a(e) {
      if (!e)
        return !1;
      var t = Po(e);
      if (!t)
        return !0;
      var i = t.getValue(), a = Ud(e);
      return a !== i ? (t.setValue(a), !0) : !1;
    }
    function Ui(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Eu = !1, Tu = !1, Uo = !1, Dl = !1;
    function xu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ru(e, t) {
      var i = e, a = t.checked, s = dt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a ?? i._wrapperState.initialChecked
      });
      return s;
    }
    function sa(e, t) {
      gs("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Tu && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), Tu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Eu && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), Eu = !0);
      var i = e, a = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ni(t.value != null ? t.value : a),
        controlled: xu(t)
      };
    }
    function T(e, t) {
      var i = e, a = t.checked;
      a != null && Lr(i, "checked", a, !1);
    }
    function A(e, t) {
      var i = e;
      {
        var a = xu(t);
        !i._wrapperState.controlled && a && !Dl && (v("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Dl = !0), i._wrapperState.controlled && !a && !Uo && (v("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Uo = !0);
      }
      T(e, t);
      var s = Ni(t.value), d = t.type;
      if (s != null)
        d === "number" ? (s === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != s) && (i.value = Vr(s)) : i.value !== Vr(s) && (i.value = Vr(s));
      else if (d === "submit" || d === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? We(i, t.type, s) : t.hasOwnProperty("defaultValue") && We(i, t.type, Ni(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function $(e, t, i) {
      var a = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var s = t.type, d = s === "submit" || s === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var m = Vr(a._wrapperState.initialValue);
        i || m !== a.value && (a.value = m), a.defaultValue = m;
      }
      var S = a.name;
      S !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, S !== "" && (a.name = S);
    }
    function Q(e, t) {
      var i = e;
      A(i, t), ve(i, t);
    }
    function ve(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var a = e; a.parentNode; )
          a = a.parentNode;
        Gn(i, "name");
        for (var s = a.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), d = 0; d < s.length; d++) {
          var m = s[d];
          if (!(m === e || m.form !== e.form)) {
            var S = Bm(m);
            if (!S)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            _a(m), A(m, S);
          }
        }
      }
    }
    function We(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ui(e.ownerDocument) !== e) && (i == null ? e.defaultValue = Vr(e._wrapperState.initialValue) : e.defaultValue !== Vr(i) && (e.defaultValue = Vr(i)));
    }
    var Ce = !1, Ke = !1, xt = !1;
    function Nt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? o.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || Ke || (Ke = !0, v("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (xt || (xt = !0, v("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ce && (v("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ce = !0);
    }
    function un(e, t) {
      t.value != null && e.setAttribute("value", Vr(Ni(t.value)));
    }
    var Zt = Array.isArray;
    function mt(e) {
      return Zt(e);
    }
    var Jt;
    Jt = !1;
    function gn() {
      var e = Ur();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Vo = ["value", "defaultValue"];
    function Cs(e) {
      {
        gs("select", e);
        for (var t = 0; t < Vo.length; t++) {
          var i = Vo[t];
          if (e[i] != null) {
            var a = mt(e[i]);
            e.multiple && !a ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, gn()) : !e.multiple && a && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, gn());
          }
        }
      }
    }
    function eo(e, t, i, a) {
      var s = e.options;
      if (t) {
        for (var d = i, m = {}, S = 0; S < d.length; S++)
          m["$" + d[S]] = !0;
        for (var C = 0; C < s.length; C++) {
          var D = m.hasOwnProperty("$" + s[C].value);
          s[C].selected !== D && (s[C].selected = D), D && a && (s[C].defaultSelected = !0);
        }
      } else {
        for (var _ = Vr(Ni(i)), z = null, U = 0; U < s.length; U++) {
          if (s[U].value === _) {
            s[U].selected = !0, a && (s[U].defaultSelected = !0);
            return;
          }
          z === null && !s[U].disabled && (z = s[U]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function Es(e, t) {
      return dt({}, t, {
        value: void 0
      });
    }
    function _l(e, t) {
      var i = e;
      Cs(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Jt && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Jt = !0);
    }
    function Vd(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var a = t.value;
      a != null ? eo(i, !!t.multiple, a, !1) : t.defaultValue != null && eo(i, !!t.multiple, t.defaultValue, !0);
    }
    function Bc(e, t) {
      var i = e, a = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var s = t.value;
      s != null ? eo(i, !!t.multiple, s, !1) : a !== !!t.multiple && (t.defaultValue != null ? eo(i, !!t.multiple, t.defaultValue, !0) : eo(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function zd(e, t) {
      var i = e, a = t.value;
      a != null && eo(i, !!t.multiple, a, !1);
    }
    var cv = !1;
    function Fd(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var a = dt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Vr(i._wrapperState.initialValue)
      });
      return a;
    }
    function jd(e, t) {
      var i = e;
      gs("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cv && (v("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component"), cv = !0);
      var a = t.value;
      if (a == null) {
        var s = t.children, d = t.defaultValue;
        if (s != null) {
          v("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (mt(s)) {
              if (s.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              s = s[0];
            }
            d = s;
          }
        }
        d == null && (d = ""), a = d;
      }
      i._wrapperState = {
        initialValue: Ni(a)
      };
    }
    function fv(e, t) {
      var i = e, a = Ni(t.value), s = Ni(t.defaultValue);
      if (a != null) {
        var d = Vr(a);
        d !== i.value && (i.value = d), t.defaultValue == null && i.defaultValue !== d && (i.defaultValue = d);
      }
      s != null && (i.defaultValue = Vr(s));
    }
    function dv(e, t) {
      var i = e, a = i.textContent;
      a === i._wrapperState.initialValue && a !== "" && a !== null && (i.value = a);
    }
    function bg(e, t) {
      fv(e, t);
    }
    var to = "http://www.w3.org/1999/xhtml", Bd = "http://www.w3.org/1998/Math/MathML", Hd = "http://www.w3.org/2000/svg";
    function Id(e) {
      switch (e) {
        case "svg":
          return Hd;
        case "math":
          return Bd;
        default:
          return to;
      }
    }
    function Yd(e, t) {
      return e == null || e === to ? Id(t) : e === Hd && t === "foreignObject" ? to : e;
    }
    var pv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, a, s) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, a, s);
        });
      } : e;
    }, Hc, hv = pv(function(e, t) {
      if (e.namespaceURI === Hd && !("innerHTML" in e)) {
        Hc = Hc || document.createElement("div"), Hc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Hc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Jr = 1, no = 3, Vn = 8, ro = 9, Wd = 11, wu = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === no) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ts = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, xs = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function vv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var mv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(xs).forEach(function(e) {
      mv.forEach(function(t) {
        xs[vv(t, e)] = xs[e];
      });
    });
    function Ic(e, t, i) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !i && typeof t == "number" && t !== 0 && !(xs.hasOwnProperty(e) && xs[e]) ? t + "px" : (yi(t, e), ("" + t).trim());
    }
    var yv = /([A-Z])/g, gv = /^ms-/;
    function bu(e) {
      return e.replace(yv, "-$1").toLowerCase().replace(gv, "-ms-");
    }
    var Sv = function() {
    };
    {
      var Dg = /^(?:webkit|moz|o)[A-Z]/, _g = /^-ms-/, Cv = /-(.)/g, $d = /;\s*$/, ka = {}, kl = {}, Ev = !1, Rs = !1, kg = function(e) {
        return e.replace(Cv, function(t, i) {
          return i.toUpperCase();
        });
      }, Tv = function(e) {
        ka.hasOwnProperty(e) && ka[e] || (ka[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          kg(e.replace(_g, "ms-"))
        ));
      }, Gd = function(e) {
        ka.hasOwnProperty(e) && ka[e] || (ka[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Kd = function(e, t) {
        kl.hasOwnProperty(t) && kl[t] || (kl[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace($d, "")));
      }, xv = function(e, t) {
        Ev || (Ev = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Rv = function(e, t) {
        Rs || (Rs = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Sv = function(e, t) {
        e.indexOf("-") > -1 ? Tv(e) : Dg.test(e) ? Gd(e) : $d.test(t) && Kd(e, t), typeof t == "number" && (isNaN(t) ? xv(e, t) : isFinite(t) || Rv(e, t));
      };
    }
    var wv = Sv;
    function Mg(e) {
      {
        var t = "", i = "";
        for (var a in e)
          if (e.hasOwnProperty(a)) {
            var s = e[a];
            if (s != null) {
              var d = a.indexOf("--") === 0;
              t += i + (d ? a : bu(a)) + ":", t += Ic(a, s, d), i = ";";
            }
          }
        return t || null;
      }
    }
    function bv(e, t) {
      var i = e.style;
      for (var a in t)
        if (t.hasOwnProperty(a)) {
          var s = a.indexOf("--") === 0;
          s || wv(a, t[a]);
          var d = Ic(a, t[a], s);
          a === "float" && (a = "cssFloat"), s ? i.setProperty(a, d) : i[a] = d;
        }
    }
    function Og(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Dv(e) {
      var t = {};
      for (var i in e)
        for (var a = Ts[i] || [i], s = 0; s < a.length; s++)
          t[a[s]] = i;
      return t;
    }
    function Ag(e, t) {
      {
        if (!t)
          return;
        var i = Dv(e), a = Dv(t), s = {};
        for (var d in i) {
          var m = i[d], S = a[d];
          if (S && m !== S) {
            var C = m + "," + S;
            if (s[C])
              continue;
            s[C] = !0, v("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Og(e[m]) ? "Removing" : "Updating", m, S);
          }
        }
      }
    }
    var ca = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ws = dt({
      menuitem: !0
    }, ca), _v = "__html";
    function Yc(e, t) {
      if (t) {
        if (ws[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(_v in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && v("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function zo(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var bs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Wc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Du = {}, Lg = new RegExp("^(aria)-[" + ye + "]*$"), _u = new RegExp("^(aria)[A-Z][" + ye + "]*$");
    function Qd(e, t) {
      {
        if (Ar.call(Du, t) && Du[t])
          return !0;
        if (_u.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), a = Wc.hasOwnProperty(i) ? i : null;
          if (a == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Du[t] = !0, !0;
          if (t !== a)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), Du[t] = !0, !0;
        }
        if (Lg.test(t)) {
          var s = t.toLowerCase(), d = Wc.hasOwnProperty(s) ? s : null;
          if (d == null)
            return Du[t] = !0, !1;
          if (t !== d)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Du[t] = !0, !0;
        }
      }
      return !0;
    }
    function Ds(e, t) {
      {
        var i = [];
        for (var a in t) {
          var s = Qd(e, a);
          s || i.push(a);
        }
        var d = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : i.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function qd(e, t) {
      zo(e, t) || Ds(e, t);
    }
    var Xd = !1;
    function $c(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Xd && (Xd = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ml = function() {
    };
    {
      var dr = {}, Zd = /^on./, Gc = /^on[^A-Z]/, kv = new RegExp("^(aria)-[" + ye + "]*$"), Mv = new RegExp("^(aria)[A-Z][" + ye + "]*$");
      Ml = function(e, t, i, a) {
        if (Ar.call(dr, t) && dr[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dr[t] = !0, !0;
        if (a != null) {
          var d = a.registrationNameDependencies, m = a.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var S = m.hasOwnProperty(s) ? m[s] : null;
          if (S != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, S), dr[t] = !0, !0;
          if (Zd.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (Zd.test(t))
          return Gc.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if (kv.test(t) || Mv.test(t))
          return !0;
        if (s === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dr[t] = !0, !0;
        if (s === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dr[t] = !0, !0;
        if (s === "is" && i !== null && i !== void 0 && typeof i != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), dr[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dr[t] = !0, !0;
        var C = on(t), D = C !== null && C.type === Kn;
        if (bs.hasOwnProperty(s)) {
          var _ = bs[s];
          if (_ !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, _), dr[t] = !0, !0;
        } else if (!D && t !== s)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), dr[t] = !0, !0;
        return typeof i == "boolean" && cn(t, i, C, !1) ? (i ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), dr[t] = !0, !0) : D ? !0 : cn(t, i, C, !1) ? (dr[t] = !0, !1) : ((i === "false" || i === "true") && C !== null && C.type === Un && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), dr[t] = !0), !0);
      };
    }
    var Ov = function(e, t, i) {
      {
        var a = [];
        for (var s in t) {
          var d = Ml(e, s, t[s], i);
          d || a.push(s);
        }
        var m = a.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        a.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : a.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
      }
    };
    function Av(e, t, i) {
      zo(e, t) || Ov(e, t, i);
    }
    var Jd = 1, Kc = 2, Vi = 4, ep = Jd | Kc | Vi, Ol = null;
    function Ng(e) {
      Ol !== null && v("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ol = e;
    }
    function Pg() {
      Ol === null && v("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ol = null;
    }
    function _s(e) {
      return e === Ol;
    }
    function tp(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === no ? t.parentNode : t;
    }
    var Qc = null, Al = null, Wt = null;
    function qc(e) {
      var t = Qu(e);
      if (t) {
        if (typeof Qc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var a = Bm(i);
          Qc(t.stateNode, t.type, a);
        }
      }
    }
    function Xc(e) {
      Qc = e;
    }
    function ku(e) {
      Al ? Wt ? Wt.push(e) : Wt = [e] : Al = e;
    }
    function Lv() {
      return Al !== null || Wt !== null;
    }
    function Zc() {
      if (Al) {
        var e = Al, t = Wt;
        if (Al = null, Wt = null, qc(e), t)
          for (var i = 0; i < t.length; i++)
            qc(t[i]);
      }
    }
    var Mu = function(e, t) {
      return e(t);
    }, ks = function() {
    }, Fo = !1;
    function Nv() {
      var e = Lv();
      e && (ks(), Zc());
    }
    function Pv(e, t, i) {
      if (Fo)
        return e(t, i);
      Fo = !0;
      try {
        return Mu(e, t, i);
      } finally {
        Fo = !1, Nv();
      }
    }
    function Ug(e, t, i) {
      Mu = e, ks = i;
    }
    function Uv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Jc(e, t, i) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(i.disabled && Uv(t));
        default:
          return !1;
      }
    }
    function jo(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var a = Bm(i);
      if (a === null)
        return null;
      var s = a[t];
      if (Jc(t, e.type, a))
        return null;
      if (s && typeof s != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof s + "` type.");
      return s;
    }
    var Ms = !1;
    if (Pn)
      try {
        var Ll = {};
        Object.defineProperty(Ll, "passive", {
          get: function() {
            Ms = !0;
          }
        }), window.addEventListener("test", Ll, Ll), window.removeEventListener("test", Ll, Ll);
      } catch {
        Ms = !1;
      }
    function ef(e, t, i, a, s, d, m, S, C) {
      var D = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, D);
      } catch (_) {
        this.onError(_);
      }
    }
    var tf = ef;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var np = document.createElement("react");
      tf = function(t, i, a, s, d, m, S, C, D) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var _ = document.createEvent("Event"), z = !1, U = !0, W = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          np.removeEventListener(Z, $e, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var xe = Array.prototype.slice.call(arguments, 3);
        function $e() {
          z = !0, X(), i.apply(a, xe), U = !1;
        }
        var je, Mt = !1, Rt = !1;
        function H(I) {
          if (je = I.error, Mt = !0, je === null && I.colno === 0 && I.lineno === 0 && (Rt = !0), I.defaultPrevented && je != null && typeof je == "object")
            try {
              je._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", H), np.addEventListener(Z, $e, !1), _.initEvent(Z, !1, !1), np.dispatchEvent(_), K && Object.defineProperty(window, "event", K), z && U && (Mt ? Rt && (je = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : je = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(je)), window.removeEventListener("error", H), !z)
          return X(), ef.apply(this, arguments);
      };
    }
    var Vv = tf, Ou = !1, nf = null, Au = !1, Ma = null, zv = {
      onError: function(e) {
        Ou = !0, nf = e;
      }
    };
    function Bo(e, t, i, a, s, d, m, S, C) {
      Ou = !1, nf = null, Vv.apply(zv, arguments);
    }
    function Oa(e, t, i, a, s, d, m, S, C) {
      if (Bo.apply(this, arguments), Ou) {
        var D = As();
        Au || (Au = !0, Ma = D);
      }
    }
    function Os() {
      if (Au) {
        var e = Ma;
        throw Au = !1, Ma = null, e;
      }
    }
    function io() {
      return Ou;
    }
    function As() {
      if (Ou) {
        var e = nf;
        return Ou = !1, nf = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Lu(e) {
      return e._reactInternals;
    }
    function Vg(e) {
      return e._reactInternals !== void 0;
    }
    function Nl(e, t) {
      e._reactInternals = t;
    }
    var Ie = (
      /*                      */
      0
    ), fa = (
      /*                */
      1
    ), Sn = (
      /*                    */
      2
    ), Dt = (
      /*                       */
      4
    ), zi = (
      /*                */
      16
    ), Fi = (
      /*                 */
      32
    ), sn = (
      /*                     */
      64
    ), Be = (
      /*                   */
      128
    ), Dr = (
      /*            */
      256
    ), xn = (
      /*                          */
      512
    ), qn = (
      /*                     */
      1024
    ), ei = (
      /*                      */
      2048
    ), ti = (
      /*                    */
      4096
    ), zn = (
      /*                   */
      8192
    ), Nu = (
      /*             */
      16384
    ), Fv = (
      /*               */
      32767
    ), Ls = (
      /*                   */
      32768
    ), rr = (
      /*                */
      65536
    ), rf = (
      /* */
      131072
    ), Aa = (
      /*                       */
      1048576
    ), Pu = (
      /*                    */
      2097152
    ), ao = (
      /*                 */
      4194304
    ), af = (
      /*                */
      8388608
    ), Ho = (
      /*               */
      16777216
    ), La = (
      /*              */
      33554432
    ), Io = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Dt | qn | 0
    ), Yo = Sn | Dt | zi | Fi | xn | ti | zn, Wo = Dt | sn | xn | zn, oo = ei | zi, Fn = ao | af | Pu, ji = c.ReactCurrentOwner;
    function Ei(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var a = t;
        do
          t = a, (t.flags & (Sn | ti)) !== Ie && (i = t.return), a = t.return;
        while (a);
      }
      return t.tag === k ? i : null;
    }
    function Na(e) {
      if (e.tag === oe) {
        var t = e.memoizedState;
        if (t === null) {
          var i = e.alternate;
          i !== null && (t = i.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Pa(e) {
      return e.tag === k ? e.stateNode.containerInfo : null;
    }
    function Pl(e) {
      return Ei(e) === e;
    }
    function jv(e) {
      {
        var t = ji.current;
        if (t !== null && t.tag === b) {
          var i = t, a = i.stateNode;
          a._warnedAboutRefsInRender || v("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nt(i) || "A component"), a._warnedAboutRefsInRender = !0;
        }
      }
      var s = Lu(e);
      return s ? Ei(s) === s : !1;
    }
    function of(e) {
      if (Ei(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function lf(e) {
      var t = e.alternate;
      if (!t) {
        var i = Ei(e);
        if (i === null)
          throw new Error("Unable to find node on an unmounted component.");
        return i !== e ? null : e;
      }
      for (var a = e, s = t; ; ) {
        var d = a.return;
        if (d === null)
          break;
        var m = d.alternate;
        if (m === null) {
          var S = d.return;
          if (S !== null) {
            a = s = S;
            continue;
          }
          break;
        }
        if (d.child === m.child) {
          for (var C = d.child; C; ) {
            if (C === a)
              return of(d), e;
            if (C === s)
              return of(d), t;
            C = C.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== s.return)
          a = d, s = m;
        else {
          for (var D = !1, _ = d.child; _; ) {
            if (_ === a) {
              D = !0, a = d, s = m;
              break;
            }
            if (_ === s) {
              D = !0, s = d, a = m;
              break;
            }
            _ = _.sibling;
          }
          if (!D) {
            for (_ = m.child; _; ) {
              if (_ === a) {
                D = !0, a = m, s = d;
                break;
              }
              if (_ === s) {
                D = !0, s = m, a = d;
                break;
              }
              _ = _.sibling;
            }
            if (!D)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (a.alternate !== s)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (a.tag !== k)
        throw new Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function ni(e) {
      var t = lf(e);
      return t !== null ? ri(t) : null;
    }
    function ri(e) {
      if (e.tag === F || e.tag === q)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = ri(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function hn(e) {
      var t = lf(e);
      return t !== null ? Bi(t) : null;
    }
    function Bi(e) {
      if (e.tag === F || e.tag === q)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== L) {
          var i = Bi(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var rp = l.unstable_scheduleCallback, Bv = l.unstable_cancelCallback, ip = l.unstable_shouldYield, ap = l.unstable_requestPaint, Xn = l.unstable_now, uf = l.unstable_getCurrentPriorityLevel, Ns = l.unstable_ImmediatePriority, $o = l.unstable_UserBlockingPriority, lo = l.unstable_NormalPriority, zg = l.unstable_LowPriority, Ul = l.unstable_IdlePriority, sf = l.unstable_yieldValue, Hv = l.unstable_setDisableYieldValue, Vl = null, Dn = null, Te = null, Ti = !1, ii = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Uu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return v("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ze && (e = dt({}, e, {
          getLaneLabelMap: zl,
          injectProfilingHooks: Hi
        })), Vl = t.inject(e), Dn = t;
      } catch (i) {
        v("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function op(e, t) {
      if (Dn && typeof Dn.onScheduleFiberRoot == "function")
        try {
          Dn.onScheduleFiberRoot(Vl, e, t);
        } catch (i) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", i));
        }
    }
    function lp(e, t) {
      if (Dn && typeof Dn.onCommitFiberRoot == "function")
        try {
          var i = (e.current.flags & Be) === Be;
          if (qe) {
            var a;
            switch (t) {
              case zr:
                a = Ns;
                break;
              case Va:
                a = $o;
                break;
              case Ii:
                a = lo;
                break;
              case Yi:
                a = Ul;
                break;
              default:
                a = lo;
                break;
            }
            Dn.onCommitFiberRoot(Vl, e, a, i);
          }
        } catch (s) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", s));
        }
    }
    function up(e) {
      if (Dn && typeof Dn.onPostCommitFiberRoot == "function")
        try {
          Dn.onPostCommitFiberRoot(Vl, e);
        } catch (t) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function sp(e) {
      if (Dn && typeof Dn.onCommitFiberUnmount == "function")
        try {
          Dn.onCommitFiberUnmount(Vl, e);
        } catch (t) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Cn(e) {
      if (typeof sf == "function" && (Hv(e), y(e)), Dn && typeof Dn.setStrictMode == "function")
        try {
          Dn.setStrictMode(Vl, e);
        } catch (t) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Hi(e) {
      Te = e;
    }
    function zl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Bl; i++) {
          var a = $v(t);
          e.set(t, a), t *= 2;
        }
        return e;
      }
    }
    function cp(e) {
      Te !== null && typeof Te.markCommitStarted == "function" && Te.markCommitStarted(e);
    }
    function fp() {
      Te !== null && typeof Te.markCommitStopped == "function" && Te.markCommitStopped();
    }
    function xi(e) {
      Te !== null && typeof Te.markComponentRenderStarted == "function" && Te.markComponentRenderStarted(e);
    }
    function Ri() {
      Te !== null && typeof Te.markComponentRenderStopped == "function" && Te.markComponentRenderStopped();
    }
    function dp(e) {
      Te !== null && typeof Te.markComponentPassiveEffectMountStarted == "function" && Te.markComponentPassiveEffectMountStarted(e);
    }
    function Iv() {
      Te !== null && typeof Te.markComponentPassiveEffectMountStopped == "function" && Te.markComponentPassiveEffectMountStopped();
    }
    function uo(e) {
      Te !== null && typeof Te.markComponentPassiveEffectUnmountStarted == "function" && Te.markComponentPassiveEffectUnmountStarted(e);
    }
    function Go() {
      Te !== null && typeof Te.markComponentPassiveEffectUnmountStopped == "function" && Te.markComponentPassiveEffectUnmountStopped();
    }
    function cf(e) {
      Te !== null && typeof Te.markComponentLayoutEffectMountStarted == "function" && Te.markComponentLayoutEffectMountStarted(e);
    }
    function Yv() {
      Te !== null && typeof Te.markComponentLayoutEffectMountStopped == "function" && Te.markComponentLayoutEffectMountStopped();
    }
    function Ps(e) {
      Te !== null && typeof Te.markComponentLayoutEffectUnmountStarted == "function" && Te.markComponentLayoutEffectUnmountStarted(e);
    }
    function pp() {
      Te !== null && typeof Te.markComponentLayoutEffectUnmountStopped == "function" && Te.markComponentLayoutEffectUnmountStopped();
    }
    function Us(e, t, i) {
      Te !== null && typeof Te.markComponentErrored == "function" && Te.markComponentErrored(e, t, i);
    }
    function Ua(e, t, i) {
      Te !== null && typeof Te.markComponentSuspended == "function" && Te.markComponentSuspended(e, t, i);
    }
    function Vs(e) {
      Te !== null && typeof Te.markLayoutEffectsStarted == "function" && Te.markLayoutEffectsStarted(e);
    }
    function zs() {
      Te !== null && typeof Te.markLayoutEffectsStopped == "function" && Te.markLayoutEffectsStopped();
    }
    function Fl(e) {
      Te !== null && typeof Te.markPassiveEffectsStarted == "function" && Te.markPassiveEffectsStarted(e);
    }
    function hp() {
      Te !== null && typeof Te.markPassiveEffectsStopped == "function" && Te.markPassiveEffectsStopped();
    }
    function jl(e) {
      Te !== null && typeof Te.markRenderStarted == "function" && Te.markRenderStarted(e);
    }
    function Wv() {
      Te !== null && typeof Te.markRenderYielded == "function" && Te.markRenderYielded();
    }
    function ff() {
      Te !== null && typeof Te.markRenderStopped == "function" && Te.markRenderStopped();
    }
    function En(e) {
      Te !== null && typeof Te.markRenderScheduled == "function" && Te.markRenderScheduled(e);
    }
    function df(e, t) {
      Te !== null && typeof Te.markForceUpdateScheduled == "function" && Te.markForceUpdateScheduled(e, t);
    }
    function Fs(e, t) {
      Te !== null && typeof Te.markStateUpdateScheduled == "function" && Te.markStateUpdateScheduled(e, t);
    }
    var Ye = (
      /*                         */
      0
    ), Ct = (
      /*                 */
      1
    ), Ft = (
      /*                    */
      2
    ), en = (
      /*               */
      8
    ), jt = (
      /*              */
      16
    ), jn = Math.clz32 ? Math.clz32 : js, ir = Math.log, pf = Math.LN2;
    function js(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ir(t) / pf | 0) | 0;
    }
    var Bl = 31, re = (
      /*                        */
      0
    ), Ut = (
      /*                          */
      0
    ), Xe = (
      /*                        */
      1
    ), Ko = (
      /*    */
      2
    ), da = (
      /*             */
      4
    ), _r = (
      /*            */
      8
    ), _n = (
      /*                     */
      16
    ), so = (
      /*                */
      32
    ), Qo = (
      /*                       */
      4194240
    ), Hl = (
      /*                        */
      64
    ), hf = (
      /*                        */
      128
    ), vf = (
      /*                        */
      256
    ), mf = (
      /*                        */
      512
    ), yf = (
      /*                        */
      1024
    ), gf = (
      /*                        */
      2048
    ), Sf = (
      /*                        */
      4096
    ), Cf = (
      /*                        */
      8192
    ), Ef = (
      /*                        */
      16384
    ), Il = (
      /*                       */
      32768
    ), Tf = (
      /*                       */
      65536
    ), Vu = (
      /*                       */
      131072
    ), zu = (
      /*                       */
      262144
    ), xf = (
      /*                       */
      524288
    ), Bs = (
      /*                       */
      1048576
    ), Rf = (
      /*                       */
      2097152
    ), Hs = (
      /*                            */
      130023424
    ), Yl = (
      /*                             */
      4194304
    ), wf = (
      /*                             */
      8388608
    ), Is = (
      /*                             */
      16777216
    ), bf = (
      /*                             */
      33554432
    ), Df = (
      /*                             */
      67108864
    ), vp = Yl, Ys = (
      /*          */
      134217728
    ), mp = (
      /*                          */
      268435455
    ), Ws = (
      /*               */
      268435456
    ), Wl = (
      /*                        */
      536870912
    ), ai = (
      /*                   */
      1073741824
    );
    function $v(e) {
      {
        if (e & Xe)
          return "Sync";
        if (e & Ko)
          return "InputContinuousHydration";
        if (e & da)
          return "InputContinuous";
        if (e & _r)
          return "DefaultHydration";
        if (e & _n)
          return "Default";
        if (e & so)
          return "TransitionHydration";
        if (e & Qo)
          return "Transition";
        if (e & Hs)
          return "Retry";
        if (e & Ys)
          return "SelectiveHydration";
        if (e & Ws)
          return "IdleHydration";
        if (e & Wl)
          return "Idle";
        if (e & ai)
          return "Offscreen";
      }
    }
    var rn = -1, $l = Hl, _f = Yl;
    function $s(e) {
      switch (qo(e)) {
        case Xe:
          return Xe;
        case Ko:
          return Ko;
        case da:
          return da;
        case _r:
          return _r;
        case _n:
          return _n;
        case so:
          return so;
        case Hl:
        case hf:
        case vf:
        case mf:
        case yf:
        case gf:
        case Sf:
        case Cf:
        case Ef:
        case Il:
        case Tf:
        case Vu:
        case zu:
        case xf:
        case Bs:
        case Rf:
          return e & Qo;
        case Yl:
        case wf:
        case Is:
        case bf:
        case Df:
          return e & Hs;
        case Ys:
          return Ys;
        case Ws:
          return Ws;
        case Wl:
          return Wl;
        case ai:
          return ai;
        default:
          return v("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function kf(e, t) {
      var i = e.pendingLanes;
      if (i === re)
        return re;
      var a = re, s = e.suspendedLanes, d = e.pingedLanes, m = i & mp;
      if (m !== re) {
        var S = m & ~s;
        if (S !== re)
          a = $s(S);
        else {
          var C = m & d;
          C !== re && (a = $s(C));
        }
      } else {
        var D = i & ~s;
        D !== re ? a = $s(D) : d !== re && (a = $s(d));
      }
      if (a === re)
        return re;
      if (t !== re && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & s) === re) {
        var _ = qo(a), z = qo(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          _ >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          _ === _n && (z & Qo) !== re
        )
          return t;
      }
      (a & da) !== re && (a |= i & _n);
      var U = e.entangledLanes;
      if (U !== re)
        for (var W = e.entanglements, K = a & U; K > 0; ) {
          var X = Bn(K), xe = 1 << X;
          a |= W[X], K &= ~xe;
        }
      return a;
    }
    function pa(e, t) {
      for (var i = e.eventTimes, a = rn; t > 0; ) {
        var s = Bn(t), d = 1 << s, m = i[s];
        m > a && (a = m), t &= ~d;
      }
      return a;
    }
    function yp(e, t) {
      switch (e) {
        case Xe:
        case Ko:
        case da:
          return t + 250;
        case _r:
        case _n:
        case so:
        case Hl:
        case hf:
        case vf:
        case mf:
        case yf:
        case gf:
        case Sf:
        case Cf:
        case Ef:
        case Il:
        case Tf:
        case Vu:
        case zu:
        case xf:
        case Bs:
        case Rf:
          return t + 5e3;
        case Yl:
        case wf:
        case Is:
        case bf:
        case Df:
          return rn;
        case Ys:
        case Ws:
        case Wl:
        case ai:
          return rn;
        default:
          return v("Should have found matching lanes. This is a bug in React."), rn;
      }
    }
    function Mf(e, t) {
      for (var i = e.pendingLanes, a = e.suspendedLanes, s = e.pingedLanes, d = e.expirationTimes, m = i; m > 0; ) {
        var S = Bn(m), C = 1 << S, D = d[S];
        D === rn ? ((C & a) === re || (C & s) !== re) && (d[S] = yp(C, t)) : D <= t && (e.expiredLanes |= C), m &= ~C;
      }
    }
    function Gv(e) {
      return $s(e.pendingLanes);
    }
    function Of(e) {
      var t = e.pendingLanes & ~ai;
      return t !== re ? t : t & ai ? ai : re;
    }
    function Kv(e) {
      return (e & Xe) !== re;
    }
    function Gs(e) {
      return (e & mp) !== re;
    }
    function Gl(e) {
      return (e & Hs) === e;
    }
    function gp(e) {
      var t = Xe | da | _n;
      return (e & t) === re;
    }
    function Sp(e) {
      return (e & Qo) === e;
    }
    function Af(e, t) {
      var i = Ko | da | _r | _n;
      return (t & i) !== re;
    }
    function Qv(e, t) {
      return (t & e.expiredLanes) !== re;
    }
    function Cp(e) {
      return (e & Qo) !== re;
    }
    function Ep() {
      var e = $l;
      return $l <<= 1, ($l & Qo) === re && ($l = Hl), e;
    }
    function qv() {
      var e = _f;
      return _f <<= 1, (_f & Hs) === re && (_f = Yl), e;
    }
    function qo(e) {
      return e & -e;
    }
    function Ks(e) {
      return qo(e);
    }
    function Bn(e) {
      return 31 - jn(e);
    }
    function pr(e) {
      return Bn(e);
    }
    function oi(e, t) {
      return (e & t) !== re;
    }
    function Kl(e, t) {
      return (e & t) === t;
    }
    function ct(e, t) {
      return e | t;
    }
    function Qs(e, t) {
      return e & ~t;
    }
    function Tp(e, t) {
      return e & t;
    }
    function Xv(e) {
      return e;
    }
    function Zv(e, t) {
      return e !== Ut && e < t ? e : t;
    }
    function qs(e) {
      for (var t = [], i = 0; i < Bl; i++)
        t.push(e);
      return t;
    }
    function Fu(e, t, i) {
      e.pendingLanes |= t, t !== Wl && (e.suspendedLanes = re, e.pingedLanes = re);
      var a = e.eventTimes, s = pr(t);
      a[s] = i;
    }
    function Jv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, a = t; a > 0; ) {
        var s = Bn(a), d = 1 << s;
        i[s] = rn, a &= ~d;
      }
    }
    function Lf(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function xp(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = re, e.pingedLanes = re, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var a = e.entanglements, s = e.eventTimes, d = e.expirationTimes, m = i; m > 0; ) {
        var S = Bn(m), C = 1 << S;
        a[S] = re, s[S] = rn, d[S] = rn, m &= ~C;
      }
    }
    function Nf(e, t) {
      for (var i = e.entangledLanes |= t, a = e.entanglements, s = i; s; ) {
        var d = Bn(s), m = 1 << d;
        // Is this one of the newly entangled lanes?
        m & t | // Is this lane transitively entangled with the newly entangled lanes?
        a[d] & t && (a[d] |= t), s &= ~m;
      }
    }
    function Rp(e, t) {
      var i = qo(t), a;
      switch (i) {
        case da:
          a = Ko;
          break;
        case _n:
          a = _r;
          break;
        case Hl:
        case hf:
        case vf:
        case mf:
        case yf:
        case gf:
        case Sf:
        case Cf:
        case Ef:
        case Il:
        case Tf:
        case Vu:
        case zu:
        case xf:
        case Bs:
        case Rf:
        case Yl:
        case wf:
        case Is:
        case bf:
        case Df:
          a = so;
          break;
        case Wl:
          a = Ws;
          break;
        default:
          a = Ut;
          break;
      }
      return (a & (e.suspendedLanes | t)) !== Ut ? Ut : a;
    }
    function Xs(e, t, i) {
      if (ii)
        for (var a = e.pendingUpdatersLaneMap; i > 0; ) {
          var s = pr(i), d = 1 << s, m = a[s];
          m.add(t), i &= ~d;
        }
    }
    function em(e, t) {
      if (ii)
        for (var i = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
          var s = pr(t), d = 1 << s, m = i[s];
          m.size > 0 && (m.forEach(function(S) {
            var C = S.alternate;
            (C === null || !a.has(C)) && a.add(S);
          }), m.clear()), t &= ~d;
        }
    }
    function wp(e, t) {
      return null;
    }
    var zr = Xe, Va = da, Ii = _n, Yi = Wl, Zs = Ut;
    function Wi() {
      return Zs;
    }
    function Hn(e) {
      Zs = e;
    }
    function tm(e, t) {
      var i = Zs;
      try {
        return Zs = e, t();
      } finally {
        Zs = i;
      }
    }
    function nm(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Js(e, t) {
      return e > t ? e : t;
    }
    function ar(e, t) {
      return e !== 0 && e < t;
    }
    function rm(e) {
      var t = qo(e);
      return ar(zr, t) ? ar(Va, t) ? Gs(t) ? Ii : Yi : Va : zr;
    }
    function Pf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ec;
    function kr(e) {
      ec = e;
    }
    function Fg(e) {
      ec(e);
    }
    var _e;
    function ju(e) {
      _e = e;
    }
    var Uf;
    function im(e) {
      Uf = e;
    }
    var am;
    function tc(e) {
      am = e;
    }
    var nc;
    function bp(e) {
      nc = e;
    }
    var Vf = !1, rc = [], co = null, za = null, Fa = null, kn = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), jr = [], om = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function lm(e) {
      return om.indexOf(e) > -1;
    }
    function ha(e, t, i, a, s) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [a]
      };
    }
    function Dp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          co = null;
          break;
        case "dragenter":
        case "dragleave":
          za = null;
          break;
        case "mouseover":
        case "mouseout":
          Fa = null;
          break;
        case "pointerover":
        case "pointerout": {
          var i = t.pointerId;
          kn.delete(i);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var a = t.pointerId;
          Fr.delete(a);
          break;
        }
      }
    }
    function li(e, t, i, a, s, d) {
      if (e === null || e.nativeEvent !== d) {
        var m = ha(t, i, a, s, d);
        if (t !== null) {
          var S = Qu(t);
          S !== null && _e(S);
        }
        return m;
      }
      e.eventSystemFlags |= a;
      var C = e.targetContainers;
      return s !== null && C.indexOf(s) === -1 && C.push(s), e;
    }
    function jg(e, t, i, a, s) {
      switch (t) {
        case "focusin": {
          var d = s;
          return co = li(co, e, t, i, a, d), !0;
        }
        case "dragenter": {
          var m = s;
          return za = li(za, e, t, i, a, m), !0;
        }
        case "mouseover": {
          var S = s;
          return Fa = li(Fa, e, t, i, a, S), !0;
        }
        case "pointerover": {
          var C = s, D = C.pointerId;
          return kn.set(D, li(kn.get(D) || null, e, t, i, a, C)), !0;
        }
        case "gotpointercapture": {
          var _ = s, z = _.pointerId;
          return Fr.set(z, li(Fr.get(z) || null, e, t, i, a, _)), !0;
        }
      }
      return !1;
    }
    function _p(e) {
      var t = vc(e.target);
      if (t !== null) {
        var i = Ei(t);
        if (i !== null) {
          var a = i.tag;
          if (a === oe) {
            var s = Na(i);
            if (s !== null) {
              e.blockedOn = s, nc(e.priority, function() {
                Uf(i);
              });
              return;
            }
          } else if (a === k) {
            var d = i.stateNode;
            if (Pf(d)) {
              e.blockedOn = Pa(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function um(e) {
      for (var t = am(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, a = 0; a < jr.length && ar(t, jr[a].priority); a++)
        ;
      jr.splice(a, 0, i), a === 0 && _p(i);
    }
    function ic(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], a = Hu(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (a === null) {
          var s = e.nativeEvent, d = new s.constructor(s.type, s);
          Ng(d), s.target.dispatchEvent(d), Pg();
        } else {
          var m = Qu(a);
          return m !== null && _e(m), e.blockedOn = a, !1;
        }
        t.shift();
      }
      return !0;
    }
    function kp(e, t, i) {
      ic(e) && i.delete(t);
    }
    function Bg() {
      Vf = !1, co !== null && ic(co) && (co = null), za !== null && ic(za) && (za = null), Fa !== null && ic(Fa) && (Fa = null), kn.forEach(kp), Fr.forEach(kp);
    }
    function Xo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Vf || (Vf = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Bg)));
    }
    function Ql(e) {
      if (rc.length > 0) {
        Xo(rc[0], e);
        for (var t = 1; t < rc.length; t++) {
          var i = rc[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      co !== null && Xo(co, e), za !== null && Xo(za, e), Fa !== null && Xo(Fa, e);
      var a = function(S) {
        return Xo(S, e);
      };
      kn.forEach(a), Fr.forEach(a);
      for (var s = 0; s < jr.length; s++) {
        var d = jr[s];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; jr.length > 0; ) {
        var m = jr[0];
        if (m.blockedOn !== null)
          break;
        _p(m), m.blockedOn === null && jr.shift();
      }
    }
    var hr = c.ReactCurrentBatchConfig, _t = !0;
    function Zn(e) {
      _t = !!e;
    }
    function In() {
      return _t;
    }
    function vr(e, t, i) {
      var a = zf(t), s;
      switch (a) {
        case zr:
          s = wi;
          break;
        case Va:
          s = Bu;
          break;
        case Ii:
        default:
          s = Mn;
          break;
      }
      return s.bind(null, t, i, e);
    }
    function wi(e, t, i, a) {
      var s = Wi(), d = hr.transition;
      hr.transition = null;
      try {
        Hn(zr), Mn(e, t, i, a);
      } finally {
        Hn(s), hr.transition = d;
      }
    }
    function Bu(e, t, i, a) {
      var s = Wi(), d = hr.transition;
      hr.transition = null;
      try {
        Hn(Va), Mn(e, t, i, a);
      } finally {
        Hn(s), hr.transition = d;
      }
    }
    function Mn(e, t, i, a) {
      _t && ac(e, t, i, a);
    }
    function ac(e, t, i, a) {
      var s = Hu(e, t, i, a);
      if (s === null) {
        iS(e, t, a, ja, i), Dp(e, a);
        return;
      }
      if (jg(s, e, t, i, a)) {
        a.stopPropagation();
        return;
      }
      if (Dp(e, a), t & Vi && lm(e)) {
        for (; s !== null; ) {
          var d = Qu(s);
          d !== null && Fg(d);
          var m = Hu(e, t, i, a);
          if (m === null && iS(e, t, a, ja, i), m === s)
            break;
          s = m;
        }
        s !== null && a.stopPropagation();
        return;
      }
      iS(e, t, a, null, i);
    }
    var ja = null;
    function Hu(e, t, i, a) {
      ja = null;
      var s = tp(a), d = vc(s);
      if (d !== null) {
        var m = Ei(d);
        if (m === null)
          d = null;
        else {
          var S = m.tag;
          if (S === oe) {
            var C = Na(m);
            if (C !== null)
              return C;
            d = null;
          } else if (S === k) {
            var D = m.stateNode;
            if (Pf(D))
              return Pa(m);
            d = null;
          } else m !== d && (d = null);
        }
      }
      return ja = d, null;
    }
    function zf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return zr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Va;
        case "message": {
          var t = uf();
          switch (t) {
            case Ns:
              return zr;
            case $o:
              return Va;
            case lo:
            case zg:
              return Ii;
            case Ul:
              return Yi;
            default:
              return Ii;
          }
        }
        default:
          return Ii;
      }
    }
    function oc(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function ui(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function Mp(e, t, i, a) {
      return e.addEventListener(t, i, {
        capture: !0,
        passive: a
      }), i;
    }
    function Iu(e, t, i, a) {
      return e.addEventListener(t, i, {
        passive: a
      }), i;
    }
    var bi = null, Yu = null, ql = null;
    function Zo(e) {
      return bi = e, Yu = lc(), !0;
    }
    function Ff() {
      bi = null, Yu = null, ql = null;
    }
    function fo() {
      if (ql)
        return ql;
      var e, t = Yu, i = t.length, a, s = lc(), d = s.length;
      for (e = 0; e < i && t[e] === s[e]; e++)
        ;
      var m = i - e;
      for (a = 1; a <= m && t[i - a] === s[d - a]; a++)
        ;
      var S = a > 1 ? 1 - a : void 0;
      return ql = s.slice(e, S), ql;
    }
    function lc() {
      return "value" in bi ? bi.value : bi.textContent;
    }
    function Jo(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Wu() {
      return !0;
    }
    function uc() {
      return !1;
    }
    function Mr(e) {
      function t(i, a, s, d, m) {
        this._reactName = i, this._targetInst = s, this.type = a, this.nativeEvent = d, this.target = m, this.currentTarget = null;
        for (var S in e)
          if (e.hasOwnProperty(S)) {
            var C = e[S];
            C ? this[S] = C(d) : this[S] = d[S];
          }
        var D = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return D ? this.isDefaultPrevented = Wu : this.isDefaultPrevented = uc, this.isPropagationStopped = uc, this;
      }
      return dt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Wu);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Wu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Wu
      }), t;
    }
    var Yn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ba = Mr(Yn), Br = dt({}, Yn, {
      view: 0,
      detail: 0
    }), si = Mr(Br), jf, sc, Xl;
    function Hg(e) {
      e !== Xl && (Xl && e.type === "mousemove" ? (jf = e.screenX - Xl.screenX, sc = e.screenY - Xl.screenY) : (jf = 0, sc = 0), Xl = e);
    }
    var va = dt({}, Br, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: vn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Hg(e), jf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : sc;
      }
    }), Op = Mr(va), Ap = dt({}, va, {
      dataTransfer: 0
    }), Zl = Mr(Ap), Lp = dt({}, Br, {
      relatedTarget: 0
    }), po = Mr(Lp), sm = dt({}, Yn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cm = Mr(sm), Np = dt({}, Yn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Bf = Mr(Np), Ig = dt({}, Yn, {
      data: 0
    }), fm = Mr(Ig), dm = fm, pm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Jl = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Yg(e) {
      if (e.key) {
        var t = pm[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = Jo(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? Jl[e.keyCode] || "Unidentified" : "";
    }
    var $u = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function hm(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var a = $u[e];
      return a ? !!i[a] : !1;
    }
    function vn(e) {
      return hm;
    }
    var Wg = dt({}, Br, {
      key: Yg,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Jo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Jo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), vm = Mr(Wg), $g = dt({}, va, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), mm = Mr($g), ym = dt({}, Br, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vn
    }), gm = Mr(ym), Gg = dt({}, Yn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $i = Mr(Gg), Pp = dt({}, va, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Kg = Mr(Pp), el = [9, 13, 27, 32], cc = 229, ho = Pn && "CompositionEvent" in window, tl = null;
    Pn && "documentMode" in document && (tl = document.documentMode);
    var Up = Pn && "TextEvent" in window && !tl, Hf = Pn && (!ho || tl && tl > 8 && tl <= 11), Sm = 32, If = String.fromCharCode(Sm);
    function Qg() {
      gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), gt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), gt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), gt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Vp = !1;
    function Cm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Yf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Wf(e, t) {
      return e === "keydown" && t.keyCode === cc;
    }
    function zp(e, t) {
      switch (e) {
        case "keyup":
          return el.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== cc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function $f(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Em(e) {
      return e.locale === "ko";
    }
    var eu = !1;
    function Fp(e, t, i, a, s) {
      var d, m;
      if (ho ? d = Yf(t) : eu ? zp(t, a) && (d = "onCompositionEnd") : Wf(t, a) && (d = "onCompositionStart"), !d)
        return null;
      Hf && !Em(a) && (!eu && d === "onCompositionStart" ? eu = Zo(s) : d === "onCompositionEnd" && eu && (m = fo()));
      var S = _m(i, d);
      if (S.length > 0) {
        var C = new fm(d, t, null, a, s);
        if (e.push({
          event: C,
          listeners: S
        }), m)
          C.data = m;
        else {
          var D = $f(a);
          D !== null && (C.data = D);
        }
      }
    }
    function Gf(e, t) {
      switch (e) {
        case "compositionend":
          return $f(t);
        case "keypress":
          var i = t.which;
          return i !== Sm ? null : (Vp = !0, If);
        case "textInput":
          var a = t.data;
          return a === If && Vp ? null : a;
        default:
          return null;
      }
    }
    function jp(e, t) {
      if (eu) {
        if (e === "compositionend" || !ho && zp(e, t)) {
          var i = fo();
          return Ff(), eu = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Cm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Hf && !Em(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Kf(e, t, i, a, s) {
      var d;
      if (Up ? d = Gf(t, a) : d = jp(t, a), !d)
        return null;
      var m = _m(i, "onBeforeInput");
      if (m.length > 0) {
        var S = new dm("onBeforeInput", "beforeinput", null, a, s);
        e.push({
          event: S,
          listeners: m
        }), S.data = d;
      }
    }
    function Tm(e, t, i, a, s, d, m) {
      Fp(e, t, i, a, s), Kf(e, t, i, a, s);
    }
    var qg = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function fc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!qg[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Xg(e) {
      if (!Pn)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var a = document.createElement("div");
        a.setAttribute(t, "return;"), i = typeof a[t] == "function";
      }
      return i;
    }
    function dc() {
      gt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function xm(e, t, i, a) {
      ku(a);
      var s = _m(t, "onChange");
      if (s.length > 0) {
        var d = new Ba("onChange", "change", null, i, a);
        e.push({
          event: d,
          listeners: s
        });
      }
    }
    var nl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function u(e) {
      var t = [];
      xm(t, n, e, tp(e)), Pv(f, t);
    }
    function f(e) {
      mT(e, 0);
    }
    function h(e) {
      var t = ed(e);
      if (_a(t))
        return e;
    }
    function g(e, t) {
      if (e === "change")
        return t;
    }
    var x = !1;
    Pn && (x = Xg("input") && (!document.documentMode || document.documentMode > 9));
    function O(e, t) {
      nl = e, n = t, nl.attachEvent("onpropertychange", G);
    }
    function P() {
      nl && (nl.detachEvent("onpropertychange", G), nl = null, n = null);
    }
    function G(e) {
      e.propertyName === "value" && h(n) && u(e);
    }
    function le(e, t, i) {
      e === "focusin" ? (P(), O(t, i)) : e === "focusout" && P();
    }
    function ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(n);
    }
    function ie(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function we(e, t) {
      if (e === "click")
        return h(t);
    }
    function Le(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function ze(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || We(e, "number", e.value);
    }
    function On(e, t, i, a, s, d, m) {
      var S = i ? ed(i) : window, C, D;
      if (r(S) ? C = g : fc(S) ? x ? C = Le : (C = ce, D = le) : ie(S) && (C = we), C) {
        var _ = C(t, i);
        if (_) {
          xm(e, _, a, s);
          return;
        }
      }
      D && D(t, S, i), t === "focusout" && ze(S);
    }
    function B() {
      Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function V(e, t, i, a, s, d, m) {
      var S = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout";
      if (S && !_s(a)) {
        var D = a.relatedTarget || a.fromElement;
        if (D && (vc(D) || eh(D)))
          return;
      }
      if (!(!C && !S)) {
        var _;
        if (s.window === s)
          _ = s;
        else {
          var z = s.ownerDocument;
          z ? _ = z.defaultView || z.parentWindow : _ = window;
        }
        var U, W;
        if (C) {
          var K = a.relatedTarget || a.toElement;
          if (U = i, W = K ? vc(K) : null, W !== null) {
            var X = Ei(W);
            (W !== X || W.tag !== F && W.tag !== q) && (W = null);
          }
        } else
          U = null, W = i;
        if (U !== W) {
          var xe = Op, $e = "onMouseLeave", je = "onMouseEnter", Mt = "mouse";
          (t === "pointerout" || t === "pointerover") && (xe = mm, $e = "onPointerLeave", je = "onPointerEnter", Mt = "pointer");
          var Rt = U == null ? _ : ed(U), H = W == null ? _ : ed(W), Z = new xe($e, Mt + "leave", U, a, s);
          Z.target = Rt, Z.relatedTarget = H;
          var I = null, fe = vc(s);
          if (fe === i) {
            var De = new xe(je, Mt + "enter", W, a, s);
            De.target = H, De.relatedTarget = Rt, I = De;
          }
          E_(e, Z, I, U, W);
        }
      }
    }
    function Y(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ue = typeof Object.is == "function" ? Object.is : Y;
    function Ne(e, t) {
      if (ue(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), a = Object.keys(t);
      if (i.length !== a.length)
        return !1;
      for (var s = 0; s < i.length; s++) {
        var d = i[s];
        if (!Ar.call(t, d) || !ue(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function Ge(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Qe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function et(e, t) {
      for (var i = Ge(e), a = 0, s = 0; i; ) {
        if (i.nodeType === no) {
          if (s = a + i.textContent.length, a <= t && s >= t)
            return {
              node: i,
              offset: t - a
            };
          a = s;
        }
        i = Ge(Qe(i));
      }
    }
    function or(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, a = i.getSelection && i.getSelection();
      if (!a || a.rangeCount === 0)
        return null;
      var s = a.anchorNode, d = a.anchorOffset, m = a.focusNode, S = a.focusOffset;
      try {
        s.nodeType, m.nodeType;
      } catch {
        return null;
      }
      return Bt(e, s, d, m, S);
    }
    function Bt(e, t, i, a, s) {
      var d = 0, m = -1, S = -1, C = 0, D = 0, _ = e, z = null;
      e: for (; ; ) {
        for (var U = null; _ === t && (i === 0 || _.nodeType === no) && (m = d + i), _ === a && (s === 0 || _.nodeType === no) && (S = d + s), _.nodeType === no && (d += _.nodeValue.length), (U = _.firstChild) !== null; )
          z = _, _ = U;
        for (; ; ) {
          if (_ === e)
            break e;
          if (z === t && ++C === i && (m = d), z === a && ++D === s && (S = d), (U = _.nextSibling) !== null)
            break;
          _ = z, z = _.parentNode;
        }
        _ = U;
      }
      return m === -1 || S === -1 ? null : {
        start: m,
        end: S
      };
    }
    function rl(e, t) {
      var i = e.ownerDocument || document, a = i && i.defaultView || window;
      if (a.getSelection) {
        var s = a.getSelection(), d = e.textContent.length, m = Math.min(t.start, d), S = t.end === void 0 ? m : Math.min(t.end, d);
        if (!s.extend && m > S) {
          var C = S;
          S = m, m = C;
        }
        var D = et(e, m), _ = et(e, S);
        if (D && _) {
          if (s.rangeCount === 1 && s.anchorNode === D.node && s.anchorOffset === D.offset && s.focusNode === _.node && s.focusOffset === _.offset)
            return;
          var z = i.createRange();
          z.setStart(D.node, D.offset), s.removeAllRanges(), m > S ? (s.addRange(z), s.extend(_.node, _.offset)) : (z.setEnd(_.node, _.offset), s.addRange(z));
        }
      }
    }
    function Rm(e) {
      return e && e.nodeType === no;
    }
    function aT(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Rm(e) ? !1 : Rm(t) ? aT(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function r_(e) {
      return e && e.ownerDocument && aT(e.ownerDocument.documentElement, e);
    }
    function i_(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function oT() {
      for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement; ) {
        if (i_(t))
          e = t.contentWindow;
        else
          return t;
        t = Ui(e.document);
      }
      return t;
    }
    function Zg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function a_() {
      var e = oT();
      return {
        focusedElem: e,
        selectionRange: Zg(e) ? l_(e) : null
      };
    }
    function o_(e) {
      var t = oT(), i = e.focusedElem, a = e.selectionRange;
      if (t !== i && r_(i)) {
        a !== null && Zg(i) && u_(i, a);
        for (var s = [], d = i; d = d.parentNode; )
          d.nodeType === Jr && s.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var m = 0; m < s.length; m++) {
          var S = s[m];
          S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
        }
      }
    }
    function l_(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = or(e), t || {
        start: 0,
        end: 0
      };
    }
    function u_(e, t) {
      var i = t.start, a = t.end;
      a === void 0 && (a = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(a, e.value.length)) : rl(e, t);
    }
    var s_ = Pn && "documentMode" in document && document.documentMode <= 11;
    function c_() {
      gt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Qf = null, Jg = null, Bp = null, eS = !1;
    function f_(e) {
      if ("selectionStart" in e && Zg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, i = t.getSelection();
      return {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      };
    }
    function d_(e) {
      return e.window === e ? e.document : e.nodeType === ro ? e : e.ownerDocument;
    }
    function lT(e, t, i) {
      var a = d_(i);
      if (!(eS || Qf == null || Qf !== Ui(a))) {
        var s = f_(Qf);
        if (!Bp || !Ne(Bp, s)) {
          Bp = s;
          var d = _m(Jg, "onSelect");
          if (d.length > 0) {
            var m = new Ba("onSelect", "select", null, t, i);
            e.push({
              event: m,
              listeners: d
            }), m.target = Qf;
          }
        }
      }
    }
    function p_(e, t, i, a, s, d, m) {
      var S = i ? ed(i) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (fc(S) || S.contentEditable === "true") && (Qf = S, Jg = i, Bp = null);
          break;
        case "focusout":
          Qf = null, Jg = null, Bp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          eS = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          eS = !1, lT(e, a, s);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (s_)
            break;
        // falls through
        case "keydown":
        case "keyup":
          lT(e, a, s);
      }
    }
    function wm(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var qf = {
      animationend: wm("Animation", "AnimationEnd"),
      animationiteration: wm("Animation", "AnimationIteration"),
      animationstart: wm("Animation", "AnimationStart"),
      transitionend: wm("Transition", "TransitionEnd")
    }, tS = {}, uT = {};
    Pn && (uT = document.createElement("div").style, "AnimationEvent" in window || (delete qf.animationend.animation, delete qf.animationiteration.animation, delete qf.animationstart.animation), "TransitionEvent" in window || delete qf.transitionend.transition);
    function bm(e) {
      if (tS[e])
        return tS[e];
      if (!qf[e])
        return e;
      var t = qf[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in uT)
          return tS[e] = t[i];
      return e;
    }
    var sT = bm("animationend"), cT = bm("animationiteration"), fT = bm("animationstart"), dT = bm("transitionend"), pT = /* @__PURE__ */ new Map(), hT = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Gu(e, t) {
      pT.set(e, t), gt(t, [e]);
    }
    function h_() {
      for (var e = 0; e < hT.length; e++) {
        var t = hT[e], i = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
        Gu(i, "on" + a);
      }
      Gu(sT, "onAnimationEnd"), Gu(cT, "onAnimationIteration"), Gu(fT, "onAnimationStart"), Gu("dblclick", "onDoubleClick"), Gu("focusin", "onFocus"), Gu("focusout", "onBlur"), Gu(dT, "onTransitionEnd");
    }
    function v_(e, t, i, a, s, d, m) {
      var S = pT.get(t);
      if (S !== void 0) {
        var C = Ba, D = t;
        switch (t) {
          case "keypress":
            if (Jo(a) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            C = vm;
            break;
          case "focusin":
            D = "focus", C = po;
            break;
          case "focusout":
            D = "blur", C = po;
            break;
          case "beforeblur":
          case "afterblur":
            C = po;
            break;
          case "click":
            if (a.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = Op;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = Zl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = gm;
            break;
          case sT:
          case cT:
          case fT:
            C = cm;
            break;
          case dT:
            C = $i;
            break;
          case "scroll":
            C = si;
            break;
          case "wheel":
            C = Kg;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = Bf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = mm;
            break;
        }
        var _ = (d & Vi) !== 0;
        {
          var z = !_ && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", U = S_(i, S, a.type, _, z);
          if (U.length > 0) {
            var W = new C(S, D, null, a, s);
            e.push({
              event: W,
              listeners: U
            });
          }
        }
      }
    }
    h_(), B(), dc(), c_(), Qg();
    function m_(e, t, i, a, s, d, m) {
      v_(e, t, i, a, s, d);
      var S = (d & ep) === 0;
      S && (V(e, t, i, a, s), On(e, t, i, a, s), p_(e, t, i, a, s), Tm(e, t, i, a, s));
    }
    var Hp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], nS = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Hp));
    function vT(e, t, i) {
      var a = e.type || "unknown-event";
      e.currentTarget = i, Oa(a, t, void 0, e), e.currentTarget = null;
    }
    function y_(e, t, i) {
      var a;
      if (i)
        for (var s = t.length - 1; s >= 0; s--) {
          var d = t[s], m = d.instance, S = d.currentTarget, C = d.listener;
          if (m !== a && e.isPropagationStopped())
            return;
          vT(e, C, S), a = m;
        }
      else
        for (var D = 0; D < t.length; D++) {
          var _ = t[D], z = _.instance, U = _.currentTarget, W = _.listener;
          if (z !== a && e.isPropagationStopped())
            return;
          vT(e, W, U), a = z;
        }
    }
    function mT(e, t) {
      for (var i = (t & Vi) !== 0, a = 0; a < e.length; a++) {
        var s = e[a], d = s.event, m = s.listeners;
        y_(d, m, i);
      }
      Os();
    }
    function g_(e, t, i, a, s) {
      var d = tp(i), m = [];
      m_(m, e, a, i, d, t), mT(m, t);
    }
    function Tn(e, t) {
      nS.has(e) || v('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, a = Kk(t), s = T_(e);
      a.has(s) || (yT(t, e, Kc, i), a.add(s));
    }
    function rS(e, t, i) {
      nS.has(e) && !t && v('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var a = 0;
      t && (a |= Vi), yT(i, e, a, t);
    }
    var Dm = "_reactListening" + Math.random().toString(36).slice(2);
    function Ip(e) {
      if (!e[Dm]) {
        e[Dm] = !0, pt.forEach(function(i) {
          i !== "selectionchange" && (nS.has(i) || rS(i, !1, e), rS(i, !0, e));
        });
        var t = e.nodeType === ro ? e : e.ownerDocument;
        t !== null && (t[Dm] || (t[Dm] = !0, rS("selectionchange", !1, t)));
      }
    }
    function yT(e, t, i, a, s) {
      var d = vr(e, t, i), m = void 0;
      Ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, a ? m !== void 0 ? Mp(e, t, d, m) : ui(e, t, d) : m !== void 0 ? Iu(e, t, d, m) : oc(e, t, d);
    }
    function gT(e, t) {
      return e === t || e.nodeType === Vn && e.parentNode === t;
    }
    function iS(e, t, i, a, s) {
      var d = a;
      if ((t & Jd) === 0 && (t & Kc) === 0) {
        var m = s;
        if (a !== null) {
          var S = a;
          e: for (; ; ) {
            if (S === null)
              return;
            var C = S.tag;
            if (C === k || C === L) {
              var D = S.stateNode.containerInfo;
              if (gT(D, m))
                break;
              if (C === L)
                for (var _ = S.return; _ !== null; ) {
                  var z = _.tag;
                  if (z === k || z === L) {
                    var U = _.stateNode.containerInfo;
                    if (gT(U, m))
                      return;
                  }
                  _ = _.return;
                }
              for (; D !== null; ) {
                var W = vc(D);
                if (W === null)
                  return;
                var K = W.tag;
                if (K === F || K === q) {
                  S = d = W;
                  continue e;
                }
                D = D.parentNode;
              }
            }
            S = S.return;
          }
        }
      }
      Pv(function() {
        return g_(e, t, i, d);
      });
    }
    function Yp(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function S_(e, t, i, a, s, d) {
      for (var m = t !== null ? t + "Capture" : null, S = a ? m : t, C = [], D = e, _ = null; D !== null; ) {
        var z = D, U = z.stateNode, W = z.tag;
        if (W === F && U !== null && (_ = U, S !== null)) {
          var K = jo(D, S);
          K != null && C.push(Yp(D, K, _));
        }
        if (s)
          break;
        D = D.return;
      }
      return C;
    }
    function _m(e, t) {
      for (var i = t + "Capture", a = [], s = e; s !== null; ) {
        var d = s, m = d.stateNode, S = d.tag;
        if (S === F && m !== null) {
          var C = m, D = jo(s, i);
          D != null && a.unshift(Yp(s, D, C));
          var _ = jo(s, t);
          _ != null && a.push(Yp(s, _, C));
        }
        s = s.return;
      }
      return a;
    }
    function Xf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== F);
      return e || null;
    }
    function C_(e, t) {
      for (var i = e, a = t, s = 0, d = i; d; d = Xf(d))
        s++;
      for (var m = 0, S = a; S; S = Xf(S))
        m++;
      for (; s - m > 0; )
        i = Xf(i), s--;
      for (; m - s > 0; )
        a = Xf(a), m--;
      for (var C = s; C--; ) {
        if (i === a || a !== null && i === a.alternate)
          return i;
        i = Xf(i), a = Xf(a);
      }
      return null;
    }
    function ST(e, t, i, a, s) {
      for (var d = t._reactName, m = [], S = i; S !== null && S !== a; ) {
        var C = S, D = C.alternate, _ = C.stateNode, z = C.tag;
        if (D !== null && D === a)
          break;
        if (z === F && _ !== null) {
          var U = _;
          if (s) {
            var W = jo(S, d);
            W != null && m.unshift(Yp(S, W, U));
          } else if (!s) {
            var K = jo(S, d);
            K != null && m.push(Yp(S, K, U));
          }
        }
        S = S.return;
      }
      m.length !== 0 && e.push({
        event: t,
        listeners: m
      });
    }
    function E_(e, t, i, a, s) {
      var d = a && s ? C_(a, s) : null;
      a !== null && ST(e, t, a, d, !1), s !== null && i !== null && ST(e, i, s, d, !0);
    }
    function T_(e, t) {
      return e + "__bubble";
    }
    var Gi = !1, Wp = "dangerouslySetInnerHTML", km = "suppressContentEditableWarning", Ku = "suppressHydrationWarning", CT = "autoFocus", pc = "children", hc = "style", Mm = "__html", aS, Om, $p, ET, Am, TT, xT;
    aS = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Om = function(e, t) {
      qd(e, t), $c(e, t), Av(e, t, {
        registrationNameDependencies: ft,
        possibleRegistrationNames: ht
      });
    }, TT = Pn && !document.documentMode, $p = function(e, t, i) {
      if (!Gi) {
        var a = Lm(i), s = Lm(t);
        s !== a && (Gi = !0, v("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(s), JSON.stringify(a)));
      }
    }, ET = function(e) {
      if (!Gi) {
        Gi = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), v("Extra attributes from the server: %s", t);
      }
    }, Am = function(e, t) {
      t === !1 ? v("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : v("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, xT = function(e, t) {
      var i = e.namespaceURI === to ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var x_ = /\r\n?/g, R_ = /\u0000|\uFFFD/g;
    function Lm(e) {
      tr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(x_, `
`).replace(R_, "");
    }
    function Nm(e, t, i, a) {
      var s = Lm(t), d = Lm(e);
      if (d !== s && (a && (Gi || (Gi = !0, v('Text content did not match. Server: "%s" Client: "%s"', d, s))), i && Se))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function RT(e) {
      return e.nodeType === ro ? e : e.ownerDocument;
    }
    function w_() {
    }
    function Pm(e) {
      e.onclick = w_;
    }
    function b_(e, t, i, a, s) {
      for (var d in a)
        if (a.hasOwnProperty(d)) {
          var m = a[d];
          if (d === hc)
            m && Object.freeze(m), bv(t, m);
          else if (d === Wp) {
            var S = m ? m[Mm] : void 0;
            S != null && hv(t, S);
          } else if (d === pc)
            if (typeof m == "string") {
              var C = e !== "textarea" || m !== "";
              C && wu(t, m);
            } else typeof m == "number" && wu(t, "" + m);
          else d === km || d === Ku || d === CT || (ft.hasOwnProperty(d) ? m != null && (typeof m != "function" && Am(d, m), d === "onScroll" && Tn("scroll", t)) : m != null && Lr(t, d, m, s));
        }
    }
    function D_(e, t, i, a) {
      for (var s = 0; s < t.length; s += 2) {
        var d = t[s], m = t[s + 1];
        d === hc ? bv(e, m) : d === Wp ? hv(e, m) : d === pc ? wu(e, m) : Lr(e, d, m, a);
      }
    }
    function __(e, t, i, a) {
      var s, d = RT(i), m, S = a;
      if (S === to && (S = Id(e)), S === to) {
        if (s = zo(e, t), !s && e !== e.toLowerCase() && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var C = d.createElement("div");
          C.innerHTML = "<script><\/script>";
          var D = C.firstChild;
          m = C.removeChild(D);
        } else if (typeof t.is == "string")
          m = d.createElement(e, {
            is: t.is
          });
        else if (m = d.createElement(e), e === "select") {
          var _ = m;
          t.multiple ? _.multiple = !0 : t.size && (_.size = t.size);
        }
      } else
        m = d.createElementNS(S, e);
      return S === to && !s && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !Ar.call(aS, e) && (aS[e] = !0, v("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
    }
    function k_(e, t) {
      return RT(t).createTextNode(e);
    }
    function M_(e, t, i, a) {
      var s = zo(t, i);
      Om(t, i);
      var d;
      switch (t) {
        case "dialog":
          Tn("cancel", e), Tn("close", e), d = i;
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e), d = i;
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Hp.length; m++)
            Tn(Hp[m], e);
          d = i;
          break;
        case "source":
          Tn("error", e), d = i;
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e), d = i;
          break;
        case "details":
          Tn("toggle", e), d = i;
          break;
        case "input":
          sa(e, i), d = Ru(e, i), Tn("invalid", e);
          break;
        case "option":
          Nt(e, i), d = i;
          break;
        case "select":
          _l(e, i), d = Es(e, i), Tn("invalid", e);
          break;
        case "textarea":
          jd(e, i), d = Fd(e, i), Tn("invalid", e);
          break;
        default:
          d = i;
      }
      switch (Yc(t, d), b_(t, e, a, d, s), t) {
        case "input":
          ua(e), $(e, i, !1);
          break;
        case "textarea":
          ua(e), dv(e);
          break;
        case "option":
          un(e, i);
          break;
        case "select":
          Vd(e, i);
          break;
        default:
          typeof d.onClick == "function" && Pm(e);
          break;
      }
    }
    function O_(e, t, i, a, s) {
      Om(t, a);
      var d = null, m, S;
      switch (t) {
        case "input":
          m = Ru(e, i), S = Ru(e, a), d = [];
          break;
        case "select":
          m = Es(e, i), S = Es(e, a), d = [];
          break;
        case "textarea":
          m = Fd(e, i), S = Fd(e, a), d = [];
          break;
        default:
          m = i, S = a, typeof m.onClick != "function" && typeof S.onClick == "function" && Pm(e);
          break;
      }
      Yc(t, S);
      var C, D, _ = null;
      for (C in m)
        if (!(S.hasOwnProperty(C) || !m.hasOwnProperty(C) || m[C] == null))
          if (C === hc) {
            var z = m[C];
            for (D in z)
              z.hasOwnProperty(D) && (_ || (_ = {}), _[D] = "");
          } else C === Wp || C === pc || C === km || C === Ku || C === CT || (ft.hasOwnProperty(C) ? d || (d = []) : (d = d || []).push(C, null));
      for (C in S) {
        var U = S[C], W = m != null ? m[C] : void 0;
        if (!(!S.hasOwnProperty(C) || U === W || U == null && W == null))
          if (C === hc)
            if (U && Object.freeze(U), W) {
              for (D in W)
                W.hasOwnProperty(D) && (!U || !U.hasOwnProperty(D)) && (_ || (_ = {}), _[D] = "");
              for (D in U)
                U.hasOwnProperty(D) && W[D] !== U[D] && (_ || (_ = {}), _[D] = U[D]);
            } else
              _ || (d || (d = []), d.push(C, _)), _ = U;
          else if (C === Wp) {
            var K = U ? U[Mm] : void 0, X = W ? W[Mm] : void 0;
            K != null && X !== K && (d = d || []).push(C, K);
          } else C === pc ? (typeof U == "string" || typeof U == "number") && (d = d || []).push(C, "" + U) : C === km || C === Ku || (ft.hasOwnProperty(C) ? (U != null && (typeof U != "function" && Am(C, U), C === "onScroll" && Tn("scroll", e)), !d && W !== U && (d = [])) : (d = d || []).push(C, U));
      }
      return _ && (Ag(_, S[hc]), (d = d || []).push(hc, _)), d;
    }
    function A_(e, t, i, a, s) {
      i === "input" && s.type === "radio" && s.name != null && T(e, s);
      var d = zo(i, a), m = zo(i, s);
      switch (D_(e, t, d, m), i) {
        case "input":
          A(e, s);
          break;
        case "textarea":
          fv(e, s);
          break;
        case "select":
          Bc(e, s);
          break;
      }
    }
    function L_(e) {
      {
        var t = e.toLowerCase();
        return bs.hasOwnProperty(t) && bs[t] || null;
      }
    }
    function N_(e, t, i, a, s, d, m) {
      var S, C;
      switch (S = zo(t, i), Om(t, i), t) {
        case "dialog":
          Tn("cancel", e), Tn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e);
          break;
        case "video":
        case "audio":
          for (var D = 0; D < Hp.length; D++)
            Tn(Hp[D], e);
          break;
        case "source":
          Tn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e);
          break;
        case "details":
          Tn("toggle", e);
          break;
        case "input":
          sa(e, i), Tn("invalid", e);
          break;
        case "option":
          Nt(e, i);
          break;
        case "select":
          _l(e, i), Tn("invalid", e);
          break;
        case "textarea":
          jd(e, i), Tn("invalid", e);
          break;
      }
      Yc(t, i);
      {
        C = /* @__PURE__ */ new Set();
        for (var _ = e.attributes, z = 0; z < _.length; z++) {
          var U = _[z].name.toLowerCase();
          switch (U) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              C.add(_[z].name);
          }
        }
      }
      var W = null;
      for (var K in i)
        if (i.hasOwnProperty(K)) {
          var X = i[K];
          if (K === pc)
            typeof X == "string" ? e.textContent !== X && (i[Ku] !== !0 && Nm(e.textContent, X, d, m), W = [pc, X]) : typeof X == "number" && e.textContent !== "" + X && (i[Ku] !== !0 && Nm(e.textContent, X, d, m), W = [pc, "" + X]);
          else if (ft.hasOwnProperty(K))
            X != null && (typeof X != "function" && Am(K, X), K === "onScroll" && Tn("scroll", e));
          else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var xe = void 0, $e = on(K);
            if (i[Ku] !== !0) {
              if (!(K === km || K === Ku || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === Wp) {
                  var je = e.innerHTML, Mt = X ? X[Mm] : void 0;
                  if (Mt != null) {
                    var Rt = xT(e, Mt);
                    Rt !== je && $p(K, je, Rt);
                  }
                } else if (K === hc) {
                  if (C.delete(K), TT) {
                    var H = Mg(X);
                    xe = e.getAttribute("style"), H !== xe && $p(K, xe, H);
                  }
                } else if (S && !j)
                  C.delete(K.toLowerCase()), xe = El(e, K, X), X !== xe && $p(K, xe, X);
                else if (!yn(K, $e, S) && !nr(K, X, $e, S)) {
                  var Z = !1;
                  if ($e !== null)
                    C.delete($e.attributeName), xe = ko(e, K, X, $e);
                  else {
                    var I = a;
                    if (I === to && (I = Id(t)), I === to)
                      C.delete(K.toLowerCase());
                    else {
                      var fe = L_(K);
                      fe !== null && fe !== K && (Z = !0, C.delete(fe)), C.delete(K);
                    }
                    xe = El(e, K, X);
                  }
                  var De = j;
                  !De && X !== xe && !Z && $p(K, xe, X);
                }
              }
            }
          }
        }
      switch (m && // $FlowFixMe - Should be inferred as not undefined.
      C.size > 0 && i[Ku] !== !0 && ET(C), t) {
        case "input":
          ua(e), $(e, i, !0);
          break;
        case "textarea":
          ua(e), dv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && Pm(e);
          break;
      }
      return W;
    }
    function P_(e, t, i) {
      var a = e.nodeValue !== t;
      return a;
    }
    function oS(e, t) {
      {
        if (Gi)
          return;
        Gi = !0, v("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function lS(e, t) {
      {
        if (Gi)
          return;
        Gi = !0, v('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function uS(e, t, i) {
      {
        if (Gi)
          return;
        Gi = !0, v("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function sS(e, t) {
      {
        if (t === "" || Gi)
          return;
        Gi = !0, v('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function U_(e, t, i) {
      switch (t) {
        case "input":
          Q(e, i);
          return;
        case "textarea":
          bg(e, i);
          return;
        case "select":
          zd(e, i);
          return;
      }
    }
    var Gp = function() {
    }, Kp = function() {
    };
    {
      var V_ = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], wT = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], z_ = wT.concat(["button"]), F_ = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], bT = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Kp = function(e, t) {
        var i = dt({}, e || bT), a = {
          tag: t
        };
        return wT.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), z_.indexOf(t) !== -1 && (i.pTagInButtonScope = null), V_.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = a, t === "form" && (i.formTag = a), t === "a" && (i.aTagInScope = a), t === "button" && (i.buttonTagInScope = a), t === "nobr" && (i.nobrTagInScope = a), t === "p" && (i.pTagInButtonScope = a), t === "li" && (i.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = a), i;
      };
      var j_ = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return F_.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, B_ = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, DT = {};
      Gp = function(e, t, i) {
        i = i || bT;
        var a = i.current, s = a && a.tag;
        t != null && (e != null && v("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = j_(e, s) ? null : a, m = d ? null : B_(e, i), S = d || m;
        if (S) {
          var C = S.tag, D = !!d + "|" + e + "|" + C;
          if (!DT[D]) {
            DT[D] = !0;
            var _ = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? _ = "Text nodes" : (_ = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : _ = "<" + e + ">", d) {
              var U = "";
              C === "table" && e === "tr" && (U += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), v("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", _, C, z, U);
            } else
              v("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", _, C);
          }
        }
      };
    }
    var Um = "suppressHydrationWarning", Vm = "$", zm = "/$", Qp = "$?", qp = "$!", H_ = "style", cS = null, fS = null;
    function I_(e) {
      var t, i, a = e.nodeType;
      switch (a) {
        case ro:
        case Wd: {
          t = a === ro ? "#document" : "#fragment";
          var s = e.documentElement;
          i = s ? s.namespaceURI : Yd(null, "");
          break;
        }
        default: {
          var d = a === Vn ? e.parentNode : e, m = d.namespaceURI || null;
          t = d.tagName, i = Yd(m, t);
          break;
        }
      }
      {
        var S = t.toLowerCase(), C = Kp(null, S);
        return {
          namespace: i,
          ancestorInfo: C
        };
      }
    }
    function Y_(e, t, i) {
      {
        var a = e, s = Yd(a.namespace, t), d = Kp(a.ancestorInfo, t);
        return {
          namespace: s,
          ancestorInfo: d
        };
      }
    }
    function nz(e) {
      return e;
    }
    function W_(e) {
      cS = In(), fS = a_();
      var t = null;
      return Zn(!1), t;
    }
    function $_(e) {
      o_(fS), Zn(cS), cS = null, fS = null;
    }
    function G_(e, t, i, a, s) {
      var d;
      {
        var m = a;
        if (Gp(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, C = Kp(m.ancestorInfo, e);
          Gp(null, S, C);
        }
        d = m.namespace;
      }
      var D = __(e, t, i, d);
      return Jp(s, D), SS(D, t), D;
    }
    function K_(e, t) {
      e.appendChild(t);
    }
    function Q_(e, t, i, a, s) {
      switch (M_(e, t, i, a), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!i.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function q_(e, t, i, a, s, d) {
      {
        var m = d;
        if (typeof a.children != typeof i.children && (typeof a.children == "string" || typeof a.children == "number")) {
          var S = "" + a.children, C = Kp(m.ancestorInfo, t);
          Gp(null, S, C);
        }
      }
      return O_(e, t, i, a);
    }
    function dS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function X_(e, t, i, a) {
      {
        var s = i;
        Gp(null, e, s.ancestorInfo);
      }
      var d = k_(e, t);
      return Jp(a, d), d;
    }
    function Z_() {
      var e = window.event;
      return e === void 0 ? Ii : zf(e.type);
    }
    var pS = typeof setTimeout == "function" ? setTimeout : void 0, J_ = typeof clearTimeout == "function" ? clearTimeout : void 0, hS = -1, _T = typeof Promise == "function" ? Promise : void 0, ek = typeof queueMicrotask == "function" ? queueMicrotask : typeof _T < "u" ? function(e) {
      return _T.resolve(null).then(e).catch(tk);
    } : pS;
    function tk(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function nk(e, t, i, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && e.focus();
          return;
        case "img": {
          i.src && (e.src = i.src);
          return;
        }
      }
    }
    function rk(e, t, i, a, s, d) {
      A_(e, t, i, a, s), SS(e, s);
    }
    function kT(e) {
      wu(e, "");
    }
    function ik(e, t, i) {
      e.nodeValue = i;
    }
    function ak(e, t) {
      e.appendChild(t);
    }
    function ok(e, t) {
      var i;
      e.nodeType === Vn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var a = e._reactRootContainer;
      a == null && i.onclick === null && Pm(i);
    }
    function lk(e, t, i) {
      e.insertBefore(t, i);
    }
    function uk(e, t, i) {
      e.nodeType === Vn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function sk(e, t) {
      e.removeChild(t);
    }
    function ck(e, t) {
      e.nodeType === Vn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function vS(e, t) {
      var i = t, a = 0;
      do {
        var s = i.nextSibling;
        if (e.removeChild(i), s && s.nodeType === Vn) {
          var d = s.data;
          if (d === zm)
            if (a === 0) {
              e.removeChild(s), Ql(t);
              return;
            } else
              a--;
          else (d === Vm || d === Qp || d === qp) && a++;
        }
        i = s;
      } while (i);
      Ql(t);
    }
    function fk(e, t) {
      e.nodeType === Vn ? vS(e.parentNode, t) : e.nodeType === Jr && vS(e, t), Ql(e);
    }
    function dk(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function pk(e) {
      e.nodeValue = "";
    }
    function hk(e, t) {
      e = e;
      var i = t[H_], a = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Ic("display", a);
    }
    function vk(e, t) {
      e.nodeValue = t;
    }
    function mk(e) {
      e.nodeType === Jr ? e.textContent = "" : e.nodeType === ro && e.documentElement && e.removeChild(e.documentElement);
    }
    function yk(e, t, i) {
      return e.nodeType !== Jr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function gk(e, t) {
      return t === "" || e.nodeType !== no ? null : e;
    }
    function Sk(e) {
      return e.nodeType !== Vn ? null : e;
    }
    function MT(e) {
      return e.data === Qp;
    }
    function mS(e) {
      return e.data === qp;
    }
    function Ck(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, a, s;
      return t && (i = t.dgst, a = t.msg, s = t.stck), {
        message: a,
        digest: i,
        stack: s
      };
    }
    function Ek(e, t) {
      e._reactRetry = t;
    }
    function Fm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Jr || t === no)
          break;
        if (t === Vn) {
          var i = e.data;
          if (i === Vm || i === qp || i === Qp)
            break;
          if (i === zm)
            return null;
        }
      }
      return e;
    }
    function Xp(e) {
      return Fm(e.nextSibling);
    }
    function Tk(e) {
      return Fm(e.firstChild);
    }
    function xk(e) {
      return Fm(e.firstChild);
    }
    function Rk(e) {
      return Fm(e.nextSibling);
    }
    function wk(e, t, i, a, s, d, m) {
      Jp(d, e), SS(e, i);
      var S;
      {
        var C = s;
        S = C.namespace;
      }
      var D = (d.mode & Ct) !== Ye;
      return N_(e, t, i, S, a, D, m);
    }
    function bk(e, t, i, a) {
      return Jp(i, e), i.mode & Ct, P_(e, t);
    }
    function Dk(e, t) {
      Jp(t, e);
    }
    function _k(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Vn) {
          var a = t.data;
          if (a === zm) {
            if (i === 0)
              return Xp(t);
            i--;
          } else (a === Vm || a === qp || a === Qp) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function OT(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Vn) {
          var a = t.data;
          if (a === Vm || a === qp || a === Qp) {
            if (i === 0)
              return t;
            i--;
          } else a === zm && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function kk(e) {
      Ql(e);
    }
    function Mk(e) {
      Ql(e);
    }
    function Ok(e) {
      return e !== "head" && e !== "body";
    }
    function Ak(e, t, i, a) {
      var s = !0;
      Nm(t.nodeValue, i, a, s);
    }
    function Lk(e, t, i, a, s, d) {
      if (t[Um] !== !0) {
        var m = !0;
        Nm(a.nodeValue, s, d, m);
      }
    }
    function Nk(e, t) {
      t.nodeType === Jr ? oS(e, t) : t.nodeType === Vn || lS(e, t);
    }
    function Pk(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === Jr ? oS(i, t) : t.nodeType === Vn || lS(i, t));
      }
    }
    function Uk(e, t, i, a, s) {
      (s || t[Um] !== !0) && (a.nodeType === Jr ? oS(i, a) : a.nodeType === Vn || lS(i, a));
    }
    function Vk(e, t, i) {
      uS(e, t);
    }
    function zk(e, t) {
      sS(e, t);
    }
    function Fk(e, t, i) {
      {
        var a = e.parentNode;
        a !== null && uS(a, t);
      }
    }
    function jk(e, t) {
      {
        var i = e.parentNode;
        i !== null && sS(i, t);
      }
    }
    function Bk(e, t, i, a, s, d) {
      (d || t[Um] !== !0) && uS(i, a);
    }
    function Hk(e, t, i, a, s) {
      (s || t[Um] !== !0) && sS(i, a);
    }
    function Ik(e) {
      v("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Yk(e) {
      Ip(e);
    }
    var Zf = Math.random().toString(36).slice(2), Jf = "__reactFiber$" + Zf, yS = "__reactProps$" + Zf, Zp = "__reactContainer$" + Zf, gS = "__reactEvents$" + Zf, Wk = "__reactListeners$" + Zf, $k = "__reactHandles$" + Zf;
    function Gk(e) {
      delete e[Jf], delete e[yS], delete e[gS], delete e[Wk], delete e[$k];
    }
    function Jp(e, t) {
      t[Jf] = e;
    }
    function jm(e, t) {
      t[Zp] = e;
    }
    function AT(e) {
      e[Zp] = null;
    }
    function eh(e) {
      return !!e[Zp];
    }
    function vc(e) {
      var t = e[Jf];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[Zp] || i[Jf], t) {
          var a = t.alternate;
          if (t.child !== null || a !== null && a.child !== null)
            for (var s = OT(e); s !== null; ) {
              var d = s[Jf];
              if (d)
                return d;
              s = OT(s);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function Qu(e) {
      var t = e[Jf] || e[Zp];
      return t && (t.tag === F || t.tag === q || t.tag === oe || t.tag === k) ? t : null;
    }
    function ed(e) {
      if (e.tag === F || e.tag === q)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Bm(e) {
      return e[yS] || null;
    }
    function SS(e, t) {
      e[yS] = t;
    }
    function Kk(e) {
      var t = e[gS];
      return t === void 0 && (t = e[gS] = /* @__PURE__ */ new Set()), t;
    }
    var LT = {}, NT = c.ReactDebugCurrentFrame;
    function Hm(e) {
      if (e) {
        var t = e._owner, i = Za(e.type, e._source, t ? t.type : null);
        NT.setExtraStackFrame(i);
      } else
        NT.setExtraStackFrame(null);
    }
    function vo(e, t, i, a, s) {
      {
        var d = Function.call.bind(Ar);
        for (var m in e)
          if (d(e, m)) {
            var S = void 0;
            try {
              if (typeof e[m] != "function") {
                var C = Error((a || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              S = e[m](t, m, a, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              S = D;
            }
            S && !(S instanceof Error) && (Hm(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", i, m, typeof S), Hm(null)), S instanceof Error && !(S.message in LT) && (LT[S.message] = !0, Hm(s), v("Failed %s type: %s", i, S.message), Hm(null));
          }
      }
    }
    var CS = [], Im;
    Im = [];
    var tu = -1;
    function qu(e) {
      return {
        current: e
      };
    }
    function ci(e, t) {
      if (tu < 0) {
        v("Unexpected pop.");
        return;
      }
      t !== Im[tu] && v("Unexpected Fiber popped."), e.current = CS[tu], CS[tu] = null, Im[tu] = null, tu--;
    }
    function fi(e, t, i) {
      tu++, CS[tu] = e.current, Im[tu] = i, e.current = t;
    }
    var ES;
    ES = {};
    var ma = {};
    Object.freeze(ma);
    var nu = qu(ma), il = qu(!1), TS = ma;
    function td(e, t, i) {
      return i && al(t) ? TS : nu.current;
    }
    function PT(e, t, i) {
      {
        var a = e.stateNode;
        a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function nd(e, t) {
      {
        var i = e.type, a = i.contextTypes;
        if (!a)
          return ma;
        var s = e.stateNode;
        if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
          return s.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var m in a)
          d[m] = t[m];
        {
          var S = nt(e) || "Unknown";
          vo(a, d, "context", S);
        }
        return s && PT(e, t, d), d;
      }
    }
    function Ym() {
      return il.current;
    }
    function al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Wm(e) {
      ci(il, e), ci(nu, e);
    }
    function xS(e) {
      ci(il, e), ci(nu, e);
    }
    function UT(e, t, i) {
      {
        if (nu.current !== ma)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fi(nu, t, e), fi(il, i, e);
      }
    }
    function VT(e, t, i) {
      {
        var a = e.stateNode, s = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
          {
            var d = nt(e) || "Unknown";
            ES[d] || (ES[d] = !0, v("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return i;
        }
        var m = a.getChildContext();
        for (var S in m)
          if (!(S in s))
            throw new Error((nt(e) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var C = nt(e) || "Unknown";
          vo(s, m, "child context", C);
        }
        return dt({}, i, m);
      }
    }
    function $m(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || ma;
        return TS = nu.current, fi(nu, i, e), fi(il, il.current, e), !0;
      }
    }
    function zT(e, t, i) {
      {
        var a = e.stateNode;
        if (!a)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var s = VT(e, t, TS);
          a.__reactInternalMemoizedMergedChildContext = s, ci(il, e), ci(nu, e), fi(nu, s, e), fi(il, i, e);
        } else
          ci(il, e), fi(il, i, e);
      }
    }
    function Qk(e) {
      {
        if (!Pl(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case k:
              return t.stateNode.context;
            case b: {
              var i = t.type;
              if (al(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Xu = 0, Gm = 1, ru = null, RS = !1, wS = !1;
    function FT(e) {
      ru === null ? ru = [e] : ru.push(e);
    }
    function qk(e) {
      RS = !0, FT(e);
    }
    function jT() {
      RS && Zu();
    }
    function Zu() {
      if (!wS && ru !== null) {
        wS = !0;
        var e = 0, t = Wi();
        try {
          var i = !0, a = ru;
          for (Hn(zr); e < a.length; e++) {
            var s = a[e];
            do
              s = s(i);
            while (s !== null);
          }
          ru = null, RS = !1;
        } catch (d) {
          throw ru !== null && (ru = ru.slice(e + 1)), rp(Ns, Zu), d;
        } finally {
          Hn(t), wS = !1;
        }
      }
      return null;
    }
    var rd = [], id = 0, Km = null, Qm = 0, Ha = [], Ia = 0, mc = null, iu = 1, au = "";
    function Xk(e) {
      return gc(), (e.flags & Aa) !== Ie;
    }
    function Zk(e) {
      return gc(), Qm;
    }
    function Jk() {
      var e = au, t = iu, i = t & ~eM(t);
      return i.toString(32) + e;
    }
    function yc(e, t) {
      gc(), rd[id++] = Qm, rd[id++] = Km, Km = e, Qm = t;
    }
    function BT(e, t, i) {
      gc(), Ha[Ia++] = iu, Ha[Ia++] = au, Ha[Ia++] = mc, mc = e;
      var a = iu, s = au, d = qm(a) - 1, m = a & ~(1 << d), S = i + 1, C = qm(t) + d;
      if (C > 30) {
        var D = d - d % 5, _ = (1 << D) - 1, z = (m & _).toString(32), U = m >> D, W = d - D, K = qm(t) + W, X = S << W, xe = X | U, $e = z + s;
        iu = 1 << K | xe, au = $e;
      } else {
        var je = S << d, Mt = je | m, Rt = s;
        iu = 1 << C | Mt, au = Rt;
      }
    }
    function bS(e) {
      gc();
      var t = e.return;
      if (t !== null) {
        var i = 1, a = 0;
        yc(e, i), BT(e, i, a);
      }
    }
    function qm(e) {
      return 32 - jn(e);
    }
    function eM(e) {
      return 1 << qm(e) - 1;
    }
    function DS(e) {
      for (; e === Km; )
        Km = rd[--id], rd[id] = null, Qm = rd[--id], rd[id] = null;
      for (; e === mc; )
        mc = Ha[--Ia], Ha[Ia] = null, au = Ha[--Ia], Ha[Ia] = null, iu = Ha[--Ia], Ha[Ia] = null;
    }
    function tM() {
      return gc(), mc !== null ? {
        id: iu,
        overflow: au
      } : null;
    }
    function nM(e, t) {
      gc(), Ha[Ia++] = iu, Ha[Ia++] = au, Ha[Ia++] = mc, iu = t.id, au = t.overflow, mc = e;
    }
    function gc() {
      Ir() || v("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Hr = null, Ya = null, mo = !1, Sc = !1, Ju = null;
    function rM() {
      mo && v("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function HT() {
      Sc = !0;
    }
    function iM() {
      return Sc;
    }
    function aM(e) {
      var t = e.stateNode.containerInfo;
      return Ya = xk(t), Hr = e, mo = !0, Ju = null, Sc = !1, !0;
    }
    function oM(e, t, i) {
      return Ya = Rk(t), Hr = e, mo = !0, Ju = null, Sc = !1, i !== null && nM(e, i), !0;
    }
    function IT(e, t) {
      switch (e.tag) {
        case k: {
          Nk(e.stateNode.containerInfo, t);
          break;
        }
        case F: {
          var i = (e.mode & Ct) !== Ye;
          Uk(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            i
          );
          break;
        }
        case oe: {
          var a = e.memoizedState;
          a.dehydrated !== null && Pk(a.dehydrated, t);
          break;
        }
      }
    }
    function YT(e, t) {
      IT(e, t);
      var i = cL();
      i.stateNode = t, i.return = e;
      var a = e.deletions;
      a === null ? (e.deletions = [i], e.flags |= zi) : a.push(i);
    }
    function _S(e, t) {
      {
        if (Sc)
          return;
        switch (e.tag) {
          case k: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case F:
                var a = t.type;
                t.pendingProps, Vk(i, a);
                break;
              case q:
                var s = t.pendingProps;
                zk(i, s);
                break;
            }
            break;
          }
          case F: {
            var d = e.type, m = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case F: {
                var C = t.type, D = t.pendingProps, _ = (e.mode & Ct) !== Ye;
                Bk(
                  d,
                  m,
                  S,
                  C,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
              case q: {
                var z = t.pendingProps, U = (e.mode & Ct) !== Ye;
                Hk(
                  d,
                  m,
                  S,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  U
                );
                break;
              }
            }
            break;
          }
          case oe: {
            var W = e.memoizedState, K = W.dehydrated;
            if (K !== null) switch (t.tag) {
              case F:
                var X = t.type;
                t.pendingProps, Fk(K, X);
                break;
              case q:
                var xe = t.pendingProps;
                jk(K, xe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function WT(e, t) {
      t.flags = t.flags & ~ti | Sn, _S(e, t);
    }
    function $T(e, t) {
      switch (e.tag) {
        case F: {
          var i = e.type;
          e.pendingProps;
          var a = yk(t, i);
          return a !== null ? (e.stateNode = a, Hr = e, Ya = Tk(a), !0) : !1;
        }
        case q: {
          var s = e.pendingProps, d = gk(t, s);
          return d !== null ? (e.stateNode = d, Hr = e, Ya = null, !0) : !1;
        }
        case oe: {
          var m = Sk(t);
          if (m !== null) {
            var S = {
              dehydrated: m,
              treeContext: tM(),
              retryLane: ai
            };
            e.memoizedState = S;
            var C = fL(m);
            return C.return = e, e.child = C, Hr = e, Ya = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function kS(e) {
      return (e.mode & Ct) !== Ye && (e.flags & Be) === Ie;
    }
    function MS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function OS(e) {
      if (mo) {
        var t = Ya;
        if (!t) {
          kS(e) && (_S(Hr, e), MS()), WT(Hr, e), mo = !1, Hr = e;
          return;
        }
        var i = t;
        if (!$T(e, t)) {
          kS(e) && (_S(Hr, e), MS()), t = Xp(i);
          var a = Hr;
          if (!t || !$T(e, t)) {
            WT(Hr, e), mo = !1, Hr = e;
            return;
          }
          YT(a, i);
        }
      }
    }
    function lM(e, t, i) {
      var a = e.stateNode, s = !Sc, d = wk(a, e.type, e.memoizedProps, t, i, e, s);
      return e.updateQueue = d, d !== null;
    }
    function uM(e) {
      var t = e.stateNode, i = e.memoizedProps, a = bk(t, i, e);
      if (a) {
        var s = Hr;
        if (s !== null)
          switch (s.tag) {
            case k: {
              var d = s.stateNode.containerInfo, m = (s.mode & Ct) !== Ye;
              Ak(
                d,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                m
              );
              break;
            }
            case F: {
              var S = s.type, C = s.memoizedProps, D = s.stateNode, _ = (s.mode & Ct) !== Ye;
              Lk(
                S,
                C,
                D,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                _
              );
              break;
            }
          }
      }
      return a;
    }
    function sM(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Dk(i, e);
    }
    function cM(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return _k(i);
    }
    function GT(e) {
      for (var t = e.return; t !== null && t.tag !== F && t.tag !== k && t.tag !== oe; )
        t = t.return;
      Hr = t;
    }
    function Xm(e) {
      if (e !== Hr)
        return !1;
      if (!mo)
        return GT(e), mo = !0, !1;
      if (e.tag !== k && (e.tag !== F || Ok(e.type) && !dS(e.type, e.memoizedProps))) {
        var t = Ya;
        if (t)
          if (kS(e))
            KT(e), MS();
          else
            for (; t; )
              YT(e, t), t = Xp(t);
      }
      return GT(e), e.tag === oe ? Ya = cM(e) : Ya = Hr ? Xp(e.stateNode) : null, !0;
    }
    function fM() {
      return mo && Ya !== null;
    }
    function KT(e) {
      for (var t = Ya; t; )
        IT(e, t), t = Xp(t);
    }
    function ad() {
      Hr = null, Ya = null, mo = !1, Sc = !1;
    }
    function QT() {
      Ju !== null && (HR(Ju), Ju = null);
    }
    function Ir() {
      return mo;
    }
    function AS(e) {
      Ju === null ? Ju = [e] : Ju.push(e);
    }
    var dM = c.ReactCurrentBatchConfig, pM = null;
    function hM() {
      return dM.transition;
    }
    var yo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var vM = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & en && (t = i), i = i.return;
        return t;
      }, Cc = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, th = [], nh = [], rh = [], ih = [], ah = [], oh = [], Ec = /* @__PURE__ */ new Set();
      yo.recordUnsafeLifecycleWarnings = function(e, t) {
        Ec.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && th.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && nh.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && rh.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && ih.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && ah.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && oh.push(e));
      }, yo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        th.length > 0 && (th.forEach(function(U) {
          e.add(nt(U) || "Component"), Ec.add(U.type);
        }), th = []);
        var t = /* @__PURE__ */ new Set();
        nh.length > 0 && (nh.forEach(function(U) {
          t.add(nt(U) || "Component"), Ec.add(U.type);
        }), nh = []);
        var i = /* @__PURE__ */ new Set();
        rh.length > 0 && (rh.forEach(function(U) {
          i.add(nt(U) || "Component"), Ec.add(U.type);
        }), rh = []);
        var a = /* @__PURE__ */ new Set();
        ih.length > 0 && (ih.forEach(function(U) {
          a.add(nt(U) || "Component"), Ec.add(U.type);
        }), ih = []);
        var s = /* @__PURE__ */ new Set();
        ah.length > 0 && (ah.forEach(function(U) {
          s.add(nt(U) || "Component"), Ec.add(U.type);
        }), ah = []);
        var d = /* @__PURE__ */ new Set();
        if (oh.length > 0 && (oh.forEach(function(U) {
          d.add(nt(U) || "Component"), Ec.add(U.type);
        }), oh = []), t.size > 0) {
          var m = Cc(t);
          v(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var S = Cc(a);
          v(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, S);
        }
        if (d.size > 0) {
          var C = Cc(d);
          v(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, C);
        }
        if (e.size > 0) {
          var D = Cc(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
        if (i.size > 0) {
          var _ = Cc(i);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (s.size > 0) {
          var z = Cc(s);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var Zm = /* @__PURE__ */ new Map(), qT = /* @__PURE__ */ new Set();
      yo.recordLegacyContextWarning = function(e, t) {
        var i = vM(e);
        if (i === null) {
          v("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!qT.has(e.type)) {
          var a = Zm.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], Zm.set(i, a)), a.push(e));
        }
      }, yo.flushLegacyContextWarning = function() {
        Zm.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], a = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              a.add(nt(d) || "Component"), qT.add(d.type);
            });
            var s = Cc(a);
            try {
              Xt(i), v(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s);
            } finally {
              dn();
            }
          }
        });
      }, yo.discardPendingWarnings = function() {
        th = [], nh = [], rh = [], ih = [], ah = [], oh = [], Zm = /* @__PURE__ */ new Map();
      };
    }
    var LS, NS, PS, US, VS, XT = function(e, t) {
    };
    LS = !1, NS = !1, PS = {}, US = {}, VS = {}, XT = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = nt(t) || "Component";
        US[i] || (US[i] = !0, v('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function mM(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function lh(e, t, i) {
      var a = i.ref;
      if (a !== null && typeof a != "function" && typeof a != "object") {
        if ((e.mode & en || J) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self) && // Will already throw with "Function components cannot have string refs"
        !(i._owner && i._owner.tag !== b) && // Will already warn with "Function components cannot be given refs"
        !(typeof i.type == "function" && !mM(i.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        i._owner) {
          var s = nt(e) || "Component";
          PS[s] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', s, a), PS[s] = !0);
        }
        if (i._owner) {
          var d = i._owner, m;
          if (d) {
            var S = d;
            if (S.tag !== b)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            m = S.stateNode;
          }
          if (!m)
            throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
          var C = m;
          Ca(a, "ref");
          var D = "" + a;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === D)
            return t.ref;
          var _ = function(z) {
            var U = C.refs;
            z === null ? delete U[D] : U[D] = z;
          };
          return _._stringRef = D, _;
        } else {
          if (typeof a != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!i._owner)
            throw new Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return a;
    }
    function Jm(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ey(e) {
      {
        var t = nt(e) || "Component";
        if (VS[t])
          return;
        VS[t] = !0, v("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function ZT(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function JT(e) {
      function t(H, Z) {
        if (e) {
          var I = H.deletions;
          I === null ? (H.deletions = [Z], H.flags |= zi) : I.push(Z);
        }
      }
      function i(H, Z) {
        if (!e)
          return null;
        for (var I = Z; I !== null; )
          t(H, I), I = I.sibling;
        return null;
      }
      function a(H, Z) {
        for (var I = /* @__PURE__ */ new Map(), fe = Z; fe !== null; )
          fe.key !== null ? I.set(fe.key, fe) : I.set(fe.index, fe), fe = fe.sibling;
        return I;
      }
      function s(H, Z) {
        var I = Mc(H, Z);
        return I.index = 0, I.sibling = null, I;
      }
      function d(H, Z, I) {
        if (H.index = I, !e)
          return H.flags |= Aa, Z;
        var fe = H.alternate;
        if (fe !== null) {
          var De = fe.index;
          return De < Z ? (H.flags |= Sn, Z) : De;
        } else
          return H.flags |= Sn, Z;
      }
      function m(H) {
        return e && H.alternate === null && (H.flags |= Sn), H;
      }
      function S(H, Z, I, fe) {
        if (Z === null || Z.tag !== q) {
          var De = AC(I, H.mode, fe);
          return De.return = H, De;
        } else {
          var Re = s(Z, I);
          return Re.return = H, Re;
        }
      }
      function C(H, Z, I, fe) {
        var De = I.type;
        if (De === Ta)
          return _(H, Z, I.props.children, fe, I.key);
        if (Z !== null && (Z.elementType === De || // Keep this check inline so it only runs on the false path:
        i1(Z, I) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof De == "object" && De !== null && De.$$typeof === rt && ZT(De) === Z.type)) {
          var Re = s(Z, I.props);
          return Re.ref = lh(H, Z, I), Re.return = H, Re._debugSource = I._source, Re._debugOwner = I._owner, Re;
        }
        var Je = OC(I, H.mode, fe);
        return Je.ref = lh(H, Z, I), Je.return = H, Je;
      }
      function D(H, Z, I, fe) {
        if (Z === null || Z.tag !== L || Z.stateNode.containerInfo !== I.containerInfo || Z.stateNode.implementation !== I.implementation) {
          var De = LC(I, H.mode, fe);
          return De.return = H, De;
        } else {
          var Re = s(Z, I.children || []);
          return Re.return = H, Re;
        }
      }
      function _(H, Z, I, fe, De) {
        if (Z === null || Z.tag !== te) {
          var Re = cs(I, H.mode, fe, De);
          return Re.return = H, Re;
        } else {
          var Je = s(Z, I);
          return Je.return = H, Je;
        }
      }
      function z(H, Z, I) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var fe = AC("" + Z, H.mode, I);
          return fe.return = H, fe;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Nr: {
              var De = OC(Z, H.mode, I);
              return De.ref = lh(H, null, Z), De.return = H, De;
            }
            case sr: {
              var Re = LC(Z, H.mode, I);
              return Re.return = H, Re;
            }
            case rt: {
              var Je = Z._payload, ot = Z._init;
              return z(H, ot(Je), I);
            }
          }
          if (mt(Z) || ut(Z)) {
            var nn = cs(Z, H.mode, I, null);
            return nn.return = H, nn;
          }
          Jm(H, Z);
        }
        return typeof Z == "function" && ey(H), null;
      }
      function U(H, Z, I, fe) {
        var De = Z !== null ? Z.key : null;
        if (typeof I == "string" && I !== "" || typeof I == "number")
          return De !== null ? null : S(H, Z, "" + I, fe);
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case Nr:
              return I.key === De ? C(H, Z, I, fe) : null;
            case sr:
              return I.key === De ? D(H, Z, I, fe) : null;
            case rt: {
              var Re = I._payload, Je = I._init;
              return U(H, Z, Je(Re), fe);
            }
          }
          if (mt(I) || ut(I))
            return De !== null ? null : _(H, Z, I, fe, null);
          Jm(H, I);
        }
        return typeof I == "function" && ey(H), null;
      }
      function W(H, Z, I, fe, De) {
        if (typeof fe == "string" && fe !== "" || typeof fe == "number") {
          var Re = H.get(I) || null;
          return S(Z, Re, "" + fe, De);
        }
        if (typeof fe == "object" && fe !== null) {
          switch (fe.$$typeof) {
            case Nr: {
              var Je = H.get(fe.key === null ? I : fe.key) || null;
              return C(Z, Je, fe, De);
            }
            case sr: {
              var ot = H.get(fe.key === null ? I : fe.key) || null;
              return D(Z, ot, fe, De);
            }
            case rt:
              var nn = fe._payload, Ht = fe._init;
              return W(H, Z, I, Ht(nn), De);
          }
          if (mt(fe) || ut(fe)) {
            var Jn = H.get(I) || null;
            return _(Z, Jn, fe, De, null);
          }
          Jm(Z, fe);
        }
        return typeof fe == "function" && ey(Z), null;
      }
      function K(H, Z, I) {
        {
          if (typeof H != "object" || H === null)
            return Z;
          switch (H.$$typeof) {
            case Nr:
            case sr:
              XT(H, I);
              var fe = H.key;
              if (typeof fe != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(fe);
                break;
              }
              if (!Z.has(fe)) {
                Z.add(fe);
                break;
              }
              v("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", fe);
              break;
            case rt:
              var De = H._payload, Re = H._init;
              K(Re(De), Z, I);
              break;
          }
        }
        return Z;
      }
      function X(H, Z, I, fe) {
        for (var De = null, Re = 0; Re < I.length; Re++) {
          var Je = I[Re];
          De = K(Je, De, H);
        }
        for (var ot = null, nn = null, Ht = Z, Jn = 0, It = 0, Wn = null; Ht !== null && It < I.length; It++) {
          Ht.index > It ? (Wn = Ht, Ht = null) : Wn = Ht.sibling;
          var pi = U(H, Ht, I[It], fe);
          if (pi === null) {
            Ht === null && (Ht = Wn);
            break;
          }
          e && Ht && pi.alternate === null && t(H, Ht), Jn = d(pi, Jn, It), nn === null ? ot = pi : nn.sibling = pi, nn = pi, Ht = Wn;
        }
        if (It === I.length) {
          if (i(H, Ht), Ir()) {
            var qr = It;
            yc(H, qr);
          }
          return ot;
        }
        if (Ht === null) {
          for (; It < I.length; It++) {
            var ga = z(H, I[It], fe);
            ga !== null && (Jn = d(ga, Jn, It), nn === null ? ot = ga : nn.sibling = ga, nn = ga);
          }
          if (Ir()) {
            var Mi = It;
            yc(H, Mi);
          }
          return ot;
        }
        for (var Oi = a(H, Ht); It < I.length; It++) {
          var hi = W(Oi, H, It, I[It], fe);
          hi !== null && (e && hi.alternate !== null && Oi.delete(hi.key === null ? It : hi.key), Jn = d(hi, Jn, It), nn === null ? ot = hi : nn.sibling = hi, nn = hi);
        }
        if (e && Oi.forEach(function(Rd) {
          return t(H, Rd);
        }), Ir()) {
          var du = It;
          yc(H, du);
        }
        return ot;
      }
      function xe(H, Z, I, fe) {
        var De = ut(I);
        if (typeof De != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          I[Symbol.toStringTag] === "Generator" && (NS || v("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), NS = !0), I.entries === De && (LS || v("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), LS = !0);
          var Re = De.call(I);
          if (Re)
            for (var Je = null, ot = Re.next(); !ot.done; ot = Re.next()) {
              var nn = ot.value;
              Je = K(nn, Je, H);
            }
        }
        var Ht = De.call(I);
        if (Ht == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, It = null, Wn = Z, pi = 0, qr = 0, ga = null, Mi = Ht.next(); Wn !== null && !Mi.done; qr++, Mi = Ht.next()) {
          Wn.index > qr ? (ga = Wn, Wn = null) : ga = Wn.sibling;
          var Oi = U(H, Wn, Mi.value, fe);
          if (Oi === null) {
            Wn === null && (Wn = ga);
            break;
          }
          e && Wn && Oi.alternate === null && t(H, Wn), pi = d(Oi, pi, qr), It === null ? Jn = Oi : It.sibling = Oi, It = Oi, Wn = ga;
        }
        if (Mi.done) {
          if (i(H, Wn), Ir()) {
            var hi = qr;
            yc(H, hi);
          }
          return Jn;
        }
        if (Wn === null) {
          for (; !Mi.done; qr++, Mi = Ht.next()) {
            var du = z(H, Mi.value, fe);
            du !== null && (pi = d(du, pi, qr), It === null ? Jn = du : It.sibling = du, It = du);
          }
          if (Ir()) {
            var Rd = qr;
            yc(H, Rd);
          }
          return Jn;
        }
        for (var Fh = a(H, Wn); !Mi.done; qr++, Mi = Ht.next()) {
          var pl = W(Fh, H, qr, Mi.value, fe);
          pl !== null && (e && pl.alternate !== null && Fh.delete(pl.key === null ? qr : pl.key), pi = d(pl, pi, qr), It === null ? Jn = pl : It.sibling = pl, It = pl);
        }
        if (e && Fh.forEach(function(HL) {
          return t(H, HL);
        }), Ir()) {
          var BL = qr;
          yc(H, BL);
        }
        return Jn;
      }
      function $e(H, Z, I, fe) {
        if (Z !== null && Z.tag === q) {
          i(H, Z.sibling);
          var De = s(Z, I);
          return De.return = H, De;
        }
        i(H, Z);
        var Re = AC(I, H.mode, fe);
        return Re.return = H, Re;
      }
      function je(H, Z, I, fe) {
        for (var De = I.key, Re = Z; Re !== null; ) {
          if (Re.key === De) {
            var Je = I.type;
            if (Je === Ta) {
              if (Re.tag === te) {
                i(H, Re.sibling);
                var ot = s(Re, I.props.children);
                return ot.return = H, ot._debugSource = I._source, ot._debugOwner = I._owner, ot;
              }
            } else if (Re.elementType === Je || // Keep this check inline so it only runs on the false path:
            i1(Re, I) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Je == "object" && Je !== null && Je.$$typeof === rt && ZT(Je) === Re.type) {
              i(H, Re.sibling);
              var nn = s(Re, I.props);
              return nn.ref = lh(H, Re, I), nn.return = H, nn._debugSource = I._source, nn._debugOwner = I._owner, nn;
            }
            i(H, Re);
            break;
          } else
            t(H, Re);
          Re = Re.sibling;
        }
        if (I.type === Ta) {
          var Ht = cs(I.props.children, H.mode, fe, I.key);
          return Ht.return = H, Ht;
        } else {
          var Jn = OC(I, H.mode, fe);
          return Jn.ref = lh(H, Z, I), Jn.return = H, Jn;
        }
      }
      function Mt(H, Z, I, fe) {
        for (var De = I.key, Re = Z; Re !== null; ) {
          if (Re.key === De)
            if (Re.tag === L && Re.stateNode.containerInfo === I.containerInfo && Re.stateNode.implementation === I.implementation) {
              i(H, Re.sibling);
              var Je = s(Re, I.children || []);
              return Je.return = H, Je;
            } else {
              i(H, Re);
              break;
            }
          else
            t(H, Re);
          Re = Re.sibling;
        }
        var ot = LC(I, H.mode, fe);
        return ot.return = H, ot;
      }
      function Rt(H, Z, I, fe) {
        var De = typeof I == "object" && I !== null && I.type === Ta && I.key === null;
        if (De && (I = I.props.children), typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case Nr:
              return m(je(H, Z, I, fe));
            case sr:
              return m(Mt(H, Z, I, fe));
            case rt:
              var Re = I._payload, Je = I._init;
              return Rt(H, Z, Je(Re), fe);
          }
          if (mt(I))
            return X(H, Z, I, fe);
          if (ut(I))
            return xe(H, Z, I, fe);
          Jm(H, I);
        }
        return typeof I == "string" && I !== "" || typeof I == "number" ? m($e(H, Z, "" + I, fe)) : (typeof I == "function" && ey(H), i(H, Z));
      }
      return Rt;
    }
    var od = JT(!0), ex = JT(!1);
    function yM(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, a = Mc(i, i.pendingProps);
        for (t.child = a, a.return = t; i.sibling !== null; )
          i = i.sibling, a = a.sibling = Mc(i, i.pendingProps), a.return = t;
        a.sibling = null;
      }
    }
    function gM(e, t) {
      for (var i = e.child; i !== null; )
        aL(i, t), i = i.sibling;
    }
    var zS = qu(null), FS;
    FS = {};
    var ty = null, ld = null, jS = null, ny = !1;
    function ry() {
      ty = null, ld = null, jS = null, ny = !1;
    }
    function tx() {
      ny = !0;
    }
    function nx() {
      ny = !1;
    }
    function rx(e, t, i) {
      fi(zS, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== FS && v("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = FS;
    }
    function BS(e, t) {
      var i = zS.current;
      ci(zS, t), e._currentValue = i;
    }
    function HS(e, t, i) {
      for (var a = e; a !== null; ) {
        var s = a.alternate;
        if (Kl(a.childLanes, t) ? s !== null && !Kl(s.childLanes, t) && (s.childLanes = ct(s.childLanes, t)) : (a.childLanes = ct(a.childLanes, t), s !== null && (s.childLanes = ct(s.childLanes, t))), a === i)
          break;
        a = a.return;
      }
      a !== i && v("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function SM(e, t, i) {
      CM(e, t, i);
    }
    function CM(e, t, i) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var s = void 0, d = a.dependencies;
        if (d !== null) {
          s = a.child;
          for (var m = d.firstContext; m !== null; ) {
            if (m.context === t) {
              if (a.tag === b) {
                var S = Ks(i), C = ou(rn, S);
                C.tag = ay;
                var D = a.updateQueue;
                if (D !== null) {
                  var _ = D.shared, z = _.pending;
                  z === null ? C.next = C : (C.next = z.next, z.next = C), _.pending = C;
                }
              }
              a.lanes = ct(a.lanes, i);
              var U = a.alternate;
              U !== null && (U.lanes = ct(U.lanes, i)), HS(a.return, i, e), d.lanes = ct(d.lanes, i);
              break;
            }
            m = m.next;
          }
        } else if (a.tag === he)
          s = a.type === e.type ? null : a.child;
        else if (a.tag === Et) {
          var W = a.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = ct(W.lanes, i);
          var K = W.alternate;
          K !== null && (K.lanes = ct(K.lanes, i)), HS(W, i, e), s = a.sibling;
        } else
          s = a.child;
        if (s !== null)
          s.return = a;
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            var X = s.sibling;
            if (X !== null) {
              X.return = s.return, s = X;
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ud(e, t) {
      ty = e, ld = null, jS = null;
      var i = e.dependencies;
      if (i !== null) {
        var a = i.firstContext;
        a !== null && (oi(i.lanes, t) && Th(), i.firstContext = null);
      }
    }
    function lr(e) {
      ny && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (jS !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (ld === null) {
          if (ty === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          ld = i, ty.dependencies = {
            lanes: re,
            firstContext: i
          };
        } else
          ld = ld.next = i;
      }
      return t;
    }
    var Tc = null;
    function IS(e) {
      Tc === null ? Tc = [e] : Tc.push(e);
    }
    function EM() {
      if (Tc !== null) {
        for (var e = 0; e < Tc.length; e++) {
          var t = Tc[e], i = t.interleaved;
          if (i !== null) {
            t.interleaved = null;
            var a = i.next, s = t.pending;
            if (s !== null) {
              var d = s.next;
              s.next = a, i.next = d;
            }
            t.pending = i;
          }
        }
        Tc = null;
      }
    }
    function ix(e, t, i, a) {
      var s = t.interleaved;
      return s === null ? (i.next = i, IS(t)) : (i.next = s.next, s.next = i), t.interleaved = i, iy(e, a);
    }
    function TM(e, t, i, a) {
      var s = t.interleaved;
      s === null ? (i.next = i, IS(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
    }
    function xM(e, t, i, a) {
      var s = t.interleaved;
      return s === null ? (i.next = i, IS(t)) : (i.next = s.next, s.next = i), t.interleaved = i, iy(e, a);
    }
    function Ki(e, t) {
      return iy(e, t);
    }
    var RM = iy;
    function iy(e, t) {
      e.lanes = ct(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ct(i.lanes, t)), i === null && (e.flags & (Sn | ti)) !== Ie && e1(e);
      for (var a = e, s = e.return; s !== null; )
        s.childLanes = ct(s.childLanes, t), i = s.alternate, i !== null ? i.childLanes = ct(i.childLanes, t) : (s.flags & (Sn | ti)) !== Ie && e1(e), a = s, s = s.return;
      if (a.tag === k) {
        var d = a.stateNode;
        return d;
      } else
        return null;
    }
    var ax = 0, ox = 1, ay = 2, YS = 3, oy = !1, WS, ly;
    WS = !1, ly = null;
    function $S(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: re
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function lx(e, t) {
      var i = t.updateQueue, a = e.updateQueue;
      if (i === a) {
        var s = {
          baseState: a.baseState,
          firstBaseUpdate: a.firstBaseUpdate,
          lastBaseUpdate: a.lastBaseUpdate,
          shared: a.shared,
          effects: a.effects
        };
        t.updateQueue = s;
      }
    }
    function ou(e, t) {
      var i = {
        eventTime: e,
        lane: t,
        tag: ax,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function es(e, t, i) {
      var a = e.updateQueue;
      if (a === null)
        return null;
      var s = a.shared;
      if (ly === s && !WS && (v("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), WS = !0), TA()) {
        var d = s.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), s.pending = t, RM(e, i);
      } else
        return xM(e, s, t, i);
    }
    function uy(e, t, i) {
      var a = t.updateQueue;
      if (a !== null) {
        var s = a.shared;
        if (Cp(i)) {
          var d = s.lanes;
          d = Tp(d, e.pendingLanes);
          var m = ct(d, i);
          s.lanes = m, Nf(e, m);
        }
      }
    }
    function GS(e, t) {
      var i = e.updateQueue, a = e.alternate;
      if (a !== null) {
        var s = a.updateQueue;
        if (i === s) {
          var d = null, m = null, S = i.firstBaseUpdate;
          if (S !== null) {
            var C = S;
            do {
              var D = {
                eventTime: C.eventTime,
                lane: C.lane,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null
              };
              m === null ? d = m = D : (m.next = D, m = D), C = C.next;
            } while (C !== null);
            m === null ? d = m = t : (m.next = t, m = t);
          } else
            d = m = t;
          i = {
            baseState: s.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: m,
            shared: s.shared,
            effects: s.effects
          }, e.updateQueue = i;
          return;
        }
      }
      var _ = i.lastBaseUpdate;
      _ === null ? i.firstBaseUpdate = t : _.next = t, i.lastBaseUpdate = t;
    }
    function wM(e, t, i, a, s, d) {
      switch (i.tag) {
        case ox: {
          var m = i.payload;
          if (typeof m == "function") {
            tx();
            var S = m.call(d, a, s);
            {
              if (e.mode & en) {
                Cn(!0);
                try {
                  m.call(d, a, s);
                } finally {
                  Cn(!1);
                }
              }
              nx();
            }
            return S;
          }
          return m;
        }
        case YS:
          e.flags = e.flags & ~rr | Be;
        // Intentional fallthrough
        case ax: {
          var C = i.payload, D;
          if (typeof C == "function") {
            tx(), D = C.call(d, a, s);
            {
              if (e.mode & en) {
                Cn(!0);
                try {
                  C.call(d, a, s);
                } finally {
                  Cn(!1);
                }
              }
              nx();
            }
          } else
            D = C;
          return D == null ? a : dt({}, a, D);
        }
        case ay:
          return oy = !0, a;
      }
      return a;
    }
    function sy(e, t, i, a) {
      var s = e.updateQueue;
      oy = !1, ly = s.shared;
      var d = s.firstBaseUpdate, m = s.lastBaseUpdate, S = s.shared.pending;
      if (S !== null) {
        s.shared.pending = null;
        var C = S, D = C.next;
        C.next = null, m === null ? d = D : m.next = D, m = C;
        var _ = e.alternate;
        if (_ !== null) {
          var z = _.updateQueue, U = z.lastBaseUpdate;
          U !== m && (U === null ? z.firstBaseUpdate = D : U.next = D, z.lastBaseUpdate = C);
        }
      }
      if (d !== null) {
        var W = s.baseState, K = re, X = null, xe = null, $e = null, je = d;
        do {
          var Mt = je.lane, Rt = je.eventTime;
          if (Kl(a, Mt)) {
            if ($e !== null) {
              var Z = {
                eventTime: Rt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ut,
                tag: je.tag,
                payload: je.payload,
                callback: je.callback,
                next: null
              };
              $e = $e.next = Z;
            }
            W = wM(e, s, je, W, t, i);
            var I = je.callback;
            if (I !== null && // If the update was already committed, we should not queue its
            // callback again.
            je.lane !== Ut) {
              e.flags |= sn;
              var fe = s.effects;
              fe === null ? s.effects = [je] : fe.push(je);
            }
          } else {
            var H = {
              eventTime: Rt,
              lane: Mt,
              tag: je.tag,
              payload: je.payload,
              callback: je.callback,
              next: null
            };
            $e === null ? (xe = $e = H, X = W) : $e = $e.next = H, K = ct(K, Mt);
          }
          if (je = je.next, je === null) {
            if (S = s.shared.pending, S === null)
              break;
            var De = S, Re = De.next;
            De.next = null, je = Re, s.lastBaseUpdate = De, s.shared.pending = null;
          }
        } while (!0);
        $e === null && (X = W), s.baseState = X, s.firstBaseUpdate = xe, s.lastBaseUpdate = $e;
        var Je = s.shared.interleaved;
        if (Je !== null) {
          var ot = Je;
          do
            K = ct(K, ot.lane), ot = ot.next;
          while (ot !== Je);
        } else d === null && (s.shared.lanes = re);
        Nh(K), e.lanes = K, e.memoizedState = W;
      }
      ly = null;
    }
    function bM(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function ux() {
      oy = !1;
    }
    function cy() {
      return oy;
    }
    function sx(e, t, i) {
      var a = t.effects;
      if (t.effects = null, a !== null)
        for (var s = 0; s < a.length; s++) {
          var d = a[s], m = d.callback;
          m !== null && (d.callback = null, bM(m, i));
        }
    }
    var uh = {}, ts = qu(uh), sh = qu(uh), fy = qu(uh);
    function dy(e) {
      if (e === uh)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function cx() {
      var e = dy(fy.current);
      return e;
    }
    function KS(e, t) {
      fi(fy, t, e), fi(sh, e, e), fi(ts, uh, e);
      var i = I_(t);
      ci(ts, e), fi(ts, i, e);
    }
    function sd(e) {
      ci(ts, e), ci(sh, e), ci(fy, e);
    }
    function QS() {
      var e = dy(ts.current);
      return e;
    }
    function fx(e) {
      dy(fy.current);
      var t = dy(ts.current), i = Y_(t, e.type);
      t !== i && (fi(sh, e, e), fi(ts, i, e));
    }
    function qS(e) {
      sh.current === e && (ci(ts, e), ci(sh, e));
    }
    var DM = 0, dx = 1, px = 1, ch = 2, go = qu(DM);
    function XS(e, t) {
      return (e & t) !== 0;
    }
    function cd(e) {
      return e & dx;
    }
    function ZS(e, t) {
      return e & dx | t;
    }
    function _M(e, t) {
      return e | t;
    }
    function ns(e, t) {
      fi(go, t, e);
    }
    function fd(e) {
      ci(go, e);
    }
    function kM(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function py(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === oe) {
          var i = t.memoizedState;
          if (i !== null) {
            var a = i.dehydrated;
            if (a === null || MT(a) || mS(a))
              return t;
          }
        } else if (t.tag === Vt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var s = (t.flags & Be) !== Ie;
          if (s)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Qi = (
      /*   */
      0
    ), mr = (
      /* */
      1
    ), ol = (
      /*  */
      2
    ), yr = (
      /*    */
      4
    ), Yr = (
      /*   */
      8
    ), JS = [];
    function e0() {
      for (var e = 0; e < JS.length; e++) {
        var t = JS[e];
        t._workInProgressVersionPrimary = null;
      }
      JS.length = 0;
    }
    function MM(e, t) {
      var i = t._getVersion, a = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
    }
    var be = c.ReactCurrentDispatcher, fh = c.ReactCurrentBatchConfig, t0, dd;
    t0 = /* @__PURE__ */ new Set();
    var xc = re, tn = null, gr = null, Sr = null, hy = !1, dh = !1, ph = 0, OM = 0, AM = 25, ee = null, Wa = null, rs = -1, n0 = !1;
    function $t() {
      {
        var e = ee;
        Wa === null ? Wa = [e] : Wa.push(e);
      }
    }
    function ge() {
      {
        var e = ee;
        Wa !== null && (rs++, Wa[rs] !== e && LM(e));
      }
    }
    function pd(e) {
      e != null && !mt(e) && v("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ee, typeof e);
    }
    function LM(e) {
      {
        var t = nt(tn);
        if (!t0.has(t) && (t0.add(t), Wa !== null)) {
          for (var i = "", a = 30, s = 0; s <= rs; s++) {
            for (var d = Wa[s], m = s === rs ? e : d, S = s + 1 + ". " + d; S.length < a; )
              S += " ";
            S += m + `
`, i += S;
          }
          v(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
        }
      }
    }
    function di() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function r0(e, t) {
      if (n0)
        return !1;
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ee), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ee, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!ue(e[i], t[i]))
          return !1;
      return !0;
    }
    function hd(e, t, i, a, s, d) {
      xc = d, tn = t, Wa = e !== null ? e._debugHookTypes : null, rs = -1, n0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = re, e !== null && e.memoizedState !== null ? be.current = Px : Wa !== null ? be.current = Nx : be.current = Lx;
      var m = i(a, s);
      if (dh) {
        var S = 0;
        do {
          if (dh = !1, ph = 0, S >= AM)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          S += 1, n0 = !1, gr = null, Sr = null, t.updateQueue = null, rs = -1, be.current = Ux, m = i(a, s);
        } while (dh);
      }
      be.current = Dy, t._debugHookTypes = Wa;
      var C = gr !== null && gr.next !== null;
      if (xc = re, tn = null, gr = null, Sr = null, ee = null, Wa = null, rs = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ct) !== Ye && v("Internal React error: Expected static flag was missing. Please notify the React team."), hy = !1, C)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return m;
    }
    function vd() {
      var e = ph !== 0;
      return ph = 0, e;
    }
    function hx(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & jt) !== Ye ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Qs(e.lanes, i);
    }
    function vx() {
      if (be.current = Dy, hy) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        hy = !1;
      }
      xc = re, tn = null, gr = null, Sr = null, Wa = null, rs = -1, ee = null, _x = !1, dh = !1, ph = 0;
    }
    function ll() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? tn.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function $a() {
      var e;
      if (gr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var i;
      if (Sr === null ? i = tn.memoizedState : i = Sr.next, i !== null)
        Sr = i, i = Sr.next, gr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        gr = e;
        var a = {
          memoizedState: gr.memoizedState,
          baseState: gr.baseState,
          baseQueue: gr.baseQueue,
          queue: gr.queue,
          next: null
        };
        Sr === null ? tn.memoizedState = Sr = a : Sr = Sr.next = a;
      }
      return Sr;
    }
    function mx() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function i0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function a0(e, t, i) {
      var a = ll(), s;
      i !== void 0 ? s = i(t) : s = t, a.memoizedState = a.baseState = s;
      var d = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      };
      a.queue = d;
      var m = d.dispatch = VM.bind(null, tn, d);
      return [a.memoizedState, m];
    }
    function o0(e, t, i) {
      var a = $a(), s = a.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var d = gr, m = d.baseQueue, S = s.pending;
      if (S !== null) {
        if (m !== null) {
          var C = m.next, D = S.next;
          m.next = D, S.next = C;
        }
        d.baseQueue !== m && v("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = m = S, s.pending = null;
      }
      if (m !== null) {
        var _ = m.next, z = d.baseState, U = null, W = null, K = null, X = _;
        do {
          var xe = X.lane;
          if (Kl(xc, xe)) {
            if (K !== null) {
              var je = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ut,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              K = K.next = je;
            }
            if (X.hasEagerState)
              z = X.eagerState;
            else {
              var Mt = X.action;
              z = e(z, Mt);
            }
          } else {
            var $e = {
              lane: xe,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            K === null ? (W = K = $e, U = z) : K = K.next = $e, tn.lanes = ct(tn.lanes, xe), Nh(xe);
          }
          X = X.next;
        } while (X !== null && X !== _);
        K === null ? U = z : K.next = W, ue(z, a.memoizedState) || Th(), a.memoizedState = z, a.baseState = U, a.baseQueue = K, s.lastRenderedState = z;
      }
      var Rt = s.interleaved;
      if (Rt !== null) {
        var H = Rt;
        do {
          var Z = H.lane;
          tn.lanes = ct(tn.lanes, Z), Nh(Z), H = H.next;
        } while (H !== Rt);
      } else m === null && (s.lanes = re);
      var I = s.dispatch;
      return [a.memoizedState, I];
    }
    function l0(e, t, i) {
      var a = $a(), s = a.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var d = s.dispatch, m = s.pending, S = a.memoizedState;
      if (m !== null) {
        s.pending = null;
        var C = m.next, D = C;
        do {
          var _ = D.action;
          S = e(S, _), D = D.next;
        } while (D !== C);
        ue(S, a.memoizedState) || Th(), a.memoizedState = S, a.baseQueue === null && (a.baseState = S), s.lastRenderedState = S;
      }
      return [S, d];
    }
    function rz(e, t, i) {
    }
    function iz(e, t, i) {
    }
    function u0(e, t, i) {
      var a = tn, s = ll(), d, m = Ir();
      if (m) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = i(), dd || d !== i() && (v("The result of getServerSnapshot should be cached to avoid an infinite loop"), dd = !0);
      } else {
        if (d = t(), !dd) {
          var S = t();
          ue(d, S) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), dd = !0);
        }
        var C = $y();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Af(C, xc) || yx(a, t, d);
      }
      s.memoizedState = d;
      var D = {
        value: d,
        getSnapshot: t
      };
      return s.queue = D, Sy(Sx.bind(null, a, D, e), [e]), a.flags |= ei, hh(mr | Yr, gx.bind(null, a, D, d, t), void 0, null), d;
    }
    function vy(e, t, i) {
      var a = tn, s = $a(), d = t();
      if (!dd) {
        var m = t();
        ue(d, m) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), dd = !0);
      }
      var S = s.memoizedState, C = !ue(S, d);
      C && (s.memoizedState = d, Th());
      var D = s.queue;
      if (mh(Sx.bind(null, a, D, e), [e]), D.getSnapshot !== t || C || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        a.flags |= ei, hh(mr | Yr, gx.bind(null, a, D, d, t), void 0, null);
        var _ = $y();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Af(_, xc) || yx(a, t, d);
      }
      return d;
    }
    function yx(e, t, i) {
      e.flags |= Nu;
      var a = {
        getSnapshot: t,
        value: i
      }, s = tn.updateQueue;
      if (s === null)
        s = mx(), tn.updateQueue = s, s.stores = [a];
      else {
        var d = s.stores;
        d === null ? s.stores = [a] : d.push(a);
      }
    }
    function gx(e, t, i, a) {
      t.value = i, t.getSnapshot = a, Cx(t) && Ex(e);
    }
    function Sx(e, t, i) {
      var a = function() {
        Cx(t) && Ex(e);
      };
      return i(a);
    }
    function Cx(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var a = t();
        return !ue(i, a);
      } catch {
        return !0;
      }
    }
    function Ex(e) {
      var t = Ki(e, Xe);
      t !== null && xr(t, e, Xe, rn);
    }
    function my(e) {
      var t = ll();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: i0,
        lastRenderedState: e
      };
      t.queue = i;
      var a = i.dispatch = zM.bind(null, tn, i);
      return [t.memoizedState, a];
    }
    function s0(e) {
      return o0(i0);
    }
    function c0(e) {
      return l0(i0);
    }
    function hh(e, t, i, a) {
      var s = {
        tag: e,
        create: t,
        destroy: i,
        deps: a,
        // Circular
        next: null
      }, d = tn.updateQueue;
      if (d === null)
        d = mx(), tn.updateQueue = d, d.lastEffect = s.next = s;
      else {
        var m = d.lastEffect;
        if (m === null)
          d.lastEffect = s.next = s;
        else {
          var S = m.next;
          m.next = s, s.next = S, d.lastEffect = s;
        }
      }
      return s;
    }
    function f0(e) {
      var t = ll();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function yy(e) {
      var t = $a();
      return t.memoizedState;
    }
    function vh(e, t, i, a) {
      var s = ll(), d = a === void 0 ? null : a;
      tn.flags |= e, s.memoizedState = hh(mr | t, i, void 0, d);
    }
    function gy(e, t, i, a) {
      var s = $a(), d = a === void 0 ? null : a, m = void 0;
      if (gr !== null) {
        var S = gr.memoizedState;
        if (m = S.destroy, d !== null) {
          var C = S.deps;
          if (r0(d, C)) {
            s.memoizedState = hh(t, i, m, d);
            return;
          }
        }
      }
      tn.flags |= e, s.memoizedState = hh(mr | t, i, m, d);
    }
    function Sy(e, t) {
      return (tn.mode & jt) !== Ye ? vh(La | ei | af, Yr, e, t) : vh(ei | af, Yr, e, t);
    }
    function mh(e, t) {
      return gy(ei, Yr, e, t);
    }
    function d0(e, t) {
      return vh(Dt, ol, e, t);
    }
    function Cy(e, t) {
      return gy(Dt, ol, e, t);
    }
    function p0(e, t) {
      var i = Dt;
      return i |= ao, (tn.mode & jt) !== Ye && (i |= Ho), vh(i, yr, e, t);
    }
    function Ey(e, t) {
      return gy(Dt, yr, e, t);
    }
    function Tx(e, t) {
      if (typeof t == "function") {
        var i = t, a = e();
        return i(a), function() {
          i(null);
        };
      } else if (t != null) {
        var s = t;
        s.hasOwnProperty("current") || v("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(s).join(", ") + "}");
        var d = e();
        return s.current = d, function() {
          s.current = null;
        };
      }
    }
    function h0(e, t, i) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null, s = Dt;
      return s |= ao, (tn.mode & jt) !== Ye && (s |= Ho), vh(s, yr, Tx.bind(null, t, e), a);
    }
    function Ty(e, t, i) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null;
      return gy(Dt, yr, Tx.bind(null, t, e), a);
    }
    function NM(e, t) {
    }
    var xy = NM;
    function v0(e, t) {
      var i = ll(), a = t === void 0 ? null : t;
      return i.memoizedState = [e, a], e;
    }
    function Ry(e, t) {
      var i = $a(), a = t === void 0 ? null : t, s = i.memoizedState;
      if (s !== null && a !== null) {
        var d = s[1];
        if (r0(a, d))
          return s[0];
      }
      return i.memoizedState = [e, a], e;
    }
    function m0(e, t) {
      var i = ll(), a = t === void 0 ? null : t, s = e();
      return i.memoizedState = [s, a], s;
    }
    function wy(e, t) {
      var i = $a(), a = t === void 0 ? null : t, s = i.memoizedState;
      if (s !== null && a !== null) {
        var d = s[1];
        if (r0(a, d))
          return s[0];
      }
      var m = e();
      return i.memoizedState = [m, a], m;
    }
    function y0(e) {
      var t = ll();
      return t.memoizedState = e, e;
    }
    function xx(e) {
      var t = $a(), i = gr, a = i.memoizedState;
      return wx(t, a, e);
    }
    function Rx(e) {
      var t = $a();
      if (gr === null)
        return t.memoizedState = e, e;
      var i = gr.memoizedState;
      return wx(t, i, e);
    }
    function wx(e, t, i) {
      var a = !gp(xc);
      if (a) {
        if (!ue(i, t)) {
          var s = Ep();
          tn.lanes = ct(tn.lanes, s), Nh(s), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Th()), e.memoizedState = i, i;
    }
    function PM(e, t, i) {
      var a = Wi();
      Hn(nm(a, Va)), e(!0);
      var s = fh.transition;
      fh.transition = {};
      var d = fh.transition;
      fh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Hn(a), fh.transition = s, s === null && d._updatedFibers) {
          var m = d._updatedFibers.size;
          m > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function g0() {
      var e = my(!1), t = e[0], i = e[1], a = PM.bind(null, i), s = ll();
      return s.memoizedState = a, [t, a];
    }
    function bx() {
      var e = s0(), t = e[0], i = $a(), a = i.memoizedState;
      return [t, a];
    }
    function Dx() {
      var e = c0(), t = e[0], i = $a(), a = i.memoizedState;
      return [t, a];
    }
    var _x = !1;
    function UM() {
      return _x;
    }
    function S0() {
      var e = ll(), t = $y(), i = t.identifierPrefix, a;
      if (Ir()) {
        var s = Jk();
        a = ":" + i + "R" + s;
        var d = ph++;
        d > 0 && (a += "H" + d.toString(32)), a += ":";
      } else {
        var m = OM++;
        a = ":" + i + "r" + m.toString(32) + ":";
      }
      return e.memoizedState = a, a;
    }
    function by() {
      var e = $a(), t = e.memoizedState;
      return t;
    }
    function VM(e, t, i) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = us(e), s = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (kx(e))
        Mx(t, s);
      else {
        var d = ix(e, t, s, a);
        if (d !== null) {
          var m = ki();
          xr(d, e, a, m), Ox(d, t, a);
        }
      }
      Ax(e, a);
    }
    function zM(e, t, i) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = us(e), s = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (kx(e))
        Mx(t, s);
      else {
        var d = e.alternate;
        if (e.lanes === re && (d === null || d.lanes === re)) {
          var m = t.lastRenderedReducer;
          if (m !== null) {
            var S;
            S = be.current, be.current = So;
            try {
              var C = t.lastRenderedState, D = m(C, i);
              if (s.hasEagerState = !0, s.eagerState = D, ue(D, C)) {
                TM(e, t, s, a);
                return;
              }
            } catch {
            } finally {
              be.current = S;
            }
          }
        }
        var _ = ix(e, t, s, a);
        if (_ !== null) {
          var z = ki();
          xr(_, e, a, z), Ox(_, t, a);
        }
      }
      Ax(e, a);
    }
    function kx(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function Mx(e, t) {
      dh = hy = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function Ox(e, t, i) {
      if (Cp(i)) {
        var a = t.lanes;
        a = Tp(a, e.pendingLanes);
        var s = ct(a, i);
        t.lanes = s, Nf(e, s);
      }
    }
    function Ax(e, t, i) {
      Fs(e, t);
    }
    var Dy = {
      readContext: lr,
      useCallback: di,
      useContext: di,
      useEffect: di,
      useImperativeHandle: di,
      useInsertionEffect: di,
      useLayoutEffect: di,
      useMemo: di,
      useReducer: di,
      useRef: di,
      useState: di,
      useDebugValue: di,
      useDeferredValue: di,
      useTransition: di,
      useMutableSource: di,
      useSyncExternalStore: di,
      useId: di,
      unstable_isNewReconciler: se
    }, Lx = null, Nx = null, Px = null, Ux = null, ul = null, So = null, _y = null;
    {
      var C0 = function() {
        v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, it = function() {
        v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Lx = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", $t(), pd(t), v0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", $t(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", $t(), pd(t), Sy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", $t(), pd(i), h0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", $t(), pd(t), d0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", $t(), pd(t), p0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", $t(), pd(t);
          var i = be.current;
          be.current = ul;
          try {
            return m0(e, t);
          } finally {
            be.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", $t();
          var a = be.current;
          be.current = ul;
          try {
            return a0(e, t, i);
          } finally {
            be.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", $t(), f0(e);
        },
        useState: function(e) {
          ee = "useState", $t();
          var t = be.current;
          be.current = ul;
          try {
            return my(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", $t(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", $t(), y0(e);
        },
        useTransition: function() {
          return ee = "useTransition", $t(), g0();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", $t(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", $t(), u0(e, t, i);
        },
        useId: function() {
          return ee = "useId", $t(), S0();
        },
        unstable_isNewReconciler: se
      }, Nx = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", ge(), v0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", ge(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", ge(), Sy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", ge(), h0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", ge(), d0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", ge(), p0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", ge();
          var i = be.current;
          be.current = ul;
          try {
            return m0(e, t);
          } finally {
            be.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", ge();
          var a = be.current;
          be.current = ul;
          try {
            return a0(e, t, i);
          } finally {
            be.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", ge(), f0(e);
        },
        useState: function(e) {
          ee = "useState", ge();
          var t = be.current;
          be.current = ul;
          try {
            return my(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", ge(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", ge(), y0(e);
        },
        useTransition: function() {
          return ee = "useTransition", ge(), g0();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", ge(), u0(e, t, i);
        },
        useId: function() {
          return ee = "useId", ge(), S0();
        },
        unstable_isNewReconciler: se
      }, Px = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", ge(), Ry(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", ge(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", ge(), mh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", ge(), Ty(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", ge(), Cy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", ge(), Ey(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", ge();
          var i = be.current;
          be.current = So;
          try {
            return wy(e, t);
          } finally {
            be.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", ge();
          var a = be.current;
          be.current = So;
          try {
            return o0(e, t, i);
          } finally {
            be.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", ge(), yy();
        },
        useState: function(e) {
          ee = "useState", ge();
          var t = be.current;
          be.current = So;
          try {
            return s0(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", ge(), xy();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", ge(), xx(e);
        },
        useTransition: function() {
          return ee = "useTransition", ge(), bx();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", ge(), vy(e, t);
        },
        useId: function() {
          return ee = "useId", ge(), by();
        },
        unstable_isNewReconciler: se
      }, Ux = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", ge(), Ry(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", ge(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", ge(), mh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", ge(), Ty(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", ge(), Cy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", ge(), Ey(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", ge();
          var i = be.current;
          be.current = _y;
          try {
            return wy(e, t);
          } finally {
            be.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", ge();
          var a = be.current;
          be.current = _y;
          try {
            return l0(e, t, i);
          } finally {
            be.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", ge(), yy();
        },
        useState: function(e) {
          ee = "useState", ge();
          var t = be.current;
          be.current = _y;
          try {
            return c0(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", ge(), xy();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", ge(), Rx(e);
        },
        useTransition: function() {
          return ee = "useTransition", ge(), Dx();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", ge(), vy(e, t);
        },
        useId: function() {
          return ee = "useId", ge(), by();
        },
        unstable_isNewReconciler: se
      }, ul = {
        readContext: function(e) {
          return C0(), lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", it(), $t(), v0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", it(), $t(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", it(), $t(), Sy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", it(), $t(), h0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", it(), $t(), d0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", it(), $t(), p0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", it(), $t();
          var i = be.current;
          be.current = ul;
          try {
            return m0(e, t);
          } finally {
            be.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", it(), $t();
          var a = be.current;
          be.current = ul;
          try {
            return a0(e, t, i);
          } finally {
            be.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", it(), $t(), f0(e);
        },
        useState: function(e) {
          ee = "useState", it(), $t();
          var t = be.current;
          be.current = ul;
          try {
            return my(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", it(), $t(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", it(), $t(), y0(e);
        },
        useTransition: function() {
          return ee = "useTransition", it(), $t(), g0();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", it(), $t(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", it(), $t(), u0(e, t, i);
        },
        useId: function() {
          return ee = "useId", it(), $t(), S0();
        },
        unstable_isNewReconciler: se
      }, So = {
        readContext: function(e) {
          return C0(), lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", it(), ge(), Ry(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", it(), ge(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", it(), ge(), mh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", it(), ge(), Ty(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", it(), ge(), Cy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", it(), ge(), Ey(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", it(), ge();
          var i = be.current;
          be.current = So;
          try {
            return wy(e, t);
          } finally {
            be.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", it(), ge();
          var a = be.current;
          be.current = So;
          try {
            return o0(e, t, i);
          } finally {
            be.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", it(), ge(), yy();
        },
        useState: function(e) {
          ee = "useState", it(), ge();
          var t = be.current;
          be.current = So;
          try {
            return s0(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", it(), ge(), xy();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", it(), ge(), xx(e);
        },
        useTransition: function() {
          return ee = "useTransition", it(), ge(), bx();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", it(), ge(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", it(), ge(), vy(e, t);
        },
        useId: function() {
          return ee = "useId", it(), ge(), by();
        },
        unstable_isNewReconciler: se
      }, _y = {
        readContext: function(e) {
          return C0(), lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", it(), ge(), Ry(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", it(), ge(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", it(), ge(), mh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", it(), ge(), Ty(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", it(), ge(), Cy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", it(), ge(), Ey(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", it(), ge();
          var i = be.current;
          be.current = So;
          try {
            return wy(e, t);
          } finally {
            be.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", it(), ge();
          var a = be.current;
          be.current = So;
          try {
            return l0(e, t, i);
          } finally {
            be.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", it(), ge(), yy();
        },
        useState: function(e) {
          ee = "useState", it(), ge();
          var t = be.current;
          be.current = So;
          try {
            return c0(e);
          } finally {
            be.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", it(), ge(), xy();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", it(), ge(), Rx(e);
        },
        useTransition: function() {
          return ee = "useTransition", it(), ge(), Dx();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", it(), ge(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", it(), ge(), vy(e, t);
        },
        useId: function() {
          return ee = "useId", it(), ge(), by();
        },
        unstable_isNewReconciler: se
      };
    }
    var is = l.unstable_now, Vx = 0, ky = -1, yh = -1, My = -1, E0 = !1, Oy = !1;
    function zx() {
      return E0;
    }
    function FM() {
      Oy = !0;
    }
    function jM() {
      E0 = !1, Oy = !1;
    }
    function BM() {
      E0 = Oy, Oy = !1;
    }
    function Fx() {
      return Vx;
    }
    function jx() {
      Vx = is();
    }
    function T0(e) {
      yh = is(), e.actualStartTime < 0 && (e.actualStartTime = is());
    }
    function Bx(e) {
      yh = -1;
    }
    function Ay(e, t) {
      if (yh >= 0) {
        var i = is() - yh;
        e.actualDuration += i, t && (e.selfBaseDuration = i), yh = -1;
      }
    }
    function sl(e) {
      if (ky >= 0) {
        var t = is() - ky;
        ky = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case k:
              var a = i.stateNode;
              a.effectDuration += t;
              return;
            case Oe:
              var s = i.stateNode;
              s.effectDuration += t;
              return;
          }
          i = i.return;
        }
      }
    }
    function x0(e) {
      if (My >= 0) {
        var t = is() - My;
        My = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case k:
              var a = i.stateNode;
              a !== null && (a.passiveEffectDuration += t);
              return;
            case Oe:
              var s = i.stateNode;
              s !== null && (s.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function cl() {
      ky = is();
    }
    function R0() {
      My = is();
    }
    function w0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Co(e, t) {
      if (e && e.defaultProps) {
        var i = dt({}, t), a = e.defaultProps;
        for (var s in a)
          i[s] === void 0 && (i[s] = a[s]);
        return i;
      }
      return t;
    }
    var b0 = {}, D0, _0, k0, M0, O0, Hx, Ly, A0, L0, N0, gh;
    {
      D0 = /* @__PURE__ */ new Set(), _0 = /* @__PURE__ */ new Set(), k0 = /* @__PURE__ */ new Set(), M0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), O0 = /* @__PURE__ */ new Set(), L0 = /* @__PURE__ */ new Set(), N0 = /* @__PURE__ */ new Set(), gh = /* @__PURE__ */ new Set();
      var Ix = /* @__PURE__ */ new Set();
      Ly = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          Ix.has(i) || (Ix.add(i), v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Hx = function(e, t) {
        if (t === void 0) {
          var i = Lt(e) || "Component";
          O0.has(i) || (O0.add(i), v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(b0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(b0);
    }
    function P0(e, t, i, a) {
      var s = e.memoizedState, d = i(a, s);
      {
        if (e.mode & en) {
          Cn(!0);
          try {
            d = i(a, s);
          } finally {
            Cn(!1);
          }
        }
        Hx(t, d);
      }
      var m = d == null ? s : dt({}, s, d);
      if (e.memoizedState = m, e.lanes === re) {
        var S = e.updateQueue;
        S.baseState = m;
      }
    }
    var U0 = {
      isMounted: jv,
      enqueueSetState: function(e, t, i) {
        var a = Lu(e), s = ki(), d = us(a), m = ou(s, d);
        m.payload = t, i != null && (Ly(i, "setState"), m.callback = i);
        var S = es(a, m, d);
        S !== null && (xr(S, a, d, s), uy(S, a, d)), Fs(a, d);
      },
      enqueueReplaceState: function(e, t, i) {
        var a = Lu(e), s = ki(), d = us(a), m = ou(s, d);
        m.tag = ox, m.payload = t, i != null && (Ly(i, "replaceState"), m.callback = i);
        var S = es(a, m, d);
        S !== null && (xr(S, a, d, s), uy(S, a, d)), Fs(a, d);
      },
      enqueueForceUpdate: function(e, t) {
        var i = Lu(e), a = ki(), s = us(i), d = ou(a, s);
        d.tag = ay, t != null && (Ly(t, "forceUpdate"), d.callback = t);
        var m = es(i, d, s);
        m !== null && (xr(m, i, s, a), uy(m, i, s)), df(i, s);
      }
    };
    function Yx(e, t, i, a, s, d, m) {
      var S = e.stateNode;
      if (typeof S.shouldComponentUpdate == "function") {
        var C = S.shouldComponentUpdate(a, d, m);
        {
          if (e.mode & en) {
            Cn(!0);
            try {
              C = S.shouldComponentUpdate(a, d, m);
            } finally {
              Cn(!1);
            }
          }
          C === void 0 && v("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Lt(t) || "Component");
        }
        return C;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ne(i, a) || !Ne(s, d) : !0;
    }
    function HM(e, t, i) {
      var a = e.stateNode;
      {
        var s = Lt(t) || "Component", d = a.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? v("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : v("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && v("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && v("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), a.propTypes && v("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), a.contextType && v("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), t.childContextTypes && !gh.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === Ye && (gh.add(t), v(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, s)), t.contextTypes && !gh.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === Ye && (gh.add(t), v(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s)), a.contextTypes && v("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), t.contextType && t.contextTypes && !L0.has(t) && (L0.add(t), v("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof a.componentShouldUpdate == "function" && v("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && v("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Lt(t) || "A pure component"), typeof a.componentDidUnmount == "function" && v("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof a.componentDidReceiveProps == "function" && v("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof a.componentWillRecieveProps == "function" && v("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof a.UNSAFE_componentWillRecieveProps == "function" && v("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var m = a.props !== i;
        a.props !== void 0 && m && v("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), a.defaultProps && v("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !k0.has(t) && (k0.add(t), v("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Lt(t))), typeof a.getDerivedStateFromProps == "function" && v("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof a.getDerivedStateFromError == "function" && v("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof t.getSnapshotBeforeUpdate == "function" && v("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var S = a.state;
        S && (typeof S != "object" || mt(S)) && v("%s.state: must be set to an object or null", s), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function Wx(e, t) {
      t.updater = U0, e.stateNode = t, Nl(t, e), t._reactInternalInstance = b0;
    }
    function $x(e, t, i) {
      var a = !1, s = ma, d = ma, m = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          m === null || m !== void 0 && m.$$typeof === N && m._context === void 0
        );
        if (!S && !N0.has(t)) {
          N0.add(t);
          var C = "";
          m === void 0 ? C = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? C = " However, it is set to a " + typeof m + "." : m.$$typeof === Ra ? C = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? C = " Did you accidentally pass the Context.Consumer instead?" : C = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Lt(t) || "Component", C);
        }
      }
      if (typeof m == "object" && m !== null)
        d = lr(m);
      else {
        s = td(e, t, !0);
        var D = t.contextTypes;
        a = D != null, d = a ? nd(e, s) : ma;
      }
      var _ = new t(i, d);
      if (e.mode & en) {
        Cn(!0);
        try {
          _ = new t(i, d);
        } finally {
          Cn(!1);
        }
      }
      var z = e.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null;
      Wx(e, _);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var U = Lt(t) || "Component";
          _0.has(U) || (_0.add(U), v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, _.state === null ? "null" : "undefined", U));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var W = null, K = null, X = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), W !== null || K !== null || X !== null) {
            var xe = Lt(t) || "Component", $e = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            M0.has(xe) || (M0.add(xe), v(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, xe, $e, W !== null ? `
  ` + W : "", K !== null ? `
  ` + K : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return a && PT(e, s, d), _;
    }
    function IM(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (v("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", nt(e) || "Component"), U0.enqueueReplaceState(t, t.state, null));
    }
    function Gx(e, t, i, a) {
      var s = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, a), t.state !== s) {
        {
          var d = nt(e) || "Component";
          D0.has(d) || (D0.add(d), v("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        U0.enqueueReplaceState(t, t.state, null);
      }
    }
    function V0(e, t, i, a) {
      HM(e, t, i);
      var s = e.stateNode;
      s.props = i, s.state = e.memoizedState, s.refs = {}, $S(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        s.context = lr(d);
      else {
        var m = td(e, t, !0);
        s.context = nd(e, m);
      }
      {
        if (s.state === i) {
          var S = Lt(t) || "Component";
          A0.has(S) || (A0.add(S), v("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", S));
        }
        e.mode & en && yo.recordLegacyContextWarning(e, s), yo.recordUnsafeLifecycleWarnings(e, s);
      }
      s.state = e.memoizedState;
      var C = t.getDerivedStateFromProps;
      if (typeof C == "function" && (P0(e, t, C, i), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (IM(e, s), sy(e, i, s, a), s.state = e.memoizedState), typeof s.componentDidMount == "function") {
        var D = Dt;
        D |= ao, (e.mode & jt) !== Ye && (D |= Ho), e.flags |= D;
      }
    }
    function YM(e, t, i, a) {
      var s = e.stateNode, d = e.memoizedProps;
      s.props = d;
      var m = s.context, S = t.contextType, C = ma;
      if (typeof S == "object" && S !== null)
        C = lr(S);
      else {
        var D = td(e, t, !0);
        C = nd(e, D);
      }
      var _ = t.getDerivedStateFromProps, z = typeof _ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== i || m !== C) && Gx(e, s, i, C), ux();
      var U = e.memoizedState, W = s.state = U;
      if (sy(e, i, s, a), W = e.memoizedState, d === i && U === W && !Ym() && !cy()) {
        if (typeof s.componentDidMount == "function") {
          var K = Dt;
          K |= ao, (e.mode & jt) !== Ye && (K |= Ho), e.flags |= K;
        }
        return !1;
      }
      typeof _ == "function" && (P0(e, t, _, i), W = e.memoizedState);
      var X = cy() || Yx(e, t, d, i, U, W, C);
      if (X) {
        if (!z && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function") {
          var xe = Dt;
          xe |= ao, (e.mode & jt) !== Ye && (xe |= Ho), e.flags |= xe;
        }
      } else {
        if (typeof s.componentDidMount == "function") {
          var $e = Dt;
          $e |= ao, (e.mode & jt) !== Ye && ($e |= Ho), e.flags |= $e;
        }
        e.memoizedProps = i, e.memoizedState = W;
      }
      return s.props = i, s.state = W, s.context = C, X;
    }
    function WM(e, t, i, a, s) {
      var d = t.stateNode;
      lx(e, t);
      var m = t.memoizedProps, S = t.type === t.elementType ? m : Co(t.type, m);
      d.props = S;
      var C = t.pendingProps, D = d.context, _ = i.contextType, z = ma;
      if (typeof _ == "object" && _ !== null)
        z = lr(_);
      else {
        var U = td(t, i, !0);
        z = nd(t, U);
      }
      var W = i.getDerivedStateFromProps, K = typeof W == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !K && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (m !== C || D !== z) && Gx(t, d, a, z), ux();
      var X = t.memoizedState, xe = d.state = X;
      if (sy(t, a, d, s), xe = t.memoizedState, m === C && X === xe && !Ym() && !cy() && !Ve)
        return typeof d.componentDidUpdate == "function" && (m !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Dt), typeof d.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= qn), !1;
      typeof W == "function" && (P0(t, i, W, a), xe = t.memoizedState);
      var $e = cy() || Yx(t, i, S, a, X, xe, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ve;
      return $e ? (!K && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(a, xe, z), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(a, xe, z)), typeof d.componentDidUpdate == "function" && (t.flags |= Dt), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= qn)) : (typeof d.componentDidUpdate == "function" && (m !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Dt), typeof d.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= qn), t.memoizedProps = a, t.memoizedState = xe), d.props = a, d.state = xe, d.context = z, $e;
    }
    function Rc(e, t) {
      return {
        value: e,
        source: t,
        stack: Ja(t),
        digest: null
      };
    }
    function z0(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function $M(e, t) {
      return !0;
    }
    function F0(e, t) {
      try {
        var i = $M(e, t);
        if (i === !1)
          return;
        var a = t.value, s = t.source, d = t.stack, m = d !== null ? d : "";
        if (a != null && a._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(a);
        }
        var S = s ? nt(s) : null, C = S ? "The above error occurred in the <" + S + "> component:" : "The above error occurred in one of your React components:", D;
        if (e.tag === k)
          D = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var _ = nt(e) || "Anonymous";
          D = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + _ + ".");
        }
        var z = C + `
` + m + `

` + ("" + D);
        console.error(z);
      } catch (U) {
        setTimeout(function() {
          throw U;
        });
      }
    }
    var GM = typeof WeakMap == "function" ? WeakMap : Map;
    function Kx(e, t, i) {
      var a = ou(rn, i);
      a.tag = YS, a.payload = {
        element: null
      };
      var s = t.value;
      return a.callback = function() {
        FA(s), F0(e, t);
      }, a;
    }
    function j0(e, t, i) {
      var a = ou(rn, i);
      a.tag = YS;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var d = t.value;
        a.payload = function() {
          return s(d);
        }, a.callback = function() {
          a1(e), F0(e, t);
        };
      }
      var m = e.stateNode;
      return m !== null && typeof m.componentDidCatch == "function" && (a.callback = function() {
        a1(e), F0(e, t), typeof s != "function" && VA(this);
        var C = t.value, D = t.stack;
        this.componentDidCatch(C, {
          componentStack: D !== null ? D : ""
        }), typeof s != "function" && (oi(e.lanes, Xe) || v("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", nt(e) || "Unknown"));
      }), a;
    }
    function Qx(e, t, i) {
      var a = e.pingCache, s;
      if (a === null ? (a = e.pingCache = new GM(), s = /* @__PURE__ */ new Set(), a.set(t, s)) : (s = a.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(t, s))), !s.has(i)) {
        s.add(i);
        var d = jA.bind(null, e, t, i);
        ii && Ph(e, i), t.then(d, d);
      }
    }
    function KM(e, t, i, a) {
      var s = e.updateQueue;
      if (s === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(i), e.updateQueue = d;
      } else
        s.add(i);
    }
    function QM(e, t) {
      var i = e.tag;
      if ((e.mode & Ct) === Ye && (i === R || i === pe || i === ke)) {
        var a = e.alternate;
        a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function qx(e) {
      var t = e;
      do {
        if (t.tag === oe && kM(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Xx(e, t, i, a, s) {
      if ((e.mode & Ct) === Ye) {
        if (e === t)
          e.flags |= rr;
        else {
          if (e.flags |= Be, i.flags |= rf, i.flags &= -52805, i.tag === b) {
            var d = i.alternate;
            if (d === null)
              i.tag = at;
            else {
              var m = ou(rn, Xe);
              m.tag = ay, es(i, m, Xe);
            }
          }
          i.lanes = ct(i.lanes, Xe);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = s, e;
    }
    function qM(e, t, i, a, s) {
      if (i.flags |= Ls, ii && Ph(e, s), a !== null && typeof a == "object" && typeof a.then == "function") {
        var d = a;
        QM(i), Ir() && i.mode & Ct && HT();
        var m = qx(t);
        if (m !== null) {
          m.flags &= ~Dr, Xx(m, t, i, e, s), m.mode & Ct && Qx(e, d, s), KM(m, e, d);
          return;
        } else {
          if (!Kv(s)) {
            Qx(e, d, s), SC();
            return;
          }
          var S = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          a = S;
        }
      } else if (Ir() && i.mode & Ct) {
        HT();
        var C = qx(t);
        if (C !== null) {
          (C.flags & rr) === Ie && (C.flags |= Dr), Xx(C, t, i, e, s), AS(Rc(a, i));
          return;
        }
      }
      a = Rc(a, i), kA(a);
      var D = t;
      do {
        switch (D.tag) {
          case k: {
            var _ = a;
            D.flags |= rr;
            var z = Ks(s);
            D.lanes = ct(D.lanes, z);
            var U = Kx(D, _, z);
            GS(D, U);
            return;
          }
          case b:
            var W = a, K = D.type, X = D.stateNode;
            if ((D.flags & Be) === Ie && (typeof K.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !qR(X))) {
              D.flags |= rr;
              var xe = Ks(s);
              D.lanes = ct(D.lanes, xe);
              var $e = j0(D, W, xe);
              GS(D, $e);
              return;
            }
            break;
        }
        D = D.return;
      } while (D !== null);
    }
    function XM() {
      return null;
    }
    var Sh = c.ReactCurrentOwner, Eo = !1, B0, Ch, H0, I0, Y0, wc, W0, Ny, Eh;
    B0 = {}, Ch = {}, H0 = {}, I0 = {}, Y0 = {}, wc = !1, W0 = {}, Ny = {}, Eh = {};
    function Di(e, t, i, a) {
      e === null ? t.child = ex(t, null, i, a) : t.child = od(t, e.child, i, a);
    }
    function ZM(e, t, i, a) {
      t.child = od(t, e.child, null, a), t.child = od(t, null, i, a);
    }
    function Zx(e, t, i, a, s) {
      if (t.type !== t.elementType) {
        var d = i.propTypes;
        d && vo(
          d,
          a,
          // Resolved props
          "prop",
          Lt(i)
        );
      }
      var m = i.render, S = t.ref, C, D;
      ud(t, s), xi(t);
      {
        if (Sh.current = t, Qn(!0), C = hd(e, t, m, a, S, s), D = vd(), t.mode & en) {
          Cn(!0);
          try {
            C = hd(e, t, m, a, S, s), D = vd();
          } finally {
            Cn(!1);
          }
        }
        Qn(!1);
      }
      return Ri(), e !== null && !Eo ? (hx(e, t, s), lu(e, t, s)) : (Ir() && D && bS(t), t.flags |= fa, Di(e, t, C, s), t.child);
    }
    function Jx(e, t, i, a, s) {
      if (e === null) {
        var d = i.type;
        if (rL(d) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var m = d;
          return m = xd(d), t.tag = ke, t.type = m, K0(t, d), eR(e, t, m, a, s);
        }
        {
          var S = d.propTypes;
          if (S && vo(
            S,
            a,
            // Resolved props
            "prop",
            Lt(d)
          ), i.defaultProps !== void 0) {
            var C = Lt(d) || "Unknown";
            Eh[C] || (v("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", C), Eh[C] = !0);
          }
        }
        var D = MC(i.type, null, a, t, t.mode, s);
        return D.ref = t.ref, D.return = t, t.child = D, D;
      }
      {
        var _ = i.type, z = _.propTypes;
        z && vo(
          z,
          a,
          // Resolved props
          "prop",
          Lt(_)
        );
      }
      var U = e.child, W = eC(e, s);
      if (!W) {
        var K = U.memoizedProps, X = i.compare;
        if (X = X !== null ? X : Ne, X(K, a) && e.ref === t.ref)
          return lu(e, t, s);
      }
      t.flags |= fa;
      var xe = Mc(U, a);
      return xe.ref = t.ref, xe.return = t, t.child = xe, xe;
    }
    function eR(e, t, i, a, s) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === rt) {
          var m = d, S = m._payload, C = m._init;
          try {
            d = C(S);
          } catch {
            d = null;
          }
          var D = d && d.propTypes;
          D && vo(
            D,
            a,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Lt(d)
          );
        }
      }
      if (e !== null) {
        var _ = e.memoizedProps;
        if (Ne(_, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Eo = !1, t.pendingProps = a = _, eC(e, s))
            (e.flags & rf) !== Ie && (Eo = !0);
          else return t.lanes = e.lanes, lu(e, t, s);
      }
      return $0(e, t, i, a, s);
    }
    function tR(e, t, i) {
      var a = t.pendingProps, s = a.children, d = e !== null ? e.memoizedState : null;
      if (a.mode === "hidden" || me)
        if ((t.mode & Ct) === Ye) {
          var m = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = m, Gy(t, i);
        } else if (oi(i, ai)) {
          var z = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var U = d !== null ? d.baseLanes : i;
          Gy(t, U);
        } else {
          var S = null, C;
          if (d !== null) {
            var D = d.baseLanes;
            C = ct(D, i);
          } else
            C = i;
          t.lanes = t.childLanes = ai;
          var _ = {
            baseLanes: C,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = _, t.updateQueue = null, Gy(t, C), null;
        }
      else {
        var W;
        d !== null ? (W = ct(d.baseLanes, i), t.memoizedState = null) : W = i, Gy(t, W);
      }
      return Di(e, t, s, i), t.child;
    }
    function JM(e, t, i) {
      var a = t.pendingProps;
      return Di(e, t, a, i), t.child;
    }
    function eO(e, t, i) {
      var a = t.pendingProps.children;
      return Di(e, t, a, i), t.child;
    }
    function tO(e, t, i) {
      {
        t.flags |= Dt;
        {
          var a = t.stateNode;
          a.effectDuration = 0, a.passiveEffectDuration = 0;
        }
      }
      var s = t.pendingProps, d = s.children;
      return Di(e, t, d, i), t.child;
    }
    function nR(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= xn, t.flags |= Pu);
    }
    function $0(e, t, i, a, s) {
      if (t.type !== t.elementType) {
        var d = i.propTypes;
        d && vo(
          d,
          a,
          // Resolved props
          "prop",
          Lt(i)
        );
      }
      var m;
      {
        var S = td(t, i, !0);
        m = nd(t, S);
      }
      var C, D;
      ud(t, s), xi(t);
      {
        if (Sh.current = t, Qn(!0), C = hd(e, t, i, a, m, s), D = vd(), t.mode & en) {
          Cn(!0);
          try {
            C = hd(e, t, i, a, m, s), D = vd();
          } finally {
            Cn(!1);
          }
        }
        Qn(!1);
      }
      return Ri(), e !== null && !Eo ? (hx(e, t, s), lu(e, t, s)) : (Ir() && D && bS(t), t.flags |= fa, Di(e, t, C, s), t.child);
    }
    function rR(e, t, i, a, s) {
      {
        switch (gL(t)) {
          case !1: {
            var d = t.stateNode, m = t.type, S = new m(t.memoizedProps, d.context), C = S.state;
            d.updater.enqueueSetState(d, C, null);
            break;
          }
          case !0: {
            t.flags |= Be, t.flags |= rr;
            var D = new Error("Simulated error coming from DevTools"), _ = Ks(s);
            t.lanes = ct(t.lanes, _);
            var z = j0(t, Rc(D, t), _);
            GS(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var U = i.propTypes;
          U && vo(
            U,
            a,
            // Resolved props
            "prop",
            Lt(i)
          );
        }
      }
      var W;
      al(i) ? (W = !0, $m(t)) : W = !1, ud(t, s);
      var K = t.stateNode, X;
      K === null ? (Uy(e, t), $x(t, i, a), V0(t, i, a, s), X = !0) : e === null ? X = YM(t, i, a, s) : X = WM(e, t, i, a, s);
      var xe = G0(e, t, i, X, W, s);
      {
        var $e = t.stateNode;
        X && $e.props !== a && (wc || v("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", nt(t) || "a component"), wc = !0);
      }
      return xe;
    }
    function G0(e, t, i, a, s, d) {
      nR(e, t);
      var m = (t.flags & Be) !== Ie;
      if (!a && !m)
        return s && zT(t, i, !1), lu(e, t, d);
      var S = t.stateNode;
      Sh.current = t;
      var C;
      if (m && typeof i.getDerivedStateFromError != "function")
        C = null, Bx();
      else {
        xi(t);
        {
          if (Qn(!0), C = S.render(), t.mode & en) {
            Cn(!0);
            try {
              S.render();
            } finally {
              Cn(!1);
            }
          }
          Qn(!1);
        }
        Ri();
      }
      return t.flags |= fa, e !== null && m ? ZM(e, t, C, d) : Di(e, t, C, d), t.memoizedState = S.state, s && zT(t, i, !0), t.child;
    }
    function iR(e) {
      var t = e.stateNode;
      t.pendingContext ? UT(e, t.pendingContext, t.pendingContext !== t.context) : t.context && UT(e, t.context, !1), KS(e, t.containerInfo);
    }
    function nO(e, t, i) {
      if (iR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var a = t.pendingProps, s = t.memoizedState, d = s.element;
      lx(e, t), sy(t, a, null, i);
      var m = t.memoizedState;
      t.stateNode;
      var S = m.element;
      if (s.isDehydrated) {
        var C = {
          element: S,
          isDehydrated: !1,
          cache: m.cache,
          pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
          transitions: m.transitions
        }, D = t.updateQueue;
        if (D.baseState = C, t.memoizedState = C, t.flags & Dr) {
          var _ = Rc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return aR(e, t, S, i, _);
        } else if (S !== d) {
          var z = Rc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return aR(e, t, S, i, z);
        } else {
          aM(t);
          var U = ex(t, null, S, i);
          t.child = U;
          for (var W = U; W; )
            W.flags = W.flags & ~Sn | ti, W = W.sibling;
        }
      } else {
        if (ad(), S === d)
          return lu(e, t, i);
        Di(e, t, S, i);
      }
      return t.child;
    }
    function aR(e, t, i, a, s) {
      return ad(), AS(s), t.flags |= Dr, Di(e, t, i, a), t.child;
    }
    function rO(e, t, i) {
      fx(t), e === null && OS(t);
      var a = t.type, s = t.pendingProps, d = e !== null ? e.memoizedProps : null, m = s.children, S = dS(a, s);
      return S ? m = null : d !== null && dS(a, d) && (t.flags |= Fi), nR(e, t), Di(e, t, m, i), t.child;
    }
    function iO(e, t) {
      return e === null && OS(t), null;
    }
    function aO(e, t, i, a) {
      Uy(e, t);
      var s = t.pendingProps, d = i, m = d._payload, S = d._init, C = S(m);
      t.type = C;
      var D = t.tag = iL(C), _ = Co(C, s), z;
      switch (D) {
        case R:
          return K0(t, C), t.type = C = xd(C), z = $0(null, t, C, _, a), z;
        case b:
          return t.type = C = RC(C), z = rR(null, t, C, _, a), z;
        case pe:
          return t.type = C = wC(C), z = Zx(null, t, C, _, a), z;
        case Ae: {
          if (t.type !== t.elementType) {
            var U = C.propTypes;
            U && vo(
              U,
              _,
              // Resolved for outer only
              "prop",
              Lt(C)
            );
          }
          return z = Jx(
            null,
            t,
            C,
            Co(C.type, _),
            // The inner type can have defaults too
            a
          ), z;
        }
      }
      var W = "";
      throw C !== null && typeof C == "object" && C.$$typeof === rt && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + C + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function oO(e, t, i, a, s) {
      Uy(e, t), t.tag = b;
      var d;
      return al(i) ? (d = !0, $m(t)) : d = !1, ud(t, s), $x(t, i, a), V0(t, i, a, s), G0(null, t, i, !0, d, s);
    }
    function lO(e, t, i, a) {
      Uy(e, t);
      var s = t.pendingProps, d;
      {
        var m = td(t, i, !1);
        d = nd(t, m);
      }
      ud(t, a);
      var S, C;
      xi(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var D = Lt(i) || "Unknown";
          B0[D] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", D, D), B0[D] = !0);
        }
        t.mode & en && yo.recordLegacyContextWarning(t, null), Qn(!0), Sh.current = t, S = hd(null, t, i, s, d, a), C = vd(), Qn(!1);
      }
      if (Ri(), t.flags |= fa, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var _ = Lt(i) || "Unknown";
        Ch[_] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Ch[_] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var z = Lt(i) || "Unknown";
          Ch[z] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Ch[z] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var U = !1;
        return al(i) ? (U = !0, $m(t)) : U = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, $S(t), Wx(t, S), V0(t, i, s, a), G0(null, t, i, !0, U, a);
      } else {
        if (t.tag = R, t.mode & en) {
          Cn(!0);
          try {
            S = hd(null, t, i, s, d, a), C = vd();
          } finally {
            Cn(!1);
          }
        }
        return Ir() && C && bS(t), Di(null, t, S, a), K0(t, i), t.child;
      }
    }
    function K0(e, t) {
      {
        if (t && t.childContextTypes && v("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", a = Ur();
          a && (i += `

Check the render method of \`` + a + "`.");
          var s = a || "", d = e._debugSource;
          d && (s = d.fileName + ":" + d.lineNumber), Y0[s] || (Y0[s] = !0, v("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (t.defaultProps !== void 0) {
          var m = Lt(t) || "Unknown";
          Eh[m] || (v("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", m), Eh[m] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var S = Lt(t) || "Unknown";
          I0[S] || (v("%s: Function components do not support getDerivedStateFromProps.", S), I0[S] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var C = Lt(t) || "Unknown";
          H0[C] || (v("%s: Function components do not support contextType.", C), H0[C] = !0);
        }
      }
    }
    var Q0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ut
    };
    function q0(e) {
      return {
        baseLanes: e,
        cachePool: XM(),
        transitions: null
      };
    }
    function uO(e, t) {
      var i = null;
      return {
        baseLanes: ct(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function sO(e, t, i, a) {
      if (t !== null) {
        var s = t.memoizedState;
        if (s === null)
          return !1;
      }
      return XS(e, ch);
    }
    function cO(e, t) {
      return Qs(e.childLanes, t);
    }
    function oR(e, t, i) {
      var a = t.pendingProps;
      SL(t) && (t.flags |= Be);
      var s = go.current, d = !1, m = (t.flags & Be) !== Ie;
      if (m || sO(s, e) ? (d = !0, t.flags &= ~Be) : (e === null || e.memoizedState !== null) && (s = _M(s, px)), s = cd(s), ns(t, s), e === null) {
        OS(t);
        var S = t.memoizedState;
        if (S !== null) {
          var C = S.dehydrated;
          if (C !== null)
            return vO(t, C);
        }
        var D = a.children, _ = a.fallback;
        if (d) {
          var z = fO(t, D, _, i), U = t.child;
          return U.memoizedState = q0(i), t.memoizedState = Q0, z;
        } else
          return X0(t, D);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var K = W.dehydrated;
          if (K !== null)
            return mO(e, t, m, a, K, W, i);
        }
        if (d) {
          var X = a.fallback, xe = a.children, $e = pO(e, t, xe, X, i), je = t.child, Mt = e.child.memoizedState;
          return je.memoizedState = Mt === null ? q0(i) : uO(Mt, i), je.childLanes = cO(e, i), t.memoizedState = Q0, $e;
        } else {
          var Rt = a.children, H = dO(e, t, Rt, i);
          return t.memoizedState = null, H;
        }
      }
    }
    function X0(e, t, i) {
      var a = e.mode, s = {
        mode: "visible",
        children: t
      }, d = Z0(s, a);
      return d.return = e, e.child = d, d;
    }
    function fO(e, t, i, a) {
      var s = e.mode, d = e.child, m = {
        mode: "hidden",
        children: t
      }, S, C;
      return (s & Ct) === Ye && d !== null ? (S = d, S.childLanes = re, S.pendingProps = m, e.mode & Ft && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), C = cs(i, s, a, null)) : (S = Z0(m, s), C = cs(i, s, a, null)), S.return = e, C.return = e, S.sibling = C, e.child = S, C;
    }
    function Z0(e, t, i) {
      return l1(e, t, re, null);
    }
    function lR(e, t) {
      return Mc(e, t);
    }
    function dO(e, t, i, a) {
      var s = e.child, d = s.sibling, m = lR(s, {
        mode: "visible",
        children: i
      });
      if ((t.mode & Ct) === Ye && (m.lanes = a), m.return = t, m.sibling = null, d !== null) {
        var S = t.deletions;
        S === null ? (t.deletions = [d], t.flags |= zi) : S.push(d);
      }
      return t.child = m, m;
    }
    function pO(e, t, i, a, s) {
      var d = t.mode, m = e.child, S = m.sibling, C = {
        mode: "hidden",
        children: i
      }, D;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & Ct) === Ye && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== m
      ) {
        var _ = t.child;
        D = _, D.childLanes = re, D.pendingProps = C, t.mode & Ft && (D.actualDuration = 0, D.actualStartTime = -1, D.selfBaseDuration = m.selfBaseDuration, D.treeBaseDuration = m.treeBaseDuration), t.deletions = null;
      } else
        D = lR(m, C), D.subtreeFlags = m.subtreeFlags & Fn;
      var z;
      return S !== null ? z = Mc(S, a) : (z = cs(a, d, s, null), z.flags |= Sn), z.return = t, D.return = t, D.sibling = z, t.child = D, z;
    }
    function Py(e, t, i, a) {
      a !== null && AS(a), od(t, e.child, null, i);
      var s = t.pendingProps, d = s.children, m = X0(t, d);
      return m.flags |= Sn, t.memoizedState = null, m;
    }
    function hO(e, t, i, a, s) {
      var d = t.mode, m = {
        mode: "visible",
        children: i
      }, S = Z0(m, d), C = cs(a, d, s, null);
      return C.flags |= Sn, S.return = t, C.return = t, S.sibling = C, t.child = S, (t.mode & Ct) !== Ye && od(t, e.child, null, s), C;
    }
    function vO(e, t, i) {
      return (e.mode & Ct) === Ye ? (v("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Xe) : mS(t) ? e.lanes = _r : e.lanes = ai, null;
    }
    function mO(e, t, i, a, s, d, m) {
      if (i)
        if (t.flags & Dr) {
          t.flags &= ~Dr;
          var H = z0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Py(e, t, m, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Be, null;
          var Z = a.children, I = a.fallback, fe = hO(e, t, Z, I, m), De = t.child;
          return De.memoizedState = q0(m), t.memoizedState = Q0, fe;
        }
      else {
        if (rM(), (t.mode & Ct) === Ye)
          return Py(
            e,
            t,
            m,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (mS(s)) {
          var S, C, D;
          {
            var _ = Ck(s);
            S = _.digest, C = _.message, D = _.stack;
          }
          var z;
          C ? z = new Error(C) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var U = z0(z, S, D);
          return Py(e, t, m, U);
        }
        var W = oi(m, e.childLanes);
        if (Eo || W) {
          var K = $y();
          if (K !== null) {
            var X = Rp(K, m);
            if (X !== Ut && X !== d.retryLane) {
              d.retryLane = X;
              var xe = rn;
              Ki(e, X), xr(K, e, X, xe);
            }
          }
          SC();
          var $e = z0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Py(e, t, m, $e);
        } else if (MT(s)) {
          t.flags |= Be, t.child = e.child;
          var je = BA.bind(null, e);
          return Ek(s, je), null;
        } else {
          oM(t, s, d.treeContext);
          var Mt = a.children, Rt = X0(t, Mt);
          return Rt.flags |= ti, Rt;
        }
      }
    }
    function uR(e, t, i) {
      e.lanes = ct(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ct(a.lanes, t)), HS(e.return, t, i);
    }
    function yO(e, t, i) {
      for (var a = t; a !== null; ) {
        if (a.tag === oe) {
          var s = a.memoizedState;
          s !== null && uR(a, i, e);
        } else if (a.tag === Vt)
          uR(a, i, e);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    function gO(e) {
      for (var t = e, i = null; t !== null; ) {
        var a = t.alternate;
        a !== null && py(a) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function SO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !W0[e])
        if (W0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              v('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          v('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function CO(e, t) {
      e !== void 0 && !Ny[e] && (e !== "collapsed" && e !== "hidden" ? (Ny[e] = !0, v('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ny[e] = !0, v('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function sR(e, t) {
      {
        var i = mt(e), a = !i && typeof ut(e) == "function";
        if (i || a) {
          var s = i ? "array" : "iterable";
          return v("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", s, t, s), !1;
        }
      }
      return !0;
    }
    function EO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (mt(e)) {
          for (var i = 0; i < e.length; i++)
            if (!sR(e[i], i))
              return;
        } else {
          var a = ut(e);
          if (typeof a == "function") {
            var s = a.call(e);
            if (s)
              for (var d = s.next(), m = 0; !d.done; d = s.next()) {
                if (!sR(d.value, m))
                  return;
                m++;
              }
          } else
            v('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function J0(e, t, i, a, s) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: i,
        tailMode: s
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = i, d.tailMode = s);
    }
    function cR(e, t, i) {
      var a = t.pendingProps, s = a.revealOrder, d = a.tail, m = a.children;
      SO(s), CO(d, s), EO(m, s), Di(e, t, m, i);
      var S = go.current, C = XS(S, ch);
      if (C)
        S = ZS(S, ch), t.flags |= Be;
      else {
        var D = e !== null && (e.flags & Be) !== Ie;
        D && yO(t, t.child, i), S = cd(S);
      }
      if (ns(t, S), (t.mode & Ct) === Ye)
        t.memoizedState = null;
      else
        switch (s) {
          case "forwards": {
            var _ = gO(t.child), z;
            _ === null ? (z = t.child, t.child = null) : (z = _.sibling, _.sibling = null), J0(
              t,
              !1,
              // isBackwards
              z,
              _,
              d
            );
            break;
          }
          case "backwards": {
            var U = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var K = W.alternate;
              if (K !== null && py(K) === null) {
                t.child = W;
                break;
              }
              var X = W.sibling;
              W.sibling = U, U = W, W = X;
            }
            J0(
              t,
              !0,
              // isBackwards
              U,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            J0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function TO(e, t, i) {
      KS(t, t.stateNode.containerInfo);
      var a = t.pendingProps;
      return e === null ? t.child = od(t, null, a, i) : Di(e, t, a, i), t.child;
    }
    var fR = !1;
    function xO(e, t, i) {
      var a = t.type, s = a._context, d = t.pendingProps, m = t.memoizedProps, S = d.value;
      {
        "value" in d || fR || (fR = !0, v("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var C = t.type.propTypes;
        C && vo(C, d, "prop", "Context.Provider");
      }
      if (rx(t, s, S), m !== null) {
        var D = m.value;
        if (ue(D, S)) {
          if (m.children === d.children && !Ym())
            return lu(e, t, i);
        } else
          SM(t, s, i);
      }
      var _ = d.children;
      return Di(e, t, _, i), t.child;
    }
    var dR = !1;
    function RO(e, t, i) {
      var a = t.type;
      a._context === void 0 ? a !== a.Consumer && (dR || (dR = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var s = t.pendingProps, d = s.children;
      typeof d != "function" && v("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), ud(t, i);
      var m = lr(a);
      xi(t);
      var S;
      return Sh.current = t, Qn(!0), S = d(m), Qn(!1), Ri(), t.flags |= fa, Di(e, t, S, i), t.child;
    }
    function Th() {
      Eo = !0;
    }
    function Uy(e, t) {
      (t.mode & Ct) === Ye && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Sn);
    }
    function lu(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), Bx(), Nh(t.lanes), oi(i, t.childLanes) ? (yM(e, t), t.child) : null;
    }
    function wO(e, t, i) {
      {
        var a = t.return;
        if (a === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, i.index = t.index, i.sibling = t.sibling, i.return = t.return, i.ref = t.ref, t === a.child)
          a.child = i;
        else {
          var s = a.child;
          if (s === null)
            throw new Error("Expected parent to have a child.");
          for (; s.sibling !== t; )
            if (s = s.sibling, s === null)
              throw new Error("Expected to find the previous sibling.");
          s.sibling = i;
        }
        var d = a.deletions;
        return d === null ? (a.deletions = [e], a.flags |= zi) : d.push(e), i.flags |= Sn, i;
      }
    }
    function eC(e, t) {
      var i = e.lanes;
      return !!oi(i, t);
    }
    function bO(e, t, i) {
      switch (t.tag) {
        case k:
          iR(t), t.stateNode, ad();
          break;
        case F:
          fx(t);
          break;
        case b: {
          var a = t.type;
          al(a) && $m(t);
          break;
        }
        case L:
          KS(t, t.stateNode.containerInfo);
          break;
        case he: {
          var s = t.memoizedProps.value, d = t.type._context;
          rx(t, d, s);
          break;
        }
        case Oe:
          {
            var m = oi(i, t.childLanes);
            m && (t.flags |= Dt);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case oe: {
          var C = t.memoizedState;
          if (C !== null) {
            if (C.dehydrated !== null)
              return ns(t, cd(go.current)), t.flags |= Be, null;
            var D = t.child, _ = D.childLanes;
            if (oi(i, _))
              return oR(e, t, i);
            ns(t, cd(go.current));
            var z = lu(e, t, i);
            return z !== null ? z.sibling : null;
          } else
            ns(t, cd(go.current));
          break;
        }
        case Vt: {
          var U = (e.flags & Be) !== Ie, W = oi(i, t.childLanes);
          if (U) {
            if (W)
              return cR(e, t, i);
            t.flags |= Be;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), ns(t, go.current), W)
            break;
          return null;
        }
        case He:
        case Ot:
          return t.lanes = re, tR(e, t, i);
      }
      return lu(e, t, i);
    }
    function pR(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return wO(e, t, MC(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var a = e.memoizedProps, s = t.pendingProps;
        if (a !== s || Ym() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Eo = !0;
        else {
          var d = eC(e, i);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Be) === Ie)
            return Eo = !1, bO(e, t, i);
          (e.flags & rf) !== Ie ? Eo = !0 : Eo = !1;
        }
      } else if (Eo = !1, Ir() && Xk(t)) {
        var m = t.index, S = Zk();
        BT(t, S, m);
      }
      switch (t.lanes = re, t.tag) {
        case M:
          return lO(e, t, t.type, i);
        case Ue: {
          var C = t.elementType;
          return aO(e, t, C, i);
        }
        case R: {
          var D = t.type, _ = t.pendingProps, z = t.elementType === D ? _ : Co(D, _);
          return $0(e, t, D, z, i);
        }
        case b: {
          var U = t.type, W = t.pendingProps, K = t.elementType === U ? W : Co(U, W);
          return rR(e, t, U, K, i);
        }
        case k:
          return nO(e, t, i);
        case F:
          return rO(e, t, i);
        case q:
          return iO(e, t);
        case oe:
          return oR(e, t, i);
        case L:
          return TO(e, t, i);
        case pe: {
          var X = t.type, xe = t.pendingProps, $e = t.elementType === X ? xe : Co(X, xe);
          return Zx(e, t, X, $e, i);
        }
        case te:
          return JM(e, t, i);
        case ae:
          return eO(e, t, i);
        case Oe:
          return tO(e, t, i);
        case he:
          return xO(e, t, i);
        case de:
          return RO(e, t, i);
        case Ae: {
          var je = t.type, Mt = t.pendingProps, Rt = Co(je, Mt);
          if (t.type !== t.elementType) {
            var H = je.propTypes;
            H && vo(
              H,
              Rt,
              // Resolved for outer only
              "prop",
              Lt(je)
            );
          }
          return Rt = Co(je.type, Rt), Jx(e, t, je, Rt, i);
        }
        case ke:
          return eR(e, t, t.type, t.pendingProps, i);
        case at: {
          var Z = t.type, I = t.pendingProps, fe = t.elementType === Z ? I : Co(Z, I);
          return oO(e, t, Z, fe, i);
        }
        case Vt:
          return cR(e, t, i);
        case wt:
          break;
        case He:
          return tR(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function md(e) {
      e.flags |= Dt;
    }
    function hR(e) {
      e.flags |= xn, e.flags |= Pu;
    }
    var vR, tC, mR, yR;
    vR = function(e, t, i, a) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === F || s.tag === q)
          K_(e, s.stateNode);
        else if (s.tag !== L) {
          if (s.child !== null) {
            s.child.return = s, s = s.child;
            continue;
          }
        }
        if (s === t)
          return;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === t)
            return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, tC = function(e, t) {
    }, mR = function(e, t, i, a, s) {
      var d = e.memoizedProps;
      if (d !== a) {
        var m = t.stateNode, S = QS(), C = q_(m, i, d, a, s, S);
        t.updateQueue = C, C && md(t);
      }
    }, yR = function(e, t, i, a) {
      i !== a && md(t);
    };
    function xh(e, t) {
      if (!Ir())
        switch (e.tailMode) {
          case "hidden": {
            for (var i = e.tail, a = null; i !== null; )
              i.alternate !== null && (a = i), i = i.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          }
          case "collapsed": {
            for (var s = e.tail, d = null; s !== null; )
              s.alternate !== null && (d = s), s = s.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Wr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, i = re, a = Ie;
      if (t) {
        if ((e.mode & Ft) !== Ye) {
          for (var C = e.selfBaseDuration, D = e.child; D !== null; )
            i = ct(i, ct(D.lanes, D.childLanes)), a |= D.subtreeFlags & Fn, a |= D.flags & Fn, C += D.treeBaseDuration, D = D.sibling;
          e.treeBaseDuration = C;
        } else
          for (var _ = e.child; _ !== null; )
            i = ct(i, ct(_.lanes, _.childLanes)), a |= _.subtreeFlags & Fn, a |= _.flags & Fn, _.return = e, _ = _.sibling;
        e.subtreeFlags |= a;
      } else {
        if ((e.mode & Ft) !== Ye) {
          for (var s = e.actualDuration, d = e.selfBaseDuration, m = e.child; m !== null; )
            i = ct(i, ct(m.lanes, m.childLanes)), a |= m.subtreeFlags, a |= m.flags, s += m.actualDuration, d += m.treeBaseDuration, m = m.sibling;
          e.actualDuration = s, e.treeBaseDuration = d;
        } else
          for (var S = e.child; S !== null; )
            i = ct(i, ct(S.lanes, S.childLanes)), a |= S.subtreeFlags, a |= S.flags, S.return = e, S = S.sibling;
        e.subtreeFlags |= a;
      }
      return e.childLanes = i, t;
    }
    function DO(e, t, i) {
      if (fM() && (t.mode & Ct) !== Ye && (t.flags & Be) === Ie)
        return KT(t), ad(), t.flags |= Dr | Ls | rr, !1;
      var a = Xm(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!a)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (sM(t), Wr(t), (t.mode & Ft) !== Ye) {
            var s = i !== null;
            if (s) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (ad(), (t.flags & Be) === Ie && (t.memoizedState = null), t.flags |= Dt, Wr(t), (t.mode & Ft) !== Ye) {
            var m = i !== null;
            if (m) {
              var S = t.child;
              S !== null && (t.treeBaseDuration -= S.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return QT(), !0;
    }
    function gR(e, t, i) {
      var a = t.pendingProps;
      switch (DS(t), t.tag) {
        case M:
        case Ue:
        case ke:
        case R:
        case pe:
        case te:
        case ae:
        case Oe:
        case de:
        case Ae:
          return Wr(t), null;
        case b: {
          var s = t.type;
          return al(s) && Wm(t), Wr(t), null;
        }
        case k: {
          var d = t.stateNode;
          if (sd(t), xS(t), e0(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var m = Xm(t);
            if (m)
              md(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Dr) !== Ie) && (t.flags |= qn, QT());
            }
          }
          return tC(e, t), Wr(t), null;
        }
        case F: {
          qS(t);
          var C = cx(), D = t.type;
          if (e !== null && t.stateNode != null)
            mR(e, t, D, a, C), e.ref !== t.ref && hR(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Wr(t), null;
            }
            var _ = QS(), z = Xm(t);
            if (z)
              lM(t, C, _) && md(t);
            else {
              var U = G_(D, a, C, _, t);
              vR(U, t, !1, !1), t.stateNode = U, Q_(U, D, a, C) && md(t);
            }
            t.ref !== null && hR(t);
          }
          return Wr(t), null;
        }
        case q: {
          var W = a;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            yR(e, t, K, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = cx(), xe = QS(), $e = Xm(t);
            $e ? uM(t) && md(t) : t.stateNode = X_(W, X, xe, t);
          }
          return Wr(t), null;
        }
        case oe: {
          fd(t);
          var je = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Mt = DO(e, t, je);
            if (!Mt)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & Be) !== Ie)
            return t.lanes = i, (t.mode & Ft) !== Ye && w0(t), t;
          var Rt = je !== null, H = e !== null && e.memoizedState !== null;
          if (Rt !== H && Rt) {
            var Z = t.child;
            if (Z.flags |= zn, (t.mode & Ct) !== Ye) {
              var I = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              I || XS(go.current, px) ? _A() : SC();
            }
          }
          var fe = t.updateQueue;
          if (fe !== null && (t.flags |= Dt), Wr(t), (t.mode & Ft) !== Ye && Rt) {
            var De = t.child;
            De !== null && (t.treeBaseDuration -= De.treeBaseDuration);
          }
          return null;
        }
        case L:
          return sd(t), tC(e, t), e === null && Yk(t.stateNode.containerInfo), Wr(t), null;
        case he:
          var Re = t.type._context;
          return BS(Re, t), Wr(t), null;
        case at: {
          var Je = t.type;
          return al(Je) && Wm(t), Wr(t), null;
        }
        case Vt: {
          fd(t);
          var ot = t.memoizedState;
          if (ot === null)
            return Wr(t), null;
          var nn = (t.flags & Be) !== Ie, Ht = ot.rendering;
          if (Ht === null)
            if (nn)
              xh(ot, !1);
            else {
              var Jn = MA() && (e === null || (e.flags & Be) === Ie);
              if (!Jn)
                for (var It = t.child; It !== null; ) {
                  var Wn = py(It);
                  if (Wn !== null) {
                    nn = !0, t.flags |= Be, xh(ot, !1);
                    var pi = Wn.updateQueue;
                    return pi !== null && (t.updateQueue = pi, t.flags |= Dt), t.subtreeFlags = Ie, gM(t, i), ns(t, ZS(go.current, ch)), t.child;
                  }
                  It = It.sibling;
                }
              ot.tail !== null && Xn() > FR() && (t.flags |= Be, nn = !0, xh(ot, !1), t.lanes = vp);
            }
          else {
            if (!nn) {
              var qr = py(Ht);
              if (qr !== null) {
                t.flags |= Be, nn = !0;
                var ga = qr.updateQueue;
                if (ga !== null && (t.updateQueue = ga, t.flags |= Dt), xh(ot, !0), ot.tail === null && ot.tailMode === "hidden" && !Ht.alternate && !Ir())
                  return Wr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Xn() * 2 - ot.renderingStartTime > FR() && i !== ai && (t.flags |= Be, nn = !0, xh(ot, !1), t.lanes = vp);
            }
            if (ot.isBackwards)
              Ht.sibling = t.child, t.child = Ht;
            else {
              var Mi = ot.last;
              Mi !== null ? Mi.sibling = Ht : t.child = Ht, ot.last = Ht;
            }
          }
          if (ot.tail !== null) {
            var Oi = ot.tail;
            ot.rendering = Oi, ot.tail = Oi.sibling, ot.renderingStartTime = Xn(), Oi.sibling = null;
            var hi = go.current;
            return nn ? hi = ZS(hi, ch) : hi = cd(hi), ns(t, hi), Oi;
          }
          return Wr(t), null;
        }
        case wt:
          break;
        case He:
        case Ot: {
          gC(t);
          var du = t.memoizedState, Rd = du !== null;
          if (e !== null) {
            var Fh = e.memoizedState, pl = Fh !== null;
            pl !== Rd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !me && (t.flags |= zn);
          }
          return !Rd || (t.mode & Ct) === Ye ? Wr(t) : oi(dl, ai) && (Wr(t), t.subtreeFlags & (Sn | Dt) && (t.flags |= zn)), null;
        }
        case At:
          return null;
        case Pt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function _O(e, t, i) {
      switch (DS(t), t.tag) {
        case b: {
          var a = t.type;
          al(a) && Wm(t);
          var s = t.flags;
          return s & rr ? (t.flags = s & ~rr | Be, (t.mode & Ft) !== Ye && w0(t), t) : null;
        }
        case k: {
          t.stateNode, sd(t), xS(t), e0();
          var d = t.flags;
          return (d & rr) !== Ie && (d & Be) === Ie ? (t.flags = d & ~rr | Be, t) : null;
        }
        case F:
          return qS(t), null;
        case oe: {
          fd(t);
          var m = t.memoizedState;
          if (m !== null && m.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            ad();
          }
          var S = t.flags;
          return S & rr ? (t.flags = S & ~rr | Be, (t.mode & Ft) !== Ye && w0(t), t) : null;
        }
        case Vt:
          return fd(t), null;
        case L:
          return sd(t), null;
        case he:
          var C = t.type._context;
          return BS(C, t), null;
        case He:
        case Ot:
          return gC(t), null;
        case At:
          return null;
        default:
          return null;
      }
    }
    function SR(e, t, i) {
      switch (DS(t), t.tag) {
        case b: {
          var a = t.type.childContextTypes;
          a != null && Wm(t);
          break;
        }
        case k: {
          t.stateNode, sd(t), xS(t), e0();
          break;
        }
        case F: {
          qS(t);
          break;
        }
        case L:
          sd(t);
          break;
        case oe:
          fd(t);
          break;
        case Vt:
          fd(t);
          break;
        case he:
          var s = t.type._context;
          BS(s, t);
          break;
        case He:
        case Ot:
          gC(t);
          break;
      }
    }
    var CR = null;
    CR = /* @__PURE__ */ new Set();
    var Vy = !1, $r = !1, kO = typeof WeakSet == "function" ? WeakSet : Set, Pe = null, yd = null, gd = null;
    function MO(e) {
      Bo(null, function() {
        throw e;
      }), As();
    }
    var OO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ft)
        try {
          cl(), t.componentWillUnmount();
        } finally {
          sl(e);
        }
      else
        t.componentWillUnmount();
    };
    function ER(e, t) {
      try {
        as(yr, e);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function nC(e, t, i) {
      try {
        OO(e, i);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function AO(e, t, i) {
      try {
        i.componentDidMount();
      } catch (a) {
        pn(e, t, a);
      }
    }
    function TR(e, t) {
      try {
        RR(e);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function Sd(e, t) {
      var i = e.ref;
      if (i !== null)
        if (typeof i == "function") {
          var a;
          try {
            if (qe && yt && e.mode & Ft)
              try {
                cl(), a = i(null);
              } finally {
                sl(e);
              }
            else
              a = i(null);
          } catch (s) {
            pn(e, t, s);
          }
          typeof a == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          i.current = null;
    }
    function zy(e, t, i) {
      try {
        i();
      } catch (a) {
        pn(e, t, a);
      }
    }
    var xR = !1;
    function LO(e, t) {
      W_(e.containerInfo), Pe = t, NO();
      var i = xR;
      return xR = !1, i;
    }
    function NO() {
      for (; Pe !== null; ) {
        var e = Pe, t = e.child;
        (e.subtreeFlags & Io) !== Ie && t !== null ? (t.return = e, Pe = t) : PO();
      }
    }
    function PO() {
      for (; Pe !== null; ) {
        var e = Pe;
        Xt(e);
        try {
          UO(e);
        } catch (i) {
          pn(e, e.return, i);
        }
        dn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Pe = t;
          return;
        }
        Pe = e.return;
      }
    }
    function UO(e) {
      var t = e.alternate, i = e.flags;
      if ((i & qn) !== Ie) {
        switch (Xt(e), e.tag) {
          case R:
          case pe:
          case ke:
            break;
          case b: {
            if (t !== null) {
              var a = t.memoizedProps, s = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !wc && (d.props !== e.memoizedProps && v("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(e) || "instance"), d.state !== e.memoizedState && v("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(e) || "instance"));
              var m = d.getSnapshotBeforeUpdate(e.elementType === e.type ? a : Co(e.type, a), s);
              {
                var S = CR;
                m === void 0 && !S.has(e.type) && (S.add(e.type), v("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", nt(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = m;
            }
            break;
          }
          case k: {
            {
              var C = e.stateNode;
              mk(C.containerInfo);
            }
            break;
          }
          case F:
          case q:
          case L:
          case at:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        dn();
      }
    }
    function To(e, t, i) {
      var a = t.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var d = s.next, m = d;
        do {
          if ((m.tag & e) === e) {
            var S = m.destroy;
            m.destroy = void 0, S !== void 0 && ((e & Yr) !== Qi ? uo(t) : (e & yr) !== Qi && Ps(t), (e & ol) !== Qi && Uh(!0), zy(t, i, S), (e & ol) !== Qi && Uh(!1), (e & Yr) !== Qi ? Go() : (e & yr) !== Qi && pp());
          }
          m = m.next;
        } while (m !== d);
      }
    }
    function as(e, t) {
      var i = t.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var s = a.next, d = s;
        do {
          if ((d.tag & e) === e) {
            (e & Yr) !== Qi ? dp(t) : (e & yr) !== Qi && cf(t);
            var m = d.create;
            (e & ol) !== Qi && Uh(!0), d.destroy = m(), (e & ol) !== Qi && Uh(!1), (e & Yr) !== Qi ? Iv() : (e & yr) !== Qi && Yv();
            {
              var S = d.destroy;
              if (S !== void 0 && typeof S != "function") {
                var C = void 0;
                (d.tag & yr) !== Ie ? C = "useLayoutEffect" : (d.tag & ol) !== Ie ? C = "useInsertionEffect" : C = "useEffect";
                var D = void 0;
                S === null ? D = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof S.then == "function" ? D = `

It looks like you wrote ` + C + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + C + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : D = " You returned: " + S, v("%s must not return anything besides a function, which is used for clean-up.%s", C, D);
              }
            }
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function VO(e, t) {
      if ((t.flags & Dt) !== Ie)
        switch (t.tag) {
          case Oe: {
            var i = t.stateNode.passiveEffectDuration, a = t.memoizedProps, s = a.id, d = a.onPostCommit, m = Fx(), S = t.alternate === null ? "mount" : "update";
            zx() && (S = "nested-update"), typeof d == "function" && d(s, S, i, m);
            var C = t.return;
            e: for (; C !== null; ) {
              switch (C.tag) {
                case k:
                  var D = C.stateNode;
                  D.passiveEffectDuration += i;
                  break e;
                case Oe:
                  var _ = C.stateNode;
                  _.passiveEffectDuration += i;
                  break e;
              }
              C = C.return;
            }
            break;
          }
        }
    }
    function zO(e, t, i, a) {
      if ((i.flags & Wo) !== Ie)
        switch (i.tag) {
          case R:
          case pe:
          case ke: {
            if (!$r)
              if (i.mode & Ft)
                try {
                  cl(), as(yr | mr, i);
                } finally {
                  sl(i);
                }
              else
                as(yr | mr, i);
            break;
          }
          case b: {
            var s = i.stateNode;
            if (i.flags & Dt && !$r)
              if (t === null)
                if (i.type === i.elementType && !wc && (s.props !== i.memoizedProps && v("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), s.state !== i.memoizedState && v("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), i.mode & Ft)
                  try {
                    cl(), s.componentDidMount();
                  } finally {
                    sl(i);
                  }
                else
                  s.componentDidMount();
              else {
                var d = i.elementType === i.type ? t.memoizedProps : Co(i.type, t.memoizedProps), m = t.memoizedState;
                if (i.type === i.elementType && !wc && (s.props !== i.memoizedProps && v("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), s.state !== i.memoizedState && v("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), i.mode & Ft)
                  try {
                    cl(), s.componentDidUpdate(d, m, s.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    sl(i);
                  }
                else
                  s.componentDidUpdate(d, m, s.__reactInternalSnapshotBeforeUpdate);
              }
            var S = i.updateQueue;
            S !== null && (i.type === i.elementType && !wc && (s.props !== i.memoizedProps && v("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), s.state !== i.memoizedState && v("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), sx(i, S, s));
            break;
          }
          case k: {
            var C = i.updateQueue;
            if (C !== null) {
              var D = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case F:
                    D = i.child.stateNode;
                    break;
                  case b:
                    D = i.child.stateNode;
                    break;
                }
              sx(i, C, D);
            }
            break;
          }
          case F: {
            var _ = i.stateNode;
            if (t === null && i.flags & Dt) {
              var z = i.type, U = i.memoizedProps;
              nk(_, z, U);
            }
            break;
          }
          case q:
            break;
          case L:
            break;
          case Oe: {
            {
              var W = i.memoizedProps, K = W.onCommit, X = W.onRender, xe = i.stateNode.effectDuration, $e = Fx(), je = t === null ? "mount" : "update";
              zx() && (je = "nested-update"), typeof X == "function" && X(i.memoizedProps.id, je, i.actualDuration, i.treeBaseDuration, i.actualStartTime, $e);
              {
                typeof K == "function" && K(i.memoizedProps.id, je, xe, $e), PA(i);
                var Mt = i.return;
                e: for (; Mt !== null; ) {
                  switch (Mt.tag) {
                    case k:
                      var Rt = Mt.stateNode;
                      Rt.effectDuration += xe;
                      break e;
                    case Oe:
                      var H = Mt.stateNode;
                      H.effectDuration += xe;
                      break e;
                  }
                  Mt = Mt.return;
                }
              }
            }
            break;
          }
          case oe: {
            $O(e, i);
            break;
          }
          case Vt:
          case at:
          case wt:
          case He:
          case Ot:
          case Pt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      $r || i.flags & xn && RR(i);
    }
    function FO(e) {
      switch (e.tag) {
        case R:
        case pe:
        case ke: {
          if (e.mode & Ft)
            try {
              cl(), ER(e, e.return);
            } finally {
              sl(e);
            }
          else
            ER(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && AO(e, e.return, t), TR(e, e.return);
          break;
        }
        case F: {
          TR(e, e.return);
          break;
        }
      }
    }
    function jO(e, t) {
      for (var i = null, a = e; ; ) {
        if (a.tag === F) {
          if (i === null) {
            i = a;
            try {
              var s = a.stateNode;
              t ? dk(s) : hk(a.stateNode, a.memoizedProps);
            } catch (m) {
              pn(e, e.return, m);
            }
          }
        } else if (a.tag === q) {
          if (i === null)
            try {
              var d = a.stateNode;
              t ? pk(d) : vk(d, a.memoizedProps);
            } catch (m) {
              pn(e, e.return, m);
            }
        } else if (!((a.tag === He || a.tag === Ot) && a.memoizedState !== null && a !== e)) {
          if (a.child !== null) {
            a.child.return = a, a = a.child;
            continue;
          }
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          i === a && (i = null), a = a.return;
        }
        i === a && (i = null), a.sibling.return = a.return, a = a.sibling;
      }
    }
    function RR(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, a;
        switch (e.tag) {
          case F:
            a = i;
            break;
          default:
            a = i;
        }
        if (typeof t == "function") {
          var s;
          if (e.mode & Ft)
            try {
              cl(), s = t(a);
            } finally {
              sl(e);
            }
          else
            s = t(a);
          typeof s == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          t.hasOwnProperty("current") || v("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", nt(e)), t.current = a;
      }
    }
    function BO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function wR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, wR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === F) {
          var i = e.stateNode;
          i !== null && Gk(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function HO(e) {
      for (var t = e.return; t !== null; ) {
        if (bR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function bR(e) {
      return e.tag === F || e.tag === k || e.tag === L;
    }
    function DR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || bR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== F && t.tag !== q && t.tag !== Et; ) {
          if (t.flags & Sn || t.child === null || t.tag === L)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Sn))
          return t.stateNode;
      }
    }
    function IO(e) {
      var t = HO(e);
      switch (t.tag) {
        case F: {
          var i = t.stateNode;
          t.flags & Fi && (kT(i), t.flags &= ~Fi);
          var a = DR(e);
          iC(e, a, i);
          break;
        }
        case k:
        case L: {
          var s = t.stateNode.containerInfo, d = DR(e);
          rC(e, d, s);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function rC(e, t, i) {
      var a = e.tag, s = a === F || a === q;
      if (s) {
        var d = e.stateNode;
        t ? uk(i, d, t) : ok(i, d);
      } else if (a !== L) {
        var m = e.child;
        if (m !== null) {
          rC(m, t, i);
          for (var S = m.sibling; S !== null; )
            rC(S, t, i), S = S.sibling;
        }
      }
    }
    function iC(e, t, i) {
      var a = e.tag, s = a === F || a === q;
      if (s) {
        var d = e.stateNode;
        t ? lk(i, d, t) : ak(i, d);
      } else if (a !== L) {
        var m = e.child;
        if (m !== null) {
          iC(m, t, i);
          for (var S = m.sibling; S !== null; )
            iC(S, t, i), S = S.sibling;
        }
      }
    }
    var Gr = null, xo = !1;
    function YO(e, t, i) {
      {
        var a = t;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case F: {
              Gr = a.stateNode, xo = !1;
              break e;
            }
            case k: {
              Gr = a.stateNode.containerInfo, xo = !0;
              break e;
            }
            case L: {
              Gr = a.stateNode.containerInfo, xo = !0;
              break e;
            }
          }
          a = a.return;
        }
        if (Gr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        _R(e, t, i), Gr = null, xo = !1;
      }
      BO(i);
    }
    function os(e, t, i) {
      for (var a = i.child; a !== null; )
        _R(e, t, a), a = a.sibling;
    }
    function _R(e, t, i) {
      switch (sp(i), i.tag) {
        case F:
          $r || Sd(i, t);
        // eslint-disable-next-line-no-fallthrough
        case q: {
          {
            var a = Gr, s = xo;
            Gr = null, os(e, t, i), Gr = a, xo = s, Gr !== null && (xo ? ck(Gr, i.stateNode) : sk(Gr, i.stateNode));
          }
          return;
        }
        case Et: {
          Gr !== null && (xo ? fk(Gr, i.stateNode) : vS(Gr, i.stateNode));
          return;
        }
        case L: {
          {
            var d = Gr, m = xo;
            Gr = i.stateNode.containerInfo, xo = !0, os(e, t, i), Gr = d, xo = m;
          }
          return;
        }
        case R:
        case pe:
        case Ae:
        case ke: {
          if (!$r) {
            var S = i.updateQueue;
            if (S !== null) {
              var C = S.lastEffect;
              if (C !== null) {
                var D = C.next, _ = D;
                do {
                  var z = _, U = z.destroy, W = z.tag;
                  U !== void 0 && ((W & ol) !== Qi ? zy(i, t, U) : (W & yr) !== Qi && (Ps(i), i.mode & Ft ? (cl(), zy(i, t, U), sl(i)) : zy(i, t, U), pp())), _ = _.next;
                } while (_ !== D);
              }
            }
          }
          os(e, t, i);
          return;
        }
        case b: {
          if (!$r) {
            Sd(i, t);
            var K = i.stateNode;
            typeof K.componentWillUnmount == "function" && nC(i, t, K);
          }
          os(e, t, i);
          return;
        }
        case wt: {
          os(e, t, i);
          return;
        }
        case He: {
          if (
            // TODO: Remove this dead flag
            i.mode & Ct
          ) {
            var X = $r;
            $r = X || i.memoizedState !== null, os(e, t, i), $r = X;
          } else
            os(e, t, i);
          break;
        }
        default: {
          os(e, t, i);
          return;
        }
      }
    }
    function WO(e) {
      e.memoizedState;
    }
    function $O(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var a = t.alternate;
        if (a !== null) {
          var s = a.memoizedState;
          if (s !== null) {
            var d = s.dehydrated;
            d !== null && Mk(d);
          }
        }
      }
    }
    function kR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new kO()), t.forEach(function(a) {
          var s = HA.bind(null, e, a);
          if (!i.has(a)) {
            if (i.add(a), ii)
              if (yd !== null && gd !== null)
                Ph(gd, yd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            a.then(s, s);
          }
        });
      }
    }
    function GO(e, t, i) {
      yd = i, gd = e, Xt(t), MR(t, e), Xt(t), yd = null, gd = null;
    }
    function Ro(e, t, i) {
      var a = t.deletions;
      if (a !== null)
        for (var s = 0; s < a.length; s++) {
          var d = a[s];
          try {
            YO(e, t, d);
          } catch (C) {
            pn(d, t, C);
          }
        }
      var m = No();
      if (t.subtreeFlags & Yo)
        for (var S = t.child; S !== null; )
          Xt(S), MR(S, e), S = S.sibling;
      Xt(m);
    }
    function MR(e, t, i) {
      var a = e.alternate, s = e.flags;
      switch (e.tag) {
        case R:
        case pe:
        case Ae:
        case ke: {
          if (Ro(t, e), fl(e), s & Dt) {
            try {
              To(ol | mr, e, e.return), as(ol | mr, e);
            } catch (Je) {
              pn(e, e.return, Je);
            }
            if (e.mode & Ft) {
              try {
                cl(), To(yr | mr, e, e.return);
              } catch (Je) {
                pn(e, e.return, Je);
              }
              sl(e);
            } else
              try {
                To(yr | mr, e, e.return);
              } catch (Je) {
                pn(e, e.return, Je);
              }
          }
          return;
        }
        case b: {
          Ro(t, e), fl(e), s & xn && a !== null && Sd(a, a.return);
          return;
        }
        case F: {
          Ro(t, e), fl(e), s & xn && a !== null && Sd(a, a.return);
          {
            if (e.flags & Fi) {
              var d = e.stateNode;
              try {
                kT(d);
              } catch (Je) {
                pn(e, e.return, Je);
              }
            }
            if (s & Dt) {
              var m = e.stateNode;
              if (m != null) {
                var S = e.memoizedProps, C = a !== null ? a.memoizedProps : S, D = e.type, _ = e.updateQueue;
                if (e.updateQueue = null, _ !== null)
                  try {
                    rk(m, _, D, C, S, e);
                  } catch (Je) {
                    pn(e, e.return, Je);
                  }
              }
            }
          }
          return;
        }
        case q: {
          if (Ro(t, e), fl(e), s & Dt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, U = e.memoizedProps, W = a !== null ? a.memoizedProps : U;
            try {
              ik(z, W, U);
            } catch (Je) {
              pn(e, e.return, Je);
            }
          }
          return;
        }
        case k: {
          if (Ro(t, e), fl(e), s & Dt && a !== null) {
            var K = a.memoizedState;
            if (K.isDehydrated)
              try {
                kk(t.containerInfo);
              } catch (Je) {
                pn(e, e.return, Je);
              }
          }
          return;
        }
        case L: {
          Ro(t, e), fl(e);
          return;
        }
        case oe: {
          Ro(t, e), fl(e);
          var X = e.child;
          if (X.flags & zn) {
            var xe = X.stateNode, $e = X.memoizedState, je = $e !== null;
            if (xe.isHidden = je, je) {
              var Mt = X.alternate !== null && X.alternate.memoizedState !== null;
              Mt || DA();
            }
          }
          if (s & Dt) {
            try {
              WO(e);
            } catch (Je) {
              pn(e, e.return, Je);
            }
            kR(e);
          }
          return;
        }
        case He: {
          var Rt = a !== null && a.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ct
          ) {
            var H = $r;
            $r = H || Rt, Ro(t, e), $r = H;
          } else
            Ro(t, e);
          if (fl(e), s & zn) {
            var Z = e.stateNode, I = e.memoizedState, fe = I !== null, De = e;
            if (Z.isHidden = fe, fe && !Rt && (De.mode & Ct) !== Ye) {
              Pe = De;
              for (var Re = De.child; Re !== null; )
                Pe = Re, QO(Re), Re = Re.sibling;
            }
            jO(De, fe);
          }
          return;
        }
        case Vt: {
          Ro(t, e), fl(e), s & Dt && kR(e);
          return;
        }
        case wt:
          return;
        default: {
          Ro(t, e), fl(e);
          return;
        }
      }
    }
    function fl(e) {
      var t = e.flags;
      if (t & Sn) {
        try {
          IO(e);
        } catch (i) {
          pn(e, e.return, i);
        }
        e.flags &= ~Sn;
      }
      t & ti && (e.flags &= ~ti);
    }
    function KO(e, t, i) {
      yd = i, gd = t, Pe = e, OR(e, t, i), yd = null, gd = null;
    }
    function OR(e, t, i) {
      for (var a = (e.mode & Ct) !== Ye; Pe !== null; ) {
        var s = Pe, d = s.child;
        if (s.tag === He && a) {
          var m = s.memoizedState !== null, S = m || Vy;
          if (S) {
            aC(e, t, i);
            continue;
          } else {
            var C = s.alternate, D = C !== null && C.memoizedState !== null, _ = D || $r, z = Vy, U = $r;
            Vy = S, $r = _, $r && !U && (Pe = s, qO(s));
            for (var W = d; W !== null; )
              Pe = W, OR(
                W,
                // New root; bubble back up to here and stop.
                t,
                i
              ), W = W.sibling;
            Pe = s, Vy = z, $r = U, aC(e, t, i);
            continue;
          }
        }
        (s.subtreeFlags & Wo) !== Ie && d !== null ? (d.return = s, Pe = d) : aC(e, t, i);
      }
    }
    function aC(e, t, i) {
      for (; Pe !== null; ) {
        var a = Pe;
        if ((a.flags & Wo) !== Ie) {
          var s = a.alternate;
          Xt(a);
          try {
            zO(t, s, a, i);
          } catch (m) {
            pn(a, a.return, m);
          }
          dn();
        }
        if (a === e) {
          Pe = null;
          return;
        }
        var d = a.sibling;
        if (d !== null) {
          d.return = a.return, Pe = d;
          return;
        }
        Pe = a.return;
      }
    }
    function QO(e) {
      for (; Pe !== null; ) {
        var t = Pe, i = t.child;
        switch (t.tag) {
          case R:
          case pe:
          case Ae:
          case ke: {
            if (t.mode & Ft)
              try {
                cl(), To(yr, t, t.return);
              } finally {
                sl(t);
              }
            else
              To(yr, t, t.return);
            break;
          }
          case b: {
            Sd(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && nC(t, t.return, a);
            break;
          }
          case F: {
            Sd(t, t.return);
            break;
          }
          case He: {
            var s = t.memoizedState !== null;
            if (s) {
              AR(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, Pe = i) : AR(e);
      }
    }
    function AR(e) {
      for (; Pe !== null; ) {
        var t = Pe;
        if (t === e) {
          Pe = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Pe = i;
          return;
        }
        Pe = t.return;
      }
    }
    function qO(e) {
      for (; Pe !== null; ) {
        var t = Pe, i = t.child;
        if (t.tag === He) {
          var a = t.memoizedState !== null;
          if (a) {
            LR(e);
            continue;
          }
        }
        i !== null ? (i.return = t, Pe = i) : LR(e);
      }
    }
    function LR(e) {
      for (; Pe !== null; ) {
        var t = Pe;
        Xt(t);
        try {
          FO(t);
        } catch (a) {
          pn(t, t.return, a);
        }
        if (dn(), t === e) {
          Pe = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Pe = i;
          return;
        }
        Pe = t.return;
      }
    }
    function XO(e, t, i, a) {
      Pe = t, ZO(t, e, i, a);
    }
    function ZO(e, t, i, a) {
      for (; Pe !== null; ) {
        var s = Pe, d = s.child;
        (s.subtreeFlags & oo) !== Ie && d !== null ? (d.return = s, Pe = d) : JO(e, t, i, a);
      }
    }
    function JO(e, t, i, a) {
      for (; Pe !== null; ) {
        var s = Pe;
        if ((s.flags & ei) !== Ie) {
          Xt(s);
          try {
            eA(t, s, i, a);
          } catch (m) {
            pn(s, s.return, m);
          }
          dn();
        }
        if (s === e) {
          Pe = null;
          return;
        }
        var d = s.sibling;
        if (d !== null) {
          d.return = s.return, Pe = d;
          return;
        }
        Pe = s.return;
      }
    }
    function eA(e, t, i, a) {
      switch (t.tag) {
        case R:
        case pe:
        case ke: {
          if (t.mode & Ft) {
            R0();
            try {
              as(Yr | mr, t);
            } finally {
              x0(t);
            }
          } else
            as(Yr | mr, t);
          break;
        }
      }
    }
    function tA(e) {
      Pe = e, nA();
    }
    function nA() {
      for (; Pe !== null; ) {
        var e = Pe, t = e.child;
        if ((Pe.flags & zi) !== Ie) {
          var i = e.deletions;
          if (i !== null) {
            for (var a = 0; a < i.length; a++) {
              var s = i[a];
              Pe = s, aA(s, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var m = d.child;
                if (m !== null) {
                  d.child = null;
                  do {
                    var S = m.sibling;
                    m.sibling = null, m = S;
                  } while (m !== null);
                }
              }
            }
            Pe = e;
          }
        }
        (e.subtreeFlags & oo) !== Ie && t !== null ? (t.return = e, Pe = t) : rA();
      }
    }
    function rA() {
      for (; Pe !== null; ) {
        var e = Pe;
        (e.flags & ei) !== Ie && (Xt(e), iA(e), dn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Pe = t;
          return;
        }
        Pe = e.return;
      }
    }
    function iA(e) {
      switch (e.tag) {
        case R:
        case pe:
        case ke: {
          e.mode & Ft ? (R0(), To(Yr | mr, e, e.return), x0(e)) : To(Yr | mr, e, e.return);
          break;
        }
      }
    }
    function aA(e, t) {
      for (; Pe !== null; ) {
        var i = Pe;
        Xt(i), lA(i, t), dn();
        var a = i.child;
        a !== null ? (a.return = i, Pe = a) : oA(e);
      }
    }
    function oA(e) {
      for (; Pe !== null; ) {
        var t = Pe, i = t.sibling, a = t.return;
        if (wR(t), t === e) {
          Pe = null;
          return;
        }
        if (i !== null) {
          i.return = a, Pe = i;
          return;
        }
        Pe = a;
      }
    }
    function lA(e, t) {
      switch (e.tag) {
        case R:
        case pe:
        case ke: {
          e.mode & Ft ? (R0(), To(Yr, e, t), x0(e)) : To(Yr, e, t);
          break;
        }
      }
    }
    function uA(e) {
      switch (e.tag) {
        case R:
        case pe:
        case ke: {
          try {
            as(yr | mr, e);
          } catch (i) {
            pn(e, e.return, i);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (i) {
            pn(e, e.return, i);
          }
          break;
        }
      }
    }
    function sA(e) {
      switch (e.tag) {
        case R:
        case pe:
        case ke: {
          try {
            as(Yr | mr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function cA(e) {
      switch (e.tag) {
        case R:
        case pe:
        case ke: {
          try {
            To(yr | mr, e, e.return);
          } catch (i) {
            pn(e, e.return, i);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && nC(e, e.return, t);
          break;
        }
      }
    }
    function fA(e) {
      switch (e.tag) {
        case R:
        case pe:
        case ke:
          try {
            To(Yr | mr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Rh = Symbol.for;
      Rh("selector.component"), Rh("selector.has_pseudo_class"), Rh("selector.role"), Rh("selector.test_id"), Rh("selector.text");
    }
    var dA = [];
    function pA() {
      dA.forEach(function(e) {
        return e();
      });
    }
    var hA = c.ReactCurrentActQueue;
    function vA(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function NR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && hA.current !== null && v("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var mA = Math.ceil, oC = c.ReactCurrentDispatcher, lC = c.ReactCurrentOwner, Kr = c.ReactCurrentBatchConfig, wo = c.ReactCurrentActQueue, Cr = (
      /*             */
      0
    ), PR = (
      /*               */
      1
    ), Qr = (
      /*                */
      2
    ), Ga = (
      /*                */
      4
    ), uu = 0, wh = 1, bc = 2, Fy = 3, bh = 4, UR = 5, uC = 6, kt = Cr, _i = null, An = null, Er = re, dl = re, sC = qu(re), Tr = uu, Dh = null, jy = re, _h = re, By = re, kh = null, qi = null, cC = 0, VR = 500, zR = 1 / 0, yA = 500, su = null;
    function Mh() {
      zR = Xn() + yA;
    }
    function FR() {
      return zR;
    }
    var Hy = !1, fC = null, Cd = null, Dc = !1, ls = null, Oh = re, dC = [], pC = null, gA = 50, Ah = 0, hC = null, vC = !1, Iy = !1, SA = 50, Ed = 0, Yy = null, Lh = rn, Wy = re, jR = !1;
    function $y() {
      return _i;
    }
    function ki() {
      return (kt & (Qr | Ga)) !== Cr ? Xn() : (Lh !== rn || (Lh = Xn()), Lh);
    }
    function us(e) {
      var t = e.mode;
      if ((t & Ct) === Ye)
        return Xe;
      if ((kt & Qr) !== Cr && Er !== re)
        return Ks(Er);
      var i = hM() !== pM;
      if (i) {
        if (Kr.transition !== null) {
          var a = Kr.transition;
          a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
        }
        return Wy === Ut && (Wy = Ep()), Wy;
      }
      var s = Wi();
      if (s !== Ut)
        return s;
      var d = Z_();
      return d;
    }
    function CA(e) {
      var t = e.mode;
      return (t & Ct) === Ye ? Xe : qv();
    }
    function xr(e, t, i, a) {
      YA(), jR && v("useInsertionEffect must not schedule updates."), vC && (Iy = !0), Fu(e, i, a), (kt & Qr) !== re && e === _i ? GA(t) : (ii && Xs(e, t, i), KA(t), e === _i && ((kt & Qr) === Cr && (_h = ct(_h, i)), Tr === bh && ss(e, Er)), Xi(e, a), i === Xe && kt === Cr && (t.mode & Ct) === Ye && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !wo.isBatchingLegacy && (Mh(), jT()));
    }
    function EA(e, t, i) {
      var a = e.current;
      a.lanes = t, Fu(e, t, i), Xi(e, i);
    }
    function TA(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (kt & Qr) !== Cr
      );
    }
    function Xi(e, t) {
      var i = e.callbackNode;
      Mf(e, t);
      var a = kf(e, e === _i ? Er : re);
      if (a === re) {
        i !== null && n1(i), e.callbackNode = null, e.callbackPriority = Ut;
        return;
      }
      var s = qo(a), d = e.callbackPriority;
      if (d === s && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(wo.current !== null && i !== TC)) {
        i == null && d !== Xe && v("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && n1(i);
      var m;
      if (s === Xe)
        e.tag === Xu ? (wo.isBatchingLegacy !== null && (wo.didScheduleLegacyUpdate = !0), qk(IR.bind(null, e))) : FT(IR.bind(null, e)), wo.current !== null ? wo.current.push(Zu) : ek(function() {
          (kt & (Qr | Ga)) === Cr && Zu();
        }), m = null;
      else {
        var S;
        switch (rm(a)) {
          case zr:
            S = Ns;
            break;
          case Va:
            S = $o;
            break;
          case Ii:
            S = lo;
            break;
          case Yi:
            S = Ul;
            break;
          default:
            S = lo;
            break;
        }
        m = xC(S, BR.bind(null, e));
      }
      e.callbackPriority = s, e.callbackNode = m;
    }
    function BR(e, t) {
      if (jM(), Lh = rn, Wy = re, (kt & (Qr | Ga)) !== Cr)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, a = fu();
      if (a && e.callbackNode !== i)
        return null;
      var s = kf(e, e === _i ? Er : re);
      if (s === re)
        return null;
      var d = !Af(e, s) && !Qv(e, s) && !t, m = d ? AA(e, s) : Ky(e, s);
      if (m !== uu) {
        if (m === bc) {
          var S = Of(e);
          S !== re && (s = S, m = mC(e, S));
        }
        if (m === wh) {
          var C = Dh;
          throw _c(e, re), ss(e, s), Xi(e, Xn()), C;
        }
        if (m === uC)
          ss(e, s);
        else {
          var D = !Af(e, s), _ = e.current.alternate;
          if (D && !RA(_)) {
            if (m = Ky(e, s), m === bc) {
              var z = Of(e);
              z !== re && (s = z, m = mC(e, z));
            }
            if (m === wh) {
              var U = Dh;
              throw _c(e, re), ss(e, s), Xi(e, Xn()), U;
            }
          }
          e.finishedWork = _, e.finishedLanes = s, xA(e, m, s);
        }
      }
      return Xi(e, Xn()), e.callbackNode === i ? BR.bind(null, e) : null;
    }
    function mC(e, t) {
      var i = kh;
      if (Pf(e)) {
        var a = _c(e, t);
        a.flags |= Dr, Ik(e.containerInfo);
      }
      var s = Ky(e, t);
      if (s !== bc) {
        var d = qi;
        qi = i, d !== null && HR(d);
      }
      return s;
    }
    function HR(e) {
      qi === null ? qi = e : qi.push.apply(qi, e);
    }
    function xA(e, t, i) {
      switch (t) {
        case uu:
        case wh:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case bc: {
          kc(e, qi, su);
          break;
        }
        case Fy: {
          if (ss(e, i), Gl(i) && // do not delay if we're inside an act() scope
          !r1()) {
            var a = cC + VR - Xn();
            if (a > 10) {
              var s = kf(e, re);
              if (s !== re)
                break;
              var d = e.suspendedLanes;
              if (!Kl(d, i)) {
                ki(), Lf(e, d);
                break;
              }
              e.timeoutHandle = pS(kc.bind(null, e, qi, su), a);
              break;
            }
          }
          kc(e, qi, su);
          break;
        }
        case bh: {
          if (ss(e, i), Sp(i))
            break;
          if (!r1()) {
            var m = pa(e, i), S = m, C = Xn() - S, D = IA(C) - C;
            if (D > 10) {
              e.timeoutHandle = pS(kc.bind(null, e, qi, su), D);
              break;
            }
          }
          kc(e, qi, su);
          break;
        }
        case UR: {
          kc(e, qi, su);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function RA(e) {
      for (var t = e; ; ) {
        if (t.flags & Nu) {
          var i = t.updateQueue;
          if (i !== null) {
            var a = i.stores;
            if (a !== null)
              for (var s = 0; s < a.length; s++) {
                var d = a[s], m = d.getSnapshot, S = d.value;
                try {
                  if (!ue(m(), S))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var C = t.child;
        if (t.subtreeFlags & Nu && C !== null) {
          C.return = t, t = C;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ss(e, t) {
      t = Qs(t, By), t = Qs(t, _h), Jv(e, t);
    }
    function IR(e) {
      if (BM(), (kt & (Qr | Ga)) !== Cr)
        throw new Error("Should not already be working.");
      fu();
      var t = kf(e, re);
      if (!oi(t, Xe))
        return Xi(e, Xn()), null;
      var i = Ky(e, t);
      if (e.tag !== Xu && i === bc) {
        var a = Of(e);
        a !== re && (t = a, i = mC(e, a));
      }
      if (i === wh) {
        var s = Dh;
        throw _c(e, re), ss(e, t), Xi(e, Xn()), s;
      }
      if (i === uC)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, kc(e, qi, su), Xi(e, Xn()), null;
    }
    function wA(e, t) {
      t !== re && (Nf(e, ct(t, Xe)), Xi(e, Xn()), (kt & (Qr | Ga)) === Cr && (Mh(), Zu()));
    }
    function yC(e, t) {
      var i = kt;
      kt |= PR;
      try {
        return e(t);
      } finally {
        kt = i, kt === Cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !wo.isBatchingLegacy && (Mh(), jT());
      }
    }
    function bA(e, t, i, a, s) {
      var d = Wi(), m = Kr.transition;
      try {
        return Kr.transition = null, Hn(zr), e(t, i, a, s);
      } finally {
        Hn(d), Kr.transition = m, kt === Cr && Mh();
      }
    }
    function cu(e) {
      ls !== null && ls.tag === Xu && (kt & (Qr | Ga)) === Cr && fu();
      var t = kt;
      kt |= PR;
      var i = Kr.transition, a = Wi();
      try {
        return Kr.transition = null, Hn(zr), e ? e() : void 0;
      } finally {
        Hn(a), Kr.transition = i, kt = t, (kt & (Qr | Ga)) === Cr && Zu();
      }
    }
    function YR() {
      return (kt & (Qr | Ga)) !== Cr;
    }
    function Gy(e, t) {
      fi(sC, dl, e), dl = ct(dl, t);
    }
    function gC(e) {
      dl = sC.current, ci(sC, e);
    }
    function _c(e, t) {
      e.finishedWork = null, e.finishedLanes = re;
      var i = e.timeoutHandle;
      if (i !== hS && (e.timeoutHandle = hS, J_(i)), An !== null)
        for (var a = An.return; a !== null; ) {
          var s = a.alternate;
          SR(s, a), a = a.return;
        }
      _i = e;
      var d = Mc(e.current, null);
      return An = d, Er = dl = t, Tr = uu, Dh = null, jy = re, _h = re, By = re, kh = null, qi = null, EM(), yo.discardPendingWarnings(), d;
    }
    function WR(e, t) {
      do {
        var i = An;
        try {
          if (ry(), vx(), dn(), lC.current = null, i === null || i.return === null) {
            Tr = wh, Dh = t, An = null;
            return;
          }
          if (qe && i.mode & Ft && Ay(i, !0), Ze)
            if (Ri(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var a = t;
              Ua(i, a, Er);
            } else
              Us(i, t, Er);
          qM(e, i.return, i, t, Er), QR(i);
        } catch (s) {
          t = s, An === i && i !== null ? (i = i.return, An = i) : i = An;
          continue;
        }
        return;
      } while (!0);
    }
    function $R() {
      var e = oC.current;
      return oC.current = Dy, e === null ? Dy : e;
    }
    function GR(e) {
      oC.current = e;
    }
    function DA() {
      cC = Xn();
    }
    function Nh(e) {
      jy = ct(e, jy);
    }
    function _A() {
      Tr === uu && (Tr = Fy);
    }
    function SC() {
      (Tr === uu || Tr === Fy || Tr === bc) && (Tr = bh), _i !== null && (Gs(jy) || Gs(_h)) && ss(_i, Er);
    }
    function kA(e) {
      Tr !== bh && (Tr = bc), kh === null ? kh = [e] : kh.push(e);
    }
    function MA() {
      return Tr === uu;
    }
    function Ky(e, t) {
      var i = kt;
      kt |= Qr;
      var a = $R();
      if (_i !== e || Er !== t) {
        if (ii) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Ph(e, Er), s.clear()), em(e, t);
        }
        su = wp(), _c(e, t);
      }
      jl(t);
      do
        try {
          OA();
          break;
        } catch (d) {
          WR(e, d);
        }
      while (!0);
      if (ry(), kt = i, GR(a), An !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return ff(), _i = null, Er = re, Tr;
    }
    function OA() {
      for (; An !== null; )
        KR(An);
    }
    function AA(e, t) {
      var i = kt;
      kt |= Qr;
      var a = $R();
      if (_i !== e || Er !== t) {
        if (ii) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Ph(e, Er), s.clear()), em(e, t);
        }
        su = wp(), Mh(), _c(e, t);
      }
      jl(t);
      do
        try {
          LA();
          break;
        } catch (d) {
          WR(e, d);
        }
      while (!0);
      return ry(), GR(a), kt = i, An !== null ? (Wv(), uu) : (ff(), _i = null, Er = re, Tr);
    }
    function LA() {
      for (; An !== null && !ip(); )
        KR(An);
    }
    function KR(e) {
      var t = e.alternate;
      Xt(e);
      var i;
      (e.mode & Ft) !== Ye ? (T0(e), i = CC(t, e, dl), Ay(e, !0)) : i = CC(t, e, dl), dn(), e.memoizedProps = e.pendingProps, i === null ? QR(e) : An = i, lC.current = null;
    }
    function QR(e) {
      var t = e;
      do {
        var i = t.alternate, a = t.return;
        if ((t.flags & Ls) === Ie) {
          Xt(t);
          var s = void 0;
          if ((t.mode & Ft) === Ye ? s = gR(i, t, dl) : (T0(t), s = gR(i, t, dl), Ay(t, !1)), dn(), s !== null) {
            An = s;
            return;
          }
        } else {
          var d = _O(i, t);
          if (d !== null) {
            d.flags &= Fv, An = d;
            return;
          }
          if ((t.mode & Ft) !== Ye) {
            Ay(t, !1);
            for (var m = t.actualDuration, S = t.child; S !== null; )
              m += S.actualDuration, S = S.sibling;
            t.actualDuration = m;
          }
          if (a !== null)
            a.flags |= Ls, a.subtreeFlags = Ie, a.deletions = null;
          else {
            Tr = uC, An = null;
            return;
          }
        }
        var C = t.sibling;
        if (C !== null) {
          An = C;
          return;
        }
        t = a, An = t;
      } while (t !== null);
      Tr === uu && (Tr = UR);
    }
    function kc(e, t, i) {
      var a = Wi(), s = Kr.transition;
      try {
        Kr.transition = null, Hn(zr), NA(e, t, i, a);
      } finally {
        Kr.transition = s, Hn(a);
      }
      return null;
    }
    function NA(e, t, i, a) {
      do
        fu();
      while (ls !== null);
      if (WA(), (kt & (Qr | Ga)) !== Cr)
        throw new Error("Should not already be working.");
      var s = e.finishedWork, d = e.finishedLanes;
      if (cp(d), s === null)
        return fp(), null;
      if (d === re && v("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = re, s === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ut;
      var m = ct(s.lanes, s.childLanes);
      xp(e, m), e === _i && (_i = null, An = null, Er = re), ((s.subtreeFlags & oo) !== Ie || (s.flags & oo) !== Ie) && (Dc || (Dc = !0, pC = i, xC(lo, function() {
        return fu(), null;
      })));
      var S = (s.subtreeFlags & (Io | Yo | Wo | oo)) !== Ie, C = (s.flags & (Io | Yo | Wo | oo)) !== Ie;
      if (S || C) {
        var D = Kr.transition;
        Kr.transition = null;
        var _ = Wi();
        Hn(zr);
        var z = kt;
        kt |= Ga, lC.current = null, LO(e, s), jx(), GO(e, s, d), $_(e.containerInfo), e.current = s, Vs(d), KO(s, e, d), zs(), ap(), kt = z, Hn(_), Kr.transition = D;
      } else
        e.current = s, jx();
      var U = Dc;
      if (Dc ? (Dc = !1, ls = e, Oh = d) : (Ed = 0, Yy = null), m = e.pendingLanes, m === re && (Cd = null), U || JR(e.current, !1), lp(s.stateNode, a), ii && e.memoizedUpdaters.clear(), pA(), Xi(e, Xn()), t !== null)
        for (var W = e.onRecoverableError, K = 0; K < t.length; K++) {
          var X = t[K], xe = X.stack, $e = X.digest;
          W(X.value, {
            componentStack: xe,
            digest: $e
          });
        }
      if (Hy) {
        Hy = !1;
        var je = fC;
        throw fC = null, je;
      }
      return oi(Oh, Xe) && e.tag !== Xu && fu(), m = e.pendingLanes, oi(m, Xe) ? (FM(), e === hC ? Ah++ : (Ah = 0, hC = e)) : Ah = 0, Zu(), fp(), null;
    }
    function fu() {
      if (ls !== null) {
        var e = rm(Oh), t = Js(Ii, e), i = Kr.transition, a = Wi();
        try {
          return Kr.transition = null, Hn(t), UA();
        } finally {
          Hn(a), Kr.transition = i;
        }
      }
      return !1;
    }
    function PA(e) {
      dC.push(e), Dc || (Dc = !0, xC(lo, function() {
        return fu(), null;
      }));
    }
    function UA() {
      if (ls === null)
        return !1;
      var e = pC;
      pC = null;
      var t = ls, i = Oh;
      if (ls = null, Oh = re, (kt & (Qr | Ga)) !== Cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      vC = !0, Iy = !1, Fl(i);
      var a = kt;
      kt |= Ga, tA(t.current), XO(t, t.current, i, e);
      {
        var s = dC;
        dC = [];
        for (var d = 0; d < s.length; d++) {
          var m = s[d];
          VO(t, m);
        }
      }
      hp(), JR(t.current, !0), kt = a, Zu(), Iy ? t === Yy ? Ed++ : (Ed = 0, Yy = t) : Ed = 0, vC = !1, Iy = !1, up(t);
      {
        var S = t.current.stateNode;
        S.effectDuration = 0, S.passiveEffectDuration = 0;
      }
      return !0;
    }
    function qR(e) {
      return Cd !== null && Cd.has(e);
    }
    function VA(e) {
      Cd === null ? Cd = /* @__PURE__ */ new Set([e]) : Cd.add(e);
    }
    function zA(e) {
      Hy || (Hy = !0, fC = e);
    }
    var FA = zA;
    function XR(e, t, i) {
      var a = Rc(i, t), s = Kx(e, a, Xe), d = es(e, s, Xe), m = ki();
      d !== null && (Fu(d, Xe, m), Xi(d, m));
    }
    function pn(e, t, i) {
      if (MO(i), Uh(!1), e.tag === k) {
        XR(e, e, i);
        return;
      }
      var a = null;
      for (a = t; a !== null; ) {
        if (a.tag === k) {
          XR(a, e, i);
          return;
        } else if (a.tag === b) {
          var s = a.type, d = a.stateNode;
          if (typeof s.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !qR(d)) {
            var m = Rc(i, e), S = j0(a, m, Xe), C = es(a, S, Xe), D = ki();
            C !== null && (Fu(C, Xe, D), Xi(C, D));
            return;
          }
        }
        a = a.return;
      }
      v(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function jA(e, t, i) {
      var a = e.pingCache;
      a !== null && a.delete(t);
      var s = ki();
      Lf(e, i), QA(e), _i === e && Kl(Er, i) && (Tr === bh || Tr === Fy && Gl(Er) && Xn() - cC < VR ? _c(e, re) : By = ct(By, i)), Xi(e, s);
    }
    function ZR(e, t) {
      t === Ut && (t = CA(e));
      var i = ki(), a = Ki(e, t);
      a !== null && (Fu(a, t, i), Xi(a, i));
    }
    function BA(e) {
      var t = e.memoizedState, i = Ut;
      t !== null && (i = t.retryLane), ZR(e, i);
    }
    function HA(e, t) {
      var i = Ut, a;
      switch (e.tag) {
        case oe:
          a = e.stateNode;
          var s = e.memoizedState;
          s !== null && (i = s.retryLane);
          break;
        case Vt:
          a = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      a !== null && a.delete(t), ZR(e, i);
    }
    function IA(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : mA(e / 1960) * 1960;
    }
    function YA() {
      if (Ah > gA)
        throw Ah = 0, hC = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Ed > SA && (Ed = 0, Yy = null, v("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function WA() {
      yo.flushLegacyContextWarning(), yo.flushPendingUnsafeLifecycleWarnings();
    }
    function JR(e, t) {
      Xt(e), Qy(e, Ho, cA), t && Qy(e, La, fA), Qy(e, Ho, uA), t && Qy(e, La, sA), dn();
    }
    function Qy(e, t, i) {
      for (var a = e, s = null; a !== null; ) {
        var d = a.subtreeFlags & t;
        a !== s && a.child !== null && d !== Ie ? a = a.child : ((a.flags & t) !== Ie && i(a), a.sibling !== null ? a = a.sibling : a = s = a.return);
      }
    }
    var qy = null;
    function e1(e) {
      {
        if ((kt & Qr) !== Cr || !(e.mode & Ct))
          return;
        var t = e.tag;
        if (t !== M && t !== k && t !== b && t !== R && t !== pe && t !== Ae && t !== ke)
          return;
        var i = nt(e) || "ReactComponent";
        if (qy !== null) {
          if (qy.has(i))
            return;
          qy.add(i);
        } else
          qy = /* @__PURE__ */ new Set([i]);
        var a = fr;
        try {
          Xt(e), v("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          a ? Xt(e) : dn();
        }
      }
    }
    var CC;
    {
      var $A = null;
      CC = function(e, t, i) {
        var a = u1($A, t);
        try {
          return pR(e, t, i);
        } catch (d) {
          if (iM() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (ry(), vx(), SR(e, t), u1(t, a), t.mode & Ft && T0(t), Bo(null, pR, null, e, t, i), io()) {
            var s = As();
            typeof s == "object" && s !== null && s._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var t1 = !1, EC;
    EC = /* @__PURE__ */ new Set();
    function GA(e) {
      if (ba && !UM())
        switch (e.tag) {
          case R:
          case pe:
          case ke: {
            var t = An && nt(An) || "Unknown", i = t;
            if (!EC.has(i)) {
              EC.add(i);
              var a = nt(e) || "Unknown";
              v("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
            }
            break;
          }
          case b: {
            t1 || (v("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), t1 = !0);
            break;
          }
        }
    }
    function Ph(e, t) {
      if (ii) {
        var i = e.memoizedUpdaters;
        i.forEach(function(a) {
          Xs(e, a, t);
        });
      }
    }
    var TC = {};
    function xC(e, t) {
      {
        var i = wo.current;
        return i !== null ? (i.push(t), TC) : rp(e, t);
      }
    }
    function n1(e) {
      if (e !== TC)
        return Bv(e);
    }
    function r1() {
      return wo.current !== null;
    }
    function KA(e) {
      {
        if (e.mode & Ct) {
          if (!NR())
            return;
        } else if (!vA() || kt !== Cr || e.tag !== R && e.tag !== pe && e.tag !== ke)
          return;
        if (wo.current === null) {
          var t = fr;
          try {
            Xt(e), v(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, nt(e));
          } finally {
            t ? Xt(e) : dn();
          }
        }
      }
    }
    function QA(e) {
      e.tag !== Xu && NR() && wo.current === null && v(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Uh(e) {
      jR = e;
    }
    var Ka = null, Td = null, qA = function(e) {
      Ka = e;
    };
    function xd(e) {
      {
        if (Ka === null)
          return e;
        var t = Ka(e);
        return t === void 0 ? e : t.current;
      }
    }
    function RC(e) {
      return xd(e);
    }
    function wC(e) {
      {
        if (Ka === null)
          return e;
        var t = Ka(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = xd(e.render);
            if (e.render !== i) {
              var a = {
                $$typeof: ne,
                render: i
              };
              return e.displayName !== void 0 && (a.displayName = e.displayName), a;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function i1(e, t) {
      {
        if (Ka === null)
          return !1;
        var i = e.elementType, a = t.type, s = !1, d = typeof a == "object" && a !== null ? a.$$typeof : null;
        switch (e.tag) {
          case b: {
            typeof a == "function" && (s = !0);
            break;
          }
          case R: {
            (typeof a == "function" || d === rt) && (s = !0);
            break;
          }
          case pe: {
            (d === ne || d === rt) && (s = !0);
            break;
          }
          case Ae:
          case ke: {
            (d === lt || d === rt) && (s = !0);
            break;
          }
          default:
            return !1;
        }
        if (s) {
          var m = Ka(i);
          if (m !== void 0 && m === Ka(a))
            return !0;
        }
        return !1;
      }
    }
    function a1(e) {
      {
        if (Ka === null || typeof WeakSet != "function")
          return;
        Td === null && (Td = /* @__PURE__ */ new WeakSet()), Td.add(e);
      }
    }
    var XA = function(e, t) {
      {
        if (Ka === null)
          return;
        var i = t.staleFamilies, a = t.updatedFamilies;
        fu(), cu(function() {
          bC(e.current, a, i);
        });
      }
    }, ZA = function(e, t) {
      {
        if (e.context !== ma)
          return;
        fu(), cu(function() {
          Vh(t, e, null, null);
        });
      }
    };
    function bC(e, t, i) {
      {
        var a = e.alternate, s = e.child, d = e.sibling, m = e.tag, S = e.type, C = null;
        switch (m) {
          case R:
          case ke:
          case b:
            C = S;
            break;
          case pe:
            C = S.render;
            break;
        }
        if (Ka === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var D = !1, _ = !1;
        if (C !== null) {
          var z = Ka(C);
          z !== void 0 && (i.has(z) ? _ = !0 : t.has(z) && (m === b ? _ = !0 : D = !0));
        }
        if (Td !== null && (Td.has(e) || a !== null && Td.has(a)) && (_ = !0), _ && (e._debugNeedsRemount = !0), _ || D) {
          var U = Ki(e, Xe);
          U !== null && xr(U, e, Xe, rn);
        }
        s !== null && !_ && bC(s, t, i), d !== null && bC(d, t, i);
      }
    }
    var JA = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), a = new Set(t.map(function(s) {
          return s.current;
        }));
        return DC(e.current, a, i), i;
      }
    };
    function DC(e, t, i) {
      {
        var a = e.child, s = e.sibling, d = e.tag, m = e.type, S = null;
        switch (d) {
          case R:
          case ke:
          case b:
            S = m;
            break;
          case pe:
            S = m.render;
            break;
        }
        var C = !1;
        S !== null && t.has(S) && (C = !0), C ? eL(e, i) : a !== null && DC(a, t, i), s !== null && DC(s, t, i);
      }
    }
    function eL(e, t) {
      {
        var i = tL(e, t);
        if (i)
          return;
        for (var a = e; ; ) {
          switch (a.tag) {
            case F:
              t.add(a.stateNode);
              return;
            case L:
              t.add(a.stateNode.containerInfo);
              return;
            case k:
              t.add(a.stateNode.containerInfo);
              return;
          }
          if (a.return === null)
            throw new Error("Expected to reach root first.");
          a = a.return;
        }
      }
    }
    function tL(e, t) {
      for (var i = e, a = !1; ; ) {
        if (i.tag === F)
          a = !0, t.add(i.stateNode);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return a;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return a;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return !1;
    }
    var _C;
    {
      _C = !1;
      try {
        var o1 = Object.preventExtensions({});
      } catch {
        _C = !0;
      }
    }
    function nL(e, t, i, a) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = Ie, this.subtreeFlags = Ie, this.deletions = null, this.lanes = re, this.childLanes = re, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !_C && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ya = function(e, t, i, a) {
      return new nL(e, t, i, a);
    };
    function kC(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function rL(e) {
      return typeof e == "function" && !kC(e) && e.defaultProps === void 0;
    }
    function iL(e) {
      if (typeof e == "function")
        return kC(e) ? b : R;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ne)
          return pe;
        if (t === lt)
          return Ae;
      }
      return M;
    }
    function Mc(e, t) {
      var i = e.alternate;
      i === null ? (i = ya(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = Ie, i.subtreeFlags = Ie, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & Fn, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var a = e.dependencies;
      switch (i.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case M:
        case R:
        case ke:
          i.type = xd(e.type);
          break;
        case b:
          i.type = RC(e.type);
          break;
        case pe:
          i.type = wC(e.type);
          break;
      }
      return i;
    }
    function aL(e, t) {
      e.flags &= Fn | Sn;
      var i = e.alternate;
      if (i === null)
        e.childLanes = re, e.lanes = t, e.child = null, e.subtreeFlags = Ie, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = Ie, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type;
        var a = i.dependencies;
        e.dependencies = a === null ? null : {
          lanes: a.lanes,
          firstContext: a.firstContext
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function oL(e, t, i) {
      var a;
      return e === Gm ? (a = Ct, t === !0 && (a |= en, a |= jt)) : a = Ye, ii && (a |= Ft), ya(k, null, null, a);
    }
    function MC(e, t, i, a, s, d) {
      var m = M, S = e;
      if (typeof e == "function")
        kC(e) ? (m = b, S = RC(S)) : S = xd(S);
      else if (typeof e == "string")
        m = F;
      else
        e: switch (e) {
          case Ta:
            return cs(i.children, s, d, t);
          case na:
            m = ae, s |= en, (s & Ct) !== Ye && (s |= jt);
            break;
          case xa:
            return lL(i, s, d, t);
          case Ee:
            return uL(i, s, d, t);
          case Me:
            return sL(i, s, d, t);
          case bn:
            return l1(i, s, d, t);
          case ln:
          // eslint-disable-next-line no-fallthrough
          case Tt:
          // eslint-disable-next-line no-fallthrough
          case fn:
          // eslint-disable-next-line no-fallthrough
          case cr:
          // eslint-disable-next-line no-fallthrough
          case St:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ra:
                  m = he;
                  break e;
                case N:
                  m = de;
                  break e;
                case ne:
                  m = pe, S = wC(S);
                  break e;
                case lt:
                  m = Ae;
                  break e;
                case rt:
                  m = Ue, S = null;
                  break e;
              }
            var C = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var D = a ? nt(a) : null;
              D && (C += `

Check the render method of \`` + D + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + C));
          }
        }
      var _ = ya(m, i, t, s);
      return _.elementType = e, _.type = S, _.lanes = d, _._debugOwner = a, _;
    }
    function OC(e, t, i) {
      var a = null;
      a = e._owner;
      var s = e.type, d = e.key, m = e.props, S = MC(s, d, m, a, t, i);
      return S._debugSource = e._source, S._debugOwner = e._owner, S;
    }
    function cs(e, t, i, a) {
      var s = ya(te, e, a, t);
      return s.lanes = i, s;
    }
    function lL(e, t, i, a) {
      typeof e.id != "string" && v('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var s = ya(Oe, e, a, t | Ft);
      return s.elementType = xa, s.lanes = i, s.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, s;
    }
    function uL(e, t, i, a) {
      var s = ya(oe, e, a, t);
      return s.elementType = Ee, s.lanes = i, s;
    }
    function sL(e, t, i, a) {
      var s = ya(Vt, e, a, t);
      return s.elementType = Me, s.lanes = i, s;
    }
    function l1(e, t, i, a) {
      var s = ya(He, e, a, t);
      s.elementType = bn, s.lanes = i;
      var d = {
        isHidden: !1
      };
      return s.stateNode = d, s;
    }
    function AC(e, t, i) {
      var a = ya(q, e, null, t);
      return a.lanes = i, a;
    }
    function cL() {
      var e = ya(F, null, null, Ye);
      return e.elementType = "DELETED", e;
    }
    function fL(e) {
      var t = ya(Et, null, null, Ye);
      return t.stateNode = e, t;
    }
    function LC(e, t, i) {
      var a = e.children !== null ? e.children : [], s = ya(L, a, e.key, t);
      return s.lanes = i, s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, s;
    }
    function u1(e, t) {
      return e === null && (e = ya(M, null, null, Ye)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function dL(e, t, i, a, s) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = hS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ut, this.eventTimes = qs(re), this.expirationTimes = qs(rn), this.pendingLanes = re, this.suspendedLanes = re, this.pingedLanes = re, this.expiredLanes = re, this.mutableReadLanes = re, this.finishedLanes = re, this.entangledLanes = re, this.entanglements = qs(re), this.identifierPrefix = a, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], m = 0; m < Bl; m++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Gm:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case Xu:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function s1(e, t, i, a, s, d, m, S, C, D) {
      var _ = new dL(e, t, i, S, C), z = oL(t, d);
      _.current = z, z.stateNode = _;
      {
        var U = {
          element: a,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = U;
      }
      return $S(z), _;
    }
    var NC = "18.3.1";
    function pL(e, t, i) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Xr(a), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: sr,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var PC, UC;
    PC = !1, UC = {};
    function c1(e) {
      if (!e)
        return ma;
      var t = Lu(e), i = Qk(t);
      if (t.tag === b) {
        var a = t.type;
        if (al(a))
          return VT(t, a, i);
      }
      return i;
    }
    function hL(e, t) {
      {
        var i = Lu(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var a = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
        }
        var s = ni(i);
        if (s === null)
          return null;
        if (s.mode & en) {
          var d = nt(i) || "Component";
          if (!UC[d]) {
            UC[d] = !0;
            var m = fr;
            try {
              Xt(s), i.mode & en ? v("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : v("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              m ? Xt(m) : dn();
            }
          }
        }
        return s.stateNode;
      }
    }
    function f1(e, t, i, a, s, d, m, S) {
      var C = !1, D = null;
      return s1(e, t, C, D, i, a, s, d, m);
    }
    function d1(e, t, i, a, s, d, m, S, C, D) {
      var _ = !0, z = s1(i, a, _, e, s, d, m, S, C);
      z.context = c1(null);
      var U = z.current, W = ki(), K = us(U), X = ou(W, K);
      return X.callback = t ?? null, es(U, X, K), EA(z, K, W), z;
    }
    function Vh(e, t, i, a) {
      op(t, e);
      var s = t.current, d = ki(), m = us(s);
      En(m);
      var S = c1(i);
      t.context === null ? t.context = S : t.pendingContext = S, ba && fr !== null && !PC && (PC = !0, v(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, nt(fr) || "Unknown"));
      var C = ou(d, m);
      C.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && v("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), C.callback = a);
      var D = es(s, C, m);
      return D !== null && (xr(D, s, m, d), uy(D, s, m)), m;
    }
    function Xy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case F:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function vL(e) {
      switch (e.tag) {
        case k: {
          var t = e.stateNode;
          if (Pf(t)) {
            var i = Gv(t);
            wA(t, i);
          }
          break;
        }
        case oe: {
          cu(function() {
            var s = Ki(e, Xe);
            if (s !== null) {
              var d = ki();
              xr(s, e, Xe, d);
            }
          });
          var a = Xe;
          VC(e, a);
          break;
        }
      }
    }
    function p1(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = Zv(i.retryLane, t));
    }
    function VC(e, t) {
      p1(e, t);
      var i = e.alternate;
      i && p1(i, t);
    }
    function mL(e) {
      if (e.tag === oe) {
        var t = Ys, i = Ki(e, t);
        if (i !== null) {
          var a = ki();
          xr(i, e, t, a);
        }
        VC(e, t);
      }
    }
    function yL(e) {
      if (e.tag === oe) {
        var t = us(e), i = Ki(e, t);
        if (i !== null) {
          var a = ki();
          xr(i, e, t, a);
        }
        VC(e, t);
      }
    }
    function h1(e) {
      var t = hn(e);
      return t === null ? null : t.stateNode;
    }
    var v1 = function(e) {
      return null;
    };
    function gL(e) {
      return v1(e);
    }
    var m1 = function(e) {
      return !1;
    };
    function SL(e) {
      return m1(e);
    }
    var y1 = null, g1 = null, S1 = null, C1 = null, E1 = null, T1 = null, x1 = null, R1 = null, w1 = null;
    {
      var b1 = function(e, t, i) {
        var a = t[i], s = mt(e) ? e.slice() : dt({}, e);
        return i + 1 === t.length ? (mt(s) ? s.splice(a, 1) : delete s[a], s) : (s[a] = b1(e[a], t, i + 1), s);
      }, D1 = function(e, t) {
        return b1(e, t, 0);
      }, _1 = function(e, t, i, a) {
        var s = t[a], d = mt(e) ? e.slice() : dt({}, e);
        if (a + 1 === t.length) {
          var m = i[a];
          d[m] = d[s], mt(d) ? d.splice(s, 1) : delete d[s];
        } else
          d[s] = _1(
            // $FlowFixMe number or string is fine here
            e[s],
            t,
            i,
            a + 1
          );
        return d;
      }, k1 = function(e, t, i) {
        if (t.length !== i.length) {
          E("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var a = 0; a < i.length - 1; a++)
            if (t[a] !== i[a]) {
              E("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return _1(e, t, i, 0);
      }, M1 = function(e, t, i, a) {
        if (i >= t.length)
          return a;
        var s = t[i], d = mt(e) ? e.slice() : dt({}, e);
        return d[s] = M1(e[s], t, i + 1, a), d;
      }, O1 = function(e, t, i) {
        return M1(e, t, 0, i);
      }, zC = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      y1 = function(e, t, i, a) {
        var s = zC(e, t);
        if (s !== null) {
          var d = O1(s.memoizedState, i, a);
          s.memoizedState = d, s.baseState = d, e.memoizedProps = dt({}, e.memoizedProps);
          var m = Ki(e, Xe);
          m !== null && xr(m, e, Xe, rn);
        }
      }, g1 = function(e, t, i) {
        var a = zC(e, t);
        if (a !== null) {
          var s = D1(a.memoizedState, i);
          a.memoizedState = s, a.baseState = s, e.memoizedProps = dt({}, e.memoizedProps);
          var d = Ki(e, Xe);
          d !== null && xr(d, e, Xe, rn);
        }
      }, S1 = function(e, t, i, a) {
        var s = zC(e, t);
        if (s !== null) {
          var d = k1(s.memoizedState, i, a);
          s.memoizedState = d, s.baseState = d, e.memoizedProps = dt({}, e.memoizedProps);
          var m = Ki(e, Xe);
          m !== null && xr(m, e, Xe, rn);
        }
      }, C1 = function(e, t, i) {
        e.pendingProps = O1(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ki(e, Xe);
        a !== null && xr(a, e, Xe, rn);
      }, E1 = function(e, t) {
        e.pendingProps = D1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ki(e, Xe);
        i !== null && xr(i, e, Xe, rn);
      }, T1 = function(e, t, i) {
        e.pendingProps = k1(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ki(e, Xe);
        a !== null && xr(a, e, Xe, rn);
      }, x1 = function(e) {
        var t = Ki(e, Xe);
        t !== null && xr(t, e, Xe, rn);
      }, R1 = function(e) {
        v1 = e;
      }, w1 = function(e) {
        m1 = e;
      };
    }
    function CL(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    function EL(e) {
      return null;
    }
    function TL() {
      return fr;
    }
    function xL(e) {
      var t = e.findFiberByHostInstance, i = c.ReactCurrentDispatcher;
      return Uu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: y1,
        overrideHookStateDeletePath: g1,
        overrideHookStateRenamePath: S1,
        overrideProps: C1,
        overridePropsDeletePath: E1,
        overridePropsRenamePath: T1,
        setErrorHandler: R1,
        setSuspenseHandler: w1,
        scheduleUpdate: x1,
        currentDispatcherRef: i,
        findHostInstanceByFiber: CL,
        findFiberByHostInstance: t || EL,
        // React Refresh
        findHostInstancesForRefresh: JA,
        scheduleRefresh: XA,
        scheduleRoot: ZA,
        setRefreshHandler: qA,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: TL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: NC
      });
    }
    var A1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function FC(e) {
      this._internalRoot = e;
    }
    Zy.prototype.render = FC.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? v("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Jy(arguments[1]) ? v("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && v("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== Vn) {
          var a = h1(t.current);
          a && a.parentNode !== i && v("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Vh(e, t, null, null);
    }, Zy.prototype.unmount = FC.prototype.unmount = function() {
      typeof arguments[0] == "function" && v("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        YR() && v("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), cu(function() {
          Vh(null, e, null, null);
        }), AT(t);
      }
    };
    function RL(e, t) {
      if (!Jy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      L1(e);
      var i = !1, a = !1, s = "", d = A1;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Nr && v(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var m = f1(e, Gm, null, i, a, s, d);
      jm(m.current, e);
      var S = e.nodeType === Vn ? e.parentNode : e;
      return Ip(S), new FC(m);
    }
    function Zy(e) {
      this._internalRoot = e;
    }
    function wL(e) {
      e && um(e);
    }
    Zy.prototype.unstable_scheduleHydration = wL;
    function bL(e, t, i) {
      if (!Jy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      L1(e), t === void 0 && v("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var a = i ?? null, s = i != null && i.hydratedSources || null, d = !1, m = !1, S = "", C = A1;
      i != null && (i.unstable_strictMode === !0 && (d = !0), i.identifierPrefix !== void 0 && (S = i.identifierPrefix), i.onRecoverableError !== void 0 && (C = i.onRecoverableError));
      var D = d1(t, null, e, Gm, a, d, m, S, C);
      if (jm(D.current, e), Ip(e), s)
        for (var _ = 0; _ < s.length; _++) {
          var z = s[_];
          MM(D, z);
        }
      return new Zy(D);
    }
    function Jy(e) {
      return !!(e && (e.nodeType === Jr || e.nodeType === ro || e.nodeType === Wd));
    }
    function zh(e) {
      return !!(e && (e.nodeType === Jr || e.nodeType === ro || e.nodeType === Wd || e.nodeType === Vn && e.nodeValue === " react-mount-point-unstable "));
    }
    function L1(e) {
      e.nodeType === Jr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), eh(e) && (e._reactRootContainer ? v("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : v("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var DL = c.ReactCurrentOwner, N1;
    N1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Vn) {
        var t = h1(e._reactRootContainer.current);
        t && t.parentNode !== e && v("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, a = jC(e), s = !!(a && Qu(a));
      s && !i && v("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Jr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function jC(e) {
      return e ? e.nodeType === ro ? e.documentElement : e.firstChild : null;
    }
    function P1() {
    }
    function _L(e, t, i, a, s) {
      if (s) {
        if (typeof a == "function") {
          var d = a;
          a = function() {
            var U = Xy(m);
            d.call(U);
          };
        }
        var m = d1(
          t,
          a,
          e,
          Xu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          P1
        );
        e._reactRootContainer = m, jm(m.current, e);
        var S = e.nodeType === Vn ? e.parentNode : e;
        return Ip(S), cu(), m;
      } else {
        for (var C; C = e.lastChild; )
          e.removeChild(C);
        if (typeof a == "function") {
          var D = a;
          a = function() {
            var U = Xy(_);
            D.call(U);
          };
        }
        var _ = f1(
          e,
          Xu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          P1
        );
        e._reactRootContainer = _, jm(_.current, e);
        var z = e.nodeType === Vn ? e.parentNode : e;
        return Ip(z), cu(function() {
          Vh(t, _, i, a);
        }), _;
      }
    }
    function kL(e, t) {
      e !== null && typeof e != "function" && v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function eg(e, t, i, a, s) {
      N1(i), kL(s === void 0 ? null : s, "render");
      var d = i._reactRootContainer, m;
      if (!d)
        m = _L(i, t, e, s, a);
      else {
        if (m = d, typeof s == "function") {
          var S = s;
          s = function() {
            var C = Xy(m);
            S.call(C);
          };
        }
        Vh(t, m, e, s);
      }
      return Xy(m);
    }
    var U1 = !1;
    function ML(e) {
      {
        U1 || (U1 = !0, v("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = DL.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || v("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Lt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Jr ? e : hL(e, "findDOMNode");
    }
    function OL(e, t, i) {
      if (v("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !zh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = eh(t) && t._reactRootContainer === void 0;
        a && v("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return eg(null, e, t, !0, i);
    }
    function AL(e, t, i) {
      if (v("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !zh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = eh(t) && t._reactRootContainer === void 0;
        a && v("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return eg(null, e, t, !1, i);
    }
    function LL(e, t, i, a) {
      if (v("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !zh(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Vg(e))
        throw new Error("parentComponent must be a valid React Component");
      return eg(e, t, i, !1, a);
    }
    var V1 = !1;
    function NL(e) {
      if (V1 || (V1 = !0, v("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !zh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = eh(e) && e._reactRootContainer === void 0;
        t && v("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = jC(e), a = i && !Qu(i);
          a && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return cu(function() {
          eg(null, null, e, !1, function() {
            e._reactRootContainer = null, AT(e);
          });
        }), !0;
      } else {
        {
          var s = jC(e), d = !!(s && Qu(s)), m = e.nodeType === Jr && zh(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    kr(vL), ju(mL), im(yL), tc(Wi), bp(tm), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && v("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xc(U_), Ug(yC, bA, cu);
    function PL(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Jy(t))
        throw new Error("Target container is not a DOM element.");
      return pL(e, t, null, i);
    }
    function UL(e, t, i, a) {
      return LL(e, t, i, a);
    }
    var BC = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Qu, ed, Bm, ku, Zc, yC]
    };
    function VL(e, t) {
      return BC.usingClientEntryPoint || v('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), RL(e, t);
    }
    function zL(e, t, i) {
      return BC.usingClientEntryPoint || v('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), bL(e, t, i);
    }
    function FL(e) {
      return YR() && v("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), cu(e);
    }
    var jL = xL({
      findFiberByHostInstance: vc,
      bundleType: 1,
      version: NC,
      rendererPackageName: "react-dom"
    });
    if (!jL && Pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var z1 = window.location.protocol;
      /^(https?|file):$/.test(z1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (z1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ji.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BC, Ji.createPortal = PL, Ji.createRoot = VL, Ji.findDOMNode = ML, Ji.flushSync = FL, Ji.hydrate = OL, Ji.hydrateRoot = zL, Ji.render = AL, Ji.unmountComponentAtNode = NL, Ji.unstable_batchedUpdates = yC, Ji.unstable_renderSubtreeIntoContainer = UL, Ji.version = NC, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ji;
}
var q1;
function ZL() {
  if (q1) return rg.exports;
  q1 = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (l) {
        console.error(l);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (o(), rg.exports = qL()) : rg.exports = XL(), rg.exports;
}
var X1;
function JL() {
  if (X1) return wd;
  X1 = 1;
  var o = ZL();
  if (process.env.NODE_ENV === "production")
    wd.createRoot = o.createRoot, wd.hydrateRoot = o.hydrateRoot;
  else {
    var l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    wd.createRoot = function(c, p) {
      l.usingClientEntryPoint = !0;
      try {
        return o.createRoot(c, p);
      } finally {
        l.usingClientEntryPoint = !1;
      }
    }, wd.hydrateRoot = function(c, p, y) {
      l.usingClientEntryPoint = !0;
      try {
        return o.hydrateRoot(c, p, y);
      } finally {
        l.usingClientEntryPoint = !1;
      }
    };
  }
  return wd;
}
var eN = JL(), st = iv();
const Rb = st.createContext({});
function Cg(o) {
  const l = st.useRef(null);
  return l.current === null && (l.current = o()), l.current;
}
const TE = st.createContext(null), xE = st.createContext({
  transformPagePoint: (o) => o,
  isStatic: !1,
  reducedMotion: "never"
});
function tN(o = !0) {
  const l = st.useContext(TE);
  if (l === null)
    return [!0, null];
  const { isPresent: c, onExitComplete: p, register: y } = l, E = st.useId();
  st.useEffect(() => {
    o && y(E);
  }, [o]);
  const v = st.useCallback(() => o && p && p(E), [E, p, o]);
  return !c && p ? [!1, v] : [!0];
}
const RE = typeof window < "u", wE = RE ? st.useLayoutEffect : st.useEffect, Ai = /* @__NO_SIDE_EFFECTS__ */ (o) => o;
let Vc = Ai, ps = Ai;
process.env.NODE_ENV !== "production" && (Vc = (o, l) => {
  !o && typeof console < "u" && console.warn(l);
}, ps = (o, l) => {
  if (!o)
    throw new Error(l);
});
// @__NO_SIDE_EFFECTS__
function bE(o) {
  let l;
  return () => (l === void 0 && (l = o()), l);
}
const Uc = /* @__NO_SIDE_EFFECTS__ */ (o, l, c) => {
  const p = l - o;
  return p === 0 ? 1 : (c - o) / p;
}, vl = /* @__NO_SIDE_EFFECTS__ */ (o) => o * 1e3, pu = /* @__NO_SIDE_EFFECTS__ */ (o) => o / 1e3, nN = {
  useManualTiming: !1
};
function rN(o) {
  let l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), p = !1, y = !1;
  const E = /* @__PURE__ */ new WeakSet();
  let v = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function w(b) {
    E.has(b) && (R.schedule(b), o()), b(v);
  }
  const R = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (b, M = !1, k = !1) => {
      const F = k && p ? l : c;
      return M && E.add(b), F.has(b) || F.add(b), b;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (b) => {
      c.delete(b), E.delete(b);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (b) => {
      if (v = b, p) {
        y = !0;
        return;
      }
      p = !0, [l, c] = [c, l], l.forEach(w), l.clear(), p = !1, y && (y = !1, R.process(b));
    }
  };
  return R;
}
const ag = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], iN = 40;
function wb(o, l) {
  let c = !1, p = !0;
  const y = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, E = () => c = !0, v = ag.reduce((de, he) => (de[he] = rN(E), de), {}), { read: w, resolveKeyframes: R, update: b, preRender: M, render: k, postRender: L } = v, F = () => {
    const de = performance.now();
    c = !1, y.delta = p ? 1e3 / 60 : Math.max(Math.min(de - y.timestamp, iN), 1), y.timestamp = de, y.isProcessing = !0, w.process(y), R.process(y), b.process(y), M.process(y), k.process(y), L.process(y), y.isProcessing = !1, c && l && (p = !1, o(F));
  }, q = () => {
    c = !0, p = !0, y.isProcessing || o(F);
  };
  return { schedule: ag.reduce((de, he) => {
    const pe = v[he];
    return de[he] = (Oe, oe = !1, Ae = !1) => (c || q(), pe.schedule(Oe, oe, Ae)), de;
  }, {}), cancel: (de) => {
    for (let he = 0; he < ag.length; he++)
      v[ag[he]].cancel(de);
  }, state: y, steps: v };
}
const { schedule: Kt, cancel: Do, state: Or, steps: YC } = wb(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ai, !0), bb = st.createContext({ strict: !1 }), Z1 = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Od = {};
for (const o in Z1)
  Od[o] = {
    isEnabled: (l) => Z1[o].some((c) => !!l[c])
  };
function aN(o) {
  for (const l in o)
    Od[l] = {
      ...Od[l],
      ...o[l]
    };
}
const oN = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function pg(o) {
  return o.startsWith("while") || o.startsWith("drag") && o !== "draggable" || o.startsWith("layout") || o.startsWith("onTap") || o.startsWith("onPan") || o.startsWith("onLayout") || oN.has(o);
}
let Db = (o) => !pg(o);
function lN(o) {
  o && (Db = (l) => l.startsWith("on") ? !pg(l) : o(l));
}
try {
  lN(require("@emotion/is-prop-valid").default);
} catch {
}
function uN(o, l, c) {
  const p = {};
  for (const y in o)
    y === "values" && typeof o.values == "object" || (Db(y) || c === !0 && pg(y) || !l && !pg(y) || // If trying to use native HTML drag events, forward drag listeners
    o.draggable && y.startsWith("onDrag")) && (p[y] = o[y]);
  return p;
}
const J1 = /* @__PURE__ */ new Set();
function av(o, l, c) {
  o || J1.has(l) || (console.warn(l), J1.add(l));
}
function sN(o) {
  if (typeof Proxy > "u")
    return o;
  const l = /* @__PURE__ */ new Map(), c = (...p) => (process.env.NODE_ENV !== "production" && av(!1, "motion() is deprecated. Use motion.create() instead."), o(...p));
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (p, y) => y === "create" ? o : (l.has(y) || l.set(y, o(y)), l.get(y))
  });
}
const Eg = st.createContext({});
function ev(o) {
  return typeof o == "string" || Array.isArray(o);
}
function Tg(o) {
  return o !== null && typeof o == "object" && typeof o.start == "function";
}
const DE = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], _E = ["initial", ...DE];
function xg(o) {
  return Tg(o.animate) || _E.some((l) => ev(o[l]));
}
function _b(o) {
  return !!(xg(o) || o.variants);
}
function cN(o, l) {
  if (xg(o)) {
    const { initial: c, animate: p } = o;
    return {
      initial: c === !1 || ev(c) ? c : void 0,
      animate: ev(p) ? p : void 0
    };
  }
  return o.inherit !== !1 ? l : {};
}
function fN(o) {
  const { initial: l, animate: c } = cN(o, st.useContext(Eg));
  return st.useMemo(() => ({ initial: l, animate: c }), [ew(l), ew(c)]);
}
function ew(o) {
  return Array.isArray(o) ? o.join(" ") : o;
}
const dN = Symbol.for("motionComponentSymbol");
function bd(o) {
  return o && typeof o == "object" && Object.prototype.hasOwnProperty.call(o, "current");
}
function pN(o, l, c) {
  return st.useCallback(
    (p) => {
      p && o.onMount && o.onMount(p), l && (p ? l.mount(p) : l.unmount()), c && (typeof c == "function" ? c(p) : bd(c) && (c.current = p));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [l]
  );
}
const kE = (o) => o.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), hN = "framerAppearId", kb = "data-" + kE(hN), { schedule: ME } = wb(queueMicrotask, !1), Mb = st.createContext({});
function vN(o, l, c, p, y) {
  var E, v;
  const { visualElement: w } = st.useContext(Eg), R = st.useContext(bb), b = st.useContext(TE), M = st.useContext(xE).reducedMotion, k = st.useRef(null);
  p = p || R.renderer, !k.current && p && (k.current = p(o, {
    visualState: l,
    parent: w,
    props: c,
    presenceContext: b,
    blockInitialAnimation: b ? b.initial === !1 : !1,
    reducedMotionConfig: M
  }));
  const L = k.current, F = st.useContext(Mb);
  L && !L.projection && y && (L.type === "html" || L.type === "svg") && mN(k.current, c, y, F);
  const q = st.useRef(!1);
  st.useInsertionEffect(() => {
    L && q.current && L.update(c, b);
  });
  const te = c[kb], ae = st.useRef(!!te && !(!((E = window.MotionHandoffIsComplete) === null || E === void 0) && E.call(window, te)) && ((v = window.MotionHasOptimisedAnimation) === null || v === void 0 ? void 0 : v.call(window, te)));
  return wE(() => {
    L && (q.current = !0, window.MotionIsMounted = !0, L.updateFeatures(), ME.render(L.render), ae.current && L.animationState && L.animationState.animateChanges());
  }), st.useEffect(() => {
    L && (!ae.current && L.animationState && L.animationState.animateChanges(), ae.current && (queueMicrotask(() => {
      var de;
      (de = window.MotionHandoffMarkAsComplete) === null || de === void 0 || de.call(window, te);
    }), ae.current = !1));
  }), L;
}
function mN(o, l, c, p) {
  const { layoutId: y, layout: E, drag: v, dragConstraints: w, layoutScroll: R, layoutRoot: b } = l;
  o.projection = new c(o.latestValues, l["data-framer-portal-id"] ? void 0 : Ob(o.parent)), o.projection.setOptions({
    layoutId: y,
    layout: E,
    alwaysMeasureLayout: !!v || w && bd(w),
    visualElement: o,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof E == "string" ? E : "both",
    initialPromotionConfig: p,
    layoutScroll: R,
    layoutRoot: b
  });
}
function Ob(o) {
  if (o)
    return o.options.allowProjection !== !1 ? o.projection : Ob(o.parent);
}
function yN({ preloadedFeatures: o, createVisualElement: l, useRender: c, useVisualState: p, Component: y }) {
  var E, v;
  o && aN(o);
  function w(b, M) {
    let k;
    const L = {
      ...st.useContext(xE),
      ...b,
      layoutId: gN(b)
    }, { isStatic: F } = L, q = fN(b), te = p(b, F);
    if (!F && RE) {
      SN(L, o);
      const ae = CN(L);
      k = ae.MeasureLayout, q.visualElement = vN(y, te, L, l, ae.ProjectionNode);
    }
    return mn.jsxs(Eg.Provider, { value: q, children: [k && q.visualElement ? mn.jsx(k, { visualElement: q.visualElement, ...L }) : null, c(y, b, pN(te, q.visualElement, M), te, F, q.visualElement)] });
  }
  w.displayName = `motion.${typeof y == "string" ? y : `create(${(v = (E = y.displayName) !== null && E !== void 0 ? E : y.name) !== null && v !== void 0 ? v : ""})`}`;
  const R = st.forwardRef(w);
  return R[dN] = y, R;
}
function gN({ layoutId: o }) {
  const l = st.useContext(Rb).id;
  return l && o !== void 0 ? l + "-" + o : o;
}
function SN(o, l) {
  const c = st.useContext(bb).strict;
  if (process.env.NODE_ENV !== "production" && l && c) {
    const p = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    o.ignoreStrict ? Vc(!1, p) : ps(!1, p);
  }
}
function CN(o) {
  const { drag: l, layout: c } = Od;
  if (!l && !c)
    return {};
  const p = { ...l, ...c };
  return {
    MeasureLayout: l != null && l.isEnabled(o) || c != null && c.isEnabled(o) ? p.MeasureLayout : void 0,
    ProjectionNode: p.ProjectionNode
  };
}
const EN = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function OE(o) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof o != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    o.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(EN.indexOf(o) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(o))
    )
  );
}
function tw(o) {
  const l = [{}, {}];
  return o == null || o.values.forEach((c, p) => {
    l[0][p] = c.get(), l[1][p] = c.getVelocity();
  }), l;
}
function AE(o, l, c, p) {
  if (typeof l == "function") {
    const [y, E] = tw(p);
    l = l(c !== void 0 ? c : o.custom, y, E);
  }
  if (typeof l == "string" && (l = o.variants && o.variants[l]), typeof l == "function") {
    const [y, E] = tw(p);
    l = l(c !== void 0 ? c : o.custom, y, E);
  }
  return l;
}
const aE = (o) => Array.isArray(o), TN = (o) => !!(o && typeof o == "object" && o.mix && o.toValue), xN = (o) => aE(o) ? o[o.length - 1] || 0 : o, mi = (o) => !!(o && o.getVelocity);
function ug(o) {
  const l = mi(o) ? o.get() : o;
  return TN(l) ? l.toValue() : l;
}
function RN({ scrapeMotionValuesFromProps: o, createRenderState: l, onUpdate: c }, p, y, E) {
  const v = {
    latestValues: wN(p, y, E, o),
    renderState: l()
  };
  return c && (v.onMount = (w) => c({ props: p, current: w, ...v }), v.onUpdate = (w) => c(w)), v;
}
const Ab = (o) => (l, c) => {
  const p = st.useContext(Eg), y = st.useContext(TE), E = () => RN(o, l, p, y);
  return c ? E() : Cg(E);
};
function wN(o, l, c, p) {
  const y = {}, E = p(o, {});
  for (const L in E)
    y[L] = ug(E[L]);
  let { initial: v, animate: w } = o;
  const R = xg(o), b = _b(o);
  l && b && !R && o.inherit !== !1 && (v === void 0 && (v = l.initial), w === void 0 && (w = l.animate));
  let M = c ? c.initial === !1 : !1;
  M = M || v === !1;
  const k = M ? w : v;
  if (k && typeof k != "boolean" && !Tg(k)) {
    const L = Array.isArray(k) ? k : [k];
    for (let F = 0; F < L.length; F++) {
      const q = AE(o, L[F]);
      if (q) {
        const { transitionEnd: te, transition: ae, ...de } = q;
        for (const he in de) {
          let pe = de[he];
          if (Array.isArray(pe)) {
            const Oe = M ? pe.length - 1 : 0;
            pe = pe[Oe];
          }
          pe !== null && (y[he] = pe);
        }
        for (const he in te)
          y[he] = te[he];
      }
    }
  }
  return y;
}
const Ld = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], zc = new Set(Ld), Lb = (o) => (l) => typeof l == "string" && l.startsWith(o), Nb = /* @__PURE__ */ Lb("--"), bN = /* @__PURE__ */ Lb("var(--"), LE = (o) => bN(o) ? DN.test(o.split("/*")[0].trim()) : !1, DN = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Pb = (o, l) => l && typeof o == "number" ? l.transform(o) : o, gl = (o, l, c) => c > l ? l : c < o ? o : c, Nd = {
  test: (o) => typeof o == "number",
  parse: parseFloat,
  transform: (o) => o
}, tv = {
  ...Nd,
  transform: (o) => gl(0, 1, o)
}, og = {
  ...Nd,
  default: 1
}, ov = (o) => ({
  test: (l) => typeof l == "string" && l.endsWith(o) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${o}`
}), fs = /* @__PURE__ */ ov("deg"), ml = /* @__PURE__ */ ov("%"), tt = /* @__PURE__ */ ov("px"), _N = /* @__PURE__ */ ov("vh"), kN = /* @__PURE__ */ ov("vw"), nw = {
  ...ml,
  parse: (o) => ml.parse(o) / 100,
  transform: (o) => ml.transform(o * 100)
}, MN = {
  // Border props
  borderWidth: tt,
  borderTopWidth: tt,
  borderRightWidth: tt,
  borderBottomWidth: tt,
  borderLeftWidth: tt,
  borderRadius: tt,
  radius: tt,
  borderTopLeftRadius: tt,
  borderTopRightRadius: tt,
  borderBottomRightRadius: tt,
  borderBottomLeftRadius: tt,
  // Positioning props
  width: tt,
  maxWidth: tt,
  height: tt,
  maxHeight: tt,
  top: tt,
  right: tt,
  bottom: tt,
  left: tt,
  // Spacing props
  padding: tt,
  paddingTop: tt,
  paddingRight: tt,
  paddingBottom: tt,
  paddingLeft: tt,
  margin: tt,
  marginTop: tt,
  marginRight: tt,
  marginBottom: tt,
  marginLeft: tt,
  // Misc
  backgroundPositionX: tt,
  backgroundPositionY: tt
}, ON = {
  rotate: fs,
  rotateX: fs,
  rotateY: fs,
  rotateZ: fs,
  scale: og,
  scaleX: og,
  scaleY: og,
  scaleZ: og,
  skew: fs,
  skewX: fs,
  skewY: fs,
  distance: tt,
  translateX: tt,
  translateY: tt,
  translateZ: tt,
  x: tt,
  y: tt,
  z: tt,
  perspective: tt,
  transformPerspective: tt,
  opacity: tv,
  originX: nw,
  originY: nw,
  originZ: tt
}, rw = {
  ...Nd,
  transform: Math.round
}, NE = {
  ...MN,
  ...ON,
  zIndex: rw,
  size: tt,
  // SVG
  fillOpacity: tv,
  strokeOpacity: tv,
  numOctaves: rw
}, AN = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, LN = Ld.length;
function NN(o, l, c) {
  let p = "", y = !0;
  for (let E = 0; E < LN; E++) {
    const v = Ld[E], w = o[v];
    if (w === void 0)
      continue;
    let R = !0;
    if (typeof w == "number" ? R = w === (v.startsWith("scale") ? 1 : 0) : R = parseFloat(w) === 0, !R || c) {
      const b = Pb(w, NE[v]);
      if (!R) {
        y = !1;
        const M = AN[v] || v;
        p += `${M}(${b}) `;
      }
      c && (l[v] = b);
    }
  }
  return p = p.trim(), c ? p = c(l, y ? "" : p) : y && (p = "none"), p;
}
function PE(o, l, c) {
  const { style: p, vars: y, transformOrigin: E } = o;
  let v = !1, w = !1;
  for (const R in l) {
    const b = l[R];
    if (zc.has(R)) {
      v = !0;
      continue;
    } else if (Nb(R)) {
      y[R] = b;
      continue;
    } else {
      const M = Pb(b, NE[R]);
      R.startsWith("origin") ? (w = !0, E[R] = M) : p[R] = M;
    }
  }
  if (l.transform || (v || c ? p.transform = NN(l, o.transform, c) : p.transform && (p.transform = "none")), w) {
    const { originX: R = "50%", originY: b = "50%", originZ: M = 0 } = E;
    p.transformOrigin = `${R} ${b} ${M}`;
  }
}
const PN = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, UN = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function VN(o, l, c = 1, p = 0, y = !0) {
  o.pathLength = 1;
  const E = y ? PN : UN;
  o[E.offset] = tt.transform(-p);
  const v = tt.transform(l), w = tt.transform(c);
  o[E.array] = `${v} ${w}`;
}
function iw(o, l, c) {
  return typeof o == "string" ? o : tt.transform(l + c * o);
}
function zN(o, l, c) {
  const p = iw(l, o.x, o.width), y = iw(c, o.y, o.height);
  return `${p} ${y}`;
}
function UE(o, {
  attrX: l,
  attrY: c,
  attrScale: p,
  originX: y,
  originY: E,
  pathLength: v,
  pathSpacing: w = 1,
  pathOffset: R = 0,
  // This is object creation, which we try to avoid per-frame.
  ...b
}, M, k) {
  if (PE(o, b, k), M) {
    o.style.viewBox && (o.attrs.viewBox = o.style.viewBox);
    return;
  }
  o.attrs = o.style, o.style = {};
  const { attrs: L, style: F, dimensions: q } = o;
  L.transform && (q && (F.transform = L.transform), delete L.transform), q && (y !== void 0 || E !== void 0 || F.transform) && (F.transformOrigin = zN(q, y !== void 0 ? y : 0.5, E !== void 0 ? E : 0.5)), l !== void 0 && (L.x = l), c !== void 0 && (L.y = c), p !== void 0 && (L.scale = p), v !== void 0 && VN(L, v, w, R, !1);
}
const VE = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Ub = () => ({
  ...VE(),
  attrs: {}
}), zE = (o) => typeof o == "string" && o.toLowerCase() === "svg";
function Vb(o, { style: l, vars: c }, p, y) {
  Object.assign(o.style, l, y && y.getProjectionStyles(p));
  for (const E in c)
    o.style.setProperty(E, c[E]);
}
const zb = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Fb(o, l, c, p) {
  Vb(o, l, void 0, p);
  for (const y in l.attrs)
    o.setAttribute(zb.has(y) ? y : kE(y), l.attrs[y]);
}
const hg = {};
function FN(o) {
  Object.assign(hg, o);
}
function jb(o, { layout: l, layoutId: c }) {
  return zc.has(o) || o.startsWith("origin") || (l || c !== void 0) && (!!hg[o] || o === "opacity");
}
function FE(o, l, c) {
  var p;
  const { style: y } = o, E = {};
  for (const v in y)
    (mi(y[v]) || l.style && mi(l.style[v]) || jb(v, o) || ((p = c == null ? void 0 : c.getValue(v)) === null || p === void 0 ? void 0 : p.liveStyle) !== void 0) && (E[v] = y[v]);
  return E;
}
function Bb(o, l, c) {
  const p = FE(o, l, c);
  for (const y in o)
    if (mi(o[y]) || mi(l[y])) {
      const E = Ld.indexOf(y) !== -1 ? "attr" + y.charAt(0).toUpperCase() + y.substring(1) : y;
      p[E] = o[y];
    }
  return p;
}
function jN(o, l) {
  try {
    l.dimensions = typeof o.getBBox == "function" ? o.getBBox() : o.getBoundingClientRect();
  } catch {
    l.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const aw = ["x", "y", "width", "height", "cx", "cy", "r"], BN = {
  useVisualState: Ab({
    scrapeMotionValuesFromProps: Bb,
    createRenderState: Ub,
    onUpdate: ({ props: o, prevProps: l, current: c, renderState: p, latestValues: y }) => {
      if (!c)
        return;
      let E = !!o.drag;
      if (!E) {
        for (const w in y)
          if (zc.has(w)) {
            E = !0;
            break;
          }
      }
      if (!E)
        return;
      let v = !l;
      if (l)
        for (let w = 0; w < aw.length; w++) {
          const R = aw[w];
          o[R] !== l[R] && (v = !0);
        }
      v && Kt.read(() => {
        jN(c, p), Kt.render(() => {
          UE(p, y, zE(c.tagName), o.transformTemplate), Fb(c, p);
        });
      });
    }
  })
}, HN = {
  useVisualState: Ab({
    scrapeMotionValuesFromProps: FE,
    createRenderState: VE
  })
};
function Hb(o, l, c) {
  for (const p in l)
    !mi(l[p]) && !jb(p, c) && (o[p] = l[p]);
}
function IN({ transformTemplate: o }, l) {
  return st.useMemo(() => {
    const c = VE();
    return PE(c, l, o), Object.assign({}, c.vars, c.style);
  }, [l]);
}
function YN(o, l) {
  const c = o.style || {}, p = {};
  return Hb(p, c, o), Object.assign(p, IN(o, l)), p;
}
function WN(o, l) {
  const c = {}, p = YN(o, l);
  return o.drag && o.dragListener !== !1 && (c.draggable = !1, p.userSelect = p.WebkitUserSelect = p.WebkitTouchCallout = "none", p.touchAction = o.drag === !0 ? "none" : `pan-${o.drag === "x" ? "y" : "x"}`), o.tabIndex === void 0 && (o.onTap || o.onTapStart || o.whileTap) && (c.tabIndex = 0), c.style = p, c;
}
function $N(o, l, c, p) {
  const y = st.useMemo(() => {
    const E = Ub();
    return UE(E, l, zE(p), o.transformTemplate), {
      ...E.attrs,
      style: { ...E.style }
    };
  }, [l]);
  if (o.style) {
    const E = {};
    Hb(E, o.style, o), y.style = { ...E, ...y.style };
  }
  return y;
}
function GN(o = !1) {
  return (c, p, y, { latestValues: E }, v) => {
    const R = (OE(c) ? $N : WN)(p, E, v, c), b = uN(p, typeof c == "string", o), M = c !== st.Fragment ? { ...b, ...R, ref: y } : {}, { children: k } = p, L = st.useMemo(() => mi(k) ? k.get() : k, [k]);
    return st.createElement(c, {
      ...M,
      children: L
    });
  };
}
function KN(o, l) {
  return function(p, { forwardMotionProps: y } = { forwardMotionProps: !1 }) {
    const v = {
      ...OE(p) ? BN : HN,
      preloadedFeatures: o,
      useRender: GN(y),
      createVisualElement: l,
      Component: p
    };
    return yN(v);
  };
}
function Ib(o, l) {
  if (!Array.isArray(l))
    return !1;
  const c = l.length;
  if (c !== o.length)
    return !1;
  for (let p = 0; p < c; p++)
    if (l[p] !== o[p])
      return !1;
  return !0;
}
function Rg(o, l, c) {
  const p = o.getProps();
  return AE(p, l, c !== void 0 ? c : p.custom, o);
}
const Yb = /* @__PURE__ */ bE(() => window.ScrollTimeline !== void 0);
class QN {
  constructor(l) {
    this.stop = () => this.runAll("stop"), this.animations = l.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((l) => "finished" in l ? l.finished : l));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(l) {
    return this.animations[0][l];
  }
  setAll(l, c) {
    for (let p = 0; p < this.animations.length; p++)
      this.animations[p][l] = c;
  }
  attachTimeline(l, c) {
    const p = this.animations.map((y) => {
      if (Yb() && y.attachTimeline)
        return y.attachTimeline(l);
      if (typeof c == "function")
        return c(y);
    });
    return () => {
      p.forEach((y, E) => {
        y && y(), this.animations[E].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(l) {
    this.setAll("time", l);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(l) {
    this.setAll("speed", l);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let l = 0;
    for (let c = 0; c < this.animations.length; c++)
      l = Math.max(l, this.animations[c].duration);
    return l;
  }
  runAll(l) {
    this.animations.forEach((c) => c[l]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class qN extends QN {
  then(l, c) {
    return Promise.all(this.animations).then(l).catch(c);
  }
}
function jE(o, l) {
  return o ? o[l] || o.default || o : void 0;
}
const oE = 2e4;
function Wb(o) {
  let l = 0;
  const c = 50;
  let p = o.next(l);
  for (; !p.done && l < oE; )
    l += c, p = o.next(l);
  return l >= oE ? 1 / 0 : l;
}
function BE(o) {
  return typeof o == "function";
}
function ow(o, l) {
  o.timeline = l, o.onfinish = null;
}
const HE = (o) => Array.isArray(o) && typeof o[0] == "number", XN = {
  linearEasing: void 0
};
function ZN(o, l) {
  const c = /* @__PURE__ */ bE(o);
  return () => {
    var p;
    return (p = XN[l]) !== null && p !== void 0 ? p : c();
  };
}
const vg = /* @__PURE__ */ ZN(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), $b = (o, l, c = 10) => {
  let p = "";
  const y = Math.max(Math.round(l / c), 2);
  for (let E = 0; E < y; E++)
    p += o(/* @__PURE__ */ Uc(0, y - 1, E)) + ", ";
  return `linear(${p.substring(0, p.length - 2)})`;
};
function Gb(o) {
  return !!(typeof o == "function" && vg() || !o || typeof o == "string" && (o in lE || vg()) || HE(o) || Array.isArray(o) && o.every(Gb));
}
const Wh = ([o, l, c, p]) => `cubic-bezier(${o}, ${l}, ${c}, ${p})`, lE = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Wh([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Wh([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Wh([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Wh([0.33, 1.53, 0.69, 0.99])
};
function Kb(o, l) {
  if (o)
    return typeof o == "function" && vg() ? $b(o, l) : HE(o) ? Wh(o) : Array.isArray(o) ? o.map((c) => Kb(c, l) || lE.easeOut) : lE[o];
}
const bo = {
  x: !1,
  y: !1
};
function Qb() {
  return bo.x || bo.y;
}
function qb(o, l, c) {
  var p;
  if (o instanceof Element)
    return [o];
  if (typeof o == "string") {
    let y = document;
    const E = (p = void 0) !== null && p !== void 0 ? p : y.querySelectorAll(o);
    return E ? Array.from(E) : [];
  }
  return Array.from(o);
}
function Xb(o, l) {
  const c = qb(o), p = new AbortController(), y = {
    passive: !0,
    ...l,
    signal: p.signal
  };
  return [c, y, () => p.abort()];
}
function lw(o) {
  return (l) => {
    l.pointerType === "touch" || Qb() || o(l);
  };
}
function JN(o, l, c = {}) {
  const [p, y, E] = Xb(o, c), v = lw((w) => {
    const { target: R } = w, b = l(w);
    if (typeof b != "function" || !R)
      return;
    const M = lw((k) => {
      b(k), R.removeEventListener("pointerleave", M);
    });
    R.addEventListener("pointerleave", M, y);
  });
  return p.forEach((w) => {
    w.addEventListener("pointerenter", v, y);
  }), E;
}
const Zb = (o, l) => l ? o === l ? !0 : Zb(o, l.parentElement) : !1, IE = (o) => o.pointerType === "mouse" ? typeof o.button != "number" || o.button <= 0 : o.isPrimary !== !1, eP = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function tP(o) {
  return eP.has(o.tagName) || o.tabIndex !== -1;
}
const $h = /* @__PURE__ */ new WeakSet();
function uw(o) {
  return (l) => {
    l.key === "Enter" && o(l);
  };
}
function WC(o, l) {
  o.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const nP = (o, l) => {
  const c = o.currentTarget;
  if (!c)
    return;
  const p = uw(() => {
    if ($h.has(c))
      return;
    WC(c, "down");
    const y = uw(() => {
      WC(c, "up");
    }), E = () => WC(c, "cancel");
    c.addEventListener("keyup", y, l), c.addEventListener("blur", E, l);
  });
  c.addEventListener("keydown", p, l), c.addEventListener("blur", () => c.removeEventListener("keydown", p), l);
};
function sw(o) {
  return IE(o) && !Qb();
}
function rP(o, l, c = {}) {
  const [p, y, E] = Xb(o, c), v = (w) => {
    const R = w.currentTarget;
    if (!sw(w) || $h.has(R))
      return;
    $h.add(R);
    const b = l(w), M = (F, q) => {
      window.removeEventListener("pointerup", k), window.removeEventListener("pointercancel", L), !(!sw(F) || !$h.has(R)) && ($h.delete(R), typeof b == "function" && b(F, { success: q }));
    }, k = (F) => {
      M(F, c.useGlobalTarget || Zb(R, F.target));
    }, L = (F) => {
      M(F, !1);
    };
    window.addEventListener("pointerup", k, y), window.addEventListener("pointercancel", L, y);
  };
  return p.forEach((w) => {
    !tP(w) && w.getAttribute("tabindex") === null && (w.tabIndex = 0), (c.useGlobalTarget ? window : w).addEventListener("pointerdown", v, y), w.addEventListener("focus", (b) => nP(b, y), y);
  }), E;
}
function iP(o) {
  return o === "x" || o === "y" ? bo[o] ? null : (bo[o] = !0, () => {
    bo[o] = !1;
  }) : bo.x || bo.y ? null : (bo.x = bo.y = !0, () => {
    bo.x = bo.y = !1;
  });
}
const Jb = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ld
]);
let sg;
function aP() {
  sg = void 0;
}
const yl = {
  now: () => (sg === void 0 && yl.set(Or.isProcessing || nN.useManualTiming ? Or.timestamp : performance.now()), sg),
  set: (o) => {
    sg = o, queueMicrotask(aP);
  }
};
function YE(o, l) {
  o.indexOf(l) === -1 && o.push(l);
}
function WE(o, l) {
  const c = o.indexOf(l);
  c > -1 && o.splice(c, 1);
}
class $E {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return YE(this.subscriptions, l), () => WE(this.subscriptions, l);
  }
  notify(l, c, p) {
    const y = this.subscriptions.length;
    if (y)
      if (y === 1)
        this.subscriptions[0](l, c, p);
      else
        for (let E = 0; E < y; E++) {
          const v = this.subscriptions[E];
          v && v(l, c, p);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function GE(o, l) {
  return l ? o * (1e3 / l) : 0;
}
const cw = 30, oP = (o) => !isNaN(parseFloat(o)), Kh = {
  current: void 0
};
class lP {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(l, c = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (p, y = !0) => {
      const E = yl.now();
      this.updatedAt !== E && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(p), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), y && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = c.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = yl.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = oP(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return process.env.NODE_ENV !== "production" && av(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", l);
  }
  on(l, c) {
    this.events[l] || (this.events[l] = new $E());
    const p = this.events[l].add(c);
    return l === "change" ? () => {
      p(), Kt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : p;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(l, c) {
    this.passiveEffect = l, this.stopPassiveEffect = c;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l, c = !0) {
    !c || !this.passiveEffect ? this.updateAndNotify(l, c) : this.passiveEffect(l, this.updateAndNotify);
  }
  setWithVelocity(l, c, p) {
    this.set(c), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - p;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, c = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, c && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return Kh.current && Kh.current.push(this), this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = yl.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > cw)
      return 0;
    const c = Math.min(this.updatedAt - this.prevUpdatedAt, cw);
    return GE(parseFloat(this.current) - parseFloat(this.prevFrameValue), c);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(l) {
    return this.stop(), new Promise((c) => {
      this.hasAnimated = !0, this.animation = l(c), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function hl(o, l) {
  return new lP(o, l);
}
function uP(o, l, c) {
  o.hasValue(l) ? o.getValue(l).set(c) : o.addValue(l, hl(c));
}
function sP(o, l) {
  const c = Rg(o, l);
  let { transitionEnd: p = {}, transition: y = {}, ...E } = c || {};
  E = { ...E, ...p };
  for (const v in E) {
    const w = xN(E[v]);
    uP(o, v, w);
  }
}
function cP(o) {
  return !!(mi(o) && o.add);
}
function uE(o, l) {
  const c = o.getValue("willChange");
  if (cP(c))
    return c.add(l);
}
function eD(o) {
  return o.props[kb];
}
const tD = (o, l, c) => (((1 - 3 * c + 3 * l) * o + (3 * c - 6 * l)) * o + 3 * l) * o, fP = 1e-7, dP = 12;
function pP(o, l, c, p, y) {
  let E, v, w = 0;
  do
    v = l + (c - l) / 2, E = tD(v, p, y) - o, E > 0 ? c = v : l = v;
  while (Math.abs(E) > fP && ++w < dP);
  return v;
}
function lv(o, l, c, p) {
  if (o === l && c === p)
    return Ai;
  const y = (E) => pP(E, 0, 1, o, c);
  return (E) => E === 0 || E === 1 ? E : tD(y(E), l, p);
}
const nD = (o) => (l) => l <= 0.5 ? o(2 * l) / 2 : (2 - o(2 * (1 - l))) / 2, rD = (o) => (l) => 1 - o(1 - l), iD = /* @__PURE__ */ lv(0.33, 1.53, 0.69, 0.99), KE = /* @__PURE__ */ rD(iD), aD = /* @__PURE__ */ nD(KE), oD = (o) => (o *= 2) < 1 ? 0.5 * KE(o) : 0.5 * (2 - Math.pow(2, -10 * (o - 1))), QE = (o) => 1 - Math.sin(Math.acos(o)), lD = rD(QE), uD = nD(QE), sD = (o) => /^0[^.\s]+$/u.test(o);
function hP(o) {
  return typeof o == "number" ? o === 0 : o !== null ? o === "none" || o === "0" || sD(o) : !0;
}
const Qh = (o) => Math.round(o * 1e5) / 1e5, qE = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function vP(o) {
  return o == null;
}
const mP = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, XE = (o, l) => (c) => !!(typeof c == "string" && mP.test(c) && c.startsWith(o) || l && !vP(c) && Object.prototype.hasOwnProperty.call(c, l)), cD = (o, l, c) => (p) => {
  if (typeof p != "string")
    return p;
  const [y, E, v, w] = p.match(qE);
  return {
    [o]: parseFloat(y),
    [l]: parseFloat(E),
    [c]: parseFloat(v),
    alpha: w !== void 0 ? parseFloat(w) : 1
  };
}, yP = (o) => gl(0, 255, o), $C = {
  ...Nd,
  transform: (o) => Math.round(yP(o))
}, Nc = {
  test: /* @__PURE__ */ XE("rgb", "red"),
  parse: /* @__PURE__ */ cD("red", "green", "blue"),
  transform: ({ red: o, green: l, blue: c, alpha: p = 1 }) => "rgba(" + $C.transform(o) + ", " + $C.transform(l) + ", " + $C.transform(c) + ", " + Qh(tv.transform(p)) + ")"
};
function gP(o) {
  let l = "", c = "", p = "", y = "";
  return o.length > 5 ? (l = o.substring(1, 3), c = o.substring(3, 5), p = o.substring(5, 7), y = o.substring(7, 9)) : (l = o.substring(1, 2), c = o.substring(2, 3), p = o.substring(3, 4), y = o.substring(4, 5), l += l, c += c, p += p, y += y), {
    red: parseInt(l, 16),
    green: parseInt(c, 16),
    blue: parseInt(p, 16),
    alpha: y ? parseInt(y, 16) / 255 : 1
  };
}
const sE = {
  test: /* @__PURE__ */ XE("#"),
  parse: gP,
  transform: Nc.transform
}, Dd = {
  test: /* @__PURE__ */ XE("hsl", "hue"),
  parse: /* @__PURE__ */ cD("hue", "saturation", "lightness"),
  transform: ({ hue: o, saturation: l, lightness: c, alpha: p = 1 }) => "hsla(" + Math.round(o) + ", " + ml.transform(Qh(l)) + ", " + ml.transform(Qh(c)) + ", " + Qh(tv.transform(p)) + ")"
}, vi = {
  test: (o) => Nc.test(o) || sE.test(o) || Dd.test(o),
  parse: (o) => Nc.test(o) ? Nc.parse(o) : Dd.test(o) ? Dd.parse(o) : sE.parse(o),
  transform: (o) => typeof o == "string" ? o : o.hasOwnProperty("red") ? Nc.transform(o) : Dd.transform(o)
}, SP = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function CP(o) {
  var l, c;
  return isNaN(o) && typeof o == "string" && (((l = o.match(qE)) === null || l === void 0 ? void 0 : l.length) || 0) + (((c = o.match(SP)) === null || c === void 0 ? void 0 : c.length) || 0) > 0;
}
const fD = "number", dD = "color", EP = "var", TP = "var(", fw = "${}", xP = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function nv(o) {
  const l = o.toString(), c = [], p = {
    color: [],
    number: [],
    var: []
  }, y = [];
  let E = 0;
  const w = l.replace(xP, (R) => (vi.test(R) ? (p.color.push(E), y.push(dD), c.push(vi.parse(R))) : R.startsWith(TP) ? (p.var.push(E), y.push(EP), c.push(R)) : (p.number.push(E), y.push(fD), c.push(parseFloat(R))), ++E, fw)).split(fw);
  return { values: c, split: w, indexes: p, types: y };
}
function pD(o) {
  return nv(o).values;
}
function hD(o) {
  const { split: l, types: c } = nv(o), p = l.length;
  return (y) => {
    let E = "";
    for (let v = 0; v < p; v++)
      if (E += l[v], y[v] !== void 0) {
        const w = c[v];
        w === fD ? E += Qh(y[v]) : w === dD ? E += vi.transform(y[v]) : E += y[v];
      }
    return E;
  };
}
const RP = (o) => typeof o == "number" ? 0 : o;
function wP(o) {
  const l = pD(o);
  return hD(o)(l.map(RP));
}
const hs = {
  test: CP,
  parse: pD,
  createTransformer: hD,
  getAnimatableNone: wP
}, bP = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function DP(o) {
  const [l, c] = o.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return o;
  const [p] = c.match(qE) || [];
  if (!p)
    return o;
  const y = c.replace(p, "");
  let E = bP.has(l) ? 1 : 0;
  return p !== c && (E *= 100), l + "(" + E + y + ")";
}
const _P = /\b([a-z-]*)\(.*?\)/gu, cE = {
  ...hs,
  getAnimatableNone: (o) => {
    const l = o.match(_P);
    return l ? l.map(DP).join(" ") : o;
  }
}, kP = {
  ...NE,
  // Color props
  color: vi,
  backgroundColor: vi,
  outlineColor: vi,
  fill: vi,
  stroke: vi,
  // Border props
  borderColor: vi,
  borderTopColor: vi,
  borderRightColor: vi,
  borderBottomColor: vi,
  borderLeftColor: vi,
  filter: cE,
  WebkitFilter: cE
}, ZE = (o) => kP[o];
function vD(o, l) {
  let c = ZE(o);
  return c !== cE && (c = hs), c.getAnimatableNone ? c.getAnimatableNone(l) : void 0;
}
const MP = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function OP(o, l, c) {
  let p = 0, y;
  for (; p < o.length && !y; ) {
    const E = o[p];
    typeof E == "string" && !MP.has(E) && nv(E).values.length && (y = o[p]), p++;
  }
  if (y && c)
    for (const E of l)
      o[E] = vD(c, y);
}
const dw = (o) => o === Nd || o === tt, pw = (o, l) => parseFloat(o.split(", ")[l]), hw = (o, l) => (c, { transform: p }) => {
  if (p === "none" || !p)
    return 0;
  const y = p.match(/^matrix3d\((.+)\)$/u);
  if (y)
    return pw(y[1], l);
  {
    const E = p.match(/^matrix\((.+)\)$/u);
    return E ? pw(E[1], o) : 0;
  }
}, AP = /* @__PURE__ */ new Set(["x", "y", "z"]), LP = Ld.filter((o) => !AP.has(o));
function NP(o) {
  const l = [];
  return LP.forEach((c) => {
    const p = o.getValue(c);
    p !== void 0 && (l.push([c, p.get()]), p.set(c.startsWith("scale") ? 1 : 0));
  }), l;
}
const Ad = {
  // Dimensions
  width: ({ x: o }, { paddingLeft: l = "0", paddingRight: c = "0" }) => o.max - o.min - parseFloat(l) - parseFloat(c),
  height: ({ y: o }, { paddingTop: l = "0", paddingBottom: c = "0" }) => o.max - o.min - parseFloat(l) - parseFloat(c),
  top: (o, { top: l }) => parseFloat(l),
  left: (o, { left: l }) => parseFloat(l),
  bottom: ({ y: o }, { top: l }) => parseFloat(l) + (o.max - o.min),
  right: ({ x: o }, { left: l }) => parseFloat(l) + (o.max - o.min),
  // Transform
  x: hw(4, 13),
  y: hw(5, 14)
};
Ad.translateX = Ad.x;
Ad.translateY = Ad.y;
const Pc = /* @__PURE__ */ new Set();
let fE = !1, dE = !1;
function mD() {
  if (dE) {
    const o = Array.from(Pc).filter((p) => p.needsMeasurement), l = new Set(o.map((p) => p.element)), c = /* @__PURE__ */ new Map();
    l.forEach((p) => {
      const y = NP(p);
      y.length && (c.set(p, y), p.render());
    }), o.forEach((p) => p.measureInitialState()), l.forEach((p) => {
      p.render();
      const y = c.get(p);
      y && y.forEach(([E, v]) => {
        var w;
        (w = p.getValue(E)) === null || w === void 0 || w.set(v);
      });
    }), o.forEach((p) => p.measureEndState()), o.forEach((p) => {
      p.suspendedScrollY !== void 0 && window.scrollTo(0, p.suspendedScrollY);
    });
  }
  dE = !1, fE = !1, Pc.forEach((o) => o.complete()), Pc.clear();
}
function yD() {
  Pc.forEach((o) => {
    o.readKeyframes(), o.needsMeasurement && (dE = !0);
  });
}
function PP() {
  yD(), mD();
}
class JE {
  constructor(l, c, p, y, E, v = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...l], this.onComplete = c, this.name = p, this.motionValue = y, this.element = E, this.isAsync = v;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Pc.add(this), fE || (fE = !0, Kt.read(yD), Kt.resolveKeyframes(mD))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: c, element: p, motionValue: y } = this;
    for (let E = 0; E < l.length; E++)
      if (l[E] === null)
        if (E === 0) {
          const v = y == null ? void 0 : y.get(), w = l[l.length - 1];
          if (v !== void 0)
            l[0] = v;
          else if (p && c) {
            const R = p.readValue(c, w);
            R != null && (l[0] = R);
          }
          l[0] === void 0 && (l[0] = w), y && v === void 0 && y.set(l[0]);
        } else
          l[E] = l[E - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Pc.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Pc.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const gD = (o) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(o), UP = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function VP(o) {
  const l = UP.exec(o);
  if (!l)
    return [,];
  const [, c, p, y] = l;
  return [`--${c ?? p}`, y];
}
const zP = 4;
function SD(o, l, c = 1) {
  ps(c <= zP, `Max CSS variable fallback depth detected in property "${o}". This may indicate a circular fallback dependency.`);
  const [p, y] = VP(o);
  if (!p)
    return;
  const E = window.getComputedStyle(l).getPropertyValue(p);
  if (E) {
    const v = E.trim();
    return gD(v) ? parseFloat(v) : v;
  }
  return LE(y) ? SD(y, l, c + 1) : y;
}
const CD = (o) => (l) => l.test(o), FP = {
  test: (o) => o === "auto",
  parse: (o) => o
}, ED = [Nd, tt, ml, fs, kN, _N, FP], vw = (o) => ED.find(CD(o));
class TD extends JE {
  constructor(l, c, p, y, E) {
    super(l, c, p, y, E, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: c, name: p } = this;
    if (!c || !c.current)
      return;
    super.readKeyframes();
    for (let R = 0; R < l.length; R++) {
      let b = l[R];
      if (typeof b == "string" && (b = b.trim(), LE(b))) {
        const M = SD(b, c.current);
        M !== void 0 && (l[R] = M), R === l.length - 1 && (this.finalKeyframe = b);
      }
    }
    if (this.resolveNoneKeyframes(), !Jb.has(p) || l.length !== 2)
      return;
    const [y, E] = l, v = vw(y), w = vw(E);
    if (v !== w)
      if (dw(v) && dw(w))
        for (let R = 0; R < l.length; R++) {
          const b = l[R];
          typeof b == "string" && (l[R] = parseFloat(b));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: c } = this, p = [];
    for (let y = 0; y < l.length; y++)
      hP(l[y]) && p.push(y);
    p.length && OP(l, p, c);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: c, name: p } = this;
    if (!l || !l.current)
      return;
    p === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ad[p](l.measureViewportBox(), window.getComputedStyle(l.current)), c[0] = this.measuredOrigin;
    const y = c[c.length - 1];
    y !== void 0 && l.getValue(p, y).jump(y, !1);
  }
  measureEndState() {
    var l;
    const { element: c, name: p, unresolvedKeyframes: y } = this;
    if (!c || !c.current)
      return;
    const E = c.getValue(p);
    E && E.jump(this.measuredOrigin, !1);
    const v = y.length - 1, w = y[v];
    y[v] = Ad[p](c.measureViewportBox(), window.getComputedStyle(c.current)), w !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = w), !((l = this.removedTransforms) === null || l === void 0) && l.length && this.removedTransforms.forEach(([R, b]) => {
      c.getValue(R).set(b);
    }), this.resolveNoneKeyframes();
  }
}
const mw = (o, l) => l === "zIndex" ? !1 : !!(typeof o == "number" || Array.isArray(o) || typeof o == "string" && // It's animatable if we have a string
(hs.test(o) || o === "0") && // And it contains numbers and/or colors
!o.startsWith("url("));
function jP(o) {
  const l = o[0];
  if (o.length === 1)
    return !0;
  for (let c = 0; c < o.length; c++)
    if (o[c] !== l)
      return !0;
}
function BP(o, l, c, p) {
  const y = o[0];
  if (y === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const E = o[o.length - 1], v = mw(y, l), w = mw(E, l);
  return Vc(v === w, `You are trying to animate ${l} from "${y}" to "${E}". ${y} is not an animatable value - to enable this animation set ${y} to a value animatable to ${E} via the \`style\` property.`), !v || !w ? !1 : jP(o) || (c === "spring" || BE(c)) && p;
}
const HP = (o) => o !== null;
function wg(o, { repeat: l, repeatType: c = "loop" }, p) {
  const y = o.filter(HP), E = l && c !== "loop" && l % 2 === 1 ? 0 : y.length - 1;
  return !E || p === void 0 ? y[E] : p;
}
const IP = 40;
class xD {
  constructor({ autoplay: l = !0, delay: c = 0, type: p = "keyframes", repeat: y = 0, repeatDelay: E = 0, repeatType: v = "loop", ...w }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = yl.now(), this.options = {
      autoplay: l,
      delay: c,
      type: p,
      repeat: y,
      repeatDelay: E,
      repeatType: v,
      ...w
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > IP ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && PP(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(l, c) {
    this.resolvedAt = yl.now(), this.hasAttemptedResolve = !0;
    const { name: p, type: y, velocity: E, delay: v, onComplete: w, onUpdate: R, isGenerator: b } = this.options;
    if (!b && !BP(l, p, y, E))
      if (v)
        this.options.duration = 0;
      else {
        R && R(wg(l, this.options, c)), w && w(), this.resolveFinishedPromise();
        return;
      }
    const M = this.initPlayback(l, c);
    M !== !1 && (this._resolved = {
      keyframes: l,
      finalKeyframe: c,
      ...M
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, c) {
    return this.currentFinishedPromise.then(l, c);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((l) => {
      this.resolveFinishedPromise = l;
    });
  }
}
const Nn = (o, l, c) => o + (l - o) * c;
function GC(o, l, c) {
  return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? o + (l - o) * 6 * c : c < 1 / 2 ? l : c < 2 / 3 ? o + (l - o) * (2 / 3 - c) * 6 : o;
}
function YP({ hue: o, saturation: l, lightness: c, alpha: p }) {
  o /= 360, l /= 100, c /= 100;
  let y = 0, E = 0, v = 0;
  if (!l)
    y = E = v = c;
  else {
    const w = c < 0.5 ? c * (1 + l) : c + l - c * l, R = 2 * c - w;
    y = GC(R, w, o + 1 / 3), E = GC(R, w, o), v = GC(R, w, o - 1 / 3);
  }
  return {
    red: Math.round(y * 255),
    green: Math.round(E * 255),
    blue: Math.round(v * 255),
    alpha: p
  };
}
function mg(o, l) {
  return (c) => c > 0 ? l : o;
}
const KC = (o, l, c) => {
  const p = o * o, y = c * (l * l - p) + p;
  return y < 0 ? 0 : Math.sqrt(y);
}, WP = [sE, Nc, Dd], $P = (o) => WP.find((l) => l.test(o));
function yw(o) {
  const l = $P(o);
  if (Vc(!!l, `'${o}' is not an animatable color. Use the equivalent color code instead.`), !l)
    return !1;
  let c = l.parse(o);
  return l === Dd && (c = YP(c)), c;
}
const gw = (o, l) => {
  const c = yw(o), p = yw(l);
  if (!c || !p)
    return mg(o, l);
  const y = { ...c };
  return (E) => (y.red = KC(c.red, p.red, E), y.green = KC(c.green, p.green, E), y.blue = KC(c.blue, p.blue, E), y.alpha = Nn(c.alpha, p.alpha, E), Nc.transform(y));
}, GP = (o, l) => (c) => l(o(c)), uv = (...o) => o.reduce(GP), pE = /* @__PURE__ */ new Set(["none", "hidden"]);
function KP(o, l) {
  return pE.has(o) ? (c) => c <= 0 ? o : l : (c) => c >= 1 ? l : o;
}
function QP(o, l) {
  return (c) => Nn(o, l, c);
}
function eT(o) {
  return typeof o == "number" ? QP : typeof o == "string" ? LE(o) ? mg : vi.test(o) ? gw : ZP : Array.isArray(o) ? RD : typeof o == "object" ? vi.test(o) ? gw : qP : mg;
}
function RD(o, l) {
  const c = [...o], p = c.length, y = o.map((E, v) => eT(E)(E, l[v]));
  return (E) => {
    for (let v = 0; v < p; v++)
      c[v] = y[v](E);
    return c;
  };
}
function qP(o, l) {
  const c = { ...o, ...l }, p = {};
  for (const y in c)
    o[y] !== void 0 && l[y] !== void 0 && (p[y] = eT(o[y])(o[y], l[y]));
  return (y) => {
    for (const E in p)
      c[E] = p[E](y);
    return c;
  };
}
function XP(o, l) {
  var c;
  const p = [], y = { color: 0, var: 0, number: 0 };
  for (let E = 0; E < l.values.length; E++) {
    const v = l.types[E], w = o.indexes[v][y[v]], R = (c = o.values[w]) !== null && c !== void 0 ? c : 0;
    p[E] = R, y[v]++;
  }
  return p;
}
const ZP = (o, l) => {
  const c = hs.createTransformer(l), p = nv(o), y = nv(l);
  return p.indexes.var.length === y.indexes.var.length && p.indexes.color.length === y.indexes.color.length && p.indexes.number.length >= y.indexes.number.length ? pE.has(o) && !y.values.length || pE.has(l) && !p.values.length ? KP(o, l) : uv(RD(XP(p, y), y.values), c) : (Vc(!0, `Complex values '${o}' and '${l}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), mg(o, l));
};
function wD(o, l, c) {
  return typeof o == "number" && typeof l == "number" && typeof c == "number" ? Nn(o, l, c) : eT(o)(o, l);
}
const JP = 5;
function bD(o, l, c) {
  const p = Math.max(l - JP, 0);
  return GE(c - o(p), l - p);
}
const Ln = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, QC = 1e-3;
function e2({ duration: o = Ln.duration, bounce: l = Ln.bounce, velocity: c = Ln.velocity, mass: p = Ln.mass }) {
  let y, E;
  Vc(o <= /* @__PURE__ */ vl(Ln.maxDuration), "Spring duration must be 10 seconds or less");
  let v = 1 - l;
  v = gl(Ln.minDamping, Ln.maxDamping, v), o = gl(Ln.minDuration, Ln.maxDuration, /* @__PURE__ */ pu(o)), v < 1 ? (y = (b) => {
    const M = b * v, k = M * o, L = M - c, F = hE(b, v), q = Math.exp(-k);
    return QC - L / F * q;
  }, E = (b) => {
    const k = b * v * o, L = k * c + c, F = Math.pow(v, 2) * Math.pow(b, 2) * o, q = Math.exp(-k), te = hE(Math.pow(b, 2), v);
    return (-y(b) + QC > 0 ? -1 : 1) * ((L - F) * q) / te;
  }) : (y = (b) => {
    const M = Math.exp(-b * o), k = (b - c) * o + 1;
    return -QC + M * k;
  }, E = (b) => {
    const M = Math.exp(-b * o), k = (c - b) * (o * o);
    return M * k;
  });
  const w = 5 / o, R = n2(y, E, w);
  if (o = /* @__PURE__ */ vl(o), isNaN(R))
    return {
      stiffness: Ln.stiffness,
      damping: Ln.damping,
      duration: o
    };
  {
    const b = Math.pow(R, 2) * p;
    return {
      stiffness: b,
      damping: v * 2 * Math.sqrt(p * b),
      duration: o
    };
  }
}
const t2 = 12;
function n2(o, l, c) {
  let p = c;
  for (let y = 1; y < t2; y++)
    p = p - o(p) / l(p);
  return p;
}
function hE(o, l) {
  return o * Math.sqrt(1 - l * l);
}
const r2 = ["duration", "bounce"], i2 = ["stiffness", "damping", "mass"];
function Sw(o, l) {
  return l.some((c) => o[c] !== void 0);
}
function a2(o) {
  let l = {
    velocity: Ln.velocity,
    stiffness: Ln.stiffness,
    damping: Ln.damping,
    mass: Ln.mass,
    isResolvedFromDuration: !1,
    ...o
  };
  if (!Sw(o, i2) && Sw(o, r2))
    if (o.visualDuration) {
      const c = o.visualDuration, p = 2 * Math.PI / (c * 1.2), y = p * p, E = 2 * gl(0.05, 1, 1 - (o.bounce || 0)) * Math.sqrt(y);
      l = {
        ...l,
        mass: Ln.mass,
        stiffness: y,
        damping: E
      };
    } else {
      const c = e2(o);
      l = {
        ...l,
        ...c,
        mass: Ln.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function DD(o = Ln.visualDuration, l = Ln.bounce) {
  const c = typeof o != "object" ? {
    visualDuration: o,
    keyframes: [0, 1],
    bounce: l
  } : o;
  let { restSpeed: p, restDelta: y } = c;
  const E = c.keyframes[0], v = c.keyframes[c.keyframes.length - 1], w = { done: !1, value: E }, { stiffness: R, damping: b, mass: M, duration: k, velocity: L, isResolvedFromDuration: F } = a2({
    ...c,
    velocity: -/* @__PURE__ */ pu(c.velocity || 0)
  }), q = L || 0, te = b / (2 * Math.sqrt(R * M)), ae = v - E, de = /* @__PURE__ */ pu(Math.sqrt(R / M)), he = Math.abs(ae) < 5;
  p || (p = he ? Ln.restSpeed.granular : Ln.restSpeed.default), y || (y = he ? Ln.restDelta.granular : Ln.restDelta.default);
  let pe;
  if (te < 1) {
    const oe = hE(de, te);
    pe = (Ae) => {
      const ke = Math.exp(-te * de * Ae);
      return v - ke * ((q + te * de * ae) / oe * Math.sin(oe * Ae) + ae * Math.cos(oe * Ae));
    };
  } else if (te === 1)
    pe = (oe) => v - Math.exp(-de * oe) * (ae + (q + de * ae) * oe);
  else {
    const oe = de * Math.sqrt(te * te - 1);
    pe = (Ae) => {
      const ke = Math.exp(-te * de * Ae), Ue = Math.min(oe * Ae, 300);
      return v - ke * ((q + te * de * ae) * Math.sinh(Ue) + oe * ae * Math.cosh(Ue)) / oe;
    };
  }
  const Oe = {
    calculatedDuration: F && k || null,
    next: (oe) => {
      const Ae = pe(oe);
      if (F)
        w.done = oe >= k;
      else {
        let ke = 0;
        te < 1 && (ke = oe === 0 ? /* @__PURE__ */ vl(q) : bD(pe, oe, Ae));
        const Ue = Math.abs(ke) <= p, at = Math.abs(v - Ae) <= y;
        w.done = Ue && at;
      }
      return w.value = w.done ? v : Ae, w;
    },
    toString: () => {
      const oe = Math.min(Wb(Oe), oE), Ae = $b((ke) => Oe.next(oe * ke).value, oe, 30);
      return oe + "ms " + Ae;
    }
  };
  return Oe;
}
function Cw({ keyframes: o, velocity: l = 0, power: c = 0.8, timeConstant: p = 325, bounceDamping: y = 10, bounceStiffness: E = 500, modifyTarget: v, min: w, max: R, restDelta: b = 0.5, restSpeed: M }) {
  const k = o[0], L = {
    done: !1,
    value: k
  }, F = (Ue) => w !== void 0 && Ue < w || R !== void 0 && Ue > R, q = (Ue) => w === void 0 ? R : R === void 0 || Math.abs(w - Ue) < Math.abs(R - Ue) ? w : R;
  let te = c * l;
  const ae = k + te, de = v === void 0 ? ae : v(ae);
  de !== ae && (te = de - k);
  const he = (Ue) => -te * Math.exp(-Ue / p), pe = (Ue) => de + he(Ue), Oe = (Ue) => {
    const at = he(Ue), Et = pe(Ue);
    L.done = Math.abs(at) <= b, L.value = L.done ? de : Et;
  };
  let oe, Ae;
  const ke = (Ue) => {
    F(L.value) && (oe = Ue, Ae = DD({
      keyframes: [L.value, q(L.value)],
      velocity: bD(pe, Ue, L.value),
      // TODO: This should be passing * 1000
      damping: y,
      stiffness: E,
      restDelta: b,
      restSpeed: M
    }));
  };
  return ke(0), {
    calculatedDuration: null,
    next: (Ue) => {
      let at = !1;
      return !Ae && oe === void 0 && (at = !0, Oe(Ue), ke(Ue)), oe !== void 0 && Ue >= oe ? Ae.next(Ue - oe) : (!at && Oe(Ue), L);
    }
  };
}
const o2 = /* @__PURE__ */ lv(0.42, 0, 1, 1), l2 = /* @__PURE__ */ lv(0, 0, 0.58, 1), _D = /* @__PURE__ */ lv(0.42, 0, 0.58, 1), u2 = (o) => Array.isArray(o) && typeof o[0] != "number", Ew = {
  linear: Ai,
  easeIn: o2,
  easeInOut: _D,
  easeOut: l2,
  circIn: QE,
  circInOut: uD,
  circOut: lD,
  backIn: KE,
  backInOut: aD,
  backOut: iD,
  anticipate: oD
}, Tw = (o) => {
  if (HE(o)) {
    ps(o.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [l, c, p, y] = o;
    return lv(l, c, p, y);
  } else if (typeof o == "string")
    return ps(Ew[o] !== void 0, `Invalid easing type '${o}'`), Ew[o];
  return o;
};
function s2(o, l, c) {
  const p = [], y = c || wD, E = o.length - 1;
  for (let v = 0; v < E; v++) {
    let w = y(o[v], o[v + 1]);
    if (l) {
      const R = Array.isArray(l) ? l[v] || Ai : l;
      w = uv(R, w);
    }
    p.push(w);
  }
  return p;
}
function tT(o, l, { clamp: c = !0, ease: p, mixer: y } = {}) {
  const E = o.length;
  if (ps(E === l.length, "Both input and output ranges must be the same length"), E === 1)
    return () => l[0];
  if (E === 2 && l[0] === l[1])
    return () => l[1];
  const v = o[0] === o[1];
  o[0] > o[E - 1] && (o = [...o].reverse(), l = [...l].reverse());
  const w = s2(l, p, y), R = w.length, b = (M) => {
    if (v && M < o[0])
      return l[0];
    let k = 0;
    if (R > 1)
      for (; k < o.length - 2 && !(M < o[k + 1]); k++)
        ;
    const L = /* @__PURE__ */ Uc(o[k], o[k + 1], M);
    return w[k](L);
  };
  return c ? (M) => b(gl(o[0], o[E - 1], M)) : b;
}
function c2(o, l) {
  const c = o[o.length - 1];
  for (let p = 1; p <= l; p++) {
    const y = /* @__PURE__ */ Uc(0, l, p);
    o.push(Nn(c, 1, y));
  }
}
function kD(o) {
  const l = [0];
  return c2(l, o.length - 1), l;
}
function f2(o, l) {
  return o.map((c) => c * l);
}
function d2(o, l) {
  return o.map(() => l || _D).splice(0, o.length - 1);
}
function yg({ duration: o = 300, keyframes: l, times: c, ease: p = "easeInOut" }) {
  const y = u2(p) ? p.map(Tw) : Tw(p), E = {
    done: !1,
    value: l[0]
  }, v = f2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    c && c.length === l.length ? c : kD(l),
    o
  ), w = tT(v, l, {
    ease: Array.isArray(y) ? y : d2(l, y)
  });
  return {
    calculatedDuration: o,
    next: (R) => (E.value = w(R), E.done = R >= o, E)
  };
}
const p2 = (o) => {
  const l = ({ timestamp: c }) => o(c);
  return {
    start: () => Kt.update(l, !0),
    stop: () => Do(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Or.isProcessing ? Or.timestamp : yl.now()
  };
}, h2 = {
  decay: Cw,
  inertia: Cw,
  tween: yg,
  keyframes: yg,
  spring: DD
}, v2 = (o) => o / 100;
class nT extends xD {
  constructor(l) {
    super(l), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: R } = this.options;
      R && R();
    };
    const { name: c, motionValue: p, element: y, keyframes: E } = this.options, v = (y == null ? void 0 : y.KeyframeResolver) || JE, w = (R, b) => this.onKeyframesResolved(R, b);
    this.resolver = new v(E, w, c, p, y), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(l) {
    const { type: c = "keyframes", repeat: p = 0, repeatDelay: y = 0, repeatType: E, velocity: v = 0 } = this.options, w = BE(c) ? c : h2[c] || yg;
    let R, b;
    w !== yg && typeof l[0] != "number" && (process.env.NODE_ENV !== "production" && ps(l.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${l}`), R = uv(v2, wD(l[0], l[1])), l = [0, 100]);
    const M = w({ ...this.options, keyframes: l });
    E === "mirror" && (b = w({
      ...this.options,
      keyframes: [...l].reverse(),
      velocity: -v
    })), M.calculatedDuration === null && (M.calculatedDuration = Wb(M));
    const { calculatedDuration: k } = M, L = k + y, F = L * (p + 1) - y;
    return {
      generator: M,
      mirroredGenerator: b,
      mapPercentToKeyframes: R,
      calculatedDuration: k,
      resolvedDuration: L,
      totalDuration: F
    };
  }
  onPostResolved() {
    const { autoplay: l = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !l ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(l, c = !1) {
    const { resolved: p } = this;
    if (!p) {
      const { keyframes: Ue } = this.options;
      return { done: !0, value: Ue[Ue.length - 1] };
    }
    const { finalKeyframe: y, generator: E, mirroredGenerator: v, mapPercentToKeyframes: w, keyframes: R, calculatedDuration: b, totalDuration: M, resolvedDuration: k } = p;
    if (this.startTime === null)
      return E.next(0);
    const { delay: L, repeat: F, repeatType: q, repeatDelay: te, onUpdate: ae } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - M / this.speed, this.startTime)), c ? this.currentTime = l : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(l - this.startTime) * this.speed;
    const de = this.currentTime - L * (this.speed >= 0 ? 1 : -1), he = this.speed >= 0 ? de < 0 : de > M;
    this.currentTime = Math.max(de, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = M);
    let pe = this.currentTime, Oe = E;
    if (F) {
      const Ue = Math.min(this.currentTime, M) / k;
      let at = Math.floor(Ue), Et = Ue % 1;
      !Et && Ue >= 1 && (Et = 1), Et === 1 && at--, at = Math.min(at, F + 1), !!(at % 2) && (q === "reverse" ? (Et = 1 - Et, te && (Et -= te / k)) : q === "mirror" && (Oe = v)), pe = gl(0, 1, Et) * k;
    }
    const oe = he ? { done: !1, value: R[0] } : Oe.next(pe);
    w && (oe.value = w(oe.value));
    let { done: Ae } = oe;
    !he && b !== null && (Ae = this.speed >= 0 ? this.currentTime >= M : this.currentTime <= 0);
    const ke = this.holdTime === null && (this.state === "finished" || this.state === "running" && Ae);
    return ke && y !== void 0 && (oe.value = wg(R, this.options, y)), ae && ae(oe.value), ke && this.finish(), oe;
  }
  get duration() {
    const { resolved: l } = this;
    return l ? /* @__PURE__ */ pu(l.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ pu(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ vl(l), this.currentTime = l, this.holdTime !== null || this.speed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const c = this.playbackSpeed !== l;
    this.playbackSpeed = l, c && (this.time = /* @__PURE__ */ pu(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: l = p2, onPlay: c, startTime: p } = this.options;
    this.driver || (this.driver = l((E) => this.tick(E))), c && c();
    const y = this.driver.now();
    this.holdTime !== null ? this.startTime = y - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = y) : this.startTime = p ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var l;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (l = this.currentTime) !== null && l !== void 0 ? l : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: l } = this.options;
    l && l();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
}
const m2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function y2(o, l, c, { delay: p = 0, duration: y = 300, repeat: E = 0, repeatType: v = "loop", ease: w = "easeInOut", times: R } = {}) {
  const b = { [l]: c };
  R && (b.offset = R);
  const M = Kb(w, y);
  return Array.isArray(M) && (b.easing = M), o.animate(b, {
    delay: p,
    duration: y,
    easing: Array.isArray(M) ? "linear" : M,
    fill: "both",
    iterations: E + 1,
    direction: v === "reverse" ? "alternate" : "normal"
  });
}
const g2 = /* @__PURE__ */ bE(() => Object.hasOwnProperty.call(Element.prototype, "animate")), gg = 10, S2 = 2e4;
function C2(o) {
  return BE(o.type) || o.type === "spring" || !Gb(o.ease);
}
function E2(o, l) {
  const c = new nT({
    ...l,
    keyframes: o,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let p = { done: !1, value: o[0] };
  const y = [];
  let E = 0;
  for (; !p.done && E < S2; )
    p = c.sample(E), y.push(p.value), E += gg;
  return {
    times: void 0,
    keyframes: y,
    duration: E - gg,
    ease: "linear"
  };
}
const MD = {
  anticipate: oD,
  backInOut: aD,
  circInOut: uD
};
function T2(o) {
  return o in MD;
}
class xw extends xD {
  constructor(l) {
    super(l);
    const { name: c, motionValue: p, element: y, keyframes: E } = this.options;
    this.resolver = new TD(E, (v, w) => this.onKeyframesResolved(v, w), c, p, y), this.resolver.scheduleResolve();
  }
  initPlayback(l, c) {
    let { duration: p = 300, times: y, ease: E, type: v, motionValue: w, name: R, startTime: b } = this.options;
    if (!w.owner || !w.owner.current)
      return !1;
    if (typeof E == "string" && vg() && T2(E) && (E = MD[E]), C2(this.options)) {
      const { onComplete: k, onUpdate: L, motionValue: F, element: q, ...te } = this.options, ae = E2(l, te);
      l = ae.keyframes, l.length === 1 && (l[1] = l[0]), p = ae.duration, y = ae.times, E = ae.ease, v = "keyframes";
    }
    const M = y2(w.owner.current, R, l, { ...this.options, duration: p, times: y, ease: E });
    return M.startTime = b ?? this.calcStartTime(), this.pendingTimeline ? (ow(M, this.pendingTimeline), this.pendingTimeline = void 0) : M.onfinish = () => {
      const { onComplete: k } = this.options;
      w.set(wg(l, this.options, c)), k && k(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: M,
      duration: p,
      times: y,
      type: v,
      ease: E,
      keyframes: l
    };
  }
  get duration() {
    const { resolved: l } = this;
    if (!l)
      return 0;
    const { duration: c } = l;
    return /* @__PURE__ */ pu(c);
  }
  get time() {
    const { resolved: l } = this;
    if (!l)
      return 0;
    const { animation: c } = l;
    return /* @__PURE__ */ pu(c.currentTime || 0);
  }
  set time(l) {
    const { resolved: c } = this;
    if (!c)
      return;
    const { animation: p } = c;
    p.currentTime = /* @__PURE__ */ vl(l);
  }
  get speed() {
    const { resolved: l } = this;
    if (!l)
      return 1;
    const { animation: c } = l;
    return c.playbackRate;
  }
  set speed(l) {
    const { resolved: c } = this;
    if (!c)
      return;
    const { animation: p } = c;
    p.playbackRate = l;
  }
  get state() {
    const { resolved: l } = this;
    if (!l)
      return "idle";
    const { animation: c } = l;
    return c.playState;
  }
  get startTime() {
    const { resolved: l } = this;
    if (!l)
      return null;
    const { animation: c } = l;
    return c.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(l) {
    if (!this._resolved)
      this.pendingTimeline = l;
    else {
      const { resolved: c } = this;
      if (!c)
        return Ai;
      const { animation: p } = c;
      ow(p, l);
    }
    return Ai;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: l } = this;
    if (!l)
      return;
    const { animation: c } = l;
    c.playState === "finished" && this.updateFinishedPromise(), c.play();
  }
  pause() {
    const { resolved: l } = this;
    if (!l)
      return;
    const { animation: c } = l;
    c.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: l } = this;
    if (!l)
      return;
    const { animation: c, keyframes: p, duration: y, type: E, ease: v, times: w } = l;
    if (c.playState === "idle" || c.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: b, onUpdate: M, onComplete: k, element: L, ...F } = this.options, q = new nT({
        ...F,
        keyframes: p,
        duration: y,
        type: E,
        ease: v,
        times: w,
        isGenerator: !0
      }), te = /* @__PURE__ */ vl(this.time);
      b.setWithVelocity(q.sample(te - gg).value, q.sample(te).value, gg);
    }
    const { onStop: R } = this.options;
    R && R(), this.cancel();
  }
  complete() {
    const { resolved: l } = this;
    l && l.animation.finish();
  }
  cancel() {
    const { resolved: l } = this;
    l && l.animation.cancel();
  }
  static supports(l) {
    const { motionValue: c, name: p, repeatDelay: y, repeatType: E, damping: v, type: w } = l;
    if (!c || !c.owner || !(c.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: R, transformTemplate: b } = c.owner.getProps();
    return g2() && p && m2.has(p) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !R && !b && !y && E !== "mirror" && v !== 0 && w !== "inertia";
  }
}
const x2 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, R2 = (o) => ({
  type: "spring",
  stiffness: 550,
  damping: o === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), w2 = {
  type: "keyframes",
  duration: 0.8
}, b2 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, D2 = (o, { keyframes: l }) => l.length > 2 ? w2 : zc.has(o) ? o.startsWith("scale") ? R2(l[1]) : x2 : b2;
function _2({ when: o, delay: l, delayChildren: c, staggerChildren: p, staggerDirection: y, repeat: E, repeatType: v, repeatDelay: w, from: R, elapsed: b, ...M }) {
  return !!Object.keys(M).length;
}
const rT = (o, l, c, p = {}, y, E) => (v) => {
  const w = jE(p, o) || {}, R = w.delay || p.delay || 0;
  let { elapsed: b = 0 } = p;
  b = b - /* @__PURE__ */ vl(R);
  let M = {
    keyframes: Array.isArray(c) ? c : [null, c],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...w,
    delay: -b,
    onUpdate: (L) => {
      l.set(L), w.onUpdate && w.onUpdate(L);
    },
    onComplete: () => {
      v(), w.onComplete && w.onComplete();
    },
    name: o,
    motionValue: l,
    element: E ? void 0 : y
  };
  _2(w) || (M = {
    ...M,
    ...D2(o, M)
  }), M.duration && (M.duration = /* @__PURE__ */ vl(M.duration)), M.repeatDelay && (M.repeatDelay = /* @__PURE__ */ vl(M.repeatDelay)), M.from !== void 0 && (M.keyframes[0] = M.from);
  let k = !1;
  if ((M.type === !1 || M.duration === 0 && !M.repeatDelay) && (M.duration = 0, M.delay === 0 && (k = !0)), k && !E && l.get() !== void 0) {
    const L = wg(M.keyframes, w);
    if (L !== void 0)
      return Kt.update(() => {
        M.onUpdate(L), M.onComplete();
      }), new qN([]);
  }
  return !E && xw.supports(M) ? new xw(M) : new nT(M);
};
function k2({ protectedKeys: o, needsAnimating: l }, c) {
  const p = o.hasOwnProperty(c) && l[c] !== !0;
  return l[c] = !1, p;
}
function OD(o, l, { delay: c = 0, transitionOverride: p, type: y } = {}) {
  var E;
  let { transition: v = o.getDefaultTransition(), transitionEnd: w, ...R } = l;
  p && (v = p);
  const b = [], M = y && o.animationState && o.animationState.getState()[y];
  for (const k in R) {
    const L = o.getValue(k, (E = o.latestValues[k]) !== null && E !== void 0 ? E : null), F = R[k];
    if (F === void 0 || M && k2(M, k))
      continue;
    const q = {
      delay: c,
      ...jE(v || {}, k)
    };
    let te = !1;
    if (window.MotionHandoffAnimation) {
      const de = eD(o);
      if (de) {
        const he = window.MotionHandoffAnimation(de, k, Kt);
        he !== null && (q.startTime = he, te = !0);
      }
    }
    uE(o, k), L.start(rT(k, L, F, o.shouldReduceMotion && Jb.has(k) ? { type: !1 } : q, o, te));
    const ae = L.animation;
    ae && b.push(ae);
  }
  return w && Promise.all(b).then(() => {
    Kt.update(() => {
      w && sP(o, w);
    });
  }), b;
}
function vE(o, l, c = {}) {
  var p;
  const y = Rg(o, l, c.type === "exit" ? (p = o.presenceContext) === null || p === void 0 ? void 0 : p.custom : void 0);
  let { transition: E = o.getDefaultTransition() || {} } = y || {};
  c.transitionOverride && (E = c.transitionOverride);
  const v = y ? () => Promise.all(OD(o, y, c)) : () => Promise.resolve(), w = o.variantChildren && o.variantChildren.size ? (b = 0) => {
    const { delayChildren: M = 0, staggerChildren: k, staggerDirection: L } = E;
    return M2(o, l, M + b, k, L, c);
  } : () => Promise.resolve(), { when: R } = E;
  if (R) {
    const [b, M] = R === "beforeChildren" ? [v, w] : [w, v];
    return b().then(() => M());
  } else
    return Promise.all([v(), w(c.delay)]);
}
function M2(o, l, c = 0, p = 0, y = 1, E) {
  const v = [], w = (o.variantChildren.size - 1) * p, R = y === 1 ? (b = 0) => b * p : (b = 0) => w - b * p;
  return Array.from(o.variantChildren).sort(O2).forEach((b, M) => {
    b.notify("AnimationStart", l), v.push(vE(b, l, {
      ...E,
      delay: c + R(M)
    }).then(() => b.notify("AnimationComplete", l)));
  }), Promise.all(v);
}
function O2(o, l) {
  return o.sortNodePosition(l);
}
function A2(o, l, c = {}) {
  o.notify("AnimationStart", l);
  let p;
  if (Array.isArray(l)) {
    const y = l.map((E) => vE(o, E, c));
    p = Promise.all(y);
  } else if (typeof l == "string")
    p = vE(o, l, c);
  else {
    const y = typeof l == "function" ? Rg(o, l, c.custom) : l;
    p = Promise.all(OD(o, y, c));
  }
  return p.then(() => {
    o.notify("AnimationComplete", l);
  });
}
const L2 = _E.length;
function AD(o) {
  if (!o)
    return;
  if (!o.isControllingVariants) {
    const c = o.parent ? AD(o.parent) || {} : {};
    return o.props.initial !== void 0 && (c.initial = o.props.initial), c;
  }
  const l = {};
  for (let c = 0; c < L2; c++) {
    const p = _E[c], y = o.props[p];
    (ev(y) || y === !1) && (l[p] = y);
  }
  return l;
}
const N2 = [...DE].reverse(), P2 = DE.length;
function U2(o) {
  return (l) => Promise.all(l.map(({ animation: c, options: p }) => A2(o, c, p)));
}
function V2(o) {
  let l = U2(o), c = Rw(), p = !0;
  const y = (R) => (b, M) => {
    var k;
    const L = Rg(o, M, R === "exit" ? (k = o.presenceContext) === null || k === void 0 ? void 0 : k.custom : void 0);
    if (L) {
      const { transition: F, transitionEnd: q, ...te } = L;
      b = { ...b, ...te, ...q };
    }
    return b;
  };
  function E(R) {
    l = R(o);
  }
  function v(R) {
    const { props: b } = o, M = AD(o.parent) || {}, k = [], L = /* @__PURE__ */ new Set();
    let F = {}, q = 1 / 0;
    for (let ae = 0; ae < P2; ae++) {
      const de = N2[ae], he = c[de], pe = b[de] !== void 0 ? b[de] : M[de], Oe = ev(pe), oe = de === R ? he.isActive : null;
      oe === !1 && (q = ae);
      let Ae = pe === M[de] && pe !== b[de] && Oe;
      if (Ae && p && o.manuallyAnimateOnMount && (Ae = !1), he.protectedKeys = { ...F }, // If it isn't active and hasn't *just* been set as inactive
      !he.isActive && oe === null || // If we didn't and don't have any defined prop for this animation type
      !pe && !he.prevProp || // Or if the prop doesn't define an animation
      Tg(pe) || typeof pe == "boolean")
        continue;
      const ke = z2(he.prevProp, pe);
      let Ue = ke || // If we're making this variant active, we want to always make it active
      de === R && he.isActive && !Ae && Oe || // If we removed a higher-priority variant (i is in reverse order)
      ae > q && Oe, at = !1;
      const Et = Array.isArray(pe) ? pe : [pe];
      let Vt = Et.reduce(y(de), {});
      oe === !1 && (Vt = {});
      const { prevResolvedValues: wt = {} } = he, He = {
        ...wt,
        ...Vt
      }, Ot = (Se) => {
        Ue = !0, L.has(Se) && (at = !0, L.delete(Se)), he.needsAnimating[Se] = !0;
        const se = o.getValue(Se);
        se && (se.liveStyle = !1);
      };
      for (const Se in He) {
        const se = Vt[Se], Ve = wt[Se];
        if (F.hasOwnProperty(Se))
          continue;
        let me = !1;
        aE(se) && aE(Ve) ? me = !Ib(se, Ve) : me = se !== Ve, me ? se != null ? Ot(Se) : L.add(Se) : se !== void 0 && L.has(Se) ? Ot(Se) : he.protectedKeys[Se] = !0;
      }
      he.prevProp = pe, he.prevResolvedValues = Vt, he.isActive && (F = { ...F, ...Vt }), p && o.blockInitialAnimation && (Ue = !1), Ue && (!(Ae && ke) || at) && k.push(...Et.map((Se) => ({
        animation: Se,
        options: { type: de }
      })));
    }
    if (L.size) {
      const ae = {};
      L.forEach((de) => {
        const he = o.getBaseTarget(de), pe = o.getValue(de);
        pe && (pe.liveStyle = !0), ae[de] = he ?? null;
      }), k.push({ animation: ae });
    }
    let te = !!k.length;
    return p && (b.initial === !1 || b.initial === b.animate) && !o.manuallyAnimateOnMount && (te = !1), p = !1, te ? l(k) : Promise.resolve();
  }
  function w(R, b) {
    var M;
    if (c[R].isActive === b)
      return Promise.resolve();
    (M = o.variantChildren) === null || M === void 0 || M.forEach((L) => {
      var F;
      return (F = L.animationState) === null || F === void 0 ? void 0 : F.setActive(R, b);
    }), c[R].isActive = b;
    const k = v(R);
    for (const L in c)
      c[L].protectedKeys = {};
    return k;
  }
  return {
    animateChanges: v,
    setActive: w,
    setAnimateFunction: E,
    getState: () => c,
    reset: () => {
      c = Rw(), p = !0;
    }
  };
}
function z2(o, l) {
  return typeof l == "string" ? l !== o : Array.isArray(l) ? !Ib(l, o) : !1;
}
function Oc(o = !1) {
  return {
    isActive: o,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Rw() {
  return {
    animate: Oc(!0),
    whileInView: Oc(),
    whileHover: Oc(),
    whileTap: Oc(),
    whileDrag: Oc(),
    whileFocus: Oc(),
    exit: Oc()
  };
}
class vs {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
class F2 extends vs {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = V2(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    Tg(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: c } = this.node.prevProps || {};
    l !== c && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(), (l = this.unmountControls) === null || l === void 0 || l.call(this);
  }
}
let j2 = 0;
class B2 extends vs {
  constructor() {
    super(...arguments), this.id = j2++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: c } = this.node.presenceContext, { isPresent: p } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === p)
      return;
    const y = this.node.animationState.setActive("exit", !l);
    c && !l && y.then(() => c(this.id));
  }
  mount() {
    const { register: l } = this.node.presenceContext || {};
    l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const H2 = {
  animation: {
    Feature: F2
  },
  exit: {
    Feature: B2
  }
};
function rv(o, l, c, p = { passive: !0 }) {
  return o.addEventListener(l, c, p), () => o.removeEventListener(l, c);
}
function sv(o) {
  return {
    point: {
      x: o.pageX,
      y: o.pageY
    }
  };
}
const I2 = (o) => (l) => IE(l) && o(l, sv(l));
function qh(o, l, c, p) {
  return rv(o, l, I2(c), p);
}
const ww = (o, l) => Math.abs(o - l);
function Y2(o, l) {
  const c = ww(o.x, l.x), p = ww(o.y, l.y);
  return Math.sqrt(c ** 2 + p ** 2);
}
class LD {
  constructor(l, c, { transformPagePoint: p, contextWindow: y, dragSnapToOrigin: E = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const k = XC(this.lastMoveEventInfo, this.history), L = this.startEvent !== null, F = Y2(k.offset, { x: 0, y: 0 }) >= 3;
      if (!L && !F)
        return;
      const { point: q } = k, { timestamp: te } = Or;
      this.history.push({ ...q, timestamp: te });
      const { onStart: ae, onMove: de } = this.handlers;
      L || (ae && ae(this.lastMoveEvent, k), this.startEvent = this.lastMoveEvent), de && de(this.lastMoveEvent, k);
    }, this.handlePointerMove = (k, L) => {
      this.lastMoveEvent = k, this.lastMoveEventInfo = qC(L, this.transformPagePoint), Kt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (k, L) => {
      this.end();
      const { onEnd: F, onSessionEnd: q, resumeAnimation: te } = this.handlers;
      if (this.dragSnapToOrigin && te && te(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const ae = XC(k.type === "pointercancel" ? this.lastMoveEventInfo : qC(L, this.transformPagePoint), this.history);
      this.startEvent && F && F(k, ae), q && q(k, ae);
    }, !IE(l))
      return;
    this.dragSnapToOrigin = E, this.handlers = c, this.transformPagePoint = p, this.contextWindow = y || window;
    const v = sv(l), w = qC(v, this.transformPagePoint), { point: R } = w, { timestamp: b } = Or;
    this.history = [{ ...R, timestamp: b }];
    const { onSessionStart: M } = c;
    M && M(l, XC(w, this.history)), this.removeListeners = uv(qh(this.contextWindow, "pointermove", this.handlePointerMove), qh(this.contextWindow, "pointerup", this.handlePointerUp), qh(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), Do(this.updatePoint);
  }
}
function qC(o, l) {
  return l ? { point: l(o.point) } : o;
}
function bw(o, l) {
  return { x: o.x - l.x, y: o.y - l.y };
}
function XC({ point: o }, l) {
  return {
    point: o,
    delta: bw(o, ND(l)),
    offset: bw(o, W2(l)),
    velocity: $2(l, 0.1)
  };
}
function W2(o) {
  return o[0];
}
function ND(o) {
  return o[o.length - 1];
}
function $2(o, l) {
  if (o.length < 2)
    return { x: 0, y: 0 };
  let c = o.length - 1, p = null;
  const y = ND(o);
  for (; c >= 0 && (p = o[c], !(y.timestamp - p.timestamp > /* @__PURE__ */ vl(l))); )
    c--;
  if (!p)
    return { x: 0, y: 0 };
  const E = /* @__PURE__ */ pu(y.timestamp - p.timestamp);
  if (E === 0)
    return { x: 0, y: 0 };
  const v = {
    x: (y.x - p.x) / E,
    y: (y.y - p.y) / E
  };
  return v.x === 1 / 0 && (v.x = 0), v.y === 1 / 0 && (v.y = 0), v;
}
const PD = 1e-4, G2 = 1 - PD, K2 = 1 + PD, UD = 0.01, Q2 = 0 - UD, q2 = 0 + UD;
function Sa(o) {
  return o.max - o.min;
}
function X2(o, l, c) {
  return Math.abs(o - l) <= c;
}
function Dw(o, l, c, p = 0.5) {
  o.origin = p, o.originPoint = Nn(l.min, l.max, o.origin), o.scale = Sa(c) / Sa(l), o.translate = Nn(c.min, c.max, o.origin) - o.originPoint, (o.scale >= G2 && o.scale <= K2 || isNaN(o.scale)) && (o.scale = 1), (o.translate >= Q2 && o.translate <= q2 || isNaN(o.translate)) && (o.translate = 0);
}
function Xh(o, l, c, p) {
  Dw(o.x, l.x, c.x, p ? p.originX : void 0), Dw(o.y, l.y, c.y, p ? p.originY : void 0);
}
function _w(o, l, c) {
  o.min = c.min + l.min, o.max = o.min + Sa(l);
}
function Z2(o, l, c) {
  _w(o.x, l.x, c.x), _w(o.y, l.y, c.y);
}
function kw(o, l, c) {
  o.min = l.min - c.min, o.max = o.min + Sa(l);
}
function Zh(o, l, c) {
  kw(o.x, l.x, c.x), kw(o.y, l.y, c.y);
}
function J2(o, { min: l, max: c }, p) {
  return l !== void 0 && o < l ? o = p ? Nn(l, o, p.min) : Math.max(o, l) : c !== void 0 && o > c && (o = p ? Nn(c, o, p.max) : Math.min(o, c)), o;
}
function Mw(o, l, c) {
  return {
    min: l !== void 0 ? o.min + l : void 0,
    max: c !== void 0 ? o.max + c - (o.max - o.min) : void 0
  };
}
function eU(o, { top: l, left: c, bottom: p, right: y }) {
  return {
    x: Mw(o.x, c, y),
    y: Mw(o.y, l, p)
  };
}
function Ow(o, l) {
  let c = l.min - o.min, p = l.max - o.max;
  return l.max - l.min < o.max - o.min && ([c, p] = [p, c]), { min: c, max: p };
}
function tU(o, l) {
  return {
    x: Ow(o.x, l.x),
    y: Ow(o.y, l.y)
  };
}
function nU(o, l) {
  let c = 0.5;
  const p = Sa(o), y = Sa(l);
  return y > p ? c = /* @__PURE__ */ Uc(l.min, l.max - p, o.min) : p > y && (c = /* @__PURE__ */ Uc(o.min, o.max - y, l.min)), gl(0, 1, c);
}
function rU(o, l) {
  const c = {};
  return l.min !== void 0 && (c.min = l.min - o.min), l.max !== void 0 && (c.max = l.max - o.min), c;
}
const mE = 0.35;
function iU(o = mE) {
  return o === !1 ? o = 0 : o === !0 && (o = mE), {
    x: Aw(o, "left", "right"),
    y: Aw(o, "top", "bottom")
  };
}
function Aw(o, l, c) {
  return {
    min: Lw(o, l),
    max: Lw(o, c)
  };
}
function Lw(o, l) {
  return typeof o == "number" ? o : o[l] || 0;
}
const Nw = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), _d = () => ({
  x: Nw(),
  y: Nw()
}), Pw = () => ({ min: 0, max: 0 }), er = () => ({
  x: Pw(),
  y: Pw()
});
function qa(o) {
  return [o("x"), o("y")];
}
function VD({ top: o, left: l, right: c, bottom: p }) {
  return {
    x: { min: l, max: c },
    y: { min: o, max: p }
  };
}
function aU({ x: o, y: l }) {
  return { top: l.min, right: o.max, bottom: l.max, left: o.min };
}
function oU(o, l) {
  if (!l)
    return o;
  const c = l({ x: o.left, y: o.top }), p = l({ x: o.right, y: o.bottom });
  return {
    top: c.y,
    left: c.x,
    bottom: p.y,
    right: p.x
  };
}
function ZC(o) {
  return o === void 0 || o === 1;
}
function yE({ scale: o, scaleX: l, scaleY: c }) {
  return !ZC(o) || !ZC(l) || !ZC(c);
}
function Ac(o) {
  return yE(o) || zD(o) || o.z || o.rotate || o.rotateX || o.rotateY || o.skewX || o.skewY;
}
function zD(o) {
  return Uw(o.x) || Uw(o.y);
}
function Uw(o) {
  return o && o !== "0%";
}
function Sg(o, l, c) {
  const p = o - c, y = l * p;
  return c + y;
}
function Vw(o, l, c, p, y) {
  return y !== void 0 && (o = Sg(o, y, p)), Sg(o, c, p) + l;
}
function gE(o, l = 0, c = 1, p, y) {
  o.min = Vw(o.min, l, c, p, y), o.max = Vw(o.max, l, c, p, y);
}
function FD(o, { x: l, y: c }) {
  gE(o.x, l.translate, l.scale, l.originPoint), gE(o.y, c.translate, c.scale, c.originPoint);
}
const zw = 0.999999999999, Fw = 1.0000000000001;
function lU(o, l, c, p = !1) {
  const y = c.length;
  if (!y)
    return;
  l.x = l.y = 1;
  let E, v;
  for (let w = 0; w < y; w++) {
    E = c[w], v = E.projectionDelta;
    const { visualElement: R } = E.options;
    R && R.props.style && R.props.style.display === "contents" || (p && E.options.layoutScroll && E.scroll && E !== E.root && Md(o, {
      x: -E.scroll.offset.x,
      y: -E.scroll.offset.y
    }), v && (l.x *= v.x.scale, l.y *= v.y.scale, FD(o, v)), p && Ac(E.latestValues) && Md(o, E.latestValues));
  }
  l.x < Fw && l.x > zw && (l.x = 1), l.y < Fw && l.y > zw && (l.y = 1);
}
function kd(o, l) {
  o.min = o.min + l, o.max = o.max + l;
}
function jw(o, l, c, p, y = 0.5) {
  const E = Nn(o.min, o.max, y);
  gE(o, l, c, E, p);
}
function Md(o, l) {
  jw(o.x, l.x, l.scaleX, l.scale, l.originX), jw(o.y, l.y, l.scaleY, l.scale, l.originY);
}
function jD(o, l) {
  return VD(oU(o.getBoundingClientRect(), l));
}
function uU(o, l, c) {
  const p = jD(o, c), { scroll: y } = l;
  return y && (kd(p.x, y.offset.x), kd(p.y, y.offset.y)), p;
}
const BD = ({ current: o }) => o ? o.ownerDocument.defaultView : null, sU = /* @__PURE__ */ new WeakMap();
class cU {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = er(), this.visualElement = l;
  }
  start(l, { snapToCursor: c = !1 } = {}) {
    const { presenceContext: p } = this.visualElement;
    if (p && p.isPresent === !1)
      return;
    const y = (M) => {
      const { dragSnapToOrigin: k } = this.getProps();
      k ? this.pauseAnimation() : this.stopAnimation(), c && this.snapToCursor(sv(M).point);
    }, E = (M, k) => {
      const { drag: L, dragPropagation: F, onDragStart: q } = this.getProps();
      if (L && !F && (this.openDragLock && this.openDragLock(), this.openDragLock = iP(L), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), qa((ae) => {
        let de = this.getAxisMotionValue(ae).get() || 0;
        if (ml.test(de)) {
          const { projection: he } = this.visualElement;
          if (he && he.layout) {
            const pe = he.layout.layoutBox[ae];
            pe && (de = Sa(pe) * (parseFloat(de) / 100));
          }
        }
        this.originPoint[ae] = de;
      }), q && Kt.postRender(() => q(M, k)), uE(this.visualElement, "transform");
      const { animationState: te } = this.visualElement;
      te && te.setActive("whileDrag", !0);
    }, v = (M, k) => {
      const { dragPropagation: L, dragDirectionLock: F, onDirectionLock: q, onDrag: te } = this.getProps();
      if (!L && !this.openDragLock)
        return;
      const { offset: ae } = k;
      if (F && this.currentDirection === null) {
        this.currentDirection = fU(ae), this.currentDirection !== null && q && q(this.currentDirection);
        return;
      }
      this.updateAxis("x", k.point, ae), this.updateAxis("y", k.point, ae), this.visualElement.render(), te && te(M, k);
    }, w = (M, k) => this.stop(M, k), R = () => qa((M) => {
      var k;
      return this.getAnimationState(M) === "paused" && ((k = this.getAxisMotionValue(M).animation) === null || k === void 0 ? void 0 : k.play());
    }), { dragSnapToOrigin: b } = this.getProps();
    this.panSession = new LD(l, {
      onSessionStart: y,
      onStart: E,
      onMove: v,
      onSessionEnd: w,
      resumeAnimation: R
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: b,
      contextWindow: BD(this.visualElement)
    });
  }
  stop(l, c) {
    const p = this.isDragging;
    if (this.cancel(), !p)
      return;
    const { velocity: y } = c;
    this.startAnimation(y);
    const { onDragEnd: E } = this.getProps();
    E && Kt.postRender(() => E(l, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: c } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: p } = this.getProps();
    !p && this.openDragLock && (this.openDragLock(), this.openDragLock = null), c && c.setActive("whileDrag", !1);
  }
  updateAxis(l, c, p) {
    const { drag: y } = this.getProps();
    if (!p || !lg(l, y, this.currentDirection))
      return;
    const E = this.getAxisMotionValue(l);
    let v = this.originPoint[l] + p[l];
    this.constraints && this.constraints[l] && (v = J2(v, this.constraints[l], this.elastic[l])), E.set(v);
  }
  resolveConstraints() {
    var l;
    const { dragConstraints: c, dragElastic: p } = this.getProps(), y = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (l = this.visualElement.projection) === null || l === void 0 ? void 0 : l.layout, E = this.constraints;
    c && bd(c) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : c && y ? this.constraints = eU(y.layoutBox, c) : this.constraints = !1, this.elastic = iU(p), E !== this.constraints && y && this.constraints && !this.hasMutatedConstraints && qa((v) => {
      this.constraints !== !1 && this.getAxisMotionValue(v) && (this.constraints[v] = rU(y.layoutBox[v], this.constraints[v]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: c } = this.getProps();
    if (!l || !bd(l))
      return !1;
    const p = l.current;
    ps(p !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: y } = this.visualElement;
    if (!y || !y.layout)
      return !1;
    const E = uU(p, y.root, this.visualElement.getTransformPagePoint());
    let v = tU(y.layout.layoutBox, E);
    if (c) {
      const w = c(aU(v));
      this.hasMutatedConstraints = !!w, w && (v = VD(w));
    }
    return v;
  }
  startAnimation(l) {
    const { drag: c, dragMomentum: p, dragElastic: y, dragTransition: E, dragSnapToOrigin: v, onDragTransitionEnd: w } = this.getProps(), R = this.constraints || {}, b = qa((M) => {
      if (!lg(M, c, this.currentDirection))
        return;
      let k = R && R[M] || {};
      v && (k = { min: 0, max: 0 });
      const L = y ? 200 : 1e6, F = y ? 40 : 1e7, q = {
        type: "inertia",
        velocity: p ? l[M] : 0,
        bounceStiffness: L,
        bounceDamping: F,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...E,
        ...k
      };
      return this.startAxisValueAnimation(M, q);
    });
    return Promise.all(b).then(w);
  }
  startAxisValueAnimation(l, c) {
    const p = this.getAxisMotionValue(l);
    return uE(this.visualElement, l), p.start(rT(l, p, 0, c, this.visualElement, !1));
  }
  stopAnimation() {
    qa((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    qa((l) => {
      var c;
      return (c = this.getAxisMotionValue(l).animation) === null || c === void 0 ? void 0 : c.pause();
    });
  }
  getAnimationState(l) {
    var c;
    return (c = this.getAxisMotionValue(l).animation) === null || c === void 0 ? void 0 : c.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const c = `_drag${l.toUpperCase()}`, p = this.visualElement.getProps(), y = p[c];
    return y || this.visualElement.getValue(l, (p.initial ? p.initial[l] : void 0) || 0);
  }
  snapToCursor(l) {
    qa((c) => {
      const { drag: p } = this.getProps();
      if (!lg(c, p, this.currentDirection))
        return;
      const { projection: y } = this.visualElement, E = this.getAxisMotionValue(c);
      if (y && y.layout) {
        const { min: v, max: w } = y.layout.layoutBox[c];
        E.set(l[c] - Nn(v, w, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: c } = this.getProps(), { projection: p } = this.visualElement;
    if (!bd(c) || !p || !this.constraints)
      return;
    this.stopAnimation();
    const y = { x: 0, y: 0 };
    qa((v) => {
      const w = this.getAxisMotionValue(v);
      if (w && this.constraints !== !1) {
        const R = w.get();
        y[v] = nU({ min: R, max: R }, this.constraints[v]);
      }
    });
    const { transformTemplate: E } = this.visualElement.getProps();
    this.visualElement.current.style.transform = E ? E({}, "") : "none", p.root && p.root.updateScroll(), p.updateLayout(), this.resolveConstraints(), qa((v) => {
      if (!lg(v, l, null))
        return;
      const w = this.getAxisMotionValue(v), { min: R, max: b } = this.constraints[v];
      w.set(Nn(R, b, y[v]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    sU.set(this.visualElement, this);
    const l = this.visualElement.current, c = qh(l, "pointerdown", (R) => {
      const { drag: b, dragListener: M = !0 } = this.getProps();
      b && M && this.start(R);
    }), p = () => {
      const { dragConstraints: R } = this.getProps();
      bd(R) && R.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: y } = this.visualElement, E = y.addEventListener("measure", p);
    y && !y.layout && (y.root && y.root.updateScroll(), y.updateLayout()), Kt.read(p);
    const v = rv(window, "resize", () => this.scalePositionWithinConstraints()), w = y.addEventListener("didUpdate", (({ delta: R, hasLayoutChanged: b }) => {
      this.isDragging && b && (qa((M) => {
        const k = this.getAxisMotionValue(M);
        k && (this.originPoint[M] += R[M].translate, k.set(k.get() + R[M].translate));
      }), this.visualElement.render());
    }));
    return () => {
      v(), c(), E(), w && w();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: c = !1, dragDirectionLock: p = !1, dragPropagation: y = !1, dragConstraints: E = !1, dragElastic: v = mE, dragMomentum: w = !0 } = l;
    return {
      ...l,
      drag: c,
      dragDirectionLock: p,
      dragPropagation: y,
      dragConstraints: E,
      dragElastic: v,
      dragMomentum: w
    };
  }
}
function lg(o, l, c) {
  return (l === !0 || l === o) && (c === null || c === o);
}
function fU(o, l = 10) {
  let c = null;
  return Math.abs(o.y) > l ? c = "y" : Math.abs(o.x) > l && (c = "x"), c;
}
class dU extends vs {
  constructor(l) {
    super(l), this.removeGroupControls = Ai, this.removeListeners = Ai, this.controls = new cU(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ai;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Bw = (o) => (l, c) => {
  o && Kt.postRender(() => o(l, c));
};
class pU extends vs {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ai;
  }
  onPointerDown(l) {
    this.session = new LD(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: BD(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: c, onPan: p, onPanEnd: y } = this.node.getProps();
    return {
      onSessionStart: Bw(l),
      onStart: Bw(c),
      onMove: p,
      onEnd: (E, v) => {
        delete this.session, y && Kt.postRender(() => y(E, v));
      }
    };
  }
  mount() {
    this.removePointerDownListener = qh(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const cg = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Hw(o, l) {
  return l.max === l.min ? 0 : o / (l.max - l.min) * 100;
}
const Hh = {
  correct: (o, l) => {
    if (!l.target)
      return o;
    if (typeof o == "string")
      if (tt.test(o))
        o = parseFloat(o);
      else
        return o;
    const c = Hw(o, l.target.x), p = Hw(o, l.target.y);
    return `${c}% ${p}%`;
  }
}, hU = {
  correct: (o, { treeScale: l, projectionDelta: c }) => {
    const p = o, y = hs.parse(o);
    if (y.length > 5)
      return p;
    const E = hs.createTransformer(o), v = typeof y[0] != "number" ? 1 : 0, w = c.x.scale * l.x, R = c.y.scale * l.y;
    y[0 + v] /= w, y[1 + v] /= R;
    const b = Nn(w, R, 0.5);
    return typeof y[2 + v] == "number" && (y[2 + v] /= b), typeof y[3 + v] == "number" && (y[3 + v] /= b), E(y);
  }
};
class vU extends st.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: c, switchLayoutGroup: p, layoutId: y } = this.props, { projection: E } = l;
    FN(mU), E && (c.group && c.group.add(E), p && p.register && y && p.register(E), E.root.didUpdate(), E.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), E.setOptions({
      ...E.options,
      onExitComplete: () => this.safeToRemove()
    })), cg.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: c, visualElement: p, drag: y, isPresent: E } = this.props, v = p.projection;
    return v && (v.isPresent = E, y || l.layoutDependency !== c || c === void 0 ? v.willUpdate() : this.safeToRemove(), l.isPresent !== E && (E ? v.promote() : v.relegate() || Kt.postRender(() => {
      const w = v.getStack();
      (!w || !w.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l && (l.root.didUpdate(), ME.postRender(() => {
      !l.currentAnimation && l.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: c, switchLayoutGroup: p } = this.props, { projection: y } = l;
    y && (y.scheduleCheckAfterUnmount(), c && c.group && c.group.remove(y), p && p.deregister && p.deregister(y));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function HD(o) {
  const [l, c] = tN(), p = st.useContext(Rb);
  return mn.jsx(vU, { ...o, layoutGroup: p, switchLayoutGroup: st.useContext(Mb), isPresent: l, safeToRemove: c });
}
const mU = {
  borderRadius: {
    ...Hh,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Hh,
  borderTopRightRadius: Hh,
  borderBottomLeftRadius: Hh,
  borderBottomRightRadius: Hh,
  boxShadow: hU
};
function yU(o, l, c) {
  const p = mi(o) ? o : hl(o);
  return p.start(rT("", p, l, c)), p.animation;
}
function gU(o) {
  return o instanceof SVGElement && o.tagName !== "svg";
}
const SU = (o, l) => o.depth - l.depth;
class CU {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    YE(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    WE(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(SU), this.isDirty = !1, this.children.forEach(l);
  }
}
function EU(o, l) {
  const c = yl.now(), p = ({ timestamp: y }) => {
    const E = y - c;
    E >= l && (Do(p), o(E - l));
  };
  return Kt.read(p, !0), () => Do(p);
}
const ID = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], TU = ID.length, Iw = (o) => typeof o == "string" ? parseFloat(o) : o, Yw = (o) => typeof o == "number" || tt.test(o);
function xU(o, l, c, p, y, E) {
  y ? (o.opacity = Nn(
    0,
    // TODO Reinstate this if only child
    c.opacity !== void 0 ? c.opacity : 1,
    RU(p)
  ), o.opacityExit = Nn(l.opacity !== void 0 ? l.opacity : 1, 0, wU(p))) : E && (o.opacity = Nn(l.opacity !== void 0 ? l.opacity : 1, c.opacity !== void 0 ? c.opacity : 1, p));
  for (let v = 0; v < TU; v++) {
    const w = `border${ID[v]}Radius`;
    let R = Ww(l, w), b = Ww(c, w);
    if (R === void 0 && b === void 0)
      continue;
    R || (R = 0), b || (b = 0), R === 0 || b === 0 || Yw(R) === Yw(b) ? (o[w] = Math.max(Nn(Iw(R), Iw(b), p), 0), (ml.test(b) || ml.test(R)) && (o[w] += "%")) : o[w] = b;
  }
  (l.rotate || c.rotate) && (o.rotate = Nn(l.rotate || 0, c.rotate || 0, p));
}
function Ww(o, l) {
  return o[l] !== void 0 ? o[l] : o.borderRadius;
}
const RU = /* @__PURE__ */ YD(0, 0.5, lD), wU = /* @__PURE__ */ YD(0.5, 0.95, Ai);
function YD(o, l, c) {
  return (p) => p < o ? 0 : p > l ? 1 : c(/* @__PURE__ */ Uc(o, l, p));
}
function $w(o, l) {
  o.min = l.min, o.max = l.max;
}
function Qa(o, l) {
  $w(o.x, l.x), $w(o.y, l.y);
}
function Gw(o, l) {
  o.translate = l.translate, o.scale = l.scale, o.originPoint = l.originPoint, o.origin = l.origin;
}
function Kw(o, l, c, p, y) {
  return o -= l, o = Sg(o, 1 / c, p), y !== void 0 && (o = Sg(o, 1 / y, p)), o;
}
function bU(o, l = 0, c = 1, p = 0.5, y, E = o, v = o) {
  if (ml.test(l) && (l = parseFloat(l), l = Nn(v.min, v.max, l / 100) - v.min), typeof l != "number")
    return;
  let w = Nn(E.min, E.max, p);
  o === E && (w -= l), o.min = Kw(o.min, l, c, w, y), o.max = Kw(o.max, l, c, w, y);
}
function Qw(o, l, [c, p, y], E, v) {
  bU(o, l[c], l[p], l[y], l.scale, E, v);
}
const DU = ["x", "scaleX", "originX"], _U = ["y", "scaleY", "originY"];
function qw(o, l, c, p) {
  Qw(o.x, l, DU, c ? c.x : void 0, p ? p.x : void 0), Qw(o.y, l, _U, c ? c.y : void 0, p ? p.y : void 0);
}
function Xw(o) {
  return o.translate === 0 && o.scale === 1;
}
function WD(o) {
  return Xw(o.x) && Xw(o.y);
}
function Zw(o, l) {
  return o.min === l.min && o.max === l.max;
}
function kU(o, l) {
  return Zw(o.x, l.x) && Zw(o.y, l.y);
}
function Jw(o, l) {
  return Math.round(o.min) === Math.round(l.min) && Math.round(o.max) === Math.round(l.max);
}
function $D(o, l) {
  return Jw(o.x, l.x) && Jw(o.y, l.y);
}
function eb(o) {
  return Sa(o.x) / Sa(o.y);
}
function tb(o, l) {
  return o.translate === l.translate && o.scale === l.scale && o.originPoint === l.originPoint;
}
class MU {
  constructor() {
    this.members = [];
  }
  add(l) {
    YE(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (WE(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const c = this.members[this.members.length - 1];
      c && this.promote(c);
    }
  }
  relegate(l) {
    const c = this.members.findIndex((y) => l === y);
    if (c === 0)
      return !1;
    let p;
    for (let y = c; y >= 0; y--) {
      const E = this.members[y];
      if (E.isPresent !== !1) {
        p = E;
        break;
      }
    }
    return p ? (this.promote(p), !0) : !1;
  }
  promote(l, c) {
    const p = this.lead;
    if (l !== p && (this.prevLead = p, this.lead = l, l.show(), p)) {
      p.instance && p.scheduleRender(), l.scheduleRender(), l.resumeFrom = p, c && (l.resumeFrom.preserveOpacity = !0), p.snapshot && (l.snapshot = p.snapshot, l.snapshot.latestValues = p.animationValues || p.latestValues), l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: y } = l.options;
      y === !1 && p.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: c, resumingFrom: p } = l;
      c.onExitComplete && c.onExitComplete(), p && p.options.onExitComplete && p.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function OU(o, l, c) {
  let p = "";
  const y = o.x.translate / l.x, E = o.y.translate / l.y, v = (c == null ? void 0 : c.z) || 0;
  if ((y || E || v) && (p = `translate3d(${y}px, ${E}px, ${v}px) `), (l.x !== 1 || l.y !== 1) && (p += `scale(${1 / l.x}, ${1 / l.y}) `), c) {
    const { transformPerspective: b, rotate: M, rotateX: k, rotateY: L, skewX: F, skewY: q } = c;
    b && (p = `perspective(${b}px) ${p}`), M && (p += `rotate(${M}deg) `), k && (p += `rotateX(${k}deg) `), L && (p += `rotateY(${L}deg) `), F && (p += `skewX(${F}deg) `), q && (p += `skewY(${q}deg) `);
  }
  const w = o.x.scale * l.x, R = o.y.scale * l.y;
  return (w !== 1 || R !== 1) && (p += `scale(${w}, ${R})`), p || "none";
}
const Lc = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Gh = typeof window < "u" && window.MotionDebug !== void 0, JC = ["", "X", "Y", "Z"], AU = { visibility: "hidden" }, nb = 1e3;
let LU = 0;
function eE(o, l, c, p) {
  const { latestValues: y } = l;
  y[o] && (c[o] = y[o], l.setStaticValue(o, 0), p && (p[o] = 0));
}
function GD(o) {
  if (o.hasCheckedOptimisedAppear = !0, o.root === o)
    return;
  const { visualElement: l } = o.options;
  if (!l)
    return;
  const c = eD(l);
  if (window.MotionHasOptimisedAnimation(c, "transform")) {
    const { layout: y, layoutId: E } = o.options;
    window.MotionCancelOptimisedAnimation(c, "transform", Kt, !(y || E));
  }
  const { parent: p } = o;
  p && !p.hasCheckedOptimisedAppear && GD(p);
}
function KD({ attachResizeListener: o, defaultParent: l, measureScroll: c, checkIsScrollRoot: p, resetTransform: y }) {
  return class {
    constructor(v = {}, w = l == null ? void 0 : l()) {
      this.id = LU++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Gh && (Lc.totalNodes = Lc.resolvedTargetDeltas = Lc.recalculatedProjection = 0), this.nodes.forEach(UU), this.nodes.forEach(BU), this.nodes.forEach(HU), this.nodes.forEach(VU), Gh && window.MotionDebug.record(Lc);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = v, this.root = w ? w.root || w : this, this.path = w ? [...w.path, w] : [], this.parent = w, this.depth = w ? w.depth + 1 : 0;
      for (let R = 0; R < this.path.length; R++)
        this.path[R].shouldResetTransform = !0;
      this.root === this && (this.nodes = new CU());
    }
    addEventListener(v, w) {
      return this.eventHandlers.has(v) || this.eventHandlers.set(v, new $E()), this.eventHandlers.get(v).add(w);
    }
    notifyListeners(v, ...w) {
      const R = this.eventHandlers.get(v);
      R && R.notify(...w);
    }
    hasListeners(v) {
      return this.eventHandlers.has(v);
    }
    /**
     * Lifecycles
     */
    mount(v, w = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = gU(v), this.instance = v;
      const { layoutId: R, layout: b, visualElement: M } = this.options;
      if (M && !M.current && M.mount(v), this.root.nodes.add(this), this.parent && this.parent.children.add(this), w && (b || R) && (this.isLayoutDirty = !0), o) {
        let k;
        const L = () => this.root.updateBlockedByResize = !1;
        o(v, () => {
          this.root.updateBlockedByResize = !0, k && k(), k = EU(L, 250), cg.hasAnimatedSinceResize && (cg.hasAnimatedSinceResize = !1, this.nodes.forEach(ib));
        });
      }
      R && this.root.registerSharedNode(R, this), this.options.animate !== !1 && M && (R || b) && this.addEventListener("didUpdate", ({ delta: k, hasLayoutChanged: L, hasRelativeTargetChanged: F, layout: q }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const te = this.options.transition || M.getDefaultTransition() || GU, { onLayoutAnimationStart: ae, onLayoutAnimationComplete: de } = M.getProps(), he = !this.targetLayout || !$D(this.targetLayout, q) || F, pe = !L && F;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || pe || L && (he || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(k, pe);
          const Oe = {
            ...jE(te, "layout"),
            onPlay: ae,
            onComplete: de
          };
          (M.shouldReduceMotion || this.options.layoutRoot) && (Oe.delay = 0, Oe.type = !1), this.startAnimation(Oe);
        } else
          L || ib(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = q;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const v = this.getStack();
      v && v.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Do(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(IU), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: v } = this.options;
      return v && v.getProps().transformTemplate;
    }
    willUpdate(v = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && GD(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let M = 0; M < this.path.length; M++) {
        const k = this.path[M];
        k.shouldResetTransform = !0, k.updateScroll("snapshot"), k.options.layoutRoot && k.willUpdate(!1);
      }
      const { layoutId: w, layout: R } = this.options;
      if (w === void 0 && !R)
        return;
      const b = this.getTransformTemplate();
      this.prevTransformTemplateValue = b ? b(this.latestValues, "") : void 0, this.updateSnapshot(), v && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(rb);
        return;
      }
      this.isUpdating || this.nodes.forEach(FU), this.isUpdating = !1, this.nodes.forEach(jU), this.nodes.forEach(NU), this.nodes.forEach(PU), this.clearAllSnapshots();
      const w = yl.now();
      Or.delta = gl(0, 1e3 / 60, w - Or.timestamp), Or.timestamp = w, Or.isProcessing = !0, YC.update.process(Or), YC.preRender.process(Or), YC.render.process(Or), Or.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, ME.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(zU), this.sharedNodes.forEach(YU);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Kt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Kt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let R = 0; R < this.path.length; R++)
          this.path[R].updateScroll();
      const v = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = er(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: w } = this.options;
      w && w.notify("LayoutMeasure", this.layout.layoutBox, v ? v.layoutBox : void 0);
    }
    updateScroll(v = "measure") {
      let w = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === v && (w = !1), w) {
        const R = p(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: v,
          isRoot: R,
          offset: c(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : R
        };
      }
    }
    resetTransform() {
      if (!y)
        return;
      const v = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, w = this.projectionDelta && !WD(this.projectionDelta), R = this.getTransformTemplate(), b = R ? R(this.latestValues, "") : void 0, M = b !== this.prevTransformTemplateValue;
      v && (w || Ac(this.latestValues) || M) && (y(this.instance, b), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(v = !0) {
      const w = this.measurePageBox();
      let R = this.removeElementScroll(w);
      return v && (R = this.removeTransform(R)), KU(R), {
        animationId: this.root.animationId,
        measuredBox: w,
        layoutBox: R,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var v;
      const { visualElement: w } = this.options;
      if (!w)
        return er();
      const R = w.measureViewportBox();
      if (!(((v = this.scroll) === null || v === void 0 ? void 0 : v.wasRoot) || this.path.some(QU))) {
        const { scroll: M } = this.root;
        M && (kd(R.x, M.offset.x), kd(R.y, M.offset.y));
      }
      return R;
    }
    removeElementScroll(v) {
      var w;
      const R = er();
      if (Qa(R, v), !((w = this.scroll) === null || w === void 0) && w.wasRoot)
        return R;
      for (let b = 0; b < this.path.length; b++) {
        const M = this.path[b], { scroll: k, options: L } = M;
        M !== this.root && k && L.layoutScroll && (k.wasRoot && Qa(R, v), kd(R.x, k.offset.x), kd(R.y, k.offset.y));
      }
      return R;
    }
    applyTransform(v, w = !1) {
      const R = er();
      Qa(R, v);
      for (let b = 0; b < this.path.length; b++) {
        const M = this.path[b];
        !w && M.options.layoutScroll && M.scroll && M !== M.root && Md(R, {
          x: -M.scroll.offset.x,
          y: -M.scroll.offset.y
        }), Ac(M.latestValues) && Md(R, M.latestValues);
      }
      return Ac(this.latestValues) && Md(R, this.latestValues), R;
    }
    removeTransform(v) {
      const w = er();
      Qa(w, v);
      for (let R = 0; R < this.path.length; R++) {
        const b = this.path[R];
        if (!b.instance || !Ac(b.latestValues))
          continue;
        yE(b.latestValues) && b.updateSnapshot();
        const M = er(), k = b.measurePageBox();
        Qa(M, k), qw(w, b.latestValues, b.snapshot ? b.snapshot.layoutBox : void 0, M);
      }
      return Ac(this.latestValues) && qw(w, this.latestValues), w;
    }
    setTargetDelta(v) {
      this.targetDelta = v, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(v) {
      this.options = {
        ...this.options,
        ...v,
        crossfade: v.crossfade !== void 0 ? v.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Or.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(v = !1) {
      var w;
      const R = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = R.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = R.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = R.isSharedProjectionDirty);
      const b = !!this.resumingFrom || this !== R;
      if (!(v || b && this.isSharedProjectionDirty || this.isProjectionDirty || !((w = this.parent) === null || w === void 0) && w.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: k, layoutId: L } = this.options;
      if (!(!this.layout || !(k || L))) {
        if (this.resolvedRelativeTargetAt = Or.timestamp, !this.targetDelta && !this.relativeTarget) {
          const F = this.getClosestProjectingParent();
          F && F.layout && this.animationProgress !== 1 ? (this.relativeParent = F, this.forceRelativeParentToResolveTarget(), this.relativeTarget = er(), this.relativeTargetOrigin = er(), Zh(this.relativeTargetOrigin, this.layout.layoutBox, F.layout.layoutBox), Qa(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = er(), this.targetWithTransforms = er()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Z2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Qa(this.target, this.layout.layoutBox), FD(this.target, this.targetDelta)) : Qa(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const F = this.getClosestProjectingParent();
            F && !!F.resumingFrom == !!this.resumingFrom && !F.options.layoutScroll && F.target && this.animationProgress !== 1 ? (this.relativeParent = F, this.forceRelativeParentToResolveTarget(), this.relativeTarget = er(), this.relativeTargetOrigin = er(), Zh(this.relativeTargetOrigin, this.target, F.target), Qa(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Gh && Lc.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || yE(this.parent.latestValues) || zD(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var v;
      const w = this.getLead(), R = !!this.resumingFrom || this !== w;
      let b = !0;
      if ((this.isProjectionDirty || !((v = this.parent) === null || v === void 0) && v.isProjectionDirty) && (b = !1), R && (this.isSharedProjectionDirty || this.isTransformDirty) && (b = !1), this.resolvedRelativeTargetAt === Or.timestamp && (b = !1), b)
        return;
      const { layout: M, layoutId: k } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(M || k))
        return;
      Qa(this.layoutCorrected, this.layout.layoutBox);
      const L = this.treeScale.x, F = this.treeScale.y;
      lU(this.layoutCorrected, this.treeScale, this.path, R), w.layout && !w.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (w.target = w.layout.layoutBox, w.targetWithTransforms = er());
      const { target: q } = w;
      if (!q) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Gw(this.prevProjectionDelta.x, this.projectionDelta.x), Gw(this.prevProjectionDelta.y, this.projectionDelta.y)), Xh(this.projectionDelta, this.layoutCorrected, q, this.latestValues), (this.treeScale.x !== L || this.treeScale.y !== F || !tb(this.projectionDelta.x, this.prevProjectionDelta.x) || !tb(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", q)), Gh && Lc.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(v = !0) {
      var w;
      if ((w = this.options.visualElement) === null || w === void 0 || w.scheduleRender(), v) {
        const R = this.getStack();
        R && R.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = _d(), this.projectionDelta = _d(), this.projectionDeltaWithTransform = _d();
    }
    setAnimationOrigin(v, w = !1) {
      const R = this.snapshot, b = R ? R.latestValues : {}, M = { ...this.latestValues }, k = _d();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !w;
      const L = er(), F = R ? R.source : void 0, q = this.layout ? this.layout.source : void 0, te = F !== q, ae = this.getStack(), de = !ae || ae.members.length <= 1, he = !!(te && !de && this.options.crossfade === !0 && !this.path.some($U));
      this.animationProgress = 0;
      let pe;
      this.mixTargetDelta = (Oe) => {
        const oe = Oe / 1e3;
        ab(k.x, v.x, oe), ab(k.y, v.y, oe), this.setTargetDelta(k), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Zh(L, this.layout.layoutBox, this.relativeParent.layout.layoutBox), WU(this.relativeTarget, this.relativeTargetOrigin, L, oe), pe && kU(this.relativeTarget, pe) && (this.isProjectionDirty = !1), pe || (pe = er()), Qa(pe, this.relativeTarget)), te && (this.animationValues = M, xU(M, b, this.latestValues, oe, he, de)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = oe;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(v) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Do(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Kt.update(() => {
        cg.hasAnimatedSinceResize = !0, this.currentAnimation = yU(0, nb, {
          ...v,
          onUpdate: (w) => {
            this.mixTargetDelta(w), v.onUpdate && v.onUpdate(w);
          },
          onComplete: () => {
            v.onComplete && v.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const v = this.getStack();
      v && v.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(nb), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const v = this.getLead();
      let { targetWithTransforms: w, target: R, layout: b, latestValues: M } = v;
      if (!(!w || !R || !b)) {
        if (this !== v && this.layout && b && QD(this.options.animationType, this.layout.layoutBox, b.layoutBox)) {
          R = this.target || er();
          const k = Sa(this.layout.layoutBox.x);
          R.x.min = v.target.x.min, R.x.max = R.x.min + k;
          const L = Sa(this.layout.layoutBox.y);
          R.y.min = v.target.y.min, R.y.max = R.y.min + L;
        }
        Qa(w, R), Md(w, M), Xh(this.projectionDeltaWithTransform, this.layoutCorrected, w, M);
      }
    }
    registerSharedNode(v, w) {
      this.sharedNodes.has(v) || this.sharedNodes.set(v, new MU()), this.sharedNodes.get(v).add(w);
      const b = w.options.initialPromotionConfig;
      w.promote({
        transition: b ? b.transition : void 0,
        preserveFollowOpacity: b && b.shouldPreserveFollowOpacity ? b.shouldPreserveFollowOpacity(w) : void 0
      });
    }
    isLead() {
      const v = this.getStack();
      return v ? v.lead === this : !0;
    }
    getLead() {
      var v;
      const { layoutId: w } = this.options;
      return w ? ((v = this.getStack()) === null || v === void 0 ? void 0 : v.lead) || this : this;
    }
    getPrevLead() {
      var v;
      const { layoutId: w } = this.options;
      return w ? (v = this.getStack()) === null || v === void 0 ? void 0 : v.prevLead : void 0;
    }
    getStack() {
      const { layoutId: v } = this.options;
      if (v)
        return this.root.sharedNodes.get(v);
    }
    promote({ needsReset: v, transition: w, preserveFollowOpacity: R } = {}) {
      const b = this.getStack();
      b && b.promote(this, R), v && (this.projectionDelta = void 0, this.needsReset = !0), w && this.setOptions({ transition: w });
    }
    relegate() {
      const v = this.getStack();
      return v ? v.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: v } = this.options;
      if (!v)
        return;
      let w = !1;
      const { latestValues: R } = v;
      if ((R.z || R.rotate || R.rotateX || R.rotateY || R.rotateZ || R.skewX || R.skewY) && (w = !0), !w)
        return;
      const b = {};
      R.z && eE("z", v, b, this.animationValues);
      for (let M = 0; M < JC.length; M++)
        eE(`rotate${JC[M]}`, v, b, this.animationValues), eE(`skew${JC[M]}`, v, b, this.animationValues);
      v.render();
      for (const M in b)
        v.setStaticValue(M, b[M]), this.animationValues && (this.animationValues[M] = b[M]);
      v.scheduleRender();
    }
    getProjectionStyles(v) {
      var w, R;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return AU;
      const b = {
        visibility: ""
      }, M = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, b.opacity = "", b.pointerEvents = ug(v == null ? void 0 : v.pointerEvents) || "", b.transform = M ? M(this.latestValues, "") : "none", b;
      const k = this.getLead();
      if (!this.projectionDelta || !this.layout || !k.target) {
        const te = {};
        return this.options.layoutId && (te.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, te.pointerEvents = ug(v == null ? void 0 : v.pointerEvents) || ""), this.hasProjected && !Ac(this.latestValues) && (te.transform = M ? M({}, "") : "none", this.hasProjected = !1), te;
      }
      const L = k.animationValues || k.latestValues;
      this.applyTransformsToTarget(), b.transform = OU(this.projectionDeltaWithTransform, this.treeScale, L), M && (b.transform = M(L, b.transform));
      const { x: F, y: q } = this.projectionDelta;
      b.transformOrigin = `${F.origin * 100}% ${q.origin * 100}% 0`, k.animationValues ? b.opacity = k === this ? (R = (w = L.opacity) !== null && w !== void 0 ? w : this.latestValues.opacity) !== null && R !== void 0 ? R : 1 : this.preserveOpacity ? this.latestValues.opacity : L.opacityExit : b.opacity = k === this ? L.opacity !== void 0 ? L.opacity : "" : L.opacityExit !== void 0 ? L.opacityExit : 0;
      for (const te in hg) {
        if (L[te] === void 0)
          continue;
        const { correct: ae, applyTo: de } = hg[te], he = b.transform === "none" ? L[te] : ae(L[te], k);
        if (de) {
          const pe = de.length;
          for (let Oe = 0; Oe < pe; Oe++)
            b[de[Oe]] = he;
        } else
          b[te] = he;
      }
      return this.options.layoutId && (b.pointerEvents = k === this ? ug(v == null ? void 0 : v.pointerEvents) || "" : "none"), b;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((v) => {
        var w;
        return (w = v.currentAnimation) === null || w === void 0 ? void 0 : w.stop();
      }), this.root.nodes.forEach(rb), this.root.sharedNodes.clear();
    }
  };
}
function NU(o) {
  o.updateLayout();
}
function PU(o) {
  var l;
  const c = ((l = o.resumeFrom) === null || l === void 0 ? void 0 : l.snapshot) || o.snapshot;
  if (o.isLead() && o.layout && c && o.hasListeners("didUpdate")) {
    const { layoutBox: p, measuredBox: y } = o.layout, { animationType: E } = o.options, v = c.source !== o.layout.source;
    E === "size" ? qa((k) => {
      const L = v ? c.measuredBox[k] : c.layoutBox[k], F = Sa(L);
      L.min = p[k].min, L.max = L.min + F;
    }) : QD(E, c.layoutBox, p) && qa((k) => {
      const L = v ? c.measuredBox[k] : c.layoutBox[k], F = Sa(p[k]);
      L.max = L.min + F, o.relativeTarget && !o.currentAnimation && (o.isProjectionDirty = !0, o.relativeTarget[k].max = o.relativeTarget[k].min + F);
    });
    const w = _d();
    Xh(w, p, c.layoutBox);
    const R = _d();
    v ? Xh(R, o.applyTransform(y, !0), c.measuredBox) : Xh(R, p, c.layoutBox);
    const b = !WD(w);
    let M = !1;
    if (!o.resumeFrom) {
      const k = o.getClosestProjectingParent();
      if (k && !k.resumeFrom) {
        const { snapshot: L, layout: F } = k;
        if (L && F) {
          const q = er();
          Zh(q, c.layoutBox, L.layoutBox);
          const te = er();
          Zh(te, p, F.layoutBox), $D(q, te) || (M = !0), k.options.layoutRoot && (o.relativeTarget = te, o.relativeTargetOrigin = q, o.relativeParent = k);
        }
      }
    }
    o.notifyListeners("didUpdate", {
      layout: p,
      snapshot: c,
      delta: R,
      layoutDelta: w,
      hasLayoutChanged: b,
      hasRelativeTargetChanged: M
    });
  } else if (o.isLead()) {
    const { onExitComplete: p } = o.options;
    p && p();
  }
  o.options.transition = void 0;
}
function UU(o) {
  Gh && Lc.totalNodes++, o.parent && (o.isProjecting() || (o.isProjectionDirty = o.parent.isProjectionDirty), o.isSharedProjectionDirty || (o.isSharedProjectionDirty = !!(o.isProjectionDirty || o.parent.isProjectionDirty || o.parent.isSharedProjectionDirty)), o.isTransformDirty || (o.isTransformDirty = o.parent.isTransformDirty));
}
function VU(o) {
  o.isProjectionDirty = o.isSharedProjectionDirty = o.isTransformDirty = !1;
}
function zU(o) {
  o.clearSnapshot();
}
function rb(o) {
  o.clearMeasurements();
}
function FU(o) {
  o.isLayoutDirty = !1;
}
function jU(o) {
  const { visualElement: l } = o.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), o.resetTransform();
}
function ib(o) {
  o.finishAnimation(), o.targetDelta = o.relativeTarget = o.target = void 0, o.isProjectionDirty = !0;
}
function BU(o) {
  o.resolveTargetDelta();
}
function HU(o) {
  o.calcProjection();
}
function IU(o) {
  o.resetSkewAndRotation();
}
function YU(o) {
  o.removeLeadSnapshot();
}
function ab(o, l, c) {
  o.translate = Nn(l.translate, 0, c), o.scale = Nn(l.scale, 1, c), o.origin = l.origin, o.originPoint = l.originPoint;
}
function ob(o, l, c, p) {
  o.min = Nn(l.min, c.min, p), o.max = Nn(l.max, c.max, p);
}
function WU(o, l, c, p) {
  ob(o.x, l.x, c.x, p), ob(o.y, l.y, c.y, p);
}
function $U(o) {
  return o.animationValues && o.animationValues.opacityExit !== void 0;
}
const GU = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, lb = (o) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(o), ub = lb("applewebkit/") && !lb("chrome/") ? Math.round : Ai;
function sb(o) {
  o.min = ub(o.min), o.max = ub(o.max);
}
function KU(o) {
  sb(o.x), sb(o.y);
}
function QD(o, l, c) {
  return o === "position" || o === "preserve-aspect" && !X2(eb(l), eb(c), 0.2);
}
function QU(o) {
  var l;
  return o !== o.root && ((l = o.scroll) === null || l === void 0 ? void 0 : l.wasRoot);
}
const qU = KD({
  attachResizeListener: (o, l) => rv(o, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), tE = {
  current: void 0
}, qD = KD({
  measureScroll: (o) => ({
    x: o.scrollLeft,
    y: o.scrollTop
  }),
  defaultParent: () => {
    if (!tE.current) {
      const o = new qU({});
      o.mount(window), o.setOptions({ layoutScroll: !0 }), tE.current = o;
    }
    return tE.current;
  },
  resetTransform: (o, l) => {
    o.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (o) => window.getComputedStyle(o).position === "fixed"
}), XU = {
  pan: {
    Feature: pU
  },
  drag: {
    Feature: dU,
    ProjectionNode: qD,
    MeasureLayout: HD
  }
};
function cb(o, l, c) {
  const { props: p } = o;
  o.animationState && p.whileHover && o.animationState.setActive("whileHover", c === "Start");
  const y = "onHover" + c, E = p[y];
  E && Kt.postRender(() => E(l, sv(l)));
}
class ZU extends vs {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = JN(l, (c) => (cb(this.node, c, "Start"), (p) => cb(this.node, p, "End"))));
  }
  unmount() {
  }
}
class JU extends vs {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = uv(rv(this.node.current, "focus", () => this.onFocus()), rv(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function fb(o, l, c) {
  const { props: p } = o;
  o.animationState && p.whileTap && o.animationState.setActive("whileTap", c === "Start");
  const y = "onTap" + (c === "End" ? "" : c), E = p[y];
  E && Kt.postRender(() => E(l, sv(l)));
}
class eV extends vs {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = rP(l, (c) => (fb(this.node, c, "Start"), (p, { success: y }) => fb(this.node, p, y ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const SE = /* @__PURE__ */ new WeakMap(), nE = /* @__PURE__ */ new WeakMap(), tV = (o) => {
  const l = SE.get(o.target);
  l && l(o);
}, nV = (o) => {
  o.forEach(tV);
};
function rV({ root: o, ...l }) {
  const c = o || document;
  nE.has(c) || nE.set(c, {});
  const p = nE.get(c), y = JSON.stringify(l);
  return p[y] || (p[y] = new IntersectionObserver(nV, { root: o, ...l })), p[y];
}
function iV(o, l, c) {
  const p = rV(l);
  return SE.set(o, c), p.observe(o), () => {
    SE.delete(o), p.unobserve(o);
  };
}
const aV = {
  some: 0,
  all: 1
};
class oV extends vs {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(), { root: c, margin: p, amount: y = "some", once: E } = l, v = {
      root: c ? c.current : void 0,
      rootMargin: p,
      threshold: typeof y == "number" ? y : aV[y]
    }, w = (R) => {
      const { isIntersecting: b } = R;
      if (this.isInView === b || (this.isInView = b, E && !b && this.hasEnteredView))
        return;
      b && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", b);
      const { onViewportEnter: M, onViewportLeave: k } = this.node.getProps(), L = b ? M : k;
      L && L(R);
    };
    return iV(this.node.current, v, w);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: c } = this.node;
    ["amount", "margin", "root"].some(lV(l, c)) && this.startObserver();
  }
  unmount() {
  }
}
function lV({ viewport: o = {} }, { viewport: l = {} } = {}) {
  return (c) => o[c] !== l[c];
}
const uV = {
  inView: {
    Feature: oV
  },
  tap: {
    Feature: eV
  },
  focus: {
    Feature: JU
  },
  hover: {
    Feature: ZU
  }
}, sV = {
  layout: {
    ProjectionNode: qD,
    MeasureLayout: HD
  }
}, CE = { current: null }, XD = { current: !1 };
function cV() {
  if (XD.current = !0, !!RE)
    if (window.matchMedia) {
      const o = window.matchMedia("(prefers-reduced-motion)"), l = () => CE.current = o.matches;
      o.addListener(l), l();
    } else
      CE.current = !1;
}
const fV = [...ED, vi, hs], dV = (o) => fV.find(CD(o)), db = /* @__PURE__ */ new WeakMap();
function pV(o, l, c) {
  for (const p in l) {
    const y = l[p], E = c[p];
    if (mi(y))
      o.addValue(p, y), process.env.NODE_ENV === "development" && av(y.version === "11.18.2", `Attempting to mix Motion versions ${y.version} with 11.18.2 may not work as expected.`);
    else if (mi(E))
      o.addValue(p, hl(y, { owner: o }));
    else if (E !== y)
      if (o.hasValue(p)) {
        const v = o.getValue(p);
        v.liveStyle === !0 ? v.jump(y) : v.hasAnimated || v.set(y);
      } else {
        const v = o.getStaticValue(p);
        o.addValue(p, hl(v !== void 0 ? v : y, { owner: o }));
      }
  }
  for (const p in c)
    l[p] === void 0 && o.removeValue(p);
  return l;
}
const pb = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class hV {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, c, p) {
    return {};
  }
  constructor({ parent: l, props: c, presenceContext: p, reducedMotionConfig: y, blockInitialAnimation: E, visualState: v }, w = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = JE, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const F = yl.now();
      this.renderScheduledAt < F && (this.renderScheduledAt = F, Kt.render(this.render, !1, !0));
    };
    const { latestValues: R, renderState: b, onUpdate: M } = v;
    this.onUpdate = M, this.latestValues = R, this.baseTarget = { ...R }, this.initialValues = c.initial ? { ...R } : {}, this.renderState = b, this.parent = l, this.props = c, this.presenceContext = p, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = y, this.options = w, this.blockInitialAnimation = !!E, this.isControllingVariants = xg(c), this.isVariantNode = _b(c), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: k, ...L } = this.scrapeMotionValuesFromProps(c, {}, this);
    for (const F in L) {
      const q = L[F];
      R[F] !== void 0 && mi(q) && q.set(R[F], !1);
    }
  }
  mount(l) {
    this.current = l, db.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, p) => this.bindToMotionValue(p, c)), XD.current || cV(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : CE.current, process.env.NODE_ENV !== "production" && av(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    db.delete(this.current), this.projection && this.projection.unmount(), Do(this.notifyUpdate), Do(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const c = this.features[l];
      c && (c.unmount(), c.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(l, c) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const p = zc.has(l), y = c.on("change", (w) => {
      this.latestValues[l] = w, this.props.onUpdate && Kt.preRender(this.notifyUpdate), p && this.projection && (this.projection.isTransformDirty = !0);
    }), E = c.on("renderRequest", this.scheduleRender);
    let v;
    window.MotionCheckAppearSync && (v = window.MotionCheckAppearSync(this, l, c)), this.valueSubscriptions.set(l, () => {
      y(), E(), v && v(), c.owner && c.stop();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in Od) {
      const c = Od[l];
      if (!c)
        continue;
      const { isEnabled: p, Feature: y } = c;
      if (!this.features[l] && y && p(this.props) && (this.features[l] = new y(this)), this.features[l]) {
        const E = this.features[l];
        E.isMounted ? E.update() : (E.mount(), E.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : er();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, c) {
    this.latestValues[l] = c;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, c) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = c;
    for (let p = 0; p < pb.length; p++) {
      const y = pb[p];
      this.propEventSubscriptions[y] && (this.propEventSubscriptions[y](), delete this.propEventSubscriptions[y]);
      const E = "on" + y, v = l[E];
      v && (this.propEventSubscriptions[y] = this.on(y, v));
    }
    this.prevMotionValues = pV(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(l) {
    const c = this.getClosestVariantNode();
    if (c)
      return c.variantChildren && c.variantChildren.add(l), () => c.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, c) {
    const p = this.values.get(l);
    c !== p && (p && this.removeValue(l), this.bindToMotionValue(l, c), this.values.set(l, c), this.latestValues[l] = c.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const c = this.valueSubscriptions.get(l);
    c && (c(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, c) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let p = this.values.get(l);
    return p === void 0 && c !== void 0 && (p = hl(c === null ? void 0 : c, { owner: this }), this.addValue(l, p)), p;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, c) {
    var p;
    let y = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : (p = this.getBaseTargetFromProps(this.props, l)) !== null && p !== void 0 ? p : this.readValueFromInstance(this.current, l, this.options);
    return y != null && (typeof y == "string" && (gD(y) || sD(y)) ? y = parseFloat(y) : !dV(y) && hs.test(c) && (y = vD(l, c)), this.setBaseTarget(l, mi(y) ? y.get() : y)), mi(y) ? y.get() : y;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, c) {
    this.baseTarget[l] = c;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    var c;
    const { initial: p } = this.props;
    let y;
    if (typeof p == "string" || typeof p == "object") {
      const v = AE(this.props, p, (c = this.presenceContext) === null || c === void 0 ? void 0 : c.custom);
      v && (y = v[l]);
    }
    if (p && y !== void 0)
      return y;
    const E = this.getBaseTargetFromProps(this.props, l);
    return E !== void 0 && !mi(E) ? E : this.initialValues[l] !== void 0 && y === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, c) {
    return this.events[l] || (this.events[l] = new $E()), this.events[l].add(c);
  }
  notify(l, ...c) {
    this.events[l] && this.events[l].notify(...c);
  }
}
class ZD extends hV {
  constructor() {
    super(...arguments), this.KeyframeResolver = TD;
  }
  sortInstanceNodePosition(l, c) {
    return l.compareDocumentPosition(c) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, c) {
    return l.style ? l.style[c] : void 0;
  }
  removeValueFromRenderState(l, { vars: c, style: p }) {
    delete c[l], delete p[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    mi(l) && (this.childSubscription = l.on("change", (c) => {
      this.current && (this.current.textContent = `${c}`);
    }));
  }
}
function vV(o) {
  return window.getComputedStyle(o);
}
class mV extends ZD {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Vb;
  }
  readValueFromInstance(l, c) {
    if (zc.has(c)) {
      const p = ZE(c);
      return p && p.default || 0;
    } else {
      const p = vV(l), y = (Nb(c) ? p.getPropertyValue(c) : p[c]) || 0;
      return typeof y == "string" ? y.trim() : y;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: c }) {
    return jD(l, c);
  }
  build(l, c, p) {
    PE(l, c, p.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, c, p) {
    return FE(l, c, p);
  }
}
class yV extends ZD {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = er;
  }
  getBaseTargetFromProps(l, c) {
    return l[c];
  }
  readValueFromInstance(l, c) {
    if (zc.has(c)) {
      const p = ZE(c);
      return p && p.default || 0;
    }
    return c = zb.has(c) ? c : kE(c), l.getAttribute(c);
  }
  scrapeMotionValuesFromProps(l, c, p) {
    return Bb(l, c, p);
  }
  build(l, c, p) {
    UE(l, c, this.isSVGTag, p.transformTemplate);
  }
  renderInstance(l, c, p, y) {
    Fb(l, c, p, y);
  }
  mount(l) {
    this.isSVGTag = zE(l.tagName), super.mount(l);
  }
}
const gV = (o, l) => OE(o) ? new yV(l) : new mV(l, {
  allowProjection: o !== st.Fragment
}), SV = /* @__PURE__ */ KN({
  ...H2,
  ...uV,
  ...XU,
  ...sV
}, gV), CV = /* @__PURE__ */ sN(SV);
function JD(o, l) {
  let c;
  const p = () => {
    const { currentTime: y } = l, v = (y === null ? 0 : y.value) / 100;
    c !== v && o(v), c = v;
  };
  return Kt.update(p, !0), () => Do(p);
}
const fg = /* @__PURE__ */ new WeakMap();
let ds;
function EV(o, l) {
  if (l) {
    const { inlineSize: c, blockSize: p } = l[0];
    return { width: c, height: p };
  } else return o instanceof SVGElement && "getBBox" in o ? o.getBBox() : {
    width: o.offsetWidth,
    height: o.offsetHeight
  };
}
function TV({ target: o, contentRect: l, borderBoxSize: c }) {
  var p;
  (p = fg.get(o)) === null || p === void 0 || p.forEach((y) => {
    y({
      target: o,
      contentSize: l,
      get size() {
        return EV(o, c);
      }
    });
  });
}
function xV(o) {
  o.forEach(TV);
}
function RV() {
  typeof ResizeObserver > "u" || (ds = new ResizeObserver(xV));
}
function wV(o, l) {
  ds || RV();
  const c = qb(o);
  return c.forEach((p) => {
    let y = fg.get(p);
    y || (y = /* @__PURE__ */ new Set(), fg.set(p, y)), y.add(l), ds == null || ds.observe(p);
  }), () => {
    c.forEach((p) => {
      const y = fg.get(p);
      y == null || y.delete(l), y != null && y.size || ds == null || ds.unobserve(p);
    });
  };
}
const dg = /* @__PURE__ */ new Set();
let Jh;
function bV() {
  Jh = () => {
    const o = {
      width: window.innerWidth,
      height: window.innerHeight
    }, l = {
      target: window,
      size: o,
      contentSize: o
    };
    dg.forEach((c) => c(l));
  }, window.addEventListener("resize", Jh);
}
function DV(o) {
  return dg.add(o), Jh || bV(), () => {
    dg.delete(o), !dg.size && Jh && (Jh = void 0);
  };
}
function _V(o, l) {
  return typeof o == "function" ? DV(o) : wV(o, l);
}
const kV = 50, hb = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
}), MV = () => ({
  time: 0,
  x: hb(),
  y: hb()
}), OV = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function vb(o, l, c, p) {
  const y = c[l], { length: E, position: v } = OV[l], w = y.current, R = c.time;
  y.current = o[`scroll${v}`], y.scrollLength = o[`scroll${E}`] - o[`client${E}`], y.offset.length = 0, y.offset[0] = 0, y.offset[1] = y.scrollLength, y.progress = /* @__PURE__ */ Uc(0, y.scrollLength, y.current);
  const b = p - R;
  y.velocity = b > kV ? 0 : GE(y.current - w, b);
}
function AV(o, l, c) {
  vb(o, "x", l, c), vb(o, "y", l, c), l.time = c;
}
function LV(o, l) {
  const c = { x: 0, y: 0 };
  let p = o;
  for (; p && p !== l; )
    if (p instanceof HTMLElement)
      c.x += p.offsetLeft, c.y += p.offsetTop, p = p.offsetParent;
    else if (p.tagName === "svg") {
      const y = p.getBoundingClientRect();
      p = p.parentElement;
      const E = p.getBoundingClientRect();
      c.x += y.left - E.left, c.y += y.top - E.top;
    } else if (p instanceof SVGGraphicsElement) {
      const { x: y, y: E } = p.getBBox();
      c.x += y, c.y += E;
      let v = null, w = p.parentNode;
      for (; !v; )
        w.tagName === "svg" && (v = w), w = p.parentNode;
      p = v;
    } else
      break;
  return c;
}
const EE = {
  start: 0,
  center: 0.5,
  end: 1
};
function mb(o, l, c = 0) {
  let p = 0;
  if (o in EE && (o = EE[o]), typeof o == "string") {
    const y = parseFloat(o);
    o.endsWith("px") ? p = y : o.endsWith("%") ? o = y / 100 : o.endsWith("vw") ? p = y / 100 * document.documentElement.clientWidth : o.endsWith("vh") ? p = y / 100 * document.documentElement.clientHeight : o = y;
  }
  return typeof o == "number" && (p = l * o), c + p;
}
const NV = [0, 0];
function PV(o, l, c, p) {
  let y = Array.isArray(o) ? o : NV, E = 0, v = 0;
  return typeof o == "number" ? y = [o, o] : typeof o == "string" && (o = o.trim(), o.includes(" ") ? y = o.split(" ") : y = [o, EE[o] ? o : "0"]), E = mb(y[0], c, p), v = mb(y[1], l), E - v;
}
const UV = {
  All: [
    [0, 0],
    [1, 1]
  ]
}, VV = { x: 0, y: 0 };
function zV(o) {
  return "getBBox" in o && o.tagName !== "svg" ? o.getBBox() : { width: o.clientWidth, height: o.clientHeight };
}
function FV(o, l, c) {
  const { offset: p = UV.All } = c, { target: y = o, axis: E = "y" } = c, v = E === "y" ? "height" : "width", w = y !== o ? LV(y, o) : VV, R = y === o ? { width: o.scrollWidth, height: o.scrollHeight } : zV(y), b = {
    width: o.clientWidth,
    height: o.clientHeight
  };
  l[E].offset.length = 0;
  let M = !l[E].interpolate;
  const k = p.length;
  for (let L = 0; L < k; L++) {
    const F = PV(p[L], b[v], R[v], w[E]);
    !M && F !== l[E].interpolatorOffsets[L] && (M = !0), l[E].offset[L] = F;
  }
  M && (l[E].interpolate = tT(l[E].offset, kD(p), { clamp: !1 }), l[E].interpolatorOffsets = [...l[E].offset]), l[E].progress = gl(0, 1, l[E].interpolate(l[E].current));
}
function jV(o, l = o, c) {
  if (c.x.targetOffset = 0, c.y.targetOffset = 0, l !== o) {
    let p = l;
    for (; p && p !== o; )
      c.x.targetOffset += p.offsetLeft, c.y.targetOffset += p.offsetTop, p = p.offsetParent;
  }
  c.x.targetLength = l === o ? l.scrollWidth : l.clientWidth, c.y.targetLength = l === o ? l.scrollHeight : l.clientHeight, c.x.containerLength = o.clientWidth, c.y.containerLength = o.clientHeight, process.env.NODE_ENV !== "production" && o && l && l !== o && av(getComputedStyle(o).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
}
function BV(o, l, c, p = {}) {
  return {
    measure: () => jV(o, p.target, c),
    update: (y) => {
      AV(o, c, y), (p.offset || p.target) && FV(o, c, p);
    },
    notify: () => l(c)
  };
}
const Ih = /* @__PURE__ */ new WeakMap(), yb = /* @__PURE__ */ new WeakMap(), rE = /* @__PURE__ */ new WeakMap(), gb = (o) => o === document.documentElement ? window : o;
function iT(o, { container: l = document.documentElement, ...c } = {}) {
  let p = rE.get(l);
  p || (p = /* @__PURE__ */ new Set(), rE.set(l, p));
  const y = MV(), E = BV(l, o, y, c);
  if (p.add(E), !Ih.has(l)) {
    const w = () => {
      for (const L of p)
        L.measure();
    }, R = () => {
      for (const L of p)
        L.update(Or.timestamp);
    }, b = () => {
      for (const L of p)
        L.notify();
    }, M = () => {
      Kt.read(w, !1, !0), Kt.read(R, !1, !0), Kt.update(b, !1, !0);
    };
    Ih.set(l, M);
    const k = gb(l);
    window.addEventListener("resize", M, { passive: !0 }), l !== document.documentElement && yb.set(l, _V(l, M)), k.addEventListener("scroll", M, { passive: !0 });
  }
  const v = Ih.get(l);
  return Kt.read(v, !1, !0), () => {
    var w;
    Do(v);
    const R = rE.get(l);
    if (!R || (R.delete(E), R.size))
      return;
    const b = Ih.get(l);
    Ih.delete(l), b && (gb(l).removeEventListener("scroll", b), (w = yb.get(l)) === null || w === void 0 || w(), window.removeEventListener("resize", b));
  };
}
function HV({ source: o, container: l, axis: c = "y" }) {
  o && (l = o);
  const p = { value: 0 }, y = iT((E) => {
    p.value = E[c].progress * 100;
  }, { container: l, axis: c });
  return { currentTime: p, cancel: y };
}
const iE = /* @__PURE__ */ new Map();
function e_({ source: o, container: l = document.documentElement, axis: c = "y" } = {}) {
  o && (l = o), iE.has(l) || iE.set(l, {});
  const p = iE.get(l);
  return p[c] || (p[c] = Yb() ? new ScrollTimeline({ source: l, axis: c }) : HV({ source: l, axis: c })), p[c];
}
function IV(o) {
  return o.length === 2;
}
function t_(o) {
  return o && (o.target || o.offset);
}
function YV(o, l) {
  return IV(o) || t_(l) ? iT((c) => {
    o(c[l.axis].progress, c);
  }, l) : JD(o, e_(l));
}
function WV(o, l) {
  if (o.flatten(), t_(l))
    return o.pause(), iT((c) => {
      o.time = o.duration * c[l.axis].progress;
    }, l);
  {
    const c = e_(l);
    return o.attachTimeline ? o.attachTimeline(c, (p) => (p.pause(), JD((y) => {
      p.time = p.duration * y;
    }, c))) : Ai;
  }
}
function $V(o, { axis: l = "y", ...c } = {}) {
  const p = { axis: l, ...c };
  return typeof o == "function" ? YV(o, p) : WV(o, p);
}
function Sb(o, l) {
  Vc(!!(!l || l.current), `You have defined a ${o} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
const GV = () => ({
  scrollX: hl(0),
  scrollY: hl(0),
  scrollXProgress: hl(0),
  scrollYProgress: hl(0)
});
function KV({ container: o, target: l, layoutEffect: c = !0, ...p } = {}) {
  const y = Cg(GV);
  return (c ? wE : st.useEffect)(() => (Sb("target", l), Sb("container", o), $V((v, { x: w, y: R }) => {
    y.scrollX.set(w.current), y.scrollXProgress.set(w.progress), y.scrollY.set(R.current), y.scrollYProgress.set(R.progress);
  }, {
    ...p,
    container: (o == null ? void 0 : o.current) || void 0,
    target: (l == null ? void 0 : l.current) || void 0
  })), [o, l, JSON.stringify(p.offset)]), y;
}
function QV(o) {
  const l = Cg(() => hl(o)), { isStatic: c } = st.useContext(xE);
  if (c) {
    const [, p] = st.useState(o);
    st.useEffect(() => l.on("change", p), []);
  }
  return l;
}
function n_(o, l) {
  const c = QV(l()), p = () => c.set(l());
  return p(), wE(() => {
    const y = () => Kt.preRender(p, !1, !0), E = o.map((v) => v.on("change", y));
    return () => {
      E.forEach((v) => v()), Do(p);
    };
  }), c;
}
const qV = (o) => o && typeof o == "object" && o.mix, XV = (o) => qV(o) ? o.mix : void 0;
function ZV(...o) {
  const l = !Array.isArray(o[0]), c = l ? 0 : -1, p = o[0 + c], y = o[1 + c], E = o[2 + c], v = o[3 + c], w = tT(y, E, {
    mixer: XV(E[0]),
    ...v
  });
  return l ? w(p) : w;
}
function JV(o) {
  Kh.current = [], o();
  const l = n_(Kh.current, o);
  return Kh.current = void 0, l;
}
function Cb(o, l, c, p) {
  if (typeof o == "function")
    return JV(o);
  const y = typeof l == "function" ? l : ZV(l, c, p);
  return Array.isArray(o) ? Eb(o, y) : Eb([o], ([E]) => y(E));
}
function Eb(o, l) {
  const c = Cg(() => []);
  return n_(o, () => {
    c.length = 0;
    const p = o.length;
    for (let y = 0; y < p; y++)
      c[y] = o[y].get();
    return l(c);
  });
}
const ez = () => {
  const o = st.useRef(null), { scrollYProgress: l } = KV({
    target: o
  });
  return /* @__PURE__ */ mn.jsxs(
    "section",
    {
      ref: o,
      className: "font-jakarta-sans mx-auto flex h-[calc(350vh+400px)] w-screen max-w-[100vw] flex-col items-center overflow-hidden bg-[#FAFDEE] px-6 text-[#1F3A4B] sm:px-10",
      children: [
        /* @__PURE__ */ mn.jsxs("div", { className: "relative mt-42 flex w-fit max-w-full flex-col items-center justify-center gap-10 py-12 text-center sm:gap-12 sm:py-16", children: [
          /* @__PURE__ */ mn.jsxs("h1", { className: "font-jakarta-sans relative z-10 text-7xl font-medium leading-[1.06] tracking-[-0.08em] lg:text-9xl", children: [
            "The Stroke ",
            /* @__PURE__ */ mn.jsx("br", {}),
            " That follows the ",
            /* @__PURE__ */ mn.jsx("br", {}),
            "Scroll Progress"
          ] }),
          /* @__PURE__ */ mn.jsx("p", { className: "font-jakarta-sans relative z-10 max-w-2xl text-xl font-medium leading-relaxed text-[#1F3A4B] sm:text-2xl", children: "Scroll down to see the effect" }),
          /* @__PURE__ */ mn.jsx(
            tz,
            {
              className: "pointer-events-none absolute -right-[40%] top-0 z-0 h-auto w-[min(90vw,1278px)] max-w-none select-none",
              scrollYProgress: l
            }
          )
        ] }),
        /* @__PURE__ */ mn.jsxs("div", { className: "font-jakarta-sans w-full translate-y-[calc(200vh+400px)] rounded-4xl bg-[#1F3A4B] px-4 pb-24 pt-16 text-[#FAFDEE] sm:px-8 sm:pb-32 sm:pt-20", children: [
          /* @__PURE__ */ mn.jsx("h1", { className: "mt-6 text-center text-[15.5vw] font-bold leading-[0.95] tracking-tighter lg:mt-10 lg:text-[16.6vw]", children: "skiperui.com" }),
          /* @__PURE__ */ mn.jsxs("div", { className: "mt-24 flex w-full flex-col items-start gap-12 px-2 font-medium sm:mt-32 sm:gap-16 sm:px-6 lg:mt-40 lg:flex-row lg:justify-between lg:gap-20", children: [
            /* @__PURE__ */ mn.jsxs("div", { className: "flex w-full items-center justify-between gap-16 uppercase sm:gap-20 lg:w-fit lg:justify-center", children: [
              /* @__PURE__ */ mn.jsxs("p", { className: "w-fit text-sm leading-relaxed sm:text-base", children: [
                "punjab, india ",
                /* @__PURE__ */ mn.jsx("br", {}),
                "and online"
              ] }),
              /* @__PURE__ */ mn.jsxs("p", { className: "w-fit text-right text-sm leading-relaxed sm:text-base lg:text-left", children: [
                "sep 1, 2025 ",
                /* @__PURE__ */ mn.jsx("br", {}),
                " the Moosa pind"
              ] })
            ] }),
            /* @__PURE__ */ mn.jsxs("div", { className: "flex w-full flex-wrap items-center justify-between gap-16 uppercase sm:gap-20 lg:w-fit lg:justify-center", children: [
              /* @__PURE__ */ mn.jsxs("p", { className: "w-fit text-sm leading-relaxed sm:text-base", children: [
                "online ",
                /* @__PURE__ */ mn.jsx("br", {}),
                " free"
              ] }),
              /* @__PURE__ */ mn.jsxs("p", { className: "w-fit text-right text-sm leading-relaxed sm:text-base lg:text-left", children: [
                "in person tickets ",
                /* @__PURE__ */ mn.jsx("br", {}),
                " $600"
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
};
function tz({
  className: o,
  scrollYProgress: l
}) {
  const c = Cb(l, [0, 1], [0.5, 1]), p = Cb(c, (y) => 1 - y);
  return /* @__PURE__ */ mn.jsx(
    "svg",
    {
      width: "1278",
      height: "2319",
      viewBox: "0 0 1278 2319",
      fill: "none",
      overflow: "visible",
      xmlns: "http://www.w3.org/2000/svg",
      className: o,
      "aria-hidden": !0,
      children: /* @__PURE__ */ mn.jsx(
        CV.path,
        {
          d: "M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89",
          stroke: "#C2F84F",
          strokeWidth: 20,
          strokeLinecap: "round",
          fill: "none",
          style: {
            pathLength: c,
            strokeDashoffset: p
          }
        }
      )
    }
  );
}
const Tb = document.getElementById("svg-follow-scroll-root");
Tb && eN.createRoot(Tb).render(/* @__PURE__ */ mn.jsx(ez, {}));
