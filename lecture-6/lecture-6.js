//set to ECMAScript 6
//IIFE
(function(){
    console.log("first statement of the IIFE");
    //CLOSURE and FUNCTION-DECLARATION
    function parent(){
        var x=5;
        function child(){
            console.log("due to CLOSURE you can access x: "+ x);
        }
        return child;
    }
    parent()();
    //FUNCTION-EXPRESSION
    var xyz=function(){
        console.log("xyz");
    };
    xyz();
})();