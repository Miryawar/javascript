let a = 100
if(a < 10){
    console.log("single digit number");
 
}
else if(a <= 99){
    console.log("double digit number");
    
}
else if(a <= 999){
    console.log("tripple digit number");
    
}
else{
    console.log("quarter digit number or more digit number");
    
}
let num = 10
if(num > 0 && num <= 100){
    console.log("positive numbers upto 100");
    
}

let b = 20
let c = "20"
//it converts string in number checks values only
if (b == c){ 
    console.log("b and c are same");
    
}
//strictly checks value and data type
if (b === c){ 
    console.log("b and c are same");
   
}else{
    console.log("not same");
    }
