//stack (primitives) and heap (objects/non-primitive)
//passing by value(stack memory no change to original value)
let name = "yawar"
let anothername = name
anothername = "mir"

console.log(name)
console.log(anothername)
//passing by reference(heap memory change reflects to original value)
let user1 = {
    name : "ahmad",
    agr : 20
}
let user2 = user1


user2.age = 30
console.log(user1.age)
console.log(user2.age)
