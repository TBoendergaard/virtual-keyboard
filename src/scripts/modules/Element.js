export default class Element {
  constructor(parent, options) {
    const element = document.createElement(options.tag || 'div');
    if (options.class) element.classList.add(options.class);
    parent.append(element);
    this.node = element;
  }
}
