(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function bd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var yu = { exports: {} },
  Xo = {},
  xu = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = Symbol.for('react.element'),
  ef = Symbol.for('react.portal'),
  tf = Symbol.for('react.fragment'),
  nf = Symbol.for('react.strict_mode'),
  rf = Symbol.for('react.profiler'),
  of = Symbol.for('react.provider'),
  lf = Symbol.for('react.context'),
  sf = Symbol.for('react.forward_ref'),
  af = Symbol.for('react.suspense'),
  uf = Symbol.for('react.memo'),
  cf = Symbol.for('react.lazy'),
  Gs = Symbol.iterator;
function df(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Gs && e[Gs]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var wu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Su = Object.assign,
  ku = {};
function Kn(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = ku), (this.updater = n || wu);
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Cu() {}
Cu.prototype = Kn.prototype;
function Ql(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = ku), (this.updater = n || wu);
}
var Gl = (Ql.prototype = new Cu());
Gl.constructor = Ql;
Su(Gl, Kn.prototype);
Gl.isPureReactComponent = !0;
var Ys = Array.isArray,
  _u = Object.prototype.hasOwnProperty,
  Yl = { current: null },
  Eu = { key: !0, ref: !0, __self: !0, __source: !0 };
function ju(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      _u.call(t, r) && !Eu.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Tr, type: e, key: i, ref: l, props: o, _owner: Yl.current };
}
function ff(e, t) {
  return {
    $$typeof: Tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Tr;
}
function pf(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Xs = /\/+/g;
function gi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? pf('' + e.key)
    : t.toString(36);
}
function lo(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Tr:
          case ef:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + gi(l, 0) : r),
      Ys(o)
        ? ((n = ''),
          e != null && (n = e.replace(Xs, '$&/') + '/'),
          lo(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (Xl(o) &&
            (o = ff(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Xs, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Ys(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + gi(i, s);
      l += lo(i, t, n, a, o);
    }
  else if (((a = df(e)), typeof a == 'function'))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + gi(i, s++)), (l += lo(i, t, n, a, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return l;
}
function Ar(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    lo(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function hf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  so = { transition: null },
  mf = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: so, ReactCurrentOwner: Yl };
function Pu() {
  throw Error('act(...) is not supported in production builds of React.');
}
U.Children = {
  map: Ar,
  forEach: function (e, t, n) {
    Ar(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ar(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ar(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xl(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
U.Component = Kn;
U.Fragment = tf;
U.Profiler = rf;
U.PureComponent = Ql;
U.StrictMode = nf;
U.Suspense = af;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mf;
U.act = Pu;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = Su({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Yl.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      _u.call(t, a) &&
        !Eu.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Tr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: lf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: of, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = ju;
U.createFactory = function (e) {
  var t = ju.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: sf, render: e };
};
U.isValidElement = Xl;
U.lazy = function (e) {
  return { $$typeof: cf, _payload: { _status: -1, _result: e }, _init: hf };
};
U.memo = function (e, t) {
  return { $$typeof: uf, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = so.transition;
  so.transition = {};
  try {
    e();
  } finally {
    so.transition = t;
  }
};
U.unstable_act = Pu;
U.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Pe.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
U.useId = function () {
  return Pe.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Pe.current.useRef(e);
};
U.useState = function (e) {
  return Pe.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Pe.current.useTransition();
};
U.version = '18.3.1';
xu.exports = U;
var O = xu.exports;
const Z = bd(O);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vf = O,
  gf = Symbol.for('react.element'),
  yf = Symbol.for('react.fragment'),
  xf = Object.prototype.hasOwnProperty,
  wf = vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ru(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) xf.call(t, r) && !Sf.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: gf, type: e, key: i, ref: l, props: o, _owner: wf.current };
}
Xo.Fragment = yf;
Xo.jsx = Ru;
Xo.jsxs = Ru;
yu.exports = Xo;
var c = yu.exports,
  Xi = {},
  Lu = { exports: {} },
  Ue = {},
  $u = { exports: {} },
  Mu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(S, N) {
    var M = S.length;
    S.push(N);
    e: for (; 0 < M; ) {
      var F = (M - 1) >>> 1,
        z = S[F];
      if (0 < o(z, N)) (S[F] = N), (S[M] = z), (M = F);
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var N = S[0],
      M = S.pop();
    if (M !== N) {
      S[0] = M;
      e: for (var F = 0, z = S.length, X = z >>> 1; F < X; ) {
        var oe = 2 * (F + 1) - 1,
          le = S[oe],
          Ae = oe + 1,
          at = S[Ae];
        if (0 > o(le, M))
          Ae < z && 0 > o(at, le)
            ? ((S[F] = at), (S[Ae] = M), (F = Ae))
            : ((S[F] = le), (S[oe] = M), (F = oe));
        else if (Ae < z && 0 > o(at, M)) (S[F] = at), (S[Ae] = M), (F = Ae);
        else break e;
      }
    }
    return N;
  }
  function o(S, N) {
    var M = S.sortIndex - N.sortIndex;
    return M !== 0 ? M : S.id - N.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    f = 3,
    g = !1,
    y = !1,
    w = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(S) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= S) r(u), (N.sortIndex = N.expirationTime), t(a, N);
      else break;
      N = n(u);
    }
  }
  function x(S) {
    if (((w = !1), v(S), !y))
      if (n(a) !== null) (y = !0), I(j);
      else {
        var N = n(u);
        N !== null && Y(x, N.startTime - S);
      }
  }
  function j(S, N) {
    (y = !1), w && ((w = !1), m(P), (P = -1)), (g = !0);
    var M = f;
    try {
      for (v(N), p = n(a); p !== null && (!(p.expirationTime > N) || (S && !T())); ) {
        var F = p.callback;
        if (typeof F == 'function') {
          (p.callback = null), (f = p.priorityLevel);
          var z = F(p.expirationTime <= N);
          (N = e.unstable_now()),
            typeof z == 'function' ? (p.callback = z) : p === n(a) && r(a),
            v(N);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var X = !0;
      else {
        var oe = n(u);
        oe !== null && Y(x, oe.startTime - N), (X = !1);
      }
      return X;
    } finally {
      (p = null), (f = M), (g = !1);
    }
  }
  var _ = !1,
    R = null,
    P = -1,
    k = 5,
    L = -1;
  function T() {
    return !(e.unstable_now() - L < k);
  }
  function D() {
    if (R !== null) {
      var S = e.unstable_now();
      L = S;
      var N = !0;
      try {
        N = R(!0, S);
      } finally {
        N ? W() : ((_ = !1), (R = null));
      }
    } else _ = !1;
  }
  var W;
  if (typeof h == 'function')
    W = function () {
      h(D);
    };
  else if (typeof MessageChannel < 'u') {
    var fe = new MessageChannel(),
      K = fe.port2;
    (fe.port1.onmessage = D),
      (W = function () {
        K.postMessage(null);
      });
  } else
    W = function () {
      C(D, 0);
    };
  function I(S) {
    (R = S), _ || ((_ = !0), W());
  }
  function Y(S, N) {
    P = C(function () {
      S(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), I(j));
    }),
    (e.unstable_forceFrameRate = function (S) {
      0 > S || 125 < S
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (k = 0 < S ? Math.floor(1e3 / S) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (S) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = f;
      }
      var M = f;
      f = N;
      try {
        return S();
      } finally {
        f = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (S, N) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var M = f;
      f = S;
      try {
        return N();
      } finally {
        f = M;
      }
    }),
    (e.unstable_scheduleCallback = function (S, N, M) {
      var F = e.unstable_now();
      switch (
        (typeof M == 'object' && M !== null
          ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? F + M : F))
          : (M = F),
        S)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = M + z),
        (S = {
          id: d++,
          callback: N,
          priorityLevel: S,
          startTime: M,
          expirationTime: z,
          sortIndex: -1,
        }),
        M > F
          ? ((S.sortIndex = M),
            t(u, S),
            n(a) === null && S === n(u) && (w ? (m(P), (P = -1)) : (w = !0), Y(x, M - F)))
          : ((S.sortIndex = z), t(a, S), y || g || ((y = !0), I(j))),
        S
      );
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (S) {
      var N = f;
      return function () {
        var M = f;
        f = N;
        try {
          return S.apply(this, arguments);
        } finally {
          f = M;
        }
      };
    });
})(Mu);
$u.exports = Mu;
var kf = $u.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cf = O,
  De = kf;
function E(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Nu = new Set(),
  yr = {};
function sn(e, t) {
  Fn(e, t), Fn(e + 'Capture', t);
}
function Fn(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) Nu.add(t[e]);
}
var vt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ji = Object.prototype.hasOwnProperty,
  _f =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Js = {},
  Zs = {};
function Ef(e) {
  return Ji.call(Zs, e)
    ? !0
    : Ji.call(Js, e)
      ? !1
      : _f.test(e)
        ? (Zs[e] = !0)
        : ((Js[e] = !0), !1);
}
function jf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Pf(e, t, n, r) {
  if (t === null || typeof t > 'u' || jf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Re(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ge = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ge[e] = new Re(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ge[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
  function (e) {
    ge[e] = new Re(e, 2, !1, e, null, !1, !1);
  },
);
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ge[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ge[e] = new Re(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ge[e] = new Re(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ge[e] = new Re(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ge[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jl = /[\-:]([a-z])/g;
function Zl(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Jl, Zl);
    ge[t] = new Re(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Jl, Zl);
    ge[t] = new Re(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Jl, Zl);
  ge[t] = new Re(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ge[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Re(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ge[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ql(e, t, n, r) {
  var o = ge.hasOwnProperty(t) ? ge[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Pf(t, n, o, r) && (n = null),
    r || o === null
      ? Ef(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Hr = Symbol.for('react.element'),
  fn = Symbol.for('react.portal'),
  pn = Symbol.for('react.fragment'),
  bl = Symbol.for('react.strict_mode'),
  Zi = Symbol.for('react.profiler'),
  Fu = Symbol.for('react.provider'),
  zu = Symbol.for('react.context'),
  es = Symbol.for('react.forward_ref'),
  qi = Symbol.for('react.suspense'),
  bi = Symbol.for('react.suspense_list'),
  ts = Symbol.for('react.memo'),
  Et = Symbol.for('react.lazy'),
  Tu = Symbol.for('react.offscreen'),
  qs = Symbol.iterator;
function Xn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (qs && e[qs]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var te = Object.assign,
  yi;
function rr(e) {
  if (yi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      yi = (t && t[1]) || '';
    }
  return (
    `
` +
    yi +
    e
  );
}
var xi = !1;
function wi(e, t) {
  if (!e || xi) return '';
  xi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (xi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? rr(e) : '';
}
function Rf(e) {
  switch (e.tag) {
    case 5:
      return rr(e.type);
    case 16:
      return rr('Lazy');
    case 13:
      return rr('Suspense');
    case 19:
      return rr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = wi(e.type, !1)), e;
    case 11:
      return (e = wi(e.type.render, !1)), e;
    case 1:
      return (e = wi(e.type, !0)), e;
    default:
      return '';
  }
}
function el(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case pn:
      return 'Fragment';
    case fn:
      return 'Portal';
    case Zi:
      return 'Profiler';
    case bl:
      return 'StrictMode';
    case qi:
      return 'Suspense';
    case bi:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case zu:
        return (e.displayName || 'Context') + '.Consumer';
      case Fu:
        return (e._context.displayName || 'Context') + '.Provider';
      case es:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case ts:
        return (t = e.displayName || null), t !== null ? t : el(e.type) || 'Memo';
      case Et:
        (t = e._payload), (e = e._init);
        try {
          return el(e(t));
        } catch {}
    }
  return null;
}
function Lf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return el(t);
    case 8:
      return t === bl ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Ut(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Iu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  );
}
function $f(e) {
  var t = Iu(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = '' + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Vr(e) {
  e._valueTracker || (e._valueTracker = $f(e));
}
function Ou(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Iu(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function So(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function tl(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function bs(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ut(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Du(e, t) {
  (t = t.checked), t != null && ql(e, 'checked', t, !1);
}
function nl(e, t) {
  Du(e, t);
  var n = Ut(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? rl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && rl(e, t.type, Ut(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ea(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null)))
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function rl(e, t, n) {
  (t !== 'number' || So(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var or = Array.isArray;
function jn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Ut(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ta(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (or(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Ut(n) };
}
function Uu(e, t) {
  var n = Ut(t.value),
    r = Ut(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function na(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Bu(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function il(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Bu(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Wr,
  Au = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Wr = Wr || document.createElement('div'),
          Wr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ar = {
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
    strokeWidth: !0,
  },
  Mf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(ar).forEach(function (e) {
  Mf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ar[t] = ar[e]);
  });
});
function Hu(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ar.hasOwnProperty(e) && ar[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Vu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Hu(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Nf = te(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function ll(e, t) {
  if (t) {
    if (Nf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(E(62));
  }
}
function sl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var al = null;
function ns(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ul = null,
  Pn = null,
  Rn = null;
function ra(e) {
  if ((e = Dr(e))) {
    if (typeof ul != 'function') throw Error(E(280));
    var t = e.stateNode;
    t && ((t = ei(t)), ul(e.stateNode, e.type, t));
  }
}
function Wu(e) {
  Pn ? (Rn ? Rn.push(e) : (Rn = [e])) : (Pn = e);
}
function Ku() {
  if (Pn) {
    var e = Pn,
      t = Rn;
    if (((Rn = Pn = null), ra(e), t)) for (e = 0; e < t.length; e++) ra(t[e]);
  }
}
function Qu(e, t) {
  return e(t);
}
function Gu() {}
var Si = !1;
function Yu(e, t, n) {
  if (Si) return e(t, n);
  Si = !0;
  try {
    return Qu(e, t, n);
  } finally {
    (Si = !1), (Pn !== null || Rn !== null) && (Gu(), Ku());
  }
}
function wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ei(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(E(231, t, typeof n));
  return n;
}
var cl = !1;
if (vt)
  try {
    var Jn = {};
    Object.defineProperty(Jn, 'passive', {
      get: function () {
        cl = !0;
      },
    }),
      window.addEventListener('test', Jn, Jn),
      window.removeEventListener('test', Jn, Jn);
  } catch {
    cl = !1;
  }
function Ff(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ur = !1,
  ko = null,
  Co = !1,
  dl = null,
  zf = {
    onError: function (e) {
      (ur = !0), (ko = e);
    },
  };
function Tf(e, t, n, r, o, i, l, s, a) {
  (ur = !1), (ko = null), Ff.apply(zf, arguments);
}
function If(e, t, n, r, o, i, l, s, a) {
  if ((Tf.apply(this, arguments), ur)) {
    if (ur) {
      var u = ko;
      (ur = !1), (ko = null);
    } else throw Error(E(198));
    Co || ((Co = !0), (dl = u));
  }
}
function an(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Xu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function oa(e) {
  if (an(e) !== e) throw Error(E(188));
}
function Of(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = an(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return oa(o), e;
        if (i === r) return oa(o), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Ju(e) {
  return (e = Of(e)), e !== null ? Zu(e) : null;
}
function Zu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qu = De.unstable_scheduleCallback,
  ia = De.unstable_cancelCallback,
  Df = De.unstable_shouldYield,
  Uf = De.unstable_requestPaint,
  re = De.unstable_now,
  Bf = De.unstable_getCurrentPriorityLevel,
  rs = De.unstable_ImmediatePriority,
  bu = De.unstable_UserBlockingPriority,
  _o = De.unstable_NormalPriority,
  Af = De.unstable_LowPriority,
  ec = De.unstable_IdlePriority,
  Jo = null,
  lt = null;
function Hf(e) {
  if (lt && typeof lt.onCommitFiberRoot == 'function')
    try {
      lt.onCommitFiberRoot(Jo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : Kf,
  Vf = Math.log,
  Wf = Math.LN2;
function Kf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vf(e) / Wf) | 0)) | 0;
}
var Kr = 64,
  Qr = 4194304;
function ir(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Eo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = ir(s)) : ((i &= l), i !== 0 && (r = ir(i)));
  } else (l = n & ~o), l !== 0 ? (r = ir(l)) : i !== 0 && (r = ir(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - et(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Qf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Gf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - et(i),
      s = 1 << l,
      a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = Qf(s, t)) : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function fl(e) {
  return (
    (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function tc() {
  var e = Kr;
  return (Kr <<= 1), !(Kr & 4194240) && (Kr = 64), e;
}
function ki(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ir(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - et(t)),
    (e[t] = n);
}
function Yf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - et(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function os(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var A = 0;
function nc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var rc,
  is,
  oc,
  ic,
  lc,
  pl = !1,
  Gr = [],
  Mt = null,
  Nt = null,
  Ft = null,
  Sr = new Map(),
  kr = new Map(),
  Pt = [],
  Xf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function la(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Mt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Nt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Ft = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Sr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      kr.delete(t.pointerId);
  }
}
function Zn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Dr(t)), t !== null && is(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Jf(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Mt = Zn(Mt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Nt = Zn(Nt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Ft = Zn(Ft, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Sr.set(i, Zn(Sr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), kr.set(i, Zn(kr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function sc(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Xu(n)), t !== null)) {
          (e.blockedOn = t),
            lc(e.priority, function () {
              oc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ao(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (al = r), n.target.dispatchEvent(r), (al = null);
    } else return (t = Dr(n)), t !== null && is(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function sa(e, t, n) {
  ao(e) && n.delete(t);
}
function Zf() {
  (pl = !1),
    Mt !== null && ao(Mt) && (Mt = null),
    Nt !== null && ao(Nt) && (Nt = null),
    Ft !== null && ao(Ft) && (Ft = null),
    Sr.forEach(sa),
    kr.forEach(sa);
}
function qn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pl || ((pl = !0), De.unstable_scheduleCallback(De.unstable_NormalPriority, Zf)));
}
function Cr(e) {
  function t(o) {
    return qn(o, e);
  }
  if (0 < Gr.length) {
    qn(Gr[0], e);
    for (var n = 1; n < Gr.length; n++) {
      var r = Gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mt !== null && qn(Mt, e),
      Nt !== null && qn(Nt, e),
      Ft !== null && qn(Ft, e),
      Sr.forEach(t),
      kr.forEach(t),
      n = 0;
    n < Pt.length;
    n++
  )
    (r = Pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pt.length && ((n = Pt[0]), n.blockedOn === null); )
    sc(n), n.blockedOn === null && Pt.shift();
}
var Ln = wt.ReactCurrentBatchConfig,
  jo = !0;
function qf(e, t, n, r) {
  var o = A,
    i = Ln.transition;
  Ln.transition = null;
  try {
    (A = 1), ls(e, t, n, r);
  } finally {
    (A = o), (Ln.transition = i);
  }
}
function bf(e, t, n, r) {
  var o = A,
    i = Ln.transition;
  Ln.transition = null;
  try {
    (A = 4), ls(e, t, n, r);
  } finally {
    (A = o), (Ln.transition = i);
  }
}
function ls(e, t, n, r) {
  if (jo) {
    var o = hl(e, t, n, r);
    if (o === null) Ni(e, t, r, Po, n), la(e, r);
    else if (Jf(o, e, t, n, r)) r.stopPropagation();
    else if ((la(e, r), t & 4 && -1 < Xf.indexOf(e))) {
      for (; o !== null; ) {
        var i = Dr(o);
        if (
          (i !== null && rc(i),
          (i = hl(e, t, n, r)),
          i === null && Ni(e, t, r, Po, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ni(e, t, r, null, n);
  }
}
var Po = null;
function hl(e, t, n, r) {
  if (((Po = null), (e = ns(r)), (e = Xt(e)), e !== null))
    if (((t = an(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Xu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Po = e), null;
}
function ac(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Bf()) {
        case rs:
          return 1;
        case bu:
          return 4;
        case _o:
        case Af:
          return 16;
        case ec:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  ss = null,
  uo = null;
function uc() {
  if (uo) return uo;
  var e,
    t = ss,
    n = t.length,
    r,
    o = 'value' in Lt ? Lt.value : Lt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (uo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function co(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yr() {
  return !0;
}
function aa() {
  return !1;
}
function Be(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Yr
        : aa),
      (this.isPropagationStopped = aa),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Yr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yr));
      },
      persist: function () {},
      isPersistent: Yr,
    }),
    t
  );
}
var Qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  as = Be(Qn),
  Or = te({}, Qn, { view: 0, detail: 0 }),
  ep = Be(Or),
  Ci,
  _i,
  bn,
  Zo = te({}, Or, {
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
    getModifierState: us,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== bn &&
            (bn && e.type === 'mousemove'
              ? ((Ci = e.screenX - bn.screenX), (_i = e.screenY - bn.screenY))
              : (_i = Ci = 0),
            (bn = e)),
          Ci);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : _i;
    },
  }),
  ua = Be(Zo),
  tp = te({}, Zo, { dataTransfer: 0 }),
  np = Be(tp),
  rp = te({}, Or, { relatedTarget: 0 }),
  Ei = Be(rp),
  op = te({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ip = Be(op),
  lp = te({}, Qn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sp = Be(lp),
  ap = te({}, Qn, { data: 0 }),
  ca = Be(ap),
  up = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  cp = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  dp = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function fp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dp[e]) ? !!t[e] : !1;
}
function us() {
  return fp;
}
var pp = te({}, Or, {
    key: function (e) {
      if (e.key) {
        var t = up[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = co(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? cp[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: us,
    charCode: function (e) {
      return e.type === 'keypress' ? co(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? co(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  hp = Be(pp),
  mp = te({}, Zo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  da = Be(mp),
  vp = te({}, Or, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: us,
  }),
  gp = Be(vp),
  yp = te({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xp = Be(yp),
  wp = te({}, Zo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Sp = Be(wp),
  kp = [9, 13, 27, 32],
  cs = vt && 'CompositionEvent' in window,
  cr = null;
vt && 'documentMode' in document && (cr = document.documentMode);
var Cp = vt && 'TextEvent' in window && !cr,
  cc = vt && (!cs || (cr && 8 < cr && 11 >= cr)),
  fa = ' ',
  pa = !1;
function dc(e, t) {
  switch (e) {
    case 'keyup':
      return kp.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function fc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var hn = !1;
function _p(e, t) {
  switch (e) {
    case 'compositionend':
      return fc(t);
    case 'keypress':
      return t.which !== 32 ? null : ((pa = !0), fa);
    case 'textInput':
      return (e = t.data), e === fa && pa ? null : e;
    default:
      return null;
  }
}
function Ep(e, t) {
  if (hn)
    return e === 'compositionend' || (!cs && dc(e, t))
      ? ((e = uc()), (uo = ss = Lt = null), (hn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return cc && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var jp = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
};
function ha(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!jp[e.type] : t === 'textarea';
}
function pc(e, t, n, r) {
  Wu(r),
    (t = Ro(t, 'onChange')),
    0 < t.length &&
      ((n = new as('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var dr = null,
  _r = null;
function Pp(e) {
  _c(e, 0);
}
function qo(e) {
  var t = gn(e);
  if (Ou(t)) return e;
}
function Rp(e, t) {
  if (e === 'change') return t;
}
var hc = !1;
if (vt) {
  var ji;
  if (vt) {
    var Pi = 'oninput' in document;
    if (!Pi) {
      var ma = document.createElement('div');
      ma.setAttribute('oninput', 'return;'), (Pi = typeof ma.oninput == 'function');
    }
    ji = Pi;
  } else ji = !1;
  hc = ji && (!document.documentMode || 9 < document.documentMode);
}
function va() {
  dr && (dr.detachEvent('onpropertychange', mc), (_r = dr = null));
}
function mc(e) {
  if (e.propertyName === 'value' && qo(_r)) {
    var t = [];
    pc(t, _r, e, ns(e)), Yu(Pp, t);
  }
}
function Lp(e, t, n) {
  e === 'focusin'
    ? (va(), (dr = t), (_r = n), dr.attachEvent('onpropertychange', mc))
    : e === 'focusout' && va();
}
function $p(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return qo(_r);
}
function Mp(e, t) {
  if (e === 'click') return qo(t);
}
function Np(e, t) {
  if (e === 'input' || e === 'change') return qo(t);
}
function Fp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nt = typeof Object.is == 'function' ? Object.is : Fp;
function Er(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ji.call(t, o) || !nt(e[o], t[o])) return !1;
  }
  return !0;
}
function ga(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ya(e, t) {
  var n = ga(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ga(n);
  }
}
function vc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? vc(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function gc() {
  for (var e = window, t = So(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = So(e.document);
  }
  return t;
}
function ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function zp(e) {
  var t = gc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && vc(n.ownerDocument.documentElement, n)) {
    if (r !== null && ds(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = ya(n, i));
        var l = ya(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Tp = vt && 'documentMode' in document && 11 >= document.documentMode,
  mn = null,
  ml = null,
  fr = null,
  vl = !1;
function xa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vl ||
    mn == null ||
    mn !== So(r) ||
    ((r = mn),
    'selectionStart' in r && ds(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (fr && Er(fr, r)) ||
      ((fr = r),
      (r = Ro(ml, 'onSelect')),
      0 < r.length &&
        ((t = new as('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = mn))));
}
function Xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var vn = {
    animationend: Xr('Animation', 'AnimationEnd'),
    animationiteration: Xr('Animation', 'AnimationIteration'),
    animationstart: Xr('Animation', 'AnimationStart'),
    transitionend: Xr('Transition', 'TransitionEnd'),
  },
  Ri = {},
  yc = {};
vt &&
  ((yc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete vn.animationend.animation,
    delete vn.animationiteration.animation,
    delete vn.animationstart.animation),
  'TransitionEvent' in window || delete vn.transitionend.transition);
function bo(e) {
  if (Ri[e]) return Ri[e];
  if (!vn[e]) return e;
  var t = vn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yc) return (Ri[e] = t[n]);
  return e;
}
var xc = bo('animationend'),
  wc = bo('animationiteration'),
  Sc = bo('animationstart'),
  kc = bo('transitionend'),
  Cc = new Map(),
  wa =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function At(e, t) {
  Cc.set(e, t), sn(t, [e]);
}
for (var Li = 0; Li < wa.length; Li++) {
  var $i = wa[Li],
    Ip = $i.toLowerCase(),
    Op = $i[0].toUpperCase() + $i.slice(1);
  At(Ip, 'on' + Op);
}
At(xc, 'onAnimationEnd');
At(wc, 'onAnimationIteration');
At(Sc, 'onAnimationStart');
At('dblclick', 'onDoubleClick');
At('focusin', 'onFocus');
At('focusout', 'onBlur');
At(kc, 'onTransitionEnd');
Fn('onMouseEnter', ['mouseout', 'mouseover']);
Fn('onMouseLeave', ['mouseout', 'mouseover']);
Fn('onPointerEnter', ['pointerout', 'pointerover']);
Fn('onPointerLeave', ['pointerout', 'pointerover']);
sn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' '),
);
sn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
sn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
sn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
sn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
sn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var lr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Dp = new Set('cancel close invalid load scroll toggle'.split(' ').concat(lr));
function Sa(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), If(r, t, void 0, e), (e.currentTarget = null);
}
function _c(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Sa(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Sa(o, s, u), (i = a);
        }
    }
  }
  if (Co) throw ((e = dl), (Co = !1), (dl = null), e);
}
function Q(e, t) {
  var n = t[Sl];
  n === void 0 && (n = t[Sl] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Ec(t, e, 2, !1), n.add(r));
}
function Mi(e, t, n) {
  var r = 0;
  t && (r |= 4), Ec(n, e, r, t);
}
var Jr = '_reactListening' + Math.random().toString(36).slice(2);
function jr(e) {
  if (!e[Jr]) {
    (e[Jr] = !0),
      Nu.forEach(function (n) {
        n !== 'selectionchange' && (Dp.has(n) || Mi(n, !1, e), Mi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Jr] || ((t[Jr] = !0), Mi('selectionchange', !1, t));
  }
}
function Ec(e, t, n, r) {
  switch (ac(t)) {
    case 1:
      var o = qf;
      break;
    case 4:
      o = bf;
      break;
    default:
      o = ls;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !cl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Ni(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Xt(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Yu(function () {
    var u = i,
      d = ns(n),
      p = [];
    e: {
      var f = Cc.get(e);
      if (f !== void 0) {
        var g = as,
          y = e;
        switch (e) {
          case 'keypress':
            if (co(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = hp;
            break;
          case 'focusin':
            (y = 'focus'), (g = Ei);
            break;
          case 'focusout':
            (y = 'blur'), (g = Ei);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Ei;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = ua;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = np;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = gp;
            break;
          case xc:
          case wc:
          case Sc:
            g = ip;
            break;
          case kc:
            g = xp;
            break;
          case 'scroll':
            g = ep;
            break;
          case 'wheel':
            g = Sp;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = sp;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = da;
        }
        var w = (t & 4) !== 0,
          C = !w && e === 'scroll',
          m = w ? (f !== null ? f + 'Capture' : null) : f;
        w = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x), m !== null && ((x = wr(h, m)), x != null && w.push(Pr(h, x, v)))),
            C)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((f = new g(f, y, null, n, d)), p.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          f && n !== al && (y = n.relatedTarget || n.fromElement) && (Xt(y) || y[gt]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Xt(y) : null),
              y !== null &&
                ((C = an(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((w = ua),
            (x = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = da), (x = 'onPointerLeave'), (m = 'onPointerEnter'), (h = 'pointer')),
            (C = g == null ? f : gn(g)),
            (v = y == null ? f : gn(y)),
            (f = new w(x, h + 'leave', g, n, d)),
            (f.target = C),
            (f.relatedTarget = v),
            (x = null),
            Xt(d) === u &&
              ((w = new w(m, h + 'enter', y, n, d)),
              (w.target = v),
              (w.relatedTarget = C),
              (x = w)),
            (C = x),
            g && y)
          )
            t: {
              for (w = g, m = y, h = 0, v = w; v; v = cn(v)) h++;
              for (v = 0, x = m; x; x = cn(x)) v++;
              for (; 0 < h - v; ) (w = cn(w)), h--;
              for (; 0 < v - h; ) (m = cn(m)), v--;
              for (; h--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = cn(w)), (m = cn(m));
              }
              w = null;
            }
          else w = null;
          g !== null && ka(p, f, g, w, !1),
            y !== null && C !== null && ka(p, C, y, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? gn(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && f.type === 'file'))
        )
          var j = Rp;
        else if (ha(f))
          if (hc) j = Np;
          else {
            j = $p;
            var _ = Lp;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (j = Mp);
        if (j && (j = j(e, u))) {
          pc(p, j, n, d);
          break e;
        }
        _ && _(e, f, u),
          e === 'focusout' &&
            (_ = f._wrapperState) &&
            _.controlled &&
            f.type === 'number' &&
            rl(f, 'number', f.value);
      }
      switch (((_ = u ? gn(u) : window), e)) {
        case 'focusin':
          (ha(_) || _.contentEditable === 'true') && ((mn = _), (ml = u), (fr = null));
          break;
        case 'focusout':
          fr = ml = mn = null;
          break;
        case 'mousedown':
          vl = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (vl = !1), xa(p, n, d);
          break;
        case 'selectionchange':
          if (Tp) break;
        case 'keydown':
        case 'keyup':
          xa(p, n, d);
      }
      var R;
      if (cs)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        hn
          ? dc(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (cc &&
          n.locale !== 'ko' &&
          (hn || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && hn && (R = uc())
            : ((Lt = d), (ss = 'value' in Lt ? Lt.value : Lt.textContent), (hn = !0))),
        (_ = Ro(u, P)),
        0 < _.length &&
          ((P = new ca(P, e, null, n, d)),
          p.push({ event: P, listeners: _ }),
          R ? (P.data = R) : ((R = fc(n)), R !== null && (P.data = R)))),
        (R = Cp ? _p(e, n) : Ep(e, n)) &&
          ((u = Ro(u, 'onBeforeInput')),
          0 < u.length &&
            ((d = new ca('onBeforeInput', 'beforeinput', null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = R)));
    }
    _c(p, t);
  });
}
function Pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ro(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = wr(e, n)),
      i != null && r.unshift(Pr(e, i, o)),
      (i = wr(e, t)),
      i != null && r.push(Pr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function cn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ka(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = wr(n, i)), a != null && l.unshift(Pr(n, a, s)))
        : o || ((a = wr(n, i)), a != null && l.push(Pr(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Up = /\r\n?/g,
  Bp = /\u0000|\uFFFD/g;
function Ca(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Up,
      `
`,
    )
    .replace(Bp, '');
}
function Zr(e, t, n) {
  if (((t = Ca(t)), Ca(e) !== t && n)) throw Error(E(425));
}
function Lo() {}
var gl = null,
  yl = null;
function xl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wl = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ap = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  _a = typeof Promise == 'function' ? Promise : void 0,
  Hp =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof _a < 'u'
        ? function (e) {
            return _a.resolve(null).then(e).catch(Vp);
          }
        : wl;
function Vp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fi(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Cr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Cr(t);
}
function zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Ea(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gn = Math.random().toString(36).slice(2),
  it = '__reactFiber$' + Gn,
  Rr = '__reactProps$' + Gn,
  gt = '__reactContainer$' + Gn,
  Sl = '__reactEvents$' + Gn,
  Wp = '__reactListeners$' + Gn,
  Kp = '__reactHandles$' + Gn;
function Xt(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gt] || n[it])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Ea(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = Ea(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Dr(e) {
  return (
    (e = e[it] || e[gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function ei(e) {
  return e[Rr] || null;
}
var kl = [],
  yn = -1;
function Ht(e) {
  return { current: e };
}
function G(e) {
  0 > yn || ((e.current = kl[yn]), (kl[yn] = null), yn--);
}
function V(e, t) {
  yn++, (kl[yn] = e.current), (e.current = t);
}
var Bt = {},
  Ce = Ht(Bt),
  Me = Ht(!1),
  tn = Bt;
function zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function $o() {
  G(Me), G(Ce);
}
function ja(e, t, n) {
  if (Ce.current !== Bt) throw Error(E(168));
  V(Ce, t), V(Me, n);
}
function jc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, Lf(e) || 'Unknown', o));
  return te({}, n, r);
}
function Mo(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (tn = Ce.current),
    V(Ce, e),
    V(Me, Me.current),
    !0
  );
}
function Pa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = jc(e, t, tn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Me),
      G(Ce),
      V(Ce, e))
    : G(Me),
    V(Me, n);
}
var dt = null,
  ti = !1,
  zi = !1;
function Pc(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
function Qp(e) {
  (ti = !0), Pc(e);
}
function Vt() {
  if (!zi && dt !== null) {
    zi = !0;
    var e = 0,
      t = A;
    try {
      var n = dt;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (dt = null), (ti = !1);
    } catch (o) {
      throw (dt !== null && (dt = dt.slice(e + 1)), qu(rs, Vt), o);
    } finally {
      (A = t), (zi = !1);
    }
  }
  return null;
}
var xn = [],
  wn = 0,
  No = null,
  Fo = 0,
  Ve = [],
  We = 0,
  nn = null,
  ft = 1,
  pt = '';
function Kt(e, t) {
  (xn[wn++] = Fo), (xn[wn++] = No), (No = e), (Fo = t);
}
function Rc(e, t, n) {
  (Ve[We++] = ft), (Ve[We++] = pt), (Ve[We++] = nn), (nn = e);
  var r = ft;
  e = pt;
  var o = 32 - et(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - et(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (ft = (1 << (32 - et(t) + o)) | (n << o) | r),
      (pt = i + e);
  } else (ft = (1 << i) | (n << o) | r), (pt = e);
}
function fs(e) {
  e.return !== null && (Kt(e, 1), Rc(e, 1, 0));
}
function ps(e) {
  for (; e === No; ) (No = xn[--wn]), (xn[wn] = null), (Fo = xn[--wn]), (xn[wn] = null);
  for (; e === nn; )
    (nn = Ve[--We]),
      (Ve[We] = null),
      (pt = Ve[--We]),
      (Ve[We] = null),
      (ft = Ve[--We]),
      (Ve[We] = null);
}
var Oe = null,
  Ie = null,
  J = !1,
  be = null;
function Lc(e, t) {
  var n = Ke(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ra(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Ie = zt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = nn !== null ? { id: ft, overflow: pt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Cl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _l(e) {
  if (J) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!Ra(e, t)) {
        if (Cl(e)) throw Error(E(418));
        t = zt(n.nextSibling);
        var r = Oe;
        t && Ra(e, t)
          ? Lc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Oe = e));
      }
    } else {
      if (Cl(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Oe = e);
    }
  }
}
function La(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function qr(e) {
  if (e !== Oe) return !1;
  if (!J) return La(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !xl(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (Cl(e)) throw ($c(), Error(E(418)));
    for (; t; ) Lc(e, t), (t = zt(t.nextSibling));
  }
  if ((La(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ie = zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Oe ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function $c() {
  for (var e = Ie; e; ) e = zt(e.nextSibling);
}
function Tn() {
  (Ie = Oe = null), (J = !1);
}
function hs(e) {
  be === null ? (be = [e]) : be.push(e);
}
var Gp = wt.ReactCurrentBatchConfig;
function er(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function br(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function $a(e) {
  var t = e._init;
  return t(e._payload);
}
function Mc(e) {
  function t(m, h) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [h]), (m.flags |= 16)) : v.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function o(m, h) {
    return (m = Dt(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((m.flags |= 2), h) : v)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, v, x) {
    return h === null || h.tag !== 6
      ? ((h = Ai(v, m.mode, x)), (h.return = m), h)
      : ((h = o(h, v)), (h.return = m), h);
  }
  function a(m, h, v, x) {
    var j = v.type;
    return j === pn
      ? d(m, h, v.props.children, x, v.key)
      : h !== null &&
          (h.elementType === j ||
            (typeof j == 'object' && j !== null && j.$$typeof === Et && $a(j) === h.type))
        ? ((x = o(h, v.props)), (x.ref = er(m, h, v)), (x.return = m), x)
        : ((x = yo(v.type, v.key, v.props, null, m.mode, x)),
          (x.ref = er(m, h, v)),
          (x.return = m),
          x);
  }
  function u(m, h, v, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = Hi(v, m.mode, x)), (h.return = m), h)
      : ((h = o(h, v.children || [])), (h.return = m), h);
  }
  function d(m, h, v, x, j) {
    return h === null || h.tag !== 7
      ? ((h = en(v, m.mode, x, j)), (h.return = m), h)
      : ((h = o(h, v)), (h.return = m), h);
  }
  function p(m, h, v) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Ai('' + h, m.mode, v)), (h.return = m), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Hr:
          return (
            (v = yo(h.type, h.key, h.props, null, m.mode, v)),
            (v.ref = er(m, null, h)),
            (v.return = m),
            v
          );
        case fn:
          return (h = Hi(h, m.mode, v)), (h.return = m), h;
        case Et:
          var x = h._init;
          return p(m, x(h._payload), v);
      }
      if (or(h) || Xn(h)) return (h = en(h, m.mode, v, null)), (h.return = m), h;
      br(m, h);
    }
    return null;
  }
  function f(m, h, v, x) {
    var j = h !== null ? h.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return j !== null ? null : s(m, h, '' + v, x);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Hr:
          return v.key === j ? a(m, h, v, x) : null;
        case fn:
          return v.key === j ? u(m, h, v, x) : null;
        case Et:
          return (j = v._init), f(m, h, j(v._payload), x);
      }
      if (or(v) || Xn(v)) return j !== null ? null : d(m, h, v, x, null);
      br(m, v);
    }
    return null;
  }
  function g(m, h, v, x, j) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (m = m.get(v) || null), s(h, m, '' + x, j);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Hr:
          return (m = m.get(x.key === null ? v : x.key) || null), a(h, m, x, j);
        case fn:
          return (m = m.get(x.key === null ? v : x.key) || null), u(h, m, x, j);
        case Et:
          var _ = x._init;
          return g(m, h, v, _(x._payload), j);
      }
      if (or(x) || Xn(x)) return (m = m.get(v) || null), d(h, m, x, j, null);
      br(h, x);
    }
    return null;
  }
  function y(m, h, v, x) {
    for (
      var j = null, _ = null, R = h, P = (h = 0), k = null;
      R !== null && P < v.length;
      P++
    ) {
      R.index > P ? ((k = R), (R = null)) : (k = R.sibling);
      var L = f(m, R, v[P], x);
      if (L === null) {
        R === null && (R = k);
        break;
      }
      e && R && L.alternate === null && t(m, R),
        (h = i(L, h, P)),
        _ === null ? (j = L) : (_.sibling = L),
        (_ = L),
        (R = k);
    }
    if (P === v.length) return n(m, R), J && Kt(m, P), j;
    if (R === null) {
      for (; P < v.length; P++)
        (R = p(m, v[P], x)),
          R !== null &&
            ((h = i(R, h, P)), _ === null ? (j = R) : (_.sibling = R), (_ = R));
      return J && Kt(m, P), j;
    }
    for (R = r(m, R); P < v.length; P++)
      (k = g(R, m, P, v[P], x)),
        k !== null &&
          (e && k.alternate !== null && R.delete(k.key === null ? P : k.key),
          (h = i(k, h, P)),
          _ === null ? (j = k) : (_.sibling = k),
          (_ = k));
    return (
      e &&
        R.forEach(function (T) {
          return t(m, T);
        }),
      J && Kt(m, P),
      j
    );
  }
  function w(m, h, v, x) {
    var j = Xn(v);
    if (typeof j != 'function') throw Error(E(150));
    if (((v = j.call(v)), v == null)) throw Error(E(151));
    for (
      var _ = (j = null), R = h, P = (h = 0), k = null, L = v.next();
      R !== null && !L.done;
      P++, L = v.next()
    ) {
      R.index > P ? ((k = R), (R = null)) : (k = R.sibling);
      var T = f(m, R, L.value, x);
      if (T === null) {
        R === null && (R = k);
        break;
      }
      e && R && T.alternate === null && t(m, R),
        (h = i(T, h, P)),
        _ === null ? (j = T) : (_.sibling = T),
        (_ = T),
        (R = k);
    }
    if (L.done) return n(m, R), J && Kt(m, P), j;
    if (R === null) {
      for (; !L.done; P++, L = v.next())
        (L = p(m, L.value, x)),
          L !== null &&
            ((h = i(L, h, P)), _ === null ? (j = L) : (_.sibling = L), (_ = L));
      return J && Kt(m, P), j;
    }
    for (R = r(m, R); !L.done; P++, L = v.next())
      (L = g(R, m, P, L.value, x)),
        L !== null &&
          (e && L.alternate !== null && R.delete(L.key === null ? P : L.key),
          (h = i(L, h, P)),
          _ === null ? (j = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        R.forEach(function (D) {
          return t(m, D);
        }),
      J && Kt(m, P),
      j
    );
  }
  function C(m, h, v, x) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === pn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Hr:
          e: {
            for (var j = v.key, _ = h; _ !== null; ) {
              if (_.key === j) {
                if (((j = v.type), j === pn)) {
                  if (_.tag === 7) {
                    n(m, _.sibling),
                      (h = o(_, v.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  _.elementType === j ||
                  (typeof j == 'object' &&
                    j !== null &&
                    j.$$typeof === Et &&
                    $a(j) === _.type)
                ) {
                  n(m, _.sibling),
                    (h = o(_, v.props)),
                    (h.ref = er(m, _, v)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, _);
                break;
              } else t(m, _);
              _ = _.sibling;
            }
            v.type === pn
              ? ((h = en(v.props.children, m.mode, x, v.key)), (h.return = m), (m = h))
              : ((x = yo(v.type, v.key, v.props, null, m.mode, x)),
                (x.ref = er(m, h, v)),
                (x.return = m),
                (m = x));
          }
          return l(m);
        case fn:
          e: {
            for (_ = v.key; h !== null; ) {
              if (h.key === _)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(m, h.sibling), (h = o(h, v.children || [])), (h.return = m), (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = Hi(v, m.mode, x)), (h.return = m), (m = h);
          }
          return l(m);
        case Et:
          return (_ = v._init), C(m, h, _(v._payload), x);
      }
      if (or(v)) return y(m, h, v, x);
      if (Xn(v)) return w(m, h, v, x);
      br(m, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, v)), (h.return = m), (m = h))
          : (n(m, h), (h = Ai(v, m.mode, x)), (h.return = m), (m = h)),
        l(m))
      : n(m, h);
  }
  return C;
}
var In = Mc(!0),
  Nc = Mc(!1),
  zo = Ht(null),
  To = null,
  Sn = null,
  ms = null;
function vs() {
  ms = Sn = To = null;
}
function gs(e) {
  var t = zo.current;
  G(zo), (e._currentValue = t);
}
function El(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $n(e, t) {
  (To = e),
    (ms = Sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($e = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if (ms !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sn === null)) {
      if (To === null) throw Error(E(308));
      (Sn = e), (To.dependencies = { lanes: 0, firstContext: e });
    } else Sn = Sn.next = e;
  return t;
}
var Jt = null;
function ys(e) {
  Jt === null ? (Jt = [e]) : Jt.push(e);
}
function Fc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ys(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    yt(e, r)
  );
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jt = !1;
function xs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ht(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Tt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      yt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ys(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    yt(e, n)
  );
}
function fo(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), os(e, n);
  }
}
function Ma(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Io(e, t, n, r) {
  var o = e.updateQueue;
  jt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = u) : (s.next = u), (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (l = 0), (d = u = a = null), (s = i);
    do {
      var f = s.lane,
        g = s.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            w = s;
          switch (((f = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == 'function')) {
                p = y.call(g, p, f);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (f = typeof y == 'function' ? y.call(g, p, f) : y),
                f == null)
              )
                break e;
              p = te({}, p, f);
              break e;
            case 2:
              jt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64), (f = o.effects), f === null ? (o.effects = [s]) : f.push(s));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = g), (a = p)) : (d = d.next = g),
          (l |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (on |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function Na(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}
var Ur = {},
  st = Ht(Ur),
  Lr = Ht(Ur),
  $r = Ht(Ur);
function Zt(e) {
  if (e === Ur) throw Error(E(174));
  return e;
}
function ws(e, t) {
  switch ((V($r, t), V(Lr, e), V(st, Ur), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : il(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = il(t, e));
  }
  G(st), V(st, t);
}
function On() {
  G(st), G(Lr), G($r);
}
function Tc(e) {
  Zt($r.current);
  var t = Zt(st.current),
    n = il(t, e.type);
  t !== n && (V(Lr, e), V(st, n));
}
function Ss(e) {
  Lr.current === e && (G(st), G(Lr));
}
var b = Ht(0);
function Oo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ti = [];
function ks() {
  for (var e = 0; e < Ti.length; e++) Ti[e]._workInProgressVersionPrimary = null;
  Ti.length = 0;
}
var po = wt.ReactCurrentDispatcher,
  Ii = wt.ReactCurrentBatchConfig,
  rn = 0,
  ee = null,
  se = null,
  ce = null,
  Do = !1,
  pr = !1,
  Mr = 0,
  Yp = 0;
function ye() {
  throw Error(E(321));
}
function Cs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
  return !0;
}
function _s(e, t, n, r, o, i) {
  if (
    ((rn = i),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (po.current = e === null || e.memoizedState === null ? qp : bp),
    (e = n(r, o)),
    pr)
  ) {
    i = 0;
    do {
      if (((pr = !1), (Mr = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (ce = se = null),
        (t.updateQueue = null),
        (po.current = eh),
        (e = n(r, o));
    } while (pr);
  }
  if (
    ((po.current = Uo),
    (t = se !== null && se.next !== null),
    (rn = 0),
    (ce = se = ee = null),
    (Do = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Es() {
  var e = Mr !== 0;
  return (Mr = 0), e;
}
function ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function Ye() {
  if (se === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ce === null ? ee.memoizedState : ce.next;
  if (t !== null) (ce = t), (se = e);
  else {
    if (e === null) throw Error(E(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function Nr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Oi(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = se,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((rn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = p), (l = r)) : (a = a.next = p),
          (ee.lanes |= d),
          (on |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      nt(r, t.memoizedState) || ($e = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ee.lanes |= i), (on |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Di(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    nt(i, t.memoizedState) || ($e = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ic() {}
function Oc(e, t) {
  var n = ee,
    r = Ye(),
    o = t(),
    i = !nt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), ($e = !0)),
    (r = r.queue),
    js(Bc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Fr(9, Uc.bind(null, n, r, o, t), void 0, null), de === null))
      throw Error(E(349));
    rn & 30 || Dc(n, t, o);
  }
  return o;
}
function Dc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ee.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Uc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ac(t) && Hc(e);
}
function Bc(e, t, n) {
  return n(function () {
    Ac(t) && Hc(e);
  });
}
function Ac(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function Hc(e) {
  var t = yt(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Fa(e) {
  var t = ot();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Zp.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Fr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Vc() {
  return Ye().memoizedState;
}
function ho(e, t, n, r) {
  var o = ot();
  (ee.flags |= e), (o.memoizedState = Fr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ni(e, t, n, r) {
  var o = Ye();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (se !== null) {
    var l = se.memoizedState;
    if (((i = l.destroy), r !== null && Cs(r, l.deps))) {
      o.memoizedState = Fr(t, n, i, r);
      return;
    }
  }
  (ee.flags |= e), (o.memoizedState = Fr(1 | t, n, i, r));
}
function za(e, t) {
  return ho(8390656, 8, e, t);
}
function js(e, t) {
  return ni(2048, 8, e, t);
}
function Wc(e, t) {
  return ni(4, 2, e, t);
}
function Kc(e, t) {
  return ni(4, 4, e, t);
}
function Qc(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gc(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), ni(4, 4, Qc.bind(null, t, e), n);
}
function Ps() {}
function Yc(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cs(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Xc(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jc(e, t, n) {
  return rn & 21
    ? (nt(n, t) || ((n = tc()), (ee.lanes |= n), (on |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
}
function Xp(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ii.transition;
  Ii.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), (Ii.transition = r);
  }
}
function Zc() {
  return Ye().memoizedState;
}
function Jp(e, t, n) {
  var r = Ot(e);
  if (
    ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), qc(e))
  )
    bc(t, n);
  else if (((n = Fc(e, t, n, r)), n !== null)) {
    var o = je();
    tt(n, e, r, o), ed(n, t, r);
  }
}
function Zp(e, t, n) {
  var r = Ot(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qc(e)) bc(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), nt(s, l))) {
          var a = t.interleaved;
          a === null ? ((o.next = o), ys(t)) : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fc(e, t, o, r)), n !== null && ((o = je()), tt(n, e, r, o), ed(n, t, r));
  }
}
function qc(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function bc(e, t) {
  pr = Do = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function ed(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), os(e, n);
  }
}
var Uo = {
    readContext: Ge,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  qp = {
    readContext: Ge,
    useCallback: function (e, t) {
      return (ot().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: za,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), ho(4194308, 4, Qc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ot();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = ot();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Jp.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ot();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Fa,
    useDebugValue: Ps,
    useDeferredValue: function (e) {
      return (ot().memoizedState = e);
    },
    useTransition: function () {
      var e = Fa(!1),
        t = e[0];
      return (e = Xp.bind(null, e[1])), (ot().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        o = ot();
      if (J) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(E(349));
        rn & 30 || Dc(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        za(Bc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Fr(9, Uc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ot(),
        t = de.identifierPrefix;
      if (J) {
        var n = pt,
          r = ft;
        (n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Mr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Yp++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  bp = {
    readContext: Ge,
    useCallback: Yc,
    useContext: Ge,
    useEffect: js,
    useImperativeHandle: Gc,
    useInsertionEffect: Wc,
    useLayoutEffect: Kc,
    useMemo: Xc,
    useReducer: Oi,
    useRef: Vc,
    useState: function () {
      return Oi(Nr);
    },
    useDebugValue: Ps,
    useDeferredValue: function (e) {
      var t = Ye();
      return Jc(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Oi(Nr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: Ic,
    useSyncExternalStore: Oc,
    useId: Zc,
    unstable_isNewReconciler: !1,
  },
  eh = {
    readContext: Ge,
    useCallback: Yc,
    useContext: Ge,
    useEffect: js,
    useImperativeHandle: Gc,
    useInsertionEffect: Wc,
    useLayoutEffect: Kc,
    useMemo: Xc,
    useReducer: Di,
    useRef: Vc,
    useState: function () {
      return Di(Nr);
    },
    useDebugValue: Ps,
    useDeferredValue: function (e) {
      var t = Ye();
      return se === null ? (t.memoizedState = e) : Jc(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Di(Nr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: Ic,
    useSyncExternalStore: Oc,
    useId: Zc,
    unstable_isNewReconciler: !1,
  };
function Je(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function jl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ri = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? an(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = Ot(e),
      i = ht(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Tt(e, i, o)),
      t !== null && (tt(t, e, o, r), fo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = Ot(e),
      i = ht(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Tt(e, i, o)),
      t !== null && (tt(t, e, o, r), fo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = Ot(e),
      o = ht(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Tt(e, o, r)),
      t !== null && (tt(t, e, r, n), fo(t, e, r));
  },
};
function Ta(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Er(n, r) || !Er(o, i)
        : !0
  );
}
function td(e, t, n) {
  var r = !1,
    o = Bt,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Ge(i))
      : ((o = Ne(t) ? tn : Ce.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? zn(e, o) : Bt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ri),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ia(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ri.enqueueReplaceState(t, t.state, null);
}
function Pl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), xs(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Ge(i))
    : ((i = Ne(t) ? tn : Ce.current), (o.context = zn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (jl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && ri.enqueueReplaceState(o, o.state, null),
      Io(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Dn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Rf(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ui(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Rl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var th = typeof WeakMap == 'function' ? WeakMap : Map;
function nd(e, t, n) {
  (n = ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ao || ((Ao = !0), (Dl = r)), Rl(e, t);
    }),
    n
  );
}
function rd(e, t, n) {
  (n = ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Rl(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Rl(e, t),
          typeof r != 'function' && (It === null ? (It = new Set([this])) : It.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' });
      }),
    n
  );
}
function Oa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new th();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = mh.bind(null, e, t, n)), t.then(e, e));
}
function Da(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ua(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ht(-1, 1)), (t.tag = 2), Tt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var nh = wt.ReactCurrentOwner,
  $e = !1;
function _e(e, t, n, r) {
  t.child = e === null ? Nc(t, null, n, r) : In(t, e.child, n, r);
}
function Ba(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    $n(t, o),
    (r = _s(e, t, n, r, i, o)),
    (n = Es()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        xt(e, t, o))
      : (J && n && fs(t), (t.flags |= 1), _e(e, t, r, o), t.child)
  );
}
function Aa(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Ts(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), od(e, t, i, r, o))
      : ((e = yo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Er), n(l, r) && e.ref === t.ref))
      return xt(e, t, o);
  }
  return (t.flags |= 1), (e = Dt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function od(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Er(i, r) && e.ref === t.ref)
      if ((($e = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && ($e = !0);
      else return (t.lanes = e.lanes), xt(e, t, o);
  }
  return Ll(e, t, n, r, o);
}
function id(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(Cn, Te),
        (Te |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          V(Cn, Te),
          (Te |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        V(Cn, Te),
        (Te |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(Cn, Te),
      (Te |= r);
  return _e(e, t, o, n), t.child;
}
function ld(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ll(e, t, n, r, o) {
  var i = Ne(n) ? tn : Ce.current;
  return (
    (i = zn(t, i)),
    $n(t, o),
    (n = _s(e, t, n, r, i, o)),
    (r = Es()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        xt(e, t, o))
      : (J && r && fs(t), (t.flags |= 1), _e(e, t, n, o), t.child)
  );
}
function Ha(e, t, n, r, o) {
  if (Ne(n)) {
    var i = !0;
    Mo(t);
  } else i = !1;
  if (($n(t, o), t.stateNode === null)) mo(e, t), td(t, n, r), Pl(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Ge(u))
      : ((u = Ne(n) ? tn : Ce.current), (u = zn(t, u)));
    var d = n.getDerivedStateFromProps,
      p = typeof d == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || a !== u) && Ia(t, l, r, u)),
      (jt = !1);
    var f = t.memoizedState;
    (l.state = f),
      Io(t, r, l, o),
      (a = t.memoizedState),
      s !== r || f !== a || Me.current || jt
        ? (typeof d == 'function' && (jl(t, n, d, r), (a = t.memoizedState)),
          (s = jt || Ta(t, n, s, r, f, a, u))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      zc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Je(t.type, s)),
      (l.props = u),
      (p = t.pendingProps),
      (f = l.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Ge(a))
        : ((a = Ne(n) ? tn : Ce.current), (a = zn(t, a)));
    var g = n.getDerivedStateFromProps;
    (d = typeof g == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== p || f !== a) && Ia(t, l, r, a)),
      (jt = !1),
      (f = t.memoizedState),
      (l.state = f),
      Io(t, r, l, o);
    var y = t.memoizedState;
    s !== p || f !== y || Me.current || jt
      ? (typeof g == 'function' && (jl(t, n, g, r), (y = t.memoizedState)),
        (u = jt || Ta(t, n, u, r, f, y, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, y, a),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, y, a)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $l(e, t, n, r, i, o);
}
function $l(e, t, n, r, o, i) {
  ld(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Pa(t, n, !1), xt(e, t, i);
  (r = t.stateNode), (nh.current = t);
  var s = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = In(t, e.child, null, i)), (t.child = In(t, null, s, i)))
      : _e(e, t, s, i),
    (t.memoizedState = r.state),
    o && Pa(t, n, !0),
    t.child
  );
}
function sd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ja(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ja(e, t.context, !1),
    ws(e, t.containerInfo);
}
function Va(e, t, n, r, o) {
  return Tn(), hs(o), (t.flags |= 256), _e(e, t, n, r), t.child;
}
var Ml = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ad(e, t, n) {
  var r = t.pendingProps,
    o = b.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    V(b, o & 1),
    e === null)
  )
    return (
      _l(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = li(l, r, 0, null)),
              (e = en(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Nl(n)),
              (t.memoizedState = Ml),
              e)
            : Rs(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return rh(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = Dt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Dt(s, i)) : ((i = en(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Nl(n)
          : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ml),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Dt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Rs(e, t) {
  return (
    (t = li({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function eo(e, t, n, r) {
  return (
    r !== null && hs(r),
    In(t, e.child, null, n),
    (e = Rs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rh(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ui(Error(E(422)))), eo(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = li({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = en(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && In(t, e.child, null, l),
          (t.child.memoizedState = Nl(l)),
          (t.memoizedState = Ml),
          i);
  if (!(t.mode & 1)) return eo(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(E(419))), (r = Ui(i, r, void 0)), eo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), $e || s)) {
    if (((r = de), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), yt(e, o), tt(r, e, o, -1));
    }
    return zs(), (r = Ui(Error(E(421)))), eo(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vh.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ie = zt(o.nextSibling)),
      (Oe = t),
      (J = !0),
      (be = null),
      e !== null &&
        ((Ve[We++] = ft),
        (Ve[We++] = pt),
        (Ve[We++] = nn),
        (ft = e.id),
        (pt = e.overflow),
        (nn = t)),
      (t = Rs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), El(e.return, t, n);
}
function Bi(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function ud(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((_e(e, t, r.children, n), (r = b.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wa(e, n, t);
        else if (e.tag === 19) Wa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(b, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Oo(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Bi(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Oo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Bi(t, !0, n, null, i);
        break;
      case 'together':
        Bi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function mo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (on |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function oh(e, t, n) {
  switch (t.tag) {
    case 3:
      sd(t), Tn();
      break;
    case 5:
      Tc(t);
      break;
    case 1:
      Ne(t.type) && Mo(t);
      break;
    case 4:
      ws(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      V(zo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(b, b.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ad(e, t, n)
            : (V(b, b.current & 1), (e = xt(e, t, n)), e !== null ? e.sibling : null);
      V(b, b.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ud(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        V(b, b.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), id(e, t, n);
  }
  return xt(e, t, n);
}
var cd, Fl, dd, fd;
cd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fl = function () {};
dd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Zt(st.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = tl(e, o)), (r = tl(e, r)), (i = []);
        break;
      case 'select':
        (o = te({}, o, { value: void 0 })), (r = te({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = ol(e, o)), (r = ol(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Lo);
    }
    ll(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (yr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''));
            for (l in a)
              a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === 'children'
              ? (typeof a != 'string' && typeof a != 'number') ||
                (i = i || []).push(u, '' + a)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (yr.hasOwnProperty(u)
                  ? (a != null && u === 'onScroll' && Q('scroll', e),
                    i || s === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
fd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function tr(e, t) {
  if (!J)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ih(e, t, n) {
  var r = t.pendingProps;
  switch ((ps(t), t.tag)) {
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
      return xe(t), null;
    case 1:
      return Ne(t.type) && $o(), xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        On(),
        G(Me),
        G(Ce),
        ks(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), be !== null && (Al(be), (be = null)))),
        Fl(e, t),
        xe(t),
        null
      );
    case 5:
      Ss(t);
      var o = Zt($r.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dd(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return xe(t), null;
        }
        if (((e = Zt(st.current)), qr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[it] = t), (r[Rr] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Q('cancel', r), Q('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Q('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < lr.length; o++) Q(lr[o], r);
              break;
            case 'source':
              Q('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Q('error', r), Q('load', r);
              break;
            case 'details':
              Q('toggle', r);
              break;
            case 'input':
              bs(r, i), Q('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), Q('invalid', r);
              break;
            case 'textarea':
              ta(r, i), Q('invalid', r);
          }
          ll(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && Zr(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 && Zr(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : yr.hasOwnProperty(l) && s != null && l === 'onScroll' && Q('scroll', r);
            }
          switch (n) {
            case 'input':
              Vr(r), ea(r, i, !0);
              break;
            case 'textarea':
              Vr(r), na(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Lo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Bu(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === 'select' &&
                      ((l = e),
                      r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[it] = t),
            (e[Rr] = r),
            cd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = sl(n, r)), n)) {
              case 'dialog':
                Q('cancel', e), Q('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Q('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < lr.length; o++) Q(lr[o], e);
                o = r;
                break;
              case 'source':
                Q('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Q('error', e), Q('load', e), (o = r);
                break;
              case 'details':
                Q('toggle', e), (o = r);
                break;
              case 'input':
                bs(e, r), (o = tl(e, r)), Q('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = te({}, r, { value: void 0 })),
                  Q('invalid', e);
                break;
              case 'textarea':
                ta(e, r), (o = ol(e, r)), Q('invalid', e);
                break;
              default:
                o = r;
            }
            ll(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === 'style'
                  ? Vu(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && Au(e, a))
                    : i === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && xr(e, a)
                        : typeof a == 'number' && xr(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (yr.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && Q('scroll', e)
                          : a != null && ql(e, i, a, l));
              }
            switch (n) {
              case 'input':
                Vr(e), ea(e, r, !1);
                break;
              case 'textarea':
                Vr(e), na(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Ut(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? jn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && jn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Lo);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) fd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(E(166));
        if (((n = Zt($r.current)), Zt(st.current), qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[it] = t),
            (i = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Zr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Zr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[it] = t),
            (t.stateNode = r);
      }
      return xe(t), null;
    case 13:
      if (
        (G(b),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Ie !== null && t.mode & 1 && !(t.flags & 128))
          $c(), Tn(), (t.flags |= 98560), (i = !1);
        else if (((i = qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(E(317));
            i[it] = t;
          } else Tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          xe(t), (i = !1);
        } else be !== null && (Al(be), (be = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || b.current & 1 ? ae === 0 && (ae = 3) : zs())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return On(), Fl(e, t), e === null && jr(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return gs(t.type._context), xe(t), null;
    case 17:
      return Ne(t.type) && $o(), xe(t), null;
    case 19:
      if ((G(b), (i = t.memoizedState), i === null)) return xe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) tr(i, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Oo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    tr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return V(b, (b.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            re() > Un &&
            ((t.flags |= 128), (r = !0), tr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Oo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              tr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !J)
            )
              return xe(t), null;
          } else
            2 * re() - i.renderingStartTime > Un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), tr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = re()),
          (t.sibling = null),
          (n = b.current),
          V(b, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        Fs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Te & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function lh(e, t) {
  switch ((ps(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && $o(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        On(),
        G(Me),
        G(Ce),
        ks(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ss(t), null;
    case 13:
      if ((G(b), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Tn();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return G(b), null;
    case 4:
      return On(), null;
    case 10:
      return gs(t.type._context), null;
    case 22:
    case 23:
      return Fs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var to = !1,
  Se = !1,
  sh = typeof WeakSet == 'function' ? WeakSet : Set,
  $ = null;
function kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function zl(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Ka = !1;
function ah(e, t) {
  if (((gl = jo), (e = gc()), ds(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (o !== 0 && p.nodeType !== 3) || (s = l + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (f = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++u === o && (s = l),
                f === i && ++d === r && (a = l),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = g;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yl = { focusedElem: e, selectionRange: n }, jo = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    C = y.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Je(t.type, w),
                      C,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (x) {
          ne(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (y = Ka), (Ka = !1), y;
}
function hr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && zl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function oi(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Tl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function pd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[it], delete t[Rr], delete t[Sl], delete t[Wp], delete t[Kp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Il(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Lo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Il(e, t, n), e = e.sibling; e !== null; ) Il(e, t, n), (e = e.sibling);
}
function Ol(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ol(e, t, n), e = e.sibling; e !== null; ) Ol(e, t, n), (e = e.sibling);
}
var he = null,
  Ze = !1;
function _t(e, t, n) {
  for (n = n.child; n !== null; ) md(e, t, n), (n = n.sibling);
}
function md(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == 'function')
    try {
      lt.onCommitFiberUnmount(Jo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Se || kn(n, t);
    case 6:
      var r = he,
        o = Ze;
      (he = null),
        _t(e, t, n),
        (he = r),
        (Ze = o),
        he !== null &&
          (Ze
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null &&
        (Ze
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8 ? Fi(e.parentNode, n) : e.nodeType === 1 && Fi(e, n),
            Cr(e))
          : Fi(he, n.stateNode));
      break;
    case 4:
      (r = he),
        (o = Ze),
        (he = n.stateNode.containerInfo),
        (Ze = !0),
        _t(e, t, n),
        (he = r),
        (Ze = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Se && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && zl(n, t, l), (o = o.next);
        } while (o !== r);
      }
      _t(e, t, n);
      break;
    case 1:
      if (
        !Se &&
        (kn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ne(n, t, s);
        }
      _t(e, t, n);
      break;
    case 21:
      _t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Se = (r = Se) || n.memoizedState !== null), _t(e, t, n), (Se = r))
        : _t(e, t, n);
      break;
    default:
      _t(e, t, n);
  }
}
function Ga(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sh()),
      t.forEach(function (r) {
        var o = gh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (he = s.stateNode), (Ze = !1);
              break e;
            case 3:
              (he = s.stateNode.containerInfo), (Ze = !0);
              break e;
            case 4:
              (he = s.stateNode.containerInfo), (Ze = !0);
              break e;
          }
          s = s.return;
        }
        if (he === null) throw Error(E(160));
        md(i, l, o), (he = null), (Ze = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) vd(t, e), (t = t.sibling);
}
function vd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xe(t, e), rt(e), r & 4)) {
        try {
          hr(3, e, e.return), oi(3, e);
        } catch (w) {
          ne(e, e.return, w);
        }
        try {
          hr(5, e, e.return);
        } catch (w) {
          ne(e, e.return, w);
        }
      }
      break;
    case 1:
      Xe(t, e), rt(e), r & 512 && n !== null && kn(n, n.return);
      break;
    case 5:
      if ((Xe(t, e), rt(e), r & 512 && n !== null && kn(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          xr(o, '');
        } catch (w) {
          ne(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Du(o, i), sl(s, l);
            var u = sl(s, i);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                p = a[l + 1];
              d === 'style'
                ? Vu(o, p)
                : d === 'dangerouslySetInnerHTML'
                  ? Au(o, p)
                  : d === 'children'
                    ? xr(o, p)
                    : ql(o, d, p, u);
            }
            switch (s) {
              case 'input':
                nl(o, i);
                break;
              case 'textarea':
                Uu(o, i);
                break;
              case 'select':
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? jn(o, !!i.multiple, g, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? jn(o, !!i.multiple, i.defaultValue, !0)
                      : jn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Rr] = i;
          } catch (w) {
            ne(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Xe(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          ne(e, e.return, w);
        }
      }
      break;
    case 3:
      if ((Xe(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Cr(t.containerInfo);
        } catch (w) {
          ne(e, e.return, w);
        }
      break;
    case 4:
      Xe(t, e), rt(e);
      break;
    case 13:
      Xe(t, e),
        rt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ms = re())),
        r & 4 && Ga(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Se = (u = Se) || d), Xe(t, e), (Se = u)) : Xe(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for ($ = e, d = e.child; d !== null; ) {
            for (p = $ = d; $ !== null; ) {
              switch (((f = $), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hr(4, f, f.return);
                  break;
                case 1:
                  kn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      ne(r, n, w);
                    }
                  }
                  break;
                case 5:
                  kn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Xa(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), ($ = g)) : Xa(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = p.stateNode),
                      (a = p.memoizedProps.style),
                      (l = a != null && a.hasOwnProperty('display') ? a.display : null),
                      (s.style.display = Hu('display', l)));
              } catch (w) {
                ne(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? '' : p.memoizedProps;
              } catch (w) {
                ne(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Xe(t, e), rt(e), r & 4 && Ga(e);
      break;
    case 21:
      break;
    default:
      Xe(t, e), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (xr(o, ''), (r.flags &= -33));
          var i = Qa(e);
          Ol(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Qa(e);
          Il(e, s, l);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function uh(e, t, n) {
  ($ = e), gd(e);
}
function gd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || to;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Se;
        s = to;
        var u = Se;
        if (((to = l), (Se = a) && !u))
          for ($ = o; $ !== null; )
            (l = $),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ja(o)
                : a !== null
                  ? ((a.return = l), ($ = a))
                  : Ja(o);
        for (; i !== null; ) ($ = i), gd(i), (i = i.sibling);
        ($ = o), (to = s), (Se = u);
      }
      Ya(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), ($ = i)) : Ya(e);
  }
}
function Ya(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Se || oi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Na(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Na(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Cr(p);
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
              throw Error(E(163));
          }
        Se || (t.flags & 512 && Tl(t));
      } catch (f) {
        ne(t, t.return, f);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Xa(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Ja(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            oi(4, t);
          } catch (a) {
            ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ne(t, o, a);
            }
          }
          var i = t.return;
          try {
            Tl(t);
          } catch (a) {
            ne(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Tl(t);
          } catch (a) {
            ne(t, l, a);
          }
      }
    } catch (a) {
      ne(t, t.return, a);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), ($ = s);
      break;
    }
    $ = t.return;
  }
}
var ch = Math.ceil,
  Bo = wt.ReactCurrentDispatcher,
  Ls = wt.ReactCurrentOwner,
  Qe = wt.ReactCurrentBatchConfig,
  B = 0,
  de = null,
  ie = null,
  ve = 0,
  Te = 0,
  Cn = Ht(0),
  ae = 0,
  zr = null,
  on = 0,
  ii = 0,
  $s = 0,
  mr = null,
  Le = null,
  Ms = 0,
  Un = 1 / 0,
  ct = null,
  Ao = !1,
  Dl = null,
  It = null,
  no = !1,
  $t = null,
  Ho = 0,
  vr = 0,
  Ul = null,
  vo = -1,
  go = 0;
function je() {
  return B & 6 ? re() : vo !== -1 ? vo : (vo = re());
}
function Ot(e) {
  return e.mode & 1
    ? B & 2 && ve !== 0
      ? ve & -ve
      : Gp.transition !== null
        ? (go === 0 && (go = tc()), go)
        : ((e = A),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ac(e.type))),
          e)
    : 1;
}
function tt(e, t, n, r) {
  if (50 < vr) throw ((vr = 0), (Ul = null), Error(E(185)));
  Ir(e, n, r),
    (!(B & 2) || e !== de) &&
      (e === de && (!(B & 2) && (ii |= n), ae === 4 && Rt(e, ve)),
      Fe(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Un = re() + 500), ti && Vt()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  Gf(e, t);
  var r = Eo(e, e === de ? ve : 0);
  if (r === 0) n !== null && ia(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ia(n), t === 1))
      e.tag === 0 ? Qp(Za.bind(null, e)) : Pc(Za.bind(null, e)),
        Hp(function () {
          !(B & 6) && Vt();
        }),
        (n = null);
    else {
      switch (nc(r)) {
        case 1:
          n = rs;
          break;
        case 4:
          n = bu;
          break;
        case 16:
          n = _o;
          break;
        case 536870912:
          n = ec;
          break;
        default:
          n = _o;
      }
      n = Ed(n, yd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yd(e, t) {
  if (((vo = -1), (go = 0), B & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Mn() && e.callbackNode !== n) return null;
  var r = Eo(e, e === de ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vo(e, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var i = wd();
    (de !== e || ve !== t) && ((ct = null), (Un = re() + 500), bt(e, t));
    do
      try {
        ph();
        break;
      } catch (s) {
        xd(e, s);
      }
    while (!0);
    vs(),
      (Bo.current = i),
      (B = o),
      ie !== null ? (t = 0) : ((de = null), (ve = 0), (t = ae));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = fl(e)), o !== 0 && ((r = o), (t = Bl(e, o)))), t === 1))
      throw ((n = zr), bt(e, 0), Rt(e, r), Fe(e, re()), n);
    if (t === 6) Rt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !dh(o) &&
          ((t = Vo(e, r)),
          t === 2 && ((i = fl(e)), i !== 0 && ((r = i), (t = Bl(e, i)))),
          t === 1))
      )
        throw ((n = zr), bt(e, 0), Rt(e, r), Fe(e, re()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Qt(e, Le, ct);
          break;
        case 3:
          if ((Rt(e, r), (r & 130023424) === r && ((t = Ms + 500 - re()), 10 < t))) {
            if (Eo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = wl(Qt.bind(null, e, Le, ct), t);
            break;
          }
          Qt(e, Le, ct);
          break;
        case 4:
          if ((Rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - et(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = re() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * ch(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wl(Qt.bind(null, e, Le, ct), r);
            break;
          }
          Qt(e, Le, ct);
          break;
        case 5:
          Qt(e, Le, ct);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Fe(e, re()), e.callbackNode === n ? yd.bind(null, e) : null;
}
function Bl(e, t) {
  var n = mr;
  return (
    e.current.memoizedState.isDehydrated && (bt(e, t).flags |= 256),
    (e = Vo(e, t)),
    e !== 2 && ((t = Le), (Le = n), t !== null && Al(t)),
    e
  );
}
function Al(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function dh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!nt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Rt(e, t) {
  for (
    t &= ~$s, t &= ~ii, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Za(e) {
  if (B & 6) throw Error(E(327));
  Mn();
  var t = Eo(e, 0);
  if (!(t & 1)) return Fe(e, re()), null;
  var n = Vo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fl(e);
    r !== 0 && ((t = r), (n = Bl(e, r)));
  }
  if (n === 1) throw ((n = zr), bt(e, 0), Rt(e, t), Fe(e, re()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, Le, ct),
    Fe(e, re()),
    null
  );
}
function Ns(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((Un = re() + 500), ti && Vt());
  }
}
function ln(e) {
  $t !== null && $t.tag === 0 && !(B & 6) && Mn();
  var t = B;
  B |= 1;
  var n = Qe.transition,
    r = A;
  try {
    if (((Qe.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (Qe.transition = n), (B = t), !(B & 6) && Vt();
  }
}
function Fs() {
  (Te = Cn.current), G(Cn);
}
function bt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ap(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((ps(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $o();
          break;
        case 3:
          On(), G(Me), G(Ce), ks();
          break;
        case 5:
          Ss(r);
          break;
        case 4:
          On();
          break;
        case 13:
          G(b);
          break;
        case 19:
          G(b);
          break;
        case 10:
          gs(r.type._context);
          break;
        case 22:
        case 23:
          Fs();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (ie = e = Dt(e.current, null)),
    (ve = Te = t),
    (ae = 0),
    (zr = null),
    ($s = ii = on = 0),
    (Le = mr = null),
    Jt !== null)
  ) {
    for (t = 0; t < Jt.length; t++)
      if (((n = Jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Jt = null;
  }
  return e;
}
function xd(e, t) {
  do {
    var n = ie;
    try {
      if ((vs(), (po.current = Uo), Do)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Do = !1;
      }
      if (
        ((rn = 0),
        (ce = se = ee = null),
        (pr = !1),
        (Mr = 0),
        (Ls.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (zr = t), (ie = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = ve),
          (s.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            d = s,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = Da(l);
          if (g !== null) {
            (g.flags &= -257),
              Ua(g, l, s, i, t),
              g.mode & 1 && Oa(i, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Oa(i, u, t), zs();
              break e;
            }
            a = Error(E(426));
          }
        } else if (J && s.mode & 1) {
          var C = Da(l);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Ua(C, l, s, i, t), hs(Dn(a, s));
            break e;
          }
        }
        (i = a = Dn(a, s)),
          ae !== 4 && (ae = 2),
          mr === null ? (mr = [i]) : mr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = nd(i, a, t);
              Ma(i, m);
              break e;
            case 1:
              s = a;
              var h = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (It === null || !It.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = rd(i, s, t);
                Ma(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kd(n);
    } catch (j) {
      (t = j), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function wd() {
  var e = Bo.current;
  return (Bo.current = Uo), e === null ? Uo : e;
}
function zs() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    de === null || (!(on & 268435455) && !(ii & 268435455)) || Rt(de, ve);
}
function Vo(e, t) {
  var n = B;
  B |= 2;
  var r = wd();
  (de !== e || ve !== t) && ((ct = null), bt(e, t));
  do
    try {
      fh();
      break;
    } catch (o) {
      xd(e, o);
    }
  while (!0);
  if ((vs(), (B = n), (Bo.current = r), ie !== null)) throw Error(E(261));
  return (de = null), (ve = 0), ae;
}
function fh() {
  for (; ie !== null; ) Sd(ie);
}
function ph() {
  for (; ie !== null && !Df(); ) Sd(ie);
}
function Sd(e) {
  var t = _d(e.alternate, e, Te);
  (e.memoizedProps = e.pendingProps), t === null ? kd(e) : (ie = t), (Ls.current = null);
}
function kd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = lh(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (ie = null);
        return;
      }
    } else if (((n = ih(n, t, Te)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function Qt(e, t, n) {
  var r = A,
    o = Qe.transition;
  try {
    (Qe.transition = null), (A = 1), hh(e, t, n, r);
  } finally {
    (Qe.transition = o), (A = r);
  }
  return null;
}
function hh(e, t, n, r) {
  do Mn();
  while ($t !== null);
  if (B & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Yf(e, i),
    e === de && ((ie = de = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      no ||
      ((no = !0),
      Ed(_o, function () {
        return Mn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Qe.transition), (Qe.transition = null);
    var l = A;
    A = 1;
    var s = B;
    (B |= 4),
      (Ls.current = null),
      ah(e, n),
      vd(n, e),
      zp(yl),
      (jo = !!gl),
      (yl = gl = null),
      (e.current = n),
      uh(n),
      Uf(),
      (B = s),
      (A = l),
      (Qe.transition = i);
  } else e.current = n;
  if (
    (no && ((no = !1), ($t = e), (Ho = o)),
    (i = e.pendingLanes),
    i === 0 && (It = null),
    Hf(n.stateNode),
    Fe(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ao) throw ((Ao = !1), (e = Dl), (Dl = null), e);
  return (
    Ho & 1 && e.tag !== 0 && Mn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ul ? vr++ : ((vr = 0), (Ul = e))) : (vr = 0),
    Vt(),
    null
  );
}
function Mn() {
  if ($t !== null) {
    var e = nc(Ho),
      t = Qe.transition,
      n = A;
    try {
      if (((Qe.transition = null), (A = 16 > e ? 16 : e), $t === null)) var r = !1;
      else {
        if (((e = $t), ($t = null), (Ho = 0), B & 6)) throw Error(E(331));
        var o = B;
        for (B |= 4, $ = e.current; $ !== null; ) {
          var i = $,
            l = i.child;
          if ($.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for ($ = u; $ !== null; ) {
                  var d = $;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), ($ = p);
                  else
                    for (; $ !== null; ) {
                      d = $;
                      var f = d.sibling,
                        g = d.return;
                      if ((pd(d), d === u)) {
                        $ = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), ($ = f);
                        break;
                      }
                      $ = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), ($ = l);
          else
            e: for (; $ !== null; ) {
              if (((i = $), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), ($ = m);
                break e;
              }
              $ = i.return;
            }
        }
        var h = e.current;
        for ($ = h; $ !== null; ) {
          l = $;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), ($ = v);
          else
            e: for (l = h; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oi(9, s);
                  }
                } catch (j) {
                  ne(s, s.return, j);
                }
              if (s === l) {
                $ = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), ($ = x);
                break e;
              }
              $ = s.return;
            }
        }
        if (((B = o), Vt(), lt && typeof lt.onPostCommitFiberRoot == 'function'))
          try {
            lt.onPostCommitFiberRoot(Jo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (Qe.transition = t);
    }
  }
  return !1;
}
function qa(e, t, n) {
  (t = Dn(n, t)),
    (t = nd(e, t, 1)),
    (e = Tt(e, t, 1)),
    (t = je()),
    e !== null && (Ir(e, 1, t), Fe(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) qa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        qa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (It === null || !It.has(r)))
        ) {
          (e = Dn(n, e)),
            (e = rd(t, e, 1)),
            (t = Tt(t, e, 1)),
            (e = je()),
            t !== null && (Ir(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (ve & n) === n &&
      (ae === 4 || (ae === 3 && (ve & 130023424) === ve && 500 > re() - Ms)
        ? bt(e, 0)
        : ($s |= n)),
    Fe(e, t);
}
function Cd(e, t) {
  t === 0 &&
    (e.mode & 1 ? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304)) : (t = 1));
  var n = je();
  (e = yt(e, t)), e !== null && (Ir(e, t, n), Fe(e, n));
}
function vh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cd(e, n);
}
function gh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Cd(e, n);
}
var _d;
_d = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) $e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ($e = !1), oh(e, t, n);
      $e = !!(e.flags & 131072);
    }
  else ($e = !1), J && t.flags & 1048576 && Rc(t, Fo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      mo(e, t), (e = t.pendingProps);
      var o = zn(t, Ce.current);
      $n(t, n), (o = _s(null, t, r, e, o, n));
      var i = Es();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((i = !0), Mo(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            xs(t),
            (o.updater = ri),
            (t.stateNode = o),
            (o._reactInternals = t),
            Pl(t, r, e, n),
            (t = $l(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && fs(t), _e(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (mo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = xh(r)),
          (e = Je(r, e)),
          o)
        ) {
          case 0:
            t = Ll(null, t, r, e, n);
            break e;
          case 1:
            t = Ha(null, t, r, e, n);
            break e;
          case 11:
            t = Ba(null, t, r, e, n);
            break e;
          case 14:
            t = Aa(null, t, r, Je(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Je(r, o)),
        Ll(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Je(r, o)),
        Ha(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((sd(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          zc(e, t),
          Io(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Dn(Error(E(423)), t)), (t = Va(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Dn(Error(E(424)), t)), (t = Va(e, t, r, n, o));
            break e;
          } else
            for (
              Ie = zt(t.stateNode.containerInfo.firstChild),
                Oe = t,
                J = !0,
                be = null,
                n = Nc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tn(), r === o)) {
            t = xt(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Tc(t),
        e === null && _l(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        xl(r, o) ? (l = null) : i !== null && xl(r, i) && (t.flags |= 32),
        ld(e, t),
        _e(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && _l(t), null;
    case 13:
      return ad(e, t, n);
    case 4:
      return (
        ws(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = In(t, null, r, n)) : _e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Je(r, o)),
        Ba(e, t, r, o, n)
      );
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          V(zo, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (nt(i.value, l)) {
            if (i.children === o.children && !Me.current) {
              t = xt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = ht(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? (a.next = a) : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      El(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(E(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  El(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        _e(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        $n(t, n),
        (o = Ge(o)),
        (r = r(o)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type), (o = Je(r, t.pendingProps)), (o = Je(r.type, o)), Aa(e, t, r, o, n)
      );
    case 15:
      return od(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Je(r, o)),
        mo(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), Mo(t)) : (e = !1),
        $n(t, n),
        td(t, r, o),
        Pl(t, r, o, n),
        $l(null, t, r, !0, e, n)
      );
    case 19:
      return ud(e, t, n);
    case 22:
      return id(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Ed(e, t) {
  return qu(e, t);
}
function yh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ke(e, t, n, r) {
  return new yh(e, t, n, r);
}
function Ts(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function xh(e) {
  if (typeof e == 'function') return Ts(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === es)) return 11;
    if (e === ts) return 14;
  }
  return 2;
}
function Dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function yo(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) Ts(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case pn:
        return en(n.children, o, i, t);
      case bl:
        (l = 8), (o |= 8);
        break;
      case Zi:
        return (e = Ke(12, n, t, o | 2)), (e.elementType = Zi), (e.lanes = i), e;
      case qi:
        return (e = Ke(13, n, t, o)), (e.elementType = qi), (e.lanes = i), e;
      case bi:
        return (e = Ke(19, n, t, o)), (e.elementType = bi), (e.lanes = i), e;
      case Tu:
        return li(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Fu:
              l = 10;
              break e;
            case zu:
              l = 9;
              break e;
            case es:
              l = 11;
              break e;
            case ts:
              l = 14;
              break e;
            case Et:
              (l = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ''));
    }
  return (t = Ke(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function en(e, t, n, r) {
  return (e = Ke(7, e, r, t)), (e.lanes = n), e;
}
function li(e, t, n, r) {
  return (
    (e = Ke(22, e, r, t)),
    (e.elementType = Tu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ai(e, t, n) {
  return (e = Ke(6, e, null, t)), (e.lanes = n), e;
}
function Hi(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wh(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ki(0)),
    (this.expirationTimes = ki(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ki(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Is(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new wh(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ke(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xs(i),
    e
  );
}
function Sh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: fn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jd(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (an(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return jc(e, n, t);
  }
  return t;
}
function Pd(e, t, n, r, o, i, l, s, a) {
  return (
    (e = Is(n, r, !0, e, o, i, l, s, a)),
    (e.context = jd(null)),
    (n = e.current),
    (r = je()),
    (o = Ot(n)),
    (i = ht(r, o)),
    (i.callback = t ?? null),
    Tt(n, i, o),
    (e.current.lanes = o),
    Ir(e, o, r),
    Fe(e, r),
    e
  );
}
function si(e, t, n, r) {
  var o = t.current,
    i = je(),
    l = Ot(o);
  return (
    (n = jd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ht(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tt(o, t, l)),
    e !== null && (tt(e, o, l, i), fo(e, o, l)),
    l
  );
}
function Wo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ba(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Os(e, t) {
  ba(e, t), (e = e.alternate) && ba(e, t);
}
function kh() {
  return null;
}
var Rd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ds(e) {
  this._internalRoot = e;
}
ai.prototype.render = Ds.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  si(e, t, null, null);
};
ai.prototype.unmount = Ds.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function () {
      si(null, e, null, null);
    }),
      (t[gt] = null);
  }
};
function ai(e) {
  this._internalRoot = e;
}
ai.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ic();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++);
    Pt.splice(n, 0, e), n === 0 && sc(e);
  }
};
function Us(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ui(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function eu() {}
function Ch(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = Wo(l);
        i.call(u);
      };
    }
    var l = Pd(t, r, e, 0, null, !1, !1, '', eu);
    return (
      (e._reactRootContainer = l),
      (e[gt] = l.current),
      jr(e.nodeType === 8 ? e.parentNode : e),
      ln(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var u = Wo(a);
      s.call(u);
    };
  }
  var a = Is(e, 0, !1, null, null, !1, !1, '', eu);
  return (
    (e._reactRootContainer = a),
    (e[gt] = a.current),
    jr(e.nodeType === 8 ? e.parentNode : e),
    ln(function () {
      si(t, a, n, r);
    }),
    a
  );
}
function ci(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var a = Wo(l);
        s.call(a);
      };
    }
    si(t, l, e, o);
  } else l = Ch(n, t, e, o, r);
  return Wo(l);
}
rc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ir(t.pendingLanes);
        n !== 0 && (os(t, n | 1), Fe(t, re()), !(B & 6) && ((Un = re() + 500), Vt()));
      }
      break;
    case 13:
      ln(function () {
        var r = yt(e, 1);
        if (r !== null) {
          var o = je();
          tt(r, e, 1, o);
        }
      }),
        Os(e, 1);
  }
};
is = function (e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = je();
      tt(t, e, 134217728, n);
    }
    Os(e, 134217728);
  }
};
oc = function (e) {
  if (e.tag === 13) {
    var t = Ot(e),
      n = yt(e, t);
    if (n !== null) {
      var r = je();
      tt(n, e, t, r);
    }
    Os(e, t);
  }
};
ic = function () {
  return A;
};
lc = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
ul = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((nl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ei(r);
            if (!o) throw Error(E(90));
            Ou(r), nl(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Uu(e, n);
      break;
    case 'select':
      (t = n.value), t != null && jn(e, !!n.multiple, t, !1);
  }
};
Qu = Ns;
Gu = ln;
var _h = { usingClientEntryPoint: !1, Events: [Dr, gn, ei, Wu, Ku, Ns] },
  nr = {
    findFiberByHostInstance: Xt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Eh = {
    bundleType: nr.bundleType,
    version: nr.version,
    rendererPackageName: nr.rendererPackageName,
    rendererConfig: nr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ju(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: nr.findFiberByHostInstance || kh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ro.isDisabled && ro.supportsFiber)
    try {
      (Jo = ro.inject(Eh)), (lt = ro);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _h;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Us(t)) throw Error(E(200));
  return Sh(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!Us(e)) throw Error(E(299));
  var n = !1,
    r = '',
    o = Rd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Is(e, 1, !1, null, null, n, !1, r, o)),
    (e[gt] = t.current),
    jr(e.nodeType === 8 ? e.parentNode : e),
    new Ds(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(E(188))
      : ((e = Object.keys(e).join(',')), Error(E(268, e)));
  return (e = Ju(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return ln(e);
};
Ue.hydrate = function (e, t, n) {
  if (!ui(t)) throw Error(E(200));
  return ci(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!Us(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Rd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Pd(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[gt] = t.current),
    jr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ai(t);
};
Ue.render = function (e, t, n) {
  if (!ui(t)) throw Error(E(200));
  return ci(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!ui(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (ln(function () {
        ci(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gt] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = Ns;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ui(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return ci(e, t, n, !1, r);
};
Ue.version = '18.3.1-next-f1338f8080-20240426';
function Ld() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ld);
    } catch (e) {
      console.error(e);
    }
}
Ld(), (Lu.exports = Ue);
var $d = Lu.exports,
  tu = $d;
(Xi.createRoot = tu.createRoot), (Xi.hydrateRoot = tu.hydrateRoot);
const nu = 'pushstate',
  ru = 'popstate',
  Md = 'beforeunload',
  Nd = (e) => (e.preventDefault(), (e.returnValue = '')),
  jh = () => {
    removeEventListener(Md, Nd, { capture: !0 });
  };
function Fd(e) {
  let t = e.getLocation();
  const n = new Set();
  let r = [];
  const o = () => {
      (t = e.getLocation()), n.forEach((l) => l({ location: t }));
    },
    i = async (l, s) => {
      var a;
      if (
        !((s == null ? void 0 : s.ignoreBlocker) ?? !1) &&
        typeof document < 'u' &&
        r.length
      ) {
        for (const d of r)
          if (!(await d())) {
            (a = e.onBlocked) == null || a.call(e, o);
            return;
          }
      }
      l();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (l) => (
      n.add(l),
      () => {
        n.delete(l);
      }
    ),
    push: (l, s, a) => {
      (s = ou(s)),
        i(() => {
          e.pushState(l, s), o();
        }, a);
    },
    replace: (l, s, a) => {
      (s = ou(s)),
        i(() => {
          e.replaceState(l, s), o();
        }, a);
    },
    go: (l, s) => {
      i(() => {
        e.go(l), o();
      }, s);
    },
    back: (l) => {
      i(() => {
        e.back(), o();
      }, l);
    },
    forward: (l) => {
      i(() => {
        e.forward(), o();
      }, l);
    },
    createHref: (l) => e.createHref(l),
    block: (l) => (
      r.push(l),
      r.length === 1 && addEventListener(Md, Nd, { capture: !0 }),
      () => {
        (r = r.filter((s) => s !== l)), r.length || jh();
      }
    ),
    flush: () => {
      var l;
      return (l = e.flush) == null ? void 0 : l.call(e);
    },
    destroy: () => {
      var l;
      return (l = e.destroy) == null ? void 0 : l.call(e);
    },
    notify: o,
  };
}
function ou(e) {
  return e || (e = {}), { ...e, key: Lh() };
}
function Ph(e) {
  const t = typeof document < 'u' ? window : void 0,
    n = t.history.pushState,
    r = t.history.replaceState,
    o = (w) => w,
    i = () =>
      Ko(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state);
  let l = i(),
    s;
  const a = () => l;
  let u, d;
  const p = () => {
      u &&
        ((y._ignoreSubscribers = !0),
        (u.isPush ? t.history.pushState : t.history.replaceState)(u.state, '', u.href),
        (y._ignoreSubscribers = !1),
        (u = void 0),
        (d = void 0),
        (s = void 0));
    },
    f = (w, C, m) => {
      const h = o(C);
      d || (s = l),
        (l = Ko(C, m)),
        (u = {
          href: h,
          state: m,
          isPush: (u == null ? void 0 : u.isPush) || w === 'push',
        }),
        d || (d = Promise.resolve().then(() => p()));
    },
    g = () => {
      (l = i()), y.notify();
    },
    y = Fd({
      getLocation: a,
      getLength: () => t.history.length,
      pushState: (w, C) => f('push', w, C),
      replaceState: (w, C) => f('replace', w, C),
      back: () => t.history.back(),
      forward: () => t.history.forward(),
      go: (w) => t.history.go(w),
      createHref: (w) => o(w),
      flush: p,
      destroy: () => {
        (t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(nu, g),
          t.removeEventListener(ru, g);
      },
      onBlocked: (w) => {
        s && l !== s && ((l = s), w());
      },
    });
  return (
    t.addEventListener(nu, g),
    t.addEventListener(ru, g),
    (t.history.pushState = function (...w) {
      const C = n.apply(t.history, w);
      return y._ignoreSubscribers || g(), C;
    }),
    (t.history.replaceState = function (...w) {
      const C = r.apply(t.history, w);
      return y._ignoreSubscribers || g(), C;
    }),
    y
  );
}
function Rh(e = { initialEntries: ['/'] }) {
  const t = e.initialEntries;
  let n = e.initialIndex ?? t.length - 1;
  const r = t.map(() => ({}));
  return Fd({
    getLocation: () => Ko(t[n], r[n]),
    getLength: () => t.length,
    pushState: (i, l) => {
      n < t.length - 1 && (t.splice(n + 1), r.splice(n + 1)),
        r.push(l),
        t.push(i),
        (n = Math.max(t.length - 1, 0));
    },
    replaceState: (i, l) => {
      (r[n] = l), (t[n] = i);
    },
    back: () => {
      n = Math.max(n - 1, 0);
    },
    forward: () => {
      n = Math.min(n + 1, t.length - 1);
    },
    go: (i) => {
      n = Math.min(Math.max(n + i, 0), t.length - 1);
    },
    createHref: (i) => i,
  });
}
function Ko(e, t) {
  const n = e.indexOf('#'),
    r = e.indexOf('?');
  return {
    href: e,
    pathname: e.substring(0, n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length),
    hash: n > -1 ? e.substring(n) : '',
    search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : '',
    state: t || {},
  };
}
function Lh() {
  return (Math.random() + 1).toString(36).substring(7);
}
var $h = 'Invariant failed';
function Ee(e, t) {
  if (!e) throw new Error($h);
}
const Vi = O.createContext(null);
function zd() {
  return typeof document > 'u'
    ? Vi
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = Vi), Vi);
}
function St(e) {
  const t = O.useContext(zd());
  return e == null || e.warn, t;
}
var Td = { exports: {} },
  Id = {},
  Od = { exports: {} },
  Dd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bn = O;
function Mh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Nh = typeof Object.is == 'function' ? Object.is : Mh,
  Fh = Bn.useState,
  zh = Bn.useEffect,
  Th = Bn.useLayoutEffect,
  Ih = Bn.useDebugValue;
function Oh(e, t) {
  var n = t(),
    r = Fh({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    Th(
      function () {
        (o.value = n), (o.getSnapshot = t), Wi(o) && i({ inst: o });
      },
      [e, n, t],
    ),
    zh(
      function () {
        return (
          Wi(o) && i({ inst: o }),
          e(function () {
            Wi(o) && i({ inst: o });
          })
        );
      },
      [e],
    ),
    Ih(n),
    n
  );
}
function Wi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Nh(e, n);
  } catch {
    return !0;
  }
}
function Dh(e, t) {
  return t();
}
var Uh =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? Dh
    : Oh;
Dd.useSyncExternalStore =
  Bn.useSyncExternalStore !== void 0 ? Bn.useSyncExternalStore : Uh;
Od.exports = Dd;
var Bh = Od.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var di = O,
  Ah = Bh;
function Hh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vh = typeof Object.is == 'function' ? Object.is : Hh,
  Wh = Ah.useSyncExternalStore,
  Kh = di.useRef,
  Qh = di.useEffect,
  Gh = di.useMemo,
  Yh = di.useDebugValue;
Id.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = Kh(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = Gh(
    function () {
      function a(g) {
        if (!u) {
          if (((u = !0), (d = g), (g = r(g)), o !== void 0 && l.hasValue)) {
            var y = l.value;
            if (o(y, g)) return (p = y);
          }
          return (p = g);
        }
        if (((y = p), Vh(d, g))) return y;
        var w = r(g);
        return o !== void 0 && o(y, w) ? y : ((d = g), (p = w));
      }
      var u = !1,
        d,
        p,
        f = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        f === null
          ? void 0
          : function () {
              return a(f());
            },
      ];
    },
    [t, n, r, o],
  );
  var s = Wh(e, i[0], i[1]);
  return (
    Qh(
      function () {
        (l.hasValue = !0), (l.value = s);
      },
      [s],
    ),
    Yh(s),
    s
  );
};
Td.exports = Id;
var Xh = Td.exports;
class Jh {
  constructor(t, n) {
    (this.listeners = new Set()),
      (this._batching = !1),
      (this._flushing = 0),
      (this.subscribe = (r) => {
        var o, i;
        this.listeners.add(r);
        const l =
          (i = (o = this.options) == null ? void 0 : o.onSubscribe) == null
            ? void 0
            : i.call(o, r, this);
        return () => {
          this.listeners.delete(r), l == null || l();
        };
      }),
      (this.setState = (r) => {
        var o, i, l;
        const s = this.state;
        (this.state =
          (o = this.options) != null && o.updateFn ? this.options.updateFn(s)(r) : r(s)),
          (l = (i = this.options) == null ? void 0 : i.onUpdate) == null || l.call(i),
          this._flush();
      }),
      (this._flush = () => {
        if (this._batching) return;
        const r = ++this._flushing;
        this.listeners.forEach((o) => {
          this._flushing === r && o();
        });
      }),
      (this.batch = (r) => {
        if (this._batching) return r();
        (this._batching = !0), r(), (this._batching = !1), this._flush();
      }),
      (this.state = t),
      (this.options = n);
  }
}
function Zh(e, t = (n) => n) {
  return Xh.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    qh,
  );
}
function qh(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]]))
      return !1;
  return !0;
}
const we = '__root__';
function bh(e, t) {
  let n,
    r,
    o,
    i = '';
  for (n in e)
    if ((o = e[n]) !== void 0)
      if (Array.isArray(o))
        for (r = 0; r < o.length; r++)
          i && (i += '&'), (i += encodeURIComponent(n) + '=' + encodeURIComponent(o[r]));
      else i && (i += '&'), (i += encodeURIComponent(n) + '=' + encodeURIComponent(o));
  return '' + i;
}
function iu(e) {
  if (!e) return '';
  const t = decodeURIComponent(e);
  return t === 'false' ? !1 : t === 'true' ? !0 : +t * 0 === 0 && +t + '' === t ? +t : t;
}
function e0(e, t) {
  let n, r;
  const o = {},
    i = e.split('&');
  for (; (n = i.shift()); ) {
    const l = n.indexOf('=');
    if (l !== -1) {
      (r = n.slice(0, l)), (r = decodeURIComponent(r));
      const s = n.slice(l + 1);
      o[r] !== void 0 ? (o[r] = [].concat(o[r], iu(s))) : (o[r] = iu(s));
    } else (r = n), (r = decodeURIComponent(r)), (o[r] = '');
  }
  return o;
}
const t0 = r0(JSON.parse),
  n0 = o0(JSON.stringify, JSON.parse);
function r0(e) {
  return (t) => {
    t.substring(0, 1) === '?' && (t = t.substring(1));
    const n = e0(t);
    for (const r in n) {
      const o = n[r];
      if (typeof o == 'string')
        try {
          n[r] = e(o);
        } catch {}
    }
    return n;
  };
}
function o0(e, t) {
  function n(r) {
    if (typeof r == 'object' && r !== null)
      try {
        return e(r);
      } catch {}
    else if (typeof r == 'string' && typeof t == 'function')
      try {
        return t(r), e(r);
      } catch {}
    return r;
  }
  return (r) => {
    (r = { ...r }),
      Object.keys(r).forEach((i) => {
        const l = r[i];
        typeof l > 'u' || l === void 0 ? delete r[i] : (r[i] = n(l));
      });
    const o = bh(r).toString();
    return o ? `?${o}` : '';
  };
}
function gr(e) {
  return e[e.length - 1];
}
function i0(e) {
  return typeof e == 'function';
}
function _n(e, t) {
  return i0(e) ? e(t) : e;
}
function xo(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function He(e, t) {
  if (e === t) return e;
  const n = t,
    r = su(e) && su(n);
  if (r || (An(e) && An(n))) {
    const o = r ? e : Object.keys(e),
      i = o.length,
      l = r ? n : Object.keys(n),
      s = l.length,
      a = r ? [] : {};
    let u = 0;
    for (let d = 0; d < s; d++) {
      const p = r ? d : l[d];
      ((!r && o.includes(p)) || r) && e[p] === void 0 && n[p] === void 0
        ? ((a[p] = void 0), u++)
        : ((a[p] = He(e[p], n[p])), a[p] === e[p] && e[p] !== void 0 && u++);
    }
    return i === s && u === i ? e : a;
  }
  return n;
}
function An(e) {
  if (!lu(e)) return !1;
  const t = e.constructor;
  if (typeof t > 'u') return !0;
  const n = t.prototype;
  return !(!lu(n) || !n.hasOwnProperty('isPrototypeOf'));
}
function lu(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function su(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function au(e, t) {
  let n = Object.keys(e);
  return t && (n = n.filter((r) => e[r] !== void 0)), n;
}
function Nn(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (An(e) && An(t)) {
    const r = (n == null ? void 0 : n.ignoreUndefined) ?? !0,
      o = au(e, r),
      i = au(t, r);
    return !(n != null && n.partial) && o.length !== i.length
      ? !1
      : i.every((l) => Nn(e[l], t[l], n));
  }
  return Array.isArray(e) && Array.isArray(t)
    ? e.length !== t.length
      ? !1
      : !e.some((r, o) => !Nn(r, t[o], n))
    : !1;
}
const sr = typeof window < 'u' ? O.useLayoutEffect : O.useEffect;
function dn(e) {
  let t, n;
  const r = new Promise((o, i) => {
    (t = o), (n = i);
  });
  return (
    (r.status = 'pending'),
    (r.resolve = (o) => {
      (r.status = 'resolved'), (r.value = o), t(o), e == null || e(o);
    }),
    (r.reject = (o) => {
      (r.status = 'rejected'), n(o);
    }),
    r
  );
}
function Ki(e) {
  const t = O.useRef({ value: e, prev: null }),
    n = t.current.value;
  return e !== n && (t.current = { value: e, prev: n }), t.current.prev;
}
function l0(e, t, n = {}, r = {}) {
  const o = O.useRef(typeof IntersectionObserver == 'function'),
    i = O.useRef(null);
  return (
    O.useEffect(() => {
      if (!(!e.current || !o.current || r.disabled))
        return (
          (i.current = new IntersectionObserver(([l]) => {
            t(l);
          }, n)),
          i.current.observe(e.current),
          () => {
            var l;
            (l = i.current) == null || l.disconnect();
          }
        );
    }, [t, n, r.disabled, e]),
    i.current
  );
}
function s0(e) {
  const t = O.useRef(null);
  return (
    O.useEffect(() => {
      e && (typeof e == 'function' ? e(t.current) : (e.current = t.current));
    }),
    t
  );
}
function mt(e) {
  return fi(e.filter((t) => t !== void 0).join('/'));
}
function fi(e) {
  return e.replace(/\/{2,}/g, '/');
}
function Bs(e) {
  return e === '/' ? e : e.replace(/^\/{1,}/, '');
}
function qt(e) {
  return e === '/' ? e : e.replace(/\/{1,}$/, '');
}
function Hl(e) {
  return qt(Bs(e));
}
function Qo(e, t) {
  return e.endsWith('/') && e !== '/' && e !== `${t}/` ? e.slice(0, -1) : e;
}
function a0(e, t, n) {
  return Qo(e, n) === Qo(t, n);
}
function u0({
  basepath: e,
  base: t,
  to: n,
  trailingSlash: r = 'never',
  caseSensitive: o,
}) {
  var i, l;
  (t = Go(e, t, o)), (n = Go(e, n, o));
  let s = Hn(t);
  const a = Hn(n);
  s.length > 1 && ((i = gr(s)) == null ? void 0 : i.value) === '/' && s.pop(),
    a.forEach((d, p) => {
      d.value === '/'
        ? p
          ? p === a.length - 1 && s.push(d)
          : (s = [d])
        : d.value === '..'
          ? s.pop()
          : d.value === '.' || s.push(d);
    }),
    s.length > 1 &&
      (((l = gr(s)) == null ? void 0 : l.value) === '/'
        ? r === 'never' && s.pop()
        : r === 'always' && s.push({ type: 'pathname', value: '/' }));
  const u = mt([e, ...s.map((d) => d.value)]);
  return fi(u);
}
function Hn(e) {
  if (!e) return [];
  e = fi(e);
  const t = [];
  if (
    (e.slice(0, 1) === '/' &&
      ((e = e.substring(1)), t.push({ type: 'pathname', value: '/' })),
    !e)
  )
    return t;
  const n = e.split('/').filter(Boolean);
  return (
    t.push(
      ...n.map((r) =>
        r === '$' || r === '*'
          ? { type: 'wildcard', value: r }
          : r.charAt(0) === '$'
            ? { type: 'param', value: r }
            : { type: 'pathname', value: decodeURI(r) },
      ),
    ),
    e.slice(-1) === '/' &&
      ((e = e.substring(1)), t.push({ type: 'pathname', value: '/' })),
    t
  );
}
function oo({ path: e, params: t, leaveWildcards: n, leaveParams: r, decodeCharMap: o }) {
  const i = Hn(e),
    l = {};
  for (const [s, a] of Object.entries(t)) {
    const u = typeof a == 'string';
    ['*', '_splat'].includes(s)
      ? (l[s] = u ? encodeURI(a) : a)
      : (l[s] = u ? c0(a, o) : a);
  }
  return mt(
    i.map((s) => {
      if (s.type === 'wildcard') {
        const a = l._splat;
        return n ? `${s.value}${a ?? ''}` : a;
      }
      if (s.type === 'param') {
        if (r) {
          const a = l[s.value];
          return `${s.value}${a ?? ''}`;
        }
        return l[s.value.substring(1)] ?? 'undefined';
      }
      return s.value;
    }),
  );
}
function c0(e, t) {
  let n = encodeURIComponent(e);
  if (t) for (const [r, o] of t) n = n.replaceAll(r, o);
  return n;
}
function io(e, t, n) {
  const r = d0(e, t, n);
  if (!(n.to && !r)) return r ?? {};
}
function Go(e, t, n = !1) {
  const r = n ? e : e.toLowerCase(),
    o = n ? t : t.toLowerCase();
  switch (!0) {
    case r === '/':
      return t;
    case o === r:
      return '';
    case t.length < e.length:
      return t;
    case o[r.length] !== '/':
      return t;
    case o.startsWith(r):
      return t.slice(e.length);
    default:
      return t;
  }
}
function d0(e, t, n) {
  if (e !== '/' && !t.startsWith(e)) return;
  t = Go(e, t, n.caseSensitive);
  const r = Go(e, `${n.to ?? '$'}`, n.caseSensitive),
    o = Hn(t),
    i = Hn(r);
  t.startsWith('/') || o.unshift({ type: 'pathname', value: '/' }),
    r.startsWith('/') || i.unshift({ type: 'pathname', value: '/' });
  const l = {};
  return (() => {
    for (let a = 0; a < Math.max(o.length, i.length); a++) {
      const u = o[a],
        d = i[a],
        p = a >= o.length - 1,
        f = a >= i.length - 1;
      if (d) {
        if (d.type === 'wildcard') {
          const g = decodeURI(mt(o.slice(a).map((y) => y.value)));
          return (l['*'] = g), (l._splat = g), !0;
        }
        if (d.type === 'pathname') {
          if (d.value === '/' && !(u != null && u.value)) return !0;
          if (u) {
            if (n.caseSensitive) {
              if (d.value !== u.value) return !1;
            } else if (d.value.toLowerCase() !== u.value.toLowerCase()) return !1;
          }
        }
        if (!u) return !1;
        if (d.type === 'param') {
          if (u.value === '/') return !1;
          u.value.charAt(0) !== '$' &&
            (l[d.value.substring(1)] = decodeURIComponent(u.value));
        }
      }
      if (!p && f)
        return (
          (l['**'] = mt(o.slice(a + 1).map((g) => g.value))),
          !!n.fuzzy && (d == null ? void 0 : d.value) !== '/'
        );
    }
    return !0;
  })()
    ? l
    : void 0;
}
function Gt(e) {
  return !!(e != null && e.isRedirect);
}
function Qi(e) {
  return !!(e != null && e.isRedirect) && e.href;
}
function As(e) {
  const t = e.errorComponent ?? pi;
  return c.jsx(f0, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? O.createElement(t, { error: n, reset: r }) : e.children,
  });
}
class f0 extends O.Component {
  constructor() {
    super(...arguments), (this.state = { error: null });
  }
  static getDerivedStateFromProps(t) {
    return { resetKey: t.getResetKey() };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(t, n) {
    n.error && n.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(t, n) {
    this.props.onCatch && this.props.onCatch(t, n);
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function pi({ error: e }) {
  const [t, n] = O.useState(!1);
  return c.jsxs('div', {
    style: { padding: '.5rem', maxWidth: '100%' },
    children: [
      c.jsxs('div', {
        style: { display: 'flex', alignItems: 'center', gap: '.5rem' },
        children: [
          c.jsx('strong', {
            style: { fontSize: '1rem' },
            children: 'Something went wrong!',
          }),
          c.jsx('button', {
            style: {
              appearance: 'none',
              fontSize: '.6em',
              border: '1px solid currentColor',
              padding: '.1rem .2rem',
              fontWeight: 'bold',
              borderRadius: '.25rem',
            },
            onClick: () => n((r) => !r),
            children: t ? 'Hide Error' : 'Show Error',
          }),
        ],
      }),
      c.jsx('div', { style: { height: '.25rem' } }),
      t
        ? c.jsx('div', {
            children: c.jsx('pre', {
              style: {
                fontSize: '.7em',
                border: '1px solid red',
                borderRadius: '.25rem',
                padding: '.3rem',
                color: 'red',
                overflow: 'auto',
              },
              children: e.message ? c.jsx('code', { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function ke(e) {
  const t = St({ warn: (e == null ? void 0 : e.router) === void 0 }),
    n = (e == null ? void 0 : e.router) || t,
    r = O.useRef();
  return Zh(n.__store, (o) => {
    if (e != null && e.select) {
      if (e.structuralSharing ?? n.options.defaultStructuralSharing) {
        const i = He(r.current, e.select(o));
        return (r.current = i), i;
      }
      return e.select(o);
    }
    return o;
  });
}
function qe(e) {
  return !!(e != null && e.isNotFound);
}
function p0(e) {
  const t = ke({ select: (n) => `not-found-${n.location.pathname}-${n.status}` });
  return c.jsx(As, {
    getResetKey: () => t,
    onCatch: (n, r) => {
      var o;
      if (qe(n)) (o = e.onCatch) == null || o.call(e, n, r);
      else throw n;
    },
    errorComponent: ({ error: n }) => {
      var r;
      if (qe(n)) return (r = e.fallback) == null ? void 0 : r.call(e, n);
      throw n;
    },
    children: e.children,
  });
}
function h0() {
  return c.jsx('p', { children: 'Not Found' });
}
const m0 = {
    stringify: (e) =>
      JSON.stringify(e, function (n, r) {
        const o = this[n],
          i = uu.find((l) => l.stringifyCondition(o));
        return i ? i.stringify(o) : r;
      }),
    parse: (e) =>
      JSON.parse(e, function (n, r) {
        const o = this[n],
          i = uu.find((l) => l.parseCondition(o));
        return i ? i.parse(o) : r;
      }),
  },
  uu = [
    {
      stringifyCondition: (e) => e instanceof Date,
      stringify: (e) => ({ $date: e.toISOString() }),
      parseCondition: (e) => An(e) && e.$date,
      parse: (e) => new Date(e.$date),
    },
    {
      stringifyCondition: (e) => e === void 0,
      stringify: () => ({ $undefined: '' }),
      parseCondition: (e) => An(e) && e.$undefined === '',
      parse: () => {},
    },
  ],
  Ud = ['component', 'errorComponent', 'pendingComponent', 'notFoundComponent'];
function v0(e) {
  var t;
  for (const n of Ud) if ((t = e.options[n]) != null && t.preload) return !0;
  return !1;
}
function Gi(e, t) {
  if (e == null) return {};
  if ('~standard' in e) {
    const n = e['~standard'].validate(t);
    if ('value' in n) return n.value;
    throw n instanceof Promise
      ? new Vl('Async validation not supported')
      : new Vl(JSON.stringify(n.issues, void 0, 2));
  }
  return 'parse' in e ? e.parse(t) : typeof e == 'function' ? e(t) : {};
}
function g0(e) {
  return new y0(e);
}
class y0 {
  constructor(t) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.subscribers = new Set()),
      (this.startReactTransition = (n) => n()),
      (this.update = (n) => {
        n.notFoundRoute &&
          console.warn(
            'The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info.',
          );
        const r = this.options;
        (this.options = { ...this.options, ...n }),
          (this.isServer = this.options.isServer ?? typeof document > 'u'),
          (this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters
            ? new Map(
                this.options.pathParamsAllowedCharacters.map((o) => [
                  encodeURIComponent(o),
                  o,
                ]),
              )
            : void 0),
          (!this.basepath || (n.basepath && n.basepath !== r.basepath)) &&
            (n.basepath === void 0 || n.basepath === '' || n.basepath === '/'
              ? (this.basepath = '/')
              : (this.basepath = `/${Hl(n.basepath)}`)),
          (!this.history ||
            (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer ? Rh({ initialEntries: [this.basepath || '/'] }) : Ph())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            (this.__store = new Jh(w0(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (o) => !['redirected'].includes(o.status),
                  ),
                };
              },
            }));
      }),
      (this.buildRouteTree = () => {
        (this.routesById = {}), (this.routesByPath = {});
        const n = this.options.notFoundRoute;
        n &&
          (n.init({ originalIndex: 99999999999, defaultSsr: this.options.defaultSsr }),
          (this.routesById[n.id] = n));
        const r = (l) => {
          l.forEach((s, a) => {
            s.init({ originalIndex: a, defaultSsr: this.options.defaultSsr });
            const u = this.routesById[s.id];
            if (
              (Ee(!u, `Duplicate routes found with id: ${String(s.id)}`),
              (this.routesById[s.id] = s),
              !s.isRoot && s.path)
            ) {
              const p = qt(s.fullPath);
              (!this.routesByPath[p] || s.fullPath.endsWith('/')) &&
                (this.routesByPath[p] = s);
            }
            const d = s.children;
            d != null && d.length && r(d);
          });
        };
        r([this.routeTree]);
        const o = [];
        Object.values(this.routesById).forEach((l, s) => {
          var a;
          if (l.isRoot || !l.path) return;
          const u = Bs(l.fullPath),
            d = Hn(u);
          for (; d.length > 1 && ((a = d[0]) == null ? void 0 : a.value) === '/'; )
            d.shift();
          const p = d.map((f) =>
            f.value === '/'
              ? 0.75
              : f.type === 'param'
                ? 0.5
                : f.type === 'wildcard'
                  ? 0.25
                  : 1,
          );
          o.push({ child: l, trimmed: u, parsed: d, index: s, scores: p });
        }),
          (this.flatRoutes = o
            .sort((l, s) => {
              const a = Math.min(l.scores.length, s.scores.length);
              for (let u = 0; u < a; u++)
                if (l.scores[u] !== s.scores[u]) return s.scores[u] - l.scores[u];
              if (l.scores.length !== s.scores.length)
                return s.scores.length - l.scores.length;
              for (let u = 0; u < a; u++)
                if (l.parsed[u].value !== s.parsed[u].value)
                  return l.parsed[u].value > s.parsed[u].value ? 1 : -1;
              return l.index - s.index;
            })
            .map((l, s) => ((l.child.rank = s), l.child)));
      }),
      (this.subscribe = (n, r) => {
        const o = { eventType: n, fn: r };
        return (
          this.subscribers.add(o),
          () => {
            this.subscribers.delete(o);
          }
        );
      }),
      (this.emit = (n) => {
        this.subscribers.forEach((r) => {
          r.eventType === n.type && r.fn(n);
        });
      }),
      (this.parseLocation = (n) => {
        const r = ({ pathname: s, search: a, hash: u, state: d }) => {
            const p = this.options.parseSearch(a),
              f = this.options.stringifySearch(p);
            return {
              pathname: s,
              searchStr: f,
              search: He(n == null ? void 0 : n.search, p),
              hash: u.split('#').reverse()[0] ?? '',
              href: `${s}${f}${u}`,
              state: He(n == null ? void 0 : n.state, d),
            };
          },
          o = r(this.history.location),
          { __tempLocation: i, __tempKey: l } = o.state;
        if (i && (!l || l === this.tempLocationKey)) {
          const s = r(i);
          return (
            (s.state.key = o.state.key),
            delete s.state.__tempLocation,
            { ...s, maskedLocation: o }
          );
        }
        return o;
      }),
      (this.resolvePathWithBase = (n, r) =>
        u0({
          basepath: this.basepath,
          base: n,
          to: fi(r),
          trailingSlash: this.options.trailingSlash,
          caseSensitive: this.options.caseSensitive,
        })),
      (this.getMatchedRoutes = (n, r) => {
        let o = {};
        const i = qt(n.pathname),
          l = (d) =>
            io(this.basepath, i, {
              to: d.fullPath,
              caseSensitive: d.options.caseSensitive ?? this.options.caseSensitive,
              fuzzy: !0,
            });
        let s = (r == null ? void 0 : r.to) !== void 0 ? this.routesByPath[r.to] : void 0;
        s
          ? (o = l(s))
          : (s = this.flatRoutes.find((d) => {
              const p = l(d);
              return p ? ((o = p), !0) : !1;
            }));
        let a = s || this.routesById[we];
        const u = [a];
        for (; a.parentRoute; ) (a = a.parentRoute), u.unshift(a);
        return { matchedRoutes: u, routeParams: o, foundRoute: s };
      }),
      (this.cancelMatch = (n) => {
        const r = this.getMatch(n);
        r && (r.abortController.abort(), clearTimeout(r.pendingTimeout));
      }),
      (this.cancelMatches = () => {
        var n;
        (n = this.state.pendingMatches) == null ||
          n.forEach((r) => {
            this.cancelMatch(r.id);
          });
      }),
      (this.buildLocation = (n) => {
        const r = (i = {}, l) => {
            var s, a, u, d, p, f;
            const g = i._fromLocation
                ? this.matchRoutes(i._fromLocation, { _buildLocation: !0 })
                : this.state.matches,
              y =
                i.from != null
                  ? g.find((T) =>
                      io(this.basepath, qt(T.pathname), {
                        to: i.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      }),
                    )
                  : void 0,
              w = (y == null ? void 0 : y.pathname) || this.latestLocation.pathname;
            Ee(i.from == null || y != null, 'Could not find match for from: ' + i.from);
            const C =
                (s = this.state.pendingMatches) != null && s.length
                  ? (a = gr(this.state.pendingMatches)) == null
                    ? void 0
                    : a.search
                  : ((u = gr(g)) == null ? void 0 : u.search) ||
                    this.latestLocation.search,
              m =
                l == null
                  ? void 0
                  : l.matchedRoutes.filter((T) => g.find((D) => D.routeId === T.id));
            let h;
            if (i.to) h = this.resolvePathWithBase(w, `${i.to}`);
            else {
              const T =
                this.routesById[
                  (d =
                    m == null
                      ? void 0
                      : m.find((D) => {
                          const W = oo({
                            path: D.fullPath,
                            params: (l == null ? void 0 : l.routeParams) ?? {},
                            decodeCharMap: this.pathParamsDecodeCharMap,
                          });
                          return mt([this.basepath, W]) === w;
                        })) == null
                    ? void 0
                    : d.id
                ];
              h = this.resolvePathWithBase(w, (T == null ? void 0 : T.to) ?? w);
            }
            const v = { ...((p = gr(g)) == null ? void 0 : p.params) };
            let x = (i.params ?? !0) === !0 ? v : { ...v, ..._n(i.params, v) };
            Object.keys(x).length > 0 &&
              (l == null ||
                l.matchedRoutes
                  .map((T) => {
                    var D;
                    return (
                      ((D = T.options.params) == null ? void 0 : D.stringify) ??
                      T.options.stringifyParams
                    );
                  })
                  .filter(Boolean)
                  .forEach((T) => {
                    x = { ...x, ...T(x) };
                  })),
              (h = oo({
                path: h,
                params: x ?? {},
                leaveWildcards: !1,
                leaveParams: n.leaveParams,
                decodeCharMap: this.pathParamsDecodeCharMap,
              }));
            let j = C;
            if (
              n._includeValidateSearch &&
              (f = this.options.search) != null &&
              f.strict
            ) {
              let T = {};
              l == null ||
                l.matchedRoutes.forEach((D) => {
                  try {
                    D.options.validateSearch &&
                      (T = {
                        ...T,
                        ...(Gi(D.options.validateSearch, { ...T, ...j }) ?? {}),
                      });
                  } catch {}
                }),
                (j = T);
            }
            (j = ((T) => {
              const D =
                  (l == null
                    ? void 0
                    : l.matchedRoutes.reduce((K, I) => {
                        var Y;
                        const S = [];
                        if ('search' in I.options)
                          (Y = I.options.search) != null &&
                            Y.middlewares &&
                            S.push(...I.options.search.middlewares);
                        else if (
                          I.options.preSearchFilters ||
                          I.options.postSearchFilters
                        ) {
                          const N = ({ search: M, next: F }) => {
                            let z = M;
                            'preSearchFilters' in I.options &&
                              I.options.preSearchFilters &&
                              (z = I.options.preSearchFilters.reduce(
                                (oe, le) => le(oe),
                                M,
                              ));
                            const X = F(z);
                            return 'postSearchFilters' in I.options &&
                              I.options.postSearchFilters
                              ? I.options.postSearchFilters.reduce((oe, le) => le(oe), X)
                              : X;
                          };
                          S.push(N);
                        }
                        if (n._includeValidateSearch && I.options.validateSearch) {
                          const N = ({ search: M, next: F }) => {
                            try {
                              const z = F(M);
                              return { ...z, ...(Gi(I.options.validateSearch, z) ?? {}) };
                            } catch {}
                          };
                          S.push(N);
                        }
                        return K.concat(S);
                      }, [])) ?? [],
                W = ({ search: K }) =>
                  i.search ? (i.search === !0 ? K : _n(i.search, K)) : {};
              D.push(W);
              const fe = (K, I) => {
                if (K >= D.length) return I;
                const Y = D[K];
                return Y({ search: I, next: (N) => fe(K + 1, N) });
              };
              return fe(0, T);
            })(j)),
              (j = He(C, j));
            const R = this.options.stringifySearch(j),
              P =
                i.hash === !0
                  ? this.latestLocation.hash
                  : i.hash
                    ? _n(i.hash, this.latestLocation.hash)
                    : void 0,
              k = P ? `#${P}` : '';
            let L =
              i.state === !0
                ? this.latestLocation.state
                : i.state
                  ? _n(i.state, this.latestLocation.state)
                  : {};
            return (
              (L = He(this.latestLocation.state, L)),
              {
                pathname: h,
                search: j,
                searchStr: R,
                state: L,
                hash: P ?? '',
                href: `${h}${R}${k}`,
                unmaskOnReload: i.unmaskOnReload,
              }
            );
          },
          o = (i = {}, l) => {
            var s;
            const a = r(i);
            let u = l ? r(l) : void 0;
            if (!u) {
              let f = {};
              const g =
                (s = this.options.routeMasks) == null
                  ? void 0
                  : s.find((y) => {
                      const w = io(this.basepath, a.pathname, {
                        to: y.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      });
                      return w ? ((f = w), !0) : !1;
                    });
              if (g) {
                const { from: y, ...w } = g;
                (l = { ...xo(n, ['from']), ...w, params: f }), (u = r(l));
              }
            }
            const d = this.getMatchedRoutes(a, i),
              p = r(i, d);
            if (u) {
              const f = this.getMatchedRoutes(u, l),
                g = r(l, f);
              p.maskedLocation = g;
            }
            return p;
          };
        return n.mask ? o(n, { ...xo(n, ['from']), ...n.mask }) : o(n);
      }),
      (this.commitLocation = ({ viewTransition: n, ignoreBlocker: r, ...o }) => {
        const i = () => {
            o.state.key = this.latestLocation.state.key;
            const a = Nn(o.state, this.latestLocation.state);
            return delete o.state.key, a;
          },
          l = this.latestLocation.href === o.href,
          s = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = dn(() => {
            s == null || s.resolve();
          })),
          l && i())
        )
          this.load();
        else {
          let { maskedLocation: a, ...u } = o;
          a &&
            ((u = {
              ...a,
              state: {
                ...a.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...u,
                  search: u.searchStr,
                  state: {
                    ...u.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (u.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (u.state.__tempKey = this.tempLocationKey)),
            (this.shouldViewTransition = n),
            this.history[o.replace ? 'replace' : 'push'](u.href, u.state, {
              ignoreBlocker: r,
            });
        }
        return (
          (this.resetNextScroll = o.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: n,
        resetScroll: r,
        viewTransition: o,
        ignoreBlocker: i,
        ...l
      } = {}) => {
        const s = l.href;
        if (s) {
          const u = Ko(s, {});
          (l.to = u.pathname),
            (l.search = this.options.parseSearch(u.search)),
            (l.hash = u.hash.slice(1));
        }
        const a = this.buildLocation({ ...l, _includeValidateSearch: !0 });
        return this.commitLocation({
          ...a,
          viewTransition: o,
          replace: n,
          resetScroll: r,
          ignoreBlocker: i,
        });
      }),
      (this.navigate = ({ to: n, ...r }) => {
        const o = String(n);
        let i;
        try {
          new URL(`${o}`), (i = !0);
        } catch {}
        return Ee(!i), this.buildAndCommitLocation({ ...r, to: n });
      }),
      (this.load = async () => {
        this.latestLocation = this.parseLocation(this.latestLocation);
        let n, r, o;
        for (
          o = new Promise((i) => {
            this.startReactTransition(async () => {
              var l;
              try {
                const s = this.latestLocation,
                  a = this.state.resolvedLocation,
                  u = a.href !== s.href;
                this.cancelMatches();
                let d;
                this.__store.batch(() => {
                  (d = this.matchRoutes(s)),
                    this.__store.setState((p) => ({
                      ...p,
                      status: 'pending',
                      isLoading: !0,
                      location: s,
                      pendingMatches: d,
                      cachedMatches: p.cachedMatches.filter(
                        (f) => !d.find((g) => g.id === f.id),
                      ),
                    }));
                }),
                  this.state.redirect ||
                    this.emit({
                      type: 'onBeforeNavigate',
                      fromLocation: a,
                      toLocation: s,
                      pathChanged: u,
                    }),
                  this.emit({
                    type: 'onBeforeLoad',
                    fromLocation: a,
                    toLocation: s,
                    pathChanged: u,
                  }),
                  await this.loadMatches({
                    matches: d,
                    location: s,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let p, f, g;
                        this.__store.batch(() => {
                          this.__store.setState((y) => {
                            const w = y.matches,
                              C = y.pendingMatches || y.matches;
                            return (
                              (p = w.filter((m) => !C.find((h) => h.id === m.id))),
                              (f = C.filter((m) => !w.find((h) => h.id === m.id))),
                              (g = w.filter((m) => C.find((h) => h.id === m.id))),
                              {
                                ...y,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: C,
                                pendingMatches: void 0,
                                cachedMatches: [
                                  ...y.cachedMatches,
                                  ...p.filter((m) => m.status !== 'error'),
                                ],
                              }
                            );
                          }),
                            this.clearExpiredCache();
                        }),
                          [
                            [p, 'onLeave'],
                            [f, 'onEnter'],
                            [g, 'onStay'],
                          ].forEach(([y, w]) => {
                            y.forEach((C) => {
                              var m, h;
                              (h = (m = this.looseRoutesById[C.routeId].options)[w]) ==
                                null || h.call(m, C);
                            });
                          });
                      });
                    },
                  });
              } catch (s) {
                Qi(s)
                  ? ((n = s),
                    this.isServer ||
                      this.navigate({ ...s, replace: !0, ignoreBlocker: !0 }))
                  : qe(s) && (r = s),
                  this.__store.setState((a) => ({
                    ...a,
                    statusCode: n
                      ? n.statusCode
                      : r
                        ? 404
                        : a.matches.some((u) => u.status === 'error')
                          ? 500
                          : 200,
                    redirect: n,
                  }));
              }
              this.latestLoadPromise === o &&
                ((l = this.commitLocationPromise) == null || l.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                i();
            });
          }),
            this.latestLoadPromise = o,
            await o;
          this.latestLoadPromise && o !== this.latestLoadPromise;

        )
          await this.latestLoadPromise;
      }),
      (this.startViewTransition = (n) => {
        const r = this.shouldViewTransition ?? this.options.defaultViewTransition;
        delete this.shouldViewTransition,
          r &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          typeof document.startViewTransition == 'function'
            ? document.startViewTransition(n)
            : n();
      }),
      (this.updateMatch = (n, r) => {
        var o;
        let i;
        const l =
            (o = this.state.pendingMatches) == null ? void 0 : o.find((u) => u.id === n),
          s = this.state.matches.find((u) => u.id === n),
          a = l ? 'pendingMatches' : s ? 'matches' : 'cachedMatches';
        return (
          this.__store.setState((u) => {
            var d;
            return {
              ...u,
              [a]:
                (d = u[a]) == null ? void 0 : d.map((p) => (p.id === n ? (i = r(p)) : p)),
            };
          }),
          i
        );
      }),
      (this.getMatch = (n) =>
        [
          ...this.state.cachedMatches,
          ...(this.state.pendingMatches ?? []),
          ...this.state.matches,
        ].find((r) => r.id === n)),
      (this.loadMatches = async ({
        location: n,
        matches: r,
        preload: o,
        onReady: i,
        updateMatch: l = this.updateMatch,
      }) => {
        let s,
          a = !1;
        const u = async () => {
          a || ((a = !0), await (i == null ? void 0 : i()));
        };
        !this.isServer && !this.state.matches.length && u();
        const d = (p, f) => {
          var g, y, w;
          if (Qi(f)) throw f;
          if (Gt(f) || qe(f)) {
            if (
              (l(p.id, (C) => ({
                ...C,
                status: Gt(f) ? 'redirected' : qe(f) ? 'notFound' : 'error',
                isFetching: !1,
                error: f,
                beforeLoadPromise: void 0,
                loaderPromise: void 0,
              })),
              f.routeId || (f.routeId = p.routeId),
              (g = p.beforeLoadPromise) == null || g.resolve(),
              (y = p.loaderPromise) == null || y.resolve(),
              (w = p.loadPromise) == null || w.resolve(),
              Gt(f))
            )
              throw ((a = !0), (f = this.resolveRedirect({ ...f, _fromLocation: n })), f);
            if (qe(f)) throw (this._handleNotFound(r, f, { updateMatch: l }), f);
          }
        };
        try {
          await new Promise((p, f) => {
            (async () => {
              var g, y, w;
              try {
                const C = (v, x, j) => {
                  var _, R;
                  const { id: P, routeId: k } = r[v],
                    L = this.looseRoutesById[k];
                  if (x instanceof Promise) throw x;
                  (x.routerCode = j), (s = s ?? v), d(this.getMatch(P), x);
                  try {
                    (R = (_ = L.options).onError) == null || R.call(_, x);
                  } catch (T) {
                    (x = T), d(this.getMatch(P), x);
                  }
                  l(P, (T) => {
                    var D, W;
                    return (
                      (D = T.beforeLoadPromise) == null || D.resolve(),
                      (W = T.loadPromise) == null || W.resolve(),
                      {
                        ...T,
                        error: x,
                        status: 'error',
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    );
                  });
                };
                for (const [v, { id: x, routeId: j }] of r.entries()) {
                  const _ = this.getMatch(x),
                    R = (g = r[v - 1]) == null ? void 0 : g.id,
                    P = this.looseRoutesById[j],
                    k = P.options.pendingMs ?? this.options.defaultPendingMs,
                    L = !!(
                      i &&
                      !this.isServer &&
                      !o &&
                      (P.options.loader || P.options.beforeLoad) &&
                      typeof k == 'number' &&
                      k !== 1 / 0 &&
                      (P.options.pendingComponent ?? this.options.defaultPendingComponent)
                    );
                  if (_.beforeLoadPromise || _.loaderPromise)
                    L &&
                      setTimeout(() => {
                        try {
                          u();
                        } catch {}
                      }, k),
                      await _.beforeLoadPromise;
                  else {
                    try {
                      l(x, (z) => ({
                        ...z,
                        loadPromise: dn(() => {
                          var X;
                          (X = z.loadPromise) == null || X.resolve();
                        }),
                        beforeLoadPromise: dn(),
                      }));
                      const T = new AbortController();
                      let D;
                      L &&
                        (D = setTimeout(() => {
                          try {
                            u();
                          } catch {}
                        }, k));
                      const { paramsError: W, searchError: fe } = this.getMatch(x);
                      W && C(v, W, 'PARSE_PARAMS'), fe && C(v, fe, 'VALIDATE_SEARCH');
                      const K = () =>
                        R ? this.getMatch(R).context : (this.options.context ?? {});
                      l(x, (z) => ({
                        ...z,
                        isFetching: 'beforeLoad',
                        fetchCount: z.fetchCount + 1,
                        abortController: T,
                        pendingTimeout: D,
                        context: {
                          ...K(),
                          ...z.__routeContext,
                          ...z.__beforeLoadContext,
                        },
                      }));
                      const {
                          search: I,
                          params: Y,
                          context: S,
                          cause: N,
                        } = this.getMatch(x),
                        M = {
                          search: I,
                          abortController: T,
                          params: Y,
                          preload: !!o,
                          context: S,
                          location: n,
                          navigate: (z) => this.navigate({ ...z, _fromLocation: n }),
                          buildLocation: this.buildLocation,
                          cause: o ? 'preload' : N,
                          matches: r,
                        };
                      let F =
                        (await ((w = (y = P.options).beforeLoad) == null
                          ? void 0
                          : w.call(y, M))) ?? {};
                      this.serializeLoaderData &&
                        (F = this.serializeLoaderData('__beforeLoadContext', F, {
                          router: this,
                          match: this.getMatch(x),
                        })),
                        (Gt(F) || qe(F)) && C(v, F, 'BEFORE_LOAD'),
                        l(x, (z) => ({
                          ...z,
                          __beforeLoadContext: F,
                          context: { ...K(), ...z.__routeContext, ...F },
                          abortController: T,
                        }));
                    } catch (T) {
                      C(v, T, 'BEFORE_LOAD');
                    }
                    l(x, (T) => {
                      var D;
                      return (
                        (D = T.beforeLoadPromise) == null || D.resolve(),
                        { ...T, beforeLoadPromise: void 0, isFetching: !1 }
                      );
                    });
                  }
                }
                const m = r.slice(0, s),
                  h = [];
                m.forEach(({ id: v, routeId: x }, j) => {
                  h.push(
                    (async () => {
                      const { loaderPromise: _ } = this.getMatch(v);
                      let R = !1;
                      if (_) await _;
                      else {
                        const P = h[j - 1],
                          k = this.looseRoutesById[x],
                          L = () => {
                            const {
                              params: M,
                              loaderDeps: F,
                              abortController: z,
                              context: X,
                              cause: oe,
                            } = this.getMatch(v);
                            return {
                              params: M,
                              deps: F,
                              preload: !!o,
                              parentMatchPromise: P,
                              abortController: z,
                              context: X,
                              location: n,
                              navigate: (le) =>
                                this.navigate({ ...le, _fromLocation: n }),
                              cause: o ? 'preload' : oe,
                              route: k,
                            };
                          },
                          T = Date.now() - this.getMatch(v).updatedAt,
                          D = o
                            ? (k.options.preloadStaleTime ??
                              this.options.defaultPreloadStaleTime ??
                              3e4)
                            : (k.options.staleTime ?? this.options.defaultStaleTime ?? 0),
                          W = k.options.shouldReload,
                          fe = typeof W == 'function' ? W(L()) : W;
                        l(v, (M) => ({
                          ...M,
                          loaderPromise: dn(),
                          preload: !!o && !this.state.matches.find((F) => F.id === v),
                        }));
                        const K = async () => {
                            var M, F, z, X, oe, le, Ae, at;
                            try {
                              const Wt = async () => {
                                const pe = this.getMatch(v);
                                pe.minPendingPromise && (await pe.minPendingPromise);
                              };
                              try {
                                k._lazyPromise === void 0 &&
                                  (k.lazyFn
                                    ? (k._lazyPromise = k.lazyFn().then((ze) => {
                                        const { id: Ct, ...Yn } = ze.options;
                                        Object.assign(k.options, Yn);
                                      }))
                                    : (k._lazyPromise = Promise.resolve())),
                                  k._componentsPromise === void 0 &&
                                    (k._componentsPromise = k._lazyPromise.then(() =>
                                      Promise.all(
                                        Ud.map(async (ze) => {
                                          const Ct = k.options[ze];
                                          Ct != null &&
                                            Ct.preload &&
                                            (await Ct.preload());
                                        }),
                                      ),
                                    )),
                                  l(v, (ze) => ({ ...ze, isFetching: 'loader' }));
                                let pe = await ((F = (M = k.options).loader) == null
                                  ? void 0
                                  : F.call(M, L()));
                                this.serializeLoaderData &&
                                  (pe = this.serializeLoaderData('loaderData', pe, {
                                    router: this,
                                    match: this.getMatch(v),
                                  })),
                                  d(this.getMatch(v), pe),
                                  await k._lazyPromise,
                                  await Wt();
                                const un =
                                    (X = (z = k.options).meta) == null
                                      ? void 0
                                      : X.call(z, {
                                          matches: r,
                                          match: this.getMatch(v),
                                          params: this.getMatch(v).params,
                                          loaderData: pe,
                                        }),
                                  kt =
                                    (le = (oe = k.options).headers) == null
                                      ? void 0
                                      : le.call(oe, { loaderData: pe });
                                l(v, (ze) => ({
                                  ...ze,
                                  error: void 0,
                                  status: 'success',
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: pe,
                                  meta: un,
                                  headers: kt,
                                }));
                              } catch (pe) {
                                let un = pe;
                                await Wt(), d(this.getMatch(v), pe);
                                try {
                                  (at = (Ae = k.options).onError) == null ||
                                    at.call(Ae, pe);
                                } catch (kt) {
                                  (un = kt), d(this.getMatch(v), kt);
                                }
                                l(v, (kt) => ({
                                  ...kt,
                                  error: un,
                                  status: 'error',
                                  isFetching: !1,
                                }));
                              }
                              await k._componentsPromise;
                            } catch (Wt) {
                              l(v, (pe) => ({ ...pe, loaderPromise: void 0 })),
                                d(this.getMatch(v), Wt);
                            }
                          },
                          { status: I, invalid: Y } = this.getMatch(v);
                        (R = I === 'success' && (Y || (fe ?? T > D))),
                          (o && k.options.preload === !1) ||
                            (R
                              ? (async () => {
                                  try {
                                    await K();
                                  } catch (M) {
                                    Qi(M) && (await this.navigate(M));
                                  }
                                })()
                              : I !== 'success' && (await K()));
                        const { loaderPromise: S, loadPromise: N } = this.getMatch(v);
                        S == null || S.resolve(), N == null || N.resolve();
                      }
                      return (
                        l(v, (P) => ({
                          ...P,
                          isFetching: R ? P.isFetching : !1,
                          loaderPromise: void 0,
                          invalid: !1,
                        })),
                        this.getMatch(v)
                      );
                    })(),
                  );
                }),
                  await Promise.all(h),
                  p();
              } catch (C) {
                f(C);
              }
            })();
          }),
            await u();
        } catch (p) {
          if (Gt(p) || qe(p)) throw (qe(p) && !o && (await u()), p);
        }
        return r;
      }),
      (this.invalidate = (n) => {
        const r = (o) => {
          var i;
          return (((i = n == null ? void 0 : n.filter) == null ? void 0 : i.call(n, o)) ??
            !0)
            ? {
                ...o,
                invalid: !0,
                ...(o.status === 'error' ? { status: 'pending', error: void 0 } : {}),
              }
            : o;
        };
        return (
          this.__store.setState((o) => {
            var i;
            return {
              ...o,
              matches: o.matches.map(r),
              cachedMatches: o.cachedMatches.map(r),
              pendingMatches: (i = o.pendingMatches) == null ? void 0 : i.map(r),
            };
          }),
          this.load()
        );
      }),
      (this.resolveRedirect = (n) => {
        const r = n;
        return r.href || (r.href = this.buildLocation(r).href), r;
      }),
      (this.clearCache = (n) => {
        const r = n == null ? void 0 : n.filter;
        r !== void 0
          ? this.__store.setState((o) => ({
              ...o,
              cachedMatches: o.cachedMatches.filter((i) => !r(i)),
            }))
          : this.__store.setState((o) => ({ ...o, cachedMatches: [] }));
      }),
      (this.clearExpiredCache = () => {
        const n = (r) => {
          const o = this.looseRoutesById[r.routeId];
          if (!o.options.loader) return !0;
          const i =
            (r.preload
              ? (o.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
              : (o.options.gcTime ?? this.options.defaultGcTime)) ?? 5 * 60 * 1e3;
          return !(r.status !== 'error' && Date.now() - r.updatedAt < i);
        };
        this.clearCache({ filter: n });
      }),
      (this.preloadRoute = async (n) => {
        const r = this.buildLocation(n);
        let o = this.matchRoutes(r, { throwOnError: !0, preload: !0, dest: n });
        const i = Object.fromEntries(
          [
            ...this.state.matches,
            ...(this.state.pendingMatches ?? []),
            ...this.state.cachedMatches,
          ].map((s) => [s.id, !0]),
        );
        this.__store.batch(() => {
          o.forEach((s) => {
            i[s.id] ||
              this.__store.setState((a) => ({
                ...a,
                cachedMatches: [...a.cachedMatches, s],
              }));
          });
        });
        const l = new Set(
          [...this.state.matches, ...(this.state.pendingMatches ?? [])].map((s) => s.id),
        );
        try {
          return (
            (o = await this.loadMatches({
              matches: o,
              location: r,
              preload: !0,
              updateMatch: (s, a) => {
                l.has(s)
                  ? (o = o.map((u) => (u.id === s ? a(u) : u)))
                  : this.updateMatch(s, a);
              },
            })),
            o
          );
        } catch (s) {
          if (Gt(s)) return await this.preloadRoute({ ...s, _fromLocation: r });
          console.error(s);
          return;
        }
      }),
      (this.matchRoute = (n, r) => {
        const o = {
            ...n,
            to: n.to ? this.resolvePathWithBase(n.from || '', n.to) : void 0,
            params: n.params || {},
            leaveParams: !0,
          },
          i = this.buildLocation(o);
        if (r != null && r.pending && this.state.status !== 'pending') return !1;
        const s = (
            (r == null ? void 0 : r.pending) === void 0
              ? !this.state.isLoading
              : r.pending
          )
            ? this.latestLocation
            : this.state.resolvedLocation,
          a = io(this.basepath, s.pathname, { ...r, to: i.pathname });
        return !a || (n.params && !Nn(a, n.params, { partial: !0 }))
          ? !1
          : a && ((r == null ? void 0 : r.includeSearch) ?? !0)
            ? Nn(s.search, i.search, { partial: !0 })
              ? a
              : !1
            : a;
      }),
      (this.dehydrate = () => {
        var n;
        const r =
          ((n = this.options.errorSerializer) == null ? void 0 : n.serialize) ?? S0;
        return {
          state: {
            dehydratedMatches: this.state.matches.map((o) => ({
              ...xo(o, ['id', 'status', 'updatedAt']),
              error: o.error ? { data: r(o.error), __isServerError: !0 } : void 0,
            })),
          },
          manifest: this.manifest,
        };
      }),
      (this.hydrate = () => {
        var n, r, o;
        let i;
        typeof document < 'u' &&
          (i = this.options.transformer.parse(
            (n = window.__TSR__) == null ? void 0 : n.dehydrated,
          )),
          Ee(i),
          (this.dehydratedData = i.payload),
          (o = (r = this.options).hydrate) == null || o.call(r, i.payload);
        const l = i.router.state,
          s = this.matchRoutes(this.state.location).map((a) => {
            const u = l.dehydratedMatches.find((d) => d.id === a.id);
            return (
              Ee(
                u,
                `Could not find a client-side match for dehydrated match with id: ${a.id}!`,
              ),
              { ...a, ...u }
            );
          });
        this.__store.setState((a) => ({ ...a, matches: s })),
          (this.manifest = i.router.manifest);
      }),
      (this.injectedHtml = []),
      (this.injectHtml = (n) => {
        const r = () => (
          (this.injectedHtml = this.injectedHtml.filter((o) => o !== r)), n
        );
        this.injectedHtml.push(r);
      }),
      (this.streamedKeys = new Set()),
      (this.getStreamedValue = (n) => {
        var r;
        if (this.isServer) return;
        const o = (r = window.__TSR__) == null ? void 0 : r.streamedValues[n];
        if (o)
          return (
            o.parsed || (o.parsed = this.options.transformer.parse(o.value)), o.parsed
          );
      }),
      (this.streamValue = (n, r) => {
        var o;
        this.streamedKeys.has(n), this.streamedKeys.add(n);
        const i = `__TSR__.streamedValues['${n}'] = { value: ${(o = this.serializer) == null ? void 0 : o.call(this, this.options.transformer.stringify(r))}}`;
        this.injectHtml(
          `<script class='tsr-once'>${i}; __TSR__.cleanScripts()<\/script>`,
        );
      }),
      (this._handleNotFound = (n, r, { updateMatch: o = this.updateMatch } = {}) => {
        const i = Object.fromEntries(n.map((a) => [a.routeId, a]));
        let l =
          (r.global ? this.looseRoutesById[we] : this.looseRoutesById[r.routeId]) ||
          this.looseRoutesById[we];
        for (
          ;
          !l.options.notFoundComponent &&
          !this.options.defaultNotFoundComponent &&
          l.id !== we;

        )
          (l = l.parentRoute), Ee(l);
        const s = i[l.id];
        Ee(s, 'Could not find match for route: ' + l.id),
          o(s.id, (a) => ({ ...a, status: 'notFound', error: r, isFetching: !1 })),
          r.routerCode === 'BEFORE_LOAD' &&
            l.parentRoute &&
            ((r.routeId = l.parentRoute.id),
            this._handleNotFound(n, r, { updateMatch: o }));
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some(
          (n) => n.status === 'notFound' || n.globalNotFound,
        )),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...t,
        caseSensitive: t.caseSensitive ?? !1,
        notFoundMode: t.notFoundMode ?? 'fuzzy',
        stringifySearch: t.stringifySearch ?? n0,
        parseSearch: t.parseSearch ?? t0,
        transformer: t.transformer ?? m0,
      }),
      typeof document < 'u' && (window.__TSR__ROUTER__ = this);
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutes(t, n, r) {
    return typeof t == 'string'
      ? this.matchRoutesInternal({ pathname: t, search: n }, r)
      : this.matchRoutesInternal(t, n);
  }
  matchRoutesInternal(t, n) {
    const {
      foundRoute: r,
      matchedRoutes: o,
      routeParams: i,
    } = this.getMatchedRoutes(t, n == null ? void 0 : n.dest);
    let l = !1;
    (r ? r.path !== '/' && i['**'] : qt(t.pathname)) &&
      (this.options.notFoundRoute ? o.push(this.options.notFoundRoute) : (l = !0));
    const s = (() => {
        if (l) {
          if (this.options.notFoundMode !== 'root')
            for (let d = o.length - 1; d >= 0; d--) {
              const p = o[d];
              if (p.children) return p.id;
            }
          return we;
        }
      })(),
      a = o.map((d) => {
        var p;
        let f;
        const g =
          ((p = d.options.params) == null ? void 0 : p.parse) ?? d.options.parseParams;
        if (g)
          try {
            const y = g(i);
            Object.assign(i, y);
          } catch (y) {
            if (((f = new x0(y.message, { cause: y })), n != null && n.throwOnError))
              throw f;
            return f;
          }
      }),
      u = [];
    return (
      o.forEach((d, p) => {
        var f, g, y, w, C, m, h, v, x, j, _, R;
        const P = u[p - 1],
          [k, L] = (() => {
            const F = (P == null ? void 0 : P.search) ?? t.search;
            try {
              const z = Gi(d.options.validateSearch, F) ?? {};
              return [{ ...F, ...z }, void 0];
            } catch (z) {
              const X = new Vl(z.message, { cause: z });
              if (n != null && n.throwOnError) throw X;
              return [F, X];
            }
          })(),
          T =
            ((g = (f = d.options).loaderDeps) == null
              ? void 0
              : g.call(f, { search: k })) ?? '',
          D = T ? JSON.stringify(T) : '',
          W = oo({
            path: d.fullPath,
            params: i,
            decodeCharMap: this.pathParamsDecodeCharMap,
          }),
          fe =
            oo({
              path: d.id,
              params: i,
              leaveWildcards: !0,
              decodeCharMap: this.pathParamsDecodeCharMap,
            }) + D,
          K = this.getMatch(fe),
          I = this.state.matches.find((F) => F.routeId === d.id),
          Y = I ? 'stay' : 'enter';
        let S;
        if (K)
          S = {
            ...K,
            cause: Y,
            params: I ? He(I.params, i) : i,
            search: He(I ? I.search : K.search, k),
          };
        else {
          const F =
            d.options.loader || d.options.beforeLoad || d.lazyFn || v0(d)
              ? 'pending'
              : 'success';
          S = {
            id: fe,
            index: p,
            routeId: d.id,
            params: I ? He(I.params, i) : i,
            pathname: mt([this.basepath, W]),
            updatedAt: Date.now(),
            search: I ? He(I.search, k) : k,
            searchError: void 0,
            status: F,
            isFetching: !1,
            error: void 0,
            paramsError: a[p],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: Y,
            loaderDeps: I ? He(I.loaderDeps, T) : T,
            invalid: !1,
            preload: !1,
            links: (w = (y = d.options).links) == null ? void 0 : w.call(y),
            scripts: (m = (C = d.options).scripts) == null ? void 0 : m.call(C),
            staticData: d.options.staticData || {},
            loadPromise: dn(),
            fullPath: d.fullPath,
          };
        }
        S.status === 'success' &&
          ((S.meta =
            (v = (h = d.options).meta) == null
              ? void 0
              : v.call(h, {
                  matches: u,
                  match: S,
                  params: S.params,
                  loaderData: S.loaderData,
                })),
          (S.headers =
            (j = (x = d.options).headers) == null
              ? void 0
              : j.call(x, { loaderData: S.loaderData }))),
          (n != null && n.preload) || (S.globalNotFound = s === d.id),
          (S.searchError = L);
        const M = (P == null ? void 0 : P.id)
          ? (P.context ?? this.options.context ?? {})
          : (this.options.context ?? {});
        if (
          ((S.context = { ...M, ...S.__routeContext, ...S.__beforeLoadContext }),
          !K && (n == null ? void 0 : n._buildLocation) !== !0)
        ) {
          const F = {
            deps: T,
            params: S.params,
            context: S.context,
            location: t,
            navigate: (z) => this.navigate({ ...z, _fromLocation: t }),
            buildLocation: this.buildLocation,
            cause: S.cause,
            abortController: S.abortController,
            preload: !!S.preload,
            matches: u,
          };
          (S.__routeContext =
            ((R = (_ = d.options).context) == null ? void 0 : R.call(_, F)) ?? {}),
            (S.context = { ...M, ...S.__routeContext, ...S.__beforeLoadContext });
        }
        u.push(S);
      }),
      u
    );
  }
}
class Vl extends Error {}
class x0 extends Error {}
function w0(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: 'idle',
    resolvedLocation: { ...e },
    location: e,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function S0(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e };
}
function cu(e) {
  return !(typeof e == 'object' && e && 'data' in e) ||
    !('__isServerError' in e && e.__isServerError) ||
    !(typeof e.data == 'object' && e.data)
    ? !1
    : e.__isServerError === !0;
}
function du(e) {
  if ('name' in e && 'message' in e) {
    const t = new Error(e.message);
    return (t.name = e.name), t;
  }
  return e.data;
}
const hi = O.createContext(void 0),
  k0 = O.createContext(void 0);
function Vn(e) {
  const t = O.useContext(e.from ? k0 : hi);
  return ke({
    select: (r) => {
      const o = r.matches.find((i) => (e.from ? e.from === i.routeId : i.id === t));
      if (
        (Ee(
          !((e.shouldThrow ?? !0) && !o),
          `Could not find ${e.from ? `an active match from "${e.from}"` : 'a nearest match!'}`,
        ),
        o !== void 0)
      )
        return e.select ? e.select(o) : o;
    },
    structuralSharing: e.structuralSharing,
  });
}
function C0(e) {
  return Vn({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function _0(e) {
  const { select: t, ...n } = e;
  return Vn({ ...n, select: (r) => (t ? t(r.loaderDeps) : r.loaderDeps) });
}
function E0(e) {
  return Vn({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.params) : t.params),
  });
}
function j0(e) {
  return Vn({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function P0(e) {
  const { navigate: t } = St();
  return O.useCallback((n) => t({ ...n }), [t]);
}
let Bd = class {
  constructor(t) {
    (this.init = (n) => {
      var r, o;
      this.originalIndex = n.originalIndex;
      const i = this.options,
        l = !(i != null && i.path) && !(i != null && i.id);
      (this.parentRoute =
        (o = (r = this.options).getParentRoute) == null ? void 0 : o.call(r)),
        l ? (this._path = we) : Ee(this.parentRoute);
      let s = l ? we : i.path;
      s && s !== '/' && (s = Bs(s));
      const a = (i == null ? void 0 : i.id) || s;
      let u = l ? we : mt([this.parentRoute.id === we ? '' : this.parentRoute.id, a]);
      s === we && (s = '/'), u !== we && (u = mt(['/', u]));
      const d = u === we ? '/' : mt([this.parentRoute.fullPath, s]);
      (this._path = s),
        (this._id = u),
        (this._fullPath = d),
        (this._to = d),
        (this._ssr = (i == null ? void 0 : i.ssr) ?? n.defaultSsr ?? !0);
    }),
      (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
      (this.update = (n) => (Object.assign(this.options, n), this)),
      (this.lazy = (n) => ((this.lazyFn = n), this)),
      (this.useMatch = (n) =>
        Vn({
          select: n == null ? void 0 : n.select,
          from: this.id,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
        })),
      (this.useRouteContext = (n) =>
        Vn({
          ...n,
          from: this.id,
          select: (r) => (n != null && n.select ? n.select(r.context) : r.context),
        })),
      (this.useSearch = (n) =>
        j0({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (n) =>
        E0({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (n) => _0({ ...n, from: this.id })),
      (this.useLoaderData = (n) => C0({ ...n, from: this.id })),
      (this.useNavigate = () => P0({ from: this.id })),
      (this.options = t || {}),
      (this.isRoot = !(t != null && t.getParentRoute)),
      Ee(!(t != null && t.id && t != null && t.path)),
      (this.$$typeof = Symbol.for('react.memo'));
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  get ssr() {
    return this._ssr;
  }
  addChildren(t) {
    return this._addFileChildren(t);
  }
  _addFileChildren(t) {
    return (
      Array.isArray(t) && (this.children = t),
      typeof t == 'object' && t !== null && (this.children = Object.values(t)),
      this
    );
  }
};
function R0(e) {
  return new Bd(e);
}
class L0 extends Bd {
  constructor(t) {
    super(t);
  }
  addChildren(t) {
    return super.addChildren(t), this;
  }
  _addFileChildren(t) {
    return super._addFileChildren(t), this;
  }
  _addFileTypes() {
    return this;
  }
}
function $0(e) {
  return new L0(e);
}
function Ad(e) {
  return new M0(e, { silent: !0 }).createRoute;
}
class M0 {
  constructor(t, n) {
    (this.path = t),
      (this.createRoute = (r) => {
        this.silent;
        const o = R0(r);
        return (o.isRoot = !1), o;
      }),
      (this.silent = n == null ? void 0 : n.silent);
  }
}
function wo(e) {
  return c.jsx(c.Fragment, { children: e.children });
}
function Hd(e, t, n) {
  return t.options.notFoundComponent
    ? c.jsx(t.options.notFoundComponent, { data: n })
    : e.options.defaultNotFoundComponent
      ? c.jsx(e.options.defaultNotFoundComponent, { data: n })
      : c.jsx(h0, {});
}
const Vd = O.memo(function ({ matchId: t }) {
    var n, r;
    const o = St(),
      i = ke({
        select: (C) => {
          var m;
          return (m = C.matches.find((h) => h.id === t)) == null ? void 0 : m.routeId;
        },
      });
    Ee(i);
    const l = o.routesById[i],
      s = l.options.pendingComponent ?? o.options.defaultPendingComponent,
      a = s ? c.jsx(s, {}) : null,
      u = l.options.errorComponent ?? o.options.defaultErrorComponent,
      d = l.options.onCatch ?? o.options.defaultOnCatch,
      p = l.isRoot
        ? (l.options.notFoundComponent ??
          ((n = o.options.notFoundRoute) == null ? void 0 : n.options.component))
        : l.options.notFoundComponent,
      f =
        (!l.isRoot || l.options.wrapInSuspense) &&
        (l.options.wrapInSuspense ??
          s ??
          ((r = l.options.errorComponent) == null ? void 0 : r.preload))
          ? O.Suspense
          : wo,
      g = u ? As : wo,
      y = p ? p0 : wo,
      w = ke({ select: (C) => C.loadedAt });
    return c.jsx(hi.Provider, {
      value: t,
      children: c.jsx(f, {
        fallback: a,
        children: c.jsx(g, {
          getResetKey: () => w,
          errorComponent: u || pi,
          onCatch: (C, m) => {
            if (qe(C)) throw C;
            d == null || d(C, m);
          },
          children: c.jsx(y, {
            fallback: (C) => {
              if (!p || (C.routeId && C.routeId !== i) || (!C.routeId && !l.isRoot))
                throw C;
              return O.createElement(p, C);
            },
            children: c.jsx(N0, { matchId: t }),
          }),
        }),
      }),
    });
  }),
  N0 = O.memo(function ({ matchId: t }) {
    var n, r, o, i, l;
    const s = St(),
      {
        match: a,
        matchIndex: u,
        routeId: d,
      } = ke({
        select: (y) => {
          const w = y.matches.findIndex((h) => h.id === t),
            C = y.matches[w];
          return {
            routeId: C.routeId,
            matchIndex: w,
            match: xo(C, ['id', 'status', 'error']),
          };
        },
        structuralSharing: !0,
      }),
      p = s.routesById[d],
      f = O.useMemo(() => {
        const y = p.options.component ?? s.options.defaultComponent;
        return y ? c.jsx(y, {}) : c.jsx(Wd, {});
      }, [p.options.component, s.options.defaultComponent]),
      g = (p.options.errorComponent ?? s.options.defaultErrorComponent) || pi;
    if (a.status === 'notFound') {
      let y;
      return (
        cu(a.error)
          ? (y = (
              ((n = s.options.errorSerializer) == null ? void 0 : n.deserialize) ?? du
            )(a.error.data))
          : (y = a.error),
        Ee(qe(y)),
        Hd(s, p, y)
      );
    }
    if (a.status === 'redirected')
      throw (Ee(Gt(a.error)), (r = s.getMatch(a.id)) == null ? void 0 : r.loadPromise);
    if (a.status === 'error') {
      if (s.isServer) return c.jsx(g, { error: a.error, info: { componentStack: '' } });
      throw cu(a.error)
        ? (((o = s.options.errorSerializer) == null ? void 0 : o.deserialize) ?? du)(
            a.error.data,
          )
        : a.error;
    }
    if (a.status === 'pending') {
      const y = p.options.pendingMinMs ?? s.options.defaultPendingMinMs;
      if (y && !((i = s.getMatch(a.id)) != null && i.minPendingPromise) && !s.isServer) {
        const w = dn();
        Promise.resolve().then(() => {
          s.updateMatch(a.id, (C) => ({ ...C, minPendingPromise: w }));
        }),
          setTimeout(() => {
            w.resolve(),
              s.updateMatch(a.id, (C) => ({ ...C, minPendingPromise: void 0 }));
          }, y);
      }
      throw (l = s.getMatch(a.id)) == null ? void 0 : l.loadPromise;
    }
    return c.jsxs(c.Fragment, {
      children: [
        f,
        s.AfterEachMatch ? c.jsx(s.AfterEachMatch, { match: a, matchIndex: u }) : null,
      ],
    });
  }),
  Wd = O.memo(function () {
    const t = St(),
      n = O.useContext(hi),
      r = ke({
        select: (u) => {
          var d;
          return (d = u.matches.find((p) => p.id === n)) == null ? void 0 : d.routeId;
        },
      }),
      o = t.routesById[r],
      i = ke({
        select: (u) => {
          const p = u.matches.find((f) => f.id === n);
          return Ee(p), p.globalNotFound;
        },
      }),
      l = ke({
        select: (u) => {
          var d;
          const p = u.matches,
            f = p.findIndex((g) => g.id === n);
          return (d = p[f + 1]) == null ? void 0 : d.id;
        },
      });
    if (i) return Hd(t, o, void 0);
    if (!l) return null;
    const s = c.jsx(Vd, { matchId: l }),
      a = t.options.defaultPendingComponent
        ? c.jsx(t.options.defaultPendingComponent, {})
        : null;
    return n === we ? c.jsx(O.Suspense, { fallback: a, children: s }) : s;
  }),
  F0 = 'Error preloading route! ☝️';
function z0(e, t) {
  const n = St(),
    [r, o] = O.useState(!1),
    i = O.useRef(!1),
    l = s0(t),
    {
      activeProps: s = () => ({ className: 'active' }),
      inactiveProps: a = () => ({}),
      activeOptions: u,
      to: d,
      preload: p,
      preloadDelay: f,
      replace: g,
      startTransition: y,
      resetScroll: w,
      viewTransition: C,
      children: m,
      target: h,
      disabled: v,
      style: x,
      className: j,
      onClick: _,
      onFocus: R,
      onMouseEnter: P,
      onMouseLeave: k,
      onTouchStart: L,
      ignoreBlocker: T,
      ...D
    } = e,
    { params: W, search: fe, hash: K, state: I, mask: Y, ...S } = D,
    N = O.useMemo(() => {
      try {
        return new URL(`${d}`), 'external';
      } catch {}
      return 'internal';
    }, [d]),
    M = ke({ select: (q) => q.location.search, structuralSharing: !0 }),
    F = O.useMemo(() => n.buildLocation(e), [n, e, M]),
    z = O.useMemo(() => p ?? n.options.defaultPreload, [n.options.defaultPreload, p]),
    X = f ?? n.options.defaultPreloadDelay ?? 0,
    oe = ke({
      select: (q) => {
        if (u != null && u.exact) {
          if (!a0(q.location.pathname, F.pathname, n.basepath)) return !1;
        } else {
          const ue = Qo(q.location.pathname, n.basepath).split('/');
          if (
            !Qo(F.pathname, n.basepath)
              .split('/')
              .every((Zd, qd) => Zd === ue[qd])
          )
            return !1;
        }
        return ((u == null ? void 0 : u.includeSearch) ?? !0) &&
          !Nn(q.location.search, F.search, {
            partial: !(u != null && u.exact),
            ignoreUndefined: !(u != null && u.explicitUndefined),
          })
          ? !1
          : u != null && u.includeHash
            ? q.location.hash === F.hash
            : !0;
      },
    }),
    le = O.useCallback(() => {
      n.preloadRoute(e).catch((q) => {
        console.warn(q), console.warn(F0);
      });
    }, [e, n]),
    Ae = O.useCallback(
      (q) => {
        q != null && q.isIntersecting && le();
      },
      [le],
    );
  if (
    (l0(l, Ae, { rootMargin: '100px' }, { disabled: !!v || z !== 'viewport' }),
    sr(() => {
      i.current || (!v && z === 'render' && (le(), (i.current = !0)));
    }, [v, le, z]),
    N === 'external')
  )
    return {
      ...S,
      ref: l,
      type: N,
      href: d,
      ...(m && { children: m }),
      ...(h && { target: h }),
      ...(v && { disabled: v }),
      ...(x && { style: x }),
      ...(j && { className: j }),
      ...(_ && { onClick: _ }),
      ...(R && { onFocus: R }),
      ...(P && { onMouseEnter: P }),
      ...(k && { onMouseLeave: k }),
      ...(L && { onTouchStart: L }),
    };
  const at = (q) => {
      if (
        !v &&
        !T0(q) &&
        !q.defaultPrevented &&
        (!h || h === '_self') &&
        q.button === 0
      ) {
        q.preventDefault(),
          $d.flushSync(() => {
            o(!0);
          });
        const ue = n.subscribe('onResolved', () => {
          ue(), o(!1);
        });
        n.buildAndCommitLocation({
          ...e,
          replace: g,
          resetScroll: w,
          startTransition: y,
          viewTransition: C,
          ignoreBlocker: T,
        });
      }
    },
    Wt = (q) => {
      v || (z && le());
    },
    pe = Wt,
    un = (q) => {
      if (v) return;
      const ue = q.target || {};
      if (z) {
        if (ue.preloadTimeout) return;
        ue.preloadTimeout = setTimeout(() => {
          (ue.preloadTimeout = null), le();
        }, X);
      }
    },
    kt = (q) => {
      if (v) return;
      const ue = q.target || {};
      ue.preloadTimeout && (clearTimeout(ue.preloadTimeout), (ue.preloadTimeout = null));
    },
    ze = (q) => (ue) => {
      var vi;
      (vi = ue.persist) == null || vi.call(ue),
        q.filter(Boolean).forEach((Qs) => {
          ue.defaultPrevented || Qs(ue);
        });
    },
    Ct = oe ? (_n(s, {}) ?? {}) : {},
    Yn = oe ? {} : _n(a, {}),
    Ws = [j, Ct.className, Yn.className].filter(Boolean).join(' '),
    Ks = { ...x, ...Ct.style, ...Yn.style };
  return {
    ...S,
    ...Ct,
    ...Yn,
    href: v
      ? void 0
      : F.maskedLocation
        ? n.history.createHref(F.maskedLocation.href)
        : n.history.createHref(F.href),
    ref: l,
    onClick: ze([_, at]),
    onFocus: ze([R, Wt]),
    onMouseEnter: ze([P, un]),
    onMouseLeave: ze([k, kt]),
    onTouchStart: ze([L, pe]),
    disabled: !!v,
    target: h,
    ...(Object.keys(Ks).length && { style: Ks }),
    ...(Ws && { className: Ws }),
    ...(v && { role: 'link', 'aria-disabled': !0 }),
    ...(oe && { 'data-status': 'active', 'aria-current': 'page' }),
    ...(r && { 'data-transitioning': 'transitioning' }),
  };
}
const fu = O.forwardRef((e, t) => {
  const { _asChild: n, ...r } = e,
    { type: o, ref: i, ...l } = z0(r, t),
    s =
      typeof r.children == 'function'
        ? r.children({ isActive: l['data-status'] === 'active' })
        : r.children;
  return (
    typeof n > 'u' && delete l.disabled, O.createElement(n || 'a', { ...l, ref: i }, s)
  );
});
function T0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function I0() {
  const e = St(),
    t = O.useRef({ router: e, mounted: !1 }),
    n = ke({ select: ({ isLoading: p }) => p }),
    [r, o] = O.useTransition(),
    i = ke({
      select: (p) => p.matches.some((f) => f.status === 'pending'),
      structuralSharing: !0,
    }),
    l = Ki(n),
    s = n || r || i,
    a = Ki(s),
    u = n || i,
    d = Ki(u);
  return (
    e.isServer || (e.startReactTransition = o),
    O.useEffect(() => {
      const p = e.history.subscribe(e.load),
        f = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        qt(e.latestLocation.href) !== qt(f.href) &&
          e.commitLocation({ ...f, replace: !0 }),
        () => {
          p();
        }
      );
    }, [e, e.history]),
    sr(() => {
      var p;
      if (
        (typeof window < 'u' && (p = window.__TSR__) != null && p.dehydrated) ||
        (t.current.router === e && t.current.mounted)
      )
        return;
      (t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (g) {
            console.error(g);
          }
        })();
    }, [e]),
    sr(() => {
      if (l && !n) {
        const p = e.state.location,
          f = e.state.resolvedLocation,
          g = f.pathname !== p.pathname;
        e.emit({ type: 'onLoad', fromLocation: f, toLocation: p, pathChanged: g });
      }
    }, [l, e, n]),
    sr(() => {
      if (d && !u) {
        const p = e.state.location,
          f = e.state.resolvedLocation,
          g = f.pathname !== p.pathname;
        e.emit({
          type: 'onBeforeRouteMount',
          fromLocation: f,
          toLocation: p,
          pathChanged: g,
        });
      }
    }, [u, d, e]),
    sr(() => {
      if (a && !s) {
        const p = e.state.location,
          f = e.state.resolvedLocation,
          g = f.pathname !== p.pathname;
        if (
          (e.emit({ type: 'onResolved', fromLocation: f, toLocation: p, pathChanged: g }),
          e.__store.setState((y) => ({
            ...y,
            status: 'idle',
            resolvedLocation: y.location,
          })),
          typeof document < 'u' && document.querySelector && e.state.location.hash !== '')
        ) {
          const y = document.getElementById(e.state.location.hash);
          y && y.scrollIntoView();
        }
      }
    }, [s, a, e]),
    null
  );
}
function O0() {
  const e = St(),
    t = e.options.defaultPendingComponent
      ? c.jsx(e.options.defaultPendingComponent, {})
      : null,
    n = e.isServer || (typeof document < 'u' && window.__TSR__) ? wo : O.Suspense,
    r = c.jsxs(n, { fallback: t, children: [c.jsx(I0, {}), c.jsx(D0, {})] });
  return e.options.InnerWrap ? c.jsx(e.options.InnerWrap, { children: r }) : r;
}
function D0() {
  const e = ke({
      select: (n) => {
        var r;
        return (r = n.matches[0]) == null ? void 0 : r.id;
      },
    }),
    t = ke({ select: (n) => n.loadedAt });
  return c.jsx(hi.Provider, {
    value: e,
    children: c.jsx(As, {
      getResetKey: () => t,
      errorComponent: pi,
      onCatch: (n) => {
        n.message || n.toString();
      },
      children: e ? c.jsx(Vd, { matchId: e }) : null,
    }),
  });
}
function U0({ router: e, children: t, ...n }) {
  e.update({ ...e.options, ...n, context: { ...e.options.context, ...n.context } });
  const r = zd(),
    o = c.jsx(r.Provider, { value: e, children: t });
  return e.options.Wrap ? c.jsx(e.options.Wrap, { children: o }) : o;
}
function B0({ router: e, ...t }) {
  return c.jsx(U0, { router: e, ...t, children: c.jsx(O0, {}) });
}
let A0 = { data: '' },
  H0 = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' },
          )
        ).firstChild
      : e || A0,
  V0 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  W0 = /\/\*[^]*?\*\/|  +/g,
  pu = /\n+/g,
  Yt = (e, t) => {
    let n = '',
      r = '',
      o = '';
    for (let i in e) {
      let l = e[i];
      i[0] == '@'
        ? i[1] == 'i'
          ? (n = i + ' ' + l + ';')
          : (r += i[1] == 'f' ? Yt(l, i) : i + '{' + Yt(l, i[1] == 'k' ? '' : t) + '}')
        : typeof l == 'object'
          ? (r += Yt(
              l,
              t
                ? t.replace(/([^,])+/g, (s) =>
                    i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (a) =>
                      /&/.test(a) ? a.replace(/&/g, s) : s ? s + ' ' + a : a,
                    ),
                  )
                : i,
            ))
          : l != null &&
            ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, '-$&').toLowerCase()),
            (o += Yt.p ? Yt.p(i, l) : i + ':' + l + ';'));
    }
    return n + (t && o ? t + '{' + o + '}' : o) + r;
  },
  ut = {},
  Kd = (e) => {
    if (typeof e == 'object') {
      let t = '';
      for (let n in e) t += n + Kd(e[n]);
      return t;
    }
    return e;
  },
  K0 = (e, t, n, r, o) => {
    let i = Kd(e),
      l =
        ut[i] ||
        (ut[i] = ((a) => {
          let u = 0,
            d = 11;
          for (; u < a.length; ) d = (101 * d + a.charCodeAt(u++)) >>> 0;
          return 'go' + d;
        })(i));
    if (!ut[l]) {
      let a =
        i !== e
          ? e
          : ((u) => {
              let d,
                p,
                f = [{}];
              for (; (d = V0.exec(u.replace(W0, ''))); )
                d[4]
                  ? f.shift()
                  : d[3]
                    ? ((p = d[3].replace(pu, ' ').trim()),
                      f.unshift((f[0][p] = f[0][p] || {})))
                    : (f[0][d[1]] = d[2].replace(pu, ' ').trim());
              return f[0];
            })(e);
      ut[l] = Yt(o ? { ['@keyframes ' + l]: a } : a, n ? '' : '.' + l);
    }
    let s = n && ut.g ? ut.g : null;
    return (
      n && (ut.g = ut[l]),
      ((a, u, d, p) => {
        p
          ? (u.data = u.data.replace(p, a))
          : u.data.indexOf(a) === -1 && (u.data = d ? a + u.data : u.data + a);
      })(ut[l], t, r, s),
      l
    );
  },
  Q0 = (e, t, n) =>
    e.reduce((r, o, i) => {
      let l = t[i];
      if (l && l.call) {
        let s = l(n),
          a = (s && s.props && s.props.className) || (/^go/.test(s) && s);
        l = a
          ? '.' + a
          : s && typeof s == 'object'
            ? s.props
              ? ''
              : Yt(s, '')
            : s === !1
              ? ''
              : s;
      }
      return r + o + (l ?? '');
    }, '');
function Wn(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return K0(
    n.unshift
      ? n.raw
        ? Q0(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {})
      : n,
    H0(t.target),
    t.g,
    t.o,
    t.k,
  );
}
Wn.bind({ g: 1 });
Wn.bind({ k: 1 });
function Qd(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (n = Qd(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function me() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Qd(e)) && (r && (r += ' '), (r += t));
  return r;
}
const G0 = (e) => {
  try {
    const t = localStorage.getItem(e);
    return typeof t == 'string' ? JSON.parse(t) : void 0;
  } catch {
    return;
  }
};
function Yo(e, t) {
  const [n, r] = Z.useState();
  Z.useEffect(() => {
    const i = G0(e);
    r(typeof i > 'u' || i === null ? (typeof t == 'function' ? t() : t) : i);
  }, [t, e]);
  const o = Z.useCallback(
    (i) => {
      r((l) => {
        let s = i;
        typeof i == 'function' && (s = i(l));
        try {
          localStorage.setItem(e, JSON.stringify(s));
        } catch {}
        return s;
      });
    },
    [e],
  );
  return [n, o];
}
const Y0 = typeof window > 'u';
function Wl(e) {
  const t = {
    pending: 'yellow',
    success: 'green',
    error: 'red',
    notFound: 'purple',
    redirected: 'gray',
  };
  return e.isFetching && e.status === 'success'
    ? e.isFetching === 'beforeLoad'
      ? 'purple'
      : 'blue'
    : t[e.status];
}
function X0(e, t) {
  const n = e.find((r) => r.routeId === t.id);
  return n ? Wl(n) : 'gray';
}
function Gd() {
  const [e, t] = Z.useState(!1);
  return (
    Z[Y0 ? 'useEffect' : 'useLayoutEffect'](() => {
      t(!0);
    }, []),
    e
  );
}
const J0 = (e) => {
  const t = Object.getOwnPropertyNames(Object(e)),
    n = typeof e == 'bigint' ? `${e.toString()}n` : e;
  try {
    return JSON.stringify(n, t);
  } catch {
    return 'unable to stringify';
  }
};
function hu(e) {
  const t = Gd(),
    [n, r] = Z.useState(e),
    o = Z.useCallback(
      (i) => {
        Z0(() => {
          t && r(i);
        });
      },
      [t],
    );
  return [n, o];
}
function Z0(e) {
  Promise.resolve()
    .then(e)
    .catch((t) =>
      setTimeout(() => {
        throw t;
      }),
    );
}
function q0(e, t = [(n) => n]) {
  return e
    .map((n, r) => [n, r])
    .sort(([n, r], [o, i]) => {
      for (const l of t) {
        const s = l(n),
          a = l(o);
        if (typeof s > 'u') {
          if (typeof a > 'u') continue;
          return 1;
        }
        if (s !== a) return s > a ? 1 : -1;
      }
      return r - i;
    })
    .map(([n]) => n);
}
const H = {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      neutral: {
        50: '#f9fafb',
        100: '#f2f4f7',
        200: '#eaecf0',
        300: '#d0d5dd',
        400: '#98a2b3',
        500: '#667085',
        600: '#475467',
        700: '#344054',
        800: '#1d2939',
        900: '#101828',
      },
      darkGray: {
        50: '#525c7a',
        100: '#49536e',
        200: '#414962',
        300: '#394056',
        400: '#313749',
        500: '#292e3d',
        600: '#212530',
        700: '#191c24',
        800: '#111318',
        900: '#0b0d10',
      },
      gray: {
        50: '#f9fafb',
        100: '#f2f4f7',
        200: '#eaecf0',
        300: '#d0d5dd',
        400: '#98a2b3',
        500: '#667085',
        600: '#475467',
        700: '#344054',
        800: '#1d2939',
        900: '#101828',
      },
      blue: {
        25: '#F5FAFF',
        50: '#EFF8FF',
        100: '#D1E9FF',
        200: '#B2DDFF',
        300: '#84CAFF',
        400: '#53B1FD',
        500: '#2E90FA',
        600: '#1570EF',
        700: '#175CD3',
        800: '#1849A9',
        900: '#194185',
      },
      green: {
        25: '#F6FEF9',
        50: '#ECFDF3',
        100: '#D1FADF',
        200: '#A6F4C5',
        300: '#6CE9A6',
        400: '#32D583',
        500: '#12B76A',
        600: '#039855',
        700: '#027A48',
        800: '#05603A',
        900: '#054F31',
      },
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a',
      },
      yellow: {
        25: '#FFFCF5',
        50: '#FFFAEB',
        100: '#FEF0C7',
        200: '#FEDF89',
        300: '#FEC84B',
        400: '#FDB022',
        500: '#F79009',
        600: '#DC6803',
        700: '#B54708',
        800: '#93370D',
        900: '#7A2E0E',
      },
      purple: {
        25: '#FAFAFF',
        50: '#F4F3FF',
        100: '#EBE9FE',
        200: '#D9D6FE',
        300: '#BDB4FE',
        400: '#9B8AFB',
        500: '#7A5AF8',
        600: '#6938EF',
        700: '#5925DC',
        800: '#4A1FB8',
        900: '#3E1C96',
      },
      teal: {
        25: '#F6FEFC',
        50: '#F0FDF9',
        100: '#CCFBEF',
        200: '#99F6E0',
        300: '#5FE9D0',
        400: '#2ED3B7',
        500: '#15B79E',
        600: '#0E9384',
        700: '#107569',
        800: '#125D56',
        900: '#134E48',
      },
      pink: {
        25: '#fdf2f8',
        50: '#fce7f3',
        100: '#fbcfe8',
        200: '#f9a8d4',
        300: '#f472b6',
        400: '#ec4899',
        500: '#db2777',
        600: '#be185d',
        700: '#9d174d',
        800: '#831843',
        900: '#500724',
      },
      cyan: {
        25: '#ecfeff',
        50: '#cffafe',
        100: '#a5f3fc',
        200: '#67e8f9',
        300: '#22d3ee',
        400: '#06b6d4',
        500: '#0891b2',
        600: '#0e7490',
        700: '#155e75',
        800: '#164e63',
        900: '#083344',
      },
    },
    alpha: { 90: 'e5', 70: 'b3', 20: '33' },
    font: {
      size: {
        '2xs': 'calc(var(--tsrd-font-size) * 0.625)',
        xs: 'calc(var(--tsrd-font-size) * 0.75)',
        sm: 'calc(var(--tsrd-font-size) * 0.875)',
        md: 'var(--tsrd-font-size)',
      },
      lineHeight: {
        xs: 'calc(var(--tsrd-font-size) * 1)',
        sm: 'calc(var(--tsrd-font-size) * 1.25)',
      },
      weight: { normal: '400', medium: '500', semibold: '600', bold: '700' },
      fontFamily: {
        sans: 'ui-sans-serif, Inter, system-ui, sans-serif, sans-serif',
        mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      },
    },
    border: {
      radius: {
        xs: 'calc(var(--tsrd-font-size) * 0.125)',
        sm: 'calc(var(--tsrd-font-size) * 0.25)',
        md: 'calc(var(--tsrd-font-size) * 0.375)',
        full: '9999px',
      },
    },
    size: {
      0: '0px',
      0.5: 'calc(var(--tsrd-font-size) * 0.125)',
      1: 'calc(var(--tsrd-font-size) * 0.25)',
      1.5: 'calc(var(--tsrd-font-size) * 0.375)',
      2: 'calc(var(--tsrd-font-size) * 0.5)',
      2.5: 'calc(var(--tsrd-font-size) * 0.625)',
      3: 'calc(var(--tsrd-font-size) * 0.75)',
      3.5: 'calc(var(--tsrd-font-size) * 0.875)',
      4: 'calc(var(--tsrd-font-size) * 1)',
      5: 'calc(var(--tsrd-font-size) * 1.25)',
      8: 'calc(var(--tsrd-font-size) * 2)',
    },
  },
  mi = Z.createContext(void 0),
  Hs = Z.createContext(void 0),
  b0 = () => {
    const e = Z.useContext(Hs);
    if (!e)
      throw new Error(
        'useDevtoolsOnClose must be used within a TanStackRouterDevtools component',
      );
    return e;
  },
  mu = ({ expanded: e, style: t = {} }) => {
    const n = Yd();
    return c.jsx('span', {
      className: n.expander,
      children: c.jsx('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '12',
        height: '12',
        fill: 'none',
        viewBox: '0 0 24 24',
        className: me(n.expanderIcon(e)),
        children: c.jsx('path', {
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2',
          d: 'M9 18l6-6-6-6',
        }),
      }),
    });
  };
function em(e, t) {
  if (t < 1) return [];
  let n = 0;
  const r = [];
  for (; n < e.length; ) r.push(e.slice(n, n + t)), (n = n + t);
  return r;
}
const tm = ({
  handleEntry: e,
  label: t,
  value: n,
  subEntries: r = [],
  subEntryPages: o = [],
  type: i,
  expanded: l = !1,
  toggleExpanded: s,
  pageSize: a,
  renderer: u,
}) => {
  const [d, p] = O.useState([]),
    [f, g] = O.useState(void 0),
    y = Yd(),
    w = () => {
      g(n());
    };
  return c.jsx('div', {
    className: y.entry,
    children: o.length
      ? c.jsxs(c.Fragment, {
          children: [
            c.jsxs('button', {
              className: y.expandButton,
              onClick: () => s(),
              children: [
                c.jsx(mu, { expanded: l }),
                t,
                c.jsxs('span', {
                  className: y.info,
                  children: [
                    String(i).toLowerCase() === 'iterable' ? '(Iterable) ' : '',
                    r.length,
                    ' ',
                    r.length > 1 ? 'items' : 'item',
                  ],
                }),
              ],
            }),
            l
              ? o.length === 1
                ? c.jsx('div', {
                    className: y.subEntries,
                    children: r.map((C, m) => e(C)),
                  })
                : c.jsx('div', {
                    className: y.subEntries,
                    children: o.map((C, m) =>
                      c.jsx(
                        'div',
                        {
                          children: c.jsxs('div', {
                            className: y.entry,
                            children: [
                              c.jsxs('button', {
                                className: me(y.labelButton, 'labelButton'),
                                onClick: () =>
                                  p((h) =>
                                    h.includes(m) ? h.filter((v) => v !== m) : [...h, m],
                                  ),
                                children: [
                                  c.jsx(mu, { expanded: d.includes(m) }),
                                  ' ',
                                  '[',
                                  m * a,
                                  ' ...',
                                  ' ',
                                  m * a + a - 1,
                                  ']',
                                ],
                              }),
                              d.includes(m)
                                ? c.jsx('div', {
                                    className: y.subEntries,
                                    children: C.map((h) => e(h)),
                                  })
                                : null,
                            ],
                          }),
                        },
                        m,
                      ),
                    ),
                  })
              : null,
          ],
        })
      : i === 'function'
        ? c.jsx(c.Fragment, {
            children: c.jsx(En, {
              renderer: u,
              label: c.jsxs('button', {
                onClick: w,
                className: y.refreshValueBtn,
                children: [c.jsx('span', { children: t }), ' 🔄', ' '],
              }),
              value: f,
              defaultExpanded: {},
            }),
          })
        : c.jsxs(c.Fragment, {
            children: [
              c.jsxs('span', { children: [t, ':'] }),
              ' ',
              c.jsx('span', { className: y.value, children: J0(n) }),
            ],
          }),
  });
};
function nm(e) {
  return Symbol.iterator in e;
}
function En({
  value: e,
  defaultExpanded: t,
  renderer: n = tm,
  pageSize: r = 100,
  filterSubEntries: o,
  ...i
}) {
  const [l, s] = O.useState(!!t),
    a = O.useCallback(() => s((g) => !g), []);
  let u = typeof e,
    d = [];
  const p = (g) => {
    const y = t === !0 ? { [g.label]: !0 } : t == null ? void 0 : t[g.label];
    return { ...g, defaultExpanded: y };
  };
  Array.isArray(e)
    ? ((u = 'array'), (d = e.map((g, y) => p({ label: y.toString(), value: g }))))
    : e !== null &&
        typeof e == 'object' &&
        nm(e) &&
        typeof e[Symbol.iterator] == 'function'
      ? ((u = 'Iterable'),
        (d = Array.from(e, (g, y) => p({ label: y.toString(), value: g }))))
      : typeof e == 'object' &&
        e !== null &&
        ((u = 'object'),
        (d = Object.entries(e).map(([g, y]) => p({ label: g, value: y })))),
    (d = o ? o(d) : d);
  const f = em(d, r);
  return n({
    handleEntry: (g) =>
      c.jsx(En, { value: e, renderer: n, filterSubEntries: o, ...i, ...g }, g.label),
    type: u,
    subEntries: d,
    subEntryPages: f,
    value: e,
    expanded: l,
    toggleExpanded: a,
    pageSize: r,
    ...i,
  });
}
const rm = (e) => {
  const { colors: t, font: n, size: r } = H,
    { fontFamily: o, lineHeight: i, size: l } = n,
    s = e ? Wn.bind({ target: e }) : Wn;
  return {
    entry: s`
      font-family: ${o.mono};
      font-size: ${l.xs};
      line-height: ${i.sm};
      outline: none;
      word-break: break-word;
    `,
    labelButton: s`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,
    expander: s`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,
    expanderIcon: (a) =>
      a
        ? s`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `
        : s`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,
    expandButton: s`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,
    value: s`
      color: ${t.purple[400]};
    `,
    subEntries: s`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,
    info: s`
      color: ${t.gray[500]};
      font-size: ${l['2xs']};
      padding-left: ${r[1]};
    `,
    refreshValueBtn: s`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${o.mono};
      font-size: ${l.xs};
    `,
  };
};
function Yd() {
  const e = O.useContext(mi),
    [t] = O.useState(() => rm(e));
  return t;
}
function vu() {
  const e = Z.useId();
  return c.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    enableBackground: 'new 0 0 634 633',
    viewBox: '0 0 634 633',
    children: c.jsxs('g', {
      transform: 'translate(1)',
      children: [
        c.jsxs('linearGradient', {
          id: `a-${e}`,
          x1: '-641.486',
          x2: '-641.486',
          y1: '856.648',
          y2: '855.931',
          gradientTransform: 'matrix(633 0 0 -633 406377 542258)',
          gradientUnits: 'userSpaceOnUse',
          children: [
            c.jsx('stop', { offset: '0', stopColor: '#6bdaff' }),
            c.jsx('stop', { offset: '0.319', stopColor: '#f9ffb5' }),
            c.jsx('stop', { offset: '0.706', stopColor: '#ffa770' }),
            c.jsx('stop', { offset: '1', stopColor: '#ff7373' }),
          ],
        }),
        c.jsx('circle', {
          cx: '316.5',
          cy: '316.5',
          r: '316.5',
          fill: `url(#a-${e})`,
          fillRule: 'evenodd',
          clipRule: 'evenodd',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `b-${e}`,
            width: '454',
            height: '396.9',
            x: '-137.5',
            y: '412',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', {
              values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
            }),
          }),
        }),
        c.jsx('mask', {
          id: `c-${e}`,
          width: '454',
          height: '396.9',
          x: '-137.5',
          y: '412',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#b-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '89.5',
          cy: '610.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#00CFE2',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#c-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `d-${e}`,
            width: '454',
            height: '396.9',
            x: '316.5',
            y: '412',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', {
              values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
            }),
          }),
        }),
        c.jsx('mask', {
          id: `e-${e}`,
          width: '454',
          height: '396.9',
          x: '316.5',
          y: '412',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#d-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '543.5',
          cy: '610.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#00CFE2',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#e-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `f-${e}`,
            width: '454',
            height: '396.9',
            x: '-137.5',
            y: '450',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', {
              values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
            }),
          }),
        }),
        c.jsx('mask', {
          id: `g-${e}`,
          width: '454',
          height: '396.9',
          x: '-137.5',
          y: '450',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#f-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '89.5',
          cy: '648.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#00A8B8',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#g-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `h-${e}`,
            width: '454',
            height: '396.9',
            x: '316.5',
            y: '450',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', {
              values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
            }),
          }),
        }),
        c.jsx('mask', {
          id: `i-${e}`,
          width: '454',
          height: '396.9',
          x: '316.5',
          y: '450',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#h-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '543.5',
          cy: '648.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#00A8B8',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#i-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `j-${e}`,
            width: '454',
            height: '396.9',
            x: '-137.5',
            y: '486',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', {
              values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
            }),
          }),
        }),
        c.jsx('mask', {
          id: `k-${e}`,
          width: '454',
          height: '396.9',
          x: '-137.5',
          y: '486',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#j-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '89.5',
          cy: '684.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#007782',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#k-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `l-${e}`,
            width: '454',
            height: '396.9',
            x: '316.5',
            y: '486',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', {
              values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
            }),
          }),
        }),
        c.jsx('mask', {
          id: `m-${e}`,
          width: '454',
          height: '396.9',
          x: '316.5',
          y: '486',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#l-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('ellipse', {
          cx: '543.5',
          cy: '684.5',
          fill: '#015064',
          fillRule: 'evenodd',
          stroke: '#007782',
          strokeWidth: '25',
          clipRule: 'evenodd',
          mask: `url(#m-${e})`,
          rx: '214.5',
          ry: '186',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `n-${e}`,
            width: '176.9',
            height: '129.3',
            x: '272.2',
            y: '308',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', {
              values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
            }),
          }),
        }),
        c.jsx('mask', {
          id: `o-${e}`,
          width: '176.9',
          height: '129.3',
          x: '272.2',
          y: '308',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#n-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsxs('g', {
          mask: `url(#o-${e})`,
          children: [
            c.jsx('path', {
              fill: 'none',
              stroke: '#000',
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeWidth: '11',
              d: 'M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1',
            }),
            c.jsxs('linearGradient', {
              id: `p-${e}`,
              x1: '-645.656',
              x2: '-646.499',
              y1: '854.878',
              y2: '854.788',
              gradientTransform:
                'matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#ee2700' }),
                c.jsx('stop', { offset: '1', stopColor: '#ff008e' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#p-${e})`,
              fillRule: 'evenodd',
              d: 'M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z',
              clipRule: 'evenodd',
            }),
            c.jsx('path', {
              fill: '#D8D8D8',
              fillRule: 'evenodd',
              stroke: '#FFF',
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeWidth: '7',
              d: 'M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9',
              clipRule: 'evenodd',
            }),
          ],
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `q-${e}`,
            width: '280.6',
            height: '317.4',
            x: '73.2',
            y: '113.9',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', {
              values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
            }),
          }),
        }),
        c.jsx('mask', {
          id: `r-${e}`,
          width: '280.6',
          height: '317.4',
          x: '73.2',
          y: '113.9',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#q-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsxs('g', {
          mask: `url(#r-${e})`,
          children: [
            c.jsxs('linearGradient', {
              id: `s-${e}`,
              x1: '-646.8',
              x2: '-646.8',
              y1: '854.844',
              y2: '853.844',
              gradientTransform:
                'matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#a17500' }),
                c.jsx('stop', { offset: '1', stopColor: '#5d2100' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#s-${e})`,
              fillRule: 'evenodd',
              d: 'M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `t-${e}`,
              x1: '-635.467',
              x2: '-635.467',
              y1: '852.115',
              y2: '851.115',
              gradientTransform:
                'matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#t-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `u-${e}`,
              x1: '-636.573',
              x2: '-636.573',
              y1: '855.444',
              y2: '854.444',
              gradientTransform:
                'matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#u-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `v-${e}`,
              x1: '-632.145',
              x2: '-632.145',
              y1: '854.174',
              y2: '853.174',
              gradientTransform:
                'matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#v-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `w-${e}`,
              x1: '-638.224',
              x2: '-638.224',
              y1: '853.801',
              y2: '852.801',
              gradientTransform:
                'matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#w-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `x-${e}`,
              x1: '-637.723',
              x2: '-637.723',
              y1: '855.103',
              y2: '854.103',
              gradientTransform:
                'matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#x-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z',
              clipRule: 'evenodd',
            }),
            c.jsxs('linearGradient', {
              id: `y-${e}`,
              x1: '-631.79',
              x2: '-631.79',
              y1: '855.872',
              y2: '854.872',
              gradientTransform:
                'matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)',
              gradientUnits: 'userSpaceOnUse',
              children: [
                c.jsx('stop', { offset: '0', stopColor: '#2f8a00' }),
                c.jsx('stop', { offset: '1', stopColor: '#90ff57' }),
              ],
            }),
            c.jsx('path', {
              fill: `url(#y-${e})`,
              fillRule: 'evenodd',
              stroke: '#2F8A00',
              strokeWidth: '13',
              d: 'M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z',
              clipRule: 'evenodd',
            }),
            c.jsx('path', {
              fill: 'none',
              stroke: '#2F8A00',
              strokeLinecap: 'round',
              strokeWidth: '8',
              d: 'M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1',
            }),
            c.jsx('path', {
              fill: 'none',
              stroke: '#2F8A00',
              strokeLinecap: 'round',
              strokeWidth: '8',
              d: 'M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32',
            }),
          ],
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `z-${e}`,
            width: '532',
            height: '633',
            x: '50.5',
            y: '399',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', {
              values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
            }),
          }),
        }),
        c.jsx('mask', {
          id: `A-${e}`,
          width: '532',
          height: '633',
          x: '50.5',
          y: '399',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#z-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsxs('linearGradient', {
          id: `B-${e}`,
          x1: '-641.104',
          x2: '-641.278',
          y1: '856.577',
          y2: '856.183',
          gradientTransform: 'matrix(532 0 0 -633 341484.5 542657)',
          gradientUnits: 'userSpaceOnUse',
          children: [
            c.jsx('stop', { offset: '0', stopColor: '#fff400' }),
            c.jsx('stop', { offset: '1', stopColor: '#3c8700' }),
          ],
        }),
        c.jsx('ellipse', {
          cx: '316.5',
          cy: '715.5',
          fill: `url(#B-${e})`,
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          mask: `url(#A-${e})`,
          rx: '266',
          ry: '316.5',
        }),
        c.jsx('defs', {
          children: c.jsx('filter', {
            id: `C-${e}`,
            width: '288',
            height: '283',
            x: '391',
            y: '-24',
            filterUnits: 'userSpaceOnUse',
            children: c.jsx('feColorMatrix', {
              values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
            }),
          }),
        }),
        c.jsx('mask', {
          id: `D-${e}`,
          width: '288',
          height: '283',
          x: '391',
          y: '-24',
          maskUnits: 'userSpaceOnUse',
          children: c.jsx('g', {
            filter: `url(#C-${e})`,
            children: c.jsx('circle', {
              cx: '316.5',
              cy: '316.5',
              r: '316.5',
              fill: '#FFF',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }),
          }),
        }),
        c.jsx('g', {
          mask: `url(#D-${e})`,
          children: c.jsxs('g', {
            transform: 'translate(397 -24)',
            children: [
              c.jsxs('linearGradient', {
                id: `E-${e}`,
                x1: '-1036.672',
                x2: '-1036.672',
                y1: '880.018',
                y2: '879.018',
                gradientTransform: 'matrix(227 0 0 -227 235493 199764)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffdf00' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff9d00' }),
                ],
              }),
              c.jsx('circle', {
                cx: '168.5',
                cy: '113.5',
                r: '113.5',
                fill: `url(#E-${e})`,
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              }),
              c.jsxs('linearGradient', {
                id: `F-${e}`,
                x1: '-1017.329',
                x2: '-1018.602',
                y1: '658.003',
                y2: '657.998',
                gradientTransform: 'matrix(30 0 0 -1 30558 771)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#F-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M30 113H0',
              }),
              c.jsxs('linearGradient', {
                id: `G-${e}`,
                x1: '-1014.501',
                x2: '-1015.774',
                y1: '839.985',
                y2: '839.935',
                gradientTransform: 'matrix(26.5 0 0 -5.5 26925 4696.5)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#G-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M33.5 79.5L7 74',
              }),
              c.jsxs('linearGradient', {
                id: `H-${e}`,
                x1: '-1016.59',
                x2: '-1017.862',
                y1: '852.671',
                y2: '852.595',
                gradientTransform: 'matrix(29 0 0 -8 29523 6971)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#H-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M34 146l-29 8',
              }),
              c.jsxs('linearGradient', {
                id: `I-${e}`,
                x1: '-1011.984',
                x2: '-1013.257',
                y1: '863.523',
                y2: '863.229',
                gradientTransform: 'matrix(24 0 0 -13 24339 11407)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#I-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M45 177l-24 13',
              }),
              c.jsxs('linearGradient', {
                id: `J-${e}`,
                x1: '-1006.673',
                x2: '-1007.946',
                y1: '869.279',
                y2: '868.376',
                gradientTransform: 'matrix(20 0 0 -19 20205 16720)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#J-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M67 204l-20 19',
              }),
              c.jsxs('linearGradient', {
                id: `K-${e}`,
                x1: '-992.85',
                x2: '-993.317',
                y1: '871.258',
                y2: '870.258',
                gradientTransform: 'matrix(13.8339 0 0 -22.8467 13825.796 20131.938)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#K-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M94.4 227l-13.8 22.8',
              }),
              c.jsxs('linearGradient', {
                id: `L-${e}`,
                x1: '-953.835',
                x2: '-953.965',
                y1: '871.9',
                y2: '870.9',
                gradientTransform: 'matrix(7.5 0 0 -24.5 7278 21605)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#L-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M127.5 243.5L120 268',
              }),
              c.jsxs('linearGradient', {
                id: `M-${e}`,
                x1: '244.504',
                x2: '244.496',
                y1: '871.898',
                y2: '870.898',
                gradientTransform: 'matrix(.5 0 0 -24.5 45.5 21614)',
                gradientUnits: 'userSpaceOnUse',
                children: [
                  c.jsx('stop', { offset: '0', stopColor: '#ffa400' }),
                  c.jsx('stop', { offset: '1', stopColor: '#ff5e00' }),
                ],
              }),
              c.jsx('path', {
                fill: 'none',
                stroke: `url(#M-${e})`,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeWidth: '12',
                d: 'M167.5 252.5l.5 24.5',
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function om(e) {
  const { className: t, ...n } = e,
    r = Br();
  return c.jsxs('button', {
    ...n,
    className: me(r.logo, t),
    children: [
      c.jsx('div', { className: r.tanstackLogo, children: 'TANSTACK' }),
      c.jsx('div', { className: r.routerLogo, children: 'React Router v1' }),
    ],
  });
}
function im(e) {
  const { shadowDOMTarget: t } = e;
  return c.jsx(mi.Provider, { value: t, children: c.jsx(lm, { ...e }) });
}
function lm({
  initialIsOpen: e,
  panelProps: t = {},
  closeButtonProps: n = {},
  toggleButtonProps: r = {},
  position: o = 'bottom-left',
  containerElement: i = 'footer',
  router: l,
  shadowDOMTarget: s,
}) {
  const [a, u] = Z.useState(),
    d = Z.useRef(null),
    [p, f] = Yo('tanstackRouterDevtoolsOpen', e),
    [g, y] = Yo('tanstackRouterDevtoolsHeight', null),
    [w, C] = hu(!1),
    [m, h] = hu(!1),
    v = Gd(),
    x = Br(),
    j = (I, Y) => {
      if (Y.button !== 0) return;
      h(!0);
      const S = {
          originalHeight: (I == null ? void 0 : I.getBoundingClientRect().height) ?? 0,
          pageY: Y.pageY,
        },
        N = (F) => {
          const z = S.pageY - F.pageY,
            X = S.originalHeight + z;
          y(X), X < 70 ? f(!1) : f(!0);
        },
        M = () => {
          h(!1),
            document.removeEventListener('mousemove', N),
            document.removeEventListener('mouseUp', M);
        };
      document.addEventListener('mousemove', N), document.addEventListener('mouseup', M);
    },
    _ = p ?? !1;
  Z.useEffect(() => {
    C(p ?? !1);
  }, [p, w, C]),
    Z.useEffect(() => {
      var I;
      if (w) {
        const Y =
            (I = a == null ? void 0 : a.parentElement) == null
              ? void 0
              : I.style.paddingBottom,
          S = () => {
            var N;
            const M = (N = d.current) == null ? void 0 : N.getBoundingClientRect().height;
            a != null &&
              a.parentElement &&
              (a.parentElement.style.paddingBottom = `${M}px`);
          };
        if ((S(), typeof window < 'u'))
          return (
            window.addEventListener('resize', S),
            () => {
              window.removeEventListener('resize', S),
                a != null &&
                  a.parentElement &&
                  typeof Y == 'string' &&
                  (a.parentElement.style.paddingBottom = Y);
            }
          );
      }
    }, [w, a == null ? void 0 : a.parentElement]),
    Z.useEffect(() => {
      if (a) {
        const I = a,
          Y = getComputedStyle(I).fontSize;
        I.style.setProperty('--tsrd-font-size', Y);
      }
    }, [a]);
  const { style: R = {}, ...P } = t,
    { style: k = {}, onClick: L, ...T } = n,
    { onClick: D, className: W, ...fe } = r;
  if (!v) return null;
  const K = g ?? 500;
  return c.jsxs(i, {
    ref: u,
    className: 'TanStackRouterDevtools',
    children: [
      c.jsx(Hs.Provider, {
        value: { onCloseClick: L ?? (() => {}) },
        children: c.jsx(Jd, {
          ref: d,
          ...P,
          router: l,
          className: me(
            x.devtoolsPanelContainer,
            x.devtoolsPanelContainerVisibility(!!p),
            x.devtoolsPanelContainerResizing(m),
            x.devtoolsPanelContainerAnimation(w, K + 16),
          ),
          style: { height: K, ...R },
          isOpen: w,
          setIsOpen: f,
          handleDragStart: (I) => j(d.current, I),
          shadowDOMTarget: s,
        }),
      }),
      c.jsxs('button', {
        type: 'button',
        ...fe,
        'aria-label': 'Open TanStack Router Devtools',
        onClick: (I) => {
          f(!0), D && D(I);
        },
        className: me(
          x.mainCloseBtn,
          x.mainCloseBtnPosition(o),
          x.mainCloseBtnAnimation(!_),
          W,
        ),
        children: [
          c.jsxs('div', {
            className: x.mainCloseBtnIconContainer,
            children: [
              c.jsx('div', {
                className: x.mainCloseBtnIconOuter,
                children: c.jsx(vu, {}),
              }),
              c.jsx('div', {
                className: x.mainCloseBtnIconInner,
                children: c.jsx(vu, {}),
              }),
            ],
          }),
          c.jsx('div', { className: x.mainCloseBtnDivider, children: '-' }),
          c.jsx('div', {
            className: x.routerLogoCloseButton,
            children: 'TanStack Router',
          }),
        ],
      }),
    ],
  });
}
Z.forwardRef(function (t, n) {
  const { shadowDOMTarget: r } = t;
  return c.jsx(mi.Provider, {
    value: r,
    children: c.jsx(Hs.Provider, {
      value: { onCloseClick: () => {} },
      children: c.jsx(Jd, { ref: n, ...t }),
    }),
  });
});
function Xd({ router: e, route: t, isRoot: n, activeId: r, setActiveId: o }) {
  var i;
  const l = ke({ router: e }),
    s = Br(),
    a = l.pendingMatches || l.matches,
    u = l.matches.find((p) => p.routeId === t.id),
    d = Z.useMemo(() => {
      try {
        if (u != null && u.params) {
          const p = u.params,
            f = t.path || Hl(t.id);
          if (f.startsWith('$')) {
            const g = f.slice(1);
            if (p[g]) return `(${p[g]})`;
          }
        }
        return '';
      } catch {
        return '';
      }
    }, [u, t]);
  return c.jsxs('div', {
    children: [
      c.jsxs('div', {
        role: 'button',
        'aria-label': `Open match details for ${t.id}`,
        onClick: () => {
          u && o(r === t.id ? '' : t.id);
        },
        className: me(s.routesRowContainer(t.id === r, !!u)),
        children: [
          c.jsx('div', { className: me(s.matchIndicator(X0(a, t))) }),
          c.jsxs('div', {
            className: me(s.routesRow(!!u)),
            children: [
              c.jsxs('div', {
                children: [
                  c.jsxs('code', {
                    className: s.code,
                    children: [n ? we : t.path || Hl(t.id), ' '],
                  }),
                  c.jsx('code', { className: s.routeParamInfo, children: d }),
                ],
              }),
              c.jsx(Kl, { match: u, router: e }),
            ],
          }),
        ],
      }),
      (i = t.children) != null && i.length
        ? c.jsx('div', {
            className: s.nestedRouteRow(!!n),
            children: [...t.children]
              .sort((p, f) => p.rank - f.rank)
              .map((p) =>
                c.jsx(Xd, { router: e, route: p, activeId: r, setActiveId: o }, p.id),
              ),
          })
        : null,
    ],
  });
}
const Jd = Z.forwardRef(function (t, n) {
  var r, o;
  const {
      isOpen: i = !0,
      setIsOpen: l,
      handleDragStart: s,
      router: a,
      shadowDOMTarget: u,
      ...d
    } = t,
    { onCloseClick: p } = b0(),
    f = Br(),
    { className: g, ...y } = d,
    w = St({ warn: !1 }),
    C = a ?? w,
    m = ke({ router: C });
  Ee(C);
  const [h, v] = Yo('tanstackRouterDevtoolsShowMatches', !0),
    [x, j] = Yo('tanstackRouterDevtoolsActiveRouteId', ''),
    _ = Z.useMemo(
      () =>
        [...(m.pendingMatches ?? []), ...m.matches, ...m.cachedMatches].find(
          (L) => L.routeId === x || L.id === x,
        ),
      [x, m.cachedMatches, m.matches, m.pendingMatches],
    ),
    R = Object.keys(m.location.search).length,
    P = { ...C, state: C.state };
  return c.jsxs('div', {
    ref: n,
    className: me(f.devtoolsPanel, 'TanStackRouterDevtoolsPanel', g),
    ...y,
    children: [
      s ? c.jsx('div', { className: f.dragHandle, onMouseDown: s }) : null,
      c.jsx('button', {
        className: f.panelCloseBtn,
        onClick: (k) => {
          l(!1), p(k);
        },
        children: c.jsx('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '10',
          height: '6',
          fill: 'none',
          viewBox: '0 0 10 6',
          className: f.panelCloseBtnIcon,
          children: c.jsx('path', {
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.667',
            d: 'M1 1l4 4 4-4',
          }),
        }),
      }),
      c.jsxs('div', {
        className: f.firstContainer,
        children: [
          c.jsx('div', {
            className: f.row,
            children: c.jsx(om, {
              'aria-hidden': !0,
              onClick: (k) => {
                l(!1), p(k);
              },
            }),
          }),
          c.jsx('div', {
            className: f.routerExplorerContainer,
            children: c.jsx('div', {
              className: f.routerExplorer,
              children: c.jsx(En, {
                label: 'Router',
                value: Object.fromEntries(
                  q0(
                    Object.keys(P),
                    [
                      'state',
                      'routesById',
                      'routesByPath',
                      'flatRoutes',
                      'options',
                      'manifest',
                    ].map((k) => (L) => L !== k),
                  )
                    .map((k) => [k, P[k]])
                    .filter(
                      (k) =>
                        typeof k[1] != 'function' &&
                        ![
                          '__store',
                          'basepath',
                          'injectedHtml',
                          'subscribers',
                          'latestLoadPromise',
                          'navigateTimeout',
                          'resetNextScroll',
                          'tempLocationKey',
                          'latestLocation',
                          'routeTree',
                          'history',
                        ].includes(k[0]),
                    ),
                ),
                defaultExpanded: { state: {}, context: {}, options: {} },
                filterSubEntries: (k) => k.filter((L) => typeof L.value != 'function'),
              }),
            }),
          }),
        ],
      }),
      c.jsxs('div', {
        className: f.secondContainer,
        children: [
          c.jsxs('div', {
            className: f.matchesContainer,
            children: [
              c.jsxs('div', {
                className: f.detailsHeader,
                children: [
                  c.jsx('span', { children: 'Pathname' }),
                  m.location.maskedLocation
                    ? c.jsx('div', {
                        className: f.maskedBadgeContainer,
                        children: c.jsx('span', {
                          className: f.maskedBadge,
                          children: 'masked',
                        }),
                      })
                    : null,
                ],
              }),
              c.jsxs('div', {
                className: f.detailsContent,
                children: [
                  c.jsx('code', { children: m.location.pathname }),
                  m.location.maskedLocation
                    ? c.jsx('code', {
                        className: f.maskedLocation,
                        children: m.location.maskedLocation.pathname,
                      })
                    : null,
                ],
              }),
              c.jsxs('div', {
                className: f.detailsHeader,
                children: [
                  c.jsxs('div', {
                    className: f.routeMatchesToggle,
                    children: [
                      c.jsx('button', {
                        type: 'button',
                        onClick: () => {
                          v(!1);
                        },
                        disabled: !h,
                        className: me(f.routeMatchesToggleBtn(!h, !0)),
                        children: 'Routes',
                      }),
                      c.jsx('button', {
                        type: 'button',
                        onClick: () => {
                          v(!0);
                        },
                        disabled: h,
                        className: me(f.routeMatchesToggleBtn(!!h, !1)),
                        children: 'Matches',
                      }),
                    ],
                  }),
                  c.jsx('div', {
                    className: f.detailsHeaderInfo,
                    children: c.jsx('div', { children: 'age / staleTime / gcTime' }),
                  }),
                ],
              }),
              c.jsx('div', {
                className: me(f.routesContainer),
                children: h
                  ? c.jsx('div', {
                      children: ((r = m.pendingMatches) != null && r.length
                        ? m.pendingMatches
                        : m.matches
                      ).map((k, L) =>
                        c.jsxs(
                          'div',
                          {
                            role: 'button',
                            'aria-label': `Open match details for ${k.id}`,
                            onClick: () => j(x === k.id ? '' : k.id),
                            className: me(f.matchRow(k === _)),
                            children: [
                              c.jsx('div', { className: me(f.matchIndicator(Wl(k))) }),
                              c.jsx('code', {
                                className: f.matchID,
                                children: `${k.routeId === we ? we : k.pathname}`,
                              }),
                              c.jsx(Kl, { match: k, router: C }),
                            ],
                          },
                          k.id || L,
                        ),
                      ),
                    })
                  : c.jsx(Xd, {
                      router: C,
                      route: C.routeTree,
                      isRoot: !0,
                      activeId: x,
                      setActiveId: j,
                    }),
              }),
            ],
          }),
          m.cachedMatches.length
            ? c.jsxs('div', {
                className: f.cachedMatchesContainer,
                children: [
                  c.jsxs('div', {
                    className: f.detailsHeader,
                    children: [
                      c.jsx('div', { children: 'Cached Matches' }),
                      c.jsx('div', {
                        className: f.detailsHeaderInfo,
                        children: 'age / staleTime / gcTime',
                      }),
                    ],
                  }),
                  c.jsx('div', {
                    children: m.cachedMatches.map((k) =>
                      c.jsxs(
                        'div',
                        {
                          role: 'button',
                          'aria-label': `Open match details for ${k.id}`,
                          onClick: () => j(x === k.id ? '' : k.id),
                          className: me(f.matchRow(k === _)),
                          children: [
                            c.jsx('div', { className: me(f.matchIndicator(Wl(k))) }),
                            c.jsx('code', { className: f.matchID, children: `${k.id}` }),
                            c.jsx(Kl, { match: k, router: C }),
                          ],
                        },
                        k.id,
                      ),
                    ),
                  }),
                ],
              })
            : null,
        ],
      }),
      _
        ? c.jsxs('div', {
            className: f.thirdContainer,
            children: [
              c.jsx('div', { className: f.detailsHeader, children: 'Match Details' }),
              c.jsx('div', {
                children: c.jsxs('div', {
                  className: f.matchDetails,
                  children: [
                    c.jsx('div', {
                      className: f.matchStatus(_.status, _.isFetching),
                      children: c.jsx('div', {
                        children:
                          _.status === 'success' && _.isFetching ? 'fetching' : _.status,
                      }),
                    }),
                    c.jsxs('div', {
                      className: f.matchDetailsInfoLabel,
                      children: [
                        c.jsx('div', { children: 'ID:' }),
                        c.jsx('div', {
                          className: f.matchDetailsInfo,
                          children: c.jsx('code', { children: _.id }),
                        }),
                      ],
                    }),
                    c.jsxs('div', {
                      className: f.matchDetailsInfoLabel,
                      children: [
                        c.jsx('div', { children: 'State:' }),
                        c.jsx('div', {
                          className: f.matchDetailsInfo,
                          children:
                            (o = m.pendingMatches) != null && o.find((k) => k.id === _.id)
                              ? 'Pending'
                              : m.matches.find((k) => k.id === _.id)
                                ? 'Active'
                                : 'Cached',
                        }),
                      ],
                    }),
                    c.jsxs('div', {
                      className: f.matchDetailsInfoLabel,
                      children: [
                        c.jsx('div', { children: 'Last Updated:' }),
                        c.jsx('div', {
                          className: f.matchDetailsInfo,
                          children: _.updatedAt
                            ? new Date(_.updatedAt).toLocaleTimeString()
                            : 'N/A',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              _.loaderData
                ? c.jsxs(c.Fragment, {
                    children: [
                      c.jsx('div', {
                        className: f.detailsHeader,
                        children: 'Loader Data',
                      }),
                      c.jsx('div', {
                        className: f.detailsContent,
                        children: c.jsx(En, {
                          label: 'loaderData',
                          value: _.loaderData,
                          defaultExpanded: {},
                        }),
                      }),
                    ],
                  })
                : null,
              c.jsx('div', { className: f.detailsHeader, children: 'Explorer' }),
              c.jsx('div', {
                className: f.detailsContent,
                children: c.jsx(En, { label: 'Match', value: _, defaultExpanded: {} }),
              }),
            ],
          })
        : null,
      R
        ? c.jsxs('div', {
            className: f.fourthContainer,
            children: [
              c.jsx('div', { className: f.detailsHeader, children: 'Search Params' }),
              c.jsx('div', {
                className: f.detailsContent,
                children: c.jsx(En, {
                  value: m.location.search,
                  defaultExpanded: Object.keys(m.location.search).reduce(
                    (k, L) => ((k[L] = {}), k),
                    {},
                  ),
                }),
              }),
            ],
          })
        : null,
    ],
  });
});
function Kl({ match: e, router: t }) {
  const n = Br(),
    r = Z.useReducer(
      () => ({}),
      () => ({}),
    )[1];
  if (
    (Z.useEffect(() => {
      const a = setInterval(() => {
        r();
      }, 1e3);
      return () => {
        clearInterval(a);
      };
    }, [r]),
    !e)
  )
    return null;
  const o = t.looseRoutesById[e.routeId];
  if (!o.options.loader) return null;
  const i = Date.now() - e.updatedAt,
    l = o.options.staleTime ?? t.options.defaultStaleTime ?? 0,
    s = o.options.gcTime ?? t.options.defaultGcTime ?? 30 * 60 * 1e3;
  return c.jsxs('div', {
    className: me(n.ageTicker(i > l)),
    children: [
      c.jsx('div', { children: Yi(i) }),
      c.jsx('div', { children: '/' }),
      c.jsx('div', { children: Yi(l) }),
      c.jsx('div', { children: '/' }),
      c.jsx('div', { children: Yi(s) }),
    ],
  });
}
function Yi(e) {
  const t = ['s', 'min', 'h', 'd'],
    n = [e / 1e3, e / 6e4, e / 36e5, e / 864e5];
  let r = 0;
  for (let i = 1; i < n.length && !(n[i] < 1); i++) r = i;
  return (
    new Intl.NumberFormat(navigator.language, {
      compactDisplay: 'short',
      notation: 'compact',
      maximumFractionDigits: 0,
    }).format(n[r]) + t[r]
  );
}
const sm = (e) => {
  const { colors: t, font: n, size: r, alpha: o, border: i } = H,
    { fontFamily: l, lineHeight: s, size: a } = n,
    u = e ? Wn.bind({ target: e }) : Wn;
  return {
    devtoolsPanelContainer: u`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,
    devtoolsPanelContainerVisibility: (d) => u`
        visibility: ${d ? 'visible' : 'hidden'};
      `,
    devtoolsPanelContainerResizing: (d) =>
      d
        ? u`
          transition: none;
        `
        : u`
        transition: all 0.4s ease;
      `,
    devtoolsPanelContainerAnimation: (d, p) =>
      d
        ? u`
          pointer-events: auto;
          transform: translateY(0);
        `
        : u`
        pointer-events: none;
        transform: translateY(${p}px);
      `,
    logo: u`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${l.sans};
      gap: ${H.size[0.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${i.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,
    tanstackLogo: u`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,
    routerLogo: u`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    devtoolsPanel: u`
      display: flex;
      font-size: ${a.sm};
      font-family: ${l.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${a.xs};
      }
    `,
    dragHandle: u`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${o[90]};
      }
    `,
    firstContainer: u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,
    routerExplorerContainer: u`
      overflow-y: auto;
      flex: 1;
    `,
    routerExplorer: u`
      padding: ${H.size[2]};
    `,
    row: u`
      display: flex;
      align-items: center;
      padding: ${H.size[2]} ${H.size[2.5]};
      gap: ${H.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,
    detailsHeader: u`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${H.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${H.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,
    maskedBadge: u`
      background: ${t.yellow[900]}${o[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${H.size[0]} ${H.size[2.5]};
      border-radius: ${i.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,
    maskedLocation: u`
      color: ${t.yellow[300]};
    `,
    detailsContent: u`
      padding: ${H.size[1.5]} ${H.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,
    routeMatchesToggle: u`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${i.radius.sm};
      overflow: hidden;
    `,
    routeMatchesToggleBtn: (d, p) => {
      const g = [
        u`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${l.sans};
        font-weight: ${n.weight.medium};
      `,
      ];
      if (d) {
        const y = u`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;
        g.push(y);
      } else {
        const y = u`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${o[20]};
        `;
        g.push(y);
      }
      return (
        p &&
          g.push(u`
          border-right: 1px solid ${H.colors.gray[500]};
        `),
        g
      );
    },
    detailsHeaderInfo: u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,
    matchRow: (d) => {
      const f = [
        u`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${a.xs};
        color: ${t.gray[300]};
      `,
      ];
      if (d) {
        const g = u`
          background: ${t.darkGray[500]};
        `;
        f.push(g);
      }
      return f;
    },
    matchIndicator: (d) => {
      const f = [
        u`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[d][900]};
        border: 1px solid ${t[d][500]};
        border-radius: ${i.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `,
      ];
      if (d === 'gray') {
        const g = u`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;
        f.push(g);
      }
      return f;
    },
    matchID: u`
      flex: 1;
      line-height: ${s.xs};
    `,
    ageTicker: (d) => {
      const f = [
        u`
        display: flex;
        gap: ${r[1]};
        font-size: ${a.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${s.xs};
      `,
      ];
      if (d) {
        const g = u`
          color: ${t.yellow[400]};
        `;
        f.push(g);
      }
      return f;
    },
    secondContainer: u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,
    thirdContainer: u`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,
    fourthContainer: u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,
    routesContainer: u`
      overflow-x: auto;
      overflow-y: visible;
    `,
    routesRowContainer: (d, p) => {
      const g = [
        u`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${a.xs};
        color: ${t.gray[300]};
        cursor: ${p ? 'pointer' : 'default'};
        line-height: ${s.xs};
      `,
      ];
      if (d) {
        const y = u`
          background: ${t.darkGray[500]};
        `;
        g.push(y);
      }
      return g;
    },
    routesRow: (d) => {
      const f = [
        u`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${a.xs};
        line-height: ${s.xs};
      `,
      ];
      if (!d) {
        const g = u`
          color: ${t.gray[400]};
        `;
        f.push(g);
      }
      return f;
    },
    routeParamInfo: u`
      color: ${t.gray[400]};
      font-size: ${a.xs};
      line-height: ${s.xs};
    `,
    nestedRouteRow: (d) => u`
        margin-left: ${d ? 0 : r[3.5]};
        border-left: ${d ? '' : `solid 1px ${t.gray[700]}`};
      `,
    code: u`
      font-size: ${a.xs};
      line-height: ${s.xs};
    `,
    matchesContainer: u`
      flex: 1 1 auto;
      overflow-y: auto;
    `,
    cachedMatchesContainer: u`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,
    maskedBadgeContainer: u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,
    matchDetails: u`
      display: flex;
      flex-direction: column;
      padding: ${H.size[2]};
      font-size: ${H.font.size.xs};
      color: ${H.colors.gray[300]};
      line-height: ${H.font.lineHeight.sm};
    `,
    matchStatus: (d, p) => {
      const g =
        p && d === 'success'
          ? p === 'beforeLoad'
            ? 'purple'
            : 'blue'
          : {
              pending: 'yellow',
              success: 'green',
              error: 'red',
              notFound: 'purple',
              redirected: 'gray',
            }[d];
      return u`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${H.border.radius.sm};
        font-weight: ${H.font.weight.normal};
        background-color: ${H.colors[g][900]}${H.alpha[90]};
        color: ${H.colors[g][300]};
        border: 1px solid ${H.colors[g][600]};
        margin-bottom: ${H.size[2]};
        transition: all 0.25s ease-out;
      `;
    },
    matchDetailsInfo: u`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,
    matchDetailsInfoLabel: u`
      display: flex;
    `,
    mainCloseBtn: u`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${i.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,
    mainCloseBtnPosition: (d) => u`
        ${d === 'top-left' ? `top: ${r[2]}; left: ${r[2]};` : ''}
        ${d === 'top-right' ? `top: ${r[2]}; right: ${r[2]};` : ''}
        ${d === 'bottom-left' ? `bottom: ${r[2]}; left: ${r[2]};` : ''}
        ${d === 'bottom-right' ? `bottom: ${r[2]}; right: ${r[2]};` : ''}
      `,
    mainCloseBtnAnimation: (d) =>
      d
        ? u`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `
        : u`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `,
    routerLogoCloseButton: u`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    mainCloseBtnDivider: u`
      width: 1px;
      background: ${H.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,
    mainCloseBtnIconContainer: u`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,
    mainCloseBtnIconOuter: u`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,
    mainCloseBtnIconInner: u`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    panelCloseBtn: u`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${i.radius.sm} ${i.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[0.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,
    panelCloseBtnIcon: u`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,
  };
};
function Br() {
  const e = Z.useContext(mi),
    [t] = Z.useState(() => sm(e));
  return t;
}
const Vs = $0({ component: am });
function am() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs('div', {
        className: 'p-2 flex gap-2 text-lg',
        children: [
          c.jsx(fu, {
            to: '/',
            activeProps: { className: 'font-bold' },
            activeOptions: { exact: !0 },
            children: 'Home',
          }),
          ' ',
          c.jsx(fu, {
            to: '/about',
            activeProps: { className: 'font-bold' },
            children: 'About',
          }),
        ],
      }),
      c.jsx('hr', {}),
      c.jsx(Wd, {}),
      c.jsx(im, { position: 'bottom-right' }),
    ],
  });
}
const um = Ad('/about')({ component: cm });
function cm() {
  return c.jsx('div', { className: 'p-2', children: c.jsx('h3', { children: 'About' }) });
}
const dm = Ad('/')({ component: fm });
function fm() {
  return c.jsx('div', {
    className: 'p-2',
    children: c.jsx('h3', { children: 'Welcome Home!' }),
  });
}
const pm = um.update({ id: '/about', path: '/about', getParentRoute: () => Vs }),
  hm = dm.update({ id: '/', path: '/', getParentRoute: () => Vs }),
  mm = { IndexRoute: hm, AboutRoute: pm },
  vm = Vs._addFileChildren(mm)._addFileTypes(),
  gm = g0({ routeTree: vm, defaultPreload: 'intent' }),
  gu = document.getElementById('app');
gu.innerHTML || Xi.createRoot(gu).render(c.jsx(B0, { router: gm }));
