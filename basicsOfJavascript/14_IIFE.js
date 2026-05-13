//Immediately invoked function expression(IIFE)
(function ok(){
    console.log(`db connected`);
    
}) ();


(function ok(name){
    console.log(`db connected ${name}`);
    
}) ("yawar");


(function aurcode(){
    console.log(`db connected 1`);
    
}) ()