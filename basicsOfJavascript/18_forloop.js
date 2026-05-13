//for loop
for(let i = 0; i <=10; i++){
    let elements = i;
    console.log(elements);
        
}
for (let i = 0; i <= 5; i++){
    console.log(`outer loop running: ${i} `);
      for (let j = 0; j <=5; j++){
        console.log(`inner loop running ${j} and outer loop value ${i}`);
        
      }
}
for (let i = 1; i <= 10; i++){
      for (let j = 1; j <=10; j++){
        console.log(i + ' x ' + j + ' = ' + i*j);
      }
      console.log("break");
      
}

let array = ["hello", "yawar", "ahmad", "mir"]
for(let index=0; index<array.length; index++) {
    console.log(array[index]);
    
}

for(let i = 0; i <=10; i++){
    let elements = i;
  
    if(i == 5){
        console.log("not needed 5");
        continue;
    }
    console.log(elements);}

    for(let i = 0; i <=10; i++){
        let elements = i;
        if(i == 5){
            console.log("detected 5");
            break;  
        }
        console.log(elements);}