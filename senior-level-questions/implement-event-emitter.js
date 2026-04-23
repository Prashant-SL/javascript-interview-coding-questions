class EventEmitter {
    constructor() {
        this.__events__ = {};
    }

    on(event, listener) {
        if (!this.__events__[event]) { // check if event is there or not. If no,
            this.__events__[event] = []; // initalise it to empty array, so that it can accomodate listners
        }

        this.__events__[event].push(listener); // if event exists, push new listeners
        return true;
    }

    emit(event, ...args) {
        if (!this.__events__[event]) { // if event is not there, return false;
            return false;
        }

        const listeners = this.__events__[event]; // get all listeners
        [...listeners].forEach(listener => listener(...args)); // call all listeners one-by-one
        return true;
    }

    off(event, listener) {
        if (!this.__events__[event]) { // If event does not exist, return false;
            return false;
        }

        const listenerIndex = this.__events__[event].findIndex((lsn) => lsn == listener); // find index of the current listener
        if (listenerIndex === -1) { // if listener doesnt exist, return false
            return false;
        };

        this.__events__[event].splice(listenerIndex, 1); // Remove the particular listener

        if (this.__events__[event].length === 0) { // If there are no listeners, remove the event, to remove garbage
            delete this.__events__[event];
        };

        return true;
    }
}

const e = new EventEmitter();
e.on("signup:message", () => console.log("signup is done"));
e.on("signup:message", () => console.log("OTP is sent"));
e.on("signup:message", () => console.log("OTP verification is done"));
e.emit("signup:message");
e.emit("signup:message");