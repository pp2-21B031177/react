var once = function(fn) {
    let result;
    let called = false;
    return function(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
            return result;
        }
    };
};