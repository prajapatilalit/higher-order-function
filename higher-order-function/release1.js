function each(array, fn){
    for(var i=0; i< array.length; i++){
        fn(array[i]);
    }
}
each([4,1,3,7], function(val){
    console.log(val);
});

each([4,1,3,7], function(val){
    console.log(val*2);
});

