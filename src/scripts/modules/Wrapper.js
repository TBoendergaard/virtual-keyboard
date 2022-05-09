import Element from './Element';

export default class Wrapper {
  constructor() {
    const wrapper = new Element(document.body, { class: 'wrapper', tag: 'div' });
  }
}
