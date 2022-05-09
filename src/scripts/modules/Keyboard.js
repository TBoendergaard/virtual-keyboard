import { keysLayout, keys, keysParams } from './global';
import Element from './Element';
import Key from './Key';

export default class Keyboard {
  buttons = {};

  holded = {
    Shift: false,
    CapsLock: false,
  };

  holdableKeys = ['ShiftLeft', 'ControlLeft', 'AltLeft', 'ShiftRight'];

  langSwitchKeys = ['Control', 'Alt'];

  constructor(app, lang) {
    this.app = app;
    this.lang = lang;
    const layout = new Element(document.querySelector('.wrapper'), { class: 'keyboard' });

    keysLayout.forEach((row) => {
      const line = new Element(layout.node, { class: 'keyboard__row' });

      row.forEach((key) => {
        const buttonkeysParams = {
          values: keys[key],
          styles: (keysParams[key]) ? keysParams[key].style : null,
          type: (keysParams[key]) ? keysParams[key].type : null,
          callback: () => {
            this.keyClick(keys[key].code);
          },
        };

        const button = new Key(line.node, { class: 'keyboard__key' }, buttonkeysParams, lang);
        const { code } = keys[key];
        this.buttons[code] = button;
      });
    });
  }

  keyClick(code) {
    const button = this.buttons[code];

    if (button.type === 'Functional') {
      this.handleFunctionalKeys(code, 'keyClick');
    } else if (button.type === 'Command') this.app.sendCommand(code);
    else this.app.sendKey(button.value);
  }

  keyDown(code) {
    const button = this.buttons[code];
    if (!button) return;
    button.keyDown();

    if (button.type === 'Functional') {
      this.handleFunctionalKeys(code, 'keyDown');
    } else if (button.type === 'Command') this.app.sendCommand(code);
    else this.app.sendKey(button.value);
  }

  keyUp(code) {
    const button = this.buttons[code];
    if (!button) return;
    button.keyUp();

    if (button.type === 'Functional') {
      this.handleFunctionalKeys(code, 'keyUp');
    }
  }

  handleFunctionalKeys(code, callFrom) {
    if (code === 'CapsLock') {
      if (callFrom !== 'keyDown') this.handleCapsLock();
    }

    if (this.holdableKeys.includes(code)) {
      const name = code.replace('Left', '').replace('Right', '');
      let state;
      if (callFrom === 'keyDown') state = true;
      if (callFrom === 'keyUp') state = false;
      if (callFrom === 'keyClick') state = !this.holded[name];

      this.handleHoldableKey(code, state);
    }

    if (this.holded[this.langSwitchKeys[0]] && this.holded[this.langSwitchKeys[1]]) {
      this.switchLang();
      this.handleHoldableKey(this.langSwitchKeys[0], false);
      this.handleHoldableKey(this.langSwitchKeys[1], false);
    }

    if (callFrom === 'keyUp') this.switchLang.alreadySwitched = false;
  }

  handleHoldableKey(code, state) {
    const keyName = code.replace('Left', '').replace('Right', '');
    if (this.holded[keyName] === state) return;
    this.holded[keyName] = state;

    const buttonCode = `${keyName}Left`;
    this.buttons[buttonCode].led = state;
    this.buttons[buttonCode].lightLed();

    if (keyName === 'Shift') this.redrawLayout();
  }

  handleCapsLock() {
    this.holded.CapsLock = !this.holded.CapsLock;
    this.buttons.CapsLock.led = this.holded.CapsLock;
    this.buttons.CapsLock.lightLed();

    this.redrawLayout();
  }

  switchLang() {
    this.lang = (this.lang === 'en') ? 'ru' : 'en';
    this.redrawLayout();

    this.app.switchLang(this.lang);
  }

  redrawLayout() {
    const upperCase = { CapsLock: this.holded.CapsLock, Shift: this.holded.Shift };
    Object.values(this.buttons).forEach((button) => {
      button.redrawCaption(this.lang, upperCase);
    });
  }
}
