function k() {}
const D = t => t;

function w(t, n) {
  for (const e in n) t[e] = n[e];
  return t
}

function j(t) {
  return t()
}

function F() {
  return Object.create(null)
}

function E(t) {
  t.forEach(j)
}

function P(t) {
  return typeof t == "function"
}

function S(t, n) {
  return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function"
}
let i;

function U(t, n) {
  return t === n ? !0 : (i || (i = document.createElement("a")), i.href = n, t === i.href)
}

function A(t) {
  return Object.keys(t).length === 0
}

function q(t, ...n) {
  if (t == null) {
    for (const r of n) r(void 0);
    return k
  }
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e
}

function B(t, n, e) {
  t.$$.on_destroy.push(q(n, e))
}

function C(t, n, e, r) {
  if (t) {
    const o = m(t, n, e, r);
    return t[0](o)
  }
}

function m(t, n, e, r) {
  return t[1] && r ? w(e.ctx.slice(), t[1](r(n))) : e.ctx
}

function G(t, n, e, r) {
  if (t[2] && r) {
    const o = t[2](r(e));
    if (n.dirty === void 0) return o;
    if (typeof o == "object") {
      const l = [],
        _ = Math.max(n.dirty.length, o.length);
      for (let s = 0; s < _; s += 1) l[s] = n.dirty[s] | o[s];
      return l
    }
    return n.dirty | o
  }
  return n.dirty
}

function H(t, n, e, r, o, l) {
  if (o) {
    const _ = m(n, e, r, l);
    t.p(_, o)
  }
}

function I(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let r = 0; r < e; r++) n[r] = -1;
    return n
  }
  return -1
}
let f;

function d(t) {
  f = t
}

function b() {
  if (!f) throw new Error("Function called outside component initialization");
  return f
}

function J(t) {
  b().$$.on_mount.push(t)
}

function K(t) {
  b().$$.after_update.push(t)
}

function L(t) {
  b().$$.on_destroy.push(t)
}
const a = [],
  g = [];
let u = [];
const y = [],
  x = Promise.resolve();
let p = !1;

function v() {
  p || (p = !0, x.then(z))
}

function N() {
  return v(), x
}

function O(t) {
  u.push(t)
}
const h = new Set;
let c = 0;

function z() {
  if (c !== 0) return;
  const t = f;
  do {
    try {
      for (; c < a.length;) {
        const n = a[c];
        c++, d(n), M(n.$$)
      }
    } catch (n) {
      throw a.length = 0, c = 0, n
    }
    for (d(null), a.length = 0, c = 0; g.length;) g.pop()();
    for (let n = 0; n < u.length; n += 1) {
      const e = u[n];
      h.has(e) || (h.add(e), e())
    }
    u.length = 0
  } while (a.length);
  for (; y.length;) y.pop()();
  p = !1, h.clear(), d(t)
}

function M(t) {
  if (t.fragment !== null) {
    t.update(), E(t.before_update);
    const n = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(O)
  }
}

function Q(t) {
  const n = [],
    e = [];
  u.forEach(r => t.indexOf(r) === -1 ? n.push(r) : e.push(r)), e.forEach(r => r()), u = n
}
export {
  K as a, g as b, C as c, G as d, B as e, U as f, I as g, D as h, P as i, O as j, L as k, F as l, z as m, k as n, J as o, A as p, Q as q, E as r, S as s, N as t, H as u, f as v, d as w, j as x, a as y, v as z
};