let s1 = document.getElementById("sq1");
s1.addEventListener("mouseover",function(){
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1> ${r} </h1>`;
})
s1.addEventListener("mouseout",function(){
    s1.innerHTML = "<h1>1</h1>";
    s1.style.backgroundColor = "white";
})
s1.addEventListener("dblclick",function(){

let r1 = Math.floor(Math.random()*256);
let r2 = Math.floor(Math.random()*256);
let r3 = Math.floor(Math.random()*256);
s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
})

let s2 = document.getElementById("sq2");
let color = "red";
s2.addEventListener("mouseleave",function(){
        s2.style.backgroundColor = "white"
    })
s2.addEventListener("mouseenter",function(){
   if(color=="red"){
       s2.style.backgroundColor = "red";
       color = "green";
   }
   else if(color=="green"){
       s2.style.backgroundColor = "green";
       color = "blue";
   }
   else{
       s2.style.backgroundColor = "blue";
       color = "red";
}
})

let s3 = document.getElementById("sq3");
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor = "white";
})
s3.addEventListener("mouseover",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;

})

let s4 = document.getElementById("sq4");
s4.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;

    let r4 = Math.floor(Math.random()*256);
    let r5 = Math.floor(Math.random()*256);
    let r6 = Math.floor(Math.random()*256);
    s2.style.backgroundColor = `rgb(${r4},${r5},${r6})`;    

    let r7 = Math.floor(Math.random()*256);
    let r8 = Math.floor(Math.random()*256);
    let r9 = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r7},${r8},${r9})`;    
})
s4.addEventListener("mouseout",function(){
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
})

let main = document.getElementById("main");
let cursor = document.getElementById("cursor");
main.addEventListener("mousemove",function(position){
console.log(position.x,position.y);
cursor.style.left = position.x + "px";
cursor.style.top = position.y + "px";

})
