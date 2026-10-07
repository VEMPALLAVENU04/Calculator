const display = document.getElementById("display");
const result = document.getElementById("result");

function appendValue(value){

    display.value += value;

    liveCalculate();

}

function clearDisplay(){

    display.value="";

    result.innerHTML="";

}

function deleteLast(){

    display.value=display.value.slice(0,-1);

    liveCalculate();

}

function calculate(){

    try{

        display.value=eval(display.value);

        result.innerHTML="";

    }

    catch{

        display.value="Error";

        result.innerHTML="";

    }

}

function liveCalculate(){

    if(display.value===""){

        result.innerHTML="";

        return;

    }

    try{

        result.innerHTML="= "+eval(display.value);

    }

    catch{

        result.innerHTML="";

    }

}

document.addEventListener("keydown",function(e){

    const key=e.key;

    if((key>='0' && key<='9') || "+-*/.%".includes(key)){

        appendValue(key);

    }

    else if(key==="Enter"){

        e.preventDefault();

        calculate();

    }

    else if(key==="Backspace"){

        deleteLast();

    }

    else if(key==="Escape"){

        clearDisplay();

    }

});