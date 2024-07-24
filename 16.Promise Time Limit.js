var timeLimit = function(fn, t) {
    
    return async function(...args) {
        let originalPromise = fn(...args);
        let newPromise = new Promise((res,rej) =>{
            setTimeout(()=>{
                rej("Time Limit Exceeded")
            },t);
        })
        return Promise.race([originalPromise,newPromise]);
    }
};