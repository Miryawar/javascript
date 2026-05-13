//define function
function saymyname(){
    console.log("hello mir"); 
}
saymyname()//call function

function addTwoNumbers(num1, num2)//creating function with parameters
{
   console.log(num1 + num2);//body of function
   let result = num1 + num2
   console.log("Result :",result);
   return result
   //return num1 + num2
   //result = addTwoNumbers(2,4)
   //console.log(result); //undefined
   
}
    
addTwoNumbers(3,2)//passing arguments

// ligic in function
function loginmsg(username){
    if (username === undefined){
        console.log(`please enter user name`);
        return
    }
       return `${username} just loged in`
 
}
console.log(loginmsg("yawar"))
console.log(loginmsg())
console.log(loginmsg("mir"))
// undefind number of parameters
function calculateCartPrice(...num1){
return num1
}
console.log(calculateCartPrice(100,200,300));

//handling objects in fnctions
const user = {
    username : "mir",
    price : 200
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)
handleObject({
    username : "dar",
    price : 100
})
//handle arrays in functions
const arr = [100,200,300,400]

function accessarrelement(anyarray){
    return anyarray
}
console.log(accessarrelement(arr[1]));

