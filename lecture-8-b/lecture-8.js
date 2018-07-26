(function(){
    //ONE
    function main(){
        "use strict";
        function display()
        {console.log(this);}    //undefined
        display();
    }
    main();
})();
(function(){
    //TWO
    function main(){
        console.log(this);    //window
        function display()
        {"use strict";}
        display();
    }
    main();
})();
(function(){
    //THREE
    function main(){

        function display()
        {  "use strict";
            console.log(this);}    //undefined
        display();
        console.log(this);     //window
    }
    main();
})();