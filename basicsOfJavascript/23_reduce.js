//using reduce method
const mynums  =[1,2,3]

const mytotal = mynums.reduce(function(acc, currval){
    console.log(`acc : ${acc} and cerrval : ${currval}`);
    return acc + currval
 
}, 0)

//same work using arrow function
const total = mynums.reduce( (acc, currval) => acc+currval)
console.log(total);


