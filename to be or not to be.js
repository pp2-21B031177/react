var expect = function(val) {
    var result = {
    toBe:  function(x){
        if(val === x){
            return true;
        } else {
            throw new Error("Not Equal");
        }
    },
    notToBe:  function(y){
        if(val !== y){
            return true;
        } else{
            throw new Error("Equal");
        }
    }
  }

    return result;
};