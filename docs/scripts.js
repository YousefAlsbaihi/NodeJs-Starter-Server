/*!
 * Bootstrap v5.2.1 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e() }(this, (function () { "use strict"; const t = "transitionend", e = t => { let e = t.getAttribute("data-bs-target"); if (!e || "#" === e) { let i = t.getAttribute("href"); if (!i || !i.includes("#") && !i.startsWith(".")) return null; i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null } return e }, i = t => { const i = e(t); return i && document.querySelector(i) ? i : null }, n = t => { const i = e(t); return i ? document.querySelector(i) : null }, s = e => { e.dispatchEvent(new Event(t)) }, o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null, a = t => { if (!o(t) || 0 === t.getClientRects().length) return !1; const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"), i = t.closest("details:not([open])"); if (!i) return e; if (i !== t) { const e = t.closest("summary"); if (e && e.parentNode !== i) return !1; if (null === e) return !1 } return e }, l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), c = t => { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { const e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null }, h = () => { }, d = t => { t.offsetHeight }, u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [], p = () => "rtl" === document.documentElement.dir, g = t => { var e; e = () => { const e = u(); if (e) { const i = t.NAME, n = e.fn[i]; e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface) } }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (() => { for (const t of f) t() })), f.push(e)) : e() }, m = t => { "function" == typeof t && t() }, _ = (e, i, n = !0) => { if (!n) return void m(e); const o = (t => { if (!t) return 0; let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t); const n = Number.parseFloat(e), s = Number.parseFloat(i); return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0 })(i) + 5; let r = !1; const a = ({ target: n }) => { n === i && (r = !0, i.removeEventListener(t, a), m(e)) }; i.addEventListener(t, a), setTimeout((() => { r || s(i) }), o) }, b = (t, e, i, n) => { const s = t.length; let o = t.indexOf(e); return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]) }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {}; let E = 1; const T = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]); function O(t, e) { return e && `${e}::${E++}` || t.uidEvent || E++ } function x(t) { const e = O(t); return t.uidEvent = e, A[e] = A[e] || {}, A[e] } function k(t, e, i = null) { return Object.values(t).find((t => t.callable === e && t.delegationSelector === i)) } function L(t, e, i) { const n = "string" == typeof e, s = n ? i : e || i; let o = N(t); return C.has(o) || (o = t), [n, s, o] } function D(t, e, i, n, s) { if ("string" != typeof e || !t) return; let [o, r, a] = L(e, i, n); if (e in T) { const t = t => function (e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e) }; r = t(r) } const l = x(t), c = l[a] || (l[a] = {}), h = k(c, r, o ? i : null); if (h) return void (h.oneOff = h.oneOff && s); const d = O(r, e.replace(v, "")), u = o ? function (t, e, i) { return function n(s) { const o = t.querySelectorAll(e); for (let { target: r } = s; r && r !== this; r = r.parentNode)for (const a of o) if (a === r) return j(s, { delegateTarget: r }), n.oneOff && P.off(t, s.type, e, i), i.apply(r, [s]) } }(t, i, r) : function (t, e) { return function i(n) { return j(n, { delegateTarget: t }), i.oneOff && P.off(t, n.type, e), e.apply(t, [n]) } }(t, r); u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o) } function S(t, e, i, n, s) { const o = k(e[i], n, s); o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]) } function I(t, e, i, n) { const s = e[i] || {}; for (const o of Object.keys(s)) if (o.includes(n)) { const n = s[o]; S(t, e, i, n.callable, n.delegationSelector) } } function N(t) { return t = t.replace(y, ""), T[t] || t } const P = { on(t, e, i, n) { D(t, e, i, n, !1) }, one(t, e, i, n) { D(t, e, i, n, !0) }, off(t, e, i, n) { if ("string" != typeof e || !t) return; const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith("."); if (void 0 === o) { if (h) for (const i of Object.keys(l)) I(t, l, i, e.slice(1)); for (const i of Object.keys(c)) { const n = i.replace(w, ""); if (!a || e.includes(n)) { const e = c[i]; S(t, l, r, e.callable, e.delegationSelector) } } } else { if (!Object.keys(c).length) return; S(t, l, r, o, s ? i : null) } }, trigger(t, e, i) { if ("string" != typeof e || !t) return null; const n = u(); let s = null, o = !0, r = !0, a = !1; e !== N(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented()); let l = new Event(e, { bubbles: o, cancelable: !0 }); return l = j(l, i), a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l } }; function j(t, e) { for (const [i, n] of Object.entries(e || {})) try { t[i] = n } catch (e) { Object.defineProperty(t, i, { configurable: !0, get: () => n }) } return t } const M = new Map, H = { set(t, e, i) { M.has(t) || M.set(t, new Map); const n = M.get(t); n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`) }, get: (t, e) => M.has(t) && M.get(t).get(e) || null, remove(t, e) { if (!M.has(t)) return; const i = M.get(t); i.delete(e), 0 === i.size && M.delete(t) } }; function $(t) { if ("true" === t) return !0; if ("false" === t) return !1; if (t === Number(t).toString()) return Number(t); if ("" === t || "null" === t) return null; if ("string" != typeof t) return t; try { return JSON.parse(decodeURIComponent(t)) } catch (e) { return t } } function W(t) { return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`)) } const B = { setDataAttribute(t, e, i) { t.setAttribute(`data-bs-${W(e)}`, i) }, removeDataAttribute(t, e) { t.removeAttribute(`data-bs-${W(e)}`) }, getDataAttributes(t) { if (!t) return {}; const e = {}, i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig"))); for (const n of i) { let i = n.replace(/^bs/, ""); i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = $(t.dataset[n]) } return e }, getDataAttribute: (t, e) => $(t.getAttribute(`data-bs-${W(e)}`)) }; class F { static get Default() { return {} } static get DefaultType() { return {} } static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!') } _getConfig(t) { return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t } _configAfterMerge(t) { return t } _mergeConfigObj(t, e) { const i = o(e) ? B.getDataAttribute(e, "config") : {}; return { ...this.constructor.Default, ..."object" == typeof i ? i : {}, ...o(e) ? B.getDataAttributes(e) : {}, ..."object" == typeof t ? t : {} } } _typeCheckConfig(t, e = this.constructor.DefaultType) { for (const n of Object.keys(e)) { const s = e[n], r = t[n], a = o(r) ? "element" : null == (i = r) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(); if (!new RegExp(s).test(a)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`) } var i } } class z extends F { constructor(t, e) { super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(e), H.set(this._element, this.constructor.DATA_KEY, this)) } dispose() { H.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY); for (const t of Object.getOwnPropertyNames(this)) this[t] = null } _queueCallback(t, e, i = !0) { _(t, e, i) } _getConfig(t) { return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t } static getInstance(t) { return H.get(r(t), this.DATA_KEY) } static getOrCreateInstance(t, e = {}) { return this.getInstance(t) || new this(t, "object" == typeof e ? e : null) } static get VERSION() { return "5.2.1" } static get DATA_KEY() { return `bs.${this.NAME}` } static get EVENT_KEY() { return `.${this.DATA_KEY}` } static eventName(t) { return `${t}${this.EVENT_KEY}` } } const q = (t, e = "hide") => { const i = `click.dismiss${t.EVENT_KEY}`, s = t.NAME; P.on(document, i, `[data-bs-dismiss="${s}"]`, (function (i) { if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return; const o = n(this) || this.closest(`.${s}`); t.getOrCreateInstance(o)[e]() })) }; class R extends z { static get NAME() { return "alert" } close() { if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return; this._element.classList.remove("show"); const t = this._element.classList.contains("fade"); this._queueCallback((() => this._destroyElement()), this._element, t) } _destroyElement() { this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose() } static jQueryInterface(t) { return this.each((function () { const e = R.getOrCreateInstance(this); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } q(R, "close"), g(R); const V = '[data-bs-toggle="button"]'; class K extends z { static get NAME() { return "button" } toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")) } static jQueryInterface(t) { return this.each((function () { const e = K.getOrCreateInstance(this); "toggle" === t && e[t]() })) } } P.on(document, "click.bs.button.data-api", V, (t => { t.preventDefault(); const e = t.target.closest(V); K.getOrCreateInstance(e).toggle() })), g(K); const Q = { find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)), findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t), children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))), parents(t, e) { const i = []; let n = t.parentNode.closest(e); for (; n;)i.push(n), n = n.parentNode.closest(e); return i }, prev(t, e) { let i = t.previousElementSibling; for (; i;) { if (i.matches(e)) return [i]; i = i.previousElementSibling } return [] }, next(t, e) { let i = t.nextElementSibling; for (; i;) { if (i.matches(e)) return [i]; i = i.nextElementSibling } return [] }, focusableChildren(t) { const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(","); return this.find(e, t).filter((t => !l(t) && a(t))) } }, X = { endCallback: null, leftCallback: null, rightCallback: null }, Y = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" }; class U extends F { constructor(t, e) { super(), this._element = t, t && U.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents()) } static get Default() { return X } static get DefaultType() { return Y } static get NAME() { return "swipe" } dispose() { P.off(this._element, ".bs.swipe") } _start(t) { this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX } _end(t) { this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), m(this._config.endCallback) } _move(t) { this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX } _handleSwipe() { const t = Math.abs(this._deltaX); if (t <= 40) return; const e = t / this._deltaX; this._deltaX = 0, e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback) } _initEvents() { this._supportPointerEvents ? (P.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))), P.on(this._element, "pointerup.bs.swipe", (t => this._end(t))), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.swipe", (t => this._start(t))), P.on(this._element, "touchmove.bs.swipe", (t => this._move(t))), P.on(this._element, "touchend.bs.swipe", (t => this._end(t)))) } _eventIsPointerPenTouch(t) { return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType) } static isSupported() { return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 } } const G = "next", J = "prev", Z = "left", tt = "right", et = "slid.bs.carousel", it = "carousel", nt = "active", st = { ArrowLeft: tt, ArrowRight: Z }, ot = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 }, rt = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" }; class at extends z { constructor(t, e) { super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Q.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === it && this.cycle() } static get Default() { return ot } static get DefaultType() { return rt } static get NAME() { return "carousel" } next() { this._slide(G) } nextWhenVisible() { !document.hidden && a(this._element) && this.next() } prev() { this._slide(J) } pause() { this._isSliding && s(this._element), this._clearInterval() } cycle() { this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval) } _maybeEnableCycle() { this._config.ride && (this._isSliding ? P.one(this._element, et, (() => this.cycle())) : this.cycle()) } to(t) { const e = this._getItems(); if (t > e.length - 1 || t < 0) return; if (this._isSliding) return void P.one(this._element, et, (() => this.to(t))); const i = this._getItemIndex(this._getActive()); if (i === t) return; const n = t > i ? G : J; this._slide(n, e[t]) } dispose() { this._swipeHelper && this._swipeHelper.dispose(), super.dispose() } _configAfterMerge(t) { return t.defaultInterval = t.interval, t } _addEventListeners() { this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", (() => this.pause())), P.on(this._element, "mouseleave.bs.carousel", (() => this._maybeEnableCycle()))), this._config.touch && U.isSupported() && this._addTouchEventListeners() } _addTouchEventListeners() { for (const t of Q.find(".carousel-item img", this._element)) P.on(t, "dragstart.bs.carousel", (t => t.preventDefault())); const t = { leftCallback: () => this._slide(this._directionToOrder(Z)), rightCallback: () => this._slide(this._directionToOrder(tt)), endCallback: () => { "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval)) } }; this._swipeHelper = new U(this._element, t) } _keydown(t) { if (/input|textarea/i.test(t.target.tagName)) return; const e = st[t.key]; e && (t.preventDefault(), this._slide(this._directionToOrder(e))) } _getItemIndex(t) { return this._getItems().indexOf(t) } _setActiveIndicatorElement(t) { if (!this._indicatorsElement) return; const e = Q.findOne(".active", this._indicatorsElement); e.classList.remove(nt), e.removeAttribute("aria-current"); const i = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement); i && (i.classList.add(nt), i.setAttribute("aria-current", "true")) } _updateInterval() { const t = this._activeElement || this._getActive(); if (!t) return; const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10); this._config.interval = e || this._config.defaultInterval } _slide(t, e = null) { if (this._isSliding) return; const i = this._getActive(), n = t === G, s = e || b(this._getItems(), i, n, this._config.wrap); if (s === i) return; const o = this._getItemIndex(s), r = e => P.trigger(this._element, e, { relatedTarget: s, direction: this._orderToDirection(t), from: this._getItemIndex(i), to: o }); if (r("slide.bs.carousel").defaultPrevented) return; if (!i || !s) return; const a = Boolean(this._interval); this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s; const l = n ? "carousel-item-start" : "carousel-item-end", c = n ? "carousel-item-next" : "carousel-item-prev"; s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback((() => { s.classList.remove(l, c), s.classList.add(nt), i.classList.remove(nt, c, l), this._isSliding = !1, r(et) }), i, this._isAnimated()), a && this.cycle() } _isAnimated() { return this._element.classList.contains("slide") } _getActive() { return Q.findOne(".active.carousel-item", this._element) } _getItems() { return Q.find(".carousel-item", this._element) } _clearInterval() { this._interval && (clearInterval(this._interval), this._interval = null) } _directionToOrder(t) { return p() ? t === Z ? J : G : t === Z ? G : J } _orderToDirection(t) { return p() ? t === J ? Z : tt : t === J ? tt : Z } static jQueryInterface(t) { return this.each((function () { const e = at.getOrCreateInstance(this, t); if ("number" != typeof t) { if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t]() } } else e.to(t) })) } } P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function (t) { const e = n(this); if (!e || !e.classList.contains(it)) return; t.preventDefault(); const i = at.getOrCreateInstance(e), s = this.getAttribute("data-bs-slide-to"); return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle()) })), P.on(window, "load.bs.carousel.data-api", (() => { const t = Q.find('[data-bs-ride="carousel"]'); for (const e of t) at.getOrCreateInstance(e) })), g(at); const lt = "show", ct = "collapse", ht = "collapsing", dt = '[data-bs-toggle="collapse"]', ut = { parent: null, toggle: !0 }, ft = { parent: "(null|element)", toggle: "boolean" }; class pt extends z { constructor(t, e) { super(t, e), this._isTransitioning = !1, this._triggerArray = []; const n = Q.find(dt); for (const t of n) { const e = i(t), n = Q.find(e).filter((t => t === this._element)); null !== e && n.length && this._triggerArray.push(t) } this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle() } static get Default() { return ut } static get DefaultType() { return ft } static get NAME() { return "collapse" } toggle() { this._isShown() ? this.hide() : this.show() } show() { if (this._isTransitioning || this._isShown()) return; let t = []; if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => pt.getOrCreateInstance(t, { toggle: !1 })))), t.length && t[0]._isTransitioning) return; if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return; for (const e of t) e.hide(); const e = this._getDimension(); this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0; const i = `scroll${e[0].toUpperCase() + e.slice(1)}`; this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[e] = "", P.trigger(this._element, "shown.bs.collapse") }), this._element, !0), this._element.style[e] = `${this._element[i]}px` } hide() { if (this._isTransitioning || !this._isShown()) return; if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return; const t = this._getDimension(); this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt); for (const t of this._triggerArray) { const e = n(t); e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1) } this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct), P.trigger(this._element, "hidden.bs.collapse") }), this._element, !0) } _isShown(t = this._element) { return t.classList.contains(lt) } _configAfterMerge(t) { return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t } _getDimension() { return this._element.classList.contains("collapse-horizontal") ? "width" : "height" } _initializeChildren() { if (!this._config.parent) return; const t = this._getFirstLevelChildren(dt); for (const e of t) { const t = n(e); t && this._addAriaAndCollapsedClass([e], this._isShown(t)) } } _getFirstLevelChildren(t) { const e = Q.find(":scope .collapse .collapse", this._config.parent); return Q.find(t, this._config.parent).filter((t => !e.includes(t))) } _addAriaAndCollapsedClass(t, e) { if (t.length) for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e) } static jQueryInterface(t) { const e = {}; return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function () { const i = pt.getOrCreateInstance(this, e); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t]() } })) } } P.on(document, "click.bs.collapse.data-api", dt, (function (t) { ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault(); const e = i(this), n = Q.find(e); for (const t of n) pt.getOrCreateInstance(t, { toggle: !1 }).toggle() })), g(pt); var gt = "top", mt = "bottom", _t = "right", bt = "left", vt = "auto", yt = [gt, mt, _t, bt], wt = "start", At = "end", Et = "clippingParents", Tt = "viewport", Ct = "popper", Ot = "reference", xt = yt.reduce((function (t, e) { return t.concat([e + "-" + wt, e + "-" + At]) }), []), kt = [].concat(yt, [vt]).reduce((function (t, e) { return t.concat([e, e + "-" + wt, e + "-" + At]) }), []), Lt = "beforeRead", Dt = "read", St = "afterRead", It = "beforeMain", Nt = "main", Pt = "afterMain", jt = "beforeWrite", Mt = "write", Ht = "afterWrite", $t = [Lt, Dt, St, It, Nt, Pt, jt, Mt, Ht]; function Wt(t) { return t ? (t.nodeName || "").toLowerCase() : null } function Bt(t) { if (null == t) return window; if ("[object Window]" !== t.toString()) { var e = t.ownerDocument; return e && e.defaultView || window } return t } function Ft(t) { return t instanceof Bt(t).Element || t instanceof Element } function zt(t) { return t instanceof Bt(t).HTMLElement || t instanceof HTMLElement } function qt(t) { return "undefined" != typeof ShadowRoot && (t instanceof Bt(t).ShadowRoot || t instanceof ShadowRoot) } const Rt = { name: "applyStyles", enabled: !0, phase: "write", fn: function (t) { var e = t.state; Object.keys(e.elements).forEach((function (t) { var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t]; zt(s) && Wt(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function (t) { var e = n[t]; !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e) }))) })) }, effect: function (t) { var e = t.state, i = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () { Object.keys(e.elements).forEach((function (t) { var n = e.elements[t], s = e.attributes[t] || {}, o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function (t, e) { return t[e] = "", t }), {}); zt(n) && Wt(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function (t) { n.removeAttribute(t) }))) })) } }, requires: ["computeStyles"] }; function Vt(t) { return t.split("-")[0] } var Kt = Math.max, Qt = Math.min, Xt = Math.round; function Yt() { var t = navigator.userAgentData; return null != t && t.brands ? t.brands.map((function (t) { return t.brand + "/" + t.version })).join(" ") : navigator.userAgent } function Ut() { return !/^((?!chrome|android).)*safari/i.test(Yt()) } function Gt(t, e, i) { void 0 === e && (e = !1), void 0 === i && (i = !1); var n = t.getBoundingClientRect(), s = 1, o = 1; e && zt(t) && (s = t.offsetWidth > 0 && Xt(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Xt(n.height) / t.offsetHeight || 1); var r = (Ft(t) ? Bt(t) : window).visualViewport, a = !Ut() && i, l = (n.left + (a && r ? r.offsetLeft : 0)) / s, c = (n.top + (a && r ? r.offsetTop : 0)) / o, h = n.width / s, d = n.height / o; return { width: h, height: d, top: c, right: l + h, bottom: c + d, left: l, x: l, y: c } } function Jt(t) { var e = Gt(t), i = t.offsetWidth, n = t.offsetHeight; return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), { x: t.offsetLeft, y: t.offsetTop, width: i, height: n } } function Zt(t, e) { var i = e.getRootNode && e.getRootNode(); if (t.contains(e)) return !0; if (i && qt(i)) { var n = e; do { if (n && t.isSameNode(n)) return !0; n = n.parentNode || n.host } while (n) } return !1 } function te(t) { return Bt(t).getComputedStyle(t) } function ee(t) { return ["table", "td", "th"].indexOf(Wt(t)) >= 0 } function ie(t) { return ((Ft(t) ? t.ownerDocument : t.document) || window.document).documentElement } function ne(t) { return "html" === Wt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || ie(t) } function se(t) { return zt(t) && "fixed" !== te(t).position ? t.offsetParent : null } function oe(t) { for (var e = Bt(t), i = se(t); i && ee(i) && "static" === te(i).position;)i = se(i); return i && ("html" === Wt(i) || "body" === Wt(i) && "static" === te(i).position) ? e : i || function (t) { var e = /firefox/i.test(Yt()); if (/Trident/i.test(Yt()) && zt(t) && "fixed" === te(t).position) return null; var i = ne(t); for (qt(i) && (i = i.host); zt(i) && ["html", "body"].indexOf(Wt(i)) < 0;) { var n = te(i); if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i; i = i.parentNode } return null }(t) || e } function re(t) { return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y" } function ae(t, e, i) { return Kt(t, Qt(e, i)) } function le(t) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t) } function ce(t, e) { return e.reduce((function (e, i) { return e[i] = t, e }), {}) } const he = { name: "arrow", enabled: !0, phase: "main", fn: function (t) { var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = Vt(i.placement), l = re(a), c = [bt, _t].indexOf(a) >= 0 ? "height" : "width"; if (o && r) { var h = function (t, e) { return le("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t) ? t : ce(t, yt)) }(s.padding, i), d = Jt(o), u = "y" === l ? gt : bt, f = "y" === l ? mt : _t, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], g = r[l] - i.rects.reference[l], m = oe(o), _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = p / 2 - g / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, A = ae(v, w, y), E = l; i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e) } }, effect: function (t) { var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i; null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Zt(e.elements.popper, n) && (e.elements.arrow = n) }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }; function de(t) { return t.split("-")[1] } var ue = { top: "auto", right: "auto", bottom: "auto", left: "auto" }; function fe(t) { var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u, p = r.y, g = void 0 === p ? 0 : p, m = "function" == typeof h ? h({ x: f, y: g }) : { x: f, y: g }; f = m.x, g = m.y; var _ = r.hasOwnProperty("x"), b = r.hasOwnProperty("y"), v = bt, y = gt, w = window; if (c) { var A = oe(i), E = "clientHeight", T = "clientWidth"; A === Bt(i) && "static" !== te(A = ie(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === gt || (s === bt || s === _t) && o === At) && (y = mt, g -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, g *= l ? 1 : -1), s !== bt && (s !== gt && s !== mt || o !== At) || (v = _t, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1) } var C, O = Object.assign({ position: a }, c && ue), x = !0 === h ? function (t) { var e = t.x, i = t.y, n = window.devicePixelRatio || 1; return { x: Xt(e * n) / n || 0, y: Xt(i * n) / n || 0 } }({ x: f, y: g }) : { x: f, y: g }; return f = x.x, g = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? g + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e)) } const pe = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) { var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = { placement: Vt(e.placement), variation: de(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s, isFixed: "fixed" === e.options.strategy }; null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, fe(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: l })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, fe(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement }) }, data: {} }; var ge = { passive: !0 }; const me = { name: "eventListeners", enabled: !0, phase: "write", fn: function () { }, effect: function (t) { var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = Bt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper); return o && c.forEach((function (t) { t.addEventListener("scroll", i.update, ge) })), a && l.addEventListener("resize", i.update, ge), function () { o && c.forEach((function (t) { t.removeEventListener("scroll", i.update, ge) })), a && l.removeEventListener("resize", i.update, ge) } }, data: {} }; var _e = { left: "right", right: "left", bottom: "top", top: "bottom" }; function be(t) { return t.replace(/left|right|bottom|top/g, (function (t) { return _e[t] })) } var ve = { start: "end", end: "start" }; function ye(t) { return t.replace(/start|end/g, (function (t) { return ve[t] })) } function we(t) { var e = Bt(t); return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset } } function Ae(t) { return Gt(ie(t)).left + we(t).scrollLeft } function Ee(t) { var e = te(t), i = e.overflow, n = e.overflowX, s = e.overflowY; return /auto|scroll|overlay|hidden/.test(i + s + n) } function Te(t) { return ["html", "body", "#document"].indexOf(Wt(t)) >= 0 ? t.ownerDocument.body : zt(t) && Ee(t) ? t : Te(ne(t)) } function Ce(t, e) { var i; void 0 === e && (e = []); var n = Te(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = Bt(n), r = s ? [o].concat(o.visualViewport || [], Ee(n) ? n : []) : n, a = e.concat(r); return s ? a : a.concat(Ce(ne(r))) } function Oe(t) { return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height }) } function xe(t, e, i) { return e === Tt ? Oe(function (t, e) { var i = Bt(t), n = ie(t), s = i.visualViewport, o = n.clientWidth, r = n.clientHeight, a = 0, l = 0; if (s) { o = s.width, r = s.height; var c = Ut(); (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop) } return { width: o, height: r, x: a + Ae(t), y: l } }(t, i)) : Ft(e) ? function (t, e) { var i = Gt(t, !1, "fixed" === e); return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i }(e, i) : Oe(function (t) { var e, i = ie(t), n = we(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = Kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = Kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + Ae(t), l = -n.scrollTop; return "rtl" === te(s || i).direction && (a += Kt(i.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: r, x: a, y: l } }(ie(t))) } function ke(t) { var e, i = t.reference, n = t.element, s = t.placement, o = s ? Vt(s) : null, r = s ? de(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2; switch (o) { case gt: e = { x: a, y: i.y - n.height }; break; case mt: e = { x: a, y: i.y + i.height }; break; case _t: e = { x: i.x + i.width, y: l }; break; case bt: e = { x: i.x - n.width, y: l }; break; default: e = { x: i.x, y: i.y } }var c = o ? re(o) : null; if (null != c) { var h = "y" === c ? "height" : "width"; switch (r) { case wt: e[c] = e[c] - (i[h] / 2 - n[h] / 2); break; case At: e[c] = e[c] + (i[h] / 2 - n[h] / 2) } } return e } function Le(t, e) { void 0 === e && (e = {}); var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.strategy, r = void 0 === o ? t.strategy : o, a = i.boundary, l = void 0 === a ? Et : a, c = i.rootBoundary, h = void 0 === c ? Tt : c, d = i.elementContext, u = void 0 === d ? Ct : d, f = i.altBoundary, p = void 0 !== f && f, g = i.padding, m = void 0 === g ? 0 : g, _ = le("number" != typeof m ? m : ce(m, yt)), b = u === Ct ? Ot : Ct, v = t.rects.popper, y = t.elements[p ? b : u], w = function (t, e, i, n) { var s = "clippingParents" === e ? function (t) { var e = Ce(ne(t)), i = ["absolute", "fixed"].indexOf(te(t).position) >= 0 && zt(t) ? oe(t) : t; return Ft(i) ? e.filter((function (t) { return Ft(t) && Zt(t, i) && "body" !== Wt(t) })) : [] }(t) : [].concat(e), o = [].concat(s, [i]), r = o[0], a = o.reduce((function (e, i) { var s = xe(t, i, n); return e.top = Kt(s.top, e.top), e.right = Qt(s.right, e.right), e.bottom = Qt(s.bottom, e.bottom), e.left = Kt(s.left, e.left), e }), xe(t, r, n)); return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a }(Ft(y) ? y : y.contextElement || ie(t.elements.popper), l, h, r), A = Gt(t.elements.reference), E = ke({ reference: A, element: v, strategy: "absolute", placement: s }), T = Oe(Object.assign({}, v, E)), C = u === Ct ? T : A, O = { top: w.top - C.top + _.top, bottom: C.bottom - w.bottom + _.bottom, left: w.left - C.left + _.left, right: C.right - w.right + _.right }, x = t.modifiersData.offset; if (u === Ct && x) { var k = x[s]; Object.keys(O).forEach((function (t) { var e = [_t, mt].indexOf(t) >= 0 ? 1 : -1, i = [gt, mt].indexOf(t) >= 0 ? "y" : "x"; O[t] += k[i] * e })) } return O } function De(t, e) { void 0 === e && (e = {}); var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations, l = i.allowedAutoPlacements, c = void 0 === l ? kt : l, h = de(n), d = h ? a ? xt : xt.filter((function (t) { return de(t) === h })) : yt, u = d.filter((function (t) { return c.indexOf(t) >= 0 })); 0 === u.length && (u = d); var f = u.reduce((function (e, i) { return e[i] = Le(t, { placement: i, boundary: s, rootBoundary: o, padding: r })[Vt(i)], e }), {}); return Object.keys(f).sort((function (t, e) { return f[t] - f[e] })) } const Se = { name: "flip", enabled: !0, phase: "main", fn: function (t) { var e = t.state, i = t.options, n = t.name; if (!e.modifiersData[n]._skip) { for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, g = i.allowedAutoPlacements, m = e.options.placement, _ = Vt(m), b = l || (_ !== m && p ? function (t) { if (Vt(t) === vt) return []; var e = be(t); return [ye(t), e, ye(e)] }(m) : [be(m)]), v = [m].concat(b).reduce((function (t, i) { return t.concat(Vt(i) === vt ? De(e, { placement: i, boundary: h, rootBoundary: d, padding: c, flipVariations: p, allowedAutoPlacements: g }) : i) }), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) { var O = v[C], x = Vt(O), k = de(O) === wt, L = [gt, mt].indexOf(x) >= 0, D = L ? "width" : "height", S = Le(e, { placement: O, boundary: h, rootBoundary: d, altBoundary: u, padding: c }), I = L ? k ? _t : bt : k ? mt : gt; y[D] > w[D] && (I = be(I)); var N = be(I), P = []; if (o && P.push(S[x] <= 0), a && P.push(S[I] <= 0, S[N] <= 0), P.every((function (t) { return t }))) { T = O, E = !1; break } A.set(O, P) } if (E) for (var j = function (t) { var e = v.find((function (e) { var i = A.get(e); if (i) return i.slice(0, t).every((function (t) { return t })) })); if (e) return T = e, "break" }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--); e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0) } }, requiresIfExists: ["offset"], data: { _skip: !1 } }; function Ie(t, e, i) { return void 0 === i && (i = { x: 0, y: 0 }), { top: t.top - e.height - i.y, right: t.right - e.width + i.x, bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x } } function Ne(t) { return [gt, _t, mt, bt].some((function (e) { return t[e] >= 0 })) } const Pe = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) { var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = Le(e, { elementContext: "reference" }), a = Le(e, { altBoundary: !0 }), l = Ie(r, n), c = Ie(a, s, o), h = Ne(l), d = Ne(c); e.modifiersData[i] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: h, hasPopperEscaped: d }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": h, "data-popper-escaped": d }) } }, je = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) { var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [0, 0] : s, r = kt.reduce((function (t, i) { return t[i] = function (t, e, i) { var n = Vt(t), s = [bt, gt].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({}, e, { placement: t })) : i, r = o[0], a = o[1]; return r = r || 0, a = (a || 0) * s, [bt, _t].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a } }(i, e.rects, o), t }), {}), a = r[e.placement], l = a.x, c = a.y; null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r } }, Me = { name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) { var e = t.state, i = t.name; e.modifiersData[i] = ke({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement }) }, data: {} }, He = { name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) { var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, g = void 0 === p ? 0 : p, m = Le(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: h }), _ = Vt(e.placement), b = de(e.placement), v = !b, y = re(_), w = "x" === y ? "y" : "x", A = e.modifiersData.popperOffsets, E = e.rects.reference, T = e.rects.popper, C = "function" == typeof g ? g(Object.assign({}, e.rects, { placement: e.placement })) : g, O = "number" == typeof C ? { mainAxis: C, altAxis: C } : Object.assign({ mainAxis: 0, altAxis: 0 }, C), x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, k = { x: 0, y: 0 }; if (A) { if (o) { var L, D = "y" === y ? gt : bt, S = "y" === y ? mt : _t, I = "y" === y ? "height" : "width", N = A[y], P = N + m[D], j = N - m[S], M = f ? -T[I] / 2 : 0, H = b === wt ? E[I] : T[I], $ = b === wt ? -T[I] : -E[I], W = e.elements.arrow, B = f && W ? Jt(W) : { width: 0, height: 0 }, F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z = F[D], q = F[S], R = ae(0, E[I], B[I]), V = v ? E[I] / 2 - M - R - z - O.mainAxis : H - R - z - O.mainAxis, K = v ? -E[I] / 2 + M + R + q + O.mainAxis : $ + R + q + O.mainAxis, Q = e.elements.arrow && oe(e.elements.arrow), X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = N + K - Y, G = ae(f ? Qt(P, N + V - Y - X) : P, N, f ? Kt(j, U) : j); A[y] = G, k[y] = G - N } if (a) { var J, Z = "x" === y ? gt : bt, tt = "x" === y ? mt : _t, et = A[w], it = "y" === w ? "height" : "width", nt = et + m[Z], st = et - m[tt], ot = -1 !== [gt, bt].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0, at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis, lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function (t, e, i) { var n = ae(t, e, i); return n > i ? i : n }(at, et, lt) : ae(f ? at : nt, et, f ? lt : st); A[w] = ct, k[w] = ct - et } e.modifiersData[n] = k } }, requiresIfExists: ["offset"] }; function $e(t, e, i) { void 0 === i && (i = !1); var n, s, o = zt(e), r = zt(e) && function (t) { var e = t.getBoundingClientRect(), i = Xt(e.width) / t.offsetWidth || 1, n = Xt(e.height) / t.offsetHeight || 1; return 1 !== i || 1 !== n }(e), a = ie(e), l = Gt(t, r, i), c = { scrollLeft: 0, scrollTop: 0 }, h = { x: 0, y: 0 }; return (o || !o && !i) && (("body" !== Wt(e) || Ee(a)) && (c = (n = e) !== Bt(n) && zt(n) ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop } : we(n)), zt(e) ? ((h = Gt(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ae(a))), { x: l.left + c.scrollLeft - h.x, y: l.top + c.scrollTop - h.y, width: l.width, height: l.height } } function We(t) { var e = new Map, i = new Set, n = []; function s(t) { i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function (t) { if (!i.has(t)) { var n = e.get(t); n && s(n) } })), n.push(t) } return t.forEach((function (t) { e.set(t.name, t) })), t.forEach((function (t) { i.has(t.name) || s(t) })), n } var Be = { placement: "bottom", modifiers: [], strategy: "absolute" }; function Fe() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)e[i] = arguments[i]; return !e.some((function (t) { return !(t && "function" == typeof t.getBoundingClientRect) })) } function ze(t) { void 0 === t && (t = {}); var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? Be : s; return function (t, e, i) { void 0 === i && (i = o); var s, r, a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Be, o), modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {} }, l = [], c = !1, h = { state: a, setOptions: function (i) { var s = "function" == typeof i ? i(a.options) : i; d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = { reference: Ft(t) ? Ce(t) : t.contextElement ? Ce(t.contextElement) : [], popper: Ce(e) }; var r, c, u = function (t) { var e = We(t); return $t.reduce((function (t, i) { return t.concat(e.filter((function (t) { return t.phase === i }))) }), []) }((r = [].concat(n, a.options.modifiers), c = r.reduce((function (t, e) { var i = t[e.name]; return t[e.name] = i ? Object.assign({}, i, e, { options: Object.assign({}, i.options, e.options), data: Object.assign({}, i.data, e.data) }) : e, t }), {}), Object.keys(c).map((function (t) { return c[t] })))); return a.orderedModifiers = u.filter((function (t) { return t.enabled })), a.orderedModifiers.forEach((function (t) { var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect; if ("function" == typeof s) { var o = s({ state: a, name: e, instance: h, options: n }); l.push(o || function () { }) } })), h.update() }, forceUpdate: function () { if (!c) { var t = a.elements, e = t.reference, i = t.popper; if (Fe(e, i)) { a.rects = { reference: $e(e, oe(i), "fixed" === a.options.strategy), popper: Jt(i) }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) { return a.modifiersData[t.name] = Object.assign({}, t.data) })); for (var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) { var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, d = s.name; "function" == typeof o && (a = o({ state: a, options: l, name: d, instance: h }) || a) } else a.reset = !1, n = -1 } } }, update: (s = function () { return new Promise((function (t) { h.forceUpdate(), t(a) })) }, function () { return r || (r = new Promise((function (t) { Promise.resolve().then((function () { r = void 0, t(s()) })) }))), r }), destroy: function () { d(), c = !0 } }; if (!Fe(t, e)) return h; function d() { l.forEach((function (t) { return t() })), l = [] } return h.setOptions(i).then((function (t) { !c && i.onFirstUpdate && i.onFirstUpdate(t) })), h } } var qe = ze(), Re = ze({ defaultModifiers: [me, Me, pe, Rt] }), Ve = ze({ defaultModifiers: [me, Me, pe, Rt, je, Se, He, he, Pe] }); const Ke = Object.freeze(Object.defineProperty({ __proto__: null, popperGenerator: ze, detectOverflow: Le, createPopperBase: qe, createPopper: Ve, createPopperLite: Re, top: gt, bottom: mt, right: _t, left: bt, auto: vt, basePlacements: yt, start: wt, end: At, clippingParents: Et, viewport: Tt, popper: Ct, reference: Ot, variationPlacements: xt, placements: kt, beforeRead: Lt, read: Dt, afterRead: St, beforeMain: It, main: Nt, afterMain: Pt, beforeWrite: jt, write: Mt, afterWrite: Ht, modifierPhases: $t, applyStyles: Rt, arrow: he, computeStyles: pe, eventListeners: me, flip: Se, hide: Pe, offset: je, popperOffsets: Me, preventOverflow: He }, Symbol.toStringTag, { value: "Module" })), Qe = "dropdown", Xe = "ArrowUp", Ye = "ArrowDown", Ue = "click.bs.dropdown.data-api", Ge = "keydown.bs.dropdown.data-api", Je = "show", Ze = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', ti = `${Ze}.show`, ei = ".dropdown-menu", ii = p() ? "top-end" : "top-start", ni = p() ? "top-start" : "top-end", si = p() ? "bottom-end" : "bottom-start", oi = p() ? "bottom-start" : "bottom-end", ri = p() ? "left-start" : "right-start", ai = p() ? "right-start" : "left-start", li = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, ci = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" }; class hi extends z { constructor(t, e) { super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = Q.next(this._element, ei)[0] || Q.prev(this._element, ei)[0], this._inNavbar = this._detectNavbar() } static get Default() { return li } static get DefaultType() { return ci } static get NAME() { return Qe } toggle() { return this._isShown() ? this.hide() : this.show() } show() { if (l(this._element) || this._isShown()) return; const t = { relatedTarget: this._element }; if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) { if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children)) P.on(t, "mouseover", h); this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), P.trigger(this._element, "shown.bs.dropdown", t) } } hide() { if (l(this._element) || !this._isShown()) return; const t = { relatedTarget: this._element }; this._completeHide(t) } dispose() { this._popper && this._popper.destroy(), super.dispose() } update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() } _completeHide(t) { if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) { if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) P.off(t, "mouseover", h); this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t) } } _getConfig(t) { if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`); return t } _createPopper() { if (void 0 === Ke) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)"); let t = this._element; "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference); const e = this._getPopperConfig(); this._popper = Ve(t, this._menu, e) } _isShown() { return this._menu.classList.contains(Je) } _getPlacement() { const t = this._parent; if (t.classList.contains("dropend")) return ri; if (t.classList.contains("dropstart")) return ai; if (t.classList.contains("dropup-center")) return "top"; if (t.classList.contains("dropdown-center")) return "bottom"; const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si } _detectNavbar() { return null !== this._element.closest(".navbar") } _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t } _getPopperConfig() { const t = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig } } _selectMenuItem({ key: t, target: e }) { const i = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => a(t))); i.length && b(i, e, t === Ye, !i.includes(e)).focus() } static jQueryInterface(t) { return this.each((function () { const e = hi.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } static clearMenus(t) { if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return; const e = Q.find(ti); for (const i of e) { const e = hi.getInstance(i); if (!e || !1 === e._config.autoClose) continue; const n = t.composedPath(), s = n.includes(e._menu); if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue; if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue; const o = { relatedTarget: e._element }; "click" === t.type && (o.clickEvent = t), e._completeHide(o) } } static dataApiKeydownHandler(t) { const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, n = [Xe, Ye].includes(t.key); if (!n && !i) return; if (e && !i) return; t.preventDefault(); const s = this.matches(Ze) ? this : Q.prev(this, Ze)[0] || Q.next(this, Ze)[0], o = hi.getOrCreateInstance(s); if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t); o._isShown() && (t.stopPropagation(), o.hide(), s.focus()) } } P.on(document, Ge, Ze, hi.dataApiKeydownHandler), P.on(document, Ge, ei, hi.dataApiKeydownHandler), P.on(document, Ue, hi.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), P.on(document, Ue, Ze, (function (t) { t.preventDefault(), hi.getOrCreateInstance(this).toggle() })), g(hi); const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ui = ".sticky-top", fi = "padding-right", pi = "margin-right"; class gi { constructor() { this._element = document.body } getWidth() { const t = document.documentElement.clientWidth; return Math.abs(window.innerWidth - t) } hide() { const t = this.getWidth(); this._disableOverFlow(), this._setElementAttributes(this._element, fi, (e => e + t)), this._setElementAttributes(di, fi, (e => e + t)), this._setElementAttributes(ui, pi, (e => e - t)) } reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, fi), this._resetElementAttributes(di, fi), this._resetElementAttributes(ui, pi) } isOverflowing() { return this.getWidth() > 0 } _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden" } _setElementAttributes(t, e, i) { const n = this.getWidth(); this._applyManipulationCallback(t, (t => { if (t !== this._element && window.innerWidth > t.clientWidth + n) return; this._saveInitialAttribute(t, e); const s = window.getComputedStyle(t).getPropertyValue(e); t.style.setProperty(e, `${i(Number.parseFloat(s))}px`) })) } _saveInitialAttribute(t, e) { const i = t.style.getPropertyValue(e); i && B.setDataAttribute(t, e, i) } _resetElementAttributes(t, e) { this._applyManipulationCallback(t, (t => { const i = B.getDataAttribute(t, e); null !== i ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e) })) } _applyManipulationCallback(t, e) { if (o(t)) e(t); else for (const i of Q.find(t, this._element)) e(i) } } const mi = "show", _i = "mousedown.bs.backdrop", bi = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" }, vi = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" }; class yi extends F { constructor(t) { super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null } static get Default() { return bi } static get DefaultType() { return vi } static get NAME() { return "backdrop" } show(t) { if (!this._config.isVisible) return void m(t); this._append(); const e = this._getElement(); this._config.isAnimated && d(e), e.classList.add(mi), this._emulateAnimation((() => { m(t) })) } hide(t) { this._config.isVisible ? (this._getElement().classList.remove(mi), this._emulateAnimation((() => { this.dispose(), m(t) }))) : m(t) } dispose() { this._isAppended && (P.off(this._element, _i), this._element.remove(), this._isAppended = !1) } _getElement() { if (!this._element) { const t = document.createElement("div"); t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t } return this._element } _configAfterMerge(t) { return t.rootElement = r(t.rootElement), t } _append() { if (this._isAppended) return; const t = this._getElement(); this._config.rootElement.append(t), P.on(t, _i, (() => { m(this._config.clickCallback) })), this._isAppended = !0 } _emulateAnimation(t) { _(t, this._getElement(), this._config.isAnimated) } } const wi = ".bs.focustrap", Ai = "backward", Ei = { autofocus: !0, trapElement: null }, Ti = { autofocus: "boolean", trapElement: "element" }; class Ci extends F { constructor(t) { super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null } static get Default() { return Ei } static get DefaultType() { return Ti } static get NAME() { return "focustrap" } activate() { this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, wi), P.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), P.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0) } deactivate() { this._isActive && (this._isActive = !1, P.off(document, wi)) } _handleFocusin(t) { const { trapElement: e } = this._config; if (t.target === document || t.target === e || e.contains(t.target)) return; const i = Q.focusableChildren(e); 0 === i.length ? e.focus() : this._lastTabNavDirection === Ai ? i[i.length - 1].focus() : i[0].focus() } _handleKeydown(t) { "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ai : "forward") } } const Oi = "hidden.bs.modal", xi = "show.bs.modal", ki = "modal-open", Li = "show", Di = "modal-static", Si = { backdrop: !0, focus: !0, keyboard: !0 }, Ii = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" }; class Ni extends z { constructor(t, e) { super(t, e), this._dialog = Q.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new gi, this._addEventListeners() } static get Default() { return Si } static get DefaultType() { return Ii } static get NAME() { return "modal" } toggle(t) { return this._isShown ? this.hide() : this.show(t) } show(t) { this._isShown || this._isTransitioning || P.trigger(this._element, xi, { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ki), this._adjustDialog(), this._backdrop.show((() => this._showElement(t)))) } hide() { this._isShown && !this._isTransitioning && (P.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Li), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated()))) } dispose() { for (const t of [window, this._dialog]) P.off(t, ".bs.modal"); this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() } handleUpdate() { this._adjustDialog() } _initializeBackDrop() { return new yi({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }) } _initializeFocusTrap() { return new Ci({ trapElement: this._element }) } _showElement(t) { document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0; const e = Q.findOne(".modal-body", this._dialog); e && (e.scrollTop = 0), d(this._element), this._element.classList.add(Li), this._queueCallback((() => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, P.trigger(this._element, "shown.bs.modal", { relatedTarget: t }) }), this._dialog, this._isAnimated()) } _addEventListeners() { P.on(this._element, "keydown.dismiss.bs.modal", (t => { if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition() })), P.on(window, "resize.bs.modal", (() => { this._isShown && !this._isTransitioning && this._adjustDialog() })), P.on(this._element, "mousedown.dismiss.bs.modal", (t => { P.one(this._element, "click.dismiss.bs.modal", (e => { this._dialog.contains(t.target) || this._dialog.contains(e.target) || ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition()) })) })) } _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => { document.body.classList.remove(ki), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, Oi) })) } _isAnimated() { return this._element.classList.contains("fade") } _triggerBackdropTransition() { if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return; const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._element.style.overflowY; "hidden" === e || this._element.classList.contains(Di) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Di), this._queueCallback((() => { this._element.classList.remove(Di), this._queueCallback((() => { this._element.style.overflowY = e }), this._dialog) }), this._dialog), this._element.focus()) } _adjustDialog() { const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0; if (i && !t) { const t = p() ? "paddingLeft" : "paddingRight"; this._element.style[t] = `${e}px` } if (!i && t) { const t = p() ? "paddingRight" : "paddingLeft"; this._element.style[t] = `${e}px` } } _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" } static jQueryInterface(t, e) { return this.each((function () { const i = Ni.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t](e) } })) } } P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) { const e = n(this);["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, xi, (t => { t.defaultPrevented || P.one(e, Oi, (() => { a(this) && this.focus() })) })); const i = Q.findOne(".modal.show"); i && Ni.getInstance(i).hide(), Ni.getOrCreateInstance(e).toggle(this) })), q(Ni), g(Ni); const Pi = "show", ji = "showing", Mi = "hiding", Hi = ".offcanvas.show", $i = "hidePrevented.bs.offcanvas", Wi = "hidden.bs.offcanvas", Bi = { backdrop: !0, keyboard: !0, scroll: !1 }, Fi = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" }; class zi extends z { constructor(t, e) { super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners() } static get Default() { return Bi } static get DefaultType() { return Fi } static get NAME() { return "offcanvas" } toggle(t) { return this._isShown ? this.hide() : this.show(t) } show(t) { this._isShown || P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new gi).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ji), this._queueCallback((() => { this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Pi), this._element.classList.remove(ji), P.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t }) }), this._element, !0)) } hide() { this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Mi), this._backdrop.hide(), this._queueCallback((() => { this._element.classList.remove(Pi, Mi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new gi).reset(), P.trigger(this._element, Wi) }), this._element, !0))) } dispose() { this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() } _initializeBackDrop() { const t = Boolean(this._config.backdrop); return new yi({ className: "offcanvas-backdrop", isVisible: t, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: t ? () => { "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, $i) } : null }) } _initializeFocusTrap() { return new Ci({ trapElement: this._element }) } _addEventListeners() { P.on(this._element, "keydown.dismiss.bs.offcanvas", (t => { "Escape" === t.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, $i)) })) } static jQueryInterface(t) { return this.each((function () { const e = zi.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (t) { const e = n(this); if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return; P.one(e, Wi, (() => { a(this) && this.focus() })); const i = Q.findOne(Hi); i && i !== e && zi.getInstance(i).hide(), zi.getOrCreateInstance(e).toggle(this) })), P.on(window, "load.bs.offcanvas.data-api", (() => { for (const t of Q.find(Hi)) zi.getOrCreateInstance(t).show() })), P.on(window, "resize.bs.offcanvas", (() => { for (const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && zi.getOrCreateInstance(t).hide() })), q(zi), g(zi); const qi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Vi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ki = (t, e) => { const i = t.nodeName.toLowerCase(); return e.includes(i) ? !qi.has(i) || Boolean(Ri.test(t.nodeValue) || Vi.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i))) }, Qi = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Xi = { allowList: Qi, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" }, Yi = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Ui = { entry: "(string|element|function|null)", selector: "(string|element)" }; class Gi extends F { constructor(t) { super(), this._config = this._getConfig(t) } static get Default() { return Xi } static get DefaultType() { return Yi } static get NAME() { return "TemplateFactory" } getContent() { return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean) } hasContent() { return this.getContent().length > 0 } changeContent(t) { return this._checkContent(t), this._config.content = { ...this._config.content, ...t }, this } toHtml() { const t = document.createElement("div"); t.innerHTML = this._maybeSanitize(this._config.template); for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e); const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass); return i && e.classList.add(...i.split(" ")), e } _typeCheckConfig(t) { super._typeCheckConfig(t), this._checkContent(t.content) } _checkContent(t) { for (const [e, i] of Object.entries(t)) super._typeCheckConfig({ selector: e, entry: i }, Ui) } _setContent(t, e, i) { const n = Q.findOne(i, t); n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove()) } _maybeSanitize(t) { return this._config.sanitize ? function (t, e, i) { if (!t.length) return t; if (i && "function" == typeof i) return i(t); const n = (new window.DOMParser).parseFromString(t, "text/html"), s = [].concat(...n.body.querySelectorAll("*")); for (const t of s) { const i = t.nodeName.toLowerCase(); if (!Object.keys(e).includes(i)) { t.remove(); continue } const n = [].concat(...t.attributes), s = [].concat(e["*"] || [], e[i] || []); for (const e of n) Ki(e, s) || t.removeAttribute(e.nodeName) } return n.body.innerHTML }(t, this._config.allowList, this._config.sanitizeFn) : t } _resolvePossibleFunction(t) { return "function" == typeof t ? t(this) : t } _putElementInTemplate(t, e) { if (this._config.html) return e.innerHTML = "", void e.append(t); e.textContent = t.textContent } } const Ji = new Set(["sanitize", "allowList", "sanitizeFn"]), Zi = "fade", tn = "show", en = ".modal", nn = "hide.bs.modal", sn = "hover", on = "focus", rn = { AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left" }, an = { allowList: Qi, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 0], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, ln = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" }; class cn extends z { constructor(t, e) { if (void 0 === Ke) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)"); super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners() } static get Default() { return an } static get DefaultType() { return ln } static get NAME() { return "tooltip" } enable() { this._isEnabled = !0 } disable() { this._isEnabled = !1 } toggleEnabled() { this._isEnabled = !this._isEnabled } toggle(t) { if (this._isEnabled) { if (t) { const e = this._initializeOnDelegatedTarget(t); return e._activeTrigger.click = !e._activeTrigger.click, void (e._isWithActiveTrigger() ? e._enter() : e._leave()) } this._isShown() ? this._leave() : this._enter() } } dispose() { clearTimeout(this._timeout), P.off(this._element.closest(en), nn, this._hideModalHandler), this.tip && this.tip.remove(), this._config.originalTitle && this._element.setAttribute("title", this._config.originalTitle), this._disposePopper(), super.dispose() } show() { if ("none" === this._element.style.display) throw new Error("Please use show on visible elements"); if (!this._isWithContent() || !this._isEnabled) return; const t = P.trigger(this._element, this.constructor.eventName("show")), e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element); if (t.defaultPrevented || !e) return; this.tip && (this.tip.remove(), this.tip = null); const i = this._getTipElement(); this._element.setAttribute("aria-describedby", i.getAttribute("id")); const { container: n } = this._config; if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(i), i.classList.add(tn), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) P.on(t, "mouseover", h); this._queueCallback((() => { P.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1 }), this.tip, this._isAnimated()) } hide() { if (!this._isShown()) return; if (P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return; const t = this._getTipElement(); if (t.classList.remove(tn), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) P.off(t, "mouseover", h); this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback((() => { this._isWithActiveTrigger() || (this._isHovered || t.remove(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper()) }), this.tip, this._isAnimated()) } update() { this._popper && this._popper.update() } _isWithContent() { return Boolean(this._getTitle()) } _getTipElement() { return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip } _createTipElement(t) { const e = this._getTemplateFactory(t).toHtml(); if (!e) return null; e.classList.remove(Zi, tn), e.classList.add(`bs-${this.constructor.NAME}-auto`); const i = (t => { do { t += Math.floor(1e6 * Math.random()) } while (document.getElementById(t)); return t })(this.constructor.NAME).toString(); return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Zi), e } setContent(t) { this._newContent = t, this._isShown() && (this._disposePopper(), this.show()) } _getTemplateFactory(t) { return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Gi({ ...this._config, content: t, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory } _getContentForTemplate() { return { ".tooltip-inner": this._getTitle() } } _getTitle() { return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle } _initializeOnDelegatedTarget(t) { return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig()) } _isAnimated() { return this._config.animation || this.tip && this.tip.classList.contains(Zi) } _isShown() { return this.tip && this.tip.classList.contains(tn) } _createPopper(t) { const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement, i = rn[e.toUpperCase()]; return Ve(this._element, t, this._getPopperConfig(i)) } _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t } _resolvePossibleFunction(t) { return "function" == typeof t ? t.call(this._element) : t } _getPopperConfig(t) { const e = { placement: t, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: t => { this._getTipElement().setAttribute("data-popper-placement", t.state.placement) } }] }; return { ...e, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig } } _setListeners() { const t = this._config.trigger.split(" "); for (const e of t) if ("click" === e) P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => this.toggle(t))); else if ("manual" !== e) { const t = e === sn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i = e === sn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout"); P.on(this._element, t, this._config.selector, (t => { const e = this._initializeOnDelegatedTarget(t); e._activeTrigger["focusin" === t.type ? on : sn] = !0, e._enter() })), P.on(this._element, i, this._config.selector, (t => { const e = this._initializeOnDelegatedTarget(t); e._activeTrigger["focusout" === t.type ? on : sn] = e._element.contains(t.relatedTarget), e._leave() })) } this._hideModalHandler = () => { this._element && this.hide() }, P.on(this._element.closest(en), nn, this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: "manual", selector: "" } : this._fixTitle() } _fixTitle() { const t = this._config.originalTitle; t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.removeAttribute("title")) } _enter() { this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => { this._isHovered && this.show() }), this._config.delay.show)) } _leave() { this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => { this._isHovered || this.hide() }), this._config.delay.hide)) } _setTimeout(t, e) { clearTimeout(this._timeout), this._timeout = setTimeout(t, e) } _isWithActiveTrigger() { return Object.values(this._activeTrigger).includes(!0) } _getConfig(t) { const e = B.getDataAttributes(this._element); for (const t of Object.keys(e)) Ji.has(t) && delete e[t]; return t = { ...e, ..."object" == typeof t && t ? t : {} }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t } _configAfterMerge(t) { return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t.originalTitle = this._element.getAttribute("title") || "", "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t } _getDelegateConfig() { const t = {}; for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]); return t } _disposePopper() { this._popper && (this._popper.destroy(), this._popper = null) } static jQueryInterface(t) { return this.each((function () { const e = cn.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } g(cn); const hn = { ...cn.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, dn = { ...cn.DefaultType, content: "(null|string|element|function)" }; class un extends cn { static get Default() { return hn } static get DefaultType() { return dn } static get NAME() { return "popover" } _isWithContent() { return this._getTitle() || this._getContent() } _getContentForTemplate() { return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() } } _getContent() { return this._resolvePossibleFunction(this._config.content) } static jQueryInterface(t) { return this.each((function () { const e = un.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } g(un); const fn = "click.bs.scrollspy", pn = "active", gn = "[href]", mn = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [.1, .5, 1] }, _n = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" }; class bn extends z { constructor(t, e) { super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh() } static get Default() { return mn } static get DefaultType() { return _n } static get NAME() { return "scrollspy" } refresh() { this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(); for (const t of this._observableSections.values()) this._observer.observe(t) } dispose() { this._observer.disconnect(), super.dispose() } _configAfterMerge(t) { return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))), t } _maybeEnableSmoothScroll() { this._config.smoothScroll && (P.off(this._config.target, fn), P.on(this._config.target, fn, gn, (t => { const e = this._observableSections.get(t.target.hash); if (e) { t.preventDefault(); const i = this._rootElement || window, n = e.offsetTop - this._element.offsetTop; if (i.scrollTo) return void i.scrollTo({ top: n, behavior: "smooth" }); i.scrollTop = n } }))) } _getNewObserver() { const t = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin }; return new IntersectionObserver((t => this._observerCallback(t)), t) } _observerCallback(t) { const e = t => this._targetLinks.get(`#${t.target.id}`), i = t => { this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t)) }, n = (this._rootElement || document.documentElement).scrollTop, s = n >= this._previousScrollData.parentScrollTop; this._previousScrollData.parentScrollTop = n; for (const o of t) { if (!o.isIntersecting) { this._activeTarget = null, this._clearActiveClass(e(o)); continue } const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop; if (s && t) { if (i(o), !n) return } else s || t || i(o) } } _initializeTargetsAndObservables() { this._targetLinks = new Map, this._observableSections = new Map; const t = Q.find(gn, this._config.target); for (const e of t) { if (!e.hash || l(e)) continue; const t = Q.findOne(e.hash, this._element); a(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t)) } } _process(t) { this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(pn), this._activateParents(t), P.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: t })) } _activateParents(t) { if (t.classList.contains("dropdown-item")) Q.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(pn); else for (const e of Q.parents(t, ".nav, .list-group")) for (const t of Q.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add(pn) } _clearActiveClass(t) { t.classList.remove(pn); const e = Q.find("[href].active", t); for (const t of e) t.classList.remove(pn) } static jQueryInterface(t) { return this.each((function () { const e = bn.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } P.on(window, "load.bs.scrollspy.data-api", (() => { for (const t of Q.find('[data-bs-spy="scroll"]')) bn.getOrCreateInstance(t) })), g(bn); const vn = "ArrowLeft", yn = "ArrowRight", wn = "ArrowUp", An = "ArrowDown", En = "active", Tn = "fade", Cn = "show", On = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', xn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${On}`; class kn extends z { constructor(t) { super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, "keydown.bs.tab", (t => this._keydown(t)))) } static get NAME() { return "tab" } show() { const t = this._element; if (this._elemIsActive(t)) return; const e = this._getActiveElem(), i = e ? P.trigger(e, "hide.bs.tab", { relatedTarget: t }) : null; P.trigger(t, "show.bs.tab", { relatedTarget: e }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e)) } _activate(t, e) { t && (t.classList.add(En), this._activate(n(t)), this._queueCallback((() => { "tab" === t.getAttribute("role") ? (t.focus(), t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), P.trigger(t, "shown.bs.tab", { relatedTarget: e })) : t.classList.add(Cn) }), t, t.classList.contains(Tn))) } _deactivate(t, e) { t && (t.classList.remove(En), t.blur(), this._deactivate(n(t)), this._queueCallback((() => { "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), P.trigger(t, "hidden.bs.tab", { relatedTarget: e })) : t.classList.remove(Cn) }), t, t.classList.contains(Tn))) } _keydown(t) { if (![vn, yn, wn, An].includes(t.key)) return; t.stopPropagation(), t.preventDefault(); const e = [yn, An].includes(t.key), i = b(this._getChildren().filter((t => !l(t))), t.target, e, !0); i && kn.getOrCreateInstance(i).show() } _getChildren() { return Q.find(xn, this._parent) } _getActiveElem() { return this._getChildren().find((t => this._elemIsActive(t))) || null } _setInitialAttributes(t, e) { this._setAttributeIfNotExists(t, "role", "tablist"); for (const t of e) this._setInitialAttributesOnChild(t) } _setInitialAttributesOnChild(t) { t = this._getInnerElement(t); const e = this._elemIsActive(t), i = this._getOuterElement(t); t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t) } _setInitialAttributesOnTargetPanel(t) { const e = n(t); e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`)) } _toggleDropDown(t, e) { const i = this._getOuterElement(t); if (!i.classList.contains("dropdown")) return; const n = (t, n) => { const s = Q.findOne(t, i); s && s.classList.toggle(n, e) }; n(".dropdown-toggle", En), n(".dropdown-menu", Cn), n(".dropdown-item", En), i.setAttribute("aria-expanded", e) } _setAttributeIfNotExists(t, e, i) { t.hasAttribute(e) || t.setAttribute(e, i) } _elemIsActive(t) { return t.classList.contains(En) } _getInnerElement(t) { return t.matches(xn) ? t : Q.findOne(xn, t) } _getOuterElement(t) { return t.closest(".nav-item, .list-group-item") || t } static jQueryInterface(t) { return this.each((function () { const e = kn.getOrCreateInstance(this); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } P.on(document, "click.bs.tab", On, (function (t) { ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || kn.getOrCreateInstance(this).show() })), P.on(window, "load.bs.tab", (() => { for (const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) kn.getOrCreateInstance(t) })), g(kn); const Ln = "hide", Dn = "show", Sn = "showing", In = { animation: "boolean", autohide: "boolean", delay: "number" }, Nn = { animation: !0, autohide: !0, delay: 5e3 }; class Pn extends z { constructor(t, e) { super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners() } static get Default() { return Nn } static get DefaultType() { return In } static get NAME() { return "toast" } show() { P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Ln), d(this._element), this._element.classList.add(Dn, Sn), this._queueCallback((() => { this._element.classList.remove(Sn), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide() }), this._element, this._config.animation)) } hide() { this.isShown() && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Sn), this._queueCallback((() => { this._element.classList.add(Ln), this._element.classList.remove(Sn, Dn), P.trigger(this._element, "hidden.bs.toast") }), this._element, this._config.animation))) } dispose() { this._clearTimeout(), this.isShown() && this._element.classList.remove(Dn), super.dispose() } isShown() { return this._element.classList.contains(Dn) } _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => { this.hide() }), this._config.delay))) } _onInteraction(t, e) { switch (t.type) { case "mouseover": case "mouseout": this._hasMouseInteraction = e; break; case "focusin": case "focusout": this._hasKeyboardInteraction = e }if (e) return void this._clearTimeout(); const i = t.relatedTarget; this._element === i || this._element.contains(i) || this._maybeScheduleHide() } _setListeners() { P.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), P.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), P.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), P.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1))) } _clearTimeout() { clearTimeout(this._timeout), this._timeout = null } static jQueryInterface(t) { return this.each((function () { const e = Pn.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } return q(Pn), g(Pn), { Alert: R, Button: K, Carousel: at, Collapse: pt, Dropdown: hi, Modal: Ni, Offcanvas: zi, Popover: un, ScrollSpy: bn, Tab: kn, Toast: Pn, Tooltip: cn } }));


         /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (C, e) { "use strict"; var t = [], E = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) { return "function" == typeof e && "number" != typeof e.nodeType }, x = function (e) { return null != e && e === e.window }, c = { type: !0, src: !0, nonce: !0, noModule: !0 }; function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i); n.head.appendChild(o).parentNode.removeChild(o) } function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.4.1", k = function (e, t) { return new k.fn.init(e, t) }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; function d(e) { var t = !!e && "length" in e && e.length, n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) } k.fn = k.prototype = { jquery: f, constructor: k, length: 0, toArray: function () { return s.call(this) }, get: function (e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = k.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return k.each(this, e) }, map: function (n) { return this.pushStack(k.map(this, function (e, t) { return n.call(e, t, e) })) }, slice: function () { return this.pushStack(s.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, k.extend = k.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, k.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e, t) { b(e, { nonce: t && t.nonce }) }, each: function (e, t) { var n, r = 0; if (d(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: function (e) { return null == e ? "" : (e + "").replace(p, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, n) { var r, i, o = 0, a = []; if (d(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g.apply([], a) }, guid: 1, support: y }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var h = function (n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function (e, t) { return e === t && (l = !0), 0 }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) { for (var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n; return -1 }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + $), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ne = function (e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }, oe = function () { T() }, ae = be(function (e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function (e, t) { L.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t))) if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n } if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && U.test(t)) { (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length; while (o--) l[o] = "#" + s + " " + xe(l[o]); c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { A(t, !0) } finally { s === k && e.removeAttribute("id") } } } return g(t.replace(B, "$1"), e, n, r) } function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } } function le(e) { return e[k] = !0, e } function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function fe(e, t) { var n = e.split("|"), r = n.length; while (r--) b.attrHandle[n[r]] = t } function pe(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function de(t) { return function (e) { return "input" === e.nodeName.toLowerCase() && e.type === t } } function he(n) { return function (e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } } function ge(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } } function ve(a) { return le(function (o) { return o = +o, le(function (e, t) { var n, r = a([], e.length, o), i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) } function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function (e) { var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function (e) { var t, n, r = e ? e.ownerDocument || e : m; return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function (e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) { return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length }), d.getById ? (b.filter.ID = function (e) { var t = e.replace(te, ne); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(te, ne); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) { a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]") }), ce(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, D = t ? function (e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function (e, t) { if (e === t) return l = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0 }), C }, se.matches = function (e, t) { return se(e, null, null, t) }, se.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { A(t, !0) } return 0 < se(t, C, null, [e]).length }, se.contains = function (e, t) { return (e.ownerDocument || e) !== C && T(e), y(e, t) }, se.attr = function (e, t) { (e.ownerDocument || e) !== C && T(e); var n = b.attrHandle[t.toLowerCase()], r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function (e) { return (e + "").replace(re, ie) }, se.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = p[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (n, r, i) { return function (e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function (h, e, t, g, v) { var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e; return 1 === g && 0 === v ? function (e) { return !!e.parentNode } : function (e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1; u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) { i[h] = [S, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break; return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function (e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function (e) { var r = [], i = [], s = f(e.replace(B, "$1")); return s[k] ? le(function (e, t, n, r) { var i, o = s(e, null, r, []), a = e.length; while (a--) (i = o[a]) && (e[a] = !(t[a] = i)) }) : function (e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function (t) { return function (e) { return 0 < se(t, e).length } }), contains: le(function (t) { return t = t.replace(te, ne), function (e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function (n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) { var t; do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function (e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function (e) { return e === a }, focus: function (e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !b.pseudos.empty(e) }, header: function (e) { return J.test(e.nodeName) }, input: function (e) { return Q.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function () { return [0] }), last: ve(function (e, t) { return [t - 1] }), eq: ve(function (e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: ve(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r); return e }), gt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e); function me() { } function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function be(s, e, t) { var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++; return e.first ? function (e, t, n) { while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n); return !1 } : function (e, t, n) { var r, i, o, a = [S, p]; if (n) { while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else { if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } } function we(i) { return 1 < i.length ? function (e, t, n) { var r = i.length; while (r--) if (!i[r](e, t, n)) return !1; return !0 } : i[0] } function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function Ce(d, h, g, v, y, e) { return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) { var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--) (a = p[o]) && i.push(f[o] = a); y(null, p = [], i, r) } o = p.length; while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) } function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) { return e === i }, a, !0), l = be(function (e) { return -1 < P(i, e) }, a, !0), c = [function (e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) { for (n = ++s; n < r; n++)if (b.relative[e[n].type]) break; return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) } c.push(t) } return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0); a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(B, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function (e, t) { var n, v, y, m, x, r, i = [], o = [], a = N[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a); (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) { var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length; for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument === C || (T(o), n = !E); while (s = v[a++]) if (s(o, t || C, n)) { r.push(o); break } i && (S = h) } m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r)); f = Te(f) } H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (S = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function (e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function (e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function (e) { return null == e.getAttribute("disabled") }) || fe(R, function (e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C); k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape; var T = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && k(e).is(n)) break; r.push(e) } return r }, S = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, N = k.expr.match.needsContext; function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function j(e, n, r) { return m(n) ? k.grep(e, function (e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? k.grep(e, function (e) { return e === n !== r }) : "string" != typeof n ? k.grep(e, function (e) { return -1 < i.call(n, e) !== r }) : k.filter(n, e, r) } k.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) { return 1 === e.nodeType })) }, k.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(k(e).filter(function () { for (t = 0; t < r; t++)if (k.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)k.find(e, i[t], n); return 1 < r ? k.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(j(this, e || [], !1)) }, not: function (e) { return this.pushStack(j(this, e || [], !0)) }, is: function (e) { return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length } }); var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (k.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || q, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this) }).prototype = k.fn, q = k(E); var H = /^(?:parents|prev(?:Until|All))/, O = { children: !0, contents: !0, next: !0, prev: !0 }; function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } k.fn.extend({ has: function (e) { var t = k(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (k.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e); if (!N.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? k.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), k.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return T(e, "parentNode") }, parentsUntil: function (e, t, n) { return T(e, "parentNode", n) }, next: function (e) { return P(e, "nextSibling") }, prev: function (e) { return P(e, "previousSibling") }, nextAll: function (e) { return T(e, "nextSibling") }, prevAll: function (e) { return T(e, "previousSibling") }, nextUntil: function (e, t, n) { return T(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return T(e, "previousSibling", n) }, siblings: function (e) { return S((e.parentNode || {}).firstChild, e) }, children: function (e) { return S(e.firstChild) }, contents: function (e) { return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes)) } }, function (r, i) { k.fn[r] = function (e, t) { var n = k.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n) } }); var R = /[^\x20\t\r\n\f]+/g; function M(e) { return e } function I(e) { throw e } function W(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } k.Callbacks = function (r) { var e, n; r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) { n[t] = !0 }), n) : k.extend({}, r); var i, t, o, a, s = [], u = [], l = -1, c = function () { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") }, f = { add: function () { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { k.each(e, function (e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function () { return k.each(arguments, function (e, t) { var n; while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function (e) { return e ? -1 < k.inArray(e, s) : 0 < s.length }, empty: function () { return s && (s = []), this }, disable: function () { return a = u = [], s = t = "", this }, disabled: function () { return !s }, lock: function () { return a = u = [], t || i || (s = t = ""), this }, locked: function () { return !!a }, fireWith: function (e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!o } }; return f }, k.extend({ Deferred: function (e) { var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]], i = "pending", a = { state: function () { return i }, always: function () { return s.done(arguments).fail(arguments), this }, "catch": function (e) { return a.then(null, e) }, pipe: function () { var i = arguments; return k.Deferred(function (r) { k.each(o, function (e, t) { var n = m(i[t[4]]) && i[t[4]]; s[t[1]](function () { var e = n && n.apply(this, arguments); e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function (t, n, r) { var u = 0; function l(i, o, a, s) { return function () { var n = this, r = arguments, e = function () { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } }, t = s ? e : function () { try { e() } catch (e) { k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r)) } }; i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t)) } } return k.Deferred(function (e) { o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I)) }).promise() }, promise: function (e) { return null != e ? k.extend(e, a) : a } }, s = {}; return k.each(o, function (e, t) { var n = t[2], r = t[5]; a[t[1]] = n.add, r && n.add(function () { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function (e) { var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = k.Deferred(), a = function (t) { return function (e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) W(i[t], a(t), o.reject); return o.promise() } }); var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; k.Deferred.exceptionHook = function (e, t) { C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, k.readyException = function (e) { C.setTimeout(function () { throw e }) }; var F = k.Deferred(); function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready() } k.fn.ready = function (e) { return F.then(e)["catch"](function (e) { k.readyException(e) }), this }, k.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]) } }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var _ = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === w(n)) for (s in i = !0, n) _(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(k(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, z = /^-ms-/, U = /-([a-z])/g; function X(e, t) { return t.toUpperCase() } function V(e) { return e.replace(z, "ms-").replace(U, X) } var G = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function Y() { this.expando = k.expando + Y.uid++ } Y.uid = 1, Y.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[V(t)] = n; else for (r in t) i[V(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length; while (n--) delete r[t[n]] } (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !k.isEmptyObject(t) } }; var Q = new Y, J = new Y, K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g; function ee(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i) } catch (e) { } J.set(e, t, n) } else n = void 0; return n } k.extend({ hasData: function (e) { return J.hasData(e) || Q.hasData(e) }, data: function (e, t, n) { return J.access(e, t, n) }, removeData: function (e, t) { J.remove(e, t) }, _data: function (e, t, n) { return Q.access(e, t, n) }, _removeData: function (e, t) { Q.remove(e, t) } }), k.fn.extend({ data: function (n, e) { var t, r, i, o = this[0], a = o && o.attributes; if (void 0 === n) { if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r])); Q.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function () { J.set(this, n) }) : _(this, function (e) { var t; if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0; this.each(function () { J.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function (e) { return this.each(function () { J.remove(this, e) }) } }), k.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { k.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return Q.get(e, n) || Q.access(e, n, { empty: k.Callbacks("once memory").add(function () { Q.remove(e, [t + "queue", n]) }) }) } }), k.fn.extend({ queue: function (t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () { var e = k.queue(this, t, n); k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t) }) }, dequeue: function (e) { return this.each(function () { k.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"), re = ["Top", "Right", "Bottom", "Left"], ie = E.documentElement, oe = function (e) { return k.contains(e.ownerDocument, e) }, ae = { composed: !0 }; ie.getRootNode && (oe = function (e) { return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument }); var se = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display") }, ue = function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i }; function le(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return k.css(e, t, "") }, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, k.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ce = {}; function fe(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n))); for (c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]); return e } k.fn.extend({ show: function () { return fe(this, !0) }, hide: function () { return fe(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { se(this) ? k(this).show() : k(this).hide() }) } }); var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n } function ye(e, t) { for (var n = 0, r = e.length; n < r; n++)Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval")) } ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td; var me, xe, be = /<|&#?\w+;/; function we(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o); else if (be.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; k.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && -1 < k.inArray(o, r)) i && i.push(o); else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue; var Te = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ee = /^([^.]*)(?:\.(.+)|)/; function ke() { return !0 } function Se() { return !1 } function Ne(e, t) { return e === function () { try { return E.activeElement } catch (e) { } }() == ("focus" === t) } function Ae(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return k().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = k.guid++)), e.each(function () { k.event.add(this, t, i, r, n) }) } function De(e, i, o) { o ? (Q.set(e, i, !1), k.event.add(e, i, { namespace: !1, handler: function (e) { var t, n, r = Q.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value } else r.length && (Q.set(this, i, { value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke) } k.event = { global: {}, add: function (t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t); if (v) { n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) { return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(R) || [""]).length; while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(R) || [""]).length; while (l--) if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]) } else for (d in u) k.event.remove(e, d + t[l], n, r, !0); k.isEmptyObject(u) && Q.remove(e, "handle events") } }, dispatch: function (e) { var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {}; for (u[0] = s, t = 1; t < arguments.length; t++)u[t] = arguments[t]; if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) { a = k.event.handlers.call(this, s, l), t = 0; while ((i = a[t++]) && !s.isPropagationStopped()) { s.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, s), s.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (t, e) { Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function (e) { return e[k.expando] ? e : new k.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1 }, trigger: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0 }, _default: function (e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, k.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, k.Event = function (e, t) { if (!(this instanceof k.Event)) return new k.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0 }, k.Event.prototype = { constructor: k.Event, isDefaultPrevented: Se, isPropagationStopped: Se, isImmediatePropagationStopped: Se, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) { var t = e.button; return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, k.event.addProp), k.each({ focus: "focusin", blur: "focusout" }, function (e, t) { k.event.special[e] = { setup: function () { return De(this, e, Ne), !1 }, trigger: function () { return De(this, e), !0 }, delegateType: t } }), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) { k.event.special[e] = { delegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), k.fn.extend({ on: function (e, t, n, r) { return Ae(this, e, t, n, r) }, one: function (e, t, n, r) { return Ae(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () { k.event.remove(this, e, n, t) }) } }); var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, qe = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Oe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e } function Pe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function Re(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Me(e, t) { var n, r, i, o, a, s, u, l; if (1 === t.nodeType) { if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++)k.event.add(t, i, l[i][n]); J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u)) } } function Ie(n, r, i, o) { r = g.apply([], r); var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) { var t = n.eq(e); h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o) }); if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : b(u.textContent.replace(He, ""), u, l)) } return n } function We(e, t, n) { for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e } k.extend({ htmlPrefilter: function (e) { return e.replace(je, "<$1></$2>") }, clone: function (e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)Me(o[r], a[r]); else Me(e, c); return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function (e) { for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)if (G(n)) { if (t = n[Q.expando]) { if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle); n[Q.expando] = void 0 } n[J.expando] && (n[J.expando] = void 0) } } }), k.fn.extend({ detach: function (e) { return We(this, e, !0) }, remove: function (e) { return We(this, e) }, text: function (e) { return _(this, function (e) { return void 0 === e ? k.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return Ie(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e) }) }, prepend: function () { return Ie(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Oe(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return Ie(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return Ie(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return k.clone(this, e, t) }) }, html: function (e) { return _(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = k.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var n = []; return Ie(this, arguments, function (e) { var t = this.parentNode; k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) { k.fn[e] = function (e) { for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), Fe = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) }, Be = new RegExp(re.join("|"), "i"); function _e(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a } function ze(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } !function () { function e() { if (u) { s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u); var e = C.getComputedStyle(u); n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null } } function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div"); u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, { boxSizingReliable: function () { return e(), r }, pixelBoxStyles: function () { return e(), o }, pixelPosition: function () { return e(), n }, reliableMarginLeft: function () { return e(), a }, scrollboxSize: function () { return e(), i } })) }(); var Ue = ["Webkit", "Moz", "ms"], Xe = E.createElement("div").style, Ve = {}; function Ge(e) { var t = k.cssProps[e] || Ve[e]; return t || (e in Xe ? e : Ve[e] = function (e) { var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; while (n--) if ((e = Ue[n] + t) in Xe) return e }(e) || e) } var Ye = /^(none|table(?!-c[ea]).+)/, Qe = /^--/, Je = { position: "absolute", visibility: "hidden", display: "block" }, Ke = { letterSpacing: "0", fontWeight: "400" }; function Ze(e, t, n) { var r = ne.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function et(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u } function tt(e, t, n) { var r = Fe(e), i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r), o = i, a = _e(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1); if ($e.test(a)) { if (!n) return a; a = "auto" } return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px" } function nt(e, t, n, r, i) { return new nt.prototype.init(e, t, n, r, i) } k.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = _e(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = V(t), u = Qe.test(t), l = e.style; if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = V(t); return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), k.each(["height", "width"], function (e, u) { k.cssHooks[u] = { get: function (e, t, n) { if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () { return tt(e, u, n) }) }, set: function (e, t, n) { var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s) } } }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), k.each({ margin: "", padding: "", border: "Width" }, function (i, o) { k.cssHooks[i + o] = { expand: function (e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)n[i + re[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (k.cssHooks[i + o].set = Ze) }), k.fn.extend({ css: function (e, t) { return _(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = Fe(e), i = t.length; a < i; a++)o[t[a]] = k.css(e, t[a], !1, r); return o } return void 0 !== n ? k.style(e, t, n) : k.css(e, t) }, e, t, 1 < arguments.length) } }), ((k.Tween = nt).prototype = { constructor: nt, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px") }, cur: function () { var e = nt.propHooks[this.prop]; return e && e.get ? e.get(this) : nt.propHooks._default.get(this) }, run: function (e) { var t, n = nt.propHooks[this.prop]; return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this } }).init.prototype = nt.prototype, (nt.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = nt.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, k.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, k.fx = nt.prototype.init, k.fx.step = {}; var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/; function lt() { it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick()) } function ct() { return C.setTimeout(function () { rt = void 0 }), rt = Date.now() } function ft(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = re[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function pt(e, t, n) { for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function dt(o, e, t) { var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function () { delete u.elem }), u = function () { if (a) return !1; for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) }, l = s.promise({ elem: o, props: k.extend({}, e), opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t), originalProperties: e, originalOptions: t, startTime: rt || ct(), duration: t.duration, tweens: [], createTween: function (e, t) { var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function (e) { var t = 0, n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++)l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i }(c, l.opts.specialEasing); r < i; r++)if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n; return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l } k.Animation = k.extend(dt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return le(n.elem, e, ne.exec(t), n), n }] }, tweener: function (e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(R); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow"); for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, k.queue(e, "fx").length || a.empty.fire() }) })), t) if (i = t[r], st.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue; g = !0 } d[r] = v && v[r] || k.style(e, r) } if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () { for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r]) })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function (e, t) { t ? dt.prefilters.unshift(e) : dt.prefilters.push(e) } }), k.speed = function (e, t, n) { var r = e && "object" == typeof e ? k.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue) }, r }, k.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (t, e, n, r) { var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function () { var e = dt(this, k.extend({}, t), o); (i || Q.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (i, e, o) { var a = function (e) { var t = e.stop; delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () { var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = Q.get(this); if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]); for (t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); !e && o || k.dequeue(this, i) }) }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0; for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this); delete t.finish }) } }), k.each(["toggle", "show", "hide"], function (e, r) { var i = k.fn[r]; k.fn[r] = function (e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n) } }), k.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) { k.fn[e] = function (e, t, n) { return this.animate(r, e, t, n) } }), k.timers = [], k.fx.tick = function () { var e, t = 0, n = k.timers; for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || k.fx.stop(), rt = void 0 }, k.fx.timer = function (e) { k.timers.push(e), k.fx.start() }, k.fx.interval = 13, k.fx.start = function () { it || (it = !0, lt()) }, k.fx.stop = function () { it = null }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function (r, e) { return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) { var n = C.setTimeout(e, r); t.stop = function () { C.clearTimeout(n) } }) }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value; var ht, gt = k.expr.attrHandle; k.fn.extend({ attr: function (e, t) { return _(this, k.attr, e, t, 1 < arguments.length) }, removeAttr: function (e) { return this.each(function () { k.removeAttr(this, e) }) } }), k.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(R); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), ht = { set: function (e, t, n) { return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n } }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) { var a = gt[t] || k.find.attr; gt[t] = function (e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r } }); var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i; function mt(e) { return (e.match(R) || []).join(" ") } function xt(e) { return e.getAttribute && e.getAttribute("class") || "" } function bt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [] } k.fn.extend({ prop: function (e, t) { return _(this, k.prop, e, t, 1 < arguments.length) }, removeProp: function (e) { return this.each(function () { delete this[k.propFix[e] || e] }) } }), k.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = k.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (k.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { k.propFix[this.toLowerCase()] = this }), k.fn.extend({ addClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { k(this).addClass(t.call(this, e, xt(this))) }); if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = mt(r)) && n.setAttribute("class", s) } return this }, removeClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { k(this).removeClass(t.call(this, e, xt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") { a = 0; while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " "); i !== (s = mt(r)) && n.setAttribute("class", s) } return this }, toggleClass: function (i, t) { var o = typeof i, a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) { k(this).toggleClass(i.call(this, e, xt(this), t), t) }) : this.each(function () { var e, t, n, r; if (a) { t = 0, n = k(this), r = bt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || "")) }) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0; return !1 } }); var wt = /\r/g; k.fn.extend({ val: function (n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function (e) { var t; 1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) { return null == e ? "" : e + "" })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0 } }), k.extend({ valHooks: { option: { get: function (e) { var t = k.find.attr(e, "value"); return null != t ? t : mt(k.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = k(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = k.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), k.each(["radio", "checkbox"], function () { k.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t) } }, y.checkOn || (k.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function (e) { e.stopPropagation() }; k.extend(k.event, { trigger: function (e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o; a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) } i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function (e, t, n) { var r = k.extend(new k.Event, n, { type: e, isSimulated: !0 }); k.event.trigger(r, null, t) } }), k.fn.extend({ trigger: function (e, t) { return this.each(function () { k.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return k.event.trigger(e, t, n, !0) } }), y.focusin || k.each({ focus: "focusin", blur: "focusout" }, function (n, r) { var i = function (e) { k.event.simulate(r, e.target, k.event.fix(e)) }; k.event.special[r] = { setup: function () { var e = this.ownerDocument || this, t = Q.access(e, r); t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1) }, teardown: function () { var e = this.ownerDocument || this, t = Q.access(e, r) - 1; t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r)) } } }); var Et = C.location, kt = Date.now(), St = /\?/; k.parseXML = function (e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t }; var Nt = /\[\]$/, At = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i, jt = /^(?:input|select|textarea|keygen)/i; function qt(n, e, r, i) { var t; if (Array.isArray(e)) k.each(e, function (e, t) { r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) qt(n + "[" + t + "]", e[t], r, i) } k.param = function (e, t) { var n, r = [], i = function (e, t) { var n = m(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () { i(this.name, this.value) }); else for (n in e) qt(n, e[n], t, i); return r.join("&") }, k.fn.extend({ serialize: function () { return k.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = k.prop(this, "elements"); return e ? k.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e)) }).map(function (e, t) { var n = k(this).val(); return null == n ? null : Array.isArray(n) ? k.map(n, function (e) { return { name: t.name, value: e.replace(At, "\r\n") } }) : { name: t.name, value: n.replace(At, "\r\n") } }).get() } }); var Lt = /%20/g, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/, Mt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Ft = E.createElement("a"); function Bt(o) { return function (e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0, i = e.toLowerCase().match(R) || []; if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } } function _t(t, i, o, a) { var s = {}, u = t === Wt; function l(e) { var r; return s[e] = !0, k.each(t[e] || [], function (e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") } function zt(e, t) { var n, r, i = k.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && k.extend(!0, e, r), e } Ft.href = Et.href, k.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e) }, ajaxPrefilter: Bt(It), ajaxTransport: Bt(Wt), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (h) { if (!n) { n = {}; while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function () { return h ? p : null }, setRequestHeader: function (e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function (e) { return null == h && (v.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]]; return this }, abort: function (e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T; for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T; v.async && 0 < v.timeout && (d = C.setTimeout(function () { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e; l(-1, e) } } else l(-1, "No Transport"); function l(e, t, n, r) { var i, o, a, s, u, l = t; h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), s = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return k.get(e, t, n, "json") }, getScript: function (e, t) { return k.get(e, void 0, t, "script") } }), k.each(["get", "post"], function (e, i) { k[i] = function (e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({ url: e, type: i, dataType: r, data: t, success: n }, k.isPlainObject(e) && e)) } }), k._evalUrl = function (e, t) { return k.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { k.globalEval(e, t) } }) }, k.fn.extend({ wrapAll: function (e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (n) { return m(n) ? this.each(function (e) { k(this).wrapInner(n.call(this, e)) }) : this.each(function () { var e = k(this), t = e.contents(); t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function (t) { var n = m(t); return this.each(function (e) { k(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { k(this).replaceWith(this.childNodes) }), this } }), k.expr.pseudos.hidden = function (e) { return !k.expr.pseudos.visible(e) }, k.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, k.ajaxSettings.xhr = function () { try { return new C.XMLHttpRequest } catch (e) { } }; var Ut = { 0: 200, 1223: 204 }, Xt = k.ajaxSettings.xhr(); y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) { var o, a; if (y.cors || Xt && !i.crossDomain) return { send: function (e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]); o = function (e) { return function () { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () { 4 === r.readyState && C.setTimeout(function () { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function () { o && o() } } }), k.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return k.globalEval(e), e } } }), k.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), k.ajaxTransport("script", function (n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) { r = k("").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function () { i && i() } } }); var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/; k.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Gt.pop() || k.expando + "_" + kt++; return this[e] = !0, e } }), k.ajaxPrefilter("json jsonp", function (e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () { return o || k.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function () { o = arguments }, n.always(function () { void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes))); var r, i, o }, k.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { k.fn[t] = function (e) { return this.on(t, e) } }), k.expr.pseudos.animated = function (t) { return k.grep(k.timers, function (e) { return t === e.elem }).length }, k.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, k.fn.extend({ offset: function (t) { if (arguments.length) return void 0 === t ? this : this.each(function (e) { k.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === k.css(e, "position")) e = e.offsetParent; return e || ie }) } }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) { var o = "pageYOffset" === i; k.fn[t] = function (e) { return _(this, function (e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t]; r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), k.each(["top", "left"], function (e, n) { k.cssHooks[n] = ze(y.pixelPosition, function (e, t) { if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t }) }), k.each({ Height: "height", Width: "width" }, function (a, s) { k.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) { k.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); return _(this, function (e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) { k.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), k.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }), k.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), k.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || k.guid++, i }, k.holdReady = function (e) { e ? k.readyWait++ : k.ready(!0) }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) { var t = k.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function () { return k }); var Qt = C.jQuery, Jt = C.$; return k.noConflict = function (e) { return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k }, e || (C.jQuery = C.$ = k), k });
    /** * zoom.js - It's the best way to zoom an image * @version v0.0.2 * @link https://github.com/fat/zoom.js * @license MIT */ +function (t) { "use strict"; function o() { this._activeZoom = this._initialScrollPosition = this._initialTouchPosition = this._touchMoveListener = null, this._$document = t(document), this._$window = t(window), this._$body = t(document.body), this._boundClick = t.proxy(this._clickHandler, this) } function i(o) { this._fullHeight = this._fullWidth = this._overlay = this._targetImageWrap = null, this._targetImage = o, this._$body = t(document.body) } o.prototype.listen = function () { this._$body.on("click", '[data-action="zoom"]', t.proxy(this._zoom, this)) }, o.prototype._zoom = function (o) { var e = o.target; if (e && "IMG" == e.tagName && !this._$body.hasClass("zoom-overlay-open")) return o.metaKey || o.ctrlKey ? window.open(o.target.getAttribute("data-original") || o.target.src, "_blank") : void (e.width >= t(window).width() - i.OFFSET || (this._activeZoomClose(!0), this._activeZoom = new i(e), this._activeZoom.zoomImage(), this._$window.on("scroll.zoom", t.proxy(this._scrollHandler, this)), this._$document.on("keyup.zoom", t.proxy(this._keyHandler, this)), this._$document.on("touchstart.zoom", t.proxy(this._touchStart, this)), document.addEventListener ? document.addEventListener("click", this._boundClick, !0) : document.attachEvent("onclick", this._boundClick, !0), "bubbles" in o ? o.bubbles && o.stopPropagation() : o.cancelBubble = !0)) }, o.prototype._activeZoomClose = function (t) { this._activeZoom && (t ? this._activeZoom.dispose() : this._activeZoom.close(), this._$window.off(".zoom"), this._$document.off(".zoom"), document.removeEventListener("click", this._boundClick, !0), this._activeZoom = null) }, o.prototype._scrollHandler = function (o) { null === this._initialScrollPosition && (this._initialScrollPosition = t(window).scrollTop()); var i = this._initialScrollPosition - t(window).scrollTop(); Math.abs(i) >= 40 && this._activeZoomClose() }, o.prototype._keyHandler = function (t) { 27 == t.keyCode && this._activeZoomClose() }, o.prototype._clickHandler = function (t) { t.preventDefault ? t.preventDefault() : event.returnValue = !1, "bubbles" in t ? t.bubbles && t.stopPropagation() : t.cancelBubble = !0, this._activeZoomClose() }, o.prototype._touchStart = function (o) { this._initialTouchPosition = o.touches[0].pageY, t(o.target).on("touchmove.zoom", t.proxy(this._touchMove, this)) }, o.prototype._touchMove = function (o) { Math.abs(o.touches[0].pageY - this._initialTouchPosition) > 10 && (this._activeZoomClose(), t(o.target).off("touchmove.zoom")) }, i.OFFSET = 80, i._MAX_WIDTH = 2560, i._MAX_HEIGHT = 4096, i.prototype.zoomImage = function () { var o = document.createElement("img"); o.onload = t.proxy(function () { this._fullHeight = Number(o.height), this._fullWidth = Number(o.width), this._zoomOriginal() }, this), o.src = this._targetImage.src }, i.prototype._zoomOriginal = function () { this._targetImageWrap = document.createElement("div"), this._targetImageWrap.className = "zoom-img-wrap", this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage), this._targetImageWrap.appendChild(this._targetImage), t(this._targetImage).addClass("zoom-img").attr("data-action", "zoom-out"), this._overlay = document.createElement("div"), this._overlay.className = "zoom-overlay", document.body.appendChild(this._overlay), this._calculateZoom(), this._triggerAnimation() }, i.prototype._calculateZoom = function () { this._targetImage.offsetWidth; var o = this._fullWidth, e = this._fullHeight, a = (t(window).scrollTop(), o / this._targetImage.width), s = t(window).height() - i.OFFSET, r = t(window).width() - i.OFFSET, n = o / e, h = r / s; this._imgScaleFactor = r > o && s > e ? a : h > n ? s / e * a : r / o * a }, i.prototype._triggerAnimation = function () { this._targetImage.offsetWidth; var o = t(this._targetImage).offset(), i = t(window).scrollTop(), e = i + t(window).height() / 2, a = t(window).width() / 2, s = o.top + this._targetImage.height / 2, r = o.left + this._targetImage.width / 2; this._translateY = e - s, this._translateX = a - r; var n = "scale(" + this._imgScaleFactor + ")", h = "translate(" + this._translateX + "px, " + this._translateY + "px)"; t.support.transition && (h += " translateZ(0)"), t(this._targetImage).css({ "-webkit-transform": n, "-ms-transform": n, transform: n }), t(this._targetImageWrap).css({ "-webkit-transform": h, "-ms-transform": h, transform: h }), this._$body.addClass("zoom-overlay-open") }, i.prototype.close = function () { return this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"), t(this._targetImage).css({ "-webkit-transform": "", "-ms-transform": "", transform: "" }), t(this._targetImageWrap).css({ "-webkit-transform": "", "-ms-transform": "", transform: "" }), t.support.transition ? void t(this._targetImage).one(t.support.transition.end, t.proxy(this.dispose, this)).emulateTransitionEnd(300) : this.dispose() }, i.prototype.dispose = function () { this._targetImageWrap && this._targetImageWrap.parentNode && (t(this._targetImage).removeClass("zoom-img").attr("data-action", "zoom"), this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap), this._overlay.parentNode.removeChild(this._overlay), this._$body.removeClass("zoom-overlay-transitioning")) }, t(function () { (new o).listen() }) }(jQuery);
    /** * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler * Licensed under MIT * @author Ariel Flesler * @version 2.1.2 */; (function (f) { "use strict"; "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery) })(function ($) { "use strict"; function n(a) { return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) } function h(a) { return $.isFunction(a) || $.isPlainObject(a) ? a : { top: a, left: a } } var p = $.scrollTo = function (a, d, b) { return $(window).scrollTo(a, d, b) }; p.defaults = { axis: "xy", duration: 0, limit: !0 }; $.fn.scrollTo = function (a, d, b) { "object" === typeof d && (b = d, d = 0); "function" === typeof b && (b = { onAfter: b }); "max" === a && (a = 9E9); b = $.extend({}, p.defaults, b); d = d || b.duration; var u = b.queue && 1 < b.axis.length; u && (d /= 2); b.offset = h(b.offset); b.over = h(b.over); return this.each(function () { function k(a) { var k = $.extend({}, b, { queue: !0, duration: d, complete: a && function () { a.call(q, e, b) } }); r.animate(f, k) } if (null !== a) { var l = n(this), q = l ? this.contentWindow || window : this, r = $(q), e = a, f = {}, t; switch (typeof e) { case "number": case "string": if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) { e = h(e); break } e = l ? $(e) : $(e, q); case "object": if (e.length === 0) return; if (e.is || e.style) t = (e = $(e)).offset() }var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset; $.each(b.axis.split(""), function (a, c) { var d = "x" === c ? "Left" : "Top", m = d.toLowerCase(), g = "scroll" + d, h = r[g](), n = p.max(q, c); t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d); b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n)); !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {})) }); k(b.onAfter) } }) }; p.max = function (a, d) { var b = "x" === d ? "Width" : "Height", h = "scroll" + b; if (!n(a)) return a[h] - $(a)[b.toLowerCase()](); var b = "client" + b, k = a.ownerDocument || a.document, l = k.documentElement, k = k.body; return Math.max(l[h], k[h]) - Math.min(l[b], k[b]) }; $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = { get: function (a) { return $(a.elem)[a.prop]() }, set: function (a) { var d = this.get(a); if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop(); var b = Math.round(a.now); d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a)) } }; return p });
    /** * Fuse.js v6.4.6 - Lightweight fuzzy-search (http://fusejs.io) ** Copyright (c) 2021 Kiro Risk (http://kiro.me)* All Rights Reserved. Apache Software License 2.0 * * http://www.apache.org/licenses/LICENSE-2.0 */var e, t; e = this, t = function () { "use strict"; function e(t) { return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(t) } function t(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function n(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } function r(e, t, r) { return t && n(e.prototype, t), r && n(e, r), e } function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function o(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n } function c(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? o(Object(n), !0).forEach((function (t) { i(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && u(e, t) } function s(e) { return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) } function u(e, t) { return (u = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e })(e, t) } function h(e, t) { return !t || "object" != typeof t && "function" != typeof t ? function (e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t } function f(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0 } catch (e) { return !1 } }(); return function () { var n, r = s(e); if (t) { var i = s(this).constructor; n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return h(this, n) } } function l(e) { return function (e) { if (Array.isArray(e)) return d(e) }(e) || function (e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || function (e, t) { if (e) { if ("string" == typeof e) return d(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0 } }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function d(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n]; return r } function v(e) { return Array.isArray ? Array.isArray(e) : "[object Array]" === b(e) } function g(e) { return "string" == typeof e } function y(e) { return "number" == typeof e } function p(e) { return !0 === e || !1 === e || function (e) { return m(e) && null !== e }(e) && "[object Boolean]" == b(e) } function m(t) { return "object" === e(t) } function k(e) { return null != e } function M(e) { return !e.trim().length } function b(e) { return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e) } var x = function (e) { return "Invalid value for key ".concat(e) }, L = function (e) { return "Pattern length exceeds max of ".concat(e, ".") }, S = Object.prototype.hasOwnProperty, w = function () { function e(n) { var r = this; t(this, e), this._keys = [], this._keyMap = {}; var i = 0; n.forEach((function (e) { var t = _(e); i += t.weight, r._keys.push(t), r._keyMap[t.id] = t, i += t.weight })), this._keys.forEach((function (e) { e.weight /= i })) } return r(e, [{ key: "get", value: function (e) { return this._keyMap[e] } }, { key: "keys", value: function () { return this._keys } }, { key: "toJSON", value: function () { return JSON.stringify(this._keys) } }]), e }(); function _(e) { var t = null, n = null, r = null, i = 1; if (g(e) || v(e)) r = e, t = O(e), n = j(e); else { if (!S.call(e, "name")) throw new Error(function (e) { return "Missing ".concat(e, " property in key") }("name")); var o = e.name; if (r = o, S.call(e, "weight") && (i = e.weight) <= 0) throw new Error(function (e) { return "Property 'weight' in key '".concat(e, "' must be a positive integer") }(o)); t = O(o), n = j(o) } return { path: t, id: n, weight: i, src: r } } function O(e) { return v(e) ? e : e.split(".") } function j(e) { return v(e) ? e.join(".") : e } var A = c({}, { isCaseSensitive: !1, includeScore: !1, keys: [], shouldSort: !0, sortFn: function (e, t) { return e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1 } }, {}, { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 }, {}, { location: 0, threshold: .6, distance: 100 }, {}, { useExtendedSearch: !1, getFn: function (e, t) { var n = [], r = !1; return function e(t, i, o) { if (k(t)) if (i[o]) { var c = t[i[o]]; if (!k(c)) return; if (o === i.length - 1 && (g(c) || y(c) || p(c))) n.push(function (e) { return null == e ? "" : function (e) { if ("string" == typeof e) return e; var t = e + ""; return "0" == t && 1 / e == -1 / 0 ? "-0" : t }(e) }(c)); else if (v(c)) { r = !0; for (var a = 0, s = c.length; a < s; a += 1)e(c[a], i, o + 1) } else i.length && e(c, i, o + 1) } else n.push(t) }(e, g(t) ? t.split(".") : t, 0), r ? n : n[0] }, ignoreLocation: !1, ignoreFieldNorm: !1 }), I = /[^ ]+/g; function C() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3, t = new Map, n = Math.pow(10, e); return { get: function (e) { var r = e.match(I).length; if (t.has(r)) return t.get(r); var i = 1 / Math.sqrt(r), o = parseFloat(Math.round(i * n) / n); return t.set(r, o), o }, clear: function () { t.clear() } } } var E = function () { function e() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.getFn, i = void 0 === r ? A.getFn : r; t(this, e), this.norm = C(3), this.getFn = i, this.isCreated = !1, this.setIndexRecords() } return r(e, [{ key: "setSources", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; this.docs = e } }, { key: "setIndexRecords", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; this.records = e } }, { key: "setKeys", value: function () { var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; this.keys = t, this._keysMap = {}, t.forEach((function (t, n) { e._keysMap[t.id] = n })) } }, { key: "create", value: function () { var e = this; !this.isCreated && this.docs.length && (this.isCreated = !0, g(this.docs[0]) ? this.docs.forEach((function (t, n) { e._addString(t, n) })) : this.docs.forEach((function (t, n) { e._addObject(t, n) })), this.norm.clear()) } }, { key: "add", value: function (e) { var t = this.size(); g(e) ? this._addString(e, t) : this._addObject(e, t) } }, { key: "removeAt", value: function (e) { this.records.splice(e, 1); for (var t = e, n = this.size(); t < n; t += 1)this.records[t].i -= 1 } }, { key: "getValueForItemAtKeyId", value: function (e, t) { return e[this._keysMap[t]] } }, { key: "size", value: function () { return this.records.length } }, { key: "_addString", value: function (e, t) { if (k(e) && !M(e)) { var n = { v: e, i: t, n: this.norm.get(e) }; this.records.push(n) } } }, { key: "_addObject", value: function (e, t) { var n = this, r = { i: t, $: {} }; this.keys.forEach((function (t, i) { var o = n.getFn(e, t.path); if (k(o)) if (v(o)) !function () { for (var e = [], t = [{ nestedArrIndex: -1, value: o }]; t.length;) { var c = t.pop(), a = c.nestedArrIndex, s = c.value; if (k(s)) if (g(s) && !M(s)) { var u = { v: s, i: a, n: n.norm.get(s) }; e.push(u) } else v(s) && s.forEach((function (e, n) { t.push({ nestedArrIndex: n, value: e }) })) } r.$[i] = e }(); else if (!M(o)) { var c = { v: o, n: n.norm.get(o) }; r.$[i] = c } })), this.records.push(r) } }, { key: "toJSON", value: function () { return { keys: this.keys, records: this.records } } }]), e }(); function $(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.getFn, i = void 0 === r ? A.getFn : r, o = new E({ getFn: i }); return o.setKeys(e.map(_)), o.setSources(t), o.create(), o } function R(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.errors, r = void 0 === n ? 0 : n, i = t.currentLocation, o = void 0 === i ? 0 : i, c = t.expectedLocation, a = void 0 === c ? 0 : c, s = t.distance, u = void 0 === s ? A.distance : s, h = t.ignoreLocation, f = void 0 === h ? A.ignoreLocation : h, l = r / e.length; if (f) return l; var d = Math.abs(a - o); return u ? l + d / u : d ? 1 : l } function F() { for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.minMatchCharLength, n = [], r = -1, i = -1, o = 0, c = e.length; o < c; o += 1) { var a = e[o]; a && -1 === r ? r = o : a || -1 === r || ((i = o - 1) - r + 1 >= t && n.push([r, i]), r = -1) } return e[o - 1] && o - r >= t && n.push([r, o - 1]), n } function P(e) { for (var t = {}, n = 0, r = e.length; n < r; n += 1) { var i = e.charAt(n); t[i] = (t[i] || 0) | 1 << r - n - 1 } return t } var N = function () { function e(n) { var r = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = i.location, c = void 0 === o ? A.location : o, a = i.threshold, s = void 0 === a ? A.threshold : a, u = i.distance, h = void 0 === u ? A.distance : u, f = i.includeMatches, l = void 0 === f ? A.includeMatches : f, d = i.findAllMatches, v = void 0 === d ? A.findAllMatches : d, g = i.minMatchCharLength, y = void 0 === g ? A.minMatchCharLength : g, p = i.isCaseSensitive, m = void 0 === p ? A.isCaseSensitive : p, k = i.ignoreLocation, M = void 0 === k ? A.ignoreLocation : k; if (t(this, e), this.options = { location: c, threshold: s, distance: h, includeMatches: l, findAllMatches: v, minMatchCharLength: y, isCaseSensitive: m, ignoreLocation: M }, this.pattern = m ? n : n.toLowerCase(), this.chunks = [], this.pattern.length) { var b = function (e, t) { r.chunks.push({ pattern: e, alphabet: P(e), startIndex: t }) }, x = this.pattern.length; if (x > 32) { for (var L = 0, S = x % 32, w = x - S; L < w;)b(this.pattern.substr(L, 32), L), L += 32; if (S) { var _ = x - 32; b(this.pattern.substr(_), _) } } else b(this.pattern, 0) } } return r(e, [{ key: "searchIn", value: function (e) { var t = this.options, n = t.isCaseSensitive, r = t.includeMatches; if (n || (e = e.toLowerCase()), this.pattern === e) { var i = { isMatch: !0, score: 0 }; return r && (i.indices = [[0, e.length - 1]]), i } var o = this.options, c = o.location, a = o.distance, s = o.threshold, u = o.findAllMatches, h = o.minMatchCharLength, f = o.ignoreLocation, d = [], v = 0, g = !1; this.chunks.forEach((function (t) { var n = t.pattern, i = t.alphabet, o = t.startIndex, y = function (e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = r.location, o = void 0 === i ? A.location : i, c = r.distance, a = void 0 === c ? A.distance : c, s = r.threshold, u = void 0 === s ? A.threshold : s, h = r.findAllMatches, f = void 0 === h ? A.findAllMatches : h, l = r.minMatchCharLength, d = void 0 === l ? A.minMatchCharLength : l, v = r.includeMatches, g = void 0 === v ? A.includeMatches : v, y = r.ignoreLocation, p = void 0 === y ? A.ignoreLocation : y; if (t.length > 32) throw new Error(L(32)); for (var m, k = t.length, M = e.length, b = Math.max(0, Math.min(o, M)), x = u, S = b, w = d > 1 || g, _ = w ? Array(M) : []; (m = e.indexOf(t, S)) > -1;) { var O = R(t, { currentLocation: m, expectedLocation: b, distance: a, ignoreLocation: p }); if (x = Math.min(O, x), S = m + k, w) for (var j = 0; j < k;)_[m + j] = 1, j += 1 } S = -1; for (var I = [], C = 1, E = k + M, $ = 1 << k - 1, P = 0; P < k; P += 1) { for (var N = 0, D = E; N < D;) { var z = R(t, { errors: P, currentLocation: b + D, expectedLocation: b, distance: a, ignoreLocation: p }); z <= x ? N = D : E = D, D = Math.floor((E - N) / 2 + N) } E = D; var K = Math.max(1, b - D + 1), q = f ? M : Math.min(b + D, M) + k, W = Array(q + 2); W[q + 1] = (1 << P) - 1; for (var J = q; J >= K; J -= 1) { var T = J - 1, U = n[e.charAt(T)]; if (w && (_[T] = +!!U), W[J] = (W[J + 1] << 1 | 1) & U, P && (W[J] |= (I[J + 1] | I[J]) << 1 | 1 | I[J + 1]), W[J] & $ && (C = R(t, { errors: P, currentLocation: T, expectedLocation: b, distance: a, ignoreLocation: p })) <= x) { if (x = C, (S = T) <= b) break; K = Math.max(1, 2 * b - S) } } var V = R(t, { errors: P + 1, currentLocation: b, expectedLocation: b, distance: a, ignoreLocation: p }); if (V > x) break; I = W } var B = { isMatch: S >= 0, score: Math.max(.001, C) }; if (w) { var G = F(_, d); G.length ? g && (B.indices = G) : B.isMatch = !1 } return B }(e, n, i, { location: c + o, distance: a, threshold: s, findAllMatches: u, minMatchCharLength: h, includeMatches: r, ignoreLocation: f }), p = y.isMatch, m = y.score, k = y.indices; p && (g = !0), v += m, p && k && (d = [].concat(l(d), l(k))) })); var y = { isMatch: g, score: g ? v / this.chunks.length : 1 }; return g && r && (y.indices = d), y } }]), e }(), D = function () { function e(n) { t(this, e), this.pattern = n } return r(e, [{ key: "search", value: function () { } }], [{ key: "isMultiMatch", value: function (e) { return z(e, this.multiRegex) } }, { key: "isSingleMatch", value: function (e) { return z(e, this.singleRegex) } }]), e }(); function z(e, t) { var n = e.match(t); return n ? n[1] : null } var K = function (e) { a(i, e); var n = f(i); function i(e) { return t(this, i), n.call(this, e) } return r(i, [{ key: "search", value: function (e) { var t = e === this.pattern; return { isMatch: t, score: t ? 0 : 1, indices: [0, this.pattern.length - 1] } } }], [{ key: "type", get: function () { return "exact" } }, { key: "multiRegex", get: function () { return /^="(.*)"$/ } }, { key: "singleRegex", get: function () { return /^=(.*)$/ } }]), i }(D), q = function (e) { a(i, e); var n = f(i); function i(e) { return t(this, i), n.call(this, e) } return r(i, [{ key: "search", value: function (e) { var t = -1 === e.indexOf(this.pattern); return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] } } }], [{ key: "type", get: function () { return "inverse-exact" } }, { key: "multiRegex", get: function () { return /^!"(.*)"$/ } }, { key: "singleRegex", get: function () { return /^!(.*)$/ } }]), i }(D), W = function (e) { a(i, e); var n = f(i); function i(e) { return t(this, i), n.call(this, e) } return r(i, [{ key: "search", value: function (e) { var t = e.startsWith(this.pattern); return { isMatch: t, score: t ? 0 : 1, indices: [0, this.pattern.length - 1] } } }], [{ key: "type", get: function () { return "prefix-exact" } }, { key: "multiRegex", get: function () { return /^\^"(.*)"$/ } }, { key: "singleRegex", get: function () { return /^\^(.*)$/ } }]), i }(D), J = function (e) { a(i, e); var n = f(i); function i(e) { return t(this, i), n.call(this, e) } return r(i, [{ key: "search", value: function (e) { var t = !e.startsWith(this.pattern); return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] } } }], [{ key: "type", get: function () { return "inverse-prefix-exact" } }, { key: "multiRegex", get: function () { return /^!\^"(.*)"$/ } }, { key: "singleRegex", get: function () { return /^!\^(.*)$/ } }]), i }(D), T = function (e) { a(i, e); var n = f(i); function i(e) { return t(this, i), n.call(this, e) } return r(i, [{ key: "search", value: function (e) { var t = e.endsWith(this.pattern); return { isMatch: t, score: t ? 0 : 1, indices: [e.length - this.pattern.length, e.length - 1] } } }], [{ key: "type", get: function () { return "suffix-exact" } }, { key: "multiRegex", get: function () { return /^"(.*)"\$$/ } }, { key: "singleRegex", get: function () { return /^(.*)\$$/ } }]), i }(D), U = function (e) { a(i, e); var n = f(i); function i(e) { return t(this, i), n.call(this, e) } return r(i, [{ key: "search", value: function (e) { var t = !e.endsWith(this.pattern); return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] } } }], [{ key: "type", get: function () { return "inverse-suffix-exact" } }, { key: "multiRegex", get: function () { return /^!"(.*)"\$$/ } }, { key: "singleRegex", get: function () { return /^!(.*)\$$/ } }]), i }(D), V = function (e) { a(i, e); var n = f(i); function i(e) { var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = o.location, a = void 0 === c ? A.location : c, s = o.threshold, u = void 0 === s ? A.threshold : s, h = o.distance, f = void 0 === h ? A.distance : h, l = o.includeMatches, d = void 0 === l ? A.includeMatches : l, v = o.findAllMatches, g = void 0 === v ? A.findAllMatches : v, y = o.minMatchCharLength, p = void 0 === y ? A.minMatchCharLength : y, m = o.isCaseSensitive, k = void 0 === m ? A.isCaseSensitive : m, M = o.ignoreLocation, b = void 0 === M ? A.ignoreLocation : M; return t(this, i), (r = n.call(this, e))._bitapSearch = new N(e, { location: a, threshold: u, distance: f, includeMatches: d, findAllMatches: g, minMatchCharLength: p, isCaseSensitive: k, ignoreLocation: b }), r } return r(i, [{ key: "search", value: function (e) { return this._bitapSearch.searchIn(e) } }], [{ key: "type", get: function () { return "fuzzy" } }, { key: "multiRegex", get: function () { return /^"(.*)"$/ } }, { key: "singleRegex", get: function () { return /^(.*)$/ } }]), i }(D), B = function (e) { a(i, e); var n = f(i); function i(e) { return t(this, i), n.call(this, e) } return r(i, [{ key: "search", value: function (e) { for (var t, n = 0, r = [], i = this.pattern.length; (t = e.indexOf(this.pattern, n)) > -1;)n = t + i, r.push([t, n - 1]); var o = !!r.length; return { isMatch: o, score: o ? 0 : 1, indices: r } } }], [{ key: "type", get: function () { return "include" } }, { key: "multiRegex", get: function () { return /^'"(.*)"$/ } }, { key: "singleRegex", get: function () { return /^'(.*)$/ } }]), i }(D), G = [K, B, W, J, U, T, q, V], H = G.length, Q = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/; function X(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return e.split("|").map((function (e) { for (var n = e.trim().split(Q).filter((function (e) { return e && !!e.trim() })), r = [], i = 0, o = n.length; i < o; i += 1) { for (var c = n[i], a = !1, s = -1; !a && ++s < H;) { var u = G[s], h = u.isMultiMatch(c); h && (r.push(new u(h, t)), a = !0) } if (!a) for (s = -1; ++s < H;) { var f = G[s], l = f.isSingleMatch(c); if (l) { r.push(new f(l, t)); break } } } return r })) } var Y = new Set([V.type, B.type]), Z = function () { function e(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = r.isCaseSensitive, o = void 0 === i ? A.isCaseSensitive : i, c = r.includeMatches, a = void 0 === c ? A.includeMatches : c, s = r.minMatchCharLength, u = void 0 === s ? A.minMatchCharLength : s, h = r.ignoreLocation, f = void 0 === h ? A.ignoreLocation : h, l = r.findAllMatches, d = void 0 === l ? A.findAllMatches : l, v = r.location, g = void 0 === v ? A.location : v, y = r.threshold, p = void 0 === y ? A.threshold : y, m = r.distance, k = void 0 === m ? A.distance : m; t(this, e), this.query = null, this.options = { isCaseSensitive: o, includeMatches: a, minMatchCharLength: u, findAllMatches: d, ignoreLocation: f, location: g, threshold: p, distance: k }, this.pattern = o ? n : n.toLowerCase(), this.query = X(this.pattern, this.options) } return r(e, [{ key: "searchIn", value: function (e) { var t = this.query; if (!t) return { isMatch: !1, score: 1 }; var n = this.options, r = n.includeMatches; e = n.isCaseSensitive ? e : e.toLowerCase(); for (var i = 0, o = [], c = 0, a = 0, s = t.length; a < s; a += 1) { var u = t[a]; o.length = 0, i = 0; for (var h = 0, f = u.length; h < f; h += 1) { var d = u[h], v = d.search(e), g = v.isMatch, y = v.indices, p = v.score; if (!g) { c = 0, i = 0, o.length = 0; break } if (i += 1, c += p, r) { var m = d.constructor.type; Y.has(m) ? o = [].concat(l(o), l(y)) : o.push(y) } } if (i) { var k = { isMatch: !0, score: c / i }; return r && (k.indices = o), k } } return { isMatch: !1, score: 1 } } }], [{ key: "condition", value: function (e, t) { return t.useExtendedSearch } }]), e }(), ee = []; function te(e, t) { for (var n = 0, r = ee.length; n < r; n += 1) { var i = ee[n]; if (i.condition(e, t)) return new i(e, t) } return new N(e, t) } var ne = "$and", re = "$or", ie = "$path", oe = "$val", ce = function (e) { return !(!e[ne] && !e[re]) }, ae = function (e) { return !!e[ie] }, se = function (e) { return !v(e) && m(e) && !ce(e) }, ue = function (e) { return i({}, ne, Object.keys(e).map((function (t) { return i({}, t, e[t]) }))) }; function he(e, t) { var n = t.ignoreFieldNorm, r = void 0 === n ? A.ignoreFieldNorm : n; e.forEach((function (e) { var t = 1; e.matches.forEach((function (e) { var n = e.key, i = e.norm, o = e.score, c = n ? n.weight : null; t *= Math.pow(0 === o && c ? Number.EPSILON : o, (c || 1) * (r ? 1 : i)) })), e.score = t })) } function fe(e, t) { var n = e.matches; t.matches = [], k(n) && n.forEach((function (e) { if (k(e.indices) && e.indices.length) { var n = { indices: e.indices, value: e.value }; e.key && (n.key = e.key.src), e.idx > -1 && (n.refIndex = e.idx), t.matches.push(n) } })) } function le(e, t) { t.score = e.score } function de(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.includeMatches, i = void 0 === r ? A.includeMatches : r, o = n.includeScore, c = void 0 === o ? A.includeScore : o, a = []; return i && a.push(fe), c && a.push(le), e.map((function (e) { var n = e.idx, r = { item: t[n], refIndex: n }; return a.length && a.forEach((function (t) { t(e, r) })), r })) } var ve = function () { function e(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0; t(this, e), this.options = c({}, A, {}, r), this.options.useExtendedSearch, this._keyStore = new w(this.options.keys), this.setCollection(n, i) } return r(e, [{ key: "setCollection", value: function (e, t) { if (this._docs = e, t && !(t instanceof E)) throw new Error("Incorrect 'index' type"); this._myIndex = t || $(this.options.keys, this._docs, { getFn: this.options.getFn }) } }, { key: "add", value: function (e) { k(e) && (this._docs.push(e), this._myIndex.add(e)) } }, { key: "remove", value: function () { for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () { return !1 }, t = [], n = 0, r = this._docs.length; n < r; n += 1) { var i = this._docs[n]; e(i, n) && (this.removeAt(n), n -= 1, r -= 1, t.push(i)) } return t } }, { key: "removeAt", value: function (e) { this._docs.splice(e, 1), this._myIndex.removeAt(e) } }, { key: "getIndex", value: function () { return this._myIndex } }, { key: "search", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.limit, r = void 0 === n ? -1 : n, i = this.options, o = i.includeMatches, c = i.includeScore, a = i.shouldSort, s = i.sortFn, u = i.ignoreFieldNorm, h = g(e) ? g(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e); return he(h, { ignoreFieldNorm: u }), a && h.sort(s), y(r) && r > -1 && (h = h.slice(0, r)), de(h, this._docs, { includeMatches: o, includeScore: c }) } }, { key: "_searchStringList", value: function (e) { var t = te(e, this.options), n = this._myIndex.records, r = []; return n.forEach((function (e) { var n = e.v, i = e.i, o = e.n; if (k(n)) { var c = t.searchIn(n), a = c.isMatch, s = c.score, u = c.indices; a && r.push({ item: n, idx: i, matches: [{ score: s, value: n, norm: o, indices: u }] }) } })), r } }, { key: "_searchLogical", value: function (e) { var t = this, n = function (e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.auto, i = void 0 === r || r, o = function e(n) { var r = Object.keys(n), o = ae(n); if (!o && r.length > 1 && !ce(n)) return e(ue(n)); if (se(n)) { var c = o ? n[ie] : r[0], a = o ? n[oe] : n[c]; if (!g(a)) throw new Error(x(c)); var s = { keyId: j(c), pattern: a }; return i && (s.searcher = te(a, t)), s } var u = { children: [], operator: r[0] }; return r.forEach((function (t) { var r = n[t]; v(r) && r.forEach((function (t) { u.children.push(e(t)) })) })), u }; return ce(e) || (e = ue(e)), o(e) }(e, this.options), r = this._myIndex.records, i = {}, o = []; return r.forEach((function (e) { var r = e.$, c = e.i; if (k(r)) { var a = function e(n, r, i) { if (!n.children) { var o = n.keyId, c = n.searcher, a = t._findMatches({ key: t._keyStore.get(o), value: t._myIndex.getValueForItemAtKeyId(r, o), searcher: c }); return a && a.length ? [{ idx: i, item: r, matches: a }] : [] } switch (n.operator) { case ne: for (var s = [], u = 0, h = n.children.length; u < h; u += 1) { var f = e(n.children[u], r, i); if (!f.length) return []; s.push.apply(s, l(f)) } return s; case re: for (var d = [], v = 0, g = n.children.length; v < g; v += 1) { var y = e(n.children[v], r, i); if (y.length) { d.push.apply(d, l(y)); break } } return d } }(n, r, c); a.length && (i[c] || (i[c] = { idx: c, item: r, matches: [] }, o.push(i[c])), a.forEach((function (e) { var t, n = e.matches; (t = i[c].matches).push.apply(t, l(n)) }))) } })), o } }, { key: "_searchObjectList", value: function (e) { var t = this, n = te(e, this.options), r = this._myIndex, i = r.keys, o = r.records, c = []; return o.forEach((function (e) { var r = e.$, o = e.i; if (k(r)) { var a = []; i.forEach((function (e, i) { a.push.apply(a, l(t._findMatches({ key: e, value: r[i], searcher: n }))) })), a.length && c.push({ idx: o, item: r, matches: a }) } })), c } }, { key: "_findMatches", value: function (e) { var t = e.key, n = e.value, r = e.searcher; if (!k(n)) return []; var i = []; if (v(n)) n.forEach((function (e) { var n = e.v, o = e.i, c = e.n; if (k(n)) { var a = r.searchIn(n), s = a.isMatch, u = a.score, h = a.indices; s && i.push({ score: u, key: t, value: n, idx: o, norm: c, indices: h }) } })); else { var o = n.v, c = n.n, a = r.searchIn(o), s = a.isMatch, u = a.score, h = a.indices; s && i.push({ score: u, key: t, value: o, norm: c, indices: h }) } return i } }]), e }(); return ve.version = "6.4.6", ve.createIndex = $, ve.parseIndex = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.getFn, r = void 0 === n ? A.getFn : n, i = e.keys, o = e.records, c = new E({ getFn: r }); return c.setKeys(i), c.setIndexRecords(o), c }, ve.config = A, function () { ee.push.apply(ee, arguments) }(Z), ve }, "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Fuse = t();

/*!
  Highlight.js v11.6.0 (git: bed790f3f3)
  (c) 2006-2022 undefined and other contributors
  License: BSD-3-Clause
*/
var hljs = function () {
    "use strict"; var e = { exports: {} }; function n(e) {
        return e instanceof Map ? e.clear = e.delete = e.set = () => {
            throw Error("map is read-only")
        } : e instanceof Set && (e.add = e.clear = e.delete = () => {
            throw Error("set is read-only")
        }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t => {
            var a = e[t]
                ; "object" != typeof a || Object.isFrozen(a) || n(a)
        })), e
    }
    e.exports = n, e.exports.default = n; class t {
        constructor(e) {
            void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
        }
        ignoreMatch() { this.isMatchIgnored = !0 }
    } function a(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    } function i(e, ...n) {
        const t = Object.create(null); for (const n in e) t[n] = e[n]
            ; return n.forEach((e => { for (const n in e) t[n] = e[n] })), t
    }
    const r = e => !!e.scope || e.sublanguage && e.language; class s {
        constructor(e, n) {
            this.buffer = "", this.classPrefix = n.classPrefix, e.walk(this)
        } addText(e) {
            this.buffer += a(e)
        } openNode(e) {
            if (!r(e)) return; let n = ""
                ; n = e.sublanguage ? "language-" + e.language : ((e, { prefix: n }) => {
                    if (e.includes(".")) {
                        const t = e.split(".")
                            ; return [`${n}${t.shift()}`, ...t.map(((e, n) => `${e}${"_".repeat(n + 1)}`))].join(" ")
                    } return `${n}${e}`
                })(e.scope, { prefix: this.classPrefix }), this.span(n)
        }
        closeNode(e) { r(e) && (this.buffer += "</span>") } value() { return this.buffer } span(e) {
            this.buffer += `<span class="${e}">`
        }
    } const o = (e = {}) => {
        const n = { children: [] }
            ; return Object.assign(n, e), n
    }; class l {
        constructor() {
            this.rootNode = o(), this.stack = [this.rootNode]
        } get top() {
            return this.stack[this.stack.length - 1]
        } get root() { return this.rootNode } add(e) {
            this.top.children.push(e)
        } openNode(e) {
            const n = o({ scope: e })
                ; this.add(n), this.stack.push(n)
        } closeNode() {
            if (this.stack.length > 1) return this.stack.pop()
        } closeAllNodes() {
            for (; this.closeNode(););
        } toJSON() { return JSON.stringify(this.rootNode, null, 4) }
        walk(e) { return this.constructor._walk(e, this.rootNode) } static _walk(e, n) {
            return "string" == typeof n ? e.addText(n) : n.children && (e.openNode(n),
                n.children.forEach((n => this._walk(e, n))), e.closeNode(n)), e
        } static _collapse(e) {
            "string" != typeof e && e.children && (e.children.every((e => "string" == typeof e)) ? e.children = [e.children.join("")] : e.children.forEach((e => {
                l._collapse(e)
            })))
        }
    } class c extends l {
        constructor(e) { super(), this.options = e }
        addKeyword(e, n) { "" !== e && (this.openNode(n), this.addText(e), this.closeNode()) }
        addText(e) { "" !== e && this.add(e) } addSublanguage(e, n) {
            const t = e.root
                ; t.sublanguage = !0, t.language = n, this.add(t)
        } toHTML() {
            return new s(this, this.options).value()
        } finalize() { return !0 }
    } function d(e) {
        return e ? "string" == typeof e ? e : e.source : null
    } function g(e) { return m("(?=", e, ")") }
    function u(e) { return m("(?:", e, ")*") } function b(e) { return m("(?:", e, ")?") }
    function m(...e) { return e.map((e => d(e))).join("") } function p(...e) {
        const n = (e => {
            const n = e[e.length - 1]
                ; return "object" == typeof n && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {}
        })(e); return "(" + (n.capture ? "" : "?:") + e.map((e => d(e))).join("|") + ")"
    }
    function _(e) { return RegExp(e.toString() + "|").exec("").length - 1 }
    const h = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
        ; function f(e, { joinWith: n }) {
            let t = 0; return e.map((e => {
                t += 1; const n = t
                    ; let a = d(e), i = ""; for (; a.length > 0;) {
                        const e = h.exec(a); if (!e) { i += a; break }
                        i += a.substring(0, e.index),
                            a = a.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? i += "\\" + (Number(e[1]) + n) : (i += e[0],
                                "(" === e[0] && t++)
                    } return i
            })).map((e => `(${e})`)).join(n)
        }
    const E = "[a-zA-Z]\\w*", y = "[a-zA-Z_]\\w*", w = "\\b\\d+(\\.\\d+)?", N = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", v = "\\b(0b[01]+)", O = {
        begin: "\\\\[\\s\\S]", relevance: 0
    }, k = {
        scope: "string", begin: "'", end: "'",
        illegal: "\\n", contains: [O]
    }, x = {
        scope: "string", begin: '"', end: '"', illegal: "\\n",
        contains: [O]
    }, M = (e, n, t = {}) => {
        const a = i({
            scope: "comment", begin: e, end: n,
            contains: []
        }, t); a.contains.push({
            scope: "doctag",
            begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/, excludeBegin: !0, relevance: 0
        })
            ; const r = p("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/)
            ; return a.contains.push({ begin: m(/[ ]+/, "(", r, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), a
    }, S = M("//", "$"), A = M("/\\*", "\\*/"), C = M("#", "$"); var T = Object.freeze({
        __proto__: null, MATCH_NOTHING_RE: /\b\B/, IDENT_RE: E, UNDERSCORE_IDENT_RE: y,
        NUMBER_RE: w, C_NUMBER_RE: N, BINARY_NUMBER_RE: v,
        RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG: (e = {}) => {
            const n = /^#![ ]*\//
                ; return e.binary && (e.begin = m(n, /.*\b/, e.binary, /\b.*/)), i({
                    scope: "meta", begin: n,
                    end: /$/, relevance: 0, "on:begin": (e, n) => { 0 !== e.index && n.ignoreMatch() }
                }, e)
        },
        BACKSLASH_ESCAPE: O, APOS_STRING_MODE: k, QUOTE_STRING_MODE: x, PHRASAL_WORDS_MODE: {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        }, COMMENT: M, C_LINE_COMMENT_MODE: S, C_BLOCK_COMMENT_MODE: A, HASH_COMMENT_MODE: C,
        NUMBER_MODE: { scope: "number", begin: w, relevance: 0 }, C_NUMBER_MODE: {
            scope: "number",
            begin: N, relevance: 0
        }, BINARY_NUMBER_MODE: { scope: "number", begin: v, relevance: 0 },
        REGEXP_MODE: {
            begin: /(?=\/[^/\n]*\/)/, contains: [{
                scope: "regexp", begin: /\//,
                end: /\/[gimuy]*/, illegal: /\n/, contains: [O, {
                    begin: /\[/, end: /\]/, relevance: 0,
                    contains: [O]
                }]
            }]
        }, TITLE_MODE: { scope: "title", begin: E, relevance: 0 },
        UNDERSCORE_TITLE_MODE: { scope: "title", begin: y, relevance: 0 }, METHOD_GUARD: {
            begin: "\\.\\s*[a-zA-Z_]\\w*", relevance: 0
        }, END_SAME_AS_BEGIN: e => Object.assign(e, {
            "on:begin": (e, n) => { n.data._beginMatch = e[1] }, "on:end": (e, n) => {
                n.data._beginMatch !== e[1] && n.ignoreMatch()
            }
        })
    }); function R(e, n) {
        "." === e.input[e.index - 1] && n.ignoreMatch()
    } function D(e, n) {
        void 0 !== e.className && (e.scope = e.className, delete e.className)
    } function I(e, n) {
        n && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)",
            e.__beforeBegin = R, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords,
            void 0 === e.relevance && (e.relevance = 0))
    } function L(e, n) {
        Array.isArray(e.illegal) && (e.illegal = p(...e.illegal))
    } function B(e, n) {
        if (e.match) {
            if (e.begin || e.end) throw Error("begin & end are not supported with match")
                ; e.begin = e.match, delete e.match
        }
    } function $(e, n) {
        void 0 === e.relevance && (e.relevance = 1)
    } const z = (e, n) => {
        if (!e.beforeMatch) return
            ; if (e.starts) throw Error("beforeMatch cannot be used with starts")
                ; const t = Object.assign({}, e); Object.keys(e).forEach((n => {
                    delete e[n]
                })), e.keywords = t.keywords, e.begin = m(t.beforeMatch, g(t.begin)), e.starts = {
                    relevance: 0, contains: [Object.assign(t, { endsParent: !0 })]
                }, e.relevance = 0, delete t.beforeMatch
    }, F = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"]
        ; function U(e, n, t = "keyword") {
            const a = Object.create(null)
                ; return "string" == typeof e ? i(t, e.split(" ")) : Array.isArray(e) ? i(t, e) : Object.keys(e).forEach((t => {
                    Object.assign(a, U(e[t], n, t))
                })), a; function i(e, t) {
                    n && (t = t.map((e => e.toLowerCase()))), t.forEach((n => {
                        const t = n.split("|")
                            ; a[t[0]] = [e, j(t[0], t[1])]
                    }))
                }
        } function j(e, n) {
            return n ? Number(n) : (e => F.includes(e.toLowerCase()))(e) ? 0 : 1
        } const P = {}, K = e => {
            console.error(e)
        }, H = (e, ...n) => { console.log("WARN: " + e, ...n) }, q = (e, n) => {
            P[`${e}/${n}`] || (console.log(`Deprecated as of ${e}. ${n}`), P[`${e}/${n}`] = !0)
        }, Z = Error(); function G(e, n, { key: t }) {
            let a = 0; const i = e[t], r = {}, s = {}
                ; for (let e = 1; e <= n.length; e++)s[e + a] = i[e], r[e + a] = !0, a += _(n[e - 1])
                    ; e[t] = s, e[t]._emit = r, e[t]._multi = !0
        } function W(e) {
            (e => {
                e.scope && "object" == typeof e.scope && null !== e.scope && (e.beginScope = e.scope,
                    delete e.scope)
            })(e), "string" == typeof e.beginScope && (e.beginScope = {
                _wrap: e.beginScope
            }), "string" == typeof e.endScope && (e.endScope = {
                _wrap: e.endScope
            }), (e => {
                if (Array.isArray(e.begin)) {
                    if (e.skip || e.excludeBegin || e.returnBegin) throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
                        Z
                        ; if ("object" != typeof e.beginScope || null === e.beginScope) throw K("beginScope must be object"),
                            Z; G(e, e.begin, { key: "beginScope" }), e.begin = f(e.begin, { joinWith: "" })
                }
            })(e), (e => {
                if (Array.isArray(e.end)) {
                    if (e.skip || e.excludeEnd || e.returnEnd) throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
                        Z
                        ; if ("object" != typeof e.endScope || null === e.endScope) throw K("endScope must be object"),
                            Z; G(e, e.end, { key: "endScope" }), e.end = f(e.end, { joinWith: "" })
                }
            })(e)
        } function Q(e) {
            function n(n, t) {
                return RegExp(d(n), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (t ? "g" : ""))
            } class t {
                constructor() {
                    this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
                }
                addRule(e, n) {
                    n.position = this.position++, this.matchIndexes[this.matchAt] = n, this.regexes.push([n, e]),
                        this.matchAt += _(e) + 1
                } compile() {
                    0 === this.regexes.length && (this.exec = () => null)
                        ; const e = this.regexes.map((e => e[1])); this.matcherRe = n(f(e, {
                            joinWith: "|"
                        }), !0), this.lastIndex = 0
                } exec(e) {
                    this.matcherRe.lastIndex = this.lastIndex
                        ; const n = this.matcherRe.exec(e); if (!n) return null
                            ; const t = n.findIndex(((e, n) => n > 0 && void 0 !== e)), a = this.matchIndexes[t]
                        ; return n.splice(0, t), Object.assign(n, a)
                }
            } class a {
                constructor() {
                    this.rules = [], this.multiRegexes = [],
                        this.count = 0, this.lastIndex = 0, this.regexIndex = 0
                } getMatcher(e) {
                    if (this.multiRegexes[e]) return this.multiRegexes[e]; const n = new t
                        ; return this.rules.slice(e).forEach((([e, t]) => n.addRule(e, t))),
                            n.compile(), this.multiRegexes[e] = n, n
                } resumingScanAtSamePosition() {
                    return 0 !== this.regexIndex
                } considerAll() { this.regexIndex = 0 } addRule(e, n) {
                    this.rules.push([e, n]), "begin" === n.type && this.count++
                } exec(e) {
                    const n = this.getMatcher(this.regexIndex); n.lastIndex = this.lastIndex
                        ; let t = n.exec(e)
                        ; if (this.resumingScanAtSamePosition()) if (t && t.index === this.lastIndex); else {
                            const n = this.getMatcher(0); n.lastIndex = this.lastIndex + 1, t = n.exec(e)
                        }
                    return t && (this.regexIndex += t.position + 1,
                        this.regexIndex === this.count && this.considerAll()), t
                }
            }
            if (e.compilerExtensions || (e.compilerExtensions = []),
                e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
                ; return e.classNameAliases = i(e.classNameAliases || {}), function t(r, s) {
                    const o = r
                        ; if (r.isCompiled) return o
                            ;[D, B, W, z].forEach((e => e(r, s))), e.compilerExtensions.forEach((e => e(r, s))),
                                r.__beforeBegin = null, [I, L, $].forEach((e => e(r, s))), r.isCompiled = !0; let l = null
                        ; return "object" == typeof r.keywords && r.keywords.$pattern && (r.keywords = Object.assign({}, r.keywords),
                            l = r.keywords.$pattern,
                            delete r.keywords.$pattern), l = l || /\w+/, r.keywords && (r.keywords = U(r.keywords, e.case_insensitive)),
                            o.keywordPatternRe = n(l, !0),
                            s && (r.begin || (r.begin = /\B|\b/), o.beginRe = n(o.begin), r.end || r.endsWithParent || (r.end = /\B|\b/),
                                r.end && (o.endRe = n(o.end)),
                                o.terminatorEnd = d(o.end) || "", r.endsWithParent && s.terminatorEnd && (o.terminatorEnd += (r.end ? "|" : "") + s.terminatorEnd)),
                            r.illegal && (o.illegalRe = n(r.illegal)),
                            r.contains || (r.contains = []), r.contains = [].concat(...r.contains.map((e => (e => (e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map((n => i(e, {
                                variants: null
                            }, n)))), e.cachedVariants ? e.cachedVariants : X(e) ? i(e, {
                                starts: e.starts ? i(e.starts) : null
                            }) : Object.isFrozen(e) ? i(e) : e))("self" === e ? r : e)))), r.contains.forEach((e => {
                                t(e, o)
                            })), r.starts && t(r.starts, s), o.matcher = (e => {
                                const n = new a
                                    ; return e.contains.forEach((e => n.addRule(e.begin, {
                                        rule: e, type: "begin"
                                    }))), e.terminatorEnd && n.addRule(e.terminatorEnd, {
                                        type: "end"
                                    }), e.illegal && n.addRule(e.illegal, { type: "illegal" }), n
                            })(o), o
                }(e)
        } function X(e) {
            return !!e && (e.endsWithParent || X(e.starts))
        } class V extends Error {
        constructor(e, n) { super(e), this.name = "HTMLInjectionError", this.html = n }
    }
    const J = a, Y = i, ee = Symbol("nomatch"); var ne = (n => {
        const a = Object.create(null), i = Object.create(null), r = []; let s = !0
            ; const o = "Could not find the language '{}', did you forget to load/include a language module?", l = {
                disableAutodetect: !0, name: "Plain text", contains: []
            }; let d = {
                ignoreUnescapedHTML: !1, throwUnescapedHTML: !1, noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i, classPrefix: "hljs-",
                cssSelector: "pre code", languages: null, __emitter: c
            }; function _(e) {
                return d.noHighlightRe.test(e)
            } function h(e, n, t) {
                let a = "", i = ""
                    ; "object" == typeof n ? (a = e,
                        t = n.ignoreIllegals, i = n.language) : (q("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
                            q("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
                            i = e, a = n), void 0 === t && (t = !0); const r = { code: a, language: i }; x("before:highlight", r)
                    ; const s = r.result ? r.result : f(r.language, r.code, t)
                    ; return s.code = r.code, x("after:highlight", s), s
            } function f(e, n, i, r) {
                const l = Object.create(null); function c() {
                    if (!k.keywords) return void M.addText(S)
                        ; let e = 0; k.keywordPatternRe.lastIndex = 0; let n = k.keywordPatternRe.exec(S), t = ""
                        ; for (; n;) {
                            t += S.substring(e, n.index)
                                ; const i = w.case_insensitive ? n[0].toLowerCase() : n[0], r = (a = i, k.keywords[a]); if (r) {
                                    const [e, a] = r
                                        ; if (M.addText(t), t = "", l[i] = (l[i] || 0) + 1, l[i] <= 7 && (A += a), e.startsWith("_")) t += n[0]; else {
                                            const t = w.classNameAliases[e] || e; M.addKeyword(n[0], t)
                                        }
                                } else t += n[0]
                                ; e = k.keywordPatternRe.lastIndex, n = k.keywordPatternRe.exec(S)
                        } var a
                        ; t += S.substring(e), M.addText(t)
                } function g() {
                    null != k.subLanguage ? (() => {
                        if ("" === S) return; let e = null; if ("string" == typeof k.subLanguage) {
                            if (!a[k.subLanguage]) return void M.addText(S)
                                ; e = f(k.subLanguage, S, !0, x[k.subLanguage]), x[k.subLanguage] = e._top
                        } else e = E(S, k.subLanguage.length ? k.subLanguage : null)
                            ; k.relevance > 0 && (A += e.relevance), M.addSublanguage(e._emitter, e.language)
                    })() : c(), S = ""
                } function u(e, n) {
                    let t = 1; const a = n.length - 1; for (; t <= a;) {
                        if (!e._emit[t]) { t++; continue } const a = w.classNameAliases[e[t]] || e[t], i = n[t]
                            ; a ? M.addKeyword(i, a) : (S = i, c(), S = ""), t++
                    }
                } function b(e, n) {
                    return e.scope && "string" == typeof e.scope && M.openNode(w.classNameAliases[e.scope] || e.scope),
                        e.beginScope && (e.beginScope._wrap ? (M.addKeyword(S, w.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap),
                            S = "") : e.beginScope._multi && (u(e.beginScope, n), S = "")), k = Object.create(e, {
                                parent: {
                                    value: k
                                }
                            }), k
                } function m(e, n, a) {
                    let i = ((e, n) => {
                        const t = e && e.exec(n)
                            ; return t && 0 === t.index
                    })(e.endRe, a); if (i) {
                        if (e["on:end"]) {
                            const a = new t(e)
                                ; e["on:end"](n, a), a.isMatchIgnored && (i = !1)
                        } if (i) {
                            for (; e.endsParent && e.parent;)e = e.parent; return e
                        }
                    }
                    if (e.endsWithParent) return m(e.parent, n, a)
                } function p(e) {
                    return 0 === k.matcher.regexIndex ? (S += e[0], 1) : (R = !0, 0)
                } function _(e) {
                    const t = e[0], a = n.substring(e.index), i = m(k, e, a); if (!i) return ee; const r = k
                        ; k.endScope && k.endScope._wrap ? (g(),
                            M.addKeyword(t, k.endScope._wrap)) : k.endScope && k.endScope._multi ? (g(),
                                u(k.endScope, e)) : r.skip ? S += t : (r.returnEnd || r.excludeEnd || (S += t),
                                    g(), r.excludeEnd && (S = t)); do {
                                        k.scope && M.closeNode(), k.skip || k.subLanguage || (A += k.relevance), k = k.parent
                                    } while (k !== i.parent); return i.starts && b(i.starts, e), r.returnEnd ? 0 : t.length
                }
                let h = {}; function y(a, r) {
                    const o = r && r[0]; if (S += a, null == o) return g(), 0
                        ; if ("begin" === h.type && "end" === r.type && h.index === r.index && "" === o) {
                            if (S += n.slice(r.index, r.index + 1), !s) {
                                const n = Error(`0 width match regex (${e})`)
                                    ; throw n.languageName = e, n.badRule = h.rule, n
                            } return 1
                        }
                    if (h = r, "begin" === r.type) return (e => {
                        const n = e[0], a = e.rule, i = new t(a), r = [a.__beforeBegin, a["on:begin"]]
                            ; for (const t of r) if (t && (t(e, i), i.isMatchIgnored)) return p(n)
                                ; return a.skip ? S += n : (a.excludeBegin && (S += n),
                                    g(), a.returnBegin || a.excludeBegin || (S = n)), b(a, e), a.returnBegin ? 0 : n.length
                    })(r)
                        ; if ("illegal" === r.type && !i) {
                            const e = Error('Illegal lexeme "' + o + '" for mode "' + (k.scope || "<unnamed>") + '"')
                                ; throw e.mode = k, e
                        } if ("end" === r.type) { const e = _(r); if (e !== ee) return e }
                    if ("illegal" === r.type && "" === o) return 1
                        ; if (T > 1e5 && T > 3 * r.index) throw Error("potential infinite loop, way more iterations than matches")
                            ; return S += o, o.length
                } const w = v(e)
                    ; if (!w) throw K(o.replace("{}", e)), Error('Unknown language: "' + e + '"')
                        ; const N = Q(w); let O = "", k = r || N; const x = {}, M = new d.__emitter(d); (() => {
                            const e = []
                                ; for (let n = k; n !== w; n = n.parent)n.scope && e.unshift(n.scope)
                                    ; e.forEach((e => M.openNode(e)))
                        })(); let S = "", A = 0, C = 0, T = 0, R = !1; try {
                            for (k.matcher.considerAll(); ;) {
                                T++, R ? R = !1 : k.matcher.considerAll(), k.matcher.lastIndex = C
                                    ; const e = k.matcher.exec(n); if (!e) break; const t = y(n.substring(C, e.index), e)
                                    ; C = e.index + t
                            }
                            return y(n.substring(C)), M.closeAllNodes(), M.finalize(), O = M.toHTML(), {
                                language: e, value: O, relevance: A, illegal: !1, _emitter: M, _top: k
                            }
                        } catch (t) {
                            if (t.message && t.message.includes("Illegal")) return {
                                language: e, value: J(n),
                                illegal: !0, relevance: 0, _illegalBy: {
                                    message: t.message, index: C,
                                    context: n.slice(C - 100, C + 100), mode: t.mode, resultSoFar: O
                                }, _emitter: M
                            }; if (s) return {
                                language: e, value: J(n), illegal: !1, relevance: 0, errorRaised: t, _emitter: M, _top: k
                            }
                                ; throw t
                        }
            } function E(e, n) {
                n = n || d.languages || Object.keys(a); const t = (e => {
                    const n = { value: J(e), illegal: !1, relevance: 0, _top: l, _emitter: new d.__emitter(d) }
                        ; return n._emitter.addText(e), n
                })(e), i = n.filter(v).filter(k).map((n => f(n, e, !1)))
                    ; i.unshift(t); const r = i.sort(((e, n) => {
                        if (e.relevance !== n.relevance) return n.relevance - e.relevance
                            ; if (e.language && n.language) {
                                if (v(e.language).supersetOf === n.language) return 1
                                    ; if (v(n.language).supersetOf === e.language) return -1
                            } return 0
                    })), [s, o] = r, c = s
                    ; return c.secondBest = o, c
            } function y(e) {
                let n = null; const t = (e => {
                    let n = e.className + " "; n += e.parentNode ? e.parentNode.className : ""
                        ; const t = d.languageDetectRe.exec(n); if (t) {
                            const n = v(t[1])
                                ; return n || (H(o.replace("{}", t[1])),
                                    H("Falling back to no-highlight mode for this block.", e)), n ? t[1] : "no-highlight"
                        }
                    return n.split(/\s+/).find((e => _(e) || v(e)))
                })(e); if (_(t)) return
                    ; if (x("before:highlightElement", {
                        el: e, language: t
                    }), e.children.length > 0 && (d.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
                        console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
                        console.warn("The element with unescaped HTML:"),
                        console.warn(e)), d.throwUnescapedHTML)) throw new V("One of your code blocks includes unescaped HTML.", e.innerHTML)
                    ; n = e; const a = n.textContent, r = t ? h(a, { language: t, ignoreIllegals: !0 }) : E(a)
                    ; e.innerHTML = r.value, ((e, n, t) => {
                        const a = n && i[n] || t
                            ; e.classList.add("hljs"), e.classList.add("language-" + a)
                    })(e, t, r.language), e.result = {
                        language: r.language, re: r.relevance,
                        relevance: r.relevance
                    }, r.secondBest && (e.secondBest = {
                        language: r.secondBest.language, relevance: r.secondBest.relevance
                    }), x("after:highlightElement", { el: e, result: r, text: a })
            } let w = !1; function N() {
                "loading" !== document.readyState ? document.querySelectorAll(d.cssSelector).forEach(y) : w = !0
            } function v(e) { return e = (e || "").toLowerCase(), a[e] || a[i[e]] }
        function O(e, { languageName: n }) {
            "string" == typeof e && (e = [e]), e.forEach((e => {
                i[e.toLowerCase()] = n
            }))
        } function k(e) {
            const n = v(e)
                ; return n && !n.disableAutodetect
        } function x(e, n) {
            const t = e; r.forEach((e => {
                e[t] && e[t](n)
            }))
        }
        "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", (() => {
            w && N()
        }), !1), Object.assign(n, {
            highlight: h, highlightAuto: E, highlightAll: N,
            highlightElement: y,
            highlightBlock: e => (q("10.7.0", "highlightBlock will be removed entirely in v12.0"),
                q("10.7.0", "Please use highlightElement now."), y(e)), configure: e => { d = Y(d, e) },
            initHighlighting: () => {
                N(), q("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
            },
            initHighlightingOnLoad: () => {
                N(), q("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
            }, registerLanguage: (e, t) => {
                let i = null; try { i = t(n) } catch (n) {
                    if (K("Language definition for '{}' could not be registered.".replace("{}", e)),
                        !s) throw n; K(n), i = l
                }
                i.name || (i.name = e), a[e] = i, i.rawDefinition = t.bind(null, n), i.aliases && O(i.aliases, {
                    languageName: e
                })
            }, unregisterLanguage: e => {
                delete a[e]
                    ; for (const n of Object.keys(i)) i[n] === e && delete i[n]
            },
            listLanguages: () => Object.keys(a), getLanguage: v, registerAliases: O,
            autoDetection: k, inherit: Y, addPlugin: e => {
                (e => {
                    e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = n => {
                        e["before:highlightBlock"](Object.assign({ block: n.el }, n))
                    }), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = n => {
                        e["after:highlightBlock"](Object.assign({ block: n.el }, n))
                    })
                })(e), r.push(e)
            }
        }), n.debugMode = () => { s = !1 }, n.safeMode = () => {
            s = !0
        }, n.versionString = "11.6.0", n.regex = {
            concat: m, lookahead: g, either: p, optional: b,
            anyNumberOfTimes: u
        }; for (const n in T) "object" == typeof T[n] && e.exports(T[n])
            ; return Object.assign(n, T), n
    })({}); const te = e => ({
        IMPORTANT: {
            scope: "meta",
            begin: "!important"
        }, BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE, HEXCOLOR: {
            scope: "number", begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
        },
        FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
        ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr", begin: /\[/, end: /\]/, illegal: "$",
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }, CSS_NUMBER_MODE: {
            scope: "number",
            begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
        }, CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ }
    }), ae = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"], ie = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"], re = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"], se = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"], oe = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse(), le = re.concat(se)
        ; var ce = "\\.([0-9](_*[0-9])*)", de = "[0-9a-fA-F](_*[0-9a-fA-F])*", ge = {
            className: "number", variants: [{
                begin: `(\\b([0-9](_*[0-9])*)((${ce})|\\.)?|(${ce}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
            }, { begin: `\\b([0-9](_*[0-9])*)((${ce})[fFdD]?\\b|\\.([fFdD]\\b)?)` }, {
                begin: `(${ce})[fFdD]?\\b`
            }, { begin: "\\b([0-9](_*[0-9])*)[fFdD]\\b" }, {
                begin: `\\b0[xX]((${de})\\.?|(${de})?\\.(${de}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
            }, { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" }, { begin: `\\b0[xX](${de})[lL]?\\b` }, {
                begin: "\\b0(_*[0-7])*[lL]?\\b"
            }, { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }],
            relevance: 0
        }; function ue(e, n, t) { return -1 === t ? "" : e.replace(n, (a => ue(e, n, t - 1))) }
    const be = "[A-Za-z$_][0-9A-Za-z$_]*", me = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], pe = ["true", "false", "null", "undefined", "NaN", "Infinity"], _e = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], he = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"], fe = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], Ee = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ye = [].concat(fe, _e, he)
        ; function we(e) {
            const n = e.regex, t = be, a = {
                begin: /<[A-Za-z0-9\\._:-]+/,
                end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (e, n) => {
                    const t = e[0].length + e.index, a = e.input[t]
                        ; if ("<" === a || "," === a) return void n.ignoreMatch(); let i
                        ; ">" === a && (((e, { after: n }) => {
                            const t = "</" + e[0].slice(1)
                                ; return -1 !== e.input.indexOf(t, n)
                        })(e, {
                            after: t
                        }) || n.ignoreMatch()), (i = e.input.substring(t).match(/^\s+extends\s+/)) && 0 === i.index && n.ignoreMatch()
                }
            }, i = {
                $pattern: be, keyword: me, literal: pe, built_in: ye, "variable.language": Ee
            }, r = "\\.([0-9](_?[0-9])*)", s = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", o = {
                className: "number", variants: [{
                    begin: `(\\b(${s})((${r})|\\.)?|(${r}))[eE][+-]?([0-9](_?[0-9])*)\\b`
                }, {
                    begin: `\\b(${s})\\b((${r})\\b|\\.)?|(${r})\\b`
                }, {
                    begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                }, {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                }, {
                    begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                }, { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" }, {
                    begin: "\\b0[0-7]+n?\\b"
                }], relevance: 0
            }, l = {
                className: "subst", begin: "\\$\\{",
                end: "\\}", keywords: i, contains: []
            }, c = {
                begin: "html`", end: "", starts: {
                    end: "`",
                    returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, l], subLanguage: "xml"
                }
            }, d = {
                begin: "css`", end: "", starts: {
                    end: "`", returnEnd: !1,
                    contains: [e.BACKSLASH_ESCAPE, l], subLanguage: "css"
                }
            }, g = {
                className: "string",
                begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE, l]
            }, u = {
                className: "comment",
                variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0, contains: [{
                        begin: "(?=@[A-Za-z]+)", relevance: 0, contains: [{
                            className: "doctag",
                            begin: "@[A-Za-z]+"
                        }, {
                            className: "type", begin: "\\{", end: "\\}", excludeEnd: !0,
                            excludeBegin: !0, relevance: 0
                        }, {
                            className: "variable", begin: t + "(?=\\s*(-)|$)",
                            endsParent: !0, relevance: 0
                        }, { begin: /(?=[^\n])\s/, relevance: 0 }]
                    }]
                }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
            }, b = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, c, d, g, o]; l.contains = b.concat({
                begin: /\{/, end: /\}/, keywords: i, contains: ["self"].concat(b)
            })
                ; const m = [].concat(u, l.contains), p = m.concat([{
                    begin: /\(/, end: /\)/, keywords: i,
                    contains: ["self"].concat(m)
                }]), _ = {
                    className: "params", begin: /\(/, end: /\)/,
                    excludeBegin: !0, excludeEnd: !0, keywords: i, contains: p
                }, h = {
                    variants: [{
                        match: [/class/, /\s+/, t, /\s+/, /extends/, /\s+/, n.concat(t, "(", n.concat(/\./, t), ")*")],
                        scope: { 1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited" }
                    }, {
                        match: [/class/, /\s+/, t], scope: { 1: "keyword", 3: "title.class" }
                    }]
                }, f = {
                    relevance: 0,
                    match: n.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                    className: "title.class", keywords: { _: [..._e, ...he] }
                }, E = {
                    variants: [{
                        match: [/function/, /\s+/, t, /(?=\s*\()/]
                    }, { match: [/function/, /\s*(?=\()/] }],
                    className: { 1: "keyword", 3: "title.function" }, label: "func.def", contains: [_],
                    illegal: /%/
                }, y = {
                    match: n.concat(/\b/, (w = [...fe, "super"], n.concat("(?!", w.join("|"), ")")), t, n.lookahead(/\(/)),
                    className: "title.function", relevance: 0
                }; var w; const N = {
                    begin: n.concat(/\./, n.lookahead(n.concat(t, /(?![0-9A-Za-z$_(])/))), end: t,
                    excludeBegin: !0, keywords: "prototype", className: "property", relevance: 0
                }, v = {
                    match: [/get|set/, /\s+/, t, /(?=\()/], className: { 1: "keyword", 3: "title.function" },
                    contains: [{ begin: /\(\)/ }, _]
                }, O = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", k = {
                    match: [/const|var|let/, /\s+/, t, /\s*/, /=\s*/, /(async\s*)?/, n.lookahead(O)],
                    keywords: "async", className: { 1: "keyword", 3: "title.function" }, contains: [_]
                }
                ; return {
                    name: "Javascript", aliases: ["js", "jsx", "mjs", "cjs"], keywords: i, exports: {
                        PARAMS_CONTAINS: p, CLASS_REFERENCE: f
                    }, illegal: /#(?![$_A-z])/,
                    contains: [e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }), {
                        label: "use_strict", className: "meta", relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, c, d, g, u, o, f, {
                        className: "attr",
                        begin: t + n.lookahead(":"), relevance: 0
                    }, k, {
                        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case", relevance: 0, contains: [u, e.REGEXP_MODE, {
                            className: "function", begin: O, returnBegin: !0, end: "\\s*=>", contains: [{
                                className: "params", variants: [{ begin: e.UNDERSCORE_IDENT_RE, relevance: 0 }, {
                                    className: null, begin: /\(\s*\)/, skip: !0
                                }, {
                                    begin: /\(/, end: /\)/, excludeBegin: !0,
                                    excludeEnd: !0, keywords: i, contains: p
                                }]
                            }]
                        }, { begin: /,/, relevance: 0 }, {
                                match: /\s+/,
                                relevance: 0
                            }, {
                                variants: [{ begin: "<>", end: "</>" }, {
                                    match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                                }, {
                                    begin: a.begin,
                                    "on:begin": a.isTrulyOpeningTag, end: a.end
                                }], subLanguage: "xml", contains: [{
                                    begin: a.begin, end: a.end, skip: !0, contains: ["self"]
                                }]
                            }]
                    }, E, {
                        beginKeywords: "while if switch catch for"
                    }, {
                        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                        returnBegin: !0, label: "func.def", contains: [_, e.inherit(e.TITLE_MODE, {
                            begin: t,
                            className: "title.function"
                        })]
                    }, { match: /\.\.\./, relevance: 0 }, N, {
                        match: "\\$" + t,
                        relevance: 0
                    }, {
                        match: [/\bconstructor(?=\s*\()/], className: { 1: "title.function" },
                        contains: [_]
                    }, y, {
                        relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant"
                    }, h, v, { match: /\$[(.]/ }]
                }
        }
    const Ne = e => m(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/), ve = ["Protocol", "Type"].map(Ne), Oe = ["init", "self"].map(Ne), ke = ["Any", "Self"], xe = ["actor", "any", "associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "distributed", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "isolated", "nonisolated", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"], Me = ["false", "nil", "true"], Se = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"], Ae = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"], Ce = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"], Te = p(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/), Re = p(Te, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/), De = m(Te, Re, "*"), Ie = p(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/), Le = p(Ie, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/), Be = m(Ie, Le, "*"), $e = m(/[A-Z]/, Le, "*"), ze = ["autoclosure", m(/convention\(/, p("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", m(/objc\(/, Be, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "resultBuilder", "testable", "UIApplicationMain", "unknown", "usableFromInline"], Fe = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"]
        ; var Ue = Object.freeze({
            __proto__: null, grmr_bash: e => {
                const n = e.regex, t = {}, a = {
                    begin: /\$\{/, end: /\}/, contains: ["self", { begin: /:-/, contains: [t] }]
                }
                    ; Object.assign(t, {
                        className: "variable", variants: [{
                            begin: n.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
                        }, a]
                    }); const i = {
                        className: "subst", begin: /\$\(/, end: /\)/, contains: [e.BACKSLASH_ESCAPE]
                    }, r = {
                        begin: /<<-?\s*(?=\w+)/, starts: {
                            contains: [e.END_SAME_AS_BEGIN({
                                begin: /(\w+)/,
                                end: /(\w+)/, className: "string"
                            })]
                        }
                    }, s = {
                        className: "string", begin: /"/, end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, t, i]
                    }; i.contains.push(s); const o = {
                        begin: /\$\(\(/,
                        end: /\)\)/, contains: [{ begin: /\d+#[0-9a-f]+/, className: "number" }, e.NUMBER_MODE, t]
                    }, l = e.SHEBANG({
                        binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)", relevance: 10
                    }), c = {
                        className: "function", begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/, returnBegin: !0,
                        contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })], relevance: 0
                    }; return {
                        name: "Bash", aliases: ["sh"], keywords: {
                            $pattern: /\b[a-z][a-z0-9._-]+\b/,
                            keyword: ["if", "then", "else", "elif", "fi", "for", "while", "in", "do", "done", "case", "esac", "function"],
                            literal: ["true", "false"],
                            built_in: ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"]
                        }, contains: [l, e.SHEBANG(), c, o, e.HASH_COMMENT_MODE, r, { match: /(\/[a-z._-]+)+/ }, s, {
                            className: "", begin: /\\"/
                        }, { className: "string", begin: /'/, end: /'/ }, t]
                    }
            },
            grmr_c: e => {
                const n = e.regex, t = e.COMMENT("//", "$", {
                    contains: [{ begin: /\\\n/ }]
                }), a = "[a-zA-Z_]\\w*::", i = "(decltype\\(auto\\)|" + n.optional(a) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", r = {
                    className: "type", variants: [{ begin: "\\b[a-z\\d_]*_t\\b" }, {
                        match: /\batomic_[a-z]{3,6}\b/
                    }]
                }, s = {
                    className: "string", variants: [{
                        begin: '(u8?|U|L)?"', end: '"', illegal: "\\n", contains: [e.BACKSLASH_ESCAPE]
                    }, {
                        begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                        end: "'", illegal: "."
                    }, e.END_SAME_AS_BEGIN({
                        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/
                    })]
                }, o = {
                    className: "number", variants: [{ begin: "\\b(0b[01']+)" }, {
                        begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                    }, {
                        begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                    }], relevance: 0
                }, l = {
                    className: "meta", begin: /#\s*[a-z]+\b/, end: /$/, keywords: {
                        keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                    }, contains: [{ begin: /\\\n/, relevance: 0 }, e.inherit(s, { className: "string" }), {
                        className: "string", begin: /<.*?>/
                    }, t, e.C_BLOCK_COMMENT_MODE]
                }, c = {
                    className: "title", begin: n.optional(a) + e.IDENT_RE, relevance: 0
                }, d = n.optional(a) + e.IDENT_RE + "\\s*\\(", g = {
                    keyword: ["asm", "auto", "break", "case", "continue", "default", "do", "else", "enum", "extern", "for", "fortran", "goto", "if", "inline", "register", "restrict", "return", "sizeof", "struct", "switch", "typedef", "union", "volatile", "while", "_Alignas", "_Alignof", "_Atomic", "_Generic", "_Noreturn", "_Static_assert", "_Thread_local", "alignas", "alignof", "noreturn", "static_assert", "thread_local", "_Pragma"],
                    type: ["float", "double", "signed", "unsigned", "int", "short", "long", "char", "void", "_Bool", "_Complex", "_Imaginary", "_Decimal32", "_Decimal64", "_Decimal128", "const", "static", "complex", "bool", "imaginary"],
                    literal: "true false NULL",
                    built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
                }, u = [l, r, t, e.C_BLOCK_COMMENT_MODE, o, s], b = {
                    variants: [{ begin: /=/, end: /;/ }, {
                        begin: /\(/, end: /\)/
                    }, { beginKeywords: "new throw return else", end: /;/ }],
                    keywords: g, contains: u.concat([{
                        begin: /\(/, end: /\)/, keywords: g,
                        contains: u.concat(["self"]), relevance: 0
                    }]), relevance: 0
                }, m = {
                    begin: "(" + i + "[\\*&\\s]+)+" + d, returnBegin: !0, end: /[{;=]/, excludeEnd: !0,
                    keywords: g, illegal: /[^\w\s\*&:<>.]/, contains: [{
                        begin: "decltype\\(auto\\)",
                        keywords: g, relevance: 0
                    }, {
                        begin: d, returnBegin: !0, contains: [e.inherit(c, {
                            className: "title.function"
                        })], relevance: 0
                    }, { relevance: 0, match: /,/ }, {
                        className: "params", begin: /\(/, end: /\)/, keywords: g, relevance: 0,
                        contains: [t, e.C_BLOCK_COMMENT_MODE, s, o, r, {
                            begin: /\(/, end: /\)/, keywords: g,
                            relevance: 0, contains: ["self", t, e.C_BLOCK_COMMENT_MODE, s, o, r]
                        }]
                    }, r, t, e.C_BLOCK_COMMENT_MODE, l]
                }; return {
                    name: "C", aliases: ["h"], keywords: g,
                    disableAutodetect: !0, illegal: "</", contains: [].concat(b, m, u, [l, {
                        begin: e.IDENT_RE + "::", keywords: g
                    }, {
                            className: "class",
                            beginKeywords: "enum class struct union", end: /[{;:<>=]/, contains: [{
                                beginKeywords: "final class struct"
                            }, e.TITLE_MODE]
                        }]), exports: {
                            preprocessor: l,
                            strings: s, keywords: g
                        }
                }
            }, grmr_cpp: e => {
                const n = e.regex, t = e.COMMENT("//", "$", {
                    contains: [{ begin: /\\\n/ }]
                }), a = "[a-zA-Z_]\\w*::", i = "(?!struct)(decltype\\(auto\\)|" + n.optional(a) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", r = {
                    className: "type", begin: "\\b[a-z\\d_]*_t\\b"
                }, s = {
                    className: "string", variants: [{
                        begin: '(u8?|U|L)?"', end: '"', illegal: "\\n", contains: [e.BACKSLASH_ESCAPE]
                    }, {
                        begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                        end: "'", illegal: "."
                    }, e.END_SAME_AS_BEGIN({
                        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/
                    })]
                }, o = {
                    className: "number", variants: [{ begin: "\\b(0b[01']+)" }, {
                        begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                    }, {
                        begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                    }], relevance: 0
                }, l = {
                    className: "meta", begin: /#\s*[a-z]+\b/, end: /$/, keywords: {
                        keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                    }, contains: [{ begin: /\\\n/, relevance: 0 }, e.inherit(s, { className: "string" }), {
                        className: "string", begin: /<.*?>/
                    }, t, e.C_BLOCK_COMMENT_MODE]
                }, c = {
                    className: "title", begin: n.optional(a) + e.IDENT_RE, relevance: 0
                }, d = n.optional(a) + e.IDENT_RE + "\\s*\\(", g = {
                    type: ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"],
                    keyword: ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"],
                    literal: ["NULL", "false", "nullopt", "nullptr", "true"], built_in: ["_Pragma"],
                    _type_hints: ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"]
                }, u = {
                    className: "function.dispatch", relevance: 0, keywords: {
                        _hint: ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"]
                    },
                    begin: n.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, n.lookahead(/(<[^<>]+>|)\s*\(/))
                }, b = [u, l, r, t, e.C_BLOCK_COMMENT_MODE, o, s], m = {
                    variants: [{ begin: /=/, end: /;/ }, {
                        begin: /\(/, end: /\)/
                    }, { beginKeywords: "new throw return else", end: /;/ }],
                    keywords: g, contains: b.concat([{
                        begin: /\(/, end: /\)/, keywords: g,
                        contains: b.concat(["self"]), relevance: 0
                    }]), relevance: 0
                }, p = {
                    className: "function",
                    begin: "(" + i + "[\\*&\\s]+)+" + d, returnBegin: !0, end: /[{;=]/, excludeEnd: !0,
                    keywords: g, illegal: /[^\w\s\*&:<>.]/, contains: [{
                        begin: "decltype\\(auto\\)",
                        keywords: g, relevance: 0
                    }, { begin: d, returnBegin: !0, contains: [c], relevance: 0 }, {
                        begin: /::/, relevance: 0
                    }, { begin: /:/, endsWithParent: !0, contains: [s, o] }, {
                        relevance: 0, match: /,/
                    }, {
                        className: "params", begin: /\(/, end: /\)/, keywords: g,
                        relevance: 0, contains: [t, e.C_BLOCK_COMMENT_MODE, s, o, r, {
                            begin: /\(/, end: /\)/,
                            keywords: g, relevance: 0, contains: ["self", t, e.C_BLOCK_COMMENT_MODE, s, o, r]
                        }]
                    }, r, t, e.C_BLOCK_COMMENT_MODE, l]
                }; return {
                    name: "C++",
                    aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"], keywords: g, illegal: "</",
                    classNameAliases: { "function.dispatch": "built_in" },
                    contains: [].concat(m, p, u, b, [l, {
                        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                        end: ">", keywords: g, contains: ["self", r]
                    }, { begin: e.IDENT_RE + "::", keywords: g }, {
                            match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
                            className: { 1: "keyword", 3: "title.class" }
                        }])
                }
            }, grmr_csharp: e => {
                const n = {
                    keyword: ["abstract", "as", "base", "break", "case", "catch", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "scoped", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"].concat(["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"]),
                    built_in: ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
                    literal: ["default", "false", "null", "true"]
                }, t = e.inherit(e.TITLE_MODE, {
                    begin: "[a-zA-Z](\\.?\\w)*"
                }), a = {
                    className: "number", variants: [{
                        begin: "\\b(0b[01']+)"
                    }, {
                        begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                    }, {
                        begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                    }], relevance: 0
                }, i = {
                    className: "string", begin: '@"', end: '"', contains: [{ begin: '""' }]
                }, r = e.inherit(i, { illegal: /\n/ }), s = {
                    className: "subst", begin: /\{/, end: /\}/,
                    keywords: n
                }, o = e.inherit(s, { illegal: /\n/ }), l = {
                    className: "string", begin: /\$"/,
                    end: '"', illegal: /\n/, contains: [{ begin: /\{\{/ }, {
                        begin: /\}\}/
                    }, e.BACKSLASH_ESCAPE, o]
                }, c = {
                    className: "string", begin: /\$@"/, end: '"', contains: [{
                        begin: /\{\{/
                    }, { begin: /\}\}/ }, { begin: '""' }, s]
                }, d = e.inherit(c, {
                    illegal: /\n/,
                    contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, o]
                })
                    ; s.contains = [c, l, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.C_BLOCK_COMMENT_MODE],
                        o.contains = [d, l, r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.inherit(e.C_BLOCK_COMMENT_MODE, {
                            illegal: /\n/
                        })]; const g = {
                            variants: [c, l, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                        }, u = {
                            begin: "<", end: ">", contains: [{ beginKeywords: "in out" }, t]
                        }, b = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", m = {
                            begin: "@" + e.IDENT_RE, relevance: 0
                        }; return {
                            name: "C#", aliases: ["cs", "c#"],
                            keywords: n, illegal: /::/, contains: [e.COMMENT("///", "$", {
                                returnBegin: !0,
                                contains: [{
                                    className: "doctag", variants: [{ begin: "///", relevance: 0 }, {
                                        begin: "\x3c!--|--\x3e"
                                    }, { begin: "</?", end: ">" }]
                                }]
                            }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                                className: "meta", begin: "#",
                                end: "$", keywords: {
                                    keyword: "if else elif endif define undef warning error line region endregion pragma checksum"
                                }
                            }, g, a, {
                                beginKeywords: "class interface", relevance: 0, end: /[{;=]/,
                                illegal: /[^\s:,]/, contains: [{
                                    beginKeywords: "where class"
                                }, t, u, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                            }, {
                                beginKeywords: "namespace",
                                relevance: 0, end: /[{;=]/, illegal: /[^\s:]/,
                                contains: [t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                            }, {
                                beginKeywords: "record", relevance: 0, end: /[{;=]/, illegal: /[^\s:]/,
                                contains: [t, u, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                            }, {
                                className: "meta",
                                begin: "^\\s*\\[(?=[\\w])", excludeBegin: !0, end: "\\]", excludeEnd: !0, contains: [{
                                    className: "string", begin: /"/, end: /"/
                                }]
                            }, {
                                beginKeywords: "new return throw await else", relevance: 0
                            }, {
                                className: "function",
                                begin: "(" + b + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(", returnBegin: !0,
                                end: /\s*[{;=]/, excludeEnd: !0, keywords: n, contains: [{
                                    beginKeywords: "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
                                    relevance: 0
                                }, {
                                    begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(", returnBegin: !0,
                                    contains: [e.TITLE_MODE, u], relevance: 0
                                }, { match: /\(\)/ }, {
                                    className: "params",
                                    begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: n, relevance: 0,
                                    contains: [g, a, e.C_BLOCK_COMMENT_MODE]
                                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                            }, m]
                        }
            }, grmr_css: e => {
                const n = e.regex, t = te(e), a = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]; return {
                    name: "CSS", case_insensitive: !0, illegal: /[=|'\$]/, keywords: {
                        keyframePosition: "from to"
                    }, classNameAliases: { keyframePosition: "selector-tag" },
                    contains: [t.BLOCK_COMMENT, {
                        begin: /-(webkit|moz|ms|o)-(?=[a-z])/
                    }, t.CSS_NUMBER_MODE, {
                        className: "selector-id", begin: /#[A-Za-z0-9_-]+/, relevance: 0
                    }, {
                        className: "selector-class", begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*", relevance: 0
                    }, t.ATTRIBUTE_SELECTOR_MODE, {
                        className: "selector-pseudo", variants: [{
                            begin: ":(" + re.join("|") + ")"
                        }, { begin: ":(:)?(" + se.join("|") + ")" }]
                    }, t.CSS_VARIABLE, { className: "attribute", begin: "\\b(" + oe.join("|") + ")\\b" }, {
                        begin: /:/, end: /[;}{]/,
                        contains: [t.BLOCK_COMMENT, t.HEXCOLOR, t.IMPORTANT, t.CSS_NUMBER_MODE, ...a, {
                            begin: /(url|data-uri)\(/, end: /\)/, relevance: 0, keywords: {
                                built_in: "url data-uri"
                            }, contains: [...a, {
                                className: "string", begin: /[^)]/, endsWithParent: !0,
                                excludeEnd: !0
                            }]
                        }, t.FUNCTION_DISPATCH]
                    }, {
                        begin: n.lookahead(/@/), end: "[{;]",
                        relevance: 0, illegal: /:/, contains: [{
                            className: "keyword", begin: /@-?\w[\w]*(-\w+)*/
                        }, {
                            begin: /\s/, endsWithParent: !0, excludeEnd: !0, relevance: 0, keywords: {
                                $pattern: /[a-z-]+/, keyword: "and or not only", attribute: ie.join(" ")
                            }, contains: [{
                                begin: /[a-z-]+(?=:)/, className: "attribute"
                            }, ...a, t.CSS_NUMBER_MODE]
                        }]
                    }, {
                        className: "selector-tag", begin: "\\b(" + ae.join("|") + ")\\b"
                    }]
                }
            }, grmr_diff: e => {
                const n = e.regex; return {
                    name: "Diff", aliases: ["patch"], contains: [{
                        className: "meta", relevance: 10,
                        match: n.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
                    }, {
                        className: "comment", variants: [{
                            begin: n.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
                            end: /$/
                        }, { match: /^\*{15}$/ }]
                    }, { className: "addition", begin: /^\+/, end: /$/ }, {
                        className: "deletion", begin: /^-/, end: /$/
                    }, {
                        className: "addition", begin: /^!/,
                        end: /$/
                    }]
                }
            }, grmr_go: e => {
                const n = {
                    keyword: ["break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "for", "func", "go", "goto", "if", "import", "interface", "map", "package", "range", "return", "select", "struct", "switch", "type", "var"],
                    type: ["bool", "byte", "complex64", "complex128", "error", "float32", "float64", "int8", "int16", "int32", "int64", "string", "uint8", "uint16", "uint32", "uint64", "int", "uint", "uintptr", "rune"],
                    literal: ["true", "false", "iota", "nil"],
                    built_in: ["append", "cap", "close", "complex", "copy", "imag", "len", "make", "new", "panic", "print", "println", "real", "recover", "delete"]
                }; return {
                    name: "Go", aliases: ["golang"], keywords: n, illegal: "</",
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        className: "string",
                        variants: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, { begin: "`", end: "`" }]
                    }, {
                        className: "number", variants: [{
                            begin: e.C_NUMBER_RE + "[i]", relevance: 1
                        }, e.C_NUMBER_MODE]
                    }, { begin: /:=/ }, {
                        className: "function", beginKeywords: "func",
                        end: "\\s*(\\{|$)", excludeEnd: !0, contains: [e.TITLE_MODE, {
                            className: "params",
                            begin: /\(/, end: /\)/, endsParent: !0, keywords: n, illegal: /["']/
                        }]
                    }]
                }
            },
            grmr_graphql: e => {
                const n = e.regex; return {
                    name: "GraphQL", aliases: ["gql"],
                    case_insensitive: !0, disableAutodetect: !1, keywords: {
                        keyword: ["query", "mutation", "subscription", "type", "input", "schema", "directive", "interface", "union", "scalar", "fragment", "enum", "on"],
                        literal: ["true", "false", "null"]
                    },
                    contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
                        scope: "punctuation", match: /[.]{3}/, relevance: 0
                    }, {
                        scope: "punctuation",
                        begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/, relevance: 0
                    }, {
                        scope: "variable", begin: /\$/,
                        end: /\W/, excludeEnd: !0, relevance: 0
                    }, { scope: "meta", match: /@\w+/, excludeEnd: !0 }, {
                        scope: "symbol", begin: n.concat(/[_A-Za-z][_0-9A-Za-z]*/, n.lookahead(/\s*:/)),
                        relevance: 0
                    }], illegal: [/[;<']/, /BEGIN/]
                }
            }, grmr_ini: e => {
                const n = e.regex, t = {
                    className: "number", relevance: 0, variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, {
                        begin: e.NUMBER_RE
                    }]
                }, a = e.COMMENT(); a.variants = [{ begin: /;/, end: /$/ }, {
                    begin: /#/,
                    end: /$/
                }]; const i = {
                    className: "variable", variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, {
                        begin: /\$\{(.*?)\}/
                    }]
                }, r = {
                    className: "literal",
                    begin: /\bon|off|true|false|yes|no\b/
                }, s = {
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE], variants: [{ begin: "'''", end: "'''", relevance: 10 }, {
                        begin: '"""', end: '"""', relevance: 10
                    }, { begin: '"', end: '"' }, { begin: "'", end: "'" }]
                }, o = {
                    begin: /\[/, end: /\]/, contains: [a, r, i, s, t, "self"], relevance: 0
                }, l = n.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/); return {
                    name: "TOML, also INI", aliases: ["toml"], case_insensitive: !0, illegal: /\S/,
                    contains: [a, { className: "section", begin: /\[+/, end: /\]+/ }, {
                        begin: n.concat(l, "(\\s*\\.\\s*", l, ")*", n.lookahead(/\s*=\s*[^#\s]/)),
                        className: "attr", starts: { end: /$/, contains: [a, o, r, i, s, t] }
                    }]
                }
            }, grmr_java: e => {
                const n = e.regex, t = "[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*", a = t + ue("(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?", /~~~/g, 2), i = {
                    keyword: ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed"],
                    literal: ["false", "true", "null"],
                    type: ["char", "boolean", "long", "float", "int", "byte", "short", "double"],
                    built_in: ["super", "this"]
                }, r = {
                    className: "meta", begin: "@" + t, contains: [{
                        begin: /\(/, end: /\)/, contains: ["self"]
                    }]
                }, s = {
                    className: "params", begin: /\(/,
                    end: /\)/, keywords: i, relevance: 0, contains: [e.C_BLOCK_COMMENT_MODE], endsParent: !0
                }
                    ; return {
                        name: "Java", aliases: ["jsp"], keywords: i, illegal: /<\/|#/,
                        contains: [e.COMMENT("/\\*\\*", "\\*/", {
                            relevance: 0, contains: [{
                                begin: /\w+@/,
                                relevance: 0
                            }, { className: "doctag", begin: "@[A-Za-z]+" }]
                        }), {
                            begin: /import java\.[a-z]+\./, keywords: "import", relevance: 2
                        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                            begin: /"""/, end: /"""/,
                            className: "string", contains: [e.BACKSLASH_ESCAPE]
                        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                            match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, t], className: {
                                1: "keyword", 3: "title.class"
                            }
                        }, { match: /non-sealed/, scope: "keyword" }, {
                            begin: [n.concat(/(?!else)/, t), /\s+/, t, /\s+/, /=(?!=)/], className: {
                                1: "type",
                                3: "variable", 5: "operator"
                            }
                        }, {
                            begin: [/record/, /\s+/, t], className: {
                                1: "keyword",
                                3: "title.class"
                            }, contains: [s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                        }, {
                            beginKeywords: "new throw return else", relevance: 0
                        }, {
                            begin: ["(?:" + a + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/], className: {
                                2: "title.function"
                            }, keywords: i, contains: [{
                                className: "params", begin: /\(/,
                                end: /\)/, keywords: i, relevance: 0,
                                contains: [r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, ge, e.C_BLOCK_COMMENT_MODE]
                            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                        }, ge, r]
                    }
            }, grmr_javascript: we,
            grmr_json: e => {
                const n = ["true", "false", "null"], t = {
                    scope: "literal",
                    beginKeywords: n.join(" ")
                }; return {
                    name: "JSON", keywords: { literal: n }, contains: [{
                        className: "attr", begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/, relevance: 1.01
                    }, {
                        match: /[{}[\],:]/, className: "punctuation", relevance: 0
                    }, e.QUOTE_STRING_MODE, t, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                    illegal: "\\S"
                }
            }, grmr_kotlin: e => {
                const n = {
                    keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
                    built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                    literal: "true false null"
                }, t = {
                    className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@"
                }, a = { className: "subst", begin: /\$\{/, end: /\}/, contains: [e.C_NUMBER_MODE] }, i = {
                    className: "variable", begin: "\\$" + e.UNDERSCORE_IDENT_RE
                }, r = {
                    className: "string",
                    variants: [{ begin: '"""', end: '"""(?=[^"])', contains: [i, a] }, {
                        begin: "'", end: "'",
                        illegal: /\n/, contains: [e.BACKSLASH_ESCAPE]
                    }, {
                        begin: '"', end: '"', illegal: /\n/,
                        contains: [e.BACKSLASH_ESCAPE, i, a]
                    }]
                }; a.contains.push(r); const s = {
                    className: "meta",
                    begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
                }, o = {
                    className: "meta", begin: "@" + e.UNDERSCORE_IDENT_RE, contains: [{
                        begin: /\(/,
                        end: /\)/, contains: [e.inherit(r, { className: "string" }), "self"]
                    }]
                }, l = ge, c = e.COMMENT("/\\*", "\\*/", { contains: [e.C_BLOCK_COMMENT_MODE] }), d = {
                    variants: [{ className: "type", begin: e.UNDERSCORE_IDENT_RE }, {
                        begin: /\(/, end: /\)/,
                        contains: []
                    }]
                }, g = d; return g.variants[1].contains = [d], d.variants[1].contains = [g],
                {
                    name: "Kotlin", aliases: ["kt", "kts"], keywords: n,
                    contains: [e.COMMENT("/\\*\\*", "\\*/", {
                        relevance: 0, contains: [{
                            className: "doctag",
                            begin: "@[A-Za-z]+"
                        }]
                    }), e.C_LINE_COMMENT_MODE, c, {
                        className: "keyword",
                        begin: /\b(break|continue|return|this)\b/, starts: {
                            contains: [{
                                className: "symbol",
                                begin: /@\w+/
                            }]
                        }
                    }, t, s, o, {
                        className: "function", beginKeywords: "fun", end: "[(]|$",
                        returnBegin: !0, excludeEnd: !0, keywords: n, relevance: 5, contains: [{
                            begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(", returnBegin: !0, relevance: 0,
                            contains: [e.UNDERSCORE_TITLE_MODE]
                        }, {
                            className: "type", begin: /</, end: />/,
                            keywords: "reified", relevance: 0
                        }, {
                            className: "params", begin: /\(/, end: /\)/,
                            endsParent: !0, keywords: n, relevance: 0, contains: [{
                                begin: /:/, end: /[=,\/]/,
                                endsWithParent: !0, contains: [d, e.C_LINE_COMMENT_MODE, c], relevance: 0
                            }, e.C_LINE_COMMENT_MODE, c, s, o, r, e.C_NUMBER_MODE]
                        }, c]
                    }, {
                        begin: [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE], beginScope: {
                            3: "title.class"
                        }, keywords: "class interface trait", end: /[:\{(]|$/, excludeEnd: !0,
                        illegal: "extends implements", contains: [{
                            beginKeywords: "public protected internal private constructor"
                        }, e.UNDERSCORE_TITLE_MODE, {
                            className: "type", begin: /</, end: />/, excludeBegin: !0,
                            excludeEnd: !0, relevance: 0
                        }, {
                            className: "type", begin: /[,:]\s*/, end: /[<\(,){\s]|$/,
                            excludeBegin: !0, returnEnd: !0
                        }, s, o]
                    }, r, {
                        className: "meta", begin: "^#!/usr/bin/env",
                        end: "$", illegal: "\n"
                    }, l]
                }
            }, grmr_less: e => {
                const n = te(e), t = le, a = "([\\w-]+|@\\{[\\w-]+\\})", i = [], r = [], s = e => ({
                    className: "string", begin: "~?" + e + ".*?" + e
                }), o = (e, n, t) => ({
                    className: e, begin: n,
                    relevance: t
                }), l = {
                    $pattern: /[a-z-]+/, keyword: "and or not only",
                    attribute: ie.join(" ")
                }, c = {
                    begin: "\\(", end: "\\)", contains: r, keywords: l,
                    relevance: 0
                }
                    ; r.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, s("'"), s('"'), n.CSS_NUMBER_MODE, {
                        begin: "(url|data-uri)\\(", starts: {
                            className: "string", end: "[\\)\\n]",
                            excludeEnd: !0
                        }
                    }, n.HEXCOLOR, c, o("variable", "@@?[\\w-]+", 10), o("variable", "@\\{[\\w-]+\\}"), o("built_in", "~?`[^`]*?`"), {
                        className: "attribute", begin: "[\\w-]+\\s*:", end: ":", returnBegin: !0, excludeEnd: !0
                    }, n.IMPORTANT, { beginKeywords: "and not" }, n.FUNCTION_DISPATCH); const d = r.concat({
                        begin: /\{/, end: /\}/, contains: i
                    }), g = {
                        beginKeywords: "when", endsWithParent: !0,
                        contains: [{ beginKeywords: "and not" }].concat(r)
                    }, u = {
                        begin: a + "\\s*:",
                        returnBegin: !0, end: /[;}]/, relevance: 0, contains: [{
                            begin: /-(webkit|moz|ms|o)-/
                        }, n.CSS_VARIABLE, {
                            className: "attribute", begin: "\\b(" + oe.join("|") + ")\\b",
                            end: /(?=:)/, starts: { endsWithParent: !0, illegal: "[<=$]", relevance: 0, contains: r }
                        }]
                    }, b = {
                        className: "keyword",
                        begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
                        starts: { end: "[;{}]", keywords: l, returnEnd: !0, contains: r, relevance: 0 }
                    }, m = {
                        className: "variable", variants: [{ begin: "@[\\w-]+\\s*:", relevance: 15 }, {
                            begin: "@[\\w-]+"
                        }], starts: { end: "[;}]", returnEnd: !0, contains: d }
                    }, p = {
                        variants: [{
                            begin: "[\\.#:&\\[>]", end: "[;{}]"
                        }, { begin: a, end: /\{/ }], returnBegin: !0,
                        returnEnd: !0, illegal: "[<='$\"]", relevance: 0,
                        contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, g, o("keyword", "all\\b"), o("variable", "@\\{[\\w-]+\\}"), {
                            begin: "\\b(" + ae.join("|") + ")\\b", className: "selector-tag"
                        }, n.CSS_NUMBER_MODE, o("selector-tag", a, 0), o("selector-id", "#" + a), o("selector-class", "\\." + a, 0), o("selector-tag", "&", 0), n.ATTRIBUTE_SELECTOR_MODE, {
                            className: "selector-pseudo", begin: ":(" + re.join("|") + ")"
                        }, {
                            className: "selector-pseudo", begin: ":(:)?(" + se.join("|") + ")"
                        }, {
                            begin: /\(/,
                            end: /\)/, relevance: 0, contains: d
                        }, { begin: "!important" }, n.FUNCTION_DISPATCH]
                    }, _ = {
                        begin: `[\\w-]+:(:)?(${t.join("|")})`, returnBegin: !0, contains: [p]
                    }
                    ; return i.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, b, m, _, u, p, g, n.FUNCTION_DISPATCH),
                        { name: "Less", case_insensitive: !0, illegal: "[=>'/<($\"]", contains: i }
            },
            grmr_lua: e => {
                const n = "\\[=*\\[", t = "\\]=*\\]", a = {
                    begin: n, end: t, contains: ["self"]
                }, i = [e.COMMENT("--(?!\\[=*\\[)", "$"), e.COMMENT("--\\[=*\\[", t, {
                    contains: [a],
                    relevance: 10
                })]; return {
                    name: "Lua", keywords: {
                        $pattern: e.UNDERSCORE_IDENT_RE,
                        literal: "true false nil",
                        keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
                        built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
                    }, contains: i.concat([{
                        className: "function", beginKeywords: "function", end: "\\)",
                        contains: [e.inherit(e.TITLE_MODE, {
                            begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
                        }), {
                            className: "params",
                            begin: "\\(", endsWithParent: !0, contains: i
                        }].concat(i)
                    }, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                        className: "string",
                        begin: n, end: t, contains: [a], relevance: 5
                    }])
                }
            }, grmr_makefile: e => {
                const n = {
                    className: "variable", variants: [{
                        begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
                        contains: [e.BACKSLASH_ESCAPE]
                    }, { begin: /\$[@%<?\^\+\*]/ }]
                }, t = {
                    className: "string",
                    begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, n]
                }, a = {
                    className: "variable",
                    begin: /\$\([\w-]+\s/, end: /\)/, keywords: {
                        built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
                    }, contains: [n]
                }, i = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, r = {
                    className: "section", begin: /^[^\s]+:/, end: /$/, contains: [n]
                }; return {
                    name: "Makefile", aliases: ["mk", "mak", "make"], keywords: {
                        $pattern: /[\w-]+/,
                        keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
                    }, contains: [e.HASH_COMMENT_MODE, n, t, a, i, {
                        className: "meta", begin: /^\.PHONY:/,
                        end: /$/, keywords: { $pattern: /[\.\w]+/, keyword: ".PHONY" }
                    }, r]
                }
            }, grmr_xml: e => {
                const n = e.regex, t = n.concat(/[\p{L}_]/u, n.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), a = {
                    className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
                }, i = {
                    begin: /\s/,
                    contains: [{ className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }]
                }, r = e.inherit(i, { begin: /\(/, end: /\)/ }), s = e.inherit(e.APOS_STRING_MODE, {
                    className: "string"
                }), o = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), l = {
                    endsWithParent: !0, illegal: /</, relevance: 0, contains: [{
                        className: "attr",
                        begin: /[\p{L}0-9._:-]+/u, relevance: 0
                    }, {
                        begin: /=\s*/, relevance: 0, contains: [{
                            className: "string", endsParent: !0, variants: [{ begin: /"/, end: /"/, contains: [a] }, {
                                begin: /'/, end: /'/, contains: [a]
                            }, { begin: /[^\s"'=<>`]+/ }]
                        }]
                    }]
                }; return {
                    name: "HTML, XML",
                    aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
                    case_insensitive: !0, unicodeRegex: !0, contains: [{
                        className: "meta", begin: /<![a-z]/,
                        end: />/, relevance: 10, contains: [i, o, s, r, {
                            begin: /\[/, end: /\]/, contains: [{
                                className: "meta", begin: /<![a-z]/, end: />/, contains: [i, r, o, s]
                            }]
                        }]
                    }, e.COMMENT(/<!--/, /-->/, { relevance: 10 }), {
                        begin: /<!\[CDATA\[/, end: /\]\]>/,
                        relevance: 10
                    }, a, {
                        className: "meta", end: /\?>/, variants: [{
                            begin: /<\?xml/,
                            relevance: 10, contains: [o]
                        }, { begin: /<\?[a-z][a-z0-9]+/ }]
                    }, {
                        className: "tag",
                        begin: /<style(?=\s|>)/, end: />/, keywords: { name: "style" }, contains: [l], starts: {
                            end: /<\/style>/, returnEnd: !0, subLanguage: ["css", "xml"]
                        }
                    }, {
                        className: "tag",
                        begin: /<script(?=\s|>)/, end: />/, keywords: { name: "script" }, contains: [l], starts: {
                            end: /<\/script>/, returnEnd: !0, subLanguage: ["javascript", "handlebars", "xml"]
                        }
                    }, {
                        className: "tag", begin: /<>|<\/>/
                    }, {
                        className: "tag",
                        begin: n.concat(/</, n.lookahead(n.concat(t, n.either(/\/>/, />/, /\s/)))),
                        end: /\/?>/, contains: [{ className: "name", begin: t, relevance: 0, starts: l }]
                    }, {
                        className: "tag", begin: n.concat(/<\//, n.lookahead(n.concat(t, />/))), contains: [{
                            className: "name", begin: t, relevance: 0
                        }, { begin: />/, relevance: 0, endsParent: !0 }]
                    }]
                }
            }, grmr_markdown: e => {
                const n = {
                    begin: /<\/?[A-Za-z_]/, end: ">", subLanguage: "xml",
                    relevance: 0
                }, t = {
                    variants: [{ begin: /\[.+?\]\[.*?\]/, relevance: 0 }, {
                        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                        relevance: 2
                    }, {
                        begin: e.regex.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                        relevance: 2
                    }, { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 }, {
                        begin: /\[.*?\]\(.*?\)/, relevance: 0
                    }], returnBegin: !0, contains: [{
                        match: /\[(?=\])/
                    }, {
                        className: "string", relevance: 0, begin: "\\[", end: "\\]", excludeBegin: !0,
                        returnEnd: !0
                    }, {
                        className: "link", relevance: 0, begin: "\\]\\(", end: "\\)",
                        excludeBegin: !0, excludeEnd: !0
                    }, {
                        className: "symbol", relevance: 0, begin: "\\]\\[",
                        end: "\\]", excludeBegin: !0, excludeEnd: !0
                    }]
                }, a = {
                    className: "strong", contains: [],
                    variants: [{ begin: /_{2}/, end: /_{2}/ }, { begin: /\*{2}/, end: /\*{2}/ }]
                }, i = {
                    className: "emphasis", contains: [], variants: [{ begin: /\*(?!\*)/, end: /\*/ }, {
                        begin: /_(?!_)/, end: /_/, relevance: 0
                    }]
                }, r = e.inherit(a, {
                    contains: []
                }), s = e.inherit(i, { contains: [] }); a.contains.push(s), i.contains.push(r)
                    ; let o = [n, t]; return [a, i, r, s].forEach((e => {
                        e.contains = e.contains.concat(o)
                    })), o = o.concat(a, i), {
                        name: "Markdown", aliases: ["md", "mkdown", "mkd"], contains: [{
                            className: "section", variants: [{ begin: "^#{1,6}", end: "$", contains: o }, {
                                begin: "(?=^.+?\\n[=-]{2,}$)", contains: [{ begin: "^[=-]*$" }, {
                                    begin: "^", end: "\\n",
                                    contains: o
                                }]
                            }]
                        }, n, {
                            className: "bullet", begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
                            end: "\\s+", excludeEnd: !0
                        }, a, i, {
                            className: "quote", begin: "^>\\s+", contains: o,
                            end: "$"
                        }, {
                            className: "code", variants: [{ begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" }, {
                                begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
                            }, { begin: "```", end: "```+[ ]*$" }, {
                                begin: "~~~", end: "~~~+[ ]*$"
                            }, { begin: "`.+?`" }, {
                                begin: "(?=^( {4}|\\t))",
                                contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }], relevance: 0
                            }]
                        }, {
                            begin: "^[-\\*]{3,}", end: "$"
                        }, t, {
                            begin: /^\[[^\n]+\]:/, returnBegin: !0, contains: [{
                                className: "symbol", begin: /\[/, end: /\]/, excludeBegin: !0, excludeEnd: !0
                            }, {
                                className: "link", begin: /:\s*/, end: /$/, excludeBegin: !0
                            }]
                        }]
                    }
            }, grmr_objectivec: e => {
                const n = /[a-zA-Z@][a-zA-Z0-9_]*/, t = {
                    $pattern: n,
                    keyword: ["@interface", "@class", "@protocol", "@implementation"]
                }; return {
                    name: "Objective-C", aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
                    keywords: {
                        "variable.language": ["this", "super"], $pattern: n,
                        keyword: ["while", "export", "sizeof", "typedef", "const", "struct", "for", "union", "volatile", "static", "mutable", "if", "do", "return", "goto", "enum", "else", "break", "extern", "asm", "case", "default", "register", "explicit", "typename", "switch", "continue", "inline", "readonly", "assign", "readwrite", "self", "@synchronized", "id", "typeof", "nonatomic", "IBOutlet", "IBAction", "strong", "weak", "copy", "in", "out", "inout", "bycopy", "byref", "oneway", "__strong", "__weak", "__block", "__autoreleasing", "@private", "@protected", "@public", "@try", "@property", "@end", "@throw", "@catch", "@finally", "@autoreleasepool", "@synthesize", "@dynamic", "@selector", "@optional", "@required", "@encode", "@package", "@import", "@defs", "@compatibility_alias", "__bridge", "__bridge_transfer", "__bridge_retained", "__bridge_retain", "__covariant", "__contravariant", "__kindof", "_Nonnull", "_Nullable", "_Null_unspecified", "__FUNCTION__", "__PRETTY_FUNCTION__", "__attribute__", "getter", "setter", "retain", "unsafe_unretained", "nonnull", "nullable", "null_unspecified", "null_resettable", "class", "instancetype", "NS_DESIGNATED_INITIALIZER", "NS_UNAVAILABLE", "NS_REQUIRES_SUPER", "NS_RETURNS_INNER_POINTER", "NS_INLINE", "NS_AVAILABLE", "NS_DEPRECATED", "NS_ENUM", "NS_OPTIONS", "NS_SWIFT_UNAVAILABLE", "NS_ASSUME_NONNULL_BEGIN", "NS_ASSUME_NONNULL_END", "NS_REFINED_FOR_SWIFT", "NS_SWIFT_NAME", "NS_SWIFT_NOTHROW", "NS_DURING", "NS_HANDLER", "NS_ENDHANDLER", "NS_VALUERETURN", "NS_VOIDRETURN"],
                        literal: ["false", "true", "FALSE", "TRUE", "nil", "YES", "NO", "NULL"],
                        built_in: ["dispatch_once_t", "dispatch_queue_t", "dispatch_sync", "dispatch_async", "dispatch_once"],
                        type: ["int", "float", "char", "unsigned", "signed", "short", "long", "double", "wchar_t", "unichar", "void", "bool", "BOOL", "id|0", "_Bool"]
                    }, illegal: "</", contains: [{
                        className: "built_in",
                        begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                        className: "string", variants: [{
                            begin: '@"', end: '"', illegal: "\\n",
                            contains: [e.BACKSLASH_ESCAPE]
                        }]
                    }, {
                        className: "meta", begin: /#\s*[a-z]+\b/, end: /$/,
                        keywords: {
                            keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include"
                        }, contains: [{ begin: /\\\n/, relevance: 0 }, e.inherit(e.QUOTE_STRING_MODE, {
                            className: "string"
                        }), {
                            className: "string", begin: /<.*?>/, end: /$/, illegal: "\\n"
                        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, {
                        className: "class",
                        begin: "(" + t.keyword.join("|") + ")\\b", end: /(\{|$)/, excludeEnd: !0, keywords: t,
                        contains: [e.UNDERSCORE_TITLE_MODE]
                    }, {
                        begin: "\\." + e.UNDERSCORE_IDENT_RE,
                        relevance: 0
                    }]
                }
            }, grmr_perl: e => {
                const n = e.regex, t = /[dualxmsipngr]{0,12}/, a = {
                    $pattern: /[\w.]+/,
                    keyword: "abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0"
                }, i = { className: "subst", begin: "[$@]\\{", end: "\\}", keywords: a }, r = {
                    begin: /->\{/,
                    end: /\}/
                }, s = {
                    variants: [{ begin: /\$\d/ }, {
                        begin: n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])")
                    }, { begin: /[$%@][^\s\w{]/, relevance: 0 }]
                }, o = [e.BACKSLASH_ESCAPE, i, s], l = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/], c = (e, a, i = "\\1") => {
                    const r = "\\1" === i ? i : n.concat(i, a)
                        ; return n.concat(n.concat("(?:", e, ")"), a, /(?:\\.|[^\\\/])*?/, r, /(?:\\.|[^\\\/])*?/, i, t)
                }, d = (e, a, i) => n.concat(n.concat("(?:", e, ")"), a, /(?:\\.|[^\\\/])*?/, i, t), g = [s, e.HASH_COMMENT_MODE, e.COMMENT(/^=\w/, /=cut/, {
                    endsWithParent: !0
                }), r, {
                        className: "string", contains: o, variants: [{
                            begin: "q[qwxr]?\\s*\\(", end: "\\)", relevance: 5
                        }, {
                            begin: "q[qwxr]?\\s*\\[",
                            end: "\\]", relevance: 5
                        }, { begin: "q[qwxr]?\\s*\\{", end: "\\}", relevance: 5 }, {
                            begin: "q[qwxr]?\\s*\\|", end: "\\|", relevance: 5
                        }, {
                            begin: "q[qwxr]?\\s*<", end: ">",
                            relevance: 5
                        }, { begin: "qw\\s+q", end: "q", relevance: 5 }, {
                            begin: "'", end: "'",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, { begin: '"', end: '"' }, {
                            begin: "`", end: "`",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, { begin: /\{\w+\}/, relevance: 0 }, {
                            begin: "-?\\w+\\s*=>", relevance: 0
                        }]
                    }, {
                        className: "number",
                        begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                        relevance: 0
                    }, {
                        begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                        keywords: "split return print reverse grep", relevance: 0,
                        contains: [e.HASH_COMMENT_MODE, {
                            className: "regexp", variants: [{
                                begin: c("s|tr|y", n.either(...l, { capture: !0 }))
                            }, { begin: c("s|tr|y", "\\(", "\\)") }, {
                                begin: c("s|tr|y", "\\[", "\\]")
                            }, { begin: c("s|tr|y", "\\{", "\\}") }], relevance: 2
                        }, {
                            className: "regexp", variants: [{ begin: /(m|qr)\/\//, relevance: 0 }, {
                                begin: d("(?:m|qr)?", /\//, /\//)
                            }, {
                                begin: d("m|qr", n.either(...l, {
                                    capture: !0
                                }), /\1/)
                            }, { begin: d("m|qr", /\(/, /\)/) }, { begin: d("m|qr", /\[/, /\]/) }, {
                                begin: d("m|qr", /\{/, /\}/)
                            }]
                        }]
                    }, {
                        className: "function", beginKeywords: "sub",
                        end: "(\\s*\\(.*?\\))?[;{]", excludeEnd: !0, relevance: 5, contains: [e.TITLE_MODE]
                    }, {
                        begin: "-\\w\\b", relevance: 0
                    }, {
                        begin: "^__DATA__$", end: "^__END__$",
                        subLanguage: "mojolicious", contains: [{ begin: "^@@.*", end: "$", className: "comment" }]
                    }]; return i.contains = g, r.contains = g, {
                        name: "Perl", aliases: ["pl", "pm"], keywords: a,
                        contains: g
                    }
            }, grmr_php: e => {
                const n = e.regex, t = /(?![A-Za-z0-9])(?![$])/, a = n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, t), i = n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, t), r = {
                    scope: "variable", match: "\\$+" + a
                }, s = {
                    scope: "subst", variants: [{ begin: /\$\w+/ }, {
                        begin: /\{\$/, end: /\}/
                    }]
                }, o = e.inherit(e.APOS_STRING_MODE, {
                    illegal: null
                }), l = "[ \t\n]", c = {
                    scope: "string", variants: [e.inherit(e.QUOTE_STRING_MODE, {
                        illegal: null, contains: e.QUOTE_STRING_MODE.contains.concat(s)
                    }), o, e.END_SAME_AS_BEGIN({
                        begin: /<<<[ \t]*(\w+)\n/, end: /[ \t]*(\w+)\b/,
                        contains: e.QUOTE_STRING_MODE.contains.concat(s)
                    })]
                }, d = {
                    scope: "number",
                    variants: [{ begin: "\\b0[bB][01]+(?:_[01]+)*\\b" }, {
                        begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b"
                    }, {
                        begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"
                    }, {
                        begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
                    }], relevance: 0
                }, g = ["false", "null", "true"], u = ["__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__", "__COMPILER_HALT_OFFSET__", "__LINE__", "__METHOD__", "__NAMESPACE__", "__TRAIT__", "die", "echo", "exit", "include", "include_once", "print", "require", "require_once", "array", "abstract", "and", "as", "binary", "bool", "boolean", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "double", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "enum", "eval", "extends", "final", "finally", "float", "for", "foreach", "from", "global", "goto", "if", "implements", "instanceof", "insteadof", "int", "integer", "interface", "isset", "iterable", "list", "match|0", "mixed", "new", "never", "object", "or", "private", "protected", "public", "readonly", "real", "return", "string", "switch", "throw", "trait", "try", "unset", "use", "var", "void", "while", "xor", "yield"], b = ["Error|0", "AppendIterator", "ArgumentCountError", "ArithmeticError", "ArrayIterator", "ArrayObject", "AssertionError", "BadFunctionCallException", "BadMethodCallException", "CachingIterator", "CallbackFilterIterator", "CompileError", "Countable", "DirectoryIterator", "DivisionByZeroError", "DomainException", "EmptyIterator", "ErrorException", "Exception", "FilesystemIterator", "FilterIterator", "GlobIterator", "InfiniteIterator", "InvalidArgumentException", "IteratorIterator", "LengthException", "LimitIterator", "LogicException", "MultipleIterator", "NoRewindIterator", "OutOfBoundsException", "OutOfRangeException", "OuterIterator", "OverflowException", "ParentIterator", "ParseError", "RangeException", "RecursiveArrayIterator", "RecursiveCachingIterator", "RecursiveCallbackFilterIterator", "RecursiveDirectoryIterator", "RecursiveFilterIterator", "RecursiveIterator", "RecursiveIteratorIterator", "RecursiveRegexIterator", "RecursiveTreeIterator", "RegexIterator", "RuntimeException", "SeekableIterator", "SplDoublyLinkedList", "SplFileInfo", "SplFileObject", "SplFixedArray", "SplHeap", "SplMaxHeap", "SplMinHeap", "SplObjectStorage", "SplObserver", "SplPriorityQueue", "SplQueue", "SplStack", "SplSubject", "SplTempFileObject", "TypeError", "UnderflowException", "UnexpectedValueException", "UnhandledMatchError", "ArrayAccess", "BackedEnum", "Closure", "Fiber", "Generator", "Iterator", "IteratorAggregate", "Serializable", "Stringable", "Throwable", "Traversable", "UnitEnum", "WeakReference", "WeakMap", "Directory", "__PHP_Incomplete_Class", "parent", "php_user_filter", "self", "static", "stdClass"], m = {
                    keyword: u, literal: (e => {
                        const n = []; return e.forEach((e => {
                            n.push(e), e.toLowerCase() === e ? n.push(e.toUpperCase()) : n.push(e.toLowerCase())
                        })), n
                    })(g), built_in: b
                }, p = e => e.map((e => e.replace(/\|\d+$/, ""))), _ = {
                    variants: [{
                        match: [/new/, n.concat(l, "+"), n.concat("(?!", p(b).join("\\b|"), "\\b)"), i], scope: {
                            1: "keyword", 4: "title.class"
                        }
                    }]
                }, h = n.concat(a, "\\b(?!\\()"), f = {
                    variants: [{
                        match: [n.concat(/::/, n.lookahead(/(?!class\b)/)), h], scope: {
                            2: "variable.constant"
                        }
                    }, { match: [/::/, /class/], scope: { 2: "variable.language" } }, {
                        match: [i, n.concat(/::/, n.lookahead(/(?!class\b)/)), h], scope: {
                            1: "title.class",
                            3: "variable.constant"
                        }
                    }, {
                        match: [i, n.concat("::", n.lookahead(/(?!class\b)/))],
                        scope: { 1: "title.class" }
                    }, {
                        match: [i, /::/, /class/], scope: {
                            1: "title.class",
                            3: "variable.language"
                        }
                    }]
                }, E = {
                    scope: "attr",
                    match: n.concat(a, n.lookahead(":"), n.lookahead(/(?!::)/))
                }, y = {
                    relevance: 0,
                    begin: /\(/, end: /\)/, keywords: m, contains: [E, r, f, e.C_BLOCK_COMMENT_MODE, c, d, _]
                }, w = {
                    relevance: 0,
                    match: [/\b/, n.concat("(?!fn\\b|function\\b|", p(u).join("\\b|"), "|", p(b).join("\\b|"), "\\b)"), a, n.concat(l, "*"), n.lookahead(/(?=\()/)],
                    scope: { 3: "title.function.invoke" }, contains: [y]
                }; y.contains.push(w)
                    ; const N = [E, f, e.C_BLOCK_COMMENT_MODE, c, d, _]; return {
                        case_insensitive: !1,
                        keywords: m, contains: [{
                            begin: n.concat(/#\[\s*/, i), beginScope: "meta", end: /]/,
                            endScope: "meta", keywords: { literal: g, keyword: ["new", "array"] }, contains: [{
                                begin: /\[/, end: /]/, keywords: { literal: g, keyword: ["new", "array"] },
                                contains: ["self", ...N]
                            }, ...N, { scope: "meta", match: i }]
                        }, e.HASH_COMMENT_MODE, e.COMMENT("//", "$"), e.COMMENT("/\\*", "\\*/", {
                            contains: [{
                                scope: "doctag", match: "@[A-Za-z]+"
                            }]
                        }), {
                            match: /__halt_compiler\(\);/,
                            keywords: "__halt_compiler", starts: {
                                scope: "comment", end: e.MATCH_NOTHING_RE,
                                contains: [{ match: /\?>/, scope: "meta", endsParent: !0 }]
                            }
                        }, {
                            scope: "meta", variants: [{
                                begin: /<\?php/, relevance: 10
                            }, { begin: /<\?=/ }, { begin: /<\?/, relevance: .1 }, {
                                begin: /\?>/
                            }]
                        }, { scope: "variable.language", match: /\$this\b/ }, r, w, f, {
                            match: [/const/, /\s/, a], scope: { 1: "keyword", 3: "variable.constant" }
                        }, _, {
                            scope: "function", relevance: 0, beginKeywords: "fn function", end: /[;{]/,
                            excludeEnd: !0, illegal: "[$%\\[]", contains: [{
                                beginKeywords: "use"
                            }, e.UNDERSCORE_TITLE_MODE, { begin: "=>", endsParent: !0 }, {
                                scope: "params",
                                begin: "\\(", end: "\\)", excludeBegin: !0, excludeEnd: !0, keywords: m,
                                contains: ["self", r, f, e.C_BLOCK_COMMENT_MODE, c, d]
                            }]
                        }, {
                            scope: "class", variants: [{
                                beginKeywords: "enum", illegal: /[($"]/
                            }, {
                                beginKeywords: "class interface trait",
                                illegal: /[:($"]/
                            }], relevance: 0, end: /\{/, excludeEnd: !0, contains: [{
                                beginKeywords: "extends implements"
                            }, e.UNDERSCORE_TITLE_MODE]
                        }, {
                            beginKeywords: "namespace", relevance: 0, end: ";", illegal: /[.']/,
                            contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
                        }, {
                            beginKeywords: "use", relevance: 0, end: ";", contains: [{
                                match: /\b(as|const|function)\b/, scope: "keyword"
                            }, e.UNDERSCORE_TITLE_MODE]
                        }, c, d]
                    }
            }, grmr_php_template: e => ({
                name: "PHP template", subLanguage: "xml", contains: [{
                    begin: /<\?(php|=)?/, end: /\?>/, subLanguage: "php", contains: [{
                        begin: "/\\*",
                        end: "\\*/", skip: !0
                    }, { begin: 'b"', end: '"', skip: !0 }, {
                        begin: "b'", end: "'", skip: !0
                    }, e.inherit(e.APOS_STRING_MODE, {
                        illegal: null, className: null, contains: null,
                        skip: !0
                    }), e.inherit(e.QUOTE_STRING_MODE, {
                        illegal: null, className: null,
                        contains: null, skip: !0
                    })]
                }]
            }), grmr_plaintext: e => ({
                name: "Plain text",
                aliases: ["text", "txt"], disableAutodetect: !0
            }), grmr_python: e => {
                const n = e.regex, t = /[\p{XID_Start}_]\p{XID_Continue}*/u, a = ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"], i = {
                    $pattern: /[A-Za-z]\w+|__\w+__/, keyword: a,
                    built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
                    literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
                    type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
                }, r = { className: "meta", begin: /^(>>>|\.\.\.) / }, s = {
                    className: "subst", begin: /\{/,
                    end: /\}/, keywords: i, illegal: /#/
                }, o = { begin: /\{\{/, relevance: 0 }, l = {
                    className: "string", contains: [e.BACKSLASH_ESCAPE], variants: [{
                        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/, end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE, r], relevance: 10
                    }, {
                        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/, end: /"""/,
                        contains: [e.BACKSLASH_ESCAPE, r], relevance: 10
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])'''/, end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE, r, o, s]
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                        end: /"""/, contains: [e.BACKSLASH_ESCAPE, r, o, s]
                    }, {
                        begin: /([uU]|[rR])'/, end: /'/,
                        relevance: 10
                    }, { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 }, {
                        begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/
                    }, {
                        begin: /([bB]|[bB][rR]|[rR][bB])"/,
                        end: /"/
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/,
                        contains: [e.BACKSLASH_ESCAPE, o, s]
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, o, s]
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                }, c = "[0-9](_?[0-9])*", d = `(\\b(${c}))?\\.(${c})|\\b(${c})\\.`, g = "\\b|" + a.join("|"), u = {
                    className: "number", relevance: 0, variants: [{
                        begin: `(\\b(${c})|(${d}))[eE][+-]?(${c})[jJ]?(?=${g})`
                    }, { begin: `(${d})[jJ]?` }, {
                        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`
                    }, {
                        begin: `\\b0[bB](_?[01])+[lL]?(?=${g})`
                    }, {
                        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${g})`
                    }, { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})` }, {
                        begin: `\\b(${c})[jJ](?=${g})`
                    }]
                }, b = {
                    className: "comment", begin: n.lookahead(/# type:/), end: /$/, keywords: i,
                    contains: [{ begin: /# type:/ }, { begin: /#/, end: /\b\B/, endsWithParent: !0 }]
                }, m = {
                    className: "params", variants: [{ className: "", begin: /\(\s*\)/, skip: !0 }, {
                        begin: /\(/,
                        end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: i,
                        contains: ["self", r, u, l, e.HASH_COMMENT_MODE]
                    }]
                }; return s.contains = [l, u, r], {
                    name: "Python", aliases: ["py", "gyp", "ipython"], unicodeRegex: !0, keywords: i,
                    illegal: /(<\/|->|\?)|=>/, contains: [r, u, { begin: /\bself\b/ }, {
                        beginKeywords: "if",
                        relevance: 0
                    }, l, b, e.HASH_COMMENT_MODE, {
                            match: [/\bdef/, /\s+/, t], scope: {
                                1: "keyword", 3: "title.function"
                            }, contains: [m]
                        }, {
                            variants: [{
                                match: [/\bclass/, /\s+/, t, /\s*/, /\(\s*/, t, /\s*\)/]
                            }, { match: [/\bclass/, /\s+/, t] }],
                            scope: { 1: "keyword", 3: "title.class", 6: "title.class.inherited" }
                        }, {
                            className: "meta", begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [u, m, l]
                        }]
                }
            },
            grmr_python_repl: e => ({
                aliases: ["pycon"], contains: [{
                    className: "meta.prompt",
                    starts: { end: / |$/, starts: { end: "$", subLanguage: "python" } }, variants: [{
                        begin: /^>>>(?=[ ]|$)/
                    }, { begin: /^\.\.\.(?=[ ]|$)/ }]
                }]
            }), grmr_r: e => {
                const n = e.regex, t = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, a = n.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/, /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/, /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/), i = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, r = n.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/)
                    ; return {
                        name: "R", keywords: {
                            $pattern: t,
                            keyword: "function if in break next repeat else for while",
                            literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
                            built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
                        }, contains: [e.COMMENT(/#'/, /$/, {
                            contains: [{
                                scope: "doctag", match: /@examples/,
                                starts: {
                                    end: n.lookahead(n.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)),
                                    endsParent: !0
                                }
                            }, {
                                scope: "doctag", begin: "@param", end: /$/, contains: [{
                                    scope: "variable", variants: [{ match: t }, { match: /`(?:\\.|[^`\\])+`/ }], endsParent: !0
                                }]
                            }, { scope: "doctag", match: /@[a-zA-Z]+/ }, { scope: "keyword", match: /\\[a-zA-Z]+/ }]
                        }), e.HASH_COMMENT_MODE, {
                            scope: "string", contains: [e.BACKSLASH_ESCAPE],
                            variants: [e.END_SAME_AS_BEGIN({
                                begin: /[rR]"(-*)\(/, end: /\)(-*)"/
                            }), e.END_SAME_AS_BEGIN({
                                begin: /[rR]"(-*)\{/, end: /\}(-*)"/
                            }), e.END_SAME_AS_BEGIN({
                                begin: /[rR]"(-*)\[/, end: /\](-*)"/
                            }), e.END_SAME_AS_BEGIN({
                                begin: /[rR]'(-*)\(/, end: /\)(-*)'/
                            }), e.END_SAME_AS_BEGIN({
                                begin: /[rR]'(-*)\{/, end: /\}(-*)'/
                            }), e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }), {
                                begin: '"', end: '"',
                                relevance: 0
                            }, { begin: "'", end: "'", relevance: 0 }]
                        }, {
                            relevance: 0, variants: [{
                                scope: {
                                    1: "operator", 2: "number"
                                }, match: [i, a]
                            }, {
                                scope: { 1: "operator", 2: "number" },
                                match: [/%[^%]*%/, a]
                            }, { scope: { 1: "punctuation", 2: "number" }, match: [r, a] }, {
                                scope: {
                                    2: "number"
                                }, match: [/[^a-zA-Z0-9._]|^/, a]
                            }]
                        }, {
                            scope: { 3: "operator" },
                            match: [t, /\s+/, /<-/, /\s+/]
                        }, {
                            scope: "operator", relevance: 0, variants: [{ match: i }, {
                                match: /%[^%]*%/
                            }]
                        }, { scope: "punctuation", relevance: 0, match: r }, {
                            begin: "`", end: "`",
                            contains: [{ begin: /\\./ }]
                        }]
                    }
            }, grmr_ruby: e => {
                const n = e.regex, t = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", a = n.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/), i = n.concat(a, /(::\w+)*/), r = {
                    "variable.constant": ["__FILE__", "__LINE__"],
                    "variable.language": ["self", "super"],
                    keyword: ["alias", "and", "attr_accessor", "attr_reader", "attr_writer", "begin", "BEGIN", "break", "case", "class", "defined", "do", "else", "elsif", "end", "END", "ensure", "for", "if", "in", "include", "module", "next", "not", "or", "redo", "require", "rescue", "retry", "return", "then", "undef", "unless", "until", "when", "while", "yield"],
                    built_in: ["proc", "lambda"], literal: ["true", "false", "nil"]
                }, s = {
                    className: "doctag", begin: "@[A-Za-z]+"
                }, o = {
                    begin: "#<", end: ">"
                }, l = [e.COMMENT("#", "$", { contains: [s] }), e.COMMENT("^=begin", "^=end", {
                    contains: [s], relevance: 10
                }), e.COMMENT("^__END__", e.MATCH_NOTHING_RE)], c = {
                    className: "subst", begin: /#\{/, end: /\}/, keywords: r
                }, d = {
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE, c], variants: [{ begin: /'/, end: /'/ }, {
                        begin: /"/, end: /"/
                    }, { begin: /`/, end: /`/ }, { begin: /%[qQwWx]?\(/, end: /\)/ }, {
                        begin: /%[qQwWx]?\[/,
                        end: /\]/
                    }, { begin: /%[qQwWx]?\{/, end: /\}/ }, { begin: /%[qQwWx]?</, end: />/ }, {
                        begin: /%[qQwWx]?\//, end: /\//
                    }, { begin: /%[qQwWx]?%/, end: /%/ }, {
                        begin: /%[qQwWx]?-/,
                        end: /-/
                    }, { begin: /%[qQwWx]?\|/, end: /\|/ }, { begin: /\B\?(\\\d{1,3})/ }, {
                        begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
                    }, { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ }, {
                        begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
                    }, {
                        begin: /\B\?\\(c|C-)[\x20-\x7e]/
                    }, { begin: /\B\?\\?\S/ }, {
                        begin: n.concat(/<<[-~]?'?/, n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                        contains: [e.END_SAME_AS_BEGIN({
                            begin: /(\w+)/, end: /(\w+)/,
                            contains: [e.BACKSLASH_ESCAPE, c]
                        })]
                    }]
                }, g = "[0-9](_?[0-9])*", u = {
                    className: "number",
                    relevance: 0, variants: [{
                        begin: `\\b([1-9](_?[0-9])*|0)(\\.(${g}))?([eE][+-]?(${g})|r)?i?\\b`
                    }, {
                        begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
                    }, {
                        begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
                    }, { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" }, {
                        begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
                    }, {
                        begin: "\\b0(_?[0-7])+r?i?\\b"
                    }]
                }, b = {
                    variants: [{ match: /\(\)/ }, {
                        className: "params", begin: /\(/, end: /(?=\))/, excludeBegin: !0, endsParent: !0,
                        keywords: r
                    }]
                }, m = [d, {
                    variants: [{ match: [/class\s+/, i, /\s+<\s+/, i] }, {
                        match: [/class\s+/, i]
                    }], scope: { 2: "title.class", 4: "title.class.inherited" },
                    keywords: r
                }, { relevance: 0, match: [i, /\.new[ (]/], scope: { 1: "title.class" } }, {
                        relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: "variable.constant"
                    }, {
                        match: [/def/, /\s+/, t], scope: { 1: "keyword", 3: "title.function" }, contains: [b]
                    }, {
                        begin: e.IDENT_RE + "::"
                    }, {
                        className: "symbol",
                        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:", relevance: 0
                    }, {
                        className: "symbol",
                        begin: ":(?!\\s)", contains: [d, { begin: t }], relevance: 0
                    }, u, {
                        className: "variable",
                        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
                    }, {
                        className: "params", begin: /\|/, end: /\|/, excludeBegin: !0, excludeEnd: !0,
                        relevance: 0, keywords: r
                    }, {
                        begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                        keywords: "unless", contains: [{
                            className: "regexp", contains: [e.BACKSLASH_ESCAPE, c],
                            illegal: /\n/, variants: [{ begin: "/", end: "/[a-z]*" }, { begin: /%r\{/, end: /\}[a-z]*/ }, {
                                begin: "%r\\(", end: "\\)[a-z]*"
                            }, { begin: "%r!", end: "![a-z]*" }, {
                                begin: "%r\\[",
                                end: "\\][a-z]*"
                            }]
                        }].concat(o, l), relevance: 0
                    }].concat(o, l)
                    ; c.contains = m, b.contains = m; const p = [{
                        begin: /^\s*=>/, starts: { end: "$", contains: m }
                    }, {
                        className: "meta.prompt",
                        begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                        starts: { end: "$", keywords: r, contains: m }
                    }]; return l.unshift(o), {
                        name: "Ruby",
                        aliases: ["rb", "gemspec", "podspec", "thor", "irb"], keywords: r, illegal: /\/\*/,
                        contains: [e.SHEBANG({ binary: "ruby" })].concat(p).concat(l).concat(m)
                    }
            },
            grmr_rust: e => {
                const n = e.regex, t = {
                    className: "title.function.invoke", relevance: 0,
                    begin: n.concat(/\b/, /(?!let\b)/, e.IDENT_RE, n.lookahead(/\s*\(/))
                }, a = "([ui](8|16|32|64|128|size)|f(32|64))?", i = ["drop ", "Copy", "Send", "Sized", "Sync", "Drop", "Fn", "FnMut", "FnOnce", "ToOwned", "Clone", "Debug", "PartialEq", "PartialOrd", "Eq", "Ord", "AsRef", "AsMut", "Into", "From", "Default", "Iterator", "Extend", "IntoIterator", "DoubleEndedIterator", "ExactSizeIterator", "SliceConcatExt", "ToString", "assert!", "assert_eq!", "bitflags!", "bytes!", "cfg!", "col!", "concat!", "concat_idents!", "debug_assert!", "debug_assert_eq!", "env!", "panic!", "file!", "format!", "format_args!", "include_bytes!", "include_str!", "line!", "local_data_key!", "module_path!", "option_env!", "print!", "println!", "select!", "stringify!", "try!", "unimplemented!", "unreachable!", "vec!", "write!", "writeln!", "macro_rules!", "assert_ne!", "debug_assert_ne!"], r = ["i8", "i16", "i32", "i64", "i128", "isize", "u8", "u16", "u32", "u64", "u128", "usize", "f32", "f64", "str", "char", "bool", "Box", "Option", "Result", "String", "Vec"]
                    ; return {
                        name: "Rust", aliases: ["rs"], keywords: {
                            $pattern: e.IDENT_RE + "!?", type: r,
                            keyword: ["abstract", "as", "async", "await", "become", "box", "break", "const", "continue", "crate", "do", "dyn", "else", "enum", "extern", "false", "final", "fn", "for", "if", "impl", "in", "let", "loop", "macro", "match", "mod", "move", "mut", "override", "priv", "pub", "ref", "return", "self", "Self", "static", "struct", "super", "trait", "true", "try", "type", "typeof", "unsafe", "unsized", "use", "virtual", "where", "while", "yield"],
                            literal: ["true", "false", "Some", "None", "Ok", "Err"], built_in: i
                        }, illegal: "</",
                        contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
                            contains: ["self"]
                        }), e.inherit(e.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }), {
                            className: "string", variants: [{ begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ }, {
                                begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
                            }]
                        }, {
                            className: "symbol",
                            begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
                        }, {
                            className: "number", variants: [{
                                begin: "\\b0b([01_]+)" + a
                            }, { begin: "\\b0o([0-7_]+)" + a }, {
                                begin: "\\b0x([A-Fa-f0-9_]+)" + a
                            }, {
                                begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + a
                            }], relevance: 0
                        }, {
                            begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE], className: {
                                1: "keyword",
                                3: "title.function"
                            }
                        }, {
                            className: "meta", begin: "#!?\\[", end: "\\]", contains: [{
                                className: "string", begin: /"/, end: /"/
                            }]
                        }, {
                            begin: [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE], className: {
                                1: "keyword",
                                3: "keyword", 4: "variable"
                            }
                        }, {
                            begin: [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/], className: {
                                1: "keyword",
                                3: "variable", 5: "keyword"
                            }
                        }, {
                            begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE],
                            className: { 1: "keyword", 3: "title.class" }
                        }, {
                            begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, e.UNDERSCORE_IDENT_RE],
                            className: { 1: "keyword", 3: "title.class" }
                        }, {
                            begin: e.IDENT_RE + "::", keywords: {
                                keyword: "Self", built_in: i, type: r
                            }
                        }, { className: "punctuation", begin: "->" }, t]
                    }
            },
            grmr_scss: e => {
                const n = te(e), t = se, a = re, i = "@[a-z-]+", r = {
                    className: "variable",
                    begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b", relevance: 0
                }; return {
                    name: "SCSS",
                    case_insensitive: !0, illegal: "[=/|']",
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n.CSS_NUMBER_MODE, {
                        className: "selector-id", begin: "#[A-Za-z0-9_-]+", relevance: 0
                    }, {
                        className: "selector-class", begin: "\\.[A-Za-z0-9_-]+", relevance: 0
                    }, n.ATTRIBUTE_SELECTOR_MODE, {
                        className: "selector-tag",
                        begin: "\\b(" + ae.join("|") + ")\\b", relevance: 0
                    }, {
                        className: "selector-pseudo",
                        begin: ":(" + a.join("|") + ")"
                    }, {
                        className: "selector-pseudo",
                        begin: ":(:)?(" + t.join("|") + ")"
                    }, r, {
                        begin: /\(/, end: /\)/,
                        contains: [n.CSS_NUMBER_MODE]
                    }, n.CSS_VARIABLE, {
                        className: "attribute",
                        begin: "\\b(" + oe.join("|") + ")\\b"
                    }, {
                        begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
                    }, {
                        begin: /:/, end: /[;}{]/, relevance: 0,
                        contains: [n.BLOCK_COMMENT, r, n.HEXCOLOR, n.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, n.IMPORTANT, n.FUNCTION_DISPATCH]
                    }, { begin: "@(page|font-face)", keywords: { $pattern: i, keyword: "@page @font-face" } }, {
                        begin: "@", end: "[{;]", returnBegin: !0, keywords: {
                            $pattern: /[a-z-]+/,
                            keyword: "and or not only", attribute: ie.join(" ")
                        }, contains: [{
                            begin: i,
                            className: "keyword"
                        }, {
                            begin: /[a-z-]+(?=:)/, className: "attribute"
                        }, r, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, n.HEXCOLOR, n.CSS_NUMBER_MODE]
                    }, n.FUNCTION_DISPATCH]
                }
            }, grmr_shell: e => ({
                name: "Shell Session",
                aliases: ["console", "shellsession"], contains: [{
                    className: "meta.prompt",
                    begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/, starts: {
                        end: /[^\\](?=\s*$)/,
                        subLanguage: "bash"
                    }
                }]
            }), grmr_sql: e => {
                const n = e.regex, t = e.COMMENT("--", "$"), a = ["true", "false", "unknown"], i = ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"], r = ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"], s = ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"], o = r, l = ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view"].filter((e => !r.includes(e))), c = {
                    begin: n.concat(/\b/, n.either(...o), /\s*\(/), relevance: 0, keywords: { built_in: o }
                }
                    ; return {
                        name: "SQL", case_insensitive: !0, illegal: /[{}]|<\//, keywords: {
                            $pattern: /\b[\w\.]+/, keyword: ((e, { exceptions: n, when: t } = {}) => {
                                const a = t
                                    ; return n = n || [], e.map((e => e.match(/\|\d+$/) || n.includes(e) ? e : a(e) ? e + "|0" : e))
                            })(l, { when: e => e.length < 3 }), literal: a, type: i,
                            built_in: ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"]
                        }, contains: [{
                            begin: n.either(...s), relevance: 0, keywords: {
                                $pattern: /[\w\.]+/,
                                keyword: l.concat(s), literal: a, type: i
                            }
                        }, {
                            className: "type",
                            begin: n.either("double precision", "large object", "with timezone", "without timezone")
                        }, c, { className: "variable", begin: /@[a-z0-9]+/ }, {
                            className: "string", variants: [{
                                begin: /'/, end: /'/, contains: [{ begin: /''/ }]
                            }]
                        }, {
                            begin: /"/, end: /"/, contains: [{
                                begin: /""/
                            }]
                        }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, t, {
                            className: "operator",
                            begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/, relevance: 0
                        }]
                    }
            },
            grmr_swift: e => {
                const n = { match: /\s+/, relevance: 0 }, t = e.COMMENT("/\\*", "\\*/", {
                    contains: ["self"]
                }), a = [e.C_LINE_COMMENT_MODE, t], i = {
                    match: [/\./, p(...ve, ...Oe)],
                    className: { 2: "keyword" }
                }, r = {
                    match: m(/\./, p(...xe)), relevance: 0
                }, s = xe.filter((e => "string" == typeof e)).concat(["_|0"]), o = {
                    variants: [{
                        className: "keyword",
                        match: p(...xe.filter((e => "string" != typeof e)).concat(ke).map(Ne), ...Oe)
                    }]
                }, l = {
                    $pattern: p(/\b\w+/, /#\w+/), keyword: s.concat(Ae), literal: Me
                }, c = [i, r, o], d = [{
                    match: m(/\./, p(...Ce)), relevance: 0
                }, {
                    className: "built_in",
                    match: m(/\b/, p(...Ce), /(?=\()/)
                }], u = { match: /->/, relevance: 0 }, b = [u, {
                    className: "operator", relevance: 0, variants: [{ match: De }, { match: `\\.(\\.|${Re})+` }]
                }], _ = "([0-9a-fA-F]_*)+", h = {
                    className: "number", relevance: 0, variants: [{
                        match: "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"
                    }, {
                        match: `\\b0x(${_})(\\.(${_}))?([pP][+-]?(([0-9]_*)+))?\\b`
                    }, {
                        match: /\b0o([0-7]_*)+\b/
                    }, { match: /\b0b([01]_*)+\b/ }]
                }, f = (e = "") => ({
                    className: "subst", variants: [{ match: m(/\\/, e, /[0\\tnr"']/) }, {
                        match: m(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/)
                    }]
                }), E = (e = "") => ({
                    className: "subst",
                    match: m(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
                }), y = (e = "") => ({
                    className: "subst",
                    label: "interpol", begin: m(/\\/, e, /\(/), end: /\)/
                }), w = (e = "") => ({
                    begin: m(e, /"""/),
                    end: m(/"""/, e), contains: [f(e), E(e), y(e)]
                }), N = (e = "") => ({
                    begin: m(e, /"/),
                    end: m(/"/, e), contains: [f(e), y(e)]
                }), v = {
                    className: "string",
                    variants: [w(), w("#"), w("##"), w("###"), N(), N("#"), N("##"), N("###")]
                }, O = {
                    match: m(/`/, Be, /`/)
                }, k = [O, { className: "variable", match: /\$\d+/ }, {
                    className: "variable", match: `\\$${Le}+`
                }], x = [{
                    match: /(@|#(un)?)available/,
                    className: "keyword", starts: {
                        contains: [{
                            begin: /\(/, end: /\)/, keywords: Fe,
                            contains: [...b, h, v]
                        }]
                    }
                }, { className: "keyword", match: m(/@/, p(...ze)) }, {
                    className: "meta", match: m(/@/, Be)
                }], M = {
                    match: g(/\b[A-Z]/), relevance: 0, contains: [{
                        className: "type",
                        match: m(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, Le, "+")
                    }, { className: "type", match: $e, relevance: 0 }, { match: /[?!]+/, relevance: 0 }, {
                        match: /\.\.\./, relevance: 0
                    }, { match: m(/\s+&\s+/, g($e)), relevance: 0 }]
                }, S = {
                    begin: /</, end: />/, keywords: l, contains: [...a, ...c, ...x, u, M]
                }; M.contains.push(S)
                    ; const A = {
                        begin: /\(/, end: /\)/, relevance: 0, keywords: l, contains: ["self", {
                            match: m(Be, /\s*:/), keywords: "_|0", relevance: 0
                        }, ...a, ...c, ...d, ...b, h, v, ...k, ...x, M]
                    }, C = {
                        begin: /</, end: />/, contains: [...a, M]
                    }, T = {
                        begin: /\(/, end: /\)/, keywords: l, contains: [{
                            begin: p(g(m(Be, /\s*:/)), g(m(Be, /\s+/, Be, /\s*:/))), end: /:/, relevance: 0,
                            contains: [{ className: "keyword", match: /\b_\b/ }, { className: "params", match: Be }]
                        }, ...a, ...c, ...b, h, v, ...x, M, A], endsParent: !0, illegal: /["']/
                    }, R = {
                        match: [/func/, /\s+/, p(O.match, Be, De)], className: {
                            1: "keyword", 3: "title.function"
                        }, contains: [C, T, n], illegal: [/\[/, /%/]
                    }, D = {
                        match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/], className: { 1: "keyword" },
                        contains: [C, T, n], illegal: /\[|%/
                    }, I = {
                        match: [/operator/, /\s+/, De], className: {
                            1: "keyword", 3: "title"
                        }
                    }, L = {
                        begin: [/precedencegroup/, /\s+/, $e], className: {
                            1: "keyword", 3: "title"
                        }, contains: [M], keywords: [...Se, ...Me], end: /}/
                    }
                    ; for (const e of v.variants) {
                        const n = e.contains.find((e => "interpol" === e.label))
                            ; n.keywords = l; const t = [...c, ...d, ...b, h, v, ...k]; n.contains = [...t, {
                                begin: /\(/,
                                end: /\)/, contains: ["self", ...t]
                            }]
                    } return {
                        name: "Swift", keywords: l,
                        contains: [...a, R, D, {
                            beginKeywords: "struct protocol class extension enum actor",
                            end: "\\{", excludeEnd: !0, keywords: l, contains: [e.inherit(e.TITLE_MODE, {
                                className: "title.class", begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                            }), ...c]
                        }, I, L, {
                            beginKeywords: "import", end: /$/, contains: [...a], relevance: 0
                        }, ...c, ...d, ...b, h, v, ...k, ...x, M, A]
                    }
            }, grmr_typescript: e => {
                const n = we(e), t = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"], a = {
                    beginKeywords: "namespace", end: /\{/, excludeEnd: !0,
                    contains: [n.exports.CLASS_REFERENCE]
                }, i = {
                    beginKeywords: "interface", end: /\{/,
                    excludeEnd: !0, keywords: { keyword: "interface extends", built_in: t },
                    contains: [n.exports.CLASS_REFERENCE]
                }, r = {
                    $pattern: be,
                    keyword: me.concat(["type", "namespace", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override"]),
                    literal: pe, built_in: ye.concat(t), "variable.language": Ee
                }, s = {
                    className: "meta",
                    begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
                }, o = (e, n, t) => {
                    const a = e.contains.findIndex((e => e.label === n))
                        ; if (-1 === a) throw Error("can not find mode to replace"); e.contains.splice(a, 1, t)
                }
                    ; return Object.assign(n.keywords, r),
                        n.exports.PARAMS_CONTAINS.push(s), n.contains = n.contains.concat([s, a, i]),
                        o(n, "shebang", e.SHEBANG()), o(n, "use_strict", {
                            className: "meta", relevance: 10,
                            begin: /^\s*['"]use strict['"]/
                        }), n.contains.find((e => "func.def" === e.label)).relevance = 0, Object.assign(n, {
                            name: "TypeScript", aliases: ["ts", "tsx"]
                        }), n
            }, grmr_vbnet: e => {
                const n = e.regex, t = /\d{1,2}\/\d{1,2}\/\d{4}/, a = /\d{4}-\d{1,2}-\d{1,2}/, i = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, r = /\d{1,2}(:\d{1,2}){1,2}/, s = {
                    className: "literal", variants: [{ begin: n.concat(/# */, n.either(a, t), / *#/) }, {
                        begin: n.concat(/# */, r, / *#/)
                    }, { begin: n.concat(/# */, i, / *#/) }, {
                        begin: n.concat(/# */, n.either(a, t), / +/, n.either(i, r), / *#/)
                    }]
                }, o = e.COMMENT(/'''/, /$/, {
                    contains: [{ className: "doctag", begin: /<\/?/, end: />/ }]
                }), l = e.COMMENT(null, /$/, { variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }] })
                    ; return {
                        name: "Visual Basic .NET", aliases: ["vb"], case_insensitive: !0,
                        classNameAliases: { label: "symbol" }, keywords: {
                            keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
                            built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
                            type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
                            literal: "true false nothing"
                        },
                        illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ", contains: [{
                            className: "string", begin: /"(""|[^/n])"C\b/
                        }, {
                            className: "string", begin: /"/,
                            end: /"/, illegal: /\n/, contains: [{ begin: /""/ }]
                        }, s, {
                            className: "number", relevance: 0,
                            variants: [{
                                begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
                            }, { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ }, { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ }, {
                                begin: /&O[0-7_]+((U?[SIL])|[%&])?/
                            }, { begin: /&B[01_]+((U?[SIL])|[%&])?/ }]
                        }, {
                            className: "label", begin: /^\w+:/
                        }, o, l, {
                            className: "meta",
                            begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
                            end: /$/, keywords: {
                                keyword: "const disable else elseif enable end externalsource if region then"
                            },
                            contains: [l]
                        }]
                    }
            }, grmr_wasm: e => {
                e.regex; const n = e.COMMENT(/\(;/, /;\)/)
                    ; return n.contains.push("self"), {
                        name: "WebAssembly", keywords: {
                            $pattern: /[\w.]+/,
                            keyword: ["anyfunc", "block", "br", "br_if", "br_table", "call", "call_indirect", "data", "drop", "elem", "else", "end", "export", "func", "global.get", "global.set", "local.get", "local.set", "local.tee", "get_global", "get_local", "global", "if", "import", "local", "loop", "memory", "memory.grow", "memory.size", "module", "mut", "nop", "offset", "param", "result", "return", "select", "set_global", "set_local", "start", "table", "tee_local", "then", "type", "unreachable"]
                        }, contains: [e.COMMENT(/;;/, /$/), n, {
                            match: [/(?:offset|align)/, /\s*/, /=/],
                            className: { 1: "keyword", 3: "operator" }
                        }, { className: "variable", begin: /\$[\w_]+/ }, {
                            match: /(\((?!;)|\))+/, className: "punctuation", relevance: 0
                        }, {
                            begin: [/(?:func|call|call_indirect)/, /\s+/, /\$[^\s)]+/], className: {
                                1: "keyword",
                                3: "title.function"
                            }
                        }, e.QUOTE_STRING_MODE, {
                            match: /(i32|i64|f32|f64)(?!\.)/,
                            className: "type"
                        }, {
                            className: "keyword",
                            match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
                        }, {
                            className: "number", relevance: 0,
                            match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
                        }]
                    }
            }, grmr_yaml: e => {
                const n = "true false yes no null", t = "[\\w#;/?:@&=+$,.~*'()[\\]]+", a = {
                    className: "string", relevance: 0, variants: [{ begin: /'/, end: /'/ }, {
                        begin: /"/, end: /"/
                    }, { begin: /\S+/ }], contains: [e.BACKSLASH_ESCAPE, {
                        className: "template-variable",
                        variants: [{ begin: /\{\{/, end: /\}\}/ }, { begin: /%\{/, end: /\}/ }]
                    }]
                }, i = e.inherit(a, {
                    variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /[^\s,{}[\]]+/ }]
                }), r = {
                    end: ",", endsWithParent: !0, excludeEnd: !0, keywords: n, relevance: 0
                }, s = {
                    begin: /\{/,
                    end: /\}/, contains: [r], illegal: "\\n", relevance: 0
                }, o = {
                    begin: "\\[", end: "\\]",
                    contains: [r], illegal: "\\n", relevance: 0
                }, l = [{
                    className: "attr", variants: [{
                        begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)"
                    }, { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' }, {
                        begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
                    }]
                }, {
                    className: "meta", begin: "^---\\s*$",
                    relevance: 10
                }, {
                    className: "string",
                    begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
                }, {
                    begin: "<%[%=-]?", end: "[%-]?%>", subLanguage: "ruby", excludeBegin: !0, excludeEnd: !0,
                    relevance: 0
                }, { className: "type", begin: "!\\w+!" + t }, {
                    className: "type",
                    begin: "!<" + t + ">"
                }, { className: "type", begin: "!" + t }, {
                    className: "type", begin: "!!" + t
                }, { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" }, {
                    className: "meta",
                    begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
                }, {
                    className: "bullet", begin: "-(?=[ ]|$)",
                    relevance: 0
                }, e.HASH_COMMENT_MODE, { beginKeywords: n, keywords: { literal: n } }, {
                    className: "number",
                    begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
                }, { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 }, s, o, a], c = [...l]
                    ; return c.pop(), c.push(i), r.contains = c, {
                        name: "YAML", case_insensitive: !0,
                        aliases: ["yml"], contains: l
                    }
            }
        }); const je = ne; for (const e of Object.keys(Ue)) {
            const n = e.replace("grmr_", "").replace("_", "-"); je.registerLanguage(n, Ue[e])
        }
    return je
}()
    ; "object" == typeof exports && "undefined" != typeof module && (module.exports = hljs);

/*! `json` grammar compiled for Highlight.js 11.6.0 */
(() => {
    var e = (() => {
        "use strict"; return e => {
            const a = ["true", "false", "null"], n = {
                scope: "literal", beginKeywords: a.join(" ")
            }; return {
                name: "JSON", keywords: {
                    literal: a
                }, contains: [{
                    className: "attr", begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
                    relevance: 1.01
                }, {
                    match: /[{}[\],:]/, className: "punctuation", relevance: 0
                }, e.QUOTE_STRING_MODE, n, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                illegal: "\\S"
            }
        }
    })(); hljs.registerLanguage("json", e)
})();

hljs.highlightAll();


const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim().split('=');
        if (c[0] === name) {
            return c[1];
        }
    }
    return "";
}

const setCookie = (name, value, days, path, domain, secure) => {
    let cookie = `${name}=${encodeURIComponent(value)}`;

    // Add expiry date
    if (days) {
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + days);
        cookie += `; expires=${expiry.toUTCString()}`;
    }

    // Add Path, Domain, and Secure
    if (path) cookie += `; path=${path}`;
    if (domain) cookie += `; domain=${domain}`;
    if (secure) cookie += `; secure`;

    // Set an HTTP cookie
    document.cookie = cookie;
};

var hasLogin = getCookie('login');

if (window.location.origin.indexOf('file') !== -1) {
    document.body.classList.add("access-guaranted");
} else {
    if (hasLogin.length == 0) {
        var sign = prompt("Access password:");
        if (loginSuccess(sign)) {
            document.body.classList.add("access-guaranted");
            setCookie('login', 'true', 1);
        } else {
            document.body.remove();
            setCookie('login', '', 1);
        }
    } else {
        document.body.classList.add("access-guaranted");
    }
}

function loginSuccess(b) {
    // var _0xe2d3=["\x45\x6E\x73\x61\x69\x6D\x61\x64\x61\x49\x67\x75\x61\x6C\x61\x64\x61"];var a=_0xe2d3[0]
    // return b && b === a;
    return true;
}

$(window).on('load resize', function () {
    //Add/remove class based on browser size when load/resize
    var w = $(window).width();

    if (w >= 1200) {
        // if larger 
        $('#docs-sidebar').addClass('sidebar-visible').removeClass('sidebar-hidden');
    } else {
        // if smaller
        $('#docs-sidebar').addClass('sidebar-hidden').removeClass('sidebar-visible');
    }
});

$(document).ready(function () {
    /* ====== Toggle Sidebar ======= */
    $('#docs-sidebar-toggler').on('click', function () {
        if ($('#docs-sidebar').hasClass('sidebar-visible')) {
            $("#docs-sidebar").removeClass('sidebar-visible').addClass('sidebar-hidden');
        } else {
            $("#docs-sidebar").removeClass('sidebar-hidden').addClass('sidebar-visible');
        }
    });

    /* ===== Smooth scrolling ====== */
    $(document).on('click', 'a[href^="#"]:not(.expand)', function (e) {
        //store hash
        var target = this.hash;

        if (!$(this).is('.anchorjs-link')) {
            // e.preventDefault();
        }

        $('body').scrollTo(target, 250, { offset: -69, 'axis': 'y' });

        // Collapse sidebar after clicking
        if ($('#docs-sidebar').hasClass('sidebar-visible') && $(window).width() < 1200) {
            $('#docs-sidebar').removeClass('sidebar-visible').addClass('slidebar-hidden');
        }
    });

    /* wmooth scrolling on page load if URL has a hash */
    if (window.location.hash) {
        var urlhash = window.location.hash;
        $('body').scrollTo(urlhash, 0, { offset: -69, 'axis': 'y' });
    }

    $('code.split').not('.split2dots').html(function () {
        return '<span>' + $(this).html().split('___').join('</span>___<span>') + '</span>';
    });
    $('code.split2dots').html(function () {
        var split = $(this).html().split(',');
        for (let i = 0; i < split.length; i++) {
            var split2 = '<span class="sub">' + split[i].split(':').join('</span>:<span class="sub">') + '</span>';
            split[i] = '<span class="el">' + split2 + '</span>';
        }
        return split.join(',');
    });

    $('h1.docs-heading, h2.section-heading, h3.section-heading').append(function () {
        var id = $(this).closest('.docs-section, .docs-article').attr('id');
        return '<a class="anchorjs-link" aria-label="Anchor" href="#' + id + '" style="padding-left: 0.375em;">#</a>';
    });

    var search_list = [];
    $('h1.docs-heading, h2.section-heading, h3.section-heading').not('.hide-search').each(function (index, el) {
        var id = $(this).closest('.docs-section, .docs-article').attr('id');
        var docsTime = '';

        if ($(this).find('.docs-time').length) {
            docsTime = $(this).find('.docs-time').text();
        }

        search_list.push({
            "text": $(this).text().replace('#', '').replace('opcional', ''),
            "id": id,
            "docsTime": docsTime,
        });
    });
    const options = {
        includeScore: false,
        keys: ['text'],
        minMatchCharLength: 2,
        threshold: 0.5,
    };
    const fuse = new Fuse(search_list, options);

    $('[name="search"]').on('input', function (event) {
        const result = fuse.search($(this).val());
        var list = '';
        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            list += '<a href="#' + element.item.id + '">' + element.item.text.replace(element.item.docsTime, `<span>${element.item.docsTime}</span>`) + '</a>';
        }
        $(this).next('#results').html(list);
    });

    var Lversion = $('#changelogModal .modal-body h6').first().find('span').text().replace('Versión', '').replace('Version', '');;
    $('.site-logo .bg-primary').text('v' + Lversion);

    $('#changelogModal .modal-body ul a').click(function (event) {
        $('#changelogModal').modal('hide');
    });

    $('.modal').on('shown.bs.modal', function () {
        $(this).find('[autofocus]').focus();
    });

    setTimeout(() => {
        var el = $('.docs-nav .nav-link.active').first();
        if (el.length) {
            var elOffset = el.position().top;
            var elHeight = el.height();
            var windowHeight = $(window).height();
            var offset = 0;

            if (elHeight < windowHeight) {
                offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
            }
            else {
                offset = elOffset;
            }
            $('#docs-sidebar').animate({ scrollTop: offset }, 0);
        }
    }, 250);
});

window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('input', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);
