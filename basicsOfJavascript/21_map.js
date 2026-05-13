//map //for in loop is not applicable to map insted we use for of loop
const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of America")
console.log(map);

for (const [key,value] of map) {
    console.log(key);
    console.log(value)  
}

const nums = [1,2,3,4,5,6,7,8,9,10]
const newnos = nums.map((num) => {return num +10})
console.log(newnos);


//channing of methods
const nwnums = nums.map((num) => num * 10 )
                   .map((num) => num + 1 )
                   .filter((num) => num >= 40)
   console.log(nwnums);
   