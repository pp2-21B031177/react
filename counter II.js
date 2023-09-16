var createCounter = function(init) {
    var value = init;
    var result = {
        increment: function() {
            value++;
            return value;
        },
        decrement: function() {
            value--;
            return value;
        },
        reset: function() {
            value = init;
            return value;
        }
    }
    return result;
};