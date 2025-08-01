import {
  s as A,
  a as B,
  o as U,
  t as j,
  b as P
} from "/core/gam-scripts/slowroads/_app/immutable/chunks/scheduler.6cda8fd7.js";
import {
  S as W,
  i as z,
  s as F,
  e as h,
  c as G,
  a as g,
  t as d,
  b as R,
  d as p,
  f as w,
  g as H,
  h as J,
  j as K,
  k as N,
  l as m,
  m as M,
  n as Q,
  o as X,
  p as L,
  q as k,
  r as v,
  u as C,
  v as E,
  w as y
} from "/core/gam-scripts/slowroads/_app/immutable/chunks/index.f66a2b2d.js";
const Y = "modulepreload",
  Z = function(o, e) {
    return new URL(o, e).href
  },
  D = {},
  S = function(e, n, i) {
    if (!n || n.length === 0) return e();
    const s = document.getElementsByTagName("link");
    return Promise.all(n.map(f => {
      if (f = Z(f, i), f in D) return;
      D[f] = !0;
      const t = f.endsWith(".css"),
        r = t ? '[rel="stylesheet"]' : "";
      if (!!i)
        for (let a = s.length - 1; a >= 0; a--) {
          const _ = s[a];
          if (_.href === f && (!t || _.rel === "stylesheet")) return
        } else if (document.querySelector(`link[href="${f}"]${r}`)) return;
      const c = document.createElement("link");
      if (c.rel = t ? "stylesheet" : Y, t || (c.as = "script", c.crossOrigin = ""), c.href = f, document.head.appendChild(c), t) return new Promise((a, _) => {
        c.addEventListener("load", a), c.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${f}`)))
      })
    })).then(() => e()).catch(f => {
      const t = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (t.payload = f, window.dispatchEvent(t), !t.defaultPrevented) throw f
    })
  },
  re = {};

function $(o) {
  let e, n, i;
  var s = o[1][0];

  function f(t, r) {
    return {
      props: {
        data: t[3],
        form: t[2]
      }
    }
  }
  return s && (e = k(s, f(o)), o[12](e)), {
    c() {
      e && v(e.$$.fragment), n = h()
    },
    l(t) {
      e && C(e.$$.fragment, t), n = h()
    },
    m(t, r) {
      e && E(e, t, r), g(t, n, r), i = !0
    },
    p(t, r) {
      if (r & 2 && s !== (s = t[1][0])) {
        if (e) {
          L();
          const l = e;
          d(l.$$.fragment, 1, 0, () => {
            y(l, 1)
          }), R()
        }
        s ? (e = k(s, f(t)), t[12](e), v(e.$$.fragment), p(e.$$.fragment, 1), E(e, n.parentNode, n)) : e = null
      } else if (s) {
        const l = {};
        r & 8 && (l.data = t[3]), r & 4 && (l.form = t[2]), e.$set(l)
      }
    },
    i(t) {
      i || (e && p(e.$$.fragment, t), i = !0)
    },
    o(t) {
      e && d(e.$$.fragment, t), i = !1
    },
    d(t) {
      t && w(n), o[12](null), e && y(e, t)
    }
  }
}

function x(o) {
  let e, n, i;
  var s = o[1][0];

  function f(t, r) {
    return {
      props: {
        data: t[3],
        $$slots: {
          default: [ee]
        },
        $$scope: {
          ctx: t
        }
      }
    }
  }
  return s && (e = k(s, f(o)), o[11](e)), {
    c() {
      e && v(e.$$.fragment), n = h()
    },
    l(t) {
      e && C(e.$$.fragment, t), n = h()
    },
    m(t, r) {
      e && E(e, t, r), g(t, n, r), i = !0
    },
    p(t, r) {
      if (r & 2 && s !== (s = t[1][0])) {
        if (e) {
          L();
          const l = e;
          d(l.$$.fragment, 1, 0, () => {
            y(l, 1)
          }), R()
        }
        s ? (e = k(s, f(t)), t[11](e), v(e.$$.fragment), p(e.$$.fragment, 1), E(e, n.parentNode, n)) : e = null
      } else if (s) {
        const l = {};
        r & 8 && (l.data = t[3]), r & 8215 && (l.$$scope = {
          dirty: r,
          ctx: t
        }), e.$set(l)
      }
    },
    i(t) {
      i || (e && p(e.$$.fragment, t), i = !0)
    },
    o(t) {
      e && d(e.$$.fragment, t), i = !1
    },
    d(t) {
      t && w(n), o[11](null), e && y(e, t)
    }
  }
}

function ee(o) {
  let e, n, i;
  var s = o[1][1];

  function f(t, r) {
    return {
      props: {
        data: t[4],
        form: t[2]
      }
    }
  }
  return s && (e = k(s, f(o)), o[10](e)), {
    c() {
      e && v(e.$$.fragment), n = h()
    },
    l(t) {
      e && C(e.$$.fragment, t), n = h()
    },
    m(t, r) {
      e && E(e, t, r), g(t, n, r), i = !0
    },
    p(t, r) {
      if (r & 2 && s !== (s = t[1][1])) {
        if (e) {
          L();
          const l = e;
          d(l.$$.fragment, 1, 0, () => {
            y(l, 1)
          }), R()
        }
        s ? (e = k(s, f(t)), t[10](e), v(e.$$.fragment), p(e.$$.fragment, 1), E(e, n.parentNode, n)) : e = null
      } else if (s) {
        const l = {};
        r & 16 && (l.data = t[4]), r & 4 && (l.form = t[2]), e.$set(l)
      }
    },
    i(t) {
      i || (e && p(e.$$.fragment, t), i = !0)
    },
    o(t) {
      e && d(e.$$.fragment, t), i = !1
    },
    d(t) {
      t && w(n), o[10](null), e && y(e, t)
    }
  }
}

function I(o) {
  let e, n = o[6] && O(o);
  return {
    c() {
      e = H("div"), n && n.c(), this.h()
    },
    l(i) {
      e = J(i, "DIV", {
        id: !0,
        "aria-live": !0,
        "aria-atomic": !0,
        style: !0
      });
      var s = K(e);
      n && n.l(s), s.forEach(w), this.h()
    },
    h() {
      N(e, "id", "svelte-announcer"), N(e, "aria-live", "assertive"), N(e, "aria-atomic", "true"), m(e, "position", "absolute"), m(e, "left", "0"), m(e, "top", "0"), m(e, "clip", "rect(0 0 0 0)"), m(e, "clip-path", "inset(50%)"), m(e, "overflow", "hidden"), m(e, "white-space", "nowrap"), m(e, "width", "1px"), m(e, "height", "1px")
    },
    m(i, s) {
      g(i, e, s), n && n.m(e, null)
    },
    p(i, s) {
      i[6] ? n ? n.p(i, s) : (n = O(i), n.c(), n.m(e, null)) : n && (n.d(1), n = null)
    },
    d(i) {
      i && w(e), n && n.d()
    }
  }
}

function O(o) {
  let e;
  return {
    c() {
      e = M(o[7])
    },
    l(n) {
      e = Q(n, o[7])
    },
    m(n, i) {
      g(n, e, i)
    },
    p(n, i) {
      i & 128 && X(e, n[7])
    },
    d(n) {
      n && w(e)
    }
  }
}

function te(o) {
  let e, n, i, s, f;
  const t = [x, $],
    r = [];

  function l(a, _) {
    return a[1][1] ? 0 : 1
  }
  e = l(o), n = r[e] = t[e](o);
  let c = o[5] && I(o);
  return {
    c() {
      n.c(), i = F(), c && c.c(), s = h()
    },
    l(a) {
      n.l(a), i = G(a), c && c.l(a), s = h()
    },
    m(a, _) {
      r[e].m(a, _), g(a, i, _), c && c.m(a, _), g(a, s, _), f = !0
    },
    p(a, [_]) {
      let b = e;
      e = l(a), e === b ? r[e].p(a, _) : (L(), d(r[b], 1, 1, () => {
        r[b] = null
      }), R(), n = r[e], n ? n.p(a, _) : (n = r[e] = t[e](a), n.c()), p(n, 1), n.m(i.parentNode, i)), a[5] ? c ? c.p(a, _) : (c = I(a), c.c(), c.m(s.parentNode, s)) : c && (c.d(1), c = null)
    },
    i(a) {
      f || (p(n), f = !0)
    },
    o(a) {
      d(n), f = !1
    },
    d(a) {
      a && (w(i), w(s)), r[e].d(a), c && c.d(a)
    }
  }
}

function ne(o, e, n) {
  let {
    stores: i
  } = e, {
    page: s
  } = e, {
    constructors: f
  } = e, {
    components: t = []
  } = e, {
    form: r
  } = e, {
    data_0: l = null
  } = e, {
    data_1: c = null
  } = e;
  B(i.page.notify);
  let a = !1,
    _ = !1,
    b = null;
  U(() => {
    const u = i.page.subscribe(() => {
      a && (n(6, _ = !0), j().then(() => {
        n(7, b = document.title || "untitled page")
      }))
    });
    return n(5, a = !0), u
  });

  function T(u) {
    P[u ? "unshift" : "push"](() => {
      t[1] = u, n(0, t)
    })
  }

  function V(u) {
    P[u ? "unshift" : "push"](() => {
      t[0] = u, n(0, t)
    })
  }

  function q(u) {
    P[u ? "unshift" : "push"](() => {
      t[0] = u, n(0, t)
    })
  }
  return o.$$set = u => {
    "stores" in u && n(8, i = u.stores), "page" in u && n(9, s = u.page), "constructors" in u && n(1, f = u.constructors), "components" in u && n(0, t = u.components), "form" in u && n(2, r = u.form), "data_0" in u && n(3, l = u.data_0), "data_1" in u && n(4, c = u.data_1)
  }, o.$$.update = () => {
    o.$$.dirty & 768 && i.page.set(s)
  }, [t, f, r, l, c, a, _, b, i, s, T, V, q]
}
class oe extends W {
  constructor(e) {
    super(), z(this, e, ne, te, A, {
      stores: 8,
      page: 9,
      constructors: 1,
      components: 0,
      form: 2,
      data_0: 3,
      data_1: 4
    })
  }
}
const ae = [() => S(() => import("/core/gam-scripts/slowroads/_app/immutable/nodes/0.e1749fc5.js"), ["/core/gam-scripts/slowroads/_app/immutable/nodes/0.e1749fc5.js", "/core/gam-scripts/slowroads/_app/immutable/chunks/scheduler.6cda8fd7.js", "/core/gam-scripts/slowroads/_app/immutable/chunks/index.f66a2b2d.js"], import.meta.url), () => S(() => import("/core/gam-scripts/slowroads/_app/immutable/nodes/1.033497dd.js"), ["/core/gam-scripts/slowroads/_app/immutable/nodes/1.033497dd.js", "/core/gam-scripts/slowroads/_app/immutable/chunks/scheduler.6cda8fd7.js", "/core/gam-scripts/slowroads/_app/immutable/chunks/index.f66a2b2d.js", "/core/gam-scripts/slowroads/_app/immutable/chunks/singletons.9f85c147.js", "/core/gam-scripts/slowroads/_app/immutable/chunks/index.85bbc95f.js"], import.meta.url), () => S(() => import("/core/gam-scripts/slowroads/_app/immutable/nodes/2.8410b8f1.js"), ["/core/gam-scripts/slowroads/_app/immutable/nodes/2.8410b8f1.js", "/core/gam-scripts/slowroads/_app/immutable/chunks/scheduler.6cda8fd7.js", "/core/gam-scripts/slowroads/_app/immutable/chunks/index.f66a2b2d.js", "/core/gam-scripts/slowroads/_app/immutable/chunks/index.85bbc95f.js", "/core/gam-scripts/slowroads/_app/immutable/assets/2.f5ef3045.css"], import.meta.url)],
  le = [],
  fe = {
    "/": [2]
  },
  ce = {
    handleError: ({
      error: o
    }) => {
      console.error(o)
    }
  };
export {
  fe as dictionary, ce as hooks, re as matchers, ae as nodes, oe as root, le as server_loads
};
