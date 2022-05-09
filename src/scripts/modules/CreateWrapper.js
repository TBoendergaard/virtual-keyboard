import CreateElement from './CreateElement';

export default class CreateWrapper {
  constructor() {
    const wrapper = new CreateElement(document.body, { class: 'wrapper', tag: 'div' });
  }
}
