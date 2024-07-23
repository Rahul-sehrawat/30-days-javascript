var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(()=>{
        fn(...args)
    },t);

    let cancelFn = function(){
        clearInterval(timer);
    }

    return cancelFn;
    
};