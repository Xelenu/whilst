(() => {
  var e = {
      258: e => {
        ! function(t) {
          e.exports = t;
          var r = "listeners",
            o = {
              on: function(e, t) {
                return a(this, e).push(t), this
              },
              once: function(e, t) {
                var r = this;
                return o.originalListener = t, a(r, e).push(o), r;

                function o() {
                  i.call(r, e, o), t.apply(this, arguments)
                }
              },
              off: i,
              emit: function(e, t) {
                var r = this,
                  o = a(r, e, !0);
                if (!o) return !1;
                var n = arguments.length;
                if (1 === n) o.forEach((function(e) {
                  e.call(r)
                }));
                else if (2 === n) o.forEach((function(e) {
                  e.call(r, t)
                }));
                else {
                  var i = Array.prototype.slice.call(arguments, 1);
                  o.forEach((function(e) {
                    e.apply(r, i)
                  }))
                }
                return !!o.length
              }
            };

          function n(e) {
            for (var t in o) e[t] = o[t];
            return e
          }

          function i(e, t) {
            var o, n = this;
            if (arguments.length) {
              if (t) {
                if (o = a(n, e, !0)) {
                  if (!(o = o.filter((function(e) {
                      return e !== t && e.originalListener !== t
                    }))).length) return i.call(n, e);
                  n[r][e] = o
                }
              } else if ((o = n[r]) && (delete o[e], !Object.keys(o).length)) return i.call(n)
            } else delete n[r];
            return n
          }

          function a(e, t, o) {
            if (!o || e[r]) {
              var n = e[r] || (e[r] = {});
              return n[t] || (n[t] = [])
            }
          }
          n(t.prototype), t.mixin = n
        }((function e() {
          if (!(this instanceof e)) return new e
        }))
      }
    },
    t = {};

  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var i = t[o] = {
      exports: {}
    };
    return e[o](i, i.exports, r), i.exports
  }
  r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, {
      a: t
    }), t
  }, r.d = (e, t) => {
    for (var o in t) r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, {
      enumerable: !0,
      get: t[o]
    })
  }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
    "use strict";
    var e = {
        VK: "vk",
        OK: "ok",
        YANDEX: "yandex",
        CRAZY_GAMES: "crazy_games",
        ABSOLUTE_GAMES: "absolute_games",
        GAME_DISTRIBUTION: "game_distribution",
        PLAYGAMA: "playgama",
        WORTAL: "wortal",
        PLAYDECK: "playdeck",
        TELEGRAM: "telegram",
        Y8: "y8",
        LAGGED: "lagged",
        FACEBOOK: "facebook",
        POKI: "poki",
        MOCK: "mock",
        QA_TOOL: "qa_tool"
      },
      t = {
        PLATFORM: "platform",
        PLAYER: "player",
        GAME: "game",
        STORAGE: "storage",
        ADVERTISEMENT: "advertisement",
        SOCIAL: "social",
        DEVICE: "device",
        LEADERBOARD: "leaderboard",
        PAYMENTS: "payments",
        REMOTE_CONFIG: "remote_config",
        CLIPBOARD: "clipboard",
        ACHIEVEMENTS: "achievements"
      },
      o = {
        INTERSTITIAL_STATE_CHANGED: "interstitial_state_changed",
        REWARDED_STATE_CHANGED: "rewarded_state_changed",
        BANNER_STATE_CHANGED: "banner_state_changed",
        VISIBILITY_STATE_CHANGED: "visibility_state_changed"
      },
      n = {
        VISIBLE: "visible",
        HIDDEN: "hidden"
      },
      i = {
        LOADING: "loading",
        OPENED: "opened",
        CLOSED: "closed",
        FAILED: "failed"
      },
      a = {
        LOADING: "loading",
        OPENED: "opened",
        CLOSED: "closed",
        FAILED: "failed",
        REWARDED: "rewarded"
      },
      s = {
        LOADING: "loading",
        SHOWN: "shown",
        HIDDEN: "hidden",
        FAILED: "failed"
      },
      u = {
        LOCAL_STORAGE: "local_storage",
        PLATFORM_INTERNAL: "platform_internal"
      },
      c = {
        DESKTOP: "desktop",
        MOBILE: "mobile",
        TABLET: "tablet",
        TV: "tv"
      },
      l = {
        GAME_READY: "game_ready",
        IN_GAME_LOADING_STARTED: "in_game_loading_started",
        IN_GAME_LOADING_STOPPED: "in_game_loading_stopped",
        GAMEPLAY_STARTED: "gameplay_started",
        GAMEPLAY_STOPPED: "gameplay_stopped",
        PLAYER_GOT_ACHIEVEMENT: "player_got_achievement",
        GAME_OVER: "game_over"
      },
      f = {
        INITIALIZE: "initialize",
        AUTHORIZE_PLAYER: "authorize_player",
        SHARE: "share",
        INVITE_FRIENDS: "invite_friends",
        JOIN_COMMUNITY: "join_community",
        CREATE_POST: "create_post",
        ADD_TO_HOME_SCREEN: "add_to_home_screen",
        ADD_TO_FAVORITES: "add_to_favorites",
        RATE: "rate",
        SET_LEADERBOARD_SCORE: "set_leaderboard_score",
        GET_LEADERBOARD_SCORE: "get_leaderboard_score",
        GET_LEADERBOARD_ENTRIES: "get_leaderboard_entries",
        GET_PURCHASES: "get_purchases",
        GET_CATALOG: "get_catalog",
        PURCHASE: "purchase",
        CONSUME_PURCHASE: "consume_purchase",
        GET_REMOTE_CONFIG: "get_remote_config",
        GET_STORAGE_DATA: "get_storage_data",
        SHOW_LEADERBOARD_NATIVE_POPUP: "show_leaderboard_native_popup",
        CLIPBOARD_WRITE: "clipboard_write",
        ADBLOCK_DETECT: "adblock_detect"
      },
      p = {
        message: "Before using the SDK you must initialize it"
      },
      d = {
        message: "Storage not supported"
      },
      y = {
        message: "Storage not available"
      },
      h = {
        message: "GameDistribution Game ID is undefined"
      },
      m = {
        message: "Y8 Game params are not found"
      },
      v = {
        message: "OK Game params are not found"
      },
      _ = {
        message: "Lagged Game params are not found"
      },
      g = {
        message: "Message is too long"
      };

    function S(e) {
      return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, S(e)
    }

    function b(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, E(o.key), o)
      }
    }

    function E(e) {
      var t = function(e, t) {
        if ("object" != S(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != S(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == S(t) ? t : String(t)
    }

    function P(e, t, r) {
      ! function(e, t) {
        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
      }(e, t), t.set(e, r)
    }

    function A(e, t, r) {
      return function(e, t, r) {
        if (t.set) t.set.call(e, r);
        else {
          if (!t.writable) throw new TypeError("attempted to set read only private field");
          t.value = r
        }
      }(e, O(e, t, "set"), r), r
    }

    function w(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, O(e, t, "get"))
    }

    function O(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var k = new WeakMap,
      D = new WeakMap,
      R = new WeakMap;
    const T = function() {
      function e() {
        var t = this;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), P(this, k, {
          writable: !0,
          value: void 0
        }), P(this, D, {
          writable: !0,
          value: void 0
        }), P(this, R, {
          writable: !0,
          value: void 0
        }), A(this, k, new Promise((function(e, r) {
          A(t, D, e), A(t, R, r)
        })))
      }
      var t, r;
      return t = e, (r = [{
        key: "promise",
        get: function() {
          return w(this, k)
        }
      }, {
        key: "resolve",
        value: function(e) {
          w(this, D).call(this, e)
        }
      }, {
        key: "reject",
        value: function(e) {
          w(this, R).call(this, e)
        }
      }]) && b(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e
    }();

    function I(e) {
      return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, I(e)
    }

    function L(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, j(o.key), o)
      }
    }

    function j(e) {
      var t = function(e, t) {
        if ("object" != I(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != I(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == I(t) ? t : String(t)
    }
    const N = function() {
      function e(t) {
        var r, o, n;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), r = this, n = void 0, (o = j(o = "_platformBridge")) in r ? Object.defineProperty(r, o, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : r[o] = n, this._platformBridge = t
      }
      var t, r;
      return t = e, (r = [{
        key: "initialize",
        value: function() {
          return Promise.resolve()
        }
      }]) && L(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e
    }();

    function C(e) {
      return C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, C(e)
    }

    function B(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, M(o.key), o)
      }
    }

    function M(e) {
      var t = function(e, t) {
        if ("object" != C(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != C(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == C(t) ? t : String(t)
    }

    function F(e, t) {
      return F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, F(e, t)
    }

    function G(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function H(e) {
      return H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, H(e)
    }

    function U(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var z = new WeakMap;
    const W = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && F(e, t)
      }(a, e);
      var t, r, o, n, i = (o = a, n = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = H(o);
        if (n) {
          var r = H(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === C(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return G(e)
        }(this, e)
      });

      function a() {
        var e, t, r, o;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a);
        for (var n = arguments.length, s = new Array(n), u = 0; u < n; u++) s[u] = arguments[u];
        return t = G(e = i.call.apply(i, [this].concat(s))), o = {
            writable: !0,
            value: !1
          },
          function(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
          }(t, r = z), r.set(t, o), e
      }
      return t = a, (r = [{
        key: "id",
        get: function() {
          return this._platformBridge.platformId
        }
      }, {
        key: "sdk",
        get: function() {
          return this._platformBridge.platformSdk
        }
      }, {
        key: "language",
        get: function() {
          return this._platformBridge.platformLanguage
        }
      }, {
        key: "payload",
        get: function() {
          return this._platformBridge.platformPayload
        }
      }, {
        key: "tld",
        get: function() {
          return this._platformBridge.platformTld
        }
      }, {
        key: "sendMessage",
        value: function(e) {
          if (e === l.GAME_READY) {
            if (function(e, t) {
                return t.get ? t.get.call(e) : t.value
              }(this, U(this, z, "get"))) return Promise.reject();
            ! function(e, t, r) {
              (function(e, t, r) {
                if (t.set) t.set.call(e, r);
                else {
                  if (!t.writable) throw new TypeError("attempted to set read only private field");
                  t.value = r
                }
              })(e, U(e, t, "set"), r)
            }(this, z, !0)
          }
          return this._platformBridge.sendMessage(e)
        }
      }, {
        key: "getServerTime",
        value: function() {
          return this._platformBridge.getServerTime()
        }
      }]) && B(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(N);

    function x(e) {
      return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, x(e)
    }

    function V(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Y(o.key), o)
      }
    }

    function Y(e) {
      var t = function(e, t) {
        if ("object" != x(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != x(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == x(t) ? t : String(t)
    }

    function Z(e, t) {
      return Z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, Z(e, t)
    }

    function K(e) {
      return K = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, K(e)
    }
    const J = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Z(e, t)
      }(a, e);
      var t, r, o, n, i = (o = a, n = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = K(o);
        if (n) {
          var r = K(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === x(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function a() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), i.apply(this, arguments)
      }
      return t = a, (r = [{
        key: "isAuthorizationSupported",
        get: function() {
          return this._platformBridge.isPlayerAuthorizationSupported
        }
      }, {
        key: "isAuthorized",
        get: function() {
          return this._platformBridge.isPlayerAuthorized
        }
      }, {
        key: "id",
        get: function() {
          return this._platformBridge.playerId
        }
      }, {
        key: "name",
        get: function() {
          return this._platformBridge.playerName
        }
      }, {
        key: "photos",
        get: function() {
          return this._platformBridge.playerPhotos
        }
      }, {
        key: "authorize",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.authorize(t)
          }
          return this._platformBridge.authorizePlayer(e)
        }
      }]) && V(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(N);
    var q = r(258),
      $ = r.n(q);

    function X(e) {
      return X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, X(e)
    }

    function Q(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ee(o.key), o)
      }
    }

    function ee(e) {
      var t = function(e, t) {
        if ("object" != X(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != X(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == X(t) ? t : String(t)
    }

    function te(e, t) {
      return te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, te(e, t)
    }

    function re(e) {
      return re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, re(e)
    }
    var oe = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && te(e, t)
      }(s, e);
      var t, r, n, i, a = (n = s, i = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = re(n);
        if (i) {
          var r = re(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === X(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function s(e) {
        var t;
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, s), (t = a.call(this, e))._platformBridge.on(o.VISIBILITY_STATE_CHANGED, (function(e) {
          return t.emit(o.VISIBILITY_STATE_CHANGED, e)
        })), t
      }
      return t = s, (r = [{
        key: "visibilityState",
        get: function() {
          return this._platformBridge.visibilityState
        }
      }]) && Q(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), s
    }(N);
    $().mixin(oe.prototype);
    const ne = oe;

    function ie(e) {
      return ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, ie(e)
    }

    function ae(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, se(o.key), o)
      }
    }

    function se(e) {
      var t = function(e, t) {
        if ("object" != ie(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != ie(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == ie(t) ? t : String(t)
    }

    function ue(e, t) {
      return ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, ue(e, t)
    }

    function ce(e) {
      return ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, ce(e)
    }
    const le = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && ue(e, t)
      }(a, e);
      var t, r, o, n, i = (o = a, n = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = ce(o);
        if (n) {
          var r = ce(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === ie(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function a() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), i.apply(this, arguments)
      }
      return t = a, r = [{
        key: "defaultType",
        get: function() {
          return this._platformBridge.defaultStorageType
        }
      }, {
        key: "isSupported",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.isSupported(t)
          }
          return this._platformBridge.isStorageSupported(e)
        }
      }, {
        key: "isAvailable",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.isSupported(t)
          }
          return this._platformBridge.isStorageAvailable(e)
        }
      }, {
        key: "get",
        value: function(e, t) {
          var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (t) {
            var o = t[this._platformBridge.platformId];
            if (o) return this.get(e, o, r)
          }
          var n = t;
          return n || (n = this.defaultType), this._platformBridge.isStorageAvailable(n) ? this._platformBridge.getDataFromStorage(e, n, r) : Promise.reject()
        }
      }, {
        key: "set",
        value: function(e, t, r) {
          if (r) {
            var o = r[this._platformBridge.platformId];
            if (o) return this.set(e, t, o)
          }
          var n = r;
          return n || (n = this.defaultType), this._platformBridge.isStorageAvailable(n) ? this._platformBridge.setDataToStorage(e, t, n) : Promise.reject()
        }
      }, {
        key: "delete",
        value: function(e, t) {
          if (t) {
            var r = t[this._platformBridge.platformId];
            if (r) return this.delete(e, r)
          }
          var o = t;
          return o || (o = this.defaultType), this._platformBridge.isStorageAvailable(o) ? this._platformBridge.deleteDataFromStorage(e, o) : Promise.reject()
        }
      }], r && ae(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(N);

    function fe(e) {
      return fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, fe(e)
    }

    function pe(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, de(o.key), o)
      }
    }

    function de(e) {
      var t = function(e, t) {
        if ("object" != fe(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != fe(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == fe(t) ? t : String(t)
    }

    function ye(e, t) {
      me(e, t), t.add(e)
    }

    function he(e, t, r) {
      me(e, t), t.set(e, r)
    }

    function me(e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function ve(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return r
    }

    function _e(e, t, r) {
      return function(e, t, r) {
        if (t.set) t.set.call(e, r);
        else {
          if (!t.writable) throw new TypeError("attempted to set read only private field");
          t.value = r
        }
      }(e, Se(e, t, "set"), r), r
    }

    function ge(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, Se(e, t, "get"))
    }

    function Se(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var be = "created",
      Ee = "completed",
      Pe = new WeakMap,
      Ae = new WeakMap,
      we = new WeakMap,
      Oe = new WeakMap,
      ke = new WeakSet,
      De = new WeakSet,
      Re = function() {
        function e(t) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), ye(this, De), ye(this, ke), he(this, Pe, {
            writable: !0,
            value: 0
          }), he(this, Ae, {
            writable: !0,
            value: 0
          }), he(this, we, {
            writable: !0,
            value: be
          }), he(this, Oe, {
            writable: !0,
            value: 0
          }), _e(this, Pe, t)
        }
        var t, r;
        return t = e, (r = [{
          key: "state",
          get: function() {
            return ge(this, we)
          }
        }, {
          key: "start",
          value: function() {
            var e = this;
            ge(this, we) !== be && ge(this, we) !== Ee || (_e(this, Ae, ge(this, Pe)), ve(this, ke, Te).call(this, "started"), _e(this, Oe, setInterval((function() {
              _e(e, Ae, ge(e, Ae) - 1), e.emit("time_left_changed", ge(e, Ae)), ge(e, Ae) <= 0 && (ve(e, De, Ie).call(e), ve(e, ke, Te).call(e, Ee))
            }), 1e3)))
          }
        }, {
          key: "stop",
          value: function() {
            ve(this, De, Ie).call(this), ve(this, ke, Te).call(this, "stopped")
          }
        }]) && pe(t.prototype, r), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e
      }();

    function Te(e) {
      _e(this, we, e), this.emit("state_changed", ge(this, we))
    }

    function Ie() {
      _e(this, Ae, 0), clearInterval(ge(this, Oe))
    }
    $().mixin(Re.prototype);
    const Le = Re;

    function je(e) {
      return je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, je(e)
    }

    function Ne(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Ce(o.key), o)
      }
    }

    function Ce(e) {
      var t = function(e, t) {
        if ("object" != je(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != je(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == je(t) ? t : String(t)
    }

    function Be(e, t) {
      return Be = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, Be(e, t)
    }

    function Me(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Fe(e) {
      return Fe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Fe(e)
    }

    function Ge(e, t) {
      Ue(e, t), t.add(e)
    }

    function He(e, t, r) {
      Ue(e, t), t.set(e, r)
    }

    function Ue(e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function ze(e, t, r) {
      return function(e, t, r) {
        if (t.set) t.set.call(e, r);
        else {
          if (!t.writable) throw new TypeError("attempted to set read only private field");
          t.value = r
        }
      }(e, Ve(e, t, "set"), r), r
    }

    function We(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return r
    }

    function xe(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, Ve(e, t, "get"))
    }

    function Ve(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var Ye = new WeakMap,
      Ze = new WeakMap,
      Ke = new WeakSet,
      Je = new WeakSet,
      qe = function(e) {
        ! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && Be(e, t)
        }(l, e);
        var t, r, n, u, c = (n = l, u = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }(), function() {
          var e, t = Fe(n);
          if (u) {
            var r = Fe(this).constructor;
            e = Reflect.construct(t, arguments, r)
          } else e = t.apply(this, arguments);
          return function(e, t) {
            if (t && ("object" === je(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return Me(e)
          }(this, e)
        });

        function l(e) {
          var t;
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, l), Ge(Me(t = c.call(this, e)), Je), Ge(Me(t), Ke), He(Me(t), Ye, {
            writable: !0,
            value: void 0
          }), He(Me(t), Ze, {
            writable: !0,
            value: 60
          }), t._platformBridge.on(o.INTERSTITIAL_STATE_CHANGED, (function(e) {
            e === i.CLOSED && xe(Me(t), Ze) > 0 && We(Me(t), Ke, $e).call(Me(t)), t.emit(o.INTERSTITIAL_STATE_CHANGED, e)
          })), t._platformBridge.on(o.REWARDED_STATE_CHANGED, (function(e) {
            return t.emit(o.REWARDED_STATE_CHANGED, e)
          })), t._platformBridge.on(o.BANNER_STATE_CHANGED, (function(e) {
            return t.emit(o.BANNER_STATE_CHANGED, e)
          })), t
        }
        return t = l, (r = [{
          key: "isBannerSupported",
          get: function() {
            return this._platformBridge.isBannerSupported
          }
        }, {
          key: "bannerState",
          get: function() {
            return this._platformBridge.bannerState
          }
        }, {
          key: "interstitialState",
          get: function() {
            return this._platformBridge.interstitialState
          }
        }, {
          key: "rewardedState",
          get: function() {
            return this._platformBridge.rewardedState
          }
        }, {
          key: "minimumDelayBetweenInterstitial",
          get: function() {
            return xe(this, Ze)
          }
        }, {
          key: "setMinimumDelayBetweenInterstitial",
          value: function(e) {
            if (e) {
              var t = e[this._platformBridge.platformId];
              if (void 0 !== t) return void this.setMinimumDelayBetweenInterstitial(t)
            }
            var r = je(e),
              o = xe(this, Ze);
            switch (r) {
              case "number":
                o = e;
                break;
              case "string":
                if (o = parseInt(e, 10), Number.isNaN(o)) return;
                break;
              default:
                return
            }
            ze(this, Ze, o), xe(this, Ye) && (xe(this, Ye).stop(), We(this, Ke, $e).call(this))
          }
        }, {
          key: "showBanner",
          value: function(e) {
            if (e) {
              var t = e[this._platformBridge.platformId];
              if (t) return void this.showBanner(t)
            }
            this.bannerState !== s.LOADING && this.bannerState !== s.SHOWN && (this._platformBridge._setBannerState(s.LOADING), this.isBannerSupported ? this._platformBridge.showBanner(e) : this._platformBridge._setBannerState(s.FAILED))
          }
        }, {
          key: "hideBanner",
          value: function() {
            this.bannerState !== s.LOADING && this.bannerState !== s.HIDDEN && this.isBannerSupported && this._platformBridge.hideBanner()
          }
        }, {
          key: "showInterstitial",
          value: function(e) {
            if (!We(this, Je, Xe).call(this)) {
              if (e) {
                var t = e[this._platformBridge.platformId];
                if (t) return void this.showInterstitial(t)
              }
              var r = !1;
              e && "boolean" == typeof e.ignoreDelay && (r = e.ignoreDelay), this._platformBridge._setInterstitialState(i.LOADING), !xe(this, Ye) || xe(this, Ye).state === Ee || r ? this._platformBridge.showInterstitial(e) : this._platformBridge._setInterstitialState(i.FAILED)
            }
          }
        }, {
          key: "showRewarded",
          value: function(e) {
            if (!We(this, Je, Xe).call(this)) {
              if (e) {
                var t = e[this._platformBridge.platformId];
                if (t) return void this.showRewarded(t)
              }
              this._platformBridge._setRewardedState(a.LOADING), this._platformBridge.showRewarded(e)
            }
          }
        }, {
          key: "checkAdBlock",
          value: function() {
            return this._platformBridge.checkAdBlock()
          }
        }]) && Ne(t.prototype, r), Object.defineProperty(t, "prototype", {
          writable: !1
        }), l
      }(N);

    function $e() {
      ze(this, Ye, new Le(xe(this, Ze))), xe(this, Ye).start()
    }

    function Xe() {
      return this.interstitialState === i.LOADING || this.interstitialState === i.OPENED || !![a.LOADING, a.OPENED, a.REWARDED].includes(this.rewardedState)
    }
    $().mixin(qe.prototype);
    const Qe = qe;

    function et(e) {
      return et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, et(e)
    }

    function tt(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, rt(o.key), o)
      }
    }

    function rt(e) {
      var t = function(e, t) {
        if ("object" != et(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != et(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == et(t) ? t : String(t)
    }

    function ot(e, t) {
      return ot = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, ot(e, t)
    }

    function nt(e) {
      return nt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, nt(e)
    }
    const it = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && ot(e, t)
      }(a, e);
      var t, r, o, n, i = (o = a, n = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = nt(o);
        if (n) {
          var r = nt(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === et(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function a() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), i.apply(this, arguments)
      }
      return t = a, (r = [{
        key: "isInviteFriendsSupported",
        get: function() {
          return this._platformBridge.isInviteFriendsSupported
        }
      }, {
        key: "isJoinCommunitySupported",
        get: function() {
          return this._platformBridge.isJoinCommunitySupported
        }
      }, {
        key: "isShareSupported",
        get: function() {
          return this._platformBridge.isShareSupported
        }
      }, {
        key: "isCreatePostSupported",
        get: function() {
          return this._platformBridge.isCreatePostSupported
        }
      }, {
        key: "isAddToHomeScreenSupported",
        get: function() {
          return this._platformBridge.isAddToHomeScreenSupported
        }
      }, {
        key: "isAddToFavoritesSupported",
        get: function() {
          return this._platformBridge.isAddToFavoritesSupported
        }
      }, {
        key: "isRateSupported",
        get: function() {
          return this._platformBridge.isRateSupported
        }
      }, {
        key: "isExternalLinksAllowed",
        get: function() {
          return this._platformBridge.isExternalLinksAllowed
        }
      }, {
        key: "inviteFriends",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.inviteFriends(t)
          }
          return this._platformBridge.inviteFriends(e)
        }
      }, {
        key: "joinCommunity",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.joinCommunity(t)
          }
          return this._platformBridge.joinCommunity(e)
        }
      }, {
        key: "share",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.share(t)
          }
          return this._platformBridge.share(e)
        }
      }, {
        key: "createPost",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.createPost(t)
          }
          return this._platformBridge.createPost(e)
        }
      }, {
        key: "addToHomeScreen",
        value: function() {
          return this._platformBridge.addToHomeScreen()
        }
      }, {
        key: "addToFavorites",
        value: function() {
          return this._platformBridge.addToFavorites()
        }
      }, {
        key: "rate",
        value: function() {
          return this._platformBridge.rate()
        }
      }]) && tt(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(N);

    function at(e) {
      return at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, at(e)
    }

    function st(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ut(o.key), o)
      }
    }

    function ut(e) {
      var t = function(e, t) {
        if ("object" != at(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != at(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == at(t) ? t : String(t)
    }

    function ct(e, t) {
      return ct = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, ct(e, t)
    }

    function lt(e) {
      return lt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, lt(e)
    }
    const ft = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && ct(e, t)
      }(a, e);
      var t, r, o, n, i = (o = a, n = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = lt(o);
        if (n) {
          var r = lt(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === at(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function a() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), i.apply(this, arguments)
      }
      return t = a, (r = [{
        key: "type",
        get: function() {
          return this._platformBridge.deviceType
        }
      }]) && st(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(N);

    function pt(e) {
      return pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, pt(e)
    }

    function dt(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, yt(o.key), o)
      }
    }

    function yt(e) {
      var t = function(e, t) {
        if ("object" != pt(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != pt(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == pt(t) ? t : String(t)
    }

    function ht(e, t) {
      return ht = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, ht(e, t)
    }

    function mt(e) {
      return mt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, mt(e)
    }
    const vt = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && ht(e, t)
      }(a, e);
      var t, r, o, n, i = (o = a, n = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = mt(o);
        if (n) {
          var r = mt(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === pt(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function a() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), i.apply(this, arguments)
      }
      return t = a, (r = [{
        key: "isSupported",
        get: function() {
          return this._platformBridge.isLeaderboardSupported
        }
      }, {
        key: "isNativePopupSupported",
        get: function() {
          return this._platformBridge.isLeaderboardNativePopupSupported
        }
      }, {
        key: "isMultipleBoardsSupported",
        get: function() {
          return this._platformBridge.isLeaderboardMultipleBoardsSupported
        }
      }, {
        key: "isSetScoreSupported",
        get: function() {
          return this._platformBridge.isLeaderboardSetScoreSupported
        }
      }, {
        key: "isGetScoreSupported",
        get: function() {
          return this._platformBridge.isLeaderboardGetScoreSupported
        }
      }, {
        key: "isGetEntriesSupported",
        get: function() {
          return this._platformBridge.isLeaderboardGetEntriesSupported
        }
      }, {
        key: "setScore",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.setScore(t)
          }
          return this._platformBridge.setLeaderboardScore(e)
        }
      }, {
        key: "getScore",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.getScore(t)
          }
          return this._platformBridge.getLeaderboardScore(e)
        }
      }, {
        key: "getEntries",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.getEntries(t)
          }
          return this._platformBridge.getLeaderboardEntries(e)
        }
      }, {
        key: "showNativePopup",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.showNativePopup(t)
          }
          return this._platformBridge.showLeaderboardNativePopup(e)
        }
      }]) && dt(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(N);

    function _t(e) {
      return _t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, _t(e)
    }

    function gt(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, St(o.key), o)
      }
    }

    function St(e) {
      var t = function(e, t) {
        if ("object" != _t(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != _t(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == _t(t) ? t : String(t)
    }

    function bt(e, t) {
      return bt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, bt(e, t)
    }

    function Et(e) {
      return Et = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Et(e)
    }
    const Pt = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && bt(e, t)
      }(a, e);
      var t, r, o, n, i = (o = a, n = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Et(o);
        if (n) {
          var r = Et(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === _t(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function a() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), i.apply(this, arguments)
      }
      return t = a, (r = [{
        key: "isSupported",
        get: function() {
          return this._platformBridge.isPaymentsSupported
        }
      }, {
        key: "isGetCatalogSupported",
        get: function() {
          return this._platformBridge.isGetCatalogSupported
        }
      }, {
        key: "isGetPurchasesSupported",
        get: function() {
          return this._platformBridge.isGetPurchasesSupported
        }
      }, {
        key: "isConsumePurchaseSupported",
        get: function() {
          return this._platformBridge.isConsumePurchaseSupported
        }
      }, {
        key: "purchase",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.purchase(t)
          }
          return this._platformBridge.purchase(e)
        }
      }, {
        key: "getPurchases",
        value: function() {
          return this._platformBridge.getPaymentsPurchases()
        }
      }, {
        key: "getCatalog",
        value: function() {
          return this._platformBridge.getPaymentsCatalog()
        }
      }, {
        key: "consumePurchase",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.consumePurchase(t)
          }
          return this._platformBridge.consumePurchase(e)
        }
      }]) && gt(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(N);

    function At(e) {
      return At = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, At(e)
    }

    function wt(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Ot(o.key), o)
      }
    }

    function Ot(e) {
      var t = function(e, t) {
        if ("object" != At(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != At(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == At(t) ? t : String(t)
    }

    function kt(e, t) {
      return kt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, kt(e, t)
    }

    function Dt(e) {
      return Dt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Dt(e)
    }
    const Rt = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && kt(e, t)
      }(a, e);
      var t, r, o, n, i = (o = a, n = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Dt(o);
        if (n) {
          var r = Dt(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === At(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function a() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), i.apply(this, arguments)
      }
      return t = a, (r = [{
        key: "isSupported",
        get: function() {
          return this._platformBridge.isRemoteConfigSupported
        }
      }, {
        key: "get",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.get(t)
          }
          return this._platformBridge.getRemoteConfig(e)
        }
      }]) && wt(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(N);

    function Tt(e) {
      return Tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, Tt(e)
    }

    function It(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Lt(o.key), o)
      }
    }

    function Lt(e) {
      var t = function(e, t) {
        if ("object" != Tt(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != Tt(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == Tt(t) ? t : String(t)
    }

    function jt(e, t) {
      return jt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, jt(e, t)
    }

    function Nt(e) {
      return Nt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Nt(e)
    }
    const Ct = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && jt(e, t)
      }(a, e);
      var t, r, o, n, i = (o = a, n = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Nt(o);
        if (n) {
          var r = Nt(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === Tt(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function a() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), i.apply(this, arguments)
      }
      return t = a, (r = [{
        key: "isSupported",
        get: function() {
          return this._platformBridge.isClipboardSupported
        }
      }, {
        key: "read",
        value: function() {
          return this._platformBridge.clipboardRead()
        }
      }, {
        key: "write",
        value: function(e) {
          return this._platformBridge.clipboardWrite(e)
        }
      }]) && It(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(N);

    function Bt(e) {
      return Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, Bt(e)
    }

    function Mt(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Ft(o.key), o)
      }
    }

    function Ft(e) {
      var t = function(e, t) {
        if ("object" != Bt(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != Bt(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == Bt(t) ? t : String(t)
    }

    function Gt(e, t) {
      return Gt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, Gt(e, t)
    }

    function Ht(e) {
      return Ht = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Ht(e)
    }
    const Ut = function(e) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Gt(e, t)
      }(a, e);
      var t, r, o, n, i = (o = a, n = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Ht(o);
        if (n) {
          var r = Ht(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === Bt(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function a() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), i.apply(this, arguments)
      }
      return t = a, (r = [{
        key: "isSupported",
        get: function() {
          return this._platformBridge.isAchievementsSupported
        }
      }, {
        key: "isGetListSupported",
        get: function() {
          return this._platformBridge.isGetAchievementsListSupported
        }
      }, {
        key: "isNativePopupSupported",
        get: function() {
          return this._platformBridge.isAchievementsNativePopupSupported
        }
      }, {
        key: "unlock",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.unlock(t)
          }
          return this._platformBridge.unlockAchievement(e)
        }
      }, {
        key: "getList",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.getList(t)
          }
          return this._platformBridge.getAchievementsList(e)
        }
      }, {
        key: "showNativePopup",
        value: function(e) {
          if (e) {
            var t = e[this._platformBridge.platformId];
            if (t) return this.showNativePopup(t)
          }
          return this._platformBridge.showAchievementsNativePopup(e)
        }
      }]) && Mt(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), a
    }(N);

    function zt(e) {
      return zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, zt(e)
    }

    function Wt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, o)
      }
      return r
    }

    function xt(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Yt(o.key), o)
      }
    }

    function Vt(e, t, r) {
      return (t = Yt(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    function Yt(e) {
      var t = function(e, t) {
        if ("object" != zt(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != zt(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == zt(t) ? t : String(t)
    }

    function Zt(e, t) {
      var r = function(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
        return t.get(e)
      }(e, t);
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, r)
    }
    var Kt = new WeakMap,
      Jt = function() {
        function t(e) {
          var r, i, a, s = this;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t), Vt(this, "_isInitialized", !1), Vt(this, "_platformSdk", null), Vt(this, "_isPlayerAuthorized", !1), Vt(this, "_playerId", null), Vt(this, "_playerName", null), Vt(this, "_playerPhotos", []), Vt(this, "_visibilityState", null), Vt(this, "_localStorage", null), Vt(this, "_defaultStorageType", u.LOCAL_STORAGE), Vt(this, "_platformStorageCachedData", null), Vt(this, "_isBannerSupported", !1), Vt(this, "_interstitialState", null), Vt(this, "_rewardedState", null), Vt(this, "_bannerState", null), a = {
              writable: !0,
              value: {}
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(r = this, i = Kt), i.set(r, a);
          try {
            this._localStorage = window.localStorage
          } catch (e) {}
          this._visibilityState = "visible" === document.visibilityState ? n.VISIBLE : n.HIDDEN, document.addEventListener("visibilitychange", (function() {
            s._visibilityState = "visible" === document.visibilityState ? n.VISIBLE : n.HIDDEN, s.emit(o.VISIBILITY_STATE_CHANGED, s._visibilityState)
          })), e && (this._options = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? Wt(Object(r), !0).forEach((function(t) {
                Vt(e, t, r[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wt(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }))
            }
            return e
          }({}, e))
        }
        var r, l;
        return r = t, (l = [{
          key: "platformId",
          get: function() {
            return e.MOCK
          }
        }, {
          key: "platformSdk",
          get: function() {
            return this._platformSdk
          }
        }, {
          key: "platformLanguage",
          get: function() {
            var e = navigator.language;
            return "string" == typeof e ? e.substring(0, 2).toLowerCase() : "en"
          }
        }, {
          key: "platformPayload",
          get: function() {
            return new URL(window.location.href).searchParams.get("payload")
          }
        }, {
          key: "platformTld",
          get: function() {
            return null
          }
        }, {
          key: "visibilityState",
          get: function() {
            return this._visibilityState
          }
        }, {
          key: "isPlayerAuthorizationSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isPlayerAuthorized",
          get: function() {
            return this._isPlayerAuthorized
          }
        }, {
          key: "playerId",
          get: function() {
            return this._playerId
          }
        }, {
          key: "playerName",
          get: function() {
            return this._playerName
          }
        }, {
          key: "playerPhotos",
          get: function() {
            return this._playerPhotos
          }
        }, {
          key: "defaultStorageType",
          get: function() {
            return this._defaultStorageType
          }
        }, {
          key: "isBannerSupported",
          get: function() {
            return this._isBannerSupported
          }
        }, {
          key: "bannerState",
          get: function() {
            return this._bannerState
          }
        }, {
          key: "interstitialState",
          get: function() {
            return this._interstitialState
          }
        }, {
          key: "rewardedState",
          get: function() {
            return this._rewardedState
          }
        }, {
          key: "isInviteFriendsSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isJoinCommunitySupported",
          get: function() {
            return !1
          }
        }, {
          key: "isShareSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isCreatePostSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isAddToHomeScreenSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isAddToFavoritesSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isRateSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isExternalLinksAllowed",
          get: function() {
            return !0
          }
        }, {
          key: "deviceType",
          get: function() {
            if (navigator && navigator.userAgent) {
              var e = navigator.userAgent.toLowerCase();
              if (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(e)) return c.MOBILE;
              if (/ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP)))/.test(e)) return c.TABLET
            }
            return c.DESKTOP
          }
        }, {
          key: "isLeaderboardSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isLeaderboardNativePopupSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isLeaderboardMultipleBoardsSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isLeaderboardSetScoreSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isLeaderboardGetScoreSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isLeaderboardGetEntriesSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isPaymentsSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isGetCatalogSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isGetPurchasesSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isConsumePurchaseSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isRemoteConfigSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isClipboardSupported",
          get: function() {
            return !0
          }
        }, {
          key: "isAchievementsSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isGetAchievementsListSupported",
          get: function() {
            return !1
          }
        }, {
          key: "isAchievementsNativePopupSupported",
          get: function() {
            return !1
          }
        }, {
          key: "initialize",
          value: function() {
            return Promise.resolve()
          }
        }, {
          key: "sendMessage",
          value: function() {
            return Promise.resolve()
          }
        }, {
          key: "getServerTime",
          value: function() {
            return new Promise((function(e, t) {
              fetch("https://worldtimeapi.org/api/timezone/Etc/UTC").then((function(e) {
                if (!e.ok) throw new Error("Network response was not ok");
                return e.json()
              })).then((function(t) {
                e(1e3 * t.unixtime)
              })).catch((function() {
                t()
              }))
            }))
          }
        }, {
          key: "authorizePlayer",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "isStorageSupported",
          value: function(e) {
            switch (e) {
              case u.LOCAL_STORAGE:
                return null !== this._localStorage;
              case u.PLATFORM_INTERNAL:
              default:
                return !1
            }
          }
        }, {
          key: "isStorageAvailable",
          value: function(e) {
            switch (e) {
              case u.LOCAL_STORAGE:
                return null !== this._localStorage;
              case u.PLATFORM_INTERNAL:
              default:
                return !1
            }
          }
        }, {
          key: "getDataFromStorage",
          value: function(e, t, r) {
            if (t === u.LOCAL_STORAGE) {
              if (this._localStorage) {
                if (Array.isArray(e)) {
                  for (var o = [], n = 0; n < e.length; n++) o.push(this._getDataFromLocalStorage(e[n], r));
                  return Promise.resolve(o)
                }
                var i = this._getDataFromLocalStorage(e, r);
                return Promise.resolve(i)
              }
              return Promise.reject(d)
            }
            return Promise.reject(d)
          }
        }, {
          key: "setDataToStorage",
          value: function(e, t, r) {
            if (r === u.LOCAL_STORAGE) {
              if (this._localStorage) {
                if (Array.isArray(e)) {
                  for (var o = 0; o < e.length; o++) this._setDataToLocalStorage(e[o], t[o]);
                  return Promise.resolve()
                }
                return this._setDataToLocalStorage(e, t), Promise.resolve()
              }
              return Promise.reject(d)
            }
            return Promise.reject(d)
          }
        }, {
          key: "deleteDataFromStorage",
          value: function(e, t) {
            if (t === u.LOCAL_STORAGE) {
              if (this._localStorage) {
                if (Array.isArray(e)) {
                  for (var r = 0; r < e.length; r++) this._deleteDataFromLocalStorage(e[r]);
                  return Promise.resolve()
                }
                return this._deleteDataFromLocalStorage(e), Promise.resolve()
              }
              return Promise.reject(d)
            }
            return Promise.reject(d)
          }
        }, {
          key: "showBanner",
          value: function() {
            this._setBannerState(s.FAILED)
          }
        }, {
          key: "hideBanner",
          value: function() {
            this._setBannerState(s.HIDDEN)
          }
        }, {
          key: "showInterstitial",
          value: function() {
            this._setInterstitialState(i.FAILED)
          }
        }, {
          key: "showRewarded",
          value: function() {
            this._setRewardedState(a.FAILED)
          }
        }, {
          key: "checkAdBlock",
          value: function() {
            var e = document.createElement("div");
            e.className = "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox", e.style.position = "absolute", e.style.left = "-9999px", e.style.width = "1px", e.style.height = "1px", document.body.appendChild(e);
            var t = {
              method: "HEAD",
              mode: "no-cors"
            };
            return new Promise((function(r) {
              fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", t).then((function(t) {
                t.redirected ? r(t.redirected) : window.setTimeout((function() {
                  var t, o = 0 === e.offsetHeight || "none" === (null === (t = window.getComputedStyle(e)) || void 0 === t ? void 0 : t.display);
                  r(o), e.remove()
                }), 100)
              })).catch((function() {
                r(!0)
              }))
            }))
          }
        }, {
          key: "inviteFriends",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "joinCommunity",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "share",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "createPost",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "addToHomeScreen",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "addToFavorites",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "rate",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "setLeaderboardScore",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "getLeaderboardScore",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "getLeaderboardEntries",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "showLeaderboardNativePopup",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "purchase",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "getPaymentsPurchases",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "getPaymentsCatalog",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "consumePurchase",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "getRemoteConfig",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "clipboardRead",
          value: function() {
            return window.navigator && window.navigator.clipboard ? window.navigator.clipboard.readText() : Promise.reject()
          }
        }, {
          key: "clipboardWrite",
          value: function(e) {
            return window.navigator && window.navigator.clipboard ? window.navigator.clipboard.writeText(e) : Promise.reject()
          }
        }, {
          key: "unlockAchievement",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "getAchievementsList",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "showAchievementsNativePopup",
          value: function() {
            return Promise.reject()
          }
        }, {
          key: "_getDataFromLocalStorage",
          value: function(e, t) {
            var r = this._localStorage.getItem(e);
            if (t && "string" == typeof r) try {
              r = JSON.parse(r)
            } catch (e) {}
            return r
          }
        }, {
          key: "_setDataToLocalStorage",
          value: function(e, t) {
            this._localStorage.setItem(e, "object" === zt(t) ? JSON.stringify(t) : t)
          }
        }, {
          key: "_deleteDataFromLocalStorage",
          value: function(e) {
            this._localStorage.removeItem(e)
          }
        }, {
          key: "_setInterstitialState",
          value: function(e) {
            this._interstitialState === e && e !== i.FAILED || (this._interstitialState = e, this.emit(o.INTERSTITIAL_STATE_CHANGED, this._interstitialState))
          }
        }, {
          key: "_setRewardedState",
          value: function(e) {
            this._rewardedState === e && e !== a.FAILED || (this._rewardedState = e, this.emit(o.REWARDED_STATE_CHANGED, this._rewardedState))
          }
        }, {
          key: "_setBannerState",
          value: function(e) {
            this._bannerState === e && e !== s.FAILED || (this._bannerState = e, this.emit(o.BANNER_STATE_CHANGED, this._bannerState))
          }
        }, {
          key: "_createPromiseDecorator",
          value: function(e) {
            var t = new T;
            return Zt(this, Kt)[e] = t, t
          }
        }, {
          key: "_getPromiseDecorator",
          value: function(e) {
            return Zt(this, Kt)[e]
          }
        }, {
          key: "_resolvePromiseDecorator",
          value: function(e, t) {
            Zt(this, Kt)[e] && (Zt(this, Kt)[e].resolve(t), delete Zt(this, Kt)[e])
          }
        }, {
          key: "_rejectPromiseDecorator",
          value: function(e, t) {
            Zt(this, Kt)[e] && (Zt(this, Kt)[e].reject(t), delete Zt(this, Kt)[e])
          }
        }]) && xt(r.prototype, l), Object.defineProperty(r, "prototype", {
          writable: !1
        }), t
      }();
    $().mixin(Jt.prototype);
    const qt = Jt;
    var $t = function(e) {
        return new Promise((function(t) {
          var r = document.createElement("script");
          r.src = e, r.addEventListener("load", t), document.head.appendChild(r)
        }))
      },
      Xt = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return t.length <= 0 ? Promise.resolve() : new Promise((function(e) {
          var r = setInterval((function() {
            for (var o = window, n = 0; n < t.length; n++) {
              var i = o[t[n]];
              if (!i) return;
              o = i
            }
            e(), clearInterval(r)
          }), 100)
        }))
      };

    function Qt(e) {
      return Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, Qt(e)
    }

    function er(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, tr(o.key), o)
      }
    }

    function tr(e) {
      var t = function(e, t) {
        if ("object" != Qt(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != Qt(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == Qt(t) ? t : String(t)
    }

    function rr() {
      return rr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ir(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, rr.apply(this, arguments)
    }

    function or(e, t) {
      return or = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, or(e, t)
    }

    function nr(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function ir(e) {
      return ir = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, ir(e)
    }

    function ar(e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function sr(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return r
    }

    function ur(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, cr(e, t, "get"))
    }

    function cr(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var lr = new WeakMap,
      fr = new WeakSet;

    function pr(e, t) {
      var r = this,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "result",
        i = this._getPromiseDecorator(e);
      return i || (i = this._createPromiseDecorator(e), this._platformSdk.send(t, o).then((function(t) {
        t[n] ? r._resolvePromiseDecorator(e) : r._rejectPromiseDecorator(e)
      })).catch((function(t) {
        r._rejectPromiseDecorator(e, t)
      }))), i.promise
    }
    const dr = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && or(e, t)
      }(d, t);
      var r, o, n, l, p = (n = d, l = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = ir(n);
        if (l) {
          var r = ir(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === Qt(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return nr(e)
        }(this, e)
      });

      function d() {
        var e, t, r;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, d);
        for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
        return ar(t = nr(e = p.call.apply(p, [this].concat(n))), r = fr), r.add(t),
          function(e, t, r) {
            ar(e, t), t.set(e, {
              writable: !0,
              value: void 0
            })
          }(nr(e), lr), e
      }
      return r = d, (o = [{
        key: "platformId",
        get: function() {
          return e.VK
        }
      }, {
        key: "platformLanguage",
        get: function() {
          var e = new URL(window.location.href);
          if (e.searchParams.has("language")) {
            var t = e.searchParams.get("language"),
              r = 0;
            try {
              r = parseInt(t, 10)
            } catch (e) {
              r = 0
            }
            switch (r) {
              case 0:
              default:
                return "ru";
              case 1:
                return "uk";
              case 2:
                return "be";
              case 3:
                return "en"
            }
          }
          return rr(ir(d.prototype), "platformLanguage", this)
        }
      }, {
        key: "platformPayload",
        get: function() {
          var e = new URL(window.location.href);
          return e.searchParams.has("hash") ? e.searchParams.get("hash") : rr(ir(d.prototype), "platformPayload", this)
        }
      }, {
        key: "deviceType",
        get: function() {
          switch (ur(this, lr)) {
            case "html5_ios":
            case "html5_android":
            case "html5_mobile":
              return c.MOBILE;
            case "web":
              return c.DESKTOP;
            default:
              return rr(ir(d.prototype), "deviceType", this)
          }
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isPlayerAuthorized",
        get: function() {
          return !0
        }
      }, {
        key: "isInviteFriendsSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isJoinCommunitySupported",
        get: function() {
          return !0
        }
      }, {
        key: "isShareSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isAddToHomeScreenSupported",
        get: function() {
          return "html5_android" === ur(this, lr)
        }
      }, {
        key: "isAddToFavoritesSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardSupported",
        get: function() {
          return this.deviceType === c.MOBILE
        }
      }, {
        key: "isLeaderboardNativePopupSupported",
        get: function() {
          return this.deviceType === c.MOBILE
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t, r, o, n = this._getPromiseDecorator(f.INITIALIZE);
          if (!n) {
            n = this._createPromiseDecorator(f.INITIALIZE);
            var i = new URL(window.location.href);
            i.searchParams.has("platform") && (t = this, r = lr, o = i.searchParams.get("platform"), function(e, t, r) {
              if (t.set) t.set.call(e, r);
              else {
                if (!t.writable) throw new TypeError("attempted to set read only private field");
                t.value = r
              }
            }(t, cr(t, r, "set"), o)), $t("https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js").then((function() {
              Xt("vkBridge").then((function() {
                e._platformSdk = window.vkBridge, e._platformSdk.send("VKWebAppInit").then((function() {
                  e._isBannerSupported = !0, e._platformSdk.send("VKWebAppGetUserInfo").then((function(t) {
                    t && (e._playerId = t.id, e._playerName = "".concat(t.first_name, " ").concat(t.last_name), t.photo_100 && e._playerPhotos.push(t.photo_100), t.photo_200 && e._playerPhotos.push(t.photo_200), t.photo_max_orig && e._playerPhotos.push(t.photo_max_orig))
                  })).finally((function() {
                    e._isInitialized = !0, e._defaultStorageType = u.PLATFORM_INTERNAL, e._resolvePromiseDecorator(f.INITIALIZE)
                  }))
                }))
              }))
            }))
          }
          return n.promise
        }
      }, {
        key: "authorizePlayer",
        value: function() {
          return Promise.resolve()
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || rr(ir(d.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || rr(ir(d.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, t, r) {
          var o = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, n) {
            var i = Array.isArray(e) ? e : [e];
            o._platformSdk.send("VKWebAppStorageGet", {
              keys: i
            }).then((function(o) {
              if (Array.isArray(e)) {
                var n = [];
                return i.forEach((function(e) {
                  var t = o.keys.findIndex((function(t) {
                    return t.key === e
                  }));
                  if (t < 0) n.push(null);
                  else if ("" !== o.keys[t].value) {
                    var i = o.keys[t].value;
                    if (r) try {
                      i = JSON.parse(o.keys[t].value)
                    } catch (e) {}
                    n.push(i)
                  } else n.push(null)
                })), void t(n)
              }
              if ("" !== o.keys[0].value) {
                var a = o.keys[0].value;
                if (r) try {
                  a = JSON.parse(o.keys[0].value)
                } catch (e) {}
                t(a)
              } else t(null)
            })).catch((function(e) {
              e && e.error_data && e.error_data.error_reason ? n(e.error_data.error_reason) : n()
            }))
          })) : rr(ir(d.prototype), "getDataFromStorage", this).call(this, e, t, r)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          var o = this;
          if (r === u.PLATFORM_INTERNAL) {
            if (Array.isArray(e)) {
              for (var n = [], i = 0; i < e.length; i++) {
                var a = {
                  key: e[i],
                  value: t[i]
                };
                "string" != typeof t[i] && (a.value = JSON.stringify(t[i])), n.push(this._platformSdk.send("VKWebAppStorageSet", a))
              }
              return Promise.all(n)
            }
            var s = {
              key: e,
              value: t
            };
            return "string" != typeof t && (s.value = JSON.stringify(t)), new Promise((function(e, t) {
              o._platformSdk.send("VKWebAppStorageSet", s).then((function() {
                e()
              })).catch((function(e) {
                e && e.error_data && e.error_data.error_reason ? t(e.error_data.error_reason) : t()
              }))
            }))
          }
          return rr(ir(d.prototype), "setDataToStorage", this).call(this, e, t, r)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          if (t === u.PLATFORM_INTERNAL) {
            if (Array.isArray(e)) {
              for (var r = [], o = 0; o < e.length; o++) r.push(this.setDataToStorage(e[o], "", t));
              return Promise.all(r)
            }
            return this.setDataToStorage(e, "", t)
          }
          return rr(ir(d.prototype), "deleteDataFromStorage", this).call(this, e, t)
        }
      }, {
        key: "showBanner",
        value: function(e) {
          var t = this,
            r = "bottom",
            o = "resize",
            n = !1;
          e && ("string" == typeof e.position && (r = e.position), "string" == typeof e.layoutType && (o = e.layoutType), "boolean" == typeof e.canClose && (n = e.canClose)), this._platformSdk.send("VKWebAppShowBannerAd", {
            banner_location: r,
            layout_type: o,
            can_close: n
          }).then((function(e) {
            e.result ? t._setBannerState(s.SHOWN) : t._setBannerState(s.FAILED)
          })).catch((function() {
            t._setBannerState(s.FAILED)
          }))
        }
      }, {
        key: "hideBanner",
        value: function() {
          var e = this;
          this._platformSdk.send("VKWebAppHideBannerAd").then((function(t) {
            t.result && e._setBannerState(s.HIDDEN)
          }))
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e = this;
          this._platformSdk.send("VKWebAppCheckNativeAds", {
            ad_format: "interstitial"
          }).then((function(t) {
            t.result && e._setInterstitialState(i.OPENED)
          })).finally((function() {
            e._platformSdk.send("VKWebAppShowNativeAds", {
              ad_format: "interstitial"
            }).then((function(t) {
              e._setInterstitialState(t.result ? i.CLOSED : i.FAILED)
            })).catch((function() {
              e._setInterstitialState(i.FAILED)
            }))
          }))
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e = this;
          this._platformSdk.send("VKWebAppCheckNativeAds", {
            ad_format: "reward",
            use_waterfall: !0
          }).then((function(t) {
            t.result && e._setRewardedState(a.OPENED)
          })).finally((function() {
            e._platformSdk.send("VKWebAppShowNativeAds", {
              ad_format: "reward",
              use_waterfall: !0
            }).then((function(t) {
              t.result ? (e._setRewardedState(a.REWARDED), e._setRewardedState(a.CLOSED)) : e._setRewardedState(a.FAILED)
            })).catch((function() {
              e._setRewardedState(a.FAILED)
            }))
          }))
        }
      }, {
        key: "inviteFriends",
        value: function() {
          return sr(this, fr, pr).call(this, f.INVITE_FRIENDS, "VKWebAppShowInviteBox", {}, "success")
        }
      }, {
        key: "joinCommunity",
        value: function(e) {
          if (!e || !e.groupId) return Promise.reject();
          var t = e.groupId;
          return "string" == typeof t && (t = parseInt(t, 10), Number.isNaN(t)) ? Promise.reject() : sr(this, fr, pr).call(this, f.JOIN_COMMUNITY, "VKWebAppJoinGroup", {
            group_id: t
          }).then((function() {
            window.open("https://vk.com/public".concat(t))
          }))
        }
      }, {
        key: "share",
        value: function(e) {
          var t = {};
          return e && e.link && (t.link = e.link), sr(this, fr, pr).call(this, f.SHARE, "VKWebAppShare", t, "type")
        }
      }, {
        key: "addToHomeScreen",
        value: function() {
          return this.isAddToHomeScreenSupported ? sr(this, fr, pr).call(this, f.ADD_TO_HOME_SCREEN, "VKWebAppAddToHomeScreen") : Promise.reject()
        }
      }, {
        key: "addToFavorites",
        value: function() {
          return sr(this, fr, pr).call(this, f.ADD_TO_FAVORITES, "VKWebAppAddToFavorites")
        }
      }, {
        key: "showLeaderboardNativePopup",
        value: function(e) {
          if (!this.isLeaderboardNativePopupSupported) return Promise.reject();
          if (!e || !e.userResult) return Promise.reject();
          var t = {
            user_result: e.userResult
          };
          return "boolean" == typeof e.global && (t.global = e.global ? 1 : 0), sr(this, fr, pr).call(this, f.SHOW_LEADERBOARD_NATIVE_POPUP, "VKWebAppShowLeaderBoardBox", t)
        }
      }, {
        key: "clipboardWrite",
        value: function(e) {
          return sr(this, fr, pr).call(this, f.CLIPBOARD_WRITE, "VKWebAppCopyText", {
            text: e
          })
        }
      }]) && er(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), d
    }(qt);

    function yr(e) {
      return yr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, yr(e)
    }

    function hr(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, o)
      }
      return r
    }

    function mr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? hr(Object(r), !0).forEach((function(t) {
          var o, n, i;
          o = e, n = t, i = r[t], (n = _r(n)) in o ? Object.defineProperty(o, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : o[n] = i
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hr(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    function vr(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _r(o.key), o)
      }
    }

    function _r(e) {
      var t = function(e, t) {
        if ("object" != yr(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != yr(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == yr(t) ? t : String(t)
    }

    function gr() {
      return gr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Er(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, gr.apply(this, arguments)
    }

    function Sr(e, t) {
      return Sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, Sr(e, t)
    }

    function br(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Er(e) {
      return Er = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Er(e)
    }

    function Pr(e, t, r) {
      Ar(e, t), t.set(e, r)
    }

    function Ar(e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function wr(e, t, r) {
      return function(e, t, r) {
        if (t.set) t.set.call(e, r);
        else {
          if (!t.writable) throw new TypeError("attempted to set read only private field");
          t.value = r
        }
      }(e, Dr(e, t, "set"), r), r
    }

    function Or(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return r
    }

    function kr(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, Dr(e, t, "get"))
    }

    function Dr(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var Rr = new WeakMap,
      Tr = new WeakMap,
      Ir = new WeakMap,
      Lr = new WeakMap,
      jr = new WeakSet;

    function Nr(e) {
      var t = this;
      return new Promise((function(r) {
        var o = {
          scopes: !1
        };
        e && "boolean" == typeof e.scopes && (o.scopes = e.scopes), t._platformSdk.getPlayer(o).then((function(e) {
          t._playerId = e.getUniqueID(), t._isPlayerAuthorized = "lite" !== e.getMode(), t._defaultStorageType = t._isPlayerAuthorized ? u.PLATFORM_INTERNAL : u.LOCAL_STORAGE;
          var r = e.getName();
          "" !== r && (t._playerName = r), t._playerPhotos = [];
          var o = e.getPhoto("small"),
            n = e.getPhoto("medium"),
            i = e.getPhoto("large");
          o && t._playerPhotos.push(o), n && t._playerPhotos.push(n), i && t._playerPhotos.push(i), wr(t, Tr, e)
        })).finally((function() {
          r()
        }))
      }))
    }
    const Cr = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Sr(e, t)
      }(y, t);
      var r, o, n, p, d = (n = y, p = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Er(n);
        if (p) {
          var r = Er(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === yr(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return br(e)
        }(this, e)
      });

      function y() {
        var e, t, r;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, y);
        for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
        return Ar(t = br(e = d.call.apply(d, [this].concat(n))), r = jr), r.add(t), Pr(br(e), Rr, {
          writable: !0,
          value: !1
        }), Pr(br(e), Tr, {
          writable: !0,
          value: null
        }), Pr(br(e), Ir, {
          writable: !0,
          value: null
        }), Pr(br(e), Lr, {
          writable: !0,
          value: null
        }), e
      }
      return r = y, (o = [{
        key: "platformId",
        get: function() {
          return e.YANDEX
        }
      }, {
        key: "platformLanguage",
        get: function() {
          return this._platformSdk ? this._platformSdk.environment.i18n.lang.toLowerCase() : gr(Er(y.prototype), "platformLanguage", this)
        }
      }, {
        key: "platformTld",
        get: function() {
          return this._platformSdk ? this._platformSdk.environment.i18n.tld.toLowerCase() : gr(Er(y.prototype), "platformTld", this)
        }
      }, {
        key: "deviceType",
        get: function() {
          switch (this._platformSdk && this._platformSdk.deviceInfo.type) {
            case c.DESKTOP:
              return c.DESKTOP;
            case c.MOBILE:
              return c.MOBILE;
            case c.TABLET:
              return c.TABLET;
            case c.TV:
              return c.TV;
            default:
              return gr(Er(y.prototype), "deviceType", this)
          }
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isAddToHomeScreenSupported",
        get: function() {
          return kr(this, Rr)
        }
      }, {
        key: "isRateSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isExternalLinksAllowed",
        get: function() {
          return !1
        }
      }, {
        key: "isLeaderboardSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardMultipleBoardsSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardSetScoreSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardGetScoreSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardGetEntriesSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isPaymentsSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isGetCatalogSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isGetPurchasesSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isConsumePurchaseSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isRemoteConfigSupported",
        get: function() {
          return !0
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), $t("/sdk.js").then((function() {
            Xt("YaGames", "init").then((function() {
              window.YaGames.init().then((function(t) {
                var r;
                e._platformSdk = t;
                var o = Or(e, jr, Nr).call(e),
                  n = null === (r = e._platformSdk.features.PluginEngineDataReporterAPI) || void 0 === r ? void 0 : r.report({
                    engineName: "",
                    engineVersion: "",
                    pluginName: "playgama-bridge",
                    pluginVersion: "1.20.0"
                  }),
                  i = e._platformSdk.shortcut.canShowPrompt().then((function(t) {
                    wr(e, Rr, t.canShow)
                  })),
                  a = new Promise((function(e) {
                    setTimeout(e, 1e3)
                  })),
                  u = Promise.race([i, a]),
                  c = e._platformSdk.getLeaderboards().then((function(t) {
                    wr(e, Ir, t)
                  })),
                  l = e._platformSdk.getPayments().then((function(t) {
                    wr(e, Lr, t)
                  }));
                e._isBannerSupported = !0;
                var p = e._platformSdk.adv.getBannerAdvStatus().then((function(t) {
                  t.stickyAdvIsShowing && e._setBannerState(s.SHOWN)
                }));
                Promise.all([o, n, u, c, l, p]).finally((function() {
                  e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE)
                }))
              }))
            }))
          }))), t.promise
        }
      }, {
        key: "sendMessage",
        value: function(e) {
          switch (e) {
            case l.GAME_READY:
              var t;
              return null === (t = this._platformSdk.features.LoadingAPI) || void 0 === t || t.ready(), Promise.resolve();
            case l.GAMEPLAY_STARTED:
              var r;
              return null === (r = this._platformSdk.features.GameplayAPI) || void 0 === r || r.start(), Promise.resolve();
            case l.GAMEPLAY_STOPPED:
              var o;
              return null === (o = this._platformSdk.features.GameplayAPI) || void 0 === o || o.stop(), Promise.resolve();
            default:
              return gr(Er(y.prototype), "sendMessage", this).call(this, e)
          }
        }
      }, {
        key: "getServerTime",
        value: function() {
          var e = this;
          return new Promise((function(t) {
            t(e._platformSdk.serverTime())
          }))
        }
      }, {
        key: "authorizePlayer",
        value: function(e) {
          var t = this,
            r = this._getPromiseDecorator(f.AUTHORIZE_PLAYER);
          return r || (r = this._createPromiseDecorator(f.AUTHORIZE_PLAYER), this._isPlayerAuthorized ? Or(this, jr, Nr).call(this, e).then((function() {
            t._resolvePromiseDecorator(f.AUTHORIZE_PLAYER)
          })) : this._platformSdk.auth.openAuthDialog().then((function() {
            Or(t, jr, Nr).call(t, e).then((function() {
              t._resolvePromiseDecorator(f.AUTHORIZE_PLAYER)
            }))
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.AUTHORIZE_PLAYER, e)
          }))), r.promise
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || gr(Er(y.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL ? this._isPlayerAuthorized : gr(Er(y.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, t, r) {
          var o = this;
          return t === u.PLATFORM_INTERNAL ? this._isPlayerAuthorized ? new Promise((function(t, r) {
            if (o._platformStorageCachedData) {
              if (Array.isArray(e)) {
                for (var n = [], i = 0; i < e.length; i++) {
                  var a = void 0 === o._platformStorageCachedData[e[i]] ? null : o._platformStorageCachedData[e[i]];
                  n.push(a)
                }
                return void t(n)
              }
              t(void 0 === o._platformStorageCachedData[e] ? null : o._platformStorageCachedData[e])
            } else kr(o, Tr) ? kr(o, Tr).getData().then((function(r) {
              if (o._platformStorageCachedData = r, Array.isArray(e)) {
                for (var n = [], i = 0; i < e.length; i++) {
                  var a = void 0 === o._platformStorageCachedData[e[i]] ? null : o._platformStorageCachedData[e[i]];
                  n.push(a)
                }
                t(n)
              } else t(void 0 === o._platformStorageCachedData[e] ? null : o._platformStorageCachedData[e])
            })).catch((function(e) {
              r(e)
            })) : r()
          })) : Promise.reject() : gr(Er(y.prototype), "getDataFromStorage", this).call(this, e, t, r)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          var o = this;
          return r === u.PLATFORM_INTERNAL ? new Promise((function(r, n) {
            if (kr(o, Tr)) {
              var i = null !== o._platformStorageCachedData ? mr({}, o._platformStorageCachedData) : {};
              if (Array.isArray(e))
                for (var a = 0; a < e.length; a++) i[e[a]] = t[a];
              else i[e] = t;
              kr(o, Tr).setData(i).then((function() {
                o._platformStorageCachedData = i, r()
              })).catch((function(e) {
                n(e)
              }))
            } else n()
          })) : gr(Er(y.prototype), "setDataToStorage", this).call(this, e, t, r)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          var r = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, o) {
            if (kr(r, Tr)) {
              var n = null !== r._platformStorageCachedData ? mr({}, r._platformStorageCachedData) : {};
              if (Array.isArray(e))
                for (var i = 0; i < e.length; i++) delete n[e[i]];
              else delete n[e];
              kr(r, Tr).setData(n).then((function() {
                r._platformStorageCachedData = n, t()
              })).catch((function(e) {
                o(e)
              }))
            } else o()
          })) : gr(Er(y.prototype), "deleteDataFromStorage", this).call(this, e, t)
        }
      }, {
        key: "showBanner",
        value: function() {
          var e = this;
          this._platformSdk.adv.showBannerAdv().then((function(t) {
            t.stickyAdvIsShowing ? e._setBannerState(s.SHOWN) : e._setBannerState(s.FAILED)
          })).catch((function() {
            e._setBannerState(s.FAILED)
          }))
        }
      }, {
        key: "hideBanner",
        value: function() {
          var e = this;
          this._platformSdk.adv.hideBannerAdv().then((function(t) {
            t.stickyAdvIsShowing || e._setBannerState(s.HIDDEN)
          }))
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e = this;
          this._platformSdk.adv.showFullscreenAdv({
            callbacks: {
              onOpen: function() {
                e._setInterstitialState(i.OPENED)
              },
              onClose: function(t) {
                t ? e._setInterstitialState(i.CLOSED) : e._setInterstitialState(i.FAILED)
              },
              onError: function(e) {
                console.error(e)
              }
            }
          })
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e = this;
          this._platformSdk.adv.showRewardedVideo({
            callbacks: {
              onOpen: function() {
                e._setRewardedState(a.OPENED)
              },
              onRewarded: function() {
                e._setRewardedState(a.REWARDED)
              },
              onClose: function() {
                e._setRewardedState(a.CLOSED)
              },
              onError: function() {
                e._setRewardedState(a.FAILED)
              }
            }
          })
        }
      }, {
        key: "checkAdBlock",
        value: function() {
          return new Promise((function(e) {
            e(!1)
          }))
        }
      }, {
        key: "addToHomeScreen",
        value: function() {
          var e = this;
          if (!this.isAddToHomeScreenSupported) return Promise.reject();
          var t = this._getPromiseDecorator(f.ADD_TO_HOME_SCREEN);
          return t || (t = this._createPromiseDecorator(f.ADD_TO_HOME_SCREEN), this._platformSdk.shortcut.showPrompt().then((function(t) {
            "accepted" !== t.outcome ? e._rejectPromiseDecorator(f.ADD_TO_HOME_SCREEN) : e._resolvePromiseDecorator(f.ADD_TO_HOME_SCREEN)
          })).catch((function(t) {
            e._rejectPromiseDecorator(f.ADD_TO_HOME_SCREEN, t)
          }))), t.promise
        }
      }, {
        key: "rate",
        value: function() {
          var e = this,
            t = this._getPromiseDecorator(f.RATE);
          return t || (t = this._createPromiseDecorator(f.RATE), this._platformSdk.feedback.canReview().then((function(t) {
            t.value ? e._platformSdk.feedback.requestReview().then((function(t) {
              t.feedbackSent ? e._resolvePromiseDecorator(f.RATE) : e._rejectPromiseDecorator(f.RATE)
            })).catch((function(t) {
              e._rejectPromiseDecorator(f.RATE, t)
            })) : e._rejectPromiseDecorator(f.RATE, t.reason)
          })).catch((function(t) {
            e._rejectPromiseDecorator(f.RATE, t)
          }))), t.promise
        }
      }, {
        key: "setLeaderboardScore",
        value: function(e) {
          var t = this;
          if (!this._isPlayerAuthorized) return Promise.reject();
          if (!(kr(this, Ir) && e && e.score && e.leaderboardName)) return Promise.reject();
          var r = this._getPromiseDecorator(f.SET_LEADERBOARD_SCORE);
          return r || (r = this._createPromiseDecorator(f.SET_LEADERBOARD_SCORE), kr(this, Ir).setLeaderboardScore(e.leaderboardName, "string" == typeof e.score ? parseInt(e.score, 10) : e.score).then((function() {
            t._resolvePromiseDecorator(f.SET_LEADERBOARD_SCORE)
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.SET_LEADERBOARD_SCORE, e)
          }))), r.promise
        }
      }, {
        key: "getLeaderboardScore",
        value: function(e) {
          var t = this;
          if (!this._isPlayerAuthorized) return Promise.reject();
          if (!kr(this, Ir) || !e || !e.leaderboardName) return Promise.reject();
          var r = this._getPromiseDecorator(f.GET_LEADERBOARD_SCORE);
          return r || (r = this._createPromiseDecorator(f.GET_LEADERBOARD_SCORE), kr(this, Ir).getLeaderboardPlayerEntry(e.leaderboardName).then((function(e) {
            t._resolvePromiseDecorator(f.GET_LEADERBOARD_SCORE, e.score)
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.GET_LEADERBOARD_SCORE, e)
          }))), r.promise
        }
      }, {
        key: "getLeaderboardEntries",
        value: function(e) {
          var t = this;
          if (!kr(this, Ir) || !e || !e.leaderboardName) return Promise.reject();
          var r = this._getPromiseDecorator(f.GET_LEADERBOARD_ENTRIES);
          if (!r) {
            r = this._createPromiseDecorator(f.GET_LEADERBOARD_ENTRIES);
            var o = {};
            o.includeUser = "boolean" == typeof e.includeUser && e.includeUser, o.quantityAround = "string" == typeof e.quantityAround ? parseInt(e.quantityAround, 10) : e.quantityAround, Number.isNaN(o.quantityAround) && (o.quantityAround = 5), o.quantityTop = "string" == typeof e.quantityTop ? parseInt(e.quantityTop, 10) : e.quantityTop, Number.isNaN(o.quantityTop) && (o.quantityTop = 5), kr(this, Ir).getLeaderboardEntries(e.leaderboardName, o).then((function(e) {
              var r = null;
              e && e.entries.length > 0 && (r = e.entries.map((function(e) {
                return {
                  id: e.player.uniqueID,
                  score: e.score,
                  rank: e.rank,
                  name: e.player.publicName,
                  photo: e.player.getAvatarSrc("large")
                }
              }))), t._resolvePromiseDecorator(f.GET_LEADERBOARD_ENTRIES, r)
            })).catch((function(e) {
              t._rejectPromiseDecorator(f.GET_LEADERBOARD_ENTRIES, e)
            }))
          }
          return r.promise
        }
      }, {
        key: "purchase",
        value: function(e) {
          var t = this;
          if (!kr(this, Lr) || !e.id) return Promise.reject();
          var r = this._getPromiseDecorator(f.PURCHASE);
          return r || (r = this._createPromiseDecorator(f.PURCHASE), kr(this, Lr).purchase(e).then((function(e) {
            t._resolvePromiseDecorator(f.PURCHASE, e)
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.PURCHASE, e)
          }))), r.promise
        }
      }, {
        key: "getPaymentsPurchases",
        value: function() {
          var e = this;
          if (!kr(this, Lr)) return Promise.reject();
          var t = this._getPromiseDecorator(f.GET_PURCHASES);
          return t || (t = this._createPromiseDecorator(f.GET_PURCHASES), kr(this, Lr).getPurchases().then((function(t) {
            var r = t.map((function(e) {
              return {
                developerPayload: e.developerPayload,
                productID: e.productID,
                purchaseToken: e.purchaseToken
              }
            }));
            e._resolvePromiseDecorator(f.GET_PURCHASES, r)
          })).catch((function(t) {
            e._rejectPromiseDecorator(f.GET_PURCHASES, t)
          }))), t.promise
        }
      }, {
        key: "getPaymentsCatalog",
        value: function() {
          var e = this;
          if (!kr(this, Lr)) return Promise.reject();
          var t = this._getPromiseDecorator(f.GET_CATALOG);
          return t || (t = this._createPromiseDecorator(f.GET_CATALOG), kr(this, Lr).getCatalog().then((function(t) {
            var r = t.map((function(e) {
              return {
                id: e.id,
                description: e.description,
                imageURI: e.imageURI,
                price: e.price,
                priceCurrencyCode: e.priceCurrencyCode,
                priceValue: e.priceValue,
                priceCurrencyImage: e.getPriceCurrencyImage("medium"),
                title: e.title
              }
            }));
            e._resolvePromiseDecorator(f.GET_CATALOG, r)
          })).catch((function(t) {
            e._rejectPromiseDecorator(f.GET_CATALOG, t)
          }))), t.promise
        }
      }, {
        key: "consumePurchase",
        value: function(e) {
          var t = this;
          if (!kr(this, Lr) || !e.purchaseToken) return Promise.reject();
          var r = this._getPromiseDecorator(f.CONSUME_PURCHASE);
          return r || (r = this._createPromiseDecorator(f.CONSUME_PURCHASE), kr(this, Lr).consumePurchase(e.purchaseToken).then((function(e) {
            t._resolvePromiseDecorator(f.CONSUME_PURCHASE, e)
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.CONSUME_PURCHASE, e)
          }))), r.promise
        }
      }, {
        key: "getRemoteConfig",
        value: function(e) {
          var t = this;
          if (!this._platformSdk) return Promise.reject();
          var r = e;
          r || (r = {}), r.clientFeatures || (r.clientFeatures = []);
          var o = this._getPromiseDecorator(f.GET_REMOTE_CONFIG);
          return o || (o = this._createPromiseDecorator(f.GET_REMOTE_CONFIG), this._platformSdk.getFlags(r).then((function(e) {
            t._resolvePromiseDecorator(f.GET_REMOTE_CONFIG, e)
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.GET_REMOTE_CONFIG, e)
          }))), o.promise
        }
      }, {
        key: "clipboardWrite",
        value: function(e) {
          var t = this,
            r = this._getPromiseDecorator(f.CLIPBOARD_WRITE);
          return r || (r = this._createPromiseDecorator(f.CLIPBOARD_WRITE), this._platformSdk.clipboard.writeText(e).then((function() {
            t._resolvePromiseDecorator(f.CLIPBOARD_WRITE, !0)
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.CLIPBOARD_WRITE, e)
          }))), r.promise
        }
      }]) && vr(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), y
    }(qt);
    class Br extends Error {}

    function Mr(e) {
      return Mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, Mr(e)
    }

    function Fr(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Gr(o.key), o)
      }
    }

    function Gr(e) {
      var t = function(e, t) {
        if ("object" != Mr(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != Mr(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == Mr(t) ? t : String(t)
    }

    function Hr() {
      return Hr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Wr(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, Hr.apply(this, arguments)
    }

    function Ur(e, t) {
      return Ur = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, Ur(e, t)
    }

    function zr(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Wr(e) {
      return Wr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Wr(e)
    }

    function xr(e, t, r) {
      Vr(e, t), t.set(e, r)
    }

    function Vr(e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function Yr(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return r
    }

    function Zr(e, t, r) {
      return function(e, t, r) {
        if (t.set) t.set.call(e, r);
        else {
          if (!t.writable) throw new TypeError("attempted to set read only private field");
          t.value = r
        }
      }(e, Jr(e, t, "set"), r), r
    }

    function Kr(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, Jr(e, t, "get"))
    }

    function Jr(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    Br.prototype.name = "InvalidTokenError";
    var qr = "banner-container",
      $r = new WeakMap,
      Xr = new WeakMap,
      Qr = new WeakMap,
      eo = new WeakSet;

    function to() {
      var e = this;
      return Kr(this, Xr) ? new Promise((function(t, r) {
        e._platformSdk.user.getUserToken().then((function(r) {
          var o = function(e, t) {
            if ("string" != typeof e) throw new Br("Invalid token specified: must be a string");
            t || (t = {});
            const r = !0 === t.header ? 0 : 1,
              o = e.split(".")[r];
            if ("string" != typeof o) throw new Br(`Invalid token specified: missing part #${r+1}`);
            let n;
            try {
              n = function(e) {
                let t = e.replace(/-/g, "+").replace(/_/g, "/");
                switch (t.length % 4) {
                  case 0:
                    break;
                  case 2:
                    t += "==";
                    break;
                  case 3:
                    t += "=";
                    break;
                  default:
                    throw new Error("base64 string is not of the correct length")
                }
                try {
                  return function(e) {
                    return decodeURIComponent(atob(e).replace(/(.)/g, ((e, t) => {
                      let r = t.charCodeAt(0).toString(16).toUpperCase();
                      return r.length < 2 && (r = "0" + r), "%" + r
                    })))
                  }(t)
                } catch (e) {
                  return atob(t)
                }
              }(o)
            } catch (e) {
              throw new Br(`Invalid token specified: invalid base64 for part #${r+1} (${e.message})`)
            }
            try {
              return JSON.parse(n)
            } catch (e) {
              throw new Br(`Invalid token specified: invalid json for part #${r+1} (${e.message})`)
            }
          }(r);
          e._isPlayerAuthorized = !0, e._defaultStorageType = u.PLATFORM_INTERNAL, o.userId && (e._playerId = o.userId), o.username && (e._playerName = o.username), o.profilePictureUrl && (e._playerPhotos = [o.profilePictureUrl]), t()
        })).catch((function(e) {
          r(e)
        }))
      })) : Promise.reject()
    }
    const ro = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Ur(e, t)
      }(y, t);
      var r, o, n, p, d = (n = y, p = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Wr(n);
        if (p) {
          var r = Wr(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === Mr(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return zr(e)
        }(this, e)
      });

      function y() {
        var e, t, r;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, y);
        for (var o = arguments.length, n = new Array(o), s = 0; s < o; s++) n[s] = arguments[s];
        return Vr(t = zr(e = d.call.apply(d, [this].concat(n))), r = eo), r.add(t), xr(zr(e), $r, {
          writable: !0,
          value: !1
        }), xr(zr(e), Xr, {
          writable: !0,
          value: !1
        }), xr(zr(e), Qr, {
          writable: !0,
          value: {
            adStarted: function() {
              Kr(zr(e), $r) ? e._setRewardedState(a.OPENED) : e._setInterstitialState(i.OPENED)
            },
            adFinished: function() {
              Kr(zr(e), $r) ? (e._setRewardedState(a.REWARDED), e._setRewardedState(a.CLOSED)) : e._setInterstitialState(i.CLOSED)
            },
            adError: function() {
              Kr(zr(e), $r) ? e._setRewardedState(a.FAILED) : e._setInterstitialState(i.FAILED)
            }
          }
        }), e
      }
      return r = y, (o = [{
        key: "platformId",
        get: function() {
          return e.CRAZY_GAMES
        }
      }, {
        key: "platformLanguage",
        get: function() {
          return Kr(this, Xr) ? this._platformSdk.user.systemInfo.countryCode.toLowerCase() : Hr(Wr(y.prototype), "platformLanguage", this)
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return Kr(this, Xr)
        }
      }, {
        key: "deviceType",
        get: function() {
          if (Kr(this, Xr)) {
            var e = this._platformSdk.user.systemInfo.device.type.toLowerCase();
            if ([c.DESKTOP, c.MOBILE, c.TABLET].includes(e)) return e
          }
          return Hr(Wr(y.prototype), "deviceType", this)
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), $t("https://sdk.crazygames.com/crazygames-sdk-v3.js").then((function() {
            Xt("CrazyGames", "SDK", "init").then((function() {
              e._platformSdk = window.CrazyGames.SDK, e._defaultStorageType = u.LOCAL_STORAGE, e._isBannerSupported = !0, e._platformSdk.init().then((function() {
                Zr(e, Xr, e._platformSdk.user.isUserAccountAvailable);
                var t = Yr(e, eo, to).call(e);
                Promise.all([t]).finally((function() {
                  e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE)
                }))
              }))
            }))
          }))), t.promise
        }
      }, {
        key: "authorizePlayer",
        value: function() {
          var e = this;
          if (!Kr(this, Xr)) return Promise.reject();
          if (this._isPlayerAuthorized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.AUTHORIZE_PLAYER);
          return t || (t = this._createPromiseDecorator(f.AUTHORIZE_PLAYER), this._platformSdk.user.showAuthPrompt().then((function() {
            Yr(e, eo, to).call(e).then((function() {
              e._resolvePromiseDecorator(f.AUTHORIZE_PLAYER)
            }))
          })).catch((function(t) {
            e._rejectPromiseDecorator(f.AUTHORIZE_PLAYER, t)
          }))), t.promise
        }
      }, {
        key: "sendMessage",
        value: function(e) {
          switch (e) {
            case l.IN_GAME_LOADING_STARTED:
              return this._platformSdk.game.loadingStart(), Promise.resolve();
            case l.IN_GAME_LOADING_STOPPED:
              return this._platformSdk.game.loadingStop(), Promise.resolve();
            case l.GAMEPLAY_STARTED:
              return this._platformSdk.game.gameplayStart(), Promise.resolve();
            case l.GAMEPLAY_STOPPED:
              return this._platformSdk.game.gameplayStop(), Promise.resolve();
            case l.PLAYER_GOT_ACHIEVEMENT:
              return this._platformSdk.game.happytime(), Promise.resolve();
            default:
              return Hr(Wr(y.prototype), "sendMessage", this).call(this, e)
          }
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || Hr(Wr(y.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || Hr(Wr(y.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, t, r) {
          var o = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t) {
            if (Array.isArray(e)) {
              var n = [];
              return e.forEach((function(e) {
                var t = o._platformSdk.data.getItem(e);
                if (r) try {
                  t = JSON.parse(t)
                } catch (e) {}
                n.push(t)
              })), void t(n)
            }
            var i = o._platformSdk.data.getItem(e);
            if (r) try {
              i = JSON.parse(i)
            } catch (e) {}
            t(i)
          })) : Hr(Wr(y.prototype), "getDataFromStorage", this).call(this, e, t, r)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          var o = this;
          return r === u.PLATFORM_INTERNAL ? new Promise((function(r) {
            if (Array.isArray(e)) {
              for (var n = 0; n < e.length; n++) {
                var i = t[n];
                "string" != typeof t[n] && (i = JSON.stringify(t[n])), o._platformSdk.data.setItem(e[n], i)
              }
              r()
            } else {
              var a = t;
              "string" != typeof t && (a = JSON.stringify(t)), o._platformSdk.data.setItem(e, a), r()
            }
          })) : Hr(Wr(y.prototype), "setDataToStorage", this).call(this, e, t, r)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          var r = this;
          return t === u.PLATFORM_INTERNAL ? Array.isArray(e) ? (e.forEach((function(e) {
            return r._platformSdk.data.removeItem(e)
          })), Promise.resolve()) : (this._platformSdk.data.removeItem(e), Promise.resolve()) : Hr(Wr(y.prototype), "deleteDataFromStorage", this).call(this, e, t)
        }
      }, {
        key: "showBanner",
        value: function(e) {
          var t = this,
            r = document.getElementById(qr);
          r || ((r = document.createElement("div")).id = qr, r.style.position = "absolute", document.body.appendChild(r)), "top" === (null == e ? void 0 : e.position) ? (r.style.top = 0, r.style.height = "90px", r.style.width = "100%") : "left" === (null == e ? void 0 : e.position) ? (r.style.left = 0, r.style.top = 0, r.style.height = "100%", r.style.width = "90px") : "right" === (null == e ? void 0 : e.position) ? (r.style.right = 0, r.style.top = 0, r.style.height = "100%", r.style.width = "90px") : (r.style.bottom = 0, r.style.height = "90px", r.style.width = "100%"), r.style.display = "block", this._platformSdk.banner.requestResponsiveBanner([qr]).then((function() {
            t._setBannerState(s.SHOWN)
          })).catch((function() {
            t._setBannerState(s.FAILED)
          }))
        }
      }, {
        key: "hideBanner",
        value: function() {
          var e = document.getElementById(qr);
          e && (e.style.display = "none"), this._platformSdk.banner.clearAllBanners(), this._setBannerState(s.HIDDEN)
        }
      }, {
        key: "showInterstitial",
        value: function() {
          Zr(this, $r, !1), this._platformSdk.ad.requestAd("midgame", Kr(this, Qr))
        }
      }, {
        key: "showRewarded",
        value: function() {
          Zr(this, $r, !0), this._platformSdk.ad.requestAd("rewarded", Kr(this, Qr))
        }
      }, {
        key: "checkAdBlock",
        value: function() {
          var e = this;
          return new Promise((function(t) {
            e._platformSdk.ad.hasAdblock().then((function(e) {
              t(e)
            }))
          }))
        }
      }]) && Fr(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), y
    }(qt);

    function oo(e) {
      return oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, oo(e)
    }

    function no(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, o)
      }
      return r
    }

    function io(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? no(Object(r), !0).forEach((function(t) {
          var o, n, i;
          o = e, n = t, i = r[t], (n = so(n)) in o ? Object.defineProperty(o, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : o[n] = i
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    function ao(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, so(o.key), o)
      }
    }

    function so(e) {
      var t = function(e, t) {
        if ("object" != oo(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != oo(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == oo(t) ? t : String(t)
    }

    function uo() {
      return uo = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = fo(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, uo.apply(this, arguments)
    }

    function co(e, t) {
      return co = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, co(e, t)
    }

    function lo(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function fo(e) {
      return fo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, fo(e)
    }
    var po = new WeakSet;

    function yo() {
      var e = this;
      return this._playerId = this._platformSdk.options.player_id, this._isPlayerAuthorized = "false" === this._platformSdk.options.guest, new Promise((function(t) {
        e._platformSdk.getUsers([e._playerId], (function(r) {
          if (r && 1 === r.length) {
            var o = r[0];
            e._playerName = o.full_name, "" !== o.avatar && (e._playerPhotos = [o.avatar])
          }
          t()
        }))
      }))
    }
    const ho = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && co(e, t)
      }(l, t);
      var r, o, n, s, c = (n = l, s = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = fo(n);
        if (s) {
          var r = fo(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === oo(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return lo(e)
        }(this, e)
      });

      function l() {
        var e, t, r;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, l);
        for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
        return function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(t = lo(e = c.call.apply(c, [this].concat(n))), r = po), r.add(t), e
      }
      return r = l, (o = [{
        key: "platformId",
        get: function() {
          return e.ABSOLUTE_GAMES
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isExternalLinksAllowed",
        get: function() {
          return !1
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), $t("https://unpkg.com/@agru/sdk/dist/umd/index.min.js").then((function() {
            e._platformSdk = new window.AgRuSdk, e._platformSdk.on(window.AgRuSdkMethods.ShowCampaign, (function(t, r) {
              "rewarded" === t.type ? null === r ? t.status ? e._setRewardedState(a.OPENED) : (t.reward && e._setRewardedState(a.REWARDED), e._setRewardedState(a.CLOSED)) : e._setRewardedState(a.FAILED) : null === r ? t.status ? e._setInterstitialState(i.OPENED) : e._setInterstitialState(i.CLOSED) : e._setInterstitialState(i.FAILED)
            }));
            var t = function(e, t, r) {
              if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
              return r
            }(e, po, yo).call(e);
            Promise.all([t]).finally((function() {
              e._isInitialized = !0, e._defaultStorageType = e._isPlayerAuthorized ? u.PLATFORM_INTERNAL : u.LOCAL_STORAGE, e._resolvePromiseDecorator(f.INITIALIZE)
            }))
          }))), t.promise
        }
      }, {
        key: "authorizePlayer",
        value: function() {
          var e = this;
          if (this._isPlayerAuthorized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.AUTHORIZE_PLAYER);
          return t || (t = this._createPromiseDecorator(f.AUTHORIZE_PLAYER), this._platformSdk.authorize((function(t, r) {
            null === r ? e._resolvePromiseDecorator(f.AUTHORIZE_PLAYER) : e._rejectPromiseDecorator(f.AUTHORIZE_PLAYER, r)
          }))), t.promise
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || uo(fo(l.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL ? this._isPlayerAuthorized : uo(fo(l.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, t, r) {
          var o = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, r) {
            if (o._platformStorageCachedData) {
              if (Array.isArray(e)) {
                for (var n = [], i = 0; i < e.length; i++) {
                  var a = void 0 === o._platformStorageCachedData[e[i]] ? null : o._platformStorageCachedData[e[i]];
                  n.push(a)
                }
                return void t(n)
              }
              t(void 0 === o._platformStorageCachedData[e] ? null : o._platformStorageCachedData[e])
            } else o._isPlayerAuthorized ? o._platformSdk.getSaveData((function(n, i) {
              if (null === i) {
                if (o._platformStorageCachedData = n || {}, Array.isArray(e)) {
                  for (var a = [], s = 0; s < e.length; s++) {
                    var u = void 0 === o._platformStorageCachedData[e[s]] ? null : o._platformStorageCachedData[e[s]];
                    a.push(u)
                  }
                  return void t(a)
                }
                t(void 0 === o._platformStorageCachedData[e] ? null : o._platformStorageCachedData[e])
              } else r(i)
            })) : r()
          })) : uo(fo(l.prototype), "getDataFromStorage", this).call(this, e, t, r)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          var o = this;
          return r === u.PLATFORM_INTERNAL ? new Promise((function(r, n) {
            if (o._isPlayerAuthorized) {
              var i = null !== o._platformStorageCachedData ? io({}, o._platformStorageCachedData) : {};
              if (Array.isArray(e))
                for (var a = 0; a < e.length; a++) i[e[a]] = t[a];
              else i[e] = t;
              o._platformSdk.setSaveData(i, (function(e, t) {
                null === t && (o._platformStorageCachedData = i, r()), n(t)
              }))
            } else n()
          })) : uo(fo(l.prototype), "setDataToStorage", this).call(this, e, t, r)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          var r = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, o) {
            if (r._isPlayerAuthorized) {
              var n = null !== r._platformStorageCachedData ? io({}, r._platformStorageCachedData) : {};
              if (Array.isArray(e))
                for (var i = 0; i < e.length; i++) delete n[e[i]];
              else delete n[e];
              r._platformSdk.setSaveData(n, (function(e, i) {
                null === i && (r._platformStorageCachedData = n, t()), o(i)
              }))
            } else o()
          })) : uo(fo(l.prototype), "deleteDataFromStorage", this).call(this, e, t)
        }
      }, {
        key: "showInterstitial",
        value: function() {
          this._platformSdk.showCampaign("default")
        }
      }, {
        key: "showRewarded",
        value: function() {
          this._platformSdk.showCampaign("rewarded")
        }
      }]) && ao(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), l
    }(qt);

    function mo(e) {
      return mo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, mo(e)
    }

    function vo(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _o(o.key), o)
      }
    }

    function _o(e) {
      var t = function(e, t) {
        if ("object" != mo(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != mo(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == mo(t) ? t : String(t)
    }

    function go(e, t) {
      return go = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, go(e, t)
    }

    function So(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function bo(e) {
      return bo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, bo(e)
    }

    function Eo(e, t, r) {
      return function(e, t, r) {
        if (t.set) t.set.call(e, r);
        else {
          if (!t.writable) throw new TypeError("attempted to set read only private field");
          t.value = r
        }
      }(e, Ao(e, t, "set"), r), r
    }

    function Po(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, Ao(e, t, "get"))
    }

    function Ao(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var wo = "banner-container",
      Oo = new WeakMap;
    const ko = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && go(e, t)
      }(p, t);
      var r, o, n, c, l = (n = p, c = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = bo(n);
        if (c) {
          var r = bo(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === mo(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return So(e)
        }(this, e)
      });

      function p() {
        var e, t, r, o;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, p);
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
        return t = So(e = l.call.apply(l, [this].concat(i))), o = {
            writable: !0,
            value: !1
          },
          function(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
          }(t, r = Oo), r.set(t, o), e
      }
      return r = p, (o = [{
        key: "platformId",
        get: function() {
          return e.GAME_DISTRIBUTION
        }
      }, {
        key: "isExternalLinksAllowed",
        get: function() {
          return !1
        }
      }, {
        key: "initialize",
        value: function() {
          if (this._isInitialized) return Promise.resolve();
          var e = this._getPromiseDecorator(f.INITIALIZE);
          if (!e)
            if (e = this._createPromiseDecorator(f.INITIALIZE), this._options && "string" == typeof this._options.gameId) {
              var t = this;
              window.GD_OPTIONS = {
                gameId: this._options.gameId,
                onEvent: function(e) {
                  switch (e.name) {
                    case "SDK_READY":
                      t._platformSdk = window.gdsdk, t._platformSdk.preloadAd("rewarded"), t._isInitialized = !0, t.showInterstitial(), t._resolvePromiseDecorator(f.INITIALIZE);
                      break;
                    case "SDK_GAME_START":
                      Po(t, Oo) ? t._setRewardedState(a.CLOSED) : t._setInterstitialState(i.CLOSED);
                      break;
                    case "SDK_GAME_PAUSE":
                      Po(t, Oo) ? t._setRewardedState(a.OPENED) : t._setInterstitialState(i.OPENED);
                      break;
                    case "SDK_REWARDED_WATCH_COMPLETE":
                      t._setRewardedState(a.REWARDED)
                  }
                }
              }, this._defaultStorageType = u.LOCAL_STORAGE, this._isBannerSupported = !0, $t("https://html5.api.gamedistribution.com/main.min.js")
            } else this._rejectPromiseDecorator(f.INITIALIZE, h);
          return e.promise
        }
      }, {
        key: "showBanner",
        value: function(e) {
          var t = this,
            r = document.getElementById(wo);
          r || ((r = document.createElement("div")).id = wo, r.style.position = "absolute", document.body.appendChild(r)), "top" === (null == e ? void 0 : e.position) ? (r.style.top = 0, r.style.height = "90px", r.style.width = "100%") : "left" === (null == e ? void 0 : e.position) ? (r.style.left = 0, r.style.top = 0, r.style.height = "100%", r.style.width = "90px") : "right" === (null == e ? void 0 : e.position) ? (r.style.right = 0, r.style.top = 0, r.style.height = "100%", r.style.width = "90px") : (r.style.bottom = 0, r.style.height = "90px", r.style.width = "100%"), r.style.display = "block", this._platformSdk.showAd("display", {
            containerId: wo
          }).then((function() {
            t._setBannerState(s.SHOWN)
          })).catch((function() {
            t._setBannerState(s.FAILED)
          }))
        }
      }, {
        key: "hideBanner",
        value: function() {
          var e = document.getElementById(wo);
          e && (e.style.display = "none"), this._setBannerState(s.HIDDEN)
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e = this;
          Eo(this, Oo, !1), this._platformSdk ? this._platformSdk.showAd().catch((function() {
            e._setInterstitialState(i.FAILED)
          })) : this._setInterstitialState(i.FAILED)
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e = this;
          Eo(this, Oo, !0), this._platformSdk ? this._platformSdk.showAd("rewarded").catch((function() {
            e._setRewardedState(a.FAILED)
          })) : this._setRewardedState(a.FAILED)
        }
      }]) && vo(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), p
    }(qt);

    function Do(e) {
      return Do = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, Do(e)
    }

    function Ro(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, o)
      }
      return r
    }

    function To(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Ro(Object(r), !0).forEach((function(t) {
          Go(e, t, r[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ro(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    function Io(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Ho(o.key), o)
      }
    }

    function Lo() {
      return Lo = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Co(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, Lo.apply(this, arguments)
    }

    function jo(e, t) {
      return jo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, jo(e, t)
    }

    function No(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Co(e) {
      return Co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Co(e)
    }

    function Bo(e, t) {
      Fo(e, t), t.add(e)
    }

    function Mo(e, t, r) {
      Fo(e, t), t.set(e, r)
    }

    function Fo(e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function Go(e, t, r) {
      return (t = Ho(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    function Ho(e) {
      var t = function(e, t) {
        if ("object" != Do(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != Do(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == Do(t) ? t : String(t)
    }

    function Uo(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return r
    }

    function zo(e, t) {
      var r = function(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
        return t.get(e)
      }(e, t);
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, r)
    }
    var Wo = "AUTHORIZED",
      xo = {
        VALUABLE_ACCESS: "VALUABLE_ACCESS",
        PHOTO_CONTENT: "PHOTO_CONTENT"
      },
      Vo = new WeakMap,
      Yo = new WeakMap,
      Zo = new WeakMap,
      Ko = new WeakSet,
      Jo = new WeakSet,
      qo = new WeakSet,
      $o = new WeakSet,
      Xo = new WeakSet,
      Qo = new WeakSet,
      en = new WeakSet,
      tn = new WeakSet,
      rn = new WeakSet,
      on = new WeakSet,
      nn = new WeakSet,
      an = new WeakSet,
      sn = new WeakSet,
      un = new WeakSet,
      cn = new WeakSet,
      ln = new WeakSet;

    function fn() {
      return {
        userProfile: {
          fields: "uid,name,pic50x50,pic128x128,pic_base",
          method: "users.getCurrentUser"
        },
        hasAppPermission: function(e) {
          return {
            method: "users.hasAppPermission",
            ext_perm: e
          }
        }
      }
    }

    function pn() {
      var e = this;
      return {
        userProfileCallback: function(t, r, o) {
          return Uo(e, Ko, yn).call(e, t, r, o)
        },
        hasValueAccessCallback: function(t, r, o) {
          return Uo(e, qo, mn).call(e, r, o)
        }
      }
    }

    function dn() {
      var e = this;
      return {
        showPermissions: function() {
          return Uo(e, $o, vn).call(e)
        },
        loadAd: function(t) {
          return Uo(e, Xo, _n).call(e, t)
        },
        showLoadedAd: function(t, r) {
          return Uo(e, Qo, gn).call(e, r)
        },
        showAd: function(t, r) {
          return Uo(e, en, Sn).call(e, r)
        },
        requestBannerAds: function(t, r) {
          return Uo(e, tn, bn).call(e, t, r)
        },
        showBannerAds: function(t, r) {
          return Uo(e, on, Pn).call(e, r)
        },
        hideBannerAds: function(t, r) {
          return Uo(e, rn, En).call(e, r)
        },
        setBannerFormat: function(t) {
          return Uo(e, nn, An).call(e, t)
        },
        showInvite: function(t) {
          return Uo(e, an, wn).call(e, t)
        },
        showRatingDialog: function(t, r) {
          return Uo(e, sn, On).call(e, t, r)
        },
        joinGroup: function(t, r) {
          return Uo(e, un, kn).call(e, t, r)
        },
        showLoginSuggestion: function(t, r) {
          return Uo(e, Jo, hn).call(e, t, r)
        },
        postMediatopic: function(t, r) {
          return Uo(e, cn, Dn).call(e, t, r)
        },
        isAdBlockEnabled: function(t, r) {
          return Uo(e, ln, Rn).call(e, t, r)
        }
      }
    }

    function yn(e, t) {
      "ok" === e && (this._playerId = t.uid, this._playerName = t.name, this._playerPhotos = [t.pic50x50, t.pic128x128, t.pic_base]), this._isInitialized = !0, this._platformSdk.Client.call(zo(this, Vo).hasAppPermission(xo.VALUABLE_ACCESS), zo(this, Yo).hasValueAccessCallback)
    }

    function hn(e, t) {
      if ("error" === e) return this._isPlayerAuthorized = !1, void this._rejectPromiseDecorator(f.AUTHORIZE_PLAYER, t);
      this._isPlayerAuthorized = !0, this._resolvePromiseDecorator(f.AUTHORIZE_PLAYER)
    }

    function mn(e) {
      if (this._hasValuableAccessPermission = !!e, this._defaultStorageType = this._hasValuableAccessPermission ? u.PLATFORM_INTERNAL : u.LOCAL_STORAGE, this._hasValuableAccessPermission || this._hasValuableAccessPermissionShowed) this._resolvePromiseDecorator(f.INITIALIZE);
      else {
        var t = Object.values(xo).map((function(e) {
          return '"'.concat(e, '"')
        })).join(",");
        this._platformSdk.UI.showPermissions("[".concat(t, "]"))
      }
    }

    function vn() {
      this._hasValuableAccessPermissionShowed = !0, this._platformSdk.Client.call(zo(this, Vo).hasAppPermission(xo.VALUABLE_ACCESS), zo(this, Yo).hasValueAccessCallback)
    }

    function _n(e) {
      "error" === e ? this._setRewardedState(a.FAILED) : (this._setRewardedState(a.OPENED), this._platformSdk.UI.showLoadedAd())
    }

    function gn(e) {
      switch (e) {
        case "complete":
          this._setRewardedState(a.REWARDED), this._setRewardedState(a.CLOSED);
          break;
        case "skip":
          this._setRewardedState(a.CLOSED);
          break;
        default:
          this._setRewardedState(a.FAILED)
      }
    }

    function Sn(e) {
      switch (e) {
        case "ready":
        case "ad_prepared":
          break;
        case "ad_shown":
          this._setInterstitialState(i.OPENED), this._setInterstitialState(i.CLOSED);
          break;
        default:
          this._setInterstitialState(i.FAILED)
      }
    }

    function bn(e, t) {
      if ("error" !== e) switch (t) {
        case "ad_loaded":
          this._platformSdk.invokeUIMethod("showBannerAds");
          break;
        case "banner_shown":
        case "ad_shown":
          this._setBannerState(s.SHOWN);
          break;
        case "hidden_by_user":
          this._setBannerState(s.HIDDEN)
      } else this._setBannerState(s.FAILED)
    }

    function En(e) {
      e ? this._setBannerState(s.HIDDEN) : this._setBannerState(s.FAILED)
    }

    function Pn(e) {
      e || this._setBannerState(s.FAILED)
    }

    function An(e) {
      "error" === e ? this._setBannerState(s.FAILED) : this.showBanner(this._platformBannerOptions)
    }

    function wn(e) {
      "error" === e ? this._rejectPromiseDecorator(f.INVITE_FRIENDS) : this._resolvePromiseDecorator(f.INVITE_FRIENDS)
    }

    function On(e, t) {
      "error" === e ? this._rejectPromiseDecorator(f.RATE, t) : this._resolvePromiseDecorator(f.RATE)
    }

    function kn(e, t) {
      "error" === e ? this._rejectPromiseDecorator(f.JOIN_COMMUNITY, t) : this._resolvePromiseDecorator(f.JOIN_COMMUNITY)
    }

    function Dn(e, t) {
      "error" === e ? this._rejectPromiseDecorator(f.CREATE_POST, t) : this._resolvePromiseDecorator(f.CREATE_POST)
    }

    function Rn(e, t) {
      "ok" === e ? this._resolvePromiseDecorator(f.ADBLOCK_DETECT, "true" === t) : this._rejectPromiseDecorator(f.ADBLOCK_DETECT)
    }
    const Tn = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && jo(e, t)
      }(l, t);
      var r, o, n, s, c = (n = l, s = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Co(n);
        if (s) {
          var r = Co(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === Do(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return No(e)
        }(this, e)
      });

      function l() {
        var e;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, l);
        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        return Bo(No(e = c.call.apply(c, [this].concat(r))), ln), Bo(No(e), cn), Bo(No(e), un), Bo(No(e), sn), Bo(No(e), an), Bo(No(e), nn), Bo(No(e), on), Bo(No(e), rn), Bo(No(e), tn), Bo(No(e), en), Bo(No(e), Qo), Bo(No(e), Xo), Bo(No(e), $o), Bo(No(e), qo), Bo(No(e), Jo), Bo(No(e), Ko), Mo(No(e), Zo, {
          get: dn,
          set: void 0
        }), Mo(No(e), Yo, {
          get: pn,
          set: void 0
        }), Mo(No(e), Vo, {
          get: fn,
          set: void 0
        }), Go(No(e), "_hasValuableAccessPermission", !1), Go(No(e), "_hasValuableAccessPermissionShowed", !1), Go(No(e), "_platformBannerOptions", {}), e
      }
      return r = l, (o = [{
        key: "platformId",
        get: function() {
          return e.OK
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isBannerSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isJoinCommunitySupported",
        get: function() {
          return !0
        }
      }, {
        key: "isInviteFriendsSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isCreatePostSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isRateSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isExternalLinksAllowed",
        get: function() {
          return !1
        }
      }, {
        key: "isClipboardSupported",
        get: function() {
          return !1
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), $t("//api.ok.ru/js/fapi5.js").then((function() {
            Xt("FAPI").then((function() {
              e._platformSdk = window.FAPI, window.API_callback = function(t, r, o) {
                return zo(e, Zo)[t](r, o)
              };
              var t = e._platformSdk.Util.getRequestParameters() || {};
              t.api_server && t.apiconnection ? e._platformSdk.init(t.api_server, t.apiconnection, (function() {
                var t, r = null === (t = e._platformSdk) || void 0 === t ? void 0 : t.saved_state;
                e._isPlayerAuthorized = !r || r === Wo, e._isPlayerAuthorized ? e._platformSdk.Client.call(zo(e, Vo).userProfile, zo(e, Yo).userProfileCallback) : (e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE))
              }), (function() {
                e._rejectPromiseDecorator(f.INITIALIZE)
              })) : e._rejectPromiseDecorator(f.INITIALIZE, v)
            }))
          }))), t.promise
        }
      }, {
        key: "authorizePlayer",
        value: function() {
          if (this._isPlayerAuthorized) return Promise.resolve();
          var e = this._getPromiseDecorator(f.AUTHORIZE_PLAYER);
          return e || (e = this._createPromiseDecorator(f.AUTHORIZE_PLAYER), this._platformSdk.UI.showLoginSuggestion(Wo)), e.promise
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || Lo(Co(l.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL ? this._hasValuableAccessPermission : Lo(Co(l.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, t, r) {
          var o = this;
          return t === u.PLATFORM_INTERNAL ? this._hasValuableAccessPermission ? new Promise((function(t, n) {
            var i = Array.isArray(e) ? e : [e],
              a = {
                method: "storage.get",
                keys: i,
                scope: "CUSTOM"
              };
            o._platformSdk.Client.call(a, (function(o, a, s) {
              if (a) {
                var u = a.data || {};
                if (Array.isArray(e)) {
                  var c = [];
                  return i.forEach((function(e) {
                    if ("" !== u[e] && void 0 !== u[e]) {
                      var t = u[e];
                      if (r) try {
                        t = JSON.parse(u[e])
                      } catch (e) {}
                      c.push(t)
                    } else c.push(null)
                  })), void t(c)
                }
                if ("" === u[e] || void 0 === u[e]) return void t(null);
                var l = u[e];
                if (r) try {
                  l = JSON.parse(u[e])
                } catch (e) {}
                t(l)
              } else n(s)
            }))
          })) : Promise.reject(y) : Lo(Co(l.prototype), "getDataFromStorage", this).call(this, e, t, r)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          var o = this;
          if (r === u.PLATFORM_INTERNAL) {
            if (!this._hasValuableAccessPermission) return Promise.reject(y);
            for (var n = Array.isArray(e) ? e : [e], i = Array.isArray(e) ? t : [t], a = [], s = function() {
                var e = n[c],
                  t = i[c];
                "string" != typeof t && (t = JSON.stringify(t));
                var r = {
                    method: "storage.set",
                    key: e,
                    value: t
                  },
                  s = new Promise((function(e, t) {
                    o._platformSdk.Client.call(r, (function(r, o) {
                      o ? e() : t()
                    }))
                  }));
                a.push(s)
              }, c = 0; c < n.length; c++) s();
            return Promise.all(a)
          }
          return Lo(Co(l.prototype), "setDataToStorage", this).call(this, e, t, r)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          var r = this;
          if (t === u.PLATFORM_INTERNAL) {
            if (!this._hasValuableAccessPermission) return Promise.reject(y);
            for (var o = Array.isArray(e) ? e : [e], n = [], i = function() {
                var e = {
                    method: "storage.set",
                    key: o[a]
                  },
                  t = new Promise((function(t, o) {
                    r._platformSdk.Client.call(e, (function(e, r) {
                      r ? t() : o()
                    }))
                  }));
                n.push(t)
              }, a = 0; a < o.length; a++) i();
            return Promise.all(n)
          }
          return Lo(Co(l.prototype), "deleteDataFromStorage", this).call(this, e, t)
        }
      }, {
        key: "showInterstitial",
        value: function() {
          try {
            this._platformSdk.UI.showAd()
          } catch (e) {
            this._setInterstitialState(i.FAILED)
          }
        }
      }, {
        key: "showRewarded",
        value: function() {
          try {
            this._platformSdk.UI.loadAd()
          } catch (e) {
            this._setRewardedState(a.FAILED)
          }
        }
      }, {
        key: "showBanner",
        value: function(e) {
          if (e) {
            if ("string" == typeof e.layoutType) return this._platformBannerOptions = To(To({}, e), {}, {
              layoutType: null
            }), void this._platformSdk.invokeUIMethod("setBannerFormat", e.layoutType);
            if ("string" == typeof e.position) return void this._platformSdk.invokeUIMethod("requestBannerAds", e.position)
          }
          this._platformSdk.invokeUIMethod("requestBannerAds", "bottom")
        }
      }, {
        key: "hideBanner",
        value: function() {
          this._platformSdk.invokeUIMethod("hideBannerAds")
        }
      }, {
        key: "checkAdBlock",
        value: function() {
          var e = this._getPromiseDecorator(f.ADBLOCK_DETECT);
          return e || (e = this._createPromiseDecorator(f.ADBLOCK_DETECT), this._platformSdk.invokeUIMethod("isAdBlockEnabled")), e.promise
        }
      }, {
        key: "inviteFriends",
        value: function(e) {
          var t = (e || {}).text;
          if (!e || "string" != typeof t) return Promise.reject();
          var r = this._getPromiseDecorator(f.INVITE_FRIENDS);
          return r || (r = this._createPromiseDecorator(f.INVITE_FRIENDS), t.length > 120 ? this._rejectPromiseDecorator(f.INVITE_FRIENDS, g) : this._platformSdk.UI.showInvite(t)), r.promise
        }
      }, {
        key: "rate",
        value: function() {
          var e = this._getPromiseDecorator(f.RATE);
          return e || (e = this._createPromiseDecorator(f.RATE), this._platformSdk.UI.showRatingDialog()), e.promise
        }
      }, {
        key: "createPost",
        value: function(e) {
          if (!e || null == e || !e.media) return Promise.reject();
          var t, r = this._getPromiseDecorator(f.CREATE_POST);
          return r || (r = this._createPromiseDecorator(f.CREATE_POST), this._platformSdk.UI.postMediatopic(e, null !== (t = e.status) && void 0 !== t && t)), r.promise
        }
      }, {
        key: "joinCommunity",
        value: function(e) {
          if (!e || null == e || !e.groupId) return Promise.reject();
          var t, r = this._getPromiseDecorator(f.JOIN_COMMUNITY);
          return r || (r = this._createPromiseDecorator(f.JOIN_COMMUNITY), this._platformSdk.UI.joinGroup(e.groupId, null !== (t = e.enableMessages) && void 0 !== t && t)), r.promise
        }
      }]) && Io(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), l
    }(qt);

    function In(e) {
      return In = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, In(e)
    }

    function Ln(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, jn(o.key), o)
      }
    }

    function jn(e) {
      var t = function(e, t) {
        if ("object" != In(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != In(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == In(t) ? t : String(t)
    }

    function Nn() {
      return Nn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Mn(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, Nn.apply(this, arguments)
    }

    function Cn(e, t) {
      return Cn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, Cn(e, t)
    }

    function Bn(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Mn(e) {
      return Mn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Mn(e)
    }

    function Fn(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return r
    }
    var Gn = new WeakSet;

    function Hn() {
      var e = this;
      return new Promise((function(t) {
        e._platformSdk.userService.getUser().then((function(t) {
          e._playerId = t.id, e._isPlayerAuthorized = t.isAuthorized, e._playerName = t.name, e._playerPhotos = t.photos
        })).finally((function() {
          t()
        }))
      }))
    }
    const Un = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Cn(e, t)
      }(l, t);
      var r, o, n, s, c = (n = l, s = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Mn(n);
        if (s) {
          var r = Mn(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === In(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return Bn(e)
        }(this, e)
      });

      function l() {
        var e, t, r;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, l);
        for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
        return function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(t = Bn(e = c.call.apply(c, [this].concat(n))), r = Gn), r.add(t), e
      }
      return r = l, (o = [{
        key: "platformId",
        get: function() {
          return e.PLAYGAMA
        }
      }, {
        key: "isExternalLinksAllowed",
        get: function() {
          return !1
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return !0
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), $t("https://developer.playgama.com/sdk/v1.js").then((function() {
            Xt("PLAYGAMA_SDK").then((function() {
              e._platformSdk = window.PLAYGAMA_SDK, Fn(e, Gn, Hn).call(e).then((function() {
                e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE)
              }))
            }))
          }))), t.promise
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          if (r === u.LOCAL_STORAGE) {
            var o = {};
            if (Array.isArray(e))
              for (var n = 0; n < e.length; n++) o[e[n]] = "string" != typeof t[n] ? JSON.stringify(t[n]) : t[n];
            else o[e] = "string" != typeof t ? JSON.stringify(t) : t;
            return this._platformSdk.storageApi.setItems(o), Nn(Mn(l.prototype), "setDataToStorage", this).call(this, e, t, r)
          }
          return Promise.reject(d)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          return t === u.LOCAL_STORAGE ? (this._platformSdk.storageApi.deleteItems(Array.isArray(e) ? e : [e]), Nn(Mn(l.prototype), "deleteDataFromStorage", this).call(this, e, t)) : Promise.reject(d)
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e = this;
          this._platformSdk.advService.showInterstitial({
            onOpen: function() {
              e._setInterstitialState(i.OPENED)
            },
            onEmpty: function() {
              e._setInterstitialState(i.FAILED)
            },
            onClose: function() {
              e._setInterstitialState(i.CLOSED)
            },
            onError: function() {
              e._setInterstitialState(i.FAILED)
            }
          })
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e = this;
          this._platformSdk.advService.showRewarded({
            onOpen: function() {
              e._setRewardedState(a.OPENED)
            },
            onRewarded: function() {
              e._setRewardedState(a.REWARDED)
            },
            onEmpty: function() {
              e._setRewardedState(a.FAILED)
            },
            onClose: function() {
              e._setRewardedState(a.CLOSED)
            },
            onError: function() {
              e._setRewardedState(a.FAILED)
            }
          })
        }
      }, {
        key: "authorizePlayer",
        value: function(e) {
          var t = this,
            r = this._getPromiseDecorator(f.AUTHORIZE_PLAYER);
          return r || (r = this._createPromiseDecorator(f.AUTHORIZE_PLAYER), this._isPlayerAuthorized ? Fn(this, Gn, Hn).call(this, e).then((function() {
            t._resolvePromiseDecorator(f.AUTHORIZE_PLAYER)
          })) : this._platformSdk.userService.authorizeUser().then((function() {
            Fn(t, Gn, Hn).call(t, e).then((function() {
              t._resolvePromiseDecorator(f.AUTHORIZE_PLAYER)
            }))
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.AUTHORIZE_PLAYER, e)
          }))), r.promise
        }
      }]) && Ln(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), l
    }(qt);

    function zn(e) {
      return zn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, zn(e)
    }

    function Wn(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Jn(o.key), o)
      }
    }

    function xn() {
      return xn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Zn(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, xn.apply(this, arguments)
    }

    function Vn(e, t) {
      return Vn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, Vn(e, t)
    }

    function Yn(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Zn(e) {
      return Zn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Zn(e)
    }

    function Kn(e, t, r) {
      return (t = Jn(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    function Jn(e) {
      var t = function(e, t) {
        if ("object" != zn(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != zn(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == zn(t) ? t : String(t)
    }

    function qn(e, t, r) {
      ! function(e, t) {
        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
      }(e, t), t.set(e, r)
    }

    function $n(e, t, r) {
      return function(e, t, r) {
        if (t.set) t.set.call(e, r);
        else {
          if (!t.writable) throw new TypeError("attempted to set read only private field");
          t.value = r
        }
      }(e, Qn(e, t, "set"), r), r
    }

    function Xn(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, Qn(e, t, "get"))
    }

    function Qn(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var ei = new WeakMap,
      ti = new WeakMap;
    const ri = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Vn(e, t)
      }(p, t);
      var r, o, n, s, c = (n = p, s = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Zn(n);
        if (s) {
          var r = Zn(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === zn(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return Yn(e)
        }(this, e)
      });

      function p() {
        var e;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, p);
        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        return qn(Yn(e = c.call.apply(c, [this].concat(r))), ei, {
          writable: !0,
          value: void 0
        }), qn(Yn(e), ti, {
          writable: !0,
          value: void 0
        }), Kn(Yn(e), "_defaultStorageType", u.PLATFORM_INTERNAL), Kn(Yn(e), "_isPlayerAuthorized", !0), e
      }
      return r = p, (o = [{
        key: "platformId",
        get: function() {
          return e.PLAYDECK
        }
      }, {
        key: "platformLanguage",
        get: function() {
          return Xn(this, ei) ? Xn(this, ei) : xn(Zn(p.prototype), "platformLanguage", this)
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isShareSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isPaymentsSupported",
        get: function() {
          return !0
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), window.addEventListener("message", (function t(r) {
            var o = r.data;
            if (o && o.playdeck) {
              var n = o.playdeck;
              if ("getUserProfile" === n.method) {
                var i = n.value;
                e._playerId = i.telegramId, e._playerPhotos = [i.avatar], e._playerName = i.username, $n(e, ei, i.locale), $n(e, ti, i.params), window.removeEventListener("message", t), e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE)
              }
            }
          })), window.parent.postMessage({
            playdeck: {
              method: "getUserProfile"
            }
          }, "*")), t.promise
        }
      }, {
        key: "sendMessage",
        value: function(e) {
          switch (e) {
            case l.GAME_OVER:
              return window.parent.postMessage({
                playdeck: {
                  method: "gameEnd"
                }
              }, "*"), Promise.resolve();
            case l.GAME_READY:
              return window.parent.postMessage({
                playdeck: {
                  method: "loading",
                  value: 100
                }
              }, "*"), Promise.resolve();
            default:
              return xn(Zn(p.prototype), "sendMessage", this).call(this, e)
          }
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e = this;
          window.addEventListener("message", (function t(r) {
            var o = r.data,
              n = null == o ? void 0 : o.playdeck;
            if (n) switch (n.method) {
              case "startAd":
                e._setInterstitialState(i.OPENED);
                break;
              case "rewardedAd":
              case "skipAd":
                e._setInterstitialState(i.CLOSED), window.removeEventListener("message", t);
                break;
              case "errAd":
              case "notFoundAd":
                e._setInterstitialState(i.FAILED), window.removeEventListener("message", t)
            }
          })), window.parent.postMessage({
            playdeck: {
              method: "showAd"
            }
          }, "*")
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e = this;
          window.addEventListener("message", (function t(r) {
            var o = r.data,
              n = null == o ? void 0 : o.playdeck;
            if (n) switch (n.method) {
              case "startAd":
                e._setRewardedState(a.OPENED);
                break;
              case "rewardedAd":
                e._setRewardedState(a.REWARDED), e._setRewardedState(a.CLOSED), window.removeEventListener("message", t);
                break;
              case "skipAd":
                e._setRewardedState(a.CLOSED), window.removeEventListener("message", t);
                break;
              case "errAd":
              case "notFoundAd":
                e._setRewardedState(a.FAILED), window.removeEventListener("message", t)
            }
          })), window.parent.postMessage({
            playdeck: {
              method: "showAd"
            }
          }, "*")
        }
      }, {
        key: "authorizePlayer",
        value: function() {
          return Promise.resolve()
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || xn(Zn(p.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || xn(Zn(p.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, t, r) {
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t) {
            var r = {},
              o = Array.isArray(e) ? e : [e];
            window.addEventListener("message", (function n(i) {
              var a = i.data;
              if (a && a.playdeck) {
                var s = a.playdeck;
                if ("getData" === s.method && (r[s.key] = s.value.data), Object.keys(r).length === o.length) {
                  window.removeEventListener("message", n);
                  var u = Array.isArray(e) ? e.map((function(e) {
                    return r[e]
                  })) : r[e];
                  t(u)
                }
              }
            })), o.forEach((function(e) {
              return window.parent.postMessage({
                playdeck: {
                  method: "getData",
                  key: e
                }
              }, "*")
            }))
          })) : xn(Zn(p.prototype), "getDataFromStorage", this).call(this, e, t, r)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          return r === u.PLATFORM_INTERNAL ? new Promise((function(r) {
            var o = Array.isArray(e) ? e : [e],
              n = (Array.isArray(t) ? t : [t]).map((function(e) {
                return "string" != typeof e ? JSON.stringify(e) : e
              }));
            o.forEach((function(e, t) {
              return window.parent.postMessage({
                playdeck: {
                  method: "setData",
                  key: e,
                  value: n[t]
                }
              }, "*")
            })), r()
          })) : xn(Zn(p.prototype), "setDataToStorage", this).call(this, e, t, r)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t) {
            (Array.isArray(e) ? e : [e]).forEach((function(e) {
              return window.parent.postMessage({
                playdeck: {
                  method: "setData",
                  key: e,
                  value: ""
                }
              }, "*")
            })), t()
          })) : xn(Zn(p.prototype), "deleteDataFromStorage", this).call(this, e, t)
        }
      }, {
        key: "share",
        value: function() {
          window.parent.postMessage({
            playdeck: {
              method: "customShare",
              value: Xn(this, ti)
            }
          }, "*")
        }
      }, {
        key: "purchase",
        value: function(e) {
          var t = this,
            r = this._getPromiseDecorator(f.PURCHASE);
          return r || (r = this._createPromiseDecorator(f.PURCHASE), window.addEventListener("message", (function e(t) {
            var r = t.data,
              o = null == r ? void 0 : r.playdeck;
            o && "requestPayment" === o.method && (window.parent.postMessage({
              playdeck: {
                method: "openTelegramLink",
                value: o.value.url
              }
            }, "*"), window.removeEventListener("message", e))
          })), window.addEventListener("message", (function e(r) {
            var o = r.data,
              n = null == o ? void 0 : o.playdeck;
            n && "invoiceClosed" === n.method && ("paid" === n.value.status ? (window.removeEventListener("message", e), t._resolvePromiseDecorator(f.PURCHASE, n.value)) : "cancelled" !== n.value.status && "failed" !== n.value.status || (window.removeEventListener("message", e), t._rejectPromiseDecorator(f.PURCHASE, n.value)))
          })), window.parent.postMessage({
            playdeck: {
              method: "requestPayment",
              value: e
            }
          }, "*")), r.promise
        }
      }]) && Wn(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), p
    }(qt);

    function oi(e) {
      return oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, oi(e)
    }

    function ni(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, o)
      }
      return r
    }

    function ii(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ni(Object(r), !0).forEach((function(t) {
          var o, n, i;
          o = e, n = t, i = r[t], (n = si(n)) in o ? Object.defineProperty(o, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : o[n] = i
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ni(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    function ai(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, si(o.key), o)
      }
    }

    function si(e) {
      var t = function(e, t) {
        if ("object" != oi(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != oi(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == oi(t) ? t : String(t)
    }

    function ui() {
      return ui = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = fi(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, ui.apply(this, arguments)
    }

    function ci(e, t) {
      return ci = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, ci(e, t)
    }

    function li(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function fi(e) {
      return fi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, fi(e)
    }

    function pi(e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function di(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, yi(e, t, "get"))
    }

    function yi(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var hi = new WeakMap,
      mi = new WeakSet;

    function vi() {
      this._playerId = this._platformSdk.player.getId(), this._playerName = this._platformSdk.player.getName(), this._playerPhotos = [this._platformSdk.player.getPhoto()]
    }
    const _i = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && ci(e, t)
      }(d, t);
      var r, o, n, c, p = (n = d, c = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = fi(n);
        if (c) {
          var r = fi(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === oi(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return li(e)
        }(this, e)
      });

      function d() {
        var e, t, r;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, d);
        for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
        return pi(t = li(e = p.call.apply(p, [this].concat(n))), r = mi), r.add(t),
          function(e, t, r) {
            pi(e, t), t.set(e, {
              writable: !0,
              value: void 0
            })
          }(li(e), hi), e
      }
      return r = d, (o = [{
        key: "platformId",
        get: function() {
          return e.WORTAL
        }
      }, {
        key: "platformLanguage",
        get: function() {
          if (this._platformSdk) {
            var e = this._platformSdk.session.getLocale();
            if (e) return e.toLowerCase().slice(0, 2)
          }
          return ui(fi(d.prototype), "platformLanguage", this)
        }
      }, {
        key: "deviceType",
        get: function() {
          var e = this._platformSdk.session.getDevice();
          return e ? e.toLowerCase() : ui(fi(d.prototype), "deviceType", this)
        }
      }, {
        key: "isExternalLinksAllowed",
        get: function() {
          return !1
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), $t("https://storage.googleapis.com/cdn-wortal-ai/v2/wortal-core.js").then((function() {
            Xt("Wortal", "initializeAsync").then((function() {
              window.Wortal.initializeAsync().then((function() {
                var t, r, o;
                e._platformSdk = window.Wortal, t = e, r = hi, o = e._platformSdk.getSupportedAPIs(),
                  function(e, t, r) {
                    if (t.set) t.set.call(e, r);
                    else {
                      if (!t.writable) throw new TypeError("attempted to set read only private field");
                      t.value = r
                    }
                  }(t, yi(t, r, "set"), o), e._isBannerSupported = di(e, hi).includes("ads.showBanner"), e._platformSdk.player.onLogin(function(e, t, r) {
                    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                    return r
                  }(e, mi, vi)), e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE)
              }))
            }))
          }))), t.promise
        }
      }, {
        key: "sendMessage",
        value: function(e) {
          switch (e) {
            case l.GAMEPLAY_STARTED:
              return this._platformSdk.session.gameplayStart(), Promise.resolve();
            case l.GAMEPLAY_STOPPED:
              return this._platformSdk.session.gameplayStop(), Promise.resolve();
            case l.GAME_READY:
              return this._platformSdk.setLoadingProgress(100), this._platformSdk.startGameAsync(), Promise.resolve();
            case l.PLAYER_GOT_ACHIEVEMENT:
              return this._platformSdk.session.happyTime(), Promise.resolve();
            default:
              return ui(fi(d.prototype), "sendMessage", this).call(this, e)
          }
        }
      }, {
        key: "showBanner",
        value: function(e) {
          var t = "bottom";
          e && "string" == typeof e.position && (t = e.position), this._platformSdk.ads.showBanner(!0, t), this._setBannerState(s.SHOWN)
        }
      }, {
        key: "hideBanner",
        value: function() {
          this._platformSdk.ads.showBanner(!1), this._setBannerState(s.HIDDEN)
        }
      }, {
        key: "showInterstitial",
        value: function(e) {
          var t = this,
            r = "next",
            o = "NextLevel";
          e && (e.placement && (r = e.placement), e.description && (o = e.description)), this._platformSdk.ads.showInterstitial(r, o, (function() {
            t._setInterstitialState(i.OPENED)
          }), (function() {
            t._setInterstitialState(i.CLOSED)
          }), (function() {
            t._setInterstitialState(i.FAILED)
          }))
        }
      }, {
        key: "showRewarded",
        value: function(e) {
          var t = this,
            r = "Bonus";
          e && e.description && (r = e.description), this._platformSdk.ads.showRewarded(r, (function() {
            t._setRewardedState(a.OPENED)
          }), (function() {
            t._setRewardedState(a.CLOSED)
          }), (function() {
            t._setRewardedState(a.CLOSED)
          }), (function() {
            t._setRewardedState(a.REWARDED)
          }), (function() {
            t._setRewardedState(a.FAILED)
          }))
        }
      }, {
        key: "checkAdBlock",
        value: function() {
          var e = this;
          return new Promise((function(t) {
            t(e._platformSdk.ads.isAdBlocked())
          }))
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL ? di(this, hi).includes("player.setDataAsync") : ui(fi(d.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL ? di(this, hi).includes("player.setDataAsync") : ui(fi(d.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, t, r) {
          var o = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, r) {
            var n = Array.isArray(e) ? e : [e];
            o._platformSdk.player.getDataAsync(n).then((function(r) {
              if (o._platformStorageCachedData || (o._platformStorageCachedData = {}), Array.isArray(e)) {
                for (var n = [], i = 0; i < e.length; i++) {
                  var a = void 0 === r[e[i]] ? null : r[e[i]];
                  n.push(a), o._platformStorageCachedData[e[i]] = a
                }
                t(n)
              } else {
                var s = void 0 === r[e] ? null : r[e];
                o._platformStorageCachedData[e] = s, t(s)
              }
            })).catch((function(e) {
              return r(e)
            }))
          })) : ui(fi(d.prototype), "getDataFromStorage", this).call(this, e, t, r)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          var o = this;
          return r === u.PLATFORM_INTERNAL ? new Promise((function(r, n) {
            var i = null !== o._platformStorageCachedData ? ii({}, o._platformStorageCachedData) : {};
            if (Array.isArray(e))
              for (var a = 0; a < e.length; a++) i[e[a]] = t[a];
            else i[e] = t;
            o._platformSdk.player.setDataAsync(i).then((function() {
              o._platformStorageCachedData = i, r()
            })).catch((function(e) {
              return n(e)
            }))
          })) : ui(fi(d.prototype), "setDataToStorage", this).call(this, e, t, r)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          var r = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, o) {
            var n = null !== r._platformStorageCachedData ? ii({}, r._platformStorageCachedData) : {};
            if (Array.isArray(e))
              for (var i = 0; i < e.length; i++) delete n[e[i]];
            else delete n[e];
            r._platformSdk.player.setDataAsync(n).then((function() {
              r._platformStorageCachedData = n, t()
            })).catch((function(e) {
              return o(e)
            }))
          })) : ui(fi(d.prototype), "deleteDataFromStorage", this).call(this, e, t)
        }
      }]) && ai(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), d
    }(qt);

    function gi(e) {
      return gi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, gi(e)
    }

    function Si(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ki(o.key), o)
      }
    }

    function bi() {
      return bi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ai(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, bi.apply(this, arguments)
    }

    function Ei(e, t) {
      return Ei = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, Ei(e, t)
    }

    function Pi(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Ai(e) {
      return Ai = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Ai(e)
    }

    function wi(e, t, r) {
      ! function(e, t) {
        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
      }(e, t), t.set(e, r)
    }

    function Oi(e, t, r) {
      return (t = ki(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    function ki(e) {
      var t = function(e, t) {
        if ("object" != gi(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != gi(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == gi(t) ? t : String(t)
    }

    function Di(e, t, r) {
      return function(e, t, r) {
        if (t.set) t.set.call(e, r);
        else {
          if (!t.writable) throw new TypeError("attempted to set read only private field");
          t.value = r
        }
      }(e, Ti(e, t, "set"), r), r
    }

    function Ri(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, Ti(e, t, "get"))
    }

    function Ti(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var Ii = new WeakMap,
      Li = new WeakMap,
      ji = new WeakMap,
      Ni = new WeakMap;
    const Ci = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Ei(e, t)
      }(d, t);
      var r, o, n, s, p = (n = d, s = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Ai(n);
        if (s) {
          var r = Ai(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === gi(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return Pi(e)
        }(this, e)
      });

      function d() {
        var e;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, d);
        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        return Oi(Pi(e = p.call.apply(p, [this].concat(r))), "_defaultStorageType", u.PLATFORM_INTERNAL), Oi(Pi(e), "_isPlayerAuthorized", !0), wi(Pi(e), Ii, {
          writable: !0,
          value: void 0
        }), wi(Pi(e), Li, {
          writable: !0,
          value: void 0
        }), wi(Pi(e), ji, {
          writable: !0,
          value: {
            onStart: function() {
              return e._setRewardedState(a.OPENED)
            },
            onSkip: function() {
              return e._setRewardedState(a.CLOSED)
            },
            onReward: function() {
              return e._setRewardedState(a.REWARDED)
            },
            onError: function() {
              return e._setRewardedState(a.FAILED)
            }
          }
        }), wi(Pi(e), Ni, {
          writable: !0,
          value: {
            onStart: function() {
              return e._setInterstitialState(i.OPENED)
            },
            onSkip: function() {
              return e._setInterstitialState(i.CLOSED)
            },
            onError: function() {
              return e._setInterstitialState(i.FAILED)
            }
          }
        }), e
      }
      return r = d, (o = [{
        key: "platformId",
        get: function() {
          return e.TELEGRAM
        }
      }, {
        key: "platformLanguage",
        get: function() {
          return this._platformSdk ? this._platformSdk.initDataUnsafe.user.language_code : bi(Ai(d.prototype), "platformLanguage", this)
        }
      }, {
        key: "deviceType",
        get: function() {
          switch (Ri(this, Ii)) {
            case "android":
            case "android_x":
            case "ios":
              return c.MOBILE;
            case "tdesktop":
            case "unigram":
            case "macos":
              return c.DESKTOP;
            default:
              return bi(Ai(d.prototype), "deviceType", this)
          }
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return !0
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), $t("https://telegram.org/js/telegram-web-app.js").then((function() {
            e._platformSdk = window.Telegram.WebApp;
            var t = e._platformSdk.initDataUnsafe.user;
            e._playerId = t.id, e._playerName = [t.first_name, t.last_name].filter(Boolean).join(" "), e._playerPhotos = [t.photo_url], Di(e, Ii, e._platformSdk.platform), e._isInitialized = !0, e._options && e._options.adsgramBlockId ? $t("https://sad.adsgram.ai/js/sad.min.js").then((function() {
              Di(e, Li, window.Adsgram.init({
                blockId: e._options.adsgramBlockId
              }))
            })).finally((function() {
              e._resolvePromiseDecorator(f.INITIALIZE)
            })) : e._resolvePromiseDecorator(f.INITIALIZE)
          }))), t.promise
        }
      }, {
        key: "sendMessage",
        value: function(e) {
          return e === l.GAME_READY ? (this._platformSdk.ready(), Promise.resolve()) : bi(Ai(d.prototype), "sendMessage", this).call(this, e)
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || bi(Ai(d.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || bi(Ai(d.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, t, r) {
          var o = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, n) {
            Array.isArray(e) ? o._platformSdk.CloudStorage.getItems(e, (function(o, i) {
              if (o) n(o);
              else {
                var a = [];
                e.forEach((function(e) {
                  var t = i[e];
                  if (r && "string" == typeof t) try {
                    t = JSON.parse(t)
                  } catch (e) {}
                  a.push(t)
                })), t(a)
              }
            })) : o._platformSdk.CloudStorage.getItem(e, (function(e, o) {
              e && n(e);
              var i = o;
              if (r && "string" == typeof i) try {
                i = JSON.parse(i)
              } catch (e) {}
              t(i)
            }))
          })) : bi(Ai(d.prototype), "getDataFromStorage", this).call(this, e, t)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          var o = this;
          return r === u.PLATFORM_INTERNAL ? new Promise((function(r) {
            var n = Array.isArray(e) ? e : [e],
              i = (Array.isArray(t) ? t : [t]).map((function(e) {
                return "string" != typeof e ? JSON.stringify(e) : e
              }));
            n.forEach((function(e, t) {
              return o._platformSdk.CloudStorage.setItem(e, i[t])
            })), r()
          })) : bi(Ai(d.prototype), "setDataToStorage", this).call(this, e, t, r)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          var r = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t) {
            (Array.isArray(e) ? e : [e]).forEach((function(e) {
              return r._platformSdk.CloudStorage.removeItem(e)
            })), t()
          })) : bi(Ai(d.prototype), "deleteDataFromStorage", this).call(this, e, t)
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e = this;
          Ri(this, Li) ? (Ri(this, Li).addEventListener("onStart", Ri(this, Ni).onStart), Ri(this, Li).addEventListener("onSkip", Ri(this, Ni).onSkip), Ri(this, Li).addEventListener("onError", Ri(this, Ni).onError), Ri(this, Li).addEventListener("onBannerNotFound", Ri(this, Ni).onError), Ri(this, Li).show().finally((function() {
            Ri(e, Li).removeEventListener("onStart", Ri(e, Ni).onStart), Ri(e, Li).removeEventListener("onSkip", Ri(e, Ni).onSkip), Ri(e, Li).removeEventListener("onError", Ri(e, Ni).onError), Ri(e, Li).removeEventListener("onBannerNotFound", Ri(e, Ni).onError)
          }))) : this._setInterstitialState(i.FAILED)
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e = this;
          Ri(this, Li) ? (Ri(this, Li).addEventListener("onStart", Ri(this, ji).onStart), Ri(this, Li).addEventListener("onSkip", Ri(this, ji).onSkip), Ri(this, Li).addEventListener("onReward", Ri(this, ji).onReward), Ri(this, Li).addEventListener("onError", Ri(this, ji).onError), Ri(this, Li).addEventListener("onBannerNotFound", Ri(this, ji).onError), Ri(this, Li).show().finally((function() {
            Ri(e, Li).addEventListener("onStart", Ri(e, ji).onStart), Ri(e, Li).addEventListener("onSkip", Ri(e, ji).onSkip), Ri(e, Li).addEventListener("onReward", Ri(e, ji).onReward), Ri(e, Li).addEventListener("onError", Ri(e, ji).onError), Ri(e, Li).addEventListener("onBannerNotFound", Ri(e, ji).onError)
          }))) : this._setRewardedState(a.FAILED)
        }
      }, {
        key: "clipboardRead",
        value: function() {
          var e = this,
            t = this._getPromiseDecorator(f.CLIPBOARD_READ);
          return t || (t = this._createPromiseDecorator(f.CLIPBOARD_READ), this._platformSdk.readTextFromClipboard((function(t) {
            t ? e._resolvePromiseDecorator(f.CLIPBOARD_READ, t) : e._rejectPromiseDecorator(f.CLIPBOARD_READ)
          }))), t.promise
        }
      }]) && Si(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), d
    }(qt);
    var Bi = ["player"];

    function Mi(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, o)
      }
      return r
    }

    function Fi(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Mi(Object(r), !0).forEach((function(t) {
          var o, n, i;
          o = e, n = t, i = r[t], (n = Ui(n)) in o ? Object.defineProperty(o, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : o[n] = i
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mi(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    function Gi(e) {
      return Gi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, Gi(e)
    }

    function Hi(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Ui(o.key), o)
      }
    }

    function Ui(e) {
      var t = function(e, t) {
        if ("object" != Gi(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != Gi(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == Gi(t) ? t : String(t)
    }

    function zi() {
      return zi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Vi(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, zi.apply(this, arguments)
    }

    function Wi(e, t) {
      return Wi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, Wi(e, t)
    }

    function xi(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Vi(e) {
      return Vi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Vi(e)
    }

    function Yi(e, t) {
      ! function(e, t) {
        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
      }(e, t), t.add(e)
    }

    function Zi(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return r
    }
    var Ki = "userData",
      Ji = "6129580795478709",
      qi = new WeakSet,
      $i = new WeakSet;

    function Xi() {
      var e = this;
      return new Promise((function(t, r) {
        e._platformSdk.api("user_data/retrieve", "POST", {
          key: Ki
        }, (function(e) {
          e.error && "Key not found" !== e.error && r(e);
          var o = {};
          try {
            e.jsondata && (o = JSON.parse(e.jsondata))
          } catch (e) {}
          t(o)
        }))
      }))
    }

    function Qi(e) {
      if ("ok" === e.status) {
        this._isPlayerAuthorized = !0, this._defaultStorageType = u.PLATFORM_INTERNAL;
        var t = e.authResponse.details,
          r = t.pid,
          o = t.locale,
          n = t.nickname,
          i = t.first_name,
          a = t.last_name,
          s = t.avatars;
        r && (this._playerId = r), this._platformLanguage = o, this._playerName = [i, a].filter((function(e) {
          return !!e
        })).join(" ") || n, this._playerPhotos = [];
        var c = s.thumb_url,
          l = s.medium_url,
          f = s.large_url;
        c && this._playerPhotos.push(c), l && this._playerPhotos.push(l), f && this._playerPhotos.push(f)
      }
    }
    const ea = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Wi(e, t)
      }(l, t);
      var r, o, n, s, c = (n = l, s = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Vi(n);
        if (s) {
          var r = Vi(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === Gi(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return xi(e)
        }(this, e)
      });

      function l() {
        var e;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, l);
        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        return Yi(xi(e = c.call.apply(c, [this].concat(r))), $i), Yi(xi(e), qi), e
      }
      return r = l, (o = [{
        key: "platformId",
        get: function() {
          return e.Y8
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardNativePopupSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardMultipleBoardsSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardSetScoreSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardGetScoreSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardGetEntriesSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isAchievementsSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isGetAchievementsListSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isAchievementsNativePopupSupported",
        get: function() {
          return !0
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t, r = this._getPromiseDecorator(f.INITIALIZE);
          return r || (r = this._createPromiseDecorator(f.INITIALIZE), null !== (t = this._options) && void 0 !== t && t.gameId ? $t("https://cdn.y8.com/api/sdk.js").then((function() {
            Xt("ID").then((function() {
              e._platformSdk = window.ID, e._platformSdk.Event.subscribe("id.init", (function() {
                var t, r, o, n, i, a;
                (t = {
                  hostId: "ca-host-pub-".concat(Ji),
                  adsenseId: e._options.channelId ? "ca-pub-".concat(Ji) : e._options.adsenseId,
                  channelId: e._options.channelId
                }, r = t.hostId, o = t.adsenseId, n = t.channelId, i = t.adFrequencyHint, a = void 0 === i ? "180s" : i, new Promise((function(e) {
                  var t = document.createElement("script");
                  t.setAttribute("data-ad-client", o), n ? t.setAttribute("data-ad-channel", n) : r && t.setAttribute("data-ad-host", r), t.setAttribute("data-ad-frequency-hint", a), t.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", t.addEventListener("load", e), document.head.appendChild(t)
                }))).then((function() {
                  e._showAd = function(e) {
                    window.adsbygoogle.push(e)
                  }, window.adsbygoogle.push({
                    preloadAdBreaks: "on",
                    sound: "on",
                    onReady: function() {}
                  })
                })), e._platformSdk.getLoginStatus((function(t) {
                  Zi(e, $i, Qi).call(e, t), e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE)
                }))
              })), e._platformSdk.init({
                appId: e._options.gameId
              })
            }))
          })) : this._rejectPromiseDecorator(f.INITIALIZE, m)), r.promise
        }
      }, {
        key: "authorizePlayer",
        value: function() {
          var e = this;
          return this._isPlayerAuthorized ? Promise.resolve() : new Promise((function(t, r) {
            e._platformSdk.login((function(o) {
              Zi(e, $i, Qi).call(e, o), "ok" === o.status ? t() : r()
            }))
          }))
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL || zi(Vi(l.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL ? this._isPlayerAuthorized : zi(Vi(l.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, t, r) {
          var o = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, n) {
            Zi(o, qi, Xi).call(o).then((function(o) {
              var n = (Array.isArray(e) ? e : [e]).map((function(e) {
                var t = o[e];
                return r || "object" !== Gi(t) || null === t ? null != t ? t : null : JSON.stringify(t)
              }));
              t(n)
            })).catch(n)
          })) : zi(Vi(l.prototype), "getDataFromStorage", this).call(this, e, t, r)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          var o = this;
          return r === u.PLATFORM_INTERNAL ? new Promise((function(r, n) {
            Zi(o, qi, Xi).call(o).then((function(i) {
              var a = Fi({}, i);
              if (Array.isArray(e))
                for (var s = 0; s < e.length; s++) a[e[s]] = t[s];
              else a[e] = t;
              o._platformSdk.api("user_data/submit", "POST", {
                key: Ki,
                value: JSON.stringify(a)
              }, (function(e) {
                "ok" === e.status ? r() : n(e)
              }))
            })).catch(n)
          })) : zi(Vi(l.prototype), "setDataToStorage", this).call(this, e, t, r)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          var r = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, o) {
            Zi(r, qi, Xi).call(r).then((function(n) {
              var i = Fi({}, n);
              if (Array.isArray(e))
                for (var a = 0; a < e.length; a++) delete i[e[a]];
              else delete i[e];
              r._platformSdk.api("user_data/submit", "POST", {
                key: Ki,
                value: JSON.stringify(i)
              }, (function(e) {
                "ok" === e.status ? t() : o(e)
              }))
            })).catch(o)
          })) : zi(Vi(l.prototype), "deleteDataFromStorage", this).call(this, e, t)
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e = this;
          this._showAd ? this._showAd({
            type: "start",
            name: "start-game",
            beforeAd: function() {
              e._setInterstitialState(i.OPENED)
            },
            afterAd: function() {
              e.interstitialState !== i.FAILED && e._setInterstitialState(i.CLOSED)
            },
            adBreakDone: function(t) {
              "viewed" !== t.breakStatus && e._setInterstitialState(i.FAILED)
            }
          }) : this._setInterstitialState(i.FAILED)
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e = this;
          this._showAd ? this._showAd({
            type: "reward",
            name: "rewarded Ad",
            beforeAd: function() {
              e._setRewardedState(a.OPENED)
            },
            afterAd: function() {
              e.rewardedState !== a.FAILED && e._setRewardedState(a.CLOSED)
            },
            beforeReward: function(e) {
              e(0)
            },
            adDismissed: function() {
              e._setRewardedState(a.FAILED)
            },
            adViewed: function() {
              e._setRewardedState(a.REWARDED)
            },
            adBreakDone: function(t) {
              "frequencyCapped" !== t.breakStatus && "other" !== t.breakStatus || e._setRewardedState(a.FAILED)
            }
          }) : this._setRewardedState(a.FAILED)
        }
      }, {
        key: "showLeaderboardNativePopup",
        value: function(e) {
          return this._isPlayerAuthorized ? e && e.table ? (this._platformSdk.GameAPI.Leaderboards.list(e), Promise.resolve()) : Promise.reject(new Error("`table` property is not provided")) : Promise.reject()
        }
      }, {
        key: "setLeaderboardScore",
        value: function(e) {
          var t = this;
          if (!this._isPlayerAuthorized) return Promise.reject();
          if (!e || !e.points || !e.table) return Promise.reject(new Error("`table` or `points` property is not provided"));
          var r = this._getPromiseDecorator(f.SET_LEADERBOARD_SCORE);
          return r || (r = this._createPromiseDecorator(f.SET_LEADERBOARD_SCORE), this._platformSdk.GameAPI.Leaderboards.save(e, (function(e) {
            var r = e.success,
              o = e.errormessage;
            r ? t._resolvePromiseDecorator(f.SET_LEADERBOARD_SCORE) : t._rejectPromiseDecorator(f.SET_LEADERBOARD_SCORE, o)
          }))), r.promise
        }
      }, {
        key: "getLeaderboardScore",
        value: function(e) {
          var t = this;
          if (!this._isPlayerAuthorized) return Promise.reject();
          if (!e || !e.table) return Promise.reject(new Error("`table` property is not provided"));
          var r = this._getPromiseDecorator(f.GET_LEADERBOARD_SCORE);
          return r || (r = this._createPromiseDecorator(f.GET_LEADERBOARD_SCORE), this._platformSdk.GameAPI.Leaderboards.listCustom(Fi(Fi({}, e), {}, {
            playerid: this.playerId
          }), (function(e) {
            var r = e.scores,
              o = e.success,
              n = e.errormessage;
            o ? t._resolvePromiseDecorator(f.GET_LEADERBOARD_SCORE, r[0]) : t._rejectPromiseDecorator(f.GET_LEADERBOARD_SCORE, n)
          }))), r.promise
        }
      }, {
        key: "getLeaderboardEntries",
        value: function(e) {
          var t = this;
          if (!this._isPlayerAuthorized) return Promise.reject();
          if (!e || !e.table) return Promise.reject(new Error("`table` property is not provided"));
          var r = this._getPromiseDecorator(f.GET_LEADERBOARD_ENTRIES);
          return r || (r = this._createPromiseDecorator(f.GET_LEADERBOARD_ENTRIES), this._platformSdk.GameAPI.Leaderboards.listCustom(e, (function(e) {
            var r = e.scores,
              o = e.success,
              n = e.errormessage;
            o ? t._resolvePromiseDecorator(f.GET_LEADERBOARD_ENTRIES, r) : t._rejectPromiseDecorator(f.GET_LEADERBOARD_ENTRIES, n)
          }))), r.promise
        }
      }, {
        key: "unlockAchievement",
        value: function(e) {
          var t = this;
          return this._isPlayerAuthorized && e.achievement && e.achievementkey ? new Promise((function(r) {
            t._platformSdk.GameAPI.Achievements.save(e, (function(e) {
              r(e)
            }))
          })) : Promise.reject()
        }
      }, {
        key: "getAchievementsList",
        value: function(e) {
          var t = this;
          return new Promise((function(r, o) {
            t._platformSdk.GameAPI.Achievements.listCustom(e, (function(e) {
              e.success ? r(e.achievements.map((function(e) {
                var t = e.player;
                return Fi(Fi({}, function(e, t) {
                  if (null == e) return {};
                  var r, o, n = function(e, t) {
                    if (null == e) return {};
                    var r, o, n = {},
                      i = Object.keys(e);
                    for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                  }
                  return n
                }(e, Bi)), {}, {
                  playerid: t.playerid,
                  playername: t.playername,
                  lastupdated: t.lastupdated,
                  date: t.date,
                  rdate: t.rdate
                })
              }))) : o(new Error(e.errorcode))
            }))
          }))
        }
      }, {
        key: "showAchievementsNativePopup",
        value: function(e) {
          return this._platformSdk.GameAPI.Achievements.list(e), Promise.resolve()
        }
      }]) && Hi(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), l
    }(qt);

    function ta(e) {
      return ta = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, ta(e)
    }

    function ra(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, oa(o.key), o)
      }
    }

    function oa(e) {
      var t = function(e, t) {
        if ("object" != ta(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != ta(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == ta(t) ? t : String(t)
    }

    function na() {
      return na = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = aa(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, na.apply(this, arguments)
    }

    function ia(e, t) {
      return ia = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, ia(e, t)
    }

    function aa(e) {
      return aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, aa(e)
    }
    const sa = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && ia(e, t)
      }(l, t);
      var r, o, n, s, c = (n = l, s = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = aa(n);
        if (s) {
          var r = aa(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === ta(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function l() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, l), c.apply(this, arguments)
      }
      return r = l, (o = [{
        key: "platformId",
        get: function() {
          return e.LAGGED
        }
      }, {
        key: "isLeaderboardSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardSetScoreSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isAchievementsSupported",
        get: function() {
          return !0
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), this._options && this._options.devId && this._options.publisherId ? $t("https://lagged.com/api/rev-share/lagged.js").then((function() {
            Xt("LaggedAPI").then((function() {
              e._platformSdk = window.LaggedAPI, e._platformSdk.init(e._options.devId, e._options.publisherId), e._platformSdk.User.get((function(t) {
                var r, o = null !== (r = null == t ? void 0 : t.user) && void 0 !== r ? r : {},
                  n = o.id,
                  i = o.name,
                  a = o.avatar;
                n > 0 && (e._playerId = n, e._playerName = i, e._playerPhotos.push(a), e._isPlayerAuthorized = !0), e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE)
              }))
            }))
          })) : this._rejectPromiseDecorator(f.INITIALIZE, _)), t.promise
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e !== u.PLATFORM_INTERNAL && na(aa(l.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e !== u.PLATFORM_INTERNAL && na(aa(l.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e = this;
          this._setInterstitialState(i.OPENED), this._platformSdk.APIAds.show((function() {
            e._setInterstitialState(i.CLOSED)
          }))
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e = this;
          this._setRewardedState(a.OPENED), this._platformSdk.GEvents.reward((function(t, r) {
            t ? r() : e._setRewardedState(a.FAILED)
          }), (function(t) {
            t ? (e._setRewardedState(a.REWARDED), e._setRewardedState(a.CLOSED)) : e._setRewardedState(a.FAILED)
          }))
        }
      }, {
        key: "setLeaderboardScore",
        value: function(e) {
          var t = this;
          if (!this._isPlayerAuthorized) return Promise.reject();
          if (void 0 === (null == e ? void 0 : e.score) || null == e || !e.boardId) return Promise.reject();
          var r = this._getPromiseDecorator(f.SET_LEADERBOARD_SCORE);
          if (!r) {
            r = this._createPromiseDecorator(f.SET_LEADERBOARD_SCORE);
            var o = {
              score: "string" == typeof e.score ? parseInt(e.score, 10) : e.score,
              board: e.boardId
            };
            this._platformSdk.Scores.save(o, (function(e) {
              e.success ? t._resolvePromiseDecorator(f.SET_LEADERBOARD_SCORE) : t._rejectPromiseDecorator(f.SET_LEADERBOARD_SCORE, e.errormsg)
            }))
          }
          return r.promise
        }
      }, {
        key: "unlockAchievement",
        value: function(e) {
          var t = this;
          return e.achievement ? new Promise((function(r, o) {
            t._platformSdk.Achievements.save(Array.isArray(e.achievement) ? e.achievement : [e.achievement], (function(e) {
              e.success ? r(e) : o(e.errormsg)
            }))
          })) : Promise.reject()
        }
      }]) && ra(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), l
    }(qt);

    function ua(e) {
      return ua = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, ua(e)
    }

    function ca(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ha(o.key), o)
      }
    }

    function la() {
      return la = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = da(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, la.apply(this, arguments)
    }

    function fa(e, t) {
      return fa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, fa(e, t)
    }

    function pa(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function da(e) {
      return da = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, da(e)
    }

    function ya(e, t, r) {
      return (t = ha(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    function ha(e) {
      var t = function(e, t) {
        if ("object" != ua(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != ua(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == ua(t) ? t : String(t)
    }
    const ma = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && fa(e, t)
      }(y, t);
      var r, o, n, p, d = (n = y, p = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = da(n);
        if (p) {
          var r = da(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === ua(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return pa(e)
        }(this, e)
      });

      function y() {
        var e;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, y);
        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        return ya(pa(e = d.call.apply(d, [this].concat(r))), "_contextId", null), ya(pa(e), "_placementId", null), ya(pa(e), "_leaderboardId", null), ya(pa(e), "_isPlayerAuthorized", !0), ya(pa(e), "_supportedApis", []), e
      }
      return r = y, o = [{
        key: "platformId",
        get: function() {
          return e.FACEBOOK
        }
      }, {
        key: "platformLanguage",
        get: function() {
          return this._platformLanguage
        }
      }, {
        key: "deviceType",
        get: function() {
          switch (this._platformSdk && this._platformSdk.getPlatform()) {
            case "IOS":
            case "MOBILE_WEB":
            case "ANDROID":
              return c.MOBILE;
            case "WEB":
              return c.DESKTOP;
            default:
              return la(da(y.prototype), "deviceType", this)
          }
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isPlayerAuthorized",
        get: function() {
          return this._isPlayerAuthorized
        }
      }, {
        key: "isBannerSupported",
        get: function() {
          return !0
        }
      }, {
        key: "isLeaderboardSupported",
        get: function() {
          return this._supportedApis.includes("getLeaderboardAsync")
        }
      }, {
        key: "isLeaderboardMultipleBoardsSupported",
        get: function() {
          return this._supportedApis.includes("getLeaderboardAsync")
        }
      }, {
        key: "isLeaderboardSetScoreSupported",
        get: function() {
          return this._supportedApis.includes("getLeaderboardAsync")
        }
      }, {
        key: "isLeaderboardGetScoreSupported",
        get: function() {
          return this._supportedApis.includes("getLeaderboardAsync")
        }
      }, {
        key: "isLeaderboardGetEntriesSupported",
        get: function() {
          return this._supportedApis.includes("getLeaderboardAsync")
        }
      }, {
        key: "isPaymentsSupported",
        get: function() {
          return this._supportedApis.includes("payments.purchaseAsync")
        }
      }, {
        key: "isGetCatalogSupported",
        get: function() {
          return this._supportedApis.includes("payments.getCatalogAsync")
        }
      }, {
        key: "isGetPurchasesSupported",
        get: function() {
          return this._supportedApis.includes("payments.getPurchasesAsync")
        }
      }, {
        key: "isConsumePurchaseSupported",
        get: function() {
          return this._supportedApis.includes("payments.consumePurchaseAsync")
        }
      }, {
        key: "isInviteFriendsSupported",
        get: function() {
          return this._supportedApis.includes("inviteAsync")
        }
      }, {
        key: "isShareSupported",
        get: function() {
          return this._supportedApis.includes("shareAsync")
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), $t("https://connect.facebook.net/en_US/fbinstant.7.1.js").then((function() {
            return Xt("FBInstant")
          })).then((function() {
            return e._platformSdk = window.FBInstant, e._platformSdk.initializeAsync()
          })).then((function() {
            e._placementId = e._options.placementId, e._playerId = e._platformSdk.player.getID(), e._playerName = e._platformSdk.player.getName(), e._playerPhotos.push(e._platformSdk.player.getPhoto()), e._contextId = e._platformSdk.context.getID(), e._platformLanguage = e._platformSdk.getLocale(), e._supportedApis = e._platformSdk.getSupportedAPIs(), e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE)
          })).catch((function(t) {
            return e._resolvePromiseDecorator(f.INITIALIZE, t)
          }))), t.promise
        }
      }, {
        key: "sendMessage",
        value: function(e) {
          var t = this;
          return e === l.GAME_READY ? (this._platformSdk.setLoadingProgress(100), new Promise((function(e) {
            t._platformSdk.startGameAsync().then(e)
          }))) : la(da(y.prototype), "sendMessage", this).call(this, e)
        }
      }, {
        key: "authorizePlayer",
        value: function() {
          return Promise.resolve()
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL ? this._supportedApis.includes("getDataAsync") : la(da(y.prototype), "isStorageSupported", this).call(this, e)
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return e === u.PLATFORM_INTERNAL ? this._isPlayerAuthorized : la(da(y.prototype), "isStorageAvailable", this).call(this, e)
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, t, r) {
          var o = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, n) {
            var i = Array.isArray(e) ? e : [e];
            o._platformSdk.player.getDataAsync(i).then((function(e) {
              var o = i.map((function(t) {
                var o = e[t];
                return r || "object" !== ua(o) || null === o ? null != o ? o : null : JSON.stringify(o)
              }));
              t(o)
            })).catch(n)
          })) : la(da(y.prototype), "getDataFromStorage", this).call(this, e, t, r)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, t, r) {
          var o = this;
          return r === u.PLATFORM_INTERNAL ? new Promise((function(r, n) {
            var i = {};
            if (Array.isArray(e))
              for (var a = 0; a < e.length; a++) i[e[a]] = t[a];
            else i[e] = t;
            o._platformSdk.player.setDataAsync(i).then(r).catch(n)
          })) : la(da(y.prototype), "setDataToStorage", this).call(this, e, t, r)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, t) {
          var r = this;
          return t === u.PLATFORM_INTERNAL ? new Promise((function(t, o) {
            var n = {};
            if (Array.isArray(e))
              for (var i = 0; i < e.length; i++) n[e[i]] = null;
            else n[e] = null;
            r._platformSdk.player.setDataAsync(n).then(t).catch(o)
          })) : la(da(y.prototype), "deleteDataFromStorage", this).call(this, e, t)
        }
      }, {
        key: "showBanner",
        value: function(e) {
          var t = this;
          this._platformSdk.loadBannerAdAsync(this._placementId, e).then((function() {
            t._setBannerState(s.SHOWN)
          })).catch((function() {
            t._setBannerState(s.FAILED)
          }))
        }
      }, {
        key: "hideBanner",
        value: function() {
          var e = this;
          this._platformSdk.hideBannerAdAsync().then((function() {
            e._setBannerState(s.HIDDEN)
          })).catch((function() {
            e._setBannerState(s.FAILED)
          }))
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e, t = this;
          this._platformSdk.getInterstitialAdAsync(this._placementId).then((function(t) {
            return e = t, t.loadAsync()
          })).then((function() {
            return t._setInterstitialState(i.OPENED), e.showAsync()
          })).then((function() {
            t._setInterstitialState(i.CLOSED)
          })).catch((function() {
            t._setInterstitialState(i.FAILED)
          }))
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e, t = this;
          this._platformSdk.getRewardedVideoAsync(this._placementId).then((function(t) {
            return e = t, t.loadAsync()
          })).then((function() {
            return t._setRewardedState(a.OPENED), e.showAsync()
          })).then((function() {
            t._setRewardedState(a.REWARDED), t._setRewardedState(a.CLOSED)
          })).catch((function() {
            t._setRewardedState(a.FAILED)
          }))
        }
      }, {
        key: "setLeaderboardScore",
        value: function(e) {
          var t = this;
          if (!this._isPlayerAuthorized) return Promise.reject();
          if (!e || !e.score || !e.leaderboardName) return Promise.reject();
          var r = this._getPromiseDecorator(f.SET_LEADERBOARD_SCORE);
          return r || (r = this._createPromiseDecorator(f.SET_LEADERBOARD_SCORE), this._platformSdk.getLeaderboardAsync(e.leaderboardName).then((function(t) {
            return t.setScoreAsync(e.score, e.extraData ? JSON.stringify(e.extraData) : null)
          })).then((function() {
            t._resolvePromiseDecorator(f.SET_LEADERBOARD_SCORE)
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.SET_LEADERBOARD_SCORE, e)
          }))), r.promise
        }
      }, {
        key: "getLeaderboardScore",
        value: function(e) {
          var t = this;
          if (!this._isPlayerAuthorized) return Promise.reject();
          if (!e || !e.leaderboardName) return Promise.reject();
          var r = this._getPromiseDecorator(f.GET_LEADERBOARD_SCORE);
          return r || (r = this._createPromiseDecorator(f.GET_LEADERBOARD_SCORE), this._platformSdk.getLeaderboardAsync(e.leaderboardName).then((function(e) {
            return e.getPlayerEntryAsync()
          })).then((function(e) {
            t._resolvePromiseDecorator(f.GET_LEADERBOARD_SCORE, e.getScore())
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.GET_LEADERBOARD_SCORE, e)
          }))), r.promise
        }
      }, {
        key: "getLeaderboardEntries",
        value: function(e) {
          var t = this;
          if (!e || !e.leaderboardName) return Promise.reject();
          var r = this._getPromiseDecorator(f.GET_LEADERBOARD_ENTRIES);
          if (!r) {
            var o, n;
            r = this._createPromiseDecorator(f.GET_LEADERBOARD_ENTRIES);
            var i = [null !== (o = e.count) && void 0 !== o ? o : 5, null !== (n = e.offset) && void 0 !== n ? n : 0];
            this._platformSdk.getLeaderboardAsync(e.leaderboardName).then((function(e) {
              return e.getConnectedPlayerEntriesAsync.apply(e, i)
            })).then((function(e) {
              var r = null;
              e && e.entries.length > 0 && (r = e.entries.map((function(e) {
                return {
                  rank: e.rank,
                  score: e.score,
                  format_score: e.format_score,
                  ts: e.ts,
                  extra_data: e.extra_data,
                  playerId: e.player.player_id,
                  playerName: e.player.name,
                  playerPhoto: e.player.photo
                }
              }))), t._resolvePromiseDecorator(f.GET_LEADERBOARD_ENTRIES, r)
            })).catch((function(e) {
              t._rejectPromiseDecorator(f.GET_LEADERBOARD_ENTRIES, e)
            }))
          }
          return r.promise
        }
      }, {
        key: "purchase",
        value: function(e) {
          var t = this;
          if (!e.productID) return Promise.reject();
          var r = this._getPromiseDecorator(f.PURCHASE);
          return r || (r = this._createPromiseDecorator(f.PURCHASE), this._platformSdk.payments.purchaseAsync({
            productID: e.productID,
            developerPayload: e.developerPayload ? JSON.stringify(e.developerPayload) : void 0
          }).then((function(e) {
            t._resolvePromiseDecorator(f.PURCHASE, e)
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.PURCHASE, e)
          }))), r.promise
        }
      }, {
        key: "getPaymentsPurchases",
        value: function() {
          var e = this,
            t = this._getPromiseDecorator(f.GET_PURCHASES);
          return t || (t = this._createPromiseDecorator(f.GET_PURCHASES), this._platformSdk.payments.getPurchasesAsync().then((function(t) {
            e._resolvePromiseDecorator(f.GET_PURCHASES, t)
          })).catch((function(t) {
            e._rejectPromiseDecorator(f.GET_PURCHASES, t)
          }))), t.promise
        }
      }, {
        key: "getPaymentsCatalog",
        value: function() {
          var e = this,
            t = this._getPromiseDecorator(f.GET_CATALOG);
          return t || (t = this._createPromiseDecorator(f.GET_CATALOG), this._platformSdk.payments.getCatalogAsync().then((function(t) {
            e._resolvePromiseDecorator(f.GET_CATALOG, t)
          })).catch((function(t) {
            e._rejectPromiseDecorator(f.GET_CATALOG, t)
          }))), t.promise
        }
      }, {
        key: "consumePurchase",
        value: function(e) {
          var t = this;
          if (!e.purchaseToken) return Promise.reject();
          var r = this._getPromiseDecorator(f.CONSUME_PURCHASE);
          return r || (r = this._createPromiseDecorator(f.CONSUME_PURCHASE), this._platformSdk.payments.consumePurchaseAsync(e.purchaseToken).then((function() {
            t._resolvePromiseDecorator(f.CONSUME_PURCHASE)
          })).catch((function(e) {
            t._rejectPromiseDecorator(f.CONSUME_PURCHASE, e)
          }))), r.promise
        }
      }, {
        key: "inviteFriends",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!e.image || !e.text) return Promise.reject();
          try {
            window.btoa(e.image)
          } catch (e) {
            return Promise.reject(e)
          }
          var t = this._getPromiseDecorator(f.INVITE_FRIENDS);
          return t || (t = this._createPromiseDecorator(f.INVITE_FRIENDS), this._platformSdk.inviteAsync(e)), t.promise
        }
      }, {
        key: "share",
        value: function(e) {
          var t = this;
          if (!e.image || !e.media || !e.text) return Promise.reject();
          try {
            window.btoa(e.image)
          } catch (e) {
            return Promise.reject(e)
          }
          return new Promise((function(r) {
            t._platform.shareAsync(e).then(r)
          }))
        }
      }], o && ca(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), y
    }(qt);

    function va(e) {
      return va = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, va(e)
    }

    function _a(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ga(o.key), o)
      }
    }

    function ga(e) {
      var t = function(e, t) {
        if ("object" != va(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != va(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == va(t) ? t : String(t)
    }
    var Sa = function() {
      function e() {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      var t, r;
      return t = e, r = [{
        key: "send",
        value: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*";
          window.parent && window.parent.postMessage(e, t)
        }
      }, {
        key: "addListener",
        value: function(e) {
          window.addEventListener("message", e)
        }
      }, {
        key: "removeListener",
        value: function(e) {
          window.removeEventListener("message", e)
        }
      }, {
        key: "generateMessageId",
        value: function() {
          return "".concat(Date.now(), "-").concat(Math.random())
        }
      }], r && _a(t.prototype, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e
    }();

    function ba(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, o)
      }
      return r
    }

    function Ea(e) {
      return Ea = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, Ea(e)
    }

    function Pa(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Ra(o.key), o)
      }
    }

    function Aa() {
      return Aa = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ka(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, Aa.apply(this, arguments)
    }

    function wa(e, t) {
      return wa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, wa(e, t)
    }

    function Oa(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function ka(e) {
      return ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, ka(e)
    }

    function Da(e, t, r) {
      return (t = Ra(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    function Ra(e) {
      var t = function(e, t) {
        if ("object" != Ea(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != Ea(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == Ea(t) ? t : String(t)
    }

    function Ta(e, t, r) {
      ! function(e, t) {
        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
      }(e, t), t.set(e, r)
    }

    function Ia(e, t) {
      var r = function(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
        return t.get(e)
      }(e, t);
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, r)
    }
    var La = "banner",
      ja = "get_data_from_storage",
      Na = "get_server_time",
      Ca = "clipboard_read",
      Ba = "unlock_achievement",
      Ma = "get_achievements",
      Fa = "isStorageInternalSupported",
      Ga = "isStorageLocalSupported",
      Ha = new WeakMap,
      Ua = new WeakMap;

    function za() {
      return this._supportedFeatures.includes("isStorageRemoteLocalSupported")
    }
    const Wa = function(r) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && wa(e, t)
      }(y, r);
      var o, n, c, p, d = (c = y, p = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = ka(c);
        if (p) {
          var r = ka(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === Ea(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return Oa(e)
        }(this, e)
      });

      function y() {
        var e;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, y);
        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        return Ta(Oa(e = d.call.apply(d, [this].concat(r))), Ha, {
          get: za,
          set: void 0
        }), Ta(Oa(e), Ua, {
          writable: !0,
          value: new Sa
        }), Da(Oa(e), "_supportedFeatures", []), e
      }
      return o = y, n = [{
        key: "platformId",
        get: function() {
          return e.QA_TOOL
        }
      }, {
        key: "platformLanguage",
        get: function() {
          return this._platformLanguage
        }
      }, {
        key: "platformTld",
        get: function() {
          return this._platformTld
        }
      }, {
        key: "isPlayerAuthorizationSupported",
        get: function() {
          return this._supportedFeatures.includes("isPlayerAuthorizationSupported")
        }
      }, {
        key: "isPaymentsSupported",
        get: function() {
          return this._supportedFeatures.includes("isPaymentsSupported")
        }
      }, {
        key: "isGetCatalogSupported",
        get: function() {
          return this._supportedFeatures.includes("isGetCatalogSupported")
        }
      }, {
        key: "isGetPurchasesSupported",
        get: function() {
          return this._supportedFeatures.includes("isGetPurchasesSupported")
        }
      }, {
        key: "isConsumePurchaseSupported",
        get: function() {
          return this._supportedFeatures.includes("isConsumePurchaseSupported")
        }
      }, {
        key: "isRemoteConfigSupported",
        get: function() {
          return this._supportedFeatures.includes("isRemoteConfigSupported")
        }
      }, {
        key: "isInviteFriendsSupported",
        get: function() {
          return this._supportedFeatures.includes("isInviteFriendsSupported")
        }
      }, {
        key: "isJoinCommunitySupported",
        get: function() {
          return this._supportedFeatures.includes("isJoinCommunitySupported")
        }
      }, {
        key: "isShareSupported",
        get: function() {
          return this._supportedFeatures.includes("isShareSupported")
        }
      }, {
        key: "isCreatePostSupported",
        get: function() {
          return this._supportedFeatures.includes("isCreatePostSupported")
        }
      }, {
        key: "isAddToHomeScreenSupported",
        get: function() {
          return this._supportedFeatures.includes("isAddToHomeScreenSupported")
        }
      }, {
        key: "isAddToFavoritesSupported",
        get: function() {
          return this._supportedFeatures.includes("isAddToFavoritesSupported")
        }
      }, {
        key: "isRateSupported",
        get: function() {
          return this._supportedFeatures.includes("isRateSupported")
        }
      }, {
        key: "isLeaderboardSupported",
        get: function() {
          return this._supportedFeatures.includes("isLeaderboardSupported")
        }
      }, {
        key: "isLeaderboardMultipleBoardsSupported",
        get: function() {
          return this._supportedFeatures.includes("isLeaderboardMultipleBoardsSupported")
        }
      }, {
        key: "isLeaderboardSetScoreSupported",
        get: function() {
          return this._supportedFeatures.includes("isLeaderboardSetScoreSupported")
        }
      }, {
        key: "isLeaderboardGetScoreSupported",
        get: function() {
          return this._supportedFeatures.includes("isLeaderboardGetScoreSupported")
        }
      }, {
        key: "isLeaderboardGetEntriesSupported",
        get: function() {
          return this._supportedFeatures.includes("isLeaderboardGetEntriesSupported")
        }
      }, {
        key: "isLeaderboardNativePopupSupported",
        get: function() {
          return this._supportedFeatures.includes("isLeaderboardNativePopupSupported")
        }
      }, {
        key: "isClipboardSupported",
        get: function() {
          return this._supportedFeatures.includes("isClipboardSupported")
        }
      }, {
        key: "isAchievementsSupported",
        get: function() {
          return this._supportedFeatures.includes("isAchievementsSupported")
        }
      }, {
        key: "isGetAchievementsListSupported",
        get: function() {
          return this._supportedFeatures.includes("isGetAchievementsListSupported")
        }
      }, {
        key: "isAchievementsNativePopupSupported",
        get: function() {
          return this._supportedFeatures.includes("isAchievementsNativePopupSupported")
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var r = this._getPromiseDecorator(f.INITIALIZE);
          return r || (r = this._createPromiseDecorator(f.INITIALIZE), this._defaultStorageType = u.PLATFORM_INTERNAL, Ia(this, Ua).addListener((function(r) {
            var o, n, i, a, s = r.data;
            (null == s ? void 0 : s.type) === t.PLATFORM && s.action === f.INITIALIZE && (e._supportedFeatures = s.supportedFeatures || [], e._isBannerSupported = e._supportedFeatures.includes("isBannerSupported"), e._platformLanguage = null !== (o = null === (n = s.config) || void 0 === n ? void 0 : n.platformLanguage) && void 0 !== o ? o : Aa(ka(y.prototype), "platformLanguage", e), e._platformTld = null !== (i = null === (a = s.config) || void 0 === a ? void 0 : a.platformTld) && void 0 !== i ? i : Aa(ka(y.prototype), "platformTld", e), e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE), Ia(e, Ua).send({
              type: "liveness",
              action: "ping",
              options: {
                version: "1.20.0"
              }
            }))
          })), Ia(this, Ua).send({
            type: t.PLATFORM,
            action: f.INITIALIZE
          })), r.promise
        }
      }, {
        key: "authorizePlayer",
        value: function() {
          var e = this,
            r = this._getPromiseDecorator(f.AUTHORIZE_PLAYER);
          if (!r) {
            r = this._createPromiseDecorator(f.AUTHORIZE_PLAYER);
            var o = Ia(this, Ua).generateMessageId();
            Ia(this, Ua).addListener((function r(n) {
              var i = n.data;
              if ((null == i ? void 0 : i.type) === t.PLAYER && i.action === f.AUTHORIZE_PLAYER && i.id === o) {
                var a = i.player;
                e._isPlayerAuthorized = !0, e._playerId = a.userId, e._playerName = a.name, a.profilePictureUrl && (e._playerPhotos = [a.profilePictureUrl]), e._resolvePromiseDecorator(f.AUTHORIZE_PLAYER), Ia(e, Ua).removeListener(r)
              }
            })), Ia(this, Ua).send({
              type: t.PLAYER,
              action: f.AUTHORIZE_PLAYER,
              id: o
            })
          }
          return r.promise
        }
      }, {
        key: "sendMessage",
        value: function(e) {
          return [l.GAME_READY, l.IN_GAME_LOADING_STARTED, l.IN_GAME_LOADING_STOPPED, l.GAMEPLAY_STARTED, l.GAMEPLAY_STOPPED, l.PLAYER_GOT_ACHIEVEMENT, l.GAME_OVER].includes(e) ? (Ia(this, Ua).send({
            type: t.PLATFORM,
            action: e
          }), Promise.resolve()) : Aa(ka(y.prototype), "sendMessage", this).call(this, e)
        }
      }, {
        key: "getServerTime",
        value: function() {
          var e = this;
          return new Promise((function(r, o) {
            var n, i = Ia(e, Ua).generateMessageId(),
              a = function a(s) {
                var u = s.data;
                if ((null == u ? void 0 : u.type) === t.PLATFORM && u.action === Na && u.id === i) {
                  if (!u.time) return void o(new Error("Invalid server time"));
                  clearTimeout(n), r(u.time), Ia(e, Ua).removeListener(a)
                }
              };
            Ia(e, Ua).addListener(a), Ia(e, Ua).send({
              type: t.PLATFORM,
              action: Na,
              id: i
            }), n = setTimeout((function() {
              o(new Error("Server time request timeout")), Ia(e, Ua).removeListener(a)
            }), 5e3)
          }))
        }
      }, {
        key: "isStorageSupported",
        value: function(e) {
          return Ia(this, Ua).send({
            type: t.STORAGE,
            action: "is_storage_supported",
            options: {
              storageType: e
            }
          }), !(e !== u.PLATFORM_INTERNAL || !this._supportedFeatures.includes(Fa)) || !(e !== u.LOCAL_STORAGE || !this._supportedFeatures.includes(Ga))
        }
      }, {
        key: "isStorageAvailable",
        value: function(e) {
          return Ia(this, Ua).send({
            type: t.STORAGE,
            action: "is_storage_available",
            options: {
              storageType: e
            }
          }), !(e !== u.PLATFORM_INTERNAL || !this._supportedFeatures.includes(Fa)) || !(e !== u.LOCAL_STORAGE || !this._supportedFeatures.includes(Ga))
        }
      }, {
        key: "getDataFromStorage",
        value: function(e, r, o) {
          var n = this;
          if (r === u.PLATFORM_INTERNAL || r === u.LOCAL_STORAGE && Ia(this, Ha)) {
            var i = Ia(this, Ua).generateMessageId();
            return new Promise((function(a) {
              Ia(n, Ua).addListener((function e(r) {
                var o = r.data;
                if ((null == o ? void 0 : o.type) === t.STORAGE && o.action === ja && o.id === i) {
                  var s = Object.values(o.storage);
                  a(s), Ia(n, Ua).removeListener(e)
                }
              })), Ia(n, Ua).send({
                type: t.STORAGE,
                action: ja,
                id: i,
                options: {
                  key: e,
                  storageType: r,
                  tryParseJson: o
                }
              })
            }))
          }
          return Ia(this, Ua).send({
            type: t.STORAGE,
            action: ja,
            options: {
              key: e,
              storageType: r,
              tryParseJson: o
            }
          }), Aa(ka(y.prototype), "getDataFromStorage", this).call(this, e, r, o)
        }
      }, {
        key: "setDataToStorage",
        value: function(e, r, o) {
          return Ia(this, Ua).send({
            type: t.STORAGE,
            action: "set_data_to_storage",
            options: {
              key: e,
              value: r,
              storageType: o
            }
          }), o === u.PLATFORM_INTERNAL || o === u.LOCAL_STORAGE && Ia(this, Ha) ? Promise.resolve() : Aa(ka(y.prototype), "setDataToStorage", this).call(this, e, r, o)
        }
      }, {
        key: "deleteDataFromStorage",
        value: function(e, r) {
          return Ia(this, Ua).send({
            type: t.STORAGE,
            action: "delete_data_from_storage",
            options: {
              key: e,
              storageType: r
            }
          }), r === u.PLATFORM_INTERNAL || r === u.LOCAL_STORAGE && Ia(this, Ha) ? Promise.resolve() : Aa(ka(y.prototype), "deleteDataFromStorage", this).call(this, e, r)
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e = this;
          Ia(this, Ua).addListener((function r(o) {
            var n = o.data;
            if ((null == n ? void 0 : n.type) === t.ADVERTISEMENT) switch (n.payload.status) {
              case "start":
                e._setInterstitialState(i.LOADING);
                break;
              case "open":
                e._setInterstitialState(i.OPENED);
                break;
              case "close":
                e._setInterstitialState(i.CLOSED), Ia(e, Ua).removeListener(r)
            }
          })), Ia(this, Ua).send({
            type: t.ADVERTISEMENT,
            action: "interstitial"
          })
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e = this;
          Ia(this, Ua).addListener((function r(o) {
            var n = o.data;
            if ((null == n ? void 0 : n.type) === t.ADVERTISEMENT) switch (n.payload.status) {
              case "start":
                e._setRewardedState(a.LOADING);
                break;
              case "open":
                e._setRewardedState(a.OPENED);
                break;
              case "rewarded":
                e._setRewardedState(a.REWARDED);
                break;
              case "close":
                e._setRewardedState(a.CLOSED), Ia(e, Ua).removeListener(r)
            }
          })), Ia(this, Ua).send({
            type: t.ADVERTISEMENT,
            action: "reward"
          })
        }
      }, {
        key: "showBanner",
        value: function() {
          this._setBannerState(s.SHOWN), Ia(this, Ua).send({
            type: t.ADVERTISEMENT,
            action: s.SHOWN,
            options: {
              type: La
            }
          })
        }
      }, {
        key: "hideBanner",
        value: function() {
          this._setBannerState(s.HIDDEN), Ia(this, Ua).send({
            type: t.ADVERTISEMENT,
            action: s.HIDDEN,
            options: {
              type: La
            }
          })
        }
      }, {
        key: "checkAdBlock",
        value: function() {
          return Ia(this, Ua).send({
            type: "check_adblock",
            action: f.ADBLOCK_DETECT
          }), Aa(ka(y.prototype), "checkAdBlock", this).call(this)
        }
      }, {
        key: "inviteFriends",
        value: function() {
          var e = this._getPromiseDecorator(f.INVITE_FRIENDS);
          return e || (e = this._createPromiseDecorator(f.INVITE_FRIENDS), this._resolvePromiseDecorator(f.INVITE_FRIENDS), Ia(this, Ua).send({
            type: t.SOCIAL,
            action: f.INVITE_FRIENDS
          })), e.promise
        }
      }, {
        key: "joinCommunity",
        value: function() {
          var e = this._getPromiseDecorator(f.JOIN_COMMUNITY);
          return e || (e = this._createPromiseDecorator(f.JOIN_COMMUNITY), this._resolvePromiseDecorator(f.JOIN_COMMUNITY), Ia(this, Ua).send({
            type: t.SOCIAL,
            action: f.JOIN_COMMUNITY
          })), e.promise
        }
      }, {
        key: "share",
        value: function() {
          var e = this._getPromiseDecorator(f.SHARE);
          return e || (e = this._createPromiseDecorator(f.SHARE), this._resolvePromiseDecorator(f.SHARE), Ia(this, Ua).send({
            type: t.SOCIAL,
            action: f.SHARE
          })), e.promise
        }
      }, {
        key: "createPost",
        value: function() {
          var e = this._getPromiseDecorator(f.CREATE_POST);
          return e || (e = this._createPromiseDecorator(f.CREATE_POST), this._resolvePromiseDecorator(f.CREATE_POST), Ia(this, Ua).send({
            type: t.SOCIAL,
            action: f.CREATE_POST
          })), e.promise
        }
      }, {
        key: "addToHomeScreen",
        value: function() {
          var e = this._getPromiseDecorator(f.ADD_TO_HOME_SCREEN);
          return e || (e = this._createPromiseDecorator(f.ADD_TO_HOME_SCREEN), this._resolvePromiseDecorator(f.ADD_TO_HOME_SCREEN), Ia(this, Ua).send({
            type: t.SOCIAL,
            action: f.ADD_TO_HOME_SCREEN
          })), e.promise
        }
      }, {
        key: "addToFavorites",
        value: function() {
          var e = this._getPromiseDecorator(f.ADD_TO_FAVORITES);
          return e || (e = this._createPromiseDecorator(f.ADD_TO_FAVORITES), this._resolvePromiseDecorator(f.ADD_TO_FAVORITES), Ia(this, Ua).send({
            type: t.SOCIAL,
            action: f.ADD_TO_FAVORITES
          })), e.promise
        }
      }, {
        key: "rate",
        value: function() {
          var e = this._getPromiseDecorator(f.RATE);
          return e || (e = this._createPromiseDecorator(f.RATE), this._resolvePromiseDecorator(f.RATE), Ia(this, Ua).send({
            type: t.SOCIAL,
            action: f.RATE
          })), e.promise
        }
      }, {
        key: "purchase",
        value: function() {
          var e = this,
            r = this._getPromiseDecorator(f.PURCHASE);
          if (!r) {
            r = this._createPromiseDecorator(f.PURCHASE);
            var o = Ia(this, Ua).generateMessageId();
            Ia(this, Ua).addListener((function r(n) {
              var i = n.data;
              if ((null == i ? void 0 : i.type) === t.PAYMENTS && i.action === f.PURCHASE && i.id === o) {
                if (!i.purchase || "object" !== Ea(i.purchase)) return void e._rejectPromiseDecorator(f.PURCHASE, new Error("Invalid purchase"));
                e._resolvePromiseDecorator(f.PURCHASE, i.purchase), Ia(e, Ua).removeListener(r)
              }
            })), Ia(this, Ua).send({
              type: t.PAYMENTS,
              action: f.PURCHASE,
              id: o
            })
          }
          return r.promise
        }
      }, {
        key: "getPaymentsPurchases",
        value: function() {
          var e = this,
            r = this._getPromiseDecorator(f.GET_PURCHASES);
          if (!r) {
            r = this._createPromiseDecorator(f.GET_PURCHASES);
            var o = Ia(this, Ua).generateMessageId();
            Ia(this, Ua).addListener((function r(n) {
              var i = n.data;
              (null == i ? void 0 : i.type) === t.PAYMENTS && i.action === f.GET_PURCHASES && i.id === o && (e._resolvePromiseDecorator(f.GET_PURCHASES, i.purchases), Ia(e, Ua).removeListener(r))
            })), Ia(this, Ua).send({
              type: t.PAYMENTS,
              action: f.GET_PURCHASES,
              id: o
            })
          }
          return r.promise
        }
      }, {
        key: "getPaymentsCatalog",
        value: function() {
          var e = this,
            r = this._getPromiseDecorator(f.GET_CATALOG);
          if (!r) {
            r = this._createPromiseDecorator(f.GET_CATALOG);
            var o = Ia(this, Ua).generateMessageId();
            Ia(this, Ua).addListener((function r(n) {
              var i = n.data;
              (null == i ? void 0 : i.type) === t.PAYMENTS && i.action === f.GET_CATALOG && i.id === o && (e._resolvePromiseDecorator(f.GET_CATALOG, i.catalog), Ia(e, Ua).removeListener(r))
            })), Ia(this, Ua).send({
              type: t.PAYMENTS,
              action: f.GET_CATALOG,
              id: o
            })
          }
          return r.promise
        }
      }, {
        key: "consumePurchase",
        value: function() {
          var e = this,
            r = this._getPromiseDecorator(f.CONSUME_PURCHASE);
          if (!r) {
            r = this._createPromiseDecorator(f.CONSUME_PURCHASE);
            var o = Ia(this, Ua).generateMessageId();
            Ia(this, Ua).addListener((function r(n) {
              var i = n.data;
              (null == i ? void 0 : i.type) === t.PAYMENTS && i.action === f.CONSUME_PURCHASE && i.id === o && (e._resolvePromiseDecorator(f.CONSUME_PURCHASE, i.result), Ia(e, Ua).removeListener(r))
            })), Ia(this, Ua).send({
              type: t.PAYMENTS,
              action: f.CONSUME_PURCHASE,
              id: o
            })
          }
          return r.promise
        }
      }, {
        key: "getRemoteConfig",
        value: function() {
          var e = this,
            r = this._getPromiseDecorator(f.GET_REMOTE_CONFIG);
          if (!r) {
            r = this._createPromiseDecorator(f.GET_REMOTE_CONFIG);
            var o = Ia(this, Ua).generateMessageId();
            Ia(this, Ua).addListener((function r(n) {
              var i = n.data;
              (null == i ? void 0 : i.type) === t.REMOTE_CONFIG && i.action === f.GET_REMOTE_CONFIG && i.id === o && (e._resolvePromiseDecorator(f.GET_REMOTE_CONFIG, i.result), Ia(e, Ua).removeListener(r))
            })), Ia(this, Ua).send({
              type: t.REMOTE_CONFIG,
              action: f.GET_REMOTE_CONFIG,
              id: o
            })
          }
          return r.promise
        }
      }, {
        key: "clipboardWrite",
        value: function(e) {
          var r = this,
            o = this._getPromiseDecorator(f.CLIPBOARD_WRITE);
          if (!o) {
            o = this._createPromiseDecorator(f.CLIPBOARD_WRITE);
            var n = Ia(this, Ua).generateMessageId();
            Ia(this, Ua).addListener((function e(o) {
              var i = o.data;
              (null == i ? void 0 : i.type) === t.CLIPBOARD && i.action === f.CLIPBOARD_WRITE && i.id === n && (r._resolvePromiseDecorator(f.CLIPBOARD_WRITE, !0), Ia(r, Ua).removeListener(e))
            })), Ia(this, Ua).send({
              type: t.CLIPBOARD,
              action: f.CLIPBOARD_WRITE,
              id: n,
              options: {
                text: e
              }
            })
          }
          return o.promise
        }
      }, {
        key: "clipboardRead",
        value: function() {
          var e = this,
            r = this._getPromiseDecorator(Ca);
          if (!r) {
            r = this._createPromiseDecorator(Ca);
            var o = Ia(this, Ua).generateMessageId();
            Ia(this, Ua).addListener((function r(n) {
              var i = n.data;
              if ((null == i ? void 0 : i.type) === t.CLIPBOARD && i.action === Ca && i.id === o) {
                var a = i.text;
                e._resolvePromiseDecorator(Ca, a), Ia(e, Ua).removeListener(r)
              }
            })), Ia(this, Ua).send({
              type: t.CLIPBOARD,
              action: Ca,
              id: o,
              options: {}
            })
          }
          return r.promise
        }
      }, {
        key: "setLeaderboardScore",
        value: function(e) {
          var r = this._getPromiseDecorator(f.SET_LEADERBOARD_SCORE);
          if (!r) {
            r = this._createPromiseDecorator(f.SET_LEADERBOARD_SCORE);
            var o = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ba(Object(r), !0).forEach((function(t) {
                  Da(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ba(Object(r)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
              }
              return e
            }({}, e);
            "string" == typeof o.score && (o.score = parseInt(o.score, 10)), Ia(this, Ua).send({
              type: t.LEADERBOARD,
              action: f.SET_LEADERBOARD_SCORE,
              options: o
            }), this._resolvePromiseDecorator(f.SET_LEADERBOARD_SCORE)
          }
          return r.promise
        }
      }, {
        key: "getLeaderboardScore",
        value: function(e) {
          var r = this,
            o = Object.values(e || {}).find((function(e) {
              return null == e ? void 0 : e.leaderboardName
            })),
            n = null == o ? void 0 : o.leaderboardName,
            i = "".concat(f.GET_LEADERBOARD_SCORE, "_").concat(n),
            a = this._getPromiseDecorator(i);
          if (!a) {
            a = this._createPromiseDecorator(i);
            var s = Ia(this, Ua).generateMessageId();
            Ia(this, Ua).addListener((function e(o) {
              var a = o.data;
              (null == a ? void 0 : a.type) === t.LEADERBOARD && a.action === f.GET_LEADERBOARD_SCORE && a.id === s && a.leaderboardName === n && (r._resolvePromiseDecorator(i, a.score), Ia(r, Ua).removeListener(e))
            })), Ia(this, Ua).send({
              type: t.LEADERBOARD,
              action: f.GET_LEADERBOARD_SCORE,
              id: s,
              leaderboardName: n,
              options: e
            })
          }
          return a.promise
        }
      }, {
        key: "getLeaderboardEntries",
        value: function(e) {
          var r = this,
            o = this._getPromiseDecorator(f.GET_LEADERBOARD_ENTRIES);
          if (!o) {
            o = this._createPromiseDecorator(f.GET_LEADERBOARD_ENTRIES);
            var n = Ia(this, Ua).generateMessageId();
            Ia(this, Ua).addListener((function e(o) {
              var i;
              (null === (i = o.data) || void 0 === i ? void 0 : i.type) === t.LEADERBOARD && o.data.action === f.GET_LEADERBOARD_ENTRIES && o.data.id === n && (r._resolvePromiseDecorator(f.GET_LEADERBOARD_ENTRIES, o.data.entries), Ia(r, Ua).removeListener(e))
            })), Ia(this, Ua).send({
              type: t.LEADERBOARD,
              action: f.GET_LEADERBOARD_ENTRIES,
              id: n,
              options: e
            })
          }
          return o.promise
        }
      }, {
        key: "showLeaderboardNativePopup",
        value: function(e) {
          var r = this._getPromiseDecorator(f.SHOW_LEADERBOARD_NATIVE_POPUP);
          return r || (r = this._createPromiseDecorator(f.SHOW_LEADERBOARD_NATIVE_POPUP), Ia(this, Ua).send({
            type: t.LEADERBOARD,
            action: f.SHOW_LEADERBOARD_NATIVE_POPUP,
            options: e
          }), this._resolvePromiseDecorator(f.SHOW_LEADERBOARD_NATIVE_POPUP)), r.promise
        }
      }, {
        key: "unlockAchievement",
        value: function(e) {
          var r = this;
          return new Promise((function(o) {
            var n = Ia(r, Ua).generateMessageId();
            Ia(r, Ua).addListener((function e(i) {
              var a = i.data;
              (null == a ? void 0 : a.type) === t.ACHIEVEMENTS && a.action === Ba && a.id === n && (o(a.result), Ia(r, Ua).removeListener(e))
            })), Ia(r, Ua).send({
              type: t.ACHIEVEMENTS,
              action: Ba,
              id: n,
              options: e
            })
          }))
        }
      }, {
        key: "getAchievementsList",
        value: function(e) {
          var r = this;
          return new Promise((function(o) {
            var n = Ia(r, Ua).generateMessageId();
            Ia(r, Ua).addListener((function e(i) {
              var a = i.data;
              (null == a ? void 0 : a.type) === t.ACHIEVEMENTS && a.action === Ma && a.id === n && (o(a.result), Ia(r, Ua).removeListener(e))
            })), Ia(r, Ua).send({
              type: t.ACHIEVEMENTS,
              action: Ma,
              id: n,
              options: e
            })
          }))
        }
      }, {
        key: "showAchievementsNativePopup",
        value: function() {
          return Ia(this, Ua).send({
            type: t.ACHIEVEMENTS,
            action: "show_achievements_native_popup"
          }), Promise.resolve()
        }
      }], n && Pa(o.prototype, n), Object.defineProperty(o, "prototype", {
        writable: !1
      }), y
    }(qt);

    function xa(e) {
      return xa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, xa(e)
    }

    function Va(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Ya(o.key), o)
      }
    }

    function Ya(e) {
      var t = function(e, t) {
        if ("object" != xa(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != xa(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == xa(t) ? t : String(t)
    }

    function Za() {
      return Za = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var o = function(e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ja(e)););
          return e
        }(e, t);
        if (o) {
          var n = Object.getOwnPropertyDescriptor(o, t);
          return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
        }
      }, Za.apply(this, arguments)
    }

    function Ka(e, t) {
      return Ka = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
      }, Ka(e, t)
    }

    function Ja(e) {
      return Ja = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, Ja(e)
    }
    const qa = function(t) {
      ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && Ka(e, t)
      }(c, t);
      var r, o, n, s, u = (n = c, s = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }(), function() {
        var e, t = Ja(n);
        if (s) {
          var r = Ja(this).constructor;
          e = Reflect.construct(t, arguments, r)
        } else e = t.apply(this, arguments);
        return function(e, t) {
          if (t && ("object" === xa(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }(this, e)
      });

      function c() {
        return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c), u.apply(this, arguments)
      }
      return r = c, (o = [{
        key: "platformId",
        get: function() {
          return e.POKI
        }
      }, {
        key: "isExternalLinksAllowed",
        get: function() {
          return !1
        }
      }, {
        key: "isClipboardSupported",
        get: function() {
          return !1
        }
      }, {
        key: "initialize",
        value: function() {
          var e = this;
          if (this._isInitialized) return Promise.resolve();
          var t = this._getPromiseDecorator(f.INITIALIZE);
          return t || (t = this._createPromiseDecorator(f.INITIALIZE), $t("https://game-cdn.poki.com/scripts/v2/poki-sdk.js").then((function() {
            Xt("PokiSDK", "init").then((function() {
              e._platformSdk = window.PokiSDK, e._platformSdk.init().then((function() {
                e._isInitialized = !0, e._resolvePromiseDecorator(f.INITIALIZE)
              }))
            }))
          }))), t.promise
        }
      }, {
        key: "sendMessage",
        value: function(e) {
          switch (e) {
            case l.GAME_READY:
              return this._platformSdk.gameLoadingFinished(), Promise.resolve();
            case l.GAMEPLAY_STARTED:
              return this._platformSdk.gameplayStart(), Promise.resolve();
            case l.GAMEPLAY_STOPPED:
              return this._platformSdk.gameplayStop(), Promise.resolve();
            default:
              return Za(Ja(c.prototype), "sendMessage", this).call(this, e)
          }
        }
      }, {
        key: "showInterstitial",
        value: function() {
          var e = this,
            t = !1;
          this._platformSdk.commercialBreak((function() {
            t = !0, e._setInterstitialState(i.OPENED)
          })).then((function() {
            t ? e._setInterstitialState(i.CLOSED) : e._setInterstitialState(i.FAILED)
          })).catch((function(t) {
            e._setInterstitialState(i.FAILED, t)
          }))
        }
      }, {
        key: "showRewarded",
        value: function() {
          var e = this,
            t = !1;
          this._platformSdk.rewardedBreak((function() {
            t = !0, e._setRewardedState(a.OPENED)
          })).then((function(r) {
            t ? (r && e._setRewardedState(a.REWARDED), e._setRewardedState(a.CLOSED)) : e._setRewardedState(a.FAILED)
          })).catch((function(t) {
            e._setRewardedState(a.FAILED, t)
          }))
        }
      }]) && Va(r.prototype, o), Object.defineProperty(r, "prototype", {
        writable: !1
      }), c
    }(qt);

    function $a(e) {
      return $a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, $a(e)
    }

    function Xa(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, o)
      }
      return r
    }

    function Qa(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Xa(Object(r), !0).forEach((function(t) {
          var o, n, i;
          o = e, n = t, i = r[t], (n = ts(n)) in o ? Object.defineProperty(o, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : o[n] = i
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xa(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    function es(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ts(o.key), o)
      }
    }

    function ts(e) {
      var t = function(e, t) {
        if ("object" != $a(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, "string");
          if ("object" != $a(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
      }(e);
      return "symbol" == $a(t) ? t : String(t)
    }

    function rs(e, t) {
      ns(e, t), t.add(e)
    }

    function os(e, t, r) {
      ns(e, t), t.set(e, r)
    }

    function ns(e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function is(e, t, r) {
      return function(e, t, r) {
        if (t.set) t.set.call(e, r);
        else {
          if (!t.writable) throw new TypeError("attempted to set read only private field");
          t.value = r
        }
      }(e, us(e, t, "set"), r), r
    }

    function as(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return r
    }

    function ss(e, t) {
      return function(e, t) {
        return t.get ? t.get.call(e) : t.value
      }(e, us(e, t, "get"))
    }

    function us(e, t, r) {
      if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
      return t.get(e)
    }
    var cs = new WeakMap,
      ls = new WeakMap,
      fs = new WeakMap,
      ps = new WeakMap,
      ds = new WeakSet,
      ys = new WeakSet,
      hs = new WeakSet;

    function ms() {
      var t, r = e.MOCK;
      this._options || (this._options = {});
      var o = new URL(window.location.href);
      if (this._options.forciblySetPlatformId) r = as(this, ys, vs).call(this, this._options.forciblySetPlatformId.toLowerCase());
      else {
        var n = ["y", "a", "n", "d", "e", "x", ".", "n", "e", "t"].join("");
        o.searchParams.has("platform_id") ? r = as(this, ys, vs).call(this, o.searchParams.get("platform_id").toLowerCase()) : o.hostname.includes(n) || o.hash.includes("yandex") ? r = e.YANDEX : o.hostname.includes("crazygames.") || o.hostname.includes("1001juegos.com") ? r = e.CRAZY_GAMES : o.hostname.includes("gamedistribution.com") ? r = e.GAME_DISTRIBUTION : o.hostname.includes("lagged.") ? r = e.LAGGED : o.hostname.includes("wortal.ai") ? r = e.WORTAL : o.searchParams.has("api_id") && o.searchParams.has("viewer_id") && o.searchParams.has("auth_key") || o.searchParams.has("vk_app_id") ? r = e.VK : o.searchParams.has("app_id") && o.searchParams.has("player_id") && o.searchParams.has("game_sid") && o.searchParams.has("auth_key") ? r = e.ABSOLUTE_GAMES : o.searchParams.has("playdeck") ? r = e.PLAYDECK : o.hash.includes("tgWebAppData") ? r = e.TELEGRAM : o.hostname.includes("y8") ? r = e.Y8 : o.hostname.includes("fbsbx") ? r = e.FACEBOOK : (o.hostname.includes("poki-gdn") || o.hostname.includes("poki-user-content")) && (r = e.POKI)
      }
      var i = o.searchParams.get("game_id");
      !this._options.gameId && i && (this._options.gameId = i);
      var a = (null === (t = this._options.platforms) || void 0 === t ? void 0 : t[r]) || this._options;
      switch (r) {
        case e.VK:
          is(this, fs, new dr(a));
          break;
        case e.YANDEX:
          is(this, fs, new Cr(a));
          break;
        case e.CRAZY_GAMES:
          is(this, fs, new ro(a));
          break;
        case e.ABSOLUTE_GAMES:
          is(this, fs, new ho(a));
          break;
        case e.GAME_DISTRIBUTION:
          is(this, fs, new ko(a));
          break;
        case e.OK:
          is(this, fs, new Tn(a));
          break;
        case e.PLAYGAMA:
          is(this, fs, new Un(a));
          break;
        case e.WORTAL:
          is(this, fs, new _i(a));
          break;
        case e.PLAYDECK:
          is(this, fs, new ri(a));
          break;
        case e.TELEGRAM:
          is(this, fs, new Ci(a));
          break;
        case e.Y8:
          is(this, fs, new ea(a));
          break;
        case e.LAGGED:
          is(this, fs, new sa(a));
          break;
        case e.FACEBOOK:
          is(this, fs, new ma(a));
          break;
        case e.POKI:
          is(this, fs, new qa(a));
          break;
        case e.QA_TOOL:
          is(this, fs, new Wa(a));
          break;
        default:
          is(this, fs, new qt)
      }
    }

    function vs(t) {
      for (var r = Object.values(e), o = 0; o < r.length; o++)
        if (t === r[o]) return t;
      return e.MOCK
    }

    function _s(e) {
      return ss(this, cs) || console.error(p), ss(this, ps)[e]
    }
    const gs = function() {
      function r() {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, r), rs(this, hs), rs(this, ys), rs(this, ds), os(this, cs, {
          writable: !0,
          value: !1
        }), os(this, ls, {
          writable: !0,
          value: null
        }), os(this, fs, {
          writable: !0,
          value: null
        }), os(this, ps, {
          writable: !0,
          value: {}
        })
      }
      var f, p;
      return f = r, (p = [{
        key: "version",
        get: function() {
          return "1.20.0"
        }
      }, {
        key: "isInitialized",
        get: function() {
          return ss(this, cs)
        }
      }, {
        key: "platform",
        get: function() {
          return as(this, hs, _s).call(this, t.PLATFORM)
        }
      }, {
        key: "player",
        get: function() {
          return as(this, hs, _s).call(this, t.PLAYER)
        }
      }, {
        key: "game",
        get: function() {
          return as(this, hs, _s).call(this, t.GAME)
        }
      }, {
        key: "storage",
        get: function() {
          return as(this, hs, _s).call(this, t.STORAGE)
        }
      }, {
        key: "advertisement",
        get: function() {
          return as(this, hs, _s).call(this, t.ADVERTISEMENT)
        }
      }, {
        key: "social",
        get: function() {
          return as(this, hs, _s).call(this, t.SOCIAL)
        }
      }, {
        key: "device",
        get: function() {
          return as(this, hs, _s).call(this, t.DEVICE)
        }
      }, {
        key: "leaderboard",
        get: function() {
          return as(this, hs, _s).call(this, t.LEADERBOARD)
        }
      }, {
        key: "payments",
        get: function() {
          return as(this, hs, _s).call(this, t.PAYMENTS)
        }
      }, {
        key: "achievements",
        get: function() {
          return as(this, hs, _s).call(this, t.ACHIEVEMENTS)
        }
      }, {
        key: "remoteConfig",
        get: function() {
          return as(this, hs, _s).call(this, t.REMOTE_CONFIG)
        }
      }, {
        key: "clipboard",
        get: function() {
          return as(this, hs, _s).call(this, t.CLIPBOARD)
        }
      }, {
        key: "PLATFORM_ID",
        get: function() {
          return e
        }
      }, {
        key: "PLATFORM_MESSAGE",
        get: function() {
          return l
        }
      }, {
        key: "MODULE_NAME",
        get: function() {
          return t
        }
      }, {
        key: "EVENT_NAME",
        get: function() {
          return o
        }
      }, {
        key: "INTERSTITIAL_STATE",
        get: function() {
          return i
        }
      }, {
        key: "REWARDED_STATE",
        get: function() {
          return a
        }
      }, {
        key: "BANNER_STATE",
        get: function() {
          return s
        }
      }, {
        key: "STORAGE_TYPE",
        get: function() {
          return u
        }
      }, {
        key: "VISIBILITY_STATE",
        get: function() {
          return n
        }
      }, {
        key: "DEVICE_TYPE",
        get: function() {
          return c
        }
      }, {
        key: "initialize",
        value: function(e) {
          var r = this;
          return ss(this, cs) ? Promise.resolve() : (ss(this, ls) || (is(this, ls, new T), fetch("./playgama-bridge-config.json").then((function(e) {
            return e.json()
          })).then((function(e) {
            r._options = Qa({}, e)
          })).catch((function() {
            r._options = Qa({}, e)
          })).finally((function() {
            as(r, ds, ms).call(r), ss(r, fs).initialize().then((function() {
              ss(r, ps)[t.PLATFORM] = new W(ss(r, fs)), ss(r, ps)[t.PLAYER] = new J(ss(r, fs)), ss(r, ps)[t.GAME] = new ne(ss(r, fs)), ss(r, ps)[t.STORAGE] = new le(ss(r, fs)), ss(r, ps)[t.ADVERTISEMENT] = new Qe(ss(r, fs)), ss(r, ps)[t.SOCIAL] = new it(ss(r, fs)), ss(r, ps)[t.DEVICE] = new ft(ss(r, fs)), ss(r, ps)[t.LEADERBOARD] = new vt(ss(r, fs)), ss(r, ps)[t.PAYMENTS] = new Pt(ss(r, fs)), ss(r, ps)[t.REMOTE_CONFIG] = new Rt(ss(r, fs)), ss(r, ps)[t.CLIPBOARD] = new Ct(ss(r, fs)), ss(r, ps)[t.ACHIEVEMENTS] = new Ut(ss(r, fs)), is(r, cs, !0), console.info("%c PlaygamaBridge v.".concat(r.version, " initialized. "), "background: #01A5DA; color: white"), ss(r, ls) && (ss(r, ls).resolve(), is(r, ls, null))
            }))
          }))), ss(this, ls).promise)
        }
      }]) && es(f.prototype, p), Object.defineProperty(f, "prototype", {
        writable: !1
      }), r
    }();
    window.bridge = new gs, window.playgamaBridge = window.bridge
  })()
})();