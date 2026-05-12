//strings and string methods
let name = "miryawar"
let play = "cricket"
console.log(`hello my name is ${name} and i am playing ${play}`);

const newname = new String("miryawar")

console.log(newname[0])//character at
console.log(newname.__proto__)//string prototype
console.log(newname.length)//string length
console.log(newname.toUpperCase())//convert to uppercase
console.log(newname.charAt(2))//char at index
console.log(newname.indexOf("i"))//index of character
console.log(name.replace("yawar", "ahmad"))//replace portion of string
console.log(name.includes("yawar"))//checks either string is present or not
console.log(name.split("y"))//split at using sperator and limit

