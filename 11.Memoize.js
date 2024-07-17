function memoize(fn) {
    const cache = {};  // object/map
    
    return function(...args) {
        const key = JSON.stringify(args); //2,3
        if(key in cache){        // '2,3' : 5
            return cache[key];   //5
        }
        // cache[key] = fn(...args)  // sum( 2,3)
        // return cache[key]

        const res = fn.apply(this, args);
        cache[key] = res;

        return res;
        
    }
}