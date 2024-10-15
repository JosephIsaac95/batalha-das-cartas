function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_appComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet></router-outlet>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/battle-animation/battle-animation.component.html": (
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/battle-animation/battle-animation.component.html ***!
    \*******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_battleAnimation_battleAnimationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"battle-field\">\n    <div class=\"field-left\">\n        <div class=\"card\" [ngStyle]=\"{'background': gradientAttacker}\">\n            <div>\n                <img  class=\"card-img\" [src]=\"attacker.personagem.url\" alt=\"Ninja Azul\">\n                <p class=\"title\">{{attacker.personagem.name}}</p>\n            </div>\n            <div>\n                <div class=\"atk\">\n                    <img class=\"icon\" src=\"assets/icons/sword.png\">\n                    <p class=\"text\">{{attacker.atk}}</p>\n                </div>\n                <div class=\"hearth\">\n                    <img class=\"icon\" src=\"assets/icons/hearth.png\">\n                    <p class=\"text\">{{attacker.health}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"field-right\">\n        <div class=\"card\" [ngStyle]=\"{'background': gradientDefenser}\">\n            <div>\n                <img  class=\"card-img\" [src]=\"defenser.personagem.url\" alt=\"Ninja Azul\">\n                <p class=\"title\">{{defenser.personagem.name}}</p>\n            </div>\n            <div>\n                <div class=\"atk\">\n                    <img class=\"icon\" src=\"assets/icons/sword.png\">\n                    <p class=\"text\">{{defenser.atk}}</p>\n                </div>\n                <div class=\"hearth\">\n                    <img class=\"icon\" src=\"assets/icons/hearth.png\">\n                    <p class=\"text\">{{defenser.health}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_card_cardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"modal\"  [ngClass]=\"{'attacked': attackAnimation}\">\n    <div class=\"card\" [ngStyle]=\"{'background': gradient}\" class=\"card\" [ngClass]=\"{'card-selected':selected}\">\n        <div>\n            <img  class=\"card-img\" [src]=\"character.personagem.url\" alt=\"Ninja Azul\">\n            <p class=\"title\">{{character.personagem.name}}</p>\n        </div>\n        <div *ngIf=\"!defending\" class=\"skills\">\n            <div *ngFor=\"let skill of character.personagem.skillsAtk\">\n                <span class=\"skill-text-container\">\n                    <b class=\"skill-number\">{{skill.title}}</b>\n                    <p class=\"skill-text\">{{skill.text}}</p>\n                </span>\n            </div>\n        </div>\n        <div *ngIf=\"defending\" class=\"skills\">        \n            <div  *ngFor=\"let skill of character.personagem.skillsDefense\">\n                <span class=\"skill-text-container\">\n                    <b class=\"skill-number\">{{skill.title}}</b>\n                    <p class=\"skill-text\">{{skill.text}}</p>\n                </span>\n            </div>\n        </div>\n        <div class=\"card-info\">\n            <div class=\"atk\">\n                <img class=\"icon\" src=\"assets/icons/sword.png\">\n                <p class=\"text\">{{character.atk}}</p>\n            </div>\n            <div class=\"hearth\">\n                <img class=\"icon\" src=\"assets/icons/hearth.png\">\n                <p class=\"text\">{{character.health}}</p>\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/dice/dice.component.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dice/dice.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_dice_diceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<!-- Dado do Jogador -->\n<div class=\"dice-container\">\n    <div class=\"ally-dice-area\">\n        <div class=\"scene-ally\">\n            <div class=\"cube\" [ngStyle]=\"{'transform': 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'}\">\n                <div class=\"cube-face cube-face-ally front\">\n                    <div class=\"dot dot0\"></div>\n                </div>\n                <div class=\"cube-face cube-face-ally back\">\n                    <div class=\"dot dot1\"></div>\n                    <div class=\"dot dot2\"></div>\n                    <div class=\"dot dot3\"></div>\n                    <div class=\"dot dot4\"></div>\n                    <div class=\"dot dot5\"></div>\n                    <div class=\"dot dot6\"></div>\n                </div>\n                <div class=\"cube-face cube-face-ally right\">\n                    <div class=\"dot dot0\"></div>\n                    <div class=\"dot dot1\"></div>\n                    <div class=\"dot dot6\"></div>\n                </div>\n                <div class=\"cube-face cube-face-ally left\">\n                    <div class=\"dot dot0\"></div>\n                    <div class=\"dot dot1\"></div>\n                    <div class=\"dot dot2\"></div>\n                    <div class=\"dot dot5\"></div>\n                    <div class=\"dot dot6\"></div>\n                </div>\n                <div class=\"cube-face cube-face-ally top\">\n                    <div class=\"dot dot1\"></div>\n                    <div class=\"dot dot2\"></div>\n                    <div class=\"dot dot5\"></div>\n                    <div class=\"dot dot6\"></div>\n                </div>\n                <div class=\"cube-face cube-face-ally bottom\">\n                    <div class=\"dot dot1\"></div>\n                    <div class=\"dot dot6\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-over/game-over.component.html": (
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-over/game-over.component.html ***!
    \*****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_gameOver_gameOverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<!-- game-over-modal.component.html -->\n<div class=\"modal-overlay\">\n    <div class=\"modal-content\">\n      <h2 [ngClass]=\"{'title-victory': resultMessage.toLowerCase().includes('vit'), 'title-lose': resultMessage.toLowerCase().includes('der')}\">{{ resultMessage }}</h2>\n      <p>Noso jogo está em desenvolvimento. Acompanhe nossas redes sociais para saber mais:</p>\n      \n      <div class=\"social-buttons\">\n        <a href=\"https://www.tiktok.com\" target=\"_blank\" class=\"social-button\">\n          <img src=\"assets/logos/tiktok-logo.png\" alt=\"TikTok\">\n        </a>\n        <a href=\"https://www.youtube.com\" target=\"_blank\" class=\"social-button\">\n          <img src=\"assets/logos/youtube-logo.png\" alt=\"YouTube\">\n        </a>\n        <a href=\"https://www.instagram.com\" target=\"_blank\" class=\"social-button\">\n          <img src=\"assets/logos/instagram-logo.png\" alt=\"Instagram\">\n        </a>\n      </div>\n  \n      <button (click)=\"closeModal()\">Fechar</button>\n    </div>\n  </div>\n  ";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html": (
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_messages_messagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"background\">\n    <div class=\"message-container\">\n        <p class=\"message\">{{msg}}</p>\n    </div>\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/mini-card/mini-card.component.html": (
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mini-card/mini-card.component.html ***!
    \*****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_miniCard_miniCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div *ngIf=\"character.health === 0\" class=\"dead\"></div>\n<button \n    *ngIf=\"character.health !== 0\"\n    (click)=\"click()\" \n    [ngStyle]=\"character.health !== 0 ? {'background': gradient} : {}\" \n    class=\"card\" \n    [ngClass]=\"{\n        'card-selected': selected && ally,\n        'no-hover': (!battle && !ally) || opponentTurn,\n        'inimigo-selecionavel': !ally && battle,\n        'card-fire': character.habAtiva === 6\n    }\"\n>\n    <div class=\"container-select-options\" *ngIf=\"selected\">\n        <button class=\"btn\" (click)=\"optionSelected('atk')\" [ngClass]=\"{'no-action': character.jaAtacou, 'btn-atk': !character.jaAtacou}\">\n            <p class=\"text-btn\">Atacar!</p>\n        </button>\n        <button class=\"btn\" (click)=\"optionSelected('dice')\" [ngClass]=\"{'no-action': character.jaRolouDado, 'btn-dice': !character.jaRolouDado}\">\n            <p class=\"text-btn\">Girar Dado</p>\n        </button>\n        <button class=\"btn btn-details\" (click)=\"optionSelected('details')\">\n            <p class=\"text-btn\">Detalhes</p>\n        </button>\n    </div>\n    <div class=\"dice-container\" *ngIf=\" character.habAtiva !== 0\">\n        <div class=\"dice\" [ngClass]=\"{'dice-green': character.habAtiva > 2, 'dice-red': character.habAtiva < 3}\">\n            <p>{{character.habAtiva}}</p>\n        </div>\n    </div>\n    <div>\n        <img  class=\"card-img\" [src]=\"character.personagem.url\" alt=\"Ninja Azul\">\n        <p class=\"title\">{{character.personagem.name}}</p>\n    </div>\n    <div>\n        <div class=\"atk\">\n            <img class=\"icon\" src=\"assets/icons/sword.png\">\n            <p class=\"text\">{{character.atk}}</p>\n        </div>\n        <div class=\"hearth\">\n            <img class=\"icon\" src=\"assets/icons/hearth.png\">\n            <p class=\"text\">{{character.health}}</p>\n        </div>\n    </div>\n</button>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/screens/battle/battle.component.html": (
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/battle/battle.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_screens_battle_battleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"background-image-div\">\r\n    <!-- Campo de Batalha -->\r\n    <!-- Oponente -->\r\n    <div class=\"space-opponent-cards\">\r\n        <div class=\"space-card\" *ngFor=\"let card of acctions.opponent\">\r\n            <mini-card \r\n                [character]=\"card\"\r\n                (characterDetails)=\"showDetails($event)\"\r\n                (rollDice)=\"rollDice($event)\"\r\n                [ally]=\"false\"\r\n                [battle]=\"battle\"\r\n                (foiAtacado)=\"foiAtacado($event)\"\r\n            ></mini-card>\r\n        </div>\r\n    </div>\r\n    <!-- Aliado -->\r\n    <div class=\"space-ally-cards\">\r\n        <div class=\"space-card\" *ngFor=\"let card of acctions.ally\">\r\n            <mini-card \r\n                [character]=\"card\"\r\n                (characterDetails)=\"showDetails($event)\"\r\n                (rollDice)=\"rollDice($event)\"\r\n                [ally]=\"true\"\r\n                (attack)=\"quemAtacou($event)\"\r\n                [battle]=\"battle\"\r\n                [opponentTurn]=\"turnoOponente\"\r\n            ></mini-card>\r\n        </div>\r\n    </div>\r\n    <!-- Mensagens em cima na esquerda -->\r\n    <div class=\"container-info\">\r\n        <div class=\"info\">\r\n            <p>{{acctions.turn}}</p>\r\n        </div>\r\n    </div>\r\n    <!-- Mensagens em baixo na esquerda -->\r\n    <button *ngIf=\"recolherAtos\" class=\"recolherAtos\" (click)=\"hadnleRecolherAtos()\">\r\n        <p>AÇÕES</p>\r\n    </button>\r\n    <div class=\"fases\" *ngIf=\"!turnoOponente && !recolherAtos\">\r\n        <button class=\"closeActs\" (click)=\"hadnleRecolherAtos()\">\r\n            <p>X</p>\r\n        </button>\r\n        <button class=\"btn-fases btn-itens btn-ativo-itens\" (click)=\"onAcction(1)\">\r\n            <p class=\"my-turn-text txt-itens\">Você pode<br/>GIRAR OS DADOS!</p>\r\n        </button>\r\n        <button class=\"btn-fases btn-batalha btn-ativo-batalha\" (click)=\"onAcction(2)\">\r\n            <p class=\"my-turn-text txt-batalha\">Você pode <br/>BATALHAR!</p>\r\n        </button>\r\n        <button class=\"btn-fases btn-fim\" (click)=\"onAcction(3)\" [ngClass]=\"{'btn-ativo-fim': acction === 3}\">\r\n            <p class=\"my-turn-text txt-fim\">Finalize sua jogada</p> \r\n        </button>\r\n    </div>\r\n    <div class=\"fases\" *ngIf=\"turnoOponente\">\r\n        <button class=\"btn-fases btn-batalha btn-ativo-batalha no-hover\">\r\n            <p class=\"my-turn-text txt-batalha\">Vez do Oponente</p>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<!-- Card detalhado -->\r\n<card-detail *ngIf=\"showCard\" [character]=\"characterDetail\" (closeDetails)=\"closeDetails()\" [attackAnimation]=\"attackAnimation\"></card-detail>\r\n\r\n<!-- Mensagens de batalha-->\r\n<messages-battle *ngIf=\"showMsg\" [msg]=\"msg\" (closeModal)=\"closeMsg()\"></messages-battle>\r\n\r\n<dice *ngIf=\"showDice\" (close)=\"closeDiceModal($event)\"></dice>\r\n\r\n<game-over *ngIf=\"showGameOverModal\" [resultMessage]=\"finalResult\"  (close)=\"closeGameOver()\"></game-over>\r\n\r\n<!--battle-animation *ngIf=\"showBattleField\" [attacker]=\"cardQueAtacou\" [defenser]=\"cardQueFoiAtacado\"></battle-animation-->";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/screens/home/home.component.html": (
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/home/home.component.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_screens_home_homeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"background-image-div\">\n  <p class=\"title\">Escolha uma equipe e comece a jogar</p>\n  <div class=\"select-team\">\n    <div>\n      <button\n        class=\"team team-left\"\n        [ngClass]=\"{'selected': selectedButtonIndex === 0}\"\n        (click)=\"selectedButtonIndex === 0? selectButton(-1) : selectButton(0)\"\n        >\n        <div class=\"container-rosa\">\n          <img class=\"ninja-rosa character\" src=\"assets/sem-fundo/ninja-rosa.png\" alt=\"Ninja Rosa\">\n        </div>\n        <div class=\"container-azul\">\n          <img class=\"ninja-azul character\" src=\"assets/sem-fundo/ninja-azul.png\" alt=\"Ninja Azul\">\n        </div>\n        <div class=\"container-laranja\">\n          <img class=\"ninja-laranja character\" src=\"assets/sem-fundo/ninja-laranja.png\" alt=\"Ninja Laranja\">\n        </div>\n      </button>\n      <p class=\"team-text\">Equipe 1</p>\n    </div>\n\n    <div>\n      <button \n        class=\"team team-right\"\n        [ngClass]=\"{'selected': selectedButtonIndex === 1}\"\n        (click)=\"selectedButtonIndex === 1? selectButton(-1) : selectButton(1)\"\n        >\n        <div class=\"container-verde\">\n          <img class=\"ninja-verde character\" src=\"assets/sem-fundo/ninja-verde.png\" alt=\"Ninja Verde\">\n        </div>\n        <div class=\"container-branco\">\n          <img class=\"ninja-branco character\" src=\"assets/sem-fundo/ninja-branco.png\" alt=\"Ninja Branco\">\n        </div>\n        <div class=\"container-roxa\">\n          <img class=\"ninja-roxa character\" src=\"assets/sem-fundo/ninja-roxa.png\" alt=\"Ninja Roxa\">\n        </div>\n      </button>\n      <p class=\"team-text\">Equipe 2</p>\n    </div>\n  </div>\n  <div class=\"container-play\">\n    <button \n      class=\"button\" \n      [ngClass]=\"{'button-disable': selectedButtonIndex === -1}\"\n      (click)=\"goToBattle()\"\n    >\n      <p>JOGAR</p>\n    </button>\n  </div>\n  </div>\n\n  <audio autoplay loop>\n    <source src=\"assets/sounds/home.mp3\" type=\"audio/mp3\">\n  </audio>\n  \n  <div class=\"loader-container\" *ngIf=\"load\">\n    <div class=\"loader\"></div>\n  </div>";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function _node_modules_tslib_tslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/home/home.component */"./src/app/screens/home/home.component.ts");
    /* harmony import */
    var _screens_battle_battle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/battle/battle.component */"./src/app/screens/battle/battle.component.ts");
    var routes = [{
      path: '',
      component: _screens_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'battle/:team',
      component: _screens_battle_battle_component__WEBPACK_IMPORTED_MODULE_4__["BattleComponent"]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.css": (
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function _src_app_appComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'batalha-das-cartas';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/home/home.component */"./src/app/screens/home/home.component.ts");
    /* harmony import */
    var _screens_battle_battle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/battle/battle.component */"./src/app/screens/battle/battle.component.ts");
    /* harmony import */
    var _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/card/card.component */"./src/app/components/card/card.component.ts");
    /* harmony import */
    var _components_mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mini-card/mini-card.component */"./src/app/components/mini-card/mini-card.component.ts");
    /* harmony import */
    var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/messages/messages.component */"./src/app/components/messages/messages.component.ts");
    /* harmony import */
    var _components_dice_dice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dice/dice.component */"./src/app/components/dice/dice.component.ts");
    /* harmony import */
    var _components_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/game-over/game-over.component */"./src/app/components/game-over/game-over.component.ts");
    /* harmony import */
    var _components_battle_animation_battle_animation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/battle-animation/battle-animation.component */"./src/app/components/battle-animation/battle-animation.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _screens_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _screens_battle_battle_component__WEBPACK_IMPORTED_MODULE_6__["BattleComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _components_mini_card_mini_card_component__WEBPACK_IMPORTED_MODULE_8__["MiniCardComponent"], _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"], _components_dice_dice_component__WEBPACK_IMPORTED_MODULE_10__["DiceComponent"], _components_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_11__["GameOverComponent"], _components_battle_animation_battle_animation_component__WEBPACK_IMPORTED_MODULE_12__["BattleAnimationComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/components/battle-animation/battle-animation.component.css": (
  /*!****************************************************************************!*\
    !*** ./src/app/components/battle-animation/battle-animation.component.css ***!
    \****************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_battleAnimation_battleAnimationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".battle-field {\r\n    z-index: 10;\r\n    background-color: #00000055;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.field-left{\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-right: 10px;\r\n}\r\n\r\n.field-right{\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    margin-left: 20px;\r\n}\r\n\r\n.card {\r\n    width: 90px;\r\n    height: 180px;\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border: none;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.card-img {\r\n    width: 80px;\r\n    height: 80px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n\r\n.title {\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin-top: 5px;\r\n}\r\n\r\n.text {\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n}\r\n\r\n.icon {\r\n    width: 12px;\r\n    height: 12px;\r\n}\r\n\r\n.atk {\r\n    width: 70px;\r\n    height: 20px;\r\n    background: linear-gradient(to right, #9E7771, #FF2200);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.hearth {\r\n    width: 70px;\r\n    height: 20px;\r\n    background: linear-gradient(to right, #72B140, #314B1B);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n    padding: 0 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXR0bGUtYW5pbWF0aW9uL2JhdHRsZS1hbmltYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdURBQXVEO0lBQ3ZELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7SUFFOUIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmF0dGxlLWFuaW1hdGlvbi9iYXR0bGUtYW5pbWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmF0dGxlLWZpZWxkIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDU1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5maWVsZC1sZWZ0e1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZmllbGQtcmlnaHR7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uYXRrIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOUU3NzcxLCAjRkYyMjAwKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5oZWFydGgge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3MkIxNDAsICMzMTRCMUIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/components/battle-animation/battle-animation.component.ts": (
  /*!***************************************************************************!*\
    !*** ./src/app/components/battle-animation/battle-animation.component.ts ***!
    \***************************************************************************/
  /*! exports provided: BattleAnimationComponent */
  /***/
  function _src_app_components_battleAnimation_battleAnimationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BattleAnimationComponent", function () {
      return BattleAnimationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var BattleAnimationComponent = /*#__PURE__*/function () {
      function BattleAnimationComponent() {
        _classCallCheck(this, BattleAnimationComponent);
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      return _createClass(BattleAnimationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gradientAttacker",
        get: function get() {
          return "linear-gradient(to bottom, ".concat(this.attacker.personagem.backgroundTop, ", ").concat(this.attacker.personagem.backgroundBottom, ")");
        }
      }, {
        key: "gradientDefenser",
        get: function get() {
          return "linear-gradient(to bottom, ".concat(this.defenser.personagem.backgroundTop, ", ").concat(this.defenser.personagem.backgroundBottom, ")");
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BattleAnimationComponent.prototype, "attacker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BattleAnimationComponent.prototype, "defenser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BattleAnimationComponent.prototype, "output", void 0);
    BattleAnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'battle-animation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battle-animation.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/battle-animation/battle-animation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battle-animation.component.css */"./src/app/components/battle-animation/battle-animation.component.css"))["default"]]
    })], BattleAnimationComponent);

    /***/
  }),
  /***/"./src/app/components/card/card.component.css": (
  /*!****************************************************!*\
    !*** ./src/app/components/card/card.component.css ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_card_cardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".modal {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.card {\r\n    width: 320px;\r\n    height: 600px;\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: none;\r\n}\r\n\r\n.attacked {\r\n    -webkit-animation: shake 0.5s infinite, blinkRed 1s infinite;\r\n            animation: shake 0.5s infinite, blinkRed 1s infinite;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n    0% { transform: translate(0); }\r\n    25% { transform: translate(-5px, 5px); }\r\n    50% { transform: translate(5px, -5px); }\r\n    75% { transform: translate(-5px, -5px); }\r\n    100% { transform: translate(0); }\r\n}\r\n\r\n@keyframes shake {\r\n    0% { transform: translate(0); }\r\n    25% { transform: translate(-5px, 5px); }\r\n    50% { transform: translate(5px, -5px); }\r\n    75% { transform: translate(-5px, -5px); }\r\n    100% { transform: translate(0); }\r\n}\r\n\r\n@-webkit-keyframes blinkRed {\r\n    0% { background-color: transparent; }\r\n    50% { background-color: red; }\r\n    100% { background-color: transparent; }\r\n}\r\n\r\n@keyframes blinkRed {\r\n    0% { background-color: transparent; }\r\n    50% { background-color: red; }\r\n    100% { background-color: transparent; }\r\n}\r\n\r\n.card-img {\r\n    width: 320px;\r\n    height: 320px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n\r\n.title {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.skills {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    overflow-y: auto;\r\n    max-height: 300px;\r\n}\r\n\r\n.skill-text-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: flex-start;\r\n    margin-top: 10px;\r\n}\r\n\r\n.skill-number {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.skill-text {\r\n    font-size: 14px;\r\n}\r\n\r\n/*Informações de Vida e Poder de Ataque*/\r\n\r\n.card-info {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.icon {\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\n.atk {\r\n    width: 140px;\r\n    height: 35px;\r\n    background: linear-gradient(to right, #9E7771, #FF2200);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.hearth {\r\n    width: 140px;\r\n    height: 35px;\r\n    background: linear-gradient(to right, #72B140, #314B1B);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n    padding: 0 5px;\r\n}\r\n\r\n.text {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: #FFF;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDREQUFvRDtZQUFwRCxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxLQUFLLHVCQUF1QixFQUFFO0lBQzlCLE1BQU0sK0JBQStCLEVBQUU7SUFDdkMsTUFBTSwrQkFBK0IsRUFBRTtJQUN2QyxNQUFNLGdDQUFnQyxFQUFFO0lBQ3hDLE9BQU8sdUJBQXVCLEVBQUU7QUFDcEM7O0FBTkE7SUFDSSxLQUFLLHVCQUF1QixFQUFFO0lBQzlCLE1BQU0sK0JBQStCLEVBQUU7SUFDdkMsTUFBTSwrQkFBK0IsRUFBRTtJQUN2QyxNQUFNLGdDQUFnQyxFQUFFO0lBQ3hDLE9BQU8sdUJBQXVCLEVBQUU7QUFDcEM7O0FBRUE7SUFDSSxLQUFLLDZCQUE2QixFQUFFO0lBQ3BDLE1BQU0scUJBQXFCLEVBQUU7SUFDN0IsT0FBTyw2QkFBNkIsRUFBRTtBQUMxQzs7QUFKQTtJQUNJLEtBQUssNkJBQTZCLEVBQUU7SUFDcEMsTUFBTSxxQkFBcUIsRUFBRTtJQUM3QixPQUFPLDZCQUE2QixFQUFFO0FBQzFDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBbUI7T0FBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsd0NBQXdDOztBQUV4QztJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1REFBdUQ7SUFDdkQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0lBRTlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5hdHRhY2tlZCB7XHJcbiAgICBhbmltYXRpb246IHNoYWtlIDAuNXMgaW5maW5pdGUsIGJsaW5rUmVkIDFzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7IH1cclxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDVweCk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTVweCk7IH1cclxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBibGlua1JlZCB7XHJcbiAgICAwJSB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XHJcbiAgICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cclxuICAgIDEwMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5za2lsbHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uc2tpbGwtdGV4dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNraWxsLW51bWJlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNraWxsLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vKkluZm9ybWHDp8O1ZXMgZGUgVmlkYSBlIFBvZGVyIGRlIEF0YXF1ZSovXHJcblxyXG4uY2FyZC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5hdGsge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOUU3NzcxLCAjRkYyMjAwKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5oZWFydGgge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNzJCMTQwLCAjMzE0QjFCKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/components/card/card.component.ts": (
  /*!***************************************************!*\
    !*** ./src/app/components/card/card.component.ts ***!
    \***************************************************/
  /*! exports provided: CardComponent */
  /***/
  function _src_app_components_card_cardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CardComponent = /*#__PURE__*/function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);
        this.closeDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defending = false;
        this.click = 0;
      }
      return _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.punchAudio = new Audio('assets/sounds/punch.mp3');
          this.receivedAttack();
        }
      }, {
        key: "receivedAttack",
        value: function receivedAttack() {
          var _this = this;
          if (this.attackAnimation) {
            setTimeout(function () {
              _this.attackAnimation = false;
            }, 1000);
            setTimeout(function () {
              _this.closeDetails.emit();
            }, 2000);
            this.punchAudio.play();
          }
        }
      }, {
        key: "gradient",
        get: function get() {
          return "linear-gradient(to bottom, ".concat(this.character.personagem.backgroundTop, ", ").concat(this.character.personagem.backgroundBottom, ")");
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          var target = event.target;
          if (this.click != 0) this.closeDetails.emit();
          this.click = 1;
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "character", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "attackAnimation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardComponent.prototype, "closeDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])], CardComponent.prototype, "onClick", null);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'card-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.css */"./src/app/components/card/card.component.css"))["default"]]
    })], CardComponent);

    /***/
  }),
  /***/"./src/app/components/dice/dice.component.css": (
  /*!****************************************************!*\
    !*** ./src/app/components/dice/dice.component.css ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_dice_diceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n/*Dado criado pelo GPT*/\r\n\r\n\r\n.dice-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.8); /* Fundo semi-transparente */\r\n    z-index: 1000; /* Certifique-se de que o loader apareça acima de outros elementos */\r\n}\r\n\r\n\r\n.scene {\r\n    width: 150px;\r\n    height: 150px;\r\n    perspective: 800px;\r\n    margin-top: 40px;\r\n}\r\n\r\n\r\n.scene-ally {\r\n    width: 100px;\r\n    height: 100px;\r\n    perspective: 800px;\r\n}\r\n\r\n\r\n.cube {\r\n    width: 100px;\r\n    height: 100px;\r\n    position: relative;\r\n    transform-style: preserve-3d;\r\n    transform-origin: center;\r\n    transition: transform 2s ease;\r\n}\r\n\r\n\r\n.cube-face {\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    background: #f00;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 2px;\r\n}\r\n\r\n\r\n.cube-face-ally {\r\n    background: #f00;\r\n}\r\n\r\n\r\n.cube-face-opponent {\r\n    background: #ff0;\r\n}\r\n\r\n\r\n.dot {\r\n    position: absolute;\r\n    background: black;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.dot0 { width: 15px; height: 15px; top: 50%; left: 50%; transform: translate(-50%, -50%); }\r\n\r\n\r\n.dot1 { width: 15px; height: 15px; top: 10px; left: 10px; }\r\n\r\n\r\n.dot2 { width: 15px; height: 15px; top: 10px; right: 10px; }\r\n\r\n\r\n.dot3 { width: 15px; height: 15px; top: 50%; left: 10px; transform: translate(0, -50%); }\r\n\r\n\r\n.dot4 { width: 15px; height: 15px; top: 50%; right: 10px; transform: translate(0, -50%); }\r\n\r\n\r\n.dot5 { width: 15px; height: 15px; bottom: 10px; left: 10px; }\r\n\r\n\r\n.dot6 { width: 15px; height: 15px; bottom: 10px; right: 10px; }\r\n\r\n\r\n.cube-face.front  { transform: translateZ(50px); }\r\n\r\n\r\n.cube-face.back   { transform: rotateY(180deg) translateZ(50px); }\r\n\r\n\r\n.cube-face.right  { transform: rotateY(90deg) translateZ(50px); }\r\n\r\n\r\n.cube-face.left   { transform: rotateY(-90deg) translateZ(50px); }\r\n\r\n\r\n.cube-face.top    { transform: rotateX(90deg) translateZ(50px); }\r\n\r\n\r\n.cube-face.bottom { transform: rotateX(-90deg) translateZ(50px); }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWNlL2RpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsdUJBQXVCOzs7QUFHdkI7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9DQUFvQyxFQUFFLDRCQUE0QjtJQUNsRSxhQUFhLEVBQUUsb0VBQW9FO0FBQ3ZGOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtBQUNqQzs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkNBQTJDO0FBQy9DOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUVBLFFBQVEsV0FBVyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFnQyxFQUFFOzs7QUFDMUYsUUFBUSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7OztBQUMxRCxRQUFRLFdBQVcsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRTs7O0FBQzNELFFBQVEsV0FBVyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLDZCQUE2QixFQUFFOzs7QUFDeEYsUUFBUSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsNkJBQTZCLEVBQUU7OztBQUN6RixRQUFRLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRTs7O0FBQzdELFFBQVEsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFOzs7QUFHOUQsb0JBQW9CLDJCQUEyQixFQUFFOzs7QUFDakQsb0JBQW9CLDJDQUEyQyxFQUFFOzs7QUFDakUsb0JBQW9CLDBDQUEwQyxFQUFFOzs7QUFDaEUsb0JBQW9CLDJDQUEyQyxFQUFFOzs7QUFDakUsb0JBQW9CLDBDQUEwQyxFQUFFOzs7QUFDaEUsb0JBQW9CLDJDQUEyQyxFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWNlL2RpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKkRhZG8gY3JpYWRvIHBlbG8gR1BUKi9cclxuXHJcblxyXG4uZGljZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTsgLyogRnVuZG8gc2VtaS10cmFuc3BhcmVudGUgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7IC8qIENlcnRpZmlxdWUtc2UgZGUgcXVlIG8gbG9hZGVyIGFwYXJlw6dhIGFjaW1hIGRlIG91dHJvcyBlbGVtZW50b3MgKi9cclxufVxyXG5cclxuXHJcbi5zY2VuZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDgwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnNjZW5lLWFsbHkge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiA4MDBweDtcclxufVxyXG5cclxuLmN1YmUge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnMgZWFzZTtcclxufVxyXG4gIFxyXG4uY3ViZS1mYWNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDJweCAycHg7XHJcbn1cclxuXHJcbi5jdWJlLWZhY2UtYWxseSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjAwO1xyXG59XHJcblxyXG4uY3ViZS1mYWNlLW9wcG9uZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjA7XHJcbn1cclxuICBcclxuLmRvdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4gIFxyXG4uZG90MCB7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IHRvcDogNTAlOyBsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XHJcbi5kb3QxIHsgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgdG9wOiAxMHB4OyBsZWZ0OiAxMHB4OyB9XHJcbi5kb3QyIHsgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgdG9wOiAxMHB4OyByaWdodDogMTBweDsgfVxyXG4uZG90MyB7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IHRvcDogNTAlOyBsZWZ0OiAxMHB4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTsgfVxyXG4uZG90NCB7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IHRvcDogNTAlOyByaWdodDogMTBweDsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7IH1cclxuLmRvdDUgeyB3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4OyBib3R0b206IDEwcHg7IGxlZnQ6IDEwcHg7IH1cclxuLmRvdDYgeyB3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4OyBib3R0b206IDEwcHg7IHJpZ2h0OiAxMHB4OyB9XHJcblxyXG5cclxuLmN1YmUtZmFjZS5mcm9udCAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNTBweCk7IH1cclxuLmN1YmUtZmFjZS5iYWNrICAgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDUwcHgpOyB9XHJcbi5jdWJlLWZhY2UucmlnaHQgIHsgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDUwcHgpOyB9XHJcbi5jdWJlLWZhY2UubGVmdCAgIHsgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig1MHB4KTsgfVxyXG4uY3ViZS1mYWNlLnRvcCAgICB7IHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig1MHB4KTsgfVxyXG4uY3ViZS1mYWNlLmJvdHRvbSB7IHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooNTBweCk7IH0iXX0= */";

    /***/
  }),
  /***/"./src/app/components/dice/dice.component.ts": (
  /*!***************************************************!*\
    !*** ./src/app/components/dice/dice.component.ts ***!
    \***************************************************/
  /*! exports provided: DiceComponent */
  /***/
  function _src_app_components_dice_diceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DiceComponent", function () {
      return DiceComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var DiceComponent = /*#__PURE__*/function () {
      function DiceComponent() {
        _classCallCheck(this, DiceComponent);
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rotateX = 0;
        this.rotateY = 0;
        this.result = null;
      }
      return _createClass(DiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('entrou no componente dado');
          this.rollDiceAudio = new Audio('assets/sounds/dice.mp3');
          this.animacaoGiroDado();
        }
      }, {
        key: "animacaoGiroDado",
        value: function animacaoGiroDado() {
          var _this2 = this;
          console.log('entrou na animação do dado');
          this.rollDiceAudio.play();
          var randomNumber = Math.floor(Math.random() * 6) + 1;
          this.result = randomNumber;
          this.rotateX = this.getRotationX(randomNumber);
          this.rotateY = this.getRotationY(randomNumber);
          setTimeout(function () {
            _this2.close.emit(_this2.result);
          }, 3000);
        }
        // Define a rotação de X para cada número do dado
      }, {
        key: "getRotationX",
        value: function getRotationX(num) {
          var rotations = {
            1: 0,
            2: 90,
            3: 180,
            4: -90,
            5: 180,
            6: 0
          };
          return 360 * 9 + rotations[num];
        }
        // Define a rotação de Y para cada número do dado
      }, {
        key: "getRotationY",
        value: function getRotationY(num) {
          var rotations = {
            1: 0,
            2: 0,
            3: 90,
            4: 90,
            5: -90,
            6: 180
          };
          return 360 * 9 + rotations[num];
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DiceComponent.prototype, "close", void 0);
    DiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dice',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dice.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/dice/dice.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dice.component.css */"./src/app/components/dice/dice.component.css"))["default"]]
    })], DiceComponent);

    /***/
  }),
  /***/"./src/app/components/game-over/game-over.component.css": (
  /*!**************************************************************!*\
    !*** ./src/app/components/game-over/game-over.component.css ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_gameOver_gameOverComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "/* game-over-modal.component.css */\r\n.modal-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.modal-content {\r\n  background: white;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\r\n  text-align: center;\r\n  width: 300px;\r\n}\r\n.social-buttons {\r\n  margin: 20px 0;\r\n}\r\n.social-button {\r\n  display: inline-block;\r\n  margin: 0 10px;\r\n}\r\n.social-button img {\r\n  width: 40px; /* Tamanho dos ícones */\r\n  height: auto;\r\n}\r\n.title-victory {\r\n  font-size: 26px;\r\n  color: green;\r\n  margin-bottom: 10px;\r\n  font-weight: bold;\r\n}\r\n.title-lose {\r\n  font-size: 26px;\r\n  color: red;\r\n  margin-bottom: 10px;\r\n  font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLW92ZXIvZ2FtZS1vdmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVyxFQUFFLHVCQUF1QjtFQUNwQyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lLW92ZXIvZ2FtZS1vdmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnYW1lLW92ZXItbW9kYWwuY29tcG9uZW50LmNzcyAqL1xyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiAgXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4gIFxyXG4uc29jaWFsLWJ1dHRvbnMge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcbiAgXHJcbi5zb2NpYWwtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuICBcclxuLnNvY2lhbC1idXR0b24gaW1nIHtcclxuICB3aWR0aDogNDBweDsgLyogVGFtYW5obyBkb3Mgw61jb25lcyAqL1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRpdGxlLXZpY3Rvcnkge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRpdGxlLWxvc2Uge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/components/game-over/game-over.component.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/components/game-over/game-over.component.ts ***!
    \*************************************************************/
  /*! exports provided: GameOverComponent */
  /***/
  function _src_app_components_gameOver_gameOverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GameOverComponent", function () {
      return GameOverComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var GameOverComponent = /*#__PURE__*/function () {
      function GameOverComponent() {
        _classCallCheck(this, GameOverComponent);
        this.resultMessage = ''; // Mensagem de Vitória ou Derrota
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      return _createClass(GameOverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.close.emit();
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameOverComponent.prototype, "resultMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GameOverComponent.prototype, "close", void 0);
    GameOverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'game-over',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-over.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-over/game-over.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-over.component.css */"./src/app/components/game-over/game-over.component.css"))["default"]]
    })], GameOverComponent);

    /***/
  }),
  /***/"./src/app/components/messages/messages.component.css": (
  /*!************************************************************!*\
    !*** ./src/app/components/messages/messages.component.css ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_messages_messagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".background {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.8); /* Fundo semi-transparente */\r\n    z-index: 1000; /* Certifique-se de que o loader apareça acima de outros elementos */\r\n  }\r\n  \r\n.container-msg {\r\n    border: 6px solid #f3f3f3; /* Cor de fundo do círculo */\r\n    border-top: 6px solid #3498db; /* Cor da borda superior (efeito de giro) */\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-animation: spin 1s linear infinite;\r\n            animation: spin 1s linear infinite; /* Animação de rotação */\r\n}\r\n  \r\n@media (min-width: 768px){\r\n  .message-container {\r\n    position: fixed; /* Fixa a mensagem na tela */\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); /* Centraliza */\r\n    background-color: rgba(0, 0, 0, 0.7); /* Fundo semi-transparente */\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    z-index: 1000; /* Para ficar na frente de outros elementos */\r\n    opacity: 1; /* Para garantir que o container esteja visível inicialmente */\r\n    -webkit-animation: slide-in 1s forwards;\r\n            animation: slide-in 1s forwards; /* Aplica a animação ao container */\r\n    width: 50vw;\r\n  }\r\n}\r\n  \r\n@media (max-width: 768px){\r\n  .message-container {\r\n    position: fixed; /* Fixa a mensagem na tela */\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); /* Centraliza */\r\n    background-color: rgba(0, 0, 0, 0.7); /* Fundo semi-transparente */\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    z-index: 1000; /* Para ficar na frente de outros elementos */\r\n    opacity: 1; /* Para garantir que o container esteja visível inicialmente */\r\n    -webkit-animation: slide-in 1s forwards;\r\n            animation: slide-in 1s forwards; /* Aplica a animação ao container */\r\n    width: 90vw;\r\n}\r\n}\r\n  \r\n.message {\r\n    font-size: 32px; /* Tamanho da fonte grande */\r\n    color: white; /* Cor do texto */\r\n    opacity: 0; /* O texto começa invisível */\r\n    -webkit-animation: fade-in 1s forwards 0.5s;\r\n            animation: fade-in 1s forwards 0.5s; /* Animação para o texto com um atraso */\r\n    text-align: center;\r\n  }\r\n  \r\n/* Animações */\r\n  \r\n@-webkit-keyframes slide-in {\r\n    from {\r\n      transform: translate(-150%, -50%); /* Começa fora da tela, à esquerda */\r\n      opacity: 0; /* Começa invisível */\r\n    }\r\n    to {\r\n      transform: translate(-50%, -50%); /* Termina na posição central */\r\n      opacity: 1; /* Fica visível */\r\n    }\r\n  }\r\n  \r\n@keyframes slide-in {\r\n    from {\r\n      transform: translate(-150%, -50%); /* Começa fora da tela, à esquerda */\r\n      opacity: 0; /* Começa invisível */\r\n    }\r\n    to {\r\n      transform: translate(-50%, -50%); /* Termina na posição central */\r\n      opacity: 1; /* Fica visível */\r\n    }\r\n  }\r\n  \r\n@-webkit-keyframes fade-in {\r\n    from {\r\n      opacity: 0; /* Começa invisível */\r\n    }\r\n    to {\r\n      opacity: 1; /* Termina visível */\r\n    }\r\n  }\r\n  \r\n@keyframes fade-in {\r\n    from {\r\n      opacity: 0; /* Começa invisível */\r\n    }\r\n    to {\r\n      opacity: 1; /* Termina visível */\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQ0FBb0MsRUFBRSw0QkFBNEI7SUFDbEUsYUFBYSxFQUFFLG9FQUFvRTtFQUNyRjs7QUFFRjtJQUNJLHlCQUF5QixFQUFFLDRCQUE0QjtJQUN2RCw2QkFBNkIsRUFBRSwyQ0FBMkM7SUFDMUUsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMENBQWtDO1lBQWxDLGtDQUFrQyxFQUFFLHdCQUF3QjtBQUNoRTs7QUFFQTtFQUNFO0lBQ0UsZUFBZSxFQUFFLDRCQUE0QjtJQUM3QyxRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQyxFQUFFLGVBQWU7SUFDakQsb0NBQW9DLEVBQUUsNEJBQTRCO0lBQ2xFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGFBQWEsRUFBRSw2Q0FBNkM7SUFDNUQsVUFBVSxFQUFFLDhEQUE4RDtJQUMxRSx1Q0FBK0I7WUFBL0IsK0JBQStCLEVBQUUsbUNBQW1DO0lBQ3BFLFdBQVc7RUFDYjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxlQUFlLEVBQUUsNEJBQTRCO0lBQzdDLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDLEVBQUUsZUFBZTtJQUNqRCxvQ0FBb0MsRUFBRSw0QkFBNEI7SUFDbEUsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsYUFBYSxFQUFFLDZDQUE2QztJQUM1RCxVQUFVLEVBQUUsOERBQThEO0lBQzFFLHVDQUErQjtZQUEvQiwrQkFBK0IsRUFBRSxtQ0FBbUM7SUFDcEUsV0FBVztBQUNmO0FBQ0E7O0FBSUE7SUFDSSxlQUFlLEVBQUUsNEJBQTRCO0lBQzdDLFlBQVksRUFBRSxpQkFBaUI7SUFDL0IsVUFBVSxFQUFFLDZCQUE2QjtJQUN6QywyQ0FBbUM7WUFBbkMsbUNBQW1DLEVBQUUsd0NBQXdDO0lBQzdFLGtCQUFrQjtFQUNwQjs7QUFFQSxjQUFjOztBQUNkO0lBQ0U7TUFDRSxpQ0FBaUMsRUFBRSxvQ0FBb0M7TUFDdkUsVUFBVSxFQUFFLHFCQUFxQjtJQUNuQztJQUNBO01BQ0UsZ0NBQWdDLEVBQUUsK0JBQStCO01BQ2pFLFVBQVUsRUFBRSxpQkFBaUI7SUFDL0I7RUFDRjs7QUFUQTtJQUNFO01BQ0UsaUNBQWlDLEVBQUUsb0NBQW9DO01BQ3ZFLFVBQVUsRUFBRSxxQkFBcUI7SUFDbkM7SUFDQTtNQUNFLGdDQUFnQyxFQUFFLCtCQUErQjtNQUNqRSxVQUFVLEVBQUUsaUJBQWlCO0lBQy9CO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLFVBQVUsRUFBRSxxQkFBcUI7SUFDbkM7SUFDQTtNQUNFLFVBQVUsRUFBRSxvQkFBb0I7SUFDbEM7RUFDRjs7QUFQQTtJQUNFO01BQ0UsVUFBVSxFQUFFLHFCQUFxQjtJQUNuQztJQUNBO01BQ0UsVUFBVSxFQUFFLG9CQUFvQjtJQUNsQztFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTsgLyogRnVuZG8gc2VtaS10cmFuc3BhcmVudGUgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7IC8qIENlcnRpZmlxdWUtc2UgZGUgcXVlIG8gbG9hZGVyIGFwYXJlw6dhIGFjaW1hIGRlIG91dHJvcyBlbGVtZW50b3MgKi9cclxuICB9XHJcbiAgXHJcbi5jb250YWluZXItbXNnIHtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICNmM2YzZjM7IC8qIENvciBkZSBmdW5kbyBkbyBjw61yY3VsbyAqL1xyXG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICMzNDk4ZGI7IC8qIENvciBkYSBib3JkYSBzdXBlcmlvciAoZWZlaXRvIGRlIGdpcm8pICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7IC8qIEFuaW1hw6fDo28gZGUgcm90YcOnw6NvICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLm1lc3NhZ2UtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogRml4YSBhIG1lbnNhZ2VtIG5hIHRlbGEgKi9cclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIENlbnRyYWxpemEgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogRnVuZG8gc2VtaS10cmFuc3BhcmVudGUgKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHotaW5kZXg6IDEwMDA7IC8qIFBhcmEgZmljYXIgbmEgZnJlbnRlIGRlIG91dHJvcyBlbGVtZW50b3MgKi9cclxuICAgIG9wYWNpdHk6IDE7IC8qIFBhcmEgZ2FyYW50aXIgcXVlIG8gY29udGFpbmVyIGVzdGVqYSB2aXPDrXZlbCBpbmljaWFsbWVudGUgKi9cclxuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gMXMgZm9yd2FyZHM7IC8qIEFwbGljYSBhIGFuaW1hw6fDo28gYW8gY29udGFpbmVyICovXHJcbiAgICB3aWR0aDogNTB2dztcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAubWVzc2FnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBGaXhhIGEgbWVuc2FnZW0gbmEgdGVsYSAqL1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLyogQ2VudHJhbGl6YSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpOyAvKiBGdW5kbyBzZW1pLXRyYW5zcGFyZW50ZSAqL1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgei1pbmRleDogMTAwMDsgLyogUGFyYSBmaWNhciBuYSBmcmVudGUgZGUgb3V0cm9zIGVsZW1lbnRvcyAqL1xyXG4gICAgb3BhY2l0eTogMTsgLyogUGFyYSBnYXJhbnRpciBxdWUgbyBjb250YWluZXIgZXN0ZWphIHZpc8OtdmVsIGluaWNpYWxtZW50ZSAqL1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbiAxcyBmb3J3YXJkczsgLyogQXBsaWNhIGEgYW5pbWHDp8OjbyBhbyBjb250YWluZXIgKi9cclxuICAgIHdpZHRoOiA5MHZ3O1xyXG59XHJcbn1cclxuXHJcblxyXG4gIFxyXG4ubWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7IC8qIFRhbWFuaG8gZGEgZm9udGUgZ3JhbmRlICovXHJcbiAgICBjb2xvcjogd2hpdGU7IC8qIENvciBkbyB0ZXh0byAqL1xyXG4gICAgb3BhY2l0eTogMDsgLyogTyB0ZXh0byBjb21lw6dhIGludmlzw612ZWwgKi9cclxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAxcyBmb3J3YXJkcyAwLjVzOyAvKiBBbmltYcOnw6NvIHBhcmEgbyB0ZXh0byBjb20gdW0gYXRyYXNvICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFuaW1hw6fDtWVzICovXHJcbiAgQGtleWZyYW1lcyBzbGlkZS1pbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUsIC01MCUpOyAvKiBDb21lw6dhIGZvcmEgZGEgdGVsYSwgw6AgZXNxdWVyZGEgKi9cclxuICAgICAgb3BhY2l0eTogMDsgLyogQ29tZcOnYSBpbnZpc8OtdmVsICovXHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBUZXJtaW5hIG5hIHBvc2nDp8OjbyBjZW50cmFsICovXHJcbiAgICAgIG9wYWNpdHk6IDE7IC8qIEZpY2Egdmlzw612ZWwgKi9cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwOyAvKiBDb21lw6dhIGludmlzw612ZWwgKi9cclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgb3BhY2l0eTogMTsgLyogVGVybWluYSB2aXPDrXZlbCAqL1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */";

    /***/
  }),
  /***/"./src/app/components/messages/messages.component.ts": (
  /*!***********************************************************!*\
    !*** ./src/app/components/messages/messages.component.ts ***!
    \***********************************************************/
  /*! exports provided: MessagesComponent */
  /***/
  function _src_app_components_messages_messagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent() {
        _classCallCheck(this, MessagesComponent);
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      return _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;
          setTimeout(function () {
            _this3.closeModal.emit(true);
          }, 2500);
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessagesComponent.prototype, "msg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MessagesComponent.prototype, "closeModal", void 0);
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'messages-battle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.css */"./src/app/components/messages/messages.component.css"))["default"]]
    })], MessagesComponent);

    /***/
  }),
  /***/"./src/app/components/mini-card/mini-card.component.css": (
  /*!**************************************************************!*\
    !*** ./src/app/components/mini-card/mini-card.component.css ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_miniCard_miniCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".card {\r\n    width: 90px;\r\n    height: 180px;\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border: none;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.card:hover {\r\n    outline: 1px solid yellow;\r\n}\r\n\r\n.no-hover {\r\n    pointer-events: none;\r\n}\r\n\r\n.inimigo-selecionavel::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    outline: 1px solid red;\r\n    transition: all 2s;\r\n}\r\n\r\n.inimigo-selecionavel:hover {\r\n    outline: 5px solid red;\r\n}\r\n\r\n.card-selected {\r\n    outline: 5px solid yellow;\r\n}\r\n\r\n.card-selected:hover {\r\n    outline: 5px solid yellow;\r\n}\r\n\r\n.card-img {\r\n    width: 80px;\r\n    height: 80px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n\r\n.title {\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin-top: 5px;\r\n}\r\n\r\n.text {\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n}\r\n\r\n.icon {\r\n    width: 12px;\r\n    height: 12px;\r\n}\r\n\r\n.atk {\r\n    width: 70px;\r\n    height: 20px;\r\n    background: linear-gradient(to right, #9E7771, #FF2200);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.hearth {\r\n    width: 70px;\r\n    height: 20px;\r\n    background: linear-gradient(to right, #72B140, #314B1B);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n    padding: 0 5px;\r\n}\r\n\r\n/*Botões*/\r\n\r\n.container-select-options{\r\n    position: absolute;\r\n    bottom: 190px;\r\n    display: flex;\r\n}\r\n\r\n.btn {\r\n    width: 60px;\r\n    height: 30px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 50px;\r\n}\r\n\r\n.btn-atk {\r\n    background: linear-gradient(to right, #EE0000, #FF2200);\r\n}\r\n\r\n.btn-atk:hover {\r\n    background: linear-gradient(to left, #EE0000, #FF2200);\r\n}\r\n\r\n.btn-dice {\r\n    background: linear-gradient(to right, #72B140, #314B1B);\r\n}\r\n\r\n.btn-dice:hover {\r\n    background: linear-gradient(to left, #72B140, #314B1B);\r\n}\r\n\r\n.btn-details {\r\n    background: linear-gradient(to right, #515460, #1D3FC7);\r\n}\r\n\r\n.btn-details:hover {\r\n    background: linear-gradient(to left, #515460, #1D3FC7);\r\n}\r\n\r\n.no-action {\r\n    cursor: not-allowed;\r\n    background-color: #CCCCCC;\r\n    color: white;\r\n    pointer-events: none;\r\n}\r\n\r\n.text-btn {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n/* CSS DO DADO */\r\n\r\n.dice-container {\r\n    position: absolute;\r\n    top: 0;\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.dice {\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 2px;\r\n    border: 1px solid white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 2px;\r\n    margin-left: 5px;\r\n    color: white;\r\n}\r\n\r\n.dice-green {\r\n    background-color: green;\r\n}\r\n\r\n.dice-red {\r\n    background-color: #EE0000;\r\n}\r\n\r\n.dead {\r\n    width: 90px;\r\n    height: 180px;\r\n    padding: 5px;\r\n    background-color: transparent;\r\n    pointer-events: none;\r\n    z-index: 1000;\r\n    -webkit-animation: flashRed 3s;\r\n            animation: flashRed 3s;\r\n}\r\n\r\n@-webkit-keyframes flashRed {\r\n    0%,10%,20%,30%,40%,50%,60%,70%,80%,90%,100% {\r\n      background-color: transparent;\r\n    }\r\n    5%,15%,25%,35%,45%,55%,65%,75%,85%,95% {\r\n      background-color: red;\r\n    }\r\n}\r\n\r\n@keyframes flashRed {\r\n    0%,10%,20%,30%,40%,50%,60%,70%,80%,90%,100% {\r\n      background-color: transparent;\r\n    }\r\n    5%,15%,25%,35%,45%,55%,65%,75%,85%,95% {\r\n      background-color: red;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes flameFlicker {\r\n    0%, 100% {\r\n      box-shadow: 0 0 15px 5px rgba(255, 69, 0, 0.8),\r\n                  0 0 30px 10px rgba(255, 140, 0, 0.6),\r\n                  0 0 45px 15px rgba(255, 215, 0, 0.5);\r\n      border-color: rgba(255, 69, 0, 0.9);\r\n      transform: scale(1);\r\n    }\r\n    50% {\r\n      box-shadow: 0 0 25px 10px rgba(255, 140, 0, 0.8),\r\n                  0 0 50px 20px rgba(255, 69, 0, 0.7),\r\n                  0 0 70px 30px rgba(255, 69, 0, 0.6);\r\n      border-color: rgba(255, 215, 0, 1);\r\n      transform: scale(1);\r\n    }\r\n  }\r\n\r\n@keyframes flameFlicker {\r\n    0%, 100% {\r\n      box-shadow: 0 0 15px 5px rgba(255, 69, 0, 0.8),\r\n                  0 0 30px 10px rgba(255, 140, 0, 0.6),\r\n                  0 0 45px 15px rgba(255, 215, 0, 0.5);\r\n      border-color: rgba(255, 69, 0, 0.9);\r\n      transform: scale(1);\r\n    }\r\n    50% {\r\n      box-shadow: 0 0 25px 10px rgba(255, 140, 0, 0.8),\r\n                  0 0 50px 20px rgba(255, 69, 0, 0.7),\r\n                  0 0 70px 30px rgba(255, 69, 0, 0.6);\r\n      border-color: rgba(255, 215, 0, 1);\r\n      transform: scale(1);\r\n    }\r\n  }\r\n\r\n.card-fire {\r\n    width: 90px;\r\n    height: 180px;\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border: 3px solid rgba(255, 69, 0, 0.9);\r\n    border-radius: 10px;\r\n    background: linear-gradient(45deg, rgba(255, 69, 0, 0.4), rgba(255, 140, 0, 0.4));\r\n    position: relative;\r\n    cursor: pointer;\r\n    transition: transform 0.2s, box-shadow 0.2s;\r\n    -webkit-animation: flameFlicker 1.5s infinite alternate ease-in-out;\r\n            animation: flameFlicker 1.5s infinite alternate ease-in-out;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9taW5pLWNhcmQvbWluaS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBbUI7T0FBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1REFBdUQ7SUFDdkQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0lBRTlCLGNBQWM7QUFDbEI7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSx1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSx1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBR0EsZ0JBQWdCOztBQUVoQjtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYiw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7TUFDRSw2QkFBNkI7SUFDL0I7SUFDQTtNQUNFLHFCQUFxQjtJQUN2QjtBQUNKOztBQVBBO0lBQ0k7TUFDRSw2QkFBNkI7SUFDL0I7SUFDQTtNQUNFLHFCQUFxQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7TUFDRTs7c0RBRWdEO01BQ2hELG1DQUFtQztNQUNuQyxtQkFBbUI7SUFDckI7SUFDQTtNQUNFOztxREFFK0M7TUFDL0Msa0NBQWtDO01BQ2xDLG1CQUFtQjtJQUNyQjtFQUNGOztBQWZGO0lBQ0k7TUFDRTs7c0RBRWdEO01BQ2hELG1DQUFtQztNQUNuQyxtQkFBbUI7SUFDckI7SUFDQTtNQUNFOztxREFFK0M7TUFDL0Msa0NBQWtDO01BQ2xDLG1CQUFtQjtJQUNyQjtFQUNGOztBQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsaUZBQWlGO0lBQ2pGLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLG1FQUEyRDtZQUEzRCwyREFBMkQ7RUFDN0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21pbmktY2FyZC9taW5pLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHllbGxvdztcclxufVxyXG5cclxuLm5vLWhvdmVyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uaW5pbWlnby1zZWxlY2lvbmF2ZWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycztcclxufVxyXG5cclxuLmluaW1pZ28tc2VsZWNpb25hdmVsOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDVweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5jYXJkLXNlbGVjdGVkIHtcclxuICAgIG91dGxpbmU6IDVweCBzb2xpZCB5ZWxsb3c7XHJcbn1cclxuXHJcbi5jYXJkLXNlbGVjdGVkOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDVweCBzb2xpZCB5ZWxsb3c7XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5hdGsge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5RTc3NzEsICNGRjIyMDApO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmhlYXJ0aCB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzcyQjE0MCwgIzMxNEIxQik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbi8qQm90w7VlcyovXHJcblxyXG4uY29udGFpbmVyLXNlbGVjdC1vcHRpb25ze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxOTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uYnRuLWF0ayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFRTAwMDAsICNGRjIyMDApO1xyXG59XHJcblxyXG4uYnRuLWF0azpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0VFMDAwMCwgI0ZGMjIwMCk7XHJcbn1cclxuXHJcbi5idG4tZGljZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3MkIxNDAsICMzMTRCMUIpO1xyXG59XHJcblxyXG4uYnRuLWRpY2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3MkIxNDAsICMzMTRCMUIpO1xyXG59XHJcblxyXG4uYnRuLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTE1NDYwLCAjMUQzRkM3KTtcclxufVxyXG5cclxuLmJ0bi1kZXRhaWxzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNTE1NDYwLCAjMUQzRkM3KTtcclxufVxyXG5cclxuLm5vLWFjdGlvbiB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udGV4dC1idG4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKiBDU1MgRE8gREFETyAqL1xyXG5cclxuLmRpY2UtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpY2Uge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCAycHggMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRpY2UtZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5kaWNlLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUUwMDAwO1xyXG59XHJcblxyXG4uZGVhZCB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGFuaW1hdGlvbjogZmxhc2hSZWQgM3M7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxhc2hSZWQge1xyXG4gICAgMCUsMTAlLDIwJSwzMCUsNDAlLDUwJSw2MCUsNzAlLDgwJSw5MCUsMTAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgNSUsMTUlLDI1JSwzNSUsNDUlLDU1JSw2NSUsNzUlLDg1JSw5NSUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxhbWVGbGlja2VyIHtcclxuICAgIDAlLCAxMDAlIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggNXB4IHJnYmEoMjU1LCA2OSwgMCwgMC44KSxcclxuICAgICAgICAgICAgICAgICAgMCAwIDMwcHggMTBweCByZ2JhKDI1NSwgMTQwLCAwLCAwLjYpLFxyXG4gICAgICAgICAgICAgICAgICAwIDAgNDVweCAxNXB4IHJnYmEoMjU1LCAyMTUsIDAsIDAuNSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDY5LCAwLCAwLjkpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDI1cHggMTBweCByZ2JhKDI1NSwgMTQwLCAwLCAwLjgpLFxyXG4gICAgICAgICAgICAgICAgICAwIDAgNTBweCAyMHB4IHJnYmEoMjU1LCA2OSwgMCwgMC43KSxcclxuICAgICAgICAgICAgICAgICAgMCAwIDcwcHggMzBweCByZ2JhKDI1NSwgNjksIDAsIDAuNik7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDIxNSwgMCwgMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWZpcmUge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDY5LCAwLCAwLjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDY5LCAwLCAwLjQpLCByZ2JhKDI1NSwgMTQwLCAwLCAwLjQpKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBib3gtc2hhZG93IDAuMnM7XHJcbiAgICBhbmltYXRpb246IGZsYW1lRmxpY2tlciAxLjVzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgIl19 */";

    /***/
  }),
  /***/"./src/app/components/mini-card/mini-card.component.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/components/mini-card/mini-card.component.ts ***!
    \*************************************************************/
  /*! exports provided: MiniCardComponent */
  /***/
  function _src_app_components_miniCard_miniCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MiniCardComponent", function () {
      return MiniCardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var MiniCardComponent = /*#__PURE__*/function () {
      function MiniCardComponent(elementRef) {
        _classCallCheck(this, MiniCardComponent);
        this.elementRef = elementRef;
        this.characterDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rollDice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.attack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.foiAtacado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defending = false;
        this.selected = false;
      }
      return _createClass(MiniCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.characterSelectAudio = new Audio('assets/sounds/menu-selection.mp3');
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "gradient",
        get: function get() {
          return "linear-gradient(to bottom, ".concat(this.character.personagem.backgroundTop, ", ").concat(this.character.personagem.backgroundBottom, ")");
        }
      }, {
        key: "click",
        value: function click() {
          this.characterSelectAudio.play();
          if (this.ally) this.selected = true;else {
            this.foiAtacadoEmit();
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          var target = event.target;
          if (!this.elementRef.nativeElement.contains(target)) {
            this.selected = false;
          }
        }
      }, {
        key: "optionSelected",
        value: function optionSelected(option) {
          this.selected = false;
          switch (option) {
            case 'atk':
              this.atacouEmit();
              break;
            case 'dice':
              this.rollDiceEmit();
              break;
            default:
              this.showDetails();
              break;
          }
        }
      }, {
        key: "showDetails",
        value: function showDetails() {
          this.characterDetails.emit(this.character);
        }
      }, {
        key: "rollDiceEmit",
        value: function rollDiceEmit() {
          this.rollDice.emit(this.character);
        }
      }, {
        key: "atacouEmit",
        value: function atacouEmit() {
          this.attack.emit(this.character);
        }
      }, {
        key: "foiAtacadoEmit",
        value: function foiAtacadoEmit() {
          this.foiAtacado.emit(this.character);
        }
      }]);
    }();
    MiniCardComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MiniCardComponent.prototype, "characterDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MiniCardComponent.prototype, "rollDice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MiniCardComponent.prototype, "attack", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MiniCardComponent.prototype, "foiAtacado", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MiniCardComponent.prototype, "character", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MiniCardComponent.prototype, "ally", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MiniCardComponent.prototype, "battle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MiniCardComponent.prototype, "opponentTurn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])], MiniCardComponent.prototype, "onClick", null);
    MiniCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mini-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mini-card.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/mini-card/mini-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mini-card.component.css */"./src/app/components/mini-card/mini-card.component.css"))["default"]]
    })], MiniCardComponent);

    /***/
  }),
  /***/"./src/app/mock/team-one.json": (
  /*!************************************!*\
    !*** ./src/app/mock/team-one.json ***!
    \************************************/
  /*! exports provided: 0, 1, 2, default */
  /***/
  function _src_app_mock_teamOneJson(module) {
    module.exports = JSON.parse("[{\"url\":\"assets/cards/ninja-rosa.jpeg\",\"name\":\"Ninja Rosa - Luz da Primavera\",\"backgroundTop\":\"#EF7EAF\",\"backgroundBottom\":\"#F7DEE2\",\"atk\":15,\"health\":60,\"skillsAtk\":[],\"skillsDefense\":[]},{\"url\":\"assets/cards/ninja-azul.jpeg\",\"name\":\"Ninja Azul - Sombra da Noite\",\"backgroundTop\":\"#364D83\",\"backgroundBottom\":\"#E1BDA3\",\"atk\":7,\"health\":60,\"skillsAtk\":[],\"skillsDefense\":[]},{\"url\":\"assets/cards/ninja-laranja.jpeg\",\"name\":\"Ninja Laranja - Coração Valente\",\"backgroundTop\":\"#FF0000\",\"backgroundBottom\":\"#FDFF6B\",\"atk\":10,\"health\":60,\"skillsAtk\":[],\"skillsDefense\":[]}]");

    /***/
  }),
  /***/"./src/app/mock/team-two.json": (
  /*!************************************!*\
    !*** ./src/app/mock/team-two.json ***!
    \************************************/
  /*! exports provided: 0, 1, 2, default */
  /***/
  function _src_app_mock_teamTwoJson(module) {
    module.exports = JSON.parse("[{\"url\":\"assets/cards/ninja-verde.jpeg\",\"name\":\"Ninja Verde - Forte como Rocha\",\"backgroundTop\":\"#2D3539\",\"backgroundBottom\":\"#E5D0B1\",\"atk\":12,\"health\":60,\"skillsAtk\":[],\"skillsDefense\":[]},{\"url\":\"assets/cards/ninja-branco.jpeg\",\"name\":\"Ninja Branco - Mestre Silencioso\",\"backgroundTop\":\"#2D3539\",\"backgroundBottom\":\"#E5D0B1\",\"atk\":8,\"health\":60,\"skillsAtk\":[],\"skillsDefense\":[]},{\"url\":\"assets/cards/ninja-roxa.jpeg\",\"name\":\"Ninja Roxa - Olhos da Esperança\",\"backgroundTop\":\"#202D80\",\"backgroundBottom\":\"#F7B5E1\",\"atk\":8,\"health\":60,\"skillsAtk\":[],\"skillsDefense\":[]}]");

    /***/
  }),
  /***/"./src/app/screens/battle/battle.component.css": (
  /*!*****************************************************!*\
    !*** ./src/app/screens/battle/battle.component.css ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_screens_battle_battleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n@media (min-width: 768px){\r\n    .background-image-div {\r\n        height: 100vh;\r\n        width: 100vw;\r\n        background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.75)), /* Camada de transparência */\r\n                    url('/assets/screens/background.png'); /* URL da imagem */\r\n        background-size: cover; /* Ajusta a imagem para cobrir toda a tela */\r\n        background-position: center; /* Centraliza a imagem */\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: space-around;\r\n    }\r\n\r\n    /*Mensagens em cima na esquerda*/\r\n    .container-info {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n    }\r\n\r\n    .info {\r\n        border: 5px solid #186D6E;\r\n        background-color: #D9D9D9;\r\n        border-radius: 50px;\r\n        width: 150px;\r\n        height: 60px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin-top: 10px;\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .info p {\r\n        color: #186D6E;\r\n        font-size: 24px;\r\n        text-align: center;\r\n        font-weight: bold;\r\n    }\r\n\r\n    /*Mensagens em baixo na esquerda*/\r\n    .recolherAtos{\r\n        border-radius: 50%;\r\n        width: 60px;\r\n        height: 60px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #058a3d;\r\n        position: absolute;\r\n        bottom: 10px;\r\n        left: 10px;\r\n        cursor: pointer;\r\n        border: none;\r\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    }\r\n\r\n    .recolherAtos p {\r\n        color: white;\r\n        font-weight: bold;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .info-msg {\r\n        border: 5px solid #186D6E;\r\n        background-color: #D9D9D9;\r\n        border-radius: 10px;\r\n        width: 380px;\r\n        height: 60px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: flex-start;\r\n        padding-left: 10px;\r\n        position: absolute;\r\n        bottom: 10px;\r\n        left: 10px;\r\n    }\r\n\r\n    .fases {\r\n        position: absolute;\r\n        bottom: 10px;\r\n        left: 10px;\r\n    }\r\n\r\n    .closeActs {\r\n        position: absolute;\r\n        right: 0;\r\n        top: -20px;\r\n    }\r\n\r\n    .btn-fases {\r\n        border: 5px solid #186D6E;\r\n        background-color: #D9D9D9;\r\n        border-radius: 10px;\r\n        width: 200px;\r\n        height: 60px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        padding: 0 10px;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .btn-compra {\r\n        border: 3px solid #186D6E;\r\n    }\r\n\r\n    .txt-compra {\r\n        color: #186D6E;\r\n    }\r\n\r\n    .btn-ativo-compra {\r\n        background-color: #186D6E;\r\n\r\n        .txt-compra {\r\n            color: white;\r\n        }\r\n    }\r\n    \r\n    .btn-itens {\r\n        border: 3px solid #058a3d;\r\n    }\r\n\r\n    .txt-itens {\r\n        color: #058a3d;\r\n    }\r\n\r\n    .btn-itens:hover {\r\n        background-color: #058a3d;\r\n        transition: all 0.5s;\r\n        cursor: pointer;\r\n        \r\n        .txt-itens {\r\n            color: white;\r\n        }\r\n    }\r\n\r\n    .btn-ativo-itens {\r\n        background-color: #058a3d;\r\n        \r\n        .txt-itens {\r\n            color: white;\r\n        }\r\n    }\r\n\r\n    .btn-batalha {\r\n        border: 3px solid red;\r\n    }\r\n\r\n    .txt-batalha {\r\n        color: red;\r\n    }\r\n\r\n    .btn-batalha:hover {\r\n        background-color: red;\r\n        transition: all 0.5s;\r\n        cursor: pointer;\r\n        \r\n        .txt-batalha {\r\n            color: white;\r\n        };\r\n    }\r\n\r\n    .btn-ativo-batalha {\r\n        background-color: red;\r\n\r\n        .txt-batalha {\r\n            color: white;\r\n        }\r\n    }\r\n\r\n    .no-hover {\r\n        pointer-events: none;\r\n    }\r\n\r\n    .forbidden-action {\r\n        pointer-events: none;\r\n    }\r\n\r\n    .btn-fim {\r\n        border: 3px solid blue;\r\n    }\r\n\r\n    .btn-ativo-fim {\r\n        background-color: blue;\r\n\r\n        .txt-fim {\r\n            color: white;\r\n        }\r\n    }\r\n\r\n    .btn-fim:hover {\r\n        background-color: blue;\r\n        transition: all 0.5s;\r\n        cursor: pointer;\r\n        \r\n        .txt-fim {\r\n            color: white;\r\n        };\r\n    }\r\n\r\n    .txt-fim {\r\n        color: blue;\r\n    }\r\n\r\n    .my-turn-text {\r\n        font-weight: bold;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .your-turn-text {\r\n        color: #FF0000;\r\n        font-weight: bold;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .text {\r\n        font-weight: bold;\r\n        font-size: 16px;\r\n    }\r\n\r\n    /*Área de batalha*/\r\n    .space-card {\r\n        width: 100px;\r\n        height: 190px;\r\n        background-color: #737373;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .space-opponent-cards {\r\n        display: flex;\r\n        width: 340px;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .space-battle-cards-opponent {\r\n        display: flex;\r\n        width: 580px;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .space-battle-cards-ally {\r\n        display: flex;\r\n        width: 580px;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .space-ally-cards {\r\n        display: flex;\r\n        width: 340px;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px){\r\n    .background-image-div {\r\n        width: 100vw;\r\n        height: 100vh;\r\n        overflow: auto;\r\n        gap: 10px;\r\n        background-image: url('/assets/screens/background.png');\r\n        background-size: auto; /* Ajusta a imagem para cobrir toda a tela */\r\n        background-position: center; /* Centraliza a imagem */\r\n        background-attachment: fixed;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-around;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .container-info {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        z-index: 10px;\r\n    }\r\n\r\n    .info {\r\n        border: 2px solid #186D6E;\r\n        background-color: #D9D9D9;\r\n        border-radius: 50px;\r\n        width: 50px;\r\n        height: 30px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin-top: 10px;\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .info p {\r\n        color: #186D6E;\r\n        font-size: 14px;\r\n        text-align: center;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .info-msg {\r\n        border: 5px solid #186D6E;\r\n        background-color: #D9D9D9;\r\n        border-radius: 10px;\r\n        width: 380px;\r\n        height: 60px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: flex-start;\r\n        padding-left: 10px;\r\n        position: fixed;\r\n        bottom: 10px;\r\n        left: 10px;\r\n    }\r\n\r\n    .recolherAtos{\r\n        border-radius: 50%;\r\n        width: 50px;\r\n        height: 50px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #FF0000;\r\n        border: 5px solid white;\r\n        position: absolute;\r\n        bottom: 10px;\r\n        left: 10px;\r\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n        border: none;\r\n    }\r\n\r\n    .recolherAtos p {\r\n        color: white;\r\n        font-weight: bold;\r\n        font-size: 10px;\r\n    }\r\n\r\n    .fases {\r\n        position: absolute;\r\n        bottom: 10px;\r\n        left: 10px;\r\n    }\r\n\r\n    .closeActs {\r\n        position: absolute;\r\n        right: 0;\r\n        top: -20px;\r\n    }\r\n\r\n    .btn-fases {\r\n        border: 5px solid #186D6E;\r\n        background-color: #D9D9D9;\r\n        border-radius: 10px;\r\n        width: 150px;\r\n        height: 60px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        padding: 0 10px;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .btn-itens {\r\n        border: 3px solid #058a3d;\r\n    }\r\n\r\n    .txt-itens {\r\n        color: #058a3d;\r\n    }\r\n\r\n    .btn-ativo-itens {\r\n        background-color: #058a3d;\r\n        \r\n        .txt-itens {\r\n            color: white;\r\n        }\r\n    }\r\n\r\n    .btn-batalha {\r\n        border: 3px solid red;\r\n    }\r\n\r\n    .txt-batalha {\r\n        color: red;\r\n    }\r\n\r\n    .btn-ativo-batalha {\r\n        background-color: red;\r\n\r\n        .txt-batalha {\r\n            color: white;\r\n        }\r\n    }\r\n\r\n    .no-hover {\r\n        pointer-events: none;\r\n    }\r\n\r\n    .forbidden-action {\r\n        pointer-events: none;\r\n    }\r\n    \r\n    .btn-fim {\r\n        border: 3px solid blue;\r\n    }\r\n\r\n    .btn-ativo-fim {\r\n        background-color: blue;\r\n\r\n        .txt-fim {\r\n            color: white;\r\n        }\r\n    }\r\n\r\n    .txt-fim {\r\n        color: blue;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .my-turn-text {\r\n        font-weight: bold;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .your-turn-text {\r\n        color: #FF0000;\r\n        font-weight: bold;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .text {\r\n        font-weight: bold;\r\n        font-size: 16px;\r\n    }\r\n\r\n    /*Área de Batalha*/\r\n\r\n    .space-card {\r\n        width: 90px;\r\n        height: 180px;\r\n        background-color: #737373;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .space-opponent-cards {\r\n        display: flex;\r\n        width: 290px;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .space-battle-cards-opponent {\r\n        display: flex;\r\n        width: 100vw;\r\n        justify-content: space-around;\r\n    }\r\n\r\n    .space-battle-cards-ally {\r\n        display: flex;\r\n        width: 100vw;\r\n        justify-content: space-around;\r\n    }\r\n\r\n    .space-ally-cards {\r\n        display: flex;\r\n        width: 290px;\r\n        justify-content: space-between;\r\n        margin-bottom: 60px;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9iYXR0bGUvYmF0dGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaO3lEQUNpRCxFQUFFLGtCQUFrQjtRQUNyRSxzQkFBc0IsRUFBRSw0Q0FBNEM7UUFDcEUsMkJBQTJCLEVBQUUsd0JBQXdCO1FBQ3JELGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLDZCQUE2QjtJQUNqQzs7SUFFQSxnQ0FBZ0M7SUFDaEM7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLE1BQU07SUFDVjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjs7SUFFQSxpQ0FBaUM7SUFDakM7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLFlBQVk7UUFDWiw0Q0FBNEM7SUFDaEQ7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0kseUJBQXlCOztRQUV6QjtZQUNJLFlBQVk7UUFDaEI7SUFDSjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLGVBQWU7O1FBRWY7WUFDSSxZQUFZO1FBQ2hCO0lBQ0o7O0lBRUE7UUFDSSx5QkFBeUI7O1FBRXpCO1lBQ0ksWUFBWTtRQUNoQjtJQUNKOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixlQUFlOztRQUVmO1lBQ0ksWUFBWTtRQUNoQixDQUFBO0lBQ0o7O0lBRUE7UUFDSSxxQkFBcUI7O1FBRXJCO1lBQ0ksWUFBWTtRQUNoQjtJQUNKOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksc0JBQXNCOztRQUV0QjtZQUNJLFlBQVk7UUFDaEI7SUFDSjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsZUFBZTs7UUFFZjtZQUNJLFlBQVk7UUFDaEIsQ0FBQTtJQUNKOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQSxrQkFBa0I7SUFDbEI7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osOEJBQThCO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLFNBQVM7UUFDVCx1REFBdUQ7UUFDdkQscUJBQXFCLEVBQUUsNENBQTRDO1FBQ25FLDJCQUEyQixFQUFFLHdCQUF3QjtRQUNyRCw0QkFBNEI7UUFDNUIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0Isc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxNQUFNO1FBQ04sYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0Isa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7UUFDViw0Q0FBNEM7UUFDNUMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0kseUJBQXlCOztRQUV6QjtZQUNJLFlBQVk7UUFDaEI7SUFDSjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHFCQUFxQjs7UUFFckI7WUFDSSxZQUFZO1FBQ2hCO0lBQ0o7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxzQkFBc0I7O1FBRXRCO1lBQ0ksWUFBWTtRQUNoQjtJQUNKOztJQUVBO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUEsa0JBQWtCOztJQUVsQjtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWiw4QkFBOEI7UUFDOUIsbUJBQW1CO0lBQ3ZCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9iYXR0bGUvYmF0dGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5iYWNrZ3JvdW5kLWltYWdlLWRpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSksIC8qIENhbWFkYSBkZSB0cmFuc3BhcsOqbmNpYSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCgnL2Fzc2V0cy9zY3JlZW5zL2JhY2tncm91bmQucG5nJyk7IC8qIFVSTCBkYSBpbWFnZW0gKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBBanVzdGEgYSBpbWFnZW0gcGFyYSBjb2JyaXIgdG9kYSBhIHRlbGEgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRyYWxpemEgYSBpbWFnZW0gKi9cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAvKk1lbnNhZ2VucyBlbSBjaW1hIG5hIGVzcXVlcmRhKi9cclxuICAgIC5jb250YWluZXItaW5mbyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjMTg2RDZFO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMTg2RDZFO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLypNZW5zYWdlbnMgZW0gYmFpeG8gbmEgZXNxdWVyZGEqL1xyXG4gICAgLnJlY29saGVyQXRvc3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU4YTNkO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWNvbGhlckF0b3MgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1tc2cge1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMxODZENkU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzODBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYXNlcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZUFjdHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmFzZXMge1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMxODZENkU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tY29tcHJhIHtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMTg2RDZFO1xyXG4gICAgfVxyXG5cclxuICAgIC50eHQtY29tcHJhIHtcclxuICAgICAgICBjb2xvcjogIzE4NkQ2RTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWF0aXZvLWNvbXByYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NkQ2RTtcclxuXHJcbiAgICAgICAgLnR4dC1jb21wcmEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLWl0ZW5zIHtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDU4YTNkO1xyXG4gICAgfVxyXG5cclxuICAgIC50eHQtaXRlbnMge1xyXG4gICAgICAgIGNvbG9yOiAjMDU4YTNkO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4taXRlbnM6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNThhM2Q7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC50eHQtaXRlbnMge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYXRpdm8taXRlbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNThhM2Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnR4dC1pdGVucyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1iYXRhbGhhIHtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnR4dC1iYXRhbGhhIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYmF0YWxoYTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAudHh0LWJhdGFsaGEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWF0aXZvLWJhdGFsaGEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHJcbiAgICAgICAgLnR4dC1iYXRhbGhhIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm8taG92ZXIge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JiaWRkZW4tYWN0aW9uIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbSB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWF0aXZvLWZpbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuXHJcbiAgICAgICAgLnR4dC1maW0ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmltOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAudHh0LWZpbSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC50eHQtZmltIHtcclxuICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAubXktdHVybi10ZXh0IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnlvdXItdHVybi10ZXh0IHtcclxuICAgICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAvKsOBcmVhIGRlIGJhdGFsaGEqL1xyXG4gICAgLnNwYWNlLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzczNzM7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGFjZS1vcHBvbmVudC1jYXJkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGFjZS1iYXR0bGUtY2FyZHMtb3Bwb25lbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDU4MHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuc3BhY2UtYmF0dGxlLWNhcmRzLWFsbHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDU4MHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuc3BhY2UtYWxseS1jYXJkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLmJhY2tncm91bmQtaW1hZ2UtZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3NjcmVlbnMvYmFja2dyb3VuZC5wbmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87IC8qIEFqdXN0YSBhIGltYWdlbSBwYXJhIGNvYnJpciB0b2RhIGEgdGVsYSAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudHJhbGl6YSBhIGltYWdlbSAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lci1pbmZvIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzE4NkQ2RTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMTg2RDZFO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tbXNnIHtcclxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjMTg2RDZFO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB3aWR0aDogMzgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVjb2xoZXJBdG9ze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucmVjb2xoZXJBdG9zIHAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhc2VzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlQWN0cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1mYXNlcyB7XHJcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgIzE4NkQ2RTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1pdGVucyB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzA1OGEzZDtcclxuICAgIH1cclxuXHJcbiAgICAudHh0LWl0ZW5zIHtcclxuICAgICAgICBjb2xvcjogIzA1OGEzZDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWF0aXZvLWl0ZW5zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU4YTNkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC50eHQtaXRlbnMge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYmF0YWxoYSB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC50eHQtYmF0YWxoYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWF0aXZvLWJhdGFsaGEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHJcbiAgICAgICAgLnR4dC1iYXRhbGhhIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm8taG92ZXIge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JiaWRkZW4tYWN0aW9uIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1maW0ge1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1hdGl2by1maW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcblxyXG4gICAgICAgIC50eHQtZmltIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudHh0LWZpbSB7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm15LXR1cm4tdGV4dCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC55b3VyLXR1cm4tdGV4dCB7XHJcbiAgICAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLyrDgXJlYSBkZSBCYXRhbGhhKi9cclxuXHJcbiAgICAuc3BhY2UtY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM3MzczO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc3BhY2Utb3Bwb25lbnQtY2FyZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuc3BhY2UtYmF0dGxlLWNhcmRzLW9wcG9uZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAuc3BhY2UtYmF0dGxlLWNhcmRzLWFsbHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGFjZS1hbGx5LWNhcmRzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIH1cclxuXHJcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/screens/battle/battle.component.ts": (
  /*!****************************************************!*\
    !*** ./src/app/screens/battle/battle.component.ts ***!
    \****************************************************/
  /*! exports provided: BattleComponent */
  /***/
  function _src_app_screens_battle_battleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BattleComponent", function () {
      return BattleComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _mock_team_one_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mock/team-one.json */"./src/app/mock/team-one.json");
    var _mock_team_one_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../mock/team-one.json */"./src/app/mock/team-one.json", 1);
    /* harmony import */
    var _mock_team_two_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mock/team-two.json */"./src/app/mock/team-two.json");
    var _mock_team_two_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../mock/team-two.json */"./src/app/mock/team-two.json", 1);
    /* harmony import */
    var src_app_services_abilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/abilities.service */"./src/app/services/abilities.service.ts");
    var BattleComponent = /*#__PURE__*/function () {
      function BattleComponent(activatedRoute, router) {
        _classCallCheck(this, BattleComponent);
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.recolherAtos = true;
        this.showDice = false;
        this.finalResult = 'Derrota';
        this.team = null;
        this.battle = false;
        this.attackAnimation = false;
        this.acction = 0;
        this.showCard = false;
        this.turnoOponente = false;
        this.showMsg = false;
        this.msg = '';
        this.showGameOverModal = false;
        this.endGameBool = false;
        this.showBattleField = false;
      }
      return _createClass(BattleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;
          this.audioPlayer = new Audio('assets/sounds/battle-song.mp3');
          this.audioPlayer.volume = 0.5;
          this.audioPlayer.loop = true;
          this.audioPlayer.play();
          this.activatedRoute.paramMap.subscribe(function (params) {
            _this4.team = +params.get('team');
            if (_this4.team === 0) {
              _this4.allyCards = _mock_team_one_json__WEBPACK_IMPORTED_MODULE_3__;
              _this4.opponentCards = _mock_team_two_json__WEBPACK_IMPORTED_MODULE_4__;
            } else {
              _this4.allyCards = _mock_team_two_json__WEBPACK_IMPORTED_MODULE_4__;
              _this4.opponentCards = _mock_team_one_json__WEBPACK_IMPORTED_MODULE_3__;
            }
          });
          this.acctionsInitial();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.audioPlayer.pause();
        }
      }, {
        key: "rollDice",
        value: function rollDice(character) {
          this.showDice = true;
          var ch = null;
          if (this.acctions.turn % 2 === 0) {
            ch = this.acctions.ally.find(function (ally) {
              return ally.personagem.url === character.personagem.url;
            });
          } else {
            ch = this.acctions.opponent.find(function (op) {
              return op.personagem.url === character.personagem.url;
            });
          }
          ch.jaRolouDado = true;
          ch.jaRolouDado;
          this.cardQueRolouODado = ch;
        }
      }, {
        key: "applyHability",
        value: function applyHability(ability, target) {
          console.log('aplicou a habilidade', ability, target);
          ability.apply(target);
          this.msg = ability.description;
          this.showMsg = true;
        }
      }, {
        key: "quemAtacou",
        value: function quemAtacou(character) {
          this.battle = true;
          this.msg = "Escolha o Oponente!";
          this.showMsg = true;
          this.cardQueAtacou = character;
          var ch = null;
          if (this.acctions.turn % 2 === 0) {
            ch = this.acctions.ally.find(function (ally) {
              return ally.personagem.url === character.personagem.url;
            });
          } else {
            ch = this.acctions.opponent.find(function (op) {
              return op.personagem.url === character.personagem.url;
            });
            console.log('7 - IA quemAtacou', ch);
          }
          console.log('8 - Saiu do quemAtacou');
        }
      }, {
        key: "foiAtacado",
        value: function foiAtacado(character) {
          var _this5 = this;
          this.showCard = true;
          this.characterDetail = character;
          this.attackAnimation = true;
          var ally = null;
          var opponent = null;
          //this.batalha(this.cardQueAtacou, character);
          if (this.acctions.turn % 2 === 0) {
            ally = this.acctions.ally.find(function (ally) {
              return ally.personagem.url === _this5.cardQueAtacou.personagem.url;
            });
            opponent = this.acctions.opponent.find(function (opp) {
              return opp.personagem.url === character.personagem.url;
            });
            //O oponente perde a vida, o card que atacou não pode mais atacar
            opponent.health -= this.cardQueAtacou.atk;
            ally.jaAtacou = true;
            ally.jaRolouDado = true;
            this.battle = false;
          } else {
            ally = this.acctions.ally.find(function (op) {
              return op.personagem.url === character.personagem.url;
            });
            opponent = this.acctions.opponent.find(function (al) {
              return al.personagem.url === _this5.cardQueAtacou.personagem.url;
            });
            console.log('9 - IA foiAtacado', character, ally, opponent);
            //O oponente perde a vida, o card que atacou não pode mais atacar
            ally.health -= this.cardQueAtacou.atk;
            opponent.jaAtacou = true;
            opponent.jaRolouDado = true;
            this.battle = false;
          }
          if (opponent.health <= 0) {
            opponent.health = 0;
          }
          if (ally.health <= 0) {
            ally.health = 0;
          }
          // Após cada ataque ou no final do turno
          this.checkGameOver();
        }
      }, {
        key: "closeDiceModal",
        value: function closeDiceModal(result) {
          this.showDice = false;
          //Aqui só vou fazer a ideia de colocar os dados, mas é preciso olhar regra a regra pra ver o que acontece
          //P. ex.: Uma habilidade pode negar outra, fora as habilidades que acabam em determinado turno.
          this.cardQueRolouODado.habAtiva = result;
          var ability = src_app_services_abilities_service__WEBPACK_IMPORTED_MODULE_5__["abilities"][result];
          this.applyHability(ability, this.cardQueRolouODado);
        }
      }, {
        key: "hadnleRecolherAtos",
        value: function hadnleRecolherAtos() {
          this.recolherAtos = !this.recolherAtos;
        }
      }, {
        key: "acctionsInitial",
        value: function acctionsInitial() {
          this.acctions = {
            ally: [],
            opponent: [],
            turn: 0
          };
          for (var i = 0; i < this.allyCards.length; i++) {
            this.acctions.ally[i] = {
              atk: this.allyCards[i].atk,
              health: this.allyCards[i].health,
              habAtiva: 0,
              jaAtacou: false,
              jaRolouDado: false,
              personagem: this.allyCards[i]
            };
            this.acctions.opponent[i] = {
              atk: this.opponentCards[i].atk,
              health: this.opponentCards[i].health,
              habAtiva: 0,
              jaAtacou: false,
              jaRolouDado: false,
              personagem: this.opponentCards[i]
            };
          }
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          this.router.navigate(['/']);
        }
      }, {
        key: "showDetails",
        value: function showDetails(event) {
          this.showCard = true;
          this.characterDetail = event;
          this.attackAnimation = false;
        }
      }, {
        key: "closeDetails",
        value: function closeDetails() {
          this.showCard = false;
        }
      }, {
        key: "onAcction",
        value: function onAcction(event) {
          switch (event) {
            case 0:
              if (this.acction <= event) this.acction = 0;
              break;
            case 1:
              if (this.acction <= event) this.acction = 1;
              break;
            case 2:
              if (this.acction <= event) this.acction = 2;
              break;
            case 3:
              if (this.acction <= event) this.acction = 3;
              this.endTurn();
              break;
          }
        }
      }, {
        key: "batalha",
        value: function batalha(attacker, target) {
          var _this6 = this;
          setTimeout(function () {
            _this6.showBattleField = true;
          }, 2000);
          this.cardQueAtacou = attacker;
          this.cardQueFoiAtacado = target;
        }
      }, {
        key: "resetAbilities",
        value: function resetAbilities() {
          if (this.acctions.turn % 2 === 0) {
            this.acctions.opponent.forEach(function (opponent) {
              opponent.habAtiva = 0; // Volta a zero
              opponent.jaRolouDado = false; // Define como falso
              opponent.jaAtacou = false;
              opponent.atk = opponent.personagem.atk;
            });
          } else {
            this.acctions.ally.forEach(function (ally) {
              ally.habAtiva = 0; // Volta a zero
              ally.jaRolouDado = false; // Define como falso
              ally.jaAtacou = false;
              ally.atk = ally.personagem.atk;
            });
          }
        }
      }, {
        key: "endTurn",
        value: function endTurn() {
          var _this7 = this;
          if (this.acctions.turn % 2 === 0) this.msg = "Vez do Oponente!";else this.msg = "Sua Vez!";
          if (!this.endGameBool) this.showMsg = true;
          setTimeout(function () {
            _this7.turnoOponente = !_this7.turnoOponente;
          }, 1000);
          this.acctions.turn += 1;
          this.AITurn();
          this.resetAbilities();
        }
      }, {
        key: "closeMsg",
        value: function closeMsg() {
          this.showMsg = false;
        }
      }, {
        key: "closeModalBattle",
        value: function closeModalBattle() {
          this.cardQueAtacou = null;
          this.cardQueFoiAtacado = null;
          this.showBattleField = false;
        }
        /* TURNO IA */
      }, {
        key: "AITurn",
        value: function AITurn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var oppVivos, opVivos, _iterator, _step, op, target, _iterator2, _step2, _op;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.acctions.turn % 2 === 1)) {
                    _context.next = 43;
                    break;
                  }
                  oppVivos = this.acctions.opponent.filter(function (op) {
                    return op.health > 0;
                  });
                  opVivos = 0;
                  _iterator = _createForOfIteratorHelper(oppVivos);
                  _context.prev = 4;
                  _iterator.s();
                case 6:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 32;
                    break;
                  }
                  op = _step.value;
                  console.log('1 - IA character', op.personagem.name);
                  opVivos += 1;
                  console.log('2 - IA vivos', opVivos);
                  // Rola o dado se necessário
                  if (op.jaRolouDado) {
                    _context.next = 17;
                    break;
                  }
                  console.log('3 - IA vai rolar o dado');
                  _context.next = 15;
                  return this.wait(2000);
                case 15:
                  _context.next = 17;
                  return this.rollDice(op);
                case 17:
                  if (op.jaAtacou) {
                    _context.next = 27;
                    break;
                  }
                  console.log('6 - IA Atacou');
                  _context.next = 21;
                  return this.wait(5000);
                case 21:
                  _context.next = 23;
                  return this.quemAtacou(op);
                case 23:
                  _context.next = 25;
                  return this.wait(2000);
                case 25:
                  // Espera mais 2 segundos
                  target = this.findLowestHealthAlly();
                  this.foiAtacado(target);
                case 27:
                  console.log('Entrou no timeout 1');
                  _context.next = 30;
                  return this.wait(2000);
                case 30:
                  _context.next = 6;
                  break;
                case 32:
                  _context.next = 37;
                  break;
                case 34:
                  _context.prev = 34;
                  _context.t0 = _context["catch"](4);
                  _iterator.e(_context.t0);
                case 37:
                  _context.prev = 37;
                  _iterator.f();
                  return _context.finish(37);
                case 40:
                  _iterator2 = _createForOfIteratorHelper(oppVivos);
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      _op = _step2.value;
                      _op.jaRolouDado = false; // Reseta o estado de rolagem
                      _op.jaAtacou = false; // Reseta o estado de ataque
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  if (opVivos === oppVivos.length) {
                    console.log('Turno finalizado.');
                    this.endTurn();
                  }
                case 43:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[4, 34, 37, 40]]);
          }));
        }
      }, {
        key: "wait",
        value: function wait(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }, {
        key: "findLowestHealthAlly",
        value: function findLowestHealthAlly() {
          // Filtra apenas aliados com health > 0
          var aliveAllies = this.acctions.ally.filter(function (al) {
            return al.health > 0;
          });
          if (aliveAllies.length === 0) return undefined; // Nenhum aliado disponível
          // Encontra o menor valor de health
          var minHealth = Math.min.apply(Math, _toConsumableArray(aliveAllies.map(function (al) {
            return al.health;
          })));
          // Filtra aliados que possuem esse menor valor de health
          var candidates = aliveAllies.filter(function (al) {
            return al.health === minHealth;
          });
          // Retorna aleatoriamente um aliado entre os empatados
          return candidates[Math.floor(Math.random() * candidates.length)];
        }
      }, {
        key: "checkGameOver",
        value: function checkGameOver() {
          // Verifica se o jogador (usuário) perdeu
          var userLost = this.acctions.ally.every(function (player) {
            return player.health <= 0;
          });
          // Verifica se o oponente (IA) perdeu
          var opponentLost = this.acctions.opponent.every(function (op) {
            return op.health <= 0;
          });
          if (userLost) {
            console.log("Você perdeu!");
            this.finalResult = 'Derrota!';
            this.endGame(); // Chama a função para finalizar o jogo com derrota
          } else if (opponentLost) {
            this.finalResult = 'Vitória!';
            this.endGame(); // Chama a função para finalizar o jogo com vitória
          }
          if (userLost || opponentLost) this.endGameBool = true;
        }
      }, {
        key: "endGame",
        value: function endGame() {
          var audio = document.querySelector('audio');
          if (audio) {
            audio.pause();
            this.msg = 'Fim de Jogo.';
          }
          this.showGameOverModal = true;
        }
      }, {
        key: "closeGameOver",
        value: function closeGameOver() {
          this.showGameOverModal = false;
          this.goToHome();
        }
      }]);
    }();
    BattleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    BattleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-battle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battle.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/screens/battle/battle.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battle.component.css */"./src/app/screens/battle/battle.component.css"))["default"]]
    })], BattleComponent);

    /***/
  }),
  /***/"./src/app/screens/home/home.component.css": (
  /*!*************************************************!*\
    !*** ./src/app/screens/home/home.component.css ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_screens_home_homeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@media (min-width: 768px){\r\n  .background-image-div {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('/assets/screens/background.png');\r\n    background-size: cover; /* Ajusta a imagem para cobrir toda a tela */\r\n    background-position: center; /* Centraliza a imagem */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  .select-team {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    width: 100vw;\r\n  }\r\n    \r\n  .team {\r\n    width: 420px;\r\n    height: 210px;\r\n    border: none;\r\n    \r\n    display: flex;\r\n    align-items: flex-end;\r\n    cursor: pointer;\r\n    position: relative;\r\n    padding: 0;\r\n  }\r\n\r\n  .team-left {\r\n    background: linear-gradient(to right, #ff69b4, #1e90ff, #ffa500);\r\n  }\r\n\r\n  .team-right {\r\n    background: linear-gradient(to right, #5E8463, #B6B6B6, #31316E);\r\n  }\r\n\r\n  .selected {\r\n    outline: 1rem solid yellow; /* Usando outline em vez de border */\r\n    transition: outline-color 1s;\r\n  }\r\n\r\n  .container-rosa{\r\n    height: 200px;\r\n    overflow: hidden;\r\n    margin-left: -30px;\r\n    width: 250px;\r\n  }\r\n\r\n  .ninja-rosa {\r\n    height: 211px;\r\n  }\r\n\r\n  .container-azul{\r\n    height: 270px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n  }\r\n\r\n  .ninja-azul {\r\n    height: 443px;\r\n  }\r\n\r\n  .container-laranja{\r\n    height: 225px;\r\n    overflow: hidden;\r\n    margin-left: 30px;\r\n  }\r\n\r\n  .ninja-laranja {\r\n    height: 300px;\r\n  }\r\n\r\n  .container-verde{\r\n    height: 185px;\r\n    overflow: hidden;\r\n    margin-left: -30px;\r\n    width: 390px;\r\n  }\r\n\r\n  .ninja-verde {\r\n    height: 251px;\r\n  }\r\n\r\n  .container-branco{\r\n    position: absolute;\r\n    margin-bottom: -3px;\r\n    margin-left: 80px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .ninja-branco {\r\n    height: 251px;\r\n  }\r\n\r\n  .container-roxa{\r\n    margin-left: 60px;\r\n    margin-right: -10px;\r\n    margin-bottom: -3px;\r\n  }\r\n\r\n  .ninja-roxa {\r\n    height: 185px;\r\n  }\r\n\r\n  .button {\r\n    background-color: #5F5E84;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    border-radius: 10px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 400px;\r\n    height: 90px;\r\n  }\r\n\r\n  .button p {\r\n    font-size: 56px;\r\n  }\r\n\r\n  .button:hover {\r\n    background-color: #8c8abe;\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .button-disable {\r\n    background-color: #CCC;\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n  }\r\n\r\n  .title {\r\n    color: black;\r\n    font-weight: bold;\r\n    font-size: 56px;\r\n    text-align: center;\r\n  }\r\n\r\n  .team-text {\r\n    margin-top: 20px;\r\n    color: black;\r\n    font-size: 28px;\r\n    text-align: center;\r\n  }\r\n\r\n  .loader-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.8); /* Fundo semi-transparente */\r\n    z-index: 1000; /* Certifique-se de que o loader apareça acima de outros elementos */\r\n  }\r\n\r\n  .loader {\r\n    border: 6px solid #f3f3f3; /* Cor de fundo do círculo */\r\n    border-top: 6px solid #3498db; /* Cor da borda superior (efeito de giro) */\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-animation: spin 1s linear infinite;\r\n            animation: spin 1s linear infinite; /* Animação de rotação */\r\n  }\r\n\r\n  /* Animação de rotação */\r\n  @-webkit-keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .background-image-div {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-y: auto;\r\n    background-image: url('/assets/screens/background.png');\r\n    background-size: auto; /* Ajusta a imagem para cobrir toda a tela */\r\n    background-position: center; /* Centraliza a imagem */\r\n    background-attachment: fixed;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    flex-direction: column;\r\n    \r\n  }\r\n\r\n  .select-team {\r\n    display: flex;\r\n    flex-direction: column; /* Alinhar as equipes verticalmente */\r\n    margin-top: 20px;\r\n    gap: 20px;\r\n\r\n  }\r\n\r\n  .team {\r\n    width: 90vw; /* Equipe ocupa a largura total */\r\n    height: 210px; /* Ajusta a altura automaticamente */\r\n    display: flex;\r\n    align-items: flex-end;\r\n    cursor: pointer;\r\n    position: relative;\r\n    padding: 0;\r\n    border: none;\r\n  }\r\n\r\n  .team-left {\r\n    background: linear-gradient(to right, #ff69b4, #1e90ff, #ffa500);\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .team-right {\r\n    background: linear-gradient(to right, #5E8463, #B6B6B6, #31316E);\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .selected {\r\n    outline: 1rem solid yellow; /* Usando outline em vez de border */\r\n    transition: outline-color 1s;\r\n  }\r\n\r\n  .container-rosa{\r\n    height: 200px;\r\n    overflow: hidden;\r\n    margin-left: -40px;\r\n    width: 250px;\r\n  }\r\n\r\n  .ninja-rosa {\r\n    height: 211px;\r\n  }\r\n\r\n  .container-azul{\r\n    height: 250px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n  .ninja-azul {\r\n    height: 345px;\r\n  }\r\n\r\n  .container-laranja{\r\n    height: 225px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .ninja-laranja {\r\n    height: 300px;\r\n  }\r\n\r\n  .container-verde{\r\n    height: 185px;\r\n    overflow: hidden;\r\n    margin-left: -90px;\r\n    width: 390px;\r\n  }\r\n\r\n  .ninja-verde {\r\n    height: 251px;\r\n  }\r\n\r\n  .container-branco{\r\n    position: absolute;\r\n    margin-bottom: -3px;\r\n    left: 0;\r\n    right: 0;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .ninja-branco {\r\n    height: 251px;\r\n  }\r\n\r\n  .container-roxa{\r\n    margin-left: -50px;\r\n    margin-bottom: -3px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .ninja-roxa {\r\n    height: 185px;\r\n  }\r\n\r\n  .button {\r\n    background-color: #5F5E84;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    border-radius: 10px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 90vw;\r\n    height: 60px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .button-disable {\r\n    background-color: #CCC;\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n  }\r\n\r\n  .button p {\r\n    font-size: 32px; /* Texto do botão menor para mobile */\r\n  }\r\n\r\n  .title {\r\n    color: black;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    width: 90vw;\r\n  }\r\n\r\n  .team-text {\r\n    color: black;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 10px 0 20px 0;\r\n  }\r\n\r\n  .loader {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWix1REFBdUQ7SUFDdkQsc0JBQXNCLEVBQUUsNENBQTRDO0lBQ3BFLDJCQUEyQixFQUFFLHdCQUF3QjtJQUNyRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7O0lBRVosYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdFQUFnRTtFQUNsRTs7RUFFQTtJQUNFLGdFQUFnRTtFQUNsRTs7RUFFQTtJQUNFLDBCQUEwQixFQUFFLG9DQUFvQztJQUNoRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQ0FBb0MsRUFBRSw0QkFBNEI7SUFDbEUsYUFBYSxFQUFFLG9FQUFvRTtFQUNyRjs7RUFFQTtJQUNFLHlCQUF5QixFQUFFLDRCQUE0QjtJQUN2RCw2QkFBNkIsRUFBRSwyQ0FBMkM7SUFDMUUsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMENBQWtDO1lBQWxDLGtDQUFrQyxFQUFFLHdCQUF3QjtFQUM5RDs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSxLQUFLLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8seUJBQXlCLEVBQUU7RUFDcEM7RUFIQTtJQUNFLEtBQUssdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtFQUNwQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1REFBdUQ7SUFDdkQscUJBQXFCLEVBQUUsNENBQTRDO0lBQ25FLDJCQUEyQixFQUFFLHdCQUF3QjtJQUNyRCw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isc0JBQXNCOztFQUV4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0IsRUFBRSxxQ0FBcUM7SUFDN0QsZ0JBQWdCO0lBQ2hCLFNBQVM7O0VBRVg7O0VBRUE7SUFDRSxXQUFXLEVBQUUsaUNBQWlDO0lBQzlDLGFBQWEsRUFBRSxvQ0FBb0M7SUFDbkQsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnRUFBZ0U7SUFDaEUsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdFQUFnRTtJQUNoRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsMEJBQTBCLEVBQUUsb0NBQW9DO0lBQ2hFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZSxFQUFFLHFDQUFxQztFQUN4RDs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLmJhY2tncm91bmQtaW1hZ2UtZGl2IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvc2NyZWVucy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogQWp1c3RhIGEgaW1hZ2VtIHBhcmEgY29icmlyIHRvZGEgYSB0ZWxhICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRyYWxpemEgYSBpbWFnZW0gKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdC10ZWFtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG4gICAgXHJcbiAgLnRlYW0ge1xyXG4gICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAudGVhbS1sZWZ0IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNjliNCwgIzFlOTBmZiwgI2ZmYTUwMCk7XHJcbiAgfVxyXG5cclxuICAudGVhbS1yaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1RTg0NjMsICNCNkI2QjYsICMzMTMxNkUpO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkIHtcclxuICAgIG91dGxpbmU6IDFyZW0gc29saWQgeWVsbG93OyAvKiBVc2FuZG8gb3V0bGluZSBlbSB2ZXogZGUgYm9yZGVyICovXHJcbiAgICB0cmFuc2l0aW9uOiBvdXRsaW5lLWNvbG9yIDFzO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1yb3Nhe1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAubmluamEtcm9zYSB7XHJcbiAgICBoZWlnaHQ6IDIxMXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1henVse1xyXG4gICAgaGVpZ2h0OiAyNzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG5cclxuICAubmluamEtYXp1bCB7XHJcbiAgICBoZWlnaHQ6IDQ0M3B4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1sYXJhbmphe1xyXG4gICAgaGVpZ2h0OiAyMjVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB9XHJcblxyXG4gIC5uaW5qYS1sYXJhbmphIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXZlcmRle1xyXG4gICAgaGVpZ2h0OiAxODVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbiAgfVxyXG5cclxuICAubmluamEtdmVyZGUge1xyXG4gICAgaGVpZ2h0OiAyNTFweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItYnJhbmNve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5uaW5qYS1icmFuY28ge1xyXG4gICAgaGVpZ2h0OiAyNTFweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItcm94YXtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgfVxyXG5cclxuICAubmluamEtcm94YSB7XHJcbiAgICBoZWlnaHQ6IDE4NXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUY1RTg0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICB9XHJcblxyXG4gIC5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhjOGFiZTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWRpc2FibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50ZWFtLXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5sb2FkZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7IC8qIEZ1bmRvIHNlbWktdHJhbnNwYXJlbnRlICovXHJcbiAgICB6LWluZGV4OiAxMDAwOyAvKiBDZXJ0aWZpcXVlLXNlIGRlIHF1ZSBvIGxvYWRlciBhcGFyZcOnYSBhY2ltYSBkZSBvdXRyb3MgZWxlbWVudG9zICovXHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICNmM2YzZjM7IC8qIENvciBkZSBmdW5kbyBkbyBjw61yY3VsbyAqL1xyXG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICMzNDk4ZGI7IC8qIENvciBkYSBib3JkYSBzdXBlcmlvciAoZWZlaXRvIGRlIGdpcm8pICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7IC8qIEFuaW1hw6fDo28gZGUgcm90YcOnw6NvICovXHJcbiAgfVxyXG5cclxuICAvKiBBbmltYcOnw6NvIGRlIHJvdGHDp8OjbyAqL1xyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJhY2tncm91bmQtaW1hZ2UtZGl2IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3NjcmVlbnMvYmFja2dyb3VuZC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bzsgLyogQWp1c3RhIGEgaW1hZ2VtIHBhcmEgY29icmlyIHRvZGEgYSB0ZWxhICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRyYWxpemEgYSBpbWFnZW0gKi9cclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnNlbGVjdC10ZWFtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBBbGluaGFyIGFzIGVxdWlwZXMgdmVydGljYWxtZW50ZSAqL1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGdhcDogMjBweDtcclxuXHJcbiAgfVxyXG5cclxuICAudGVhbSB7XHJcbiAgICB3aWR0aDogOTB2dzsgLyogRXF1aXBlIG9jdXBhIGEgbGFyZ3VyYSB0b3RhbCAqL1xyXG4gICAgaGVpZ2h0OiAyMTBweDsgLyogQWp1c3RhIGEgYWx0dXJhIGF1dG9tYXRpY2FtZW50ZSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudGVhbS1sZWZ0IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNjliNCwgIzFlOTBmZiwgI2ZmYTUwMCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLnRlYW0tcmlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNUU4NDYzLCAjQjZCNkI2LCAjMzEzMTZFKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgb3V0bGluZTogMXJlbSBzb2xpZCB5ZWxsb3c7IC8qIFVzYW5kbyBvdXRsaW5lIGVtIHZleiBkZSBib3JkZXIgKi9cclxuICAgIHRyYW5zaXRpb246IG91dGxpbmUtY29sb3IgMXM7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXJvc2F7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcblxyXG4gIC5uaW5qYS1yb3NhIHtcclxuICAgIGhlaWdodDogMjExcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWF6dWx7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5uaW5qYS1henVsIHtcclxuICAgIGhlaWdodDogMzQ1cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWxhcmFuamF7XHJcbiAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5uaW5qYS1sYXJhbmphIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXZlcmRle1xyXG4gICAgaGVpZ2h0OiAxODVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tbGVmdDogLTkwcHg7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbiAgfVxyXG5cclxuICAubmluamEtdmVyZGUge1xyXG4gICAgaGVpZ2h0OiAyNTFweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItYnJhbmNve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAubmluamEtYnJhbmNvIHtcclxuICAgIGhlaWdodDogMjUxcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXJveGF7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5uaW5qYS1yb3hhIHtcclxuICAgIGhlaWdodDogMTg1cHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RjVFODQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWRpc2FibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcblxyXG4gIC5idXR0b24gcCB7XHJcbiAgICBmb250LXNpemU6IDMycHg7IC8qIFRleHRvIGRvIGJvdMOjbyBtZW5vciBwYXJhIG1vYmlsZSAqL1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gIH1cclxuXHJcbiAgLnRlYW0tdGV4dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/screens/home/home.component.ts": (
  /*!************************************************!*\
    !*** ./src/app/screens/home/home.component.ts ***!
    \************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function _src_app_screens_home_homeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);
        this.router = router;
        this.selectedButtonIndex = -1;
        this.load = false;
        this.btnSelectTeamAudio = new Audio('assets/sounds/menu-selection.mp3');
        this.btnPlayAudio = new Audio('assets/sounds/transition.mp3');
      }
      return _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectButton",
        value: function selectButton(index) {
          this.selectedButtonIndex = index;
          this.btnSelectTeamAudio.play();
        }
      }, {
        key: "goToBattle",
        value: function goToBattle() {
          var _this8 = this;
          this.load = true;
          this.btnPlayAudio.play();
          setTimeout(function () {
            _this8.load = false;
            _this8.router.navigate(['/battle', _this8.selectedButtonIndex]);
          }, 500);
        }
      }]);
    }();
    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/screens/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */"./src/app/screens/home/home.component.css"))["default"]]
    })], HomeComponent);

    /***/
  }),
  /***/"./src/app/services/abilities.service.ts": (
  /*!***********************************************!*\
    !*** ./src/app/services/abilities.service.ts ***!
    \***********************************************/
  /*! exports provided: AbilitiesService, abilities */
  /***/
  function _src_app_services_abilitiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AbilitiesService", function () {
      return AbilitiesService;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "abilities", function () {
      return abilities;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AbilitiesService = /*#__PURE__*/_createClass(function AbilitiesService() {
      _classCallCheck(this, AbilitiesService);
    });
    AbilitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AbilitiesService);
    var abilities = {
      1: {
        description: 'Exausto: Zere o ataque',
        apply: function apply(target) {
          target.atk = 0;
        }
      },
      2: {
        description: 'Cansaço: Perca 5 de ataque',
        apply: function apply(target) {
          target.atk -= 5;
        }
      },
      3: {
        description: 'Confiante: Ganhe 5 de ataque',
        apply: function apply(target) {
          target.atk += 5;
        }
      },
      4: {
        description: 'Super Força: Cause o dobro de dano',
        apply: function apply(target) {
          target.atk *= 2;
        }
      },
      5: {
        description: 'Socorro médico: Cure 20',
        apply: function apply(target) {
          target.health += 20;
        }
      },
      6: {
        description: 'Revigorado: Cure 20 e aumente 10 de ataque',
        apply: function apply(target) {
          target.health += 20;
          target.atk += 10;
        }
      }
    };

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! C:\Users\isaac\Projetos\batalha-das-cartas\src\main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map