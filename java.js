let firstOperand = ''
let secondOperand = ''
let currentOperation = null;
let shouldResetScreen = false

const numberButton = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.getElementById('equal-btn')
const clearButton = document.getElementById('clear-btn')
const deleteButton = document.getElementById('delete-btn')
const pointButton = document.getElementById('point-btn')
const currentOperationScreen = document.getElementById('currentOperationScreen')
const lastOperationScreen = document.getElementById('lastOperationScreen')

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteCurrentNumber);

function divide(a, b) {
	return a / b
};

function multiply(a, b) {
	return a * b
};

function subtract(a, b) {
	return a - b
};

function add(a, b) {
	return a + b
};

function operate(operator, a, b) {
	a = Number(a);
	b = Number(b);
	switch (operator) {
		case '+':
			return add(a, b);
		case '−':
			return subtract(a, b);
		case '×':
			return multiply(a, b);
		case '÷':
		if (b === 0) return "(ಠ_ಠ)";
		else return divide(a, b);
		default:
			return null;
	}
};

numberButton.forEach(function(button) {
	button.addEventListener('click', function() {
		appendNumber(button.textContent)
	})
});

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

equalButton.addEventListener('click', () => {
	if(currentOperation === null) {
		return 
	} else {
	secondOperand = currentOperationScreen.textContent
	lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} = `;
	answer = `${operate(currentOperation, firstOperand, secondOperand)}`;
	currentOperationScreen.textContent = Math.round(answer * 100) / 100
	}
});

pointButton.addEventListener('click', () => {
	if (currentOperationScreen.textContent === '0' || currentOperationScreen.textContent === '') {
		currentOperationScreen.textContent = '0.'
	}
	if (currentOperationScreen.textContent.includes('.')) return
	appendNumber('.');
});

function appendNumber(number) {
	if (currentOperationScreen.textContent === '0' || shouldResetScreen) 
    resetScreen()
	currentOperationScreen.textContent += number
};

function setOperation(operator) {
	firstOperand = currentOperationScreen.textContent
	currentOperation = operator
	lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
	resetScreen();
	currentOperationScreen.textContent = '';
	shouldResetScreen = true;
};

function deleteCurrentNumber() {
	currentOperationScreen.textContent = currentOperationScreen.textContent.toString().slice(0,-1);
	if (currentOperationScreen.textContent.toString().length === 0) return currentOperationScreen.textContent = '0';
};

function resetScreen() {
	currentOperationScreen.textContent = '';
	shouldResetScreen = false;
};

function clear() {
	currentOperationScreen.textContent = '0';
	lastOperationScreen.textContent = '';
	firstOperand = '';
	secondOperand = '';
	currentOperation = null;
};