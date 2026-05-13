//scope of variables
var a = 10 //can be changed and acced anywhere
let b = 20  //global scope
const c = 30 //global scope

if (true){
   var a = 100 //can be acced outside of body
   console.log("inner value:", a);
   
   let b = 200 //cant be acced outside
   console.log("inner value:", b);

   const c = 300 //cant be acced outside
   console.log("inner value:", c);
}
//printing  global variables 
console.log(a); //inner and outer is same scope undefined
console.log(b);
console.log(c);

function one(){
    let name = "yawarmir"
    console.log(`my name is ${name}`);

    function two(){
        let surname = "mir"
        console.log(name);//variable of main function can
        //be acced by inner function 
        
    }
    two()
    //console.log(surname);//main function cant access inner function
}
one()