function clearAll(){
    document.getElementById("result").value = "";
}

function addNumber(value){
    document.getElementById("result").value += value;
}

function calculate(){
    var p=document.getElementById("result").value;
    var res=eval(p);
    document.getElementById("result").value=res;
}

function clearOne(){
    var p=document.getElementById("result").value;
    document.getElementById("result").value=p.substring(0,p.length-1);
}

function addOperator(value){
    document.getElementById("result").value += value;
}
/*
function addFunction(num1,num2){
    if(num1==""){
        num1=0;
    }
    if(num2==""){
        num2=0;
    }
    var res=num1+num2;
    return res;
}
*/