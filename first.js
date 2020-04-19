var operators = require('./add.js')

function greet(name) {
	console.log('Hello there, ' + name);
}

greet('Praveen');

console.log(operators.add(1,2));
console.log(operators.subtract(4,2));