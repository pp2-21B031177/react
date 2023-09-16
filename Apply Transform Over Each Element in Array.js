var map = function(arr, fn) {
    let result = []; 

    for (let i = 0; i < arr.length; i++) {
        let returnedArray = fn(arr[i], i); 
        result.push(returnedArray);
    }
    return result; 
};