const display = document.getElementById("display");

function Display(input){
    display.value += input;
}

function Clear(){
    display.value = "";
}

function calculateFunction(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}


