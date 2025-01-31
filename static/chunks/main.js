import { a as he } from "./chunks/chunk-Z7A2MI7T-min.js";
import { a as pe } from "./chunks/chunk-TBBW4HRZ-min.js";
import { a as T } from "./chunks/chunk-JFRLTE7L-min.js";
import { a as P, b as p } from "./chunks/chunk-NGFNJB52-min.js";
import "./chunks/chunk-AFKMFZLY-min.js";
import { a as ue } from "./chunks/chunk-DJS7JTO5-min.js";
import { a as k } from "./chunks/chunk-RLK5BNRA-min.js";
import { a as n } from "./chunks/chunk-E3AMLOTO-min.js";
import { a as ze, b as ae } from "./chunks/chunk-E27WR637-min.js";
var Se = ze((ce, de) => {
  (function (o, e) {
    typeof ce == "object" && typeof de != "undefined"
      ? (de.exports = e())
      : typeof define == "function" && define.amd
      ? define(e)
      : (o.Stats = e());
  })(ce, function () {
    var o = function () {
      function e(c) {
        return s.appendChild(c.dom), c;
      }
      function t(c) {
        for (var d = 0; d < s.children.length; d++)
          s.children[d].style.display = d === c ? "block" : "none";
        i = c;
      }
      var i = 0,
        s = document.createElement("div");
      (s.style.cssText =
        "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
        s.addEventListener(
          "click",
          function (c) {
            c.preventDefault(), t(++i % s.children.length);
          },
          !1
        );
      var r = (performance || Date).now(),
        a = r,
        l = 0,
        m = e(new o.Panel("FPS", "#0ff", "#002")),
        f = e(new o.Panel("MS", "#0f0", "#020"));
      if (self.performance && self.performance.memory)
        var y = e(new o.Panel("MB", "#f08", "#201"));
      return (
        t(0),
        {
          REVISION: 16,
          dom: s,
          addPanel: e,
          showPanel: t,
          begin: function () {
            r = (performance || Date).now();
          },
          end: function () {
            l++;
            var c = (performance || Date).now();
            if (
              (f.update(c - r, 200),
              c > a + 1e3 &&
                (m.update((1e3 * l) / (c - a), 100), (a = c), (l = 0), y))
            ) {
              var d = performance.memory;
              y.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
            }
            return c;
          },
          update: function () {
            r = this.end();
          },
          domElement: s,
          setMode: t,
        }
      );
    };
    return (
      (o.Panel = function (e, t, i) {
        var s = 1 / 0,
          r = 0,
          a = Math.round,
          l = a(window.devicePixelRatio || 1),
          m = 80 * l,
          f = 48 * l,
          y = 3 * l,
          c = 2 * l,
          d = 3 * l,
          h = 15 * l,
          b = 74 * l,
          E = 30 * l,
          g = document.createElement("canvas");
        (g.width = m),
          (g.height = f),
          (g.style.cssText = "width:80px;height:48px");
        var u = g.getContext("2d");
        return (
          (u.font = "bold " + 9 * l + "px Helvetica,Arial,sans-serif"),
          (u.textBaseline = "top"),
          (u.fillStyle = i),
          u.fillRect(0, 0, m, f),
          (u.fillStyle = t),
          u.fillText(e, y, c),
          u.fillRect(d, h, b, E),
          (u.fillStyle = i),
          (u.globalAlpha = 0.9),
          u.fillRect(d, h, b, E),
          {
            dom: g,
            update: function (M, Ve) {
              (s = Math.min(s, M)),
                (r = Math.max(r, M)),
                (u.fillStyle = i),
                (u.globalAlpha = 1),
                u.fillRect(0, 0, m, h),
                (u.fillStyle = t),
                u.fillText(
                  a(M) + " " + e + " (" + a(s) + "-" + a(r) + ")",
                  y,
                  c
                ),
                u.drawImage(g, d + l, h, b - l, E, d, h, b - l, E),
                u.fillRect(d + b - l, h, l, E),
                (u.fillStyle = i),
                (u.globalAlpha = 0.9),
                u.fillRect(d + b - l, h, l, a((1 - M / Ve) * E));
            },
          }
        );
      }),
      o
    );
  });
});
var me = "data-close-dialog",
  fe = `[${me}]`;
function ge(o) {
  let e = Array.from(o.querySelectorAll("[autofocus]")).filter(ve)[0];
  e || ((e = o), o.setAttribute("tabindex", "-1")), e.focus();
}
function ye(o) {
  let e = o.currentTarget;
  e instanceof Element &&
    (o.key === "Escape" || o.key === "Esc"
      ? (O(e, !1), o.stopPropagation())
      : o.key === "Tab" && Ye(o));
}
function ve(o) {
  return o.tabIndex >= 0 && !o.disabled && Fe(o);
}
function Fe(o) {
  return (
    !o.hidden &&
    (!o.type || o.type !== "hidden") &&
    (o.offsetWidth > 0 || o.offsetHeight > 0)
  );
}
function Ye(o) {
  if (!(o.currentTarget instanceof Element)) return;
  let e = o.currentTarget.querySelector("details-dialog");
  if (!e) return;
  o.preventDefault();
  let t = Array.from(e.querySelectorAll("*")).filter(ve);
  if (t.length === 0) return;
  let i = o.shiftKey ? -1 : 1,
    s = e.getRootNode(),
    r = e.contains(s.activeElement) ? s.activeElement : null,
    a = i === -1 ? -1 : 0;
  if (r instanceof HTMLElement) {
    let l = t.indexOf(r);
    l !== -1 && (a = l + i);
  }
  a < 0 ? (a = t.length - 1) : (a = a % t.length), t[a].focus();
}
function be(o) {
  let e = o.querySelector("details-dialog");
  return e instanceof x
    ? e.dispatchEvent(
        new CustomEvent("details-dialog-close", { bubbles: !0, cancelable: !0 })
      )
    : !0;
}
function Ee(o) {
  if (!(o.currentTarget instanceof Element)) return;
  let e = o.currentTarget.closest("details");
  !e ||
    !e.hasAttribute("open") ||
    be(e) ||
    (o.preventDefault(), o.stopPropagation());
}
function ke(o) {
  let e = o.currentTarget;
  if (!(e instanceof Element)) return;
  let t = e.querySelector("details-dialog");
  if (t instanceof x)
    if (e.hasAttribute("open")) {
      let i = "getRootNode" in t ? t.getRootNode() : document;
      i.activeElement instanceof HTMLElement &&
        C.set(t, { details: e, activeElement: i.activeElement }),
        ge(t),
        e.addEventListener("keydown", ye);
    } else {
      for (let s of t.querySelectorAll("form")) s.reset();
      let i = je(e, t);
      i && i.focus(), e.removeEventListener("keydown", ye);
    }
}
function je(o, e) {
  let t = C.get(e);
  return t && t.activeElement instanceof HTMLElement
    ? t.activeElement
    : o.querySelector("summary");
}
function O(o, e) {
  e !== o.hasAttribute("open") &&
    (e ? o.setAttribute("open", "") : be(o) && o.removeAttribute("open"));
}
function R(o) {
  let e = o.currentTarget;
  if (!(e instanceof Element)) return;
  let t = e.querySelector("details-dialog");
  if (!(t instanceof x)) return;
  let i = t.querySelector("include-fragment:not([src])");
  if (!i) return;
  let s = t.src;
  s !== null &&
    (i.addEventListener("loadend", () => {
      e.hasAttribute("open") && ge(t);
    }),
    i.setAttribute("src", s),
    le(e));
}
function Te(o, e, t) {
  le(o),
    e && o.addEventListener("toggle", R, { once: !0 }),
    e && t && o.addEventListener("mouseover", R, { once: !0 });
}
function le(o) {
  o.removeEventListener("toggle", R), o.removeEventListener("mouseover", R);
}
var C = new WeakMap(),
  x = class extends HTMLElement {
    static get CLOSE_ATTR() {
      return me;
    }
    static get CLOSE_SELECTOR() {
      return fe;
    }
    constructor() {
      super();
      C.set(this, { details: null, activeElement: null }),
        this.addEventListener("click", function ({ target: e }) {
          if (!(e instanceof Element)) return;
          let t = e.closest("details");
          t && e.closest(fe) && O(t, !1);
        }),
        this.addEventListener("submit", function (e) {
          if (!(e.target instanceof HTMLFormElement)) return;
          let { target: t } = e,
            i = "submitter" in e ? e : null,
            s = i == null ? void 0 : i.submitter;
          if (
            ((s == null ? void 0 : s.getAttribute("formmethod")) ||
              t.getAttribute("method")) == "dialog"
          ) {
            e.preventDefault();
            let a = t.closest("details");
            a && O(a, !1);
          }
        });
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(e) {
      this.setAttribute("src", e || "");
    }
    get preload() {
      return this.hasAttribute("preload");
    }
    set preload(e) {
      e ? this.setAttribute("preload", "") : this.removeAttribute("preload");
    }
    connectedCallback() {
      this.setAttribute("role", "dialog"),
        this.setAttribute("aria-modal", "true");
      let e = C.get(this);
      if (!e) return;
      let t = this.parentElement;
      if (!t) return;
      let i = t.querySelector("summary");
      i &&
        (i.hasAttribute("role") || i.setAttribute("role", "button"),
        i.addEventListener("click", Ee, { capture: !0 })),
        t.addEventListener("toggle", ke),
        (e.details = t),
        Te(t, this.src, this.preload);
    }
    disconnectedCallback() {
      let e = C.get(this);
      if (!e) return;
      let { details: t } = e;
      if (!t) return;
      t.removeEventListener("toggle", ke), le(t);
      let i = t.querySelector("summary");
      i && i.removeEventListener("click", Ee, { capture: !0 }),
        (e.details = null);
    }
    toggle(e) {
      let t = C.get(this);
      if (!t) return;
      let { details: i } = t;
      !i || O(i, e);
    }
    static get observedAttributes() {
      return ["src", "preload"];
    }
    attributeChangedCallback() {
      let e = C.get(this);
      if (!e) return;
      let { details: t } = e;
      !t || Te(t, this.src, this.preload);
    }
  };
window.customElements.get("details-dialog") ||
  ((window.DetailsDialogElement = x),
  window.customElements.define("details-dialog", x));
var De = ae(Se());
var v,
  we,
  w,
  S,
  L,
  Le,
  Me,
  q,
  Ce = function () {
    return typeof window != "undefined";
  },
  xe = function () {
    return v || (Ce() && (v = window.gsap) && v.registerPlugin && v);
  },
  Ae = function (e) {
    return typeof e == "string";
  },
  Ie = function (e) {
    return typeof e == "function";
  },
  I = function (e, t) {
    var i = t === "x" ? "Width" : "Height",
      s = "scroll" + i,
      r = "client" + i;
    return e === w || e === S || e === L
      ? Math.max(S[s], L[s]) - (w["inner" + i] || S[r] || L[r])
      : e[s] - e["offset" + i];
  },
  B = function (e, t) {
    var i = "scroll" + (t === "x" ? "Left" : "Top");
    return (
      e === w &&
        (e.pageXOffset != null
          ? (i = "page" + t.toUpperCase() + "Offset")
          : (e = S[i] != null ? S : L)),
      function () {
        return e[i];
      }
    );
  },
  Ue = function (e, t, i, s) {
    if ((Ie(e) && (e = e(t, i, s)), typeof e != "object"))
      return Ae(e) && e !== "max" && e.charAt(1) !== "="
        ? { x: e, y: e }
        : { y: e };
    if (e.nodeType) return { y: e, x: e };
    var r = {},
      a;
    for (a in e) r[a] = a !== "onAutoKill" && Ie(e[a]) ? e[a](t, i, s) : e[a];
    return r;
  },
  Be = function (e, t) {
    if (((e = Le(e)[0]), !e || !e.getBoundingClientRect))
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      );
    var i = e.getBoundingClientRect(),
      s = !t || t === w || t === L,
      r = s
        ? {
            top:
              S.clientTop - (w.pageYOffset || S.scrollTop || L.scrollTop || 0),
            left:
              S.clientLeft -
              (w.pageXOffset || S.scrollLeft || L.scrollLeft || 0),
          }
        : t.getBoundingClientRect(),
      a = { x: i.left - r.left, y: i.top - r.top };
    return !s && t && ((a.x += B(t, "x")()), (a.y += B(t, "y")())), a;
  },
  Pe = function (e, t, i, s, r) {
    return !isNaN(e) && typeof e != "object"
      ? parseFloat(e) - r
      : Ae(e) && e.charAt(1) === "="
      ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + s - r
      : e === "max"
      ? I(t, i) - r
      : Math.min(I(t, i), Be(e, t)[i] - r);
  },
  Oe = function () {
    (v = xe()),
      Ce() &&
        v &&
        typeof document != "undefined" &&
        document.body &&
        ((w = window),
        (L = document.body),
        (S = document.documentElement),
        (Le = v.utils.toArray),
        v.config({ autoKillThreshold: 7 }),
        (Me = v.config()),
        (we = 1));
  },
  A = {
    version: "3.12.2",
    name: "scrollTo",
    rawVars: 1,
    register: function (e) {
      (v = e), Oe();
    },
    init: function (e, t, i, s, r) {
      we || Oe();
      var a = this,
        l = v.getProperty(e, "scrollSnapType");
      (a.isWin = e === w),
        (a.target = e),
        (a.tween = i),
        (t = Ue(t, s, e, r)),
        (a.vars = t),
        (a.autoKill = !!t.autoKill),
        (a.getX = B(e, "x")),
        (a.getY = B(e, "y")),
        (a.x = a.xPrev = a.getX()),
        (a.y = a.yPrev = a.getY()),
        q || (q = v.core.globals().ScrollTrigger),
        v.getProperty(e, "scrollBehavior") === "smooth" &&
          v.set(e, { scrollBehavior: "auto" }),
        l &&
          l !== "none" &&
          ((a.snap = 1),
          (a.snapInline = e.style.scrollSnapType),
          (e.style.scrollSnapType = "none")),
        t.x != null
          ? (a.add(a, "x", a.x, Pe(t.x, e, "x", a.x, t.offsetX || 0), s, r),
            a._props.push("scrollTo_x"))
          : (a.skipX = 1),
        t.y != null
          ? (a.add(a, "y", a.y, Pe(t.y, e, "y", a.y, t.offsetY || 0), s, r),
            a._props.push("scrollTo_y"))
          : (a.skipY = 1);
    },
    render: function (e, t) {
      for (
        var i = t._pt,
          s = t.target,
          r = t.tween,
          a = t.autoKill,
          l = t.xPrev,
          m = t.yPrev,
          f = t.isWin,
          y = t.snap,
          c = t.snapInline,
          d,
          h,
          b,
          E,
          g;
        i;

      )
        i.r(e, i.d), (i = i._next);
      (d = f || !t.skipX ? t.getX() : l),
        (h = f || !t.skipY ? t.getY() : m),
        (b = h - m),
        (E = d - l),
        (g = Me.autoKillThreshold),
        t.x < 0 && (t.x = 0),
        t.y < 0 && (t.y = 0),
        a &&
          (!t.skipX && (E > g || E < -g) && d < I(s, "x") && (t.skipX = 1),
          !t.skipY && (b > g || b < -g) && h < I(s, "y") && (t.skipY = 1),
          t.skipX &&
            t.skipY &&
            (r.kill(),
            t.vars.onAutoKill &&
              t.vars.onAutoKill.apply(r, t.vars.onAutoKillParams || []))),
        f
          ? w.scrollTo(t.skipX ? d : t.x, t.skipY ? h : t.y)
          : (t.skipY || (s.scrollTop = t.y), t.skipX || (s.scrollLeft = t.x)),
        y &&
          (e === 1 || e === 0) &&
          ((h = s.scrollTop),
          (d = s.scrollLeft),
          c
            ? (s.style.scrollSnapType = c)
            : s.style.removeProperty("scroll-snap-type"),
          (s.scrollTop = h + 1),
          (s.scrollLeft = d + 1),
          (s.scrollTop = h),
          (s.scrollLeft = d)),
        (t.xPrev = t.x),
        (t.yPrev = t.y),
        q && q.update();
    },
    kill: function (e) {
      var t = e === "scrollTo";
      (t || e === "scrollTo_x") && (this.skipX = 1),
        (t || e === "scrollTo_y") && (this.skipY = 1);
    },
  };
A.max = I;
A.getOffset = Be;
A.buildGetter = B;
xe() && v.registerPlugin(A);
var H = class extends HTMLElement {
  constructor() {
    super();
    this.clearTimeline = () => {
      this.tl.kill(),
        this.tl.clear(),
        n.killTweensOf(this.ui.logo),
        n.killTweensOf(this.ui.paragraphs);
    };
    this.animateIn = () => {
      this.tl
        .to(this.ui.gradient, { autoAlpha: 1, duration: 1, ease: "none" }, 1)
        .to(this.ui.blur, { autoAlpha: 1, duration: 0.4, ease: "none" }, 1)
        .to(this.ui.blur, { "--blur": "100%", duration: 1.5, ease: "none" }, 1)
        .to(this.ui.blur, { autoAlpha: 0, duration: 1, ease: "none" }),
        this.prefersReducedMotion ? this.tl.progress(1) : this.tl.restart();
    };
    (this.prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches),
      (this.tl = n.timeline({ paused: !0 })),
      (this.ui = { gradient: null, logo: null, blur: null, paragraphs: null });
  }
  connectedCallback() {
    (this.ui.gradient = this.querySelector(".js-gradient")),
      (this.ui.logo = this.querySelector(".js-logo")),
      (this.ui.blur = this.querySelector(".js-blur")),
      (this.ui.paragraphs = this.querySelectorAll("p")),
      this.animateIn();
  }
  disconnectedCallback() {
    this.clearTimeline();
  }
};
var _ = class extends p {
  constructor() {
    super();
    this.addEvents = () => {
      var e, t, i;
      this.close && this.close.addEventListener("click", this.closeModal),
        (e = this.buttonElement) == null ||
          e.addEventListener("mouseenter", this.onEnter),
        (t = this.buttonElement) == null ||
          t.addEventListener("mouseleave", this.onLeave),
        this.modalBackground &&
          this.modalBackground.addEventListener("click", this.closeModal),
        this.buttonElement &&
          this.buttonElement.addEventListener("click", this.openModal),
        !this.playerInit &&
          this.playerElement &&
          (window.YT && ((i = window.YT) == null ? void 0 : i.Player)
            ? this.initPlayer()
            : window.addEventListener("youtubeReadyEvent", (s) => {
                this.initPlayer();
              }));
    };
    this.removeEvents = () => {
      var e, t;
      this.close && this.close.removeEventListener("click", this.closeModal),
        (e = this.buttonElement) == null ||
          e.removeEventListener("mouseenter", this.onEnter),
        (t = this.buttonElement) == null ||
          t.removeEventListener("mouseleave", this.onLeave),
        this.modalBackground &&
          this.modalBackground.removeEventListener("click", this.closeModal),
        this.buttonElement &&
          this.buttonElement.removeEventListener("click", this.openModal);
    };
    this.initPlayer = () => {
      var e;
      (this.playerInit = !0),
        !!this.playerElement &&
          (this.player = new YT.Player(this.playerElement, {
            videoId:
              (e = this.playerElement) == null ? void 0 : e.dataset.videoid,
            playerVars: { rel: 0 },
            events: {
              onReady: () => {
                (this.playerReady = !0),
                  this.isOpened && this.player.playVideo();
              },
            },
          }));
    };
    this.openModal = () => {
      document.addEventListener("keydown", this.onKeydown),
        (document.documentElement.style.overflow = "hidden"),
        (this.isOpened = !0),
        this.videoPreview && this.videoPreview.pause(),
        n
          .timeline({
            onComplete: () => {
              var e, t, i, s;
              (t =
                (e = this.modalContent) == null
                  ? void 0
                  : e.querySelector("iframe")) == null || t.focus(),
                (i = this.modalElement) == null ||
                  i.setAttribute("aria-hidden", "false"),
                (s = this.modalElement) == null ||
                  s.addEventListener("focusout", this.closeModal);
            },
          })
          .to(this.modalElement, { autoAlpha: 1, duration: 0.4 }, 0)
          .fromTo(
            this.modalContent,
            { y: 50 },
            { y: 0, duration: 1, ease: "expo.out" },
            0
          ),
        this.player &&
          this.playerReady &&
          (this.player.seekTo(0, !0), this.player.playVideo());
    };
    this.onKeydown = (e) => {
      e.key === "Escape" && this.closeModal();
    };
    this.closeModal = () => {
      var e;
      document.removeEventListener("keydown", this.onKeydown),
        (e = this.modalElement) == null ||
          e.removeEventListener("focusout", this.closeModal),
        (document.documentElement.style.overflow = ""),
        this.player.pauseVideo(),
        this.videoPreview && this.videoPreview.play(),
        n
          .timeline({
            onComplete: () => {
              var t;
              (t = this.modalElement) == null ||
                t.setAttribute("aria-hidden", "true"),
                (this.isOpened = !1);
            },
          })
          .to(this.modalElement, { autoAlpha: 0, duration: 0.4 }, 0)
          .to(this.modalContent, { y: 50, duration: 1, ease: "expo.out" }, 0);
    };
    this.onEnter = (e) => {
      let t = e == null ? void 0 : e.currentTarget;
      if (!t) return;
      let i = n.utils.selector(t);
      n.to(i("circle"), { attr: { r: 42 }, duration: 0.4, ease: "expo.out" });
    };
    this.onLeave = (e) => {
      let t = e == null ? void 0 : e.currentTarget;
      if (!t) return;
      let i = n.utils.selector(t);
      n.to(i("circle"), { attr: { r: 36 }, duration: 0.7, ease: "expo.out" });
    };
    (this.prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches),
      (this.tl = n.timeline()),
      (this.playerElement = null),
      (this.modalBackground = null),
      (this.modalContent = null),
      (this.isOpened = !1),
      (this.playerReady = !1),
      (this.playerInit = !1),
      (this.modalElement = null),
      (this.buttonElement = null),
      (this.linkFallbackElement = null),
      (this.close = null),
      (this.videoPreview = null);
  }
  connectedCallback() {
    var e, t;
    super.connectedCallback(),
      (this.modalElement = this.querySelector("[data-modal]")),
      (this.buttonElement = this.querySelector(".mi_button")),
      (this.linkFallbackElement = this.querySelector(".mi_button-fallback")),
      (this.close = this.querySelector(".mi_modal__close")),
      (this.playerElement = this.querySelector("[data-player]")),
      (this.modalBackground = this.querySelector("[data-background]")),
      (this.modalContent = this.querySelector(".mi_modal__content")),
      (this.videoPreview = this.querySelector("[data-video-preview]")),
      this.addEvents(),
      (this.buttonElement || this.linkFallbackElement) &&
        ((e = this.buttonElement) == null || e.removeAttribute("aria-hidden"),
        (t = this.linkFallbackElement) == null ||
          t.setAttribute("aria-hidden", "true"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEvents();
  }
};
var W = class extends p {
  constructor() {
    super({
      scrollOption: {
        vStart: "top",
        dStart: "top",
        vEnd: "bottom",
        dEnd: "bottom",
      },
    });
    this.clearTimeline = () => {
      this.animationTimeline.clear(),
        this.animationTimeline.kill(),
        n.killTweensOf(this.sparkElement);
    };
    this.handleResize = () => {
      this.clearTimeline(),
        this.animationTimeline.set(this.sparkElement, {
          translateX: "-50%",
          translateY: "-50%",
        }),
        this.animationTimeline.fromTo(
          this.sparkElement,
          { scale: 1 / 40 },
          { scale: 1, ease: "power1.inOut" }
        );
    };
    this.tick = () => {
      !!this.animationTimeline &&
        !!this.scrollManager &&
        this.animationTimeline.progress(this.scrollManager.scrollProgression);
    };
    (this.animationTimeline = n.timeline()),
      (this.sparkElement = this.querySelector("#spark")),
      this.handleResize();
  }
};
var D = class extends p {
  constructor() {
    super({ scrollOption: { vEnd: "top", dEnd: "top", clamp: !0 } });
    this.createTimeline = () => {
      this.clearTimeline();
      let e = this.querySelector(".section-title__title"),
        t = this.querySelector(".section-title__text"),
        i = this.querySelector(".webgl-gallery__content");
      this.tl
        .to(e, { autoAlpha: 1, duration: 0.4, ease: "none" }, 0.25)
        .to(t, { autoAlpha: 1, duration: 0.4, ease: "none" }, 0.5)
        .fromTo(
          i,
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.4, ease: "none" },
          0.75
        );
    };
    this.clearTimeline = () => {
      this.tl.kill(), this.tl.clear();
    };
    this.animateIn = () => {};
    this.handleResize = () => {
      this.createTimeline();
    };
    this.tick = () => {
      !!this.tl &&
        !!this.scrollManager &&
        this.tl.progress(this.scrollManager.scrollProgression);
    };
    (this.tl = n.timeline({ paused: !0 })),
      this.handleResize(),
      this.animateIn();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.clearTimeline();
  }
};
var N = class extends p {
  constructor() {
    super({
      scrollOption: {
        vStart: "top",
        dStart: "top",
        vEnd: "bottom",
        dEnd: "bottom",
        clamp: !0,
      },
    });
    this.clearTimeline = () => {
      this.animationTimeline.kill(),
        this.animationTimeline.clear(),
        n.killTweensOf(this.headingWrapper),
        n.killTweensOf(this.headingParagraph);
    };
    this.setUpTimeline = () => {
      if (!this.headingWrapper || !this.headingParagraph || !this.heading)
        return;
      let e = this.getBoundingClientRect(),
        t = this.screenManager.innerHeight * 2,
        i = (e.height - t) / t;
      this.clearTimeline(),
        this.animationTimeline.fromTo(
          this.headingWrapper,
          { scale: 2.5 },
          { scale: 1, duration: 1, ease: "power1.inOut" },
          "a"
        ),
        this.animationTimeline.fromTo(
          this.heading,
          { "--bgi-pos": "0%" },
          { "--bgi-pos": "100%", duration: 1 },
          "a"
        ),
        this.animationTimeline.fromTo(
          this.headingWrapper,
          { translateY: "50vh" },
          { translateY: 0, duration: 1, ease: "power1.out" },
          "a"
        ),
        this.animationTimeline.fromTo(
          this.headingParagraph.children,
          { opacity: 0 },
          { opacity: 1, stagger: 0.02, duration: 0.2, delay: 0.7 },
          "a"
        ),
        this.animationTimeline.fromTo(
          this.headingWrapper,
          { scale: 1, opacity: 1, translateY: 0 },
          {
            scale: 0.62,
            opacity: 0.3,
            translateY: "50%",
            duration: 1,
            ease: "power1.inOut",
          },
          "b"
        ),
        this.animationTimeline.fromTo(
          this.headingParagraph,
          { opacity: 1 },
          { opacity: 0, duration: 1 },
          "b"
        );
      let s = 0.2;
      this.animationTimeline.fromTo(
        this.heading,
        { translateY: 0 },
        {
          translateY: "-20vh",
          delay: i + 1 - s,
          duration: s,
          ease: "power2.in",
        },
        0
      );
    };
    this.handleResize = () => {
      this.setUpTimeline();
    };
    this.tick = () => {
      !!this.animationTimeline &&
        !!this.scrollManager &&
        this.animationTimeline.progress(this.scrollManager.scrollProgression);
    };
    (this.animationTimeline = n.timeline()),
      (this.headingWrapper = this.querySelector("#ps_heading-container")),
      (this.headingParagraph = this.querySelector("#ps_heading-paragraph")),
      (this.heading = this.querySelector("#ps_heading")),
      this.handleResize(),
      this.setUpTimeline();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.clearTimeline();
  }
};
var V = class extends p {
  constructor() {
    super();
    this.enterViewPort = () => {
      var e;
      ((e = this.scrollManager) == null ? void 0 : e.scrollProgression) &&
      this.scrollManager.scrollProgression > 0
        ? (n.to(this.nextCard, { opacity: 0.1, duration: 0.7 }),
          n.to(this.cardWrapper, { translateY: 0, duration: 0.7, rotate: 0 }))
        : (n.killTweensOf(this.cardWrapper),
          n.set(this.cardWrapper, { translateY: 0, rotate: 0 }));
    };
    this.leaveViewPort = () => {
      var e;
      ((e = this.scrollManager) == null ? void 0 : e.scrollProgression) &&
        this.scrollManager.scrollProgression > 0 &&
        (n.to(this.nextCard, { opacity: 0.8, duration: 0.7 }),
        n.to(this.cardWrapper, {
          translateY: "-100vh",
          duration: 0.7,
          rotate: this.index % 2 == 0 ? -15 : 15,
        }));
    };
    var t;
    let e = this.getAttribute("data-associated-card-id");
    if (
      ((this.index = parseInt(this.getAttribute("data-index") || "0")),
      (this.nextCard =
        ((t = this.parentElement) == null
          ? void 0
          : t.querySelector(`#stacked-card__shadow-${this.index + 1}`)) ||
        null),
      !e)
    )
      throw new Error(
        "Missing attribute associated-card-id on stack-card-trigger element."
      );
    if (((this.cardWrapper = document.querySelector(e)), !this.cardWrapper))
      throw new Error(`Stack Card ${e} can't be found`);
  }
};
var z = class extends p {
  constructor() {
    super();
    this.generateEnterScreenTimeline = () => {
      let e = n.timeline({ paused: !0 });
      return (
        e.set(this.allCards, { rotate: 0, translateY: 400, translateX: 0 }),
        e.fromTo(
          this.allCards,
          { rotate: 0, translateY: 400, translateX: 0 },
          {
            rotate: "random(4, -4)",
            translateY: "random(-20, 20)",
            translateX: "random(-20, 20)",
            ease: "power3.out",
            duration: 1.7,
          }
        ),
        e
      );
    };
    this.enterViewPort = () => {
      var e;
      ((e = this.scrollManager) == null ? void 0 : e.scrollProgression) !==
        void 0 &&
        this.scrollManager.scrollProgression < 0.5 &&
        this.timeline.restart();
    };
    this.leaveViewPort = () => {
      var e;
      ((e = this.scrollManager) == null ? void 0 : e.scrollProgression) !==
        void 0 &&
        this.scrollManager.scrollProgression < 0.5 &&
        (this.timeline.kill(),
        n.set(this.allCards, { rotate: 0, translateY: 400, translateX: 0 }));
    };
    (this.allCards = Array.from(
      this.parentElement
        ? this.parentElement.querySelectorAll(".stacked-card")
        : []
    )),
      (this.timeline = this.generateEnterScreenTimeline());
  }
};
var F = class extends p {
  constructor() {
    super();
    this.addEvents = () => {
      this.card &&
        (this.card.addEventListener("click", this.onClick),
        this.card.addEventListener("mouseenter", this.onEnter),
        this.card.addEventListener("mouseleave", this.onLeave)),
        this.backdrop &&
          this.backdrop.addEventListener("click", this.animateOut),
        this.close && this.close.addEventListener("click", this.animateOut);
    };
    this.removeEvents = () => {
      this.card &&
        (this.card.removeEventListener("click", this.onClick),
        this.card.removeEventListener("mouseenter", this.onEnter),
        this.card.removeEventListener("mouseleave", this.onLeave)),
        this.backdrop &&
          this.backdrop.removeEventListener("click", this.animateOut),
        this.close && this.close.removeEventListener("click", this.animateOut);
    };
    this.isScriptAlreadyIncluded = (e) => {
      let t = document.getElementsByTagName("script");
      for (let i = 0; i < t.length; i++)
        if (t[i].getAttribute("src") === e) return !0;
      return !1;
    };
    this.initPlayer = () => {
      (this.player = new YT.Player(this.playerContainer, {
        videoId: this.videoId,
        playerVars: { rel: 0 },
        events: {
          onReady: () => {
            this.player.playVideo();
          },
        },
      })),
        (this.youtubeIframe = this.querySelector(
          ".floating-card__image-video"
        ));
    };
    this.onKeydown = (e) => {
      e.key === "Escape" && this.animateOut();
    };
    this.correctScroll = () => {
      var i;
      let e = (i = this.card) == null ? void 0 : i.getBoundingClientRect(),
        t = this.globalScrollManager.scrollY;
      if (e) {
        let s = (this.screenManager.innerHeight - e.height) / 2;
        t = this.globalScrollManager.scrollY + e.top - s;
      }
      n.to(window, { duration: 0.2, scrollTo: t });
    };
    this.onEnter = (e) => {
      let t = e == null ? void 0 : e.currentTarget;
      if (!t) return;
      let i = n.utils.selector(t);
      n.to(i("circle"), { attr: { r: 42 }, duration: 0.4, ease: "expo.out" });
    };
    this.onLeave = (e) => {
      let t = e == null ? void 0 : e.currentTarget;
      if (!t) return;
      let i = n.utils.selector(t);
      n.to(i("circle"), { attr: { r: 36 }, duration: 0.7, ease: "expo.out" });
    };
    this.onClick = (e) => {
      this.opened
        ? e.target &&
          e.target.dataset.close === "true" &&
          (this.animateOut(),
          document.removeEventListener("keydown", this.onKeydown))
        : (document.addEventListener("keydown", this.onKeydown),
          this.player && this.player.playVideo(),
          (this.opened = !0),
          this.animateIn(),
          this.player
            ? (this.player.seekTo(0, !0), this.player.playVideo())
            : this.videoId && this.playerContainer && this.initPlayer());
    };
    this.clearTimeline = () => {};
    this.animateIn = () => {
      var e, t, i;
      (e = this.playButton) == null || e.setAttribute("hidden", ""),
        (document.documentElement.style.overflow = "hidden"),
        (t = this.modal) == null || t.removeAttribute("aria-hidden"),
        (i = this.modal) == null ||
          i.addEventListener("focusout", this.focusOut),
        n
          .timeline({
            onComplete: () => {
              var s;
              return (s = this.card) == null ? void 0 : s.focus();
            },
          })
          .set(this, { zIndex: 5 })
          .to(this.modal, { autoAlpha: 1, duration: 0.4 }, 0)
          .fromTo(
            this.modalContent,
            { y: 50 },
            { y: 0, duration: 1, ease: "expo.out" },
            0
          );
    };
    this.focusOut = (e) => {
      e.relatedTarget && this.animateOut();
    };
    this.animateOut = () => {
      var e;
      (this.opened = !1),
        (document.documentElement.style.overflow = ""),
        (e = this.playButton) == null || e.removeAttribute("hidden"),
        this.player && this.player.pauseVideo(),
        n
          .timeline({
            onComplete: () => {
              var t, i;
              (t = this.modal) == null || t.setAttribute("aria-hidden", "true"),
                (i = this.modal) == null ||
                  i.removeEventListener("focusout", this.focusOut);
            },
          })
          .set(this, { zIndex: 2 })
          .to(this.modal, { autoAlpha: 0, duration: 0.4 }, 0)
          .to(this.modalContent, { y: 50, duration: 1, ease: "expo.out" }, 0);
    };
    (this.card = null),
      (this.modal = null),
      (this.modalContent = null),
      (this.backdrop = null),
      (this.close = null),
      (this.playButton = null),
      (this.videoId = void 0),
      (this.playerContainer = null),
      (this.player = null),
      (this.opened = !1);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      (this.card = this.querySelector(".floating-card")),
      (this.modal = this.querySelector("[data-modal]")),
      (this.modalContent = this.querySelector("[data-content]")),
      (this.backdrop = this.querySelector("[data-backdrop]")),
      (this.close = this.querySelector("[data-close]")),
      (this.playButton = this.querySelector(".play-button")),
      (this.videoId = this.dataset.videoid),
      (this.playerContainer = this.querySelector("[data-player]")),
      this.addEvents(),
      this.handleResize();
    let e = this.querySelector(".fallback-button");
    (this.playButton || e) &&
      ((t = this.playButton) == null || t.removeAttribute("aria-hidden"),
      e == null || e.setAttribute("aria-hidden", "true"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEvents(), this.clearTimeline();
  }
};
var Y = class extends HTMLElement {
  constructor() {
    super();
    this.handleResize = () => {
      if (
        this.screenManger.innerWidth >= 700 ||
        !this.sibling ||
        !this.wrapper
      ) {
        this.style.setProperty("width", "0px");
        return;
      }
      let e = this.sibling.getBoundingClientRect(),
        i = this.wrapper.getBoundingClientRect().width / 2 - 66 - e.width / 2;
      this.style.setProperty("width", `${i}px`);
    };
    let e = this.getAttribute("data-sibling");
    (this.screenManger = k.instance),
      (this.sibling = document.getElementById(`navigation_item-${e}`)),
      (this.wrapper = document.getElementById("navigation_link_wrapper")),
      this.screenManger.subscribe(this.handleResize);
  }
  disconnectedCallback() {
    this.screenManger.unsubscribe(this.handleResize);
  }
};
var j = class extends HTMLElement {
  constructor() {
    super();
    this.links = [];
    this.globalScrollManager = ue.instance;
    this.navigation = null;
    this.screenManager = k.instance;
    this.intersectionRatio = 0;
    this.sectionId = null;
    this.selectedIndex = -1;
    this.sections = [];
    this.disableScrollDetection = !1;
    this.disableMobileScrollStopDetection = !1;
    this.disableResizeScrollDetection = !1;
    this.isHumanScroll = !1;
    this.previousWidth = 0;
    this.addEvents = () => {
      document.addEventListener("scroll", this.handleScroll);
      for (let [e, t] of this.links.entries())
        (this.links[e].clickCallback = this.handleClickLinkBuilder(e)),
          this.links[e].clickCallback !== void 0 &&
            t.element.addEventListener("click", this.links[e].clickCallback);
    };
    this.removeEvents = () => {
      document.removeEventListener("scroll", this.handleScroll);
      for (let e of this.links)
        e.element.classList !== void 0 &&
          e.element.removeEventListener("click", e.clickCallback);
    };
    this.handleScroll = () => {
      this.navigation &&
        (this.globalScrollManager.scrollDirection > 0
          ? (this.navigation.classList.remove("scroll-down"),
            this.navigation.classList.add("scroll-up"))
          : (this.navigation.classList.add("scroll-down"),
            this.navigation.classList.remove("scroll-up")));
    };
    this.handleIntersectSection = (e) => {
      if (!this.disableScrollDetection)
        for (let t of e) {
          let i = t.target.getAttribute("data-section");
          t.isIntersecting &&
            t.intersectionRatio > 0 &&
            (t.intersectionRatio > this.intersectionRatio &&
            i !== this.sectionId
              ? ((this.intersectionRatio = t.intersectionRatio),
                (this.sectionId = i),
                (this.disableMobileScrollStopDetection = !0),
                this.sectionId && this.updateNavFromSection(this.sectionId))
              : i === this.sectionId &&
                (this.intersectionRatio = t.intersectionRatio));
        }
    };
    this.updateNavFromSection = (e) => {
      let t = this.links.findIndex((s) => s.id === e),
        i = this.links[t];
      !i ||
        (i.id && history.pushState({}, "", `#${i.id}`),
        this.unselectAllLinks(this.links),
        this.selectLink(i),
        this.screenManager.innerWidth > T.MOBILE
          ? this.moveIndicatorOnDesktop(t)
          : ((this.disableMobileScrollStopDetection = this.isHumanScroll),
            this.updateMobileIndicator(i)));
    };
    this.loadAllSection = () => {
      let e = [];
      for (let t of this.links) {
        let i = document.querySelector(`[data-section="${t.id}"]`);
        i && e.push({ element: i, id: t.id });
      }
      return e;
    };
    this.getSectionById = (e) => this.sections.find((i) => e === i.id) || null;
    this.loadAllNavigableSections = () => {
      let e = Array.from(document.querySelectorAll("[data-section]")),
        t = new IntersectionObserver(this.handleIntersectSection, {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        });
      for (let i of e) t.observe(i);
    };
    this.loadAllLinks = (e) => {
      let t = [],
        i = Array.from(e.querySelectorAll(".navigation_link"));
      for (let s of i) {
        let r = s.getAttribute("data-navigation-id");
        r && t.push({ element: s, id: r, bounding: s.getBoundingClientRect() });
      }
      return t;
    };
    this.updateLinksBounding = (e) =>
      e.map((t) => {
        var s, r;
        let i = t.element.getBoundingClientRect();
        return {
          element: t.element,
          id: t.id,
          bounding: {
            top: i.top,
            bottom: i.top,
            width: i.width,
            height: i.height,
            left:
              i.left +
              (((s = this.wrapper) == null ? void 0 : s.scrollLeft) || 0),
            right:
              i.right +
              (((r = this.wrapper) == null ? void 0 : r.scrollLeft) || 0),
          },
        };
      });
    this.handleResize = () => {
      var t, i;
      let e = this.previousWidth;
      if (
        ((this.previousWidth = this.screenManager.innerWidth),
        e !== this.screenManager.innerWidth)
      ) {
        if (
          ((this.disableResizeScrollDetection = !0),
          (this.links = this.updateLinksBounding(this.links)),
          (this.boundings.indicator =
            ((t = this.indicatorWrapper) == null
              ? void 0
              : t.getBoundingClientRect()) || null),
          (this.boundings.wrapper =
            ((i = this.wrapper) == null ? void 0 : i.getBoundingClientRect()) ||
            null),
          this.screenManager.innerWidth < T.MOBILE)
        ) {
          let s = this.identifySelectedLink();
          s && this.updateMobileIndicator(s);
        } else
          this.wrapper && (this.wrapper.scrollLeft = 0),
            this.selectedIndex > -1 &&
              this.moveIndicatorOnDesktop(this.selectedIndex);
        this.sectionId && this.updateNavFromSection(this.sectionId);
      }
    };
    this.updateMobileIndicator = (e) => {
      let t = this.boundings.wrapper,
        i = e.bounding;
      if (!!t) {
        if (
          (n.killTweensOf(this.wrapper),
          n.to(this.wrapper, {
            scrollTo: { x: e.element, offsetX: t.width / 2 - i.width / 2 },
            duration: 0.4,
            clearProps: !0,
          }),
          this.boundings.indicator && this.boundings.indicator.width > 0)
        ) {
          let s = e.bounding.width / this.boundings.indicator.width;
          n.killTweensOf(this.mobileIndicator),
            n.to(this.mobileIndicator, {
              scaleX: s,
              translateX: 0,
              duration: 0.3,
            });
        }
        this.selectLink(e);
      }
    };
    this.moveIndicatorOnDesktop = (e) => {
      var r, a, l;
      if (!this.boundings.indicator) return;
      let t = (r = this.links) == null ? void 0 : r[e],
        i =
          t.bounding.left -
          (((a = this.wrapper) == null ? void 0 : a.scrollLeft) || 0) -
          this.boundings.indicator.left -
          (((l = this.wrapper) == null ? void 0 : l.scrollLeft) || 0),
        s = t.bounding.width / this.boundings.indicator.width;
      n.killTweensOf(this.mobileIndicator),
        n.to(this.mobileIndicator, { translateX: i, scaleX: s, duration: 0.7 });
    };
    this.goToSection = (e) => {
      (this.disableMobileScrollStopDetection = !0),
        (this.disableScrollDetection = !0),
        (this.intersectionRatio = 0),
        (this.isHumanScroll = !1),
        e.id && history.pushState({}, "", `#${e.id}`),
        n.to(window, {
          duration: 0.7,
          scrollTo: e.element,
          onComplete: () => {
            this.disableDetectionTimout &&
              clearTimeout(this.disableDetectionTimout),
              (this.disableDetectionTimout = setTimeout(() => {
                (this.disableScrollDetection = !1),
                  (this.disableMobileScrollStopDetection = !1);
              }, 300));
          },
        });
    };
    this.handleClickLinkBuilder = (e) => (t) => {
      var s;
      t.preventDefault(), (this.disableResizeScrollDetection = !1);
      let i = (s = this.links) == null ? void 0 : s[e];
      if (
        (n.killTweensOf([this.wrapper, window, this.mobileIndicator]),
        clearTimeout(this.disableDetectionTimout),
        (this.disableScrollDetection = !0),
        this.screenManager.innerWidth < T.MOBILE)
      ) {
        let r = this.getSectionById(i == null ? void 0 : i.id);
        r && this.goToSection(r),
          (this.disableMobileScrollStopDetection = !0),
          this.updateMobileIndicator(i);
      } else {
        (this.selectedIndex = e),
          this.unselectAllLinks(this.links),
          this.selectLink(i),
          this.moveIndicatorOnDesktop(e);
        let r = this.getSectionById(i == null ? void 0 : i.id);
        r && this.goToSection(r);
      }
    };
    this.identifySelectedLink = () => {
      var e;
      for (let [t, i] of this.links.entries()) {
        let s = this.screenManager.innerWidth / 2,
          r =
            i.bounding.left -
            (((e = this.wrapper) == null ? void 0 : e.scrollLeft) || 0),
          a = r + i.bounding.width;
        if (r < s && a > s) return (this.selectedIndex = t), i;
      }
      return !1;
    };
    this.unselectAllLinks = (e) => {
      for (let t of e)
        t.element.classList.remove("navigation_selected"), t.element.blur();
    };
    this.selectLink = (e) => {
      this.unselectAllLinks(this.links),
        e.element.classList.add("navigation_selected");
    };
    (this.wrapper = this.querySelector("#navigation_link_wrapper")),
      this.wrapper && (this.links = this.loadAllLinks(this.wrapper)),
      (this.sections = this.loadAllSection()),
      (this.indicatorWrapper = this.querySelector("#indicator_wrapper")),
      (this.mobileIndicator = this.querySelector("#mobile_indicator")),
      (this.boundings = { indicator: null, wrapper: null }),
      (this.navigation = this.parentElement || null),
      this.handleResize(),
      this.loadAllNavigableSections(),
      this.screenManager.subscribe(this.handleResize),
      this.addEvents();
  }
  disconnectedCallback() {
    this.removeEvents(), this.countdown && clearTimeout(this.countdown);
  }
};
var U = class extends p {
  constructor() {
    super();
    this.onKeydownChapter = (e) => {
      (e.key === "Enter" || e.key === "Space") && this.chapterListener(e);
    };
    this.checkChapter = (e) => {
      if (!this.chapters) return;
      let i = this.chapters.filter((s) => s.time <= e).pop();
      i &&
        this.activeChapterTime !== i.time &&
        (this.chapters.forEach((s) => {
          s.el.removeAttribute("aria-current");
        }),
        setTimeout(() => {
          this.chapters &&
            this.chapters.forEach((s) => {
              s.buttonAsset.classList.remove("visible");
            }),
            i.buttonAsset.classList.add("visible");
        }, 400),
        i.el.setAttribute("aria-current", "step"),
        this.scrollToFocus(i.el),
        (this.activeChapterTime = i.time));
    };
    this.chapterListener = (e) => {
      var s;
      let t = e.target.closest(".chapter");
      if (!this.player) return;
      let i = (s = e.target) == null ? void 0 : s.dataset.start;
      this.player.seekTo(Number(i), !0),
        this.buttons &&
          this.buttons.forEach((r) => {
            r.removeAttribute("aria-current");
          }),
        t.setAttribute("aria-current", "step"),
        this.scrollToFocus(t),
        (this.player.getPlayerState() === -1 ||
          this.player.getPlayerState() === 5 ||
          this.player.getPlayerState() === 0 ||
          this.player.getPlayerState() === 2) &&
          this.startPlaying();
    };
    this.scrollToFocus = (e) => {
      let t = this.querySelector(".video-chapters__chapters"),
        { left: i, right: s } = e.getBoundingClientRect(),
        r = window.innerWidth;
      (s > r || i < 0) &&
        (t == null ||
          t.scrollTo({
            left:
              i < 0 && r > 1496
                ? e.offsetLeft - 1496 / 12 - (r - 1496) / 2
                : e.offsetLeft - r / 12,
            behavior: "smooth",
          }));
    };
    this.stateChange = ({ data: e, target: t }) => {
      var i, s, r;
      e === 1
        ? (this.timeoutPause && clearTimeout(this.timeoutPause),
          this.checkChapter(t.getCurrentTime()),
          (this.intervalChapter = setInterval(() => {
            this.checkChapter(t.getCurrentTime());
          }, 1e3)))
        : e === 0
        ? ((i = this.playButton) == null || i.removeAttribute("aria-hidden"),
          (s = this.playerWrapper) == null || s.classList.remove("--playing"),
          this.checkChapter(0),
          (r = this.player) == null || r.seekTo(0, !0),
          this.buttons && this.scrollToFocus(this.buttons[0]))
        : e === 2
        ? (this.timeoutPause && clearTimeout(this.timeoutPause),
          (this.timeoutPause = setTimeout(() => {
            var a, l;
            (a = this.playButton) == null || a.removeAttribute("aria-hidden"),
              (l = this.playerWrapper) == null ||
                l.classList.remove("--playing");
          }, 600)))
        : (this.timeoutPause && clearTimeout(this.timeoutPause),
          this.intervalChapter && clearInterval(this.intervalChapter));
    };
    this.playerReady = () => {
      var t;
      if (!this.playerID) return;
      this.buttons &&
        ((t = this.buttons[0]) == null ||
          t.setAttribute("aria-current", "chapter"));
      let e = this.querySelector(".video-chapters__player");
      (this.playerWrapper = e),
        this.addEvents(),
        (this.player = new YT.Player(this.playerID, {
          videoId: this.videoId,
          playerVars: { rel: 0 },
          events: { onStateChange: this.stateChange },
        }));
    };
    this.playButtonClick = () => {
      var e;
      !this.player ||
        (this.player.getPlayerState() === 5 ||
        this.player.getPlayerState() === 0 ||
        this.player.getPlayerState() === 2
          ? this.startPlaying()
          : ((e = this.playButton) == null || e.removeAttribute("aria-hidden"),
            this.stopPlaying()));
    };
    this.startPlaying = () => {
      var t, i, s;
      (t = this.player) == null || t.playVideo(),
        (i = this.playerWrapper) == null || i.focus(),
        (s = this.playerWrapper) == null || s.classList.add("--playing");
      let e = document.querySelector(".floatingcards");
      e && e.addEventListener("click", this.onOtherSectionClick);
    };
    this.onOtherSectionClick = () => {
      let e = document.querySelector(".floatingcards");
      e && e.removeEventListener("click", this.onOtherSectionClick),
        this.stopPlaying();
    };
    this.loseFocus = (e) => {
      e.relatedTarget && !this.contains(e.relatedTarget) && this.stopPlaying();
    };
    this.leaveViewPort = () => {
      this.player && this.player.pauseVideo();
    };
    this.stopPlaying = () => {
      var e;
      (e = this.playerWrapper) == null || e.classList.remove("--playing"),
        setTimeout(() => {
          var t;
          (t = this.player) == null || t.pauseVideo();
        }, 500);
    };
    this.initPlayer = () => {
      window.addEventListener("youtubeReadyEvent", this.playerReady);
    };
    this.addEvents = () => {
      var e, t, i;
      this.addEventListener("focusout", this.loseFocus),
        (e = this.playerWrapper) == null ||
          e.addEventListener("mouseenter", this.onEnter),
        (t = this.playerWrapper) == null ||
          t.addEventListener("mouseleave", this.onLeave),
        (i = this.playButton) == null ||
          i.addEventListener("click", this.playButtonClick);
    };
    this.removeEvents = () => {
      var e, t, i, s;
      this.removeEventListener("focusout", this.loseFocus),
        window.removeEventListener("youtubeReadyEvent", this.playerReady),
        (e = this.playerWrapper) == null ||
          e.removeEventListener("mouseenter", this.onEnter),
        (t = this.playerWrapper) == null ||
          t.removeEventListener("mouseleave", this.onLeave),
        (i = this.playButton) == null ||
          i.removeEventListener("click", this.playButtonClick),
        (s = this.buttons) == null ||
          s.forEach((r) => {
            r.removeEventListener("click", this.chapterListener),
              r.removeEventListener("keydown", this.onKeydownChapter);
          });
    };
    this.onEnter = (e) => {
      let t = e == null ? void 0 : e.currentTarget;
      if (!t) return;
      let i = n.utils.selector(t);
      n.to(i("circle"), { attr: { r: 42 }, duration: 0.4, ease: "expo.out" });
    };
    this.onLeave = (e) => {
      let t = e == null ? void 0 : e.currentTarget;
      if (!t) return;
      let i = n.utils.selector(t);
      n.to(i("circle"), { attr: { r: 36 }, duration: 0.7, ease: "expo.out" });
    };
    [
      "onKeydownChapter",
      "checkChapter",
      "chapterListener",
      "scrollToFocus",
      "stateChange",
      "playButtonClick",
    ].forEach((e) => {
      this[e] = this[e].bind(this);
    }),
      (this.playerID = this.dataset.playerid),
      (this.videoId = this.dataset.videoid),
      (this.playButton = null),
      (this.buttons = null),
      (this.chapters = []),
      (this.activeChapterTime = 0),
      (this.intervalChapter = null);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (this.playButton = this.querySelector(".play"));
    let e = this.querySelector(".button-fallback");
    (this.playButton || e) &&
      ((t = this.playButton) == null || t.removeAttribute("aria-hidden"),
      e == null || e.setAttribute("aria-hidden", "true")),
      (this.buttons = this.querySelectorAll(".chapter")),
      this.initChapters(),
      this.playerID && this.initPlayer();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEvents();
  }
  initChapters() {
    if (!this.buttons) return;
    let e = this.querySelectorAll(".button-asset");
    this.buttons.forEach((t, i) => {
      var a, l;
      let s = e[i],
        r = t.querySelector("button");
      this.chapters &&
        this.chapters.push({
          el: t,
          button: r,
          buttonAsset: s,
          time:
            ((a = r == null ? void 0 : r.dataset) == null ? void 0 : a.start) &&
            parseFloat(
              (l = r == null ? void 0 : r.dataset) == null ? void 0 : l.start
            ),
        }),
        r == null || r.addEventListener("click", this.chapterListener),
        r == null || r.addEventListener("keydown", this.onKeydownChapter);
    });
  }
};
var Re = ae(pe());
var G = class extends p {
  constructor() {
    super({
      scrollOption: {
        vStart: "bottom",
        dStart: "top",
        vEnd: "top",
        dEnd: "bottom",
        clamp: !0,
      },
      intersectionObserver: !1,
    });
    this.reducedMotionFrame = 0;
    this.previous = 0;
    this.createLottie = () => {
      if (!this.ui.animation) return;
      let e =
        this.screenManager.innerWidth <= T.MOBILE
          ? "Braid_Mobile_002.json"
          : "Braid_Desktop_007.json";
      this.lottie = Re.default.loadAnimation({
        container: this.ui.animation,
        renderer: "svg",
        loop: !1,
        autoplay: !1,
        rendererSettings: { viewBoxOnly: !0 },
        path: `./static/lottie/${e}`,
      });
    };
    this.createTimeline = () => {
      if (!this.ui.paragraphs) return;
      let e = 2,
        t = 0.5,
        i = { frame: 0 };
      this.tl.fromTo(
        i,
        { frame: 0 },
        {
          frame: 1,
          duration: e * this.ui.paragraphs.length + 1,
          onUpdate: () => {
            this.lottie.goToAndStop(this.lottie.totalFrames * i.frame, !0);
          },
        },
        0
      );
      let s = this.ui.paragraphs.length - 1;
      this.ui.paragraphs.forEach((r, a) => {
        let l = a * e + t;
        this.tl.addLabel(`tl:word:${a}`, l),
          this.tl.fromTo(
            r,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.2, ease: "none" },
            `tl:word:${a}`
          ),
          a < s &&
            this.tl.to(
              r,
              { autoAlpha: 0, duration: 0.2, ease: "none" },
              `tl:word:${a}+=${e - t}`
            );
      }),
        this.tl.to({ v: 0 }, { v: 1, duration: 1, ease: "none" });
    };
    this.tick = () => {
      if (!this.tl || !this.scrollManager) return;
      let e = this.scrollManager.scrollProgression,
        t = P(this.previous, e, 0.05);
      this.tl.progress(t), (this.previous = t);
    };
    (this.tl = n.timeline({ paused: !0 })),
      (this.prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches),
      (this.ui = { sticky: null, animation: null, paragraphs: null });
  }
  connectedCallback() {
    super.connectedCallback(),
      (this.ui.sticky = this.querySelector(".js-sticky")),
      (this.ui.animation = this.querySelector(".js-animation")),
      (this.ui.paragraphs = this.querySelectorAll(".js-paragraph")),
      this.createLottie(),
      this.createTimeline();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.lottie && this.lottie.destroy();
  }
};
var qe = ae(pe());
var K = class extends p {
  constructor() {
    super();
    this.reducedMotionFrame = 0;
    this.previous = 0;
    this.createLottie = () => {
      !this.ui.animation ||
        (this.lottie = qe.default.loadAnimation({
          container: this.ui.animation,
          renderer: "svg",
          loop: !1,
          autoplay: !1,
          rendererSettings: { viewBoxOnly: !0 },
          path: "./static/lottie/StartBuilding_001.json",
        }));
    };
    this.createTimeline = () => {
      let e = { frame: 0 };
      this.tl.fromTo(
        e,
        { frame: 0 },
        {
          frame: 1,
          duration: 1,
          onUpdate: () => {
            this.lottie.goToAndStop(this.lottie.totalFrames * e.frame, !0);
          },
        },
        0
      );
    };
    this.handleResize = () => {
      if (!this.ui.content) return;
      let e = this.ui.content.getBoundingClientRect();
      this.style.setProperty("--offset", `${e.height * 0.5 - 25}px`);
    };
    this.tick = () => {
      if (!this.tl || !this.scrollManager) return;
      let e = this.scrollManager.scrollProgression,
        t = P(this.previous, e, 0.05);
      this.tl.progress(t), (this.previous = t);
    };
    (this.tl = n.timeline({ paused: !0 })),
      (this.prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches),
      (this.ui = { sticky: null, animation: null, content: null });
  }
  connectedCallback() {
    super.connectedCallback(),
      (this.ui.sticky = this.querySelector(".js-sticky")),
      (this.ui.animation = this.querySelector(".js-animation")),
      (this.ui.content = this.querySelector(".js-content")),
      this.createLottie(),
      this.createTimeline();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.lottie && this.lottie.destroy();
  }
};
var $ = class extends HTMLElement {
  constructor() {
    super();
    this.handleClick = () => {
      let e = this.getAttribute("data-modal"),
        t = document.querySelector(e || "");
      !t || t.open();
    };
  }
  connectedCallback() {
    this.addEventListener("click", this.handleClick);
    let e = this.querySelector(".play-button-wrapper"),
      t = this.querySelector(".button-fallback");
    (e || t) &&
      (e == null || e.removeAttribute("aria-hidden"),
      t == null || t.setAttribute("aria-hidden", "true"));
  }
};
var X = class extends HTMLElement {
  constructor() {
    super();
    this.closeButtons = [];
    this.background = null;
    this.modal = null;
    this.player = null;
    this.preventClickAsset = !1;
    this.currentVisibleAsset = 0;
    this.isOpened = !1;
    this.addEvents = () => {
      var e;
      (e = this.background) == null || e.addEventListener("click", this.close),
        this.closeButtons.forEach((t) => {
          t.addEventListener("click", this.close);
        }),
        document.addEventListener("keydown", this.onKeydown),
        !this.videoId &&
          this.imageContainer &&
          this.imageContainer.addEventListener(
            "click",
            this.handleClickAssetContainer
          );
    };
    this.removeEvents = () => {
      var e;
      (e = this.background) == null ||
        e.removeEventListener("click", this.close),
        this.closeButtons.forEach((t) => {
          t.removeEventListener("click", this.close);
        }),
        document.removeEventListener("keydown", this.onKeydown),
        !this.videoId &&
          this.imageContainer &&
          this.imageContainer.removeEventListener(
            "click",
            this.handleClickAssetContainer
          );
    };
    this.onKeydown = (e) => {
      e.key === "Escape" && this.close();
    };
    this.setPoster = () => {
      this.classList.add("no-video-id");
    };
    this.initPlayer = () => {
      if (!this.videoContainer || !this.videoId) {
        this.setPoster();
        return;
      }
      this.player = new YT.Player(this.videoContainer, {
        videoId: this.videoId,
        playerVars: { rel: 0 },
        events: {
          onReady: () => {
            var e;
            this.isOpened && ((e = this.player) == null || e.playVideo());
          },
        },
      });
    };
    this.playNextCardAnimation = async () => {
      if (!this.imageContainer || this.imageContainer.children.length < 2) {
        this.preventClickAsset = !1;
        return;
      }
      let e = Array.from(this.imageContainer.children);
      e.forEach((t) => {
        t.classList.remove("visible");
      }),
        (this.currentVisibleAsset =
          this.currentVisibleAsset + 1 < e.length
            ? this.currentVisibleAsset + 1
            : 0),
        e[this.currentVisibleAsset].classList.add("visible"),
        (this.preventClickAsset = !1);
    };
    this.handleClickAssetContainer = () => {
      this.preventClickAsset ||
        ((this.preventClickAsset = !0), this.playNextCardAnimation().then());
    };
    this.open = () => {
      var t;
      if (
        (this.style.setProperty("display", "block"),
        document.documentElement.style.setProperty("overflow", "hidden"),
        (this.isOpened = !0),
        this.imageContainer)
      )
        for (let i of Array.from(this.imageContainer.children))
          i.classList.add("fade-in"),
            setTimeout(() => {
              i.classList.remove("fade-in");
            }, 1e3);
      (t = this.closeButtons[0]) == null || t.focus(),
        this.modal && this.modal.addEventListener("focusout", this.focusChange),
        n
          .timeline({
            onComplete: () => {
              var i, s;
              this.player
                ? ((i = this.player) == null || i.seekTo(0, !0),
                  (s = this.player) == null || s.playVideo())
                : this.initPlayer();
            },
          })
          .set(this, { opacity: 1 })
          .fromTo(
            this.background,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power3.out" },
            0
          )
          .fromTo(
            this.modal,
            { translateY: "50%" },
            { translateY: 0, duration: 1, ease: "power3.out" },
            0
          )
          .fromTo(
            this.modal,
            { opacity: 0 },
            { opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" },
            0
          );
    };
    this.focusChange = (e) => {
      var t;
      e.relatedTarget &&
        !((t = this.modal) == null ? void 0 : t.contains(e.relatedTarget)) &&
        this.close();
    };
    this.close = () => {
      var t;
      (this.isOpened = !1),
        this.player && ((t = this.player) == null || t.pauseVideo()),
        n
          .timeline({
            onComplete: () => {
              var i, s;
              this.style.setProperty("display", "none"),
                document.documentElement.style.removeProperty("overflow"),
                (i = this.modal) == null ||
                  i.removeEventListener("focusout", this.focusChange),
                (s = document.querySelector(".video-blocks__list__wrapper")) ==
                  null || s.focus();
            },
          })
          .fromTo(
            this,
            { opacity: 1 },
            { opacity: 0, duration: 0.3, ease: "power3.out" }
          );
    };
    (this.closeButtons = []),
      (this.background = null),
      (this.modal = null),
      (this.videoId = null),
      (this.videoContainer = null),
      (this.imageContainer = null),
      (this.isOpened = !1);
  }
  connectedCallback() {
    (this.closeButtons = this.querySelectorAll(
      ".video-block-modal__close-button"
    )),
      (this.background = this.querySelector(
        ".video-block-modal__blurry-background"
      )),
      (this.modal = this.querySelector(".video-block-modal")),
      (this.videoId = this.getAttribute("data-video-id")),
      (this.videoContainer = this.querySelector("[data-video-container]")),
      (this.imageContainer = this.querySelector(
        ".video-block-modal__assets-container"
      )),
      this.addEvents();
  }
  disconnectedCallback() {
    this.removeEvents();
  }
  disconnectCallback() {
    var e, t;
    document.addEventListener("keydown", this.onKeydown),
      this.closeButtons.forEach((i) => {
        i.removeEventListener("click", this.close);
      }),
      (e = this.background) == null ||
        e.removeEventListener("click", this.close),
      (t = this.imageContainer) == null ||
        t.removeEventListener("click", this.handleClickAssetContainer);
  }
};
var J = class extends HTMLElement {
  constructor() {
    super();
    this.desktopMax = 6;
    this.mobileMax = 3;
    this.max = this.desktopMax;
    this.previousWidth = 0;
    this.currentVisible = this.desktopMax;
    this.onResize = () => {
      this.previousWidth !== window.innerWidth &&
        ((this.max = this.currentVisible =
          window.innerWidth >= T.MOBILE ? this.desktopMax : this.mobileMax),
        this.hideExtraItems(),
        this.allBlocks.length > this.currentVisible && this.hideButton(!0)),
        (this.previousWidth = window.innerWidth);
    };
    this.loadCards = () => {
      if (this.allBlocks.length > this.currentVisible) {
        (this.currentVisible += this.max),
          this.allBlocks.forEach((t, i) => {
            i + 1 <= this.currentVisible &&
              (t.removeAttribute("aria-hidden"), (t.style.display = "flex"));
          });
        let e = this.querySelectorAll(".video-blocks__item[aria-hidden]");
        this.currentVisible >= this.allBlocks.length - e.length &&
          this.hideButton();
      } else this.hideButton();
    };
    (this.loadMoreButton = this.querySelector("[data-load]")),
      (this.allBlocks = this.querySelectorAll(".video-blocks__item")),
      this.loadMoreButton &&
        this.loadMoreButton.addEventListener("click", this.loadCards),
      this.init(),
      window.addEventListener("resize", this.onResize);
  }
  init() {
    this.loadMoreButton &&
      (this.allBlocks.length > this.max
        ? this.hideExtraItems()
        : this.hideButton());
  }
  hideButton(e = !1) {
    this.loadMoreButton &&
      (e
        ? ((this.loadMoreButton.style.display = "flex"),
          (this.loadMoreButton.style.visibility = "visible"),
          this.loadMoreButton.removeAttribute("aria-hidden"))
        : ((this.loadMoreButton.style.display = "none"),
          (this.loadMoreButton.style.visibility = "hidden"),
          this.loadMoreButton.setAttribute("aria-hidden", "true")));
  }
  hideExtraItems() {
    this.allBlocks.forEach(
      (e, t) => (
        t + 1 > this.max &&
          (e.setAttribute("aria-hidden", "true"), (e.style.display = "none")),
        e
      )
    );
  }
};
var Q = class extends HTMLElement {
  constructor() {
    super();
    this.checkOnVideoBlock = () => {
      let e = document.querySelector(".video-blocks__list__wrapper");
      e && this.resizeObserver.observe(e);
    };
    this.handleVideoBlockResize = () => {
      this.handleResize();
    };
    this.handleResize = () => {
      var a;
      let e = this.getBoundingClientRect(),
        t = (a = this.stopSection) == null ? void 0 : a.getBoundingClientRect(),
        i = document.body.getBoundingClientRect(),
        s = e.top + scrollY,
        r = t ? t.top + scrollY - s : i.height - s;
      this.style.setProperty("height", `${Math.round(r)}px`);
    };
    let e = this.getAttribute("data-stop-section-id");
    (this.resizeObserver = new ResizeObserver(this.handleVideoBlockResize)),
      (this.stopSection = e ? document.querySelector(e) : null),
      (this.screenManager = k.instance),
      this.screenManager.subscribe(this.handleResize),
      this.checkOnVideoBlock();
  }
  connectedCallback() {
    this.handleResize();
  }
  disconnectedCallback() {
    this.screenManager.unsubscribe(this.handleResize),
      this.resizeObserver.disconnect();
  }
};
var He = 100,
  _e = 0.1,
  Z = class extends HTMLElement {
    constructor() {
      super();
      this.screenManager = k.instance;
      this.onIntersect = (e) => {
        (e == null ? void 0 : e[0].isIntersecting)
          ? n.ticker.add(this.onUpdate)
          : n.ticker.remove(this.onUpdate);
      };
      this.onUpdate = () => {
        let { normalizedX: e, normalizedY: t } = this.screenManager.mouse;
        (this.vars.x += (He * e - this.vars.x) * _e),
          (this.vars.y += (He * t - this.vars.y) * _e),
          this.quickSetters.x(this.vars.x),
          this.quickSetters.y(this.vars.y);
      };
      (this.observer = null),
        (this.vars = { x: 0, y: 0 }),
        (this.quickSetters = {
          x: n.quickSetter(this, "x", "px"),
          y: n.quickSetter(this, "y", "px"),
        });
    }
    connectedCallback() {
      var e;
      (this.observer = new IntersectionObserver(this.onIntersect)),
        (e = this.observer) == null || e.observe(this);
    }
    disconnectedCallback() {
      var e;
      (e = this.observer) == null || e.disconnect(),
        n.ticker.remove(this.onUpdate);
    }
  };
var We = 10,
  ee = class extends HTMLElement {
    constructor() {
      super();
      this.createSlider = () => {
        this.onUpdate(0);
      };
      this.onIntersect = (e) => {
        this.vars.index !== null &&
          ((e == null ? void 0 : e[0].isIntersecting)
            ? ((this.hasIntersected = !0), this.onAutoplay(!0))
            : this.onAutoplay(!1));
      };
      this.onAutoplay = (e) => {
        e
          ? ((this.hasAutoplay = !0), this.onStart())
          : ((this.hasAutoplay = !1),
            this.delay && this.delay.kill(),
            this.progress && this.progress.progress(0).kill());
      };
      this.onStart = () => {
        let { index: e } = this.vars;
        if (e === null || !this.ui.dots) return;
        this.delay = n.delayedCall(We, () => {
          if (!this.ui.dots) return;
          let i = n.utils.wrap(0, this.ui.dots.length);
          this.onUpdate(i(e + 1));
        });
        let t = this.ui.dots[e];
        this.progress = n.to(t, {
          "--progress": 1,
          duration: We,
          ease: "none",
        });
      };
      this.onUpdate = (e) => {
        if (
          (this.delay && this.delay.kill(),
          this.progress && this.progress.kill(),
          e === this.vars.index || !this.ui.slides || !this.ui.dots)
        )
          return;
        (this.vars.animating = !0),
          (this.vars.previous = this.vars.index),
          (this.vars.index = e);
        let t = n.utils.selector(this.ui.slides[this.vars.index]),
          i = n.timeline({ paused: !0 });
        i.add(() => {
          this.vars.animating = !1;
        }, 1),
          this.hasAutoplay && this.onStart();
        let s = this.ui.dots[this.vars.index];
        s && s.classList.add("current"),
          this.vars.previous !== null &&
            (n.killTweensOf(this.ui.slides[this.vars.previous]),
            i.set(this.ui.slides[this.vars.previous], { zIndex: 1 }, 0)),
          n.killTweensOf(this.ui.slides[this.vars.index]),
          i.set(
            this.ui.slides[this.vars.index],
            { autoAlpha: 1, zIndex: 2 },
            0
          );
        let r = t(".js-word");
        (r == null ? void 0 : r.length) &&
          (n.killTweensOf(r),
          i.fromTo(
            r,
            { autoAlpha: 0 },
            { autoAlpha: 1, stagger: 0.05, duration: 0.4, ease: "none" },
            0.65
          ),
          i.fromTo(
            r,
            { y: 20 },
            { y: 0, stagger: 0.05, duration: 0.6, ease: "expo.out" },
            0.65
          ));
        let a = t(".js-image"),
          l = t(".js-video");
        (a == null ? void 0 : a.length)
          ? (i.fromTo(
              a,
              { scale: 1.3 },
              { scale: 1, duration: 1.2, ease: "expo.out" },
              0
            ),
            i.fromTo(
              a,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.4, ease: "none" },
              0
            ))
          : (l == null ? void 0 : l.length) &&
            (i.add(() => {
              typeof HTMLVideoElement != "undefined" &&
                l[0] instanceof HTMLVideoElement &&
                l[0].play();
            }, 0),
            i.fromTo(
              l,
              { scale: 1.3 },
              { scale: 1, duration: 1.2, ease: "expo.out" },
              0
            ),
            i.fromTo(
              l,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.4, ease: "none" },
              0
            ));
        let m = t(".js-blur"),
          f = t(".js-blur-alpha");
        (m == null ? void 0 : m.length) &&
          (f == null ? void 0 : f.length) &&
          (n.killTweensOf(m),
          n.killTweensOf(f),
          i
            .fromTo(
              m,
              { autoAlpha: 0, scale: 0.6 },
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.25,
                ease: "expo.out",
              },
              0.95
            )
            .fromTo(
              f,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.4, stagger: 0.25, ease: "expo.out" },
              1.25
            ));
        let y = t(".js-output-alpha");
        n.killTweensOf(y),
          i.fromTo(
            y,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.4, ease: "none" },
            1
          );
        let c = t(".js-stagger");
        (c == null ? void 0 : c.length) &&
          (n.killTweensOf(c),
          i.fromTo(
            c,
            { y: 15, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "expo.out",
            },
            1
          ));
        let d = t(".js-box-scale"),
          h = t(".js-box-scale-inner");
        if (
          ((d == null ? void 0 : d.length) &&
            (h == null ? void 0 : h.length) &&
            (n.killTweensOf([d, h]),
            i
              .fromTo(
                d,
                { scale: 0.8, y: 10 },
                { scale: 1, y: 0, duration: 1.5, ease: "expo.out" },
                1
              )
              .fromTo(
                h,
                { scale: 1.2 },
                { scale: 1, duration: 1.5, ease: "expo.out" },
                1
              )),
          this.vars.previous !== null)
        ) {
          let b = n.utils.selector(this.ui.slides[this.vars.previous]),
            E = this.ui.dots[this.vars.previous];
          E.classList.remove("current"),
            n.killTweensOf(E),
            i.set(E, { "--progress": 0 }, 0);
          let g = b(".js-blur");
          (g == null ? void 0 : g.length) &&
            (n.killTweensOf(g),
            i.to(g, { autoAlpha: 0, duration: 0.3, ease: "none" }, 0));
          let u = b(".js-word");
          (u == null ? void 0 : u.length) &&
            (n.killTweensOf(u),
            i.to(
              u,
              { autoAlpha: 0, stagger: 0.03, duration: 0.4, ease: "none" },
              0
            ),
            i.to(
              u,
              { y: -10, stagger: 0.03, duration: 0.7, ease: "expo.inOut" },
              0
            ));
          let M = b(".js-output-alpha");
          n.killTweensOf(M),
            i.to(M, { autoAlpha: 0, duration: 0.4, ease: "none" }, 0),
            i.set(this.ui.slides[this.vars.previous], { autoAlpha: 0 });
        }
        this.prefersReducedMotion ? i.progress(1) : i.restart();
      };
      this.addEvents = () => {
        var e;
        !this.ui.dots ||
          !this.ui.arrows ||
          (this.ui.dots.forEach((t) => {
            t.addEventListener("click", this.onClick);
          }),
          this.ui.arrows.forEach((t) => {
            t.addEventListener("mouseenter", this.onEnter),
              t.addEventListener("mouseleave", this.onLeave),
              t.addEventListener("click", this.onArrowClick);
          }),
          (e = this == null ? void 0 : this.observer) == null ||
            e.observe(this));
      };
      this.removeEvents = () => {
        var e;
        !this.ui.dots ||
          !this.ui.arrows ||
          (this.ui.dots.forEach((t) => {
            t.removeEventListener("click", this.onClick);
          }),
          this.ui.arrows.forEach((t) => {
            t.removeEventListener("mouseenter", this.onEnter),
              t.removeEventListener("mouseleave", this.onLeave),
              t.removeEventListener("click", this.onArrowClick);
          }),
          (e = this == null ? void 0 : this.observer) == null ||
            e.disconnect());
      };
      this.onEnter = (e) => {
        let t = e == null ? void 0 : e.currentTarget;
        if (!t) return;
        let i = n.utils.selector(t);
        n.to(i("circle"), { attr: { r: 23 }, duration: 0.4, ease: "expo.out" });
      };
      this.onLeave = (e) => {
        let t = e == null ? void 0 : e.currentTarget;
        if (!t) return;
        let i = n.utils.selector(t);
        n.to(i("circle"), { attr: { r: 21 }, duration: 0.7, ease: "expo.out" });
      };
      this.onArrowClick = (e) => {
        if (this.vars.animating || this.vars.index === null || !this.ui.dots)
          return;
        let t = e == null ? void 0 : e.currentTarget;
        if (!!t && t instanceof Element) {
          let i = t.getAttribute("data-direction"),
            s = n.utils.wrap(0, this.ui.dots.length),
            r = s(i === "next" ? this.vars.index + 1 : this.vars.index - 1);
          (this.hasInteracted = !0), this.onUpdate(Number(r));
        }
      };
      this.onClick = (e) => {
        if (this.vars.animating) return;
        let t = e == null ? void 0 : e.currentTarget;
        if (!!t && t instanceof Element) {
          let i = t.getAttribute("data-index");
          if (i === this.vars.index) return;
          (this.hasInteracted = !0), this.onUpdate(Number(i));
        }
      };
      (this.tl = n.timeline({ paused: !0 })),
        (this.delay = null),
        (this.progress = null),
        (this.observer = new IntersectionObserver(this.onIntersect)),
        (this.hasInteracted = !1),
        (this.hasIntersected = !1),
        (this.hasAutoplay = !1),
        (this.prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches),
        (this.ui = { sticky: null, slides: null, dots: null, arrows: null }),
        (this.vars = { index: null, previous: null, animating: !1 });
    }
    connectedCallback() {
      (this.ui.sticky = this.querySelector(".js-sticky")),
        (this.ui.slides = this.querySelectorAll(".js-slide")),
        (this.ui.dots = this.querySelectorAll(".js-dot")),
        (this.ui.arrows = this.querySelectorAll(".js-arrow")),
        this.addEvents(),
        this.createSlider();
    }
    disconnectedCallback() {
      this.removeEvents();
    }
  };
var te = class extends HTMLElement {
  constructor() {
    super();
    this.createLoop = () => {
      let e = this.getValues();
      !e ||
        this.tl
          .fromTo(
            this.ui.lines,
            { attr: { height: (t) => e[t].height, y: (t) => e[t].y } },
            {
              duration: 0.4,
              stagger: 0.02,
              ease: "none",
              attr: {
                height: (t) => e[t].heightReverse,
                y: (t) => e[t].yReverse,
              },
            },
            1
          )
          .to(this.ui.lines, {
            duration: 0.4,
            stagger: 0.02,
            ease: "none",
            attr: { height: (t) => e[t].height, y: (t) => e[t].y },
          })
          .restart();
    };
    this.getValues = () => {
      if (!this.ui.lines) return;
      let e = this.ui.lines.map((t) => {
        let i = t.getAttribute("height"),
          s = t.getAttribute("y");
        return { height: i, y: s };
      });
      return e.map((t, i) => {
        let { height: s, y: r } = t,
          a = e[e.length - 1 - i].height,
          l = e[e.length - 1 - i].y;
        return {
          height: Number(s),
          heightReverse: Number(a),
          y: Number(r),
          yReverse: Number(l),
        };
      });
    };
    (this.tl = n.timeline({ paused: !0, repeat: -1 })),
      (this.ui = { speech: null, lines: null });
  }
  connectedCallback() {
    this.ui.speech = this.querySelectorAll(".js-speech");
  }
  disconnectedCallback() {
    this.tl && this.tl.kill();
  }
};
var ie = class extends HTMLElement {
  constructor() {
    super();
    this.onIntersect = (e) => {
      let t = this.animations.find(
        (i) => i.el === (e == null ? void 0 : e[0].target)
      );
      if (!!t && (e == null ? void 0 : e[0].isIntersecting)) {
        if ((t.observer.unobserve(t.el), isNaN(t.float))) return;
        let i = { value: 0 };
        n.to(i, {
          value: t.float,
          duration: 1.75,
          ease: "expo.inOut",
          onUpdate: () => {
            t.el.innerText =
              i.value.toFixed(t.toFixed) +
              (t.el.getAttribute("data-no-percent") === "true" ? "" : "%");
          },
        });
      }
    };
    (this.prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches),
      (this.tl = n.timeline({ paused: !0 })),
      (this.ui = { animate: null }),
      (this.animations = []);
  }
  connectedCallback() {
    (this.ui.animate = this.querySelectorAll(".js-animate")),
      (this.animations = Array.from(this.ui.animate).map((e) => {
        let t = e.innerHTML,
          i = e.getAttribute("data-to-fixed") || "1";
        return {
          el: e,
          initial: t,
          float: parseFloat(t),
          toFixed: parseInt(i),
          observer: new IntersectionObserver(this.onIntersect),
        };
      })),
      this.animations.forEach((e) => {
        e.observer.observe(e.el);
      });
  }
  disconnectedCallback() {
    this.animations.forEach((e) => {
      e.observer.disconnect();
    });
  }
};
var se = class extends HTMLElement {
  constructor() {
    super();
    this.topDomElement = null;
    this.bottomDomElement = null;
    this.line = null;
    this.lineMobile = null;
    this.lineWrapper = null;
    this.screenManager = k.instance;
    this.chartAnimationElem = null;
    this.graphBounding = null;
    this.debug = (e, t) => {
      let i = this.querySelector("#top"),
        s = this.querySelector("#bottom");
      !i ||
        !s ||
        ((i.style.display = "block"),
        (s.style.display = "block"),
        i.style.setProperty("left", `${e.x}px`),
        i.style.setProperty("top", `${e.y}px`),
        s.style.setProperty("left", `${t.x}px`),
        s.style.setProperty("top", `${t.y}px`));
    };
    this.handleResize = () => {
      this.graphBounding = this.getBoundingClientRect();
      let e = this.topPoint,
        t = this.bottomPoint;
      if (
        !e ||
        !t ||
        !this.graphBounding ||
        !this.line ||
        !this.lineWrapper ||
        !this.chartAnimationElem ||
        !this.lineMobile
      )
        return;
      let i = this.getHypotenuseLength(e, t),
        s = this.getAngle(e, t, i);
      this.line.style.setProperty("width", `${i}px`),
        (this.line.style.rotate = `${-s}rad`),
        this.lineMobile.style.setProperty("width", `${i}px`),
        (this.lineMobile.style.rotate = `${-s}rad`),
        (this.lineWrapper.style.transform = `translate(0, ${t.y}px)`),
        (this.chartAnimationElem.style.transform = `translate(${t.x}px, 0)`),
        this.chartAnimationElem.style.setProperty(
          "--chart-animation-width",
          `${e.x - t.x + 10}px`
        );
    };
    this.getHypotenuseLength = (e, t) =>
      Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    this.getAngle = (e, t, i) => Math.acos(Math.abs(e.x - t.x) / i);
    this.getScale = (e, t) => t / e;
    var l;
    let e = this.getAttribute("data-top-elem"),
      t = this.getAttribute("data-bottom-elem"),
      i = this.getAttribute("data-line-elem"),
      s = this.getAttribute("data-line-mobile-elem"),
      r = this.getAttribute("data-line-wrapper-elem"),
      a = this.getAttribute("data-chart-animation");
    (this.graphBounding = this.getBoundingClientRect() || null),
      (this.topDomElement = this.querySelector(e || "") || null),
      (this.line = this.querySelector(i || "") || null),
      (this.lineMobile = this.querySelector(s || "") || null),
      (this.lineWrapper = this.querySelector(r || "") || null),
      (this.chartAnimationElem = this.querySelector(a || "") || null),
      (this.bottomDomElement =
        ((l = this.parentElement) == null
          ? void 0
          : l.querySelector(t || "")) || null),
      !(!this.topDomElement || !this.bottomDomElement || !this.line) &&
        (this.screenManager.subscribe(this.handleResize), this.handleResize());
  }
  get topPoint() {
    if (!this.topDomElement || !this.graphBounding || !this.bottomDomElement)
      return null;
    let e = this.topDomElement.getBoundingClientRect(),
      t = this.bottomDomElement.getBoundingClientRect(),
      i = e.left - (t.left + t.width);
    if (this.screenManager.innerWidth <= T.MOBILE) {
      let s = e.left + e.width - this.graphBounding.left - 40,
        r = e.top + e.height - this.graphBounding.top - 10;
      return { x: s, y: r };
    } else {
      let s = e.left - this.graphBounding.left - i * 0.07,
        r = e.top + e.height * 0.65 - this.graphBounding.top;
      return { x: s, y: r };
    }
  }
  get bottomPoint() {
    if (!this.bottomDomElement || !this.graphBounding || !this.topDomElement)
      return null;
    let e = this.bottomDomElement.getBoundingClientRect(),
      i = this.topDomElement.getBoundingClientRect().left - (e.left + e.width),
      s = this.screenManager.innerWidth < T.MOBILE ? e.width / 4 : -(i * 0.16),
      r = e.left + e.width - this.graphBounding.left - s,
      a = e.top - this.graphBounding.top - 20;
    return { x: r, y: a };
  }
  disconnectedCallback() {
    this.screenManager.unsubscribe(this.handleResize);
  }
};
var ne = class extends HTMLElement {
  constructor() {
    super();
    this.screenManager = k.instance;
    this.isClose = !0;
    this.collapsable = null;
    this.sizeHelper = null;
    this.indicator = null;
    this.openButton = null;
    this.buttonWrapper = null;
    this.height = 0;
    this.getCollapsableHeight = () => {
      if (!this.sizeHelper || !this.indicator || !this.collapsable) return;
      let e = this.indicator.getBoundingClientRect(),
        t = this.collapsable.getBoundingClientRect();
      return e.top - t.top;
    };
    this.getFullHeight = () =>
      this.sizeHelper ? this.sizeHelper.getBoundingClientRect().height : 0;
    this.setUp = () => {
      let e = this.getCollapsableHeight();
      (this.height = e || 0),
        this.style.setProperty("--collapsable-height", `${e}px`);
    };
    this.handleResize = () => {
      this.isClose && this.setUp();
    };
    this.open = () => {
      var t;
      this.isClose = !1;
      let e = this.getFullHeight();
      e < this.height && this.classList.add("gt-collapsable-open"),
        (t = this.buttonWrapper) == null ||
          t.style.setProperty("display", "none"),
        n.to(this, {
          "--collapsable-height": `${e}px`,
          duration: 0.7,
          onComplete: () => {
            this.classList.add("gt-collapsable-open"), this.kill();
          },
        });
    };
    this.kill = () => {
      var e;
      this.screenManager.unsubscribe(this.handleResize),
        (e = this.openButton) == null ||
          e.removeEventListener("click", this.open);
    };
    (this.collapsable = this.querySelector("[data-collapsable]")),
      (this.sizeHelper = this.querySelector("[data-size-indicator]")),
      (this.indicator = this.querySelector("[data-wrapper-indicator]")),
      (this.openButton = this.querySelector("[data-collapse-button]")),
      (this.buttonWrapper = this.querySelector("[data-button-wrapper]"));
  }
  connectedCallback() {
    var e;
    this.screenManager.subscribe(this.handleResize),
      this.setUp(),
      (e = this.openButton) == null || e.addEventListener("click", this.open);
  }
  disconnectedCallback() {
    this.kill();
  }
};
var re = class extends HTMLElement {
  constructor() {
    super();
    this.addEvents = () => {
      var e;
      this.ui.hover &&
        (this.ui.hover.addEventListener("mouseenter", this.onEnter),
        this.ui.hover.addEventListener("mouseleave", this.onLeave)),
        (e = this == null ? void 0 : this.observer) == null || e.observe(this);
    };
    this.removeEvents = () => {
      var e;
      this.ui.hover &&
        (this.ui.hover.removeEventListener("mouseenter", this.onEnter),
        this.ui.hover.removeEventListener("mouseleave", this.onLeave)),
        (e = this == null ? void 0 : this.observer) == null || e.disconnect();
    };
    this.onIntersect = (e) => {
      (e == null ? void 0 : e[0].isIntersecting)
        ? this.animateIn({ duration: 1.2, delay: 0, ease: "expo.out" })
        : this.animateOut({ duration: 0 });
    };
    this.animateIn = ({
      duration: e = 0.7,
      delay: t = 0,
      ease: i = "power3.inOut",
    }) => {
      var f, y, c, d, h;
      let s =
          (f = this.ui.rect) == null ? void 0 : f.getAttribute("data-x-leave"),
        r =
          (y = this.ui.rect) == null ? void 0 : y.getAttribute("data-y-leave"),
        a =
          (c = this.ui.rect) == null
            ? void 0
            : c.getAttribute("data-width-leave"),
        l =
          (d = this.ui.rect) == null
            ? void 0
            : d.getAttribute("data-height-leave"),
        m =
          (h = this.ui.rect) == null
            ? void 0
            : h.getAttribute("data-radius-leave");
      n.killTweensOf(this.ui.rect),
        n.to(this.ui.rect, {
          rotation: this.rotation,
          transformOrigin: "center",
          attr: {
            x: Number(s),
            y: Number(r),
            width: Number(a),
            height: Number(l),
            rx: Number(m),
            ry: Number(m),
          },
          duration: e,
          delay: t,
          ease: i,
        });
    };
    this.animateOut = ({ duration: e = 0.7 }) => {
      var l, m, f, y, c;
      let t =
          (l = this.ui.rect) == null ? void 0 : l.getAttribute("data-x-enter"),
        i =
          (m = this.ui.rect) == null ? void 0 : m.getAttribute("data-y-enter"),
        s =
          (f = this.ui.rect) == null
            ? void 0
            : f.getAttribute("data-width-enter"),
        r =
          (y = this.ui.rect) == null
            ? void 0
            : y.getAttribute("data-height-enter"),
        a =
          (c = this.ui.rect) == null
            ? void 0
            : c.getAttribute("data-radius-enter");
      n.killTweensOf(this.ui.rect),
        n.to(this.ui.rect, {
          rotation: this.rotation + 45,
          transformOrigin: "center",
          attr: {
            x: Number(t),
            y: Number(i),
            width: Number(s),
            height: Number(r),
            rx: Number(a),
            ry: Number(a),
          },
          duration: e,
          ease: "expo.out",
        });
    };
    this.onEnter = (e) => {
      !(e == null ? void 0 : e.currentTarget) ||
        this.animateOut({ duration: 0.6 });
    };
    this.onLeave = (e) => {
      !(e == null ? void 0 : e.currentTarget) ||
        this.animateIn({ duration: 1.2 });
    };
    (this.observer = new IntersectionObserver(this.onIntersect)),
      (this.prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches),
      (this.ui = { hover: null, rect: null }),
      (this.rotation = 0);
  }
  connectedCallback() {
    var e;
    (this.ui.hover = this.querySelector(".js-hover")),
      (this.ui.rect = this.querySelector(".js-rect")),
      (this.rotation = Number(
        (e = this.ui.rect) == null ? void 0 : e.getAttribute("data-rotation")
      )),
      this.addEvents();
  }
  disconnectedCallback() {
    this.removeEvents();
  }
};
var Ge = 0.15,
  oe = class extends p {
    constructor() {
      super({
        scrollOption: {
          vStart: "bottom",
          dStart: "top",
          vEnd: "bottom",
          dEnd: "top 200px",
          clamp: !0,
        },
      });
      this.tick = () => {
        if (
          !this.prefersReducedMotion &&
          this.scrollManager &&
          this.quickSetters.x &&
          this.quickSetters.y &&
          this.quickSetters.ix &&
          this.quickSetters.iy
        ) {
          let e = this.scrollManager.scrollProgression,
            t = 0.2 * e;
          (this.scale += (t - this.scale) * Ge),
            this.quickSetters.x(0.8 + this.scale),
            this.quickSetters.y(0.8 + this.scale),
            this.quickSetters.ix(1.2 - this.scale),
            this.quickSetters.iy(1.2 - this.scale);
        }
      };
      (this.prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches),
        (this.ui = { scale: null, inner: null }),
        (this.scale = 0),
        (this.quickSetters = { x: null, y: null, ix: null, iy: null });
    }
    connectedCallback() {
      super.connectedCallback(),
        (this.ui.scale = this.querySelector(".js-scale")),
        (this.ui.inner = this.querySelector(".js-scale-inner")),
        (this.quickSetters.x = n.quickSetter(this.ui.scale, "scaleX")),
        (this.quickSetters.y = n.quickSetter(this.ui.scale, "scaleY")),
        (this.quickSetters.ix = n.quickSetter(this.ui.inner, "scaleX")),
        (this.quickSetters.iy = n.quickSetter(this.ui.inner, "scaleY"));
    }
    disconnectedCallback() {
      super.disconnectedCallback();
    }
  };
window.customElements.define("example-custom-element", he);
window.customElements.define("hero-component", H);
window.customElements.define("mask-asset", _);
window.customElements.define("spark-transition", W);
window.customElements.define("webgl-gallery", D);
window.customElements.define("performance-stats", N);
window.customElements.define("card-stack-trigger", V);
window.customElements.define("floating-card", F);
window.customElements.define("video-chapters", U);
window.customElements.define("line-animation", G);
window.customElements.define("line-gradient-title", K);
window.customElements.define("video-block", $);
window.customElements.define("video-block-modal", X);
window.customElements.define("video-blocks-wrapper", J);
window.customElements.define("gradient-radial", Z);
window.customElements.define("size-custom", re);
window.customElements.define("scale-custom", oe);
window.customElements.define("section-slider", ee);
window.customElements.define("section-slider-sound", te);
window.customElements.define("stacked-cards-enter-leave", z);
window.customElements.define("navigation-spacer", Y);
window.customElements.define("navigation-manager", j);
window.customElements.define("navigation-sticky-wrapper", Q);
window.customElements.define("section-graph", ie);
window.customElements.define("graph-wrapper", se);
window.customElements.define("table-wrapper", ne);
var Ne = class {
  constructor() {
    (this.createStats = () => {
      let e = new De.default();
      e.showPanel(0),
        document.body.appendChild(e.dom),
        setTimeout(() => {
          n.ticker.add(() => e.begin(), !1, !0),
            n.ticker.add(() => {
              e.end();
            });
        }, 1e3);
    }),
      (this.createObserver = () => {
        let e = document.body.querySelectorAll("[data-in-view]"),
          t = new IntersectionObserver(
            (i) => {
              i.forEach((s) => {
                let r = s.boundingClientRect.y <= 0 ? "top" : "bottom";
                s.isIntersecting && s.intersectionRatio >= 0
                  ? (s.target.classList.add("in-view"),
                    s.target.classList.remove(`out-view-${r}`),
                    s.target.hasAttribute("data-in-view-once") &&
                      t.unobserve(s.target))
                  : !s.isIntersecting &&
                    s.intersectionRatio <= 0 &&
                    (s.target.classList.remove("in-view"),
                    s.target.classList.add(`out-view-${r}`));
              });
            },
            { rootMargin: "10px", threshold: [0, 1] }
          );
        e.forEach((i) => {
          t.observe(i);
        });
      }),
      n.registerPlugin(A),
      document.body.classList.remove("no-js"),
      document.body.classList.add("js"),
      this.createObserver();
  }
};
document.addEventListener("DOMContentLoaded", () => {
  new Ne();
});
/*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
