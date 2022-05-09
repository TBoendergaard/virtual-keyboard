import CreateInfo from './CreateInfo';
import CreateKeyboard from './CreateKeyboard';
import CreateTextOutput from './CreateTextOutput';
import CreateTitle from './CreateTitle';
import CreateWrapper from './CreateWrapper';

export default class App {
  constructor() {
    const wrapper = new CreateWrapper();
    const title = new CreateTitle('Virtual keyboard');
    this.output = new CreateTextOutput();
    const keyboard = new CreateKeyboard(this, localStorage.getItem('lang') || 'ru');
    const info = new CreateInfo();

    document.body.addEventListener('keydown', (e) => {
      e.preventDefault();
      keyboard.keyDown(e.code);
    });

    document.body.addEventListener('keyup', (e) => {
      e.preventDefault();
      keyboard.keyUp(e.code);
    });
  }

  sendKey(value) {
    this.output.sendKey(value);
  }

  sendCommand(name) {
    this.output.sendCommand(name);
  }

  switchLang(lang) {
    localStorage.setItem(
      'lang',
      lang,
    );
    this.lang = lang;
  }
}
