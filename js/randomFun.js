var Fun = function(){

    function foo(col){
        console.log("Testing --> " + col.indexOf(20));
    }

    return{
        iterator: foo
    };
};