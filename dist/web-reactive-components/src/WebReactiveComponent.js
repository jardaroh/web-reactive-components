export default class WebReactiveComponent extends HTMLElement {
    constructor() {
        super();
        this.reactiveProps = {};
        this.template = ``;
        if (typeof this.setup === 'function') {
            this.setup();
        }
        if (this.template !== '') {
            this.render();
        }
    }
    setup() {
        return {};
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this.reactiveProps[name] = newVal;
    }
    render() {
        with (this.reactiveProps) {
            this.innerHTML = this.template;
        }
    }
}
//# sourceMappingURL=WebReactiveComponent.js.map