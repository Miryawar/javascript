//for of loop
// ["","",""]//strings in array
// [{},{},{}]//objects in array

const arr = [1,2,3,4,5]
    for(const num of arr){
        console.log(num);  
}

const greet = "hello world"
for (const element of greet) {
    console.log(element); 
}


//for in loop
const object = { //for of loop is not applicable to objects instead we use for in loop
    game1 : 'cargame', 
    game2 : 'bikegame',
    game3 : 'cyclegame'
}
for (const key in object) {
   console.log(key);
   console.log(object[key]);   
}

const programming = ["js" ,"c++", "java", "python"]
for (const key in programming) {
   console.log(key);
   console.log(programming[key]);
}


//for each loop
let array1 = [1,2,3,4,5,6,7,8,9]
array1.forEach(elements => {
    console.log(elements);    
})

array1.forEach(function (elements) {
    console.log(elements); 
})
array1.forEach((item, index, arr) => {
    console.log(item,index, arr);
    
})

const cooding = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename : "java",
        languagefilename : "java"
    },
    {
        languagename : "python",
        languagefilename : "py"
    }

]
cooding.forEach ((item) =>{
    console.log(item.languagename);
    console.log(item.languagefilename);    
})
 
const values = programming.forEach((items) =>{
   console.log(items);
     return items
})
console.log(values);//nothing is returned

const newno = []
array1.forEach((num) =>{
    if(num > 4){
        newno.push(num)
    }
})
console.log(newno);












