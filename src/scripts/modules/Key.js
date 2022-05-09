import Element from './Element';

export default class Key extends Element {
  active = false;

  led = false;

  constructor(parent, options, params, lang) {
    super(parent, options);

    this.values = params.values;

    this.type = params.type || 'default';

    if (this.type !== 'default') this.node.classList.add('keyboard__key--functional');
    if (params.styles) this.node.classList.add(params.styles);

    this.value = params.values[lang] || params.values.en;
    this.node.innerHTML = this.value;

    let fireInterval = null;
    let timeout = null;

    this.node.onmousedown = () => {
      this.active = true;
      this.highLight();
      params.callback();
      if (this.type !== 'Functional') {
        timeout = setTimeout(() => {
          fireInterval = setInterval(params.callback, 75);
        }, 500);
      }
    };

    this.node.onmouseup = () => {
      this.active = false;
      this.highLight();
      clearTimeout(timeout);
      clearInterval(fireInterval);
    };

    this.node.onmouseout = this.node.onmouseup;
  }

  lightLed() {
    if (this.led) this.node.classList.add('keyboard__key--led');
    else this.node.classList.remove('keyboard__key--led');
  }

  highLight() {
    if (this.active) this.node.classList.add('keyboard__key--active');
    else this.node.classList.remove('keyboard__key--active');
  }

  keyUp() {
    this.active = false;
    this.highLight();
  }

  keyDown() {
    this.active = true;
    this.highLight();
  }

  redrawCaption(lang, upCase) {
    if (this.type !== 'default') return;

    const prefix = `${lang}${upCase.Shift ? 'Up' : ''}`;
    if (upCase.CapsLock && upCase.Shift) {
      this.value = this.values[prefix].toLowerCase();
    } else if (upCase.CapsLock) {
      this.value = this.values[lang].toUpperCase();
    } else {
      this.value = this.values[prefix];
    }

    this.node.innerText = this.value;
  }
}
