export default class CreateElement {
  constructor(parent, options) {
    const ELEMENT = document.createElement(options.tag || 'div');
    if (options.class) ELEMENT.classList.add(options.class);
    parent.append(ELEMENT);
    this.node = ELEMENT;
  }
}
