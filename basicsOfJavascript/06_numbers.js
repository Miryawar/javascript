let score = 200
console.log(score)
console.log(score.toString().length);
console.log(score.toFixed(1));
//precision function is used to round the number to the specified number of digits
const number = 123.29837
console.log(number.toPrecision(2));
console.log(number.toPrecision(3));
console.log(number.toPrecision(4));
console.log(number.toPrecision(5));
//toLocaleString is used to format a number according to the locale of the user
const hundreads = 1000000
console.log(hundreads.toLocaleString());
console.log(hundreads.toLocaleString("en-IN"));
//Math is a built-in object that has properties and methods for mathematical constants and functions
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.3));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));
console.log(Math.pow(4, 2));
console.log(Math.min(1,2,3,4));
console.log(Math.max(1,2,3,4));
console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5)+1);

let min = 10
let max = 20
console.log(Math.floor(Math.random()*(max-min))+min);
















