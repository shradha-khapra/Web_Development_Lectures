(function(){

    var list=[];
    btn=document.getElementById('btn');
    inp=document.getElementById('inp');
    res=document.getElementById('res');

    btn.onclick=function(){
        list.push(inp.value);
        inp.value=null;
        res.innerHTML=null;
        for(var i=0;i<list.length;i++)
            res.innerHTML=res.innerHTML+`<li>${list[i]}</li>`;
    }
    btn2.onclick=function(){
        res.innerHTML=null;
        for(var i=list.length-1;i>=0;i--)
            list.pop();
    }
})();