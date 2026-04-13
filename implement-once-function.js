function once (cb) {
    let called = false;
    let result;

    return function () {
        if (!called) {
            result = cb();
            called = true;
        }
        return result;
    }
}
const init = once(() => {
  console.log("Initialized");
  return 42;
});

init(); // "Initialized"
init();
init();
