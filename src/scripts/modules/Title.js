import Element from './Element';

export default class Title {
  constructor(text) {
    const title = new Element(document.querySelector('.wrapper'), { class: 'header-1', tag: 'h1' });
    title.node.textContent = text;
  }
}
