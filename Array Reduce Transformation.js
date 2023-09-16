var reduce = function(nums, fn, init) {
    if (!nums.length) return init;

    let acc = init;
    for (let e of nums) {
        acc = fn(acc, e);
    }
    return acc;
};