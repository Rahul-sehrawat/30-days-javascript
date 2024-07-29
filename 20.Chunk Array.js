var chunk = function(arr, size) {
    let chunkarr = [];

    for(let i =0 ;i < arr.length ; i +=size){
        chunkarr.push(arr.slice(i,i+size));
    }
    return chunkarr ;
    
};