import Element from './Element';

export default class Info {
  constructor() {
    const info1 = new Element(document.querySelector('.wrapper'), { class: 'info', tag: 'span' });
    const info2 = new Element(document.querySelector('.wrapper'), { class: 'info', tag: 'span' });

    info1.node.textContent = 'Keyboard was created on Windows';
    info2.node.textContent = 'To switch the language combination: left ctrl + alt';
  }
}
