export default class Reactive {
    constructor() {
        this.watchers = new Set();
    }
    notifyWatchers(oldVal, newVal) {
        this.watchers.forEach((watcher) => {
            watcher(oldVal, newVal);
        });
    }
    ;
    get(obj, prop, receiver) {
        return obj[prop];
    }
    set(obj, prop, value) {
        obj.handler.notifyWatchers(obj.value, value);
        obj[prop] = value;
        return true;
    }
    addWatcher(f) {
        this.watchers.add(f);
    }
}
//# sourceMappingURL=Reactive.js.map