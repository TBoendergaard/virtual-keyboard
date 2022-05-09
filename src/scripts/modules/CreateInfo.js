import CreateElement from './CreateElement';

export default class CreateInfo {
  constructor() {
    const info1 = new CreateElement(document.querySelector('.wrapper'), { class: 'info', tag: 'span' });
    const info2 = new CreateElement(document.querySelector('.wrapper'), { class: 'info', tag: 'span' });

    info1.node.textContent = 'Keyboard was created on Windows';
    info2.node.textContent = 'To switch the language combination: left ctrl + alt';
  }
}
