/**
 * license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */

!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("material-components-web", [], e)
    : "object" == typeof exports
    ? (exports.mdc = e())
    : (t.mdc = e());
})(this, function () {
  return (
    (i = {}),
    (r.m = n =
      [
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCFoundation = void 0);
          var i =
            (Object.defineProperty(r, "cssClasses", {
              get: function () {
                return {};
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(r, "strings", {
              get: function () {
                return {};
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(r, "numbers", {
              get: function () {
                return {};
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(r, "defaultAdapter", {
              get: function () {
                return {};
              },
              enumerable: !1,
              configurable: !0,
            }),
            (r.prototype.init = function () {}),
            (r.prototype.destroy = function () {}),
            r);
          function r(t) {
            void 0 === t && (t = {}), (this.adapter = t);
          }
          (e.MDCFoundation = i), (e.default = i);
        },
        function (t, e, n) {
          "use strict";
          var r =
              (this && this.__read) ||
              function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var i,
                  r,
                  o = n.call(t),
                  s = [];
                try {
                  for (; (void 0 === e || 0 < e--) && !(i = o.next()).done; )
                    s.push(i.value);
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return s;
              },
            o =
              (this && this.__spreadArray) ||
              function (t, e) {
                for (var n = 0, i = e.length, r = t.length; n < i; n++, r++)
                  t[r] = e[n];
                return t;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCComponent = void 0);
          var i = n(0),
            s =
              ((a.attachTo = function (t) {
                return new a(t, new i.MDCFoundation({}));
              }),
              (a.prototype.initialize = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
              }),
              (a.prototype.getDefaultFoundation = function () {
                throw new Error(
                  "Subclasses must override getDefaultFoundation to return a properly configured foundation class"
                );
              }),
              (a.prototype.initialSyncWithDOM = function () {}),
              (a.prototype.destroy = function () {
                this.foundation.destroy();
              }),
              (a.prototype.listen = function (t, e, n) {
                this.root.addEventListener(t, e, n);
              }),
              (a.prototype.unlisten = function (t, e, n) {
                this.root.removeEventListener(t, e, n);
              }),
              (a.prototype.emit = function (t, e, n) {
                var i;
                void 0 === n && (n = !1),
                  "function" == typeof CustomEvent
                    ? (i = new CustomEvent(t, { bubbles: n, detail: e }))
                    : (i = document.createEvent("CustomEvent")).initCustomEvent(
                        t,
                        n,
                        !1,
                        e
                      ),
                  this.root.dispatchEvent(i);
              }),
              a);
          function a(t, e) {
            for (var n = [], i = 2; i < arguments.length; i++)
              n[i - 2] = arguments[i];
            (this.root = t),
              this.initialize.apply(this, o([], r(n))),
              (this.foundation =
                void 0 === e ? this.getDefaultFoundation() : e),
              this.foundation.init(),
              this.initialSyncWithDOM();
          }
          (e.MDCComponent = s), (e.default = s);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            s =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            a =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      o(e, t, n);
                return s(e, t), e;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCRipple = void 0);
          var c,
            u = n(1),
            l = n(5),
            d = n(3),
            p = n(4),
            h = a(n(19)),
            f =
              ((c = u.MDCComponent),
              r(y, c),
              (y.attachTo = function (t, e) {
                void 0 === e && (e = { isUnbounded: void 0 });
                var n = new y(t);
                return (
                  void 0 !== e.isUnbounded && (n.unbounded = e.isUnbounded), n
                );
              }),
              (y.createAdapter = function (n) {
                return {
                  addClass: function (t) {
                    return n.root.classList.add(t);
                  },
                  browserSupportsCssVars: function () {
                    return h.supportsCssVariables(window);
                  },
                  computeBoundingRect: function () {
                    return n.root.getBoundingClientRect();
                  },
                  containsEventTarget: function (t) {
                    return n.root.contains(t);
                  },
                  deregisterDocumentInteractionHandler: function (t, e) {
                    return document.documentElement.removeEventListener(
                      t,
                      e,
                      l.applyPassive()
                    );
                  },
                  deregisterInteractionHandler: function (t, e) {
                    return n.root.removeEventListener(t, e, l.applyPassive());
                  },
                  deregisterResizeHandler: function (t) {
                    return window.removeEventListener("resize", t);
                  },
                  getWindowPageOffset: function () {
                    return { x: window.pageXOffset, y: window.pageYOffset };
                  },
                  isSurfaceActive: function () {
                    return d.matches(n.root, ":active");
                  },
                  isSurfaceDisabled: function () {
                    return Boolean(n.disabled);
                  },
                  isUnbounded: function () {
                    return Boolean(n.unbounded);
                  },
                  registerDocumentInteractionHandler: function (t, e) {
                    return document.documentElement.addEventListener(
                      t,
                      e,
                      l.applyPassive()
                    );
                  },
                  registerInteractionHandler: function (t, e) {
                    return n.root.addEventListener(t, e, l.applyPassive());
                  },
                  registerResizeHandler: function (t) {
                    return window.addEventListener("resize", t);
                  },
                  removeClass: function (t) {
                    return n.root.classList.remove(t);
                  },
                  updateCssVariable: function (t, e) {
                    return n.root.style.setProperty(t, e);
                  },
                };
              }),
              Object.defineProperty(y.prototype, "unbounded", {
                get: function () {
                  return Boolean(this.isUnbounded);
                },
                set: function (t) {
                  (this.isUnbounded = Boolean(t)), this.setUnbounded();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (y.prototype.activate = function () {
                this.foundation.activate();
              }),
              (y.prototype.deactivate = function () {
                this.foundation.deactivate();
              }),
              (y.prototype.layout = function () {
                this.foundation.layout();
              }),
              (y.prototype.getDefaultFoundation = function () {
                return new p.MDCRippleFoundation(y.createAdapter(this));
              }),
              (y.prototype.initialSyncWithDOM = function () {
                var t = this.root;
                this.isUnbounded = "mdcRippleIsUnbounded" in t.dataset;
              }),
              (y.prototype.setUnbounded = function () {
                this.foundation.setUnbounded(Boolean(this.isUnbounded));
              }),
              y);
          function y() {
            var t = (null !== c && c.apply(this, arguments)) || this;
            return (t.disabled = !1), t;
          }
          e.MDCRipple = f;
        },
        function (t, e, n) {
          "use strict";
          function i(t, e) {
            return (
              t.matches ||
              t.webkitMatchesSelector ||
              t.msMatchesSelector
            ).call(t, e);
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.estimateScrollWidth = e.matches = e.closest = void 0),
            (e.closest = function (t, e) {
              if (t.closest) return t.closest(e);
              for (var n = t; n; ) {
                if (i(n, e)) return n;
                n = n.parentElement;
              }
              return null;
            }),
            (e.matches = i),
            (e.estimateScrollWidth = function (t) {
              var e = t;
              if (null !== e.offsetParent) return e.scrollWidth;
              var n = e.cloneNode(!0);
              n.style.setProperty("position", "absolute"),
                n.style.setProperty("transform", "translate(-9999px, -9999px)"),
                document.documentElement.appendChild(n);
              var i = n.scrollWidth;
              return document.documentElement.removeChild(n), i;
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCRippleFoundation = void 0);
          var a,
            c = n(0),
            u = n(47),
            l = n(19),
            d = ["touchstart", "pointerdown", "mousedown", "keydown"],
            p = ["touchend", "pointerup", "mouseup", "contextmenu"],
            h = [],
            f =
              ((a = c.MDCFoundation),
              r(y, a),
              Object.defineProperty(y, "cssClasses", {
                get: function () {
                  return u.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y, "strings", {
                get: function () {
                  return u.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y, "numbers", {
                get: function () {
                  return u.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    browserSupportsCssVars: function () {
                      return !0;
                    },
                    computeBoundingRect: function () {
                      return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                      };
                    },
                    containsEventTarget: function () {
                      return !0;
                    },
                    deregisterDocumentInteractionHandler: function () {},
                    deregisterInteractionHandler: function () {},
                    deregisterResizeHandler: function () {},
                    getWindowPageOffset: function () {
                      return { x: 0, y: 0 };
                    },
                    isSurfaceActive: function () {
                      return !0;
                    },
                    isSurfaceDisabled: function () {
                      return !0;
                    },
                    isUnbounded: function () {
                      return !0;
                    },
                    registerDocumentInteractionHandler: function () {},
                    registerInteractionHandler: function () {},
                    registerResizeHandler: function () {},
                    removeClass: function () {},
                    updateCssVariable: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (y.prototype.init = function () {
                var t = this,
                  e = this.supportsPressRipple();
                if ((this.registerRootHandlers(e), e)) {
                  var n = y.cssClasses,
                    i = n.ROOT,
                    r = n.UNBOUNDED;
                  requestAnimationFrame(function () {
                    t.adapter.addClass(i),
                      t.adapter.isUnbounded() &&
                        (t.adapter.addClass(r), t.layoutInternal());
                  });
                }
              }),
              (y.prototype.destroy = function () {
                var t = this;
                if (this.supportsPressRipple()) {
                  this.activationTimer &&
                    (clearTimeout(this.activationTimer),
                    (this.activationTimer = 0),
                    this.adapter.removeClass(y.cssClasses.FG_ACTIVATION)),
                    this.fgDeactivationRemovalTimer &&
                      (clearTimeout(this.fgDeactivationRemovalTimer),
                      (this.fgDeactivationRemovalTimer = 0),
                      this.adapter.removeClass(y.cssClasses.FG_DEACTIVATION));
                  var e = y.cssClasses,
                    n = e.ROOT,
                    i = e.UNBOUNDED;
                  requestAnimationFrame(function () {
                    t.adapter.removeClass(n),
                      t.adapter.removeClass(i),
                      t.removeCssVars();
                  });
                }
                this.deregisterRootHandlers(),
                  this.deregisterDeactivationHandlers();
              }),
              (y.prototype.activate = function (t) {
                this.activateImpl(t);
              }),
              (y.prototype.deactivate = function () {
                this.deactivateImpl();
              }),
              (y.prototype.layout = function () {
                var t = this;
                this.layoutFrame && cancelAnimationFrame(this.layoutFrame),
                  (this.layoutFrame = requestAnimationFrame(function () {
                    t.layoutInternal(), (t.layoutFrame = 0);
                  }));
              }),
              (y.prototype.setUnbounded = function (t) {
                var e = y.cssClasses.UNBOUNDED;
                t ? this.adapter.addClass(e) : this.adapter.removeClass(e);
              }),
              (y.prototype.handleFocus = function () {
                var t = this;
                requestAnimationFrame(function () {
                  return t.adapter.addClass(y.cssClasses.BG_FOCUSED);
                });
              }),
              (y.prototype.handleBlur = function () {
                var t = this;
                requestAnimationFrame(function () {
                  return t.adapter.removeClass(y.cssClasses.BG_FOCUSED);
                });
              }),
              (y.prototype.supportsPressRipple = function () {
                return this.adapter.browserSupportsCssVars();
              }),
              (y.prototype.defaultActivationState = function () {
                return {
                  activationEvent: void 0,
                  hasDeactivationUXRun: !1,
                  isActivated: !1,
                  isProgrammatic: !1,
                  wasActivatedByPointer: !1,
                  wasElementMadeActive: !1,
                };
              }),
              (y.prototype.registerRootHandlers = function (t) {
                var e, n;
                if (t) {
                  try {
                    for (var i = s(d), r = i.next(); !r.done; r = i.next()) {
                      var o = r.value;
                      this.adapter.registerInteractionHandler(
                        o,
                        this.activateHandler
                      );
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      r && !r.done && (n = i.return) && n.call(i);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  this.adapter.isUnbounded() &&
                    this.adapter.registerResizeHandler(this.resizeHandler);
                }
                this.adapter.registerInteractionHandler(
                  "focus",
                  this.focusHandler
                ),
                  this.adapter.registerInteractionHandler(
                    "blur",
                    this.blurHandler
                  );
              }),
              (y.prototype.registerDeactivationHandlers = function (t) {
                var e, n;
                if ("keydown" === t.type)
                  this.adapter.registerInteractionHandler(
                    "keyup",
                    this.deactivateHandler
                  );
                else
                  try {
                    for (var i = s(p), r = i.next(); !r.done; r = i.next()) {
                      var o = r.value;
                      this.adapter.registerDocumentInteractionHandler(
                        o,
                        this.deactivateHandler
                      );
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      r && !r.done && (n = i.return) && n.call(i);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
              }),
              (y.prototype.deregisterRootHandlers = function () {
                var e, t;
                try {
                  for (var n = s(d), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    this.adapter.deregisterInteractionHandler(
                      r,
                      this.activateHandler
                    );
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this.adapter.deregisterInteractionHandler(
                  "focus",
                  this.focusHandler
                ),
                  this.adapter.deregisterInteractionHandler(
                    "blur",
                    this.blurHandler
                  ),
                  this.adapter.isUnbounded() &&
                    this.adapter.deregisterResizeHandler(this.resizeHandler);
              }),
              (y.prototype.deregisterDeactivationHandlers = function () {
                var e, t;
                this.adapter.deregisterInteractionHandler(
                  "keyup",
                  this.deactivateHandler
                );
                try {
                  for (var n = s(p), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    this.adapter.deregisterDocumentInteractionHandler(
                      r,
                      this.deactivateHandler
                    );
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (y.prototype.removeCssVars = function () {
                var e = this,
                  n = y.strings;
                Object.keys(n).forEach(function (t) {
                  0 === t.indexOf("VAR_") &&
                    e.adapter.updateCssVariable(n[t], null);
                });
              }),
              (y.prototype.activateImpl = function (t) {
                var e = this;
                if (!this.adapter.isSurfaceDisabled()) {
                  var n = this.activationState;
                  if (!n.isActivated) {
                    var i = this.previousActivationEvent;
                    (i && void 0 !== t && i.type !== t.type) ||
                      ((n.isActivated = !0),
                      (n.isProgrammatic = void 0 === t),
                      (n.activationEvent = t),
                      (n.wasActivatedByPointer =
                        !n.isProgrammatic &&
                        void 0 !== t &&
                        ("mousedown" === t.type ||
                          "touchstart" === t.type ||
                          "pointerdown" === t.type)),
                      void 0 !== t &&
                      0 < h.length &&
                      h.some(function (t) {
                        return e.adapter.containsEventTarget(t);
                      })
                        ? this.resetActivationState()
                        : (void 0 !== t &&
                            (h.push(t.target),
                            this.registerDeactivationHandlers(t)),
                          (n.wasElementMadeActive =
                            this.checkElementMadeActive(t)),
                          n.wasElementMadeActive && this.animateActivation(),
                          requestAnimationFrame(function () {
                            (h = []),
                              n.wasElementMadeActive ||
                                void 0 === t ||
                                (" " !== t.key && 32 !== t.keyCode) ||
                                ((n.wasElementMadeActive =
                                  e.checkElementMadeActive(t)),
                                n.wasElementMadeActive &&
                                  e.animateActivation()),
                              n.wasElementMadeActive ||
                                (e.activationState =
                                  e.defaultActivationState());
                          })));
                  }
                }
              }),
              (y.prototype.checkElementMadeActive = function (t) {
                return (
                  void 0 === t ||
                  "keydown" !== t.type ||
                  this.adapter.isSurfaceActive()
                );
              }),
              (y.prototype.animateActivation = function () {
                var t = this,
                  e = y.strings,
                  n = e.VAR_FG_TRANSLATE_START,
                  i = e.VAR_FG_TRANSLATE_END,
                  r = y.cssClasses,
                  o = r.FG_DEACTIVATION,
                  s = r.FG_ACTIVATION,
                  a = y.numbers.DEACTIVATION_TIMEOUT_MS;
                this.layoutInternal();
                var c = "",
                  u = "";
                if (!this.adapter.isUnbounded()) {
                  var l = this.getFgTranslationCoordinates(),
                    d = l.startPoint,
                    p = l.endPoint;
                  (c = d.x + "px, " + d.y + "px"),
                    (u = p.x + "px, " + p.y + "px");
                }
                this.adapter.updateCssVariable(n, c),
                  this.adapter.updateCssVariable(i, u),
                  clearTimeout(this.activationTimer),
                  clearTimeout(this.fgDeactivationRemovalTimer),
                  this.rmBoundedActivationClasses(),
                  this.adapter.removeClass(o),
                  this.adapter.computeBoundingRect(),
                  this.adapter.addClass(s),
                  (this.activationTimer = setTimeout(function () {
                    t.activationTimerCallback();
                  }, a));
              }),
              (y.prototype.getFgTranslationCoordinates = function () {
                var t,
                  e = this.activationState,
                  n = e.activationEvent;
                return {
                  startPoint: (t = {
                    x:
                      (t = e.wasActivatedByPointer
                        ? l.getNormalizedEventCoords(
                            n,
                            this.adapter.getWindowPageOffset(),
                            this.adapter.computeBoundingRect()
                          )
                        : { x: this.frame.width / 2, y: this.frame.height / 2 })
                        .x -
                      this.initialSize / 2,
                    y: t.y - this.initialSize / 2,
                  }),
                  endPoint: {
                    x: this.frame.width / 2 - this.initialSize / 2,
                    y: this.frame.height / 2 - this.initialSize / 2,
                  },
                };
              }),
              (y.prototype.runDeactivationUXLogicIfReady = function () {
                var t = this,
                  e = y.cssClasses.FG_DEACTIVATION,
                  n = this.activationState,
                  i = n.hasDeactivationUXRun,
                  r = n.isActivated;
                (!i && r) ||
                  !this.activationAnimationHasEnded ||
                  (this.rmBoundedActivationClasses(),
                  this.adapter.addClass(e),
                  (this.fgDeactivationRemovalTimer = setTimeout(function () {
                    t.adapter.removeClass(e);
                  }, u.numbers.FG_DEACTIVATION_MS)));
              }),
              (y.prototype.rmBoundedActivationClasses = function () {
                var t = y.cssClasses.FG_ACTIVATION;
                this.adapter.removeClass(t),
                  (this.activationAnimationHasEnded = !1),
                  this.adapter.computeBoundingRect();
              }),
              (y.prototype.resetActivationState = function () {
                var t = this;
                (this.previousActivationEvent =
                  this.activationState.activationEvent),
                  (this.activationState = this.defaultActivationState()),
                  setTimeout(function () {
                    return (t.previousActivationEvent = void 0);
                  }, y.numbers.TAP_DELAY_MS);
              }),
              (y.prototype.deactivateImpl = function () {
                var t = this,
                  e = this.activationState;
                if (e.isActivated) {
                  var n = o({}, e);
                  e.isProgrammatic
                    ? (requestAnimationFrame(function () {
                        t.animateDeactivation(n);
                      }),
                      this.resetActivationState())
                    : (this.deregisterDeactivationHandlers(),
                      requestAnimationFrame(function () {
                        (t.activationState.hasDeactivationUXRun = !0),
                          t.animateDeactivation(n),
                          t.resetActivationState();
                      }));
                }
              }),
              (y.prototype.animateDeactivation = function (t) {
                var e = t.wasActivatedByPointer,
                  n = t.wasElementMadeActive;
                (e || n) && this.runDeactivationUXLogicIfReady();
              }),
              (y.prototype.layoutInternal = function () {
                var t = this;
                this.frame = this.adapter.computeBoundingRect();
                var e = Math.max(this.frame.height, this.frame.width);
                this.maxRadius = this.adapter.isUnbounded()
                  ? e
                  : Math.sqrt(
                      Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2)
                    ) + y.numbers.PADDING;
                var n = Math.floor(e * y.numbers.INITIAL_ORIGIN_SCALE);
                this.adapter.isUnbounded() && n % 2 != 0
                  ? (this.initialSize = n - 1)
                  : (this.initialSize = n),
                  (this.fgScale = "" + this.maxRadius / this.initialSize),
                  this.updateLayoutCssVars();
              }),
              (y.prototype.updateLayoutCssVars = function () {
                var t = y.strings,
                  e = t.VAR_FG_SIZE,
                  n = t.VAR_LEFT,
                  i = t.VAR_TOP,
                  r = t.VAR_FG_SCALE;
                this.adapter.updateCssVariable(e, this.initialSize + "px"),
                  this.adapter.updateCssVariable(r, this.fgScale),
                  this.adapter.isUnbounded() &&
                    ((this.unboundedCoords = {
                      left: Math.round(
                        this.frame.width / 2 - this.initialSize / 2
                      ),
                      top: Math.round(
                        this.frame.height / 2 - this.initialSize / 2
                      ),
                    }),
                    this.adapter.updateCssVariable(
                      n,
                      this.unboundedCoords.left + "px"
                    ),
                    this.adapter.updateCssVariable(
                      i,
                      this.unboundedCoords.top + "px"
                    ));
              }),
              y);
          function y(t) {
            var e = a.call(this, o(o({}, y.defaultAdapter), t)) || this;
            return (
              (e.activationAnimationHasEnded = !1),
              (e.activationTimer = 0),
              (e.fgDeactivationRemovalTimer = 0),
              (e.fgScale = "0"),
              (e.frame = { width: 0, height: 0 }),
              (e.initialSize = 0),
              (e.layoutFrame = 0),
              (e.maxRadius = 0),
              (e.unboundedCoords = { left: 0, top: 0 }),
              (e.activationState = e.defaultActivationState()),
              (e.activationTimerCallback = function () {
                (e.activationAnimationHasEnded = !0),
                  e.runDeactivationUXLogicIfReady();
              }),
              (e.activateHandler = function (t) {
                e.activateImpl(t);
              }),
              (e.deactivateHandler = function () {
                e.deactivateImpl();
              }),
              (e.focusHandler = function () {
                e.handleFocus();
              }),
              (e.blurHandler = function () {
                e.handleBlur();
              }),
              (e.resizeHandler = function () {
                e.layout();
              }),
              e
            );
          }
          (e.MDCRippleFoundation = f), (e.default = f);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.applyPassive = void 0),
            (e.applyPassive = function (t) {
              return (
                void 0 === t && (t = window),
                !!(function (t) {
                  void 0 === t && (t = window);
                  var e = !1;
                  try {
                    var n = {
                        get passive() {
                          return !(e = !0);
                        },
                      },
                      i = function () {};
                    t.document.addEventListener("test", i, n),
                      t.document.removeEventListener("test", i, n);
                  } catch (t) {
                    e = !1;
                  }
                  return e;
                })(t) && { passive: !0 }
              );
            });
        },
        function (t, i, e) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.isNavigationEvent = i.normalizeKey = i.KEY = void 0),
            (i.KEY = {
              UNKNOWN: "Unknown",
              BACKSPACE: "Backspace",
              ENTER: "Enter",
              SPACEBAR: "Spacebar",
              PAGE_UP: "PageUp",
              PAGE_DOWN: "PageDown",
              END: "End",
              HOME: "Home",
              ARROW_LEFT: "ArrowLeft",
              ARROW_UP: "ArrowUp",
              ARROW_RIGHT: "ArrowRight",
              ARROW_DOWN: "ArrowDown",
              DELETE: "Delete",
              ESCAPE: "Escape",
              TAB: "Tab",
            });
          var r = new Set();
          r.add(i.KEY.BACKSPACE),
            r.add(i.KEY.ENTER),
            r.add(i.KEY.SPACEBAR),
            r.add(i.KEY.PAGE_UP),
            r.add(i.KEY.PAGE_DOWN),
            r.add(i.KEY.END),
            r.add(i.KEY.HOME),
            r.add(i.KEY.ARROW_LEFT),
            r.add(i.KEY.ARROW_UP),
            r.add(i.KEY.ARROW_RIGHT),
            r.add(i.KEY.ARROW_DOWN),
            r.add(i.KEY.DELETE),
            r.add(i.KEY.ESCAPE),
            r.add(i.KEY.TAB);
          var n = 8,
            o = 13,
            s = 32,
            a = 33,
            c = 34,
            u = 35,
            l = 36,
            d = 37,
            p = 38,
            h = 39,
            f = 40,
            y = 46,
            C = 27,
            E = 9,
            g = new Map();
          g.set(n, i.KEY.BACKSPACE),
            g.set(o, i.KEY.ENTER),
            g.set(s, i.KEY.SPACEBAR),
            g.set(a, i.KEY.PAGE_UP),
            g.set(c, i.KEY.PAGE_DOWN),
            g.set(u, i.KEY.END),
            g.set(l, i.KEY.HOME),
            g.set(d, i.KEY.ARROW_LEFT),
            g.set(p, i.KEY.ARROW_UP),
            g.set(h, i.KEY.ARROW_RIGHT),
            g.set(f, i.KEY.ARROW_DOWN),
            g.set(y, i.KEY.DELETE),
            g.set(C, i.KEY.ESCAPE),
            g.set(E, i.KEY.TAB);
          var _ = new Set();
          function m(t) {
            var e = t.key;
            if (r.has(e)) return e;
            var n = g.get(t.keyCode);
            return n || i.KEY.UNKNOWN;
          }
          _.add(i.KEY.PAGE_UP),
            _.add(i.KEY.PAGE_DOWN),
            _.add(i.KEY.END),
            _.add(i.KEY.HOME),
            _.add(i.KEY.ARROW_LEFT),
            _.add(i.KEY.ARROW_UP),
            _.add(i.KEY.ARROW_RIGHT),
            _.add(i.KEY.ARROW_DOWN),
            (i.normalizeKey = m),
            (i.isNavigationEvent = function (t) {
              return _.has(m(t));
            });
        },
        function (t, e, n) {
          "use strict";
          var i, r;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.evolutionClassNameMap =
              e.evolutionAttribute =
              e.deprecatedClassNameMap =
              e.numbers =
              e.cssClasses =
              e.strings =
                void 0);
          var o = {
              LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
              LIST_ITEM_CLASS: "mdc-list-item",
              LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
              LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
              LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
              LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
              ROOT: "mdc-list",
            },
            s =
              (((i = {})["" + (e.cssClasses = o).LIST_ITEM_ACTIVATED_CLASS] =
                "mdc-list-item--activated"),
              (i["" + o.LIST_ITEM_CLASS] = "mdc-list-item"),
              (i["" + o.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled"),
              (i["" + o.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected"),
              (i["" + o.LIST_ITEM_PRIMARY_TEXT_CLASS] =
                "mdc-list-item__primary-text"),
              (i["" + o.ROOT] = "mdc-list"),
              i);
          e.evolutionClassNameMap = s;
          var a =
            (((r = {})["" + o.LIST_ITEM_ACTIVATED_CLASS] =
              "mdc-deprecated-list-item--activated"),
            (r["" + o.LIST_ITEM_CLASS] = "mdc-deprecated-list-item"),
            (r["" + o.LIST_ITEM_DISABLED_CLASS] =
              "mdc-deprecated-list-item--disabled"),
            (r["" + o.LIST_ITEM_SELECTED_CLASS] =
              "mdc-deprecated-list-item--selected"),
            (r["" + o.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text"),
            (r["" + o.LIST_ITEM_PRIMARY_TEXT_CLASS] =
              "mdc-deprecated-list-item__primary-text"),
            (r["" + o.ROOT] = "mdc-deprecated-list"),
            r);
          e.deprecatedClassNameMap = a;
          var c = {
            ACTION_EVENT: "MDCList:action",
            SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
            ARIA_CHECKED: "aria-checked",
            ARIA_CHECKED_CHECKBOX_SELECTOR:
              '[role="checkbox"][aria-checked="true"]',
            ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
            ARIA_CURRENT: "aria-current",
            ARIA_DISABLED: "aria-disabled",
            ARIA_ORIENTATION: "aria-orientation",
            ARIA_ORIENTATION_HORIZONTAL: "horizontal",
            ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
            ARIA_SELECTED: "aria-selected",
            ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
            ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
            CHECKBOX_RADIO_SELECTOR:
              'input[type="checkbox"], input[type="radio"]',
            CHECKBOX_SELECTOR: 'input[type="checkbox"]',
            CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:
              "\n    ." +
              o.LIST_ITEM_CLASS +
              " button:not(:disabled),\n    ." +
              o.LIST_ITEM_CLASS +
              " a,\n    ." +
              a[o.LIST_ITEM_CLASS] +
              " button:not(:disabled),\n    ." +
              a[o.LIST_ITEM_CLASS] +
              " a\n  ",
            DEPRECATED_SELECTOR: ".mdc-deprecated-list",
            FOCUSABLE_CHILD_ELEMENTS:
              "\n    ." +
              o.LIST_ITEM_CLASS +
              " button:not(:disabled),\n    ." +
              o.LIST_ITEM_CLASS +
              " a,\n    ." +
              o.LIST_ITEM_CLASS +
              ' input[type="radio"]:not(:disabled),\n    .' +
              o.LIST_ITEM_CLASS +
              ' input[type="checkbox"]:not(:disabled),\n    .' +
              a[o.LIST_ITEM_CLASS] +
              " button:not(:disabled),\n    ." +
              a[o.LIST_ITEM_CLASS] +
              " a,\n    ." +
              a[o.LIST_ITEM_CLASS] +
              ' input[type="radio"]:not(:disabled),\n    .' +
              a[o.LIST_ITEM_CLASS] +
              ' input[type="checkbox"]:not(:disabled)\n  ',
            RADIO_SELECTOR: 'input[type="radio"]',
            SELECTED_ITEM_SELECTOR:
              '[aria-selected="true"], [aria-current="true"]',
          };
          e.strings = c;
          e.numbers = {
            UNSET_INDEX: -1,
            TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300,
          };
          e.evolutionAttribute = "evolution";
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Corner =
              e.CornerBit =
              e.numbers =
              e.strings =
              e.cssClasses =
                void 0);
          e.cssClasses = {
            ANCHOR: "mdc-menu-surface--anchor",
            ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
            ANIMATING_OPEN: "mdc-menu-surface--animating-open",
            FIXED: "mdc-menu-surface--fixed",
            IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
            OPEN: "mdc-menu-surface--open",
            ROOT: "mdc-menu-surface",
          };
          var i = {
            CLOSED_EVENT: "MDCMenuSurface:closed",
            CLOSING_EVENT: "MDCMenuSurface:closing",
            OPENED_EVENT: "MDCMenuSurface:opened",
            OPENING_EVENT: "MDCMenuSurface:opening",
            FOCUSABLE_ELEMENTS: [
              "button:not(:disabled)",
              '[href]:not([aria-disabled="true"])',
              "input:not(:disabled)",
              "select:not(:disabled)",
              "textarea:not(:disabled)",
              '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
            ].join(", "),
          };
          e.strings = i;
          var r, o, s, a;
          (e.numbers = {
            TRANSITION_OPEN_DURATION: 120,
            TRANSITION_CLOSE_DURATION: 75,
            MARGIN_TO_EDGE: 32,
            ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
            TOUCH_EVENT_WAIT_MS: 30,
          }),
            ((o = r = r || {})[(o.BOTTOM = 1)] = "BOTTOM"),
            (o[(o.CENTER = 2)] = "CENTER"),
            (o[(o.RIGHT = 4)] = "RIGHT"),
            (o[(o.FLIP_RTL = 8)] = "FLIP_RTL"),
            (e.CornerBit = r),
            ((a = s = s || {})[(a.TOP_LEFT = 0)] = "TOP_LEFT"),
            (a[(a.TOP_RIGHT = 4)] = "TOP_RIGHT"),
            (a[(a.BOTTOM_LEFT = 1)] = "BOTTOM_LEFT"),
            (a[(a.BOTTOM_RIGHT = 5)] = "BOTTOM_RIGHT"),
            (a[(a.TOP_START = 8)] = "TOP_START"),
            (a[(a.TOP_END = 12)] = "TOP_END"),
            (a[(a.BOTTOM_START = 9)] = "BOTTOM_START"),
            (a[(a.BOTTOM_END = 13)] = "BOTTOM_END"),
            (e.Corner = s);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.numbers = e.cssClasses = void 0);
          e.cssClasses = {
            FIXED_CLASS: "mdc-top-app-bar--fixed",
            FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
            SHORT_CLASS: "mdc-top-app-bar--short",
            SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
            SHORT_HAS_ACTION_ITEM_CLASS:
              "mdc-top-app-bar--short-has-action-item",
          };
          e.numbers = {
            DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
            MAX_TOP_APP_BAR_HEIGHT: 128,
          };
          e.strings = {
            ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
            NAVIGATION_EVENT: "MDCTopAppBar:nav",
            NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
            ROOT_SELECTOR: ".mdc-top-app-bar",
            TITLE_SELECTOR: ".mdc-top-app-bar__title",
          };
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getCorrectEventName = e.getCorrectPropertyName = void 0);
          var s = {
              animation: {
                prefixed: "-webkit-animation",
                standard: "animation",
              },
              transform: {
                prefixed: "-webkit-transform",
                standard: "transform",
              },
              transition: {
                prefixed: "-webkit-transition",
                standard: "transition",
              },
            },
            a = {
              animationend: {
                cssProperty: "animation",
                prefixed: "webkitAnimationEnd",
                standard: "animationend",
              },
              animationiteration: {
                cssProperty: "animation",
                prefixed: "webkitAnimationIteration",
                standard: "animationiteration",
              },
              animationstart: {
                cssProperty: "animation",
                prefixed: "webkitAnimationStart",
                standard: "animationstart",
              },
              transitionend: {
                cssProperty: "transition",
                prefixed: "webkitTransitionEnd",
                standard: "transitionend",
              },
            };
          function c(t) {
            return (
              Boolean(t.document) &&
              "function" == typeof t.document.createElement
            );
          }
          (e.getCorrectPropertyName = function (t, e) {
            if (c(t) && e in s) {
              var n = t.document.createElement("div"),
                i = s[e],
                r = i.standard,
                o = i.prefixed;
              return r in n.style ? r : o;
            }
            return e;
          }),
            (e.getCorrectEventName = function (t, e) {
              if (c(t) && e in a) {
                var n = t.document.createElement("div"),
                  i = a[e],
                  r = i.standard,
                  o = i.prefixed;
                return i.cssProperty in n.style ? r : o;
              }
              return e;
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.FocusTrap = void 0);
          var o = "mdc-dom-focus-sentinel",
            i =
              ((r.prototype.trapFocus = function () {
                var t = this.getFocusableElements(this.root);
                if (0 === t.length)
                  throw new Error(
                    "FocusTrap: Element must have at least one focusable child."
                  );
                (this.elFocusedBeforeTrapFocus =
                  document.activeElement instanceof HTMLElement
                    ? document.activeElement
                    : null),
                  this.wrapTabFocus(this.root),
                  this.options.skipInitialFocus ||
                    this.focusInitialElement(t, this.options.initialFocusEl);
              }),
              (r.prototype.releaseFocus = function () {
                [].slice
                  .call(this.root.querySelectorAll("." + o))
                  .forEach(function (t) {
                    t.parentElement.removeChild(t);
                  }),
                  !this.options.skipRestoreFocus &&
                    this.elFocusedBeforeTrapFocus &&
                    this.elFocusedBeforeTrapFocus.focus();
              }),
              (r.prototype.wrapTabFocus = function (e) {
                var n = this,
                  t = this.createSentinel(),
                  i = this.createSentinel();
                t.addEventListener("focus", function () {
                  var t = n.getFocusableElements(e);
                  0 < t.length && t[t.length - 1].focus();
                }),
                  i.addEventListener("focus", function () {
                    var t = n.getFocusableElements(e);
                    0 < t.length && t[0].focus();
                  }),
                  e.insertBefore(t, e.children[0]),
                  e.appendChild(i);
              }),
              (r.prototype.focusInitialElement = function (t, e) {
                var n = 0;
                e && (n = Math.max(t.indexOf(e), 0)), t[n].focus();
              }),
              (r.prototype.getFocusableElements = function (t) {
                return [].slice
                  .call(
                    t.querySelectorAll(
                      "[autofocus], [tabindex], a, input, textarea, select, button"
                    )
                  )
                  .filter(function (t) {
                    var e =
                        "true" === t.getAttribute("aria-disabled") ||
                        null != t.getAttribute("disabled") ||
                        null != t.getAttribute("hidden") ||
                        "true" === t.getAttribute("aria-hidden"),
                      n =
                        0 <= t.tabIndex &&
                        0 < t.getBoundingClientRect().width &&
                        !t.classList.contains(o) &&
                        !e,
                      i = !1;
                    if (n) {
                      var r = getComputedStyle(t);
                      i = "none" === r.display || "hidden" === r.visibility;
                    }
                    return n && !i;
                  });
              }),
              (r.prototype.createSentinel = function () {
                var t = document.createElement("div");
                return (
                  t.setAttribute("tabindex", "0"),
                  t.setAttribute("aria-hidden", "true"),
                  t.classList.add(o),
                  t
                );
              }),
              r);
          function r(t, e) {
            void 0 === e && (e = {}),
              (this.root = t),
              (this.options = e),
              (this.elFocusedBeforeTrapFocus = null);
          }
          e.FocusTrap = i;
        },
        function (t, e, n) {
          "use strict";
          var i;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.InteractionTrigger = void 0),
            ((i = e.InteractionTrigger || (e.InteractionTrigger = {}))[
              (i.UNSPECIFIED = 0)
            ] = "UNSPECIFIED"),
            (i[(i.CLICK = 1)] = "CLICK"),
            (i[(i.BACKSPACE_KEY = 2)] = "BACKSPACE_KEY"),
            (i[(i.DELETE_KEY = 3)] = "DELETE_KEY"),
            (i[(i.SPACEBAR_KEY = 4)] = "SPACEBAR_KEY"),
            (i[(i.ENTER_KEY = 5)] = "ENTER_KEY"),
            (e.strings = {
              ARIA_HIDDEN: "aria-hidden",
              INTERACTION_EVENT: "MDCChipTrailingAction:interaction",
              NAVIGATION_EVENT: "MDCChipTrailingAction:navigation",
              TAB_INDEX: "tabindex",
            });
        },
        function (t, e, n) {
          "use strict";
          var i, r;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.jumpChipKeys =
              e.navigationKeys =
              e.cssClasses =
              e.strings =
              e.EventSource =
              e.Direction =
                void 0),
            ((i = e.Direction || (e.Direction = {})).LEFT = "left"),
            (i.RIGHT = "right"),
            ((r = e.EventSource || (e.EventSource = {})).PRIMARY = "primary"),
            (r.TRAILING = "trailing"),
            (r.NONE = "none"),
            (e.strings = {
              ADDED_ANNOUNCEMENT_ATTRIBUTE: "data-mdc-chip-added-announcement",
              ARIA_CHECKED: "aria-checked",
              ARROW_DOWN_KEY: "ArrowDown",
              ARROW_LEFT_KEY: "ArrowLeft",
              ARROW_RIGHT_KEY: "ArrowRight",
              ARROW_UP_KEY: "ArrowUp",
              BACKSPACE_KEY: "Backspace",
              CHECKMARK_SELECTOR: ".mdc-chip__checkmark",
              DELETE_KEY: "Delete",
              END_KEY: "End",
              ENTER_KEY: "Enter",
              ENTRY_ANIMATION_NAME: "mdc-chip-entry",
              HOME_KEY: "Home",
              IE_ARROW_DOWN_KEY: "Down",
              IE_ARROW_LEFT_KEY: "Left",
              IE_ARROW_RIGHT_KEY: "Right",
              IE_ARROW_UP_KEY: "Up",
              IE_DELETE_KEY: "Del",
              INTERACTION_EVENT: "MDCChip:interaction",
              LEADING_ICON_SELECTOR: ".mdc-chip__icon--leading",
              NAVIGATION_EVENT: "MDCChip:navigation",
              PRIMARY_ACTION_SELECTOR: ".mdc-chip__primary-action",
              REMOVED_ANNOUNCEMENT_ATTRIBUTE:
                "data-mdc-chip-removed-announcement",
              REMOVAL_EVENT: "MDCChip:removal",
              SELECTION_EVENT: "MDCChip:selection",
              SPACEBAR_KEY: " ",
              TAB_INDEX: "tabindex",
              TRAILING_ACTION_SELECTOR: ".mdc-chip-trailing-action",
              TRAILING_ICON_INTERACTION_EVENT:
                "MDCChip:trailingIconInteraction",
              TRAILING_ICON_SELECTOR: ".mdc-chip__icon--trailing",
            }),
            (e.cssClasses = {
              CHECKMARK: "mdc-chip__checkmark",
              CHIP_EXIT: "mdc-chip--exit",
              DELETABLE: "mdc-chip--deletable",
              EDITABLE: "mdc-chip--editable",
              EDITING: "mdc-chip--editing",
              HIDDEN_LEADING_ICON: "mdc-chip__icon--leading-hidden",
              LEADING_ICON: "mdc-chip__icon--leading",
              PRIMARY_ACTION: "mdc-chip__primary-action",
              PRIMARY_ACTION_FOCUSED: "mdc-chip--primary-action-focused",
              SELECTED: "mdc-chip--selected",
              TEXT: "mdc-chip__text",
              TRAILING_ACTION: "mdc-chip__trailing-action",
              TRAILING_ICON: "mdc-chip__icon--trailing",
            }),
            (e.navigationKeys = new Set()),
            e.navigationKeys.add(e.strings.ARROW_LEFT_KEY),
            e.navigationKeys.add(e.strings.ARROW_RIGHT_KEY),
            e.navigationKeys.add(e.strings.ARROW_DOWN_KEY),
            e.navigationKeys.add(e.strings.ARROW_UP_KEY),
            e.navigationKeys.add(e.strings.END_KEY),
            e.navigationKeys.add(e.strings.HOME_KEY),
            e.navigationKeys.add(e.strings.IE_ARROW_LEFT_KEY),
            e.navigationKeys.add(e.strings.IE_ARROW_RIGHT_KEY),
            e.navigationKeys.add(e.strings.IE_ARROW_DOWN_KEY),
            e.navigationKeys.add(e.strings.IE_ARROW_UP_KEY),
            (e.jumpChipKeys = new Set()),
            e.jumpChipKeys.add(e.strings.ARROW_UP_KEY),
            e.jumpChipKeys.add(e.strings.ARROW_DOWN_KEY),
            e.jumpChipKeys.add(e.strings.HOME_KEY),
            e.jumpChipKeys.add(e.strings.END_KEY),
            e.jumpChipKeys.add(e.strings.IE_ARROW_UP_KEY),
            e.jumpChipKeys.add(e.strings.IE_ARROW_DOWN_KEY);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            h =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCMenuSurfaceFoundation = void 0);
          var s,
            a = n(0),
            E = n(8),
            c =
              ((s = a.MDCFoundation),
              r(g, s),
              Object.defineProperty(g, "cssClasses", {
                get: function () {
                  return E.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(g, "strings", {
                get: function () {
                  return E.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(g, "numbers", {
                get: function () {
                  return E.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(g, "Corner", {
                get: function () {
                  return E.Corner;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(g, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    hasAnchor: function () {
                      return !1;
                    },
                    isElementInContainer: function () {
                      return !1;
                    },
                    isFocused: function () {
                      return !1;
                    },
                    isRtl: function () {
                      return !1;
                    },
                    getInnerDimensions: function () {
                      return { height: 0, width: 0 };
                    },
                    getAnchorDimensions: function () {
                      return null;
                    },
                    getWindowDimensions: function () {
                      return { height: 0, width: 0 };
                    },
                    getBodyDimensions: function () {
                      return { height: 0, width: 0 };
                    },
                    getWindowScroll: function () {
                      return { x: 0, y: 0 };
                    },
                    setPosition: function () {},
                    setMaxHeight: function () {},
                    setTransformOrigin: function () {},
                    saveFocus: function () {},
                    restoreFocus: function () {},
                    notifyClose: function () {},
                    notifyClosing: function () {},
                    notifyOpen: function () {},
                    notifyOpening: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (g.prototype.init = function () {
                var t = g.cssClasses,
                  e = t.ROOT,
                  n = t.OPEN;
                if (!this.adapter.hasClass(e))
                  throw new Error(e + " class required in root element.");
                this.adapter.hasClass(n) && (this.isSurfaceOpen = !0);
              }),
              (g.prototype.destroy = function () {
                clearTimeout(this.openAnimationEndTimerId),
                  clearTimeout(this.closeAnimationEndTimerId),
                  cancelAnimationFrame(this.animationRequestId);
              }),
              (g.prototype.setAnchorCorner = function (t) {
                this.anchorCorner = t;
              }),
              (g.prototype.flipCornerHorizontally = function () {
                this.originCorner = this.originCorner ^ E.CornerBit.RIGHT;
              }),
              (g.prototype.setAnchorMargin = function (t) {
                (this.anchorMargin.top = t.top || 0),
                  (this.anchorMargin.right = t.right || 0),
                  (this.anchorMargin.bottom = t.bottom || 0),
                  (this.anchorMargin.left = t.left || 0);
              }),
              (g.prototype.setIsHoisted = function (t) {
                this.isHoistedElement = t;
              }),
              (g.prototype.setFixedPosition = function (t) {
                this.isFixedPosition = t;
              }),
              (g.prototype.isFixed = function () {
                return this.isFixedPosition;
              }),
              (g.prototype.setAbsolutePosition = function (t, e) {
                (this.position.x = this.isFinite(t) ? t : 0),
                  (this.position.y = this.isFinite(e) ? e : 0);
              }),
              (g.prototype.setIsHorizontallyCenteredOnViewport = function (t) {
                this.isHorizontallyCenteredOnViewport = t;
              }),
              (g.prototype.setQuickOpen = function (t) {
                this.isQuickOpen = t;
              }),
              (g.prototype.setMaxHeight = function (t) {
                this.maxHeight = t;
              }),
              (g.prototype.setOpenBottomBias = function (t) {
                this.openBottomBias = t;
              }),
              (g.prototype.isOpen = function () {
                return this.isSurfaceOpen;
              }),
              (g.prototype.open = function () {
                var t = this;
                this.isSurfaceOpen ||
                  (this.adapter.notifyOpening(),
                  this.adapter.saveFocus(),
                  this.isQuickOpen
                    ? ((this.isSurfaceOpen = !0),
                      this.adapter.addClass(g.cssClasses.OPEN),
                      (this.dimensions = this.adapter.getInnerDimensions()),
                      this.autoposition(),
                      this.adapter.notifyOpen())
                    : (this.adapter.addClass(g.cssClasses.ANIMATING_OPEN),
                      (this.animationRequestId = requestAnimationFrame(
                        function () {
                          (t.dimensions = t.adapter.getInnerDimensions()),
                            t.autoposition(),
                            t.adapter.addClass(g.cssClasses.OPEN),
                            (t.openAnimationEndTimerId = setTimeout(
                              function () {
                                (t.openAnimationEndTimerId = 0),
                                  t.adapter.removeClass(
                                    g.cssClasses.ANIMATING_OPEN
                                  ),
                                  t.adapter.notifyOpen();
                              },
                              E.numbers.TRANSITION_OPEN_DURATION
                            ));
                        }
                      )),
                      (this.isSurfaceOpen = !0)));
              }),
              (g.prototype.close = function (t) {
                var e = this;
                if ((void 0 === t && (t = !1), this.isSurfaceOpen)) {
                  if ((this.adapter.notifyClosing(), this.isQuickOpen))
                    return (
                      (this.isSurfaceOpen = !1),
                      t || this.maybeRestoreFocus(),
                      this.adapter.removeClass(g.cssClasses.OPEN),
                      this.adapter.removeClass(g.cssClasses.IS_OPEN_BELOW),
                      void this.adapter.notifyClose()
                    );
                  this.adapter.addClass(g.cssClasses.ANIMATING_CLOSED),
                    requestAnimationFrame(function () {
                      e.adapter.removeClass(g.cssClasses.OPEN),
                        e.adapter.removeClass(g.cssClasses.IS_OPEN_BELOW),
                        (e.closeAnimationEndTimerId = setTimeout(function () {
                          (e.closeAnimationEndTimerId = 0),
                            e.adapter.removeClass(
                              g.cssClasses.ANIMATING_CLOSED
                            ),
                            e.adapter.notifyClose();
                        }, E.numbers.TRANSITION_CLOSE_DURATION));
                    }),
                    (this.isSurfaceOpen = !1),
                    t || this.maybeRestoreFocus();
                }
              }),
              (g.prototype.handleBodyClick = function (t) {
                var e = t.target;
                this.adapter.isElementInContainer(e) || this.close();
              }),
              (g.prototype.handleKeydown = function (t) {
                var e = t.keyCode;
                ("Escape" !== t.key && 27 !== e) || this.close();
              }),
              (g.prototype.autoposition = function () {
                var t;
                this.measurements = this.getAutoLayoutmeasurements();
                var e = this.getoriginCorner(),
                  n = this.getMenuSurfaceMaxHeight(e),
                  i = this.hasBit(e, E.CornerBit.BOTTOM) ? "bottom" : "top",
                  r = this.hasBit(e, E.CornerBit.RIGHT) ? "right" : "left",
                  o = this.getHorizontalOriginOffset(e),
                  s = this.getVerticalOriginOffset(e),
                  a = this.measurements,
                  c = a.anchorSize,
                  u = a.surfaceSize,
                  l = (((t = {})[r] = o), (t[i] = s), t);
                c.width / u.width >
                  E.numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO &&
                  (r = "center"),
                  (this.isHoistedElement || this.isFixedPosition) &&
                    this.adjustPositionForHoistedElement(l),
                  this.adapter.setTransformOrigin(r + " " + i),
                  this.adapter.setPosition(l),
                  this.adapter.setMaxHeight(n ? n + "px" : ""),
                  this.hasBit(e, E.CornerBit.BOTTOM) ||
                    this.adapter.addClass(g.cssClasses.IS_OPEN_BELOW);
              }),
              (g.prototype.getAutoLayoutmeasurements = function () {
                var t = this.adapter.getAnchorDimensions(),
                  e = this.adapter.getBodyDimensions(),
                  n = this.adapter.getWindowDimensions(),
                  i = this.adapter.getWindowScroll();
                return {
                  anchorSize: (t = t || {
                    top: this.position.y,
                    right: this.position.x,
                    bottom: this.position.y,
                    left: this.position.x,
                    width: 0,
                    height: 0,
                  }),
                  bodySize: e,
                  surfaceSize: this.dimensions,
                  viewportDistance: {
                    top: t.top,
                    right: n.width - t.right,
                    bottom: n.height - t.bottom,
                    left: t.left,
                  },
                  viewportSize: n,
                  windowScroll: i,
                };
              }),
              (g.prototype.getoriginCorner = function () {
                var t,
                  e,
                  n = this.originCorner,
                  i = this.measurements,
                  r = i.viewportDistance,
                  o = i.anchorSize,
                  s = i.surfaceSize,
                  a = g.numbers.MARGIN_TO_EDGE;
                !(
                  0 <
                  (e = this.hasBit(this.anchorCorner, E.CornerBit.BOTTOM)
                    ? ((t = r.top - a + this.anchorMargin.bottom),
                      r.bottom - a - this.anchorMargin.bottom)
                    : ((t = r.top - a + this.anchorMargin.top),
                      r.bottom - a + o.height - this.anchorMargin.top)) -
                    s.height
                ) &&
                  t > e + this.openBottomBias &&
                  (n = this.setBit(n, E.CornerBit.BOTTOM));
                var c,
                  u,
                  l = this.adapter.isRtl(),
                  d = this.hasBit(this.anchorCorner, E.CornerBit.FLIP_RTL),
                  p =
                    this.hasBit(this.anchorCorner, E.CornerBit.RIGHT) ||
                    this.hasBit(n, E.CornerBit.RIGHT),
                  h = !1;
                u = (h = l && d ? !p : p)
                  ? ((c = r.left + o.width + this.anchorMargin.right),
                    r.right - this.anchorMargin.right)
                  : ((c = r.left + this.anchorMargin.left),
                    r.right + o.width - this.anchorMargin.left);
                var f = 0 < c - s.width,
                  y = 0 < u - s.width,
                  C =
                    this.hasBit(n, E.CornerBit.FLIP_RTL) &&
                    this.hasBit(n, E.CornerBit.RIGHT);
                return (
                  (y && C && l) || (!f && C)
                    ? (n = this.unsetBit(n, E.CornerBit.RIGHT))
                    : ((f && h && l) || (f && !h && p) || (!y && u <= c)) &&
                      (n = this.setBit(n, E.CornerBit.RIGHT)),
                  n
                );
              }),
              (g.prototype.getMenuSurfaceMaxHeight = function (t) {
                if (0 < this.maxHeight) return this.maxHeight;
                var e = this.measurements.viewportDistance,
                  n = 0,
                  i = this.hasBit(t, E.CornerBit.BOTTOM),
                  r = this.hasBit(this.anchorCorner, E.CornerBit.BOTTOM),
                  o = g.numbers.MARGIN_TO_EDGE;
                return (
                  i
                    ? ((n = e.top + this.anchorMargin.top - o),
                      r || (n += this.measurements.anchorSize.height))
                    : ((n =
                        e.bottom -
                        this.anchorMargin.bottom +
                        this.measurements.anchorSize.height -
                        o),
                      r && (n -= this.measurements.anchorSize.height)),
                  n
                );
              }),
              (g.prototype.getHorizontalOriginOffset = function (t) {
                var e = this.measurements.anchorSize,
                  n = this.hasBit(t, E.CornerBit.RIGHT),
                  i = this.hasBit(this.anchorCorner, E.CornerBit.RIGHT);
                if (n) {
                  var r = i
                    ? e.width - this.anchorMargin.left
                    : this.anchorMargin.right;
                  return this.isHoistedElement || this.isFixedPosition
                    ? r -
                        (this.measurements.viewportSize.width -
                          this.measurements.bodySize.width)
                    : r;
                }
                return i
                  ? e.width - this.anchorMargin.right
                  : this.anchorMargin.left;
              }),
              (g.prototype.getVerticalOriginOffset = function (t) {
                var e = this.measurements.anchorSize,
                  n = this.hasBit(t, E.CornerBit.BOTTOM),
                  i = this.hasBit(this.anchorCorner, E.CornerBit.BOTTOM);
                return n
                  ? i
                    ? e.height - this.anchorMargin.top
                    : -this.anchorMargin.bottom
                  : i
                  ? e.height + this.anchorMargin.bottom
                  : this.anchorMargin.top;
              }),
              (g.prototype.adjustPositionForHoistedElement = function (t) {
                var e,
                  n,
                  i = this.measurements,
                  r = i.windowScroll,
                  o = i.viewportDistance,
                  s = i.surfaceSize,
                  a = i.viewportSize,
                  c = Object.keys(t);
                try {
                  for (var u = h(c), l = u.next(); !l.done; l = u.next()) {
                    var d = l.value,
                      p = t[d] || 0;
                    !this.isHorizontallyCenteredOnViewport ||
                    ("left" !== d && "right" !== d)
                      ? ((p += o[d]),
                        this.isFixedPosition ||
                          ("top" === d
                            ? (p += r.y)
                            : "bottom" === d
                            ? (p -= r.y)
                            : "left" === d
                            ? (p += r.x)
                            : (p -= r.x)),
                        (t[d] = p))
                      : (t[d] = (a.width - s.width) / 2);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    l && !l.done && (n = u.return) && n.call(u);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (g.prototype.maybeRestoreFocus = function () {
                var t = this,
                  e = this.adapter.isFocused(),
                  n = this.adapter.getOwnerDocument
                    ? this.adapter.getOwnerDocument()
                    : document,
                  i =
                    n.activeElement &&
                    this.adapter.isElementInContainer(n.activeElement);
                (e || i) &&
                  setTimeout(function () {
                    t.adapter.restoreFocus();
                  }, E.numbers.TOUCH_EVENT_WAIT_MS);
              }),
              (g.prototype.hasBit = function (t, e) {
                return Boolean(t & e);
              }),
              (g.prototype.setBit = function (t, e) {
                return t | e;
              }),
              (g.prototype.unsetBit = function (t, e) {
                return t ^ e;
              }),
              (g.prototype.isFinite = function (t) {
                return "number" == typeof t && isFinite(t);
              }),
              g);
          function g(t) {
            var e = s.call(this, o(o({}, g.defaultAdapter), t)) || this;
            return (
              (e.isSurfaceOpen = !1),
              (e.isQuickOpen = !1),
              (e.isHoistedElement = !1),
              (e.isFixedPosition = !1),
              (e.isHorizontallyCenteredOnViewport = !1),
              (e.maxHeight = 0),
              (e.openBottomBias = 0),
              (e.openAnimationEndTimerId = 0),
              (e.closeAnimationEndTimerId = 0),
              (e.animationRequestId = 0),
              (e.anchorCorner = E.Corner.TOP_START),
              (e.originCorner = E.Corner.TOP_START),
              (e.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }),
              (e.position = { x: 0, y: 0 }),
              e
            );
          }
          (e.MDCMenuSurfaceFoundation = c), (e.default = c);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.DefaultFocusState =
              e.numbers =
              e.strings =
              e.cssClasses =
                void 0);
          e.cssClasses = {
            MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
            MENU_SELECTION_GROUP: "mdc-menu__selection-group",
            ROOT: "mdc-menu",
          };
          e.strings = {
            ARIA_CHECKED_ATTR: "aria-checked",
            ARIA_DISABLED_ATTR: "aria-disabled",
            CHECKBOX_SELECTOR: 'input[type="checkbox"]',
            LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
            SELECTED_EVENT: "MDCMenu:selected",
            SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus",
          };
          var i, r;
          (e.numbers = { FOCUS_ROOT_INDEX: -1 }),
            ((r = i = i || {})[(r.NONE = 0)] = "NONE"),
            (r[(r.LIST_ROOT = 1)] = "LIST_ROOT"),
            (r[(r.FIRST_ITEM = 2)] = "FIRST_ITEM"),
            (r[(r.LAST_ITEM = 3)] = "LAST_ITEM"),
            (e.DefaultFocusState = i);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.numbers = e.strings = e.cssClasses = void 0);
          e.cssClasses = {
            CLOSING: "mdc-snackbar--closing",
            OPEN: "mdc-snackbar--open",
            OPENING: "mdc-snackbar--opening",
          };
          e.strings = {
            ACTION_SELECTOR: ".mdc-snackbar__action",
            ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
            CLOSED_EVENT: "MDCSnackbar:closed",
            CLOSING_EVENT: "MDCSnackbar:closing",
            DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
            LABEL_SELECTOR: ".mdc-snackbar__label",
            OPENED_EVENT: "MDCSnackbar:opened",
            OPENING_EVENT: "MDCSnackbar:opening",
            REASON_ACTION: "action",
            REASON_DISMISS: "dismiss",
            SURFACE_SELECTOR: ".mdc-snackbar__surface",
          };
          e.numbers = {
            DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
            INDETERMINATE: -1,
            MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
            MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
            SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
            SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
            ARIA_LIVE_DELAY_MS: 1e3,
          };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabIndicatorFoundation = void 0);
          var s,
            a = n(0),
            c = n(104),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    computeContentClientRect: function () {
                      return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                      };
                    },
                    setContentStyleProperty: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.computeContentClientRect = function () {
                return this.adapter.computeContentClientRect();
              }),
              l);
          function l(t) {
            return s.call(this, o(o({}, l.defaultAdapter), t)) || this;
          }
          (e.MDCTabIndicatorFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          var i, r;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Action =
              e.CloseReason =
              e.selectors =
              e.events =
              e.numbers =
              e.cssClasses =
                void 0),
            (e.cssClasses = {
              CLOSING: "mdc-banner--closing",
              OPEN: "mdc-banner--open",
              OPENING: "mdc-banner--opening",
            }),
            (e.numbers = {
              BANNER_ANIMATION_CLOSE_TIME_MS: 250,
              BANNER_ANIMATION_OPEN_TIME_MS: 300,
            }),
            (e.events = {
              CLOSED: "MDCBanner:closed",
              CLOSING: "MDCBanner:closing",
              OPENED: "MDCBanner:opened",
              OPENING: "MDCBanner:opening",
              ACTION_CLICKED: "MDCBanner:actionClicked",
            }),
            (e.selectors = {
              CONTENT: ".mdc-banner__content",
              PRIMARY_ACTION: ".mdc-banner__primary-action",
              SECONDARY_ACTION: ".mdc-banner__secondary-action",
              TEXT: ".mdc-banner__text",
            }),
            ((i = e.CloseReason || (e.CloseReason = {}))[(i.PRIMARY = 0)] =
              "PRIMARY"),
            (i[(i.SECONDARY = 1)] = "SECONDARY"),
            (i[(i.UNSPECIFIED = 2)] = "UNSPECIFIED"),
            ((r = e.Action || (e.Action = {}))[(r.PRIMARY = 0)] = "PRIMARY"),
            (r[(r.SECONDARY = 1)] = "SECONDARY"),
            (r[(r.UNKNOWN = 2)] = "UNKNOWN");
        },
        function (t, e, n) {
          "use strict";
          var s;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getNormalizedEventCoords = e.supportsCssVariables = void 0),
            (e.supportsCssVariables = function (t, e) {
              void 0 === e && (e = !1);
              var n,
                i = t.CSS;
              if ("boolean" == typeof s && !e) return s;
              if (!(i && "function" == typeof i.supports)) return !1;
              var r = i.supports("--css-vars", "yes"),
                o =
                  i.supports("(--css-vars: yes)") &&
                  i.supports("color", "#00000000");
              return (n = r || o), e || (s = n), n;
            }),
            (e.getNormalizedEventCoords = function (t, e, n) {
              if (!t) return { x: 0, y: 0 };
              var i,
                r,
                o = e.x,
                s = e.y,
                a = o + n.left,
                c = s + n.top;
              if ("touchstart" === t.type) {
                var u = t;
                (i = u.changedTouches[0].pageX - a),
                  (r = u.changedTouches[0].pageY - c);
              } else {
                var l = t;
                (i = l.pageX - a), (r = l.pageY - c);
              }
              return { x: i, y: r };
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.numbers = e.strings = e.cssClasses = void 0),
            (e.cssClasses = {
              ANIM_CHECKED_INDETERMINATE:
                "mdc-checkbox--anim-checked-indeterminate",
              ANIM_CHECKED_UNCHECKED: "mdc-checkbox--anim-checked-unchecked",
              ANIM_INDETERMINATE_CHECKED:
                "mdc-checkbox--anim-indeterminate-checked",
              ANIM_INDETERMINATE_UNCHECKED:
                "mdc-checkbox--anim-indeterminate-unchecked",
              ANIM_UNCHECKED_CHECKED: "mdc-checkbox--anim-unchecked-checked",
              ANIM_UNCHECKED_INDETERMINATE:
                "mdc-checkbox--anim-unchecked-indeterminate",
              BACKGROUND: "mdc-checkbox__background",
              CHECKED: "mdc-checkbox--checked",
              CHECKMARK: "mdc-checkbox__checkmark",
              CHECKMARK_PATH: "mdc-checkbox__checkmark-path",
              DISABLED: "mdc-checkbox--disabled",
              INDETERMINATE: "mdc-checkbox--indeterminate",
              MIXEDMARK: "mdc-checkbox__mixedmark",
              NATIVE_CONTROL: "mdc-checkbox__native-control",
              ROOT: "mdc-checkbox",
              SELECTED: "mdc-checkbox--selected",
              UPGRADED: "mdc-checkbox--upgraded",
            }),
            (e.strings = {
              ARIA_CHECKED_ATTR: "aria-checked",
              ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
              DATA_INDETERMINATE_ATTR: "data-indeterminate",
              NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
              TRANSITION_STATE_CHECKED: "checked",
              TRANSITION_STATE_INDETERMINATE: "indeterminate",
              TRANSITION_STATE_INIT: "init",
              TRANSITION_STATE_UNCHECKED: "unchecked",
            }),
            (e.numbers = { ANIM_END_LATCH_MS: 250 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCChipFoundation = void 0);
          var s,
            a,
            c = n(0),
            u = n(13),
            l = { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 };
          ((a = s = s || {})[(a.SHOULD_FOCUS = 0)] = "SHOULD_FOCUS"),
            (a[(a.SHOULD_NOT_FOCUS = 1)] = "SHOULD_NOT_FOCUS");
          var d,
            p =
              ((d = c.MDCFoundation),
              r(h, d),
              Object.defineProperty(h, "strings", {
                get: function () {
                  return u.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "cssClasses", {
                get: function () {
                  return u.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    addClassToLeadingIcon: function () {},
                    eventTargetHasClass: function () {
                      return !1;
                    },
                    focusPrimaryAction: function () {},
                    focusTrailingAction: function () {},
                    getAttribute: function () {
                      return null;
                    },
                    getCheckmarkBoundingClientRect: function () {
                      return l;
                    },
                    getComputedStyleValue: function () {
                      return "";
                    },
                    getRootBoundingClientRect: function () {
                      return l;
                    },
                    hasClass: function () {
                      return !1;
                    },
                    hasLeadingIcon: function () {
                      return !1;
                    },
                    isRTL: function () {
                      return !1;
                    },
                    isTrailingActionNavigable: function () {
                      return !1;
                    },
                    notifyEditFinish: function () {},
                    notifyEditStart: function () {},
                    notifyInteraction: function () {},
                    notifyNavigation: function () {},
                    notifyRemoval: function () {},
                    notifySelection: function () {},
                    notifyTrailingIconInteraction: function () {},
                    removeClass: function () {},
                    removeClassFromLeadingIcon: function () {},
                    removeTrailingActionFocus: function () {},
                    setPrimaryActionAttr: function () {},
                    setStyleProperty: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (h.prototype.isSelected = function () {
                return this.adapter.hasClass(u.cssClasses.SELECTED);
              }),
              (h.prototype.isEditable = function () {
                return this.adapter.hasClass(u.cssClasses.EDITABLE);
              }),
              (h.prototype.isEditing = function () {
                return this.adapter.hasClass(u.cssClasses.EDITING);
              }),
              (h.prototype.setSelected = function (t) {
                this.setSelectedImpl(t), this.notifySelection(t);
              }),
              (h.prototype.setSelectedFromChipSet = function (t, e) {
                this.setSelectedImpl(t), e && this.notifyIgnoredSelection(t);
              }),
              (h.prototype.getShouldRemoveOnTrailingIconClick = function () {
                return this.shouldRemoveOnTrailingIconClick;
              }),
              (h.prototype.setShouldRemoveOnTrailingIconClick = function (t) {
                this.shouldRemoveOnTrailingIconClick = t;
              }),
              (h.prototype.setShouldFocusPrimaryActionOnClick = function (t) {
                this.shouldFocusPrimaryActionOnClick = t;
              }),
              (h.prototype.getDimensions = function () {
                function t() {
                  return e.adapter.getRootBoundingClientRect();
                }
                var e = this;
                if (!this.adapter.hasLeadingIcon()) {
                  var n = e.adapter.getCheckmarkBoundingClientRect();
                  if (n) {
                    var i = t();
                    return {
                      bottom: i.bottom,
                      height: i.height,
                      left: i.left,
                      right: i.right,
                      top: i.top,
                      width: i.width + n.height,
                    };
                  }
                }
                return t();
              }),
              (h.prototype.beginExit = function () {
                this.adapter.addClass(u.cssClasses.CHIP_EXIT);
              }),
              (h.prototype.handleClick = function () {
                this.adapter.notifyInteraction(),
                  this.setPrimaryActionFocusable(this.getFocusBehavior());
              }),
              (h.prototype.handleDoubleClick = function () {
                this.isEditable() && this.startEditing();
              }),
              (h.prototype.handleTransitionEnd = function (t) {
                var e = this,
                  n = this.adapter.eventTargetHasClass(
                    t.target,
                    u.cssClasses.CHIP_EXIT
                  ),
                  i = "width" === t.propertyName,
                  r = "opacity" === t.propertyName;
                if (n && r) {
                  var o = this.adapter.getComputedStyleValue("width");
                  requestAnimationFrame(function () {
                    e.adapter.setStyleProperty("width", o),
                      e.adapter.setStyleProperty("padding", "0"),
                      e.adapter.setStyleProperty("margin", "0"),
                      requestAnimationFrame(function () {
                        e.adapter.setStyleProperty("width", "0");
                      });
                  });
                } else {
                  if (n && i) {
                    this.removeFocus();
                    var s = this.adapter.getAttribute(
                      u.strings.REMOVED_ANNOUNCEMENT_ATTRIBUTE
                    );
                    this.adapter.notifyRemoval(s);
                  }
                  if (r) {
                    var a =
                        this.adapter.eventTargetHasClass(
                          t.target,
                          u.cssClasses.LEADING_ICON
                        ) && this.adapter.hasClass(u.cssClasses.SELECTED),
                      c =
                        this.adapter.eventTargetHasClass(
                          t.target,
                          u.cssClasses.CHECKMARK
                        ) && !this.adapter.hasClass(u.cssClasses.SELECTED);
                    a
                      ? this.adapter.addClassToLeadingIcon(
                          u.cssClasses.HIDDEN_LEADING_ICON
                        )
                      : c &&
                        this.adapter.removeClassFromLeadingIcon(
                          u.cssClasses.HIDDEN_LEADING_ICON
                        );
                  }
                }
              }),
              (h.prototype.handleFocusIn = function (t) {
                this.eventFromPrimaryAction(t) &&
                  this.adapter.addClass(u.cssClasses.PRIMARY_ACTION_FOCUSED);
              }),
              (h.prototype.handleFocusOut = function (t) {
                this.eventFromPrimaryAction(t) &&
                  (this.isEditing() && this.finishEditing(),
                  this.adapter.removeClass(
                    u.cssClasses.PRIMARY_ACTION_FOCUSED
                  ));
              }),
              (h.prototype.handleTrailingActionInteraction = function () {
                this.adapter.notifyTrailingIconInteraction(), this.removeChip();
              }),
              (h.prototype.handleKeydown = function (t) {
                if (!this.isEditing())
                  return (
                    this.isEditable() &&
                      this.shouldStartEditing(t) &&
                      (t.preventDefault(), this.startEditing()),
                    this.shouldNotifyInteraction(t)
                      ? (this.adapter.notifyInteraction(),
                        void this.setPrimaryActionFocusable(
                          this.getFocusBehavior()
                        ))
                      : this.isDeleteAction(t)
                      ? (t.preventDefault(), void this.removeChip())
                      : void (
                          u.navigationKeys.has(t.key) &&
                          (t.preventDefault(),
                          this.focusNextAction(t.key, u.EventSource.PRIMARY))
                        )
                  );
                this.shouldFinishEditing(t) &&
                  (t.preventDefault(), this.finishEditing());
              }),
              (h.prototype.handleTrailingActionNavigation = function (t) {
                this.focusNextAction(t.detail.key, u.EventSource.TRAILING);
              }),
              (h.prototype.removeFocus = function () {
                this.adapter.setPrimaryActionAttr(u.strings.TAB_INDEX, "-1"),
                  this.adapter.removeTrailingActionFocus();
              }),
              (h.prototype.focusPrimaryAction = function () {
                this.setPrimaryActionFocusable(s.SHOULD_FOCUS);
              }),
              (h.prototype.focusTrailingAction = function () {
                if (this.adapter.isTrailingActionNavigable())
                  return (
                    this.adapter.setPrimaryActionAttr(
                      u.strings.TAB_INDEX,
                      "-1"
                    ),
                    void this.adapter.focusTrailingAction()
                  );
                this.focusPrimaryAction();
              }),
              (h.prototype.setPrimaryActionFocusable = function (t) {
                this.adapter.setPrimaryActionAttr(u.strings.TAB_INDEX, "0"),
                  t === s.SHOULD_FOCUS && this.adapter.focusPrimaryAction(),
                  this.adapter.removeTrailingActionFocus();
              }),
              (h.prototype.getFocusBehavior = function () {
                return this.shouldFocusPrimaryActionOnClick
                  ? s.SHOULD_FOCUS
                  : s.SHOULD_NOT_FOCUS;
              }),
              (h.prototype.focusNextAction = function (t, e) {
                var n = this.adapter.isTrailingActionNavigable(),
                  i = this.getDirection(t);
                !u.jumpChipKeys.has(t) && n
                  ? e !== u.EventSource.PRIMARY || i !== u.Direction.RIGHT
                    ? e !== u.EventSource.TRAILING || i !== u.Direction.LEFT
                      ? this.adapter.notifyNavigation(t, u.EventSource.NONE)
                      : this.focusPrimaryAction()
                    : this.focusTrailingAction()
                  : this.adapter.notifyNavigation(t, e);
              }),
              (h.prototype.getDirection = function (t) {
                var e = this.adapter.isRTL(),
                  n =
                    t === u.strings.ARROW_LEFT_KEY ||
                    t === u.strings.IE_ARROW_LEFT_KEY,
                  i =
                    t === u.strings.ARROW_RIGHT_KEY ||
                    t === u.strings.IE_ARROW_RIGHT_KEY;
                return (!e && n) || (e && i)
                  ? u.Direction.LEFT
                  : u.Direction.RIGHT;
              }),
              (h.prototype.removeChip = function () {
                this.shouldRemoveOnTrailingIconClick && this.beginExit();
              }),
              (h.prototype.shouldStartEditing = function (t) {
                return (
                  this.eventFromPrimaryAction(t) &&
                  t.key === u.strings.ENTER_KEY
                );
              }),
              (h.prototype.shouldFinishEditing = function (t) {
                return t.key === u.strings.ENTER_KEY;
              }),
              (h.prototype.shouldNotifyInteraction = function (t) {
                return (
                  t.key === u.strings.ENTER_KEY ||
                  t.key === u.strings.SPACEBAR_KEY
                );
              }),
              (h.prototype.isDeleteAction = function (t) {
                return (
                  this.adapter.hasClass(u.cssClasses.DELETABLE) &&
                  (t.key === u.strings.BACKSPACE_KEY ||
                    t.key === u.strings.DELETE_KEY ||
                    t.key === u.strings.IE_DELETE_KEY)
                );
              }),
              (h.prototype.setSelectedImpl = function (t) {
                t
                  ? (this.adapter.addClass(u.cssClasses.SELECTED),
                    this.adapter.setPrimaryActionAttr(
                      u.strings.ARIA_CHECKED,
                      "true"
                    ))
                  : (this.adapter.removeClass(u.cssClasses.SELECTED),
                    this.adapter.setPrimaryActionAttr(
                      u.strings.ARIA_CHECKED,
                      "false"
                    ));
              }),
              (h.prototype.notifySelection = function (t) {
                this.adapter.notifySelection(t, !1);
              }),
              (h.prototype.notifyIgnoredSelection = function (t) {
                this.adapter.notifySelection(t, !0);
              }),
              (h.prototype.eventFromPrimaryAction = function (t) {
                return this.adapter.eventTargetHasClass(
                  t.target,
                  u.cssClasses.PRIMARY_ACTION
                );
              }),
              (h.prototype.startEditing = function () {
                this.adapter.addClass(u.cssClasses.EDITING),
                  this.adapter.notifyEditStart();
              }),
              (h.prototype.finishEditing = function () {
                this.adapter.removeClass(u.cssClasses.EDITING),
                  this.adapter.notifyEditFinish();
              }),
              h);
          function h(t) {
            var e = d.call(this, o(o({}, h.defaultAdapter), t)) || this;
            return (
              (e.shouldRemoveOnTrailingIconClick = !0),
              (e.shouldFocusPrimaryActionOnClick = !0),
              e
            );
          }
          (e.MDCChipFoundation = p), (e.default = p);
        },
        function (t, e, n) {
          "use strict";
          var i;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.events =
              e.SortValue =
              e.strings =
              e.messages =
              e.selectors =
              e.dataAttributes =
              e.attributes =
              e.cssClasses =
                void 0),
            (e.cssClasses = {
              CELL: "mdc-data-table__cell",
              CELL_NUMERIC: "mdc-data-table__cell--numeric",
              CONTENT: "mdc-data-table__content",
              HEADER_CELL: "mdc-data-table__header-cell",
              HEADER_CELL_LABEL: "mdc-data-table__header-cell-label",
              HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
              HEADER_CELL_SORTED_DESCENDING:
                "mdc-data-table__header-cell--sorted-descending",
              HEADER_CELL_WITH_SORT: "mdc-data-table__header-cell--with-sort",
              HEADER_CELL_WRAPPER: "mdc-data-table__header-cell-wrapper",
              HEADER_ROW: "mdc-data-table__header-row",
              HEADER_ROW_CHECKBOX: "mdc-data-table__header-row-checkbox",
              IN_PROGRESS: "mdc-data-table--in-progress",
              LINEAR_PROGRESS: "mdc-data-table__linear-progress",
              PAGINATION_ROWS_PER_PAGE_LABEL:
                "mdc-data-table__pagination-rows-per-page-label",
              PAGINATION_ROWS_PER_PAGE_SELECT:
                "mdc-data-table__pagination-rows-per-page-select",
              PROGRESS_INDICATOR: "mdc-data-table__progress-indicator",
              ROOT: "mdc-data-table",
              ROW: "mdc-data-table__row",
              ROW_CHECKBOX: "mdc-data-table__row-checkbox",
              ROW_SELECTED: "mdc-data-table__row--selected",
              SORT_ICON_BUTTON: "mdc-data-table__sort-icon-button",
              SORT_STATUS_LABEL: "mdc-data-table__sort-status-label",
              TABLE_CONTAINER: "mdc-data-table__table-container",
            }),
            (e.attributes = {
              ARIA_SELECTED: "aria-selected",
              ARIA_SORT: "aria-sort",
            }),
            (e.dataAttributes = {
              COLUMN_ID: "data-column-id",
              ROW_ID: "data-row-id",
            }),
            (e.selectors = {
              CONTENT: "." + e.cssClasses.CONTENT,
              HEADER_CELL: "." + e.cssClasses.HEADER_CELL,
              HEADER_CELL_WITH_SORT: "." + e.cssClasses.HEADER_CELL_WITH_SORT,
              HEADER_ROW: "." + e.cssClasses.HEADER_ROW,
              HEADER_ROW_CHECKBOX: "." + e.cssClasses.HEADER_ROW_CHECKBOX,
              PROGRESS_INDICATOR: "." + e.cssClasses.PROGRESS_INDICATOR,
              ROW: "." + e.cssClasses.ROW,
              ROW_CHECKBOX: "." + e.cssClasses.ROW_CHECKBOX,
              ROW_SELECTED: "." + e.cssClasses.ROW_SELECTED,
              SORT_ICON_BUTTON: "." + e.cssClasses.SORT_ICON_BUTTON,
              SORT_STATUS_LABEL: "." + e.cssClasses.SORT_STATUS_LABEL,
            }),
            (e.messages = {
              SORTED_IN_DESCENDING: "Sorted in descending order",
              SORTED_IN_ASCENDING: "Sorted in ascending order",
            }),
            (e.strings = {
              ARIA_SELECTED: e.attributes.ARIA_SELECTED,
              ARIA_SORT: e.attributes.ARIA_SORT,
              DATA_ROW_ID_ATTR: e.dataAttributes.ROW_ID,
              HEADER_ROW_CHECKBOX_SELECTOR: e.selectors.HEADER_ROW_CHECKBOX,
              ROW_CHECKBOX_SELECTOR: e.selectors.ROW_CHECKBOX,
              ROW_SELECTED_SELECTOR: e.selectors.ROW_SELECTED,
              ROW_SELECTOR: e.selectors.ROW,
            }),
            ((i = e.SortValue || (e.SortValue = {})).ASCENDING = "ascending"),
            (i.DESCENDING = "descending"),
            (i.NONE = "none"),
            (i.OTHER = "other"),
            (e.events = {
              ROW_CLICK: "MDCDataTable:rowClick",
              ROW_SELECTION_CHANGED: "MDCDataTable:rowSelectionChanged",
              SELECTED_ALL: "MDCDataTable:selectedAll",
              SORTED: "MDCDataTable:sorted",
              UNSELECTED_ALL: "MDCDataTable:unselectedAll",
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.AnimationFrame = void 0);
          var i =
            ((r.prototype.request = function (e, n) {
              var i = this;
              this.cancel(e);
              var t = requestAnimationFrame(function (t) {
                i.rafIDs.delete(e), n(t);
              });
              this.rafIDs.set(e, t);
            }),
            (r.prototype.cancel = function (t) {
              var e = this.rafIDs.get(t);
              e && (cancelAnimationFrame(e), this.rafIDs.delete(t));
            }),
            (r.prototype.cancelAll = function () {
              var n = this;
              this.rafIDs.forEach(function (t, e) {
                n.cancel(e);
              });
            }),
            (r.prototype.getQueue = function () {
              var n = [];
              return (
                this.rafIDs.forEach(function (t, e) {
                  n.push(e);
                }),
                n
              );
            }),
            r);
          function r() {
            this.rafIDs = new Map();
          }
          e.AnimationFrame = i;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCList = void 0);
          var o,
            s = n(1),
            a = n(3),
            c = n(7),
            u = n(25),
            l =
              ((o = s.MDCComponent),
              r(d, o),
              Object.defineProperty(d.prototype, "vertical", {
                set: function (t) {
                  this.foundation.setVerticalOrientation(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "listElements", {
                get: function () {
                  return Array.from(
                    this.root.querySelectorAll(
                      "." + this.classNameMap[c.cssClasses.LIST_ITEM_CLASS]
                    )
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "wrapFocus", {
                set: function (t) {
                  this.foundation.setWrapFocus(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "typeaheadInProgress", {
                get: function () {
                  return this.foundation.isTypeaheadInProgress();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "hasTypeahead", {
                set: function (t) {
                  this.foundation.setHasTypeahead(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "singleSelection", {
                set: function (t) {
                  this.foundation.setSingleSelection(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "disabledItemsFocusable", {
                set: function (t) {
                  this.foundation.setDisabledItemsFocusable(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "selectedIndex", {
                get: function () {
                  return this.foundation.getSelectedIndex();
                },
                set: function (t) {
                  this.foundation.setSelectedIndex(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (d.attachTo = function (t) {
                return new d(t);
              }),
              (d.prototype.initialSyncWithDOM = function () {
                (this.isEvolutionEnabled =
                  c.evolutionAttribute in this.root.dataset),
                  this.isEvolutionEnabled
                    ? (this.classNameMap = c.evolutionClassNameMap)
                    : a.matches(this.root, c.strings.DEPRECATED_SELECTOR)
                    ? (this.classNameMap = c.deprecatedClassNameMap)
                    : (this.classNameMap = Object.values(c.cssClasses).reduce(
                        function (t, e) {
                          return (t[e] = e), t;
                        },
                        {}
                      )),
                  (this.handleClick = this.handleClickEvent.bind(this)),
                  (this.handleKeydown = this.handleKeydownEvent.bind(this)),
                  (this.focusInEventListener =
                    this.handleFocusInEvent.bind(this)),
                  (this.focusOutEventListener =
                    this.handleFocusOutEvent.bind(this)),
                  this.listen("keydown", this.handleKeydown),
                  this.listen("click", this.handleClick),
                  this.listen("focusin", this.focusInEventListener),
                  this.listen("focusout", this.focusOutEventListener),
                  this.layout(),
                  this.initializeListType(),
                  this.ensureFocusable();
              }),
              (d.prototype.destroy = function () {
                this.unlisten("keydown", this.handleKeydown),
                  this.unlisten("click", this.handleClick),
                  this.unlisten("focusin", this.focusInEventListener),
                  this.unlisten("focusout", this.focusOutEventListener);
              }),
              (d.prototype.layout = function () {
                var t = this.root.getAttribute(c.strings.ARIA_ORIENTATION);
                this.vertical = t !== c.strings.ARIA_ORIENTATION_HORIZONTAL;
                var e =
                    "." +
                    this.classNameMap[c.cssClasses.LIST_ITEM_CLASS] +
                    ":not([tabindex])",
                  n = c.strings.FOCUSABLE_CHILD_ELEMENTS,
                  i = this.root.querySelectorAll(e);
                i.length &&
                  Array.prototype.forEach.call(i, function (t) {
                    t.setAttribute("tabindex", "-1");
                  });
                var r = this.root.querySelectorAll(n);
                r.length &&
                  Array.prototype.forEach.call(r, function (t) {
                    t.setAttribute("tabindex", "-1");
                  }),
                  this.isEvolutionEnabled &&
                    this.foundation.setUseSelectedAttribute(!0),
                  this.foundation.layout();
              }),
              (d.prototype.getPrimaryText = function (t) {
                var e,
                  n = t.querySelector(
                    "." +
                      this.classNameMap[
                        c.cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS
                      ]
                  );
                if (this.isEvolutionEnabled || n)
                  return null !== (e = null == n ? void 0 : n.textContent) &&
                    void 0 !== e
                    ? e
                    : "";
                var i = t.querySelector(
                  "." + this.classNameMap[c.cssClasses.LIST_ITEM_TEXT_CLASS]
                );
                return (i && i.textContent) || "";
              }),
              (d.prototype.initializeListType = function () {
                var e = this;
                if (
                  ((this.isInteractive = a.matches(
                    this.root,
                    c.strings.ARIA_INTERACTIVE_ROLES_SELECTOR
                  )),
                  this.isEvolutionEnabled && this.isInteractive)
                ) {
                  var t = Array.from(
                    this.root.querySelectorAll(
                      c.strings.SELECTED_ITEM_SELECTOR
                    ),
                    function (t) {
                      return e.listElements.indexOf(t);
                    }
                  );
                  a.matches(this.root, c.strings.ARIA_MULTI_SELECTABLE_SELECTOR)
                    ? (this.selectedIndex = t)
                    : 0 < t.length && (this.selectedIndex = t[0]);
                } else {
                  var n = this.root.querySelectorAll(
                      c.strings.ARIA_ROLE_CHECKBOX_SELECTOR
                    ),
                    i = this.root.querySelector(
                      c.strings.ARIA_CHECKED_RADIO_SELECTOR
                    );
                  if (n.length) {
                    var r = this.root.querySelectorAll(
                      c.strings.ARIA_CHECKED_CHECKBOX_SELECTOR
                    );
                    this.selectedIndex = Array.from(r, function (t) {
                      return e.listElements.indexOf(t);
                    });
                  } else
                    i && (this.selectedIndex = this.listElements.indexOf(i));
                }
              }),
              (d.prototype.setEnabled = function (t, e) {
                this.foundation.setEnabled(t, e);
              }),
              (d.prototype.typeaheadMatchItem = function (t, e) {
                return this.foundation.typeaheadMatchItem(t, e, !0);
              }),
              (d.prototype.getDefaultFoundation = function () {
                var r = this,
                  t = {
                    addClassForElementIndex: function (t, e) {
                      var n = r.listElements[t];
                      n && n.classList.add(r.classNameMap[e]);
                    },
                    focusItemAtIndex: function (t) {
                      var e = r.listElements[t];
                      e && e.focus();
                    },
                    getAttributeForElementIndex: function (t, e) {
                      return r.listElements[t].getAttribute(e);
                    },
                    getFocusedElementIndex: function () {
                      return r.listElements.indexOf(document.activeElement);
                    },
                    getListItemCount: function () {
                      return r.listElements.length;
                    },
                    getPrimaryTextAtIndex: function (t) {
                      return r.getPrimaryText(r.listElements[t]);
                    },
                    hasCheckboxAtIndex: function (t) {
                      return !!r.listElements[t].querySelector(
                        c.strings.CHECKBOX_SELECTOR
                      );
                    },
                    hasRadioAtIndex: function (t) {
                      return !!r.listElements[t].querySelector(
                        c.strings.RADIO_SELECTOR
                      );
                    },
                    isCheckboxCheckedAtIndex: function (t) {
                      return r.listElements[t].querySelector(
                        c.strings.CHECKBOX_SELECTOR
                      ).checked;
                    },
                    isFocusInsideList: function () {
                      return (
                        r.root !== document.activeElement &&
                        r.root.contains(document.activeElement)
                      );
                    },
                    isRootFocused: function () {
                      return document.activeElement === r.root;
                    },
                    listItemAtIndexHasClass: function (t, e) {
                      return r.listElements[t].classList.contains(
                        r.classNameMap[e]
                      );
                    },
                    notifyAction: function (t) {
                      r.emit(c.strings.ACTION_EVENT, { index: t }, !0);
                    },
                    notifySelectionChange: function (t) {
                      r.emit(
                        c.strings.SELECTION_CHANGE_EVENT,
                        { changedIndices: t },
                        !0
                      );
                    },
                    removeClassForElementIndex: function (t, e) {
                      var n = r.listElements[t];
                      n && n.classList.remove(r.classNameMap[e]);
                    },
                    setAttributeForElementIndex: function (t, e, n) {
                      var i = r.listElements[t];
                      i && i.setAttribute(e, n);
                    },
                    setCheckedCheckboxOrRadioAtIndex: function (t, e) {
                      var n = r.listElements[t].querySelector(
                        c.strings.CHECKBOX_RADIO_SELECTOR
                      );
                      n.checked = e;
                      var i = document.createEvent("Event");
                      i.initEvent("change", !0, !0), n.dispatchEvent(i);
                    },
                    setTabIndexForListItemChildren: function (t, e) {
                      var n = r.listElements[t],
                        i = c.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
                      Array.prototype.forEach.call(
                        n.querySelectorAll(i),
                        function (t) {
                          t.setAttribute("tabindex", e);
                        }
                      );
                    },
                  };
                return new u.MDCListFoundation(t);
              }),
              (d.prototype.ensureFocusable = function () {
                if (
                  this.isEvolutionEnabled &&
                  this.isInteractive &&
                  !this.root.querySelector(
                    "." +
                      this.classNameMap[c.cssClasses.LIST_ITEM_CLASS] +
                      '[tabindex="0"]'
                  )
                ) {
                  var t = this.initialFocusIndex();
                  -1 !== t && (this.listElements[t].tabIndex = 0);
                }
              }),
              (d.prototype.initialFocusIndex = function () {
                if (
                  this.selectedIndex instanceof Array &&
                  0 < this.selectedIndex.length
                )
                  return this.selectedIndex[0];
                if (
                  "number" == typeof this.selectedIndex &&
                  this.selectedIndex !== c.numbers.UNSET_INDEX
                )
                  return this.selectedIndex;
                var t = this.root.querySelector(
                  "." +
                    this.classNameMap[c.cssClasses.LIST_ITEM_CLASS] +
                    ":not(." +
                    this.classNameMap[c.cssClasses.LIST_ITEM_DISABLED_CLASS] +
                    ")"
                );
                return null === t ? -1 : this.getListItemIndex(t);
              }),
              (d.prototype.getListItemIndex = function (t) {
                var e = a.closest(
                  t,
                  "." +
                    this.classNameMap[c.cssClasses.LIST_ITEM_CLASS] +
                    ", ." +
                    this.classNameMap[c.cssClasses.ROOT]
                );
                return e &&
                  a.matches(
                    e,
                    "." + this.classNameMap[c.cssClasses.LIST_ITEM_CLASS]
                  )
                  ? this.listElements.indexOf(e)
                  : -1;
              }),
              (d.prototype.handleFocusInEvent = function (t) {
                var e = this.getListItemIndex(t.target);
                this.foundation.handleFocusIn(e);
              }),
              (d.prototype.handleFocusOutEvent = function (t) {
                var e = this.getListItemIndex(t.target);
                this.foundation.handleFocusOut(e);
              }),
              (d.prototype.handleKeydownEvent = function (t) {
                var e = this.getListItemIndex(t.target),
                  n = t.target;
                this.foundation.handleKeydown(
                  t,
                  n.classList.contains(
                    this.classNameMap[c.cssClasses.LIST_ITEM_CLASS]
                  ),
                  e
                );
              }),
              (d.prototype.handleClickEvent = function (t) {
                var e = this.getListItemIndex(t.target),
                  n = t.target,
                  i = !a.matches(n, c.strings.CHECKBOX_RADIO_SELECTOR);
                this.foundation.handleClick(e, i, t);
              }),
              d);
          function d() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCList = l;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            a =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            c =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      s(e, t, n);
                return a(e, t), e;
              },
            d =
              (this && this.__read) ||
              function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var i,
                  r,
                  o = n.call(t),
                  s = [];
                try {
                  for (; (void 0 === e || 0 < e--) && !(i = o.next()).done; )
                    s.push(i.value);
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return s;
              },
            p =
              (this && this.__spreadArray) ||
              function (t, e) {
                for (var n = 0, i = e.length, r = t.length; n < i; n++, r++)
                  t[r] = e[n];
                return t;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCListFoundation = void 0);
          var u = n(0),
            v = n(6),
            T = n(7),
            b = n(64),
            A = c(n(156));
          var l = ["Alt", "Control", "Meta", "Shift"];
          function O(e) {
            var n = new Set(
              e
                ? l.filter(function (t) {
                    return e.getModifierState(t);
                  })
                : []
            );
            return function (t) {
              return (
                t.every(function (t) {
                  return n.has(t);
                }) && t.length === n.size
              );
            };
          }
          var h,
            f =
              ((h = u.MDCFoundation),
              r(y, h),
              Object.defineProperty(y, "strings", {
                get: function () {
                  return T.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y, "cssClasses", {
                get: function () {
                  return T.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y, "numbers", {
                get: function () {
                  return T.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y, "defaultAdapter", {
                get: function () {
                  return {
                    addClassForElementIndex: function () {},
                    focusItemAtIndex: function () {},
                    getAttributeForElementIndex: function () {
                      return null;
                    },
                    getFocusedElementIndex: function () {
                      return 0;
                    },
                    getListItemCount: function () {
                      return 0;
                    },
                    hasCheckboxAtIndex: function () {
                      return !1;
                    },
                    hasRadioAtIndex: function () {
                      return !1;
                    },
                    isCheckboxCheckedAtIndex: function () {
                      return !1;
                    },
                    isFocusInsideList: function () {
                      return !1;
                    },
                    isRootFocused: function () {
                      return !1;
                    },
                    listItemAtIndexHasClass: function () {
                      return !1;
                    },
                    notifyAction: function () {},
                    notifySelectionChange: function () {},
                    removeClassForElementIndex: function () {},
                    setAttributeForElementIndex: function () {},
                    setCheckedCheckboxOrRadioAtIndex: function () {},
                    setTabIndexForListItemChildren: function () {},
                    getPrimaryTextAtIndex: function () {
                      return "";
                    },
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (y.prototype.layout = function () {
                0 !== this.adapter.getListItemCount() &&
                  (this.adapter.hasCheckboxAtIndex(0)
                    ? (this.isCheckboxList = !0)
                    : this.adapter.hasRadioAtIndex(0)
                    ? (this.isRadioList = !0)
                    : this.maybeInitializeSingleSelection(),
                  this.hasTypeahead &&
                    (this.sortedIndexByFirstChar =
                      this.typeaheadInitSortedIndex()));
              }),
              (y.prototype.getFocusedItemIndex = function () {
                return this.focusedItemIndex;
              }),
              (y.prototype.setWrapFocus = function (t) {
                this.wrapFocus = t;
              }),
              (y.prototype.setVerticalOrientation = function (t) {
                this.isVertical = t;
              }),
              (y.prototype.setSingleSelection = function (t) {
                (this.isSingleSelectionList = t) &&
                  (this.maybeInitializeSingleSelection(),
                  (this.selectedIndex = this.getSelectedIndexFromDOM()));
              }),
              (y.prototype.setDisabledItemsFocusable = function (t) {
                this.areDisabledItemsFocusable = t;
              }),
              (y.prototype.maybeInitializeSingleSelection = function () {
                var t = this.getSelectedIndexFromDOM();
                t !== T.numbers.UNSET_INDEX &&
                  (this.adapter.listItemAtIndexHasClass(
                    t,
                    T.cssClasses.LIST_ITEM_ACTIVATED_CLASS
                  ) && this.setUseActivatedClass(!0),
                  (this.isSingleSelectionList = !0),
                  (this.selectedIndex = t));
              }),
              (y.prototype.getSelectedIndexFromDOM = function () {
                for (
                  var t = T.numbers.UNSET_INDEX,
                    e = this.adapter.getListItemCount(),
                    n = 0;
                  n < e;
                  n++
                ) {
                  var i = this.adapter.listItemAtIndexHasClass(
                      n,
                      T.cssClasses.LIST_ITEM_SELECTED_CLASS
                    ),
                    r = this.adapter.listItemAtIndexHasClass(
                      n,
                      T.cssClasses.LIST_ITEM_ACTIVATED_CLASS
                    );
                  if (i || r) {
                    t = n;
                    break;
                  }
                }
                return t;
              }),
              (y.prototype.setHasTypeahead = function (t) {
                (this.hasTypeahead = t) &&
                  (this.sortedIndexByFirstChar =
                    this.typeaheadInitSortedIndex());
              }),
              (y.prototype.isTypeaheadInProgress = function () {
                return (
                  this.hasTypeahead && A.isTypingInProgress(this.typeaheadState)
                );
              }),
              (y.prototype.setUseActivatedClass = function (t) {
                this.useActivatedClass = t;
              }),
              (y.prototype.setUseSelectedAttribute = function (t) {
                this.useSelectedAttr = t;
              }),
              (y.prototype.getSelectedIndex = function () {
                return this.selectedIndex;
              }),
              (y.prototype.setSelectedIndex = function (t, e) {
                void 0 === e && (e = {}),
                  this.isIndexValid(t) &&
                    (this.isCheckboxList
                      ? this.setCheckboxAtIndex(t, e)
                      : this.isRadioList
                      ? this.setRadioAtIndex(t, e)
                      : this.setSingleSelectionAtIndex(t, e));
              }),
              (y.prototype.handleFocusIn = function (t) {
                0 <= t &&
                  ((this.focusedItemIndex = t),
                  this.adapter.setAttributeForElementIndex(t, "tabindex", "0"),
                  this.adapter.setTabIndexForListItemChildren(t, "0"));
              }),
              (y.prototype.handleFocusOut = function (t) {
                var e = this;
                0 <= t &&
                  (this.adapter.setAttributeForElementIndex(
                    t,
                    "tabindex",
                    "-1"
                  ),
                  this.adapter.setTabIndexForListItemChildren(t, "-1")),
                  setTimeout(function () {
                    e.adapter.isFocusInsideList() ||
                      e.setTabindexToFirstSelectedOrFocusedItem();
                  }, 0);
              }),
              (y.prototype.isIndexDisabled = function (t) {
                return this.adapter.listItemAtIndexHasClass(
                  t,
                  T.cssClasses.LIST_ITEM_DISABLED_CLASS
                );
              }),
              (y.prototype.handleKeydown = function (t, e, n) {
                var i,
                  r = this,
                  o = "ArrowLeft" === v.normalizeKey(t),
                  s = "ArrowUp" === v.normalizeKey(t),
                  a = "ArrowRight" === v.normalizeKey(t),
                  c = "ArrowDown" === v.normalizeKey(t),
                  u = "Home" === v.normalizeKey(t),
                  l = "End" === v.normalizeKey(t),
                  d = "Enter" === v.normalizeKey(t),
                  p = "Spacebar" === v.normalizeKey(t),
                  h = (this.isVertical && c) || (!this.isVertical && a),
                  f = (this.isVertical && s) || (!this.isVertical && o),
                  y = "A" === t.key || "a" === t.key,
                  C = O(t);
                if (this.adapter.isRootFocused()) {
                  if (
                    ((f || l) && C([])
                      ? (t.preventDefault(), this.focusLastElement())
                      : (h || u) && C([])
                      ? (t.preventDefault(), this.focusFirstElement())
                      : f && C(["Shift"]) && this.isCheckboxList
                      ? (t.preventDefault(),
                        -1 !== (_ = this.focusLastElement()) &&
                          this.setSelectedIndexOnAction(_, !1))
                      : h &&
                        C(["Shift"]) &&
                        this.isCheckboxList &&
                        (t.preventDefault(),
                        -1 !== (_ = this.focusFirstElement()) &&
                          this.setSelectedIndexOnAction(_, !1)),
                    this.hasTypeahead)
                  ) {
                    var E = {
                      event: t,
                      focusItemAtIndex: function (t) {
                        r.focusItemAtIndex(t);
                      },
                      focusedItemIndex: -1,
                      isTargetListItem: e,
                      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                      isItemAtIndexDisabled: function (t) {
                        return r.isIndexDisabled(t);
                      },
                    };
                    A.handleKeydown(E, this.typeaheadState);
                  }
                } else {
                  var g = this.adapter.getFocusedElementIndex();
                  if (!(-1 === g && (g = n) < 0)) {
                    if (h && C([]))
                      b.preventDefaultEvent(t), this.focusNextElement(g);
                    else if (f && C([]))
                      b.preventDefaultEvent(t), this.focusPrevElement(g);
                    else if (h && C(["Shift"]) && this.isCheckboxList)
                      b.preventDefaultEvent(t),
                        -1 !== (_ = this.focusNextElement(g)) &&
                          this.setSelectedIndexOnAction(_, !1);
                    else if (f && C(["Shift"]) && this.isCheckboxList) {
                      var _;
                      b.preventDefaultEvent(t),
                        -1 !== (_ = this.focusPrevElement(g)) &&
                          this.setSelectedIndexOnAction(_, !1);
                    } else if (u && C([]))
                      b.preventDefaultEvent(t), this.focusFirstElement();
                    else if (l && C([]))
                      b.preventDefaultEvent(t), this.focusLastElement();
                    else if (
                      u &&
                      C(["Control", "Shift"]) &&
                      this.isCheckboxList
                    ) {
                      if ((b.preventDefaultEvent(t), this.isIndexDisabled(g)))
                        return;
                      this.focusFirstElement(),
                        this.toggleCheckboxRange(0, g, g);
                    } else if (
                      l &&
                      C(["Control", "Shift"]) &&
                      this.isCheckboxList
                    ) {
                      if ((b.preventDefaultEvent(t), this.isIndexDisabled(g)))
                        return;
                      this.focusLastElement(),
                        this.toggleCheckboxRange(
                          g,
                          this.adapter.getListItemCount() - 1,
                          g
                        );
                    } else if (y && C(["Control"]) && this.isCheckboxList)
                      t.preventDefault(),
                        this.checkboxListToggleAll(
                          this.selectedIndex === T.numbers.UNSET_INDEX
                            ? []
                            : this.selectedIndex,
                          !0
                        );
                    else if ((d || p) && C([])) {
                      if (e) {
                        if ((m = t.target) && "A" === m.tagName && d) return;
                        if ((b.preventDefaultEvent(t), this.isIndexDisabled(g)))
                          return;
                        this.isTypeaheadInProgress() ||
                          (this.isSelectableList() &&
                            this.setSelectedIndexOnAction(g, !1),
                          this.adapter.notifyAction(g));
                      }
                    } else if (
                      (d || p) &&
                      C(["Shift"]) &&
                      this.isCheckboxList
                    ) {
                      var m;
                      if ((m = t.target) && "A" === m.tagName && d) return;
                      if ((b.preventDefaultEvent(t), this.isIndexDisabled(g)))
                        return;
                      this.isTypeaheadInProgress() ||
                        (this.toggleCheckboxRange(
                          null !== (i = this.lastSelectedIndex) && void 0 !== i
                            ? i
                            : g,
                          g,
                          g
                        ),
                        this.adapter.notifyAction(g));
                    }
                    this.hasTypeahead &&
                      ((E = {
                        event: t,
                        focusItemAtIndex: function (t) {
                          r.focusItemAtIndex(t);
                        },
                        focusedItemIndex: this.focusedItemIndex,
                        isTargetListItem: e,
                        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                        isItemAtIndexDisabled: function (t) {
                          return r.isIndexDisabled(t);
                        },
                      }),
                      A.handleKeydown(E, this.typeaheadState));
                  }
                }
              }),
              (y.prototype.handleClick = function (t, e, n) {
                var i,
                  r = O(n);
                t !== T.numbers.UNSET_INDEX &&
                  (this.isIndexDisabled(t) ||
                    (r([])
                      ? (this.isSelectableList() &&
                          this.setSelectedIndexOnAction(t, e),
                        this.adapter.notifyAction(t))
                      : this.isCheckboxList &&
                        r(["Shift"]) &&
                        (this.toggleCheckboxRange(
                          null !== (i = this.lastSelectedIndex) && void 0 !== i
                            ? i
                            : t,
                          t,
                          t
                        ),
                        this.adapter.notifyAction(t))));
              }),
              (y.prototype.focusNextElement = function (t) {
                var e = this.adapter.getListItemCount(),
                  n = t,
                  i = null;
                do {
                  if (e <= ++n) {
                    if (!this.wrapFocus) return t;
                    n = 0;
                  }
                  if (n === i) return -1;
                  i = null != i ? i : n;
                } while (
                  !this.areDisabledItemsFocusable &&
                  this.isIndexDisabled(n)
                );
                return this.focusItemAtIndex(n), n;
              }),
              (y.prototype.focusPrevElement = function (t) {
                var e = this.adapter.getListItemCount(),
                  n = t,
                  i = null;
                do {
                  if (--n < 0) {
                    if (!this.wrapFocus) return t;
                    n = e - 1;
                  }
                  if (n === i) return -1;
                  i = null != i ? i : n;
                } while (
                  !this.areDisabledItemsFocusable &&
                  this.isIndexDisabled(n)
                );
                return this.focusItemAtIndex(n), n;
              }),
              (y.prototype.focusFirstElement = function () {
                return this.focusNextElement(-1);
              }),
              (y.prototype.focusLastElement = function () {
                return this.focusPrevElement(this.adapter.getListItemCount());
              }),
              (y.prototype.focusInitialElement = function () {
                var t = this.getFirstSelectedOrFocusedItemIndex();
                return this.focusItemAtIndex(t), t;
              }),
              (y.prototype.setEnabled = function (t, e) {
                this.isIndexValid(t, !1) &&
                  (e
                    ? (this.adapter.removeClassForElementIndex(
                        t,
                        T.cssClasses.LIST_ITEM_DISABLED_CLASS
                      ),
                      this.adapter.setAttributeForElementIndex(
                        t,
                        T.strings.ARIA_DISABLED,
                        "false"
                      ))
                    : (this.adapter.addClassForElementIndex(
                        t,
                        T.cssClasses.LIST_ITEM_DISABLED_CLASS
                      ),
                      this.adapter.setAttributeForElementIndex(
                        t,
                        T.strings.ARIA_DISABLED,
                        "true"
                      )));
              }),
              (y.prototype.setSingleSelectionAtIndex = function (t, e) {
                if (
                  (void 0 === e && (e = {}),
                  this.selectedIndex !== t || e.forceUpdate)
                ) {
                  var n = T.cssClasses.LIST_ITEM_SELECTED_CLASS;
                  this.useActivatedClass &&
                    (n = T.cssClasses.LIST_ITEM_ACTIVATED_CLASS),
                    this.selectedIndex !== T.numbers.UNSET_INDEX &&
                      this.adapter.removeClassForElementIndex(
                        this.selectedIndex,
                        n
                      ),
                    this.setAriaForSingleSelectionAtIndex(t),
                    this.setTabindexAtIndex(t),
                    t !== T.numbers.UNSET_INDEX &&
                      this.adapter.addClassForElementIndex(t, n),
                    (this.selectedIndex = t),
                    e.isUserInteraction &&
                      !e.forceUpdate &&
                      this.adapter.notifySelectionChange([t]);
                }
              }),
              (y.prototype.setAriaForSingleSelectionAtIndex = function (t) {
                this.selectedIndex === T.numbers.UNSET_INDEX &&
                  (this.ariaCurrentAttrValue =
                    this.adapter.getAttributeForElementIndex(
                      t,
                      T.strings.ARIA_CURRENT
                    ));
                var e = null !== this.ariaCurrentAttrValue,
                  n = e ? T.strings.ARIA_CURRENT : T.strings.ARIA_SELECTED;
                if (
                  (this.selectedIndex !== T.numbers.UNSET_INDEX &&
                    this.adapter.setAttributeForElementIndex(
                      this.selectedIndex,
                      n,
                      "false"
                    ),
                  t !== T.numbers.UNSET_INDEX)
                ) {
                  var i = e ? this.ariaCurrentAttrValue : "true";
                  this.adapter.setAttributeForElementIndex(t, n, i);
                }
              }),
              (y.prototype.getSelectionAttribute = function () {
                return this.useSelectedAttr
                  ? T.strings.ARIA_SELECTED
                  : T.strings.ARIA_CHECKED;
              }),
              (y.prototype.setRadioAtIndex = function (t, e) {
                void 0 === e && (e = {});
                var n = this.getSelectionAttribute();
                this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0),
                  (this.selectedIndex === t && !e.forceUpdate) ||
                    (this.selectedIndex !== T.numbers.UNSET_INDEX &&
                      this.adapter.setAttributeForElementIndex(
                        this.selectedIndex,
                        n,
                        "false"
                      ),
                    this.adapter.setAttributeForElementIndex(t, n, "true"),
                    (this.selectedIndex = t),
                    e.isUserInteraction &&
                      !e.forceUpdate &&
                      this.adapter.notifySelectionChange([t]));
              }),
              (y.prototype.setCheckboxAtIndex = function (t, e) {
                void 0 === e && (e = {});
                for (
                  var n = this.selectedIndex,
                    i = e.isUserInteraction
                      ? new Set(n === T.numbers.UNSET_INDEX ? [] : n)
                      : null,
                    r = this.getSelectionAttribute(),
                    o = [],
                    s = 0;
                  s < this.adapter.getListItemCount();
                  s++
                ) {
                  var a = null == i ? void 0 : i.has(s),
                    c = 0 <= t.indexOf(s);
                  c !== a && o.push(s),
                    this.adapter.setCheckedCheckboxOrRadioAtIndex(s, c),
                    this.adapter.setAttributeForElementIndex(
                      s,
                      r,
                      c ? "true" : "false"
                    );
                }
                (this.selectedIndex = t),
                  e.isUserInteraction &&
                    o.length &&
                    this.adapter.notifySelectionChange(o);
              }),
              (y.prototype.toggleCheckboxRange = function (t, e, n) {
                this.lastSelectedIndex = n;
                for (
                  var i = new Set(
                      this.selectedIndex === T.numbers.UNSET_INDEX
                        ? []
                        : this.selectedIndex
                    ),
                    r = !(null == i ? void 0 : i.has(n)),
                    o = d([t, e].sort(), 2),
                    s = o[0],
                    a = o[1],
                    c = this.getSelectionAttribute(),
                    u = [],
                    l = s;
                  l <= a;
                  l++
                )
                  this.isIndexDisabled(l) ||
                    (r !== i.has(l) &&
                      (u.push(l),
                      this.adapter.setCheckedCheckboxOrRadioAtIndex(l, r),
                      this.adapter.setAttributeForElementIndex(l, c, "" + r),
                      r ? i.add(l) : i.delete(l)));
                u.length &&
                  ((this.selectedIndex = p([], d(i))),
                  this.adapter.notifySelectionChange(u));
              }),
              (y.prototype.setTabindexAtIndex = function (t) {
                this.focusedItemIndex === T.numbers.UNSET_INDEX && 0 !== t
                  ? this.adapter.setAttributeForElementIndex(
                      0,
                      "tabindex",
                      "-1"
                    )
                  : 0 <= this.focusedItemIndex &&
                    this.focusedItemIndex !== t &&
                    this.adapter.setAttributeForElementIndex(
                      this.focusedItemIndex,
                      "tabindex",
                      "-1"
                    ),
                  this.selectedIndex instanceof Array ||
                    this.selectedIndex === t ||
                    this.adapter.setAttributeForElementIndex(
                      this.selectedIndex,
                      "tabindex",
                      "-1"
                    ),
                  t !== T.numbers.UNSET_INDEX &&
                    this.adapter.setAttributeForElementIndex(
                      t,
                      "tabindex",
                      "0"
                    );
              }),
              (y.prototype.isSelectableList = function () {
                return (
                  this.isSingleSelectionList ||
                  this.isCheckboxList ||
                  this.isRadioList
                );
              }),
              (y.prototype.setTabindexToFirstSelectedOrFocusedItem =
                function () {
                  var t = this.getFirstSelectedOrFocusedItemIndex();
                  this.setTabindexAtIndex(t);
                }),
              (y.prototype.getFirstSelectedOrFocusedItemIndex = function () {
                return this.isSelectableList()
                  ? "number" == typeof this.selectedIndex &&
                    this.selectedIndex !== T.numbers.UNSET_INDEX
                    ? this.selectedIndex
                    : (function (t) {
                        return t instanceof Array;
                      })(this.selectedIndex) && 0 < this.selectedIndex.length
                    ? this.selectedIndex.reduce(function (t, e) {
                        return Math.min(t, e);
                      })
                    : 0
                  : Math.max(this.focusedItemIndex, 0);
              }),
              (y.prototype.isIndexValid = function (t, e) {
                var n = this;
                if ((void 0 === e && (e = !0), t instanceof Array)) {
                  if (!this.isCheckboxList && e)
                    throw new Error(
                      "MDCListFoundation: Array of index is only supported for checkbox based list"
                    );
                  return (
                    0 === t.length ||
                    t.some(function (t) {
                      return n.isIndexInRange(t);
                    })
                  );
                }
                if ("number" != typeof t) return !1;
                if (this.isCheckboxList && e)
                  throw new Error(
                    "MDCListFoundation: Expected array of index for checkbox based list but got number: " +
                      t
                  );
                return (
                  this.isIndexInRange(t) ||
                  (this.isSingleSelectionList && t === T.numbers.UNSET_INDEX)
                );
              }),
              (y.prototype.isIndexInRange = function (t) {
                var e = this.adapter.getListItemCount();
                return 0 <= t && t < e;
              }),
              (y.prototype.setSelectedIndexOnAction = function (t, e) {
                (this.lastSelectedIndex = t),
                  this.isCheckboxList
                    ? (this.toggleCheckboxAtIndex(t, e),
                      this.adapter.notifySelectionChange([t]))
                    : this.setSelectedIndex(t, { isUserInteraction: !0 });
              }),
              (y.prototype.toggleCheckboxAtIndex = function (e, t) {
                var n,
                  i = this.getSelectionAttribute(),
                  r = this.adapter.isCheckboxCheckedAtIndex(e);
                t
                  ? (n = r)
                  : ((n = !r),
                    this.adapter.setCheckedCheckboxOrRadioAtIndex(e, n)),
                  this.adapter.setAttributeForElementIndex(
                    e,
                    i,
                    n ? "true" : "false"
                  );
                var o =
                  this.selectedIndex === T.numbers.UNSET_INDEX
                    ? []
                    : this.selectedIndex.slice();
                n
                  ? o.push(e)
                  : (o = o.filter(function (t) {
                      return t !== e;
                    })),
                  (this.selectedIndex = o);
              }),
              (y.prototype.focusItemAtIndex = function (t) {
                this.adapter.focusItemAtIndex(t), (this.focusedItemIndex = t);
              }),
              (y.prototype.checkboxListToggleAll = function (t, e) {
                var n = this.adapter.getListItemCount();
                if (t.length === n)
                  this.setCheckboxAtIndex([], { isUserInteraction: e });
                else {
                  for (var i = [], r = 0; r < n; r++)
                    (!this.isIndexDisabled(r) || -1 < t.indexOf(r)) &&
                      i.push(r);
                  this.setCheckboxAtIndex(i, { isUserInteraction: e });
                }
              }),
              (y.prototype.typeaheadMatchItem = function (t, e, n) {
                var i = this;
                void 0 === n && (n = !1);
                var r = {
                  focusItemAtIndex: function (t) {
                    i.focusItemAtIndex(t);
                  },
                  focusedItemIndex: e || this.focusedItemIndex,
                  nextChar: t,
                  sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                  skipFocus: n,
                  isItemAtIndexDisabled: function (t) {
                    return i.isIndexDisabled(t);
                  },
                };
                return A.matchItem(r, this.typeaheadState);
              }),
              (y.prototype.typeaheadInitSortedIndex = function () {
                return A.initSortedIndex(
                  this.adapter.getListItemCount(),
                  this.adapter.getPrimaryTextAtIndex
                );
              }),
              (y.prototype.clearTypeaheadBuffer = function () {
                A.clearBuffer(this.typeaheadState);
              }),
              y);
          function y(t) {
            var e = h.call(this, o(o({}, y.defaultAdapter), t)) || this;
            return (
              (e.wrapFocus = !1),
              (e.isVertical = !0),
              (e.isSingleSelectionList = !1),
              (e.areDisabledItemsFocusable = !0),
              (e.selectedIndex = T.numbers.UNSET_INDEX),
              (e.focusedItemIndex = T.numbers.UNSET_INDEX),
              (e.useActivatedClass = !1),
              (e.useSelectedAttr = !1),
              (e.ariaCurrentAttrValue = null),
              (e.isCheckboxList = !1),
              (e.isRadioList = !1),
              (e.lastSelectedIndex = null),
              (e.hasTypeahead = !1),
              (e.typeaheadState = A.initState()),
              (e.sortedIndexByFirstChar = new Map()),
              e
            );
          }
          (e.MDCListFoundation = f), (e.default = f);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCDismissibleDrawerFoundation = void 0);
          var s,
            a = n(0),
            c = n(65),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    elementHasClass: function () {
                      return !1;
                    },
                    notifyClose: function () {},
                    notifyOpen: function () {},
                    saveFocus: function () {},
                    restoreFocus: function () {},
                    focusActiveNavigationItem: function () {},
                    trapFocus: function () {},
                    releaseFocus: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.destroy = function () {
                this.animationFrame &&
                  cancelAnimationFrame(this.animationFrame),
                  this.animationTimer && clearTimeout(this.animationTimer);
              }),
              (l.prototype.open = function () {
                var t = this;
                this.isOpen() ||
                  this.isOpening() ||
                  this.isClosing() ||
                  (this.adapter.addClass(c.cssClasses.OPEN),
                  this.adapter.addClass(c.cssClasses.ANIMATE),
                  this.runNextAnimationFrame(function () {
                    t.adapter.addClass(c.cssClasses.OPENING);
                  }),
                  this.adapter.saveFocus());
              }),
              (l.prototype.close = function () {
                !this.isOpen() ||
                  this.isOpening() ||
                  this.isClosing() ||
                  this.adapter.addClass(c.cssClasses.CLOSING);
              }),
              (l.prototype.isOpen = function () {
                return this.adapter.hasClass(c.cssClasses.OPEN);
              }),
              (l.prototype.isOpening = function () {
                return (
                  this.adapter.hasClass(c.cssClasses.OPENING) ||
                  this.adapter.hasClass(c.cssClasses.ANIMATE)
                );
              }),
              (l.prototype.isClosing = function () {
                return this.adapter.hasClass(c.cssClasses.CLOSING);
              }),
              (l.prototype.handleKeydown = function (t) {
                var e = t.keyCode;
                ("Escape" !== t.key && 27 !== e) || this.close();
              }),
              (l.prototype.handleTransitionEnd = function (t) {
                var e = c.cssClasses.OPENING,
                  n = c.cssClasses.CLOSING,
                  i = c.cssClasses.OPEN,
                  r = c.cssClasses.ANIMATE,
                  o = c.cssClasses.ROOT;
                this.isElement(t.target) &&
                  this.adapter.elementHasClass(t.target, o) &&
                  (this.isClosing()
                    ? (this.adapter.removeClass(i),
                      this.closed(),
                      this.adapter.restoreFocus(),
                      this.adapter.notifyClose())
                    : (this.adapter.focusActiveNavigationItem(),
                      this.opened(),
                      this.adapter.notifyOpen()),
                  this.adapter.removeClass(r),
                  this.adapter.removeClass(e),
                  this.adapter.removeClass(n));
              }),
              (l.prototype.opened = function () {}),
              (l.prototype.closed = function () {}),
              (l.prototype.runNextAnimationFrame = function (t) {
                var e = this;
                cancelAnimationFrame(this.animationFrame),
                  (this.animationFrame = requestAnimationFrame(function () {
                    (e.animationFrame = 0),
                      clearTimeout(e.animationTimer),
                      (e.animationTimer = setTimeout(t, 0));
                  }));
              }),
              (l.prototype.isElement = function (t) {
                return Boolean(t.classList);
              }),
              l);
          function l(t) {
            var e = s.call(this, o(o({}, l.defaultAdapter), t)) || this;
            return (e.animationFrame = 0), (e.animationTimer = 0), e;
          }
          (e.MDCDismissibleDrawerFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCFloatingLabel = void 0);
          var o,
            s = n(1),
            a = n(3),
            c = n(28),
            u =
              ((o = s.MDCComponent),
              r(l, o),
              (l.attachTo = function (t) {
                return new l(t);
              }),
              (l.prototype.shake = function (t) {
                this.foundation.shake(t);
              }),
              (l.prototype.float = function (t) {
                this.foundation.float(t);
              }),
              (l.prototype.setRequired = function (t) {
                this.foundation.setRequired(t);
              }),
              (l.prototype.getWidth = function () {
                return this.foundation.getWidth();
              }),
              (l.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    getWidth: function () {
                      return a.estimateScrollWidth(n.root);
                    },
                    registerInteractionHandler: function (t, e) {
                      return n.listen(t, e);
                    },
                    deregisterInteractionHandler: function (t, e) {
                      return n.unlisten(t, e);
                    },
                  };
                return new c.MDCFloatingLabelFoundation(t);
              }),
              l);
          function l() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCFloatingLabel = u;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCFloatingLabelFoundation = void 0);
          var s,
            a = n(0),
            c = n(67),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    getWidth: function () {
                      return 0;
                    },
                    registerInteractionHandler: function () {},
                    deregisterInteractionHandler: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.init = function () {
                this.adapter.registerInteractionHandler(
                  "animationend",
                  this.shakeAnimationEndHandler
                );
              }),
              (l.prototype.destroy = function () {
                this.adapter.deregisterInteractionHandler(
                  "animationend",
                  this.shakeAnimationEndHandler
                );
              }),
              (l.prototype.getWidth = function () {
                return this.adapter.getWidth();
              }),
              (l.prototype.shake = function (t) {
                var e = l.cssClasses.LABEL_SHAKE;
                t ? this.adapter.addClass(e) : this.adapter.removeClass(e);
              }),
              (l.prototype.float = function (t) {
                var e = l.cssClasses,
                  n = e.LABEL_FLOAT_ABOVE,
                  i = e.LABEL_SHAKE;
                t
                  ? this.adapter.addClass(n)
                  : (this.adapter.removeClass(n), this.adapter.removeClass(i));
              }),
              (l.prototype.setRequired = function (t) {
                var e = l.cssClasses.LABEL_REQUIRED;
                t ? this.adapter.addClass(e) : this.adapter.removeClass(e);
              }),
              (l.prototype.handleShakeAnimationEnd = function () {
                var t = l.cssClasses.LABEL_SHAKE;
                this.adapter.removeClass(t);
              }),
              l);
          function l(t) {
            var e = s.call(this, o(o({}, l.defaultAdapter), t)) || this;
            return (
              (e.shakeAnimationEndHandler = function () {
                e.handleShakeAnimationEnd();
              }),
              e
            );
          }
          (e.MDCFloatingLabelFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCLineRipple = void 0);
          var o,
            s = n(1),
            a = n(72),
            c =
              ((o = s.MDCComponent),
              r(u, o),
              (u.attachTo = function (t) {
                return new u(t);
              }),
              (u.prototype.activate = function () {
                this.foundation.activate();
              }),
              (u.prototype.deactivate = function () {
                this.foundation.deactivate();
              }),
              (u.prototype.setRippleCenter = function (t) {
                this.foundation.setRippleCenter(t);
              }),
              (u.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    setStyle: function (t, e) {
                      return n.root.style.setProperty(t, e);
                    },
                    registerEventHandler: function (t, e) {
                      return n.listen(t, e);
                    },
                    deregisterEventHandler: function (t, e) {
                      return n.unlisten(t, e);
                    },
                  };
                return new a.MDCLineRippleFoundation(t);
              }),
              u);
          function u() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCLineRipple = c;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCNotchedOutline = void 0);
          var o,
            s = n(1),
            a = n(28),
            c = n(31),
            u = n(77),
            l =
              ((o = s.MDCComponent),
              r(d, o),
              (d.attachTo = function (t) {
                return new d(t);
              }),
              (d.prototype.initialSyncWithDOM = function () {
                this.notchElement = this.root.querySelector(
                  c.strings.NOTCH_ELEMENT_SELECTOR
                );
                var t = this.root.querySelector(
                  "." + a.MDCFloatingLabelFoundation.cssClasses.ROOT
                );
                t
                  ? ((t.style.transitionDuration = "0s"),
                    this.root.classList.add(c.cssClasses.OUTLINE_UPGRADED),
                    requestAnimationFrame(function () {
                      t.style.transitionDuration = "";
                    }))
                  : this.root.classList.add(c.cssClasses.NO_LABEL);
              }),
              (d.prototype.notch = function (t) {
                this.foundation.notch(t);
              }),
              (d.prototype.closeNotch = function () {
                this.foundation.closeNotch();
              }),
              (d.prototype.getDefaultFoundation = function () {
                var e = this,
                  t = {
                    addClass: function (t) {
                      return e.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return e.root.classList.remove(t);
                    },
                    setNotchWidthProperty: function (t) {
                      e.notchElement.style.setProperty("width", t + "px");
                    },
                    removeNotchWidthProperty: function () {
                      e.notchElement.style.removeProperty("width");
                    },
                  };
                return new u.MDCNotchedOutlineFoundation(t);
              }),
              d);
          function d() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCNotchedOutline = l;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.numbers = e.cssClasses = void 0);
          e.strings = { NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch" };
          e.numbers = { NOTCH_ELEMENT_PADDING: 8 };
          e.cssClasses = {
            NO_LABEL: "mdc-notched-outline--no-label",
            OUTLINE_NOTCHED: "mdc-notched-outline--notched",
            OUTLINE_UPGRADED: "mdc-notched-outline--upgraded",
          };
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.numbers = e.strings = e.cssClasses = void 0);
          e.cssClasses = {
            ACTIVATED: "mdc-select--activated",
            DISABLED: "mdc-select--disabled",
            FOCUSED: "mdc-select--focused",
            INVALID: "mdc-select--invalid",
            MENU_INVALID: "mdc-select__menu--invalid",
            OUTLINED: "mdc-select--outlined",
            REQUIRED: "mdc-select--required",
            ROOT: "mdc-select",
            WITH_LEADING_ICON: "mdc-select--with-leading-icon",
          };
          e.strings = {
            ARIA_CONTROLS: "aria-controls",
            ARIA_DESCRIBEDBY: "aria-describedby",
            ARIA_SELECTED_ATTR: "aria-selected",
            CHANGE_EVENT: "MDCSelect:change",
            HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
            LABEL_SELECTOR: ".mdc-floating-label",
            LEADING_ICON_SELECTOR: ".mdc-select__icon",
            LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
            MENU_SELECTOR: ".mdc-select__menu",
            OUTLINE_SELECTOR: ".mdc-notched-outline",
            SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
            SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
            VALUE_ATTR: "data-value",
          };
          e.numbers = {
            LABEL_SCALE: 0.75,
            UNSET_INDEX: -1,
            CLICK_DEBOUNCE_TIMEOUT_MS: 330,
          };
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings =
              e.events =
              e.attributes =
              e.numbers =
              e.cssClasses =
                void 0),
            (e.cssClasses = {
              DISABLED: "mdc-slider--disabled",
              DISCRETE: "mdc-slider--discrete",
              INPUT: "mdc-slider__input",
              RANGE: "mdc-slider--range",
              THUMB: "mdc-slider__thumb",
              THUMB_FOCUSED: "mdc-slider__thumb--focused",
              THUMB_KNOB: "mdc-slider__thumb-knob",
              THUMB_TOP: "mdc-slider__thumb--top",
              THUMB_WITH_INDICATOR: "mdc-slider__thumb--with-indicator",
              TICK_MARKS: "mdc-slider--tick-marks",
              TICK_MARKS_CONTAINER: "mdc-slider__tick-marks",
              TICK_MARK_ACTIVE: "mdc-slider__tick-mark--active",
              TICK_MARK_INACTIVE: "mdc-slider__tick-mark--inactive",
              TRACK: "mdc-slider__track",
              TRACK_ACTIVE: "mdc-slider__track--active_fill",
              VALUE_INDICATOR_CONTAINER:
                "mdc-slider__value-indicator-container",
              VALUE_INDICATOR_TEXT: "mdc-slider__value-indicator-text",
            }),
            (e.numbers = {
              STEP_SIZE: 1,
              MIN_RANGE: 0,
              THUMB_UPDATE_MIN_PX: 5,
            }),
            (e.attributes = {
              ARIA_VALUETEXT: "aria-valuetext",
              INPUT_DISABLED: "disabled",
              INPUT_MIN: "min",
              INPUT_MAX: "max",
              INPUT_VALUE: "value",
              INPUT_STEP: "step",
              DATA_MIN_RANGE: "data-min-range",
            }),
            (e.events = {
              CHANGE: "MDCSlider:change",
              INPUT: "MDCSlider:input",
            }),
            (e.strings = {
              VAR_VALUE_INDICATOR_CARET_LEFT:
                "--slider-value-indicator-caret-left",
              VAR_VALUE_INDICATOR_CARET_RIGHT:
                "--slider-value-indicator-caret-right",
              VAR_VALUE_INDICATOR_CARET_TRANSFORM:
                "--slider-value-indicator-caret-transform",
              VAR_VALUE_INDICATOR_CONTAINER_LEFT:
                "--slider-value-indicator-container-left",
              VAR_VALUE_INDICATOR_CONTAINER_RIGHT:
                "--slider-value-indicator-container-right",
              VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM:
                "--slider-value-indicator-container-transform",
            });
        },
        function (t, e, n) {
          "use strict";
          var i, r;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Thumb = e.TickMark = void 0),
            ((i = e.TickMark || (e.TickMark = {}))[(i.ACTIVE = 0)] = "ACTIVE"),
            (i[(i.INACTIVE = 1)] = "INACTIVE"),
            ((r = e.Thumb || (e.Thumb = {}))[(r.START = 1)] = "START"),
            (r[(r.END = 2)] = "END");
        },
        function (t, e, n) {
          "use strict";
          var i;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Selectors = e.CssClasses = void 0),
            ((i = e.CssClasses || (e.CssClasses = {})).PROCESSING =
              "mdc-switch--processing"),
            (i.SELECTED = "mdc-switch--selected"),
            (i.UNSELECTED = "mdc-switch--unselected"),
            ((e.Selectors || (e.Selectors = {})).RIPPLE =
              ".mdc-switch__ripple");
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.cssClasses = void 0);
          e.cssClasses = {
            ANIMATING: "mdc-tab-scroller--animating",
            SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
            SCROLL_TEST: "mdc-tab-scroller__test",
          };
          e.strings = {
            AREA_SELECTOR: ".mdc-tab-scroller__scroll-area",
            CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content",
          };
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabScrollerRTL = void 0);
          function i(t) {
            this.adapter = t;
          }
          (e.MDCTabScrollerRTL = i), (e.default = i);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabFoundation = void 0);
          var s,
            a = n(0),
            c = n(106),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    setAttr: function () {},
                    activateIndicator: function () {},
                    deactivateIndicator: function () {},
                    notifyInteracted: function () {},
                    getOffsetLeft: function () {
                      return 0;
                    },
                    getOffsetWidth: function () {
                      return 0;
                    },
                    getContentOffsetLeft: function () {
                      return 0;
                    },
                    getContentOffsetWidth: function () {
                      return 0;
                    },
                    focus: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.handleClick = function () {
                this.adapter.notifyInteracted();
              }),
              (l.prototype.isActive = function () {
                return this.adapter.hasClass(c.cssClasses.ACTIVE);
              }),
              (l.prototype.setFocusOnActivate = function (t) {
                this.focusOnActivate = t;
              }),
              (l.prototype.activate = function (t) {
                this.adapter.addClass(c.cssClasses.ACTIVE),
                  this.adapter.setAttr(c.strings.ARIA_SELECTED, "true"),
                  this.adapter.setAttr(c.strings.TABINDEX, "0"),
                  this.adapter.activateIndicator(t),
                  this.focusOnActivate && this.adapter.focus();
              }),
              (l.prototype.deactivate = function () {
                this.isActive() &&
                  (this.adapter.removeClass(c.cssClasses.ACTIVE),
                  this.adapter.setAttr(c.strings.ARIA_SELECTED, "false"),
                  this.adapter.setAttr(c.strings.TABINDEX, "-1"),
                  this.adapter.deactivateIndicator());
              }),
              (l.prototype.computeDimensions = function () {
                var t = this.adapter.getOffsetWidth(),
                  e = this.adapter.getOffsetLeft(),
                  n = this.adapter.getContentOffsetWidth(),
                  i = this.adapter.getContentOffsetLeft();
                return {
                  contentLeft: e + i,
                  contentRight: e + i + n,
                  rootLeft: e,
                  rootRight: e + t,
                };
              }),
              l);
          function l(t) {
            var e = s.call(this, o(o({}, l.defaultAdapter), t)) || this;
            return (e.focusOnActivate = !0), e;
          }
          (e.MDCTabFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTextFieldCharacterCounterFoundation = void 0);
          var s,
            a = n(0),
            c = n(110),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return { setContent: function () {} };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.setCounterValue = function (t, e) {
                (t = Math.min(t, e)), this.adapter.setContent(t + " / " + e);
              }),
              l);
          function l(t) {
            return s.call(this, o(o({}, l.defaultAdapter), t)) || this;
          }
          (e.MDCTextFieldCharacterCounterFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ALWAYS_FLOAT_TYPES =
              e.VALIDATION_ATTR_WHITELIST =
              e.numbers =
              e.strings =
              e.cssClasses =
                void 0);
          e.strings = {
            ARIA_CONTROLS: "aria-controls",
            ARIA_DESCRIBEDBY: "aria-describedby",
            INPUT_SELECTOR: ".mdc-text-field__input",
            LABEL_SELECTOR: ".mdc-floating-label",
            LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
            LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
            OUTLINE_SELECTOR: ".mdc-notched-outline",
            PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
            SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
            TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing",
          };
          e.cssClasses = {
            DISABLED: "mdc-text-field--disabled",
            FOCUSED: "mdc-text-field--focused",
            HELPER_LINE: "mdc-text-field-helper-line",
            INVALID: "mdc-text-field--invalid",
            LABEL_FLOATING: "mdc-text-field--label-floating",
            NO_LABEL: "mdc-text-field--no-label",
            OUTLINED: "mdc-text-field--outlined",
            ROOT: "mdc-text-field",
            TEXTAREA: "mdc-text-field--textarea",
            WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
            WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
            WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter",
          };
          e.numbers = { LABEL_SCALE: 0.75 };
          e.VALIDATION_ATTR_WHITELIST = [
            "pattern",
            "min",
            "max",
            "required",
            "step",
            "minlength",
            "maxlength",
          ];
          e.ALWAYS_FLOAT_TYPES = [
            "color",
            "date",
            "datetime-local",
            "month",
            "range",
            "time",
            "week",
          ];
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTextFieldHelperTextFoundation = void 0);
          var s,
            a = n(0),
            c = n(113),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    getAttr: function () {
                      return null;
                    },
                    setAttr: function () {},
                    removeAttr: function () {},
                    setContent: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.getId = function () {
                return this.adapter.getAttr("id");
              }),
              (l.prototype.isVisible = function () {
                return "true" !== this.adapter.getAttr(c.strings.ARIA_HIDDEN);
              }),
              (l.prototype.setContent = function (t) {
                this.adapter.setContent(t);
              }),
              (l.prototype.isPersistent = function () {
                return this.adapter.hasClass(
                  c.cssClasses.HELPER_TEXT_PERSISTENT
                );
              }),
              (l.prototype.setPersistent = function (t) {
                t
                  ? this.adapter.addClass(c.cssClasses.HELPER_TEXT_PERSISTENT)
                  : this.adapter.removeClass(
                      c.cssClasses.HELPER_TEXT_PERSISTENT
                    );
              }),
              (l.prototype.isValidation = function () {
                return this.adapter.hasClass(
                  c.cssClasses.HELPER_TEXT_VALIDATION_MSG
                );
              }),
              (l.prototype.setValidation = function (t) {
                t
                  ? this.adapter.addClass(
                      c.cssClasses.HELPER_TEXT_VALIDATION_MSG
                    )
                  : this.adapter.removeClass(
                      c.cssClasses.HELPER_TEXT_VALIDATION_MSG
                    );
              }),
              (l.prototype.showToScreenReader = function () {
                this.adapter.removeAttr(c.strings.ARIA_HIDDEN);
              }),
              (l.prototype.setValidity = function (t) {
                var e = this.adapter.hasClass(
                    c.cssClasses.HELPER_TEXT_PERSISTENT
                  ),
                  n =
                    this.adapter.hasClass(
                      c.cssClasses.HELPER_TEXT_VALIDATION_MSG
                    ) && !t;
                n
                  ? (this.showToScreenReader(),
                    "alert" === this.adapter.getAttr(c.strings.ROLE)
                      ? this.refreshAlertRole()
                      : this.adapter.setAttr(c.strings.ROLE, "alert"))
                  : this.adapter.removeAttr(c.strings.ROLE),
                  e || n || this.hide();
              }),
              (l.prototype.hide = function () {
                this.adapter.setAttr(c.strings.ARIA_HIDDEN, "true");
              }),
              (l.prototype.refreshAlertRole = function () {
                var t = this;
                this.adapter.removeAttr(c.strings.ROLE),
                  requestAnimationFrame(function () {
                    t.adapter.setAttr(c.strings.ROLE, "alert");
                  });
              }),
              l);
          function l(t) {
            return s.call(this, o(o({}, l.defaultAdapter), t)) || this;
          }
          (e.MDCTextFieldHelperTextFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          var i, r;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.XPositionWithCaret =
              e.YPositionWithCaret =
              e.PositionWithCaret =
              e.strings =
              e.YPosition =
              e.AnchorBoundaryType =
              e.XPosition =
              e.events =
              e.attributes =
              e.numbers =
              e.CssClasses =
                void 0),
            ((r = i = i || {}).RICH = "mdc-tooltip--rich"),
            (r.SHOWN = "mdc-tooltip--shown"),
            (r.SHOWING = "mdc-tooltip--showing"),
            (r.SHOWING_TRANSITION = "mdc-tooltip--showing-transition"),
            (r.HIDE = "mdc-tooltip--hide"),
            (r.HIDE_TRANSITION = "mdc-tooltip--hide-transition"),
            (r.MULTILINE_TOOLTIP = "mdc-tooltip--multiline"),
            (r.SURFACE = "mdc-tooltip__surface"),
            (r.SURFACE_ANIMATION = "mdc-tooltip__surface-animation"),
            (r.TOOLTIP_CARET_TOP = "mdc-tooltip__caret-surface-top"),
            (r.TOOLTIP_CARET_BOTTOM = "mdc-tooltip__caret-surface-bottom"),
            (e.CssClasses = i);
          e.numbers = {
            BOUNDED_ANCHOR_GAP: 4,
            UNBOUNDED_ANCHOR_GAP: 8,
            MIN_VIEWPORT_TOOLTIP_THRESHOLD: 8,
            HIDE_DELAY_MS: 600,
            SHOW_DELAY_MS: 500,
            MIN_HEIGHT: 24,
            MAX_WIDTH: 200,
            CARET_INDENTATION: 24,
            ANIMATION_SCALE: 0.8,
          };
          e.attributes = {
            ARIA_EXPANDED: "aria-expanded",
            ARIA_HASPOPUP: "aria-haspopup",
            PERSISTENT: "data-mdc-tooltip-persistent",
            SCROLLABLE_ANCESTOR: "tooltip-scrollable-ancestor",
            HAS_CARET: "data-mdc-tooltip-has-caret",
          };
          var o, s, a, c, u, l;
          (e.events = { HIDDEN: "MDCTooltip:hidden" }),
            ((s = o = o || {})[(s.DETECTED = 0)] = "DETECTED"),
            (s[(s.START = 1)] = "START"),
            (s[(s.CENTER = 2)] = "CENTER"),
            (s[(s.END = 3)] = "END"),
            (e.XPosition = o),
            ((c = a = a || {})[(c.DETECTED = 0)] = "DETECTED"),
            (c[(c.ABOVE = 1)] = "ABOVE"),
            (c[(c.BELOW = 2)] = "BELOW"),
            (e.YPosition = a),
            ((l = u = u || {})[(l.BOUNDED = 0)] = "BOUNDED"),
            (l[(l.UNBOUNDED = 1)] = "UNBOUNDED"),
            (e.AnchorBoundaryType = u);
          var d, p, h, f, y, C;
          (e.strings = {
            LEFT: "left",
            RIGHT: "right",
            CENTER: "center",
            TOP: "top",
            BOTTOM: "bottom",
          }),
            ((p = d = d || {})[(p.DETECTED = 0)] = "DETECTED"),
            (p[(p.ABOVE_START = 1)] = "ABOVE_START"),
            (p[(p.ABOVE_CENTER = 2)] = "ABOVE_CENTER"),
            (p[(p.ABOVE_END = 3)] = "ABOVE_END"),
            (p[(p.TOP_SIDE_START = 4)] = "TOP_SIDE_START"),
            (p[(p.CENTER_SIDE_START = 5)] = "CENTER_SIDE_START"),
            (p[(p.BOTTOM_SIDE_START = 6)] = "BOTTOM_SIDE_START"),
            (p[(p.TOP_SIDE_END = 7)] = "TOP_SIDE_END"),
            (p[(p.CENTER_SIDE_END = 8)] = "CENTER_SIDE_END"),
            (p[(p.BOTTOM_SIDE_END = 9)] = "BOTTOM_SIDE_END"),
            (p[(p.BELOW_START = 10)] = "BELOW_START"),
            (p[(p.BELOW_CENTER = 11)] = "BELOW_CENTER"),
            (p[(p.BELOW_END = 12)] = "BELOW_END"),
            (e.PositionWithCaret = d),
            ((f = h = h || {})[(f.ABOVE = 1)] = "ABOVE"),
            (f[(f.BELOW = 2)] = "BELOW"),
            (f[(f.SIDE_TOP = 3)] = "SIDE_TOP"),
            (f[(f.SIDE_CENTER = 4)] = "SIDE_CENTER"),
            (f[(f.SIDE_BOTTOM = 5)] = "SIDE_BOTTOM"),
            (e.YPositionWithCaret = h),
            ((C = y = y || {})[(C.START = 1)] = "START"),
            (C[(C.CENTER = 2)] = "CENTER"),
            (C[(C.END = 3)] = "END"),
            (C[(C.SIDE_START = 4)] = "SIDE_START"),
            (C[(C.SIDE_END = 5)] = "SIDE_END"),
            (e.XPositionWithCaret = y);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTopAppBarFoundation = void 0);
          var o,
            s = n(9),
            a = n(44),
            c =
              ((o = a.MDCTopAppBarBaseFoundation),
              r(u, o),
              (u.prototype.destroy = function () {
                o.prototype.destroy.call(this),
                  this.adapter.setStyle("top", "");
              }),
              (u.prototype.handleTargetScroll = function () {
                var t = Math.max(this.adapter.getViewportScrollY(), 0),
                  e = t - this.lastScrollPosition;
                (this.lastScrollPosition = t),
                  this.isCurrentlyBeingResized ||
                    ((this.currentAppBarOffsetTop -= e),
                    0 < this.currentAppBarOffsetTop
                      ? (this.currentAppBarOffsetTop = 0)
                      : Math.abs(this.currentAppBarOffsetTop) >
                          this.topAppBarHeight &&
                        (this.currentAppBarOffsetTop = -this.topAppBarHeight),
                    this.moveTopAppBar());
              }),
              (u.prototype.handleWindowResize = function () {
                var t = this;
                this.resizeThrottleId ||
                  (this.resizeThrottleId = setTimeout(function () {
                    (t.resizeThrottleId = 0), t.throttledResizeHandler();
                  }, s.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),
                  (this.isCurrentlyBeingResized = !0),
                  this.resizeDebounceId && clearTimeout(this.resizeDebounceId),
                  (this.resizeDebounceId = setTimeout(function () {
                    t.handleTargetScroll(),
                      (t.isCurrentlyBeingResized = !1),
                      (t.resizeDebounceId = 0);
                  }, s.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS));
              }),
              (u.prototype.checkForUpdate = function () {
                var t = -this.topAppBarHeight,
                  e = this.currentAppBarOffsetTop < 0,
                  n = this.currentAppBarOffsetTop > t,
                  i = e && n;
                if (i) this.wasDocked = !1;
                else {
                  if (!this.wasDocked) return (this.wasDocked = !0);
                  if (this.isDockedShowing !== n)
                    return (this.isDockedShowing = n), !0;
                }
                return i;
              }),
              (u.prototype.moveTopAppBar = function () {
                if (this.checkForUpdate()) {
                  var t = this.currentAppBarOffsetTop;
                  Math.abs(t) >= this.topAppBarHeight &&
                    (t = -s.numbers.MAX_TOP_APP_BAR_HEIGHT),
                    this.adapter.setStyle("top", t + "px");
                }
              }),
              (u.prototype.throttledResizeHandler = function () {
                var t = this.adapter.getTopAppBarHeight();
                this.topAppBarHeight !== t &&
                  ((this.wasDocked = !1),
                  (this.currentAppBarOffsetTop -= this.topAppBarHeight - t),
                  (this.topAppBarHeight = t)),
                  this.handleTargetScroll();
              }),
              u);
          function u(t) {
            var e = o.call(this, t) || this;
            return (
              (e.wasDocked = !0),
              (e.isDockedShowing = !0),
              (e.currentAppBarOffsetTop = 0),
              (e.isCurrentlyBeingResized = !1),
              (e.resizeThrottleId = 0),
              (e.resizeDebounceId = 0),
              (e.lastScrollPosition = e.adapter.getViewportScrollY()),
              (e.topAppBarHeight = e.adapter.getTopAppBarHeight()),
              e
            );
          }
          (e.MDCTopAppBarFoundation = c), (e.default = c);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTopAppBarBaseFoundation = void 0);
          var s,
            a = n(0),
            c = n(9),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "numbers", {
                get: function () {
                  return c.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    setStyle: function () {},
                    getTopAppBarHeight: function () {
                      return 0;
                    },
                    notifyNavigationIconClicked: function () {},
                    getViewportScrollY: function () {
                      return 0;
                    },
                    getTotalActionItems: function () {
                      return 0;
                    },
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.handleTargetScroll = function () {}),
              (l.prototype.handleWindowResize = function () {}),
              (l.prototype.handleNavigationClick = function () {
                this.adapter.notifyNavigationIconClicked();
              }),
              l);
          function l(t) {
            return s.call(this, o(o({}, l.defaultAdapter), t)) || this;
          }
          (e.MDCTopAppBarBaseFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCBannerFoundation = void 0);
          var s,
            a = n(0),
            c = n(18),
            u = c.cssClasses.OPENING,
            l = c.cssClasses.OPEN,
            d = c.cssClasses.CLOSING,
            p =
              ((s = a.MDCFoundation),
              r(h, s),
              Object.defineProperty(h, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    getContentHeight: function () {
                      return 0;
                    },
                    notifyClosed: function () {},
                    notifyClosing: function () {},
                    notifyOpened: function () {},
                    notifyOpening: function () {},
                    notifyActionClicked: function () {},
                    releaseFocus: function () {},
                    removeClass: function () {},
                    setStyleProperty: function () {},
                    trapFocus: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (h.prototype.destroy = function () {
                cancelAnimationFrame(this.animationFrame),
                  (this.animationFrame = 0),
                  clearTimeout(this.animationTimer),
                  (this.animationTimer = 0);
              }),
              (h.prototype.open = function () {
                var t = this;
                (this.isOpened = !0),
                  this.adapter.notifyOpening(),
                  this.adapter.removeClass(d),
                  this.adapter.addClass(u);
                var e = this.adapter.getContentHeight();
                this.animationFrame = requestAnimationFrame(function () {
                  t.adapter.addClass(l),
                    t.adapter.setStyleProperty("height", e + "px"),
                    (t.animationTimer = setTimeout(function () {
                      t.handleAnimationTimerEnd(),
                        t.adapter.trapFocus(),
                        t.adapter.notifyOpened();
                    }, c.numbers.BANNER_ANIMATION_OPEN_TIME_MS));
                });
              }),
              (h.prototype.close = function (t) {
                var e = this;
                this.isOpened &&
                  (cancelAnimationFrame(this.animationFrame),
                  (this.animationFrame = 0),
                  (this.isOpened = !1),
                  this.adapter.notifyClosing(t),
                  this.adapter.addClass(d),
                  this.adapter.setStyleProperty("height", "0"),
                  this.adapter.removeClass(l),
                  this.adapter.removeClass(u),
                  clearTimeout(this.animationTimer),
                  (this.animationTimer = setTimeout(function () {
                    e.adapter.releaseFocus(),
                      e.handleAnimationTimerEnd(),
                      e.adapter.notifyClosed(t);
                  }, c.numbers.BANNER_ANIMATION_CLOSE_TIME_MS)));
              }),
              (h.prototype.isOpen = function () {
                return this.isOpened;
              }),
              (h.prototype.handlePrimaryActionClick = function (t) {
                void 0 === t && (t = !1),
                  t
                    ? this.adapter.notifyActionClicked(0)
                    : this.close(c.CloseReason.PRIMARY);
              }),
              (h.prototype.handleSecondaryActionClick = function (t) {
                void 0 === t && (t = !1),
                  t
                    ? this.adapter.notifyActionClicked(1)
                    : this.close(c.CloseReason.SECONDARY);
              }),
              (h.prototype.layout = function () {
                var t = this.adapter.getContentHeight();
                this.adapter.setStyleProperty("height", t + "px");
              }),
              (h.prototype.handleAnimationTimerEnd = function () {
                (this.animationTimer = 0),
                  this.adapter.removeClass(u),
                  this.adapter.removeClass(d);
              }),
              h);
          function h(t) {
            var e = s.call(this, o(o({}, h.defaultAdapter), t)) || this;
            return (
              (e.isOpened = !1),
              (e.animationFrame = 0),
              (e.animationTimer = 0),
              e
            );
          }
          e.MDCBannerFoundation = p;
        },
        function (t, e, n) {
          "use strict";
          var i,
            u =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            l =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCCheckbox = void 0);
          var s,
            a = n(10),
            c = n(1),
            d = n(5),
            p = n(3),
            h = n(2),
            f = n(4),
            y = n(20),
            C = n(48),
            E = ["checked", "indeterminate"],
            g =
              ((s = c.MDCComponent),
              r(_, s),
              (_.attachTo = function (t) {
                return new _(t);
              }),
              Object.defineProperty(_.prototype, "ripple", {
                get: function () {
                  return this.rippleSurface;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(_.prototype, "checked", {
                get: function () {
                  return this.getNativeControl().checked;
                },
                set: function (t) {
                  this.getNativeControl().checked = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(_.prototype, "indeterminate", {
                get: function () {
                  return this.getNativeControl().indeterminate;
                },
                set: function (t) {
                  this.getNativeControl().indeterminate = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(_.prototype, "disabled", {
                get: function () {
                  return this.getNativeControl().disabled;
                },
                set: function (t) {
                  this.foundation.setDisabled(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(_.prototype, "value", {
                get: function () {
                  return this.getNativeControl().value;
                },
                set: function (t) {
                  this.getNativeControl().value = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (_.prototype.initialize = function () {
                var t = y.strings.DATA_INDETERMINATE_ATTR;
                (this.getNativeControl().indeterminate =
                  "true" === this.getNativeControl().getAttribute(t)),
                  this.getNativeControl().removeAttribute(t);
              }),
              (_.prototype.initialSyncWithDOM = function () {
                var t = this;
                (this.handleChange = function () {
                  t.foundation.handleChange();
                }),
                  (this.handleAnimationEnd = function () {
                    t.foundation.handleAnimationEnd();
                  }),
                  this.getNativeControl().addEventListener(
                    "change",
                    this.handleChange
                  ),
                  this.listen(
                    a.getCorrectEventName(window, "animationend"),
                    this.handleAnimationEnd
                  ),
                  this.installPropertyChangeHooks();
              }),
              (_.prototype.destroy = function () {
                this.rippleSurface.destroy(),
                  this.getNativeControl().removeEventListener(
                    "change",
                    this.handleChange
                  ),
                  this.unlisten(
                    a.getCorrectEventName(window, "animationend"),
                    this.handleAnimationEnd
                  ),
                  this.uninstallPropertyChangeHooks(),
                  s.prototype.destroy.call(this);
              }),
              (_.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    forceLayout: function () {
                      return n.root.offsetWidth;
                    },
                    hasNativeControl: function () {
                      return !!n.getNativeControl();
                    },
                    isAttachedToDOM: function () {
                      return Boolean(n.root.parentNode);
                    },
                    isChecked: function () {
                      return n.checked;
                    },
                    isIndeterminate: function () {
                      return n.indeterminate;
                    },
                    removeClass: function (t) {
                      n.root.classList.remove(t);
                    },
                    removeNativeControlAttr: function (t) {
                      n.getNativeControl().removeAttribute(t);
                    },
                    setNativeControlAttr: function (t, e) {
                      n.getNativeControl().setAttribute(t, e);
                    },
                    setNativeControlDisabled: function (t) {
                      n.getNativeControl().disabled = t;
                    },
                  };
                return new C.MDCCheckboxFoundation(t);
              }),
              (_.prototype.createRipple = function () {
                var n = this,
                  t = o(o({}, h.MDCRipple.createAdapter(this)), {
                    deregisterInteractionHandler: function (t, e) {
                      n.getNativeControl().removeEventListener(
                        t,
                        e,
                        d.applyPassive()
                      );
                    },
                    isSurfaceActive: function () {
                      return p.matches(n.getNativeControl(), ":active");
                    },
                    isUnbounded: function () {
                      return !0;
                    },
                    registerInteractionHandler: function (t, e) {
                      n.getNativeControl().addEventListener(
                        t,
                        e,
                        d.applyPassive()
                      );
                    },
                  });
                return new h.MDCRipple(this.root, new f.MDCRippleFoundation(t));
              }),
              (_.prototype.installPropertyChangeHooks = function () {
                function t(t) {
                  var e = Object.getOwnPropertyDescriptor(s, t);
                  if (!m(e)) return { value: void 0 };
                  var n = e.get,
                    i = {
                      configurable: e.configurable,
                      enumerable: e.enumerable,
                      get: n,
                      set: function (t) {
                        e.set.call(o, t), r.foundation.handleChange();
                      },
                    };
                  Object.defineProperty(o, t, i);
                }
                var e,
                  n,
                  r = this,
                  o = this.getNativeControl(),
                  s = Object.getPrototypeOf(o);
                try {
                  for (var i = l(E), a = i.next(); !a.done; a = i.next()) {
                    var c = t(a.value);
                    if ("object" === (void 0 === c ? "undefined" : u(c)))
                      return c.value;
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    a && !a.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (_.prototype.uninstallPropertyChangeHooks = function () {
                var e,
                  t,
                  n = this.getNativeControl(),
                  i = Object.getPrototypeOf(n);
                try {
                  for (var r = l(E), o = r.next(); !o.done; o = r.next()) {
                    var s = o.value,
                      a = Object.getOwnPropertyDescriptor(i, s);
                    if (!m(a)) return;
                    Object.defineProperty(n, s, a);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (t = r.return) && t.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (_.prototype.getNativeControl = function () {
                var t = y.strings.NATIVE_CONTROL_SELECTOR,
                  e = this.root.querySelector(t);
                if (!e)
                  throw new Error(
                    "Checkbox component requires a " + t + " element"
                  );
                return e;
              }),
              _);
          function _() {
            var t = (null !== s && s.apply(this, arguments)) || this;
            return (t.rippleSurface = t.createRipple()), t;
          }
          function m(t) {
            return !!t && "function" == typeof t.set;
          }
          e.MDCCheckbox = g;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.numbers = e.strings = e.cssClasses = void 0),
            (e.cssClasses = {
              BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
              FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
              FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
              ROOT: "mdc-ripple-upgraded",
              UNBOUNDED: "mdc-ripple-upgraded--unbounded",
            }),
            (e.strings = {
              VAR_FG_SCALE: "--mdc-ripple-fg-scale",
              VAR_FG_SIZE: "--mdc-ripple-fg-size",
              VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
              VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
              VAR_LEFT: "--mdc-ripple-left",
              VAR_TOP: "--mdc-ripple-top",
            }),
            (e.numbers = {
              DEACTIVATION_TIMEOUT_MS: 225,
              FG_DEACTIVATION_MS: 150,
              INITIAL_ORIGIN_SCALE: 0.6,
              PADDING: 10,
              TAP_DELAY_MS: 300,
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCCheckboxFoundation = void 0);
          var s,
            a = n(0),
            p = n(20),
            c =
              ((s = a.MDCFoundation),
              r(h, s),
              Object.defineProperty(h, "cssClasses", {
                get: function () {
                  return p.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "strings", {
                get: function () {
                  return p.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "numbers", {
                get: function () {
                  return p.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    forceLayout: function () {},
                    hasNativeControl: function () {
                      return !1;
                    },
                    isAttachedToDOM: function () {
                      return !1;
                    },
                    isChecked: function () {
                      return !1;
                    },
                    isIndeterminate: function () {
                      return !1;
                    },
                    removeClass: function () {},
                    removeNativeControlAttr: function () {},
                    setNativeControlAttr: function () {},
                    setNativeControlDisabled: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (h.prototype.init = function () {
                (this.currentCheckState = this.determineCheckState()),
                  this.updateAriaChecked(),
                  this.adapter.addClass(p.cssClasses.UPGRADED);
              }),
              (h.prototype.destroy = function () {
                clearTimeout(this.animEndLatchTimer);
              }),
              (h.prototype.setDisabled = function (t) {
                this.adapter.setNativeControlDisabled(t),
                  t
                    ? this.adapter.addClass(p.cssClasses.DISABLED)
                    : this.adapter.removeClass(p.cssClasses.DISABLED);
              }),
              (h.prototype.handleAnimationEnd = function () {
                var t = this;
                this.enableAnimationEndHandler &&
                  (clearTimeout(this.animEndLatchTimer),
                  (this.animEndLatchTimer = setTimeout(function () {
                    t.adapter.removeClass(t.currentAnimationClass),
                      (t.enableAnimationEndHandler = !1);
                  }, p.numbers.ANIM_END_LATCH_MS)));
              }),
              (h.prototype.handleChange = function () {
                this.transitionCheckState();
              }),
              (h.prototype.transitionCheckState = function () {
                if (this.adapter.hasNativeControl()) {
                  var t = this.currentCheckState,
                    e = this.determineCheckState();
                  if (t !== e) {
                    this.updateAriaChecked();
                    var n = p.strings.TRANSITION_STATE_UNCHECKED,
                      i = p.cssClasses.SELECTED;
                    e === n
                      ? this.adapter.removeClass(i)
                      : this.adapter.addClass(i),
                      0 < this.currentAnimationClass.length &&
                        (clearTimeout(this.animEndLatchTimer),
                        this.adapter.forceLayout(),
                        this.adapter.removeClass(this.currentAnimationClass)),
                      (this.currentAnimationClass =
                        this.getTransitionAnimationClass(t, e)),
                      (this.currentCheckState = e),
                      this.adapter.isAttachedToDOM() &&
                        0 < this.currentAnimationClass.length &&
                        (this.adapter.addClass(this.currentAnimationClass),
                        (this.enableAnimationEndHandler = !0));
                  }
                }
              }),
              (h.prototype.determineCheckState = function () {
                var t = p.strings.TRANSITION_STATE_INDETERMINATE,
                  e = p.strings.TRANSITION_STATE_CHECKED,
                  n = p.strings.TRANSITION_STATE_UNCHECKED;
                return this.adapter.isIndeterminate()
                  ? t
                  : this.adapter.isChecked()
                  ? e
                  : n;
              }),
              (h.prototype.getTransitionAnimationClass = function (t, e) {
                var n = p.strings.TRANSITION_STATE_INIT,
                  i = p.strings.TRANSITION_STATE_CHECKED,
                  r = p.strings.TRANSITION_STATE_UNCHECKED,
                  o = h.cssClasses,
                  s = o.ANIM_UNCHECKED_CHECKED,
                  a = o.ANIM_UNCHECKED_INDETERMINATE,
                  c = o.ANIM_CHECKED_UNCHECKED,
                  u = o.ANIM_CHECKED_INDETERMINATE,
                  l = o.ANIM_INDETERMINATE_CHECKED,
                  d = o.ANIM_INDETERMINATE_UNCHECKED;
                switch (t) {
                  case n:
                    return e === r ? "" : e === i ? l : d;
                  case r:
                    return e === i ? s : a;
                  case i:
                    return e === r ? c : u;
                  default:
                    return e === i ? l : d;
                }
              }),
              (h.prototype.updateAriaChecked = function () {
                this.adapter.isIndeterminate()
                  ? this.adapter.setNativeControlAttr(
                      p.strings.ARIA_CHECKED_ATTR,
                      p.strings.ARIA_CHECKED_INDETERMINATE_VALUE
                    )
                  : this.adapter.removeNativeControlAttr(
                      p.strings.ARIA_CHECKED_ATTR
                    );
              }),
              h);
          function h(t) {
            var e = s.call(this, o(o({}, h.defaultAdapter), t)) || this;
            return (
              (e.currentCheckState = p.strings.TRANSITION_STATE_INIT),
              (e.currentAnimationClass = ""),
              (e.animEndLatchTimer = 0),
              (e.enableAnimationEndHandler = !1),
              e
            );
          }
          (e.MDCCheckboxFoundation = c), (e.default = c);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCChipTrailingAction = void 0);
          var o,
            s = n(1),
            a = n(2),
            c = n(4),
            u = n(12),
            l = n(50),
            d =
              ((o = s.MDCComponent),
              r(p, o),
              Object.defineProperty(p.prototype, "ripple", {
                get: function () {
                  return this.rippleSurface;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.attachTo = function (t) {
                return new p(t);
              }),
              (p.prototype.initialize = function (t) {
                void 0 === t &&
                  (t = function (t, e) {
                    return new a.MDCRipple(t, e);
                  });
                var e = a.MDCRipple.createAdapter(this);
                this.rippleSurface = t(this.root, new c.MDCRippleFoundation(e));
              }),
              (p.prototype.initialSyncWithDOM = function () {
                var e = this;
                (this.handleClick = function (t) {
                  e.foundation.handleClick(t);
                }),
                  (this.handleKeydown = function (t) {
                    e.foundation.handleKeydown(t);
                  }),
                  this.listen("click", this.handleClick),
                  this.listen("keydown", this.handleKeydown);
              }),
              (p.prototype.destroy = function () {
                this.rippleSurface.destroy(),
                  this.unlisten("click", this.handleClick),
                  this.unlisten("keydown", this.handleKeydown),
                  o.prototype.destroy.call(this);
              }),
              (p.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    focus: function () {
                      n.root.focus();
                    },
                    getAttribute: function (t) {
                      return n.root.getAttribute(t);
                    },
                    notifyInteraction: function (t) {
                      return n.emit(
                        u.strings.INTERACTION_EVENT,
                        { trigger: t },
                        !0
                      );
                    },
                    notifyNavigation: function (t) {
                      n.emit(u.strings.NAVIGATION_EVENT, { key: t }, !0);
                    },
                    setAttribute: function (t, e) {
                      n.root.setAttribute(t, e);
                    },
                  };
                return new l.MDCChipTrailingActionFoundation(t);
              }),
              (p.prototype.isNavigable = function () {
                return this.foundation.isNavigable();
              }),
              (p.prototype.focus = function () {
                this.foundation.focus();
              }),
              (p.prototype.removeFocus = function () {
                this.foundation.removeFocus();
              }),
              p);
          function p() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCChipTrailingAction = d;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCChipTrailingActionFoundation = void 0);
          var s,
            a = n(0),
            c = n(6),
            u = n(12),
            l =
              ((s = a.MDCFoundation),
              r(d, s),
              Object.defineProperty(d, "strings", {
                get: function () {
                  return u.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d, "defaultAdapter", {
                get: function () {
                  return {
                    focus: function () {},
                    getAttribute: function () {
                      return null;
                    },
                    setAttribute: function () {},
                    notifyInteraction: function () {},
                    notifyNavigation: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (d.prototype.handleClick = function (t) {
                t.stopPropagation(),
                  this.adapter.notifyInteraction(u.InteractionTrigger.CLICK);
              }),
              (d.prototype.handleKeydown = function (t) {
                t.stopPropagation();
                var e = c.normalizeKey(t);
                if (this.shouldNotifyInteractionFromKey(e)) {
                  var n = this.getTriggerFromKey(e);
                  this.adapter.notifyInteraction(n);
                } else
                  c.isNavigationEvent(t) && this.adapter.notifyNavigation(e);
              }),
              (d.prototype.removeFocus = function () {
                this.adapter.setAttribute(u.strings.TAB_INDEX, "-1");
              }),
              (d.prototype.focus = function () {
                this.adapter.setAttribute(u.strings.TAB_INDEX, "0"),
                  this.adapter.focus();
              }),
              (d.prototype.isNavigable = function () {
                return (
                  "true" !== this.adapter.getAttribute(u.strings.ARIA_HIDDEN)
                );
              }),
              (d.prototype.shouldNotifyInteractionFromKey = function (t) {
                var e = t === c.KEY.ENTER || t === c.KEY.SPACEBAR,
                  n = t === c.KEY.BACKSPACE || t === c.KEY.DELETE;
                return e || n;
              }),
              (d.prototype.getTriggerFromKey = function (t) {
                return t === c.KEY.SPACEBAR
                  ? u.InteractionTrigger.SPACEBAR_KEY
                  : t === c.KEY.ENTER
                  ? u.InteractionTrigger.ENTER_KEY
                  : t === c.KEY.DELETE
                  ? u.InteractionTrigger.DELETE_KEY
                  : t === c.KEY.BACKSPACE
                  ? u.InteractionTrigger.BACKSPACE_KEY
                  : u.InteractionTrigger.UNSPECIFIED;
              }),
              d);
          function d(t) {
            return s.call(this, o(o({}, d.defaultAdapter), t)) || this;
          }
          (e.MDCChipTrailingActionFoundation = l), (e.default = l);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCChip = void 0);
          var s,
            a = n(1),
            c = n(2),
            u = n(4),
            l = n(49),
            d = n(12),
            p = n(13),
            h = n(21),
            f =
              ((s = a.MDCComponent),
              r(y, s),
              Object.defineProperty(y.prototype, "selected", {
                get: function () {
                  return this.foundation.isSelected();
                },
                set: function (t) {
                  this.foundation.setSelected(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(
                y.prototype,
                "shouldRemoveOnTrailingIconClick",
                {
                  get: function () {
                    return this.foundation.getShouldRemoveOnTrailingIconClick();
                  },
                  set: function (t) {
                    this.foundation.setShouldRemoveOnTrailingIconClick(t);
                  },
                  enumerable: !1,
                  configurable: !0,
                }
              ),
              Object.defineProperty(
                y.prototype,
                "setShouldFocusPrimaryActionOnClick",
                {
                  set: function (t) {
                    this.foundation.setShouldFocusPrimaryActionOnClick(t);
                  },
                  enumerable: !1,
                  configurable: !0,
                }
              ),
              Object.defineProperty(y.prototype, "ripple", {
                get: function () {
                  return this.rippleSurface;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y.prototype, "id", {
                get: function () {
                  return this.root.id;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (y.attachTo = function (t) {
                return new y(t);
              }),
              (y.prototype.initialize = function (t, e) {
                var n = this;
                void 0 === t &&
                  (t = function (t, e) {
                    return new c.MDCRipple(t, e);
                  }),
                  void 0 === e &&
                    (e = function (t) {
                      return new l.MDCChipTrailingAction(t);
                    }),
                  (this.leadingIcon = this.root.querySelector(
                    p.strings.LEADING_ICON_SELECTOR
                  )),
                  (this.checkmark = this.root.querySelector(
                    p.strings.CHECKMARK_SELECTOR
                  )),
                  (this.primaryAction = this.root.querySelector(
                    p.strings.PRIMARY_ACTION_SELECTOR
                  ));
                var i = this.root.querySelector(
                  p.strings.TRAILING_ACTION_SELECTOR
                );
                i && (this.trailingAction = e(i));
                var r = o(o({}, c.MDCRipple.createAdapter(this)), {
                  computeBoundingRect: function () {
                    return n.foundation.getDimensions();
                  },
                });
                this.rippleSurface = t(this.root, new u.MDCRippleFoundation(r));
              }),
              (y.prototype.initialSyncWithDOM = function () {
                var e = this;
                (this.handleTrailingActionInteraction = function () {
                  e.foundation.handleTrailingActionInteraction();
                }),
                  (this.handleTrailingActionNavigation = function (t) {
                    e.foundation.handleTrailingActionNavigation(t);
                  }),
                  (this.handleClick = function () {
                    e.foundation.handleClick();
                  }),
                  (this.handleKeydown = function (t) {
                    e.foundation.handleKeydown(t);
                  }),
                  (this.handleTransitionEnd = function (t) {
                    e.foundation.handleTransitionEnd(t);
                  }),
                  (this.handleFocusIn = function (t) {
                    e.foundation.handleFocusIn(t);
                  }),
                  (this.handleFocusOut = function (t) {
                    e.foundation.handleFocusOut(t);
                  }),
                  this.listen("transitionend", this.handleTransitionEnd),
                  this.listen("click", this.handleClick),
                  this.listen("keydown", this.handleKeydown),
                  this.listen("focusin", this.handleFocusIn),
                  this.listen("focusout", this.handleFocusOut),
                  this.trailingAction &&
                    (this.listen(
                      d.strings.INTERACTION_EVENT,
                      this.handleTrailingActionInteraction
                    ),
                    this.listen(
                      d.strings.NAVIGATION_EVENT,
                      this.handleTrailingActionNavigation
                    ));
              }),
              (y.prototype.destroy = function () {
                this.rippleSurface.destroy(),
                  this.unlisten("transitionend", this.handleTransitionEnd),
                  this.unlisten("keydown", this.handleKeydown),
                  this.unlisten("click", this.handleClick),
                  this.unlisten("focusin", this.handleFocusIn),
                  this.unlisten("focusout", this.handleFocusOut),
                  this.trailingAction &&
                    (this.unlisten(
                      d.strings.INTERACTION_EVENT,
                      this.handleTrailingActionInteraction
                    ),
                    this.unlisten(
                      d.strings.NAVIGATION_EVENT,
                      this.handleTrailingActionNavigation
                    )),
                  s.prototype.destroy.call(this);
              }),
              (y.prototype.beginExit = function () {
                this.foundation.beginExit();
              }),
              (y.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    addClassToLeadingIcon: function (t) {
                      n.leadingIcon && n.leadingIcon.classList.add(t);
                    },
                    eventTargetHasClass: function (t, e) {
                      return !!t && t.classList.contains(e);
                    },
                    focusPrimaryAction: function () {
                      n.primaryAction && n.primaryAction.focus();
                    },
                    focusTrailingAction: function () {
                      n.trailingAction && n.trailingAction.focus();
                    },
                    getAttribute: function (t) {
                      return n.root.getAttribute(t);
                    },
                    getCheckmarkBoundingClientRect: function () {
                      return n.checkmark
                        ? n.checkmark.getBoundingClientRect()
                        : null;
                    },
                    getComputedStyleValue: function (t) {
                      return window
                        .getComputedStyle(n.root)
                        .getPropertyValue(t);
                    },
                    getRootBoundingClientRect: function () {
                      return n.root.getBoundingClientRect();
                    },
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    hasLeadingIcon: function () {
                      return !!n.leadingIcon;
                    },
                    isRTL: function () {
                      return (
                        "rtl" ===
                        window
                          .getComputedStyle(n.root)
                          .getPropertyValue("direction")
                      );
                    },
                    isTrailingActionNavigable: function () {
                      return (
                        !!n.trailingAction && n.trailingAction.isNavigable()
                      );
                    },
                    notifyInteraction: function () {
                      return n.emit(
                        p.strings.INTERACTION_EVENT,
                        { chipId: n.id },
                        !0
                      );
                    },
                    notifyNavigation: function (t, e) {
                      return n.emit(
                        p.strings.NAVIGATION_EVENT,
                        { chipId: n.id, key: t, source: e },
                        !0
                      );
                    },
                    notifyRemoval: function (t) {
                      n.emit(
                        p.strings.REMOVAL_EVENT,
                        { chipId: n.id, removedAnnouncement: t },
                        !0
                      );
                    },
                    notifySelection: function (t, e) {
                      return n.emit(
                        p.strings.SELECTION_EVENT,
                        { chipId: n.id, selected: t, shouldIgnore: e },
                        !0
                      );
                    },
                    notifyTrailingIconInteraction: function () {
                      return n.emit(
                        p.strings.TRAILING_ICON_INTERACTION_EVENT,
                        { chipId: n.id },
                        !0
                      );
                    },
                    notifyEditStart: function () {},
                    notifyEditFinish: function () {},
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    removeClassFromLeadingIcon: function (t) {
                      n.leadingIcon && n.leadingIcon.classList.remove(t);
                    },
                    removeTrailingActionFocus: function () {
                      n.trailingAction && n.trailingAction.removeFocus();
                    },
                    setPrimaryActionAttr: function (t, e) {
                      n.primaryAction && n.primaryAction.setAttribute(t, e);
                    },
                    setStyleProperty: function (t, e) {
                      return n.root.style.setProperty(t, e);
                    },
                  };
                return new h.MDCChipFoundation(t);
              }),
              (y.prototype.setSelectedFromChipSet = function (t, e) {
                this.foundation.setSelectedFromChipSet(t, e);
              }),
              (y.prototype.focusPrimaryAction = function () {
                this.foundation.focusPrimaryAction();
              }),
              (y.prototype.focusTrailingAction = function () {
                this.foundation.focusTrailingAction();
              }),
              (y.prototype.removeFocus = function () {
                this.foundation.removeFocus();
              }),
              (y.prototype.remove = function () {
                var t = this.root.parentNode;
                null !== t && t.removeChild(this.root);
              }),
              y);
          function y() {
            return (null !== s && s.apply(this, arguments)) || this;
          }
          e.MDCChip = f;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCChipSetFoundation = void 0);
          var s,
            a = n(0),
            h = n(13),
            c = n(53),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    announceMessage: function () {},
                    focusChipPrimaryActionAtIndex: function () {},
                    focusChipTrailingActionAtIndex: function () {},
                    getChipListCount: function () {
                      return -1;
                    },
                    getIndexOfChipById: function () {
                      return -1;
                    },
                    hasClass: function () {
                      return !1;
                    },
                    isRTL: function () {
                      return !1;
                    },
                    removeChipAtIndex: function () {},
                    removeFocusFromChipAtIndex: function () {},
                    selectChipAtIndex: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.getSelectedChipIds = function () {
                return this.selectedChipIds.slice();
              }),
              (l.prototype.select = function (t) {
                this.selectImpl(t, !1);
              }),
              (l.prototype.handleChipInteraction = function (t) {
                var e = t.chipId,
                  n = this.adapter.getIndexOfChipById(e);
                this.removeFocusFromChipsExcept(n),
                  (this.adapter.hasClass(c.cssClasses.CHOICE) ||
                    this.adapter.hasClass(c.cssClasses.FILTER)) &&
                    this.toggleSelect(e);
              }),
              (l.prototype.handleChipSelection = function (t) {
                var e = t.chipId,
                  n = t.selected;
                if (!t.shouldIgnore) {
                  var i = 0 <= this.selectedChipIds.indexOf(e);
                  n && !i ? this.select(e) : !n && i && this.deselectImpl(e);
                }
              }),
              (l.prototype.handleChipRemoval = function (t) {
                var e = t.chipId,
                  n = t.removedAnnouncement;
                n && this.adapter.announceMessage(n);
                var i = this.adapter.getIndexOfChipById(e);
                this.deselectAndNotifyClients(e),
                  this.adapter.removeChipAtIndex(i);
                var r = this.adapter.getChipListCount() - 1;
                if (!(r < 0)) {
                  var o = Math.min(i, r);
                  this.removeFocusFromChipsExcept(o),
                    this.adapter.focusChipTrailingActionAtIndex(o);
                }
              }),
              (l.prototype.handleChipNavigation = function (t) {
                var e = t.chipId,
                  n = t.key,
                  i = t.source,
                  r = this.adapter.getChipListCount() - 1,
                  o = this.adapter.getIndexOfChipById(e);
                if (-1 !== o && h.navigationKeys.has(n)) {
                  var s = this.adapter.isRTL(),
                    a =
                      n === h.strings.ARROW_LEFT_KEY ||
                      n === h.strings.IE_ARROW_LEFT_KEY,
                    c =
                      n === h.strings.ARROW_RIGHT_KEY ||
                      n === h.strings.IE_ARROW_RIGHT_KEY,
                    u =
                      n === h.strings.ARROW_DOWN_KEY ||
                      n === h.strings.IE_ARROW_DOWN_KEY,
                    l = (!s && c) || (s && a) || u,
                    d = n === h.strings.HOME_KEY,
                    p = n === h.strings.END_KEY;
                  l ? o++ : d ? (o = 0) : p ? (o = r) : o--,
                    o < 0 ||
                      r < o ||
                      (this.removeFocusFromChipsExcept(o),
                      this.focusChipAction(o, n, i));
                }
              }),
              (l.prototype.focusChipAction = function (t, e, n) {
                var i = h.jumpChipKeys.has(e);
                if (i && n === h.EventSource.PRIMARY)
                  return this.adapter.focusChipPrimaryActionAtIndex(t);
                if (i && n === h.EventSource.TRAILING)
                  return this.adapter.focusChipTrailingActionAtIndex(t);
                var r = this.getDirection(e);
                return r === h.Direction.LEFT
                  ? this.adapter.focusChipTrailingActionAtIndex(t)
                  : r === h.Direction.RIGHT
                  ? this.adapter.focusChipPrimaryActionAtIndex(t)
                  : void 0;
              }),
              (l.prototype.getDirection = function (t) {
                var e = this.adapter.isRTL(),
                  n =
                    t === h.strings.ARROW_LEFT_KEY ||
                    t === h.strings.IE_ARROW_LEFT_KEY,
                  i =
                    t === h.strings.ARROW_RIGHT_KEY ||
                    t === h.strings.IE_ARROW_RIGHT_KEY;
                return (!e && n) || (e && i)
                  ? h.Direction.LEFT
                  : h.Direction.RIGHT;
              }),
              (l.prototype.deselectImpl = function (t, e) {
                void 0 === e && (e = !1);
                var n = this.selectedChipIds.indexOf(t);
                if (0 <= n) {
                  this.selectedChipIds.splice(n, 1);
                  var i = this.adapter.getIndexOfChipById(t);
                  this.adapter.selectChipAtIndex(i, !1, e);
                }
              }),
              (l.prototype.deselectAndNotifyClients = function (t) {
                this.deselectImpl(t, !0);
              }),
              (l.prototype.toggleSelect = function (t) {
                0 <= this.selectedChipIds.indexOf(t)
                  ? this.deselectAndNotifyClients(t)
                  : this.selectAndNotifyClients(t);
              }),
              (l.prototype.removeFocusFromChipsExcept = function (t) {
                for (var e = this.adapter.getChipListCount(), n = 0; n < e; n++)
                  n !== t && this.adapter.removeFocusFromChipAtIndex(n);
              }),
              (l.prototype.selectAndNotifyClients = function (t) {
                this.selectImpl(t, !0);
              }),
              (l.prototype.selectImpl = function (t, e) {
                if (!(0 <= this.selectedChipIds.indexOf(t))) {
                  if (
                    this.adapter.hasClass(c.cssClasses.CHOICE) &&
                    0 < this.selectedChipIds.length
                  ) {
                    var n = this.selectedChipIds[0],
                      i = this.adapter.getIndexOfChipById(n);
                    (this.selectedChipIds = []),
                      this.adapter.selectChipAtIndex(i, !1, e);
                  }
                  this.selectedChipIds.push(t);
                  var r = this.adapter.getIndexOfChipById(t);
                  this.adapter.selectChipAtIndex(r, !0, e);
                }
              }),
              l);
          function l(t) {
            var e = s.call(this, o(o({}, l.defaultAdapter), t)) || this;
            return (e.selectedChipIds = []), e;
          }
          (e.MDCChipSetFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cssClasses = e.strings = void 0),
            (e.strings = { CHIP_SELECTOR: ".mdc-chip" }),
            (e.cssClasses = {
              CHOICE: "mdc-chip-set--choice",
              FILTER: "mdc-chip-set--filter",
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCCircularProgressFoundation = void 0);
          var s,
            a = n(0),
            c = n(55),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    getDeterminateCircleAttribute: function () {
                      return null;
                    },
                    hasClass: function () {
                      return !1;
                    },
                    removeClass: function () {},
                    removeAttribute: function () {},
                    setAttribute: function () {},
                    setDeterminateCircleAttribute: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.init = function () {
                (this.closed = this.adapter.hasClass(
                  c.cssClasses.CLOSED_CLASS
                )),
                  (this.determinate = !this.adapter.hasClass(
                    c.cssClasses.INDETERMINATE_CLASS
                  )),
                  (this.progress = 0),
                  this.determinate &&
                    this.adapter.setAttribute(
                      c.strings.ARIA_VALUENOW,
                      this.progress.toString()
                    ),
                  (this.radius = Number(
                    this.adapter.getDeterminateCircleAttribute(c.strings.RADIUS)
                  ));
              }),
              (l.prototype.setDeterminate = function (t) {
                (this.determinate = t),
                  this.determinate
                    ? (this.adapter.removeClass(
                        c.cssClasses.INDETERMINATE_CLASS
                      ),
                      this.setProgress(this.progress))
                    : (this.adapter.addClass(c.cssClasses.INDETERMINATE_CLASS),
                      this.adapter.removeAttribute(c.strings.ARIA_VALUENOW));
              }),
              (l.prototype.isDeterminate = function () {
                return this.determinate;
              }),
              (l.prototype.setProgress = function (t) {
                if (((this.progress = t), this.determinate)) {
                  var e = (1 - this.progress) * (2 * Math.PI * this.radius);
                  this.adapter.setDeterminateCircleAttribute(
                    c.strings.STROKE_DASHOFFSET,
                    "" + e
                  ),
                    this.adapter.setAttribute(
                      c.strings.ARIA_VALUENOW,
                      this.progress.toString()
                    );
                }
              }),
              (l.prototype.getProgress = function () {
                return this.progress;
              }),
              (l.prototype.open = function () {
                (this.closed = !1),
                  this.adapter.removeClass(c.cssClasses.CLOSED_CLASS),
                  this.adapter.removeAttribute(c.strings.ARIA_HIDDEN);
              }),
              (l.prototype.close = function () {
                (this.closed = !0),
                  this.adapter.addClass(c.cssClasses.CLOSED_CLASS),
                  this.adapter.setAttribute(c.strings.ARIA_HIDDEN, "true");
              }),
              (l.prototype.isClosed = function () {
                return this.closed;
              }),
              l);
          function l(t) {
            return s.call(this, o(o({}, l.defaultAdapter), t)) || this;
          }
          (e.MDCCircularProgressFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.cssClasses = void 0),
            (e.cssClasses = {
              INDETERMINATE_CLASS: "mdc-circular-progress--indeterminate",
              CLOSED_CLASS: "mdc-circular-progress--closed",
            }),
            (e.strings = {
              ARIA_HIDDEN: "aria-hidden",
              ARIA_VALUENOW: "aria-valuenow",
              DETERMINATE_CIRCLE_SELECTOR:
                ".mdc-circular-progress__determinate-circle",
              RADIUS: "r",
              STROKE_DASHOFFSET: "stroke-dashoffset",
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCLinearProgress = void 0);
          var o,
            s = n(1),
            a = n(57),
            c =
              ((o = s.MDCComponent),
              r(u, o),
              (u.attachTo = function (t) {
                return new u(t);
              }),
              Object.defineProperty(u.prototype, "determinate", {
                set: function (t) {
                  this.foundation.setDeterminate(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "progress", {
                set: function (t) {
                  this.foundation.setProgress(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "buffer", {
                set: function (t) {
                  this.foundation.setBuffer(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (u.prototype.open = function () {
                this.foundation.open();
              }),
              (u.prototype.close = function () {
                this.foundation.close();
              }),
              (u.prototype.initialSyncWithDOM = function () {
                var t = this;
                this.root.addEventListener("transitionend", function () {
                  t.foundation.handleTransitionEnd();
                });
              }),
              (u.prototype.getDefaultFoundation = function () {
                var i = this,
                  t = {
                    addClass: function (t) {
                      i.root.classList.add(t);
                    },
                    forceLayout: function () {
                      i.root.getBoundingClientRect();
                    },
                    setBufferBarStyle: function (t, e) {
                      var n = i.root.querySelector(
                        a.MDCLinearProgressFoundation.strings
                          .BUFFER_BAR_SELECTOR
                      );
                      n && n.style.setProperty(t, e);
                    },
                    setPrimaryBarStyle: function (t, e) {
                      var n = i.root.querySelector(
                        a.MDCLinearProgressFoundation.strings
                          .PRIMARY_BAR_SELECTOR
                      );
                      n && n.style.setProperty(t, e);
                    },
                    hasClass: function (t) {
                      return i.root.classList.contains(t);
                    },
                    removeAttribute: function (t) {
                      i.root.removeAttribute(t);
                    },
                    removeClass: function (t) {
                      i.root.classList.remove(t);
                    },
                    setAttribute: function (t, e) {
                      i.root.setAttribute(t, e);
                    },
                    setStyle: function (t, e) {
                      i.root.style.setProperty(t, e);
                    },
                    attachResizeObserver: function (t) {
                      var e = window.ResizeObserver;
                      if (e) {
                        var n = new e(t);
                        return n.observe(i.root), n;
                      }
                      return null;
                    },
                    getWidth: function () {
                      return i.root.offsetWidth;
                    },
                  };
                return new a.MDCLinearProgressFoundation(t);
              }),
              u);
          function u() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCLinearProgress = c;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            a =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCLinearProgressFoundation = void 0);
          var s,
            c = n(10),
            u = n(0),
            l = n(58),
            d =
              ((s = u.MDCFoundation),
              r(p, s),
              Object.defineProperty(p, "cssClasses", {
                get: function () {
                  return l.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "strings", {
                get: function () {
                  return l.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    attachResizeObserver: function () {
                      return null;
                    },
                    forceLayout: function () {},
                    getWidth: function () {
                      return 0;
                    },
                    hasClass: function () {
                      return !1;
                    },
                    setBufferBarStyle: function () {
                      return null;
                    },
                    setPrimaryBarStyle: function () {
                      return null;
                    },
                    setStyle: function () {},
                    removeAttribute: function () {},
                    removeClass: function () {},
                    setAttribute: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.init = function () {
                var s = this;
                (this.determinate = !this.adapter.hasClass(
                  l.cssClasses.INDETERMINATE_CLASS
                )),
                  this.adapter.addClass(l.cssClasses.ANIMATION_READY_CLASS),
                  (this.progress = 0),
                  (this.buffer = 1),
                  (this.observer = this.adapter.attachResizeObserver(function (
                    t
                  ) {
                    var e, n;
                    if (!s.determinate)
                      try {
                        for (
                          var i = a(t), r = i.next();
                          !r.done;
                          r = i.next()
                        ) {
                          var o = r.value;
                          o.contentRect &&
                            s.calculateAndSetDimensions(o.contentRect.width);
                        }
                      } catch (t) {
                        e = { error: t };
                      } finally {
                        try {
                          r && !r.done && (n = i.return) && n.call(i);
                        } finally {
                          if (e) throw e.error;
                        }
                      }
                  })),
                  !this.determinate &&
                    this.observer &&
                    this.calculateAndSetDimensions(this.adapter.getWidth());
              }),
              (p.prototype.setDeterminate = function (t) {
                if (((this.determinate = t), this.determinate))
                  return (
                    this.adapter.removeClass(l.cssClasses.INDETERMINATE_CLASS),
                    this.adapter.setAttribute(
                      l.strings.ARIA_VALUENOW,
                      this.progress.toString()
                    ),
                    this.adapter.setAttribute(l.strings.ARIA_VALUEMAX, "1"),
                    this.adapter.setAttribute(l.strings.ARIA_VALUEMIN, "0"),
                    this.setPrimaryBarProgress(this.progress),
                    void this.setBufferBarProgress(this.buffer)
                  );
                this.observer &&
                  this.calculateAndSetDimensions(this.adapter.getWidth()),
                  this.adapter.addClass(l.cssClasses.INDETERMINATE_CLASS),
                  this.adapter.removeAttribute(l.strings.ARIA_VALUENOW),
                  this.adapter.removeAttribute(l.strings.ARIA_VALUEMAX),
                  this.adapter.removeAttribute(l.strings.ARIA_VALUEMIN),
                  this.setPrimaryBarProgress(1),
                  this.setBufferBarProgress(1);
              }),
              (p.prototype.isDeterminate = function () {
                return this.determinate;
              }),
              (p.prototype.setProgress = function (t) {
                (this.progress = t),
                  this.determinate &&
                    (this.setPrimaryBarProgress(t),
                    this.adapter.setAttribute(
                      l.strings.ARIA_VALUENOW,
                      t.toString()
                    ));
              }),
              (p.prototype.getProgress = function () {
                return this.progress;
              }),
              (p.prototype.setBuffer = function (t) {
                (this.buffer = t),
                  this.determinate && this.setBufferBarProgress(t);
              }),
              (p.prototype.getBuffer = function () {
                return this.buffer;
              }),
              (p.prototype.open = function () {
                this.adapter.removeClass(l.cssClasses.CLOSED_CLASS),
                  this.adapter.removeClass(
                    l.cssClasses.CLOSED_ANIMATION_OFF_CLASS
                  ),
                  this.adapter.removeAttribute(l.strings.ARIA_HIDDEN);
              }),
              (p.prototype.close = function () {
                this.adapter.addClass(l.cssClasses.CLOSED_CLASS),
                  this.adapter.setAttribute(l.strings.ARIA_HIDDEN, "true");
              }),
              (p.prototype.isClosed = function () {
                return this.adapter.hasClass(l.cssClasses.CLOSED_CLASS);
              }),
              (p.prototype.handleTransitionEnd = function () {
                this.adapter.hasClass(l.cssClasses.CLOSED_CLASS) &&
                  this.adapter.addClass(
                    l.cssClasses.CLOSED_ANIMATION_OFF_CLASS
                  );
              }),
              (p.prototype.destroy = function () {
                s.prototype.destroy.call(this),
                  this.observer && this.observer.disconnect();
              }),
              (p.prototype.restartAnimation = function () {
                this.adapter.removeClass(l.cssClasses.ANIMATION_READY_CLASS),
                  this.adapter.forceLayout(),
                  this.adapter.addClass(l.cssClasses.ANIMATION_READY_CLASS);
              }),
              (p.prototype.setPrimaryBarProgress = function (t) {
                var e = "scaleX(" + t + ")",
                  n =
                    "undefined" != typeof window
                      ? c.getCorrectPropertyName(window, "transform")
                      : "transform";
                this.adapter.setPrimaryBarStyle(n, e);
              }),
              (p.prototype.setBufferBarProgress = function (t) {
                var e = 100 * t + "%";
                this.adapter.setBufferBarStyle(l.strings.FLEX_BASIS, e);
              }),
              (p.prototype.calculateAndSetDimensions = function (t) {
                var e = t * l.animationDimensionPercentages.PRIMARY_HALF,
                  n = t * l.animationDimensionPercentages.PRIMARY_FULL,
                  i = t * l.animationDimensionPercentages.SECONDARY_QUARTER,
                  r = t * l.animationDimensionPercentages.SECONDARY_HALF,
                  o = t * l.animationDimensionPercentages.SECONDARY_FULL;
                this.adapter.setStyle(
                  "--mdc-linear-progress-primary-half",
                  e + "px"
                ),
                  this.adapter.setStyle(
                    "--mdc-linear-progress-primary-half-neg",
                    -e + "px"
                  ),
                  this.adapter.setStyle(
                    "--mdc-linear-progress-primary-full",
                    n + "px"
                  ),
                  this.adapter.setStyle(
                    "--mdc-linear-progress-primary-full-neg",
                    -n + "px"
                  ),
                  this.adapter.setStyle(
                    "--mdc-linear-progress-secondary-quarter",
                    i + "px"
                  ),
                  this.adapter.setStyle(
                    "--mdc-linear-progress-secondary-quarter-neg",
                    -i + "px"
                  ),
                  this.adapter.setStyle(
                    "--mdc-linear-progress-secondary-half",
                    r + "px"
                  ),
                  this.adapter.setStyle(
                    "--mdc-linear-progress-secondary-half-neg",
                    -r + "px"
                  ),
                  this.adapter.setStyle(
                    "--mdc-linear-progress-secondary-full",
                    o + "px"
                  ),
                  this.adapter.setStyle(
                    "--mdc-linear-progress-secondary-full-neg",
                    -o + "px"
                  ),
                  this.restartAnimation();
              }),
              p);
          function p(t) {
            var e = s.call(this, o(o({}, p.defaultAdapter), t)) || this;
            return (e.observer = null), e;
          }
          (e.MDCLinearProgressFoundation = d), (e.default = d);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.animationDimensionPercentages =
              e.strings =
              e.cssClasses =
                void 0),
            (e.cssClasses = {
              CLOSED_CLASS: "mdc-linear-progress--closed",
              CLOSED_ANIMATION_OFF_CLASS:
                "mdc-linear-progress--closed-animation-off",
              INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
              REVERSED_CLASS: "mdc-linear-progress--reversed",
              ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready",
            }),
            (e.strings = {
              ARIA_HIDDEN: "aria-hidden",
              ARIA_VALUEMAX: "aria-valuemax",
              ARIA_VALUEMIN: "aria-valuemin",
              ARIA_VALUENOW: "aria-valuenow",
              BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
              FLEX_BASIS: "flex-basis",
              PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar",
            }),
            (e.animationDimensionPercentages = {
              PRIMARY_HALF: 0.8367142,
              PRIMARY_FULL: 2.00611057,
              SECONDARY_QUARTER: 0.37651913,
              SECONDARY_HALF: 0.84386165,
              SECONDARY_FULL: 1.60277782,
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__awaiter) ||
              function (t, s, a, c) {
                return new (a = a || Promise)(function (e, n) {
                  function i(t) {
                    try {
                      o(c.next(t));
                    } catch (t) {
                      n(t);
                    }
                  }
                  function r(t) {
                    try {
                      o(c.throw(t));
                    } catch (t) {
                      n(t);
                    }
                  }
                  function o(t) {
                    t.done
                      ? e(t.value)
                      : (function (e) {
                          return e instanceof a
                            ? e
                            : new a(function (t) {
                                t(e);
                              });
                        })(t.value).then(i, r);
                  }
                  o((c = c.apply(t, s || [])).next());
                });
              },
            a =
              (this && this.__generator) ||
              function (n, i) {
                var r,
                  o,
                  s,
                  t,
                  a = {
                    label: 0,
                    sent: function () {
                      if (1 & s[0]) throw s[1];
                      return s[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (t = { next: e(0), throw: e(1), return: e(2) }),
                  "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                      return this;
                    }),
                  t
                );
                function e(e) {
                  return function (t) {
                    return (function (e) {
                      if (r)
                        throw new TypeError("Generator is already executing.");
                      for (; a; )
                        try {
                          if (
                            ((r = 1),
                            o &&
                              (s =
                                2 & e[0]
                                  ? o.return
                                  : e[0]
                                  ? o.throw || ((s = o.return) && s.call(o), 0)
                                  : o.next) &&
                              !(s = s.call(o, e[1])).done)
                          )
                            return s;
                          switch (
                            ((o = 0), s && (e = [2 & e[0], s.value]), e[0])
                          ) {
                            case 0:
                            case 1:
                              s = e;
                              break;
                            case 4:
                              return a.label++, { value: e[1], done: !1 };
                            case 5:
                              a.label++, (o = e[1]), (e = [0]);
                              continue;
                            case 7:
                              (e = a.ops.pop()), a.trys.pop();
                              continue;
                            default:
                              if (
                                !(s =
                                  0 < (s = a.trys).length && s[s.length - 1]) &&
                                (6 === e[0] || 2 === e[0])
                              ) {
                                a = 0;
                                continue;
                              }
                              if (
                                3 === e[0] &&
                                (!s || (e[1] > s[0] && e[1] < s[3]))
                              ) {
                                a.label = e[1];
                                break;
                              }
                              if (6 === e[0] && a.label < s[1]) {
                                (a.label = s[1]), (s = e);
                                break;
                              }
                              if (s && a.label < s[2]) {
                                (a.label = s[2]), a.ops.push(e);
                                break;
                              }
                              s[2] && a.ops.pop(), a.trys.pop();
                              continue;
                          }
                          e = i.call(n, a);
                        } catch (t) {
                          (e = [6, t]), (o = 0);
                        } finally {
                          r = s = 0;
                        }
                      if (5 & e[0]) throw e[1];
                      return { value: e[0] ? e[1] : void 0, done: !0 };
                    })([e, t]);
                  };
                }
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCDataTableFoundation = void 0);
          var c,
            u = n(0),
            l = n(22),
            d =
              ((c = u.MDCFoundation),
              r(p, c),
              Object.defineProperty(p, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    addClassAtRowIndex: function () {},
                    getAttributeByHeaderCellIndex: function () {
                      return "";
                    },
                    getHeaderCellCount: function () {
                      return 0;
                    },
                    getHeaderCellElements: function () {
                      return [];
                    },
                    getRowCount: function () {
                      return 0;
                    },
                    getRowElements: function () {
                      return [];
                    },
                    getRowIdAtIndex: function () {
                      return "";
                    },
                    getRowIndexByChildElement: function () {
                      return 0;
                    },
                    getSelectedRowCount: function () {
                      return 0;
                    },
                    getTableContainerHeight: function () {
                      return 0;
                    },
                    getTableHeaderHeight: function () {
                      return 0;
                    },
                    isCheckboxAtRowIndexChecked: function () {
                      return !1;
                    },
                    isHeaderRowCheckboxChecked: function () {
                      return !1;
                    },
                    isRowsSelectable: function () {
                      return !1;
                    },
                    notifyRowSelectionChanged: function () {},
                    notifySelectedAll: function () {},
                    notifySortAction: function () {},
                    notifyUnselectedAll: function () {},
                    notifyRowClick: function () {},
                    registerHeaderRowCheckbox: function () {},
                    registerRowCheckboxes: function () {},
                    removeClass: function () {},
                    removeClassAtRowIndex: function () {},
                    removeClassNameByHeaderCellIndex: function () {},
                    setAttributeAtRowIndex: function () {},
                    setAttributeByHeaderCellIndex: function () {},
                    setClassNameByHeaderCellIndex: function () {},
                    setHeaderRowCheckboxChecked: function () {},
                    setHeaderRowCheckboxIndeterminate: function () {},
                    setProgressIndicatorStyles: function () {},
                    setRowCheckboxCheckedAtIndex: function () {},
                    setSortStatusLabelByHeaderCellIndex: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.layout = function () {
                this.adapter.isRowsSelectable() &&
                  (this.adapter.registerHeaderRowCheckbox(),
                  this.adapter.registerRowCheckboxes(),
                  this.setHeaderRowCheckboxState());
              }),
              (p.prototype.layoutAsync = function () {
                return s(this, void 0, void 0, function () {
                  return a(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.adapter.isRowsSelectable()
                          ? [4, this.adapter.registerHeaderRowCheckbox()]
                          : [3, 3];
                      case 1:
                        return (
                          t.sent(), [4, this.adapter.registerRowCheckboxes()]
                        );
                      case 2:
                        t.sent(),
                          this.setHeaderRowCheckboxState(),
                          (t.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (p.prototype.getRows = function () {
                return this.adapter.getRowElements();
              }),
              (p.prototype.getHeaderCells = function () {
                return this.adapter.getHeaderCellElements();
              }),
              (p.prototype.setSelectedRowIds = function (t) {
                for (var e = 0; e < this.adapter.getRowCount(); e++) {
                  var n = this.adapter.getRowIdAtIndex(e),
                    i = !1;
                  n && 0 <= t.indexOf(n) && (i = !0),
                    this.adapter.setRowCheckboxCheckedAtIndex(e, i),
                    this.selectRowAtIndex(e, i);
                }
                this.setHeaderRowCheckboxState();
              }),
              (p.prototype.getRowIds = function () {
                for (var t = [], e = 0; e < this.adapter.getRowCount(); e++)
                  t.push(this.adapter.getRowIdAtIndex(e));
                return t;
              }),
              (p.prototype.getSelectedRowIds = function () {
                for (var t = [], e = 0; e < this.adapter.getRowCount(); e++)
                  this.adapter.isCheckboxAtRowIndexChecked(e) &&
                    t.push(this.adapter.getRowIdAtIndex(e));
                return t;
              }),
              (p.prototype.handleHeaderRowCheckboxChange = function () {
                for (
                  var t = this.adapter.isHeaderRowCheckboxChecked(), e = 0;
                  e < this.adapter.getRowCount();
                  e++
                )
                  this.adapter.setRowCheckboxCheckedAtIndex(e, t),
                    this.selectRowAtIndex(e, t);
                t
                  ? this.adapter.notifySelectedAll()
                  : this.adapter.notifyUnselectedAll();
              }),
              (p.prototype.handleRowCheckboxChange = function (t) {
                var e = this.adapter.getRowIndexByChildElement(t.target);
                if (-1 !== e) {
                  var n = this.adapter.isCheckboxAtRowIndexChecked(e);
                  this.selectRowAtIndex(e, n), this.setHeaderRowCheckboxState();
                  var i = this.adapter.getRowIdAtIndex(e);
                  this.adapter.notifyRowSelectionChanged({
                    rowId: i,
                    rowIndex: e,
                    selected: n,
                  });
                }
              }),
              (p.prototype.handleSortAction = function (t) {
                for (
                  var e = t.columnId,
                    n = t.columnIndex,
                    i = t.headerCell,
                    r = 0;
                  r < this.adapter.getHeaderCellCount();
                  r++
                )
                  r !== n &&
                    (this.adapter.removeClassNameByHeaderCellIndex(
                      r,
                      l.cssClasses.HEADER_CELL_SORTED
                    ),
                    this.adapter.removeClassNameByHeaderCellIndex(
                      r,
                      l.cssClasses.HEADER_CELL_SORTED_DESCENDING
                    ),
                    this.adapter.setAttributeByHeaderCellIndex(
                      r,
                      l.strings.ARIA_SORT,
                      l.SortValue.NONE
                    ),
                    this.adapter.setSortStatusLabelByHeaderCellIndex(
                      r,
                      l.SortValue.NONE
                    ));
                this.adapter.setClassNameByHeaderCellIndex(
                  n,
                  l.cssClasses.HEADER_CELL_SORTED
                );
                var o = this.adapter.getAttributeByHeaderCellIndex(
                    n,
                    l.strings.ARIA_SORT
                  ),
                  s = l.SortValue.NONE;
                (s =
                  o === l.SortValue.ASCENDING
                    ? (this.adapter.setClassNameByHeaderCellIndex(
                        n,
                        l.cssClasses.HEADER_CELL_SORTED_DESCENDING
                      ),
                      this.adapter.setAttributeByHeaderCellIndex(
                        n,
                        l.strings.ARIA_SORT,
                        l.SortValue.DESCENDING
                      ),
                      l.SortValue.DESCENDING)
                    : (o === l.SortValue.DESCENDING &&
                        this.adapter.removeClassNameByHeaderCellIndex(
                          n,
                          l.cssClasses.HEADER_CELL_SORTED_DESCENDING
                        ),
                      this.adapter.setAttributeByHeaderCellIndex(
                        n,
                        l.strings.ARIA_SORT,
                        l.SortValue.ASCENDING
                      ),
                      l.SortValue.ASCENDING)),
                  this.adapter.setSortStatusLabelByHeaderCellIndex(n, s),
                  this.adapter.notifySortAction({
                    columnId: e,
                    columnIndex: n,
                    headerCell: i,
                    sortValue: s,
                  });
              }),
              (p.prototype.handleRowClick = function (t) {
                var e = t.rowId,
                  n = t.row;
                this.adapter.notifyRowClick({ rowId: e, row: n });
              }),
              (p.prototype.showProgress = function () {
                var t = this.adapter.getTableHeaderHeight(),
                  e = this.adapter.getTableContainerHeight() - t,
                  n = t;
                this.adapter.setProgressIndicatorStyles({
                  height: e + "px",
                  top: n + "px",
                }),
                  this.adapter.addClass(l.cssClasses.IN_PROGRESS);
              }),
              (p.prototype.hideProgress = function () {
                this.adapter.removeClass(l.cssClasses.IN_PROGRESS);
              }),
              (p.prototype.setHeaderRowCheckboxState = function () {
                0 === this.adapter.getSelectedRowCount()
                  ? (this.adapter.setHeaderRowCheckboxChecked(!1),
                    this.adapter.setHeaderRowCheckboxIndeterminate(!1))
                  : this.adapter.getSelectedRowCount() ===
                    this.adapter.getRowCount()
                  ? (this.adapter.setHeaderRowCheckboxChecked(!0),
                    this.adapter.setHeaderRowCheckboxIndeterminate(!1))
                  : (this.adapter.setHeaderRowCheckboxIndeterminate(!0),
                    this.adapter.setHeaderRowCheckboxChecked(!1));
              }),
              (p.prototype.selectRowAtIndex = function (t, e) {
                e
                  ? (this.adapter.addClassAtRowIndex(
                      t,
                      l.cssClasses.ROW_SELECTED
                    ),
                    this.adapter.setAttributeAtRowIndex(
                      t,
                      l.strings.ARIA_SELECTED,
                      "true"
                    ))
                  : (this.adapter.removeClassAtRowIndex(
                      t,
                      l.cssClasses.ROW_SELECTED
                    ),
                    this.adapter.setAttributeAtRowIndex(
                      t,
                      l.strings.ARIA_SELECTED,
                      "false"
                    ));
              }),
              p);
          function p(t) {
            return c.call(this, o(o({}, p.defaultAdapter), t)) || this;
          }
          e.MDCDataTableFoundation = d;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.areTopsMisaligned =
              e.isScrollAtBottom =
              e.isScrollAtTop =
              e.isScrollable =
              e.createFocusTrapInstance =
                void 0),
            (e.createFocusTrapInstance = function (t, e, n) {
              return e(t, { initialFocusEl: n });
            }),
            (e.isScrollable = function (t) {
              return !!t && t.scrollHeight > t.offsetHeight;
            }),
            (e.isScrollAtTop = function (t) {
              return !!t && 0 === t.scrollTop;
            }),
            (e.isScrollAtBottom = function (t) {
              return (
                !!t &&
                Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight
              );
            }),
            (e.areTopsMisaligned = function (t) {
              var e = new Set();
              return (
                [].forEach.call(t, function (t) {
                  return e.add(t.offsetTop);
                }),
                1 < e.size
              );
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCDialogFoundation = void 0);
          var s,
            a,
            c = n(23),
            u = n(0),
            l = n(62);
          ((a = s = s || {}).POLL_SCROLL_POS = "poll_scroll_position"),
            (a.POLL_LAYOUT_CHANGE = "poll_layout_change");
          var d,
            p =
              ((d = u.MDCFoundation),
              r(h, d),
              Object.defineProperty(h, "cssClasses", {
                get: function () {
                  return l.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "strings", {
                get: function () {
                  return l.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "numbers", {
                get: function () {
                  return l.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "defaultAdapter", {
                get: function () {
                  return {
                    addBodyClass: function () {},
                    addClass: function () {},
                    areButtonsStacked: function () {
                      return !1;
                    },
                    clickDefaultButton: function () {},
                    eventTargetMatches: function () {
                      return !1;
                    },
                    getActionFromEvent: function () {
                      return "";
                    },
                    getInitialFocusEl: function () {
                      return null;
                    },
                    hasClass: function () {
                      return !1;
                    },
                    isContentScrollable: function () {
                      return !1;
                    },
                    notifyClosed: function () {},
                    notifyClosing: function () {},
                    notifyOpened: function () {},
                    notifyOpening: function () {},
                    releaseFocus: function () {},
                    removeBodyClass: function () {},
                    removeClass: function () {},
                    reverseButtons: function () {},
                    trapFocus: function () {},
                    registerContentEventHandler: function () {},
                    deregisterContentEventHandler: function () {},
                    isScrollableContentAtTop: function () {
                      return !1;
                    },
                    isScrollableContentAtBottom: function () {
                      return !1;
                    },
                    registerWindowEventHandler: function () {},
                    deregisterWindowEventHandler: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (h.prototype.init = function () {
                this.adapter.hasClass(l.cssClasses.STACKED) &&
                  this.setAutoStackButtons(!1),
                  (this.isFullscreen = this.adapter.hasClass(
                    l.cssClasses.FULLSCREEN
                  ));
              }),
              (h.prototype.destroy = function () {
                this.animationTimer &&
                  (clearTimeout(this.animationTimer),
                  this.handleAnimationTimerEnd()),
                  this.isFullscreen &&
                    this.adapter.deregisterContentEventHandler(
                      "scroll",
                      this.contentScrollHandler
                    ),
                  this.animFrame.cancelAll(),
                  this.adapter.deregisterWindowEventHandler(
                    "resize",
                    this.windowResizeHandler
                  ),
                  this.adapter.deregisterWindowEventHandler(
                    "orientationchange",
                    this.windowOrientationChangeHandler
                  );
              }),
              (h.prototype.open = function (t) {
                var e = this;
                (this.dialogOpen = !0),
                  this.adapter.notifyOpening(),
                  this.adapter.addClass(l.cssClasses.OPENING),
                  this.isFullscreen &&
                    this.adapter.registerContentEventHandler(
                      "scroll",
                      this.contentScrollHandler
                    ),
                  t &&
                    t.isAboveFullscreenDialog &&
                    this.adapter.addClass(l.cssClasses.SCRIM_HIDDEN),
                  this.adapter.registerWindowEventHandler(
                    "resize",
                    this.windowResizeHandler
                  ),
                  this.adapter.registerWindowEventHandler(
                    "orientationchange",
                    this.windowOrientationChangeHandler
                  ),
                  this.runNextAnimationFrame(function () {
                    e.adapter.addClass(l.cssClasses.OPEN),
                      e.adapter.addBodyClass(l.cssClasses.SCROLL_LOCK),
                      e.layout(),
                      (e.animationTimer = setTimeout(function () {
                        e.handleAnimationTimerEnd(),
                          e.adapter.trapFocus(e.adapter.getInitialFocusEl()),
                          e.adapter.notifyOpened();
                      }, l.numbers.DIALOG_ANIMATION_OPEN_TIME_MS));
                  });
              }),
              (h.prototype.close = function (t) {
                var e = this;
                void 0 === t && (t = ""),
                  this.dialogOpen &&
                    ((this.dialogOpen = !1),
                    this.adapter.notifyClosing(t),
                    this.adapter.addClass(l.cssClasses.CLOSING),
                    this.adapter.removeClass(l.cssClasses.OPEN),
                    this.adapter.removeBodyClass(l.cssClasses.SCROLL_LOCK),
                    this.isFullscreen &&
                      this.adapter.deregisterContentEventHandler(
                        "scroll",
                        this.contentScrollHandler
                      ),
                    this.adapter.deregisterWindowEventHandler(
                      "resize",
                      this.windowResizeHandler
                    ),
                    this.adapter.deregisterWindowEventHandler(
                      "orientationchange",
                      this.windowOrientationChangeHandler
                    ),
                    cancelAnimationFrame(this.animationFrame),
                    (this.animationFrame = 0),
                    clearTimeout(this.animationTimer),
                    (this.animationTimer = setTimeout(function () {
                      e.adapter.releaseFocus(),
                        e.handleAnimationTimerEnd(),
                        e.adapter.notifyClosed(t);
                    }, l.numbers.DIALOG_ANIMATION_CLOSE_TIME_MS)));
              }),
              (h.prototype.showSurfaceScrim = function () {
                var t = this;
                this.adapter.addClass(l.cssClasses.SURFACE_SCRIM_SHOWING),
                  this.runNextAnimationFrame(function () {
                    t.adapter.addClass(l.cssClasses.SURFACE_SCRIM_SHOWN);
                  });
              }),
              (h.prototype.hideSurfaceScrim = function () {
                this.adapter.removeClass(l.cssClasses.SURFACE_SCRIM_SHOWN),
                  this.adapter.addClass(l.cssClasses.SURFACE_SCRIM_HIDING);
              }),
              (h.prototype.handleSurfaceScrimTransitionEnd = function () {
                this.adapter.removeClass(l.cssClasses.SURFACE_SCRIM_HIDING),
                  this.adapter.removeClass(l.cssClasses.SURFACE_SCRIM_SHOWING);
              }),
              (h.prototype.isOpen = function () {
                return this.dialogOpen;
              }),
              (h.prototype.getEscapeKeyAction = function () {
                return this.escapeKeyAction;
              }),
              (h.prototype.setEscapeKeyAction = function (t) {
                this.escapeKeyAction = t;
              }),
              (h.prototype.getScrimClickAction = function () {
                return this.scrimClickAction;
              }),
              (h.prototype.setScrimClickAction = function (t) {
                this.scrimClickAction = t;
              }),
              (h.prototype.getAutoStackButtons = function () {
                return this.autoStackButtons;
              }),
              (h.prototype.setAutoStackButtons = function (t) {
                this.autoStackButtons = t;
              }),
              (h.prototype.getSuppressDefaultPressSelector = function () {
                return this.suppressDefaultPressSelector;
              }),
              (h.prototype.setSuppressDefaultPressSelector = function (t) {
                this.suppressDefaultPressSelector = t;
              }),
              (h.prototype.layout = function () {
                var t = this;
                this.animFrame.request(s.POLL_LAYOUT_CHANGE, function () {
                  t.layoutInternal();
                });
              }),
              (h.prototype.handleClick = function (t) {
                if (
                  this.adapter.eventTargetMatches(
                    t.target,
                    l.strings.SCRIM_SELECTOR
                  ) &&
                  "" !== this.scrimClickAction
                )
                  this.close(this.scrimClickAction);
                else {
                  var e = this.adapter.getActionFromEvent(t);
                  e && this.close(e);
                }
              }),
              (h.prototype.handleKeydown = function (t) {
                var e = "Enter" === t.key || 13 === t.keyCode;
                if (e && !this.adapter.getActionFromEvent(t)) {
                  var n = t.composedPath ? t.composedPath()[0] : t.target,
                    i =
                      !this.suppressDefaultPressSelector ||
                      !this.adapter.eventTargetMatches(
                        n,
                        this.suppressDefaultPressSelector
                      );
                  e && i && this.adapter.clickDefaultButton();
                }
              }),
              (h.prototype.handleDocumentKeydown = function (t) {
                ("Escape" !== t.key && 27 !== t.keyCode) ||
                  "" === this.escapeKeyAction ||
                  this.close(this.escapeKeyAction);
              }),
              (h.prototype.handleScrollEvent = function () {
                var t = this;
                this.animFrame.request(s.POLL_SCROLL_POS, function () {
                  t.toggleScrollDividerHeader(), t.toggleScrollDividerFooter();
                });
              }),
              (h.prototype.layoutInternal = function () {
                this.autoStackButtons && this.detectStackedButtons(),
                  this.toggleScrollableClasses();
              }),
              (h.prototype.handleAnimationTimerEnd = function () {
                (this.animationTimer = 0),
                  this.adapter.removeClass(l.cssClasses.OPENING),
                  this.adapter.removeClass(l.cssClasses.CLOSING);
              }),
              (h.prototype.runNextAnimationFrame = function (t) {
                var e = this;
                cancelAnimationFrame(this.animationFrame),
                  (this.animationFrame = requestAnimationFrame(function () {
                    (e.animationFrame = 0),
                      clearTimeout(e.animationTimer),
                      (e.animationTimer = setTimeout(t, 0));
                  }));
              }),
              (h.prototype.detectStackedButtons = function () {
                this.adapter.removeClass(l.cssClasses.STACKED);
                var t = this.adapter.areButtonsStacked();
                t && this.adapter.addClass(l.cssClasses.STACKED),
                  t !== this.areButtonsStacked &&
                    (this.adapter.reverseButtons(),
                    (this.areButtonsStacked = t));
              }),
              (h.prototype.toggleScrollableClasses = function () {
                this.adapter.removeClass(l.cssClasses.SCROLLABLE),
                  this.adapter.isContentScrollable() &&
                    (this.adapter.addClass(l.cssClasses.SCROLLABLE),
                    this.isFullscreen &&
                      (this.toggleScrollDividerHeader(),
                      this.toggleScrollDividerFooter()));
              }),
              (h.prototype.toggleScrollDividerHeader = function () {
                this.adapter.isScrollableContentAtTop()
                  ? this.adapter.hasClass(l.cssClasses.SCROLL_DIVIDER_HEADER) &&
                    this.adapter.removeClass(l.cssClasses.SCROLL_DIVIDER_HEADER)
                  : this.adapter.addClass(l.cssClasses.SCROLL_DIVIDER_HEADER);
              }),
              (h.prototype.toggleScrollDividerFooter = function () {
                this.adapter.isScrollableContentAtBottom()
                  ? this.adapter.hasClass(l.cssClasses.SCROLL_DIVIDER_FOOTER) &&
                    this.adapter.removeClass(l.cssClasses.SCROLL_DIVIDER_FOOTER)
                  : this.adapter.addClass(l.cssClasses.SCROLL_DIVIDER_FOOTER);
              }),
              h);
          function h(t) {
            var e = d.call(this, o(o({}, h.defaultAdapter), t)) || this;
            return (
              (e.dialogOpen = !1),
              (e.isFullscreen = !1),
              (e.animationFrame = 0),
              (e.animationTimer = 0),
              (e.escapeKeyAction = l.strings.CLOSE_ACTION),
              (e.scrimClickAction = l.strings.CLOSE_ACTION),
              (e.autoStackButtons = !0),
              (e.areButtonsStacked = !1),
              (e.suppressDefaultPressSelector =
                l.strings.SUPPRESS_DEFAULT_PRESS_SELECTOR),
              (e.animFrame = new c.AnimationFrame()),
              (e.contentScrollHandler = function () {
                e.handleScrollEvent();
              }),
              (e.windowResizeHandler = function () {
                e.layout();
              }),
              (e.windowOrientationChangeHandler = function () {
                e.layout();
              }),
              e
            );
          }
          (e.MDCDialogFoundation = p), (e.default = p);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.numbers = e.strings = e.cssClasses = void 0),
            (e.cssClasses = {
              CLOSING: "mdc-dialog--closing",
              OPEN: "mdc-dialog--open",
              OPENING: "mdc-dialog--opening",
              SCROLLABLE: "mdc-dialog--scrollable",
              SCROLL_LOCK: "mdc-dialog-scroll-lock",
              STACKED: "mdc-dialog--stacked",
              FULLSCREEN: "mdc-dialog--fullscreen",
              SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header",
              SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer",
              SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown",
              SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing",
              SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding",
              SCRIM_HIDDEN: "mdc-dialog__scrim--hidden",
            }),
            (e.strings = {
              ACTION_ATTRIBUTE: "data-mdc-dialog-action",
              BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
              BUTTON_SELECTOR: ".mdc-dialog__button",
              CLOSED_EVENT: "MDCDialog:closed",
              CLOSE_ACTION: "close",
              CLOSING_EVENT: "MDCDialog:closing",
              CONTAINER_SELECTOR: ".mdc-dialog__container",
              CONTENT_SELECTOR: ".mdc-dialog__content",
              DESTROY_ACTION: "destroy",
              INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
              OPENED_EVENT: "MDCDialog:opened",
              OPENING_EVENT: "MDCDialog:opening",
              SCRIM_SELECTOR: ".mdc-dialog__scrim",
              SUPPRESS_DEFAULT_PRESS_SELECTOR: [
                "textarea",
                ".mdc-menu .mdc-list-item",
                ".mdc-menu .mdc-deprecated-list-item",
              ].join(", "),
              SURFACE_SELECTOR: ".mdc-dialog__surface",
            }),
            (e.numbers = {
              DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
              DIALOG_ANIMATION_OPEN_TIME_MS: 150,
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.createFocusTrapInstance = void 0),
            (e.createFocusTrapInstance = function (t, e) {
              return e(t, { skipInitialFocus: !0 });
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.preventDefaultEvent = void 0);
          var i = ["input", "button", "textarea", "select"];
          e.preventDefaultEvent = function (t) {
            var e = t.target;
            if (e) {
              var n = ("" + e.tagName).toLowerCase();
              -1 === i.indexOf(n) && t.preventDefault();
            }
          };
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.cssClasses = void 0);
          e.cssClasses = {
            ANIMATE: "mdc-drawer--animate",
            CLOSING: "mdc-drawer--closing",
            DISMISSIBLE: "mdc-drawer--dismissible",
            MODAL: "mdc-drawer--modal",
            OPEN: "mdc-drawer--open",
            OPENING: "mdc-drawer--opening",
            ROOT: "mdc-drawer",
          };
          e.strings = {
            APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
            CLOSE_EVENT: "MDCDrawer:closed",
            OPEN_EVENT: "MDCDrawer:opened",
            SCRIM_SELECTOR: ".mdc-drawer-scrim",
            LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
            LIST_ITEM_ACTIVATED_SELECTOR:
              ".mdc-list-item--activated,.mdc-deprecated-list-item--activated",
          };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCModalDrawerFoundation = void 0);
          var o,
            s = n(26),
            a =
              ((o = s.MDCDismissibleDrawerFoundation),
              r(c, o),
              (c.prototype.handleScrimClick = function () {
                this.close();
              }),
              (c.prototype.opened = function () {
                this.adapter.trapFocus();
              }),
              (c.prototype.closed = function () {
                this.adapter.releaseFocus();
              }),
              c);
          function c() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          (e.MDCModalDrawerFoundation = a), (e.default = a);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cssClasses = void 0),
            (e.cssClasses = {
              LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
              LABEL_REQUIRED: "mdc-floating-label--required",
              LABEL_SHAKE: "mdc-floating-label--shake",
              ROOT: "mdc-floating-label",
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCFormFieldFoundation = void 0);
          var s,
            a = n(0),
            c = n(69),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    activateInputRipple: function () {},
                    deactivateInputRipple: function () {},
                    deregisterInteractionHandler: function () {},
                    registerInteractionHandler: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.init = function () {
                this.adapter.registerInteractionHandler("click", this.click);
              }),
              (l.prototype.destroy = function () {
                this.adapter.deregisterInteractionHandler("click", this.click);
              }),
              (l.prototype.handleClick = function () {
                var t = this;
                this.adapter.activateInputRipple(),
                  requestAnimationFrame(function () {
                    t.adapter.deactivateInputRipple();
                  });
              }),
              l);
          function l(t) {
            var e = s.call(this, o(o({}, l.defaultAdapter), t)) || this;
            return (
              (e.click = function () {
                e.handleClick();
              }),
              e
            );
          }
          (e.MDCFormFieldFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.cssClasses = void 0),
            (e.cssClasses = { ROOT: "mdc-form-field" }),
            (e.strings = { LABEL_SELECTOR: ".mdc-form-field > label" });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCIconButtonToggleFoundation = void 0);
          var s,
            a = n(0),
            c = n(71),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    notifyChange: function () {},
                    removeClass: function () {},
                    getAttr: function () {
                      return null;
                    },
                    setAttr: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.init = function () {
                var t = this.adapter.getAttr(c.strings.DATA_ARIA_LABEL_ON),
                  e = this.adapter.getAttr(c.strings.DATA_ARIA_LABEL_OFF);
                if (t && e) {
                  if (null !== this.adapter.getAttr(c.strings.ARIA_PRESSED))
                    throw new Error(
                      "MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label."
                    );
                  this.hasToggledAriaLabel = !0;
                } else
                  this.adapter.setAttr(
                    c.strings.ARIA_PRESSED,
                    String(this.isOn())
                  );
              }),
              (l.prototype.handleClick = function () {
                this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
              }),
              (l.prototype.isOn = function () {
                return this.adapter.hasClass(c.cssClasses.ICON_BUTTON_ON);
              }),
              (l.prototype.toggle = function (t) {
                if (
                  (void 0 === t && (t = !this.isOn()),
                  t
                    ? this.adapter.addClass(c.cssClasses.ICON_BUTTON_ON)
                    : this.adapter.removeClass(c.cssClasses.ICON_BUTTON_ON),
                  this.hasToggledAriaLabel)
                ) {
                  var e = t
                    ? this.adapter.getAttr(c.strings.DATA_ARIA_LABEL_ON)
                    : this.adapter.getAttr(c.strings.DATA_ARIA_LABEL_OFF);
                  this.adapter.setAttr(c.strings.ARIA_LABEL, e || "");
                } else this.adapter.setAttr(c.strings.ARIA_PRESSED, "" + t);
              }),
              l);
          function l(t) {
            var e = s.call(this, o(o({}, l.defaultAdapter), t)) || this;
            return (e.hasToggledAriaLabel = !1), e;
          }
          (e.MDCIconButtonToggleFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.cssClasses = void 0),
            (e.cssClasses = {
              ICON_BUTTON_ON: "mdc-icon-button--on",
              ROOT: "mdc-icon-button",
            }),
            (e.strings = {
              ARIA_LABEL: "aria-label",
              ARIA_PRESSED: "aria-pressed",
              DATA_ARIA_LABEL_OFF: "data-aria-label-off",
              DATA_ARIA_LABEL_ON: "data-aria-label-on",
              CHANGE_EVENT: "MDCIconButtonToggle:change",
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCLineRippleFoundation = void 0);
          var s,
            a = n(0),
            c = n(73),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    setStyle: function () {},
                    registerEventHandler: function () {},
                    deregisterEventHandler: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.init = function () {
                this.adapter.registerEventHandler(
                  "transitionend",
                  this.transitionEndHandler
                );
              }),
              (l.prototype.destroy = function () {
                this.adapter.deregisterEventHandler(
                  "transitionend",
                  this.transitionEndHandler
                );
              }),
              (l.prototype.activate = function () {
                this.adapter.removeClass(c.cssClasses.LINE_RIPPLE_DEACTIVATING),
                  this.adapter.addClass(c.cssClasses.LINE_RIPPLE_ACTIVE);
              }),
              (l.prototype.setRippleCenter = function (t) {
                this.adapter.setStyle("transform-origin", t + "px center");
              }),
              (l.prototype.deactivate = function () {
                this.adapter.addClass(c.cssClasses.LINE_RIPPLE_DEACTIVATING);
              }),
              (l.prototype.handleTransitionEnd = function (t) {
                var e = this.adapter.hasClass(
                  c.cssClasses.LINE_RIPPLE_DEACTIVATING
                );
                "opacity" === t.propertyName &&
                  e &&
                  (this.adapter.removeClass(c.cssClasses.LINE_RIPPLE_ACTIVE),
                  this.adapter.removeClass(
                    c.cssClasses.LINE_RIPPLE_DEACTIVATING
                  ));
              }),
              l);
          function l(t) {
            var e = s.call(this, o(o({}, l.defaultAdapter), t)) || this;
            return (
              (e.transitionEndHandler = function (t) {
                e.handleTransitionEnd(t);
              }),
              e
            );
          }
          (e.MDCLineRippleFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cssClasses = void 0);
          e.cssClasses = {
            LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
            LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating",
          };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCMenuSurface = void 0);
          var o,
            s = n(1),
            a = n(8),
            c = n(14),
            u = n(10),
            l =
              ((o = s.MDCComponent),
              r(d, o),
              (d.attachTo = function (t) {
                return new d(t);
              }),
              (d.prototype.initialSyncWithDOM = function () {
                var e = this,
                  t = this.root.parentElement;
                (this.anchorElement =
                  t && t.classList.contains(a.cssClasses.ANCHOR) ? t : null),
                  this.root.classList.contains(a.cssClasses.FIXED) &&
                    this.setFixedPosition(!0),
                  (this.handleKeydown = function (t) {
                    e.foundation.handleKeydown(t);
                  }),
                  (this.handleBodyClick = function (t) {
                    e.foundation.handleBodyClick(t);
                  }),
                  (this.registerBodyClickListener = function () {
                    document.body.addEventListener("click", e.handleBodyClick, {
                      capture: !0,
                    });
                  }),
                  (this.deregisterBodyClickListener = function () {
                    document.body.removeEventListener(
                      "click",
                      e.handleBodyClick,
                      { capture: !0 }
                    );
                  }),
                  this.listen("keydown", this.handleKeydown),
                  this.listen(
                    a.strings.OPENED_EVENT,
                    this.registerBodyClickListener
                  ),
                  this.listen(
                    a.strings.CLOSED_EVENT,
                    this.deregisterBodyClickListener
                  );
              }),
              (d.prototype.destroy = function () {
                this.unlisten("keydown", this.handleKeydown),
                  this.unlisten(
                    a.strings.OPENED_EVENT,
                    this.registerBodyClickListener
                  ),
                  this.unlisten(
                    a.strings.CLOSED_EVENT,
                    this.deregisterBodyClickListener
                  ),
                  o.prototype.destroy.call(this);
              }),
              (d.prototype.isOpen = function () {
                return this.foundation.isOpen();
              }),
              (d.prototype.open = function () {
                this.foundation.open();
              }),
              (d.prototype.close = function (t) {
                void 0 === t && (t = !1), this.foundation.close(t);
              }),
              Object.defineProperty(d.prototype, "quickOpen", {
                set: function (t) {
                  this.foundation.setQuickOpen(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (d.prototype.setIsHoisted = function (t) {
                this.foundation.setIsHoisted(t);
              }),
              (d.prototype.setMenuSurfaceAnchorElement = function (t) {
                this.anchorElement = t;
              }),
              (d.prototype.setFixedPosition = function (t) {
                t
                  ? this.root.classList.add(a.cssClasses.FIXED)
                  : this.root.classList.remove(a.cssClasses.FIXED),
                  this.foundation.setFixedPosition(t);
              }),
              (d.prototype.setAbsolutePosition = function (t, e) {
                this.foundation.setAbsolutePosition(t, e),
                  this.setIsHoisted(!0);
              }),
              (d.prototype.setAnchorCorner = function (t) {
                this.foundation.setAnchorCorner(t);
              }),
              (d.prototype.setAnchorMargin = function (t) {
                this.foundation.setAnchorMargin(t);
              }),
              (d.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    hasAnchor: function () {
                      return !!n.anchorElement;
                    },
                    notifyClose: function () {
                      return n.emit(
                        c.MDCMenuSurfaceFoundation.strings.CLOSED_EVENT,
                        {}
                      );
                    },
                    notifyClosing: function () {
                      n.emit(
                        c.MDCMenuSurfaceFoundation.strings.CLOSING_EVENT,
                        {}
                      );
                    },
                    notifyOpen: function () {
                      return n.emit(
                        c.MDCMenuSurfaceFoundation.strings.OPENED_EVENT,
                        {}
                      );
                    },
                    notifyOpening: function () {
                      return n.emit(
                        c.MDCMenuSurfaceFoundation.strings.OPENING_EVENT,
                        {}
                      );
                    },
                    isElementInContainer: function (t) {
                      return n.root.contains(t);
                    },
                    isRtl: function () {
                      return (
                        "rtl" ===
                        getComputedStyle(n.root).getPropertyValue("direction")
                      );
                    },
                    setTransformOrigin: function (t) {
                      var e =
                        u.getCorrectPropertyName(window, "transform") +
                        "-origin";
                      n.root.style.setProperty(e, t);
                    },
                    isFocused: function () {
                      return document.activeElement === n.root;
                    },
                    saveFocus: function () {
                      n.previousFocus = document.activeElement;
                    },
                    restoreFocus: function () {
                      n.root.contains(document.activeElement) &&
                        n.previousFocus &&
                        n.previousFocus.focus &&
                        n.previousFocus.focus();
                    },
                    getInnerDimensions: function () {
                      return {
                        width: n.root.offsetWidth,
                        height: n.root.offsetHeight,
                      };
                    },
                    getAnchorDimensions: function () {
                      return n.anchorElement
                        ? n.anchorElement.getBoundingClientRect()
                        : null;
                    },
                    getWindowDimensions: function () {
                      return {
                        width: window.innerWidth,
                        height: window.innerHeight,
                      };
                    },
                    getBodyDimensions: function () {
                      return {
                        width: document.body.clientWidth,
                        height: document.body.clientHeight,
                      };
                    },
                    getWindowScroll: function () {
                      return { x: window.pageXOffset, y: window.pageYOffset };
                    },
                    setPosition: function (t) {
                      var e = n.root;
                      (e.style.left = "left" in t ? t.left + "px" : ""),
                        (e.style.right = "right" in t ? t.right + "px" : ""),
                        (e.style.top = "top" in t ? t.top + "px" : ""),
                        (e.style.bottom = "bottom" in t ? t.bottom + "px" : "");
                    },
                    setMaxHeight: function (t) {
                      n.root.style.maxHeight = t;
                    },
                  };
                return new c.MDCMenuSurfaceFoundation(t);
              }),
              d);
          function d() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCMenuSurface = l;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCMenu = void 0);
          var o,
            s = n(1),
            a = n(3),
            c = n(24),
            u = n(7),
            l = n(25),
            d = n(74),
            p = n(14),
            h = n(15),
            f = n(76),
            y =
              ((o = s.MDCComponent),
              r(C, o),
              (C.attachTo = function (t) {
                return new C(t);
              }),
              (C.prototype.initialize = function (t, e) {
                void 0 === t &&
                  (t = function (t) {
                    return new d.MDCMenuSurface(t);
                  }),
                  void 0 === e &&
                    (e = function (t) {
                      return new c.MDCList(t);
                    }),
                  (this.menuSurfaceFactory = t),
                  (this.listFactory = e);
              }),
              (C.prototype.initialSyncWithDOM = function () {
                var e = this;
                this.menuSurface = this.menuSurfaceFactory(this.root);
                var t = this.root.querySelector(h.strings.LIST_SELECTOR);
                t
                  ? ((this.list = this.listFactory(t)),
                    (this.list.wrapFocus = !0))
                  : (this.list = null),
                  (this.handleKeydown = function (t) {
                    e.foundation.handleKeydown(t);
                  }),
                  (this.handleItemAction = function (t) {
                    e.foundation.handleItemAction(e.items[t.detail.index]);
                  }),
                  (this.handleMenuSurfaceOpened = function () {
                    e.foundation.handleMenuSurfaceOpened();
                  }),
                  this.menuSurface.listen(
                    p.MDCMenuSurfaceFoundation.strings.OPENED_EVENT,
                    this.handleMenuSurfaceOpened
                  ),
                  this.listen("keydown", this.handleKeydown),
                  this.listen(
                    l.MDCListFoundation.strings.ACTION_EVENT,
                    this.handleItemAction
                  );
              }),
              (C.prototype.destroy = function () {
                this.list && this.list.destroy(),
                  this.menuSurface.destroy(),
                  this.menuSurface.unlisten(
                    p.MDCMenuSurfaceFoundation.strings.OPENED_EVENT,
                    this.handleMenuSurfaceOpened
                  ),
                  this.unlisten("keydown", this.handleKeydown),
                  this.unlisten(
                    l.MDCListFoundation.strings.ACTION_EVENT,
                    this.handleItemAction
                  ),
                  o.prototype.destroy.call(this);
              }),
              Object.defineProperty(C.prototype, "open", {
                get: function () {
                  return this.menuSurface.isOpen();
                },
                set: function (t) {
                  t ? this.menuSurface.open() : this.menuSurface.close();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "wrapFocus", {
                get: function () {
                  return !!this.list && this.list.wrapFocus;
                },
                set: function (t) {
                  this.list && (this.list.wrapFocus = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "hasTypeahead", {
                set: function (t) {
                  this.list && (this.list.hasTypeahead = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "typeaheadInProgress", {
                get: function () {
                  return !!this.list && this.list.typeaheadInProgress;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (C.prototype.typeaheadMatchItem = function (t, e) {
                return this.list ? this.list.typeaheadMatchItem(t, e) : -1;
              }),
              (C.prototype.layout = function () {
                this.list && this.list.layout();
              }),
              Object.defineProperty(C.prototype, "items", {
                get: function () {
                  return this.list ? this.list.listElements : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "singleSelection", {
                set: function (t) {
                  this.list && (this.list.singleSelection = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "selectedIndex", {
                get: function () {
                  return this.list
                    ? this.list.selectedIndex
                    : u.numbers.UNSET_INDEX;
                },
                set: function (t) {
                  this.list && (this.list.selectedIndex = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "quickOpen", {
                set: function (t) {
                  this.menuSurface.quickOpen = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (C.prototype.setDefaultFocusState = function (t) {
                this.foundation.setDefaultFocusState(t);
              }),
              (C.prototype.setAnchorCorner = function (t) {
                this.menuSurface.setAnchorCorner(t);
              }),
              (C.prototype.setAnchorMargin = function (t) {
                this.menuSurface.setAnchorMargin(t);
              }),
              (C.prototype.setSelectedIndex = function (t) {
                this.foundation.setSelectedIndex(t);
              }),
              (C.prototype.setEnabled = function (t, e) {
                this.foundation.setEnabled(t, e);
              }),
              (C.prototype.getOptionByIndex = function (t) {
                return t < this.items.length ? this.items[t] : null;
              }),
              (C.prototype.getPrimaryTextAtIndex = function (t) {
                var e = this.getOptionByIndex(t);
                return (e && this.list && this.list.getPrimaryText(e)) || "";
              }),
              (C.prototype.setFixedPosition = function (t) {
                this.menuSurface.setFixedPosition(t);
              }),
              (C.prototype.setIsHoisted = function (t) {
                this.menuSurface.setIsHoisted(t);
              }),
              (C.prototype.setAbsolutePosition = function (t, e) {
                this.menuSurface.setAbsolutePosition(t, e);
              }),
              (C.prototype.setAnchorElement = function (t) {
                this.menuSurface.anchorElement = t;
              }),
              (C.prototype.getDefaultFoundation = function () {
                var i = this,
                  t = {
                    addClassToElementAtIndex: function (t, e) {
                      i.items[t].classList.add(e);
                    },
                    removeClassFromElementAtIndex: function (t, e) {
                      i.items[t].classList.remove(e);
                    },
                    addAttributeToElementAtIndex: function (t, e, n) {
                      i.items[t].setAttribute(e, n);
                    },
                    removeAttributeFromElementAtIndex: function (t, e) {
                      i.items[t].removeAttribute(e);
                    },
                    getAttributeFromElementAtIndex: function (t, e) {
                      return i.items[t].getAttribute(e);
                    },
                    elementContainsClass: function (t, e) {
                      return t.classList.contains(e);
                    },
                    closeSurface: function (t) {
                      i.menuSurface.close(t);
                    },
                    getElementIndex: function (t) {
                      return i.items.indexOf(t);
                    },
                    notifySelected: function (t) {
                      i.emit(h.strings.SELECTED_EVENT, {
                        index: t.index,
                        item: i.items[t.index],
                      });
                    },
                    getMenuItemCount: function () {
                      return i.items.length;
                    },
                    focusItemAtIndex: function (t) {
                      i.items[t].focus();
                    },
                    focusListRoot: function () {
                      i.root.querySelector(h.strings.LIST_SELECTOR).focus();
                    },
                    isSelectableItemAtIndex: function (t) {
                      return !!a.closest(
                        i.items[t],
                        "." + h.cssClasses.MENU_SELECTION_GROUP
                      );
                    },
                    getSelectedSiblingOfItemAtIndex: function (t) {
                      var e = a
                        .closest(
                          i.items[t],
                          "." + h.cssClasses.MENU_SELECTION_GROUP
                        )
                        .querySelector(
                          "." + h.cssClasses.MENU_SELECTED_LIST_ITEM
                        );
                      return e ? i.items.indexOf(e) : -1;
                    },
                  };
                return new f.MDCMenuFoundation(t);
              }),
              C);
          function C() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCMenu = y;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCMenuFoundation = void 0);
          var s,
            a = n(0),
            c = n(7),
            u = n(14),
            l = n(15),
            d =
              ((s = a.MDCFoundation),
              r(p, s),
              Object.defineProperty(p, "cssClasses", {
                get: function () {
                  return l.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "strings", {
                get: function () {
                  return l.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "numbers", {
                get: function () {
                  return l.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "defaultAdapter", {
                get: function () {
                  return {
                    addClassToElementAtIndex: function () {},
                    removeClassFromElementAtIndex: function () {},
                    addAttributeToElementAtIndex: function () {},
                    removeAttributeFromElementAtIndex: function () {},
                    getAttributeFromElementAtIndex: function () {
                      return null;
                    },
                    elementContainsClass: function () {
                      return !1;
                    },
                    closeSurface: function () {},
                    getElementIndex: function () {
                      return -1;
                    },
                    notifySelected: function () {},
                    getMenuItemCount: function () {
                      return 0;
                    },
                    focusItemAtIndex: function () {},
                    focusListRoot: function () {},
                    getSelectedSiblingOfItemAtIndex: function () {
                      return -1;
                    },
                    isSelectableItemAtIndex: function () {
                      return !1;
                    },
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.destroy = function () {
                this.closeAnimationEndTimerId &&
                  clearTimeout(this.closeAnimationEndTimerId),
                  this.adapter.closeSurface();
              }),
              (p.prototype.handleKeydown = function (t) {
                var e = t.key,
                  n = t.keyCode;
                ("Tab" !== e && 9 !== n) || this.adapter.closeSurface(!0);
              }),
              (p.prototype.handleItemAction = function (e) {
                var n = this,
                  t = this.adapter.getElementIndex(e);
                if (!(t < 0)) {
                  this.adapter.notifySelected({ index: t });
                  var i =
                    "true" ===
                    this.adapter.getAttributeFromElementAtIndex(
                      t,
                      l.strings.SKIP_RESTORE_FOCUS
                    );
                  this.adapter.closeSurface(i),
                    (this.closeAnimationEndTimerId = setTimeout(function () {
                      var t = n.adapter.getElementIndex(e);
                      0 <= t &&
                        n.adapter.isSelectableItemAtIndex(t) &&
                        n.setSelectedIndex(t);
                    }, u
                      .MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION));
                }
              }),
              (p.prototype.handleMenuSurfaceOpened = function () {
                switch (this.defaultFocusState) {
                  case l.DefaultFocusState.FIRST_ITEM:
                    this.adapter.focusItemAtIndex(0);
                    break;
                  case l.DefaultFocusState.LAST_ITEM:
                    this.adapter.focusItemAtIndex(
                      this.adapter.getMenuItemCount() - 1
                    );
                    break;
                  case l.DefaultFocusState.NONE:
                    break;
                  default:
                    this.adapter.focusListRoot();
                }
              }),
              (p.prototype.setDefaultFocusState = function (t) {
                this.defaultFocusState = t;
              }),
              (p.prototype.getSelectedIndex = function () {
                return this.selectedIndex;
              }),
              (p.prototype.setSelectedIndex = function (t) {
                if (
                  (this.validatedIndex(t),
                  !this.adapter.isSelectableItemAtIndex(t))
                )
                  throw new Error(
                    "MDCMenuFoundation: No selection group at specified index."
                  );
                var e = this.adapter.getSelectedSiblingOfItemAtIndex(t);
                0 <= e &&
                  (this.adapter.removeAttributeFromElementAtIndex(
                    e,
                    l.strings.ARIA_CHECKED_ATTR
                  ),
                  this.adapter.removeClassFromElementAtIndex(
                    e,
                    l.cssClasses.MENU_SELECTED_LIST_ITEM
                  )),
                  this.adapter.addClassToElementAtIndex(
                    t,
                    l.cssClasses.MENU_SELECTED_LIST_ITEM
                  ),
                  this.adapter.addAttributeToElementAtIndex(
                    t,
                    l.strings.ARIA_CHECKED_ATTR,
                    "true"
                  ),
                  (this.selectedIndex = t);
              }),
              (p.prototype.setEnabled = function (t, e) {
                this.validatedIndex(t),
                  e
                    ? (this.adapter.removeClassFromElementAtIndex(
                        t,
                        c.cssClasses.LIST_ITEM_DISABLED_CLASS
                      ),
                      this.adapter.addAttributeToElementAtIndex(
                        t,
                        l.strings.ARIA_DISABLED_ATTR,
                        "false"
                      ))
                    : (this.adapter.addClassToElementAtIndex(
                        t,
                        c.cssClasses.LIST_ITEM_DISABLED_CLASS
                      ),
                      this.adapter.addAttributeToElementAtIndex(
                        t,
                        l.strings.ARIA_DISABLED_ATTR,
                        "true"
                      ));
              }),
              (p.prototype.validatedIndex = function (t) {
                var e = this.adapter.getMenuItemCount();
                if (!(0 <= t && t < e))
                  throw new Error(
                    "MDCMenuFoundation: No list item at specified index."
                  );
              }),
              p);
          function p(t) {
            var e = s.call(this, o(o({}, p.defaultAdapter), t)) || this;
            return (
              (e.closeAnimationEndTimerId = 0),
              (e.defaultFocusState = l.DefaultFocusState.LIST_ROOT),
              (e.selectedIndex = -1),
              e
            );
          }
          (e.MDCMenuFoundation = d), (e.default = d);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCNotchedOutlineFoundation = void 0);
          var s,
            a = n(0),
            c = n(31),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "numbers", {
                get: function () {
                  return c.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    setNotchWidthProperty: function () {},
                    removeNotchWidthProperty: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.notch = function (t) {
                var e = l.cssClasses.OUTLINE_NOTCHED;
                0 < t && (t += c.numbers.NOTCH_ELEMENT_PADDING),
                  this.adapter.setNotchWidthProperty(t),
                  this.adapter.addClass(e);
              }),
              (l.prototype.closeNotch = function () {
                var t = l.cssClasses.OUTLINE_NOTCHED;
                this.adapter.removeClass(t),
                  this.adapter.removeNotchWidthProperty();
              }),
              l);
          function l(t) {
            return s.call(this, o(o({}, l.defaultAdapter), t)) || this;
          }
          (e.MDCNotchedOutlineFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCRadioFoundation = void 0);
          var s,
            a = n(0),
            c = n(79),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    setNativeControlDisabled: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.setDisabled = function (t) {
                var e = l.cssClasses.DISABLED;
                this.adapter.setNativeControlDisabled(t),
                  t ? this.adapter.addClass(e) : this.adapter.removeClass(e);
              }),
              l);
          function l(t) {
            return s.call(this, o(o({}, l.defaultAdapter), t)) || this;
          }
          (e.MDCRadioFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cssClasses = e.strings = void 0);
          e.strings = { NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control" };
          e.cssClasses = { DISABLED: "mdc-radio--disabled", ROOT: "mdc-radio" };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSegmentedButtonFoundation = void 0);
          var a,
            c = n(0),
            u = n(81),
            l =
              ((a = c.MDCFoundation),
              r(d, a),
              Object.defineProperty(d, "defaultAdapter", {
                get: function () {
                  return {
                    hasClass: function () {
                      return !1;
                    },
                    getSegments: function () {
                      return [];
                    },
                    selectSegment: function () {},
                    unselectSegment: function () {},
                    notifySelectedChange: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (d.prototype.selectSegment = function (t) {
                this.adapter.selectSegment(t);
              }),
              (d.prototype.unselectSegment = function (t) {
                this.adapter.unselectSegment(t);
              }),
              (d.prototype.getSelectedSegments = function () {
                return this.adapter.getSegments().filter(function (t) {
                  return t.selected;
                });
              }),
              (d.prototype.isSegmentSelected = function (e) {
                return this.adapter.getSegments().some(function (t) {
                  return (t.index === e || t.segmentId === e) && t.selected;
                });
              }),
              (d.prototype.isSingleSelect = function () {
                return this.adapter.hasClass(u.cssClasses.SINGLE_SELECT);
              }),
              (d.prototype.handleSelected = function (t) {
                this.isSingleSelect() && this.unselectPrevSelected(t.index),
                  this.adapter.notifySelectedChange(t);
              }),
              (d.prototype.unselectPrevSelected = function (t) {
                var e, n;
                try {
                  for (
                    var i = s(this.getSelectedSegments()), r = i.next();
                    !r.done;
                    r = i.next()
                  ) {
                    var o = r.value;
                    o.index !== t && this.unselectSegment(o.index);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              d);
          function d(t) {
            return a.call(this, o(o({}, d.defaultAdapter), t)) || this;
          }
          e.MDCSegmentedButtonFoundation = l;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cssClasses = e.events = e.selectors = void 0),
            (e.selectors = { SEGMENT: ".mdc-segmented-button__segment" }),
            (e.events = { SELECTED: "selected", CHANGE: "change" }),
            (e.cssClasses = {
              SINGLE_SELECT: "mdc-segmented-button--single-select",
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSegmentedButtonSegment = void 0);
          var s,
            a = n(1),
            c = n(2),
            u = n(4),
            l = n(83),
            d = n(84),
            p =
              ((s = a.MDCComponent),
              r(h, s),
              Object.defineProperty(h.prototype, "ripple", {
                get: function () {
                  return this.rippleComponent;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (h.attachTo = function (t) {
                return new h(t);
              }),
              (h.prototype.initialize = function (t) {
                var e = this;
                void 0 === t &&
                  (t = function (t, e) {
                    return new c.MDCRipple(t, e);
                  });
                var n = o(o({}, c.MDCRipple.createAdapter(this)), {
                  computeBoundingRect: function () {
                    return e.foundation.getDimensions();
                  },
                });
                this.rippleComponent = t(
                  this.root,
                  new u.MDCRippleFoundation(n)
                );
              }),
              (h.prototype.initialSyncWithDOM = function () {
                var t = this;
                (this.handleClick = function () {
                  t.foundation.handleClick();
                }),
                  this.listen(l.events.CLICK, this.handleClick);
              }),
              (h.prototype.destroy = function () {
                this.ripple.destroy(),
                  this.unlisten(l.events.CLICK, this.handleClick),
                  s.prototype.destroy.call(this);
              }),
              (h.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    isSingleSelect: function () {
                      return n.isSingleSelect;
                    },
                    getAttr: function (t) {
                      return n.root.getAttribute(t);
                    },
                    setAttr: function (t, e) {
                      n.root.setAttribute(t, e);
                    },
                    addClass: function (t) {
                      n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      n.root.classList.remove(t);
                    },
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    notifySelectedChange: function (t) {
                      n.emit(
                        l.events.SELECTED,
                        {
                          index: n.index,
                          selected: t,
                          segmentId: n.getSegmentId(),
                        },
                        !0
                      );
                    },
                    getRootBoundingClientRect: function () {
                      return n.root.getBoundingClientRect();
                    },
                  };
                return new d.MDCSegmentedButtonSegmentFoundation(t);
              }),
              (h.prototype.setIndex = function (t) {
                this.index = t;
              }),
              (h.prototype.setIsSingleSelect = function (t) {
                this.isSingleSelect = t;
              }),
              (h.prototype.isSelected = function () {
                return this.foundation.isSelected();
              }),
              (h.prototype.setSelected = function () {
                this.foundation.setSelected();
              }),
              (h.prototype.setUnselected = function () {
                this.foundation.setUnselected();
              }),
              (h.prototype.getSegmentId = function () {
                return this.foundation.getSegmentId();
              }),
              h);
          function h() {
            return (null !== s && s.apply(this, arguments)) || this;
          }
          e.MDCSegmentedButtonSegment = p;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cssClasses = e.events = e.attributes = e.booleans = void 0),
            (e.booleans = { TRUE: "true", FALSE: "false" }),
            (e.attributes = {
              ARIA_CHECKED: "aria-checked",
              ARIA_PRESSED: "aria-pressed",
              DATA_SEGMENT_ID: "data-segment-id",
            }),
            (e.events = { CLICK: "click", SELECTED: "selected" }),
            (e.cssClasses = {
              SELECTED: "mdc-segmented-button__segment--selected",
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSegmentedButtonSegmentFoundation = void 0);
          var s,
            a = n(0),
            c = n(83),
            u = { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 },
            l =
              ((s = a.MDCFoundation),
              r(d, s),
              Object.defineProperty(d, "defaultAdapter", {
                get: function () {
                  return {
                    isSingleSelect: function () {
                      return !1;
                    },
                    getAttr: function () {
                      return "";
                    },
                    setAttr: function () {},
                    addClass: function () {},
                    removeClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    notifySelectedChange: function () {},
                    getRootBoundingClientRect: function () {
                      return u;
                    },
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (d.prototype.isSelected = function () {
                return this.adapter.hasClass(c.cssClasses.SELECTED);
              }),
              (d.prototype.setSelected = function () {
                this.adapter.addClass(c.cssClasses.SELECTED),
                  this.setAriaAttr(c.booleans.TRUE);
              }),
              (d.prototype.setUnselected = function () {
                this.adapter.removeClass(c.cssClasses.SELECTED),
                  this.setAriaAttr(c.booleans.FALSE);
              }),
              (d.prototype.getSegmentId = function () {
                var t;
                return null !==
                  (t = this.adapter.getAttr(c.attributes.DATA_SEGMENT_ID)) &&
                  void 0 !== t
                  ? t
                  : void 0;
              }),
              (d.prototype.handleClick = function () {
                this.adapter.isSingleSelect()
                  ? this.setSelected()
                  : this.toggleSelection(),
                  this.adapter.notifySelectedChange(this.isSelected());
              }),
              (d.prototype.getDimensions = function () {
                return this.adapter.getRootBoundingClientRect();
              }),
              (d.prototype.toggleSelection = function () {
                this.isSelected() ? this.setUnselected() : this.setSelected();
              }),
              (d.prototype.setAriaAttr = function (t) {
                this.adapter.isSingleSelect()
                  ? this.adapter.setAttr(c.attributes.ARIA_CHECKED, t)
                  : this.adapter.setAttr(c.attributes.ARIA_PRESSED, t);
              }),
              d);
          function d(t) {
            return s.call(this, o(o({}, d.defaultAdapter), t)) || this;
          }
          e.MDCSegmentedButtonSegmentFoundation = l;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSelectFoundation = void 0);
          var s,
            a = n(0),
            c = n(6),
            u = n(8),
            l = n(32),
            d =
              ((s = a.MDCFoundation),
              r(p, s),
              Object.defineProperty(p, "cssClasses", {
                get: function () {
                  return l.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "numbers", {
                get: function () {
                  return l.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "strings", {
                get: function () {
                  return l.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    activateBottomLine: function () {},
                    deactivateBottomLine: function () {},
                    getSelectedIndex: function () {
                      return -1;
                    },
                    setSelectedIndex: function () {},
                    hasLabel: function () {
                      return !1;
                    },
                    floatLabel: function () {},
                    getLabelWidth: function () {
                      return 0;
                    },
                    setLabelRequired: function () {},
                    hasOutline: function () {
                      return !1;
                    },
                    notchOutline: function () {},
                    closeOutline: function () {},
                    setRippleCenter: function () {},
                    notifyChange: function () {},
                    setSelectedText: function () {},
                    isSelectAnchorFocused: function () {
                      return !1;
                    },
                    getSelectAnchorAttr: function () {
                      return "";
                    },
                    setSelectAnchorAttr: function () {},
                    removeSelectAnchorAttr: function () {},
                    addMenuClass: function () {},
                    removeMenuClass: function () {},
                    openMenu: function () {},
                    closeMenu: function () {},
                    getAnchorElement: function () {
                      return null;
                    },
                    setMenuAnchorElement: function () {},
                    setMenuAnchorCorner: function () {},
                    setMenuWrapFocus: function () {},
                    focusMenuItemAtIndex: function () {},
                    getMenuItemCount: function () {
                      return 0;
                    },
                    getMenuItemValues: function () {
                      return [];
                    },
                    getMenuItemTextAtIndex: function () {
                      return "";
                    },
                    isTypeaheadInProgress: function () {
                      return !1;
                    },
                    typeaheadMatchItem: function () {
                      return -1;
                    },
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.getSelectedIndex = function () {
                return this.adapter.getSelectedIndex();
              }),
              (p.prototype.setSelectedIndex = function (t, e, n) {
                void 0 === e && (e = !1),
                  void 0 === n && (n = !1),
                  t >= this.adapter.getMenuItemCount() ||
                    (t === l.numbers.UNSET_INDEX
                      ? this.adapter.setSelectedText("")
                      : this.adapter.setSelectedText(
                          this.adapter.getMenuItemTextAtIndex(t).trim()
                        ),
                    this.adapter.setSelectedIndex(t),
                    e && this.adapter.closeMenu(),
                    n || this.lastSelectedIndex === t || this.handleChange(),
                    (this.lastSelectedIndex = t));
              }),
              (p.prototype.setValue = function (t, e) {
                void 0 === e && (e = !1);
                var n = this.adapter.getMenuItemValues().indexOf(t);
                this.setSelectedIndex(n, !1, e);
              }),
              (p.prototype.getValue = function () {
                var t = this.adapter.getSelectedIndex(),
                  e = this.adapter.getMenuItemValues();
                return t !== l.numbers.UNSET_INDEX ? e[t] : "";
              }),
              (p.prototype.getDisabled = function () {
                return this.disabled;
              }),
              (p.prototype.setDisabled = function (t) {
                (this.disabled = t),
                  this.disabled
                    ? (this.adapter.addClass(l.cssClasses.DISABLED),
                      this.adapter.closeMenu())
                    : this.adapter.removeClass(l.cssClasses.DISABLED),
                  this.leadingIcon &&
                    this.leadingIcon.setDisabled(this.disabled),
                  this.disabled
                    ? this.adapter.removeSelectAnchorAttr("tabindex")
                    : this.adapter.setSelectAnchorAttr("tabindex", "0"),
                  this.adapter.setSelectAnchorAttr(
                    "aria-disabled",
                    this.disabled.toString()
                  );
              }),
              (p.prototype.openMenu = function () {
                this.adapter.addClass(l.cssClasses.ACTIVATED),
                  this.adapter.openMenu(),
                  (this.isMenuOpen = !0),
                  this.adapter.setSelectAnchorAttr("aria-expanded", "true");
              }),
              (p.prototype.setHelperTextContent = function (t) {
                this.helperText && this.helperText.setContent(t);
              }),
              (p.prototype.layout = function () {
                if (this.adapter.hasLabel()) {
                  var t = 0 < this.getValue().length,
                    e = this.adapter.hasClass(l.cssClasses.FOCUSED),
                    n = t || e,
                    i = this.adapter.hasClass(l.cssClasses.REQUIRED);
                  this.notchOutline(n),
                    this.adapter.floatLabel(n),
                    this.adapter.setLabelRequired(i);
                }
              }),
              (p.prototype.layoutOptions = function () {
                var t = this.adapter
                  .getMenuItemValues()
                  .indexOf(this.getValue());
                this.setSelectedIndex(t, !1, !0);
              }),
              (p.prototype.handleMenuOpened = function () {
                if (0 !== this.adapter.getMenuItemValues().length) {
                  var t = this.getSelectedIndex(),
                    e = 0 <= t ? t : 0;
                  this.adapter.focusMenuItemAtIndex(e);
                }
              }),
              (p.prototype.handleMenuClosing = function () {
                this.adapter.setSelectAnchorAttr("aria-expanded", "false");
              }),
              (p.prototype.handleMenuClosed = function () {
                this.adapter.removeClass(l.cssClasses.ACTIVATED),
                  (this.isMenuOpen = !1),
                  this.adapter.isSelectAnchorFocused() || this.blur();
              }),
              (p.prototype.handleChange = function () {
                this.layout(),
                  this.adapter.notifyChange(this.getValue()),
                  this.adapter.hasClass(l.cssClasses.REQUIRED) &&
                    this.useDefaultValidation &&
                    this.setValid(this.isValid());
              }),
              (p.prototype.handleMenuItemAction = function (t) {
                this.setSelectedIndex(t, !0);
              }),
              (p.prototype.handleFocus = function () {
                this.adapter.addClass(l.cssClasses.FOCUSED),
                  this.layout(),
                  this.adapter.activateBottomLine();
              }),
              (p.prototype.handleBlur = function () {
                this.isMenuOpen || this.blur();
              }),
              (p.prototype.handleClick = function (t) {
                this.disabled ||
                  this.recentlyClicked ||
                  (this.setClickDebounceTimeout(),
                  this.isMenuOpen
                    ? this.adapter.closeMenu()
                    : (this.adapter.setRippleCenter(t), this.openMenu()));
              }),
              (p.prototype.handleKeydown = function (t) {
                if (
                  !this.isMenuOpen &&
                  this.adapter.hasClass(l.cssClasses.FOCUSED)
                ) {
                  var e = c.normalizeKey(t) === c.KEY.ENTER,
                    n = c.normalizeKey(t) === c.KEY.SPACEBAR,
                    i = c.normalizeKey(t) === c.KEY.ARROW_UP,
                    r = c.normalizeKey(t) === c.KEY.ARROW_DOWN;
                  if (
                    !t.ctrlKey &&
                    !t.metaKey &&
                    ((!n && t.key && 1 === t.key.length) ||
                      (n && this.adapter.isTypeaheadInProgress()))
                  ) {
                    var o = n ? " " : t.key,
                      s = this.adapter.typeaheadMatchItem(
                        o,
                        this.getSelectedIndex()
                      );
                    return (
                      0 <= s && this.setSelectedIndex(s),
                      void t.preventDefault()
                    );
                  }
                  (e || n || i || r) && (this.openMenu(), t.preventDefault());
                }
              }),
              (p.prototype.notchOutline = function (t) {
                if (this.adapter.hasOutline()) {
                  var e = this.adapter.hasClass(l.cssClasses.FOCUSED);
                  if (t) {
                    var n = l.numbers.LABEL_SCALE,
                      i = this.adapter.getLabelWidth() * n;
                    this.adapter.notchOutline(i);
                  } else e || this.adapter.closeOutline();
                }
              }),
              (p.prototype.setLeadingIconAriaLabel = function (t) {
                this.leadingIcon && this.leadingIcon.setAriaLabel(t);
              }),
              (p.prototype.setLeadingIconContent = function (t) {
                this.leadingIcon && this.leadingIcon.setContent(t);
              }),
              (p.prototype.getUseDefaultValidation = function () {
                return this.useDefaultValidation;
              }),
              (p.prototype.setUseDefaultValidation = function (t) {
                this.useDefaultValidation = t;
              }),
              (p.prototype.setValid = function (t) {
                this.useDefaultValidation || (this.customValidity = t),
                  this.adapter.setSelectAnchorAttr(
                    "aria-invalid",
                    (!t).toString()
                  ),
                  t
                    ? (this.adapter.removeClass(l.cssClasses.INVALID),
                      this.adapter.removeMenuClass(l.cssClasses.MENU_INVALID))
                    : (this.adapter.addClass(l.cssClasses.INVALID),
                      this.adapter.addMenuClass(l.cssClasses.MENU_INVALID)),
                  this.syncHelperTextValidity(t);
              }),
              (p.prototype.isValid = function () {
                return this.useDefaultValidation &&
                  this.adapter.hasClass(l.cssClasses.REQUIRED) &&
                  !this.adapter.hasClass(l.cssClasses.DISABLED)
                  ? this.getSelectedIndex() !== l.numbers.UNSET_INDEX &&
                      (0 !== this.getSelectedIndex() ||
                        Boolean(this.getValue()))
                  : this.customValidity;
              }),
              (p.prototype.setRequired = function (t) {
                t
                  ? this.adapter.addClass(l.cssClasses.REQUIRED)
                  : this.adapter.removeClass(l.cssClasses.REQUIRED),
                  this.adapter.setSelectAnchorAttr(
                    "aria-required",
                    t.toString()
                  ),
                  this.adapter.setLabelRequired(t);
              }),
              (p.prototype.getRequired = function () {
                return (
                  "true" === this.adapter.getSelectAnchorAttr("aria-required")
                );
              }),
              (p.prototype.init = function () {
                var t = this.adapter.getAnchorElement();
                t &&
                  (this.adapter.setMenuAnchorElement(t),
                  this.adapter.setMenuAnchorCorner(u.Corner.BOTTOM_START)),
                  this.adapter.setMenuWrapFocus(!1),
                  this.setDisabled(
                    this.adapter.hasClass(l.cssClasses.DISABLED)
                  ),
                  this.syncHelperTextValidity(
                    !this.adapter.hasClass(l.cssClasses.INVALID)
                  ),
                  this.layout(),
                  this.layoutOptions();
              }),
              (p.prototype.blur = function () {
                this.adapter.removeClass(l.cssClasses.FOCUSED),
                  this.layout(),
                  this.adapter.deactivateBottomLine(),
                  this.adapter.hasClass(l.cssClasses.REQUIRED) &&
                    this.useDefaultValidation &&
                    this.setValid(this.isValid());
              }),
              (p.prototype.syncHelperTextValidity = function (t) {
                if (this.helperText) {
                  this.helperText.setValidity(t);
                  var e = this.helperText.isVisible(),
                    n = this.helperText.getId();
                  e && n
                    ? this.adapter.setSelectAnchorAttr(
                        l.strings.ARIA_DESCRIBEDBY,
                        n
                      )
                    : this.adapter.removeSelectAnchorAttr(
                        l.strings.ARIA_DESCRIBEDBY
                      );
                }
              }),
              (p.prototype.setClickDebounceTimeout = function () {
                var t = this;
                clearTimeout(this.clickDebounceTimeout),
                  (this.clickDebounceTimeout = setTimeout(function () {
                    t.recentlyClicked = !1;
                  }, l.numbers.CLICK_DEBOUNCE_TIMEOUT_MS)),
                  (this.recentlyClicked = !0);
              }),
              p);
          function p(t, e) {
            void 0 === e && (e = {});
            var n = s.call(this, o(o({}, p.defaultAdapter), t)) || this;
            return (
              (n.disabled = !1),
              (n.isMenuOpen = !1),
              (n.useDefaultValidation = !0),
              (n.customValidity = !0),
              (n.lastSelectedIndex = l.numbers.UNSET_INDEX),
              (n.clickDebounceTimeout = 0),
              (n.recentlyClicked = !1),
              (n.leadingIcon = e.leadingIcon),
              (n.helperText = e.helperText),
              n
            );
          }
          (e.MDCSelectFoundation = d), (e.default = d);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSelectHelperText = void 0);
          var o,
            s = n(1),
            a = n(87),
            c =
              ((o = s.MDCComponent),
              r(u, o),
              (u.attachTo = function (t) {
                return new u(t);
              }),
              Object.defineProperty(u.prototype, "foundationForSelect", {
                get: function () {
                  return this.foundation;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (u.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    getAttr: function (t) {
                      return n.root.getAttribute(t);
                    },
                    setAttr: function (t, e) {
                      return n.root.setAttribute(t, e);
                    },
                    removeAttr: function (t) {
                      return n.root.removeAttribute(t);
                    },
                    setContent: function (t) {
                      n.root.textContent = t;
                    },
                  };
                return new a.MDCSelectHelperTextFoundation(t);
              }),
              u);
          function u() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCSelectHelperText = c;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSelectHelperTextFoundation = void 0);
          var s,
            a = n(0),
            c = n(88),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    setAttr: function () {},
                    getAttr: function () {
                      return null;
                    },
                    removeAttr: function () {},
                    setContent: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.getId = function () {
                return this.adapter.getAttr("id");
              }),
              (l.prototype.isVisible = function () {
                return "true" !== this.adapter.getAttr(c.strings.ARIA_HIDDEN);
              }),
              (l.prototype.setContent = function (t) {
                this.adapter.setContent(t);
              }),
              (l.prototype.setValidation = function (t) {
                t
                  ? this.adapter.addClass(
                      c.cssClasses.HELPER_TEXT_VALIDATION_MSG
                    )
                  : this.adapter.removeClass(
                      c.cssClasses.HELPER_TEXT_VALIDATION_MSG
                    );
              }),
              (l.prototype.setValidationMsgPersistent = function (t) {
                t
                  ? this.adapter.addClass(
                      c.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT
                    )
                  : this.adapter.removeClass(
                      c.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT
                    );
              }),
              (l.prototype.getIsValidation = function () {
                return this.adapter.hasClass(
                  c.cssClasses.HELPER_TEXT_VALIDATION_MSG
                );
              }),
              (l.prototype.getIsValidationMsgPersistent = function () {
                return this.adapter.hasClass(
                  c.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT
                );
              }),
              (l.prototype.setValidity = function (t) {
                if (
                  this.adapter.hasClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG)
                ) {
                  var e = this.adapter.hasClass(
                    c.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT
                  );
                  if (!t || e)
                    return (
                      this.showToScreenReader(),
                      void (t
                        ? this.adapter.removeAttr(c.strings.ROLE)
                        : this.adapter.setAttr(c.strings.ROLE, "alert"))
                    );
                  this.adapter.removeAttr(c.strings.ROLE), this.hide();
                }
              }),
              (l.prototype.showToScreenReader = function () {
                this.adapter.removeAttr(c.strings.ARIA_HIDDEN);
              }),
              (l.prototype.hide = function () {
                this.adapter.setAttr(c.strings.ARIA_HIDDEN, "true");
              }),
              l);
          function l(t) {
            return s.call(this, o(o({}, l.defaultAdapter), t)) || this;
          }
          (e.MDCSelectHelperTextFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cssClasses = e.strings = void 0);
          e.strings = { ARIA_HIDDEN: "aria-hidden", ROLE: "role" };
          e.cssClasses = {
            HELPER_TEXT_VALIDATION_MSG:
              "mdc-select-helper-text--validation-msg",
            HELPER_TEXT_VALIDATION_MSG_PERSISTENT:
              "mdc-select-helper-text--validation-msg-persistent",
          };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSelectIcon = void 0);
          var o,
            s = n(1),
            a = n(90),
            c =
              ((o = s.MDCComponent),
              r(u, o),
              (u.attachTo = function (t) {
                return new u(t);
              }),
              Object.defineProperty(u.prototype, "foundationForSelect", {
                get: function () {
                  return this.foundation;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (u.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    getAttr: function (t) {
                      return n.root.getAttribute(t);
                    },
                    setAttr: function (t, e) {
                      return n.root.setAttribute(t, e);
                    },
                    removeAttr: function (t) {
                      return n.root.removeAttribute(t);
                    },
                    setContent: function (t) {
                      n.root.textContent = t;
                    },
                    registerInteractionHandler: function (t, e) {
                      return n.listen(t, e);
                    },
                    deregisterInteractionHandler: function (t, e) {
                      return n.unlisten(t, e);
                    },
                    notifyIconAction: function () {
                      return n.emit(
                        a.MDCSelectIconFoundation.strings.ICON_EVENT,
                        {},
                        !0
                      );
                    },
                  };
                return new a.MDCSelectIconFoundation(t);
              }),
              u);
          function u() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCSelectIcon = c;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSelectIconFoundation = void 0);
          var a,
            c = n(0),
            u = n(91),
            l = ["click", "keydown"],
            d =
              ((a = c.MDCFoundation),
              r(p, a),
              Object.defineProperty(p, "strings", {
                get: function () {
                  return u.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "defaultAdapter", {
                get: function () {
                  return {
                    getAttr: function () {
                      return null;
                    },
                    setAttr: function () {},
                    removeAttr: function () {},
                    setContent: function () {},
                    registerInteractionHandler: function () {},
                    deregisterInteractionHandler: function () {},
                    notifyIconAction: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.init = function () {
                var e, t;
                this.savedTabIndex = this.adapter.getAttr("tabindex");
                try {
                  for (var n = s(l), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    this.adapter.registerInteractionHandler(
                      r,
                      this.interactionHandler
                    );
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (p.prototype.destroy = function () {
                var e, t;
                try {
                  for (var n = s(l), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    this.adapter.deregisterInteractionHandler(
                      r,
                      this.interactionHandler
                    );
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (p.prototype.setDisabled = function (t) {
                this.savedTabIndex &&
                  (t
                    ? (this.adapter.setAttr("tabindex", "-1"),
                      this.adapter.removeAttr("role"))
                    : (this.adapter.setAttr("tabindex", this.savedTabIndex),
                      this.adapter.setAttr("role", u.strings.ICON_ROLE)));
              }),
              (p.prototype.setAriaLabel = function (t) {
                this.adapter.setAttr("aria-label", t);
              }),
              (p.prototype.setContent = function (t) {
                this.adapter.setContent(t);
              }),
              (p.prototype.handleInteraction = function (t) {
                var e = "Enter" === t.key || 13 === t.keyCode;
                ("click" !== t.type && !e) || this.adapter.notifyIconAction();
              }),
              p);
          function p(t) {
            var e = a.call(this, o(o({}, p.defaultAdapter), t)) || this;
            return (
              (e.savedTabIndex = null),
              (e.interactionHandler = function (t) {
                e.handleInteraction(t);
              }),
              e
            );
          }
          (e.MDCSelectIconFoundation = d), (e.default = d);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = void 0);
          e.strings = { ICON_EVENT: "MDCSelect:icon", ICON_ROLE: "button" };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSliderFoundation = void 0);
          var l,
            s = n(23),
            d = n(10),
            a = n(0),
            u = n(33),
            p = n(34);
          (l = l || {}).SLIDER_UPDATE = "slider_update";
          var c,
            h = "undefined" != typeof window,
            f =
              ((c = a.MDCFoundation),
              r(y, c),
              Object.defineProperty(y, "defaultAdapter", {
                get: function () {
                  return {
                    hasClass: function () {
                      return !1;
                    },
                    addClass: function () {},
                    removeClass: function () {},
                    addThumbClass: function () {},
                    removeThumbClass: function () {},
                    getAttribute: function () {
                      return null;
                    },
                    getInputValue: function () {
                      return "";
                    },
                    setInputValue: function () {},
                    getInputAttribute: function () {
                      return null;
                    },
                    setInputAttribute: function () {
                      return null;
                    },
                    removeInputAttribute: function () {
                      return null;
                    },
                    focusInput: function () {},
                    isInputFocused: function () {
                      return !1;
                    },
                    shouldHideFocusStylesForPointerEvents: function () {
                      return !1;
                    },
                    getThumbKnobWidth: function () {
                      return 0;
                    },
                    getValueIndicatorContainerWidth: function () {
                      return 0;
                    },
                    getThumbBoundingClientRect: function () {
                      return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                      };
                    },
                    getBoundingClientRect: function () {
                      return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                      };
                    },
                    isRTL: function () {
                      return !1;
                    },
                    setThumbStyleProperty: function () {},
                    removeThumbStyleProperty: function () {},
                    setTrackActiveStyleProperty: function () {},
                    removeTrackActiveStyleProperty: function () {},
                    setValueIndicatorText: function () {},
                    getValueToAriaValueTextFn: function () {
                      return null;
                    },
                    updateTickMarks: function () {},
                    setPointerCapture: function () {},
                    emitChangeEvent: function () {},
                    emitInputEvent: function () {},
                    emitDragStartEvent: function () {},
                    emitDragEndEvent: function () {},
                    registerEventHandler: function () {},
                    deregisterEventHandler: function () {},
                    registerThumbEventHandler: function () {},
                    deregisterThumbEventHandler: function () {},
                    registerInputEventHandler: function () {},
                    deregisterInputEventHandler: function () {},
                    registerBodyEventHandler: function () {},
                    deregisterBodyEventHandler: function () {},
                    registerWindowEventHandler: function () {},
                    deregisterWindowEventHandler: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (y.prototype.init = function () {
                var t = this;
                (this.isDisabled = this.adapter.hasClass(
                  u.cssClasses.DISABLED
                )),
                  (this.isDiscrete = this.adapter.hasClass(
                    u.cssClasses.DISCRETE
                  )),
                  (this.hasTickMarks = this.adapter.hasClass(
                    u.cssClasses.TICK_MARKS
                  )),
                  (this.isRange = this.adapter.hasClass(u.cssClasses.RANGE));
                var e = this.convertAttributeValueToNumber(
                    this.adapter.getInputAttribute(
                      u.attributes.INPUT_MIN,
                      this.isRange ? p.Thumb.START : p.Thumb.END
                    ),
                    u.attributes.INPUT_MIN
                  ),
                  n = this.convertAttributeValueToNumber(
                    this.adapter.getInputAttribute(
                      u.attributes.INPUT_MAX,
                      p.Thumb.END
                    ),
                    u.attributes.INPUT_MAX
                  ),
                  i = this.convertAttributeValueToNumber(
                    this.adapter.getInputAttribute(
                      u.attributes.INPUT_VALUE,
                      p.Thumb.END
                    ),
                    u.attributes.INPUT_VALUE
                  ),
                  r = this.isRange
                    ? this.convertAttributeValueToNumber(
                        this.adapter.getInputAttribute(
                          u.attributes.INPUT_VALUE,
                          p.Thumb.START
                        ),
                        u.attributes.INPUT_VALUE
                      )
                    : e,
                  o = this.adapter.getInputAttribute(
                    u.attributes.INPUT_STEP,
                    p.Thumb.END
                  ),
                  s = o
                    ? this.convertAttributeValueToNumber(
                        o,
                        u.attributes.INPUT_STEP
                      )
                    : this.step,
                  a = this.adapter.getAttribute(u.attributes.DATA_MIN_RANGE),
                  c = a
                    ? this.convertAttributeValueToNumber(
                        a,
                        u.attributes.DATA_MIN_RANGE
                      )
                    : this.minRange;
                this.validateProperties({
                  min: e,
                  max: n,
                  value: i,
                  valueStart: r,
                  step: s,
                  minRange: c,
                }),
                  (this.min = e),
                  (this.max = n),
                  (this.value = i),
                  (this.valueStart = r),
                  (this.step = s),
                  (this.minRange = c),
                  (this.numDecimalPlaces = C(this.step)),
                  (this.valueBeforeDownEvent = i),
                  (this.valueStartBeforeDownEvent = r),
                  (this.mousedownOrTouchstartListener =
                    this.handleMousedownOrTouchstart.bind(this)),
                  (this.moveListener = this.handleMove.bind(this)),
                  (this.pointerdownListener =
                    this.handlePointerdown.bind(this)),
                  (this.pointerupListener = this.handlePointerup.bind(this)),
                  (this.thumbMouseenterListener =
                    this.handleThumbMouseenter.bind(this)),
                  (this.thumbMouseleaveListener =
                    this.handleThumbMouseleave.bind(this)),
                  (this.inputStartChangeListener = function () {
                    t.handleInputChange(p.Thumb.START);
                  }),
                  (this.inputEndChangeListener = function () {
                    t.handleInputChange(p.Thumb.END);
                  }),
                  (this.inputStartFocusListener = function () {
                    t.handleInputFocus(p.Thumb.START);
                  }),
                  (this.inputEndFocusListener = function () {
                    t.handleInputFocus(p.Thumb.END);
                  }),
                  (this.inputStartBlurListener = function () {
                    t.handleInputBlur(p.Thumb.START);
                  }),
                  (this.inputEndBlurListener = function () {
                    t.handleInputBlur(p.Thumb.END);
                  }),
                  (this.resizeListener = this.handleResize.bind(this)),
                  this.registerEventHandlers();
              }),
              (y.prototype.destroy = function () {
                this.deregisterEventHandlers();
              }),
              (y.prototype.setMin = function (t) {
                (this.min = t),
                  this.isRange || (this.valueStart = t),
                  this.updateUI();
              }),
              (y.prototype.setMax = function (t) {
                (this.max = t), this.updateUI();
              }),
              (y.prototype.getMin = function () {
                return this.min;
              }),
              (y.prototype.getMax = function () {
                return this.max;
              }),
              (y.prototype.getValue = function () {
                return this.value;
              }),
              (y.prototype.setValue = function (t) {
                if (this.isRange && t < this.valueStart + this.minRange)
                  throw new Error(
                    "end thumb value (" +
                      t +
                      ") must be >= start thumb value (" +
                      this.valueStart +
                      ") + min range (" +
                      this.minRange +
                      ")"
                  );
                this.updateValue(t, p.Thumb.END);
              }),
              (y.prototype.getValueStart = function () {
                if (!this.isRange)
                  throw new Error(
                    "`valueStart` is only applicable for range sliders."
                  );
                return this.valueStart;
              }),
              (y.prototype.setValueStart = function (t) {
                if (!this.isRange)
                  throw new Error(
                    "`valueStart` is only applicable for range sliders."
                  );
                if (this.isRange && t > this.value - this.minRange)
                  throw new Error(
                    "start thumb value (" +
                      t +
                      ") must be <= end thumb value (" +
                      this.value +
                      ") - min range (" +
                      this.minRange +
                      ")"
                  );
                this.updateValue(t, p.Thumb.START);
              }),
              (y.prototype.setStep = function (t) {
                (this.step = t),
                  (this.numDecimalPlaces = C(t)),
                  this.updateUI();
              }),
              (y.prototype.setMinRange = function (t) {
                if (!this.isRange)
                  throw new Error(
                    "`minRange` is only applicable for range sliders."
                  );
                if (t < 0)
                  throw new Error(
                    "`minRange` must be non-negative. Current value: " + t
                  );
                if (this.value - this.valueStart < t)
                  throw new Error(
                    "start thumb value (" +
                      this.valueStart +
                      ") and end thumb value (" +
                      this.value +
                      ") must differ by at least " +
                      t +
                      "."
                  );
                this.minRange = t;
              }),
              (y.prototype.setIsDiscrete = function (t) {
                (this.isDiscrete = t),
                  this.updateValueIndicatorUI(),
                  this.updateTickMarksUI();
              }),
              (y.prototype.getStep = function () {
                return this.step;
              }),
              (y.prototype.getMinRange = function () {
                if (!this.isRange)
                  throw new Error(
                    "`minRange` is only applicable for range sliders."
                  );
                return this.minRange;
              }),
              (y.prototype.setHasTickMarks = function (t) {
                (this.hasTickMarks = t), this.updateTickMarksUI();
              }),
              (y.prototype.getDisabled = function () {
                return this.isDisabled;
              }),
              (y.prototype.setDisabled = function (t) {
                (this.isDisabled = t)
                  ? (this.adapter.addClass(u.cssClasses.DISABLED),
                    this.isRange &&
                      this.adapter.setInputAttribute(
                        u.attributes.INPUT_DISABLED,
                        "",
                        p.Thumb.START
                      ),
                    this.adapter.setInputAttribute(
                      u.attributes.INPUT_DISABLED,
                      "",
                      p.Thumb.END
                    ))
                  : (this.adapter.removeClass(u.cssClasses.DISABLED),
                    this.isRange &&
                      this.adapter.removeInputAttribute(
                        u.attributes.INPUT_DISABLED,
                        p.Thumb.START
                      ),
                    this.adapter.removeInputAttribute(
                      u.attributes.INPUT_DISABLED,
                      p.Thumb.END
                    ));
              }),
              (y.prototype.getIsRange = function () {
                return this.isRange;
              }),
              (y.prototype.layout = function (t) {
                var e = (void 0 === t ? {} : t).skipUpdateUI;
                (this.rect = this.adapter.getBoundingClientRect()),
                  this.isRange &&
                    ((this.startThumbKnobWidth = this.adapter.getThumbKnobWidth(
                      p.Thumb.START
                    )),
                    (this.endThumbKnobWidth = this.adapter.getThumbKnobWidth(
                      p.Thumb.END
                    ))),
                  e || this.updateUI();
              }),
              (y.prototype.handleResize = function () {
                this.layout();
              }),
              (y.prototype.handleDown = function (t) {
                if (!this.isDisabled) {
                  (this.valueStartBeforeDownEvent = this.valueStart),
                    (this.valueBeforeDownEvent = this.value);
                  var e =
                    null != t.clientX ? t.clientX : t.targetTouches[0].clientX;
                  this.downEventClientX = e;
                  var n = this.mapClientXOnSliderScale(e);
                  (this.thumb = this.getThumbFromDownEvent(e, n)),
                    null !== this.thumb &&
                      (this.handleDragStart(t, n, this.thumb),
                      this.updateValue(n, this.thumb, { emitInputEvent: !0 }));
                }
              }),
              (y.prototype.handleMove = function (t) {
                if (!this.isDisabled) {
                  t.preventDefault();
                  var e =
                      null != t.clientX
                        ? t.clientX
                        : t.targetTouches[0].clientX,
                    n = null != this.thumb;
                  if (
                    ((this.thumb = this.getThumbFromMoveEvent(e)),
                    null !== this.thumb)
                  ) {
                    var i = this.mapClientXOnSliderScale(e);
                    n ||
                      (this.handleDragStart(t, i, this.thumb),
                      this.adapter.emitDragStartEvent(i, this.thumb)),
                      this.updateValue(i, this.thumb, { emitInputEvent: !0 });
                  }
                }
              }),
              (y.prototype.handleUp = function () {
                var t, e;
                if (!this.isDisabled && null !== this.thumb) {
                  (null ===
                    (e = (t = this.adapter)
                      .shouldHideFocusStylesForPointerEvents) || void 0 === e
                    ? void 0
                    : e.call(t)) && this.handleInputBlur(this.thumb);
                  var n =
                      this.thumb === p.Thumb.START
                        ? this.valueStartBeforeDownEvent
                        : this.valueBeforeDownEvent,
                    i =
                      this.thumb === p.Thumb.START
                        ? this.valueStart
                        : this.value;
                  n !== i && this.adapter.emitChangeEvent(i, this.thumb),
                    this.adapter.emitDragEndEvent(i, this.thumb),
                    (this.thumb = null);
                }
              }),
              (y.prototype.handleThumbMouseenter = function () {
                this.isDiscrete &&
                  this.isRange &&
                  (this.adapter.addThumbClass(
                    u.cssClasses.THUMB_WITH_INDICATOR,
                    p.Thumb.START
                  ),
                  this.adapter.addThumbClass(
                    u.cssClasses.THUMB_WITH_INDICATOR,
                    p.Thumb.END
                  ));
              }),
              (y.prototype.handleThumbMouseleave = function () {
                var t, e;
                this.isDiscrete &&
                  this.isRange &&
                  (((null ===
                    (e = (t = this.adapter)
                      .shouldHideFocusStylesForPointerEvents) ||
                    void 0 === e ||
                    !e.call(t)) &&
                    (this.adapter.isInputFocused(p.Thumb.START) ||
                      this.adapter.isInputFocused(p.Thumb.END))) ||
                    this.thumb ||
                    (this.adapter.removeThumbClass(
                      u.cssClasses.THUMB_WITH_INDICATOR,
                      p.Thumb.START
                    ),
                    this.adapter.removeThumbClass(
                      u.cssClasses.THUMB_WITH_INDICATOR,
                      p.Thumb.END
                    )));
              }),
              (y.prototype.handleMousedownOrTouchstart = function (t) {
                var e = this,
                  n = "mousedown" === t.type ? "mousemove" : "touchmove";
                function i() {
                  e.handleUp(),
                    e.adapter.deregisterBodyEventHandler(n, e.moveListener),
                    e.adapter.deregisterEventHandler("mouseup", i),
                    e.adapter.deregisterEventHandler("touchend", i);
                }
                this.adapter.registerBodyEventHandler(n, this.moveListener),
                  this.adapter.registerBodyEventHandler("mouseup", i),
                  this.adapter.registerBodyEventHandler("touchend", i),
                  this.handleDown(t);
              }),
              (y.prototype.handlePointerdown = function (t) {
                0 === t.button &&
                  (null != t.pointerId &&
                    this.adapter.setPointerCapture(t.pointerId),
                  this.adapter.registerEventHandler(
                    "pointermove",
                    this.moveListener
                  ),
                  this.handleDown(t));
              }),
              (y.prototype.handleInputChange = function (t) {
                var e = Number(this.adapter.getInputValue(t));
                t === p.Thumb.START ? this.setValueStart(e) : this.setValue(e),
                  this.adapter.emitChangeEvent(
                    t === p.Thumb.START ? this.valueStart : this.value,
                    t
                  ),
                  this.adapter.emitInputEvent(
                    t === p.Thumb.START ? this.valueStart : this.value,
                    t
                  );
              }),
              (y.prototype.handleInputFocus = function (t) {
                if (
                  (this.adapter.addThumbClass(u.cssClasses.THUMB_FOCUSED, t),
                  this.isDiscrete &&
                    (this.adapter.addThumbClass(
                      u.cssClasses.THUMB_WITH_INDICATOR,
                      t
                    ),
                    this.isRange))
                ) {
                  var e = t === p.Thumb.START ? p.Thumb.END : p.Thumb.START;
                  this.adapter.addThumbClass(
                    u.cssClasses.THUMB_WITH_INDICATOR,
                    e
                  );
                }
              }),
              (y.prototype.handleInputBlur = function (t) {
                if (
                  (this.adapter.removeThumbClass(u.cssClasses.THUMB_FOCUSED, t),
                  this.isDiscrete &&
                    (this.adapter.removeThumbClass(
                      u.cssClasses.THUMB_WITH_INDICATOR,
                      t
                    ),
                    this.isRange))
                ) {
                  var e = t === p.Thumb.START ? p.Thumb.END : p.Thumb.START;
                  this.adapter.removeThumbClass(
                    u.cssClasses.THUMB_WITH_INDICATOR,
                    e
                  );
                }
              }),
              (y.prototype.handleDragStart = function (t, e, n) {
                var i, r;
                this.adapter.emitDragStartEvent(e, n),
                  this.adapter.focusInput(n),
                  (null ===
                    (r = (i = this.adapter)
                      .shouldHideFocusStylesForPointerEvents) || void 0 === r
                    ? void 0
                    : r.call(i)) && this.handleInputFocus(n),
                  t.preventDefault();
              }),
              (y.prototype.getThumbFromDownEvent = function (t, e) {
                if (!this.isRange) return p.Thumb.END;
                var n = this.adapter.getThumbBoundingClientRect(p.Thumb.START),
                  i = this.adapter.getThumbBoundingClientRect(p.Thumb.END),
                  r = t >= n.left && t <= n.right,
                  o = t >= i.left && t <= i.right;
                return r && o
                  ? null
                  : r
                  ? p.Thumb.START
                  : o
                  ? p.Thumb.END
                  : e < this.valueStart
                  ? p.Thumb.START
                  : e > this.value
                  ? p.Thumb.END
                  : e - this.valueStart <= this.value - e
                  ? p.Thumb.START
                  : p.Thumb.END;
              }),
              (y.prototype.getThumbFromMoveEvent = function (t) {
                if (null !== this.thumb) return this.thumb;
                if (null === this.downEventClientX)
                  throw new Error(
                    "`downEventClientX` is null after move event."
                  );
                return Math.abs(this.downEventClientX - t) <
                  u.numbers.THUMB_UPDATE_MIN_PX
                  ? this.thumb
                  : t < this.downEventClientX
                  ? this.adapter.isRTL()
                    ? p.Thumb.END
                    : p.Thumb.START
                  : this.adapter.isRTL()
                  ? p.Thumb.START
                  : p.Thumb.END;
              }),
              (y.prototype.updateUI = function (t) {
                t
                  ? this.updateThumbAndInputAttributes(t)
                  : (this.updateThumbAndInputAttributes(p.Thumb.START),
                    this.updateThumbAndInputAttributes(p.Thumb.END)),
                  this.updateThumbAndTrackUI(t),
                  this.updateValueIndicatorUI(t),
                  this.updateTickMarksUI();
              }),
              (y.prototype.updateThumbAndInputAttributes = function (t) {
                if (t) {
                  var e =
                      this.isRange && t === p.Thumb.START
                        ? this.valueStart
                        : this.value,
                    n = String(e);
                  this.adapter.setInputAttribute(
                    u.attributes.INPUT_VALUE,
                    n,
                    t
                  ),
                    this.isRange && t === p.Thumb.START
                      ? this.adapter.setInputAttribute(
                          u.attributes.INPUT_MIN,
                          String(e + this.minRange),
                          p.Thumb.END
                        )
                      : this.isRange &&
                        t === p.Thumb.END &&
                        this.adapter.setInputAttribute(
                          u.attributes.INPUT_MAX,
                          String(e - this.minRange),
                          p.Thumb.START
                        ),
                    this.adapter.getInputValue(t) !== n &&
                      this.adapter.setInputValue(n, t);
                  var i = this.adapter.getValueToAriaValueTextFn();
                  i &&
                    this.adapter.setInputAttribute(
                      u.attributes.ARIA_VALUETEXT,
                      i(e, t),
                      t
                    );
                }
              }),
              (y.prototype.updateValueIndicatorUI = function (t) {
                if (this.isDiscrete) {
                  var e =
                    this.isRange && t === p.Thumb.START
                      ? this.valueStart
                      : this.value;
                  this.adapter.setValueIndicatorText(
                    e,
                    t === p.Thumb.START ? p.Thumb.START : p.Thumb.END
                  ),
                    !t &&
                      this.isRange &&
                      this.adapter.setValueIndicatorText(
                        this.valueStart,
                        p.Thumb.START
                      );
                }
              }),
              (y.prototype.updateTickMarksUI = function () {
                if (this.isDiscrete && this.hasTickMarks) {
                  var t = (this.valueStart - this.min) / this.step,
                    e = (this.value - this.valueStart) / this.step + 1,
                    n = (this.max - this.value) / this.step,
                    i = Array.from({ length: t }).fill(p.TickMark.INACTIVE),
                    r = Array.from({ length: e }).fill(p.TickMark.ACTIVE),
                    o = Array.from({ length: n }).fill(p.TickMark.INACTIVE);
                  this.adapter.updateTickMarks(i.concat(r).concat(o));
                }
              }),
              (y.prototype.mapClientXOnSliderScale = function (t) {
                var e = (t - this.rect.left) / this.rect.width;
                this.adapter.isRTL() && (e = 1 - e);
                var n = this.min + e * (this.max - this.min);
                return n === this.max || n === this.min
                  ? n
                  : Number(this.quantize(n).toFixed(this.numDecimalPlaces));
              }),
              (y.prototype.quantize = function (t) {
                var e = Math.round((t - this.min) / this.step);
                return this.min + e * this.step;
              }),
              (y.prototype.updateValue = function (t, e, n) {
                var i = (void 0 === n ? {} : n).emitInputEvent;
                if (
                  ((t = this.clampValue(t, e)),
                  this.isRange && e === p.Thumb.START)
                ) {
                  if (this.valueStart === t) return;
                  this.valueStart = t;
                } else {
                  if (this.value === t) return;
                  this.value = t;
                }
                this.updateUI(e),
                  i &&
                    this.adapter.emitInputEvent(
                      e === p.Thumb.START ? this.valueStart : this.value,
                      e
                    );
              }),
              (y.prototype.clampValue = function (t, e) {
                return (
                  (t = Math.min(Math.max(t, this.min), this.max)),
                  this.isRange &&
                  e === p.Thumb.START &&
                  t > this.value - this.minRange
                    ? this.value - this.minRange
                    : this.isRange &&
                      e === p.Thumb.END &&
                      t < this.valueStart + this.minRange
                    ? this.valueStart + this.minRange
                    : t
                );
              }),
              (y.prototype.updateThumbAndTrackUI = function (n) {
                var i = this,
                  t = this.max,
                  e = this.min,
                  r = (this.value - this.valueStart) / (t - e),
                  o = r * this.rect.width,
                  s = this.adapter.isRTL(),
                  a = h
                    ? d.getCorrectPropertyName(window, "transform")
                    : "transform";
                if (this.isRange) {
                  var c = this.adapter.isRTL()
                      ? ((t - this.value) / (t - e)) * this.rect.width
                      : ((this.valueStart - e) / (t - e)) * this.rect.width,
                    u = c + o;
                  this.animFrame.request(l.SLIDER_UPDATE, function () {
                    (!s && n === p.Thumb.START) || (s && n !== p.Thumb.START)
                      ? (i.adapter.setTrackActiveStyleProperty(
                          "transform-origin",
                          "right"
                        ),
                        i.adapter.setTrackActiveStyleProperty("left", "auto"),
                        i.adapter.setTrackActiveStyleProperty(
                          "right",
                          i.rect.width - u + "px"
                        ))
                      : (i.adapter.setTrackActiveStyleProperty(
                          "transform-origin",
                          "left"
                        ),
                        i.adapter.setTrackActiveStyleProperty("right", "auto"),
                        i.adapter.setTrackActiveStyleProperty(
                          "left",
                          c + "px"
                        )),
                      i.adapter.setTrackActiveStyleProperty(
                        a,
                        "scaleX(" + r + ")"
                      );
                    var t = s ? u : c,
                      e = i.adapter.isRTL() ? c : u;
                    (n !== p.Thumb.START && n && i.initialStylesRemoved) ||
                      (i.adapter.setThumbStyleProperty(
                        a,
                        "translateX(" + t + "px)",
                        p.Thumb.START
                      ),
                      i.alignValueIndicator(p.Thumb.START, t)),
                      (n !== p.Thumb.END && n && i.initialStylesRemoved) ||
                        (i.adapter.setThumbStyleProperty(
                          a,
                          "translateX(" + e + "px)",
                          p.Thumb.END
                        ),
                        i.alignValueIndicator(p.Thumb.END, e)),
                      i.removeInitialStyles(s),
                      i.updateOverlappingThumbsUI(t, e, n);
                  });
                } else
                  this.animFrame.request(l.SLIDER_UPDATE, function () {
                    var t = s ? i.rect.width - o : o;
                    i.adapter.setThumbStyleProperty(
                      a,
                      "translateX(" + t + "px)",
                      p.Thumb.END
                    ),
                      i.alignValueIndicator(p.Thumb.END, t),
                      i.adapter.setTrackActiveStyleProperty(
                        a,
                        "scaleX(" + r + ")"
                      ),
                      i.removeInitialStyles(s);
                  });
              }),
              (y.prototype.alignValueIndicator = function (t, e) {
                if (this.isDiscrete) {
                  var n = this.adapter.getThumbBoundingClientRect(t).width / 2,
                    i = this.adapter.getValueIndicatorContainerWidth(t),
                    r = this.adapter.getBoundingClientRect().width;
                  e + n < i / 2
                    ? (this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CARET_LEFT,
                        n + "px",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CARET_RIGHT,
                        "auto",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CARET_TRANSFORM,
                        "translateX(-50%)",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CONTAINER_LEFT,
                        "0",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,
                        "auto",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,
                        "none",
                        t
                      ))
                    : r - e + n < i / 2
                    ? (this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CARET_LEFT,
                        "auto",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CARET_RIGHT,
                        n + "px",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CARET_TRANSFORM,
                        "translateX(50%)",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CONTAINER_LEFT,
                        "auto",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,
                        "0",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,
                        "none",
                        t
                      ))
                    : (this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CARET_LEFT,
                        "50%",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CARET_RIGHT,
                        "auto",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CARET_TRANSFORM,
                        "translateX(-50%)",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CONTAINER_LEFT,
                        "50%",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,
                        "auto",
                        t
                      ),
                      this.adapter.setThumbStyleProperty(
                        u.strings.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,
                        "translateX(-50%)",
                        t
                      ));
                }
              }),
              (y.prototype.removeInitialStyles = function (t) {
                if (!this.initialStylesRemoved) {
                  var e = t ? "right" : "left";
                  this.adapter.removeThumbStyleProperty(e, p.Thumb.END),
                    this.isRange &&
                      this.adapter.removeThumbStyleProperty(e, p.Thumb.START),
                    (this.initialStylesRemoved = !0),
                    this.resetTrackAndThumbAnimation();
                }
              }),
              (y.prototype.resetTrackAndThumbAnimation = function () {
                var t = this;
                if (this.isDiscrete) {
                  var e = h
                      ? d.getCorrectPropertyName(window, "transition")
                      : "transition",
                    n = "none 0s ease 0s";
                  this.adapter.setThumbStyleProperty(e, n, p.Thumb.END),
                    this.isRange &&
                      this.adapter.setThumbStyleProperty(e, n, p.Thumb.START),
                    this.adapter.setTrackActiveStyleProperty(e, n),
                    requestAnimationFrame(function () {
                      t.adapter.removeThumbStyleProperty(e, p.Thumb.END),
                        t.adapter.removeTrackActiveStyleProperty(e),
                        t.isRange &&
                          t.adapter.removeThumbStyleProperty(e, p.Thumb.START);
                    });
                }
              }),
              (y.prototype.updateOverlappingThumbsUI = function (t, e, n) {
                var i = !1;
                if (this.adapter.isRTL())
                  i =
                    t - this.startThumbKnobWidth / 2 <=
                    e + this.endThumbKnobWidth / 2;
                else {
                  var r = t + this.startThumbKnobWidth / 2;
                  i = e - this.endThumbKnobWidth / 2 <= r;
                }
                i
                  ? (this.adapter.addThumbClass(
                      u.cssClasses.THUMB_TOP,
                      n || p.Thumb.END
                    ),
                    this.adapter.removeThumbClass(
                      u.cssClasses.THUMB_TOP,
                      n === p.Thumb.START ? p.Thumb.END : p.Thumb.START
                    ))
                  : (this.adapter.removeThumbClass(
                      u.cssClasses.THUMB_TOP,
                      p.Thumb.START
                    ),
                    this.adapter.removeThumbClass(
                      u.cssClasses.THUMB_TOP,
                      p.Thumb.END
                    ));
              }),
              (y.prototype.convertAttributeValueToNumber = function (t, e) {
                if (null === t)
                  throw new Error(
                    "MDCSliderFoundation: `" + e + "` must be non-null."
                  );
                var n = Number(t);
                if (isNaN(n))
                  throw new Error(
                    "MDCSliderFoundation: `" +
                      e +
                      "` value is `" +
                      t +
                      "`, but must be a number."
                  );
                return n;
              }),
              (y.prototype.validateProperties = function (t) {
                var e = t.min,
                  n = t.max,
                  i = t.value,
                  r = t.valueStart,
                  o = t.step,
                  s = t.minRange;
                if (n <= e)
                  throw new Error(
                    "MDCSliderFoundation: min must be strictly less than max. Current: [min: " +
                      e +
                      ", max: " +
                      n +
                      "]"
                  );
                if (o <= 0)
                  throw new Error(
                    "MDCSliderFoundation: step must be a positive number. Current step: " +
                      o
                  );
                if (this.isRange) {
                  if (i < e || n < i || r < e || n < r)
                    throw new Error(
                      "MDCSliderFoundation: values must be in [min, max] range. Current values: [start value: " +
                        r +
                        ", end value: " +
                        i +
                        ", min: " +
                        e +
                        ", max: " +
                        n +
                        "]"
                    );
                  if (i < r)
                    throw new Error(
                      "MDCSliderFoundation: start value must be <= end value. Current values: [start value: " +
                        r +
                        ", end value: " +
                        i +
                        "]"
                    );
                  if (s < 0)
                    throw new Error(
                      "MDCSliderFoundation: minimum range must be non-negative. Current min range: " +
                        s
                    );
                  if (i - r < s)
                    throw new Error(
                      "MDCSliderFoundation: start value and end value must differ by at least " +
                        s +
                        ". Current values: [start value: " +
                        r +
                        ", end value: " +
                        i +
                        "]"
                    );
                  var a = (r - e) / o,
                    c = (i - e) / o;
                  if (
                    !Number.isInteger(parseFloat(a.toFixed(6))) ||
                    !Number.isInteger(parseFloat(c.toFixed(6)))
                  )
                    throw new Error(
                      "MDCSliderFoundation: Slider values must be valid based on the step value (" +
                        o +
                        "). Current values: [start value: " +
                        r +
                        ", end value: " +
                        i +
                        ", min: " +
                        e +
                        "]"
                    );
                } else {
                  if (i < e || n < i)
                    throw new Error(
                      "MDCSliderFoundation: value must be in [min, max] range. Current values: [value: " +
                        i +
                        ", min: " +
                        e +
                        ", max: " +
                        n +
                        "]"
                    );
                  if (
                    ((c = (i - e) / o),
                    !Number.isInteger(parseFloat(c.toFixed(6))))
                  )
                    throw new Error(
                      "MDCSliderFoundation: Slider value must be valid based on the step value (" +
                        o +
                        "). Current value: " +
                        i
                    );
                }
              }),
              (y.prototype.registerEventHandlers = function () {
                this.adapter.registerWindowEventHandler(
                  "resize",
                  this.resizeListener
                ),
                  y.SUPPORTS_POINTER_EVENTS
                    ? (this.adapter.registerEventHandler(
                        "pointerdown",
                        this.pointerdownListener
                      ),
                      this.adapter.registerEventHandler(
                        "pointerup",
                        this.pointerupListener
                      ))
                    : (this.adapter.registerEventHandler(
                        "mousedown",
                        this.mousedownOrTouchstartListener
                      ),
                      this.adapter.registerEventHandler(
                        "touchstart",
                        this.mousedownOrTouchstartListener
                      )),
                  this.isRange &&
                    (this.adapter.registerThumbEventHandler(
                      p.Thumb.START,
                      "mouseenter",
                      this.thumbMouseenterListener
                    ),
                    this.adapter.registerThumbEventHandler(
                      p.Thumb.START,
                      "mouseleave",
                      this.thumbMouseleaveListener
                    ),
                    this.adapter.registerInputEventHandler(
                      p.Thumb.START,
                      "change",
                      this.inputStartChangeListener
                    ),
                    this.adapter.registerInputEventHandler(
                      p.Thumb.START,
                      "focus",
                      this.inputStartFocusListener
                    ),
                    this.adapter.registerInputEventHandler(
                      p.Thumb.START,
                      "blur",
                      this.inputStartBlurListener
                    )),
                  this.adapter.registerThumbEventHandler(
                    p.Thumb.END,
                    "mouseenter",
                    this.thumbMouseenterListener
                  ),
                  this.adapter.registerThumbEventHandler(
                    p.Thumb.END,
                    "mouseleave",
                    this.thumbMouseleaveListener
                  ),
                  this.adapter.registerInputEventHandler(
                    p.Thumb.END,
                    "change",
                    this.inputEndChangeListener
                  ),
                  this.adapter.registerInputEventHandler(
                    p.Thumb.END,
                    "focus",
                    this.inputEndFocusListener
                  ),
                  this.adapter.registerInputEventHandler(
                    p.Thumb.END,
                    "blur",
                    this.inputEndBlurListener
                  );
              }),
              (y.prototype.deregisterEventHandlers = function () {
                this.adapter.deregisterWindowEventHandler(
                  "resize",
                  this.resizeListener
                ),
                  y.SUPPORTS_POINTER_EVENTS
                    ? (this.adapter.deregisterEventHandler(
                        "pointerdown",
                        this.pointerdownListener
                      ),
                      this.adapter.deregisterEventHandler(
                        "pointerup",
                        this.pointerupListener
                      ))
                    : (this.adapter.deregisterEventHandler(
                        "mousedown",
                        this.mousedownOrTouchstartListener
                      ),
                      this.adapter.deregisterEventHandler(
                        "touchstart",
                        this.mousedownOrTouchstartListener
                      )),
                  this.isRange &&
                    (this.adapter.deregisterThumbEventHandler(
                      p.Thumb.START,
                      "mouseenter",
                      this.thumbMouseenterListener
                    ),
                    this.adapter.deregisterThumbEventHandler(
                      p.Thumb.START,
                      "mouseleave",
                      this.thumbMouseleaveListener
                    ),
                    this.adapter.deregisterInputEventHandler(
                      p.Thumb.START,
                      "change",
                      this.inputStartChangeListener
                    ),
                    this.adapter.deregisterInputEventHandler(
                      p.Thumb.START,
                      "focus",
                      this.inputStartFocusListener
                    ),
                    this.adapter.deregisterInputEventHandler(
                      p.Thumb.START,
                      "blur",
                      this.inputStartBlurListener
                    )),
                  this.adapter.deregisterThumbEventHandler(
                    p.Thumb.END,
                    "mouseenter",
                    this.thumbMouseenterListener
                  ),
                  this.adapter.deregisterThumbEventHandler(
                    p.Thumb.END,
                    "mouseleave",
                    this.thumbMouseleaveListener
                  ),
                  this.adapter.deregisterInputEventHandler(
                    p.Thumb.END,
                    "change",
                    this.inputEndChangeListener
                  ),
                  this.adapter.deregisterInputEventHandler(
                    p.Thumb.END,
                    "focus",
                    this.inputEndFocusListener
                  ),
                  this.adapter.deregisterInputEventHandler(
                    p.Thumb.END,
                    "blur",
                    this.inputEndBlurListener
                  );
              }),
              (y.prototype.handlePointerup = function () {
                this.handleUp(),
                  this.adapter.deregisterEventHandler(
                    "pointermove",
                    this.moveListener
                  );
              }),
              (y.SUPPORTS_POINTER_EVENTS =
                h &&
                Boolean(window.PointerEvent) &&
                !(
                  [
                    "iPad Simulator",
                    "iPhone Simulator",
                    "iPod Simulator",
                    "iPad",
                    "iPhone",
                    "iPod",
                  ].includes(navigator.platform) ||
                  (navigator.userAgent.includes("Mac") &&
                    "ontouchend" in document)
                )),
              y);
          function y(t) {
            var e = c.call(this, o(o({}, y.defaultAdapter), t)) || this;
            return (
              (e.initialStylesRemoved = !1),
              (e.isDisabled = !1),
              (e.isDiscrete = !1),
              (e.step = u.numbers.STEP_SIZE),
              (e.minRange = u.numbers.MIN_RANGE),
              (e.hasTickMarks = !1),
              (e.isRange = !1),
              (e.thumb = null),
              (e.downEventClientX = null),
              (e.startThumbKnobWidth = 0),
              (e.endThumbKnobWidth = 0),
              (e.animFrame = new s.AnimationFrame()),
              e
            );
          }
          function C(t) {
            var e = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(t));
            if (!e) return 0;
            var n = e[1] || "",
              i = e[2] || 0;
            return Math.max(0, ("0" === n ? 0 : n.length) - Number(i));
          }
          e.MDCSliderFoundation = f;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.announce = void 0);
          var i = n(16),
            o = i.numbers.ARIA_LIVE_DELAY_MS,
            s = i.strings.ARIA_LIVE_LABEL_TEXT_ATTR;
          e.announce = function (t, e) {
            void 0 === e && (e = t);
            var n = t.getAttribute("aria-live"),
              i = e.textContent.trim();
            if (i && n) {
              t.setAttribute("aria-live", "off"), (e.textContent = "");
              var r = document.createElement("span");
              r.setAttribute(
                "style",
                "display: inline-block; width: 0; height: 1px;"
              ),
                (r.textContent = " "),
                e.appendChild(r),
                e.setAttribute(s, i),
                setTimeout(function () {
                  t.setAttribute("aria-live", n),
                    e.removeAttribute(s),
                    (e.textContent = i);
                }, o);
            }
          };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSnackbarFoundation = void 0);
          var s,
            a = n(0),
            c = n(16),
            u = c.cssClasses.OPENING,
            l = c.cssClasses.OPEN,
            d = c.cssClasses.CLOSING,
            p = c.strings.REASON_ACTION,
            h = c.strings.REASON_DISMISS,
            f =
              ((s = a.MDCFoundation),
              r(y, s),
              Object.defineProperty(y, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y, "numbers", {
                get: function () {
                  return c.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    announce: function () {},
                    notifyClosed: function () {},
                    notifyClosing: function () {},
                    notifyOpened: function () {},
                    notifyOpening: function () {},
                    removeClass: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (y.prototype.destroy = function () {
                this.clearAutoDismissTimer(),
                  cancelAnimationFrame(this.animationFrame),
                  (this.animationFrame = 0),
                  clearTimeout(this.animationTimer),
                  (this.animationTimer = 0),
                  this.adapter.removeClass(u),
                  this.adapter.removeClass(l),
                  this.adapter.removeClass(d);
              }),
              (y.prototype.open = function () {
                var e = this;
                this.clearAutoDismissTimer(),
                  (this.opened = !0),
                  this.adapter.notifyOpening(),
                  this.adapter.removeClass(d),
                  this.adapter.addClass(u),
                  this.adapter.announce(),
                  this.runNextAnimationFrame(function () {
                    e.adapter.addClass(l),
                      (e.animationTimer = setTimeout(function () {
                        var t = e.getTimeoutMs();
                        e.handleAnimationTimerEnd(),
                          e.adapter.notifyOpened(),
                          t !== c.numbers.INDETERMINATE &&
                            (e.autoDismissTimer = setTimeout(function () {
                              e.close(h);
                            }, t));
                      }, c.numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS));
                  });
              }),
              (y.prototype.close = function (t) {
                var e = this;
                void 0 === t && (t = ""),
                  this.opened &&
                    (cancelAnimationFrame(this.animationFrame),
                    (this.animationFrame = 0),
                    this.clearAutoDismissTimer(),
                    (this.opened = !1),
                    this.adapter.notifyClosing(t),
                    this.adapter.addClass(c.cssClasses.CLOSING),
                    this.adapter.removeClass(c.cssClasses.OPEN),
                    this.adapter.removeClass(c.cssClasses.OPENING),
                    clearTimeout(this.animationTimer),
                    (this.animationTimer = setTimeout(function () {
                      e.handleAnimationTimerEnd(), e.adapter.notifyClosed(t);
                    }, c.numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS)));
              }),
              (y.prototype.isOpen = function () {
                return this.opened;
              }),
              (y.prototype.getTimeoutMs = function () {
                return this.autoDismissTimeoutMs;
              }),
              (y.prototype.setTimeoutMs = function (t) {
                var e = c.numbers.MIN_AUTO_DISMISS_TIMEOUT_MS,
                  n = c.numbers.MAX_AUTO_DISMISS_TIMEOUT_MS,
                  i = c.numbers.INDETERMINATE;
                if (!(t === c.numbers.INDETERMINATE || (t <= n && e <= t)))
                  throw new Error(
                    "\n        timeoutMs must be an integer in the range " +
                      e +
                      "–" +
                      n +
                      "\n        (or " +
                      i +
                      " to disable), but got '" +
                      t +
                      "'"
                  );
                this.autoDismissTimeoutMs = t;
              }),
              (y.prototype.getCloseOnEscape = function () {
                return this.closeOnEscape;
              }),
              (y.prototype.setCloseOnEscape = function (t) {
                this.closeOnEscape = t;
              }),
              (y.prototype.handleKeyDown = function (t) {
                ("Escape" !== t.key && 27 !== t.keyCode) ||
                  !this.getCloseOnEscape() ||
                  this.close(h);
              }),
              (y.prototype.handleActionButtonClick = function (t) {
                this.close(p);
              }),
              (y.prototype.handleActionIconClick = function (t) {
                this.close(h);
              }),
              (y.prototype.clearAutoDismissTimer = function () {
                clearTimeout(this.autoDismissTimer),
                  (this.autoDismissTimer = 0);
              }),
              (y.prototype.handleAnimationTimerEnd = function () {
                (this.animationTimer = 0),
                  this.adapter.removeClass(c.cssClasses.OPENING),
                  this.adapter.removeClass(c.cssClasses.CLOSING);
              }),
              (y.prototype.runNextAnimationFrame = function (t) {
                var e = this;
                cancelAnimationFrame(this.animationFrame),
                  (this.animationFrame = requestAnimationFrame(function () {
                    (e.animationFrame = 0),
                      clearTimeout(e.animationTimer),
                      (e.animationTimer = setTimeout(t, 0));
                  }));
              }),
              y);
          function y(t) {
            var e = s.call(this, o(o({}, y.defaultAdapter), t)) || this;
            return (
              (e.opened = !1),
              (e.animationFrame = 0),
              (e.animationTimer = 0),
              (e.autoDismissTimer = 0),
              (e.autoDismissTimeoutMs =
                c.numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS),
              (e.closeOnEscape = !0),
              e
            );
          }
          (e.MDCSnackbarFoundation = f), (e.default = f);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSwitchFoundation = void 0);
          var s,
            a = n(0),
            c = n(96),
            u =
              ((s = a.MDCFoundation),
              r(l, s),
              Object.defineProperty(l, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(l, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    setNativeControlChecked: function () {},
                    setNativeControlDisabled: function () {},
                    setNativeControlAttr: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (l.prototype.setChecked = function (t) {
                this.adapter.setNativeControlChecked(t),
                  this.updateAriaChecked(t),
                  this.updateCheckedStyling(t);
              }),
              (l.prototype.setDisabled = function (t) {
                this.adapter.setNativeControlDisabled(t),
                  t
                    ? this.adapter.addClass(c.cssClasses.DISABLED)
                    : this.adapter.removeClass(c.cssClasses.DISABLED);
              }),
              (l.prototype.handleChange = function (t) {
                var e = t.target;
                this.updateAriaChecked(e.checked),
                  this.updateCheckedStyling(e.checked);
              }),
              (l.prototype.updateCheckedStyling = function (t) {
                t
                  ? this.adapter.addClass(c.cssClasses.CHECKED)
                  : this.adapter.removeClass(c.cssClasses.CHECKED);
              }),
              (l.prototype.updateAriaChecked = function (t) {
                this.adapter.setNativeControlAttr(
                  c.strings.ARIA_CHECKED_ATTR,
                  "" + !!t
                );
              }),
              l);
          function l(t) {
            return s.call(this, o(o({}, l.defaultAdapter), t)) || this;
          }
          (e.MDCSwitchFoundation = u), (e.default = u);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.cssClasses = void 0);
          e.cssClasses = {
            CHECKED: "mdc-switch--checked",
            DISABLED: "mdc-switch--disabled",
          };
          e.strings = {
            ARIA_CHECKED_ATTR: "aria-checked",
            NATIVE_CONTROL_SELECTOR: ".mdc-switch__native-control",
            RIPPLE_SURFACE_SELECTOR: ".mdc-switch__thumb-underlay",
          };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSwitchRenderFoundation = e.MDCSwitchFoundation = void 0);
          var o,
            s = n(216),
            a = n(35),
            c =
              ((o = s.MDCObserverFoundation),
              r(u, o),
              (u.prototype.init = function () {
                this.observe(this.adapter.state, {
                  disabled: this.stopProcessingIfDisabled,
                  processing: this.stopProcessingIfDisabled,
                });
              }),
              (u.prototype.handleClick = function () {
                this.adapter.state.disabled ||
                  (this.adapter.state.selected = !this.adapter.state.selected);
              }),
              (u.prototype.stopProcessingIfDisabled = function () {
                this.adapter.state.disabled &&
                  (this.adapter.state.processing = !1);
              }),
              u);
          function u(t) {
            var e = o.call(this, t) || this;
            return (e.handleClick = e.handleClick.bind(e)), e;
          }
          e.MDCSwitchFoundation = c;
          var l,
            d =
              (r(p, (l = c)),
              (p.prototype.init = function () {
                l.prototype.init.call(this),
                  this.observe(this.adapter.state, {
                    disabled: this.onDisabledChange,
                    processing: this.onProcessingChange,
                    selected: this.onSelectedChange,
                  });
              }),
              (p.prototype.initFromDOM = function () {
                this.setObserversEnabled(this.adapter.state, !1),
                  (this.adapter.state.selected = this.adapter.hasClass(
                    a.CssClasses.SELECTED
                  )),
                  this.onSelectedChange(),
                  (this.adapter.state.disabled = this.adapter.isDisabled()),
                  (this.adapter.state.processing = this.adapter.hasClass(
                    a.CssClasses.PROCESSING
                  )),
                  this.setObserversEnabled(this.adapter.state, !0),
                  this.stopProcessingIfDisabled();
              }),
              (p.prototype.onDisabledChange = function () {
                this.adapter.setDisabled(this.adapter.state.disabled);
              }),
              (p.prototype.onProcessingChange = function () {
                this.toggleClass(
                  this.adapter.state.processing,
                  a.CssClasses.PROCESSING
                );
              }),
              (p.prototype.onSelectedChange = function () {
                this.adapter.setAriaChecked(
                  String(this.adapter.state.selected)
                ),
                  this.toggleClass(
                    this.adapter.state.selected,
                    a.CssClasses.SELECTED
                  ),
                  this.toggleClass(
                    !this.adapter.state.selected,
                    a.CssClasses.UNSELECTED
                  );
              }),
              (p.prototype.toggleClass = function (t, e) {
                t ? this.adapter.addClass(e) : this.adapter.removeClass(e);
              }),
              p);
          function p() {
            return (null !== l && l.apply(this, arguments)) || this;
          }
          e.MDCSwitchRenderFoundation = d;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            s =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            a =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      o(e, t, n);
                return s(e, t), e;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabScroller = void 0);
          var c,
            u = n(1),
            l = n(5),
            d = n(3),
            p = n(99),
            h = a(n(100)),
            f =
              ((c = u.MDCComponent),
              r(y, c),
              (y.attachTo = function (t) {
                return new y(t);
              }),
              (y.prototype.initialize = function () {
                (this.area = this.root.querySelector(
                  p.MDCTabScrollerFoundation.strings.AREA_SELECTOR
                )),
                  (this.content = this.root.querySelector(
                    p.MDCTabScrollerFoundation.strings.CONTENT_SELECTOR
                  ));
              }),
              (y.prototype.initialSyncWithDOM = function () {
                var e = this;
                (this.handleInteraction = function () {
                  e.foundation.handleInteraction();
                }),
                  (this.handleTransitionEnd = function (t) {
                    e.foundation.handleTransitionEnd(t);
                  }),
                  this.area.addEventListener(
                    "wheel",
                    this.handleInteraction,
                    l.applyPassive()
                  ),
                  this.area.addEventListener(
                    "touchstart",
                    this.handleInteraction,
                    l.applyPassive()
                  ),
                  this.area.addEventListener(
                    "pointerdown",
                    this.handleInteraction,
                    l.applyPassive()
                  ),
                  this.area.addEventListener(
                    "mousedown",
                    this.handleInteraction,
                    l.applyPassive()
                  ),
                  this.area.addEventListener(
                    "keydown",
                    this.handleInteraction,
                    l.applyPassive()
                  ),
                  this.content.addEventListener(
                    "transitionend",
                    this.handleTransitionEnd
                  );
              }),
              (y.prototype.destroy = function () {
                c.prototype.destroy.call(this),
                  this.area.removeEventListener(
                    "wheel",
                    this.handleInteraction,
                    l.applyPassive()
                  ),
                  this.area.removeEventListener(
                    "touchstart",
                    this.handleInteraction,
                    l.applyPassive()
                  ),
                  this.area.removeEventListener(
                    "pointerdown",
                    this.handleInteraction,
                    l.applyPassive()
                  ),
                  this.area.removeEventListener(
                    "mousedown",
                    this.handleInteraction,
                    l.applyPassive()
                  ),
                  this.area.removeEventListener(
                    "keydown",
                    this.handleInteraction,
                    l.applyPassive()
                  ),
                  this.content.removeEventListener(
                    "transitionend",
                    this.handleTransitionEnd
                  );
              }),
              (y.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    eventTargetMatchesSelector: function (t, e) {
                      return d.matches(t, e);
                    },
                    addClass: function (t) {
                      n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      n.root.classList.remove(t);
                    },
                    addScrollAreaClass: function (t) {
                      n.area.classList.add(t);
                    },
                    setScrollAreaStyleProperty: function (t, e) {
                      n.area.style.setProperty(t, e);
                    },
                    setScrollContentStyleProperty: function (t, e) {
                      n.content.style.setProperty(t, e);
                    },
                    getScrollContentStyleValue: function (t) {
                      return window
                        .getComputedStyle(n.content)
                        .getPropertyValue(t);
                    },
                    setScrollAreaScrollLeft: function (t) {
                      return (n.area.scrollLeft = t);
                    },
                    getScrollAreaScrollLeft: function () {
                      return n.area.scrollLeft;
                    },
                    getScrollContentOffsetWidth: function () {
                      return n.content.offsetWidth;
                    },
                    getScrollAreaOffsetWidth: function () {
                      return n.area.offsetWidth;
                    },
                    computeScrollAreaClientRect: function () {
                      return n.area.getBoundingClientRect();
                    },
                    computeScrollContentClientRect: function () {
                      return n.content.getBoundingClientRect();
                    },
                    computeHorizontalScrollbarHeight: function () {
                      return h.computeHorizontalScrollbarHeight(document);
                    },
                  };
                return new p.MDCTabScrollerFoundation(t);
              }),
              (y.prototype.getScrollPosition = function () {
                return this.foundation.getScrollPosition();
              }),
              (y.prototype.getScrollContentWidth = function () {
                return this.content.offsetWidth;
              }),
              (y.prototype.incrementScroll = function (t) {
                this.foundation.incrementScroll(t);
              }),
              (y.prototype.scrollTo = function (t) {
                this.foundation.scrollTo(t);
              }),
              y);
          function y() {
            return (null !== c && c.apply(this, arguments)) || this;
          }
          e.MDCTabScroller = f;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__read) ||
              function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var i,
                  r,
                  o = n.call(t),
                  s = [];
                try {
                  for (; (void 0 === e || 0 < e--) && !(i = o.next()).done; )
                    s.push(i.value);
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return s;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabScrollerFoundation = void 0);
          var a,
            c = n(0),
            u = n(36),
            l = n(221),
            d = n(222),
            p = n(223),
            h =
              ((a = c.MDCFoundation),
              r(f, a),
              Object.defineProperty(f, "cssClasses", {
                get: function () {
                  return u.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(f, "strings", {
                get: function () {
                  return u.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(f, "defaultAdapter", {
                get: function () {
                  return {
                    eventTargetMatchesSelector: function () {
                      return !1;
                    },
                    addClass: function () {},
                    removeClass: function () {},
                    addScrollAreaClass: function () {},
                    setScrollAreaStyleProperty: function () {},
                    setScrollContentStyleProperty: function () {},
                    getScrollContentStyleValue: function () {
                      return "";
                    },
                    setScrollAreaScrollLeft: function () {},
                    getScrollAreaScrollLeft: function () {
                      return 0;
                    },
                    getScrollContentOffsetWidth: function () {
                      return 0;
                    },
                    getScrollAreaOffsetWidth: function () {
                      return 0;
                    },
                    computeScrollAreaClientRect: function () {
                      return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                      };
                    },
                    computeScrollContentClientRect: function () {
                      return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                      };
                    },
                    computeHorizontalScrollbarHeight: function () {
                      return 0;
                    },
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (f.prototype.init = function () {
                var t = this.adapter.computeHorizontalScrollbarHeight();
                this.adapter.setScrollAreaStyleProperty(
                  "margin-bottom",
                  -t + "px"
                ),
                  this.adapter.addScrollAreaClass(
                    f.cssClasses.SCROLL_AREA_SCROLL
                  );
              }),
              (f.prototype.getScrollPosition = function () {
                if (this.isRTL()) return this.computeCurrentScrollPositionRTL();
                var t = this.calculateCurrentTranslateX();
                return this.adapter.getScrollAreaScrollLeft() - t;
              }),
              (f.prototype.handleInteraction = function () {
                this.isAnimating && this.stopScrollAnimation();
              }),
              (f.prototype.handleTransitionEnd = function (t) {
                var e = t.target;
                this.isAnimating &&
                  this.adapter.eventTargetMatchesSelector(
                    e,
                    f.strings.CONTENT_SELECTOR
                  ) &&
                  ((this.isAnimating = !1),
                  this.adapter.removeClass(f.cssClasses.ANIMATING));
              }),
              (f.prototype.incrementScroll = function (t) {
                0 !== t && this.animate(this.getIncrementScrollOperation(t));
              }),
              (f.prototype.incrementScrollImmediate = function (t) {
                if (0 !== t) {
                  var e = this.getIncrementScrollOperation(t);
                  0 !== e.scrollDelta &&
                    (this.stopScrollAnimation(),
                    this.adapter.setScrollAreaScrollLeft(
                      e.finalScrollPosition
                    ));
                }
              }),
              (f.prototype.scrollTo = function (t) {
                this.isRTL() ? this.scrollToImplRTL(t) : this.scrollToImpl(t);
              }),
              (f.prototype.getRTLScroller = function () {
                return (
                  this.rtlScrollerInstance ||
                    (this.rtlScrollerInstance = this.rtlScrollerFactory()),
                  this.rtlScrollerInstance
                );
              }),
              (f.prototype.calculateCurrentTranslateX = function () {
                var t = this.adapter.getScrollContentStyleValue("transform");
                if ("none" === t) return 0;
                var e = /\((.+?)\)/.exec(t);
                if (!e) return 0;
                var n = e[1],
                  i = s(n.split(","), 6),
                  r = (i[0], i[1], i[2], i[3], i[4]);
                return i[5], parseFloat(r);
              }),
              (f.prototype.clampScrollValue = function (t) {
                var e = this.calculateScrollEdges();
                return Math.min(Math.max(e.left, t), e.right);
              }),
              (f.prototype.computeCurrentScrollPositionRTL = function () {
                var t = this.calculateCurrentTranslateX();
                return this.getRTLScroller().getScrollPositionRTL(t);
              }),
              (f.prototype.calculateScrollEdges = function () {
                return {
                  left: 0,
                  right:
                    this.adapter.getScrollContentOffsetWidth() -
                    this.adapter.getScrollAreaOffsetWidth(),
                };
              }),
              (f.prototype.scrollToImpl = function (t) {
                var e = this.getScrollPosition(),
                  n = this.clampScrollValue(t),
                  i = n - e;
                this.animate({ finalScrollPosition: n, scrollDelta: i });
              }),
              (f.prototype.scrollToImplRTL = function (t) {
                var e = this.getRTLScroller().scrollToRTL(t);
                this.animate(e);
              }),
              (f.prototype.getIncrementScrollOperation = function (t) {
                if (this.isRTL())
                  return this.getRTLScroller().incrementScrollRTL(t);
                var e = this.getScrollPosition(),
                  n = t + e,
                  i = this.clampScrollValue(n);
                return { finalScrollPosition: i, scrollDelta: i - e };
              }),
              (f.prototype.animate = function (t) {
                var e = this;
                0 !== t.scrollDelta &&
                  (this.stopScrollAnimation(),
                  this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),
                  this.adapter.setScrollContentStyleProperty(
                    "transform",
                    "translateX(" + t.scrollDelta + "px)"
                  ),
                  this.adapter.computeScrollAreaClientRect(),
                  requestAnimationFrame(function () {
                    e.adapter.addClass(f.cssClasses.ANIMATING),
                      e.adapter.setScrollContentStyleProperty(
                        "transform",
                        "none"
                      );
                  }),
                  (this.isAnimating = !0));
              }),
              (f.prototype.stopScrollAnimation = function () {
                this.isAnimating = !1;
                var t = this.getAnimatingScrollPosition();
                this.adapter.removeClass(f.cssClasses.ANIMATING),
                  this.adapter.setScrollContentStyleProperty(
                    "transform",
                    "translateX(0px)"
                  ),
                  this.adapter.setScrollAreaScrollLeft(t);
              }),
              (f.prototype.getAnimatingScrollPosition = function () {
                var t = this.calculateCurrentTranslateX(),
                  e = this.adapter.getScrollAreaScrollLeft();
                return this.isRTL()
                  ? this.getRTLScroller().getAnimatingScrollPosition(e, t)
                  : e - t;
              }),
              (f.prototype.rtlScrollerFactory = function () {
                var t = this.adapter.getScrollAreaScrollLeft();
                this.adapter.setScrollAreaScrollLeft(t - 1);
                var e = this.adapter.getScrollAreaScrollLeft();
                if (e < 0)
                  return (
                    this.adapter.setScrollAreaScrollLeft(t),
                    new d.MDCTabScrollerRTLNegative(this.adapter)
                  );
                var n = this.adapter.computeScrollAreaClientRect(),
                  i = this.adapter.computeScrollContentClientRect(),
                  r = Math.round(i.right - n.right);
                return (
                  this.adapter.setScrollAreaScrollLeft(t),
                  r === e
                    ? new p.MDCTabScrollerRTLReverse(this.adapter)
                    : new l.MDCTabScrollerRTLDefault(this.adapter)
                );
              }),
              (f.prototype.isRTL = function () {
                return (
                  "rtl" === this.adapter.getScrollContentStyleValue("direction")
                );
              }),
              f);
          function f(t) {
            var e = a.call(this, o(o({}, f.defaultAdapter), t)) || this;
            return (e.isAnimating = !1), e;
          }
          (e.MDCTabScrollerFoundation = h), (e.default = h);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.computeHorizontalScrollbarHeight = void 0);
          var r,
            o = n(36);
          e.computeHorizontalScrollbarHeight = function (t, e) {
            if ((void 0 === e && (e = !0), e && void 0 !== r)) return r;
            var n = t.createElement("div");
            n.classList.add(o.cssClasses.SCROLL_TEST), t.body.appendChild(n);
            var i = n.offsetHeight - n.clientHeight;
            return t.body.removeChild(n), e && (r = i), i;
          };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTab = void 0);
          var o,
            s = n(1),
            a = n(2),
            c = n(4),
            u = n(102),
            l = n(38),
            d =
              ((o = s.MDCComponent),
              r(p, o),
              (p.attachTo = function (t) {
                return new p(t);
              }),
              (p.prototype.initialize = function (t, e) {
                void 0 === t &&
                  (t = function (t, e) {
                    return new a.MDCRipple(t, e);
                  }),
                  void 0 === e &&
                    (e = function (t) {
                      return new u.MDCTabIndicator(t);
                    }),
                  (this.id = this.root.id);
                var n = new c.MDCRippleFoundation(
                  a.MDCRipple.createAdapter(this)
                );
                this.ripple = t(this.root, n);
                var i = this.root.querySelector(
                  l.MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR
                );
                (this.tabIndicator = e(i)),
                  (this.content = this.root.querySelector(
                    l.MDCTabFoundation.strings.CONTENT_SELECTOR
                  ));
              }),
              (p.prototype.initialSyncWithDOM = function () {
                var t = this;
                (this.handleClick = function () {
                  t.foundation.handleClick();
                }),
                  this.listen("click", this.handleClick);
              }),
              (p.prototype.destroy = function () {
                this.unlisten("click", this.handleClick),
                  this.ripple.destroy(),
                  o.prototype.destroy.call(this);
              }),
              (p.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    setAttr: function (t, e) {
                      return n.root.setAttribute(t, e);
                    },
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    activateIndicator: function (t) {
                      n.tabIndicator.activate(t);
                    },
                    deactivateIndicator: function () {
                      n.tabIndicator.deactivate();
                    },
                    notifyInteracted: function () {
                      return n.emit(
                        l.MDCTabFoundation.strings.INTERACTED_EVENT,
                        { tabId: n.id },
                        !0
                      );
                    },
                    getOffsetLeft: function () {
                      return n.root.offsetLeft;
                    },
                    getOffsetWidth: function () {
                      return n.root.offsetWidth;
                    },
                    getContentOffsetLeft: function () {
                      return n.content.offsetLeft;
                    },
                    getContentOffsetWidth: function () {
                      return n.content.offsetWidth;
                    },
                    focus: function () {
                      return n.root.focus();
                    },
                  };
                return new l.MDCTabFoundation(t);
              }),
              Object.defineProperty(p.prototype, "active", {
                get: function () {
                  return this.foundation.isActive();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p.prototype, "focusOnActivate", {
                set: function (t) {
                  this.foundation.setFocusOnActivate(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.activate = function (t) {
                this.foundation.activate(t);
              }),
              (p.prototype.deactivate = function () {
                this.foundation.deactivate();
              }),
              (p.prototype.computeIndicatorClientRect = function () {
                return this.tabIndicator.computeContentClientRect();
              }),
              (p.prototype.computeDimensions = function () {
                return this.foundation.computeDimensions();
              }),
              (p.prototype.focus = function () {
                this.root.focus();
              }),
              p);
          function p() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCTab = d;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabIndicator = void 0);
          var o,
            s = n(1),
            a = n(103),
            c = n(17),
            u = n(105),
            l =
              ((o = s.MDCComponent),
              r(d, o),
              (d.attachTo = function (t) {
                return new d(t);
              }),
              (d.prototype.initialize = function () {
                this.content = this.root.querySelector(
                  c.MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR
                );
              }),
              (d.prototype.computeContentClientRect = function () {
                return this.foundation.computeContentClientRect();
              }),
              (d.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    computeContentClientRect: function () {
                      return n.content.getBoundingClientRect();
                    },
                    setContentStyleProperty: function (t, e) {
                      n.content.style.setProperty(t, e);
                    },
                  };
                return this.root.classList.contains(
                  c.MDCTabIndicatorFoundation.cssClasses.FADE
                )
                  ? new a.MDCFadingTabIndicatorFoundation(t)
                  : new u.MDCSlidingTabIndicatorFoundation(t);
              }),
              (d.prototype.activate = function (t) {
                this.foundation.activate(t);
              }),
              (d.prototype.deactivate = function () {
                this.foundation.deactivate();
              }),
              d);
          function d() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCTabIndicator = l;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCFadingTabIndicatorFoundation = void 0);
          var o,
            s = n(17),
            a =
              ((o = s.MDCTabIndicatorFoundation),
              r(c, o),
              (c.prototype.activate = function () {
                this.adapter.addClass(
                  s.MDCTabIndicatorFoundation.cssClasses.ACTIVE
                );
              }),
              (c.prototype.deactivate = function () {
                this.adapter.removeClass(
                  s.MDCTabIndicatorFoundation.cssClasses.ACTIVE
                );
              }),
              c);
          function c() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          (e.MDCFadingTabIndicatorFoundation = a), (e.default = a);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.cssClasses = void 0);
          e.cssClasses = {
            ACTIVE: "mdc-tab-indicator--active",
            FADE: "mdc-tab-indicator--fade",
            NO_TRANSITION: "mdc-tab-indicator--no-transition",
          };
          e.strings = { CONTENT_SELECTOR: ".mdc-tab-indicator__content" };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSlidingTabIndicatorFoundation = void 0);
          var o,
            s = n(17),
            a =
              ((o = s.MDCTabIndicatorFoundation),
              r(c, o),
              (c.prototype.activate = function (t) {
                if (t) {
                  var e = this.computeContentClientRect(),
                    n = t.width / e.width,
                    i = t.left - e.left;
                  this.adapter.addClass(
                    s.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION
                  ),
                    this.adapter.setContentStyleProperty(
                      "transform",
                      "translateX(" + i + "px) scaleX(" + n + ")"
                    ),
                    this.computeContentClientRect(),
                    this.adapter.removeClass(
                      s.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION
                    ),
                    this.adapter.addClass(
                      s.MDCTabIndicatorFoundation.cssClasses.ACTIVE
                    ),
                    this.adapter.setContentStyleProperty("transform", "");
                } else
                  this.adapter.addClass(
                    s.MDCTabIndicatorFoundation.cssClasses.ACTIVE
                  );
              }),
              (c.prototype.deactivate = function () {
                this.adapter.removeClass(
                  s.MDCTabIndicatorFoundation.cssClasses.ACTIVE
                );
              }),
              c);
          function c() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          (e.MDCSlidingTabIndicatorFoundation = a), (e.default = a);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.cssClasses = void 0);
          e.cssClasses = { ACTIVE: "mdc-tab--active" };
          e.strings = {
            ARIA_SELECTED: "aria-selected",
            CONTENT_SELECTOR: ".mdc-tab__content",
            INTERACTED_EVENT: "MDCTab:interacted",
            RIPPLE_SELECTOR: ".mdc-tab__ripple",
            TABINDEX: "tabIndex",
            TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator",
          };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabBarFoundation = void 0);
          var s = n(0),
            u = n(108),
            a = new Set();
          a.add(u.strings.ARROW_LEFT_KEY),
            a.add(u.strings.ARROW_RIGHT_KEY),
            a.add(u.strings.END_KEY),
            a.add(u.strings.HOME_KEY),
            a.add(u.strings.ENTER_KEY),
            a.add(u.strings.SPACE_KEY);
          var c = new Map();
          c.set(u.numbers.ARROW_LEFT_KEYCODE, u.strings.ARROW_LEFT_KEY),
            c.set(u.numbers.ARROW_RIGHT_KEYCODE, u.strings.ARROW_RIGHT_KEY),
            c.set(u.numbers.END_KEYCODE, u.strings.END_KEY),
            c.set(u.numbers.HOME_KEYCODE, u.strings.HOME_KEY),
            c.set(u.numbers.ENTER_KEYCODE, u.strings.ENTER_KEY),
            c.set(u.numbers.SPACE_KEYCODE, u.strings.SPACE_KEY);
          var l,
            d =
              ((l = s.MDCFoundation),
              r(p, l),
              Object.defineProperty(p, "strings", {
                get: function () {
                  return u.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "numbers", {
                get: function () {
                  return u.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "defaultAdapter", {
                get: function () {
                  return {
                    scrollTo: function () {},
                    incrementScroll: function () {},
                    getScrollPosition: function () {
                      return 0;
                    },
                    getScrollContentWidth: function () {
                      return 0;
                    },
                    getOffsetWidth: function () {
                      return 0;
                    },
                    isRTL: function () {
                      return !1;
                    },
                    setActiveTab: function () {},
                    activateTabAtIndex: function () {},
                    deactivateTabAtIndex: function () {},
                    focusTabAtIndex: function () {},
                    getTabIndicatorClientRectAtIndex: function () {
                      return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                      };
                    },
                    getTabDimensionsAtIndex: function () {
                      return {
                        rootLeft: 0,
                        rootRight: 0,
                        contentLeft: 0,
                        contentRight: 0,
                      };
                    },
                    getPreviousActiveTabIndex: function () {
                      return -1;
                    },
                    getFocusedTabIndex: function () {
                      return -1;
                    },
                    getIndexOfTabById: function () {
                      return -1;
                    },
                    getTabListLength: function () {
                      return 0;
                    },
                    notifyTabActivated: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.setUseAutomaticActivation = function (t) {
                this.useAutomaticActivation = t;
              }),
              (p.prototype.activateTab = function (t) {
                var e,
                  n = this.adapter.getPreviousActiveTabIndex();
                this.indexIsInRange(t) &&
                  t !== n &&
                  (-1 !== n &&
                    (this.adapter.deactivateTabAtIndex(n),
                    (e = this.adapter.getTabIndicatorClientRectAtIndex(n))),
                  this.adapter.activateTabAtIndex(t, e),
                  this.scrollIntoView(t),
                  this.adapter.notifyTabActivated(t));
              }),
              (p.prototype.handleKeyDown = function (t) {
                var e = this.getKeyFromEvent(t);
                if (void 0 !== e)
                  if (
                    (this.isActivationKey(e) || t.preventDefault(),
                    this.useAutomaticActivation)
                  ) {
                    if (this.isActivationKey(e)) return;
                    var n = this.determineTargetFromKey(
                      this.adapter.getPreviousActiveTabIndex(),
                      e
                    );
                    this.adapter.setActiveTab(n), this.scrollIntoView(n);
                  } else {
                    var i = this.adapter.getFocusedTabIndex();
                    this.isActivationKey(e)
                      ? this.adapter.setActiveTab(i)
                      : ((n = this.determineTargetFromKey(i, e)),
                        this.adapter.focusTabAtIndex(n),
                        this.scrollIntoView(n));
                  }
              }),
              (p.prototype.handleTabInteraction = function (t) {
                this.adapter.setActiveTab(
                  this.adapter.getIndexOfTabById(t.detail.tabId)
                );
              }),
              (p.prototype.scrollIntoView = function (t) {
                this.indexIsInRange(t) &&
                  (0 !== t
                    ? t !== this.adapter.getTabListLength() - 1
                      ? this.isRTL()
                        ? this.scrollIntoViewImplRTL(t)
                        : this.scrollIntoViewImpl(t)
                      : this.adapter.scrollTo(
                          this.adapter.getScrollContentWidth()
                        )
                    : this.adapter.scrollTo(0));
              }),
              (p.prototype.determineTargetFromKey = function (t, e) {
                var n = this.isRTL(),
                  i = this.adapter.getTabListLength() - 1,
                  r = e === u.strings.END_KEY,
                  o =
                    (e === u.strings.ARROW_LEFT_KEY && !n) ||
                    (e === u.strings.ARROW_RIGHT_KEY && n),
                  s =
                    (e === u.strings.ARROW_RIGHT_KEY && !n) ||
                    (e === u.strings.ARROW_LEFT_KEY && n),
                  a = t;
                return (
                  r ? (a = i) : o ? (a -= 1) : s ? (a += 1) : (a = 0),
                  a < 0 ? (a = i) : i < a && (a = 0),
                  a
                );
              }),
              (p.prototype.calculateScrollIncrement = function (t, e, n, i) {
                var r = this.adapter.getTabDimensionsAtIndex(e),
                  o = r.contentLeft - n - i,
                  s = r.contentRight - n - u.numbers.EXTRA_SCROLL_AMOUNT,
                  a = o + u.numbers.EXTRA_SCROLL_AMOUNT;
                return e < t ? Math.min(s, 0) : Math.max(a, 0);
              }),
              (p.prototype.calculateScrollIncrementRTL = function (
                t,
                e,
                n,
                i,
                r
              ) {
                var o = this.adapter.getTabDimensionsAtIndex(e),
                  s = r - o.contentLeft - n,
                  a =
                    r - o.contentRight - n - i + u.numbers.EXTRA_SCROLL_AMOUNT,
                  c = s - u.numbers.EXTRA_SCROLL_AMOUNT;
                return t < e ? Math.max(a, 0) : Math.min(c, 0);
              }),
              (p.prototype.findAdjacentTabIndexClosestToEdge = function (
                t,
                e,
                n,
                i
              ) {
                var r = e.rootLeft - n,
                  o = e.rootRight - n - i,
                  s = r + o;
                return r < 0 || s < 0 ? t - 1 : 0 < o || 0 < s ? t + 1 : -1;
              }),
              (p.prototype.findAdjacentTabIndexClosestToEdgeRTL = function (
                t,
                e,
                n,
                i,
                r
              ) {
                var o = r - e.rootLeft - i - n,
                  s = r - e.rootRight - n,
                  a = o + s;
                return 0 < o || 0 < a ? t + 1 : s < 0 || a < 0 ? t - 1 : -1;
              }),
              (p.prototype.getKeyFromEvent = function (t) {
                return a.has(t.key) ? t.key : c.get(t.keyCode);
              }),
              (p.prototype.isActivationKey = function (t) {
                return t === u.strings.SPACE_KEY || t === u.strings.ENTER_KEY;
              }),
              (p.prototype.indexIsInRange = function (t) {
                return 0 <= t && t < this.adapter.getTabListLength();
              }),
              (p.prototype.isRTL = function () {
                return this.adapter.isRTL();
              }),
              (p.prototype.scrollIntoViewImpl = function (t) {
                var e = this.adapter.getScrollPosition(),
                  n = this.adapter.getOffsetWidth(),
                  i = this.adapter.getTabDimensionsAtIndex(t),
                  r = this.findAdjacentTabIndexClosestToEdge(t, i, e, n);
                if (this.indexIsInRange(r)) {
                  var o = this.calculateScrollIncrement(t, r, e, n);
                  this.adapter.incrementScroll(o);
                }
              }),
              (p.prototype.scrollIntoViewImplRTL = function (t) {
                var e = this.adapter.getScrollPosition(),
                  n = this.adapter.getOffsetWidth(),
                  i = this.adapter.getTabDimensionsAtIndex(t),
                  r = this.adapter.getScrollContentWidth(),
                  o = this.findAdjacentTabIndexClosestToEdgeRTL(t, i, e, n, r);
                if (this.indexIsInRange(o)) {
                  var s = this.calculateScrollIncrementRTL(t, o, e, n, r);
                  this.adapter.incrementScroll(s);
                }
              }),
              p);
          function p(t) {
            var e = l.call(this, o(o({}, p.defaultAdapter), t)) || this;
            return (e.useAutomaticActivation = !1), e;
          }
          (e.MDCTabBarFoundation = d), (e.default = d);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = e.numbers = void 0);
          e.strings = {
            ARROW_LEFT_KEY: "ArrowLeft",
            ARROW_RIGHT_KEY: "ArrowRight",
            END_KEY: "End",
            ENTER_KEY: "Enter",
            HOME_KEY: "Home",
            SPACE_KEY: "Space",
            TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
            TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
            TAB_SELECTOR: ".mdc-tab",
          };
          e.numbers = {
            ARROW_LEFT_KEYCODE: 37,
            ARROW_RIGHT_KEYCODE: 39,
            END_KEYCODE: 35,
            ENTER_KEYCODE: 13,
            EXTRA_SCROLL_AMOUNT: 20,
            HOME_KEYCODE: 36,
            SPACE_KEYCODE: 32,
          };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTextFieldCharacterCounter = void 0);
          var o,
            s = n(1),
            a = n(39),
            c =
              ((o = s.MDCComponent),
              r(u, o),
              (u.attachTo = function (t) {
                return new u(t);
              }),
              Object.defineProperty(u.prototype, "foundationForTextField", {
                get: function () {
                  return this.foundation;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (u.prototype.getDefaultFoundation = function () {
                var e = this,
                  t = {
                    setContent: function (t) {
                      e.root.textContent = t;
                    },
                  };
                return new a.MDCTextFieldCharacterCounterFoundation(t);
              }),
              u);
          function u() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCTextFieldCharacterCounter = c;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cssClasses = e.strings = void 0);
          var i = { ROOT: "mdc-text-field-character-counter" },
            r = { ROOT_SELECTOR: "." + (e.cssClasses = i).ROOT };
          e.strings = r;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            u =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTextFieldFoundation = void 0);
          var s,
            a = n(0),
            c = n(40),
            l = ["mousedown", "touchstart"],
            d = ["click", "keydown"],
            p =
              ((s = a.MDCFoundation),
              r(h, s),
              Object.defineProperty(h, "cssClasses", {
                get: function () {
                  return c.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "strings", {
                get: function () {
                  return c.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "numbers", {
                get: function () {
                  return c.numbers;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "shouldAlwaysFloat", {
                get: function () {
                  var t = this.getNativeInput().type;
                  return 0 <= c.ALWAYS_FLOAT_TYPES.indexOf(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "shouldFloat", {
                get: function () {
                  return (
                    this.shouldAlwaysFloat ||
                    this.isFocused ||
                    !!this.getValue() ||
                    this.isBadInput()
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "shouldShake", {
                get: function () {
                  return (
                    !this.isFocused && !this.isValid() && !!this.getValue()
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h, "defaultAdapter", {
                get: function () {
                  return {
                    addClass: function () {},
                    removeClass: function () {},
                    hasClass: function () {
                      return !0;
                    },
                    setInputAttr: function () {},
                    removeInputAttr: function () {},
                    registerTextFieldInteractionHandler: function () {},
                    deregisterTextFieldInteractionHandler: function () {},
                    registerInputInteractionHandler: function () {},
                    deregisterInputInteractionHandler: function () {},
                    registerValidationAttributeChangeHandler: function () {
                      return new MutationObserver(function () {});
                    },
                    deregisterValidationAttributeChangeHandler: function () {},
                    getNativeInput: function () {
                      return null;
                    },
                    isFocused: function () {
                      return !1;
                    },
                    activateLineRipple: function () {},
                    deactivateLineRipple: function () {},
                    setLineRippleTransformOrigin: function () {},
                    shakeLabel: function () {},
                    floatLabel: function () {},
                    setLabelRequired: function () {},
                    hasLabel: function () {
                      return !1;
                    },
                    getLabelWidth: function () {
                      return 0;
                    },
                    hasOutline: function () {
                      return !1;
                    },
                    notchOutline: function () {},
                    closeOutline: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (h.prototype.init = function () {
                var e, t, n, i;
                this.adapter.hasLabel() &&
                  this.getNativeInput().required &&
                  this.adapter.setLabelRequired(!0),
                  this.adapter.isFocused()
                    ? this.inputFocusHandler()
                    : this.adapter.hasLabel() &&
                      this.shouldFloat &&
                      (this.notchOutline(!0),
                      this.adapter.floatLabel(!0),
                      this.styleFloating(!0)),
                  this.adapter.registerInputInteractionHandler(
                    "focus",
                    this.inputFocusHandler
                  ),
                  this.adapter.registerInputInteractionHandler(
                    "blur",
                    this.inputBlurHandler
                  ),
                  this.adapter.registerInputInteractionHandler(
                    "input",
                    this.inputInputHandler
                  );
                try {
                  for (var r = u(l), o = r.next(); !o.done; o = r.next()) {
                    var s = o.value;
                    this.adapter.registerInputInteractionHandler(
                      s,
                      this.setPointerXOffset
                    );
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (t = r.return) && t.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                try {
                  for (var a = u(d), c = a.next(); !c.done; c = a.next())
                    (s = c.value),
                      this.adapter.registerTextFieldInteractionHandler(
                        s,
                        this.textFieldInteractionHandler
                      );
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    c && !c.done && (i = a.return) && i.call(a);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                (this.validationObserver =
                  this.adapter.registerValidationAttributeChangeHandler(
                    this.validationAttributeChangeHandler
                  )),
                  this.setcharacterCounter(this.getValue().length);
              }),
              (h.prototype.destroy = function () {
                var e, t, n, i;
                this.adapter.deregisterInputInteractionHandler(
                  "focus",
                  this.inputFocusHandler
                ),
                  this.adapter.deregisterInputInteractionHandler(
                    "blur",
                    this.inputBlurHandler
                  ),
                  this.adapter.deregisterInputInteractionHandler(
                    "input",
                    this.inputInputHandler
                  );
                try {
                  for (var r = u(l), o = r.next(); !o.done; o = r.next()) {
                    var s = o.value;
                    this.adapter.deregisterInputInteractionHandler(
                      s,
                      this.setPointerXOffset
                    );
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (t = r.return) && t.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                try {
                  for (var a = u(d), c = a.next(); !c.done; c = a.next())
                    (s = c.value),
                      this.adapter.deregisterTextFieldInteractionHandler(
                        s,
                        this.textFieldInteractionHandler
                      );
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    c && !c.done && (i = a.return) && i.call(a);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                this.adapter.deregisterValidationAttributeChangeHandler(
                  this.validationObserver
                );
              }),
              (h.prototype.handleTextFieldInteraction = function () {
                var t = this.adapter.getNativeInput();
                (t && t.disabled) || (this.receivedUserInput = !0);
              }),
              (h.prototype.handleValidationAttributeChange = function (t) {
                var e = this;
                t.some(function (t) {
                  return (
                    -1 < c.VALIDATION_ATTR_WHITELIST.indexOf(t) &&
                    (e.styleValidity(!0),
                    e.adapter.setLabelRequired(e.getNativeInput().required),
                    !0)
                  );
                }),
                  -1 < t.indexOf("maxlength") &&
                    this.setcharacterCounter(this.getValue().length);
              }),
              (h.prototype.notchOutline = function (t) {
                if (this.adapter.hasOutline() && this.adapter.hasLabel())
                  if (t) {
                    var e =
                      this.adapter.getLabelWidth() * c.numbers.LABEL_SCALE;
                    this.adapter.notchOutline(e);
                  } else this.adapter.closeOutline();
              }),
              (h.prototype.activateFocus = function () {
                (this.isFocused = !0),
                  this.styleFocused(this.isFocused),
                  this.adapter.activateLineRipple(),
                  this.adapter.hasLabel() &&
                    (this.notchOutline(this.shouldFloat),
                    this.adapter.floatLabel(this.shouldFloat),
                    this.styleFloating(this.shouldFloat),
                    this.adapter.shakeLabel(this.shouldShake)),
                  !this.helperText ||
                    (!this.helperText.isPersistent() &&
                      this.helperText.isValidation() &&
                      this.valid) ||
                    this.helperText.showToScreenReader();
              }),
              (h.prototype.setTransformOrigin = function (t) {
                if (!this.isDisabled() && !this.adapter.hasOutline()) {
                  var e = t.touches,
                    n = e ? e[0] : t,
                    i = n.target.getBoundingClientRect(),
                    r = n.clientX - i.left;
                  this.adapter.setLineRippleTransformOrigin(r);
                }
              }),
              (h.prototype.handleInput = function () {
                this.autoCompleteFocus(),
                  this.setcharacterCounter(this.getValue().length);
              }),
              (h.prototype.autoCompleteFocus = function () {
                this.receivedUserInput || this.activateFocus();
              }),
              (h.prototype.deactivateFocus = function () {
                (this.isFocused = !1), this.adapter.deactivateLineRipple();
                var t = this.isValid();
                this.styleValidity(t),
                  this.styleFocused(this.isFocused),
                  this.adapter.hasLabel() &&
                    (this.notchOutline(this.shouldFloat),
                    this.adapter.floatLabel(this.shouldFloat),
                    this.styleFloating(this.shouldFloat),
                    this.adapter.shakeLabel(this.shouldShake)),
                  this.shouldFloat || (this.receivedUserInput = !1);
              }),
              (h.prototype.getValue = function () {
                return this.getNativeInput().value;
              }),
              (h.prototype.setValue = function (t) {
                if (
                  (this.getValue() !== t && (this.getNativeInput().value = t),
                  this.setcharacterCounter(t.length),
                  this.validateOnValueChange)
                ) {
                  var e = this.isValid();
                  this.styleValidity(e);
                }
                this.adapter.hasLabel() &&
                  (this.notchOutline(this.shouldFloat),
                  this.adapter.floatLabel(this.shouldFloat),
                  this.styleFloating(this.shouldFloat),
                  this.validateOnValueChange &&
                    this.adapter.shakeLabel(this.shouldShake));
              }),
              (h.prototype.isValid = function () {
                return this.useNativeValidation
                  ? this.isNativeInputValid()
                  : this.valid;
              }),
              (h.prototype.setValid = function (t) {
                (this.valid = t), this.styleValidity(t);
                var e = !t && !this.isFocused && !!this.getValue();
                this.adapter.hasLabel() && this.adapter.shakeLabel(e);
              }),
              (h.prototype.setValidateOnValueChange = function (t) {
                this.validateOnValueChange = t;
              }),
              (h.prototype.getValidateOnValueChange = function () {
                return this.validateOnValueChange;
              }),
              (h.prototype.setUseNativeValidation = function (t) {
                this.useNativeValidation = t;
              }),
              (h.prototype.isDisabled = function () {
                return this.getNativeInput().disabled;
              }),
              (h.prototype.setDisabled = function (t) {
                (this.getNativeInput().disabled = t), this.styleDisabled(t);
              }),
              (h.prototype.setHelperTextContent = function (t) {
                this.helperText && this.helperText.setContent(t);
              }),
              (h.prototype.setLeadingIconAriaLabel = function (t) {
                this.leadingIcon && this.leadingIcon.setAriaLabel(t);
              }),
              (h.prototype.setLeadingIconContent = function (t) {
                this.leadingIcon && this.leadingIcon.setContent(t);
              }),
              (h.prototype.setTrailingIconAriaLabel = function (t) {
                this.trailingIcon && this.trailingIcon.setAriaLabel(t);
              }),
              (h.prototype.setTrailingIconContent = function (t) {
                this.trailingIcon && this.trailingIcon.setContent(t);
              }),
              (h.prototype.setcharacterCounter = function (t) {
                if (this.characterCounter) {
                  var e = this.getNativeInput().maxLength;
                  if (-1 === e)
                    throw new Error(
                      "MDCTextFieldFoundation: Expected maxlength html property on text input or textarea."
                    );
                  this.characterCounter.setCounterValue(t, e);
                }
              }),
              (h.prototype.isBadInput = function () {
                return this.getNativeInput().validity.badInput || !1;
              }),
              (h.prototype.isNativeInputValid = function () {
                return this.getNativeInput().validity.valid;
              }),
              (h.prototype.styleValidity = function (t) {
                var e = h.cssClasses.INVALID;
                if (
                  (t ? this.adapter.removeClass(e) : this.adapter.addClass(e),
                  this.helperText)
                ) {
                  if (
                    (this.helperText.setValidity(t),
                    !this.helperText.isValidation())
                  )
                    return;
                  var n = this.helperText.isVisible(),
                    i = this.helperText.getId();
                  n && i
                    ? this.adapter.setInputAttr(c.strings.ARIA_DESCRIBEDBY, i)
                    : this.adapter.removeInputAttr(c.strings.ARIA_DESCRIBEDBY);
                }
              }),
              (h.prototype.styleFocused = function (t) {
                var e = h.cssClasses.FOCUSED;
                t ? this.adapter.addClass(e) : this.adapter.removeClass(e);
              }),
              (h.prototype.styleDisabled = function (t) {
                var e = h.cssClasses,
                  n = e.DISABLED,
                  i = e.INVALID;
                t
                  ? (this.adapter.addClass(n), this.adapter.removeClass(i))
                  : this.adapter.removeClass(n),
                  this.leadingIcon && this.leadingIcon.setDisabled(t),
                  this.trailingIcon && this.trailingIcon.setDisabled(t);
              }),
              (h.prototype.styleFloating = function (t) {
                var e = h.cssClasses.LABEL_FLOATING;
                t ? this.adapter.addClass(e) : this.adapter.removeClass(e);
              }),
              (h.prototype.getNativeInput = function () {
                return (
                  (this.adapter ? this.adapter.getNativeInput() : null) || {
                    disabled: !1,
                    maxLength: -1,
                    required: !1,
                    type: "input",
                    validity: { badInput: !1, valid: !0 },
                    value: "",
                  }
                );
              }),
              h);
          function h(t, e) {
            void 0 === e && (e = {});
            var n = s.call(this, o(o({}, h.defaultAdapter), t)) || this;
            return (
              (n.isFocused = !1),
              (n.receivedUserInput = !1),
              (n.valid = !0),
              (n.useNativeValidation = !0),
              (n.validateOnValueChange = !0),
              (n.helperText = e.helperText),
              (n.characterCounter = e.characterCounter),
              (n.leadingIcon = e.leadingIcon),
              (n.trailingIcon = e.trailingIcon),
              (n.inputFocusHandler = function () {
                n.activateFocus();
              }),
              (n.inputBlurHandler = function () {
                n.deactivateFocus();
              }),
              (n.inputInputHandler = function () {
                n.handleInput();
              }),
              (n.setPointerXOffset = function (t) {
                n.setTransformOrigin(t);
              }),
              (n.textFieldInteractionHandler = function () {
                n.handleTextFieldInteraction();
              }),
              (n.validationAttributeChangeHandler = function (t) {
                n.handleValidationAttributeChange(t);
              }),
              n
            );
          }
          (e.MDCTextFieldFoundation = p), (e.default = p);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTextFieldHelperText = void 0);
          var o,
            s = n(1),
            a = n(41),
            c =
              ((o = s.MDCComponent),
              r(u, o),
              (u.attachTo = function (t) {
                return new u(t);
              }),
              Object.defineProperty(u.prototype, "foundationForTextField", {
                get: function () {
                  return this.foundation;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (u.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    getAttr: function (t) {
                      return n.root.getAttribute(t);
                    },
                    setAttr: function (t, e) {
                      return n.root.setAttribute(t, e);
                    },
                    removeAttr: function (t) {
                      return n.root.removeAttribute(t);
                    },
                    setContent: function (t) {
                      n.root.textContent = t;
                    },
                  };
                return new a.MDCTextFieldHelperTextFoundation(t);
              }),
              u);
          function u() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCTextFieldHelperText = c;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cssClasses = e.strings = void 0);
          var i = {
              HELPER_TEXT_PERSISTENT: "mdc-text-field-helper-text--persistent",
              HELPER_TEXT_VALIDATION_MSG:
                "mdc-text-field-helper-text--validation-msg",
              ROOT: "mdc-text-field-helper-text",
            },
            r = {
              ARIA_HIDDEN: "aria-hidden",
              ROLE: "role",
              ROOT_SELECTOR: "." + (e.cssClasses = i).ROOT,
            };
          e.strings = r;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTextFieldIcon = void 0);
          var o,
            s = n(1),
            a = n(115),
            c =
              ((o = s.MDCComponent),
              r(u, o),
              (u.attachTo = function (t) {
                return new u(t);
              }),
              Object.defineProperty(u.prototype, "foundationForTextField", {
                get: function () {
                  return this.foundation;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (u.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    getAttr: function (t) {
                      return n.root.getAttribute(t);
                    },
                    setAttr: function (t, e) {
                      return n.root.setAttribute(t, e);
                    },
                    removeAttr: function (t) {
                      return n.root.removeAttribute(t);
                    },
                    setContent: function (t) {
                      n.root.textContent = t;
                    },
                    registerInteractionHandler: function (t, e) {
                      return n.listen(t, e);
                    },
                    deregisterInteractionHandler: function (t, e) {
                      return n.unlisten(t, e);
                    },
                    notifyIconAction: function () {
                      return n.emit(
                        a.MDCTextFieldIconFoundation.strings.ICON_EVENT,
                        {},
                        !0
                      );
                    },
                  };
                return new a.MDCTextFieldIconFoundation(t);
              }),
              u);
          function u() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCTextFieldIcon = c;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTextFieldIconFoundation = void 0);
          var a,
            c = n(0),
            u = n(116),
            l = ["click", "keydown"],
            d =
              ((a = c.MDCFoundation),
              r(p, a),
              Object.defineProperty(p, "strings", {
                get: function () {
                  return u.strings;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "cssClasses", {
                get: function () {
                  return u.cssClasses;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(p, "defaultAdapter", {
                get: function () {
                  return {
                    getAttr: function () {
                      return null;
                    },
                    setAttr: function () {},
                    removeAttr: function () {},
                    setContent: function () {},
                    registerInteractionHandler: function () {},
                    deregisterInteractionHandler: function () {},
                    notifyIconAction: function () {},
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.init = function () {
                var e, t;
                this.savedTabIndex = this.adapter.getAttr("tabindex");
                try {
                  for (var n = s(l), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    this.adapter.registerInteractionHandler(
                      r,
                      this.interactionHandler
                    );
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (p.prototype.destroy = function () {
                var e, t;
                try {
                  for (var n = s(l), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    this.adapter.deregisterInteractionHandler(
                      r,
                      this.interactionHandler
                    );
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (p.prototype.setDisabled = function (t) {
                this.savedTabIndex &&
                  (t
                    ? (this.adapter.setAttr("tabindex", "-1"),
                      this.adapter.removeAttr("role"))
                    : (this.adapter.setAttr("tabindex", this.savedTabIndex),
                      this.adapter.setAttr("role", u.strings.ICON_ROLE)));
              }),
              (p.prototype.setAriaLabel = function (t) {
                this.adapter.setAttr("aria-label", t);
              }),
              (p.prototype.setContent = function (t) {
                this.adapter.setContent(t);
              }),
              (p.prototype.handleInteraction = function (t) {
                var e = "Enter" === t.key || 13 === t.keyCode;
                ("click" !== t.type && !e) ||
                  (t.preventDefault(), this.adapter.notifyIconAction());
              }),
              p);
          function p(t) {
            var e = a.call(this, o(o({}, p.defaultAdapter), t)) || this;
            return (
              (e.savedTabIndex = null),
              (e.interactionHandler = function (t) {
                e.handleInteraction(t);
              }),
              e
            );
          }
          (e.MDCTextFieldIconFoundation = d), (e.default = d);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cssClasses = e.strings = void 0);
          e.strings = { ICON_EVENT: "MDCTextField:icon", ICON_ROLE: "button" };
          e.cssClasses = { ROOT: "mdc-text-field__icon" };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            T =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTooltipFoundation = void 0);
          var s,
            a = n(23),
            h = n(10),
            c = n(0),
            u = n(6),
            b = n(42),
            l = b.CssClasses.RICH,
            d = b.CssClasses.SHOWN,
            p = b.CssClasses.SHOWING,
            f = b.CssClasses.SHOWING_TRANSITION,
            y = b.CssClasses.HIDE,
            C = b.CssClasses.HIDE_TRANSITION,
            E = b.CssClasses.MULTILINE_TOOLTIP;
          (s = s || {}).POLL_ANCHOR = "poll_anchor";
          var g,
            _ = "undefined" != typeof window,
            m =
              ((g = c.MDCFoundation),
              r(v, g),
              Object.defineProperty(v, "defaultAdapter", {
                get: function () {
                  return {
                    getAttribute: function () {
                      return null;
                    },
                    setAttribute: function () {},
                    removeAttribute: function () {},
                    addClass: function () {},
                    hasClass: function () {
                      return !1;
                    },
                    removeClass: function () {},
                    getComputedStyleProperty: function () {
                      return "";
                    },
                    setStyleProperty: function () {},
                    setSurfaceAnimationStyleProperty: function () {},
                    getViewportWidth: function () {
                      return 0;
                    },
                    getViewportHeight: function () {
                      return 0;
                    },
                    getTooltipSize: function () {
                      return { width: 0, height: 0 };
                    },
                    getAnchorBoundingRect: function () {
                      return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                      };
                    },
                    getParentBoundingRect: function () {
                      return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                      };
                    },
                    getAnchorAttribute: function () {
                      return null;
                    },
                    setAnchorAttribute: function () {
                      return null;
                    },
                    isRTL: function () {
                      return !1;
                    },
                    anchorContainsElement: function () {
                      return !1;
                    },
                    tooltipContainsElement: function () {
                      return !1;
                    },
                    focusAnchorElement: function () {},
                    registerEventHandler: function () {},
                    deregisterEventHandler: function () {},
                    registerAnchorEventHandler: function () {},
                    deregisterAnchorEventHandler: function () {},
                    registerDocumentEventHandler: function () {},
                    deregisterDocumentEventHandler: function () {},
                    registerWindowEventHandler: function () {},
                    deregisterWindowEventHandler: function () {},
                    notifyHidden: function () {},
                    getTooltipCaretBoundingRect: function () {
                      return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                      };
                    },
                    setTooltipCaretStyle: function () {},
                    clearTooltipCaretStyles: function () {},
                    getActiveElement: function () {
                      return null;
                    },
                  };
                },
                enumerable: !1,
                configurable: !0,
              }),
              (v.prototype.init = function () {
                (this.richTooltip = this.adapter.hasClass(l)),
                  (this.persistentTooltip =
                    "true" ===
                    this.adapter.getAttribute(b.attributes.PERSISTENT)),
                  (this.interactiveTooltip =
                    !!this.adapter.getAnchorAttribute(
                      b.attributes.ARIA_EXPANDED
                    ) &&
                    "dialog" ===
                      this.adapter.getAnchorAttribute(
                        b.attributes.ARIA_HASPOPUP
                      )),
                  (this.hasCaret =
                    this.richTooltip &&
                    "true" ===
                      this.adapter.getAttribute(b.attributes.HAS_CARET));
              }),
              (v.prototype.isShown = function () {
                return this.tooltipShown;
              }),
              (v.prototype.isRich = function () {
                return this.richTooltip;
              }),
              (v.prototype.isPersistent = function () {
                return this.persistentTooltip;
              }),
              (v.prototype.handleAnchorMouseEnter = function () {
                var t = this;
                this.tooltipShown
                  ? this.show()
                  : (this.clearHideTimeout(),
                    (this.showTimeout = setTimeout(function () {
                      t.show();
                    }, this.showDelayMs)));
              }),
              (v.prototype.handleAnchorTouchstart = function () {
                var t = this;
                (this.showTimeout = setTimeout(function () {
                  t.show();
                }, this.showDelayMs)),
                  this.adapter.registerWindowEventHandler(
                    "contextmenu",
                    this.preventContextMenuOnLongTouch
                  );
              }),
              (v.prototype.preventContextMenuOnLongTouch = function (t) {
                t.preventDefault();
              }),
              (v.prototype.handleAnchorTouchend = function () {
                this.clearShowTimeout(),
                  this.isShown() ||
                    this.adapter.deregisterWindowEventHandler(
                      "contextmenu",
                      this.preventContextMenuOnLongTouch
                    );
              }),
              (v.prototype.handleAnchorFocus = function (t) {
                var e = this,
                  n = t.relatedTarget;
                (n instanceof HTMLElement &&
                  this.adapter.tooltipContainsElement(n)) ||
                  (this.showTimeout = setTimeout(function () {
                    e.show();
                  }, this.showDelayMs));
              }),
              (v.prototype.handleAnchorMouseLeave = function () {
                var t = this;
                this.clearShowTimeout(),
                  (this.hideTimeout = setTimeout(function () {
                    t.hide();
                  }, this.hideDelayMs));
              }),
              (v.prototype.handleAnchorClick = function () {
                this.tooltipShown ? this.hide() : this.show();
              }),
              (v.prototype.handleDocumentClick = function (t) {
                var e =
                  t.target instanceof HTMLElement &&
                  (this.adapter.anchorContainsElement(t.target) ||
                    this.adapter.tooltipContainsElement(t.target));
                (this.richTooltip && this.persistentTooltip && e) ||
                  this.hide();
              }),
              (v.prototype.handleKeydown = function (t) {
                if (u.normalizeKey(t) === u.KEY.ESCAPE) {
                  var e = this.adapter.getActiveElement();
                  e instanceof HTMLElement &&
                    this.adapter.tooltipContainsElement(e) &&
                    this.adapter.focusAnchorElement(),
                    this.hide();
                }
              }),
              (v.prototype.handleAnchorBlur = function (t) {
                if (this.richTooltip) {
                  if (
                    t.relatedTarget instanceof HTMLElement &&
                    this.adapter.tooltipContainsElement(t.relatedTarget)
                  )
                    return;
                  if (null === t.relatedTarget && this.interactiveTooltip)
                    return;
                }
                this.hide();
              }),
              (v.prototype.handleTooltipMouseEnter = function () {
                this.show();
              }),
              (v.prototype.handleTooltipMouseLeave = function () {
                var t = this;
                this.clearShowTimeout(),
                  (this.hideTimeout = setTimeout(function () {
                    t.hide();
                  }, this.hideDelayMs));
              }),
              (v.prototype.handleRichTooltipFocusOut = function (t) {
                (t.relatedTarget instanceof HTMLElement &&
                  (this.adapter.anchorContainsElement(t.relatedTarget) ||
                    this.adapter.tooltipContainsElement(t.relatedTarget))) ||
                  (null === t.relatedTarget && this.interactiveTooltip) ||
                  this.hide();
              }),
              (v.prototype.handleWindowScrollEvent = function () {
                this.persistentTooltip
                  ? this.handleWindowChangeEvent()
                  : this.hide();
              }),
              (v.prototype.handleWindowChangeEvent = function () {
                var t = this;
                this.animFrame.request(s.POLL_ANCHOR, function () {
                  t.repositionTooltipOnAnchorMove();
                });
              }),
              (v.prototype.show = function () {
                var e,
                  t,
                  n = this;
                if (
                  (this.clearHideTimeout(),
                  this.clearShowTimeout(),
                  !this.tooltipShown)
                ) {
                  (this.tooltipShown = !0),
                    this.adapter.removeAttribute("aria-hidden"),
                    this.richTooltip &&
                      (this.interactiveTooltip &&
                        this.adapter.setAnchorAttribute(
                          "aria-expanded",
                          "true"
                        ),
                      this.adapter.registerEventHandler(
                        "focusout",
                        this.richTooltipFocusOutHandler
                      )),
                    this.persistentTooltip ||
                      (this.adapter.registerEventHandler(
                        "mouseenter",
                        this.tooltipMouseEnterHandler
                      ),
                      this.adapter.registerEventHandler(
                        "mouseleave",
                        this.tooltipMouseLeaveHandler
                      )),
                    this.adapter.removeClass(y),
                    this.adapter.addClass(p),
                    this.isTooltipMultiline() &&
                      !this.richTooltip &&
                      this.adapter.addClass(E),
                    (this.anchorRect = this.adapter.getAnchorBoundingRect()),
                    (this.parentRect = this.adapter.getParentBoundingRect()),
                    this.richTooltip
                      ? this.positionRichTooltip()
                      : this.positionPlainTooltip(),
                    this.adapter.registerAnchorEventHandler(
                      "blur",
                      this.anchorBlurHandler
                    ),
                    this.adapter.registerDocumentEventHandler(
                      "click",
                      this.documentClickHandler
                    ),
                    this.adapter.registerDocumentEventHandler(
                      "keydown",
                      this.documentKeydownHandler
                    ),
                    this.adapter.registerWindowEventHandler(
                      "scroll",
                      this.windowScrollHandler
                    ),
                    this.adapter.registerWindowEventHandler(
                      "resize",
                      this.windowResizeHandler
                    );
                  try {
                    for (
                      var i = T(this.addAncestorScrollEventListeners),
                        r = i.next();
                      !r.done;
                      r = i.next()
                    )
                      (0, r.value)();
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      r && !r.done && (t = i.return) && t.call(i);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  this.frameId = requestAnimationFrame(function () {
                    n.clearAllAnimationClasses(),
                      n.adapter.addClass(d),
                      n.adapter.addClass(f);
                  });
                }
              }),
              (v.prototype.hide = function () {
                var e, t;
                if (
                  (this.clearHideTimeout(),
                  this.clearShowTimeout(),
                  this.tooltipShown)
                ) {
                  this.frameId && cancelAnimationFrame(this.frameId),
                    (this.tooltipShown = !1),
                    this.adapter.setAttribute("aria-hidden", "true"),
                    this.adapter.deregisterEventHandler(
                      "focusout",
                      this.richTooltipFocusOutHandler
                    ),
                    this.richTooltip &&
                      this.interactiveTooltip &&
                      this.adapter.setAnchorAttribute("aria-expanded", "false"),
                    this.persistentTooltip ||
                      (this.adapter.deregisterEventHandler(
                        "mouseenter",
                        this.tooltipMouseEnterHandler
                      ),
                      this.adapter.deregisterEventHandler(
                        "mouseleave",
                        this.tooltipMouseLeaveHandler
                      )),
                    this.clearAllAnimationClasses(),
                    this.adapter.addClass(y),
                    this.adapter.addClass(C),
                    this.adapter.removeClass(d),
                    this.adapter.deregisterAnchorEventHandler(
                      "blur",
                      this.anchorBlurHandler
                    ),
                    this.adapter.deregisterDocumentEventHandler(
                      "click",
                      this.documentClickHandler
                    ),
                    this.adapter.deregisterDocumentEventHandler(
                      "keydown",
                      this.documentKeydownHandler
                    ),
                    this.adapter.deregisterWindowEventHandler(
                      "scroll",
                      this.windowScrollHandler
                    ),
                    this.adapter.deregisterWindowEventHandler(
                      "resize",
                      this.windowResizeHandler
                    ),
                    this.adapter.deregisterWindowEventHandler(
                      "contextmenu",
                      this.preventContextMenuOnLongTouch
                    );
                  try {
                    for (
                      var n = T(this.removeAncestorScrollEventListeners),
                        i = n.next();
                      !i.done;
                      i = n.next()
                    )
                      (0, i.value)();
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      i && !i.done && (t = n.return) && t.call(n);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                }
              }),
              (v.prototype.handleTransitionEnd = function () {
                var t = this.adapter.hasClass(y);
                this.adapter.removeClass(p),
                  this.adapter.removeClass(f),
                  this.adapter.removeClass(y),
                  this.adapter.removeClass(C),
                  t && null === this.showTimeout && this.adapter.notifyHidden();
              }),
              (v.prototype.clearAllAnimationClasses = function () {
                this.adapter.removeClass(f), this.adapter.removeClass(C);
              }),
              (v.prototype.setTooltipPosition = function (t) {
                var e = t.xPos,
                  n = t.yPos,
                  i = t.withCaretPos;
                this.hasCaret && i
                  ? (this.tooltipPositionWithCaret = i)
                  : (e && (this.xTooltipPos = e), n && (this.yTooltipPos = n));
              }),
              (v.prototype.setAnchorBoundaryType = function (t) {
                t === b.AnchorBoundaryType.UNBOUNDED
                  ? (this.anchorGap = b.numbers.UNBOUNDED_ANCHOR_GAP)
                  : (this.anchorGap = b.numbers.BOUNDED_ANCHOR_GAP);
              }),
              (v.prototype.setShowDelay = function (t) {
                this.showDelayMs = t;
              }),
              (v.prototype.setHideDelay = function (t) {
                this.hideDelayMs = t;
              }),
              (v.prototype.isTooltipMultiline = function () {
                var t = this.adapter.getTooltipSize();
                return (
                  t.height > b.numbers.MIN_HEIGHT &&
                  t.width >= b.numbers.MAX_WIDTH
                );
              }),
              (v.prototype.positionPlainTooltip = function () {
                var t = this.calculateTooltipStyles(this.anchorRect),
                  e = t.top,
                  n = t.yTransformOrigin,
                  i = t.left,
                  r = t.xTransformOrigin,
                  o = _
                    ? h.getCorrectPropertyName(window, "transform")
                    : "transform";
                this.adapter.setSurfaceAnimationStyleProperty(
                  o + "-origin",
                  r + " " + n
                ),
                  this.adapter.setStyleProperty("top", e + "px"),
                  this.adapter.setStyleProperty("left", i + "px");
              }),
              (v.prototype.positionRichTooltip = function () {
                var t,
                  e,
                  n,
                  i,
                  r = this.adapter.getComputedStyleProperty("width");
                this.adapter.setStyleProperty("width", r);
                var o = this.hasCaret
                    ? this.calculateTooltipWithCaretStyles(this.anchorRect)
                    : this.calculateTooltipStyles(this.anchorRect),
                  s = o.top,
                  a = o.yTransformOrigin,
                  c = o.left,
                  u = o.xTransformOrigin,
                  l = _
                    ? h.getCorrectPropertyName(window, "transform")
                    : "transform";
                this.adapter.setSurfaceAnimationStyleProperty(
                  l + "-origin",
                  u + " " + a
                );
                var d =
                    c -
                    (null !==
                      (e =
                        null === (t = this.parentRect) || void 0 === t
                          ? void 0
                          : t.left) && void 0 !== e
                      ? e
                      : 0),
                  p =
                    s -
                    (null !==
                      (i =
                        null === (n = this.parentRect) || void 0 === n
                          ? void 0
                          : n.top) && void 0 !== i
                      ? i
                      : 0);
                this.adapter.setStyleProperty("top", p + "px"),
                  this.adapter.setStyleProperty("left", d + "px");
              }),
              (v.prototype.calculateTooltipStyles = function (t) {
                if (!t) return { top: 0, left: 0 };
                var e = this.adapter.getTooltipSize(),
                  n = this.calculateYTooltipDistance(t, e.height),
                  i = this.calculateXTooltipDistance(t, e.width);
                return {
                  top: n.distance,
                  yTransformOrigin: n.yTransformOrigin,
                  left: i.distance,
                  xTransformOrigin: i.xTransformOrigin,
                };
              }),
              (v.prototype.calculateXTooltipDistance = function (t, e) {
                var n,
                  i,
                  r,
                  o,
                  s,
                  a = !this.adapter.isRTL();
                s = this.richTooltip
                  ? ((n = a ? t.left - e : t.right),
                    (i = a ? t.right : t.left - e),
                    (o = a ? b.strings.RIGHT : b.strings.LEFT),
                    a ? b.strings.LEFT : b.strings.RIGHT)
                  : ((n = a ? t.left : t.right - e),
                    (i = a ? t.right - e : t.left),
                    (r = t.left + (t.width - e) / 2),
                    (o = a ? b.strings.LEFT : b.strings.RIGHT),
                    a ? b.strings.RIGHT : b.strings.LEFT);
                var c = this.richTooltip
                  ? this.determineValidPositionOptions(n, i)
                  : this.determineValidPositionOptions(r, n, i);
                if (this.xTooltipPos === b.XPosition.START && c.has(n))
                  return { distance: n, xTransformOrigin: o };
                if (this.xTooltipPos === b.XPosition.END && c.has(i))
                  return { distance: i, xTransformOrigin: s };
                if (this.xTooltipPos === b.XPosition.CENTER && c.has(r))
                  return { distance: r, xTransformOrigin: b.strings.CENTER };
                var u = (
                  this.richTooltip
                    ? [
                        { distance: i, xTransformOrigin: s },
                        { distance: n, xTransformOrigin: o },
                      ]
                    : [
                        { distance: r, xTransformOrigin: b.strings.CENTER },
                        { distance: n, xTransformOrigin: o },
                        { distance: i, xTransformOrigin: s },
                      ]
                ).find(function (t) {
                  var e = t.distance;
                  return c.has(e);
                });
                return (
                  u ||
                  (t.left < 0
                    ? {
                        distance: this.minViewportTooltipThreshold,
                        xTransformOrigin: b.strings.LEFT,
                      }
                    : {
                        distance:
                          this.adapter.getViewportWidth() -
                          (e + this.minViewportTooltipThreshold),
                        xTransformOrigin: b.strings.RIGHT,
                      })
                );
              }),
              (v.prototype.determineValidPositionOptions = function () {
                for (var e, t, n = [], i = 0; i < arguments.length; i++)
                  n[i] = arguments[i];
                var r = new Set(),
                  o = new Set();
                try {
                  for (var s = T(n), a = s.next(); !a.done; a = s.next()) {
                    var c = a.value;
                    this.positionHonorsViewportThreshold(c)
                      ? r.add(c)
                      : this.positionDoesntCollideWithViewport(c) && o.add(c);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    a && !a.done && (t = s.return) && t.call(s);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return r.size ? r : o;
              }),
              (v.prototype.positionHonorsViewportThreshold = function (t) {
                var e = this.adapter.getViewportWidth();
                return (
                  t + this.adapter.getTooltipSize().width <=
                    e - this.minViewportTooltipThreshold &&
                  t >= this.minViewportTooltipThreshold
                );
              }),
              (v.prototype.positionDoesntCollideWithViewport = function (t) {
                var e = this.adapter.getViewportWidth();
                return t + this.adapter.getTooltipSize().width <= e && 0 <= t;
              }),
              (v.prototype.calculateYTooltipDistance = function (t, e) {
                var n = t.bottom + this.anchorGap,
                  i = t.top - (this.anchorGap + e),
                  r = this.determineValidYPositionOptions(i, n);
                return this.yTooltipPos === b.YPosition.ABOVE && r.has(i)
                  ? { distance: i, yTransformOrigin: b.strings.BOTTOM }
                  : this.yTooltipPos === b.YPosition.BELOW && r.has(n)
                  ? { distance: n, yTransformOrigin: b.strings.TOP }
                  : r.has(n)
                  ? { distance: n, yTransformOrigin: b.strings.TOP }
                  : r.has(i)
                  ? { distance: i, yTransformOrigin: b.strings.BOTTOM }
                  : { distance: n, yTransformOrigin: b.strings.TOP };
              }),
              (v.prototype.determineValidYPositionOptions = function (t, e) {
                var n = new Set(),
                  i = new Set();
                return (
                  this.yPositionHonorsViewportThreshold(t)
                    ? n.add(t)
                    : this.yPositionDoesntCollideWithViewport(t) && i.add(t),
                  this.yPositionHonorsViewportThreshold(e)
                    ? n.add(e)
                    : this.yPositionDoesntCollideWithViewport(e) && i.add(e),
                  n.size ? n : i
                );
              }),
              (v.prototype.yPositionHonorsViewportThreshold = function (t) {
                var e = this.adapter.getViewportHeight();
                return (
                  t +
                    this.adapter.getTooltipSize().height +
                    this.minViewportTooltipThreshold <=
                    e && t >= this.minViewportTooltipThreshold
                );
              }),
              (v.prototype.yPositionDoesntCollideWithViewport = function (t) {
                var e = this.adapter.getViewportHeight();
                return t + this.adapter.getTooltipSize().height <= e && 0 <= t;
              }),
              (v.prototype.calculateTooltipWithCaretStyles = function (t) {
                this.adapter.clearTooltipCaretStyles();
                var e = this.adapter.getTooltipCaretBoundingRect();
                if (!t || !e)
                  return {
                    position: b.PositionWithCaret.DETECTED,
                    top: 0,
                    left: 0,
                  };
                var n = e.width / b.numbers.ANIMATION_SCALE,
                  i = e.height / b.numbers.ANIMATION_SCALE / 2,
                  r = this.adapter.getTooltipSize(),
                  o = this.calculateYWithCaretDistanceOptions(t, r.height, {
                    caretWidth: n,
                    caretHeight: i,
                  }),
                  s = this.calculateXWithCaretDistanceOptions(t, r.width, {
                    caretWidth: n,
                    caretHeight: i,
                  }),
                  a = this.validateTooltipWithCaretDistances(o, s);
                a.size < 1 &&
                  (a = this.generateBackupPositionOption(t, r, {
                    caretWidth: n,
                    caretHeight: i,
                  }));
                var c = this.determineTooltipWithCaretDistance(a),
                  u = c.position,
                  l = c.xDistance,
                  d = c.yDistance,
                  p = this.setCaretPositionStyles(u, {
                    caretWidth: n,
                    caretHeight: i,
                  });
                return {
                  yTransformOrigin: p.yTransformOrigin,
                  xTransformOrigin: p.xTransformOrigin,
                  top: d,
                  left: l,
                };
              }),
              (v.prototype.calculateXWithCaretDistanceOptions = function (
                t,
                e,
                n
              ) {
                var i = n.caretWidth,
                  r = n.caretHeight,
                  o = !this.adapter.isRTL(),
                  s = t.left + t.width / 2,
                  a = t.left - (e + this.anchorGap + r),
                  c = t.right + this.anchorGap + r,
                  u = o ? a : c,
                  l = o ? c : a,
                  d = s - (b.numbers.CARET_INDENTATION + i / 2),
                  p = s - (e - b.numbers.CARET_INDENTATION - i / 2),
                  h = o ? d : p,
                  f = o ? p : d,
                  y = s - e / 2;
                return new Map([
                  [b.XPositionWithCaret.START, h],
                  [b.XPositionWithCaret.CENTER, y],
                  [b.XPositionWithCaret.END, f],
                  [b.XPositionWithCaret.SIDE_END, l],
                  [b.XPositionWithCaret.SIDE_START, u],
                ]);
              }),
              (v.prototype.calculateYWithCaretDistanceOptions = function (
                t,
                e,
                n
              ) {
                var i = n.caretWidth,
                  r = n.caretHeight,
                  o = t.top + t.height / 2,
                  s = t.bottom + this.anchorGap + r,
                  a = t.top - (this.anchorGap + e + r),
                  c = o - (b.numbers.CARET_INDENTATION + i / 2),
                  u = o - e / 2,
                  l = o - (e - b.numbers.CARET_INDENTATION - i / 2);
                return new Map([
                  [b.YPositionWithCaret.ABOVE, a],
                  [b.YPositionWithCaret.BELOW, s],
                  [b.YPositionWithCaret.SIDE_TOP, c],
                  [b.YPositionWithCaret.SIDE_CENTER, u],
                  [b.YPositionWithCaret.SIDE_BOTTOM, l],
                ]);
              }),
              (v.prototype.repositionTooltipOnAnchorMove = function () {
                var t = this.adapter.getAnchorBoundingRect();
                t &&
                  this.anchorRect &&
                  ((t.top === this.anchorRect.top &&
                    t.left === this.anchorRect.left &&
                    t.height === this.anchorRect.height &&
                    t.width === this.anchorRect.width) ||
                    ((this.anchorRect = t),
                    (this.parentRect = this.adapter.getParentBoundingRect()),
                    this.richTooltip
                      ? this.positionRichTooltip()
                      : this.positionPlainTooltip()));
              }),
              (v.prototype.validateTooltipWithCaretDistances = function (t, e) {
                var n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  c = new Map(),
                  u = new Map(),
                  l = new Map([
                    [
                      b.YPositionWithCaret.ABOVE,
                      [
                        b.XPositionWithCaret.START,
                        b.XPositionWithCaret.CENTER,
                        b.XPositionWithCaret.END,
                      ],
                    ],
                    [
                      b.YPositionWithCaret.BELOW,
                      [
                        b.XPositionWithCaret.START,
                        b.XPositionWithCaret.CENTER,
                        b.XPositionWithCaret.END,
                      ],
                    ],
                    [
                      b.YPositionWithCaret.SIDE_TOP,
                      [
                        b.XPositionWithCaret.SIDE_START,
                        b.XPositionWithCaret.SIDE_END,
                      ],
                    ],
                    [
                      b.YPositionWithCaret.SIDE_CENTER,
                      [
                        b.XPositionWithCaret.SIDE_START,
                        b.XPositionWithCaret.SIDE_END,
                      ],
                    ],
                    [
                      b.YPositionWithCaret.SIDE_BOTTOM,
                      [
                        b.XPositionWithCaret.SIDE_START,
                        b.XPositionWithCaret.SIDE_END,
                      ],
                    ],
                  ]);
                try {
                  for (
                    var d = T(l.keys()), p = d.next();
                    !p.done;
                    p = d.next()
                  ) {
                    var h = p.value,
                      f = t.get(h);
                    if (this.yPositionHonorsViewportThreshold(f))
                      try {
                        for (
                          var y = ((r = void 0), T(l.get(h))), C = y.next();
                          !C.done;
                          C = y.next()
                        ) {
                          var E = C.value,
                            g = e.get(E);
                          if (this.positionHonorsViewportThreshold(g)) {
                            var _ = this.caretPositionOptionsMapping(E, h);
                            c.set(_, { xDistance: g, yDistance: f });
                          }
                        }
                      } catch (t) {
                        r = { error: t };
                      } finally {
                        try {
                          C && !C.done && (o = y.return) && o.call(y);
                        } finally {
                          if (r) throw r.error;
                        }
                      }
                    if (this.yPositionDoesntCollideWithViewport(f))
                      try {
                        for (
                          var m = ((s = void 0), T(l.get(h))), v = m.next();
                          !v.done;
                          v = m.next()
                        )
                          (E = v.value),
                            (g = e.get(E)),
                            this.positionDoesntCollideWithViewport(g) &&
                              ((_ = this.caretPositionOptionsMapping(E, h)),
                              u.set(_, { xDistance: g, yDistance: f }));
                      } catch (t) {
                        s = { error: t };
                      } finally {
                        try {
                          v && !v.done && (a = m.return) && a.call(m);
                        } finally {
                          if (s) throw s.error;
                        }
                      }
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    p && !p.done && (i = d.return) && i.call(d);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return c.size ? c : u;
              }),
              (v.prototype.generateBackupPositionOption = function (t, e, n) {
                var i,
                  r,
                  o,
                  s,
                  a = !this.adapter.isRTL();
                (r =
                  t.left < 0
                    ? ((i = this.minViewportTooltipThreshold + n.caretHeight),
                      a ? b.XPositionWithCaret.END : b.XPositionWithCaret.START)
                    : ((i =
                        this.adapter.getViewportWidth() -
                        (e.width +
                          this.minViewportTooltipThreshold +
                          n.caretHeight)),
                      a
                        ? b.XPositionWithCaret.START
                        : b.XPositionWithCaret.END)),
                  (s =
                    t.top < 0
                      ? ((o = this.minViewportTooltipThreshold + n.caretHeight),
                        b.YPositionWithCaret.BELOW)
                      : ((o =
                          this.adapter.getViewportHeight() -
                          (e.height +
                            this.minViewportTooltipThreshold +
                            n.caretHeight)),
                        b.YPositionWithCaret.ABOVE));
                var c = this.caretPositionOptionsMapping(r, s);
                return new Map([[c, { xDistance: i, yDistance: o }]]);
              }),
              (v.prototype.determineTooltipWithCaretDistance = function (e) {
                if (e.has(this.tooltipPositionWithCaret)) {
                  var t = e.get(this.tooltipPositionWithCaret);
                  return {
                    position: this.tooltipPositionWithCaret,
                    xDistance: t.xDistance,
                    yDistance: t.yDistance,
                  };
                }
                var n = [
                    b.PositionWithCaret.ABOVE_START,
                    b.PositionWithCaret.ABOVE_CENTER,
                    b.PositionWithCaret.ABOVE_END,
                    b.PositionWithCaret.TOP_SIDE_START,
                    b.PositionWithCaret.CENTER_SIDE_START,
                    b.PositionWithCaret.BOTTOM_SIDE_START,
                    b.PositionWithCaret.TOP_SIDE_END,
                    b.PositionWithCaret.CENTER_SIDE_END,
                    b.PositionWithCaret.BOTTOM_SIDE_END,
                    b.PositionWithCaret.BELOW_START,
                    b.PositionWithCaret.BELOW_CENTER,
                    b.PositionWithCaret.BELOW_END,
                  ].find(function (t) {
                    return e.has(t);
                  }),
                  i = e.get(n);
                return {
                  position: n,
                  xDistance: i.xDistance,
                  yDistance: i.yDistance,
                };
              }),
              (v.prototype.caretPositionOptionsMapping = function (t, e) {
                switch (e) {
                  case b.YPositionWithCaret.ABOVE:
                    if (t === b.XPositionWithCaret.START)
                      return b.PositionWithCaret.ABOVE_START;
                    if (t === b.XPositionWithCaret.CENTER)
                      return b.PositionWithCaret.ABOVE_CENTER;
                    if (t === b.XPositionWithCaret.END)
                      return b.PositionWithCaret.ABOVE_END;
                    break;
                  case b.YPositionWithCaret.BELOW:
                    if (t === b.XPositionWithCaret.START)
                      return b.PositionWithCaret.BELOW_START;
                    if (t === b.XPositionWithCaret.CENTER)
                      return b.PositionWithCaret.BELOW_CENTER;
                    if (t === b.XPositionWithCaret.END)
                      return b.PositionWithCaret.BELOW_END;
                    break;
                  case b.YPositionWithCaret.SIDE_TOP:
                    if (t === b.XPositionWithCaret.SIDE_START)
                      return b.PositionWithCaret.TOP_SIDE_START;
                    if (t === b.XPositionWithCaret.SIDE_END)
                      return b.PositionWithCaret.TOP_SIDE_END;
                    break;
                  case b.YPositionWithCaret.SIDE_CENTER:
                    if (t === b.XPositionWithCaret.SIDE_START)
                      return b.PositionWithCaret.CENTER_SIDE_START;
                    if (t === b.XPositionWithCaret.SIDE_END)
                      return b.PositionWithCaret.CENTER_SIDE_END;
                    break;
                  case b.YPositionWithCaret.SIDE_BOTTOM:
                    if (t === b.XPositionWithCaret.SIDE_START)
                      return b.PositionWithCaret.BOTTOM_SIDE_START;
                    if (t === b.XPositionWithCaret.SIDE_END)
                      return b.PositionWithCaret.BOTTOM_SIDE_END;
                }
                throw new Error(
                  "MDCTooltipFoundation: Invalid caret position of " +
                    t +
                    ", " +
                    e
                );
              }),
              (v.prototype.setCaretPositionStyles = function (t, e) {
                var n,
                  i,
                  r = this.calculateCaretPositionOnTooltip(t, e);
                if (!r) return { yTransformOrigin: 0, xTransformOrigin: 0 };
                this.adapter.clearTooltipCaretStyles(),
                  this.adapter.setTooltipCaretStyle(r.yAlignment, r.yAxisPx),
                  this.adapter.setTooltipCaretStyle(r.xAlignment, r.xAxisPx);
                var o = r.skew * (Math.PI / 180),
                  s = Math.cos(o);
                this.adapter.setTooltipCaretStyle(
                  "transform",
                  "rotate(" +
                    r.rotation +
                    "deg) skewY(" +
                    r.skew +
                    "deg) scaleX(" +
                    s +
                    ")"
                ),
                  this.adapter.setTooltipCaretStyle(
                    "transform-origin",
                    r.xAlignment + " " + r.yAlignment
                  );
                try {
                  for (
                    var a = T(r.caretCorners), c = a.next();
                    !c.done;
                    c = a.next()
                  ) {
                    var u = c.value;
                    this.adapter.setTooltipCaretStyle(u, "0");
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    c && !c.done && (i = a.return) && i.call(a);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return {
                  yTransformOrigin: r.yTransformOrigin,
                  xTransformOrigin: r.xTransformOrigin,
                };
              }),
              (v.prototype.calculateCaretPositionOnTooltip = function (t, e) {
                var n = !this.adapter.isRTL(),
                  i = this.adapter.getComputedStyleProperty("width"),
                  r = this.adapter.getComputedStyleProperty("height");
                if (i && r && e) {
                  var o = "calc((" + i + " - " + e.caretWidth + "px) / 2)",
                    s = "calc((" + r + " - " + e.caretWidth + "px) / 2)",
                    a = b.numbers.CARET_INDENTATION + "px",
                    c = "calc(" + i + " - " + a + ")",
                    u = "calc(" + r + " - " + a + ")",
                    l = Math.abs(55),
                    d = [
                      "border-bottom-right-radius",
                      "border-top-left-radius",
                    ],
                    p = [
                      "border-bottom-left-radius",
                      "border-top-right-radius",
                    ];
                  switch (t) {
                    case b.PositionWithCaret.BELOW_CENTER:
                      return {
                        yAlignment: b.strings.TOP,
                        xAlignment: b.strings.LEFT,
                        yAxisPx: "0",
                        xAxisPx: o,
                        rotation: -35,
                        skew: -20,
                        xTransformOrigin: o,
                        yTransformOrigin: "0",
                        caretCorners: d,
                      };
                    case b.PositionWithCaret.BELOW_END:
                      return {
                        yAlignment: b.strings.TOP,
                        xAlignment: n ? b.strings.RIGHT : b.strings.LEFT,
                        yAxisPx: "0",
                        xAxisPx: a,
                        rotation: n ? 35 : -35,
                        skew: n ? 20 : -20,
                        xTransformOrigin: n ? c : a,
                        yTransformOrigin: "0",
                        caretCorners: n ? p : d,
                      };
                    case b.PositionWithCaret.BELOW_START:
                      return {
                        yAlignment: b.strings.TOP,
                        xAlignment: n ? b.strings.LEFT : b.strings.RIGHT,
                        yAxisPx: "0",
                        xAxisPx: a,
                        rotation: n ? -35 : 35,
                        skew: n ? -20 : 20,
                        xTransformOrigin: n ? a : c,
                        yTransformOrigin: "0",
                        caretCorners: n ? d : p,
                      };
                    case b.PositionWithCaret.TOP_SIDE_END:
                      return {
                        yAlignment: b.strings.TOP,
                        xAlignment: n ? b.strings.LEFT : b.strings.RIGHT,
                        yAxisPx: a,
                        xAxisPx: "0",
                        rotation: n ? l : -1 * l,
                        skew: n ? -20 : 20,
                        xTransformOrigin: n ? "0" : i,
                        yTransformOrigin: a,
                        caretCorners: n ? d : p,
                      };
                    case b.PositionWithCaret.CENTER_SIDE_END:
                      return {
                        yAlignment: b.strings.TOP,
                        xAlignment: n ? b.strings.LEFT : b.strings.RIGHT,
                        yAxisPx: s,
                        xAxisPx: "0",
                        rotation: n ? l : -1 * l,
                        skew: n ? -20 : 20,
                        xTransformOrigin: n ? "0" : i,
                        yTransformOrigin: s,
                        caretCorners: n ? d : p,
                      };
                    case b.PositionWithCaret.BOTTOM_SIDE_END:
                      return {
                        yAlignment: b.strings.BOTTOM,
                        xAlignment: n ? b.strings.LEFT : b.strings.RIGHT,
                        yAxisPx: a,
                        xAxisPx: "0",
                        rotation: n ? -1 * l : l,
                        skew: n ? 20 : -20,
                        xTransformOrigin: n ? "0" : i,
                        yTransformOrigin: u,
                        caretCorners: n ? p : d,
                      };
                    case b.PositionWithCaret.TOP_SIDE_START:
                      return {
                        yAlignment: b.strings.TOP,
                        xAlignment: n ? b.strings.RIGHT : b.strings.LEFT,
                        yAxisPx: a,
                        xAxisPx: "0",
                        rotation: n ? -1 * l : l,
                        skew: n ? 20 : -20,
                        xTransformOrigin: n ? i : "0",
                        yTransformOrigin: a,
                        caretCorners: n ? p : d,
                      };
                    case b.PositionWithCaret.CENTER_SIDE_START:
                      return {
                        yAlignment: b.strings.TOP,
                        xAlignment: n ? b.strings.RIGHT : b.strings.LEFT,
                        yAxisPx: s,
                        xAxisPx: "0",
                        rotation: n ? -1 * l : l,
                        skew: n ? 20 : -20,
                        xTransformOrigin: n ? i : "0",
                        yTransformOrigin: s,
                        caretCorners: n ? p : d,
                      };
                    case b.PositionWithCaret.BOTTOM_SIDE_START:
                      return {
                        yAlignment: b.strings.BOTTOM,
                        xAlignment: n ? b.strings.RIGHT : b.strings.LEFT,
                        yAxisPx: a,
                        xAxisPx: "0",
                        rotation: n ? l : -1 * l,
                        skew: n ? -20 : 20,
                        xTransformOrigin: n ? i : "0",
                        yTransformOrigin: u,
                        caretCorners: n ? d : p,
                      };
                    case b.PositionWithCaret.ABOVE_CENTER:
                      return {
                        yAlignment: b.strings.BOTTOM,
                        xAlignment: b.strings.LEFT,
                        yAxisPx: "0",
                        xAxisPx: o,
                        rotation: 35,
                        skew: 20,
                        xTransformOrigin: o,
                        yTransformOrigin: r,
                        caretCorners: p,
                      };
                    case b.PositionWithCaret.ABOVE_END:
                      return {
                        yAlignment: b.strings.BOTTOM,
                        xAlignment: n ? b.strings.RIGHT : b.strings.LEFT,
                        yAxisPx: "0",
                        xAxisPx: a,
                        rotation: n ? -35 : 35,
                        skew: n ? -20 : 20,
                        xTransformOrigin: n ? c : a,
                        yTransformOrigin: r,
                        caretCorners: n ? d : p,
                      };
                    default:
                    case b.PositionWithCaret.ABOVE_START:
                      return {
                        yAlignment: b.strings.BOTTOM,
                        xAlignment: n ? b.strings.LEFT : b.strings.RIGHT,
                        yAxisPx: "0",
                        xAxisPx: a,
                        rotation: n ? 35 : -35,
                        skew: n ? 20 : -20,
                        xTransformOrigin: n ? a : c,
                        yTransformOrigin: r,
                        caretCorners: n ? p : d,
                      };
                  }
                }
              }),
              (v.prototype.clearShowTimeout = function () {
                this.showTimeout &&
                  (clearTimeout(this.showTimeout), (this.showTimeout = null));
              }),
              (v.prototype.clearHideTimeout = function () {
                this.hideTimeout &&
                  (clearTimeout(this.hideTimeout), (this.hideTimeout = null));
              }),
              (v.prototype.attachScrollHandler = function (t) {
                var e = this;
                this.addAncestorScrollEventListeners.push(function () {
                  t("scroll", e.windowScrollHandler);
                });
              }),
              (v.prototype.removeScrollHandler = function (t) {
                var e = this;
                this.removeAncestorScrollEventListeners.push(function () {
                  t("scroll", e.windowScrollHandler);
                });
              }),
              (v.prototype.destroy = function () {
                var e, t;
                this.frameId &&
                  (cancelAnimationFrame(this.frameId), (this.frameId = null)),
                  this.clearHideTimeout(),
                  this.clearShowTimeout(),
                  this.adapter.removeClass(d),
                  this.adapter.removeClass(f),
                  this.adapter.removeClass(p),
                  this.adapter.removeClass(y),
                  this.adapter.removeClass(C),
                  this.richTooltip &&
                    this.adapter.deregisterEventHandler(
                      "focusout",
                      this.richTooltipFocusOutHandler
                    ),
                  this.persistentTooltip ||
                    (this.adapter.deregisterEventHandler(
                      "mouseenter",
                      this.tooltipMouseEnterHandler
                    ),
                    this.adapter.deregisterEventHandler(
                      "mouseleave",
                      this.tooltipMouseLeaveHandler
                    )),
                  this.adapter.deregisterAnchorEventHandler(
                    "blur",
                    this.anchorBlurHandler
                  ),
                  this.adapter.deregisterDocumentEventHandler(
                    "click",
                    this.documentClickHandler
                  ),
                  this.adapter.deregisterDocumentEventHandler(
                    "keydown",
                    this.documentKeydownHandler
                  ),
                  this.adapter.deregisterWindowEventHandler(
                    "scroll",
                    this.windowScrollHandler
                  ),
                  this.adapter.deregisterWindowEventHandler(
                    "resize",
                    this.windowResizeHandler
                  );
                try {
                  for (
                    var n = T(this.removeAncestorScrollEventListeners),
                      i = n.next();
                    !i.done;
                    i = n.next()
                  )
                    (0, i.value)();
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this.animFrame.cancelAll();
              }),
              v);
          function v(t) {
            var e = g.call(this, o(o({}, v.defaultAdapter), t)) || this;
            return (
              (e.tooltipShown = !1),
              (e.anchorGap = b.numbers.BOUNDED_ANCHOR_GAP),
              (e.xTooltipPos = b.XPosition.DETECTED),
              (e.yTooltipPos = b.YPosition.DETECTED),
              (e.tooltipPositionWithCaret = b.PositionWithCaret.DETECTED),
              (e.minViewportTooltipThreshold =
                b.numbers.MIN_VIEWPORT_TOOLTIP_THRESHOLD),
              (e.hideDelayMs = b.numbers.HIDE_DELAY_MS),
              (e.showDelayMs = b.numbers.SHOW_DELAY_MS),
              (e.anchorRect = null),
              (e.parentRect = null),
              (e.frameId = null),
              (e.hideTimeout = null),
              (e.showTimeout = null),
              (e.addAncestorScrollEventListeners = new Array()),
              (e.removeAncestorScrollEventListeners = new Array()),
              (e.animFrame = new a.AnimationFrame()),
              (e.anchorBlurHandler = function (t) {
                e.handleAnchorBlur(t);
              }),
              (e.documentClickHandler = function (t) {
                e.handleDocumentClick(t);
              }),
              (e.documentKeydownHandler = function (t) {
                e.handleKeydown(t);
              }),
              (e.tooltipMouseEnterHandler = function () {
                e.handleTooltipMouseEnter();
              }),
              (e.tooltipMouseLeaveHandler = function () {
                e.handleTooltipMouseLeave();
              }),
              (e.richTooltipFocusOutHandler = function (t) {
                e.handleRichTooltipFocusOut(t);
              }),
              (e.windowScrollHandler = function () {
                e.handleWindowScrollEvent();
              }),
              (e.windowResizeHandler = function () {
                e.handleWindowChangeEvent();
              }),
              e
            );
          }
          (e.MDCTooltipFoundation = m), (e.default = m);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCFixedTopAppBarFoundation = void 0);
          var o,
            s = n(9),
            a = n(43),
            c =
              ((o = a.MDCTopAppBarFoundation),
              r(u, o),
              (u.prototype.handleTargetScroll = function () {
                this.adapter.getViewportScrollY() <= 0
                  ? this.wasScrolled &&
                    (this.adapter.removeClass(
                      s.cssClasses.FIXED_SCROLLED_CLASS
                    ),
                    (this.wasScrolled = !1))
                  : this.wasScrolled ||
                    (this.adapter.addClass(s.cssClasses.FIXED_SCROLLED_CLASS),
                    (this.wasScrolled = !0));
              }),
              u);
          function u() {
            var t = (null !== o && o.apply(this, arguments)) || this;
            return (t.wasScrolled = !1), t;
          }
          (e.MDCFixedTopAppBarFoundation = c), (e.default = c);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCShortTopAppBarFoundation = void 0);
          var o,
            s = n(9),
            a = n(44),
            c =
              ((o = a.MDCTopAppBarBaseFoundation),
              r(u, o),
              Object.defineProperty(u.prototype, "isCollapsed", {
                get: function () {
                  return this.collapsed;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (u.prototype.init = function () {
                o.prototype.init.call(this),
                  0 < this.adapter.getTotalActionItems() &&
                    this.adapter.addClass(
                      s.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS
                    ),
                  this.setAlwaysCollapsed(
                    this.adapter.hasClass(s.cssClasses.SHORT_COLLAPSED_CLASS)
                  );
              }),
              (u.prototype.setAlwaysCollapsed = function (t) {
                (this.isAlwaysCollapsed = !!t),
                  this.isAlwaysCollapsed
                    ? this.collapse()
                    : this.maybeCollapseBar();
              }),
              (u.prototype.getAlwaysCollapsed = function () {
                return this.isAlwaysCollapsed;
              }),
              (u.prototype.handleTargetScroll = function () {
                this.maybeCollapseBar();
              }),
              (u.prototype.maybeCollapseBar = function () {
                this.isAlwaysCollapsed ||
                  (this.adapter.getViewportScrollY() <= 0
                    ? this.collapsed && this.uncollapse()
                    : this.collapsed || this.collapse());
              }),
              (u.prototype.uncollapse = function () {
                this.adapter.removeClass(s.cssClasses.SHORT_COLLAPSED_CLASS),
                  (this.collapsed = !1);
              }),
              (u.prototype.collapse = function () {
                this.adapter.addClass(s.cssClasses.SHORT_COLLAPSED_CLASS),
                  (this.collapsed = !0);
              }),
              u);
          function u(t) {
            var e = o.call(this, t) || this;
            return (e.collapsed = !1), (e.isAlwaysCollapsed = !1), e;
          }
          (e.MDCShortTopAppBarFoundation = c), (e.default = c);
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            o =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      i(e, t, n);
                return r(e, t), e;
              },
            s =
              (this && this.__importDefault) ||
              function (t) {
                return t && t.__esModule ? t : { default: t };
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.topAppBar =
              e.tooltip =
              e.textField =
              e.tabScroller =
              e.tabIndicator =
              e.tabBar =
              e.tab =
              e.switchControl =
              e.snackbar =
              e.slider =
              e.select =
              e.segmentedButton =
              e.ripple =
              e.radio =
              e.notchedOutline =
              e.menuSurface =
              e.menu =
              e.list =
              e.linearProgress =
              e.lineRipple =
              e.iconButton =
              e.formField =
              e.floatingLabel =
              e.drawer =
              e.dom =
              e.dialog =
              e.dataTable =
              e.circularProgress =
              e.chips =
              e.checkbox =
              e.base =
              e.banner =
              e.autoInit =
                void 0);
          var a = s(n(121));
          e.autoInit = a.default;
          var c = o(n(123));
          e.banner = c;
          var u = o(n(126));
          e.base = u;
          var l = o(n(128));
          e.checkbox = l;
          var d = o(n(130));
          e.chips = d;
          var p = o(n(141));
          e.circularProgress = p;
          var h = o(n(144));
          e.dataTable = h;
          var f = o(n(148));
          e.dialog = f;
          var y = o(n(152));
          e.dom = y;
          var C = o(n(153));
          e.drawer = C;
          var E = o(n(157));
          e.floatingLabel = E;
          var g = o(n(159));
          e.formField = g;
          var _ = o(n(162));
          e.iconButton = _;
          var m = o(n(166));
          e.lineRipple = m;
          var v = o(n(168));
          e.linearProgress = v;
          var T = o(n(171));
          e.list = T;
          var b = o(n(174));
          e.menuSurface = b;
          var A = o(n(177));
          e.menu = A;
          var O = o(n(180));
          e.notchedOutline = O;
          var I = o(n(182));
          e.radio = I;
          var S = o(n(185));
          e.ripple = S;
          var R = o(n(188));
          e.segmentedButton = R;
          var D = o(n(195));
          e.select = D;
          var L = o(n(203));
          e.slider = L;
          var P = o(n(206));
          e.snackbar = P;
          var M = o(n(210));
          e.switchControl = M;
          var N = o(n(218));
          e.tabBar = N;
          var w = o(n(225));
          e.tabIndicator = w;
          var x = o(n(227));
          e.tabScroller = x;
          var F = o(n(230));
          e.tab = F;
          var j = o(n(233));
          e.textField = j;
          var H = o(n(243));
          e.tooltip = H;
          var B = o(n(246));
          (e.topAppBar = B),
            a.default.register("MDCBanner", c.MDCBanner),
            a.default.register("MDCCheckbox", l.MDCCheckbox),
            a.default.register("MDCChip", d.MDCChip),
            a.default.register("MDCChipSet", d.MDCChipSet),
            a.default.register("MDCCircularProgress", p.MDCCircularProgress),
            a.default.register("MDCDataTable", h.MDCDataTable),
            a.default.register("MDCDialog", f.MDCDialog),
            a.default.register("MDCDrawer", C.MDCDrawer),
            a.default.register("MDCFloatingLabel", E.MDCFloatingLabel),
            a.default.register("MDCFormField", g.MDCFormField),
            a.default.register("MDCIconButtonToggle", _.MDCIconButtonToggle),
            a.default.register("MDCLineRipple", m.MDCLineRipple),
            a.default.register("MDCLinearProgress", v.MDCLinearProgress),
            a.default.register("MDCList", T.MDCList),
            a.default.register("MDCMenu", A.MDCMenu),
            a.default.register("MDCMenuSurface", b.MDCMenuSurface),
            a.default.register("MDCNotchedOutline", O.MDCNotchedOutline),
            a.default.register("MDCRadio", I.MDCRadio),
            a.default.register("MDCRipple", S.MDCRipple),
            a.default.register("MDCSegmentedButton", R.MDCSegmentedButton),
            a.default.register("MDCSelect", D.MDCSelect),
            a.default.register("MDCSlider", L.MDCSlider),
            a.default.register("MDCSnackbar", P.MDCSnackbar),
            a.default.register("MDCSwitch", M.MDCSwitch),
            a.default.register("MDCTabBar", N.MDCTabBar),
            a.default.register("MDCTextField", j.MDCTextField),
            a.default.register("MDCTooltip", H.MDCTooltip),
            a.default.register("MDCTopAppBar", B.MDCTopAppBar);
        },
        function (t, e, n) {
          "use strict";
          var d =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                i = 0;
              if (n) return n.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && i >= t.length && (t = void 0),
                      { value: t && t[i++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.mdcAutoInit = void 0);
          var i = n(122),
            p = i.strings.AUTO_INIT_ATTR,
            h = i.strings.AUTO_INIT_STATE_ATTR,
            f = i.strings.INITIALIZED_STATE,
            y = {},
            r = console.warn.bind(console);
          function o(t) {
            var e, n;
            void 0 === t && (t = document);
            var i = [],
              r = [].slice.call(t.querySelectorAll("[" + p + "]"));
            r = r.filter(function (t) {
              return t.getAttribute(h) !== f;
            });
            try {
              for (var o = d(r), s = o.next(); !s.done; s = o.next()) {
                var a = s.value,
                  c = a.getAttribute(p);
                if (!c)
                  throw new Error(
                    "(mdc-auto-init) Constructor name must be given."
                  );
                var u = y[c];
                if ("function" != typeof u)
                  throw new Error(
                    "(mdc-auto-init) Could not find constructor in registry for " +
                      c
                  );
                var l = u.attachTo(a);
                Object.defineProperty(a, c, {
                  configurable: !0,
                  enumerable: !1,
                  value: l,
                  writable: !1,
                }),
                  i.push(l),
                  a.setAttribute(h, f);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                s && !s.done && (n = o.return) && n.call(o);
              } finally {
                if (e) throw e.error;
              }
            }
            return (
              (function (t, e, n) {
                var i;
                void 0 === n && (n = !1),
                  "function" == typeof CustomEvent
                    ? (i = new CustomEvent(t, { bubbles: n, detail: e }))
                    : (i = document.createEvent("CustomEvent")).initCustomEvent(
                        t,
                        n,
                        !1,
                        e
                      ),
                  document.dispatchEvent(i);
              })("MDCAutoInit:End", {}),
              i
            );
          }
          ((e.mdcAutoInit = o).register = function (t, e, n) {
            if ((void 0 === n && (n = r), "function" != typeof e))
              throw new Error(
                "(mdc-auto-init) Invalid Constructor value: " +
                  e +
                  ". Expected function."
              );
            var i = y[t];
            i &&
              n(
                "(mdc-auto-init) Overriding registration for " +
                  t +
                  " with " +
                  e +
                  ". Was: " +
                  i
              ),
              (y[t] = e);
          }),
            (o.deregister = function (t) {
              delete y[t];
            }),
            (o.deregisterAll = function () {
              var e, t;
              try {
                for (
                  var n = d(Object.keys(y)), i = n.next();
                  !i.done;
                  i = n.next()
                ) {
                  var r = i.value;
                  o.deregister(r);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  i && !i.done && (t = n.return) && t.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (e.default = o);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.strings = void 0),
            (e.strings = {
              AUTO_INIT_ATTR: "data-mdc-auto-init",
              AUTO_INIT_STATE_ATTR: "data-mdc-auto-init-state",
              INITIALIZED_STATE: "initialized",
            });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(124), e),
            r(n(125), e),
            r(n(18), e),
            r(n(45), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCBanner = void 0);
          var o,
            s = n(1),
            a = n(11),
            c = n(3),
            u = n(18),
            l = n(45),
            d =
              ((o = s.MDCComponent),
              r(p, o),
              (p.attachTo = function (t) {
                return new p(t);
              }),
              (p.prototype.initialize = function (t) {
                var n = this;
                void 0 === t &&
                  (t = function (t, e) {
                    return new a.FocusTrap(t, e);
                  }),
                  (this.contentEl = this.root.querySelector(
                    u.selectors.CONTENT
                  )),
                  (this.textEl = this.root.querySelector(u.selectors.TEXT)),
                  (this.primaryActionEl = this.root.querySelector(
                    u.selectors.PRIMARY_ACTION
                  )),
                  (this.secondaryActionEl = this.root.querySelector(
                    u.selectors.SECONDARY_ACTION
                  )),
                  (this.focusTrapFactory = t),
                  (this.handleContentClick = function (t) {
                    var e = t.target;
                    c.closest(e, u.selectors.PRIMARY_ACTION)
                      ? n.foundation.handlePrimaryActionClick()
                      : c.closest(e, u.selectors.SECONDARY_ACTION) &&
                        n.foundation.handleSecondaryActionClick();
                  });
              }),
              (p.prototype.initialSyncWithDOM = function () {
                this.registerContentClickHandler(this.handleContentClick),
                  (this.focusTrap = this.focusTrapFactory(this.root, {
                    initialFocusEl: this.primaryActionEl,
                  }));
              }),
              (p.prototype.destroy = function () {
                o.prototype.destroy.call(this),
                  this.deregisterContentClickHandler(this.handleContentClick);
              }),
              (p.prototype.layout = function () {
                this.foundation.layout();
              }),
              (p.prototype.open = function () {
                this.foundation.open();
              }),
              (p.prototype.close = function (t) {
                this.foundation.close(t);
              }),
              (p.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      n.root.classList.add(t);
                    },
                    getContentHeight: function () {
                      return n.contentEl.offsetHeight;
                    },
                    notifyClosed: function (t) {
                      n.emit(u.events.CLOSED, { reason: t });
                    },
                    notifyClosing: function (t) {
                      n.emit(u.events.CLOSING, { reason: t });
                    },
                    notifyOpened: function () {
                      n.emit(u.events.OPENED, {});
                    },
                    notifyOpening: function () {
                      n.emit(u.events.OPENING, {});
                    },
                    notifyActionClicked: function (t) {
                      n.emit(u.events.ACTION_CLICKED, { action: t });
                    },
                    releaseFocus: function () {
                      n.focusTrap.releaseFocus();
                    },
                    removeClass: function (t) {
                      n.root.classList.remove(t);
                    },
                    setStyleProperty: function (t, e) {
                      n.root.style.setProperty(t, e);
                    },
                    trapFocus: function () {
                      n.focusTrap.trapFocus();
                    },
                  };
                return new l.MDCBannerFoundation(t);
              }),
              Object.defineProperty(p.prototype, "isOpen", {
                get: function () {
                  return this.foundation.isOpen();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.getText = function () {
                return this.textEl.textContent || "";
              }),
              (p.prototype.setText = function (t) {
                this.textEl.textContent = t;
              }),
              (p.prototype.getPrimaryActionText = function () {
                return this.primaryActionEl.textContent || "";
              }),
              (p.prototype.setPrimaryActionText = function (t) {
                this.primaryActionEl.textContent = t;
              }),
              (p.prototype.getSecondaryActionText = function () {
                return this.secondaryActionEl
                  ? this.secondaryActionEl.textContent || ""
                  : null;
              }),
              (p.prototype.setSecondaryActionText = function (t) {
                this.secondaryActionEl &&
                  (this.secondaryActionEl.textContent = t);
              }),
              (p.prototype.registerContentClickHandler = function (t) {
                this.contentEl.addEventListener("click", t);
              }),
              (p.prototype.deregisterContentClickHandler = function (t) {
                this.contentEl.removeEventListener("click", t);
              }),
              p);
          function p() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCBanner = d;
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(1), e),
            r(n(0), e),
            r(n(127), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(129), e),
            r(n(46), e),
            r(n(20), e),
            r(n(48), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(131), e),
            r(n(134), e),
            r(n(137), e);
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.trailingActionStrings = void 0),
            r(n(132), e),
            r(n(49), e),
            r(n(50), e),
            r(n(133), e);
          var o = n(12);
          Object.defineProperty(e, "trailingActionStrings", {
            enumerable: !0,
            get: function () {
              return o.strings;
            },
          });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.chipStrings = e.chipCssClasses = void 0),
            r(n(135), e),
            r(n(51), e),
            r(n(21), e),
            r(n(136), e);
          var o = n(13);
          Object.defineProperty(e, "chipCssClasses", {
            enumerable: !0,
            get: function () {
              return o.cssClasses;
            },
          }),
            Object.defineProperty(e, "chipStrings", {
              enumerable: !0,
              get: function () {
                return o.strings;
              },
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.chipSetStrings = e.chipSetCssClasses = void 0),
            r(n(138), e),
            r(n(139), e),
            r(n(52), e);
          var o = n(53);
          Object.defineProperty(e, "chipSetCssClasses", {
            enumerable: !0,
            get: function () {
              return o.cssClasses;
            },
          }),
            Object.defineProperty(e, "chipSetStrings", {
              enumerable: !0,
              get: function () {
                return o.strings;
              },
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            s =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCChipSet = void 0);
          var o,
            a = n(1),
            c = n(140),
            u = n(51),
            l = n(21),
            d = n(52),
            p = l.MDCChipFoundation.strings,
            h = p.INTERACTION_EVENT,
            f = p.SELECTION_EVENT,
            y = p.REMOVAL_EVENT,
            C = p.NAVIGATION_EVENT,
            E = d.MDCChipSetFoundation.strings.CHIP_SELECTOR,
            g = 0,
            _ =
              ((o = a.MDCComponent),
              r(m, o),
              (m.attachTo = function (t) {
                return new m(t);
              }),
              Object.defineProperty(m.prototype, "chips", {
                get: function () {
                  return this.chipsList.slice();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(m.prototype, "selectedChipIds", {
                get: function () {
                  return this.foundation.getSelectedChipIds();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (m.prototype.initialize = function (t) {
                void 0 === t &&
                  (t = function (t) {
                    return new u.MDCChip(t);
                  }),
                  (this.chipFactory = t),
                  (this.chipsList = this.instantiateChips(this.chipFactory));
              }),
              (m.prototype.initialSyncWithDOM = function () {
                var e,
                  t,
                  n = this;
                try {
                  for (
                    var i = s(this.chipsList), r = i.next();
                    !r.done;
                    r = i.next()
                  ) {
                    var o = r.value;
                    o.id && o.selected && this.foundation.select(o.id);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = i.return) && t.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                (this.handleChipInteraction = function (t) {
                  return n.foundation.handleChipInteraction(t.detail);
                }),
                  (this.handleChipSelection = function (t) {
                    return n.foundation.handleChipSelection(t.detail);
                  }),
                  (this.handleChipRemoval = function (t) {
                    return n.foundation.handleChipRemoval(t.detail);
                  }),
                  (this.handleChipNavigation = function (t) {
                    return n.foundation.handleChipNavigation(t.detail);
                  }),
                  this.listen(h, this.handleChipInteraction),
                  this.listen(f, this.handleChipSelection),
                  this.listen(y, this.handleChipRemoval),
                  this.listen(C, this.handleChipNavigation);
              }),
              (m.prototype.destroy = function () {
                var e, t;
                try {
                  for (
                    var n = s(this.chipsList), i = n.next();
                    !i.done;
                    i = n.next()
                  )
                    i.value.destroy();
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this.unlisten(h, this.handleChipInteraction),
                  this.unlisten(f, this.handleChipSelection),
                  this.unlisten(y, this.handleChipRemoval),
                  this.unlisten(C, this.handleChipNavigation),
                  o.prototype.destroy.call(this);
              }),
              (m.prototype.addChip = function (t) {
                (t.id = t.id || "mdc-chip-" + ++g),
                  this.chipsList.push(this.chipFactory(t));
              }),
              (m.prototype.getDefaultFoundation = function () {
                var i = this,
                  t = {
                    announceMessage: function (t) {
                      c.announce(t);
                    },
                    focusChipPrimaryActionAtIndex: function (t) {
                      i.chipsList[t].focusPrimaryAction();
                    },
                    focusChipTrailingActionAtIndex: function (t) {
                      i.chipsList[t].focusTrailingAction();
                    },
                    getChipListCount: function () {
                      return i.chips.length;
                    },
                    getIndexOfChipById: function (t) {
                      return i.findChipIndex(t);
                    },
                    hasClass: function (t) {
                      return i.root.classList.contains(t);
                    },
                    isRTL: function () {
                      return (
                        "rtl" ===
                        window
                          .getComputedStyle(i.root)
                          .getPropertyValue("direction")
                      );
                    },
                    removeChipAtIndex: function (t) {
                      0 <= t &&
                        t < i.chips.length &&
                        (i.chipsList[t].destroy(),
                        i.chipsList[t].remove(),
                        i.chipsList.splice(t, 1));
                    },
                    removeFocusFromChipAtIndex: function (t) {
                      i.chipsList[t].removeFocus();
                    },
                    selectChipAtIndex: function (t, e, n) {
                      0 <= t &&
                        t < i.chips.length &&
                        i.chipsList[t].setSelectedFromChipSet(e, n);
                    },
                  };
                return new d.MDCChipSetFoundation(t);
              }),
              (m.prototype.instantiateChips = function (e) {
                return [].slice
                  .call(this.root.querySelectorAll(E))
                  .map(function (t) {
                    return (t.id = t.id || "mdc-chip-" + ++g), e(t);
                  });
              }),
              (m.prototype.findChipIndex = function (t) {
                for (var e = 0; e < this.chips.length; e++)
                  if (this.chipsList[e].id === t) return e;
                return -1;
              }),
              m);
          function m() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCChipSet = _;
        },
        function (t, i, e) {
          "use strict";
          var c, n;
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.announce =
              i.DATA_MDC_DOM_ANNOUNCE =
              i.AnnouncerPriority =
                void 0),
            ((n = c =
              i.AnnouncerPriority || (i.AnnouncerPriority = {})).POLITE =
              "polite"),
            (n.ASSERTIVE = "assertive"),
            (i.DATA_MDC_DOM_ANNOUNCE = "data-mdc-dom-announce"),
            (i.announce = function (t, e) {
              r.getInstance().say(t, e);
            });
          var r =
            ((o.getInstance = function () {
              return o.instance || (o.instance = new o()), o.instance;
            }),
            (o.prototype.say = function (t, e) {
              var n,
                i,
                r =
                  null !== (n = null == e ? void 0 : e.priority) && void 0 !== n
                    ? n
                    : c.POLITE,
                o =
                  null !== (i = null == e ? void 0 : e.ownerDocument) &&
                  void 0 !== i
                    ? i
                    : document,
                s = this.getLiveRegion(r, o);
              function a() {
                (s.textContent = ""), o.removeEventListener("click", a);
              }
              (s.textContent = ""),
                setTimeout(function () {
                  (s.textContent = t), o.addEventListener("click", a);
                }, 1);
            }),
            (o.prototype.getLiveRegion = function (t, e) {
              var n = this.liveRegions.get(e);
              n || ((n = new Map()), this.liveRegions.set(e, n));
              var i = n.get(t);
              if (i && e.body.contains(i)) return i;
              var r = this.createLiveRegion(t, e);
              return n.set(t, r), r;
            }),
            (o.prototype.createLiveRegion = function (t, e) {
              var n = e.createElement("div");
              return (
                (n.style.position = "absolute"),
                (n.style.top = "-9999px"),
                (n.style.left = "-9999px"),
                (n.style.height = "1px"),
                (n.style.overflow = "hidden"),
                n.setAttribute("aria-atomic", "true"),
                n.setAttribute("aria-live", t),
                n.setAttribute(i.DATA_MDC_DOM_ANNOUNCE, "true"),
                e.body.appendChild(n),
                n
              );
            }),
            o);
          function o() {
            this.liveRegions = new Map();
          }
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(142), e),
            r(n(143), e),
            r(n(55), e),
            r(n(54), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCCircularProgress = void 0);
          var o,
            s = n(1),
            a = n(54),
            c =
              ((o = s.MDCComponent),
              r(u, o),
              (u.prototype.initialize = function () {
                this.determinateCircle = this.root.querySelector(
                  a.MDCCircularProgressFoundation.strings
                    .DETERMINATE_CIRCLE_SELECTOR
                );
              }),
              (u.attachTo = function (t) {
                return new u(t);
              }),
              Object.defineProperty(u.prototype, "determinate", {
                set: function (t) {
                  this.foundation.setDeterminate(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "progress", {
                set: function (t) {
                  this.foundation.setProgress(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "isClosed", {
                get: function () {
                  return this.foundation.isClosed();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (u.prototype.open = function () {
                this.foundation.open();
              }),
              (u.prototype.close = function () {
                this.foundation.close();
              }),
              (u.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      n.root.classList.add(t);
                    },
                    getDeterminateCircleAttribute: function (t) {
                      return n.determinateCircle.getAttribute(t);
                    },
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    removeClass: function (t) {
                      n.root.classList.remove(t);
                    },
                    removeAttribute: function (t) {
                      n.root.removeAttribute(t);
                    },
                    setAttribute: function (t, e) {
                      n.root.setAttribute(t, e);
                    },
                    setDeterminateCircleAttribute: function (t, e) {
                      n.determinateCircle.setAttribute(t, e);
                    },
                  };
                return new a.MDCCircularProgressFoundation(t);
              }),
              u);
          function u() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCCircularProgress = c;
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(145), e),
            r(n(146), e),
            r(n(59), e),
            r(n(22), e),
            r(n(147), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCDataTable = void 0);
          var s,
            a = n(1),
            c = n(46),
            u = n(3),
            l = n(56),
            d = n(22),
            p = n(59),
            h =
              ((s = a.MDCComponent),
              r(f, s),
              (f.attachTo = function (t) {
                return new f(t);
              }),
              (f.prototype.initialize = function (t) {
                void 0 === t &&
                  (t = function (t) {
                    return new c.MDCCheckbox(t);
                  }),
                  (this.checkboxFactory = t);
              }),
              (f.prototype.initialSyncWithDOM = function () {
                var n = this;
                (this.headerRow = this.root.querySelector(
                  "." + d.cssClasses.HEADER_ROW
                )),
                  (this.handleHeaderRowCheckboxChange = function () {
                    n.foundation.handleHeaderRowCheckboxChange();
                  }),
                  this.headerRow.addEventListener(
                    "change",
                    this.handleHeaderRowCheckboxChange
                  ),
                  (this.headerRowClickListener = function (t) {
                    n.handleHeaderRowClick(t);
                  }),
                  this.headerRow.addEventListener(
                    "click",
                    this.headerRowClickListener
                  ),
                  (this.content = this.root.querySelector(
                    "." + d.cssClasses.CONTENT
                  )),
                  (this.handleContentClick = function (t) {
                    var e = u.closest(t.target, d.selectors.ROW);
                    e &&
                      n.foundation.handleRowClick({
                        rowId: n.getRowIdByRowElement(e),
                        row: e,
                      });
                  }),
                  this.content.addEventListener(
                    "click",
                    this.handleContentClick
                  ),
                  (this.handleRowCheckboxChange = function (t) {
                    n.foundation.handleRowCheckboxChange(t);
                  }),
                  this.content.addEventListener(
                    "change",
                    this.handleRowCheckboxChange
                  ),
                  this.layout();
              }),
              (f.prototype.layout = function () {
                this.foundation.layout();
              }),
              (f.prototype.getHeaderCells = function () {
                return [].slice.call(
                  this.root.querySelectorAll(d.selectors.HEADER_CELL)
                );
              }),
              (f.prototype.getRows = function () {
                return this.foundation.getRows();
              }),
              (f.prototype.getSelectedRowIds = function () {
                return this.foundation.getSelectedRowIds();
              }),
              (f.prototype.setSelectedRowIds = function (t) {
                this.foundation.setSelectedRowIds(t);
              }),
              (f.prototype.showProgress = function () {
                this.getLinearProgress().open(), this.foundation.showProgress();
              }),
              (f.prototype.hideProgress = function () {
                this.foundation.hideProgress(),
                  this.getLinearProgress().close();
              }),
              (f.prototype.destroy = function () {
                var e, t;
                if (
                  (this.handleHeaderRowCheckboxChange &&
                    this.headerRow.removeEventListener(
                      "change",
                      this.handleHeaderRowCheckboxChange
                    ),
                  this.headerRowClickListener &&
                    this.headerRow.removeEventListener(
                      "click",
                      this.headerRowClickListener
                    ),
                  this.handleRowCheckboxChange &&
                    this.content.removeEventListener(
                      "change",
                      this.handleRowCheckboxChange
                    ),
                  this.headerRowCheckbox && this.headerRowCheckbox.destroy(),
                  this.rowCheckboxList)
                )
                  try {
                    for (
                      var n = o(this.rowCheckboxList), i = n.next();
                      !i.done;
                      i = n.next()
                    )
                      i.value.destroy();
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      i && !i.done && (t = n.return) && t.call(n);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                this.handleContentClick &&
                  this.content.removeEventListener(
                    "click",
                    this.handleContentClick
                  );
              }),
              (f.prototype.getDefaultFoundation = function () {
                var i = this,
                  t = {
                    addClass: function (t) {
                      i.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      i.root.classList.remove(t);
                    },
                    getHeaderCellElements: function () {
                      return i.getHeaderCells();
                    },
                    getHeaderCellCount: function () {
                      return i.getHeaderCells().length;
                    },
                    getAttributeByHeaderCellIndex: function (t, e) {
                      return i.getHeaderCells()[t].getAttribute(e);
                    },
                    setAttributeByHeaderCellIndex: function (t, e, n) {
                      i.getHeaderCells()[t].setAttribute(e, n);
                    },
                    setClassNameByHeaderCellIndex: function (t, e) {
                      i.getHeaderCells()[t].classList.add(e);
                    },
                    removeClassNameByHeaderCellIndex: function (t, e) {
                      i.getHeaderCells()[t].classList.remove(e);
                    },
                    notifySortAction: function (t) {
                      i.emit(d.events.SORTED, t, !0);
                    },
                    getTableContainerHeight: function () {
                      var t = i.root.querySelector(
                        "." + d.cssClasses.TABLE_CONTAINER
                      );
                      if (!t)
                        throw new Error(
                          "MDCDataTable: Table container element not found."
                        );
                      return t.getBoundingClientRect().height;
                    },
                    getTableHeaderHeight: function () {
                      var t = i.root.querySelector(d.selectors.HEADER_ROW);
                      if (!t)
                        throw new Error(
                          "MDCDataTable: Table header element not found."
                        );
                      return t.getBoundingClientRect().height;
                    },
                    setProgressIndicatorStyles: function (t) {
                      var e = i.root.querySelector(
                        d.selectors.PROGRESS_INDICATOR
                      );
                      if (!e)
                        throw new Error(
                          "MDCDataTable: Progress indicator element not found."
                        );
                      e.style.setProperty("height", t.height),
                        e.style.setProperty("top", t.top);
                    },
                    addClassAtRowIndex: function (t, e) {
                      i.getRows()[t].classList.add(e);
                    },
                    getRowCount: function () {
                      return i.getRows().length;
                    },
                    getRowElements: function () {
                      return [].slice.call(
                        i.root.querySelectorAll(d.selectors.ROW)
                      );
                    },
                    getRowIdAtIndex: function (t) {
                      return i
                        .getRows()
                        [t].getAttribute(d.dataAttributes.ROW_ID);
                    },
                    getRowIndexByChildElement: function (t) {
                      return i.getRows().indexOf(u.closest(t, d.selectors.ROW));
                    },
                    getSelectedRowCount: function () {
                      return i.root.querySelectorAll(d.selectors.ROW_SELECTED)
                        .length;
                    },
                    isCheckboxAtRowIndexChecked: function (t) {
                      return i.rowCheckboxList[t].checked;
                    },
                    isHeaderRowCheckboxChecked: function () {
                      return i.headerRowCheckbox.checked;
                    },
                    isRowsSelectable: function () {
                      return (
                        !!i.root.querySelector(d.selectors.ROW_CHECKBOX) ||
                        !!i.root.querySelector(d.selectors.HEADER_ROW_CHECKBOX)
                      );
                    },
                    notifyRowSelectionChanged: function (t) {
                      i.emit(
                        d.events.ROW_SELECTION_CHANGED,
                        {
                          row: i.getRowByIndex(t.rowIndex),
                          rowId: i.getRowIdByIndex(t.rowIndex),
                          rowIndex: t.rowIndex,
                          selected: t.selected,
                        },
                        !0
                      );
                    },
                    notifySelectedAll: function () {
                      i.emit(d.events.SELECTED_ALL, {}, !0);
                    },
                    notifyUnselectedAll: function () {
                      i.emit(d.events.UNSELECTED_ALL, {}, !0);
                    },
                    notifyRowClick: function (t) {
                      i.emit(d.events.ROW_CLICK, t, !0);
                    },
                    registerHeaderRowCheckbox: function () {
                      i.headerRowCheckbox && i.headerRowCheckbox.destroy();
                      var t = i.root.querySelector(
                        d.selectors.HEADER_ROW_CHECKBOX
                      );
                      i.headerRowCheckbox = i.checkboxFactory(t);
                    },
                    registerRowCheckboxes: function () {
                      i.rowCheckboxList &&
                        i.rowCheckboxList.forEach(function (t) {
                          t.destroy();
                        }),
                        (i.rowCheckboxList = []),
                        i.getRows().forEach(function (t) {
                          var e = i.checkboxFactory(
                            t.querySelector(d.selectors.ROW_CHECKBOX)
                          );
                          i.rowCheckboxList.push(e);
                        });
                    },
                    removeClassAtRowIndex: function (t, e) {
                      i.getRows()[t].classList.remove(e);
                    },
                    setAttributeAtRowIndex: function (t, e, n) {
                      i.getRows()[t].setAttribute(e, n);
                    },
                    setHeaderRowCheckboxChecked: function (t) {
                      i.headerRowCheckbox.checked = t;
                    },
                    setHeaderRowCheckboxIndeterminate: function (t) {
                      i.headerRowCheckbox.indeterminate = t;
                    },
                    setRowCheckboxCheckedAtIndex: function (t, e) {
                      i.rowCheckboxList[t].checked = e;
                    },
                    setSortStatusLabelByHeaderCellIndex: function (t, e) {
                      var n = i
                        .getHeaderCells()
                        [t].querySelector(d.selectors.SORT_STATUS_LABEL);
                      n &&
                        (n.textContent = i.getSortStatusMessageBySortValue(e));
                    },
                  };
                return new p.MDCDataTableFoundation(t);
              }),
              (f.prototype.getRowByIndex = function (t) {
                return this.getRows()[t];
              }),
              (f.prototype.getRowIdByIndex = function (t) {
                return this.getRowByIndex(t).getAttribute(
                  d.dataAttributes.ROW_ID
                );
              }),
              (f.prototype.handleHeaderRowClick = function (t) {
                var e = u.closest(t.target, d.selectors.HEADER_CELL_WITH_SORT);
                if (e) {
                  var n = e.getAttribute(d.dataAttributes.COLUMN_ID),
                    i = this.getHeaderCells().indexOf(e);
                  -1 !== i &&
                    this.foundation.handleSortAction({
                      columnId: n,
                      columnIndex: i,
                      headerCell: e,
                    });
                }
              }),
              (f.prototype.getSortStatusMessageBySortValue = function (t) {
                switch (t) {
                  case d.SortValue.ASCENDING:
                    return d.messages.SORTED_IN_ASCENDING;
                  case d.SortValue.DESCENDING:
                    return d.messages.SORTED_IN_DESCENDING;
                  default:
                    return "";
                }
              }),
              (f.prototype.getLinearProgressElement = function () {
                var t = this.root.querySelector(
                  "." + d.cssClasses.LINEAR_PROGRESS
                );
                if (!t)
                  throw new Error(
                    "MDCDataTable: linear progress element is not found."
                  );
                return t;
              }),
              (f.prototype.getLinearProgress = function () {
                if (!this.linearProgress) {
                  var t = this.getLinearProgressElement();
                  this.linearProgress = new l.MDCLinearProgress(t);
                }
                return this.linearProgress;
              }),
              (f.prototype.getRowIdByRowElement = function (t) {
                return t.getAttribute(d.dataAttributes.ROW_ID);
              }),
              f);
          function f() {
            return (null !== s && s.apply(this, arguments)) || this;
          }
          e.MDCDataTable = h;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            o =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      i(e, t, n);
                return r(e, t), e;
              },
            s =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.util = void 0);
          var a = o(n(60));
          (e.util = a),
            s(n(149), e),
            s(n(150), e),
            s(n(62), e),
            s(n(61), e),
            s(n(151), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            s =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            a =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      o(e, t, n);
                return s(e, t), e;
              },
            c =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCDialog = void 0);
          var u,
            l = n(1),
            d = n(11),
            p = n(3),
            h = n(2),
            f = n(61),
            y = a(n(60)),
            C = f.MDCDialogFoundation.strings,
            E =
              ((u = l.MDCComponent),
              r(g, u),
              Object.defineProperty(g.prototype, "isOpen", {
                get: function () {
                  return this.foundation.isOpen();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(g.prototype, "escapeKeyAction", {
                get: function () {
                  return this.foundation.getEscapeKeyAction();
                },
                set: function (t) {
                  this.foundation.setEscapeKeyAction(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(g.prototype, "scrimClickAction", {
                get: function () {
                  return this.foundation.getScrimClickAction();
                },
                set: function (t) {
                  this.foundation.setScrimClickAction(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(g.prototype, "autoStackButtons", {
                get: function () {
                  return this.foundation.getAutoStackButtons();
                },
                set: function (t) {
                  this.foundation.setAutoStackButtons(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (g.attachTo = function (t) {
                return new g(t);
              }),
              (g.prototype.initialize = function (t) {
                var e, n;
                void 0 === t &&
                  (t = function (t, e) {
                    return new d.FocusTrap(t, e);
                  });
                var i = this.root.querySelector(C.CONTAINER_SELECTOR);
                if (!i)
                  throw new Error(
                    "Dialog component requires a " +
                      C.CONTAINER_SELECTOR +
                      " container element"
                  );
                (this.container = i),
                  (this.content = this.root.querySelector(C.CONTENT_SELECTOR)),
                  (this.buttons = [].slice.call(
                    this.root.querySelectorAll(C.BUTTON_SELECTOR)
                  )),
                  (this.defaultButton = this.root.querySelector(
                    "[" + C.BUTTON_DEFAULT_ATTRIBUTE + "]"
                  )),
                  (this.focusTrapFactory = t),
                  (this.buttonRipples = []);
                try {
                  for (
                    var r = c(this.buttons), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var s = o.value;
                    this.buttonRipples.push(new h.MDCRipple(s));
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              (g.prototype.initialSyncWithDOM = function () {
                var t = this;
                (this.focusTrap = y.createFocusTrapInstance(
                  this.container,
                  this.focusTrapFactory,
                  this.getInitialFocusEl() || void 0
                )),
                  (this.handleClick = this.foundation.handleClick.bind(
                    this.foundation
                  )),
                  (this.handleKeydown = this.foundation.handleKeydown.bind(
                    this.foundation
                  )),
                  (this.handleDocumentKeydown =
                    this.foundation.handleDocumentKeydown.bind(
                      this.foundation
                    )),
                  (this.handleOpening = function () {
                    document.addEventListener(
                      "keydown",
                      t.handleDocumentKeydown
                    );
                  }),
                  (this.handleClosing = function () {
                    document.removeEventListener(
                      "keydown",
                      t.handleDocumentKeydown
                    );
                  }),
                  this.listen("click", this.handleClick),
                  this.listen("keydown", this.handleKeydown),
                  this.listen(C.OPENING_EVENT, this.handleOpening),
                  this.listen(C.CLOSING_EVENT, this.handleClosing);
              }),
              (g.prototype.destroy = function () {
                this.unlisten("click", this.handleClick),
                  this.unlisten("keydown", this.handleKeydown),
                  this.unlisten(C.OPENING_EVENT, this.handleOpening),
                  this.unlisten(C.CLOSING_EVENT, this.handleClosing),
                  this.handleClosing(),
                  this.buttonRipples.forEach(function (t) {
                    t.destroy();
                  }),
                  u.prototype.destroy.call(this);
              }),
              (g.prototype.layout = function () {
                this.foundation.layout();
              }),
              (g.prototype.open = function () {
                this.foundation.open();
              }),
              (g.prototype.close = function (t) {
                void 0 === t && (t = ""), this.foundation.close(t);
              }),
              (g.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addBodyClass: function (t) {
                      return document.body.classList.add(t);
                    },
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    areButtonsStacked: function () {
                      return y.areTopsMisaligned(n.buttons);
                    },
                    clickDefaultButton: function () {
                      n.defaultButton &&
                        !n.defaultButton.disabled &&
                        n.defaultButton.click();
                    },
                    eventTargetMatches: function (t, e) {
                      return !!t && p.matches(t, e);
                    },
                    getActionFromEvent: function (t) {
                      if (!t.target) return "";
                      var e = p.closest(
                        t.target,
                        "[" + C.ACTION_ATTRIBUTE + "]"
                      );
                      return e && e.getAttribute(C.ACTION_ATTRIBUTE);
                    },
                    getInitialFocusEl: function () {
                      return n.getInitialFocusEl();
                    },
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    isContentScrollable: function () {
                      return y.isScrollable(n.content);
                    },
                    notifyClosed: function (t) {
                      return n.emit(C.CLOSED_EVENT, t ? { action: t } : {});
                    },
                    notifyClosing: function (t) {
                      return n.emit(C.CLOSING_EVENT, t ? { action: t } : {});
                    },
                    notifyOpened: function () {
                      return n.emit(C.OPENED_EVENT, {});
                    },
                    notifyOpening: function () {
                      return n.emit(C.OPENING_EVENT, {});
                    },
                    releaseFocus: function () {
                      n.focusTrap.releaseFocus();
                    },
                    removeBodyClass: function (t) {
                      return document.body.classList.remove(t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    reverseButtons: function () {
                      n.buttons.reverse(),
                        n.buttons.forEach(function (t) {
                          t.parentElement.appendChild(t);
                        });
                    },
                    trapFocus: function () {
                      n.focusTrap.trapFocus();
                    },
                    registerContentEventHandler: function (t, e) {
                      n.content instanceof HTMLElement &&
                        n.content.addEventListener(t, e);
                    },
                    deregisterContentEventHandler: function (t, e) {
                      n.content instanceof HTMLElement &&
                        n.content.removeEventListener(t, e);
                    },
                    isScrollableContentAtTop: function () {
                      return y.isScrollAtTop(n.content);
                    },
                    isScrollableContentAtBottom: function () {
                      return y.isScrollAtBottom(n.content);
                    },
                    registerWindowEventHandler: function (t, e) {
                      window.addEventListener(t, e);
                    },
                    deregisterWindowEventHandler: function (t, e) {
                      window.removeEventListener(t, e);
                    },
                  };
                return new f.MDCDialogFoundation(t);
              }),
              (g.prototype.getInitialFocusEl = function () {
                return this.root.querySelector(
                  "[" + C.INITIAL_FOCUS_ATTRIBUTE + "]"
                );
              }),
              g);
          function g() {
            return (null !== u && u.apply(this, arguments)) || this;
          }
          e.MDCDialog = E;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            o =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      i(e, t, n);
                return r(e, t), e;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ponyfill = e.keyboard = e.focusTrap = e.events = void 0);
          var s = o(n(5));
          e.events = s;
          var a = o(n(11));
          e.focusTrap = a;
          var c = o(n(6));
          e.keyboard = c;
          var u = o(n(3));
          e.ponyfill = u;
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            o =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      i(e, t, n);
                return r(e, t), e;
              },
            s =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.util = void 0);
          var a = o(n(63));
          (e.util = a),
            s(n(154), e),
            s(n(155), e),
            s(n(65), e),
            s(n(26), e),
            s(n(66), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            s =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            a =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      o(e, t, n);
                return s(e, t), e;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCDrawer = void 0);
          var c,
            u = n(1),
            l = n(11),
            d = n(24),
            p = n(26),
            h = n(66),
            f = a(n(63)),
            y = p.MDCDismissibleDrawerFoundation.cssClasses,
            C = p.MDCDismissibleDrawerFoundation.strings,
            E =
              ((c = u.MDCComponent),
              r(g, c),
              (g.attachTo = function (t) {
                return new g(t);
              }),
              Object.defineProperty(g.prototype, "open", {
                get: function () {
                  return this.foundation.isOpen();
                },
                set: function (t) {
                  t ? this.foundation.open() : this.foundation.close();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(g.prototype, "list", {
                get: function () {
                  return this.innerList;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (g.prototype.initialize = function (t, e) {
                void 0 === t &&
                  (t = function (t) {
                    return new l.FocusTrap(t);
                  }),
                  void 0 === e &&
                    (e = function (t) {
                      return new d.MDCList(t);
                    });
                var n = this.root.querySelector(C.LIST_SELECTOR);
                n && ((this.innerList = e(n)), (this.innerList.wrapFocus = !0)),
                  (this.focusTrapFactory = t);
              }),
              (g.prototype.initialSyncWithDOM = function () {
                var e = this,
                  t = y.MODAL,
                  n = C.SCRIM_SELECTOR;
                (this.scrim = this.root.parentNode.querySelector(n)),
                  this.scrim &&
                    this.root.classList.contains(t) &&
                    ((this.handleScrimClick = function () {
                      return e.foundation.handleScrimClick();
                    }),
                    this.scrim.addEventListener("click", this.handleScrimClick),
                    (this.focusTrap = f.createFocusTrapInstance(
                      this.root,
                      this.focusTrapFactory
                    ))),
                  (this.handleKeydown = function (t) {
                    e.foundation.handleKeydown(t);
                  }),
                  (this.handleTransitionEnd = function (t) {
                    e.foundation.handleTransitionEnd(t);
                  }),
                  this.listen("keydown", this.handleKeydown),
                  this.listen("transitionend", this.handleTransitionEnd);
              }),
              (g.prototype.destroy = function () {
                this.unlisten("keydown", this.handleKeydown),
                  this.unlisten("transitionend", this.handleTransitionEnd),
                  this.innerList && this.innerList.destroy();
                var t = y.MODAL;
                this.scrim &&
                  this.handleScrimClick &&
                  this.root.classList.contains(t) &&
                  (this.scrim.removeEventListener(
                    "click",
                    this.handleScrimClick
                  ),
                  (this.open = !1));
              }),
              (g.prototype.getDefaultFoundation = function () {
                var e = this,
                  t = {
                    addClass: function (t) {
                      e.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      e.root.classList.remove(t);
                    },
                    hasClass: function (t) {
                      return e.root.classList.contains(t);
                    },
                    elementHasClass: function (t, e) {
                      return t.classList.contains(e);
                    },
                    saveFocus: function () {
                      e.previousFocus = document.activeElement;
                    },
                    restoreFocus: function () {
                      var t = e.previousFocus;
                      t &&
                        t.focus &&
                        e.root.contains(document.activeElement) &&
                        t.focus();
                    },
                    focusActiveNavigationItem: function () {
                      var t = e.root.querySelector(
                        C.LIST_ITEM_ACTIVATED_SELECTOR
                      );
                      t && t.focus();
                    },
                    notifyClose: function () {
                      e.emit(C.CLOSE_EVENT, {}, !0);
                    },
                    notifyOpen: function () {
                      e.emit(C.OPEN_EVENT, {}, !0);
                    },
                    trapFocus: function () {
                      e.focusTrap.trapFocus();
                    },
                    releaseFocus: function () {
                      e.focusTrap.releaseFocus();
                    },
                  },
                  n = y.DISMISSIBLE,
                  i = y.MODAL;
                if (this.root.classList.contains(n))
                  return new p.MDCDismissibleDrawerFoundation(t);
                if (this.root.classList.contains(i))
                  return new h.MDCModalDrawerFoundation(t);
                throw new Error(
                  "MDCDrawer: Failed to instantiate component. Supported variants are " +
                    n +
                    " and " +
                    i +
                    "."
                );
              }),
              g);
          function g() {
            return (null !== c && c.apply(this, arguments)) || this;
          }
          e.MDCDrawer = E;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.handleKeydown =
              e.clearBuffer =
              e.isTypingInProgress =
              e.matchItem =
              e.initSortedIndex =
              e.initState =
                void 0);
          var C = n(6),
            u = n(7),
            E = n(64);
          function g(t, e) {
            var n,
              i = t.nextChar,
              r = t.focusItemAtIndex,
              o = t.sortedIndexByFirstChar,
              s = t.focusedItemIndex,
              a = t.skipFocus,
              c = t.isItemAtIndexDisabled;
            return (
              clearTimeout(e.bufferClearTimeout),
              (e.bufferClearTimeout = setTimeout(function () {
                l(e);
              }, u.numbers.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS)),
              (e.typeaheadBuffer = e.typeaheadBuffer + i),
              -1 ===
                (n =
                  1 === e.typeaheadBuffer.length
                    ? (function (t, e, n, i) {
                        var r = i.typeaheadBuffer[0],
                          o = t.get(r);
                        if (!o) return -1;
                        if (
                          r === i.currentFirstChar &&
                          o[i.sortedIndexCursor].index === e
                        ) {
                          i.sortedIndexCursor =
                            (i.sortedIndexCursor + 1) % o.length;
                          var s = o[i.sortedIndexCursor].index;
                          if (!n(s)) return s;
                        }
                        i.currentFirstChar = r;
                        var a,
                          c = -1;
                        for (a = 0; a < o.length; a++)
                          if (!n(o[a].index)) {
                            c = a;
                            break;
                          }
                        for (; a < o.length; a++)
                          if (o[a].index > e && !n(o[a].index)) {
                            c = a;
                            break;
                          }
                        return -1 === c
                          ? -1
                          : ((i.sortedIndexCursor = c),
                            o[i.sortedIndexCursor].index);
                      })(o, s, c, e)
                    : (function (t, e, n) {
                        var i = n.typeaheadBuffer[0],
                          r = t.get(i);
                        if (!r) return -1;
                        var o = r[n.sortedIndexCursor];
                        if (
                          0 === o.text.lastIndexOf(n.typeaheadBuffer, 0) &&
                          !e(o.index)
                        )
                          return o.index;
                        var s = (n.sortedIndexCursor + 1) % r.length,
                          a = -1;
                        for (; s !== n.sortedIndexCursor; ) {
                          var c = r[s],
                            u = 0 === c.text.lastIndexOf(n.typeaheadBuffer, 0),
                            l = !e(c.index);
                          if (u && l) {
                            a = s;
                            break;
                          }
                          s = (s + 1) % r.length;
                        }
                        return -1 === a
                          ? -1
                          : ((n.sortedIndexCursor = a),
                            r[n.sortedIndexCursor].index);
                      })(o, c, e)) ||
                a ||
                r(n),
              n
            );
          }
          function _(t) {
            return 0 < t.typeaheadBuffer.length;
          }
          function l(t) {
            t.typeaheadBuffer = "";
          }
          (e.initState = function () {
            return {
              bufferClearTimeout: 0,
              currentFirstChar: "",
              sortedIndexCursor: 0,
              typeaheadBuffer: "",
            };
          }),
            (e.initSortedIndex = function (t, e) {
              for (var n = new Map(), i = 0; i < t; i++) {
                var r = e(i).trim();
                if (r) {
                  var o = r[0].toLowerCase();
                  n.has(o) || n.set(o, []),
                    n.get(o).push({ text: r.toLowerCase(), index: i });
                }
              }
              return (
                n.forEach(function (t) {
                  t.sort(function (t, e) {
                    return t.index - e.index;
                  });
                }),
                n
              );
            }),
            (e.matchItem = g),
            (e.isTypingInProgress = _),
            (e.clearBuffer = l),
            (e.handleKeydown = function (t, e) {
              var n = t.event,
                i = t.isTargetListItem,
                r = t.focusedItemIndex,
                o = t.focusItemAtIndex,
                s = t.sortedIndexByFirstChar,
                a = t.isItemAtIndexDisabled,
                c = "ArrowLeft" === C.normalizeKey(n),
                u = "ArrowUp" === C.normalizeKey(n),
                l = "ArrowRight" === C.normalizeKey(n),
                d = "ArrowDown" === C.normalizeKey(n),
                p = "Home" === C.normalizeKey(n),
                h = "End" === C.normalizeKey(n),
                f = "Enter" === C.normalizeKey(n),
                y = "Spacebar" === C.normalizeKey(n);
              return n.altKey ||
                n.ctrlKey ||
                n.metaKey ||
                c ||
                u ||
                l ||
                d ||
                p ||
                h ||
                f
                ? -1
                : y || 1 !== n.key.length
                ? y
                  ? (i && E.preventDefaultEvent(n),
                    i && _(e)
                      ? g(
                          {
                            focusItemAtIndex: o,
                            focusedItemIndex: r,
                            nextChar: " ",
                            sortedIndexByFirstChar: s,
                            skipFocus: !1,
                            isItemAtIndexDisabled: a,
                          },
                          e
                        )
                      : -1)
                  : -1
                : (E.preventDefaultEvent(n),
                  g(
                    {
                      focusItemAtIndex: o,
                      focusedItemIndex: r,
                      nextChar: n.key.toLowerCase(),
                      sortedIndexByFirstChar: s,
                      skipFocus: !1,
                      isItemAtIndexDisabled: a,
                    },
                    e
                  ));
            });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(158), e),
            r(n(27), e),
            r(n(67), e),
            r(n(28), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(160), e),
            r(n(161), e),
            r(n(69), e),
            r(n(68), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCFormField = void 0);
          var o,
            s = n(1),
            a = n(68),
            c =
              ((o = s.MDCComponent),
              r(u, o),
              (u.attachTo = function (t) {
                return new u(t);
              }),
              (u.prototype.labelEl = function () {
                var t = a.MDCFormFieldFoundation.strings.LABEL_SELECTOR;
                return this.root.querySelector(t);
              }),
              (u.prototype.getDefaultFoundation = function () {
                var i = this,
                  t = {
                    activateInputRipple: function () {
                      i.input && i.input.ripple && i.input.ripple.activate();
                    },
                    deactivateInputRipple: function () {
                      i.input && i.input.ripple && i.input.ripple.deactivate();
                    },
                    deregisterInteractionHandler: function (t, e) {
                      var n = i.labelEl();
                      n && n.removeEventListener(t, e);
                    },
                    registerInteractionHandler: function (t, e) {
                      var n = i.labelEl();
                      n && n.addEventListener(t, e);
                    },
                  };
                return new a.MDCFormFieldFoundation(t);
              }),
              u);
          function u() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCFormField = c;
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(163), e),
            r(n(164), e),
            r(n(71), e),
            r(n(70), e),
            r(n(165), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCIconButtonToggle = void 0);
          var o,
            s = n(1),
            a = n(2),
            c = n(70),
            u = c.MDCIconButtonToggleFoundation.strings,
            l =
              ((o = s.MDCComponent),
              r(d, o),
              (d.attachTo = function (t) {
                return new d(t);
              }),
              (d.prototype.initialSyncWithDOM = function () {
                var t = this;
                (this.handleClick = function () {
                  t.foundation.handleClick();
                }),
                  this.listen("click", this.handleClick);
              }),
              (d.prototype.destroy = function () {
                this.unlisten("click", this.handleClick),
                  this.ripple.destroy(),
                  o.prototype.destroy.call(this);
              }),
              (d.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    notifyChange: function (t) {
                      n.emit(u.CHANGE_EVENT, t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    getAttr: function (t) {
                      return n.root.getAttribute(t);
                    },
                    setAttr: function (t, e) {
                      return n.root.setAttribute(t, e);
                    },
                  };
                return new c.MDCIconButtonToggleFoundation(t);
              }),
              Object.defineProperty(d.prototype, "ripple", {
                get: function () {
                  return this.rippleComponent;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "on", {
                get: function () {
                  return this.foundation.isOn();
                },
                set: function (t) {
                  this.foundation.toggle(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (d.prototype.createRipple = function () {
                var t = new a.MDCRipple(this.root);
                return (t.unbounded = !0), t;
              }),
              d);
          function d() {
            var t = (null !== o && o.apply(this, arguments)) || this;
            return (t.rippleComponent = t.createRipple()), t;
          }
          e.MDCIconButtonToggle = l;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(167), e),
            r(n(29), e),
            r(n(73), e),
            r(n(72), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(169), e),
            r(n(56), e),
            r(n(58), e),
            r(n(57), e),
            r(n(170), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(172), e),
            r(n(24), e),
            r(n(7), e),
            r(n(25), e),
            r(n(173), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(175), e),
            r(n(74), e),
            r(n(8), e),
            r(n(14), e),
            r(n(176), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Corner = void 0);
          var o = n(8);
          Object.defineProperty(e, "Corner", {
            enumerable: !0,
            get: function () {
              return o.Corner;
            },
          }),
            r(n(178), e),
            r(n(75), e),
            r(n(15), e),
            r(n(76), e),
            r(n(179), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(181), e),
            r(n(30), e),
            r(n(31), e),
            r(n(77), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(183), e),
            r(n(184), e),
            r(n(79), e),
            r(n(78), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCRadio = void 0);
          var s,
            a = n(1),
            c = n(5),
            u = n(2),
            l = n(4),
            d = n(78),
            p =
              ((s = a.MDCComponent),
              r(h, s),
              (h.attachTo = function (t) {
                return new h(t);
              }),
              Object.defineProperty(h.prototype, "checked", {
                get: function () {
                  return this.nativeControl.checked;
                },
                set: function (t) {
                  this.nativeControl.checked = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "disabled", {
                get: function () {
                  return this.nativeControl.disabled;
                },
                set: function (t) {
                  this.foundation.setDisabled(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "value", {
                get: function () {
                  return this.nativeControl.value;
                },
                set: function (t) {
                  this.nativeControl.value = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(h.prototype, "ripple", {
                get: function () {
                  return this.rippleSurface;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (h.prototype.destroy = function () {
                this.rippleSurface.destroy(), s.prototype.destroy.call(this);
              }),
              (h.prototype.getDefaultFoundation = function () {
                var e = this,
                  t = {
                    addClass: function (t) {
                      return e.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return e.root.classList.remove(t);
                    },
                    setNativeControlDisabled: function (t) {
                      return (e.nativeControl.disabled = t);
                    },
                  };
                return new d.MDCRadioFoundation(t);
              }),
              (h.prototype.createRipple = function () {
                var n = this,
                  t = o(o({}, u.MDCRipple.createAdapter(this)), {
                    registerInteractionHandler: function (t, e) {
                      n.nativeControl.addEventListener(t, e, c.applyPassive());
                    },
                    deregisterInteractionHandler: function (t, e) {
                      n.nativeControl.removeEventListener(
                        t,
                        e,
                        c.applyPassive()
                      );
                    },
                    isSurfaceActive: function () {
                      return !1;
                    },
                    isUnbounded: function () {
                      return !0;
                    },
                  });
                return new u.MDCRipple(this.root, new l.MDCRippleFoundation(t));
              }),
              Object.defineProperty(h.prototype, "nativeControl", {
                get: function () {
                  var t = d.MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR,
                    e = this.root.querySelector(t);
                  if (!e)
                    throw new Error(
                      "Radio component requires a " + t + " element"
                    );
                  return e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              h);
          function h() {
            var t = (null !== s && s.apply(this, arguments)) || this;
            return (t.rippleSurface = t.createRipple()), t;
          }
          e.MDCRadio = p;
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            o =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      i(e, t, n);
                return r(e, t), e;
              },
            s =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.util = void 0);
          var a = o(n(19));
          (e.util = a),
            s(n(186), e),
            s(n(2), e),
            s(n(47), e),
            s(n(4), e),
            s(n(187), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(189), e),
            r(n(192), e),
            r(n(194), e);
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(190), e),
            r(n(80), e),
            r(n(191), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSegmentedButton = void 0);
          var s,
            a = n(1),
            c = n(82),
            u = n(81),
            l = n(80),
            d =
              ((s = a.MDCComponent),
              r(p, s),
              (p.attachTo = function (t) {
                return new p(t);
              }),
              Object.defineProperty(p.prototype, "segments", {
                get: function () {
                  return this.segmentsList.slice();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (p.prototype.initialize = function (t) {
                void 0 === t &&
                  (t = function (t) {
                    return new c.MDCSegmentedButtonSegment(t);
                  }),
                  (this.segmentFactory = t),
                  (this.segmentsList = this.instantiateSegments(
                    this.segmentFactory
                  ));
              }),
              (p.prototype.instantiateSegments = function (e) {
                return [].slice
                  .call(this.root.querySelectorAll(u.selectors.SEGMENT))
                  .map(function (t) {
                    return e(t);
                  });
              }),
              (p.prototype.initialSyncWithDOM = function () {
                var e = this;
                (this.handleSelected = function (t) {
                  e.foundation.handleSelected(t.detail);
                }),
                  this.listen(u.events.SELECTED, this.handleSelected);
                for (
                  var t = this.foundation.isSingleSelect(), n = 0;
                  n < this.segmentsList.length;
                  n++
                ) {
                  var i = this.segmentsList[n];
                  i.setIndex(n), i.setIsSingleSelect(t);
                }
                var r = this.segmentsList.filter(function (t) {
                  return t.isSelected();
                });
                if (t && 0 === r.length && 0 < this.segmentsList.length)
                  throw new Error(
                    "No segment selected in singleSelect mdc-segmented-button"
                  );
                if (t && 1 < r.length)
                  throw new Error(
                    "Multiple segments selected in singleSelect mdc-segmented-button"
                  );
              }),
              (p.prototype.destroy = function () {
                var e, t;
                try {
                  for (
                    var n = o(this.segmentsList), i = n.next();
                    !i.done;
                    i = n.next()
                  )
                    i.value.destroy();
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this.unlisten(u.events.SELECTED, this.handleSelected),
                  s.prototype.destroy.call(this);
              }),
              (p.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    getSegments: function () {
                      return n.mappedSegments();
                    },
                    selectSegment: function (e) {
                      var t = n.mappedSegments().find(function (t) {
                        return t.index === e || t.segmentId === e;
                      });
                      t && n.segmentsList[t.index].setSelected();
                    },
                    unselectSegment: function (e) {
                      var t = n.mappedSegments().find(function (t) {
                        return t.index === e || t.segmentId === e;
                      });
                      t && n.segmentsList[t.index].setUnselected();
                    },
                    notifySelectedChange: function (t) {
                      n.emit(u.events.CHANGE, t, !0);
                    },
                  };
                return new l.MDCSegmentedButtonFoundation(t);
              }),
              (p.prototype.getSelectedSegments = function () {
                return this.foundation.getSelectedSegments();
              }),
              (p.prototype.selectSegment = function (t) {
                this.foundation.selectSegment(t);
              }),
              (p.prototype.unselectSegment = function (t) {
                this.foundation.unselectSegment(t);
              }),
              (p.prototype.isSegmentSelected = function (t) {
                return this.foundation.isSegmentSelected(t);
              }),
              (p.prototype.mappedSegments = function () {
                return this.segmentsList.map(function (t, e) {
                  return {
                    index: e,
                    selected: t.isSelected(),
                    segmentId: t.getSegmentId(),
                  };
                });
              }),
              p);
          function p() {
            return (null !== s && s.apply(this, arguments)) || this;
          }
          e.MDCSegmentedButton = d;
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(193), e),
            r(n(84), e),
            r(n(82), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(196), e),
            r(n(197), e),
            r(n(32), e),
            r(n(85), e),
            r(n(198), e),
            r(n(199), e),
            r(n(201), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            a =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            c =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      s(e, t, n);
                return a(e, t), e;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSelect = void 0);
          var u,
            l = n(1),
            d = n(27),
            p = n(29),
            h = c(n(8)),
            f = n(75),
            y = c(n(15)),
            C = n(30),
            E = n(2),
            g = n(4),
            _ = n(32),
            m = n(85),
            v = n(86),
            T = n(89),
            b =
              ((u = l.MDCComponent),
              r(A, u),
              (A.attachTo = function (t) {
                return new A(t);
              }),
              (A.prototype.initialize = function (t, e, n, i, r, o) {
                if (
                  (void 0 === t &&
                    (t = function (t) {
                      return new d.MDCFloatingLabel(t);
                    }),
                  void 0 === e &&
                    (e = function (t) {
                      return new p.MDCLineRipple(t);
                    }),
                  void 0 === n &&
                    (n = function (t) {
                      return new C.MDCNotchedOutline(t);
                    }),
                  void 0 === i &&
                    (i = function (t) {
                      return new f.MDCMenu(t);
                    }),
                  void 0 === r &&
                    (r = function (t) {
                      return new T.MDCSelectIcon(t);
                    }),
                  void 0 === o &&
                    (o = function (t) {
                      return new v.MDCSelectHelperText(t);
                    }),
                  (this.selectAnchor = this.root.querySelector(
                    _.strings.SELECT_ANCHOR_SELECTOR
                  )),
                  (this.selectedText = this.root.querySelector(
                    _.strings.SELECTED_TEXT_SELECTOR
                  )),
                  (this.hiddenInput = this.root.querySelector(
                    _.strings.HIDDEN_INPUT_SELECTOR
                  )),
                  !this.selectedText)
                )
                  throw new Error(
                    "MDCSelect: Missing required element: The following selector must be present: '" +
                      _.strings.SELECTED_TEXT_SELECTOR +
                      "'"
                  );
                if (this.selectAnchor.hasAttribute(_.strings.ARIA_CONTROLS)) {
                  var s = document.getElementById(
                    this.selectAnchor.getAttribute(_.strings.ARIA_CONTROLS)
                  );
                  s && (this.helperText = o(s));
                }
                this.menuSetup(i);
                var a = this.root.querySelector(_.strings.LABEL_SELECTOR);
                this.label = a ? t(a) : null;
                var c = this.root.querySelector(_.strings.LINE_RIPPLE_SELECTOR);
                this.lineRipple = c ? e(c) : null;
                var u = this.root.querySelector(_.strings.OUTLINE_SELECTOR);
                this.outline = u ? n(u) : null;
                var l = this.root.querySelector(
                  _.strings.LEADING_ICON_SELECTOR
                );
                l && (this.leadingIcon = r(l)),
                  this.root.classList.contains(_.cssClasses.OUTLINED) ||
                    (this.ripple = this.createRipple());
              }),
              (A.prototype.initialSyncWithDOM = function () {
                var e = this;
                if (
                  ((this.handleFocus = function () {
                    e.foundation.handleFocus();
                  }),
                  (this.handleBlur = function () {
                    e.foundation.handleBlur();
                  }),
                  (this.handleClick = function (t) {
                    e.selectAnchor.focus(),
                      e.foundation.handleClick(e.getNormalizedXCoordinate(t));
                  }),
                  (this.handleKeydown = function (t) {
                    e.foundation.handleKeydown(t);
                  }),
                  (this.handleMenuItemAction = function (t) {
                    e.foundation.handleMenuItemAction(t.detail.index);
                  }),
                  (this.handleMenuOpened = function () {
                    e.foundation.handleMenuOpened();
                  }),
                  (this.handleMenuClosed = function () {
                    e.foundation.handleMenuClosed();
                  }),
                  (this.handleMenuClosing = function () {
                    e.foundation.handleMenuClosing();
                  }),
                  this.selectAnchor.addEventListener("focus", this.handleFocus),
                  this.selectAnchor.addEventListener("blur", this.handleBlur),
                  this.selectAnchor.addEventListener("click", this.handleClick),
                  this.selectAnchor.addEventListener(
                    "keydown",
                    this.handleKeydown
                  ),
                  this.menu.listen(
                    h.strings.CLOSED_EVENT,
                    this.handleMenuClosed
                  ),
                  this.menu.listen(
                    h.strings.CLOSING_EVENT,
                    this.handleMenuClosing
                  ),
                  this.menu.listen(
                    h.strings.OPENED_EVENT,
                    this.handleMenuOpened
                  ),
                  this.menu.listen(
                    y.strings.SELECTED_EVENT,
                    this.handleMenuItemAction
                  ),
                  this.hiddenInput)
                ) {
                  if (this.hiddenInput.value)
                    return (
                      this.foundation.setValue(this.hiddenInput.value, !0),
                      void this.foundation.layout()
                    );
                  this.hiddenInput.value = this.value;
                }
              }),
              (A.prototype.destroy = function () {
                this.selectAnchor.removeEventListener(
                  "focus",
                  this.handleFocus
                ),
                  this.selectAnchor.removeEventListener(
                    "blur",
                    this.handleBlur
                  ),
                  this.selectAnchor.removeEventListener(
                    "keydown",
                    this.handleKeydown
                  ),
                  this.selectAnchor.removeEventListener(
                    "click",
                    this.handleClick
                  ),
                  this.menu.unlisten(
                    h.strings.CLOSED_EVENT,
                    this.handleMenuClosed
                  ),
                  this.menu.unlisten(
                    h.strings.OPENED_EVENT,
                    this.handleMenuOpened
                  ),
                  this.menu.unlisten(
                    y.strings.SELECTED_EVENT,
                    this.handleMenuItemAction
                  ),
                  this.menu.destroy(),
                  this.ripple && this.ripple.destroy(),
                  this.outline && this.outline.destroy(),
                  this.leadingIcon && this.leadingIcon.destroy(),
                  this.helperText && this.helperText.destroy(),
                  u.prototype.destroy.call(this);
              }),
              Object.defineProperty(A.prototype, "value", {
                get: function () {
                  return this.foundation.getValue();
                },
                set: function (t) {
                  this.foundation.setValue(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (A.prototype.setValue = function (t, e) {
                void 0 === e && (e = !1), this.foundation.setValue(t, e);
              }),
              Object.defineProperty(A.prototype, "selectedIndex", {
                get: function () {
                  return this.foundation.getSelectedIndex();
                },
                set: function (t) {
                  this.foundation.setSelectedIndex(t, !0);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (A.prototype.setSelectedIndex = function (t, e) {
                void 0 === e && (e = !1),
                  this.foundation.setSelectedIndex(t, !0, e);
              }),
              Object.defineProperty(A.prototype, "disabled", {
                get: function () {
                  return this.foundation.getDisabled();
                },
                set: function (t) {
                  this.foundation.setDisabled(t),
                    this.hiddenInput && (this.hiddenInput.disabled = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(A.prototype, "leadingIconAriaLabel", {
                set: function (t) {
                  this.foundation.setLeadingIconAriaLabel(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(A.prototype, "leadingIconContent", {
                set: function (t) {
                  this.foundation.setLeadingIconContent(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(A.prototype, "helperTextContent", {
                set: function (t) {
                  this.foundation.setHelperTextContent(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(A.prototype, "useDefaultValidation", {
                set: function (t) {
                  this.foundation.setUseDefaultValidation(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(A.prototype, "valid", {
                get: function () {
                  return this.foundation.isValid();
                },
                set: function (t) {
                  this.foundation.setValid(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(A.prototype, "required", {
                get: function () {
                  return this.foundation.getRequired();
                },
                set: function (t) {
                  this.foundation.setRequired(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (A.prototype.layout = function () {
                this.foundation.layout();
              }),
              (A.prototype.layoutOptions = function () {
                this.foundation.layoutOptions(),
                  this.menu.layout(),
                  (this.menuItemValues = this.menu.items.map(function (t) {
                    return t.getAttribute(_.strings.VALUE_ATTR) || "";
                  })),
                  this.hiddenInput && (this.hiddenInput.value = this.value);
              }),
              (A.prototype.getDefaultFoundation = function () {
                var t = o(
                  o(
                    o(
                      o({}, this.getSelectAdapterMethods()),
                      this.getCommonAdapterMethods()
                    ),
                    this.getOutlineAdapterMethods()
                  ),
                  this.getLabelAdapterMethods()
                );
                return new m.MDCSelectFoundation(t, this.getFoundationMap());
              }),
              (A.prototype.menuSetup = function (t) {
                (this.menuElement = this.root.querySelector(
                  _.strings.MENU_SELECTOR
                )),
                  (this.menu = t(this.menuElement)),
                  (this.menu.hasTypeahead = !0),
                  (this.menu.singleSelection = !0),
                  (this.menuItemValues = this.menu.items.map(function (t) {
                    return t.getAttribute(_.strings.VALUE_ATTR) || "";
                  }));
              }),
              (A.prototype.createRipple = function () {
                var n = this,
                  t = o(
                    o(
                      {},
                      E.MDCRipple.createAdapter({ root: this.selectAnchor })
                    ),
                    {
                      registerInteractionHandler: function (t, e) {
                        n.selectAnchor.addEventListener(t, e);
                      },
                      deregisterInteractionHandler: function (t, e) {
                        n.selectAnchor.removeEventListener(t, e);
                      },
                    }
                  );
                return new E.MDCRipple(
                  this.selectAnchor,
                  new g.MDCRippleFoundation(t)
                );
              }),
              (A.prototype.getSelectAdapterMethods = function () {
                var n = this;
                return {
                  getMenuItemAttr: function (t, e) {
                    return t.getAttribute(e);
                  },
                  setSelectedText: function (t) {
                    n.selectedText.textContent = t;
                  },
                  isSelectAnchorFocused: function () {
                    return document.activeElement === n.selectAnchor;
                  },
                  getSelectAnchorAttr: function (t) {
                    return n.selectAnchor.getAttribute(t);
                  },
                  setSelectAnchorAttr: function (t, e) {
                    n.selectAnchor.setAttribute(t, e);
                  },
                  removeSelectAnchorAttr: function (t) {
                    n.selectAnchor.removeAttribute(t);
                  },
                  addMenuClass: function (t) {
                    n.menuElement.classList.add(t);
                  },
                  removeMenuClass: function (t) {
                    n.menuElement.classList.remove(t);
                  },
                  openMenu: function () {
                    n.menu.open = !0;
                  },
                  closeMenu: function () {
                    n.menu.open = !1;
                  },
                  getAnchorElement: function () {
                    return n.root.querySelector(
                      _.strings.SELECT_ANCHOR_SELECTOR
                    );
                  },
                  setMenuAnchorElement: function (t) {
                    n.menu.setAnchorElement(t);
                  },
                  setMenuAnchorCorner: function (t) {
                    n.menu.setAnchorCorner(t);
                  },
                  setMenuWrapFocus: function (t) {
                    n.menu.wrapFocus = t;
                  },
                  getSelectedIndex: function () {
                    var t = n.menu.selectedIndex;
                    return t instanceof Array ? t[0] : t;
                  },
                  setSelectedIndex: function (t) {
                    n.menu.selectedIndex = t;
                  },
                  focusMenuItemAtIndex: function (t) {
                    n.menu.items[t].focus();
                  },
                  getMenuItemCount: function () {
                    return n.menu.items.length;
                  },
                  getMenuItemValues: function () {
                    return n.menuItemValues;
                  },
                  getMenuItemTextAtIndex: function (t) {
                    return n.menu.getPrimaryTextAtIndex(t);
                  },
                  isTypeaheadInProgress: function () {
                    return n.menu.typeaheadInProgress;
                  },
                  typeaheadMatchItem: function (t, e) {
                    return n.menu.typeaheadMatchItem(t, e);
                  },
                };
              }),
              (A.prototype.getCommonAdapterMethods = function () {
                var n = this;
                return {
                  addClass: function (t) {
                    n.root.classList.add(t);
                  },
                  removeClass: function (t) {
                    n.root.classList.remove(t);
                  },
                  hasClass: function (t) {
                    return n.root.classList.contains(t);
                  },
                  setRippleCenter: function (t) {
                    n.lineRipple && n.lineRipple.setRippleCenter(t);
                  },
                  activateBottomLine: function () {
                    n.lineRipple && n.lineRipple.activate();
                  },
                  deactivateBottomLine: function () {
                    n.lineRipple && n.lineRipple.deactivate();
                  },
                  notifyChange: function (t) {
                    n.hiddenInput && (n.hiddenInput.value = t);
                    var e = n.selectedIndex;
                    n.emit(_.strings.CHANGE_EVENT, { value: t, index: e }, !0);
                  },
                };
              }),
              (A.prototype.getOutlineAdapterMethods = function () {
                var e = this;
                return {
                  hasOutline: function () {
                    return Boolean(e.outline);
                  },
                  notchOutline: function (t) {
                    e.outline && e.outline.notch(t);
                  },
                  closeOutline: function () {
                    e.outline && e.outline.closeNotch();
                  },
                };
              }),
              (A.prototype.getLabelAdapterMethods = function () {
                var e = this;
                return {
                  hasLabel: function () {
                    return !!e.label;
                  },
                  floatLabel: function (t) {
                    e.label && e.label.float(t);
                  },
                  getLabelWidth: function () {
                    return e.label ? e.label.getWidth() : 0;
                  },
                  setLabelRequired: function (t) {
                    e.label && e.label.setRequired(t);
                  },
                };
              }),
              (A.prototype.getNormalizedXCoordinate = function (t) {
                var e = t.target.getBoundingClientRect();
                return (
                  (this.isTouchEvent(t) ? t.touches[0].clientX : t.clientX) -
                  e.left
                );
              }),
              (A.prototype.isTouchEvent = function (t) {
                return Boolean(t.touches);
              }),
              (A.prototype.getFoundationMap = function () {
                return {
                  helperText: this.helperText
                    ? this.helperText.foundationForSelect
                    : void 0,
                  leadingIcon: this.leadingIcon
                    ? this.leadingIcon.foundationForSelect
                    : void 0,
                };
              }),
              A);
          function A() {
            return (null !== u && u.apply(this, arguments)) || this;
          }
          e.MDCSelect = b;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.helperTextStrings = e.helperTextCssClasses = void 0),
            r(n(200), e),
            r(n(86), e),
            r(n(87), e);
          var o = n(88);
          Object.defineProperty(e, "helperTextCssClasses", {
            enumerable: !0,
            get: function () {
              return o.cssClasses;
            },
          }),
            Object.defineProperty(e, "helperTextStrings", {
              enumerable: !0,
              get: function () {
                return o.strings;
              },
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.iconStrings = void 0),
            r(n(202), e),
            r(n(89), e),
            r(n(90), e);
          var o = n(91);
          Object.defineProperty(e, "iconStrings", {
            enumerable: !0,
            get: function () {
              return o.strings;
            },
          });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(204), e),
            r(n(205), e),
            r(n(33), e),
            r(n(92), e),
            r(n(34), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            c =
              (this && this.__assign) ||
              function () {
                return (c =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSlider = void 0);
          var o,
            s = n(1),
            u = n(5),
            l = n(3),
            d = n(2),
            p = n(4),
            h = n(33),
            a = n(92),
            f = n(34),
            y =
              ((o = s.MDCComponent),
              r(C, o),
              (C.attachTo = function (t, e) {
                return void 0 === e && (e = {}), new C(t, void 0, e);
              }),
              (C.prototype.getDefaultFoundation = function () {
                var i = this,
                  t = {
                    hasClass: function (t) {
                      return i.root.classList.contains(t);
                    },
                    addClass: function (t) {
                      i.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      i.root.classList.remove(t);
                    },
                    addThumbClass: function (t, e) {
                      i.getThumbEl(e).classList.add(t);
                    },
                    removeThumbClass: function (t, e) {
                      i.getThumbEl(e).classList.remove(t);
                    },
                    getAttribute: function (t) {
                      return i.root.getAttribute(t);
                    },
                    getInputValue: function (t) {
                      return i.getInput(t).value;
                    },
                    setInputValue: function (t, e) {
                      i.getInput(e).value = t;
                    },
                    getInputAttribute: function (t, e) {
                      return i.getInput(e).getAttribute(t);
                    },
                    setInputAttribute: function (t, e, n) {
                      i.getInput(n).setAttribute(t, e);
                    },
                    removeInputAttribute: function (t, e) {
                      i.getInput(e).removeAttribute(t);
                    },
                    focusInput: function (t) {
                      i.getInput(t).focus();
                    },
                    isInputFocused: function (t) {
                      return i.getInput(t) === document.activeElement;
                    },
                    shouldHideFocusStylesForPointerEvents: function () {
                      return !1;
                    },
                    getThumbKnobWidth: function (t) {
                      return i
                        .getThumbEl(t)
                        .querySelector("." + h.cssClasses.THUMB_KNOB)
                        .getBoundingClientRect().width;
                    },
                    getThumbBoundingClientRect: function (t) {
                      return i.getThumbEl(t).getBoundingClientRect();
                    },
                    getBoundingClientRect: function () {
                      return i.root.getBoundingClientRect();
                    },
                    getValueIndicatorContainerWidth: function (t) {
                      return i
                        .getThumbEl(t)
                        .querySelector(
                          "." + h.cssClasses.VALUE_INDICATOR_CONTAINER
                        )
                        .getBoundingClientRect().width;
                    },
                    isRTL: function () {
                      return "rtl" === getComputedStyle(i.root).direction;
                    },
                    setThumbStyleProperty: function (t, e, n) {
                      i.getThumbEl(n).style.setProperty(t, e);
                    },
                    removeThumbStyleProperty: function (t, e) {
                      i.getThumbEl(e).style.removeProperty(t);
                    },
                    setTrackActiveStyleProperty: function (t, e) {
                      i.trackActive.style.setProperty(t, e);
                    },
                    removeTrackActiveStyleProperty: function (t) {
                      i.trackActive.style.removeProperty(t);
                    },
                    setValueIndicatorText: function (t, e) {
                      i
                        .getThumbEl(e)
                        .querySelector(
                          "." + h.cssClasses.VALUE_INDICATOR_TEXT
                        ).textContent = String(t);
                    },
                    getValueToAriaValueTextFn: function () {
                      return i.valueToAriaValueTextFn;
                    },
                    updateTickMarks: function (t) {
                      var e = i.root.querySelector(
                        "." + h.cssClasses.TICK_MARKS_CONTAINER
                      );
                      if (
                        (e ||
                          ((e = document.createElement("div")).classList.add(
                            h.cssClasses.TICK_MARKS_CONTAINER
                          ),
                          i.root
                            .querySelector("." + h.cssClasses.TRACK)
                            .appendChild(e)),
                        t.length !== e.children.length)
                      ) {
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                        i.addTickMarks(e, t);
                      } else i.updateTickMarks(e, t);
                    },
                    setPointerCapture: function (t) {
                      i.root.setPointerCapture(t);
                    },
                    emitChangeEvent: function (t, e) {
                      i.emit(h.events.CHANGE, { value: t, thumb: e });
                    },
                    emitInputEvent: function (t, e) {
                      i.emit(h.events.INPUT, { value: t, thumb: e });
                    },
                    emitDragStartEvent: function (t, e) {
                      i.getRipple(e).activate();
                    },
                    emitDragEndEvent: function (t, e) {
                      i.getRipple(e).deactivate();
                    },
                    registerEventHandler: function (t, e) {
                      i.listen(t, e);
                    },
                    deregisterEventHandler: function (t, e) {
                      i.unlisten(t, e);
                    },
                    registerThumbEventHandler: function (t, e, n) {
                      i.getThumbEl(t).addEventListener(e, n);
                    },
                    deregisterThumbEventHandler: function (t, e, n) {
                      i.getThumbEl(t).removeEventListener(e, n);
                    },
                    registerInputEventHandler: function (t, e, n) {
                      i.getInput(t).addEventListener(e, n);
                    },
                    deregisterInputEventHandler: function (t, e, n) {
                      i.getInput(t).removeEventListener(e, n);
                    },
                    registerBodyEventHandler: function (t, e) {
                      document.body.addEventListener(t, e);
                    },
                    deregisterBodyEventHandler: function (t, e) {
                      document.body.removeEventListener(t, e);
                    },
                    registerWindowEventHandler: function (t, e) {
                      window.addEventListener(t, e);
                    },
                    deregisterWindowEventHandler: function (t, e) {
                      window.removeEventListener(t, e);
                    },
                  };
                return new a.MDCSliderFoundation(t);
              }),
              (C.prototype.initialize = function (t) {
                var e = (void 0 === t ? {} : t).skipInitialUIUpdate;
                (this.inputs = [].slice.call(
                  this.root.querySelectorAll("." + h.cssClasses.INPUT)
                )),
                  (this.thumbs = [].slice.call(
                    this.root.querySelectorAll("." + h.cssClasses.THUMB)
                  )),
                  (this.trackActive = this.root.querySelector(
                    "." + h.cssClasses.TRACK_ACTIVE
                  )),
                  (this.ripples = this.createRipples()),
                  e && (this.skipInitialUIUpdate = !0);
              }),
              (C.prototype.initialSyncWithDOM = function () {
                this.foundation.layout({
                  skipUpdateUI: this.skipInitialUIUpdate,
                });
              }),
              (C.prototype.layout = function () {
                this.foundation.layout();
              }),
              (C.prototype.getValueStart = function () {
                return this.foundation.getValueStart();
              }),
              (C.prototype.setValueStart = function (t) {
                this.foundation.setValueStart(t);
              }),
              (C.prototype.getValue = function () {
                return this.foundation.getValue();
              }),
              (C.prototype.setValue = function (t) {
                this.foundation.setValue(t);
              }),
              (C.prototype.getDisabled = function () {
                return this.foundation.getDisabled();
              }),
              (C.prototype.setDisabled = function (t) {
                this.foundation.setDisabled(t);
              }),
              (C.prototype.setValueToAriaValueTextFn = function (t) {
                this.valueToAriaValueTextFn = t;
              }),
              (C.prototype.getThumbEl = function (t) {
                return t === f.Thumb.END
                  ? this.thumbs[this.thumbs.length - 1]
                  : this.thumbs[0];
              }),
              (C.prototype.getInput = function (t) {
                return t === f.Thumb.END
                  ? this.inputs[this.inputs.length - 1]
                  : this.inputs[0];
              }),
              (C.prototype.getRipple = function (t) {
                return t === f.Thumb.END
                  ? this.ripples[this.ripples.length - 1]
                  : this.ripples[0];
              }),
              (C.prototype.addTickMarks = function (t, e) {
                for (
                  var n = document.createDocumentFragment(), i = 0;
                  i < e.length;
                  i++
                ) {
                  var r = document.createElement("div"),
                    o =
                      e[i] === f.TickMark.ACTIVE
                        ? h.cssClasses.TICK_MARK_ACTIVE
                        : h.cssClasses.TICK_MARK_INACTIVE;
                  r.classList.add(o), n.appendChild(r);
                }
                t.appendChild(n);
              }),
              (C.prototype.updateTickMarks = function (t, e) {
                for (var n = Array.from(t.children), i = 0; i < n.length; i++)
                  e[i] === f.TickMark.ACTIVE
                    ? (n[i].classList.add(h.cssClasses.TICK_MARK_ACTIVE),
                      n[i].classList.remove(h.cssClasses.TICK_MARK_INACTIVE))
                    : (n[i].classList.add(h.cssClasses.TICK_MARK_INACTIVE),
                      n[i].classList.remove(h.cssClasses.TICK_MARK_ACTIVE));
              }),
              (C.prototype.createRipples = function () {
                for (
                  var o = [],
                    s = [].slice.call(
                      this.root.querySelectorAll("." + h.cssClasses.THUMB)
                    ),
                    t = function (t) {
                      var n = s[t],
                        i = a.inputs[t],
                        e = c(c({}, d.MDCRipple.createAdapter(a)), {
                          addClass: function (t) {
                            n.classList.add(t);
                          },
                          computeBoundingRect: function () {
                            return n.getBoundingClientRect();
                          },
                          deregisterInteractionHandler: function (t, e) {
                            i.removeEventListener(t, e);
                          },
                          isSurfaceActive: function () {
                            return l.matches(i, ":active");
                          },
                          isUnbounded: function () {
                            return !0;
                          },
                          registerInteractionHandler: function (t, e) {
                            i.addEventListener(t, e, u.applyPassive());
                          },
                          removeClass: function (t) {
                            n.classList.remove(t);
                          },
                          updateCssVariable: function (t, e) {
                            n.style.setProperty(t, e);
                          },
                        }),
                        r = new d.MDCRipple(n, new p.MDCRippleFoundation(e));
                      (r.unbounded = !0), o.push(r);
                    },
                    a = this,
                    e = 0;
                  e < s.length;
                  e++
                )
                  t(e);
                return o;
              }),
              C);
          function C() {
            var t = (null !== o && o.apply(this, arguments)) || this;
            return (
              (t.skipInitialUIUpdate = !1), (t.valueToAriaValueTextFn = null), t
            );
          }
          e.MDCSlider = y;
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            o =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      i(e, t, n);
                return r(e, t), e;
              },
            s =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.util = void 0);
          var a = o(n(93));
          (e.util = a),
            s(n(207), e),
            s(n(208), e),
            s(n(16), e),
            s(n(94), e),
            s(n(209), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            s =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            a =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      o(e, t, n);
                return s(e, t), e;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSnackbar = void 0);
          var c,
            u = n(1),
            l = n(3),
            d = n(16),
            p = n(94),
            h = a(n(93)),
            f = d.strings.SURFACE_SELECTOR,
            y = d.strings.LABEL_SELECTOR,
            C = d.strings.ACTION_SELECTOR,
            E = d.strings.DISMISS_SELECTOR,
            g = d.strings.OPENING_EVENT,
            _ = d.strings.OPENED_EVENT,
            m = d.strings.CLOSING_EVENT,
            v = d.strings.CLOSED_EVENT,
            T =
              ((c = u.MDCComponent),
              r(b, c),
              (b.attachTo = function (t) {
                return new b(t);
              }),
              (b.prototype.initialize = function (t) {
                void 0 === t &&
                  (t = function () {
                    return h.announce;
                  }),
                  (this.announce = t());
              }),
              (b.prototype.initialSyncWithDOM = function () {
                var n = this;
                (this.surfaceEl = this.root.querySelector(f)),
                  (this.labelEl = this.root.querySelector(y)),
                  (this.actionEl = this.root.querySelector(C)),
                  (this.handleKeyDown = function (t) {
                    n.foundation.handleKeyDown(t);
                  }),
                  (this.handleSurfaceClick = function (t) {
                    var e = t.target;
                    n.isActionButton(e)
                      ? n.foundation.handleActionButtonClick(t)
                      : n.isActionIcon(e) &&
                        n.foundation.handleActionIconClick(t);
                  }),
                  this.registerKeyDownHandler(this.handleKeyDown),
                  this.registerSurfaceClickHandler(this.handleSurfaceClick);
              }),
              (b.prototype.destroy = function () {
                c.prototype.destroy.call(this),
                  this.deregisterKeyDownHandler(this.handleKeyDown),
                  this.deregisterSurfaceClickHandler(this.handleSurfaceClick);
              }),
              (b.prototype.open = function () {
                this.foundation.open();
              }),
              (b.prototype.close = function (t) {
                void 0 === t && (t = ""), this.foundation.close(t);
              }),
              (b.prototype.getDefaultFoundation = function () {
                var e = this,
                  t = {
                    addClass: function (t) {
                      e.root.classList.add(t);
                    },
                    announce: function () {
                      e.announce(e.labelEl);
                    },
                    notifyClosed: function (t) {
                      return e.emit(v, t ? { reason: t } : {});
                    },
                    notifyClosing: function (t) {
                      return e.emit(m, t ? { reason: t } : {});
                    },
                    notifyOpened: function () {
                      return e.emit(_, {});
                    },
                    notifyOpening: function () {
                      return e.emit(g, {});
                    },
                    removeClass: function (t) {
                      return e.root.classList.remove(t);
                    },
                  };
                return new p.MDCSnackbarFoundation(t);
              }),
              Object.defineProperty(b.prototype, "timeoutMs", {
                get: function () {
                  return this.foundation.getTimeoutMs();
                },
                set: function (t) {
                  this.foundation.setTimeoutMs(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(b.prototype, "closeOnEscape", {
                get: function () {
                  return this.foundation.getCloseOnEscape();
                },
                set: function (t) {
                  this.foundation.setCloseOnEscape(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(b.prototype, "isOpen", {
                get: function () {
                  return this.foundation.isOpen();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(b.prototype, "labelText", {
                get: function () {
                  return this.labelEl.textContent;
                },
                set: function (t) {
                  this.labelEl.textContent = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(b.prototype, "actionButtonText", {
                get: function () {
                  return this.actionEl.textContent;
                },
                set: function (t) {
                  this.actionEl.textContent = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (b.prototype.registerKeyDownHandler = function (t) {
                this.listen("keydown", t);
              }),
              (b.prototype.deregisterKeyDownHandler = function (t) {
                this.unlisten("keydown", t);
              }),
              (b.prototype.registerSurfaceClickHandler = function (t) {
                this.surfaceEl.addEventListener("click", t);
              }),
              (b.prototype.deregisterSurfaceClickHandler = function (t) {
                this.surfaceEl.removeEventListener("click", t);
              }),
              (b.prototype.isActionButton = function (t) {
                return Boolean(l.closest(t, C));
              }),
              (b.prototype.isActionIcon = function (t) {
                return Boolean(l.closest(t, E));
              }),
              b);
          function b() {
            return (null !== c && c.apply(this, arguments)) || this;
          }
          e.MDCSnackbar = T;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            o =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      i(e, t, n);
                return r(e, t), e;
              },
            s =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.deprecated = void 0);
          var a = o(n(211));
          (e.deprecated = a),
            s(n(214), e),
            s(n(215), e),
            s(n(35), e),
            s(n(97), e);
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(212), e),
            r(n(213), e),
            r(n(96), e),
            r(n(95), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__read) ||
              function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var i,
                  r,
                  o = n.call(t),
                  s = [];
                try {
                  for (; (void 0 === e || 0 < e--) && !(i = o.next()).done; )
                    s.push(i.value);
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return s;
              },
            a =
              (this && this.__spreadArray) ||
              function (t, e) {
                for (var n = 0, i = e.length, r = t.length; n < i; n++, r++)
                  t[r] = e[n];
                return t;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSwitch = void 0);
          var c,
            u = n(1),
            l = n(5),
            d = n(3),
            p = n(2),
            h = n(4),
            f = n(95),
            y =
              ((c = u.MDCComponent),
              r(C, c),
              (C.attachTo = function (t) {
                return new C(t);
              }),
              (C.prototype.destroy = function () {
                c.prototype.destroy.call(this),
                  this.rippleSurface.destroy(),
                  this.nativeControl.removeEventListener(
                    "change",
                    this.changeHandler
                  );
              }),
              (C.prototype.initialSyncWithDOM = function () {
                var i = this;
                (this.changeHandler = function () {
                  for (var t, e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  (t = i.foundation).handleChange.apply(t, a([], s(e)));
                }),
                  this.nativeControl.addEventListener(
                    "change",
                    this.changeHandler
                  ),
                  (this.checked = this.checked);
              }),
              (C.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    setNativeControlChecked: function (t) {
                      return (n.nativeControl.checked = t);
                    },
                    setNativeControlDisabled: function (t) {
                      return (n.nativeControl.disabled = t);
                    },
                    setNativeControlAttr: function (t, e) {
                      n.nativeControl.setAttribute(t, e);
                    },
                  };
                return new f.MDCSwitchFoundation(t);
              }),
              Object.defineProperty(C.prototype, "ripple", {
                get: function () {
                  return this.rippleSurface;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "checked", {
                get: function () {
                  return this.nativeControl.checked;
                },
                set: function (t) {
                  this.foundation.setChecked(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "disabled", {
                get: function () {
                  return this.nativeControl.disabled;
                },
                set: function (t) {
                  this.foundation.setDisabled(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (C.prototype.createRipple = function () {
                var n = this,
                  t = f.MDCSwitchFoundation.strings.RIPPLE_SURFACE_SELECTOR,
                  i = this.root.querySelector(t),
                  e = o(o({}, p.MDCRipple.createAdapter(this)), {
                    addClass: function (t) {
                      return i.classList.add(t);
                    },
                    computeBoundingRect: function () {
                      return i.getBoundingClientRect();
                    },
                    deregisterInteractionHandler: function (t, e) {
                      n.nativeControl.removeEventListener(
                        t,
                        e,
                        l.applyPassive()
                      );
                    },
                    isSurfaceActive: function () {
                      return d.matches(n.nativeControl, ":active");
                    },
                    isUnbounded: function () {
                      return !0;
                    },
                    registerInteractionHandler: function (t, e) {
                      n.nativeControl.addEventListener(t, e, l.applyPassive());
                    },
                    removeClass: function (t) {
                      i.classList.remove(t);
                    },
                    updateCssVariable: function (t, e) {
                      i.style.setProperty(t, e);
                    },
                  });
                return new p.MDCRipple(this.root, new h.MDCRippleFoundation(e));
              }),
              Object.defineProperty(C.prototype, "nativeControl", {
                get: function () {
                  var t = f.MDCSwitchFoundation.strings.NATIVE_CONTROL_SELECTOR;
                  return this.root.querySelector(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              C);
          function C() {
            var t = (null !== c && c.apply(this, arguments)) || this;
            return (t.rippleSurface = t.createRipple()), t;
          }
          e.MDCSwitch = y;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCSwitch = void 0);
          var s,
            a = n(1),
            c = n(2),
            u = n(4),
            l = n(35),
            d = n(97),
            p =
              ((s = a.MDCComponent),
              r(h, s),
              (h.attachTo = function (t) {
                return new h(t);
              }),
              (h.prototype.initialize = function () {
                this.ripple = new c.MDCRipple(
                  this.root,
                  this.createRippleFoundation()
                );
              }),
              (h.prototype.initialSyncWithDOM = function () {
                var t = this.root.querySelector(l.Selectors.RIPPLE);
                if (!t)
                  throw new Error(
                    "Switch " + l.Selectors.RIPPLE + " element is required."
                  );
                (this.rippleElement = t),
                  this.root.addEventListener(
                    "click",
                    this.foundation.handleClick
                  ),
                  this.foundation.initFromDOM();
              }),
              (h.prototype.destroy = function () {
                s.prototype.destroy.call(this),
                  this.ripple.destroy(),
                  this.root.removeEventListener(
                    "click",
                    this.foundation.handleClick
                  );
              }),
              (h.prototype.getDefaultFoundation = function () {
                return new d.MDCSwitchRenderFoundation(this.createAdapter());
              }),
              (h.prototype.createAdapter = function () {
                var e = this;
                return {
                  addClass: function (t) {
                    e.root.classList.add(t);
                  },
                  hasClass: function (t) {
                    return e.root.classList.contains(t);
                  },
                  isDisabled: function () {
                    return e.root.disabled;
                  },
                  removeClass: function (t) {
                    e.root.classList.remove(t);
                  },
                  setAriaChecked: function (t) {
                    return e.root.setAttribute("aria-checked", t);
                  },
                  setDisabled: function (t) {
                    e.root.disabled = t;
                  },
                  state: this,
                };
              }),
              (h.prototype.createRippleFoundation = function () {
                return new u.MDCRippleFoundation(this.createRippleAdapter());
              }),
              (h.prototype.createRippleAdapter = function () {
                var t = this;
                return o(o({}, c.MDCRipple.createAdapter(this)), {
                  computeBoundingRect: function () {
                    return t.rippleElement.getBoundingClientRect();
                  },
                  isUnbounded: function () {
                    return !0;
                  },
                });
              }),
              h);
          function h(t, e) {
            var n = s.call(this, t, e) || this;
            return (n.root = t), n;
          }
          e.MDCSwitch = p;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            d =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              },
            o =
              (this && this.__read) ||
              function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var i,
                  r,
                  o = n.call(t),
                  s = [];
                try {
                  for (; (void 0 === e || 0 < e--) && !(i = o.next()).done; )
                    s.push(i.value);
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return s;
              },
            s =
              (this && this.__spreadArray) ||
              function (t, e) {
                for (var n = 0, i = e.length, r = t.length; n < i; n++, r++)
                  t[r] = e[n];
                return t;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCObserverFoundation = void 0);
          var a,
            c = n(0),
            u = n(217),
            l =
              ((a = c.MDCFoundation),
              r(p, a),
              (p.prototype.destroy = function () {
                a.prototype.destroy.call(this), this.unobserve();
              }),
              (p.prototype.observe = function (t, e) {
                var n,
                  i,
                  r = this,
                  o = [];
                try {
                  for (
                    var s = d(Object.keys(e)), a = s.next();
                    !a.done;
                    a = s.next()
                  ) {
                    var c = a.value,
                      u = e[c].bind(this);
                    o.push(this.observeProperty(t, c, u));
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    a && !a.done && (i = s.return) && i.call(s);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                function l() {
                  var e, t;
                  try {
                    for (var n = d(o), i = n.next(); !i.done; i = n.next())
                      (0, i.value)();
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      i && !i.done && (t = n.return) && t.call(n);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  r.unobserves.delete(l);
                }
                return this.unobserves.add(l), l;
              }),
              (p.prototype.observeProperty = function (t, e, n) {
                return u.observeProperty(t, e, n);
              }),
              (p.prototype.setObserversEnabled = function (t, e) {
                u.setObserversEnabled(t, e);
              }),
              (p.prototype.unobserve = function () {
                var e, t;
                try {
                  for (
                    var n = d(s([], o(this.unobserves))), i = n.next();
                    !i.done;
                    i = n.next()
                  )
                    (0, i.value)();
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }),
              p);
          function p(t) {
            var e = a.call(this, t) || this;
            return (e.unobserves = new Set()), e;
          }
          e.MDCObserverFoundation = l;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            h =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              },
            s =
              (this && this.__read) ||
              function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var i,
                  r,
                  o = n.call(t),
                  s = [];
                try {
                  for (; (void 0 === e || 0 < e--) && !(i = o.next()).done; )
                    s.push(i.value);
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    i && !i.done && (n = o.return) && n.call(o);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return s;
              },
            a =
              (this && this.__spreadArray) ||
              function (t, e) {
                for (var n = 0, i = e.length, r = t.length; n < i; n++, r++)
                  t[r] = e[n];
                return t;
              };
          function f(t, e, n) {
            var i = (function (t, s) {
              var n = new Map();
              l.has(t) ||
                l.set(t, {
                  isEnabled: !0,
                  getObservers: function (t) {
                    var e = n.get(t) || [];
                    return n.has(t) || n.set(t, e), e;
                  },
                  installedProperties: new Set(),
                });
              var a = l.get(t);
              if (a.installedProperties.has(s)) return a;
              var e = d(t, s) || {
                  configurable: !0,
                  enumerable: !0,
                  value: t[s],
                  writable: !0,
                },
                i = o({}, e),
                c = e.get,
                u = e.set;
              if ("value" in e) {
                delete i.value, delete i.writable;
                var r = e.value;
                (c = function () {
                  return r;
                }),
                  e.writable &&
                    (u = function (t) {
                      r = t;
                    });
              }
              c &&
                (i.get = function () {
                  return c.call(this);
                });
              u &&
                (i.set = function (t) {
                  var e,
                    n,
                    i = c ? c.call(this) : t;
                  if ((u.call(this, t), a.isEnabled && (!c || t !== i)))
                    try {
                      for (
                        var r = h(a.getObservers(s)), o = r.next();
                        !o.done;
                        o = r.next()
                      ) {
                        (0, o.value)(t, i);
                      }
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        o && !o.done && (n = r.return) && n.call(r);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                });
              return (
                a.installedProperties.add(s), Object.defineProperty(t, s, i), a
              );
            })(t, e).getObservers(e);
            return (
              i.push(n),
              function () {
                i.splice(i.indexOf(n), 1);
              }
            );
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setObserversEnabled =
              e.getDescriptor =
              e.observeProperty =
              e.mdcObserver =
                void 0),
            (e.mdcObserver = function (t) {
              void 0 === t && (t = function () {});
              var e,
                p = new WeakMap();
              return (
                r(n, (e = t)),
                (n.prototype.observe = function (t, e) {
                  var n,
                    i,
                    s = this,
                    a = [];
                  try {
                    for (
                      var r = h(Object.keys(e)), o = r.next();
                      !o.done;
                      o = r.next()
                    ) {
                      var c = o.value,
                        u = e[c].bind(this);
                      a.push(f(t, c, u));
                    }
                  } catch (t) {
                    n = { error: t };
                  } finally {
                    try {
                      o && !o.done && (i = r.return) && i.call(r);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  function l() {
                    var e, t;
                    try {
                      for (var n = h(a), i = n.next(); !i.done; i = n.next())
                        (0, i.value)();
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        i && !i.done && (t = n.return) && t.call(n);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                    var r = p.get(s) || [],
                      o = r.indexOf(l);
                    -1 < o && r.splice(o, 1);
                  }
                  var d = p.get(this);
                  return d || ((d = []), p.set(this, d)), d.push(l), l;
                }),
                (n.prototype.setObserversEnabled = function (t, e) {
                  c(t, e);
                }),
                (n.prototype.unobserve = function () {
                  var e,
                    t,
                    n = p.get(this) || [];
                  try {
                    for (
                      var i = h(a([], s(n))), r = i.next();
                      !r.done;
                      r = i.next()
                    )
                      (0, r.value)();
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      r && !r.done && (t = i.return) && t.call(i);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                }),
                n
              );
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
            }),
            (e.observeProperty = f);
          var l = new WeakMap();
          function d(t, e) {
            for (
              var n, i = t;
              i && !(n = Object.getOwnPropertyDescriptor(i, e));

            )
              i = Object.getPrototypeOf(i);
            return n;
          }
          function c(t, e) {
            var n = l.get(t);
            n && (n.isEnabled = e);
          }
          (e.getDescriptor = d), (e.setObserversEnabled = c);
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(219), e),
            r(n(220), e),
            r(n(108), e),
            r(n(107), e),
            r(n(224), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabBar = void 0);
          var s,
            a = n(1),
            c = n(98),
            u = n(101),
            l = n(38),
            d = n(107),
            p = d.MDCTabBarFoundation.strings,
            h = 0,
            f =
              ((s = a.MDCComponent),
              r(y, s),
              (y.attachTo = function (t) {
                return new y(t);
              }),
              Object.defineProperty(y.prototype, "focusOnActivate", {
                set: function (t) {
                  var e, n;
                  try {
                    for (
                      var i = o(this.tabList), r = i.next();
                      !r.done;
                      r = i.next()
                    )
                      r.value.focusOnActivate = t;
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      r && !r.done && (n = i.return) && n.call(i);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(y.prototype, "useAutomaticActivation", {
                set: function (t) {
                  this.foundation.setUseAutomaticActivation(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (y.prototype.initialize = function (t, e) {
                void 0 === t &&
                  (t = function (t) {
                    return new u.MDCTab(t);
                  }),
                  void 0 === e &&
                    (e = function (t) {
                      return new c.MDCTabScroller(t);
                    }),
                  (this.tabList = this.instantiateTabs(t)),
                  (this.tabScroller = this.instantiatetabScroller(e));
              }),
              (y.prototype.initialSyncWithDOM = function () {
                var e = this;
                (this.handleTabInteraction = function (t) {
                  e.foundation.handleTabInteraction(t);
                }),
                  (this.handleKeyDown = function (t) {
                    e.foundation.handleKeyDown(t);
                  }),
                  this.listen(
                    l.MDCTabFoundation.strings.INTERACTED_EVENT,
                    this.handleTabInteraction
                  ),
                  this.listen("keydown", this.handleKeyDown);
                for (var t = 0; t < this.tabList.length; t++)
                  if (this.tabList[t].active) {
                    this.scrollIntoView(t);
                    break;
                  }
              }),
              (y.prototype.destroy = function () {
                var e, t;
                s.prototype.destroy.call(this),
                  this.unlisten(
                    l.MDCTabFoundation.strings.INTERACTED_EVENT,
                    this.handleTabInteraction
                  ),
                  this.unlisten("keydown", this.handleKeyDown);
                try {
                  for (
                    var n = o(this.tabList), i = n.next();
                    !i.done;
                    i = n.next()
                  )
                    i.value.destroy();
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this.tabScroller && this.tabScroller.destroy();
              }),
              (y.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    scrollTo: function (t) {
                      n.tabScroller.scrollTo(t);
                    },
                    incrementScroll: function (t) {
                      n.tabScroller.incrementScroll(t);
                    },
                    getScrollPosition: function () {
                      return n.tabScroller.getScrollPosition();
                    },
                    getScrollContentWidth: function () {
                      return n.tabScroller.getScrollContentWidth();
                    },
                    getOffsetWidth: function () {
                      return n.root.offsetWidth;
                    },
                    isRTL: function () {
                      return (
                        "rtl" ===
                        window
                          .getComputedStyle(n.root)
                          .getPropertyValue("direction")
                      );
                    },
                    setActiveTab: function (t) {
                      n.foundation.activateTab(t);
                    },
                    activateTabAtIndex: function (t, e) {
                      n.tabList[t].activate(e);
                    },
                    deactivateTabAtIndex: function (t) {
                      n.tabList[t].deactivate();
                    },
                    focusTabAtIndex: function (t) {
                      n.tabList[t].focus();
                    },
                    getTabIndicatorClientRectAtIndex: function (t) {
                      return n.tabList[t].computeIndicatorClientRect();
                    },
                    getTabDimensionsAtIndex: function (t) {
                      return n.tabList[t].computeDimensions();
                    },
                    getPreviousActiveTabIndex: function () {
                      for (var t = 0; t < n.tabList.length; t++)
                        if (n.tabList[t].active) return t;
                      return -1;
                    },
                    getFocusedTabIndex: function () {
                      var t = n.getTabElements(),
                        e = document.activeElement;
                      return t.indexOf(e);
                    },
                    getIndexOfTabById: function (t) {
                      for (var e = 0; e < n.tabList.length; e++)
                        if (n.tabList[e].id === t) return e;
                      return -1;
                    },
                    getTabListLength: function () {
                      return n.tabList.length;
                    },
                    notifyTabActivated: function (t) {
                      return n.emit(p.TAB_ACTIVATED_EVENT, { index: t }, !0);
                    },
                  };
                return new d.MDCTabBarFoundation(t);
              }),
              (y.prototype.activateTab = function (t) {
                this.foundation.activateTab(t);
              }),
              (y.prototype.scrollIntoView = function (t) {
                this.foundation.scrollIntoView(t);
              }),
              (y.prototype.getTabElements = function () {
                return [].slice.call(
                  this.root.querySelectorAll(p.TAB_SELECTOR)
                );
              }),
              (y.prototype.instantiateTabs = function (e) {
                return this.getTabElements().map(function (t) {
                  return (t.id = t.id || "mdc-tab-" + ++h), e(t);
                });
              }),
              (y.prototype.instantiatetabScroller = function (t) {
                var e = this.root.querySelector(p.TAB_SCROLLER_SELECTOR);
                return e ? t(e) : null;
              }),
              y);
          function y() {
            return (null !== s && s.apply(this, arguments)) || this;
          }
          e.MDCTabBar = f;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabScrollerRTLDefault = void 0);
          var o,
            s = n(37),
            a =
              ((o = s.MDCTabScrollerRTL),
              r(c, o),
              (c.prototype.getScrollPositionRTL = function () {
                var t = this.adapter.getScrollAreaScrollLeft(),
                  e = this.calculateScrollEdges().right;
                return Math.round(e - t);
              }),
              (c.prototype.scrollToRTL = function (t) {
                var e = this.calculateScrollEdges(),
                  n = this.adapter.getScrollAreaScrollLeft(),
                  i = this.clampScrollValue(e.right - t);
                return { finalScrollPosition: i, scrollDelta: i - n };
              }),
              (c.prototype.incrementScrollRTL = function (t) {
                var e = this.adapter.getScrollAreaScrollLeft(),
                  n = this.clampScrollValue(e - t);
                return { finalScrollPosition: n, scrollDelta: n - e };
              }),
              (c.prototype.getAnimatingScrollPosition = function (t) {
                return t;
              }),
              (c.prototype.calculateScrollEdges = function () {
                return {
                  left: 0,
                  right:
                    this.adapter.getScrollContentOffsetWidth() -
                    this.adapter.getScrollAreaOffsetWidth(),
                };
              }),
              (c.prototype.clampScrollValue = function (t) {
                var e = this.calculateScrollEdges();
                return Math.min(Math.max(e.left, t), e.right);
              }),
              c);
          function c() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          (e.MDCTabScrollerRTLDefault = a), (e.default = a);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabScrollerRTLNegative = void 0);
          var o,
            s = n(37),
            a =
              ((o = s.MDCTabScrollerRTL),
              r(c, o),
              (c.prototype.getScrollPositionRTL = function (t) {
                var e = this.adapter.getScrollAreaScrollLeft();
                return Math.round(t - e);
              }),
              (c.prototype.scrollToRTL = function (t) {
                var e = this.adapter.getScrollAreaScrollLeft(),
                  n = this.clampScrollValue(-t);
                return { finalScrollPosition: n, scrollDelta: n - e };
              }),
              (c.prototype.incrementScrollRTL = function (t) {
                var e = this.adapter.getScrollAreaScrollLeft(),
                  n = this.clampScrollValue(e - t);
                return { finalScrollPosition: n, scrollDelta: n - e };
              }),
              (c.prototype.getAnimatingScrollPosition = function (t, e) {
                return t - e;
              }),
              (c.prototype.calculateScrollEdges = function () {
                var t = this.adapter.getScrollContentOffsetWidth();
                return {
                  left: this.adapter.getScrollAreaOffsetWidth() - t,
                  right: 0,
                };
              }),
              (c.prototype.clampScrollValue = function (t) {
                var e = this.calculateScrollEdges();
                return Math.max(Math.min(e.right, t), e.left);
              }),
              c);
          function c() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          (e.MDCTabScrollerRTLNegative = a), (e.default = a);
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTabScrollerRTLReverse = void 0);
          var o,
            s = n(37),
            a =
              ((o = s.MDCTabScrollerRTL),
              r(c, o),
              (c.prototype.getScrollPositionRTL = function (t) {
                var e = this.adapter.getScrollAreaScrollLeft();
                return Math.round(e - t);
              }),
              (c.prototype.scrollToRTL = function (t) {
                var e = this.adapter.getScrollAreaScrollLeft(),
                  n = this.clampScrollValue(t);
                return { finalScrollPosition: n, scrollDelta: e - n };
              }),
              (c.prototype.incrementScrollRTL = function (t) {
                var e = this.adapter.getScrollAreaScrollLeft(),
                  n = this.clampScrollValue(e + t);
                return { finalScrollPosition: n, scrollDelta: e - n };
              }),
              (c.prototype.getAnimatingScrollPosition = function (t, e) {
                return t + e;
              }),
              (c.prototype.calculateScrollEdges = function () {
                return {
                  left:
                    this.adapter.getScrollContentOffsetWidth() -
                    this.adapter.getScrollAreaOffsetWidth(),
                  right: 0,
                };
              }),
              (c.prototype.clampScrollValue = function (t) {
                var e = this.calculateScrollEdges();
                return Math.min(Math.max(e.right, t), e.left);
              }),
              c);
          function c() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          (e.MDCTabScrollerRTLReverse = a), (e.default = a);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(226), e),
            r(n(102), e),
            r(n(104), e),
            r(n(17), e),
            r(n(103), e),
            r(n(105), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            o =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      i(e, t, n);
                return r(e, t), e;
              },
            s =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.util = void 0);
          var a = o(n(100));
          (e.util = a),
            s(n(228), e),
            s(n(98), e),
            s(n(36), e),
            s(n(99), e),
            s(n(229), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(231), e),
            r(n(101), e),
            r(n(106), e),
            r(n(38), e),
            r(n(232), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(234), e),
            r(n(235), e),
            r(n(40), e),
            r(n(111), e),
            r(n(236), e),
            r(n(237), e),
            r(n(239), e),
            r(n(241), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            s =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            a =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            c =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var n in t)
                    "default" !== n &&
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      s(e, t, n);
                return a(e, t), e;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTextField = void 0);
          var u,
            l = n(1),
            d = n(5),
            p = c(n(3)),
            g = n(27),
            _ = n(29),
            m = n(30),
            v = n(2),
            h = n(4),
            T = n(109),
            b = n(39),
            A = n(40),
            f = n(111),
            O = n(112),
            I = n(41),
            S = n(114),
            y =
              ((u = l.MDCComponent),
              r(C, u),
              (C.attachTo = function (t) {
                return new C(t);
              }),
              (C.prototype.initialize = function (t, e, n, i, r, o, s) {
                void 0 === t &&
                  (t = function (t, e) {
                    return new v.MDCRipple(t, e);
                  }),
                  void 0 === e &&
                    (e = function (t) {
                      return new _.MDCLineRipple(t);
                    }),
                  void 0 === n &&
                    (n = function (t) {
                      return new O.MDCTextFieldHelperText(t);
                    }),
                  void 0 === i &&
                    (i = function (t) {
                      return new T.MDCTextFieldCharacterCounter(t);
                    }),
                  void 0 === r &&
                    (r = function (t) {
                      return new S.MDCTextFieldIcon(t);
                    }),
                  void 0 === o &&
                    (o = function (t) {
                      return new g.MDCFloatingLabel(t);
                    }),
                  void 0 === s &&
                    (s = function (t) {
                      return new m.MDCNotchedOutline(t);
                    }),
                  (this.input = this.root.querySelector(
                    A.strings.INPUT_SELECTOR
                  ));
                var a = this.root.querySelector(A.strings.LABEL_SELECTOR);
                this.label = a ? o(a) : null;
                var c = this.root.querySelector(A.strings.LINE_RIPPLE_SELECTOR);
                this.lineRipple = c ? e(c) : null;
                var u = this.root.querySelector(A.strings.OUTLINE_SELECTOR);
                this.outline = u ? s(u) : null;
                var l = I.MDCTextFieldHelperTextFoundation.strings,
                  d = this.root.nextElementSibling,
                  p = d && d.classList.contains(A.cssClasses.HELPER_LINE),
                  h = p && d && d.querySelector(l.ROOT_SELECTOR);
                this.helperText = h ? n(h) : null;
                var f = b.MDCTextFieldCharacterCounterFoundation.strings,
                  y = this.root.querySelector(f.ROOT_SELECTOR);
                !y && p && d && (y = d.querySelector(f.ROOT_SELECTOR)),
                  (this.characterCounter = y ? i(y) : null);
                var C = this.root.querySelector(
                  A.strings.LEADING_ICON_SELECTOR
                );
                this.leadingIcon = C ? r(C) : null;
                var E = this.root.querySelector(
                  A.strings.TRAILING_ICON_SELECTOR
                );
                (this.trailingIcon = E ? r(E) : null),
                  (this.prefix = this.root.querySelector(
                    A.strings.PREFIX_SELECTOR
                  )),
                  (this.suffix = this.root.querySelector(
                    A.strings.SUFFIX_SELECTOR
                  )),
                  (this.ripple = this.createRipple(t));
              }),
              (C.prototype.destroy = function () {
                this.ripple && this.ripple.destroy(),
                  this.lineRipple && this.lineRipple.destroy(),
                  this.helperText && this.helperText.destroy(),
                  this.characterCounter && this.characterCounter.destroy(),
                  this.leadingIcon && this.leadingIcon.destroy(),
                  this.trailingIcon && this.trailingIcon.destroy(),
                  this.label && this.label.destroy(),
                  this.outline && this.outline.destroy(),
                  u.prototype.destroy.call(this);
              }),
              (C.prototype.initialSyncWithDOM = function () {
                this.disabled = this.input.disabled;
              }),
              Object.defineProperty(C.prototype, "value", {
                get: function () {
                  return this.foundation.getValue();
                },
                set: function (t) {
                  this.foundation.setValue(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "disabled", {
                get: function () {
                  return this.foundation.isDisabled();
                },
                set: function (t) {
                  this.foundation.setDisabled(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "valid", {
                get: function () {
                  return this.foundation.isValid();
                },
                set: function (t) {
                  this.foundation.setValid(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "required", {
                get: function () {
                  return this.input.required;
                },
                set: function (t) {
                  this.input.required = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "pattern", {
                get: function () {
                  return this.input.pattern;
                },
                set: function (t) {
                  this.input.pattern = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "minLength", {
                get: function () {
                  return this.input.minLength;
                },
                set: function (t) {
                  this.input.minLength = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "maxLength", {
                get: function () {
                  return this.input.maxLength;
                },
                set: function (t) {
                  t < 0
                    ? this.input.removeAttribute("maxLength")
                    : (this.input.maxLength = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "min", {
                get: function () {
                  return this.input.min;
                },
                set: function (t) {
                  this.input.min = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "max", {
                get: function () {
                  return this.input.max;
                },
                set: function (t) {
                  this.input.max = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "step", {
                get: function () {
                  return this.input.step;
                },
                set: function (t) {
                  this.input.step = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "helperTextContent", {
                set: function (t) {
                  this.foundation.setHelperTextContent(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "leadingIconAriaLabel", {
                set: function (t) {
                  this.foundation.setLeadingIconAriaLabel(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "leadingIconContent", {
                set: function (t) {
                  this.foundation.setLeadingIconContent(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "trailingIconAriaLabel", {
                set: function (t) {
                  this.foundation.setTrailingIconAriaLabel(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "trailingIconContent", {
                set: function (t) {
                  this.foundation.setTrailingIconContent(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "useNativeValidation", {
                set: function (t) {
                  this.foundation.setUseNativeValidation(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "prefixText", {
                get: function () {
                  return this.prefix ? this.prefix.textContent : null;
                },
                set: function (t) {
                  this.prefix && (this.prefix.textContent = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(C.prototype, "suffixText", {
                get: function () {
                  return this.suffix ? this.suffix.textContent : null;
                },
                set: function (t) {
                  this.suffix && (this.suffix.textContent = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (C.prototype.focus = function () {
                this.input.focus();
              }),
              (C.prototype.layout = function () {
                var t = this.foundation.shouldFloat;
                this.foundation.notchOutline(t);
              }),
              (C.prototype.getDefaultFoundation = function () {
                var t = o(
                  o(
                    o(
                      o(
                        o({}, this.getRootAdapterMethods()),
                        this.getInputAdapterMethods()
                      ),
                      this.getLabelAdapterMethods()
                    ),
                    this.getLineRippleAdapterMethods()
                  ),
                  this.getOutlineAdapterMethods()
                );
                return new f.MDCTextFieldFoundation(t, this.getFoundationMap());
              }),
              (C.prototype.getRootAdapterMethods = function () {
                var n = this;
                return {
                  addClass: function (t) {
                    return n.root.classList.add(t);
                  },
                  removeClass: function (t) {
                    return n.root.classList.remove(t);
                  },
                  hasClass: function (t) {
                    return n.root.classList.contains(t);
                  },
                  registerTextFieldInteractionHandler: function (t, e) {
                    n.listen(t, e);
                  },
                  deregisterTextFieldInteractionHandler: function (t, e) {
                    n.unlisten(t, e);
                  },
                  registerValidationAttributeChangeHandler: function (e) {
                    var t = new MutationObserver(function (t) {
                      return e(
                        (function (t) {
                          return t
                            .map(function (t) {
                              return t.attributeName;
                            })
                            .filter(function (t) {
                              return t;
                            });
                        })(t)
                      );
                    });
                    return t.observe(n.input, { attributes: !0 }), t;
                  },
                  deregisterValidationAttributeChangeHandler: function (t) {
                    t.disconnect();
                  },
                };
              }),
              (C.prototype.getInputAdapterMethods = function () {
                var n = this;
                return {
                  getNativeInput: function () {
                    return n.input;
                  },
                  setInputAttr: function (t, e) {
                    n.input.setAttribute(t, e);
                  },
                  removeInputAttr: function (t) {
                    n.input.removeAttribute(t);
                  },
                  isFocused: function () {
                    return document.activeElement === n.input;
                  },
                  registerInputInteractionHandler: function (t, e) {
                    n.input.addEventListener(t, e, d.applyPassive());
                  },
                  deregisterInputInteractionHandler: function (t, e) {
                    n.input.removeEventListener(t, e, d.applyPassive());
                  },
                };
              }),
              (C.prototype.getLabelAdapterMethods = function () {
                var e = this;
                return {
                  floatLabel: function (t) {
                    e.label && e.label.float(t);
                  },
                  getLabelWidth: function () {
                    return e.label ? e.label.getWidth() : 0;
                  },
                  hasLabel: function () {
                    return Boolean(e.label);
                  },
                  shakeLabel: function (t) {
                    e.label && e.label.shake(t);
                  },
                  setLabelRequired: function (t) {
                    e.label && e.label.setRequired(t);
                  },
                };
              }),
              (C.prototype.getLineRippleAdapterMethods = function () {
                var e = this;
                return {
                  activateLineRipple: function () {
                    e.lineRipple && e.lineRipple.activate();
                  },
                  deactivateLineRipple: function () {
                    e.lineRipple && e.lineRipple.deactivate();
                  },
                  setLineRippleTransformOrigin: function (t) {
                    e.lineRipple && e.lineRipple.setRippleCenter(t);
                  },
                };
              }),
              (C.prototype.getOutlineAdapterMethods = function () {
                var e = this;
                return {
                  closeOutline: function () {
                    e.outline && e.outline.closeNotch();
                  },
                  hasOutline: function () {
                    return Boolean(e.outline);
                  },
                  notchOutline: function (t) {
                    e.outline && e.outline.notch(t);
                  },
                };
              }),
              (C.prototype.getFoundationMap = function () {
                return {
                  characterCounter: this.characterCounter
                    ? this.characterCounter.foundationForTextField
                    : void 0,
                  helperText: this.helperText
                    ? this.helperText.foundationForTextField
                    : void 0,
                  leadingIcon: this.leadingIcon
                    ? this.leadingIcon.foundationForTextField
                    : void 0,
                  trailingIcon: this.trailingIcon
                    ? this.trailingIcon.foundationForTextField
                    : void 0,
                };
              }),
              (C.prototype.createRipple = function (t) {
                var n = this,
                  e = this.root.classList.contains(A.cssClasses.TEXTAREA),
                  i = this.root.classList.contains(A.cssClasses.OUTLINED);
                if (e || i) return null;
                var r = o(o({}, v.MDCRipple.createAdapter(this)), {
                  isSurfaceActive: function () {
                    return p.matches(n.input, ":active");
                  },
                  registerInteractionHandler: function (t, e) {
                    n.input.addEventListener(t, e, d.applyPassive());
                  },
                  deregisterInteractionHandler: function (t, e) {
                    n.input.removeEventListener(t, e, d.applyPassive());
                  },
                });
                return t(this.root, new h.MDCRippleFoundation(r));
              }),
              C);
          function C() {
            return (null !== u && u.apply(this, arguments)) || this;
          }
          e.MDCTextField = y;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.characterCountStrings = e.characterCountCssClasses = void 0),
            r(n(238), e),
            r(n(109), e),
            r(n(39), e);
          var o = n(110);
          Object.defineProperty(e, "characterCountCssClasses", {
            enumerable: !0,
            get: function () {
              return o.cssClasses;
            },
          }),
            Object.defineProperty(e, "characterCountStrings", {
              enumerable: !0,
              get: function () {
                return o.strings;
              },
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.helperTextStrings = e.helperTextCssClasses = void 0),
            r(n(240), e),
            r(n(112), e),
            r(n(41), e);
          var o = n(113);
          Object.defineProperty(e, "helperTextCssClasses", {
            enumerable: !0,
            get: function () {
              return o.cssClasses;
            },
          }),
            Object.defineProperty(e, "helperTextStrings", {
              enumerable: !0,
              get: function () {
                return o.strings;
              },
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.iconStrings = e.iconCssClasses = void 0),
            r(n(242), e),
            r(n(114), e),
            r(n(115), e);
          var o = n(116);
          Object.defineProperty(e, "iconCssClasses", {
            enumerable: !0,
            get: function () {
              return o.cssClasses;
            },
          }),
            Object.defineProperty(e, "iconStrings", {
              enumerable: !0,
              get: function () {
                return o.strings;
              },
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(244), e),
            r(n(245), e),
            r(n(117), e),
            r(n(42), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTooltip = void 0);
          var o,
            s = n(1),
            a = n(42),
            c = n(117),
            u =
              ((o = s.MDCComponent),
              r(l, o),
              (l.attachTo = function (t) {
                return new l(t);
              }),
              (l.prototype.initialize = function () {
                var t = this.root.getAttribute("id");
                if (!t)
                  throw new Error(
                    "MDCTooltip: Tooltip component must have an id."
                  );
                var e =
                  document.querySelector('[data-tooltip-id="' + t + '"]') ||
                  document.querySelector('[aria-describedby="' + t + '"]');
                if (!e)
                  throw new Error(
                    "MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id]."
                  );
                this.anchorElem = e;
              }),
              (l.prototype.initialSyncWithDOM = function () {
                var e = this;
                (this.isTooltipRich = this.foundation.isRich()),
                  (this.isTooltipPersistent = this.foundation.isPersistent()),
                  (this.handleMouseEnter = function () {
                    e.foundation.handleAnchorMouseEnter();
                  }),
                  (this.handleFocus = function (t) {
                    e.foundation.handleAnchorFocus(t);
                  }),
                  (this.handleMouseLeave = function () {
                    e.foundation.handleAnchorMouseLeave();
                  }),
                  (this.handleTransitionEnd = function () {
                    e.foundation.handleTransitionEnd();
                  }),
                  (this.handleClick = function () {
                    e.foundation.handleAnchorClick();
                  }),
                  (this.handleTouchstart = function () {
                    e.foundation.handleAnchorTouchstart();
                  }),
                  (this.handleTouchend = function () {
                    e.foundation.handleAnchorTouchend();
                  }),
                  this.isTooltipRich && this.isTooltipPersistent
                    ? this.anchorElem.addEventListener(
                        "click",
                        this.handleClick
                      )
                    : (this.anchorElem.addEventListener(
                        "mouseenter",
                        this.handleMouseEnter
                      ),
                      this.anchorElem.addEventListener(
                        "focus",
                        this.handleFocus
                      ),
                      this.anchorElem.addEventListener(
                        "mouseleave",
                        this.handleMouseLeave
                      ),
                      this.anchorElem.addEventListener(
                        "touchstart",
                        this.handleTouchstart
                      ),
                      this.anchorElem.addEventListener(
                        "touchend",
                        this.handleTouchend
                      )),
                  this.listen("transitionend", this.handleTransitionEnd);
              }),
              (l.prototype.destroy = function () {
                this.anchorElem &&
                  (this.isTooltipRich && this.isTooltipPersistent
                    ? this.anchorElem.removeEventListener(
                        "click",
                        this.handleClick
                      )
                    : (this.anchorElem.removeEventListener(
                        "mouseenter",
                        this.handleMouseEnter
                      ),
                      this.anchorElem.removeEventListener(
                        "focus",
                        this.handleFocus
                      ),
                      this.anchorElem.removeEventListener(
                        "mouseleave",
                        this.handleMouseLeave
                      ),
                      this.anchorElem.removeEventListener(
                        "touchstart",
                        this.handleTouchstart
                      ),
                      this.anchorElem.removeEventListener(
                        "touchend",
                        this.handleTouchend
                      ))),
                  this.unlisten("transitionend", this.handleTransitionEnd),
                  o.prototype.destroy.call(this);
              }),
              (l.prototype.setTooltipPosition = function (t) {
                this.foundation.setTooltipPosition(t);
              }),
              (l.prototype.setAnchorBoundaryType = function (t) {
                this.foundation.setAnchorBoundaryType(t);
              }),
              (l.prototype.setShowDelay = function (t) {
                this.foundation.setShowDelay(t);
              }),
              (l.prototype.setHideDelay = function (t) {
                this.foundation.setHideDelay(t);
              }),
              (l.prototype.hide = function () {
                this.foundation.hide();
              }),
              (l.prototype.isShown = function () {
                return this.foundation.isShown();
              }),
              (l.prototype.attachScrollHandler = function (t) {
                this.foundation.attachScrollHandler(t);
              }),
              (l.prototype.removeScrollHandler = function (t) {
                this.foundation.removeScrollHandler(t);
              }),
              (l.prototype.getDefaultFoundation = function () {
                var r = this,
                  t = {
                    getAttribute: function (t) {
                      return r.root.getAttribute(t);
                    },
                    setAttribute: function (t, e) {
                      r.root.setAttribute(t, e);
                    },
                    removeAttribute: function (t) {
                      r.root.removeAttribute(t);
                    },
                    addClass: function (t) {
                      r.root.classList.add(t);
                    },
                    hasClass: function (t) {
                      return r.root.classList.contains(t);
                    },
                    removeClass: function (t) {
                      r.root.classList.remove(t);
                    },
                    getComputedStyleProperty: function (t) {
                      return window
                        .getComputedStyle(r.root)
                        .getPropertyValue(t);
                    },
                    setStyleProperty: function (t, e) {
                      r.root.style.setProperty(t, e);
                    },
                    setSurfaceAnimationStyleProperty: function (t, e) {
                      var n = r.root.querySelector(
                        "." + a.CssClasses.SURFACE_ANIMATION
                      );
                      null == n || n.style.setProperty(t, e);
                    },
                    getViewportWidth: function () {
                      return window.innerWidth;
                    },
                    getViewportHeight: function () {
                      return window.innerHeight;
                    },
                    getTooltipSize: function () {
                      return {
                        width: r.root.offsetWidth,
                        height: r.root.offsetHeight,
                      };
                    },
                    getAnchorBoundingRect: function () {
                      return r.anchorElem
                        ? r.anchorElem.getBoundingClientRect()
                        : null;
                    },
                    getParentBoundingRect: function () {
                      var t, e;
                      return null !==
                        (e =
                          null === (t = r.root.parentElement) || void 0 === t
                            ? void 0
                            : t.getBoundingClientRect()) && void 0 !== e
                        ? e
                        : null;
                    },
                    getAnchorAttribute: function (t) {
                      return r.anchorElem ? r.anchorElem.getAttribute(t) : null;
                    },
                    setAnchorAttribute: function (t, e) {
                      var n;
                      null === (n = r.anchorElem) ||
                        void 0 === n ||
                        n.setAttribute(t, e);
                    },
                    isRTL: function () {
                      return "rtl" === getComputedStyle(r.root).direction;
                    },
                    anchorContainsElement: function (t) {
                      var e;
                      return !!(null === (e = r.anchorElem) || void 0 === e
                        ? void 0
                        : e.contains(t));
                    },
                    tooltipContainsElement: function (t) {
                      return r.root.contains(t);
                    },
                    focusAnchorElement: function () {
                      var t;
                      null === (t = r.anchorElem) || void 0 === t || t.focus();
                    },
                    registerEventHandler: function (t, e) {
                      r.root instanceof HTMLElement &&
                        r.root.addEventListener(t, e);
                    },
                    deregisterEventHandler: function (t, e) {
                      r.root instanceof HTMLElement &&
                        r.root.removeEventListener(t, e);
                    },
                    registerAnchorEventHandler: function (t, e) {
                      var n;
                      null === (n = r.anchorElem) ||
                        void 0 === n ||
                        n.addEventListener(t, e);
                    },
                    deregisterAnchorEventHandler: function (t, e) {
                      var n;
                      null === (n = r.anchorElem) ||
                        void 0 === n ||
                        n.removeEventListener(t, e);
                    },
                    registerDocumentEventHandler: function (t, e) {
                      document.body.addEventListener(t, e);
                    },
                    deregisterDocumentEventHandler: function (t, e) {
                      document.body.removeEventListener(t, e);
                    },
                    registerWindowEventHandler: function (t, e) {
                      window.addEventListener(t, e);
                    },
                    deregisterWindowEventHandler: function (t, e) {
                      window.removeEventListener(t, e);
                    },
                    notifyHidden: function () {
                      r.emit(a.events.HIDDEN, {});
                    },
                    getTooltipCaretBoundingRect: function () {
                      var t = r.root.querySelector(
                        "." + a.CssClasses.TOOLTIP_CARET_TOP
                      );
                      return t ? t.getBoundingClientRect() : null;
                    },
                    setTooltipCaretStyle: function (t, e) {
                      var n = r.root.querySelector(
                          "." + a.CssClasses.TOOLTIP_CARET_TOP
                        ),
                        i = r.root.querySelector(
                          "." + a.CssClasses.TOOLTIP_CARET_BOTTOM
                        );
                      n &&
                        i &&
                        (n.style.setProperty(t, e), i.style.setProperty(t, e));
                    },
                    clearTooltipCaretStyles: function () {
                      var t = r.root.querySelector(
                          "." + a.CssClasses.TOOLTIP_CARET_TOP
                        ),
                        e = r.root.querySelector(
                          "." + a.CssClasses.TOOLTIP_CARET_BOTTOM
                        );
                      t &&
                        e &&
                        (t.removeAttribute("style"),
                        e.removeAttribute("style"));
                    },
                    getActiveElement: function () {
                      return document.activeElement;
                    },
                  };
                return new c.MDCTooltipFoundation(t);
              }),
              l);
          function l() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.MDCTooltip = u;
        },
        function (t, e, n) {
          "use strict";
          var i =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, n, i) {
                    void 0 === i && (i = n),
                      Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      });
                  }
                : function (t, e, n, i) {
                    void 0 === i && (i = n), (t[i] = e[n]);
                  }),
            r =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var n in t)
                  "default" === n ||
                    Object.prototype.hasOwnProperty.call(e, n) ||
                    i(e, t, n);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(n(247), e),
            r(n(248), e),
            r(n(9), e),
            r(n(44), e),
            r(n(118), e),
            r(n(119), e),
            r(n(43), e);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__values) ||
              function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && i >= t.length && (t = void 0),
                        { value: t && t[i++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MDCTopAppBar = void 0);
          var s,
            a = n(1),
            c = n(2),
            u = n(9),
            l = n(118),
            d = n(119),
            p = n(43),
            h =
              ((s = a.MDCComponent),
              r(f, s),
              (f.attachTo = function (t) {
                return new f(t);
              }),
              (f.prototype.initialize = function (n) {
                void 0 === n &&
                  (n = function (t) {
                    return c.MDCRipple.attachTo(t);
                  }),
                  (this.navIcon = this.root.querySelector(
                    u.strings.NAVIGATION_ICON_SELECTOR
                  ));
                var t = [].slice.call(
                  this.root.querySelectorAll(u.strings.ACTION_ITEM_SELECTOR)
                );
                this.navIcon && t.push(this.navIcon),
                  (this.iconRipples = t.map(function (t) {
                    var e = n(t);
                    return (e.unbounded = !0), e;
                  })),
                  (this.scrollTarget = window);
              }),
              (f.prototype.initialSyncWithDOM = function () {
                (this.handleNavigationClick =
                  this.foundation.handleNavigationClick.bind(this.foundation)),
                  (this.handleWindowResize =
                    this.foundation.handleWindowResize.bind(this.foundation)),
                  (this.handleTargetScroll =
                    this.foundation.handleTargetScroll.bind(this.foundation)),
                  this.scrollTarget.addEventListener(
                    "scroll",
                    this.handleTargetScroll
                  ),
                  this.navIcon &&
                    this.navIcon.addEventListener(
                      "click",
                      this.handleNavigationClick
                    );
                var t = this.root.classList.contains(u.cssClasses.FIXED_CLASS);
                this.root.classList.contains(u.cssClasses.SHORT_CLASS) ||
                  t ||
                  window.addEventListener("resize", this.handleWindowResize);
              }),
              (f.prototype.destroy = function () {
                var e, t;
                try {
                  for (
                    var n = o(this.iconRipples), i = n.next();
                    !i.done;
                    i = n.next()
                  )
                    i.value.destroy();
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this.scrollTarget.removeEventListener(
                  "scroll",
                  this.handleTargetScroll
                ),
                  this.navIcon &&
                    this.navIcon.removeEventListener(
                      "click",
                      this.handleNavigationClick
                    );
                var r = this.root.classList.contains(u.cssClasses.FIXED_CLASS);
                this.root.classList.contains(u.cssClasses.SHORT_CLASS) ||
                  r ||
                  window.removeEventListener("resize", this.handleWindowResize),
                  s.prototype.destroy.call(this);
              }),
              (f.prototype.setScrollTarget = function (t) {
                this.scrollTarget.removeEventListener(
                  "scroll",
                  this.handleTargetScroll
                ),
                  (this.scrollTarget = t),
                  (this.handleTargetScroll =
                    this.foundation.handleTargetScroll.bind(this.foundation)),
                  this.scrollTarget.addEventListener(
                    "scroll",
                    this.handleTargetScroll
                  );
              }),
              (f.prototype.getDefaultFoundation = function () {
                var n = this,
                  t = {
                    hasClass: function (t) {
                      return n.root.classList.contains(t);
                    },
                    addClass: function (t) {
                      return n.root.classList.add(t);
                    },
                    removeClass: function (t) {
                      return n.root.classList.remove(t);
                    },
                    setStyle: function (t, e) {
                      return n.root.style.setProperty(t, e);
                    },
                    getTopAppBarHeight: function () {
                      return n.root.clientHeight;
                    },
                    notifyNavigationIconClicked: function () {
                      return n.emit(u.strings.NAVIGATION_EVENT, {});
                    },
                    getViewportScrollY: function () {
                      var t = n.scrollTarget,
                        e = n.scrollTarget;
                      return void 0 !== t.pageYOffset
                        ? t.pageYOffset
                        : e.scrollTop;
                    },
                    getTotalActionItems: function () {
                      return n.root.querySelectorAll(
                        u.strings.ACTION_ITEM_SELECTOR
                      ).length;
                    },
                  };
                return this.root.classList.contains(u.cssClasses.SHORT_CLASS)
                  ? new d.MDCShortTopAppBarFoundation(t)
                  : this.root.classList.contains(u.cssClasses.FIXED_CLASS)
                  ? new l.MDCFixedTopAppBarFoundation(t)
                  : new p.MDCTopAppBarFoundation(t);
              }),
              f);
          function f() {
            return (null !== s && s.apply(this, arguments)) || this;
          }
          e.MDCTopAppBar = h;
        },
      ]),
    (r.c = i),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 120))
  );
  function r(t) {
    if (i[t]) return i[t].exports;
    var e = (i[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  var n, i;
});
