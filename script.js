//initialize variables
let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

function appendNumber(number){
    // check if last character was an operator
    if (!operator && !display.value.includes('.') && number === '.') {
        display.value += number;
    } 
    else if(!operator && display.value === '') {
        return;
    } 
    else {
        // Append the number to display
        display.value = display.value + number;
    }
} 

function appendOperator(op){
    //Store the current number and operator
    operand1 = display.value;
    operator = op;
    display.value = ''; //clear the display for the next number
}

function clearDisplay() {
    display.value = '';
    operand1 = '';
    operand2 = '';
    operator = '';
}

function calculate(){
    // Check if the input is a valid number
    const regex = /^[+-]?\d+(\.\d+)?$/;
    if (!regex.test(display.value)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }
    //perform the operation based on the stored operator
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
            if (parseFloat(operand2) !== 0) {
                display.value = parseFloat(operand1) / parseFloat(operand2);
            } else {
                    alert("Cannot divide by zero");
            }
            break;
        default:
            break;
     }        
}
