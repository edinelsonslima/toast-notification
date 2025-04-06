var le = Object.defineProperty;
var _e = (t, n, i) => n in t ? le(t, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[n] = i;
var Q = (t, n, i) => _e(t, typeof n != "symbol" ? n + "" : n, i);
import "./style.css";
import de, { isValidElement as te, useState as re, useCallback as ne, useEffect as oe } from "react";
class ge {
  constructor() {
    Q(this, "listeners", /* @__PURE__ */ new Map([]));
  }
  on(n, i) {
    var s;
    this.listeners.has(n) || this.listeners.set(n, []), (s = this.listeners.get(n)) == null || s.push(i);
  }
  emit(n, i) {
    var s;
    this.listeners.has(n) && ((s = this.listeners.get(n)) == null || s.forEach((u) => u(i)));
  }
  removeListener(n, i) {
    const s = this.listeners.get(n);
    if (!s) return;
    const u = s.filter(
      (o) => o !== i
    );
    this.listeners.set(n, u);
  }
}
function x(t) {
  return function(n) {
    if (te(n))
      return v({ content: n, type: t });
    if (typeof n == "object") {
      const { content: i, duration: s } = n;
      return v({ content: i, duration: s, type: t });
    }
    return v({ content: String(n), type: t });
  };
}
function be(t) {
  if (t)
    return te(t) || typeof t != "object" || Array.isArray(t) ? t : JSON.stringify(t);
}
const G = new ge();
function v({ duration: t, content: n, type: i }) {
  n = be(n), G.emit("add-toast", { content: n, duration: t, type: i });
}
v.error = x("error");
v.success = x("success");
v.warn = x("warn");
v.info = x("info");
v.ghost = x("ghost");
var I = { exports: {} }, j = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K;
function Ee() {
  if (K) return j;
  K = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function i(s, u, o) {
    var l = null;
    if (o !== void 0 && (l = "" + o), u.key !== void 0 && (l = "" + u.key), "key" in u) {
      o = {};
      for (var _ in u)
        _ !== "key" && (o[_] = u[_]);
    } else o = u;
    return u = o.ref, {
      $$typeof: t,
      type: s,
      key: l,
      ref: u !== void 0 ? u : null,
      props: o
    };
  }
  return j.Fragment = n, j.jsx = i, j.jsxs = i, j;
}
var P = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N;
function he() {
  return N || (N = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ce ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case E:
          return "Profiler";
        case A:
          return "StrictMode";
        case ie:
          return "Suspense";
        case ae:
          return "SuspenseList";
        case ue:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case b:
            return "Portal";
          case O:
            return (e.displayName || "Context") + ".Provider";
          case y:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case se:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case q:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function i(e) {
      try {
        n(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), n(e);
      }
    }
    function s(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === q)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function l(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function _(e, r) {
      function a() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function h() {
      var e = t(this.type);
      return X[e] || (X[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function w(e, r, a, f, T, g, W, F) {
      return a = g.ref, e = {
        $$typeof: d,
        type: e,
        key: r,
        props: g,
        _owner: T
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function p(e, r, a, f, T, g, W, F) {
      var m = r.children;
      if (m !== void 0)
        if (f)
          if (fe(m)) {
            for (f = 0; f < m.length; f++)
              S(m[f]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(m);
      if (z.call(r, "key")) {
        m = t(e);
        var C = Object.keys(r).filter(function(me) {
          return me !== "key";
        });
        f = 0 < C.length ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}", Z[m + f] || (C = 0 < C.length ? "{" + C.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          m,
          C,
          m
        ), Z[m + f] = !0);
      }
      if (m = null, a !== void 0 && (i(a), m = "" + a), l(r) && (i(r.key), m = "" + r.key), "key" in r) {
        a = {};
        for (var D in r)
          D !== "key" && (a[D] = r[D]);
      } else a = r;
      return m && _(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), w(
        e,
        m,
        g,
        T,
        u(),
        a,
        W,
        F
      );
    }
    function S(e) {
      typeof e == "object" && e !== null && e.$$typeof === d && e._store && (e._store.validated = 1);
    }
    var c = de, d = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), O = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), ue = Symbol.for("react.activity"), ce = Symbol.for("react.client.reference"), U = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, fe = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    c = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var V, X = {}, B = c["react-stack-bottom-frame"].bind(
      c,
      o
    )(), H = L(s(o)), Z = {};
    P.Fragment = R, P.jsx = function(e, r, a, f, T) {
      var g = 1e4 > U.recentlyCreatedOwnerStacks++;
      return p(
        e,
        r,
        a,
        !1,
        f,
        T,
        g ? Error("react-stack-top-frame") : B,
        g ? L(s(e)) : H
      );
    }, P.jsxs = function(e, r, a, f, T) {
      var g = 1e4 > U.recentlyCreatedOwnerStacks++;
      return p(
        e,
        r,
        a,
        !0,
        f,
        T,
        g ? Error("react-stack-top-frame") : B,
        g ? L(s(e)) : H
      );
    };
  }()), P;
}
var ee;
function pe() {
  return ee || (ee = 1, process.env.NODE_ENV === "production" ? I.exports = Ee() : I.exports = he()), I.exports;
}
var J = pe();
function $(t) {
  if (!(!t || typeof t != "object"))
    return t;
}
function M(t) {
  return !t || typeof t != "string" ? "" : t;
}
const Re = "_screenRightIn_1m461_1", Te = "_screenCenterIn_1m461_1", ve = "_screenLeftIn_1m461_1", Se = "_success_1m461_114", ke = "_info_1m461_119", Ae = "_warn_1m461_124", Oe = "_error_1m461_129", Ce = "_ghost_1m461_134", we = "_screenOut_1m461_1", k = {
  "toast-container": "_toast-container_1m461_1",
  "animation-message-right-top": "_animation-message-right-top_1m461_9",
  "animation-message-right-center": "_animation-message-right-center_1m461_10",
  "animation-message-right-bottom": "_animation-message-right-bottom_1m461_11",
  screenRightIn: Re,
  "right-top": "_right-top_1m461_15",
  "right-center": "_right-center_1m461_16",
  "right-bottom": "_right-bottom_1m461_17",
  "animation-message-center-top": "_animation-message-center-top_1m461_37",
  "animation-message-center-bottom": "_animation-message-center-bottom_1m461_38",
  "animation-message-center-center": "_animation-message-center-center_1m461_39",
  screenCenterIn: Te,
  "center-top": "_center-top_1m461_43",
  "center-center": "_center-center_1m461_44",
  "center-bottom": "_center-bottom_1m461_45",
  "animation-message-left-top": "_animation-message-left-top_1m461_64",
  "animation-message-left-center": "_animation-message-left-center_1m461_65",
  "animation-message-left-bottom": "_animation-message-left-bottom_1m461_66",
  screenLeftIn: ve,
  "left-top": "_left-top_1m461_70",
  "left-center": "_left-center_1m461_71",
  "left-bottom": "_left-bottom_1m461_72",
  "toast-message": "_toast-message_1m461_90",
  success: Se,
  info: ke,
  warn: Ae,
  error: Oe,
  ghost: Ce,
  "animation-unmount": "_animation-unmount_1m461_139",
  screenOut: we
};
function ye({
  message: { duration: t = 1e3 * 7, id: n, content: i, type: s },
  onRemoveMessage: u,
  classNames: o
}) {
  var R, A;
  const l = (R = o == null ? void 0 : o.toastMessages) == null ? void 0 : R["*"], _ = (A = o == null ? void 0 : o.toastMessages) == null ? void 0 : A[s], [h, w] = re(void 0);
  function p() {
    return h ? k[h] ? k[h] : h : "";
  }
  function S(E) {
    var O;
    const y = p();
    (O = E.currentTarget.classList) != null && O.contains(y) && u(n);
  }
  function c() {
    const E = M(l), y = M(_), O = p(), Y = k[`animation-message-${o == null ? void 0 : o.toastPosition}`];
    return `${k["toast-message"]} ${k[s]} ${Y} ${O} ${y} ${E}`.trim();
  }
  function d() {
    return { ...$(l), ...$(_) };
  }
  const b = ne(() => {
    w((o == null ? void 0 : o.animationUnmount) || "animation-unmount");
  }, [o == null ? void 0 : o.animationUnmount]);
  return oe(() => {
    const E = setTimeout(() => b(), t);
    return () => clearTimeout(E);
  }, [t, b]), /* @__PURE__ */ J.jsx(
    "span",
    {
      tabIndex: 0,
      onAnimationEnd: S,
      onClick: b,
      style: d(),
      className: c(),
      children: i
    }
  );
}
function Ie({
  classNames: t,
  defaultDuration: n,
  position: i = "right-top"
}) {
  var p, S;
  const s = (p = t == null ? void 0 : t.toastContainer) == null ? void 0 : p["*"], u = (S = t == null ? void 0 : t.toastContainer) == null ? void 0 : S[i], [o, l] = re([]);
  function _() {
    const c = M(s), d = M(u);
    return `${k["toast-container"]} ${k[i]} ${d} ${c}`.trim();
  }
  function h() {
    return { ...$(s), ...$(u) };
  }
  const w = ne((c) => {
    l(
      (d) => d.filter((b) => b.id !== c)
    );
  }, []);
  return oe(() => {
    function c(d) {
      const { content: b, type: R, duration: A = n } = d;
      l((E) => [
        ...E,
        { id: crypto.randomUUID(), content: b, duration: A, type: R }
      ]);
    }
    return G.on("add-toast", c), () => {
      G.removeListener("add-toast", c);
    };
  }, [n]), /* @__PURE__ */ J.jsx("div", { style: h(), className: _(), children: o.map((c) => /* @__PURE__ */ J.jsx(
    ye,
    {
      message: c,
      onRemoveMessage: w,
      classNames: {
        toastPosition: i,
        toastMessages: t == null ? void 0 : t.toastMessages,
        animationUnmount: t == null ? void 0 : t.animationUnmount
      }
    },
    c.id
  )) });
}
export {
  Ie as ToastContainer,
  v as toast
};
