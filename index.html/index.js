let display = document.getElementById("display");
let justCalculated = false; // Track if the last action was calculation

function append(value){
    if(justCalculated){ // If last action was calculation, start fresh
        display.innerText = value;
        justCalculated = false;
        return;
    }

    if(display.innerText === "0" && value !== "."){
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay(){
    display.innerText = "0";
    justCalculated = false;
}

function deleteLast(){
    if(display.innerText.length > 1){
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

function calculate(){
    try{
        display.innerText = eval(display.innerText);
        justCalculated = true; // Mark that a calculation just happened
    } catch{
        display.innerText = "Error";
        justCalculated = false;
    }
}
