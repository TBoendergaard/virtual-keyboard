import Info from './Info';
import Keyboard from './Keyboard';
import TextOutput from './TextOutput';
import Title from './Title';
import Wrapper from './Wrapper';

export default class App {
  constructor() {
    const wrapper = new Wrapper();
    const title = new Title('Virtual keyboard');
    this.output = new TextOutput();
    const keyboard = new Keyboard(this, localStorage.getItem('lang') || 'ru');
    const info = new Info();

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
