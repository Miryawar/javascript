//filter in foreach loops
let array2 = [1,2,3,4,5,6,7,8,9]
const newnums = array2.filter((num) => num > 4)
console.log(newnums);
 
let newnum = array2.filter( (num) => { //using scope parenthisis we use return keyword
    return num > 4
})
console.log(newnum);
