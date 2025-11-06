var df = t => {
    throw TypeError(t)
}
;
var bl = (t, e, r) => e.has(t) || df("Cannot " + r);
var C = (t, e, r) => (bl(t, e, "read from private field"),
r ? r.call(t) : e.get(t))
  , te = (t, e, r) => e.has(t) ? df("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r)
  , H = (t, e, r, n) => (bl(t, e, "write to private field"),
n ? n.call(t, r) : e.set(t, r),
r)
  , Ne = (t, e, r) => (bl(t, e, "access private method"),
r);
var uo = (t, e, r, n) => ({
    set _(s) {
        H(t, e, s, r)
    },
    get _() {
        return C(t, e, n)
    }
});
function J0(t, e) {
    for (var r = 0; r < e.length; r++) {
        const n = e[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const s in n)
                if (s !== "default" && !(s in t)) {
                    const i = Object.getOwnPropertyDescriptor(n, s);
                    i && Object.defineProperty(t, s, i.get ? i : {
                        enumerable: !0,
                        get: () => n[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        n(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = r(s);
        fetch(s.href, i)
    }
}
)();
function zp(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
function Bp(t) {
    if (t.__esModule)
        return t;
    var e = t.default;
    if (typeof e == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        r.prototype = e.prototype
    } else
        r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.keys(t).forEach(function(n) {
        var s = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(r, n, s.get ? s : {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }),
    r
}
var Vp = {
    exports: {}
}
  , Ua = {}
  , Wp = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi = Symbol.for("react.element")
  , Y0 = Symbol.for("react.portal")
  , X0 = Symbol.for("react.fragment")
  , Z0 = Symbol.for("react.strict_mode")
  , ew = Symbol.for("react.profiler")
  , tw = Symbol.for("react.provider")
  , rw = Symbol.for("react.context")
  , nw = Symbol.for("react.forward_ref")
  , sw = Symbol.for("react.suspense")
  , iw = Symbol.for("react.memo")
  , ow = Symbol.for("react.lazy")
  , ff = Symbol.iterator;
function aw(t) {
    return t === null || typeof t != "object" ? null : (t = ff && t[ff] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var Hp = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , qp = Object.assign
  , Kp = {};
function Fs(t, e, r) {
    this.props = t,
    this.context = e,
    this.refs = Kp,
    this.updater = r || Hp
}
Fs.prototype.isReactComponent = {};
Fs.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
Fs.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function Gp() {}
Gp.prototype = Fs.prototype;
function Rc(t, e, r) {
    this.props = t,
    this.context = e,
    this.refs = Kp,
    this.updater = r || Hp
}
var Ac = Rc.prototype = new Gp;
Ac.constructor = Rc;
qp(Ac, Fs.prototype);
Ac.isPureReactComponent = !0;
var hf = Array.isArray
  , Qp = Object.prototype.hasOwnProperty
  , Nc = {
    current: null
}
  , Jp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Yp(t, e, r) {
    var n, s = {}, i = null, o = null;
    if (e != null)
        for (n in e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (i = "" + e.key),
        e)
            Qp.call(e, n) && !Jp.hasOwnProperty(n) && (s[n] = e[n]);
    var a = arguments.length - 2;
    if (a === 1)
        s.children = r;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        s.children = l
    }
    if (t && t.defaultProps)
        for (n in a = t.defaultProps,
        a)
            s[n] === void 0 && (s[n] = a[n]);
    return {
        $$typeof: Yi,
        type: t,
        key: i,
        ref: o,
        props: s,
        _owner: Nc.current
    }
}
function lw(t, e) {
    return {
        $$typeof: Yi,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function Ic(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Yi
}
function uw(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(r) {
        return e[r]
    })
}
var pf = /\/+/g;
function _l(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? uw("" + t.key) : e.toString(36)
}
function Bo(t, e, r, n, s) {
    var i = typeof t;
    (i === "undefined" || i === "boolean") && (t = null);
    var o = !1;
    if (t === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case Yi:
            case Y0:
                o = !0
            }
        }
    if (o)
        return o = t,
        s = s(o),
        t = n === "" ? "." + _l(o, 0) : n,
        hf(s) ? (r = "",
        t != null && (r = t.replace(pf, "$&/") + "/"),
        Bo(s, e, r, "", function(u) {
            return u
        })) : s != null && (Ic(s) && (s = lw(s, r + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(pf, "$&/") + "/") + t)),
        e.push(s)),
        1;
    if (o = 0,
    n = n === "" ? "." : n + ":",
    hf(t))
        for (var a = 0; a < t.length; a++) {
            i = t[a];
            var l = n + _l(i, a);
            o += Bo(i, e, r, l, s)
        }
    else if (l = aw(t),
    typeof l == "function")
        for (t = l.call(t),
        a = 0; !(i = t.next()).done; )
            i = i.value,
            l = n + _l(i, a++),
            o += Bo(i, e, r, l, s);
    else if (i === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function co(t, e, r) {
    if (t == null)
        return t;
    var n = []
      , s = 0;
    return Bo(t, n, "", "", function(i) {
        return e.call(r, i, s++)
    }),
    n
}
function cw(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(r) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = r)
        }, function(r) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = r)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var Ve = {
    current: null
}
  , Vo = {
    transition: null
}
  , dw = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: Vo,
    ReactCurrentOwner: Nc
};
function Xp() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: co,
    forEach: function(t, e, r) {
        co(t, function() {
            e.apply(this, arguments)
        }, r)
    },
    count: function(t) {
        var e = 0;
        return co(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return co(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!Ic(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
Y.Component = Fs;
Y.Fragment = X0;
Y.Profiler = ew;
Y.PureComponent = Rc;
Y.StrictMode = Z0;
Y.Suspense = sw;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dw;
Y.act = Xp;
Y.cloneElement = function(t, e, r) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var n = qp({}, t.props)
      , s = t.key
      , i = t.ref
      , o = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (i = e.ref,
        o = Nc.current),
        e.key !== void 0 && (s = "" + e.key),
        t.type && t.type.defaultProps)
            var a = t.type.defaultProps;
        for (l in e)
            Qp.call(e, l) && !Jp.hasOwnProperty(l) && (n[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        n.children = r;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        n.children = a
    }
    return {
        $$typeof: Yi,
        type: t.type,
        key: s,
        ref: i,
        props: n,
        _owner: o
    }
}
;
Y.createContext = function(t) {
    return t = {
        $$typeof: rw,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: tw,
        _context: t
    },
    t.Consumer = t
}
;
Y.createElement = Yp;
Y.createFactory = function(t) {
    var e = Yp.bind(null, t);
    return e.type = t,
    e
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(t) {
    return {
        $$typeof: nw,
        render: t
    }
}
;
Y.isValidElement = Ic;
Y.lazy = function(t) {
    return {
        $$typeof: ow,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: cw
    }
}
;
Y.memo = function(t, e) {
    return {
        $$typeof: iw,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
Y.startTransition = function(t) {
    var e = Vo.transition;
    Vo.transition = {};
    try {
        t()
    } finally {
        Vo.transition = e
    }
}
;
Y.unstable_act = Xp;
Y.useCallback = function(t, e) {
    return Ve.current.useCallback(t, e)
}
;
Y.useContext = function(t) {
    return Ve.current.useContext(t)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(t) {
    return Ve.current.useDeferredValue(t)
}
;
Y.useEffect = function(t, e) {
    return Ve.current.useEffect(t, e)
}
;
Y.useId = function() {
    return Ve.current.useId()
}
;
Y.useImperativeHandle = function(t, e, r) {
    return Ve.current.useImperativeHandle(t, e, r)
}
;
Y.useInsertionEffect = function(t, e) {
    return Ve.current.useInsertionEffect(t, e)
}
;
Y.useLayoutEffect = function(t, e) {
    return Ve.current.useLayoutEffect(t, e)
}
;
Y.useMemo = function(t, e) {
    return Ve.current.useMemo(t, e)
}
;
Y.useReducer = function(t, e, r) {
    return Ve.current.useReducer(t, e, r)
}
;
Y.useRef = function(t) {
    return Ve.current.useRef(t)
}
;
Y.useState = function(t) {
    return Ve.current.useState(t)
}
;
Y.useSyncExternalStore = function(t, e, r) {
    return Ve.current.useSyncExternalStore(t, e, r)
}
;
Y.useTransition = function() {
    return Ve.current.useTransition()
}
;
Y.version = "18.3.1";
Wp.exports = Y;
var b = Wp.exports;
const A = zp(b)
  , Zp = J0({
    __proto__: null,
    default: A
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fw = b
  , hw = Symbol.for("react.element")
  , pw = Symbol.for("react.fragment")
  , mw = Object.prototype.hasOwnProperty
  , gw = fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , vw = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function em(t, e, r) {
    var n, s = {}, i = null, o = null;
    r !== void 0 && (i = "" + r),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
    for (n in e)
        mw.call(e, n) && !vw.hasOwnProperty(n) && (s[n] = e[n]);
    if (t && t.defaultProps)
        for (n in e = t.defaultProps,
        e)
            s[n] === void 0 && (s[n] = e[n]);
    return {
        $$typeof: hw,
        type: t,
        key: i,
        ref: o,
        props: s,
        _owner: gw.current
    }
}
Ua.Fragment = pw;
Ua.jsx = em;
Ua.jsxs = em;
Vp.exports = Ua;
var x = Vp.exports
  , tm = {
    exports: {}
}
  , ct = {}
  , rm = {
    exports: {}
}
  , nm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(T, O) {
        var L = T.length;
        T.push(O);
        e: for (; 0 < L; ) {
            var K = L - 1 >>> 1
              , F = T[K];
            if (0 < s(F, O))
                T[K] = O,
                T[L] = F,
                L = K;
            else
                break e
        }
    }
    function r(T) {
        return T.length === 0 ? null : T[0]
    }
    function n(T) {
        if (T.length === 0)
            return null;
        var O = T[0]
          , L = T.pop();
        if (L !== O) {
            T[0] = L;
            e: for (var K = 0, F = T.length, J = F >>> 1; K < J; ) {
                var Z = 2 * (K + 1) - 1
                  , we = T[Z]
                  , Ae = Z + 1
                  , re = T[Ae];
                if (0 > s(we, L))
                    Ae < F && 0 > s(re, we) ? (T[K] = re,
                    T[Ae] = L,
                    K = Ae) : (T[K] = we,
                    T[Z] = L,
                    K = Z);
                else if (Ae < F && 0 > s(re, L))
                    T[K] = re,
                    T[Ae] = L,
                    K = Ae;
                else
                    break e
            }
        }
        return O
    }
    function s(T, O) {
        var L = T.sortIndex - O.sortIndex;
        return L !== 0 ? L : T.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        t.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , a = o.now();
        t.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , f = null
      , h = 3
      , d = !1
      , w = !1
      , m = !1
      , y = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(T) {
        for (var O = r(u); O !== null; ) {
            if (O.callback === null)
                n(u);
            else if (O.startTime <= T)
                n(u),
                O.sortIndex = O.expirationTime,
                e(l, O);
            else
                break;
            O = r(u)
        }
    }
    function _(T) {
        if (m = !1,
        v(T),
        !w)
            if (r(l) !== null)
                w = !0,
                B(S);
            else {
                var O = r(u);
                O !== null && q(_, O.startTime - T)
            }
    }
    function S(T, O) {
        w = !1,
        m && (m = !1,
        g(P),
        P = -1),
        d = !0;
        var L = h;
        try {
            for (v(O),
            f = r(l); f !== null && (!(f.expirationTime > O) || T && !z()); ) {
                var K = f.callback;
                if (typeof K == "function") {
                    f.callback = null,
                    h = f.priorityLevel;
                    var F = K(f.expirationTime <= O);
                    O = t.unstable_now(),
                    typeof F == "function" ? f.callback = F : f === r(l) && n(l),
                    v(O)
                } else
                    n(l);
                f = r(l)
            }
            if (f !== null)
                var J = !0;
            else {
                var Z = r(u);
                Z !== null && q(_, Z.startTime - O),
                J = !1
            }
            return J
        } finally {
            f = null,
            h = L,
            d = !1
        }
    }
    var E = !1
      , k = null
      , P = -1
      , R = 5
      , N = -1;
    function z() {
        return !(t.unstable_now() - N < R)
    }
    function D() {
        if (k !== null) {
            var T = t.unstable_now();
            N = T;
            var O = !0;
            try {
                O = k(!0, T)
            } finally {
                O ? Q() : (E = !1,
                k = null)
            }
        } else
            E = !1
    }
    var Q;
    if (typeof p == "function")
        Q = function() {
            p(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var I = new MessageChannel
          , X = I.port2;
        I.port1.onmessage = D,
        Q = function() {
            X.postMessage(null)
        }
    } else
        Q = function() {
            y(D, 0)
        }
        ;
    function B(T) {
        k = T,
        E || (E = !0,
        Q())
    }
    function q(T, O) {
        P = y(function() {
            T(t.unstable_now())
        }, O)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        w || d || (w = !0,
        B(S))
    }
    ,
    t.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < T ? Math.floor(1e3 / T) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return r(l)
    }
    ,
    t.unstable_next = function(T) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var O = 3;
            break;
        default:
            O = h
        }
        var L = h;
        h = O;
        try {
            return T()
        } finally {
            h = L
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(T, O) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var L = h;
        h = T;
        try {
            return O()
        } finally {
            h = L
        }
    }
    ,
    t.unstable_scheduleCallback = function(T, O, L) {
        var K = t.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? K + L : K) : L = K,
        T) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = L + F,
        T = {
            id: c++,
            callback: O,
            priorityLevel: T,
            startTime: L,
            expirationTime: F,
            sortIndex: -1
        },
        L > K ? (T.sortIndex = L,
        e(u, T),
        r(l) === null && T === r(u) && (m ? (g(P),
        P = -1) : m = !0,
        q(_, L - K))) : (T.sortIndex = F,
        e(l, T),
        w || d || (w = !0,
        B(S))),
        T
    }
    ,
    t.unstable_shouldYield = z,
    t.unstable_wrapCallback = function(T) {
        var O = h;
        return function() {
            var L = h;
            h = O;
            try {
                return T.apply(this, arguments)
            } finally {
                h = L
            }
        }
    }
}
)(nm);
rm.exports = nm;
var yw = rm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ww = b
  , ut = yw;
function j(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++)
        e += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var sm = new Set
  , ki = {};
function In(t, e) {
    Ts(t, e),
    Ts(t + "Capture", e)
}
function Ts(t, e) {
    for (ki[t] = e,
    t = 0; t < e.length; t++)
        sm.add(e[t])
}
var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , cu = Object.prototype.hasOwnProperty
  , xw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , mf = {}
  , gf = {};
function bw(t) {
    return cu.call(gf, t) ? !0 : cu.call(mf, t) ? !1 : xw.test(t) ? gf[t] = !0 : (mf[t] = !0,
    !1)
}
function _w(t, e, r, n) {
    if (r !== null && r.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return n ? !1 : r !== null ? !r.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function Sw(t, e, r, n) {
    if (e === null || typeof e > "u" || _w(t, e, r, n))
        return !0;
    if (n)
        return !1;
    if (r !== null)
        switch (r.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function We(t, e, r, n, s, i, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = n,
    this.attributeNamespace = s,
    this.mustUseProperty = r,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    je[t] = new We(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    je[e] = new We(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    je[t] = new We(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    je[t] = new We(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    je[t] = new We(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    je[t] = new We(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    je[t] = new We(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    je[t] = new We(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    je[t] = new We(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var Lc = /[\-:]([a-z])/g;
function $c(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(Lc, $c);
    je[e] = new We(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(Lc, $c);
    je[e] = new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(Lc, $c);
    je[e] = new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    je[t] = new We(t,1,!1,t.toLowerCase(),null,!1,!1)
});
je.xlinkHref = new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    je[t] = new We(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function Dc(t, e, r, n) {
    var s = je.hasOwnProperty(e) ? je[e] : null;
    (s !== null ? s.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Sw(e, r, s, n) && (r = null),
    n || s === null ? bw(e) && (r === null ? t.removeAttribute(e) : t.setAttribute(e, "" + r)) : s.mustUseProperty ? t[s.propertyName] = r === null ? s.type === 3 ? !1 : "" : r : (e = s.attributeName,
    n = s.attributeNamespace,
    r === null ? t.removeAttribute(e) : (s = s.type,
    r = s === 3 || s === 4 && r === !0 ? "" : "" + r,
    n ? t.setAttributeNS(n, e, r) : t.setAttribute(e, r))))
}
var hr = ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , fo = Symbol.for("react.element")
  , Yn = Symbol.for("react.portal")
  , Xn = Symbol.for("react.fragment")
  , Mc = Symbol.for("react.strict_mode")
  , du = Symbol.for("react.profiler")
  , im = Symbol.for("react.provider")
  , om = Symbol.for("react.context")
  , Fc = Symbol.for("react.forward_ref")
  , fu = Symbol.for("react.suspense")
  , hu = Symbol.for("react.suspense_list")
  , Uc = Symbol.for("react.memo")
  , Tr = Symbol.for("react.lazy")
  , am = Symbol.for("react.offscreen")
  , vf = Symbol.iterator;
function Ys(t) {
    return t === null || typeof t != "object" ? null : (t = vf && t[vf] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var me = Object.assign, Sl;
function ai(t) {
    if (Sl === void 0)
        try {
            throw Error()
        } catch (r) {
            var e = r.stack.trim().match(/\n( *(at )?)/);
            Sl = e && e[1] || ""
        }
    return `
` + Sl + t
}
var El = !1;
function kl(t, e) {
    if (!t || El)
        return "";
    El = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var n = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    n = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            t()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), i = n.stack.split(`
`), o = s.length - 1, a = i.length - 1; 1 <= o && 0 <= a && s[o] !== i[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (s[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || s[o] !== i[a]) {
                                var l = `
` + s[o].replace(" at new ", " at ");
                                return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        El = !1,
        Error.prepareStackTrace = r
    }
    return (t = t ? t.displayName || t.name : "") ? ai(t) : ""
}
function Ew(t) {
    switch (t.tag) {
    case 5:
        return ai(t.type);
    case 16:
        return ai("Lazy");
    case 13:
        return ai("Suspense");
    case 19:
        return ai("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = kl(t.type, !1),
        t;
    case 11:
        return t = kl(t.type.render, !1),
        t;
    case 1:
        return t = kl(t.type, !0),
        t;
    default:
        return ""
    }
}
function pu(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case Xn:
        return "Fragment";
    case Yn:
        return "Portal";
    case du:
        return "Profiler";
    case Mc:
        return "StrictMode";
    case fu:
        return "Suspense";
    case hu:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case om:
            return (t.displayName || "Context") + ".Consumer";
        case im:
            return (t._context.displayName || "Context") + ".Provider";
        case Fc:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case Uc:
            return e = t.displayName || null,
            e !== null ? e : pu(t.type) || "Memo";
        case Tr:
            e = t._payload,
            t = t._init;
            try {
                return pu(t(e))
            } catch {}
        }
    return null
}
function kw(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return pu(e);
    case 8:
        return e === Mc ? "StrictMode" : "Mode";
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
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function Gr(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function lm(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function Cw(t) {
    var e = lm(t) ? "checked" : "value"
      , r = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , n = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var s = r.get
          , i = r.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                n = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: r.enumerable
        }),
        {
            getValue: function() {
                return n
            },
            setValue: function(o) {
                n = "" + o
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function ho(t) {
    t._valueTracker || (t._valueTracker = Cw(t))
}
function um(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var r = e.getValue()
      , n = "";
    return t && (n = lm(t) ? t.checked ? "true" : "false" : t.value),
    t = n,
    t !== r ? (e.setValue(t),
    !0) : !1
}
function na(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function mu(t, e) {
    var r = e.checked;
    return me({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? t._wrapperState.initialChecked
    })
}
function yf(t, e) {
    var r = e.defaultValue == null ? "" : e.defaultValue
      , n = e.checked != null ? e.checked : e.defaultChecked;
    r = Gr(e.value != null ? e.value : r),
    t._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function cm(t, e) {
    e = e.checked,
    e != null && Dc(t, "checked", e, !1)
}
function gu(t, e) {
    cm(t, e);
    var r = Gr(e.value)
      , n = e.type;
    if (r != null)
        n === "number" ? (r === 0 && t.value === "" || t.value != r) && (t.value = "" + r) : t.value !== "" + r && (t.value = "" + r);
    else if (n === "submit" || n === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? vu(t, e.type, r) : e.hasOwnProperty("defaultValue") && vu(t, e.type, Gr(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function wf(t, e, r) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var n = e.type;
        if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        r || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    r = t.name,
    r !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    r !== "" && (t.name = r)
}
function vu(t, e, r) {
    (e !== "number" || na(t.ownerDocument) !== t) && (r == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + r && (t.defaultValue = "" + r))
}
var li = Array.isArray;
function us(t, e, r, n) {
    if (t = t.options,
    e) {
        e = {};
        for (var s = 0; s < r.length; s++)
            e["$" + r[s]] = !0;
        for (r = 0; r < t.length; r++)
            s = e.hasOwnProperty("$" + t[r].value),
            t[r].selected !== s && (t[r].selected = s),
            s && n && (t[r].defaultSelected = !0)
    } else {
        for (r = "" + Gr(r),
        e = null,
        s = 0; s < t.length; s++) {
            if (t[s].value === r) {
                t[s].selected = !0,
                n && (t[s].defaultSelected = !0);
                return
            }
            e !== null || t[s].disabled || (e = t[s])
        }
        e !== null && (e.selected = !0)
    }
}
function yu(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return me({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function xf(t, e) {
    var r = e.value;
    if (r == null) {
        if (r = e.children,
        e = e.defaultValue,
        r != null) {
            if (e != null)
                throw Error(j(92));
            if (li(r)) {
                if (1 < r.length)
                    throw Error(j(93));
                r = r[0]
            }
            e = r
        }
        e == null && (e = ""),
        r = e
    }
    t._wrapperState = {
        initialValue: Gr(r)
    }
}
function dm(t, e) {
    var r = Gr(e.value)
      , n = Gr(e.defaultValue);
    r != null && (r = "" + r,
    r !== t.value && (t.value = r),
    e.defaultValue == null && t.defaultValue !== r && (t.defaultValue = r)),
    n != null && (t.defaultValue = "" + n)
}
function bf(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function fm(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function wu(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? fm(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var po, hm = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, r, n, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, r, n, s)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (po = po || document.createElement("div"),
        po.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = po.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function Ci(t, e) {
    if (e) {
        var r = t.firstChild;
        if (r && r === t.lastChild && r.nodeType === 3) {
            r.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var fi = {
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
}
  , Tw = ["Webkit", "ms", "Moz", "O"];
Object.keys(fi).forEach(function(t) {
    Tw.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        fi[e] = fi[t]
    })
});
function pm(t, e, r) {
    return e == null || typeof e == "boolean" || e === "" ? "" : r || typeof e != "number" || e === 0 || fi.hasOwnProperty(t) && fi[t] ? ("" + e).trim() : e + "px"
}
function mm(t, e) {
    t = t.style;
    for (var r in e)
        if (e.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0
              , s = pm(r, e[r], n);
            r === "float" && (r = "cssFloat"),
            n ? t.setProperty(r, s) : t[r] = s
        }
}
var Pw = me({
    menuitem: !0
}, {
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
});
function xu(t, e) {
    if (e) {
        if (Pw[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(j(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(j(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(j(62))
    }
}
function bu(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
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
        return !0
    }
}
var _u = null;
function zc(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var Su = null
  , cs = null
  , ds = null;
function _f(t) {
    if (t = eo(t)) {
        if (typeof Su != "function")
            throw Error(j(280));
        var e = t.stateNode;
        e && (e = Ha(e),
        Su(t.stateNode, t.type, e))
    }
}
function gm(t) {
    cs ? ds ? ds.push(t) : ds = [t] : cs = t
}
function vm() {
    if (cs) {
        var t = cs
          , e = ds;
        if (ds = cs = null,
        _f(t),
        e)
            for (t = 0; t < e.length; t++)
                _f(e[t])
    }
}
function ym(t, e) {
    return t(e)
}
function wm() {}
var Cl = !1;
function xm(t, e, r) {
    if (Cl)
        return t(e, r);
    Cl = !0;
    try {
        return ym(t, e, r)
    } finally {
        Cl = !1,
        (cs !== null || ds !== null) && (wm(),
        vm())
    }
}
function Ti(t, e) {
    var r = t.stateNode;
    if (r === null)
        return null;
    var n = Ha(r);
    if (n === null)
        return null;
    r = n[e];
    e: switch (e) {
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
        (n = !n.disabled) || (t = t.type,
        n = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !n;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (r && typeof r != "function")
        throw Error(j(231, e, typeof r));
    return r
}
var Eu = !1;
if (ar)
    try {
        var Xs = {};
        Object.defineProperty(Xs, "passive", {
            get: function() {
                Eu = !0
            }
        }),
        window.addEventListener("test", Xs, Xs),
        window.removeEventListener("test", Xs, Xs)
    } catch {
        Eu = !1
    }
function Ow(t, e, r, n, s, i, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(r, u)
    } catch (c) {
        this.onError(c)
    }
}
var hi = !1
  , sa = null
  , ia = !1
  , ku = null
  , jw = {
    onError: function(t) {
        hi = !0,
        sa = t
    }
};
function Rw(t, e, r, n, s, i, o, a, l) {
    hi = !1,
    sa = null,
    Ow.apply(jw, arguments)
}
function Aw(t, e, r, n, s, i, o, a, l) {
    if (Rw.apply(this, arguments),
    hi) {
        if (hi) {
            var u = sa;
            hi = !1,
            sa = null
        } else
            throw Error(j(198));
        ia || (ia = !0,
        ku = u)
    }
}
function Ln(t) {
    var e = t
      , r = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (r = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? r : null
}
function bm(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function Sf(t) {
    if (Ln(t) !== t)
        throw Error(j(188))
}
function Nw(t) {
    var e = t.alternate;
    if (!e) {
        if (e = Ln(t),
        e === null)
            throw Error(j(188));
        return e !== t ? null : t
    }
    for (var r = t, n = e; ; ) {
        var s = r.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (n = s.return,
            n !== null) {
                r = n;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === r)
                    return Sf(s),
                    t;
                if (i === n)
                    return Sf(s),
                    e;
                i = i.sibling
            }
            throw Error(j(188))
        }
        if (r.return !== n.return)
            r = s,
            n = i;
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === r) {
                    o = !0,
                    r = s,
                    n = i;
                    break
                }
                if (a === n) {
                    o = !0,
                    n = s,
                    r = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(j(189))
            }
        }
        if (r.alternate !== n)
            throw Error(j(190))
    }
    if (r.tag !== 3)
        throw Error(j(188));
    return r.stateNode.current === r ? t : e
}
function _m(t) {
    return t = Nw(t),
    t !== null ? Sm(t) : null
}
function Sm(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = Sm(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var Em = ut.unstable_scheduleCallback
  , Ef = ut.unstable_cancelCallback
  , Iw = ut.unstable_shouldYield
  , Lw = ut.unstable_requestPaint
  , ye = ut.unstable_now
  , $w = ut.unstable_getCurrentPriorityLevel
  , Bc = ut.unstable_ImmediatePriority
  , km = ut.unstable_UserBlockingPriority
  , oa = ut.unstable_NormalPriority
  , Dw = ut.unstable_LowPriority
  , Cm = ut.unstable_IdlePriority
  , za = null
  , Kt = null;
function Mw(t) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function")
        try {
            Kt.onCommitFiberRoot(za, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var It = Math.clz32 ? Math.clz32 : zw
  , Fw = Math.log
  , Uw = Math.LN2;
function zw(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (Fw(t) / Uw | 0) | 0
}
var mo = 64
  , go = 4194304;
function ui(t) {
    switch (t & -t) {
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
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function aa(t, e) {
    var r = t.pendingLanes;
    if (r === 0)
        return 0;
    var n = 0
      , s = t.suspendedLanes
      , i = t.pingedLanes
      , o = r & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? n = ui(a) : (i &= o,
        i !== 0 && (n = ui(i)))
    } else
        o = r & ~s,
        o !== 0 ? n = ui(o) : i !== 0 && (n = ui(i));
    if (n === 0)
        return 0;
    if (e !== 0 && e !== n && !(e & s) && (s = n & -n,
    i = e & -e,
    s >= i || s === 16 && (i & 4194240) !== 0))
        return e;
    if (n & 4 && (n |= r & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= n; 0 < e; )
            r = 31 - It(e),
            s = 1 << r,
            n |= t[r],
            e &= ~s;
    return n
}
function Bw(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
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
        return e + 5e3;
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
        return -1
    }
}
function Vw(t, e) {
    for (var r = t.suspendedLanes, n = t.pingedLanes, s = t.expirationTimes, i = t.pendingLanes; 0 < i; ) {
        var o = 31 - It(i)
          , a = 1 << o
          , l = s[o];
        l === -1 ? (!(a & r) || a & n) && (s[o] = Bw(a, e)) : l <= e && (t.expiredLanes |= a),
        i &= ~a
    }
}
function Cu(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function Tm() {
    var t = mo;
    return mo <<= 1,
    !(mo & 4194240) && (mo = 64),
    t
}
function Tl(t) {
    for (var e = [], r = 0; 31 > r; r++)
        e.push(t);
    return e
}
function Xi(t, e, r) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - It(e),
    t[e] = r
}
function Ww(t, e) {
    var r = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var n = t.eventTimes;
    for (t = t.expirationTimes; 0 < r; ) {
        var s = 31 - It(r)
          , i = 1 << s;
        e[s] = 0,
        n[s] = -1,
        t[s] = -1,
        r &= ~i
    }
}
function Vc(t, e) {
    var r = t.entangledLanes |= e;
    for (t = t.entanglements; r; ) {
        var n = 31 - It(r)
          , s = 1 << n;
        s & e | t[n] & e && (t[n] |= e),
        r &= ~s
    }
}
var ne = 0;
function Pm(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Om, Wc, jm, Rm, Am, Tu = !1, vo = [], Ur = null, zr = null, Br = null, Pi = new Map, Oi = new Map, Or = [], Hw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function kf(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Ur = null;
        break;
    case "dragenter":
    case "dragleave":
        zr = null;
        break;
    case "mouseover":
    case "mouseout":
        Br = null;
        break;
    case "pointerover":
    case "pointerout":
        Pi.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Oi.delete(e.pointerId)
    }
}
function Zs(t, e, r, n, s, i) {
    return t === null || t.nativeEvent !== i ? (t = {
        blockedOn: e,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [s]
    },
    e !== null && (e = eo(e),
    e !== null && Wc(e)),
    t) : (t.eventSystemFlags |= n,
    e = t.targetContainers,
    s !== null && e.indexOf(s) === -1 && e.push(s),
    t)
}
function qw(t, e, r, n, s) {
    switch (e) {
    case "focusin":
        return Ur = Zs(Ur, t, e, r, n, s),
        !0;
    case "dragenter":
        return zr = Zs(zr, t, e, r, n, s),
        !0;
    case "mouseover":
        return Br = Zs(Br, t, e, r, n, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return Pi.set(i, Zs(Pi.get(i) || null, t, e, r, n, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        Oi.set(i, Zs(Oi.get(i) || null, t, e, r, n, s)),
        !0
    }
    return !1
}
function Nm(t) {
    var e = gn(t.target);
    if (e !== null) {
        var r = Ln(e);
        if (r !== null) {
            if (e = r.tag,
            e === 13) {
                if (e = bm(r),
                e !== null) {
                    t.blockedOn = e,
                    Am(t.priority, function() {
                        jm(r)
                    });
                    return
                }
            } else if (e === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function Wo(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var r = Pu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (r === null) {
            r = t.nativeEvent;
            var n = new r.constructor(r.type,r);
            _u = n,
            r.target.dispatchEvent(n),
            _u = null
        } else
            return e = eo(r),
            e !== null && Wc(e),
            t.blockedOn = r,
            !1;
        e.shift()
    }
    return !0
}
function Cf(t, e, r) {
    Wo(t) && r.delete(e)
}
function Kw() {
    Tu = !1,
    Ur !== null && Wo(Ur) && (Ur = null),
    zr !== null && Wo(zr) && (zr = null),
    Br !== null && Wo(Br) && (Br = null),
    Pi.forEach(Cf),
    Oi.forEach(Cf)
}
function ei(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    Tu || (Tu = !0,
    ut.unstable_scheduleCallback(ut.unstable_NormalPriority, Kw)))
}
function ji(t) {
    function e(s) {
        return ei(s, t)
    }
    if (0 < vo.length) {
        ei(vo[0], t);
        for (var r = 1; r < vo.length; r++) {
            var n = vo[r];
            n.blockedOn === t && (n.blockedOn = null)
        }
    }
    for (Ur !== null && ei(Ur, t),
    zr !== null && ei(zr, t),
    Br !== null && ei(Br, t),
    Pi.forEach(e),
    Oi.forEach(e),
    r = 0; r < Or.length; r++)
        n = Or[r],
        n.blockedOn === t && (n.blockedOn = null);
    for (; 0 < Or.length && (r = Or[0],
    r.blockedOn === null); )
        Nm(r),
        r.blockedOn === null && Or.shift()
}
var fs = hr.ReactCurrentBatchConfig
  , la = !0;
function Gw(t, e, r, n) {
    var s = ne
      , i = fs.transition;
    fs.transition = null;
    try {
        ne = 1,
        Hc(t, e, r, n)
    } finally {
        ne = s,
        fs.transition = i
    }
}
function Qw(t, e, r, n) {
    var s = ne
      , i = fs.transition;
    fs.transition = null;
    try {
        ne = 4,
        Hc(t, e, r, n)
    } finally {
        ne = s,
        fs.transition = i
    }
}
function Hc(t, e, r, n) {
    if (la) {
        var s = Pu(t, e, r, n);
        if (s === null)
            Dl(t, e, n, ua, r),
            kf(t, n);
        else if (qw(s, t, e, r, n))
            n.stopPropagation();
        else if (kf(t, n),
        e & 4 && -1 < Hw.indexOf(t)) {
            for (; s !== null; ) {
                var i = eo(s);
                if (i !== null && Om(i),
                i = Pu(t, e, r, n),
                i === null && Dl(t, e, n, ua, r),
                i === s)
                    break;
                s = i
            }
            s !== null && n.stopPropagation()
        } else
            Dl(t, e, n, null, r)
    }
}
var ua = null;
function Pu(t, e, r, n) {
    if (ua = null,
    t = zc(n),
    t = gn(t),
    t !== null)
        if (e = Ln(t),
        e === null)
            t = null;
        else if (r = e.tag,
        r === 13) {
            if (t = bm(e),
            t !== null)
                return t;
            t = null
        } else if (r === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return ua = t,
    null
}
function Im(t) {
    switch (t) {
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
        switch ($w()) {
        case Bc:
            return 1;
        case km:
            return 4;
        case oa:
        case Dw:
            return 16;
        case Cm:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Dr = null
  , qc = null
  , Ho = null;
function Lm() {
    if (Ho)
        return Ho;
    var t, e = qc, r = e.length, n, s = "value"in Dr ? Dr.value : Dr.textContent, i = s.length;
    for (t = 0; t < r && e[t] === s[t]; t++)
        ;
    var o = r - t;
    for (n = 1; n <= o && e[r - n] === s[i - n]; n++)
        ;
    return Ho = s.slice(t, 1 < n ? 1 - n : void 0)
}
function qo(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function yo() {
    return !0
}
function Tf() {
    return !1
}
function dt(t) {
    function e(r, n, s, i, o) {
        this._reactName = r,
        this._targetInst = s,
        this.type = n,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var a in t)
            t.hasOwnProperty(a) && (r = t[a],
            this[a] = r ? r(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? yo : Tf,
        this.isPropagationStopped = Tf,
        this
    }
    return me(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            this.isDefaultPrevented = yo)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            this.isPropagationStopped = yo)
        },
        persist: function() {},
        isPersistent: yo
    }),
    e
}
var Us = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Kc = dt(Us), Zi = me({}, Us, {
    view: 0,
    detail: 0
}), Jw = dt(Zi), Pl, Ol, ti, Ba = me({}, Zi, {
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
    getModifierState: Gc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== ti && (ti && t.type === "mousemove" ? (Pl = t.screenX - ti.screenX,
        Ol = t.screenY - ti.screenY) : Ol = Pl = 0,
        ti = t),
        Pl)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : Ol
    }
}), Pf = dt(Ba), Yw = me({}, Ba, {
    dataTransfer: 0
}), Xw = dt(Yw), Zw = me({}, Zi, {
    relatedTarget: 0
}), jl = dt(Zw), ex = me({}, Us, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), tx = dt(ex), rx = me({}, Us, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), nx = dt(rx), sx = me({}, Us, {
    data: 0
}), Of = dt(sx), ix = {
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
}, ox = {
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
}, ax = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function lx(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = ax[t]) ? !!e[t] : !1
}
function Gc() {
    return lx
}
var ux = me({}, Zi, {
    key: function(t) {
        if (t.key) {
            var e = ix[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = qo(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? ox[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gc,
    charCode: function(t) {
        return t.type === "keypress" ? qo(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? qo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , cx = dt(ux)
  , dx = me({}, Ba, {
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
})
  , jf = dt(dx)
  , fx = me({}, Zi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gc
})
  , hx = dt(fx)
  , px = me({}, Us, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , mx = dt(px)
  , gx = me({}, Ba, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , vx = dt(gx)
  , yx = [9, 13, 27, 32]
  , Qc = ar && "CompositionEvent"in window
  , pi = null;
ar && "documentMode"in document && (pi = document.documentMode);
var wx = ar && "TextEvent"in window && !pi
  , $m = ar && (!Qc || pi && 8 < pi && 11 >= pi)
  , Rf = " "
  , Af = !1;
function Dm(t, e) {
    switch (t) {
    case "keyup":
        return yx.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Mm(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var Zn = !1;
function xx(t, e) {
    switch (t) {
    case "compositionend":
        return Mm(e);
    case "keypress":
        return e.which !== 32 ? null : (Af = !0,
        Rf);
    case "textInput":
        return t = e.data,
        t === Rf && Af ? null : t;
    default:
        return null
    }
}
function bx(t, e) {
    if (Zn)
        return t === "compositionend" || !Qc && Dm(t, e) ? (t = Lm(),
        Ho = qc = Dr = null,
        Zn = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return $m && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var _x = {
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
function Nf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!_x[t.type] : e === "textarea"
}
function Fm(t, e, r, n) {
    gm(n),
    e = ca(e, "onChange"),
    0 < e.length && (r = new Kc("onChange","change",null,r,n),
    t.push({
        event: r,
        listeners: e
    }))
}
var mi = null
  , Ri = null;
function Sx(t) {
    Jm(t, 0)
}
function Va(t) {
    var e = rs(t);
    if (um(e))
        return t
}
function Ex(t, e) {
    if (t === "change")
        return e
}
var Um = !1;
if (ar) {
    var Rl;
    if (ar) {
        var Al = "oninput"in document;
        if (!Al) {
            var If = document.createElement("div");
            If.setAttribute("oninput", "return;"),
            Al = typeof If.oninput == "function"
        }
        Rl = Al
    } else
        Rl = !1;
    Um = Rl && (!document.documentMode || 9 < document.documentMode)
}
function Lf() {
    mi && (mi.detachEvent("onpropertychange", zm),
    Ri = mi = null)
}
function zm(t) {
    if (t.propertyName === "value" && Va(Ri)) {
        var e = [];
        Fm(e, Ri, t, zc(t)),
        xm(Sx, e)
    }
}
function kx(t, e, r) {
    t === "focusin" ? (Lf(),
    mi = e,
    Ri = r,
    mi.attachEvent("onpropertychange", zm)) : t === "focusout" && Lf()
}
function Cx(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Va(Ri)
}
function Tx(t, e) {
    if (t === "click")
        return Va(e)
}
function Px(t, e) {
    if (t === "input" || t === "change")
        return Va(e)
}
function Ox(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var $t = typeof Object.is == "function" ? Object.is : Ox;
function Ai(t, e) {
    if ($t(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var r = Object.keys(t)
      , n = Object.keys(e);
    if (r.length !== n.length)
        return !1;
    for (n = 0; n < r.length; n++) {
        var s = r[n];
        if (!cu.call(e, s) || !$t(t[s], e[s]))
            return !1
    }
    return !0
}
function $f(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function Df(t, e) {
    var r = $f(t);
    t = 0;
    for (var n; r; ) {
        if (r.nodeType === 3) {
            if (n = t + r.textContent.length,
            t <= e && n >= e)
                return {
                    node: r,
                    offset: e - t
                };
            t = n
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = $f(r)
    }
}
function Bm(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Bm(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Vm() {
    for (var t = window, e = na(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var r = typeof e.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r)
            t = e.contentWindow;
        else
            break;
        e = na(t.document)
    }
    return e
}
function Jc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function jx(t) {
    var e = Vm()
      , r = t.focusedElem
      , n = t.selectionRange;
    if (e !== r && r && r.ownerDocument && Bm(r.ownerDocument.documentElement, r)) {
        if (n !== null && Jc(r)) {
            if (e = n.start,
            t = n.end,
            t === void 0 && (t = e),
            "selectionStart"in r)
                r.selectionStart = e,
                r.selectionEnd = Math.min(t, r.value.length);
            else if (t = (e = r.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var s = r.textContent.length
                  , i = Math.min(n.start, s);
                n = n.end === void 0 ? i : Math.min(n.end, s),
                !t.extend && i > n && (s = n,
                n = i,
                i = s),
                s = Df(r, i);
                var o = Df(r, n);
                s && o && (t.rangeCount !== 1 || t.anchorNode !== s.node || t.anchorOffset !== s.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(),
                e.setStart(s.node, s.offset),
                t.removeAllRanges(),
                i > n ? (t.addRange(e),
                t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = r; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof r.focus == "function" && r.focus(),
        r = 0; r < e.length; r++)
            t = e[r],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var Rx = ar && "documentMode"in document && 11 >= document.documentMode
  , es = null
  , Ou = null
  , gi = null
  , ju = !1;
function Mf(t, e, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ju || es == null || es !== na(n) || (n = es,
    "selectionStart"in n && Jc(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
    n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }),
    gi && Ai(gi, n) || (gi = n,
    n = ca(Ou, "onSelect"),
    0 < n.length && (e = new Kc("onSelect","select",null,e,r),
    t.push({
        event: e,
        listeners: n
    }),
    e.target = es)))
}
function wo(t, e) {
    var r = {};
    return r[t.toLowerCase()] = e.toLowerCase(),
    r["Webkit" + t] = "webkit" + e,
    r["Moz" + t] = "moz" + e,
    r
}
var ts = {
    animationend: wo("Animation", "AnimationEnd"),
    animationiteration: wo("Animation", "AnimationIteration"),
    animationstart: wo("Animation", "AnimationStart"),
    transitionend: wo("Transition", "TransitionEnd")
}
  , Nl = {}
  , Wm = {};
ar && (Wm = document.createElement("div").style,
"AnimationEvent"in window || (delete ts.animationend.animation,
delete ts.animationiteration.animation,
delete ts.animationstart.animation),
"TransitionEvent"in window || delete ts.transitionend.transition);
function Wa(t) {
    if (Nl[t])
        return Nl[t];
    if (!ts[t])
        return t;
    var e = ts[t], r;
    for (r in e)
        if (e.hasOwnProperty(r) && r in Wm)
            return Nl[t] = e[r];
    return t
}
var Hm = Wa("animationend")
  , qm = Wa("animationiteration")
  , Km = Wa("animationstart")
  , Gm = Wa("transitionend")
  , Qm = new Map
  , Ff = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function en(t, e) {
    Qm.set(t, e),
    In(e, [t])
}
for (var Il = 0; Il < Ff.length; Il++) {
    var Ll = Ff[Il]
      , Ax = Ll.toLowerCase()
      , Nx = Ll[0].toUpperCase() + Ll.slice(1);
    en(Ax, "on" + Nx)
}
en(Hm, "onAnimationEnd");
en(qm, "onAnimationIteration");
en(Km, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(Gm, "onTransitionEnd");
Ts("onMouseEnter", ["mouseout", "mouseover"]);
Ts("onMouseLeave", ["mouseout", "mouseover"]);
Ts("onPointerEnter", ["pointerout", "pointerover"]);
Ts("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Ix = new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));
function Uf(t, e, r) {
    var n = t.type || "unknown-event";
    t.currentTarget = r,
    Aw(n, e, void 0, t),
    t.currentTarget = null
}
function Jm(t, e) {
    e = (e & 4) !== 0;
    for (var r = 0; r < t.length; r++) {
        var n = t[r]
          , s = n.event;
        n = n.listeners;
        e: {
            var i = void 0;
            if (e)
                for (var o = n.length - 1; 0 <= o; o--) {
                    var a = n[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    Uf(s, a, u),
                    i = l
                }
            else
                for (o = 0; o < n.length; o++) {
                    if (a = n[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    Uf(s, a, u),
                    i = l
                }
        }
    }
    if (ia)
        throw t = ku,
        ia = !1,
        ku = null,
        t
}
function le(t, e) {
    var r = e[Lu];
    r === void 0 && (r = e[Lu] = new Set);
    var n = t + "__bubble";
    r.has(n) || (Ym(e, t, 2, !1),
    r.add(n))
}
function $l(t, e, r) {
    var n = 0;
    e && (n |= 4),
    Ym(r, t, n, e)
}
var xo = "_reactListening" + Math.random().toString(36).slice(2);
function Ni(t) {
    if (!t[xo]) {
        t[xo] = !0,
        sm.forEach(function(r) {
            r !== "selectionchange" && (Ix.has(r) || $l(r, !1, t),
            $l(r, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[xo] || (e[xo] = !0,
        $l("selectionchange", !1, e))
    }
}
function Ym(t, e, r, n) {
    switch (Im(e)) {
    case 1:
        var s = Gw;
        break;
    case 4:
        s = Qw;
        break;
    default:
        s = Hc
    }
    r = s.bind(null, e, r, t),
    s = void 0,
    !Eu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
    n ? s !== void 0 ? t.addEventListener(e, r, {
        capture: !0,
        passive: s
    }) : t.addEventListener(e, r, !0) : s !== void 0 ? t.addEventListener(e, r, {
        passive: s
    }) : t.addEventListener(e, r, !1)
}
function Dl(t, e, r, n, s) {
    var i = n;
    if (!(e & 1) && !(e & 2) && n !== null)
        e: for (; ; ) {
            if (n === null)
                return;
            var o = n.tag;
            if (o === 3 || o === 4) {
                var a = n.stateNode.containerInfo;
                if (a === s || a.nodeType === 8 && a.parentNode === s)
                    break;
                if (o === 4)
                    for (o = n.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === s || l.nodeType === 8 && l.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = gn(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        n = i = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            n = n.return
        }
    xm(function() {
        var u = i
          , c = zc(r)
          , f = [];
        e: {
            var h = Qm.get(t);
            if (h !== void 0) {
                var d = Kc
                  , w = t;
                switch (t) {
                case "keypress":
                    if (qo(r) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    d = cx;
                    break;
                case "focusin":
                    w = "focus",
                    d = jl;
                    break;
                case "focusout":
                    w = "blur",
                    d = jl;
                    break;
                case "beforeblur":
                case "afterblur":
                    d = jl;
                    break;
                case "click":
                    if (r.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    d = Pf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    d = Xw;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    d = hx;
                    break;
                case Hm:
                case qm:
                case Km:
                    d = tx;
                    break;
                case Gm:
                    d = mx;
                    break;
                case "scroll":
                    d = Jw;
                    break;
                case "wheel":
                    d = vx;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    d = nx;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    d = jf
                }
                var m = (e & 4) !== 0
                  , y = !m && t === "scroll"
                  , g = m ? h !== null ? h + "Capture" : null : h;
                m = [];
                for (var p = u, v; p !== null; ) {
                    v = p;
                    var _ = v.stateNode;
                    if (v.tag === 5 && _ !== null && (v = _,
                    g !== null && (_ = Ti(p, g),
                    _ != null && m.push(Ii(p, _, v)))),
                    y)
                        break;
                    p = p.return
                }
                0 < m.length && (h = new d(h,w,null,r,c),
                f.push({
                    event: h,
                    listeners: m
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (h = t === "mouseover" || t === "pointerover",
                d = t === "mouseout" || t === "pointerout",
                h && r !== _u && (w = r.relatedTarget || r.fromElement) && (gn(w) || w[lr]))
                    break e;
                if ((d || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window,
                d ? (w = r.relatedTarget || r.toElement,
                d = u,
                w = w ? gn(w) : null,
                w !== null && (y = Ln(w),
                w !== y || w.tag !== 5 && w.tag !== 6) && (w = null)) : (d = null,
                w = u),
                d !== w)) {
                    if (m = Pf,
                    _ = "onMouseLeave",
                    g = "onMouseEnter",
                    p = "mouse",
                    (t === "pointerout" || t === "pointerover") && (m = jf,
                    _ = "onPointerLeave",
                    g = "onPointerEnter",
                    p = "pointer"),
                    y = d == null ? h : rs(d),
                    v = w == null ? h : rs(w),
                    h = new m(_,p + "leave",d,r,c),
                    h.target = y,
                    h.relatedTarget = v,
                    _ = null,
                    gn(c) === u && (m = new m(g,p + "enter",w,r,c),
                    m.target = v,
                    m.relatedTarget = y,
                    _ = m),
                    y = _,
                    d && w)
                        t: {
                            for (m = d,
                            g = w,
                            p = 0,
                            v = m; v; v = Vn(v))
                                p++;
                            for (v = 0,
                            _ = g; _; _ = Vn(_))
                                v++;
                            for (; 0 < p - v; )
                                m = Vn(m),
                                p--;
                            for (; 0 < v - p; )
                                g = Vn(g),
                                v--;
                            for (; p--; ) {
                                if (m === g || g !== null && m === g.alternate)
                                    break t;
                                m = Vn(m),
                                g = Vn(g)
                            }
                            m = null
                        }
                    else
                        m = null;
                    d !== null && zf(f, h, d, m, !1),
                    w !== null && y !== null && zf(f, y, w, m, !0)
                }
            }
            e: {
                if (h = u ? rs(u) : window,
                d = h.nodeName && h.nodeName.toLowerCase(),
                d === "select" || d === "input" && h.type === "file")
                    var S = Ex;
                else if (Nf(h))
                    if (Um)
                        S = Px;
                    else {
                        S = Cx;
                        var E = kx
                    }
                else
                    (d = h.nodeName) && d.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = Tx);
                if (S && (S = S(t, u))) {
                    Fm(f, S, r, c);
                    break e
                }
                E && E(t, h, u),
                t === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && vu(h, "number", h.value)
            }
            switch (E = u ? rs(u) : window,
            t) {
            case "focusin":
                (Nf(E) || E.contentEditable === "true") && (es = E,
                Ou = u,
                gi = null);
                break;
            case "focusout":
                gi = Ou = es = null;
                break;
            case "mousedown":
                ju = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ju = !1,
                Mf(f, r, c);
                break;
            case "selectionchange":
                if (Rx)
                    break;
            case "keydown":
            case "keyup":
                Mf(f, r, c)
            }
            var k;
            if (Qc)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                Zn ? Dm(t, r) && (P = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (P = "onCompositionStart");
            P && ($m && r.locale !== "ko" && (Zn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Zn && (k = Lm()) : (Dr = c,
            qc = "value"in Dr ? Dr.value : Dr.textContent,
            Zn = !0)),
            E = ca(u, P),
            0 < E.length && (P = new Of(P,t,null,r,c),
            f.push({
                event: P,
                listeners: E
            }),
            k ? P.data = k : (k = Mm(r),
            k !== null && (P.data = k)))),
            (k = wx ? xx(t, r) : bx(t, r)) && (u = ca(u, "onBeforeInput"),
            0 < u.length && (c = new Of("onBeforeInput","beforeinput",null,r,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = k))
        }
        Jm(f, e)
    })
}
function Ii(t, e, r) {
    return {
        instance: t,
        listener: e,
        currentTarget: r
    }
}
function ca(t, e) {
    for (var r = e + "Capture", n = []; t !== null; ) {
        var s = t
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = Ti(t, r),
        i != null && n.unshift(Ii(t, i, s)),
        i = Ti(t, e),
        i != null && n.push(Ii(t, i, s))),
        t = t.return
    }
    return n
}
function Vn(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function zf(t, e, r, n, s) {
    for (var i = e._reactName, o = []; r !== null && r !== n; ) {
        var a = r
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === n)
            break;
        a.tag === 5 && u !== null && (a = u,
        s ? (l = Ti(r, i),
        l != null && o.unshift(Ii(r, l, a))) : s || (l = Ti(r, i),
        l != null && o.push(Ii(r, l, a)))),
        r = r.return
    }
    o.length !== 0 && t.push({
        event: e,
        listeners: o
    })
}
var Lx = /\r\n?/g
  , $x = /\u0000|\uFFFD/g;
function Bf(t) {
    return (typeof t == "string" ? t : "" + t).replace(Lx, `
`).replace($x, "")
}
function bo(t, e, r) {
    if (e = Bf(e),
    Bf(t) !== e && r)
        throw Error(j(425))
}
function da() {}
var Ru = null
  , Au = null;
function Nu(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var Iu = typeof setTimeout == "function" ? setTimeout : void 0
  , Dx = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Vf = typeof Promise == "function" ? Promise : void 0
  , Mx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vf < "u" ? function(t) {
    return Vf.resolve(null).then(t).catch(Fx)
}
: Iu;
function Fx(t) {
    setTimeout(function() {
        throw t
    })
}
function Ml(t, e) {
    var r = e
      , n = 0;
    do {
        var s = r.nextSibling;
        if (t.removeChild(r),
        s && s.nodeType === 8)
            if (r = s.data,
            r === "/$") {
                if (n === 0) {
                    t.removeChild(s),
                    ji(e);
                    return
                }
                n--
            } else
                r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = s
    } while (r);
    ji(e)
}
function Vr(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function Wf(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var r = t.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                r === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var zs = Math.random().toString(36).slice(2)
  , Ht = "__reactFiber$" + zs
  , Li = "__reactProps$" + zs
  , lr = "__reactContainer$" + zs
  , Lu = "__reactEvents$" + zs
  , Ux = "__reactListeners$" + zs
  , zx = "__reactHandles$" + zs;
function gn(t) {
    var e = t[Ht];
    if (e)
        return e;
    for (var r = t.parentNode; r; ) {
        if (e = r[lr] || r[Ht]) {
            if (r = e.alternate,
            e.child !== null || r !== null && r.child !== null)
                for (t = Wf(t); t !== null; ) {
                    if (r = t[Ht])
                        return r;
                    t = Wf(t)
                }
            return e
        }
        t = r,
        r = t.parentNode
    }
    return null
}
function eo(t) {
    return t = t[Ht] || t[lr],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function rs(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(j(33))
}
function Ha(t) {
    return t[Li] || null
}
var $u = []
  , ns = -1;
function tn(t) {
    return {
        current: t
    }
}
function ue(t) {
    0 > ns || (t.current = $u[ns],
    $u[ns] = null,
    ns--)
}
function oe(t, e) {
    ns++,
    $u[ns] = t.current,
    t.current = e
}
var Qr = {}
  , Me = tn(Qr)
  , Ye = tn(!1)
  , Pn = Qr;
function Ps(t, e) {
    var r = t.type.contextTypes;
    if (!r)
        return Qr;
    var n = t.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === e)
        return n.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in r)
        s[i] = e[i];
    return n && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function Xe(t) {
    return t = t.childContextTypes,
    t != null
}
function fa() {
    ue(Ye),
    ue(Me)
}
function Hf(t, e, r) {
    if (Me.current !== Qr)
        throw Error(j(168));
    oe(Me, e),
    oe(Ye, r)
}
function Xm(t, e, r) {
    var n = t.stateNode;
    if (e = e.childContextTypes,
    typeof n.getChildContext != "function")
        return r;
    n = n.getChildContext();
    for (var s in n)
        if (!(s in e))
            throw Error(j(108, kw(t) || "Unknown", s));
    return me({}, r, n)
}
function ha(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Qr,
    Pn = Me.current,
    oe(Me, t),
    oe(Ye, Ye.current),
    !0
}
function qf(t, e, r) {
    var n = t.stateNode;
    if (!n)
        throw Error(j(169));
    r ? (t = Xm(t, e, Pn),
    n.__reactInternalMemoizedMergedChildContext = t,
    ue(Ye),
    ue(Me),
    oe(Me, t)) : ue(Ye),
    oe(Ye, r)
}
var rr = null
  , qa = !1
  , Fl = !1;
function Zm(t) {
    rr === null ? rr = [t] : rr.push(t)
}
function Bx(t) {
    qa = !0,
    Zm(t)
}
function rn() {
    if (!Fl && rr !== null) {
        Fl = !0;
        var t = 0
          , e = ne;
        try {
            var r = rr;
            for (ne = 1; t < r.length; t++) {
                var n = r[t];
                do
                    n = n(!0);
                while (n !== null)
            }
            rr = null,
            qa = !1
        } catch (s) {
            throw rr !== null && (rr = rr.slice(t + 1)),
            Em(Bc, rn),
            s
        } finally {
            ne = e,
            Fl = !1
        }
    }
    return null
}
var ss = []
  , is = 0
  , pa = null
  , ma = 0
  , pt = []
  , mt = 0
  , On = null
  , sr = 1
  , ir = "";
function cn(t, e) {
    ss[is++] = ma,
    ss[is++] = pa,
    pa = t,
    ma = e
}
function eg(t, e, r) {
    pt[mt++] = sr,
    pt[mt++] = ir,
    pt[mt++] = On,
    On = t;
    var n = sr;
    t = ir;
    var s = 32 - It(n) - 1;
    n &= ~(1 << s),
    r += 1;
    var i = 32 - It(e) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (n & (1 << o) - 1).toString(32),
        n >>= o,
        s -= o,
        sr = 1 << 32 - It(e) + s | r << s | n,
        ir = i + t
    } else
        sr = 1 << i | r << s | n,
        ir = t
}
function Yc(t) {
    t.return !== null && (cn(t, 1),
    eg(t, 1, 0))
}
function Xc(t) {
    for (; t === pa; )
        pa = ss[--is],
        ss[is] = null,
        ma = ss[--is],
        ss[is] = null;
    for (; t === On; )
        On = pt[--mt],
        pt[mt] = null,
        ir = pt[--mt],
        pt[mt] = null,
        sr = pt[--mt],
        pt[mt] = null
}
var at = null
  , ot = null
  , de = !1
  , Nt = null;
function tg(t, e) {
    var r = gt(5, null, null, 0);
    r.elementType = "DELETED",
    r.stateNode = e,
    r.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [r],
    t.flags |= 16) : e.push(r)
}
function Kf(t, e) {
    switch (t.tag) {
    case 5:
        var r = t.type;
        return e = e.nodeType !== 1 || r.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        at = t,
        ot = Vr(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        at = t,
        ot = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (r = On !== null ? {
            id: sr,
            overflow: ir
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: r,
            retryLane: 1073741824
        },
        r = gt(18, null, null, 0),
        r.stateNode = e,
        r.return = t,
        t.child = r,
        at = t,
        ot = null,
        !0) : !1;
    default:
        return !1
    }
}
function Du(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Mu(t) {
    if (de) {
        var e = ot;
        if (e) {
            var r = e;
            if (!Kf(t, e)) {
                if (Du(t))
                    throw Error(j(418));
                e = Vr(r.nextSibling);
                var n = at;
                e && Kf(t, e) ? tg(n, r) : (t.flags = t.flags & -4097 | 2,
                de = !1,
                at = t)
            }
        } else {
            if (Du(t))
                throw Error(j(418));
            t.flags = t.flags & -4097 | 2,
            de = !1,
            at = t
        }
    }
}
function Gf(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    at = t
}
function _o(t) {
    if (t !== at)
        return !1;
    if (!de)
        return Gf(t),
        de = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !Nu(t.type, t.memoizedProps)),
    e && (e = ot)) {
        if (Du(t))
            throw rg(),
            Error(j(418));
        for (; e; )
            tg(t, e),
            e = Vr(e.nextSibling)
    }
    if (Gf(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(j(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var r = t.data;
                    if (r === "/$") {
                        if (e === 0) {
                            ot = Vr(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        r !== "$" && r !== "$!" && r !== "$?" || e++
                }
                t = t.nextSibling
            }
            ot = null
        }
    } else
        ot = at ? Vr(t.stateNode.nextSibling) : null;
    return !0
}
function rg() {
    for (var t = ot; t; )
        t = Vr(t.nextSibling)
}
function Os() {
    ot = at = null,
    de = !1
}
function Zc(t) {
    Nt === null ? Nt = [t] : Nt.push(t)
}
var Vx = hr.ReactCurrentBatchConfig;
function ri(t, e, r) {
    if (t = r.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (r._owner) {
            if (r = r._owner,
            r) {
                if (r.tag !== 1)
                    throw Error(j(309));
                var n = r.stateNode
            }
            if (!n)
                throw Error(j(147, t));
            var s = n
              , i = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === i ? e.ref : (e = function(o) {
                var a = s.refs;
                o === null ? delete a[i] : a[i] = o
            }
            ,
            e._stringRef = i,
            e)
        }
        if (typeof t != "string")
            throw Error(j(284));
        if (!r._owner)
            throw Error(j(290, t))
    }
    return t
}
function So(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(j(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function Qf(t) {
    var e = t._init;
    return e(t._payload)
}
function ng(t) {
    function e(g, p) {
        if (t) {
            var v = g.deletions;
            v === null ? (g.deletions = [p],
            g.flags |= 16) : v.push(p)
        }
    }
    function r(g, p) {
        if (!t)
            return null;
        for (; p !== null; )
            e(g, p),
            p = p.sibling;
        return null
    }
    function n(g, p) {
        for (g = new Map; p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function s(g, p) {
        return g = Kr(g, p),
        g.index = 0,
        g.sibling = null,
        g
    }
    function i(g, p, v) {
        return g.index = v,
        t ? (v = g.alternate,
        v !== null ? (v = v.index,
        v < p ? (g.flags |= 2,
        p) : v) : (g.flags |= 2,
        p)) : (g.flags |= 1048576,
        p)
    }
    function o(g) {
        return t && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, p, v, _) {
        return p === null || p.tag !== 6 ? (p = ql(v, g.mode, _),
        p.return = g,
        p) : (p = s(p, v),
        p.return = g,
        p)
    }
    function l(g, p, v, _) {
        var S = v.type;
        return S === Xn ? c(g, p, v.props.children, _, v.key) : p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Tr && Qf(S) === p.type) ? (_ = s(p, v.props),
        _.ref = ri(g, p, v),
        _.return = g,
        _) : (_ = Zo(v.type, v.key, v.props, null, g.mode, _),
        _.ref = ri(g, p, v),
        _.return = g,
        _)
    }
    function u(g, p, v, _) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = Kl(v, g.mode, _),
        p.return = g,
        p) : (p = s(p, v.children || []),
        p.return = g,
        p)
    }
    function c(g, p, v, _, S) {
        return p === null || p.tag !== 7 ? (p = Tn(v, g.mode, _, S),
        p.return = g,
        p) : (p = s(p, v),
        p.return = g,
        p)
    }
    function f(g, p, v) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = ql("" + p, g.mode, v),
            p.return = g,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case fo:
                return v = Zo(p.type, p.key, p.props, null, g.mode, v),
                v.ref = ri(g, null, p),
                v.return = g,
                v;
            case Yn:
                return p = Kl(p, g.mode, v),
                p.return = g,
                p;
            case Tr:
                var _ = p._init;
                return f(g, _(p._payload), v)
            }
            if (li(p) || Ys(p))
                return p = Tn(p, g.mode, v, null),
                p.return = g,
                p;
            So(g, p)
        }
        return null
    }
    function h(g, p, v, _) {
        var S = p !== null ? p.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return S !== null ? null : a(g, p, "" + v, _);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case fo:
                return v.key === S ? l(g, p, v, _) : null;
            case Yn:
                return v.key === S ? u(g, p, v, _) : null;
            case Tr:
                return S = v._init,
                h(g, p, S(v._payload), _)
            }
            if (li(v) || Ys(v))
                return S !== null ? null : c(g, p, v, _, null);
            So(g, v)
        }
        return null
    }
    function d(g, p, v, _, S) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return g = g.get(v) || null,
            a(p, g, "" + _, S);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case fo:
                return g = g.get(_.key === null ? v : _.key) || null,
                l(p, g, _, S);
            case Yn:
                return g = g.get(_.key === null ? v : _.key) || null,
                u(p, g, _, S);
            case Tr:
                var E = _._init;
                return d(g, p, v, E(_._payload), S)
            }
            if (li(_) || Ys(_))
                return g = g.get(v) || null,
                c(p, g, _, S, null);
            So(p, _)
        }
        return null
    }
    function w(g, p, v, _) {
        for (var S = null, E = null, k = p, P = p = 0, R = null; k !== null && P < v.length; P++) {
            k.index > P ? (R = k,
            k = null) : R = k.sibling;
            var N = h(g, k, v[P], _);
            if (N === null) {
                k === null && (k = R);
                break
            }
            t && k && N.alternate === null && e(g, k),
            p = i(N, p, P),
            E === null ? S = N : E.sibling = N,
            E = N,
            k = R
        }
        if (P === v.length)
            return r(g, k),
            de && cn(g, P),
            S;
        if (k === null) {
            for (; P < v.length; P++)
                k = f(g, v[P], _),
                k !== null && (p = i(k, p, P),
                E === null ? S = k : E.sibling = k,
                E = k);
            return de && cn(g, P),
            S
        }
        for (k = n(g, k); P < v.length; P++)
            R = d(k, g, P, v[P], _),
            R !== null && (t && R.alternate !== null && k.delete(R.key === null ? P : R.key),
            p = i(R, p, P),
            E === null ? S = R : E.sibling = R,
            E = R);
        return t && k.forEach(function(z) {
            return e(g, z)
        }),
        de && cn(g, P),
        S
    }
    function m(g, p, v, _) {
        var S = Ys(v);
        if (typeof S != "function")
            throw Error(j(150));
        if (v = S.call(v),
        v == null)
            throw Error(j(151));
        for (var E = S = null, k = p, P = p = 0, R = null, N = v.next(); k !== null && !N.done; P++,
        N = v.next()) {
            k.index > P ? (R = k,
            k = null) : R = k.sibling;
            var z = h(g, k, N.value, _);
            if (z === null) {
                k === null && (k = R);
                break
            }
            t && k && z.alternate === null && e(g, k),
            p = i(z, p, P),
            E === null ? S = z : E.sibling = z,
            E = z,
            k = R
        }
        if (N.done)
            return r(g, k),
            de && cn(g, P),
            S;
        if (k === null) {
            for (; !N.done; P++,
            N = v.next())
                N = f(g, N.value, _),
                N !== null && (p = i(N, p, P),
                E === null ? S = N : E.sibling = N,
                E = N);
            return de && cn(g, P),
            S
        }
        for (k = n(g, k); !N.done; P++,
        N = v.next())
            N = d(k, g, P, N.value, _),
            N !== null && (t && N.alternate !== null && k.delete(N.key === null ? P : N.key),
            p = i(N, p, P),
            E === null ? S = N : E.sibling = N,
            E = N);
        return t && k.forEach(function(D) {
            return e(g, D)
        }),
        de && cn(g, P),
        S
    }
    function y(g, p, v, _) {
        if (typeof v == "object" && v !== null && v.type === Xn && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case fo:
                e: {
                    for (var S = v.key, E = p; E !== null; ) {
                        if (E.key === S) {
                            if (S = v.type,
                            S === Xn) {
                                if (E.tag === 7) {
                                    r(g, E.sibling),
                                    p = s(E, v.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Tr && Qf(S) === E.type) {
                                r(g, E.sibling),
                                p = s(E, v.props),
                                p.ref = ri(g, E, v),
                                p.return = g,
                                g = p;
                                break e
                            }
                            r(g, E);
                            break
                        } else
                            e(g, E);
                        E = E.sibling
                    }
                    v.type === Xn ? (p = Tn(v.props.children, g.mode, _, v.key),
                    p.return = g,
                    g = p) : (_ = Zo(v.type, v.key, v.props, null, g.mode, _),
                    _.ref = ri(g, p, v),
                    _.return = g,
                    g = _)
                }
                return o(g);
            case Yn:
                e: {
                    for (E = v.key; p !== null; ) {
                        if (p.key === E)
                            if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                r(g, p.sibling),
                                p = s(p, v.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                r(g, p);
                                break
                            }
                        else
                            e(g, p);
                        p = p.sibling
                    }
                    p = Kl(v, g.mode, _),
                    p.return = g,
                    g = p
                }
                return o(g);
            case Tr:
                return E = v._init,
                y(g, p, E(v._payload), _)
            }
            if (li(v))
                return w(g, p, v, _);
            if (Ys(v))
                return m(g, p, v, _);
            So(g, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        p !== null && p.tag === 6 ? (r(g, p.sibling),
        p = s(p, v),
        p.return = g,
        g = p) : (r(g, p),
        p = ql(v, g.mode, _),
        p.return = g,
        g = p),
        o(g)) : r(g, p)
    }
    return y
}
var js = ng(!0)
  , sg = ng(!1)
  , ga = tn(null)
  , va = null
  , os = null
  , ed = null;
function td() {
    ed = os = va = null
}
function rd(t) {
    var e = ga.current;
    ue(ga),
    t._currentValue = e
}
function Fu(t, e, r) {
    for (; t !== null; ) {
        var n = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
        t === r)
            break;
        t = t.return
    }
}
function hs(t, e) {
    va = t,
    ed = os = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (Je = !0),
    t.firstContext = null)
}
function yt(t) {
    var e = t._currentValue;
    if (ed !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        os === null) {
            if (va === null)
                throw Error(j(308));
            os = t,
            va.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            os = os.next = t;
    return e
}
var vn = null;
function nd(t) {
    vn === null ? vn = [t] : vn.push(t)
}
function ig(t, e, r, n) {
    var s = e.interleaved;
    return s === null ? (r.next = r,
    nd(e)) : (r.next = s.next,
    s.next = r),
    e.interleaved = r,
    ur(t, n)
}
function ur(t, e) {
    t.lanes |= e;
    var r = t.alternate;
    for (r !== null && (r.lanes |= e),
    r = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        r = t.alternate,
        r !== null && (r.childLanes |= e),
        r = t,
        t = t.return;
    return r.tag === 3 ? r.stateNode : null
}
var Pr = !1;
function sd(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function og(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function or(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Wr(t, e, r) {
    var n = t.updateQueue;
    if (n === null)
        return null;
    if (n = n.shared,
    ee & 2) {
        var s = n.pending;
        return s === null ? e.next = e : (e.next = s.next,
        s.next = e),
        n.pending = e,
        ur(t, r)
    }
    return s = n.interleaved,
    s === null ? (e.next = e,
    nd(n)) : (e.next = s.next,
    s.next = e),
    n.interleaved = e,
    ur(t, r)
}
function Ko(t, e, r) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (r & 4194240) !== 0)) {
        var n = e.lanes;
        n &= t.pendingLanes,
        r |= n,
        e.lanes = r,
        Vc(t, r)
    }
}
function Jf(t, e) {
    var r = t.updateQueue
      , n = t.alternate;
    if (n !== null && (n = n.updateQueue,
    r === n)) {
        var s = null
          , i = null;
        if (r = r.firstBaseUpdate,
        r !== null) {
            do {
                var o = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                i === null ? s = i = o : i = i.next = o,
                r = r.next
            } while (r !== null);
            i === null ? s = i = e : i = i.next = e
        } else
            s = i = e;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: n.shared,
            effects: n.effects
        },
        t.updateQueue = r;
        return
    }
    t = r.lastBaseUpdate,
    t === null ? r.firstBaseUpdate = e : t.next = e,
    r.lastBaseUpdate = e
}
function ya(t, e, r, n) {
    var s = t.updateQueue;
    Pr = !1;
    var i = s.firstBaseUpdate
      , o = s.lastBaseUpdate
      , a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? i = u : o.next = u,
        o = l;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var f = s.baseState;
        o = 0,
        c = u = l = null,
        a = i;
        do {
            var h = a.lane
              , d = a.eventTime;
            if ((n & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: d,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var w = t
                      , m = a;
                    switch (h = e,
                    d = r,
                    m.tag) {
                    case 1:
                        if (w = m.payload,
                        typeof w == "function") {
                            f = w.call(d, f, h);
                            break e
                        }
                        f = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = m.payload,
                        h = typeof w == "function" ? w.call(d, f, h) : w,
                        h == null)
                            break e;
                        f = me({}, f, h);
                        break e;
                    case 2:
                        Pr = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (t.flags |= 64,
                h = s.effects,
                h === null ? s.effects = [a] : h.push(a))
            } else
                d = {
                    eventTime: d,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = d,
                l = f) : c = c.next = d,
                o |= h;
            if (a = a.next,
            a === null) {
                if (a = s.shared.pending,
                a === null)
                    break;
                h = a,
                a = h.next,
                h.next = null,
                s.lastBaseUpdate = h,
                s.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = f),
        s.baseState = l,
        s.firstBaseUpdate = u,
        s.lastBaseUpdate = c,
        e = s.shared.interleaved,
        e !== null) {
            s = e;
            do
                o |= s.lane,
                s = s.next;
            while (s !== e)
        } else
            i === null && (s.shared.lanes = 0);
        Rn |= o,
        t.lanes = o,
        t.memoizedState = f
    }
}
function Yf(t, e, r) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var n = t[e]
              , s = n.callback;
            if (s !== null) {
                if (n.callback = null,
                n = r,
                typeof s != "function")
                    throw Error(j(191, s));
                s.call(n)
            }
        }
}
var to = {}
  , Gt = tn(to)
  , $i = tn(to)
  , Di = tn(to);
function yn(t) {
    if (t === to)
        throw Error(j(174));
    return t
}
function id(t, e) {
    switch (oe(Di, e),
    oe($i, t),
    oe(Gt, to),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : wu(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = wu(e, t)
    }
    ue(Gt),
    oe(Gt, e)
}
function Rs() {
    ue(Gt),
    ue($i),
    ue(Di)
}
function ag(t) {
    yn(Di.current);
    var e = yn(Gt.current)
      , r = wu(e, t.type);
    e !== r && (oe($i, t),
    oe(Gt, r))
}
function od(t) {
    $i.current === t && (ue(Gt),
    ue($i))
}
var he = tn(0);
function wa(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var r = e.memoizedState;
            if (r !== null && (r = r.dehydrated,
            r === null || r.data === "$?" || r.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var Ul = [];
function ad() {
    for (var t = 0; t < Ul.length; t++)
        Ul[t]._workInProgressVersionPrimary = null;
    Ul.length = 0
}
var Go = hr.ReactCurrentDispatcher
  , zl = hr.ReactCurrentBatchConfig
  , jn = 0
  , pe = null
  , Se = null
  , Ce = null
  , xa = !1
  , vi = !1
  , Mi = 0
  , Wx = 0;
function Ie() {
    throw Error(j(321))
}
function ld(t, e) {
    if (e === null)
        return !1;
    for (var r = 0; r < e.length && r < t.length; r++)
        if (!$t(t[r], e[r]))
            return !1;
    return !0
}
function ud(t, e, r, n, s, i) {
    if (jn = i,
    pe = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    Go.current = t === null || t.memoizedState === null ? Gx : Qx,
    t = r(n, s),
    vi) {
        i = 0;
        do {
            if (vi = !1,
            Mi = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            Ce = Se = null,
            e.updateQueue = null,
            Go.current = Jx,
            t = r(n, s)
        } while (vi)
    }
    if (Go.current = ba,
    e = Se !== null && Se.next !== null,
    jn = 0,
    Ce = Se = pe = null,
    xa = !1,
    e)
        throw Error(j(300));
    return t
}
function cd() {
    var t = Mi !== 0;
    return Mi = 0,
    t
}
function zt() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ce === null ? pe.memoizedState = Ce = t : Ce = Ce.next = t,
    Ce
}
function wt() {
    if (Se === null) {
        var t = pe.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = Se.next;
    var e = Ce === null ? pe.memoizedState : Ce.next;
    if (e !== null)
        Ce = e,
        Se = t;
    else {
        if (t === null)
            throw Error(j(310));
        Se = t,
        t = {
            memoizedState: Se.memoizedState,
            baseState: Se.baseState,
            baseQueue: Se.baseQueue,
            queue: Se.queue,
            next: null
        },
        Ce === null ? pe.memoizedState = Ce = t : Ce = Ce.next = t
    }
    return Ce
}
function Fi(t, e) {
    return typeof e == "function" ? e(t) : e
}
function Bl(t) {
    var e = wt()
      , r = e.queue;
    if (r === null)
        throw Error(j(311));
    r.lastRenderedReducer = t;
    var n = Se
      , s = n.baseQueue
      , i = r.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
            i.next = o
        }
        n.baseQueue = s = i,
        r.pending = null
    }
    if (s !== null) {
        i = s.next,
        n = n.baseState;
        var a = o = null
          , l = null
          , u = i;
        do {
            var c = u.lane;
            if ((jn & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                n = u.hasEagerState ? u.eagerState : t(n, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                o = n) : l = l.next = f,
                pe.lanes |= c,
                Rn |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? o = n : l.next = a,
        $t(n, e.memoizedState) || (Je = !0),
        e.memoizedState = n,
        e.baseState = o,
        e.baseQueue = l,
        r.lastRenderedState = n
    }
    if (t = r.interleaved,
    t !== null) {
        s = t;
        do
            i = s.lane,
            pe.lanes |= i,
            Rn |= i,
            s = s.next;
        while (s !== t)
    } else
        s === null && (r.lanes = 0);
    return [e.memoizedState, r.dispatch]
}
function Vl(t) {
    var e = wt()
      , r = e.queue;
    if (r === null)
        throw Error(j(311));
    r.lastRenderedReducer = t;
    var n = r.dispatch
      , s = r.pending
      , i = e.memoizedState;
    if (s !== null) {
        r.pending = null;
        var o = s = s.next;
        do
            i = t(i, o.action),
            o = o.next;
        while (o !== s);
        $t(i, e.memoizedState) || (Je = !0),
        e.memoizedState = i,
        e.baseQueue === null && (e.baseState = i),
        r.lastRenderedState = i
    }
    return [i, n]
}
function lg() {}
function ug(t, e) {
    var r = pe
      , n = wt()
      , s = e()
      , i = !$t(n.memoizedState, s);
    if (i && (n.memoizedState = s,
    Je = !0),
    n = n.queue,
    dd(fg.bind(null, r, n, t), [t]),
    n.getSnapshot !== e || i || Ce !== null && Ce.memoizedState.tag & 1) {
        if (r.flags |= 2048,
        Ui(9, dg.bind(null, r, n, s, e), void 0, null),
        Te === null)
            throw Error(j(349));
        jn & 30 || cg(r, e, s)
    }
    return s
}
function cg(t, e, r) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: r
    },
    e = pe.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = e,
    e.stores = [t]) : (r = e.stores,
    r === null ? e.stores = [t] : r.push(t))
}
function dg(t, e, r, n) {
    e.value = r,
    e.getSnapshot = n,
    hg(e) && pg(t)
}
function fg(t, e, r) {
    return r(function() {
        hg(e) && pg(t)
    })
}
function hg(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var r = e();
        return !$t(t, r)
    } catch {
        return !0
    }
}
function pg(t) {
    var e = ur(t, 1);
    e !== null && Lt(e, t, 1, -1)
}
function Xf(t) {
    var e = zt();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fi,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = Kx.bind(null, pe, t),
    [e.memoizedState, t]
}
function Ui(t, e, r, n) {
    return t = {
        tag: t,
        create: e,
        destroy: r,
        deps: n,
        next: null
    },
    e = pe.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = e,
    e.lastEffect = t.next = t) : (r = e.lastEffect,
    r === null ? e.lastEffect = t.next = t : (n = r.next,
    r.next = t,
    t.next = n,
    e.lastEffect = t)),
    t
}
function mg() {
    return wt().memoizedState
}
function Qo(t, e, r, n) {
    var s = zt();
    pe.flags |= t,
    s.memoizedState = Ui(1 | e, r, void 0, n === void 0 ? null : n)
}
function Ka(t, e, r, n) {
    var s = wt();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (Se !== null) {
        var o = Se.memoizedState;
        if (i = o.destroy,
        n !== null && ld(n, o.deps)) {
            s.memoizedState = Ui(e, r, i, n);
            return
        }
    }
    pe.flags |= t,
    s.memoizedState = Ui(1 | e, r, i, n)
}
function Zf(t, e) {
    return Qo(8390656, 8, t, e)
}
function dd(t, e) {
    return Ka(2048, 8, t, e)
}
function gg(t, e) {
    return Ka(4, 2, t, e)
}
function vg(t, e) {
    return Ka(4, 4, t, e)
}
function yg(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function wg(t, e, r) {
    return r = r != null ? r.concat([t]) : null,
    Ka(4, 4, yg.bind(null, e, t), r)
}
function fd() {}
function xg(t, e) {
    var r = wt();
    e = e === void 0 ? null : e;
    var n = r.memoizedState;
    return n !== null && e !== null && ld(e, n[1]) ? n[0] : (r.memoizedState = [t, e],
    t)
}
function bg(t, e) {
    var r = wt();
    e = e === void 0 ? null : e;
    var n = r.memoizedState;
    return n !== null && e !== null && ld(e, n[1]) ? n[0] : (t = t(),
    r.memoizedState = [t, e],
    t)
}
function _g(t, e, r) {
    return jn & 21 ? ($t(r, e) || (r = Tm(),
    pe.lanes |= r,
    Rn |= r,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    Je = !0),
    t.memoizedState = r)
}
function Hx(t, e) {
    var r = ne;
    ne = r !== 0 && 4 > r ? r : 4,
    t(!0);
    var n = zl.transition;
    zl.transition = {};
    try {
        t(!1),
        e()
    } finally {
        ne = r,
        zl.transition = n
    }
}
function Sg() {
    return wt().memoizedState
}
function qx(t, e, r) {
    var n = qr(t);
    if (r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Eg(t))
        kg(e, r);
    else if (r = ig(t, e, r, n),
    r !== null) {
        var s = Be();
        Lt(r, t, n, s),
        Cg(r, e, n)
    }
}
function Kx(t, e, r) {
    var n = qr(t)
      , s = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Eg(t))
        kg(e, s);
    else {
        var i = t.alternate;
        if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer,
        i !== null))
            try {
                var o = e.lastRenderedState
                  , a = i(o, r);
                if (s.hasEagerState = !0,
                s.eagerState = a,
                $t(a, o)) {
                    var l = e.interleaved;
                    l === null ? (s.next = s,
                    nd(e)) : (s.next = l.next,
                    l.next = s),
                    e.interleaved = s;
                    return
                }
            } catch {} finally {}
        r = ig(t, e, s, n),
        r !== null && (s = Be(),
        Lt(r, t, n, s),
        Cg(r, e, n))
    }
}
function Eg(t) {
    var e = t.alternate;
    return t === pe || e !== null && e === pe
}
function kg(t, e) {
    vi = xa = !0;
    var r = t.pending;
    r === null ? e.next = e : (e.next = r.next,
    r.next = e),
    t.pending = e
}
function Cg(t, e, r) {
    if (r & 4194240) {
        var n = e.lanes;
        n &= t.pendingLanes,
        r |= n,
        e.lanes = r,
        Vc(t, r)
    }
}
var ba = {
    readContext: yt,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useInsertionEffect: Ie,
    useLayoutEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useMutableSource: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    unstable_isNewReconciler: !1
}
  , Gx = {
    readContext: yt,
    useCallback: function(t, e) {
        return zt().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: yt,
    useEffect: Zf,
    useImperativeHandle: function(t, e, r) {
        return r = r != null ? r.concat([t]) : null,
        Qo(4194308, 4, yg.bind(null, e, t), r)
    },
    useLayoutEffect: function(t, e) {
        return Qo(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return Qo(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var r = zt();
        return e = e === void 0 ? null : e,
        t = t(),
        r.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, r) {
        var n = zt();
        return e = r !== void 0 ? r(e) : e,
        n.memoizedState = n.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        n.queue = t,
        t = t.dispatch = qx.bind(null, pe, t),
        [n.memoizedState, t]
    },
    useRef: function(t) {
        var e = zt();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: Xf,
    useDebugValue: fd,
    useDeferredValue: function(t) {
        return zt().memoizedState = t
    },
    useTransition: function() {
        var t = Xf(!1)
          , e = t[0];
        return t = Hx.bind(null, t[1]),
        zt().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, r) {
        var n = pe
          , s = zt();
        if (de) {
            if (r === void 0)
                throw Error(j(407));
            r = r()
        } else {
            if (r = e(),
            Te === null)
                throw Error(j(349));
            jn & 30 || cg(n, e, r)
        }
        s.memoizedState = r;
        var i = {
            value: r,
            getSnapshot: e
        };
        return s.queue = i,
        Zf(fg.bind(null, n, i, t), [t]),
        n.flags |= 2048,
        Ui(9, dg.bind(null, n, i, r, e), void 0, null),
        r
    },
    useId: function() {
        var t = zt()
          , e = Te.identifierPrefix;
        if (de) {
            var r = ir
              , n = sr;
            r = (n & ~(1 << 32 - It(n) - 1)).toString(32) + r,
            e = ":" + e + "R" + r,
            r = Mi++,
            0 < r && (e += "H" + r.toString(32)),
            e += ":"
        } else
            r = Wx++,
            e = ":" + e + "r" + r.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , Qx = {
    readContext: yt,
    useCallback: xg,
    useContext: yt,
    useEffect: dd,
    useImperativeHandle: wg,
    useInsertionEffect: gg,
    useLayoutEffect: vg,
    useMemo: bg,
    useReducer: Bl,
    useRef: mg,
    useState: function() {
        return Bl(Fi)
    },
    useDebugValue: fd,
    useDeferredValue: function(t) {
        var e = wt();
        return _g(e, Se.memoizedState, t)
    },
    useTransition: function() {
        var t = Bl(Fi)[0]
          , e = wt().memoizedState;
        return [t, e]
    },
    useMutableSource: lg,
    useSyncExternalStore: ug,
    useId: Sg,
    unstable_isNewReconciler: !1
}
  , Jx = {
    readContext: yt,
    useCallback: xg,
    useContext: yt,
    useEffect: dd,
    useImperativeHandle: wg,
    useInsertionEffect: gg,
    useLayoutEffect: vg,
    useMemo: bg,
    useReducer: Vl,
    useRef: mg,
    useState: function() {
        return Vl(Fi)
    },
    useDebugValue: fd,
    useDeferredValue: function(t) {
        var e = wt();
        return Se === null ? e.memoizedState = t : _g(e, Se.memoizedState, t)
    },
    useTransition: function() {
        var t = Vl(Fi)[0]
          , e = wt().memoizedState;
        return [t, e]
    },
    useMutableSource: lg,
    useSyncExternalStore: ug,
    useId: Sg,
    unstable_isNewReconciler: !1
};
function Ct(t, e) {
    if (t && t.defaultProps) {
        e = me({}, e),
        t = t.defaultProps;
        for (var r in t)
            e[r] === void 0 && (e[r] = t[r]);
        return e
    }
    return e
}
function Uu(t, e, r, n) {
    e = t.memoizedState,
    r = r(n, e),
    r = r == null ? e : me({}, e, r),
    t.memoizedState = r,
    t.lanes === 0 && (t.updateQueue.baseState = r)
}
var Ga = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? Ln(t) === t : !1
    },
    enqueueSetState: function(t, e, r) {
        t = t._reactInternals;
        var n = Be()
          , s = qr(t)
          , i = or(n, s);
        i.payload = e,
        r != null && (i.callback = r),
        e = Wr(t, i, s),
        e !== null && (Lt(e, t, s, n),
        Ko(e, t, s))
    },
    enqueueReplaceState: function(t, e, r) {
        t = t._reactInternals;
        var n = Be()
          , s = qr(t)
          , i = or(n, s);
        i.tag = 1,
        i.payload = e,
        r != null && (i.callback = r),
        e = Wr(t, i, s),
        e !== null && (Lt(e, t, s, n),
        Ko(e, t, s))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var r = Be()
          , n = qr(t)
          , s = or(r, n);
        s.tag = 2,
        e != null && (s.callback = e),
        e = Wr(t, s, n),
        e !== null && (Lt(e, t, n, r),
        Ko(e, t, n))
    }
};
function eh(t, e, r, n, s, i, o) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, i, o) : e.prototype && e.prototype.isPureReactComponent ? !Ai(r, n) || !Ai(s, i) : !0
}
function Tg(t, e, r) {
    var n = !1
      , s = Qr
      , i = e.contextType;
    return typeof i == "object" && i !== null ? i = yt(i) : (s = Xe(e) ? Pn : Me.current,
    n = e.contextTypes,
    i = (n = n != null) ? Ps(t, s) : Qr),
    e = new e(r,i),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = Ga,
    t.stateNode = e,
    e._reactInternals = t,
    n && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = s,
    t.__reactInternalMemoizedMaskedChildContext = i),
    e
}
function th(t, e, r, n) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(r, n),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(r, n),
    e.state !== t && Ga.enqueueReplaceState(e, e.state, null)
}
function zu(t, e, r, n) {
    var s = t.stateNode;
    s.props = r,
    s.state = t.memoizedState,
    s.refs = {},
    sd(t);
    var i = e.contextType;
    typeof i == "object" && i !== null ? s.context = yt(i) : (i = Xe(e) ? Pn : Me.current,
    s.context = Ps(t, i)),
    s.state = t.memoizedState,
    i = e.getDerivedStateFromProps,
    typeof i == "function" && (Uu(t, e, i, r),
    s.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (e = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    e !== s.state && Ga.enqueueReplaceState(s, s.state, null),
    ya(t, r, s, n),
    s.state = t.memoizedState),
    typeof s.componentDidMount == "function" && (t.flags |= 4194308)
}
function As(t, e) {
    try {
        var r = ""
          , n = e;
        do
            r += Ew(n),
            n = n.return;
        while (n);
        var s = r
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: t,
        source: e,
        stack: s,
        digest: null
    }
}
function Wl(t, e, r) {
    return {
        value: t,
        source: null,
        stack: r ?? null,
        digest: e ?? null
    }
}
function Bu(t, e) {
    try {
        console.error(e.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var Yx = typeof WeakMap == "function" ? WeakMap : Map;
function Pg(t, e, r) {
    r = or(-1, r),
    r.tag = 3,
    r.payload = {
        element: null
    };
    var n = e.value;
    return r.callback = function() {
        Sa || (Sa = !0,
        Xu = n),
        Bu(t, e)
    }
    ,
    r
}
function Og(t, e, r) {
    r = or(-1, r),
    r.tag = 3;
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var s = e.value;
        r.payload = function() {
            return n(s)
        }
        ,
        r.callback = function() {
            Bu(t, e)
        }
    }
    var i = t.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
        Bu(t, e),
        typeof n != "function" && (Hr === null ? Hr = new Set([this]) : Hr.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    r
}
function rh(t, e, r) {
    var n = t.pingCache;
    if (n === null) {
        n = t.pingCache = new Yx;
        var s = new Set;
        n.set(e, s)
    } else
        s = n.get(e),
        s === void 0 && (s = new Set,
        n.set(e, s));
    s.has(r) || (s.add(r),
    t = db.bind(null, t, e, r),
    e.then(t, t))
}
function nh(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function sh(t, e, r, n, s) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = s,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    r.flags |= 131072,
    r.flags &= -52805,
    r.tag === 1 && (r.alternate === null ? r.tag = 17 : (e = or(-1, 1),
    e.tag = 2,
    Wr(r, e, 1))),
    r.lanes |= 1),
    t)
}
var Xx = hr.ReactCurrentOwner
  , Je = !1;
function Ue(t, e, r, n) {
    e.child = t === null ? sg(e, null, r, n) : js(e, t.child, r, n)
}
function ih(t, e, r, n, s) {
    r = r.render;
    var i = e.ref;
    return hs(e, s),
    n = ud(t, e, r, n, i, s),
    r = cd(),
    t !== null && !Je ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~s,
    cr(t, e, s)) : (de && r && Yc(e),
    e.flags |= 1,
    Ue(t, e, n, s),
    e.child)
}
function oh(t, e, r, n, s) {
    if (t === null) {
        var i = r.type;
        return typeof i == "function" && !xd(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (e.tag = 15,
        e.type = i,
        jg(t, e, i, n, s)) : (t = Zo(r.type, null, n, e, e.mode, s),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (i = t.child,
    !(t.lanes & s)) {
        var o = i.memoizedProps;
        if (r = r.compare,
        r = r !== null ? r : Ai,
        r(o, n) && t.ref === e.ref)
            return cr(t, e, s)
    }
    return e.flags |= 1,
    t = Kr(i, n),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function jg(t, e, r, n, s) {
    if (t !== null) {
        var i = t.memoizedProps;
        if (Ai(i, n) && t.ref === e.ref)
            if (Je = !1,
            e.pendingProps = n = i,
            (t.lanes & s) !== 0)
                t.flags & 131072 && (Je = !0);
            else
                return e.lanes = t.lanes,
                cr(t, e, s)
    }
    return Vu(t, e, r, n, s)
}
function Rg(t, e, r) {
    var n = e.pendingProps
      , s = n.children
      , i = t !== null ? t.memoizedState : null;
    if (n.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            oe(ls, rt),
            rt |= r;
        else {
            if (!(r & 1073741824))
                return t = i !== null ? i.baseLanes | r : r,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                oe(ls, rt),
                rt |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            n = i !== null ? i.baseLanes : r,
            oe(ls, rt),
            rt |= n
        }
    else
        i !== null ? (n = i.baseLanes | r,
        e.memoizedState = null) : n = r,
        oe(ls, rt),
        rt |= n;
    return Ue(t, e, s, r),
    e.child
}
function Ag(t, e) {
    var r = e.ref;
    (t === null && r !== null || t !== null && t.ref !== r) && (e.flags |= 512,
    e.flags |= 2097152)
}
function Vu(t, e, r, n, s) {
    var i = Xe(r) ? Pn : Me.current;
    return i = Ps(e, i),
    hs(e, s),
    r = ud(t, e, r, n, i, s),
    n = cd(),
    t !== null && !Je ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~s,
    cr(t, e, s)) : (de && n && Yc(e),
    e.flags |= 1,
    Ue(t, e, r, s),
    e.child)
}
function ah(t, e, r, n, s) {
    if (Xe(r)) {
        var i = !0;
        ha(e)
    } else
        i = !1;
    if (hs(e, s),
    e.stateNode === null)
        Jo(t, e),
        Tg(e, r, n),
        zu(e, r, n, s),
        n = !0;
    else if (t === null) {
        var o = e.stateNode
          , a = e.memoizedProps;
        o.props = a;
        var l = o.context
          , u = r.contextType;
        typeof u == "object" && u !== null ? u = yt(u) : (u = Xe(r) ? Pn : Me.current,
        u = Ps(e, u));
        var c = r.getDerivedStateFromProps
          , f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || l !== u) && th(e, o, n, u),
        Pr = !1;
        var h = e.memoizedState;
        o.state = h,
        ya(e, n, o, s),
        l = e.memoizedState,
        a !== n || h !== l || Ye.current || Pr ? (typeof c == "function" && (Uu(e, r, c, n),
        l = e.memoizedState),
        (a = Pr || eh(e, r, a, n, h, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = n,
        e.memoizedState = l),
        o.props = n,
        o.state = l,
        o.context = u,
        n = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        n = !1)
    } else {
        o = e.stateNode,
        og(t, e),
        a = e.memoizedProps,
        u = e.type === e.elementType ? a : Ct(e.type, a),
        o.props = u,
        f = e.pendingProps,
        h = o.context,
        l = r.contextType,
        typeof l == "object" && l !== null ? l = yt(l) : (l = Xe(r) ? Pn : Me.current,
        l = Ps(e, l));
        var d = r.getDerivedStateFromProps;
        (c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || h !== l) && th(e, o, n, l),
        Pr = !1,
        h = e.memoizedState,
        o.state = h,
        ya(e, n, o, s);
        var w = e.memoizedState;
        a !== f || h !== w || Ye.current || Pr ? (typeof d == "function" && (Uu(e, r, d, n),
        w = e.memoizedState),
        (u = Pr || eh(e, r, u, n, h, w, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, w, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, w, l)),
        typeof o.componentDidUpdate == "function" && (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && h === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = n,
        e.memoizedState = w),
        o.props = n,
        o.state = w,
        o.context = l,
        n = u) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && h === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024),
        n = !1)
    }
    return Wu(t, e, r, n, i, s)
}
function Wu(t, e, r, n, s, i) {
    Ag(t, e);
    var o = (e.flags & 128) !== 0;
    if (!n && !o)
        return s && qf(e, r, !1),
        cr(t, e, i);
    n = e.stateNode,
    Xx.current = e;
    var a = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return e.flags |= 1,
    t !== null && o ? (e.child = js(e, t.child, null, i),
    e.child = js(e, null, a, i)) : Ue(t, e, a, i),
    e.memoizedState = n.state,
    s && qf(e, r, !0),
    e.child
}
function Ng(t) {
    var e = t.stateNode;
    e.pendingContext ? Hf(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Hf(t, e.context, !1),
    id(t, e.containerInfo)
}
function lh(t, e, r, n, s) {
    return Os(),
    Zc(s),
    e.flags |= 256,
    Ue(t, e, r, n),
    e.child
}
var Hu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function qu(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function Ig(t, e, r) {
    var n = e.pendingProps, s = he.current, i = !1, o = (e.flags & 128) !== 0, a;
    if ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (i = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (s |= 1),
    oe(he, s & 1),
    t === null)
        return Mu(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (o = n.children,
        t = n.fallback,
        i ? (n = e.mode,
        i = e.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(n & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = Ya(o, n, 0, null),
        t = Tn(t, n, r, null),
        i.return = e,
        t.return = e,
        i.sibling = t,
        e.child = i,
        e.child.memoizedState = qu(r),
        e.memoizedState = Hu,
        t) : hd(e, o));
    if (s = t.memoizedState,
    s !== null && (a = s.dehydrated,
    a !== null))
        return Zx(t, e, o, n, a, s, r);
    if (i) {
        i = n.fallback,
        o = e.mode,
        s = t.child,
        a = s.sibling;
        var l = {
            mode: "hidden",
            children: n.children
        };
        return !(o & 1) && e.child !== s ? (n = e.child,
        n.childLanes = 0,
        n.pendingProps = l,
        e.deletions = null) : (n = Kr(s, l),
        n.subtreeFlags = s.subtreeFlags & 14680064),
        a !== null ? i = Kr(a, i) : (i = Tn(i, o, r, null),
        i.flags |= 2),
        i.return = e,
        n.return = e,
        n.sibling = i,
        e.child = n,
        n = i,
        i = e.child,
        o = t.child.memoizedState,
        o = o === null ? qu(r) : {
            baseLanes: o.baseLanes | r,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = t.childLanes & ~r,
        e.memoizedState = Hu,
        n
    }
    return i = t.child,
    t = i.sibling,
    n = Kr(i, {
        mode: "visible",
        children: n.children
    }),
    !(e.mode & 1) && (n.lanes = r),
    n.return = e,
    n.sibling = null,
    t !== null && (r = e.deletions,
    r === null ? (e.deletions = [t],
    e.flags |= 16) : r.push(t)),
    e.child = n,
    e.memoizedState = null,
    n
}
function hd(t, e) {
    return e = Ya({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function Eo(t, e, r, n) {
    return n !== null && Zc(n),
    js(e, t.child, null, r),
    t = hd(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function Zx(t, e, r, n, s, i, o) {
    if (r)
        return e.flags & 256 ? (e.flags &= -257,
        n = Wl(Error(j(422))),
        Eo(t, e, o, n)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (i = n.fallback,
        s = e.mode,
        n = Ya({
            mode: "visible",
            children: n.children
        }, s, 0, null),
        i = Tn(i, s, o, null),
        i.flags |= 2,
        n.return = e,
        i.return = e,
        n.sibling = i,
        e.child = n,
        e.mode & 1 && js(e, t.child, null, o),
        e.child.memoizedState = qu(o),
        e.memoizedState = Hu,
        i);
    if (!(e.mode & 1))
        return Eo(t, e, o, null);
    if (s.data === "$!") {
        if (n = s.nextSibling && s.nextSibling.dataset,
        n)
            var a = n.dgst;
        return n = a,
        i = Error(j(419)),
        n = Wl(i, n, void 0),
        Eo(t, e, o, n)
    }
    if (a = (o & t.childLanes) !== 0,
    Je || a) {
        if (n = Te,
        n !== null) {
            switch (o & -o) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
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
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (n.suspendedLanes | o) ? 0 : s,
            s !== 0 && s !== i.retryLane && (i.retryLane = s,
            ur(t, s),
            Lt(n, t, s, -1))
        }
        return wd(),
        n = Wl(Error(j(421))),
        Eo(t, e, o, n)
    }
    return s.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = fb.bind(null, t),
    s._reactRetry = e,
    null) : (t = i.treeContext,
    ot = Vr(s.nextSibling),
    at = e,
    de = !0,
    Nt = null,
    t !== null && (pt[mt++] = sr,
    pt[mt++] = ir,
    pt[mt++] = On,
    sr = t.id,
    ir = t.overflow,
    On = e),
    e = hd(e, n.children),
    e.flags |= 4096,
    e)
}
function uh(t, e, r) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e),
    Fu(t.return, e, r)
}
function Hl(t, e, r, n, s) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: s
    } : (i.isBackwards = e,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = n,
    i.tail = r,
    i.tailMode = s)
}
function Lg(t, e, r) {
    var n = e.pendingProps
      , s = n.revealOrder
      , i = n.tail;
    if (Ue(t, e, n.children, r),
    n = he.current,
    n & 2)
        n = n & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && uh(t, r, e);
                else if (t.tag === 19)
                    uh(t, r, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        n &= 1
    }
    if (oe(he, n),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (r = e.child,
            s = null; r !== null; )
                t = r.alternate,
                t !== null && wa(t) === null && (s = r),
                r = r.sibling;
            r = s,
            r === null ? (s = e.child,
            e.child = null) : (s = r.sibling,
            r.sibling = null),
            Hl(e, !1, s, r, i);
            break;
        case "backwards":
            for (r = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && wa(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = r,
                r = s,
                s = t
            }
            Hl(e, !0, r, null, i);
            break;
        case "together":
            Hl(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function Jo(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function cr(t, e, r) {
    if (t !== null && (e.dependencies = t.dependencies),
    Rn |= e.lanes,
    !(r & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(j(153));
    if (e.child !== null) {
        for (t = e.child,
        r = Kr(t, t.pendingProps),
        e.child = r,
        r.return = e; t.sibling !== null; )
            t = t.sibling,
            r = r.sibling = Kr(t, t.pendingProps),
            r.return = e;
        r.sibling = null
    }
    return e.child
}
function eb(t, e, r) {
    switch (e.tag) {
    case 3:
        Ng(e),
        Os();
        break;
    case 5:
        ag(e);
        break;
    case 1:
        Xe(e.type) && ha(e);
        break;
    case 4:
        id(e, e.stateNode.containerInfo);
        break;
    case 10:
        var n = e.type._context
          , s = e.memoizedProps.value;
        oe(ga, n._currentValue),
        n._currentValue = s;
        break;
    case 13:
        if (n = e.memoizedState,
        n !== null)
            return n.dehydrated !== null ? (oe(he, he.current & 1),
            e.flags |= 128,
            null) : r & e.child.childLanes ? Ig(t, e, r) : (oe(he, he.current & 1),
            t = cr(t, e, r),
            t !== null ? t.sibling : null);
        oe(he, he.current & 1);
        break;
    case 19:
        if (n = (r & e.childLanes) !== 0,
        t.flags & 128) {
            if (n)
                return Lg(t, e, r);
            e.flags |= 128
        }
        if (s = e.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        oe(he, he.current),
        n)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        Rg(t, e, r)
    }
    return cr(t, e, r)
}
var $g, Ku, Dg, Mg;
$g = function(t, e) {
    for (var r = e.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6)
            t.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r,
            r = r.child;
            continue
        }
        if (r === e)
            break;
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === e)
                return;
            r = r.return
        }
        r.sibling.return = r.return,
        r = r.sibling
    }
}
;
Ku = function() {}
;
Dg = function(t, e, r, n) {
    var s = t.memoizedProps;
    if (s !== n) {
        t = e.stateNode,
        yn(Gt.current);
        var i = null;
        switch (r) {
        case "input":
            s = mu(t, s),
            n = mu(t, n),
            i = [];
            break;
        case "select":
            s = me({}, s, {
                value: void 0
            }),
            n = me({}, n, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = yu(t, s),
            n = yu(t, n),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof n.onClick == "function" && (t.onclick = da)
        }
        xu(r, n);
        var o;
        r = null;
        for (u in s)
            if (!n.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var a = s[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (r || (r = {}),
                        r[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ki.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in n) {
            var l = n[u];
            if (a = s != null ? s[u] : void 0,
            n.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}),
                            r[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (r || (r = {}),
                            r[o] = l[o])
                    } else
                        r || (i || (i = []),
                        i.push(u, r)),
                        r = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ki.hasOwnProperty(u) ? (l != null && u === "onScroll" && le("scroll", t),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        r && (i = i || []).push("style", r);
        var u = i;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
Mg = function(t, e, r, n) {
    r !== n && (e.flags |= 4)
}
;
function ni(t, e) {
    if (!de)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var r = null; e !== null; )
                e.alternate !== null && (r = e),
                e = e.sibling;
            r === null ? t.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = t.tail;
            for (var n = null; r !== null; )
                r.alternate !== null && (n = r),
                r = r.sibling;
            n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null
        }
}
function Le(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , r = 0
      , n = 0;
    if (e)
        for (var s = t.child; s !== null; )
            r |= s.lanes | s.childLanes,
            n |= s.subtreeFlags & 14680064,
            n |= s.flags & 14680064,
            s.return = t,
            s = s.sibling;
    else
        for (s = t.child; s !== null; )
            r |= s.lanes | s.childLanes,
            n |= s.subtreeFlags,
            n |= s.flags,
            s.return = t,
            s = s.sibling;
    return t.subtreeFlags |= n,
    t.childLanes = r,
    e
}
function tb(t, e, r) {
    var n = e.pendingProps;
    switch (Xc(e),
    e.tag) {
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
        return Le(e),
        null;
    case 1:
        return Xe(e.type) && fa(),
        Le(e),
        null;
    case 3:
        return n = e.stateNode,
        Rs(),
        ue(Ye),
        ue(Me),
        ad(),
        n.pendingContext && (n.context = n.pendingContext,
        n.pendingContext = null),
        (t === null || t.child === null) && (_o(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        Nt !== null && (tc(Nt),
        Nt = null))),
        Ku(t, e),
        Le(e),
        null;
    case 5:
        od(e);
        var s = yn(Di.current);
        if (r = e.type,
        t !== null && e.stateNode != null)
            Dg(t, e, r, n, s),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!n) {
                if (e.stateNode === null)
                    throw Error(j(166));
                return Le(e),
                null
            }
            if (t = yn(Gt.current),
            _o(e)) {
                n = e.stateNode,
                r = e.type;
                var i = e.memoizedProps;
                switch (n[Ht] = e,
                n[Li] = i,
                t = (e.mode & 1) !== 0,
                r) {
                case "dialog":
                    le("cancel", n),
                    le("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    le("load", n);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < ci.length; s++)
                        le(ci[s], n);
                    break;
                case "source":
                    le("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    le("error", n),
                    le("load", n);
                    break;
                case "details":
                    le("toggle", n);
                    break;
                case "input":
                    yf(n, i),
                    le("invalid", n);
                    break;
                case "select":
                    n._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    le("invalid", n);
                    break;
                case "textarea":
                    xf(n, i),
                    le("invalid", n)
                }
                xu(r, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? n.textContent !== a && (i.suppressHydrationWarning !== !0 && bo(n.textContent, a, t),
                        s = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && bo(n.textContent, a, t),
                        s = ["children", "" + a]) : ki.hasOwnProperty(o) && a != null && o === "onScroll" && le("scroll", n)
                    }
                switch (r) {
                case "input":
                    ho(n),
                    wf(n, i, !0);
                    break;
                case "textarea":
                    ho(n),
                    bf(n);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (n.onclick = da)
                }
                n = s,
                e.updateQueue = n,
                n !== null && (e.flags |= 4)
            } else {
                o = s.nodeType === 9 ? s : s.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = fm(r)),
                t === "http://www.w3.org/1999/xhtml" ? r === "script" ? (t = o.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof n.is == "string" ? t = o.createElement(r, {
                    is: n.is
                }) : (t = o.createElement(r),
                r === "select" && (o = t,
                n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : t = o.createElementNS(t, r),
                t[Ht] = e,
                t[Li] = n,
                $g(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (o = bu(r, n),
                    r) {
                    case "dialog":
                        le("cancel", t),
                        le("close", t),
                        s = n;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        le("load", t),
                        s = n;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < ci.length; s++)
                            le(ci[s], t);
                        s = n;
                        break;
                    case "source":
                        le("error", t),
                        s = n;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        le("error", t),
                        le("load", t),
                        s = n;
                        break;
                    case "details":
                        le("toggle", t),
                        s = n;
                        break;
                    case "input":
                        yf(t, n),
                        s = mu(t, n),
                        le("invalid", t);
                        break;
                    case "option":
                        s = n;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!n.multiple
                        },
                        s = me({}, n, {
                            value: void 0
                        }),
                        le("invalid", t);
                        break;
                    case "textarea":
                        xf(t, n),
                        s = yu(t, n),
                        le("invalid", t);
                        break;
                    default:
                        s = n
                    }
                    xu(r, s),
                    a = s;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? mm(t, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && hm(t, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Ci(t, l) : typeof l == "number" && Ci(t, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ki.hasOwnProperty(i) ? l != null && i === "onScroll" && le("scroll", t) : l != null && Dc(t, i, l, o))
                        }
                    switch (r) {
                    case "input":
                        ho(t),
                        wf(t, n, !1);
                        break;
                    case "textarea":
                        ho(t),
                        bf(t);
                        break;
                    case "option":
                        n.value != null && t.setAttribute("value", "" + Gr(n.value));
                        break;
                    case "select":
                        t.multiple = !!n.multiple,
                        i = n.value,
                        i != null ? us(t, !!n.multiple, i, !1) : n.defaultValue != null && us(t, !!n.multiple, n.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (t.onclick = da)
                    }
                    switch (r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n = !!n.autoFocus;
                        break e;
                    case "img":
                        n = !0;
                        break e;
                    default:
                        n = !1
                    }
                }
                n && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return Le(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            Mg(t, e, t.memoizedProps, n);
        else {
            if (typeof n != "string" && e.stateNode === null)
                throw Error(j(166));
            if (r = yn(Di.current),
            yn(Gt.current),
            _o(e)) {
                if (n = e.stateNode,
                r = e.memoizedProps,
                n[Ht] = e,
                (i = n.nodeValue !== r) && (t = at,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        bo(n.nodeValue, r, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && bo(n.nodeValue, r, (t.mode & 1) !== 0)
                    }
                i && (e.flags |= 4)
            } else
                n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n),
                n[Ht] = e,
                e.stateNode = n
        }
        return Le(e),
        null;
    case 13:
        if (ue(he),
        n = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (de && ot !== null && e.mode & 1 && !(e.flags & 128))
                rg(),
                Os(),
                e.flags |= 98560,
                i = !1;
            else if (i = _o(e),
            n !== null && n.dehydrated !== null) {
                if (t === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = e.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[Ht] = e
                } else
                    Os(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                Le(e),
                i = !1
            } else
                Nt !== null && (tc(Nt),
                Nt = null),
                i = !0;
            if (!i)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = r,
        e) : (n = n !== null,
        n !== (t !== null && t.memoizedState !== null) && n && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || he.current & 1 ? ke === 0 && (ke = 3) : wd())),
        e.updateQueue !== null && (e.flags |= 4),
        Le(e),
        null);
    case 4:
        return Rs(),
        Ku(t, e),
        t === null && Ni(e.stateNode.containerInfo),
        Le(e),
        null;
    case 10:
        return rd(e.type._context),
        Le(e),
        null;
    case 17:
        return Xe(e.type) && fa(),
        Le(e),
        null;
    case 19:
        if (ue(he),
        i = e.memoizedState,
        i === null)
            return Le(e),
            null;
        if (n = (e.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (n)
                ni(i, !1);
            else {
                if (ke !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (o = wa(t),
                        o !== null) {
                            for (e.flags |= 128,
                            ni(i, !1),
                            n = o.updateQueue,
                            n !== null && (e.updateQueue = n,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            n = r,
                            r = e.child; r !== null; )
                                i = r,
                                t = n,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = t,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                t = o.dependencies,
                                i.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                r = r.sibling;
                            return oe(he, he.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                i.tail !== null && ye() > Ns && (e.flags |= 128,
                n = !0,
                ni(i, !1),
                e.lanes = 4194304)
            }
        else {
            if (!n)
                if (t = wa(o),
                t !== null) {
                    if (e.flags |= 128,
                    n = !0,
                    r = t.updateQueue,
                    r !== null && (e.updateQueue = r,
                    e.flags |= 4),
                    ni(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !de)
                        return Le(e),
                        null
                } else
                    2 * ye() - i.renderingStartTime > Ns && r !== 1073741824 && (e.flags |= 128,
                    n = !0,
                    ni(i, !1),
                    e.lanes = 4194304);
            i.isBackwards ? (o.sibling = e.child,
            e.child = o) : (r = i.last,
            r !== null ? r.sibling = o : e.child = o,
            i.last = o)
        }
        return i.tail !== null ? (e = i.tail,
        i.rendering = e,
        i.tail = e.sibling,
        i.renderingStartTime = ye(),
        e.sibling = null,
        r = he.current,
        oe(he, n ? r & 1 | 2 : r & 1),
        e) : (Le(e),
        null);
    case 22:
    case 23:
        return yd(),
        n = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== n && (e.flags |= 8192),
        n && e.mode & 1 ? rt & 1073741824 && (Le(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : Le(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, e.tag))
}
function rb(t, e) {
    switch (Xc(e),
    e.tag) {
    case 1:
        return Xe(e.type) && fa(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return Rs(),
        ue(Ye),
        ue(Me),
        ad(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return od(e),
        null;
    case 13:
        if (ue(he),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(j(340));
            Os()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return ue(he),
        null;
    case 4:
        return Rs(),
        null;
    case 10:
        return rd(e.type._context),
        null;
    case 22:
    case 23:
        return yd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ko = !1
  , De = !1
  , nb = typeof WeakSet == "function" ? WeakSet : Set
  , $ = null;
function as(t, e) {
    var r = t.ref;
    if (r !== null)
        if (typeof r == "function")
            try {
                r(null)
            } catch (n) {
                ve(t, e, n)
            }
        else
            r.current = null
}
function Gu(t, e, r) {
    try {
        r()
    } catch (n) {
        ve(t, e, n)
    }
}
var ch = !1;
function sb(t, e) {
    if (Ru = la,
    t = Vm(),
    Jc(t)) {
        if ("selectionStart"in t)
            var r = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                r = (r = t.ownerDocument) && r.defaultView || window;
                var n = r.getSelection && r.getSelection();
                if (n && n.rangeCount !== 0) {
                    r = n.anchorNode;
                    var s = n.anchorOffset
                      , i = n.focusNode;
                    n = n.focusOffset;
                    try {
                        r.nodeType,
                        i.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , f = t
                      , h = null;
                    t: for (; ; ) {
                        for (var d; f !== r || s !== 0 && f.nodeType !== 3 || (a = o + s),
                        f !== i || n !== 0 && f.nodeType !== 3 || (l = o + n),
                        f.nodeType === 3 && (o += f.nodeValue.length),
                        (d = f.firstChild) !== null; )
                            h = f,
                            f = d;
                        for (; ; ) {
                            if (f === t)
                                break t;
                            if (h === r && ++u === s && (a = o),
                            h === i && ++c === n && (l = o),
                            (d = f.nextSibling) !== null)
                                break;
                            f = h,
                            h = f.parentNode
                        }
                        f = d
                    }
                    r = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    r = null
            }
        r = r || {
            start: 0,
            end: 0
        }
    } else
        r = null;
    for (Au = {
        focusedElem: t,
        selectionRange: r
    },
    la = !1,
    $ = e; $ !== null; )
        if (e = $,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            $ = t;
        else
            for (; $ !== null; ) {
                e = $;
                try {
                    var w = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var m = w.memoizedProps
                                  , y = w.memoizedState
                                  , g = e.stateNode
                                  , p = g.getSnapshotBeforeUpdate(e.elementType === e.type ? m : Ct(e.type, m), y);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var v = e.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (_) {
                    ve(e, e.return, _)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    $ = t;
                    break
                }
                $ = e.return
            }
    return w = ch,
    ch = !1,
    w
}
function yi(t, e, r) {
    var n = e.updateQueue;
    if (n = n !== null ? n.lastEffect : null,
    n !== null) {
        var s = n = n.next;
        do {
            if ((s.tag & t) === t) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && Gu(e, r, i)
            }
            s = s.next
        } while (s !== n)
    }
}
function Qa(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var r = e = e.next;
        do {
            if ((r.tag & t) === t) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== e)
    }
}
function Qu(t) {
    var e = t.ref;
    if (e !== null) {
        var r = t.stateNode;
        switch (t.tag) {
        case 5:
            t = r;
            break;
        default:
            t = r
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function Fg(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    Fg(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[Ht],
    delete e[Li],
    delete e[Lu],
    delete e[Ux],
    delete e[zx])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function Ug(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function dh(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || Ug(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function Ju(t, e, r) {
    var n = t.tag;
    if (n === 5 || n === 6)
        t = t.stateNode,
        e ? r.nodeType === 8 ? r.parentNode.insertBefore(t, e) : r.insertBefore(t, e) : (r.nodeType === 8 ? (e = r.parentNode,
        e.insertBefore(t, r)) : (e = r,
        e.appendChild(t)),
        r = r._reactRootContainer,
        r != null || e.onclick !== null || (e.onclick = da));
    else if (n !== 4 && (t = t.child,
    t !== null))
        for (Ju(t, e, r),
        t = t.sibling; t !== null; )
            Ju(t, e, r),
            t = t.sibling
}
function Yu(t, e, r) {
    var n = t.tag;
    if (n === 5 || n === 6)
        t = t.stateNode,
        e ? r.insertBefore(t, e) : r.appendChild(t);
    else if (n !== 4 && (t = t.child,
    t !== null))
        for (Yu(t, e, r),
        t = t.sibling; t !== null; )
            Yu(t, e, r),
            t = t.sibling
}
var Pe = null
  , Rt = !1;
function xr(t, e, r) {
    for (r = r.child; r !== null; )
        zg(t, e, r),
        r = r.sibling
}
function zg(t, e, r) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function")
        try {
            Kt.onCommitFiberUnmount(za, r)
        } catch {}
    switch (r.tag) {
    case 5:
        De || as(r, e);
    case 6:
        var n = Pe
          , s = Rt;
        Pe = null,
        xr(t, e, r),
        Pe = n,
        Rt = s,
        Pe !== null && (Rt ? (t = Pe,
        r = r.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(r) : t.removeChild(r)) : Pe.removeChild(r.stateNode));
        break;
    case 18:
        Pe !== null && (Rt ? (t = Pe,
        r = r.stateNode,
        t.nodeType === 8 ? Ml(t.parentNode, r) : t.nodeType === 1 && Ml(t, r),
        ji(t)) : Ml(Pe, r.stateNode));
        break;
    case 4:
        n = Pe,
        s = Rt,
        Pe = r.stateNode.containerInfo,
        Rt = !0,
        xr(t, e, r),
        Pe = n,
        Rt = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!De && (n = r.updateQueue,
        n !== null && (n = n.lastEffect,
        n !== null))) {
            s = n = n.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Gu(r, e, o),
                s = s.next
            } while (s !== n)
        }
        xr(t, e, r);
        break;
    case 1:
        if (!De && (as(r, e),
        n = r.stateNode,
        typeof n.componentWillUnmount == "function"))
            try {
                n.props = r.memoizedProps,
                n.state = r.memoizedState,
                n.componentWillUnmount()
            } catch (a) {
                ve(r, e, a)
            }
        xr(t, e, r);
        break;
    case 21:
        xr(t, e, r);
        break;
    case 22:
        r.mode & 1 ? (De = (n = De) || r.memoizedState !== null,
        xr(t, e, r),
        De = n) : xr(t, e, r);
        break;
    default:
        xr(t, e, r)
    }
}
function fh(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var r = t.stateNode;
        r === null && (r = t.stateNode = new nb),
        e.forEach(function(n) {
            var s = hb.bind(null, t, n);
            r.has(n) || (r.add(n),
            n.then(s, s))
        })
    }
}
function St(t, e) {
    var r = e.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var s = r[n];
            try {
                var i = t
                  , o = e
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Pe = a.stateNode,
                        Rt = !1;
                        break e;
                    case 3:
                        Pe = a.stateNode.containerInfo,
                        Rt = !0;
                        break e;
                    case 4:
                        Pe = a.stateNode.containerInfo,
                        Rt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Pe === null)
                    throw Error(j(160));
                zg(i, o, s),
                Pe = null,
                Rt = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (u) {
                ve(s, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            Bg(e, t),
            e = e.sibling
}
function Bg(t, e) {
    var r = t.alternate
      , n = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (St(e, t),
        Ut(t),
        n & 4) {
            try {
                yi(3, t, t.return),
                Qa(3, t)
            } catch (m) {
                ve(t, t.return, m)
            }
            try {
                yi(5, t, t.return)
            } catch (m) {
                ve(t, t.return, m)
            }
        }
        break;
    case 1:
        St(e, t),
        Ut(t),
        n & 512 && r !== null && as(r, r.return);
        break;
    case 5:
        if (St(e, t),
        Ut(t),
        n & 512 && r !== null && as(r, r.return),
        t.flags & 32) {
            var s = t.stateNode;
            try {
                Ci(s, "")
            } catch (m) {
                ve(t, t.return, m)
            }
        }
        if (n & 4 && (s = t.stateNode,
        s != null)) {
            var i = t.memoizedProps
              , o = r !== null ? r.memoizedProps : i
              , a = t.type
              , l = t.updateQueue;
            if (t.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && cm(s, i),
                    bu(a, o);
                    var u = bu(a, i);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o]
                          , f = l[o + 1];
                        c === "style" ? mm(s, f) : c === "dangerouslySetInnerHTML" ? hm(s, f) : c === "children" ? Ci(s, f) : Dc(s, c, f, u)
                    }
                    switch (a) {
                    case "input":
                        gu(s, i);
                        break;
                    case "textarea":
                        dm(s, i);
                        break;
                    case "select":
                        var h = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var d = i.value;
                        d != null ? us(s, !!i.multiple, d, !1) : h !== !!i.multiple && (i.defaultValue != null ? us(s, !!i.multiple, i.defaultValue, !0) : us(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[Li] = i
                } catch (m) {
                    ve(t, t.return, m)
                }
        }
        break;
    case 6:
        if (St(e, t),
        Ut(t),
        n & 4) {
            if (t.stateNode === null)
                throw Error(j(162));
            s = t.stateNode,
            i = t.memoizedProps;
            try {
                s.nodeValue = i
            } catch (m) {
                ve(t, t.return, m)
            }
        }
        break;
    case 3:
        if (St(e, t),
        Ut(t),
        n & 4 && r !== null && r.memoizedState.isDehydrated)
            try {
                ji(e.containerInfo)
            } catch (m) {
                ve(t, t.return, m)
            }
        break;
    case 4:
        St(e, t),
        Ut(t);
        break;
    case 13:
        St(e, t),
        Ut(t),
        s = t.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (gd = ye())),
        n & 4 && fh(t);
        break;
    case 22:
        if (c = r !== null && r.memoizedState !== null,
        t.mode & 1 ? (De = (u = De) || c,
        St(e, t),
        De = u) : St(e, t),
        Ut(t),
        n & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
                for ($ = t,
                c = t.child; c !== null; ) {
                    for (f = $ = c; $ !== null; ) {
                        switch (h = $,
                        d = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            yi(4, h, h.return);
                            break;
                        case 1:
                            as(h, h.return);
                            var w = h.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                n = h,
                                r = h.return;
                                try {
                                    e = n,
                                    w.props = e.memoizedProps,
                                    w.state = e.memoizedState,
                                    w.componentWillUnmount()
                                } catch (m) {
                                    ve(n, r, m)
                                }
                            }
                            break;
                        case 5:
                            as(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                ph(f);
                                continue
                            }
                        }
                        d !== null ? (d.return = h,
                        $ = d) : ph(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = t; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            s = f.stateNode,
                            u ? (i = s.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = pm("display", o))
                        } catch (m) {
                            ve(t, t.return, m)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (m) {
                            ve(t, t.return, m)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === t)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === t)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        St(e, t),
        Ut(t),
        n & 4 && fh(t);
        break;
    case 21:
        break;
    default:
        St(e, t),
        Ut(t)
    }
}
function Ut(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var r = t.return; r !== null; ) {
                    if (Ug(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(j(160))
            }
            switch (n.tag) {
            case 5:
                var s = n.stateNode;
                n.flags & 32 && (Ci(s, ""),
                n.flags &= -33);
                var i = dh(t);
                Yu(t, i, s);
                break;
            case 3:
            case 4:
                var o = n.stateNode.containerInfo
                  , a = dh(t);
                Ju(t, a, o);
                break;
            default:
                throw Error(j(161))
            }
        } catch (l) {
            ve(t, t.return, l)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function ib(t, e, r) {
    $ = t,
    Vg(t)
}
function Vg(t, e, r) {
    for (var n = (t.mode & 1) !== 0; $ !== null; ) {
        var s = $
          , i = s.child;
        if (s.tag === 22 && n) {
            var o = s.memoizedState !== null || ko;
            if (!o) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || De;
                a = ko;
                var u = De;
                if (ko = o,
                (De = l) && !u)
                    for ($ = s; $ !== null; )
                        o = $,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? mh(s) : l !== null ? (l.return = o,
                        $ = l) : mh(s);
                for (; i !== null; )
                    $ = i,
                    Vg(i),
                    i = i.sibling;
                $ = s,
                ko = a,
                De = u
            }
            hh(t)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            $ = i) : hh(t)
    }
}
function hh(t) {
    for (; $ !== null; ) {
        var e = $;
        if (e.flags & 8772) {
            var r = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        De || Qa(5, e);
                        break;
                    case 1:
                        var n = e.stateNode;
                        if (e.flags & 4 && !De)
                            if (r === null)
                                n.componentDidMount();
                            else {
                                var s = e.elementType === e.type ? r.memoizedProps : Ct(e.type, r.memoizedProps);
                                n.componentDidUpdate(s, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = e.updateQueue;
                        i !== null && Yf(e, i, n);
                        break;
                    case 3:
                        var o = e.updateQueue;
                        if (o !== null) {
                            if (r = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    r = e.child.stateNode;
                                    break;
                                case 1:
                                    r = e.child.stateNode
                                }
                            Yf(e, o, r)
                        }
                        break;
                    case 5:
                        var a = e.stateNode;
                        if (r === null && e.flags & 4) {
                            r = a;
                            var l = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && r.focus();
                                break;
                            case "img":
                                l.src && (r.src = l.src)
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
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && ji(f)
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
                        throw Error(j(163))
                    }
                De || e.flags & 512 && Qu(e)
            } catch (h) {
                ve(e, e.return, h)
            }
        }
        if (e === t) {
            $ = null;
            break
        }
        if (r = e.sibling,
        r !== null) {
            r.return = e.return,
            $ = r;
            break
        }
        $ = e.return
    }
}
function ph(t) {
    for (; $ !== null; ) {
        var e = $;
        if (e === t) {
            $ = null;
            break
        }
        var r = e.sibling;
        if (r !== null) {
            r.return = e.return,
            $ = r;
            break
        }
        $ = e.return
    }
}
function mh(t) {
    for (; $ !== null; ) {
        var e = $;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var r = e.return;
                try {
                    Qa(4, e)
                } catch (l) {
                    ve(e, r, l)
                }
                break;
            case 1:
                var n = e.stateNode;
                if (typeof n.componentDidMount == "function") {
                    var s = e.return;
                    try {
                        n.componentDidMount()
                    } catch (l) {
                        ve(e, s, l)
                    }
                }
                var i = e.return;
                try {
                    Qu(e)
                } catch (l) {
                    ve(e, i, l)
                }
                break;
            case 5:
                var o = e.return;
                try {
                    Qu(e)
                } catch (l) {
                    ve(e, o, l)
                }
            }
        } catch (l) {
            ve(e, e.return, l)
        }
        if (e === t) {
            $ = null;
            break
        }
        var a = e.sibling;
        if (a !== null) {
            a.return = e.return,
            $ = a;
            break
        }
        $ = e.return
    }
}
var ob = Math.ceil
  , _a = hr.ReactCurrentDispatcher
  , pd = hr.ReactCurrentOwner
  , vt = hr.ReactCurrentBatchConfig
  , ee = 0
  , Te = null
  , be = null
  , Oe = 0
  , rt = 0
  , ls = tn(0)
  , ke = 0
  , zi = null
  , Rn = 0
  , Ja = 0
  , md = 0
  , wi = null
  , Ge = null
  , gd = 0
  , Ns = 1 / 0
  , er = null
  , Sa = !1
  , Xu = null
  , Hr = null
  , Co = !1
  , Mr = null
  , Ea = 0
  , xi = 0
  , Zu = null
  , Yo = -1
  , Xo = 0;
function Be() {
    return ee & 6 ? ye() : Yo !== -1 ? Yo : Yo = ye()
}
function qr(t) {
    return t.mode & 1 ? ee & 2 && Oe !== 0 ? Oe & -Oe : Vx.transition !== null ? (Xo === 0 && (Xo = Tm()),
    Xo) : (t = ne,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : Im(t.type)),
    t) : 1
}
function Lt(t, e, r, n) {
    if (50 < xi)
        throw xi = 0,
        Zu = null,
        Error(j(185));
    Xi(t, r, n),
    (!(ee & 2) || t !== Te) && (t === Te && (!(ee & 2) && (Ja |= r),
    ke === 4 && jr(t, Oe)),
    Ze(t, n),
    r === 1 && ee === 0 && !(e.mode & 1) && (Ns = ye() + 500,
    qa && rn()))
}
function Ze(t, e) {
    var r = t.callbackNode;
    Vw(t, e);
    var n = aa(t, t === Te ? Oe : 0);
    if (n === 0)
        r !== null && Ef(r),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = n & -n,
    t.callbackPriority !== e) {
        if (r != null && Ef(r),
        e === 1)
            t.tag === 0 ? Bx(gh.bind(null, t)) : Zm(gh.bind(null, t)),
            Mx(function() {
                !(ee & 6) && rn()
            }),
            r = null;
        else {
            switch (Pm(n)) {
            case 1:
                r = Bc;
                break;
            case 4:
                r = km;
                break;
            case 16:
                r = oa;
                break;
            case 536870912:
                r = Cm;
                break;
            default:
                r = oa
            }
            r = Yg(r, Wg.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = r
    }
}
function Wg(t, e) {
    if (Yo = -1,
    Xo = 0,
    ee & 6)
        throw Error(j(327));
    var r = t.callbackNode;
    if (ps() && t.callbackNode !== r)
        return null;
    var n = aa(t, t === Te ? Oe : 0);
    if (n === 0)
        return null;
    if (n & 30 || n & t.expiredLanes || e)
        e = ka(t, n);
    else {
        e = n;
        var s = ee;
        ee |= 2;
        var i = qg();
        (Te !== t || Oe !== e) && (er = null,
        Ns = ye() + 500,
        Cn(t, e));
        do
            try {
                ub();
                break
            } catch (a) {
                Hg(t, a)
            }
        while (!0);
        td(),
        _a.current = i,
        ee = s,
        be !== null ? e = 0 : (Te = null,
        Oe = 0,
        e = ke)
    }
    if (e !== 0) {
        if (e === 2 && (s = Cu(t),
        s !== 0 && (n = s,
        e = ec(t, s))),
        e === 1)
            throw r = zi,
            Cn(t, 0),
            jr(t, n),
            Ze(t, ye()),
            r;
        if (e === 6)
            jr(t, n);
        else {
            if (s = t.current.alternate,
            !(n & 30) && !ab(s) && (e = ka(t, n),
            e === 2 && (i = Cu(t),
            i !== 0 && (n = i,
            e = ec(t, i))),
            e === 1))
                throw r = zi,
                Cn(t, 0),
                jr(t, n),
                Ze(t, ye()),
                r;
            switch (t.finishedWork = s,
            t.finishedLanes = n,
            e) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                dn(t, Ge, er);
                break;
            case 3:
                if (jr(t, n),
                (n & 130023424) === n && (e = gd + 500 - ye(),
                10 < e)) {
                    if (aa(t, 0) !== 0)
                        break;
                    if (s = t.suspendedLanes,
                    (s & n) !== n) {
                        Be(),
                        t.pingedLanes |= t.suspendedLanes & s;
                        break
                    }
                    t.timeoutHandle = Iu(dn.bind(null, t, Ge, er), e);
                    break
                }
                dn(t, Ge, er);
                break;
            case 4:
                if (jr(t, n),
                (n & 4194240) === n)
                    break;
                for (e = t.eventTimes,
                s = -1; 0 < n; ) {
                    var o = 31 - It(n);
                    i = 1 << o,
                    o = e[o],
                    o > s && (s = o),
                    n &= ~i
                }
                if (n = s,
                n = ye() - n,
                n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * ob(n / 1960)) - n,
                10 < n) {
                    t.timeoutHandle = Iu(dn.bind(null, t, Ge, er), n);
                    break
                }
                dn(t, Ge, er);
                break;
            case 5:
                dn(t, Ge, er);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return Ze(t, ye()),
    t.callbackNode === r ? Wg.bind(null, t) : null
}
function ec(t, e) {
    var r = wi;
    return t.current.memoizedState.isDehydrated && (Cn(t, e).flags |= 256),
    t = ka(t, e),
    t !== 2 && (e = Ge,
    Ge = r,
    e !== null && tc(e)),
    t
}
function tc(t) {
    Ge === null ? Ge = t : Ge.push.apply(Ge, t)
}
function ab(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var r = e.updateQueue;
            if (r !== null && (r = r.stores,
            r !== null))
                for (var n = 0; n < r.length; n++) {
                    var s = r[n]
                      , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!$t(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = e.child,
        e.subtreeFlags & 16384 && r !== null)
            r.return = e,
            e = r;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function jr(t, e) {
    for (e &= ~md,
    e &= ~Ja,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var r = 31 - It(e)
          , n = 1 << r;
        t[r] = -1,
        e &= ~n
    }
}
function gh(t) {
    if (ee & 6)
        throw Error(j(327));
    ps();
    var e = aa(t, 0);
    if (!(e & 1))
        return Ze(t, ye()),
        null;
    var r = ka(t, e);
    if (t.tag !== 0 && r === 2) {
        var n = Cu(t);
        n !== 0 && (e = n,
        r = ec(t, n))
    }
    if (r === 1)
        throw r = zi,
        Cn(t, 0),
        jr(t, e),
        Ze(t, ye()),
        r;
    if (r === 6)
        throw Error(j(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    dn(t, Ge, er),
    Ze(t, ye()),
    null
}
function vd(t, e) {
    var r = ee;
    ee |= 1;
    try {
        return t(e)
    } finally {
        ee = r,
        ee === 0 && (Ns = ye() + 500,
        qa && rn())
    }
}
function An(t) {
    Mr !== null && Mr.tag === 0 && !(ee & 6) && ps();
    var e = ee;
    ee |= 1;
    var r = vt.transition
      , n = ne;
    try {
        if (vt.transition = null,
        ne = 1,
        t)
            return t()
    } finally {
        ne = n,
        vt.transition = r,
        ee = e,
        !(ee & 6) && rn()
    }
}
function yd() {
    rt = ls.current,
    ue(ls)
}
function Cn(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var r = t.timeoutHandle;
    if (r !== -1 && (t.timeoutHandle = -1,
    Dx(r)),
    be !== null)
        for (r = be.return; r !== null; ) {
            var n = r;
            switch (Xc(n),
            n.tag) {
            case 1:
                n = n.type.childContextTypes,
                n != null && fa();
                break;
            case 3:
                Rs(),
                ue(Ye),
                ue(Me),
                ad();
                break;
            case 5:
                od(n);
                break;
            case 4:
                Rs();
                break;
            case 13:
                ue(he);
                break;
            case 19:
                ue(he);
                break;
            case 10:
                rd(n.type._context);
                break;
            case 22:
            case 23:
                yd()
            }
            r = r.return
        }
    if (Te = t,
    be = t = Kr(t.current, null),
    Oe = rt = e,
    ke = 0,
    zi = null,
    md = Ja = Rn = 0,
    Ge = wi = null,
    vn !== null) {
        for (e = 0; e < vn.length; e++)
            if (r = vn[e],
            n = r.interleaved,
            n !== null) {
                r.interleaved = null;
                var s = n.next
                  , i = r.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                    n.next = o
                }
                r.pending = n
            }
        vn = null
    }
    return t
}
function Hg(t, e) {
    do {
        var r = be;
        try {
            if (td(),
            Go.current = ba,
            xa) {
                for (var n = pe.memoizedState; n !== null; ) {
                    var s = n.queue;
                    s !== null && (s.pending = null),
                    n = n.next
                }
                xa = !1
            }
            if (jn = 0,
            Ce = Se = pe = null,
            vi = !1,
            Mi = 0,
            pd.current = null,
            r === null || r.return === null) {
                ke = 1,
                zi = e,
                be = null;
                break
            }
            e: {
                var i = t
                  , o = r.return
                  , a = r
                  , l = e;
                if (e = Oe,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue,
                        c.memoizedState = h.memoizedState,
                        c.lanes = h.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var d = nh(o);
                    if (d !== null) {
                        d.flags &= -257,
                        sh(d, o, a, i, e),
                        d.mode & 1 && rh(i, u, e),
                        e = d,
                        l = u;
                        var w = e.updateQueue;
                        if (w === null) {
                            var m = new Set;
                            m.add(l),
                            e.updateQueue = m
                        } else
                            w.add(l);
                        break e
                    } else {
                        if (!(e & 1)) {
                            rh(i, u, e),
                            wd();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (de && a.mode & 1) {
                    var y = nh(o);
                    if (y !== null) {
                        !(y.flags & 65536) && (y.flags |= 256),
                        sh(y, o, a, i, e),
                        Zc(As(l, a));
                        break e
                    }
                }
                i = l = As(l, a),
                ke !== 4 && (ke = 2),
                wi === null ? wi = [i] : wi.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        e &= -e,
                        i.lanes |= e;
                        var g = Pg(i, l, e);
                        Jf(i, g);
                        break e;
                    case 1:
                        a = l;
                        var p = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Hr === null || !Hr.has(v)))) {
                            i.flags |= 65536,
                            e &= -e,
                            i.lanes |= e;
                            var _ = Og(i, a, e);
                            Jf(i, _);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Gg(r)
        } catch (S) {
            e = S,
            be === r && r !== null && (be = r = r.return);
            continue
        }
        break
    } while (!0)
}
function qg() {
    var t = _a.current;
    return _a.current = ba,
    t === null ? ba : t
}
function wd() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Te === null || !(Rn & 268435455) && !(Ja & 268435455) || jr(Te, Oe)
}
function ka(t, e) {
    var r = ee;
    ee |= 2;
    var n = qg();
    (Te !== t || Oe !== e) && (er = null,
    Cn(t, e));
    do
        try {
            lb();
            break
        } catch (s) {
            Hg(t, s)
        }
    while (!0);
    if (td(),
    ee = r,
    _a.current = n,
    be !== null)
        throw Error(j(261));
    return Te = null,
    Oe = 0,
    ke
}
function lb() {
    for (; be !== null; )
        Kg(be)
}
function ub() {
    for (; be !== null && !Iw(); )
        Kg(be)
}
function Kg(t) {
    var e = Jg(t.alternate, t, rt);
    t.memoizedProps = t.pendingProps,
    e === null ? Gg(t) : be = e,
    pd.current = null
}
function Gg(t) {
    var e = t;
    do {
        var r = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (r = rb(r, e),
            r !== null) {
                r.flags &= 32767,
                be = r;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                ke = 6,
                be = null;
                return
            }
        } else if (r = tb(r, e, rt),
        r !== null) {
            be = r;
            return
        }
        if (e = e.sibling,
        e !== null) {
            be = e;
            return
        }
        be = e = t
    } while (e !== null);
    ke === 0 && (ke = 5)
}
function dn(t, e, r) {
    var n = ne
      , s = vt.transition;
    try {
        vt.transition = null,
        ne = 1,
        cb(t, e, r, n)
    } finally {
        vt.transition = s,
        ne = n
    }
    return null
}
function cb(t, e, r, n) {
    do
        ps();
    while (Mr !== null);
    if (ee & 6)
        throw Error(j(327));
    r = t.finishedWork;
    var s = t.finishedLanes;
    if (r === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    r === t.current)
        throw Error(j(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var i = r.lanes | r.childLanes;
    if (Ww(t, i),
    t === Te && (be = Te = null,
    Oe = 0),
    !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Co || (Co = !0,
    Yg(oa, function() {
        return ps(),
        null
    })),
    i = (r.flags & 15990) !== 0,
    r.subtreeFlags & 15990 || i) {
        i = vt.transition,
        vt.transition = null;
        var o = ne;
        ne = 1;
        var a = ee;
        ee |= 4,
        pd.current = null,
        sb(t, r),
        Bg(r, t),
        jx(Au),
        la = !!Ru,
        Au = Ru = null,
        t.current = r,
        ib(r),
        Lw(),
        ee = a,
        ne = o,
        vt.transition = i
    } else
        t.current = r;
    if (Co && (Co = !1,
    Mr = t,
    Ea = s),
    i = t.pendingLanes,
    i === 0 && (Hr = null),
    Mw(r.stateNode),
    Ze(t, ye()),
    e !== null)
        for (n = t.onRecoverableError,
        r = 0; r < e.length; r++)
            s = e[r],
            n(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (Sa)
        throw Sa = !1,
        t = Xu,
        Xu = null,
        t;
    return Ea & 1 && t.tag !== 0 && ps(),
    i = t.pendingLanes,
    i & 1 ? t === Zu ? xi++ : (xi = 0,
    Zu = t) : xi = 0,
    rn(),
    null
}
function ps() {
    if (Mr !== null) {
        var t = Pm(Ea)
          , e = vt.transition
          , r = ne;
        try {
            if (vt.transition = null,
            ne = 16 > t ? 16 : t,
            Mr === null)
                var n = !1;
            else {
                if (t = Mr,
                Mr = null,
                Ea = 0,
                ee & 6)
                    throw Error(j(331));
                var s = ee;
                for (ee |= 4,
                $ = t.current; $ !== null; ) {
                    var i = $
                      , o = i.child;
                    if ($.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for ($ = u; $ !== null; ) {
                                    var c = $;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        yi(8, c, i)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        $ = f;
                                    else
                                        for (; $ !== null; ) {
                                            c = $;
                                            var h = c.sibling
                                              , d = c.return;
                                            if (Fg(c),
                                            c === u) {
                                                $ = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = d,
                                                $ = h;
                                                break
                                            }
                                            $ = d
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var m = w.child;
                                if (m !== null) {
                                    w.child = null;
                                    do {
                                        var y = m.sibling;
                                        m.sibling = null,
                                        m = y
                                    } while (m !== null)
                                }
                            }
                            $ = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        $ = o;
                    else
                        e: for (; $ !== null; ) {
                            if (i = $,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    yi(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                $ = g;
                                break e
                            }
                            $ = i.return
                        }
                }
                var p = t.current;
                for ($ = p; $ !== null; ) {
                    o = $;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null)
                        v.return = o,
                        $ = v;
                    else
                        e: for (o = p; $ !== null; ) {
                            if (a = $,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Qa(9, a)
                                    }
                                } catch (S) {
                                    ve(a, a.return, S)
                                }
                            if (a === o) {
                                $ = null;
                                break e
                            }
                            var _ = a.sibling;
                            if (_ !== null) {
                                _.return = a.return,
                                $ = _;
                                break e
                            }
                            $ = a.return
                        }
                }
                if (ee = s,
                rn(),
                Kt && typeof Kt.onPostCommitFiberRoot == "function")
                    try {
                        Kt.onPostCommitFiberRoot(za, t)
                    } catch {}
                n = !0
            }
            return n
        } finally {
            ne = r,
            vt.transition = e
        }
    }
    return !1
}
function vh(t, e, r) {
    e = As(r, e),
    e = Pg(t, e, 1),
    t = Wr(t, e, 1),
    e = Be(),
    t !== null && (Xi(t, 1, e),
    Ze(t, e))
}
function ve(t, e, r) {
    if (t.tag === 3)
        vh(t, t, r);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                vh(e, t, r);
                break
            } else if (e.tag === 1) {
                var n = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Hr === null || !Hr.has(n))) {
                    t = As(r, t),
                    t = Og(e, t, 1),
                    e = Wr(e, t, 1),
                    t = Be(),
                    e !== null && (Xi(e, 1, t),
                    Ze(e, t));
                    break
                }
            }
            e = e.return
        }
}
function db(t, e, r) {
    var n = t.pingCache;
    n !== null && n.delete(e),
    e = Be(),
    t.pingedLanes |= t.suspendedLanes & r,
    Te === t && (Oe & r) === r && (ke === 4 || ke === 3 && (Oe & 130023424) === Oe && 500 > ye() - gd ? Cn(t, 0) : md |= r),
    Ze(t, e)
}
function Qg(t, e) {
    e === 0 && (t.mode & 1 ? (e = go,
    go <<= 1,
    !(go & 130023424) && (go = 4194304)) : e = 1);
    var r = Be();
    t = ur(t, e),
    t !== null && (Xi(t, e, r),
    Ze(t, r))
}
function fb(t) {
    var e = t.memoizedState
      , r = 0;
    e !== null && (r = e.retryLane),
    Qg(t, r)
}
function hb(t, e) {
    var r = 0;
    switch (t.tag) {
    case 13:
        var n = t.stateNode
          , s = t.memoizedState;
        s !== null && (r = s.retryLane);
        break;
    case 19:
        n = t.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    n !== null && n.delete(e),
    Qg(t, r)
}
var Jg;
Jg = function(t, e, r) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Ye.current)
            Je = !0;
        else {
            if (!(t.lanes & r) && !(e.flags & 128))
                return Je = !1,
                eb(t, e, r);
            Je = !!(t.flags & 131072)
        }
    else
        Je = !1,
        de && e.flags & 1048576 && eg(e, ma, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var n = e.type;
        Jo(t, e),
        t = e.pendingProps;
        var s = Ps(e, Me.current);
        hs(e, r),
        s = ud(null, e, n, t, s, r);
        var i = cd();
        return e.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        Xe(n) ? (i = !0,
        ha(e)) : i = !1,
        e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        sd(e),
        s.updater = Ga,
        e.stateNode = s,
        s._reactInternals = e,
        zu(e, n, t, r),
        e = Wu(null, e, n, !0, i, r)) : (e.tag = 0,
        de && i && Yc(e),
        Ue(null, e, s, r),
        e = e.child),
        e;
    case 16:
        n = e.elementType;
        e: {
            switch (Jo(t, e),
            t = e.pendingProps,
            s = n._init,
            n = s(n._payload),
            e.type = n,
            s = e.tag = mb(n),
            t = Ct(n, t),
            s) {
            case 0:
                e = Vu(null, e, n, t, r);
                break e;
            case 1:
                e = ah(null, e, n, t, r);
                break e;
            case 11:
                e = ih(null, e, n, t, r);
                break e;
            case 14:
                e = oh(null, e, n, Ct(n.type, t), r);
                break e
            }
            throw Error(j(306, n, ""))
        }
        return e;
    case 0:
        return n = e.type,
        s = e.pendingProps,
        s = e.elementType === n ? s : Ct(n, s),
        Vu(t, e, n, s, r);
    case 1:
        return n = e.type,
        s = e.pendingProps,
        s = e.elementType === n ? s : Ct(n, s),
        ah(t, e, n, s, r);
    case 3:
        e: {
            if (Ng(e),
            t === null)
                throw Error(j(387));
            n = e.pendingProps,
            i = e.memoizedState,
            s = i.element,
            og(t, e),
            ya(e, n, null, r);
            var o = e.memoizedState;
            if (n = o.element,
            i.isDehydrated)
                if (i = {
                    element: n,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                e.updateQueue.baseState = i,
                e.memoizedState = i,
                e.flags & 256) {
                    s = As(Error(j(423)), e),
                    e = lh(t, e, n, r, s);
                    break e
                } else if (n !== s) {
                    s = As(Error(j(424)), e),
                    e = lh(t, e, n, r, s);
                    break e
                } else
                    for (ot = Vr(e.stateNode.containerInfo.firstChild),
                    at = e,
                    de = !0,
                    Nt = null,
                    r = sg(e, null, n, r),
                    e.child = r; r; )
                        r.flags = r.flags & -3 | 4096,
                        r = r.sibling;
            else {
                if (Os(),
                n === s) {
                    e = cr(t, e, r);
                    break e
                }
                Ue(t, e, n, r)
            }
            e = e.child
        }
        return e;
    case 5:
        return ag(e),
        t === null && Mu(e),
        n = e.type,
        s = e.pendingProps,
        i = t !== null ? t.memoizedProps : null,
        o = s.children,
        Nu(n, s) ? o = null : i !== null && Nu(n, i) && (e.flags |= 32),
        Ag(t, e),
        Ue(t, e, o, r),
        e.child;
    case 6:
        return t === null && Mu(e),
        null;
    case 13:
        return Ig(t, e, r);
    case 4:
        return id(e, e.stateNode.containerInfo),
        n = e.pendingProps,
        t === null ? e.child = js(e, null, n, r) : Ue(t, e, n, r),
        e.child;
    case 11:
        return n = e.type,
        s = e.pendingProps,
        s = e.elementType === n ? s : Ct(n, s),
        ih(t, e, n, s, r);
    case 7:
        return Ue(t, e, e.pendingProps, r),
        e.child;
    case 8:
        return Ue(t, e, e.pendingProps.children, r),
        e.child;
    case 12:
        return Ue(t, e, e.pendingProps.children, r),
        e.child;
    case 10:
        e: {
            if (n = e.type._context,
            s = e.pendingProps,
            i = e.memoizedProps,
            o = s.value,
            oe(ga, n._currentValue),
            n._currentValue = o,
            i !== null)
                if ($t(i.value, o)) {
                    if (i.children === s.children && !Ye.current) {
                        e = cr(t, e, r);
                        break e
                    }
                } else
                    for (i = e.child,
                    i !== null && (i.return = e); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            o = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === n) {
                                    if (i.tag === 1) {
                                        l = or(-1, r & -r),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= r,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= r),
                                    Fu(i.return, r, e),
                                    a.lanes |= r;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === e.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(j(341));
                            o.lanes |= r,
                            a = o.alternate,
                            a !== null && (a.lanes |= r),
                            Fu(o, r, e),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === e) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            Ue(t, e, s.children, r),
            e = e.child
        }
        return e;
    case 9:
        return s = e.type,
        n = e.pendingProps.children,
        hs(e, r),
        s = yt(s),
        n = n(s),
        e.flags |= 1,
        Ue(t, e, n, r),
        e.child;
    case 14:
        return n = e.type,
        s = Ct(n, e.pendingProps),
        s = Ct(n.type, s),
        oh(t, e, n, s, r);
    case 15:
        return jg(t, e, e.type, e.pendingProps, r);
    case 17:
        return n = e.type,
        s = e.pendingProps,
        s = e.elementType === n ? s : Ct(n, s),
        Jo(t, e),
        e.tag = 1,
        Xe(n) ? (t = !0,
        ha(e)) : t = !1,
        hs(e, r),
        Tg(e, n, s),
        zu(e, n, s, r),
        Wu(null, e, n, !0, t, r);
    case 19:
        return Lg(t, e, r);
    case 22:
        return Rg(t, e, r)
    }
    throw Error(j(156, e.tag))
}
;
function Yg(t, e) {
    return Em(t, e)
}
function pb(t, e, r, n) {
    this.tag = t,
    this.key = r,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = n,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function gt(t, e, r, n) {
    return new pb(t,e,r,n)
}
function xd(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function mb(t) {
    if (typeof t == "function")
        return xd(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === Fc)
            return 11;
        if (t === Uc)
            return 14
    }
    return 2
}
function Kr(t, e) {
    var r = t.alternate;
    return r === null ? (r = gt(t.tag, e, t.key, t.mode),
    r.elementType = t.elementType,
    r.type = t.type,
    r.stateNode = t.stateNode,
    r.alternate = t,
    t.alternate = r) : (r.pendingProps = e,
    r.type = t.type,
    r.flags = 0,
    r.subtreeFlags = 0,
    r.deletions = null),
    r.flags = t.flags & 14680064,
    r.childLanes = t.childLanes,
    r.lanes = t.lanes,
    r.child = t.child,
    r.memoizedProps = t.memoizedProps,
    r.memoizedState = t.memoizedState,
    r.updateQueue = t.updateQueue,
    e = t.dependencies,
    r.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    r.sibling = t.sibling,
    r.index = t.index,
    r.ref = t.ref,
    r
}
function Zo(t, e, r, n, s, i) {
    var o = 2;
    if (n = t,
    typeof t == "function")
        xd(t) && (o = 1);
    else if (typeof t == "string")
        o = 5;
    else
        e: switch (t) {
        case Xn:
            return Tn(r.children, s, i, e);
        case Mc:
            o = 8,
            s |= 8;
            break;
        case du:
            return t = gt(12, r, e, s | 2),
            t.elementType = du,
            t.lanes = i,
            t;
        case fu:
            return t = gt(13, r, e, s),
            t.elementType = fu,
            t.lanes = i,
            t;
        case hu:
            return t = gt(19, r, e, s),
            t.elementType = hu,
            t.lanes = i,
            t;
        case am:
            return Ya(r, s, i, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case im:
                    o = 10;
                    break e;
                case om:
                    o = 9;
                    break e;
                case Fc:
                    o = 11;
                    break e;
                case Uc:
                    o = 14;
                    break e;
                case Tr:
                    o = 16,
                    n = null;
                    break e
                }
            throw Error(j(130, t == null ? t : typeof t, ""))
        }
    return e = gt(o, r, e, s),
    e.elementType = t,
    e.type = n,
    e.lanes = i,
    e
}
function Tn(t, e, r, n) {
    return t = gt(7, t, n, e),
    t.lanes = r,
    t
}
function Ya(t, e, r, n) {
    return t = gt(22, t, n, e),
    t.elementType = am,
    t.lanes = r,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function ql(t, e, r) {
    return t = gt(6, t, null, e),
    t.lanes = r,
    t
}
function Kl(t, e, r) {
    return e = gt(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = r,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function gb(t, e, r, n, s) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Tl(0),
    this.expirationTimes = Tl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Tl(0),
    this.identifierPrefix = n,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function bd(t, e, r, n, s, i, o, a, l) {
    return t = new gb(t,e,r,a,l),
    e === 1 ? (e = 1,
    i === !0 && (e |= 8)) : e = 0,
    i = gt(3, null, null, e),
    t.current = i,
    i.stateNode = t,
    i.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    sd(i),
    t
}
function vb(t, e, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Yn,
        key: n == null ? null : "" + n,
        children: t,
        containerInfo: e,
        implementation: r
    }
}
function Xg(t) {
    if (!t)
        return Qr;
    t = t._reactInternals;
    e: {
        if (Ln(t) !== t || t.tag !== 1)
            throw Error(j(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (Xe(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(j(171))
    }
    if (t.tag === 1) {
        var r = t.type;
        if (Xe(r))
            return Xm(t, r, e)
    }
    return e
}
function Zg(t, e, r, n, s, i, o, a, l) {
    return t = bd(r, n, !0, t, s, i, o, a, l),
    t.context = Xg(null),
    r = t.current,
    n = Be(),
    s = qr(r),
    i = or(n, s),
    i.callback = e ?? null,
    Wr(r, i, s),
    t.current.lanes = s,
    Xi(t, s, n),
    Ze(t, n),
    t
}
function Xa(t, e, r, n) {
    var s = e.current
      , i = Be()
      , o = qr(s);
    return r = Xg(r),
    e.context === null ? e.context = r : e.pendingContext = r,
    e = or(i, o),
    e.payload = {
        element: t
    },
    n = n === void 0 ? null : n,
    n !== null && (e.callback = n),
    t = Wr(s, e, o),
    t !== null && (Lt(t, s, o, i),
    Ko(t, s, o)),
    o
}
function Ca(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function yh(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var r = t.retryLane;
        t.retryLane = r !== 0 && r < e ? r : e
    }
}
function _d(t, e) {
    yh(t, e),
    (t = t.alternate) && yh(t, e)
}
function yb() {
    return null
}
var ev = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function Sd(t) {
    this._internalRoot = t
}
Za.prototype.render = Sd.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(j(409));
    Xa(t, e, null, null)
}
;
Za.prototype.unmount = Sd.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        An(function() {
            Xa(null, t, null, null)
        }),
        e[lr] = null
    }
}
;
function Za(t) {
    this._internalRoot = t
}
Za.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Rm();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var r = 0; r < Or.length && e !== 0 && e < Or[r].priority; r++)
            ;
        Or.splice(r, 0, t),
        r === 0 && Nm(t)
    }
}
;
function Ed(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function el(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function wh() {}
function wb(t, e, r, n, s) {
    if (s) {
        if (typeof n == "function") {
            var i = n;
            n = function() {
                var u = Ca(o);
                i.call(u)
            }
        }
        var o = Zg(e, n, t, 0, null, !1, !1, "", wh);
        return t._reactRootContainer = o,
        t[lr] = o.current,
        Ni(t.nodeType === 8 ? t.parentNode : t),
        An(),
        o
    }
    for (; s = t.lastChild; )
        t.removeChild(s);
    if (typeof n == "function") {
        var a = n;
        n = function() {
            var u = Ca(l);
            a.call(u)
        }
    }
    var l = bd(t, 0, !1, null, null, !1, !1, "", wh);
    return t._reactRootContainer = l,
    t[lr] = l.current,
    Ni(t.nodeType === 8 ? t.parentNode : t),
    An(function() {
        Xa(e, l, r, n)
    }),
    l
}
function tl(t, e, r, n, s) {
    var i = r._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = Ca(o);
                a.call(l)
            }
        }
        Xa(e, o, t, s)
    } else
        o = wb(r, e, t, s, n);
    return Ca(o)
}
Om = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var r = ui(e.pendingLanes);
            r !== 0 && (Vc(e, r | 1),
            Ze(e, ye()),
            !(ee & 6) && (Ns = ye() + 500,
            rn()))
        }
        break;
    case 13:
        An(function() {
            var n = ur(t, 1);
            if (n !== null) {
                var s = Be();
                Lt(n, t, 1, s)
            }
        }),
        _d(t, 1)
    }
}
;
Wc = function(t) {
    if (t.tag === 13) {
        var e = ur(t, 134217728);
        if (e !== null) {
            var r = Be();
            Lt(e, t, 134217728, r)
        }
        _d(t, 134217728)
    }
}
;
jm = function(t) {
    if (t.tag === 13) {
        var e = qr(t)
          , r = ur(t, e);
        if (r !== null) {
            var n = Be();
            Lt(r, t, e, n)
        }
        _d(t, e)
    }
}
;
Rm = function() {
    return ne
}
;
Am = function(t, e) {
    var r = ne;
    try {
        return ne = t,
        e()
    } finally {
        ne = r
    }
}
;
Su = function(t, e, r) {
    switch (e) {
    case "input":
        if (gu(t, r),
        e = r.name,
        r.type === "radio" && e != null) {
            for (r = t; r.parentNode; )
                r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < r.length; e++) {
                var n = r[e];
                if (n !== t && n.form === t.form) {
                    var s = Ha(n);
                    if (!s)
                        throw Error(j(90));
                    um(n),
                    gu(n, s)
                }
            }
        }
        break;
    case "textarea":
        dm(t, r);
        break;
    case "select":
        e = r.value,
        e != null && us(t, !!r.multiple, e, !1)
    }
}
;
ym = vd;
wm = An;
var xb = {
    usingClientEntryPoint: !1,
    Events: [eo, rs, Ha, gm, vm, vd]
}
  , si = {
    findFiberByHostInstance: gn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , bb = {
    bundleType: si.bundleType,
    version: si.version,
    rendererPackageName: si.rendererPackageName,
    rendererConfig: si.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = _m(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: si.findFiberByHostInstance || yb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var To = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!To.isDisabled && To.supportsFiber)
        try {
            za = To.inject(bb),
            Kt = To
        } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xb;
ct.createPortal = function(t, e) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ed(e))
        throw Error(j(200));
    return vb(t, e, null, r)
}
;
ct.createRoot = function(t, e) {
    if (!Ed(t))
        throw Error(j(299));
    var r = !1
      , n = ""
      , s = ev;
    return e != null && (e.unstable_strictMode === !0 && (r = !0),
    e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    e = bd(t, 1, !1, null, null, r, !1, n, s),
    t[lr] = e.current,
    Ni(t.nodeType === 8 ? t.parentNode : t),
    new Sd(e)
}
;
ct.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(j(188)) : (t = Object.keys(t).join(","),
        Error(j(268, t)));
    return t = _m(e),
    t = t === null ? null : t.stateNode,
    t
}
;
ct.flushSync = function(t) {
    return An(t)
}
;
ct.hydrate = function(t, e, r) {
    if (!el(e))
        throw Error(j(200));
    return tl(null, t, e, !0, r)
}
;
ct.hydrateRoot = function(t, e, r) {
    if (!Ed(t))
        throw Error(j(405));
    var n = r != null && r.hydratedSources || null
      , s = !1
      , i = ""
      , o = ev;
    if (r != null && (r.unstable_strictMode === !0 && (s = !0),
    r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
    r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    e = Zg(e, null, t, 1, r ?? null, s, !1, i, o),
    t[lr] = e.current,
    Ni(t),
    n)
        for (t = 0; t < n.length; t++)
            r = n[t],
            s = r._getVersion,
            s = s(r._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [r, s] : e.mutableSourceEagerHydrationData.push(r, s);
    return new Za(e)
}
;
ct.render = function(t, e, r) {
    if (!el(e))
        throw Error(j(200));
    return tl(null, t, e, !1, r)
}
;
ct.unmountComponentAtNode = function(t) {
    if (!el(t))
        throw Error(j(40));
    return t._reactRootContainer ? (An(function() {
        tl(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[lr] = null
        })
    }),
    !0) : !1
}
;
ct.unstable_batchedUpdates = vd;
ct.unstable_renderSubtreeIntoContainer = function(t, e, r, n) {
    if (!el(r))
        throw Error(j(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(j(38));
    return tl(t, e, r, !1, n)
}
;
ct.version = "18.3.1-next-f1338f8080-20240426";
function tv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tv)
        } catch (t) {
            console.error(t)
        }
}
tv(),
tm.exports = ct;
var ro = tm.exports;
const rv = zp(ro);
var nv, xh = ro;
nv = xh.createRoot,
xh.hydrateRoot;
const _b = 1
  , Sb = 1e6;
let Gl = 0;
function Eb() {
    return Gl = (Gl + 1) % Number.MAX_SAFE_INTEGER,
    Gl.toString()
}
const Ql = new Map
  , bh = t => {
    if (Ql.has(t))
        return;
    const e = setTimeout( () => {
        Ql.delete(t),
        bi({
            type: "REMOVE_TOAST",
            toastId: t
        })
    }
    , Sb);
    Ql.set(t, e)
}
  , kb = (t, e) => {
    switch (e.type) {
    case "ADD_TOAST":
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, _b)
        };
    case "UPDATE_TOAST":
        return {
            ...t,
            toasts: t.toasts.map(r => r.id === e.toast.id ? {
                ...r,
                ...e.toast
            } : r)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: r} = e;
            return r ? bh(r) : t.toasts.forEach(n => {
                bh(n.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(n => n.id === r || r === void 0 ? {
                    ...n,
                    open: !1
                } : n)
            }
        }
    case "REMOVE_TOAST":
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(r => r.id !== e.toastId)
        }
    }
}
  , ea = [];
let ta = {
    toasts: []
};
function bi(t) {
    ta = kb(ta, t),
    ea.forEach(e => {
        e(ta)
    }
    )
}
function Cb({...t}) {
    const e = Eb()
      , r = s => bi({
        type: "UPDATE_TOAST",
        toast: {
            ...s,
            id: e
        }
    })
      , n = () => bi({
        type: "DISMISS_TOAST",
        toastId: e
    });
    return bi({
        type: "ADD_TOAST",
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: s => {
                s || n()
            }
        }
    }),
    {
        id: e,
        dismiss: n,
        update: r
    }
}
function Tb() {
    const [t,e] = b.useState(ta);
    return b.useEffect( () => (ea.push(e),
    () => {
        const r = ea.indexOf(e);
        r > -1 && ea.splice(r, 1)
    }
    ), [t]),
    {
        ...t,
        toast: Cb,
        dismiss: r => bi({
            type: "DISMISS_TOAST",
            toastId: r
        })
    }
}
function Ee(t, e, {checkForDefaultPrevented: r=!0}={}) {
    return function(s) {
        if (t == null || t(s),
        r === !1 || !s.defaultPrevented)
            return e == null ? void 0 : e(s)
    }
}
function _h(t, e) {
    if (typeof t == "function")
        return t(e);
    t != null && (t.current = e)
}
function sv(...t) {
    return e => {
        let r = !1;
        const n = t.map(s => {
            const i = _h(s, e);
            return !r && typeof i == "function" && (r = !0),
            i
        }
        );
        if (r)
            return () => {
                for (let s = 0; s < n.length; s++) {
                    const i = n[s];
                    typeof i == "function" ? i() : _h(t[s], null)
                }
            }
    }
}
function Dt(...t) {
    return b.useCallback(sv(...t), t)
}
function rl(t, e=[]) {
    let r = [];
    function n(i, o) {
        const a = b.createContext(o)
          , l = r.length;
        r = [...r, o];
        const u = f => {
            var g;
            const {scope: h, children: d, ...w} = f
              , m = ((g = h == null ? void 0 : h[t]) == null ? void 0 : g[l]) || a
              , y = b.useMemo( () => w, Object.values(w));
            return x.jsx(m.Provider, {
                value: y,
                children: d
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(f, h) {
            var m;
            const d = ((m = h == null ? void 0 : h[t]) == null ? void 0 : m[l]) || a
              , w = b.useContext(d);
            if (w)
                return w;
            if (o !== void 0)
                return o;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const s = () => {
        const i = r.map(o => b.createContext(o));
        return function(a) {
            const l = (a == null ? void 0 : a[t]) || i;
            return b.useMemo( () => ({
                [`__scope${t}`]: {
                    ...a,
                    [t]: l
                }
            }), [a, l])
        }
    }
    ;
    return s.scopeName = t,
    [n, Pb(s, ...e)]
}
function Pb(...t) {
    const e = t[0];
    if (t.length === 1)
        return e;
    const r = () => {
        const n = t.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(i) {
            const o = n.reduce( (a, {useScope: l, scopeName: u}) => {
                const f = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }
            , {});
            return b.useMemo( () => ({
                [`__scope${e.scopeName}`]: o
            }), [o])
        }
    }
    ;
    return r.scopeName = e.scopeName,
    r
}
function Ta(t) {
    const e = jb(t)
      , r = b.forwardRef( (n, s) => {
        const {children: i, ...o} = n
          , a = b.Children.toArray(i)
          , l = a.find(Ab);
        if (l) {
            const u = l.props.children
              , c = a.map(f => f === l ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : f);
            return x.jsx(e, {
                ...o,
                ref: s,
                children: b.isValidElement(u) ? b.cloneElement(u, void 0, c) : null
            })
        }
        return x.jsx(e, {
            ...o,
            ref: s,
            children: i
        })
    }
    );
    return r.displayName = `${t}.Slot`,
    r
}
var Ob = Ta("Slot");
function jb(t) {
    const e = b.forwardRef( (r, n) => {
        const {children: s, ...i} = r;
        if (b.isValidElement(s)) {
            const o = Ib(s)
              , a = Nb(i, s.props);
            return s.type !== b.Fragment && (a.ref = n ? sv(n, o) : o),
            b.cloneElement(s, a)
        }
        return b.Children.count(s) > 1 ? b.Children.only(null) : null
    }
    );
    return e.displayName = `${t}.SlotClone`,
    e
}
var iv = Symbol("radix.slottable");
function Rb(t) {
    const e = ({children: r}) => x.jsx(x.Fragment, {
        children: r
    });
    return e.displayName = `${t}.Slottable`,
    e.__radixId = iv,
    e
}
function Ab(t) {
    return b.isValidElement(t) && typeof t.type == "function" && "__radixId"in t.type && t.type.__radixId === iv
}
function Nb(t, e) {
    const r = {
        ...e
    };
    for (const n in e) {
        const s = t[n]
          , i = e[n];
        /^on[A-Z]/.test(n) ? s && i ? r[n] = (...a) => {
            const l = i(...a);
            return s(...a),
            l
        }
        : s && (r[n] = s) : n === "style" ? r[n] = {
            ...s,
            ...i
        } : n === "className" && (r[n] = [s, i].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...r
    }
}
function Ib(t) {
    var n, s;
    let e = (n = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : n.get
      , r = e && "isReactWarning"in e && e.isReactWarning;
    return r ? t.ref : (e = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get,
    r = e && "isReactWarning"in e && e.isReactWarning,
    r ? t.props.ref : t.props.ref || t.ref)
}
function Lb(t) {
    const e = t + "CollectionProvider"
      , [r,n] = rl(e)
      , [s,i] = r(e, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , o = m => {
        const {scope: y, children: g} = m
          , p = A.useRef(null)
          , v = A.useRef(new Map).current;
        return x.jsx(s, {
            scope: y,
            itemMap: v,
            collectionRef: p,
            children: g
        })
    }
    ;
    o.displayName = e;
    const a = t + "CollectionSlot"
      , l = Ta(a)
      , u = A.forwardRef( (m, y) => {
        const {scope: g, children: p} = m
          , v = i(a, g)
          , _ = Dt(y, v.collectionRef);
        return x.jsx(l, {
            ref: _,
            children: p
        })
    }
    );
    u.displayName = a;
    const c = t + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , h = Ta(c)
      , d = A.forwardRef( (m, y) => {
        const {scope: g, children: p, ...v} = m
          , _ = A.useRef(null)
          , S = Dt(y, _)
          , E = i(c, g);
        return A.useEffect( () => (E.itemMap.set(_, {
            ref: _,
            ...v
        }),
        () => void E.itemMap.delete(_))),
        x.jsx(h, {
            [f]: "",
            ref: S,
            children: p
        })
    }
    );
    d.displayName = c;
    function w(m) {
        const y = i(t + "CollectionConsumer", m);
        return A.useCallback( () => {
            const p = y.collectionRef.current;
            if (!p)
                return [];
            const v = Array.from(p.querySelectorAll(`[${f}]`));
            return Array.from(y.itemMap.values()).sort( (E, k) => v.indexOf(E.ref.current) - v.indexOf(k.ref.current))
        }
        , [y.collectionRef, y.itemMap])
    }
    return [{
        Provider: o,
        Slot: u,
        ItemSlot: d
    }, w, n]
}
var $b = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , He = $b.reduce( (t, e) => {
    const r = Ta(`Primitive.${e}`)
      , n = b.forwardRef( (s, i) => {
        const {asChild: o, ...a} = s
          , l = o ? r : e;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        x.jsx(l, {
            ...a,
            ref: i
        })
    }
    );
    return n.displayName = `Primitive.${e}`,
    {
        ...t,
        [e]: n
    }
}
, {});
function ov(t, e) {
    t && ro.flushSync( () => t.dispatchEvent(e))
}
function Jr(t) {
    const e = b.useRef(t);
    return b.useEffect( () => {
        e.current = t
    }
    ),
    b.useMemo( () => (...r) => {
        var n;
        return (n = e.current) == null ? void 0 : n.call(e, ...r)
    }
    , [])
}
function Db(t, e=globalThis == null ? void 0 : globalThis.document) {
    const r = Jr(t);
    b.useEffect( () => {
        const n = s => {
            s.key === "Escape" && r(s)
        }
        ;
        return e.addEventListener("keydown", n, {
            capture: !0
        }),
        () => e.removeEventListener("keydown", n, {
            capture: !0
        })
    }
    , [r, e])
}
var Mb = "DismissableLayer", rc = "dismissableLayer.update", Fb = "dismissableLayer.pointerDownOutside", Ub = "dismissableLayer.focusOutside", Sh, av = b.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), kd = b.forwardRef( (t, e) => {
    const {disableOutsidePointerEvents: r=!1, onEscapeKeyDown: n, onPointerDownOutside: s, onFocusOutside: i, onInteractOutside: o, onDismiss: a, ...l} = t
      , u = b.useContext(av)
      , [c,f] = b.useState(null)
      , h = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,d] = b.useState({})
      , w = Dt(e, k => f(k))
      , m = Array.from(u.layers)
      , [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = m.indexOf(y)
      , p = c ? m.indexOf(c) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , _ = p >= g
      , S = Bb(k => {
        const P = k.target
          , R = [...u.branches].some(N => N.contains(P));
        !_ || R || (s == null || s(k),
        o == null || o(k),
        k.defaultPrevented || a == null || a())
    }
    , h)
      , E = Vb(k => {
        const P = k.target;
        [...u.branches].some(N => N.contains(P)) || (i == null || i(k),
        o == null || o(k),
        k.defaultPrevented || a == null || a())
    }
    , h);
    return Db(k => {
        p === u.layers.size - 1 && (n == null || n(k),
        !k.defaultPrevented && a && (k.preventDefault(),
        a()))
    }
    , h),
    b.useEffect( () => {
        if (c)
            return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Sh = h.body.style.pointerEvents,
            h.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Eh(),
            () => {
                r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Sh)
            }
    }
    , [c, h, r, u]),
    b.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Eh())
    }
    , [c, u]),
    b.useEffect( () => {
        const k = () => d({});
        return document.addEventListener(rc, k),
        () => document.removeEventListener(rc, k)
    }
    , []),
    x.jsx(He.div, {
        ...l,
        ref: w,
        style: {
            pointerEvents: v ? _ ? "auto" : "none" : void 0,
            ...t.style
        },
        onFocusCapture: Ee(t.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Ee(t.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Ee(t.onPointerDownCapture, S.onPointerDownCapture)
    })
}
);
kd.displayName = Mb;
var zb = "DismissableLayerBranch"
  , lv = b.forwardRef( (t, e) => {
    const r = b.useContext(av)
      , n = b.useRef(null)
      , s = Dt(e, n);
    return b.useEffect( () => {
        const i = n.current;
        if (i)
            return r.branches.add(i),
            () => {
                r.branches.delete(i)
            }
    }
    , [r.branches]),
    x.jsx(He.div, {
        ...t,
        ref: s
    })
}
);
lv.displayName = zb;
function Bb(t, e=globalThis == null ? void 0 : globalThis.document) {
    const r = Jr(t)
      , n = b.useRef(!1)
      , s = b.useRef( () => {}
    );
    return b.useEffect( () => {
        const i = a => {
            if (a.target && !n.current) {
                let l = function() {
                    uv(Fb, r, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (e.removeEventListener("click", s.current),
                s.current = l,
                e.addEventListener("click", s.current, {
                    once: !0
                })) : l()
            } else
                e.removeEventListener("click", s.current);
            n.current = !1
        }
          , o = window.setTimeout( () => {
            e.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(o),
            e.removeEventListener("pointerdown", i),
            e.removeEventListener("click", s.current)
        }
    }
    , [e, r]),
    {
        onPointerDownCapture: () => n.current = !0
    }
}
function Vb(t, e=globalThis == null ? void 0 : globalThis.document) {
    const r = Jr(t)
      , n = b.useRef(!1);
    return b.useEffect( () => {
        const s = i => {
            i.target && !n.current && uv(Ub, r, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return e.addEventListener("focusin", s),
        () => e.removeEventListener("focusin", s)
    }
    , [e, r]),
    {
        onFocusCapture: () => n.current = !0,
        onBlurCapture: () => n.current = !1
    }
}
function Eh() {
    const t = new CustomEvent(rc);
    document.dispatchEvent(t)
}
function uv(t, e, r, {discrete: n}) {
    const s = r.originalEvent.target
      , i = new CustomEvent(t,{
        bubbles: !1,
        cancelable: !0,
        detail: r
    });
    e && s.addEventListener(t, e, {
        once: !0
    }),
    n ? ov(s, i) : s.dispatchEvent(i)
}
var Wb = kd
  , Hb = lv
  , Yr = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {}
  , qb = "Portal"
  , cv = b.forwardRef( (t, e) => {
    var a;
    const {container: r, ...n} = t
      , [s,i] = b.useState(!1);
    Yr( () => i(!0), []);
    const o = r || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return o ? rv.createPortal(x.jsx(He.div, {
        ...n,
        ref: e
    }), o) : null
}
);
cv.displayName = qb;
function Kb(t, e) {
    return b.useReducer( (r, n) => e[r][n] ?? r, t)
}
var Cd = t => {
    const {present: e, children: r} = t
      , n = Gb(e)
      , s = typeof r == "function" ? r({
        present: n.isPresent
    }) : b.Children.only(r)
      , i = Dt(n.ref, Qb(s));
    return typeof r == "function" || n.isPresent ? b.cloneElement(s, {
        ref: i
    }) : null
}
;
Cd.displayName = "Presence";
function Gb(t) {
    const [e,r] = b.useState()
      , n = b.useRef(null)
      , s = b.useRef(t)
      , i = b.useRef("none")
      , o = t ? "mounted" : "unmounted"
      , [a,l] = Kb(o, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return b.useEffect( () => {
        const u = Po(n.current);
        i.current = a === "mounted" ? u : "none"
    }
    , [a]),
    Yr( () => {
        const u = n.current
          , c = s.current;
        if (c !== t) {
            const h = i.current
              , d = Po(u);
            t ? l("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && h !== d ? "ANIMATION_OUT" : "UNMOUNT"),
            s.current = t
        }
    }
    , [t, l]),
    Yr( () => {
        if (e) {
            let u;
            const c = e.ownerDocument.defaultView ?? window
              , f = d => {
                const m = Po(n.current).includes(d.animationName);
                if (d.target === e && m && (l("ANIMATION_END"),
                !s.current)) {
                    const y = e.style.animationFillMode;
                    e.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        e.style.animationFillMode === "forwards" && (e.style.animationFillMode = y)
                    }
                    )
                }
            }
              , h = d => {
                d.target === e && (i.current = Po(n.current))
            }
            ;
            return e.addEventListener("animationstart", h),
            e.addEventListener("animationcancel", f),
            e.addEventListener("animationend", f),
            () => {
                c.clearTimeout(u),
                e.removeEventListener("animationstart", h),
                e.removeEventListener("animationcancel", f),
                e.removeEventListener("animationend", f)
            }
        } else
            l("ANIMATION_END")
    }
    , [e, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: b.useCallback(u => {
            n.current = u ? getComputedStyle(u) : null,
            r(u)
        }
        , [])
    }
}
function Po(t) {
    return (t == null ? void 0 : t.animationName) || "none"
}
function Qb(t) {
    var n, s;
    let e = (n = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : n.get
      , r = e && "isReactWarning"in e && e.isReactWarning;
    return r ? t.ref : (e = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get,
    r = e && "isReactWarning"in e && e.isReactWarning,
    r ? t.props.ref : t.props.ref || t.ref)
}
var Jb = Zp[" useInsertionEffect ".trim().toString()] || Yr;
function Yb({prop: t, defaultProp: e, onChange: r= () => {}
, caller: n}) {
    const [s,i,o] = Xb({
        defaultProp: e,
        onChange: r
    })
      , a = t !== void 0
      , l = a ? t : s;
    {
        const c = b.useRef(t !== void 0);
        b.useEffect( () => {
            const f = c.current;
            f !== a && console.warn(`${n} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, n])
    }
    const u = b.useCallback(c => {
        var f;
        if (a) {
            const h = Zb(c) ? c(t) : c;
            h !== t && ((f = o.current) == null || f.call(o, h))
        } else
            i(c)
    }
    , [a, t, i, o]);
    return [l, u]
}
function Xb({defaultProp: t, onChange: e}) {
    const [r,n] = b.useState(t)
      , s = b.useRef(r)
      , i = b.useRef(e);
    return Jb( () => {
        i.current = e
    }
    , [e]),
    b.useEffect( () => {
        var o;
        s.current !== r && ((o = i.current) == null || o.call(i, r),
        s.current = r)
    }
    , [r, s]),
    [r, n, i]
}
function Zb(t) {
    return typeof t == "function"
}
var e1 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , t1 = "VisuallyHidden"
  , nl = b.forwardRef( (t, e) => x.jsx(He.span, {
    ...t,
    ref: e,
    style: {
        ...e1,
        ...t.style
    }
}));
nl.displayName = t1;
var r1 = nl
  , Td = "ToastProvider"
  , [Pd,n1,s1] = Lb("Toast")
  , [dv,MP] = rl("Toast", [s1])
  , [i1,sl] = dv(Td)
  , fv = t => {
    const {__scopeToast: e, label: r="Notification", duration: n=5e3, swipeDirection: s="right", swipeThreshold: i=50, children: o} = t
      , [a,l] = b.useState(null)
      , [u,c] = b.useState(0)
      , f = b.useRef(!1)
      , h = b.useRef(!1);
    return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${Td}\`. Expected non-empty \`string\`.`),
    x.jsx(Pd.Provider, {
        scope: e,
        children: x.jsx(i1, {
            scope: e,
            label: r,
            duration: n,
            swipeDirection: s,
            swipeThreshold: i,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: b.useCallback( () => c(d => d + 1), []),
            onToastRemove: b.useCallback( () => c(d => d - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: h,
            children: o
        })
    })
}
;
fv.displayName = Td;
var hv = "ToastViewport"
  , o1 = ["F8"]
  , nc = "toast.viewportPause"
  , sc = "toast.viewportResume"
  , pv = b.forwardRef( (t, e) => {
    const {__scopeToast: r, hotkey: n=o1, label: s="Notifications ({hotkey})", ...i} = t
      , o = sl(hv, r)
      , a = n1(r)
      , l = b.useRef(null)
      , u = b.useRef(null)
      , c = b.useRef(null)
      , f = b.useRef(null)
      , h = Dt(e, f, o.onViewportChange)
      , d = n.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , w = o.toastCount > 0;
    b.useEffect( () => {
        const y = g => {
            var v;
            n.length !== 0 && n.every(_ => g[_] || g.code === _) && ((v = f.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", y),
        () => document.removeEventListener("keydown", y)
    }
    , [n]),
    b.useEffect( () => {
        const y = l.current
          , g = f.current;
        if (w && y && g) {
            const p = () => {
                if (!o.isClosePausedRef.current) {
                    const E = new CustomEvent(nc);
                    g.dispatchEvent(E),
                    o.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (o.isClosePausedRef.current) {
                    const E = new CustomEvent(sc);
                    g.dispatchEvent(E),
                    o.isClosePausedRef.current = !1
                }
            }
              , _ = E => {
                !y.contains(E.relatedTarget) && v()
            }
              , S = () => {
                y.contains(document.activeElement) || v()
            }
            ;
            return y.addEventListener("focusin", p),
            y.addEventListener("focusout", _),
            y.addEventListener("pointermove", p),
            y.addEventListener("pointerleave", S),
            window.addEventListener("blur", p),
            window.addEventListener("focus", v),
            () => {
                y.removeEventListener("focusin", p),
                y.removeEventListener("focusout", _),
                y.removeEventListener("pointermove", p),
                y.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [w, o.isClosePausedRef]);
    const m = b.useCallback( ({tabbingDirection: y}) => {
        const p = a().map(v => {
            const _ = v.ref.current
              , S = [_, ...w1(_)];
            return y === "forwards" ? S : S.reverse()
        }
        );
        return (y === "forwards" ? p.reverse() : p).flat()
    }
    , [a]);
    return b.useEffect( () => {
        const y = f.current;
        if (y) {
            const g = p => {
                var S, E, k;
                const v = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !v) {
                    const P = document.activeElement
                      , R = p.shiftKey;
                    if (p.target === y && R) {
                        (S = u.current) == null || S.focus();
                        return
                    }
                    const D = m({
                        tabbingDirection: R ? "backwards" : "forwards"
                    })
                      , Q = D.findIndex(I => I === P);
                    Jl(D.slice(Q + 1)) ? p.preventDefault() : R ? (E = u.current) == null || E.focus() : (k = c.current) == null || k.focus()
                }
            }
            ;
            return y.addEventListener("keydown", g),
            () => y.removeEventListener("keydown", g)
        }
    }
    , [a, m]),
    x.jsxs(Hb, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", d),
        tabIndex: -1,
        style: {
            pointerEvents: w ? void 0 : "none"
        },
        children: [w && x.jsx(ic, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const y = m({
                    tabbingDirection: "forwards"
                });
                Jl(y)
            }
        }), x.jsx(Pd.Slot, {
            scope: r,
            children: x.jsx(He.ol, {
                tabIndex: -1,
                ...i,
                ref: h
            })
        }), w && x.jsx(ic, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const y = m({
                    tabbingDirection: "backwards"
                });
                Jl(y)
            }
        })]
    })
}
);
pv.displayName = hv;
var mv = "ToastFocusProxy"
  , ic = b.forwardRef( (t, e) => {
    const {__scopeToast: r, onFocusFromOutsideViewport: n, ...s} = t
      , i = sl(mv, r);
    return x.jsx(nl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...s,
        ref: e,
        style: {
            position: "fixed"
        },
        onFocus: o => {
            var u;
            const a = o.relatedTarget;
            !((u = i.viewport) != null && u.contains(a)) && n()
        }
    })
}
);
ic.displayName = mv;
var no = "Toast"
  , a1 = "toast.swipeStart"
  , l1 = "toast.swipeMove"
  , u1 = "toast.swipeCancel"
  , c1 = "toast.swipeEnd"
  , gv = b.forwardRef( (t, e) => {
    const {forceMount: r, open: n, defaultOpen: s, onOpenChange: i, ...o} = t
      , [a,l] = Yb({
        prop: n,
        defaultProp: s ?? !0,
        onChange: i,
        caller: no
    });
    return x.jsx(Cd, {
        present: r || a,
        children: x.jsx(h1, {
            open: a,
            ...o,
            ref: e,
            onClose: () => l(!1),
            onPause: Jr(t.onPause),
            onResume: Jr(t.onResume),
            onSwipeStart: Ee(t.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Ee(t.onSwipeMove, u => {
                const {x: c, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: Ee(t.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Ee(t.onSwipeEnd, u => {
                const {x: c, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                l(!1)
            }
            )
        })
    })
}
);
gv.displayName = no;
var [d1,f1] = dv(no, {
    onClose() {}
})
  , h1 = b.forwardRef( (t, e) => {
    const {__scopeToast: r, type: n="foreground", duration: s, open: i, onClose: o, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: f, onSwipeCancel: h, onSwipeEnd: d, ...w} = t
      , m = sl(no, r)
      , [y,g] = b.useState(null)
      , p = Dt(e, I => g(I))
      , v = b.useRef(null)
      , _ = b.useRef(null)
      , S = s || m.duration
      , E = b.useRef(0)
      , k = b.useRef(S)
      , P = b.useRef(0)
      , {onToastAdd: R, onToastRemove: N} = m
      , z = Jr( () => {
        var X;
        (y == null ? void 0 : y.contains(document.activeElement)) && ((X = m.viewport) == null || X.focus()),
        o()
    }
    )
      , D = b.useCallback(I => {
        !I || I === 1 / 0 || (window.clearTimeout(P.current),
        E.current = new Date().getTime(),
        P.current = window.setTimeout(z, I))
    }
    , [z]);
    b.useEffect( () => {
        const I = m.viewport;
        if (I) {
            const X = () => {
                D(k.current),
                u == null || u()
            }
              , B = () => {
                const q = new Date().getTime() - E.current;
                k.current = k.current - q,
                window.clearTimeout(P.current),
                l == null || l()
            }
            ;
            return I.addEventListener(nc, B),
            I.addEventListener(sc, X),
            () => {
                I.removeEventListener(nc, B),
                I.removeEventListener(sc, X)
            }
        }
    }
    , [m.viewport, S, l, u, D]),
    b.useEffect( () => {
        i && !m.isClosePausedRef.current && D(S)
    }
    , [i, S, m.isClosePausedRef, D]),
    b.useEffect( () => (R(),
    () => N()), [R, N]);
    const Q = b.useMemo( () => y ? Sv(y) : null, [y]);
    return m.viewport ? x.jsxs(x.Fragment, {
        children: [Q && x.jsx(p1, {
            __scopeToast: r,
            role: "status",
            "aria-live": n === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Q
        }), x.jsx(d1, {
            scope: r,
            onClose: z,
            children: ro.createPortal(x.jsx(Pd.ItemSlot, {
                scope: r,
                children: x.jsx(Wb, {
                    asChild: !0,
                    onEscapeKeyDown: Ee(a, () => {
                        m.isFocusedToastEscapeKeyDownRef.current || z(),
                        m.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: x.jsx(He.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...w,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...t.style
                        },
                        onKeyDown: Ee(t.onKeyDown, I => {
                            I.key === "Escape" && (a == null || a(I.nativeEvent),
                            I.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: Ee(t.onPointerDown, I => {
                            I.button === 0 && (v.current = {
                                x: I.clientX,
                                y: I.clientY
                            })
                        }
                        ),
                        onPointerMove: Ee(t.onPointerMove, I => {
                            if (!v.current)
                                return;
                            const X = I.clientX - v.current.x
                              , B = I.clientY - v.current.y
                              , q = !!_.current
                              , T = ["left", "right"].includes(m.swipeDirection)
                              , O = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max
                              , L = T ? O(0, X) : 0
                              , K = T ? 0 : O(0, B)
                              , F = I.pointerType === "touch" ? 10 : 2
                              , J = {
                                x: L,
                                y: K
                            }
                              , Z = {
                                originalEvent: I,
                                delta: J
                            };
                            q ? (_.current = J,
                            Oo(l1, f, Z, {
                                discrete: !1
                            })) : kh(J, m.swipeDirection, F) ? (_.current = J,
                            Oo(a1, c, Z, {
                                discrete: !1
                            }),
                            I.target.setPointerCapture(I.pointerId)) : (Math.abs(X) > F || Math.abs(B) > F) && (v.current = null)
                        }
                        ),
                        onPointerUp: Ee(t.onPointerUp, I => {
                            const X = _.current
                              , B = I.target;
                            if (B.hasPointerCapture(I.pointerId) && B.releasePointerCapture(I.pointerId),
                            _.current = null,
                            v.current = null,
                            X) {
                                const q = I.currentTarget
                                  , T = {
                                    originalEvent: I,
                                    delta: X
                                };
                                kh(X, m.swipeDirection, m.swipeThreshold) ? Oo(c1, d, T, {
                                    discrete: !0
                                }) : Oo(u1, h, T, {
                                    discrete: !0
                                }),
                                q.addEventListener("click", O => O.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), m.viewport)
        })]
    }) : null
}
)
  , p1 = t => {
    const {__scopeToast: e, children: r, ...n} = t
      , s = sl(no, e)
      , [i,o] = b.useState(!1)
      , [a,l] = b.useState(!1);
    return v1( () => o(!0)),
    b.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : x.jsx(cv, {
        asChild: !0,
        children: x.jsx(nl, {
            ...n,
            children: i && x.jsxs(x.Fragment, {
                children: [s.label, " ", r]
            })
        })
    })
}
  , m1 = "ToastTitle"
  , vv = b.forwardRef( (t, e) => {
    const {__scopeToast: r, ...n} = t;
    return x.jsx(He.div, {
        ...n,
        ref: e
    })
}
);
vv.displayName = m1;
var g1 = "ToastDescription"
  , yv = b.forwardRef( (t, e) => {
    const {__scopeToast: r, ...n} = t;
    return x.jsx(He.div, {
        ...n,
        ref: e
    })
}
);
yv.displayName = g1;
var wv = "ToastAction"
  , xv = b.forwardRef( (t, e) => {
    const {altText: r, ...n} = t;
    return r.trim() ? x.jsx(_v, {
        altText: r,
        asChild: !0,
        children: x.jsx(Od, {
            ...n,
            ref: e
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${wv}\`. Expected non-empty \`string\`.`),
    null)
}
);
xv.displayName = wv;
var bv = "ToastClose"
  , Od = b.forwardRef( (t, e) => {
    const {__scopeToast: r, ...n} = t
      , s = f1(bv, r);
    return x.jsx(_v, {
        asChild: !0,
        children: x.jsx(He.button, {
            type: "button",
            ...n,
            ref: e,
            onClick: Ee(t.onClick, s.onClose)
        })
    })
}
);
Od.displayName = bv;
var _v = b.forwardRef( (t, e) => {
    const {__scopeToast: r, altText: n, ...s} = t;
    return x.jsx(He.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": n || void 0,
        ...s,
        ref: e
    })
}
);
function Sv(t) {
    const e = [];
    return Array.from(t.childNodes).forEach(n => {
        if (n.nodeType === n.TEXT_NODE && n.textContent && e.push(n.textContent),
        y1(n)) {
            const s = n.ariaHidden || n.hidden || n.style.display === "none"
              , i = n.dataset.radixToastAnnounceExclude === "";
            if (!s)
                if (i) {
                    const o = n.dataset.radixToastAnnounceAlt;
                    o && e.push(o)
                } else
                    e.push(...Sv(n))
        }
    }
    ),
    e
}
function Oo(t, e, r, {discrete: n}) {
    const s = r.originalEvent.currentTarget
      , i = new CustomEvent(t,{
        bubbles: !0,
        cancelable: !0,
        detail: r
    });
    e && s.addEventListener(t, e, {
        once: !0
    }),
    n ? ov(s, i) : s.dispatchEvent(i)
}
var kh = (t, e, r=0) => {
    const n = Math.abs(t.x)
      , s = Math.abs(t.y)
      , i = n > s;
    return e === "left" || e === "right" ? i && n > r : !i && s > r
}
;
function v1(t= () => {}
) {
    const e = Jr(t);
    Yr( () => {
        let r = 0
          , n = 0;
        return r = window.requestAnimationFrame( () => n = window.requestAnimationFrame(e)),
        () => {
            window.cancelAnimationFrame(r),
            window.cancelAnimationFrame(n)
        }
    }
    , [e])
}
function y1(t) {
    return t.nodeType === t.ELEMENT_NODE
}
function w1(t) {
    const e = []
      , r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
        acceptNode: n => {
            const s = n.tagName === "INPUT" && n.type === "hidden";
            return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; r.nextNode(); )
        e.push(r.currentNode);
    return e
}
function Jl(t) {
    const e = document.activeElement;
    return t.some(r => r === e ? !0 : (r.focus(),
    document.activeElement !== e))
}
var x1 = fv
  , Ev = pv
  , kv = gv
  , Cv = vv
  , Tv = yv
  , Pv = xv
  , Ov = Od;
function jv(t) {
    var e, r, n = "";
    if (typeof t == "string" || typeof t == "number")
        n += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var s = t.length;
            for (e = 0; e < s; e++)
                t[e] && (r = jv(t[e])) && (n && (n += " "),
                n += r)
        } else
            for (r in t)
                t[r] && (n && (n += " "),
                n += r);
    return n
}
function Rv() {
    for (var t, e, r = 0, n = "", s = arguments.length; r < s; r++)
        (t = arguments[r]) && (e = jv(t)) && (n && (n += " "),
        n += e);
    return n
}
const Ch = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , Th = Rv
  , jd = (t, e) => r => {
    var n;
    if ((e == null ? void 0 : e.variants) == null)
        return Th(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: s, defaultVariants: i} = e
      , o = Object.keys(s).map(u => {
        const c = r == null ? void 0 : r[u]
          , f = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const h = Ch(c) || Ch(f);
        return s[u][h]
    }
    )
      , a = r && Object.entries(r).reduce( (u, c) => {
        let[f,h] = c;
        return h === void 0 || (u[f] = h),
        u
    }
    , {})
      , l = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce( (u, c) => {
        let {class: f, className: h, ...d} = c;
        return Object.entries(d).every(w => {
            let[m,y] = w;
            return Array.isArray(y) ? y.includes({
                ...i,
                ...a
            }[m]) : {
                ...i,
                ...a
            }[m] === y
        }
        ) ? [...u, f, h] : u
    }
    , []);
    return Th(t, o, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Av = (...t) => t.filter( (e, r, n) => !!e && e.trim() !== "" && n.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = b.forwardRef( ({color: t="currentColor", size: e=24, strokeWidth: r=2, absoluteStrokeWidth: n, className: s="", children: i, iconNode: o, ...a}, l) => b.createElement("svg", {
    ref: l,
    ..._1,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: n ? Number(r) * 24 / Number(e) : r,
    className: Av("lucide", s),
    ...a
}, [...o.map( ([u,c]) => b.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = (t, e) => {
    const r = b.forwardRef( ({className: n, ...s}, i) => b.createElement(S1, {
        ref: i,
        iconNode: e,
        className: Av(`lucide-${b1(t)}`, n),
        ...s
    }));
    return r.displayName = `${t}`,
    r
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = qe("Award", [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = qe("Building2", [["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
}], ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
}], ["path", {
    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
    key: "10jefs"
}], ["path", {
    d: "M10 6h4",
    key: "1itunk"
}], ["path", {
    d: "M10 10h4",
    key: "tcdvrf"
}], ["path", {
    d: "M10 14h4",
    key: "kelpxr"
}], ["path", {
    d: "M10 18h4",
    key: "1ulq68"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = qe("CircleCheck", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nv = qe("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = qe("Euro", [["path", {
    d: "M4 10h12",
    key: "1y6xl8"
}], ["path", {
    d: "M4 14h9",
    key: "1loblj"
}], ["path", {
    d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
    key: "1j6lzo"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P1 = qe("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O1 = qe("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = qe("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iv = qe("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R1 = qe("Package", [["path", {
    d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    key: "1a0edw"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}], ["path", {
    d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
    key: "yx3hmr"
}], ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rd = qe("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lv = qe("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = qe("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = qe("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I1 = qe("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Ad = "-"
  , L1 = t => {
    const e = D1(t)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = t;
    return {
        getClassGroupId: o => {
            const a = o.split(Ad);
            return a[0] === "" && a.length !== 1 && a.shift(),
            $v(a, e) || $1(o)
        }
        ,
        getConflictingClassGroupIds: (o, a) => {
            const l = r[o] || [];
            return a && n[o] ? [...l, ...n[o]] : l
        }
    }
}
  , $v = (t, e) => {
    var o;
    if (t.length === 0)
        return e.classGroupId;
    const r = t[0]
      , n = e.nextPart.get(r)
      , s = n ? $v(t.slice(1), n) : void 0;
    if (s)
        return s;
    if (e.validators.length === 0)
        return;
    const i = t.join(Ad);
    return (o = e.validators.find( ({validator: a}) => a(i))) == null ? void 0 : o.classGroupId
}
  , Ph = /^\[(.+)\]$/
  , $1 = t => {
    if (Ph.test(t)) {
        const e = Ph.exec(t)[1]
          , r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
        if (r)
            return "arbitrary.." + r
    }
}
  , D1 = t => {
    const {theme: e, prefix: r} = t
      , n = {
        nextPart: new Map,
        validators: []
    };
    return F1(Object.entries(t.classGroups), r).forEach( ([i,o]) => {
        oc(o, n, i, e)
    }
    ),
    n
}
  , oc = (t, e, r, n) => {
    t.forEach(s => {
        if (typeof s == "string") {
            const i = s === "" ? e : Oh(e, s);
            i.classGroupId = r;
            return
        }
        if (typeof s == "function") {
            if (M1(s)) {
                oc(s(n), e, r, n);
                return
            }
            e.validators.push({
                validator: s,
                classGroupId: r
            });
            return
        }
        Object.entries(s).forEach( ([i,o]) => {
            oc(o, Oh(e, i), r, n)
        }
        )
    }
    )
}
  , Oh = (t, e) => {
    let r = t;
    return e.split(Ad).forEach(n => {
        r.nextPart.has(n) || r.nextPart.set(n, {
            nextPart: new Map,
            validators: []
        }),
        r = r.nextPart.get(n)
    }
    ),
    r
}
  , M1 = t => t.isThemeGetter
  , F1 = (t, e) => e ? t.map( ([r,n]) => {
    const s = n.map(i => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([o,a]) => [e + o, a])) : i);
    return [r, s]
}
) : t
  , U1 = t => {
    if (t < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , r = new Map
      , n = new Map;
    const s = (i, o) => {
        r.set(i, o),
        e++,
        e > t && (e = 0,
        n = r,
        r = new Map)
    }
    ;
    return {
        get(i) {
            let o = r.get(i);
            if (o !== void 0)
                return o;
            if ((o = n.get(i)) !== void 0)
                return s(i, o),
                o
        },
        set(i, o) {
            r.has(i) ? r.set(i, o) : s(i, o)
        }
    }
}
  , Dv = "!"
  , z1 = t => {
    const {separator: e, experimentalParseClassName: r} = t
      , n = e.length === 1
      , s = e[0]
      , i = e.length
      , o = a => {
        const l = [];
        let u = 0, c = 0, f;
        for (let y = 0; y < a.length; y++) {
            let g = a[y];
            if (u === 0) {
                if (g === s && (n || a.slice(y, y + i) === e)) {
                    l.push(a.slice(c, y)),
                    c = y + i;
                    continue
                }
                if (g === "/") {
                    f = y;
                    continue
                }
            }
            g === "[" ? u++ : g === "]" && u--
        }
        const h = l.length === 0 ? a : a.substring(c)
          , d = h.startsWith(Dv)
          , w = d ? h.substring(1) : h
          , m = f && f > c ? f - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: d,
            baseClassName: w,
            maybePostfixModifierPosition: m
        }
    }
    ;
    return r ? a => r({
        className: a,
        parseClassName: o
    }) : o
}
  , B1 = t => {
    if (t.length <= 1)
        return t;
    const e = [];
    let r = [];
    return t.forEach(n => {
        n[0] === "[" ? (e.push(...r.sort(), n),
        r = []) : r.push(n)
    }
    ),
    e.push(...r.sort()),
    e
}
  , V1 = t => ({
    cache: U1(t.cacheSize),
    parseClassName: z1(t),
    ...L1(t)
})
  , W1 = /\s+/
  , H1 = (t, e) => {
    const {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: s} = e
      , i = []
      , o = t.trim().split(W1);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
        const u = o[l]
          , {modifiers: c, hasImportantModifier: f, baseClassName: h, maybePostfixModifierPosition: d} = r(u);
        let w = !!d
          , m = n(w ? h.substring(0, d) : h);
        if (!m) {
            if (!w) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (m = n(h),
            !m) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            w = !1
        }
        const y = B1(c).join(":")
          , g = f ? y + Dv : y
          , p = g + m;
        if (i.includes(p))
            continue;
        i.push(p);
        const v = s(m, w);
        for (let _ = 0; _ < v.length; ++_) {
            const S = v[_];
            i.push(g + S)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function q1() {
    let t = 0, e, r, n = "";
    for (; t < arguments.length; )
        (e = arguments[t++]) && (r = Mv(e)) && (n && (n += " "),
        n += r);
    return n
}
const Mv = t => {
    if (typeof t == "string")
        return t;
    let e, r = "";
    for (let n = 0; n < t.length; n++)
        t[n] && (e = Mv(t[n])) && (r && (r += " "),
        r += e);
    return r
}
;
function K1(t, ...e) {
    let r, n, s, i = o;
    function o(l) {
        const u = e.reduce( (c, f) => f(c), t());
        return r = V1(u),
        n = r.cache.get,
        s = r.cache.set,
        i = a,
        a(l)
    }
    function a(l) {
        const u = n(l);
        if (u)
            return u;
        const c = H1(l, r);
        return s(l, c),
        c
    }
    return function() {
        return i(q1.apply(null, arguments))
    }
}
const ae = t => {
    const e = r => r[t] || [];
    return e.isThemeGetter = !0,
    e
}
  , Fv = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , G1 = /^\d+\/\d+$/
  , Q1 = new Set(["px", "full", "screen"])
  , J1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Y1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , X1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Z1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , e_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Xt = t => ms(t) || Q1.has(t) || G1.test(t)
  , br = t => Bs(t, "length", l_)
  , ms = t => !!t && !Number.isNaN(Number(t))
  , Yl = t => Bs(t, "number", ms)
  , ii = t => !!t && Number.isInteger(Number(t))
  , t_ = t => t.endsWith("%") && ms(t.slice(0, -1))
  , G = t => Fv.test(t)
  , _r = t => J1.test(t)
  , r_ = new Set(["length", "size", "percentage"])
  , n_ = t => Bs(t, r_, Uv)
  , s_ = t => Bs(t, "position", Uv)
  , i_ = new Set(["image", "url"])
  , o_ = t => Bs(t, i_, c_)
  , a_ = t => Bs(t, "", u_)
  , oi = () => !0
  , Bs = (t, e, r) => {
    const n = Fv.exec(t);
    return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1
}
  , l_ = t => Y1.test(t) && !X1.test(t)
  , Uv = () => !1
  , u_ = t => Z1.test(t)
  , c_ = t => e_.test(t)
  , d_ = () => {
    const t = ae("colors")
      , e = ae("spacing")
      , r = ae("blur")
      , n = ae("brightness")
      , s = ae("borderColor")
      , i = ae("borderRadius")
      , o = ae("borderSpacing")
      , a = ae("borderWidth")
      , l = ae("contrast")
      , u = ae("grayscale")
      , c = ae("hueRotate")
      , f = ae("invert")
      , h = ae("gap")
      , d = ae("gradientColorStops")
      , w = ae("gradientColorStopPositions")
      , m = ae("inset")
      , y = ae("margin")
      , g = ae("opacity")
      , p = ae("padding")
      , v = ae("saturate")
      , _ = ae("scale")
      , S = ae("sepia")
      , E = ae("skew")
      , k = ae("space")
      , P = ae("translate")
      , R = () => ["auto", "contain", "none"]
      , N = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", G, e]
      , D = () => [G, e]
      , Q = () => ["", Xt, br]
      , I = () => ["auto", ms, G]
      , X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , B = () => ["solid", "dashed", "dotted", "double", "none"]
      , q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , O = () => ["", "0", G]
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , K = () => [ms, G];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [oi],
            spacing: [Xt, br],
            blur: ["none", "", _r, G],
            brightness: K(),
            borderColor: [t],
            borderRadius: ["none", "", "full", _r, G],
            borderSpacing: D(),
            borderWidth: Q(),
            contrast: K(),
            grayscale: O(),
            hueRotate: K(),
            invert: O(),
            gap: D(),
            gradientColorStops: [t],
            gradientColorStopPositions: [t_, br],
            inset: z(),
            margin: z(),
            opacity: K(),
            padding: D(),
            saturate: K(),
            scale: K(),
            sepia: O(),
            skew: K(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", G]
            }],
            container: ["container"],
            columns: [{
                columns: [_r]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...X(), G]
            }],
            overflow: [{
                overflow: N()
            }],
            "overflow-x": [{
                "overflow-x": N()
            }],
            "overflow-y": [{
                "overflow-y": N()
            }],
            overscroll: [{
                overscroll: R()
            }],
            "overscroll-x": [{
                "overscroll-x": R()
            }],
            "overscroll-y": [{
                "overscroll-y": R()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [m]
            }],
            "inset-x": [{
                "inset-x": [m]
            }],
            "inset-y": [{
                "inset-y": [m]
            }],
            start: [{
                start: [m]
            }],
            end: [{
                end: [m]
            }],
            top: [{
                top: [m]
            }],
            right: [{
                right: [m]
            }],
            bottom: [{
                bottom: [m]
            }],
            left: [{
                left: [m]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ii, G]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", G]
            }],
            grow: [{
                grow: O()
            }],
            shrink: [{
                shrink: O()
            }],
            order: [{
                order: ["first", "last", "none", ii, G]
            }],
            "grid-cols": [{
                "grid-cols": [oi]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ii, G]
                }, G]
            }],
            "col-start": [{
                "col-start": I()
            }],
            "col-end": [{
                "col-end": I()
            }],
            "grid-rows": [{
                "grid-rows": [oi]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ii, G]
                }, G]
            }],
            "row-start": [{
                "row-start": I()
            }],
            "row-end": [{
                "row-end": I()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", G]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", G]
            }],
            gap: [{
                gap: [h]
            }],
            "gap-x": [{
                "gap-x": [h]
            }],
            "gap-y": [{
                "gap-y": [h]
            }],
            "justify-content": [{
                justify: ["normal", ...T()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...T(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...T(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [y]
            }],
            mx: [{
                mx: [y]
            }],
            my: [{
                my: [y]
            }],
            ms: [{
                ms: [y]
            }],
            me: [{
                me: [y]
            }],
            mt: [{
                mt: [y]
            }],
            mr: [{
                mr: [y]
            }],
            mb: [{
                mb: [y]
            }],
            ml: [{
                ml: [y]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, e]
            }],
            "min-w": [{
                "min-w": [G, e, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [G, e, "none", "full", "min", "max", "fit", "prose", {
                    screen: [_r]
                }, _r]
            }],
            h: [{
                h: [G, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [G, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [G, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [G, e, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", _r, br]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Yl]
            }],
            "font-family": [{
                font: [oi]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
            }],
            "line-clamp": [{
                "line-clamp": ["none", ms, Yl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Xt, G]
            }],
            "list-image": [{
                "list-image": ["none", G]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", G]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [t]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [t]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...B(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Xt, br]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Xt, G]
            }],
            "text-decoration-color": [{
                decoration: [t]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", G]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...X(), s_]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", n_]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, o_]
            }],
            "bg-color": [{
                bg: [t]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [d]
            }],
            "gradient-via": [{
                via: [d]
            }],
            "gradient-to": [{
                to: [d]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...B(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: B()
            }],
            "border-color": [{
                border: [s]
            }],
            "border-color-x": [{
                "border-x": [s]
            }],
            "border-color-y": [{
                "border-y": [s]
            }],
            "border-color-s": [{
                "border-s": [s]
            }],
            "border-color-e": [{
                "border-e": [s]
            }],
            "border-color-t": [{
                "border-t": [s]
            }],
            "border-color-r": [{
                "border-r": [s]
            }],
            "border-color-b": [{
                "border-b": [s]
            }],
            "border-color-l": [{
                "border-l": [s]
            }],
            "divide-color": [{
                divide: [s]
            }],
            "outline-style": [{
                outline: ["", ...B()]
            }],
            "outline-offset": [{
                "outline-offset": [Xt, G]
            }],
            "outline-w": [{
                outline: [Xt, br]
            }],
            "outline-color": [{
                outline: [t]
            }],
            "ring-w": [{
                ring: Q()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [t]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [Xt, br]
            }],
            "ring-offset-color": [{
                "ring-offset": [t]
            }],
            shadow: [{
                shadow: ["", "inner", "none", _r, a_]
            }],
            "shadow-color": [{
                shadow: [oi]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...q(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": q()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [r]
            }],
            brightness: [{
                brightness: [n]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", _r, G]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [S]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [r]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [n]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [S]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
            }],
            duration: [{
                duration: K()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", G]
            }],
            delay: [{
                delay: K()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", G]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [_]
            }],
            "scale-x": [{
                "scale-x": [_]
            }],
            "scale-y": [{
                "scale-y": [_]
            }],
            rotate: [{
                rotate: [ii, G]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
            }],
            accent: [{
                accent: ["auto", t]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
            }],
            "caret-color": [{
                caret: [t]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", G]
            }],
            fill: [{
                fill: [t, "none"]
            }],
            "stroke-w": [{
                stroke: [Xt, br, Yl]
            }],
            stroke: [{
                stroke: [t, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , f_ = K1(d_);
function Re(...t) {
    return f_(Rv(t))
}
const h_ = x1
  , zv = b.forwardRef( ({className: t, ...e}, r) => x.jsx(Ev, {
    ref: r,
    className: Re("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
    ...e
}));
zv.displayName = Ev.displayName;
const p_ = jd("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Bv = b.forwardRef( ({className: t, variant: e, ...r}, n) => x.jsx(kv, {
    ref: n,
    className: Re(p_({
        variant: e
    }), t),
    ...r
}));
Bv.displayName = kv.displayName;
const m_ = b.forwardRef( ({className: t, ...e}, r) => x.jsx(Pv, {
    ref: r,
    className: Re("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", t),
    ...e
}));
m_.displayName = Pv.displayName;
const Vv = b.forwardRef( ({className: t, ...e}, r) => x.jsx(Ov, {
    ref: r,
    className: Re("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: x.jsx(I1, {
        className: "h-4 w-4"
    })
}));
Vv.displayName = Ov.displayName;
const Wv = b.forwardRef( ({className: t, ...e}, r) => x.jsx(Cv, {
    ref: r,
    className: Re("text-sm font-semibold", t),
    ...e
}));
Wv.displayName = Cv.displayName;
const Hv = b.forwardRef( ({className: t, ...e}, r) => x.jsx(Tv, {
    ref: r,
    className: Re("text-sm opacity-90", t),
    ...e
}));
Hv.displayName = Tv.displayName;
function g_() {
    const {toasts: t} = Tb();
    return x.jsxs(h_, {
        children: [t.map(function({id: e, title: r, description: n, action: s, ...i}) {
            return x.jsxs(Bv, {
                ...i,
                children: [x.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && x.jsx(Wv, {
                        children: r
                    }), n && x.jsx(Hv, {
                        children: n
                    })]
                }), s, x.jsx(Vv, {})]
            }, e)
        }), x.jsx(zv, {})]
    })
}
var jh = ["light", "dark"]
  , v_ = "(prefers-color-scheme: dark)"
  , y_ = b.createContext(void 0)
  , w_ = {
    setTheme: t => {}
    ,
    themes: []
}
  , x_ = () => {
    var t;
    return (t = b.useContext(y_)) != null ? t : w_
}
;
b.memo( ({forcedTheme: t, storageKey: e, attribute: r, enableSystem: n, enableColorScheme: s, defaultTheme: i, value: o, attrs: a, nonce: l}) => {
    let u = i === "system"
      , c = r === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(w => `'${w}'`).join(",")})`};` : `var d=document.documentElement,n='${r}',s='setAttribute';`
      , f = s ? jh.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , h = (w, m=!1, y=!0) => {
        let g = o ? o[w] : w
          , p = m ? w + "|| ''" : `'${g}'`
          , v = "";
        return s && y && !m && jh.includes(w) && (v += `d.style.colorScheme = '${w}';`),
        r === "class" ? m || g ? v += `c.add(${p})` : v += "null" : g && (v += `d[s](n,${p})`),
        v
    }
      , d = t ? `!function(){${c}${h(t)}}()` : n ? `!function(){try{${c}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${u})){var t='${v_}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + h(i, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${e}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", !0)}}else{${h(i, !1, !1)};}${f}}catch(t){}}();`;
    return b.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: d
        }
    })
}
);
var b_ = t => {
    switch (t) {
    case "success":
        return E_;
    case "info":
        return C_;
    case "warning":
        return k_;
    case "error":
        return T_;
    default:
        return null
    }
}
  , __ = Array(12).fill(0)
  , S_ = ({visible: t, className: e}) => A.createElement("div", {
    className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
    "data-visible": t
}, A.createElement("div", {
    className: "sonner-spinner"
}, __.map( (r, n) => A.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , E_ = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , k_ = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , C_ = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , T_ = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , P_ = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, A.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), A.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , O_ = () => {
    let[t,e] = A.useState(document.hidden);
    return A.useEffect( () => {
        let r = () => {
            e(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", r),
        () => window.removeEventListener("visibilitychange", r)
    }
    , []),
    t
}
  , ac = 1
  , j_ = class {
    constructor() {
        this.subscribe = t => (this.subscribers.push(t),
        () => {
            let e = this.subscribers.indexOf(t);
            this.subscribers.splice(e, 1)
        }
        ),
        this.publish = t => {
            this.subscribers.forEach(e => e(t))
        }
        ,
        this.addToast = t => {
            this.publish(t),
            this.toasts = [...this.toasts, t]
        }
        ,
        this.create = t => {
            var e;
            let {message: r, ...n} = t
              , s = typeof (t == null ? void 0 : t.id) == "number" || ((e = t.id) == null ? void 0 : e.length) > 0 ? t.id : ac++
              , i = this.toasts.find(a => a.id === s)
              , o = t.dismissible === void 0 ? !0 : t.dismissible;
            return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i ? this.toasts = this.toasts.map(a => a.id === s ? (this.publish({
                ...a,
                ...t,
                id: s,
                title: r
            }),
            {
                ...a,
                ...t,
                id: s,
                dismissible: o,
                title: r
            }) : a) : this.addToast({
                title: r,
                ...n,
                dismissible: o,
                id: s
            }),
            s
        }
        ,
        this.dismiss = t => (this.dismissedToasts.add(t),
        t || this.toasts.forEach(e => {
            this.subscribers.forEach(r => r({
                id: e.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(e => e({
            id: t,
            dismiss: !0
        })),
        t),
        this.message = (t, e) => this.create({
            ...e,
            message: t
        }),
        this.error = (t, e) => this.create({
            ...e,
            message: t,
            type: "error"
        }),
        this.success = (t, e) => this.create({
            ...e,
            type: "success",
            message: t
        }),
        this.info = (t, e) => this.create({
            ...e,
            type: "info",
            message: t
        }),
        this.warning = (t, e) => this.create({
            ...e,
            type: "warning",
            message: t
        }),
        this.loading = (t, e) => this.create({
            ...e,
            type: "loading",
            message: t
        }),
        this.promise = (t, e) => {
            if (!e)
                return;
            let r;
            e.loading !== void 0 && (r = this.create({
                ...e,
                promise: t,
                type: "loading",
                message: e.loading,
                description: typeof e.description != "function" ? e.description : void 0
            }));
            let n = t instanceof Promise ? t : t(), s = r !== void 0, i, o = n.then(async l => {
                if (i = ["resolve", l],
                A.isValidElement(l))
                    s = !1,
                    this.create({
                        id: r,
                        type: "default",
                        message: l
                    });
                else if (A_(l) && !l.ok) {
                    s = !1;
                    let u = typeof e.error == "function" ? await e.error(`HTTP error! status: ${l.status}`) : e.error
                      , c = typeof e.description == "function" ? await e.description(`HTTP error! status: ${l.status}`) : e.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (e.success !== void 0) {
                    s = !1;
                    let u = typeof e.success == "function" ? await e.success(l) : e.success
                      , c = typeof e.description == "function" ? await e.description(l) : e.description;
                    this.create({
                        id: r,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (i = ["reject", l],
                e.error !== void 0) {
                    s = !1;
                    let u = typeof e.error == "function" ? await e.error(l) : e.error
                      , c = typeof e.description == "function" ? await e.description(l) : e.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                s && (this.dismiss(r),
                r = void 0),
                (l = e.finally) == null || l.call(e)
            }
            ), a = () => new Promise( (l, u) => o.then( () => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
            return typeof r != "string" && typeof r != "number" ? {
                unwrap: a
            } : Object.assign(r, {
                unwrap: a
            })
        }
        ,
        this.custom = (t, e) => {
            let r = (e == null ? void 0 : e.id) || ac++;
            return this.create({
                jsx: t(r),
                id: r,
                ...e
            }),
            r
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(t => !this.dismissedToasts.has(t.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Ke = new j_
  , R_ = (t, e) => {
    let r = (e == null ? void 0 : e.id) || ac++;
    return Ke.addToast({
        title: t,
        ...e,
        id: r
    }),
    r
}
  , A_ = t => t && typeof t == "object" && "ok"in t && typeof t.ok == "boolean" && "status"in t && typeof t.status == "number"
  , N_ = R_
  , I_ = () => Ke.toasts
  , L_ = () => Ke.getActiveToasts()
  , Rh = Object.assign(N_, {
    success: Ke.success,
    info: Ke.info,
    warning: Ke.warning,
    error: Ke.error,
    custom: Ke.custom,
    message: Ke.message,
    promise: Ke.promise,
    dismiss: Ke.dismiss,
    loading: Ke.loading
}, {
    getHistory: I_,
    getToasts: L_
});
function $_(t, {insertAt: e}={}) {
    if (typeof document > "u")
        return;
    let r = document.head || document.getElementsByTagName("head")[0]
      , n = document.createElement("style");
    n.type = "text/css",
    e === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n),
    n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t))
}
$_(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function jo(t) {
    return t.label !== void 0
}
var D_ = 3
  , M_ = "32px"
  , F_ = "16px"
  , Ah = 4e3
  , U_ = 356
  , z_ = 14
  , B_ = 20
  , V_ = 200;
function Et(...t) {
    return t.filter(Boolean).join(" ")
}
function W_(t) {
    let[e,r] = t.split("-")
      , n = [];
    return e && n.push(e),
    r && n.push(r),
    n
}
var H_ = t => {
    var e, r, n, s, i, o, a, l, u, c, f;
    let {invert: h, toast: d, unstyled: w, interacting: m, setHeights: y, visibleToasts: g, heights: p, index: v, toasts: _, expanded: S, removeToast: E, defaultRichColors: k, closeButton: P, style: R, cancelButtonStyle: N, actionButtonStyle: z, className: D="", descriptionClassName: Q="", duration: I, position: X, gap: B, loadingIcon: q, expandByDefault: T, classNames: O, icons: L, closeButtonAriaLabel: K="Close toast", pauseWhenPageIsHidden: F} = t
      , [J,Z] = A.useState(null)
      , [we,Ae] = A.useState(null)
      , [re,Dn] = A.useState(!1)
      , [pr,sn] = A.useState(!1)
      , [mr,Mn] = A.useState(!1)
      , [gr,oo] = A.useState(!1)
      , [vl,ao] = A.useState(!1)
      , [yl,Qs] = A.useState(0)
      , [Fn,sf] = A.useState(0)
      , Js = A.useRef(d.duration || I || Ah)
      , of = A.useRef(null)
      , on = A.useRef(null)
      , z0 = v === 0
      , B0 = v + 1 <= g
      , ft = d.type
      , Un = d.dismissible !== !1
      , V0 = d.className || ""
      , W0 = d.descriptionClassName || ""
      , lo = A.useMemo( () => p.findIndex(W => W.toastId === d.id) || 0, [p, d.id])
      , H0 = A.useMemo( () => {
        var W;
        return (W = d.closeButton) != null ? W : P
    }
    , [d.closeButton, P])
      , af = A.useMemo( () => d.duration || I || Ah, [d.duration, I])
      , wl = A.useRef(0)
      , zn = A.useRef(0)
      , lf = A.useRef(0)
      , Bn = A.useRef(null)
      , [q0,K0] = X.split("-")
      , uf = A.useMemo( () => p.reduce( (W, se, ce) => ce >= lo ? W : W + se.height, 0), [p, lo])
      , cf = O_()
      , G0 = d.invert || h
      , xl = ft === "loading";
    zn.current = A.useMemo( () => lo * B + uf, [lo, uf]),
    A.useEffect( () => {
        Js.current = af
    }
    , [af]),
    A.useEffect( () => {
        Dn(!0)
    }
    , []),
    A.useEffect( () => {
        let W = on.current;
        if (W) {
            let se = W.getBoundingClientRect().height;
            return sf(se),
            y(ce => [{
                toastId: d.id,
                height: se,
                position: d.position
            }, ...ce]),
            () => y(ce => ce.filter(xt => xt.toastId !== d.id))
        }
    }
    , [y, d.id]),
    A.useLayoutEffect( () => {
        if (!re)
            return;
        let W = on.current
          , se = W.style.height;
        W.style.height = "auto";
        let ce = W.getBoundingClientRect().height;
        W.style.height = se,
        sf(ce),
        y(xt => xt.find(bt => bt.toastId === d.id) ? xt.map(bt => bt.toastId === d.id ? {
            ...bt,
            height: ce
        } : bt) : [{
            toastId: d.id,
            height: ce,
            position: d.position
        }, ...xt])
    }
    , [re, d.title, d.description, y, d.id]);
    let vr = A.useCallback( () => {
        sn(!0),
        Qs(zn.current),
        y(W => W.filter(se => se.toastId !== d.id)),
        setTimeout( () => {
            E(d)
        }
        , V_)
    }
    , [d, E, y, zn]);
    A.useEffect( () => {
        if (d.promise && ft === "loading" || d.duration === 1 / 0 || d.type === "loading")
            return;
        let W;
        return S || m || F && cf ? ( () => {
            if (lf.current < wl.current) {
                let se = new Date().getTime() - wl.current;
                Js.current = Js.current - se
            }
            lf.current = new Date().getTime()
        }
        )() : Js.current !== 1 / 0 && (wl.current = new Date().getTime(),
        W = setTimeout( () => {
            var se;
            (se = d.onAutoClose) == null || se.call(d, d),
            vr()
        }
        , Js.current)),
        () => clearTimeout(W)
    }
    , [S, m, d, ft, F, cf, vr]),
    A.useEffect( () => {
        d.delete && vr()
    }
    , [vr, d.delete]);
    function Q0() {
        var W, se, ce;
        return L != null && L.loading ? A.createElement("div", {
            className: Et(O == null ? void 0 : O.loader, (W = d == null ? void 0 : d.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": ft === "loading"
        }, L.loading) : q ? A.createElement("div", {
            className: Et(O == null ? void 0 : O.loader, (se = d == null ? void 0 : d.classNames) == null ? void 0 : se.loader, "sonner-loader"),
            "data-visible": ft === "loading"
        }, q) : A.createElement(S_, {
            className: Et(O == null ? void 0 : O.loader, (ce = d == null ? void 0 : d.classNames) == null ? void 0 : ce.loader),
            visible: ft === "loading"
        })
    }
    return A.createElement("li", {
        tabIndex: 0,
        ref: on,
        className: Et(D, V0, O == null ? void 0 : O.toast, (e = d == null ? void 0 : d.classNames) == null ? void 0 : e.toast, O == null ? void 0 : O.default, O == null ? void 0 : O[ft], (r = d == null ? void 0 : d.classNames) == null ? void 0 : r[ft]),
        "data-sonner-toast": "",
        "data-rich-colors": (n = d.richColors) != null ? n : k,
        "data-styled": !(d.jsx || d.unstyled || w),
        "data-mounted": re,
        "data-promise": !!d.promise,
        "data-swiped": vl,
        "data-removed": pr,
        "data-visible": B0,
        "data-y-position": q0,
        "data-x-position": K0,
        "data-index": v,
        "data-front": z0,
        "data-swiping": mr,
        "data-dismissible": Un,
        "data-type": ft,
        "data-invert": G0,
        "data-swipe-out": gr,
        "data-swipe-direction": we,
        "data-expanded": !!(S || T && re),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": _.length - v,
            "--offset": `${pr ? yl : zn.current}px`,
            "--initial-height": T ? "auto" : `${Fn}px`,
            ...R,
            ...d.style
        },
        onDragEnd: () => {
            Mn(!1),
            Z(null),
            Bn.current = null
        }
        ,
        onPointerDown: W => {
            xl || !Un || (of.current = new Date,
            Qs(zn.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && (Mn(!0),
            Bn.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var W, se, ce, xt;
            if (gr || !Un)
                return;
            Bn.current = null;
            let bt = Number(((W = on.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , yr = Number(((se = on.current) == null ? void 0 : se.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , an = new Date().getTime() - ((ce = of.current) == null ? void 0 : ce.getTime())
              , _t = J === "x" ? bt : yr
              , wr = Math.abs(_t) / an;
            if (Math.abs(_t) >= B_ || wr > .11) {
                Qs(zn.current),
                (xt = d.onDismiss) == null || xt.call(d, d),
                Ae(J === "x" ? bt > 0 ? "right" : "left" : yr > 0 ? "down" : "up"),
                vr(),
                oo(!0),
                ao(!1);
                return
            }
            Mn(!1),
            Z(null)
        }
        ,
        onPointerMove: W => {
            var se, ce, xt, bt;
            if (!Bn.current || !Un || ((se = window.getSelection()) == null ? void 0 : se.toString().length) > 0)
                return;
            let yr = W.clientY - Bn.current.y
              , an = W.clientX - Bn.current.x
              , _t = (ce = t.swipeDirections) != null ? ce : W_(X);
            !J && (Math.abs(an) > 1 || Math.abs(yr) > 1) && Z(Math.abs(an) > Math.abs(yr) ? "x" : "y");
            let wr = {
                x: 0,
                y: 0
            };
            J === "y" ? (_t.includes("top") || _t.includes("bottom")) && (_t.includes("top") && yr < 0 || _t.includes("bottom") && yr > 0) && (wr.y = yr) : J === "x" && (_t.includes("left") || _t.includes("right")) && (_t.includes("left") && an < 0 || _t.includes("right") && an > 0) && (wr.x = an),
            (Math.abs(wr.x) > 0 || Math.abs(wr.y) > 0) && ao(!0),
            (xt = on.current) == null || xt.style.setProperty("--swipe-amount-x", `${wr.x}px`),
            (bt = on.current) == null || bt.style.setProperty("--swipe-amount-y", `${wr.y}px`)
        }
    }, H0 && !d.jsx ? A.createElement("button", {
        "aria-label": K,
        "data-disabled": xl,
        "data-close-button": !0,
        onClick: xl || !Un ? () => {}
        : () => {
            var W;
            vr(),
            (W = d.onDismiss) == null || W.call(d, d)
        }
        ,
        className: Et(O == null ? void 0 : O.closeButton, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.closeButton)
    }, (i = L == null ? void 0 : L.close) != null ? i : P_) : null, d.jsx || b.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : A.createElement(A.Fragment, null, ft || d.icon || d.promise ? A.createElement("div", {
        "data-icon": "",
        className: Et(O == null ? void 0 : O.icon, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Q0() : null, d.type !== "loading" ? d.icon || (L == null ? void 0 : L[ft]) || b_(ft) : null) : null, A.createElement("div", {
        "data-content": "",
        className: Et(O == null ? void 0 : O.content, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.content)
    }, A.createElement("div", {
        "data-title": "",
        className: Et(O == null ? void 0 : O.title, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? A.createElement("div", {
        "data-description": "",
        className: Et(Q, W0, O == null ? void 0 : O.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), b.isValidElement(d.cancel) ? d.cancel : d.cancel && jo(d.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || N,
        onClick: W => {
            var se, ce;
            jo(d.cancel) && Un && ((ce = (se = d.cancel).onClick) == null || ce.call(se, W),
            vr())
        }
        ,
        className: Et(O == null ? void 0 : O.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, b.isValidElement(d.action) ? d.action : d.action && jo(d.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || z,
        onClick: W => {
            var se, ce;
            jo(d.action) && ((ce = (se = d.action).onClick) == null || ce.call(se, W),
            !W.defaultPrevented && vr())
        }
        ,
        className: Et(O == null ? void 0 : O.actionButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.actionButton)
    }, d.action.label) : null))
}
;
function Nh() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t
}
function q_(t, e) {
    let r = {};
    return [t, e].forEach( (n, s) => {
        let i = s === 1
          , o = i ? "--mobile-offset" : "--offset"
          , a = i ? F_ : M_;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                r[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof n == "number" || typeof n == "string" ? l(n) : typeof n == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            n[u] === void 0 ? r[`${o}-${u}`] = a : r[`${o}-${u}`] = typeof n[u] == "number" ? `${n[u]}px` : n[u]
        }
        ) : l(a)
    }
    ),
    r
}
var K_ = b.forwardRef(function(t, e) {
    let {invert: r, position: n="bottom-right", hotkey: s=["altKey", "KeyT"], expand: i, closeButton: o, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: f, duration: h, style: d, visibleToasts: w=D_, toastOptions: m, dir: y=Nh(), gap: g=z_, loadingIcon: p, icons: v, containerAriaLabel: _="Notifications", pauseWhenPageIsHidden: S} = t
      , [E,k] = A.useState([])
      , P = A.useMemo( () => Array.from(new Set([n].concat(E.filter(F => F.position).map(F => F.position)))), [E, n])
      , [R,N] = A.useState([])
      , [z,D] = A.useState(!1)
      , [Q,I] = A.useState(!1)
      , [X,B] = A.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , q = A.useRef(null)
      , T = s.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , O = A.useRef(null)
      , L = A.useRef(!1)
      , K = A.useCallback(F => {
        k(J => {
            var Z;
            return (Z = J.find(we => we.id === F.id)) != null && Z.delete || Ke.dismiss(F.id),
            J.filter( ({id: we}) => we !== F.id)
        }
        )
    }
    , []);
    return A.useEffect( () => Ke.subscribe(F => {
        if (F.dismiss) {
            k(J => J.map(Z => Z.id === F.id ? {
                ...Z,
                delete: !0
            } : Z));
            return
        }
        setTimeout( () => {
            rv.flushSync( () => {
                k(J => {
                    let Z = J.findIndex(we => we.id === F.id);
                    return Z !== -1 ? [...J.slice(0, Z), {
                        ...J[Z],
                        ...F
                    }, ...J.slice(Z + 1)] : [F, ...J]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    A.useEffect( () => {
        if (c !== "system") {
            B(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? B("dark") : B("light")),
        typeof window > "u")
            return;
        let F = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            F.addEventListener("change", ({matches: J}) => {
                B(J ? "dark" : "light")
            }
            )
        } catch {
            F.addListener( ({matches: Z}) => {
                try {
                    B(Z ? "dark" : "light")
                } catch (we) {
                    console.error(we)
                }
            }
            )
        }
    }
    , [c]),
    A.useEffect( () => {
        E.length <= 1 && D(!1)
    }
    , [E]),
    A.useEffect( () => {
        let F = J => {
            var Z, we;
            s.every(Ae => J[Ae] || J.code === Ae) && (D(!0),
            (Z = q.current) == null || Z.focus()),
            J.code === "Escape" && (document.activeElement === q.current || (we = q.current) != null && we.contains(document.activeElement)) && D(!1)
        }
        ;
        return document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
    }
    , [s]),
    A.useEffect( () => {
        if (q.current)
            return () => {
                O.current && (O.current.focus({
                    preventScroll: !0
                }),
                O.current = null,
                L.current = !1)
            }
    }
    , [q.current]),
    A.createElement("section", {
        ref: e,
        "aria-label": `${_} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map( (F, J) => {
        var Z;
        let[we,Ae] = F.split("-");
        return E.length ? A.createElement("ol", {
            key: F,
            dir: y === "auto" ? Nh() : y,
            tabIndex: -1,
            ref: q,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": X,
            "data-y-position": we,
            "data-lifted": z && E.length > 1 && !i,
            "data-x-position": Ae,
            style: {
                "--front-toast-height": `${((Z = R[0]) == null ? void 0 : Z.height) || 0}px`,
                "--width": `${U_}px`,
                "--gap": `${g}px`,
                ...d,
                ...q_(l, u)
            },
            onBlur: re => {
                L.current && !re.currentTarget.contains(re.relatedTarget) && (L.current = !1,
                O.current && (O.current.focus({
                    preventScroll: !0
                }),
                O.current = null))
            }
            ,
            onFocus: re => {
                re.target instanceof HTMLElement && re.target.dataset.dismissible === "false" || L.current || (L.current = !0,
                O.current = re.relatedTarget)
            }
            ,
            onMouseEnter: () => D(!0),
            onMouseMove: () => D(!0),
            onMouseLeave: () => {
                Q || D(!1)
            }
            ,
            onDragEnd: () => D(!1),
            onPointerDown: re => {
                re.target instanceof HTMLElement && re.target.dataset.dismissible === "false" || I(!0)
            }
            ,
            onPointerUp: () => I(!1)
        }, E.filter(re => !re.position && J === 0 || re.position === F).map( (re, Dn) => {
            var pr, sn;
            return A.createElement(H_, {
                key: re.id,
                icons: v,
                index: Dn,
                toast: re,
                defaultRichColors: f,
                duration: (pr = m == null ? void 0 : m.duration) != null ? pr : h,
                className: m == null ? void 0 : m.className,
                descriptionClassName: m == null ? void 0 : m.descriptionClassName,
                invert: r,
                visibleToasts: w,
                closeButton: (sn = m == null ? void 0 : m.closeButton) != null ? sn : o,
                interacting: Q,
                position: F,
                style: m == null ? void 0 : m.style,
                unstyled: m == null ? void 0 : m.unstyled,
                classNames: m == null ? void 0 : m.classNames,
                cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                removeToast: K,
                toasts: E.filter(mr => mr.position == re.position),
                heights: R.filter(mr => mr.position == re.position),
                setHeights: N,
                expandByDefault: i,
                gap: g,
                loadingIcon: p,
                expanded: z,
                pauseWhenPageIsHidden: S,
                swipeDirections: t.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const G_ = ({...t}) => {
    const {theme: e="system"} = x_();
    return x.jsx(K_, {
        theme: e,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...t
    })
}
  , Q_ = ["top", "right", "bottom", "left"]
  , Xr = Math.min
  , nt = Math.max
  , Pa = Math.round
  , Ro = Math.floor
  , Qt = t => ({
    x: t,
    y: t
})
  , J_ = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Y_ = {
    start: "end",
    end: "start"
};
function lc(t, e, r) {
    return nt(t, Xr(e, r))
}
function dr(t, e) {
    return typeof t == "function" ? t(e) : t
}
function fr(t) {
    return t.split("-")[0]
}
function Vs(t) {
    return t.split("-")[1]
}
function Nd(t) {
    return t === "x" ? "y" : "x"
}
function Id(t) {
    return t === "y" ? "height" : "width"
}
const X_ = new Set(["top", "bottom"]);
function qt(t) {
    return X_.has(fr(t)) ? "y" : "x"
}
function Ld(t) {
    return Nd(qt(t))
}
function Z_(t, e, r) {
    r === void 0 && (r = !1);
    const n = Vs(t)
      , s = Ld(t)
      , i = Id(s);
    let o = s === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
    return e.reference[i] > e.floating[i] && (o = Oa(o)),
    [o, Oa(o)]
}
function eS(t) {
    const e = Oa(t);
    return [uc(t), e, uc(e)]
}
function uc(t) {
    return t.replace(/start|end/g, e => Y_[e])
}
const Ih = ["left", "right"]
  , Lh = ["right", "left"]
  , tS = ["top", "bottom"]
  , rS = ["bottom", "top"];
function nS(t, e, r) {
    switch (t) {
    case "top":
    case "bottom":
        return r ? e ? Lh : Ih : e ? Ih : Lh;
    case "left":
    case "right":
        return e ? tS : rS;
    default:
        return []
    }
}
function sS(t, e, r, n) {
    const s = Vs(t);
    let i = nS(fr(t), r === "start", n);
    return s && (i = i.map(o => o + "-" + s),
    e && (i = i.concat(i.map(uc)))),
    i
}
function Oa(t) {
    return t.replace(/left|right|bottom|top/g, e => J_[e])
}
function iS(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}
function qv(t) {
    return typeof t != "number" ? iS(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}
function ja(t) {
    const {x: e, y: r, width: n, height: s} = t;
    return {
        width: n,
        height: s,
        top: r,
        left: e,
        right: e + n,
        bottom: r + s,
        x: e,
        y: r
    }
}
function $h(t, e, r) {
    let {reference: n, floating: s} = t;
    const i = qt(e)
      , o = Ld(e)
      , a = Id(o)
      , l = fr(e)
      , u = i === "y"
      , c = n.x + n.width / 2 - s.width / 2
      , f = n.y + n.height / 2 - s.height / 2
      , h = n[a] / 2 - s[a] / 2;
    let d;
    switch (l) {
    case "top":
        d = {
            x: c,
            y: n.y - s.height
        };
        break;
    case "bottom":
        d = {
            x: c,
            y: n.y + n.height
        };
        break;
    case "right":
        d = {
            x: n.x + n.width,
            y: f
        };
        break;
    case "left":
        d = {
            x: n.x - s.width,
            y: f
        };
        break;
    default:
        d = {
            x: n.x,
            y: n.y
        }
    }
    switch (Vs(e)) {
    case "start":
        d[o] -= h * (r && u ? -1 : 1);
        break;
    case "end":
        d[o] += h * (r && u ? -1 : 1);
        break
    }
    return d
}
const oS = async (t, e, r) => {
    const {placement: n="bottom", strategy: s="absolute", middleware: i=[], platform: o} = r
      , a = i.filter(Boolean)
      , l = await (o.isRTL == null ? void 0 : o.isRTL(e));
    let u = await o.getElementRects({
        reference: t,
        floating: e,
        strategy: s
    })
      , {x: c, y: f} = $h(u, n, l)
      , h = n
      , d = {}
      , w = 0;
    for (let m = 0; m < a.length; m++) {
        const {name: y, fn: g} = a[m]
          , {x: p, y: v, data: _, reset: S} = await g({
            x: c,
            y: f,
            initialPlacement: n,
            placement: h,
            strategy: s,
            middlewareData: d,
            rects: u,
            platform: o,
            elements: {
                reference: t,
                floating: e
            }
        });
        c = p ?? c,
        f = v ?? f,
        d = {
            ...d,
            [y]: {
                ...d[y],
                ..._
            }
        },
        S && w <= 50 && (w++,
        typeof S == "object" && (S.placement && (h = S.placement),
        S.rects && (u = S.rects === !0 ? await o.getElementRects({
            reference: t,
            floating: e,
            strategy: s
        }) : S.rects),
        {x: c, y: f} = $h(u, h, l)),
        m = -1)
    }
    return {
        x: c,
        y: f,
        placement: h,
        strategy: s,
        middlewareData: d
    }
}
;
async function Bi(t, e) {
    var r;
    e === void 0 && (e = {});
    const {x: n, y: s, platform: i, rects: o, elements: a, strategy: l} = t
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: f="floating", altBoundary: h=!1, padding: d=0} = dr(e, t)
      , w = qv(d)
      , y = a[h ? f === "floating" ? "reference" : "floating" : f]
      , g = ja(await i.getClippingRect({
        element: (r = await (i.isElement == null ? void 0 : i.isElement(y))) == null || r ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , p = f === "floating" ? {
        x: n,
        y: s,
        width: o.floating.width,
        height: o.floating.height
    } : o.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating))
      , _ = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , S = ja(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: p,
        offsetParent: v,
        strategy: l
    }) : p);
    return {
        top: (g.top - S.top + w.top) / _.y,
        bottom: (S.bottom - g.bottom + w.bottom) / _.y,
        left: (g.left - S.left + w.left) / _.x,
        right: (S.right - g.right + w.right) / _.x
    }
}
const aS = t => ({
    name: "arrow",
    options: t,
    async fn(e) {
        const {x: r, y: n, placement: s, rects: i, platform: o, elements: a, middlewareData: l} = e
          , {element: u, padding: c=0} = dr(t, e) || {};
        if (u == null)
            return {};
        const f = qv(c)
          , h = {
            x: r,
            y: n
        }
          , d = Ld(s)
          , w = Id(d)
          , m = await o.getDimensions(u)
          , y = d === "y"
          , g = y ? "top" : "left"
          , p = y ? "bottom" : "right"
          , v = y ? "clientHeight" : "clientWidth"
          , _ = i.reference[w] + i.reference[d] - h[d] - i.floating[w]
          , S = h[d] - i.reference[d]
          , E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
        let k = E ? E[v] : 0;
        (!k || !await (o.isElement == null ? void 0 : o.isElement(E))) && (k = a.floating[v] || i.floating[w]);
        const P = _ / 2 - S / 2
          , R = k / 2 - m[w] / 2 - 1
          , N = Xr(f[g], R)
          , z = Xr(f[p], R)
          , D = N
          , Q = k - m[w] - z
          , I = k / 2 - m[w] / 2 + P
          , X = lc(D, I, Q)
          , B = !l.arrow && Vs(s) != null && I !== X && i.reference[w] / 2 - (I < D ? N : z) - m[w] / 2 < 0
          , q = B ? I < D ? I - D : I - Q : 0;
        return {
            [d]: h[d] + q,
            data: {
                [d]: X,
                centerOffset: I - X - q,
                ...B && {
                    alignmentOffset: q
                }
            },
            reset: B
        }
    }
})
  , lS = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "flip",
        options: t,
        async fn(e) {
            var r, n;
            const {placement: s, middlewareData: i, rects: o, initialPlacement: a, platform: l, elements: u} = e
              , {mainAxis: c=!0, crossAxis: f=!0, fallbackPlacements: h, fallbackStrategy: d="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: m=!0, ...y} = dr(t, e);
            if ((r = i.arrow) != null && r.alignmentOffset)
                return {};
            const g = fr(s)
              , p = qt(a)
              , v = fr(a) === a
              , _ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , S = h || (v || !m ? [Oa(a)] : eS(a))
              , E = w !== "none";
            !h && E && S.push(...sS(a, m, w, _));
            const k = [a, ...S]
              , P = await Bi(e, y)
              , R = [];
            let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
            if (c && R.push(P[g]),
            f) {
                const I = Z_(s, o, _);
                R.push(P[I[0]], P[I[1]])
            }
            if (N = [...N, {
                placement: s,
                overflows: R
            }],
            !R.every(I => I <= 0)) {
                var z, D;
                const I = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1
                  , X = k[I];
                if (X && (!(f === "alignment" ? p !== qt(X) : !1) || N.every(T => T.overflows[0] > 0 && qt(T.placement) === p)))
                    return {
                        data: {
                            index: I,
                            overflows: N
                        },
                        reset: {
                            placement: X
                        }
                    };
                let B = (D = N.filter(q => q.overflows[0] <= 0).sort( (q, T) => q.overflows[1] - T.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!B)
                    switch (d) {
                    case "bestFit":
                        {
                            var Q;
                            const q = (Q = N.filter(T => {
                                if (E) {
                                    const O = qt(T.placement);
                                    return O === p || O === "y"
                                }
                                return !0
                            }
                            ).map(T => [T.placement, T.overflows.filter(O => O > 0).reduce( (O, L) => O + L, 0)]).sort( (T, O) => T[1] - O[1])[0]) == null ? void 0 : Q[0];
                            q && (B = q);
                            break
                        }
                    case "initialPlacement":
                        B = a;
                        break
                    }
                if (s !== B)
                    return {
                        reset: {
                            placement: B
                        }
                    }
            }
            return {}
        }
    }
};
function Dh(t, e) {
    return {
        top: t.top - e.height,
        right: t.right - e.width,
        bottom: t.bottom - e.height,
        left: t.left - e.width
    }
}
function Mh(t) {
    return Q_.some(e => t[e] >= 0)
}
const uS = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "hide",
        options: t,
        async fn(e) {
            const {rects: r} = e
              , {strategy: n="referenceHidden", ...s} = dr(t, e);
            switch (n) {
            case "referenceHidden":
                {
                    const i = await Bi(e, {
                        ...s,
                        elementContext: "reference"
                    })
                      , o = Dh(i, r.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: o,
                            referenceHidden: Mh(o)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Bi(e, {
                        ...s,
                        altBoundary: !0
                    })
                      , o = Dh(i, r.floating);
                    return {
                        data: {
                            escapedOffsets: o,
                            escaped: Mh(o)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Kv = new Set(["left", "top"]);
async function cS(t, e) {
    const {placement: r, platform: n, elements: s} = t
      , i = await (n.isRTL == null ? void 0 : n.isRTL(s.floating))
      , o = fr(r)
      , a = Vs(r)
      , l = qt(r) === "y"
      , u = Kv.has(o) ? -1 : 1
      , c = i && l ? -1 : 1
      , f = dr(e, t);
    let {mainAxis: h, crossAxis: d, alignmentAxis: w} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return a && typeof w == "number" && (d = a === "end" ? w * -1 : w),
    l ? {
        x: d * c,
        y: h * u
    } : {
        x: h * u,
        y: d * c
    }
}
const dS = function(t) {
    return t === void 0 && (t = 0),
    {
        name: "offset",
        options: t,
        async fn(e) {
            var r, n;
            const {x: s, y: i, placement: o, middlewareData: a} = e
              , l = await cS(e, t);
            return o === ((r = a.offset) == null ? void 0 : r.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
                x: s + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: o
                }
            }
        }
    }
}
  , fS = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "shift",
        options: t,
        async fn(e) {
            const {x: r, y: n, placement: s} = e
              , {mainAxis: i=!0, crossAxis: o=!1, limiter: a={
                fn: y => {
                    let {x: g, y: p} = y;
                    return {
                        x: g,
                        y: p
                    }
                }
            }, ...l} = dr(t, e)
              , u = {
                x: r,
                y: n
            }
              , c = await Bi(e, l)
              , f = qt(fr(s))
              , h = Nd(f);
            let d = u[h]
              , w = u[f];
            if (i) {
                const y = h === "y" ? "top" : "left"
                  , g = h === "y" ? "bottom" : "right"
                  , p = d + c[y]
                  , v = d - c[g];
                d = lc(p, d, v)
            }
            if (o) {
                const y = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , p = w + c[y]
                  , v = w - c[g];
                w = lc(p, w, v)
            }
            const m = a.fn({
                ...e,
                [h]: d,
                [f]: w
            });
            return {
                ...m,
                data: {
                    x: m.x - r,
                    y: m.y - n,
                    enabled: {
                        [h]: i,
                        [f]: o
                    }
                }
            }
        }
    }
}
  , hS = function(t) {
    return t === void 0 && (t = {}),
    {
        options: t,
        fn(e) {
            const {x: r, y: n, placement: s, rects: i, middlewareData: o} = e
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = dr(t, e)
              , c = {
                x: r,
                y: n
            }
              , f = qt(s)
              , h = Nd(f);
            let d = c[h]
              , w = c[f];
            const m = dr(a, e)
              , y = typeof m == "number" ? {
                mainAxis: m,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...m
            };
            if (l) {
                const v = h === "y" ? "height" : "width"
                  , _ = i.reference[h] - i.floating[v] + y.mainAxis
                  , S = i.reference[h] + i.reference[v] - y.mainAxis;
                d < _ ? d = _ : d > S && (d = S)
            }
            if (u) {
                var g, p;
                const v = h === "y" ? "width" : "height"
                  , _ = Kv.has(fr(s))
                  , S = i.reference[f] - i.floating[v] + (_ && ((g = o.offset) == null ? void 0 : g[f]) || 0) + (_ ? 0 : y.crossAxis)
                  , E = i.reference[f] + i.reference[v] + (_ ? 0 : ((p = o.offset) == null ? void 0 : p[f]) || 0) - (_ ? y.crossAxis : 0);
                w < S ? w = S : w > E && (w = E)
            }
            return {
                [h]: d,
                [f]: w
            }
        }
    }
}
  , pS = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "size",
        options: t,
        async fn(e) {
            var r, n;
            const {placement: s, rects: i, platform: o, elements: a} = e
              , {apply: l= () => {}
            , ...u} = dr(t, e)
              , c = await Bi(e, u)
              , f = fr(s)
              , h = Vs(s)
              , d = qt(s) === "y"
              , {width: w, height: m} = i.floating;
            let y, g;
            f === "top" || f === "bottom" ? (y = f,
            g = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = f,
            y = h === "end" ? "top" : "bottom");
            const p = m - c.top - c.bottom
              , v = w - c.left - c.right
              , _ = Xr(m - c[y], p)
              , S = Xr(w - c[g], v)
              , E = !e.middlewareData.shift;
            let k = _
              , P = S;
            if ((r = e.middlewareData.shift) != null && r.enabled.x && (P = v),
            (n = e.middlewareData.shift) != null && n.enabled.y && (k = p),
            E && !h) {
                const N = nt(c.left, 0)
                  , z = nt(c.right, 0)
                  , D = nt(c.top, 0)
                  , Q = nt(c.bottom, 0);
                d ? P = w - 2 * (N !== 0 || z !== 0 ? N + z : nt(c.left, c.right)) : k = m - 2 * (D !== 0 || Q !== 0 ? D + Q : nt(c.top, c.bottom))
            }
            await l({
                ...e,
                availableWidth: P,
                availableHeight: k
            });
            const R = await o.getDimensions(a.floating);
            return w !== R.width || m !== R.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function il() {
    return typeof window < "u"
}
function Ws(t) {
    return Gv(t) ? (t.nodeName || "").toLowerCase() : "#document"
}
function lt(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}
function Yt(t) {
    var e;
    return (e = (Gv(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}
function Gv(t) {
    return il() ? t instanceof Node || t instanceof lt(t).Node : !1
}
function Mt(t) {
    return il() ? t instanceof Element || t instanceof lt(t).Element : !1
}
function Jt(t) {
    return il() ? t instanceof HTMLElement || t instanceof lt(t).HTMLElement : !1
}
function Fh(t) {
    return !il() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof lt(t).ShadowRoot
}
const mS = new Set(["inline", "contents"]);
function so(t) {
    const {overflow: e, overflowX: r, overflowY: n, display: s} = Ft(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !mS.has(s)
}
const gS = new Set(["table", "td", "th"]);
function vS(t) {
    return gS.has(Ws(t))
}
const yS = [":popover-open", ":modal"];
function ol(t) {
    return yS.some(e => {
        try {
            return t.matches(e)
        } catch {
            return !1
        }
    }
    )
}
const wS = ["transform", "translate", "scale", "rotate", "perspective"]
  , xS = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , bS = ["paint", "layout", "strict", "content"];
function $d(t) {
    const e = Dd()
      , r = Mt(t) ? Ft(t) : t;
    return wS.some(n => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !e && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !e && (r.filter ? r.filter !== "none" : !1) || xS.some(n => (r.willChange || "").includes(n)) || bS.some(n => (r.contain || "").includes(n))
}
function _S(t) {
    let e = Zr(t);
    for (; Jt(e) && !Is(e); ) {
        if ($d(e))
            return e;
        if (ol(e))
            return null;
        e = Zr(e)
    }
    return null
}
function Dd() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const SS = new Set(["html", "body", "#document"]);
function Is(t) {
    return SS.has(Ws(t))
}
function Ft(t) {
    return lt(t).getComputedStyle(t)
}
function al(t) {
    return Mt(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}
function Zr(t) {
    if (Ws(t) === "html")
        return t;
    const e = t.assignedSlot || t.parentNode || Fh(t) && t.host || Yt(t);
    return Fh(e) ? e.host : e
}
function Qv(t) {
    const e = Zr(t);
    return Is(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Jt(e) && so(e) ? e : Qv(e)
}
function Vi(t, e, r) {
    var n;
    e === void 0 && (e = []),
    r === void 0 && (r = !0);
    const s = Qv(t)
      , i = s === ((n = t.ownerDocument) == null ? void 0 : n.body)
      , o = lt(s);
    if (i) {
        const a = cc(o);
        return e.concat(o, o.visualViewport || [], so(s) ? s : [], a && r ? Vi(a) : [])
    }
    return e.concat(s, Vi(s, [], r))
}
function cc(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}
function Jv(t) {
    const e = Ft(t);
    let r = parseFloat(e.width) || 0
      , n = parseFloat(e.height) || 0;
    const s = Jt(t)
      , i = s ? t.offsetWidth : r
      , o = s ? t.offsetHeight : n
      , a = Pa(r) !== i || Pa(n) !== o;
    return a && (r = i,
    n = o),
    {
        width: r,
        height: n,
        $: a
    }
}
function Md(t) {
    return Mt(t) ? t : t.contextElement
}
function gs(t) {
    const e = Md(t);
    if (!Jt(e))
        return Qt(1);
    const r = e.getBoundingClientRect()
      , {width: n, height: s, $: i} = Jv(e);
    let o = (i ? Pa(r.width) : r.width) / n
      , a = (i ? Pa(r.height) : r.height) / s;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: o,
        y: a
    }
}
const ES = Qt(0);
function Yv(t) {
    const e = lt(t);
    return !Dd() || !e.visualViewport ? ES : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}
function kS(t, e, r) {
    return e === void 0 && (e = !1),
    !r || e && r !== lt(t) ? !1 : e
}
function Nn(t, e, r, n) {
    e === void 0 && (e = !1),
    r === void 0 && (r = !1);
    const s = t.getBoundingClientRect()
      , i = Md(t);
    let o = Qt(1);
    e && (n ? Mt(n) && (o = gs(n)) : o = gs(t));
    const a = kS(i, r, n) ? Yv(i) : Qt(0);
    let l = (s.left + a.x) / o.x
      , u = (s.top + a.y) / o.y
      , c = s.width / o.x
      , f = s.height / o.y;
    if (i) {
        const h = lt(i)
          , d = n && Mt(n) ? lt(n) : n;
        let w = h
          , m = cc(w);
        for (; m && n && d !== w; ) {
            const y = gs(m)
              , g = m.getBoundingClientRect()
              , p = Ft(m)
              , v = g.left + (m.clientLeft + parseFloat(p.paddingLeft)) * y.x
              , _ = g.top + (m.clientTop + parseFloat(p.paddingTop)) * y.y;
            l *= y.x,
            u *= y.y,
            c *= y.x,
            f *= y.y,
            l += v,
            u += _,
            w = lt(m),
            m = cc(w)
        }
    }
    return ja({
        width: c,
        height: f,
        x: l,
        y: u
    })
}
function Fd(t, e) {
    const r = al(t).scrollLeft;
    return e ? e.left + r : Nn(Yt(t)).left + r
}
function Xv(t, e, r) {
    r === void 0 && (r = !1);
    const n = t.getBoundingClientRect()
      , s = n.left + e.scrollLeft - (r ? 0 : Fd(t, n))
      , i = n.top + e.scrollTop;
    return {
        x: s,
        y: i
    }
}
function CS(t) {
    let {elements: e, rect: r, offsetParent: n, strategy: s} = t;
    const i = s === "fixed"
      , o = Yt(n)
      , a = e ? ol(e.floating) : !1;
    if (n === o || a && i)
        return r;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Qt(1);
    const c = Qt(0)
      , f = Jt(n);
    if ((f || !f && !i) && ((Ws(n) !== "body" || so(o)) && (l = al(n)),
    Jt(n))) {
        const d = Nn(n);
        u = gs(n),
        c.x = d.x + n.clientLeft,
        c.y = d.y + n.clientTop
    }
    const h = o && !f && !i ? Xv(o, l, !0) : Qt(0);
    return {
        width: r.width * u.x,
        height: r.height * u.y,
        x: r.x * u.x - l.scrollLeft * u.x + c.x + h.x,
        y: r.y * u.y - l.scrollTop * u.y + c.y + h.y
    }
}
function TS(t) {
    return Array.from(t.getClientRects())
}
function PS(t) {
    const e = Yt(t)
      , r = al(t)
      , n = t.ownerDocument.body
      , s = nt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth)
      , i = nt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
    let o = -r.scrollLeft + Fd(t);
    const a = -r.scrollTop;
    return Ft(n).direction === "rtl" && (o += nt(e.clientWidth, n.clientWidth) - s),
    {
        width: s,
        height: i,
        x: o,
        y: a
    }
}
function OS(t, e) {
    const r = lt(t)
      , n = Yt(t)
      , s = r.visualViewport;
    let i = n.clientWidth
      , o = n.clientHeight
      , a = 0
      , l = 0;
    if (s) {
        i = s.width,
        o = s.height;
        const u = Dd();
        (!u || u && e === "fixed") && (a = s.offsetLeft,
        l = s.offsetTop)
    }
    return {
        width: i,
        height: o,
        x: a,
        y: l
    }
}
const jS = new Set(["absolute", "fixed"]);
function RS(t, e) {
    const r = Nn(t, !0, e === "fixed")
      , n = r.top + t.clientTop
      , s = r.left + t.clientLeft
      , i = Jt(t) ? gs(t) : Qt(1)
      , o = t.clientWidth * i.x
      , a = t.clientHeight * i.y
      , l = s * i.x
      , u = n * i.y;
    return {
        width: o,
        height: a,
        x: l,
        y: u
    }
}
function Uh(t, e, r) {
    let n;
    if (e === "viewport")
        n = OS(t, r);
    else if (e === "document")
        n = PS(Yt(t));
    else if (Mt(e))
        n = RS(e, r);
    else {
        const s = Yv(t);
        n = {
            x: e.x - s.x,
            y: e.y - s.y,
            width: e.width,
            height: e.height
        }
    }
    return ja(n)
}
function Zv(t, e) {
    const r = Zr(t);
    return r === e || !Mt(r) || Is(r) ? !1 : Ft(r).position === "fixed" || Zv(r, e)
}
function AS(t, e) {
    const r = e.get(t);
    if (r)
        return r;
    let n = Vi(t, [], !1).filter(a => Mt(a) && Ws(a) !== "body")
      , s = null;
    const i = Ft(t).position === "fixed";
    let o = i ? Zr(t) : t;
    for (; Mt(o) && !Is(o); ) {
        const a = Ft(o)
          , l = $d(o);
        !l && a.position === "fixed" && (s = null),
        (i ? !l && !s : !l && a.position === "static" && !!s && jS.has(s.position) || so(o) && !l && Zv(t, o)) ? n = n.filter(c => c !== o) : s = a,
        o = Zr(o)
    }
    return e.set(t, n),
    n
}
function NS(t) {
    let {element: e, boundary: r, rootBoundary: n, strategy: s} = t;
    const o = [...r === "clippingAncestors" ? ol(e) ? [] : AS(e, this._c) : [].concat(r), n]
      , a = o[0]
      , l = o.reduce( (u, c) => {
        const f = Uh(e, c, s);
        return u.top = nt(f.top, u.top),
        u.right = Xr(f.right, u.right),
        u.bottom = Xr(f.bottom, u.bottom),
        u.left = nt(f.left, u.left),
        u
    }
    , Uh(e, a, s));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function IS(t) {
    const {width: e, height: r} = Jv(t);
    return {
        width: e,
        height: r
    }
}
function LS(t, e, r) {
    const n = Jt(e)
      , s = Yt(e)
      , i = r === "fixed"
      , o = Nn(t, !0, i, e);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Qt(0);
    function u() {
        l.x = Fd(s)
    }
    if (n || !n && !i)
        if ((Ws(e) !== "body" || so(s)) && (a = al(e)),
        n) {
            const d = Nn(e, !0, i, e);
            l.x = d.x + e.clientLeft,
            l.y = d.y + e.clientTop
        } else
            s && u();
    i && !n && s && u();
    const c = s && !n && !i ? Xv(s, a) : Qt(0)
      , f = o.left + a.scrollLeft - l.x - c.x
      , h = o.top + a.scrollTop - l.y - c.y;
    return {
        x: f,
        y: h,
        width: o.width,
        height: o.height
    }
}
function Xl(t) {
    return Ft(t).position === "static"
}
function zh(t, e) {
    if (!Jt(t) || Ft(t).position === "fixed")
        return null;
    if (e)
        return e(t);
    let r = t.offsetParent;
    return Yt(t) === r && (r = r.ownerDocument.body),
    r
}
function ey(t, e) {
    const r = lt(t);
    if (ol(t))
        return r;
    if (!Jt(t)) {
        let s = Zr(t);
        for (; s && !Is(s); ) {
            if (Mt(s) && !Xl(s))
                return s;
            s = Zr(s)
        }
        return r
    }
    let n = zh(t, e);
    for (; n && vS(n) && Xl(n); )
        n = zh(n, e);
    return n && Is(n) && Xl(n) && !$d(n) ? r : n || _S(t) || r
}
const $S = async function(t) {
    const e = this.getOffsetParent || ey
      , r = this.getDimensions
      , n = await r(t.floating);
    return {
        reference: LS(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: n.width,
            height: n.height
        }
    }
};
function DS(t) {
    return Ft(t).direction === "rtl"
}
const MS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: CS,
    getDocumentElement: Yt,
    getClippingRect: NS,
    getOffsetParent: ey,
    getElementRects: $S,
    getClientRects: TS,
    getDimensions: IS,
    getScale: gs,
    isElement: Mt,
    isRTL: DS
};
function ty(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
}
function FS(t, e) {
    let r = null, n;
    const s = Yt(t);
    function i() {
        var a;
        clearTimeout(n),
        (a = r) == null || a.disconnect(),
        r = null
    }
    function o(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        i();
        const u = t.getBoundingClientRect()
          , {left: c, top: f, width: h, height: d} = u;
        if (a || e(),
        !h || !d)
            return;
        const w = Ro(f)
          , m = Ro(s.clientWidth - (c + h))
          , y = Ro(s.clientHeight - (f + d))
          , g = Ro(c)
          , v = {
            rootMargin: -w + "px " + -m + "px " + -y + "px " + -g + "px",
            threshold: nt(0, Xr(1, l)) || 1
        };
        let _ = !0;
        function S(E) {
            const k = E[0].intersectionRatio;
            if (k !== l) {
                if (!_)
                    return o();
                k ? o(!1, k) : n = setTimeout( () => {
                    o(!1, 1e-7)
                }
                , 1e3)
            }
            k === 1 && !ty(u, t.getBoundingClientRect()) && o(),
            _ = !1
        }
        try {
            r = new IntersectionObserver(S,{
                ...v,
                root: s.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(S,v)
        }
        r.observe(t)
    }
    return o(!0),
    i
}
function US(t, e, r, n) {
    n === void 0 && (n = {});
    const {ancestorScroll: s=!0, ancestorResize: i=!0, elementResize: o=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = n
      , u = Md(t)
      , c = s || i ? [...u ? Vi(u) : [], ...Vi(e)] : [];
    c.forEach(g => {
        s && g.addEventListener("scroll", r, {
            passive: !0
        }),
        i && g.addEventListener("resize", r)
    }
    );
    const f = u && a ? FS(u, r) : null;
    let h = -1
      , d = null;
    o && (d = new ResizeObserver(g => {
        let[p] = g;
        p && p.target === u && d && (d.unobserve(e),
        cancelAnimationFrame(h),
        h = requestAnimationFrame( () => {
            var v;
            (v = d) == null || v.observe(e)
        }
        )),
        r()
    }
    ),
    u && !l && d.observe(u),
    d.observe(e));
    let w, m = l ? Nn(t) : null;
    l && y();
    function y() {
        const g = Nn(t);
        m && !ty(m, g) && r(),
        m = g,
        w = requestAnimationFrame(y)
    }
    return r(),
    () => {
        var g;
        c.forEach(p => {
            s && p.removeEventListener("scroll", r),
            i && p.removeEventListener("resize", r)
        }
        ),
        f == null || f(),
        (g = d) == null || g.disconnect(),
        d = null,
        l && cancelAnimationFrame(w)
    }
}
const zS = dS
  , BS = fS
  , VS = lS
  , WS = pS
  , HS = uS
  , Bh = aS
  , qS = hS
  , KS = (t, e, r) => {
    const n = new Map
      , s = {
        platform: MS,
        ...r
    }
      , i = {
        ...s.platform,
        _c: n
    };
    return oS(t, e, {
        ...s,
        platform: i
    })
}
;
var GS = typeof document < "u"
  , QS = function() {}
  , ra = GS ? b.useLayoutEffect : QS;
function Ra(t, e) {
    if (t === e)
        return !0;
    if (typeof t != typeof e)
        return !1;
    if (typeof t == "function" && t.toString() === e.toString())
        return !0;
    let r, n, s;
    if (t && e && typeof t == "object") {
        if (Array.isArray(t)) {
            if (r = t.length,
            r !== e.length)
                return !1;
            for (n = r; n-- !== 0; )
                if (!Ra(t[n], e[n]))
                    return !1;
            return !0
        }
        if (s = Object.keys(t),
        r = s.length,
        r !== Object.keys(e).length)
            return !1;
        for (n = r; n-- !== 0; )
            if (!{}.hasOwnProperty.call(e, s[n]))
                return !1;
        for (n = r; n-- !== 0; ) {
            const i = s[n];
            if (!(i === "_owner" && t.$$typeof) && !Ra(t[i], e[i]))
                return !1
        }
        return !0
    }
    return t !== t && e !== e
}
function ry(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Vh(t, e) {
    const r = ry(t);
    return Math.round(e * r) / r
}
function Zl(t) {
    const e = b.useRef(t);
    return ra( () => {
        e.current = t
    }
    ),
    e
}
function JS(t) {
    t === void 0 && (t = {});
    const {placement: e="bottom", strategy: r="absolute", middleware: n=[], platform: s, elements: {reference: i, floating: o}={}, transform: a=!0, whileElementsMounted: l, open: u} = t
      , [c,f] = b.useState({
        x: 0,
        y: 0,
        strategy: r,
        placement: e,
        middlewareData: {},
        isPositioned: !1
    })
      , [h,d] = b.useState(n);
    Ra(h, n) || d(n);
    const [w,m] = b.useState(null)
      , [y,g] = b.useState(null)
      , p = b.useCallback(T => {
        T !== E.current && (E.current = T,
        m(T))
    }
    , [])
      , v = b.useCallback(T => {
        T !== k.current && (k.current = T,
        g(T))
    }
    , [])
      , _ = i || w
      , S = o || y
      , E = b.useRef(null)
      , k = b.useRef(null)
      , P = b.useRef(c)
      , R = l != null
      , N = Zl(l)
      , z = Zl(s)
      , D = Zl(u)
      , Q = b.useCallback( () => {
        if (!E.current || !k.current)
            return;
        const T = {
            placement: e,
            strategy: r,
            middleware: h
        };
        z.current && (T.platform = z.current),
        KS(E.current, k.current, T).then(O => {
            const L = {
                ...O,
                isPositioned: D.current !== !1
            };
            I.current && !Ra(P.current, L) && (P.current = L,
            ro.flushSync( () => {
                f(L)
            }
            ))
        }
        )
    }
    , [h, e, r, z, D]);
    ra( () => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        f(T => ({
            ...T,
            isPositioned: !1
        })))
    }
    , [u]);
    const I = b.useRef(!1);
    ra( () => (I.current = !0,
    () => {
        I.current = !1
    }
    ), []),
    ra( () => {
        if (_ && (E.current = _),
        S && (k.current = S),
        _ && S) {
            if (N.current)
                return N.current(_, S, Q);
            Q()
        }
    }
    , [_, S, Q, N, R]);
    const X = b.useMemo( () => ({
        reference: E,
        floating: k,
        setReference: p,
        setFloating: v
    }), [p, v])
      , B = b.useMemo( () => ({
        reference: _,
        floating: S
    }), [_, S])
      , q = b.useMemo( () => {
        const T = {
            position: r,
            left: 0,
            top: 0
        };
        if (!B.floating)
            return T;
        const O = Vh(B.floating, c.x)
          , L = Vh(B.floating, c.y);
        return a ? {
            ...T,
            transform: "translate(" + O + "px, " + L + "px)",
            ...ry(B.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: r,
            left: O,
            top: L
        }
    }
    , [r, a, B.floating, c.x, c.y]);
    return b.useMemo( () => ({
        ...c,
        update: Q,
        refs: X,
        elements: B,
        floatingStyles: q
    }), [c, Q, X, B, q])
}
const YS = t => {
    function e(r) {
        return {}.hasOwnProperty.call(r, "current")
    }
    return {
        name: "arrow",
        options: t,
        fn(r) {
            const {element: n, padding: s} = typeof t == "function" ? t(r) : t;
            return n && e(n) ? n.current != null ? Bh({
                element: n.current,
                padding: s
            }).fn(r) : {} : n ? Bh({
                element: n,
                padding: s
            }).fn(r) : {}
        }
    }
}
  , XS = (t, e) => ({
    ...zS(t),
    options: [t, e]
})
  , ZS = (t, e) => ({
    ...BS(t),
    options: [t, e]
})
  , eE = (t, e) => ({
    ...qS(t),
    options: [t, e]
})
  , tE = (t, e) => ({
    ...VS(t),
    options: [t, e]
})
  , rE = (t, e) => ({
    ...WS(t),
    options: [t, e]
})
  , nE = (t, e) => ({
    ...HS(t),
    options: [t, e]
})
  , sE = (t, e) => ({
    ...YS(t),
    options: [t, e]
});
var iE = "Arrow"
  , ny = b.forwardRef( (t, e) => {
    const {children: r, width: n=10, height: s=5, ...i} = t;
    return x.jsx(He.svg, {
        ...i,
        ref: e,
        width: n,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: t.asChild ? r : x.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
ny.displayName = iE;
var oE = ny;
function aE(t) {
    const [e,r] = b.useState(void 0);
    return Yr( () => {
        if (t) {
            r({
                width: t.offsetWidth,
                height: t.offsetHeight
            });
            const n = new ResizeObserver(s => {
                if (!Array.isArray(s) || !s.length)
                    return;
                const i = s[0];
                let o, a;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    o = u.inlineSize,
                    a = u.blockSize
                } else
                    o = t.offsetWidth,
                    a = t.offsetHeight;
                r({
                    width: o,
                    height: a
                })
            }
            );
            return n.observe(t, {
                box: "border-box"
            }),
            () => n.unobserve(t)
        } else
            r(void 0)
    }
    , [t]),
    e
}
var sy = "Popper"
  , [iy,oy] = rl(sy)
  , [FP,ay] = iy(sy)
  , ly = "PopperAnchor"
  , uy = b.forwardRef( (t, e) => {
    const {__scopePopper: r, virtualRef: n, ...s} = t
      , i = ay(ly, r)
      , o = b.useRef(null)
      , a = Dt(e, o);
    return b.useEffect( () => {
        i.onAnchorChange((n == null ? void 0 : n.current) || o.current)
    }
    ),
    n ? null : x.jsx(He.div, {
        ...s,
        ref: a
    })
}
);
uy.displayName = ly;
var Ud = "PopperContent"
  , [lE,uE] = iy(Ud)
  , cy = b.forwardRef( (t, e) => {
    var re, Dn, pr, sn, mr, Mn;
    const {__scopePopper: r, side: n="bottom", sideOffset: s=0, align: i="center", alignOffset: o=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: f="partial", hideWhenDetached: h=!1, updatePositionStrategy: d="optimized", onPlaced: w, ...m} = t
      , y = ay(Ud, r)
      , [g,p] = b.useState(null)
      , v = Dt(e, gr => p(gr))
      , [_,S] = b.useState(null)
      , E = aE(_)
      , k = (E == null ? void 0 : E.width) ?? 0
      , P = (E == null ? void 0 : E.height) ?? 0
      , R = n + (i !== "center" ? "-" + i : "")
      , N = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , z = Array.isArray(u) ? u : [u]
      , D = z.length > 0
      , Q = {
        padding: N,
        boundary: z.filter(dE),
        altBoundary: D
    }
      , {refs: I, floatingStyles: X, placement: B, isPositioned: q, middlewareData: T} = JS({
        strategy: "fixed",
        placement: R,
        whileElementsMounted: (...gr) => US(...gr, {
            animationFrame: d === "always"
        }),
        elements: {
            reference: y.anchor
        },
        middleware: [XS({
            mainAxis: s + P,
            alignmentAxis: o
        }), l && ZS({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? eE() : void 0,
            ...Q
        }), l && tE({
            ...Q
        }), rE({
            ...Q,
            apply: ({elements: gr, rects: oo, availableWidth: vl, availableHeight: ao}) => {
                const {width: yl, height: Qs} = oo.reference
                  , Fn = gr.floating.style;
                Fn.setProperty("--radix-popper-available-width", `${vl}px`),
                Fn.setProperty("--radix-popper-available-height", `${ao}px`),
                Fn.setProperty("--radix-popper-anchor-width", `${yl}px`),
                Fn.setProperty("--radix-popper-anchor-height", `${Qs}px`)
            }
        }), _ && sE({
            element: _,
            padding: a
        }), fE({
            arrowWidth: k,
            arrowHeight: P
        }), h && nE({
            strategy: "referenceHidden",
            ...Q
        })]
    })
      , [O,L] = hy(B)
      , K = Jr(w);
    Yr( () => {
        q && (K == null || K())
    }
    , [q, K]);
    const F = (re = T.arrow) == null ? void 0 : re.x
      , J = (Dn = T.arrow) == null ? void 0 : Dn.y
      , Z = ((pr = T.arrow) == null ? void 0 : pr.centerOffset) !== 0
      , [we,Ae] = b.useState();
    return Yr( () => {
        g && Ae(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    x.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...X,
            transform: q ? X.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: we,
            "--radix-popper-transform-origin": [(sn = T.transformOrigin) == null ? void 0 : sn.x, (mr = T.transformOrigin) == null ? void 0 : mr.y].join(" "),
            ...((Mn = T.hide) == null ? void 0 : Mn.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: t.dir,
        children: x.jsx(lE, {
            scope: r,
            placedSide: O,
            onArrowChange: S,
            arrowX: F,
            arrowY: J,
            shouldHideArrow: Z,
            children: x.jsx(He.div, {
                "data-side": O,
                "data-align": L,
                ...m,
                ref: v,
                style: {
                    ...m.style,
                    animation: q ? void 0 : "none"
                }
            })
        })
    })
}
);
cy.displayName = Ud;
var dy = "PopperArrow"
  , cE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , fy = b.forwardRef(function(e, r) {
    const {__scopePopper: n, ...s} = e
      , i = uE(dy, n)
      , o = cE[i.placedSide];
    return x.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [o]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: x.jsx(oE, {
            ...s,
            ref: r,
            style: {
                ...s.style,
                display: "block"
            }
        })
    })
});
fy.displayName = dy;
function dE(t) {
    return t !== null
}
var fE = t => ({
    name: "transformOrigin",
    options: t,
    fn(e) {
        var y, g, p;
        const {placement: r, rects: n, middlewareData: s} = e
          , o = ((y = s.arrow) == null ? void 0 : y.centerOffset) !== 0
          , a = o ? 0 : t.arrowWidth
          , l = o ? 0 : t.arrowHeight
          , [u,c] = hy(r)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , h = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + a / 2
          , d = (((p = s.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
        let w = ""
          , m = "";
        return u === "bottom" ? (w = o ? f : `${h}px`,
        m = `${-l}px`) : u === "top" ? (w = o ? f : `${h}px`,
        m = `${n.floating.height + l}px`) : u === "right" ? (w = `${-l}px`,
        m = o ? f : `${d}px`) : u === "left" && (w = `${n.floating.width + l}px`,
        m = o ? f : `${d}px`),
        {
            data: {
                x: w,
                y: m
            }
        }
    }
});
function hy(t) {
    const [e,r="center"] = t.split("-");
    return [e, r]
}
var hE = uy
  , pE = cy
  , mE = fy
  , [ll,UP] = rl("Tooltip", [oy])
  , zd = oy()
  , py = "TooltipProvider"
  , gE = 700
  , Wh = "tooltip.open"
  , [vE,my] = ll(py)
  , gy = t => {
    const {__scopeTooltip: e, delayDuration: r=gE, skipDelayDuration: n=300, disableHoverableContent: s=!1, children: i} = t
      , o = b.useRef(!0)
      , a = b.useRef(!1)
      , l = b.useRef(0);
    return b.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    x.jsx(vE, {
        scope: e,
        isOpenDelayedRef: o,
        delayDuration: r,
        onOpen: b.useCallback( () => {
            window.clearTimeout(l.current),
            o.current = !1
        }
        , []),
        onClose: b.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => o.current = !0, n)
        }
        , [n]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: b.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: s,
        children: i
    })
}
;
gy.displayName = py;
var vy = "Tooltip"
  , [zP,ul] = ll(vy)
  , dc = "TooltipTrigger"
  , yE = b.forwardRef( (t, e) => {
    const {__scopeTooltip: r, ...n} = t
      , s = ul(dc, r)
      , i = my(dc, r)
      , o = zd(r)
      , a = b.useRef(null)
      , l = Dt(e, a, s.onTriggerChange)
      , u = b.useRef(!1)
      , c = b.useRef(!1)
      , f = b.useCallback( () => u.current = !1, []);
    return b.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    x.jsx(hE, {
        asChild: !0,
        ...o,
        children: x.jsx(He.button, {
            "aria-describedby": s.open ? s.contentId : void 0,
            "data-state": s.stateAttribute,
            ...n,
            ref: l,
            onPointerMove: Ee(t.onPointerMove, h => {
                h.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (s.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: Ee(t.onPointerLeave, () => {
                s.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: Ee(t.onPointerDown, () => {
                s.open && s.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: Ee(t.onFocus, () => {
                u.current || s.onOpen()
            }
            ),
            onBlur: Ee(t.onBlur, s.onClose),
            onClick: Ee(t.onClick, s.onClose)
        })
    })
}
);
yE.displayName = dc;
var wE = "TooltipPortal"
  , [BP,xE] = ll(wE, {
    forceMount: void 0
})
  , Ls = "TooltipContent"
  , yy = b.forwardRef( (t, e) => {
    const r = xE(Ls, t.__scopeTooltip)
      , {forceMount: n=r.forceMount, side: s="top", ...i} = t
      , o = ul(Ls, t.__scopeTooltip);
    return x.jsx(Cd, {
        present: n || o.open,
        children: o.disableHoverableContent ? x.jsx(wy, {
            side: s,
            ...i,
            ref: e
        }) : x.jsx(bE, {
            side: s,
            ...i,
            ref: e
        })
    })
}
)
  , bE = b.forwardRef( (t, e) => {
    const r = ul(Ls, t.__scopeTooltip)
      , n = my(Ls, t.__scopeTooltip)
      , s = b.useRef(null)
      , i = Dt(e, s)
      , [o,a] = b.useState(null)
      , {trigger: l, onClose: u} = r
      , c = s.current
      , {onPointerInTransitChange: f} = n
      , h = b.useCallback( () => {
        a(null),
        f(!1)
    }
    , [f])
      , d = b.useCallback( (w, m) => {
        const y = w.currentTarget
          , g = {
            x: w.clientX,
            y: w.clientY
        }
          , p = CE(g, y.getBoundingClientRect())
          , v = TE(g, p)
          , _ = PE(m.getBoundingClientRect())
          , S = jE([...v, ..._]);
        a(S),
        f(!0)
    }
    , [f]);
    return b.useEffect( () => () => h(), [h]),
    b.useEffect( () => {
        if (l && c) {
            const w = y => d(y, c)
              , m = y => d(y, l);
            return l.addEventListener("pointerleave", w),
            c.addEventListener("pointerleave", m),
            () => {
                l.removeEventListener("pointerleave", w),
                c.removeEventListener("pointerleave", m)
            }
        }
    }
    , [l, c, d, h]),
    b.useEffect( () => {
        if (o) {
            const w = m => {
                const y = m.target
                  , g = {
                    x: m.clientX,
                    y: m.clientY
                }
                  , p = (l == null ? void 0 : l.contains(y)) || (c == null ? void 0 : c.contains(y))
                  , v = !OE(g, o);
                p ? h() : v && (h(),
                u())
            }
            ;
            return document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
        }
    }
    , [l, c, o, u, h]),
    x.jsx(wy, {
        ...t,
        ref: i
    })
}
)
  , [_E,SE] = ll(vy, {
    isInside: !1
})
  , EE = Rb("TooltipContent")
  , wy = b.forwardRef( (t, e) => {
    const {__scopeTooltip: r, children: n, "aria-label": s, onEscapeKeyDown: i, onPointerDownOutside: o, ...a} = t
      , l = ul(Ls, r)
      , u = zd(r)
      , {onClose: c} = l;
    return b.useEffect( () => (document.addEventListener(Wh, c),
    () => document.removeEventListener(Wh, c)), [c]),
    b.useEffect( () => {
        if (l.trigger) {
            const f = h => {
                const d = h.target;
                d != null && d.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    x.jsx(kd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: c,
        children: x.jsxs(pE, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: e,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [x.jsx(EE, {
                children: n
            }), x.jsx(_E, {
                scope: r,
                isInside: !0,
                children: x.jsx(r1, {
                    id: l.contentId,
                    role: "tooltip",
                    children: s || n
                })
            })]
        })
    })
}
);
yy.displayName = Ls;
var xy = "TooltipArrow"
  , kE = b.forwardRef( (t, e) => {
    const {__scopeTooltip: r, ...n} = t
      , s = zd(r);
    return SE(xy, r).isInside ? null : x.jsx(mE, {
        ...s,
        ...n,
        ref: e
    })
}
);
kE.displayName = xy;
function CE(t, e) {
    const r = Math.abs(e.top - t.y)
      , n = Math.abs(e.bottom - t.y)
      , s = Math.abs(e.right - t.x)
      , i = Math.abs(e.left - t.x);
    switch (Math.min(r, n, s, i)) {
    case i:
        return "left";
    case s:
        return "right";
    case r:
        return "top";
    case n:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function TE(t, e, r=5) {
    const n = [];
    switch (e) {
    case "top":
        n.push({
            x: t.x - r,
            y: t.y + r
        }, {
            x: t.x + r,
            y: t.y + r
        });
        break;
    case "bottom":
        n.push({
            x: t.x - r,
            y: t.y - r
        }, {
            x: t.x + r,
            y: t.y - r
        });
        break;
    case "left":
        n.push({
            x: t.x + r,
            y: t.y - r
        }, {
            x: t.x + r,
            y: t.y + r
        });
        break;
    case "right":
        n.push({
            x: t.x - r,
            y: t.y - r
        }, {
            x: t.x - r,
            y: t.y + r
        });
        break
    }
    return n
}
function PE(t) {
    const {top: e, right: r, bottom: n, left: s} = t;
    return [{
        x: s,
        y: e
    }, {
        x: r,
        y: e
    }, {
        x: r,
        y: n
    }, {
        x: s,
        y: n
    }]
}
function OE(t, e) {
    const {x: r, y: n} = t;
    let s = !1;
    for (let i = 0, o = e.length - 1; i < e.length; o = i++) {
        const a = e[i]
          , l = e[o]
          , u = a.x
          , c = a.y
          , f = l.x
          , h = l.y;
        c > n != h > n && r < (f - u) * (n - c) / (h - c) + u && (s = !s)
    }
    return s
}
function jE(t) {
    const e = t.slice();
    return e.sort( (r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0),
    RE(e)
}
function RE(t) {
    if (t.length <= 1)
        return t.slice();
    const e = [];
    for (let n = 0; n < t.length; n++) {
        const s = t[n];
        for (; e.length >= 2; ) {
            const i = e[e.length - 1]
              , o = e[e.length - 2];
            if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x))
                e.pop();
            else
                break
        }
        e.push(s)
    }
    e.pop();
    const r = [];
    for (let n = t.length - 1; n >= 0; n--) {
        const s = t[n];
        for (; r.length >= 2; ) {
            const i = r[r.length - 1]
              , o = r[r.length - 2];
            if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x))
                r.pop();
            else
                break
        }
        r.push(s)
    }
    return r.pop(),
    e.length === 1 && r.length === 1 && e[0].x === r[0].x && e[0].y === r[0].y ? e : e.concat(r)
}
var AE = gy
  , by = yy;
const NE = AE
  , IE = b.forwardRef( ({className: t, sideOffset: e=4, ...r}, n) => x.jsx(by, {
    ref: n,
    sideOffset: e,
    className: Re("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
    ...r
}));
IE.displayName = by.displayName;
var cl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        () => {
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , dl = typeof window > "u" || "Deno"in globalThis;
function Tt() {}
function LE(t, e) {
    return typeof t == "function" ? t(e) : t
}
function $E(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function DE(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function fc(t, e) {
    return typeof t == "function" ? t(e) : t
}
function ME(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Hh(t, e) {
    const {type: r="all", exact: n, fetchStatus: s, predicate: i, queryKey: o, stale: a} = t;
    if (o) {
        if (n) {
            if (e.queryHash !== Bd(o, e.options))
                return !1
        } else if (!Hi(e.queryKey, o))
            return !1
    }
    if (r !== "all") {
        const l = e.isActive();
        if (r === "active" && !l || r === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && e.isStale() !== a || s && s !== e.state.fetchStatus || i && !i(e))
}
function qh(t, e) {
    const {exact: r, status: n, predicate: s, mutationKey: i} = t;
    if (i) {
        if (!e.options.mutationKey)
            return !1;
        if (r) {
            if (Wi(e.options.mutationKey) !== Wi(i))
                return !1
        } else if (!Hi(e.options.mutationKey, i))
            return !1
    }
    return !(n && e.state.status !== n || s && !s(e))
}
function Bd(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || Wi)(t)
}
function Wi(t) {
    return JSON.stringify(t, (e, r) => hc(r) ? Object.keys(r).sort().reduce( (n, s) => (n[s] = r[s],
    n), {}) : r)
}
function Hi(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => Hi(t[r], e[r])) : !1
}
function _y(t, e) {
    if (t === e)
        return t;
    const r = Kh(t) && Kh(e);
    if (r || hc(t) && hc(e)) {
        const n = r ? t : Object.keys(t)
          , s = n.length
          , i = r ? e : Object.keys(e)
          , o = i.length
          , a = r ? [] : {}
          , l = new Set(n);
        let u = 0;
        for (let c = 0; c < o; c++) {
            const f = r ? c : i[c];
            (!r && l.has(f) || r) && t[f] === void 0 && e[f] === void 0 ? (a[f] = void 0,
            u++) : (a[f] = _y(t[f], e[f]),
            a[f] === t[f] && t[f] !== void 0 && u++)
        }
        return s === o && u === s ? t : a
    }
    return e
}
function Kh(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function hc(t) {
    if (!Gh(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const r = e.prototype;
    return !(!Gh(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function Gh(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function FE(t) {
    return new Promise(e => {
        setTimeout(e, t)
    }
    )
}
function UE(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? _y(t, e) : e
}
function zE(t, e, r=0) {
    const n = [...t, e];
    return r && n.length > r ? n.slice(1) : n
}
function BE(t, e, r=0) {
    const n = [e, ...t];
    return r && n.length > r ? n.slice(0, -1) : n
}
var Vd = Symbol();
function Sy(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Vd ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
var xn, Ar, ws, Np, VE = (Np = class extends cl {
    constructor() {
        super();
        te(this, xn);
        te(this, Ar);
        te(this, ws);
        H(this, ws, e => {
            if (!dl && window.addEventListener) {
                const r = () => e();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        C(this, Ar) || this.setEventListener(C(this, ws))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = C(this, Ar)) == null || e.call(this),
        H(this, Ar, void 0))
    }
    setEventListener(e) {
        var r;
        H(this, ws, e),
        (r = C(this, Ar)) == null || r.call(this),
        H(this, Ar, e(n => {
            typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
        }
        ))
    }
    setFocused(e) {
        C(this, xn) !== e && (H(this, xn, e),
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(r => {
            r(e)
        }
        )
    }
    isFocused() {
        var e;
        return typeof C(this, xn) == "boolean" ? C(this, xn) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
    }
}
,
xn = new WeakMap,
Ar = new WeakMap,
ws = new WeakMap,
Np), Ey = new VE, xs, Nr, bs, Ip, WE = (Ip = class extends cl {
    constructor() {
        super();
        te(this, xs, !0);
        te(this, Nr);
        te(this, bs);
        H(this, bs, e => {
            if (!dl && window.addEventListener) {
                const r = () => e(!0)
                  , n = () => e(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", n, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        C(this, Nr) || this.setEventListener(C(this, bs))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = C(this, Nr)) == null || e.call(this),
        H(this, Nr, void 0))
    }
    setEventListener(e) {
        var r;
        H(this, bs, e),
        (r = C(this, Nr)) == null || r.call(this),
        H(this, Nr, e(this.setOnline.bind(this)))
    }
    setOnline(e) {
        C(this, xs) !== e && (H(this, xs, e),
        this.listeners.forEach(n => {
            n(e)
        }
        ))
    }
    isOnline() {
        return C(this, xs)
    }
}
,
xs = new WeakMap,
Nr = new WeakMap,
bs = new WeakMap,
Ip), Aa = new WE;
function HE() {
    let t, e;
    const r = new Promise( (s, i) => {
        t = s,
        e = i
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function n(s) {
        Object.assign(r, s),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = s => {
        n({
            status: "fulfilled",
            value: s
        }),
        t(s)
    }
    ,
    r.reject = s => {
        n({
            status: "rejected",
            reason: s
        }),
        e(s)
    }
    ,
    r
}
function qE(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function ky(t) {
    return (t ?? "online") === "online" ? Aa.isOnline() : !0
}
var Cy = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
;
function eu(t) {
    return t instanceof Cy
}
function Ty(t) {
    let e = !1, r = 0, n = !1, s;
    const i = HE()
      , o = m => {
        var y;
        n || (h(new Cy(m)),
        (y = t.abort) == null || y.call(t))
    }
      , a = () => {
        e = !0
    }
      , l = () => {
        e = !1
    }
      , u = () => Ey.isFocused() && (t.networkMode === "always" || Aa.isOnline()) && t.canRun()
      , c = () => ky(t.networkMode) && t.canRun()
      , f = m => {
        var y;
        n || (n = !0,
        (y = t.onSuccess) == null || y.call(t, m),
        s == null || s(),
        i.resolve(m))
    }
      , h = m => {
        var y;
        n || (n = !0,
        (y = t.onError) == null || y.call(t, m),
        s == null || s(),
        i.reject(m))
    }
      , d = () => new Promise(m => {
        var y;
        s = g => {
            (n || u()) && m(g)
        }
        ,
        (y = t.onPause) == null || y.call(t)
    }
    ).then( () => {
        var m;
        s = void 0,
        n || (m = t.onContinue) == null || m.call(t)
    }
    )
      , w = () => {
        if (n)
            return;
        let m;
        const y = r === 0 ? t.initialPromise : void 0;
        try {
            m = y ?? t.fn()
        } catch (g) {
            m = Promise.reject(g)
        }
        Promise.resolve(m).then(f).catch(g => {
            var E;
            if (n)
                return;
            const p = t.retry ?? (dl ? 0 : 3)
              , v = t.retryDelay ?? qE
              , _ = typeof v == "function" ? v(r, g) : v
              , S = p === !0 || typeof p == "number" && r < p || typeof p == "function" && p(r, g);
            if (e || !S) {
                h(g);
                return
            }
            r++,
            (E = t.onFail) == null || E.call(t, r, g),
            FE(_).then( () => u() ? void 0 : d()).then( () => {
                e ? h(g) : w()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: o,
        continue: () => (s == null || s(),
        i),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? w() : d().then(w),
        i)
    }
}
var KE = t => setTimeout(t, 0);
function GE() {
    let t = []
      , e = 0
      , r = a => {
        a()
    }
      , n = a => {
        a()
    }
      , s = KE;
    const i = a => {
        e ? t.push(a) : s( () => {
            r(a)
        }
        )
    }
      , o = () => {
        const a = t;
        t = [],
        a.length && s( () => {
            n( () => {
                a.forEach(l => {
                    r(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            e++;
            try {
                l = a()
            } finally {
                e--,
                e || o()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            i( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: a => {
            r = a
        }
        ,
        setBatchNotifyFunction: a => {
            n = a
        }
        ,
        setScheduler: a => {
            s = a
        }
    }
}
var ze = GE(), bn, Lp, Py = (Lp = class {
    constructor() {
        te(this, bn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        $E(this.gcTime) && H(this, bn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (dl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        C(this, bn) && (clearTimeout(C(this, bn)),
        H(this, bn, void 0))
    }
}
,
bn = new WeakMap,
Lp), _s, _n, ht, Sn, $e, Qi, En, Ot, Zt, $p, QE = ($p = class extends Py {
    constructor(e) {
        super();
        te(this, Ot);
        te(this, _s);
        te(this, _n);
        te(this, ht);
        te(this, Sn);
        te(this, $e);
        te(this, Qi);
        te(this, En);
        H(this, En, !1),
        H(this, Qi, e.defaultOptions),
        this.setOptions(e.options),
        this.observers = [],
        H(this, Sn, e.client),
        H(this, ht, C(this, Sn).getQueryCache()),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        H(this, _s, YE(this.options)),
        this.state = e.state ?? C(this, _s),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var e;
        return (e = C(this, $e)) == null ? void 0 : e.promise
    }
    setOptions(e) {
        this.options = {
            ...C(this, Qi),
            ...e
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && C(this, ht).remove(this)
    }
    setData(e, r) {
        const n = UE(this.state.data, e, this.options);
        return Ne(this, Ot, Zt).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        n
    }
    setState(e, r) {
        Ne(this, Ot, Zt).call(this, {
            type: "setState",
            state: e,
            setStateOptions: r
        })
    }
    cancel(e) {
        var n, s;
        const r = (n = C(this, $e)) == null ? void 0 : n.promise;
        return (s = C(this, $e)) == null || s.cancel(e),
        r ? r.then(Tt).catch(Tt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(C(this, _s))
    }
    isActive() {
        return this.observers.some(e => ME(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Vd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => fc(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !DE(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var r;
        const e = this.observers.find(n => n.shouldFetchOnWindowFocus());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = C(this, $e)) == null || r.continue()
    }
    onOnline() {
        var r;
        const e = this.observers.find(n => n.shouldFetchOnReconnect());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = C(this, $e)) == null || r.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        C(this, ht).notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e),
        this.observers.length || (C(this, $e) && (C(this, En) ? C(this, $e).cancel({
            revert: !0
        }) : C(this, $e).cancelRetry()),
        this.scheduleGc()),
        C(this, ht).notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ne(this, Ot, Zt).call(this, {
            type: "invalidate"
        })
    }
    fetch(e, r) {
        var u, c, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (C(this, $e))
                return C(this, $e).continueRetry(),
                C(this, $e).promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const h = this.observers.find(d => d.options.queryFn);
            h && this.setOptions(h.options)
        }
        const n = new AbortController
          , s = h => {
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (H(this, En, !0),
                n.signal)
            })
        }
          , i = () => {
            const h = Sy(this.options, r)
              , w = ( () => {
                const m = {
                    client: C(this, Sn),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return s(m),
                m
            }
            )();
            return H(this, En, !1),
            this.options.persister ? this.options.persister(h, w, this) : h(w)
        }
          , a = ( () => {
            const h = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: C(this, Sn),
                state: this.state,
                fetchFn: i
            };
            return s(h),
            h
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        H(this, _n, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Ne(this, Ot, Zt).call(this, {
            type: "fetch",
            meta: (f = a.fetchOptions) == null ? void 0 : f.meta
        });
        const l = h => {
            var d, w, m, y;
            eu(h) && h.silent || Ne(this, Ot, Zt).call(this, {
                type: "error",
                error: h
            }),
            eu(h) || ((w = (d = C(this, ht).config).onError) == null || w.call(d, h, this),
            (y = (m = C(this, ht).config).onSettled) == null || y.call(m, this.state.data, h, this)),
            this.scheduleGc()
        }
        ;
        return H(this, $e, Ty({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: a.fetchFn,
            abort: n.abort.bind(n),
            onSuccess: h => {
                var d, w, m, y;
                if (h === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(h)
                } catch (g) {
                    l(g);
                    return
                }
                (w = (d = C(this, ht).config).onSuccess) == null || w.call(d, h, this),
                (y = (m = C(this, ht).config).onSettled) == null || y.call(m, h, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (h, d) => {
                Ne(this, Ot, Zt).call(this, {
                    type: "failed",
                    failureCount: h,
                    error: d
                })
            }
            ,
            onPause: () => {
                Ne(this, Ot, Zt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ne(this, Ot, Zt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        C(this, $e).start()
    }
}
,
_s = new WeakMap,
_n = new WeakMap,
ht = new WeakMap,
Sn = new WeakMap,
$e = new WeakMap,
Qi = new WeakMap,
En = new WeakMap,
Ot = new WeakSet,
Zt = function(e) {
    const r = n => {
        switch (e.type) {
        case "failed":
            return {
                ...n,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error
            };
        case "pause":
            return {
                ...n,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...n,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...n,
                ...JE(n.data, this.options),
                fetchMeta: e.meta ?? null
            };
        case "success":
            return H(this, _n, void 0),
            {
                ...n,
                data: e.data,
                dataUpdateCount: n.dataUpdateCount + 1,
                dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const s = e.error;
            return eu(s) && s.revert && C(this, _n) ? {
                ...C(this, _n),
                fetchStatus: "idle"
            } : {
                ...n,
                error: s,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...n,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...n,
                ...e.state
            }
        }
    }
    ;
    this.state = r(this.state),
    ze.batch( () => {
        this.observers.forEach(n => {
            n.onQueryUpdate()
        }
        ),
        C(this, ht).notify({
            query: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
$p);
function JE(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: ky(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function YE(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , r = e !== void 0
      , n = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? n ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Bt, Dp, XE = (Dp = class extends cl {
    constructor(e={}) {
        super();
        te(this, Bt);
        this.config = e,
        H(this, Bt, new Map)
    }
    build(e, r, n) {
        const s = r.queryKey
          , i = r.queryHash ?? Bd(s, r);
        let o = this.get(i);
        return o || (o = new QE({
            client: e,
            queryKey: s,
            queryHash: i,
            options: e.defaultQueryOptions(r),
            state: n,
            defaultOptions: e.getQueryDefaults(s)
        }),
        this.add(o)),
        o
    }
    add(e) {
        C(this, Bt).has(e.queryHash) || (C(this, Bt).set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const r = C(this, Bt).get(e.queryHash);
        r && (e.destroy(),
        r === e && C(this, Bt).delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        ze.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return C(this, Bt).get(e)
    }
    getAll() {
        return [...C(this, Bt).values()]
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(n => Hh(r, n))
    }
    findAll(e={}) {
        const r = this.getAll();
        return Object.keys(e).length > 0 ? r.filter(n => Hh(e, n)) : r
    }
    notify(e) {
        ze.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    onFocus() {
        ze.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ze.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
,
Bt = new WeakMap,
Dp), Vt, Fe, kn, Wt, Er, Mp, ZE = (Mp = class extends Py {
    constructor(e) {
        super();
        te(this, Wt);
        te(this, Vt);
        te(this, Fe);
        te(this, kn);
        this.mutationId = e.mutationId,
        H(this, Fe, e.mutationCache),
        H(this, Vt, []),
        this.state = e.state || ek(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        C(this, Vt).includes(e) || (C(this, Vt).push(e),
        this.clearGcTimeout(),
        C(this, Fe).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        H(this, Vt, C(this, Vt).filter(r => r !== e)),
        this.scheduleGc(),
        C(this, Fe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        C(this, Vt).length || (this.state.status === "pending" ? this.scheduleGc() : C(this, Fe).remove(this))
    }
    continue() {
        var e;
        return ((e = C(this, kn)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var i, o, a, l, u, c, f, h, d, w, m, y, g, p, v, _, S, E, k, P;
        const r = () => {
            Ne(this, Wt, Er).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, kn, Ty({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, N) => {
                Ne(this, Wt, Er).call(this, {
                    type: "failed",
                    failureCount: R,
                    error: N
                })
            }
            ,
            onPause: () => {
                Ne(this, Wt, Er).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => C(this, Fe).canRun(this)
        }));
        const n = this.state.status === "pending"
          , s = !C(this, kn).canStart();
        try {
            if (n)
                r();
            else {
                Ne(this, Wt, Er).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: s
                }),
                await ((o = (i = C(this, Fe).config).onMutate) == null ? void 0 : o.call(i, e, this));
                const N = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, e));
                N !== this.state.context && Ne(this, Wt, Er).call(this, {
                    type: "pending",
                    context: N,
                    variables: e,
                    isPaused: s
                })
            }
            const R = await C(this, kn).start();
            return await ((c = (u = C(this, Fe).config).onSuccess) == null ? void 0 : c.call(u, R, e, this.state.context, this)),
            await ((h = (f = this.options).onSuccess) == null ? void 0 : h.call(f, R, e, this.state.context)),
            await ((w = (d = C(this, Fe).config).onSettled) == null ? void 0 : w.call(d, R, null, this.state.variables, this.state.context, this)),
            await ((y = (m = this.options).onSettled) == null ? void 0 : y.call(m, R, null, e, this.state.context)),
            Ne(this, Wt, Er).call(this, {
                type: "success",
                data: R
            }),
            R
        } catch (R) {
            try {
                throw await ((p = (g = C(this, Fe).config).onError) == null ? void 0 : p.call(g, R, e, this.state.context, this)),
                await ((_ = (v = this.options).onError) == null ? void 0 : _.call(v, R, e, this.state.context)),
                await ((E = (S = C(this, Fe).config).onSettled) == null ? void 0 : E.call(S, void 0, R, this.state.variables, this.state.context, this)),
                await ((P = (k = this.options).onSettled) == null ? void 0 : P.call(k, void 0, R, e, this.state.context)),
                R
            } finally {
                Ne(this, Wt, Er).call(this, {
                    type: "error",
                    error: R
                })
            }
        } finally {
            C(this, Fe).runNext(this)
        }
    }
}
,
Vt = new WeakMap,
Fe = new WeakMap,
kn = new WeakMap,
Wt = new WeakSet,
Er = function(e) {
    const r = n => {
        switch (e.type) {
        case "failed":
            return {
                ...n,
                failureCount: e.failureCount,
                failureReason: e.error
            };
        case "pause":
            return {
                ...n,
                isPaused: !0
            };
        case "continue":
            return {
                ...n,
                isPaused: !1
            };
        case "pending":
            return {
                ...n,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...n,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...n,
                data: void 0,
                error: e.error,
                failureCount: n.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    ze.batch( () => {
        C(this, Vt).forEach(n => {
            n.onMutationUpdate(e)
        }
        ),
        C(this, Fe).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
Mp);
function ek() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var nr, jt, Ji, Fp, tk = (Fp = class extends cl {
    constructor(e={}) {
        super();
        te(this, nr);
        te(this, jt);
        te(this, Ji);
        this.config = e,
        H(this, nr, new Set),
        H(this, jt, new Map),
        H(this, Ji, 0)
    }
    build(e, r, n) {
        const s = new ZE({
            mutationCache: this,
            mutationId: ++uo(this, Ji)._,
            options: e.defaultMutationOptions(r),
            state: n
        });
        return this.add(s),
        s
    }
    add(e) {
        C(this, nr).add(e);
        const r = Ao(e);
        if (typeof r == "string") {
            const n = C(this, jt).get(r);
            n ? n.push(e) : C(this, jt).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (C(this, nr).delete(e)) {
            const r = Ao(e);
            if (typeof r == "string") {
                const n = C(this, jt).get(r);
                if (n)
                    if (n.length > 1) {
                        const s = n.indexOf(e);
                        s !== -1 && n.splice(s, 1)
                    } else
                        n[0] === e && C(this, jt).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = Ao(e);
        if (typeof r == "string") {
            const n = C(this, jt).get(r)
              , s = n == null ? void 0 : n.find(i => i.state.status === "pending");
            return !s || s === e
        } else
            return !0
    }
    runNext(e) {
        var n;
        const r = Ao(e);
        if (typeof r == "string") {
            const s = (n = C(this, jt).get(r)) == null ? void 0 : n.find(i => i !== e && i.state.isPaused);
            return (s == null ? void 0 : s.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        ze.batch( () => {
            C(this, nr).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            C(this, nr).clear(),
            C(this, jt).clear()
        }
        )
    }
    getAll() {
        return Array.from(C(this, nr))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(n => qh(r, n))
    }
    findAll(e={}) {
        return this.getAll().filter(r => qh(e, r))
    }
    notify(e) {
        ze.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return ze.batch( () => Promise.all(e.map(r => r.continue().catch(Tt))))
    }
}
,
nr = new WeakMap,
jt = new WeakMap,
Ji = new WeakMap,
Fp);
function Ao(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
function Qh(t) {
    return {
        onFetch: (e, r) => {
            var c, f, h, d, w;
            const n = e.options
              , s = (h = (f = (c = e.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : h.direction
              , i = ((d = e.state.data) == null ? void 0 : d.pages) || []
              , o = ((w = e.state.data) == null ? void 0 : w.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let m = !1;
                const y = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (e.signal.aborted ? m = !0 : e.signal.addEventListener("abort", () => {
                            m = !0
                        }
                        ),
                        e.signal)
                    })
                }
                  , g = Sy(e.options, e.fetchOptions)
                  , p = async (v, _, S) => {
                    if (m)
                        return Promise.reject();
                    if (_ == null && v.pages.length)
                        return Promise.resolve(v);
                    const k = ( () => {
                        const z = {
                            client: e.client,
                            queryKey: e.queryKey,
                            pageParam: _,
                            direction: S ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        return y(z),
                        z
                    }
                    )()
                      , P = await g(k)
                      , {maxPages: R} = e.options
                      , N = S ? BE : zE;
                    return {
                        pages: N(v.pages, P, R),
                        pageParams: N(v.pageParams, _, R)
                    }
                }
                ;
                if (s && i.length) {
                    const v = s === "backward"
                      , _ = v ? rk : Jh
                      , S = {
                        pages: i,
                        pageParams: o
                    }
                      , E = _(n, S);
                    a = await p(S, E, v)
                } else {
                    const v = t ?? i.length;
                    do {
                        const _ = l === 0 ? o[0] ?? n.initialPageParam : Jh(n, a);
                        if (l > 0 && _ == null)
                            break;
                        a = await p(a, _),
                        l++
                    } while (l < v)
                }
                return a
            }
            ;
            e.options.persister ? e.fetchFn = () => {
                var m, y;
                return (y = (m = e.options).persister) == null ? void 0 : y.call(m, u, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            }
            : e.fetchFn = u
        }
    }
}
function Jh(t, {pages: e, pageParams: r}) {
    const n = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[n], e, r[n], r) : void 0
}
function rk(t, {pages: e, pageParams: r}) {
    var n;
    return e.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, e[0], e, r[0], r) : void 0
}
var ge, Ir, Lr, Ss, Es, $r, ks, Cs, Up, nk = (Up = class {
    constructor(t={}) {
        te(this, ge);
        te(this, Ir);
        te(this, Lr);
        te(this, Ss);
        te(this, Es);
        te(this, $r);
        te(this, ks);
        te(this, Cs);
        H(this, ge, t.queryCache || new XE),
        H(this, Ir, t.mutationCache || new tk),
        H(this, Lr, t.defaultOptions || {}),
        H(this, Ss, new Map),
        H(this, Es, new Map),
        H(this, $r, 0)
    }
    mount() {
        uo(this, $r)._++,
        C(this, $r) === 1 && (H(this, ks, Ey.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            C(this, ge).onFocus())
        }
        )),
        H(this, Cs, Aa.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            C(this, ge).onOnline())
        }
        )))
    }
    unmount() {
        var t, e;
        uo(this, $r)._--,
        C(this, $r) === 0 && ((t = C(this, ks)) == null || t.call(this),
        H(this, ks, void 0),
        (e = C(this, Cs)) == null || e.call(this),
        H(this, Cs, void 0))
    }
    isFetching(t) {
        return C(this, ge).findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return C(this, Ir).findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = C(this, ge).get(e.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t)
          , r = C(this, ge).build(this, e)
          , n = r.state.data;
        return n === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(fc(e.staleTime, r)) && this.prefetchQuery(e),
        Promise.resolve(n))
    }
    getQueriesData(t) {
        return C(this, ge).findAll(t).map( ({queryKey: e, state: r}) => {
            const n = r.data;
            return [e, n]
        }
        )
    }
    setQueryData(t, e, r) {
        const n = this.defaultQueryOptions({
            queryKey: t
        })
          , s = C(this, ge).get(n.queryHash)
          , i = s == null ? void 0 : s.state.data
          , o = LE(e, i);
        if (o !== void 0)
            return C(this, ge).build(this, n).setData(o, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(t, e, r) {
        return ze.batch( () => C(this, ge).findAll(t).map( ({queryKey: n}) => [n, this.setQueryData(n, e, r)]))
    }
    getQueryState(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = C(this, ge).get(e.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(t) {
        const e = C(this, ge);
        ze.batch( () => {
            e.findAll(t).forEach(r => {
                e.remove(r)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const r = C(this, ge);
        return ze.batch( () => (r.findAll(t).forEach(n => {
            n.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...t
        }, e)))
    }
    cancelQueries(t, e={}) {
        const r = {
            revert: !0,
            ...e
        }
          , n = ze.batch( () => C(this, ge).findAll(t).map(s => s.cancel(r)));
        return Promise.all(n).then(Tt).catch(Tt)
    }
    invalidateQueries(t, e={}) {
        return ze.batch( () => (C(this, ge).findAll(t).forEach(r => {
            r.invalidate()
        }
        ),
        (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
        }, e)))
    }
    refetchQueries(t, e={}) {
        const r = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }
          , n = ze.batch( () => C(this, ge).findAll(t).filter(s => !s.isDisabled() && !s.isStatic()).map(s => {
            let i = s.fetch(void 0, r);
            return r.throwOnError || (i = i.catch(Tt)),
            s.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(n).then(Tt)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const r = C(this, ge).build(this, e);
        return r.isStaleByTime(fc(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(Tt).catch(Tt)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = Qh(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Tt).catch(Tt)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = Qh(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return Aa.isOnline() ? C(this, Ir).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return C(this, ge)
    }
    getMutationCache() {
        return C(this, Ir)
    }
    getDefaultOptions() {
        return C(this, Lr)
    }
    setDefaultOptions(t) {
        H(this, Lr, t)
    }
    setQueryDefaults(t, e) {
        C(this, Ss).set(Wi(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...C(this, Ss).values()]
          , r = {};
        return e.forEach(n => {
            Hi(t, n.queryKey) && Object.assign(r, n.defaultOptions)
        }
        ),
        r
    }
    setMutationDefaults(t, e) {
        C(this, Es).set(Wi(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...C(this, Es).values()]
          , r = {};
        return e.forEach(n => {
            Hi(t, n.mutationKey) && Object.assign(r, n.defaultOptions)
        }
        ),
        r
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...C(this, Lr).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = Bd(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === Vd && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...C(this, Lr).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        C(this, ge).clear(),
        C(this, Ir).clear()
    }
}
,
ge = new WeakMap,
Ir = new WeakMap,
Lr = new WeakMap,
Ss = new WeakMap,
Es = new WeakMap,
$r = new WeakMap,
ks = new WeakMap,
Cs = new WeakMap,
Up), sk = b.createContext(void 0), ik = ({client: t, children: e}) => (b.useEffect( () => (t.mount(),
() => {
    t.unmount()
}
), [t]),
x.jsx(sk.Provider, {
    value: t,
    children: e
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Na() {
    return Na = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }
    ,
    Na.apply(this, arguments)
}
var Fr;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(Fr || (Fr = {}));
const Yh = "popstate";
function ok(t) {
    t === void 0 && (t = {});
    function e(n, s) {
        let {pathname: i, search: o, hash: a} = n.location;
        return pc("", {
            pathname: i,
            search: o,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function r(n, s) {
        return typeof s == "string" ? s : jy(s)
    }
    return lk(e, r, null, t)
}
function et(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function Oy(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function ak() {
    return Math.random().toString(36).substr(2, 8)
}
function Xh(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function pc(t, e, r, n) {
    return r === void 0 && (r = null),
    Na({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? fl(e) : e, {
        state: r,
        key: e && e.key || n || ak()
    })
}
function jy(t) {
    let {pathname: e="/", search: r="", hash: n=""} = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
}
function fl(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r),
        t = t.substr(0, r));
        let n = t.indexOf("?");
        n >= 0 && (e.search = t.substr(n),
        t = t.substr(0, n)),
        t && (e.pathname = t)
    }
    return e
}
function lk(t, e, r, n) {
    n === void 0 && (n = {});
    let {window: s=document.defaultView, v5Compat: i=!1} = n
      , o = s.history
      , a = Fr.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    o.replaceState(Na({}, o.state, {
        idx: u
    }), ""));
    function c() {
        return (o.state || {
            idx: null
        }).idx
    }
    function f() {
        a = Fr.Pop;
        let y = c()
          , g = y == null ? null : y - u;
        u = y,
        l && l({
            action: a,
            location: m.location,
            delta: g
        })
    }
    function h(y, g) {
        a = Fr.Push;
        let p = pc(m.location, y, g);
        u = c() + 1;
        let v = Xh(p, u)
          , _ = m.createHref(p);
        try {
            o.pushState(v, "", _)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError")
                throw S;
            s.location.assign(_)
        }
        i && l && l({
            action: a,
            location: m.location,
            delta: 1
        })
    }
    function d(y, g) {
        a = Fr.Replace;
        let p = pc(m.location, y, g);
        u = c();
        let v = Xh(p, u)
          , _ = m.createHref(p);
        o.replaceState(v, "", _),
        i && l && l({
            action: a,
            location: m.location,
            delta: 0
        })
    }
    function w(y) {
        let g = s.location.origin !== "null" ? s.location.origin : s.location.href
          , p = typeof y == "string" ? y : jy(y);
        return p = p.replace(/ $/, "%20"),
        et(g, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,g)
    }
    let m = {
        get action() {
            return a
        },
        get location() {
            return t(s, o)
        },
        listen(y) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(Yh, f),
            l = y,
            () => {
                s.removeEventListener(Yh, f),
                l = null
            }
        },
        createHref(y) {
            return e(s, y)
        },
        createURL: w,
        encodeLocation(y) {
            let g = w(y);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: h,
        replace: d,
        go(y) {
            return o.go(y)
        }
    };
    return m
}
var Zh;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(Zh || (Zh = {}));
function uk(t, e, r) {
    return r === void 0 && (r = "/"),
    ck(t, e, r, !1)
}
function ck(t, e, r, n) {
    let s = typeof e == "string" ? fl(e) : e
      , i = Ny(s.pathname || "/", r);
    if (i == null)
        return null;
    let o = Ry(t);
    dk(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = _k(i);
        a = xk(o[l], u, n)
    }
    return a
}
function Ry(t, e, r, n) {
    e === void 0 && (e = []),
    r === void 0 && (r = []),
    n === void 0 && (n = "");
    let s = (i, o, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        l.relativePath.startsWith("/") && (et(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(n.length));
        let u = vs([n, l.relativePath])
          , c = r.concat(l);
        i.children && i.children.length > 0 && (et(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Ry(i.children, e, c, u)),
        !(i.path == null && !i.index) && e.push({
            path: u,
            score: yk(u, i.index),
            routesMeta: c
        })
    }
    ;
    return t.forEach( (i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            s(i, o);
        else
            for (let l of Ay(i.path))
                s(i, o, l)
    }
    ),
    e
}
function Ay(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[r,...n] = e
      , s = r.endsWith("?")
      , i = r.replace(/\?$/, "");
    if (n.length === 0)
        return s ? [i, ""] : [i];
    let o = Ay(n.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? i : [i, l].join("/"))),
    s && a.push(...o),
    a.map(l => t.startsWith("/") && l === "" ? "/" : l)
}
function dk(t) {
    t.sort( (e, r) => e.score !== r.score ? r.score - e.score : wk(e.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
}
const fk = /^:[\w-]+$/
  , hk = 3
  , pk = 2
  , mk = 1
  , gk = 10
  , vk = -2
  , ep = t => t === "*";
function yk(t, e) {
    let r = t.split("/")
      , n = r.length;
    return r.some(ep) && (n += vk),
    e && (n += pk),
    r.filter(s => !ep(s)).reduce( (s, i) => s + (fk.test(i) ? hk : i === "" ? mk : gk), n)
}
function wk(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (n, s) => n === e[s]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function xk(t, e, r) {
    let {routesMeta: n} = t
      , s = {}
      , i = "/"
      , o = [];
    for (let a = 0; a < n.length; ++a) {
        let l = n[a]
          , u = a === n.length - 1
          , c = i === "/" ? e : e.slice(i.length) || "/"
          , f = tp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , h = l.route;
        if (!f && u && r && !n[n.length - 1].route.index && (f = tp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !f)
            return null;
        Object.assign(s, f.params),
        o.push({
            params: s,
            pathname: vs([i, f.pathname]),
            pathnameBase: Sk(vs([i, f.pathnameBase])),
            route: h
        }),
        f.pathnameBase !== "/" && (i = vs([i, f.pathnameBase]))
    }
    return o
}
function tp(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[r,n] = bk(t.path, t.caseSensitive, t.end)
      , s = e.match(r);
    if (!s)
        return null;
    let i = s[0]
      , o = i.replace(/(.)\/+$/, "$1")
      , a = s.slice(1);
    return {
        params: n.reduce( (u, c, f) => {
            let {paramName: h, isOptional: d} = c;
            if (h === "*") {
                let m = a[f] || "";
                o = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const w = a[f];
            return d && !w ? u[h] = void 0 : u[h] = (w || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: o,
        pattern: t
    }
}
function bk(t, e, r) {
    e === void 0 && (e = !1),
    r === void 0 && (r = !0),
    Oy(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let n = []
      , s = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (n.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (n.push({
        paramName: "*"
    }),
    s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? s += "\\/*$" : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,e ? void 0 : "i"), n]
}
function _k(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return Oy(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function Ny(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length
      , n = t.charAt(r);
    return n && n !== "/" ? null : t.slice(r) || "/"
}
const vs = t => t.join("/").replace(/\/\/+/g, "/")
  , Sk = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");
function Ek(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const Iy = ["post", "put", "patch", "delete"];
new Set(Iy);
const kk = ["get", ...Iy];
new Set(kk);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ia() {
    return Ia = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }
    ,
    Ia.apply(this, arguments)
}
const Ck = b.createContext(null)
  , Tk = b.createContext(null)
  , Ly = b.createContext(null)
  , hl = b.createContext(null)
  , pl = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , $y = b.createContext(null);
function Wd() {
    return b.useContext(hl) != null
}
function Dy() {
    return Wd() || et(!1),
    b.useContext(hl).location
}
function Pk(t, e) {
    return Ok(t, e)
}
function Ok(t, e, r, n) {
    Wd() || et(!1);
    let {navigator: s} = b.useContext(Ly)
      , {matches: i} = b.useContext(pl)
      , o = i[i.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = Dy(), c;
    if (e) {
        var f;
        let y = typeof e == "string" ? fl(e) : e;
        l === "/" || (f = y.pathname) != null && f.startsWith(l) || et(!1),
        c = y
    } else
        c = u;
    let h = c.pathname || "/"
      , d = h;
    if (l !== "/") {
        let y = l.replace(/^\//, "").split("/");
        d = "/" + h.replace(/^\//, "").split("/").slice(y.length).join("/")
    }
    let w = uk(t, {
        pathname: d
    })
      , m = Ik(w && w.map(y => Object.assign({}, y, {
        params: Object.assign({}, a, y.params),
        pathname: vs([l, s.encodeLocation ? s.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? l : vs([l, s.encodeLocation ? s.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), i, r, n);
    return e && m ? b.createElement(hl.Provider, {
        value: {
            location: Ia({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Fr.Pop
        }
    }, m) : m
}
function jk() {
    let t = Mk()
      , e = Ek(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , r = t instanceof Error ? t.stack : null
      , s = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? b.createElement("pre", {
        style: s
    }, r) : null, null)
}
const Rk = b.createElement(jk, null);
class Ak extends b.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? b.createElement(pl.Provider, {
            value: this.props.routeContext
        }, b.createElement($y.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Nk(t) {
    let {routeContext: e, match: r, children: n} = t
      , s = b.useContext(Ck);
    return s && s.static && s.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    b.createElement(pl.Provider, {
        value: e
    }, n)
}
function Ik(t, e, r, n) {
    var s;
    if (e === void 0 && (e = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    t == null) {
        var i;
        if (!r)
            return null;
        if (r.errors)
            t = r.matches;
        else if ((i = n) != null && i.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0)
            t = r.matches;
        else
            return null
    }
    let o = t
      , a = (s = r) == null ? void 0 : s.errors;
    if (a != null) {
        let c = o.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        c >= 0 || et(!1),
        o = o.slice(0, Math.min(o.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (r && n && n.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let f = o[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
            f.route.id) {
                let {loaderData: h, errors: d} = r
                  , w = f.route.loader && h[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
                if (f.route.lazy || w) {
                    l = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (c, f, h) => {
        let d, w = !1, m = null, y = null;
        r && (d = a && f.route.id ? a[f.route.id] : void 0,
        m = f.route.errorElement || Rk,
        l && (u < 0 && h === 0 ? (w = !0,
        y = null) : u === h && (w = !0,
        y = f.route.hydrateFallbackElement || null)));
        let g = e.concat(o.slice(0, h + 1))
          , p = () => {
            let v;
            return d ? v = m : w ? v = y : f.route.Component ? v = b.createElement(f.route.Component, null) : f.route.element ? v = f.route.element : v = c,
            b.createElement(Nk, {
                match: f,
                routeContext: {
                    outlet: c,
                    matches: g,
                    isDataRoute: r != null
                },
                children: v
            })
        }
        ;
        return r && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? b.createElement(Ak, {
            location: r.location,
            revalidation: r.revalidation,
            component: m,
            error: d,
            children: p(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var mc = function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}(mc || {});
function Lk(t) {
    let e = b.useContext(Tk);
    return e || et(!1),
    e
}
function $k(t) {
    let e = b.useContext(pl);
    return e || et(!1),
    e
}
function Dk(t) {
    let e = $k()
      , r = e.matches[e.matches.length - 1];
    return r.route.id || et(!1),
    r.route.id
}
function Mk() {
    var t;
    let e = b.useContext($y)
      , r = Lk(mc.UseRouteError)
      , n = Dk(mc.UseRouteError);
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[n]
}
function Fk(t, e) {
    t == null || t.v7_startTransition,
    t == null || t.v7_relativeSplatPath
}
function gc(t) {
    et(!1)
}
function Uk(t) {
    let {basename: e="/", children: r=null, location: n, navigationType: s=Fr.Pop, navigator: i, static: o=!1, future: a} = t;
    Wd() && et(!1);
    let l = e.replace(/^\/*/, "/")
      , u = b.useMemo( () => ({
        basename: l,
        navigator: i,
        static: o,
        future: Ia({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, o]);
    typeof n == "string" && (n = fl(n));
    let {pathname: c="/", search: f="", hash: h="", state: d=null, key: w="default"} = n
      , m = b.useMemo( () => {
        let y = Ny(c, l);
        return y == null ? null : {
            location: {
                pathname: y,
                search: f,
                hash: h,
                state: d,
                key: w
            },
            navigationType: s
        }
    }
    , [l, c, f, h, d, w, s]);
    return m == null ? null : b.createElement(Ly.Provider, {
        value: u
    }, b.createElement(hl.Provider, {
        children: r,
        value: m
    }))
}
function zk(t) {
    let {children: e, location: r} = t;
    return Pk(vc(e), r)
}
new Promise( () => {}
);
function vc(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return b.Children.forEach(t, (n, s) => {
        if (!b.isValidElement(n))
            return;
        let i = [...e, s];
        if (n.type === b.Fragment) {
            r.push.apply(r, vc(n.props.children, i));
            return
        }
        n.type !== gc && et(!1),
        !n.props.index || !n.props.children || et(!1);
        let o = {
            id: n.props.id || i.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (o.children = vc(n.props.children, i)),
        r.push(o)
    }
    ),
    r
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Bk = "6";
try {
    window.__reactRouterVersion = Bk
} catch {}
const Vk = "startTransition"
  , rp = Zp[Vk];
function Wk(t) {
    let {basename: e, children: r, future: n, window: s} = t
      , i = b.useRef();
    i.current == null && (i.current = ok({
        window: s,
        v5Compat: !0
    }));
    let o = i.current
      , [a,l] = b.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: u} = n || {}
      , c = b.useCallback(f => {
        u && rp ? rp( () => l(f)) : l(f)
    }
    , [l, u]);
    return b.useLayoutEffect( () => o.listen(c), [o, c]),
    b.useEffect( () => Fk(n), [n]),
    b.createElement(Uk, {
        basename: e,
        children: r,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: n
    })
}
var np;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(np || (np = {}));
var sp;
(function(t) {
    t.UseFetcher = "useFetcher",
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(sp || (sp = {}));
const Hk = jd("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , $s = b.forwardRef( ({className: t, variant: e, size: r, asChild: n=!1, ...s}, i) => {
    const o = n ? Ob : "button";
    return x.jsx(o, {
        className: Re(Hk({
            variant: e,
            size: r,
            className: t
        })),
        ref: i,
        ...s
    })
}
);
$s.displayName = "Button";
const My = "/assets/softtt.PNG"
  , qk = () => {
    const t = () => {
        var e;
        (e = document.getElementById("devis")) == null || e.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return x.jsx("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border",
        children: x.jsx("div", {
            className: "container mx-auto px-4",
            children: x.jsxs("div", {
                className: "flex items-center justify-between h-20",
                children: [x.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [x.jsx("img", {
                        src: My,
                        alt: "Soft Transports",
                        className: "w-16 h-16 object-contain"
                    }), x.jsxs("div", {
                        className: "hidden sm:block",
                        children: [x.jsx("div", {
                            className: "font-bold text-xl text-secondary",
                            children: "SOFT TRANSPORTS"
                        }), x.jsx("div", {
                            className: "text-xs text-muted-foreground",
                            children: "Votre déménagement, notre métier"
                        })]
                    })]
                }), x.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [x.jsx($s, {
                        variant: "outline",
                        size: "sm",
                        className: "hidden md:flex",
                        asChild: !0,
                        children: x.jsxs("a", {
                            href: "tel:+33758562250",
                            children: [x.jsx(Rd, {
                                className: "mr-2 h-4 w-4"
                            }), "07 58 56 22 50"]
                        })
                    }), x.jsx($s, {
                        size: "sm",
                        onClick: t,
                        children: "Devis Gratuit"
                    })]
                })]
            })
        })
    })
}
  , Kk = () => {
    const t = () => {
        var e;
        (e = document.getElementById("devis")) == null || e.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return x.jsxs("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-20",
        children: [x.jsx("div", {
            className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZWYyZjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTEydjEyaDEyek0wIDBoMTJ2MTJIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"
        }), x.jsx("div", {
            className: "container mx-auto px-4 relative z-10",
            children: x.jsxs("div", {
                className: "flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in",
                children: [x.jsx("h1", {
                    className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent leading-tight",
                    children: "Déménagement Paris & Île-de-France"
                }), x.jsx("p", {
                    className: "text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl",
                    children: "Votre déménagement, notre métier"
                }), x.jsx("p", {
                    className: "text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl",
                    children: "Expert en déménagement particulier et professionnel. Service complet avec déménageurs professionnels, transport sécurisé et matériel de qualité."
                }), x.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 mb-8",
                    children: [x.jsx($s, {
                        size: "lg",
                        onClick: t,
                        className: "text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all",
                        children: "Devis Gratuit Immédiat"
                    }), x.jsx($s, {
                        size: "lg",
                        variant: "outline",
                        className: "text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all",
                        asChild: !0,
                        children: x.jsxs("a", {
                            href: "tel:+33758562250",
                            children: [x.jsx(Rd, {
                                className: "mr-2 h-5 w-5"
                            }), "Appeler maintenant"]
                        })
                    })]
                }), x.jsxs("div", {
                    className: "flex flex-wrap justify-center gap-6 text-sm text-muted-foreground",
                    children: [x.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [x.jsx("div", {
                            className: "w-2 h-2 bg-primary rounded-full"
                        }), x.jsx("span", {
                            children: "Déménagement express disponible"
                        })]
                    }), x.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [x.jsx("div", {
                            className: "w-2 h-2 bg-primary rounded-full"
                        }), x.jsx("span", {
                            children: "Monte-meuble & garde-meubles"
                        })]
                    }), x.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [x.jsx("div", {
                            className: "w-2 h-2 bg-primary rounded-full"
                        }), x.jsx("span", {
                            children: "Protection objets fragiles"
                        })]
                    })]
                })]
            })
        }), x.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
        })]
    })
}
  , Hd = b.forwardRef( ({className: t, ...e}, r) => x.jsx("div", {
    ref: r,
    className: Re("rounded-lg border bg-card text-card-foreground shadow-sm", t),
    ...e
}));
Hd.displayName = "Card";
const qd = b.forwardRef( ({className: t, ...e}, r) => x.jsx("div", {
    ref: r,
    className: Re("flex flex-col space-y-1.5 p-6", t),
    ...e
}));
qd.displayName = "CardHeader";
const Kd = b.forwardRef( ({className: t, ...e}, r) => x.jsx("h3", {
    ref: r,
    className: Re("text-2xl font-semibold leading-none tracking-tight", t),
    ...e
}));
Kd.displayName = "CardTitle";
const Gd = b.forwardRef( ({className: t, ...e}, r) => x.jsx("p", {
    ref: r,
    className: Re("text-sm text-muted-foreground", t),
    ...e
}));
Gd.displayName = "CardDescription";
const Fy = b.forwardRef( ({className: t, ...e}, r) => x.jsx("div", {
    ref: r,
    className: Re("p-6 pt-0", t),
    ...e
}));
Fy.displayName = "CardContent";
const Gk = b.forwardRef( ({className: t, ...e}, r) => x.jsx("div", {
    ref: r,
    className: Re("flex items-center p-6 pt-0", t),
    ...e
}));
Gk.displayName = "CardFooter";
const Qk = [{
    icon: O1,
    title: "Déménagement Particulier",
    description: "Service complet de déménagement résidentiel pour appartements, maisons et studios à Paris et Île-de-France. Notre équipe professionnelle assure l'emballage soigné de vos biens, le transport sécurisé avec véhicules adaptés, le déballage et l'installation dans votre nouveau logement. Protection optimale de vos meubles et objets fragiles garantie.",
    keywords: "déménagement particulier, service complet déménagement"
}, {
    icon: k1,
    title: "Déménagement Professionnel",
    description: "Déménagement professionnel de bureaux, locaux commerciaux et espaces d'entreprise en Île-de-France. Nous planifions votre déménagement pour minimiser les interruptions d'activité, avec intervention possible en soirée ou weekend. Installation rapide et méthodique de votre mobilier professionnel, matériel informatique et archives. Discrétion et efficacité garanties.",
    keywords: "déménagement professionnel, local d'entreprise"
}, {
    icon: A1,
    title: "Monte-Meuble Paris",
    description: "Service de monte-meuble professionnel à Paris pour les accès difficiles et étages élevés sans ascenseur. Matériel moderne et sécurisé (monte-charge extérieur) permettant de transporter meubles volumineux, pianos, coffres-forts en toute sécurité. Équipe expérimentée et assurée pour toutes hauteurs d'immeubles parisiens.",
    keywords: "monte-meuble paris, matériel de déménagement"
}, {
    icon: R1,
    title: "Garde-Meubles Paris",
    description: "Solutions de garde-meubles et stockage sécurisé à Paris et Île-de-France pour courte, moyenne et longue durée. Boxes individuels surveillés 24h/24 avec système de sécurité moderne, contrôle d'accès et vidéosurveillance. Espaces propres, secs et adaptés à tous types de biens. Tarifs dégressifs selon la durée.",
    keywords: "garde-meubles paris, stockage sécurisé"
}, {
    icon: Lv,
    title: "Emballage Professionnel",
    description: "Service d'emballage professionnel et protection sur-mesure de vos biens fragiles et précieux. Nous fournissons cartons renforcés de qualité, housses de protection, papier bulle, film étirable et matériel spécialisé. Emballage soigné de vaisselle, objets d'art, électronique et meubles délicats par nos experts.",
    keywords: "emballage protection objets fragiles, matériel déménagement"
}, {
    icon: Nv,
    title: "Déménagement Express",
    description: "Service de déménagement express et urgent à Paris pour situations imprévues. Intervention rapide sous 24 à 48 heures maximum partout en Île-de-France. Équipe réactive et véhicules disponibles immédiatement pour déménagements urgents, mutations professionnelles soudaines ou situations d'urgence. Prestation complète même en express.",
    keywords: "déménagement express, prestation de déménagement"
}]
  , Jk = () => x.jsx("section", {
    id: "services",
    className: "py-20 bg-muted/30",
    children: x.jsxs("div", {
        className: "container mx-auto px-4",
        children: [x.jsxs("div", {
            className: "text-center mb-16",
            children: [x.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold mb-4 text-secondary",
                children: "Nos Prestations de Déménagement"
            }), x.jsx("p", {
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children: "Des déménageurs professionnels à votre service pour tous vos projets de déménagement en Île-de-France"
            })]
        }), x.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: Qk.map( (t, e) => {
                const r = t.icon;
                return x.jsx(Hd, {
                    className: "border-2 hover:border-primary transition-all duration-300 hover:shadow-xl bg-card",
                    children: x.jsxs(qd, {
                        children: [x.jsx("div", {
                            className: "w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4",
                            children: x.jsx(r, {
                                className: "w-7 h-7 text-primary"
                            })
                        }), x.jsx(Kd, {
                            className: "text-2xl mb-2",
                            children: t.title
                        }), x.jsx(Gd, {
                            className: "text-base",
                            children: t.description
                        })]
                    })
                }, e)
            }
            )
        })]
    })
})
  , Yk = [{
    icon: E1,
    title: "15 ans d'expérience",
    description: "Plus de 15 ans d'expertise dans le déménagement à Paris et Île-de-France. Des déménageurs professionnels certifiés, formés aux techniques modernes de manutention et expérimentés dans tous types de déménagements résidentiels et professionnels. Savoir-faire reconnu et milliers de clients satisfaits."
}, {
    icon: Lv,
    title: "Transport sécurisé",
    description: "Transport ultra-sécurisé de vos biens avec assurance tous risques incluse dans nos prestations. Véhicules modernes équipés, protection optimale des meubles et objets fragiles. Garantie complète contre la casse, les dommages et les pertes pendant toute la durée du déménagement. Votre tranquillité d'esprit est notre priorité."
}, {
    icon: T1,
    title: "Devis gratuit",
    description: "Devis de déménagement 100% gratuit et sans engagement sous 24h. Estimation précise et détaillée après évaluation de votre volume à déménager. Tarifs transparents et compétitifs, aucun frais caché. Possibilité de visite gratuite à domicile pour un chiffrage exact. Conseils personnalisés inclus."
}, {
    icon: N1,
    title: "Équipe dédiée",
    description: "Équipe dédiée et spécialisée assignée à votre déménagement du début à la fin. Personnel qualifié, courtois et respectueux de vos biens. Matériel professionnel de dernière génération : camions adaptés, monte-meubles, diables, sangles, couvertures de protection. Coordination parfaite pour un déménagement sans stress."
}]
  , Xk = () => x.jsx("section", {
    className: "py-20 bg-background",
    children: x.jsxs("div", {
        className: "container mx-auto px-4",
        children: [x.jsxs("div", {
            className: "text-center mb-16",
            children: [x.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold mb-4 text-secondary",
                children: "Pourquoi Choisir Soft Transports ?"
            }), x.jsx("p", {
                className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                children: "L'excellence du service de déménagement à Paris et en Île-de-France"
            })]
        }), x.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: Yk.map( (t, e) => {
                const r = t.icon;
                return x.jsxs("div", {
                    className: "text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-all",
                    children: [x.jsx("div", {
                        className: "w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4",
                        children: x.jsx(r, {
                            className: "w-8 h-8 text-primary-foreground"
                        })
                    }), x.jsx("h3", {
                        className: "text-xl font-bold mb-2",
                        children: t.title
                    }), x.jsx("p", {
                        className: "text-muted-foreground",
                        children: t.description
                    })]
                }, e)
            }
            )
        })]
    })
})
  , Zk = ["Paris (75)", "Hauts-de-Seine (92)", "Seine-Saint-Denis (93)", "Val-de-Marne (94)", "Seine-et-Marne (77)", "Yvelines (78)", "Essonne (91)", "Val-d'Oise (95)"]
  , eC = () => x.jsx("section", {
    className: "py-20 bg-secondary text-secondary-foreground",
    children: x.jsx("div", {
        className: "container mx-auto px-4",
        children: x.jsxs("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [x.jsx("div", {
                className: "flex justify-center mb-6",
                children: x.jsx("div", {
                    className: "w-16 h-16 bg-primary rounded-full flex items-center justify-center",
                    children: x.jsx(Iv, {
                        className: "w-8 h-8 text-primary-foreground"
                    })
                })
            }), x.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold mb-6",
                children: "Zone de Couverture"
            }), x.jsx("p", {
                className: "text-xl mb-12 opacity-90",
                children: "Soft Transports intervient dans toute l'Île-de-France pour vos déménagements. Transport sécurisé garanti sur tous nos trajets."
            }), x.jsx("div", {
                className: "grid md:grid-cols-2 gap-4 max-w-2xl mx-auto",
                children: Zk.map( (t, e) => x.jsxs("div", {
                    className: "flex items-center gap-3 bg-secondary-foreground/10 rounded-lg p-4 backdrop-blur-sm",
                    children: [x.jsx(C1, {
                        className: "w-6 h-6 text-primary flex-shrink-0"
                    }), x.jsx("span", {
                        className: "text-lg font-medium",
                        children: t
                    })]
                }, e))
            }), x.jsx("p", {
                className: "mt-12 text-lg opacity-90",
                children: "Besoin d'un déménagement hors Île-de-France ? Contactez-nous pour un devis personnalisé."
            })]
        })
    })
})
  , fn = b.forwardRef( ({className: t, type: e, ...r}, n) => x.jsx("input", {
    type: e,
    className: Re("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: n,
    ...r
}));
fn.displayName = "Input";
const Uy = b.forwardRef( ({className: t, ...e}, r) => x.jsx("textarea", {
    className: Re("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
    ref: r,
    ...e
}));
Uy.displayName = "Textarea";
var tC = "Label"
  , zy = b.forwardRef( (t, e) => x.jsx(He.label, {
    ...t,
    ref: e,
    onMouseDown: r => {
        var s;
        r.target.closest("button, input, select, textarea") || ((s = t.onMouseDown) == null || s.call(t, r),
        !r.defaultPrevented && r.detail > 1 && r.preventDefault())
    }
}));
zy.displayName = tC;
var By = zy;
const rC = jd("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , kr = b.forwardRef( ({className: t, ...e}, r) => x.jsx(By, {
    ref: r,
    className: Re(rC(), t),
    ...e
}));
kr.displayName = By.displayName;
var yc = function(t, e) {
    return yc = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(r, n) {
        r.__proto__ = n
    }
    || function(r, n) {
        for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s])
    }
    ,
    yc(t, e)
};
function Vy(t, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    yc(t, e);
    function r() {
        this.constructor = t
    }
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype,
    new r)
}
var La = function() {
    return La = Object.assign || function(e) {
        for (var r, n = 1, s = arguments.length; n < s; n++) {
            r = arguments[n];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
        }
        return e
    }
    ,
    La.apply(this, arguments)
};
function Hs(t, e) {
    var r = {};
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
            e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
    return r
}
function Wy(t, e, r, n) {
    var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(t, e, r, n);
    else
        for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, r, i) : o(e, r)) || i);
    return s > 3 && i && Object.defineProperty(e, r, i),
    i
}
function Hy(t, e) {
    return function(r, n) {
        e(r, n, t)
    }
}
function qy(t, e, r, n, s, i) {
    function o(g) {
        if (g !== void 0 && typeof g != "function")
            throw new TypeError("Function expected");
        return g
    }
    for (var a = n.kind, l = a === "getter" ? "get" : a === "setter" ? "set" : "value", u = !e && t ? n.static ? t : t.prototype : null, c = e || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), f, h = !1, d = r.length - 1; d >= 0; d--) {
        var w = {};
        for (var m in n)
            w[m] = m === "access" ? {} : n[m];
        for (var m in n.access)
            w.access[m] = n.access[m];
        w.addInitializer = function(g) {
            if (h)
                throw new TypeError("Cannot add initializers after decoration has completed");
            i.push(o(g || null))
        }
        ;
        var y = (0,
        r[d])(a === "accessor" ? {
            get: c.get,
            set: c.set
        } : c[l], w);
        if (a === "accessor") {
            if (y === void 0)
                continue;
            if (y === null || typeof y != "object")
                throw new TypeError("Object expected");
            (f = o(y.get)) && (c.get = f),
            (f = o(y.set)) && (c.set = f),
            (f = o(y.init)) && s.unshift(f)
        } else
            (f = o(y)) && (a === "field" ? s.unshift(f) : c[l] = f)
    }
    u && Object.defineProperty(u, n.name, c),
    h = !0
}
function Ky(t, e, r) {
    for (var n = arguments.length > 2, s = 0; s < e.length; s++)
        r = n ? e[s].call(t, r) : e[s].call(t);
    return n ? r : void 0
}
function Gy(t) {
    return typeof t == "symbol" ? t : "".concat(t)
}
function Qy(t, e, r) {
    return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""),
    Object.defineProperty(t, "name", {
        configurable: !0,
        value: r ? "".concat(r, " ", e) : e
    })
}
function Jy(t, e) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(t, e)
}
function M(t, e, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(o) {
            o(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, o) {
        function a(c) {
            try {
                u(n.next(c))
            } catch (f) {
                o(f)
            }
        }
        function l(c) {
            try {
                u(n.throw(c))
            } catch (f) {
                o(f)
            }
        }
        function u(c) {
            c.done ? i(c.value) : s(c.value).then(a, l)
        }
        u((n = n.apply(t, e || [])).next())
    }
    )
}
function Yy(t, e) {
    var r = {
        label: 0,
        sent: function() {
            if (i[0] & 1)
                throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    }, n, s, i, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return o.next = a(0),
    o.throw = a(1),
    o.return = a(2),
    typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }
    ),
    o;
    function a(u) {
        return function(c) {
            return l([u, c])
        }
    }
    function l(u) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; o && (o = 0,
        u[0] && (r = 0)),
        r; )
            try {
                if (n = 1,
                s && (i = u[0] & 2 ? s.return : u[0] ? s.throw || ((i = s.return) && i.call(s),
                0) : s.next) && !(i = i.call(s, u[1])).done)
                    return i;
                switch (s = 0,
                i && (u = [u[0] & 2, i.value]),
                u[0]) {
                case 0:
                case 1:
                    i = u;
                    break;
                case 4:
                    return r.label++,
                    {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    r.label++,
                    s = u[1],
                    u = [0];
                    continue;
                case 7:
                    u = r.ops.pop(),
                    r.trys.pop();
                    continue;
                default:
                    if (i = r.trys,
                    !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                        r.label = u[1];
                        break
                    }
                    if (u[0] === 6 && r.label < i[1]) {
                        r.label = i[1],
                        i = u;
                        break
                    }
                    if (i && r.label < i[2]) {
                        r.label = i[2],
                        r.ops.push(u);
                        break
                    }
                    i[2] && r.ops.pop(),
                    r.trys.pop();
                    continue
                }
                u = e.call(t, r)
            } catch (c) {
                u = [6, c],
                s = 0
            } finally {
                n = i = 0
            }
        if (u[0] & 5)
            throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}
var ml = Object.create ? function(t, e, r, n) {
    n === void 0 && (n = r);
    var s = Object.getOwnPropertyDescriptor(e, r);
    (!s || ("get"in s ? !e.__esModule : s.writable || s.configurable)) && (s = {
        enumerable: !0,
        get: function() {
            return e[r]
        }
    }),
    Object.defineProperty(t, n, s)
}
: function(t, e, r, n) {
    n === void 0 && (n = r),
    t[n] = e[r]
}
;
function Xy(t, e) {
    for (var r in t)
        r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && ml(e, t, r)
}
function $a(t) {
    var e = typeof Symbol == "function" && Symbol.iterator
      , r = e && t[e]
      , n = 0;
    if (r)
        return r.call(t);
    if (t && typeof t.length == "number")
        return {
            next: function() {
                return t && n >= t.length && (t = void 0),
                {
                    value: t && t[n++],
                    done: !t
                }
            }
        };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function Qd(t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r)
        return t;
    var n = r.call(t), s, i = [], o;
    try {
        for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
            i.push(s.value)
    } catch (a) {
        o = {
            error: a
        }
    } finally {
        try {
            s && !s.done && (r = n.return) && r.call(n)
        } finally {
            if (o)
                throw o.error
        }
    }
    return i
}
function Zy() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t = t.concat(Qd(arguments[e]));
    return t
}
function e0() {
    for (var t = 0, e = 0, r = arguments.length; e < r; e++)
        t += arguments[e].length;
    for (var n = Array(t), s = 0, e = 0; e < r; e++)
        for (var i = arguments[e], o = 0, a = i.length; o < a; o++,
        s++)
            n[s] = i[o];
    return n
}
function t0(t, e, r) {
    if (r || arguments.length === 2)
        for (var n = 0, s = e.length, i; n < s; n++)
            (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)),
            i[n] = e[n]);
    return t.concat(i || Array.prototype.slice.call(e))
}
function Ds(t) {
    return this instanceof Ds ? (this.v = t,
    this) : new Ds(t)
}
function r0(t, e, r) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(t, e || []), s, i = [];
    return s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype),
    a("next"),
    a("throw"),
    a("return", o),
    s[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    s;
    function o(d) {
        return function(w) {
            return Promise.resolve(w).then(d, f)
        }
    }
    function a(d, w) {
        n[d] && (s[d] = function(m) {
            return new Promise(function(y, g) {
                i.push([d, m, y, g]) > 1 || l(d, m)
            }
            )
        }
        ,
        w && (s[d] = w(s[d])))
    }
    function l(d, w) {
        try {
            u(n[d](w))
        } catch (m) {
            h(i[0][3], m)
        }
    }
    function u(d) {
        d.value instanceof Ds ? Promise.resolve(d.value.v).then(c, f) : h(i[0][2], d)
    }
    function c(d) {
        l("next", d)
    }
    function f(d) {
        l("throw", d)
    }
    function h(d, w) {
        d(w),
        i.shift(),
        i.length && l(i[0][0], i[0][1])
    }
}
function n0(t) {
    var e, r;
    return e = {},
    n("next"),
    n("throw", function(s) {
        throw s
    }),
    n("return"),
    e[Symbol.iterator] = function() {
        return this
    }
    ,
    e;
    function n(s, i) {
        e[s] = t[s] ? function(o) {
            return (r = !r) ? {
                value: Ds(t[s](o)),
                done: !1
            } : i ? i(o) : o
        }
        : i
    }
}
function s0(t) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = t[Symbol.asyncIterator], r;
    return e ? e.call(t) : (t = typeof $a == "function" ? $a(t) : t[Symbol.iterator](),
    r = {},
    n("next"),
    n("throw"),
    n("return"),
    r[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    r);
    function n(i) {
        r[i] = t[i] && function(o) {
            return new Promise(function(a, l) {
                o = t[i](o),
                s(a, l, o.done, o.value)
            }
            )
        }
    }
    function s(i, o, a, l) {
        Promise.resolve(l).then(function(u) {
            i({
                value: u,
                done: a
            })
        }, o)
    }
}
function i0(t, e) {
    return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
    }) : t.raw = e,
    t
}
var nC = Object.create ? function(t, e) {
    Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
    })
}
: function(t, e) {
    t.default = e
}
  , wc = function(t) {
    return wc = Object.getOwnPropertyNames || function(e) {
        var r = [];
        for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (r[r.length] = n);
        return r
    }
    ,
    wc(t)
};
function o0(t) {
    if (t && t.__esModule)
        return t;
    var e = {};
    if (t != null)
        for (var r = wc(t), n = 0; n < r.length; n++)
            r[n] !== "default" && ml(e, t, r[n]);
    return nC(e, t),
    e
}
function a0(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
function l0(t, e, r, n) {
    if (r === "a" && !n)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !n : !e.has(t))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t)
}
function u0(t, e, r, n, s) {
    if (n === "m")
        throw new TypeError("Private method is not writable");
    if (n === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof e == "function" ? t !== e || !s : !e.has(t))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n === "a" ? s.call(t, r) : s ? s.value = r : e.set(t, r),
    r
}
function c0(t, e) {
    if (e === null || typeof e != "object" && typeof e != "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof t == "function" ? e === t : t.has(e)
}
function d0(t, e, r) {
    if (e != null) {
        if (typeof e != "object" && typeof e != "function")
            throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
            n = e[Symbol.asyncDispose]
        }
        if (n === void 0) {
            if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
            n = e[Symbol.dispose],
            r && (s = n)
        }
        if (typeof n != "function")
            throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this)
            } catch (i) {
                return Promise.reject(i)
            }
        }
        ),
        t.stack.push({
            value: e,
            dispose: n,
            async: r
        })
    } else
        r && t.stack.push({
            async: !0
        });
    return e
}
var sC = typeof SuppressedError == "function" ? SuppressedError : function(t, e, r) {
    var n = new Error(r);
    return n.name = "SuppressedError",
    n.error = t,
    n.suppressed = e,
    n
}
;
function f0(t) {
    function e(i) {
        t.error = t.hasError ? new sC(i,t.error,"An error was suppressed during disposal.") : i,
        t.hasError = !0
    }
    var r, n = 0;
    function s() {
        for (; r = t.stack.pop(); )
            try {
                if (!r.async && n === 1)
                    return n = 0,
                    t.stack.push(r),
                    Promise.resolve().then(s);
                if (r.dispose) {
                    var i = r.dispose.call(r.value);
                    if (r.async)
                        return n |= 2,
                        Promise.resolve(i).then(s, function(o) {
                            return e(o),
                            s()
                        })
                } else
                    n |= 1
            } catch (o) {
                e(o)
            }
        if (n === 1)
            return t.hasError ? Promise.reject(t.error) : Promise.resolve();
        if (t.hasError)
            throw t.error
    }
    return s()
}
function h0(t, e) {
    return typeof t == "string" && /^\.\.?\//.test(t) ? t.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(r, n, s, i, o) {
        return n ? e ? ".jsx" : ".js" : s && (!i || !o) ? r : s + i + "." + o.toLowerCase() + "js"
    }) : t
}
const iC = {
    __extends: Vy,
    __assign: La,
    __rest: Hs,
    __decorate: Wy,
    __param: Hy,
    __esDecorate: qy,
    __runInitializers: Ky,
    __propKey: Gy,
    __setFunctionName: Qy,
    __metadata: Jy,
    __awaiter: M,
    __generator: Yy,
    __createBinding: ml,
    __exportStar: Xy,
    __values: $a,
    __read: Qd,
    __spread: Zy,
    __spreadArrays: e0,
    __spreadArray: t0,
    __await: Ds,
    __asyncGenerator: r0,
    __asyncDelegator: n0,
    __asyncValues: s0,
    __makeTemplateObject: i0,
    __importStar: o0,
    __importDefault: a0,
    __classPrivateFieldGet: l0,
    __classPrivateFieldSet: u0,
    __classPrivateFieldIn: c0,
    __addDisposableResource: d0,
    __disposeResources: f0,
    __rewriteRelativeImportExtension: h0
}
  , oC = Object.freeze(Object.defineProperty({
    __proto__: null,
    __addDisposableResource: d0,
    get __assign() {
        return La
    },
    __asyncDelegator: n0,
    __asyncGenerator: r0,
    __asyncValues: s0,
    __await: Ds,
    __awaiter: M,
    __classPrivateFieldGet: l0,
    __classPrivateFieldIn: c0,
    __classPrivateFieldSet: u0,
    __createBinding: ml,
    __decorate: Wy,
    __disposeResources: f0,
    __esDecorate: qy,
    __exportStar: Xy,
    __extends: Vy,
    __generator: Yy,
    __importDefault: a0,
    __importStar: o0,
    __makeTemplateObject: i0,
    __metadata: Jy,
    __param: Hy,
    __propKey: Gy,
    __read: Qd,
    __rest: Hs,
    __rewriteRelativeImportExtension: h0,
    __runInitializers: Ky,
    __setFunctionName: Qy,
    __spread: Zy,
    __spreadArray: t0,
    __spreadArrays: e0,
    __values: $a,
    default: iC
}, Symbol.toStringTag, {
    value: "Module"
}))
  , aC = "modulepreload"
  , lC = function(t) {
    return "/" + t
}
  , ip = {}
  , qs = function(e, r, n) {
    let s = Promise.resolve();
    if (r && r.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , a = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        s = Promise.allSettled(r.map(l => {
            if (l = lC(l),
            l in ip)
                return;
            ip[l] = !0;
            const u = l.endsWith(".css")
              , c = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${c}`))
                return;
            const f = document.createElement("link");
            if (f.rel = u ? "stylesheet" : aC,
            u || (f.as = "script"),
            f.crossOrigin = "",
            f.href = l,
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
                return new Promise( (h, d) => {
                    f.addEventListener("load", h),
                    f.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    function i(o) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = o,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw o
    }
    return s.then(o => {
        for (const a of o || [])
            a.status === "rejected" && i(a.reason);
        return e().catch(i)
    }
    )
}
  , uC = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = (...r) => qs(async () => {
        const {default: n} = await Promise.resolve().then( () => $n);
        return {
            default: n
        }
    }
    , void 0).then( ({default: n}) => n(...r)) : e = fetch,
    (...r) => e(...r)
}
;
class Jd extends Error {
    constructor(e, r="FunctionsError", n) {
        super(e),
        this.name = r,
        this.context = n
    }
}
class op extends Jd {
    constructor(e) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
    }
}
class ap extends Jd {
    constructor(e) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
    }
}
class lp extends Jd {
    constructor(e) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
    }
}
var xc;
(function(t) {
    t.Any = "any",
    t.ApNortheast1 = "ap-northeast-1",
    t.ApNortheast2 = "ap-northeast-2",
    t.ApSouth1 = "ap-south-1",
    t.ApSoutheast1 = "ap-southeast-1",
    t.ApSoutheast2 = "ap-southeast-2",
    t.CaCentral1 = "ca-central-1",
    t.EuCentral1 = "eu-central-1",
    t.EuWest1 = "eu-west-1",
    t.EuWest2 = "eu-west-2",
    t.EuWest3 = "eu-west-3",
    t.SaEast1 = "sa-east-1",
    t.UsEast1 = "us-east-1",
    t.UsWest1 = "us-west-1",
    t.UsWest2 = "us-west-2"
}
)(xc || (xc = {}));
class cC {
    constructor(e, {headers: r={}, customFetch: n, region: s=xc.Any}={}) {
        this.url = e,
        this.headers = r,
        this.region = s,
        this.fetch = uC(n)
    }
    setAuth(e) {
        this.headers.Authorization = `Bearer ${e}`
    }
    invoke(e) {
        return M(this, arguments, void 0, function*(r, n={}) {
            var s;
            try {
                const {headers: i, method: o, body: a, signal: l} = n;
                let u = {}
                  , {region: c} = n;
                c || (c = this.region);
                const f = new URL(`${this.url}/${r}`);
                c && c !== "any" && (u["x-region"] = c,
                f.searchParams.set("forceFunctionRegion", c));
                let h;
                a && (i && !Object.prototype.hasOwnProperty.call(i, "Content-Type") || !i) ? typeof Blob < "u" && a instanceof Blob || a instanceof ArrayBuffer ? (u["Content-Type"] = "application/octet-stream",
                h = a) : typeof a == "string" ? (u["Content-Type"] = "text/plain",
                h = a) : typeof FormData < "u" && a instanceof FormData ? h = a : (u["Content-Type"] = "application/json",
                h = JSON.stringify(a)) : h = a;
                const d = yield this.fetch(f.toString(), {
                    method: o || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, u), this.headers), i),
                    body: h,
                    signal: l
                }).catch(g => {
                    throw g.name === "AbortError" ? g : new op(g)
                }
                )
                  , w = d.headers.get("x-relay-error");
                if (w && w === "true")
                    throw new ap(d);
                if (!d.ok)
                    throw new lp(d);
                let m = ((s = d.headers.get("Content-Type")) !== null && s !== void 0 ? s : "text/plain").split(";")[0].trim(), y;
                return m === "application/json" ? y = yield d.json() : m === "application/octet-stream" || m === "application/pdf" ? y = yield d.blob() : m === "text/event-stream" ? y = d : m === "multipart/form-data" ? y = yield d.formData() : y = yield d.text(),
                {
                    data: y,
                    error: null,
                    response: d
                }
            } catch (i) {
                return i instanceof Error && i.name === "AbortError" ? {
                    data: null,
                    error: new op(i)
                } : {
                    data: null,
                    error: i,
                    response: i instanceof lp || i instanceof ap ? i.context : void 0
                }
            }
        })
    }
}
var Qe = {};
const Ks = Bp(oC);
var No = {}
  , Io = {}
  , Lo = {}
  , $o = {}
  , Do = {}
  , dC = function() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
  , Ms = dC();
const fC = Ms.fetch
  , p0 = Ms.fetch.bind(Ms)
  , m0 = Ms.Headers
  , hC = Ms.Request
  , pC = Ms.Response
  , $n = Object.freeze(Object.defineProperty({
    __proto__: null,
    Headers: m0,
    Request: hC,
    Response: pC,
    default: p0,
    fetch: fC
}, Symbol.toStringTag, {
    value: "Module"
}))
  , mC = Bp($n);
var Mo = {}, up;
function g0() {
    if (up)
        return Mo;
    up = 1,
    Object.defineProperty(Mo, "__esModule", {
        value: !0
    });
    class t extends Error {
        constructor(r) {
            super(r.message),
            this.name = "PostgrestError",
            this.details = r.details,
            this.hint = r.hint,
            this.code = r.code
        }
    }
    return Mo.default = t,
    Mo
}
var cp;
function v0() {
    if (cp)
        return Do;
    cp = 1,
    Object.defineProperty(Do, "__esModule", {
        value: !0
    });
    const t = Ks
      , e = t.__importDefault(mC)
      , r = t.__importDefault(g0());
    class n {
        constructor(i) {
            var o, a;
            this.shouldThrowOnError = !1,
            this.method = i.method,
            this.url = i.url,
            this.headers = new Headers(i.headers),
            this.schema = i.schema,
            this.body = i.body,
            this.shouldThrowOnError = (o = i.shouldThrowOnError) !== null && o !== void 0 ? o : !1,
            this.signal = i.signal,
            this.isMaybeSingle = (a = i.isMaybeSingle) !== null && a !== void 0 ? a : !1,
            i.fetch ? this.fetch = i.fetch : typeof fetch > "u" ? this.fetch = e.default : this.fetch = fetch
        }
        throwOnError() {
            return this.shouldThrowOnError = !0,
            this
        }
        setHeader(i, o) {
            return this.headers = new Headers(this.headers),
            this.headers.set(i, o),
            this
        }
        then(i, o) {
            this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)),
            this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
            const a = this.fetch;
            let l = a(this.url.toString(), {
                method: this.method,
                headers: this.headers,
                body: JSON.stringify(this.body),
                signal: this.signal
            }).then(async u => {
                var c, f, h, d;
                let w = null
                  , m = null
                  , y = null
                  , g = u.status
                  , p = u.statusText;
                if (u.ok) {
                    if (this.method !== "HEAD") {
                        const E = await u.text();
                        E === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((c = this.headers.get("Accept")) === null || c === void 0) && c.includes("application/vnd.pgrst.plan+text")) ? m = E : m = JSON.parse(E))
                    }
                    const _ = (f = this.headers.get("Prefer")) === null || f === void 0 ? void 0 : f.match(/count=(exact|planned|estimated)/)
                      , S = (h = u.headers.get("content-range")) === null || h === void 0 ? void 0 : h.split("/");
                    _ && S && S.length > 1 && (y = parseInt(S[1])),
                    this.isMaybeSingle && this.method === "GET" && Array.isArray(m) && (m.length > 1 ? (w = {
                        code: "PGRST116",
                        details: `Results contain ${m.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                        hint: null,
                        message: "JSON object requested, multiple (or no) rows returned"
                    },
                    m = null,
                    y = null,
                    g = 406,
                    p = "Not Acceptable") : m.length === 1 ? m = m[0] : m = null)
                } else {
                    const _ = await u.text();
                    try {
                        w = JSON.parse(_),
                        Array.isArray(w) && u.status === 404 && (m = [],
                        w = null,
                        g = 200,
                        p = "OK")
                    } catch {
                        u.status === 404 && _ === "" ? (g = 204,
                        p = "No Content") : w = {
                            message: _
                        }
                    }
                    if (w && this.isMaybeSingle && (!((d = w == null ? void 0 : w.details) === null || d === void 0) && d.includes("0 rows")) && (w = null,
                    g = 200,
                    p = "OK"),
                    w && this.shouldThrowOnError)
                        throw new r.default(w)
                }
                return {
                    error: w,
                    data: m,
                    count: y,
                    status: g,
                    statusText: p
                }
            }
            );
            return this.shouldThrowOnError || (l = l.catch(u => {
                var c, f, h;
                return {
                    error: {
                        message: `${(c = u == null ? void 0 : u.name) !== null && c !== void 0 ? c : "FetchError"}: ${u == null ? void 0 : u.message}`,
                        details: `${(f = u == null ? void 0 : u.stack) !== null && f !== void 0 ? f : ""}`,
                        hint: "",
                        code: `${(h = u == null ? void 0 : u.code) !== null && h !== void 0 ? h : ""}`
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ""
                }
            }
            )),
            l.then(i, o)
        }
        returns() {
            return this
        }
        overrideTypes() {
            return this
        }
    }
    return Do.default = n,
    Do
}
var dp;
function y0() {
    if (dp)
        return $o;
    dp = 1,
    Object.defineProperty($o, "__esModule", {
        value: !0
    });
    const e = Ks.__importDefault(v0());
    class r extends e.default {
        select(s) {
            let i = !1;
            const o = (s ?? "*").split("").map(a => /\s/.test(a) && !i ? "" : (a === '"' && (i = !i),
            a)).join("");
            return this.url.searchParams.set("select", o),
            this.headers.append("Prefer", "return=representation"),
            this
        }
        order(s, {ascending: i=!0, nullsFirst: o, foreignTable: a, referencedTable: l=a}={}) {
            const u = l ? `${l}.order` : "order"
              , c = this.url.searchParams.get(u);
            return this.url.searchParams.set(u, `${c ? `${c},` : ""}${s}.${i ? "asc" : "desc"}${o === void 0 ? "" : o ? ".nullsfirst" : ".nullslast"}`),
            this
        }
        limit(s, {foreignTable: i, referencedTable: o=i}={}) {
            const a = typeof o > "u" ? "limit" : `${o}.limit`;
            return this.url.searchParams.set(a, `${s}`),
            this
        }
        range(s, i, {foreignTable: o, referencedTable: a=o}={}) {
            const l = typeof a > "u" ? "offset" : `${a}.offset`
              , u = typeof a > "u" ? "limit" : `${a}.limit`;
            return this.url.searchParams.set(l, `${s}`),
            this.url.searchParams.set(u, `${i - s + 1}`),
            this
        }
        abortSignal(s) {
            return this.signal = s,
            this
        }
        single() {
            return this.headers.set("Accept", "application/vnd.pgrst.object+json"),
            this
        }
        maybeSingle() {
            return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
            this.isMaybeSingle = !0,
            this
        }
        csv() {
            return this.headers.set("Accept", "text/csv"),
            this
        }
        geojson() {
            return this.headers.set("Accept", "application/geo+json"),
            this
        }
        explain({analyze: s=!1, verbose: i=!1, settings: o=!1, buffers: a=!1, wal: l=!1, format: u="text"}={}) {
            var c;
            const f = [s ? "analyze" : null, i ? "verbose" : null, o ? "settings" : null, a ? "buffers" : null, l ? "wal" : null].filter(Boolean).join("|")
              , h = (c = this.headers.get("Accept")) !== null && c !== void 0 ? c : "application/json";
            return this.headers.set("Accept", `application/vnd.pgrst.plan+${u}; for="${h}"; options=${f};`),
            u === "json" ? this : this
        }
        rollback() {
            return this.headers.append("Prefer", "tx=rollback"),
            this
        }
        returns() {
            return this
        }
        maxAffected(s) {
            return this.headers.append("Prefer", "handling=strict"),
            this.headers.append("Prefer", `max-affected=${s}`),
            this
        }
    }
    return $o.default = r,
    $o
}
var fp;
function Yd() {
    if (fp)
        return Lo;
    fp = 1,
    Object.defineProperty(Lo, "__esModule", {
        value: !0
    });
    const e = Ks.__importDefault(y0());
    class r extends e.default {
        eq(s, i) {
            return this.url.searchParams.append(s, `eq.${i}`),
            this
        }
        neq(s, i) {
            return this.url.searchParams.append(s, `neq.${i}`),
            this
        }
        gt(s, i) {
            return this.url.searchParams.append(s, `gt.${i}`),
            this
        }
        gte(s, i) {
            return this.url.searchParams.append(s, `gte.${i}`),
            this
        }
        lt(s, i) {
            return this.url.searchParams.append(s, `lt.${i}`),
            this
        }
        lte(s, i) {
            return this.url.searchParams.append(s, `lte.${i}`),
            this
        }
        like(s, i) {
            return this.url.searchParams.append(s, `like.${i}`),
            this
        }
        likeAllOf(s, i) {
            return this.url.searchParams.append(s, `like(all).{${i.join(",")}}`),
            this
        }
        likeAnyOf(s, i) {
            return this.url.searchParams.append(s, `like(any).{${i.join(",")}}`),
            this
        }
        ilike(s, i) {
            return this.url.searchParams.append(s, `ilike.${i}`),
            this
        }
        ilikeAllOf(s, i) {
            return this.url.searchParams.append(s, `ilike(all).{${i.join(",")}}`),
            this
        }
        ilikeAnyOf(s, i) {
            return this.url.searchParams.append(s, `ilike(any).{${i.join(",")}}`),
            this
        }
        is(s, i) {
            return this.url.searchParams.append(s, `is.${i}`),
            this
        }
        in(s, i) {
            const o = Array.from(new Set(i)).map(a => typeof a == "string" && new RegExp("[,()]").test(a) ? `"${a}"` : `${a}`).join(",");
            return this.url.searchParams.append(s, `in.(${o})`),
            this
        }
        contains(s, i) {
            return typeof i == "string" ? this.url.searchParams.append(s, `cs.${i}`) : Array.isArray(i) ? this.url.searchParams.append(s, `cs.{${i.join(",")}}`) : this.url.searchParams.append(s, `cs.${JSON.stringify(i)}`),
            this
        }
        containedBy(s, i) {
            return typeof i == "string" ? this.url.searchParams.append(s, `cd.${i}`) : Array.isArray(i) ? this.url.searchParams.append(s, `cd.{${i.join(",")}}`) : this.url.searchParams.append(s, `cd.${JSON.stringify(i)}`),
            this
        }
        rangeGt(s, i) {
            return this.url.searchParams.append(s, `sr.${i}`),
            this
        }
        rangeGte(s, i) {
            return this.url.searchParams.append(s, `nxl.${i}`),
            this
        }
        rangeLt(s, i) {
            return this.url.searchParams.append(s, `sl.${i}`),
            this
        }
        rangeLte(s, i) {
            return this.url.searchParams.append(s, `nxr.${i}`),
            this
        }
        rangeAdjacent(s, i) {
            return this.url.searchParams.append(s, `adj.${i}`),
            this
        }
        overlaps(s, i) {
            return typeof i == "string" ? this.url.searchParams.append(s, `ov.${i}`) : this.url.searchParams.append(s, `ov.{${i.join(",")}}`),
            this
        }
        textSearch(s, i, {config: o, type: a}={}) {
            let l = "";
            a === "plain" ? l = "pl" : a === "phrase" ? l = "ph" : a === "websearch" && (l = "w");
            const u = o === void 0 ? "" : `(${o})`;
            return this.url.searchParams.append(s, `${l}fts${u}.${i}`),
            this
        }
        match(s) {
            return Object.entries(s).forEach( ([i,o]) => {
                this.url.searchParams.append(i, `eq.${o}`)
            }
            ),
            this
        }
        not(s, i, o) {
            return this.url.searchParams.append(s, `not.${i}.${o}`),
            this
        }
        or(s, {foreignTable: i, referencedTable: o=i}={}) {
            const a = o ? `${o}.or` : "or";
            return this.url.searchParams.append(a, `(${s})`),
            this
        }
        filter(s, i, o) {
            return this.url.searchParams.append(s, `${i}.${o}`),
            this
        }
    }
    return Lo.default = r,
    Lo
}
var hp;
function w0() {
    if (hp)
        return Io;
    hp = 1,
    Object.defineProperty(Io, "__esModule", {
        value: !0
    });
    const e = Ks.__importDefault(Yd());
    class r {
        constructor(s, {headers: i={}, schema: o, fetch: a}) {
            this.url = s,
            this.headers = new Headers(i),
            this.schema = o,
            this.fetch = a
        }
        select(s, i) {
            const {head: o=!1, count: a} = i ?? {}
              , l = o ? "HEAD" : "GET";
            let u = !1;
            const c = (s ?? "*").split("").map(f => /\s/.test(f) && !u ? "" : (f === '"' && (u = !u),
            f)).join("");
            return this.url.searchParams.set("select", c),
            a && this.headers.append("Prefer", `count=${a}`),
            new e.default({
                method: l,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                fetch: this.fetch
            })
        }
        insert(s, {count: i, defaultToNull: o=!0}={}) {
            var a;
            const l = "POST";
            if (i && this.headers.append("Prefer", `count=${i}`),
            o || this.headers.append("Prefer", "missing=default"),
            Array.isArray(s)) {
                const u = s.reduce( (c, f) => c.concat(Object.keys(f)), []);
                if (u.length > 0) {
                    const c = [...new Set(u)].map(f => `"${f}"`);
                    this.url.searchParams.set("columns", c.join(","))
                }
            }
            return new e.default({
                method: l,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: s,
                fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch
            })
        }
        upsert(s, {onConflict: i, ignoreDuplicates: o=!1, count: a, defaultToNull: l=!0}={}) {
            var u;
            const c = "POST";
            if (this.headers.append("Prefer", `resolution=${o ? "ignore" : "merge"}-duplicates`),
            i !== void 0 && this.url.searchParams.set("on_conflict", i),
            a && this.headers.append("Prefer", `count=${a}`),
            l || this.headers.append("Prefer", "missing=default"),
            Array.isArray(s)) {
                const f = s.reduce( (h, d) => h.concat(Object.keys(d)), []);
                if (f.length > 0) {
                    const h = [...new Set(f)].map(d => `"${d}"`);
                    this.url.searchParams.set("columns", h.join(","))
                }
            }
            return new e.default({
                method: c,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: s,
                fetch: (u = this.fetch) !== null && u !== void 0 ? u : fetch
            })
        }
        update(s, {count: i}={}) {
            var o;
            const a = "PATCH";
            return i && this.headers.append("Prefer", `count=${i}`),
            new e.default({
                method: a,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: s,
                fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch
            })
        }
        delete({count: s}={}) {
            var i;
            const o = "DELETE";
            return s && this.headers.append("Prefer", `count=${s}`),
            new e.default({
                method: o,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch
            })
        }
    }
    return Io.default = r,
    Io
}
var pp;
function gC() {
    if (pp)
        return No;
    pp = 1,
    Object.defineProperty(No, "__esModule", {
        value: !0
    });
    const t = Ks
      , e = t.__importDefault(w0())
      , r = t.__importDefault(Yd());
    class n {
        constructor(i, {headers: o={}, schema: a, fetch: l}={}) {
            this.url = i,
            this.headers = new Headers(o),
            this.schemaName = a,
            this.fetch = l
        }
        from(i) {
            const o = new URL(`${this.url}/${i}`);
            return new e.default(o,{
                headers: new Headers(this.headers),
                schema: this.schemaName,
                fetch: this.fetch
            })
        }
        schema(i) {
            return new n(this.url,{
                headers: this.headers,
                schema: i,
                fetch: this.fetch
            })
        }
        rpc(i, o={}, {head: a=!1, get: l=!1, count: u}={}) {
            var c;
            let f;
            const h = new URL(`${this.url}/rpc/${i}`);
            let d;
            a || l ? (f = a ? "HEAD" : "GET",
            Object.entries(o).filter( ([m,y]) => y !== void 0).map( ([m,y]) => [m, Array.isArray(y) ? `{${y.join(",")}}` : `${y}`]).forEach( ([m,y]) => {
                h.searchParams.append(m, y)
            }
            )) : (f = "POST",
            d = o);
            const w = new Headers(this.headers);
            return u && w.set("Prefer", `count=${u}`),
            new r.default({
                method: f,
                url: h,
                headers: w,
                schema: this.schemaName,
                body: d,
                fetch: (c = this.fetch) !== null && c !== void 0 ? c : fetch
            })
        }
    }
    return No.default = n,
    No
}
Object.defineProperty(Qe, "__esModule", {
    value: !0
});
Qe.PostgrestError = Qe.PostgrestBuilder = Qe.PostgrestTransformBuilder = Qe.PostgrestFilterBuilder = Qe.PostgrestQueryBuilder = Qe.PostgrestClient = void 0;
const Gs = Ks
  , x0 = Gs.__importDefault(gC());
Qe.PostgrestClient = x0.default;
const b0 = Gs.__importDefault(w0());
Qe.PostgrestQueryBuilder = b0.default;
const _0 = Gs.__importDefault(Yd());
Qe.PostgrestFilterBuilder = _0.default;
const S0 = Gs.__importDefault(y0());
Qe.PostgrestTransformBuilder = S0.default;
const E0 = Gs.__importDefault(v0());
Qe.PostgrestBuilder = E0.default;
const k0 = Gs.__importDefault(g0());
Qe.PostgrestError = k0.default;
var vC = Qe.default = {
    PostgrestClient: x0.default,
    PostgrestQueryBuilder: b0.default,
    PostgrestFilterBuilder: _0.default,
    PostgrestTransformBuilder: S0.default,
    PostgrestBuilder: E0.default,
    PostgrestError: k0.default
};
const {PostgrestClient: yC, PostgrestQueryBuilder: VP, PostgrestFilterBuilder: WP, PostgrestTransformBuilder: HP, PostgrestBuilder: qP, PostgrestError: KP} = vC;
class wC {
    static detectEnvironment() {
        var e;
        if (typeof WebSocket < "u")
            return {
                type: "native",
                constructor: WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
            return {
                type: "native",
                constructor: globalThis.WebSocket
            };
        if (typeof global < "u" && typeof global.WebSocket < "u")
            return {
                type: "native",
                constructor: global.WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
            return {
                type: "cloudflare",
                error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
                workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
            };
        if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge")))
            return {
                type: "unsupported",
                error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
                workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
            };
        if (typeof process < "u") {
            const r = process.versions;
            if (r && r.node) {
                const n = r.node
                  , s = parseInt(n.replace(/^v/, "").split(".")[0]);
                return s >= 22 ? typeof globalThis.WebSocket < "u" ? {
                    type: "native",
                    constructor: globalThis.WebSocket
                } : {
                    type: "unsupported",
                    error: `Node.js ${s} detected but native WebSocket not found.`,
                    workaround: "Provide a WebSocket implementation via the transport option."
                } : {
                    type: "unsupported",
                    error: `Node.js ${s} detected without native WebSocket support.`,
                    workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
                }
            }
        }
        return {
            type: "unsupported",
            error: "Unknown JavaScript runtime without WebSocket support.",
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        }
    }
    static getWebSocketConstructor() {
        const e = this.detectEnvironment();
        if (e.constructor)
            return e.constructor;
        let r = e.error || "WebSocket not supported in this environment.";
        throw e.workaround && (r += `

Suggested solution: ${e.workaround}`),
        new Error(r)
    }
    static createWebSocket(e, r) {
        const n = this.getWebSocketConstructor();
        return new n(e,r)
    }
    static isWebSocketSupported() {
        try {
            const e = this.detectEnvironment();
            return e.type === "native" || e.type === "ws"
        } catch {
            return !1
        }
    }
}
const xC = "2.76.1"
  , bC = `realtime-js/${xC}`
  , _C = "1.0.0"
  , bc = 1e4
  , SC = 1e3
  , EC = 100;
var _i;
(function(t) {
    t[t.connecting = 0] = "connecting",
    t[t.open = 1] = "open",
    t[t.closing = 2] = "closing",
    t[t.closed = 3] = "closed"
}
)(_i || (_i = {}));
var _e;
(function(t) {
    t.closed = "closed",
    t.errored = "errored",
    t.joined = "joined",
    t.joining = "joining",
    t.leaving = "leaving"
}
)(_e || (_e = {}));
var At;
(function(t) {
    t.close = "phx_close",
    t.error = "phx_error",
    t.join = "phx_join",
    t.reply = "phx_reply",
    t.leave = "phx_leave",
    t.access_token = "access_token"
}
)(At || (At = {}));
var _c;
(function(t) {
    t.websocket = "websocket"
}
)(_c || (_c = {}));
var pn;
(function(t) {
    t.Connecting = "connecting",
    t.Open = "open",
    t.Closing = "closing",
    t.Closed = "closed"
}
)(pn || (pn = {}));
class kC {
    constructor() {
        this.HEADER_LENGTH = 1
    }
    decode(e, r) {
        return e.constructor === ArrayBuffer ? r(this._binaryDecode(e)) : r(typeof e == "string" ? JSON.parse(e) : {})
    }
    _binaryDecode(e) {
        const r = new DataView(e)
          , n = new TextDecoder;
        return this._decodeBroadcast(e, r, n)
    }
    _decodeBroadcast(e, r, n) {
        const s = r.getUint8(1)
          , i = r.getUint8(2);
        let o = this.HEADER_LENGTH + 2;
        const a = n.decode(e.slice(o, o + s));
        o = o + s;
        const l = n.decode(e.slice(o, o + i));
        o = o + i;
        const u = JSON.parse(n.decode(e.slice(o, e.byteLength)));
        return {
            ref: null,
            topic: a,
            event: l,
            payload: u
        }
    }
}
class C0 {
    constructor(e, r) {
        this.callback = e,
        this.timerCalc = r,
        this.timer = void 0,
        this.tries = 0,
        this.callback = e,
        this.timerCalc = r
    }
    reset() {
        this.tries = 0,
        clearTimeout(this.timer),
        this.timer = void 0
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
        this.timer = setTimeout( () => {
            this.tries = this.tries + 1,
            this.callback()
        }
        , this.timerCalc(this.tries + 1))
    }
}
var ie;
(function(t) {
    t.abstime = "abstime",
    t.bool = "bool",
    t.date = "date",
    t.daterange = "daterange",
    t.float4 = "float4",
    t.float8 = "float8",
    t.int2 = "int2",
    t.int4 = "int4",
    t.int4range = "int4range",
    t.int8 = "int8",
    t.int8range = "int8range",
    t.json = "json",
    t.jsonb = "jsonb",
    t.money = "money",
    t.numeric = "numeric",
    t.oid = "oid",
    t.reltime = "reltime",
    t.text = "text",
    t.time = "time",
    t.timestamp = "timestamp",
    t.timestamptz = "timestamptz",
    t.timetz = "timetz",
    t.tsrange = "tsrange",
    t.tstzrange = "tstzrange"
}
)(ie || (ie = {}));
const mp = (t, e, r={}) => {
    var n;
    const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
    return e ? Object.keys(e).reduce( (i, o) => (i[o] = CC(o, t, e, s),
    i), {}) : {}
}
  , CC = (t, e, r, n) => {
    const s = e.find(a => a.name === t)
      , i = s == null ? void 0 : s.type
      , o = r[t];
    return i && !n.includes(i) ? T0(i, o) : Sc(o)
}
  , T0 = (t, e) => {
    if (t.charAt(0) === "_") {
        const r = t.slice(1, t.length);
        return jC(e, r)
    }
    switch (t) {
    case ie.bool:
        return TC(e);
    case ie.float4:
    case ie.float8:
    case ie.int2:
    case ie.int4:
    case ie.int8:
    case ie.numeric:
    case ie.oid:
        return PC(e);
    case ie.json:
    case ie.jsonb:
        return OC(e);
    case ie.timestamp:
        return RC(e);
    case ie.abstime:
    case ie.date:
    case ie.daterange:
    case ie.int4range:
    case ie.int8range:
    case ie.money:
    case ie.reltime:
    case ie.text:
    case ie.time:
    case ie.timestamptz:
    case ie.timetz:
    case ie.tsrange:
    case ie.tstzrange:
        return Sc(e);
    default:
        return Sc(e)
    }
}
  , Sc = t => t
  , TC = t => {
    switch (t) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return t
    }
}
  , PC = t => {
    if (typeof t == "string") {
        const e = parseFloat(t);
        if (!Number.isNaN(e))
            return e
    }
    return t
}
  , OC = t => {
    if (typeof t == "string")
        try {
            return JSON.parse(t)
        } catch (e) {
            return console.log(`JSON parse error: ${e}`),
            t
        }
    return t
}
  , jC = (t, e) => {
    if (typeof t != "string")
        return t;
    const r = t.length - 1
      , n = t[r];
    if (t[0] === "{" && n === "}") {
        let i;
        const o = t.slice(1, r);
        try {
            i = JSON.parse("[" + o + "]")
        } catch {
            i = o ? o.split(",") : []
        }
        return i.map(a => T0(e, a))
    }
    return t
}
  , RC = t => typeof t == "string" ? t.replace(" ", "T") : t
  , P0 = t => {
    const e = new URL(t);
    return e.protocol = e.protocol.replace(/^ws/i, "http"),
    e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""),
    e.pathname === "" || e.pathname === "/" ? e.pathname = "/api/broadcast" : e.pathname = e.pathname + "/api/broadcast",
    e.href
}
;
class tu {
    constructor(e, r, n={}, s=bc) {
        this.channel = e,
        this.event = r,
        this.payload = n,
        this.timeout = s,
        this.sent = !1,
        this.timeoutTimer = void 0,
        this.ref = "",
        this.receivedResp = null,
        this.recHooks = [],
        this.refEvent = null
    }
    resend(e) {
        this.timeout = e,
        this._cancelRefEvent(),
        this.ref = "",
        this.refEvent = null,
        this.receivedResp = null,
        this.sent = !1,
        this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(e) {
        this.payload = Object.assign(Object.assign({}, this.payload), e)
    }
    receive(e, r) {
        var n;
        return this._hasReceived(e) && r((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response),
        this.recHooks.push({
            status: e,
            callback: r
        }),
        this
    }
    startTimeout() {
        if (this.timeoutTimer)
            return;
        this.ref = this.channel.socket._makeRef(),
        this.refEvent = this.channel._replyEventName(this.ref);
        const e = r => {
            this._cancelRefEvent(),
            this._cancelTimeout(),
            this.receivedResp = r,
            this._matchReceive(r)
        }
        ;
        this.channel._on(this.refEvent, {}, e),
        this.timeoutTimer = setTimeout( () => {
            this.trigger("timeout", {})
        }
        , this.timeout)
    }
    trigger(e, r) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: e,
            response: r
        })
    }
    destroy() {
        this._cancelRefEvent(),
        this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer),
        this.timeoutTimer = void 0
    }
    _matchReceive({status: e, response: r}) {
        this.recHooks.filter(n => n.status === e).forEach(n => n.callback(r))
    }
    _hasReceived(e) {
        return this.receivedResp && this.receivedResp.status === e
    }
}
var gp;
(function(t) {
    t.SYNC = "sync",
    t.JOIN = "join",
    t.LEAVE = "leave"
}
)(gp || (gp = {}));
class Si {
    constructor(e, r) {
        this.channel = e,
        this.state = {},
        this.pendingDiffs = [],
        this.joinRef = null,
        this.enabled = !1,
        this.caller = {
            onJoin: () => {}
            ,
            onLeave: () => {}
            ,
            onSync: () => {}
        };
        const n = (r == null ? void 0 : r.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(n.state, {}, s => {
            const {onJoin: i, onLeave: o, onSync: a} = this.caller;
            this.joinRef = this.channel._joinRef(),
            this.state = Si.syncState(this.state, s, i, o),
            this.pendingDiffs.forEach(l => {
                this.state = Si.syncDiff(this.state, l, i, o)
            }
            ),
            this.pendingDiffs = [],
            a()
        }
        ),
        this.channel._on(n.diff, {}, s => {
            const {onJoin: i, onLeave: o, onSync: a} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = Si.syncDiff(this.state, s, i, o),
            a())
        }
        ),
        this.onJoin( (s, i, o) => {
            this.channel._trigger("presence", {
                event: "join",
                key: s,
                currentPresences: i,
                newPresences: o
            })
        }
        ),
        this.onLeave( (s, i, o) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: s,
                currentPresences: i,
                leftPresences: o
            })
        }
        ),
        this.onSync( () => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        }
        )
    }
    static syncState(e, r, n, s) {
        const i = this.cloneDeep(e)
          , o = this.transformState(r)
          , a = {}
          , l = {};
        return this.map(i, (u, c) => {
            o[u] || (l[u] = c)
        }
        ),
        this.map(o, (u, c) => {
            const f = i[u];
            if (f) {
                const h = c.map(y => y.presence_ref)
                  , d = f.map(y => y.presence_ref)
                  , w = c.filter(y => d.indexOf(y.presence_ref) < 0)
                  , m = f.filter(y => h.indexOf(y.presence_ref) < 0);
                w.length > 0 && (a[u] = w),
                m.length > 0 && (l[u] = m)
            } else
                a[u] = c
        }
        ),
        this.syncDiff(i, {
            joins: a,
            leaves: l
        }, n, s)
    }
    static syncDiff(e, r, n, s) {
        const {joins: i, leaves: o} = {
            joins: this.transformState(r.joins),
            leaves: this.transformState(r.leaves)
        };
        return n || (n = () => {}
        ),
        s || (s = () => {}
        ),
        this.map(i, (a, l) => {
            var u;
            const c = (u = e[a]) !== null && u !== void 0 ? u : [];
            if (e[a] = this.cloneDeep(l),
            c.length > 0) {
                const f = e[a].map(d => d.presence_ref)
                  , h = c.filter(d => f.indexOf(d.presence_ref) < 0);
                e[a].unshift(...h)
            }
            n(a, c, l)
        }
        ),
        this.map(o, (a, l) => {
            let u = e[a];
            if (!u)
                return;
            const c = l.map(f => f.presence_ref);
            u = u.filter(f => c.indexOf(f.presence_ref) < 0),
            e[a] = u,
            s(a, u, l),
            u.length === 0 && delete e[a]
        }
        ),
        e
    }
    static map(e, r) {
        return Object.getOwnPropertyNames(e).map(n => r(n, e[n]))
    }
    static transformState(e) {
        return e = this.cloneDeep(e),
        Object.getOwnPropertyNames(e).reduce( (r, n) => {
            const s = e[n];
            return "metas"in s ? r[n] = s.metas.map(i => (i.presence_ref = i.phx_ref,
            delete i.phx_ref,
            delete i.phx_ref_prev,
            i)) : r[n] = s,
            r
        }
        , {})
    }
    static cloneDeep(e) {
        return JSON.parse(JSON.stringify(e))
    }
    onJoin(e) {
        this.caller.onJoin = e
    }
    onLeave(e) {
        this.caller.onLeave = e
    }
    onSync(e) {
        this.caller.onSync = e
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var vp;
(function(t) {
    t.ALL = "*",
    t.INSERT = "INSERT",
    t.UPDATE = "UPDATE",
    t.DELETE = "DELETE"
}
)(vp || (vp = {}));
var Ei;
(function(t) {
    t.BROADCAST = "broadcast",
    t.PRESENCE = "presence",
    t.POSTGRES_CHANGES = "postgres_changes",
    t.SYSTEM = "system"
}
)(Ei || (Ei = {}));
var tr;
(function(t) {
    t.SUBSCRIBED = "SUBSCRIBED",
    t.TIMED_OUT = "TIMED_OUT",
    t.CLOSED = "CLOSED",
    t.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(tr || (tr = {}));
class Xd {
    constructor(e, r={
        config: {}
    }, n) {
        var s, i;
        if (this.topic = e,
        this.params = r,
        this.socket = n,
        this.bindings = {},
        this.state = _e.closed,
        this.joinedOnce = !1,
        this.pushBuffer = [],
        this.subTopic = e.replace(/^realtime:/i, ""),
        this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: "",
                enabled: !1
            },
            private: !1
        }, r.config),
        this.timeout = this.socket.timeout,
        this.joinPush = new tu(this,At.join,this.params,this.timeout),
        this.rejoinTimer = new C0( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
        this.joinPush.receive("ok", () => {
            this.state = _e.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(o => o.send()),
            this.pushBuffer = []
        }
        ),
        this._onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
            this.state = _e.closed,
            this.socket._remove(this)
        }
        ),
        this._onError(o => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o),
            this.state = _e.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            this.state = _e.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("error", o => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o),
            this.state = _e.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this._on(At.reply, {}, (o, a) => {
            this._trigger(this._replyEventName(a), o)
        }
        ),
        this.presence = new Si(this),
        this.broadcastEndpointURL = P0(this.socket.endPoint),
        this.private = this.params.config.private || !1,
        !this.private && (!((i = (s = this.params.config) === null || s === void 0 ? void 0 : s.broadcast) === null || i === void 0) && i.replay))
            throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`
    }
    subscribe(e, r=this.timeout) {
        var n, s, i;
        if (this.socket.isConnected() || this.socket.connect(),
        this.state == _e.closed) {
            const {config: {broadcast: o, presence: a, private: l}} = this.params
              , u = (s = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map(d => d.filter)) !== null && s !== void 0 ? s : []
              , c = !!this.bindings[Ei.PRESENCE] && this.bindings[Ei.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0
              , f = {}
              , h = {
                broadcast: o,
                presence: Object.assign(Object.assign({}, a), {
                    enabled: c
                }),
                postgres_changes: u,
                private: l
            };
            this.socket.accessTokenValue && (f.access_token = this.socket.accessTokenValue),
            this._onError(d => e == null ? void 0 : e(tr.CHANNEL_ERROR, d)),
            this._onClose( () => e == null ? void 0 : e(tr.CLOSED)),
            this.updateJoinPayload(Object.assign({
                config: h
            }, f)),
            this.joinedOnce = !0,
            this._rejoin(r),
            this.joinPush.receive("ok", async ({postgres_changes: d}) => {
                var w;
                if (this.socket.setAuth(),
                d === void 0) {
                    e == null || e(tr.SUBSCRIBED);
                    return
                } else {
                    const m = this.bindings.postgres_changes
                      , y = (w = m == null ? void 0 : m.length) !== null && w !== void 0 ? w : 0
                      , g = [];
                    for (let p = 0; p < y; p++) {
                        const v = m[p]
                          , {filter: {event: _, schema: S, table: E, filter: k}} = v
                          , P = d && d[p];
                        if (P && P.event === _ && P.schema === S && P.table === E && P.filter === k)
                            g.push(Object.assign(Object.assign({}, v), {
                                id: P.id
                            }));
                        else {
                            this.unsubscribe(),
                            this.state = _e.errored,
                            e == null || e(tr.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = g,
                    e && e(tr.SUBSCRIBED);
                    return
                }
            }
            ).receive("error", d => {
                this.state = _e.errored,
                e == null || e(tr.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(d).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                e == null || e(tr.TIMED_OUT)
            }
            )
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(e, r={}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: e
        }, r.timeout || this.timeout)
    }
    async untrack(e={}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, e)
    }
    on(e, r, n) {
        return this.state === _e.joined && e === Ei.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),
        this.unsubscribe().then( () => this.subscribe())),
        this._on(e, r, n)
    }
    async httpSend(e, r, n={}) {
        var s;
        const i = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "";
        if (r == null)
            return Promise.reject("Payload is required for httpSend()");
        const o = {
            method: "POST",
            headers: {
                Authorization: i,
                apikey: this.socket.apiKey ? this.socket.apiKey : "",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: [{
                    topic: this.subTopic,
                    event: e,
                    payload: r,
                    private: this.private
                }]
            })
        }
          , a = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (s = n.timeout) !== null && s !== void 0 ? s : this.timeout);
        if (a.status === 202)
            return {
                success: !0
            };
        let l = a.statusText;
        try {
            const u = await a.json();
            l = u.error || u.message || l
        } catch {}
        return Promise.reject(new Error(l))
    }
    async send(e, r={}) {
        var n, s;
        if (!this._canPush() && e.type === "broadcast") {
            console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
            const {event: i, payload: o} = e
              , l = {
                method: "POST",
                headers: {
                    Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: i,
                        payload: o,
                        private: this.private
                    }]
                })
            };
            try {
                const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
                return await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()),
                u.ok ? "ok" : "error"
            } catch (u) {
                return u.name === "AbortError" ? "timed out" : "error"
            }
        } else
            return new Promise(i => {
                var o, a, l;
                const u = this._push(e.type, e, r.timeout || this.timeout);
                e.type === "broadcast" && !(!((l = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && i("ok"),
                u.receive("ok", () => i("ok")),
                u.receive("error", () => i("error")),
                u.receive("timeout", () => i("timed out"))
            }
            )
    }
    updateJoinPayload(e) {
        this.joinPush.updatePayload(e)
    }
    unsubscribe(e=this.timeout) {
        this.state = _e.leaving;
        const r = () => {
            this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(At.close, "leave", this._joinRef())
        }
        ;
        this.joinPush.destroy();
        let n = null;
        return new Promise(s => {
            n = new tu(this,At.leave,{},e),
            n.receive("ok", () => {
                r(),
                s("ok")
            }
            ).receive("timeout", () => {
                r(),
                s("timed out")
            }
            ).receive("error", () => {
                s("error")
            }
            ),
            n.send(),
            this._canPush() || n.trigger("ok", {})
        }
        ).finally( () => {
            n == null || n.destroy()
        }
        )
    }
    teardown() {
        this.pushBuffer.forEach(e => e.destroy()),
        this.pushBuffer = [],
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        this.state = _e.closed,
        this.bindings = {}
    }
    async _fetchWithTimeout(e, r, n) {
        const s = new AbortController
          , i = setTimeout( () => s.abort(), n)
          , o = await this.socket.fetch(e, Object.assign(Object.assign({}, r), {
            signal: s.signal
        }));
        return clearTimeout(i),
        o
    }
    _push(e, r, n=this.timeout) {
        if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let s = new tu(this,e,r,n);
        return this._canPush() ? s.send() : this._addToPushBuffer(s),
        s
    }
    _addToPushBuffer(e) {
        if (e.startTimeout(),
        this.pushBuffer.push(e),
        this.pushBuffer.length > EC) {
            const r = this.pushBuffer.shift();
            r && (r.destroy(),
            this.socket.log("channel", `discarded push due to buffer overflow: ${r.event}`, r.payload))
        }
    }
    _onMessage(e, r, n) {
        return r
    }
    _isMember(e) {
        return this.topic === e
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(e, r, n) {
        var s, i;
        const o = e.toLocaleLowerCase()
          , {close: a, error: l, leave: u, join: c} = At;
        if (n && [a, l, u, c].indexOf(o) >= 0 && n !== this._joinRef())
            return;
        let h = this._onMessage(o, r, n);
        if (r && !h)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(o) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter(d => {
            var w, m, y;
            return ((w = d.filter) === null || w === void 0 ? void 0 : w.event) === "*" || ((y = (m = d.filter) === null || m === void 0 ? void 0 : m.event) === null || y === void 0 ? void 0 : y.toLocaleLowerCase()) === o
        }
        ).map(d => d.callback(h, n)) : (i = this.bindings[o]) === null || i === void 0 || i.filter(d => {
            var w, m, y, g, p, v;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
                if ("id"in d) {
                    const _ = d.id
                      , S = (w = d.filter) === null || w === void 0 ? void 0 : w.event;
                    return _ && ((m = r.ids) === null || m === void 0 ? void 0 : m.includes(_)) && (S === "*" || (S == null ? void 0 : S.toLocaleLowerCase()) === ((y = r.data) === null || y === void 0 ? void 0 : y.type.toLocaleLowerCase()))
                } else {
                    const _ = (p = (g = d == null ? void 0 : d.filter) === null || g === void 0 ? void 0 : g.event) === null || p === void 0 ? void 0 : p.toLocaleLowerCase();
                    return _ === "*" || _ === ((v = r == null ? void 0 : r.event) === null || v === void 0 ? void 0 : v.toLocaleLowerCase())
                }
            else
                return d.type.toLocaleLowerCase() === o
        }
        ).map(d => {
            if (typeof h == "object" && "ids"in h) {
                const w = h.data
                  , {schema: m, table: y, commit_timestamp: g, type: p, errors: v} = w;
                h = Object.assign(Object.assign({}, {
                    schema: m,
                    table: y,
                    commit_timestamp: g,
                    eventType: p,
                    new: {},
                    old: {},
                    errors: v
                }), this._getPayloadRecords(w))
            }
            d.callback(h, n)
        }
        )
    }
    _isClosed() {
        return this.state === _e.closed
    }
    _isJoined() {
        return this.state === _e.joined
    }
    _isJoining() {
        return this.state === _e.joining
    }
    _isLeaving() {
        return this.state === _e.leaving
    }
    _replyEventName(e) {
        return `chan_reply_${e}`
    }
    _on(e, r, n) {
        const s = e.toLocaleLowerCase()
          , i = {
            type: s,
            filter: r,
            callback: n
        };
        return this.bindings[s] ? this.bindings[s].push(i) : this.bindings[s] = [i],
        this
    }
    _off(e, r) {
        const n = e.toLocaleLowerCase();
        return this.bindings[n] && (this.bindings[n] = this.bindings[n].filter(s => {
            var i;
            return !(((i = s.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === n && Xd.isEqual(s.filter, r))
        }
        )),
        this
    }
    static isEqual(e, r) {
        if (Object.keys(e).length !== Object.keys(r).length)
            return !1;
        for (const n in e)
            if (e[n] !== r[n])
                return !1;
        return !0
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin()
    }
    _onClose(e) {
        this._on(At.close, {}, e)
    }
    _onError(e) {
        this._on(At.error, {}, r => e(r))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(e=this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
        this.state = _e.joining,
        this.joinPush.resend(e))
    }
    _getPayloadRecords(e) {
        const r = {
            new: {},
            old: {}
        };
        return (e.type === "INSERT" || e.type === "UPDATE") && (r.new = mp(e.columns, e.record)),
        (e.type === "UPDATE" || e.type === "DELETE") && (r.old = mp(e.columns, e.old_record)),
        r
    }
}
const ru = () => {}
  , Fo = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
}
  , AC = [1e3, 2e3, 5e3, 1e4]
  , NC = 1e4
  , IC = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class LC {
    constructor(e, r) {
        var n;
        if (this.accessTokenValue = null,
        this.apiKey = null,
        this.channels = new Array,
        this.endPoint = "",
        this.httpEndpoint = "",
        this.headers = {},
        this.params = {},
        this.timeout = bc,
        this.transport = null,
        this.heartbeatIntervalMs = Fo.HEARTBEAT_INTERVAL,
        this.heartbeatTimer = void 0,
        this.pendingHeartbeatRef = null,
        this.heartbeatCallback = ru,
        this.ref = 0,
        this.reconnectTimer = null,
        this.logger = ru,
        this.conn = null,
        this.sendBuffer = [],
        this.serializer = new kC,
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        },
        this.accessToken = null,
        this._connectionState = "disconnected",
        this._wasManualDisconnect = !1,
        this._authPromise = null,
        this._resolveFetch = s => {
            let i;
            return s ? i = s : typeof fetch > "u" ? i = (...o) => qs(async () => {
                const {default: a} = await Promise.resolve().then( () => $n);
                return {
                    default: a
                }
            }
            , void 0).then( ({default: a}) => a(...o)).catch(a => {
                throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`)
            }
            ) : i = fetch,
            (...o) => i(...o)
        }
        ,
        !(!((n = r == null ? void 0 : r.params) === null || n === void 0) && n.apikey))
            throw new Error("API key is required to connect to Realtime");
        this.apiKey = r.params.apikey,
        this.endPoint = `${e}/${_c.websocket}`,
        this.httpEndpoint = P0(e),
        this._initializeOptions(r),
        this._setupReconnectionTimer(),
        this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch)
    }
    connect() {
        if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
            if (this._setConnectionState("connecting"),
            this._setAuthSafely("connect"),
            this.transport)
                this.conn = new this.transport(this.endpointURL());
            else
                try {
                    this.conn = wC.createWebSocket(this.endpointURL())
                } catch (e) {
                    this._setConnectionState("disconnected");
                    const r = e.message;
                    throw r.includes("Node.js") ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${r}`)
                }
            this._setupConnectionHandlers()
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: _C
        }))
    }
    disconnect(e, r) {
        if (!this.isDisconnecting())
            if (this._setConnectionState("disconnecting", !0),
            this.conn) {
                const n = setTimeout( () => {
                    this._setConnectionState("disconnected")
                }
                , 100);
                this.conn.onclose = () => {
                    clearTimeout(n),
                    this._setConnectionState("disconnected")
                }
                ,
                e ? this.conn.close(e, r ?? "") : this.conn.close(),
                this._teardownConnection()
            } else
                this._setConnectionState("disconnected")
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(e) {
        const r = await e.unsubscribe();
        return this.channels.length === 0 && this.disconnect(),
        r
    }
    async removeAllChannels() {
        const e = await Promise.all(this.channels.map(r => r.unsubscribe()));
        return this.channels = [],
        this.disconnect(),
        e
    }
    log(e, r, n) {
        this.logger(e, r, n)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
        case _i.connecting:
            return pn.Connecting;
        case _i.open:
            return pn.Open;
        case _i.closing:
            return pn.Closing;
        default:
            return pn.Closed
        }
    }
    isConnected() {
        return this.connectionState() === pn.Open
    }
    isConnecting() {
        return this._connectionState === "connecting"
    }
    isDisconnecting() {
        return this._connectionState === "disconnecting"
    }
    channel(e, r={
        config: {}
    }) {
        const n = `realtime:${e}`
          , s = this.getChannels().find(i => i.topic === n);
        if (s)
            return s;
        {
            const i = new Xd(`realtime:${e}`,r,this);
            return this.channels.push(i),
            i
        }
    }
    push(e) {
        const {topic: r, event: n, payload: s, ref: i} = e
          , o = () => {
            this.encode(e, a => {
                var l;
                (l = this.conn) === null || l === void 0 || l.send(a)
            }
            )
        }
        ;
        this.log("push", `${r} ${n} (${i})`, s),
        this.isConnected() ? o() : this.sendBuffer.push(o)
    }
    async setAuth(e=null) {
        this._authPromise = this._performAuth(e);
        try {
            await this._authPromise
        } finally {
            this._authPromise = null
        }
    }
    async sendHeartbeat() {
        var e;
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback("disconnected")
            } catch (r) {
                this.log("error", "error in heartbeat callback", r)
            }
            return
        }
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null,
            this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            try {
                this.heartbeatCallback("timeout")
            } catch (r) {
                this.log("error", "error in heartbeat callback", r)
            }
            this._wasManualDisconnect = !1,
            (e = this.conn) === null || e === void 0 || e.close(SC, "heartbeat timeout"),
            setTimeout( () => {
                var r;
                this.isConnected() || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout()
            }
            , Fo.HEARTBEAT_TIMEOUT_FALLBACK);
            return
        }
        this.pendingHeartbeatRef = this._makeRef(),
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback("sent")
        } catch (r) {
            this.log("error", "error in heartbeat callback", r)
        }
        this._setAuthSafely("heartbeat")
    }
    onHeartbeat(e) {
        this.heartbeatCallback = e
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()),
        this.sendBuffer = [])
    }
    _makeRef() {
        let e = this.ref + 1;
        return e === this.ref ? this.ref = 0 : this.ref = e,
        this.ref.toString()
    }
    _leaveOpenTopic(e) {
        let r = this.channels.find(n => n.topic === e && (n._isJoined() || n._isJoining()));
        r && (this.log("transport", `leaving duplicate topic "${e}"`),
        r.unsubscribe())
    }
    _remove(e) {
        this.channels = this.channels.filter(r => r.topic !== e.topic)
    }
    _onConnMessage(e) {
        this.decode(e.data, r => {
            if (r.topic === "phoenix" && r.event === "phx_reply")
                try {
                    this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error")
                } catch (u) {
                    this.log("error", "error in heartbeat callback", u)
                }
            r.ref && r.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
            const {topic: n, event: s, payload: i, ref: o} = r
              , a = o ? `(${o})` : ""
              , l = i.status || "";
            this.log("receive", `${l} ${n} ${s} ${a}`.trim(), i),
            this.channels.filter(u => u._isMember(n)).forEach(u => u._trigger(s, i, o)),
            this._triggerStateCallbacks("message", r)
        }
        )
    }
    _clearTimer(e) {
        var r;
        e === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = void 0) : e === "reconnect" && ((r = this.reconnectTimer) === null || r === void 0 || r.reset())
    }
    _clearAllTimers() {
        this._clearTimer("heartbeat"),
        this._clearTimer("reconnect")
    }
    _setupConnectionHandlers() {
        this.conn && ("binaryType"in this.conn && (this.conn.binaryType = "arraybuffer"),
        this.conn.onopen = () => this._onConnOpen(),
        this.conn.onerror = e => this._onConnError(e),
        this.conn.onmessage = e => this._onConnMessage(e),
        this.conn.onclose = e => this._onConnClose(e))
    }
    _teardownConnection() {
        this.conn && (this.conn.onopen = null,
        this.conn.onerror = null,
        this.conn.onmessage = null,
        this.conn.onclose = null,
        this.conn = null),
        this._clearAllTimers(),
        this.channels.forEach(e => e.teardown())
    }
    _onConnOpen() {
        this._setConnectionState("connected"),
        this.log("transport", `connected to ${this.endpointURL()}`),
        this.flushSendBuffer(),
        this._clearTimer("reconnect"),
        this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(),
        this._triggerStateCallbacks("open")
    }
    _startHeartbeat() {
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = setInterval( () => this.sendHeartbeat(), this.heartbeatIntervalMs)
    }
    _startWorkerHeartbeat() {
        this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
        const e = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(e),
        this.workerRef.onerror = r => {
            this.log("worker", "worker error", r.message),
            this.workerRef.terminate()
        }
        ,
        this.workerRef.onmessage = r => {
            r.data.event === "keepAlive" && this.sendHeartbeat()
        }
        ,
        this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs
        })
    }
    _onConnClose(e) {
        var r;
        this._setConnectionState("disconnected"),
        this.log("transport", "close", e),
        this._triggerChanError(),
        this._clearTimer("heartbeat"),
        this._wasManualDisconnect || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout(),
        this._triggerStateCallbacks("close", e)
    }
    _onConnError(e) {
        this._setConnectionState("disconnected"),
        this.log("transport", `${e}`),
        this._triggerChanError(),
        this._triggerStateCallbacks("error", e)
    }
    _triggerChanError() {
        this.channels.forEach(e => e._trigger(At.error))
    }
    _appendParams(e, r) {
        if (Object.keys(r).length === 0)
            return e;
        const n = e.match(/\?/) ? "&" : "?"
          , s = new URLSearchParams(r);
        return `${e}${n}${s}`
    }
    _workerObjectUrl(e) {
        let r;
        if (e)
            r = e;
        else {
            const n = new Blob([IC],{
                type: "application/javascript"
            });
            r = URL.createObjectURL(n)
        }
        return r
    }
    _setConnectionState(e, r=!1) {
        this._connectionState = e,
        e === "connecting" ? this._wasManualDisconnect = !1 : e === "disconnecting" && (this._wasManualDisconnect = r)
    }
    async _performAuth(e=null) {
        let r;
        e ? r = e : this.accessToken ? r = await this.accessToken() : r = this.accessTokenValue,
        this.accessTokenValue != r && (this.accessTokenValue = r,
        this.channels.forEach(n => {
            const s = {
                access_token: r,
                version: bC
            };
            r && n.updateJoinPayload(s),
            n.joinedOnce && n._isJoined() && n._push(At.access_token, {
                access_token: r
            })
        }
        ))
    }
    async _waitForAuthIfNeeded() {
        this._authPromise && await this._authPromise
    }
    _setAuthSafely(e="general") {
        this.setAuth().catch(r => {
            this.log("error", `error setting auth in ${e}`, r)
        }
        )
    }
    _triggerStateCallbacks(e, r) {
        try {
            this.stateChangeCallbacks[e].forEach(n => {
                try {
                    n(r)
                } catch (s) {
                    this.log("error", `error in ${e} callback`, s)
                }
            }
            )
        } catch (n) {
            this.log("error", `error triggering ${e} callbacks`, n)
        }
    }
    _setupReconnectionTimer() {
        this.reconnectTimer = new C0(async () => {
            setTimeout(async () => {
                await this._waitForAuthIfNeeded(),
                this.isConnected() || this.connect()
            }
            , Fo.RECONNECT_DELAY)
        }
        ,this.reconnectAfterMs)
    }
    _initializeOptions(e) {
        var r, n, s, i, o, a, l, u, c;
        if (this.transport = (r = e == null ? void 0 : e.transport) !== null && r !== void 0 ? r : null,
        this.timeout = (n = e == null ? void 0 : e.timeout) !== null && n !== void 0 ? n : bc,
        this.heartbeatIntervalMs = (s = e == null ? void 0 : e.heartbeatIntervalMs) !== null && s !== void 0 ? s : Fo.HEARTBEAT_INTERVAL,
        this.worker = (i = e == null ? void 0 : e.worker) !== null && i !== void 0 ? i : !1,
        this.accessToken = (o = e == null ? void 0 : e.accessToken) !== null && o !== void 0 ? o : null,
        this.heartbeatCallback = (a = e == null ? void 0 : e.heartbeatCallback) !== null && a !== void 0 ? a : ru,
        e != null && e.params && (this.params = e.params),
        e != null && e.logger && (this.logger = e.logger),
        (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level,
        this.params = Object.assign(Object.assign({}, this.params), {
            log_level: this.logLevel
        })),
        this.reconnectAfterMs = (l = e == null ? void 0 : e.reconnectAfterMs) !== null && l !== void 0 ? l : f => AC[f - 1] || NC,
        this.encode = (u = e == null ? void 0 : e.encode) !== null && u !== void 0 ? u : (f, h) => h(JSON.stringify(f)),
        this.decode = (c = e == null ? void 0 : e.decode) !== null && c !== void 0 ? c : this.serializer.decode.bind(this.serializer),
        this.worker) {
            if (typeof window < "u" && !window.Worker)
                throw new Error("Web Worker is not supported");
            this.workerUrl = e == null ? void 0 : e.workerUrl
        }
    }
}
class Zd extends Error {
    constructor(e) {
        super(e),
        this.__isStorageError = !0,
        this.name = "StorageError"
    }
}
function fe(t) {
    return typeof t == "object" && t !== null && "__isStorageError"in t
}
class $C extends Zd {
    constructor(e, r, n) {
        super(e),
        this.name = "StorageApiError",
        this.status = r,
        this.statusCode = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
class Ec extends Zd {
    constructor(e, r) {
        super(e),
        this.name = "StorageUnknownError",
        this.originalError = r
    }
}
const ef = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = (...r) => qs(async () => {
        const {default: n} = await Promise.resolve().then( () => $n);
        return {
            default: n
        }
    }
    , void 0).then( ({default: n}) => n(...r)) : e = fetch,
    (...r) => e(...r)
}
  , DC = () => M(void 0, void 0, void 0, function*() {
    return typeof Response > "u" ? (yield qs( () => Promise.resolve().then( () => $n), void 0)).Response : Response
})
  , kc = t => {
    if (Array.isArray(t))
        return t.map(r => kc(r));
    if (typeof t == "function" || t !== Object(t))
        return t;
    const e = {};
    return Object.entries(t).forEach( ([r,n]) => {
        const s = r.replace(/([-_][a-z])/gi, i => i.toUpperCase().replace(/[-_]/g, ""));
        e[s] = kc(n)
    }
    ),
    e
}
  , MC = t => {
    if (typeof t != "object" || t === null)
        return !1;
    const e = Object.getPrototypeOf(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
}
  , nu = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t)
  , FC = (t, e, r) => M(void 0, void 0, void 0, function*() {
    const n = yield DC();
    t instanceof n && !(r != null && r.noResolveJson) ? t.json().then(s => {
        const i = t.status || 500
          , o = (s == null ? void 0 : s.statusCode) || i + "";
        e(new $C(nu(s),i,o))
    }
    ).catch(s => {
        e(new Ec(nu(s),s))
    }
    ) : e(new Ec(nu(t),t))
})
  , UC = (t, e, r, n) => {
    const s = {
        method: t,
        headers: (e == null ? void 0 : e.headers) || {}
    };
    return t === "GET" || !n ? s : (MC(n) ? (s.headers = Object.assign({
        "Content-Type": "application/json"
    }, e == null ? void 0 : e.headers),
    s.body = JSON.stringify(n)) : s.body = n,
    e != null && e.duplex && (s.duplex = e.duplex),
    Object.assign(Object.assign({}, s), r))
}
;
function io(t, e, r, n, s, i) {
    return M(this, void 0, void 0, function*() {
        return new Promise( (o, a) => {
            t(r, UC(e, n, s, i)).then(l => {
                if (!l.ok)
                    throw l;
                return n != null && n.noResolveJson ? l : l.json()
            }
            ).then(l => o(l)).catch(l => FC(l, a, n))
        }
        )
    })
}
function qi(t, e, r, n) {
    return M(this, void 0, void 0, function*() {
        return io(t, "GET", e, r, n)
    })
}
function Pt(t, e, r, n, s) {
    return M(this, void 0, void 0, function*() {
        return io(t, "POST", e, n, s, r)
    })
}
function Cc(t, e, r, n, s) {
    return M(this, void 0, void 0, function*() {
        return io(t, "PUT", e, n, s, r)
    })
}
function zC(t, e, r, n) {
    return M(this, void 0, void 0, function*() {
        return io(t, "HEAD", e, Object.assign(Object.assign({}, r), {
            noResolveJson: !0
        }), n)
    })
}
function tf(t, e, r, n, s) {
    return M(this, void 0, void 0, function*() {
        return io(t, "DELETE", e, n, s, r)
    })
}
class BC {
    constructor(e, r) {
        this.downloadFn = e,
        this.shouldThrowOnError = r
    }
    then(e, r) {
        return this.execute().then(e, r)
    }
    execute() {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: (yield this.downloadFn()).body,
                    error: null
                }
            } catch (e) {
                if (this.shouldThrowOnError)
                    throw e;
                if (fe(e))
                    return {
                        data: null,
                        error: e
                    };
                throw e
            }
        })
    }
}
var O0;
class VC {
    constructor(e, r) {
        this.downloadFn = e,
        this.shouldThrowOnError = r,
        this[O0] = "BlobDownloadBuilder",
        this.promise = null
    }
    asStream() {
        return new BC(this.downloadFn,this.shouldThrowOnError)
    }
    then(e, r) {
        return this.getPromise().then(e, r)
    }
    catch(e) {
        return this.getPromise().catch(e)
    }
    finally(e) {
        return this.getPromise().finally(e)
    }
    getPromise() {
        return this.promise || (this.promise = this.execute()),
        this.promise
    }
    execute() {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield(yield this.downloadFn()).blob(),
                    error: null
                }
            } catch (e) {
                if (this.shouldThrowOnError)
                    throw e;
                if (fe(e))
                    return {
                        data: null,
                        error: e
                    };
                throw e
            }
        })
    }
}
O0 = Symbol.toStringTag;
const WC = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}
  , yp = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
class HC {
    constructor(e, r={}, n, s) {
        this.shouldThrowOnError = !1,
        this.url = e,
        this.headers = r,
        this.bucketId = n,
        this.fetch = ef(s)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    uploadOrUpdate(e, r, n, s) {
        return M(this, void 0, void 0, function*() {
            try {
                let i;
                const o = Object.assign(Object.assign({}, yp), s);
                let a = Object.assign(Object.assign({}, this.headers), e === "POST" && {
                    "x-upsert": String(o.upsert)
                });
                const l = o.metadata;
                typeof Blob < "u" && n instanceof Blob ? (i = new FormData,
                i.append("cacheControl", o.cacheControl),
                l && i.append("metadata", this.encodeMetadata(l)),
                i.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (i = n,
                i.append("cacheControl", o.cacheControl),
                l && i.append("metadata", this.encodeMetadata(l))) : (i = n,
                a["cache-control"] = `max-age=${o.cacheControl}`,
                a["content-type"] = o.contentType,
                l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))),
                s != null && s.headers && (a = Object.assign(Object.assign({}, a), s.headers));
                const u = this._removeEmptyFolders(r)
                  , c = this._getFinalPath(u)
                  , f = yield(e == "PUT" ? Cc : Pt)(this.fetch, `${this.url}/object/${c}`, i, Object.assign({
                    headers: a
                }, o != null && o.duplex ? {
                    duplex: o.duplex
                } : {}));
                return {
                    data: {
                        path: u,
                        id: f.Id,
                        fullPath: f.Key
                    },
                    error: null
                }
            } catch (i) {
                if (this.shouldThrowOnError)
                    throw i;
                if (fe(i))
                    return {
                        data: null,
                        error: i
                    };
                throw i
            }
        })
    }
    upload(e, r, n) {
        return M(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", e, r, n)
        })
    }
    uploadToSignedUrl(e, r, n, s) {
        return M(this, void 0, void 0, function*() {
            const i = this._removeEmptyFolders(e)
              , o = this._getFinalPath(i)
              , a = new URL(this.url + `/object/upload/sign/${o}`);
            a.searchParams.set("token", r);
            try {
                let l;
                const u = Object.assign({
                    upsert: yp.upsert
                }, s)
                  , c = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(u.upsert)
                });
                typeof Blob < "u" && n instanceof Blob ? (l = new FormData,
                l.append("cacheControl", u.cacheControl),
                l.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (l = n,
                l.append("cacheControl", u.cacheControl)) : (l = n,
                c["cache-control"] = `max-age=${u.cacheControl}`,
                c["content-type"] = u.contentType);
                const f = yield Cc(this.fetch, a.toString(), l, {
                    headers: c
                });
                return {
                    data: {
                        path: i,
                        fullPath: f.Key
                    },
                    error: null
                }
            } catch (l) {
                if (this.shouldThrowOnError)
                    throw l;
                if (fe(l))
                    return {
                        data: null,
                        error: l
                    };
                throw l
            }
        })
    }
    createSignedUploadUrl(e, r) {
        return M(this, void 0, void 0, function*() {
            try {
                let n = this._getFinalPath(e);
                const s = Object.assign({}, this.headers);
                r != null && r.upsert && (s["x-upsert"] = "true");
                const i = yield Pt(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, {
                    headers: s
                })
                  , o = new URL(this.url + i.url)
                  , a = o.searchParams.get("token");
                if (!a)
                    throw new Zd("No token returned by API");
                return {
                    data: {
                        signedUrl: o.toString(),
                        path: e,
                        token: a
                    },
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (fe(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    update(e, r, n) {
        return M(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", e, r, n)
        })
    }
    move(e, r, n) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Pt(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: e,
                        destinationKey: r,
                        destinationBucket: n == null ? void 0 : n.destinationBucket
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (fe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    copy(e, r, n) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield Pt(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: e,
                            destinationKey: r,
                            destinationBucket: n == null ? void 0 : n.destinationBucket
                        }, {
                            headers: this.headers
                        })).Key
                    },
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (fe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrl(e, r, n) {
        return M(this, void 0, void 0, function*() {
            try {
                let s = this._getFinalPath(e)
                  , i = yield Pt(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
                    expiresIn: r
                }, n != null && n.transform ? {
                    transform: n.transform
                } : {}), {
                    headers: this.headers
                });
                const o = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
                return i = {
                    signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`)
                },
                {
                    data: i,
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (fe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrls(e, r, n) {
        return M(this, void 0, void 0, function*() {
            try {
                const s = yield Pt(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: r,
                    paths: e
                }, {
                    headers: this.headers
                })
                  , i = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
                return {
                    data: s.map(o => Object.assign(Object.assign({}, o), {
                        signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null
                    })),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (fe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    download(e, r) {
        const s = typeof (r == null ? void 0 : r.transform) < "u" ? "render/image/authenticated" : "object"
          , i = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {})
          , o = i ? `?${i}` : ""
          , a = this._getFinalPath(e)
          , l = () => qi(this.fetch, `${this.url}/${s}/${a}${o}`, {
            headers: this.headers,
            noResolveJson: !0
        });
        return new VC(l,this.shouldThrowOnError)
    }
    info(e) {
        return M(this, void 0, void 0, function*() {
            const r = this._getFinalPath(e);
            try {
                const n = yield qi(this.fetch, `${this.url}/object/info/${r}`, {
                    headers: this.headers
                });
                return {
                    data: kc(n),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (fe(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    exists(e) {
        return M(this, void 0, void 0, function*() {
            const r = this._getFinalPath(e);
            try {
                return yield zC(this.fetch, `${this.url}/object/${r}`, {
                    headers: this.headers
                }),
                {
                    data: !0,
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (fe(n) && n instanceof Ec) {
                    const s = n.originalError;
                    if ([400, 404].includes(s == null ? void 0 : s.status))
                        return {
                            data: !1,
                            error: n
                        }
                }
                throw n
            }
        })
    }
    getPublicUrl(e, r) {
        const n = this._getFinalPath(e)
          , s = []
          , i = r != null && r.download ? `download=${r.download === !0 ? "" : r.download}` : "";
        i !== "" && s.push(i);
        const a = typeof (r == null ? void 0 : r.transform) < "u" ? "render/image" : "object"
          , l = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {});
        l !== "" && s.push(l);
        let u = s.join("&");
        return u !== "" && (u = `?${u}`),
        {
            data: {
                publicUrl: encodeURI(`${this.url}/${a}/public/${n}${u}`)
            }
        }
    }
    remove(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield tf(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: e
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (fe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    list(e, r, n) {
        return M(this, void 0, void 0, function*() {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, WC), r), {
                    prefix: e || ""
                });
                return {
                    data: yield Pt(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                        headers: this.headers
                    }, n),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (fe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    listV2(e, r) {
        return M(this, void 0, void 0, function*() {
            try {
                const n = Object.assign({}, e);
                return {
                    data: yield Pt(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, n, {
                        headers: this.headers
                    }, r),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (fe(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    encodeMetadata(e) {
        return JSON.stringify(e)
    }
    toBase64(e) {
        return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e)
    }
    _getFinalPath(e) {
        return `${this.bucketId}/${e.replace(/^\/+/, "")}`
    }
    _removeEmptyFolders(e) {
        return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(e) {
        const r = [];
        return e.width && r.push(`width=${e.width}`),
        e.height && r.push(`height=${e.height}`),
        e.resize && r.push(`resize=${e.resize}`),
        e.format && r.push(`format=${e.format}`),
        e.quality && r.push(`quality=${e.quality}`),
        r.join("&")
    }
}
const j0 = "2.76.1"
  , R0 = {
    "X-Client-Info": `storage-js/${j0}`
};
class qC {
    constructor(e, r={}, n, s) {
        this.shouldThrowOnError = !1;
        const i = new URL(e);
        s != null && s.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase.")),
        this.url = i.href.replace(/\/$/, ""),
        this.headers = Object.assign(Object.assign({}, R0), r),
        this.fetch = ef(n)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    listBuckets() {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield qi(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (e) {
                if (this.shouldThrowOnError)
                    throw e;
                if (fe(e))
                    return {
                        data: null,
                        error: e
                    };
                throw e
            }
        })
    }
    getBucket(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield qi(this.fetch, `${this.url}/bucket/${e}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (fe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    createBucket(e) {
        return M(this, arguments, void 0, function*(r, n={
            public: !1
        }) {
            try {
                return {
                    data: yield Pt(this.fetch, `${this.url}/bucket`, {
                        id: r,
                        name: r,
                        type: n.type,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (fe(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    updateBucket(e, r) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Cc(this.fetch, `${this.url}/bucket/${e}`, {
                        id: e,
                        name: e,
                        public: r.public,
                        file_size_limit: r.fileSizeLimit,
                        allowed_mime_types: r.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (fe(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    emptyBucket(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Pt(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (fe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    deleteBucket(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield tf(this.fetch, `${this.url}/bucket/${e}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (fe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
}
class KC {
    constructor(e, r={}, n) {
        this.shouldThrowOnError = !1,
        this.url = e.replace(/\/$/, ""),
        this.headers = Object.assign(Object.assign({}, R0), r),
        this.fetch = ef(n)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    createBucket(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Pt(this.fetch, `${this.url}/bucket`, {
                        name: e
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (fe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    listBuckets(e) {
        return M(this, void 0, void 0, function*() {
            try {
                const r = new URLSearchParams;
                (e == null ? void 0 : e.limit) !== void 0 && r.set("limit", e.limit.toString()),
                (e == null ? void 0 : e.offset) !== void 0 && r.set("offset", e.offset.toString()),
                e != null && e.sortColumn && r.set("sortColumn", e.sortColumn),
                e != null && e.sortOrder && r.set("sortOrder", e.sortOrder),
                e != null && e.search && r.set("search", e.search);
                const n = r.toString()
                  , s = n ? `${this.url}/bucket?${n}` : `${this.url}/bucket`
                  , i = yield qi(this.fetch, s, {
                    headers: this.headers
                });
                return {
                    data: Array.isArray(i) ? i.filter(a => a.type === "ANALYTICS") : [],
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (fe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    deleteBucket(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield tf(this.fetch, `${this.url}/bucket/${e}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (fe(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
}
const rf = {
    "X-Client-Info": `storage-js/${j0}`,
    "Content-Type": "application/json"
};
class A0 extends Error {
    constructor(e) {
        super(e),
        this.__isStorageVectorsError = !0,
        this.name = "StorageVectorsError"
    }
}
function st(t) {
    return typeof t == "object" && t !== null && "__isStorageVectorsError"in t
}
class su extends A0 {
    constructor(e, r, n) {
        super(e),
        this.name = "StorageVectorsApiError",
        this.status = r,
        this.statusCode = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
class GC extends A0 {
    constructor(e, r) {
        super(e),
        this.name = "StorageVectorsUnknownError",
        this.originalError = r
    }
}
var wp;
(function(t) {
    t.InternalError = "InternalError",
    t.S3VectorConflictException = "S3VectorConflictException",
    t.S3VectorNotFoundException = "S3VectorNotFoundException",
    t.S3VectorBucketNotEmpty = "S3VectorBucketNotEmpty",
    t.S3VectorMaxBucketsExceeded = "S3VectorMaxBucketsExceeded",
    t.S3VectorMaxIndexesExceeded = "S3VectorMaxIndexesExceeded"
}
)(wp || (wp = {}));
const nf = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = (...r) => qs(async () => {
        const {default: n} = await Promise.resolve().then( () => $n);
        return {
            default: n
        }
    }
    , void 0).then( ({default: n}) => n(...r)) : e = fetch,
    (...r) => e(...r)
}
  , QC = t => {
    if (typeof t != "object" || t === null)
        return !1;
    const e = Object.getPrototypeOf(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
}
  , xp = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t)
  , JC = (t, e, r) => M(void 0, void 0, void 0, function*() {
    if (t && typeof t == "object" && "status"in t && "ok"in t && typeof t.status == "number" && !(r != null && r.noResolveJson)) {
        const s = t.status || 500
          , i = t;
        if (typeof i.json == "function")
            i.json().then(o => {
                const a = (o == null ? void 0 : o.statusCode) || (o == null ? void 0 : o.code) || s + "";
                e(new su(xp(o),s,a))
            }
            ).catch( () => {
                const o = s + ""
                  , a = i.statusText || `HTTP ${s} error`;
                e(new su(a,s,o))
            }
            );
        else {
            const o = s + ""
              , a = i.statusText || `HTTP ${s} error`;
            e(new su(a,s,o))
        }
    } else
        e(new GC(xp(t),t))
})
  , YC = (t, e, r, n) => {
    const s = {
        method: t,
        headers: (e == null ? void 0 : e.headers) || {}
    };
    return n ? (QC(n) ? (s.headers = Object.assign({
        "Content-Type": "application/json"
    }, e == null ? void 0 : e.headers),
    s.body = JSON.stringify(n)) : s.body = n,
    Object.assign(Object.assign({}, s), r)) : s
}
;
function XC(t, e, r, n, s, i) {
    return M(this, void 0, void 0, function*() {
        return new Promise( (o, a) => {
            t(r, YC(e, n, s, i)).then(l => {
                if (!l.ok)
                    throw l;
                if (n != null && n.noResolveJson)
                    return l;
                const u = l.headers.get("content-type");
                return !u || !u.includes("application/json") ? {} : l.json()
            }
            ).then(l => o(l)).catch(l => JC(l, a, n))
        }
        )
    })
}
function it(t, e, r, n, s) {
    return M(this, void 0, void 0, function*() {
        return XC(t, "POST", e, n, s, r)
    })
}
class ZC {
    constructor(e, r={}, n) {
        this.shouldThrowOnError = !1,
        this.url = e.replace(/\/$/, ""),
        this.headers = Object.assign(Object.assign({}, rf), r),
        this.fetch = nf(n)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    createIndex(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: (yield it(this.fetch, `${this.url}/CreateIndex`, e, {
                        headers: this.headers
                    })) || {},
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    getIndex(e, r) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield it(this.fetch, `${this.url}/GetIndex`, {
                        vectorBucketName: e,
                        indexName: r
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (st(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    listIndexes(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield it(this.fetch, `${this.url}/ListIndexes`, e, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    deleteIndex(e, r) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: (yield it(this.fetch, `${this.url}/DeleteIndex`, {
                        vectorBucketName: e,
                        indexName: r
                    }, {
                        headers: this.headers
                    })) || {},
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (st(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
}
class eT {
    constructor(e, r={}, n) {
        this.shouldThrowOnError = !1,
        this.url = e.replace(/\/$/, ""),
        this.headers = Object.assign(Object.assign({}, rf), r),
        this.fetch = nf(n)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    putVectors(e) {
        return M(this, void 0, void 0, function*() {
            try {
                if (e.vectors.length < 1 || e.vectors.length > 500)
                    throw new Error("Vector batch size must be between 1 and 500 items");
                return {
                    data: (yield it(this.fetch, `${this.url}/PutVectors`, e, {
                        headers: this.headers
                    })) || {},
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    getVectors(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield it(this.fetch, `${this.url}/GetVectors`, e, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    listVectors(e) {
        return M(this, void 0, void 0, function*() {
            try {
                if (e.segmentCount !== void 0) {
                    if (e.segmentCount < 1 || e.segmentCount > 16)
                        throw new Error("segmentCount must be between 1 and 16");
                    if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
                        throw new Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`)
                }
                return {
                    data: yield it(this.fetch, `${this.url}/ListVectors`, e, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    queryVectors(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield it(this.fetch, `${this.url}/QueryVectors`, e, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    deleteVectors(e) {
        return M(this, void 0, void 0, function*() {
            try {
                if (e.keys.length < 1 || e.keys.length > 500)
                    throw new Error("Keys batch size must be between 1 and 500 items");
                return {
                    data: (yield it(this.fetch, `${this.url}/DeleteVectors`, e, {
                        headers: this.headers
                    })) || {},
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
}
class tT {
    constructor(e, r={}, n) {
        this.shouldThrowOnError = !1,
        this.url = e.replace(/\/$/, ""),
        this.headers = Object.assign(Object.assign({}, rf), r),
        this.fetch = nf(n)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    createBucket(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: (yield it(this.fetch, `${this.url}/CreateVectorBucket`, {
                        vectorBucketName: e
                    }, {
                        headers: this.headers
                    })) || {},
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    getBucket(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield it(this.fetch, `${this.url}/GetVectorBucket`, {
                        vectorBucketName: e
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    listBuckets() {
        return M(this, arguments, void 0, function*(e={}) {
            try {
                return {
                    data: yield it(this.fetch, `${this.url}/ListVectorBuckets`, e, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    deleteBucket(e) {
        return M(this, void 0, void 0, function*() {
            try {
                return {
                    data: (yield it(this.fetch, `${this.url}/DeleteVectorBucket`, {
                        vectorBucketName: e
                    }, {
                        headers: this.headers
                    })) || {},
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (st(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
}
class rT extends tT {
    constructor(e, r={}) {
        super(e, r.headers || {}, r.fetch)
    }
    from(e) {
        return new nT(this.url,this.headers,e,this.fetch)
    }
}
class nT extends ZC {
    constructor(e, r, n, s) {
        super(e, r, s),
        this.vectorBucketName = n
    }
    createIndex(e) {
        const r = Object.create(null, {
            createIndex: {
                get: () => super.createIndex
            }
        });
        return M(this, void 0, void 0, function*() {
            return r.createIndex.call(this, Object.assign(Object.assign({}, e), {
                vectorBucketName: this.vectorBucketName
            }))
        })
    }
    listIndexes() {
        const e = Object.create(null, {
            listIndexes: {
                get: () => super.listIndexes
            }
        });
        return M(this, arguments, void 0, function*(r={}) {
            return e.listIndexes.call(this, Object.assign(Object.assign({}, r), {
                vectorBucketName: this.vectorBucketName
            }))
        })
    }
    getIndex(e) {
        const r = Object.create(null, {
            getIndex: {
                get: () => super.getIndex
            }
        });
        return M(this, void 0, void 0, function*() {
            return r.getIndex.call(this, this.vectorBucketName, e)
        })
    }
    deleteIndex(e) {
        const r = Object.create(null, {
            deleteIndex: {
                get: () => super.deleteIndex
            }
        });
        return M(this, void 0, void 0, function*() {
            return r.deleteIndex.call(this, this.vectorBucketName, e)
        })
    }
    index(e) {
        return new sT(this.url,this.headers,this.vectorBucketName,e,this.fetch)
    }
}
class sT extends eT {
    constructor(e, r, n, s, i) {
        super(e, r, i),
        this.vectorBucketName = n,
        this.indexName = s
    }
    putVectors(e) {
        const r = Object.create(null, {
            putVectors: {
                get: () => super.putVectors
            }
        });
        return M(this, void 0, void 0, function*() {
            return r.putVectors.call(this, Object.assign(Object.assign({}, e), {
                vectorBucketName: this.vectorBucketName,
                indexName: this.indexName
            }))
        })
    }
    getVectors(e) {
        const r = Object.create(null, {
            getVectors: {
                get: () => super.getVectors
            }
        });
        return M(this, void 0, void 0, function*() {
            return r.getVectors.call(this, Object.assign(Object.assign({}, e), {
                vectorBucketName: this.vectorBucketName,
                indexName: this.indexName
            }))
        })
    }
    listVectors() {
        const e = Object.create(null, {
            listVectors: {
                get: () => super.listVectors
            }
        });
        return M(this, arguments, void 0, function*(r={}) {
            return e.listVectors.call(this, Object.assign(Object.assign({}, r), {
                vectorBucketName: this.vectorBucketName,
                indexName: this.indexName
            }))
        })
    }
    queryVectors(e) {
        const r = Object.create(null, {
            queryVectors: {
                get: () => super.queryVectors
            }
        });
        return M(this, void 0, void 0, function*() {
            return r.queryVectors.call(this, Object.assign(Object.assign({}, e), {
                vectorBucketName: this.vectorBucketName,
                indexName: this.indexName
            }))
        })
    }
    deleteVectors(e) {
        const r = Object.create(null, {
            deleteVectors: {
                get: () => super.deleteVectors
            }
        });
        return M(this, void 0, void 0, function*() {
            return r.deleteVectors.call(this, Object.assign(Object.assign({}, e), {
                vectorBucketName: this.vectorBucketName,
                indexName: this.indexName
            }))
        })
    }
}
class iT extends qC {
    constructor(e, r={}, n, s) {
        super(e, r, n, s)
    }
    from(e) {
        return new HC(this.url,this.headers,e,this.fetch)
    }
    get vectors() {
        return new rT(this.url + "/vector",{
            headers: this.headers,
            fetch: this.fetch
        })
    }
    get analytics() {
        return new KC(this.url + "/iceberg",this.headers,this.fetch)
    }
}
const oT = "2.76.1";
let di = "";
typeof Deno < "u" ? di = "deno" : typeof document < "u" ? di = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? di = "react-native" : di = "node";
const aT = {
    "X-Client-Info": `supabase-js-${di}/${oT}`
}
  , lT = {
    headers: aT
}
  , uT = {
    schema: "public"
}
  , cT = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit"
}
  , dT = {}
  , fT = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = p0 : e = fetch,
    (...r) => e(...r)
}
  , hT = () => typeof Headers > "u" ? m0 : Headers
  , pT = (t, e, r) => {
    const n = fT(r)
      , s = hT();
    return async (i, o) => {
        var a;
        const l = (a = await e()) !== null && a !== void 0 ? a : t;
        let u = new s(o == null ? void 0 : o.headers);
        return u.has("apikey") || u.set("apikey", t),
        u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
        n(i, Object.assign(Object.assign({}, o), {
            headers: u
        }))
    }
}
;
function mT(t) {
    return t.endsWith("/") ? t : t + "/"
}
function gT(t, e) {
    var r, n;
    const {db: s, auth: i, realtime: o, global: a} = t
      , {db: l, auth: u, realtime: c, global: f} = e
      , h = {
        db: Object.assign(Object.assign({}, l), s),
        auth: Object.assign(Object.assign({}, u), i),
        realtime: Object.assign(Object.assign({}, c), o),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, f), a), {
            headers: Object.assign(Object.assign({}, (r = f == null ? void 0 : f.headers) !== null && r !== void 0 ? r : {}), (n = a == null ? void 0 : a.headers) !== null && n !== void 0 ? n : {})
        }),
        accessToken: async () => ""
    };
    return t.accessToken ? h.accessToken = t.accessToken : delete h.accessToken,
    h
}
function vT(t) {
    const e = t == null ? void 0 : t.trim();
    if (!e)
        throw new Error("supabaseUrl is required.");
    if (!e.match(/^https?:\/\//i))
        throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(mT(e))
    } catch {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.")
    }
}
const N0 = "2.76.1"
  , Qn = 30 * 1e3
  , Tc = 3
  , iu = Tc * Qn
  , yT = "http://localhost:9999"
  , wT = "supabase.auth.token"
  , xT = {
    "X-Client-Info": `gotrue-js/${N0}`
}
  , Pc = "X-Supabase-Api-Version"
  , I0 = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
}
  , bT = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
  , _T = 10 * 60 * 1e3;
class Ki extends Error {
    constructor(e, r, n) {
        super(e),
        this.__isAuthError = !0,
        this.name = "AuthError",
        this.status = r,
        this.code = n
    }
}
function U(t) {
    return typeof t == "object" && t !== null && "__isAuthError"in t
}
class ST extends Ki {
    constructor(e, r, n) {
        super(e, r, n),
        this.name = "AuthApiError",
        this.status = r,
        this.code = n
    }
}
function ET(t) {
    return U(t) && t.name === "AuthApiError"
}
class mn extends Ki {
    constructor(e, r) {
        super(e),
        this.name = "AuthUnknownError",
        this.originalError = r
    }
}
class nn extends Ki {
    constructor(e, r, n, s) {
        super(e, n, s),
        this.name = r,
        this.status = n
    }
}
class Cr extends nn {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}
function kT(t) {
    return U(t) && t.name === "AuthSessionMissingError"
}
class Wn extends nn {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class Uo extends nn {
    constructor(e) {
        super(e, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class zo extends nn {
    constructor(e, r=null) {
        super(e, "AuthImplicitGrantRedirectError", 500, void 0),
        this.details = null,
        this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
function CT(t) {
    return U(t) && t.name === "AuthImplicitGrantRedirectError"
}
class bp extends nn {
    constructor(e, r=null) {
        super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        this.details = null,
        this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class Oc extends nn {
    constructor(e, r) {
        super(e, "AuthRetryableFetchError", r, void 0)
    }
}
function ou(t) {
    return U(t) && t.name === "AuthRetryableFetchError"
}
class _p extends nn {
    constructor(e, r, n) {
        super(e, "AuthWeakPasswordError", r, "weak_password"),
        this.reasons = n
    }
}
class jc extends nn {
    constructor(e) {
        super(e, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const Da = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("")
  , Sp = ` 	
\r=`.split("")
  , TT = ( () => {
    const t = new Array(128);
    for (let e = 0; e < t.length; e += 1)
        t[e] = -1;
    for (let e = 0; e < Sp.length; e += 1)
        t[Sp[e].charCodeAt(0)] = -2;
    for (let e = 0; e < Da.length; e += 1)
        t[Da[e].charCodeAt(0)] = e;
    return t
}
)();
function Ep(t, e, r) {
    if (t !== null)
        for (e.queue = e.queue << 8 | t,
        e.queuedBits += 8; e.queuedBits >= 6; ) {
            const n = e.queue >> e.queuedBits - 6 & 63;
            r(Da[n]),
            e.queuedBits -= 6
        }
    else if (e.queuedBits > 0)
        for (e.queue = e.queue << 6 - e.queuedBits,
        e.queuedBits = 6; e.queuedBits >= 6; ) {
            const n = e.queue >> e.queuedBits - 6 & 63;
            r(Da[n]),
            e.queuedBits -= 6
        }
}
function L0(t, e, r) {
    const n = TT[t];
    if (n > -1)
        for (e.queue = e.queue << 6 | n,
        e.queuedBits += 6; e.queuedBits >= 8; )
            r(e.queue >> e.queuedBits - 8 & 255),
            e.queuedBits -= 8;
    else {
        if (n === -2)
            return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)
    }
}
function kp(t) {
    const e = []
      , r = o => {
        e.push(String.fromCodePoint(o))
    }
      , n = {
        utf8seq: 0,
        codepoint: 0
    }
      , s = {
        queue: 0,
        queuedBits: 0
    }
      , i = o => {
        jT(o, n, r)
    }
    ;
    for (let o = 0; o < t.length; o += 1)
        L0(t.charCodeAt(o), s, i);
    return e.join("")
}
function PT(t, e) {
    if (t <= 127) {
        e(t);
        return
    } else if (t <= 2047) {
        e(192 | t >> 6),
        e(128 | t & 63);
        return
    } else if (t <= 65535) {
        e(224 | t >> 12),
        e(128 | t >> 6 & 63),
        e(128 | t & 63);
        return
    } else if (t <= 1114111) {
        e(240 | t >> 18),
        e(128 | t >> 12 & 63),
        e(128 | t >> 6 & 63),
        e(128 | t & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)
}
function OT(t, e) {
    for (let r = 0; r < t.length; r += 1) {
        let n = t.charCodeAt(r);
        if (n > 55295 && n <= 56319) {
            const s = (n - 55296) * 1024 & 65535;
            n = (t.charCodeAt(r + 1) - 56320 & 65535 | s) + 65536,
            r += 1
        }
        PT(n, e)
    }
}
function jT(t, e, r) {
    if (e.utf8seq === 0) {
        if (t <= 127) {
            r(t);
            return
        }
        for (let n = 1; n < 6; n += 1)
            if (!(t >> 7 - n & 1)) {
                e.utf8seq = n;
                break
            }
        if (e.utf8seq === 2)
            e.codepoint = t & 31;
        else if (e.utf8seq === 3)
            e.codepoint = t & 15;
        else if (e.utf8seq === 4)
            e.codepoint = t & 7;
        else
            throw new Error("Invalid UTF-8 sequence");
        e.utf8seq -= 1
    } else if (e.utf8seq > 0) {
        if (t <= 127)
            throw new Error("Invalid UTF-8 sequence");
        e.codepoint = e.codepoint << 6 | t & 63,
        e.utf8seq -= 1,
        e.utf8seq === 0 && r(e.codepoint)
    }
}
function ys(t) {
    const e = []
      , r = {
        queue: 0,
        queuedBits: 0
    }
      , n = s => {
        e.push(s)
    }
    ;
    for (let s = 0; s < t.length; s += 1)
        L0(t.charCodeAt(s), r, n);
    return new Uint8Array(e)
}
function RT(t) {
    const e = [];
    return OT(t, r => e.push(r)),
    new Uint8Array(e)
}
function wn(t) {
    const e = []
      , r = {
        queue: 0,
        queuedBits: 0
    }
      , n = s => {
        e.push(s)
    }
    ;
    return t.forEach(s => Ep(s, r, n)),
    Ep(null, r, n),
    e.join("")
}
function AT(t) {
    return Math.round(Date.now() / 1e3) + t
}
function NT() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
        const e = Math.random() * 16 | 0;
        return (t == "x" ? e : e & 3 | 8).toString(16)
    })
}
const tt = () => typeof window < "u" && typeof document < "u"
  , ln = {
    tested: !1,
    writable: !1
}
  , $0 = () => {
    if (!tt())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (ln.tested)
        return ln.writable;
    const t = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(t, t),
        globalThis.localStorage.removeItem(t),
        ln.tested = !0,
        ln.writable = !0
    } catch {
        ln.tested = !0,
        ln.writable = !1
    }
    return ln.writable
}
;
function IT(t) {
    const e = {}
      , r = new URL(t);
    if (r.hash && r.hash[0] === "#")
        try {
            new URLSearchParams(r.hash.substring(1)).forEach( (s, i) => {
                e[i] = s
            }
            )
        } catch {}
    return r.searchParams.forEach( (n, s) => {
        e[s] = n
    }
    ),
    e
}
const D0 = t => {
    let e;
    return t ? e = t : typeof fetch > "u" ? e = (...r) => qs(async () => {
        const {default: n} = await Promise.resolve().then( () => $n);
        return {
            default: n
        }
    }
    , void 0).then( ({default: n}) => n(...r)) : e = fetch,
    (...r) => e(...r)
}
  , LT = t => typeof t == "object" && t !== null && "status"in t && "ok"in t && "json"in t && typeof t.json == "function"
  , Jn = async (t, e, r) => {
    await t.setItem(e, JSON.stringify(r))
}
  , un = async (t, e) => {
    const r = await t.getItem(e);
    if (!r)
        return null;
    try {
        return JSON.parse(r)
    } catch {
        return r
    }
}
  , Sr = async (t, e) => {
    await t.removeItem(e)
}
;
class gl {
    constructor() {
        this.promise = new gl.promiseConstructor( (e, r) => {
            this.resolve = e,
            this.reject = r
        }
        )
    }
}
gl.promiseConstructor = Promise;
function au(t) {
    const e = t.split(".");
    if (e.length !== 3)
        throw new jc("Invalid JWT structure");
    for (let n = 0; n < e.length; n++)
        if (!bT.test(e[n]))
            throw new jc("JWT not in base64url format");
    return {
        header: JSON.parse(kp(e[0])),
        payload: JSON.parse(kp(e[1])),
        signature: ys(e[2]),
        raw: {
            header: e[0],
            payload: e[1]
        }
    }
}
async function $T(t) {
    return await new Promise(e => {
        setTimeout( () => e(null), t)
    }
    )
}
function DT(t, e) {
    return new Promise( (n, s) => {
        (async () => {
            for (let i = 0; i < 1 / 0; i++)
                try {
                    const o = await t(i);
                    if (!e(i, null, o)) {
                        n(o);
                        return
                    }
                } catch (o) {
                    if (!e(i, o)) {
                        s(o);
                        return
                    }
                }
        }
        )()
    }
    )
}
function MT(t) {
    return ("0" + t.toString(16)).substr(-2)
}
function FT() {
    const e = new Uint32Array(56);
    if (typeof crypto > "u") {
        const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
          , n = r.length;
        let s = "";
        for (let i = 0; i < 56; i++)
            s += r.charAt(Math.floor(Math.random() * n));
        return s
    }
    return crypto.getRandomValues(e),
    Array.from(e, MT).join("")
}
async function UT(t) {
    const r = new TextEncoder().encode(t)
      , n = await crypto.subtle.digest("SHA-256", r)
      , s = new Uint8Array(n);
    return Array.from(s).map(i => String.fromCharCode(i)).join("")
}
async function zT(t) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
        t;
    const r = await UT(t);
    return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function Hn(t, e, r=!1) {
    const n = FT();
    let s = n;
    r && (s += "/PASSWORD_RECOVERY"),
    await Jn(t, `${e}-code-verifier`, s);
    const i = await zT(n);
    return [i, n === i ? "plain" : "s256"]
}
const BT = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function VT(t) {
    const e = t.headers.get(Pc);
    if (!e || !e.match(BT))
        return null;
    try {
        return new Date(`${e}T00:00:00.0Z`)
    } catch {
        return null
    }
}
function WT(t) {
    if (!t)
        throw new Error("Missing exp claim");
    const e = Math.floor(Date.now() / 1e3);
    if (t <= e)
        throw new Error("JWT has expired")
}
function HT(t) {
    switch (t) {
    case "RS256":
        return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
                name: "SHA-256"
            }
        };
    case "ES256":
        return {
            name: "ECDSA",
            namedCurve: "P-256",
            hash: {
                name: "SHA-256"
            }
        };
    default:
        throw new Error("Invalid alg claim")
    }
}
const qT = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function qn(t) {
    if (!qT.test(t))
        throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}
function lu() {
    const t = {};
    return new Proxy(t,{
        get: (e, r) => {
            if (r === "__isUserNotAvailableProxy")
                return !0;
            if (typeof r == "symbol") {
                const n = r.toString();
                if (n === "Symbol(Symbol.toPrimitive)" || n === "Symbol(Symbol.toStringTag)" || n === "Symbol(util.inspect.custom)")
                    return
            }
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)
        }
        ,
        set: (e, r) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
        ,
        deleteProperty: (e, r) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
    })
}
function Cp(t) {
    return JSON.parse(JSON.stringify(t))
}
const hn = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t)
  , KT = [502, 503, 504];
async function Tp(t) {
    var e;
    if (!LT(t))
        throw new Oc(hn(t),0);
    if (KT.includes(t.status))
        throw new Oc(hn(t),t.status);
    let r;
    try {
        r = await t.json()
    } catch (i) {
        throw new mn(hn(i),i)
    }
    let n;
    const s = VT(t);
    if (s && s.getTime() >= I0["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code),
    n) {
        if (n === "weak_password")
            throw new _p(hn(r),t.status,((e = r.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
        if (n === "session_not_found")
            throw new Cr
    } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce( (i, o) => i && typeof o == "string", !0))
        throw new _p(hn(r),t.status,r.weak_password.reasons);
    throw new ST(hn(r),t.status || 500,n)
}
const GT = (t, e, r, n) => {
    const s = {
        method: t,
        headers: (e == null ? void 0 : e.headers) || {}
    };
    return t === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, e == null ? void 0 : e.headers),
    s.body = JSON.stringify(n),
    Object.assign(Object.assign({}, s), r))
}
;
async function V(t, e, r, n) {
    var s;
    const i = Object.assign({}, n == null ? void 0 : n.headers);
    i[Pc] || (i[Pc] = I0["2024-01-01"].name),
    n != null && n.jwt && (i.Authorization = `Bearer ${n.jwt}`);
    const o = (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
    n != null && n.redirectTo && (o.redirect_to = n.redirectTo);
    const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : ""
      , l = await QT(t, e, r + a, {
        headers: i,
        noResolveJson: n == null ? void 0 : n.noResolveJson
    }, {}, n == null ? void 0 : n.body);
    return n != null && n.xform ? n == null ? void 0 : n.xform(l) : {
        data: Object.assign({}, l),
        error: null
    }
}
async function QT(t, e, r, n, s, i) {
    const o = GT(e, n, s, i);
    let a;
    try {
        a = await t(r, Object.assign({}, o))
    } catch (l) {
        throw console.error(l),
        new Oc(hn(l),0)
    }
    if (a.ok || await Tp(a),
    n != null && n.noResolveJson)
        return a;
    try {
        return await a.json()
    } catch (l) {
        await Tp(l)
    }
}
function kt(t) {
    var e;
    let r = null;
    XT(t) && (r = Object.assign({}, t),
    t.expires_at || (r.expires_at = AT(t.expires_in)));
    const n = (e = t.user) !== null && e !== void 0 ? e : t;
    return {
        data: {
            session: r,
            user: n
        },
        error: null
    }
}
function Pp(t) {
    const e = kt(t);
    return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce( (r, n) => r && typeof n == "string", !0) && (e.data.weak_password = t.weak_password),
    e
}
function Rr(t) {
    var e;
    return {
        data: {
            user: (e = t.user) !== null && e !== void 0 ? e : t
        },
        error: null
    }
}
function JT(t) {
    return {
        data: t,
        error: null
    }
}
function YT(t) {
    const {action_link: e, email_otp: r, hashed_token: n, redirect_to: s, verification_type: i} = t
      , o = Hs(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
      , a = {
        action_link: e,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: i
    }
      , l = Object.assign({}, o);
    return {
        data: {
            properties: a,
            user: l
        },
        error: null
    }
}
function Op(t) {
    return t
}
function XT(t) {
    return t.access_token && t.refresh_token && t.expires_in
}
const uu = ["global", "local", "others"];
class ZT {
    constructor({url: e="", headers: r={}, fetch: n}) {
        this.url = e,
        this.headers = r,
        this.fetch = D0(n),
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        },
        this.oauth = {
            listClients: this._listOAuthClients.bind(this),
            createClient: this._createOAuthClient.bind(this),
            getClient: this._getOAuthClient.bind(this),
            deleteClient: this._deleteOAuthClient.bind(this),
            regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
        }
    }
    async signOut(e, r=uu[0]) {
        if (uu.indexOf(r) < 0)
            throw new Error(`@supabase/auth-js: Parameter scope must be one of ${uu.join(", ")}`);
        try {
            return await V(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (n) {
            if (U(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async inviteUserByEmail(e, r={}) {
        try {
            return await V(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: e,
                    data: r.data
                },
                headers: this.headers,
                redirectTo: r.redirectTo,
                xform: Rr
            })
        } catch (n) {
            if (U(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async generateLink(e) {
        try {
            const {options: r} = e
              , n = Hs(e, ["options"])
              , s = Object.assign(Object.assign({}, n), r);
            return "newEmail"in n && (s.new_email = n == null ? void 0 : n.newEmail,
            delete s.newEmail),
            await V(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: YT,
                redirectTo: r == null ? void 0 : r.redirectTo
            })
        } catch (r) {
            if (U(r))
                return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async createUser(e) {
        try {
            return await V(this.fetch, "POST", `${this.url}/admin/users`, {
                body: e,
                headers: this.headers,
                xform: Rr
            })
        } catch (r) {
            if (U(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async listUsers(e) {
        var r, n, s, i, o, a, l;
        try {
            const u = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , c = await V(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (n = (r = e == null ? void 0 : e.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
                    per_page: (i = (s = e == null ? void 0 : e.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
                },
                xform: Op
            });
            if (c.error)
                throw c.error;
            const f = await c.json()
              , h = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0
              , d = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
            return d.length > 0 && (d.forEach(w => {
                const m = parseInt(w.split(";")[0].split("=")[1].substring(0, 1))
                  , y = JSON.parse(w.split(";")[1].split("=")[1]);
                u[`${y}Page`] = m
            }
            ),
            u.total = parseInt(h)),
            {
                data: Object.assign(Object.assign({}, f), u),
                error: null
            }
        } catch (u) {
            if (U(u))
                return {
                    data: {
                        users: []
                    },
                    error: u
                };
            throw u
        }
    }
    async getUserById(e) {
        qn(e);
        try {
            return await V(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                xform: Rr
            })
        } catch (r) {
            if (U(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async updateUserById(e, r) {
        qn(e);
        try {
            return await V(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                body: r,
                headers: this.headers,
                xform: Rr
            })
        } catch (n) {
            if (U(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async deleteUser(e, r=!1) {
        qn(e);
        try {
            return await V(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: r
                },
                xform: Rr
            })
        } catch (n) {
            if (U(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async _listFactors(e) {
        qn(e.userId);
        try {
            const {data: r, error: n} = await V(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                headers: this.headers,
                xform: s => ({
                    data: {
                        factors: s
                    },
                    error: null
                })
            });
            return {
                data: r,
                error: n
            }
        } catch (r) {
            if (U(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _deleteFactor(e) {
        qn(e.userId),
        qn(e.id);
        try {
            return {
                data: await V(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (r) {
            if (U(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _listOAuthClients(e) {
        var r, n, s, i, o, a, l;
        try {
            const u = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , c = await V(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (n = (r = e == null ? void 0 : e.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
                    per_page: (i = (s = e == null ? void 0 : e.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
                },
                xform: Op
            });
            if (c.error)
                throw c.error;
            const f = await c.json()
              , h = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0
              , d = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
            return d.length > 0 && (d.forEach(w => {
                const m = parseInt(w.split(";")[0].split("=")[1].substring(0, 1))
                  , y = JSON.parse(w.split(";")[1].split("=")[1]);
                u[`${y}Page`] = m
            }
            ),
            u.total = parseInt(h)),
            {
                data: Object.assign(Object.assign({}, f), u),
                error: null
            }
        } catch (u) {
            if (U(u))
                return {
                    data: {
                        clients: []
                    },
                    error: u
                };
            throw u
        }
    }
    async _createOAuthClient(e) {
        try {
            return await V(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
                body: e,
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (U(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _getOAuthClient(e) {
        try {
            return await V(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (U(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _deleteOAuthClient(e) {
        try {
            return await V(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (U(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _regenerateOAuthClientSecret(e) {
        try {
            return await V(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
                headers: this.headers,
                xform: r => ({
                    data: r,
                    error: null
                })
            })
        } catch (r) {
            if (U(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
}
function jp(t={}) {
    return {
        getItem: e => t[e] || null,
        setItem: (e, r) => {
            t[e] = r
        }
        ,
        removeItem: e => {
            delete t[e]
        }
    }
}
const Kn = {
    debug: !!(globalThis && $0() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class M0 extends Error {
    constructor(e) {
        super(e),
        this.isAcquireTimeout = !0
    }
}
class eP extends M0 {
}
async function tP(t, e, r) {
    Kn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
    const n = new globalThis.AbortController;
    return e > 0 && setTimeout( () => {
        n.abort(),
        Kn.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t)
    }
    , e),
    await Promise.resolve().then( () => globalThis.navigator.locks.request(t, e === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: n.signal
    }, async s => {
        if (s) {
            Kn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, s.name);
            try {
                return await r()
            } finally {
                Kn.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, s.name)
            }
        } else {
            if (e === 0)
                throw Kn.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t),
                new eP(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
            if (Kn.debug)
                try {
                    const i = await globalThis.navigator.locks.query();
                    console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "))
                } catch (i) {
                    console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i)
                }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
            await r()
        }
    }
    ))
}
function rP() {
    if (typeof globalThis != "object")
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }),
            __magic__.globalThis = __magic__,
            delete Object.prototype.__magic__
        } catch {
            typeof self < "u" && (self.globalThis = self)
        }
}
function F0(t) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(t))
        throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
    return t.toLowerCase()
}
function nP(t) {
    return parseInt(t, 16)
}
function sP(t) {
    const e = new TextEncoder().encode(t);
    return "0x" + Array.from(e, n => n.toString(16).padStart(2, "0")).join("")
}
function iP(t) {
    var e;
    const {chainId: r, domain: n, expirationTime: s, issuedAt: i=new Date, nonce: o, notBefore: a, requestId: l, resources: u, scheme: c, uri: f, version: h} = t;
    {
        if (!Number.isInteger(r))
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
        if (!n)
            throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
        if (o && o.length < 8)
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
        if (!f)
            throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
        if (h !== "1")
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${h}`);
        if (!((e = t.statement) === null || e === void 0) && e.includes(`
`))
            throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)
    }
    const d = F0(t.address)
      , w = c ? `${c}://${n}` : n
      , m = t.statement ? `${t.statement}
` : ""
      , y = `${w} wants you to sign in with your Ethereum account:
${d}

${m}`;
    let g = `URI: ${f}
Version: ${h}
Chain ID: ${r}${o ? `
Nonce: ${o}` : ""}
Issued At: ${i.toISOString()}`;
    if (s && (g += `
Expiration Time: ${s.toISOString()}`),
    a && (g += `
Not Before: ${a.toISOString()}`),
    l && (g += `
Request ID: ${l}`),
    u) {
        let p = `
Resources:`;
        for (const v of u) {
            if (!v || typeof v != "string")
                throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`);
            p += `
- ${v}`
        }
        g += p
    }
    return `${y}
${g}`
}
class xe extends Error {
    constructor({message: e, code: r, cause: n, name: s}) {
        var i;
        super(e, {
            cause: n
        }),
        this.__isWebAuthnError = !0,
        this.name = (i = s ?? (n instanceof Error ? n.name : void 0)) !== null && i !== void 0 ? i : "Unknown Error",
        this.code = r
    }
}
class Ma extends xe {
    constructor(e, r) {
        super({
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: r,
            message: e
        }),
        this.name = "WebAuthnUnknownError",
        this.originalError = r
    }
}
function oP({error: t, options: e}) {
    var r, n, s;
    const {publicKey: i} = e;
    if (!i)
        throw Error("options was missing required publicKey property");
    if (t.name === "AbortError") {
        if (e.signal instanceof AbortSignal)
            return new xe({
                message: "Registration ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: t
            })
    } else if (t.name === "ConstraintError") {
        if (((r = i.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0)
            return new xe({
                message: "Discoverable credentials were required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
                cause: t
            });
        if (e.mediation === "conditional" && ((n = i.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required")
            return new xe({
                message: "User verification was required during automatic registration but it could not be performed",
                code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
                cause: t
            });
        if (((s = i.authenticatorSelection) === null || s === void 0 ? void 0 : s.userVerification) === "required")
            return new xe({
                message: "User verification was required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
                cause: t
            })
    } else {
        if (t.name === "InvalidStateError")
            return new xe({
                message: "The authenticator was previously registered",
                code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
                cause: t
            });
        if (t.name === "NotAllowedError")
            return new xe({
                message: t.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: t
            });
        if (t.name === "NotSupportedError")
            return i.pubKeyCredParams.filter(a => a.type === "public-key").length === 0 ? new xe({
                message: 'No entry in pubKeyCredParams was of type "public-key"',
                code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
                cause: t
            }) : new xe({
                message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
                code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
                cause: t
            });
        if (t.name === "SecurityError") {
            const o = window.location.hostname;
            if (U0(o)) {
                if (i.rp.id !== o)
                    return new xe({
                        message: `The RP ID "${i.rp.id}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: t
                    })
            } else
                return new xe({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: t
                })
        } else if (t.name === "TypeError") {
            if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
                return new xe({
                    message: "User ID was not between 1 and 64 characters",
                    code: "ERROR_INVALID_USER_ID_LENGTH",
                    cause: t
                })
        } else if (t.name === "UnknownError")
            return new xe({
                message: "The authenticator was unable to process the specified options, or could not create a new credential",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: t
            })
    }
    return new xe({
        message: "a Non-Webauthn related error has occurred",
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
    })
}
function aP({error: t, options: e}) {
    const {publicKey: r} = e;
    if (!r)
        throw Error("options was missing required publicKey property");
    if (t.name === "AbortError") {
        if (e.signal instanceof AbortSignal)
            return new xe({
                message: "Authentication ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: t
            })
    } else {
        if (t.name === "NotAllowedError")
            return new xe({
                message: t.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: t
            });
        if (t.name === "SecurityError") {
            const n = window.location.hostname;
            if (U0(n)) {
                if (r.rpId !== n)
                    return new xe({
                        message: `The RP ID "${r.rpId}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: t
                    })
            } else
                return new xe({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: t
                })
        } else if (t.name === "UnknownError")
            return new xe({
                message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: t
            })
    }
    return new xe({
        message: "a Non-Webauthn related error has occurred",
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
    })
}
class lP {
    createNewAbortSignal() {
        if (this.controller) {
            const r = new Error("Cancelling existing WebAuthn API call for new one");
            r.name = "AbortError",
            this.controller.abort(r)
        }
        const e = new AbortController;
        return this.controller = e,
        e.signal
    }
    cancelCeremony() {
        if (this.controller) {
            const e = new Error("Manually cancelling existing WebAuthn API call");
            e.name = "AbortError",
            this.controller.abort(e),
            this.controller = void 0
        }
    }
}
const uP = new lP;
function cP(t) {
    if (!t)
        throw new Error("Credential creation options are required");
    if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON"in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
        return PublicKeyCredential.parseCreationOptionsFromJSON(t);
    const {challenge: e, user: r, excludeCredentials: n} = t
      , s = Hs(t, ["challenge", "user", "excludeCredentials"])
      , i = ys(e).buffer
      , o = Object.assign(Object.assign({}, r), {
        id: ys(r.id).buffer
    })
      , a = Object.assign(Object.assign({}, s), {
        challenge: i,
        user: o
    });
    if (n && n.length > 0) {
        a.excludeCredentials = new Array(n.length);
        for (let l = 0; l < n.length; l++) {
            const u = n[l];
            a.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
                id: ys(u.id).buffer,
                type: u.type || "public-key",
                transports: u.transports
            })
        }
    }
    return a
}
function dP(t) {
    if (!t)
        throw new Error("Credential request options are required");
    if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON"in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
        return PublicKeyCredential.parseRequestOptionsFromJSON(t);
    const {challenge: e, allowCredentials: r} = t
      , n = Hs(t, ["challenge", "allowCredentials"])
      , s = ys(e).buffer
      , i = Object.assign(Object.assign({}, n), {
        challenge: s
    });
    if (r && r.length > 0) {
        i.allowCredentials = new Array(r.length);
        for (let o = 0; o < r.length; o++) {
            const a = r[o];
            i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
                id: ys(a.id).buffer,
                type: a.type || "public-key",
                transports: a.transports
            })
        }
    }
    return i
}
function fP(t) {
    var e;
    if ("toJSON"in t && typeof t.toJSON == "function")
        return t.toJSON();
    const r = t;
    return {
        id: t.id,
        rawId: t.id,
        response: {
            attestationObject: wn(new Uint8Array(t.response.attestationObject)),
            clientDataJSON: wn(new Uint8Array(t.response.clientDataJSON))
        },
        type: "public-key",
        clientExtensionResults: t.getClientExtensionResults(),
        authenticatorAttachment: (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
    }
}
function hP(t) {
    var e;
    if ("toJSON"in t && typeof t.toJSON == "function")
        return t.toJSON();
    const r = t
      , n = t.getClientExtensionResults()
      , s = t.response;
    return {
        id: t.id,
        rawId: t.id,
        response: {
            authenticatorData: wn(new Uint8Array(s.authenticatorData)),
            clientDataJSON: wn(new Uint8Array(s.clientDataJSON)),
            signature: wn(new Uint8Array(s.signature)),
            userHandle: s.userHandle ? wn(new Uint8Array(s.userHandle)) : void 0
        },
        type: "public-key",
        clientExtensionResults: n,
        authenticatorAttachment: (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
    }
}
function U0(t) {
    return t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)
}
function Rp() {
    var t, e;
    return !!(tt() && "PublicKeyCredential"in window && window.PublicKeyCredential && "credentials"in navigator && typeof ((t = navigator == null ? void 0 : navigator.credentials) === null || t === void 0 ? void 0 : t.create) == "function" && typeof ((e = navigator == null ? void 0 : navigator.credentials) === null || e === void 0 ? void 0 : e.get) == "function")
}
async function pP(t) {
    try {
        const e = await navigator.credentials.create(t);
        return e ? e instanceof PublicKeyCredential ? {
            data: e,
            error: null
        } : {
            data: null,
            error: new Ma("Browser returned unexpected credential type",e)
        } : {
            data: null,
            error: new Ma("Empty credential response",e)
        }
    } catch (e) {
        return {
            data: null,
            error: oP({
                error: e,
                options: t
            })
        }
    }
}
async function mP(t) {
    try {
        const e = await navigator.credentials.get(t);
        return e ? e instanceof PublicKeyCredential ? {
            data: e,
            error: null
        } : {
            data: null,
            error: new Ma("Browser returned unexpected credential type",e)
        } : {
            data: null,
            error: new Ma("Empty credential response",e)
        }
    } catch (e) {
        return {
            data: null,
            error: aP({
                error: e,
                options: t
            })
        }
    }
}
const gP = {
    hints: ["security-key"],
    authenticatorSelection: {
        authenticatorAttachment: "cross-platform",
        requireResidentKey: !1,
        userVerification: "preferred",
        residentKey: "discouraged"
    },
    attestation: "none"
}
  , vP = {
    userVerification: "preferred",
    hints: ["security-key"]
};
function Fa(...t) {
    const e = s => s !== null && typeof s == "object" && !Array.isArray(s)
      , r = s => s instanceof ArrayBuffer || ArrayBuffer.isView(s)
      , n = {};
    for (const s of t)
        if (s)
            for (const i in s) {
                const o = s[i];
                if (o !== void 0)
                    if (Array.isArray(o))
                        n[i] = o;
                    else if (r(o))
                        n[i] = o;
                    else if (e(o)) {
                        const a = n[i];
                        e(a) ? n[i] = Fa(a, o) : n[i] = Fa(o)
                    } else
                        n[i] = o
            }
    return n
}
function yP(t, e) {
    return Fa(gP, t, e || {})
}
function wP(t, e) {
    return Fa(vP, t, e || {})
}
class xP {
    constructor(e) {
        this.client = e,
        this.enroll = this._enroll.bind(this),
        this.challenge = this._challenge.bind(this),
        this.verify = this._verify.bind(this),
        this.authenticate = this._authenticate.bind(this),
        this.register = this._register.bind(this)
    }
    async _enroll(e) {
        return this.client.mfa.enroll(Object.assign(Object.assign({}, e), {
            factorType: "webauthn"
        }))
    }
    async _challenge({factorId: e, webauthn: r, friendlyName: n, signal: s}, i) {
        try {
            const {data: o, error: a} = await this.client.mfa.challenge({
                factorId: e,
                webauthn: r
            });
            if (!o)
                return {
                    data: null,
                    error: a
                };
            const l = s ?? uP.createNewAbortSignal();
            if (o.webauthn.type === "create") {
                const {user: u} = o.webauthn.credential_options.publicKey;
                u.name || (u.name = `${u.id}:${n}`),
                u.displayName || (u.displayName = u.name)
            }
            switch (o.webauthn.type) {
            case "create":
                {
                    const u = yP(o.webauthn.credential_options.publicKey, i == null ? void 0 : i.create)
                      , {data: c, error: f} = await pP({
                        publicKey: u,
                        signal: l
                    });
                    return c ? {
                        data: {
                            factorId: e,
                            challengeId: o.id,
                            webauthn: {
                                type: o.webauthn.type,
                                credential_response: c
                            }
                        },
                        error: null
                    } : {
                        data: null,
                        error: f
                    }
                }
            case "request":
                {
                    const u = wP(o.webauthn.credential_options.publicKey, i == null ? void 0 : i.request)
                      , {data: c, error: f} = await mP(Object.assign(Object.assign({}, o.webauthn.credential_options), {
                        publicKey: u,
                        signal: l
                    }));
                    return c ? {
                        data: {
                            factorId: e,
                            challengeId: o.id,
                            webauthn: {
                                type: o.webauthn.type,
                                credential_response: c
                            }
                        },
                        error: null
                    } : {
                        data: null,
                        error: f
                    }
                }
            }
        } catch (o) {
            return U(o) ? {
                data: null,
                error: o
            } : {
                data: null,
                error: new mn("Unexpected error in challenge",o)
            }
        }
    }
    async _verify({challengeId: e, factorId: r, webauthn: n}) {
        return this.client.mfa.verify({
            factorId: r,
            challengeId: e,
            webauthn: n
        })
    }
    async _authenticate({factorId: e, webauthn: {rpId: r=typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n=typeof window < "u" ? [window.location.origin] : void 0, signal: s}}, i) {
        if (!r)
            return {
                data: null,
                error: new Ki("rpId is required for WebAuthn authentication")
            };
        try {
            if (!Rp())
                return {
                    data: null,
                    error: new mn("Browser does not support WebAuthn",null)
                };
            const {data: o, error: a} = await this.challenge({
                factorId: e,
                webauthn: {
                    rpId: r,
                    rpOrigins: n
                },
                signal: s
            }, {
                request: i
            });
            if (!o)
                return {
                    data: null,
                    error: a
                };
            const {webauthn: l} = o;
            return this._verify({
                factorId: e,
                challengeId: o.challengeId,
                webauthn: {
                    type: l.type,
                    rpId: r,
                    rpOrigins: n,
                    credential_response: l.credential_response
                }
            })
        } catch (o) {
            return U(o) ? {
                data: null,
                error: o
            } : {
                data: null,
                error: new mn("Unexpected error in authenticate",o)
            }
        }
    }
    async _register({friendlyName: e, rpId: r=typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n=typeof window < "u" ? [window.location.origin] : void 0, signal: s}, i) {
        if (!r)
            return {
                data: null,
                error: new Ki("rpId is required for WebAuthn registration")
            };
        try {
            if (!Rp())
                return {
                    data: null,
                    error: new mn("Browser does not support WebAuthn",null)
                };
            const {data: o, error: a} = await this._enroll({
                friendlyName: e
            });
            if (!o)
                return await this.client.mfa.listFactors().then(c => {
                    var f;
                    return (f = c.data) === null || f === void 0 ? void 0 : f.all.find(h => h.factor_type === "webauthn" && h.friendly_name === e && h.status !== "unverified")
                }
                ).then(c => c ? this.client.mfa.unenroll({
                    factorId: c == null ? void 0 : c.id
                }) : void 0),
                {
                    data: null,
                    error: a
                };
            const {data: l, error: u} = await this._challenge({
                factorId: o.id,
                friendlyName: o.friendly_name,
                webauthn: {
                    rpId: r,
                    rpOrigins: n
                },
                signal: s
            }, {
                create: i
            });
            return l ? this._verify({
                factorId: o.id,
                challengeId: l.challengeId,
                webauthn: {
                    rpId: r,
                    rpOrigins: n,
                    type: l.webauthn.type,
                    credential_response: l.webauthn.credential_response
                }
            }) : {
                data: null,
                error: u
            }
        } catch (o) {
            return U(o) ? {
                data: null,
                error: o
            } : {
                data: null,
                error: new mn("Unexpected error in register",o)
            }
        }
    }
}
rP();
const bP = {
    url: yT,
    storageKey: wT,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: xT,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
};
async function Ap(t, e, r) {
    return await r()
}
const Gn = {};
class Gi {
    get jwks() {
        var e, r;
        return (r = (e = Gn[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && r !== void 0 ? r : {
            keys: []
        }
    }
    set jwks(e) {
        Gn[this.storageKey] = Object.assign(Object.assign({}, Gn[this.storageKey]), {
            jwks: e
        })
    }
    get jwks_cached_at() {
        var e, r;
        return (r = (e = Gn[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER
    }
    set jwks_cached_at(e) {
        Gn[this.storageKey] = Object.assign(Object.assign({}, Gn[this.storageKey]), {
            cachedAt: e
        })
    }
    constructor(e) {
        var r, n;
        this.userStorage = null,
        this.memoryStorage = null,
        this.stateChangeEmitters = new Map,
        this.autoRefreshTicker = null,
        this.visibilityChangedCallback = null,
        this.refreshingDeferred = null,
        this.initializePromise = null,
        this.detectSessionInUrl = !0,
        this.hasCustomAuthorizationHeader = !1,
        this.suppressGetSessionWarning = !1,
        this.lockAcquired = !1,
        this.pendingInLock = [],
        this.broadcastChannel = null,
        this.logger = console.log,
        this.instanceID = Gi.nextInstanceID,
        Gi.nextInstanceID += 1,
        this.instanceID > 0 && tt() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const s = Object.assign(Object.assign({}, bP), e);
        if (this.logDebugMessages = !!s.debug,
        typeof s.debug == "function" && (this.logger = s.debug),
        this.persistSession = s.persistSession,
        this.storageKey = s.storageKey,
        this.autoRefreshToken = s.autoRefreshToken,
        this.admin = new ZT({
            url: s.url,
            headers: s.headers,
            fetch: s.fetch
        }),
        this.url = s.url,
        this.headers = s.headers,
        this.fetch = D0(s.fetch),
        this.lock = s.lock || Ap,
        this.detectSessionInUrl = s.detectSessionInUrl,
        this.flowType = s.flowType,
        this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader,
        s.lock ? this.lock = s.lock : tt() && (!((r = globalThis == null ? void 0 : globalThis.navigator) === null || r === void 0) && r.locks) ? this.lock = tP : this.lock = Ap,
        this.jwks || (this.jwks = {
            keys: []
        },
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
            webauthn: new xP(this)
        },
        this.persistSession ? (s.storage ? this.storage = s.storage : $0() ? this.storage = globalThis.localStorage : (this.memoryStorage = {},
        this.storage = jp(this.memoryStorage)),
        s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {},
        this.storage = jp(this.memoryStorage)),
        tt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (i) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i)
            }
            (n = this.broadcastChannel) === null || n === void 0 || n.addEventListener("message", async i => {
                this._debug("received broadcast notification from other tab or client", i),
                await this._notifyAllSubscribers(i.data.event, i.data.session, !1)
            }
            )
        }
        this.initialize()
    }
    _debug(...e) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${N0}) ${new Date().toISOString()}`, ...e),
        this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(),
        await this.initializePromise)
    }
    async _initialize() {
        var e;
        try {
            const r = IT(window.location.href);
            let n = "none";
            if (this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce"),
            tt() && this.detectSessionInUrl && n !== "none") {
                const {data: s, error: i} = await this._getSessionFromURL(r, n);
                if (i) {
                    if (this._debug("#_initialize()", "error detecting session from URL", i),
                    CT(i)) {
                        const l = (e = i.details) === null || e === void 0 ? void 0 : e.code;
                        if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
                            return {
                                error: i
                            }
                    }
                    return await this._removeSession(),
                    {
                        error: i
                    }
                }
                const {session: o, redirectType: a} = s;
                return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a),
                await this._saveSession(o),
                setTimeout(async () => {
                    a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o)
                }
                , 0),
                {
                    error: null
                }
            }
            return await this._recoverAndRefresh(),
            {
                error: null
            }
        } catch (r) {
            return U(r) ? {
                error: r
            } : {
                error: new mn("Unexpected error during initialization",r)
            }
        } finally {
            await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(e) {
        var r, n, s;
        try {
            const i = await V(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (n = (r = e == null ? void 0 : e.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
                    gotrue_meta_security: {
                        captcha_token: (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.captchaToken
                    }
                },
                xform: kt
            })
              , {data: o, error: a} = i;
            if (a || !o)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            const l = o.session
              , u = o.user;
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (i) {
            if (U(i))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signUp(e) {
        var r, n, s;
        try {
            let i;
            if ("email"in e) {
                const {email: c, password: f, options: h} = e;
                let d = null
                  , w = null;
                this.flowType === "pkce" && ([d,w] = await Hn(this.storage, this.storageKey)),
                i = await V(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: h == null ? void 0 : h.emailRedirectTo,
                    body: {
                        email: c,
                        password: f,
                        data: (r = h == null ? void 0 : h.data) !== null && r !== void 0 ? r : {},
                        gotrue_meta_security: {
                            captcha_token: h == null ? void 0 : h.captchaToken
                        },
                        code_challenge: d,
                        code_challenge_method: w
                    },
                    xform: kt
                })
            } else if ("phone"in e) {
                const {phone: c, password: f, options: h} = e;
                i = await V(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: c,
                        password: f,
                        data: (n = h == null ? void 0 : h.data) !== null && n !== void 0 ? n : {},
                        channel: (s = h == null ? void 0 : h.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: h == null ? void 0 : h.captchaToken
                        }
                    },
                    xform: kt
                })
            } else
                throw new Uo("You must provide either an email or phone number and a password");
            const {data: o, error: a} = i;
            if (a || !o)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            const l = o.session
              , u = o.user;
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (i) {
            if (U(i))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signInWithPassword(e) {
        try {
            let r;
            if ("email"in e) {
                const {email: i, password: o, options: a} = e;
                r = await V(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: Pp
                })
            } else if ("phone"in e) {
                const {phone: i, password: o, options: a} = e;
                r = await V(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: Pp
                })
            } else
                throw new Uo("You must provide either an email or phone number and a password");
            const {data: n, error: s} = r;
            return s ? {
                data: {
                    user: null,
                    session: null
                },
                error: s
            } : !n || !n.session || !n.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Wn
            } : (n.session && (await this._saveSession(n.session),
            await this._notifyAllSubscribers("SIGNED_IN", n.session)),
            {
                data: Object.assign({
                    user: n.user,
                    session: n.session
                }, n.weak_password ? {
                    weakPassword: n.weak_password
                } : null),
                error: s
            })
        } catch (r) {
            if (U(r))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                };
            throw r
        }
    }
    async signInWithOAuth(e) {
        var r, n, s, i;
        return await this._handleProviderSignIn(e.provider, {
            redirectTo: (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
            scopes: (n = e.options) === null || n === void 0 ? void 0 : n.scopes,
            queryParams: (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(e) {
        return await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
    }
    async signInWithWeb3(e) {
        const {chain: r} = e;
        switch (r) {
        case "ethereum":
            return await this.signInWithEthereum(e);
        case "solana":
            return await this.signInWithSolana(e);
        default:
            throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)
        }
    }
    async signInWithEthereum(e) {
        var r, n, s, i, o, a, l, u, c, f, h;
        let d, w;
        if ("message"in e)
            d = e.message,
            w = e.signature;
        else {
            const {chain: m, wallet: y, statement: g, options: p} = e;
            let v;
            if (tt())
                if (typeof y == "object")
                    v = y;
                else {
                    const R = window;
                    if ("ethereum"in R && typeof R.ethereum == "object" && "request"in R.ethereum && typeof R.ethereum.request == "function")
                        v = R.ethereum;
                    else
                        throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof y != "object" || !(p != null && p.url))
                    throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                v = y
            }
            const _ = new URL((r = p == null ? void 0 : p.url) !== null && r !== void 0 ? r : window.location.href)
              , S = await v.request({
                method: "eth_requestAccounts"
            }).then(R => R).catch( () => {
                throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")
            }
            );
            if (!S || S.length === 0)
                throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
            const E = F0(S[0]);
            let k = (n = p == null ? void 0 : p.signInWithEthereum) === null || n === void 0 ? void 0 : n.chainId;
            if (!k) {
                const R = await v.request({
                    method: "eth_chainId"
                });
                k = nP(R)
            }
            const P = {
                domain: _.host,
                address: E,
                statement: g,
                uri: _.href,
                version: "1",
                chainId: k,
                nonce: (s = p == null ? void 0 : p.signInWithEthereum) === null || s === void 0 ? void 0 : s.nonce,
                issuedAt: (o = (i = p == null ? void 0 : p.signInWithEthereum) === null || i === void 0 ? void 0 : i.issuedAt) !== null && o !== void 0 ? o : new Date,
                expirationTime: (a = p == null ? void 0 : p.signInWithEthereum) === null || a === void 0 ? void 0 : a.expirationTime,
                notBefore: (l = p == null ? void 0 : p.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
                requestId: (u = p == null ? void 0 : p.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
                resources: (c = p == null ? void 0 : p.signInWithEthereum) === null || c === void 0 ? void 0 : c.resources
            };
            d = iP(P),
            w = await v.request({
                method: "personal_sign",
                params: [sP(d), E]
            })
        }
        try {
            const {data: m, error: y} = await V(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "ethereum",
                    message: d,
                    signature: w
                }, !((f = e.options) === null || f === void 0) && f.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (h = e.options) === null || h === void 0 ? void 0 : h.captchaToken
                    }
                } : null),
                xform: kt
            });
            if (y)
                throw y;
            return !m || !m.session || !m.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Wn
            } : (m.session && (await this._saveSession(m.session),
            await this._notifyAllSubscribers("SIGNED_IN", m.session)),
            {
                data: Object.assign({}, m),
                error: y
            })
        } catch (m) {
            if (U(m))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: m
                };
            throw m
        }
    }
    async signInWithSolana(e) {
        var r, n, s, i, o, a, l, u, c, f, h, d;
        let w, m;
        if ("message"in e)
            w = e.message,
            m = e.signature;
        else {
            const {chain: y, wallet: g, statement: p, options: v} = e;
            let _;
            if (tt())
                if (typeof g == "object")
                    _ = g;
                else {
                    const E = window;
                    if ("solana"in E && typeof E.solana == "object" && ("signIn"in E.solana && typeof E.solana.signIn == "function" || "signMessage"in E.solana && typeof E.solana.signMessage == "function"))
                        _ = E.solana;
                    else
                        throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof g != "object" || !(v != null && v.url))
                    throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                _ = g
            }
            const S = new URL((r = v == null ? void 0 : v.url) !== null && r !== void 0 ? r : window.location.href);
            if ("signIn"in _ && _.signIn) {
                const E = await _.signIn(Object.assign(Object.assign(Object.assign({
                    issuedAt: new Date().toISOString()
                }, v == null ? void 0 : v.signInWithSolana), {
                    version: "1",
                    domain: S.host,
                    uri: S.href
                }), p ? {
                    statement: p
                } : null));
                let k;
                if (Array.isArray(E) && E[0] && typeof E[0] == "object")
                    k = E[0];
                else if (E && typeof E == "object" && "signedMessage"in E && "signature"in E)
                    k = E;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                if ("signedMessage"in k && "signature"in k && (typeof k.signedMessage == "string" || k.signedMessage instanceof Uint8Array) && k.signature instanceof Uint8Array)
                    w = typeof k.signedMessage == "string" ? k.signedMessage : new TextDecoder().decode(k.signedMessage),
                    m = k.signature;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
            } else {
                if (!("signMessage"in _) || typeof _.signMessage != "function" || !("publicKey"in _) || typeof _ != "object" || !_.publicKey || !("toBase58"in _.publicKey) || typeof _.publicKey.toBase58 != "function")
                    throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                w = [`${S.host} wants you to sign in with your Solana account:`, _.publicKey.toBase58(), ...p ? ["", p, ""] : [""], "Version: 1", `URI: ${S.href}`, `Issued At: ${(s = (n = v == null ? void 0 : v.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`, ...!((i = v == null ? void 0 : v.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${v.signInWithSolana.notBefore}`] : [], ...!((o = v == null ? void 0 : v.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${v.signInWithSolana.expirationTime}`] : [], ...!((a = v == null ? void 0 : v.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${v.signInWithSolana.chainId}`] : [], ...!((l = v == null ? void 0 : v.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${v.signInWithSolana.nonce}`] : [], ...!((u = v == null ? void 0 : v.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${v.signInWithSolana.requestId}`] : [], ...!((f = (c = v == null ? void 0 : v.signInWithSolana) === null || c === void 0 ? void 0 : c.resources) === null || f === void 0) && f.length ? ["Resources", ...v.signInWithSolana.resources.map(k => `- ${k}`)] : []].join(`
`);
                const E = await _.signMessage(new TextEncoder().encode(w), "utf8");
                if (!E || !(E instanceof Uint8Array))
                    throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                m = E
            }
        }
        try {
            const {data: y, error: g} = await V(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "solana",
                    message: w,
                    signature: wn(m)
                }, !((h = e.options) === null || h === void 0) && h.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (d = e.options) === null || d === void 0 ? void 0 : d.captchaToken
                    }
                } : null),
                xform: kt
            });
            if (g)
                throw g;
            return !y || !y.session || !y.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Wn
            } : (y.session && (await this._saveSession(y.session),
            await this._notifyAllSubscribers("SIGNED_IN", y.session)),
            {
                data: Object.assign({}, y),
                error: g
            })
        } catch (y) {
            if (U(y))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: y
                };
            throw y
        }
    }
    async _exchangeCodeForSession(e) {
        const r = await un(this.storage, `${this.storageKey}-code-verifier`)
          , [n,s] = (r ?? "").split("/");
        try {
            const {data: i, error: o} = await V(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: e,
                    code_verifier: n
                },
                xform: kt
            });
            if (await Sr(this.storage, `${this.storageKey}-code-verifier`),
            o)
                throw o;
            return !i || !i.session || !i.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new Wn
            } : (i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", i.session)),
            {
                data: Object.assign(Object.assign({}, i), {
                    redirectType: s ?? null
                }),
                error: o
            })
        } catch (i) {
            if (U(i))
                return {
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signInWithIdToken(e) {
        try {
            const {options: r, provider: n, token: s, access_token: i, nonce: o} = e
              , a = await V(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: n,
                    id_token: s,
                    access_token: i,
                    nonce: o,
                    gotrue_meta_security: {
                        captcha_token: r == null ? void 0 : r.captchaToken
                    }
                },
                xform: kt
            })
              , {data: l, error: u} = a;
            return u ? {
                data: {
                    user: null,
                    session: null
                },
                error: u
            } : !l || !l.session || !l.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Wn
            } : (l.session && (await this._saveSession(l.session),
            await this._notifyAllSubscribers("SIGNED_IN", l.session)),
            {
                data: l,
                error: u
            })
        } catch (r) {
            if (U(r))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                };
            throw r
        }
    }
    async signInWithOtp(e) {
        var r, n, s, i, o;
        try {
            if ("email"in e) {
                const {email: a, options: l} = e;
                let u = null
                  , c = null;
                this.flowType === "pkce" && ([u,c] = await Hn(this.storage, this.storageKey));
                const {error: f} = await V(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: a,
                        data: (r = l == null ? void 0 : l.data) !== null && r !== void 0 ? r : {},
                        create_user: (n = l == null ? void 0 : l.shouldCreateUser) !== null && n !== void 0 ? n : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        code_challenge: u,
                        code_challenge_method: c
                    },
                    redirectTo: l == null ? void 0 : l.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: f
                }
            }
            if ("phone"in e) {
                const {phone: a, options: l} = e
                  , {data: u, error: c} = await V(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: a,
                        data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
                        create_user: (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        channel: (o = l == null ? void 0 : l.channel) !== null && o !== void 0 ? o : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: u == null ? void 0 : u.message_id
                    },
                    error: c
                }
            }
            throw new Uo("You must provide either an email or phone number.")
        } catch (a) {
            if (U(a))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            throw a
        }
    }
    async verifyOtp(e) {
        var r, n;
        try {
            let s, i;
            "options"in e && (s = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
            i = (n = e.options) === null || n === void 0 ? void 0 : n.captchaToken);
            const {data: o, error: a} = await V(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                    gotrue_meta_security: {
                        captcha_token: i
                    }
                }),
                redirectTo: s,
                xform: kt
            });
            if (a)
                throw a;
            if (!o)
                throw new Error("An error occurred on token verification.");
            const l = o.session
              , u = o.user;
            return l != null && l.access_token && (await this._saveSession(l),
            await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)),
            {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (s) {
            if (U(s))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                };
            throw s
        }
    }
    async signInWithSSO(e) {
        var r, n, s;
        try {
            let i = null
              , o = null;
            return this.flowType === "pkce" && ([i,o] = await Hn(this.storage, this.storageKey)),
            await V(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in e ? {
                    provider_id: e.providerId
                } : null), "domain"in e ? {
                    domain: e.domain
                } : null), {
                    redirect_to: (n = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0
                }), !((s = e == null ? void 0 : e.options) === null || s === void 0) && s.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: e.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: i,
                    code_challenge_method: o
                }),
                headers: this.headers,
                xform: JT
            })
        } catch (i) {
            if (U(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async reauthenticate() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async e => {
                const {data: {session: r}, error: n} = e;
                if (n)
                    throw n;
                if (!r)
                    throw new Cr;
                const {error: s} = await V(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: r.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                }
            }
            )
        } catch (e) {
            if (U(e))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: e
                };
            throw e
        }
    }
    async resend(e) {
        try {
            const r = `${this.url}/resend`;
            if ("email"in e) {
                const {email: n, type: s, options: i} = e
                  , {error: o} = await V(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        email: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    },
                    redirectTo: i == null ? void 0 : i.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                }
            } else if ("phone"in e) {
                const {phone: n, type: s, options: i} = e
                  , {data: o, error: a} = await V(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        phone: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: o == null ? void 0 : o.message_id
                    },
                    error: a
                }
            }
            throw new Uo("You must provide either an email or phone number and a type")
        } catch (r) {
            if (U(r))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                };
            throw r
        }
    }
    async getSession() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => this._useSession(async r => r))
    }
    async _acquireLock(e, r) {
        this._debug("#_acquireLock", "begin", e);
        try {
            if (this.lockAcquired) {
                const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                  , s = (async () => (await n,
                await r()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await s
                    } catch {}
                }
                )()),
                s
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const n = r();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await n
                        } catch {}
                    }
                    )()),
                    await n; this.pendingInLock.length; ) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s),
                        this.pendingInLock.splice(0, s.length)
                    }
                    return await n
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                    this.lockAcquired = !1
                }
            }
            )
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(e) {
        this._debug("#_useSession", "begin");
        try {
            const r = await this.__loadSession();
            return await e(r)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"),
        this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let e = null;
            const r = await un(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", r),
            r !== null && (this._isValidSession(r) ? e = r : (this._debug("#getSession()", "session from storage is not valid"),
            await this._removeSession())),
            !e)
                return {
                    data: {
                        session: null
                    },
                    error: null
                };
            const n = e.expires_at ? e.expires_at * 1e3 - Date.now() < iu : !1;
            if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", e.expires_at),
            !n) {
                if (this.userStorage) {
                    const o = await un(this.userStorage, this.storageKey + "-user");
                    o != null && o.user ? e.user = o.user : e.user = lu()
                }
                if (this.storage.isServer && e.user) {
                    let o = this.suppressGetSessionWarning;
                    e = new Proxy(e,{
                        get: (l, u, c) => (!o && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
                        o = !0,
                        this.suppressGetSessionWarning = !0),
                        Reflect.get(l, u, c))
                    })
                }
                return {
                    data: {
                        session: e
                    },
                    error: null
                }
            }
            const {data: s, error: i} = await this._callRefreshToken(e.refresh_token);
            return i ? {
                data: {
                    session: null
                },
                error: i
            } : {
                data: {
                    session: s
                },
                error: null
            }
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(e) {
        return e ? await this._getUser(e) : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()))
    }
    async _getUser(e) {
        try {
            return e ? await V(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: Rr
            }) : await this._useSession(async r => {
                var n, s, i;
                const {data: o, error: a} = r;
                if (a)
                    throw a;
                return !(!((n = o.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new Cr
                } : await V(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (i = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null && i !== void 0 ? i : void 0,
                    xform: Rr
                })
            }
            )
        } catch (r) {
            if (U(r))
                return kT(r) && (await this._removeSession(),
                await Sr(this.storage, `${this.storageKey}-code-verifier`)),
                {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async updateUser(e, r={}) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(e, r))
    }
    async _updateUser(e, r={}) {
        try {
            return await this._useSession(async n => {
                const {data: s, error: i} = n;
                if (i)
                    throw i;
                if (!s.session)
                    throw new Cr;
                const o = s.session;
                let a = null
                  , l = null;
                this.flowType === "pkce" && e.email != null && ([a,l] = await Hn(this.storage, this.storageKey));
                const {data: u, error: c} = await V(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: r == null ? void 0 : r.emailRedirectTo,
                    body: Object.assign(Object.assign({}, e), {
                        code_challenge: a,
                        code_challenge_method: l
                    }),
                    jwt: o.access_token,
                    xform: Rr
                });
                if (c)
                    throw c;
                return o.user = u.user,
                await this._saveSession(o),
                await this._notifyAllSubscribers("USER_UPDATED", o),
                {
                    data: {
                        user: o.user
                    },
                    error: null
                }
            }
            )
        } catch (n) {
            if (U(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async setSession(e) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(e))
    }
    async _setSession(e) {
        try {
            if (!e.access_token || !e.refresh_token)
                throw new Cr;
            const r = Date.now() / 1e3;
            let n = r
              , s = !0
              , i = null;
            const {payload: o} = au(e.access_token);
            if (o.exp && (n = o.exp,
            s = n <= r),
            s) {
                const {data: a, error: l} = await this._callRefreshToken(e.refresh_token);
                if (l)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: l
                    };
                if (!a)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                i = a
            } else {
                const {data: a, error: l} = await this._getUser(e.access_token);
                if (l)
                    throw l;
                i = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: a.user,
                    token_type: "bearer",
                    expires_in: n - r,
                    expires_at: n
                },
                await this._saveSession(i),
                await this._notifyAllSubscribers("SIGNED_IN", i)
            }
            return {
                data: {
                    user: i.user,
                    session: i
                },
                error: null
            }
        } catch (r) {
            if (U(r))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async refreshSession(e) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(e))
    }
    async _refreshSession(e) {
        try {
            return await this._useSession(async r => {
                var n;
                if (!e) {
                    const {data: o, error: a} = r;
                    if (a)
                        throw a;
                    e = (n = o.session) !== null && n !== void 0 ? n : void 0
                }
                if (!(e != null && e.refresh_token))
                    throw new Cr;
                const {data: s, error: i} = await this._callRefreshToken(e.refresh_token);
                return i ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                } : s ? {
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                } : {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                }
            }
            )
        } catch (r) {
            if (U(r))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                };
            throw r
        }
    }
    async _getSessionFromURL(e, r) {
        try {
            if (!tt())
                throw new zo("No browser detected.");
            if (e.error || e.error_description || e.error_code)
                throw new zo(e.error_description || "Error in URL with unspecified error_description",{
                    error: e.error || "unspecified_error",
                    code: e.error_code || "unspecified_code"
                });
            switch (r) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new bp("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new zo("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (r === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !e.code)
                    throw new bp("No code detected.");
                const {data: p, error: v} = await this._exchangeCodeForSession(e.code);
                if (v)
                    throw v;
                const _ = new URL(window.location.href);
                return _.searchParams.delete("code"),
                window.history.replaceState(window.history.state, "", _.toString()),
                {
                    data: {
                        session: p.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {provider_token: n, provider_refresh_token: s, access_token: i, refresh_token: o, expires_in: a, expires_at: l, token_type: u} = e;
            if (!i || !a || !o || !u)
                throw new zo("No session defined in URL");
            const c = Math.round(Date.now() / 1e3)
              , f = parseInt(a);
            let h = c + f;
            l && (h = parseInt(l));
            const d = h - c;
            d * 1e3 <= Qn && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${f}s`);
            const w = h - f;
            c - w >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", w, h, c) : c - w < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", w, h, c);
            const {data: m, error: y} = await this._getUser(i);
            if (y)
                throw y;
            const g = {
                provider_token: n,
                provider_refresh_token: s,
                access_token: i,
                expires_in: f,
                expires_at: h,
                refresh_token: o,
                token_type: u,
                user: m.user
            };
            return window.location.hash = "",
            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
            {
                data: {
                    session: g,
                    redirectType: e.type
                },
                error: null
            }
        } catch (n) {
            if (U(n))
                return {
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: n
                };
            throw n
        }
    }
    _isImplicitGrantCallback(e) {
        return !!(e.access_token || e.error_description)
    }
    async _isPKCECallback(e) {
        const r = await un(this.storage, `${this.storageKey}-code-verifier`);
        return !!(e.code && r)
    }
    async signOut(e={
        scope: "global"
    }) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(e))
    }
    async _signOut({scope: e}={
        scope: "global"
    }) {
        return await this._useSession(async r => {
            var n;
            const {data: s, error: i} = r;
            if (i)
                return {
                    error: i
                };
            const o = (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
            if (o) {
                const {error: a} = await this.admin.signOut(o, e);
                if (a && !(ET(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
                    return {
                        error: a
                    }
            }
            return e !== "others" && (await this._removeSession(),
            await Sr(this.storage, `${this.storageKey}-code-verifier`)),
            {
                error: null
            }
        }
        )
    }
    onAuthStateChange(e) {
        const r = NT()
          , n = {
            id: r,
            callback: e,
            unsubscribe: () => {
                this._debug("#unsubscribe()", "state change callback with id removed", r),
                this.stateChangeEmitters.delete(r)
            }
        };
        return this._debug("#onAuthStateChange()", "registered callback with id", r),
        this.stateChangeEmitters.set(r, n),
        (async () => (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            this._emitInitialSession(r)
        }
        )))(),
        {
            data: {
                subscription: n
            }
        }
    }
    async _emitInitialSession(e) {
        return await this._useSession(async r => {
            var n, s;
            try {
                const {data: {session: i}, error: o} = r;
                if (o)
                    throw o;
                await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", i)),
                this._debug("INITIAL_SESSION", "callback id", e, "session", i)
            } catch (i) {
                await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", e, "error", i),
                console.error(i)
            }
        }
        )
    }
    async resetPasswordForEmail(e, r={}) {
        let n = null
          , s = null;
        this.flowType === "pkce" && ([n,s] = await Hn(this.storage, this.storageKey, !0));
        try {
            return await V(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: e,
                    code_challenge: n,
                    code_challenge_method: s,
                    gotrue_meta_security: {
                        captcha_token: r.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: r.redirectTo
            })
        } catch (i) {
            if (U(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async getUserIdentities() {
        var e;
        try {
            const {data: r, error: n} = await this.getUser();
            if (n)
                throw n;
            return {
                data: {
                    identities: (e = r.user.identities) !== null && e !== void 0 ? e : []
                },
                error: null
            }
        } catch (r) {
            if (U(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async linkIdentity(e) {
        return "token"in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e)
    }
    async linkIdentityOAuth(e) {
        var r;
        try {
            const {data: n, error: s} = await this._useSession(async i => {
                var o, a, l, u, c;
                const {data: f, error: h} = i;
                if (h)
                    throw h;
                const d = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                    redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
                    scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
                    queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0
                });
                return await V(this.fetch, "GET", d, {
                    headers: this.headers,
                    jwt: (c = (u = f.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
                })
            }
            );
            if (s)
                throw s;
            return tt() && !(!((r = e.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url),
            {
                data: {
                    provider: e.provider,
                    url: n == null ? void 0 : n.url
                },
                error: null
            }
        } catch (n) {
            if (U(n))
                return {
                    data: {
                        provider: e.provider,
                        url: null
                    },
                    error: n
                };
            throw n
        }
    }
    async linkIdentityIdToken(e) {
        return await this._useSession(async r => {
            var n;
            try {
                const {error: s, data: {session: i}} = r;
                if (s)
                    throw s;
                const {options: o, provider: a, token: l, access_token: u, nonce: c} = e
                  , f = await V(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                    headers: this.headers,
                    jwt: (n = i == null ? void 0 : i.access_token) !== null && n !== void 0 ? n : void 0,
                    body: {
                        provider: a,
                        id_token: l,
                        access_token: u,
                        nonce: c,
                        link_identity: !0,
                        gotrue_meta_security: {
                            captcha_token: o == null ? void 0 : o.captchaToken
                        }
                    },
                    xform: kt
                })
                  , {data: h, error: d} = f;
                return d ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                } : !h || !h.session || !h.user ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: new Wn
                } : (h.session && (await this._saveSession(h.session),
                await this._notifyAllSubscribers("USER_UPDATED", h.session)),
                {
                    data: h,
                    error: d
                })
            } catch (s) {
                if (U(s))
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: s
                    };
                throw s
            }
        }
        )
    }
    async unlinkIdentity(e) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {data: i, error: o} = r;
                if (o)
                    throw o;
                return await V(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (n = i.session) === null || n === void 0 ? void 0 : n.access_token) !== null && s !== void 0 ? s : void 0
                })
            }
            )
        } catch (r) {
            if (U(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _refreshAccessToken(e) {
        const r = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
        this._debug(r, "begin");
        try {
            const n = Date.now();
            return await DT(async s => (s > 0 && await $T(200 * Math.pow(2, s - 1)),
            this._debug(r, "refreshing attempt", s),
            await V(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: e
                },
                headers: this.headers,
                xform: kt
            })), (s, i) => {
                const o = 200 * Math.pow(2, s);
                return i && ou(i) && Date.now() + o - n < Qn
            }
            )
        } catch (n) {
            if (this._debug(r, "error", n),
            U(n))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: n
                };
            throw n
        } finally {
            this._debug(r, "end")
        }
    }
    _isValidSession(e) {
        return typeof e == "object" && e !== null && "access_token"in e && "refresh_token"in e && "expires_at"in e
    }
    async _handleProviderSignIn(e, r) {
        const n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: r.redirectTo,
            scopes: r.scopes,
            queryParams: r.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", e, "options", r, "url", n),
        tt() && !r.skipBrowserRedirect && window.location.assign(n),
        {
            data: {
                provider: e,
                url: n
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var e, r;
        const n = "#_recoverAndRefresh()";
        this._debug(n, "begin");
        try {
            const s = await un(this.storage, this.storageKey);
            if (s && this.userStorage) {
                let o = await un(this.userStorage, this.storageKey + "-user");
                !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = {
                    user: s.user
                },
                await Jn(this.userStorage, this.storageKey + "-user", o)),
                s.user = (e = o == null ? void 0 : o.user) !== null && e !== void 0 ? e : lu()
            } else if (s && !s.user && !s.user) {
                const o = await un(this.storage, this.storageKey + "-user");
                o && (o != null && o.user) ? (s.user = o.user,
                await Sr(this.storage, this.storageKey + "-user"),
                await Jn(this.storage, this.storageKey, s)) : s.user = lu()
            }
            if (this._debug(n, "session from storage", s),
            !this._isValidSession(s)) {
                this._debug(n, "session is not valid"),
                s !== null && await this._removeSession();
                return
            }
            const i = ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < iu;
            if (this._debug(n, `session has${i ? "" : " not"} expired with margin of ${iu}s`),
            i) {
                if (this.autoRefreshToken && s.refresh_token) {
                    const {error: o} = await this._callRefreshToken(s.refresh_token);
                    o && (console.error(o),
                    ou(o) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", o),
                    await this._removeSession()))
                }
            } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
                try {
                    const {data: o, error: a} = await this._getUser(s.access_token);
                    !a && (o != null && o.user) ? (s.user = o.user,
                    await this._saveSession(s),
                    await this._notifyAllSubscribers("SIGNED_IN", s)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification")
                } catch (o) {
                    console.error("Error getting user data:", o),
                    this._debug(n, "error getting user data, skipping SIGNED_IN notification", o)
                }
            else
                await this._notifyAllSubscribers("SIGNED_IN", s)
        } catch (s) {
            this._debug(n, "error", s),
            console.error(s);
            return
        } finally {
            this._debug(n, "end")
        }
    }
    async _callRefreshToken(e) {
        var r, n;
        if (!e)
            throw new Cr;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new gl;
            const {data: i, error: o} = await this._refreshAccessToken(e);
            if (o)
                throw o;
            if (!i.session)
                throw new Cr;
            await this._saveSession(i.session),
            await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
            const a = {
                data: i.session,
                error: null
            };
            return this.refreshingDeferred.resolve(a),
            a
        } catch (i) {
            if (this._debug(s, "error", i),
            U(i)) {
                const o = {
                    data: null,
                    error: i
                };
                return ou(i) || await this._removeSession(),
                (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(o),
                o
            }
            throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(i),
            i
        } finally {
            this.refreshingDeferred = null,
            this._debug(s, "end")
        }
    }
    async _notifyAllSubscribers(e, r, n=!0) {
        const s = `#_notifyAllSubscribers(${e})`;
        this._debug(s, "begin", r, `broadcast = ${n}`);
        try {
            this.broadcastChannel && n && this.broadcastChannel.postMessage({
                event: e,
                session: r
            });
            const i = []
              , o = Array.from(this.stateChangeEmitters.values()).map(async a => {
                try {
                    await a.callback(e, r)
                } catch (l) {
                    i.push(l)
                }
            }
            );
            if (await Promise.all(o),
            i.length > 0) {
                for (let a = 0; a < i.length; a += 1)
                    console.error(i[a]);
                throw i[0]
            }
        } finally {
            this._debug(s, "end")
        }
    }
    async _saveSession(e) {
        this._debug("#_saveSession()", e),
        this.suppressGetSessionWarning = !0;
        const r = Object.assign({}, e)
          , n = r.user && r.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
            !n && r.user && await Jn(this.userStorage, this.storageKey + "-user", {
                user: r.user
            });
            const s = Object.assign({}, r);
            delete s.user;
            const i = Cp(s);
            await Jn(this.storage, this.storageKey, i)
        } else {
            const s = Cp(r);
            await Jn(this.storage, this.storageKey, s)
        }
    }
    async _removeSession() {
        this._debug("#_removeSession()"),
        await Sr(this.storage, this.storageKey),
        await Sr(this.storage, this.storageKey + "-code-verifier"),
        await Sr(this.storage, this.storageKey + "-user"),
        this.userStorage && await Sr(this.userStorage, this.storageKey + "-user"),
        await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const e = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            e && tt() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e)
        } catch (r) {
            console.error("removing visibilitychange callback failed", r)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug("#_startAutoRefresh()");
        const e = setInterval( () => this._autoRefreshTokenTick(), Qn);
        this.autoRefreshTicker = e,
        e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e),
        setTimeout(async () => {
            await this.initializePromise,
            await this._autoRefreshTokenTick()
        }
        , 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const e = this.autoRefreshTicker;
        this.autoRefreshTicker = null,
        e && clearInterval(e)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const e = Date.now();
                    try {
                        return await this._useSession(async r => {
                            const {data: {session: n}} = r;
                            if (!n || !n.refresh_token || !n.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const s = Math.floor((n.expires_at * 1e3 - e) / Qn);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${Qn}ms, refresh threshold is ${Tc} ticks`),
                            s <= Tc && await this._callRefreshToken(n.refresh_token)
                        }
                        )
                    } catch (r) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", r)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            }
            )
        } catch (e) {
            if (e.isAcquireTimeout || e instanceof M0)
                this._debug("auto refresh token tick lock not available");
            else
                throw e
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"),
        !tt() || !(window != null && window.addEventListener))
            return this.autoRefreshToken && this.startAutoRefresh(),
            !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
            window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
            await this._onVisibilityChanged(!0)
        } catch (e) {
            console.error("_handleVisibilityChange", e)
        }
    }
    async _onVisibilityChanged(e) {
        const r = `#_onVisibilityChanged(${e})`;
        this._debug(r, "visibilityState", document.visibilityState),
        document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(),
        e || (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }
        ))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(e, r, n) {
        const s = [`provider=${encodeURIComponent(r)}`];
        if (n != null && n.redirectTo && s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
        n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
        this.flowType === "pkce") {
            const [i,o] = await Hn(this.storage, this.storageKey)
              , a = new URLSearchParams({
                code_challenge: `${encodeURIComponent(i)}`,
                code_challenge_method: `${encodeURIComponent(o)}`
            });
            s.push(a.toString())
        }
        if (n != null && n.queryParams) {
            const i = new URLSearchParams(n.queryParams);
            s.push(i.toString())
        }
        return n != null && n.skipBrowserRedirect && s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
        `${e}?${s.join("&")}`
    }
    async _unenroll(e) {
        try {
            return await this._useSession(async r => {
                var n;
                const {data: s, error: i} = r;
                return i ? {
                    data: null,
                    error: i
                } : await V(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                    headers: this.headers,
                    jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                })
            }
            )
        } catch (r) {
            if (U(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _enroll(e) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {data: i, error: o} = r;
                if (o)
                    return {
                        data: null,
                        error: o
                    };
                const a = Object.assign({
                    friendly_name: e.friendlyName,
                    factor_type: e.factorType
                }, e.factorType === "phone" ? {
                    phone: e.phone
                } : e.factorType === "totp" ? {
                    issuer: e.issuer
                } : {})
                  , {data: l, error: u} = await V(this.fetch, "POST", `${this.url}/factors`, {
                    body: a,
                    headers: this.headers,
                    jwt: (n = i == null ? void 0 : i.session) === null || n === void 0 ? void 0 : n.access_token
                });
                return u ? {
                    data: null,
                    error: u
                } : (e.factorType === "totp" && l.type === "totp" && (!((s = l == null ? void 0 : l.totp) === null || s === void 0) && s.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
                {
                    data: l,
                    error: null
                })
            }
            )
        } catch (r) {
            if (U(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async _verify(e) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {data: s, error: i} = r;
                    if (i)
                        return {
                            data: null,
                            error: i
                        };
                    const o = Object.assign({
                        challenge_id: e.challengeId
                    }, "webauthn"in e ? {
                        webauthn: Object.assign(Object.assign({}, e.webauthn), {
                            credential_response: e.webauthn.type === "create" ? fP(e.webauthn.credential_response) : hP(e.webauthn.credential_response)
                        })
                    } : {
                        code: e.code
                    })
                      , {data: a, error: l} = await V(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                        body: o,
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                    return l ? {
                        data: null,
                        error: l
                    } : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + a.expires_in
                    }, a)),
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
                    {
                        data: a,
                        error: l
                    })
                }
                )
            } catch (r) {
                if (U(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        }
        )
    }
    async _challenge(e) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {data: s, error: i} = r;
                    if (i)
                        return {
                            data: null,
                            error: i
                        };
                    const o = await V(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                        body: e,
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                    if (o.error)
                        return o;
                    const {data: a} = o;
                    if (a.type !== "webauthn")
                        return {
                            data: a,
                            error: null
                        };
                    switch (a.webauthn.type) {
                    case "create":
                        return {
                            data: Object.assign(Object.assign({}, a), {
                                webauthn: Object.assign(Object.assign({}, a.webauthn), {
                                    credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), {
                                        publicKey: cP(a.webauthn.credential_options.publicKey)
                                    })
                                })
                            }),
                            error: null
                        };
                    case "request":
                        return {
                            data: Object.assign(Object.assign({}, a), {
                                webauthn: Object.assign(Object.assign({}, a.webauthn), {
                                    credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), {
                                        publicKey: dP(a.webauthn.credential_options.publicKey)
                                    })
                                })
                            }),
                            error: null
                        }
                    }
                }
                )
            } catch (r) {
                if (U(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        }
        )
    }
    async _challengeAndVerify(e) {
        const {data: r, error: n} = await this._challenge({
            factorId: e.factorId
        });
        return n ? {
            data: null,
            error: n
        } : await this._verify({
            factorId: e.factorId,
            challengeId: r.id,
            code: e.code
        })
    }
    async _listFactors() {
        var e;
        const {data: {user: r}, error: n} = await this.getUser();
        if (n)
            return {
                data: null,
                error: n
            };
        const s = {
            all: [],
            phone: [],
            totp: [],
            webauthn: []
        };
        for (const i of (e = r == null ? void 0 : r.factors) !== null && e !== void 0 ? e : [])
            s.all.push(i),
            i.status === "verified" && s[i.factor_type].push(i);
        return {
            data: s,
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async e => {
            var r, n;
            const {data: {session: s}, error: i} = e;
            if (i)
                return {
                    data: null,
                    error: i
                };
            if (!s)
                return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
            const {payload: o} = au(s.access_token);
            let a = null;
            o.aal && (a = o.aal);
            let l = a;
            ((n = (r = s.user.factors) === null || r === void 0 ? void 0 : r.filter(f => f.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (l = "aal2");
            const c = o.amr || [];
            return {
                data: {
                    currentLevel: a,
                    nextLevel: l,
                    currentAuthenticationMethods: c
                },
                error: null
            }
        }
        ))
    }
    async fetchJwk(e, r={
        keys: []
    }) {
        let n = r.keys.find(a => a.kid === e);
        if (n)
            return n;
        const s = Date.now();
        if (n = this.jwks.keys.find(a => a.kid === e),
        n && this.jwks_cached_at + _T > s)
            return n;
        const {data: i, error: o} = await V(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (o)
            throw o;
        return !i.keys || i.keys.length === 0 || (this.jwks = i,
        this.jwks_cached_at = s,
        n = i.keys.find(a => a.kid === e),
        !n) ? null : n
    }
    async getClaims(e, r={}) {
        try {
            let n = e;
            if (!n) {
                const {data: d, error: w} = await this.getSession();
                if (w || !d.session)
                    return {
                        data: null,
                        error: w
                    };
                n = d.session.access_token
            }
            const {header: s, payload: i, signature: o, raw: {header: a, payload: l}} = au(n);
            r != null && r.allowExpired || WT(i.exp);
            const u = !s.alg || s.alg.startsWith("HS") || !s.kid || !("crypto"in globalThis && "subtle"in globalThis.crypto) ? null : await this.fetchJwk(s.kid, r != null && r.keys ? {
                keys: r.keys
            } : r == null ? void 0 : r.jwks);
            if (!u) {
                const {error: d} = await this.getUser(n);
                if (d)
                    throw d;
                return {
                    data: {
                        claims: i,
                        header: s,
                        signature: o
                    },
                    error: null
                }
            }
            const c = HT(s.alg)
              , f = await crypto.subtle.importKey("jwk", u, c, !0, ["verify"]);
            if (!await crypto.subtle.verify(c, f, o, RT(`${a}.${l}`)))
                throw new jc("Invalid JWT signature");
            return {
                data: {
                    claims: i,
                    header: s,
                    signature: o
                },
                error: null
            }
        } catch (n) {
            if (U(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
}
Gi.nextInstanceID = 0;
const _P = Gi;
class SP extends _P {
    constructor(e) {
        super(e)
    }
}
class EP {
    constructor(e, r, n) {
        var s, i, o;
        this.supabaseUrl = e,
        this.supabaseKey = r;
        const a = vT(e);
        if (!r)
            throw new Error("supabaseKey is required.");
        this.realtimeUrl = new URL("realtime/v1",a),
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"),
        this.authUrl = new URL("auth/v1",a),
        this.storageUrl = new URL("storage/v1",a),
        this.functionsUrl = new URL("functions/v1",a);
        const l = `sb-${a.hostname.split(".")[0]}-auth-token`
          , u = {
            db: uT,
            realtime: dT,
            auth: Object.assign(Object.assign({}, cT), {
                storageKey: l
            }),
            global: lT
        }
          , c = gT(n ?? {}, u);
        this.storageKey = (s = c.auth.storageKey) !== null && s !== void 0 ? s : "",
        this.headers = (i = c.global.headers) !== null && i !== void 0 ? i : {},
        c.accessToken ? (this.accessToken = c.accessToken,
        this.auth = new Proxy({},{
            get: (f, h) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((o = c.auth) !== null && o !== void 0 ? o : {}, this.headers, c.global.fetch),
        this.fetch = pT(r, this._getAccessToken.bind(this), c.global.fetch),
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, c.realtime)),
        this.rest = new yC(new URL("rest/v1",a).href,{
            headers: this.headers,
            schema: c.db.schema,
            fetch: this.fetch
        }),
        this.storage = new iT(this.storageUrl.href,this.headers,this.fetch,n == null ? void 0 : n.storage),
        c.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new cC(this.functionsUrl.href,{
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    from(e) {
        return this.rest.from(e)
    }
    schema(e) {
        return this.rest.schema(e)
    }
    rpc(e, r={}, n={
        head: !1,
        get: !1,
        count: void 0
    }) {
        return this.rest.rpc(e, r, n)
    }
    channel(e, r={
        config: {}
    }) {
        return this.realtime.channel(e, r)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(e) {
        return this.realtime.removeChannel(e)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    async _getAccessToken() {
        var e, r;
        if (this.accessToken)
            return await this.accessToken();
        const {data: n} = await this.auth.getSession();
        return (r = (e = n.session) === null || e === void 0 ? void 0 : e.access_token) !== null && r !== void 0 ? r : this.supabaseKey
    }
    _initSupabaseAuthClient({autoRefreshToken: e, persistSession: r, detectSessionInUrl: n, storage: s, userStorage: i, storageKey: o, flowType: a, lock: l, debug: u}, c, f) {
        const h = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new SP({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, h), c),
            storageKey: o,
            autoRefreshToken: e,
            persistSession: r,
            detectSessionInUrl: n,
            storage: s,
            userStorage: i,
            flowType: a,
            lock: l,
            debug: u,
            fetch: f,
            hasCustomAuthorizationHeader: Object.keys(this.headers).some(d => d.toLowerCase() === "authorization")
        })
    }
    _initRealtimeClient(e) {
        return new LC(this.realtimeUrl.href,Object.assign(Object.assign({}, e), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, e == null ? void 0 : e.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange( (r, n) => {
            this._handleTokenChanged(r, "CLIENT", n == null ? void 0 : n.access_token)
        }
        )
    }
    _handleTokenChanged(e, r, n) {
        (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== n ? (this.changedAccessToken = n,
        this.realtime.setAuth(n)) : e === "SIGNED_OUT" && (this.realtime.setAuth(),
        r == "STORAGE" && this.auth.signOut(),
        this.changedAccessToken = void 0)
    }
}
const kP = (t, e, r) => new EP(t,e,r);
function CP() {
    if (typeof window < "u" || typeof process > "u")
        return !1;
    const t = process.version;
    if (t == null)
        return !1;
    const e = t.match(/^v(\d+)\./);
    return e ? parseInt(e[1], 10) <= 18 : !1
}
CP() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const TP = "https://hsocycfnptysrtnupvrf.supabase.co"
  , PP = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhzb2N5Y2ZucHR5c3J0bnVwdnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1MDMxOTYsImV4cCI6MjA3NzA3OTE5Nn0.hocnIW7GztW7dZXgf2O7aPav-SxCI_i_DgHYmjAHInQ"
  , OP = kP(TP, PP, {
    auth: {
        storage: localStorage,
        persistSession: !0,
        autoRefreshToken: !0
    }
})
  , jP = () => {
    const [t,e] = b.useState(!1)
      , [r,n] = b.useState({
        nom: "",
        email: "",
        telephone: "",
        depart: "",
        arrivee: "",
        date: "",
        details: ""
    })
      , s = async o => {
        o.preventDefault(),
        e(!0);
        try {
            const {data: a, error: l} = await OP.functions.invoke("send-devis-email", {
                body: r
            });
            if (l)
                throw l;
            Rh.success("Demande envoyée ! Nous vous recontactons sous 2h. Vérifiez également votre boîte email."),
            n({
                nom: "",
                email: "",
                telephone: "",
                depart: "",
                arrivee: "",
                date: "",
                details: ""
            })
        } catch (a) {
            console.error("Erreur lors de l'envoi:", a),
            Rh.error("Une erreur s'est produite. Veuillez réessayer ou nous contacter par téléphone.")
        } finally {
            e(!1)
        }
    }
      , i = o => {
        n({
            ...r,
            [o.target.name]: o.target.value
        })
    }
    ;
    return x.jsx("section", {
        id: "devis",
        className: "py-20 bg-muted/30",
        children: x.jsx("div", {
            className: "container mx-auto px-4",
            children: x.jsxs("div", {
                className: "max-w-3xl mx-auto",
                children: [x.jsxs("div", {
                    className: "text-center mb-12",
                    children: [x.jsx("div", {
                        className: "flex justify-center mb-6",
                        children: x.jsx("div", {
                            className: "w-16 h-16 bg-primary rounded-full flex items-center justify-center",
                            children: x.jsx(P1, {
                                className: "w-8 h-8 text-primary-foreground"
                            })
                        })
                    }), x.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-4 text-secondary",
                        children: "Demandez Votre Devis Gratuit"
                    }), x.jsx("p", {
                        className: "text-xl text-muted-foreground",
                        children: "Réponse sous 2 heures. Service de déménagement sur mesure pour particuliers et professionnels."
                    })]
                }), x.jsxs(Hd, {
                    className: "border-2",
                    children: [x.jsxs(qd, {
                        children: [x.jsx(Kd, {
                            className: "text-2xl",
                            children: "Formulaire de demande"
                        }), x.jsx(Gd, {
                            children: "Remplissez ce formulaire pour obtenir votre devis de déménagement gratuit et personnalisé"
                        })]
                    }), x.jsx(Fy, {
                        children: x.jsxs("form", {
                            onSubmit: s,
                            className: "space-y-6",
                            children: [x.jsxs("div", {
                                className: "grid md:grid-cols-2 gap-4",
                                children: [x.jsxs("div", {
                                    className: "space-y-2",
                                    children: [x.jsx(kr, {
                                        htmlFor: "nom",
                                        children: "Nom complet *"
                                    }), x.jsx(fn, {
                                        id: "nom",
                                        name: "nom",
                                        value: r.nom,
                                        onChange: i,
                                        required: !0,
                                        placeholder: "Votre nom"
                                    })]
                                }), x.jsxs("div", {
                                    className: "space-y-2",
                                    children: [x.jsx(kr, {
                                        htmlFor: "telephone",
                                        children: "Téléphone *"
                                    }), x.jsx(fn, {
                                        id: "telephone",
                                        name: "telephone",
                                        type: "tel",
                                        value: r.telephone,
                                        onChange: i,
                                        required: !0,
                                        placeholder: "06 12 34 56 78"
                                    })]
                                })]
                            }), x.jsxs("div", {
                                className: "space-y-2",
                                children: [x.jsx(kr, {
                                    htmlFor: "email",
                                    children: "Email *"
                                }), x.jsx(fn, {
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    value: r.email,
                                    onChange: i,
                                    required: !0,
                                    placeholder: "votre@email.com"
                                })]
                            }), x.jsxs("div", {
                                className: "grid md:grid-cols-2 gap-4",
                                children: [x.jsxs("div", {
                                    className: "space-y-2",
                                    children: [x.jsx(kr, {
                                        htmlFor: "depart",
                                        children: "Adresse de départ *"
                                    }), x.jsx(fn, {
                                        id: "depart",
                                        name: "depart",
                                        value: r.depart,
                                        onChange: i,
                                        required: !0,
                                        placeholder: "Paris 75001"
                                    })]
                                }), x.jsxs("div", {
                                    className: "space-y-2",
                                    children: [x.jsx(kr, {
                                        htmlFor: "arrivee",
                                        children: "Adresse d'arrivée *"
                                    }), x.jsx(fn, {
                                        id: "arrivee",
                                        name: "arrivee",
                                        value: r.arrivee,
                                        onChange: i,
                                        required: !0,
                                        placeholder: "Paris 75015"
                                    })]
                                })]
                            }), x.jsxs("div", {
                                className: "space-y-2",
                                children: [x.jsx(kr, {
                                    htmlFor: "date",
                                    children: "Date souhaitée"
                                }), x.jsx(fn, {
                                    id: "date",
                                    name: "date",
                                    type: "date",
                                    value: r.date,
                                    onChange: i
                                })]
                            }), x.jsxs("div", {
                                className: "space-y-2",
                                children: [x.jsx(kr, {
                                    htmlFor: "details",
                                    children: "Détails du déménagement"
                                }), x.jsx(Uy, {
                                    id: "details",
                                    name: "details",
                                    value: r.details,
                                    onChange: i,
                                    placeholder: "Nombre de pièces, objets fragiles, monte-meuble nécessaire, etc.",
                                    rows: 4
                                })]
                            }), x.jsx($s, {
                                type: "submit",
                                size: "lg",
                                className: "w-full text-lg py-6",
                                disabled: t,
                                children: t ? "Envoi en cours..." : "Obtenir mon devis gratuit"
                            }), x.jsx("p", {
                                className: "text-sm text-muted-foreground text-center",
                                children: "En soumettant ce formulaire, vous acceptez d'être contacté par Soft Transports concernant votre demande de devis de déménagement."
                            })]
                        })
                    })]
                })]
            })
        })
    })
}
  , RP = () => x.jsx("section", {
    className: "py-20 bg-background",
    children: x.jsx("div", {
        className: "container mx-auto px-4",
        children: x.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [x.jsxs("div", {
                className: "text-center mb-12",
                children: [x.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-4 text-secondary",
                    children: "Contactez-Nous"
                }), x.jsx("p", {
                    className: "text-xl text-muted-foreground",
                    children: "Notre équipe est disponible pour répondre à toutes vos questions"
                })]
            }), x.jsxs("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [x.jsxs("div", {
                    className: "bg-muted/50 rounded-xl p-8 space-y-6",
                    children: [x.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [x.jsx("div", {
                            className: "w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0",
                            children: x.jsx(Rd, {
                                className: "w-6 h-6 text-primary-foreground"
                            })
                        }), x.jsxs("div", {
                            children: [x.jsx("h3", {
                                className: "font-bold text-lg mb-1",
                                children: "Téléphone"
                            }), x.jsx("a", {
                                href: "tel:+33758562250",
                                className: "text-muted-foreground hover:text-primary transition-colors",
                                children: "07 58 56 22 50"
                            }), x.jsx("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: "Appel gratuit 7j/7"
                            })]
                        })]
                    }), x.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [x.jsx("div", {
                            className: "w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0",
                            children: x.jsx(j1, {
                                className: "w-6 h-6 text-primary-foreground"
                            })
                        }), x.jsxs("div", {
                            children: [x.jsx("h3", {
                                className: "font-bold text-lg mb-1",
                                children: "Email"
                            }), x.jsx("a", {
                                href: "mailto:contact@soft-transports.fr",
                                className: "text-muted-foreground hover:text-primary transition-colors",
                                children: "contact@soft-transports.fr"
                            }), x.jsx("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: "Réponse sous 24h"
                            })]
                        })]
                    }), x.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [x.jsx("div", {
                            className: "w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0",
                            children: x.jsx(Iv, {
                                className: "w-6 h-6 text-primary-foreground"
                            })
                        }), x.jsxs("div", {
                            children: [x.jsx("h3", {
                                className: "font-bold text-lg mb-1",
                                children: "Adresse"
                            }), x.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Paris & Île-de-France"
                            }), x.jsx("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: "Interventions sur toute la région"
                            })]
                        })]
                    })]
                }), x.jsxs("div", {
                    className: "bg-primary text-primary-foreground rounded-xl p-8",
                    children: [x.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [x.jsx("div", {
                            className: "w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center",
                            children: x.jsx(Nv, {
                                className: "w-6 h-6"
                            })
                        }), x.jsx("h3", {
                            className: "font-bold text-2xl",
                            children: "Horaires d'ouverture"
                        })]
                    }), x.jsxs("div", {
                        className: "space-y-4",
                        children: [x.jsxs("div", {
                            className: "flex justify-between items-center pb-3 border-b border-primary-foreground/20",
                            children: [x.jsx("span", {
                                className: "font-medium",
                                children: "Lundi - Vendredi"
                            }), x.jsx("span", {
                                children: "8h00 - 19h00"
                            })]
                        }), x.jsxs("div", {
                            className: "flex justify-between items-center pb-3 border-b border-primary-foreground/20",
                            children: [x.jsx("span", {
                                className: "font-medium",
                                children: "Samedi"
                            }), x.jsx("span", {
                                children: "9h00 - 17h00"
                            })]
                        }), x.jsxs("div", {
                            className: "flex justify-between items-center pb-3 border-b border-primary-foreground/20",
                            children: [x.jsx("span", {
                                className: "font-medium",
                                children: "Dimanche"
                            }), x.jsx("span", {
                                children: "Sur rendez-vous"
                            })]
                        })]
                    }), x.jsx("div", {
                        className: "mt-8 p-4 bg-primary-foreground/10 rounded-lg",
                        children: x.jsx("p", {
                            className: "text-sm",
                            children: "Service d'urgence disponible 24h/24 pour les déménagements express"
                        })
                    })]
                })]
            })]
        })
    })
})
  , AP = () => {
    const t = new Date().getFullYear();
    return x.jsx("footer", {
        className: "bg-secondary text-secondary-foreground py-12",
        children: x.jsxs("div", {
            className: "container mx-auto px-4",
            children: [x.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 mb-8",
                children: [x.jsxs("div", {
                    children: [x.jsx("img", {
                        src: My,
                        alt: "Soft Transports",
                        className: "w-32 h-32 object-contain mb-4 bg-white rounded-lg p-2"
                    }), x.jsx("p", {
                        className: "text-sm opacity-90",
                        children: "Expert en déménagement à Paris et en Île-de-France. Votre déménagement, notre métier."
                    })]
                }), x.jsxs("div", {
                    children: [x.jsx("h3", {
                        className: "font-bold text-lg mb-4",
                        children: "Nos Services"
                    }), x.jsxs("ul", {
                        className: "space-y-2 text-sm opacity-90",
                        children: [x.jsx("li", {
                            children: "Déménagement particulier"
                        }), x.jsx("li", {
                            children: "Déménagement professionnel"
                        }), x.jsx("li", {
                            children: "Monte-meuble Paris"
                        }), x.jsx("li", {
                            children: "Garde-meubles"
                        }), x.jsx("li", {
                            children: "Déménagement express"
                        }), x.jsx("li", {
                            children: "Transport sécurisé"
                        })]
                    })]
                }), x.jsxs("div", {
                    children: [x.jsx("h3", {
                        className: "font-bold text-lg mb-4",
                        children: "Informations"
                    }), x.jsxs("ul", {
                        className: "space-y-2 text-sm opacity-90",
                        children: [x.jsx("li", {
                            children: "Devis gratuit"
                        }), x.jsx("li", {
                            children: "Zone d'intervention"
                        }), x.jsx("li", {
                            children: "Mentions légales"
                        }), x.jsx("li", {
                            children: "Politique de confidentialité"
                        }), x.jsx("li", {
                            children: "CGV"
                        })]
                    })]
                })]
            }), x.jsxs("div", {
                className: "border-t border-secondary-foreground/20 pt-8 text-center",
                children: [x.jsxs("p", {
                    className: "text-sm opacity-90",
                    children: ["© ", t, " Soft Transports. Tous droits réservés. | Déménagement Paris & Île-de-France"]
                }), x.jsx("p", {
                    className: "text-xs opacity-75 mt-2",
                    children: "Déménageurs professionnels certifiés - Transport sécurisé - Service complet de déménagement"
                })]
            })]
        })
    })
}
  , NP = () => x.jsxs("main", {
    className: "min-h-screen",
    children: [x.jsx(qk, {}), x.jsx(Kk, {}), x.jsx(Jk, {}), x.jsx(Xk, {}), x.jsx(eC, {}), x.jsx(jP, {}), x.jsx(RP, {}), x.jsx(AP, {})]
})
  , IP = () => {
    const t = Dy();
    return b.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", t.pathname)
    }
    , [t.pathname]),
    x.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: x.jsxs("div", {
            className: "text-center",
            children: [x.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), x.jsx("p", {
                className: "mb-4 text-xl text-gray-600",
                children: "Oops! Page not found"
            }), x.jsx("a", {
                href: "/",
                className: "text-blue-500 underline hover:text-blue-700",
                children: "Return to Home"
            })]
        })
    })
}
  , LP = new nk
  , $P = () => x.jsx(ik, {
    client: LP,
    children: x.jsxs(NE, {
        children: [x.jsx(g_, {}), x.jsx(G_, {}), x.jsx(Wk, {
            children: x.jsxs(zk, {
                children: [x.jsx(gc, {
                    path: "/",
                    element: x.jsx(NP, {})
                }), x.jsx(gc, {
                    path: "*",
                    element: x.jsx(IP, {})
                })]
            })
        })]
    })
});
nv(document.getElementById("root")).render(x.jsx($P, {}));