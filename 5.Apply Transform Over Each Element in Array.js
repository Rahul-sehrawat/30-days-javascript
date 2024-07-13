var map = function(arr, fn) {
    let newArray = [];
    for(i=0;i<arr.length;i++){
        newArray[i] = fn(arr[i],i);
    }
    return newArray;
};