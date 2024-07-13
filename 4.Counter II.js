var createCounter = function(init) {
    let val = init

    return {
        increment(){
            return ++val;
        },
        decrement(){
            return --val;
        },
        reset: ()=> val = init
    }
    
};
