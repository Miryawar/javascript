let mydate = new Date()
console.log(mydate);
console.log(typeof mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());

let mycreateddate =new Date(2020, 0, 1, 5, 3, 2)
console.log(mycreateddate);
console.log(mycreateddate.toDateString());
console.log(mycreateddate.toTimeString());

let mycreateddate2 = new Date("2020-01-01T05:03:02")
console.log(mycreateddate2);

let mytimestamp = Date.now()
console.log(mytimestamp);



