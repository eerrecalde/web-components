class PasswordField extends Polymer.Element {

  static get is() {
    return 'password-field'
  }

  static get id() {
    return this.getAttribute('id') || null;
  }

  static set id(val) {
    if (val) {
      this.setAttribute('id', val);
    }
  }

  connectedCallback() {
    super.connectedCallback();

    this.addListeners();
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

customElements.define(PasswordField.is, PasswordField);
