import CreateElement from './CreateElement';

export default class CreateTitle {
  constructor(text) {
    const title = new CreateElement(document.querySelector('.wrapper'), { class: 'header-1', tag: 'h1' });
    title.node.textContent = text;
  }
}
