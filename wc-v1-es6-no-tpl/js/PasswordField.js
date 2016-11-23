function execPolyfill() {
(function(){
// CustomElementsV1.min.js v1 polyfill from https://github.com/webcomponents/webcomponentsjs/tree/v1/src/CustomElements/v1.
/*
 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';(function(){function q(a){return l.test(a)&&-1===r.indexOf(a)}function e(){this.a=new Map;this.l=new Map;this.o=new Map;this.m=new Set;this.D=new MutationObserver(this.F.bind(this));this.f=null;this.L=!0;this.h=!1;this.g(document)}var g=document,f=window,r="annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "),l=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/;e.prototype={J:function(a,b){function c(a){var b=m[a];if(void 0!==b&&
"function"!==typeof b)throw Error(d+" '"+a+"' is not a Function");return b}a=a.toString().toLowerCase();if("function"!==typeof b)throw new TypeError("constructor must be a Constructor");if(!q(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.has(a))throw Error("An element with name '"+a+"' is already defined");if(this.l.has(b))throw Error("Definition failed for '"+a+"': The constructor is already used.");var d=a,m=b.prototype;if("object"!==typeof m)throw new TypeError("Definition failed for '"+
a+"': constructor.prototype must be an object");var e=c("connectedCallback"),f=c("disconnectedCallback"),h=c("attributeChangedCallback");this.a.set(d,{name:a,localName:d,constructor:b,w:e,A:f,v:h,K:b.observedAttributes||[]});this.l.set(b,d);this.b(g.childNodes);if(e=this.o.get(d))e.resolve(void 0),this.o.delete(d)},get:function(a){return(a=this.a.get(a))?a.constructor:void 0},M:function(a){if(!l.test(a))return Promise.reject(new SyntaxError("The element name '"+a+"' is not valid."));if(this.a.has(a))return Promise.resolve();
var b={B:null};b.B=new Promise(function(a){b.resolve=a});this.o.set(a,b);return b.B},C:function(){this.h&&(console.warn("flush!!!"),this.m.forEach(function(a){this.s(a.takeRecords())},this))},H:function(a){this.f=a},g:function(a){a.c=new MutationObserver(this.s.bind(this));a.c.observe(a,{childList:!0,subtree:!0});this.h&&this.m.add(a.c)},I:function(a){a.c&&(a.c.disconnect(),a.c=null,this.h&&this.m.delete(a.c))},s:function(a){for(var b=0;b<a.length;b++){var c=a[b];"childList"===c.type&&(this.b(c.addedNodes),
this.G(c.removedNodes))}},b:function(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.nodeType===Node.ELEMENT_NODE){this.I(c);c=g.createTreeWalker(c,NodeFilter.SHOW_ELEMENT,null,!1);do{var d=c.currentNode,e=this.a.get(d.localName);e&&(d.j||this.u(d,e,!0),d.j&&!d.i&&(d.i=!0,e&&e.w&&e.w.call(d)));d.shadowRoot&&this.b(d.shadowRoot.childNodes);if("LINK"===d.tagName){var f=function(){var a=d;return function(){a.removeEventListener("load",f);this.g(a.import);this.b(a.import.childNodes)}.bind(this)}.call(this);
d.import?f():d.addEventListener("load",f)}}while(c.nextNode())}}},G:function(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.nodeType===Node.ELEMENT_NODE){this.g(c);c=g.createTreeWalker(c,NodeFilter.SHOW_ELEMENT,null,!1);do{var d=c.currentNode;if(d.j&&d.i){d.i=!1;var e=this.a.get(d.localName);e&&e.A&&e.A.call(d)}}while(c.nextNode())}}},u:function(a,b,c){a.__proto__=b.constructor.prototype;c&&(this.H(a),a.j=!0,new b.constructor,console.assert(null==this.f));c=b.K;if(b.v&&0<c.length)for(this.D.observe(a,
{attributes:!0,attributeOldValue:!0,attributeFilter:c}),b=0;b<c.length;b++){var d=c[b];if(a.hasAttribute(d)){var e=a.getAttribute(d);a.v(d,null,e)}}},F:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("attributes"===c.type){var d=c.attributeName,e=c.oldValue,f=c.target,g=f.getAttribute(d);f.attributeChangedCallback(d,e,g,c.attributeNamespace)}}}};window.CustomElementsRegistry=e;e.prototype.define=e.prototype.J;e.prototype.get=e.prototype.get;e.prototype.whenDefined=e.prototype.M;e.prototype.flush=
e.prototype.C;e.prototype.polyfilled=e.prototype.L;e.prototype.enableFlush=e.prototype.h;var h=f.HTMLElement;f.HTMLElement=function(){var a=f.customElements;if(a.f){var b=a.f;a.f=null;return b}if(this.constructor)return a=a.l.get(this.constructor),g.b(a,!1);throw Error("unknown constructor. Did you call customElements.define()?");};f.HTMLElement.prototype=Object.create(h.prototype);Object.defineProperty(f.HTMLElement.prototype,"constructor",{value:f.HTMLElement});for(var h="Button Canvas Data Head Mod TableCell TableCol Anchor Area Base Body BR DataList Details Dialog Div DList Embed FieldSet Form Heading HR Html IFrame Image Input Keygen Label Legend LI Link Map Media Menu MenuItem Meta Meter Object OList OptGroup Option Output Paragraph Param Picture Pre Progress Quote Script Select Slot Source Span Style TableCaption Table TableRow TableSection Template TextArea Time Title Track UList Unknown".split(" "),
k=0;k<h.length;k++){var n=window["HTML"+h[k]+"Element"];n&&(n.prototype.__proto__=f.HTMLElement.prototype)}var t=g.createElement;g.b=function(a,b){var c=f.customElements,d=t.call(g,a),e=c.a.get(a.toLowerCase());e&&c.u(d,e,b);c.g(d);return d};g.createElement=function(a){return g.b(a,!0)};var u=g.createElementNS;g.createElementNS=function(a,b){return"http://www.w3.org/1999/xhtml"===a?g.createElement(b):u.call(document,a,b)};var p=Element.prototype.attachShadow;p&&Object.defineProperty(Element.prototype,
"attachShadow",{value:function(a){a=p.call(this,a);f.customElements.g(a);return a}});window.customElements=new e})();
}).call(this)
}

// Remove check when https://github.com/webcomponents/webcomponentsjs/issues/548 is fixed.
if (!!!window.customElements) {
  execPolyfill();
}

(function() {
  class PassField extends HTMLElement {

    constructor() {

      super();

      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <style>
        *{box-sizing:border-box}@font-face{font-family:MaryAnn;font-style:normal;font-weight:400;src:url(../assets/fonts/mary_ann-regular.woff)}@font-face{font-family:MaryAnn;font-style:normal;font-weight:500;src:url(../assets/fonts/mary_ann-medium.woff)}@font-face{font-family:MaryAnn;font-style:normal;font-weight:700;src:url(../assets/fonts/mary_ann-extrabold.woff)}.ln-c-button{text-decoration:none;display:inline-block;padding:.75rem 1.5rem;border:1px solid transparent;border-radius:1px;text-align:center;touch-action:manipulation;background-image:none;background-color:transparent}.ln-c-form-group,.ln-c-form-password{position:relative}.ln-c-button.is-disabled{color:#4c4c4c;background:#d7d7d7;pointer-events:none;opacity:.8}.ln-c-button--text-only{background:0 0;border:0;padding:0}.ln-c-field-info{font-family:MaryAnn,serif;font-weight:500;padding-bottom:.5rem;margin:0}.ln-c-label,.ln-c-password-strength-meter__value,.ln-u-h1,.ln-u-h2{font-weight:700}.ln-c-form-group{margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:2px dotted #555}.ln-c-form-password__toggle-button{font-size:16px;position:absolute;top:50%;transform:translateY(-50%);right:1rem;color:#161616;font-weight:700;text-transform:uppercase}.ln-c-label,.ln-c-text-input{font-size:18px;font-family:MaryAnn,serif}.ln-c-label{color:#4c4c4c;padding-bottom:.75rem;display:inline-block}.ln-c-label__info{color:#767676}.ln-c-text-input{width:100%;padding:.75rem;border:1px solid #afafaf;border-radius:1px;background-color:#fff}.ln-c-text-input:disabled{background-color:#f6f6f6}.ln-c-password-strength-meter{position:relative}.ln-c-password-strength-meter::after,.ln-c-password-strength-meter::before{content:'';position:absolute;top:.5rem;left:0;right:0;height:3px}.ln-c-password-strength-meter::before{background:linear-gradient(to right,#e6e6e6 0,#e6e6e6 24.75%,transparent 24.75%,transparent 25%,#e6e6e6 25%,#e6e6e6 49.75%,transparent 49.75%,transparent 50%,#e6e6e6 50%,#e6e6e6 74.75%,transparent 74.75%,transparent 75%,#e6e6e6 75%,#e6e6e6 100%)}.ln-c-password-strength-meter.is-level-1::after{background:linear-gradient(to right,#e90000 0,#e90000 24.75%,transparent 24.75%,transparent 25%,#e6e6e6 25%,#e6e6e6 49.75%,transparent 49.75%,transparent 50%,#e6e6e6 50%,#e6e6e6 74.75%,transparent 74.75%,transparent 75%,#e6e6e6 75%,#e6e6e6 100%)}.ln-c-password-strength-meter.is-level-2::after{background:linear-gradient(to right,#e90000 0,#e90000 24.75%,transparent 24.75%,transparent 25%,#f06c00 25%,#f06c00 49.75%,transparent 49.75%,transparent 50%,#e6e6e6 50%,#e6e6e6 74.75%,transparent 74.75%,transparent 75%,#e6e6e6 75%,#e6e6e6 100%)}.ln-c-password-strength-meter.is-level-3::after{background:linear-gradient(to right,#e90000 0,#e90000 24.75%,transparent 24.75%,transparent 25%,#f06c00 25%,#f06c00 49.75%,transparent 49.75%,transparent 50%,#f9b332 50%,#f9b332 74.75%,transparent 74.75%,transparent 75%,#e6e6e6 75%,#e6e6e6 100%)}.ln-c-password-strength-meter.is-level-4::after{background:linear-gradient(to right,#e90000 0,#e90000 24.75%,transparent 24.75%,transparent 25%,#f06c00 25%,#f06c00 49.75%,transparent 49.75%,transparent 50%,#f9b332 50%,#f9b332 74.75%,transparent 74.75%,transparent 75%,#6b9f01 75%,#6b9f01 100%)}.ln-c-password-strength-meter__label{margin:0;padding-top:1rem}.ln-u-hidden{display:none!important}.ln-u-visually-hidden{position:absolute;height:1px;width:1px;margin:-1px;overflow:hidden;white-space:nowrap}
        </style>
        <h2>Password input</h2>
        <div class="ln-c-form-group">
          <label for="demo-input-${this.getId()}" class="ln-c-label">
            Label ${this.getId()}
            <span class="ln-c-label__info" aria-hidden="true">*</span>
            <span class="ln-c-label__info ln-u-visually-hidden">Required</span>
          </label>
          <div class="ln-c-form-password">
            <input type="password" placeholder="Password" id="demo-input-${this.getId()}" class="ln-c-text-input" aria-describedby="password-more-info">
            <button type="button" class="ln-js-show-hide ln-c-form-password__toggle-button ln-c-button ln-c-button--text-only">
              <span class="ln-js-show-hide-text">Show</span> <span class="ln-u-visually-hidden">password</span>
            </button>
          </div>
          <!-- Added wrapper for screen readers to read this whole element
          as per aria-describedby in the input field indicate -->
          <div id="password-more-info">

            <div class="ln-c-password-strength-meter">
              <p class="ln-c-password-strength-meter__label" aria-live="polite" aria-atomic="true">
                Strength: <span class="ln-c-password-strength-meter__value">Too short</span>
              </p>
            </div>
            <!-- Little hack to force screen readers to read this as it were a separate line.
            Otherwise it reads the previous line and this once all in 1 -->
            <p class="ln-u-visually-hidden">. To show and hide password, tab forward.</p>
          </div>
        </div>
      `;

      this.addListeners();
    }

    get id() {
      return this.getAttribute('id') || null;
    }

    set id(val) {
      if (val) {
        this.setAttribute('id', val);
      }
    }

    getId() {
      // Generate an id if it isn't already
      if(!this.id) {
        this.id = Math.floor((Math.random() * 100) + 1)
      }

      return this.id;
    }

    strengthMeterListener() {
      const passwordEl = this.shadowRoot.querySelector('.ln-c-text-input')
      const strengthMeterEl = this.shadowRoot.querySelector('.ln-c-password-strength-meter')
      const strengthLevelTextEl = this.shadowRoot.querySelector('.ln-c-password-strength-meter__value')

      // This meter level calculator is for demo purposes and should not be used in real cases.
      const getLevel = (value) => {
        let level = {}
        if (value.length > 13) {
          level = { level: 'is-level-4', caption: 'Great' }
        } else if (value.length > 11) {
          level = { level: 'is-level-3', caption: 'Good' }
        } else if (value.length > 9) {
          level = { level: 'is-level-2', caption: 'Ok' }
        } else if (value.length > 7) {
          level = { level: 'is-level-1', caption: 'Bad' }
        } else {
          level = { level: '', caption: 'Too short' }
        }
        return level
      }

      passwordEl.onkeyup = () => {
        const levelObject = getLevel(passwordEl.value)

        // Modify the strength level in text
        strengthLevelTextEl.innerText = levelObject.caption

        // Update class names for the strength meter
        if (strengthMeterEl) {
          strengthMeterEl.className = `ln-c-password-strength-meter ${levelObject.level}`
        }
      }
    }

    showHidePasswordListener() {
      const passwordEl = this.shadowRoot.querySelector('.ln-c-text-input')
      const showHideLinkEl = this.shadowRoot.querySelector('.ln-js-show-hide')
      const showHideTextEl = this.shadowRoot.querySelector('.ln-js-show-hide-text')

      showHideLinkEl.onclick = (e) => {
        e.preventDefault()
        const attr = (passwordEl.getAttribute('type') === 'password' ? 'text' : 'password')
        const linkText = (passwordEl.getAttribute('type') === 'password' ? 'Hide' : 'Show')

        passwordEl.setAttribute('type', attr)
        showHideTextEl.innerText = linkText
      }
    }

    addListeners() {

      // We either initialise the meter or delete the html related to it.
      if (this.getAttribute('strength-meter') !== null && this.getAttribute('strength-meter') !== "false") {
        this.strengthMeterListener();
      } else {
        this.shadowRoot.querySelector('.ln-c-password-strength-meter').remove();
      }

      // We either initialise the show/hide or delete the html related to it.
      if (this.getAttribute('show-hide-password') !== null && this.getAttribute('show-hide-password') !== "false") {
        this.showHidePasswordListener();
      } else {
        this.shadowRoot.querySelector('.ln-c-form-password__toggle-button').remove();
      }

    }
  }

  customElements.define('password-field', PassField);

}())
