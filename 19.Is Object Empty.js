var isEmpty = function(obj) {

    if(Array.isArray(obj)){
       return   obj.length === 0;
    }
    else{
        arr = Object.keys(obj);
         return  arr.length === 0;
    }
    
};