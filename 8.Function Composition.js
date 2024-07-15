var compose = function(functions) {

    if(functions.length == 0){
        return function(x){
            return x;
        }
    }
    
    return function(x) {
        let result = x;
        for(i=functions.length-1;i>=0;i--){
            result = functions[i](result)
        }
        return result

        
    }
};