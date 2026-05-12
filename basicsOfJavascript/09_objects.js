//objects in javascript are collection of key value pairs
//object literal
const object1 = {
    name : "yawar",
    age : 23,
    hobies : ["coding", "gaming", "traveling"]
   
}
//accessing object
console.log(object1.name);
console.log(object1.age);
console.log(object1.hobies);

console.log(object1["name"]);
console.log(object1["age"]);
console.log(object1["hobies"]);

console.log(Object.keys(object1))
console.log(Object.values(object1))
console.log(Object.entries(object1))

//modify value
object1.age = 24;
console.log(object1.age)


object1.greeting = function(){
    console.log("hello yawar");
    console.log(`hello user ${this.name}`);
    
    
}
console.log(object1.greeting());

//singleton
//object.create is used to create singleton objects
//const object2 = Object.create(object1)
// const user = new object1();
const user = {}

user.id = '12223'
user.name = 'mir'
user.isloggedin = false

console.log(user);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)

const obj5 = {...obj1,...obj2}
console.log(obj5)







