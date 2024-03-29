var hr = Object.defineProperty;
var br = (n, a, c) => a in n ? hr(n, a, { enumerable: !0, configurable: !0, writable: !0, value: c }) : n[a] = c;
var Ie = (n, a, c) => (br(n, typeof a != "symbol" ? a + "" : a, c), c);
import $e, { isValidElement as We, useState as Me, useCallback as Le, useEffect as Ue } from "react";
class yr {
  constructor() {
    Ie(this, "listeners", /* @__PURE__ */ new Map([]));
  }
  on(a, c) {
    var d;
    this.listeners.has(a) || this.listeners.set(a, []), (d = this.listeners.get(a)) == null || d.push(c);
  }
  emit(a, c) {
    var d;
    this.listeners.has(a) && ((d = this.listeners.get(a)) == null || d.forEach((y) => y(c)));
  }
  removeListener(a, c) {
    const d = this.listeners.get(a);
    if (!d)
      return;
    const y = d.filter(
      (l) => l !== c
    );
    this.listeners.set(a, y);
  }
}
function G(n) {
  return function(a) {
    if (We(a))
      return I({ content: a, type: n });
    const { content: c, duration: d } = a;
    return I({ content: c, duration: d, type: n });
  };
}
function Er(n) {
  if (n)
    return We(n) || typeof n != "object" || Array.isArray(n) ? n : JSON.stringify(n);
}
const ie = new yr();
function I({ duration: n, content: a, type: c }) {
  a = Er(a), ie.emit("add-toast", { content: a, duration: n, type: c });
}
I.error = G("error");
I.success = G("success");
I.warn = G("warn");
I.info = G("info");
I.ghost = G("ghost");
var se = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Rr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var n = $e, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), j = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), w = Symbol.iterator, D = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[D];
      return typeof r == "function" ? r : null;
    }
    var R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        $("error", e, t);
      }
    }
    function $(e, r, t) {
      {
        var o = R.ReactDebugCurrentFrame, u = o.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var f = t.map(function(s) {
          return String(s);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Z = !1, Ye = !1, Ve = !1, Ge = !1, Be = !1, fe;
    fe = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === l || Be || e === y || e === O || e === g || Ge || e === C || Z || Ye || Ve || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === E || e.$$typeof === S || e.$$typeof === j || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Je(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case c:
          return "Portal";
        case l:
          return "Profiler";
        case y:
          return "StrictMode";
        case O:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return ce(r) + ".Consumer";
          case S:
            var t = e;
            return ce(t._context) + ".Provider";
          case m:
            return Je(e, e.render, "ForwardRef");
          case E:
            var o = e.displayName || null;
            return o !== null ? o : P(e.type) || "Memo";
          case p: {
            var u = e, f = u._payload, s = u._init;
            try {
              return P(s(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, L = 0, le, de, me, ve, _e, ge, pe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function ze() {
      {
        if (L === 0) {
          le = console.log, de = console.info, me = console.warn, ve = console.error, _e = console.group, ge = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
        L++;
      }
    }
    function Ke() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: le
            }),
            info: k({}, e, {
              value: de
            }),
            warn: k({}, e, {
              value: me
            }),
            error: k({}, e, {
              value: ve
            }),
            group: k({}, e, {
              value: _e
            }),
            groupCollapsed: k({}, e, {
              value: ge
            }),
            groupEnd: k({}, e, {
              value: pe
            })
          });
        }
        L < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = R.ReactCurrentDispatcher, N;
    function B(e, r, t) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (u) {
            var o = u.stack.trim().match(/\n( *(at )?)/);
            N = o && o[1] || "";
          }
        return `
` + N + e;
      }
    }
    var ee = !1, q;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      q = new He();
    }
    function be(e, r) {
      if (!e || ee)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      ee = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = Q.current, Q.current = null, ze();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (x) {
              o = x;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (x) {
              o = x;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            o = x;
          }
          e();
        }
      } catch (x) {
        if (x && o && typeof x.stack == "string") {
          for (var i = x.stack.split(`
`), b = o.stack.split(`
`), v = i.length - 1, _ = b.length - 1; v >= 1 && _ >= 0 && i[v] !== b[_]; )
            _--;
          for (; v >= 1 && _ >= 0; v--, _--)
            if (i[v] !== b[_]) {
              if (v !== 1 || _ !== 1)
                do
                  if (v--, _--, _ < 0 || i[v] !== b[_]) {
                    var T = `
` + i[v].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, T), T;
                  }
                while (v >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Q.current = f, Ke(), Error.prepareStackTrace = u;
      }
      var M = e ? e.displayName || e.name : "", Ae = M ? B(M) : "";
      return typeof e == "function" && q.set(e, Ae), Ae;
    }
    function Xe(e, r, t) {
      return be(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Ze(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case O:
          return B("Suspense");
        case g:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Xe(e.render);
          case E:
            return J(e.type, r, t);
          case p: {
            var o = e, u = o._payload, f = o._init;
            try {
              return J(f(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, ye = {}, Ee = R.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Qe(e, r, t, o, u) {
      {
        var f = Function.call.bind(z);
        for (var s in e)
          if (f(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var b = Error((o || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              i = e[s](r, s, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              i = v;
            }
            i && !(i instanceof Error) && (K(u), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, s, typeof i), K(null)), i instanceof Error && !(i.message in ye) && (ye[i.message] = !0, K(u), h("Failed %s type: %s", t, i.message), K(null));
          }
      }
    }
    var Ne = Array.isArray;
    function re(e) {
      return Ne(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function je(e) {
      if (rr(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), Re(e);
    }
    var U = R.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Te, te;
    te = {};
    function nr(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && U.current && r && U.current.stateNode !== r) {
        var t = P(U.current.type);
        te[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(U.current.type), e.ref), te[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, o, u, f, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function fr(e, r, t, o, u) {
      {
        var f, s = {}, i = null, b = null;
        t !== void 0 && (je(t), i = "" + t), or(r) && (je(r.key), i = "" + r.key), nr(r) && (b = r.ref, ar(r, u));
        for (f in r)
          z.call(r, f) && !tr.hasOwnProperty(f) && (s[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            s[f] === void 0 && (s[f] = v[f]);
        }
        if (i || b) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ir(s, _), b && sr(s, _);
        }
        return ur(e, i, b, u, o, U.current, s);
      }
    }
    var ne = R.ReactCurrentOwner, Se = R.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Oe() {
      {
        if (ne.current) {
          var e = P(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var we = {};
    function lr(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = lr(r);
        if (we[t])
          return;
        we[t] = !0;
        var o = "";
        e && e._owner && e._owner !== ne.current && (o = " It was passed a child from " + P(e._owner.type) + "."), W(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), W(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            ae(o) && Pe(o, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = F(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), s; !(s = f.next()).done; )
              ae(s.value) && Pe(s.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = P(r);
          Qe(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var u = P(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            W(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function ke(e, r, t, o, u, f) {
      {
        var s = qe(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = cr(u);
          b ? i += b : i += Oe();
          var v;
          e === null ? v = "null" : re(e) ? v = "array" : e !== void 0 && e.$$typeof === a ? (v = "<" + (P(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, i);
        }
        var _ = fr(e, r, t, u, f);
        if (_ == null)
          return _;
        if (s) {
          var T = r.children;
          if (T !== void 0)
            if (o)
              if (re(T)) {
                for (var M = 0; M < T.length; M++)
                  xe(T[M], e);
                Object.freeze && Object.freeze(T);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(T, e);
        }
        return e === d ? mr(_) : dr(_), _;
      }
    }
    function vr(e, r, t) {
      return ke(e, r, t, !0);
    }
    function _r(e, r, t) {
      return ke(e, r, t, !1);
    }
    var gr = _r, pr = vr;
    Y.Fragment = d, Y.jsx = gr, Y.jsxs = pr;
  }()), Y;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function jr() {
  if (Fe)
    return V;
  Fe = 1;
  var n = $e, a = Symbol.for("react.element"), c = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(j, m, O) {
    var g, E = {}, p = null, C = null;
    O !== void 0 && (p = "" + O), m.key !== void 0 && (p = "" + m.key), m.ref !== void 0 && (C = m.ref);
    for (g in m)
      d.call(m, g) && !l.hasOwnProperty(g) && (E[g] = m[g]);
    if (j && j.defaultProps)
      for (g in m = j.defaultProps, m)
        E[g] === void 0 && (E[g] = m[g]);
    return { $$typeof: a, type: j, key: p, ref: C, props: E, _owner: y.current };
  }
  return V.Fragment = c, V.jsx = S, V.jsxs = S, V;
}
process.env.NODE_ENV === "production" ? se.exports = jr() : se.exports = Rr();
var ue = se.exports;
function H(n) {
  if (!(!n || typeof n != "object"))
    return n;
}
function X(n) {
  return !n || typeof n != "string" ? "" : n;
}
const Cr = "_screenRightIn_1ojrm_1", Tr = "_screenCenterIn_1ojrm_1", Sr = "_screenLeftIn_1ojrm_1", Or = "_success_1ojrm_114", wr = "_info_1ojrm_118", Pr = "_warn_1ojrm_123", xr = "_error_1ojrm_127", kr = "_ghost_1ojrm_132", Ar = "_screenOut_1ojrm_1", A = {
  "toast-container": "_toast-container_1ojrm_1",
  "animation-message-right-top": "_animation-message-right-top_1ojrm_9",
  "animation-message-right-center": "_animation-message-right-center_1ojrm_10",
  "animation-message-right-bottom": "_animation-message-right-bottom_1ojrm_11",
  screenRightIn: Cr,
  "right-top": "_right-top_1ojrm_15",
  "right-center": "_right-center_1ojrm_16",
  "right-bottom": "_right-bottom_1ojrm_17",
  "animation-message-center-top": "_animation-message-center-top_1ojrm_37",
  "animation-message-center-bottom": "_animation-message-center-bottom_1ojrm_38",
  "animation-message-center-center": "_animation-message-center-center_1ojrm_39",
  screenCenterIn: Tr,
  "center-top": "_center-top_1ojrm_43",
  "center-center": "_center-center_1ojrm_44",
  "center-bottom": "_center-bottom_1ojrm_45",
  "animation-message-left-top": "_animation-message-left-top_1ojrm_64",
  "animation-message-left-center": "_animation-message-left-center_1ojrm_65",
  "animation-message-left-bottom": "_animation-message-left-bottom_1ojrm_66",
  screenLeftIn: Sr,
  "left-top": "_left-top_1ojrm_70",
  "left-center": "_left-center_1ojrm_71",
  "left-bottom": "_left-bottom_1ojrm_72",
  "toast-message": "_toast-message_1ojrm_90",
  success: Or,
  info: wr,
  warn: Pr,
  error: xr,
  ghost: kr,
  "animation-unmount": "_animation-unmount_1ojrm_136",
  screenOut: Ar
};
function Ir({
  message: { duration: n = 1e3 * 7, id: a, content: c, type: d },
  onRemoveMessage: y,
  classNames: l
}) {
  var D, F;
  const S = (D = l == null ? void 0 : l.toastMessages) == null ? void 0 : D["*"], j = (F = l == null ? void 0 : l.toastMessages) == null ? void 0 : F[d], [m, O] = Me(void 0);
  function g() {
    return m ? A[m] ? A[m] : m : "";
  }
  function E(R) {
    var $;
    const h = g();
    ($ = R.currentTarget.classList) != null && $.contains(h) && y(a);
  }
  function p() {
    const R = X(S), h = X(j), $ = g(), Z = A[`animation-message-${l == null ? void 0 : l.toastPosition}`];
    return `${A["toast-message"]} ${A[d]} ${Z} ${$} ${h} ${R}`.trim();
  }
  function C() {
    return { ...H(S), ...H(j) };
  }
  const w = Le(() => {
    O((l == null ? void 0 : l.animationUnmount) || "animation-unmount");
  }, [l == null ? void 0 : l.animationUnmount]);
  return Ue(() => {
    const R = setTimeout(() => w(), n);
    return () => clearTimeout(R);
  }, [y, a, n, w]), /* @__PURE__ */ ue.jsx(
    "span",
    {
      tabIndex: 0,
      onAnimationEnd: E,
      onClick: w,
      style: C(),
      className: p(),
      children: c
    }
  );
}
function $r({
  classNames: n,
  defaultDuration: a,
  position: c = "right-top"
}) {
  var g, E;
  const d = (g = n == null ? void 0 : n.toastContainer) == null ? void 0 : g["*"], y = (E = n == null ? void 0 : n.toastContainer) == null ? void 0 : E[c], [l, S] = Me([]);
  function j() {
    const p = X(d), C = X(y);
    return `${A["toast-container"]} ${A[c]} ${C} ${p}`.trim();
  }
  function m() {
    return { ...H(d), ...H(y) };
  }
  const O = Le((p) => {
    S(
      (C) => C.filter((w) => w.id !== p)
    );
  }, []);
  return Ue(() => {
    function p(C) {
      const { content: w, type: D, duration: F = a } = C;
      S((R) => [
        ...R,
        { id: crypto.randomUUID(), content: w, duration: F, type: D }
      ]);
    }
    return ie.on("add-toast", p), () => {
      ie.removeListener("add-toast", p);
    };
  }, [a]), /* @__PURE__ */ ue.jsx("div", { style: m(), className: j(), children: l.map((p) => /* @__PURE__ */ ue.jsx(
    Ir,
    {
      message: p,
      onRemoveMessage: O,
      classNames: {
        toastPosition: c,
        toastMessages: n == null ? void 0 : n.toastMessages,
        animationUnmount: n == null ? void 0 : n.animationUnmount
      }
    },
    p.id
  )) });
}
export {
  $r as ToastContainer,
  I as toast
};
