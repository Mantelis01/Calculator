function clearAll(){
    document.getElementById("result").value = "";
}

function clearOne(){
    var p=document.getElementById("result").value;
    document.getElementById("result").value=p.substring(0,p.length-1);
}

function addNumber(value){
    document.getElementById("result").value += value; 
}


function addOperator(value){
    document.getElementById("result").value += value;
}

function add(num1,num2){
    if(num1===0){
        return 0;
    }
    else if(num2===0){
        return 0;
    }
    return num1+num2;
}

function sub(num1,num2){
    if(num1===0){
        return 0;
    }
    else if(num2===0){
        return 0;
    }
    return num1-num2;
}

function mul(num1,num2){
    if(num1===0){
        return 0;
    }
    else if(num2===0){
        return 0;
    }
    return num1*num2;
}

function div(num1,num2){
    if(num1===0){
        return 0;
    }
    else if(num2===0){
        return 0;
    }
    return num1/num2;
}

const mathFunc = {
    '+': add,
    '-': sub,
    '*': mul,
    '/': div,
}
