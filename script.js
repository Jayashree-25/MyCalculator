let display = document.getElementById('display');
let operand1 = ''; //first element invlved
let operand2 = ''; //second element involved
let operator = ''; //operator invloved

function appendNumber(number){ //add the no. to display
    display.value = display.value + number;
}

function appendOperator(op){
    operand1 = display.value;
    operator = op;
    display.value = ' ';
}

function clearDisplay(){
    display.value = ' ';
    operand1 = ' ';
    operand2 = ' ';
    operator = ' ';
}

function calculate(){
    const regex = /^\s*([+-]?\d+(\.\d+)?)\s*$/;

    // Check if the input matches the regular expression
    if (!regex.test(display.value)) {
        alert("Invalid input");
        return;
    }

   // const regex = /^[+-]?\d+(\.\d+)?$/;
    // const regex = /^[+-]?\d+(\.\d+)?$/;
    // if(!regex.test(display.value)){
    //     alert("Invalid input");
    //     return;
    // }

switch(operator){
    case '+':
        operand2 = display.value;
        display.value = parseFloat(operand1) + parseFloat(operand2);
        break;

    case '-':
        operand2 = display.value;
        display.value = parseFloat(operand1) - parseFloat(operand2);
        break;

    case '*':
        operand2 = display.value;
        display.value = parseFloat(operand1) * parseFloat(operand2);
        break;

    case '/':
        operand2 = display.value;
        if(parseFloat(operand2)!=0){
            display.value = parseFloat(operand1) / parseFloat(operand2);
        }
        else{
            alert("cannot divide by zero");
        }
        break;

    default:
        break;

}
}