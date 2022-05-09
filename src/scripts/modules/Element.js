export default class Element {
  constructor(parent, options = { tag: 'div', class: null }) {
    const element = document.createElement(options.tag);
    if (options.class) element.classList.add(options.class);
    parent.append(element);
    this.node = element;
  }
}
