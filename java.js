function divide(a, b) {
	return a / b
} ;

function multiply(a, b) {
	return a * b
} ;

function subtract(a, b) {
	return a - b
} ;

function add(a, b) {
	return a + b
} ;

let operator = '';
let a = '';
let b = '';

function operate(operator, a, b) {
	a = Number(a);
	b = Number(b);
	switch (operator) {
		case '+':
		  return add(a, b)
		case '−':
		  return subtract(a, b)
		case '×':
		  return multiply(a, b)
		case '÷':
		  if (b === 0) return null
		  else return divide(a, b)
		default:
		  return null
	  }
};

const numberButton = document.querySelectorAll('.number')
const operatorButton = document.querySelectorAll('.operator')
const equalButton = document.getElementById('equal-btn')
const clearButton = document.getElementById('clear-btn')
const deleteButton = document.getElementById('delete-btn')
const currentOperationScreen = document.getElementById('currentOperationScreen')
const lastOperationScreen = document.getElementById('lastOperationScreen')
const multiplybtn = document.getElementById('multiply-btn')

numberButton.forEach(function(button) {
	button.addEventListener('click', function(){
		appendNumber(button.textContent)
	})
});

function appendNumber(number) {
	currentOperationScreen.textContent += number
	
}
 multiplybtn.addEventListener('click', () => {
	const a = currentOperationScreen.textContent;
	const operator = '×';
	resetCurrentOperationScreen();
 });

function resetCurrentOperationScreen(){
	currentOperationScreen.textContent = '';

 }

 equalButton.addEventListener('click', () => {
	 let b = currentOperationScreen.textContent;
	 resetCurrentOperationScreen();
	 console.log(operate(operator, a, b));;
 })



function setOperation(operator) {

	currentOperationScreen.textContent = operator;

}