const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const currentDisplay = document.querySelector('.current-value');
const resultDisplay = document.querySelector('.result-value');
const equalButton = document.querySelector('.equal');

class Calculator {
    constructor(current, result) {
        this.currentDisplay = current;
        this.resultDisplay = result;
        this.clear();

    }

    clear() {
        this.currentOperand = '';
        this.resultOperand = '0';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        this.calculation();
    }

    appendOperation(operation) {
        let currentString = this.currentOperand;
        if(currentString.charAt(currentString.length - 1 ) === operation) return;
        this.currentOperand += operation.toString();
    }


    calculation() {

        let num = this.currentOperand.toString();
        this.resultOperand = eval(num);

    }
    
    equalOperation(){
        this.calculation();
        this.currentOperand = this.resultOperand.toString();
    }

    updateDisplay() {
        if(this.currentOperand=== ''){
            this.resultOperand= '0';
           }
        this.currentDisplay.innerText = this.currentOperand;
        this.resultDisplay.innerText = this.resultOperand;
      
    }

}


const calculator = new Calculator(currentDisplay, resultDisplay);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendOperation(button.innerText);
        calculator.updateDisplay();

    })
})

equalButton.addEventListener('click', button => {
    calculator.equalOperation();
    calculator.updateDisplay();
    
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})