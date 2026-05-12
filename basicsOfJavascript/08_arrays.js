//array is an object used to store multiple elements of varoius data types
const myarray = [0,1,2,3,4,5]
console.log(myarray);
console.log(myarray[2]);

const fruits = ["apple", "banana", "oragne"]
console.log(fruits);

let array = new Array(1,2,3,4)
console.log(array);

//array methods
array.push(5)
array.push(6)
console.log(array);

array.pop()
array.pop()
console.log(array);

//similar to push pop but used to add and remove ist element in array
array.unshift(8)
array.shift()
console.log(array);

console.log(array.includes(6))
console.log(array.indexOf(3));
console.log(array.values(0));

const newarray  = array.join()
console.log(newarray);
console.log(array.slice(0,2));//it only splits the main array
console.log(array.splice(0,2));//it manuplates thr original array and removes the splice part
console.log(array);

console.log(newarray.length)//after converts to string it includes comas as well
console.log(newarray);

let heroes = ["yawar", "ahmad", "mir"]
let villains = ["ali", "hassan", "khan"]
heroes.push(villains)
console.log(heroes);
console.log(heroes[3]);

let myplayers = heroes.concat(villains)
console.log(myplayers);

console.log(Array.isArray("miryawar")); //check if is array
console.log(Array.from("miryawar")); //make array

let score1 = 100, score2 = 200, score3 = 300 //make array from multiple variables
console.log(Array.of(score1, score2, score3));
















