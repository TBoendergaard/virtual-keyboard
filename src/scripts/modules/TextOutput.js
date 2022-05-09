import Element from './Element';

export default class TextOutput {
  value = '';

  constructor(app) {
    this.app = app;
    const textarea = new Element(document.querySelector('.wrapper'), { class: 'output', tag: 'textarea' });
    this.el = textarea.node;
    // this.el.onkeydown = (e) => { console.log('onkey ', e.code); };
  }

  focus() {
    this.el.focus();
  }

  sendKey(val, caret = this.getCaretPos()) {
    let value = this.getValue();

    const carStart = caret.start < 0 ? 0 : caret.start;
    const carEnd = caret.end;

    const before = value.slice(0, carStart);
    const after = value.slice(carEnd, value.length);

    value = before + val + after;
    const newCarPos = before.length + val.length;

    this.outputValue(value, newCarPos);
  }

  sendCommand(name) {
    const value = this.getValue();
    const caret = this.getCaretPos();

    if (name === 'Tab') this.sendKey('    ');
    if (name === 'Enter') this.sendKey('\r');

    const navKeys = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

    // if (navKeys.includes(name)) {

    // }

    if (name === 'Backspace') {
      if ((caret.end - caret.start) > 0) this.sendKey('');
      else this.sendKey('', { start: caret.start - 1, end: caret.end });
    }
    if (name === 'Delete') {
      if ((caret.end - caret.start) > 0) this.sendKey('');
      else this.sendKey('', { start: caret.start, end: caret.end + 1 });
    }

    // this.outputValue(value);
  }

  getCaretPos() {
    return { start: this.el.selectionStart, end: this.el.selectionEnd };
  }

  setCaretPos(index) {
    this.el.selectionStart = index;
    this.el.selectionEnd = index;
  }

  getValue() {
    return this.el.value;
  }

  outputValue(value, caretPos) {
    this.el.value = value;
    this.setCaretPos(caretPos);
    setTimeout(() => { this.focus(); }, 50);
  }
}
