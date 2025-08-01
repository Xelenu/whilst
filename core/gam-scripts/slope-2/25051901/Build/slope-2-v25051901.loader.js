function createUnityInstance(t, n, l) {
  function d(e, t) {
    if (!d.aborted && n.showBanner) return "error" == t && (d.aborted = !0), n.showBanner(e, t);
    switch (t) {
      case "error":
        console.error(e);
        break;
      case "warning":
        console.warn(e);
        break;
      default:
        console.log(e)
    }
  }

  function r(e) {
    var t = e.reason || e.error,
      n = t ? t.toString() : e.message || e.reason || "",
      r = t && t.stack ? t.stack.toString() : "";
    (n += "\n" + (r = r.startsWith(n) ? r.substring(n.length) : r).trim()) && c.stackTraceRegExp && c.stackTraceRegExp.test(n) && k(n, e.filename || t && (t.fileName || t.sourceURL) || "", e.lineno || t && (t.lineNumber || t.line) || 0)
  }

  function e(e, t, n) {
    var r = e[t];
    void 0 !== r && r || (console.warn('Config option "' + t + '" is missing or empty. Falling back to default value: "' + n + '". Consider updating your WebGL template to include the missing config option.'), e[t] = n)
  }
  l = l || function() {};
  var o, c = {
    canvas: t,
    webglContextAttributes: {
      preserveDrawingBuffer: !1,
      powerPreference: 2
    },
    cacheControl: function(e) {
      return e == c.dataUrl ? "must-revalidate" : "no-store"
    },
    streamingAssetsUrl: "StreamingAssets",
    downloadProgress: {},
    deinitializers: [],
    intervals: {},
    setInterval: function(e, t) {
      e = window.setInterval(e, t);
      return this.intervals[e] = !0, e
    },
    clearInterval: function(e) {
      delete this.intervals[e], window.clearInterval(e)
    },
    preRun: [],
    postRun: [],
    print: function(e) {
      console.log(e)
    },
    printErr: function(e) {
      console.error(e), "string" == typeof e && -1 != e.indexOf("wasm streaming compile failed") && (-1 != e.toLowerCase().indexOf("mime") ? d('HTTP Response Header "Content-Type" configured incorrectly on the server for file ' + c.codeUrl + ' , should be "application/wasm". Startup time performance will suffer.', "warning") : d('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file ' + c.codeUrl + ", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.", "warning"))
    },
    locateFile: function(e) {
      return e
    },
    disabledCanvasEvents: ["contextmenu", "dragstart"]
  };
  for (o in e(n, "companyName", "Unity"), e(n, "productName", "WebGL Player"), e(n, "productVersion", "1.0"), n) c[o] = n[o];
  c.streamingAssetsUrl = new URL(c.streamingAssetsUrl, document.URL).href;
  var a = c.disabledCanvasEvents.slice();

  function i(e) {
    e.preventDefault()
  }
  a.forEach(function(e) {
    t.addEventListener(e, i)
  }), window.addEventListener("error", r), window.addEventListener("unhandledrejection", r), c.deinitializers.push(function() {
    for (var e in c.disableAccessToMediaDevices(), a.forEach(function(e) {
        t.removeEventListener(e, i)
      }), window.removeEventListener("error", r), window.removeEventListener("unhandledrejection", r), c.intervals) window.clearInterval(e);
    c.intervals = {}
  }), c.QuitCleanup = function() {
    for (var e = 0; e < c.deinitializers.length; e++) c.deinitializers[e]();
    c.deinitializers = [], "function" == typeof c.onQuit && c.onQuit()
  };
  var s, u, f, h, b, m, p, g, w = "",
    v = "",
    y = (document.addEventListener("webkitfullscreenchange", function(e) {
      document.webkitCurrentFullScreenElement === t ? t.style.width && (w = t.style.width, v = t.style.height, t.style.width = "100%", t.style.height = "100%") : w && (t.style.width = w, t.style.height = v, v = w = "")
    }), {
      Module: c,
      SetFullscreen: function() {
        if (c.SetFullscreen) return c.SetFullscreen.apply(c, arguments);
        c.print("Failed to set Fullscreen mode: Player not loaded yet.")
      },
      SendMessage: function() {
        if (c.SendMessage) return c.SendMessage.apply(c, arguments);
        c.print("Failed to execute SendMessage: Player not loaded yet.")
      },
      Quit: function() {
        return new Promise(function(e, t) {
          c.shouldQuit = !0, c.onQuit = e
        })
      }
    });

  function k(e, t, n) {
    -1 == e.indexOf("fullscreen error") && (c.startupErrorHandler ? c.startupErrorHandler(e, t, n) : c.errorHandler && c.errorHandler(e, t, n) || (console.log("Invoking error handler due to\n" + e), "function" == typeof dump && dump("Invoking error handler due to\n" + e), k.didShowErrorMessage || (-1 != (e = "An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n" + e).indexOf("DISABLE_EXCEPTION_CATCHING") ? e = "An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace." : -1 != e.indexOf("Cannot enlarge memory arrays") ? e = "Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings." : -1 == e.indexOf("Invalid array buffer length") && -1 == e.indexOf("Invalid typed array length") && -1 == e.indexOf("out of memory") && -1 == e.indexOf("could not allocate memory") || (e = "The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."), alert(e), k.didShowErrorMessage = !0)))
  }

  function x(e, t) {
    if ("symbolsUrl" != e) {
      var n = c.downloadProgress[e],
        r = (n = n || (c.downloadProgress[e] = {
          started: !1,
          finished: !1,
          lengthComputable: !1,
          total: 0,
          loaded: 0
        }), "object" != typeof t || "progress" != t.type && "load" != t.type || (n.started || (n.started = !0, n.lengthComputable = t.lengthComputable), n.total = t.total, n.loaded = t.loaded, "load" == t.type && (n.finished = !0)), 0),
        o = 0,
        a = 0,
        i = 0,
        s = 0;
      for (e in c.downloadProgress) {
        if (!(n = c.downloadProgress[e]).started) return;
        a++, n.lengthComputable ? (r += n.loaded, o += n.total, i++) : n.finished || s++
      }
      l(.9 * (a ? (a - s - (o ? i * (o - r) / o : 0)) / a : 0))
    }
  }

  function _() {
    var o = this;
    o.isConnected = new Promise(function(t, n) {
      try {
        function r() {
          o.openDBTimeout && (clearTimeout(o.openDBTimeout), o.openDBTimeout = null)
        }
        o.openDBTimeout = setTimeout(function() {
          void 0 === o.database && n(new Error("Could not connect to database: Timeout."))
        }, 2e3);
        var e = h.open(s.name, s.version);
        e.onupgradeneeded = function(e) {
          var t;
          (e = (e = e).target.result).objectStoreNames.contains(f.name) || e.createObjectStore(f.name), e.objectStoreNames.contains(u.name) || (t = e.createObjectStore(u.name, {
            keyPath: "url"
          }), ["version", "company", "product", "updated", "revalidated", "accessed"].forEach(function(e) {
            t.createIndex(e, e)
          }))
        }, e.onsuccess = function(e) {
          r(), o.database = e.target.result, t()
        }, e.onerror = function(e) {
          r(), o.database = null, n(new Error("Could not connect to database."))
        }
      } catch (e) {
        r(), o.database = null, n(new Error("Could not connect to database."))
      }
    })
  }

  function S(e) {
    console.log("[UnityCache] " + e)
  }

  function E(e) {
    return E.link = E.link || document.createElement("a"), E.link.href = e, E.link.href
  }

  function C(t) {
    t = t || {}, this.headers = new Headers, Object.keys(t.headers).forEach(function(e) {
      this.headers.set(e, t.headers[e])
    }.bind(this)), this.redirected = t.redirected, this.status = t.status, this.statusText = t.statusText, this.type = t.type, this.url = t.url, this.parsedBody = t.parsedBody, Object.defineProperty(this, "ok", {
      get: function() {
        return 200 <= this.status && this.status <= 299
      }.bind(this)
    })
  }

  function B(e, t, n, r, o) {
    var a = {
      url: e,
      version: p.version,
      company: t,
      product: n,
      updated: r,
      revalidated: r,
      accessed: r,
      response: {
        headers: {}
      }
    };
    return o && (o.headers.forEach(function(e, t) {
      a.response.headers[t] = e
    }), ["redirected", "status", "statusText", "type", "url"].forEach(function(e) {
      a.response[e] = o[e]
    }), a.response.parsedBody = o.parsedBody), a
  }
  c.SystemInfo = function() {
    var e, t, n, r, o = navigator.userAgent + " ",
      a = [
        ["Firefox", "Firefox"],
        ["OPR", "Opera"],
        ["Edg", "Edge"],
        ["SamsungBrowser", "Samsung Browser"],
        ["Trident", "Internet Explorer"],
        ["MSIE", "Internet Explorer"],
        ["Chrome", "Chrome"],
        ["CriOS", "Chrome on iOS Safari"],
        ["FxiOS", "Firefox on iOS Safari"],
        ["Safari", "Safari"]
      ];

    function i(e, t, n) {
      return (e = RegExp(e, "i").exec(t)) && e[n]
    }
    for (var s = 0; s < a.length; ++s)
      if (t = i(a[s][0] + "[/ ](.*?)[ \\)]", o, 1)) {
        e = a[s][1];
        break
      }
    "Safari" == e && (t = i("Version/(.*?) ", o, 1)), "Internet Explorer" == e && (t = i("rv:(.*?)\\)? ", o, 1) || t);
    for (var l = [
        ["Windows (.*?)[;)]", "Windows"],
        ["Android ([0-9_.]+)", "Android"],
        ["iPhone OS ([0-9_.]+)", "iPhoneOS"],
        ["iPad.*? OS ([0-9_.]+)", "iPadOS"],
        ["FreeBSD( )", "FreeBSD"],
        ["OpenBSD( )", "OpenBSD"],
        ["Linux|X11()", "Linux"],
        ["Mac OS X ([0-9_\\.]+)", "MacOS"],
        ["bot|google|baidu|bing|msn|teoma|slurp|yandex", "Search Bot"]
      ], d = 0; d < l.length; ++d)
      if (c = i(l[d][0], o, 1)) {
        n = l[d][1], c = c.replace(/_/g, ".");
        break
      } var u, c = {
        "NT 5.0": "2000",
        "NT 5.1": "XP",
        "NT 5.2": "Server 2003",
        "NT 6.0": "Vista",
        "NT 6.1": "7",
        "NT 6.2": "8",
        "NT 6.3": "8.1",
        "NT 10.0": "10"
      } [c] || c,
      f = ((f = document.createElement("canvas")) && (u = (h = f.getContext("webgl2")) ? 2 : 0, h || (h = f && f.getContext("webgl")) && (u = 1), h && (r = h.getExtension("WEBGL_debug_renderer_info") && h.getParameter(37446) || h.getParameter(7937))), "undefined" != typeof SharedArrayBuffer),
      h = "object" == typeof WebAssembly && "function" == typeof WebAssembly.compile;
    return {
      width: screen.width,
      height: screen.height,
      userAgent: o.trim(),
      browser: e || "Unknown browser",
      browserVersion: t || "Unknown version",
      mobile: /Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),
      os: n || "Unknown OS",
      osVersion: c || "Unknown OS Version",
      gpu: r || "Unknown GPU",
      language: navigator.userLanguage || navigator.language,
      hasWebGL: u,
      hasCursorLock: !!document.body.requestPointerLock,
      hasFullscreen: !!document.body.requestFullscreen || !!document.body.webkitRequestFullscreen,
      hasThreads: f,
      hasWasm: h,
      hasWasmThreads: !1
    }
  }(), c.abortHandler = function(e) {
    return k(e, "", 0), !0
  }, Error.stackTraceLimit = Math.max(Error.stackTraceLimit || 0, 50), c.readBodyWithProgress = function(a, i, s) {
    var e = a.body ? a.body.getReader() : void 0,
      l = void 0 !== a.headers.get("Content-Length"),
      d = function(e, t) {
        if (!t) return 0;
        var t = e.headers.get("Content-Encoding"),
          n = parseInt(e.headers.get("Content-Length"));
        switch (t) {
          case "br":
            return Math.round(5 * n);
          case "gzip":
            return Math.round(4 * n);
          default:
            return n
        }
      }(a, l),
      u = new Uint8Array(d),
      c = [],
      f = 0,
      h = 0;
    return l || console.warn("[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."),
      function o() {
        return void 0 === e ? a.arrayBuffer().then(function(e) {
          var t = new Uint8Array(e);
          return i({
            type: "progress",
            response: a,
            total: e.length,
            loaded: 0,
            lengthComputable: l,
            chunk: s ? t : null
          }), t
        }) : e.read().then(function(e) {
          if (e.done) {
            if (f === d) return u;
            if (f < d) return u.slice(0, f);
            for (var t = new Uint8Array(f), n = (t.set(u, 0), h), r = 0; r < c.length; ++r) t.set(c[r], n), n += c[r].length;
            return t
          }
          return f + e.value.length <= u.length ? (u.set(e.value, f), h = f + e.value.length) : c.push(e.value), f += e.value.length, i({
            type: "progress",
            response: a,
            total: Math.max(d, f),
            loaded: f,
            lengthComputable: l,
            chunk: s ? e.value : null
          }), o()
        })
      }().then(function(e) {
        return i({
          type: "load",
          response: a,
          total: e.length,
          loaded: e.length,
          lengthComputable: l,
          chunk: null
        }), a.parsedBody = e, a
      })
  }, c.fetchWithProgress = function(e, t) {
    var n = function() {};
    return t && t.onProgress && (n = t.onProgress), fetch(e, t).then(function(e) {
      return c.readBodyWithProgress(e, n, t.enableStreamingDownload)
    })
  }, c.UnityCache = (s = {
    name: "UnityCache",
    version: 3
  }, u = {
    name: "RequestStore",
    version: 1
  }, f = {
    name: "WebAssembly",
    version: 1
  }, h = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, _.UnityCacheDatabase = s, _.RequestStore = u, _.WebAssemblyStore = f, b = null, _.getInstance = function() {
    return b = b || new _
  }, _.destroyInstance = function() {
    return b ? b.close().then(function() {
      b = null
    }) : Promise.resolve()
  }, _.clearCache = function() {
    return _.destroyInstance().then(function() {
      return new Promise(function(e, t) {
        var n = h.deleteDatabase(s.name);
        n.onsuccess = function() {
          e()
        }, n.onerror = function() {
          t(new Error("Could not delete database."))
        }, n.onblocked = function() {
          t(new Error("Database blocked."))
        }
      })
    })
  }, _.prototype.execute = function(a, i, s) {
    return this.isConnected.then(function() {
      return new Promise(function(t, n) {
        try {
          var e, r, o;
          null === this.database ? n(new Error("indexedDB access denied")) : (e = -1 != ["put", "delete", "clear"].indexOf(i) ? "readwrite" : "readonly", r = this.database.transaction([a], e).objectStore(a), "openKeyCursor" == i && (r = r.index(s[0]), s = s.slice(1)), (o = r[i].apply(r, s)).onsuccess = function(e) {
            t(e.target.result)
          }, o.onerror = function(e) {
            n(e)
          })
        } catch (e) {
          n(e)
        }
      }.bind(this))
    }.bind(this))
  }, _.prototype.loadRequest = function(e) {
    return this.execute(u.name, "get", [e])
  }, _.prototype.storeRequest = function(e) {
    return this.execute(u.name, "put", [e])
  }, _.prototype.close = function() {
    return this.isConnected.then(function() {
      this.database && (this.database.close(), this.database = null)
    }.bind(this))
  }, _), c.cachedFetch = (m = c.UnityCache, p = m.RequestStore, g = c.fetchWithProgress, C.prototype.arrayBuffer = function() {
    return Promise.resolve(this.parsedBody.buffer)
  }, C.prototype.blob = function() {
    return this.arrayBuffer().then(function(e) {
      return new Blob([e])
    })
  }, C.prototype.json = function() {
    return this.text().then(function(e) {
      return JSON.parse(e)
    })
  }, C.prototype.text = function() {
    var e = new TextDecoder;
    return Promise.resolve(e.decode(this.parsedBody))
  }, function(r, o) {
    var e, t, a = m.getInstance(),
      n = E("string" == typeof r ? r : r.url),
      i = {
        enabled: (e = n, (!(t = o) || !t.method || "GET" === t.method) && ((!t || -1 != ["must-revalidate", "immutable"].indexOf(t.control)) && !!e.match("^https?://")))
      };

    function s(e, t) {
      return g(e, t).then(function(e) {
        if (i.enabled && !i.revalidated) {
          if (304 === e.status) return i.result.revalidated = i.result.accessed, i.revalidated = !0, a.storeRequest(i.result).then(function() {
            S("'" + i.result.url + "' successfully revalidated and served from the indexedDB cache")
          }).catch(function(e) {
            S("'" + i.result.url + "' successfully revalidated but not stored in the indexedDB cache due to the error: " + e)
          }), new C(i.result.response);
          200 == e.status ? (i.result = B(e.url, i.company, i.product, i.accessed, e), i.revalidated = !0, a.storeRequest(i.result).then(function() {
            S("'" + i.result.url + "' successfully downloaded and stored in the indexedDB cache")
          }).catch(function(e) {
            S("'" + i.result.url + "' successfully downloaded but not stored in the indexedDB cache due to the error: " + e)
          })) : S("'" + i.result.url + "' request failed with status: " + e.status + " " + e.statusText)
        }
        return e
      })
    }

    function l(e) {
      o && o.onProgress && (o.onProgress({
        type: "progress",
        total: e.parsedBody.length,
        loaded: e.parsedBody.length,
        lengthComputable: !0
      }), o.onProgress({
        type: "load",
        total: e.parsedBody.length,
        loaded: e.parsedBody.length,
        lengthComputable: !0
      }))
    }
    return o && (i.control = o.control, i.company = o.company, i.product = o.product), i.result = B(n, i.company, i.product, Date.now()), i.revalidated = !1, i.enabled ? a.loadRequest(i.result.url).then(function(e) {
      if (!e || e.version !== p.version) return s(r, o);
      i.result = e, i.result.accessed = Date.now();
      var t, n = new C(i.result.response);
      return "immutable" == i.control ? (i.revalidated = !0, a.storeRequest(i.result), S("'" + i.result.url + "' served from the indexedDB cache without revalidation"), l(n), n) : (e = i.result.url, (t = window.location.href.match(/^[a-z]+:\/\/[^\/]+/)) && !e.lastIndexOf(t[0], 0) || !n.headers.get("Last-Modified") && !n.headers.get("ETag") ? (e = (o = o || {}).headers || {}, o.headers = e, n.headers.get("Last-Modified") ? (e["If-Modified-Since"] = n.headers.get("Last-Modified"), e["Cache-Control"] = "no-cache") : n.headers.get("ETag") && (e["If-None-Match"] = n.headers.get("ETag"), e["Cache-Control"] = "no-cache"), s(r, o)) : fetch(i.result.url, {
        method: "HEAD"
      }).then(function(t) {
        return i.revalidated = ["Last-Modified", "ETag"].every(function(e) {
          return !n.headers.get(e) || n.headers.get(e) == t.headers.get(e)
        }), i.revalidated ? (i.result.revalidated = i.result.accessed, a.storeRequest(i.result), S("'" + i.result.url + "' successfully revalidated and served from the indexedDB cache"), l(n), n) : s(r, o)
      }))
    }).catch(function(e) {
      return S("Failed to load '" + i.result.url + "' from indexedDB cache due to the error: " + e), g(r, o)
    }) : g(r, o)
  });
  var U = {
    gzip: {
      require: function(e) {
        var t, n = {
          "inflate.js": function(e, t, n) {
            "use strict";
            var c = e("./zlib/inflate"),
              f = e("./utils/common"),
              h = e("./utils/strings"),
              b = e("./zlib/constants"),
              r = e("./zlib/messages"),
              o = e("./zlib/zstream"),
              a = e("./zlib/gzheader"),
              m = Object.prototype.toString;

            function i(e) {
              if (!(this instanceof i)) return new i(e);
              this.options = f.assign({
                chunkSize: 16384,
                windowBits: 0,
                to: ""
              }, e || {});
              var t = this.options;
              if (t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new o, this.strm.avail_out = 0, (e = c.inflateInit2(this.strm, t.windowBits)) !== b.Z_OK) throw new Error(r[e]);
              this.header = new a, c.inflateGetHeader(this.strm, this.header)
            }

            function s(e, t) {
              if ((t = new i(t)).push(e, !0), t.err) throw t.msg || r[t.err];
              return t.result
            }
            i.prototype.push = function(e, t) {
              var n, r, o, a, i, s = this.strm,
                l = this.options.chunkSize,
                d = this.options.dictionary,
                u = !1;
              if (this.ended) return !1;
              r = t === ~~t ? t : !0 === t ? b.Z_FINISH : b.Z_NO_FLUSH, "string" == typeof e ? s.input = h.binstring2buf(e) : "[object ArrayBuffer]" === m.call(e) ? s.input = new Uint8Array(e) : s.input = e, s.next_in = 0, s.avail_in = s.input.length;
              do {
                if (0 === s.avail_out && (s.output = new f.Buf8(l), s.next_out = 0, s.avail_out = l), (n = c.inflate(s, b.Z_NO_FLUSH)) === b.Z_NEED_DICT && d && (i = "string" == typeof d ? h.string2buf(d) : "[object ArrayBuffer]" === m.call(d) ? new Uint8Array(d) : d, n = c.inflateSetDictionary(this.strm, i)), n === b.Z_BUF_ERROR && !0 === u && (n = b.Z_OK, u = !1), n !== b.Z_STREAM_END && n !== b.Z_OK) return this.onEnd(n), !(this.ended = !0)
              } while (!s.next_out || 0 !== s.avail_out && n !== b.Z_STREAM_END && (0 !== s.avail_in || r !== b.Z_FINISH && r !== b.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i = h.utf8border(s.output, s.next_out), o = s.next_out - i, a = h.buf2string(s.output, i), s.next_out = o, s.avail_out = l - o, o && f.arraySet(s.output, s.output, i, o, 0), this.onData(a)) : this.onData(f.shrinkBuf(s.output, s.next_out))), 0 === s.avail_in && 0 === s.avail_out && (u = !0), (0 < s.avail_in || 0 === s.avail_out) && n !== b.Z_STREAM_END);
              return (r = n === b.Z_STREAM_END ? b.Z_FINISH : r) === b.Z_FINISH ? (n = c.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === b.Z_OK) : r !== b.Z_SYNC_FLUSH || (this.onEnd(b.Z_OK), !(s.avail_out = 0))
            }, i.prototype.onData = function(e) {
              this.chunks.push(e)
            }, i.prototype.onEnd = function(e) {
              e === b.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = f.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
            }, n.Inflate = i, n.inflate = s, n.inflateRaw = function(e, t) {
              return (t = t || {}).raw = !0, s(e, t)
            }, n.ungzip = s
          },
          "utils/common.js": function(e, t, n) {
            "use strict";
            var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array,
              o = (n.assign = function(e) {
                for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                  var n = t.shift();
                  if (n) {
                    if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                    for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
                  }
                }
                return e
              }, n.shrinkBuf = function(e, t) {
                if (e.length !== t) {
                  if (e.subarray) return e.subarray(0, t);
                  e.length = t
                }
                return e
              }, {
                arraySet: function(e, t, n, r, o) {
                  if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), o);
                  else
                    for (var a = 0; a < r; a++) e[o + a] = t[n + a]
                },
                flattenChunks: function(e) {
                  for (var t, n, r, o = 0, a = 0, i = e.length; a < i; a++) o += e[a].length;
                  for (r = new Uint8Array(o), a = t = 0, i = e.length; a < i; a++) n = e[a], r.set(n, t), t += n.length;
                  return r
                }
              }),
              a = {
                arraySet: function(e, t, n, r, o) {
                  for (var a = 0; a < r; a++) e[o + a] = t[n + a]
                },
                flattenChunks: function(e) {
                  return [].concat.apply([], e)
                }
              };
            n.setTyped = function(e) {
              e ? (n.Buf8 = Uint8Array, n.Buf16 = Uint16Array, n.Buf32 = Int32Array, n.assign(n, o)) : (n.Buf8 = Array, n.Buf16 = Array, n.Buf32 = Array, n.assign(n, a))
            }, n.setTyped(r)
          },
          "utils/strings.js": function(e, t, n) {
            "use strict";
            var l = e("./common"),
              o = !0,
              a = !0;
            try {
              String.fromCharCode.apply(null, [0])
            } catch (e) {
              o = !1
            }
            try {
              String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (e) {
              a = !1
            }
            for (var d = new l.Buf8(256), r = 0; r < 256; r++) d[r] = 252 <= r ? 6 : 248 <= r ? 5 : 240 <= r ? 4 : 224 <= r ? 3 : 192 <= r ? 2 : 1;

            function u(e, t) {
              if (t < 65537 && (e.subarray && a || !e.subarray && o)) return String.fromCharCode.apply(null, l.shrinkBuf(e, t));
              for (var n = "", r = 0; r < t; r++) n += String.fromCharCode(e[r]);
              return n
            }
            d[254] = d[254] = 1, n.string2buf = function(e) {
              for (var t, n, r, o, a = e.length, i = 0, s = 0; s < a; s++) 55296 == (64512 & (n = e.charCodeAt(s))) && s + 1 < a && 56320 == (64512 & (r = e.charCodeAt(s + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), s++), i += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
              for (t = new l.Buf8(i), s = o = 0; o < i; s++) 55296 == (64512 & (n = e.charCodeAt(s))) && s + 1 < a && 56320 == (64512 & (r = e.charCodeAt(s + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), s++), n < 128 ? t[o++] = n : (n < 2048 ? t[o++] = 192 | n >>> 6 : (n < 65536 ? t[o++] = 224 | n >>> 12 : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63), t[o++] = 128 | n >>> 6 & 63), t[o++] = 128 | 63 & n);
              return t
            }, n.buf2binstring = function(e) {
              return u(e, e.length)
            }, n.binstring2buf = function(e) {
              for (var t = new l.Buf8(e.length), n = 0, r = t.length; n < r; n++) t[n] = e.charCodeAt(n);
              return t
            }, n.buf2string = function(e, t) {
              for (var n, r, o = t || e.length, a = new Array(2 * o), i = 0, s = 0; s < o;)
                if ((n = e[s++]) < 128) a[i++] = n;
                else if (4 < (r = d[n])) a[i++] = 65533, s += r - 1;
              else {
                for (n &= 2 === r ? 31 : 3 === r ? 15 : 7; 1 < r && s < o;) n = n << 6 | 63 & e[s++], r--;
                1 < r ? a[i++] = 65533 : n < 65536 ? a[i++] = n : (n -= 65536, a[i++] = 55296 | n >> 10 & 1023, a[i++] = 56320 | 1023 & n)
              }
              return u(a, i)
            }, n.utf8border = function(e, t) {
              for (var n = (t = (t = t || e.length) > e.length ? e.length : t) - 1; 0 <= n && 128 == (192 & e[n]);) n--;
              return !(n < 0) && 0 !== n && n + d[e[n]] > t ? n : t
            }
          },
          "zlib/inflate.js": function(e, t, n) {
            "use strict";
            var L = e("../utils/common"),
              O = e("./adler32"),
              I = e("./crc32"),
              A = e("./inffast"),
              P = e("./inftrees"),
              D = 0,
              N = -2,
              z = 1,
              r = 852,
              o = 592;

            function F(e) {
              return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
            }

            function a() {
              this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new L.Buf16(320), this.work = new L.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
            }

            function i(e) {
              var t;
              return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = z, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new L.Buf32(r), t.distcode = t.distdyn = new L.Buf32(o), t.sane = 1, t.back = -1, D) : N
            }

            function s(e) {
              var t;
              return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, i(e)) : N
            }

            function l(e, t) {
              var n, r;
              return !e || !e.state || (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t)) ? N : (null !== r.window && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, s(e))
            }

            function d(e, t) {
              var n;
              return e ? (n = new a, (e.state = n).window = null, (n = l(e, t)) !== D && (e.state = null), n) : N
            }
            var Z, j, H = !0;

            function M(e, t, n, r) {
              var o;
              return null === (e = e.state).window && (e.wsize = 1 << e.wbits, e.wnext = 0, e.whave = 0, e.window = new L.Buf8(e.wsize)), r >= e.wsize ? (L.arraySet(e.window, t, n - e.wsize, e.wsize, 0), e.wnext = 0, e.whave = e.wsize) : (r < (o = e.wsize - e.wnext) && (o = r), L.arraySet(e.window, t, n - r, o, e.wnext), (r -= o) ? (L.arraySet(e.window, t, n - r, r, 0), e.wnext = r, e.whave = e.wsize) : (e.wnext += o, e.wnext === e.wsize && (e.wnext = 0), e.whave < e.wsize && (e.whave += o))), 0
            }
            n.inflateReset = s, n.inflateReset2 = l, n.inflateResetKeep = i, n.inflateInit = function(e) {
              return d(e, 15)
            }, n.inflateInit2 = d, n.inflate = function(e, t) {
              var n, r, o, a, i, s, l, d, u, c, f, h, b, m, p, g, w, v, y, k, x, _, S, E, C = 0,
                B = new L.Buf8(4),
                U = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
              if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return N;
              12 === (n = e.state).mode && (n.mode = 13), i = e.next_out, o = e.output, l = e.avail_out, a = e.next_in, r = e.input, s = e.avail_in, d = n.hold, u = n.bits, c = s, f = l, _ = D;
              e: for (;;) switch (n.mode) {
                case z:
                  if (0 === n.wrap) n.mode = 13;
                  else {
                    for (; u < 16;) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    if (2 & n.wrap && 35615 === d) B[n.check = 0] = 255 & d, B[1] = d >>> 8 & 255, n.check = I(n.check, B, 2, 0), u = d = 0, n.mode = 2;
                    else if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & d) << 8) + (d >> 8)) % 31) e.msg = "incorrect header check", n.mode = 30;
                    else if (8 != (15 & d)) e.msg = "unknown compression method", n.mode = 30;
                    else {
                      if (u -= 4, x = 8 + (15 & (d >>>= 4)), 0 === n.wbits) n.wbits = x;
                      else if (x > n.wbits) {
                        e.msg = "invalid window size", n.mode = 30;
                        break
                      }
                      n.dmax = 1 << x, e.adler = n.check = 1, n.mode = 512 & d ? 10 : 12, u = d = 0
                    }
                  }
                  break;
                case 2:
                  for (; u < 16;) {
                    if (0 === s) break e;
                    s--, d += r[a++] << u, u += 8
                  }
                  if (n.flags = d, 8 != (255 & n.flags)) {
                    e.msg = "unknown compression method", n.mode = 30;
                    break
                  }
                  if (57344 & n.flags) {
                    e.msg = "unknown header flags set", n.mode = 30;
                    break
                  }
                  n.head && (n.head.text = d >> 8 & 1), 512 & n.flags && (B[0] = 255 & d, B[1] = d >>> 8 & 255, n.check = I(n.check, B, 2, 0)), u = d = 0, n.mode = 3;
                case 3:
                  for (; u < 32;) {
                    if (0 === s) break e;
                    s--, d += r[a++] << u, u += 8
                  }
                  n.head && (n.head.time = d), 512 & n.flags && (B[0] = 255 & d, B[1] = d >>> 8 & 255, B[2] = d >>> 16 & 255, B[3] = d >>> 24 & 255, n.check = I(n.check, B, 4, 0)), u = d = 0, n.mode = 4;
                case 4:
                  for (; u < 16;) {
                    if (0 === s) break e;
                    s--, d += r[a++] << u, u += 8
                  }
                  n.head && (n.head.xflags = 255 & d, n.head.os = d >> 8), 512 & n.flags && (B[0] = 255 & d, B[1] = d >>> 8 & 255, n.check = I(n.check, B, 2, 0)), u = d = 0, n.mode = 5;
                case 5:
                  if (1024 & n.flags) {
                    for (; u < 16;) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    n.length = d, n.head && (n.head.extra_len = d), 512 & n.flags && (B[0] = 255 & d, B[1] = d >>> 8 & 255, n.check = I(n.check, B, 2, 0)), u = d = 0
                  } else n.head && (n.head.extra = null);
                  n.mode = 6;
                case 6:
                  if (1024 & n.flags && ((h = s < (h = n.length) ? s : h) && (n.head && (x = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), L.arraySet(n.head.extra, r, a, h, x)), 512 & n.flags && (n.check = I(n.check, r, h, a)), s -= h, a += h, n.length -= h), n.length)) break e;
                  n.length = 0, n.mode = 7;
                case 7:
                  if (2048 & n.flags) {
                    if (0 === s) break e;
                    for (h = 0; x = r[a + h++], n.head && x && n.length < 65536 && (n.head.name += String.fromCharCode(x)), x && h < s;);
                    if (512 & n.flags && (n.check = I(n.check, r, h, a)), s -= h, a += h, x) break e
                  } else n.head && (n.head.name = null);
                  n.length = 0, n.mode = 8;
                case 8:
                  if (4096 & n.flags) {
                    if (0 === s) break e;
                    for (h = 0; x = r[a + h++], n.head && x && n.length < 65536 && (n.head.comment += String.fromCharCode(x)), x && h < s;);
                    if (512 & n.flags && (n.check = I(n.check, r, h, a)), s -= h, a += h, x) break e
                  } else n.head && (n.head.comment = null);
                  n.mode = 9;
                case 9:
                  if (512 & n.flags) {
                    for (; u < 16;) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    if (d !== (65535 & n.check)) {
                      e.msg = "header crc mismatch", n.mode = 30;
                      break
                    }
                    u = d = 0
                  }
                  n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = 12;
                  break;
                case 10:
                  for (; u < 32;) {
                    if (0 === s) break e;
                    s--, d += r[a++] << u, u += 8
                  }
                  e.adler = n.check = F(d), u = d = 0, n.mode = 11;
                case 11:
                  if (0 === n.havedict) return e.next_out = i, e.avail_out = l, e.next_in = a, e.avail_in = s, n.hold = d, n.bits = u, 2;
                  e.adler = n.check = 1, n.mode = 12;
                case 12:
                  if (5 === t || 6 === t) break e;
                case 13:
                  if (n.last) d >>>= 7 & u, u -= 7 & u, n.mode = 27;
                  else {
                    for (; u < 3;) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    switch (n.last = 1 & d, --u, 3 & (d >>>= 1)) {
                      case 0:
                        n.mode = 14;
                        break;
                      case 1:
                        var T, T = R = void 0,
                          R = n;
                        if (H) {
                          for (Z = new L.Buf32(512), j = new L.Buf32(32), T = 0; T < 144;) R.lens[T++] = 8;
                          for (; T < 256;) R.lens[T++] = 9;
                          for (; T < 280;) R.lens[T++] = 7;
                          for (; T < 288;) R.lens[T++] = 8;
                          for (P(1, R.lens, 0, 288, Z, 0, R.work, {
                              bits: 9
                            }), T = 0; T < 32;) R.lens[T++] = 5;
                          P(2, R.lens, 0, 32, j, 0, R.work, {
                            bits: 5
                          }), H = !1
                        }
                        if (R.lencode = Z, R.lenbits = 9, R.distcode = j, R.distbits = 5, n.mode = 20, 6 !== t) break;
                        d >>>= 2, u -= 2;
                        break e;
                      case 2:
                        n.mode = 17;
                        break;
                      case 3:
                        e.msg = "invalid block type", n.mode = 30
                    }
                    d >>>= 2, u -= 2
                  }
                  break;
                case 14:
                  for (d >>>= 7 & u, u -= 7 & u; u < 32;) {
                    if (0 === s) break e;
                    s--, d += r[a++] << u, u += 8
                  }
                  if ((65535 & d) != (d >>> 16 ^ 65535)) {
                    e.msg = "invalid stored block lengths", n.mode = 30;
                    break
                  }
                  if (n.length = 65535 & d, u = d = 0, n.mode = 15, 6 === t) break e;
                case 15:
                  n.mode = 16;
                case 16:
                  if (h = n.length) {
                    if (0 === (h = l < (h = s < h ? s : h) ? l : h)) break e;
                    L.arraySet(o, r, a, h, i), s -= h, a += h, l -= h, i += h, n.length -= h
                  } else n.mode = 12;
                  break;
                case 17:
                  for (; u < 14;) {
                    if (0 === s) break e;
                    s--, d += r[a++] << u, u += 8
                  }
                  if (n.nlen = 257 + (31 & d), d >>>= 5, u -= 5, n.ndist = 1 + (31 & d), d >>>= 5, u -= 5, n.ncode = 4 + (15 & d), d >>>= 4, u -= 4, 286 < n.nlen || 30 < n.ndist) {
                    e.msg = "too many length or distance symbols", n.mode = 30;
                    break
                  }
                  n.have = 0, n.mode = 18;
                case 18:
                  for (; n.have < n.ncode;) {
                    for (; u < 3;) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    n.lens[U[n.have++]] = 7 & d, d >>>= 3, u -= 3
                  }
                  for (; n.have < 19;) n.lens[U[n.have++]] = 0;
                  if (n.lencode = n.lendyn, n.lenbits = 7, S = {
                      bits: n.lenbits
                    }, _ = P(0, n.lens, 0, 19, n.lencode, 0, n.work, S), n.lenbits = S.bits, _) {
                    e.msg = "invalid code lengths set", n.mode = 30;
                    break
                  }
                  n.have = 0, n.mode = 19;
                case 19:
                  for (; n.have < n.nlen + n.ndist;) {
                    for (; g = (C = n.lencode[d & (1 << n.lenbits) - 1]) >>> 16 & 255, w = 65535 & C, !((p = C >>> 24) <= u);) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    if (w < 16) d >>>= p, u -= p, n.lens[n.have++] = w;
                    else {
                      if (16 === w) {
                        for (E = p + 2; u < E;) {
                          if (0 === s) break e;
                          s--, d += r[a++] << u, u += 8
                        }
                        if (d >>>= p, u -= p, 0 === n.have) {
                          e.msg = "invalid bit length repeat", n.mode = 30;
                          break
                        }
                        x = n.lens[n.have - 1], h = 3 + (3 & d), d >>>= 2, u -= 2
                      } else if (17 === w) {
                        for (E = p + 3; u < E;) {
                          if (0 === s) break e;
                          s--, d += r[a++] << u, u += 8
                        }
                        x = 0, h = 3 + (7 & (d >>>= p)), d >>>= 3, u = u - p - 3
                      } else {
                        for (E = p + 7; u < E;) {
                          if (0 === s) break e;
                          s--, d += r[a++] << u, u += 8
                        }
                        x = 0, h = 11 + (127 & (d >>>= p)), d >>>= 7, u = u - p - 7
                      }
                      if (n.have + h > n.nlen + n.ndist) {
                        e.msg = "invalid bit length repeat", n.mode = 30;
                        break
                      }
                      for (; h--;) n.lens[n.have++] = x
                    }
                  }
                  if (30 === n.mode) break;
                  if (0 === n.lens[256]) {
                    e.msg = "invalid code -- missing end-of-block", n.mode = 30;
                    break
                  }
                  if (n.lenbits = 9, S = {
                      bits: n.lenbits
                    }, _ = P(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, S), n.lenbits = S.bits, _) {
                    e.msg = "invalid literal/lengths set", n.mode = 30;
                    break
                  }
                  if (n.distbits = 6, n.distcode = n.distdyn, S = {
                      bits: n.distbits
                    }, _ = P(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, S), n.distbits = S.bits, _) {
                    e.msg = "invalid distances set", n.mode = 30;
                    break
                  }
                  if (n.mode = 20, 6 === t) break e;
                case 20:
                  n.mode = 21;
                case 21:
                  if (6 <= s && 258 <= l) {
                    e.next_out = i, e.avail_out = l, e.next_in = a, e.avail_in = s, n.hold = d, n.bits = u, A(e, f), i = e.next_out, o = e.output, l = e.avail_out, a = e.next_in, r = e.input, s = e.avail_in, d = n.hold, u = n.bits, 12 === n.mode && (n.back = -1);
                    break
                  }
                  for (n.back = 0; g = (C = n.lencode[d & (1 << n.lenbits) - 1]) >>> 16 & 255, w = 65535 & C, !((p = C >>> 24) <= u);) {
                    if (0 === s) break e;
                    s--, d += r[a++] << u, u += 8
                  }
                  if (g && 0 == (240 & g)) {
                    for (v = p, y = g, k = w; g = (C = n.lencode[k + ((d & (1 << v + y) - 1) >> v)]) >>> 16 & 255, w = 65535 & C, !(v + (p = C >>> 24) <= u);) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    d >>>= v, u -= v, n.back += v
                  }
                  if (d >>>= p, u -= p, n.back += p, n.length = w, 0 === g) {
                    n.mode = 26;
                    break
                  }
                  if (32 & g) {
                    n.back = -1, n.mode = 12;
                    break
                  }
                  if (64 & g) {
                    e.msg = "invalid literal/length code", n.mode = 30;
                    break
                  }
                  n.extra = 15 & g, n.mode = 22;
                case 22:
                  if (n.extra) {
                    for (E = n.extra; u < E;) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    n.length += d & (1 << n.extra) - 1, d >>>= n.extra, u -= n.extra, n.back += n.extra
                  }
                  n.was = n.length, n.mode = 23;
                case 23:
                  for (; g = (C = n.distcode[d & (1 << n.distbits) - 1]) >>> 16 & 255, w = 65535 & C, !((p = C >>> 24) <= u);) {
                    if (0 === s) break e;
                    s--, d += r[a++] << u, u += 8
                  }
                  if (0 == (240 & g)) {
                    for (v = p, y = g, k = w; g = (C = n.distcode[k + ((d & (1 << v + y) - 1) >> v)]) >>> 16 & 255, w = 65535 & C, !(v + (p = C >>> 24) <= u);) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    d >>>= v, u -= v, n.back += v
                  }
                  if (d >>>= p, u -= p, n.back += p, 64 & g) {
                    e.msg = "invalid distance code", n.mode = 30;
                    break
                  }
                  n.offset = w, n.extra = 15 & g, n.mode = 24;
                case 24:
                  if (n.extra) {
                    for (E = n.extra; u < E;) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    n.offset += d & (1 << n.extra) - 1, d >>>= n.extra, u -= n.extra, n.back += n.extra
                  }
                  if (n.offset > n.dmax) {
                    e.msg = "invalid distance too far back", n.mode = 30;
                    break
                  }
                  n.mode = 25;
                case 25:
                  if (0 === l) break e;
                  if (n.offset > (h = f - l)) {
                    if ((h = n.offset - h) > n.whave && n.sane) {
                      e.msg = "invalid distance too far back", n.mode = 30;
                      break
                    }
                    b = h > n.wnext ? (h -= n.wnext, n.wsize - h) : n.wnext - h, h > n.length && (h = n.length), m = n.window
                  } else m = o, b = i - n.offset, h = n.length;
                  for (l -= h = l < h ? l : h, n.length -= h; o[i++] = m[b++], --h;);
                  0 === n.length && (n.mode = 21);
                  break;
                case 26:
                  if (0 === l) break e;
                  o[i++] = n.length, l--, n.mode = 21;
                  break;
                case 27:
                  if (n.wrap) {
                    for (; u < 32;) {
                      if (0 === s) break e;
                      s--, d |= r[a++] << u, u += 8
                    }
                    if (f -= l, e.total_out += f, n.total += f, f && (e.adler = n.check = (n.flags ? I : O)(n.check, o, f, i - f)), f = l, (n.flags ? d : F(d)) !== n.check) {
                      e.msg = "incorrect data check", n.mode = 30;
                      break
                    }
                    u = d = 0
                  }
                  n.mode = 28;
                case 28:
                  if (n.wrap && n.flags) {
                    for (; u < 32;) {
                      if (0 === s) break e;
                      s--, d += r[a++] << u, u += 8
                    }
                    if (d !== (4294967295 & n.total)) {
                      e.msg = "incorrect length check", n.mode = 30;
                      break
                    }
                    u = d = 0
                  }
                  n.mode = 29;
                case 29:
                  _ = 1;
                  break e;
                case 30:
                  _ = -3;
                  break e;
                case 31:
                  return -4;
                default:
                  return N
              }
              return e.next_out = i, e.avail_out = l, e.next_in = a, e.avail_in = s, n.hold = d, n.bits = u, (n.wsize || f !== e.avail_out && n.mode < 30 && (n.mode < 27 || 4 !== t)) && M(e, e.output, e.next_out, f - e.avail_out) ? (n.mode = 31, -4) : (c -= e.avail_in, f -= e.avail_out, e.total_in += c, e.total_out += f, n.total += f, n.wrap && f && (e.adler = n.check = (n.flags ? I : O)(n.check, o, f, e.next_out - f)), e.data_type = n.bits + (n.last ? 64 : 0) + (12 === n.mode ? 128 : 0) + (20 === n.mode || 15 === n.mode ? 256 : 0), (0 == c && 0 === f || 4 === t) && _ === D ? -5 : _)
            }, n.inflateEnd = function(e) {
              var t;
              return e && e.state ? ((t = e.state).window && (t.window = null), e.state = null, D) : N
            }, n.inflateGetHeader = function(e, t) {
              return e && e.state && 0 != (2 & (e = e.state).wrap) ? ((e.head = t).done = !1, D) : N
            }, n.inflateSetDictionary = function(e, t) {
              var n, r = t.length;
              return !e || !e.state || 0 !== (n = e.state).wrap && 11 !== n.mode ? N : 11 === n.mode && O(1, t, r, 0) !== n.check ? -3 : M(e, t, r, r) ? (n.mode = 31, -4) : (n.havedict = 1, D)
            }, n.inflateInfo = "pako inflate (from Nodeca project)"
          },
          "zlib/constants.js": function(e, t, n) {
            "use strict";
            t.exports = {
              Z_NO_FLUSH: 0,
              Z_PARTIAL_FLUSH: 1,
              Z_SYNC_FLUSH: 2,
              Z_FULL_FLUSH: 3,
              Z_FINISH: 4,
              Z_BLOCK: 5,
              Z_TREES: 6,
              Z_OK: 0,
              Z_STREAM_END: 1,
              Z_NEED_DICT: 2,
              Z_ERRNO: -1,
              Z_STREAM_ERROR: -2,
              Z_DATA_ERROR: -3,
              Z_BUF_ERROR: -5,
              Z_NO_COMPRESSION: 0,
              Z_BEST_SPEED: 1,
              Z_BEST_COMPRESSION: 9,
              Z_DEFAULT_COMPRESSION: -1,
              Z_FILTERED: 1,
              Z_HUFFMAN_ONLY: 2,
              Z_RLE: 3,
              Z_FIXED: 4,
              Z_DEFAULT_STRATEGY: 0,
              Z_BINARY: 0,
              Z_TEXT: 1,
              Z_UNKNOWN: 2,
              Z_DEFLATED: 8
            }
          },
          "zlib/messages.js": function(e, t, n) {
            "use strict";
            t.exports = {
              2: "need dictionary",
              1: "stream end",
              0: "",
              "-1": "file error",
              "-2": "stream error",
              "-3": "data error",
              "-4": "insufficient memory",
              "-5": "buffer error",
              "-6": "incompatible version"
            }
          },
          "zlib/zstream.js": function(e, t, n) {
            "use strict";
            t.exports = function() {
              this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            }
          },
          "zlib/gzheader.js": function(e, t, n) {
            "use strict";
            t.exports = function() {
              this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
            }
          },
          "zlib/adler32.js": function(e, t, n) {
            "use strict";
            t.exports = function(e, t, n, r) {
              for (var o = 65535 & e | 0, a = e >>> 16 & 65535 | 0, i = 0; 0 !== n;) {
                for (n -= i = 2e3 < n ? 2e3 : n; a = a + (o = o + t[r++] | 0) | 0, --i;);
                o %= 65521, a %= 65521
              }
              return o | a << 16 | 0
            }
          },
          "zlib/crc32.js": function(e, t, n) {
            "use strict";
            var s = function() {
              for (var e = [], t = 0; t < 256; t++) {
                for (var n = t, r = 0; r < 8; r++) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
                e[t] = n
              }
              return e
            }();
            t.exports = function(e, t, n, r) {
              var o = s,
                a = r + n;
              e ^= -1;
              for (var i = r; i < a; i++) e = e >>> 8 ^ o[255 & (e ^ t[i])];
              return -1 ^ e
            }
          },
          "zlib/inffast.js": function(e, t, n) {
            "use strict";
            t.exports = function(e, t) {
              var n, r, o, a, i, s, l = e.state,
                d = e.next_in,
                u = e.input,
                c = d + (e.avail_in - 5),
                f = e.next_out,
                h = e.output,
                b = f - (t - e.avail_out),
                m = f + (e.avail_out - 257),
                p = l.dmax,
                g = l.wsize,
                w = l.whave,
                v = l.wnext,
                y = l.window,
                k = l.hold,
                x = l.bits,
                _ = l.lencode,
                S = l.distcode,
                E = (1 << l.lenbits) - 1,
                C = (1 << l.distbits) - 1;
              e: do {
                for (x < 15 && (k += u[d++] << x, x += 8, k += u[d++] << x, x += 8), n = _[k & E];;) {
                  if (k >>>= r = n >>> 24, x -= r, 0 == (r = n >>> 16 & 255)) h[f++] = 65535 & n;
                  else {
                    if (!(16 & r)) {
                      if (0 == (64 & r)) {
                        n = _[(65535 & n) + (k & (1 << r) - 1)];
                        continue
                      }
                      if (32 & r) {
                        l.mode = 12;
                        break e
                      }
                      e.msg = "invalid literal/length code", l.mode = 30;
                      break e
                    }
                    for (o = 65535 & n, (r &= 15) && (x < r && (k += u[d++] << x, x += 8), o += k & (1 << r) - 1, k >>>= r, x -= r), x < 15 && (k += u[d++] << x, x += 8, k += u[d++] << x, x += 8), n = S[k & C];;) {
                      if (k >>>= r = n >>> 24, x -= r, !(16 & (r = n >>> 16 & 255))) {
                        if (0 == (64 & r)) {
                          n = S[(65535 & n) + (k & (1 << r) - 1)];
                          continue
                        }
                        e.msg = "invalid distance code", l.mode = 30;
                        break e
                      }
                      if (a = 65535 & n, x < (r &= 15) && (k += u[d++] << x, (x += 8) < r && (k += u[d++] << x, x += 8)), p < (a += k & (1 << r) - 1)) {
                        e.msg = "invalid distance too far back", l.mode = 30;
                        break e
                      }
                      if (k >>>= r, x -= r, (r = f - b) < a) {
                        if (w < (r = a - r) && l.sane) {
                          e.msg = "invalid distance too far back", l.mode = 30;
                          break e
                        }
                        if (s = y, (i = 0) === v) {
                          if (i += g - r, r < o) {
                            for (o -= r; h[f++] = y[i++], --r;);
                            i = f - a, s = h
                          }
                        } else if (v < r) {
                          if (i += g + v - r, (r -= v) < o) {
                            for (o -= r; h[f++] = y[i++], --r;);
                            if (i = 0, v < o) {
                              for (o -= r = v; h[f++] = y[i++], --r;);
                              i = f - a, s = h
                            }
                          }
                        } else if (i += v - r, r < o) {
                          for (o -= r; h[f++] = y[i++], --r;);
                          i = f - a, s = h
                        }
                        for (; 2 < o;) h[f++] = s[i++], h[f++] = s[i++], h[f++] = s[i++], o -= 3;
                        o && (h[f++] = s[i++], 1 < o && (h[f++] = s[i++]))
                      } else {
                        for (i = f - a; h[f++] = h[i++], h[f++] = h[i++], h[f++] = h[i++], 2 < (o -= 3););
                        o && (h[f++] = h[i++], 1 < o && (h[f++] = h[i++]))
                      }
                      break
                    }
                  }
                  break
                }
              } while (d < c && f < m);
              k &= (1 << (x -= (o = x >> 3) << 3)) - 1, e.next_in = d -= o, e.next_out = f, e.avail_in = d < c ? c - d + 5 : 5 - (d - c), e.avail_out = f < m ? m - f + 257 : 257 - (f - m), l.hold = k, l.bits = x
            }
          },
          "zlib/inftrees.js": function(e, t, n) {
            "use strict";
            var A = e("../utils/common"),
              P = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
              D = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
              N = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
              z = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            t.exports = function(e, t, n, r, o, a, i, s) {
              for (var l, d, u, c, f, h, b, m, p, g = s.bits, w = 0, v = 0, y = 0, k = 0, x = 0, _ = 0, S = 0, E = 0, C = 0, B = 0, U = null, T = 0, R = new A.Buf16(16), L = new A.Buf16(16), O = null, I = 0, w = 0; w <= 15; w++) R[w] = 0;
              for (v = 0; v < r; v++) R[t[n + v]]++;
              for (x = g, k = 15; 1 <= k && 0 === R[k]; k--);
              if (k < x && (x = k), 0 === k) o[a++] = 20971520, o[a++] = 20971520, s.bits = 1;
              else {
                for (y = 1; y < k && 0 === R[y]; y++);
                for (x < y && (x = y), w = E = 1; w <= 15; w++)
                  if ((E = (E <<= 1) - R[w]) < 0) return -1;
                if (0 < E && (0 === e || 1 !== k)) return -1;
                for (L[1] = 0, w = 1; w < 15; w++) L[w + 1] = L[w] + R[w];
                for (v = 0; v < r; v++) 0 !== t[n + v] && (i[L[t[n + v]]++] = v);
                if (h = 0 === e ? (U = O = i, 19) : 1 === e ? (U = P, T -= 257, O = D, I -= 257, 256) : (U = N, O = z, -1), w = y, f = a, S = v = B = 0, u = -1, c = (C = 1 << (_ = x)) - 1, 1 === e && 852 < C || 2 === e && 592 < C) return 1;
                for (;;) {
                  for (p = i[v] < h ? (m = 0, i[v]) : i[v] > h ? (m = O[I + i[v]], U[T + i[v]]) : (m = 96, 0), l = 1 << (b = w - S), y = d = 1 << _; o[f + (B >> S) + (d -= l)] = b << 24 | m << 16 | p | 0, 0 !== d;);
                  for (l = 1 << w - 1; B & l;) l >>= 1;
                  if (B = 0 !== l ? (B & l - 1) + l : 0, v++, 0 == --R[w]) {
                    if (w === k) break;
                    w = t[n + i[v]]
                  }
                  if (x < w && (B & c) !== u) {
                    for (f += y, E = 1 << (_ = w - (S = 0 === S ? x : S)); _ + S < k && !((E -= R[_ + S]) <= 0);) _++, E <<= 1;
                    if (C += 1 << _, 1 === e && 852 < C || 2 === e && 592 < C) return 1;
                    o[u = B & c] = x << 24 | _ << 16 | f - a | 0
                  }
                }
                0 !== B && (o[f + B] = w - S << 24 | 64 << 16 | 0), s.bits = x
              }
              return 0
            }
          }
        };
        for (t in n) n[t].folder = t.substring(0, t.lastIndexOf("/") + 1);

        function r(e, t) {
          var n = t.match(/^\//) ? null : e ? t.match(/^\.\.?\//) ? o(e.folder + t) : a(e, t) : o(t);
          if (n) return n.exports || (n.parent = e, n(r.bind(null, n), n, n.exports = {})), n.exports;
          throw "module not found: " + t
        }
        var o = function(e) {
            var t = [];
            return (e = e.split("/").every(function(e) {
              return ".." == e ? t.pop() : "." == e || "" == e || t.push(e)
            }) ? t.join("/") : null) ? n[e] || n[e + ".js"] || n[e + "/index.js"] : null
          },
          a = function(e, t) {
            return e ? o(e.folder + "node_modules/" + t) || a(e.parent, t) : null
          };
        return r(null, e)
      },
      decompress: function(e) {
        this.exports || (this.exports = this.require("inflate.js"));
        try {
          return this.exports.inflate(e)
        } catch (e) {}
      },
      hasUnityMarker: function(e) {
        var t = 10,
          n = "UnityWeb Compressed Content (gzip)";
        if (t > e.length || 31 != e[0] || 139 != e[1]) return !1;
        var r = e[3];
        if (4 & r) {
          if (t + 2 > e.length) return !1;
          if ((t += 2 + e[t] + (e[t + 1] << 8)) > e.length) return !1
        }
        if (8 & r) {
          for (; t < e.length && e[t];) t++;
          if (t + 1 > e.length) return !1;
          t++
        }
        return 16 & r && String.fromCharCode.apply(null, e.subarray(t, t + n.length + 1)) == n + "\0"
      }
    }
  };

  function T(n) {
    x(n);
    var e = c.cacheControl(c[n]),
      t = c.companyName && c.productName ? c.cachedFetch : c.fetchWithProgress,
      r = c[n],
      r = /file:\/\//.exec(r) ? "same-origin" : void 0;
    return t(c[n], {
      method: "GET",
      companyName: c.companyName,
      productName: c.productName,
      control: e,
      mode: r,
      onProgress: function(e) {
        x(n, e)
      }
    }).then(function(e) {
      return i = e.parsedBody, s = c[n], new Promise(function(e, t) {
        try {
          for (var n in U) {
            var r, o, a;
            if (U[n].hasUnityMarker(i)) return s && console.log('You can reduce startup time if you configure your web server to add "Content-Encoding: ' + n + '" response header when serving "' + s + '" file.'), (r = U[n]).worker || (o = URL.createObjectURL(new Blob(["this.require = ", r.require.toString(), "; this.decompress = ", r.decompress.toString(), "; this.onmessage = ", function(e) {
              e = {
                id: e.data.id,
                decompressed: this.decompress(e.data.compressed)
              };
              postMessage(e, e.decompressed ? [e.decompressed.buffer] : [])
            }.toString(), "; postMessage({ ready: true });"], {
              type: "application/javascript"
            })), r.worker = new Worker(o), r.worker.onmessage = function(e) {
              e.data.ready ? URL.revokeObjectURL(o) : (this.callbacks[e.data.id](e.data.decompressed), delete this.callbacks[e.data.id])
            }, r.worker.callbacks = {}, r.worker.nextCallbackId = 0), a = r.worker.nextCallbackId++, r.worker.callbacks[a] = e, void r.worker.postMessage({
              id: a,
              compressed: i
            }, [i.buffer])
          }
          e(i)
        } catch (e) {
          t(e)
        }
      });
      var i, s
    }).catch(function(e) {
      var t = "Failed to download file " + c[n];
      "file:" == location.protocol ? d(t + ". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.", "error") : console.error(t)
    })
  }

  function R() {
    Promise.all([T("frameworkUrl").then(function(e) {
      var s = URL.createObjectURL(new Blob([e], {
        type: "application/javascript"
      }));
      return new Promise(function(a, e) {
        var i = document.createElement("script");
        i.src = s, i.onload = function() {
          if ("undefined" == typeof unityFramework || !unityFramework) {
            var e, t = [
              ["br", "br"],
              ["gz", "gzip"]
            ];
            for (e in t) {
              var n, r = t[e];
              if (c.frameworkUrl.endsWith("." + r[0])) return n = "Unable to parse " + c.frameworkUrl + "!", "file:" == location.protocol ? void d(n + " Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.", "error") : (n += ' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: ' + r[1] + '" present. Check browser Console and Devtools Network tab to debug.', "br" == r[0] && "http:" == location.protocol && (r = -1 != ["localhost", "127.0.0.1"].indexOf(location.hostname) ? "" : "Migrate your server to use HTTPS.", n = /Firefox/.test(navigator.userAgent) ? "Unable to parse " + c.frameworkUrl + '!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. ' + r + ' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.' : "Unable to parse " + c.frameworkUrl + '!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'), void d(n, "error"))
            }
            d("Unable to parse " + c.frameworkUrl + "! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)", "error")
          }
          var o = unityFramework;
          unityFramework = null, i.onload = null, URL.revokeObjectURL(s), a(o)
        }, i.onerror = function(e) {
          d("Unable to load file " + c.frameworkUrl + "! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)", "error")
        }, document.body.appendChild(i), c.deinitializers.push(function() {
          document.body.removeChild(i)
        })
      })
    }), T("codeUrl")]).then(function(e) {
      c.wasmBinary = e[1], e[0](c)
    });
    var e = T("dataUrl");
    c.preRun.push(function() {
      c.addRunDependency("dataUrl"), e.then(function(e) {
        var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
          n = 0,
          r = "UnityWebData1.0\0";
        if (!String.fromCharCode.apply(null, e.subarray(n, n + r.length)) == r) throw "unknown data format";
        var o = t.getUint32(n += r.length, !0);
        for (n += 4; n < o;) {
          var a = t.getUint32(n, !0),
            i = (n += 4, t.getUint32(n, !0)),
            s = (n += 4, t.getUint32(n, !0)),
            l = (n += 4, String.fromCharCode.apply(null, e.subarray(n, n + s)));
          n += s;
          for (var d = 0, u = l.indexOf("/", d) + 1; 0 < u; d = u, u = l.indexOf("/", d) + 1) c.FS_createPath(l.substring(0, d), l.substring(d, u - 1), !0, !0);
          c.FS_createDataFile(l, null, e.subarray(a, a + i), !0, !0, !0)
        }
        c.removeRunDependency("dataUrl")
      })
    })
  }
  return new Promise(function(e, t) {
    c.SystemInfo.hasWebGL ? c.SystemInfo.hasWasm ? (1 == c.SystemInfo.hasWebGL && c.print('Warning: Your browser does not support "WebGL 2" Graphics API, switching to "WebGL 1"'), c.startupErrorHandler = t, l(0), c.postRun.push(function() {
      l(1), delete c.startupErrorHandler, e(y)
    }), R()) : t("Your browser does not support WebAssembly.") : t("Your browser does not support WebGL.")
  })
}