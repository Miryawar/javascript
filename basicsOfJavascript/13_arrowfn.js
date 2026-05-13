//use of this keyword
const user = {
    urname : "yawar",
    age : 22,

    welcomemsg: function(){
        console.log(`${this.urname} , welcome to website`);
        console.log(this)
    }
}
user.welcomemsg()
user.urname = "mir"
user.welcomemsg()
console.log(this);

//arrow function
const fun = () =>{
    let user = "dar"
    console.log(user);  
}
fun()

const fun1 = (num1,num2) =>{
 sum = num1+num2
 console.log(sum);
 
}
fun1(1,2)
//impicit arrow function

const addtwo = (num1,num2) => (num1 + num2)

console.log(addtwo(3,4));