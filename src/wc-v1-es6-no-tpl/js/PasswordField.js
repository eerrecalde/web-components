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
