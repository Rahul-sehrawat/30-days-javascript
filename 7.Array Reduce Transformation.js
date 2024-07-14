var reduce = function(nums, fn, init) {
    let finalval = init;
    for(i=0;i<nums.length;i++){
        finalval = fn(finalval,nums[i]);
    }
    return finalval;
};