var expect = function(val) {

    return{
    toBe(val2){
        if(val2 ===val) return true;
        else throw new Error("Not Equal");
    },

    notToBe(val2){
        if(val2 !==val) return true;
        else throw new Error("Equal"); 
     }
    }
    
};