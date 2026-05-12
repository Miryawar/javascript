//defining variables using var let and const
const accountId = 12345;
let accountName = "yawar";
var accountBalance = 1000;
console.log(accountId);
console.log(accountName);
console.log(accountBalance);
console.table([accountId, accountName, accountBalance]);

// accountId = 54321; not allowed   

// accountId = 43521; not allowed
accountName = "yawar mir";
accountBalance = 2000;
console.log(accountName);
console.log(accountBalance);
console.table({accountId, accountName, accountBalance});

