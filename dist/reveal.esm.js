/*!
 * reveal.js 5.2.0
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
 */
const e = (e, t) => {
    for (let i in t) e[i] = t[i];
    return e;
  },
  t = (e, t) => Array.from(e.querySelectorAll(t)),
  i = (e, t, i) => {
    i ? e.classList.add(t) : e.classList.remove(t);
  },
  s = (e) => {
    if ("string" == typeof e) {
      if ("null" === e) return null;
      if ("true" === e) return !0;
      if ("false" === e) return !1;
      if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
    }
    return e;
  },
  a = (e, t) => {
    e.style.transform = t;
  },
  n = (e, t) => {
    let i = e.matches || e.matchesSelector || e.msMatchesSelector;
    return !(!i || !i.call(e, t));
  },
  r = (e, t) => {
    if ("function" == typeof e.closest) return e.closest(t);
    for (; e; ) {
      if (n(e, t)) return e;
      e = e.parentNode;
    }
    return null;
  },
  o = (e) => {
    let t =
      (e = e || document.documentElement).requestFullscreen ||
      e.webkitRequestFullscreen ||
      e.webkitRequestFullScreen ||
      e.mozRequestFullScreen ||
      e.msRequestFullscreen;
    t && t.apply(e);
  },
  l = (e) => {
    let t = document.createElement("style");
    return (
      (t.type = "text/css"),
      e &&
        e.length > 0 &&
        (t.styleSheet ? (t.styleSheet.cssText = e) : t.appendChild(document.createTextNode(e))),
      document.head.appendChild(t),
      t
    );
  },
  d = () => {
    let e = {};
    location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t) => {
      e[t.split("=").shift()] = t.split("=").pop();
    });
    for (let t in e) {
      let i = e[t];
      e[t] = s(unescape(i));
    }
    return void 0 !== e.dependencies && delete e.dependencies, e;
  },
  c = {
    mp4: "video/mp4",
    m4a: "video/mp4",
    ogv: "video/ogg",
    mpeg: "video/mpeg",
    webm: "video/webm",
  },
  h = navigator.userAgent,
  u =
    /(iphone|ipod|ipad|android)/gi.test(h) ||
    ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1),
  g = /android/gi.test(h);
var v = (function (e) {
  if (e) {
    var t = function (e) {
        return [].slice.call(e);
      },
      i = 3,
      s = [],
      a = null,
      n =
        "requestAnimationFrame" in e
          ? function () {
              e.cancelAnimationFrame(a),
                (a = e.requestAnimationFrame(function () {
                  return o(
                    s.filter(function (e) {
                      return e.dirty && e.active;
                    })
                  );
                }));
            }
          : function () {},
      r = function (e) {
        return function () {
          s.forEach(function (t) {
            return (t.dirty = e);
          }),
            n();
        };
      },
      o = function (e) {
        e
          .filter(function (e) {
            return !e.styleComputed;
          })
          .forEach(function (e) {
            e.styleComputed = h(e);
          }),
          e.filter(u).forEach(g);
        var t = e.filter(c);
        t.forEach(d),
          t.forEach(function (e) {
            g(e), l(e);
          }),
          t.forEach(v);
      },
      l = function (e) {
        return (e.dirty = 0);
      },
      d = function (e) {
        (e.availableWidth = e.element.parentNode.clientWidth),
          (e.currentWidth = e.element.scrollWidth),
          (e.previousFontSize = e.currentFontSize),
          (e.currentFontSize = Math.min(
            Math.max(e.minSize, (e.availableWidth / e.currentWidth) * e.previousFontSize),
            e.maxSize
          )),
          (e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap");
      },
      c = function (e) {
        return (
          2 !== e.dirty || (2 === e.dirty && e.element.parentNode.clientWidth !== e.availableWidth)
        );
      },
      h = function (t) {
        var i = e.getComputedStyle(t.element, null);
        return (
          (t.currentFontSize = parseFloat(i.getPropertyValue("font-size"))),
          (t.display = i.getPropertyValue("display")),
          (t.whiteSpace = i.getPropertyValue("white-space")),
          !0
        );
      },
      u = function (e) {
        var t = !1;
        return (
          !e.preStyleTestCompleted &&
          (/inline-/.test(e.display) || ((t = !0), (e.display = "inline-block")),
          "nowrap" !== e.whiteSpace && ((t = !0), (e.whiteSpace = "nowrap")),
          (e.preStyleTestCompleted = !0),
          t)
        );
      },
      g = function (e) {
        (e.element.style.whiteSpace = e.whiteSpace),
          (e.element.style.display = e.display),
          (e.element.style.fontSize = e.currentFontSize + "px");
      },
      v = function (e) {
        e.element.dispatchEvent(
          new CustomEvent("fit", {
            detail: {
              oldValue: e.previousFontSize,
              newValue: e.currentFontSize,
              scaleFactor: e.currentFontSize / e.previousFontSize,
            },
          })
        );
      },
      p = function (e, t) {
        return function () {
          (e.dirty = t), e.active && n();
        };
      },
      m = function (e) {
        return function () {
          (s = s.filter(function (t) {
            return t.element !== e.element;
          })),
            e.observeMutations && e.observer.disconnect(),
            (e.element.style.whiteSpace = e.originalStyle.whiteSpace),
            (e.element.style.display = e.originalStyle.display),
            (e.element.style.fontSize = e.originalStyle.fontSize);
        };
      },
      f = function (e) {
        return function () {
          e.active || ((e.active = !0), n());
        };
      },
      y = function (e) {
        return function () {
          return (e.active = !1);
        };
      },
      b = function (e) {
        e.observeMutations &&
          ((e.observer = new MutationObserver(p(e, 1))),
          e.observer.observe(e.element, e.observeMutations));
      },
      w = {
        minSize: 16,
        maxSize: 512,
        multiLine: !0,
        observeMutations: "MutationObserver" in e && {
          subtree: !0,
          childList: !0,
          characterData: !0,
        },
      },
      E = null,
      S = function () {
        e.clearTimeout(E), (E = e.setTimeout(r(2), k.observeWindowDelay));
      },
      R = ["resize", "orientationchange"];
    return (
      Object.defineProperty(k, "observeWindow", {
        set: function (t) {
          var i = "".concat(t ? "add" : "remove", "EventListener");
          R.forEach(function (t) {
            e[i](t, S);
          });
        },
      }),
      (k.observeWindow = !0),
      (k.observeWindowDelay = 100),
      (k.fitAll = r(i)),
      k
    );
  }
  function A(e, t) {
    var a = Object.assign({}, w, t),
      r = e.map(function (e) {
        var t = Object.assign({}, a, { element: e, active: !0 });
        return (
          (function (e) {
            (e.originalStyle = {
              whiteSpace: e.element.style.whiteSpace,
              display: e.element.style.display,
              fontSize: e.element.style.fontSize,
            }),
              b(e),
              (e.newbie = !0),
              (e.dirty = !0),
              s.push(e);
          })(t),
          { element: e, fit: p(t, i), unfreeze: f(t), freeze: y(t), unsubscribe: m(t) }
        );
      });
    return n(), r;
  }
  function k(e) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return "string" == typeof e ? A(t(document.querySelectorAll(e)), i) : A([e], i)[0];
  }
})("undefined" == typeof window ? null : window);
class p {
  constructor(e) {
    (this.Reveal = e), (this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this));
  }
  shouldPreload(e) {
    if (this.Reveal.isScrollView()) return !0;
    let t = this.Reveal.getConfig().preloadIframes;
    return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t;
  }
  load(e, i = {}) {
    (e.style.display = this.Reveal.getConfig().display),
      t(e, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e) => {
        ("IFRAME" !== e.tagName || this.shouldPreload(e)) &&
          (e.setAttribute("src", e.getAttribute("data-src")),
          e.setAttribute("data-lazy-loaded", ""),
          e.removeAttribute("data-src"));
      }),
      t(e, "video, audio").forEach((e) => {
        let i = 0;
        t(e, "source[data-src]").forEach((e) => {
          e.setAttribute("src", e.getAttribute("data-src")),
            e.removeAttribute("data-src"),
            e.setAttribute("data-lazy-loaded", ""),
            (i += 1);
        }),
          u && "VIDEO" === e.tagName && e.setAttribute("playsinline", ""),
          i > 0 && e.load();
      });
    let s = e.slideBackgroundElement;
    if (s) {
      s.style.display = "block";
      let t = e.slideBackgroundContentElement,
        a = e.getAttribute("data-background-iframe");
      if (!1 === s.hasAttribute("data-loaded")) {
        s.setAttribute("data-loaded", "true");
        let n = e.getAttribute("data-background-image"),
          r = e.getAttribute("data-background-video"),
          o = e.hasAttribute("data-background-video-loop"),
          l = e.hasAttribute("data-background-video-muted");
        if (n)
          /^data:/.test(n.trim())
            ? (t.style.backgroundImage = `url(${n.trim()})`)
            : (t.style.backgroundImage = n
                .split(",")
                .map(
                  (e) =>
                    `url(${((e = "") =>
                      encodeURI(e)
                        .replace(/%5B/g, "[")
                        .replace(/%5D/g, "]")
                        .replace(
                          /[!'()*]/g,
                          (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
                        ))(decodeURI(e.trim()))})`
                )
                .join(","));
        else if (r) {
          let e = document.createElement("video");
          o && e.setAttribute("loop", ""),
            (l || this.Reveal.isSpeakerNotes()) && (e.muted = !0),
            u && ((e.muted = !0), e.setAttribute("playsinline", "")),
            r.split(",").forEach((t) => {
              const i = document.createElement("source");
              i.setAttribute("src", t);
              let s = ((e = "") => c[e.split(".").pop()])(t);
              s && i.setAttribute("type", s), e.appendChild(i);
            }),
            t.appendChild(e);
        } else if (a && !0 !== i.excludeIframes) {
          let e = document.createElement("iframe");
          e.setAttribute("allowfullscreen", ""),
            e.setAttribute("mozallowfullscreen", ""),
            e.setAttribute("webkitallowfullscreen", ""),
            e.setAttribute("allow", "autoplay"),
            e.setAttribute("data-src", a),
            (e.style.width = "100%"),
            (e.style.height = "100%"),
            (e.style.maxHeight = "100%"),
            (e.style.maxWidth = "100%"),
            t.appendChild(e);
        }
      }
      let n = t.querySelector("iframe[data-src]");
      n &&
        this.shouldPreload(s) &&
        !/autoplay=(1|true|yes)/gi.test(a) &&
        n.getAttribute("src") !== a &&
        n.setAttribute("src", a);
    }
    this.layout(e);
  }
  layout(e) {
    Array.from(e.querySelectorAll(".r-fit-text")).forEach((e) => {
      v(e, {
        minSize: 24,
        maxSize: 0.8 * this.Reveal.getConfig().height,
        observeMutations: !1,
        observeWindow: !1,
      });
    });
  }
  unload(e) {
    e.style.display = "none";
    let i = this.Reveal.getSlideBackground(e);
    i &&
      ((i.style.display = "none"),
      t(i, "iframe[src]").forEach((e) => {
        e.removeAttribute("src");
      })),
      t(
        e,
        "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]"
      ).forEach((e) => {
        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
      }),
      t(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach((e) => {
        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
      });
  }
  formatEmbeddedContent() {
    let e = (e, i, s) => {
      t(this.Reveal.getSlidesElement(), "iframe[" + e + '*="' + i + '"]').forEach((t) => {
        let i = t.getAttribute(e);
        i && -1 === i.indexOf(s) && t.setAttribute(e, i + (/\?/.test(i) ? "&" : "?") + s);
      });
    };
    e("src", "youtube.com/embed/", "enablejsapi=1"),
      e("data-src", "youtube.com/embed/", "enablejsapi=1"),
      e("src", "player.vimeo.com/", "api=1"),
      e("data-src", "player.vimeo.com/", "api=1");
  }
  startEmbeddedContent(e) {
    if (e) {
      const i = this.Reveal.isSpeakerNotes();
      t(e, 'img[src$=".gif"]').forEach((e) => {
        e.setAttribute("src", e.getAttribute("src"));
      }),
        t(e, "video, audio").forEach((e) => {
          if (r(e, ".fragment") && !r(e, ".fragment.visible")) return;
          let t = this.Reveal.getConfig().autoPlayMedia;
          if (
            ("boolean" != typeof t &&
              (t = e.hasAttribute("data-autoplay") || !!r(e, ".slide-background")),
            t && "function" == typeof e.play)
          ) {
            if (i && !e.muted) return;
            if (e.readyState > 1) this.startEmbeddedMedia({ target: e });
            else if (u) {
              let t = e.play();
              t &&
                "function" == typeof t.catch &&
                !1 === e.controls &&
                t.catch(() => {
                  (e.controls = !0),
                    e.addEventListener("play", () => {
                      e.controls = !1;
                    });
                });
            } else
              e.removeEventListener("loadeddata", this.startEmbeddedMedia),
                e.addEventListener("loadeddata", this.startEmbeddedMedia);
          }
        }),
        i ||
          (t(e, "iframe[src]").forEach((e) => {
            (r(e, ".fragment") && !r(e, ".fragment.visible")) ||
              this.startEmbeddedIframe({ target: e });
          }),
          t(e, "iframe[data-src]").forEach((e) => {
            (r(e, ".fragment") && !r(e, ".fragment.visible")) ||
              (e.getAttribute("src") !== e.getAttribute("data-src") &&
                (e.removeEventListener("load", this.startEmbeddedIframe),
                e.addEventListener("load", this.startEmbeddedIframe),
                e.setAttribute("src", e.getAttribute("data-src"))));
          }));
    }
  }
  startEmbeddedMedia(e) {
    let t = !!r(e.target, "html"),
      i = !!r(e.target, ".present");
    t && i && (e.target.paused || e.target.ended) && ((e.target.currentTime = 0), e.target.play()),
      e.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
  }
  startEmbeddedIframe(e) {
    let t = e.target;
    if (t && t.contentWindow) {
      let i = !!r(e.target, "html"),
        s = !!r(e.target, ".present");
      if (i && s) {
        let e = this.Reveal.getConfig().autoPlayMedia;
        "boolean" != typeof e &&
          (e = t.hasAttribute("data-autoplay") || !!r(t, ".slide-background")),
          /youtube\.com\/embed\//.test(t.getAttribute("src")) && e
            ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            : /player\.vimeo\.com\//.test(t.getAttribute("src")) && e
            ? t.contentWindow.postMessage('{"method":"play"}', "*")
            : t.contentWindow.postMessage("slide:start", "*");
      }
    }
  }
  stopEmbeddedContent(i, s = {}) {
    (s = e({ unloadIframes: !0 }, s)),
      i &&
        i.parentNode &&
        (t(i, "video, audio").forEach((e) => {
          e.hasAttribute("data-ignore") ||
            "function" != typeof e.pause ||
            (e.setAttribute("data-paused-by-reveal", ""), e.pause());
        }),
        t(i, "iframe").forEach((e) => {
          e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"),
            e.removeEventListener("load", this.startEmbeddedIframe);
        }),
        t(i, 'iframe[src*="youtube.com/embed/"]').forEach((e) => {
          !e.hasAttribute("data-ignore") &&
            e.contentWindow &&
            "function" == typeof e.contentWindow.postMessage &&
            e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        }),
        t(i, 'iframe[src*="player.vimeo.com/"]').forEach((e) => {
          !e.hasAttribute("data-ignore") &&
            e.contentWindow &&
            "function" == typeof e.contentWindow.postMessage &&
            e.contentWindow.postMessage('{"method":"pause"}', "*");
        }),
        !0 === s.unloadIframes &&
          t(i, "iframe[data-src]").forEach((e) => {
            e.setAttribute("src", "about:blank"), e.removeAttribute("src");
          }));
  }
}
const m = ".slides section",
  f = ".slides>section",
  y = ".slides>section.present>section",
  b = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/;
class w {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "slide-number"),
      this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e, t) {
    let i = "none";
    e.slideNumber &&
      !this.Reveal.isPrintView() &&
      ("all" === e.showSlideNumber ||
        ("speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes())) &&
      (i = "block"),
      (this.element.style.display = i);
  }
  update() {
    this.Reveal.getConfig().slideNumber &&
      this.element &&
      (this.element.innerHTML = this.getSlideNumber());
  }
  getSlideNumber(e = this.Reveal.getCurrentSlide()) {
    let t,
      i = this.Reveal.getConfig(),
      s = "h.v";
    if ("function" == typeof i.slideNumber) t = i.slideNumber(e);
    else {
      "string" == typeof i.slideNumber && (s = i.slideNumber),
        /c/.test(s) || 1 !== this.Reveal.getHorizontalSlides().length || (s = "c");
      let a = e && "uncounted" === e.dataset.visibility ? 0 : 1;
      switch (((t = []), s)) {
        case "c":
          t.push(this.Reveal.getSlidePastCount(e) + a);
          break;
        case "c/t":
          t.push(this.Reveal.getSlidePastCount(e) + a, "/", this.Reveal.getTotalSlides());
          break;
        default:
          let i = this.Reveal.getIndices(e);
          t.push(i.h + a);
          let n = "h/v" === s ? "/" : ".";
          this.Reveal.isVerticalSlide(e) && t.push(n, i.v + 1);
      }
    }
    let a = "#" + this.Reveal.location.getHash(e);
    return this.formatNumber(t[0], t[1], t[2], a);
  }
  formatNumber(e, t, i, s = "#" + this.Reveal.location.getHash()) {
    return "number" != typeof i || isNaN(i)
      ? `<a href="${s}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t</a>`
      : `<a href="${s}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t<span class="slide-number-delimiter">${t}</span>\n\t\t\t\t\t<span class="slide-number-b">${i}</span>\n\t\t\t\t\t</a>`;
  }
  destroy() {
    this.element.remove();
  }
}
class E {
  constructor(e) {
    (this.Reveal = e),
      (this.onInput = this.onInput.bind(this)),
      (this.onBlur = this.onBlur.bind(this)),
      (this.onKeyDown = this.onKeyDown.bind(this));
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "jump-to-slide"),
      (this.jumpInput = document.createElement("input")),
      (this.jumpInput.type = "text"),
      (this.jumpInput.className = "jump-to-slide-input"),
      (this.jumpInput.placeholder = "Jump to slide"),
      this.jumpInput.addEventListener("input", this.onInput),
      this.jumpInput.addEventListener("keydown", this.onKeyDown),
      this.jumpInput.addEventListener("blur", this.onBlur),
      this.element.appendChild(this.jumpInput);
  }
  show() {
    (this.indicesOnShow = this.Reveal.getIndices()),
      this.Reveal.getRevealElement().appendChild(this.element),
      this.jumpInput.focus();
  }
  hide() {
    this.isVisible() &&
      (this.element.remove(),
      (this.jumpInput.value = ""),
      clearTimeout(this.jumpTimeout),
      delete this.jumpTimeout);
  }
  isVisible() {
    return !!this.element.parentNode;
  }
  jump() {
    clearTimeout(this.jumpTimeout), delete this.jumpTimeout;
    let e,
      t = this.jumpInput.value.trim("");
    if (/^\d+$/.test(t)) {
      const i = this.Reveal.getConfig().slideNumber;
      if ("c" === i || "c/t" === i) {
        const i = this.Reveal.getSlides()[parseInt(t, 10) - 1];
        i && (e = this.Reveal.getIndices(i));
      }
    }
    return (
      e ||
        (/^\d+\.\d+$/.test(t) && (t = t.replace(".", "/")),
        (e = this.Reveal.location.getIndicesFromHash(t, { oneBasedIndex: !0 }))),
      !e && /\S+/i.test(t) && t.length > 1 && (e = this.search(t)),
      e && "" !== t
        ? (this.Reveal.slide(e.h, e.v, e.f), !0)
        : (this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), !1)
    );
  }
  jumpAfter(e) {
    clearTimeout(this.jumpTimeout), (this.jumpTimeout = setTimeout(() => this.jump(), e));
  }
  search(e) {
    const t = new RegExp("\\b" + e.trim() + "\\b", "i"),
      i = this.Reveal.getSlides().find((e) => t.test(e.innerText));
    return i ? this.Reveal.getIndices(i) : null;
  }
  cancel() {
    this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f),
      this.hide();
  }
  confirm() {
    this.jump(), this.hide();
  }
  destroy() {
    this.jumpInput.removeEventListener("input", this.onInput),
      this.jumpInput.removeEventListener("keydown", this.onKeyDown),
      this.jumpInput.removeEventListener("blur", this.onBlur),
      this.element.remove();
  }
  onKeyDown(e) {
    13 === e.keyCode
      ? this.confirm()
      : 27 === e.keyCode && (this.cancel(), e.stopImmediatePropagation());
  }
  onInput(e) {
    this.jumpAfter(200);
  }
  onBlur() {
    setTimeout(() => this.hide(), 1);
  }
}
const S = (e) => {
  let t = e.match(/^#([0-9a-f]{3})$/i);
  if (t && t[1])
    return (
      (t = t[1]),
      {
        r: 17 * parseInt(t.charAt(0), 16),
        g: 17 * parseInt(t.charAt(1), 16),
        b: 17 * parseInt(t.charAt(2), 16),
      }
    );
  let i = e.match(/^#([0-9a-f]{6})$/i);
  if (i && i[1])
    return (
      (i = i[1]),
      {
        r: parseInt(i.slice(0, 2), 16),
        g: parseInt(i.slice(2, 4), 16),
        b: parseInt(i.slice(4, 6), 16),
      }
    );
  let s = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (s) return { r: parseInt(s[1], 10), g: parseInt(s[2], 10), b: parseInt(s[3], 10) };
  let a = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
  return a
    ? { r: parseInt(a[1], 10), g: parseInt(a[2], 10), b: parseInt(a[3], 10), a: parseFloat(a[4]) }
    : null;
};
class R {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "backgrounds"),
      this.Reveal.getRevealElement().appendChild(this.element);
  }
  create() {
    (this.element.innerHTML = ""),
      this.element.classList.add("no-transition"),
      this.Reveal.getHorizontalSlides().forEach((e) => {
        let i = this.createBackground(e, this.element);
        t(e, "section").forEach((e) => {
          this.createBackground(e, i), i.classList.add("stack");
        });
      }),
      this.Reveal.getConfig().parallaxBackgroundImage
        ? ((this.element.style.backgroundImage =
            'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")'),
          (this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize),
          (this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat),
          (this.element.style.backgroundPosition =
            this.Reveal.getConfig().parallaxBackgroundPosition),
          setTimeout(() => {
            this.Reveal.getRevealElement().classList.add("has-parallax-background");
          }, 1))
        : ((this.element.style.backgroundImage = ""),
          this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
  }
  createBackground(e, t) {
    let i = document.createElement("div");
    i.className = "slide-background " + e.className.replace(/present|past|future/, "");
    let s = document.createElement("div");
    return (
      (s.className = "slide-background-content"),
      i.appendChild(s),
      t.appendChild(i),
      (e.slideBackgroundElement = i),
      (e.slideBackgroundContentElement = s),
      this.sync(e),
      i
    );
  }
  sync(e) {
    const t = e.slideBackgroundElement,
      i = e.slideBackgroundContentElement,
      s = {
        background: e.getAttribute("data-background"),
        backgroundSize: e.getAttribute("data-background-size"),
        backgroundImage: e.getAttribute("data-background-image"),
        backgroundVideo: e.getAttribute("data-background-video"),
        backgroundIframe: e.getAttribute("data-background-iframe"),
        backgroundColor: e.getAttribute("data-background-color"),
        backgroundGradient: e.getAttribute("data-background-gradient"),
        backgroundRepeat: e.getAttribute("data-background-repeat"),
        backgroundPosition: e.getAttribute("data-background-position"),
        backgroundTransition: e.getAttribute("data-background-transition"),
        backgroundOpacity: e.getAttribute("data-background-opacity"),
      },
      a = e.hasAttribute("data-preload");
    e.classList.remove("has-dark-background"),
      e.classList.remove("has-light-background"),
      t.removeAttribute("data-loaded"),
      t.removeAttribute("data-background-hash"),
      t.removeAttribute("data-background-size"),
      t.removeAttribute("data-background-transition"),
      (t.style.backgroundColor = ""),
      (i.style.backgroundSize = ""),
      (i.style.backgroundRepeat = ""),
      (i.style.backgroundPosition = ""),
      (i.style.backgroundImage = ""),
      (i.style.opacity = ""),
      (i.innerHTML = ""),
      s.background &&
        (/^(http|file|\/\/)/gi.test(s.background) ||
        /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(s.background)
          ? e.setAttribute("data-background-image", s.background)
          : (t.style.background = s.background)),
      (s.background ||
        s.backgroundColor ||
        s.backgroundGradient ||
        s.backgroundImage ||
        s.backgroundVideo ||
        s.backgroundIframe) &&
        t.setAttribute(
          "data-background-hash",
          s.background +
            s.backgroundSize +
            s.backgroundImage +
            s.backgroundVideo +
            s.backgroundIframe +
            s.backgroundColor +
            s.backgroundGradient +
            s.backgroundRepeat +
            s.backgroundPosition +
            s.backgroundTransition +
            s.backgroundOpacity
        ),
      s.backgroundSize && t.setAttribute("data-background-size", s.backgroundSize),
      s.backgroundColor && (t.style.backgroundColor = s.backgroundColor),
      s.backgroundGradient && (t.style.backgroundImage = s.backgroundGradient),
      s.backgroundTransition &&
        t.setAttribute("data-background-transition", s.backgroundTransition),
      a && t.setAttribute("data-preload", ""),
      s.backgroundSize && (i.style.backgroundSize = s.backgroundSize),
      s.backgroundRepeat && (i.style.backgroundRepeat = s.backgroundRepeat),
      s.backgroundPosition && (i.style.backgroundPosition = s.backgroundPosition),
      s.backgroundOpacity && (i.style.opacity = s.backgroundOpacity);
    const n = this.getContrastClass(e);
    "string" == typeof n && e.classList.add(n);
  }
  getContrastClass(e) {
    const t = e.slideBackgroundElement;
    let i = e.getAttribute("data-background-color");
    if (!i || !S(i)) {
      let e = window.getComputedStyle(t);
      e && e.backgroundColor && (i = e.backgroundColor);
    }
    if (i) {
      const e = S(i);
      if (e && 0 !== e.a)
        return (
          "string" == typeof (s = i) && (s = S(s)),
          (s ? (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 : null) < 128
            ? "has-dark-background"
            : "has-light-background"
        );
    }
    var s;
    return null;
  }
  bubbleSlideContrastClassToElement(e, t) {
    ["has-light-background", "has-dark-background"].forEach((i) => {
      e.classList.contains(i) ? t.classList.add(i) : t.classList.remove(i);
    }, this);
  }
  update(e = !1) {
    let i = this.Reveal.getConfig(),
      s = this.Reveal.getCurrentSlide(),
      a = this.Reveal.getIndices(),
      n = null,
      r = i.rtl ? "future" : "past",
      o = i.rtl ? "past" : "future";
    if (
      (Array.from(this.element.childNodes).forEach((i, s) => {
        i.classList.remove("past", "present", "future"),
          s < a.h
            ? i.classList.add(r)
            : s > a.h
            ? i.classList.add(o)
            : (i.classList.add("present"), (n = i)),
          (e || s === a.h) &&
            t(i, ".slide-background").forEach((e, t) => {
              e.classList.remove("past", "present", "future");
              const i = "number" == typeof a.v ? a.v : 0;
              t < i
                ? e.classList.add("past")
                : t > i
                ? e.classList.add("future")
                : (e.classList.add("present"), s === a.h && (n = e));
            });
      }),
      this.previousBackground &&
        !this.previousBackground.closest("body") &&
        (this.previousBackground = null),
      n && this.previousBackground)
    ) {
      let e = this.previousBackground.getAttribute("data-background-hash"),
        t = n.getAttribute("data-background-hash");
      if (t && t === e && n !== this.previousBackground) {
        this.element.classList.add("no-transition");
        const e = n.querySelector("video"),
          t = this.previousBackground.querySelector("video");
        if (e && t) {
          const i = e.parentNode;
          t.parentNode.appendChild(e), i.appendChild(t);
        }
      }
    }
    const l = n !== this.previousBackground;
    if (
      (l &&
        this.previousBackground &&
        this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
          unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground),
        }),
      l && n)
    ) {
      this.Reveal.slideContent.startEmbeddedContent(n);
      let e = n.querySelector(".slide-background-content");
      if (e) {
        let t = e.style.backgroundImage || "";
        /\.gif/i.test(t) &&
          ((e.style.backgroundImage = ""),
          window.getComputedStyle(e).opacity,
          (e.style.backgroundImage = t));
      }
      this.previousBackground = n;
    }
    s && this.bubbleSlideContrastClassToElement(s, this.Reveal.getRevealElement()),
      setTimeout(() => {
        this.element.classList.remove("no-transition");
      }, 10);
  }
  updateParallax() {
    let e = this.Reveal.getIndices();
    if (this.Reveal.getConfig().parallaxBackgroundImage) {
      let t,
        i,
        s = this.Reveal.getHorizontalSlides(),
        a = this.Reveal.getVerticalSlides(),
        n = this.element.style.backgroundSize.split(" ");
      1 === n.length
        ? (t = i = parseInt(n[0], 10))
        : ((t = parseInt(n[0], 10)), (i = parseInt(n[1], 10)));
      let r,
        o,
        l = this.element.offsetWidth,
        d = s.length;
      (r =
        "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal
          ? this.Reveal.getConfig().parallaxBackgroundHorizontal
          : d > 1
          ? (t - l) / (d - 1)
          : 0),
        (o = r * e.h * -1);
      let c,
        h,
        u = this.element.offsetHeight,
        g = a.length;
      (c =
        "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical
          ? this.Reveal.getConfig().parallaxBackgroundVertical
          : (i - u) / (g - 1)),
        (h = g > 0 ? c * e.v : 0),
        (this.element.style.backgroundPosition = o + "px " + -h + "px");
    }
  }
  destroy() {
    this.element.remove();
  }
}
let A = 0;
class k {
  constructor(e) {
    this.Reveal = e;
  }
  run(e, t) {
    this.reset();
    let i = this.Reveal.getSlides(),
      s = i.indexOf(t),
      a = i.indexOf(e);
    if (
      e &&
      t &&
      e.hasAttribute("data-auto-animate") &&
      t.hasAttribute("data-auto-animate") &&
      e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") &&
      !(s > a ? t : e).hasAttribute("data-auto-animate-restart")
    ) {
      this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || l();
      let i = this.getAutoAnimateOptions(t);
      (e.dataset.autoAnimate = "pending"),
        (t.dataset.autoAnimate = "pending"),
        (i.slideDirection = s > a ? "forward" : "backward");
      let n = "none" === e.style.display;
      n && (e.style.display = this.Reveal.getConfig().display);
      let r = this.getAutoAnimatableElements(e, t).map((e) =>
        this.autoAnimateElements(e.from, e.to, e.options || {}, i, A++)
      );
      if (
        (n && (e.style.display = "none"),
        "false" !== t.dataset.autoAnimateUnmatched &&
          !0 === this.Reveal.getConfig().autoAnimateUnmatched)
      ) {
        let e = 0.8 * i.duration,
          s = 0.2 * i.duration;
        this.getUnmatchedAutoAnimateElements(t).forEach((e) => {
          let t = this.getAutoAnimateOptions(e, i),
            s = "unmatched";
          (t.duration === i.duration && t.delay === i.delay) ||
            ((s = "unmatched-" + A++),
            r.push(
              `[data-auto-animate="running"] [data-auto-animate-target="${s}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`
            )),
            (e.dataset.autoAnimateTarget = s);
        }, this),
          r.push(
            `[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${s}s; }`
          );
      }
      (this.autoAnimateStyleSheet.innerHTML = r.join("")),
        requestAnimationFrame(() => {
          this.autoAnimateStyleSheet &&
            (getComputedStyle(this.autoAnimateStyleSheet).fontWeight,
            (t.dataset.autoAnimate = "running"));
        }),
        this.Reveal.dispatchEvent({
          type: "autoanimate",
          data: { fromSlide: e, toSlide: t, sheet: this.autoAnimateStyleSheet },
        });
    }
  }
  reset() {
    t(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach(
      (e) => {
        e.dataset.autoAnimate = "";
      }
    ),
      t(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach((e) => {
        delete e.dataset.autoAnimateTarget;
      }),
      this.autoAnimateStyleSheet &&
        this.autoAnimateStyleSheet.parentNode &&
        (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),
        (this.autoAnimateStyleSheet = null));
  }
  autoAnimateElements(e, t, i, s, a) {
    (e.dataset.autoAnimateTarget = ""), (t.dataset.autoAnimateTarget = a);
    let n = this.getAutoAnimateOptions(t, s);
    void 0 !== i.delay && (n.delay = i.delay),
      void 0 !== i.duration && (n.duration = i.duration),
      void 0 !== i.easing && (n.easing = i.easing);
    let r = this.getAutoAnimatableProperties("from", e, i),
      o = this.getAutoAnimatableProperties("to", t, i);
    if (
      (t.classList.contains("fragment") && delete o.styles.opacity,
      !1 !== i.translate || !1 !== i.scale)
    ) {
      let e = this.Reveal.getScale(),
        t = {
          x: (r.x - o.x) / e,
          y: (r.y - o.y) / e,
          scaleX: r.width / o.width,
          scaleY: r.height / o.height,
        };
      (t.x = Math.round(1e3 * t.x) / 1e3),
        (t.y = Math.round(1e3 * t.y) / 1e3),
        (t.scaleX = Math.round(1e3 * t.scaleX) / 1e3),
        (t.scaleX = Math.round(1e3 * t.scaleX) / 1e3);
      let s = !1 !== i.translate && (0 !== t.x || 0 !== t.y),
        a = !1 !== i.scale && (0 !== t.scaleX || 0 !== t.scaleY);
      if (s || a) {
        let e = [];
        s && e.push(`translate(${t.x}px, ${t.y}px)`),
          a && e.push(`scale(${t.scaleX}, ${t.scaleY})`),
          (r.styles.transform = e.join(" ")),
          (r.styles["transform-origin"] = "top left"),
          (o.styles.transform = "none");
      }
    }
    for (let e in o.styles) {
      const t = o.styles[e],
        i = r.styles[e];
      t === i
        ? delete o.styles[e]
        : (!0 === t.explicitValue && (o.styles[e] = t.value),
          !0 === i.explicitValue && (r.styles[e] = i.value));
    }
    let l = "",
      d = Object.keys(o.styles);
    if (d.length > 0) {
      (r.styles.transition = "none"),
        (o.styles.transition = `all ${n.duration}s ${n.easing} ${n.delay}s`),
        (o.styles["transition-property"] = d.join(", ")),
        (o.styles["will-change"] = d.join(", ")),
        (l =
          '[data-auto-animate-target="' +
          a +
          '"] {' +
          Object.keys(r.styles)
            .map((e) => e + ": " + r.styles[e] + " !important;")
            .join("") +
          '}[data-auto-animate="running"] [data-auto-animate-target="' +
          a +
          '"] {' +
          Object.keys(o.styles)
            .map((e) => e + ": " + o.styles[e] + " !important;")
            .join("") +
          "}");
    }
    return l;
  }
  getAutoAnimateOptions(t, i) {
    let s = {
      easing: this.Reveal.getConfig().autoAnimateEasing,
      duration: this.Reveal.getConfig().autoAnimateDuration,
      delay: 0,
    };
    if (((s = e(s, i)), t.parentNode)) {
      let e = r(t.parentNode, "[data-auto-animate-target]");
      e && (s = this.getAutoAnimateOptions(e, s));
    }
    return (
      t.dataset.autoAnimateEasing && (s.easing = t.dataset.autoAnimateEasing),
      t.dataset.autoAnimateDuration && (s.duration = parseFloat(t.dataset.autoAnimateDuration)),
      t.dataset.autoAnimateDelay && (s.delay = parseFloat(t.dataset.autoAnimateDelay)),
      s
    );
  }
  getAutoAnimatableProperties(e, t, i) {
    let s = this.Reveal.getConfig(),
      a = { styles: [] };
    if (!1 !== i.translate || !1 !== i.scale) {
      let e;
      if ("function" == typeof i.measure) e = i.measure(t);
      else if (s.center) e = t.getBoundingClientRect();
      else {
        let i = this.Reveal.getScale();
        e = {
          x: t.offsetLeft * i,
          y: t.offsetTop * i,
          width: t.offsetWidth * i,
          height: t.offsetHeight * i,
        };
      }
      (a.x = e.x), (a.y = e.y), (a.width = e.width), (a.height = e.height);
    }
    const n = getComputedStyle(t);
    return (
      (i.styles || s.autoAnimateStyles).forEach((t) => {
        let i;
        "string" == typeof t && (t = { property: t }),
          void 0 !== t.from && "from" === e
            ? (i = { value: t.from, explicitValue: !0 })
            : void 0 !== t.to && "to" === e
            ? (i = { value: t.to, explicitValue: !0 })
            : ("line-height" === t.property &&
                (i = parseFloat(n["line-height"]) / parseFloat(n["font-size"])),
              isNaN(i) && (i = n[t.property])),
          "" !== i && (a.styles[t.property] = i);
      }),
      a
    );
  }
  getAutoAnimatableElements(e, t) {
    let i = (
        "function" == typeof this.Reveal.getConfig().autoAnimateMatcher
          ? this.Reveal.getConfig().autoAnimateMatcher
          : this.getAutoAnimatePairs
      ).call(this, e, t),
      s = [];
    return i.filter((e, t) => {
      if (-1 === s.indexOf(e.to)) return s.push(e.to), !0;
    });
  }
  getAutoAnimatePairs(e, t) {
    let i = [];
    const s = "h1, h2, h3, h4, h5, h6, p, li";
    return (
      this.findAutoAnimateMatches(
        i,
        e,
        t,
        "[data-id]",
        (e) => e.nodeName + ":::" + e.getAttribute("data-id")
      ),
      this.findAutoAnimateMatches(i, e, t, s, (e) => e.nodeName + ":::" + e.textContent.trim()),
      this.findAutoAnimateMatches(
        i,
        e,
        t,
        "img, video, iframe",
        (e) => e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"))
      ),
      this.findAutoAnimateMatches(i, e, t, "pre", (e) => e.nodeName + ":::" + e.textContent.trim()),
      i.forEach((e) => {
        n(e.from, s)
          ? (e.options = { scale: !1 })
          : n(e.from, "pre") &&
            ((e.options = { scale: !1, styles: ["width", "height"] }),
            this.findAutoAnimateMatches(
              i,
              e.from,
              e.to,
              ".hljs .hljs-ln-code",
              (e) => e.textContent,
              { scale: !1, styles: [], measure: this.getLocalBoundingBox.bind(this) }
            ),
            this.findAutoAnimateMatches(
              i,
              e.from,
              e.to,
              ".hljs .hljs-ln-numbers[data-line-number]",
              (e) => e.getAttribute("data-line-number"),
              { scale: !1, styles: ["width"], measure: this.getLocalBoundingBox.bind(this) }
            ));
      }, this),
      i
    );
  }
  getLocalBoundingBox(e) {
    const t = this.Reveal.getScale();
    return {
      x: Math.round(e.offsetLeft * t * 100) / 100,
      y: Math.round(e.offsetTop * t * 100) / 100,
      width: Math.round(e.offsetWidth * t * 100) / 100,
      height: Math.round(e.offsetHeight * t * 100) / 100,
    };
  }
  findAutoAnimateMatches(e, t, i, s, a, n) {
    let r = {},
      o = {};
    [].slice.call(t.querySelectorAll(s)).forEach((e, t) => {
      const i = a(e);
      "string" == typeof i && i.length && ((r[i] = r[i] || []), r[i].push(e));
    }),
      [].slice.call(i.querySelectorAll(s)).forEach((t, i) => {
        const s = a(t);
        let l;
        if (((o[s] = o[s] || []), o[s].push(t), r[s])) {
          const e = o[s].length - 1,
            t = r[s].length - 1;
          r[s][e]
            ? ((l = r[s][e]), (r[s][e] = null))
            : r[s][t] && ((l = r[s][t]), (r[s][t] = null));
        }
        l && e.push({ from: l, to: t, options: n });
      });
  }
  getUnmatchedAutoAnimateElements(e) {
    return [].slice.call(e.children).reduce((e, t) => {
      const i = t.querySelector("[data-auto-animate-target]");
      return (
        t.hasAttribute("data-auto-animate-target") || i || e.push(t),
        t.querySelector("[data-auto-animate-target]") &&
          (e = e.concat(this.getUnmatchedAutoAnimateElements(t))),
        e
      );
    }, []);
  }
}
class L {
  constructor(e) {
    (this.Reveal = e),
      (this.active = !1),
      (this.activatedCallbacks = []),
      (this.onScroll = this.onScroll.bind(this));
  }
  activate() {
    if (this.active) return;
    const e = this.Reveal.getState();
    (this.active = !0), (this.slideHTMLBeforeActivation = this.Reveal.getSlidesElement().innerHTML);
    const i = t(this.Reveal.getRevealElement(), f),
      s = t(this.Reveal.getRevealElement(), ".backgrounds>.slide-background");
    let a;
    this.viewportElement.classList.add("loading-scroll-mode", "reveal-scroll");
    const n = window.getComputedStyle(this.viewportElement);
    n && n.background && (a = n.background);
    const r = [],
      o = i[0].parentNode;
    let l;
    const d = (e, t, i, n) => {
      let o;
      if (l && this.Reveal.shouldAutoAnimateBetween(l, e))
        (o = document.createElement("div")),
          (o.className = "scroll-page-content scroll-auto-animate-page"),
          (o.style.display = "none"),
          l.closest(".scroll-page-content").parentNode.appendChild(o);
      else {
        const e = document.createElement("div");
        if (((e.className = "scroll-page"), r.push(e), n && s.length > t)) {
          const i = s[t],
            n = window.getComputedStyle(i);
          n && n.background ? (e.style.background = n.background) : a && (e.style.background = a);
        } else a && (e.style.background = a);
        const i = document.createElement("div");
        (i.className = "scroll-page-sticky"),
          e.appendChild(i),
          (o = document.createElement("div")),
          (o.className = "scroll-page-content"),
          i.appendChild(o);
      }
      o.appendChild(e),
        e.classList.remove("past", "future"),
        e.setAttribute("data-index-h", t),
        e.setAttribute("data-index-v", i),
        e.slideBackgroundElement &&
          (e.slideBackgroundElement.remove("past", "future"),
          o.insertBefore(e.slideBackgroundElement, e)),
        (l = e);
    };
    i.forEach((e, t) => {
      this.Reveal.isVerticalStack(e)
        ? e.querySelectorAll("section").forEach((e, i) => {
            d(e, t, i, !0);
          })
        : d(e, t, 0);
    }, this),
      this.createProgressBar(),
      t(this.Reveal.getRevealElement(), ".stack").forEach((e) => e.remove()),
      r.forEach((e) => o.appendChild(e)),
      this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),
      this.Reveal.layout(),
      this.Reveal.setState(e),
      this.activatedCallbacks.forEach((e) => e()),
      (this.activatedCallbacks = []),
      this.restoreScrollPosition(),
      this.viewportElement.classList.remove("loading-scroll-mode"),
      this.viewportElement.addEventListener("scroll", this.onScroll, { passive: !0 });
  }
  deactivate() {
    if (!this.active) return;
    const e = this.Reveal.getState();
    (this.active = !1),
      this.viewportElement.removeEventListener("scroll", this.onScroll),
      this.viewportElement.classList.remove("reveal-scroll"),
      this.removeProgressBar(),
      (this.Reveal.getSlidesElement().innerHTML = this.slideHTMLBeforeActivation),
      this.Reveal.sync(),
      this.Reveal.setState(e),
      (this.slideHTMLBeforeActivation = null);
  }
  toggle(e) {
    "boolean" == typeof e
      ? e
        ? this.activate()
        : this.deactivate()
      : this.isActive()
      ? this.deactivate()
      : this.activate();
  }
  isActive() {
    return this.active;
  }
  createProgressBar() {
    (this.progressBar = document.createElement("div")),
      (this.progressBar.className = "scrollbar"),
      (this.progressBarInner = document.createElement("div")),
      (this.progressBarInner.className = "scrollbar-inner"),
      this.progressBar.appendChild(this.progressBarInner),
      (this.progressBarPlayhead = document.createElement("div")),
      (this.progressBarPlayhead.className = "scrollbar-playhead"),
      this.progressBarInner.appendChild(this.progressBarPlayhead),
      this.viewportElement.insertBefore(this.progressBar, this.viewportElement.firstChild);
    const e = (e) => {
        let t =
          (e.clientY - this.progressBarInner.getBoundingClientRect().top) / this.progressBarHeight;
        (t = Math.max(Math.min(t, 1), 0)),
          (this.viewportElement.scrollTop =
            t * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight));
      },
      t = (i) => {
        (this.draggingProgressBar = !1),
          this.showProgressBar(),
          document.removeEventListener("mousemove", e),
          document.removeEventListener("mouseup", t);
      };
    this.progressBarInner.addEventListener("mousedown", (i) => {
      i.preventDefault(),
        (this.draggingProgressBar = !0),
        document.addEventListener("mousemove", e),
        document.addEventListener("mouseup", t),
        e(i);
    });
  }
  removeProgressBar() {
    this.progressBar && (this.progressBar.remove(), (this.progressBar = null));
  }
  layout() {
    this.isActive() && (this.syncPages(), this.syncScrollPosition());
  }
  syncPages() {
    const e = this.Reveal.getConfig(),
      t = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight),
      i = this.Reveal.getScale(),
      s = "compact" === e.scrollLayout,
      a = this.viewportElement.offsetHeight,
      n = t.height * i,
      r = s ? n : a;
    (this.scrollTriggerHeight = s ? n : a),
      this.viewportElement.style.setProperty("--page-height", r + "px"),
      (this.viewportElement.style.scrollSnapType =
        "string" == typeof e.scrollSnap ? `y ${e.scrollSnap}` : ""),
      (this.slideTriggers = []);
    const o = Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));
    (this.pages = o.map((i) => {
      const n = this.createPage({
        pageElement: i,
        slideElement: i.querySelector("section"),
        stickyElement: i.querySelector(".scroll-page-sticky"),
        contentElement: i.querySelector(".scroll-page-content"),
        backgroundElement: i.querySelector(".slide-background"),
        autoAnimateElements: i.querySelectorAll(".scroll-auto-animate-page"),
        autoAnimatePages: [],
      });
      n.pageElement.style.setProperty("--slide-height", !0 === e.center ? "auto" : t.height + "px"),
        this.slideTriggers.push({
          page: n,
          activate: () => this.activatePage(n),
          deactivate: () => this.deactivatePage(n),
        }),
        this.createFragmentTriggersForPage(n),
        n.autoAnimateElements.length > 0 && this.createAutoAnimateTriggersForPage(n);
      let o = Math.max(n.scrollTriggers.length - 1, 0);
      (o += n.autoAnimatePages.reduce(
        (e, t) => e + Math.max(t.scrollTriggers.length - 1, 0),
        n.autoAnimatePages.length
      )),
        n.pageElement.querySelectorAll(".scroll-snap-point").forEach((e) => e.remove());
      for (let e = 0; e < o + 1; e++) {
        const t = document.createElement("div");
        (t.className = "scroll-snap-point"),
          (t.style.height = this.scrollTriggerHeight + "px"),
          (t.style.scrollSnapAlign = s ? "center" : "start"),
          n.pageElement.appendChild(t),
          0 === e && (t.style.marginTop = -this.scrollTriggerHeight + "px");
      }
      return (
        s && n.scrollTriggers.length > 0
          ? ((n.pageHeight = a), n.pageElement.style.setProperty("--page-height", a + "px"))
          : ((n.pageHeight = r), n.pageElement.style.removeProperty("--page-height")),
        (n.scrollPadding = this.scrollTriggerHeight * o),
        (n.totalHeight = n.pageHeight + n.scrollPadding),
        n.pageElement.style.setProperty("--page-scroll-padding", n.scrollPadding + "px"),
        o > 0
          ? ((n.stickyElement.style.position = "sticky"),
            (n.stickyElement.style.top = Math.max((a - n.pageHeight) / 2, 0) + "px"))
          : ((n.stickyElement.style.position = "relative"),
            (n.pageElement.style.scrollSnapAlign = n.pageHeight < a ? "center" : "start")),
        n
      );
    })),
      this.setTriggerRanges(),
      this.viewportElement.setAttribute("data-scrollbar", e.scrollProgress),
      e.scrollProgress && this.totalScrollTriggerCount > 1
        ? (this.progressBar || this.createProgressBar(), this.syncProgressBar())
        : this.removeProgressBar();
  }
  setTriggerRanges() {
    this.totalScrollTriggerCount = this.slideTriggers.reduce(
      (e, t) => e + Math.max(t.page.scrollTriggers.length, 1),
      0
    );
    let e = 0;
    this.slideTriggers.forEach((t, i) => {
      t.range = [e, e + Math.max(t.page.scrollTriggers.length, 1) / this.totalScrollTriggerCount];
      const s = (t.range[1] - t.range[0]) / t.page.scrollTriggers.length;
      t.page.scrollTriggers.forEach((t, i) => {
        t.range = [e + i * s, e + (i + 1) * s];
      }),
        (e = t.range[1]);
    }),
      (this.slideTriggers[this.slideTriggers.length - 1].range[1] = 1);
  }
  createFragmentTriggersForPage(e, t) {
    t = t || e.slideElement;
    const i = this.Reveal.fragments.sort(t.querySelectorAll(".fragment"), !0);
    return (
      i.length &&
        ((e.fragments = this.Reveal.fragments.sort(t.querySelectorAll(".fragment:not(.disabled)"))),
        e.scrollTriggers.push({
          activate: () => {
            this.Reveal.fragments.update(-1, e.fragments, t);
          },
        }),
        i.forEach((i, s) => {
          e.scrollTriggers.push({
            activate: () => {
              this.Reveal.fragments.update(s, e.fragments, t);
            },
          });
        })),
      e.scrollTriggers.length
    );
  }
  createAutoAnimateTriggersForPage(e) {
    e.autoAnimateElements.length > 0 &&
      this.slideTriggers.push(
        ...Array.from(e.autoAnimateElements).map((t, i) => {
          let s = this.createPage({
            slideElement: t.querySelector("section"),
            contentElement: t,
            backgroundElement: t.querySelector(".slide-background"),
          });
          return (
            this.createFragmentTriggersForPage(s, s.slideElement),
            e.autoAnimatePages.push(s),
            {
              page: s,
              activate: () => this.activatePage(s),
              deactivate: () => this.deactivatePage(s),
            }
          );
        })
      );
  }
  createPage(e) {
    return (
      (e.scrollTriggers = []),
      (e.indexh = parseInt(e.slideElement.getAttribute("data-index-h"), 10)),
      (e.indexv = parseInt(e.slideElement.getAttribute("data-index-v"), 10)),
      e
    );
  }
  syncProgressBar() {
    this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach((e) => e.remove());
    const e = this.viewportElement.scrollHeight,
      t = this.viewportElement.offsetHeight,
      i = t / e;
    (this.progressBarHeight = this.progressBarInner.offsetHeight),
      (this.playheadHeight = Math.max(i * this.progressBarHeight, 8)),
      (this.progressBarScrollableHeight = this.progressBarHeight - this.playheadHeight);
    const s = (t / e) * this.progressBarHeight,
      a = Math.min(s / 8, 4);
    (this.progressBarPlayhead.style.height = this.playheadHeight - a + "px"),
      s > 6
        ? this.slideTriggers.forEach((e) => {
            const { page: t } = e;
            (t.progressBarSlide = document.createElement("div")),
              (t.progressBarSlide.className = "scrollbar-slide"),
              (t.progressBarSlide.style.top = e.range[0] * this.progressBarHeight + "px"),
              (t.progressBarSlide.style.height =
                (e.range[1] - e.range[0]) * this.progressBarHeight - a + "px"),
              t.progressBarSlide.classList.toggle("has-triggers", t.scrollTriggers.length > 0),
              this.progressBarInner.appendChild(t.progressBarSlide),
              (t.scrollTriggerElements = t.scrollTriggers.map((i, s) => {
                const n = document.createElement("div");
                return (
                  (n.className = "scrollbar-trigger"),
                  (n.style.top = (i.range[0] - e.range[0]) * this.progressBarHeight + "px"),
                  (n.style.height = (i.range[1] - i.range[0]) * this.progressBarHeight - a + "px"),
                  t.progressBarSlide.appendChild(n),
                  0 === s && (n.style.display = "none"),
                  n
                );
              }));
          })
        : this.pages.forEach((e) => (e.progressBarSlide = null));
  }
  syncScrollPosition() {
    const e = this.viewportElement.offsetHeight,
      t = e / this.viewportElement.scrollHeight,
      i = this.viewportElement.scrollTop,
      s = this.viewportElement.scrollHeight - e,
      a = Math.max(Math.min(i / s, 1), 0),
      n = Math.max(Math.min((i + e / 2) / this.viewportElement.scrollHeight, 1), 0);
    let r;
    this.slideTriggers.forEach((e) => {
      const { page: i } = e;
      a >= e.range[0] - 2 * t && a <= e.range[1] + 2 * t && !i.loaded
        ? ((i.loaded = !0), this.Reveal.slideContent.load(i.slideElement))
        : i.loaded && ((i.loaded = !1), this.Reveal.slideContent.unload(i.slideElement)),
        a >= e.range[0] && a <= e.range[1]
          ? (this.activateTrigger(e), (r = e.page))
          : e.active && this.deactivateTrigger(e);
    }),
      r &&
        r.scrollTriggers.forEach((e) => {
          n >= e.range[0] && n <= e.range[1]
            ? this.activateTrigger(e)
            : e.active && this.deactivateTrigger(e);
        }),
      this.setProgressBarValue(i / (this.viewportElement.scrollHeight - e));
  }
  setProgressBarValue(e) {
    this.progressBar &&
      ((this.progressBarPlayhead.style.transform = `translateY(${
        e * this.progressBarScrollableHeight
      }px)`),
      this.getAllPages()
        .filter((e) => e.progressBarSlide)
        .forEach((e) => {
          e.progressBarSlide.classList.toggle("active", !0 === e.active),
            e.scrollTriggers.forEach((t, i) => {
              e.scrollTriggerElements[i].classList.toggle(
                "active",
                !0 === e.active && !0 === t.active
              );
            });
        }),
      this.showProgressBar());
  }
  showProgressBar() {
    this.progressBar.classList.add("visible"),
      clearTimeout(this.hideProgressBarTimeout),
      "auto" !== this.Reveal.getConfig().scrollProgress ||
        this.draggingProgressBar ||
        (this.hideProgressBarTimeout = setTimeout(() => {
          this.progressBar && this.progressBar.classList.remove("visible");
        }, 500));
  }
  prev() {
    this.viewportElement.scrollTop -= this.scrollTriggerHeight;
  }
  next() {
    this.viewportElement.scrollTop += this.scrollTriggerHeight;
  }
  scrollToSlide(e) {
    if (this.active) {
      const t = this.getScrollTriggerBySlide(e);
      t &&
        (this.viewportElement.scrollTop =
          t.range[0] * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight));
    } else this.activatedCallbacks.push(() => this.scrollToSlide(e));
  }
  storeScrollPosition() {
    clearTimeout(this.storeScrollPositionTimeout),
      (this.storeScrollPositionTimeout = setTimeout(() => {
        sessionStorage.setItem("reveal-scroll-top", this.viewportElement.scrollTop),
          sessionStorage.setItem("reveal-scroll-origin", location.origin + location.pathname),
          (this.storeScrollPositionTimeout = null);
      }, 50));
  }
  restoreScrollPosition() {
    const e = sessionStorage.getItem("reveal-scroll-top"),
      t = sessionStorage.getItem("reveal-scroll-origin");
    e &&
      t === location.origin + location.pathname &&
      (this.viewportElement.scrollTop = parseInt(e, 10));
  }
  activatePage(e) {
    if (!e.active) {
      e.active = !0;
      const { slideElement: t, backgroundElement: i, contentElement: s, indexh: a, indexv: n } = e;
      (s.style.display = "block"),
        t.classList.add("present"),
        i && i.classList.add("present"),
        this.Reveal.setCurrentScrollPage(t, a, n),
        this.Reveal.backgrounds.bubbleSlideContrastClassToElement(t, this.viewportElement),
        Array.from(s.parentNode.querySelectorAll(".scroll-page-content")).forEach((e) => {
          e !== s && (e.style.display = "none");
        });
    }
  }
  deactivatePage(e) {
    e.active &&
      ((e.active = !1),
      e.slideElement && e.slideElement.classList.remove("present"),
      e.backgroundElement && e.backgroundElement.classList.remove("present"));
  }
  activateTrigger(e) {
    e.active || ((e.active = !0), e.activate());
  }
  deactivateTrigger(e) {
    e.active && ((e.active = !1), e.deactivate && e.deactivate());
  }
  getSlideByIndices(e, t) {
    const i = this.getAllPages().find((i) => i.indexh === e && i.indexv === t);
    return i ? i.slideElement : null;
  }
  getScrollTriggerBySlide(e) {
    return this.slideTriggers.find((t) => t.page.slideElement === e);
  }
  getAllPages() {
    return this.pages.flatMap((e) => [e, ...(e.autoAnimatePages || [])]);
  }
  onScroll() {
    this.syncScrollPosition(), this.storeScrollPosition();
  }
  get viewportElement() {
    return this.Reveal.getViewportElement();
  }
}
class C {
  constructor(e) {
    this.Reveal = e;
  }
  async activate() {
    const e = this.Reveal.getConfig(),
      i = t(this.Reveal.getRevealElement(), m),
      s = e.slideNumber && /all|print/i.test(e.showSlideNumber),
      a = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight),
      n = Math.floor(a.width * (1 + e.margin)),
      r = Math.floor(a.height * (1 + e.margin)),
      o = a.width,
      d = a.height;
    await new Promise(requestAnimationFrame),
      l("@page{size:" + n + "px " + r + "px; margin: 0px;}"),
      l(
        ".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " +
          o +
          "px; max-height:" +
          d +
          "px}"
      ),
      document.documentElement.classList.add("reveal-print", "print-pdf"),
      (document.body.style.width = n + "px"),
      (document.body.style.height = r + "px");
    const c = this.Reveal.getViewportElement();
    let h;
    if (c) {
      const e = window.getComputedStyle(c);
      e && e.background && (h = e.background);
    }
    await new Promise(requestAnimationFrame),
      this.Reveal.layoutSlideContents(o, d),
      await new Promise(requestAnimationFrame);
    const u = i.map((e) => e.scrollHeight),
      g = [],
      v = i[0].parentNode;
    let p = 1;
    i.forEach(function (i, a) {
      if (!1 === i.classList.contains("stack")) {
        let l = (n - o) / 2,
          c = (r - d) / 2;
        const v = u[a];
        let m = Math.max(Math.ceil(v / r), 1);
        (m = Math.min(m, e.pdfMaxPagesPerSlide)),
          ((1 === m && e.center) || i.classList.contains("center")) &&
            (c = Math.max((r - v) / 2, 0));
        const f = document.createElement("div");
        if (
          (g.push(f),
          (f.className = "pdf-page"),
          (f.style.height = (r + e.pdfPageHeightOffset) * m + "px"),
          h && (f.style.background = h),
          f.appendChild(i),
          (i.style.left = l + "px"),
          (i.style.top = c + "px"),
          (i.style.width = o + "px"),
          this.Reveal.slideContent.layout(i),
          i.slideBackgroundElement && f.insertBefore(i.slideBackgroundElement, i),
          e.showNotes)
        ) {
          const t = this.Reveal.getSlideNotes(i);
          if (t) {
            const i = 8,
              s = "string" == typeof e.showNotes ? e.showNotes : "inline",
              a = document.createElement("div");
            a.classList.add("speaker-notes"),
              a.classList.add("speaker-notes-pdf"),
              a.setAttribute("data-layout", s),
              (a.innerHTML = t),
              "separate-page" === s
                ? g.push(a)
                : ((a.style.left = i + "px"),
                  (a.style.bottom = i + "px"),
                  (a.style.width = n - 2 * i + "px"),
                  f.appendChild(a));
          }
        }
        if (s) {
          const e = document.createElement("div");
          e.classList.add("slide-number"),
            e.classList.add("slide-number-pdf"),
            (e.innerHTML = p++),
            f.appendChild(e);
        }
        if (e.pdfSeparateFragments) {
          const e = this.Reveal.fragments.sort(f.querySelectorAll(".fragment"), !0);
          let t;
          e.forEach(function (e, i) {
            t &&
              t.forEach(function (e) {
                e.classList.remove("current-fragment");
              }),
              e.forEach(function (e) {
                e.classList.add("visible", "current-fragment");
              }, this);
            const a = f.cloneNode(!0);
            if (s) {
              const e = i + 1;
              a.querySelector(".slide-number-pdf").innerHTML += "." + e;
            }
            g.push(a), (t = e);
          }, this),
            e.forEach(function (e) {
              e.forEach(function (e) {
                e.classList.remove("visible", "current-fragment");
              });
            });
        } else
          t(f, ".fragment:not(.fade-out)").forEach(function (e) {
            e.classList.add("visible");
          });
      }
    }, this),
      await new Promise(requestAnimationFrame),
      g.forEach((e) => v.appendChild(e)),
      this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),
      this.Reveal.dispatchEvent({ type: "pdf-ready" }),
      c.classList.remove("loading-scroll-mode");
  }
  isActive() {
    return "print" === this.Reveal.getConfig().view;
  }
}
class x {
  constructor(e) {
    this.Reveal = e;
  }
  configure(e, t) {
    !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable();
  }
  disable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach((e) => {
      e.classList.add("visible"), e.classList.remove("current-fragment");
    });
  }
  enable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach((e) => {
      e.classList.remove("visible"), e.classList.remove("current-fragment");
    });
  }
  availableRoutes() {
    let e = this.Reveal.getCurrentSlide();
    if (e && this.Reveal.getConfig().fragments) {
      let t = e.querySelectorAll(".fragment:not(.disabled)"),
        i = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
      return { prev: t.length - i.length > 0, next: !!i.length };
    }
    return { prev: !1, next: !1 };
  }
  sort(e, t = !1) {
    e = Array.from(e);
    let i = [],
      s = [],
      a = [];
    e.forEach((e) => {
      if (e.hasAttribute("data-fragment-index")) {
        let t = parseInt(e.getAttribute("data-fragment-index"), 10);
        i[t] || (i[t] = []), i[t].push(e);
      } else s.push([e]);
    }),
      (i = i.concat(s));
    let n = 0;
    return (
      i.forEach((e) => {
        e.forEach((e) => {
          a.push(e), e.setAttribute("data-fragment-index", n);
        }),
          n++;
      }),
      !0 === t ? i : a
    );
  }
  sortAll() {
    this.Reveal.getHorizontalSlides().forEach((e) => {
      let i = t(e, "section");
      i.forEach((e, t) => {
        this.sort(e.querySelectorAll(".fragment"));
      }, this),
        0 === i.length && this.sort(e.querySelectorAll(".fragment"));
    });
  }
  update(e, t, i = this.Reveal.getCurrentSlide()) {
    let s = { shown: [], hidden: [] };
    if (
      i &&
      this.Reveal.getConfig().fragments &&
      (t = t || this.sort(i.querySelectorAll(".fragment"))).length
    ) {
      let a = 0;
      if ("number" != typeof e) {
        let t = this.sort(i.querySelectorAll(".fragment.visible")).pop();
        t && (e = parseInt(t.getAttribute("data-fragment-index") || 0, 10));
      }
      Array.from(t).forEach((t, i) => {
        if (
          (t.hasAttribute("data-fragment-index") &&
            (i = parseInt(t.getAttribute("data-fragment-index"), 10)),
          (a = Math.max(a, i)),
          i <= e)
        ) {
          let a = t.classList.contains("visible");
          t.classList.add("visible"),
            t.classList.remove("current-fragment"),
            i === e &&
              (this.Reveal.announceStatus(this.Reveal.getStatusText(t)),
              t.classList.add("current-fragment"),
              this.Reveal.slideContent.startEmbeddedContent(t)),
            a ||
              (s.shown.push(t),
              this.Reveal.dispatchEvent({ target: t, type: "visible", bubbles: !1 }));
        } else {
          let e = t.classList.contains("visible");
          t.classList.remove("visible"),
            t.classList.remove("current-fragment"),
            e &&
              (this.Reveal.slideContent.stopEmbeddedContent(t),
              s.hidden.push(t),
              this.Reveal.dispatchEvent({ target: t, type: "hidden", bubbles: !1 }));
        }
      }),
        (e = "number" == typeof e ? e : -1),
        (e = Math.max(Math.min(e, a), -1)),
        i.setAttribute("data-fragment", e);
    }
    return (
      s.hidden.length &&
        this.Reveal.dispatchEvent({
          type: "fragmenthidden",
          data: { fragment: s.hidden[0], fragments: s.hidden },
        }),
      s.shown.length &&
        this.Reveal.dispatchEvent({
          type: "fragmentshown",
          data: { fragment: s.shown[0], fragments: s.shown },
        }),
      s
    );
  }
  sync(e = this.Reveal.getCurrentSlide()) {
    return this.sort(e.querySelectorAll(".fragment"));
  }
  goto(e, t = 0) {
    let i = this.Reveal.getCurrentSlide();
    if (i && this.Reveal.getConfig().fragments) {
      let s = this.sort(i.querySelectorAll(".fragment:not(.disabled)"));
      if (s.length) {
        if ("number" != typeof e) {
          let t = this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();
          e = t ? parseInt(t.getAttribute("data-fragment-index") || 0, 10) : -1;
        }
        e += t;
        let a = this.update(e, s);
        return (
          this.Reveal.controls.update(),
          this.Reveal.progress.update(),
          this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(),
          !(!a.shown.length && !a.hidden.length)
        );
      }
    }
    return !1;
  }
  next() {
    return this.goto(null, 1);
  }
  prev() {
    return this.goto(null, -1);
  }
}
class P {
  constructor(e) {
    (this.Reveal = e), (this.active = !1), (this.onSlideClicked = this.onSlideClicked.bind(this));
  }
  activate() {
    if (this.Reveal.getConfig().overview && !this.Reveal.isScrollView() && !this.isActive()) {
      (this.active = !0),
        this.Reveal.getRevealElement().classList.add("overview"),
        this.Reveal.cancelAutoSlide(),
        this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),
        t(this.Reveal.getRevealElement(), m).forEach((e) => {
          e.classList.contains("stack") || e.addEventListener("click", this.onSlideClicked, !0);
        });
      const e = 70,
        i = this.Reveal.getComputedSlideSize();
      (this.overviewSlideWidth = i.width + e),
        (this.overviewSlideHeight = i.height + e),
        this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth),
        this.Reveal.updateSlidesVisibility(),
        this.layout(),
        this.update(),
        this.Reveal.layout();
      const s = this.Reveal.getIndices();
      this.Reveal.dispatchEvent({
        type: "overviewshown",
        data: { indexh: s.h, indexv: s.v, currentSlide: this.Reveal.getCurrentSlide() },
      });
    }
  }
  layout() {
    this.Reveal.getHorizontalSlides().forEach((e, i) => {
      e.setAttribute("data-index-h", i),
        a(e, "translate3d(" + i * this.overviewSlideWidth + "px, 0, 0)"),
        e.classList.contains("stack") &&
          t(e, "section").forEach((e, t) => {
            e.setAttribute("data-index-h", i),
              e.setAttribute("data-index-v", t),
              a(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)");
          });
    }),
      Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e, i) => {
        a(e, "translate3d(" + i * this.overviewSlideWidth + "px, 0, 0)"),
          t(e, ".slide-background").forEach((e, t) => {
            a(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)");
          });
      });
  }
  update() {
    const e = Math.min(window.innerWidth, window.innerHeight),
      t = Math.max(e / 5, 150) / e,
      i = this.Reveal.getIndices();
    this.Reveal.transformSlides({
      overview: [
        "scale(" + t + ")",
        "translateX(" + -i.h * this.overviewSlideWidth + "px)",
        "translateY(" + -i.v * this.overviewSlideHeight + "px)",
      ].join(" "),
    });
  }
  deactivate() {
    if (this.Reveal.getConfig().overview) {
      (this.active = !1),
        this.Reveal.getRevealElement().classList.remove("overview"),
        this.Reveal.getRevealElement().classList.add("overview-deactivating"),
        setTimeout(() => {
          this.Reveal.getRevealElement().classList.remove("overview-deactivating");
        }, 1),
        this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),
        t(this.Reveal.getRevealElement(), m).forEach((e) => {
          a(e, ""), e.removeEventListener("click", this.onSlideClicked, !0);
        }),
        t(this.Reveal.getBackgroundsElement(), ".slide-background").forEach((e) => {
          a(e, "");
        }),
        this.Reveal.transformSlides({ overview: "" });
      const e = this.Reveal.getIndices();
      this.Reveal.slide(e.h, e.v),
        this.Reveal.layout(),
        this.Reveal.cueAutoSlide(),
        this.Reveal.dispatchEvent({
          type: "overviewhidden",
          data: { indexh: e.h, indexv: e.v, currentSlide: this.Reveal.getCurrentSlide() },
        });
    }
  }
  toggle(e) {
    "boolean" == typeof e
      ? e
        ? this.activate()
        : this.deactivate()
      : this.isActive()
      ? this.deactivate()
      : this.activate();
  }
  isActive() {
    return this.active;
  }
  onSlideClicked(e) {
    if (this.isActive()) {
      e.preventDefault();
      let t = e.target;
      for (; t && !t.nodeName.match(/section/gi); ) t = t.parentNode;
      if (
        t &&
        !t.classList.contains("disabled") &&
        (this.deactivate(), t.nodeName.match(/section/gi))
      ) {
        let e = parseInt(t.getAttribute("data-index-h"), 10),
          i = parseInt(t.getAttribute("data-index-v"), 10);
        this.Reveal.slide(e, i);
      }
    }
  }
}
class T {
  constructor(e) {
    (this.Reveal = e),
      (this.shortcuts = {}),
      (this.bindings = {}),
      (this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this));
  }
  configure(e, t) {
    "linear" === e.navigationMode
      ? ((this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide"),
        (this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide"))
      : ((this.shortcuts["N  ,  SPACE"] = "Next slide"),
        (this.shortcuts["P  ,  Shift SPACE"] = "Previous slide"),
        (this.shortcuts["&#8592;  ,  H"] = "Navigate left"),
        (this.shortcuts["&#8594;  ,  L"] = "Navigate right"),
        (this.shortcuts["&#8593;  ,  K"] = "Navigate up"),
        (this.shortcuts["&#8595;  ,  J"] = "Navigate down")),
      (this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments"),
      (this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide"),
      (this.shortcuts["B  ,  ."] = "Pause"),
      (this.shortcuts.F = "Fullscreen"),
      (this.shortcuts.G = "Jump to slide"),
      (this.shortcuts["ESC, O"] = "Slide overview");
  }
  bind() {
    document.addEventListener("keydown", this.onDocumentKeyDown, !1);
  }
  unbind() {
    document.removeEventListener("keydown", this.onDocumentKeyDown, !1);
  }
  addKeyBinding(e, t) {
    "object" == typeof e && e.keyCode
      ? (this.bindings[e.keyCode] = { callback: t, key: e.key, description: e.description })
      : (this.bindings[e] = { callback: t, key: null, description: null });
  }
  removeKeyBinding(e) {
    delete this.bindings[e];
  }
  triggerKey(e) {
    this.onDocumentKeyDown({ keyCode: e });
  }
  registerKeyboardShortcut(e, t) {
    this.shortcuts[e] = t;
  }
  getShortcuts() {
    return this.shortcuts;
  }
  getBindings() {
    return this.bindings;
  }
  onDocumentKeyDown(e) {
    let t = this.Reveal.getConfig();
    if ("function" == typeof t.keyboardCondition && !1 === t.keyboardCondition(e)) return !0;
    if ("focused" === t.keyboardCondition && !this.Reveal.isFocused()) return !0;
    let i = e.keyCode,
      s = !this.Reveal.isAutoSliding();
    this.Reveal.onUserInput(e);
    let a = document.activeElement && !0 === document.activeElement.isContentEditable,
      n =
        document.activeElement &&
        document.activeElement.tagName &&
        /input|textarea/i.test(document.activeElement.tagName),
      r =
        document.activeElement &&
        document.activeElement.className &&
        /speaker-notes/i.test(document.activeElement.className),
      l =
        !(
          (-1 !== [32, 37, 38, 39, 40, 63, 78, 80, 191].indexOf(e.keyCode) && e.shiftKey) ||
          e.altKey
        ) &&
        (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
    if (a || n || r || l) return;
    let d,
      c = [66, 86, 190, 191, 112];
    if ("object" == typeof t.keyboard)
      for (d in t.keyboard) "togglePause" === t.keyboard[d] && c.push(parseInt(d, 10));
    if (this.Reveal.isOverlayOpen() && !["Escape", "f", "c", "b", "."].includes(e.key)) return !1;
    if (this.Reveal.isPaused() && -1 === c.indexOf(i)) return !1;
    let h =
        "linear" === t.navigationMode ||
        !this.Reveal.hasHorizontalSlides() ||
        !this.Reveal.hasVerticalSlides(),
      u = !1;
    if ("object" == typeof t.keyboard)
      for (d in t.keyboard)
        if (parseInt(d, 10) === i) {
          let i = t.keyboard[d];
          "function" == typeof i
            ? i.apply(null, [e])
            : "string" == typeof i && "function" == typeof this.Reveal[i] && this.Reveal[i].call(),
            (u = !0);
        }
    if (!1 === u)
      for (d in this.bindings)
        if (parseInt(d, 10) === i) {
          let t = this.bindings[d].callback;
          "function" == typeof t
            ? t.apply(null, [e])
            : "string" == typeof t && "function" == typeof this.Reveal[t] && this.Reveal[t].call(),
            (u = !0);
        }
    !1 === u &&
      ((u = !0),
      80 === i || 33 === i
        ? this.Reveal.prev({ skipFragments: e.altKey })
        : 78 === i || 34 === i
        ? this.Reveal.next({ skipFragments: e.altKey })
        : 72 === i || 37 === i
        ? e.shiftKey
          ? this.Reveal.slide(0)
          : !this.Reveal.overview.isActive() && h
          ? t.rtl
            ? this.Reveal.next({ skipFragments: e.altKey })
            : this.Reveal.prev({ skipFragments: e.altKey })
          : this.Reveal.left({ skipFragments: e.altKey })
        : 76 === i || 39 === i
        ? e.shiftKey
          ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1)
          : !this.Reveal.overview.isActive() && h
          ? t.rtl
            ? this.Reveal.prev({ skipFragments: e.altKey })
            : this.Reveal.next({ skipFragments: e.altKey })
          : this.Reveal.right({ skipFragments: e.altKey })
        : 75 === i || 38 === i
        ? e.shiftKey
          ? this.Reveal.slide(void 0, 0)
          : !this.Reveal.overview.isActive() && h
          ? this.Reveal.prev({ skipFragments: e.altKey })
          : this.Reveal.up({ skipFragments: e.altKey })
        : 74 === i || 40 === i
        ? e.shiftKey
          ? this.Reveal.slide(void 0, Number.MAX_VALUE)
          : !this.Reveal.overview.isActive() && h
          ? this.Reveal.next({ skipFragments: e.altKey })
          : this.Reveal.down({ skipFragments: e.altKey })
        : 36 === i
        ? this.Reveal.slide(0)
        : 35 === i
        ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1)
        : 32 === i
        ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(),
          e.shiftKey
            ? this.Reveal.prev({ skipFragments: e.altKey })
            : this.Reveal.next({ skipFragments: e.altKey }))
        : [58, 59, 66, 86, 190].includes(i) || (191 === i && !e.shiftKey)
        ? this.Reveal.togglePause()
        : 70 === i
        ? o(t.embedded ? this.Reveal.getViewportElement() : document.documentElement)
        : 65 === i
        ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(s)
        : 71 === i
        ? t.jumpToSlide && this.Reveal.toggleJumpToSlide()
        : 67 === i && this.Reveal.isOverlayOpen()
        ? this.Reveal.closeOverlay()
        : (63 !== i && 191 !== i) || !e.shiftKey
        ? 112 === i
          ? this.Reveal.toggleHelp()
          : (u = !1)
        : this.Reveal.toggleHelp()),
      u
        ? e.preventDefault && e.preventDefault()
        : 27 === i || 79 === i
        ? (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(),
          e.preventDefault && e.preventDefault())
        : 13 === i &&
          this.Reveal.overview.isActive() &&
          (this.Reveal.overview.deactivate(), e.preventDefault && e.preventDefault()),
      this.Reveal.cueAutoSlide();
  }
}
class N {
  MAX_REPLACE_STATE_FREQUENCY = 1e3;
  constructor(e) {
    (this.Reveal = e),
      (this.writeURLTimeout = 0),
      (this.replaceStateTimestamp = 0),
      (this.onWindowHashChange = this.onWindowHashChange.bind(this));
  }
  bind() {
    window.addEventListener("hashchange", this.onWindowHashChange, !1);
  }
  unbind() {
    window.removeEventListener("hashchange", this.onWindowHashChange, !1);
  }
  getIndicesFromHash(e = window.location.hash, t = {}) {
    let i = e.replace(/^#\/?/, ""),
      s = i.split("/");
    if (/^[0-9]*$/.test(s[0]) || !i.length) {
      const e = this.Reveal.getConfig();
      let i,
        a = e.hashOneBasedIndex || t.oneBasedIndex ? 1 : 0,
        n = parseInt(s[0], 10) - a || 0,
        r = parseInt(s[1], 10) - a || 0;
      return (
        e.fragmentInURL && ((i = parseInt(s[2], 10)), isNaN(i) && (i = void 0)),
        { h: n, v: r, f: i }
      );
    }
    {
      let e, t;
      /\/[-\d]+$/g.test(i) &&
        ((t = parseInt(i.split("/").pop(), 10)),
        (t = isNaN(t) ? void 0 : t),
        (i = i.split("/").shift()));
      try {
        e = document.getElementById(decodeURIComponent(i)).closest(".slides section");
      } catch (e) {}
      if (e) return { ...this.Reveal.getIndices(e), f: t };
    }
    return null;
  }
  readURL() {
    const e = this.Reveal.getIndices(),
      t = this.getIndicesFromHash();
    t
      ? (t.h === e.h && t.v === e.v && void 0 === t.f) || this.Reveal.slide(t.h, t.v, t.f)
      : this.Reveal.slide(e.h || 0, e.v || 0);
  }
  writeURL(e) {
    let t = this.Reveal.getConfig(),
      i = this.Reveal.getCurrentSlide();
    if ((clearTimeout(this.writeURLTimeout), "number" == typeof e))
      this.writeURLTimeout = setTimeout(this.writeURL, e);
    else if (i) {
      let e = this.getHash();
      t.history
        ? (window.location.hash = e)
        : t.hash &&
          ("/" === e
            ? this.debouncedReplaceState(window.location.pathname + window.location.search)
            : this.debouncedReplaceState("#" + e));
    }
  }
  replaceState(e) {
    window.history.replaceState(null, null, e), (this.replaceStateTimestamp = Date.now());
  }
  debouncedReplaceState(e) {
    clearTimeout(this.replaceStateTimeout),
      Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY
        ? this.replaceState(e)
        : (this.replaceStateTimeout = setTimeout(
            () => this.replaceState(e),
            this.MAX_REPLACE_STATE_FREQUENCY
          ));
  }
  getHash(e) {
    let t = "/",
      i = e || this.Reveal.getCurrentSlide(),
      s = i ? i.getAttribute("id") : null;
    s && (s = encodeURIComponent(s));
    let a = this.Reveal.getIndices(e);
    if ((this.Reveal.getConfig().fragmentInURL || (a.f = void 0), "string" == typeof s && s.length))
      (t = "/" + s), a.f >= 0 && (t += "/" + a.f);
    else {
      let e = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
      (a.h > 0 || a.v > 0 || a.f >= 0) && (t += a.h + e),
        (a.v > 0 || a.f >= 0) && (t += "/" + (a.v + e)),
        a.f >= 0 && (t += "/" + a.f);
    }
    return t;
  }
  onWindowHashChange(e) {
    this.readURL();
  }
}
class I {
  constructor(e) {
    (this.Reveal = e),
      (this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this)),
      (this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this)),
      (this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this)),
      (this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this)),
      (this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this)),
      (this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this)),
      (this.onEnterFullscreen = this.onEnterFullscreen.bind(this));
  }
  render() {
    const e = this.Reveal.getConfig().rtl,
      i = this.Reveal.getRevealElement();
    (this.element = document.createElement("aside")),
      (this.element.className = "controls"),
      (this.element.innerHTML = `<button class="navigate-left" aria-label="${
        e ? "next slide" : "previous slide"
      }"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="${
        e ? "previous slide" : "next slide"
      }"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`),
      this.Reveal.getRevealElement().appendChild(this.element),
      (this.controlsLeft = t(i, ".navigate-left")),
      (this.controlsRight = t(i, ".navigate-right")),
      (this.controlsUp = t(i, ".navigate-up")),
      (this.controlsDown = t(i, ".navigate-down")),
      (this.controlsPrev = t(i, ".navigate-prev")),
      (this.controlsNext = t(i, ".navigate-next")),
      (this.controlsFullscreen = t(i, ".enter-fullscreen")),
      (this.controlsRightArrow = this.element.querySelector(".navigate-right")),
      (this.controlsLeftArrow = this.element.querySelector(".navigate-left")),
      (this.controlsDownArrow = this.element.querySelector(".navigate-down"));
  }
  configure(e, t) {
    (this.element.style.display =
      e.controls && ("speaker-only" !== e.controls || this.Reveal.isSpeakerNotes())
        ? "block"
        : "none"),
      this.element.setAttribute("data-controls-layout", e.controlsLayout),
      this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows);
  }
  bind() {
    let e = ["touchstart", "click"];
    g && (e = ["touchstart"]),
      e.forEach((e) => {
        this.controlsLeft.forEach((t) => t.addEventListener(e, this.onNavigateLeftClicked, !1)),
          this.controlsRight.forEach((t) => t.addEventListener(e, this.onNavigateRightClicked, !1)),
          this.controlsUp.forEach((t) => t.addEventListener(e, this.onNavigateUpClicked, !1)),
          this.controlsDown.forEach((t) => t.addEventListener(e, this.onNavigateDownClicked, !1)),
          this.controlsPrev.forEach((t) => t.addEventListener(e, this.onNavigatePrevClicked, !1)),
          this.controlsNext.forEach((t) => t.addEventListener(e, this.onNavigateNextClicked, !1)),
          this.controlsFullscreen.forEach((t) => t.addEventListener(e, this.onEnterFullscreen, !1));
      });
  }
  unbind() {
    ["touchstart", "click"].forEach((e) => {
      this.controlsLeft.forEach((t) => t.removeEventListener(e, this.onNavigateLeftClicked, !1)),
        this.controlsRight.forEach((t) =>
          t.removeEventListener(e, this.onNavigateRightClicked, !1)
        ),
        this.controlsUp.forEach((t) => t.removeEventListener(e, this.onNavigateUpClicked, !1)),
        this.controlsDown.forEach((t) => t.removeEventListener(e, this.onNavigateDownClicked, !1)),
        this.controlsPrev.forEach((t) => t.removeEventListener(e, this.onNavigatePrevClicked, !1)),
        this.controlsNext.forEach((t) => t.removeEventListener(e, this.onNavigateNextClicked, !1)),
        this.controlsFullscreen.forEach((t) =>
          t.removeEventListener(e, this.onEnterFullscreen, !1)
        );
    });
  }
  update() {
    let e = this.Reveal.availableRoutes();
    [
      ...this.controlsLeft,
      ...this.controlsRight,
      ...this.controlsUp,
      ...this.controlsDown,
      ...this.controlsPrev,
      ...this.controlsNext,
    ].forEach((e) => {
      e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled");
    }),
      e.left &&
        this.controlsLeft.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      e.right &&
        this.controlsRight.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      e.up &&
        this.controlsUp.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      e.down &&
        this.controlsDown.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      (e.left || e.up) &&
        this.controlsPrev.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      (e.right || e.down) &&
        this.controlsNext.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        });
    let t = this.Reveal.getCurrentSlide();
    if (t) {
      let e = this.Reveal.fragments.availableRoutes();
      e.prev &&
        this.controlsPrev.forEach((e) => {
          e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
        }),
        e.next &&
          this.controlsNext.forEach((e) => {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
          });
      const i = this.Reveal.isVerticalSlide(t),
        s = i && t.parentElement && t.parentElement.querySelectorAll(":scope > section").length > 1;
      i && s
        ? (e.prev &&
            this.controlsUp.forEach((e) => {
              e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
            }),
          e.next &&
            this.controlsDown.forEach((e) => {
              e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
            }))
        : (e.prev &&
            this.controlsLeft.forEach((e) => {
              e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
            }),
          e.next &&
            this.controlsRight.forEach((e) => {
              e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
            }));
    }
    if (this.Reveal.getConfig().controlsTutorial) {
      let t = this.Reveal.getIndices();
      !this.Reveal.hasNavigatedVertically() && e.down
        ? this.controlsDownArrow.classList.add("highlight")
        : (this.controlsDownArrow.classList.remove("highlight"),
          this.Reveal.getConfig().rtl
            ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === t.v
              ? this.controlsLeftArrow.classList.add("highlight")
              : this.controlsLeftArrow.classList.remove("highlight")
            : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === t.v
            ? this.controlsRightArrow.classList.add("highlight")
            : this.controlsRightArrow.classList.remove("highlight"));
    }
  }
  destroy() {
    this.unbind(), this.element.remove();
  }
  onNavigateLeftClicked(e) {
    e.preventDefault(),
      this.Reveal.onUserInput(),
      "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left();
  }
  onNavigateRightClicked(e) {
    e.preventDefault(),
      this.Reveal.onUserInput(),
      "linear" === this.Reveal.getConfig().navigationMode
        ? this.Reveal.next()
        : this.Reveal.right();
  }
  onNavigateUpClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
  }
  onNavigateDownClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
  }
  onNavigatePrevClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
  }
  onNavigateNextClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
  }
  onEnterFullscreen(e) {
    const t = this.Reveal.getConfig(),
      i = this.Reveal.getViewportElement();
    o(t.embedded ? i : i.parentElement);
  }
}
class M {
  constructor(e) {
    (this.Reveal = e), (this.onProgressClicked = this.onProgressClicked.bind(this));
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "progress"),
      this.Reveal.getRevealElement().appendChild(this.element),
      (this.bar = document.createElement("span")),
      this.element.appendChild(this.bar);
  }
  configure(e, t) {
    this.element.style.display = e.progress ? "block" : "none";
  }
  bind() {
    this.Reveal.getConfig().progress &&
      this.element &&
      this.element.addEventListener("click", this.onProgressClicked, !1);
  }
  unbind() {
    this.Reveal.getConfig().progress &&
      this.element &&
      this.element.removeEventListener("click", this.onProgressClicked, !1);
  }
  update() {
    if (this.Reveal.getConfig().progress && this.bar) {
      let e = this.Reveal.getProgress();
      this.Reveal.getTotalSlides() < 2 && (e = 0), (this.bar.style.transform = "scaleX(" + e + ")");
    }
  }
  getMaxWidth() {
    return this.Reveal.getRevealElement().offsetWidth;
  }
  onProgressClicked(e) {
    this.Reveal.onUserInput(e), e.preventDefault();
    let t = this.Reveal.getSlides(),
      i = t.length,
      s = Math.floor((e.clientX / this.getMaxWidth()) * i);
    this.Reveal.getConfig().rtl && (s = i - s);
    let a = this.Reveal.getIndices(t[s]);
    this.Reveal.slide(a.h, a.v);
  }
  destroy() {
    this.element.remove();
  }
}
class B {
  constructor(e) {
    (this.Reveal = e),
      (this.lastMouseWheelStep = 0),
      (this.cursorHidden = !1),
      (this.cursorInactiveTimeout = 0),
      (this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this)),
      (this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this));
  }
  configure(e, t) {
    e.mouseWheel
      ? document.addEventListener("wheel", this.onDocumentMouseScroll, !1)
      : document.removeEventListener("wheel", this.onDocumentMouseScroll, !1),
      e.hideInactiveCursor
        ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1),
          document.addEventListener("mousedown", this.onDocumentCursorActive, !1))
        : (this.showCursor(),
          document.removeEventListener("mousemove", this.onDocumentCursorActive, !1),
          document.removeEventListener("mousedown", this.onDocumentCursorActive, !1));
  }
  showCursor() {
    this.cursorHidden &&
      ((this.cursorHidden = !1), (this.Reveal.getRevealElement().style.cursor = ""));
  }
  hideCursor() {
    !1 === this.cursorHidden &&
      ((this.cursorHidden = !0), (this.Reveal.getRevealElement().style.cursor = "none"));
  }
  destroy() {
    this.showCursor(),
      document.removeEventListener("wheel", this.onDocumentMouseScroll, !1),
      document.removeEventListener("mousemove", this.onDocumentCursorActive, !1),
      document.removeEventListener("mousedown", this.onDocumentCursorActive, !1);
  }
  onDocumentCursorActive(e) {
    this.showCursor(),
      clearTimeout(this.cursorInactiveTimeout),
      (this.cursorInactiveTimeout = setTimeout(
        this.hideCursor.bind(this),
        this.Reveal.getConfig().hideCursorTime
      ));
  }
  onDocumentMouseScroll(e) {
    if (Date.now() - this.lastMouseWheelStep > 1e3) {
      this.lastMouseWheelStep = Date.now();
      let t = e.detail || -e.wheelDelta;
      t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev();
    }
  }
}
const H = (e, t) => {
  const i = document.createElement("script");
  (i.type = "text/javascript"),
    (i.async = !1),
    (i.defer = !1),
    (i.src = e),
    "function" == typeof t &&
      ((i.onload = i.onreadystatechange =
        (e) => {
          ("load" === e.type || /loaded|complete/.test(i.readyState)) &&
            ((i.onload = i.onreadystatechange = i.onerror = null), t());
        }),
      (i.onerror = (e) => {
        (i.onload = i.onreadystatechange = i.onerror = null),
          t(new Error("Failed loading script: " + i.src + "\n" + e));
      }));
  const s = document.querySelector("head");
  s.insertBefore(i, s.lastChild);
};
class D {
  constructor(e) {
    (this.Reveal = e),
      (this.state = "idle"),
      (this.registeredPlugins = {}),
      (this.asyncDependencies = []);
  }
  load(e, t) {
    return (
      (this.state = "loading"),
      e.forEach(this.registerPlugin.bind(this)),
      new Promise((e) => {
        let i = [],
          s = 0;
        if (
          (t.forEach((e) => {
            (e.condition && !e.condition()) ||
              (e.async ? this.asyncDependencies.push(e) : i.push(e));
          }),
          i.length)
        ) {
          s = i.length;
          const t = (t) => {
            t && "function" == typeof t.callback && t.callback(),
              0 == --s && this.initPlugins().then(e);
          };
          i.forEach((e) => {
            "string" == typeof e.id
              ? (this.registerPlugin(e), t(e))
              : "string" == typeof e.src
              ? H(e.src, () => t(e))
              : (console.warn("Unrecognized plugin format", e), t());
          });
        } else this.initPlugins().then(e);
      })
    );
  }
  initPlugins() {
    return new Promise((e) => {
      let t = Object.values(this.registeredPlugins),
        i = t.length;
      if (0 === i) this.loadAsync().then(e);
      else {
        let s,
          a = () => {
            0 == --i ? this.loadAsync().then(e) : s();
          },
          n = 0;
        (s = () => {
          let e = t[n++];
          if ("function" == typeof e.init) {
            let t = e.init(this.Reveal);
            t && "function" == typeof t.then ? t.then(a) : a();
          } else a();
        }),
          s();
      }
    });
  }
  loadAsync() {
    return (
      (this.state = "loaded"),
      this.asyncDependencies.length &&
        this.asyncDependencies.forEach((e) => {
          H(e.src, e.callback);
        }),
      Promise.resolve()
    );
  }
  registerPlugin(e) {
    2 === arguments.length && "string" == typeof arguments[0]
      ? ((e = arguments[1]).id = arguments[0])
      : "function" == typeof e && (e = e());
    let t = e.id;
    "string" != typeof t
      ? console.warn("Unrecognized plugin format; can't find plugin.id", e)
      : void 0 === this.registeredPlugins[t]
      ? ((this.registeredPlugins[t] = e),
        "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal))
      : console.warn('reveal.js: "' + t + '" plugin has already been registered');
  }
  hasPlugin(e) {
    return !!this.registeredPlugins[e];
  }
  getPlugin(e) {
    return this.registeredPlugins[e];
  }
  getRegisteredPlugins() {
    return this.registeredPlugins;
  }
  destroy() {
    Object.values(this.registeredPlugins).forEach((e) => {
      "function" == typeof e.destroy && e.destroy();
    }),
      (this.registeredPlugins = {}),
      (this.asyncDependencies = []);
  }
}
class F {
  constructor(e) {
    (this.Reveal = e),
      (this.onSlidesClicked = this.onSlidesClicked.bind(this)),
      (this.iframeTriggerSelector = null),
      (this.mediaTriggerSelector = "[data-preview-image], [data-preview-video]"),
      (this.stateProps = ["previewIframe", "previewImage", "previewVideo", "previewFit"]),
      (this.state = {});
  }
  update() {
    this.Reveal.getConfig().previewLinks
      ? (this.iframeTriggerSelector =
          "a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])")
      : (this.iframeTriggerSelector = "[data-preview-link]:not([data-preview-link=false])");
    const e =
        this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length > 0,
      t = this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length > 0;
    e || t
      ? this.Reveal.getSlidesElement().addEventListener("click", this.onSlidesClicked, !1)
      : this.Reveal.getSlidesElement().removeEventListener("click", this.onSlidesClicked, !1);
  }
  createOverlay(e) {
    (this.dom = document.createElement("div")),
      this.dom.classList.add("r-overlay"),
      this.dom.classList.add(e),
      (this.viewport = document.createElement("div")),
      this.viewport.classList.add("r-overlay-viewport"),
      this.dom.appendChild(this.viewport),
      this.Reveal.getRevealElement().appendChild(this.dom);
  }
  previewIframe(e) {
    this.close(),
      (this.state = { previewIframe: e }),
      this.createOverlay("r-overlay-preview"),
      (this.dom.dataset.state = "loading"),
      (this.viewport.innerHTML = `<header class="r-overlay-header">\n\t\t\t\t<a class="r-overlay-button r-overlay-external" href="${e}" target="_blank"><span class="icon"></span></a>\n\t\t\t\t<button class="r-overlay-button r-overlay-close"><span class="icon"></span></button>\n\t\t\t</header>\n\t\t\t<div class="r-overlay-spinner"></div>\n\t\t\t<div class="r-overlay-content">\n\t\t\t\t<iframe src="${e}"></iframe>\n\t\t\t\t<small class="r-overlay-content-inner">\n\t\t\t\t\t<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>`),
      this.dom.querySelector("iframe").addEventListener(
        "load",
        (e) => {
          this.dom.dataset.state = "loaded";
        },
        !1
      ),
      this.dom.querySelector(".r-overlay-close").addEventListener(
        "click",
        (e) => {
          this.close(), e.preventDefault();
        },
        !1
      ),
      this.dom.querySelector(".r-overlay-external").addEventListener(
        "click",
        (e) => {
          this.close();
        },
        !1
      ),
      this.Reveal.dispatchEvent({ type: "previewiframe", data: { url: e } });
  }
  previewMedia(e, t, i) {
    if ("image" !== t && "video" !== t)
      return void console.warn("Please specify a valid media type to preview (image|video)");
    this.close(),
      (i = i || "scale-down"),
      this.createOverlay("r-overlay-preview"),
      (this.dom.dataset.state = "loading"),
      (this.dom.dataset.previewFit = i),
      (this.viewport.innerHTML =
        '<header class="r-overlay-header">\n\t\t\t\t<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>\n\t\t\t</header>\n\t\t\t<div class="r-overlay-spinner"></div>\n\t\t\t<div class="r-overlay-content"></div>');
    const s = this.dom.querySelector(".r-overlay-content");
    if ("image" === t) {
      this.state = { previewImage: e, previewFit: i };
      const t = document.createElement("img", {});
      (t.src = e),
        s.appendChild(t),
        t.addEventListener(
          "load",
          () => {
            this.dom.dataset.state = "loaded";
          },
          !1
        ),
        t.addEventListener(
          "error",
          () => {
            (this.dom.dataset.state = "error"),
              (s.innerHTML = '<span class="r-overlay-error">Unable to load image.</span>');
          },
          !1
        ),
        (this.dom.style.cursor = "zoom-out"),
        this.dom.addEventListener(
          "click",
          (e) => {
            this.close();
          },
          !1
        ),
        this.Reveal.dispatchEvent({ type: "previewimage", data: { url: e } });
    } else {
      if ("video" !== t) throw new Error("Please specify a valid media type to preview");
      {
        this.state = { previewVideo: e, previewFit: i };
        const t = document.createElement("video");
        (t.autoplay = "false" !== this.dom.dataset.previewAutoplay),
          (t.controls = "false" !== this.dom.dataset.previewControls),
          (t.loop = "true" === this.dom.dataset.previewLoop),
          (t.muted = "true" === this.dom.dataset.previewMuted),
          (t.playsInline = !0),
          (t.src = e),
          s.appendChild(t),
          t.addEventListener(
            "loadeddata",
            () => {
              this.dom.dataset.state = "loaded";
            },
            !1
          ),
          t.addEventListener(
            "error",
            () => {
              (this.dom.dataset.state = "error"),
                (s.innerHTML = '<span class="r-overlay-error">Unable to load video.</span>');
            },
            !1
          ),
          this.Reveal.dispatchEvent({ type: "previewvideo", data: { url: e } });
      }
    }
    this.dom.querySelector(".r-overlay-close").addEventListener(
      "click",
      (e) => {
        this.close(), e.preventDefault();
      },
      !1
    );
  }
  previewImage(e, t) {
    this.previewMedia(e, "image", t);
  }
  previewVideo(e, t) {
    this.previewMedia(e, "video", t);
  }
  toggleHelp(e) {
    "boolean" == typeof e
      ? e
        ? this.showHelp()
        : this.close()
      : this.dom
      ? this.close()
      : this.showHelp();
  }
  showHelp() {
    if (this.Reveal.getConfig().help) {
      this.close(), this.createOverlay("r-overlay-help");
      let e = '<p class="title">Keyboard Shortcuts</p>',
        t = this.Reveal.keyboard.getShortcuts(),
        i = this.Reveal.keyboard.getBindings();
      e += "<table><th>KEY</th><th>ACTION</th>";
      for (let i in t) e += `<tr><td>${i}</td><td>${t[i]}</td></tr>`;
      for (let t in i)
        i[t].key &&
          i[t].description &&
          (e += `<tr><td>${i[t].key}</td><td>${i[t].description}</td></tr>`);
      (e += "</table>"),
        (this.viewport.innerHTML = `\n\t\t\t\t<header class="r-overlay-header">\n\t\t\t\t\t<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>\n\t\t\t\t</header>\n\t\t\t\t<div class="r-overlay-content">\n\t\t\t\t\t<div class="r-overlay-help-content">${e}</div>\n\t\t\t\t</div>\n\t\t\t`),
        this.dom.querySelector(".r-overlay-close").addEventListener(
          "click",
          (e) => {
            this.close(), e.preventDefault();
          },
          !1
        ),
        this.Reveal.dispatchEvent({ type: "showhelp" });
    }
  }
  isOpen() {
    return !!this.dom;
  }
  close() {
    return (
      !!this.dom &&
      (this.dom.remove(),
      (this.dom = null),
      (this.state = {}),
      this.Reveal.dispatchEvent({ type: "closeoverlay" }),
      !0)
    );
  }
  getState() {
    return this.state;
  }
  setState(e) {
    this.stateProps.every((t) => this.state[t] === e[t]) ||
      (e.previewIframe
        ? this.previewIframe(e.previewIframe)
        : e.previewImage
        ? this.previewImage(e.previewImage, e.previewFit)
        : e.previewVideo
        ? this.previewVideo(e.previewVideo, e.previewFit)
        : this.close());
  }
  onSlidesClicked(e) {
    const t = e.target,
      i = t.closest(this.iframeTriggerSelector),
      s = t.closest(this.mediaTriggerSelector);
    if (i) {
      if (e.metaKey || e.shiftKey || e.altKey) return;
      let t = i.getAttribute("href") || i.getAttribute("data-preview-link");
      t && (this.previewIframe(t), e.preventDefault());
    } else if (s)
      if (s.hasAttribute("data-preview-image")) {
        let t = s.dataset.previewImage || s.getAttribute("src");
        t && (this.previewImage(t, s.dataset.previewFit), e.preventDefault());
      } else if (s.hasAttribute("data-preview-video")) {
        let t = s.dataset.previewVideo || s.getAttribute("src");
        if (!t) {
          let e = s.querySelector("source");
          e && (t = e.getAttribute("src"));
        }
        t && (this.previewVideo(t, s.dataset.previewFit), e.preventDefault());
      }
  }
  destroy() {
    this.close();
  }
}
class z {
  constructor(e) {
    (this.Reveal = e),
      (this.touchStartX = 0),
      (this.touchStartY = 0),
      (this.touchStartCount = 0),
      (this.touchCaptured = !1),
      (this.onPointerDown = this.onPointerDown.bind(this)),
      (this.onPointerMove = this.onPointerMove.bind(this)),
      (this.onPointerUp = this.onPointerUp.bind(this)),
      (this.onTouchStart = this.onTouchStart.bind(this)),
      (this.onTouchMove = this.onTouchMove.bind(this)),
      (this.onTouchEnd = this.onTouchEnd.bind(this));
  }
  bind() {
    let e = this.Reveal.getRevealElement();
    "onpointerdown" in window
      ? (e.addEventListener("pointerdown", this.onPointerDown, !1),
        e.addEventListener("pointermove", this.onPointerMove, !1),
        e.addEventListener("pointerup", this.onPointerUp, !1))
      : window.navigator.msPointerEnabled
      ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1),
        e.addEventListener("MSPointerMove", this.onPointerMove, !1),
        e.addEventListener("MSPointerUp", this.onPointerUp, !1))
      : (e.addEventListener("touchstart", this.onTouchStart, !1),
        e.addEventListener("touchmove", this.onTouchMove, !1),
        e.addEventListener("touchend", this.onTouchEnd, !1));
  }
  unbind() {
    let e = this.Reveal.getRevealElement();
    e.removeEventListener("pointerdown", this.onPointerDown, !1),
      e.removeEventListener("pointermove", this.onPointerMove, !1),
      e.removeEventListener("pointerup", this.onPointerUp, !1),
      e.removeEventListener("MSPointerDown", this.onPointerDown, !1),
      e.removeEventListener("MSPointerMove", this.onPointerMove, !1),
      e.removeEventListener("MSPointerUp", this.onPointerUp, !1),
      e.removeEventListener("touchstart", this.onTouchStart, !1),
      e.removeEventListener("touchmove", this.onTouchMove, !1),
      e.removeEventListener("touchend", this.onTouchEnd, !1);
  }
  isSwipePrevented(e) {
    if (n(e, "video[controls], audio[controls]")) return !0;
    for (; e && "function" == typeof e.hasAttribute; ) {
      if (e.hasAttribute("data-prevent-swipe")) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  onTouchStart(e) {
    if (((this.touchCaptured = !1), this.isSwipePrevented(e.target))) return !0;
    (this.touchStartX = e.touches[0].clientX),
      (this.touchStartY = e.touches[0].clientY),
      (this.touchStartCount = e.touches.length);
  }
  onTouchMove(e) {
    if (this.isSwipePrevented(e.target)) return !0;
    let t = this.Reveal.getConfig();
    if (this.touchCaptured) g && e.preventDefault();
    else {
      this.Reveal.onUserInput(e);
      let i = e.touches[0].clientX,
        s = e.touches[0].clientY;
      if (1 === e.touches.length && 2 !== this.touchStartCount) {
        let a = this.Reveal.availableRoutes({ includeFragments: !0 }),
          n = i - this.touchStartX,
          r = s - this.touchStartY;
        n > 40 && Math.abs(n) > Math.abs(r)
          ? ((this.touchCaptured = !0),
            "linear" === t.navigationMode
              ? t.rtl
                ? this.Reveal.next()
                : this.Reveal.prev()
              : this.Reveal.left())
          : n < -40 && Math.abs(n) > Math.abs(r)
          ? ((this.touchCaptured = !0),
            "linear" === t.navigationMode
              ? t.rtl
                ? this.Reveal.prev()
                : this.Reveal.next()
              : this.Reveal.right())
          : r > 40 && a.up
          ? ((this.touchCaptured = !0),
            "linear" === t.navigationMode ? this.Reveal.prev() : this.Reveal.up())
          : r < -40 &&
            a.down &&
            ((this.touchCaptured = !0),
            "linear" === t.navigationMode ? this.Reveal.next() : this.Reveal.down()),
          t.embedded
            ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault()
            : e.preventDefault();
      }
    }
  }
  onTouchEnd(e) {
    this.touchCaptured = !1;
  }
  onPointerDown(e) {
    (e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType) ||
      ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]), this.onTouchStart(e));
  }
  onPointerMove(e) {
    (e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType) ||
      ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]), this.onTouchMove(e));
  }
  onPointerUp(e) {
    (e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType) ||
      ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]), this.onTouchEnd(e));
  }
}
const q = "focus",
  O = "blur";
class V {
  constructor(e) {
    (this.Reveal = e),
      (this.onRevealPointerDown = this.onRevealPointerDown.bind(this)),
      (this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this));
  }
  configure(e, t) {
    e.embedded ? this.blur() : (this.focus(), this.unbind());
  }
  bind() {
    this.Reveal.getConfig().embedded &&
      this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1);
  }
  unbind() {
    this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1),
      document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1);
  }
  focus() {
    this.state !== q &&
      (this.Reveal.getRevealElement().classList.add("focused"),
      document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)),
      (this.state = q);
  }
  blur() {
    this.state !== O &&
      (this.Reveal.getRevealElement().classList.remove("focused"),
      document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)),
      (this.state = O);
  }
  isFocused() {
    return this.state === q;
  }
  destroy() {
    this.Reveal.getRevealElement().classList.remove("focused");
  }
  onRevealPointerDown(e) {
    this.focus();
  }
  onDocumentPointerDown(e) {
    let t = r(e.target, ".reveal");
    (t && t === this.Reveal.getRevealElement()) || this.blur();
  }
}
class U {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "speaker-notes"),
      this.element.setAttribute("data-prevent-swipe", ""),
      this.element.setAttribute("tabindex", "0"),
      this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e, t) {
    e.showNotes &&
      this.element.setAttribute(
        "data-layout",
        "string" == typeof e.showNotes ? e.showNotes : "inline"
      );
  }
  update() {
    this.Reveal.getConfig().showNotes &&
      this.element &&
      this.Reveal.getCurrentSlide() &&
      !this.Reveal.isScrollView() &&
      !this.Reveal.isPrintView() &&
      (this.element.innerHTML =
        this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
  }
  updateVisibility() {
    this.Reveal.getConfig().showNotes &&
    this.hasNotes() &&
    !this.Reveal.isScrollView() &&
    !this.Reveal.isPrintView()
      ? this.Reveal.getRevealElement().classList.add("show-notes")
      : this.Reveal.getRevealElement().classList.remove("show-notes");
  }
  hasNotes() {
    return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
  }
  isSpeakerNotesWindow() {
    return !!window.location.search.match(/receiver/gi);
  }
  getSlideNotes(e = this.Reveal.getCurrentSlide()) {
    if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
    let t = e.querySelectorAll("aside.notes");
    return t
      ? Array.from(t)
          .map((e) => e.innerHTML)
          .join("\n")
      : null;
  }
  destroy() {
    this.element.remove();
  }
}
class W {
  constructor(e, t) {
    (this.diameter = 100),
      (this.diameter2 = this.diameter / 2),
      (this.thickness = 6),
      (this.playing = !1),
      (this.progress = 0),
      (this.progressOffset = 1),
      (this.container = e),
      (this.progressCheck = t),
      (this.canvas = document.createElement("canvas")),
      (this.canvas.className = "playback"),
      (this.canvas.width = this.diameter),
      (this.canvas.height = this.diameter),
      (this.canvas.style.width = this.diameter2 + "px"),
      (this.canvas.style.height = this.diameter2 + "px"),
      (this.context = this.canvas.getContext("2d")),
      this.container.appendChild(this.canvas),
      this.render();
  }
  setPlaying(e) {
    const t = this.playing;
    (this.playing = e), !t && this.playing ? this.animate() : this.render();
  }
  animate() {
    const e = this.progress;
    (this.progress = this.progressCheck()),
      e > 0.8 && this.progress < 0.2 && (this.progressOffset = this.progress),
      this.render(),
      this.playing && requestAnimationFrame(this.animate.bind(this));
  }
  render() {
    let e = this.playing ? this.progress : 0,
      t = this.diameter2 - this.thickness,
      i = this.diameter2,
      s = this.diameter2,
      a = 28;
    this.progressOffset += 0.1 * (1 - this.progressOffset);
    const n = -Math.PI / 2 + e * (2 * Math.PI),
      r = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
    this.context.save(),
      this.context.clearRect(0, 0, this.diameter, this.diameter),
      this.context.beginPath(),
      this.context.arc(i, s, t + 4, 0, 2 * Math.PI, !1),
      (this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )"),
      this.context.fill(),
      this.context.beginPath(),
      this.context.arc(i, s, t, 0, 2 * Math.PI, !1),
      (this.context.lineWidth = this.thickness),
      (this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )"),
      this.context.stroke(),
      this.playing &&
        (this.context.beginPath(),
        this.context.arc(i, s, t, r, n, !1),
        (this.context.lineWidth = this.thickness),
        (this.context.strokeStyle = "#fff"),
        this.context.stroke()),
      this.context.translate(i - 14, s - 14),
      this.playing
        ? ((this.context.fillStyle = "#fff"),
          this.context.fillRect(0, 0, 10, a),
          this.context.fillRect(18, 0, 10, a))
        : (this.context.beginPath(),
          this.context.translate(4, 0),
          this.context.moveTo(0, 0),
          this.context.lineTo(24, 14),
          this.context.lineTo(0, a),
          (this.context.fillStyle = "#fff"),
          this.context.fill()),
      this.context.restore();
  }
  on(e, t) {
    this.canvas.addEventListener(e, t, !1);
  }
  off(e, t) {
    this.canvas.removeEventListener(e, t, !1);
  }
  destroy() {
    (this.playing = !1), this.canvas.parentNode && this.container.removeChild(this.canvas);
  }
}
var j = {
  width: 960,
  height: 700,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2,
  controls: !0,
  controlsTutorial: !0,
  controlsLayout: "bottom-right",
  controlsBackArrows: "faded",
  progress: !0,
  slideNumber: !1,
  showSlideNumber: "all",
  hashOneBasedIndex: !1,
  hash: !1,
  respondToHashChanges: !0,
  jumpToSlide: !0,
  history: !1,
  keyboard: !0,
  keyboardCondition: null,
  disableLayout: !1,
  overview: !0,
  center: !0,
  touch: !0,
  loop: !1,
  rtl: !1,
  navigationMode: "default",
  shuffle: !1,
  fragments: !0,
  fragmentInURL: !0,
  embedded: !1,
  help: !0,
  pause: !0,
  showNotes: !1,
  showHiddenSlides: !1,
  autoPlayMedia: null,
  preloadIframes: null,
  autoAnimate: !0,
  autoAnimateMatcher: null,
  autoAnimateEasing: "ease",
  autoAnimateDuration: 1,
  autoAnimateUnmatched: !0,
  autoAnimateStyles: [
    "opacity",
    "color",
    "background-color",
    "padding",
    "font-size",
    "line-height",
    "letter-spacing",
    "border-width",
    "border-color",
    "border-radius",
    "outline",
    "outline-offset",
  ],
  autoSlide: 0,
  autoSlideStoppable: !0,
  autoSlideMethod: null,
  defaultTiming: null,
  mouseWheel: !1,
  previewLinks: !1,
  postMessage: !0,
  postMessageEvents: !1,
  focusBodyOnPageVisibilityChange: !0,
  transition: "slide",
  transitionSpeed: "default",
  backgroundTransition: "fade",
  parallaxBackgroundImage: "",
  parallaxBackgroundSize: "",
  parallaxBackgroundRepeat: "",
  parallaxBackgroundPosition: "",
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,
  view: null,
  scrollLayout: "full",
  scrollSnap: "mandatory",
  scrollProgress: "auto",
  scrollActivationWidth: 435,
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
  pdfSeparateFragments: !0,
  pdfPageHeightOffset: -1,
  viewDistance: 3,
  mobileViewDistance: 2,
  display: "block",
  hideInactiveCursor: !0,
  hideCursorTime: 5e3,
  sortFragmentsOnSync: !0,
  dependencies: [],
  plugins: [],
};
const K = "5.2.1";
function $(n, o) {
  arguments.length < 2 && ((o = arguments[0]), (n = document.querySelector(".reveal")));
  const l = {};
  let c,
    h,
    g,
    v,
    S,
    A = {},
    H = !1,
    q = !1,
    O = { hasNavigatedHorizontally: !1, hasNavigatedVertically: !1 },
    $ = [],
    X = 1,
    Y = { layout: "", overview: "" },
    _ = {},
    J = "idle",
    G = 0,
    Q = 0,
    Z = -1,
    ee = !1,
    te = new p(l),
    ie = new w(l),
    se = new E(l),
    ae = new k(l),
    ne = new R(l),
    re = new L(l),
    oe = new C(l),
    le = new x(l),
    de = new P(l),
    ce = new T(l),
    he = new N(l),
    ue = new I(l),
    ge = new M(l),
    ve = new B(l),
    pe = new D(l),
    me = new F(l),
    fe = new V(l),
    ye = new z(l),
    be = new U(l);
  function we() {
    !1 !== H &&
      ((q = !0),
      A.showHiddenSlides ||
        t(_.wrapper, 'section[data-visibility="hidden"]').forEach((e) => {
          const t = e.parentNode;
          1 === t.childElementCount && /section/i.test(t.nodeName) ? t.remove() : e.remove();
        }),
      (function () {
        _.slides.classList.add("no-transition"),
          u ? _.wrapper.classList.add("no-hover") : _.wrapper.classList.remove("no-hover");
        ne.render(),
          ie.render(),
          se.render(),
          ue.render(),
          ge.render(),
          be.render(),
          (_.pauseOverlay = ((e, t, i, s = "") => {
            let a = e.querySelectorAll("." + i);
            for (let t = 0; t < a.length; t++) {
              let i = a[t];
              if (i.parentNode === e) return i;
            }
            let n = document.createElement(t);
            return (n.className = i), (n.innerHTML = s), e.appendChild(n), n;
          })(
            _.wrapper,
            "div",
            "pause-overlay",
            A.controls ? '<button class="resume-button">Resume presentation</button>' : null
          )),
          (_.statusElement = (function () {
            let e = _.wrapper.querySelector(".aria-status");
            e ||
              ((e = document.createElement("div")),
              (e.style.position = "absolute"),
              (e.style.height = "1px"),
              (e.style.width = "1px"),
              (e.style.overflow = "hidden"),
              (e.style.clip = "rect( 1px, 1px, 1px, 1px )"),
              e.classList.add("aria-status"),
              e.setAttribute("aria-live", "polite"),
              e.setAttribute("aria-atomic", "true"),
              _.wrapper.appendChild(e));
            return e;
          })()),
          _.wrapper.setAttribute("role", "application");
      })(),
      A.postMessage && window.addEventListener("message", wt, !1),
      setInterval(() => {
        ((!re.isActive() && 0 !== _.wrapper.scrollTop) || 0 !== _.wrapper.scrollLeft) &&
          ((_.wrapper.scrollTop = 0), (_.wrapper.scrollLeft = 0));
      }, 1e3),
      document.addEventListener("fullscreenchange", kt),
      document.addEventListener("webkitfullscreenchange", kt),
      st().forEach((e) => {
        t(e, "section").forEach((e, t) => {
          t > 0 &&
            (e.classList.remove("present"),
            e.classList.remove("past"),
            e.classList.add("future"),
            e.setAttribute("aria-hidden", "true"));
        });
      }),
      Re(),
      ne.update(!0),
      (function () {
        const e = "print" === A.view,
          t = "scroll" === A.view || "reader" === A.view;
        (e || t) &&
          (e ? ke() : ye.unbind(),
          _.viewport.classList.add("loading-scroll-mode"),
          e
            ? "complete" === document.readyState
              ? oe.activate()
              : window.addEventListener("load", () => oe.activate())
            : re.activate());
      })(),
      he.readURL(),
      setTimeout(() => {
        _.slides.classList.remove("no-transition"),
          _.wrapper.classList.add("ready"),
          Pe({ type: "ready", data: { indexh: c, indexv: h, currentSlide: v } });
      }, 1));
  }
  function Ee(e) {
    _.statusElement.textContent = e;
  }
  function Se(e) {
    let t = "";
    if (3 === e.nodeType) t += e.textContent;
    else if (1 === e.nodeType) {
      let i = e.getAttribute("aria-hidden"),
        s = "none" === window.getComputedStyle(e).display;
      "true" === i ||
        s ||
        Array.from(e.childNodes).forEach((e) => {
          t += Se(e);
        });
    }
    return (t = t.trim()), "" === t ? "" : t + " ";
  }
  function Re(t) {
    const s = { ...A };
    if (("object" == typeof t && e(A, t), !1 === l.isReady())) return;
    const a = _.wrapper.querySelectorAll(m).length;
    _.wrapper.classList.remove(s.transition),
      _.wrapper.classList.add(A.transition),
      _.wrapper.setAttribute("data-transition-speed", A.transitionSpeed),
      _.wrapper.setAttribute("data-background-transition", A.backgroundTransition),
      _.viewport.style.setProperty(
        "--slide-width",
        "string" == typeof A.width ? A.width : A.width + "px"
      ),
      _.viewport.style.setProperty(
        "--slide-height",
        "string" == typeof A.height ? A.height : A.height + "px"
      ),
      A.shuffle && Ye(),
      i(_.wrapper, "embedded", A.embedded),
      i(_.wrapper, "rtl", A.rtl),
      i(_.wrapper, "center", A.center),
      !1 === A.pause && Ue(),
      ae.reset(),
      S && (S.destroy(), (S = null)),
      a > 1 &&
        A.autoSlide &&
        A.autoSlideStoppable &&
        ((S = new W(_.wrapper, () => Math.min(Math.max((Date.now() - Z) / G, 0), 1))),
        S.on("click", Lt),
        (ee = !1)),
      "default" !== A.navigationMode
        ? _.wrapper.setAttribute("data-navigation-mode", A.navigationMode)
        : _.wrapper.removeAttribute("data-navigation-mode"),
      be.configure(A, s),
      fe.configure(A, s),
      ve.configure(A, s),
      ue.configure(A, s),
      ge.configure(A, s),
      ce.configure(A, s),
      le.configure(A, s),
      ie.configure(A, s),
      Xe();
  }
  function Ae() {
    window.addEventListener("resize", Rt, !1),
      A.touch && ye.bind(),
      A.keyboard && ce.bind(),
      A.progress && ge.bind(),
      A.respondToHashChanges && he.bind(),
      ue.bind(),
      fe.bind(),
      _.slides.addEventListener("click", St, !1),
      _.slides.addEventListener("transitionend", Et, !1),
      _.pauseOverlay.addEventListener("click", Ue, !1),
      A.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", At, !1);
  }
  function ke() {
    ye.unbind(),
      fe.unbind(),
      ce.unbind(),
      ue.unbind(),
      ge.unbind(),
      he.unbind(),
      window.removeEventListener("resize", Rt, !1),
      _.slides.removeEventListener("click", St, !1),
      _.slides.removeEventListener("transitionend", Et, !1),
      _.pauseOverlay.removeEventListener("click", Ue, !1);
  }
  function Le(e, t, i) {
    n.addEventListener(e, t, i);
  }
  function Ce(e, t, i) {
    n.removeEventListener(e, t, i);
  }
  function xe(e) {
    "string" == typeof e.layout && (Y.layout = e.layout),
      "string" == typeof e.overview && (Y.overview = e.overview),
      Y.layout ? a(_.slides, Y.layout + " " + Y.overview) : a(_.slides, Y.overview);
  }
  function Pe({ target: t = _.wrapper, type: i, data: s, bubbles: a = !0 }) {
    let n = document.createEvent("HTMLEvents", 1, 2);
    return n.initEvent(i, a, !0), e(n, s), t.dispatchEvent(n), t === _.wrapper && Ne(i), n;
  }
  function Te(e) {
    Pe({
      type: "slidechanged",
      data: { indexh: c, indexv: h, previousSlide: g, currentSlide: v, origin: e },
    });
  }
  function Ne(t, i) {
    if (A.postMessageEvents && window.parent !== window.self) {
      let s = { namespace: "reveal", eventName: t, state: dt() };
      e(s, i), window.parent.postMessage(JSON.stringify(s), "*");
    }
  }
  function Ie() {
    if (_.wrapper && !oe.isActive()) {
      const e = _.viewport.offsetWidth,
        t = _.viewport.offsetHeight;
      if (!A.disableLayout) {
        u &&
          !A.embedded &&
          document.documentElement.style.setProperty("--vh", 0.01 * window.innerHeight + "px");
        const i = re.isActive() ? Be(e, t) : Be(),
          s = X;
        Me(A.width, A.height),
          (_.slides.style.width = i.width + "px"),
          (_.slides.style.height = i.height + "px"),
          (X = Math.min(i.presentationWidth / i.width, i.presentationHeight / i.height)),
          (X = Math.max(X, A.minScale)),
          (X = Math.min(X, A.maxScale)),
          1 === X || re.isActive()
            ? ((_.slides.style.zoom = ""),
              (_.slides.style.left = ""),
              (_.slides.style.top = ""),
              (_.slides.style.bottom = ""),
              (_.slides.style.right = ""),
              xe({ layout: "" }))
            : ((_.slides.style.zoom = ""),
              (_.slides.style.left = "50%"),
              (_.slides.style.top = "50%"),
              (_.slides.style.bottom = "auto"),
              (_.slides.style.right = "auto"),
              xe({ layout: "translate(-50%, -50%) scale(" + X + ")" }));
        const a = Array.from(_.wrapper.querySelectorAll(m));
        for (let e = 0, t = a.length; e < t; e++) {
          const t = a[e];
          "none" !== t.style.display &&
            (A.center || t.classList.contains("center")
              ? t.classList.contains("stack")
                ? (t.style.top = 0)
                : (t.style.top = Math.max((i.height - t.scrollHeight) / 2, 0) + "px")
              : (t.style.top = ""));
        }
        s !== X && Pe({ type: "resize", data: { oldScale: s, scale: X, size: i } });
      }
      !(function () {
        if (
          _.wrapper &&
          !A.disableLayout &&
          !oe.isActive() &&
          "number" == typeof A.scrollActivationWidth &&
          "scroll" !== A.view
        ) {
          const e = Be();
          e.presentationWidth > 0 && e.presentationWidth <= A.scrollActivationWidth
            ? re.isActive() || (ne.create(), re.activate())
            : re.isActive() && re.deactivate();
        }
      })(),
        _.viewport.style.setProperty("--slide-scale", X),
        _.viewport.style.setProperty("--viewport-width", e + "px"),
        _.viewport.style.setProperty("--viewport-height", t + "px"),
        re.layout(),
        ge.update(),
        ne.updateParallax(),
        de.isActive() && de.update();
    }
  }
  function Me(e, i) {
    t(_.slides, "section > .stretch, section > .r-stretch").forEach((t) => {
      let s = ((e, t = 0) => {
        if (e) {
          let i,
            s = e.style.height;
          return (
            (e.style.height = "0px"),
            (e.parentNode.style.height = "auto"),
            (i = t - e.parentNode.offsetHeight),
            (e.style.height = s + "px"),
            e.parentNode.style.removeProperty("height"),
            i
          );
        }
        return t;
      })(t, i);
      if (/(img|video)/gi.test(t.nodeName)) {
        const i = t.naturalWidth || t.videoWidth,
          a = t.naturalHeight || t.videoHeight,
          n = Math.min(e / i, s / a);
        (t.style.width = i * n + "px"), (t.style.height = a * n + "px");
      } else (t.style.width = e + "px"), (t.style.height = s + "px");
    });
  }
  function Be(e, t) {
    let i = A.width,
      s = A.height;
    A.disableLayout && ((i = _.slides.offsetWidth), (s = _.slides.offsetHeight));
    const a = {
      width: i,
      height: s,
      presentationWidth: e || _.wrapper.offsetWidth,
      presentationHeight: t || _.wrapper.offsetHeight,
    };
    return (
      (a.presentationWidth -= a.presentationWidth * A.margin),
      (a.presentationHeight -= a.presentationHeight * A.margin),
      "string" == typeof a.width &&
        /%$/.test(a.width) &&
        (a.width = (parseInt(a.width, 10) / 100) * a.presentationWidth),
      "string" == typeof a.height &&
        /%$/.test(a.height) &&
        (a.height = (parseInt(a.height, 10) / 100) * a.presentationHeight),
      a
    );
  }
  function He(e, t) {
    "object" == typeof e &&
      "function" == typeof e.setAttribute &&
      e.setAttribute("data-previous-indexv", t || 0);
  }
  function De(e) {
    if (
      "object" == typeof e &&
      "function" == typeof e.setAttribute &&
      e.classList.contains("stack")
    ) {
      const t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
      return parseInt(e.getAttribute(t) || 0, 10);
    }
    return 0;
  }
  function Fe(e = v) {
    return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
  }
  function ze() {
    return !(!v || !Fe(v)) && !v.nextElementSibling;
  }
  function qe() {
    return 0 === c && 0 === h;
  }
  function Oe() {
    return !!v && !v.nextElementSibling && (!Fe(v) || !v.parentNode.nextElementSibling);
  }
  function Ve() {
    if (A.pause) {
      const e = _.wrapper.classList.contains("paused");
      ht(), _.wrapper.classList.add("paused"), !1 === e && Pe({ type: "paused" });
    }
  }
  function Ue() {
    const e = _.wrapper.classList.contains("paused");
    _.wrapper.classList.remove("paused"), ct(), e && Pe({ type: "resumed" });
  }
  function We(e) {
    "boolean" == typeof e ? (e ? Ve() : Ue()) : je() ? Ue() : Ve();
  }
  function je() {
    return _.wrapper.classList.contains("paused");
  }
  function Ke(e, i, s, a) {
    if (
      Pe({
        type: "beforeslidechange",
        data: { indexh: void 0 === e ? c : e, indexv: void 0 === i ? h : i, origin: a },
      }).defaultPrevented
    )
      return;
    g = v;
    const r = _.wrapper.querySelectorAll(f);
    if (re.isActive()) {
      const t = re.getSlideByIndices(e, i);
      return void (t && re.scrollToSlide(t));
    }
    if (0 === r.length) return;
    void 0 !== i || de.isActive() || (i = De(r[e])),
      g && g.parentNode && g.parentNode.classList.contains("stack") && He(g.parentNode, h);
    const o = $.concat();
    $.length = 0;
    let l = c || 0,
      d = h || 0;
    (c = _e(f, void 0 === e ? c : e)), (h = _e(y, void 0 === i ? h : i));
    let u = c !== l || h !== d;
    u || (g = null);
    let p = r[c],
      m = p.querySelectorAll("section");
    n.classList.toggle("is-vertical-slide", m.length > 1), (v = m[h] || p);
    let b = !1;
    u &&
      g &&
      v &&
      !de.isActive() &&
      ((J = "running"),
      (b = $e(g, v, l, d)),
      b && _.slides.classList.add("disable-slide-transitions")),
      Qe(),
      Ie(),
      de.isActive() && de.update(),
      void 0 !== s && le.goto(s),
      g &&
        g !== v &&
        (g.classList.remove("present"),
        g.setAttribute("aria-hidden", "true"),
        qe() &&
          setTimeout(() => {
            t(_.wrapper, f + ".stack").forEach((e) => {
              He(e, 0);
            });
          }, 0));
    e: for (let e = 0, t = $.length; e < t; e++) {
      for (let t = 0; t < o.length; t++)
        if (o[t] === $[e]) {
          o.splice(t, 1);
          continue e;
        }
      _.viewport.classList.add($[e]), Pe({ type: $[e] });
    }
    for (; o.length; ) _.viewport.classList.remove(o.pop());
    u && Te(a),
      (!u && g) || (te.stopEmbeddedContent(g), te.startEmbeddedContent(v)),
      requestAnimationFrame(() => {
        Ee(Se(v));
      }),
      ge.update(),
      ue.update(),
      be.update(),
      ne.update(),
      ne.updateParallax(),
      ie.update(),
      le.update(),
      he.writeURL(),
      ct(),
      b &&
        (setTimeout(() => {
          _.slides.classList.remove("disable-slide-transitions");
        }, 0),
        A.autoAnimate && ae.run(g, v));
  }
  function $e(e, t, i, s) {
    return (
      e.hasAttribute("data-auto-animate") &&
      t.hasAttribute("data-auto-animate") &&
      e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") &&
      !(c > i || h > s ? t : e).hasAttribute("data-auto-animate-restart")
    );
  }
  function Xe() {
    ke(),
      Ae(),
      Ie(),
      (G = A.autoSlide),
      ct(),
      ne.create(),
      he.writeURL(),
      !0 === A.sortFragmentsOnSync && le.sortAll(),
      ue.update(),
      ge.update(),
      Qe(),
      be.update(),
      be.updateVisibility(),
      me.update(),
      ne.update(!0),
      ie.update(),
      te.formatEmbeddedContent(),
      !1 === A.autoPlayMedia
        ? te.stopEmbeddedContent(v, { unloadIframes: !1 })
        : te.startEmbeddedContent(v),
      de.isActive() && de.layout();
  }
  function Ye(e = st()) {
    e.forEach((t, i) => {
      let s = e[Math.floor(Math.random() * e.length)];
      s.parentNode === t.parentNode && t.parentNode.insertBefore(t, s);
      let a = t.querySelectorAll("section");
      a.length && Ye(a);
    });
  }
  function _e(e, i) {
    let s = t(_.wrapper, e),
      a = s.length,
      n = re.isActive() || oe.isActive(),
      r = !1,
      o = !1;
    if (a) {
      A.loop && (i >= a && (r = !0), (i %= a) < 0 && ((i = a + i), (o = !0))),
        (i = Math.max(Math.min(i, a - 1), 0));
      for (let e = 0; e < a; e++) {
        let t = s[e],
          a = A.rtl && !Fe(t);
        t.classList.remove("past"),
          t.classList.remove("present"),
          t.classList.remove("future"),
          t.setAttribute("hidden", ""),
          t.setAttribute("aria-hidden", "true"),
          t.querySelector("section") && t.classList.add("stack"),
          n
            ? t.classList.add("present")
            : e < i
            ? (t.classList.add(a ? "future" : "past"), A.fragments && Je(t))
            : e > i
            ? (t.classList.add(a ? "past" : "future"), A.fragments && Ge(t))
            : e === i && A.fragments && (r ? Ge(t) : o && Je(t));
      }
      let e = s[i],
        t = e.classList.contains("present");
      e.classList.add("present"),
        e.removeAttribute("hidden"),
        e.removeAttribute("aria-hidden"),
        t || Pe({ target: e, type: "visible", bubbles: !1 });
      let l = e.getAttribute("data-state");
      l && ($ = $.concat(l.split(" ")));
    } else i = 0;
    return i;
  }
  function Je(e) {
    t(e, ".fragment").forEach((e) => {
      e.classList.add("visible"), e.classList.remove("current-fragment");
    });
  }
  function Ge(e) {
    t(e, ".fragment.visible").forEach((e) => {
      e.classList.remove("visible", "current-fragment");
    });
  }
  function Qe() {
    let e,
      i,
      s = st(),
      a = s.length;
    if (a && void 0 !== c) {
      let n = de.isActive() ? 10 : A.viewDistance;
      u && (n = de.isActive() ? 6 : A.mobileViewDistance), oe.isActive() && (n = Number.MAX_VALUE);
      for (let r = 0; r < a; r++) {
        let o = s[r],
          l = t(o, "section"),
          d = l.length;
        if (
          ((e = Math.abs((c || 0) - r) || 0),
          A.loop && (e = Math.abs(((c || 0) - r) % (a - n)) || 0),
          e < n ? te.load(o) : te.unload(o),
          d)
        ) {
          let t = De(o);
          for (let s = 0; s < d; s++) {
            let a = l[s];
            (i = r === (c || 0) ? Math.abs((h || 0) - s) : Math.abs(s - t)),
              e + i < n ? te.load(a) : te.unload(a);
          }
        }
      }
      rt()
        ? _.wrapper.classList.add("has-vertical-slides")
        : _.wrapper.classList.remove("has-vertical-slides"),
        nt()
          ? _.wrapper.classList.add("has-horizontal-slides")
          : _.wrapper.classList.remove("has-horizontal-slides");
    }
  }
  function Ze({ includeFragments: e = !1 } = {}) {
    let t = _.wrapper.querySelectorAll(f),
      i = _.wrapper.querySelectorAll(y),
      s = { left: c > 0, right: c < t.length - 1, up: h > 0, down: h < i.length - 1 };
    if (
      (A.loop &&
        (t.length > 1 && ((s.left = !0), (s.right = !0)),
        i.length > 1 && ((s.up = !0), (s.down = !0))),
      t.length > 1 &&
        "linear" === A.navigationMode &&
        ((s.right = s.right || s.down), (s.left = s.left || s.up)),
      !0 === e)
    ) {
      let e = le.availableRoutes();
      (s.left = s.left || e.prev),
        (s.up = s.up || e.prev),
        (s.down = s.down || e.next),
        (s.right = s.right || e.next);
    }
    if (A.rtl) {
      let e = s.left;
      (s.left = s.right), (s.right = e);
    }
    return s;
  }
  function et(e = v) {
    let t = st(),
      i = 0;
    e: for (let s = 0; s < t.length; s++) {
      let a = t[s],
        n = a.querySelectorAll("section");
      for (let t = 0; t < n.length; t++) {
        if (n[t] === e) break e;
        "uncounted" !== n[t].dataset.visibility && i++;
      }
      if (a === e) break;
      !1 === a.classList.contains("stack") && "uncounted" !== a.dataset.visibility && i++;
    }
    return i;
  }
  function tt(e) {
    let i,
      s = c,
      a = h;
    if (e)
      if (re.isActive())
        (s = parseInt(e.getAttribute("data-index-h"), 10)),
          e.getAttribute("data-index-v") && (a = parseInt(e.getAttribute("data-index-v"), 10));
      else {
        let i = Fe(e),
          n = i ? e.parentNode : e,
          r = st();
        (s = Math.max(r.indexOf(n), 0)),
          (a = void 0),
          i && (a = Math.max(t(e.parentNode, "section").indexOf(e), 0));
      }
    if (!e && v) {
      if (v.querySelectorAll(".fragment").length > 0) {
        let e = v.querySelector(".current-fragment");
        i =
          e && e.hasAttribute("data-fragment-index")
            ? parseInt(e.getAttribute("data-fragment-index"), 10)
            : v.querySelectorAll(".fragment.visible").length - 1;
      }
    }
    return { h: s, v: a, f: i };
  }
  function it() {
    return t(_.wrapper, m + ':not(.stack):not([data-visibility="uncounted"])');
  }
  function st() {
    return t(_.wrapper, f);
  }
  function at() {
    return t(_.wrapper, ".slides>section>section");
  }
  function nt() {
    return st().length > 1;
  }
  function rt() {
    return at().length > 1;
  }
  function ot() {
    return it().length;
  }
  function lt(e, t) {
    let i = st()[e],
      s = i && i.querySelectorAll("section");
    return s && s.length && "number" == typeof t ? (s ? s[t] : void 0) : i;
  }
  function dt() {
    let e = tt();
    return {
      indexh: e.h,
      indexv: e.v,
      indexf: e.f,
      paused: je(),
      overview: de.isActive(),
      ...me.getState(),
    };
  }
  function ct() {
    if ((ht(), v && !1 !== A.autoSlide)) {
      let e = v.querySelector(".current-fragment[data-autoslide]"),
        i = e ? e.getAttribute("data-autoslide") : null,
        s = v.parentNode ? v.parentNode.getAttribute("data-autoslide") : null,
        a = v.getAttribute("data-autoslide");
      i
        ? (G = parseInt(i, 10))
        : a
        ? (G = parseInt(a, 10))
        : s
        ? (G = parseInt(s, 10))
        : ((G = A.autoSlide),
          0 === v.querySelectorAll(".fragment").length &&
            t(v, "video, audio").forEach((e) => {
              e.hasAttribute("data-autoplay") &&
                G &&
                (1e3 * e.duration) / e.playbackRate > G &&
                (G = (1e3 * e.duration) / e.playbackRate + 1e3);
            })),
        !G ||
          ee ||
          je() ||
          de.isActive() ||
          (Oe() && !le.availableRoutes().next && !0 !== A.loop) ||
          ((Q = setTimeout(() => {
            "function" == typeof A.autoSlideMethod ? A.autoSlideMethod() : bt(), ct();
          }, G)),
          (Z = Date.now())),
        S && S.setPlaying(-1 !== Q);
    }
  }
  function ht() {
    clearTimeout(Q), (Q = -1);
  }
  function ut() {
    G &&
      !ee &&
      ((ee = !0), Pe({ type: "autoslidepaused" }), clearTimeout(Q), S && S.setPlaying(!1));
  }
  function gt() {
    G && ee && ((ee = !1), Pe({ type: "autoslideresumed" }), ct());
  }
  function vt({ skipFragments: e = !1 } = {}) {
    if (((O.hasNavigatedHorizontally = !0), re.isActive())) return re.prev();
    A.rtl
      ? (de.isActive() || e || !1 === le.next()) &&
        Ze().left &&
        Ke(c + 1, "grid" === A.navigationMode ? h : void 0)
      : (de.isActive() || e || !1 === le.prev()) &&
        Ze().left &&
        Ke(c - 1, "grid" === A.navigationMode ? h : void 0);
  }
  function pt({ skipFragments: e = !1 } = {}) {
    if (((O.hasNavigatedHorizontally = !0), re.isActive())) return re.next();
    A.rtl
      ? (de.isActive() || e || !1 === le.prev()) &&
        Ze().right &&
        Ke(c - 1, "grid" === A.navigationMode ? h : void 0)
      : (de.isActive() || e || !1 === le.next()) &&
        Ze().right &&
        Ke(c + 1, "grid" === A.navigationMode ? h : void 0);
  }
  function mt({ skipFragments: e = !1 } = {}) {
    if (re.isActive()) return re.prev();
    (de.isActive() || e || !1 === le.prev()) && Ze().up && Ke(c, h - 1);
  }
  function ft({ skipFragments: e = !1 } = {}) {
    if (((O.hasNavigatedVertically = !0), re.isActive())) return re.next();
    (de.isActive() || e || !1 === le.next()) && Ze().down && Ke(c, h + 1);
  }
  function yt({ skipFragments: e = !1 } = {}) {
    if (re.isActive()) return re.prev();
    if (e || !1 === le.prev())
      if (Ze().up) mt({ skipFragments: e });
      else {
        let i;
        if (
          ((i = A.rtl ? t(_.wrapper, f + ".future").pop() : t(_.wrapper, f + ".past").pop()),
          i && i.classList.contains("stack"))
        ) {
          let e = i.querySelectorAll("section").length - 1 || void 0;
          Ke(c - 1, e);
        } else A.rtl ? pt({ skipFragments: e }) : vt({ skipFragments: e });
      }
  }
  function bt({ skipFragments: e = !1 } = {}) {
    if (((O.hasNavigatedHorizontally = !0), (O.hasNavigatedVertically = !0), re.isActive()))
      return re.next();
    if (e || !1 === le.next()) {
      let t = Ze();
      t.down && t.right && A.loop && ze() && (t.down = !1),
        t.down
          ? ft({ skipFragments: e })
          : A.rtl
          ? vt({ skipFragments: e })
          : pt({ skipFragments: e });
    }
  }
  function wt(e) {
    let t = e.data;
    if (
      "string" == typeof t &&
      "{" === t.charAt(0) &&
      "}" === t.charAt(t.length - 1) &&
      ((t = JSON.parse(t)), t.method && "function" == typeof l[t.method])
    )
      if (!1 === b.test(t.method)) {
        const e = l[t.method].apply(l, t.args);
        Ne("callback", { method: t.method, result: e });
      } else
        console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API');
  }
  function Et(e) {
    "running" === J &&
      /section/gi.test(e.target.nodeName) &&
      ((J = "idle"),
      Pe({
        type: "slidetransitionend",
        data: { indexh: c, indexv: h, previousSlide: g, currentSlide: v },
      }));
  }
  function St(e) {
    const t = r(e.target, 'a[href^="#"]');
    if (t) {
      const i = t.getAttribute("href"),
        s = he.getIndicesFromHash(i);
      s && (l.slide(s.h, s.v, s.f), e.preventDefault());
    }
  }
  function Rt(e) {
    Ie();
  }
  function At(e) {
    !1 === document.hidden &&
      document.activeElement !== document.body &&
      ("function" == typeof document.activeElement.blur && document.activeElement.blur(),
      document.body.focus());
  }
  function kt(e) {
    (document.fullscreenElement || document.webkitFullscreenElement) === _.wrapper &&
      (e.stopImmediatePropagation(),
      setTimeout(() => {
        l.layout(), l.focus.focus();
      }, 1));
  }
  function Lt(e) {
    Oe() && !1 === A.loop ? (Ke(0, 0), gt()) : ee ? gt() : ut();
  }
  const Ct = {
    VERSION: K,
    initialize: function (e) {
      if (!n) throw 'Unable to find presentation root (<div class="reveal">).';
      if (H) throw "Reveal.js has already been initialized.";
      if (((H = !0), (_.wrapper = n), (_.slides = n.querySelector(".slides")), !_.slides))
        throw 'Unable to find slides container (<div class="slides">).';
      return (
        (A = { ...j, ...A, ...o, ...e, ...d() }),
        /print-pdf/gi.test(window.location.search) && (A.view = "print"),
        (function () {
          !0 === A.embedded
            ? (_.viewport = r(n, ".reveal-viewport") || n)
            : ((_.viewport = document.body),
              document.documentElement.classList.add("reveal-full-page"));
          _.viewport.classList.add("reveal-viewport");
        })(),
        window.addEventListener("load", Ie, !1),
        pe.load(A.plugins, A.dependencies).then(we),
        new Promise((e) => l.on("ready", e))
      );
    },
    configure: Re,
    destroy: function () {
      (H = !1),
        !1 !== q &&
          (ke(),
          ht(),
          be.destroy(),
          fe.destroy(),
          me.destroy(),
          pe.destroy(),
          ve.destroy(),
          ue.destroy(),
          ge.destroy(),
          ne.destroy(),
          ie.destroy(),
          se.destroy(),
          document.removeEventListener("fullscreenchange", kt),
          document.removeEventListener("webkitfullscreenchange", kt),
          document.removeEventListener("visibilitychange", At, !1),
          window.removeEventListener("message", wt, !1),
          window.removeEventListener("load", Ie, !1),
          _.pauseOverlay && _.pauseOverlay.remove(),
          _.statusElement && _.statusElement.remove(),
          document.documentElement.classList.remove("reveal-full-page"),
          _.wrapper.classList.remove(
            "ready",
            "center",
            "has-horizontal-slides",
            "has-vertical-slides"
          ),
          _.wrapper.removeAttribute("data-transition-speed"),
          _.wrapper.removeAttribute("data-background-transition"),
          _.viewport.classList.remove("reveal-viewport"),
          _.viewport.style.removeProperty("--slide-width"),
          _.viewport.style.removeProperty("--slide-height"),
          _.slides.style.removeProperty("width"),
          _.slides.style.removeProperty("height"),
          _.slides.style.removeProperty("zoom"),
          _.slides.style.removeProperty("left"),
          _.slides.style.removeProperty("top"),
          _.slides.style.removeProperty("bottom"),
          _.slides.style.removeProperty("right"),
          _.slides.style.removeProperty("transform"),
          Array.from(_.wrapper.querySelectorAll(m)).forEach((e) => {
            e.style.removeProperty("display"),
              e.style.removeProperty("top"),
              e.removeAttribute("hidden"),
              e.removeAttribute("aria-hidden");
          }));
    },
    sync: Xe,
    syncSlide: function (e = v) {
      ne.sync(e), le.sync(e), te.load(e), ne.update(), be.update();
    },
    syncFragments: le.sync.bind(le),
    slide: Ke,
    left: vt,
    right: pt,
    up: mt,
    down: ft,
    prev: yt,
    next: bt,
    navigateLeft: vt,
    navigateRight: pt,
    navigateUp: mt,
    navigateDown: ft,
    navigatePrev: yt,
    navigateNext: bt,
    navigateFragment: le.goto.bind(le),
    prevFragment: le.prev.bind(le),
    nextFragment: le.next.bind(le),
    on: Le,
    off: Ce,
    addEventListener: Le,
    removeEventListener: Ce,
    layout: Ie,
    shuffle: Ye,
    availableRoutes: Ze,
    availableFragments: le.availableRoutes.bind(le),
    toggleHelp: me.toggleHelp.bind(me),
    toggleOverview: de.toggle.bind(de),
    toggleScrollView: re.toggle.bind(re),
    togglePause: We,
    toggleAutoSlide: function (e) {
      "boolean" == typeof e ? (e ? gt() : ut()) : ee ? gt() : ut();
    },
    toggleJumpToSlide: function (e) {
      "boolean" == typeof e ? (e ? se.show() : se.hide()) : se.isVisible() ? se.hide() : se.show();
    },
    isFirstSlide: qe,
    isLastSlide: Oe,
    isLastVerticalSlide: ze,
    isVerticalSlide: Fe,
    isVerticalStack: function (e = v) {
      return e.classList.contains(".stack") || null !== e.querySelector("section");
    },
    isPaused: je,
    isAutoSliding: function () {
      return !(!G || ee);
    },
    isSpeakerNotes: be.isSpeakerNotesWindow.bind(be),
    isOverview: de.isActive.bind(de),
    isFocused: fe.isFocused.bind(fe),
    isOverlayOpen: me.isOpen.bind(me),
    isScrollView: re.isActive.bind(re),
    isPrintView: oe.isActive.bind(oe),
    isReady: () => q,
    loadSlide: te.load.bind(te),
    unloadSlide: te.unload.bind(te),
    startEmbeddedContent: () => te.startEmbeddedContent(v),
    stopEmbeddedContent: () => te.stopEmbeddedContent(v, { unloadIframes: !1 }),
    previewIframe: me.previewIframe.bind(me),
    previewImage: me.previewImage.bind(me),
    previewVideo: me.previewVideo.bind(me),
    showPreview: me.previewIframe.bind(me),
    hidePreview: me.close.bind(me),
    addEventListeners: Ae,
    removeEventListeners: ke,
    dispatchEvent: Pe,
    getState: dt,
    setState: function (e) {
      if ("object" == typeof e) {
        Ke(s(e.indexh), s(e.indexv), s(e.indexf));
        let t = s(e.paused),
          i = s(e.overview);
        "boolean" == typeof t && t !== je() && We(t),
          "boolean" == typeof i && i !== de.isActive() && de.toggle(i),
          me.setState(e);
      }
    },
    getProgress: function () {
      let e = ot(),
        t = et();
      if (v) {
        let e = v.querySelectorAll(".fragment");
        if (e.length > 0) {
          let i = 0.9;
          t += (v.querySelectorAll(".fragment.visible").length / e.length) * i;
        }
      }
      return Math.min(t / (e - 1), 1);
    },
    getIndices: tt,
    getSlidesAttributes: function () {
      return it().map((e) => {
        let t = {};
        for (let i = 0; i < e.attributes.length; i++) {
          let s = e.attributes[i];
          t[s.name] = s.value;
        }
        return t;
      });
    },
    getSlidePastCount: et,
    getTotalSlides: ot,
    getSlide: lt,
    getPreviousSlide: () => g,
    getCurrentSlide: () => v,
    getSlideBackground: function (e, t) {
      let i = "number" == typeof e ? lt(e, t) : e;
      if (i) return i.slideBackgroundElement;
    },
    getSlideNotes: be.getSlideNotes.bind(be),
    getSlides: it,
    getHorizontalSlides: st,
    getVerticalSlides: at,
    hasHorizontalSlides: nt,
    hasVerticalSlides: rt,
    hasNavigatedHorizontally: () => O.hasNavigatedHorizontally,
    hasNavigatedVertically: () => O.hasNavigatedVertically,
    shouldAutoAnimateBetween: $e,
    addKeyBinding: ce.addKeyBinding.bind(ce),
    removeKeyBinding: ce.removeKeyBinding.bind(ce),
    triggerKey: ce.triggerKey.bind(ce),
    registerKeyboardShortcut: ce.registerKeyboardShortcut.bind(ce),
    getComputedSlideSize: Be,
    setCurrentScrollPage: function (e, t, i) {
      let s = c || 0;
      (c = t), (h = i);
      const a = v !== e;
      (g = v),
        (v = e),
        v && g && A.autoAnimate && $e(g, v, s, h) && ae.run(g, v),
        a &&
          (g && (te.stopEmbeddedContent(g), te.stopEmbeddedContent(g.slideBackgroundElement)),
          te.startEmbeddedContent(v),
          te.startEmbeddedContent(v.slideBackgroundElement)),
        requestAnimationFrame(() => {
          Ee(Se(v));
        }),
        Te();
    },
    getScale: () => X,
    getConfig: () => A,
    getQueryHash: d,
    getSlidePath: he.getHash.bind(he),
    getRevealElement: () => n,
    getSlidesElement: () => _.slides,
    getViewportElement: () => _.viewport,
    getBackgroundsElement: () => ne.element,
    registerPlugin: pe.registerPlugin.bind(pe),
    hasPlugin: pe.hasPlugin.bind(pe),
    getPlugin: pe.getPlugin.bind(pe),
    getPlugins: pe.getRegisteredPlugins.bind(pe),
  };
  return (
    e(l, {
      ...Ct,
      announceStatus: Ee,
      getStatusText: Se,
      focus: fe,
      scroll: re,
      progress: ge,
      controls: ue,
      location: he,
      overview: de,
      keyboard: ce,
      fragments: le,
      backgrounds: ne,
      slideContent: te,
      slideNumber: ie,
      onUserInput: function (e) {
        A.autoSlideStoppable && ut();
      },
      closeOverlay: me.close.bind(me),
      updateSlidesVisibility: Qe,
      layoutSlideContents: Me,
      transformSlides: xe,
      cueAutoSlide: ct,
      cancelAutoSlide: ht,
    }),
    Ct
  );
}
let X = $,
  Y = [];
(X.initialize = (e) => (
  Object.assign(X, new $(document.querySelector(".reveal"), e)), Y.map((e) => e(X)), X.initialize()
)),
  ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach(
    (e) => {
      X[e] = (...t) => {
        Y.push((i) => i[e].call(null, ...t));
      };
    }
  ),
  (X.isReady = () => !1),
  (X.VERSION = K);
export { X as default };
//# sourceMappingURL=reveal.esm.js.map
