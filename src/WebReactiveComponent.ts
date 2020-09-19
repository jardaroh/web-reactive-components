import { obs, watch } from 'reactivity/src/index';

export default class WebReactiveComponent extends HTMLElement {
  private reactiveProps: { [key: string]: any } = {};

  public template: string = ``;

  constructor() {
    super();

    if (typeof this.setup === 'function') {
      this.setup();
    }

    if (this.template !== '') {
      this.render();
    }
  }

  setup(): { [key: string]: any } {
    return {};
  }

  public attributeChangedCallback(name: string, oldVal: any, newVal: any) {
    this.reactiveProps[name] = newVal;
  }

  private render() {
    // @ts-ignore
    with(this.reactiveProps) {
      this.innerHTML = this.template;
    }
  }
}
